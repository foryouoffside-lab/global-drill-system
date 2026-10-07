# en / precision-flick-shot - research log

Date: 2026-10-08 - Route: `/drills/motor/hand-eye-coordination/precision-flick-shot` - Market: US / en

## Tools
Suggest, Bing (us), GSC worked. GSC 90d: queries `flick aim trainer` 5 clicks / 47 impressions pos 9.0, `aim flick` 49 impressions pos 9.0, `flick trainer` 50 impressions pos 11.0 (site-wide, landing page not split by URL) `measured (GSC)`. No SERP capture; Trends not captured.

## Queries
- mouse accuracy test: Bing exact 76 / broad 76 `measured (Bing us)`.
- flick training: 3 / 4; flick shot: broad 14; flick shot trainer, flick aim trainer: 0 (null or not reported) `measured (Bing us)`.
- Suggest "mouse accuracy test": online, game, 3d, tester, reddit, human benchmark, click speed, score, mouse precision test `proxy (Google Suggest)`.
- Suggest "flick aim trainer": flick shot trainer, flick aim training, micro flick aim trainer, aim flick practice, flick aim test, flick training fps `proxy (Google Suggest)`.

## Intent
Two intents: accuracy test (`mouse accuracy test`) and FPS flick practice. The existing title serves the first; GSC shows the second already earns impressions at position 9 on the sibling `flick-shot-training` page.

## Competitors (proxy)
Human Benchmark named in Suggest for mouse accuracy; aim trainers for flicking. SERP not captured.

## PAA-style questions
Existing FAQ covers submovement model, bulls-eye scoring, over/under-flicking, decay, CS2/Valorant transfer, DPI, grading, hardware, frequency.

## Entities
Woodworth 1899, Meyer et al. 1988 (optimized submovement), Fitts 1954.

## Scores (B3, 1-5)
mouse accuracy test: demand 2, ease 3, fit 4 -> primary (title). flick aim trainer: demand 3 (GSC), ease 3, fit 3 (sibling page owns it).

## Decision
Title unchanged. H1 changed from `Precision Flick Shot` to `Mouse Accuracy Test: Precision Flick Shot` so the H1 matches the title's primary.

## Defects found and fixed
- H1 lacked the primary query. Fixed via the page's `copyEn.title`.
- Added a 50-word direct answer (shrinking/decaying targets, bulls-eye scoring) and retitled the guide H2.

## Trend note
Not captured 2026-10-08.
