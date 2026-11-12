# VISUAL Phase B brief (2026-11-12) - 7 agents, each owns 2-5 VISUAL pages x 6 locales

Goal: apply the Phase A keyword maps to the localized VISUAL pages and make every mechanic claim match the code.
Maps (source of truth): `docs/seo/research/visual-2026-11/<loc>.md` (ko, ja, de, fr, pt, es) -> page table `proposed primary` + `action`,
and the cross-market decisions in `docs/seo/research/visual-2026-11/_COORDINATOR_QUEUE.md` (wins over a single map when they differ).
"no-demand descriptive" = no measured term: write an honest, natural native title that says what the drill is; do not chase a zero-volume phrase and do not borrow another page's primary.

## Ownership (exclusive - 5 other agents edit other VISUAL pages at the same time)
- ONLY `app/{ko,ja,de,fr,pt,es}/drills/visual/<group>/<your-drill>/page.js` or `app/{loc}/drills/visual-tracking/<your-drill>/page.js` (hub agent: `app/{loc}/drills/visual/page.js` + `app/{loc}/drills/visual-tracking/page.js`).
- EN client copy: you MAY fix wrong mechanic text inside the `RULES_ITEMS` / FAQ / about string constants of YOUR drill's client `app/drills/visual/<group>/<drill>/*Client.* or app/drills/visual-tracking/<drill>/*` (strings only, no logic).
- Read-only: the client (+ hooks/constants it imports), the EN page `EN page.js of that drill`.
- Edit NOTHING else (not lib/i18n/drillNames.js, not dictionaries.js, not lib/drillSeo.js, not other categories). If a fix needs another file, list it under "decisions needed".
- Never `git checkout/reset/stash/commit`, never build, never start a dev server (one already runs on :3000).

## Rules
1. NO external queries (no Google/Naver/Bing/autocomplete/serp_probe/WebSearch). All data is in this folder. Unknown = UNKNOWN.
2. Read the client first. Every mechanic claim (duration, start clock, time bonus/penalty, points, combo cap, levels, target size/speed, input, what counts as hit/miss) must match the code. Known facts:
   - speed-drill, drop-catch, peripheral-threat-sweeper: TIME_PER_HIT=2 -> the -1 s penalty is FORCED ON (`drillPenalty.isEnabled(TIME_PER_HIT === 2)`), not "if enabled in settings", and it is 1 s (not 0.8 s). reaction-chain: TIME_PENALTY=1, check how it is applied.
   - Any other "penalty if enabled in settings" claim is false: lib/drillPenalty has no UI toggle (only forced penalties fire).
   - keydown handlers in physical clients: verify what keys do (likely Escape/exit only). Claim a key only if the handler acts on it. These are mouse/touch browser drills.
   - speed-drill clicks moving shrinking targets; it does NOT measure clicks per second -> remove every CPS / clicks-per-second / Klickgeschwindigkeit / クリック速度測定 / 連打 / Test CPS / Cliques por Segundo claim (motor rapid-tapping owns those terms).
   - drop-catch is NOT a ruler-drop test; jump-sequence is NOT real jump/plyometric training; agility-ladder is NOT a real ladder workout. No real-fitness, medical, eyesight or "sports performance" outcome claims anywhere.
