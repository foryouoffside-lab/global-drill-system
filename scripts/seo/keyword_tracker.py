"""Keyword registry + performance tracker.

  python scripts/seo/keyword_tracker.py build              # registry.csv from per-page research logs
  python scripts/seo/keyword_tracker.py snapshot [days]    # GSC page+query metrics for every registry row
  python scripts/seo/keyword_tracker.py compare [old] [new]  # diff two snapshots (default: last two)
"""
import csv
import html
import unicodedata
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
import datetime as dt
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "docs", "seo", "keywords")
REG = os.path.join(OUT, "registry.csv")
SNAP = os.path.join(OUT, "snapshots")
SITE_URL = "https://skilldrills.online"
DEV = "http://localhost:3000"
LOCALES = ("ko", "ja", "de", "fr", "pt", "es")
FIELDS = ["category", "drill", "locale", "url", "primary", "query", "evidence", "set_in", "set_date"]
EVIDENCE = ["bing_volume", "volume_source", "gsc_pos", "competition", "competition_source", "verdict"]


def _query(primary):
    q = re.sub(r"\(.*?\)|\(.*$", "", primary)
    q = re.split(r"\s+/\s+|\s+\+|\s*;|\s+\|", q)[0]
    return q.strip(" '\"").lower()


def _pages():
    out = []
    for loc in ("en",) + LOCALES:
        base = os.path.join(ROOT, "app", *([] if loc == "en" else [loc]), "drills")
        for f in glob.glob(os.path.join(base, "**", "page.*"), recursive=True):
            rel = os.path.relpath(os.path.dirname(f), base).replace(os.sep, "/")
            segs = [] if rel == "." else rel.split("/")
            url = "/" + "/".join(([] if loc == "en" else [loc]) + ["drills"] + segs)
            category = segs[0] if segs else "landing"
            drill = "hub" if len(segs) < 2 else ("go-no-go" if rel.endswith("go/no-go") else segs[-1])
            out.append({"locale": loc, "url": url, "category": category, "drill": drill, "file": f})
    return out


def _static_title(path):
    src = open(path, encoding="utf-8").read()
    i = src.find("export const metadata")
    m = re.search(r"\btitle:\s*(?:(['\"`])(.*?)\1|([A-Za-z_]\w*)\b)|\b(title),", src[i:]) if i >= 0 else None
    if m and (m.group(3) or m.group(4)):
        m2 = re.search(r"const\s+" + (m.group(3) or m.group(4)) +r"\s*=\s*(['\"`])(.*?)\1", src)
        return m2.group(2) if m2 and "${" not in m2.group(2) else ""
    return m.group(2) if m and "${" not in m.group(2) else ""


def _fetch_title(url):
    for _ in range(3):
        try:
            with urllib.request.urlopen(DEV + urllib.parse.quote(url), timeout=300) as r:
                m = re.search(r"<title[^>]*>(.*?)</title>", r.read().decode("utf-8", "replace"), re.S)
                return html.unescape(m.group(1)).strip() if m else ""
        except Exception:
            pass
    return ""


def _lead(title):
    return re.split(r"\s+[|\-–—]\s+", title)[0].strip()


def _norm(s):
    return re.sub(r"[\W_]+", "", unicodedata.normalize("NFKC", s).lower())


def _verdict(vol, comp):
    if vol in ("", None):
        return "unmeasured"
    n = int(vol)
    if n == 0:
        return "no-demand"
    if n < 100:
        return "low-demand"
    return "high-demand-low-comp" if comp == "low" else "demand-unknown-comp"


def _maps():
    phrase, page = {}, {}
    for folder in ("visual-2026-11", "cogmem-2026-11"):
        for f in glob.glob(os.path.join(ROOT, "docs", "seo", "research", folder, "*.csv")):
            loc = os.path.basename(f)[:-4]
            src = f"{folder}/{loc}.csv"
            raw = open(f, "rb").read()
            try:
                text = raw.decode("utf-8-sig")
            except UnicodeDecodeError:
                text = raw.decode("cp1252")
            for r in csv.DictReader(text.splitlines()):
                if "page" in r:
                    page[(loc, f"/{loc}/drills/{r['page']}")] = dict(r, _src=src)
                    continue
                ex = r.get("exact", r.get("bing_exact", "")) or ""
                if not ex.isdigit() or (r.get("status") or "").startswith("error"):
                    continue
                phrase.setdefault((loc, r["phrase"].strip().lower()),
                                  (ex, r.get("broad", r.get("bing_broad", "")), src))
    return phrase, page


