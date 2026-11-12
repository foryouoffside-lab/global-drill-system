# fr (France, fr-FR, cc fr) - COGNITIVE + MEMORY page -> primary keyword map (2026-11-12)

Status: DONE (AC 10/10; Bing 1 run, 40 phrases, canary `reflex test` = 80 -> zeros are real Bing zeros; `test de mémoire en ligne` = connection error -> UNKNOWN, not retried per cap).

## Inputs
- AC (_work-fr/ac.txt, 10 calls): test de mémoire, test de concentration, jeux de mémoire, entraînement cérébral, table de schulte, test de stroop, lecture rapide, mémoire de travail, jeu simon, empan.
  - AC intent notes: `test de mémoire` / `jeux de mémoire` heavily senior/Alzheimer/printable (`à imprimer`, `pour seniors`); `test de concentration` mixes ADHD/children/`gorille` video; `lecture rapide` = school (CE1/CP) + methods; `empan` alone = empanadas (useless seed) but surfaced `empan mnésique`, `empan de chiffres endroit envers`; `jeu simon` = Hasbro toy + `jeu simon en ligne (gratuit)`; `table de schulte` only 7 suggestions.
- GSC 90d page+query filtered on /fr/drills/{cognitive,memory}: 0 rows (anonymised). Query-level (motor-2026-11/gsc-queries-90d.csv): test de concentration 1i p47; sdmt test online 2i p5 (locale unattributed).
- GSC 90d page level: fr/memory 9i p6.4; memory/.../color-sequence 8i p4; cognitive/.../symbol-matching 14i/1c p11.6; focus/concentration-grid 5i p11; attention/concentration-stamina 2i/1c p25.
- Prior Bing (visual-2026-11, fr-FR): test de mémoire visuelle 0, mémoire visuelle test 0, jeu de mémoire visuelle 0, test d'attention en ligne 0, test d'attention sélective 0, test d'attention visuelle 0. Older demand-2026-10 lang=fr rows all nodata = UNKNOWN.
- Taken (registry + visual fr.md): temps de réaction, test de réaction, test de réflexe, jeu de réaction en ligne, Concentration FPS, jeu visuo-spatial (physical complex-pattern), Test Go/No-Go, Inhibition de la réponse, Test de recherche visuelle, Balayage visuel, jeu de perception du temps.

