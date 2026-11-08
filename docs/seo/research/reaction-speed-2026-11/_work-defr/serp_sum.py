import json, sys
for l in open(sys.argv[1], encoding='utf-8'):
    d = json.loads(l)
    if 'organic' not in d:
        print(f"\n## {d['query']} [{d['cc']}] ERROR {d.get('error', '')[:60]}")
        continue
    print(f"\n## {d['query']} [{d['cc']}] captcha={d.get('captcha')} answers={d.get('answers')} copilot={d.get('copilot')} ads={len(d.get('ads') or [])}")
    for o in d['organic'][:7]:
        print(f"  {o['rank']}. {o['host']} | {o['title'][:80]}")
    if d.get('paa'):
        print('  PAA:', ' / '.join(str(p)[:80] for p in d['paa'][:4]))
