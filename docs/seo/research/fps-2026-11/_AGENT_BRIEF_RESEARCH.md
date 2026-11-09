# FPS category - Phase A research brief (2026-11-08), one agent per market

Goal: for ONE market, produce a page -> primary keyword map for all 16 FPS pages
(hub `/<loc>/drills/fps` + 15 drills under `/<loc>/drills/fps/*`), based on measured demand,
with NO two pages sharing a primary. Phase B (separate agents) will implement it. You do NOT edit site code.

## Inputs (reuse first)
- `docs/seo/research/fps-2026-11/gsc-pages-90d.csv`, `gsc-queries-90d.csv` (Search Console, 90 days, all markets).
- Older research: `docs/seo/research/*fps*`, `docs/seo/research/<loc>/`, `docs/seo/research/demand-2026-10/`, `docs/seo/research/reaction-speed-2026-11/<market>.csv` and `_work-p3-retry.jsonl` (has ja 置きエイム 362/876, valorant 置きエイム 練習 157; pt aim trainer 655, treino de mira valorant 363 (TAKEN by reaction barrier page), aim trainer valorant 97).
- Memory: `docs/seo/HANDOFF_DEMAND_RESEARCH.md` (tool usage), `docs/seo/GLOBAL_PAGE_SEO_AEO_GEO_STANDARD.md`.
- Each drill's real mechanic: read `app/drills/fps/<drill>/*Client.js` briefly (what the player actually does) so keywords honestly match.
- Current titles: `grep -m1 -o 'title: *"[^"]*"' app/<loc>/drills/fps/*/page.js` (some pages pull copy from lib/i18n files).

## Measurement caps (OWNER RULE - ban risk)
- NO Google/Naver/Yahoo searches in Chrome. NO serp scraping loops.
- Max 1 run of `python scripts/keywords/bing_kw.py --file <tsv>` with <= 40 phrases, full locale codes (ko-KR, ja-JP, de-DE, fr-FR, pt-BR, es-ES; plain "ko" = HTTP 400). Other agents share a lock: wait, never loop/retry.
- Max 10 autocomplete calls: `python scripts/keywords/autocomplete.py "<seed>" <cc> <lang> --expand`.
- Max 3 `node scripts/keywords/serp_probe.mjs` queries. Unknown = UNKNOWN.
- GSC read-only is fine: `python scripts/gsc/gsc.py pageopps 90 200` etc.

## Known constraints
- PROTECT `/ko/drills/fps` hub title (274 clicks, pos 7.2) - map its current primary, do not change it.
- Known collisions to resolve in your map: pt "treino de mira" on market-doors (reaction), fps/angle-hold-trainer and pt fps hub; de/fr/es angle-hold titled plain "Aim Trainer"; ko 트래킹 에임 연습 shared by reaction fps-tracking-trainer and fps/strafe-tracking (reaction page keeps it -> strafe-tracking needs another); ja 置きエイム練習 belongs to fps/angle-hold-trainer.
- Reaction-speed primaries are taken (see `docs/seo/research/reaction-speed-2026-11/PASS3_PROGRESS.md` and the hub card names in `lib/i18n/reactionSpeedHubNative.js`). Motor aim-trainer (`/<loc>/drills/motor/hand-eye-coordination/aim-trainer`) may already own generic "aim trainer" terms - check its title and say who should own them.
- Honest intent: a term must describe what the drill really does. Brand terms (Valorant, CS2, Apex, R6) only as "for X" usage context, never implied affiliation.

## Deliverables (only these files)
- `docs/seo/research/fps-2026-11/<market>.md`: table `page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition note | action (keep/retarget/no-demand descriptive)`; plus a "collisions resolved" list and "kill list" (zero-demand phrases tested).
- `docs/seo/research/fps-2026-11/<market>.csv` raw rows; raw tool output under `_work-<market>/`.
- Write the .md incrementally (after each step) so a dead agent leaves partial results.
- Final reply <= 250 words: top 5 opportunities with numbers, collisions, decisions needed.
