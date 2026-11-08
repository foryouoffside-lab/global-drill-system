import sys, os
sys.path.insert(0, os.path.join(os.getcwd(), 'scripts', 'gsc'))
import gsc
svc = gsc.get_service()
f = [{"dimension": "country", "operator": "equals", "expression": "jpn"}]
rows = gsc.query(svc, ["page", "query"], 90, 2000, f)
out = open(sys.argv[1], 'w', encoding='utf-8')
for r in rows:
    p, q = r['keys']
    if '/ja/' in p or 'reaction' in p:
        out.write(f"{p}\t{q}\t{r['clicks']}\t{r['impressions']}\t{r['position']:.1f}\n")
