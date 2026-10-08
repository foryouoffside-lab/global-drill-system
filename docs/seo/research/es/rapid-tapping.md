# es / rapid-tapping - research log

Date: 2026-10-08 | URL: /es/drills/motor/movement-speed/rapid-tapping | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- test de cps: Bing es-ES 29 exact/29 broad, es-MX 2/2 (measured, Bing). Suggest es/mx: test de cps click derecho, teclado, click izquierdo, por segundo, barra espaciadora (proxy).
- test de clicks por segundo: Suggest only (barra espaciadora, 10 segundos, por minuto) (proxy); Bing no data.
- Questions seen: clicks por segundo con barra espaciadora, click derecho (proxy).

## Intent and SERP
WebSearch 2026-10-08 `test de cps clicks por segundo online`: coddy.tech, codeitbro, pantallazo.es, jotform and extension pages; generic timer-based tools (1/5/10/15/30/60 s), no 45 s endurance variant with shrinking target. Intent: tool + technique (jitter, butterfly). Gap: no competitor explains endurance vs burst in Spanish.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 3 / competition ease 3 / intent fit 5. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Keep title `Test de CPS | Clics por segundo` (primary measured term first). Fix: English H1 subtitle leaked from the client default; Spanish subtitle now passed via copy.subtitle in page.js.

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: Citation titles and the DrillGuide privacy sentence are English (shared component)..
