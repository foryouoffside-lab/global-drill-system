# en / reaction-speed/visual-tracking-speed-test - research log

Date: 2026-10-08 - Route: `/drills/reaction-speed/visual-tracking-speed-test`

## Tools
- Suggest (us/en): worked. Bing keyword API: worked early, then ThrottleUser on the shared key ("no data" = unknown, not zero). GSC: token present, not queried for this page. SERP: WebSearch standard (US text results only; no PAA/AI-answer view) where noted.

## Queries - measured (Bing Webmaster exact-match, us/en-US, 2026-10-08)
- visual tracking test: Bing returned no data (ThrottleUser); volume unknown

## Suggest signals - proxy (Google autocomplete, not volume)
visual tracking test: occupational therapy, online, near me, eye tracking test, for concussion, for children.

## Intent
Clinical/therapy plus 'online' seekers.

## Competitors / gaps
Occupational therapy resources and eye-tracking test pages. SERP not captured.

## Trend note
Google Trends not captured (no browser session); no trend claim made. 2026-10-08.

## Scores (B3: demand / competition ease / intent fit, 1-5)
visual tracking test online: demand 3 (proxy), ease 3, intent fit 3.

## Decision
Meta title now 'Visual Tracking Test Online | SkillDrills' (matches the 'visual tracking test online' suggestion). Edit limited to the en title line in lib/i18n/drills/visualTrackingSpeedTestNative.js. H1 unchanged.
