# Visual-tracking scoring audit (2026-11-13)

Scope: 15 clients in `app/drills/visual-tracking/*/` + `app/drills/visual-tracking/trackingCanvas.ts`.

## Headline

- **None of the 15 drills computed any performance metric.** No score, accuracy, grade, hit count or time-on-target existed. End screens only echo settings (duration, speed, sessions completed, fixed/random speed). So there were no score-formula bugs, no div-by-zero, no NaN, no >100%, no unreachable grade thresholds. The gap is that there was nothing to measure.
- **All 15 end screens claim "Smooth Pursuit Calibrated".** Nothing is calibrated. False claim. Fixed in the pilot (`ui.calibrated`, 7 locales); hardcoded English in the other 14.
- Eye position is never recorded (copy says so correctly). The only measurable signal is the **pointer**, so any metric must be labelled as pointer-to-target distance, never as eye/gaze/pursuit gain.

## Shared behaviour (all 15)

| Item | Finding | Severity |
|---|---|---|
| Loop | `requestAnimationFrame`, `isFrameSkippable` (<13 ms gap skipped), `dt = min(raw/1000, 0.1)`. Motion is dt-based except where noted per drill. | — |
| rAF leaks | None. `useLayoutEffect` cleanup cancels rAF + disconnects ResizeObserver; `endGame` cancels too; unmount clears interval/timeouts. | OK |
| Tab hidden / blur | `useUnexpectedExitGuard` exits the drill on `visibilitychange` hidden / `pagehide`, so hidden time never reaches a results screen. | OK |
| Session clock | 1 s `setInterval` tick count, not elapsed time; drifts late under load. Harmless for metrics if they use sampled dt, not the nominal duration. | Low |
| Canvas sizing | Buffer sized from the **container** rect (includes 1 px border) while the canvas CSS box is the padding box: 2 px scale mismatch between drawn coords and pointer coords. Only in windowed mode; play is always fullscreen (`border-none`), so negligible in practice. Pilot now measures `cvs.getBoundingClientRect()`. | Low |
| Touch input | Canvas has no `touch-action: none`; a touch drag scrolls/pans and fires `pointercancel`/`pointerleave`, so touch pointer samples drop out. Pilot adds `touch-none`. | Medium (once metrics exist) |
| DPR change | Moving window between monitors does not resize buffer (no ResizeObserver event). Cosmetic only; transform matches buffer. | Low |
| Random Speed | `perturb` uses absolute `ts`, deterministic sinusoid; effective speed 0.6x-~2.4x base. Fine. | — |
| Cursor rule | `setTargetCursor` missing in strobe-prediction, triangular, zig-zag (hand cursor over target per `lib/canvasCursor.js`). | Low |

## Per drill

