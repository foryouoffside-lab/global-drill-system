import sys,json
sys.path.insert(0,'../../../../../scripts/keywords')
sys.stdout.reconfigure(encoding='utf-8')
from autocomplete import expand
for s in open('seeds.txt',encoding='utf-8'):
    s=s.strip()
    if not s: continue
    r=expand(s,'de','de')
    print('##',s); print('\n'.join(r[:40]))
