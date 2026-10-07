# ko / steady-hand — research log

Date: 2026-10-08 · Route: `/ko/drills/motor/precision-control/steady-hand` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `마우스 정확도 테스트` | Naver autocomplete (`마우스 정확도`, `마우스 정확도 향상`, `마우스 정확도 테스트`); Bing 0 | proxy |
| `마우스 정밀도 테스트` | previous primary; no Naver/Suggest/Bing signal found | no signal |
| `전기충격 미로게임` | Google Suggest (`전기충격 미로` returns only stun-gun noise), Naver nothing | no signal |
| `손떨림 테스트`, `손 안정성 테스트`, `손 떨림 게임` | Bing 0; Naver `손떨림` = medical queries (원인, 병원, 약, 영양제) | no signal / wrong intent |
`손떨림` queries are medical; the page must not read as a tremor test.

## SERP
Not captured.

## B3
Demand 1–2, competition ease 3 (unverified), intent fit 3. Decision: title/H1 use the Naver-supported `마우스 정확도 테스트` plus `손 안정성 미로`; `전기충격 미로게임` stays as the game's descriptive name in the body only.

## Defects found / changes
- H1 carried an English fallback subtitle (`Steady hand mouse control drill ...`); native `subtitle` passed.
- Benchmark table named tiers `신경외과 전문의 (Apex Surgeon)` and `초보 및 진전 감지` (implies tremor detection) and used `상위 1/5/25%`; replaced with neutral labels and reference bands.
- `완벽히 지원`, `고정밀`, `극대화`, `근육을 강화합니다`, `손 떨림 억제` softened; the About lead is now a direct answer and states it is not a medical tremor test.

## Demand status
Not verified (autocomplete-only for `마우스 정확도 테스트`). Kept per D6.

## Trend note
Not measured. No claim.
