# es / ghosting-suppress-pursuit - research log

Date: 2026-10-08 | URL: /es/drills/visual-tracking/ghosting-suppress-pursuit | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- test de ghosting monitor, probar ghosting monitor, test ghosting pantalla: Suggest es (proxy). No Bing figure.

## Intent and SERP
Intent: monitor smear check; the page frames it as a visual stability drill, not a hardware diagnosis.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 3 / competition ease 4 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
`Prueba` changed to `Test de Ghosting del Monitor` (Suggest phrasing) in title, H1 and breadcrumb.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: Client hardcodes English H2 `Drill Instructions & Settings`..