| Drill | Motion model | Error sampling / metrics before | Bugs | Sev |
|---|---|---|---|---|
| constant-slow-pursuit (PILOT) | Lissajous `x=cx+0.38W cos 3θ`, `y=cy+0.38H sin 4θ`, `θ += 0.22·speed·dt` (period 28.6 s at 1x). | None. | "Calibrated" false claim (fixed). Name says "constant" but tangential speed varies from ~0 to max along the curve (constant *parametric* rate only); es title "Seguimiento Lento Constante" overstates. Touch + 2 px sizing (fixed). | Med / Low |
| directional-chaos-pursuit | Random-walk velocity: `v += U(-0.4,0.4)·(sdt/0.016)`, clamp ±12·speed, bounce ×-1.05. | None. | Nudge scales linearly with dt, so velocity variance per second ∝ dt: jitter is frame-rate dependent (30 fps ≈ 2x the 60 fps diffusion, 72 drawn fps ≈ 0.83x). Fix: scale nudge by `sqrt(sdt/0.016)`. | Med |
| dynamic-evasion-pursuit | Constant velocity; every 500 speed-scaled ms new random heading, `|v|=(5-10)·speed` px/16 ms; bounce ×-1.05. | None. | With Random Speed, `shiftInterval` is re-rolled **every frame** (`350+rand·300`), so a shift fires on the first frame the timer exceeds a fresh draw: biased toward 350 ms and frame-rate dependent. Roll once per shift. | Low-Med |
| ghosting-suppress-pursuit | Constant velocity (5,5) px/16 ms × speed, elastic bounce. | None. | None in motion. | — |
| infinity-pursuit | Lemniscate, `t += 0.8·speed·dt`. | None. | None (dt-based). | — |
| momentum-teleport-pursuit | Constant velocity bounce + teleport to random point every 1200 speed-scaled ms. | None. | Same per-frame re-roll of `teleportInterval` (800-1400) under Random Speed. Teleport range `2r + rand·(W-4r)` goes negative if `W<4r` (not reachable with 50 px max size). Metrics: teleport frames create legit error spikes; report separately or exclude a reacquire window. | Low |
| peripheral-ping-pursuit | Fixation cross; target spawns with `P=0.025·speed` **per drawn frame**, lives `max(15,45/speed)·(1/60)` s. | None. | Spawn rate is per frame: 60 drawn fps ≈ 1.5·speed/s, 72 fps ≈ 1.8·speed/s, 30 fps half. Fix: `P = 1-exp(-rate·dt)`. Not a pursuit task: do NOT add pursuit metrics; skip or show nothing new. | Med |
| predictive-pursuit | Every 2.2 speed-scaled s pick new target; position eases `s += (t-s)·3.5·sdt`. | None. | (1) Euler easing unstable when `3.5·sdt > 1` (overshoot) and diverges for `>2`: reachable on a 100 ms hitch at speed ≥ 5.8x. Use `1-exp(-3.5·sdt)`. (2) Random Speed re-rolls `cycleTime` per frame (same bias). (3) `landed`/`travel` set but `landed` never read. | Med |
| sine-wave-pursuit | `x += 220·dir·speed·dt` between 5%-95% W; `y = H/2 + 0.28H·sin(0.015·x)`. | None. | Wave count depends on absolute px width (wider screen = more cycles, steeper path); path speed along curve not constant. Not a scoring bug; note for labels. | Low |
| spatial-shift-pursuit | Constant velocity; with `P=0.015` (0.03 random) **per drawn frame** each axis velocity ×±(0.8-1.3); clamp ±18 only inside the shift branch; bounce ×-1.02. | None. | Shift probability per frame (fps-dependent, as peripheral). Bounce ×1.02 can push |v| past 18 between shifts (clamp not applied). | Med |
| split-screen-tracking | Left target vertical, right target horizontal, 220 px/s × speed, bounce at 10%/90%. | None. | None in motion. Metrics: two targets; sample against the **nearest** target (or report per half). | — |
| staircase-step | Progress 0→1→0 along precomputed polyline, `progress += 0.22·dir·sdt`; points rebuilt on resize. | None. | End clamp drops overshoot remainder (negligible). | Low |
| strobe-prediction-pursuit | Constant velocity bounce; `strobeTimer += speed` **per drawn frame**, visible <60, hidden 60-90. | None. | Occlusion timing is frame-counted: 1.0 s/0.5 s at 60 drawn fps, 0.83/0.42 s at 72 (144 Hz), 2.0/1.0 s at 30 fps. The occlusion window *is* the stimulus, so this is the worst timing bug. Fix: `strobeTimer += speed·dt·60`. Metrics: sample true position during both phases, with separate accumulators for visible vs occluded. | High |
| triangular-pursuit | Linear interpolation between 3 vertices, `t += 0.65·sdt` per edge (edge time constant, so px speed differs per edge length). | None. | `t=0` at vertex discards overshoot (up to ~10% of an edge per vertex at 9x on a 100 ms hitch). Edge lengths unequal (top-to-bottom edges longer than base) so speed differs per edge. | Low |
| zig-zag-path-pursuit | Same polyline model as staircase (horizontal zig-zag). | None. | Same end-clamp remainder. | Low |

## Shared API added (`app/drills/visual-tracking/trackingCanvas.ts`)

```ts
createPursuitMetrics(): PursuitMetrics
samplePursuit(m, dtMs, pointer: {x,y,active}|null, targetX, targetY, radius): void
summarizePursuit(m): PursuitSummary
// PursuitSummary = { sampledSec, timeOnTargetPct, pointerCoveragePct,
//   meanErrorPx, rmsErrorPx, meanErrorRadiusPct, rmsErrorRadiusPct }  (null when no data)
```

