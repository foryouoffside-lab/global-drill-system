# FPS category: Germany (de, de-DE, cc=de), 2026-11-08

Status: COMPLETE. Bing 40/40 `ok` (1 run), autocomplete 10/10, SERP probes 3/3, GSC read-only. Raw: `_work-de/` (kw.tsv, kw.jsonl, ac.txt, serp.tsv, serp.jsonl, serp_summary.txt, gsc_pageopps.txt). Rows: `de.csv`.

## Inputs
- Prior DE research (`docs/seo/research/de/*.md`, 2026-10-08): every aim/FPS Bing call returned `nodata` (old locale code `de`, not `de-DE`) = UNKNOWN. No measured DE FPS volume existed before this run.
- GSC 90d (all countries, page level): `/de/drills/fps` 27 impr pos 15.2, 0 clicks; `/de/drills/fps/target-acquisition` 11 impr pos 7.6, 1 click; `/de/drills/motor/hand-eye-coordination/aim-trainer` 13 impr pos 7.1, 1 click; anti-zigzag 1 impr, flow-state 1 impr. Other DE FPS pages 0. `pageopps` lists no DE page.
- GSC German-language queries: `aim trainieren` 2 impr pos 1; `maus training` 1 impr pos 10. Query file is not country-split.
- Motor aim-trainer DE title: `Aim Trainer online | Mauspräzision testen`.
- Reaction-speed DE names already taken (do not reuse as FPS primaries): `Reaktionstest` + `Reaktionszeit Test` (light-reaction), `Reaktionstraining` (hub), `Bewegliche Ziele treffen` (fps-tracking-trainer), `Peek-Training` (barrier), `Ecken checken trainieren` (market-doors), `Zielverfolgung testen` (visual-tracking-speed-test), `Reflexe trainieren` (reflex drill).

## Autocomplete (Google Suggest gl=de hl=de, PROXY not volume; `_work-de/ac.txt`)
- `aim trainer`: valorant, online, browser, overwatch, cs2, steam, fortnite, 3d, free, controller, human benchmark, headshot. All modifiers English; German gamers type the loanword.
- `aim training`: cs2, valorant, online, overwatch, fortnite, browser, map cs2, games, website.
- `tracking aim`: trainer, practice, test, training, trainer online, cs2, apex.
- `flick` (bare): dominated by Hansi Flick (Bundestrainer, Bayern). Bare "flick" is NOT targetable; must carry "aim"/"shot".
- `rückstoß`: physics/real weapons/Minecraft/CS2 cases. Gaming intent only in `rückstoßkontrolle`, `rückstoßkontrolle warzone`, `r6 rückstoß kontrollieren pc`.
- `spray control`: cs2, cs2 map, crosshair valorant, ak 47, pubg (plus pest/skin-care noise).
- `crosshair placement`: cs2, valorant, trainer, training, map, leetify, r6, aimlabs.
- `aim verbessern`: valorant, pc, fortnite, controller, ps5, cs2, maus. `aim üben`: pc, fortnite, aim übungen.
- `reaktionstest fps`: no suggestions.

## Bing volume (de-DE, exact/broad monthly; `_work-de/kw.jsonl`)
- `aim trainer` 1,563 / 2,428 (head term, biggest DE FPS term)
- `aimlabs` 276 / 362 (competitor brand: do not target)
- `aim training` 168 / 203
- `valorant aim trainer` 149 / 166; `aim trainer valorant` 52 / 53; `valorant aim training` 6
- `aim test` 117 / 122
- `aim trainer online` 22 / 42
- `cs2 aim training` 16; `aim trainer cs2` 12; `aim game` 6; `fps trainer` 3
- Everything else 0 (see kill list).
- Pattern: DE demand is ~100% English loanword head term + game modifier. Every German-native FPS phrase measured 0. Mechanic sub-terms (flick, tracking, crosshair placement, spray/recoil) are 0 on Bing DE even as loanwords.

