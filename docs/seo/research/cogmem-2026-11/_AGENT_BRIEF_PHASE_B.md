# COGNITIVE + MEMORY Phase B brief (2026-11-12) - 7 agents, each owns 2-3 pages x 6 locales

Goal: apply the Phase A keyword maps to the localized COGNITIVE + MEMORY pages and make every mechanic claim match the code.
Maps (source of truth): `docs/seo/research/cogmem-2026-11/<loc>.md` (ko, ja, de, fr, pt, es) -> page table `proposed primary` + `action` + kill list.
"no-demand descriptive" = no measured term: write an honest, natural native title that says what the drill is; do not chase a zero-volume phrase and do not borrow another page's primary.

## Ownership (exclusive - 6 other agents edit other pages at the same time)
- ONLY `app/{ko,ja,de,fr,pt,es}/drills/{cognitive|memory}/<group>/<your-drill>/page.js` (hub agent: `app/{loc}/drills/cognitive/page.js` + `app/{loc}/drills/memory/page.js`, plus ONLY the `hubs.cognitive` / `hubs.memory` blocks of `lib/i18n/dictionaries.js` if the hub H1/intro comes from there).
- If your drill's localized copy lives in `lib/i18n/drills/<yourDrill>*.js`, you may edit that file (only your drill's file).
- EN client copy: you MAY fix wrong mechanic text inside the RULES / FAQ / about string constants of YOUR drill's client `app/drills/{cognitive|memory}/<group>/<drill>/*Client.*` (strings only, no logic). If the client renders a subtitle INSIDE the <h1>, move it to a sibling <p> with the same classes (markup only).
- Read-only: the client (+ hooks/constants it imports), the EN page.js of that drill.
- Edit NOTHING else (not lib/i18n/drillNames.js, not lib/drillSeo.js, not other categories, never middleware.js). If a fix needs another file, list it under "decisions needed".
- Never `git checkout/reset/stash/commit`, never build, never start a dev server (one already runs on :3000).

## Rules
1. NO external queries (no Google/Naver/Bing/autocomplete/serp_probe/WebSearch). All data is in this folder. Unknown = UNKNOWN.
2. Read the client first. Every mechanic claim (duration, start clock, time bonus/penalty, points, levels, sequence length, n-back level, grid size, what counts as hit/miss, input keys) must match the code. lib/drillPenalty has no UI toggle: only forced penalties fire; never write "penalty if enabled in settings". Claim a key only if a handler acts on it.
3. No fabricated stats: no aggregateRating, no percentiles, no invented ms norms or "average adult" scores, no IQ, no user counts, no guaranteed improvement, no "used by pros". Tier/benchmark tables may stay only if labelled as SkillDrills practice bands and consistent with the scoring code.
4. No clinical claims: not a diagnosis or screening for dementia, ADHD, MCI, concussion, IQ; not an official psicotécnico/Detran/DGT/MPU test (may say "practice"); no named instrument claims (d2, WAIS, MoCA, SDMT, Toulouse-Piéron) unless the map allows a descriptive mention and the page says it is not that test. Trademarks (Genius, Simon): only "estilo Genius"/"Simon-style" wording.
5. FAQ JSON-LD must equal the visible FAQ (both from the same array).
6. Native phrasing a local user would type. Title <= ~60 chars incl. " | SkillDrills"; description 110-160 chars; exactly one <h1> (title text only). Primary in title, H1, description, first paragraph; secondaries naturally in body/FAQ. Several pages carry 2-3 `title:` fields (metadata, openGraph, twitter, sometimes an Object.assign override later in the file that WINS) - change all consistently and remove dead duplicate base titles that describe false mechanics.
7. Do not take another page's primary. TAKEN: every primary in docs/seo/keywords/registry.csv, docs/seo/research/visual-2026-11/<loc>.md and the other rows of the cogmem map. Cognitive processing-speed/reaction-time must not use reaction-speed terms (반응속도 테스트, 反射神経テスト, Reaktionstest/Reaktionszeit Test, test de réaction/temps de réaction, teste de reação/tempo de reação, test de reacción): use the map's choice-reaction term.
8. dateModified -> "2026-11-12" only in locales you changed.
9. Order per page: ko -> ja -> de -> fr -> pt -> es. After each locale edit run:
   `bash docs/seo/tools/aud.sh <loc>/drills/<cognitive|memory>/<group>/<drill>` (no leading slash; retries compile 404s). Must print `OK`.
   Then append one line to `docs/seo/research/cogmem-2026-11/_passB_<drill>.log`: `<loc> | primary | evidence | what changed | audit OK`. This log is the resume point: on restart skip logged locales.
10. If the Debug2Fix edit gate blocks you: this is static copy work. Run `node .claude/hooks/debug-gate.js ack <session_id from the block message>` and retry once; if still blocked, stop and report.
11. Files are large; Read with offset/limit or Grep, make small exact Edits. Keep any scratch files in your own subfolder of the session scratchpad (e.g. scratchpad/cm<group>/), never a shared filename.

## COGNITIVE/MEMORY-specific rules
- KOREA: Google Korea impressions collapsed 2026-11-09 (Google-side). For ko AND ja pages whose map action is "keep" or GSC pos <= 10: do NOT change title/H1/primary; only fix false claims in body/FAQ.
- Map highlights: ja cognitive hub 脳トレ 無料ゲーム (stretch, keep page, tweak title per map); ja/de/fr/es distraction-fighter Stroop terms; ja/es memory hub 記憶力テスト 無料 / juegos de memoria online (copy must describe OUR games, not card-pair games); de cognitive hub gehirnjogging, de memory hub gedächtnistraining, de concentration-grid konzentrationsübungen (+Schulte); pt rsvp leitura dinâmica online, pt color-sequence jogo genius online ("estilo Genius"); ko n-back 엔백 게임, ko concentration-grid 슐테 테이블, ko grid-memorization 순간 기억력 테스트, ko object-location 공간 기억력 테스트.

## Groups
1. hubs: cognitive + memory
2. cognitive/attention/{concentration-stamina, divided-attention, multi-tasking}
3. cognitive/focus/{concentration-grid, distraction-fighter}
4. cognitive/processing-speed/{reaction-time, rsvp-reader, symbol-matching}
5. memory/short-term-memory/{color-sequence, digit-span, word-recall}
6. memory/spatial-memory/{grid-memorization, object-location}
7. memory/spatial-memory/path-tracing + memory/working-memory/n-back

## Final reply (<= 200 words)
Per locale: final title. Mechanic mismatches fixed (incl. EN client strings). Card-name changes the coordinator must sync in lib/i18n/drillNames.js (old -> new per locale) - do NOT edit drillNames.js. Decisions needed. Any audit not OK.
