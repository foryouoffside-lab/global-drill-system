# Staircase Step — native SEO/AEO/GEO research (2026-09-20)

## Scope and decision

This run covers one drill only: `/drills/visual-tracking/staircase-step` (Vertical Tracking). The intent is a free, browser-based practice tool for following a target that moves through stepped horizontal/vertical changes, with attention to vertical pursuit, gaze delay, corner re-acquisition, and target loss. It is a training measurement, not a medical test or diagnosis.

The six localized pages remain demand-gated country pages. The copy below was authored from native-market search language and local sources; it is not a word-for-word translation of the English page. Portugal/Brazil are represented by the existing `pt` route and the live demand check uses Brazil (`br`, `pt-BR`), while the other checks use Japan, Korea, Germany, Spain, and France.

## Native keyword clusters

| Market | Primary intent | Supporting native terms |
| --- | --- | --- |
| Japan (`ja-JP`) | 上下 視線移動 練習 | 動体視力 上下 トレーニング; 垂直追従 眼球運動; 階段状 軌道 追視; 高低差 エイム 練習 |
| Korea (`ko-KR`) | 상하 시선 이동 훈련 | 수직 안구 추적 훈련; 동체시력 상하 훈련; 고저차 에임 연습; 계단식 궤적 추적 |
| Germany (`de-DE`) | vertikale Blickverfolgung Übung | Blick nach oben unten Augen Übung; Augentraining vertikal; Höhenwechsel Ziel verfolgen; Blickverzögerung messen |
| Brazil (`pt-BR`) | rastreamento ocular vertical treino | visão dinâmica vertical treino; seguir alvo subindo e descendo; rastreamento visual em degraus; atenção visual vertical |
| Spain (`es-ES`) | seguimiento ocular vertical ejercicio | movimientos oculares verticales entrenamiento; seguimiento de arriba abajo; seguimiento visual por escalones; atención visual vertical |
| France (`fr-FR`) | poursuite oculaire verticale exercice | mouvements oculaires verticaux entraînement; suivi de haut en bas; poursuite visuelle par paliers; attention visuelle verticale |

These are intent clusters, not claims of Google monthly volume. The most specific phrases are useful for relevance but may have little measurable volume; broader terms are used carefully to avoid drifting into unrelated medical or generic fitness intent.

## Live Bing checks (read-only)

The repository Bing utility was run on 2026-09-20 with the country/language pairs above. Exact-match output was:

| Market | Exact seed | Result |
| --- | --- | --- |
| Japan | `上下 視線移動 練習` | no data |
| Korea | `상하 시선 이동 훈련` | no data |
| Germany | `vertikale Blickverfolgung Übung` | no data |
| Brazil | `rastreamento ocular vertical treino` | exact 0; broad 0 |
| Spain | `seguimiento ocular vertical ejercicio` | no data |
| France | `poursuite oculaire verticale exercice` | no data |

Related-query checks for Japan, Korea, Germany, Spain, and France returned provider `UnknownError`/no related keywords. Brazil returned related results, but the broad seed `treino visual` was dominated by generic fitness searches; relevant rows included `treino de mira` (263), `treino de mira valorant` (118), and `treino de digitação online` (113). These are directional Bing signals, not Google volume and not competition scores.

No Bing submission, IndexNow request, or deployment action was made.

## Local source and SERP-language evidence

- Japan: [Shin-Yu smooth-pursuit practice](https://shin-yu.net/mekintore/video/smooth-pursuit-training.html) uses native language for following a moving target while keeping the head still; [Mach Tools dynamic visual-acuity test](https://www.mach-tools.net/health/visiontest-dynamic/) describes horizontal, vertical, and random target movement; [Fukuoka Sports Science material](https://www.sponet.pref.fukuoka.jp/files/Book_467_file.pdf) discusses vertical/horizontal dynamic visual acuity and eye movement.
- Korea: native queries were tested directly (`상하 시선 이동`, `수직 안구 운동`, `동체시력`, `고저차 에임`, `상하 표적 추적`). The page uses the Korean search vocabulary rather than an English-derived phrase because the available SERP extract did not provide a reliable Korean primary source.
- Germany: [University Hospital Düsseldorf guide](https://www.uniklinik-duesseldorf.de/fileadmin/Fuer-Patienten-und-Besucher/Kliniken-Zentren-Institute/Kliniken/Klinik_fuer_Neurochirurgie/Folder_Schwindel.pdf) describes following a target horizontally and vertically with the head still; [Physitrack Blickverfolgung](https://de.physitrack.com/home-exercise-video/blickverfolgung---liegende-acht) provides native `Blickverfolgung` wording.
- Brazil/Portuguese: [Vision Workout in the Portugal App Store](https://apps.apple.com/pt/app/vision-workout-eye-training/id1563884276) and [Google Play Portuguese listing](https://play.google.com/store/apps/details?hl=pt&id=jp.thomsons.Vision1) use `rastreamento visual`, vertical/horizontal eye movement, dynamic vision, and progressive speed wording; [NeuroVisual Trainer](https://www.neurovisualtrainer.com/pt/exercises) supports `rastreamento`, attention, and focus vocabulary.
- Spain: [EFDeportes vertical saccadic exercise](https://www.efdeportes.com/efd213/movimientos-sacadicos-para-entrenamiento-visual.htm) uses `movimientos en vertical` and fixation/training language; [EducaMadrid visual-training software](https://www.educa2.madrid.org/web/albor/software/-/visor/programa-de-estimulacion-visual-por-ordenador-evo-%3Bjsessionid%3D35B7D567EE91862BA3FA3F945F909A59) provides a local visual-training context.
- France: [Framiral visual-pursuit software](https://framiral.fr/web/vs/) distinguishes horizontal, vertical, oblique, slow, and saccadic pursuit; [CNR La Pépinière material](https://www.cnrlapepiniere.fr/wp-content/uploads/sites/20/2022/02/programmeStimulationRegardAvecCouv2.pdf) uses native object-following directions.

## Evidence limits and ranking guardrail

Google Trends, Google Search Console, Google Keyword Planner, localized Google Autocomplete captures, and a full incognito Top-10 authority audit were not available in this run. Therefore this note does not claim high volume, low competition, a probability of #1, or guaranteed ranking. Bing exact-match demand is not Google demand, and no competition score is inferred from a zero result. The implementation prioritizes native phrasing, clear intent, answer-ready headings, structured data, measurement methodology, and the interactive tool itself.

