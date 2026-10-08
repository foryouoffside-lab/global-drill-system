# fr / reaction-game — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- measured (Bing fr-FR exact): `jeu de réaction` 0, `jeu de rapidité` 0, `test de réaction` 17, `temps de réaction` 18. Demand not verified.
- Suggest (proxy, gl=fr hl=fr): `jeu de réaction` → `jeu temps de réaction`, `jeu vitesse de réaction`, `jeu de reaction couleur`, `jeux de réaction à un signal`; `jeu de reflexe` → `jeu de reflexe en ligne`, `jeu de reflexe baton qui tombe`.
- B3 for `jeu de réaction en ligne`: demand 1-2, ease 4, intent fit 5.

## Fixes
- Title/H1 `Jeu de Test de Réaction` (awkward, no query evidence) → `Jeu de réaction en ligne : cibles qui tombent`; description rewritten; keyword added. Copy in `lib/i18n/drills/reactionGame.js` fr entries only.
- Existing hedged guide and 10 bespoke FAQ kept.
