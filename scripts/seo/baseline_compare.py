"""Diff two performance baselines from docs/seo/baselines/.

  python scripts/seo/baseline_compare.py OLD NEW [--window 28|90] [--top 20] [--country kor] [--out DIR]

OLD/NEW are folder paths or dates (resolved under docs/seo/baselines/).
Position delta < 0 means the page/query moved UP. --out writes every diff as CSV.
"""
import argparse
import csv
import datetime as dt
import json
import os
import sys
from collections import defaultdict

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BASE = os.path.join(ROOT, "docs", "seo", "baselines")


def folder(p):
    return p if os.path.isdir(p) else os.path.join(BASE, p)


def load(path, keys, country=None, rename=None):
    out = {}
    if not os.path.exists(path) or not os.path.getsize(path):
        return out
    for r in csv.DictReader(open(path, encoding="utf-8")):
        if rename:
            r = {rename.get(k, k): v for k, v in r.items()}
        if country and r.get("country") != country:
            continue
        out[tuple(r[k] for k in keys)] = (int(r["clicks"]), int(r["impressions"]),
                                         float(r["position"] or 0))
    return out


def bing_recent(path, days=28):
    rows = list(csv.DictReader(open(path, encoding="utf-8"))) if os.path.exists(path) else []
    if not rows:
        return {}
    last = max(dt.date.fromisoformat(r["Date"]) for r in rows)
    agg = defaultdict(lambda: [0, 0, 0.0])
    for r in rows:
        if dt.date.fromisoformat(r["Date"]) <= last - dt.timedelta(days=days):
            continue
        a, i = agg[(r["Query"],)], int(r["Impressions"])
        a[0] += int(r["Clicks"])
        a[1] += i
        a[2] += max(float(r["AvgImpressionPosition"]), 0) * i
    return {k: (c, i, round(p / i, 2) if i else 0) for k, (c, i, p) in agg.items()}


def diff(old, new):
    rows = []
    for k in set(old) | set(new):
        oc, oi, op = old.get(k, (0, 0, 0))
        nc, ni, np_ = new.get(k, (0, 0, 0))
        dpos = round(np_ - op, 2) if op and np_ else ""
        rows.append(list(k) + [oc, nc, nc - oc, oi, ni, ni - oi, op or "", np_ or "", dpos])
    rows.sort(key=lambda r: (-abs(r[-7]), -abs(r[-4]), -r[-5]))
    return rows


def show(title, keys, rows, top, out):
    head = keys + ["clicks_old", "clicks_new", "d_clicks", "impr_old", "impr_new",
                   "d_impr", "pos_old", "pos_new", "d_pos"]
    tc = sum(r[len(keys) + 2] for r in rows)
    ti = sum(r[len(keys) + 5] for r in rows)
    print("\n== %s  (%d keys, net clicks %+d, net impr %+d)" % (title, len(rows), tc, ti))
    print("  ".join(head))
    for r in rows[:top]:
        print("  ".join(str(c)[:60] for c in r))
    if out:
        with open(os.path.join(out, title.replace(" ", "_") + ".csv"), "w",
                  newline="", encoding="utf-8") as f:
            w = csv.writer(f)
            w.writerow(head)
            w.writerows(rows)


def index_status(path):
    if not os.path.exists(path):
        return {}
    text = open(path, encoding="utf-8").read().strip()
    recs = json.loads(text) if text.startswith("[") else [json.loads(l) for l in text.splitlines() if l.strip()]
    return {r["url"]: (r.get("verdict"), r.get("coverageState") or r.get("coverage")) for r in recs}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("old")
    ap.add_argument("new")
    ap.add_argument("--window", default="28", choices=["28", "90"])
    ap.add_argument("--top", type=int, default=20)
    ap.add_argument("--country", help="GSC 3-letter code, e.g. usa, kor; scopes query/page diffs")
    ap.add_argument("--out")
    a = ap.parse_args()
    o, n, w = folder(a.old), folder(a.new), a.window
    if a.out:
        os.makedirs(a.out, exist_ok=True)

    for f in (o, n):
        m = os.path.join(f, "manifest.json")
        if os.path.exists(m):
            print(f, "gsc %sd:" % w, json.load(open(m, encoding="utf-8")).get("gsc_%sd" % w))

    def total(f):
        d = load(os.path.join(f, "google_daily_%sd.csv" % w), ["date"]).values()
        i = sum(v[1] for v in d)
        return {("all",): (sum(v[0] for v in d), i,
                           round(sum(v[1] * v[2] for v in d) / i, 2) if i else 0)}
    show("google_totals", ["scope"], diff(total(o), total(n)), a.top, a.out)
    show("google_device", ["device"], diff(
        load(os.path.join(o, "google_device_%sd.csv" % w), ["device"]),
        load(os.path.join(n, "google_device_%sd.csv" % w), ["device"])), a.top, a.out)
    show("google_country", ["country"], diff(
        load(os.path.join(o, "google_country_%sd.csv" % w), ["country"]),
        load(os.path.join(n, "google_country_%sd.csv" % w), ["country"])), a.top, a.out)
    src, keys = (("query_country", ["query", "country"]) if a.country else ("query", ["query"]))
    show("google_query", keys, diff(
        load(os.path.join(o, "google_%s_%sd.csv" % (src, w)), keys, a.country),
        load(os.path.join(n, "google_%s_%sd.csv" % (src, w)), keys, a.country)), a.top, a.out)
    src, keys = (("page_country", ["page", "country"]) if a.country else ("page", ["page"]))
    show("google_page", keys, diff(
        load(os.path.join(o, "google_%s_%sd.csv" % (src, w)), keys, a.country),
        load(os.path.join(n, "google_%s_%sd.csv" % (src, w)), keys, a.country)), a.top, a.out)
    show("bing_query_28d", ["query"], diff(
        bing_recent(os.path.join(o, "bing_query_stats.csv")),
        bing_recent(os.path.join(n, "bing_query_stats.csv"))), a.top, a.out)

    io, inw = (index_status(os.path.join(f, "google_index_status.jsonl")) for f in (o, n))
    changes = sorted([u, *(io.get(u) or ("", "")), *(inw.get(u) or ("", ""))]
                     for u in set(io) | set(inw) if io.get(u) != inw.get(u))
    count = lambda d: sum(1 for v, _ in d.values() if v == "PASS")
    print("\n== google_index_status  indexed %d -> %d of %d -> %d URLs, %d changed"
          % (count(io), count(inw), len(io), len(inw), len(changes)))
    for c in changes[:max(a.top, 50)]:
        print("  %s  %s/%s -> %s/%s" % tuple(c))
    if a.out:
        with open(os.path.join(a.out, "google_index_status.csv"), "w", newline="", encoding="utf-8") as f:
            wr = csv.writer(f)
            wr.writerow(["url", "verdict_old", "coverage_old", "verdict_new", "coverage_new"])
            wr.writerows(changes)


if __name__ == "__main__":
    main()
