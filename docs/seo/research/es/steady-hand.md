# es / steady-hand - research log

Date: 2026-10-08 | URL: /es/drills/motor/precision-control/steady-hand | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- juego del pulso: Suggest es shows `juego de pulso online`, `juego de pulso firme`, `juego del pulso` (proxy, mixed with physical electric wire game). Bing no data.
- test de precisión del ratón: no Suggest, no Bing data.

## Intent and SERP
The drill is a digital wire-loop game, which is what `juego del pulso` names. Intent partly physical toy; online modifier targets the digital subset.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 3 / competition ease 3 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Title, H1 keyword and description now lead with `Juego del Pulso Online`; English subtitle leak fixed via copy.subtitle.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
