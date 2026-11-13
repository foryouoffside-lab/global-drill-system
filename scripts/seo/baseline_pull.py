"""Pull a dated GSC + Bing performance baseline into docs/seo/baselines/<date>/.

  python scripts/seo/baseline_pull.py [YYYY-MM-DD]

Needs the read-only GSC token (scripts/gsc/gsc.py auth) and the Bing key
(BING_API_KEY or scripts/bing/.bing-key). Compare two folders with
scripts/seo/baseline_compare.py.
"""
import csv
import datetime as dt
import json
import os
import shutil
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path[:0] = [os.path.join(ROOT, "scripts", "gsc"), os.path.join(ROOT, "scripts", "bing")]
import gsc  # noqa: E402
import bing  # noqa: E402

GSC_COLS = ["clicks", "impressions", "ctr", "position"]


def gsc_rows(svc, dims, start, end, extra=None):
    out, start_row = [], 0
    while True:
        body = {"startDate": start, "endDate": end, "dimensions": dims,
                "rowLimit": 25000, "startRow": start_row, **(extra or {})}
        rows = svc.searchanalytics().query(siteUrl=gsc.SITE, body=body).execute().get("rows", [])
        out += rows
        if len(rows) < 25000:
            return out
        start_row += 25000


def write_gsc(path, dims, rows):
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(dims + GSC_COLS)
        for r in rows:
            w.writerow(r["keys"] + [int(r["clicks"]), int(r["impressions"]),
                                    round(r["ctr"], 4), round(r["position"], 2)])
    return len(rows)


def latest_gsc_date(svc):
    today = dt.date.today()
    rows = gsc_rows(svc, ["date"], (today - dt.timedelta(days=10)).isoformat(), today.isoformat())
    return max(r["keys"][0] for r in rows)


def bing_rows(method, params, tries=3):
    for i in range(tries):
        r = bing.call(method, params)
        if "__error" not in r and r.get("d") is not None:
            d = r["d"]
            return (d if isinstance(d, list) else [d]), "ok"
        time.sleep(5 * (i + 1))
    return [], "EMPTY_OR_ERROR after %d tries: %s" % (tries, r.get("__error") or "d=null")


def write_bing(path, data, date_key="Date"):
    if not data:
        open(path, "w", encoding="utf-8").close()
        return 0
    keys = sorted({k for row in data for k in row if not k.startswith("__")})
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(keys)
        for row in sorted(data, key=lambda x: str(bing.dt(x.get(date_key)) or "")):
            w.writerow([bing.dt(row[k]) if k.endswith("Date") or k == "Date" else row.get(k)
                        for k in keys])
    return len(data)


def main():
    stamp = sys.argv[1] if len(sys.argv) > 1 else dt.date.today().isoformat()
    out = os.path.join(ROOT, "docs", "seo", "baselines", stamp)
    os.makedirs(out, exist_ok=True)
    manifest = {"pulled": stamp, "site": gsc.SITE, "files": {}, "notes": []}

    svc = gsc.get_service()
    end = latest_gsc_date(svc)
    end_d = dt.date.fromisoformat(end)
    manifest["gsc_end_date"] = end
    sets = [
        ("query_country", ["query", "country"]),
        ("page_country", ["page", "country"]),
        ("page_query", ["page", "query"]),
        ("country", ["country"]),
        ("device", ["device"]),
        ("daily", ["date"]),
        ("query", ["query"]),
        ("page", ["page"]),
        ("search_appearance", ["searchAppearance"]),
    ]
    for days in (28, 90):
        start = (end_d - dt.timedelta(days=days - 1)).isoformat()
        manifest["gsc_%dd" % days] = [start, end]
        for name, dims in sets:
            fn = "google_%s_%dd.csv" % (name, days)
            try:
                n = write_gsc(os.path.join(out, fn), dims, gsc_rows(svc, dims, start, end))
            except Exception as e:
                n = 0
                manifest["notes"].append("%s failed: %s" % (fn, str(e)[:200]))
            manifest["files"][fn] = {"rows": n, "range": [start, end]}
            print(fn, n)

    for fn, method in (("bing_query_stats.csv", "GetQueryStats"),
                       ("bing_page_stats.csv", "GetPageStats"),
                       ("bing_rank_traffic_daily.csv", "GetRankAndTrafficStats"),
                       ("bing_crawl_stats.csv", "GetCrawlStats")):
        data, status = bing_rows(method, {"siteUrl": bing.SITE})
        n = write_bing(os.path.join(out, fn), data)
        dates = sorted(str(bing.dt(r.get("Date"))) for r in data if r.get("Date"))
        manifest["files"][fn] = {"rows": n, "range": [dates[0], dates[-1]] if dates else None,
                                 "status": status}
        if status != "ok":
            manifest["notes"].append(fn + ": " + status)
        print(fn, n, status)
    manifest["notes"].append("Bing Webmaster API exposes no country dimension for "
                             "query/page/traffic stats; Bing country split unavailable.")

    for src, dst in (("docs/seo/keywords/snapshots/%s_28d.csv" % stamp, "keyword_snapshot_28d.csv"),
                     ("docs/qa/gsc_index_%s.jsonl" % stamp, "google_index_status.jsonl")):
        s = os.path.join(ROOT, src)
        if os.path.exists(s):
            shutil.copyfile(s, os.path.join(out, dst))
            manifest["files"][dst] = {"copied_from": src}
        else:
            manifest["notes"].append("missing " + src)

    with open(os.path.join(out, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
    print(json.dumps(manifest["notes"], indent=2))


if __name__ == "__main__":
    main()
