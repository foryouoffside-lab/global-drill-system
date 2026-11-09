# PHYSICAL category: Germany (de, de-DE, cc=de), 2026-11-10

Status: IN PROGRESS (step 2/4: autocomplete done, Bing running). Raw: `_work-de/`.

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
