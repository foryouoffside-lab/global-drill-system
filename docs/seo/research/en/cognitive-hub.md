# en (+ko,ja,de,pt,es,fr) / cognitive hub — research log

Date: 2026-10-07 · Routes: `/drills/cognitive`, `/<locale>/drills/cognitive`

## Defects found
- Localized hubs rendered English `Cognitive drills`, `Cognitive Training Domains`, three domain cards, and `Engine & Hardware Optimization` with three English cards.
- Card claims contradicted the site's own methodology: "preventing frame-delayed reaction measurements" (llms.txt and /about say timings are bounded by display refresh) and "Zero server hops or telemetry payloads ensure total privacy" (Vercel Analytics is loaded when enabled in `app/layout.js`).

## Tools
- WebSearch (extended), 2026-10-07: `free cognitive training games online attention processing speed Stroop test`.
- SERP (en-US): stroopgame.org, freefocusgames.com, memorymatching.com, focusaur.com, crizbrain.com, cogniarena.com, a clinicaltrials.gov record. Tool pages lead with the specific test name (Stroop) rather than "cognitive training"; the hub title `Free Cognitive Training & Brain Games` remains a broad head term. Label: proxy (SERP wording).

## Change
- Cards rewritten to claims the code supports (high-resolution timer, difficulty rising with streak, scores stored locally in the browser). Copy served from `lib/i18n/hubCopy.js` for all seven locales.
- Follow-up: the same "zero telemetry" wording remains on `/drills/visual/depth-perception/distance-judgment`, `/drills/visual/reaction-speed/light-reaction`, `/drills/visual/reaction-speed/go/no-go` and their localized copies.
