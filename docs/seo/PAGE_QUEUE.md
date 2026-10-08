# PAGE_QUEUE

Resume-safe queue for the `Run 2.md` SEO/AEO/GEO pass. Take the first `pending` row in table order (priority ascending).

Priority tiers: 0 = home, directory, 8 category hubs · 1 = English drills with measured or likely demand · 2 = remaining English drills · 3 = localized pages whose routes carry measured demand · 4 = remaining localized pages · 5 = utility/legal.

Status legend: `done` = passes scripts/seo_render_audit.mjs and the English-leak check, has a research log and a commit · `pending` = not yet worked in this pass (may already pass the mechanical audit) · `blocked` = needs an owner decision, see Blockers · `in-progress` = taken, not committed.

Status counts: done 394 · pending 4 · blocked 243

| URL | locale | type | priority | status | research-log | commit | notes |
|---|---|---|---|---|---|---|---|
| / | en | home | 0 | done | docs/seo/research/en/home.md | 36eedbe, d701f10, 141a5f5 | FAQ + FAQPage added; stale typing claim and overstated feature copy corrected |
| /drills | en | directory | 0 | done | docs/seo/research/en/drills-directory.md | faaf0b02 | description names cps/aim/reaction/memory; FAQ 3 to 7 |
| /drills/cognitive | en | hub | 0 | done | docs/seo/research/en/cognitive-hub.md | 10e3a68, 36eedbe | hub sections and unsupported claims fixed |
| /drills/fps | en | hub | 0 | done | docs/seo/research/en/fps-hub.md | 10e3a68, 36eedbe | changed-since-09-20; hub sections and unsupported claims fixed |
| /drills/memory | en | hub | 0 | done | docs/seo/research/en/memory-hub.md | 4f0a1733 | title/H1 now Memory Tests & Memory Games (1,433 vs 49 Bing) |
| /drills/motor | en | hub | 0 | done | docs/seo/research/en/motor-hub.md | 850f913c | CPS/aim title+H1, unsupported FAQ/spec claims replaced; edited dictionaries.js en motor entry |
| /drills/physical | en | hub | 0 | done | docs/seo/research/en/physical-hub.md | d5f94ba4 | fabricated FAQ claims and fake-volume comment removed; H1 in Client untouched |
| /drills/reaction-speed | en | hub | 0 | done | docs/seo/research/en/reaction-speed-hub.md | 7871db9f | FAQ now gives sourced 200-250 ms range |
| /drills/visual | en | hub | 0 | done | docs/seo/research/en/visual-hub.md | 7e62ee36 | title=H1, 10 hedged FAQs replace unsupported claims |
| /drills/visual-tracking | en | hub | 0 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68, 36eedbe | changed-since-09-20; hub sections and unsupported claims fixed |
| /drills/cognitive/processing-speed/reaction-time | en | drill | 1 | done | docs/seo/research/en/choice-reaction-time.md | 1aa231cc | invented FAQ figures and percentile table removed |
| /drills/fps/180-degree-awareness | en | drill | 1 | done | docs/seo/research/en/180-degree-awareness.md | 9034d62c | demand thin |
| /drills/fps/angle-hold-trainer | en | drill | 1 | done | docs/seo/research/en/angle-hold-trainer.md | c1e51e57 | title/desc/H1, direct answer, FAQ+1, D4 raw-input FAQ fixed |
| /drills/fps/anti-strafe-jitter-duel | en | drill | 1 | done | docs/seo/research/en/anti-strafe-jitter-duel.md | 009d8738 | demand not verified |
| /drills/fps/anti-zigzag-movement-trainer | en | drill | 1 | done | docs/seo/research/en/anti-zigzag-movement-trainer.md | 680bab0f | demand not verified |
| /drills/fps/flick-shot-training | en | drill | 1 | done | docs/seo/research/en/flick-shot-training.md | fb241ecd | client ABOUT_SECTIONS/FAQ_ITEMS still say raw input (Client.js, D2) |
| /drills/fps/flow-state | en | drill | 1 | done | docs/seo/research/en/flow-state.md | 2c40e2ca | H1 aligned via copy props; demand not verified |
| /drills/fps/instant-response | en | drill | 1 | done | docs/seo/research/en/instant-response.md | 2a7dcab6 | bypass claim removed |
| /drills/fps/micro-correction-precision | en | drill | 1 | done | docs/seo/research/en/micro-correction-precision.md | 7f984e4e | measured phrase "micro adjustment" |
| /drills/fps/pro-smooth-pursuit | en | drill | 1 | done | docs/seo/research/en/pro-smooth-pursuit.md | b5681afc | demand not verified |
| /drills/fps/recoil-control | en | drill | 1 | done | docs/seo/research/en/recoil-control.md | e0c30f86 | rank claims removed |
| /drills/fps/strafe-tracking | en | drill | 1 | done | docs/seo/research/en/strafe-tracking.md | a4732a60 | D4 via startSubtitle/aboutCards props from page.js |
| /drills/fps/target-acquisition | en | drill | 1 | done | docs/seo/research/en/target-acquisition.md | 3bf52068 | demand not verified |
| /drills/fps/target-prioritization | en | drill | 1 | done | docs/seo/research/en/target-prioritization.md | fa061b86 | demand not verified |
| /drills/fps/target-switching-swarm | en | drill | 1 | done | docs/seo/research/en/target-switching-swarm.md | f1540b3d | removed open-source claim |
| /drills/fps/vertical-air-track | en | drill | 1 | done | docs/seo/research/en/vertical-air-track.md | 61b1dceb | demand not verified |
| /drills/memory/short-term-memory/color-sequence | en | drill | 1 | done | docs/seo/research/en/color-sequence.md | f30c9ee0 | color memory game 172, simon game 229 |
| /drills/memory/short-term-memory/digit-span | en | drill | 1 | done | docs/seo/research/en/digit-span.md | 9552b4db | primary "digit span test" (Bing 77); percentile labels removed |
| /drills/memory/short-term-memory/word-recall | en | drill | 1 | done | docs/seo/research/en/word-recall.md | 1c2a34b6 | Bing 0/null; GSC 56 impr pos 18 |
| /drills/memory/spatial-memory/grid-memorization | en | drill | 1 | done | docs/seo/research/en/grid-memorization.md | 8da743c4 | visual memory test Bing 98 |
| /drills/memory/spatial-memory/object-location | en | drill | 1 | done | docs/seo/research/en/object-location.md | 28e2da5b | demand not verified |
| /drills/memory/spatial-memory/path-tracing | en | drill | 1 | done | docs/seo/research/en/path-tracing.md | 85270fcd | demand not verified |
| /drills/memory/working-memory/n-back | en | drill | 1 | done | docs/seo/research/en/n-back.md | 5e44f0a7 | IQ-transfer and norm FAQ answers corrected; demand low |
| /drills/motor/hand-eye-coordination/aim-trainer | en | drill | 1 | done | docs/seo/research/en/aim-trainer.md | 8f97317c | H1 "Online" duplication fixed |
| /drills/motor/hand-eye-coordination/drag-and-drop | en | drill | 1 | done | docs/seo/research/en/drag-and-drop.md | 4dfcb884 | demand not verified |
| /drills/motor/hand-eye-coordination/precision-flick-shot | en | drill | 1 | done | docs/seo/research/en/precision-flick-shot.md | b69c5c61 | H1 now carries "Mouse Accuracy Test" |
| /drills/motor/movement-speed/finger-sequencing | en | drill | 1 | done | docs/seo/research/en/finger-sequencing.md | 5b478085 | demand not verified |
| /drills/motor/movement-speed/keyboard-recognition | en | drill | 1 | done | docs/seo/research/en/keyboard-recognition.md | 8e40d4d5 | demand not verified; H1 subtitle via page.js copy prop |
| /drills/motor/movement-speed/rapid-tapping | en | drill | 1 | done | docs/seo/research/en/rapid-tapping.md | 71a06413 | cps test Bing 26,538 |
| /drills/motor/precision-control/steady-hand | en | drill | 1 | done | docs/seo/research/en/steady-hand.md | e073ea35 | direct answer, DIY-intent FAQ |
| /drills/motor/precision-control/tracing | en | drill | 1 | done | docs/seo/research/en/tracing.md | e8df9a60 | H1 aligned to "Mouse Tracking Test" |
| /drills/reaction-speed/reaction-time-test | en | drill | 1 | done | docs/seo/research/en/reaction-time-test.md | 0e22f96f | drill is interval-timing, not stimulus reaction test; copy made honest; intent mismatch with 12.7k "reaction time test" needs owner/product decision; H1 includes subtitle (Client) |
| /drills/reaction-speed/reflex-training-drill | en | drill | 1 | done | docs/seo/research/en/reflex-training-drill.md | 1aa231cc | reviewed, already accurate; demand for own name not verified |
| /drills/cognitive/attention/concentration-stamina | en | drill | 2 | done | docs/seo/research/en/concentration-stamina.md | 15fffc4a | percentile labels removed; H1 reordered |
| /drills/cognitive/attention/divided-attention | en | drill | 2 | done | docs/seo/research/en/divided-attention.md | 0cf19258 | 2 FAQ answers softened; percentile labels removed |
| /drills/cognitive/attention/multi-tasking | en | drill | 2 | done | docs/seo/research/en/multi-tasking.md | c4673f14 | demand not verified (Bing 0); claims softened |
| /drills/cognitive/focus/concentration-grid | en | drill | 2 | done | docs/seo/research/en/concentration-grid.md | 2ac90dd7 | Schulte-first H1, direct answer, average-time FAQ, unsourced claims removed |
| /drills/cognitive/focus/distraction-fighter | en | drill | 2 | done | docs/seo/research/en/distraction-fighter.md | e77628f8 | FAQ claim softened |
| /drills/cognitive/processing-speed/rsvp-reader | en | drill | 2 | done | docs/seo/research/en/rsvp-reader.md | 2ab4f047 | FAQ claim softened; percentile labels removed |
| /drills/cognitive/processing-speed/symbol-matching | en | drill | 2 | done | docs/seo/research/en/symbol-matching.md | e4482908 | title changed to measured vocabulary; non-clinical label kept |
| /drills/physical/balance-training/stability-challenge | en | drill | 2 | done | docs/seo/research/en/stability-challenge.md | 31c26903 | demand not verified; mouse accuracy test 76 noted |
| /drills/physical/coordination/complex-pattern | en | drill | 2 | done | docs/seo/research/en/complex-pattern.md | c0aeae41 | percentile labels removed; FAQ hedged |
| /drills/physical/coordination/cross-body-movement | en | drill | 2 | done | docs/seo/research/en/cross-body-movement.md | 8e17666a | Bing unavailable; FAQ hedged |
| /drills/physical/coordination/dynamic-grid-evasion | en | drill | 2 | done | docs/seo/research/en/dynamic-grid-evasion.md | 4ed64eed | intent fit weak (PE-lesson SERP); FAQ hedged |
| /drills/physical/fitness/agility-ladder | en | drill | 2 | done | docs/seo/research/en/agility-ladder.md | 82ea1ba1 | intent mismatch logged for owner; FAQ hedged |
| /drills/physical/fitness/jump-sequence | en | drill | 2 | done | docs/seo/research/en/jump-sequence.md | 7bc49543 | no demand evidence for primary; claims hedged |
| /drills/physical/fitness/speed-drill | en | drill | 2 | done | docs/seo/research/en/speed-drill.md | a7ec030c | intent mismatch fixed; FAQ added (11 items) |
| /drills/physical/reflex-training/drop-catch | en | drill | 2 | done | docs/seo/research/en/drop-catch.md | d23cb595 | Bing unavailable; claims hedged |
| /drills/physical/reflex-training/peripheral-threat-sweeper | en | drill | 2 | done | docs/seo/research/en/peripheral-threat-sweeper.md | 945316f2 | medical-intent SERP; disclaimer added |
| /drills/physical/reflex-training/quick-dodge | en | drill | 2 | done | docs/seo/research/en/quick-dodge.md | f77e016d | demand not verified; claims hedged |
| /drills/physical/reflex-training/reaction-chain | en | drill | 2 | done | docs/seo/research/en/reaction-chain.md | 25a20b99 | H1/title mismatch fixed |
| /drills/reaction-speed/barrier-sequence-pursuit | en | drill | 2 | done | docs/seo/research/en/barrier-sequence-pursuit.md | b63d0c6a | research only; copy already clean |
| /drills/reaction-speed/fps-tracking-trainer | en | drill | 2 | done | docs/seo/research/en/fps-tracking-trainer.md | 1d71facf | research only |
| /drills/reaction-speed/market-doors-pursuit | en | drill | 2 | done | docs/seo/research/en/market-doors-pursuit.md | 2dc901c0 | demand not verified; no change |
| /drills/reaction-speed/reaction-game | en | drill | 2 | done | docs/seo/research/en/reaction-game.md | e878528f | shared-file edit: en title line only |
| /drills/reaction-speed/saccadic-gallery | en | drill | 2 | done | docs/seo/research/en/saccadic-gallery.md | de797a3b | claims hedged; percentile labels removed |
| /drills/reaction-speed/visual-tracking-speed-test | en | drill | 2 | done | docs/seo/research/en/visual-tracking-speed-test.md | 3bb93136 | shared-file edit: en title line only |
| /drills/visual-tracking/constant-slow-pursuit | en | drill | 2 | done | docs/seo/research/en/constant-slow-pursuit.md | 8bdc12b7 | verified, no copy change needed |
| /drills/visual-tracking/directional-chaos-pursuit | en | drill | 2 | done | docs/seo/research/en/directional-chaos-pursuit.md | 1dcb355f | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/dynamic-evasion-pursuit | en | drill | 2 | done | docs/seo/research/en/dynamic-evasion-pursuit.md | 65f5d320 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/ghosting-suppress-pursuit | en | drill | 2 | done | docs/seo/research/en/ghosting-suppress-pursuit.md | 07c6fc57 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/infinity-pursuit | en | drill | 2 | done | docs/seo/research/en/infinity-pursuit.md | 30e09098 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/momentum-teleport-pursuit | en | drill | 2 | done | docs/seo/research/en/momentum-teleport-pursuit.md | 1f151669 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/peripheral-ping-pursuit | en | drill | 2 | done | docs/seo/research/en/peripheral-ping-pursuit.md | 136e53b0 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/predictive-pursuit | en | drill | 2 | done | docs/seo/research/en/predictive-pursuit.md | 9f644655 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/sine-wave-pursuit | en | drill | 2 | done | docs/seo/research/en/sine-wave-pursuit.md | e8d65d44 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/spatial-shift-pursuit | en | drill | 2 | done | docs/seo/research/en/spatial-shift-pursuit.md | db0dae68 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/split-screen-tracking | en | drill | 2 | done | docs/seo/research/en/split-screen-tracking.md | 85352f9c | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/staircase-step | en | drill | 2 | done | docs/seo/research/en/staircase-step.md | b60d388a | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/strobe-prediction-pursuit | en | drill | 2 | done | docs/seo/research/en/strobe-prediction-pursuit.md | dfe41832 | verified, no copy change needed |
| /drills/visual-tracking/triangular-pursuit | en | drill | 2 | done | docs/seo/research/en/triangular-pursuit.md | 49d500f1 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual-tracking/zig-zag-path-pursuit | en | drill | 2 | done | docs/seo/research/en/zig-zag-path-pursuit.md | cb36e430 | description rewritten, direct-answer block, unsupported claims removed; title kept (no volume evidence) |
| /drills/visual/depth-perception/distance-judgment | en | drill | 2 | done | docs/seo/research/en/distance-judgment-visual.md | f4f42944 | claims/norms removed |
| /drills/visual/reaction-speed/go/no-go | en | drill | 2 | done | docs/seo/research/en/go-no-go-visual.md | edffffac | claims/norms removed; About text lives in *Client.js (D2) not edited |
| /drills/visual/reaction-speed/light-reaction | en | drill | 2 | done | docs/seo/research/en/light-reaction-visual.md | 4016b9e1 | claims/norms removed |
| /drills/visual/tracking-accuracy/moving-target | en | drill | 2 | done | docs/seo/research/en/moving-target.md | 91ef0609 | claims/norms removed |
| /drills/visual/tracking-accuracy/multiple-targets | en | drill | 2 | done | docs/seo/research/en/multiple-targets.md | 7cf3a76d | claims/norms removed |
| /drills/visual/tracking-accuracy/pursuit-tracker | en | drill | 2 | done | docs/seo/research/en/pursuit-tracker.md | 0cb933b8 | claims/norms removed |
| /drills/visual/visual-recognition/entropic-grid | en | drill | 2 | done | docs/seo/research/en/entropic-grid.md | e8ff544d | claims/norms removed; About text lives in *Client.js (D2) not edited |
| /drills/visual/visual-recognition/rhythm-anomaly | en | drill | 2 | done | docs/seo/research/en/rhythm-anomaly.md | 3d0097b3 | claims/norms removed; About text lives in *Client.js (D2) not edited |
| /drills/visual/visual-recognition/visual-search | en | drill | 2 | done | docs/seo/research/en/visual-search.md | caee69d3 | claims/norms removed |
| /de | de | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /de/drills | de | directory | 3 | done | docs/seo/research/de/drills-directory.md | 024216f, 9a86a72 | title/description lead with measured terms; sub-ms FAQ claim removed; English strings in shared client left (D2) |
| /de/drills/fps | de | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /de/drills/motor/movement-speed/rapid-tapping | de | drill | 3 | done | docs/seo/research/de/rapid-tapping.md | a4ac7d8, b00a215 | unsupported percentile table fixed; English H1 subtitle leak fixed |
| /de/drills/reaction-speed/reaction-time-test | de | drill | 3 | done | docs/seo/research/de/reaction-time-test.md | e202af3, d00b1ad | meta desc <=155; sub-ms removed |
| /de/drills/reaction-speed/reflex-training-drill | de | drill | 3 | done | docs/seo/research/de/reflex-training-drill.md | ba1278e | retitled Reflexe trainieren |
| /es | es | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /es/drills | es | directory | 3 | done | docs/seo/research/es/directory.md | ff370486 | verified, no source change: No change: title, description, single H1, FAQ and schema pass. Demand |
| /es/drills/fps | es | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /es/drills/motor/movement-speed/rapid-tapping | es | drill | 3 | done | docs/seo/research/es/rapid-tapping.md | 9fa9f7e4 | Spanish subtitle replaces English H1 leak; test de cps Bing es 29 |
| /es/drills/reaction-speed/reaction-time-test | es | drill | 3 | done | docs/seo/research/es/reaction-time-test.md | 85a8ad0a | primary moved to test de reaccion (Bing es 125) |
| /es/drills/reaction-speed/reflex-training-drill | es | drill | 3 | done | docs/seo/research/es/reflex-training-drill.md | 8e1da1ed | verified, no source change: No change: `Test de Reflejos: Múltiples Objetivos` is unique and withi |
| /fr | fr | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /fr/drills | fr | directory | 3 | done | docs/seo/research/fr/drills-hub.md | 53300e4c | hub; shared edit lib/i18n/siteLandingSeoNative.js fr entry |
| /fr/drills/fps | fr | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /fr/drills/motor/movement-speed/rapid-tapping | fr | drill | 3 | done | docs/seo/research/fr/rapid-tapping.md | 1da0fd7b | native test CPS title/H1, French subtitle, direct answer, drop unsourced percentiles |
| /fr/drills/reaction-speed/reaction-time-test | fr | drill | 3 | done | docs/seo/research/fr/reaction-time-test.md | cdea4cdb | direct answer, remove unsourced percentile/esport claims |
| /fr/drills/reaction-speed/reflex-training-drill | fr | drill | 3 | done | docs/seo/research/fr/reflex-training-drill.md | ef851360 | jeu de réflexes en ligne title/H1/description |
| /ja | ja | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /ja/drills | ja | directory | 3 | done | docs/seo/research/ja/drills-directory.md | c8a89bbb | FAQ claims corrected; metadata unchanged |
| /ja/drills/fps | ja | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /ja/drills/motor/movement-speed/rapid-tapping | ja | drill | 3 | done | docs/seo/research/ja/rapid-tapping.md | f77c1848 | primary 連打測定 (Bing 2047) |
| /ja/drills/reaction-speed/reaction-time-test | ja | drill | 3 | done | docs/seo/research/ja/reaction-time-test.md | 71f18e1a | primary 反射神経テスト・反応速度テスト |
| /ja/drills/reaction-speed/reflex-training-drill | ja | drill | 3 | done | docs/seo/research/ja/reflex-training-drill.md | d7a3dac3 | primary 反射神経ゲーム (Bing 1054) |
| /ko | ko | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /ko/drills | ko | directory | 3 | done | docs/seo/research/ko/drills-directory.md | 68bd203c | title/H1 measured head terms, FAQ rewritten, OG image; client English strings left (D2) |
| /ko/drills/fps | ko | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /ko/drills/motor/movement-speed/rapid-tapping | ko | drill | 3 | done | docs/seo/research/ko/rapid-tapping.md | 91df9b01 | cps 측정 1,051 Bing; invented percentiles removed; English H1 subtitle fixed |
| /ko/drills/reaction-speed/reaction-time-test | ko | drill | 3 | done | docs/seo/research/ko/reaction-time-test.md | b0d732a1 | 반응속도 테스트 13,122 Bing; invented percentiles/rank mapping removed |
| /ko/drills/reaction-speed/reflex-training-drill | ko | drill | 3 | done | docs/seo/research/ko/reflex-training-drill.md | 304ebefc | 순발력 테스트 게임 added |
| /pt | pt | home | 3 | done | docs/seo/research/en/home.md | 36eedbe, 141a5f5 | changed-since-09-20; localized links, drill count 81, overstated feature copy corrected |
| /pt/drills | pt | directory | 3 | done | docs/seo/research/pt/drills-directory.md | d7e9e5b7 | H1 Treinos Online GrÃ¡tis (dictionaries.js pt); FAQ fabricated claims removed; Session preferences H2 remains (D2) |
| /pt/drills/fps | pt | hub | 3 | done | docs/seo/research/en/fps-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /pt/drills/motor/movement-speed/rapid-tapping | pt | drill | 3 | done | docs/seo/research/pt/rapid-tapping.md | 636148ad | title adds CPS Test (cps test 2,491 Bing BR); percentile claims removed |
| /pt/drills/reaction-speed/reaction-time-test | pt | drill | 3 | done | docs/seo/research/pt/reaction-time-test.md | 8ffa62d5 | title Teste de Reflexo Online; percentile/rank claims removed |
| /pt/drills/reaction-speed/reflex-training-drill | pt | drill | 3 | done | docs/seo/research/pt/reflex-training-drill.md | 17e81ee1 | title Jogo de Reflexo: Multiplos Alvos; demand not verified |
| /de/drills/cognitive | de | hub | 4 | done | docs/seo/research/en/cognitive-hub.md | 10e3a68 | hub sections localized |
| /de/drills/cognitive/attention/concentration-stamina | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/cognitive/attention/divided-attention | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/cognitive/attention/multi-tasking | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/cognitive/focus/concentration-grid | de | drill | 4 | done | docs/seo/research/de/concentration-grid.md | e2f76c2 | English subtitle/start card fixed |
| /de/drills/cognitive/focus/distraction-fighter | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(14) — client About/FAQ copy is English, see D2 |
| /de/drills/cognitive/processing-speed/reaction-time | de | drill | 4 | done | docs/seo/research/de/cognitive-reaction-time.md | 57fa957 | demand not verified; election ambiguity |
| /de/drills/cognitive/processing-speed/rsvp-reader | de | drill | 4 | done | docs/seo/research/de/rsvp-reader.md | 3608cd2 | verified, no change |
| /de/drills/cognitive/processing-speed/symbol-matching | de | drill | 4 | done | docs/seo/research/de/symbol-matching.md | 236f14a | verified, no change |
| /de/drills/fps/180-degree-awareness | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/angle-hold-trainer | de | drill | 4 | done | docs/seo/research/de/angle-hold-trainer.md | c8dcd4c, 8a3f23f | H1 subtitle shortened; sub-ms and acceleration-bypass claim removed |
| /de/drills/fps/anti-strafe-jitter-duel | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/anti-zigzag-movement-trainer | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(5) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/flick-shot-training | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/flow-state | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/instant-response | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/micro-correction-precision | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/pro-smooth-pursuit | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/recoil-control | de | drill | 4 | done | docs/seo/research/de/recoil-control.md | b49c1056 | verified, no change |
| /de/drills/fps/strafe-tracking | de | drill | 4 | done | docs/seo/research/de/strafe-tracking.md | 486c087 | verified, no change |
| /de/drills/fps/target-acquisition | de | drill | 4 | done | docs/seo/research/de/target-acquisition.md | a2feb9c | verified, no change |
| /de/drills/fps/target-prioritization | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/target-switching-swarm | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/fps/vertical-air-track | de | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/memory | de | hub | 4 | done | docs/seo/research/de/memory-hub.md | c0e0bdf | title + kostenlos |
| /de/drills/memory/short-term-memory/color-sequence | de | drill | 4 | blocked | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/short-term-memory/digit-span | de | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/short-term-memory/word-recall | de | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/spatial-memory/grid-memorization | de | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/spatial-memory/object-location | de | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/spatial-memory/path-tracing | de | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/memory/working-memory/n-back | de | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /de/drills/motor | de | hub | 4 | done | docs/seo/research/de/motor-hub.md | 56ca924 | German hub dictionary keys added; sub-ms removed |
| /de/drills/motor/hand-eye-coordination/aim-trainer | de | drill | 4 | done | docs/seo/research/de/motor-aim-trainer.md | 6b6abaa | verified, no change |
| /de/drills/motor/hand-eye-coordination/drag-and-drop | de | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/motor/hand-eye-coordination/precision-flick-shot | de | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/motor/movement-speed/finger-sequencing | de | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/motor/movement-speed/keyboard-recognition | de | drill | 4 | done | docs/seo/research/de/keyboard-recognition.md | affee23 | verified, no change |
| /de/drills/motor/precision-control/steady-hand | de | drill | 4 | done | docs/seo/research/de/steady-hand.md | ebf89b0 | retitled Ruhige Hand trainieren; English H1 subtitle fixed |
| /de/drills/motor/precision-control/tracing | de | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/physical | de | hub | 4 | done | docs/seo/research/de/physical-hub.md | 43c9c48 | query-led title |
| /de/drills/physical/balance-training/stability-challenge | de | drill | 4 | blocked | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/coordination/complex-pattern | de | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/coordination/cross-body-movement | de | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/coordination/dynamic-grid-evasion | de | drill | 4 | done | docs/seo/research/de/dynamic-grid-evasion.md | e3eb3e9, e0929bb | stopped cannibalising Reaktionstest; demand not verified |
| /de/drills/physical/fitness/agility-ladder | de | drill | 4 | blocked | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/fitness/jump-sequence | de | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /de/drills/physical/fitness/speed-drill | de | drill | 4 | done | docs/seo/research/de/speed-drill.md | 993d7d2 | retitled |
| /de/drills/physical/reflex-training/drop-catch | de | drill | 4 | done | docs/seo/research/de/drop-catch.md | b548c17 | Lineal-Reaktionstest |
| /de/drills/physical/reflex-training/peripheral-threat-sweeper | de | drill | 4 | done | docs/seo/research/de/peripheral-threat-sweeper.md | de7dc87 | verified, no change |
| /de/drills/physical/reflex-training/quick-dodge | de | drill | 4 | done | docs/seo/research/de/quick-dodge.md | dfdcb0b | verified, no change |
| /de/drills/physical/reflex-training/reaction-chain | de | drill | 4 | done | docs/seo/research/de/reaction-chain.md | fa0c25e | retitled Overflicking stoppen |
| /de/drills/reaction-speed | de | hub | 4 | done | docs/seo/research/de/reaction-speed-hub.md | 4d1552e | verified, no change |
| /de/drills/reaction-speed/barrier-sequence-pursuit | de | drill | 4 | done | docs/seo/research/de/barrier-sequence-pursuit.md | 1002ae9 | Peek-Training |
| /de/drills/reaction-speed/fps-tracking-trainer | de | drill | 4 | done | docs/seo/research/de/fps-tracking-trainer.md | e6feac9 | FPS Tracking Trainer |
| /de/drills/reaction-speed/market-doors-pursuit | de | drill | 4 | done | docs/seo/research/de/market-doors-pursuit.md | 11a78fa | Angle Clearing |
| /de/drills/reaction-speed/reaction-game | de | drill | 4 | done | docs/seo/research/de/reaction-game.md | 5bf5123 | verified, no change |
| /de/drills/reaction-speed/saccadic-gallery | de | drill | 4 | done | docs/seo/research/de/saccadic-gallery.md | b837bf9, f6b4d01 | sub-ms removed |
| /de/drills/reaction-speed/visual-tracking-speed-test | de | drill | 4 | done | docs/seo/research/de/visual-tracking-speed-test.md | d7ec686 | dropped surveillance-ambiguous title |
| /de/drills/visual | de | hub | 4 | done | docs/seo/research/de/visual-hub.md | 4ed41e8 | title |
| /de/drills/visual-tracking | de | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /de/drills/visual-tracking/constant-slow-pursuit | de | drill | 4 | done | docs/seo/research/de/constant-slow-pursuit.md | afab818 | Augenfolgebewegung üben |
| /de/drills/visual-tracking/directional-chaos-pursuit | de | drill | 4 | done | docs/seo/research/de/directional-chaos-pursuit.md | 3ba8e51 | changed-since-09-20; title de-duplicated |
| /de/drills/visual-tracking/dynamic-evasion-pursuit | de | drill | 4 | done | docs/seo/research/de/dynamic-evasion-pursuit.md | 3ba8e51 | changed-since-09-20; title de-duplicated |
| /de/drills/visual-tracking/ghosting-suppress-pursuit | de | drill | 4 | done | docs/seo/research/de/ghosting-suppress-pursuit.md | 4f49576 | dropped hardware-test title; demand not verified |
| /de/drills/visual-tracking/infinity-pursuit | de | drill | 4 | done | docs/seo/research/de/infinity-pursuit.md | fb18f25 | title |
| /de/drills/visual-tracking/momentum-teleport-pursuit | de | drill | 4 | done | docs/seo/research/de/momentum-teleport-pursuit.md | 05abd51 | verified; demand not verified |
| /de/drills/visual-tracking/peripheral-ping-pursuit | de | drill | 4 | done | docs/seo/research/de/peripheral-ping-pursuit.md | 4e12250 | unique title |
| /de/drills/visual-tracking/predictive-pursuit | de | drill | 4 | done | docs/seo/research/de/predictive-pursuit.md | 7f196e8 | verified; demand not verified |
| /de/drills/visual-tracking/sine-wave-pursuit | de | drill | 4 | done | docs/seo/research/de/sine-wave-pursuit.md | fc521e9 | verified; demand not verified |
| /de/drills/visual-tracking/spatial-shift-pursuit | de | drill | 4 | done | docs/seo/research/de/spatial-shift-pursuit.md | 8698365 | verified; demand not verified |
| /de/drills/visual-tracking/split-screen-tracking | de | drill | 4 | done | docs/seo/research/de/split-screen-tracking.md | 07f9444 | verified |
| /de/drills/visual-tracking/staircase-step | de | drill | 4 | done | docs/seo/research/de/staircase-step.md | 2c533a4 | verified; demand not verified |
| /de/drills/visual-tracking/strobe-prediction-pursuit | de | drill | 4 | done | docs/seo/research/de/strobe-prediction-pursuit.md | 4cad7b5 | verified |
| /de/drills/visual-tracking/triangular-pursuit | de | drill | 4 | done | docs/seo/research/de/triangular-pursuit.md | cdb27e4 | verified; demand not verified |
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
| /es/drills/cognitive/processing-speed/reaction-time | es | drill | 4 | done | docs/seo/research/es/reaction-time.md | 79f0784c | H1 aligned to choice RT; demand not verified |
| /es/drills/cognitive/processing-speed/rsvp-reader | es | drill | 4 | done | docs/seo/research/es/rsvp-reader.md | c83c62f8 | lectura rapida online (Bing es 30); H1 client text partly English |
| /es/drills/cognitive/processing-speed/symbol-matching | es | drill | 4 | done | docs/seo/research/es/symbol-matching.md | 910ba4c6 | verified, no source change: No change; keep non-clinical wording. Demand is clinical, tool intent |
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
| /es/drills/fps/strafe-tracking | es | drill | 4 | done | docs/seo/research/es/strafe-tracking.md | 9cde1392 | tracking aim trainer (Suggest proxy) |
| /es/drills/fps/target-acquisition | es | drill | 4 | done | docs/seo/research/es/target-acquisition.md | 47db524a | verified, no source change: No change: title already leads with `Aim Trainer Online` (59 chars). |
| /es/drills/fps/target-prioritization | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/target-switching-swarm | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/fps/vertical-air-track | es | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/memory | es | hub | 4 | done | docs/seo/research/es/memory-hub.md | e3426f92 | test de memoria online title (Suggest proxy) |
| /es/drills/memory/short-term-memory/color-sequence | es | drill | 4 | pending | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20 |
| /es/drills/memory/short-term-memory/digit-span | es | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/short-term-memory/word-recall | es | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/spatial-memory/grid-memorization | es | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/spatial-memory/object-location | es | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/spatial-memory/path-tracing | es | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/memory/working-memory/n-back | es | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /es/drills/motor | es | hub | 4 | done | docs/seo/research/es/motor-hub.md | a21ac9a8 | English hub headings localized; demand not verified |
| /es/drills/motor/hand-eye-coordination/aim-trainer | es | drill | 4 | blocked | docs/seo/research/aim-trainer-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/motor/hand-eye-coordination/drag-and-drop | es | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /es/drills/motor/hand-eye-coordination/precision-flick-shot | es | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/motor/movement-speed/finger-sequencing | es | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/motor/movement-speed/keyboard-recognition | es | drill | 4 | done | docs/seo/research/es/keyboard-recognition.md | 98bd7034 | test de reaccion con teclado (Suggest proxy) |
| /es/drills/motor/precision-control/steady-hand | es | drill | 4 | done | docs/seo/research/es/steady-hand.md | a66cb840 | juego del pulso online; English subtitle leak fixed |
| /es/drills/motor/precision-control/tracing | es | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/physical | es | hub | 4 | done | docs/seo/research/es/physical-hub.md | 480dafe5 | verified, no source change: No change; title `Reflejos y Agilidad` is the closest honest framing. |
| /es/drills/physical/balance-training/stability-challenge | es | drill | 4 | done | docs/seo/research/es/stability-challenge.md | 76ec37c3 | duplicate H2/protocol titles repaired; demand not verified |
| /es/drills/physical/coordination/complex-pattern | es | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/physical/coordination/cross-body-movement | es | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/physical/coordination/dynamic-grid-evasion | es | drill | 4 | done | docs/seo/research/es/dynamic-grid-evasion.md | d1679756 | verified, no source change: No change: `Juego de reflejos con ratón` matches the Suggest phrasing. |
| /es/drills/physical/fitness/agility-ladder | es | drill | 4 | done | docs/seo/research/es/agility-ladder.md | 49a31e18 | verified, no source change: No change; page does not claim physical training. Intent fit weak, dem |
| /es/drills/physical/fitness/jump-sequence | es | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /es/drills/physical/fitness/speed-drill | es | drill | 4 | done | docs/seo/research/es/speed-drill.md | de6d9a5c | de-cannibalised from CPS page |
| /es/drills/physical/reflex-training/drop-catch | es | drill | 4 | done | docs/seo/research/es/drop-catch.md | 1f2a867d | verified, no source change: No change. |
| /es/drills/physical/reflex-training/peripheral-threat-sweeper | es | drill | 4 | done | docs/seo/research/es/peripheral-threat-sweeper.md | cf6b6bd0 | test de vision periferica online (Suggest proxy) |
| /es/drills/physical/reflex-training/quick-dodge | es | drill | 4 | done | docs/seo/research/es/quick-dodge.md | 343b053b | verified, no source change: No change. |
| /es/drills/physical/reflex-training/reaction-chain | es | drill | 4 | done | docs/seo/research/es/reaction-chain.md | f7740916 | verified, no source change: No change. |
| /es/drills/reaction-speed | es | hub | 4 | done | docs/seo/research/es/reaction-speed-hub.md | 5b00cef9 | verified, no source change: No change. |
| /es/drills/reaction-speed/barrier-sequence-pursuit | es | drill | 4 | done | docs/seo/research/es/barrier-sequence-pursuit.md | fc831c87 | Jiggle Peek Trainer title (Suggest proxy) |
| /es/drills/reaction-speed/fps-tracking-trainer | es | drill | 4 | done | docs/seo/research/es/fps-tracking-trainer.md | 49cec53f | tracking aim title (Suggest proxy) |
| /es/drills/reaction-speed/market-doors-pursuit | es | drill | 4 | done | docs/seo/research/es/market-doors-pursuit.md | f673d628 | verified, no source change: No change. |
| /es/drills/reaction-speed/reaction-game | es | drill | 4 | done | docs/seo/research/es/reaction-game.md | 8b42742d | juego de reaccion online title |
| /es/drills/reaction-speed/saccadic-gallery | es | drill | 4 | done | docs/seo/research/es/saccadic-gallery.md | 74112274 | verified, no source change: No change. |
| /es/drills/reaction-speed/visual-tracking-speed-test | es | drill | 4 | done | docs/seo/research/es/visual-tracking-speed-test.md | 714354aa | verified, no source change: No change. |
| /es/drills/visual | es | hub | 4 | done | docs/seo/research/es/visual-hub.md | be20a918 | verified, no source change: No change. |
| /es/drills/visual-tracking | es | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /es/drills/visual-tracking/constant-slow-pursuit | es | drill | 4 | done | docs/seo/research/es/constant-slow-pursuit.md | c2a95c1b | verified, no source change: No change. |
| /es/drills/visual-tracking/directional-chaos-pursuit | es | drill | 4 | done | docs/seo/research/es/directional-chaos-pursuit.md | 936d6c93 | unique title/H1; client English H2 remains |
| /es/drills/visual-tracking/dynamic-evasion-pursuit | es | drill | 4 | done | docs/seo/research/es/dynamic-evasion-pursuit.md | 9fb9ea5c | verified, no source change: No change. |
| /es/drills/visual-tracking/ghosting-suppress-pursuit | es | drill | 4 | done | docs/seo/research/es/ghosting-suppress-pursuit.md | 0ac2f357 | test de ghosting del monitor; client English H2 remains |
| /es/drills/visual-tracking/infinity-pursuit | es | drill | 4 | done | docs/seo/research/es/infinity-pursuit.md | b016e67d | verified, no source change: No change. |
| /es/drills/visual-tracking/momentum-teleport-pursuit | es | drill | 4 | done | docs/seo/research/es/momentum-teleport-pursuit.md | d0f9a2b0 | verified, no source change: No change. |
| /es/drills/visual-tracking/peripheral-ping-pursuit | es | drill | 4 | done | docs/seo/research/es/peripheral-ping-pursuit.md | d9cd3d84 | unique title/H1; client English H2 remains |
| /es/drills/visual-tracking/predictive-pursuit | es | drill | 4 | done | docs/seo/research/es/predictive-pursuit.md | 0702eee2 | verified, no source change: No change. |
| /es/drills/visual-tracking/sine-wave-pursuit | es | drill | 4 | done | docs/seo/research/es/sine-wave-pursuit.md | 31824612 | verified, no source change: No change. |
| /es/drills/visual-tracking/spatial-shift-pursuit | es | drill | 4 | done | docs/seo/research/es/spatial-shift-pursuit.md | 83757ac8 | verified, no source change: No change. |
| /es/drills/visual-tracking/split-screen-tracking | es | drill | 4 | blocked | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/visual-tracking/staircase-step | es | drill | 4 | blocked | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /es/drills/visual-tracking/strobe-prediction-pursuit | es | drill | 4 | done | docs/seo/research/es/strobe-prediction-pursuit.md | 67b01036 | verified, no source change: No change. |
| /es/drills/visual-tracking/triangular-pursuit | es | drill | 4 | done | docs/seo/research/es/triangular-pursuit.md | a37549df | verified, no source change: No change. |
| /es/drills/visual-tracking/zig-zag-path-pursuit | es | drill | 4 | done | docs/seo/research/es/zig-zag-path-pursuit.md | e58469e8 | verified, no source change: No change. |
| /es/drills/visual/depth-perception/distance-judgment | es | drill | 4 | done | docs/seo/research/es/distance-judgment.md | a2202b49 | verified, no source change: No change. |
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
| /fr/drills/cognitive/processing-speed/reaction-time | fr | drill | 4 | done | docs/seo/research/fr/cognitive-reaction-time.md | dca4c217 | demand not verified (Bing 0); distinct from reaction-time-test |
| /fr/drills/cognitive/processing-speed/rsvp-reader | fr | drill | 4 | done | docs/seo/research/fr/rsvp-reader.md | 83db22b4 | Bing lecture rapide 23; page is target detection not reader |
| /fr/drills/cognitive/processing-speed/symbol-matching | fr | drill | 4 | done | docs/seo/research/fr/symbol-matching.md | 45f6a827 | demand not verified (Bing 0); SDMT suggest proxy |
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
| /fr/drills/fps/strafe-tracking | fr | drill | 4 | done | docs/seo/research/fr/strafe-tracking.md | d84c2022 | tracking aim title, direct answer, drop rank/pro/absolute claims |
| /fr/drills/fps/target-acquisition | fr | drill | 4 | done | docs/seo/research/fr/target-acquisition.md | 2d3a327c | drop rank-mapped tiers and named-game claims, non-affiliation note |
| /fr/drills/fps/target-prioritization | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/target-switching-swarm | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/fps/vertical-air-track | fr | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory | fr | hub | 4 | done | docs/seo/research/fr/memory-hub.md | f4b56eaf | hub; shared edit lib/i18n/memoryHubNative.js fr line (jeux de memoire 179 Bing) |
| /fr/drills/memory/short-term-memory/color-sequence | fr | drill | 4 | done | docs/seo/research/fr/color-sequence.md | 3c720deb | title kept (jeu simon 28 Bing); copy cleanup |
| /fr/drills/memory/short-term-memory/digit-span | fr | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/short-term-memory/word-recall | fr | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/spatial-memory/grid-memorization | fr | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/spatial-memory/object-location | fr | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/spatial-memory/path-tracing | fr | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/memory/working-memory/n-back | fr | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor | fr | hub | 4 | done | docs/seo/research/fr/motor-hub.md | d3f923fc | hub; H1/H2 from client dictionary left (D2) |
| /fr/drills/motor/hand-eye-coordination/aim-trainer | fr | drill | 4 | blocked | docs/seo/research/aim-trainer-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor/hand-eye-coordination/drag-and-drop | fr | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor/hand-eye-coordination/precision-flick-shot | fr | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor/movement-speed/finger-sequencing | fr | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/motor/movement-speed/keyboard-recognition | fr | drill | 4 | done | docs/seo/research/fr/keyboard-recognition.md | 6f3c6c0e | test de réaction clavier title/H1, intent disambiguation FAQ |
| /fr/drills/motor/precision-control/steady-hand | fr | drill | 4 | done | docs/seo/research/fr/steady-hand.md | 2ecf3ce2 | jeu du fil électrique title/H1, French subtitle, direct answer |
| /fr/drills/motor/precision-control/tracing | fr | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/physical | fr | hub | 4 | done | docs/seo/research/fr/physical-hub.md | a732beba | hub; demand not verified (Bing 0) |
| /fr/drills/physical/balance-training/stability-challenge | fr | drill | 4 | done | docs/seo/research/fr/stability-challenge.md | 9bc4b18d | jeu de précision souris title/H1, replace placeholder headings, drop fabricated percentiles and unsourced claims |
| /fr/drills/physical/coordination/complex-pattern | fr | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/physical/coordination/cross-body-movement | fr | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/physical/coordination/dynamic-grid-evasion | fr | drill | 4 | done | docs/seo/research/fr/dynamic-grid-evasion.md | 09881a94 | demand not verified (Bing 0); retargeted away from reflex pages |
| /fr/drills/physical/fitness/agility-ladder | fr | drill | 4 | done | docs/seo/research/fr/agility-ladder.md | a3978e56 | demand not verified (Bing 0); honest framing as mouse rhythm game |
| /fr/drills/physical/fitness/jump-sequence | fr | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /fr/drills/physical/fitness/speed-drill | fr | drill | 4 | done | docs/seo/research/fr/speed-drill.md | ee95bb6f | stop cannibalising test CPS, retarget jeu de rapidité souris |
| /fr/drills/physical/reflex-training/drop-catch | fr | drill | 4 | done | docs/seo/research/fr/drop-catch.md | 3b1c1910 | demand not verified (Bing 0); test de la regle collides with menstrual intent |
| /fr/drills/physical/reflex-training/peripheral-threat-sweeper | fr | drill | 4 | done | docs/seo/research/fr/peripheral-threat-sweeper.md | bb460e00 | demand not verified (Bing 0); Suggest exercice vision peripherique |
| /fr/drills/physical/reflex-training/quick-dodge | fr | drill | 4 | done | docs/seo/research/fr/quick-dodge.md | 6e094e3f | demand not verified (Bing 0); distinct from dynamic-grid-evasion jeu d'evitement |
| /fr/drills/physical/reflex-training/reaction-chain | fr | drill | 4 | done | docs/seo/research/fr/reaction-chain.md | 840459a8 | demand not verified (Bing overflick 0) |
| /fr/drills/reaction-speed | fr | hub | 4 | done | docs/seo/research/fr/reaction-speed-hub.md | 4f792158 | hub; shared edit lib/i18n/reactionSpeedHubNative.js fr line |
| /fr/drills/reaction-speed/barrier-sequence-pursuit | fr | drill | 4 | done | docs/seo/research/fr/barrier-sequence-pursuit.md | f6f05c8 | changed-since-09-20; title de-duplicated |
| /fr/drills/reaction-speed/fps-tracking-trainer | fr | drill | 4 | done | docs/seo/research/fr/fps-tracking-trainer.md | 6ff22c49 | aim trainer en ligne title from measured Bing demand |
| /fr/drills/reaction-speed/market-doors-pursuit | fr | drill | 4 | done | docs/seo/research/fr/market-doors-pursuit.md | f24ffffd | review log, title now unique after fps-tracking retarget |
| /fr/drills/reaction-speed/reaction-game | fr | drill | 4 | done | docs/seo/research/fr/reaction-game.md | 331fd1f5 | jeu de réaction en ligne title/H1/description |
| /fr/drills/reaction-speed/saccadic-gallery | fr | drill | 4 | done | docs/seo/research/fr/saccadic-gallery.md | e7d9f7f5 | demand not verified (Bing 0); About H2 'exercices saccadiques' comes from shared client copy |
| /fr/drills/reaction-speed/visual-tracking-speed-test | fr | drill | 4 | done | docs/seo/research/fr/visual-tracking-speed-test.md | b2c1ce42 | review log, no copy change |
| /fr/drills/visual | fr | hub | 4 | done | docs/seo/research/fr/visual-hub.md | 3d9a58be | hub; demand not verified; test de vue intent is medical |
| /fr/drills/visual-tracking | fr | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | changed-since-09-20; hub sections localized |
| /fr/drills/visual-tracking/constant-slow-pursuit | fr | drill | 4 | done | docs/seo/research/fr/constant-slow-pursuit.md | 7fab0910 | review log, no copy change |
| /fr/drills/visual-tracking/directional-chaos-pursuit | fr | drill | 4 | done | docs/seo/research/fr/directional-chaos-pursuit.md | 3b984296 | unique title, soften unsourced pro/sports claims, direct answer |
| /fr/drills/visual-tracking/dynamic-evasion-pursuit | fr | drill | 4 | done | docs/seo/research/fr/dynamic-evasion-pursuit.md | 825ad732 | unique title, soften unsourced claims, direct answer |
| /fr/drills/visual-tracking/ghosting-suppress-pursuit | fr | drill | 4 | done | docs/seo/research/fr/ghosting-suppress-pursuit.md | 44ab015a | test ghosting écran title, soften unsourced claims, direct answer |
| /fr/drills/visual-tracking/infinity-pursuit | fr | drill | 4 | done | docs/seo/research/fr/infinity-pursuit.md | 64382363 | exercice des yeux en huit title, direct answer |
| /fr/drills/visual-tracking/momentum-teleport-pursuit | fr | drill | 4 | done | docs/seo/research/fr/momentum-teleport-pursuit.md | 591d84cc | poursuite oculaire title, drop unsourced game claims |
| /fr/drills/visual-tracking/peripheral-ping-pursuit | fr | drill | 4 | done | docs/seo/research/fr/peripheral-ping-pursuit.md | 3d5dcf1b | direct answer, drop unsourced audience claims |
| /fr/drills/visual-tracking/predictive-pursuit | fr | drill | 4 | done | docs/seo/research/fr/predictive-pursuit.md | b2161e34 | direct answer, drop unsourced pro/game claims |
| /fr/drills/visual-tracking/sine-wave-pursuit | fr | drill | 4 | done | docs/seo/research/fr/sine-wave-pursuit.md | a2202f77 | restore French accents, native 10-question FAQ, drop unsourced elite/FPS claims |
| /fr/drills/visual-tracking/spatial-shift-pursuit | fr | drill | 4 | done | docs/seo/research/fr/spatial-shift-pursuit.md | b5cd6892 | restore French accents, native 10-question FAQ, drop unsourced claims |
| /fr/drills/visual-tracking/split-screen-tracking | fr | drill | 4 | blocked | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual-tracking/staircase-step | fr | drill | 4 | blocked | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /fr/drills/visual-tracking/strobe-prediction-pursuit | fr | drill | 4 | done | docs/seo/research/fr/strobe-prediction-pursuit.md | 2882e656 | direct answer, drop percentile and unsourced pro claims |
| /fr/drills/visual-tracking/triangular-pursuit | fr | drill | 4 | done | docs/seo/research/fr/triangular-pursuit.md | dc630434 | direct answer, drop fabricated percentiles, fix apostrophes |
| /fr/drills/visual-tracking/zig-zag-path-pursuit | fr | drill | 4 | done | docs/seo/research/fr/zig-zag-path-pursuit.md | 8312640c | direct answer, drop fabricated percentiles, fix apostrophes |
| /fr/drills/visual/depth-perception/distance-judgment | fr | drill | 4 | done | docs/seo/research/fr/distance-judgment.md | ea272da0 | demand not verified (Bing 0); title head term kept from Suggest |
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
| /ja/drills/cognitive/focus/distraction-fighter | ja | drill | 4 | done | docs/seo/research/ja/distraction-fighter.md | fbea6269 | direct answer; privacy claim corrected |
| /ja/drills/cognitive/processing-speed/reaction-time | ja | drill | 4 | done | docs/seo/research/ja/reaction-time.md | 9409d923 | H1 選択反応時間テスト; percentile columns removed |
| /ja/drills/cognitive/processing-speed/rsvp-reader | ja | drill | 4 | done | docs/seo/research/ja/rsvp-reader.md | 657e19cc | direct answer; unsourced claims removed |
| /ja/drills/cognitive/processing-speed/symbol-matching | ja | drill | 4 | done | docs/seo/research/ja/symbol-matching.md | c62f21f1 | direct answer; demand not verified |
| /ja/drills/fps/180-degree-awareness | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/angle-hold-trainer | ja | drill | 4 | done | docs/seo/research/ja/angle-hold-trainer.md | 8326913b | 置きエイム primary (Bing 686); client About still English (D2) |
| /ja/drills/fps/anti-strafe-jitter-duel | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/anti-zigzag-movement-trainer | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(5) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/flick-shot-training | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/flow-state | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/instant-response | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/micro-correction-precision | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/pro-smooth-pursuit | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/recoil-control | ja | drill | 4 | done | docs/seo/research/ja/recoil-control.md | a5f65db6 | keep リコイル練習; overclaims softened; demand not verified in Bing |
| /ja/drills/fps/strafe-tracking | ja | drill | 4 | done | docs/seo/research/ja/strafe-tracking.md | a5a8633f | ストレイフ追いエイム (deconflicts 追いエイム練習); demand unverified |
| /ja/drills/fps/target-acquisition | ja | drill | 4 | done | docs/seo/research/ja/target-acquisition.md | 73d957a1 | keep VALORANT エイム練習 long-tail; overclaims softened |
| /ja/drills/fps/target-prioritization | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/target-switching-swarm | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/fps/vertical-air-track | ja | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory | ja | hub | 4 | done | docs/seo/research/ja/memory-hub.md | b4cb177d | audit pass, no source change |
| /ja/drills/memory/short-term-memory/color-sequence | ja | drill | 4 | blocked | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/short-term-memory/digit-span | ja | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/short-term-memory/word-recall | ja | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/spatial-memory/grid-memorization | ja | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/spatial-memory/object-location | ja | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/spatial-memory/path-tracing | ja | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/memory/working-memory/n-back | ja | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ja/drills/motor | ja | hub | 4 | done | docs/seo/research/ja/motor-hub.md | 22d22ce1 | removed sub-millisecond claim; description names 連打測定 |
| /ja/drills/motor/hand-eye-coordination/aim-trainer | ja | drill | 4 | done | docs/seo/research/ja/aim-trainer.md | e2dcc2fb | エイム練習 head term (Bing 1933) |
| /ja/drills/motor/hand-eye-coordination/drag-and-drop | ja | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/motor/hand-eye-coordination/precision-flick-shot | ja | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/motor/movement-speed/finger-sequencing | ja | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/motor/movement-speed/keyboard-recognition | ja | drill | 4 | done | docs/seo/research/ja/keyboard-recognition.md | 3819bfa6 | H1 キーボード反応速度テスト; demand unverified |
| /ja/drills/motor/precision-control/steady-hand | ja | drill | 4 | done | docs/seo/research/ja/steady-hand.md | 56d4afd9 | イライラ棒ゲーム primary (Bing 192); English H1 subtitle fixed |
| /ja/drills/motor/precision-control/tracing | ja | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical | ja | hub | 4 | done | docs/seo/research/ja/physical-hub.md | d8224751 | audit pass, no source change |
| /ja/drills/physical/balance-training/stability-challenge | ja | drill | 4 | blocked | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/coordination/complex-pattern | ja | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/coordination/cross-body-movement | ja | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/coordination/dynamic-grid-evasion | ja | drill | 4 | done | docs/seo/research/ja/dynamic-grid-evasion.md | c76a6c7e | 危険マス回避ゲーム (deconflict 反射神経テスト); demand unverified |
| /ja/drills/physical/fitness/agility-ladder | ja | drill | 4 | blocked | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/fitness/jump-sequence | ja | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ja/drills/physical/fitness/speed-drill | ja | drill | 4 | done | docs/seo/research/ja/speed-drill.md | 84a31daf | 連打ゲーム primary (Bing 1252) |
| /ja/drills/physical/reflex-training/drop-catch | ja | drill | 4 | done | docs/seo/research/ja/drop-catch.md | 43d3e9c6 | H1 simplified; demand unverified |
| /ja/drills/physical/reflex-training/peripheral-threat-sweeper | ja | drill | 4 | done | docs/seo/research/ja/peripheral-threat-sweeper.md | 9f9a36c7 | 周辺視野トレーニングゲーム; Bing 22 |
| /ja/drills/physical/reflex-training/quick-dodge | ja | drill | 4 | done | docs/seo/research/ja/quick-dodge.md | bb07d1f7 | 避けゲー title; demand unverified |
| /ja/drills/physical/reflex-training/reaction-chain | ja | drill | 4 | done | docs/seo/research/ja/reaction-chain.md | e1ea47e9 | オーバーフリック改善; demand unverified |
| /ja/drills/reaction-speed | ja | hub | 4 | done | docs/seo/research/ja/reaction-speed-hub.md | 852ccebf | audit pass, no source change |
| /ja/drills/reaction-speed/barrier-sequence-pursuit | ja | drill | 4 | done | docs/seo/research/ja/barrier-sequence-pursuit.md | f6f05c8 | changed-since-09-20; native content authored |
| /ja/drills/reaction-speed/fps-tracking-trainer | ja | drill | 4 | done | docs/seo/research/ja/fps-tracking-trainer.md | 1dae9266 | audit pass, no source change |
| /ja/drills/reaction-speed/market-doors-pursuit | ja | drill | 4 | done | docs/seo/research/ja/market-doors-pursuit.md | 2df1ff19 | audit pass, no source change; demand unverified |
| /ja/drills/reaction-speed/reaction-game | ja | drill | 4 | done | docs/seo/research/ja/reaction-game.md | 10ee4008 | 反応速度ゲーム (deconflict テスト); demand unverified in Bing |
| /ja/drills/reaction-speed/saccadic-gallery | ja | drill | 4 | done | docs/seo/research/ja/saccadic-gallery.md | 21419038 | direct answer; medical-sounding labels removed |
| /ja/drills/reaction-speed/visual-tracking-speed-test | ja | drill | 4 | done | docs/seo/research/ja/visual-tracking-speed-test.md | 237d1a47 | audit pass, no source change |
| /ja/drills/visual | ja | hub | 4 | done | docs/seo/research/ja/visual-hub.md | 4af19b8d | audit pass, no source change |
| /ja/drills/visual-tracking | ja | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /ja/drills/visual-tracking/constant-slow-pursuit | ja | drill | 4 | done | docs/seo/research/ja/constant-slow-pursuit.md | f5f6591f | audit pass, no source change; overlaps saccadic-gallery title |
| /ja/drills/visual-tracking/directional-chaos-pursuit | ja | drill | 4 | done | docs/seo/research/ja/directional-chaos-pursuit.md | 3a3fe5ce | H1 de-stuffed; demand unverified |
| /ja/drills/visual-tracking/dynamic-evasion-pursuit | ja | drill | 4 | done | docs/seo/research/ja/dynamic-evasion-pursuit.md | f6747717 | H1 de-stuffed; demand unverified |
| /ja/drills/visual-tracking/ghosting-suppress-pursuit | ja | drill | 4 | done | docs/seo/research/ja/ghosting-suppress-pursuit.md | 960418c3 | H1 shortened; demand unverified |
| /ja/drills/visual-tracking/infinity-pursuit | ja | drill | 4 | done | docs/seo/research/ja/infinity-pursuit.md | 05bd8374 | perfection wording softened; demand unverified |
| /ja/drills/visual-tracking/momentum-teleport-pursuit | ja | drill | 4 | done | docs/seo/research/ja/momentum-teleport-pursuit.md | 86450161 | overclaim softened; demand unverified |
| /ja/drills/visual-tracking/peripheral-ping-pursuit | ja | drill | 4 | pending | docs/seo/research/peripheral-ping-pursuit-2026-09-20.md |  | changed-since-09-20 |
| /ja/drills/visual-tracking/predictive-pursuit | ja | drill | 4 | done | docs/seo/research/ja/predictive-pursuit.md | e76efeec | direct answer; demand unverified |
| /ja/drills/visual-tracking/sine-wave-pursuit | ja | drill | 4 | done | docs/seo/research/ja/sine-wave-pursuit.md | e7ca2719 | direct answer; demand unverified |
| /ja/drills/visual-tracking/spatial-shift-pursuit | ja | drill | 4 | done | docs/seo/research/ja/spatial-shift-pursuit.md | d6d9b605 | direct answer; demand unverified |
| /ja/drills/visual-tracking/split-screen-tracking | ja | drill | 4 | done | docs/seo/research/ja/split-screen-tracking.md | 86bb291f | direct answer; percentile column removed; demand unverified |
| /ja/drills/visual-tracking/staircase-step | ja | drill | 4 | done | docs/seo/research/ja/staircase-step.md | 58d22b75 | direct answer; percentile column removed; demand unverified |
| /ja/drills/visual-tracking/strobe-prediction-pursuit | ja | drill | 4 | done | docs/seo/research/ja/strobe-prediction-pursuit.md | 225032a9 | direct answer; percentile column removed; demand unverified |
| /ja/drills/visual-tracking/triangular-pursuit | ja | drill | 4 | done | docs/seo/research/ja/triangular-pursuit.md | c0f6648a | direct answer; percentile column removed; demand unverified |
| /ja/drills/visual-tracking/zig-zag-path-pursuit | ja | drill | 4 | done | docs/seo/research/ja/zig-zag-path-pursuit.md | 149aee87 | direct answer; percentile column removed; demand unverified |
| /ja/drills/visual/depth-perception/distance-judgment | ja | drill | 4 | done | docs/seo/research/ja/distance-judgment.md | 0dbd91bb | English removed; promise and privacy claims corrected; Suggest-backed 練習 intent |
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
| /ko/drills/cognitive/focus/concentration-grid | ko | drill | 4 | done | docs/seo/research/ko/concentration-grid.md | 93505739 | 슐테 테이블 has no demand signal; primary 집중력 테스트 게임 (proxy); demand not verified |
| /ko/drills/cognitive/focus/distraction-fighter | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(14) — client About/FAQ copy is English, see D2 |
| /ko/drills/cognitive/processing-speed/reaction-time | ko | drill | 4 | done | docs/seo/research/ko/cognitive-reaction-time.md | 77bec732 | stop cannibalising 반응속도 테스트, remove invented percentile tiers |
| /ko/drills/cognitive/processing-speed/rsvp-reader | ko | drill | 4 | done | docs/seo/research/ko/rsvp-reader.md | 8f26d87b | 속독 훈련 title, remove invented percentile tiers and overclaims |
| /ko/drills/cognitive/processing-speed/symbol-matching | ko | drill | 4 | done | docs/seo/research/ko/symbol-matching.md | 40e2cc68 | 처리속도 테스트 title, drop clinical norm and invented percentile tiers |
| /ko/drills/fps/180-degree-awareness | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/angle-hold-trainer | ko | drill | 4 | done | docs/seo/research/ko/angle-hold-trainer.md | 1db38e3b | 프리에이밍 연습 primary, native About intro, remove invented rank benchmarks |
| /ko/drills/fps/anti-strafe-jitter-duel | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/anti-zigzag-movement-trainer | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(5) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/flick-shot-training | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/flow-state | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/instant-response | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/micro-correction-precision | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/pro-smooth-pursuit | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/recoil-control | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/strafe-tracking | ko | drill | 4 | done | docs/seo/research/ko/strafe-tracking.md | f7d8f882 | 트래킹 에임 연습 primary, remove invented rank tiers and raw-input claims |
| /ko/drills/fps/target-acquisition | ko | drill | 4 | done | docs/seo/research/ko/target-acquisition.md | 9f52a98f | remove Valorant-rank benchmark mapping and overclaims |
| /ko/drills/fps/target-prioritization | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/target-switching-swarm | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/fps/vertical-air-track | ko | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory | ko | hub | 4 | done | docs/seo/research/ko/memory-hub.md | 105311f1 | 기억력 테스트·기억력 게임 title/H1, default OG image |
| /ko/drills/memory/short-term-memory/color-sequence | ko | drill | 4 | blocked | docs/seo/research/color-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/short-term-memory/digit-span | ko | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/short-term-memory/word-recall | ko | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/spatial-memory/grid-memorization | ko | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/spatial-memory/object-location | ko | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/spatial-memory/path-tracing | ko | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/memory/working-memory/n-back | ko | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /ko/drills/motor | ko | hub | 4 | done | docs/seo/research/ko/motor-hub.md | 658c25e7 | measured CPS/aim/keyboard head terms, remove sub-ms claims, default OG image |
| /ko/drills/motor/hand-eye-coordination/aim-trainer | ko | drill | 4 | done | docs/seo/research/ko/aim-trainer.md | 197808fe | relabel invented rank tiers as reference bands, soften claims |
| /ko/drills/motor/hand-eye-coordination/drag-and-drop | ko | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/motor/hand-eye-coordination/precision-flick-shot | ko | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/motor/movement-speed/finger-sequencing | ko | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/motor/movement-speed/keyboard-recognition | ko | drill | 4 | done | docs/seo/research/ko/keyboard-recognition.md | 8d73f526 | remove invented percentile/rank claims, hedge FAQ |
| /ko/drills/motor/precision-control/steady-hand | ko | drill | 4 | done | docs/seo/research/ko/steady-hand.md | c31326c4 | 마우스 정확도 테스트 title, native subtitle, remove medical-sounding tiers and percentiles |
| /ko/drills/motor/precision-control/tracing | ko | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical | ko | hub | 4 | done | docs/seo/research/ko/physical-hub.md | 1747be94 | 순발력 테스트 in title, rewrite unsupported FAQ claims, default OG image |
| /ko/drills/physical/balance-training/stability-challenge | ko | drill | 4 | blocked | docs/seo/research/stability-challenge-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/coordination/complex-pattern | ko | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/coordination/cross-body-movement | ko | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/coordination/dynamic-grid-evasion | ko | drill | 4 | done | docs/seo/research/ko/dynamic-grid-evasion.md | 3bda5c4f | stop sharing 반응속도 테스트, native About/HUD strings, remove invented tiers |
| /ko/drills/physical/fitness/agility-ladder | ko | drill | 4 | blocked | docs/seo/research/agility-ladder-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/fitness/jump-sequence | ko | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /ko/drills/physical/fitness/speed-drill | ko | drill | 4 | done | docs/seo/research/ko/speed-drill.md | 9e863b45 | distinct 에임 반응속도 테스트 title, remove invented percentile tiers and overclaims |
| /ko/drills/physical/reflex-training/drop-catch | ko | drill | 4 | done | docs/seo/research/ko/drop-catch.md | 30e75058 | 낙하 반응속도 게임 title, remove invented percentile tiers, honest FAQ and privacy copy |
| /ko/drills/physical/reflex-training/peripheral-threat-sweeper | ko | drill | 4 | done | docs/seo/research/ko/peripheral-threat-sweeper.md | f8390ef4 | 주변시야 훈련 게임 title, drop shared 동체시력 테스트 keyword, remove invented percentile tiers and clinical claims |
| /ko/drills/physical/reflex-training/quick-dodge | ko | drill | 4 | done | docs/seo/research/ko/quick-dodge.md | 0faa8a5a | 마우스 피하기 게임 vs 공포 게임 FAQ, remove unsupported neuro and transfer claims |
| /ko/drills/physical/reflex-training/reaction-chain | ko | drill | 4 | done | docs/seo/research/ko/reaction-chain.md | 846df6c3 | 오버에임 교정 title (Suggest-supported), remove unsupported neuro and transfer claims, pointer-lock honest FAQ |
| /ko/drills/reaction-speed | ko | hub | 4 | done | docs/seo/research/ko/reaction-speed-hub.md | efdaa763 | default OG image, research log |
| /ko/drills/reaction-speed/barrier-sequence-pursuit | ko | drill | 4 | done | docs/seo/research/ko/barrier-sequence-pursuit.md | f6f05c8 | changed-since-09-20; native content authored |
| /ko/drills/reaction-speed/fps-tracking-trainer | ko | drill | 4 | done | docs/seo/research/ko/fps-tracking-trainer.md | 8f83181d | retitle away from the aim-trainer page's 에임 트레이너 target |
| /ko/drills/reaction-speed/market-doors-pursuit | ko | drill | 4 | done | docs/seo/research/ko/market-doors-pursuit.md | c7f91fab | research log, audited, no page change needed |
| /ko/drills/reaction-speed/reaction-game | ko | drill | 4 | done | docs/seo/research/ko/reaction-game.md | 3135d32f | 반응속도 게임 (measured) replaces spaced 반응 속도 테스트 게임 title |
| /ko/drills/reaction-speed/saccadic-gallery | ko | drill | 4 | done | docs/seo/research/ko/saccadic-gallery.md | 2ec322a4 | 시선 이동 훈련 게임 title, remove invented latency tiers and gaze-measurement claims |
| /ko/drills/reaction-speed/visual-tracking-speed-test | ko | drill | 4 | done | docs/seo/research/ko/visual-tracking-speed-test.md | e251bb1e | 동체시력 테스트 게임 title to stop duplicating the visual hub, non-medical description |
| /ko/drills/visual | ko | hub | 4 | done | docs/seo/research/ko/visual-hub.md | 1267c045 | 동체시력 테스트 in title, rewrite unsupported FAQ claims, default OG image |
| /ko/drills/visual-tracking | ko | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /ko/drills/visual-tracking/constant-slow-pursuit | ko | drill | 4 | done | docs/seo/research/ko/constant-slow-pursuit.md | dc7f85c8 | research log, audited, no page change needed |
| /ko/drills/visual-tracking/directional-chaos-pursuit | ko | drill | 4 | done | docs/seo/research/ko/directional-chaos-pursuit.md | d8de847c | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/dynamic-evasion-pursuit | ko | drill | 4 | done | docs/seo/research/ko/dynamic-evasion-pursuit.md | f95c9f49 | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/ghosting-suppress-pursuit | ko | drill | 4 | done | docs/seo/research/ko/ghosting-suppress-pursuit.md | ba80de4b | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/infinity-pursuit | ko | drill | 4 | done | docs/seo/research/ko/infinity-pursuit.md | b31bd19b | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/momentum-teleport-pursuit | ko | drill | 4 | done | docs/seo/research/ko/momentum-teleport-pursuit.md | 154a20fa | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/peripheral-ping-pursuit | ko | drill | 4 | done | docs/seo/research/ko/peripheral-ping-pursuit.md | 6dcf6f53 | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/predictive-pursuit | ko | drill | 4 | done | docs/seo/research/ko/predictive-pursuit.md | 32e95a30 | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/sine-wave-pursuit | ko | drill | 4 | done | docs/seo/research/ko/sine-wave-pursuit.md | 6b6eb816 | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/spatial-shift-pursuit | ko | drill | 4 | done | docs/seo/research/ko/spatial-shift-pursuit.md | ea8b9be7 | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/split-screen-tracking | ko | drill | 4 | done | docs/seo/research/ko/split-screen-tracking.md | 93514403 | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/staircase-step | ko | drill | 4 | done | docs/seo/research/ko/staircase-step.md | 53982cb9 | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/strobe-prediction-pursuit | ko | drill | 4 | done | docs/seo/research/ko/strobe-prediction-pursuit.md | cd682016 | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/triangular-pursuit | ko | drill | 4 | done | docs/seo/research/ko/triangular-pursuit.md | cf4907ab | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual-tracking/zig-zag-path-pursuit | ko | drill | 4 | done | docs/seo/research/ko/zig-zag-path-pursuit.md | 6c394a6e | descriptive distinct title, neutral practice table, honest FAQ, remove unsupported neuro and rank claims |
| /ko/drills/visual/depth-perception/distance-judgment | ko | drill | 4 | done | docs/seo/research/ko/distance-judgment.md | 259380c2 | stop presenting the looming game as an 입체시 검사/면허 검사, honest 거리감 테스트 게임 title and FAQ |
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
| /pt/drills/cognitive/processing-speed/reaction-time | pt | drill | 4 | done | docs/seo/research/pt/cognitive-reaction-time.md | 086548e0 | title Teste de Reacao de Escolha Online; percentile claims removed |
| /pt/drills/cognitive/processing-speed/rsvp-reader | pt | drill | 4 | done | docs/seo/research/pt/rsvp-reader.md | 63473fe7 | title Leitura Rapida Online; rsvp name demand not verified |
| /pt/drills/cognitive/processing-speed/symbol-matching | pt | drill | 4 | done | docs/seo/research/pt/symbol-matching.md | 2a69b0c1 | title unchanged; demand not verified |
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
| /pt/drills/fps/strafe-tracking | pt | drill | 4 | done | docs/seo/research/pt/strafe-tracking.md | 33adb7cc | title +Online; benchmark ranks relabelled; raw-input/1:1 claims removed; demand not verified |
| /pt/drills/fps/target-acquisition | pt | drill | 4 | done | docs/seo/research/pt/target-acquisition.md | c8934160 | title kept (treino de mira valorant 241 Bing BR); rank tiers + raw input claims removed |
| /pt/drills/fps/target-prioritization | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/target-switching-swarm | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/fps/vertical-air-track | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory | pt | hub | 4 | done | docs/seo/research/pt/memory-hub.md | 47942d3e | audited, no change needed; teste de memoria 147 / jogo da memÃ³ria 516 Bing BR |
| /pt/drills/memory/short-term-memory/color-sequence | pt | drill | 4 | done | docs/seo/research/pt/color-sequence.md | cff5b9cd | H1/schema/H2 unified on Jogo Simon; jogo da memoria is card-game intent; demand not verified |
| /pt/drills/memory/short-term-memory/digit-span | pt | drill | 4 | blocked | docs/seo/research/digit-span-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/short-term-memory/word-recall | pt | drill | 4 | blocked | docs/seo/research/word-recall-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/spatial-memory/grid-memorization | pt | drill | 4 | blocked | docs/seo/research/grid-memorization-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/spatial-memory/object-location | pt | drill | 4 | blocked | docs/seo/research/object-location-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/spatial-memory/path-tracing | pt | drill | 4 | blocked | docs/seo/research/path-tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/memory/working-memory/n-back | pt | drill | 4 | blocked | docs/seo/research/n-back-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/motor | pt | hub | 4 | done | docs/seo/research/pt/motor-hub.md | 02186753 | title kept; FAQ overclaims softened |
| /pt/drills/motor/hand-eye-coordination/aim-trainer | pt | drill | 4 | done | docs/seo/research/pt/aim-trainer.md | 4c0ee36f | title: treino de mira 385 + aim trainer 581 (Bing BR); rank labels neutralised |
| /pt/drills/motor/hand-eye-coordination/drag-and-drop | pt | drill | 4 | blocked | docs/seo/research/drag-and-drop-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/motor/hand-eye-coordination/precision-flick-shot | pt | drill | 4 | blocked | docs/seo/research/precision-flick-shot-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/motor/movement-speed/finger-sequencing | pt | drill | 4 | blocked | docs/seo/research/finger-sequencing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/motor/movement-speed/keyboard-recognition | pt | drill | 4 | done | docs/seo/research/pt/keyboard-recognition.md | 7b9b6446 | title kept; teste de teclado 13,118 not adopted (tester intent); percentiles removed; demand not verified |
| /pt/drills/motor/precision-control/steady-hand | pt | drill | 4 | done | docs/seo/research/pt/steady-hand.md | 2a015ba7 | title kept; percentiles/rank names removed; demand not verified |
| /pt/drills/motor/precision-control/tracing | pt | drill | 4 | blocked | docs/seo/research/tracing-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/physical | pt | hub | 4 | done | docs/seo/research/pt/physical-hub.md | 40b572a9 | title kept; fabricated 280->190 ms and transfer claims removed |
| /pt/drills/physical/balance-training/stability-challenge | pt | drill | 4 | done | docs/seo/research/pt/stability-challenge.md | 6ca6e722 | fixed duplicated headings from bad replace; native title; fabricated percentiles removed; demand not verified |
| /pt/drills/physical/coordination/complex-pattern | pt | drill | 4 | blocked | docs/seo/research/complex-pattern-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/physical/coordination/cross-body-movement | pt | drill | 4 | blocked | docs/seo/research/cross-body-movement-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/physical/coordination/dynamic-grid-evasion | pt | drill | 4 | done | docs/seo/research/pt/dynamic-grid-evasion.md | 13fe2423 | title kept (teste de reflexo 180); tiers/top 0,1%/sub-ms removed; shares keyword with reaction-time-test |
| /pt/drills/physical/fitness/agility-ladder | pt | drill | 4 | done | docs/seo/research/pt/agility-ladder.md | 5ec01bcb | description no longer claims footwork training; tiers/top 0,1% removed; demand not verified |
| /pt/drills/physical/fitness/jump-sequence | pt | drill | 4 | blocked | docs/seo/research/jump-sequence-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/physical/fitness/speed-drill | pt | drill | 4 | done | docs/seo/research/pt/speed-drill.md | 7497e8c0 | title cliques por segundo 68 Bing BR; dedup from rapid-tapping; top-% tiers removed |
| /pt/drills/physical/reflex-training/drop-catch | pt | drill | 4 | done | docs/seo/research/pt/drop-catch.md | 9796db81 | title kept; demand not verified; top-% tiers removed |
| /pt/drills/physical/reflex-training/peripheral-threat-sweeper | pt | drill | 4 | done | docs/seo/research/pt/peripheral-threat-sweeper.md | 32aa58e0 | title kept; demand not verified; tiers neutralised; title+H1 deduped: Defesa Radial: Treino de VisÃ£o PerifÃ©rica |
| /pt/drills/physical/reflex-training/quick-dodge | pt | drill | 4 | done | docs/seo/research/pt/quick-dodge.md | 325bbb2b | title kept; demand not verified; tiers neutralised |
| /pt/drills/physical/reflex-training/reaction-chain | pt | drill | 4 | done | docs/seo/research/pt/reaction-chain.md | 25f72b34 | title kept; demand not verified; tiers neutralised |
| /pt/drills/reaction-speed | pt | hub | 4 | done | docs/seo/research/pt/reaction-speed-hub.md | 9901a70a | audited, no change needed; teste de reaÃ§Ã£o 183, tempo de reaÃ§Ã£o 100 Bing BR |
| /pt/drills/reaction-speed/barrier-sequence-pursuit | pt | drill | 4 | done | docs/seo/research/pt/barrier-sequence-pursuit.md | a9ae2f58 | title Treino de Reflexo FPS: Peek e Ã‚ngulos (suggest proxy); demand not verified; lib/i18n/drills/barrierSequencePursuit.js pt title |
| /pt/drills/reaction-speed/fps-tracking-trainer | pt | drill | 4 | done | docs/seo/research/pt/fps-tracking-trainer.md | d4bb2ae8 | title Treino de Mira Tracking: Alvos MÃ³veis (suggest proxy); demand not verified; lib/i18n/drills/fpsTrackingTrainer.js pt title |
| /pt/drills/reaction-speed/market-doors-pursuit | pt | drill | 4 | done | docs/seo/research/pt/market-doors-pursuit.md | 62be6535 | audited, title kept, no change needed |
| /pt/drills/reaction-speed/reaction-game | pt | drill | 4 | done | docs/seo/research/pt/reaction-game.md | a22b0625 | title Jogo de Reflexo Online; demand not verified |
| /pt/drills/reaction-speed/saccadic-gallery | pt | drill | 4 | done | docs/seo/research/pt/saccadic-gallery.md | 47d53746 | title kept (keeps bare head term, others deduped); rank labels removed; demand not verified |
| /pt/drills/reaction-speed/visual-tracking-speed-test | pt | drill | 4 | done | docs/seo/research/pt/visual-tracking-speed-test.md | b61e0e2e | audited, no change needed; demand not verified |
| /pt/drills/visual | pt | hub | 4 | done | docs/seo/research/pt/visual-hub.md | 5b8adc2c | title kept; extraocular-muscle/UFOV/transfer claims softened |
| /pt/drills/visual-tracking | pt | hub | 4 | done | docs/seo/research/en/visual-tracking-hub.md | 10e3a68 | hub sections localized |
| /pt/drills/visual-tracking/constant-slow-pursuit | pt | drill | 4 | done | docs/seo/research/pt/constant-slow-pursuit.md | 2d3c553c | audited, no change needed; demand not verified |
| /pt/drills/visual-tracking/directional-chaos-pursuit | pt | drill | 4 | done | docs/seo/research/pt/directional-chaos-pursuit.md | 0fb53573 | title kept; elite tiers, synapse and transfer claims removed; demand not verified |
| /pt/drills/visual-tracking/dynamic-evasion-pursuit | pt | drill | 4 | done | docs/seo/research/pt/dynamic-evasion-pursuit.md | c709e475 | title kept; elite tiers/neuroplasticity/transfer claims removed; demand not verified |
| /pt/drills/visual-tracking/ghosting-suppress-pursuit | pt | drill | 4 | done | docs/seo/research/pt/ghosting-suppress-pursuit.md | 9b56e19e | title kept (teste de ghosting 134 Bing BR); elite tiers/transfer claims removed |
| /pt/drills/visual-tracking/infinity-pursuit | pt | drill | 4 | done | docs/seo/research/pt/infinity-pursuit.md | 037d970e | title kept; benchmark labels neutral; demand not verified |
| /pt/drills/visual-tracking/momentum-teleport-pursuit | pt | drill | 4 | done | docs/seo/research/pt/momentum-teleport-pursuit.md | 9ad64e82 | title kept; elite tier and FPS-benefit wording removed; demand not verified |
| /pt/drills/visual-tracking/peripheral-ping-pursuit | pt | drill | 4 | done | docs/seo/research/pt/peripheral-ping-pursuit.md | a1b8baf5 | title kept; privacy absolute and physiology claims softened; demand not verified; title deduped from saccadic-gallery/threat-sweeper |
| /pt/drills/visual-tracking/predictive-pursuit | pt | drill | 4 | done | docs/seo/research/pt/predictive-pursuit.md | 54ac910b | title kept; elite tier, plasticity and cerebellum claims removed; demand not verified |
| /pt/drills/visual-tracking/sine-wave-pursuit | pt | drill | 4 | done | docs/seo/research/pt/sine-wave-pursuit.md | b3255180 | title kept; schema/FAQ/intro rewritten as accented pt-BR (was unaccented pt-PT); overclaims removed; demand not verified |
| /pt/drills/visual-tracking/spatial-shift-pursuit | pt | drill | 4 | done | docs/seo/research/pt/spatial-shift-pursuit.md | d7731244 | title kept; schema/FAQ/intro rewritten as accented pt-BR (was unaccented pt-PT); overclaims removed; demand not verified |
| /pt/drills/visual-tracking/split-screen-tracking | pt | drill | 4 | blocked | docs/seo/research/split-screen-tracking-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual-tracking/staircase-step | pt | drill | 4 | blocked | docs/seo/research/staircase-step-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual-tracking/strobe-prediction-pursuit | pt | drill | 4 | done | docs/seo/research/pt/strobe-prediction-pursuit.md | 50b525d8 | title kept; invented percentiles/tiers removed; strobe-research claims softened; demand not verified |
| /pt/drills/visual-tracking/triangular-pursuit | pt | drill | 4 | done | docs/seo/research/pt/triangular-pursuit.md | 12569dde | title kept; Top-% percentiles and rank names removed; demand not verified |
| /pt/drills/visual-tracking/zig-zag-path-pursuit | pt | drill | 4 | done | docs/seo/research/pt/zig-zag-path-pursuit.md | 19b043a3 | title kept; Top-% percentiles and rank names removed; demand not verified |
| /pt/drills/visual/depth-perception/distance-judgment | pt | drill | 4 | done | docs/seo/research/pt/distance-judgment.md | eb6a6a97 | title no longer claims estereopsia test; tiers/claims removed; demand not verified |
| /pt/drills/visual/reaction-speed/go/no-go | pt | drill | 4 | blocked |  |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/reaction-speed/light-reaction | pt | drill | 4 | blocked | docs/seo/research/light-reaction-visual-2026-09-20.md |  | changed-since-09-20; en-prose-leak(1) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/tracking-accuracy/moving-target | pt | drill | 4 | blocked | docs/seo/research/moving-target-2026-09-20.md |  | changed-since-09-20; en-prose-leak(4) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/tracking-accuracy/multiple-targets | pt | drill | 4 | blocked | docs/seo/research/multiple-targets-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/tracking-accuracy/pursuit-tracker | pt | drill | 4 | blocked | docs/seo/research/pursuit-tracker-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/visual-recognition/entropic-grid | pt | drill | 4 | blocked | docs/seo/research/pt/entropic-grid.md | 38e596d | changed-since-09-20; title/H1 de-duplicated; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/visual-recognition/rhythm-anomaly | pt | drill | 4 | blocked | docs/seo/research/rhythm-anomaly-2026-09-20.md |  | changed-since-09-20; en-prose-leak(3) — client About/FAQ copy is English, see D2 |
| /pt/drills/visual/visual-recognition/visual-search | pt | drill | 4 | blocked | docs/seo/research/visual-search-2026-09-20.md |  | changed-since-09-20; en-prose-leak(2) — client About/FAQ copy is English, see D2 |
| /about | en | utility | 5 | done | n/a | see final commit | description <=155, scores vs analytics sentence aligned with /privacy |
| /delete-account | en | utility | 5 | done | n/a | n/a | consistent check only |
| /privacy | en | utility | 5 | done | n/a | n/a | consistent check only |
| /terms | en | utility | 5 | done | n/a | n/a | consistent check only; desc 83 chars left as is |


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
