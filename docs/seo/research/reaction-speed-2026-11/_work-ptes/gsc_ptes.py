import sys, os
sys.path.insert(0, os.path.join(os.getcwd(), 'scripts', 'gsc'))
import gsc
svc = gsc.get_service()
out = open(sys.argv[1], 'w', encoding='utf-8')
for cc in ['bra','prt','esp','mex','arg','col','chl','per']:
    f = [{"dimension": "country", "operator": "equals", "expression": cc}]
    rows = gsc.query(svc, ["page", "query"], 90, 5000, f)
    for r in rows:
        p, q = r['keys']
        if 'reaction' in p or '/pt/' in p or '/es/' in p:
            out.write(f"{cc}\t{p}\t{q}\t{r['clicks']}\t{r['impressions']}\t{r['position']:.1f}\n")
