# en / keyboard-recognition (keyboard speed test) - research log

Date: 2026-10-08 - Route: `/drills/motor/movement-speed/keyboard-recognition` - Market: US / en

## Tools
Suggest, Bing (us), GSC worked. Bing returned `no data` for several candidates late in the run (shared key, possible throttling), so those are unknown, not zero. No SERP capture; Trends not captured.

## Queries
- keyboard tester: Bing exact 17,184 / broad 18,090. keyboard test: 3,022 / 4,023 `measured (Bing us)`. These are the keyboard-tester intent (does each key register), served by the separate keyboard tester drill, not this page.
- keyboard speed test, keyboard reaction test, key reaction test, keybind trainer, keyboard reaction time test: `no data` `measured (Bing us)`.
- Suggest "keyboard test": tester, online, mac, game, speed, latency, typing `proxy (Google Suggest)`; `keyboard test speed` and `keyboard tester game` are the nearest to this drill.

## Intent
`keyboard speed test` is ambiguous (typing speed vs key reaction). The drill is key-reaction/choice-reaction. The new direct answer says explicitly it does not measure words per minute, to set expectations for that mismatched click.

## Competitors (proxy)
Not captured. Typing-test sites would own the generic phrase.

## PAA-style questions
Existing FAQ covers keybind training and FPS, Hick's law, trap prompts, average reaction, sequence mode, keyboard latency, practice time, MOBA, KPM and accuracy.

## Entities
Hick 1952, Donders 1868, Logan 1984 (inhibition), choice reaction time.

## Scores (B3, 1-5)
keyboard speed test: demand unverified (no data), ease 1 (typing sites), fit 2. keybind reaction trainer: demand unverified, ease 4, fit 5.

## Decision
Keep title `Keyboard Speed Test - Free Keybind Reaction Trainer`; no volume evidence for a replacement. Demand not verified. A rename to a reaction-time primary needs a Bing re-measure once the key is free. Page.js carries an old source comment citing `~3,600 searches/mo` for the primary: unverified, flagged for the owner (comment only, not rendered).

## Defects found and fixed
- H1 doubled "Speed Test" (`Keyboard Speed Test` + subtitle `Keybind Reaction Trainer & Speed Test`); subtitle passed from page.js via the existing `copy` prop: `Keybind reaction trainer for choice reaction time and key recall`.
- Intro had only a measurement paragraph; added a 49-word direct answer first and retitled the guide H2.

## Trend note
Not captured 2026-10-08.
