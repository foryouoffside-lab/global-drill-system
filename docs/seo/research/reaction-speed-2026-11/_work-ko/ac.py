import sys, json
sys.path.insert(0, 'scripts/keywords')
sys.stdout.reconfigure(encoding='utf-8')
from autocomplete import suggest
out = {}
for s in open('docs/seo/research/reaction-speed-2026-11/_work-ko/seeds.txt', encoding='utf-8'):
    s = s.strip()
    if not s: continue
    sug = suggest(s, 'kr', 'ko')
    sug2 = suggest(s + ' ', 'kr', 'ko')
    out[s] = list(dict.fromkeys(sug + sug2))
    print(s, '=>', ' | '.join(out[s][:14]))
json.dump(out, open('docs/seo/research/reaction-speed-2026-11/_work-ko/ac.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
