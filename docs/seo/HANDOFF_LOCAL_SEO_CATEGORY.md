# HANDOFF - Indexing fix + one-category-at-a-time local-language SEO (started 2026-11-07)

Trigger for a new chat: `Continue docs/seo/HANDOFF_LOCAL_SEO_CATEGORY.md`

Read this file first, then `docs/seo/HANDOFF_DEMAND_RESEARCH.md` (tooling + rules), `docs/seo/GLOBAL_PAGE_SEO_AEO_GEO_STANDARD.md`, `docs/seo/NO_TRANSLATION_NATIVE_SEARCH_MANDATE.md`.
Update the LOG section at the end of every step. Never leave work only in chat.

## >>> RESUME HERE (state as of 2026-11-09) <<<

A. REACTION-SPEED = DONE + PUSHED + DEPLOYED (20f78d79). Bing submitted 66 URLs. GSC sitemap resubmitted. Owner does GSC Request Indexing by hand (Day1-3 lists in LOG 2026-11-09).
B. FPS Phase A (keyword maps) = DONE: docs/seo/research/fps-2026-11/{de,ko,ja,pt,es,fr}.md.
C. FPS Phase B = RUNNING: 8 agents, brief docs/seo/research/fps-2026-11/_AGENT_BRIEF_PHASE_B.md. Resume = per-drill logs docs/seo/research/fps-2026-11/_passB_<drill>.log (6 lines = done). If the chat died: relaunch an agent only for drills with < 6 log lines, same brief + "resume".
   Pairs: hub+flow-state, flick-shot-training+micro-correction-precision, target-acquisition+target-switching-swarm, angle-hold-trainer+target-prioritization, recoil-control+vertical-air-track, strafe-tracking+pro-smooth-pursuit, anti-strafe-jitter-duel+anti-zigzag-movement-trainer, 180-degree-awareness+instant-response.
   Coordinator DONE (committed): motor aim-trainer pt/es titles (drop Treino de Mira / Entrenamiento de puntería lead, own Aim Trainer), de motor 'aim test' keyword removed, pt market-doors -> 'Checar Ângulos no FPS: Limpar Cantos', de fpsTrackingTrainer overlap keywords removed.
   Coordinator TODO after agents: sync card names in lib/i18n/drillNames.js (agents report old->new); grep red flags; audit all 96 pages (`python docs/seo/research/reaction-speed-2026-11/_audit.py <loc>/drills/fps/<drill>`); commit; push (owner rule: push each category when done); Bing submit; give owner Request-Indexing list (ko angle-hold + ko target-acquisition first, + EN fps/recoil-control which dropped out of the index).
   Minor bug noted: motor aim-trainer h1 concatenates the subtitle (same as old timing-game h1 bug) in pt/es/de - fix in motor pass.
D. Category order after FPS: motor -> physical -> visual -> cognitive -> memory.

## (older) RESUME block of 2026-11-08, late

0. REACTION-SPEED CATEGORY = DONE. Commits 68fb8560 (pass 1) + 20f78d79 (pass 3: all 77 pages, audits OK). NEITHER PUSHED - owner must OK push (= production deploy). Not built with `next build` (dev server shares .next); tsc clean + live render audit 77/77.
   After push: Bing URL submit + GSC sitemap resubmit + Request Indexing (ko/ja/en light-reaction, ko go).
   Owner decisions open: drill time penalty is FORCED ON in every reaction drill (Timeout toggle has no effect); en pages of reaction drills still carry some old claims (lanes, fake time-on-target column) - en was out of scope.
1. CATEGORY 2 = FPS, Phase A research RUNNING: 6 agents (ko ja de fr pt es), brief `docs/seo/research/fps-2026-11/_AGENT_BRIEF_RESEARCH.md`, outputs `docs/seo/research/fps-2026-11/<market>.md/.csv`. GSC 90d exports in that folder. Done check: <market>.md has a full 16-row table + final section. Relaunch missing markets with the same brief + "resume".
   Phase B (next): one agent per FPS drill (15 + hub), same pattern as reaction pass 3 (`docs/seo/research/reaction-speed-2026-11/_AGENT_BRIEF_PASS3.md`: exclusive file ownership, verify mechanics vs client, per-drill log, _audit.py).
   Cursor rule for drills: memory drill_cursor_hand_not_crosshair (arrow, hand only on target; FPS pointer-lock aim drills keep crosshair).

## (older) state before category 2

