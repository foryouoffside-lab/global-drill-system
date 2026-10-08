# HANDOFF - Demand / competition research + continuation (2026-10-08 -> 2026-10-09)

Trigger for a new chat (send exactly this):

> Run docs/seo/HANDOFF_DEMAND_RESEARCH.md

Resume-safe. State lives in git (`main`), `docs/seo/research/demand-2026-10/` and this file. Read this file fully, then `CLAUDE.md`, `AGENTS.md`, `docs/seo/GLOBAL_PAGE_SEO_AEO_GEO_STANDARD.md`, `docs/seo/NO_TRANSLATION_NATIVE_SEARCH_MANDATE.md`, `docs/seo/INTERNATIONAL_STRATEGY.md` and `docs/seo/research/demand-2026-10/_BRIEF.md`.

Repo root (always `cd` here first; the shell cwd drifts): `C:\Users\sangmesh\Desktop\global-drill-system-nextjs - Copy`

---

## 1. WHERE THE PREVIOUS CHAT STOPPED

The user asked: use a free browser (Playwright) to research demand, find keywords with high demand and low competition in each country's local language, and use SEO + AEO + GEO to rank in different countries. 8 parallel market agents were launched. **All 8 were killed by the account session limit (resets 9:30pm IST)** before writing their final reports. None of `<market>.md` / `<market>.csv` exists. Partial raw data exists on disk (section 4).

Everything else from the SEO run is DONE and LIVE (section 2). The only unfinished work is this research.

## 2. STATE OF THE SITE (already shipped, do not redo)

- `main` = deployed to production. Last deployed commit `0f0dfc28`. GitHub push auto-deploys to Vercel project `global-drill-system` (serves skilldrills.online); the owner connected it. Verify with Vercel tools `list_deployments` (team `team_SB2HDllUFgBY6bImvf4CuX6S`, project `prj_ayThXKgdOFUYu6nhV3EpqyWh7S9w`).
- 11-agent parallel SEO run merged; 641/641 URLs 200; English-prose leak 0 of 546 localized pages; fabricated rank/percentile/guarantee/brain claims removed in all 7 locales; sitemap lastmod = 2026-10-08 for 530 changed pages; GSC sitemap resubmitted (641 URLs, 0 errors); Bing 91+8 URLs submitted (quota: 1 left on 2026-10-08, resets daily).
- `reaction-time-test` fixed: it is a time-estimation game, now "Stop the Timer Game" (EN) and native timing-game titles; the head term "reaction time test" (12,679/mo US) belongs to `/drills/visual/reaction-speed/light-reaction`.
- Google index check 2026-10-08: 195 of 641 indexed (was 5). 331 discovered-not-indexed, 98 unknown, 17 crawled-not-indexed. Re-run `python scripts/gsc/gsc_index.py` about 2 weeks after 2026-10-08 (the output file is gitignored).
- Queue: `docs/seo/PAGE_QUEUE.md` 535 done / 106 pending (English leak fixed, no per-page research yet, demand unverified) / 0 blocked.
- Known open structural item (do not fix without owner approval, CLAUDE.md section 7): every localized page serves `<html lang="en">` from the server; an inline script corrects it after load. Real fix = per-locale root layouts (route groups, moves hundreds of folders) or dynamic rendering (hurts caching). `Content-Language` header already mitigates.
- Pitfalls learned (obey): (1) agent "done" reports overstated cleanup, so re-grep the merged tree and run `npx next build` before every push; (2) one agent's bulk replace corrupted letters (DRILLS -> DAILLS), so never allow character-level bulk replacement and scan with a same-length-substitution diff; (3) never `npm run build` (postbuild pings search engines), use `npx next build`; (4) CJK/accented text must go through UTF-8 files, never the Windows command line; (5) the whole account hit a session limit twice, so launch at most 4 agents at once and make each commit/save per unit of work.

## 3. THE RESEARCH TOOLS (built and tested this chat, in the repo, uncommitted until you commit them)

1. `scripts/keywords/bing_kw.py` - cross-process rate-limited Bing volume.
   `python scripts/keywords/bing_kw.py --file phrases.tsv [--trend]` where each line is `phrase<TAB>cc<TAB>lang` (lang optional). Output: JSON lines `{phrase, cc, lang, exact, broad, status[, trend:{weeks,recent6,prior,change_pct}]}`. A shared lock + 3.5 s global gap lets many agents use one key without throttling. `status:"nodata"` = UNKNOWN, not zero. `--trend` uses Bing `GetKeywordStats` (26 weekly points), only for terms with exact >= 30. Bing numbers are a relative index (Bing is about 3-4% of search; far less in KR/JP).
