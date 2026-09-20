# Agility Ladder — native SEO/AEO/GEO research

Research date: 2026-09-20  
Route family: `/drills/physical/fitness/agility-ladder`  
Markets: English reference, Japan (`ja-JP`), South Korea (`ko-KR`), Germany/DACH (`de-DE`), Brazil (`pt-BR`), Spain/LatAm (`es-ES`), and France (`fr-FR`)

## Search intent and page decision

This drill presents alternating left-right ladder rungs and asks the player to follow a descending step sequence with a pointer. The relevant search intent is agility-ladder/step-ladder training, footwork, quick feet, rhythm, coordination, and motor sequencing. The localized pages use each market's sports vocabulary instead of translating the English page word-for-word.

No English page was machine-translated. The underlying guide remains the same depth, but each title, description, keyword set, and visible subtitle was authored for the target market.

## Native keyword set used

| Market | Primary native terms | Supporting native terms |
| --- | --- | --- |
| English | agility ladder drills; agility ladder exercises; footwork agility drills | bilateral coordination drill; sequential movement training; motor coordination exercises; agility ladder game; agility ladder workout |
| Japan | ラダートレーニング メニュー; アジリティ トレーニング; フットワーク 練習 メニュー | 敏捷性 トレーニング; アジリティ ラダー 練習; 両側性運動協調; ラダー フットワーク; ステップ ワーク 練習 |
| South Korea | 스텝레더 훈련; 민첩성 사다리운동; 풋워크 훈련 | 순발력 민첩성 운동; 스텝레더 운동법; 스피드 레더 훈련; 카운터 스트레이핑; 양측성 운동 협응 |
| Germany/DACH | Koordinationsleiter Übungen; Koordinationsleiter Fußball; Reaktionsleiter Training | Schnelligkeitstraining Übungen; Agility Leiter Training; Motorische Sequenzierung; Beinarbeit Training; Counter Strafing Rhythmus |
| Brazil | treino de escada de agilidade; exercícios na escada de agilidade; treino de footwork e agilidade | escadinha de agilidade exercícios; treino de velocidade e agilidade; coordenação motora e agilidade; treino de sequenciamento motor; velocidade dos pés treino |
| Spain/LatAm | ejercicios de escalera de agilidad; entrenamiento escalera de velocidad; escalera de coordinación ejercicios | ejercicios de footwork y agilidad; rutina escalera de agilidad; entrenamiento de velocidad y coordinación; secuenciación motora bilateral; velocidad de pies ejercicios |
| France | exercices échelle d'agilité; échelle de rythme exercices; échelle de vélocité entraînement | travail des appuis et vivacité; entraînement agilité et vitesse; coordination motrice bilatérale; test de vitesse et vivacité; vitesse des appuis exercice |

These are relevance clusters, not fabricated volume or difficulty claims. GSC and Google Ads competition data were not available, so no specific Google volume, competition score, or number-one ranking is promised.

## Bing demand evidence

The repository's read-only Bing keyword endpoint was checked after confirming quota. Exact-match results were mixed:

| Market | Query or seed | Result | Interpretation |
| --- | --- | ---: | --- |
| Japan | `アジリティ トレーニング` exact | 22/mo | Measurable Japanese agility-training intent; retained as a primary anchor. |
| Japan | Related to `アジリティ`: `アジリティとは` | 358/mo | Broader explanatory intent; useful for AEO context, not the page's primary tool query. |
| Germany | `Koordinationsleiter Übungen` exact | 32/mo | Measurable German ladder-exercise intent; retained as the primary German anchor. |
| Brazil | `treino escada de agilidade` exact | 0/mo | Unmeasured in Bing; retained because native SERP content confirms the phrase. |
| Spain | `ejercicios escalera de agilidad` exact | 0/mo | Unmeasured in Bing; retained because native sports SERPs use the phrase. |
| France | `exercices échelle d'agilité` exact | 0/mo | Unmeasured in Bing; retained because native sports terminology matches the drill. |
| Korea | `스텝레더 훈련` exact | 0/mo | Unmeasured in Bing; native sports vocabulary retained pending Google/GSC validation. |

Zero means Bing returned zero for that exact endpoint request; it does not prove Google demand is zero. The project must not convert these gaps into fabricated “low competition” claims.

## Live SERP signals reviewed

- English: [SoccerManiak's agility ladder guide](https://www.soccermaniak.com/agility-ladder-drills.html) and [Fite Football's interactive ladder drills](https://fitefootball.com/playbook/ladder) reinforce agility-ladder, footwork, left-right landing, and pattern progression language.
- Japan: the Japanese search results were led by native sports/fitness ladder vocabulary; the implementation uses `ラダートレーニング`, `アジリティ`, and `フットワーク` rather than translated “motor sequencing.”
- Germany: [the Lower Saxony sports PDF](https://lsb-niedersachsen.vibss.de/fileadmin/Medienablage/PfP_Fitness/2023-04_Volle_Kraft_durch_die_Koordinationsleiter.pdf) uses `Koordinationsleiter` and `Beinarbeit` terminology for ladder exercises.
- Brazil: [Pista e Campo's Brazilian agility-training article](https://www.pistaecampo.com.br/blogs/artigos/treino-agilidade-escada-cones-arcos-superbands) explicitly connects the agility ladder with foot speed and coordination.
- Spain: [ComaBien's Spanish ladder analysis](https://comabien.es/ejercicio/ejercicios/escalera-agilidad.php) and [Entrenador CAFYD's Spanish guide](https://josemief.com/escalera-de-agilidad-como-entrenar-y-31-ejercicios-videos/) use `escalera de agilidad`, `secuencias de pasos`, coordination, and progression language.
- France: the French SERP was more terminology-led than tool-led in this pass; the page keeps native `échelle d'agilité`, `échelle de rythme`, `travail des appuis`, and `vivacité` language instead of English labels.
- Korea: public results were less specific for the browser implementation; native Korean step-ladder, agility, footwork, and counter-strafing terms were retained rather than falling back to English.

## On-page SEO/AEO/GEO changes

- Reworked each market's title, description, keywords, Open Graph, Twitter copy, and visible drill title/subtitle independently.
- Added/updated `inLanguage` and `dateModified` on SoftwareApplication, WebApplication, VideoGame, FAQPage, and relevant guide schema.
- Preserved canonical URLs and locale alternates.
- Preserved the complete scientific introduction, benchmark table, calibration/training protocol, HowTo data, and ten bespoke FAQ entries per locale.
- Updated the canonical drill route's sitemap freshness override to `2026-09-20`.

## Audit limits and deployment guardrail

Google Trends, GSC, and browser-based incognito captures were unavailable through the current workspace connections. Those signals remain unmeasured rather than inferred. No Bing URL submission or IndexNow request was made; `ENABLE_INDEXNOW=true` remains forbidden until final deployment.
