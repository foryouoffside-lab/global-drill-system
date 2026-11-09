# MOTOR category: France (fr, fr-FR, cc=fr), 2026-11-09

Status: COMPLETE. Bing 40/40 `ok` (1 run), autocomplete 10/10, SERP probes 3/3 (all invalid: probe returned generic "test" speedtest results / timeout = UNKNOWN, not retried), GSC read-only (export). Raw: `_work-fr/` (ac.txt, kw.tsv, kw.jsonl, serp.tsv, serp.jsonl, serp_summary.txt). Rows: `fr.csv`.

## Inputs
- GSC 90d (all countries, page level): `/fr/drills/motor` 35 impr pos 6.9, 3 clicks (best FR motor page); finger-sequencing 1 impr pos 46. Other FR motor pages 0. French queries: `testeur cps` 1 impr pos 11, `aim trainer en ligne` 1 impr pos 4.
- Prior FR research 2026-10-08 (`docs/seo/research/fr/rapid-tapping.md`, `keyboard-recognition.md`, `motor-hub.md`), Bing fr-FR exact: `cps test` 3,949, `cps` 2,494, `click test` 1,410, `test cps` 1,167, `test de clic` 344, `compteur de clic` 273, `click speed test` 98, `test de clic par seconde` 17, `clics par seconde` 0/11; `test de saisie` 4,730, `test clavier` 2,308, `test clavier azerty` 1,150, `keyboard tester` 330, `test de frappe` 310, `tester clavier` 22, `test touche clavier` 20, `test clavier en ligne` 31; `aim trainer` 1,906 (1,738 in fps-2026-11). `demand-2026-10/_work-fr` = all nodata (UNKNOWN).
- TAKEN (FPS fr): Aim Training (fps hub), Aim Trainer Valorant, Aim Test (flick-shot), Placement du Viseur, Contrôle du Recul, Tracking Aim, Smooth Tracking, Tracking anti-strafe ADAD, Tracking en zigzag, Micro-ajustements de visée, Priorisation des cibles, Changement de cible, Tracking vertical, Demi-tour 180°, Concentration FPS, Réactivité FPS au clic. Motor aim-trainer owns `Aim Trainer` (1,738).
- TAKEN (reaction fr): temps de réaction (hub), test de réaction (light-reaction), test de réflexe (reflex drill), tir sur cible mobile, Vérifier les angles en FPS, Exercice de saccades oculaires, Test Go/No-Go. Reaction hub keywords also list `aim trainer` (overlap with motor aim-trainer, see collisions).
- Drill mechanics: same as de.md (aim-trainer click shrinking targets; drag-and-drop drag into zones; precision-flick-shot accuracy with bullseye core; finger-sequencing click numbered mouse targets in order; keyboard-recognition press displayed key, ignore fakes; rapid-tapping click as fast as possible, reports CPS, 45 s, mouse/touch only; steady-hand narrowing corridor, wall resets; tracing keep cursor on moving wave).
- Out-of-scope overlap already visible: `/fr/drills/physical/fitness/speed-drill` title `Test de Clics par Seconde – Test CPS` (drill = click moving targets, not CPS).

## Autocomplete (Google Suggest gl=fr hl=fr, PROXY not volume; `_work-fr/ac.txt`, 10/10 calls used, none left)
- `test cps`: French modifiers `test cps clic gauche/droit`, `test cps souris`, `test cps en ligne`, `test cps minecraft`, `test cps fr`, `test cps telephone`, `test de cps`; spacebar/keyboard variants (`test cps clavier`, `barre espace`) not honest (drill is click/tap only). Medical noise (cps = PD-L1 score, "c'est pas sorcier").
- `test de clic`: `test de click par seconde`, `test de clic souris`, `test de rapidité de clic`, `test de vitesse de clic clavier`, `test double clic souris`; noise = clic santé / clic campus.
- `test clavier`: hardware-checker + product-review intent (`test clavier azerty`, `test clavier en ligne`, `test touche clavier azerty`, `test clavier gamer`, brand reviews) plus typing (`test clavier vitesse de frappe`). Nothing matches keyboard-recognition's prompt-a-key mechanic.
- `test souris`: product reviews (gamer, sans fil, razer) + hardware checks (dpi, hz, molette); drill-adjacent: `test souris aim`, `test mouse accuracy online`.
- `précision souris`: `précision souris test`, `jeu précision souris`, `entrainement précision souris`, `améliorer précision souris`; also OS-setting intent (`précision du pointeur`).
- `main sûre`: no game/test intent at all (main basse / main courante noise).
- `jeu du fil électrique`: physical kermesse toy (`kermesse`, `enfant`, `fil de fer`).
- `glisser déposer`: OS/software help (ne fonctionne plus, windows 11, excel); only `activité glisser-déposer` is drill-adjacent (school exercise).
- `suivre la ligne`: transport / tracking noise; no mouse-tracing intent.
- `coordination oeil main`: child-development intent (enfant, maternelle, bébé) + `test de coordination oeil main`, `jeu de coordination oeil main`, `exercice de coordination oeil main`, `améliorer coordination oeil main`.

