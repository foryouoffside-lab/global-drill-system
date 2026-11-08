# HANDOFF - Indexing fix + one-category-at-a-time local-language SEO (started 2026-11-07)

Trigger for a new chat: `Continue docs/seo/HANDOFF_LOCAL_SEO_CATEGORY.md`

Read this file first, then `docs/seo/HANDOFF_DEMAND_RESEARCH.md` (tooling + rules), `docs/seo/GLOBAL_PAGE_SEO_AEO_GEO_STANDARD.md`, `docs/seo/NO_TRANSLATION_NATIVE_SEARCH_MANDATE.md`.
Update the LOG section at the end of every step. Never leave work only in chat.

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
