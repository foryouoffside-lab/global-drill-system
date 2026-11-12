# de (Germany, de-DE, cc de) - COGNITIVE + MEMORY page -> primary keyword map (2026-11-12)

Status: DONE (AC 9/10 calls; Bing 1 run, 40 phrases, canary `reflex test` = 79 -> zeros are real Bing zeros).

## Inputs
- AC (_work-de/ac.txt, 9 calls): gedächtnistest, konzentrationstest, gehirntraining, schulte tabelle, stroop test, kurzzeitgedächtnis test, zahlen merken, aufmerksamkeitstest (cut off, 0 lines), gedächtnisspiele.
- GSC 90d page+query filtered on /de/drills/{cognitive,memory}: 0 rows (anonymised); query-level from motor-2026-11/gsc-queries-90d.csv (site-wide, page not attributed):
  gedächtnis test 8i p19.4; gehirntraining kostenlos 12i p3.4; gedächtnistest online kostenlos 3i p4; gedächtnistraining kostenlos ohne anmeldung 3i p2.7; gedächtnistraining online 1i p1; kurzzeitgedächtnis test 3i p23; arbeitsgedächtnis trainieren 1i p9; übungen kurzzeitgedächtnis 1i p10; sdmt test online 2i p5.
- GSC 90d page level (motor-2026-11/gsc-pages-90d.csv): de/memory 48i/1c p13.9; de/cognitive/.../concentration-stamina 9i/3c p6.7; .../reaction-time 14i/1c p18; memory/.../color-sequence 1i p7.
- Prior Bing (demand-2026-10, lang=de) all nodata = UNKNOWN; visual-2026-11 (de-DE): aufmerksamkeitstest 0, aufmerksamkeitstest online 0, visuelles gedächtnis test 0, räumliches gedächtnis test 0.
- Taken (registry + visual de.md): Reaktionstest, Reaktionszeit Test, Reaktionstraining, Reaktionsspiel online, Reflexe trainieren, FPS Fokus Training, Muster merken Spiel (physical complex-pattern), Go/No-Go-Test, Visuelle Suche, Zeitgefühl-Test.

## Headline
Bing de-DE: only 6 cognitive/memory phrases carry demand: `gehirnjogging` 508/3,043, `gedächtnistraining` 494/3,085, `konzentrationsübungen` 221/470, `stroop test` 101/124, `gehirntraining` 81/233, `konzentrationstest` 39. Every drill-specific memory term = 0 (gedächtnistest!, kurzzeitgedächtnis test, arbeitsgedächtnis, n back, zahlenspanne, zahlen merken, senso/simon spiel, wörter merken, corsi 2). Demand sits on the HUBS + Stroop + Konzentration pages; the Sept "near zero" verdict holds for drill-level memory terms only.
Competition: serp_probe broken -> UNKNOWN everywhere except where GSC pos <= 10 (low).

