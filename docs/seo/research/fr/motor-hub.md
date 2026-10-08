# fr / motor hub — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Bing fr-FR (measured): `cps test` 3949, `test cps` 1167, `aim trainer` 1906, `précision souris` 0, `test de précision souris` 0, `jeu de précision` 0, `test clavier` 2308 (hardware-tester intent, see keyboard-recognition log). B3 for `test cps` as hub head: demand 4, intent fit 3 (the CPS drill page owns the exact query).
- Suggest (proxy): `jeu de précision souris` → `jeux de précision avec la souris` (see stability-challenge log).

## SERP / trend
- Not captured. No trend claimed.

## Defects fixed
- Title/description claimed `9 exercices`; the registry holds 8 motor drills. Count is now computed (`motorDrills.length`) in title-adjacent copy, CollectionPage name and description.
- Title `Précision souris et entraînement visée` → `Test CPS et précision souris : exercices | SkillDrills`, using the measured term.
- FAQ rewritten (10 bespoke questions): removed "sub 0,1 ms resolution comparable to a laboratory bench", "banc d'essai biomécanique", Jitter 10-14 / Butterfly 15-22 CPS figures, tendon-sharing anatomy claim, cerebellum/eDPI anchoring claim, "strengthens stabiliser fibres", "NKRO/ghosting/chattering tester" (the keyboard drill is a prompted-key reaction game, not a tester).
- Left as is (client dictionary, D2): H1 `Test de précision souris et entraînement de visée` and H2 `Cinématique & Spécifications de Performance Motrice`.

## Decision
- Keep hub.
