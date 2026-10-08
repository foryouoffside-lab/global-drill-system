# HANDOFF — Parallel SEO / AEO / GEO run (2026-10-08)

Trigger for a new chat (send exactly this):

> Run docs/seo/HANDOFF_PARALLEL_RUN.md

Resume-safe. The state is in git branches, git worktrees, `docs/seo/runs/*.md` and this file. Read this file fully, then `CLAUDE.md`, `AGENTS.md`, `3.md`, `2.md`, `docs/seo/GLOBAL_PAGE_SEO_AEO_GEO_STANDARD.md`, `docs/seo/NO_TRANSLATION_NATIVE_SEARCH_MANDATE.md`.

---

## 1. WHAT HAPPENED

- `main` and `origin/main` were fast-forwarded to `98a127cd` (the 13-commit SEO/AEO/GEO branch `ccr-109ee186-jucejh` was merged and pushed).
- `3.md` (laptop run) was executed in parallel: 11 agents, each in its own git worktree on its own branch, each with a disjoint page set. None pushed. None edited `docs/seo/PAGE_QUEUE.md` (coordinator-only).
- Owner pre-flight in `3.md` §0 was left blank, so defaults apply: D2 no `*Client.js` edits; D4 soften copy only; D6 keep localized pages; never push to `main` without the owner saying so (the owner has pushed `main` before, so ask first).
- The session hit rate limits twice (resets 03:30 and 08:30 IST). 8 agents finished; 3 (ko, pt, fr) were cut off mid-assignment. Nothing has been merged into `main` yet. Nothing from this run has been pushed.

## 2. AGENT / BRANCH / WORKTREE TABLE

Repo root: `C:\Users\sangmesh\Desktop\global-drill-system-nextjs - Copy`. Worktrees live under `.claude\worktrees\agent-<id>`. Branch is `worktree-agent-<id>`. Commit counts are ahead of `main`.

| Agent | Scope | Worktree id | Commits | Status |
|---|---|---|---|---|
| hubs | EN `/drills`, memory/motor/physical/reaction-speed/visual hubs, 3 reaction pages, about/privacy/terms/delete-account | a7388f938f43e39c0 | 9 | DONE 13/13 |
| fps | EN `/drills/fps/*` (15) | a392a20418ba3b347 | 16 | DONE 15/15 |
| memmotor | EN memory (7) + motor (8) | ae694e1374a25f8bf | 16 | DONE 15/15 |
| t2a | EN physical (11), reaction-speed (6), cognitive (7) | a10bddfa3f19b9fb3 | 25 | DONE 24/24 |
| t2b | EN visual-tracking (15) + visual (9) | a7b30d9224759d01b | 25 | DONE 24/24 |
| de | `/de/**` pending rows | aace33775e6245275 | 51 | DONE 46/46 |
| ja | `/ja/**` pending rows | af877ee5ceabfb069 | 47 | DONE 46 of ~47 |
| es | `/es/**` pending rows | a1c0a0b6b9c96916a | 45 | DONE 44 of 45 |
| ko | `/ko/**` pending rows | afec180c078e087bf | 20 | PARTIAL ~20 of ~46 |
| pt | `/pt/**` pending rows | abd694f9d76b521f5 | 8 | PARTIAL ~8 of ~46 |
| fr | `/fr/**` pending rows | a07126fbb562f5026 | 25 | PARTIAL ~25 of ~44 |

Run logs: `docs/seo/runs/<agent>.md` inside each worktree (one line per page: url, status, sha, research file, notes). Research logs: `docs/seo/research/<locale>/<slug>.md`.

### Unfinished-agent details

