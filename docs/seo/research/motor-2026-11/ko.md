# ko (South Korea, ko-KR, cc kr) - MOTOR page -> primary keyword map

Status: COMPLETE 2026-11-09. Bing 40/40 `ok` (1 run, `_work-ko/kw.jsonl`, rows in `ko.csv`), autocomplete 10/10, SERP 3/3, GSC read-only. Steps 4-6 finished from collected data only (no new queries).

## Drill mechanics (read from `app/drills/motor/**/*Client.js`)
- aim-trainer: click shrinking/spawning targets, combo, +2s per hit.
- drag-and-drop: drag an object onto a drop target (mouse hold + release).
- precision-flick-shot: flick to targets with a bullseye core (+200 core / +100 edge) -> accuracy-weighted flick.
- finger-sequencing: MOUSE clicks on a chain of nodes in path order (dashed line shows order), red "!" trap nodes. No numbers drawn, no keyboard -> not 1to50, not typing.
- keyboard-recognition: on-screen key prompts (letters, digits, modifiers, symbols), press the 2-5 key sequence before the timer; fake prompts must be ignored. Key-recognition reaction; NOT a typing (word/WPM) test and NOT a hardware key tester.
- rapid-tapping: click a decaying ball as fast as possible, 45 s; CPS. Mouse only.
- steady-hand: move cursor through a narrowing corridor (maze-like), wall touch = restart (イライラ棒 / 전기충격 미로 style).
- tracing: keep the cursor locked on a moving point along a corridor path, speed ramps 45 s (cursor tracking).

## Step 1 - GSC (90 d to 2026-11-07, page x query `ko/drills/motor`) -> `_work-ko/gsc_ko_motor_pq.json`
- Page totals (gsc-pages-90d.csv): hub `/ko/drills/motor` 5 clk / 182 impr pos 8.4; finger-sequencing 1 clk / 12 impr pos 12.3. Every other ko motor page = 0 impr (aim-trainer still not indexed per FPS pass).
- Hub queries (all pos 8.5-10): 에임연습 사이트 64i, 에임 연습 사이트 33i, 에임연습사이트 8i, cps 사이트 6i, 마우스 에임 테스트 5i (1 clk), cps 테스트 사이트 5i, 에임 테스트 사이트 5i, 에임 정확도 테스트 2i, 키보드 cps 측정 2i, cps 측정 2i, 키보드 반응속도 테스트 (사이트) 3i.
- Read: the hub is the only ranking ko motor URL; it collects aim-site + CPS + keyboard intent exactly as its title lists them. 에임 연습 사이트 variants on the motor hub compete with the ko FPS hub (에임 연습, pos 7.0).

## Step 2 - Google autocomplete gl=kr (10 seeds, `_work-ko/ac.txt`, PROXY / unmeasured)
- cps 측정: 측정기, 측정 사이트, 측정기 키보드, 마우스 cps 측정, 마크 cps 측정, 우클릭 cps 측정, 스페이스바, 1 초, jitter.
- 키보드 반응속도: 테스트, 테스트 사이트, 측정, 확인, 평균 - but most suggestions are hardware settings (레지스트리, 설정, 올리기, 8k, 1ms, 제어판) -> mixed intent; page must say it measures reaction to on-screen key prompts, not device latency.
- 자리연습 (key-position drill): 키보드 자리연습, 타자 자리연습, 한컴타자 자리연습, 영타 자리연습, 영어 자리연습, 영문타자 자리연습, 숫자 자리연습, 자판연습 사이트/프로그램 -> real typing-tutor intent; keyboard-recognition prompts single Latin letters/digits/symbols, so only the 영타/숫자 forms fit honestly, and the drill has no Hangul layout.
- 마우스 연습: 게임, 사이트, 게임 사이트, 프로그램, 고기굽기/두더지/클릭팜/과일 자르기 (beginner computer-literacy mouse games) -> fits drag-and-drop / hub as "마우스 연습 게임"; 마우스 연타 연습, 마우스연타테스트 -> rapid-tapping.
- 드래그 연습: 드래그 연습 게임, 마우스 드래그 연습, 드래그 클릭 연습 (Minecraft drag-click: different intent, avoid).
- 마우스 정확도: 향상 (Windows "enhance pointer precision" setting - wrong intent), 테스트, 연습, 측정, 체크, 게임.
- 에임 테스트: 사이트, 게임, 평균, 마우스 에임 테스트 (사이트), 에임 정확도 테스트, 3d, fps/롤/발로/오버워치 에임 테스트.
- 마우스 미로: 마우스 미로 게임, 마우스 미로 찾기 (rest noise) -> steady-hand.
- 마우스 트래킹: 테스트, 연습, 사이트 (plus VTube/hardware noise) -> tracing.
- 순서 클릭: no gaming suggestions (code/UI noise) -> finger-sequencing has no native AC phrase.

