# ko / peripheral-threat-sweeper — research log

Date: 2026-10-08 · Route: `/ko/drills/physical/reflex-training/peripheral-threat-sweeper` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`. Bing 0 / Naver empty means unmeasured, not no demand.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `주변시야 훈련` | Google Suggest (`주변시야` → `주변시야 훈련`, `주변 시야 테스트`); Bing 0; Naver empty | proxy (Suggest) |
| `주변시 훈련` | Naver autocomplete returns it; Bing 0 (used by peripheral-ping-pursuit) | proxy (Naver) |
| `동체시력 테스트` | Bing exact 40 (kr); owned by visual-tracking-speed-test, removed from this title | measured (Bing kr, low) |

## Intent
Gaze-fixed peripheral reaction game. Not a clinical visual-field test.

## B3
Demand 1 (Suggest only), competition ease 3 (unverified), intent fit 4. Decision: title `주변시야 훈련 게임`, drop `동체시력 테스트` to stop overlapping visual-tracking-speed-test.

## Defects found / changes
- Title shared `동체시력 테스트` with sibling pages; removed. FAQ asked/answered the difference instead.
- Rank table `상위 1% (초인적 유효시야)`, `상위 10% (프로 수준 반응)`, English rank titles and `S/A` grades removed; neutral score bands.
- Removed: `간상체 활성화`, `터널 비전을 완벽히 차단`, `대뇌 피질의 시공간 처리 대역폭이 강제로 넓어`, `반응 시간을 비약적으로 단축`, the `1ms 미만` timer claim; the Ball et al. citation (not in lib/drillSources.js) dropped.
- FAQ rebuilt (10 bespoke); medical disclaimer added; applicationCategory HealthApplication -> GameApplication.

## Demand status
Not verified.

## Trend note
Not measured. No claim.
