# fr / drills directory hub — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Bing fr-FR (measured): `aim trainer` 1906 exact / 3016 broad, `cps test` 3949, `test cps` 1167, `jeux de mémoire` 179, `memory jeu` 119, `temps de réaction` 18 exact / 47 broad, `test de réaction` 17, `entraînement cérébral` 0, `jeux de réflexes` 0, `jeux de concentration` 0. B3 for the directory head (`exercices en ligne`): demand low, intent fit 4 (catalogue page), ease 3.
- Note: `bing.py keyword "<phrase>" fr fr` returns 0 for everything; the language argument must be omitted.
- The strongest measured terms (aim trainer, test CPS) are owned by their drill pages (`fps-tracking-trainer`, `rapid-tapping`), so the hub carries them only in the description as navigation, not as the title head term.

## SERP / trend
- Not captured. No trend claimed.

## Defects fixed
- Title `Exercices en ligne : 81 tests gratuits` (hard-coded count, "tests") → `Exercices en ligne : visée, réflexes, mémoire | SkillDrills` in lib/i18n/siteLandingSeoNative.js (fr entry only); description lists measured head terms and no longer hard-codes the count.
- FAQ rewritten (10 bespoke questions, `${DRILLS.length}` in text): removed invented "percentiles de performance et cohortes mondiales", "laboratory protocols", myelination, sensitivity-ratio transfer to VALORANT/CS2/Apex, "mesure sans décalage", 15-20 min daily protocol, "élimine les goulots de rendu".
- Known and not edited: per-drill taglines in lib/i18n/drillNames.js (fr) still name CS2/Valorant/Apex and promise "Maîtrisez/Éliminez"; the English "Session preferences" H2 comes from the shared client (D2).

## Decision
- Keep page.
