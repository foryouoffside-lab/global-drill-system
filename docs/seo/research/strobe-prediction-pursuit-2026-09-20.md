# Strobe Prediction Pursuit — native SEO/AEO/GEO research (2026-09-20)

## Scope and decision

This run covers one drill only: `/drills/visual-tracking/strobe-prediction-pursuit`. The tool trains visual prediction while a moving target is intermittently hidden, then measures reappearance error, tracking continuity, and target loss. It is a browser training measurement, not a medical test, diagnosis, or claim that stroboscopic training transfers to every sport.

The six localized pages use native market vocabulary rather than translating English copy. The existing `pt` route is researched against Brazil (`br`, `pt-BR`); the other country/language pairs are Japan (`ja-JP`), Korea (`ko-KR`), Germany (`de-DE`), Spain (`es-ES`), and France (`fr-FR`).

## Native keyword clusters

| Market | Primary intent | Supporting native terms |
| --- | --- | --- |
| Japan (`ja-JP`) | ストロボ 動体視力 練習 | 動体視力 点滅 練習; ストロボメガネ 効果 練習; 視覚補間 トレーニング; 断続視覚 運動記憶 |
| Korea (`ko-KR`) | 스트로브 시각 훈련 | 동체시력 점멸 훈련; 스트로브 안경 시력 훈련; 가림 궤적 예측; 점멸 가림 시각 추종 |
| Germany (`de-DE`) | stroboskopisches Sehtraining | Stroboskopbrille Training; intermittierendes Sehen Sport; Blickverfolgung Stroboskop; visuelles Training Antizipation |
| Brazil (`pt-BR`) | treino visual estroboscópico | óculos estroboscópicos treino; visão estroboscópica esporte; rastreamento visual com oclusão; antecipação visual treino |
| Spain (`es-ES`) | entrenamiento visual estroboscópico | gafas estroboscópicas entrenamiento; visión estroboscópica deporte; oclusión visual intermitente; predicción de trayectoria visual |
| France (`fr-FR`) | entraînement visuel stroboscopique | lunettes stroboscopiques entraînement; vision intermittente sport; poursuite visuelle masquée; anticipation visuelle sportive |

These clusters express native intent but are not presented as Google monthly volume. Specific strobe phrases are deliberately paired with broader visual-training and anticipation terms so the page can answer both tool and sports-vision queries without drifting into unsupported medical claims.

## Live Bing checks (read-only)

The repository Bing utility was run on 2026-09-20 with explicit country/language pairs.

| Market | Exact seeds | Result |
| --- | --- | --- |
| Japan | `ストロボ 動体視力 練習`; `ストロボメガネ 効果 練習` | no data for both |
| Korea | `스트로브 시각 훈련`; `스트로브 안경 시력 훈련` | no data for both |
| Germany | `stroboskopisches Sehtraining`; `Stroboskopbrille Training` | no data for both |
| Brazil | `treino visual estroboscópico`; `óculos estroboscópicos treino` | no data; exact 0 and broad 0 respectively |
| Spain | `entrenamiento visual estroboscópico`; `gafas estroboscópicas entrenamiento` | no data for both |
| France | `entraînement visuel stroboscopique`; `lunettes stroboscopiques entraînement` | no data for both |

Related-query checks for Japan, Korea, Germany, Spain, and France returned provider `UnknownError`/no related keywords. Brazil returned generic `treino visual` suggestions; relevant rows included `treino de mira` (263) and `treino de mira valorant` (118), but the list was dominated by fitness and unrelated training. These are Bing directional signals only, not Google volume or competition scores.

No Bing submission, IndexNow request, or deployment action was made.

## Local-language and evidence sources

- Japan: [Japanese sports-science strobe-training report](https://www.nifs-k.ac.jp/images/uppdf/keiei/jissekihyouka/evi-dai3ki-genkyou-kenkyuu.pdf) discusses strobe training, gaze error, and tracking an incoming ball; [Japanese dynamic-vision training](https://www.mach-tools.net/health/visiontest-dynamic/) uses native `動体視力`, moving-target tracking, and head-still practice.
- Korea: the page uses native `스트로브`, `동체시력`, `점멸`, `가림`, and `궤적 예측` query language. The live SERP extract did not provide a reliable Korean primary source, so no Korean source claim is invented.
- Germany: [OCL visuomotor training review](https://www.ocl-online.de/de/des-visuomotorischen-trainings-fuer-sportler) uses `stroboskopisch visuelles Training`, anticipation, and eye-hand coordination; [German Badminton Association project](https://www.badminton.de/news/badminton/bisp-projekt-stroboskopisches-training-im-badminton/) documents a sport-specific stroboscopic training project.
- Brazil/Portuguese: [USP Portuguese eye-tracking research](https://teses.usp.br/teses/disponiveis/45/45134/tde-14072026-142219/pt-br.html) uses `iluminação estroboscópica`, `movimentos de perseguição suave`, and `rastreamento ocular`; [Portuguese sports-vision coverage](https://www.ecum.uminho.pt/pt/Media/Documents/Correio%20do%20Minho/2013/06-06-2013.pdf) lists óculos estroboscópicos among visual-training tools.
- Spain: [UPC Spanish sports-vision research](https://upcommons.upc.edu/bitstreams/95e6a04c-37cf-41a9-8adb-2fc8ac830fad/download) uses `Entrenamiento Visual Estroboscópico` and discusses stroboscopic training instruments; [Spanish stroboscopic terminology](https://es.wikipedia.org/wiki/Estrobosc%C3%B3pico) confirms the native adjective.
- France: [French visual-pursuit reference](https://fr.wikipedia.org/wiki/Poursuite_visuelle) defines `poursuite visuelle` for following a moving target; [French stroboscopic terminology](https://fr.wikipedia.org/wiki/Effet_stroboscopique) provides the native `effet stroboscopique` vocabulary.
- Scientific guardrail: [2026 PubMed systematic review and meta-analysis](https://pubmed.ncbi.nlm.nih.gov/42482246/) reports heterogeneous evidence, stronger multi-session than acute effects, and insufficient evidence for a single optimal dose; [the 2024 sports-vision review](https://www.tandfonline.com/doi/full/10.1080/1750984X.2024.2437385) describes stroboscopic training as one visual-training subclass rather than a universal performance guarantee.

## Evidence limits and ranking guardrail

Google Trends, Google Search Console, Google Keyword Planner, localized Google Autocomplete captures, and a full incognito Top-10 authority audit were not available in this run. Therefore this note does not claim high volume, low competition, a probability of #1, or guaranteed ranking. Bing exact-match demand is not Google demand, and a zero result is not evidence of zero competition. Implementation focuses on native intent, answer-ready structure, transparent measurement limits, and the interactive tool.

