# Jump Sequence — native SEO/AEO/GEO research

Research date: 2026-09-20  
Route family: `/drills/physical/fitness/jump-sequence`  
Markets: English reference, Japan (`ja-JP`), South Korea (`ko-KR`), Germany/DACH (`de-DE`), Brazil/Portugal (`pt-BR`/`pt-PT`), Spain/Latin America (`es-ES`/`es-MX`), and France (`fr-FR`)

## Search-intent decision

The browser drill asks the player to charge a jump, steer during the airborne phase, and intercept moving targets before landing. Native SERP language therefore combines vertical-jump/plyometric training with timing, rhythm, coordination, reflex, and browser-game intent. The page does not claim that a mouse drill increases real-world jump height; its guide explains the distinction and describes the measured interaction.

No English page was machine-translated. Each locale keeps its own native keyword cluster and short UI label while retaining the same underlying mechanics, scientific guide depth, benchmark table, training protocols, and ten FAQ answers.

## Native keyword clusters

| Market | Primary native terms | Supporting native terms |
| --- | --- | --- |
| English | jump timing drill; jump sequence game; plyometric rhythm drill | aerial trajectory game; mid-air target game; vertical jump timing; reaction jump game |
| Japan | リズムジャンプ; リズムトレーニング; ジャンプ タイミング 練習 | ジャンプ力 トレーニング; 垂直跳び トレーニング; 空中操作 ゲーム; ジャンプゲーム 無料 |
| South Korea | 점프력 운동; 점프 타이밍 훈련; 순발력 운동 | 서전트 점프 훈련; 플라이오메트릭 점프; 공중 조작 게임; 점프 게임 |
| Germany/DACH | Sprungkrafttraining; Sprungkoordination; Sprungfolge | plyometrisches Training; Vertikalsprung Training; Sprungspiel; Reaktionsschnelligkeit Sprung |
| Brazil/Portugal | treino de salto; treino pliométrico; salto vertical | treino de impulsão; coordenação motora no salto; jogo de reflexo; jogo de salto |
| Spain/Latin America | pliometría; entrenamiento de salto vertical; ejercicios de salto | coordinación en el salto; tiempo de suspensión; juego de reflejos; juego de salto |
| France | pliométrie; détente verticale; exercices de saut | entraînement au saut; coordination du saut; temps de suspension; jeu de réflexes |

These are relevance clusters, not fabricated Google volume or difficulty scores. The page uses the interaction-specific terms alongside the established sports vocabulary so the title does not promise a physical performance outcome the browser tool cannot measure.

## Bing demand evidence

The read-only Bing keyword endpoint was checked after confirming the configured quota. Bing exact-match impressions are Bing demand, not Google volume, and zero means that endpoint returned no data for that request; it does not prove Google demand is zero.

| Market | Query | Bing exact / broad impressions | Use |
| --- | --- | ---: | --- |
| Japan | リズムジャンプ | 65 / 65 | Primary native rhythm-jump anchor. |
| Japan | Related to リズムジャンプ: リズムトレーニング | 108 | Supporting cadence/training intent. |
| South Korea | 점프 훈련 | 0 / 0 | Retained as native relevance; related results were polluted by university and game-name entities. |
| Germany | Sprungkrafttraining | 0 / 0 | Retained because German sports SERPs consistently use the term. |
| Brazil | treino de salto | 0 / 0 | Retained because Brazilian sports research and SERPs use the phrase. |
| Spain | pliometría | 16 / 16 | Primary Spanish sports-conditioning anchor. |
| France | pliométrie | 64 / 64 | Primary French sports-conditioning anchor. |

## Live native SERP signals reviewed

- Japan: [Yahoo Japan Sports training coverage](https://sports.yahoo.co.jp/column/detail/201905020012-spnavido) confirms native training-language usage and recovery framing around jump work.
- Korea: public results for the exact browser interaction were sparse; the implementation retains Korean jump-power, vertical-jump, quickness, and jump-game vocabulary rather than inventing a translated drill name.
- Germany: [German National Library terminology for Sprungkrafttraining](https://katalog.dnb.de/EN/resource.html?id=042026903&pr=0&sortA=bez&sortD=-dat&v=list), [Fachportal Pädagogik on Sprungsequenzen](https://www.fachportal-paedagogik.de/literatur/vollanzeige.html?FId=3165717), and [VIBSS coordination guidance](https://hsb.vibss.de/sportpraxis/wissenszentrum/gesundheit-und-fitness/koordination) support `Sprungkraft`, `Sprungfolge`, and `Koordination` vocabulary.
- Brazil/Portugal: [Centro Esportivo Virtual's Portuguese depth-jump review](https://www.cev.org.br/biblioteca/o-treinamento-salto-profundidade-uma-revisao/) and [Brazilian plyometric research](https://www.rbff.com.br/index.php/rbff/pt/article/view/660) use `treino de salto`, `salto vertical`, `pliometria`, and impulse/power language.
- Spain/Latin America: [ENFAF's Spanish plyometric guide](https://enfaf.com/rutina-de-pliometria/), [Under Armour España's plyometric guide](https://www.underarmour.es/es-es/t/blog/que-es-la-pliometria-entrenamiento/), and [Dialnet's Spanish football study](https://dialnet.unirioja.es/servlet/articulo?codigo=10142582) support `pliometría`, `salto vertical`, coordination, and progression language.
- France: [French Wikipedia's pliométrie entry](https://fr.wikipedia.org/wiki/Pliom%C3%A9trie), [FFF TV's plyometric exercise page](https://ffftv.fff.fr/video/6312420826112/6-la-pliome-trie-cloche-pieds), and [Coros France's coaching article](https://coros.com/fr/stories/coros-coaches/c/training-with-plyometrics) support `pliométrie`, coordination, jump technique, and safe progression vocabulary.

## Implementation plan and limits

- Rewrite metadata, Open Graph, Twitter, schema names/descriptions, and the short visible title/subtitle independently for all six locales.
- Add `inLanguage` and `dateModified` consistently to the five exposed JSON-LD entities used by the page.
- Preserve the complete scientific introduction, five-row benchmark table, four protocols, HowTo steps, internal locale links, and ten bespoke FAQs.
- Update the canonical route freshness override to `2026-09-20`.
- Google Trends, GSC, and browser-based country SERP capture were not available through the current workspace connections. Those signals remain unmeasured rather than inferred. No Bing URL submission or IndexNow request is made before deployment.
