# de / visual-tracking-speed-test — research log

Date: 2026-10-08 · Market: Germany, `de-DE`

## Evidence
- Suggest `zielverfolgung` (gl=de hl=de, proxy): synonym, radar, drohne, überwachungskamera, kamera mit zielverfolgung: surveillance/target-tracking-tech intent, wrong audience.
- Suggest `visuelles tracking` (proxy): visual tracking deutsch, visuelles verfolgen, visual tracking. `sehtest reaktionstest` is clinical intent.
- Bing DE: no volume returned (unknown, not zero).

## Defect
- Title/H1 `Zielverfolgung testen` matches radar and camera queries.

## Fix (lib/i18n/drills/visualTrackingSpeedTestNative.js, de lines only)
- Title/H1 -> `Visual Tracking Test: Bewegte Ziele`.

## Scores (B3)
- `Visual Tracking Test`: demand 2 (proxy), ease 4, intent fit 5.
- Trend: not available, 2026-10-08.
