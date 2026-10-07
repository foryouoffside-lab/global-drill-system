# en / reaction-time-test (/drills/reaction-speed/reaction-time-test) - research log

Date: 2026-10-08 - agent "hubs". Builds on docs/seo/research/reaction-time-test-2026-09-20.md. Tools: Bing ok, Suggest ok, WebSearch ok; Trends not captured.

## Queries (US, Bing exact; not Google volume)
reaction time test 12,679 - reaction test 1,621 - reaction speed test 784 - average reaction time 264 - reflex test 250 - human benchmark reaction time 59 - reaction time test online 12 (all measured, Bing).

## SERP / AI-answer pattern (proxy, WebSearch 2026-10-08)
Results are simple stimulus-and-click tools (peerlist, codeitbro, bushe.co, utils, UW Chudler) and explainers (trtc.io). AI-style answer: 200-250 ms typical, under 200 excellent, device/display latency adds delay, ~5 trials averaged. Searchers expect a red-to-green style test.

## STRUCTURAL FINDING (blocked for owner)
ReactionTimeTestClient.tsx is an interval-estimation drill (state TARGET/TIMER: a target time of 1-8 s is shown, the player clicks when it elapses, score = absolute timing error). It does not measure stimulus-response reaction time, yet title, description, schema and FAQ claimed "measure your visual reflex speed in milliseconds". The real stimulus test is /drills/visual/reaction-speed/light-reaction. Matching the 12.7k-volume "reaction time test" intent needs a drill/product decision (swap the drill or page role), which is gameplay and out of scope (D4).

## Copy fixes made (honest, within remit)
- Title `Reaction Time Test: Millisecond Timing Drill | SkillDrills` (58), description states what the drill does.
- FAQ rewritten (14): first answer says it is not a classic reaction test and links the concept to Light Reaction Test; removed unsupported claims (caffeine 10-20 ms, 2-6 ms/decade, 8-10 ms auditory nerve timings, F1/boxer training, "generous touch hitpads"). Schema is generated from the same array as the visible FAQ.
- Esports-rank tier table (Radiant/Immortal/Diamond equivalence, invented) replaced with literature-based reference ranges; HealthApplication -> GameApplication; Light Reaction Test added to related links.
- Remaining: H1 element includes the subtitle text (Wrapper/Client markup, D2), and the drill itself.

## B3 (demand / ease / intent fit)
reaction time test: 5 / 1 / 2 for this drill as built (intent mismatch lowers fit); reaction speed test: 4 / 3 / 2.

## Trend note
2026-10-08: Trends not captured.
