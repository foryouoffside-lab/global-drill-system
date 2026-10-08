# es / motor-hub - research log

Date: 2026-10-08 | URL: /es/drills/motor | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- test de precisión del ratón: no Suggest, no Bing data (demand not verified). test de cps 29/29 es-ES (Bing) is mapped to rapid-tapping.

## Intent and SERP
No Spanish hub competition measured.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 2 / competition ease 3 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Title kept. Fixed English hub headings by adding es keys (drillsHeading, domainsHeading, specsHeading, spec1-3, startCta) to lib/i18n/dictionaries.js es.hubs.motor.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
