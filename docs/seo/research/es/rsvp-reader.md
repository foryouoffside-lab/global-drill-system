# es / rsvp-reader - research log

Date: 2026-10-08 | URL: /es/drills/cognitive/processing-speed/rsvp-reader | Markets: es-ES, es-MX

## Tooling
Tools 2026-10-08: Google Suggest gl=es/gl=mx hl=es (autocomplete.py, proxy: no volume), Bing keyword API es-ES/es-MX (measured, null = unknown), GSC pages 90d, WebSearch (US-only index, SERP proxy). Raw: Bing no-data/0 for every phrase not listed below.

## Queries
- lectura rápida: Bing es-ES 30/30, es-MX 4/4 (measured, Bing).
- Suggest es: lectura rápida online, online gratis, ejercicios, curso, practicar lectura rápida online, juegos de lectura rapida online, test de lectura rapida online (proxy).

## Intent and SERP
Intent: courses, PDFs, children exercises; online practice tools are a minority. RSVP is a specific method; page keeps the non-clinical caveat.

## Entities
Mental chronometry, motor/visual control terms as already cited in lib/drillSources.js.

## Trend note
No Google Trends series was reachable from this environment; no trend claimed (2026-10-08).

## B3 scores
demand 3 / competition ease 3 / intent fit 4. Label: demand and ease are proxy (Suggest presence, weak Spanish tool SERP), not measured unless a Bing figure is quoted above.

## Decision
Title and H1 now carry `Lectura Rápida Online` (online modifier is the highest-frequency Suggest modifier).

## Checks
Title <=60, description <=155, single H1, 10 FAQ with matching FAQPage JSON-LD, canonical and hreflang verified on rendered HTML from next dev (port 3110).
Remaining: none within page.js scope.
