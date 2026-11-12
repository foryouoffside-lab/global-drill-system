import sys,json
sys.path.insert(0,'scripts/gsc')
import gsc
svc=gsc.get_service()
rows=gsc.query(svc,["page","query"],90,5000,[{"dimension":"page","operator":"contains","expression":sys.argv[1]}])
json.dump(rows,open(sys.argv[2],'w',encoding='utf-8'),ensure_ascii=False)
print(len(rows))
