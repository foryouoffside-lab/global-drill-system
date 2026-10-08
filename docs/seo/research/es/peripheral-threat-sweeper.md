# es / peripheral-threat-sweeper - research log

Date: 2026-10-08 | URL: /es/drills/physical/reflex-training/peripheral-threat-sweeper | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- test de visión periférica online: Suggest es (proxy); visión periférica test: Suggest only. ejercicios de visión periférica en fútbol (Suggest).

## Intent and SERP
WebSearch 2026-10-08: results are sports-training papers and clinical visual-field apps; no browser game for gamers.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 3 / competition ease 3 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Title and H1 `Test de Visión Periférica Online`; page already states it is not a diagnosis.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
