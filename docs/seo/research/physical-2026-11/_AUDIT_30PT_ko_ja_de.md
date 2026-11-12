# 30-point audit: PHYSICAL ko / ja / de (36 pages) - 2026-11-12

Read-only. Source: rendered HTML from `next dev` on :3000 (all 36 = HTTP 200, fetched with Googlebot UA), `page.js` sources, `/sitemap.xml`, `/robots.txt`, response headers, `docs/seo/research/physical-2026-11/{ko,ja,de}.md`. No files edited, no build, no server start/stop.

Legend: P pass, F fail, F(nit) minor fail, N/A not checkable. `lang` = SSR `<html lang>` (extra point requested).

## Site-wide points (identical for all 36 pages)

| Point | Result | Evidence |
|---|---|---|
| 1.1 Clean locale URL | P | `/<loc>/drills/physical/...`, no query/hash |
| 1.2 hreflang | P | 8 alternates on every page: en, x-default (=EN URL), pt, es, ja, de, ko, fr incl. self |
| 1.3 Canonical | P | every canonical = `https://skilldrills.online` + own path |
| 1.4 Sitemap alternates | P | all 36 `<loc>` in sitemap.xml with 8 `xhtml:link` each |
| 1.5 SSR | P | h1, all H2s, guide, FAQ, benchmark tables present in server HTML |
| 1.6 CWV | N/A | dev server only; not measurable without prod build |
| 2.2 / 2.3 | P | primaries match research maps; tool is the first block under h1 |
| 4.1 BLUF | P | every drill guide intro opens with a definitional sentence (e.g. ko grid "칸 피하기 게임은 3x3 격자에서..."; de agility "Das Agility-Ladder-Rhythmusspiel überträgt..."); hubs open with a one-paragraph answer |
| 4.4 No contradictions | P | 0 FAQ-schema vs visible mismatches (36/36, Q and A text); no "sub-millisecond"; every benchmark table carries a "not user statistics / percentiles" disclaimer; all numbers are game-mechanic constants |
| 5.1 JSON-LD validity | P except breadcrumb issue below | all blocks parse; no `aggregateRating`/`ratingValue`/`reviewCount` anywhere |
| 5.2 sameAs | F(nit) | no `sameAs` in any block |
| 5.3 E-E-A-T | P | "References" section (Fitts 1954, Woodworth 1899, Posner 1980, Logan & Cowan 1984 ...) + device/refresh-rate caveat on every drill page |
| 5.4 Utility hook | P | playable drill on page |
| 5.5 AI crawlers | P | robots.txt `Allow: /` for GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended |
| 6.1 IndexNow | P | `scripts/notify-indexnow.js` reads live sitemap.xml, which contains all 36 |
| 6.2 Non-orphan | P | each hub links all 11 locale drills; every drill page has 3-5 in-locale physical links (RelatedDrills + breadcrumb) |
| 6.3 200 / index | P | 36x HTTP 200, `robots: index, follow`, no `noindex` string in HTML |
| 7.1 / 7.2 | P | no login/paywall/modal |
| lang | F | SSR `<html lang="en">` on all 36 (app/layout.js:96). Mitigated: `Content-Language: ko-KR/ja-JP/de-DE` header (next.config.js:86-89) + inline pre-paint lang fix + hreflang |

## Per-page matrix

