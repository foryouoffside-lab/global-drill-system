# PAGE_QUEUE

Resume-safe queue for the `Run 2.md` SEO/AEO/GEO pass. Take the first `pending` row in table order (priority ascending).

Priority tiers: 0 = home, directory, 8 category hubs · 1 = English drills with measured or likely demand · 2 = remaining English drills · 3 = localized pages whose routes carry measured demand · 4 = remaining localized pages · 5 = utility/legal.

Status legend: `done` = passes scripts/seo_render_audit.mjs and the English-leak check, has a research log and a commit · `pending` = not yet worked in this pass (may already pass the mechanical audit) · `blocked` = needs an owner decision, see Blockers · `in-progress` = taken, not committed.

Status counts: done 33 · pending 365 · blocked 243

| URL | locale | type | priority | status | research-log | commit | notes |
|---|---|---|---|---|---|---|---|
| / | en | home | 0 | done | docs/seo/research/en/home.md | 36eedbe, d701f10, 141a5f5 | FAQ + FAQPage added; stale typing claim and overstated feature copy corrected |
| /drills | en | directory | 0 | pending | docs/seo/research/landing-directory-2026-09-20.md |  |  |
| /drills/cognitive | en | hub | 0 | done | docs/seo/research/en/cognitive-hub.md | 10e3a68, 36eedbe | hub sections and unsupported claims fixed |
| /drills/fps | en | hub | 0 | done | docs/seo/research/en/fps-hub.md | 10e3a68, 36eedbe | changed-since-09-20; hub sections and unsupported claims fixed |
| /drills/memory | en | hub | 0 | pending | docs/seo/research/memory-hub-2026-09-20.md |  |  |
| /drills/motor | en | hub | 0 | pending | docs/seo/research/motor-category-2026-09-20.md |  | changed-since-09-20; sub-ms |
| /drills/physical | en | hub | 0 | pending | docs/seo/research/physical-category-2026-09-20.md |  |  |
| /drills/reaction-speed | en | hub | 0 | pending | docs/seo/research/reaction-speed-hub-2026-09-20.md |  |  |
| /drills/visual | en | hub | 0 | pending | docs/seo/research/visual-category-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking | en | hub | 0 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68, 36eedbe | changed-since-09-20; hub sections and unsupported claims fixed |
| /drills/cognitive/processing-speed/reaction-time | en | drill | 1 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /drills/fps/180-degree-awareness | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/angle-hold-trainer | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/anti-strafe-jitter-duel | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/anti-zigzag-movement-trainer | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/flick-shot-training | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/flow-state | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/instant-response | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/micro-correction-precision | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/pro-smooth-pursuit | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/recoil-control | en | drill | 1 | pending |  | 83d22ad | changed-since-09-20; H1 duplicate word fixed |
| /drills/fps/strafe-tracking | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/target-acquisition | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/target-prioritization | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/target-switching-swarm | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/fps/vertical-air-track | en | drill | 1 | pending |  |  | changed-since-09-20 |
| /drills/memory/short-term-memory/color-sequence | en | drill | 1 | pending | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20 |
| /drills/memory/short-term-memory/digit-span | en | drill | 1 | pending | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20 |
| /drills/memory/short-term-memory/word-recall | en | drill | 1 | pending | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20 |
| /drills/memory/spatial-memory/grid-memorization | en | drill | 1 | pending | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20 |
| /drills/memory/spatial-memory/object-location | en | drill | 1 | pending | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20 |
| /drills/memory/spatial-memory/path-tracing | en | drill | 1 | pending | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20 |
| /drills/memory/working-memory/n-back | en | drill | 1 | pending | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20 |
| /drills/motor/hand-eye-coordination/aim-trainer | en | drill | 1 | pending | docs/seo/research/aim-trainer-2026-09-20.md | 83d22ad | changed-since-09-20; H1 repetition removed |
| /drills/motor/hand-eye-coordination/drag-and-drop | en | drill | 1 | pending | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20 |
| /drills/motor/hand-eye-coordination/precision-flick-shot | en | drill | 1 | pending | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20 |
| /drills/motor/movement-speed/finger-sequencing | en | drill | 1 | pending | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20 |
| /drills/motor/movement-speed/keyboard-recognition | en | drill | 1 | pending | docs/seo/research/keyboard-recognition-2026-09-20.md |  | changed-since-09-20 |
| /drills/motor/movement-speed/rapid-tapping | en | drill | 1 | pending | docs/seo/research/rapid-tapping-2026-09-20.md |  | changed-since-09-20 |
| /drills/motor/precision-control/steady-hand | en | drill | 1 | pending | docs/seo/research/steady-hand-2026-09-20.md |  | changed-since-09-20 |
| /drills/motor/precision-control/tracing | en | drill | 1 | pending | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20 |
| /drills/reaction-speed/reaction-time-test | en | drill | 1 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /drills/reaction-speed/reflex-training-drill | en | drill | 1 | pending | docs/seo/research/reflex-training-drill-2026-09-20.md |  | changed-since-09-20 |
| /drills/cognitive/attention/concentration-stamina | en | drill | 2 | pending |  |  | changed-since-09-20 |
| /drills/cognitive/attention/divided-attention | en | drill | 2 | pending |  |  | changed-since-09-20 |
| /drills/cognitive/attention/multi-tasking | en | drill | 2 | pending |  |  | changed-since-09-20 |
| /drills/cognitive/focus/concentration-grid | en | drill | 2 | pending |  |  | changed-since-09-20 |
| /drills/cognitive/focus/distraction-fighter | en | drill | 2 | pending |  |  | changed-since-09-20 |
| /drills/cognitive/processing-speed/rsvp-reader | en | drill | 2 | pending |  |  | changed-since-09-20 |
| /drills/cognitive/processing-speed/symbol-matching | en | drill | 2 | pending |  |  | changed-since-09-20 |
| /drills/physical/balance-training/stability-challenge | en | drill | 2 | pending | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/coordination/complex-pattern | en | drill | 2 | pending | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/coordination/cross-body-movement | en | drill | 2 | pending | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/coordination/dynamic-grid-evasion | en | drill | 2 | pending | docs/seo/research/dynamic-grid-evasion-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/fitness/agility-ladder | en | drill | 2 | pending | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/fitness/jump-sequence | en | drill | 2 | pending | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/fitness/speed-drill | en | drill | 2 | pending | docs/seo/research/speed-drill-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/reflex-training/drop-catch | en | drill | 2 | pending | docs/seo/research/drop-catch-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/reflex-training/peripheral-threat-sweeper | en | drill | 2 | pending | docs/seo/research/peripheral-threat-sweeper-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/reflex-training/quick-dodge | en | drill | 2 | pending | docs/seo/research/quick-dodge-2026-09-20.md |  | changed-since-09-20 |
| /drills/physical/reflex-training/reaction-chain | en | drill | 2 | pending | docs/seo/research/reaction-chain-2026-09-20.md |  | changed-since-09-20 |
| /drills/reaction-speed/barrier-sequence-pursuit | en | drill | 2 | pending | docs/seo/research/barrier-sequence-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/reaction-speed/fps-tracking-trainer | en | drill | 2 | pending | docs/seo/research/fps-tracking-trainer-2026-09-20.md |  | changed-since-09-20 |
| /drills/reaction-speed/market-doors-pursuit | en | drill | 2 | pending | docs/seo/research/market-doors-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/reaction-speed/reaction-game | en | drill | 2 | pending | docs/seo/research/reaction-game-2026-09-20.md |  | changed-since-09-20 |
| /drills/reaction-speed/saccadic-gallery | en | drill | 2 | pending | docs/seo/research/saccadic-gallery-2026-09-20.md |  | changed-since-09-20 |
| /drills/reaction-speed/visual-tracking-speed-test | en | drill | 2 | pending | docs/seo/research/visual-tracking-speed-test-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/constant-slow-pursuit | en | drill | 2 | pending | docs/seo/research/constant-slow-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/directional-chaos-pursuit | en | drill | 2 | pending | docs/seo/research/directional-chaos-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/dynamic-evasion-pursuit | en | drill | 2 | pending | docs/seo/research/dynamic-evasion-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/ghosting-suppress-pursuit | en | drill | 2 | pending | docs/seo/research/ghosting-suppress-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/infinity-pursuit | en | drill | 2 | pending | docs/seo/research/infinity-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/momentum-teleport-pursuit | en | drill | 2 | pending | docs/seo/research/momentum-teleport-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/peripheral-ping-pursuit | en | drill | 2 | pending | docs/seo/research/peripheral-ping-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/predictive-pursuit | en | drill | 2 | pending | docs/seo/research/predictive-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/sine-wave-pursuit | en | drill | 2 | pending | docs/seo/research/sine-wave-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/spatial-shift-pursuit | en | drill | 2 | pending | docs/seo/research/spatial-shift-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/split-screen-tracking | en | drill | 2 | pending | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/staircase-step | en | drill | 2 | pending | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/strobe-prediction-pursuit | en | drill | 2 | pending | docs/seo/research/strobe-prediction-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/triangular-pursuit | en | drill | 2 | pending | docs/seo/research/triangular-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual-tracking/zig-zag-path-pursuit | en | drill | 2 | pending | docs/seo/research/zig-zag-path-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual/depth-perception/distance-judgment | en | drill | 2 | pending | docs/seo/research/distance-judgment-visual-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual/reaction-speed/go/no-go | en | drill | 2 | pending |  |  | changed-since-09-20 |
| /drills/visual/reaction-speed/light-reaction | en | drill | 2 | pending | docs/seo/research/light-reaction-visual-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual/tracking-accuracy/moving-target | en | drill | 2 | pending | docs/seo/research/moving-target-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual/tracking-accuracy/multiple-targets | en | drill | 2 | pending | docs/seo/research/multiple-targets-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual/tracking-accuracy/pursuit-tracker | en | drill | 2 | pending | docs/seo/research/pursuit-tracker-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual/visual-recognition/entropic-grid | en | drill | 2 | pending | docs/seo/research/entropic-grid-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual/visual-recognition/rhythm-anomaly | en | drill | 2 | pending | docs/seo/research/rhythm-anomaly-2026-09-20.md |  | changed-since-09-20 |
| /drills/visual/visual-recognition/visual-search | en | drill | 2 | pending | docs/seo/research/visual-search-2026-09-20.md |  | changed-since-09-20 |
| /de | de | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /de/drills | de | directory | 3 | pending | docs/seo/research/landing-directory-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/fps | de | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /de/drills/motor/movement-speed/rapid-tapping | de | drill | 3 | pending | docs/seo/research/rapid-tapping-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/reaction-speed/reaction-time-test | de | drill | 3 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/reaction-speed/reflex-training-drill | de | drill | 3 | pending | docs/seo/research/reflex-training-drill-2026-09-20.md |  | changed-since-09-20 |
| /es | es | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /es/drills | es | directory | 3 | pending | docs/seo/research/landing-directory-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/fps | es | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /es/drills/motor/movement-speed/rapid-tapping | es | drill | 3 | pending | docs/seo/research/rapid-tapping-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/reaction-speed/reaction-time-test | es | drill | 3 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/reaction-speed/reflex-training-drill | es | drill | 3 | pending | docs/seo/research/reflex-training-drill-2026-09-20.md |  | changed-since-09-20 |
| /fr | fr | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /fr/drills | fr | directory | 3 | pending | docs/seo/research/landing-directory-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/fps | fr | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /fr/drills/motor/movement-speed/rapid-tapping | fr | drill | 3 | pending | docs/seo/research/rapid-tapping-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/reaction-speed/reaction-time-test | fr | drill | 3 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/reaction-speed/reflex-training-drill | fr | drill | 3 | pending | docs/seo/research/reflex-training-drill-2026-09-20.md |  | changed-since-09-20 |
| /ja | ja | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /ja/drills | ja | directory | 3 | pending | docs/seo/research/landing-directory-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/fps | ja | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /ja/drills/motor/movement-speed/rapid-tapping | ja | drill | 3 | pending | docs/seo/research/rapid-tapping-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/reaction-speed/reaction-time-test | ja | drill | 3 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/reaction-speed/reflex-training-drill | ja | drill | 3 | pending | docs/seo/research/reflex-training-drill-2026-09-20.md |  | changed-since-09-20 |
| /ko | ko | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /ko/drills | ko | directory | 3 | pending | docs/seo/research/landing-directory-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/fps | ko | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /ko/drills/motor/movement-speed/rapid-tapping | ko | drill | 3 | pending | docs/seo/research/rapid-tapping-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/reaction-speed/reaction-time-test | ko | drill | 3 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/reaction-speed/reflex-training-drill | ko | drill | 3 | pending | docs/seo/research/reflex-training-drill-2026-09-20.md |  | changed-since-09-20 |
| /pt | pt | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /pt/drills | pt | directory | 3 | pending | docs/seo/research/landing-directory-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/fps | pt | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /pt/drills/motor/movement-speed/rapid-tapping | pt | drill | 3 | pending | docs/seo/research/rapid-tapping-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/reaction-speed/reaction-time-test | pt | drill | 3 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/reaction-speed/reflex-training-drill | pt | drill | 3 | pending | docs/seo/research/reflex-training-drill-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/cognitive | de | hub | 4 | done | docs/seo/research/en/cognitive-hub.md | 10e3a68 | hub sections localized |
| /de/drills/cognitive/attention/concentration-stamina | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/cognitive/attention/divided-attention | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/cognitive/attention/multi-tasking | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/cognitive/focus/concentration-grid | de | drill | 4 | pending |  |  | changed-since-09-20 |
| /de/drills/cognitive/focus/distraction-fighter | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(14) — client About/FAQ copy is English, see D2 |
| /de/drills/cognitive/processing-speed/reaction-time | de | drill | 4 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/cognitive/processing-speed/rsvp-reader | de | drill | 4 | pending |  |  | changed-since-09-20 |
| /de/drills/cognitive/processing-speed/symbol-matching | de | drill | 4 | pending |  |  | changed-since-09-20 |
| /de/drills/fps/180-degree-awareness | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/angle-hold-trainer | de | drill | 4 | pending |  |  | changed-since-09-20 |
| /de/drills/fps/anti-strafe-jitter-duel | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/anti-zigzag-movement-trainer | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(5) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/flick-shot-training | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/flow-state | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/instant-response | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/micro-correction-precision | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/pro-smooth-pursuit | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/recoil-control | de | drill | 4 | pending |  |  | changed-since-09-20 |
| /de/drills/fps/strafe-tracking | de | drill | 4 | pending |  |  | changed-since-09-20 |
| /de/drills/fps/target-acquisition | de | drill | 4 | pending |  |  | changed-since-09-20 |
| /de/drills/fps/target-prioritization | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/target-switching-swarm | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/vertical-air-track | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/memory | de | hub | 4 | pending | docs/seo/research/memory-hub-2026-09-20.md |  |  |
| /de/drills/memory/short-term-memory/color-sequence | de | drill | 4 | blocked | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/short-term-memory/digit-span | de | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/short-term-memory/word-recall | de | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/spatial-memory/grid-memorization | de | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/spatial-memory/object-location | de | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/spatial-memory/path-tracing | de | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/working-memory/n-back | de | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/motor | de | hub | 4 | pending | docs/seo/research/motor-category-2026-09-20.md |  |  |
| /de/drills/motor/hand-eye-coordination/aim-trainer | de | drill | 4 | pending | docs/seo/research/aim-trainer-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/motor/hand-eye-coordination/drag-and-drop | de | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/motor/hand-eye-coordination/precision-flick-shot | de | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/motor/movement-speed/finger-sequencing | de | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/motor/movement-speed/keyboard-recognition | de | drill | 4 | pending | docs/seo/research/keyboard-recognition-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/motor/precision-control/steady-hand | de | drill | 4 | pending | docs/seo/research/steady-hand-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/motor/precision-control/tracing | de | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/physical | de | hub | 4 | pending | docs/seo/research/physical-category-2026-09-20.md |  |  |
| /de/drills/physical/balance-training/stability-challenge | de | drill | 4 | blocked | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/coordination/complex-pattern | de | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/coordination/cross-body-movement | de | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/coordination/dynamic-grid-evasion | de | drill | 4 | pending | docs/seo/research/dynamic-grid-evasion-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/physical/fitness/agility-ladder | de | drill | 4 | blocked | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/fitness/jump-sequence | de | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/fitness/speed-drill | de | drill | 4 | pending | docs/seo/research/speed-drill-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/physical/reflex-training/drop-catch | de | drill | 4 | pending | docs/seo/research/drop-catch-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/physical/reflex-training/peripheral-threat-sweeper | de | drill | 4 | pending | docs/seo/research/peripheral-threat-sweeper-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/physical/reflex-training/quick-dodge | de | drill | 4 | pending | docs/seo/research/quick-dodge-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/physical/reflex-training/reaction-chain | de | drill | 4 | pending | docs/seo/research/reaction-chain-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/reaction-speed | de | hub | 4 | pending | docs/seo/research/reaction-speed-hub-2026-09-20.md |  |  |
| /de/drills/reaction-speed/barrier-sequence-pursuit | de | drill | 4 | pending | docs/seo/research/barrier-sequence-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/reaction-speed/fps-tracking-trainer | de | drill | 4 | pending | docs/seo/research/fps-tracking-trainer-2026-09-20.md |  |  |
| /de/drills/reaction-speed/market-doors-pursuit | de | drill | 4 | pending | docs/seo/research/market-doors-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/reaction-speed/reaction-game | de | drill | 4 | pending | docs/seo/research/reaction-game-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/reaction-speed/saccadic-gallery | de | drill | 4 | pending | docs/seo/research/saccadic-gallery-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/reaction-speed/visual-tracking-speed-test | de | drill | 4 | pending | docs/seo/research/visual-tracking-speed-test-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual | de | hub | 4 | pending | docs/seo/research/visual-category-2026-09-20.md |  |  |
| /de/drills/visual-tracking | de | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /de/drills/visual-tracking/constant-slow-pursuit | de | drill | 4 | pending | docs/seo/research/constant-slow-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/directional-chaos-pursuit | de | drill | 4 | done | docs/seo/research/de/directional-chaos-pursuit.md | 3ba8e51 | changed-since-09-20; title de-duplicated |
| /de/drills/visual-tracking/dynamic-evasion-pursuit | de | drill | 4 | done | docs/seo/research/de/dynamic-evasion-pursuit.md | 3ba8e51 | changed-since-09-20; title de-duplicated |
| /de/drills/visual-tracking/ghosting-suppress-pursuit | de | drill | 4 | pending | docs/seo/research/ghosting-suppress-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/infinity-pursuit | de | drill | 4 | pending | docs/seo/research/infinity-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/momentum-teleport-pursuit | de | drill | 4 | pending | docs/seo/research/momentum-teleport-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/peripheral-ping-pursuit | de | drill | 4 | pending | docs/seo/research/peripheral-ping-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/predictive-pursuit | de | drill | 4 | pending | docs/seo/research/predictive-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/sine-wave-pursuit | de | drill | 4 | pending | docs/seo/research/sine-wave-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/spatial-shift-pursuit | de | drill | 4 | pending | docs/seo/research/spatial-shift-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/split-screen-tracking | de | drill | 4 | pending | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/staircase-step | de | drill | 4 | pending | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/strobe-prediction-pursuit | de | drill | 4 | pending | docs/seo/research/strobe-prediction-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/triangular-pursuit | de | drill | 4 | pending | docs/seo/research/triangular-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual-tracking/zig-zag-path-pursuit | de | drill | 4 | pending | docs/seo/research/zig-zag-path-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual/depth-perception/distance-judgment | de | drill | 4 | pending | docs/seo/research/distance-judgment-visual-2026-09-20.md |  | changed-since-09-20 |
| /de/drills/visual/reaction-speed/go/no-go | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/visual/reaction-speed/light-reaction | de | drill | 4 | blocked | docs/seo/research/light-reaction-visual-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/visual/tracking-accuracy/moving-target | de | drill | 4 | blocked | docs/seo/research/moving-target-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/visual/tracking-accuracy/multiple-targets | de | drill | 4 | blocked | docs/seo/research/multiple-targets-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/visual/tracking-accuracy/pursuit-tracker | de | drill | 4 | blocked | docs/seo/research/pursuit-tracker-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/visual/visual-recognition/entropic-grid | de | drill | 4 | blocked | docs/seo/research/entropic-grid-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/visual/visual-recognition/rhythm-anomaly | de | drill | 4 | blocked | docs/seo/research/rhythm-anomaly-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/visual/visual-recognition/visual-search | de | drill | 4 | blocked | docs/seo/research/visual-search-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/cognitive | es | hub | 4 | done | docs/seo/research/en/cognitive-hub.md | 10e3a68 | hub sections localized |
| /es/drills/cognitive/attention/concentration-stamina | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/cognitive/attention/divided-attention | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/cognitive/attention/multi-tasking | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/cognitive/focus/concentration-grid | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/cognitive/focus/distraction-fighter | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/cognitive/processing-speed/reaction-time | es | drill | 4 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/cognitive/processing-speed/rsvp-reader | es | drill | 4 | pending |  |  | changed-since-09-20 |
| /es/drills/cognitive/processing-speed/symbol-matching | es | drill | 4 | pending |  |  | changed-since-09-20 |
| /es/drills/fps/180-degree-awareness | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/angle-hold-trainer | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/anti-strafe-jitter-duel | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/anti-zigzag-movement-trainer | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(5) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/flick-shot-training | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/flow-state | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/instant-response | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/micro-correction-precision | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/pro-smooth-pursuit | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/recoil-control | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(7) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/strafe-tracking | es | drill | 4 | pending |  |  | changed-since-09-20 |
| /es/drills/fps/target-acquisition | es | drill | 4 | pending |  |  | changed-since-09-20 |
| /es/drills/fps/target-prioritization | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/target-switching-swarm | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/vertical-air-track | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/memory | es | hub | 4 | pending | docs/seo/research/memory-hub-2026-09-20.md |  |  |
| /es/drills/memory/short-term-memory/color-sequence | es | drill | 4 | pending | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/memory/short-term-memory/digit-span | es | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/short-term-memory/word-recall | es | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/spatial-memory/grid-memorization | es | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/spatial-memory/object-location | es | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/spatial-memory/path-tracing | es | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/working-memory/n-back | es | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/motor | es | hub | 4 | pending | docs/seo/research/motor-category-2026-09-20.md |  |  |
| /es/drills/motor/hand-eye-coordination/aim-trainer | es | drill | 4 | blocked | docs/seo/research/aim-trainer-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/motor/hand-eye-coordination/drag-and-drop | es | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/motor/hand-eye-coordination/precision-flick-shot | es | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/motor/movement-speed/finger-sequencing | es | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/motor/movement-speed/keyboard-recognition | es | drill | 4 | pending | docs/seo/research/keyboard-recognition-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/motor/precision-control/steady-hand | es | drill | 4 | pending | docs/seo/research/steady-hand-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/motor/precision-control/tracing | es | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/physical | es | hub | 4 | pending | docs/seo/research/physical-category-2026-09-20.md |  |  |
| /es/drills/physical/balance-training/stability-challenge | es | drill | 4 | pending | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/physical/coordination/complex-pattern | es | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/physical/coordination/cross-body-movement | es | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/physical/coordination/dynamic-grid-evasion | es | drill | 4 | pending | docs/seo/research/dynamic-grid-evasion-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/physical/fitness/agility-ladder | es | drill | 4 | pending | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/physical/fitness/jump-sequence | es | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/physical/fitness/speed-drill | es | drill | 4 | pending | docs/seo/research/speed-drill-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/physical/reflex-training/drop-catch | es | drill | 4 | pending | docs/seo/research/drop-catch-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/physical/reflex-training/peripheral-threat-sweeper | es | drill | 4 | pending | docs/seo/research/peripheral-threat-sweeper-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/physical/reflex-training/quick-dodge | es | drill | 4 | pending | docs/seo/research/quick-dodge-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/physical/reflex-training/reaction-chain | es | drill | 4 | pending | docs/seo/research/reaction-chain-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/reaction-speed | es | hub | 4 | pending | docs/seo/research/reaction-speed-hub-2026-09-20.md |  |  |
| /es/drills/reaction-speed/barrier-sequence-pursuit | es | drill | 4 | pending | docs/seo/research/barrier-sequence-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/reaction-speed/fps-tracking-trainer | es | drill | 4 | pending | docs/seo/research/fps-tracking-trainer-2026-09-20.md |  |  |
| /es/drills/reaction-speed/market-doors-pursuit | es | drill | 4 | pending | docs/seo/research/market-doors-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/reaction-speed/reaction-game | es | drill | 4 | pending | docs/seo/research/reaction-game-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/reaction-speed/saccadic-gallery | es | drill | 4 | pending | docs/seo/research/saccadic-gallery-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/reaction-speed/visual-tracking-speed-test | es | drill | 4 | pending | docs/seo/research/visual-tracking-speed-test-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual | es | hub | 4 | pending | docs/seo/research/visual-category-2026-09-20.md |  |  |
| /es/drills/visual-tracking | es | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /es/drills/visual-tracking/constant-slow-pursuit | es | drill | 4 | pending | docs/seo/research/constant-slow-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/directional-chaos-pursuit | es | drill | 4 | pending | docs/seo/research/directional-chaos-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/dynamic-evasion-pursuit | es | drill | 4 | pending | docs/seo/research/dynamic-evasion-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/ghosting-suppress-pursuit | es | drill | 4 | pending | docs/seo/research/ghosting-suppress-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/infinity-pursuit | es | drill | 4 | pending | docs/seo/research/infinity-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/momentum-teleport-pursuit | es | drill | 4 | pending | docs/seo/research/momentum-teleport-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/peripheral-ping-pursuit | es | drill | 4 | pending | docs/seo/research/peripheral-ping-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/predictive-pursuit | es | drill | 4 | pending | docs/seo/research/predictive-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/sine-wave-pursuit | es | drill | 4 | pending | docs/seo/research/sine-wave-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/spatial-shift-pursuit | es | drill | 4 | pending | docs/seo/research/spatial-shift-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/split-screen-tracking | es | drill | 4 | blocked | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/visual-tracking/staircase-step | es | drill | 4 | blocked | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/visual-tracking/strobe-prediction-pursuit | es | drill | 4 | pending | docs/seo/research/strobe-prediction-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/triangular-pursuit | es | drill | 4 | pending | docs/seo/research/triangular-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual-tracking/zig-zag-path-pursuit | es | drill | 4 | pending | docs/seo/research/zig-zag-path-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual/depth-perception/distance-judgment | es | drill | 4 | pending | docs/seo/research/distance-judgment-visual-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/visual/reaction-speed/go/no-go | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/visual/reaction-speed/light-reaction | es | drill | 4 | blocked | docs/seo/research/light-reaction-visual-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/visual/tracking-accuracy/moving-target | es | drill | 4 | blocked | docs/seo/research/moving-target-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/visual/tracking-accuracy/multiple-targets | es | drill | 4 | blocked | docs/seo/research/multiple-targets-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/visual/tracking-accuracy/pursuit-tracker | es | drill | 4 | blocked | docs/seo/research/pursuit-tracker-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/visual/visual-recognition/entropic-grid | es | drill | 4 | blocked | docs/seo/research/es/entropic-grid.md | 38e596d | changed-since-09-20; title/H1 de-duplicated; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/visual/visual-recognition/rhythm-anomaly | es | drill | 4 | blocked | docs/seo/research/rhythm-anomaly-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/visual/visual-recognition/visual-search | es | drill | 4 | blocked | docs/seo/research/visual-search-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/cognitive | fr | hub | 4 | done | docs/seo/research/en/cognitive-hub.md | 10e3a68 | hub sections localized |
| /fr/drills/cognitive/attention/concentration-stamina | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/cognitive/attention/divided-attention | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/cognitive/attention/multi-tasking | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/cognitive/focus/concentration-grid | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/cognitive/focus/distraction-fighter | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/cognitive/processing-speed/reaction-time | fr | drill | 4 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/cognitive/processing-speed/rsvp-reader | fr | drill | 4 | pending |  |  | changed-since-09-20 |
| /fr/drills/cognitive/processing-speed/symbol-matching | fr | drill | 4 | pending |  |  | changed-since-09-20 |
| /fr/drills/fps/180-degree-awareness | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/angle-hold-trainer | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/anti-strafe-jitter-duel | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/anti-zigzag-movement-trainer | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(5) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/flick-shot-training | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/flow-state | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/instant-response | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/micro-correction-precision | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/pro-smooth-pursuit | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/recoil-control | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(7) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/strafe-tracking | fr | drill | 4 | pending |  |  | changed-since-09-20 |
| /fr/drills/fps/target-acquisition | fr | drill | 4 | pending |  |  | changed-since-09-20 |
| /fr/drills/fps/target-prioritization | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/target-switching-swarm | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/vertical-air-track | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory | fr | hub | 4 | pending | docs/seo/research/memory-hub-2026-09-20.md |  |  |
| /fr/drills/memory/short-term-memory/color-sequence | fr | drill | 4 | pending | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/memory/short-term-memory/digit-span | fr | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/short-term-memory/word-recall | fr | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/spatial-memory/grid-memorization | fr | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/spatial-memory/object-location | fr | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/spatial-memory/path-tracing | fr | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/working-memory/n-back | fr | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor | fr | hub | 4 | pending | docs/seo/research/motor-category-2026-09-20.md |  |  |
| /fr/drills/motor/hand-eye-coordination/aim-trainer | fr | drill | 4 | blocked | docs/seo/research/aim-trainer-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor/hand-eye-coordination/drag-and-drop | fr | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor/hand-eye-coordination/precision-flick-shot | fr | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor/movement-speed/finger-sequencing | fr | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor/movement-speed/keyboard-recognition | fr | drill | 4 | pending | docs/seo/research/keyboard-recognition-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/motor/precision-control/steady-hand | fr | drill | 4 | pending | docs/seo/research/steady-hand-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/motor/precision-control/tracing | fr | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/physical | fr | hub | 4 | pending | docs/seo/research/physical-category-2026-09-20.md |  |  |
| /fr/drills/physical/balance-training/stability-challenge | fr | drill | 4 | pending | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/physical/coordination/complex-pattern | fr | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/physical/coordination/cross-body-movement | fr | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/physical/coordination/dynamic-grid-evasion | fr | drill | 4 | pending | docs/seo/research/dynamic-grid-evasion-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/physical/fitness/agility-ladder | fr | drill | 4 | pending | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/physical/fitness/jump-sequence | fr | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/physical/fitness/speed-drill | fr | drill | 4 | pending | docs/seo/research/speed-drill-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/physical/reflex-training/drop-catch | fr | drill | 4 | pending | docs/seo/research/drop-catch-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/physical/reflex-training/peripheral-threat-sweeper | fr | drill | 4 | pending | docs/seo/research/peripheral-threat-sweeper-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/physical/reflex-training/quick-dodge | fr | drill | 4 | pending | docs/seo/research/quick-dodge-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/physical/reflex-training/reaction-chain | fr | drill | 4 | pending | docs/seo/research/reaction-chain-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/reaction-speed | fr | hub | 4 | pending | docs/seo/research/reaction-speed-hub-2026-09-20.md |  |  |
| /fr/drills/reaction-speed/barrier-sequence-pursuit | fr | drill | 4 | done | docs/seo/research/fr/barrier-sequence-pursuit.md | f6f05c8 | changed-since-09-20; title de-duplicated |
| /fr/drills/reaction-speed/fps-tracking-trainer | fr | drill | 4 | pending | docs/seo/research/fps-tracking-trainer-2026-09-20.md |  |  |
| /fr/drills/reaction-speed/market-doors-pursuit | fr | drill | 4 | pending | docs/seo/research/market-doors-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/reaction-speed/reaction-game | fr | drill | 4 | pending | docs/seo/research/reaction-game-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/reaction-speed/saccadic-gallery | fr | drill | 4 | pending | docs/seo/research/saccadic-gallery-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/reaction-speed/visual-tracking-speed-test | fr | drill | 4 | pending | docs/seo/research/visual-tracking-speed-test-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual | fr | hub | 4 | pending | docs/seo/research/visual-category-2026-09-20.md |  |  |
| /fr/drills/visual-tracking | fr | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /fr/drills/visual-tracking/constant-slow-pursuit | fr | drill | 4 | pending | docs/seo/research/constant-slow-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/directional-chaos-pursuit | fr | drill | 4 | pending | docs/seo/research/directional-chaos-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/dynamic-evasion-pursuit | fr | drill | 4 | pending | docs/seo/research/dynamic-evasion-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/ghosting-suppress-pursuit | fr | drill | 4 | pending | docs/seo/research/ghosting-suppress-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/infinity-pursuit | fr | drill | 4 | pending | docs/seo/research/infinity-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/momentum-teleport-pursuit | fr | drill | 4 | pending | docs/seo/research/momentum-teleport-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/peripheral-ping-pursuit | fr | drill | 4 | pending | docs/seo/research/peripheral-ping-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/predictive-pursuit | fr | drill | 4 | pending | docs/seo/research/predictive-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/sine-wave-pursuit | fr | drill | 4 | pending | docs/seo/research/sine-wave-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/spatial-shift-pursuit | fr | drill | 4 | pending | docs/seo/research/spatial-shift-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/split-screen-tracking | fr | drill | 4 | blocked | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual-tracking/staircase-step | fr | drill | 4 | blocked | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual-tracking/strobe-prediction-pursuit | fr | drill | 4 | pending | docs/seo/research/strobe-prediction-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/triangular-pursuit | fr | drill | 4 | pending | docs/seo/research/triangular-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual-tracking/zig-zag-path-pursuit | fr | drill | 4 | pending | docs/seo/research/zig-zag-path-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual/depth-perception/distance-judgment | fr | drill | 4 | pending | docs/seo/research/distance-judgment-visual-2026-09-20.md |  | changed-since-09-20 |
| /fr/drills/visual/reaction-speed/go/no-go | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual/reaction-speed/light-reaction | fr | drill | 4 | blocked | docs/seo/research/light-reaction-visual-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual/tracking-accuracy/moving-target | fr | drill | 4 | blocked | docs/seo/research/moving-target-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual/tracking-accuracy/multiple-targets | fr | drill | 4 | blocked | docs/seo/research/multiple-targets-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual/tracking-accuracy/pursuit-tracker | fr | drill | 4 | blocked | docs/seo/research/pursuit-tracker-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual/visual-recognition/entropic-grid | fr | drill | 4 | blocked | docs/seo/research/fr/entropic-grid.md | 38e596d | changed-since-09-20; title/H1 de-duplicated; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual/visual-recognition/rhythm-anomaly | fr | drill | 4 | blocked | docs/seo/research/rhythm-anomaly-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual/visual-recognition/visual-search | fr | drill | 4 | blocked | docs/seo/research/visual-search-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/cognitive | ja | hub | 4 | done | docs/seo/research/en/cognitive-hub.md | 10e3a68 | hub sections localized |
| /ja/drills/cognitive/attention/concentration-stamina | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/cognitive/attention/divided-attention | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/cognitive/attention/multi-tasking | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/cognitive/focus/concentration-grid | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/cognitive/focus/distraction-fighter | ja | drill | 4 | pending |  |  | changed-since-09-20 |
| /ja/drills/cognitive/processing-speed/reaction-time | ja | drill | 4 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/cognitive/processing-speed/rsvp-reader | ja | drill | 4 | pending |  |  | changed-since-09-20 |
| /ja/drills/cognitive/processing-speed/symbol-matching | ja | drill | 4 | pending |  |  | changed-since-09-20 |
| /ja/drills/fps/180-degree-awareness | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/angle-hold-trainer | ja | drill | 4 | pending |  |  | changed-since-09-20 |
| /ja/drills/fps/anti-strafe-jitter-duel | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/anti-zigzag-movement-trainer | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(5) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/flick-shot-training | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/flow-state | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/instant-response | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/micro-correction-precision | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/pro-smooth-pursuit | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/recoil-control | ja | drill | 4 | pending |  |  | changed-since-09-20 |
| /ja/drills/fps/strafe-tracking | ja | drill | 4 | pending |  |  | changed-since-09-20 |
| /ja/drills/fps/target-acquisition | ja | drill | 4 | pending |  |  | changed-since-09-20 |
| /ja/drills/fps/target-prioritization | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/target-switching-swarm | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/vertical-air-track | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory | ja | hub | 4 | pending | docs/seo/research/memory-hub-2026-09-20.md |  |  |
| /ja/drills/memory/short-term-memory/color-sequence | ja | drill | 4 | blocked | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/short-term-memory/digit-span | ja | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/short-term-memory/word-recall | ja | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/spatial-memory/grid-memorization | ja | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/spatial-memory/object-location | ja | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/spatial-memory/path-tracing | ja | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/working-memory/n-back | ja | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/motor | ja | hub | 4 | pending | docs/seo/research/motor-category-2026-09-20.md |  |  |
| /ja/drills/motor/hand-eye-coordination/aim-trainer | ja | drill | 4 | pending | docs/seo/research/aim-trainer-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/motor/hand-eye-coordination/drag-and-drop | ja | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/motor/hand-eye-coordination/precision-flick-shot | ja | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/motor/movement-speed/finger-sequencing | ja | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/motor/movement-speed/keyboard-recognition | ja | drill | 4 | pending | docs/seo/research/keyboard-recognition-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/motor/precision-control/steady-hand | ja | drill | 4 | pending | docs/seo/research/steady-hand-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/motor/precision-control/tracing | ja | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical | ja | hub | 4 | pending | docs/seo/research/physical-category-2026-09-20.md |  |  |
| /ja/drills/physical/balance-training/stability-challenge | ja | drill | 4 | blocked | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/coordination/complex-pattern | ja | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/coordination/cross-body-movement | ja | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/coordination/dynamic-grid-evasion | ja | drill | 4 | pending | docs/seo/research/dynamic-grid-evasion-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/physical/fitness/agility-ladder | ja | drill | 4 | blocked | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/fitness/jump-sequence | ja | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/fitness/speed-drill | ja | drill | 4 | pending | docs/seo/research/speed-drill-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/physical/reflex-training/drop-catch | ja | drill | 4 | pending | docs/seo/research/drop-catch-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/physical/reflex-training/peripheral-threat-sweeper | ja | drill | 4 | pending | docs/seo/research/peripheral-threat-sweeper-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/physical/reflex-training/quick-dodge | ja | drill | 4 | pending | docs/seo/research/quick-dodge-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/physical/reflex-training/reaction-chain | ja | drill | 4 | pending | docs/seo/research/reaction-chain-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/reaction-speed | ja | hub | 4 | pending | docs/seo/research/reaction-speed-hub-2026-09-20.md |  |  |
| /ja/drills/reaction-speed/barrier-sequence-pursuit | ja | drill | 4 | done | docs/seo/research/ja/barrier-sequence-pursuit.md | f6f05c8 | changed-since-09-20; native content authored |
| /ja/drills/reaction-speed/fps-tracking-trainer | ja | drill | 4 | pending | docs/seo/research/fps-tracking-trainer-2026-09-20.md |  |  |
| /ja/drills/reaction-speed/market-doors-pursuit | ja | drill | 4 | pending | docs/seo/research/market-doors-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/reaction-speed/reaction-game | ja | drill | 4 | pending | docs/seo/research/reaction-game-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/reaction-speed/saccadic-gallery | ja | drill | 4 | pending | docs/seo/research/saccadic-gallery-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/reaction-speed/visual-tracking-speed-test | ja | drill | 4 | pending | docs/seo/research/visual-tracking-speed-test-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual | ja | hub | 4 | pending | docs/seo/research/visual-category-2026-09-20.md |  |  |
| /ja/drills/visual-tracking | ja | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /ja/drills/visual-tracking/constant-slow-pursuit | ja | drill | 4 | pending | docs/seo/research/constant-slow-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/directional-chaos-pursuit | ja | drill | 4 | pending | docs/seo/research/directional-chaos-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/dynamic-evasion-pursuit | ja | drill | 4 | pending | docs/seo/research/dynamic-evasion-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/ghosting-suppress-pursuit | ja | drill | 4 | pending | docs/seo/research/ghosting-suppress-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/infinity-pursuit | ja | drill | 4 | pending | docs/seo/research/infinity-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/momentum-teleport-pursuit | ja | drill | 4 | pending | docs/seo/research/momentum-teleport-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/peripheral-ping-pursuit | ja | drill | 4 | pending | docs/seo/research/peripheral-ping-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/predictive-pursuit | ja | drill | 4 | pending | docs/seo/research/predictive-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/sine-wave-pursuit | ja | drill | 4 | pending | docs/seo/research/sine-wave-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/spatial-shift-pursuit | ja | drill | 4 | pending | docs/seo/research/spatial-shift-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/split-screen-tracking | ja | drill | 4 | pending | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/staircase-step | ja | drill | 4 | pending | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/strobe-prediction-pursuit | ja | drill | 4 | pending | docs/seo/research/strobe-prediction-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/triangular-pursuit | ja | drill | 4 | pending | docs/seo/research/triangular-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/zig-zag-path-pursuit | ja | drill | 4 | pending | docs/seo/research/zig-zag-path-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual/depth-perception/distance-judgment | ja | drill | 4 | pending | docs/seo/research/distance-judgment-visual-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual/reaction-speed/go/no-go | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/visual/reaction-speed/light-reaction | ja | drill | 4 | blocked | docs/seo/research/light-reaction-visual-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/visual/tracking-accuracy/moving-target | ja | drill | 4 | blocked | docs/seo/research/moving-target-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/visual/tracking-accuracy/multiple-targets | ja | drill | 4 | blocked | docs/seo/research/multiple-targets-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/visual/tracking-accuracy/pursuit-tracker | ja | drill | 4 | blocked | docs/seo/research/pursuit-tracker-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/visual/visual-recognition/entropic-grid | ja | drill | 4 | blocked | docs/seo/research/entropic-grid-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/visual/visual-recognition/rhythm-anomaly | ja | drill | 4 | blocked | docs/seo/research/rhythm-anomaly-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/visual/visual-recognition/visual-search | ja | drill | 4 | blocked | docs/seo/research/visual-search-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/cognitive | ko | hub | 4 | done | docs/seo/research/en/cognitive-hub.md | 10e3a68 | hub sections localized |
| /ko/drills/cognitive/attention/concentration-stamina | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/cognitive/attention/divided-attention | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/cognitive/attention/multi-tasking | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/cognitive/focus/concentration-grid | ko | drill | 4 | pending |  |  | changed-since-09-20 |
| /ko/drills/cognitive/focus/distraction-fighter | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(14) — client About/FAQ copy is English, see D2 |
| /ko/drills/cognitive/processing-speed/reaction-time | ko | drill | 4 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/cognitive/processing-speed/rsvp-reader | ko | drill | 4 | pending |  |  | changed-since-09-20 |
| /ko/drills/cognitive/processing-speed/symbol-matching | ko | drill | 4 | pending |  |  | changed-since-09-20 |
| /ko/drills/fps/180-degree-awareness | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/angle-hold-trainer | ko | drill | 4 | pending |  |  | changed-since-09-20 |
| /ko/drills/fps/anti-strafe-jitter-duel | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/anti-zigzag-movement-trainer | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(5) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/flick-shot-training | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/flow-state | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/instant-response | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/micro-correction-precision | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/pro-smooth-pursuit | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/recoil-control | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/strafe-tracking | ko | drill | 4 | pending |  |  | changed-since-09-20 |
| /ko/drills/fps/target-acquisition | ko | drill | 4 | pending |  |  | changed-since-09-20 |
| /ko/drills/fps/target-prioritization | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/target-switching-swarm | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/vertical-air-track | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory | ko | hub | 4 | pending | docs/seo/research/memory-hub-2026-09-20.md |  |  |
| /ko/drills/memory/short-term-memory/color-sequence | ko | drill | 4 | blocked | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/short-term-memory/digit-span | ko | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/short-term-memory/word-recall | ko | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/spatial-memory/grid-memorization | ko | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/spatial-memory/object-location | ko | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/spatial-memory/path-tracing | ko | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/working-memory/n-back | ko | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/motor | ko | hub | 4 | pending | docs/seo/research/motor-category-2026-09-20.md |  |  |
| /ko/drills/motor/hand-eye-coordination/aim-trainer | ko | drill | 4 | pending | docs/seo/research/aim-trainer-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/motor/hand-eye-coordination/drag-and-drop | ko | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/motor/hand-eye-coordination/precision-flick-shot | ko | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/motor/movement-speed/finger-sequencing | ko | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/motor/movement-speed/keyboard-recognition | ko | drill | 4 | pending | docs/seo/research/keyboard-recognition-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/motor/precision-control/steady-hand | ko | drill | 4 | pending | docs/seo/research/steady-hand-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/motor/precision-control/tracing | ko | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical | ko | hub | 4 | pending | docs/seo/research/physical-category-2026-09-20.md |  |  |
| /ko/drills/physical/balance-training/stability-challenge | ko | drill | 4 | blocked | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/coordination/complex-pattern | ko | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/coordination/cross-body-movement | ko | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/coordination/dynamic-grid-evasion | ko | drill | 4 | pending | docs/seo/research/dynamic-grid-evasion-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/physical/fitness/agility-ladder | ko | drill | 4 | blocked | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/fitness/jump-sequence | ko | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/fitness/speed-drill | ko | drill | 4 | pending | docs/seo/research/speed-drill-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/physical/reflex-training/drop-catch | ko | drill | 4 | pending | docs/seo/research/drop-catch-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/physical/reflex-training/peripheral-threat-sweeper | ko | drill | 4 | pending | docs/seo/research/peripheral-threat-sweeper-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/physical/reflex-training/quick-dodge | ko | drill | 4 | pending | docs/seo/research/quick-dodge-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/physical/reflex-training/reaction-chain | ko | drill | 4 | pending | docs/seo/research/reaction-chain-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/reaction-speed | ko | hub | 4 | pending | docs/seo/research/reaction-speed-hub-2026-09-20.md |  |  |
| /ko/drills/reaction-speed/barrier-sequence-pursuit | ko | drill | 4 | done | docs/seo/research/ko/barrier-sequence-pursuit.md | f6f05c8 | changed-since-09-20; native content authored |
| /ko/drills/reaction-speed/fps-tracking-trainer | ko | drill | 4 | pending | docs/seo/research/fps-tracking-trainer-2026-09-20.md |  |  |
| /ko/drills/reaction-speed/market-doors-pursuit | ko | drill | 4 | pending | docs/seo/research/market-doors-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/reaction-speed/reaction-game | ko | drill | 4 | pending | docs/seo/research/reaction-game-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/reaction-speed/saccadic-gallery | ko | drill | 4 | pending | docs/seo/research/saccadic-gallery-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/reaction-speed/visual-tracking-speed-test | ko | drill | 4 | pending | docs/seo/research/visual-tracking-speed-test-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual | ko | hub | 4 | pending | docs/seo/research/visual-category-2026-09-20.md |  |  |
| /ko/drills/visual-tracking | ko | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /ko/drills/visual-tracking/constant-slow-pursuit | ko | drill | 4 | pending | docs/seo/research/constant-slow-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/directional-chaos-pursuit | ko | drill | 4 | pending | docs/seo/research/directional-chaos-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/dynamic-evasion-pursuit | ko | drill | 4 | pending | docs/seo/research/dynamic-evasion-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/ghosting-suppress-pursuit | ko | drill | 4 | pending | docs/seo/research/ghosting-suppress-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/infinity-pursuit | ko | drill | 4 | pending | docs/seo/research/infinity-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/momentum-teleport-pursuit | ko | drill | 4 | pending | docs/seo/research/momentum-teleport-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/peripheral-ping-pursuit | ko | drill | 4 | pending | docs/seo/research/peripheral-ping-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/predictive-pursuit | ko | drill | 4 | pending | docs/seo/research/predictive-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/sine-wave-pursuit | ko | drill | 4 | pending | docs/seo/research/sine-wave-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/spatial-shift-pursuit | ko | drill | 4 | pending | docs/seo/research/spatial-shift-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/split-screen-tracking | ko | drill | 4 | pending | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/staircase-step | ko | drill | 4 | pending | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/strobe-prediction-pursuit | ko | drill | 4 | pending | docs/seo/research/strobe-prediction-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/triangular-pursuit | ko | drill | 4 | pending | docs/seo/research/triangular-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual-tracking/zig-zag-path-pursuit | ko | drill | 4 | pending | docs/seo/research/zig-zag-path-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual/depth-perception/distance-judgment | ko | drill | 4 | pending | docs/seo/research/distance-judgment-visual-2026-09-20.md |  | changed-since-09-20 |
| /ko/drills/visual/reaction-speed/go/no-go | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/visual/reaction-speed/light-reaction | ko | drill | 4 | blocked | docs/seo/research/light-reaction-visual-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/visual/tracking-accuracy/moving-target | ko | drill | 4 | blocked | docs/seo/research/moving-target-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/visual/tracking-accuracy/multiple-targets | ko | drill | 4 | blocked | docs/seo/research/multiple-targets-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/visual/tracking-accuracy/pursuit-tracker | ko | drill | 4 | blocked | docs/seo/research/pursuit-tracker-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/visual/visual-recognition/entropic-grid | ko | drill | 4 | blocked | docs/seo/research/entropic-grid-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/visual/visual-recognition/rhythm-anomaly | ko | drill | 4 | blocked | docs/seo/research/rhythm-anomaly-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/visual/visual-recognition/visual-search | ko | drill | 4 | blocked | docs/seo/research/visual-search-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/cognitive | pt | hub | 4 | done | docs/seo/research/en/cognitive-hub.md | 10e3a68 | hub sections localized |
| /pt/drills/cognitive/attention/concentration-stamina | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/cognitive/attention/divided-attention | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/cognitive/attention/multi-tasking | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/cognitive/focus/concentration-grid | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/cognitive/focus/distraction-fighter | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/cognitive/processing-speed/reaction-time | pt | drill | 4 | pending | docs/seo/research/reaction-time-test-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/cognitive/processing-speed/rsvp-reader | pt | drill | 4 | pending |  |  | changed-since-09-20 |
| /pt/drills/cognitive/processing-speed/symbol-matching | pt | drill | 4 | pending |  |  | changed-since-09-20 |
| /pt/drills/fps/180-degree-awareness | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/angle-hold-trainer | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/anti-strafe-jitter-duel | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/anti-zigzag-movement-trainer | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(5) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/flick-shot-training | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/flow-state | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/instant-response | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/micro-correction-precision | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/pro-smooth-pursuit | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/recoil-control | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(7) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/strafe-tracking | pt | drill | 4 | pending |  |  | changed-since-09-20 |
| /pt/drills/fps/target-acquisition | pt | drill | 4 | pending |  |  | changed-since-09-20 |
| /pt/drills/fps/target-prioritization | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/target-switching-swarm | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/vertical-air-track | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory | pt | hub | 4 | pending | docs/seo/research/memory-hub-2026-09-20.md |  |  |
| /pt/drills/memory/short-term-memory/color-sequence | pt | drill | 4 | pending | docs/seo/research/color-sequence-2026-09-20.md |  |  |
| /pt/drills/memory/short-term-memory/digit-span | pt | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/short-term-memory/word-recall | pt | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/spatial-memory/grid-memorization | pt | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/spatial-memory/object-location | pt | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/spatial-memory/path-tracing | pt | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/working-memory/n-back | pt | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/motor | pt | hub | 4 | pending | docs/seo/research/motor-category-2026-09-20.md |  |  |
| /pt/drills/motor/hand-eye-coordination/aim-trainer | pt | drill | 4 | pending | docs/seo/research/aim-trainer-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/motor/hand-eye-coordination/drag-and-drop | pt | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/motor/hand-eye-coordination/precision-flick-shot | pt | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/motor/movement-speed/finger-sequencing | pt | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/motor/movement-speed/keyboard-recognition | pt | drill | 4 | pending | docs/seo/research/keyboard-recognition-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/motor/precision-control/steady-hand | pt | drill | 4 | pending | docs/seo/research/steady-hand-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/motor/precision-control/tracing | pt | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/physical | pt | hub | 4 | pending | docs/seo/research/physical-category-2026-09-20.md |  |  |
| /pt/drills/physical/balance-training/stability-challenge | pt | drill | 4 | pending | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/physical/coordination/complex-pattern | pt | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/physical/coordination/cross-body-movement | pt | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/physical/coordination/dynamic-grid-evasion | pt | drill | 4 | pending | docs/seo/research/dynamic-grid-evasion-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/physical/fitness/agility-ladder | pt | drill | 4 | pending | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/physical/fitness/jump-sequence | pt | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/physical/fitness/speed-drill | pt | drill | 4 | pending | docs/seo/research/speed-drill-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/physical/reflex-training/drop-catch | pt | drill | 4 | pending | docs/seo/research/drop-catch-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/physical/reflex-training/peripheral-threat-sweeper | pt | drill | 4 | pending | docs/seo/research/peripheral-threat-sweeper-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/physical/reflex-training/quick-dodge | pt | drill | 4 | pending | docs/seo/research/quick-dodge-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/physical/reflex-training/reaction-chain | pt | drill | 4 | pending | docs/seo/research/reaction-chain-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/reaction-speed | pt | hub | 4 | pending | docs/seo/research/reaction-speed-hub-2026-09-20.md |  |  |
| /pt/drills/reaction-speed/barrier-sequence-pursuit | pt | drill | 4 | pending | docs/seo/research/barrier-sequence-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/reaction-speed/fps-tracking-trainer | pt | drill | 4 | pending | docs/seo/research/fps-tracking-trainer-2026-09-20.md |  |  |
| /pt/drills/reaction-speed/market-doors-pursuit | pt | drill | 4 | pending | docs/seo/research/market-doors-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/reaction-speed/reaction-game | pt | drill | 4 | pending | docs/seo/research/reaction-game-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/reaction-speed/saccadic-gallery | pt | drill | 4 | pending | docs/seo/research/saccadic-gallery-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/reaction-speed/visual-tracking-speed-test | pt | drill | 4 | pending | docs/seo/research/visual-tracking-speed-test-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual | pt | hub | 4 | pending | docs/seo/research/visual-category-2026-09-20.md |  |  |
| /pt/drills/visual-tracking | pt | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /pt/drills/visual-tracking/constant-slow-pursuit | pt | drill | 4 | pending | docs/seo/research/constant-slow-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/directional-chaos-pursuit | pt | drill | 4 | pending | docs/seo/research/directional-chaos-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/dynamic-evasion-pursuit | pt | drill | 4 | pending | docs/seo/research/dynamic-evasion-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/ghosting-suppress-pursuit | pt | drill | 4 | pending | docs/seo/research/ghosting-suppress-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/infinity-pursuit | pt | drill | 4 | pending | docs/seo/research/infinity-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/momentum-teleport-pursuit | pt | drill | 4 | pending | docs/seo/research/momentum-teleport-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/peripheral-ping-pursuit | pt | drill | 4 | pending | docs/seo/research/peripheral-ping-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/predictive-pursuit | pt | drill | 4 | pending | docs/seo/research/predictive-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/sine-wave-pursuit | pt | drill | 4 | pending | docs/seo/research/sine-wave-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/spatial-shift-pursuit | pt | drill | 4 | pending | docs/seo/research/spatial-shift-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/split-screen-tracking | pt | drill | 4 | blocked | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual-tracking/staircase-step | pt | drill | 4 | blocked | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual-tracking/strobe-prediction-pursuit | pt | drill | 4 | pending | docs/seo/research/strobe-prediction-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/triangular-pursuit | pt | drill | 4 | pending | docs/seo/research/triangular-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual-tracking/zig-zag-path-pursuit | pt | drill | 4 | pending | docs/seo/research/zig-zag-path-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual/depth-perception/distance-judgment | pt | drill | 4 | pending | docs/seo/research/distance-judgment-visual-2026-09-20.md |  | changed-since-09-20 |
| /pt/drills/visual/reaction-speed/go/no-go | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/reaction-speed/light-reaction | pt | drill | 4 | blocked | docs/seo/research/light-reaction-visual-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/tracking-accuracy/moving-target | pt | drill | 4 | blocked | docs/seo/research/moving-target-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/tracking-accuracy/multiple-targets | pt | drill | 4 | blocked | docs/seo/research/multiple-targets-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/tracking-accuracy/pursuit-tracker | pt | drill | 4 | blocked | docs/seo/research/pursuit-tracker-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/visual-recognition/entropic-grid | pt | drill | 4 | blocked | docs/seo/research/pt/entropic-grid.md | 38e596d | changed-since-09-20; title/H1 de-duplicated; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/visual-recognition/rhythm-anomaly | pt | drill | 4 | blocked | docs/seo/research/rhythm-anomaly-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/visual-recognition/visual-search | pt | drill | 4 | blocked | docs/seo/research/visual-search-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /about | en | utility | 5 | pending |  |  | changed-since-09-20; sub-ms |
| /delete-account | en | utility | 5 | pending |  |  | changed-since-09-20 |
| /privacy | en | utility | 5 | pending |  |  | changed-since-09-20 |
| /terms | en | utility | 5 | pending |  |  |  |


