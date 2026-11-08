# Reaction-speed PASS 3 brief (2026-11-08) - one agent per DRILL, all 6 locales, one locale at a time

Coordinator already did: all 6 go/no-go pages, es reaction-time-test, timing-game h1 fix, cursor fix. Do not touch those.

## Your ownership (exclusive - other agents edit other drills in the same worktree at the same time)
- `lib/i18n/drills/<yourFile>.js` (all locale blocks) AND `app/{ko,ja,de,fr,pt,es}/drills/reaction-speed/<drill>/page.js`.
- Edit NOTHING else. If a fix needs another file (shared component, dictionaries.js, drillNames.js, other drill), list it under "decisions needed" instead.
- Never `git checkout/reset/stash`, never build, never commit. No `npm run build` ever.

## Rules
1. NO new external queries (no Google/Naver/Bing/autocomplete/serp_probe). All demand data is already in this folder: `<market>.md`, `<market>.csv`, `_work-*/`, and `_work-p3-retry.jsonl` (ja+pt Bing re-run). Unknown = UNKNOWN. Most phrases measure 0; then write an honest native descriptive title and label it "no-demand descriptive".
2. Read the drill's client component first (`app/drills/reaction-speed/<drill>/*Client.tsx`). Every mechanic claim in copy (durations, points, time bonuses, levels, penalties, input methods, keyboard) must match the code. Example already found: barrier i18n says `+100 PTS (+0.6s)` while the client fallback says `+2s, max 60s` - check `TIME_PER_HIT`/constants and fix the copy in every locale. Claim keyboard input only if the client has a keydown handler.
3. No fabricated stats: no aggregateRating, no percentiles, no "pros react in X ms", no invented user counts, no guaranteed improvement, no medical/diagnostic claims. Editorial benchmark tables may stay only if their note says they are SkillDrills practice bands, not research norms or user percentiles.
4. FAQ JSON-LD must equal visible FAQ text (the builders already derive both from the same `faqs` array - keep it that way).
5. Native phrasing a local would type, not translated English. Title <= ~60 chars incl. " | SkillDrills"; description 110-160 chars.
6. dateModified -> "2026-11-08" only for the locales whose copy you changed.
7. One primary keyword per page; must not collide with another page's primary. Known owners (do NOT take these):
   - light-reaction: ko 반응속도 테스트, ja 反射神経テスト, de Reaktionstest, fr test de réaction, pt teste de reflexo, es test de reacción
   - hubs: ko 반응속도 훈련, ja 反射神経 鍛える, de Reaktionstraining, pt jogos de reflexo, es test de reflejos
   - ko visual-tracking-speed-test owns 동체시력 테스트 (PROTECTED - keep title, pos 4.2); ja visual-tracking owns 動体視力テスト
   - ja reflex-training 反射神経ゲーム; ja reaction-game 反応速度ゲーム; ko reflex 순발력 테스트; ko reaction-game 반응속도 게임; fr reflex-training test de réflexe
   - FPS category pages: ja `fps/angle-hold-trainer` owns 置きエイム練習 (so barrier-sequence-pursuit ja must move OFF 置きエイム to its own mechanic: reacting to a peek from cover, e.g. ピーク反応練習); ko angle-hold owns 프리에이밍 연습; de/fr/es angle-hold own "Aim Trainer"; pt angle-hold + market-doors share "treino de mira" (logged for the FPS pass; do not add more "treino de mira" primaries except the measured modifier below).
   - Measured opportunities you may assign: pt `treino de mira valorant` 363 (barrier-sequence-pursuit pt is the natural fit: Valorant-style peeks; say "para Valorant", never imply affiliation); ja `valorant 置きエイム 練習` 157 belongs to angle-hold (not yours); ko `에임 테스트` 58 (only if your drill honestly is an aim test, otherwise leave); es `control inhibitorio` taken by go/no-go.
8. Per locale, in order ko -> ja -> de -> fr -> pt -> es: edit, then audit:
   `PYTHONIOENCODING=utf-8 python docs/seo/research/reaction-speed-2026-11/_audit.py <loc>/drills/reaction-speed/<drill>` (dev server already on :3000; do not start another; never pass a leading slash). Must print OK.
   Then append one line to `docs/seo/research/reaction-speed-2026-11/_pass3_<drill>.log`: `<loc> | primary | evidence | what changed | audit OK`. This log is the resume point if you die: on restart, skip locales already logged.
9. If the edit gate hook blocks you ("Debug2Fix"), this is copy work resolved statically: run `node .claude/hooks/debug-gate.js ack c7f219b4-ed41-4dfd-853e-d7f0215303f6` and retry.
10. Files are large one-line-per-locale objects: Read with offset/limit or grep, make small exact Edits, re-Read the region before each Edit.

## Final reply (<= 250 words)
Per locale: primary, evidence, changes. Mechanic mismatches fixed. Decisions needed (files outside your ownership). Any audit not OK.
