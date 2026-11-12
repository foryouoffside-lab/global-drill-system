# ko (South Korea, ko-KR, cc kr) - COGNITIVE + MEMORY page -> primary keyword map (2026-11-12)

Status: DONE (Bing 1 run / 40 rows; AC 10/10; GSC read-only).

## Inputs
- Bing: _work-ko/kw.tsv -> kw.jsonl (kw.done). Canary `클릭속도 테스트` = 920 exact -> Bing ko-KR is live, so zeros below are MEASURED zeros on Bing (not unknown). Bing is a tiny channel in Korea; Google/Naver demand is invisible to this API.
- Only non-zero cog/mem term: `두뇌게임` 47 (exact=broad). Everything else 0 (기억력 테스트, 집중력 테스트, 순간 기억력 테스트, 스트룹 테스트, 슐테 테이블, 엔백, 속독 테스트, ...).
- AC (Google kr/ko, 10 seeds, _work-ko/ac.txt): strong families exist on Google: 기억력 테스트 (무료/사이트/게임/숫자/단어), 집중력 테스트 (게임/무료/사이트), 순간 기억력 테스트 (페이커, 숫자), 숫자 기억력 테스트, 스트룹 테스트 (사이트/검사/게임), 슐테 테이블, 엔백 (게임/연습/테스트/훈련), 속독테스트 / 독해속도 테스트, 멀티태스킹 테스트 (점수/능력 테스트), 두뇌게임 (사이트/무료/온라인).
- GSC 90d page+query: _work-ko/gsc_pq_cognitive.json (4 rows), gsc_pq_memory.json (0 rows). Page level (motor-2026-11/gsc-pages-90d.csv): ko/cognitive 25i p6.8 (집중력 테스트 무료 3i p6.3); ko/distraction-fighter 55i/5c p8.02 (스트 룹 테스트 사이트 14i/2c p7.9, 스트룹 과제 p7, 스트룹테스트 p17). No other ko cog/mem page has impressions. Google KR collapse 2026-11-09 noted.
- Competition: serp_probe broken -> GSC pos <= 10 = low/beatable, else UNKNOWN.
- Taken (registry): 순발력 테스트, 반응속도 테스트/게임/훈련, FPS 집중력 훈련, 도형 순서 기억 게임, 고노고 과제, 시간 감각 게임 etc. `공간 기억력 테스트` is FREE (physical complex-pattern dropped it).

