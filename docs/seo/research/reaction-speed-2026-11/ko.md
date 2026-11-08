# KR (ko) reaction-speed pass, 2026-11-08

Data: `ko.csv` (50 phrases), `_work-ko/` (gsc_kr.json, kw1.jsonl, ac.json, serp2.jsonl).
Labels: **Bing** = Bing Webmaster exact/mo (measured), **GSC** = Google KR 90d impressions/position, **AC** = Google Suggest (proxy only, no volume).

## Key findings
- KR Bing volume is concentrated in head terms: 반응속도 테스트 10,032 (2026-09), 반응속도 1,241 (broad 14,932), 반응속도테스트 642, 반속테스트 316, 반속 테스트 282, 순발력 테스트 170, 동체시력 테스트 56, 반사신경 테스트 31, 발로란트 반응속도 테스트 22. Long-tail phrases measured 0 on Bing, but GSC shows real Google demand for them, so GSC is the signal used for KR long-tail.
- `/ko/drills/visual/reaction-speed/light-reaction` is the real reaction test and owns 반응속도 테스트, but GSC index status says **"URL is unknown to Google"**. So Google currently ranks the hub (pos 8.8, 918 impr) and the timing game (반속테스트 7.3) for reaction-test intent instead.
- Competition (Bing SERP): the head terms are a mix of thin tools and blogs (simritest, testmoa, aiselftest, testharo, naver/tistory blogs) with only one brand (humanbenchmark). That makes them LOW-MEDIUM, so they are beatable.

## Keyword map (one primary per page)
| Page | Primary | Secondary | Bing exact | GSC (pos / impr) |
|---|---|---|---|---|
| Hub | 반응속도 훈련 | 반응속도 연습, 반응속도 훈련 게임, 반사신경 테스트, 반응속도 빨라지는법 | 0 / 31 (반사신경) | 6.1/443; 8.2/441; 5.4/248 |
| light-reaction | 반응속도 테스트 | 반속 테스트, 반응속도 평균 ms, ms 테스트, 발로란트 반응속도 테스트 | 10,032; 282+316; 22 | not indexed |
| visual-tracking-speed-test | 동체시력 테스트 (PROTECTED, unchanged title) | 동체시력 훈련 사이트, 동체시력 게임, 동체시력 테스트 평균 | 56 | **4.2/650**; 5.7/66; 2.6/14 |
| reaction-game | 반응속도 게임 | 반응속도 테스트 게임, 반응속도 올리는 게임 | 0 (prior) | hub 8.1/397 |
| reflex-training-drill | 순발력 테스트 (게임) | 순발력 게임, 반사신경 게임 | 170 | hub 11.3/15 |
| fps-tracking-trainer | 트래킹 에임 연습 | 에임 트래킹 연습, 에임 트래킹 | 0 | /ko/drills/fps 7.9/23 (AC strong) |
| reaction-time-test (timing) | 시간 감각 게임 (unchanged) | 시간 맞추기 게임 (AC) | 0 | n/a; must NOT target 반속 terms |
| saccadic-gallery | 시선 이동 훈련 게임 (unchanged) | 사케드 안구 운동 | 0 | not indexed |
| go/no-go | 고노고 과제 (unchanged) | 고노고 테스트 (AC) | 0 | unknown to Google |
| barrier-sequence / market-doors | unchanged | - | 0 | ~0 |

## Implemented (ko only)
- Hub (`lib/i18n/reactionSpeedHubNative.js` ko): title "반응속도 훈련 게임 · 반사신경 테스트 모음" (55 units with the brand), new description, H1, intro, keywords, breadcrumb/FAQ title, 5 new FAQs (빨라지는법, 평균 ms with Kosinski/Woods citations, which drill to start with, 반사신경 vs 반응속도, Valorant/LoL with no guarantees), and the itemList names aligned with the page titles. The hub still links to light-reaction with the anchor "반응속도 테스트 시작".
- light-reaction (`app/ko/.../light-reaction/page.js`): title "반응속도 테스트 | 반속 테스트·평균 ms 측정" (56 units), description, OG/Twitter, keywords, H1 "반응속도 테스트 (반속 테스트)", guide heading plus a plain first paragraph. The 10 FAQs (several had unsourced numbers for caffeine, hearing and neuron stages) became 5 factual ones. I removed the "pro esports / Olympic sprinter" tier claim and the "증명합니다" overclaim. Per the coordinator, the spacebar mentions are gone: the howTo step and FAQ now say click or tap.
- visualTrackingSpeedTestNative ko: description and keywords only; the title is untouched.
- reflexTrainingDrillNative / reactionGame ko: keywords de-duplicated against other pages' primaries.
- fpsTrackingTrainer ko: title, subtitle, description and keywords now target 트래킹 에임 연습.

## KILL list
- 반응속도 테스트 on the hub title: moved to light-reaction.
- 지글피킹 / 각쪼개기 / 피킹 연습 / 사카딕 / 안구운동 / 시뮬레이터 phrasings: Bing 0 twice (2026-09, 2026-11). Left as-is, no further work.
- Timing phrasings (시간 맞추기 게임, 초 맞추기 게임, 10초 맞추기 게임, 스톱워치 게임): Bing 0, and the AC intent is arcade 인형뽑기. Do not retarget.

## Caveats
- The first Bing run used lang `ko` and every row came back HTTP 400. The 2026-10 KR `p1` "nodata" rows probably have the same cause. The rerun with `ko-KR` worked.
- The Bing SERP probe failed on 11 of 15 queries (timeouts / ERR_CONNECTION_CLOSED). Competition is classified from 4 fresh SERPs plus the 2026-10 `s1` SERPs.
- trend_pct was not run, because no phrase outside the already-known head terms had volume.
