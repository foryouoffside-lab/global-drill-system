# es / symbol-matching - research log

Date: 2026-10-08 | URL: /es/drills/cognitive/processing-speed/symbol-matching | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- test de símbolos y dígitos: Suggest only (manual, pdf, interpretación, ficha técnica, resultados) (proxy); clinical neuropsychology intent; Bing no data.

## Intent and SERP
Clinical SDMT SERP; the page states it is SDMT-inspired and not clinical.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 2 / competition ease 2 / intent fit 3. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
No change; keep non-clinical wording. Demand is clinical, tool intent not verified.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
