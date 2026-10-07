# es / reaction-game - research log

Date: 2026-10-08 | URL: /es/drills/reaction-speed/reaction-game | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- juego de reacción: Suggest es (juego de reacción rápida, online, click) (proxy); juegos de reflejos Bing es-ES 5/5 (measured).

## Intent and SERP
Title `Juego de Test de Reacción` was awkward; test de reacción belongs to reaction-time-test.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 3 / competition ease 3 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Title and H1 `Juego de Reacción Online` in lib/i18n/drills/reactionGame.js (es block only).

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
