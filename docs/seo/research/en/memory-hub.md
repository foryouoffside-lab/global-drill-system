# en / memory hub (/drills/memory) - research log

Date: 2026-10-08 - agent "hubs". Builds on docs/seo/research/memory-hub-2026-09-20.md. Tools: Bing API ok, Suggest ok, WebSearch ok; Trends not captured.

## Queries (US, Bing exact-match; not Google volume)
| phrase | exact/mo | note |
|---|---|---|
| memory games | 1,433 | measured (Bing) |
| memory test | 815 | measured (Bing); Suggest skews to clinical (dementia, seniors, doctor) and RAM/Windows memory tests |
| memory game online | 162 | measured (Bing) |
| visual memory test | 98 | measured (Bing) |
| digit span test | 77 | measured (Bing) |
| short term memory test | 75 | measured (Bing) |
| memory training | 49 | measured (Bing) |
| working memory test | 46 | measured (Bing) |
| memory test online | 11 | measured (Bing) |
| spatial memory test, visual memory games | 0 | measured 0 (Bing): below threshold |

## Intent
"memory test" is mixed (clinical, RAM). "memory games" and "visual memory test" are tool/game intent and match the hub's drills (Digit Span, Word Recall, Color Sequence, N-Back, Grid Memorization).

## SERP / PAA (proxy, WebSearch 2026-10-08)
Top results for "memory test online free visual memory games": memoryos.com, mentalup.co, bushe.co visual memory test, artofmemory.com games, millisecond.com, Human Benchmark pattern. Tool pages lead with the test name. Gap: none lists distinct memory types (digit, word, colour, spatial) with a note that browser scores are not clinical.
PAA patterns: what is a good memory test score; how to improve short term memory; what is digit span; are online memory tests accurate.

## Entities
Digit span, working memory, short-term memory, N-back, chunking.

## Trend note
2026-10-08: Trends not captured; no trend claim.

## B3 (demand / ease / intent fit)
- memory games: 4 / 2 / 4
- memory test: 4 / 2 / 3
- visual memory test: 2 / 3 / 4

## Decision
Existing FAQ (10 bespoke answers, hedged) and schema kept; they already satisfy the standard. Title, H1 and description changed from "Memory Tests & Memory Training" to "Memory Tests & Memory Games" because "memory games" (1,433) and "memory training" (49) differ by about 30x in measured Bing demand. Edit is limited to the `en` entry of lib/i18n/memoryHubNative.js.
