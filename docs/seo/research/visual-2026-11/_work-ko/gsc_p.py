import sys,json
sys.path.insert(0,'scripts/gsc')
import gsc
sys.stdout.reconfigure(encoding='utf-8')
svc=gsc.get_service()
rows=gsc.query(svc,["page"],90,500,[{"dimension":"page","operator":"contains","expression":sys.argv[1]}])
json.dump(rows,open(sys.argv[2],'w',encoding='utf-8'),ensure_ascii=False)
for r in rows: print(r)
