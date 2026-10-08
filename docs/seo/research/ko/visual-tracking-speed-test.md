# ko / visual-tracking-speed-test — research log

Date: 2026-10-08 · Route: `/ko/drills/reaction-speed/visual-tracking-speed-test` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`. Bing 0 / Naver empty means unmeasured, not no demand.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `동체시력 테스트` | Bing exact 40 / broad 40 (kr); Google Suggest + Naver autocomplete; the visual hub already targets it | measured (Bing kr, low) |
| `동체시력 테스트 게임` | Google Suggest + Naver autocomplete (`동체시력 테스트 게임`); Bing 0 | proxy (autocomplete) |
| `동체시력 게임` | Naver autocomplete; Bing 0 | proxy (autocomplete) |

## Intent
Moving-target tracking game. Hub (`/ko/drills/visual`) keeps the head `동체시력 테스트`; this page takes the autocomplete-supported `동체시력 테스트 게임` to avoid two pages with the same title.

## B3
Demand 1, competition ease 3 (unverified), intent fit 5. Decision: add `게임`, add an explicit non-medical statement to the description.

## Defects found / changes
- Title identical to the visual hub's head term -> `동체시력 테스트 게임`.
- Keyword list de-duplicated (`반응속도 테스트`, `주변시 훈련` removed: owned by other pages).
- Body already honest; not rewritten. Edited ko entries only in shared `lib/i18n/drills/visualTrackingSpeedTestNative.js`.

## Demand status
Not verified (Bing 40 exact for the head term only).

## Trend note
Not measured. No claim.