| Page | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 1.6 | 2.1 | 2.2 | 2.3 | 2.4 | 3.1 | 3.2 | 3.3 | 3.4 | 3.5 | 4.1 | 4.2 | 4.3 | 4.4 | 5.1 | 5.2 | 5.3 | 5.4 | 5.5 | 6.1 | 6.2 | 6.3 | 7.1 | 7.2 | lang |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| /ko | P | P | P | P | P | N/A | P | P | P | F(nit) | P | P | P | P | P | P | F(nit) | F(nit) | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/balance-training/stability-challenge | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/coordination/complex-pattern | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | F(nit) | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/coordination/cross-body-movement | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | F(nit) | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/coordination/dynamic-grid-evasion | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/fitness/agility-ladder | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/fitness/jump-sequence | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/fitness/speed-drill | P | P | P | P | P | N/A | P | P | P | F | P | P | P | P | F(nit) | P | P | P | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/reflex-training/drop-catch | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/reflex-training/peripheral-threat-sweeper | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/reflex-training/quick-dodge | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ko/reflex-training/reaction-chain | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja | P | P | P | P | P | N/A | P | P | P | F(nit) | F(nit) | P | P | P | P | P | F(nit) | F(nit) | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/balance-training/stability-challenge | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/coordination/complex-pattern | P | P | P | P | P | N/A | F | P | P | F | F(nit) | P | P | P | F(nit) | P | P | F(nit) | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/coordination/cross-body-movement | P | P | P | P | P | N/A | P | P | P | F | P | P | P | P | F(nit) | P | P | F(nit) | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/coordination/dynamic-grid-evasion | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/fitness/agility-ladder | P | P | P | P | P | N/A | P | P | P | F | F(nit) | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/fitness/jump-sequence | P | P | P | P | P | N/A | P | P | P | F | F(nit) | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/fitness/speed-drill | P | P | P | P | P | N/A | P | P | P | F | P | P | P | P | F(nit) | P | P | P | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/reflex-training/drop-catch | P | P | P | P | P | N/A | F | P | P | F | F(nit) | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/reflex-training/peripheral-threat-sweeper | P | P | P | P | P | N/A | P | P | P | F | F(nit) | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/reflex-training/quick-dodge | P | P | P | P | P | N/A | P | P | P | F | F(nit) | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /ja/reflex-training/reaction-chain | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /de | P | P | P | P | P | N/A | F | P | P | F(nit) | P | F(nit) | P | P | P | P | F(nit) | F(nit) | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/balance-training/stability-challenge | P | P | P | P | P | N/A | F | P | P | F | F(nit) | P | P | P | F(nit) | P | P | P | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/coordination/complex-pattern | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | F(nit) | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/coordination/cross-body-movement | P | P | P | P | P | N/A | F | P | P | F | F(nit) | P | P | P | F(nit) | P | P | F(nit) | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/coordination/dynamic-grid-evasion | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/fitness/agility-ladder | P | P | P | P | P | N/A | P | P | P | F | P | F(nit) | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/fitness/jump-sequence | P | P | P | P | P | N/A | F | P | P | F | F(nit) | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/fitness/speed-drill | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | P | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/reflex-training/drop-catch | P | P | P | P | P | N/A | F | P | P | F | F(nit) | F(nit) | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/reflex-training/peripheral-threat-sweeper | P | P | P | P | P | N/A | F | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/reflex-training/quick-dodge | P | P | P | P | P | N/A | P | P | P | F | P | P | P | P | F(nit) | P | P | P | P | F | F(nit) | P | P | P | P | P | P | P | P | F |
| /de/reflex-training/reaction-chain | P | P | P | P | P | N/A | F | P | P | F | P | F(nit) | P | P | F(nit) | P | P | P | P | P | F(nit) | P | P | P | P | P | P | P | P | F |


### Per-page evidence