## SERP (Bing cc=de, `_work-de/serp.jsonl`, 3 probes)
- `aim trainer`: aimtrainer.herokuapp, tfue.io, humanbenchmark, justaim.lol, aiming.pro, 3daimtrainer. 3 answer blocks. Competition HIGH (exact-match domains + humanbenchmark), no German-language result in top 6.
- `aim test`: humanbenchmark, click-test.de (German), arealme, aimtrainer.io, 3daimtrainer, cpstest.io, joltfly, testthiscps (German), aiming.pro. Competition MEDIUM (tool sites; 2 German pages rank, German copy is an edge).
- `aim training`: aimtrainer.io, aiming.pro, aimtrainer.com, cps-check.com (German "Zieltrainer"), 3daimtrainer, aimtrainerpro, gato.gg, kovaaks, gridshot github. Competition HIGH.

## Page -> primary map (one primary per page)
Paths relative to `/de/drills/`. Evidence = Bing exact/broad (de-DE), GSC (90d page level), AC = Google Suggest proxy.

| page | current title | proposed primary | secondaries | evidence | competition note | action |
|---|---|---|---|---|---|---|
| fps (hub) | Aim-Training & kostenloser FPS-Trainer | Aim Training | FPS Trainer (3), Aim Game (6), Aim Übungen | 168/203; GSC 27 impr pos 15.2; AC aim training cs2/valorant/online | HIGH (aimtrainer.io, aiming.pro, kovaaks) | keep; spell the loanword `Aim Training` (not only hyphenated `Aim-Training`) |
| fps/target-acquisition | Valorant Aim Trainer - Zielerfassung & First Shot | Valorant Aim Trainer | aim trainer valorant (52), valorant aim training (6), Zielerfassung | 149/166; GSC 11 impr pos 7.6, 1 click (only DE FPS drill with a click) | UNKNOWN (not probed), likely medium-high | keep; Valorant only as "für Valorant" usage context |
| fps/flick-shot-training | Aim Trainer – Flick-Training im Browser | Aim Test | Flick-Training, Trefferquote | aim test 117/122; flick training / flick aim trainer / flick shot 0; AC bare flick = Hansi Flick | MEDIUM (humanbenchmark, click-test.de, arealme, cpstest.io) | retarget, e.g. `Aim Test: Flick-Training & Trefferquote im Browser`; drill scores flick hits and accuracy, honest fit |
| fps/angle-hold-trainer | Aim Trainer \| Crosshair Placement | CS2 Aim Training | aim trainer cs2 (12), Crosshair Placement (0; AC cs2/valorant), Winkel halten | 16/16; AC crosshair placement cs2 | low volume; SERP UNKNOWN | retarget, drop plain "Aim Trainer" (motor owns it), e.g. `CS2 Aim Training: Crosshair Placement & Winkel halten`; CS2 only as usage context |
| fps/recoil-control | Rückstoßkontrolle lernen \| FPS Spray Control | Rückstoßkontrolle | Spray Control, Recoil Control | all 0; AC rückstoßkontrolle (+warzone), spray control cs2 | n/a | keep (no-demand descriptive; AC shows real gaming usage) |
| fps/strafe-tracking | Tracking Aim Training \| Strafe-Übung | Tracking Aim Training | Strafe Tracking, AD-Strafes | tracking aim / tracking aim trainer 0; AC tracking aim trainer/practice | n/a | keep (no-demand descriptive) |
| fps/pro-smooth-pursuit | Aim Trainer \| Smooth-Tracking üben | Smooth Tracking | flüssiges Tracking, Kurvenziele | smooth tracking 0/3 | n/a | no-demand descriptive; drop "Aim Trainer \|" lead, e.g. `Smooth Tracking üben: Kurvenziele verfolgen` |
| fps/anti-strafe-jitter-duel | Aim Trainer \| Reaktives Tracking & Strafe | ADAD-Tracking | Anti-Strafe, reaktives Tracking | strafe aim 0 | n/a | no-demand descriptive; drop prefix |
| fps/anti-zigzag-movement-trainer | Aim Trainer \| Zickzack-Tracking | Zickzack-Tracking | Slide-Cancel, ausweichende Ziele | not measured (cap); GSC 1 impr | n/a | no-demand descriptive; drop prefix |
| fps/micro-correction-precision | Aim Trainer \| Mikrokorrektur & Headshots | Mikrokorrekturen | Micro Flicks (0), Headshot-Präzision (headshot training 0) | 0 | n/a | no-demand descriptive; drop prefix |
| fps/target-switching-swarm | Aim Trainer Zielwechsel - Multi-Target | Zielwechsel-Training | Target Switching (0), Multi-Target | 0 | n/a | no-demand descriptive; drop "Aim Trainer" lead |
| fps/target-prioritization | Aim Trainer \| Zielauswahl & Bedrohung | Zielpriorisierung | Zielauswahl, Schusshemmung | not measured | n/a | no-demand descriptive; drop prefix |
| fps/vertical-air-track | Aim Trainer: Vertikales Tracking | Vertikales Tracking | Y-Achse, Luftziele | not measured | n/a | no-demand descriptive; drop prefix |
| fps/180-degree-awareness | 180-Grad-Aim-Training \| FPS-Drehung | 180-Grad-Aim-Training | 180 Flick (0), schnelle Drehung | 0 | n/a | keep |
| fps/flow-state | FPS Fokus Training \| Flow Aim Trainer | FPS Fokus Training | Flow State, Konzentration beim Zielen | not measured; GSC 1 impr | n/a | keep primary; drop "Flow Aim Trainer" (head-term overlap) |
| fps/instant-response | Reaktionszeit Test \| FPS-Reflexe messen | FPS-Reflextest | Klick-Reaktion, Klicklatenz messen | reaktionszeit gaming 0, gaming reaktionstest 0 | n/a | retarget: `Reaktionstest` (931) / `Reaktionszeit Test` (592) belong to light-reaction; e.g. `FPS-Reflextest: Klick-Reaktion in ms` |

