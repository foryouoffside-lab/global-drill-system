# MOTOR category: Germany (de, de-DE, cc=de), 2026-11-09

Status: COMPLETE. Bing 40/40 `ok` (1 run), autocomplete 10/10, SERP probes 3/3 (1 errored: `tastatur test` = UNKNOWN, not retried), GSC read-only (export). Raw: `_work-de/` (ac.txt, kw.tsv, kw.jsonl, serp1.tsv, serp2.tsv, serp.jsonl, serp_summary.txt). Rows: `de.csv`.

## Inputs
- GSC 90d (all countries, page level): `/de/drills/motor` 27 impr pos 7.0, 1 click; `/de/drills/motor/hand-eye-coordination/aim-trainer` 13 impr pos 7.1, 1 click; finger-sequencing 4 impr pos 12.5; precision-flick-shot 1 impr pos 57. Other DE motor pages 0. German queries: `aim trainieren` 2 impr pos 1, `maus training` 1 impr pos 10.
- Prior DE research 2026-10-08 (`docs/seo/research/de/rapid-tapping.md`, `motor-hub.md`): Bing measured `cps test` 5,644/5,891, `klicktest` 171, `klicks pro sekunde` 21, `cps test spacebar` 12. Everything else in `demand-2026-10/_work-de` = nodata (UNKNOWN).
- TAKEN (FPS de): Aim Training (fps hub), Valorant Aim Trainer, Aim Test (flick-shot), CS2 Aim Training, Rückstoßkontrolle, Tracking Aim Training, Smooth Tracking, ADAD-Tracking, Zickzack-Tracking, Mikrokorrekturen, Zielwechsel-Training, Zielpriorisierung, Vertikales Tracking, 180-Grad-Aim-Training, FPS Fokus Training, FPS-Reflextest. Motor aim-trainer owns `Aim Trainer` (1,563) + `aim trainer online` (22); remove `aim test` from motor keywords.
- TAKEN (reaction de): Reaktionstest, Reaktionszeit Test, Reaktionstraining, Reflexe trainieren, Bewegliche Ziele treffen, Peek-Training, Ecken checken trainieren, Zielverfolgung testen, Go/No-Go-Test. Reaction hub keywords also list `Klickgeschwindigkeit testen` (overlap with rapid-tapping, see collisions).
- Drill mechanics (client code): aim-trainer = click shrinking targets; drag-and-drop = drag objects into drop zones; precision-flick-shot = click targets, bullseye core scores double (accuracy); finger-sequencing = click numbered targets in order with mouse (NOT keyboard, NOT typing); keyboard-recognition = press the displayed key (letters/numbers/WASD/arrows), ignore fake prompts, 60 s; rapid-tapping = click (or key) as fast as possible, reports CPS, 45 s; steady-hand = guide cursor through narrowing corridor, wall touch resets (hot-wire game); tracing = keep cursor on a moving path/wave.

## Autocomplete (Google Suggest gl=de hl=de, PROXY not volume; `_work-de/ac.txt`, 10/10 calls)
- `cps test`: English modifiers dominate (mobile, right/left click, keyboard, spacebar, 1 sec, minecraft, butterfly, jitter); German: `cps test deutsch`, `cps test tastatur`, `cps test maus`, `cps test leertaste`, `cps test rechtsklick`, `cps test handy`. Medical noise (CPS = Kombinierter positiver Score, PD-L1). Drill is click/tap only (keydown = Escape), so spacebar/keyboard variants are NOT honest.
- `klicktest`: maus, 10/5/1 sekunde(n), pro sekunde, leertaste, tastatur, rechte maustaste, geschwindigkeit, cps, handy, 30 sekunden.
- `klickgeschwindigkeit`: test, messen, maus (but also "maus einstellen windows 11" = OS-setting intent).
- `tastatur test`: overwhelmingly PRODUCT-REVIEW intent (testsieger, chip, gamestar, kabellos, ergonomisch) plus hardware-checker intent (tastatur tester online, tasten test online, ghosting test, input delay test). Only `tastatur reaktionszeit test`, `tastatur reaction test` match keyboard-recognition. Typing intent present (`tastatur test schreiben`, `tippgeschwindigkeit test`, `wpm test`) but drill does not measure typing: not honest.
- `maus test`: product reviews + hardware checks (maus tester online, doppelklick test, polling test, dpi) + `maus aim test`, `maus genauigkeit test`, `maus cps test`, `maus klick test online`. Also hearing-test noise (MAUS = auditory test for kids).
- `ruhige hand`: `ruhige hand trainieren`, `ruhige hand spiel`, `ruhige hand beim schießen`, `ruhige hand trainieren schießen`; heavy riding/tattoo/surgeon noise and Black Ops perk "Ruhige Hand Pro".
- `heißer draht`: dominated by styrofoam-cutting tool, Cold War hotline, TV show. Game intent = `heißer draht spiel` (+ xxl, selber bauen, kaufen, mieten = physical toy), `heißer draht online`, `heißer draht geschicklichkeitsspiel`.
- `drag and drop`: almost entirely software/dev/OS-help intent (excel, outlook, react, funktioniert nicht). Only `drag and drop test`, `drag and drop spiel`, `drag and drop online` are drill-adjacent.
- `zahlen der reihe nach`: math/sorting/dot-to-dot (verbinden, ordnen). No click-game intent: finger-sequencing has no native phrase.
- `linie nachfahren`: kids' worksheets (nachspuren, nachzeichnen, kinder) + robot line-following. Off-intent for a mouse tracing drill.

