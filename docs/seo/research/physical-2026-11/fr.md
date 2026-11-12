# PHYSICAL category: France (fr, fr-FR, cc=fr), 2026-11-10

Status: DONE (Phase A, 2026-11-10). Raw: `_work-fr/` (kw.jsonl = Bing fr-FR batch, 40 rows). CSV: `fr.csv`.

## Inputs
- GSC 90d page level (all countries): `/fr/drills/physical/coordination/complex-pattern` 65 impr pos 8.3, 2 clicks (best physical page in any locale); `fitness/agility-ladder` 41 impr pos 7.4, 0 clicks; `coordination/cross-body-movement` 4 impr pos 14.8; `reflex-training/quick-dodge` 3 impr pos 30.3; `fitness/jump-sequence` 1 impr pos 9. Hub and other pages 0. Page+query pull (`_work-fr/gsc_page_query_physical.jsonl`): only visible French query = `jeu visuo spatial` 3 impr pos 9 on complex-pattern (rest anonymised).
- TAKEN (fps fr): Aim Training, Aim Trainer Valorant, Aim Test, Placement du Viseur, Entraînement Spray FPS / Contrôle du Recul, Tracking Aim, Tracking FPS Fluide, Tracking Réactif & Strafe, Tracking Évasif, Micro-ajustements de visée, Priorisation des Cibles, Changement de cible, Tracking vertical, Visée FPS / Demi-tour 180°, Entraînement de Flow, Réflexes FPS.
- TAKEN (motor fr): Coordination œil-main à la souris (hub), Précision souris (aim-trainer), Test de visée souris, Cibles ordonnées, Test de réaction clavier, Test CPS / CPS test (+ test de clic, compteur de clic), Jeu du fil électrique, Tracé du curseur; `Aim Trainer` owned by motor aim-trainer.
- TAKEN (reaction fr): temps de réaction (hub), test de réaction (light-reaction; + test temps de réaction, reaction time test), test de réflexe (reflex-training-drill; + reflex test 87, test reflex 41), tir sur cible mobile, Vérifier les angles en FPS, Exercice de saccades oculaires, Test Go/No-Go.
- Previously measured Bing fr-FR (reused): 0 for test de réflexes, test réflexe, jeu(x) de réflexe, jeu de réflexe en ligne / avec la souris, améliorer ses réflexes, coordination oeil main, test/exercice/jeu de coordination oeil main, exercices de motricité fine, précision souris (all variants), test de vitesse de clic, test de clics par seconde, test cps souris. Older fr physical research (2026-10): `jeu d'esquive` 0, `échelle d'agilité` 0, `vision périphérique` 0, `test de la règle` 0, `test de réaction règle` 0, `ruler drop test` 0, `attraper la règle` 0. `test de rapidité` 70 = typing/CPS/speedtest intent (kill).
- Drill mechanics: identical to de.md (all mouse-in-browser; no real exercise). speed-drill = click moving shrinking targets (NOT CPS). drop-catch = click falling green targets, ignore red decoys (NOT a ruler test). jump-sequence = charge-and-release trajectory game with mid-air steering (NOT vertical-jump training).
- Current FR titles: hub `Entraînement d'Agilité & Test de Réflexes`; stability `Jeu de précision souris : stabilité de visée`; complex-pattern `Jeu de mémoire visuelle | Test spatial`; cross-body `Test de coordination œil-main`; grid `Jeu d'évitement sur grille 3x3 à la souris`; ladder `Échelle d'agilité en ligne : jeu de rythme`; jump `Détente Verticale – Sauter Plus Haut`; speed `Test de Clics par Seconde – Test CPS`; drop `Test de réflexe en ligne : cibles qui tombent`; peripheral `Exercices de vision périphérique en ligne`; dodge `Jeu d'esquive à la souris : projectiles`; chain `Freinage de visée souris : arrêt sur cible`.
- Honesty/collision flags in current copy: jump-sequence claims real détente verticale (fitness outcome); speed-drill claims CPS (motor rapid-tapping owns); drop-catch title leads with `Test de réflexe` (reaction reflex-training-drill owns) and keywords claim `test de la règle`; hub `Test de Réflexes` overlaps reaction primary; cross-body `Test de coordination œil-main` overlaps motor hub primary; stability `Jeu de précision souris` overlaps motor aim-trainer `Précision souris`; reaction-chain keywords `aim trainer gratuit en ligne`, `test précision souris` (taken).

