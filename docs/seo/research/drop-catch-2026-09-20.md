# Drop Catch international SEO/AEO/GEO research — 2026-09-20

## Scope and evidence limits

This run covers one drill only: `physical/reflex-training/drop-catch`, across `ja-JP`, `ko-KR`, `de-DE`, `pt-BR`, `es-ES`, and `fr-FR`. The page is a browser drill with falling targets, green-target capture, and red-decoy inhibition; it is not a clinical reflex assessment.

Live localized web/SERP research was used to select native phrasing. The project `.env` does not expose a keyed Bing Webmaster credential, so no Bing volume is claimed. Google Search Console is not connected. Google Trends country-scoped Explore URLs were attempted but query-level time-series data was not available in this environment; Trends is therefore recorded as a validation path, not as a numeric demand source. No #1 ranking is guaranteed.

## Native keyword decisions

| Locale / market | Primary native cluster | Supporting intent terms | SERP / demand interpretation |
|---|---|---|---|
| `ja-JP` | `定規落としゲーム`, `定規落とし 反応時間` | `反応速度テスト`, `反射神経ゲーム 無料`, `落下 反応速度` | Japanese browser tools and school/science material use the ruler-drop concept; lead with `定規落とし`, not an English translation. |
| `ko-KR` | `자 반응속도 테스트`, `낙하 반응속도 테스트` | `반사신경 테스트 게임`, `반응속도 테스트 게임`, `순발력 측정` | Korean SERPs show strong reaction-test/game language but noisy ruler-specific coverage; keep the page specific to falling-target reaction and avoid a numeric volume claim. |
| `de-DE` | `Lineal-Falltest`, `Reaktionszeit messen` | `Reaktionstest online kostenlos`, `Reflexe testen`, `fallende Ziele` | German results distinguish physical lineal/ruler tests from unrelated MPU “Linienfolgetest” queries; the title pairs `Lineal-Falltest` with the measurement intent. |
| `pt-BR` | `teste da régua`, `teste de tempo de reação` | `teste de reflexo online`, `reação motora`, `teste de reflexo com régua` | Brazilian educational and sports pages use `reação de régua` / `tempo de reação com régua`; the tool should disambiguate itself as an online browser drill, not a clinical product. |
| `es-ES` | `test de la regla`, `test de tiempo de reacción` | `test de reflejos online`, `medir tiempo de reacción`, `caída de regla` | Spanish browser tools use `Caída de Regla` and `test de tiempo de reacción`; keep the title compact and answer the “how does the ruler-drop test work?” intent in visible guide copy. |
| `fr-FR` | `test de la règle`, `temps de réaction` | `test de réflexes en ligne`, `réaction visuo-motrice`, `chute de règle` | French sources describe the physical `test de la règle` and browser reaction tools; use that native phrase rather than a literal English label. |

## Live sources checked

- [ReactionTimeTest — Japanese reaction tests](https://reactiontimetestwebsite.com/ja/) uses native `定規落下` / reaction-time terminology and explains the classic ruler-drop method.
- [ReactionTimeTest — Portuguese reaction tests](https://reactiontimetestwebsite.com/pt/) uses `Queda de Régua` and `tempo de reação` for the browser tool intent.
- [ReactionTimeTest — Spanish reaction tests](https://reactiontimetestwebsite.com/es/) uses `Caída de Regla`, `tiempo de reacción`, and a direct FAQ for how the test works.
- [ReactionTimeTest — French reaction tests](https://reactiontimetestwebsite.com/fr/) uses `Chute de Règle`, `temps de réaction`, and `test de réflexes`.
- [CENSUPEG — Reação de Régua](https://comunicacao.censupeg.com.br/reacao-de-regua) confirms Brazilian educational usage of `teste de tempo de reação com régua`.
- [ReactionLevels — Ruler Drop Reaction Test](https://reactionlevels.com/test/ruler-drop) confirms the interactive browser-tool format for ruler-drop reaction intent.
- [Sapporo Nichidai entrance-exam PDF](https://www.sapporonichidai.ed.jp/high/wp-content/uploads/2025/08/r7_Entrance_Examination_Questionnaire.pdf) shows the Japanese school/science context for measuring reaction time from a falling ruler.

## Implementation and AEO/GEO checks

- Keep each locale URL canonical to itself and preserve the existing reciprocal `hreflang` map with English `x-default`.
- Keep the existing server-rendered guide, five-row benchmark table, four training protocols, and ten distinct FAQ answers in each locale page.
- Keep the existing `BreadcrumbList`, `WebApplication`, `SoftwareApplication`, `VideoGame`, `HowTo`, and `FAQPage` JSON-LD; refresh only the page-facing entity names/descriptions when metadata changes.
- Use short visible subtitles: one action plus one differentiator, so the line beneath the drill name remains readable on mobile.
- Do not call IndexNow, Bing submission, sitemap submission, or any deployment push during this pre-deployment research pass.
