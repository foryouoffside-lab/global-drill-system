import json, csv, os
W='_work-defr'
rows=[]
for fn in ['kw.jsonl','kw2.jsonl']:
    p=os.path.join(W,fn)
    if os.path.exists(p):
        for l in open(p,encoding='utf-8'):
            l=l.strip()
            if l.startswith('{'): rows.append(json.loads(l))
serp={}
for l in open(os.path.join(W,'serp.jsonl'),encoding='utf-8'):
    d=json.loads(l)
    if 'organic' in d: serp[(d['query'],d['cc'])]=d
meta={  # phrase,cc -> (competition,intent,target,gsc_pos,gsc_impr)
 ('reaktionstest','de'):('medium: tool sites cps-check/humanbenchmark/brain-fit/plakos (MPU prep)','tool (online test) + some MPU/Führerschein prep','/de/drills/visual/reaction-speed/light-reaction','',''),
 ('reaction time test','de'):('medium: arealme/cps-check/human-benchmark/aimtrainer','tool','/de/drills/visual/reaction-speed/light-reaction (secondary)','',''),
 ('reaction test','de'):('unprobed','tool','/de/drills/visual/reaction-speed/light-reaction (secondary)','',''),
 ('test de reflexe','fr'):('medium: humanbenchmark/cps-check/cpstest.io/aimtrainer','tool (reaction-time tools)','/fr/drills/reaction-speed/reflex-training-drill','5.0','2 (query "test de réflexe")'),
 ('test de réflexe','fr'):('mixed: jacquote game + medical reflex (msdmanuals, Babinski)','mixed tool/medical','/fr/drills/reaction-speed/reflex-training-drill','5.0','2'),
 ('reaction time test','fr'):('medium: arealme/cps-check/cpstest.click/human-benchmark','tool','/fr/drills/visual/reaction-speed/light-reaction (secondary)','',''),
 ('temps de réaction','fr'):('hard/off-intent: driving-school sites (ornikar, envoituresimone, lepermislibre) + cps-check #1','informational driving','/fr/drills/reaction-speed (hub, secondary)','',''),
 ('temps de reaction','fr'):('see accented','informational driving','/fr/drills/reaction-speed (hub, secondary)','',''),
 ('test de rapidité','fr'):('off-intent: typing/CPS/speedtest','typing/internet speed','KILL','',''),
 ('test reaction','fr'):('unprobed','tool','/fr/drills/visual/reaction-speed/light-reaction (secondary)','',''),
 ('reflex test','fr'):('unprobed','tool','/fr/drills/reaction-speed/reflex-training-drill (secondary)','',''),
 ('reflex test','de'):('unprobed','tool','/de/drills/reaction-speed/reflex-training-drill (secondary)','',''),
 ('go no go','fr'):('unprobed (likely EN aviation/psych)','mixed','/fr/drills/visual/reaction-speed/go/no-go','',''),
}
extra=json.load(open(os.path.join(W,'meta2.json'),encoding='utf-8')) if os.path.exists(os.path.join(W,'meta2.json')) else {}
for k,v in extra.items():
    p,c=k.split('|'); meta[(p,c)]=tuple(v)
for mkt in ['de','fr']:
    ccs={'de':['de','at','ch'],'fr':['fr','be','ca']}[mkt]
    with open(f'{mkt}.csv','w',encoding='utf-8',newline='') as f:
        w=csv.writer(f); w.writerow('phrase,cc,lang,exact,broad,status,trend_pct,competition,top5_hosts,intent,target_route,gsc_pos,gsc_impr'.split(','))
        for r in rows:
            if r['cc'] not in ccs: continue
            m=meta.get((r['phrase'],r['cc']),('','','KILL' if (r.get('exact') or 0)==0 and r['status']=='ok' else '','',''))
            s=serp.get((r['phrase'],r['cc']))
            hosts=' '.join(o['host'] for o in s['organic'][:5]) if s else ''
            st=r['status'] if r['status']=='ok' else 'UNKNOWN('+r['status'][:30]+')'
            w.writerow([r['phrase'],r['cc'],r['lang'],r.get('exact') if r.get('exact') is not None else 'UNKNOWN',r.get('broad') if r.get('broad') is not None else 'UNKNOWN',st,r.get('trend_pct',''),m[0],hosts,m[1],m[2],m[3],m[4]])
print('ok', len(rows))
