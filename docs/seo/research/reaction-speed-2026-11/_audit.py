import sys, re, json, html, os, urllib.request

BAD = re.compile(r"spacebar|space bar|barra de espa|Leertaste|barre d.espace|スペースキー|スペースバー|스페이스|aggregateRating|sub-millisecond", re.I)

for path in sys.argv[1:]:
    url = os.environ.get("AUDIT_BASE", "http://localhost:3000/") + path.lstrip("/")
    try:
        s = urllib.request.urlopen(url, timeout=180).read().decode("utf8")
    except Exception as e:
        print("FAIL", path, e); continue
    title = (re.findall(r"<title>(.*?)</title>", s) or [""])[0]
    h1 = [html.unescape(re.sub("<[^>]+>", "", h)) for h in re.findall(r"<h1[^>]*>(.*?)</h1>", s, re.S)]
    faq = []
    for b in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', s, re.S):
        try: d = json.loads(b)
        except Exception: continue
        for x in (d if isinstance(d, list) else [d]):
            if isinstance(x, dict) and x.get("@type") == "FAQPage":
                faq = [q["name"] for q in x["mainEntity"]]
    text = html.unescape(re.sub("<[^>]+>", "", s))
    vis = sum(q in text for q in faq)
    bad = sorted(set(m.group(0) for m in BAD.finditer(s)))
    ok = len(h1) == 1 and vis == len(faq) and "noindex" not in s and not bad
    print("OK " if ok else "BAD", path, "| title:", html.unescape(title), "| h1:", h1, "| faq", vis, "/", len(faq), "| noindex" if "noindex" in s else "", bad or "")