1. Pass 1 (reaction-speed, 6 locales) = DONE, built, audited, COMMITTED LOCALLY as `68fb8560`. NOT PUSHED (owner must OK push = production deploy).
2. Pass 2 = RUNNING/maybe interrupted: 6 agents (ko, ja, de, fr, pt, es) retargeting the pages pass 1 left unchanged. Brief: `docs/seo/research/reaction-speed-2026-11/_AGENT_BRIEF_PASS2.md`.
   - Done check: a market is finished when its `<market>.md` has a `## Pass 2` section. Uncommitted edits since 68fb8560 = `git diff --stat`.
   - If interrupted: relaunch ONLY markets missing `## Pass 2`, same brief + "resume: reuse existing files, finish what is missing".
3. OWNER RULE: no spam/ban risk. NO Google/Naver/Yahoo searches in the owner's Chrome. Per agent max 1 bing_kw.py run, 5 serp_probe queries, 10 autocomplete calls, no retry loops.
4. After pass 2: review diffs (grep spacebar/aggregateRating/sub-millisecond/made-up ms ranges) -> `npx next build` (never `npm run build`) -> render audit (title, 1 h1, FAQ JSON-LD == visible, no noindex) -> commit -> ask owner to push -> after deploy: Bing URL submit, GSC sitemap resubmit, GSC "Request indexing" for ko/ja/en light-reaction + ko go.
5. Open owner decisions: (a) clean EN light-reaction fabricated claims; (b) DE cognitive reaction-time page cannibalization; (c) hub itemList schema URLs non-locale in all locales; (d) noindex/remove zero-demand locale pages; (e) editorial tier tables; (f) ja visual hub ビジョントレーニング. Pending follow-up: drop 반응속도 테스트 from KR hub title once ko light-reaction is indexed.

## User goal (2026-11-07)

1. Find why some pages are still not indexed (Google) and fix the causes.
2. Traffic comes almost only from Korea. Rank in other countries in their local language,
   using measured high-demand / beatable-competition native keywords.
3. Do it ONE category at a time (cost). Research native keywords per market, retarget pages, verify.
4. Store everything so the next chat continues without loss.

## Connections (verified 2026-11-07)

- Bing Webmaster API: OK (`python scripts/bing/bing.py sites`). Keyword API not throttled (canary `cps test` US = 25,739).
- GSC: re-authorized 2026-11-07 (read-only token at `C:/Users/sangmesh/Desktop/gsc-token.json`). OAuth app likely in Testing mode -> token dies after ~7 days; re-run `python scripts/gsc/gsc.py auth` in a real terminal (or in background: it opens the browser).

## Baseline (GSC, 90 days to 2026-11-05)

Countries (clicks/impressions/pos): KR 554/9,700/7.1 · JP 345/4,091/9.3 · US 192/1,865/11.0 · BR 58/799 · IN 58/610 · DE 41/493 · ES 34/282 · MX 31/238 · FR 29/373.
Locale trees (clk/imp): en 783/12,268 · ko 552/9,825 · ja 335/4,166 · es 31/608 · pt 45/560 · de 21/343 · fr 15/268.
Non-KR/JP countries get almost only brand queries (`skilldrills`, `skill drills`).

Category x impressions: reaction-speed 5,261 (KR 4,108, JP 965) · fps 4,942 (KR 3,054) · home 2,184 · motor 1,437 (JP 1,266) · rest < 400 each.

## Category chosen: reaction-speed (pass 1). Next pass: fps.

Why: highest impressions, proven to rank in KR (`동체시력 테스트` pos 4.5, 17% CTR on
`/ko/drills/reaction-speed/visual-tracking-speed-test`; `반응속도 *` pos 6-9 on the hub), and has
measured native demand outside KR (JP `反射神経テスト` ~2.5-3.5k, hub at pos 13; DE `reaktionstest` 397-750; BR `teste de reflexo` ~200).

Known prior decisions to respect:
- `/drills/reaction-speed/reaction-time-test` is a TIMING game ("Stop the Timer"), not a reaction test. Do not target "reaction time test" with it.
- DE `reaktionstest` SERP = driving-licence/MPU medical intent (2026-09 finding) - re-verify before targeting.
- FR reaction demand ~0. ES thin.

## Plan / status

- [ ] A. Index audit: `python scripts/gsc/gsc_index.py` (all sitemap URLs) -> group by coverageState -> find causes -> fix -> resubmit.
- [ ] B. Reaction-speed native keyword research per market (ja, de, pt-BR, es, fr + check ko gaps): autocomplete discovery -> Bing volume (one process, sequential) -> SERP probe competition.
- [ ] C. Map keywords -> pages (one primary term per page, no cannibalization); retarget title/H1/description/FAQ on existing locale pages.
- [ ] D. Build, render audit, deploy, submit URLs (Bing + GSC sitemap), record baseline for later comparison.

