# de / concentration-grid — research log

Date: 2026-10-08 · Market: Germany, `de-DE`

## Evidence
- Suggest `schulte tabelle` (gl=de hl=de, proxy): online, ausdrucken, kaufen, wikipedia, schnelllesen.
- Suggest `konzentrationstest` (proxy): kinder, adhs, psychologie, polizei, erwachsene, d2, pdf, online, zum ausdrucken.
- Bing DE: `schulte tabelle`, `schulte tabelle online`, `konzentrationstest online` returned "no data" (unknown, not zero).
- Prior pass (docs/seo/research/cognitive-category-2026-09-20.md, entropic-grid-2026-09-20.md): German Schulte tools (schulte-grid.luopeike.com/de, adhdfocuspro.com) use Aufmerksamkeit, visuelle Suchgeschwindigkeit, Konzentration.

## Defects
- English leaks rendered on the German page: subtitle `Schulte table concentration test for faster visual scanning...` and start-card title `Concentration Grid Trainer` (client defaults; the German page did not pass `subtitle`/`startTitle`).

## Fix
- Passed German `subtitle`, `startTitle`, `startSubtitle`, `startButtonText`, `getReady` via the page-level copy prop (no client edit). Title/description/H1 (`Schulte-Tabelle`) unchanged: match the Suggest query `schulte tabelle online`.

## Scores (B3)
- `Schulte-Tabelle online`: demand 3 (proxy), ease 4, intent fit 5. Concentration-test head term is clinical/job-test intent (adhs, polizei, d2): not targeted.
- Trend: not available, 2026-10-08.
