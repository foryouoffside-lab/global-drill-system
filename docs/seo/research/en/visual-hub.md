# en / visual hub (/drills/visual) - research log

Date: 2026-10-08 - agent "hubs". Tools: Bing API ok, Suggest ok, WebSearch ok; Trends not captured.

## Queries (US, Bing exact-match; not Google volume)
| phrase | exact/mo | note |
|---|---|---|
| depth perception test | 196 | measured (Bing); Suggest is dominated by military/eye-doctor/MEPS intent (clinical), hub drill is a browser judgement task |
| peripheral vision test | 128 | measured (Bing); no matching drill on this hub |
| visual memory test | 98 | measured (Bing); belongs to memory hub |
| go no go test | 17 | measured (Bing) |
| 20-20-20 rule | 21 | measured (Bing) |
| visual perception test, visual tracking test, multiple object tracking, visual search test, visual reaction time, peripheral vision training/test online | 0 | measured 0 (Bing): below threshold, not proof of no demand |

## Intent
Head terms ("depth perception test", "peripheral vision test") skew clinical/screening. The hub can only honestly serve the browser-practice reading and must say it is not an eye exam.

## SERP / PAA (proxy)
Not separately captured beyond the hand-eye/visual-memory SERPs (2026-10-08): tools lead with the test name; listicles dominate generic "visual training". PAA patterns: is a depth perception test accurate online; what is go/no-go; how to improve visual reaction time; does visual training work.

## Entities
Depth perception, go/no-go task, multiple object tracking, visual search, smooth pursuit.

## Trend note
2026-10-08: Trends not captured; no trend claim.

## B3 (demand / ease / intent fit)
- depth perception test: 3 / 2 / 3 (served by the drill page)
- visual training drills (hub H1 family): 2 / 3 / 4

## Defects found and fixed
- 8 FAQ answers with unsupported claims ("V1 through V5 neuroplasticity", "measurable gains in contrast sensitivity", "20-40 ms phototransduction ... 40 ms slower than auditory", "right inferior frontal cortex", "expands the parietal visual attention buffer"). Replaced by 10 hedged answers naming the real drills; schema = visible text (single array).
- Title now equals the H1 phrase "Visual Reaction, Tracking & Perception Drills | SkillDrills" (59 chars); description adds "depth perception test" and "go/no-go".
- H1 and measure cards live in VisualDrillsClient.js (D2: untouched).
