# Reaction-speed: Germany (de, cc=DE), 2026-11-08

Data: `_work-defr/kw.jsonl` + `kw2.jsonl` (Bing exact/broad, measured), `serp.jsonl` (Bing SERP, cc=de), `ac.txt` (Google autocomplete gl=de), GSC 90d country=deu. Table: `de.csv`.

## Measured demand (Bing exact, monthly, DE)
- `reaction time test` 1,397 (English phrase, German market)
- `reaktionstest` 931 (broad 1,052)
- `reaction test` 387
- `reflex test` 78
- `augentraining` 18
- AT `reaktionstest` 7, CH 4: DACH outside DE is ~0.
- Everything else measured returned exact 0 (`ok`, not throttled): reaktionstest üben/spiel/klicken/f1/ampel/mpu/führerschein, reaktionszeit test online, reaktionszeittest, reaktionszeit trainieren, durchschnittliche reaktionszeit, reaktionsgeschwindigkeit trainieren/verbessern, reaktionsfähigkeit testen/trainieren, reflexe testen, reflextest online, dynamische sehschärfe, go no go test.
- Batch 2 (kw2, 2026-11-08): `reaktionszeit test` 592 (new #3 native term; same tool SERP as `reaktionstest` -> secondary on light-reaction, not a separate page). 0: reaktionstest online / kostenlos / online kostenlos, reaktionstest üben kostenlos (broad 97), reaktionsgeschwindigkeit test/messen, reaktionszeit messen, reaktionsspiel online, reaktionsspiele. Remaining 9 DE rows UNKNOWN: the shared Bing lock was serving ~1 row/2-3 min (other agents); the process keeps appending to `_work-defr/kw2.jsonl` and `python _work-defr/mkcsv.py` regenerates the CSVs.

## SERP check (Bing cc=de, 2026-11-07)
- `reaktionstest`: TOOL intent now. Top 7: cps-check.com, humanbenchmark.com, brain-fit.com, rechner.club, cpstest.io, rechne.net, plakos-akademie.de (MPU/Eignungstest prep). The 2026-09 driving-licence/MPU intent has shrunk to one result (plakos) and autocomplete still shows `reaktionstest mpu / für autofahrer / busfahrer ab 50 / führerschein`. Verdict: targetable; competition medium (small tool sites, not authority domains); answer the MPU question honestly in the FAQ.
- `reaktionszeit test`: humanbenchmark, cps-check, rechner.club, cpstest.io, rechne.net, onlineclicktest, colorvisiontest: same tool set.
- `reaction time test` (cc=de): arealme, cps-check, human-benchmark.org, cpstest.org, aimtrainer.io, justpark.
- `reflextest`: autocomplete is entirely medical (knie, baby, neugeborene, hammer): do not target with a drill.
- `reaktionsspiel`: autocomplete is physical/kids games (stäbe fangen, licht, kinder, senioren). Online intent weak.
- `reaktionsgeschwindigkeit`: autocomplete dominated by chemistry (formel, einheit, temperatur): ambiguous.
- Other probes timed out (Bing SERP selector timeout / network change): UNKNOWN.

## GSC (90d, deu)
- `reaktionstest online kostenlos üben`: 3 impr, pos 16 on `/de/drills/cognitive/processing-speed/reaction-time` (out of scope page; cannibalisation risk with light-reaction; coordinator decision).
- No reaction-speed URL in DE has impressions for reaction queries. Site-level DE impressions are brand + `gedächtnis test`.

## Keyword map (one primary per page)
| Page | Primary | Bing exact | Competition | Secondary |
|---|---|---|---|---|
| `/de/drills/visual/reaction-speed/light-reaction` | Reaktionstest | 931 | medium (tool sites) | Reaktionszeit Test (592), reaction time test (1,397), reaction test (387), Reaktionstest online/kostenlos, Reaktionszeit Test |
| `/de/drills/reaction-speed` (hub) | Reaktionstraining / Reaktionsübungen (category; no measured volume) | 0 | n/a | Reaktionszeit trainieren, Reflexe trainieren (both 0) |
| reflex-training-drill | Reflexe trainieren (unchanged) | 0 | n/a | reflex test (78, EN) |
| reaction-game | unchanged (Reaktionstest-Spiel) | 0 | n/a | |
| go/no-go | Go/No-Go-Test (unchanged) | 0 | n/a | |
| reaction-time-test, saccadic-gallery, visual-tracking-speed-test, fps-tracking-trainer, barrier-sequence-pursuit, market-doors-pursuit | unchanged | 0 measured | n/a | |

## Implemented
- light-reaction (DE): title `Reaktionstest online: Reaktionszeit in ms messen`, new meta description (mentions it is not an MPU/medical test), keywords trimmed to measured terms + `reaction time test`/`reaction test`, OG/Twitter, H1 copy, guide heading + plain first intro paragraph. FAQ cut from 10 to 5 local questions (Wie funktioniert…, Was ist eine gute Reaktionszeit (Kosinski 2008 ~190 ms), MPU/Führerschein (honest no), Kann man trainieren (Dye 2009, no transfer claim), Handy/Laptop latency). Removed unsourced claims (e-sports 160-190 ms "regularly", caffeine -10-20 ms, sleep +30-80 ms). Fixed false "Leertaste" claim in HowTo step 3 (client has no keydown handler).
- Hub (de block of `lib/i18n/reactionSpeedHubNative.js`): title/H1 `Reaktionstraining & Reflexübungen online` (was `Reaktionstest & Reflextraining`, which shared the light-reaction primary), description + intro now name the Reaktionstest with Lichtsignal so the hub sends the head term to the test page; keywords lead with category terms. FAQs unchanged (already factual, no fabricated stats).
- Not changed (0 measured demand, no honest native target): reaction-game, reflex-training-drill, reaction-time-test, saccadic-gallery, visual-tracking-speed-test, fps-tracking-trainer, barrier-sequence-pursuit, market-doors-pursuit, go/no-go.

## Kill list (current targets with measured 0)
Reaktionstest Spiel, Reaktionstest klicken, Reaktionstest F1, Reaktionszeit trainieren, Reaktionsgeschwindigkeit trainieren, Reflexe testen, Reflextest online, dynamische Sehschärfe / dynamisches Sehen, Go-No-Go-Test, durchschnittliche Reaktionszeit, Augentraining online. These stay in copy only as natural language, not as targets.

## Could not measure
SERPs for most long-tail (Bing selector timeouts); Google SERPs not viewed; trend not run (only 2 terms above 30/mo and both stable-unknown).

## Batch 2 completed (post hand-off)
- Only non-zero additions: `reaktionszeit test` 592, `reaction time` 182 (broad 1,772). All other DE rows 0. Map unchanged.
