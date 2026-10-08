# de / distance-judgment — research log

Date: 2026-10-08 · Market: Germany, `de-DE`

## Evidence
- Suggest `tiefenwahrnehmung test`: single result `tiefenwahrnehmung test`. `entfernung schätzen`, `...übung`, `abstand schätzen`, `räumliches sehen test`, `tiefenwahrnehmung training`: empty. Bing DE volume: not measured (unknown, not zero). Autocomplete is not volume.
- Intent mismatch: `räumliches Sehen Test` / `Tiefensehen Test` / `3D Sehtest` / `Stereosehen` are optometry/stereopsis test intents. The drill is a monocular looming/time-to-contact click-timing game on a 2D screen; it measures no binocular disparity and is not an eye test.

## Fix
- Title `Räumliches Sehen Test online | Entfernungen üben` -> `Entfernung schätzen: Tiefenwahrnehmung üben | SkillDrills` (57). Description 152 chars, opens with "Kein Sehtest".
- Removed stereopsis/Führerschein/"wissenschaftlicher Test" framing, "Apex Stereoskopie-Meister" tiers, "auf die Millisekunde genau", "Submillisekunden-Genauigkeit", performance-transfer and training-effect claims. Keywords swapped for practice-intent terms.
- applicationCategory HealthApplication -> GameApplication (page is not a health/vision tool).
- 10 FAQ questions kept; schema text == visible text (guide FAQ built from faqSchema). New FAQs: what it measures and does not, replaces Führerschein Sehtest (no), when to see an Augenarzt.
- Top-of-file research comment left as is; it records the original (rejected) primary keywords.

## Scores (B3)
- `Entfernung schätzen`: demand 1 (no suggest), ease 4, intent fit 4. Trend: not available, 2026-10-08.
