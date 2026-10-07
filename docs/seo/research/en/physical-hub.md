# en / physical hub (/drills/physical) - research log

Date: 2026-10-08 - agent "hubs". Tools: Bing API ok, Suggest ok, WebSearch ok; Trends not captured.

## Queries (US, Bing exact-match; Bing is not Google volume)
| phrase | exact/mo | note |
|---|---|---|
| reflex test | 250 | measured (Bing); Suggest shows mostly medical (knee/hammer) intent plus "reflex test game/online" |
| agility ladder drills | 222 | measured (Bing); intent is real-world footwork, the hub's Agility Ladder is a screen task |
| hand eye coordination test | 47 | measured (Bing) |
| reflex game | 48 | measured (Bing) |
| reflexes test / reflex test game / reflex tester | 14 / 10 / 7 | measured (Bing) |
| reflex training | 13 | measured (Bing) |
| reflex test online, balance test online, hand eye coordination drills/exercises/training | 0 | measured 0 (Bing): below threshold, not proof of no demand |
| reaction time test | 12,679 | measured (Bing); served by /drills/reaction-speed hub and reaction-time-test page, not by this hub |

The pre-existing source comment claiming "reflex test online ~74,000/mo", "physical training drills ~480/mo" etc. had no source and contradicts Bing (0). It was deleted.

## Intent
"Reflex test" splits between clinical (hammer/knee) and game/tool intent. The hub matches tool intent and must say it is not physical exercise or medical testing.

## SERP / PAA (proxy)
- WebSearch "hand eye coordination test online free" (2026-10-08): iOS apps and listicles, few browser hubs. Gap: a hub that names each drill and states what a screen drill can and cannot train.
- PAA patterns: are reflex tests accurate; how to improve reflexes; are agility drills worth it; can online games improve reaction time.

## Entities
Reflex, agility, hand-eye coordination, reaction time.

## Trend note
2026-10-08: Trends not captured; no trend claim.

## B3 (demand / competition ease / intent fit)
- reflex test: 3 / 2 / 3
- agility drills (hub H1 term): 3 / 3 / 4
- hand eye coordination test: 2 / 3 / 3

## Defects found and fixed
- FAQ had 8 answers with fabricated or unsupported claims: "halt forward momentum in under 150 milliseconds", "cutting choice-reaction latency from 280ms to under 190ms", magnocellular pathway, "significantly reducing sports injury risks", "CNS fatigue past 30 minutes", corpus callosum claims. Replaced with 10 hedged answers naming the real drills; schema and visible FAQ share one array.
- Duplicate/dead first metadata block and fabricated volume comment removed (second block already won at render). CollectionPage name and description aligned to the H1/description.
- H1 and "What these browser drills measure" cards live in PhysicalDrillsClient.js (D2: not edited). Cards are already hedged.

## Decision
Keep title `Physical Reflex & Agility Drills | SkillDrills` (matches H1, includes reflex + agility, measured terms). Description rewritten to lead with the measured vocabulary.
