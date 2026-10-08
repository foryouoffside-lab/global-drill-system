# ko / dynamic-grid-evasion — research log

Date: 2026-10-08 · Route: `/ko/drills/physical/coordination/dynamic-grid-evasion` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `반응속도 테스트 게임` | previous primary; Bing exact 0 / Naver `반응속도 테스트 게임`; the head term `반응속도 테스트` (13,122 Bing) belongs to `/ko/drills/reaction-speed/reaction-time-test` | measured/proxy; cannibalisation |
| `마우스 피하기 게임` | Previous research claimed it; no Suggest/Naver/Bing signal this run; used by `quick-dodge` | no signal |
| `똥 피하기 게임` | Naver autocomplete (`똥 피하기 게임`, `... 링크`) | proxy (different game) |
| `칸 피하기`, `위험 구역 피하기 게임`, `회피 게임` | Naver/Bing nothing | no signal |
| `동체시력 테스트 (게임)` | Bing 40; Naver | proxy; belongs to visual pages |

## SERP
Not captured.

## B3
Demand 1, competition ease 4 (unverified), intent fit 3. Decision: demand for the drill-specific phrase is not verified; stop sharing `반응속도 테스트` with three other pages and describe the game literally (`칸 피하기 반응 게임`).

## Defects found / changes
- Title/H1/keywords no longer compete for `반응속도 테스트`; stale research header (unverified "High-intent" claims) removed.
- English leak in the About panel and HUD (`copy.aboutText/aboutCards/aboutHeading/aboutTitle/hudLabels` not passed): native strings now passed from page.js, with a direct-answer About paragraph.
- Benchmark table: English rank titles and `상위 0.1% / 3%` percentiles replaced with neutral reference bands and note; softened `입증`, `절대적인 방벽`, `50% 이상 높여줍니다`, `완벽하게`, `100% 무료 ... 암호화 보관`.

## Demand status
Not verified. Kept per D6.

## Trend note
Not measured. No claim.