## LOG
- 2026-11-07: GSC re-authed; baselines pulled (above); category = reaction-speed; index sweep started.
- 2026-11-07: 4 country agents launched on reaction-speed (ja, ko, pt+es, de+fr), brief = `docs/seo/research/reaction-speed-2026-11/_AGENT_BRIEF.md`. Each writes `<loc>.md/.csv` into that folder then edits ONLY its locale (app/<loc>/drills/reaction-speed/**, app/<loc>/drills/visual/reaction-speed/{light-reaction,go}, its block in lib/i18n/drills/*.js + dictionaries.js). No builds/commits by agents. If the chat dies mid-run: check which `<loc>.md` exist; `git diff --stat` shows edits; relaunch missing markets with the same brief ("reuse existing files, finish what is missing").
- 2026-11-07 INDEX AUDIT DONE (`scripts/gsc/index-status.json`, previous copy in session scratchpad):
  - 211/641 indexed (195 on 2026-10-08; +16 in a month). 248 discovered-not-indexed, 168 URL-unknown, 14 crawled-not-indexed.
  - Hubs 55/67 indexed; drills 149/567. Every locale has ~25-33 indexed.
  - NO technical blocker found: sampled unindexed pages = 200, `index, follow`, self-canonical, h1 present, 1.2-2k words SSR, <1.5 s; locale hubs link every locale drill in server HTML; sitemap read 2026-10-30, 641 URLs, 0 errors; robots OK.
  - 13 of 14 crawled-not-indexed were last crawled 2026-09-16..25, i.e. BEFORE the 2026-10-08 content overhaul (incl. EN light-reaction, the "reaction time test" 12.7k page). Google judged the old version; needs recrawl.
  - Bing: 644 in index, 0 crawl issues -> Google-only problem.
  - Root cause = crawl priority on a low-authority domain: Google crawls only ~16 new URLs/month here; 546 of 641 URLs are near-template locale variants created at once (many without verified demand, against CLAUDE.md s10).
  - Levers: (1) honest lastmod bump on pages changed in this pass; (2) GSC UI "Request indexing" via Chrome, ~10/day, priority list = EN light-reaction + reaction-speed pages just retargeted; (3) sitemap resubmit; (4) OWNER DECISION: noindex/remove zero-demand locale pages to concentrate crawl budget; (5) backlinks (off-page; the real authority constraint).
- Coordinator after agents: `npx next build` -> render audit -> commit -> push (auto-deploy) -> Bing submit + GSC sitemap resubmit.
- 2026-11-08: previous chat died (credits). State found: no `<loc>.md` written; partial data in `_work-ja/`, `_work-defr/`; uncommitted pt+es edits (pt/es light-reaction page.js, pt FAQ in lib/i18n/reactionSpeedHubNative.js). Relaunched 4 agents (ja, ko, pt+es, de+fr) with "reuse existing files, finish what is missing".
- 2026-11-08: JA agent DONE -> ja.md/ja.csv. Primaries: hub 反射神経 鍛える(165), light-reaction 反射神経テスト(3,487), reflex-training 反射神経ゲーム(1,054), reaction-game 反応速度ゲーム, visual-tracking 動体視力テスト(254), saccadic 眼球運動 トレーニング. Also edited lib/i18n/drillNames.js (ja reaction-game name, de-duplicated). Open: should visual hub own ビジョントレーニング (1,527, mostly child-therapy intent)? Re-check GSC 4-6 wks: light-reaction should take テスト queries from hub.
- 2026-11-08: DE+FR agent DONE -> de/fr .md/.csv. DE light-reaction = Reaktionstest (931; SERP now tool intent, MPU disclaimer in FAQ); DE hub = Reaktionstraining & Reflexübungen (no vol). FR reflex-training = test de réflexe (51, GSC pos 5); FR light-reaction = test de réaction (vol UNKNOWN). FR: no further reaction work. Bing kw2.jsonl may still be appending -> `python docs/seo/research/reaction-speed-2026-11/_work-defr/mkcsv.py`. Coordinator TODO: (a) verify light-reaction keyboard input (agent says no spacebar; pt FAQ mentions barra de espaço); (b) hub itemList schema URLs non-locale in every locale; (c) DE `/de/drills/cognitive/processing-speed/reaction-time` pos 16 for "reaktionstest online kostenlos üben" may cannibalize.
- 2026-11-08: (a) verified: StrobeLatencyClient has no key handlers -> spacebar claims false. Fixed en + ja; sent ko and pt+es agents the fix. EN light-reaction still carries unsourced claims (esports 160-190 ms, caffeine 10-20 ms, physiology stage timings, 200-250 ms baseline) -> owner decision whether to clean EN in this pass.
- 2026-11-08: de+fr Bing run finished; CSVs refreshed (106 rows ok). FR `test de reaction` = 95 Bing exact (was UNKNOWN) -> FR light-reaction primary confirmed.
- 2026-11-08: PT+ES agent DONE -> pt/es .md/.csv, raw `_work-ptes/`. pt light-reaction = teste de reflexo (209, GSC 30; Google currently ranks the timing game for it); pt hub = jogos de reflexo (128, Sept). es light-reaction = test de reacción (125 ES, volatile); es hub = test de reflejos (32); es reflex-training renamed "Juego de Reflejos". Recommend: no new pages, no MX localization. Benchmark tier tables still editorial (not rewritten). Waiting on KO agent, then coordinator build.
- 2026-11-08: KO agent DONE -> ko.md/.csv, `_work-ko/`. light-reaction = 반응속도 테스트 (10,032); visual-tracking title PROTECTED (동체시력 테스트 pos 4.2); reflex-training = 순발력 테스트 (170); hub = 반응속도 훈련. Bing kw tool needs lang `ko-KR` (plain `ko` -> HTTP 400; re-measure 2026-10 KR nodata rows). Coordinator HEDGE: KR hub ranks 8.8 / 918 impr for 반응속도 테스트 and ko light-reaction is "URL unknown to Google" -> kept 반응속도 테스트 in hub title/desc/keywords as secondary until light-reaction is indexed (then drop it). Priority Request-Indexing: ko light-reaction, ko go, ja light-reaction, en light-reaction.
- ALL 4 AGENTS DONE. Next: npx next build -> render audit -> commit -> (owner OK) push.
- 2026-11-08: `npx next build` exit 0. Render audit (16 pages: 7 light-reaction, 5 locale hubs, 4 drills): 1 h1 each, FAQ JSON-LD == visible FAQ, 0 spacebar, no noindex. Committed locally. NOT pushed - awaiting owner OK (push = production deploy). After push: Bing submit changed URLs + GSC sitemap resubmit + Request Indexing (ko/ja/en light-reaction, ko go).
- 2026-11-08: OWNER asked pass 2: every remaining unchanged reaction-speed page per language, native high-demand/low-competition keywords, Google SERP via Chrome allowed. Brief = `_AGENT_BRIEF_PASS2.md`; 6 agents (ko, ja, de, fr, pt, es). Recovery: check for `## Pass 2` in each <market>.md.
- 2026-11-08: OWNER: no spam/ban risk -> Chrome Google SERPs cancelled for all pass-2 agents; caps 1 bing_kw run / 5 serp_probe / 10 autocomplete per agent.
- 2026-11-08: Pass-2 parallel agents died (no `## Pass 2` anywhere; Bing kw run got 1 row, serp probes timed out). OWNER: switch to ONE page x ONE country per step, coordinator does it inline. Done: ja go/no-go (see ja.md Pass 2). Next: es reaction-time-test (partial uncommitted edit exists - verify vs ReactionTimeTestClient = timing game), then remaining pages per market one at a time.
- 2026-11-08: OWNER asked again for "SEO/AEO/GEO repos". Answer on file: vetted 2026-09-10 (docs/seo/AGENCY_PLAN_AUDIT.md) - only seo-skills/seo-audit-skill + Auriti-Labs/geo-optimizer-skill survived; no free repo gives live volume (Bing API + autocomplete + GSC already are the live sources). AI bots already allowed in app/robots.js, llms.txt exists. Indexing is not per-country: Google has one index; non-KR traffic gap = ranking/authority + crawl budget (see index audit above), not a technical block.
- 2026-11-08: Cursor fix (not SEO): removed canvas-drawn `+` crosshair + OS crosshair in 8 reaction-speed + 12 visual-tracking drills + GhostLink; canvas now `cursor-pointer` (hand, like cognitive). FPS/motor/physical pointer-lock aim drills left unchanged on purpose.
- 2026-11-08: PASS 3 started (sequential, one page x one locale). Progress checklist = docs/seo/research/reaction-speed-2026-11/PASS3_PROGRESS.md (resume from first unticked line).
- 2026-11-08: go/no-go done in all 6 locales (spacebar claim + fabricated rIFC/tier physiology removed, native titles, start-button names match dictionaries.js ui.start). Timing-game h1 fixed. Then OWNER asked for parallel agents: 8 launched, one per drill (see PASS3_PROGRESS.md for relaunch rule). After they finish: coordinator does fr hub, reviews diffs, full 66-page audit, npx next build, commit, ask owner to push.
- 2026-11-09: FPS phase A status: only de.md COMPLETE. ko/ja/pt/es/fr agents died after GSC+AC+SERP steps; their Bing kw runs produced 0 rows (fr 27/40). Coordinator re-ran the 5 Bing runs sequentially (same kw.tsv; fr only the 13 missing rows via kw_rest.tsv) - not a retry loop, first completed run. Next: coordinator writes the 5 maps inline from existing _work-* data, then Phase B.
- 2026-11-09: OWNER OK -> pushed 68fb8560 + 20f78d79 (reaction-speed, all 77 locale pages; PASS3_PROGRESS unticked boxes were stale, commit covers all incl. fr hub). Red-flag grep clean. OWNER RULE: push each category as soon as it is done. Order: fps -> motor -> physical -> visual -> cognitive -> memory. Pending after deploy: Bing URL submit + GSC sitemap resubmit + Request Indexing (ko/ja/en light-reaction, ko go).
- 2026-11-09: deploy 20f78d79 live (fr hub title verified cache-busted). Bing: 66 reaction locale URLs submitted OK. GSC sitemap resubmit BLOCKED: no write token -> owner runs `python scripts/gsc/gsc.py authwrite` (or resubmits sitemap in GSC UI) + manual Request Indexing (ko/ja/en light-reaction, ko go).
- 2026-11-09: GSC write token OK (C:/Users/sangmesh/Desktop/gsc-write-token.json); sitemap resubmitted (641 urls, 0 errors). Full index sweep running -> scripts/gsc/index-status.json (11-07 copy in session scratchpad). Owner does Request Indexing manually; Day1-3 reaction URL lists given in chat (top: ko/ja/en/de/pt light-reaction, ko go, ja reflex-training, de + es hubs, ko reaction-game).
- 2026-11-09: FPS phase A: ko.md, ja.md, pt.md COMPLETE (coordinator). ja Bing batch all 0 but canary エイム練習 = 3,098 -> zeros real. Key: ko angle-hold -> 대기샷 연습 (hub ranks 2.6 for it, angle-hold crawled-not-indexed); ko target-acquisition -> 발로란트 에임 연습 사이트 (1,103); pt flick -> teste de mira (268); pt "Treino de Mira" lead removed from 11 drills + motor + market-doors. Waiting: es, fr Bing.
- 2026-11-09 INDEX SWEEP: indexed 210 (11-07: 211), discovered-not-indexed 355 (248), URL-unknown 61 (168), crawled-not-indexed 15 (14). Google discovered ~107 more URLs but indexed none net; EN fps/recoil-control DROPPED indexed -> crawled-not-indexed (add to request list after FPS push). Unknown<->discovered flips both ways on ~40 URLs = API noise. Crawl-budget diagnosis unchanged.
- 2026-11-09: FPS PHASE A COMPLETE: all 6 maps (de ko ja pt es fr .md/.csv). Cross-market rule: motor aim-trainer owns the 'aim trainer' head term; FPS drills drop 'Aim Trainer' / 'Treino de Mira' / '에임 연습' / 'エイム練習' title leads; flick-shot = 'aim test' / 'teste de mira' (de es fr pt); target-acquisition = the Valorant phrase; instant-response leaves every reaction-owned term. Skipped on honesty: 3d aim trainer, aim lab brand. NEXT = Phase B (page edits, one agent per drill, brief = reaction _AGENT_BRIEF_PASS3.md pattern).
- 2026-11-09: PHASE B launched: 8 agents x 2 pages x 6 locales, brief docs/seo/research/fps-2026-11/_AGENT_BRIEF_PHASE_B.md, resume logs _passB_<drill>.log (pairs: hub+flow-state, flick+micro, acquisition+switching, angle-hold+prioritization, recoil+vertical, strafe+smooth, anti-strafe+zigzag, 180+instant-response). Dev server :3000 started by coordinator. Coordinator meanwhile: motor aim-trainer pt/es titles, pt market-doors lead, de motor 'aim test' keyword, de fpsTrackingTrainer keyword trim; after agents: drillNames.js card sync, full 96-page audit, commit, push, Bing submit.