## Headline
Bing fr-FR: only 5 phrases carry demand: `jeux de mémoire` 186/210, `test de stroop` 117, `mémoire de travail` 79 (informational/definition intent per AC), `test de mémoire` 44/107, `jeu simon` 25. Every concentration/attention/brain-training phrase = 0 (test de concentration*, exercice/jeux de concentration, entraînement cérébral*, test d'attention, attention divisée, table/tableau de schulte, lecture rapide*, test multitâche, test sdmt). Memory drill terms (empan*, n-back, corsi, mémoire spatiale, mémoire des mots/chiffres, court terme) = 0. The Sept verdict holds for French cognitive; memory hub + Stroop + Simon are the only real targets.
Competition: serp_probe broken -> UNKNOWN except GSC pos <= 10 (low).

## Map
| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition | action |
|---|---|---|---|---|---|---|
| cognitive (hub) | Entraînement cérébral et concentration | Entraînement cérébral | exercices de concentration (0) | entraînement cérébral 0, +gratuit 0, jeux de concentration 0; AC = Kawashima/Switch/apps/seniors | UNKNOWN | no-demand descriptive, keep |
| attention/concentration-stamina | Test de Concentration \| Attention Soutenue | Test de concentration | attention soutenue | test de concentration 0 (+en ligne/gratuit 0); GSC query 1i p47; page 2i/1c p25; AC = TDAH/enfant/`gorille` | UNKNOWN | no-demand descriptive, keep; no TDAH claims |
| attention/divided-attention | Test d'attention divisée \| Double tâche | Test d'attention divisée | double tâche | attention divisée 0 | UNKNOWN | no-demand descriptive, keep |
| attention/multi-tasking | Test de multitâche \| Suivi double | Test de multitâche | suivi de deux flux | test multitâche 0 | UNKNOWN | no-demand descriptive, keep |
| focus/concentration-grid | Table de Schulte \| Grille de concentration | Table de Schulte | tableau de Schulte, grille de concentration | table/tableau de schulte 0; AC only 7 sugg.; page GSC 5i p11 | near-low (p11) | keep |
| focus/distraction-fighter | Test de Stroop \| Attention sélective | Test de Stroop | test de Stroop en ligne (0), effet Stroop | **test de stroop 117/117**; AC 180 sugg. (pdf, cotation, interprétation, en ligne gratuit) | UNKNOWN (Wikipedia, psych/clinical PDFs) | keep; add `en ligne gratuit` tail; `Attention sélective` stays only here |
| processing-speed/reaction-time | Temps de réaction de choix : test en ligne | Réaction de choix | changement de règle, vitesse de décision | not measured (cap) | n/a | retarget (COLLISION: `temps de réaction` = reaction hub, `test de réaction` = light-reaction) e.g. `Réaction de choix avec règle changeante`; no-demand descriptive |
| processing-speed/rsvp-reader | Lecture rapide en ligne : entraînement RSVP | Lecture rapide en ligne | RSVP, vitesse de lecture | lecture rapide 0, test de lecture rapide 0, test vitesse de lecture 0; AC = school (CP/CE1) + methods | UNKNOWN | no-demand descriptive, keep |
| processing-speed/symbol-matching | Test SDMT en ligne : symboles et chiffres | Test SDMT (entraînement) | symboles et chiffres | test sdmt 0; page GSC 14i/1c p11.6; GSC query `sdmt test online` 2i p5 | near-low (p11.6) | keep; practice wording, never "officiel/clinique" |
| memory (hub) | Jeux de mémoire en ligne : tests et exercices | Jeux de mémoire | test de mémoire (44/107), jeux de mémoire en ligne (0) | **jeux de mémoire 186/210**; jeu de mémoire 0/11; test de mémoire 44/107; jeux de mémoire gratuits 0; page GSC 9i p6.4; AC = seniors / à imprimer / Alzheimer | low (GSC p6.4) | keep; no Alzheimer claims; printable intent unserved (accept) |
| short-term-memory/color-sequence | Jeu Simon en ligne \| Mémoire des couleurs | Jeu Simon en ligne | mémoire des couleurs, séquence de couleurs | **jeu simon 25/25**; jeu simon en ligne 0; page GSC 8i p4; AC = Hasbro toy + `en ligne gratuit` | low (GSC p4) | keep; generic game name, no Hasbro branding |
| short-term-memory/digit-span | Test empan de chiffres en ligne \| Mémoire | Test d'empan de chiffres | empan mnésique, mémoire des chiffres | empan de chiffres 0, empan mnésique 0, test mémoire des chiffres 0; AC `empan chiffres endroit envers` (WAIS) | UNKNOWN | no-demand descriptive, keep; no WAIS claim |
| short-term-memory/word-recall | Test mémoire des mots en ligne \| Mémoire | Test de mémoire des mots | rappel libre de mots | test mémoire des mots 0; AC `test de mémoire 5 mots` = clinical | UNKNOWN | no-demand descriptive, keep; never claim 5-mots test |
| spatial-memory/grid-memorization | Test de mémoire visuelle en ligne | Test de mémoire visuelle | motifs à mémoriser | test de mémoire visuelle 0 (visual-2026-11) | UNKNOWN | no-demand descriptive, keep |
| spatial-memory/object-location | Test de mémoire spatiale en ligne | Test de mémoire spatiale | position des objets | test de mémoire spatiale 0 | UNKNOWN | no-demand descriptive, keep; avoid `visuo-spatial` (physical) |
| spatial-memory/path-tracing | Test des blocs de Corsi en ligne | Test des blocs de Corsi | empan visuo-spatial | test des blocs de corsi 0 | UNKNOWN | no-demand descriptive, keep |
| working-memory/n-back | Test N-Back en ligne \| Mémoire de travail | Test de mémoire de travail (N-Back) | mémoire de travail (79, informational), test N-Back (0) | mémoire de travail 79/79; test n-back 0; AC `test mémoire de travail adulte`, rest = definitions/Baddeley/TDAH | UNKNOWN | light retarget: `Test de mémoire de travail : N-Back en ligne` |

## Collisions resolved
- `temps de réaction` (reaction hub) / `test de réaction` (light-reaction) vs cognitive reaction-time -> cognitive takes `Réaction de choix`.
- `test de mémoire` (44) = memory-hub secondary only; grid-memorization keeps `test de mémoire visuelle`, n-back takes `test de mémoire de travail` -> no shared primary.
- `Attention sélective` only on distraction-fighter (visual-search dropped it); `Grille de concentration` only on concentration-grid (entropic-grid dropped it).
- `jeu visuo-spatial` (physical complex-pattern) not reused.

## Kill list (no primaries on these)
test de concentration (+en ligne/gratuit), exercice de concentration, jeux de concentration, entraînement cérébral (+gratuit), test de mémoire et concentration, test d'attention, attention divisée, test multitâche, table/tableau de schulte, test de stroop en ligne, lecture rapide/test de lecture rapide/test vitesse de lecture, test sdmt, empan de chiffres/mnésique, test n-back, test des blocs de corsi, test de mémoire spatiale, test mémoire des mots/chiffres/à court terme, exercices de mémoire, entraînement mémoire, jeux de mémoire en ligne/gratuits, jeu simon en ligne, test de mémoire gratuit: all 0. `test de mémoire en ligne` = UNKNOWN (API error). Clinical intents (Alzheimer, MoCA, neurologue, 5 mots, WAIS, TDAH) never targeted.
