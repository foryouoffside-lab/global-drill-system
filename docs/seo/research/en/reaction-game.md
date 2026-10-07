# en / reaction-speed/reaction-game - research log

Date: 2026-10-08 - Route: `/drills/reaction-speed/reaction-game`

## Tools
- Suggest (us/en): worked. Bing keyword API: worked early, then ThrottleUser on the shared key ("no data" = unknown, not zero). GSC: token present, not queried for this page. SERP: WebSearch standard (US text results only; no PAA/AI-answer view) where noted.

## Queries - measured (Bing Webmaster exact-match, us/en-US, 2026-10-08)
- reaction game: Bing returned no data (ThrottleUser); volume unknown

## Suggest signals - proxy (Google autocomplete, not volume)
reaction game: sticks, for kids, online, test, rental, for sports, for adults, lights, dropping sticks, machine.

## Intent
Physical reaction products and kids games dominate; 'reaction games online' is the browser-game cluster.

## Competitors / gaps
Product pages and kids sites. SERP not captured.

## Trend note
Google Trends not captured (no browser session); no trend claim made. 2026-10-08.

## Scores (B3: demand / competition ease / intent fit, 1-5)
reaction game online: demand 3 (proxy), ease 3, intent fit 4.

## Decision
Meta title now 'Reaction Game Online | SkillDrills' to match 'reaction games online' Suggest. Edit is limited to the en title line in lib/i18n/drills/reactionGame.js (shared with locales; other locale entries untouched). H1 remains 'Reaction Game'.