## Step 3 - Bing SERP probe kr (3 of 3 used, `_work-ko/serp.jsonl`; all returned, no captcha, no Copilot/answer box, 0 ads)
- `cps 측정`: cpstest.org, cpstestonline.com, checkcps.com, test-cps.com (x2), testthiscps.com -> wall of exact-match CPS clone domains with Korean titles. Competition MEDIUM (thin, but many and keyword-stuffed domains).
- `키보드 반응속도 테스트`: naver blog x2, ppuub.com, tistory, keyboard-test.space, hi098123 tools, aros.sacaa100.com, punycode site, testthiscps.com -> blogs + thin tools. Competition LOW.
- `마우스 연습 게임`: forever.or.kr, naver blogs x6 (elementary-school "컴기초" posts), joyfarm.net, flash-game archive -> beginner/kids computer-literacy intent, blog lists. Competition LOW; intent fit only partial (drill is a timed accuracy drill, not a kids' tutorial).

## Step 4 - Bing volume (ko-KR, exact/broad monthly; `_work-ko/kw.jsonl`, 40/40 ok, 2026-11-09)
- `키보드 테스트` 3,445 / 3,779; `키보드 입력 테스트` 248 (hardware key-checker intent, off-intent for every motor drill)
- `cps 측정` 1,512; `클릭속도 테스트` 1,134; `마우스 클릭 테스트` 1,009 (mixed: CPS + hardware click check); `마우스 테스트` 305 (hardware); `cps 테스트` 256; `cps 측정기` 158; `클릭 테스트` 91 / 1,100
- `마우스 연습` 208 / 361; `마우스 연습 게임` 153 (SERP = kids computer-literacy intent); `에임 테스트` 90; `키보드 반응속도 테스트` 79; `자판연습` 23 / 908 (typing tutor)
- Reused (fps-2026-11/ko.md): `에임 연습 사이트` 1,184.
- 0: every descriptive drill phrase (kill list).

## Page -> primary map (one primary per page; paths under `/ko/drills/`)

| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition note | action |
|---|---|---|---|---|---|---|
| motor (hub) | CPS 측정·에임 연습 사이트·키보드 반응속도 | 마우스 연습 | 마우스 연습 게임 (153), 마우스 컨트롤 훈련; CPS 측정 / 에임 연습 사이트 / 키보드 반응속도 only as child-card anchors | 마우스 연습 208/361; GSC hub 5 clk / 182 impr pos 8.4 (queries = 에임연습 사이트 64i+33i, cps 사이트 6i, cps 테스트 사이트 5i - all child-owned intent); AC 마우스 연습 게임/사이트 | LOW (`마우스 연습 게임` SERP = naver blogs, kids 컴기초 lists) | retarget: title lists three child primaries (rapid-tapping, aim-trainer, keyboard-recognition) -> hub cannibalises its own children. e.g. `마우스 연습 \| 에임·클릭속도·정확도 무료 훈련`. Copy honest: timed skill drills, not a kids' tutorial |
| hand-eye-coordination/aim-trainer | 에임 연습 사이트 \| 무료 에임 테스트 | 에임 연습 사이트 | 에임 테스트 (90), 마우스 에임 테스트 (GSC 5i, 1 clk; Bing 0), 에임 테스트 사이트 (GSC 5i) | 에임 연습 사이트 1,184 (fps-2026-11); 에임 테스트 90/90; page itself 0 impr (not indexed); hub collects the intent at pos ~9 | UNKNOWN (no probe; fps hub ranks 7.0 for 에임 연습) | DONE (Phase B `_passB_aim-trainer.log`) - keep. Owner per brief; must not use bare `에임 연습` (fps hub PROTECTED) |
| hand-eye-coordination/drag-and-drop | 드래그 앤 드롭 연습 \| 마우스 드래그 테스트 | 드래그 앤 드롭 연습 | 마우스 드래그 연습, 마우스 드래그 테스트 | 드래그 앤 드롭 연습 0, 마우스 드래그 연습 0, 드래그 연습 0; AC 드래그 연습 게임 / 마우스 드래그 연습 | n/a | keep (no-demand descriptive; Phase B mechanics-only pass already applied). Avoid `드래그 클릭` (Minecraft drag-click intent) |
| hand-eye-coordination/precision-flick-shot | 마우스 정확도 테스트 \| 과녁 중심 정밀 플릭 | 마우스 정확도 테스트 | 마우스 정확도 연습, 과녁 중심 정밀 클릭 | 마우스 정확도 테스트/연습/측정 0; 에임 정확도 테스트 0 (GSC hub 2i); AC 마우스 정확도 테스트/연습/측정/게임 | n/a | DONE (Phase B) - keep. Copy must not imply Windows "포인터 정확도 향상" setting (AC 마우스 정확도 향상 = OS intent) |
| movement-speed/finger-sequencing | 순서 클릭 연습 | 순서 클릭 연습 | 순서대로 클릭, 경로 순서 클릭 | 순서대로 클릭 0; AC 순서 클릭 = code/UI noise; GSC 1 clk / 12 impr pos 12.3 | n/a | DONE (Phase B) - keep (no-demand descriptive). Must not reuse 에임 연습 / 타겟 전환 (fps) or CPS (rapid-tapping) |
| movement-speed/keyboard-recognition | 키보드 반응속도 테스트 | 키보드 반응속도 테스트 | 게임 키 바인드 연습, 키 프롬프트 반응 | 79/79; 키보드 반응속도 측정 0; GSC hub 3i (키보드 반응속도 테스트 (사이트)); AC 테스트/사이트/측정 (mixed with hardware settings) | LOW (naver blogs, tistory, thin tools) | DONE (Phase B) - keep. Do NOT target `키보드 테스트` (3,445) / `키보드 입력 테스트` (248): key-checker intent. Do NOT target 자리연습/자판연습/타자 연습: drill has no typing, no Hangul. `키보드` prefix keeps it distinct from reaction `반응속도 테스트` (ja precedent) |
| movement-speed/rapid-tapping | CPS 측정 · 클릭속도 테스트 | CPS 측정 | 클릭속도 테스트 (1,134), cps 테스트 (256), cps 측정기 (158), 클릭 테스트 (91/1,100), 마우스 클릭 테스트 (1,009, mixed) | cps 측정 1,512/1,512; GSC hub cps 사이트 6i / cps 테스트 사이트 5i / cps 측정 2i (page itself 0) | MEDIUM (exact-match CPS clone domains with Korean titles) | DONE (Phase B `_passB_rapid-tapping.log`) - keep. Honest: 45 s, mouse only; no 스페이스바/키보드 cps variants (drill ignores keys) |
| precision-control/steady-hand | 마우스 정확도 테스트 \| 손 안정성 미로 | 마우스 미로 게임 | 손 떨림 미로, 손 안정성 테스트, 전기충격 미로 (generic) | 마우스 미로 게임 0, 마우스 미로 0; AC 마우스 미로 게임 / 마우스 미로 찾기 | n/a | retarget (COLLISION): title primary `마우스 정확도 테스트` = precision-flick-shot primary (both live now). e.g. `마우스 미로 게임 \| 손 안정성 테스트`. Drop `마우스 정확도 테스트` from title/keywords |
| precision-control/tracing | 마우스 트레이싱 게임 \| 커서 추적 테스트 | 마우스 트레이싱 게임 | 커서 추적 테스트, 마우스 트래킹 테스트 (AC) | 마우스 트레이싱 0, 마우스 트래킹 테스트 0, 마우스 트래킹 연습 0; AC 마우스 트래킹 테스트/연습/사이트 | n/a | keep (no-demand descriptive). Do NOT use `마우스 트래킹 연습` / `에임 트래킹 연습` (fps pro-smooth-pursuit primary + secondary) |

## Collisions resolved
1. Hub title `CPS 측정·에임 연습 사이트·키보드 반응속도` = primaries of rapid-tapping, aim-trainer, keyboard-recognition -> hub moves to `마우스 연습` (208); the three terms stay only as child-card anchor text.
2. steady-hand `마우스 정확도 테스트` vs precision-flick-shot `마우스 정확도 테스트` (both live titles) -> precision-flick-shot keeps it (bullseye accuracy = honest fit; Phase B already applied); steady-hand -> `마우스 미로 게임`.
3. `에임 연습 사이트` (1,184): fps hub lists it as secondary, brief assigns it to motor aim-trainer -> motor aim-trainer owns; fps hub keeps bare `에임 연습` / `에임연습` (PROTECTED). Hub drops it.
4. `에임 테스트` (90) -> motor aim-trainer only; precision-flick-shot keywords must not carry it (Phase B already trimmed).
5. finger-sequencing old `타겟 전환` / `에임 연습` -> fps owners; resolved by Phase B retitle `순서 클릭 연습`.
6. tracing must not use `마우스 트래킹 연습` (fps pro-smooth-pursuit secondary) -> uses `마우스 트레이싱 게임` / `마우스 트래킹 테스트`.
7. `마우스 연습 게임` (153) given to hub as secondary, not to drag-and-drop (one owner; SERP intent is generic beginner mouse practice, closer to the hub).

## Kill list (Bing ko-KR exact 0, status ok)
마우스 에임 테스트, 에임 정확도 테스트, 마우스 정확도 테스트, 마우스 정확도 연습, 마우스 정확도 측정, cps 측정 사이트, 마우스 cps 측정, 마우스 연타 테스트, 클릭 속도 측정, 키보드 반응속도 측정, 자리연습, 키보드 자리연습, 영타 자리연습, 영어 자리연습, 숫자 자리연습, 마우스 연습 사이트, 마우스 드래그 연습, 드래그 연습, 드래그 앤 드롭 연습, 마우스 미로 게임, 마우스 미로, 마우스 트래킹 테스트, 마우스 트래킹 연습, 마우스 트레이싱, 순서대로 클릭, 타겟 전환 연습.
Measured but off-intent (skip): 키보드 테스트 3,445/3,779, 키보드 입력 테스트 248, 마우스 테스트 305 (hardware), 자판연습 23/908 (typing tutor).
Caveat: KR Bing share is small; 0 = below Bing floor, not proof of no Naver/Google demand (several 0 phrases have AC suggestions).

## Decisions needed
- Keyboard tester: `키보드 테스트` 3,445 + `키보드 입력 테스트` 248 in KR (plus JP ~9k, DE ~2.2k, BR ~16k). Only reachable with a real key-checker tool; keyboard-recognition must not claim it. Same product decision as other markets.
- Typing (타자 연습 100k+/mo per demand-2026-10): out of scope unless a typing drill with Hangul layout is built.
- Approve hub retarget off `에임 연습 사이트`: the hub currently earns its only ko motor impressions from that term (97i, pos ~9) while aim-trainer is not indexed. Risk: short-term impression loss until aim-trainer is crawled. Alternative: keep hub title until aim-trainer shows GSC impressions, then retarget.
- Phase B for steady-hand (collision 2) and hub (collision 1) still to apply; aim-trainer, precision-flick-shot, finger-sequencing, keyboard-recognition, rapid-tapping already done; drag-and-drop/tracing keep.

## Unknown / not measured
- SERP for `에임 연습 사이트`, `마우스 연습`, `클릭속도 테스트` (cap 3 spent). Naver volumes not measured (no Naver tool, ban rule). Trend not run.
