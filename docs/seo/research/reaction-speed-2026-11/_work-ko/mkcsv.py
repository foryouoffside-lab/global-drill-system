import json, csv
W='docs/seo/research/reaction-speed-2026-11/_work-ko/'
gsc={}
for r in json.load(open(W+'gsc_kr.json',encoding='utf-8')):
    k=r['q']
    if k not in gsc or r['impr']>gsc[k][1]: gsc[k]=(r['pos'],r['impr'])
serp={
 '반응속도 게임':('LOW','simritest.com;blog.naver.com;giwa-game.tistory.com;blog.naver.com;simplegame.tistory.com'),
 '반사신경 테스트':('MEDIUM','humanbenchmark.com;simritest.com;simritest.com;xn--yq5bk9r.com;testharo.com'),
 '반속 테스트':('MEDIUM','simritest.com;humanbenchmark.com;testmoa.com;aiselftest.com;game-ability-test.com'),
 '반응속도 테스트':('MEDIUM','simritest.com;humanbenchmark.com;m.blog.naver.com;testmoa.com;aiselftest.com'),
 '순발력 테스트':('LOW','simritest.com;aiselftest.com;arealme.com;exysoft.net;humanbenchmark.com'),
 '동체시력 테스트':('LOW','vidkidz.tistory.com;blog.naver.com;arealme.com;contents.premium.naver.com;jiraksil.com'),
}
route={'hub':'/ko/drills/reaction-speed','lr':'/ko/drills/visual/reaction-speed/light-reaction','vt':'/ko/drills/reaction-speed/visual-tracking-speed-test','rg':'/ko/drills/reaction-speed/reaction-game','rf':'/ko/drills/reaction-speed/reflex-training-drill','tt':'/ko/drills/reaction-speed/reaction-time-test','gng':'/ko/drills/visual/reaction-speed/go/no-go','ft':'/ko/drills/reaction-speed/fps-tracking-trainer','bs':'/ko/drills/reaction-speed/barrier-sequence-pursuit','sg':'/ko/drills/reaction-speed/saccadic-gallery'}
def tgt(p):
    if '동체' in p: return 'vt'
    if '맞추기' in p or '스톱워치' in p or '타이밍' in p: return 'tt'
    if '고노고' in p or 'go no' in p: return 'gng'
    if '트래킹' in p: return 'ft'
    if '피킹' in p: return 'bs'
    if '안구' in p or '시선' in p: return 'sg'
    if '순발력' in p or '반사신경 게임' in p: return 'rf'
    if p in ('반응속도 게임','반응속도 올리는 게임'): return 'rg'
    if '훈련' in p or '연습' in p or '빨라' in p or p=='반사신경 테스트' or p=='반사신경 테스트 게임': return 'hub'
    return 'lr'
rows=[]
prior=[('반응속도 테스트',10032,10542),('반응속도테스트',642,642),('순발력 테스트',170,170),('반속 테스트',282,726),('반속테스트',316,425),('동체시력 테스트',56,56),('반응속도 키우기',84,84),('반응속도 훈련',0,0),('반응속도 게임',0,0),('반응속도 측정',0,0)]
for p,e,b in prior:
    rows.append((p,e,b,'ok (2026-09-04 Bing exact, reused)'))
for l in open(W+'kw1.jsonl',encoding='utf-8'):
    d=json.loads(l); rows.append((d['phrase'],d.get('exact'),d.get('broad'),d['status']+' (2026-11-08 Bing exact)'))
with open('docs/seo/research/reaction-speed-2026-11/ko.csv','w',encoding='utf-8-sig',newline='') as f:
    w=csv.writer(f); w.writerow('phrase,cc,lang,exact,broad,status,trend_pct,competition,top5_hosts,intent,target_route,gsc_pos,gsc_impr'.split(','))
    for p,e,b,st in rows:
        c,h=serp.get(p,('UNKNOWN',''))
        g=gsc.get(p,('',''))
        t=tgt(p)
        intent='tool' if t!='hub' else 'tool/hub-browse'
        w.writerow([p,'kr','ko-KR','' if e is None else e,'' if b is None else b,st,'',c,h,intent,route[t],g[0],g[1]])
        print(p,e,b,st,route[t],g)
