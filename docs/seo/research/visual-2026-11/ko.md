# ko (South Korea, ko-KR, cc kr) - VISUAL page -> primary keyword map

Status: COMPLETE 2026-11-12. Bing 1 run (32 ok / 8 DNS errors, not retried - cap). AC 10/10. SERP probe 0/3 (no candidate reached Bing >= 50).

## Step 1 - GSC (90 d, `/ko/drills/visual*`, `_work-ko/gsc_pq.json`, `gsc_pages.json`)
- Page totals: visual-tracking/strobe-prediction-pursuit 33i/4c p10.4 · visual hub 42i/3c p6.6 · visual-tracking hub 33i/1c p5.8 · peripheral-ping-pursuit 37i/1c p8.8 · infinity 9i p9.4 · momentum-teleport 7i p8.7 · zig-zag 6i p26.3. All other ko visual pages: 0 impressions.
- Queries: hub `동체시력 훈련 사이트` 9i/2c p7.6, `동체시력 반응속도 테스트` 8i p6.4, `동체시력 테스트` 1i p5; visual-tracking hub `주변시 훈련` 14i p8, `동체시력 훈련 사이트` 1i p3; peripheral-ping `주변시 훈련` 24i p6.25. Strobe page queries are chatbot noise (`1번 링크좀`, `원리가 뭐야`).
- KOREA WARNING applies (Google volatility since 2026-11-09). Pages with pos <= 10 -> keep.

## Step 2 - Google autocomplete gl=kr (10 seeds, `_work-ko/ac.txt`, UNMEASURED)
- 동체시력: 테스트, 훈련, 테스트 사이트, 훈련 사이트, 게임, 반응속도 테스트, 테스트 게임, 측정, 연습, 훈련 게임, 키우는 게임, 키우는 법, fps 동체시력. Strong, real family.
- 시각 훈련: dominated by 시각장애인/안내견; only `시각 주의력 훈련`, `시각 인지 훈련`, `시각훈련` usable.
- 거리감: no test/game intent at all (meanings, anime titles, sensors).
- 입체시: 검사, 테스트, 훈련, 거리감 판단 - ophthalmology/strabismus intent (안과 입체시검사, 사시 입체시).
- 주변시: 주변시 훈련, 주변 시 테스트, 주변시 반응속도, fps 주변시 (mixed with 주변식당 noise).
- 글자 찾기: 글자 찾기 게임/사이트/퍼즐/퀴즈, 숨은 글자 찾기, 다른 글자 찾기, 틀린 글자 찾기 (+ Excel/vim noise).
- 집중력 테스트: 게임/무료/사이트, 순간 집중력 테스트, adhd (questionnaire intent). Owned by cognitive pages - avoid.
- 안구 운동: medical (EMDR, 장애, 검사) + 안구 운동 앱/프로그램/방법, 안구 트레이닝.
- 시선 추적: eye-tracker technology (Tobii, opencv, 카메라); `시선 추적 게임`, `시선 추적 테스트` exist.
- 숫자 찾기: programming noise; `숫자 찾기 게임` only.

## Step 3 - Bing volume (ko-KR, `_work-ko/kw.jsonl`, rows in `ko.csv`)
- Canary `클릭속도 테스트` = 920 -> panel alive, zeros are real Bing zeros.
- EVERY visual phrase = 0 exact/broad (32 rows), incl. 동체시력 훈련, 동체시력 테스트 (was 56 in the reaction pass), 시각 훈련, 주변시야, 시선 추적 *, 글자 찾기 게임, 다른/틀린/숨은 글자 찾기, 시각 탐색, 고노고 과제, 깜빡임 테스트.
- UNKNOWN (DNS error, not retried): 시각 인지 훈련, 입체시 테스트, 입체시 검사, 입체시 훈련, 거리감 테스트, 거리감각 테스트, 깊이 지각 테스트, 주변시 훈련.
- Conclusion: same as FPS-KR - the Bing KR panel cannot measure this category. Ranking evidence = GSC + AC only.

## Competition
No term reached Bing >= 50 -> no serp_probe run (cap rule). Competition = our GSC position where it exists, else UNKNOWN.

## Page -> primary map (paths under /ko/drills/)