#### /ko/drills/physical
- 2.1 Bing 피지컬 테스트 101
- 2.4 EN `Loading...` Suspense fallback
- 3.1 37 ch, kw "피지컬 테스트" in first 40: true
- 3.2 110 ch
- 3.3 h1=1 "피지컬 테스트", h2=6, h3=11
- 3.4 55 <a>, off-locale 0, 11 in-locale physical links
- 4.2 no question H2/H3 (FAQ items not headings)
- 5.1 ld: BreadcrumbList,CollectionPage,FAQPage; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills > /ko/drills/physical
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/balance-training/stability-challenge
- 2.1 primary `마우스 에임 안정성 테스트` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; tier labels Elite..Needs Practice; HUD `Best Score`
- 3.1 44 ch, kw "마우스 에임 안정성 테스트" in first 40: true
- 3.2 109 ch
- 3.3 h1=1 "마우스 에임 안정성 테스트", h2=9, h3=13
- 3.4 11 <a>, off-locale 0, 3 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/balance-training/stability-challenge
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/coordination/complex-pattern
- 2.1 primary `도형 순서 기억 게임` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; HUD `Best Score`
- 3.1 39 ch, kw "도형 순서 기억 게임" in first 40: true
- 3.2 120 ch
- 3.3 h1=1 "도형 순서 기억 게임", h2=9, h3=12
- 3.4 12 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/coordination/complex-pattern
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/coordination/cross-body-movement
- 2.1 primary `눈 손 협응력 테스트` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; HUD `Best Score`
- 3.1 43 ch, kw "눈 손 협응력 테스트" in first 40: true
- 3.2 118 ch
- 3.3 h1=1 "눈 손 협응력 테스트", h2=9, h3=12
- 3.4 11 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/coordination/cross-body-movement
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/coordination/dynamic-grid-evasion
- 2.1 primary `칸 피하기 게임` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 37 ch, kw "칸 피하기 게임" in first 40: true
- 3.2 125 ch
- 3.3 h1=1 "칸 피하기 게임", h2=10, h3=14
- 3.4 11 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,VideoGame,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/coordination > /ko/drills/physical/coordination/dynamic-grid-evasion -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/fitness/agility-ladder
- 2.1 primary `스텝레더 게임` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 43 ch, kw "스텝레더 게임" in first 40: true
- 3.2 119 ch
- 3.3 h1=1 "스텝레더 게임", h2=10, h3=12
- 3.4 11 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage,HowTo; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/fitness > /ko/drills/physical/fitness/agility-ladder -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/fitness/jump-sequence
- 2.1 primary `점프 타이밍 게임` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 45 ch, kw "점프 타이밍 게임" in first 40: true
- 3.2 120 ch
- 3.3 h1=1 "점프 타이밍 게임", h2=9, h3=11
- 3.4 12 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage,HowTo; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/fitness > /ko/drills/physical/fitness/jump-sequence -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/fitness/speed-drill
- 2.1 Bing 클릭 게임 21
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 33 ch, kw "클릭 게임" in first 40: true
- 3.2 110 ch
- 3.3 h1=1 "클릭 게임", h2=9, h3=14
- 3.4 13 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/fitness/speed-drill
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/reflex-training/drop-catch
- 2.1 primary `떨어지는 표적 잡기 게임` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 44 ch, kw "떨어지는 표적 잡기 게임" in first 40: true
- 3.2 112 ch
- 3.3 h1=1 "떨어지는 표적 잡기 게임", h2=9, h3=14
- 3.4 14 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/reflex-training > /ko/drills/physical/reflex-training/drop-catch -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/reflex-training/peripheral-threat-sweeper
- 2.1 primary `주변시야 훈련 게임` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 44 ch, kw "주변시야 훈련 게임" in first 40: true
- 3.2 112 ch
- 3.3 h1=1 "주변시야 훈련 게임", h2=9, h3=14
- 3.4 13 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/reflex-training > /ko/drills/physical/reflex-training/peripheral-threat-sweeper -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/reflex-training/quick-dodge
- 2.1 primary `마우스 피하기 게임` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 37 ch, kw "마우스 피하기 게임" in first 40: true
- 3.2 107 ch
- 3.3 h1=1 "마우스 피하기 게임", h2=10, h3=18
- 3.4 11 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,VideoGame,FAQPage,HowTo; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/reflex-training > /ko/drills/physical/reflex-training/quick-dodge -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ko present)

