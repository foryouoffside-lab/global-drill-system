# ko / fps-tracking-trainer — research log

Date: 2026-10-08 · Route: `/ko/drills/reaction-speed/fps-tracking-trainer` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`. Bing 0 / Naver empty means unmeasured, not no demand.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `에임 트레이너` | Bing exact 22 / broad 47 (kr); Google Suggest `에임 트레이너 사이트/디시`, `3d 에임 트레이너` | measured (Bing kr, low) |
| `에임 트래킹 연습` | Bing 0; used by strafe-tracking | no signal / owned by sibling |
| `움직이는 타겟 에임 연습` | descriptive; no Suggest/Bing signal | no signal |

## Intent
Horizontal moving-target tracking aim drill. `에임 트레이너` is the generic head term already used by the committed `aim-trainer` page (`에임 연습 사이트 | FPS 에임 트레이너`), so this page now leads with a distinct descriptive phrase.

## B3
Demand 1, competition ease 3 (unverified), intent fit 4. Decision: de-duplicate against aim-trainer; keep `에임 트레이너` only as a secondary keyword.

## Defects found / changes
- Title/H1 `에임 트레이너` duplicated the aim-trainer page's target. Retitled `움직이는 타겟 에임 연습`; description rewritten (shared helper appends `| SkillDrills`).
- Body copy already honest (reference bands labelled as non-statistics, no sub-ms, privacy-consistent). Not rewritten.
- Edited ko entries only in shared `lib/i18n/drills/fpsTrackingTrainer.js`.

## Demand status
Not verified.

## Trend note
Not measured. No claim.
