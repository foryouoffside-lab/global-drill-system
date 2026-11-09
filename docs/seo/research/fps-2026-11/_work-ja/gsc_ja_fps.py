import sys, os
sys.path.insert(0, os.path.join(os.getcwd(), 'scripts', 'gsc'))
import gsc
svc = gsc.get_service()
f = [{"dimension": "page", "operator": "contains", "expression": "/ja/"}]
rows = gsc.query(svc, ["page", "query"], 90, 5000, f)
out = open(sys.argv[1], 'w', encoding='utf-8')
for r in rows:
    p, q = r['keys']
    if '/fps' in p or 'aim-trainer' in p or 'fps-tracking' in p or 'barrier' in p or 'market-doors' in p:
        out.write(f"{p.replace('https://skilldrills.online','')}\t{q}\t{r['clicks']:.0f}\t{r['impressions']:.0f}\t{r['position']:.1f}\n")
