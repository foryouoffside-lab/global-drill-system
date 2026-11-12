# PHYSICAL category: Germany (de, de-DE, cc=de), 2026-11-10

Status: COMPLETE (Phase A). Bing de-DE batch 40 phrases; canary `reflex test` = 99 (known 78) -> zeros are real. serp_probe 2/3 used. Raw: `_work-de/` (kw.jsonl, serp.jsonl, ac.txt). CSV: `de.csv`.

## Inputs
- GSC 90d page level (all countries): only `/de/drills/physical/fitness/jump-sequence` 1 impr pos 12. All other DE physical pages 0 impressions. Page+query pull (`_work-de/gsc_page_query_physical.jsonl`): no German query on any DE physical page.
- TAKEN (fps de): Aim Training, Valorant Aim Trainer, Aim Test, CS2 Aim Training, Rückstoßkontrolle, Tracking Aim Training, Smooth Tracking, ADAD-Tracking, Zickzack-Tracking, Mikrokorrekturen, Zielwechsel-Training, Zielpriorisierung, Vertikales Tracking, 180-Grad-Aim-Training, FPS Fokus Training, FPS-Reflextest.
- TAKEN (motor de): Maus-Präzisionstest (hub; secondaries Hand-Auge-Koordination, Feinmotorik mit der Maus), Aim Trainer, Maus-Ziehtest, Mausgenauigkeit testen, Ziele in Reihenfolge klicken, Tastatur-Reaktionszeit, CPS Test (+ Klicktest), Ruhige Hand trainieren, Maus-Tracking-Test.
- TAKEN (reaction de): Reaktionstest (+ Reaktionszeit Test, reaction time test, reaction test), Reaktionstraining (hub), Reflexe trainieren (reflex-training-drill, secondary `reflex test` 78), Reaktionstest-Spiel, Go/No-Go-Test, Peek-Training, Ecken checken trainieren, Zielverfolgung testen, Bewegliche Ziele treffen.
- Previously measured (reused, Bing de-DE exact): `reflex test` 78, `feinmotorik übungen` 33 (kids/OT SERP), `maus test` 125 / `maus tester` 161 (hardware intent), 0 for reflexe testen, reflextest online, reaktionsspiel(e) online, reaktionstest spiel, maus training, hand auge koordination test/training, geschicklichkeitsspiel, maus tracking test.
- Drill mechanics (EN client RULES_ITEMS; all mouse-in-browser, no real exercise):
  - stability-challenge: hold crosshair inside a shrinking safe ring against wind-force drift.
  - complex-pattern: memorise a flashed multi-node path, then drag-trace it from memory (accuracy %).
  - cross-body-movement: touch start node, sweep cursor along a corridor to the opposite node; leaving corridor breaks it.
  - dynamic-grid-evasion: 3x3 grid, move cursor out of amber-warned cells before they explode.
  - agility-ladder: sweep cursor left/right onto 4 rungs in sequence as ladders scroll down (rhythm/sequence).
  - jump-sequence: hold click to charge, release to launch a dot, steer mid-air to hit a target (trajectory game).
  - speed-drill: click moving shrinking targets before they vanish. NOT a CPS counter.
  - drop-catch: click falling green targets, ignore red decoys. Not a ruler-drop test.
  - peripheral-threat-sweeper: click threat nodes approaching a core from the outer field.
  - quick-dodge: move cursor to dodge homing projectiles from the edges.
  - reaction-chain: stop the cursor fully inside moving nodes (anti-overflick braking).
- Current DE titles: hub `Agility Training & Reflexe Testen (11 Drills)`; stability `Maus-Stabilitätstest | Aim präzise halten`; complex-pattern `Muster merken Test | Visuelles Gedächtnis`; cross-body `Hand-Auge-Koordination Test`; grid `Raster-Ausweichspiel | Gefahren erkennen`; ladder `Koordinationsleiter Übungen`; jump `Sprungkraft Trainieren – Plyometrik`; speed `Klickgeschwindigkeit Test – Klick-Speed`; drop `Lineal-Reaktionstest online | Reaktionszeit messen`; peripheral `Peripheres Sehen trainieren | Test online`; dodge `Maus-Ausweichspiel online | Reflex-Test`; chain `Overflicking stoppen | Flick-Stopp-Training`.
- Honesty flags spotted in current copy: jump-sequence claims real Sprungkraft/Plyometrik (fitness outcome); ladder keywords `Koordinationsleiter Fußball/Sportabzeichen`; speed-drill claims CPS/Klickgeschwindigkeit; drop-catch claims Lineal-Falltest; hub keyword `kostenlose Fitnessübungen online`, `Sporttraining online`.