Definitions (all time-weighted, rectangle rule over the elapsed interval of each drawn frame):

- Samples only when `0 < dtMs <= 100` and `document.hidden` is false. Gaps > 100 ms (tab return, hitches) are dropped, never counted.
- `timeOnTargetPct` = time with pointer within `radius` of target centre / all sampled time (pointer absent counts as off target). Capped at 100.
- `meanErrorPx`, `rmsErrorPx` = dt-weighted mean / RMS Euclidean distance pointer-to-centre, over time the pointer is present only.
- `*RadiusPct` = error / time-weighted target radius × 100 (100% = pointer on the target edge).
- `pointerCoveragePct` = time with pointer present / sampled time.
- Frame-rate independence checked: synthetic 60 vs 144 fps run gives the same numbers to <0.3 pp.

## Pilot (constant-slow-pursuit) changes

- `pursuitRef = useRef(createPursuitMetrics())`, reset in `enterDrill`, `samplePursuit(...)` right after target position, summary snapshot in `endGame` (`setPursuitSummary`).
- End screen: Time on target (%), Mean distance error (px + % of target radius), RMS distance error (px + %), Session time, Base speed, Sessions completed; dropped the "Speed Acceleration" echo tile; added `metricsNote` (pointer, time-weighted, eye position not recorded).
- `calibrated` copy replaced with "Pointer tracking summary" in all 7 locales; new keys `timeOnTarget, meanError, rmsError, ofRadius, metricsNote` in `lib/i18n/drills/constantSlowPursuitNative.js`.
- Canvas `touch-none`; buffer sized from the canvas rect, not the container.

## Rollout recipe (other 14 drills)

1. Import `createPursuitMetrics, samplePursuit, summarizePursuit, type PursuitSummary` from `../trackingCanvas`.
2. Add `const [pursuitSummary, setPursuitSummary] = useState<PursuitSummary | null>(null);` and `const pursuitRef = useRef(createPursuitMetrics());`.
3. `enterDrill`: `pursuitRef.current = createPursuitMetrics();` next to the trackingState reset.
4. `endGame`: `setPursuitSummary(summarizePursuit(pursuitRef.current));` before `setGameState('gameOver')`.
5. In `draw`, after the target position is final for the frame: `samplePursuit(pursuitRef.current, deltaTimeMs, mousePosRef.current, tx, ty, targetSize);` Pass **raw `deltaTimeMs`**, not the clamped `dt`.
   - split-screen: pick the nearer of the two targets each frame (or two accumulators, left/right).
   - strobe: two accumulators (`visible`, `occluded`), sample the true position in both phases; show both.
   - momentum-teleport: sample normally; optional second accumulator excluding 300 ms after each teleport.
   - peripheral-ping: skip (fixation task, no continuous target). Only remove "Calibrated".
6. Canvas className: add `touch-none`. In `updateSize` use `cvs.getBoundingClientRect()`.
7. End screen: copy the pilot's 3-tile `.map` block; replace the "Speed Acceleration" tile; add the metrics note. Labels use `copy?.timeOnTarget || 'Time on target'` etc. (these drills use `copy?.x || "English"` fallbacks); add keys to the drill's i18n native file if it has one.
8. Replace hardcoded "Smooth Pursuit Calibrated" with "Pointer tracking summary".
9. Fix that drill's row above (strobe timer → `speed·dt·60`; per-frame probabilities → `1-exp(-rate·dt)`; re-roll random intervals once per event; predictive easing → `1-exp(-k·sdt)`; chaos nudge → `sqrt`).
10. Copy rules: never call it eye tracking accuracy, gaze error, pursuit gain, or compare to norms/percentiles; no grades; no ms-precision claims. Check FAQ/About text that says "there is no score" and update it to "the page reports pointer-to-target distance; it does not record eye position".
11. Verify: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/drills/visual-tracking/<slug>` = 200 and `bash docs/seo/tools/aud.sh drills/visual-tracking/<slug>` OK.
