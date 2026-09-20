# Market Doors Pursuit — native SEO/AEO/GEO research

Date: 2026-09-20  
Route: `/drills/reaction-speed/market-doors-pursuit`  
Scope: one drill, six supported localized markets. No URL submission, Bing indexing request, or IndexNow call was made.

## Page intent

The interaction is a browser FPS visual-search and target-interception drill: the player scans several doorway-like portals, detects a target, and clicks it before the target times out. The page therefore needs to serve both the broad local intent for an aim trainer and the narrower native intent around checking angles, clearing corners, visual scanning, and target switching. It must not claim to reproduce a live game's networking, peeker's advantage, or clinical reaction time.

## Native keyword evidence

| Market | Primary native phrase(s) | Supporting native phrase(s) | Evidence and use |
|---|---|---|---|
| Korea (`ko-KR`) | `에임 트레이너`, `조준 연습` | `각도 확인`, `시야 전환`, `발로란트 에임 트레이너` | Google KR autocomplete surfaced `에임 트레이너 사이트`, `3d 에임 트레이너`, `발로란트 에임 트레이너`, and `배그 에임 트레이너`. Korean pages such as [TALI Games](https://tali.kr/aim-trainer) and [BellRiver](https://bellriver.kr/aim) use `에임 트레이너` for browser aim modes, accuracy, and target tracking. |
| Japan (`ja-JP`) | `エイム練習`, `追いエイム` | `視点移動`, `索敵`, `角クリア` | Google JP autocomplete for `追いエイム` surfaced `追いエイムとは`, `追いエイム 練習`, `追いエイム コツ`, and `追いエイム できない`. The Japanese FPS Aim Research Institute defines `トラッキングエイム（追いエイム）` as keeping the reticle on a moving enemy ([source](https://fpsaim.blog.shinobi.jp/glossary/trackingaim)); Japanese training guidance also discusses slow targets, direction changes, and strafing ([NextGG](https://www.nextgg.jp/fps/aim/step2)). |
| Germany (`de-DE`) | `Aim-Training online`, `Aim-Trainer` | `Winkel prüfen`, `Ecken checken`, `Ziel verfolgen` | German autocomplete for `Aim Training` surfaced `aim training online`, `aim training browser`, `aim training valorant`, and `aim training cs2`. German-language aim-trainer pages use `Tracking`, `Flicks`, and browser score/session language, including [Valorant-Spind](https://www.valorant-spind.de/en/valorant-aim-trainer.html) and [NoRecoil](https://norecoil.de/nr-aim). Copy uses German search terms naturally without pretending that the tactical modifier has a measured search volume. |
| Brazil (`pt-BR`) | `treino de mira`, `treino de tracking` | `checar ângulos`, `limpar cantos`, `troca de alvo` | Google BR autocomplete for `treino de tracking` surfaced `treino de tracking valorant`, `treino de tracking online`, `treino de tracking cs2`, and `treino de mira tracking`. Brazilian tool pages describe `Tracking` as following moving targets with small corrections and expose accuracy/reaction statistics ([Softonic Brasil](https://tools.softonic.com.br/aim-trainer), [Black Eagles](https://www.blackeaglesesports.com.br/ferramentas)). |
| Spain (`es-ES`) | `entrenamiento de puntería` | `limpiar esquinas`, `comprobar ángulos`, `cambio de objetivo`, `seguimiento de objetivos` | The specialist Spanish seed returned no autocomplete suggestions in this run. Broad native copy is therefore anchored to the established Spanish FPS term `entrenamiento de puntería`, with tactical modifiers used descriptively rather than presented as volume facts. |
| France (`fr-FR`) | `entraînement de visée FPS` | `vérifier les angles`, `nettoyer un angle`, `suivi visuel`, `entraînement de visée en ligne` | French aim-trainer SERP language uses `aim trainer`, `tracking`, `suivi`, `sensibilité`, and `score`, as seen on [MyBad Esport](https://mybadesport.fr/aim-trainer/). The page uses native French phrasing around `visée`, `angles`, and `suivi` while retaining the commonly used gaming loanword only where natural. |

## Query and platform limits

- Bing keyword calls were made read-only for country/language pairs `ko-KR`, `ja-JP`, `de-DE`, `pt-BR`, `es-ES`, and `fr-FR`. Each specialist seed returned `no data`; this report does not convert that into a false low-volume number.
- Google Autocomplete supplied useful lexical expansions for Korea, Japan, Germany, and Brazil. Spanish returned zero suggestions for the exact specialist seed; French's exact seed was noisy with unrelated Ciblex results and was not used as evidence.
- Direct Google Trends requests for the localized markets were not accessible through the web connector in this run. Google Search Console read-only queries failed with `invalid_grant: Bad Request`. No demand or ranking claim is based on either unavailable source.
- No English page was translated into a target language. Each locale's title, description, guide, FAQ, and interface strings are authored as native-market copy around the evidence above.

## Implementation decisions

1. Keep the broad local entity first in each title (`에임 트레이너`, `エイム練習`, `Aim-Training`, `treino de mira`, `entrenamiento de puntería`, `entraînement de visée FPS`) and place the doorway/angle modifier second so the title remains readable.
2. Use concise, non-crowded subtitles and visible UI labels; put the deeper semantic coverage in the server-rendered guide, benchmarks, protocol, and 10 native FAQs.
3. Keep the drill mechanics truthful: visual scanning, target detection, click timing, accuracy, combo, and level. Explicitly qualify hardware/browser/network limitations in the guide and FAQ.
4. Generate locale-specific canonical, hreflang, Open Graph, FAQPage, HowTo, SoftwareApplication, WebApplication, VideoGame, and breadcrumb data from one shared builder. `dateModified` is `2026-09-20`.
5. Preserve the existing English fallback (`x-default`) and use the six country routes already present. No IndexNow or Bing URL submission is enabled before deployment.

## Acceptance checks

- Six localized pages plus English compile through the shared page builder.
- Each locale has 4 scientific introduction paragraphs, 5 benchmark rows, 4 protocol steps, and 10 non-duplicated FAQs.
- Visible client UI uses locale copy rather than English fallbacks.
- Metadata descriptions remain within a practical SERP length and subtitles stay short.
- `faqSchema.mainEntity` is generated from the same 10 answers rendered by `DrillGuide`.
- No placeholder FAQ labels, machine-translation artifacts, or indexing requests are introduced.
