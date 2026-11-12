# PHYSICAL category - ko (ko-KR) keyword map - 2026-11-10

Status: COMPLETE (Phase A, 2026-11-10 evening, data-only resume)

## Inputs used
- GSC 90d page x query, `/ko/drills/physical*` (`_work-ko/gsc-page-query-90d.jsonl`): only 2 rows - hub `피지컬 테스트 게임` 5 impr pos 8.2, `skilldrills` 1. All 10 drill pages: 0 impressions. Pages table: hub 28 impr pos 8.8.
- Prior measured (Bing kr, status ok): 순발력 테스트 170 (reaction reflex-training-drill, TAKEN), 반사신경 테스트 31 (reaction hub secondary, TAKEN), 클릭속도 테스트 1,134 (motor rapid-tapping, TAKEN), 반사신경 게임/반사신경 훈련/순발력 테스트 게임/주변시야 훈련/클릭 속도 측정 0.
- TAKEN (never reuse as primary): fps `에임 연습`, `대기샷 연습`, `플릭샷 연습`, `반동 연습 사이트`, `무빙 에임 연습`, `에임 트래킹 연습`, `트래킹 연습 사이트`, `에임 미세조정 연습`; motor `마우스 연습`, `에임 연습 사이트`, `마우스 정확도 테스트`, `마우스 미로 게임`, `CPS 측정`, `클릭속도 테스트`, `키보드 반응속도 테스트`; reaction `반응속도 훈련`, `반응속도 테스트`, `반응속도 게임`, `순발력 테스트`, `동체시력 테스트`, `트래킹 에임 연습`, `시간 감각 게임`, `시선 이동 훈련 게임`, `고노고 과제`.

## Mechanics (verified from app/drills/physical/*/*Client.js RULES)
- stability-challenge: keep crosshair inside shrinking safe ring against wind drift (mouse).
- complex-pattern: memorise flashed multi-node path, then drag it from start to end node (path-similarity %).
- cross-body-movement: drag cursor along diagonal corridor between two nodes without leaving it.
- dynamic-grid-evasion: 3x3 grid, move cursor to safe cell before warned cells explode.
- agility-ladder: scrolling ladder, hit 4 rungs L/R in sequence with the cursor.
- jump-sequence: hold click to charge, release to jump, steer mid-air to hit a target.
- speed-drill: click moving, shrinking targets before they vanish (NOT a CPS counter).
- drop-catch: click falling green targets, avoid red decoys.
- peripheral-threat-sweeper: click threats approaching the core from the periphery.
- quick-dodge: move cursor to dodge homing obstacles from the edges.
- reaction-chain: stop the cursor fully inside moving nodes (over-aim / stopping control).

## Effective current titles (Object.assign overrides win)
- hub: `반응속도·민첩성 훈련 | 순발력 테스트 11종` (the first `metadata.title` is overwritten). Collides with reaction hub `반응속도 훈련` and reaction reflex-training-drill `순발력 테스트`.
- jump-sequence: `점프 타이밍 훈련 | 무료 점프 게임` (override; the base `점프력 높이는 운동 & 서전트 점프 훈련` is dead text but still in source and describes a real workout - dishonest).
- speed-drill: `에임 반응속도 테스트 | 클릭 속도 게임`.

## Autocomplete (Google kr, 10 calls, `_work-ko/ac.txt`) - proxy only
- 피지컬 테스트: `피지컬 테스트 게임`, `마우스 피지컬 테스트`, `롤 피지컬 테스트`, `손가락 피지컬 테스트`, `피지컬 측정` (rest = Physical:100 TV / physical AI noise).
- 손떨림 테스트: all medical (자가진단, 검사, 치료, adhd) or camera stabilisation - wrong intent for stability-challenge.
- 협응력 테스트: `눈 손 협응력 테스트`, `협응성 테스트`, `협응력 검사`, `협응력 트레이닝`.
- 도형 기억: `도형 순서 기억하기 (연습/사이트/팁)`, `도형 위치 기억하기`, `역검/잡다/AI 역량검사 도형 기억하기` - job-assessment practice intent.
- 피하기 게임: `마우스 피하기 게임`, `총알/화살/공/장애물 피하기 게임`, `똥 피하기 게임`, `롤스킬 피하기 게임`.
- 점프 게임: `구글 공룡 점프 게임`, `점프 킹`, `점프 게임 무료/사이트/온라인` - platformer intent.
- 클릭 게임: `마우스 클릭 게임`, `순발력 클릭 게임`, `클릭 게임 사이트`, idle/clicker noise.
- 자 떨어뜨리기: nothing on-topic (noise) - ruler-drop phrasing does not exist in kr Suggest.
- 주변시야: medical (검사, 결손, 흐려짐) + `주변시야 훈련`, `주변 시 테스트`.
- 오버에임: `오버에임 뜻/디시/트레이닝`, `발로란트 오버에임`, `에임 오버슈팅`.

