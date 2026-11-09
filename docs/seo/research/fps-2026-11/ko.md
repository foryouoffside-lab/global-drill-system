# ko (South Korea, ko-KR, cc kr) - FPS page -> primary keyword map

Status: COMPLETE 2026-11-09 (coordinator finished steps 4-5 after agent died; Bing 40/40 ok, 1 run).

## Step 1 - GSC (90 d, page x query, `/ko/drills/fps*`) -> `_work-ko/gsc_ko_page_query.json`
- Hub `/ko/drills/fps` takes ~all FPS demand: 에임 연습 78c/1470i p7.1, 에임연습 59c/1221i p7.0, 발로 에임 연습 사이트 10c/162i p9.2, 발로란트 에임 연습 사이트 1c/152i p8.6.
- Hub ranks pos 2.6-6.8 for the 대기샷 (Valorant hold-the-angle shot) family WITHOUT the word on any page: 발 로란트 대기 샷 연습 사이트 22c/65i p2.6, 발로란트 대기샷 연습 11c/29i p4.0, 발로란트 대기샷 사이트 5c/29i, 대기샷 연습 5c/22i, 발로란트 대기샷 연습 사이트 4c/24i, 발로 대기샷 연습 사이트 0c/11i, 대기샷 연습 사이트 10i. Total ~48 clicks / ~200 impr. 대기샷 = angle-hold-trainer mechanic.
- Also on hub: 프리에이밍 연습 사이트 (발로란트/발로 variants) ~20i, 에임 트레이너 28i + 에임트레이너 18i, 에임 트래킹 23i, 트래킹 연습 13i.
- Drill pages are near-invisible: anti-strafe 128i (트래킹 연습 10i), vertical-air-track 110i (에임 트래킹/트래킹 에임 ~15i, p13-15), 180-degree 110i (fps 180 5i), flick 3i, instant-response 4i. Others 0.
- Korean-keyboard-in-English-mode queries (dpdladustmq = 에임연습) 130i -> same intent as 에임연습.

## Step 2 - Google autocomplete gl=kr (10 seeds, `_work-ko/ac.txt`, UNMEASURED)
- 대기샷: 대기샷 연습, 대기샷 연습 사이트, 발로란트 대기샷, 발로 대기샷, 대기샷 에임랩, 코박스 대기샷, 데스매치 대기샷 -> real gamer term, Valorant-centric.
- 플릭샷: 플릭샷 연습, 플릭샷 연습 사이트, 플릭샷 잘하는법, 플릭샷 끌어치기, fps 플릭샷, 플릭 샷 연습.
- 반동 연습: 반동 연습 사이트, 반동 잡기 연습, 배그 반동 연습 (사이트), 반동 제어 연습 (사이트), 반동잡기 연습, 반동테스트.
- 트래킹 연습: 트래킹 연습 사이트, 에임 트래킹 연습 (사이트), 오버워치 트래킹 연습, fps 트래킹 연습, 마우스 트래킹 연습, 트래킹 에임연습, 트래킹 훈련, 트래킹 테스트.
- 에임 연습: 에임 연습 게임/프로그램/워크샵/장/방/사이트 링크/무료 사이트/웹사이트/웹, cs2 에임 연습, fps 에임 연습 사이트, fps 게임 에임 연습.
- 180도: zero gaming suggestions (only 180도 법칙/회전 etc.). 타겟 스위칭: only 타겟 스위칭 디시 / 타겟스위칭 (thin).
- 에임 미세: 에임 미세조정, 발로 에임 미세 조정, 미세 에임, 에임 랩 미세 조정. 수직 에임: no gaming phrases beyond 수직 에임 / 수직 반동 제어. 무빙 에임: 좌우 무빙 에임, ad무빙 에임, 발로란트/오버워치 무빙 에임.

## Step 3 - Bing SERP probe (3 of 3 used): 대기샷 연습, 플릭샷 연습, 반동 연습 사이트 -> all 3 failed (`#b_results li.b_algo` selector timeout, `_work-ko/serp.log/.jsonl`). Competition = UNKNOWN for every page. Not retried (cap).

