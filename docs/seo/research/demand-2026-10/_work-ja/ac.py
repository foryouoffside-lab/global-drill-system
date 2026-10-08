import sys,json,time
sys.path.insert(0,'../../../../scripts/keywords')
sys.path.insert(0,'../../../../../scripts/keywords')
import importlib.util,os
p=os.path.abspath('../../../../../scripts/keywords/autocomplete.py')
spec=importlib.util.spec_from_file_location('ac',p);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
sys.stdout.reconfigure(encoding='utf-8')
suf=['',' ','無料',' 登録不要',' 測定',' 方法',' とは',' やり方',' ゲーム',' サイト']
out={}
for s in open('seeds.txt',encoding='utf-8').read().split('\n'):
    s=s.strip()
    if not s: continue
    res=[]
    for x in suf:
        res+= m.suggest(s+x,'jp','ja'); time.sleep(0.25)
    seen=[];[seen.append(r) for r in res if r not in seen]
    out[s]=seen
json.dump(out,open('ac.json','w',encoding='utf-8'),ensure_ascii=False,indent=0)
for k,v in out.items(): print(k,'=>',' | '.join(v[:25]))