2. `scripts/keywords/serp_probe.mjs` - Playwright Bing SERP probe for competition and answer-engine signals.
   `node scripts/keywords/serp_probe.mjs --file queries.tsv out.jsonl` (`query<TAB>cc<TAB>lang`). Returns top-10 host/title/snippet, answers count, copilot flag, ads, `captcha` flag. Waits 4-7 s per query. Tested OK for US, JP, KR. Host comes from the `cite` text (Bing wraps hrefs in redirects).
3. Existing: `python scripts/keywords/autocomplete.py "<seed>" <cc> <lang> --expand` (Google Suggest = PROXY, never volume), `scripts/keywords/native_discovery.py`, `country_keywords.py`, `category_market_matrix.py`; GSC: `python scripts/gsc/gsc.py queries|pages|pageopps`; Bing site data: `python scripts/bing/bing.py queries|pages|crawl`.
4. Google Trends is BLOCKED for automated browsers (429, even real Chrome). Do not retry. Trend source = Bing `--trend`.
5. The brief every market agent follows: `docs/seo/research/demand-2026-10/_BRIEF.md` (method A-F, competition classes, opportunity formula, deliverables).

Measured today (Bing US exact): keyboard tester 17,184 (trend -2%, flat). Prior baselines: see section 6 and `INTERNATIONAL_STRATEGY.md`.

## 4. PARTIAL DATA ON DISK - READ THIS: MOST BING ROWS ARE THROTTLED, NOT MEASURED

The 8 agents plus the lock still overloaded the Bing keyword API: the key returns `HTTP 400 {"ErrorCode":4,"Message":"ERROR!!! ThrottleUser"}` (verified 2026-10-08 evening; even `cps test` US failed). Every row saved while throttled has `status:"nodata"` (old wrapper) = UNKNOWN, not zero. Counts of REAL measured (`ok`) vs unknown rows in `docs/seo/research/demand-2026-10/_work-*/*.jsonl`:

| Market | ok (real volume) | nodata/error (unknown) | SERP probes saved |
|---|---|---|---|
| ja | 85 | 2 | 24 |
| emerging | 64 | 7 | 18 |
| es | 34 | 106 | 13 |
| de | 0 | 70 | 0 |
| fr | 0 | 136 | 0 |
| ko | 0 | 70 | 19 |
| pt | 0 | 70 | 13 |
| en | 0 | 17 | 37 |

So: ja and emerging volumes are usable; es partly; de/fr/ko/pt/en volumes must be re-measured. The SERP competition data (Playwright, not the API) is valid wherever probes exist. Autocomplete files are valid proxies.

Rules for the new chat:
1. Before anything, send ONE canary: `python scripts/keywords/bing_kw.py "cps test" us`. Expect exact about 13,000+. If it returns `status:"throttled"` the key is still locked: wait (try again every 30 minutes; it clears in hours, sometimes next day) and do competition/SERP work meanwhile.
2. `scripts/keywords/bing_kw.py` was fixed: default gap is now 8 s, it reports `status:"throttled"` (not "nodata") and aborts a `--file` run after 3 consecutive throttles. A shared lock does NOT make parallel agents safe: the API throttles on total volume, so measure Bing volumes from ONE process/agent at a time (or in the coordinator), at most about 150 calls per hour, and run `--trend` only on the best 20 terms.
3. Only phrases whose status is not `ok` need re-measuring. Parallel agents should do discovery (autocomplete), SERP probes (Playwright), classification and writing, NOT Bing volume calls. Give each agent a phrase file and have the coordinator (or one dedicated agent) run all the Bing volume batches sequentially, then hand the results back.
4. Never report a `nodata`/`throttled` row as zero demand.

## 5. WHAT TO DO IN THE NEW CHAT (in order)

Step 0 - Preserve (2 min): `git status`; commit `scripts/keywords/bing_kw.py`, `scripts/keywords/serp_probe.mjs`, `docs/seo/research/demand-2026-10/` (including `_work-*`, excluding secrets; there are none) with message `research: demand/competition tooling and partial market data` + the `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>` line. Do NOT push yet unless app code changed (a push triggers a production deploy; research docs alone do not need one).

Step 1 - Check the account limit has reset (it resets 9:30pm IST). Launch at most 4 agents at a time (the account hit its session limit when 8 ran together).

Step 2 - Resume the 8 markets as NEW general-purpose agents (agents are not resumable across chats). Each prompt = "Read `docs/seo/research/demand-2026-10/_BRIEF.md` and follow it; your market is X; existing raw data is in `_work-X/` - reuse it, finish only what is missing". Suggested waves:
- Wave 1: ja, ko, en, pt (most data / most value).
- Wave 2: de, fr, es, emerging.
Per agent remaining work: discovery + SERP probe + classification (Bing volumes are measured centrally, see section 4 rule 3); SERP probe the top 25 + 10 mid-volume terms (skip the ones already probed), classify competition, compute opportunity, write `<market>.md` + `<market>.csv` into `docs/seo/research/demand-2026-10/`. Tell each to write its two deliverables EARLY (draft after the first measured batch) and update them as it goes, so a session cutoff never loses the report again. Tell each to save progress after every batch.