## Bing ko-KR batch (2026-11-10, `_work-ko/kw.jsonl`, 40 rows, raw -> `ko.csv`)
- Canary `클릭속도 테스트` 1,134/1,134 = known value -> API live, zeros below are REAL zeros.
- Non-zero: `똥피하기 게임` 793/838, `마우스 게임` 276/276, `피지컬 테스트` 101/167, `클릭 게임` 21/21. Every other physical phrase = 0.

## SERP probes (Bing kr, cap 3 spent, `_work-ko/serp.jsonl`)
- `피지컬 테스트`: probe timed out (no `li.b_algo`) -> competition UNKNOWN. Not retried (cap).
- `똥피하기 게임`: probe timed out -> UNKNOWN. Not retried (cap).
- `마우스 게임`: poki.com, crazygames.co.kr, vidkidz.tistory (flash archive `무식한 마우스피하기`), ko.y8.com, arealme.com (2d 사격 테스트), vidkidz `마우스 컨트롤게임` -> HIGH (game portals). A mouse-dodge classic ranks #3 -> generic mouse-skill-game intent; fits a hub of mouse drills.

## Dodge-game judgement (`똥피하기 게임` 793)
- 똥피하기 = named classic: character on a bottom strip moves left/right, objects fall from the top, one hit = game over.
- quick-dodge (`QuickDodgeClient.js` `spawnObstacle`): obstacles spawn from all 4 edges aimed at the cursor (homing angle), free 2D mouse movement, a hit resets combo (no game over), 15+ levels. Same family (survive by dodging incoming objects with the mouse), different game.
- dynamic-grid-evasion: discrete 3x3 grid, move to a safe cell before warned cells explode -> hazard-zone timing, NOT projectile dodging. Weaker fit.
- Decision: the honest `피하기 게임` family goes to **quick-dodge** (primary `마우스 피하기 게임`, already live). `똥피하기 게임` must NOT be in title/H1/keywords (implies it is that game; searchers wanting the original bounce). Allowed only as one comparison line in body/FAQ, e.g. `똥피하기처럼 날아오는 장애물을 피하는 게임이지만, 위에서만 떨어지지 않고 사방에서 커서를 향해 날아옵니다.` -> OWNER DECISION. dynamic-grid-evasion keeps the distinct `칸 피하기` phrase.

## Page map (12 rows)

