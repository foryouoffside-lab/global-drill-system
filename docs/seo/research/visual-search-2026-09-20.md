# Visual-search drill — native SEO/AEO/GEO research

Date: 2026-09-20  
Route: `/drills/visual/visual-recognition/visual-search` and the six existing locale routes  
Scope: one drill, six country/language pages (`ja-JP`, `ko-KR`, `de-DE`, `pt-BR`, `es-ES`, `fr-FR`)

## Decision and guardrails

The six existing localized pages remain in scope because local SERPs contain native visual-search, attention, symbol-finding, or visual-discrimination intent. The drill is a browser practice task, not an eye-health or clinical diagnosis. The keyword choices are based on native local phrasing and intent; no English page was translated line by line.

Bing figures below are Bing exact-match estimates, not Google volume. Google Search Console was not connected in this workspace, and Google Trends Explore pages were not accessible to the research browser, so no Google-specific volume or trend index is claimed. No IndexNow or other search-engine submission was performed.

## Native keyword decisions

| Market | Primary native cluster | Supporting / long-tail cluster | Bing snapshot |
| --- | --- | --- | --- |
| Japan (`ja-JP`) | `文字探し`, `視覚探索` | `視覚探索テスト`, `選択的注意`, `視覚走査`, `ターゲット検出`, `記号探し` | `文字探し`: 24 exact / 114 broad. Exact `視覚探索 テスト` returned 0, so `文字探し` is the demand-led consumer hook while `視覚探索` preserves scientific intent. |
| Korea (`ko-KR`) | `글자 찾기 테스트`, `시각 탐색` | `시각 변별력`, `선택적 주의력`, `주의력 테스트`, `문자 찾기`, `표적 탐지`, `틀린 글자 찾기` | Exact Bing estimates were 0 for the tested specialist and consumer variants. Korean SERPs still show active native task intent, including a live `한글 틀린 글자 찾기 테스트` page, so the page keeps the precise native cluster without inventing volume. |
| Germany (`de-DE`) | `visuelle Suche` | `visuelle Suche Test`, `visuelle Aufmerksamkeit`, `selektive Aufmerksamkeit`, `Symbolsuche`, `Konjunktionssuche`, `Aufmerksamkeitstest` | Related Bing results for `visuelle Aufmerksamkeit` surfaced `visuelle Suche` at 117 and `visuelle Wahrnehmung` at 19. Exact specialist variants returned 0. |
| Brazil (`pt-BR`) | `busca visual` | `teste de busca visual`, `busca visual com interferência`, `atenção seletiva visual`, `varredura visual`, `velocidade de busca visual`, `teste de símbolos` | Exact specialist queries returned 0 and the related `busca visual` results were dominated by generic `busca` meanings. The local SERP still contains a native `Busca visual com interferência` assessment, so the page retains the accurate task cluster rather than chasing unrelated search volume. |
| Spain (`es-ES`) | `búsqueda visual` | `test de búsqueda visual`, `búsqueda visual con interferencia`, `atención selectiva visual`, `exploración visual`, `velocidad de búsqueda visual`, `test de símbolos` | Exact tested variants returned 0; related `atención visual` was noisy and dominated by customer-service intent. Native assessment SERPs confirm the accurate visual-search/interference terminology. |
| France (`fr-FR`) | `recherche visuelle` | `test de recherche visuelle`, `tâche de recherche visuelle`, `attention sélective`, `balayage visuel`, `test d’attention visuelle`, `contrôle de l’interférence` | Exact tested variants returned 0; the related `attention visuelle` set was noisy. French research and attention-test SERPs use `recherche visuelle`, `balayage visuel`, and `attention sélective`. |

## Live native SERP evidence