## Page -> primary map (paths under /ko/drills/)
| page | current title | proposed primary | secondaries | evidence (Bing, GSC impr/pos, AC) | competition | action |
|---|---|---|---|---|---|---|
| cognitive (hub) | 무료 두뇌 훈련 & 집중력 테스트 | 두뇌게임 | 집중력 테스트 무료, 두뇌 훈련 | Bing 두뇌게임 47 (only measured term), 두뇌 게임 0, 두뇌 훈련 0; GSC 25i p6.8 (집중력 테스트 무료 p6.3); AC 두뇌게임 사이트/무료/온라인 | pos 6.8 = low | KEEP (pos <= 10). Optional Phase B: swap `두뇌 훈련` -> `두뇌게임` in title lead; keep 집중력 테스트 무료 as secondary. Do NOT use 치매 (AC 두뇌 게임 치매) |
| cognitive/attention/concentration-stamina | 집중력 테스트 \| 지속 주의력 측정 | 집중력 테스트 | 지속 주의력 테스트, 집중력 체크 | Bing 0; GSC 0; AC 집중력 테스트 게임/무료/사이트, 집중력 체크 | UNKNOWN | keep (owns 집중력 테스트; hub uses `집중력 테스트 무료` only as secondary). No adhd/집중력 장애 terms (AC shows them - diagnosis intent, banned) |
| cognitive/attention/divided-attention | 분할 주의력 테스트 \| 이중과제 훈련 | 분할 주의력 테스트 | 이중과제 훈련 | Bing 분할 주의력 0; AC none | UNKNOWN | no-demand descriptive (keep) |
| cognitive/attention/multi-tasking | 멀티태스킹 테스트 \| 이중 표적 추적 | 멀티태스킹 테스트 | 멀티태스킹 능력 테스트, 멀티태스킹 연습 | Bing 0; AC 멀티태스킹 테스트 점수 / 능력 테스트 / 연습 | UNKNOWN | keep; add `능력 테스트` + score wording in body |
| cognitive/focus/concentration-grid | 집중력 테스트 게임 \| 슐테 테이블 격자 | 슐테 테이블 | 슐테 테이블 게임, 숫자 순서 찾기 | Bing 슐테 테이블 0, 집중력 테스트 게임 0; GSC 0; AC 슐테 테이블 (top suggestion for 슐테) | UNKNOWN | RETARGET: lead with 슐테 테이블 (the drill is a Schulte table); drop `집중력 테스트 게임` (collides with concentration-stamina 집중력 테스트) |
| cognitive/focus/distraction-fighter | 스트룹 테스트 \| 선택적 주의력 훈련 | 스트룹 테스트 | 스트룹 테스트 사이트, 스트룹 과제, 스트룹 효과 | Bing 0; GSC 55i/5c p8.0 (스트 룹 테스트 사이트 14i p7.9, 스트룹 과제 p7); AC 스트룹 테스트/검사/게임/테스트 사이트 | pos 8 = low | KEEP (pos <= 10). Avoid 스트룹 검사 (clinical) as primary |
| cognitive/processing-speed/reaction-time | 선택 반응 시간 테스트 \| 색상 규칙 전환 훈련 | 선택 반응 시간 테스트 | 색상 규칙 전환 | Bing 선택 반응 시간 0 | UNKNOWN | no-demand descriptive (keep). Must not take 반응속도 테스트 (taken) |
| cognitive/processing-speed/rsvp-reader | 속독 훈련·속독 테스트 \| RSVP 읽기 | 속독 테스트 | 속독 훈련, 독해속도 테스트, RSVP | Bing 속독 테스트 0, 속독 훈련 0; AC 속독테스트, 독해속도 테스트, 속독 연습 프로그램 | UNKNOWN | RETARGET-light: lead `속독 테스트` (AC test intent > 훈련), add 독해속도 테스트; claim WPM, not comprehension score |
| cognitive/processing-speed/symbol-matching | 처리속도 테스트 \| 기호 숫자 매칭 훈련 | 처리속도 테스트 | 기호 숫자 매칭 | Bing 0; AC none | UNKNOWN | no-demand descriptive (keep). No IQ/K-WAIS claim |
| memory (hub) | 기억력 테스트·기억력 게임 | 기억력 테스트 | 기억력 게임, 기억력 테스트 사이트/무료 | Bing 0 (all variants); GSC 0; AC 기억력 테스트 무료/사이트/게임/숫자/단어 | UNKNOWN | keep (hub owns generic; children own 숫자/단어/순간 variants). No 기억력 iq/mbti |
| memory/short-term-memory/color-sequence | 색깔 순서 기억 게임 | 색깔 순서 기억 게임 | 사이먼 게임 | Bing 0 / 사이먼 게임 0 | UNKNOWN | no-demand descriptive (keep) |
| memory/short-term-memory/digit-span | 숫자 기억력 테스트 \| 숫자 외우기 | 숫자 기억력 테스트 | 숫자 기억 테스트, 숫자 기억력 게임 | Bing 0; AC 숫자 기억력 테스트/게임 (12 suggestions), 숫자순간기억력 | UNKNOWN | keep. Do not claim `순간 숫자 기억력 테스트 pro` (third-party app name) |
| memory/short-term-memory/word-recall | 단어 기억력 테스트 \| 단어 회상 | 단어 기억력 테스트 | 기억력테스트 단어 | Bing 0; AC 기억력테스트 단어 | UNKNOWN | keep |
| memory/spatial-memory/grid-memorization | 순간 기억력 테스트 \| 시각 기억 게임 | 순간 기억력 테스트 | 순간 기억력 게임, 시각 기억력 테스트 | Bing 0; AC strongest memory family (26 suggestions: 테스트/게임/페이커/훈련) | UNKNOWN | keep (flash-grid recall fits 순간 기억력). Never imply a pro-gamer benchmark (페이커) |
| memory/spatial-memory/object-location | 공간 기억력 테스트 \| 물체 위치 기억 | 공간 기억력 테스트 | 물체 위치 기억 | Bing 0; AC none | UNKNOWN | keep (free since physical dropped it) |
| memory/spatial-memory/path-tracing | 코르시 블록 검사 \| 순서 기억 | 코르시 블록 테스트 | 블록 순서 기억, 시공간 작업기억 | Bing 코르시 블록 0; GSC 0; AC none | UNKNOWN | no-demand descriptive; replace `검사` (clinical connotation) with 테스트. Mechanic = Corsi (lit blocks, repeat order) - accurate |
| memory/working-memory/n-back | 듀얼 N-백 \| 작업기억 훈련 게임 | 엔백 게임 | 듀얼 엔백, N-back, 엔백 연습/훈련 | Bing 엔백/n백/듀얼 엔백 0; AC 엔백게임, 엔백 연습, 엔백 테스트, 엔백 훈련 (Korean users write 엔백, not N-백) | UNKNOWN | RETARGET-light: use Hangul spelling 엔백 in title/H1 (`엔백 게임 \| 듀얼 N-back 작업기억 훈련`). AC also shows company noise (엔백 주식회사) - keep `게임` attached |

## Collisions resolved
- 집중력 테스트: concentration-stamina owns it; concentration-grid drops `집중력 테스트 게임` -> 슐테 테이블; hub keeps only `집중력 테스트 무료` as secondary (GSC query it already ranks for).
- 순간 기억력 vs 숫자 기억력: grid-memorization owns 순간 기억력 테스트; digit-span owns 숫자 기억력 테스트; hub owns generic 기억력 테스트.
- 반응속도 *: untouched (reaction pass owns); reaction-time stays 선택 반응 시간.
- 공간 기억력 테스트 is no longer held by physical complex-pattern -> object-location.

## Kill list (never use)
- adhd 집중력 테스트, 집중력 장애 테스트, 두뇌 게임 치매, 기억력 iq / 집중력 iq / 멀티태스킹 iq, 기억력 mbti (diagnosis/IQ intent).
- 순간 숫자 기억력 테스트 pro (app brand), 페이커 (person), 스트룹와플 (food noise), 엔백 주식회사 (company).
- 스트룹 검사 / 코르시 블록 검사 as primary (clinical framing).

## Decisions
- Bing measured ~zero for every cog/mem phrase in ko-KR with a healthy canary: the Sept 2026 "no non-English demand" read is confirmed for Bing. Google AC proves Google-side demand for the 기억력/집중력/순간 기억력/스트룹 families - that is the channel these pages target; volume remains unmeasured.
- Only real retargets: concentration-grid (-> 슐테 테이블, collision), rsvp-reader (test-intent lead), n-back (Hangul 엔백), path-tracing (검사 -> 테스트). Everything else keep.
