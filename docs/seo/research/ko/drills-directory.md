# ko / drills-directory — research log

Date: 2026-10-08 · Route: `/ko/drills` · Market: South Korea, `gl=kr hl=ko`

## Tools (this run)
- Google Suggest `autocomplete.py ... kr ko --expand`: works. Naver autocomplete (`ac.search.naver.com`): works. Bing `bing.py keyword ... kr`: works (shared key, 1.5 s throttle). GSC `gsc.py pages/queries 90`: works; zero Korean-character queries in 90 days, `/ko/*` pages have 0 clicks and 1–18 impressions each (measured, GSC). SERP capture and Trends: not run (no browser SERP session in this worktree); no Trends claim made.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `반응속도 테스트` | Bing exact 13,122 / broad 13,879 (kr); Google Suggest + Naver both return it | measured (Bing kr), Bing is not Google volume |
| `에임 연습 사이트` | Bing exact 956 / broad 1,814 | measured (Bing kr) |
| `에임 연습` | Bing exact 310 / broad 2,365; Naver: `에임 연습 프로그램` | measured (Bing kr) |
| `키보드 테스트` | Bing exact 2,772 / broad 3,092 | measured (Bing kr) |
| `cps 측정` / `클릭속도 테스트` | Bing exact 1,051 / 730 | measured (Bing kr) |
| `순발력 테스트` | Bing exact 204; Naver `순발력 테스트 게임/사이트` | measured (Bing kr) |
| `기억력 테스트` / `동체시력 테스트` | Bing exact 44 / 40; both in Naver autocomplete | measured (low) |
| `뇌 훈련 게임`, `두뇌 게임`, `인지 훈련` | Naver autocomplete only; Bing 0 | proxy (autocomplete) |

## Intent
Directory/hub intent: user wants a list of free tools by goal (aim, reaction, CPS, memory). Head terms with measured volume are reaction test, aim practice site, CPS, keyboard test.

## Defects found
- Title led with `무료 에임·두뇌 훈련 드릴` (no measured term first); H1 `무료 온라인 드릴` carried no query.
- FAQ answers claimed `1밀리초 미만의 높은 정밀도` (unsupported sub-millisecond claim), `눈에 띄게 개선`, `완벽한 프라이버시`, `자동으로 안내됩니다` (unverified).
- `og:image` was the 512 px icon, not the default social image.
- Not fixable from page.js (client, D2): English strings in cards and `Session preferences` heading.

## Changes
- Title `에임 연습 사이트·반응속도 테스트 81종 | SkillDrills`; description names the measured terms; keywords list updated (`lib/i18n/siteLandingSeoNative.js` ko entry).
- H1 via ko dictionary `directory.h1Prefix/h1Highlight`: `무료 에임 연습·반응속도 테스트 온라인 드릴 모음`.
- FAQ rewritten: 8 native Q&A, unsupported claims removed, reaction-time range cited to Woods et al. 2015 as a range only; visible FAQ and JSON-LD share the same source array.
- OG/Twitter image switched to `/opengraph-image`.

## B3
Demand 5 (reaction test), competition ease 2 (Human Benchmark class sites dominate the head term), intent fit 4. Decision: hub title leads with the two measured head terms; individual drill pages carry the long tail.

## Trend note
Not measured. No claim.
