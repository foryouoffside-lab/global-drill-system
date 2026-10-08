# fr / physical hub — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Bing fr-FR (measured): `test de réflexes` 0, `test réflexe` 0, `test de réflexe` 0, `jeux de réflexes` 0, `jeu d'esquive` 0, `échelle d'agilité` 0, `vision périphérique` 0, `test de rapidité` 159 exact / 373 broad (generic speed test, not adopted: wrong intent for this hub). Demand not verified for the chosen phrase.
- Suggest (proxy): `test de réflexe` → `test de réflexe en ligne`, `test de réflexe souris`; `entrainement vision périphérique` → `exercices vision périphérique`; `échelle d'agilité` → exercices, decathlon, intersport (physical-equipment intent).
- The hub avoids the exact title head terms owned by its drill pages (`test de réflexe en ligne` → drop-catch, `jeu d’esquive` → quick-dodge, `exercices de vision périphérique` → peripheral-threat-sweeper) and uses the umbrella `exercices de réflexes et d’agilité`.

## SERP / trend
- Not captured. No trend claimed.

## Defects fixed
- Title/description are now produced from the same wording, with the count computed from the registry (`physicalDrills.length`), replacing "11 exercices scientifiques" and the duplicate metadata block.
- FAQ rewritten (10 bespoke questions): removed transfer of the digital ladder to football/basketball footwork, "vitesse de conduction nerveuse", basal-ganglia/prefrontal inhibition claims, corpus callosum cross-body claim, "280 ms to under 190 ms" reaction-time claim, magnocellular/injury-prevention claim, "15-25 min, 3-5 times a week, CNS fatigue" protocol. Replaced by statements that these are mouse/keyboard games and not physical training.
- H1 and H2s come from the client dictionary and were left (D2).

## Decision
- Keep hub, demand not verified.
