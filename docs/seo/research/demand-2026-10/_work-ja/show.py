import json,sys
sys.stdout.reconfigure(encoding='utf-8')
for l in open(sys.argv[1],encoding='utf-8'):
    d=json.loads(l)
    print('##',d['query'],{k:d.get(k) for k in d if k not in('organic','query','cc','lang')})
    for o in d.get('organic',[])[:10]:
        print(' ',o['rank'],o['host'],'|',o['title'][:50])
