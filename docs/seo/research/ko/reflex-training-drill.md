# ko / reflex-training-drill — research log

Date: 2026-10-08 · Route: `/ko/drills/reaction-speed/reflex-training-drill` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `순발력 테스트` | Bing exact 204 / broad 240 (kr, 2026-10-08) | measured (Bing kr) |
| `순발력 테스트 게임`, `순발력 테스트 사이트`, `순발력 테스트 마우스`, `순발력 테스트 클릭` | Google Suggest + Naver autocomplete; Bing exact 0 | proxy (autocomplete) |
| `순발력 훈련`, `순발력 게임` | Naver autocomplete (`순발력 훈련 방법`, `순발력 게임 사이트/어플`); Bing 0 | proxy |
Suggest also shows `순발력 테스트 똥 피하기`, `봉잡기`, `기계`: these are arcade/physical-device intents, not this drill.

## Intent
Casual tool/game intent ("순발력 테스트 게임"). The drill is multi-target burst clicking, so copy must not promise a single-signal reaction score.

## SERP
Not captured for this query (WebSearch is US egress and returned no Korean SERP for this phrase). No competitor claim.

## B3
Demand 3, competition ease 3 (unverified), intent fit 4. Decision: add `게임` to the title (Suggest + Naver both carry `순발력 테스트 게임`), keep `순발력 테스트` first.

## Defects found / changes
- Existing native copy, 10 bespoke FAQs, reference-labelled band table and clinical disclaimer already pass; no invented stats found.
- ko title/H1 `순발력 테스트 다중 표적 훈련` -> `순발력 테스트 게임 · 다중 표적 훈련`; keywords add `순발력 테스트 게임`, `순발력 게임` (lib/i18n/drills/reflexTrainingDrillNative.js, ko entries only).

## Demand status
Verified at the head term (204 Bing); long tail unverified.

## Trend note
Not measured. No claim.
