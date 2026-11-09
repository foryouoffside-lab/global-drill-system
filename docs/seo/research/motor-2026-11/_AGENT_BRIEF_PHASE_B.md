# MOTOR Phase B brief (2026-11-09) - 5 agents, each owns 1-2 MOTOR pages x the locales whose map exists

Goal: apply the Phase A keyword maps to the localized MOTOR pages and make every mechanic claim match the code.
Maps (the source of truth): `docs/seo/research/motor-2026-11/<loc>.md (ko, de, fr, pt now; ja + es maps are still being written - process them only if motor-2026-11/ja.md / es.md contain a full page table when you reach them, else log "<loc> | SKIPPED no map")` -> section "Page -> primary map".
Follow the map's `proposed primary` + `action` for your pages. "drop lead" = remove the leading "Aim Trainer |" / "Treino de Mira |" / "에임 연습 |" / "エイム練習 |" from title, H1 and og/twitter titles, and write an honest native descriptive title around the proposed primary.

## Your ownership (exclusive - 4 other agents edit other MOTOR pages; FPS pages are being committed separately in the same worktree at the same time)
- ONLY `app/{ko,ja,de,fr,pt,es}/drills/motor/<group>/<your-drill>/page.js` (hub agent: `app/{loc}/drills/motor/page.js`).
- Read-only: the client `app/drills/motor/<group>/<drill>/*Client.js` (+ any hook/constants it imports), the EN page `app/drills/motor/<group>/<drill>/page.js`.
- Edit NOTHING else (not lib/i18n/drillNames.js, not dictionaries.js, not FPS/reaction/physical pages, not EN pages, not clients). If a fix needs another file, list it under "decisions needed".
- Never `git checkout/reset/stash/commit`, never build, never start a dev server (one already runs on :3000).

## Rules
1. NO external queries (no Google/Naver/Bing/autocomplete/serp_probe/WebSearch). All data is in this folder. Unknown = UNKNOWN.
2. Read the client first. Every mechanic claim (duration, points, combo, time bonus/penalty, levels, target size/speed, input: mouse/pointer lock/touch/keyboard, what counts as a hit/miss) must match the code. Claim a key only if the client has a keydown handler for it. Fix wrong claims in all 6 locales.
3. No fabricated stats: no aggregateRating, no percentiles, no "pros flick in X ms", no invented user counts, no guaranteed improvement, no medical claims, no "used by pros/teams". Benchmark/tier tables may stay only if labelled as SkillDrills practice bands (not research norms or user data). Brands (Valorant, CS2, Apex, Overwatch, PUBG, R6) only as usage context ("for Valorant players", "pour Valorant"), never implying affiliation.
4. FAQ JSON-LD must equal the visible FAQ (keep both derived from the same array).
5. Native phrasing a local gamer would type. Title <= ~60 chars incl. " | SkillDrills"; description 110-160 chars; exactly one <h1>. Primary in title, H1, description, first paragraph; secondaries in body/FAQ naturally (no stuffing).
6. Do not take another page's primary. Owners elsewhere (never use as your primary unless your page IS the named owner): motor aim-trainer owns the bare "aim trainer"/"aim trainer online" head term in de/fr/es/pt, ko 에임 연습 사이트 + 에임 테스트, ja エイム練習 (+ブラウザ); reaction pages own 반응속도 테스트, 反射神経テスト/反応速度テスト, Reaktionstest/Reaktionszeit Test, test de réaction/temps de réaction/test de réflexe, teste de reflexo, test de reflejos/test de reacción, 트래킹 에임 연습 (ko fps-tracking-trainer), 動く的のエイム練習, treino de mira valorant (pt barrier), Peek-Training. The pt FPS hub owns "Treino de Mira"; ko FPS hub owns 에임 연습/에임연습; es FPS hub owns "Entrenamiento de puntería".
7. dateModified -> "2026-11-09" only in locales you changed.
8. Order per page: ko -> ja -> de -> fr -> pt -> es. After each locale edit run:
   `PYTHONIOENCODING=utf-8 python docs/seo/research/reaction-speed-2026-11/_audit.py <loc>/drills/motor/<group>/<drill>` (no leading slash; first compile can take ~60 s). Must print `OK`.
   Then append one line to `docs/seo/research/motor-2026-11/_passB_<drill>.log`: `<loc> | primary | evidence | what changed | audit OK`. This log is the resume point: on restart skip logged locales.
9. If the Debug2Fix edit gate blocks you: this is static copy work. Run `node .claude/hooks/debug-gate.js ack <session_id from the block message>` and retry once; if still blocked, stop and report.
10. Files are large; Read with offset/limit or Grep, make small exact Edits, re-read the region before each Edit.

## Final reply (<= 200 words)
Per locale: final title. Mechanic mismatches fixed. Card-name changes the coordinator must sync in lib/i18n/drillNames.js (old -> new per locale). Decisions needed. Any audit not OK.

## Motor-specific
- Taken primaries now also include every FPS page primary (docs/seo/research/fps-2026-11/<loc>.md) - motor pages must not take them.
- Motor aim-trainer OWNS the bare "aim trainer" head term (de/fr/es/pt), ko 에임 연습 사이트 + 에임 테스트; PROTECT `/ja/drills/motor/hand-eye-coordination/aim-trainer` title (ranks; owns エイム練習).
- rapid-tapping may target CPS/click-test terms only because it really counts clicks per second (verify in client). keyboard-recognition must NOT claim keyboard-tester / typing-test intent (it shows keys to press; it does not test hardware or typing speed).
- Known bug to fix while there: motor aim-trainer h1 concatenates the subtitle in pt/es/de (h1 must be only the title text).
- Card names in lib/i18n/drillNames.js: do NOT edit; report old -> new.
