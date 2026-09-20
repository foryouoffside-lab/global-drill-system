# Visual-tracking category SEO/AEO/GEO research — 2026-09-20

## Scope

This audit covers `/drills/visual-tracking` and the `ko`, `ja`, `de`, `pt`, `es`, and `fr` country-language routes. The registry contains 15 visual-tracking drills covering smooth pursuit, erratic motion, predictive pursuit, split attention, peripheral cues, and path changes.

The page is a browser practice selector. It does not record eye position, measure clinical visual acuity, diagnose a condition, or provide vision therapy. No ranking position, search volume, or low-competition status is guaranteed without first-party regional data. No Bing submission or IndexNow request was made.

## Native query clusters

### Korea — `ko-KR`

`동체시력 훈련`, `동체시력 테스트`, `시각 추적 훈련`, `안구 운동 훈련`, `움직이는 표적 추적`, `주변시 훈련`, `시선 추적 훈련`, `스포츠 비전 훈련`, `FPS 트래킹 연습`, `궤적 예측 훈련`.

Korean results and research language use `동체시력`, `안구운동`, `주변시`, and `비전 트레이닝`; the hub leads with those native concepts instead of translating “smooth pursuit” word-for-word.

### Japan — `ja-JP`

`動体視力 トレーニング`, `動体視力 テスト`, `視覚追跡 トレーニング`, `眼球運動 トレーニング`, `動く標的 追跡`, `周辺視 トレーニング`, `視線追従`, `スポーツビジョン`, `予測追跡`, `無料 ビジョントレーニング`.

Japanese sources use `動体視力`, `眼球運動`, `周辺視`, `瞬間視`, and `ビジョントレーニング` as distinct visual-performance intents. The page keeps those terms separate so the selector is understandable to native users.

### Germany — `de-DE`

`visuelles Training`, `visuelles Tracking`, `Augenbewegung Training`, `bewegte Ziele verfolgen`, `dynamische Sehschärfe`, `peripheres Sehen trainieren`, `Blickfolge`, `Sportvision Training`, `Zielverfolgung`, `Sehübungen online`.

German results use `visuelles Training`, `Blickfolge`, `Sakkaden`, `bewegte Ziele`, and `dynamische Sehschärfe`. The copy avoids promising improved eyesight and explains that browser scores are task results.

### Brazil — `pt-BR`

`treino visual`, `rastreamento visual`, `perseguição ocular`, `visão dinâmica`, `seguir alvos móveis`, `treino de visão periférica`, `exercícios oculomotores`, `treino de visão esportiva`, `previsão de trajetória`, `teste de rastreamento visual`, `treino visual online grátis`.

Brazilian Portuguese uses `treino`, `rastreamento`, `visão periférica`, and `alvos móveis` naturally. The hub uses those phrases without importing the English “eye-tracking training” construction.

### Spain / Spanish market — `es-ES`

`entrenamiento visual`, `seguimiento visual`, `seguimiento ocular`, `visión dinámica`, `seguir objetivos móviles`, `entrenamiento de visión periférica`, `movimientos oculares`, `entrenamiento visual deportivo`, `predicción de trayectoria`, `test de seguimiento visual`, `ejercicios visuales online`.

Spanish sources distinguish `seguimiento ocular`, `visión dinámica`, `visión periférica`, and `coordinación ojo-mano`. The hub uses the task-specific terms and does not claim that a game cures a visual condition.

### France — `fr-FR`

`entraînement visuel`, `suivi visuel`, `poursuite oculaire`, `vision dynamique`, `suivre des cibles mobiles`, `entraînement de la vision périphérique`, `mouvements oculaires`, `vision sportive`, `prédiction de trajectoire`, `test de suivi visuel`, `exercices visuels en ligne`.

French results use `suivi visuel`, `poursuite visuelle`, `vision dynamique`, `vision périphérique`, and `entraînement visuel`. Those terms are used in the title, description, and FAQ additions according to their native intent.

## Live research references

- Japan: [KAKEN dynamic visual acuity research](https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-23K10668/), [Arrowz Eye](https://arrowzeye.jp/member/)
- Germany: [DynamicEye](https://dynamic-eye.de/), [GazeQuest](https://alexander-neugebauer.github.io/gazequest.html), [Optik Hecht Blickfolgen](https://optik-hecht.de/seh-portal/sehtraining-visual-training-uebungen/blickfolgen-sakkaden-lesefluss-und-aufmerksamkeit-verbessern/)
- Brazil: [SciELO peripheral vision and moving targets](https://new.scielo.br/j/motriz/a/YzH6VXd3G7HmPWxbxmXHcsM/?ilang=pt_BR&lang=pt)
- Spain: [MIKIRI dynamic vision guide](https://mikiri.app/es/guide/dynamic-vision), [MOT visual-attention training](https://www.adhdfocuspro.com/es/modules/mot)
- France: [GamingSkillTest visual tracking](https://gamingskilltest.com/fr/games/visual-tracking), [EyeMotion sport vision](https://eye-motion.fr/fr/sport/), [Poursuite visuelle reference](https://fr.wikipedia.org/wiki/Poursuite_visuelle)

Google Trends follow-up seeds:

- KR: `https://trends.google.com/trends/explore?geo=KR&q=%EB%8F%99%EC%B2%B4%EC%8B%9C%EB%A0%A5%20%ED%9B%88%EB%A0%A8`
- JP: `https://trends.google.com/trends/explore?geo=JP&q=%E5%8B%95%E4%BD%93%E8%A6%96%E5%8A%9B%20%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0`
- DE: `https://trends.google.com/trends/explore?geo=DE&q=visuelles%20Training`
- BR: `https://trends.google.com/trends/explore?geo=BR&q=rastreamento%20visual`
- ES: `https://trends.google.com/trends/explore?geo=ES&q=seguimiento%20visual`
- FR: `https://trends.google.com/trends/explore?geo=FR&q=suivi%20visuel`

## Implementation checklist

- Use native page titles, descriptions, keywords, visible H1s, and FAQs for each locale.
- Keep all 15 drill links crawlable in the selector and `CollectionPage` `hasPart` data.
- Keep reciprocal `hreflang` alternates with English `x-default`.
- Add `inLanguage` and `dateModified` to collection and FAQ schema.
- Keep AEO answers factual about task mechanics, browser limits, comfort, and non-diagnostic scope.
- Keep GEO signals aligned: organization identity, canonical URL, category entities, and localized breadcrumb names.
- Validate against the 30-point global page audit before deployment.
