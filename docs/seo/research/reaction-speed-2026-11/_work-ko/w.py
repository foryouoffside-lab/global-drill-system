import sys, unicodedata
sys.stdout.reconfigure(encoding='utf-8')
for s in open(sys.argv[1], encoding='utf-8').read().split('\n'):
    if not s: continue
    w = sum(2 if unicodedata.east_asian_width(c) in 'WF' else 1 for c in s)
    print(w, s)
