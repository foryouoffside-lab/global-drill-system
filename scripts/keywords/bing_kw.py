#!/usr/bin/env python3
"""Cross-process rate-limited Bing keyword volume.

  python scripts/keywords/bing_kw.py "<phrase>" <cc> [lang]
  python scripts/keywords/bing_kw.py --file phrases.tsv      (phrase<TAB>cc[<TAB>lang] per line)
  add --trend to also return 26-week direction (recent6 vs prior mean, change_pct) for terms >= 30/mo

Every process shares one lock file and one global minimum gap between calls,
so many agents can use the one API key without being throttled. Output is one
JSON object per line: phrase, cc, lang, exact, broad, status. status is "ok",
"nodata" (API returned nothing: UNKNOWN, not zero), "throttled" (key rate-limited: UNKNOWN) or "error:...".
"""
import json
import os
import sys
import tempfile
import time

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "bing"))
import bing

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

GAP = float(os.environ.get("BING_GAP", "8"))
LOCK = os.path.join(tempfile.gettempdir(), "skilldrills-bing.lock")
STAMP = os.path.join(tempfile.gettempdir(), "skilldrills-bing.stamp")


def acquire():
    while True:
        try:
            fd = os.open(LOCK, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
            os.close(fd)
            return
        except FileExistsError:
            try:
                if time.time() - os.path.getmtime(LOCK) > 60:
                    os.remove(LOCK)
            except OSError:
                pass
            time.sleep(0.25)


def release():
    try:
        os.remove(LOCK)
    except OSError:
        pass


def wait_gap():
    try:
        last = float(open(STAMP).read())
    except Exception:
        last = 0.0
    d = GAP - (time.time() - last)
    if d > 0:
        time.sleep(d)


def trend(phrase, c, l):
    import datetime
    end = datetime.date.today()
    start = end - datetime.timedelta(days=182)
    r = bing.call("GetKeywordStats", {"q": phrase, "country": c, "language": l,
                                      "startDate": start.isoformat(), "endDate": end.isoformat()})
    d = r.get("d") if isinstance(r, dict) else None
    if not d:
        return None
    pts = [x.get("Impressions") or 0 for x in d]
    if len(pts) < 8:
        return {"weeks": len(pts)}
    recent = sum(pts[-6:]) / 6.0
    prior = sum(pts[:-6]) / max(len(pts) - 6, 1)
    return {"weeks": len(pts), "recent6": round(recent), "prior": round(prior),
            "change_pct": round((recent / prior - 1) * 100) if prior else None}


def lookup(phrase, cc, lang=None, with_trend=False):
    acquire()
    try:
        wait_gap()
        try:
            c, l = bing.market(cc, lang)
            start, end = bing.month_range()
            r = bing.call("GetKeyword", {"q": phrase, "country": c, "language": l,
                                         "startDate": start, "endDate": end})
            out = {"phrase": phrase, "cc": c, "lang": l}
            d = r.get("d") if isinstance(r, dict) else None
            if isinstance(r, dict) and "__error" in r:
                throttled = "Throttle" in (r.get("body") or "")
                out.update(exact=None, broad=None, status="throttled" if throttled else "error:" + r["__error"][:60])
            elif not d:
                out.update(exact=None, broad=None, status="nodata")
            else:
                v = {"exact": d.get("Impressions"), "broad": d.get("BroadImpressions")}
                out.update(exact=v["exact"], broad=v["broad"], status="ok")
                if with_trend and (v["exact"] or 0) >= 30:
                    time.sleep(GAP)
                    out["trend"] = trend(phrase, c, l)
        except Exception as e:
            out = {"phrase": phrase, "cc": cc, "lang": lang, "exact": None,
                   "broad": None, "status": "error:" + str(e)[:80]}
        open(STAMP, "w").write(str(time.time()))
        return out
    finally:
        release()


def main():
    a = sys.argv[1:]
    wt = "--trend" in a
    a = [x for x in a if x != "--trend"]
    strikes = 0
    if a and a[0] == "--file":
        for line in open(a[1], encoding="utf-8"):
            p = line.rstrip("\n").split("\t")
            if len(p) < 2 or not p[0]:
                continue
            res = lookup(p[0], p[1], p[2] if len(p) > 2 and p[2] else None, wt)
            print(json.dumps(res, ensure_ascii=False), flush=True)
            strikes = strikes + 1 if res["status"] == "throttled" else 0
            if strikes >= 3:
                sys.exit("Bing API is throttling this key (ThrottleUser). Stop; wait for it to clear (retry with one canary call every 30 min) and rerun only the phrases whose status is not ok.")
    elif len(a) >= 2:
        print(json.dumps(lookup(a[0], a[1], a[2] if len(a) > 2 else None, wt), ensure_ascii=False))
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main()
