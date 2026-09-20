# Speed Drill — native SEO/AEO/GEO research

Research date: 2026-09-20  
Route family: `/drills/physical/fitness/speed-drill`  
Markets: English reference, Japan (`ja-JP`), South Korea (`ko-KR`), Germany/DACH (`de-DE`), Brazil/Portugal (`pt-BR`/`pt-PT`), Spain/Latin America (`es-ES`/`es-MX`), and France (`fr-FR`)

## Search-intent decision

Speed Drill is a browser target-acquisition game: the player clicks moving targets while they shrink, earns time for hits, and loses the combo on misses. Native search intent is therefore click-speed/CPS or reaction-test intent combined with target accuracy and gaming practice. The implementation does not relabel the tool as a pure CPS counter; the page explains that its score includes target acquisition, accuracy, shrinking windows, and timing.

No English page was machine-translated. Every locale receives an independently authored keyword cluster, title, description, short UI label, and schema wording while preserving the same mechanics and full guide depth.

## Native keyword clusters

| Market | Primary native terms | Supporting native terms |
| --- | --- | --- |
| English | click speed test; target acquisition drill; reaction clicking game | CPS test; rapid click trainer; shrinking target game; aim reaction test |
| Japan | クリック連打; 連打測定; クリック速度測定 | CPS測定; 連打ゲーム; マウス連打; 反応速度テスト; ターゲット クリック練習 |
| South Korea | 반응속도 테스트; 클릭 속도 테스트; 순발력 테스트 | 반속 테스트; 반응속도 게임; 클릭 연타; 마우스 클릭 테스트; 타겟 조준 훈련 |
| Germany/DACH | Reaktionstest; Reaktionszeit Test; Klickgeschwindigkeitstest | Klicks pro Sekunde Test; Ziel-Trainer; Reflex Test; Maus Klicktest |
| Brazil/Portugal | teste CPS; teste de cliques; cliques por segundo | teste de velocidade de clique; contador de cliques; treino de mira; teste de reação |
| Spain/Latin America | test de clics por segundo; test de CPS; velocidad de click | contador de clicks; prueba de click; entrenamiento de puntería; juego de reflejos |
| France | test CPS; clics par seconde; click test | test de clic; vitesse de clic; compteur de clics; jeu de réflexes |

These clusters are relevance targets, not promises of Google volume or difficulty. The exact primary term is paired with target/accuracy wording so the page matches the actual tool instead of attracting only users looking for a simple timed CPS counter.

## Bing demand evidence

The read-only Bing keyword endpoint was checked after confirming the configured quota. Bing exact/broad impressions are Bing demand, not Google volume. A zero is a no-data result for that endpoint and is not evidence that Google demand is zero.

| Market | Query | Bing exact / broad impressions | Use |
| --- | --- | ---: | --- |
| Japan | クリック連打 | 57 / 57 | Primary Japanese rapid-click anchor. |
| Japan | Related to クリック連打: 連打測定 | 1,522 | Strong measurement intent; use in guide and supporting metadata. |
| Japan | Related to クリック連打: クリック速度測定 | 286 | Click-speed measurement variant. |
| South Korea | 클릭 속도 테스트 | 220 / 220 | Clean Korean click-speed anchor. |
| South Korea | 반응속도 테스트 | 10,468 / 11,030 | Primary Korean reaction-test anchor. |
| Germany | Reaktionstest | 521 / 590 | Strong German reaction-test anchor. |
| Brazil | teste CPS | 155 / 155 | Clean Brazilian CPS anchor; related `cps test` returned 1,915. |
| Spain | test de clics por segundo | 0 / 0; related `cps test` 229 | Retain native phrase and supporting CPS cluster; exact endpoint under-reported it. |
| France | test CPS | 565 / 608; related `cps test` 1,796 | Primary French CPS anchor, with native `clics par seconde` support. |

## Live native SERP signals reviewed

- Japan: [Luft's Japanese rapid-click/CPS tool](https://www.luft.co.jp/cgi/rapid-fire.php) uses `連打`, `CPS測定`, `連打測定`, reaction speed, and target mode; [the Japanese reaction test](https://reactiontest.org/ja/) documents browser timing and `反応速度テスト` intent.
- South Korea: the exact click-speed SERP was less accessible in this pass, but Bing related results surfaced `반응속도 테스트`, `순발력 테스트`, `반속 테스트`, and `반응속도 게임`; those native terms are used without relying on an English label.
- Germany: [ReactionTest's German page](https://reactiontest.net/de/) combines `Reaktionstest`, `Reaktionszeit`, `Klickgeschwindigkeitstest`, and target-trainer intent.
- Brazil/Portugal: [Mouse Checker's Portuguese CPS test](https://mousechecker.com/pt/click-speed-test/), [Snaplytics' Portuguese CPS test](https://toolkit.snaplytics.io/pt/cps-test/), and [Gera Rápido's Brazilian click test](https://gerarapido.com.br/contador-cliques) use `cliques por segundo`, `teste CPS`, `teste de cliques`, and browser-local measurement language.
- Spain/Latin America: [ClicksPerSecond's Spanish CPS page](https://www.clickspersecond.com/es/) and [Pantallazo's Spanish click-speed test](https://www.pantallazo.es/herramientas/click-speed-test) use `test de CPS`, `clicks por segundo`, `contador de clicks`, and gamer practice intent.
- France: [ClickSpeedTest France](https://clickspeedtest.fr/), [MyCPSTest France](https://www.mycpstest.fr/), and [CPS Test France](https://www.cpstest.fr/) use `test de clics par seconde`, `test CPS`, `vitesse de clic`, and timed browser modes.

## Implementation plan and limits

- Rewrite metadata, Open Graph, Twitter, schema names/descriptions, and the short visible drill label/subtitle independently for all six locales.
- Add `inLanguage` and `dateModified` consistently to the five exposed JSON-LD entities used by the page.
- Preserve the complete scientific introduction, five-row benchmark table, four protocols, HowTo data, internal locale links, and ten bespoke FAQs.
- Update the canonical route freshness override to `2026-09-20`.
- Google Trends, GSC, and browser-based country SERP capture were not available through the current workspace connections. Those signals remain unmeasured rather than inferred. No Bing URL submission or IndexNow request is made before deployment.