## Autocomplete (Google Suggest gl=de hl=de, PROXY not volume; `_work-de/ac.txt`, 10/10 calls used)
- `peripheres sehen`: `trainieren`, `test`, `übungen`, `verbessern`, `trainieren fußball/handball`, `im sport`; heavy medical noise (verloren, eingeschränkt, verschwommen, autismus, adhs, sehtest). Training/test intent exists; drill is an online click game, never claim a Sehtest/medical field test.
- `koordinationsleiter`: 250+ suggestions, all PHYSICAL equipment / sport-club intent (übungen pdf, sportabzeichen, decathlon, kaufen, fußball, handball, kinder). No online/game variant. Ladder drill is a mouse rhythm game: head term is off-intent.
- `ausweichspiel`: dominated by `Ausweichspielstätte` (theatre venue); `ausweichen spiel(e)`, `ausweichspiele`, `auto ausweichspiel`, `ausweichball` (school dodgeball). Weak online-game intent.
- `visuelles gedächtnis`: `test`, `trainieren`, `gedächtnistraining`, `spiele`, `übungen`, `verbessern`, `räumlich visuelles gedächtnis`; kids/ADHD noise. Matches complex-pattern (memorise a path, trace it).
- `muster merken`: `muster merken tms` (med-school entrance test TMS), `muster merken spiel`, `muster merken test`. TMS intent dominant.
- `agility training`: overwhelmingly DOG agility + OSRS/RuneScape skill + local clubs; German market barely separates from English. Off-intent for a mouse hub.
- `hand auge koordination`: kids/ergotherapy/sport intent (übungen kinder, tennisball, baby, arbeitsblätter); `test`, `spiele`, `trainieren`, `verbessern`. Motor hub already lists it as secondary.
- `lineal test`: `lineal fall test`, `lineal fang test`, `reaktionszeit test lineal`, `linealtest`, plus Spanish algebra noise. Intent = physical ruler-drop experiment: drop-catch is NOT that (click falling targets), do not claim.
- `reflex spiel`: physical toys (Hot oder Schrott Stromschlag-Spiel, Stäbe fangen, elektronisch) + `reflex spiel online`, `reflex test spiel`. Mixed.
- `overflick`: English only (`overflicking valorant/cs2`, `stop overflicking`); no German phrasing.

## Cross-category soft collisions (existing DE titles outside fps/motor/reaction; visual/memory not yet researched)
- `visual-tracking/peripheral-ping-pursuit`: `Peripheres Sehen üben | Randreize erkennen` -> conflicts with physical peripheral-threat-sweeper `Peripheres Sehen trainieren`.
- `memory/spatial-memory/grid-memorization`: `Visueller Gedächtnistest online` -> conflicts with complex-pattern `visuelles gedächtnis test`.
- `memory/spatial-memory/object-location`: `Räumlicher Gedächtnistest online` -> blocks `räumliches gedächtnis test` for complex-pattern.
- `visual/tracking-accuracy/moving-target`: `Auge-Hand-Koordination` + motor hub secondary Hand-Auge-Koordination -> cross-body must not take bare `hand auge koordination test`.

## Honesty flags (current DE copy -> fix in Phase B)
- speed-drill: `Klickgeschwindigkeit Test – Klick-Speed` FALSE (no CPS counter; motor rapid-tapping owns CPS Test / Klicktest). Drop all CPS/Klickgeschwindigkeit terms.
- drop-catch: `Lineal-Reaktionstest` / Lineal-Falltest FALSE (no ruler; clicks falling targets). Drop.
- jump-sequence: `Sprungkraft Trainieren – Plyometrik` FALSE fitness claim (it is a charge-and-steer trajectory click game). Drop Sprungkraft/Plyometrik.
- agility-ladder: `Koordinationsleiter Übungen/Fußball/Sportabzeichen` = physical-equipment intent (AC confirms); mouse rhythm game. Drop as primary; at most "inspired by" wording in body.
- hub: `kostenlose Fitnessübungen online`, `Sporttraining online`, `Agility Training` (AC = dog agility/OSRS) -> drop fitness claims.
- peripheral-threat-sweeper: never imply Sehtest/medical field test.

