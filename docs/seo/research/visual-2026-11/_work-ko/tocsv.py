import json,csv,sys
src,dst=sys.argv[1],sys.argv[2]
with open(dst,'w',newline='',encoding='utf-8') as f:
  w=csv.writer(f); w.writerow(['phrase','cc','lang','exact','broad','status'])
  for l in open(src,encoding='utf-8'):
    d=json.loads(l); w.writerow([d['phrase'],d['cc'],d['lang'],d['exact'],d['broad'],d['status'][:60]])