| page | current title | proposed primary | secondaries | evidence (Bing, GSC impr/pos, AC) | competition note | action |
|---|---|---|---|---|---|---|
| visual (hub) | 시각 훈련 & 동체시력·입체시 테스트 | 시각 훈련 | 동체시력 반응속도 테스트, 시각 주의력 훈련 | Bing 0/0; GSC 42i p6.6 (동체시력 훈련 사이트 9i p7.6, 동체시력 반응속도 테스트 8i p6.4); AC 시각훈련 | pos 6-8 = beatable | KEEP (pos <= 10). Phase B: soften `입체시 테스트` wording - a flat monitor cannot test stereo (client About says so) |
| visual-tracking (hub) | 동체시력 훈련 & 시각 추적 도감 | 동체시력 훈련 (PROTECTED) | 동체시력 훈련 사이트 (shared w/ reaction visual-tracking-speed-test secondary; leave), 안구 운동 | Bing 0; GSC 33i p5.8 (주변시 훈련 14i p8, 동체시력 훈련 사이트 p3); AC 동체시력 훈련 | pos 3-8 | KEEP |
| visual/depth-perception/distance-judgment | 거리감 테스트 게임 | 거리감 테스트 게임 | 다가오는 물체 타이밍 | Bing UNKNOWN (error); AC 거리감 = no test intent; 입체시 AC = ophthalmology | UNKNOWN | no-demand descriptive. Do NOT move to 입체시 검사/테스트: drill measures optical expansion, not stereo acuity -> factually wrong |
| visual/reaction-speed/go/no-go | 고노고 과제 (Go/No-Go) | 고노고 과제 (owned by reaction pass) | 반응 억제 테스트 | Bing 0 | n/a | keep |
| visual/reaction-speed/light-reaction | 반응속도 테스트 \| 반속 테스트 | 반응속도 테스트 (owned by reaction pass, 10,032) | 반속 테스트 | reaction-pass data; this run 시각/빛 반응속도 테스트 = 0 | not indexed | keep |
| visual/tracking-accuracy/moving-target | 동체시력 테스트 \| 이동 표적 훈련 | 동체시력 키우는 게임 | 이동 표적 요격, 동체시력 키우는 법 | Bing 0; GSC 0; AC `동체시력 키우는 게임`, `키우는 법` | UNKNOWN | RETARGET: current primary `동체시력 테스트` is TAKEN (reaction visual-tracking-speed-test, protected 4.2/650) |
| visual/tracking-accuracy/multiple-targets | 다중 객체 추적 테스트 \| 주변시 훈련 | 다중 객체 추적 테스트 | 여러 공 동시 추적 | Bing 0 (다중 객체 추적); GSC 0; AC none | UNKNOWN | keep primary; DROP `주변시 훈련` secondary (owned by peripheral-ping, GSC p6.25) |
| visual/tracking-accuracy/pursuit-tracker | 에임 트래킹 테스트 \| 시선 추적 훈련 | 시선 추적 게임 | 시선 추적 테스트, 움직이는 점 따라가기 | Bing 0; GSC 0; AC 시선 추적 게임/테스트 (mostly eye-tracker tech intent) | UNKNOWN | RETARGET: `에임 트래킹` collides with fps/pro-smooth-pursuit (에임 트래킹 연습) + reaction fps-tracking-trainer. Copy must say the cursor follows the orb, no eye-tracker claim |
| visual/visual-recognition/entropic-grid | 시각 탐색 훈련 \| 선택적 주의력 테스트 | 글자 찾기 게임 | 시각 탐색 훈련, 숨은 글자 찾기 | Bing 0; GSC 0; AC 글자 찾기 게임/사이트/숨은 글자 찾기 | UNKNOWN | RETARGET: mechanic = find target letter-code pairs in a 100-cell noisy letter grid. Drop `선택적 주의력` (cognitive distraction-fighter) |
| visual/visual-recognition/visual-search | 글자 찾기 테스트 \| 시각 탐색·선택적 주의 | 다른 글자 찾기 | 틀린 글자 찾기, 시각 탐색 테스트 | Bing 0; GSC 0; AC 다른/틀린 글자 찾기 | UNKNOWN | RETARGET: mechanic = find one target character among rotated look-alike distractors (odd-one-out); frees 글자 찾기 for entropic-grid |
| visual/visual-recognition/rhythm-anomaly | 시각 리듬 검사 \| 깜빡임 구별 | 깜빡임 구별 게임 | 시각 리듬 테스트 | Bing 0 (깜빡임 테스트); AC none | UNKNOWN | no-demand descriptive; replace `검사` (clinical connotation) |
| visual-tracking/peripheral-ping-pursuit | 주변시 훈련 | 주변시 훈련 | fps 주변시, 주변시 반응속도 | Bing 0 / UNKNOWN; GSC 37i p8.8 (주변시 훈련 24i p6.25); AC 주변시 훈련 | pos 6 = beatable | KEEP (physical uses 주변시 회피 훈련 / 주변 시야 반응 테스트 - distinct) |
| visual-tracking/strobe-prediction-pursuit | 스트로브 시각 훈련 | 스트로브 시각 훈련 | 스트로브 예측 추적 | GSC 33i/4c p10.4 (chatbot-noise queries) | n/a | keep |
| visual-tracking/infinity-pursuit | 8자 안구 운동 훈련 | 8자 안구 운동 | 안구 운동 방법 | GSC 9i p9.4; AC 안구 운동 방법/앱 | pos 9 | KEEP |
| visual-tracking/momentum-teleport-pursuit | 순간이동 표적 시선 재포착 | (unchanged) | - | GSC 7i p8.7 | n/a | KEEP |
| visual-tracking/constant-slow-pursuit | 부드러운 시각 추적 훈련 (i18n) | (unchanged) | - | GSC 0 | n/a | no-demand descriptive |
| visual-tracking/{directional-chaos, dynamic-evasion, ghosting-suppress, predictive, sine-wave, spatial-shift, split-screen-tracking, staircase-step, triangular, zig-zag-path} | descriptive titles (see grep) | (unchanged) | - | GSC 0 (zig-zag 6i p26); no Bing rows spent (brief) | n/a | no-demand descriptive |

