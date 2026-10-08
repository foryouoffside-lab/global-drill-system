# es / directional-chaos-pursuit - research log

Date: 2026-10-08 | URL: /es/drills/visual-tracking/directional-chaos-pursuit | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- seguimiento ocular: Suggest es shows seguimiento ocular suave, sacadico (proxy); ejercicios de seguimiento visual para adultos (proxy). No Bing figure.

## Intent and SERP
Title duplicated dynamic-evasion-pursuit (`Seguimiento Ocular Reactivo`).

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 2 / competition ease 4 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Title and H1 `Seguimiento ocular con cambios de dirección` (unique).

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: Client hardcodes English H2 `Drill Instructions & Settings` and the About block..
