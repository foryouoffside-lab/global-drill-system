import json,csv,sys
src,dst,mk=sys.argv[1],sys.argv[2],sys.argv[3]
w=csv.writer(open(dst,'w',encoding='utf-8',newline=''))
w.writerow(['market','phrase','cc','lang','bing_exact','bing_broad','status','source'])
for l in open(src,encoding='utf-8'):
    try: r=json.loads(l)
    except: continue
    w.writerow([mk,r.get('phrase'),r.get('cc'),r.get('lang'),r.get('exact'),r.get('broad'),r.get('status'),'bing_kw 2026-11-09'])