## Step 4 - Bing volume (ko-KR, exact/broad, `_work-ko/kw.jsonl`, rows in `ko.csv`)
- 에임연습 1,425/2,119 · 에임 연습 사이트 1,184/2,671 · 발로란트 에임 연습 사이트 1,103/1,103 · 에임 연습 388/3,362 · 발로 에임 연습 사이트 384 · 발로란트 에임 연습 303/1,406 · 발로란트 연습 사이트 262 · 에임 테스트 90 · 에임 트레이너 62/84.
- Every mechanic term = 0 (대기샷*, 프리에이밍*, 플릭샷*, 끌어치기, 반동*, 트래킹*, 미세조정, 타겟 스위칭, 수직 에임, 180*, 무빙 에임, 클릭 반응속도 테스트, fps 연습). Same pattern as DE: Bing KR panel is small; GSC proves 대기샷 has real Google demand (~200 impr / 48 clicks in 90 d on the hub). Treat mechanic terms as "GSC/AC-proven, Bing-unmeasurable".

## Index state (GSC URL Inspection, 2026-11-07)
- Indexed: hub, vertical-air-track, flick-shot, 180, instant-response, anti-strafe.
- angle-hold = CRAWLED not indexed (the page that should own 대기샷). target-acquisition, strafe-tracking, anti-zigzag, flow-state = URL unknown. Others discovered-not-indexed. Motor ko aim-trainer = discovered-not-indexed (0 GSC impressions) -> its title claim on 에임 연습 사이트 is not working; the hub does all the ranking.

## Page -> primary map (paths under /ko/drills/)