def build():
    pages = _pages()
    with ThreadPoolExecutor(2) as ex:
        for p, t in zip(pages, ex.map(lambda p: _fetch_title(p["url"]), pages)):
            p["title"], p["title_src"] = (t, "live") if t else (_static_title(p["file"]), "page.js")
    logged = {}
    for log in sorted(glob.glob(os.path.join(ROOT, "docs", "seo", "research", "*-2026-11", "_pass*_*.log"))):
        folder = os.path.basename(os.path.dirname(log))
        base = folder.rsplit("-", 2)[0]
        cats = {"cogmem": ("cognitive", "memory"), "visual": ("visual", "visual-tracking")}.get(base, (base,))
        drill = re.sub(r"^_pass(B|3)_", "", os.path.basename(log))[:-4]
        set_date = dt.date.fromtimestamp(os.path.getmtime(log)).isoformat()
        for line in open(log, encoding="utf-8"):
            parts = [p.strip() for p in line.split("|")]
            if len(parts) < 3 or parts[0] not in LOCALES or parts[1].startswith("("):
                continue
            loc = parts[0]
            if drill.startswith("hub"):
                hub = drill[4:] or cats[0]
                hits = [p for p in pages if p["locale"] == loc and p["category"] == hub and p["drill"] == "hub"]
            else:
                hits = [p for p in pages if p["locale"] == loc and p["category"] in cats and p["drill"] == drill]
            if len(hits) != 1:
                print(f"  unmapped log line: {folder}/{drill} {loc} ({len(hits)} pages)")
                continue
            logged[(loc, hits[0]["url"])] = {
                "category": cats[0] if len(cats) == 1 else hits[0]["category"], "drill": hits[0]["drill"],
                "primary": parts[1], "evidence": parts[2],
                "set_in": os.path.relpath(log, ROOT).replace(os.sep, "/"), "set_date": set_date}
    for extra in glob.glob(os.path.join(OUT, "extra_*.csv")):
        for r in csv.DictReader(open(extra, encoding="utf-8")):
            logged[(r["locale"], r["url"])] = {k: r.get(k, "") for k in FIELDS}
    evidence = {}
    for ev in glob.glob(os.path.join(OUT, "evidence_*.csv")):
        for r in csv.DictReader(open(ev, encoding="utf-8")):
            evidence[(r["locale"], r["url"])] = r
    phrase_map, page_map = _maps()
    rows, mismatches = [], []
    for p in pages:
        key = (p["locale"], p["url"])
        lead = _lead(p["title"])
        src = logged.get(key)
        r = {"category": p["category"], "drill": p["drill"], "locale": p["locale"], "url": p["url"],
             "primary": lead, "query": _query(lead), "evidence": "unmeasured",
             "set_in": os.path.relpath(p["file"], ROOT).replace(os.sep, "/"),
             "set_date": dt.date.fromtimestamp(os.path.getmtime(p["file"])).isoformat()}
        if src:
            r.update({k: v for k, v in src.items() if k in FIELDS and k not in ("url", "locale", "query") and v})
            q = _query(src["primary"])
            if q and p["title"] and _norm(q) in _norm(p["title"]):
                r["primary"], r["query"] = src["primary"], q
            else:
                mismatches.append((p["url"], src["primary"], p["title"]))
                r["primary"], r["query"] = lead, _query(lead)
        e = evidence.get(key)
        if e and _norm(e.get("primary", "")) not in _norm(p["title"]):
            e = dict(e, bing_volume="", volume_source=f"stale: evidence measured '{e['primary']}', not in live title",
                     competition="unknown", verdict="")
        if not e:
            e = {"bing_volume": "", "volume_source": "not measured", "gsc_pos": "", "competition": "unknown",
                 "competition_source": "no serp probe (serp_probe broken) -> unknown"}
            pm = page_map.get(key)
            ph = phrase_map.get((p["locale"], r["query"]))
            if pm and _norm(pm["proposed_primary"].split("(")[0]) in _norm(p["title"]):
                e["bing_volume"] = pm["bing_exact"] if pm["bing_exact"].isdigit() else ""
                e["volume_source"] = f"{pm['_src']} page row '{pm['proposed_primary']}' bing_exact={pm['bing_exact']}"
                e["gsc_pos"] = pm.get("gsc_pos", "")
                if pm.get("competition") in ("low", "medium", "high"):
                    e["competition"] = pm["competition"]
                    e["competition_source"] = f"{pm['_src']}: GSC pos {pm.get('gsc_pos')} (<=10 = low rule)"
            elif ph:
                e["bing_volume"] = ph[0]
                e["volume_source"] = f"{ph[2]} \"{r['query']}\" exact={ph[0]} broad={ph[1]}"
        r.update({c: e.get(c, "") for c in EVIDENCE})
        r["competition"] = r["competition"] or "unknown"
        r["verdict"] = r["verdict"] or _verdict(r["bing_volume"], r["competition"])
        rows.append(r)
    os.makedirs(OUT, exist_ok=True)
    with open(REG, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, FIELDS + EVIDENCE)
        w.writeheader()
        w.writerows(sorted(rows, key=lambda r: (r["category"], r["drill"], r["locale"])))
    for m in mismatches:
        print(f"  MISMATCH {m[0]}: log '{m[1]}' vs title '{m[2]}'")
    untitled = [p["url"] for p in pages if not p["title"]]
    print(f"registry: {len(rows)} rows -> {os.path.relpath(REG, ROOT)}  "
          f"(titles from page.js fallback {sum(p['title_src'] != 'live' for p in pages)}; untitled {len(untitled)} {untitled[:5]}; mismatches {len(mismatches)})")