## Bing de-DE (exact/broad, `_work-de/kw.jsonl`; canary OK)
- Non-zero: `koordinationsleiter` 114/114, `reflex test` 99/99 (TAKEN), `klickspiel` 78/78, `dodge game` 10/58, `agility ladder` 7/7, `agility training` 6/24.
- The other 34 phrases = 0/0 (see kill list).
- serp_probe (Bing de-DE, `_work-de/serp.jsonl`): `klickspiel` top 5 = click-test.de, cpstest.org, klickspiel.net (Klick-Test), arealme CPS -> pure CPS-test intent, not physical. `koordinationsleiter` = sport-thieme.de / teamsportbedarf.de shops + sportunterricht.ch theory -> equipment intent.

## Page map (12 rows; no shared primaries, none TAKEN)
| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC, AC) | competition note | action |
|---|---|---|---|---|---|---|
| physical (hub) | Agility Training & Reflexe Testen (11 Drills) | Koordinationsspiele online | Koordinations- und Ausweichdrills mit der Maus (body) | koordinationsspiel 0, reflexspiele 0, agility training 6/24 (AC = dog agility/OSRS); GSC 0 | `Reflexe testen` brushes reaction `Reflexe trainieren` / `reflex test` | no-demand descriptive; drop Agility Training, Reflexe Testen, Fitnessübungen/Sporttraining keywords |
| balance-training/stability-challenge | Maus-Stabilitätstest \| Aim präzise halten | Maus-Stabilitätstest | Fadenkreuz im Ring halten, Wind-Drift ausgleichen | stabilitätstest 0; GSC 0 | avoid `Ruhige Hand` (motor) and `Aim` (fps) | keep primary; drop `Aim präzise halten` |
| coordination/complex-pattern | Muster merken Test \| Visuelles Gedächtnis | Muster merken Spiel | Pfad nachzeichnen, Bewegungsmuster merken | muster merken spiel 0, muster merken 0 (AC: TMS intent), visuelles gedächtnis test/trainieren/-training 0 | memory grid-memorization = `Visueller Gedächtnistest` | retarget, no-demand descriptive; drop Visuelles Gedächtnis from title |
| coordination/cross-body-movement | Hand-Auge-Koordination Test | Koordinationstest mit der Maus | Überkreuzbewegung, Korridor-Führung | koordinationstest 0; hand auge koordination übungen/spiele/trainieren 0 | `Hand-Auge-Koordination` = motor hub secondary + visual moving-target title | retarget, no-demand descriptive |
| coordination/dynamic-grid-evasion | Raster-Ausweichspiel \| Gefahren erkennen | Raster-Ausweichspiel | Gefahrenfeldern ausweichen, 3x3-Raster | ausweichspiel 0, ausweichen spiel 0 (AC: Ausweichspielstätte noise) | none | keep, no-demand descriptive |
| fitness/agility-ladder | Koordinationsleiter Übungen | Agility-Ladder-Rhythmusspiel | agility ladder (7/7) only with "Maus-Version" framing | koordinationsleiter 114 (SERP = shops), koordinationsleiter übungen/spiele 0, agility ladder 7 | koordinationsleiter SERP owned by equipment retailers | retarget; drop Koordinationsleiter Übungen/Fußball/Sportabzeichen |
| fitness/jump-sequence | Sprungkraft Trainieren – Plyometrik | Sprung-Zielspiel | aufladen, abspringen, in der Luft steuern | sprung spiel 0, sprungkraft trainieren 0; GSC 1 impr pos 12 | n/a | retarget (honesty fix: no fitness claim) |
| fitness/speed-drill | Klickgeschwindigkeit Test – Klick-Speed | Schrumpfende Ziele klicken | Ziele vor dem Verschwinden treffen, Tempo-Zieltraining | schnelligkeitstraining 0; klickspiel 78 but SERP = CPS | CPS Test/Klicktest = motor; `Bewegliche Ziele treffen` = reaction | retarget (honesty fix: not a CPS counter) |
| reflex-training/drop-catch | Lineal-Reaktionstest online \| Reaktionszeit messen | Fallende Ziele fangen | rote Köder ignorieren, grüne Ziele klicken | fallende objekte fangen 0; lineal test / lineal fall test / reaktionszeit test lineal 0 | `Reaktionszeit messen` brushes reaction Reaktionstest / Reaktionszeit Test | retarget (honesty fix: no ruler test) |
| reflex-training/peripheral-threat-sweeper | Peripheres Sehen trainieren \| Test online | Peripheres Blickfeld Spiel | Bedrohungen am Rand abwehren | peripheres sehen trainieren/test/übungen/verbessern all 0 (AC: medical noise) | visual-tracking peripheral-ping-pursuit = `Peripheres Sehen üben` | retarget, no-demand descriptive; never imply Sehtest |
| reflex-training/quick-dodge | Maus-Ausweichspiel online \| Reflex-Test | Dodge Game | Maus-Ausweichspiel, Geschossen ausweichen | dodge game 10/58, maus ausweichspiel 0 | `Reflex-Test` = reaction secondary (reflex test 99) | retarget to the only measured honest term; drop Reflex-Test |
| reflex-training/reaction-chain | Overflicking stoppen \| Flick-Stopp-Training | Overflicking stoppen | Flick abbremsen, Cursor im Ziel stoppen | overflicking 0 (AC English-only) | fps owns Mikrokorrekturen / Aim Test | keep, no-demand descriptive |