- Japan: [Japanese visual-search experiment](https://kohske.github.io/KisojiOnline/theme/VisualSearch/) uses `視覚探索`, `特徴探索`, `結合探索`, set size, and reaction time. Consumer pages use `文字探し` and attention training: [Study Port](https://study-port.com/brain-find-characters/) and [Origamia](https://origamia.info/brain-training/word-search-game.html).
- Korea: [Jiraksil’s Korean different-character test](https://www.jiraksil.com/service/koreanspot) uses `한글 틀린 글자 찾기 테스트`, visual discrimination, concentration, and response time. A Korean attention-tool page also explains visual-search speed through the Schulte table: [OneToolHub](https://onetoolhub.com/tests/focus).
- Germany: [Labvanced’s German visual-search task](https://www.labvanced.com/content/research/de/tasks/visual-search-task) uses `Visuelle Suche Aufgabe`, target/distractor displays, and selective attention. [GlobalMindTests](https://globalmindtests.com/filteraufgabe-test.html) uses `Filteraufgabe` for visual search, selective attention, and search speed.
- Brazil/Portuguese: [NeuronUP Brasil’s BVI](https://neuronup.com/br/neuronup-assessment/teste-de-busca-visual-com-interferencia-bvi/) explicitly uses `busca visual com interferência`, `atenção seletiva visual`, target/distractor discrimination, and visual-search speed. A Brazilian attention-test document also uses `teste de atenção visual seletiva`: [UFMG repository](https://repositorio.ufmg.br/server/api/core/bitstreams/83b33f87-f66a-4841-9f5a-380542ab6caf/content).
- Spain: [NeuronUP’s Spanish BVI](https://neuronup.com/neuronup-assessment/test-busqueda-visual-interferencia-bvi/) uses `búsqueda visual con interferencia`, `atención selectiva visual`, target/distractor search, and visual-search speed. The [Spanish Test of Symbols and Digits material](https://dspace.ceu.es/server/api/core/bitstreams/56d887f8-78a9-4b0d-bddf-274dd8c33661/content) connects symbol search with visual attention and perceptual speed.
- France: [Labvanced’s French visual-search task](https://www.labvanced.com/content/research/fr/tasks/visual-search-task.html) uses `Tâche de Recherche Visuelle`, attention selection, and feature/conjunction search. The French [Schulte table reference](https://fr.wikipedia.org/wiki/Table_de_Schulte) connects the grid task with visual search, peripheral vision, attention, and visual perception; [NEURA](https://neurabrain.app/fr/attention) presents visual search as a selective-attention activity.

## Implementation audit

- Updated each locale’s title, meta description, keywords, Open Graph, and Twitter metadata around native visual-search/attention intent.
- Updated the visible guide title and compact above-the-fold drill title/subtitle for each locale.
- Updated shared localized drill names/taglines used by cards and internal navigation.
- Updated localized JSON-LD `dateModified` values to `2026-09-20`.
- Added the route to the per-URL sitemap freshness override.
- Preserved the existing server-rendered scientific guide, Treisman/Wolfe/Duncan/Lavie/Eriksen citations, benchmark tables, calibration/training protocol, schema, and 10 distinct FAQ questions per locale.
- Preserved locale self-canonicals, alternate-language matrix, `x-default` behavior, and index/follow robots directives.

## Quality status

Exact specialist phrases were not inflated where Bing returned zero or where related suggestions were clearly ambiguous. Generic image-search meanings were deliberately excluded from primary targeting. Final syntax, metadata-length, diff, and build checks are required before deployment; no ranking #1 claim is made.

## Follow-up live research — 2026-09-20

The next optimization pass rechecked native queries separately in the six target markets. The live web results reinforced the consumer wording `文字探し` in Japan, `숨은 글자 찾기` / `글자 찾기` in Korea, `Buchstaben finden` and `visuelle Suche` in Germany, `teste de atenção visual seletiva` and `busca visual` in Brazil, `búsqueda visual` and `atención selectiva visual` in Spain, and `recherche visuelle` / `attention sélective` in France. These are intent signals, not Google-volume claims.

Fresh Bing keyword snapshots for this pass were: Japan `文字探し` 24 exact / 114 broad and `選択的注意` 98 / 98; Germany `visuelle Suche` 117 / 138; Brazil `busca visual` 1 / 1; Spain `búsqueda visual` 17,159 / 17,369; France `recherche visuelle` 32,884 / 33,376. Korea's tested native phrases returned no Bing data. The Spain and France head terms are heavily ambiguous with image search, and Germany's related results were dominated by image-search meanings, so those figures are not treated as drill-specific demand or low competition. Exact specialist “test” variants returned no Bing data across all six markets.

Live native result examples used for intent validation: [Japanese visual-search task](https://www.labvanced.com/content/research/ja/tasks/visual-search-task.html), [Korean selective-attention research](https://oak.jejunu.ac.kr/bitstream/2020.oak/23097/2/%EA%B5%AD%EB%82%B4%20%EC%B4%88%EB%93%B1%ED%95%99%EC%83%9D%EC%9D%98%20%EC%A3%BC%EC%9D%98%EC%A7%91%EC%A4%91%EB%A0%A5%20%ED%96%A5%EC%83%81%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%20%ED%9A%A8%EA%B3%BC%EC%97%90%20%EB%8C%80%ED%95%9C%20%EB%A9%94%ED%83%80%EB%B6%84%EC%84%9D.pdf), [German visual-search task](https://www.labvanced.com/content/research/de/tasks/visual-search-task), [Brazilian selective-visual-attention material](https://repositorio.ufmg.br/bitstreams/83b33f87-f66a-4841-9f5a-380542ab6caf/download), [Spanish selective visual attention game](https://www.lumosity.com/es/brain-games/star-search/), and [French selective-attention test](https://soundary.life/fr/test/selective-attention).

The implementation therefore keeps the high-intent native terms in visible copy while qualifying ambiguous head terms with the actual task: finding a rotated target character among distractors. No GSC, Google Trends, backlink-authority, or #1-ranking claim is made, and no IndexNow/Bing URL submission is performed before deployment.
