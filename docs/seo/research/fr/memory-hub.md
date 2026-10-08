# fr / memory hub — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Bing fr-FR (measured): `jeux de mémoire` 179 exact / 289 broad, `memory jeu` 119, `test de mémoire` 13 exact / 101 broad, `jeu de mémoire` 0 exact / 5 broad, `test de mémoire visuelle` 0, `mémoire de travail test` 0, `jeu simon` 28. B3 for `jeux de mémoire en ligne`: demand 3, ease 3, intent fit 5.
- Suggest (proxy): `jeu de mémoire couleurs` → couleur en ligne, 4 couleurs; `jeux de mémoire` suggestions mix board-game and online intent.

## SERP / trend
- Not captured. No trend claimed.

## Defects fixed
- Title/H1 `Tests de Mémoire et Entraînement` → `Jeux de mémoire en ligne : tests et exercices` (the measured head term is "jeux de mémoire", not "test"); description and keywords updated. The FAQ in lib/i18n/memoryHubNative.js (fr) already is honest and 10-question, with schema built from the same array, so it was left unchanged.
- Shared-file edit: only the `fr:` UI line in lib/i18n/memoryHubNative.js.

## Decision
- Keep hub. The leftover dropped apostrophes in drill cards (`d empan`) come from lib/i18n/drillNames.js and are not edited here.
