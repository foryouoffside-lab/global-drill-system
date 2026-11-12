# VISUAL category - Phase A research brief (2026-11-12), one agent per 2 markets (run the markets one after the other)

Goal: for ONE market, a page -> primary keyword map for the localized VISUAL pages, choosing terms with
measured demand AND beatable competition, with NO two pages sharing a primary. Phase B (separate agents) implements it. You do NOT edit site code.

Pages per locale (26): hub `/<loc>/drills/visual` + visual/{depth-perception/distance-judgment, reaction-speed/go, reaction-speed/no-go, reaction-speed/light-reaction, tracking-accuracy/{moving-target,multiple-targets,pursuit-tracker}, visual-recognition/{entropic-grid,rhythm-anomaly,visual-search}}
+ hub `/<loc>/drills/visual-tracking` + visual-tracking/{constant-slow-pursuit, directional-chaos-pursuit, dynamic-evasion-pursuit, ghosting-suppress-pursuit, infinity-pursuit, momentum-teleport-pursuit, peripheral-ping-pursuit, predictive-pursuit, sine-wave-pursuit, spatial-shift-pursuit, split-screen-tracking, staircase-step, strobe-prediction-pursuit, triangular-pursuit, zig-zag-path-pursuit}.
Prioritise: the 2 hubs + the 9 visual drills. The 15 visual-tracking pursuit variants are near-duplicates: expect most to be "no-demand descriptive"; do not spend Bing rows on each of them.

## KOREA WARNING (2026-11-12)
Korean Google impressions collapsed on 2026-11-09 ~17:00 PST (Google-side volatility; pages still indexed). The ko visual pages that currently rank
(e.g. `/ko/drills/visual-tracking` for 동체시력 훈련, `/ko/drills/reaction-speed/visual-tracking-speed-test` owns 동체시력 테스트 - REACTION category, TAKEN)
must keep their current primaries: action "keep" for any ko/ja page with GSC position <= 10, unless it is factually wrong.

## Inputs (reuse first)
- GSC read-only: `python scripts/gsc/gsc.py pageopps 90 200`, and `docs/seo/research/motor-2026-11/gsc-pages-90d.csv` / `gsc-queries-90d.csv`.
- TAKEN primaries (never reuse): every page primary in `docs/seo/research/{reaction-speed,fps,motor,physical}-2026-11/<market>.md`, `docs/seo/research/reaction-speed-2026-11/PASS3_PROGRESS.md`, `lib/i18n/reactionSpeedHubNative.js`.
- Older data: `docs/seo/research/demand-2026-10/`, `docs/seo/research/<loc>/`, `scripts/keywords/out/*constant_slow_pursuit*`, memory note: visual/tracking demand was ~0 in non-ko markets in Sept (re-verify, don't assume).
- Real mechanic: read each client briefly (`app/drills/visual/**/**Client.*`, `app/drills/visual-tracking/<drill>/*`, `trackingCanvas.ts`). A keyword must describe what the drill really does. No eyesight/medical/"improves vision" claims.
- Current titles: `grep -m1 -o 'title: *"[^"]*"' app/<loc>/drills/visual*/**/page.js` (some come from lib/i18n files).

## Measurement caps (OWNER RULE - ban risk)
- NO Google/Naver/Yahoo searches in Chrome, no WebSearch. NO loops, NO retries beyond one.
- Per MARKET: max 1 run of `python scripts/keywords/bing_kw.py --file <tsv>` with <= 40 phrases, full locale codes (ko-KR, ja-JP, de-DE, fr-FR, pt-BR, es-ES). LAST row = canary with known volume (ko 클릭속도 테스트, ja 連打測定, de reflex test, fr reflex test, es test de reacción, pt coordenação motora): if the canary is 0/nodata, that market's zeros are UNKNOWN.
  Agents share a lock: run your two markets' Bing batches strictly one after the other.
- Per MARKET: max 10 autocomplete calls: `python scripts/keywords/autocomplete.py "<seed>" <cc> <lang> --expand`.
- Per MARKET: max 3 `node scripts/keywords/serp_probe.mjs "<query>" <cc> <lang> docs/seo/research/visual-2026-11/_work-<m>/serp.jsonl` - only for candidate primaries with Bing volume >= 50.

## Competition (the owner wants low competition + high demand)
Bing returns volume only - there is NO difficulty score; never write "KD" numbers. Competition evidence, in order:
1. our own GSC position for the term (pos <= 15 = proven beatable);
2. serp_probe: who holds the top 10 (big brands/apps/medical sites = hard; small sites, forums, generic pages, no exact-intent tool = beatable);
3. otherwise "UNKNOWN".
Rank opportunities by volume x beatability; a 50/mo term we can win beats a 5,000/mo term owned by a medical/eye-test brand.

## Deliverables (only these files)
- `docs/seo/research/visual-2026-11/<market>.md`: table `page | current title | proposed primary | secondaries | evidence (Bing, GSC impr/pos, AC) | competition note | action (keep/retarget/no-demand descriptive)`; "collisions resolved"; "kill list" (zero-demand phrases tested). Write incrementally.
- `docs/seo/research/visual-2026-11/<market>.csv` raw rows; raw output under `_work-<market>/` (kw.tsv input, kw.jsonl, ac.txt, serp.jsonl). Write `_work-<market>/kw.done` after the Bing run.
- RESUME rule: if `_work-<m>/kw.done` exists, never re-run Bing for that market; reuse logged AC/serp calls (caps count across sessions).
- Final reply <= 250 words: top 5 opportunities per market with numbers + competition, collisions, decisions needed.
