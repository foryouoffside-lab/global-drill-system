"""Pull the real index status of every sitemap URL from the GSC URL Inspection API.

    python scripts/gsc/gsc_index.py

Writes index-status.json next to this file. Answers "why is this page not
indexed" directly -- coverageState plus referringUrls, which is what exposed
that 64 drill pages had no internal referrer at all.

NOTE: never rename this to inspect.py. That shadows the stdlib `inspect`
module and breaks google-auth's import chain with a confusing error.
"""
import os
import sys
import json
import time
import re
import urllib.request
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gsc import get_service, SITE

xml = urllib.request.urlopen("https://skilldrills.online/sitemap.xml").read().decode()
urls = re.findall(r"<loc>([^<]+)</loc>", xml)
start = int(sys.argv[1]) if len(sys.argv) > 1 else 0
limit = int(sys.argv[2]) if len(sys.argv) > 2 else len(urls)
selected = urls[start:start + limit]
print(f"{len(urls)} urls in sitemap; inspecting {len(selected)} from offset {start}", flush=True)

local = threading.local()


def inspect_url(u):
    try:
        if not hasattr(local, "svc"):
            local.svc = get_service()
        r = local.svc.urlInspection().index().inspect(
            body={"inspectionUrl": u, "siteUrl": SITE}).execute()
        s = r.get("inspectionResult", {}).get("indexStatusResult", {})
        row = {
            "url": u,
            "verdict": s.get("verdict"),
            "coverage": s.get("coverageState"),
            "robots": s.get("robotsTxtState"),
            "indexing": s.get("indexingState"),
            "crawled": s.get("lastCrawlTime"),
            "referring": s.get("referringUrls", []),
        }
    except Exception as e:
        row = {"url": u, "verdict": "ERROR", "coverage": str(e)[:120]}
    return row


out = []
with ThreadPoolExecutor(max_workers=8) as pool:
    futures = {pool.submit(inspect_url, u): u for u in selected}
    for i, future in enumerate(as_completed(futures), 1):
        row = future.result()
        out.append(row)
        print(f"{i:3}/{len(selected)} {row['verdict']:12} {str(row.get('coverage'))[:55]:58} {row['url']}", flush=True)

with open(os.path.join(os.path.dirname(__file__), "index-status.json"), "w") as f:
    json.dump(sorted(out, key=lambda row: urls.index(row["url"])), f, indent=1)
print("DONE", flush=True)