## Bing volume (de-DE, exact/broad monthly; `_work-de/kw.jsonl`, 40/40 ok, 2026-11-09)
- `cps test` 6,906 / 7,213 (largest motor term in DE by far; 5,644 on 2026-10-08)
- `tastatur test` 1,038 / 1,120; `keyboard tester` 735 / 777; `keyboard test` 304 / 366; `tastatur tester` 113; `tastatur test online` 37 (all hardware-checker / product-review intent)
- `klicktest` 198; `maus tester` 161; `maus test` 125; `feinmotorik übungen` 33; `wasd training` 0 / 6
- Reused: `aim trainer` 1,563 / 2,428 (fps-2026-11 run).
- 0: every other German-native drill phrase (kill list). Same pattern as FPS: DE demand = loanword tool names (`cps test`, `keyboard tester`) + `tastatur test`; descriptive German mouse-skill phrases are all 0.

## SERP (Bing cc=de; `_work-de/serp_summary.txt`)
- `cps test`: cpstest.org, cps-test.click, clickspeedtest.com, arealme.com (German "Klicks Pro Sekunde Test"), cpstester.com, cpstest.net, clickspeedtest.net, clickspeedtester.com, cookie.riimu.net; 3 answer blocks. Competition HIGH (9 exact-match tool domains); only arealme has German copy, so German-language copy is the only edge.
- `tastatur test`: probe error (navigation) = UNKNOWN. AC shows review intent (testsieger, chip, gamestar).
- `feinmotorik übungen`: meineschulkinder.de, ergotherapie-trauernicht.de, erzieherin-ausbildung.de, grundschule-aktuell.de = kids/OT intent. Off-intent for the hub.

## Page -> primary map (one primary per page; paths under `/de/drills/`)

| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC, AC) | competition note | action |
|---|---|---|---|---|---|---|
| motor (hub) | Maus-Präzisionstest & Aim-Training | Maus-Präzisionstest | Hand-Auge-Koordination, Feinmotorik mit der Maus; CPS-Test + Aim Trainer only as link anchors | mauspräzision / maus genauigkeit test / hand auge koordination test 0; GSC 27 impr pos 7.0, 1 click | n/a | no-demand descriptive; drop `Aim-Training` from title (= fps hub primary `Aim Training`); trim keywords `Aim-Training`, `Aim Trainer Browser`, `CPS-Test`, `Klickgeschwindigkeit testen` (child pages own them) |
| hand-eye-coordination/aim-trainer | Aim Trainer online \| Mauspräzision testen | Aim Trainer | aim trainer online (22), Mauspräzision testen | 1,563/2,428; GSC 13 impr pos 7.1, 1 click | HIGH (aimtrainer.herokuapp, tfue.io, humanbenchmark; fps-2026-11 probe) | keep; trim keywords `valorant aim training` (fps target-acquisition), `cs2 aim trainer` (fps angle-hold), `reaktionstest maus` (reaction light-reaction), `micro-flick training` (fps micro-correction) |
| hand-eye-coordination/drag-and-drop | Maus-Ziehtest \| Drag-and-Drop-Präzision | Maus-Ziehtest | Drag-and-Drop-Test, Ziehen und Ablegen üben | drag and drop test 0, drag and drop spiel 0; AC = software/dev intent | n/a | keep (no-demand descriptive) |
| hand-eye-coordination/precision-flick-shot | Flick Aim Trainer \| Mausgenauigkeit testen | Mausgenauigkeit testen | Zielgenauigkeit, Treffer ins Zentrum | maus genauigkeit test 0, zielgenauigkeit test 0, flick aim trainer 0 (fps run); GSC 1 impr pos 57 | n/a | retarget: drop `Flick Aim Trainer` lead (head-term overlap with motor aim-trainer + fps flick-shot), e.g. `Mausgenauigkeit testen: Präzisions-Flicks ins Zentrum`; trim `Aim Trainer kostenlos`, `FPS Aim Training`, `CS2 Aim Training`, `Valorant Aim Training`, `Flick Shot Training`, `Micro Flick Trainer` |
| movement-speed/finger-sequencing | Aim Trainer Zielwechsel \| Klicktest online | Ziele in Reihenfolge klicken | nummerierte Ziele, Klickreihenfolge | all 0; AC `zahlen der reihe nach` = math/dot-to-dot intent; GSC 4 impr pos 12.5 | n/a | retarget (3 collisions): `Aim Trainer` (motor aim-trainer), `Zielwechsel` (fps target-switching `Zielwechsel-Training`), `Klicktest` (198, -> rapid-tapping). e.g. `Ziele in Reihenfolge klicken: Nummern-Klickfolge` |
| movement-speed/keyboard-recognition | Tastatur Reaktionszeit \| Keybind Test | Tastatur-Reaktionszeit | Keybind Test, WASD-Training (broad 6), Tasten erkennen | tastatur reaktionszeit test 0, tastatur reaktionstest 0, tastatur latenz test 0; AC `tastatur reaktionszeit test` exists | n/a | keep (no-demand descriptive). Do NOT target `tastatur test` (1,038) / `keyboard tester` (735): drill prompts single keys, it is not a key checker. Trim `Tastatur Latenztest` (implies hardware latency measurement) and `Tastatur Klickgeschwindigkeit` |
| movement-speed/rapid-tapping | CPS-Test \| Klickgeschwindigkeit messen | CPS Test | Klicktest (198), Klicks pro Sekunde (0 now; 21 on 10-08), Klickgeschwindigkeit messen | 6,906/7,213; GSC 0; AC cps test maus/deutsch/handy | HIGH (9 exact-match tool domains, 3 answer blocks) | keep; also spell `CPS Test` (no hyphen) in h1/description; add `Klicktest`. Honest: 45 s endurance clicking, reports CPS. No spacebar/keyboard CPS (drill ignores keys) |
| precision-control/steady-hand | Ruhige Hand trainieren \| Heißer Draht online | Ruhige Hand trainieren | Heißer Draht Spiel, Feinmotorik | ruhige hand trainieren/test/spiel 0, heißer draht spiel/online 0; AC exists (toy/build intent dominates) | n/a | keep (no-demand descriptive); trim keyword `Maus-Präzisionstest` (hub primary) |
| precision-control/tracing | Maus-Tracking-Test \| Pfad folgen | Maus-Tracking-Test | Pfad folgen, Linie mit der Maus folgen | maus tracking test 0, linie nachfahren 0 (AC = kids worksheets) | n/a | keep (no-demand descriptive); trim keyword `FPS Tracking Aim` (fps strafe-tracking) |

