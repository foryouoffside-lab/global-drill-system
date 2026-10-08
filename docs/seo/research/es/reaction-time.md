# es / reaction-time - research log

Date: 2026-10-08 | URL: /es/drills/cognitive/processing-speed/reaction-time | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- tiempo de reacción de elección: Suggest returns only driver/chemistry/physics queries (proxy); no Bing figure.
- test de reacción 125/125 es-ES (Bing) is owned by /es/drills/reaction-speed/reaction-time-test.

## Intent and SERP
Choice reaction time is academic/clinical intent in Spanish; no tool competition seen. Risk: cannibalising the reaction-time-test page with an H1 `Test de Reacción`.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 2 / competition ease 3 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
H1 changed to `Tiempo de Reacción de Elección` to match the existing title and avoid cannibalisation. Demand not verified.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