**ko** (worktree `agent-afec180c078e087bf`)
- Committed: `/ko/drills`, motor-hub, memory-hub, physical-hub, reaction-speed-hub, visual-hub, rapid-tapping, reaction-time-test, reflex-training-drill, concentration-grid, aim-trainer, angle-hold-trainer, strafe-tracking, target-acquisition, steady-hand, keyboard-recognition, dynamic-grid-evasion, symbol-matching, rsvp-reader, cognitive reaction-time.
- UNCOMMITTED: `docs/seo/runs/ko.md` and `.kojob/` (helper scripts: audit.mjs, fixtable.py, mk.py, naver.mjs) are untracked. Commit `ko.md`; do not commit `.kojob/`.
- Remaining: the rest of the `/ko/**` pending rows (visual-tracking pursuit drills, remaining physical, reaction-speed, fps, memory, distraction-fighter, etc.). Derive from `docs/seo/PAGE_QUEUE.md` rows with locale `ko`, status `pending`, minus the committed list above.
- Measured so far: 반응속도 테스트 13,122 (Bing KR), cps 측정 1,051.

**pt** (worktree `agent-abd694f9d76b521f5`)
- Committed: cognitive reaction-time, rapid-tapping, reaction-game, reaction-time-test, reflex-training-drill, rsvp-reader, stability-challenge, symbol-matching.
- UNCOMMITTED: modified `app/pt/drills/fps/strafe-tracking/page.js` (in progress; review the diff, finish or discard, then commit).
- Known bug to fix: `stability-challenge` pt locale file had a bad global string replace that overwrote the guide intro, protocol, FAQ section, rule and about-card titles with the site title (duplicate H2s). The pt agent was told; confirm it is fixed (commit `seo(pt/stability-challenge)` exists, verify the rendered page).
- Remaining: all other `/pt/**` pending rows (~38).

**fr** (worktree `agent-a07126fbb562f5026`)
- Committed: constant-slow-pursuit, directional-chaos-pursuit, dynamic-evasion-pursuit, fps-tracking-trainer, ghosting-suppress-pursuit, infinity-pursuit, keyboard-recognition, market-doors-pursuit, momentum-teleport-pursuit, peripheral-ping-pursuit, predictive-pursuit, rapid-tapping, reaction-game, reaction-time-test, reflex-training-drill, sine-wave-pursuit, spatial-shift-pursuit, speed-drill, steady-hand, strafe-tracking, strobe-prediction-pursuit, target-acquisition, triangular-pursuit, visual-tracking-speed-test, zig-zag-path-pursuit.
- UNCOMMITTED: modified `app/fr/drills/physical/balance-training/stability-challenge/page.js` (in progress). Untracked scratch files in the worktree root (`_audit.mjs`, `_before.txt`, `_fixapos.mjs`, `_o.html`, `_pending.txt`, `_snip.js`, `_splice.mjs`): do NOT commit; delete when done.
- No `docs/seo/runs/fr.md` exists; rebuild it from `git log main..worktree-agent-a07126fbb562f5026`.
- Remaining: hubs (`/fr/drills`, memory, motor, physical, reaction-speed, visual), cognitive, remaining fps/motor/physical/memory drills, stability-challenge (in progress). Derive from the queue.

## 3. RESULTS TO CARRY INTO THE REPORT

Cross-agent patterns (all verified only from agent reports, not yet by the coordinator):
- Invented percentile / population-rank tables ("Top 0.1%", "上位N%", "Clinical 99th Percentile", rank-named tiers) removed on 80+ pages.
- Unsourced claims removed or softened: sub-millisecond, "zero latency", transfer-to-FPS/athletics/IQ claims, "raw / 1:1 / unaccelerated / bypass OS acceleration" (drills call `requestPointerLock()` without `unadjustedMovement`), "open-source", "laboratory-grade".
- "Zero telemetry" copy rewritten to match `/privacy` on several pages (dynamic-evasion en, ja pages). D4(b) default was "leave"; the visual-tracking agent removed it on dynamic-evasion only. Decide whether to keep.
- Direct-answer (40–60 word) blocks added on most English drills; question-style H2s.
- Measured Bing demand used (Bing only, not Google): EN `cps test` 26,538, `aim trainer` 8,302, `reaction time test` 12,679, `click speed test` 3,484, `memory games` 1,433, `stroop test` 652; DE `cps test` 5,644, `reaktionstest` 750; JA 反射神経テスト 3,487, 連打ツール 2,070, エイム練習 1,933, 連打ゲーム 1,252; KR 반응속도 테스트 13,122; ES `test de reacción` 125. Most other pages: "demand not verified" (Bing 0/no data, Suggest-only proxies).
- No Google Trends capture anywhere; no non-US SERP; WebSearch is US-only text results (no PAA/AI-answer view).
- Bing API (`scripts/bing/bing.py`) throttled with ThrottleUser/"no data" under 11 parallel agents sharing one key; many late phrases are unknown, not zero.