Step 3 - Coordinator synthesis (you): merge all `<market>.csv` into `docs/seo/research/demand-2026-10/MASTER.csv` and write `SUMMARY.md`: the global top-30 high-demand/low-competition opportunities (native keyword, market, exact, trend, competition + evidence hosts, intent, feasibility, existing route or "new tool"), a market verdict table (localize / English page only / ignore), a kill list (terms the site targets that have no demand), and the AEO/GEO playbook per market (question H2s, 40-60 word direct answers, FAQPage/HowTo/SoftwareApplication schema, entity terms, Naver/Yahoo-Japan/Bing/Copilot notes, hreflang with x-default, no hard IP redirects).

Step 4 - Implement only what the data supports, smallest change first, verify before shipping:
- Retarget titles/H1/descriptions on EXISTING pages where a measured term has demand (title <= 60 chars, unique, native phrasing). Never keep titles on zero-demand phrases when a measured alternative exists. Use exact multi-word string replacements; never character-level bulk replacements.
- New tool pages ONLY if demand is verified and the owner approves the product work. Candidate flagged by earlier research: a keyboard tester (US 17,184/mo, about 35k/mo across markets, thin single-page incumbents such as key-test.com), typing tests (JP タイピング 100k+, KR 타자연습 95k+, BR teste de digitação 14.8k; these are brand-led, so look for long-tail), CPS/click-speed variants. Ask the owner before building new gameplay (the SEO run's hard rule was "never touch drill mechanics").
- Do not create a localized page without verified native demand (docs standard). Non-localized countries fall back to English (`x-default`).

Step 5 - Ship: `npx next build` must pass; run `node scripts/seo_render_audit.mjs http://localhost:3100 <out.json>` and `node scripts/seo_english_leak.mjs http://localhost:3100 <out.csv>` against `npx next start -p 3100` (expect 641 URLs 200, 0 English leaks, no duplicate titles/descriptions); commit; `git push origin main` (GitHub auto-deploys); verify the deployment is READY and spot-check live pages with a cache-busting query string; submit changed URLs to Bing (`python scripts/bing/bing.py quota` first; 100/day) and resubmit the sitemap (`python scripts/gsc/gsc.py submit`).

Step 6 - Report point-wise: opportunities adopted with evidence, markets to ignore, pages changed, tool failures, remaining decisions. End with `STATUS: PARTIAL` unless everything is verified.

## 6. PRIOR MEASURED NUMBERS (Bing exact/mo; label as measured or proxy, never invent)

- US: cps test 13,907; reaction time test 12,679 (2026-10); aim trainer 9,821; keyboard tester 17,184 (2026-10-08); stop the timer game 89; timing game 22; 10 second challenge 7; time perception/internal clock/time estimation test 0.
- KR: 한컴타자연습 176,386; 타자연습 95,223; 반응속도 테스트 13,122; 시간 감각 테스트 0; 타이밍 게임 0.
- JP: タイピング練習 149,616; タイピング 100,001; 反射神経テスト 3,487; 連打ツール 2,070; エイム練習 1,933; 体内時計 テスト 0; 時間感覚 テスト 0.
- BR: teste de digitação 14,810; mira valorant 1,278; treino de mira 385; aim trainer 581; teste de reflexo 142-225; cliques por segundo 68.
- DE: cps test 5,644; reaktionstest 750; English term often beats German. FR: reaction-time demand about 0 (English 282). ES: thin (aim trainer 105; juegos de memoria 130). IT/PL/TR: no local-language win; English cps test PL 2,333.

## 7. HARD RULES (carry forward)

- Output discipline: point-wise, no preambles, no explanatory comments in new code (CLAUDE.md).
- No fabricated data, ratings, volumes, rankings, percentiles. Label measured vs proxy. Bing-only caveat always.
- Free public sources only; no logins/accounts; keep SERP probing at human pace and stop on captcha.
- Never commit secrets (`scripts/bing/.bing-key`, GSC token); never print them.
- Do not `npm run build`. Do not push without verifying the build.
- Runtime bugs: use the `debug-runtime` subagent (CLAUDE.md section 4); copy/SEO edits do not need it. The edit gate hook `.claude/hooks/debug-gate.js` may require `node .claude/hooks/debug-gate.js ack <session_id>` for copy-only edits; that is allowed only for non-runtime changes.
