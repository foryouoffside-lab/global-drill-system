import sys, json
sys.path.insert(0, 'scripts/gsc')
import gsc
svc = gsc.get_service()
f = [{"dimension": "country", "operator": "equals", "expression": "kor"}]
rows = gsc.query(svc, ["query", "page"], 90, 2000, f)
out = []
for r in rows:
    q, p = r["keys"]
    out.append({"q": q, "page": p, "clicks": r["clicks"], "impr": r["impressions"], "pos": round(r["position"], 1)})
json.dump(out, open('docs/seo/research/reaction-speed-2026-11/_work-ko/gsc_kr.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
print(len(out))
