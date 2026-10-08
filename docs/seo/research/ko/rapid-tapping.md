# ko / rapid-tapping — research log

Date: 2026-10-08 · Route: `/ko/drills/motor/movement-speed/rapid-tapping` · Market: South Korea, `gl=kr hl=ko`
Tools: see `drills-directory.md` (Suggest, Naver autocomplete, Bing kr, GSC all worked; WebSearch is US-egress so SERPs are "seen from US IP").

## Queries (Bing kr exact, 2026-10-08, measured)
| Phrase | Bing exact | Notes |
|---|---|---|
| `cps 측정` | 1,051 | primary |
| `마우스 클릭 테스트` | 751 | secondary |
| `클릭속도 테스트` | 730 | secondary (no-space form; spaced `클릭 속도 테스트` 224) |
| `cps 테스트` | 268 | secondary |
| `클릭 속도 측정` | 0 (null-ish) | Naver autocomplete shows it: proxy |
Google Suggest `cps 테스트`: `사이트`, `평균`, `디시`, `우클릭`, `동물`, `키보드`, `1 초`, `등급`, `순위` (proxy, not volume). Naver: `cps 테스트 사이트`, `클릭 속도 테스트/측정`, `클릭속도 빠른 마우스` (proxy).
Questions adopted (FAQ already native): CPS란, 평균 CPS, 지터/버터플라이 클릭, 마인크래프트, 손목 보호, 모바일.

## Intent
Tool intent: instant tester with a number. Secondary editorial intent: technique (지터/버터플라이).

## SERP (WebSearch, US egress, 2026-10-08, query `CPS 측정 클릭속도 테스트`)
Results: tools.devcomma.com click-speed, coddy.tech/tools/ko/cps-test, goodinfo.leedolife.com CPS article, generic English CPS pages (cpstest.dorik.io, redragonshop). Gaps: Korean results are thin tools/blog posts; none combines a 45 s endurance format with technique and a reference-labelled tier table. Domain authority of incumbents not measured (no backlink tool), so no ranking claim.

## B3
Demand 4 (Bing 1,051 + 751 + 730 combined head cluster), competition ease 3, intent fit 5. Decision: title `CPS 측정 · 클릭속도 테스트`, H1 `CPS 측정`.

## Defects found and fixed
- H1 contained English fallback subtitle (client `copy.subtitle` default) -> native `subtitle` passed from page.js.
- Fabricated claims removed: `상위 0.1% / 3% / 15% / 50% / 하위 20%` percentile column, `최상위 게이머의 실측 데이터를 반영`, `밀리초 단위로 정밀 분석`, `롤/발로란트 벤치마크 등급`. Table relabelled `참고용`, states it is not site-user statistics.
- 40-60 word direct answer passed as `aboutP1`.
- Title/desc/keywords re-aimed at measured cluster; OG image already default.

## Trend note
Not measured (no Trends session). No claim.
