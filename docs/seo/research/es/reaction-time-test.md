# es / reaction-time-test - research log

Date: 2026-10-08 | URL: /es/drills/reaction-speed/reaction-time-test | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- test de reacción: Bing es-ES 125/125, es-MX 6/6 (measured, Bing).
- test de reflejos: 23/23 es-ES (measured, Bing, 2026-09-20 log).
- tiempo de reacción: 9/10 (Bing, 2026-09-20 log).
- Suggest es: test de reacción online, gamer, click verde, f1, con teclado, human benchmark; test de reflejos online, gaming, click, f1 (proxy). Many medical suggestions (recien nacido, primitivos) are other intent.

## Intent and SERP
Per 2026-09-20 log: maniacodigital.es and gottrix Spanish tools, 5-attempt average. Intent: browser tool with average. test de reacción out-measures test de reflejos 5x in Bing.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 4 / competition ease 3 / intent fit 5. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Primary moved to `Test de Reacción y Reflejos Online`; H1 and description updated to lead with test de reacción while keeping reflejos.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