## Bing volume (fr-FR, exact/broad monthly; `_work-fr/kw.jsonl`, 40/40 ok, 2026-11-09)
- `cps test` 3,450 / 3,615 (3,949 on 2026-10-08); `test cps` 1,141 / 1,207 (1,167 on 10-08) = ~4,600/mo combined, largest FR motor demand.
- `test de clic` 294 / 314; `compteur de clic` 249; `clics par seconde` 0 / 10.
- `test clavier` 2,354 / 4,400; `keyboard tester` 490 / 505; `test clavier en ligne` 53; `test touche clavier` 19; `test vitesse clavier` 18 (all hardware-checker / review / typing intent).
- Reused: `aim trainer` 1,738 (fps-2026-11 run).
- 0: every French descriptive drill phrase (précision souris, glisser déposer, fil électrique, main sûre, suivi souris, coordination oeil main, motricité fine) and every long CPS variant (`test cps souris`, `test cps en ligne`, `test de vitesse de clic`, `test de clics par seconde`). Same pattern as DE: demand = tool names only.

## SERP (Bing cc=fr; `_work-fr/serp_summary.txt`)
- `test cps`, `test clavier`: probe returned speedtest.net / fast.com / nperf / Wikipedia "Test" = query degraded to "test" (likely encoding in --file mode). INVALID = UNKNOWN. `jeu précision souris`: selector timeout = UNKNOWN. Cap used, not retried. Competition for `cps test` assumed HIGH by DE parallel (9 exact-match tool domains).

## Page -> primary map (one primary per page; paths under `/fr/drills/`)

| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC, AC) | competition note | action |
|---|---|---|---|---|---|---|
| motor (hub) | Test CPS et précision souris : exercices | Coordination œil-main à la souris | exercices de motricité fine souris, contrôle du curseur; Test CPS + Aim Trainer only as link anchors | coordination oeil main 0, test/jeu/exercice de coordination oeil main 0 (AC exists, child-dev intent); GSC 35 impr pos 6.9, 3 clicks (best FR motor page) | n/a | retarget: drop `Test CPS` from title (rapid-tapping primary), e.g. `Coordination œil-main et précision souris : exercices`; trim keywords `test CPS`, `clics par seconde`, `entraînement de visée`, `entraîneur de visée gratuit`, `visée FPS`, `test de précision souris`, `vitesse de frappe`, `vitesse clavier` (typing claim = dishonest) |
| hand-eye-coordination/aim-trainer | Aim trainer en ligne \| Précision souris | Aim Trainer | aim trainer en ligne (0 now; GSC 1 impr pos 4), précision souris | 1,738 (fps run) | HIGH (de/fps pattern) | keep; trim `entraînement à la visée` (fps hub), `entraînement FPS`, `exercice de flick` (fps flick-shot), `acquisition de cible`, `visée Valorant` (fps target-acquisition), `visée CS2` |
| hand-eye-coordination/drag-and-drop | Test glisser-déposer \| Précision souris | Test glisser-déposer | glisser-déposer en ligne, contrôle de la souris | test/jeu/activité glisser-déposer 0; AC = OS/software help | n/a | keep (no-demand descriptive); trim `précision souris test` (flick primary), `coordination main-œil souris` (hub) |
| hand-eye-coordination/precision-flick-shot | Entraînement flick \| Test de visée souris | Test de précision souris | tirs au centre de la cible, précision de clic | test précision souris 0, précision souris test 0, test de visée souris 0, jeu précision souris 0 (AC exists) | n/a | retarget, e.g. `Test de précision souris : flicks au centre de la cible`; trim `entraînement à la visée`, `test de visée FPS`, `aim trainer gratuit` (aim-trainer), `micro-ajustement visée` (fps micro-correction primary), `acquisition de cible`, `entraînement CS2`, `entraînement Valorant` |
| movement-speed/finger-sequencing | Entraînement de visée \| Cibles ordonnées | Cliquer les cibles dans l'ordre | cibles numérotées, clic séquentiel | cliquer les nombres dans l'ordre 0; GSC 1 impr pos 46 | n/a | retarget: `Entraînement de visée` = fps hub secondary; e.g. `Cliquer les cibles dans l'ordre : clic séquentiel`; trim `changement de cible` (fps target-switching primary), `aim trainer français` (aim-trainer), `visée FPS`, `vitesse de clic souris` (rapid-tapping) |
| movement-speed/keyboard-recognition | Test de réaction clavier en ligne | Test de réaction clavier | réaction touches gaming, keybinds (Valorant/Minecraft presets) | test de réaction clavier 0 | n/a | keep (no-demand descriptive). Do NOT target `test clavier` (2,354) / `keyboard tester` (490): drill prompts keys, not a hardware checker. Trim `test clavier en ligne` (53), `test de touche clavier` (19), `test vitesse clavier` (18), `vitesse de frappe clavier`, `latence clavier` (implies hardware latency) |
| movement-speed/rapid-tapping | Test CPS en ligne : clics par seconde | Test CPS (+ `CPS test` word order) | test de clic (294), compteur de clic (249), clics par seconde | 3,450 + 1,141 exact; GSC `testeur cps` 1 impr pos 11; AC test cps clic gauche/droit/souris | HIGH (assumed; FR probe invalid) | keep; add `CPS test` spelling in h1/description, add `test de clic` + `compteur de clic`. Honest: 45 s click/tap, reports CPS. No spacebar/clavier CPS (drill ignores keys) |
| precision-control/steady-hand | Jeu du fil électrique : précision souris | Jeu du fil électrique | main sûre, stabilité de la main | jeu (du) fil électrique 0, test main sûre 0; AC = kermesse toy | n/a | keep (no-demand descriptive); trim `test de précision souris` (flick), `coordination œil-main` (hub), `suivre un tracé` (tracing) |
| precision-control/tracing | Test de suivi souris \| Tracé du curseur | Test de suivi souris | suivre une ligne avec la souris, jeu de tracé souris | test de suivi souris 0, suivre une ligne avec la souris 0, jeu suivre la ligne 0 | n/a | keep (no-demand descriptive); trim `entraînement poursuite oculaire fluide` (fps Smooth Tracking / visual), `tracking souris entraînement` |

