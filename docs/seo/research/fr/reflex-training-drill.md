# fr / reflex-training-drill — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- measured (Bing fr-FR exact): `test de réflexes` 0, `jeu de réaction` 0, `entraînement réflexes` 0, `test de réflexes en ligne` 0. No measured French volume.
- Suggest (proxy, gl=fr hl=fr): `jeu de reflexe` → `jeu de reflexe en ligne`, `jeu de reflexe lumineux`, `jeu de reflexe baton qui tombe`, `jeu de reflexe f1`; `jeu de réaction` → `jeu de réaction à un signal`, `jeu de reaction couleur`, `jeu vitesse de réaction`.
- B3 for `jeu de réflexes en ligne`: demand 1-2 (Suggest only), ease 4, intent fit 5.

## Fixes
- Title/H1 `Test de Réflexes : Cibles Multiples` → `Jeu de réflexes en ligne : cibles multiples` (drill is a game with several targets, not a clinical reflex test); description rewritten; keyword added. Copy in `lib/i18n/drills/reflexTrainingDrillNative.js` (fr entries only).
- Existing FAQ (10 bespoke), hedged benchmark note and intro already comply; kept.

## Decision
- Keep page; demand not verified.