## Blockers and owner decisions

Evidence: `docs/seo/TECHNICAL_AUDIT_2026-10-07.md`, `docs/seo/audit/*.csv`.

- **D1 — live research hosts blocked.** The agent proxy denies `suggestqueries.google.com`, `trends.google.com`, `www.bing.com`, `search.naver.com`, `duckduckgo.com`, `www.reddit.com`, `humanbenchmark.com` (WebFetch `EGRESS_BLOCKED`, curl `403`). `WebSearch` works but is US-only and returns no volumes. Bing API key was revoked 2026-08-25; GSC OAuth refresh returned `invalid_grant` on 2026-09-20. Effect: Phase B keyword scoring (autocomplete, Trends, volume) cannot be completed here, so no new keyword was adopted without prior logged evidence. Needed: add the hosts under Allowed domains in the environment's network settings, or supply `BING_API_KEY` and GSC credentials, then re-run Phase B from the first `pending` row.
- **D2 — English body copy on 243 localized pages (45 routes × 5–6 locales).** The drill `*Client.js` files hard-code English About / Who-it-is-for / FAQ prose and headings (e.g. `Drill Instructions & Scoring System`, `About <drill>`); the localized `page.js` files do not supply replacements for most of them. List: `docs/seo/audit/english-prose-leak-2026-10-07.csv`. Fix needs copy-prop plumbing in ~45 `*Client.js` files plus native copy for each locale. Rows are `blocked` until the owner authorizes `*Client.js` copy-prop edits (2.md §0 limits Client edits to SEO copy/schema props) and the native-copy volume.
- **D3 — `<html lang="en">` on every localized page.** Root layout hard-codes `lang="en"`; an inline script corrects it after load only. Fixing it server-side needs per-locale root layouts (route groups) or dynamic rendering. Mitigation shipped: `Content-Language` response header per locale tree in `next.config.js`.
- **D4 — claims the code does not support.** (a) "bypasses OS mouse acceleration / 1:1 raw input": `requestPointerLock()` is called without `{ unadjustedMovement: true }` — 8 English files plus localized copies (`app/drills/fps/{micro-correction-precision,180-degree-awareness,strafe-tracking,pro-smooth-pursuit,target-acquisition,instant-response}/page.js`, `StrafeTrackingClient.js`, `ProFlickClient.js`). Either request unadjusted movement in the drills (gameplay code, not touched) or soften the copy. Fixed on the FPS hub only. (b) "zero telemetry / collects no aggregate data" on drill pages (19 files, e.g. `app/drills/visual/depth-perception/distance-judgment/page.js`) contradicts `/privacy`, which discloses Vercel Analytics and Speed Insights. Privacy wording is for the owner.
- **D5 — branch.** `2.md` says work on `main`; this session was pinned to `ccr-109ee186-jucejh`. Everything is committed there. Merge to `main` is the owner's call; Vercel stays disconnected.
- **D6 — localized pages without verified demand.** All 81 drills have six locale pages (`LOCALIZED_ROUTES`, shipped 2026-09-22). The Standard's gate (verified native demand) is documented only for a subset in `docs/seo/research/*-2026-09-20.md`. Keep, noindex or fold back to English is an owner decision; nothing was removed.
- **D7 — `debug-runtime` / mypry unavailable.** The `mypry` MCP server failed to connect. All edits were static SEO copy, schema and sitemap changes; the debug gate was acknowledged once for that reason. Rendered HTML and console output were checked with headless Chromium over CDP.
- **D8 — minor English chrome left:** `Session preferences` heading on `/drills` (6 locales), `Loading SkillDrills` fallback text in drill loaders.
