# FPS category: France (fr, cc=fr, fr-FR), 2026-11-08

Status: COMPLETE 2026-11-09 (coordinator finished after agent died).

## Prior data reused
- 2026-09-20 Bing fr-FR (scripts/keywords/out/*-fr-2026-09-20.*): `aim trainer` 1,024 exact / 1,694 broad; `aim training` 111/145; `aim trainer valorant` 90/90; related: `aim lab` 716, `3d aim trainer` 276, `aimlabs` 237, `valorant aim trainer` 102, `aim test` 93. 0/0: entraînement de visée, entraîneur de visée, aim trainer en ligne, entraînement flick, flick aim, entraînement 180 degrés FPS, entraînement concentration FPS, micro ajustement visée Valorant, placement du viseur, changement de cible FPS, target switching Valorant, visée verticale FPS, suivi aérien FPS, priorisation des cibles aim trainer.
- 2026-10-08 claims (fr/*.md): `aim trainer` 1906, `aim test` 192, `3d aim trainer` 374, `aim trainer valorant` 306; raw file not found (unverified).
- 2026-11-08 reaction pass (_work-fr2): `aim trainer online` 28/53, `tracking aim trainer` 2/2; 0: entrainement aim (+en ligne/valorant), exercice aim valorant, entrainement tir valorant, valorant peek trainer/training, tracking aim test, améliorer sa visée.
- GSC 90d: /fr/drills/fps 4 impr pos 4.5; /fr/drills/fps/instant-response 15 impr pos 12.9; /fr/drills/fps/target-prioritization 5 impr pos 9.2. Global query `aim trainer en ligne` 1 impr pos 4.

## Autocomplete (Google Suggest gl=fr, proxy only; _work-fr/ac.txt, ac2.txt; 10/10 calls used)
- `flick`, `spray`: off-intent (Flickr, hair spray). `recoil`: only CS2/Valorant crosshair/case items.
- `flick aim` -> flick aim trainer, flick aim training, flick aim test, flick aim cs2.
- `crosshair placement` -> crosshair placement trainer / training / valorant / cs2 (English only; no French form).
- `aim test` -> aim test online, aim test fps, aim test valorant, aim test cs2, aim test mouse, aim test 3d.
- `entrainement fps` -> entrainement fps en ligne, entrainement souris fps, entrainement tir fps, entraînement clavier souris fps, jeux entrainement fps, logiciel entrainement fps.
- `recoil control` -> apex recoil control trainer. `aim lab` -> aim lab online / en ligne / gratuit / valorant.

## SERP (Bing cc=fr via serp_probe; 3/3 probes used; _work-fr/serp.jsonl)
- `aim trainer`: 3daimtrainer.com x2, aiming.pro, aimtrainer.herokuapp, humanbenchmark, aimtrainer.io, clicktest.fr, itch.io, aim.steelseries. Competition: HARD (dedicated tools + humanbenchmark), but small tools rank.
- `aim test`: humanbenchmark, cpstest.click (FR copy), aimtrainer.io, arealme, cpstest.io (FR copy), app.3daimtrainer, aiming.pro, testthiscps.com (FR copy), vercel app. Competition: MEDIUM (CPS-tool sites with French pages rank).
- `aim trainer valorant`: probe returned an unrelated Instagram SERP (bad probe) -> UNKNOWN.

## Bing volume (fr-FR, `_work-fr/kw.jsonl`, `fr.csv`; 40/40 ok: 27 on 11-08 + 13 on 11-09)
- aim trainer 1,738/2,807 · aim lab 1,007 (competitor brand: skip) · 3d aim trainer 402 (our drills are 2D: skip) · aim trainer valorant 244 · aim training 221/357 · aim test 152/157 · valorant aim trainer 114 · aim train 57 · aim trainer fortnite 17 · aim practice 13 · valorant aim training 9 · aim trainer cs2 5 · tracking aim 2 · smooth tracking 2/6.
- 0: every French-native phrase (entraînement visée, jeu de visée, test de visée, contrôle du recul, temps de réaction fps, entrainement fps, aim trainer gratuit/en ligne/souris) and every mechanic loanword (flick, recoil, spray, crosshair placement, pre aim, 180, target switching, micro flick).
- Index (2026-11-09): indexed hub, target-prioritization, 180, instant-response; rest discovered-not-indexed / unknown.

## Page -> primary map (paths under /fr/drills/)

| page | current title | proposed primary | secondaries | evidence | competition | action |
|---|---|---|---|---|---|---|
| fps (hub) | Entraînement de visée FPS gratuit | Aim Training | aim train (57), aim practice (13), entraînement de visée FPS | 221/357; GSC 4 impr pos 4.5 | HIGH (de pattern) | retarget lightly: `Aim Training FPS : entraînement de visée gratuit` |
| fps/target-acquisition | Aim Trainer Valorant - Acquisition de cibles | Aim Trainer Valorant | valorant aim trainer (114), valorant aim training (9) | 244/246 | UNKNOWN (bad probe) | keep; Valorant as usage context ("pour Valorant") |
| fps/flick-shot-training | Aim Trainer – Entraînement de visée | Aim Test | flicks, précision | 152/157 | MEDIUM (HB, cpstest.click/io FR pages) | retarget: `Aim Test : flicks et précision dans le navigateur` |
| fps/angle-hold-trainer | Aim Trainer \| Placement du Viseur | Placement du Viseur | crosshair placement, tenir un angle | 0 | n/a | drop lead |
| fps/recoil-control | Contrôle du Recul \| Entraînement Spray FPS | Contrôle du Recul | spray control | 0 | n/a | keep |
| fps/strafe-tracking | Tracking aim : entraînement strafe FPS | Tracking Aim | strafe FPS | tracking aim 2 | n/a | keep |
| fps/pro-smooth-pursuit | Aim Trainer \| Tracking FPS Fluide | Smooth Tracking | tracking fluide | 2/6 | n/a | drop lead -> `Smooth Tracking : suivi fluide en FPS` |
| fps/anti-strafe-jitter-duel | Aim Trainer \| Tracking Réactif & Strafe | Tracking anti-strafe ADAD | tracking réactif | 0 | n/a | drop lead |
| fps/anti-zigzag-movement-trainer | Aim Trainer \| Tracking Évasif | Tracking en zigzag | cibles évasives | 0 | n/a | drop lead |
| fps/micro-correction-precision | Aim Trainer \| Micro-ajustements de visée | Micro-ajustements de visée | micro flick (0), headshots | 0 | n/a | drop lead |
| fps/target-prioritization | Aim Trainer \| Priorisation des Cibles | Priorisation des cibles | choix de cible | 0; GSC 5 impr pos 9.2 (indexed) | n/a | drop lead only |
| fps/target-switching-swarm | Aim Trainer Valorant - Changement de cible | Changement de cible | target switching | 0 | n/a | drop "Aim Trainer Valorant" (target-acquisition owns) |
| fps/vertical-air-track | Aim Trainer - Tracking vertical FPS | Tracking vertical | cibles aériennes | 0 | n/a | drop lead |
| fps/180-degree-awareness | Entraînement demi-tour 180° \| Visée FPS | Demi-tour 180° en FPS | retournement rapide | 0; indexed | n/a | keep |
| fps/flow-state | Concentration FPS \| Entraînement de Flow | Concentration FPS | état de flow | 0 | n/a | keep |
| fps/instant-response | Test de Temps de Réaction \| Réflexes FPS | Réactivité FPS au clic | temps de clic en ms | temps de réaction = fr reaction hub; test de réaction (95) = light-reaction; test de réflexe (51) = reflex-training; GSC 15 impr pos 12.9 | n/a | retarget: `Réactivité FPS : test de clic en millisecondes` |

Outside FPS: motor aim-trainer `Aim trainer en ligne | Précision souris` keeps **Aim Trainer** (1,738). No change.

## Collisions resolved
1. "Aim Trainer" lead on 9 FPS drills -> motor owns; drop.
2. aim trainer valorant: target-acquisition only; target-switching drops it.
3. instant-response leaves temps de réaction / test de réaction / test de réflexe (all owned by reaction pages).
4. Skipped on honesty: 3d aim trainer (402), aim lab (1,007, brand).

## Kill list (Bing fr-FR exact 0)
aim trainer gratuit/en ligne/souris/overwatch/apex, flick aim trainer, flick trainer, flick aim, tracking aim training, recoil control, recoil trainer, spray control, spray trainer, contrôle du recul, crosshair placement, pre aim, 180 aim trainer, target switching, reaction time test fps, temps de réaction fps, entrainement fps, test de visée, micro flick, jeu de visée, entraînement visée.
