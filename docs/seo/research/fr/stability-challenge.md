# fr / stability-challenge — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Suggest (proxy, gl=fr hl=fr): `jeu de précision souris` → `jeux de précision avec la souris`; `jeu de précision` → `en ligne`, `tir`, `sport`; `entrainement souris` → `fps`, `ordinateur`, `enfant`. Test d'équilibre queries (`test d'équilibre unipodal`, `exercice équilibre seniors`) are physical/medical balance intent and do not match this mouse drill (it sits in the `balance-training` folder only by taxonomy).
- Bing fr-FR: `test souris` 185 exact; `test de précision souris` 0; `jeu de précision souris` no data. B3 for `jeu de précision souris`: demand 1-2, ease 4, intent fit 4.

## Defects found
- Guide protocol headings, 4 protocol descriptions, FAQ-panel title, and client rule/about card titles were all the same placeholder string `Stabilité de Visée – Test Précision Souris | SkillDrills` (3 duplicate H2s plus 7 card titles). Replaced with real headings and text.
- Fabricated claims removed: `Top 0,5% / 5% / 20%` percentile column, `Apex Stability Master` rank, DPI/eDPI "fortement conseillé", grip dogma, "éliminer les tremblements", "reproduit exactement la pression ... du recul".
- Direct-answer paragraph added first in guide intro (states it is not a medical tremor test). Title/H1 → `Jeu de précision souris : stabilité de visée`.
- Folder taxonomy `balance-training`/"Défi d'équilibre" anchor text left as is (drillNames not edited).
