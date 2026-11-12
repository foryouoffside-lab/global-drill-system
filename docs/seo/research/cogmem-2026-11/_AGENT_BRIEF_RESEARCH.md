# COGNITIVE + MEMORY - Phase A research brief (2026-11-12), one agent per 2 markets (markets one after the other)

Goal: for ONE market, a page -> primary keyword map for the localized COGNITIVE pages (hub /<loc>/drills/cognitive + attention/{concentration-stamina,divided-attention,multi-tasking}, focus/{concentration-grid,distraction-fighter}, processing-speed/{reaction-time,rsvp-reader,symbol-matching})
and MEMORY pages (hub /<loc>/drills/memory + short-term-memory/{color-sequence,digit-span,word-recall}, spatial-memory/{grid-memorization,object-location,path-tracing}, working-memory/n-back),
with measured demand AND beatable competition, no two pages sharing a primary. You do NOT edit site code.

## Context
- Sept 2026: owner stopped translating 6 cognitive drills after Bing showed ~zero non-English demand (memory note). Re-measure honestly; do not assume.
- Known strong families to test: ko 기억력 테스트 / 집중력 테스트 / 순간 기억력, ja 記憶力テスト / 集中力テスト / 脳トレ, de Gedächtnistest / Konzentrationstest, fr test de mémoire / test de concentration, pt teste de memória / teste de atenção concentrada (detran/psicotécnico intent!), es test de memoria / test de atención. N-back, Schulte table (concentration-grid), Stroop (distraction-fighter?), digit span, RSVP speed reading have their own native names - check each client to know which test each drill really is.
- KOREA: Google Korea impressions collapsed 2026-11-09 (Google-side). Any ko/ja page with GSC pos <= 10 => action "keep".
- TAKEN primaries (never reuse): every primary in docs/seo/keywords/registry.csv (all categories) and docs/seo/research/visual-2026-11/<m>.md. Cognitive processing-speed/reaction-time must not take reaction-speed terms (반응속도 테스트, 反射神経テスト, test de reacción ...).
- Honest intent: a term must describe what the drill does. No IQ/clinical/dementia/ADHD diagnosis claims; psicotécnico/detran terms only as "practice", never "official test".

## Measurement caps (OWNER RULE - ban risk)
- NO Google/Naver/Yahoo searches in Chrome, no WebSearch, no loops, max one retry.
- Per MARKET: max 1 run of `python scripts/keywords/bing_kw.py --file <tsv>` with <= 40 phrases (cognitive + memory together), full locale codes (ko-KR, ja-JP, de-DE, fr-FR, pt-BR, es-ES); LAST row = canary (ko 클릭속도 테스트, ja 連打測定, de reflex test, fr reflex test, es test de reacción, pt coordenação motora). Canary 0 => zeros are UNKNOWN.
  Shared lock: before running, check no other python bing_kw.py process runs (tasklist / wmic); wait (no polling faster than 15 s).
- Per MARKET: max 10 autocomplete calls (`python scripts/keywords/autocomplete.py "<seed>" <cc> <lang> --expand`).
- serp_probe.mjs is currently BROKEN (times out every call) - skip it; competition = our GSC position (pos <= 10 => low) else UNKNOWN.
- GSC read-only OK: `python scripts/gsc/gsc.py pageopps 90 200`, docs/seo/research/motor-2026-11/gsc-*-90d.csv.

## Deliverables (only these files)
- docs/seo/research/cogmem-2026-11/<market>.md: table `page | current title | proposed primary | secondaries | evidence (Bing, GSC impr/pos, AC) | competition | action (keep/retarget/no-demand descriptive)`; collisions resolved; kill list. Write incrementally.
- <market>.csv raw rows; raw output in _work-<market>/ (kw.tsv, kw.jsonl, kw.done after Bing, ac.txt).
- RESUME: if _work-<m>/kw.done exists never re-run Bing for that market.
- Final reply <= 250 words: top 5 opportunities per market (volume + competition evidence), collisions, decisions.
