# de / saccadic-gallery — research log

Date: 2026-10-08 · Market: Germany, `de-DE`

## Evidence
- Suggest `sakkaden training` (gl=de hl=de, proxy): sakkadentraining, übungen, online, augen, app, software.
- Suggest `augentraining` (proxy): übungen, online, app, für besseres sehen; heavy therapeutic/vision-correction intent (kurzsichtigkeit, nach bates, nach schlaganfall).
- Bing DE: no volume returned (unknown, not zero).

## Audit (rendered, 2026-10-08)
- Title `Augentraining Online · Blicksprünge trainieren | SkillDrills` (60), description 127, single H1, 10 FAQ in HTML and JSON-LD.

## Decision
- No change required: `Augentraining online` is a live Suggest string; `Blicksprünge` is the plain-language form of the Suggest term `Sakkadentraining`, which appears in H2s. Risk noted: therapy-intent searchers; the page makes no medical claim.
- B3: demand 3 (proxy), ease 3, intent fit 3.
- Trend: not available, 2026-10-08.

## Claim fix 2026-10-08
- Removed unsupported "Sub-Millisekunden" precision wording from FAQ/body (performance.now resolution is browser-dependent, about 1 ms); schema and visible text share the same source.
