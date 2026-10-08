# ko / speed-drill — research log

Date: 2026-10-08 · Route: `/ko/drills/physical/fitness/speed-drill` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `에임 반응속도 테스트` | Google Suggest (`에임 반응속도` → `에임 반응속도 테스트`); Bing not run | proxy (Suggest) |
| `마우스 반응속도 테스트` | Google Suggest top result for `마우스 반응속도` (also hardware-settings queries: wrong intent mix) | proxy (Suggest) |
| `클릭 속도 게임` | Google Suggest (`클릭 속도` → `클릭 속도 게임`); Naver `클릭 속도 테스트/측정` | proxy (Suggest/Naver) |
| `반응속도 테스트` | Bing 13,122 (kr) — owned by `/ko/.../reaction-time-test`; removed from this title to stop cannibalisation | measured (Bing kr) |

## Intent
Shrinking-target click game. It is not a CPS counter (rapid-tapping owns `cps 측정`) and not a reaction-time test (reaction-time-test owns `반응속도 테스트`).

## B3
Demand 2 (proxy only), competition ease 3 (unverified), intent fit 4. Decision: title `에임 반응속도 테스트 | 클릭 속도 게임`, a distinct pair from sibling pages.

## Defects found / changes
- Title duplicated the head term `반응속도 테스트` used by the reaction-time-test page.
- Rank table: `상위 0.1% / 3% / 15%`, `프로게이머 수준`, English rank titles (`Apex Velocity Sniper`), `Grade S–D` removed; replaced with neutral score bands and a note that they are not population statistics.
- FAQ/guide claims removed: `신경 반응속도 향상`, `실전 플릭샷 성공률을 직접적으로 향상`, `입력 손실을 원천 차단`, `암호화 보관 ... 완벽한 프라이버시` (localStorage is not encrypted), `밀리초 단위로 단련`, neuroanatomy claims (superior colliculus) with no source.
- FAQ now 10 bespoke questions; JSON-LD built from the same array as the visible FAQ. `applicationCategory` HealthApplication -> GameApplication. Stale unverified research comment block removed.

## Demand status
Not verified (Suggest proxies only).

## Trend note
Not measured. No claim.