#### /ko/drills/physical/reflex-training/reaction-chain
- 2.1 primary `오버에임 교정` Bing 0 (research ko.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; `ARREST READY`
- 3.1 38 ch, kw "오버에임 교정" in first 40: true
- 3.2 114 ch
- 3.3 h1=1 "오버에임 교정 훈련", h2=9, h3=11
- 3.4 12 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /ko > /ko/drills/physical > /ko/drills/physical/reflex-training/reaction-chain
- lang SSR html lang="en" (Content-Language header ko present)

#### /ja/drills/physical
- 2.1 Bing 瞬発力テスト 21
- 2.4 EN `Loading...` Suspense fallback
- 3.1 41 ch, ~622px, kw "瞬発力テスト" in first 40: true
- 3.2 104 ch
- 3.3 h1=1 "瞬発力テスト", h2=6, h3=11
- 3.4 55 <a>, off-locale 0, 11 in-locale physical links
- 4.2 no question H2/H3 (FAQ items not headings)
- 5.1 ld: BreadcrumbList,CollectionPage,FAQPage; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills > /ja/drills/physical
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/balance-training/stability-challenge
- 2.1 primary `マウス安定性テスト` Bing 0 (research ja.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; tier labels Elite..Needs Practice; HUD `Best Score`
- 3.1 38 ch, kw "マウス安定性テスト" in first 40: true
- 3.2 90 ch
- 3.3 h1=1 "マウス安定性テスト", h2=9, h3=13
- 3.4 11 <a>, off-locale 0, 3 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/balance-training/stability-challenge
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/coordination/complex-pattern
- 2.1 primary `図形記憶テスト` Bing 0 (research ja.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; HUD `Best Score`; EN name in card/schema parenthetical
- 3.1 41 ch, ~642px, kw "図形記憶テスト" in first 40: true
- 3.2 115 ch
- 3.3 h1=1 "図形記憶テスト", h2=9, h3=12
- 3.4 12 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/coordination/complex-pattern
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/coordination/cross-body-movement
- 2.1 Bing 目と手の協応 22
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; HUD `Best Score`
- 3.1 38 ch, kw "目と手の協応テスト" in first 40: true
- 3.2 108 ch
- 3.3 h1=1 "目と手の協応テスト", h2=9, h3=12
- 3.4 11 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/coordination/cross-body-movement
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/coordination/dynamic-grid-evasion
- 2.1 primary `危険マス回避ゲーム` Bing 0 (research ja.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 37 ch, kw "危険マス回避ゲーム" in first 40: true
- 3.2 102 ch
- 3.3 h1=1 "危険マス回避ゲーム", h2=10, h3=14
- 3.4 11 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,VideoGame,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/coordination > /ja/drills/physical/coordination/dynamic-grid-evasion -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/fitness/agility-ladder
- 2.1 Bing ラダートレーニング 244 (analogy term)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; EN name in card/schema parenthetical
- 3.1 45 ch, ~722px, kw "アジリティラダーゲーム" in first 40: true
- 3.2 119 ch
- 3.3 h1=1 "アジリティラダーゲーム", h2=10, h3=12
- 3.4 11 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage,HowTo; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/fitness > /ja/drills/physical/fitness/agility-ladder -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/fitness/jump-sequence
- 2.1 Bing ジャンプゲーム 169
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 42 ch, ~662px, kw "ジャンプゲーム" in first 40: true
- 3.2 115 ch
- 3.3 h1=1 "ジャンプゲーム", h2=9, h3=11
- 3.4 12 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage,HowTo; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/fitness > /ja/drills/physical/fitness/jump-sequence -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/fitness/speed-drill
- 2.1 Bing 的当てゲーム 46
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 32 ch, kw "的当てゲーム" in first 40: true
- 3.2 113 ch
- 3.3 h1=1 "的当てゲーム", h2=9, h3=14
- 3.4 13 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/fitness/speed-drill
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/reflex-training/drop-catch
- 2.1 primary `落下キャッチゲーム` Bing 0 (research ja.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 40 ch, ~622px, kw "落下キャッチゲーム" in first 40: true
- 3.2 122 ch
- 3.3 h1=1 "落下キャッチゲーム", h2=9, h3=12
- 3.4 14 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/reflex-training > /ja/drills/physical/reflex-training/drop-catch -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/reflex-training/peripheral-threat-sweeper
- 2.1 Bing 周辺視野 22 (head term)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; EN name in card/schema parenthetical
- 3.1 44 ch, ~702px, kw "周辺視野 トレーニング" in first 40: true
- 3.2 128 ch
- 3.3 h1=1 "周辺視野トレーニングゲーム", h2=9, h3=13
- 3.4 13 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/reflex-training > /ja/drills/physical/reflex-training/peripheral-threat-sweeper -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/reflex-training/quick-dodge
- 2.1 Bing 障害物を避けるゲーム 32
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback
- 3.1 44 ch, ~702px, kw "障害物を避けるゲーム" in first 40: true
- 3.2 95 ch
- 3.3 h1=1 "障害物を避けるゲーム", h2=10, h3=17
- 3.4 11 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,VideoGame,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/reflex-training > /ja/drills/physical/reflex-training/quick-dodge -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header ja present)

#### /ja/drills/physical/reflex-training/reaction-chain
- 2.1 primary `オーバーフリック改善` Bing 0 (research ja.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; `ARREST READY`
- 3.1 37 ch, kw "オーバーフリック改善" in first 40: true
- 3.2 101 ch
- 3.3 h1=1 "オーバーフリック改善", h2=9, h3=10
- 3.4 12 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /ja > /ja/drills/physical > /ja/drills/physical/reflex-training/reaction-chain
- lang SSR html lang="en" (Content-Language header ja present)

#### /de/drills/physical
- 2.1 primary `Koordinationsspiele online` Bing 0 (research de.md)
- 2.4 EN `Loading...` Suspense fallback
- 3.1 57 ch, kw "Koordinationsspiele online" in first 40: true
- 3.2 156 ch
- 3.3 h1=1 "Koordinationsspiele online", h2=6, h3=11
- 3.4 55 <a>, off-locale 0, 11 in-locale physical links
- 4.2 no question H2/H3 (FAQ items not headings)
- 5.1 ld: BreadcrumbList,CollectionPage,FAQPage; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills > /de/drills/physical
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/balance-training/stability-challenge
- 2.1 primary `Maus-Stabilitätstest` Bing 0 (research de.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; tier labels Elite..Needs Practice; HUD `Best Score`; related H2 raw keyword
- 3.1 61 ch, kw "Maus-Stabilitätstest" in first 40: true
- 3.2 155 ch
- 3.3 h1=1 "Maus-Stabilitätstest", h2=9, h3=13
- 3.4 11 <a>, off-locale 0, 3 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/balance-training/stability-challenge
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/coordination/complex-pattern
- 2.1 primary `Muster merken Spiel` Bing 0 (research de.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; HUD `Best Score`; related H2 raw keyword
- 3.1 53 ch, kw "Muster merken Spiel" in first 40: true
- 3.2 149 ch
- 3.3 h1=1 "Muster merken Spiel", h2=9, h3=12
- 3.4 12 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/coordination/complex-pattern
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/coordination/cross-body-movement
- 2.1 primary `Koordinationstest mit der Maus` Bing 0 (research de.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; HUD `Best Score`; related H2 raw keyword
- 3.1 61 ch, kw "Koordinationstest mit der Maus" in first 40: true
- 3.2 151 ch
- 3.3 h1=1 "Koordinationstest mit der Maus", h2=9, h3=12
- 3.4 11 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/coordination/cross-body-movement
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/coordination/dynamic-grid-evasion
- 2.1 primary `Raster-Ausweichspiel` Bing 0 (research de.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; related H2 raw keyword
- 3.1 58 ch, kw "Raster-Ausweichspiel" in first 40: true
- 3.2 153 ch
- 3.3 h1=1 "Raster-Ausweichspiel", h2=10, h3=14
- 3.4 11 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,VideoGame,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/coordination > /de/drills/physical/coordination/dynamic-grid-evasion -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/fitness/agility-ladder
- 2.1 Bing agility ladder 7
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; related H2 raw keyword
- 3.1 55 ch, kw "Agility-Ladder-Rhythmusspiel" in first 40: true
- 3.2 156 ch
- 3.3 h1=1 "Agility-Ladder-Rhythmusspiel", h2=10, h3=12
- 3.4 11 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage,HowTo; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/fitness > /de/drills/physical/fitness/agility-ladder -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/fitness/jump-sequence
- 2.1 primary `Sprung-Zielspiel` Bing 0 (research de.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; related H2 raw keyword
- 3.1 61 ch, kw "Sprung-Zielspiel" in first 40: true
- 3.2 154 ch
- 3.3 h1=1 "Sprung-Zielspiel", h2=9, h3=11
- 3.4 12 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,WebApplication,FAQPage,HowTo; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/fitness > /de/drills/physical/fitness/jump-sequence -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/fitness/speed-drill
- 2.1 primary `Schrumpfende Ziele klicken` Bing 0 (research de.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; related H2 raw keyword
- 3.1 57 ch, kw "Schrumpfende Ziele klicken" in first 40: true
- 3.2 155 ch
- 3.3 h1=1 "Schrumpfende Ziele klicken", h2=9, h3=14
- 3.4 13 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 10 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/fitness/speed-drill
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/reflex-training/drop-catch
- 2.1 primary `Fallende Ziele fangen` Bing 0 (research de.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; related H2 raw keyword
- 3.1 61 ch, kw "Fallende Ziele fangen" in first 40: true
- 3.2 160 ch
- 3.3 h1=1 "Fallende Ziele fangen", h2=9, h3=12
- 3.4 14 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 8 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/reflex-training > /de/drills/physical/reflex-training/drop-catch -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/reflex-training/peripheral-threat-sweeper
- 2.1 primary `Peripheres Blickfeld Spiel` Bing 0 (research de.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; related H2 raw keyword
- 3.1 60 ch, kw "Peripheres Blickfeld Spiel" in first 40: true
- 3.2 154 ch
- 3.3 h1=1 "Peripheres Blickfeld Spiel", h2=9, h3=13
- 3.4 13 <a>, off-locale 0, 5 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,WebApplication,VideoGame,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/reflex-training > /de/drills/physical/reflex-training/peripheral-threat-sweeper -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/reflex-training/quick-dodge
- 2.1 Bing dodge game 10
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; related H2 raw keyword
- 3.1 56 ch, kw "Dodge Game" in first 40: true
- 3.2 150 ch
- 3.3 h1=1 "Dodge Game", h2=10, h3=17
- 3.4 11 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,VideoGame,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/reflex-training > /de/drills/physical/reflex-training/quick-dodge -> group URL 308s to hub
- lang SSR html lang="en" (Content-Language header de present)

#### /de/drills/physical/reflex-training/reaction-chain
- 2.1 primary `Overflicking stoppen` Bing 0 (research de.md)
- 2.4 DrillGuide EN sources disclaimer; EN `Loading...` Suspense fallback; `ARREST READY`; related H2 raw keyword
- 3.1 57 ch, kw "Overflicking stoppen" in first 40: true
- 3.2 159 ch
- 3.3 h1=1 "Overflicking stoppen", h2=9, h3=10
- 3.4 12 <a>, off-locale 0, 4 in-locale physical links
- 3.5 game <canvas> has no aria-label
- 4.2 FAQ H3 questions present; H2s declarative
- 5.1 ld: BreadcrumbList,SoftwareApplication,FAQPage,HowTo; parse err 0; FAQ 9 == visible (0 mismatch); aggregateRating none; crumbs /de > /de/drills/physical > /de/drills/physical/reflex-training/reaction-chain
- lang SSR html lang="en" (Content-Language header de present)

## FAILs ranked by severity

### Blocker
- None. No noindex, no wrong canonical, no broken hreflang, no invalid JSON-LD, no FAQ drift, no fabricated stats/aggregateRating, no non-200, no off-locale internal links.

### Should-fix
1. **Breadcrumb JSON-LD points at 308 group URLs** (18 pages: ko/ja/de x dynamic-grid-evasion, agility-ladder, jump-sequence, drop-catch, peripheral-threat-sweeper, quick-dodge). Position 3 item = `/<loc>/drills/physical/{coordination|fitness|reflex-training}`, which now 308s to `/<loc>/drills/physical` (verified with curl). Drop the group crumb (as the other 5 drills already do). Files: `app/{ko,ja,de}/drills/physical/{coordination/dynamic-grid-evasion,fitness/agility-ladder,fitness/jump-sequence,reflex-training/drop-catch,reflex-training/peripheral-threat-sweeper,reflex-training/quick-dodge}/page.js` (`breadcrumbSchema`).
2. **English text on all 33 localized drill pages**: `components/drill/DrillGuide.js:446-448` hardcodes "SkillDrills collects no aggregate performance data - scores stay in your browser's local storage..." under References. Needs a locale string.
3. **RelatedDrills H2/anchors use stale, pre-retarget raw keywords** from `lib/drillSeo.js` (physical entries ~1671-1990): de "Passende Drills zu balance test online" (English), "...falltest reaktionstraining" + anchor "Falltest Reaktionstraining Drill" (the ruler-drop claim de.md flagged as FALSE), "impuls hemmer reflex spiel", "schnelligkeitstraining drill"; ja space-split tokens "周辺 視野 テスト", "衝動 抑制 反射 トレーニング"; ko "드롭 캐치 반사 신경 테스트". Contradicts the new primaries and the honesty fixes.
4. **stability-challenge tier labels in English** (ko/ja/de): `Elite / Excellent / Great / Good / Keep Going / Needs Practice` in the visible benchmark table. `app/{ko,ja,de}/drills/physical/balance-training/stability-challenge/page.js:~117-122`.
5. **Hardcoded English HUD "Best Score"** on stability-challenge, complex-pattern, cross-body-movement (all 3 locales): `app/drills/physical/balance-training/stability-challenge/StabilityChallengeClient.js:604`, `app/drills/physical/coordination/complex-pattern/ComplexPatternClient.js:831` (no copy hook), cross-body `CrossBodyMovementClient.js:650` falls back because the locale pages pass no `hudLabels.bestScore`.
6. **SSR `<html lang="en">`** on all 36 (`app/layout.js:96`). Mitigated by Content-Language header + client fix; Bing reads html lang, Bing is the main channel. Pre-existing site-wide, not a regression.
7. **2.1 zero measured demand** for the primary keyword on 25/36 pages (ko 10: all drills except speed-drill; ja 5: stability, complex-pattern, grid, drop-catch, reaction-chain; de 10: hub + all drills except agility-ladder, quick-dodge). Research labels them "keep, no-demand descriptive"; the standard's Principle 1 says no-demand locale pages should not exist. Owner decision, not a deploy blocker (pages are pre-existing; this deploy makes them more honest).

### Nit
- 3.1 title length: ja est. >600px (CJK ~20px/glyph): hub (~622), complex-pattern (~642), agility-ladder (~722), jump-sequence (~662), drop-catch (~622), peripheral (~702), quick-dodge (~702) - brand likely truncated. de >=60 chars: stability-challenge 61, cross-body 61, jump-sequence 61, drop-catch 61, peripheral 60.
- 3.2 de descriptions >155: hub 156, agility-ladder 156, drop-catch 160, reaction-chain 159.
- 2.4 misc: ja RelatedDrills cards show English parentheticals ("瞬間記憶テスト (Visual Memory Test)", "マウストレーシング (Mouse Tracing Game)"); ja peripheral schema name "周辺視野トレーニングゲーム（Peripheral Threat Sweeper）"; `ARREST READY` (canvas + copy) on reaction-chain x3; de headings "Über Drop Catch", "Über den Speed Drill", "Reaction Chain ist ein...", hub "Einen Physical-Drill wählen"; de speed-drill uses "Sie" while the other de pages use "du"; root `app/loading.js` Suspense fallback "Loading... This will just take a moment" is in every SSR HTML.
- 3.5 game `<canvas>` has no localized `aria-label` (33 drill pages).
- 4.2 hubs have no question-form H2/H3 (FAQ rendered as non-heading items); drill H2s are declarative (FAQ H3s are questions).
- 4.3 complex-pattern and cross-body-movement (x3) have no benchmark table; hubs no table.
- 5.2 no `sameAs` entity anchors.
- ja peripheral `keywords[0]` is "周辺視野 トレーニング" (with space) vs title "周辺視野トレーニングゲーム" - cosmetic.