## Collisions resolved
1. `Aim Trainer` on finger-sequencing and precision-flick-shot titles -> single owner motor aim-trainer. Both drop it.
2. `Zielwechsel` on finger-sequencing vs fps target-switching-swarm `Zielwechsel-Training` -> finger-sequencing moves to `Ziele in Reihenfolge klicken` (mechanic = ordered numbered nodes).
3. `Klicktest` (198) on finger-sequencing -> rapid-tapping.
4. Motor hub `Aim-Training` vs fps hub `Aim Training` -> hub drops it.
5. Motor aim-trainer / precision-flick-shot keywords `Valorant Aim Training`, `CS2 Aim Training/Trainer` -> trimmed (fps owns). `aim test` is not in DE motor keywords: OK.
6. OUT OF SCOPE, flag: `/de/drills/physical/fitness/speed-drill` title `Klickgeschwindigkeit Test – Klick-Speed`, keywords `Klicks pro Sekunde Test`, `Klick Test Online`; drill = click moving shrinking targets (SpeedDrillClient RULES_ITEMS), NOT a CPS counter -> dishonest + cannibalises rapid-tapping. Needs retarget.
7. OUT OF SCOPE: reaction hub (`lib/i18n/reactionSpeedHubNative.js` de) keyword `Klickgeschwindigkeit testen` -> trim.

## Kill list (Bing de-DE exact 0, status ok)
klick test, cps test deutsch, klickgeschwindigkeit, klickgeschwindigkeit test, klicks pro sekunde, mausklick test, tasten test, tastatur reaktionszeit test, tastatur reaktionstest, tastatur latenz test, wasd training (broad 6), maus genauigkeit test, mausgenauigkeit, mauspräzision, maus aim test, maus übungen, drag and drop test, drag and drop spiel, ruhige hand trainieren, ruhige hand test, ruhige hand spiel, heißer draht spiel, heißer draht online, geschicklichkeitsspiel, linie nachfahren, maus tracking test, hand auge koordination test, hand auge koordination training, feinmotorik test, zielgenauigkeit test.
Measured but off-intent (skip): tastatur test 1,038, keyboard tester 735, keyboard test 304, maus tester 161, maus test 125, tastatur tester 113, tastatur test online 37, feinmotorik übungen 33.

## Decisions needed
- Keyboard-tester opportunity: `tastatur test` + `keyboard tester` + `keyboard test` + `tastatur tester` = ~2,190/mo exact in DE. Only reachable with a real key-checker page (press any key, see it register, rollover/ghosting). keyboard-recognition must not claim it. Build a separate tool? (product decision; ties to the 13.7k US keyboard-tester lead).
- Confirm physical speed-drill de retarget off CPS terms (collision 6).

## Unknown / not measured
- `tastatur test` SERP (probe error). SERPs for `klicktest`, `keyboard tester` not probed (cap 3).
- Not measured (cap 40): butterfly/jitter click, `cps test maus`, `klicktest 10 sekunden`, `schulte tabelle`.
- Trend not run.
