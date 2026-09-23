# Reaction-time-test: native SEO/AEO/GEO research

Research date: 2026-09-20  
Route: `/drills/reaction-speed/reaction-time-test`  
Locales: `ko-KR`, `ja-JP`, `de-DE`, `pt-BR`, `es-ES`, `fr-FR`

## Research boundary

This run covered one drill only. The localized pages were refreshed from native-market query evidence; no English page was machine-translated into another locale. Bing figures below are Bing Webmaster exact/broad impressions for the current measurement window, not Google volume. Google Suggest suggestions are discovery evidence only and have no volume attached. Google Search Console is not connected in this workspace.

Google Trends country entry points were checked for [Korea](https://trends.google.com/home?geo=KR&hl=ko), [Japan](https://trends.google.com/home?geo=JP&hl=ja), [Germany](https://trends.google.com/home?geo=DE&hl=de), [Brazil](https://trends.google.com/home?geo=BR&hl=pt-BR), [Spain](https://trends.google.com/home?geo=ES&hl=es), and [France](https://trends.google.com/home?geo=FR&hl=fr). This environment exposed the country-aware Trends pages but not the query-level Explore time series, so no Trends index or seasonality number is claimed. Google documents Trends as relative interest rather than absolute search volume: [Google Trends data](https://support.google.com/trends/answer/4365533).

## Decision gate

Keep the six existing localized pages for this already-live drill. Update the page-level title, description, keyword cluster, visible drill subtitle, and structured-data freshness. Do not create additional localized reaction-speed drill URLs from this run. Korea and Germany have the clearest measured Bing demand; Brazil is usable but ambiguous because `teste de reflexo` also has clinical meanings; Spain and France remain SERP-qualified but volume-unconfirmed. No #1 ranking is promised.

## Native keyword clusters and Bing validation

| Locale | Primary native term | Secondary / long-tail terms | Bing exact / broad | Editorial competition and intent |
| --- | --- | --- | --- | --- |
| `ko-KR` | `반응속도 테스트` | `반응속도 테스트 사이트`, `반응속도 테스트 평균`, `반응속도 테스트 발로란트`, `반응속도 테스트 모바일`, `반속테스트` | `10,468 / 11,030` | Moderate tool competition; strong gaming and score intent. |
| `ja-JP` | `反応速度テスト` | `反射神経テスト`, `反応速度テスト 無料`, `反応速度テスト fps`, `反応速度テスト スマホ`, `マウス 反応速度 テスト`, `クリック 反応速度 テスト` | Tested phrases returned `0 / 0` in the current Bing response | Soft-to-moderate tool SERP; Google Suggest and native tools confirm active phrasing, but volume is unmeasured here. |
| `de-DE` | `Reaktionstest` | `Reaktionszeit Test`, `Reaktionstest online`, `Reaktionstest online kostenlos`, `Reaktionszeit messen`, `visuelle Reaktionszeit`, `Reaktionstest gaming` | `521 / 590`; `292 / 292` for `Reaktionszeit Test` | Moderate. Head-term SERP is mixed with MPU, driving, and selection-test intent; the page must say visual browser drill. |
| `pt-BR` | `teste de reflexo` | `teste de reação`, `teste de reflexo online`, `teste de reflexo mouse`, `teste de reflexo para fps`, `teste de reflexo valorant`, `teste de reação visual` | `183 / 183`; `165 / 165` for `teste de reação` | Moderate and mixed: online gaming tools compete with medical/ophthalmic meanings of “reflexo”. |
| `es-ES` | `test de reflejos` | `test de reflejos online`, `test de reflejos gaming`, `test de reacción`, `tiempo de reacción`, `medir reflejos`, `tiempo de reacción en milisegundos` | `23 / 23`; `13 / 13` for `test de reacción`; `9 / 10` for `tiempo de reacción` | Soft-to-moderate tool SERP, but measured demand is small. Keep copy useful without expanding the locale tree. |
| `fr-FR` | `test de temps de réaction` | `test de réaction en ligne`, `temps de réaction`, `test de temps de réaction en ligne`, `temps de réaction souris`, `test de réaction clavier`, `réflexes visuels` | `0 / 0` for the long form; `0 / 18` broad for `temps de réaction` | Soft-to-moderate tool SERP; current numeric demand is unmeasured/weak, so no volume claim is made. |

## Native Suggest and SERP evidence

- Korea: Google Suggest for `반응속도 테스트` returned `사이트`, `평균`, `발로란트`, `모바일`, `티어`, and `휴먼벤치마크`. A Korean tool such as [AlwaysCorp 반응속도 테스트](https://alwayscorp.co.kr/games/reaction-test) uses five attempts, average/median/deviation, and visual, audio, and Go/No-Go modes.
- Japan: Google Suggest returned `無料`, `fps`, `スマホ`, `プロゲーマー`, `マウス`, and `クリック`. [Moy’s Japanese test](https://moy.jp/check/reaction) and [Hen-game’s 反射神経テスト](https://www.hen-game.com/games/reaction-test/) use the native `反応速度`/`反射神経` pairing, repeated trials, and device-latency caveats.
- Germany: Google Suggest returned `online kostenlos üben`, `online`, `f1`, and several MPU/driver variants. [Reactiontest Germany](https://reactiontest.net/de/) and [NEURA’s German test](https://neurabrain.app/de/test/reaction-time) show the browser-tool intent, while [PPF Germany](https://www.ppfgermany.de/tools/reaktionstest) demonstrates the separate selection/assessment intent. The page therefore qualifies itself as a visual browser drill.
- Brazil: Google Suggest returned `click`, `mouse`, `valorant`, and `para fps`, but also clinical reflex terms. [Adamantiun’s Brazilian test](https://www.adamantiun.com.br/teste-de-reflexo/) demonstrates the gaming meaning with five red-to-green transitions and an average score; clinical meanings are not targeted.
- Spain: Google Suggest returned `online`, `gaming`, and `click`. [Maníaco Digital’s test](https://maniacodigital.es/juegos/juegos-de-habilidad/test-de-reaccion-online-gratis-mide-tus-reflejos/) and [gottrix’s Spanish test](https://gottrix.app/es/test-de-reaccion) use `test de reflejos`, repeated attempts, averages, and browser/device caveats.
- France: Google Suggest returned `en ligne`, `souris`, `clavier`, `humain`, and `rapidité de réaction`. [Reaction Time Test France](https://reactiontest.net/fr/), [ToolMole](https://toolmole.com/fr/reaction-time-test/), and [gottrix France](https://gottrix.app/fr/test-de-reaction) use `test de temps de réaction`, `réaction`, `réflexes`, repeated trials, and hardware-latency explanations.

## Implementation deltas

1. Titles and descriptions now front-load the current native query cluster and stay compact for the drill’s one-line title/subtitle treatment.
2. Keyword arrays now use native Suggest/SERP modifiers instead of stale invented volume claims.
3. Visible drill subtitles and captions are explicitly localized and short; the long French caption was removed from the compact drill header.
4. French UI copy was completed in the shared reaction-time dictionary so the localized page does not fall back to English labels for the stats, rules, and About panel.
5. FAQ structured data and the visible guide are limited to ten distinct entries per locale, matching the project standard; the scientific introduction, benchmark table, calibration guidance, citations, and full drill functionality remain intact.
6. FAQ `dateModified` is set to 2026-09-20. Canonicals, locale URLs, and route-aware hreflang remain unchanged.
7. No Bing URL submission, IndexNow submission, or `ENABLE_INDEXNOW=true` was used.

## Verification still required

- Run `npx next build` directly; do not run `npm run build` because its postbuild hook can submit IndexNow notifications.
- Verify all six localized routes render the native title, subtitle, guide heading, and ten FAQ entries in server HTML.
- Verify the six localized canonicals and reciprocal hreflang entries still resolve to 200 URLs.
- Recheck Bing/GSC performance after deployment; the measured Bing figures above do not establish Google rankings or a guaranteed position.
