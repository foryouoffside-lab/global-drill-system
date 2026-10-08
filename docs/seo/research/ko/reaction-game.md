# ko / reaction-game — research log

Date: 2026-10-08 · Route: `/ko/drills/reaction-speed/reaction-game` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`. Bing 0 / Naver empty means unmeasured, not no demand.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `반응속도 게임` | Bing exact 25 / broad 25 (kr); Google Suggest `반응속도 게임`, `반응속도 훈련 게임`, `반응속도 테스트 게임`; Naver `반응속도 게임` | measured (Bing kr, low) |
| `반응 속도 테스트` (spaced) | previous primary; spaced variant not returned by Suggest/Naver | no signal |
| `반응속도 테스트` | Bing 13,122; owned by the reaction-time-test page | measured, not this page's target |

## Intent
Falling-target lane clicking game. `반응속도 게임` is the measured nearest query; the spaced `반응 속도 테스트 게임` title also collided with the head term owned by reaction-time-test.

## B3
Demand 1-2 (low measured), competition ease 3 (unverified), intent fit 4. Decision: `반응속도 게임 · 낙하 표적 테스트`.

## Defects found / changes
- Title/H1/keywords moved from the spaced `반응 속도 테스트 게임` to the measured `반응속도 게임`.
- Body copy was already honest (reference bands labelled not statistics; no sub-ms; no fabricated schema). Not rewritten.
- Edited ko entries only in shared `lib/i18n/drills/reactionGame.js`.

## Demand status
Measured but small (Bing 25). Not verified for Google.

## Trend note
Not measured. No claim.
