# ko / keyboard-recognition — research log

Date: 2026-10-08 · Route: `/ko/drills/motor/movement-speed/keyboard-recognition` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`.

## Queries (Bing kr exact, measured earlier in this run)
| Phrase | Bing exact | Notes |
|---|---|---|
| `키보드 테스트` | 2,772 | key-tester intent (dead keys, ghosting); this drill is a reaction/selection drill and does not serve it |
| `키보드 테스트 사이트` | 320 | same intent |
| `키보드 입력 테스트` | 218 | closer: input speed/response |
| `키보드 반응속도 테스트` | 107 | primary (already in title); Naver autocomplete `키보드 반응속도 테스트/설정/올리는법/차이/확인방법` |
| `키보드 속도 테스트` | not returned (throttled) | unmeasured |

## Intent
`키보드 반응속도` queries mix hardware settings (polling/Nuphy-style speed settings, `설정`, `조절`) with browser tests. Page must say it measures reaction to on-screen keys, not hardware latency.

## SERP
Not captured.

## B3
Demand 3, competition ease 3, intent fit 4. Decision: keep `키보드 반응속도 테스트` title; do not chase `키보드 테스트` (different tool intent; would need a key tester).

## Defects found / changes
- Benchmark table invented percentiles (`상위 1% 프로급 머슬 메모리`, `상위 5%`, `상위 20%`) and English rank names (Apex Keybinder etc.); replaced with Korean reference bands and a not-statistics description.
- FAQ `상위 1% 프로급 선수는 240ms 미만 ... 98% 이상 달성` replaced with a hedged answer.
- `극대화` guide description softened.

## Demand status
Verified (Bing 107 at the exact phrase; 218 for the adjacent `키보드 입력 테스트`).

## Trend note
Not measured. No claim.
