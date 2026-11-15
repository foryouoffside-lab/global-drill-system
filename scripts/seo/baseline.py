"""Dated performance baseline for before/after comparisons.

    python scripts/seo/baseline.py              # writes docs/seo/keywords/baselines/<today>/
    python scripts/seo/baseline.py compare A B  # diff two baseline folders by date name

Saves Google Search Console (last 28 days, ending 3 days ago) by day, country,
page and query, and Bing Webmaster page and query totals.
"""
import csv
import datetime as dt
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "docs", "seo", "keywords", "baselines")
sys.path.insert(0, os.path.join(ROOT, "scripts", "gsc"))
sys.path.insert(0, os.path.join(ROOT, "scripts", "bing"))


def write(path, header, rows):
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(header)
        w.writerows(rows)


def gsc_baseline(folder):
    import gsc
    svc = gsc.get_service()
    end = dt.date.today() - dt.timedelta(days=3)
    start = end - dt.timedelta(days=27)
    for dim in ("date", "country", "page", "query"):
        body = {"startDate": str(start), "endDate": str(end), "dimensions": [dim], "rowLimit": 5000}
        rows = svc.searchanalytics().query(siteUrl=gsc.SITE, body=body).execute().get("rows", [])
        write(os.path.join(folder, f"gsc_{dim}.csv"), [dim, "clicks", "impressions", "ctr", "position"],
              [[r["keys"][0], r["clicks"], r["impressions"], round(r["ctr"], 4), round(r["position"], 2)] for r in rows])
    body = {"startDate": str(start), "endDate": str(end), "dimensions": ["country", "page"], "rowLimit": 5000}
    rows = svc.searchanalytics().query(siteUrl=gsc.SITE, body=body).execute().get("rows", [])
    write(os.path.join(folder, "gsc_country_page.csv"), ["country", "page", "clicks", "impressions", "position"],
          [[*r["keys"], r["clicks"], r["impressions"], round(r["position"], 2)] for r in rows])
    return {"gsc_range": f"{start}..{end}"}


def bing_baseline(folder):
    for kind in ("pages", "queries"):
        out = subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "bing", "bing.py"), kind, "1000"],
                             capture_output=True, text=True, encoding="utf-8", cwd=ROOT).stdout
        with open(os.path.join(folder, f"bing_{kind}.txt"), "w", encoding="utf-8") as f:
            f.write(out)


def load(folder, name, key=0):
    path = os.path.join(OUT, folder, name)
    with open(path, encoding="utf-8") as f:
        return {r[key]: r for r in list(csv.reader(f))[1:]}


def compare(a, b):
    for name in ("gsc_country.csv", "gsc_page.csv", "gsc_query.csv"):
        A, B = load(a, name), load(b, name)
        ta = sum(float(r[1]) for r in A.values()); tb = sum(float(r[1]) for r in B.values())
        ia = sum(float(r[2]) for r in A.values()); ib = sum(float(r[2]) for r in B.values())
        print(f"\n== {name}: clicks {ta:.0f} -> {tb:.0f}   impressions {ia:.0f} -> {ib:.0f}")
        rows = []
        for k in set(A) | set(B):
            ca = float(A[k][1]) if k in A else 0; cb = float(B[k][1]) if k in B else 0
            pa = A[k][4] if k in A else "-"; pb = B[k][4] if k in B else "-"
            rows.append((cb - ca, k, ca, cb, pa, pb))
        rows.sort()
        for d, k, ca, cb, pa, pb in rows[:8] + rows[-8:]:
            print(f"  {ca:5.0f} -> {cb:5.0f} clk  pos {pa:>6} -> {pb:>6}  {k[:90]}")


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "compare":
        dirs = sorted(os.listdir(OUT))
        a, b = (sys.argv[2], sys.argv[3]) if len(sys.argv) > 3 else (dirs[-2], dirs[-1])
        compare(a, b)
        sys.exit()
    folder = os.path.join(OUT, str(dt.date.today()))
    os.makedirs(folder, exist_ok=True)
    meta = gsc_baseline(folder)
    bing_baseline(folder)
    with open(os.path.join(folder, "meta.json"), "w", encoding="utf-8") as f:
        json.dump({**meta, "taken": dt.datetime.now().isoformat(timespec="seconds")}, f, indent=2)
    print("baseline saved:", os.path.relpath(folder, ROOT))
    for n in sorted(os.listdir(folder)):
        print(" ", n, os.path.getsize(os.path.join(folder, n)), "bytes")
