# Live crawl - 2026-11-13/14 (skilldrills.online, deploy fdbdd200)

Playwright, 390x844, fresh context per page, cache-busted first attempt, up to 3 tries. Raw data: live_crawl_2026-11-13/results_merged.jsonl (648 rows, 0 navError after re-crawl on 2026-11-14). Script: crawl.js / analyze.js.

## Summary
- 648/648 pages HTTP 200; 574 drill pages, 567 Start buttons found and clicked.
- REAL ISSUE: React hydration error #418 (args HTML) on 46/648 (7%), intermittent, across unrelated routes incl. /privacy, /drills/physical. Every #418 page ended with `<html lang="en">`; every non-#418 locale page kept its lang (de-DE 90, es-ES 74, fr-FR 83, ko-KR 90, pt-BR 81, ja-JP 90). So a hydration failure forces a full client re-render of the root, which also wipes the head script's locale lang. Root cause: under investigation (see handoff).
- Everything else is a crawl artifact or intended:
  - h1=0 on 3 pages (/ko/drills/fps/recoil-control, /fr/drills/memory/spatial-memory/object-location, /fr/drills/motor): ChunkLoadError from ERR_CONNECTION_RESET / ERR_INTERNET_DISCONNECTED during the run -> error boundary "Try Again". Network, not code.
  - noStartButton 7: keyboard-tester x5 (no Start by design) + the 2 chunk-failure pages above.
  - noHreflang 4: /privacy /terms /about /delete-account are English-only by design.
  - failedReq 23 / console 'Failed to load resource': all ERR_INTERNET_DISCONNECTED / ERR_CONNECTION_RESET from the local connection.
- Note for owner: /delete-account h1 reads "Delete your Flint account" (another app's name). Left as is; confirm it's intended.

## #418 pages (46)
- /de/drills/fps/target-prioritization
- /es/drills/fps/target-acquisition
- /es/drills/memory/short-term-memory/digit-span
- /es/drills/physical/coordination/complex-pattern
- /es/drills/visual-tracking/ghosting-suppress-pursuit
- /es/drills/visual-tracking/peripheral-ping-pursuit
- /es/drills/visual/depth-perception/distance-judgment
- /es/drills/visual/tracking-accuracy/moving-target
- /fr/drills/fps/instant-response
- /privacy
- /pt/drills/fps/anti-strafe-jitter-duel
- /pt/drills/memory/spatial-memory/object-location
- /drills/motor/hand-eye-coordination/precision-flick-shot
- /drills/motor/precision-control/tracing
- /drills/physical/reflex-training/drop-catch
- /drills/visual/visual-recognition/entropic-grid
- /es/drills/physical
- /es/drills/motor/movement-speed/rapid-tapping
- /es/drills/physical/reflex-training/peripheral-threat-sweeper
- /es/drills/visual/tracking-accuracy/multiple-targets
- /fr/drills/memory/spatial-memory/grid-memorization
- /fr/drills/motor/precision-control/steady-hand
- /fr/drills/motor/movement-speed/keyboard-recognition
- /pt/drills/fps/recoil-control
- /pt/drills/visual-tracking/predictive-pursuit
- /pt/drills/visual/reaction-speed/go/no-go
- /pt/drills/visual/tracking-accuracy/multiple-targets
- /drills/cognitive/processing-speed/rsvp-reader
- /drills/physical
- /drills/reaction-speed/market-doors-pursuit
- /es/drills/cognitive/attention/divided-attention
- /es/drills/motor/movement-speed/keyboard-recognition
- /es/drills/motor/precision-control/steady-hand
- /es/drills/visual-tracking/momentum-teleport-pursuit
- /es/drills/visual-tracking/sine-wave-pursuit
- /es/drills/visual/visual-recognition/visual-search
- /fr/drills/fps/anti-strafe-jitter-duel
- /fr/drills/memory/short-term-memory/digit-span
- /fr/drills/motor/precision-control/tracing
- /ko/drills/visual/visual-recognition/visual-search
- /pt/drills/fps/angle-hold-trainer
- /pt/drills/fps/target-switching-swarm
- /pt/drills/physical/coordination/dynamic-grid-evasion
- /pt/drills/visual-tracking/sine-wave-pursuit
- /fr/drills/visual/tracking-accuracy/moving-target
- /ja/drills/physical/coordination/cross-body-movement
