# PHYSICAL category - ko (ko-KR) keyword map - 2026-11-10

Status: IN PROGRESS (inputs + GSC + AC done; Bing running)

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
