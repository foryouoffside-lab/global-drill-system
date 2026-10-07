# ko / physical-hub — research log

Date: 2026-10-08 · Route: `/ko/drills/physical` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `순발력 테스트` | Bing exact 204 / broad 240 (kr); Naver `순발력 테스트 게임/사이트/기계`; Google Suggest `게임`, `사이트`, `마우스`, `클릭`, `평균` | measured (Bing kr) |
| `순발력 훈련` / `순발력 게임` | Naver `순발력 훈련 방법`, `순발력 게임 사이트/어플`; Bing 0 | proxy |
| `민첩성 테스트` | Naver `민첩성 테스트`; Bing 0 | proxy |
| `반응속도 훈련 사이트` | Naver `반응속도 훈련`, `반응속도 훈련 사이트`, `반응속도 훈련 기구`; Bing 0 | proxy |
| `자 잡기/자 떨어뜨리기 반응속도`, `주변시 훈련`, `회피 게임` | Naver/Bing: no signal (`똥 피하기 게임` does appear in Naver) | no/weak signal |

## Intent
Casual games/tests; physical-device intents (`기계`, `기구`) are not served by this site.

## SERP
Not captured.

## B3
Demand 3, competition ease 3 (unverified), intent fit 4. Decision: title `반응속도·민첩성 훈련 | 순발력 테스트 11종` (H1 is fixed in the client at `반응속도·민첩성 훈련`, D2, so the title keeps that phrase and adds the measured `순발력 테스트`).

## Defects found / changes
- Title/description/keywords updated; OG/Twitter image switched from the 512 px icon to `/opengraph-image`.
- The eight old FAQ answers carried unsupported claims: `평균 280ms에서 190ms 이하로 단축`, `150ms 이내 관성 제어`, `부상 위험 대폭 낮춥니다`, `비약적으로 향상`, `CNS 피로 ... 효율 급감`, `극대화`. Rewritten as hedged native answers describing what each drill practises; two existing hedged items kept.
- Not changeable here: client hard-coded H1 and card copy (D2).

## Demand status
Verified at `순발력 테스트` (Bing 204); other physical terms autocomplete-only.

## Trend note
Not measured. No claim.
