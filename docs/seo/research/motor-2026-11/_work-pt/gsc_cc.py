import sys, os
sys.path.insert(0, os.path.join(os.getcwd(), 'scripts', 'gsc'))
import gsc
svc = gsc.get_service()
cc, loc, outp = sys.argv[1], sys.argv[2], sys.argv[3]
out = open(outp, 'w', encoding='utf-8')
rows = gsc.query(svc, ["page", "query", "country"], 90, 25000, [{"dimension":"page","operator":"contains","expression":f"/{loc}/drills/motor"}])
for r in rows:
    p, q, c = r['keys']
    out.write(f"{c}\t{p}\t{q}\t{r['clicks']}\t{r['impressions']}\t{r['position']:.1f}\n")
rows = gsc.query(svc, ["page", "query"], 90, 25000, [{"dimension":"country","operator":"equals","expression":cc}])
for r in rows:
    p, q = r['keys']
    if f'/{loc}/' not in p and ('/motor' in p or 'keyboard' in p or 'cps' in q.lower() or 'teclad' in q.lower() or 'clic' in q.lower()):
        out.write(f"{cc}\t{p}\t{q}\t{r['clicks']}\t{r['impressions']}\t{r['position']:.1f}\n")