## Collisions resolved
- moving-target `동체시력 테스트` vs reaction visual-tracking-speed-test (TAKEN, protected) -> moving-target -> `동체시력 키우는 게임`.
- pursuit-tracker `에임 트래킹 테스트` vs fps/pro-smooth-pursuit `에임 트래킹 연습` + reaction fps-tracking-trainer secondary -> `시선 추적 게임`.
- visual-search and entropic-grid both on `글자 찾기` + `시각 탐색` -> entropic `글자 찾기 게임`, visual-search `다른 글자 찾기`.
- entropic-grid / visual-search `선택적 주의력` vs cognitive distraction-fighter `선택적 주의력 훈련` -> dropped from visual pages.
- multiple-targets `주변시 훈련` secondary vs peripheral-ping primary -> dropped.
- visual hub vs visual-tracking hub: hub = 시각 훈련, visual-tracking = 동체시력 훈련. `동체시력 훈련 사이트` stays a secondary of reaction visual-tracking-speed-test; hubs may mention it in body only.
- Avoided: 집중력 테스트 (cognitive concentration-stamina / concentration-grid), 반응속도 테스트 (light-reaction owns).

## Kill list (Bing ko-KR 0/0, canary alive)
동체시력 훈련, 동체시력 테스트, 동체시력 키우는 법, 동체시력 반응속도 테스트, 동체시력 테스트 게임, 동체시력 훈련 게임, 동체시력 측정, 동체시력 키우기, 시각 훈련, 시각 주의력 훈련, 주변시야, 주변시 반응속도, fps 주변시, 다중 객체 추적, 시선 추적 게임/훈련/테스트, 안구 운동 게임, 안구 트레이닝, 시각 탐색, 글자 찾기 게임, 숨은/다른/틀린 글자 찾기, 숫자 찾기 게임, 집중력 테스트 게임, 순간 집중력 테스트, 시각 반응속도 테스트, 빛 반응속도 테스트, 깜빡임 테스트, 고노고 과제.
NB: the 동체시력 family is Bing-0 but GSC- and AC-proven; "kill" here means Bing-unmeasurable, not "no demand".
