# ko / motor-hub — research log

Date: 2026-10-08 · Route: `/ko/drills/motor` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md` (all Bing figures below were measured earlier in this run before the key started returning `ThrottleUser`).

## Queries (Bing kr exact, measured)
| Phrase | Bing exact | Notes |
|---|---|---|
| `키보드 테스트` | 2,772 | key-tester intent (not this hub's drill); `키보드 테스트 사이트` 320 |
| `cps 측정` / `마우스 클릭 테스트` / `클릭속도 테스트` | 1,051 / 751 / 730 | covered by rapid-tapping |
| `에임 연습 사이트` / `에임 연습` | 956 / 310 | aim-trainer |
| `키보드 반응속도 테스트` | 107 | keyboard-recognition |
| `마우스 정확도 테스트`, `손떨림 테스트`, `손 안정성 테스트` | 0 | Naver: `마우스 정확도 테스트/향상`; `손떨림` queries are medical (`손떨림 원인/병원`) so not adopted |

## Intent
Hub: user wants to pick a motor tool by goal. Measured intents are CPS, aim practice, keyboard.

## SERP
Not captured.

## B3
Demand 4 (cluster), competition ease 2, intent fit 4. Decision: hub title/H1 list the three measured families (`CPS 측정·에임 연습 사이트·키보드 반응속도`).

## Defects found / changes
- Title/H1/description/keywords re-aimed; H1 and desc set in the ko dictionary (`hubs.motor.h1/desc`), collection schema name aligned.
- FAQ: removed `0.1ms 정밀도` and `0.1ms 단위 ... 보장` (sub-millisecond claims), `180ms 미만으로 ... 변환`, `방지합니다`; keyboard answer no longer claims switch diagnosis.
- OG/Twitter image switched to the default `/opengraph-image`.
- Not fixable here: hub card text and a few headings come from the client (D2).

## Demand status
Verified (CPS, aim practice, keyboard test volumes above).

## Trend note
Not measured. No claim.
