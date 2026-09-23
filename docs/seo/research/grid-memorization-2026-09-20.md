# Grid Memorization international SEO/AEO/GEO research — 2026-09-20

Scope: the existing Grid Memorization drill only (`/drills/memory/spatial-memory/grid-memorization`) and its six locale routes. No other drill was researched or generated in this run.

## Evidence and limits

- Bing Webmaster `GetKeyword` was queried with the configured project key for each country/language pair and a native synonym. All returned `0 exact / 0 broad` for this drill, so no Google-volume or "low competition" claim is made from those results.
- Google/Bing-indexed SERP research was used to capture native labels and current tool intent. These results show phrasing and page format, not monthly volume.
- Google Trends was attempted through the public Explore endpoint, but the endpoint is rate-limited in this environment (HTTP 429). No Trends score is claimed.
- Google Search Console data is not available in the workspace, so impressions, clicks, CTR, and query-level performance are not claimed.
- No IndexNow, Bing URL submission, sitemap submission, or other search-engine push was performed.

## Localized keyword decisions

| Locale / market | Native SERP wording observed | Bing exact / broad checks | Decision |
|---|---|---:|---|
| `de-DE` | `visueller Gedächtnistest`, `Gedächtnistest`, `Memory Matrix`, `Muster merken`, `visuell-räumliches Arbeitsgedächtnis` | `visueller Gedächtnistest`: 0 / 0; `Gedächtnistest Matrix`: 0 / 0 | Keep the existing route; front-load `Visueller Gedächtnistest online`, with `Memory Matrix` and `Muster merken` as supporting intent. |
| `es-ES` / LATAM fallback | `test de memoria visual`, `memoria visual`, `memoria espacial`, `matriz`, `memoria visoespacial` | `test de memoria visual`: 0 / 0; `memoria visual test`: 0 / 0 | Keep the existing route; use the native tool query `Test de memoria visual online`, then cover spatial/matrix variants naturally. |
| `fr-FR` | `test de mémoire visuelle`, `mémoire spatiale`, `mémoire des motifs`, `matrice de mémoire` | `test de mémoire visuelle`: 0 / 0; `mémoire spatiale test`: 0 / 0 | Keep the existing route; use `Test de mémoire visuelle en ligne` and the spatial-memory qualifier. |
| `ja-JP` | `瞬間記憶テスト`, `視覚記憶`, `空間記憶`, `グリッド`, `パターン記憶` | `瞬間記憶テスト`: 0 / 0; `視覚記憶 テスト`: 0 / 0 | Keep the existing route; use the native high-intent phrase `瞬間記憶テスト` and explain the visual-memory grid task. |
| `ko-KR` | `순간 기억력 테스트`, `시각 기억력`, `공간 기억력`, `격자`, `패턴 기억` | `순간 기억력 테스트`: 0 / 0; `시각 기억력 테스트`: 0 / 0 | Keep the existing route; use `순간 기억력 테스트` with the native visual/spatial memory qualifiers. |
| `pt-BR` / `pt-PT` | `teste de memória visual`, `memória espacial`, `matriz de memória`, `memória visuoespacial`, `grelha de memória` | `teste de memória visual`: 0 / 0; `memória espacial`: 0 / 0 | Keep the existing route; use `Teste de memória visual online` and cover both Brazilian `grade` and European `grelha` wording in supporting copy. |

## SERP and answer-intent observations

- Germany: current pages frame the task as an online `Gedächtnistest`, show patterns in a matrix, and ask users to reproduce them: [HR Diagnostics memory test](https://www.hr-diagnostics.de/tests/gedaechtnistest), [World IQ Test memory reasoning](https://www.worldiqtest.com/de/training/memory-reasoning), [Brain-Fit memory-span test](https://www.brain-fit.com/html/merkspanne_online.html).
- Spain: current tools use `test de memoria visual`, a brief 5×5 grid, and position recall: [Gottrix visual memory test](https://gottrix.app/es/test-de-memoria-visual), [Online Memory Test Spanish](https://onlinememorytest.com/es), [visual-memory psychotechnic exercise](https://oposicionabombero.es/psicotecnicos/simulacros/simulacro_memoria_visual.html).
- France: current tools use `test de mémoire visuelle`, short-lived illuminated cells, and spatial recall: [Gottrix mémoire visuelle](https://gottrix.app/fr/test-de-memoire-visuelle), [Online Memory Test French](https://onlinememorytest.com/fr), [Problemory visual memory](https://problemory.com/fr/tools/visual-memory/).
- Japan: current native wording centers on `瞬間記憶テスト` and explains visual/iconic and spatial working memory: [QFitLab 瞬間記憶テスト](https://qfitlab.com/ja/game/memory_test/).
- Brazil/Portugal: current pages use `teste de memória visual`, `matriz de memória`, `memória espacial`, and `grelha de memória` for illuminated-cell reconstruction: [Memo visual-memory test](https://www.memo-app.com/pt/tools/visual-memory-test), [Lumosity memory matrix](https://www.lumosity.com/pt/brain-games/memory-matrix/), [BBGym memory grid](https://bbgym.club/pt/trainers/memory-grid/).
- Korea: indexed app results use native `순간 기억` / `시각 기억` intent; the page therefore uses Korean native memory-test wording rather than a translated English title: [Korean visual-memory app result](https://play.google.com/store/apps/details?hl=ko&id=com.lance.dualn_back).

## 14-step audit summary

1. Candidate queries: the primary and supporting native clusters in the table above.
2. Intent: interactive visual-memory test/training, not a medical diagnosis.
3. Ranking format: localized pages and browser tools lead; the drill is interactive above the guide.
4. Localization: selected wording comes from native-language SERP pages and app/tool labels, not word-for-word English translation.
5. Title/H1: each route front-loads the native primary query and keeps the brand suffix compact.
6. Authority: no backlink/domain-rating dataset is available; no easy-competition claim is made.
7. Feature gap: the drill combines instant play, adaptive 4×4→5×5 patterns, local scoring, guide content, and FAQ answers.
8. PAA: public SERP research surfaced definition, how-it-works, spatial-memory, and pattern-recall questions; existing localized FAQ sets retain ten bespoke answers.
9. Autocomplete: no reliable locale-specific autocomplete volume was available in this environment.
10. Competitor matrix: competitors provide grids and recall tasks; SkillDrills adds adaptive progression, methodology, benchmark tables, and no-login play.
11. Difficulty: unscored; Bing returned no measurable demand and authority data is unavailable.
12. Volume cross-check: Bing 0/0 for the checked terms; Google Trends 429; GSC unavailable.
13. Keyword cluster: one native primary plus visual, spatial, grid/matrix, and training modifiers per locale.
14. Ranking probability: not calculable responsibly without GSC, Google volume, and backlink data; no #1 guarantee is made.

## Implementation gate

The existing six locale pages are refined in place. Metadata, visible drill labels, answer-oriented subtitles, and entity schema use the native terms above. Existing full guides, benchmark tables, localized FAQ schemas, canonical URLs, and hreflang wiring are preserved. No English page was translated to create these phrases, and no search-engine submission is performed before deployment.
