# PHYSICAL category - Phase A research brief (2026-11-10), one agent per 2 markets (run the markets one after the other)

Goal: for ONE market, produce a page -> primary keyword map for all 12 PHYSICAL pages
(hub `/<loc>/drills/physical` + balance-training/stability-challenge, coordination/{complex-pattern,cross-body-movement,dynamic-grid-evasion}, fitness/{agility-ladder,jump-sequence,speed-drill}, reflex-training/{drop-catch,peripheral-threat-sweeper,quick-dodge,reaction-chain}), based on measured demand,
with NO two pages sharing a primary. Phase B (separate agents) will implement it. You do NOT edit site code.

## Inputs (reuse first)
- `docs/seo/research/motor-2026-11/gsc-pages-90d.csv`, `gsc-queries-90d.csv` (Search Console, 90 days, all markets).
- Older research: `docs/seo/research/*physical*`, `docs/seo/research/*{agility,balance,coordination,reflex,dodge,speed-drill}*`, `docs/seo/research/fps-2026-11/<market>.md` + `docs/seo/research/motor-2026-11/<market>.md` (FPS and MOTOR primaries are TAKEN), `docs/seo/research/<loc>/`, `docs/seo/research/demand-2026-10/`, `docs/seo/research/reaction-speed-2026-11/<market>.csv` and `_work-p3-retry.jsonl` (has ja 置きエイム 362/876, valorant 置きエイム 練習 157; pt aim trainer 655, treino de mira valorant 363 (TAKEN by reaction barrier page), aim trainer valorant 97).
- Memory: `docs/seo/HANDOFF_DEMAND_RESEARCH.md` (tool usage), `docs/seo/GLOBAL_PAGE_SEO_AEO_GEO_STANDARD.md`.
- Each drill's real mechanic: read `app/drills/physical/<group>/<drill>/*Client.js` briefly (what the player actually does) so keywords honestly match.
- Current titles: `grep -m1 -o 'title: *"[^"]*"' app/<loc>/drills/physical/*/*/page.js app/<loc>/drills/physical/page.js` (some pages pull copy from lib/i18n files).

## Measurement caps (OWNER RULE - ban risk)
- NO Google/Naver/Yahoo searches in Chrome. NO serp scraping loops.
- Per MARKET: max 1 run of `python scripts/keywords/bing_kw.py --file <tsv>` with <= 40 phrases, full locale codes (ko-KR, ja-JP, de-DE, fr-FR, pt-BR, es-ES; plain "ko" = HTTP 400). Other agents share a lock: wait, never loop/retry.
- Per MARKET: max 10 autocomplete calls: `python scripts/keywords/autocomplete.py "<seed>" <cc> <lang> --expand`.
- Per MARKET: max 3 `node scripts/keywords/serp_probe.mjs` queries. Unknown = UNKNOWN.
- GSC read-only is fine: `python scripts/gsc/gsc.py pageopps 90 200` etc.

## Known constraints
- TAKEN primaries (never reuse): every FPS and MOTOR page primary in `docs/seo/research/fps-2026-11/<market>.md` (e.g. aim test / teste de mira = fps flick-shot; Valorant phrases = fps target-acquisition) and every reaction-speed primary (`docs/seo/research/reaction-speed-2026-11/PASS3_PROGRESS.md`, `lib/i18n/reactionSpeedHubNative.js`).
- Known issues: physical speed-drill de/fr/ja copy falsely claims CPS (click-speed test) - verify mechanic; CPS test is #1 demand but only claim it if the drill measures clicks/sec. Memory note: older physical keyword reports quote KD scores the Bing API cannot return - treat old physical volumes as UNVERIFIED. Physical drills are browser drills (mouse/keyboard), not real exercise - never claim real fitness/workout outcomes.
- Honest intent: a term must describe what the drill really does.

## Deliverables (only these files)
- `docs/seo/research/physical-2026-11/<market>.md`: table `page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition note | action (keep/retarget/no-demand descriptive)`; plus a "collisions resolved" list and "kill list" (zero-demand phrases tested).
- `docs/seo/research/physical-2026-11/<market>.csv` raw rows; raw tool output under `_work-<market>/`.
- Write the .md incrementally (after each step) so a dead agent leaves partial results.
- Final reply <= 250 words: top 5 opportunities with numbers, collisions, decisions needed.
