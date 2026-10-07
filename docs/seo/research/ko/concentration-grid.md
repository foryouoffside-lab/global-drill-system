# ko / concentration-grid — research log

Date: 2026-10-08 · Route: `/ko/drills/cognitive/focus/concentration-grid` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `슐테 테이블`, `슐테 표`, `슐테표`, `슐테 테이블 온라인/게임` | Bing: `no data` (null) or exact 0; Google Suggest for `슐테 테이블` / `슐테 표` returns unrelated strings (`슐테 쿠키`-type noise, `뿔테`); Naver autocomplete `슐테` -> `슐테 쿠키` | measured: no demand signal found |
| `집중력 테스트 게임` | Google Suggest (`집중력 테스트 게임`, `집중력 테스트 무료/사이트/프로그램`); Naver `집중력 테스트`; Bing exact 0 / no data | proxy (autocomplete) |
| `집중력 훈련 게임`, `집중력 향상 게임`, `집중력 높이는 게임` | Google Suggest (`집중력 게임` expansion); Bing no data | proxy |
| `주의력 훈련`, `주의력 테스트` | Naver autocomplete | proxy |
The previous page header called `슐테 테이블` the "Top Korean cognitive search term"; no tool in this run supports that, so it was removed.

## Intent
`집중력 테스트` is dominated by questionnaires/ADHD-type tests (Suggest: `adhd 집중력 테스트`, `집중력 장애 테스트`, `공부 집중력 테스트`); `집중력 테스트 게임` is the game/tool slice. The page is a non-clinical game and says so.

## SERP
Not captured. No competitor claim.

## B3
Demand 2 (autocomplete only), competition ease 3 (unverified), intent fit 4. Decision: primary `집중력 테스트 게임`; `슐테 테이블` kept as the method name in H1 suffix/body (accurate name, no demand claim).

## Defects found / changes
- Title/H1 led with an unverified term; now `집중력 테스트 게임 | 슐테 테이블 격자`.
- English leak: visible subtitle `<p>` and start-card strings fell back to English (`copy.subtitle`, `startTitle`, `startSubtitle`, `startButtonText`, `getReady` not passed). Native strings now passed from page.js (not a client edit).
- Unsupported claims softened: `1962년 튀빙겐 대학` origin, `정밀하게 측정`, `필수적`, `현저히`, `비약적으로 향상`, `신경가소성 촉진하는 최적의 루틴`, `세계적 수준`, 5x5 `30초/20초` benchmark, `입증되었습니다`, `1밀리초 단위` timing. Benchmark note now says the bands are SkillDrills reference bands, not user statistics.
- FAQ stays 10 bespoke items; schema and visible FAQ share one array.

## Demand status
Not verified for Korean (autocomplete proxy only). Page kept per D6.

## Trend note
Not measured. No claim.
