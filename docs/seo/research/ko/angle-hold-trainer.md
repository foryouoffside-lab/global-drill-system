# ko / angle-hold-trainer — research log

Date: 2026-10-08 · Route: `/ko/drills/fps/angle-hold-trainer` · Market: South Korea, `gl=kr hl=ko`
Tools and shared data: `docs/seo/research/ko/drills-directory.md`. Bing API began returning `ThrottleUser` / `no data` for every phrase during this page (shared key); no Bing figure is claimed for the new phrases.

## Queries
| Phrase | Evidence | Label |
|---|---|---|
| `프리에이밍` / `프리에이밍 연습` / `프리에이밍 연습 사이트` / `프리에임 뜻/디시` / `발로란트 프리에임` | Google Suggest gl=kr (`프리에임` expansion); Naver autocomplete `프리에이밍`, `프리에이밍 뜻`, `프리에임 뜻` | proxy (autocomplete) |
| `에임 연습` | Bing exact 310 / broad 2,365 (earlier in run) | measured (Bing kr), shared with other aim pages |
| `발로란트 에임 연습`, `발로란트 에임 연습법/프로그램`, `발로란트 에임랩` | Google Suggest + Naver | proxy |
| `각 쪼개기`, `앵글 홀딩`, `대기 에임`, `크로스헤어 플레이스먼트` | Naver nothing; Bing 0 / no data | no signal |
`프리에이밍` is the native community term for the skill this drill trains; `에임 연습` is too generic and is already the primary of three other aim pages.

## SERP
Not captured. No competitor claim.

## B3
Demand 2 (autocomplete), competition ease 4 (unverified), intent fit 5. Decision: primary `프리에이밍 연습`, secondary `대기 에임`, `각 쪼개기`.

## Defects found / changes
- Visible About intro was English (client `ABOUT_INTRO` fallback; `aboutIntro` hook not passed). Native 2-paragraph intro (direct answer first) passed from page.js.
- Benchmark table invented `레디언트 / 페이스잇 10레벨 방어 정점`, `40–90 ms` peeker gap, `250–340 ms 표준 임계선`; replaced with literature-range / qualitative rows and a note that they are not rank or user statistics.
- Softened `완벽하게`, `1000Hz 폴링 기반으로 작동`, `정밀하게 측정`.
- Title/H1/description/keywords now lead with `프리에이밍 연습`.

## Demand status
Not verified in Bing (throttled); autocomplete confirms the term.

## Trend note
Not measured. No claim.
