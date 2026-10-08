# en / drills directory (/drills) - research log

Date: 2026-10-08 - agent "hubs". Builds on docs/seo/research/landing-directory-2026-09-20.md. Tools: Bing API ok, Suggest ok, WebSearch ok, GSC token ok (not re-queried; prior GSC 180d note in app/drills/page.js: "online drills" 29 impr pos 14.7, "drills online" 23 impr pos 10.6); Trends not captured.

## Queries (US, Bing exact-match; not Google volume)
| phrase | exact/mo | note |
|---|---|---|
| cps test | 26,538 | measured (Bing) |
| reaction time test | 12,679 | measured (Bing) |
| aim trainer | 8,302 | measured (Bing) |
| memory games | 1,433 | measured (Bing) |
| brain training games | 111 | measured (Bing) |
| online drills, free online drills, free online brain training | 0 | measured 0 (Bing); Suggest for "online drills" resolves to sports/maths drills ("online soccer drills", "online math drills"), i.e. different intent |

## Intent
"Drills" alone is ambiguous (sports, maths, military); the directory's winnable demand is the union of its head tools, not the word "drills". GSC shows small real impressions on "online drills", so the title keeps "Free Online Drills".

## SERP / PAA (proxy)
Hub-style competitors are rare; tool pages dominate each head term. The directory acts as a gateway. PAA patterns: what is the best free aim trainer; where can I test my reaction time; are online brain games worth it.

## Entities
Aim trainer, CPS test, reaction time, memory game, visual tracking.

## Trend note
2026-10-08: Trends not captured; no trend claim.

## B3 (demand / ease / intent fit)
- online drills: 1 / 4 / 2 (GSC-only evidence, ambiguous intent)
- cps test / reaction time test / aim trainer as description vocabulary: 5 / 1 / 4 (carried by drill pages; directory supplies internal links and snippet vocabulary)

## Decision
Title kept. Description now names the three measured head tools plus memory games (earlier version had only generic category words). FAQ grew from 3 to 7 bespoke answers (categories, first drill, device support grounded in DESKTOP_ONLY_CATEGORIES, non-diagnostic disclaimer). Schema is generated from the same array as the visible FAQ. Edit confined to the `en` block of lib/i18n/siteLandingSeoNative.js.