| page | current title (effective) | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition note | action |
|---|---|---|---|---|---|---|
| hub `/ko/drills/physical` | 반응속도·민첩성 훈련 \| 순발력 테스트 11종 (Object.assign override) | 피지컬 테스트 | 피지컬 테스트 게임, 마우스 피지컬 테스트, 무료 마우스 게임 | 피지컬 테스트 101/167; 마우스 게임 276/276; GSC hub 28i pos 8.8, `피지컬 테스트 게임` 5i pos 8.2 (Bing 0); AC 피지컬 테스트 게임 / 마우스·롤·손가락 피지컬 테스트 | 피지컬 테스트 UNKNOWN (probe timeout); 마우스 게임 HIGH (poki/crazygames/y8) | retarget: e.g. `피지컬 테스트 \| 무료 마우스 게임 11종 \| SkillDrills`. Drop 반응속도 훈련 + 순발력 테스트 (reaction primaries). Copy: browser mouse drills, not real fitness |
| balance-training/stability-challenge | 마우스 에임 안정성 테스트 | 마우스 에임 안정성 테스트 | 커서 안정성, 에임 흔들림 (body copy) | 손떨림 테스트 0, 마우스 손떨림 테스트 0, 에임 흔들림 0; AC 손떨림 = medical | n/a | keep (no-demand descriptive). Never target 손떨림 테스트 (medical self-diagnosis intent) |
| coordination/complex-pattern | 도형 순서 기억 게임 \| 공간 기억력 테스트 | 도형 순서 기억 게임 | 도형 순서 기억하기 연습, 경로 따라 그리기 | 도형 순서 기억하기 0, 도형 기억하기 게임 0, …연습 0; AC 도형 순서 기억하기 (역검/AI 역량검사 practice) | n/a | keep primary; DROP `공간 기억력 테스트` (memory object-location primary). Never claim it is the 역량검사 task |
| coordination/cross-body-movement | 눈 손 협응력 테스트 \| 협응력 게임 | 눈 손 협응력 테스트 | 협응력 게임, 협응력 테스트 | 0/0 all three; AC 눈 손 협응력 테스트, 협응성 테스트 | n/a | keep (no-demand descriptive) |
| coordination/dynamic-grid-evasion | 칸 피하기 반응 게임 \| 주변시 회피 훈련 | 칸 피하기 게임 | 격자 위험 회피, 안전한 칸 찾기 | 칸 피하기 게임 0 | n/a | keep primary; replace secondary `주변시 회피 훈련` (overlaps visual-tracking `주변시 훈련` + sweeper). Guide H3 `동체시력…` -> reword (reaction `동체시력 테스트` TAKEN) |
| fitness/agility-ladder | 스텝레더 훈련 \| 풋워크 민첩성 | 스텝레더 게임 | 사다리 칸 순서 클릭, 좌우 리듬 클릭 | 스텝 레더 0; no AC | n/a | retarget (honesty): `훈련`/`풋워크` imply real footwork. e.g. `스텝레더 게임 \| 마우스로 사다리 칸 순서대로 맞히기` |
| fitness/jump-sequence | 점프 타이밍 훈련 \| 무료 점프 게임 (override) | 점프 타이밍 게임 | 점프 게임 | 점프 게임 0, 점프 게임 사이트 0; AC 점프 게임 = platformer (구글 공룡, 점프 킹) | n/a | retarget title to `점프 타이밍 게임`; DELETE dead base title `점프력 높이는 운동 & 서전트 점프 훈련 – 플라이오메트릭` (real-workout claim) from metadata + OG |
| fitness/speed-drill | 에임 반응속도 테스트 \| 클릭 속도 게임 | 클릭 게임 | 마우스 클릭 게임, 작아지는 표적 클릭 | 클릭 게임 21/21; 마우스 클릭 게임 0; 에임 반응속도 테스트 0; AC 마우스 클릭 게임 | not probed (<50) | retarget: e.g. `클릭 게임 \| 작아지는 표적 맞히기`. Remove `클릭 속도 게임`, `클릭 속도 훈련` (no CPS measured), `순발력 테스트` (reaction), `무료 에임 연습` (fps) from keywords |
| reflex-training/drop-catch | 자 떨어뜨리기 반응속도 게임 \| 초록 표적 잡기 | 떨어지는 표적 잡기 게임 | 낙하 표적 클릭, 함정 피하기 | 자 떨어뜨리기 반응속도 0, 자 잡기 반응속도 0; no on-topic AC | n/a | retarget (no-demand descriptive): ruler-drop is a real-world test the drill does not perform; remove `반응속도 게임` / `순발력 게임` / `반사신경 게임` (reaction) from keywords |
| reflex-training/peripheral-threat-sweeper | 주변시야 훈련 게임 \| 주변 시야 반응 테스트 | 주변시야 훈련 게임 | 주변시야 게임, 주변시야 테스트 | 주변시야 훈련 0 (prior), 주변시야 테스트 0, 주변시야 게임 0; AC 주변시야 훈련 (rest medical) | n/a | keep; remove keyword `주변시 훈련` (visual-tracking peripheral-ping-pursuit primary). No vision-improvement / medical claims |
| reflex-training/quick-dodge | 마우스 피하기 게임 \| 탄막 피하기 순발력 테스트 | 마우스 피하기 게임 | 피하기 게임, 장애물 피하기 게임, 총알 피하기 게임 | all 0; 똥피하기 게임 793/838 (comparison only); AC 마우스/총알/장애물/똥 피하기 게임 | 똥피하기 UNKNOWN (probe timeout) | keep primary; drop `순발력 테스트` from title and `순발력 테스트 게임` from keywords (reaction). Optional one-line 똥피하기 comparison in body (owner decision) |
| reflex-training/reaction-chain | 오버에임 교정 훈련 \| 마우스 에임 브레이킹 | 오버에임 교정 훈련 | 오버에임 트레이닝, 에임 정지 연습 | 오버에임 0, 오버에임 트레이닝 0; AC 오버에임 뜻/트레이닝, 발로란트 오버에임 | n/a | keep; remove keyword `무료 에임 연습` (fps `에임 연습` TAKEN) |

