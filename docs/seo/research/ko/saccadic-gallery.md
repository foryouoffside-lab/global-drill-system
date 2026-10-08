# ko / saccadic-gallery — research log

Date: 2026-10-08 · Route: `/ko/drills/reaction-speed/saccadic-gallery` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`. Bing 0 / Naver empty means unmeasured, not no demand.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `동체시력 훈련` | Naver autocomplete + Google Suggest; Bing 0; kept by constant-slow-pursuit | proxy (autocomplete) |
| `동체시력 게임` | Naver autocomplete (`동체시력 게임`); Bing 0 | proxy (autocomplete) |
| `안구 운동` | Google Suggest dominated by EMDR/medical queries (`안구 운동 민감소실 및 재처리 요법`, `안구 운동 검사/장애`); Bing 0 | wrong intent |
| `사케이드 훈련`, `시선 이동 훈련` | Bing 0; no Suggest/Naver | no signal |

## Intent
Peripheral-target gaze-shift clicking game. `안구 운동` queries are medical/EMDR intent and were not used; the title is descriptive.

## B3
Demand 1, competition ease 3 (unverified), intent fit 4. Decision: `시선 이동 훈련 게임` as a descriptive primary (no evidence-backed alternative), freeing `동체시력 훈련` for constant-slow-pursuit.

## Defects found / changes
- Title no longer duplicates constant-slow-pursuit's `동체시력 훈련`.
- Latency table with tiers `신계・익스프레스`, `프로 게이머 / 전투기 조종사`, `엘리트` and ms cut-offs presented as population norms removed; practice-stage table with an explicit not-statistics note.
- Removed: `중심와 고정 지연 시간을 정밀 측정` (browser cannot see gaze), `순수한 안구 도약은 고개 회전이 결합된 동작보다 2배 이상 빠릅니다`, `외안근 피로 누적` diagnostic reading, `실질적인 안구 운동 능력 단축 추이`, neuro-anatomy claims.
- applicationCategory HealthApplication -> GameApplication; SoftwareApplication price currency KRW kept consistent; FAQ rebuilt (10 bespoke, same array to JSON-LD); stale research comment removed. The `related` link block in the guide is preserved.

## Demand status
Not verified.

## Trend note
Not measured. No claim.
