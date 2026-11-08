import sys,json,time,os,importlib.util
p=os.path.abspath('../../../../../scripts/keywords/autocomplete.py')
spec=importlib.util.spec_from_file_location('ac',p);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
sys.stdout.reconfigure(encoding='utf-8')
seedfile,cc,lang,outf=sys.argv[1:5]
out={}
for s in open(seedfile,encoding='utf-8').read().split('\n'):
    s=s.strip()
    if not s: continue
    res=[]
    for x in ['',' ']:
        try: res+= m.suggest(s+x,cc,lang)
        except Exception as e: print('ERR',s,e)
        time.sleep(0.3)
    seen=[];[seen.append(r) for r in res if r not in seen]
    out[s]=seen
json.dump(out,open(outf,'w',encoding='utf-8'),ensure_ascii=False,indent=0)
for k,v in out.items(): print(k,'=>',' | '.join(v[:15]))