## Collisions resolved
- speed-drill vs motor `CPS Test`/`Klicktest`: all CPS/Klickgeschwindigkeit dropped; `klickspiel` (78) is CPS intent -> offered to motor rapid-tapping as secondary, not physical.
- speed-drill vs reaction `Bewegliche Ziele treffen`: speed-drill takes `Schrumpfende Ziele klicken`.
- quick-dodge + hub vs reaction `reflex test` / `Reflexe trainieren`: Reflex-Test / Reflexe Testen removed.
- drop-catch vs reaction `Reaktionstest` / `Reaktionszeit Test`: `Reaktionszeit messen` removed.
- stability vs fps `Aim` / motor `Ruhige Hand trainieren`: Aim phrase removed, Ruhige Hand not used.
- cross-body vs motor hub + visual moving-target `Hand-Auge-Koordination`: cross-body takes `Koordinationstest mit der Maus`.
- complex-pattern vs memory grid-memorization `Visueller Gedächtnistest`: complex-pattern takes `Muster merken Spiel`.
- peripheral-threat-sweeper vs visual-tracking peripheral-ping-pursuit `Peripheres Sehen üben`: physical takes `Peripheres Blickfeld Spiel`; `peripheres sehen` family left to visual-tracking (all 0 in Bing anyway).
- dynamic-grid-evasion vs quick-dodge: grid = `Raster-Ausweichspiel`, dodge = `Dodge Game`.

## Kill list (Bing de-DE 0 exact unless noted)
koordinationstraining, koordinationstest, reflextraining, reflex spiel, reflex spiel online, reflexspiele, stabilitätstest, visuelles gedächtnis test, visuelles gedächtnis trainieren, visuelles gedächtnistraining, muster merken, muster merken spiel, räumliches gedächtnis test, hand auge koordination übungen/spiele/trainieren, koordinationsspiel, ausweichspiel, ausweichen spiel, koordinationsleiter übungen, koordinationsleiter spiele, sprungkraft trainieren, sprung spiel, schnelligkeitstraining, lineal test, lineal fall test, reaktionszeit test lineal, fallende objekte fangen, peripheres sehen trainieren/test/übungen/verbessern, maus ausweichspiel, overflicking.
Off-intent despite volume: koordinationsleiter 114 (equipment shops), klickspiel 78 (CPS intent, motor), agility training 6/24 (dog agility). TAKEN: reflex test 99.
(Zero-volume phrases are still used as descriptive primaries where they honestly describe the drill; they carry no demand claim.)

## Decisions needed
1. `klickspiel` 78: add as a motor CPS secondary in the motor de map?
2. Peripheral family: confirm visual-tracking keeps `Peripheres Sehen` and physical takes `Peripheres Blickfeld Spiel`.
3. Hub: accept dropping `Agility Training` (6/24, dog intent) for `Koordinationsspiele online`.
4. 11 of 12 DE physical pages have no measurable demand (only `dodge game` 10): deprioritise Phase B for DE, or noindex per the demand-driven locale rule?