3. No fabricated stats: no aggregateRating, no percentiles, no invented ms norms, no user counts, no guaranteed improvement, no "used by pros/athletes". Tier/benchmark tables may stay only if labelled as SkillDrills practice bands.
4. FAQ JSON-LD must equal the visible FAQ (both from the same array).
5. Native phrasing a local user would type. Title <= ~60 chars incl. " | SkillDrills"; description 110-160 chars; exactly one <h1> (title text only, no subtitle concatenated). Primary in title, H1, description, first paragraph; secondaries naturally in body/FAQ. Several pages carry 2-3 `title:` fields (metadata, openGraph, twitter, and sometimes an Object.assign override later in the file that WINS) - change all of them consistently and remove dead duplicate base titles that describe false mechanics.
6. Do not take another page's primary. TAKEN: every FPS, MOTOR and REACTION-SPEED primary listed in fps-2026-11/<loc>.md, motor-2026-11/<loc>.md, reaction-speed-2026-11 maps/PASS3_PROGRESS.md and the TAKEN lists in each physical <loc>.md. Physical hub must not lead with reaction hub terms (반응속도 훈련, 反射神経 鍛える, Reaktionstraining, temps de réaction, jogos de reflexo, test de reflejos) nor 순발력 테스트 (ko reflex-training-drill).
7. dateModified -> "2026-11-12" only in locales you changed.
8. Order per page: ko -> ja -> de -> fr -> pt -> es. After each locale edit run:
   `PYTHONIOENCODING=utf-8 python docs/seo/research/reaction-speed-2026-11/_audit.py <loc>/drills/visual/<group>/<drill> (or <loc>/drills/visual-tracking/<drill>)` (no leading slash; first compile ~60 s; a 404/500 during someone else's recompile = retry once after 30 s). Must print `OK`.
   Then append one line to `docs/seo/research/visual-2026-11/_passB_<drill>.log`: `<loc> | primary | evidence | what changed | audit OK`. This log is the resume point: on restart skip logged locales.
9. If the Debug2Fix edit gate blocks you: this is static copy work. Run `node .claude/hooks/debug-gate.js ack <session_id from the block message>` and retry once; if still blocked, stop and report.
10. Files are large; Read with offset/limit or Grep, make small exact Edits, re-read the region before each Edit.

## VISUAL-specific rules (win over the generic text above)
- KOREA: Google Korea impressions collapsed 2026-11-09 (Google-side). For ko AND ja pages whose map action is "keep" or GSC pos <= 10: do NOT change title/H1/primary; only fix false claims in body/FAQ.
- light-reaction, go, no-go under /drills/visual/reaction-speed/ are REACTION-category pages already done - NOT yours, do not edit.
- No eyesight/medical/clinical claims: not an eye test, not stereo/3D vision (flat monitor), not a flicker-fusion or 三桿法 device, not a monitor ghosting/response-time test, not vision therapy. Ghosting-suppress-pursuit pages titled as a monitor test must be retitled to what the drill does.
- Off-intent big terms must NOT be targeted: fr 'recherche visuelle' 39k, es 'búsqueda visual' 20k (image search) - visual-search may keep the phrase descriptively ("Test de recherche visuelle") but never claim it as demand.
- Priority retargets from the maps: ja distance-judgment -> 深視力トレーニング / 深視力 (add: browser practice, not the 三桿法 license test); ja visual hub 動体視力トレーニング (if map says so); de visual-search 'Visuelle Suche Test'.
- The 15 visual-tracking pursuit variants are near-duplicates: most are "no-demand descriptive" - give each a distinct honest native title (path shape / mechanic) so no two pages share a primary.

## Groups
1. hubs: visual + visual-tracking
2. visual/depth-perception/distance-judgment + visual/visual-recognition/rhythm-anomaly
3. visual/tracking-accuracy/{moving-target, multiple-targets, pursuit-tracker}
4. visual/visual-recognition/{entropic-grid, visual-search}
5. visual-tracking/{constant-slow-pursuit, directional-chaos-pursuit, dynamic-evasion-pursuit, ghosting-suppress-pursuit, infinity-pursuit}
6. visual-tracking/{momentum-teleport-pursuit, peripheral-ping-pursuit, predictive-pursuit, sine-wave-pursuit, spatial-shift-pursuit}
7. visual-tracking/{split-screen-tracking, staircase-step, strobe-prediction-pursuit, triangular-pursuit, zig-zag-path-pursuit}

## Final reply (<= 200 words)
Per locale: final title. Mechanic mismatches fixed (incl. EN client strings). Card-name changes the coordinator must sync in lib/i18n/drillNames.js (old -> new per locale). Decisions needed. Any audit not OK.

Also report: card-name changes for lib/i18n/drillNames.js (old -> new per locale) - coordinator applies them; do NOT edit drillNames.js / drillSeo.js / dictionaries.js.
