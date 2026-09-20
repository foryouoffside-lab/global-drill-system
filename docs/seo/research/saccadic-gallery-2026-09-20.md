# Saccadic Gallery — native SEO/AEO/GEO research

Date: 2026-09-20  
Route family: `/drills/reaction-speed/saccadic-gallery`  
Markets: `ko-KR`, `ja-JP`, `de-DE`, `pt-BR`, `es-ES`, `fr-FR`

## Research boundary

This was a one-drill run. Research used the existing read-only Bing keyword script, Google Autocomplete with country/language pairs (`gl`/`hl`), and live localized SERP review. Bing `no data` means the endpoint did not return a measurable row; it is not the same as Google zero volume. Bing `0` is reported only where the endpoint returned an explicit zero. Autocomplete proves an active suggestion expansion, not a monthly-volume number.

Google Trends country URLs were attempted for Korea, Japan, Germany, and Brazil, but the interactive Trends endpoint was inaccessible in this environment. No Trends index or seasonality claim is made. Google Search Console and backlink/domain-authority data were not available in the connected tools.

## Native keyword decisions

| Market | Primary native cluster | Bing snapshot | Suggest / SERP evidence | Decision |
| --- | --- | --- | --- | --- |
| Korea (`ko-KR`) | `동체시력 테스트`, `동체시력 훈련`, `동체시력 게임` | `단속성 안구운동 훈련`, `동체시력 훈련`, `시선 이동 훈련`, `눈 운동`: no data | Google Suggest expands `동체시력` into 테스트, 훈련, 사이트, 게임, 반응속도 테스트, 테스트 게임 | Use `동체시력` as the title/entity language; keep specialist eye-movement terms in the guide and schema |
| Japan (`ja-JP`) | `動体視力テスト`, `動体視力 トレーニング`, `動体視力ゲーム` | All four initial specialist seeds: no data; follow-up `動体視力` seeds: no data | Suggest expands into テスト, トレーニング, 鍛える, ゲーム, 無料; Japanese SERPs contain free browser training tools | Front-load `動体視力トレーニング`; retain サッケード as supporting scientific vocabulary |
| Germany (`de-DE`) | `Augentraining online`, `Augentraining Übungen`, `Blicksprünge trainieren` | Follow-up seeds returned no data | Suggest directly expands `Augentraining` into online/Übungen and `Blicksprünge` into trainieren; German SERPs use Augentraining and Fokuswechsel/Blickwechsel language | Use `Augentraining Online` and `Blicksprünge trainieren` rather than leading with specialist Sakkaden wording |
| Brazil (`pt-BR`) | `treino de visão`, `treino de visão periférica`, `treino de visão de jogo` | Specialist/peripheral seeds returned explicit `0 / 0` | Suggest expands `treino de visão` into visão periférica, visão indireta and visão de jogo; Portuguese visual-field tools use treino de movimentos oculares and varrer language | Use the native visual-training cluster; do not claim measured high demand |
| Spain / LATAM (`es-ES`) | `entrenamiento visual`, `entrenamiento visual deportivo`, `entrenamiento visual por ordenador` | Follow-up seeds returned no data | Suggest expands into deportivo, cognitivo, por ordenador and app; Spanish SERPs frame visual training around peripheral vision, anticipation and sports | Use `Entrenamiento Visual Online`; retain ejercicios sacádicos as a secondary entity |
| France (`fr-FR`) | `entraînement visuel`, `entraînement visuel sportif`, `exercice visuel` | Follow-up seeds returned no data | Suggest expands into sportif and exercice visuel; French sports-vision SERPs use balayage visuel, saccades, attention visuelle and coordination œil-main | Use native visual-training wording in the title and keep saccadic terminology in the guide |

## Live SERP observations

- Japanese results directly match the interactive intent with [Mr.動体視力](https://game.weclo.net/move/), [Mach Tool's 動体視力 test/training](https://www.mach-tools.net/health/visiontest-dynamic/), and a free training-game app listing from [App-Liv](https://app-liv.jp/games/casual/2536/).
- German results use the broader native `Augentraining` concept and separate exercise/focus-change intent, visible in [Augentraining Online](https://www.augentraining.online/), [Augentraining.com](https://www.augentraining.com/), and [train & see Visualtraining](https://www.trainandsee.de/).
- Brazilian SERPs use visual-field training language such as `visão periférica` and `varrer`; [Tatiana Gebrael's Portuguese visual-field article](https://blog.tatianagebrael.com/2023/05/17/visao-periferica-a-visao-do-goleiro/) and [Stroke Sight in Portuguese](https://ansteyapps.com/pt/stroke-sight/) support the local terminology.
- French sports-vision results use `entraînement visuel`, `saccades`, `balayage` and eye-hand coordination: [EVOS Orthoptie](https://www.evos-orthoptie.com/entrainement/), [NeuroTracker France](https://www.institutneurosport.fr/neurotracker.html), and [EyeMotion training material](https://eye-motion.fr/wp-content/uploads/2024/10/Preparateur-Visuel-.pdf).
- Spanish search results point toward visual attention and peripheral training rather than literal medical `saccadic` phrasing; [Mind Club's visual-attention course](https://www.mind-club.net/cursos/vision-atencion.html) uses peripheral-field, anticipation and visual-training language.
- The Korean result set was noisy for the exact specialist terms, so the implementation follows the much clearer native Suggest cluster around `동체시력` rather than claiming unsupported volume.

## Implemented

- Reworked title, meta description, keywords, Open Graph, Twitter, BreadcrumbList, SoftwareApplication, WebApplication, and VideoGame names independently for all six locales.
- Added compact localized drill subtitles and captions using each market's native wording.
- Added `lib/i18n/drills/saccadicGallery.js` and routed the visible client HUD, controls, rules, result labels, about section, and share copy through the locale dictionary.
- Retained full localized guide depth: scientific introduction, benchmark table, technique rows, training steps, sources, and ten bespoke FAQ answers.
- Capped FAQ JSON-LD to ten questions and set `dateModified` to `2026-09-20`.
- Corrected the target drill's hit-ring insertion so the shared renderer receives the object returned by `createHitRing`.
- Preserved self-canonical URLs, locale alternates, index/follow robots, and existing routes.

## Guardrails

- No English page was translated into another language. Localized copy was authored around native query language and local SERP intent.
- No country route was created or deleted.
- No Bing Webmaster submission, IndexNow request, or URL push was made; `ENABLE_INDEXNOW=true` was not enabled.
- A #1 ranking cannot be guaranteed from keyword research alone. GSC, Google Trends values, Core Web Vitals, and authority/backlink measurements require deployment/account access.
