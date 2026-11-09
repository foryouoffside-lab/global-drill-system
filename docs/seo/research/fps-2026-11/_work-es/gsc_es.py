import sys, os
sys.path.insert(0, os.path.join(os.getcwd(), 'scripts', 'gsc'))
import gsc
svc = gsc.get_service()
out = open(sys.argv[1], 'w', encoding='utf-8')
rows = gsc.query(svc, ["page", "query", "country"], 90, 25000, [{"dimension":"page","operator":"contains","expression":"/es/drills/"}])
for r in rows:
    p, q, c = r['keys']
    out.write(f"{c}\t{p}\t{q}\t{r['clicks']}\t{r['impressions']}\t{r['position']:.1f}\n")
rows = gsc.query(svc, ["page", "query", "country"], 90, 25000, [{"dimension":"country","operator":"equals","expression":"esp"}])
for r in rows:
    p, q, c = r['keys']
    if '/es/' not in p:
        out.write(f"{c}\t{p}\t{q}\t{r['clicks']}\t{r['impressions']}\t{r['position']:.1f}\n")
