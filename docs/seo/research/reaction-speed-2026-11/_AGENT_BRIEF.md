# Reaction-speed country agent brief (2026-11-07)

Repo root: `C:\Users\sangmesh\Desktop\global-drill-system-nextjs - Copy` (cd there first; the shell cwd drifts).
Goal: make the REACTION-SPEED pages rank at the top in YOUR market, in its local language, for measured native keywords with beatable competition.

## Scope: pages (only these, only your locale `<loc>`)
- Hub: `app/<loc>/drills/reaction-speed/page.js` (+ its strings in `lib/i18n/dictionaries.js` `hubs` block for your locale only)
- Drills under `app/<loc>/drills/reaction-speed/*`: reaction-game, reaction-time-test (TIMING game "stop the timer", NOT a reaction test - never target "reaction time test" phrasing with it), reflex-training-drill, visual-tracking-speed-test, saccadic-gallery, fps-tracking-trainer, barrier-sequence-pursuit, market-doors-pursuit
- True reaction-time test: `app/<loc>/drills/visual/reaction-speed/light-reaction` (owns the head term "reaction time test" equivalent) and `.../visual/reaction-speed/go` (go/no-go)
- Per-drill SEO copy lives in shared files `lib/i18n/drills/*.js` (reactionGame.js, reactionTimeTest.js, reflexTrainingDrillNative.js, visualTrackingSpeedTestNative.js, saccadicGallery.js, fpsTrackingTrainer.js, barrierSequencePursuit.js, marketDoorsPursuit.js). OTHER AGENTS EDIT OTHER LOCALE BLOCKS OF THE SAME FILES CONCURRENTLY: edit only your locale's block, use small exact Edit replacements, re-Read right before each edit, never Write/rewrite a shared file, never bulk/regex replace.

## Step 1 - Research (write deliverables early, update as you go)
1. Read `docs/seo/research/demand-2026-10/_BRIEF.md` (tools + method + competition classes) and any existing `_work-<market>/` data and `scripts/keywords/out/reaction-speed-intl-2026-09-04.*`. Reuse; do not re-measure rows already `ok`.
2. Pull what Google already shows for your market's pages: `python scripts/gsc/gsc.py queries 90 500` and `pageopps` (or a small python using `scripts/gsc/gsc.py` get_service with a country filter). Queries where we sit at pos 5-20 with impressions are the fastest wins.
3. Discovery: `python scripts/keywords/autocomplete.py "<seed>" <cc> <lang> --expand` with native seeds for: reaction speed/test, reflexes, reflex game, dynamic visual acuity (KR 동체시력 is our best page: check the local equivalent, e.g. JP 動体視力), eye tracking/eye training, go/no-go, timing/stopwatch game, game-specific (valorant/fortnite/LoL/FPS + reaction), "how to improve reaction speed", "average reaction time", age norms, ms tests.
4. Volume: put <=40 NEW phrases in a UTF-8 TSV `phrase<TAB>cc<TAB>lang`, run `python scripts/keywords/bing_kw.py --file <tsv>` ONCE (shared lock; never parallel loops; if `throttled`, stop volume work, keep going with SERP/discovery, label rows unknown). `--trend` only for the best <=10.
5. Competition: `node scripts/keywords/serp_probe.mjs --file <tsv> <out.jsonl>` for <=25 best terms (Bing SERP, human pace, stop on captcha). For Google-dominant markets you may view up to 10 public Google/Naver/Yahoo-JP result pages at human pace via Playwright or Chrome tools (open your OWN new tab; never reuse others; close it after); stop immediately on captcha/consent walls; no logins. Never pass CJK/accented text on the command line - always via UTF-8 files.
6. Write `docs/seo/research/reaction-speed-2026-11/<market>.md` + `<market>.csv` (columns: phrase,cc,lang,exact,broad,status,trend_pct,competition,top5_hosts,intent,target_route,gsc_pos,gsc_impr). Label every number measured (Bing exact) / GSC / proxy. Never invent numbers; null/nodata = UNKNOWN.

## Step 2 - Keyword map (in the .md)
One primary native keyword per page (no two pages share a primary), + 2-4 secondary. Hub = broad category term; drills = specific intents. Pick by measured demand x beatable competition x honest intent match. Explicit KILL list for current targets with no demand.

## Step 3 - Implement (your locale only)
- Retarget `<title>` (<=60 width units; CJK chars count 2; no " | SkillDrills" if it overflows), meta description (<=160 units), H1/hero heading, first paragraph, 3-5 FAQ questions phrased as locals ask them (40-60 word direct answers, factual; no fabricated stats, percentiles, ratings, "guarantees", or unsourced brain claims), keywords array, OG title/description. Keep FAQ JSON-LD identical to visible FAQ text.
- Keep canonical/hreflang/route structure untouched. Do not create new routes. Do not change drill mechanics/client gameplay code.
- Native phrasing only: never a literal translation of an English phrase without measured or autocomplete evidence.
- Internal links: if the hub/drill copy can link to the page that owns a keyword with native anchor text, add it (plain <a>/Link already used in that file).
- Do NOT run `npm run build`/`next build`/`next dev` (the coordinator builds). Syntax-check edited JS with `node --check` is not possible for JSX; instead re-read your edits carefully. Do not commit/push.

## Final reply to coordinator (<=350 words, point-wise)
Keyword map (page -> primary keyword, Bing exact, competition, current GSC pos), files edited, kill list, what you could NOT measure, tool failures, anything needing coordinator/owner decision.