Shared files edited (all minimal, local entries): `lib/i18n/dictionaries.js` (en/de/es motor-hub keys), `lib/i18n/memoryHubNative.js`, `lib/i18n/siteLandingSeoNative.js`, `lib/i18n/reactionSpeedHubNative.js`, `lib/i18n/drills/{reactionGame,visualTrackingSpeedTestNative,reflexTrainingDrillNative,keyboardRecognition,barrierSequencePursuit,fpsTrackingTrainer,marketDoorsPursuit,constantSlowPursuitNative}.js`. `lib/drillSeo.js`, `lib/searchDrills.js`, `lib/i18n/hubCopy.js` were not edited by any agent. Expect merge conflicts in `dictionaries.js`, `memoryHubNative.js`, `reactionGame.js`, `fpsTrackingTrainer.js`, `barrierSequencePursuit.js`, `visualTrackingSpeedTestNative.js` because several locale agents edit one file each.

## 4. OPEN ISSUES AND OWNER DECISIONS

1. **`/drills/reaction-speed/reaction-time-test` is not a reaction-time test.** It is an interval-estimation task (target time 1–8 s, score = timing error). Hubs agent rewrote title/description/FAQ/schema to say so and linked the real stimulus test `/drills/visual/reaction-speed/light-reaction`. Matching the 12,679/mo "reaction time test" intent needs a product change (gameplay code, out of scope). Owner must pick: swap the drill / page role, or accept a different intent.
2. **D2 `*Client.js` copy edits** (default `no`). Blocks: 243 queue rows, plus English About/FAQ text still rendered on many localized pages (H2s "Drill Instructions & Settings", "About X", English About paragraphs on sine-wave/spatial-shift, "Session preferences"/"100% runs in your browser" on `/<loc>/drills`), plus "raw, unaccelerated mouse input" in `ProFlickClient.js`, `AwarenessDrillClient.js`, `FlowInductionClient.js`, plus "gold standard / strengthens prefrontal cortex" in go-no-go client About. Ask the owner whether to authorize a client copy-hook pass.
3. **Keyword collisions:** ja `barrier-sequence-pursuit` and `angle-hold-trainer` both target 置きエイム練習 (retarget barrier-sequence). ja `saccadic-gallery` and `constant-slow-pursuit` titles both start 動体視力トレーニング.
4. **"Sub-Millisekunden" wording remains on de** flick-shot-training, vertical-air-track, word-recall, distance-judgment (not in the de agent's list). Grep all locales for sub-ms wording after the merge.
5. **Stale unrendered source comments** claim volumes ("~3,600 searches/mo" keyboard-recognition, "~1,100/~1,200" pursuit-tracker/entropic-grid). Not rendered; optional cleanup.
6. **Push policy:** `3.md` says push only to the branch in §0 (default `ccr-109ee186-jucejh`), never to `main`. The owner pushed `main` earlier in this thread. Ask before pushing.
7. **Vercel stays disconnected.** No deploy hooks, no Vercel tools, no IndexNow/Bing submission.

## 5. WHAT REMAINS (WORK PLAN FOR THE NEW CHAT)

Do these in order. Use up to 11 parallel agents but note rate limits (two session-limit stops already happened); if an agent is cut off, resume the same assignment, do not restart it.

### Step A — Preserve and inventory (coordinator, 5 minutes)
1. `git worktree list` and `git branch --list "worktree-agent-*"`. Confirm all 11 worktrees under `.claude/worktrees/` still exist. If a worktree directory is missing, recover from its branch (`git worktree add <path> <branch>`).
2. In each unfinished worktree handle the uncommitted state listed in §2: commit `ko.md`; review and finish/discard the in-progress `pt` and `fr` `page.js` edits; delete fr scratch files; never commit `.kojob/`, `_*.mjs`, secrets, `node_modules`.
3. Ensure the Bing key still exists in the main repo at `scripts/bing/.bing-key` (gitignored; copy into any new worktree; never print or commit).

### Step B — Finish ko, pt, fr (3 parallel agents, or split further by category)
Agents are NOT resumable across chats. Launch new general-purpose agents WITHOUT `isolation` and tell each to `cd` into its existing worktree path and continue on its existing branch (so no history is lost). Each prompt must include: the shared brief in §7, the agent's committed-page list from §2, "continue from the next pending row", and its unique dev-server port (ko 3106, pt 3109, fr 3111). To reduce Bing throttling, run at most 3–4 research agents at a time, throttle Bing to one call per 3–4 s, and prefer Google Suggest + GSC for the rest.

Optionally split each locale into two agents by category (pursuit drills vs everything else) to finish faster; give each its own port and tell them to touch disjoint files.

### Step C — Integrate (coordinator)
1. Create an integration branch off `main`: `git checkout -b seo/parallel-merge-2026-10-08`.
2. Merge the 11 branches one at a time with `git merge --no-ff <branch>` in this order: hubs, fps, memmotor, t2a, t2b, de, ja, es, ko, pt, fr. Resolve conflicts in the shared i18n files by keeping both sides' locale entries. If a conflict is in a non-SEO file, keep the other side.
3. Rebuild `docs/seo/PAGE_QUEUE.md` from the run logs: set each finished URL to `done` (or `done` with a note when English text still renders because of D2) with the commit sha and research-log path; keep `blocked` rows; update the counts line. Merge all `docs/seo/runs/*.md` into the queue and keep the run logs under `docs/seo/runs/`.
4. Tool cleanup: delete scratch files and `.kojob/`-style helper dirs if they slipped in.

### Step D — Verify the merged tree (coordinator; do not trust agent reports)
1. `npx next build` (never `npm run build`) then `npx next start -p 3100`, or `next dev` per route if memory is tight.
2. `node scripts/seo_render_audit.mjs http://localhost:3100 docs/seo/audit/render-audit-<date>.json` (on Windows use PowerShell, not Git Bash, to avoid path mangling). Require: 641 URLs return 200, titles ≤ 60, descriptions ≤ 160, no duplicate titles/descriptions, FAQ JSON-LD equals visible FAQ, hreflang reciprocal with `x-default`, `og:image` on every page, every internal link resolves.
3. `node scripts/seo_english_leak.mjs http://localhost:3100 docs/seo/audit/english-prose-leak-<date>.csv` and compare with `docs/seo/audit/english-prose-leak-2026-10-07.csv`. Mark rows still leaking English because of D2 as `blocked`, not `done`.
4. Grep guard repo-wide: `aggregateRating`, `sub-millisecond`, `Sub-Millisek`, `サブミリ秒`, `zero telemetry`, `bypasses OS acceleration`, numbered `Q4`–`Q10` placeholders, duplicate descriptions.
5. Use the `debug-runtime` subagent (CLAUDE.md §4) if any runtime error appears; static SEO edits do not need it.
6. Reproduce a 200 and zero console errors for a sample of edited drill pages in a real browser (do not alter drills).

### Step E — Remaining queue after the merge
- Tier 3/4 localized rows not yet touched, Tier 5 pages were checked (no edits needed).
- `blocked` rows (243 originally) stay blocked unless the owner authorizes D2.
- Re-measure Bing demand for pages logged "demand not verified" once the key is not shared by many agents (a single sequential agent, 3–4 s between calls), then retarget titles only where evidence supports it.

### Step F — Report and decisions
Final report, point-wise: counts of done / blocked / pending, keywords adopted per market with B3 scores and evidence refs, country-wise trend notes (none captured so far), pages with demand not verified, technical fixes, blockers (§4), failed tools. Ask the owner about: reaction-time-test product decision, D2 authorization, push target (`ccr-109ee186-jucejh` branch vs `main`), D4(b) "zero telemetry" rewrite. Remind: Vercel is disconnected; the owner reviews, merges and reconnects GitHub in Vercel to deploy. End with `STATUS: PARTIAL` unless the whole queue is complete and verified, then `STATUS: SUCCESS | MILESTONE SECURED. END OF CORE CONVERSATION SYSTEM.`

## 6. PARALLEL-WORK RULES THAT PREVENT MISTAKES

- One agent, one disjoint page set, one worktree, one branch, one dev-server port (3101–3111). No two agents edit the same file except the shared i18n files, and then only their own locale/page entry with no reformatting or reordering.
- Agents never push, never edit `docs/seo/PAGE_QUEUE.md`, never force-push, delete branches or rewrite history, never revert changes they did not make.
- Each page: research file → checklist → fix → verify on rendered HTML (curl on its dev server) → grep guard → one commit `seo(<locale>/<slug>): <what>` ending with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>` → one line in `docs/seo/runs/<agent>.md`.
- The scratchpad is shared between agents (one agent's audit script was overwritten by another). Tell each agent to keep scripts in its own subfolder `scratchpad/<agent>/` or inside its worktree, and not to commit them.
- Git Bash mangles paths with `/` prefixes and `cd … && git` chains can be refused by the tool wrapper; prefer PowerShell for those.

## 7. SHARED BRIEF TO PASTE INTO EVERY NEW AGENT PROMPT

Setup:
1. Work inside the given worktree path on the given branch. Read `CLAUDE.md`, `AGENTS.md`, `3.md`, `2.md`, `docs/seo/GLOBAL_PAGE_SEO_AEO_GEO_STANDARD.md`, `docs/seo/NO_TRANSLATION_NATIVE_SEARCH_MANDATE.md`, `docs/seo/TECHNICAL_AUDIT_2026-10-07.md`, the queue rows for your pages, and `docs/seo/runs/<agent>.md`.
2. `node_modules` is a Windows junction to the main checkout (`New-Item -ItemType Junction -Path node_modules -Target "C:\Users\sangmesh\Desktop\global-drill-system-nextjs - Copy\node_modules"`); fall back to `npm ci` if next fails.
3. Bing key: copy `scripts\bing\.bing-key` from the main repo into your worktree (never print or commit).
4. Tools: `python scripts/keywords/autocomplete.py "<seed>" <cc> <lang> --expand`, `python scripts/bing/bing.py keyword|related "<phrase>" <cc>` (null = unknown, not zero), `python scripts/gsc/gsc.py`, WebSearch/WebFetch. Label every figure `measured (source)` or `proxy (signal)`. No evidence, no keyword.
5. Verify with `npx next dev -p <port>` and curl; never `npm run build`; never crawl the whole site; stop your dev server when done.

Per page: research → checklist → fix (title ≤ 60 primary first and unique, description ≤ 155 unique, H1 = primary query, H2s = secondary/PAA questions, 40–60 word direct answer, real FAQ with exactly 10 bespoke native questions on localized drills, JSON-LD mirroring visible text, descriptive internal anchors) → verify rendered HTML → grep guard → commit → run-log line.

Hard rules: search-facing surface only (title, meta, canonical, hreflang, OG, H1/H2, intro/guide prose, FAQ, JSON-LD, internal links, `lib/drillSeo.js`, `lib/searchDrills.js`, locale i18n copy, docs). Never touch drill mechanics or `*Client.js` (D2). No fabricated data, ratings, counts, volumes, rankings or "sub-millisecond"; scientific claims need a source in `lib/drillSources.js`. Schema equals visible text. No machine translation; native phrasing from local queries; no new localized page without verified demand; no hard IP redirects. No explanatory comments in new code. No Vercel tools, deploys, IndexNow or Bing submission. Never commit secrets.

Final reply format, point-wise: pages done/blocked/pending with shas; keywords adopted with B3 scores and evidence; trend notes; demand not verified; shared-file edits; tools that failed; branch name.
