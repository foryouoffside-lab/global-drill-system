# fr / rsvp-reader — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Bing fr-FR (measured): `lecture rapide` 23 exact, `lecture rapide en ligne` 0, `test de lecture rapide` 0, `lecture rapide rsvp` 0, `vitesse de lecture` 0, `test vitesse de lecture` 0. B3 for `lecture rapide en ligne`: demand 1-2, ease 3, intent fit 3.
- Suggest (proxy): `lecture rapide` → méthode, technique, exercices gratuits, exercices pdf, test, ce1/ce2/cm1 (school-age reading drills), livre. Intent leans to methods and exercises; no RSVP-specific French suggestion.

## SERP / trend
- Not captured. No trend claimed.

## Defects fixed
- Title was bare `Lecture rapide | Lecteur RSVP`; the page is not a text reader or comprehension test (the drill is a target-word detection task in an RSVP stream). Title/H1 now `Lecture rapide en ligne : entraînement RSVP` / `Lecture rapide en ligne`, and the description says it is neither a comprehension test nor clinical.
- Invented Top 1% / 5% / 15% / 50% column and rank names replaced by neutral Palier 1-5.
- Unsourced claims removed: "80% of time in saccades", "eliminates subvocalisation", "350 MPM no inner voice", comprehension constant to 500-600 MPM, "lecteur entraîné 500-850 MPM", `HealthApplication` category.
- HowTo step URLs pointed at `/reaction-time#step-N` (copy-paste bug); now `/rsvp-reader#step-N`. Direct answer first in guide intro. Schema equals visible text.

## Decision
- Keep page, low measured demand (23). H2 `Entraînement RSVP` is the client's start-screen title.
