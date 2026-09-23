# Triangular Pursuit — native SEO/AEO/GEO research (2026-09-20)

## Scope and decision

This run covers one drill only: `/drills/visual-tracking/triangular-pursuit`. The tool asks the user to follow a moving target around a triangular path, including sharp corners, and records pursuit continuity, corner re-acquisition, overshoot, and target loss. It is a browser training measurement, not a clinical eye examination or diagnosis.

The six localized pages use native search wording instead of translating the English page. The existing `pt` route is researched against Brazil (`br`, `pt-BR`); the other markets are Japan (`ja-JP`), Korea (`ko-KR`), Germany (`de-DE`), Spain (`es-ES`), and France (`fr-FR`).

## Native keyword clusters

| Market | Primary intent | Supporting native terms |
| --- | --- | --- |
| Japan (`ja-JP`) | 三角形 視線 追従 トレーニング | 三角形 眼球運動 練習; 動体視力 三角軌道; 視線 三角形 練習; 斜め 追視 トレーニング |
| Korea (`ko-KR`) | 삼각형 시선 추적 훈련 | 삼각 궤적 안구 운동; 삼각형 표적 추적; 동체시력 방향 전환; 코너 재포착 시선 훈련 |
| Germany (`de-DE`) | Dreiecksbahn Blickverfolgung Training | dreieckige Augenbewegungen Übung; Dreiecksbahn Ziel verfolgen; Blickwechsel an Ecken; visuelles Tracking diagonal |
| Brazil (`pt-BR`) | rastreamento visual triangular treino | movimento ocular triangular exercício; seguir alvo em triângulo; rastreamento diagonal; treino de visão dinâmica |
| Spain (`es-ES`) | seguimiento visual triangular ejercicio | movimientos oculares triangulares entrenamiento; seguir objetivo en triángulo; seguimiento diagonal; cambios de mirada en esquinas |
| France (`fr-FR`) | poursuite visuelle triangulaire exercice | mouvements oculaires triangulaires entraînement; suivre une cible en triangle; poursuite diagonale; changement du regard aux angles |

These are intent clusters rather than claims of Google monthly volume. The page combines the geometric pattern with broader native terms such as visual pursuit, diagonal tracking, dynamic vision, and corner re-acquisition so the content answers the actual tool use without promising medical outcomes.

## Live Bing checks (read-only)

The repository Bing utility was run on 2026-09-20 with explicit country/language pairs.

| Market | Exact seeds | Result |
| --- | --- | --- |
| Japan | `三角形 視線 追従 トレーニング`; `三角形 眼球運動 練習` | no data for both |
| Korea | `삼각형 시선 추적 훈련`; `삼각 궤적 안구 운동` | no data for both |
| Germany | `Dreiecksbahn Blickverfolgung Training`; `dreieckige Augenbewegungen Übung` | no data for both |
| Brazil | `rastreamento visual triangular treino`; `movimento ocular triangular exercício` | no data for both |
| Spain | `seguimiento visual triangular ejercicio`; `movimientos oculares triangulares entrenamiento` | no data for both |
| France | `poursuite visuelle triangulaire exercice`; `mouvements oculaires triangulaires entraînement` | no data for both |

All six related-query calls were throttled by the provider (`ThrottleUser`) and returned no related keywords. These are Bing signals only, not Google volume, competition scores, or evidence of zero demand.

No Bing submission, IndexNow request, or deployment action was made.

## Local-language and evidence sources

- Japan: [Japanese dynamic-vision training](https://visionup.jp/post/dotai-shiryoku-training-jitaku-kantan) uses native `動体視力`, head-still eye-only following, and progressive practice; [Japanese smooth-pursuit training](https://shin-yu.net/mekintore/video/smooth-pursuit-training.html) uses `追従眼球運動` and moving-target pursuit.
- Korea: the page uses native `삼각형`, `삼각 궤적`, `시선 추적`, `안구 운동`, and `동체시력` wording. The live Korean SERP extract did not provide a reliable Korean primary source, so no Korean source claim is invented.
- Germany: [German archery trainer education](https://www.dsb.de/bogensport/news/artikel/news/bildung-trainerfortbildung-augentraining) uses `Augentraining`, eye mobility, and peripheral-field vocabulary; [Profax visual-perception manual](https://www.profaxonline.com/defr/manuals/dobpro/) lists triangle pursuit and diagonal pursuit as visual-motility tasks.
- Brazil/Portuguese: [Vision Workout Portuguese listing](https://apps.apple.com/pt/app/vision-workout-treino-visual/id1563884276) uses `movimento ocular`, `rastreamento diagonal`, `visão dinâmica`, and adjustable speed; [Estimule Você](https://estimulevoce.com.br/produto/atividade-para-trabalhar-rastreamento-visual-1/) uses `rastreamento visual` and multi-direction eye movement.
- Spain: [Optonet eye-movement exercise](https://optonet.es/docs/movimientos-oculares/) describes pursuit exercises and diagonal/linear movement; [Spanish educational research](https://repository.unab.edu.co/bitstream/handle/20.500.12749/11459/2020_Tesis_Angie_Vanessa_Duarte.pdf?sequence=1) explicitly discusses triangular, square, vertical, horizontal, and diagonal eye-following movements.
- France: [Profax French visual-perception manual](https://www.profaxonline.com/frfr/manuals/dobpro/) lists `triangle`, diagonal pursuit, and geometric forms; [French smooth-pursuit exercise guidance](https://eyerehab.app/fr/exercices-stabilisation-regard/) uses `poursuites lisses`, diagonal patterns, and keeping the head still.

## Evidence limits and ranking guardrail

Google Trends, Google Search Console, Google Keyword Planner, localized Google Autocomplete captures, and a full incognito Top-10 authority audit were not available in this run. Therefore this note does not claim high volume, low competition, a probability of #1, or guaranteed ranking. Bing no-data results are not Google demand measurements. Implementation prioritizes native terminology, answer-ready structure, transparent measurement limits, and the interactive tool.