## Autocomplete (Google Suggest gl=fr hl=fr, PROXY not volume; `_work-fr/ac.txt`, 10/10 calls used)
- `vision périphérique`: 313 suggestions, ~90% medical/definition (trouble, floue, perte, définition, code de la route, animaux) or English bleed (`peripheral vision ...` songs/medical). Training intent in French = only `vision périphérique test`; `exercice`/`améliorer` appear only as English (`peripheral vision exercises/training games`). Drill is a click game, never a Sehtest/champ visuel.
- `échelle de rythme`: 81 suggestions, 100% physical equipment/sport (decathlon, football, basket, boxe, exercices pdf, prix). No online/game variant. Ladder drill is a mouse rhythm game -> head term off-intent.
- `échelle d'agilité`: 30 suggestions, same equipment/sport intent (exercices pdf, decathlon, boxe, foot) + clinical-scale noise (échelle d'agitation/apgar/aggir).
- `jeu d'esquive`: swamped by `jeu d'évasion` (Québec escape rooms). Real esquive variants: `jeux d esquive`, `jeu d esquive ballon`/`voiture`, `technique d'esquive`. Weak online-game intent.
- `mémoire visuelle`: 229 suggestions; `test`, `exercices`, `jeu`, `jeux`, `jeu mémoire visuelle gratuit`, `test de mémoire visuelle gratuit`, `jeux mémoire visuelle adulte`, `mémoire de travail visuelle`, `mémoire visuelle séquentielle` + VAK/learning-style and GPU-memory noise. Test/jeu intent real BUT `Test de mémoire visuelle` is the TITLE + keyword set of `/fr/drills/memory/spatial-memory/grid-memorization` (owns test/jeu de mémoire visuelle, mémoire visuo-spatiale) -> NOT available to physical.
- `jeu visuo spatial`: 10 suggestions, all relevant: `à imprimer`, `enfant`, `jeux visuo spatial en ligne`, `jeu dyspraxie visuo spatiale`, `jeu pour travailler le visuo spatial`, `jeux visuo spatial(e)`. Intent = OT/speech-therapy/parents seeking visuo-spatial exercises; matches complex-pattern (memorise flashed path, trace it) honestly. This is the only French query GSC shows on any FR physical page (pos 9).
- `exercice de coordination`: 179 suggestions, sport-coaching (foot u9-u13, basket, boxe, senior, kiné, pdf) + grammar noise (conjonction de coordination). Online-relevant: `exercice de coordination oeil main`, `jeu de coordination oeil main`, `jeux de coordination oculo manuelle`, `exercice coordination visuo motrice`, `exercice de coordination bimanuelle` (motor hub owns coordination oeil main; all measured 0).
- `entrainement agilité`: dog agility, football, `agilité mentale/cérébrale` (enfant), piano finger agility. Off-intent for a mouse hub.
- `jeu de réflexe`: online variants `jeu de réflexe en ligne`, `avec la souris`, `jeu de reflexe souris`, `jeu de reflexe pc`, `jeu de rapidité souris`, `jeu de réflexe gratuit`, `jeu réflexe lumineux en ligne`, `jeu temps de réaction f1`, `jeu de reaction en chaine`; rest = toys (bâton qui tombe, lumineux mural) and `jeu de réflexion` (puzzles) noise. `jeu de reflexe baton qui tombe` = physical falling-stick toy, drop-catch is NOT that.
- `test de la règle`: 0 suggestions (header only).

## Collision analysis (fr maps: fps-2026-11/fr.md, motor-2026-11/fr.csv, reaction-speed-2026-11/fr.csv, live app/fr titles)
- `test de réflexe` / `reflex test` / `test reflex` -> reaction reflex-training-drill. Physical hub and drop-catch must drop `Test de Réflexe(s)` from title lead.
- `Test CPS` / `test de clic` 294 / `compteur de clic` 249 / `clics par seconde` -> motor rapid-tapping. speed-drill must drop CPS (also dishonest: it is click-moving-targets, not clicks/sec).
- `coordination oeil main` (+ test/exercice/jeu) -> motor hub. cross-body must drop `Test de coordination œil-main` lead.
- `précision souris` / `test précision souris` -> motor. stability must drop `Jeu de précision souris` lead.
- `aim trainer` / `aim test` / `tracking` -> fps/motor. reaction-chain must drop `aim trainer gratuit en ligne`, `test précision souris` keywords.
- `test de mémoire visuelle` / `jeu de mémoire visuelle` / `mémoire visuo-spatiale` -> memory grid-memorization (live title). complex-pattern current title `Jeu de mémoire visuelle | Test spatial` collides; move it to `jeu visuo spatial` (proven, pos 9) and keep `mémoire de travail visuelle`/`mémoire visuelle séquentielle` only as non-primary support.
- `vision périphérique` -> appears in cognitive concentration-grid (Schulte) and several fps page copies, but no page holds it as PRIMARY in any fr map -> available to peripheral-threat-sweeper, with honest "jeu/exercice" framing (not a medical test).
- `jeu de réflexe ...` variants measured 0 by reaction pass (not claimed as primaries by reaction) -> usable as descriptive physical secondaries only.

## Title ideas (honest, native; pending Bing)
- hub: `Jeux d'agilité et de coordination à la souris (11 exercices)`
- stability: `Stabilité du viseur à la souris : garder la visée stable`
- complex-pattern: `Jeu visuo-spatial en ligne : mémoriser et retracer un parcours` (protect pos 8.3)
- cross-body: `Exercice de coordination visuo-motrice : balayage croisé à la souris`
- grid: `Jeu d'évitement sur grille 3x3 à la souris` (keep current; "esquive" reserved for quick-dodge)
- ladder: `Échelle d'agilité en ligne : jeu de rythme à la souris` (protect pos 7.4; keep current phrasing)
- jump: `Jeu de saut et trajectoire : charger, sauter, viser`
- speed: `Jeu de clic sur cibles mobiles : rapidité de la souris`
- drop: `Attraper les cibles qui tombent : jeu de réflexe à la souris`
- peripheral: `Jeu de vision périphérique : défendre le centre`
- dodge: `Jeu d'esquive à la souris : éviter les projectiles`
- chain: `Freinage de visée : s'arrêter net sur la cible (anti-overflick)`

## Bing fr-FR batch (coordinator run, `_work-fr/kw.jsonl`, 40 phrases)
- Canary `reflex test` = 100 exact (known 87) -> batch healthy; zeros are REAL zeros (below Bing reporting threshold), not UNKNOWN.
- Only non-zero physical candidate: `jeu de clic` 18 exact / 18 broad (unclaimed by motor/fps/reaction; motor owns `test de clic` 294, `compteur de clic` 249, CPS).
- Everything else 0: all mémoire visuelle variants, `jeu visuo spatial` (Google demand exists anyway: GSC 3 impr pos 9), coordination, échelle de rythme/agilité, esquive/évitement, vision périphérique, jeu de saut, stabilité souris, overflick, bâton qui tombe.
- serp_probe: 0 used (no free candidate >= 50).
- Extra collision found: reaction owns `Jeu de réaction en ligne` (reaction-game) and its hub carries `jeu de réflexes` + "cibles qui tombent" -> drop-catch avoids bare `jeu de réflexe(s)` as primary.

## Page -> primary map (fr)
| page | current title | proposed primary | secondaries | evidence | competition note | action |
|---|---|---|---|---|---|---|
| hub `/fr/drills/physical` | Entraînement d'Agilité & Test de Réflexes | jeux d'agilité et de coordination à la souris | jeu de coordination, exercices de réflexes en ligne | Bing jeu de coordination 0, test d'agilité 0, exercice agilité 0; GSC fr 0 | `Test de Réflexes` collides with reaction (reflex test 100) | no-demand descriptive; drop Test de Réflexes |
| balance-training/stability-challenge | Jeu de précision souris : stabilité de visée | stabilité de la visée à la souris | stabilité souris, viseur qui tremble | Bing 0/0; GSC 0 | `précision souris` = motor | no-demand descriptive; retarget off précision souris |
| coordination/complex-pattern | Jeu de mémoire visuelle \| Test spatial | jeu visuo-spatial | jeux visuo spatial en ligne, mémoire de travail visuelle, mémoriser un parcours | GSC 65 impr pos 8.3 (2 clicks); query `jeu visuo spatial` 3 impr pos 9; AC 10/10 relevant; Bing 0 | `test/jeu de mémoire visuelle` = memory grid-memorization (live title + keywords) | soft retarget: lead with visuo-spatial, keep "mémoire" in body/H1 continuity; PROTECT ranking |
| coordination/cross-body-movement | Test de coordination œil-main | coordination visuo-motrice à la souris | exercice coordination visuo motrice, balayage croisé | GSC 4 impr pos 14.8; AC `exercice coordination visuo motrice`; Bing coordination variants 0 | `coordination oeil main` = motor hub | no-demand descriptive; drop œil-main lead |
| coordination/dynamic-grid-evasion | Jeu d'évitement sur grille 3x3 à la souris | jeu d'évitement sur grille | éviter les cases piégées, grille 3x3 | Bing jeu d'évitement 0; GSC 0 | none | keep (no-demand descriptive) |
| fitness/agility-ladder | Échelle d'agilité en ligne : jeu de rythme | échelle d'agilité en ligne | jeu de rythme à la souris, échelle de rythme (descriptive only) | GSC 41 impr pos 7.4; Bing échelle d'agilité/rythme 0; AC = real-equipment intent | head term off-intent (physical ladders) -> keep "en ligne" qualifier | KEEP title (protect pos 7.4) |
| fitness/jump-sequence | Détente Verticale – Sauter Plus Haut | jeu de saut et de trajectoire | jeu de saut, charger et viser | Bing jeu de saut 0; GSC 1 impr pos 9 | none | retarget: remove détente verticale / sauter plus haut (false fitness claim) |
| fitness/speed-drill | Test de Clics par Seconde – Test CPS | jeu de clic | jeu de clic sur cibles mobiles, rapidité de la souris | Bing `jeu de clic` 18/18 (only free non-zero); `jeu de clic en ligne` 0 | CPS / test de clic = motor rapid-tapping; `jeu de clic` SERP may be idle-clicker games (unprobed, <50) | retarget: remove CPS (false + taken) |
| reflex-training/drop-catch | Test de réflexe en ligne : cibles qui tombent | attraper les cibles qui tombent | jeu de réflexe avec la souris, jeu de réflexe en ligne | Bing all 0 | `test de réflexe` = reaction; `jeu de réflexes` on reaction hub; bâton/règle = physical toy, not this drill | retarget: drop Test de réflexe lead + `test de la règle` keywords |
| reflex-training/peripheral-threat-sweeper | Exercices de vision périphérique en ligne | jeu de vision périphérique | exercice vision périphérique, vision périphérique test (game framing, no medical claim) | Bing 0 on 4 variants; AC medical-dominated; GSC 0 | Schulte page uses vision périphérique as secondary only | light rewrite (no-demand descriptive) |
| reflex-training/quick-dodge | Jeu d'esquive à la souris : projectiles | jeu d'esquive à la souris | jeu d'esquive, éviter les projectiles | Bing jeu d'esquive 0; GSC 3 impr pos 30.3 (EN `cursor dodge` 7 impr pos 7.4) | AC swamped by `jeu d'évasion` (escape rooms) | keep |
| reflex-training/reaction-chain | Freinage de visée souris : arrêt sur cible | freinage de visée | arrêt sur cible, overflick | Bing overflick 0; GSC 0 | keywords `aim trainer gratuit en ligne`, `test précision souris` are taken (fps/motor) | keep title; strip taken keywords |

## Collisions resolved
- hub `Test de Réflexes` -> reaction reflex-training-drill keeps it; hub goes descriptive agility/coordination.
- speed-drill `Test CPS` / `test de clics par seconde` -> motor rapid-tapping keeps; speed-drill takes `jeu de clic` (18).
- cross-body `coordination œil-main` -> motor hub keeps; cross-body takes `coordination visuo-motrice`.
- stability `précision souris` -> motor keeps; stability takes `stabilité de la visée`.
- complex-pattern `jeu de mémoire visuelle` -> memory grid-memorization keeps; complex-pattern takes `jeu visuo-spatial` (its only proven French query).
- drop-catch `test de réflexe` -> reaction keeps; `jeu de réflexes` on reaction hub -> drop-catch leads with `attraper les cibles qui tombent`.
- grid vs dodge: `évitement` = grid, `esquive` = quick-dodge.
- reaction-chain keywords `aim trainer gratuit en ligne`, `test précision souris` -> removed (fps/motor).
- 12 distinct primaries; none TAKEN.

## Kill list (Bing fr-FR 0/0 this batch, canary healthy)
jeu de réflexe en ligne, jeu de réflexe avec la souris, jeux de réflexe gratuit, jeu de reflexe baton qui tombe, jeu du baton qui tombe, test du baton qui tombe, mémoire visuelle test, test de mémoire visuelle, mémoire visuelle exercices, jeu de mémoire visuelle, jeu visuo spatial (Bing only; kept on GSC evidence), jeux visuo spatial en ligne, exercice de coordination, exercice de coordination motrice, test de coordination, jeu de coordination, échelle de rythme, échelle de rythme exercices, échelle d'agilité exercices, exercice agilité, jeu d'esquive, jeu d'esquive en ligne, jeu d'évitement, jeu esquiver obstacles, vision périphérique test, test vision périphérique, exercice vision périphérique, améliorer vision périphérique, jeu de saut, jeu de clic en ligne, jeu cliquer sur les cibles, stabilité souris, viseur qui tremble, overflick, test d'agilité, test de rapidité de réaction, entrainement réflexe, test de vivacité. Earlier-pass zeros listed under Inputs (test de la règle, ruler drop test, échelle d'agilité, vision périphérique, jeu d'esquive). "Zero" kept as descriptive primaries where no alternative exists; they are honest labels, not demand bets.

## Decisions needed
1. complex-pattern: soft retarget to `jeu visuo-spatial` (resolves memory collision) vs leave title untouched to protect pos 8.3. Recommend soft retarget keeping "mémoriser/retracer un parcours".
2. speed-drill `jeu de clic` (18): SERP intent unverified (possibly idle-clicker games); accept, or go purely descriptive.
3. FR physical has ~zero measurable Bing demand: Phase B = honesty/collision cleanup (CPS, détente verticale, test de réflexe, œil-main, précision souris), not growth.
