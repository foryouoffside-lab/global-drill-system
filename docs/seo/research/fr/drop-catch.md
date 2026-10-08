# fr / drop-catch — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Bing fr-FR (measured): `test de la règle` 0, `test de réaction règle` 0, `ruler drop test` 0, `test de réflexes` 0, `test réflexe` 0, `test de réflexe` 0, `attraper la règle` 0, `test de rapidité` 159 exact (generic speed test, not adopted: wrong intent). Demand not verified for the chosen phrase.
- Suggest (proxy): `test de la règle` → menstrual-cycle results (bad intent collision: "règle" = period), so it was removed from title/H1. `test de réflexe` → `test de réflexe en ligne`, `test de réflexe souris`, plus medical/neuro results.
- Chosen primary: `test de réflexe en ligne` (Suggest-supported), with the ruler-drop link kept in FAQ/guide only.

## SERP / trend
- Not captured. No trend claimed.

## Defects fixed
- Title `Test de la règle | Temps de réaction` was ambiguous and cannibalised reaction-time pages; now `Test de réflexe en ligne : cibles qui tombent | SkillDrills`.
- Removed: "Top 0,1 % de l'élite eSport et pilotes de chasse", Grade S-D ladder with English rank names, "retranche des points" (contradicted the rules), Donders "80-120 ms" figure, "85 % of distance" figure, fingertip grip as best, kinetic-blur numbers.
- Tier ladder replaced by Palier 1-5; direct answer first; schemas regenerated from the visible FAQ/steps strings.

## Decision
- Keep page, demand not verified.