## Collisions resolved
1. `Test CPS` in hub title vs rapid-tapping -> rapid-tapping owns; hub drops it from title + keywords.
2. OUT OF SCOPE, flag: `/fr/drills/physical/fitness/speed-drill` title `Test de Clics par Seconde & Test CPS Souris – Speed Drill`. Drill = click moving targets, NOT a CPS counter -> dishonest + cannibalises rapid-tapping. Decision: rapid-tapping is sole owner of `test cps` / `cps test` / `test de clic`; speed-drill must retarget off CPS terms (its own variants measured 0: `test de clics par seconde` 0, `test cps souris` 0, `test de vitesse de clic` 0, so the retarget costs nothing).
3. `entraînement de visée` (finger-sequencing title, hub kw, aim-trainer + flick kw `entraînement à la visée`) -> fps hub owns (secondary of `Aim Training`); removed from all motor pages.
4. `changement de cible` on finger-sequencing vs fps target-switching primary -> fps.
5. `micro-ajustement visée` on precision-flick-shot vs fps micro-correction primary -> fps.
6. `aim trainer gratuit` (flick), `aim trainer français` (finger-sequencing) -> motor aim-trainer is sole `Aim Trainer` owner.
7. `visée Valorant`, `visée CS2`, `entraînement CS2/Valorant` on aim-trainer/flick -> fps (target-acquisition owns Valorant).
8. `test de précision souris` on hub + steady-hand, `précision souris test` on drag-and-drop -> precision-flick-shot only.
9. `vitesse de frappe` (hub, keyboard-recognition) -> nobody: no motor drill measures typing.
10. OUT OF SCOPE: reaction hub (`lib/i18n/reactionSpeedHubNative.js` fr) keyword `aim trainer` -> trim (motor aim-trainer owns).

## Kill list (Bing fr-FR exact 0, status ok)
test de clics par seconde, test cps souris, test de vitesse de clic, test cps en ligne, test de rapidité de clic, clics par seconde (broad 10), test de réaction clavier, aim trainer en ligne, précision souris test, test précision souris, jeu précision souris, entrainement précision souris, améliorer précision souris, test souris en ligne, test souris aim, test de visée souris, test glisser déposer, jeu glisser déposer, activité glisser-déposer, jeu du fil électrique, jeu fil électrique, test main sûre, test de suivi souris, suivre une ligne avec la souris, jeu suivre la ligne, coordination oeil main, test de coordination oeil main, exercice de coordination oeil main, jeu de coordination oeil main, exercices de motricité fine, cliquer les nombres dans l'ordre.
Measured but off-intent (skip): test clavier 2,354, keyboard tester 490, test clavier en ligne 53, test touche clavier 19, test vitesse clavier 18.

## Decisions needed
- Keyboard-tester opportunity FR: `test clavier` 2,354 + `keyboard tester` 490 + `test clavier en ligne` 53 + `test touche clavier` 19 = ~2,900/mo exact (AC: `test clavier azerty`, 1,150 on 10-08). Only reachable with a real key-checker page (AZERTY layout). Same product decision as DE.
- Confirm physical speed-drill fr retarget off CPS terms (collision 2).

## Unknown / not measured
- All 3 SERPs (probe invalid). Not measured (cap 40): `test clavier azerty` (1,150 on 10-08, not re-run), `test de clic par seconde` (17 on 10-08), `test double clic souris`, `test cps clic droit`, butterfly/jitter click. Trend not run.
