# en / drills/visual-tracking/staircase-step - research log

Date: 2026-10-08 | Agent: t2b | Route: `/drills/visual-tracking/staircase-step`

## Tools
- Bing API via `scripts/bing/bing.py keyword "<phrase>" us`: working (exact-match, Bing only, not Google volume; 0 may mean below reporting threshold or unknown).
- Google Suggest via `scripts/keywords/autocomplete.py` (us/en): working. Suggest is not volume.
- GSC `python scripts/gsc/gsc.py`: working; top 28-day queries contain no visual-tracking terms (site demand is aim/flick/FPS), so GSC gives no signal for this page. proxy.
- WebSearch (standard): US results only.

## Queries
- Primary: vertical eye tracking exercise
- Secondary / long-tail: vertical eye tracking (Bing 0/unknown; Suggest returned nothing for the exact phrase)
- Question phrases: Why train vertical tracking? What is a staircase path?
- Intent: free interactive tool / exercise (not clinical). Pages that rank for the family are clinical how-to PDFs and a few free web trainers.

## Measured vs proxy (Bing exact-match, US, 2026-10-08, measured)
smooth pursuit exercise 20; smooth pursuit test 70; peripheral vision test 128; dynamic visual acuity test 77; mouse tracking test 51; tracking aim trainer 7; depth perception test 196; all other tried phrases returned 0 (unknown or below threshold): eye tracking exercises, visual tracking exercises, figure 8 eye exercise, saccade exercises, divided attention test, vertical eye tracking, zig zag eye tracking.

## Competitors and gaps (WebSearch US, 2026-10-08, seen from laptop IP only)
- FoveaFlow (free web eye trainer with motion paths incl. figure eight, bounce, lissajous), eyedottrainer.com, neurovisualtrainer.com, eyerehab.app, The OT Toolbox, Wikipedia, YouTube pursuit videos, App Store eye-exercise apps.
- Gap: most pages are clinical/OT how-tos or apps; few give an instant browser drill with honest limits (no eye-position recording, not a diagnosis). This site already states that on the hub and constant-slow page.

## PAA / AI-answer pattern
Short definition first, then steps (30-60 s per direction), then safety note. Direct-answer block added to match.

## Entities
smooth pursuit, saccade, catch-up saccade, fovea, retinal slip, oculomotor system (sources already in lib/drillSources.js).

## Trend note (2026-10-08)
Google Trends not accessed in this run. No trend claim made. proxy only.

## B3 (demand / competition-ease / intent-fit, 1-5)
1 / 3 / 4

## Decision
Title kept. Description rewritten (dropped 'Midbrain oculomotor agility training' claim), direct-answer block added.
