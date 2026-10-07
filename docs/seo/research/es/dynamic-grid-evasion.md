# es / dynamic-grid-evasion - research log

Date: 2026-10-08 | URL: /es/drills/physical/coordination/dynamic-grid-evasion | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- juegos de reflejos con el mouse / con el teclado: Suggest es (proxy); juegos de reflejos 5/5 (Bing).

## Intent and SERP
No Spanish competitor for a 3x3 danger-cell game seen.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 2 / competition ease 3 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
No change: `Juego de reflejos con ratón` matches the Suggest phrasing.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
