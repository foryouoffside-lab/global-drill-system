# Reaction Speed hub — native SEO/AEO/GEO research

Date: 2026-09-20  
Route: `/drills/reaction-speed`  
Scope: the category hub and its six localized category routes. Individual reaction drill pages were not rewritten in this pass.

## Native intent decisions

| Market | Primary native cluster | Supporting intent | Live evidence |
|---|---|---|---|
| Japan (`ja-JP`) | `反応速度 テスト`, `反射神経 トレーニング` | `動体視力 トレーニング`, `反応ゲーム`, `クリック速度 テスト` | [REAXION Japan](https://reaxion.jp/) connects reaction speed, dynamic vision, agility, and game-like training. [SignCascade aim trainer](https://signcascade-ud.jp/training/aim-trainer/) presents free browser target-response testing. |
| Korea (`ko-KR`) | `반응속도 테스트`, `반사신경 테스트` | `동체시력 훈련`, `클릭 속도 테스트`, `반응 훈련 온라인` | Native Korean intent is represented by the existing reaction-test route cluster and dynamic-vision training research; the hub leads with `반응속도 테스트` and keeps visual tracking as a supporting domain. |
| Germany (`de-DE`) | `Reaktionstest`, `Reaktionszeit testen` | `Reflextraining`, `visueller Reaktionstest`, `Klickgeschwindigkeit testen` | [Sprachnudel Reaktionstest](https://www.sprachnudel.de/spiele/geschicklichkeitsspiele-reaktionsspiele/reaktionstest) combines online reaction measurement with reflex, gaming, sport, and hand-eye coordination intent. |
| Brazil (`pt-BR`) | `teste de tempo de reação`, `treino de reflexo` | `teste de reação visual`, `velocidade de clique`, `visão dinâmica` | [Beba Overclock](https://bebaoverclock.com.br/pages/teste-de-reacao-2) and [Adamantiun](https://www.adamantiun.com.br/teste-de-reflexo/) show Brazilian Portuguese browser intent around reaction time and reflex testing. |
| Spain (`es-ES`) | `test de tiempo de reacción`, `entrenamiento de reflejos` | `test de reacción visual`, `velocidad de clic`, `seguimiento de objetivos` | [Maníaco Digital](https://maniacodigital.es/juegos/juegos-de-habilidad/test-de-reaccion-online-gratis-mide-tus-reflejos/) uses reaction-test, reflex, click, and millisecond-result language. [Sportis](https://revistas.udc.es/index.php/SPORTIS/article/view/12555) documents visual-stimulus reaction training in sport. |
| France (`fr-FR`) | `test temps de réaction`, `entraînement réflexes` | `test réaction visuelle`, `vitesse de clic`, `suivi de cible` | [GameMaster France](https://gamemaster.fr/jeux/test-reaction/) presents browser visual reaction testing and reflex-training intent. [Jeux Multijoueurs](https://jeux-multijoueurs.fr/clic-reflexe/) covers online reflex clicking and visual versus auditory reaction context. |

## Hub implementation

- The category page now leads with native category intent instead of repeating individual drill titles in English.
- The selected eight reaction drills remain crawlable in the carousel, domain cards, localized internal links, `CollectionPage`, and `ItemList` JSON-LD.
- Each locale receives independent metadata, category labels, hardware caveats, breadcrumb labels, FAQ answers, and collection item names.
- The FAQ answers distinguish browser task timing from clinical reaction measurement and explain display/input latency, mobile limitations, and repeatable testing conditions.
- No English page was machine-translated into the localized routes.

## Data limitations and guardrails

- The live sources establish native wording and intent, not Google monthly volume or a guaranteed ranking position.
- Google Trends and Search Console were not available through this workspace, so no numeric trend, GSC, competition, or #1 probability is claimed.
- No Bing URL submission or IndexNow request was made; deployment-time indexing remains a separate guarded step.
