# fr / directional-chaos-pursuit — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Suggest (proxy, gl=fr hl=fr): `poursuite oculaire exercice` → `poursuite visuelle exercices`, `exercices poursuite oculaire`, `poursuite oculaire test`, `poursuite oculaire enfant`, `poursuite oculaire définition médicale`; `saccades oculaires` → `exercices saccades oculaires`, `test saccades oculaires`. Intent is mostly orthoptic/medical and education.
- measured (Bing fr-FR exact): `poursuite oculaire` 0, `exercices poursuite oculaire` 0, `saccades oculaires` 0, `exercices saccades oculaires` 0. Demand not verified.
- B3 for `exercice de poursuite oculaire`: demand 1-2, ease 4, intent fit 4.

## Defects
- Title `Poursuite Oculaire Réactive | SkillDrills` identical to `/fr/drills/visual-tracking/dynamic-evasion-pursuit` base title → made unique: `Exercice de poursuite oculaire chaotique`.
- H1 contained English brand fragment `Chaos Pursuit`; replaced.
- Unsourced claims removed: "Standard des compétiteurs professionnels d'esport", FPS transfer ("réduit la désorientation"), sports-gain ("Les athlètes ... conservent la trajectoire").
- Direct-answer paragraph (40-60 words) added first in guide intro.
- Residual: accordion headings `Drill Instructions & Settings` and `About Directional Chaos Pursuit` are hard-coded in the client (`DirectionalChaosPursuitClient.tsx`); blocked by D2/no-Client-edit rule, left as is.
