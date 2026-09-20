# Reflex Training Drill — native SEO/AEO/GEO research

Date: 2026-09-20  
Route: `/drills/reaction-speed/reflex-training-drill`  
Scope: one drill and six localized markets. No IndexNow, Bing submission, or deployment push was performed.

## Search intent and drill fit

This drill presents several targets at once, asks the player to clear a burst before targets expire, and increases concurrent-target pressure with level and combo. The best-fit intent is a free browser reflex game / reaction-speed practice tool with a multi-target or divided-attention modifier. Copy describes visual search, target prioritisation, click timing, accuracy, and task limits without promising clinical improvement.

## Native market evidence

| Market | Primary native terms | Supporting terms | SERP evidence and use |
|---|---|---|---|
| Korea (`ko-KR`) | `순발력 테스트`, `반응속도 게임` | `반사신경 테스트`, `다중 표적`, `시각 탐색` | Korean copy leads with `순발력 테스트` and explains the multi-target mechanic natively rather than translating an English title. |
| Japan (`ja-JP`) | `反射神経テスト`, `反応速度テスト` | `動体視力`, `複数ターゲット`, `視野`, `集中力` | [Q-Fit](https://qfitlab.com/ja/game/reflex_test/) uses `反射神経テスト` for visual-stimulus response practice. [MIKIRI](https://mikiri.app/) groups `動体視力` and `反射神経` browser games with target-following/interception mechanics. |
| Germany (`de-DE`) | `Reaktionstest`, `Reflexe testen` | `Reaktionsspiel`, `Reaktionszeit`, `mehrere Ziele`, `Hand-Auge-Koordination` | [Sprachnudel](https://www.sprachnudel.de/spiele/geschicklichkeitsspiele-reaktionsspiele/reaktionstest) uses `Reaktionstest`, `Reflexe`, gaming/sport modes, and hand-eye precision language. [ReflexStats](https://reflexstats.com/de/) uses browser reaction and target games. |
| Brazil (`pt-BR`) | `teste de reflexo`, `jogo de reflexos` | `tempo de reação`, `múltiplos alvos`, `atenção dividida`, `treino de reação` | Brazilian Portuguese copy leads with `reflexo` and `tempo de reação`, then explains the multi-target burst. No unsupported volume claim is made. |
| Spain (`es-ES`) | `test de reflejos`, `juego de reflejos` | `tiempo de reacción`, `objetivos múltiples`, `atención dividida`, `entrenamiento de reacción` | Spanish copy leads with the native reflex-test/game cluster and adds the burst/parallel-target mechanic as the differentiator. |
| France (`fr-FR`) | `test de réflexes`, `jeu de réflexes` | `temps de réaction`, `cibles multiples`, `attention divisée`, `entraînement de réaction` | French copy leads with the native reflex-test/game cluster and adds `cibles multiples` and `attention divisée` as the distinctive intent. |

## Data limitations

- The local Bing keyword client was attempted for all six country/language pairs but was blocked by Windows socket policy (`WinError 10013`) before returning volume rows. No Bing volume number is claimed.
- The local autocomplete endpoint returned no suggestions for the tested seeds in this environment. That is recorded as a tool limitation, not evidence of zero demand.
- Google Trends and Search Console were unavailable for reliable live validation in this run. No monthly volume, competition score, or ranking probability is fabricated.
- Native web SERPs were used for wording and intent. Autocomplete is not treated as search volume, and the page makes no guaranteed #1 claim.
- Each locale receives independently authored UI, metadata, guide, and FAQ copy. No English page is translated into a target language.

## Implementation decisions

1. Front-load the native broad entity: `순발력 테스트`, `反射神経テスト`, `Reaktionstest`, `teste de reflexo`, `test de reflejos`, and `test de réflexes`.
2. Keep subtitles short with a multi-target/divided-attention modifier; place the deeper semantic cluster in the guide and FAQs.
3. Preserve the game model: concurrent targets, expiration, combo, level scaling, optional penalty, accuracy, and reaction telemetry.
4. Explain why multi-target response is not the same as a simple reaction-time measurement: visual search, prioritisation, target selection, and motor execution add task demands.
5. Generate locale-specific metadata and BreadcrumbList, FAQPage, HowTo, SoftwareApplication, WebApplication, and VideoGame schema through one shared builder.

## Acceptance checks

- English fallback and all six locale routes use native copy and the corrected client UI.
- Each locale contains 4 intro paragraphs, 5 benchmark rows, 4 protocol steps, and 10 original FAQs.
- Visible FAQ content and FAQ schema are generated from the same answers.
- Metadata descriptions remain below 155 characters and subtitles remain readable.
- No IndexNow or Bing submission is enabled before deployment.