def snapshot(days=28):
    sys.path.insert(0, os.path.join(ROOT, "scripts", "gsc"))
    import gsc
    svc = gsc.get_service()
    end = dt.date.today() - dt.timedelta(days=3)
    start = end - dt.timedelta(days=days - 1)
    body = {"startDate": start.isoformat(), "endDate": end.isoformat(),
            "dimensions": ["page", "query"], "rowLimit": 25000}
    pq = svc.searchanalytics().query(siteUrl=gsc.SITE, body=body).execute().get("rows", [])
    page = {}
    for r in pq:
        p = r["keys"][0].replace(SITE_URL, "")
        a = page.setdefault(p, [0, 0, 0.0])
        a[0] += r["clicks"]; a[1] += r["impressions"]; a[2] += r["position"] * r["impressions"]
    rows = list(csv.DictReader(open(REG, encoding="utf-8")))
    out = []
    for r in rows:
        pc, pi, pw = page.get(r["url"], [0, 0, 0.0])
        q = [x for x in pq if x["keys"][0].replace(SITE_URL, "") == r["url"] and r["query"] and r["query"] in x["keys"][1].lower()]
        qi = sum(x["impressions"] for x in q)
        out.append({
            "locale": r["locale"], "url": r["url"], "primary": r["primary"], "query": r["query"],
            "page_clicks": int(pc), "page_impr": int(pi), "page_pos": round(pw / pi, 1) if pi else "",
            "kw_clicks": int(sum(x["clicks"] for x in q)), "kw_impr": int(qi),
            "kw_pos": round(sum(x["position"] * x["impressions"] for x in q) / qi, 1) if qi else "",
        })
    os.makedirs(SNAP, exist_ok=True)
    path = os.path.join(SNAP, f"{dt.date.today().isoformat()}_{days}d.csv")
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, list(out[0].keys()))
        w.writeheader()
        w.writerows(out)
    print(f"snapshot {start}..{end}: {len(out)} rows -> {os.path.relpath(path, ROOT)}")


def compare(old=None, new=None):
    snaps = sorted(glob.glob(os.path.join(SNAP, "*.csv")))
    old = old or snaps[-2]
    new = new or snaps[-1]
    a = {(r["locale"], r["url"]): r for r in csv.DictReader(open(old, encoding="utf-8"))}
    b = {(r["locale"], r["url"]): r for r in csv.DictReader(open(new, encoding="utf-8"))}
    print(f"{os.path.basename(old)} -> {os.path.basename(new)}")
    print(f"{'url':58} {'primary':28} {'impr':>11} {'clicks':>9} {'kw pos':>11}")
    for k in sorted(b, key=lambda k: -int(b[k]["page_impr"])):
        n, o = b[k], a.get(k, {})
        if not int(n["page_impr"]) and not int(o.get("page_impr", 0) or 0):
            continue
        changed = " *" if o and o.get("primary") != n["primary"] else ""
        print(f"{k[1][:58]:58} {n['primary'][:28]:28} {o.get('page_impr','-'):>5}->{n['page_impr']:<5} "
              f"{o.get('page_clicks','-'):>4}->{n['page_clicks']:<4} {o.get('kw_pos','-') or '-':>5}->{n['kw_pos'] or '-'}{changed}")


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "build"
    if cmd == "build":
        build()
    elif cmd == "snapshot":
        snapshot(int(sys.argv[2]) if len(sys.argv) > 2 else 28)
    elif cmd == "compare":
        compare(*sys.argv[2:4])
    else:
        print(__doc__)
