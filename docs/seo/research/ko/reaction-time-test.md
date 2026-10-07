# ko / reaction-time-test — research log

Date: 2026-10-08 · Route: `/ko/drills/reaction-speed/reaction-time-test` · Market: South Korea, `gl=kr hl=ko`
Tools: see `drills-directory.md`.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `반응속도 테스트` | Bing exact 13,122 / broad 13,879 (kr, 2026-10-08) | measured (Bing kr) |
| `반응속도 테스트 사이트` | Bing exact 40 | measured (Bing kr, low) |
| `반응속도 테스트 평균/발로란트/모바일/티어/디시/휴먼벤치마크/공식/1위/프로/페이커/청각` | Google Suggest gl=kr hl=ko (106 suggestions) | proxy (autocomplete) |
| `반응속도 테스트 평균/게임/모바일/결과/사이트` | Naver autocomplete | proxy |
| `반속테스트` | abbreviation used in page copy; not independently measured | proxy |
Bing returned 0 for `반응속도 테스트 평균/모바일/발로란트/게임/티어`: Bing exact-match is sparse for long tails, 0 here means unmeasured, not no demand (Google Suggests them).

## Intent
Tool + benchmark ("what is average"). Questions: 평균은 몇 ms, 모바일 가능?, 모니터 주사율 영향, 나이/카페인.

## SERP (WebSearch US egress, 2026-10-08)
coddy.tech/tools/ko/reaction-time-test, tools.devcomma.com reaction-time, braindetox.kr reaction_test, English explainers (trtc.io, atk.store/ko-kr). Pattern: 5-trial average, best, consistency score. Gaps: thin Korean tools; no source-cited interpretation table or hardware-latency explanation. Authority of incumbents not measured.

## B3
Demand 5, competition ease 2 (head term; Human Benchmark class), intent fit 5. Decision: keep primary `반응속도 테스트`; the sibling pages (cognitive/reaction-time, speed-drill, dynamic-grid-evasion, reaction-game) must not reuse it as their own primary (cannibalisation).

## Defects found and fixed
- Benchmark table invented `상위 1% / 5% / 25% / 하위 20%` percentiles and a mapping to Valorant ranks and F1 racers; replaced with qualitative bands labelled as approximate, citing Kosinski 2008 / Woods 2015 as range only.
- FAQ: removed `1ms 미만 정밀도`, `프로게이머 최상위 1~3%`, `15~30ms 단축이 입증`, `10ms 이상 더 빠른 수치`, `카페인 10~20ms`; reworded Human Benchmark comparison to describe only what the page does.
- Added 40-60 word direct answer as first guide paragraph.
- Title/description already led with the measured head term; unchanged.

## Trend note
Not measured. No claim.
