# Reaction-speed PASS 2 brief (2026-11-08) - remaining drills per language

Read first: `_AGENT_BRIEF.md` (same folder) - all its rules still apply (scope discipline, shared-file edit rules, honesty, no builds/commits, title/description limits, FAQ JSON-LD == visible text).
Then read your market's pass-1 report `<market>.md` + `<market>.csv` and its `_work-*` folder. Reuse every measured row. Do not re-measure.

## Goal
Pass 1 retargeted only pages with measured demand. Your job now: the pages LEFT UNCHANGED in your locale (list in your prompt). For each one, find the native keyword with the best demand x low competition that HONESTLY matches what the drill does, and retarget it.

## OWNER RULE (2026-11-08): NO SPAM / ACCOUNT-BAN RISK
- NO Google/Naver/Yahoo searches in Chrome (owner's signed-in browser). Chrome SERP step below is CANCELLED.
- Per agent max: 1 bing_kw.py run, 5 serp_probe.mjs queries, 10 autocomplete calls. No retry loops. Unknown = UNKNOWN.

## Method (per page)
1. Discovery: native autocomplete (`python scripts/keywords/autocomplete.py "<seed>" <cc> <lang> --expand`), seeds = what the drill actually is (describe the mechanic natively: go/no-go = impulse-control/inhibition test; saccadic = eye-movement training; barrier/market-doors = FPS peek/angle-clearing aim drills; fps-tracking = tracking aim; timing game = stop-the-timer / time-sense game). Include gaming phrasings (valorant/FPS/LoL) where natural.
2. Volume: Bing `python scripts/keywords/bing_kw.py --file <tsv>` ONCE, <=30 new phrases, full locale codes (`ko-KR`, `ja-JP`, `de-DE`, `fr-FR`, `pt-BR`, `es-ES`; plain `ko` returns HTTP 400). Shared lock: other agents queue on it; be patient, never loop.
3. Competition - Google SERP via Chrome (mcp__claude-in-chrome__*): load tools in ONE ToolSearch call; call tabs_context_mcp; open your OWN new tab with tabs_create_mcp; never touch other tabs; close yours at the end. Use the market's Google domain + hl/gl params (e.g. `https://www.google.co.jp/search?q=...&hl=ja&gl=JP`, `google.co.kr ... hl=ko&gl=KR`, `google.de`, `google.fr`, `google.com.br ... hl=pt-BR&gl=BR`, `google.es`). Max 12 SERPs, human pace (>=20 s apart). Read top-10 hosts with get_page_text/read_page. Stop at once on captcha/consent wall (do not click consent, do not log in) and fall back to Bing SERP probe / UNKNOWN. Low competition = top 10 dominated by thin tool pages, forums, Q&A, unrelated intent, or our own site; high = big brands/media/medical authorities across the whole page 1.
   JP/KR: Bing volume underestimates; you may use Google autocomplete presence + GSC impressions + SERP as demand evidence, labelled as proxy.
4. Choose: primary per page = highest demand with low/medium competition and honest intent match. No two pages may share a primary (check the pass-1 keyword map in `<market>.md`, including hub + light-reaction). If truly no phrase has any demand evidence, give the page an honest native descriptive title and say so (label "no-demand descriptive").

## Implement
Same fields as pass 1: title, meta description, H1, first paragraph, 3-5 FAQs as locals ask, keywords, OG/twitter. Only your locale's block in shared `lib/i18n/drills/*.js` files; re-Read before every Edit; small exact Edits. Remove any spacebar/keyboard claim on drills that are mouse/touch only (check the drill's client component for `keydown` before claiming keyboard input). No fabricated stats, ratings, percentiles, guarantees.

## Deliverables
Append a `## Pass 2` section to `<market>.md` and new rows to `<market>.csv` (same columns; competition source = google-serp / bing-serp / unknown). Final reply <=300 words: page -> primary (volume, source, competition, top hosts), files edited, kill list, tool failures, decisions needed.
