# fr / dynamic-grid-evasion — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Bing fr-FR (measured): `jeu d'évitement` 0, `jeu d'esquive` 0, `jeu de grille` 0, `jeu de réflexe` 0, `jeu de réflexes souris` 0. Demand not verified (null/zero indistinguishable).
- Suggest (proxy): `jeu d'évitement` → `jeu d'esquive`, `jeux d évitement`; `jeu de réflexe souris` → `jeu de rapidité souris`, `jeux de réflexe souris` (already owned by reflex-training-drill / speed-drill, so this page must not reuse it).
- Chosen primary: `jeu d'évitement` (grid dodging, distinct from quick-dodge's `jeu d'esquive` projectiles and from the reflex pages).

## SERP / trend
- Not captured. No trend claimed.

## Defects fixed
- Title was `Jeu de réflexes à la souris`, a near duplicate of the reflex-training-drill target; now `Jeu d’évitement sur grille 3x3 à la souris | SkillDrills`, H1 aligned.
- Unsourced claims removed: LoL/Valorant/CS2 transfer, "magnocellular", "top 0,1 %", Apex Grid Evader title, 28-38 cm/360 sensitivity, grip advice as fact, "360 degrees panoramic perception", HealthApplication/EducationalApplication categories.
- Tier ladder with English rank names replaced by Palier 1-5; guide intro starts with a direct answer.
- Schemas regenerated from the same strings as the visible FAQ/steps; 10 bespoke questions.

## Decision
- Keep page, demand not verified. `Exercices liés` anchor still reads "Jeu d'Esquive sur Grille" (lib/i18n/drillNames.js, shared, not edited).
