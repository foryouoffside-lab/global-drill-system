# ko / memory-hub — research log

Date: 2026-10-08 · Route: `/ko/drills/memory` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `기억력 테스트` | Bing exact 44 / broad 44 (kr); Naver autocomplete: `무료`, `게임`, `숫자`, `단어`, `앱`, `사이트`, `그림` | measured (Bing kr, low) + proxy |
| `기억력 게임` | Naver autocomplete: `어플`, `보드게임`, `사이트`, `추천`, `만들기`; Bing exact 0 | proxy |
| `기억력 훈련`, `기억력 향상 게임`, `작업 기억 테스트` | Bing 0; Naver nothing / weak | no measured signal |
| `뇌 훈련 게임`, `두뇌 게임`, `인지 훈련` | Naver autocomplete only | proxy |

## Intent
Tool/game ("테스트", "게임", "사이트"). Hub-level: user picks a task type.

## SERP
Not captured.

## B3
Demand 2 (Bing 44, autocomplete breadth), competition ease 3, intent fit 5. Decision: `기억력 테스트·기억력 게임` (the two phrases with Naver support) replaces `기억력 테스트와 기억력 훈련` (`기억력 훈련` has no signal).

## Defects found / changes
- Title/H1/description/keywords (ko entry of `lib/i18n/memoryHubNative.js`) re-aimed.
- OG/Twitter image was the 512 px icon; ko page.js now overrides with `/opengraph-image`.
- Existing 10-item FAQ is native, hedged and consistent with the schema; no invented figures found.

## Demand status
Low but verified at the head term (Bing 44).

## Trend note
Not measured. No claim.
