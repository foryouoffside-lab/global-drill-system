# de / memory hub — research log

Date: 2026-10-08 · Market: Germany, `de-DE`

## Evidence
- Suggest `gedächtnistest` (gl=de hl=de, proxy): online, online kostenlos, kostenlos, kurzzeitgedächtnis, für senioren (also clinical: demenz, neurologie, moca).
- Suggest `gedächtnis trainieren` (proxy): kostenlos, online, übungen, app, spiele, erwachsene.
- Suggest `arbeitsgedächtnis test` / `merkfähigkeit test` (proxy): online, kostenlos; psychology/recruiting intents (bvg, polizei, wisc) not targeted.
- Bing DE: no volume returned (unknown, not zero).

## Fix (lib/i18n/memoryHubNative.js, de line only)
- Title -> `Gedächtnistest & Gedächtnistraining kostenlos | SkillDrills` (59): adds `kostenlos`, present in four of the Suggest completions.

## Audit
- Description 144, single H1, FAQ 10 in HTML and JSON-LD, H2s German and mapped to topics.

## Scores (B3)
- `Gedächtnistest online kostenlos`: demand 4 (proxy), ease 2 (clinical + app SERPs), intent fit 4. Clinical `Demenz` queries deliberately not targeted.
- Trend: not available, 2026-10-08.
