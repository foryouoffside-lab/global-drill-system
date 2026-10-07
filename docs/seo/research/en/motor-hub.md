# en / motor hub (/drills/motor) - research log

Date: 2026-10-08 - agent "hubs" - tools: Bing API ok (key), Suggest ok, GSC token ok (not queried for this page), WebSearch ok, Trends not available (no browser run).

## Queries (US, Bing exact-match, measured via scripts/bing/bing.py; Bing is not Google volume)
| phrase | exact/mo | note |
|---|---|---|
| cps test | 26,538 | measured (Bing) - hub contains the CPS Test drill |
| aim trainer | 8,302 | measured (Bing) - hub contains Aim Trainer, Precision Flick Shot, Sequence Aim Trainer |
| click speed test | 3,484 | measured (Bing) |
| mouse accuracy test | 76 | measured (Bing) |
| jitter click / butterfly clicking | 82 / 75 | measured (Bing) |
| fitts law | 71 | measured (Bing) |
| hand eye coordination test | 47 | measured (Bing) |
| motor skills test, steady hand game, mouse tracing game, finger dexterity test, hand eye coordination drills/exercises/training | 0 | measured 0 (Bing); a 0 means below reporting threshold, not proven dead |

Suggest (proxy, popularity only): "motor skills test" resolves mostly to clinical, child-development and licensing intents (motor skills test for adults/children, motorcycle skills test); "hand eye coordination" resolves to kids, toys, sports drills.

## Intent
- "cps test" / "aim trainer" / "click speed test": tool intent, matches drills on this hub. "motor skills test": clinical/educational, not a match; the hub must not imply clinical assessment.

## SERP (WebSearch, US, 2026-10-08, proxy)
- "hand eye coordination test online free": results are iOS apps and listicles, few browser tools. Gap: a browser tool hub with plain method notes.
- Competitors for CPS/aim: single-purpose tool pages (title = tool name + "online/free"). Gap: none link CPS, aim, steady-hand and keyboard drills together with stated measurement limits.

## PAA / question patterns (proxy)
what is a good CPS score; what is jitter clicking; what is butterfly clicking; what is Fitts's law; how to improve mouse accuracy; how to test hand-eye coordination.

## Entities
Fitts's law (Wikipedia/Wikidata), clicks per second, hand-eye coordination, motor skill.

## Trend note
2026-10-08: Google Trends not captured (no browser run). No trend claim made.

## B3 scores (demand / competition ease / intent fit, 1-5)
- cps test: 5 / 1 / 5 (head term, strong incumbents; ranks via dedicated CPS drill page, hub only supports it)
- aim trainer: 5 / 1 / 4
- mouse accuracy test: 2 / 4 / 5
- hand eye coordination test: 2 / 3 / 4

## Defects found
- FAQ answers contained unsupported figures and mechanisms ("under 180 milliseconds", "2 to 4 weeks of consistent training", "cerebellum to M1 consolidation", "80% to 90% of the distance", CPS 10-22 ranges as fact). Replaced with hedged, sourceable statements. Schema equals visible text (same array).
- Spec cards: "surgical cursor guidance", "without finger cramping" removed.

## Decision
- Title leads with the two measured head terms the hub actually serves: "CPS Test, Aim Trainer & Mouse Precision Drills". H1 and description aligned. Demand for the hub as a head term is indirect; the title captures the long-tail of both drills' queries while the drill pages carry the primary ranking.
