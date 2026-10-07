# de / drills (directory) — research log

Date: 2026-10-08 · Market: Germany, `de-DE`

## Evidence
- Bing DE exact: `cps test` 5644, `reaktionstest` 750, `reaktionszeit test` 452 — measured (Bing API, 2026-10-08). `aim trainer`, `gehirntraining`, `konzentrationstest`, `reaktionstraining` returned "no data" (API throttled/unknown, not zero).
- Previous title `Online-Drills: 81 kostenlose Tests` carried no query a German user types.

## Fix (lib/i18n/siteLandingSeoNative.js, de block only)
- directoryTitle -> `Reaktionstest, CPS-Test & Aim: N Drills | SkillDrills` (54 chars).
- directoryDescription -> lists the same measured-demand terms plus `Ohne Anmeldung` (143 chars).
- Count stays dynamic; H1 and 3 directory FAQs unchanged.

## Not fixed
- English strings `Session preferences` (H2) and `100% runs in your browser` are inside the shared client component: out of scope (D2).

## Scores (B3)
- `Reaktionstest` / `CPS-Test` as directory lead: demand 4-5, ease 2, intent fit 3 (directory is a hub, not the tool itself).
- Trend: not available, 2026-10-08.