Outside FPS (owner decision): `/de/drills/motor/hand-eye-coordination/aim-trainer` keeps **Aim Trainer** (1,563/2,428) + `aim trainer online` (22). Reasons: its title already leads `Aim Trainer online`, GSC 13 impr pos 7.1, and the `aim trainer` SERP intent (humanbenchmark-style click-the-targets test) matches that drill. Remove `aim test` from its keywords (now the flick-shot primary).

## Collisions resolved
1. "Aim Trainer" as title lead on 10 DE FPS pages (angle-hold, anti-strafe, anti-zigzag, flick-shot, micro-correction, pro-smooth, target-prioritization, target-switching, vertical-air-track; flow-state "Flow Aim Trainer") plus motor aim-trainer: single owner = motor aim-trainer. FPS pages drop the prefix (may keep "Aim Trainer" in description/body only).
2. angle-hold plain "Aim Trainer" -> `CS2 Aim Training`.
3. instant-response `Reaktionszeit Test` vs reaction-speed light-reaction -> instant-response moves to `FPS-Reflextest`.
4. Reaction fps-tracking-trainer DE keywords (`Aim-Training online`, `Aim-Training Browser`, `Valorant Aim-Training`, `CS2 Tracking`, in `lib/i18n/drills/fpsTrackingTrainer.js` de block) overlap hub / target-acquisition / angle-hold. Phase B: trim those 4 keywords; its primary stays `Bewegliche Ziele treffen`.
5. Hub `Aim Training` (168) vs motor `Aim Trainer` (1,563): distinct strings but near-synonym intent. Accepted split; flagged as decision.
6. strafe-tracking `Tracking Aim Training` vs fps-tracking-trainer `Bewegliche Ziele treffen`: distinct, no change.

## Kill list (Bing de-DE exact 0, status ok)
aim trainer browser, aim trainer kostenlos, aim trainieren, aim verbessern, aim üben, fps training, flick training, flick aim trainer, flick shot, tracking aim trainer, tracking aim, crosshair placement, crosshair placement trainer, pre aim, rückstoßkontrolle, spray control, recoil control, aim trainer apex, 180 flick, target switching, micro flicks, smooth tracking (broad 3), strafe aim, headshot training, reaktionszeit gaming, gaming reaktionstest, zielen üben, maus training.
AC still shows `aim verbessern valorant/pc/fortnite` and `aim üben pc/fortnite`; Bing DE is a small sample, so these are "0 on Bing": use as natural copy, not as targets.

## Unknown / not measured
- SERPs for `valorant aim trainer`, `cs2 aim training` (probe cap 3).
- Not measured (cap 40): aim übungen, aim trainer valorant browser, zielauswahl, vertikales tracking, zickzack tracking, fps fokus.
- GSC query data is not country-split; DE FPS impressions are tiny (hub 27, target-acquisition 11).
- Trend not run.
