# en (+ko,ja,de,pt,es,fr) / FPS hub — research log

Date: 2026-10-07 · Routes: `/drills/fps` and `/<locale>/drills/fps`

## Defects found (rendered HTML)
- All six localized hubs rendered English H2s (`FPS aim drills`, `FPS Training Domains`, `Engine & Hardware Optimization`), English domain-card names/descriptions and an English `Drill/Drills` label.
- Claims not backed by the code, present in English and all six localized hubs: "completely bypasses operating system mouse acceleration" (`requestPointerLock()` is called without `unadjustedMovement`), and "Cross-Game Calibration … matches your exact Valorant, CS2 or Apex config" (the site has one global sensitivity multiplier, `lib/drillSensitivity.js`).

## Tools
- WebSearch (extended), 2026-10-07: `free aim trainer online browser`. Suggest/Trends/Bing unavailable (egress blocked).
- SERP (en-US, top 9): aiming.pro, fpstrain.us, kordu.tools, typingway.com (AimForge), aimtrainerx.com, onlineaimtrainer.com, clovecodestudio, aimprecision.app, aimtrainer.online. All are tool pages: title = "Aim Trainer" + modifier (free / online / browser / 3D / FPS games), mode lists (flick, tracking, target switching), "no download / no account".
- Gap: none of the sampled pages states measurement limits (display refresh, pointer settings) or links training domains to a written methodology. The hub keeps that angle.

## Keywords
- No keyword change. Existing title/H1 `FPS Aim Training & Free Aim Trainer` already matches the SERP vocabulary above (label: proxy, SERP wording; GSC 2026-08 data in `docs/SEO_PROGRESS.md` is the only volume evidence and shows head terms at positions 60+).

## Change
- `lib/i18n/hubCopy.js` holds the hub headings, domain cards and engine cards for en/ko/ja/de/pt/es/fr; `FPSHubClient.js` reads it.
- Pointer-lock card and FAQ answer now say what the API does (hides the cursor, delivers relative movement) and that OS pointer settings still apply; cross-game card replaced by the real single sensitivity slider.
- Decision for the owner: either request `{ unadjustedMovement: true }` in the drills (gameplay code, not touched) or keep the softened copy.
