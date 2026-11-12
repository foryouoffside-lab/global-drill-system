"""Keyword registry + performance tracker.

  python scripts/seo/keyword_tracker.py build              # registry.csv from per-page research logs
  python scripts/seo/keyword_tracker.py snapshot [days]    # GSC page+query metrics for every registry row
  python scripts/seo/keyword_tracker.py compare [old] [new]  # diff two snapshots (default: last two)
"""
import csv
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
LOCALES = ("ko", "ja", "de", "fr", "pt", "es")
FIELDS = ["category", "drill", "locale", "url", "primary", "query", "evidence", "set_in", "set_date"]
EVIDENCE = ["bing_volume", "volume_source", "gsc_pos", "competition", "competition_source", "verdict"]


def _route(locale, category, drill):
    base = os.path.join(ROOT, "app", locale, "drills")
    if drill == "hub":
        return f"/{locale}/drills/{category}" if os.path.isdir(os.path.join(base, category)) else ""
    hits = [p for p in glob.glob(os.path.join(base, "**", drill, "page.*"), recursive=True)
            if os.sep + category + os.sep in p or category == "reaction-speed"]
    hits = hits or glob.glob(os.path.join(base, "**", drill, "page.*"), recursive=True)
    if not hits:
        return ""
    rel = os.path.relpath(os.path.dirname(sorted(hits, key=len)[0]), os.path.join(ROOT, "app"))
    return "/" + rel.replace(os.sep, "/")


def _query(primary):
    q = re.sub(r"\(.*?\)", "", primary)
    q = re.split(r"\s+/\s+|\s+\+|\s*;|\s+\|", q)[0]
    return q.strip(" '\"").lower()


def build():
    rows = []
    for log in sorted(glob.glob(os.path.join(ROOT, "docs", "seo", "research", "*-2026-11", "_pass*_*.log"))):
        folder = os.path.basename(os.path.dirname(log))
        category = folder.rsplit("-", 2)[0]
        drill = re.sub(r"^_pass(B|3)_", "", os.path.basename(log))[:-4]
        set_date = dt.date.fromtimestamp(os.path.getmtime(log)).isoformat()
        for line in open(log, encoding="utf-8"):
            parts = [p.strip() for p in line.split("|")]
            if len(parts) < 3 or parts[0] not in LOCALES or parts[1].startswith("("):
                continue
            loc, primary, evidence = parts[0], parts[1], parts[2]
            rows.append({
                "category": category, "drill": drill, "locale": loc,
                "url": _route(loc, category, drill), "primary": primary,
                "query": _query(primary), "evidence": evidence,
                "set_in": os.path.relpath(log, ROOT).replace(os.sep, "/"), "set_date": set_date,
            })
    for extra in glob.glob(os.path.join(OUT, "extra_*.csv")):
        for r in csv.DictReader(open(extra, encoding="utf-8")):
            r.setdefault("query", _query(r["primary"]))
            rows.append({k: r.get(k, "") for k in FIELDS})
    seen = {}
    for r in rows:
        seen[(r["locale"], r["url"] or r["drill"])] = r
    evidence = {}
    for ev in glob.glob(os.path.join(OUT, "evidence_*.csv")):
        for r in csv.DictReader(open(ev, encoding="utf-8")):
            evidence[(r["locale"], r["url"])] = r
    fields = FIELDS + EVIDENCE
    for k, r in seen.items():
        e = evidence.get((r["locale"], r["url"]), {})
        r.update({c: e.get(c, "") for c in EVIDENCE})
    os.makedirs(OUT, exist_ok=True)
    with open(REG, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fields)
        w.writeheader()
        w.writerows(sorted(seen.values(), key=lambda r: (r["category"], r["drill"], r["locale"])))
    missing = [r for r in seen.values() if not r["url"]]
    print(f"registry: {len(seen)} rows -> {os.path.relpath(REG, ROOT)}  (no route found: {len(missing)})")


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
