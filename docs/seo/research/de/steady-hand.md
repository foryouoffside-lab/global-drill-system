# de / steady-hand — research log

Date: 2026-10-08 · Market: Germany, `de-DE`

## Evidence
- Suggest `ruhige hand spiel` (gl=de hl=de, proxy): ruhige hand, ruhige hand trainieren, ruhige hand üben.
- Suggest `heißer draht` (proxy): `heißer draht spiel`, `spiel xxl`; most other completions are Styropor cutting wire (not our intent).
- Suggest `maus präzision` (proxy): maus präzision testen, verbessern. `zittern test` is medical (testosteron, hände zittern): avoided.
- Bing DE: `heißer draht spiel`, `ruhige hand spiel`, `maus präzision testen` "no data" (unknown, not zero).

## Defects
- H1 rendered the English default subtitle `Steady hand mouse control drill for tracing narrow paths and improving cursor precision` (German page passed no `subtitle`).
- Title led with `Maus-Präzisionstest`, which has no supporting query evidence beyond a weak Suggest; H2/guide already use `Heißer Draht`.

## Fix
- Title -> `Ruhige Hand trainieren | Heißer Draht online | SkillDrills`; H1 `Ruhige Hand trainieren – Heißer Draht online`; German `subtitle`; description leads with the same phrase (page-level props only, no client edit).

## Scores (B3)
- `Ruhige Hand trainieren/üben`: demand 2 (proxy), ease 4, intent fit 5. `Heißer Draht Spiel`: demand 2 (proxy), ease 3, intent fit 4. Demand not verified by Bing volume.
- Trend: not available, 2026-10-08.