## Map
| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition | action |
|---|---|---|---|---|---|---|
| cognitive (hub) | Gehirntraining & Konzentration online | Gehirnjogging | Gehirntraining (81/233), Konzentrationsspiele (14) | gehirnjogging 508/3,043; gehirnjogging online 0; gehirntraining 81/233; gehirntraining kostenlos 0 (GSC 12i p3.4); AC `gehirntraining` 314 sugg., many senior/demenz/app intents | gehirntraining: low (GSC p3.4); gehirnjogging: UNKNOWN (Kawashima/apps/senior portals likely) | retarget: lead `Gehirnjogging online`, keep `Gehirntraining` second. No demenz/IQ claims |
| attention/concentration-stamina | Konzentrationstest \| Daueraufmerksamkeit | Konzentrationstest | Daueraufmerksamkeit, Konzentration testen | konzentrationstest 39/39; +online 0, +kostenlos 0; page GSC 9i/3c p6.7; AC = ADHS/d2/Einstellungstest intent | low (GSC p6.7) | keep. Never claim d2/ADHS test |
| attention/divided-attention | Test der geteilten Aufmerksamkeit | Test der geteilten Aufmerksamkeit | Dual-Task-Test | geteilte aufmerksamkeit test 0 | UNKNOWN | no-demand descriptive, keep |
| attention/multi-tasking | Multitasking-Test \| Dual-Stream-Tracking | Multitasking-Test | zwei Symbolströme | multitasking test 0 | UNKNOWN | no-demand descriptive, keep |
| focus/concentration-grid | Schulte-Tabelle online \| Konzentrationsgitter | Konzentrationsübungen | Schulte-Tabelle (0; AC 26 sugg.), Konzentrationstraining (0/166) | konzentrationsübungen 221/470; schulte tabelle 0; konzentrationstraining 0/166 | UNKNOWN (likely printable/kids worksheets) | retarget: e.g. `Schulte-Tabelle: Konzentrationsübung online`; name stays Schulte (honest), plural only in H2/copy |
| focus/distraction-fighter | Stroop-Test \| Selektive Aufmerksamkeit | Stroop-Test | Stroop Test online (6), Farb-Wort-Test, selektive Aufmerksamkeit | stroop test 101/124; stroop test online 6; AC 347 sugg. (pdf/vorlage/deutsch/online kostenlos) | UNKNOWN (Wikipedia, psych portals) | keep; add `online kostenlos` in title tail |
| processing-speed/reaction-time | Reaktionszeit-Test mit Regelwechsel | Wahlreaktionstest | Regelwechsel, Entscheidungstempo | not measured (cap); GSC page 14i/1c p18 | n/a | retarget (COLLISION: `Reaktionszeit Test` = reaction light-reaction secondary); no-demand descriptive |
| processing-speed/rsvp-reader | Schnelllesetest \| RSVP-Lesetraining | Schnelllesetest | RSVP, Lesegeschwindigkeit | schnelllesen 0, schnelllesen test 0, lesegeschwindigkeit test 0 | UNKNOWN | no-demand descriptive, keep |
| processing-speed/symbol-matching | Zahlen-Symbol-Test \| SDMT | Zahlen-Symbol-Test | SDMT (practice, not clinical) | zahlen symbol test 0; GSC query `sdmt test online` 2i p5 (locale unattributed) | low for SDMT (p5) | keep |
| memory (hub) | Gedächtnistest & Gedächtnistraining kostenlos | Gedächtnistraining | Gedächtnisübungen (0/126), Gedächtnistest (0 Bing; GSC 8i p19) | gedächtnistraining 494/3,085; gedächtnistraining online 0; GSC: gedächtnistraining kostenlos ohne anmeldung 3i p2.7, gedächtnistraining online 1i p1, gedächtnistest online kostenlos 3i p4; page 48i p13.9; AC `gedächtnisspiele`/`gedächtnistest` = senioren/demenz/ausdrucken | low-ish (GSC long-tail p1-4) | retarget: lead `Gedächtnistraining online kostenlos`, `Gedächtnistest` second. No demenz claims |
| short-term-memory/color-sequence | Senso Spiel online \| Farbsequenz merken | Senso Spiel online | Farbfolge merken, Simon | senso spiel 0, simon spiel 0; GSC page 1i p7 | low (p7, tiny) | keep (no-demand) |
| short-term-memory/digit-span | Zahlenspanne Test online \| Zahlen merken | Zahlenspanne Test | Zahlen merken (0; AC 73 sugg. = mnemonics) | zahlenspanne test 0, zahlen merken 0, zahlen merken test 0 | UNKNOWN | no-demand descriptive, keep |
| short-term-memory/word-recall | Wortgedächtnis Test online \| Wörter merken | Wortgedächtnis Test | Wörter merken | wortgedächtnis test 0, wörter merken test 0; AC `gedächtnistest 10 wörter`, `wortliste` exist (clinical-flavoured) | UNKNOWN | no-demand descriptive, keep |
| spatial-memory/grid-memorization | Visueller Gedächtnistest online | Visueller Gedächtnistest | Muster in Matrix merken | visuelles gedächtnis test 0 (visual-2026-11) | UNKNOWN | keep; avoid `Muster merken Spiel` (physical complex-pattern) |
| spatial-memory/object-location | Räumlicher Gedächtnistest online | Räumlicher Gedächtnistest | Objektposition merken | räumliches gedächtnis test 0 (visual-2026-11) | UNKNOWN | no-demand descriptive, keep |
| spatial-memory/path-tracing | Corsi-Block-Test online | Corsi-Block-Test | räumliche Blockspanne | corsi block test 2/2 | UNKNOWN | keep |
| working-memory/n-back | N-Back Test online \| Arbeitsgedächtnis | N-Back Test | Arbeitsgedächtnis trainieren (0; GSC 1i p9) | n back test 0, arbeitsgedächtnis test 0 | low (p9, 1 impr) | keep |

## Collisions resolved
- `Reaktionszeit Test` (reaction light-reaction) vs cognitive reaction-time -> cognitive takes `Wahlreaktionstest`.
- `Gehirntraining` vs `Gedächtnistraining`: different hubs, different primaries (cognitive = Gehirnjogging, memory = Gedächtnistraining); `Gedächtnistraining` must not appear as lead on the cognitive hub.
- `Konzentrationstest` (concentration-stamina) vs `Konzentrationsübungen` (concentration-grid): distinct; hub uses neither as primary.
- `Muster merken Spiel` (physical) not reused by grid-memorization.

## Kill list (no primaries on these)
gedächtnistest / +online / +online kostenlos (0 on Bing; keep only as hub secondary for the Google long-tail), gedächtnisspiele (+online kostenlos) 0, kurzzeitgedächtnis test 0, arbeitsgedächtnis test/trainieren 0, n back test 0, zahlenspanne/zahlen merken 0, senso/simon spiel 0, schnelllesen* 0, multitasking test 0, geteilte aufmerksamkeit test 0, schulte tabelle 0, konzentrationstest online/kostenlos 0, gehirnjogging online / gehirntraining kostenlos 0. Clinical intents (demenz, alzheimer, ADHS, d2, MoCA, DemTect, Neurologe) never targeted.