| page | current title | proposed primary | secondaries | evidence | competition | action |
|---|---|---|---|---|---|---|
| fps (hub) | FPS 에임 연습 & 무료 에임 트레이너 | 에임 연습 / 에임연습 (PROTECTED) | 에임 트레이너 (62), 에임 연습 사이트 (1,184) | 388/3,362 + 1,425; GSC 274 clk / 4,508 impr pos 7.2 | UNKNOWN (probes failed) | KEEP title. Add one hub-card line naming 대기샷 for angle-hold (keeps the hub's existing 대기샷 rankings while angle-hold gets indexed) |
| fps/target-acquisition | 발로란트 에임 연습 - 타겟 포착 트레이너 | 발로란트 에임 연습 사이트 | 발로 에임 연습 사이트 (384), 발로란트 에임 연습 (303), 발로란트 연습 사이트 (262) | 1,103 exact; hub ranks 8.6 for it (152 impr); page URL unknown | UNKNOWN | retarget: `발로란트 에임 연습 사이트 - 첫 발 타겟 포착`; Valorant only as usage context ("발로란트용") |
| fps/angle-hold-trainer | 프리에이밍 연습 \| 대기 에임·각 쪼개기 | 대기샷 연습 | 발로란트 대기샷 연습 사이트, 프리에이밍 연습 사이트, 각 잡기 | GSC hub pos 2.6-6.8, ~200 impr/48 clk; AC 대기샷 연습/사이트/발로란트; Bing 0 | UNKNOWN | retarget: `대기샷 연습 사이트 \| 발로란트 프리에이밍·각 잡기`; verify drill = hold angle, shoot target that peeks |
| fps/flick-shot-training | 에임 연습 사이트 - 플릭샷 트레이너 | 플릭샷 연습 | 플릭샷 연습 사이트, 끌어치기 연습, fps 플릭샷 | AC strong; Bing 0; GSC 3 impr | UNKNOWN | retarget: drop `에임 연습 사이트` lead (hub/motor), `플릭샷 연습 사이트 \| 끌어치기 에임 트레이너` |
| fps/recoil-control | 반동 제어 연습 \| FPS 스프레이 컨트롤 | 반동 연습 사이트 | 반동 제어 연습, 반동 잡기 연습, 배그 반동 연습 | AC 반동 연습 사이트/반동 잡기/배그; Bing 0 | UNKNOWN | retarget lightly: `반동 연습 사이트 \| 반동 제어·스프레이 컨트롤` |
| fps/strafe-tracking | 트래킹 에임 연습 \| FPS 좌우 무빙 추적 | 무빙 에임 연습 | 좌우 무빙 에임, AD 무빙 트래킹 | AC 좌우 무빙 에임 / ad무빙 에임; Bing 0 | n/a | retarget: 트래킹 에임 연습 belongs to reaction fps-tracking-trainer -> `무빙 에임 연습 \| 좌우 AD 무빙 트래킹` |
| fps/pro-smooth-pursuit | 에임 트래킹 연습 \| 스무스 트래킹 FPS | 에임 트래킹 연습 | 스무스 트래킹, 마우스 트래킹 연습 | AC 에임 트래킹 연습 (사이트); Bing 0 | n/a | keep |
| fps/anti-strafe-jitter-duel | 에임 연습 \| 무빙 트래킹·ADAD 대응 | 트래킹 연습 사이트 | ADAD 대응, 반응 트래킹 | GSC 128 impr (트래킹 연습 10i, pos 7.5, 10 clk); AC 트래킹 연습 사이트 | n/a | retarget: drop `에임 연습 \|` lead -> `트래킹 연습 사이트 \| ADAD 무빙 대응` |
| fps/anti-zigzag-movement-trainer | 에임 연습 \| 지그재그 무빙·트래킹 | 지그재그 무빙 트래킹 | 회피 무빙 대응 | no measured term | n/a | no-demand descriptive; drop `에임 연습 \|` lead |
| fps/micro-correction-precision | 에임 연습 \| 마이크로 플릭 미세조정 | 에임 미세조정 연습 | 마이크로 플릭, 미세 에임 | AC 에임 미세조정 / 발로 에임 미세 조정; Bing 0 | n/a | retarget: `에임 미세조정 연습 \| 마이크로 플릭` |
| fps/target-prioritization | 에임 연습 \| 타겟 선택·위협 판단 | 타겟 우선순위 판단 | 위협 판단, 사격 억제 | none | n/a | no-demand descriptive; drop lead |
| fps/target-switching-swarm | 타겟 스위칭 에임 연습 - 다중 타겟 전환 | 타겟 스위칭 연습 | 다중 타겟 전환 | AC thin (타겟스위칭); Bing 0 | n/a | keep |
| fps/vertical-air-track | 수직 에임 연습 - 공중 트래킹 | 수직 에임 연습 | 공중 트래킹, 수직 반동 | GSC 110 impr pos 10.9 (에임 트래킹 ~15i); indexed | n/a | keep |
| fps/180-degree-awareness | 180도 에임 연습 \| 180도 턴 트레이너 | 180도 에임 연습 | 180도 턴, 뒤돌아 쏘기 | GSC 110 impr pos 9.0; indexed; AC no gaming 180 | n/a | keep |
| fps/flow-state | FPS 집중력 훈련 \| 플로우 에임 트레이너 | FPS 집중력 훈련 | 플로우 상태 | none | n/a | keep primary; `플로우 에임 트레이너` -> `플로우 상태 연습` (avoid 에임 트레이너 overlap) |
| fps/instant-response | 반응속도 테스트 \| FPS 클릭 반응 측정 | FPS 클릭 반응 테스트 | 클릭 반응속도 측정 | 반응속도 테스트 (10,032) is light-reaction's primary; 클릭 반응속도 테스트 0 | n/a | retarget: drop `반응속도 테스트` lead -> `FPS 클릭 반응 테스트 \| 클릭 반응속도 측정` |

Outside FPS: motor `/ko/drills/motor/hand-eye-coordination/aim-trainer` keeps 에임 연습 사이트 + 에임 테스트 (90) as its own claim, but it is not indexed and 0 impr; hub stays the de-facto owner. No change in the FPS pass.

## Collisions resolved
1. 에임 연습 사이트 lead on flick-shot -> removed (hub/motor).
2. `에임 연습 |` lead on anti-strafe, anti-zigzag, micro, target-prioritization -> removed (hub owns 에임 연습).
3. 트래킹 에임 연습: reaction fps-tracking-trainer keeps it; strafe-tracking -> 무빙 에임 연습.
4. 반응속도 테스트 on instant-response -> light-reaction owns it.
5. 발로란트 에임 연습 사이트: target-acquisition (page-specific) vs hub (ranks 8.6). Accepted: hub keeps generic 에임 연습, target-acquisition takes the Valorant phrasing. Re-check GSC in 4-6 weeks.
6. 대기샷: angle-hold primary; hub keeps a card mention so its current pos 2.6 rankings are not cut before angle-hold is indexed. Priority Request-Indexing after deploy: ko angle-hold, ko target-acquisition.

## Kill list (Bing ko-KR exact 0, status ok)
fps 에임 연습, 무료 에임 연습, 에임 연습 게임, 대기샷 (all 4 forms), 프리에이밍 (2), 플릭샷 (2), 플릭 연습, 끌어치기 연습, 반동 (4 forms), 트래킹 (5 forms), 에임 훈련, 에임 미세조정, 타겟 스위칭, 수직 에임, 180도 턴, fps 180, 무빙 에임, 클릭 반응속도 테스트, fps 연습. (Zero on Bing only; several have GSC/AC proof, see table.)
