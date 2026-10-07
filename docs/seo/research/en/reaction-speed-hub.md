# en / reaction-speed hub (/drills/reaction-speed) - research log

Date: 2026-10-08 - agent "hubs". Builds on docs/seo/research/reaction-speed-hub-2026-09-20.md. Tools: Bing API ok, Suggest ok, WebSearch ok; Trends not captured.

## Queries (US, Bing exact-match; not Google volume)
| phrase | exact/mo | note |
|---|---|---|
| reaction time test | 12,679 | measured (Bing) |
| reaction time (broad 16,477) | 1,027 | measured (Bing) |
| reaction test | 1,621 | measured (Bing) |
| reaction speed test | 784 | measured (Bing) |
| average reaction time | 264 | measured (Bing) |
| reflex test | 250 | measured (Bing) |
| reaction speed | 73 | measured (Bing) |
| human benchmark reaction time | 59 | measured (Bing) |
| reflex game / reaction time games | 48 / 26 | measured (Bing) |
| reaction time test online | 12 | measured (Bing) |
| reaction speed trainer/training/game, visual reaction time | 0 | measured 0 (Bing) |

Suggest (proxy): "reaction speed" -> test, trainer, training, game, average, by age, benchmark.

## Intent
Tool intent for "reaction time test" with a strong "what is average" informational layer. The hub exposes the test, so the existing title `Reaction Time Tests & Reflex Training` already matches the dominant phrase.

## SERP / PAA (proxy, WebSearch 2026-10-08)
Results: peerlist, codeitbro, bushe.co, utils tools, trtc.io explainer on average reaction time, University of Washington (faculty.washington.edu/chudler) test. AI/overview style answer: 200-250 ms typical, under 200 excellent, device/display latency adds delay, usually 5 trials averaged. PAA patterns: what is a good/average reaction time; why is my reaction time slow online; reaction time by age.

## Entities
Reaction time, mental chronometry, reflex, saccade.

## Trend note
2026-10-08: Trends not captured; no trend claim.

## B3 (demand / ease / intent fit)
- reaction time test: 5 / 1 / 5 (head term; carried by the drill page, hub supports it)
- reaction speed test: 4 / 3 / 5
- average reaction time: 3 / 3 / 4
- reflex test: 3 / 2 / 3

## Decision
Title, H1, description unchanged (already match the measured head phrases; 10 hedged FAQs). One edit: FAQ "What is a normal visual reaction time?" gave no figure although "average reaction time" is a measured question; now states the commonly reported 200-250 ms range, sourced to Kosinski (2008) and Woods et al. (2015), both already in lib/drillSources.js, and hedges for browser latency. Edit confined to the `en` FAQ in lib/i18n/reactionSpeedHubNative.js.
