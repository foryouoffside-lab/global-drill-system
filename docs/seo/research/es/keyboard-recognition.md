# es / keyboard-recognition - research log

Date: 2026-10-08 | URL: /es/drills/motor/movement-speed/keyboard-recognition | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- test de reacción teclado: Suggest es (test de reaccion teclado, test tiempo de reaccion teclado) (proxy); Bing no data. test de reacción 125/125 (Bing, parent term).

## Intent and SERP
Suggest also surfaces arealme; intent is a keyboard-press reaction test.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 2 / competition ease 4 / intent fit 5. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Title `Test de Reacción con Teclado`, matching the Suggest phrase and the existing H1.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
