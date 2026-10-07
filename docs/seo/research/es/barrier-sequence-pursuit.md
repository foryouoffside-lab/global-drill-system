# es / barrier-sequence-pursuit - research log

Date: 2026-10-08 | URL: /es/drills/reaction-speed/barrier-sequence-pursuit | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- jiggle peek: Suggest gl=es returns jiggle peek valorant, cs2, r6, tarkov (proxy). limpiar ángulos valorant: no Suggest. Bing no data.

## Intent and SERP
Title `Entrenamiento de Puntería FPS` was generic and near-identical to other aim pages; the drill is the Jiggle Peek Trainer.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 2 / competition ease 4 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Title and H1 `Jiggle Peek Trainer: Reacción al Peek` in lib/i18n/drills/barrierSequencePursuit.js (es block only).

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