## Collisions resolved
1. Hub `반응속도 훈련` (reaction hub) + `순발력 테스트` (reaction reflex-training-drill) -> hub moves to `피지컬 테스트`.
2. speed-drill `순발력 테스트` + `무료 에임 연습` (fps) + false `클릭 속도` terms (motor rapid-tapping owns 클릭속도 테스트/CPS) -> `클릭 게임`.
3. `마우스 게임` (276) vs motor hub `마우스 연습` / `마우스 연습 게임` (153): different phrase, different SERP (portals vs kids 컴기초 blogs). Physical hub SECONDARY only; motor hub keeps `마우스 연습`.
4. complex-pattern `공간 기억력 테스트` = memory object-location primary -> dropped.
5. sweeper `주변시 훈련` keyword + dynamic-grid `주변시 회피` vs visual-tracking peripheral-ping-pursuit `주변시 훈련` -> sweeper keeps `주변시야 훈련 게임`; dynamic-grid drops 주변시.
6. quick-dodge `순발력 테스트` (title) + drop-catch `반응속도 게임`/`순발력 게임`/`반사신경 게임` (reaction) -> removed.
7. reaction-chain `무료 에임 연습` (fps) -> removed.
8. `피하기 게임` family: quick-dodge owns `마우스 피하기 게임`; dynamic-grid owns `칸 피하기 게임`; nobody targets `똥피하기 게임`.

## Kill list (Bing ko-KR 0/0 on 2026-11-10, canary-validated)
피지컬 테스트 게임 (kept as hub secondary on GSC evidence only), 마우스 피지컬 테스트, 피지컬 게임, 민첩성 테스트, 순발력 훈련, 손떨림 테스트, 마우스 손떨림 테스트, 에임 흔들림, 협응력 테스트, 눈 손 협응력 테스트, 협응력 게임, 도형 순서 기억하기, 도형 기억하기 게임, 도형 순서 기억하기 연습, 공간 기억력 테스트, 피하기 게임, 마우스 피하기 게임, 장애물 피하기 게임, 총알 피하기 게임, 칸 피하기 게임, 점프 게임, 점프 게임 사이트, 마우스 클릭 게임, 순발력 클릭 게임, 클릭 게임 사이트, 에임 반응속도 테스트, 마우스 반응속도 테스트, 자 떨어뜨리기 반응속도, 자 잡기 반응속도, 주변시야 테스트, 주변 시 테스트, 주변시야 게임, 오버에임, 오버에임 트레이닝, 스텝 레더.
Off-intent / never target: 손떨림 테스트 (medical), 점프 게임 (platformer), 똥피하기 게임 (named game), 자 떨어뜨리기 (real-world ruler test).

## Decisions needed (owner)
- Allow one honest `똥피하기` comparison sentence in quick-dodge body/FAQ? Recommended: yes, body only, never title/H1/keywords.
- Hub retarget off 반응속도·순발력: hub's only GSC query is already `피지컬 테스트 게임` (pos 8.2) -> low impression-loss risk.
- `마우스 게임` (HIGH-competition portals) as hub secondary vs leaving it unused.
- Competition for 피지컬 테스트 / 똥피하기 UNKNOWN (probes timed out, cap spent).
