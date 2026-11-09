# FPS Phase B brief (2026-11-09) - 8 agents, each owns 2 FPS pages x 6 locales

Goal: apply the Phase A keyword maps to the localized FPS pages and make every mechanic claim match the code.
Maps (the source of truth): `docs/seo/research/fps-2026-11/{ko,ja,de,fr,pt,es}.md` -> section "Page -> primary map".
Follow the map's `proposed primary` + `action` for your pages. "drop lead" = remove the leading "Aim Trainer |" / "Treino de Mira |" / "에임 연습 |" / "エイム練習 |" from title, H1 and og/twitter titles, and write an honest native descriptive title around the proposed primary.

## Your ownership (exclusive - 7 other agents edit other FPS pages in the same worktree at the same time)
- ONLY `app/{ko,ja,de,fr,pt,es}/drills/fps/<your-drill>/page.js` (hub agent: `app/{loc}/drills/fps/page.js`).
- Read-only: the client `app/drills/fps/<drill>/*Client.js` (+ any hook/constants it imports), the EN page `app/drills/fps/<drill>/page.js`.
- Edit NOTHING else (not lib/i18n/drillNames.js, not dictionaries.js, not motor/reaction pages, not EN pages, not clients). If a fix needs another file, list it under "decisions needed".
- Never `git checkout/reset/stash/commit`, never build, never start a dev server (one already runs on :3000).

## Rules
1. NO external queries (no Google/Naver/Bing/autocomplete/serp_probe/WebSearch). All data is in this folder. Unknown = UNKNOWN.
2. Read the client first. Every mechanic claim (duration, points, combo, time bonus/penalty, levels, target size/speed, input: mouse/pointer lock/touch/keyboard, what counts as a hit/miss) must match the code. Claim a key only if the client has a keydown handler for it. Fix wrong claims in all 6 locales.
3. No fabricated stats: no aggregateRating, no percentiles, no "pros flick in X ms", no invented user counts, no guaranteed improvement, no medical claims, no "used by pros/teams". Benchmark/tier tables may stay only if labelled as SkillDrills practice bands (not research norms or user data). Brands (Valorant, CS2, Apex, Overwatch, PUBG, R6) only as usage context ("for Valorant players", "pour Valorant"), never implying affiliation.
4. FAQ JSON-LD must equal the visible FAQ (keep both derived from the same array).
5. Native phrasing a local gamer would type. Title <= ~60 chars incl. " | SkillDrills"; description 110-160 chars; exactly one <h1>. Primary in title, H1, description, first paragraph; secondaries in body/FAQ naturally (no stuffing).
6. Do not take another page's primary. Owners outside FPS (never use as your primary): motor aim-trainer owns the bare "aim trainer"/"aim trainer online" head term in de/fr/es/pt, ko 에임 연습 사이트 + 에임 테스트, ja エイム練習 (+ブラウザ); reaction pages own 반응속도 테스트, 反射神経テスト/反応速度テスト, Reaktionstest/Reaktionszeit Test, test de réaction/temps de réaction/test de réflexe, teste de reflexo, test de reflejos/test de reacción, 트래킹 에임 연습 (ko fps-tracking-trainer), 動く的のエイム練習, treino de mira valorant (pt barrier), Peek-Training. The pt hub owns "Treino de Mira"; ko hub owns 에임 연습/에임연습 (PROTECTED title - hub agent: do not change the ko hub title); es hub owns "Entrenamiento de puntería".
7. dateModified -> "2026-11-09" only in locales you changed.
8. Order per page: ko -> ja -> de -> fr -> pt -> es. After each locale edit run:
   `PYTHONIOENCODING=utf-8 python docs/seo/research/reaction-speed-2026-11/_audit.py <loc>/drills/fps/<drill>` (no leading slash; first compile can take ~60 s). Must print `OK`.
   Then append one line to `docs/seo/research/fps-2026-11/_passB_<drill>.log`: `<loc> | primary | evidence | what changed | audit OK`. This log is the resume point: on restart skip logged locales.
9. If the Debug2Fix edit gate blocks you: this is static copy work. Run `node .claude/hooks/debug-gate.js ack <session_id from the block message>` and retry once; if still blocked, stop and report.
10. Files are large; Read with offset/limit or Grep, make small exact Edits, re-read the region before each Edit.

## Final reply (<= 200 words)
Per locale: final title. Mechanic mismatches fixed. Card-name changes the coordinator must sync in lib/i18n/drillNames.js (old -> new per locale). Decisions needed. Any audit not OK.
