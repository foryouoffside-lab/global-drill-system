import sys,json,time,importlib.util
p=sys.argv[1]
spec=importlib.util.spec_from_file_location('ac',p);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
sys.stdout.reconfigure(encoding='utf-8')
suf=['',' ',' 練習',' テスト',' ゲーム',' サイト',' fps',' valorant',' 無料',' やり方']
out={}
for s in open('seeds.txt',encoding='utf-8').read().split('\n'):
    s=s.strip()
    if not s: continue
    res=[]
    for x in suf:
        res+= m.suggest(s+x,'jp','ja'); time.sleep(0.3)
    seen=[];[seen.append(r) for r in res if r not in seen]
    out[s]=seen
json.dump(out,open('ac2.json','w',encoding='utf-8'),ensure_ascii=False,indent=0)
for k,v in out.items(): print(k,'=>',' | '.join(v[:45]))
