# Visual Tracking Speed Test — native SEO/AEO/GEO research

Date: 2026-09-20  
Route: `/drills/reaction-speed/visual-tracking-speed-test`  
Scope: one drill and six localized markets. No IndexNow, Bing submission, or deployment push was performed.

## Search intent and drill fit

This drill shows moving targets, changes their speed and trajectory, and asks the player to intercept them with pointer input. The strongest intent is a free browser visual-tracking / moving-target reaction game for gamers, athletes, and eye-hand practice. It is not a clinical eye examination and does not claim to diagnose dynamic visual acuity or neurological problems.

## Native market keyword decisions

| Market | Primary native cluster | Supporting / long-tail cluster | Decision and SERP evidence |
|---|---|---|---|
| Korea (`ko-KR`) | `동체시력 테스트`, `동체시력 훈련` | `시각 추적`, `움직이는 표적`, `반응속도 테스트`, `주변시 훈련` | [Cantong](https://cantong.app/apps/dva/) describes `동체시력` through target-following, refocusing, and visual processing. [Eyetrack](https://eyetrack.co.kr/) uses `동체시력` for a browser game with speed, multiple targets, and peripheral awareness. [Gaming Skill Test Korea](https://gamingskilltest.com/ko) exposes `시각 추적` as a dedicated training intent. The page leads with `동체시력 테스트` and explains the moving-target mechanic in Korean. |
| Japan (`ja-JP`) | `動体視力 テスト`, `動体視力 トレーニング` | `視覚追跡`, `動くターゲット`, `反射神経ゲーム`, `眼と手の協調` | [MIKIRI](https://mikiri.app/) uses `動体視力` and browser games for FOLLOW/INTERCEPT-style target tasks. [Google Play’s 動体視力測定器](https://play.google.com/store/apps/details?hl=ja&id=jp.infinitysoftware.kineticvision) combines `動体視力`, `反射神経`, and training games. [Apple Japan’s 反射神経テスト](https://apps.apple.com/jp/app/%E5%8F%8D%E5%B0%84%E7%A5%9E%E7%B5%8C%E3%83%86%E3%82%B9%E3%83%88-%E9%80%A3%E6%89%93%E3%83%BB%E5%8B%95%E4%BD%93%E8%A6%96%E5%8A%9B%E3%83%BB%E5%8F%8D%E5%BF%9C%E9%80%9F%E5%BA%A6%E3%82%92%E3%83%9F%E3%83%AA%E7%A7%92%E6%B8%AC%E5%AE%9A/id6761295348) confirms the combined reflex, dynamic-vision, and millisecond-training vocabulary. |
| Germany (`de-DE`) | `Zielverfolgung`, `Zielverfolgung testen` | `visuelles Tracking`, `bewegliche Ziele`, `Aim Tracking`, `Hand-Auge-Koordination` | [ToolNova](https://www.toolnova.org/de/diagnostics-tools/aim-trainer) differentiates tracking of moving targets from flicking and reports time-on-target style metrics. [ReflexBench](https://reflexbench.com/de/) uses `Mehrfach-Objekt-Tracking` and moving-target practice. [ReactionTest Germany](https://reactiontest.net/de/) shows that `Reaktionszeit`, target mode, and browser measurement are familiar adjacent intents. The page uses `Zielverfolgung` and `bewegliche Ziele` instead of forcing an English phrase. |
| Brazil (`pt-BR`) | `teste de rastreamento visual`, `treino de tracking` | `alvo em movimento`, `rastreamento de alvo`, `treino de mira`, `coordenação olho-mão` | Brazilian gaming vocabulary commonly retains `tracking` alongside `mira`; the page pairs it with native `alvo em movimento` and `coordenação olho-mão`. [Reaction Time Test PT](https://reactiontimetest.me/pt) confirms the browser-test and device-latency intent, while [FoveaFlow](https://foveaflow.com/) demonstrates the adjacent free-browser visual-tracking / eye-training format. No Portuguese search-volume number is claimed. |
| Spain (`es-ES`) | `test de seguimiento visual`, `seguimiento de objetivos` | `tracking de objetivos`, `objetivo en movimiento`, `entrenamiento de puntería`, `coordinación ojo-mano` | [Gaming Skill Test Spanish visual tracking](https://gamingskilltest.com/es/games/visual-tracking) explicitly uses `seguimiento visual` and multiple moving targets. [MIKIRI FOLLOW Spanish](https://mikiri.app/es/games/follow) uses sustained eye-following language and browser play. The page leads with `test de seguimiento visual`, then uses `objetivo en movimiento` to clarify the interactive task. |
| France (`fr-FR`) | `test de suivi visuel`, `suivi de cible` | `tracking de cible`, `cible en mouvement`, `entraînement de visée`, `coordination œil-main` | [Gaming Skill Test France](https://gamingskilltest.com/fr/games/visual-tracking) uses `test de suivi visuel` and moving-target practice. [GameTan](https://gametan.ai/fr/tests/aim-trainer) distinguishes continuous target tracking from discrete clicks and explains eye-hand feedback. [ReflexBench France](https://reflexbench.com/fr/assessments/aim-tracking/) uses `Aim Tracking` and time-on-target language. The page leads with native `suivi visuel` and adds gamer `tracking` only as supporting vocabulary. |

## SERP / feature gap findings

- Ranking tools generally put the interactive test above the explanatory text. The implementation keeps the playable canvas prominent while exposing a server-rendered H1, guide, benchmarks, protocols, and FAQs.
- Competitors often measure either continuous time-on-target or a moving-target click reaction. This drill is explicit about its own task: moving targets, acceleration, trajectory changes, hit accuracy, timeout, combo, and browser timing.
- A useful gap is honest methodology. The page will explain that refresh rate, frame scheduling, pointer hardware, display latency, target radius, and scoring rules affect the result.
- A useful AEO gap is the distinction between smooth pursuit, catch-up saccades, visual search, and pointer interception. The guide and FAQ answers define each plainly without presenting this game as a medical test.
- The page will not claim that practice guarantees better eyesight, faster neural reflexes, or esports rank.

## Data limitations

- The local Bing keyword client was attempted for all six country/language pairs and was blocked by Windows socket policy (`WinError 10013`) before returning volume rows. No Bing volume number is claimed.
- Google Trends query pages were not accessible through the web retrieval tool in this run. Google’s own documentation confirms that Trends is the correct place to compare regional interest, but no trend index is fabricated.
- Search Console access was not available in this run. Native live SERP pages were used for wording, intent, and competitor feature review, not as search-volume evidence.
- Autocomplete suggestions are not treated as monthly volume, and no numeric low-competition or #1-ranking probability is asserted.
- Every locale will receive independently authored UI, metadata, guide, and FAQ copy. No English page will be translated into a target language.

## Implementation decisions

1. Lead each market with its native dynamic-vision / target-following entity: `동체시력 테스트`, `動体視力 テスト`, `Zielverfolgung`, `teste de rastreamento visual`, `test de seguimiento visual`, and `test de suivi visuel`.
2. Keep subtitles short and readable; use the moving-target modifier in the subtitle and the deeper semantic cluster in guide headings, protocols, and FAQs.
3. Preserve the actual mechanics and score limits rather than writing generic eye-training claims.
4. Use locale-specific title, description, keywords, Open Graph copy, breadcrumbs, FAQPage, HowTo, SoftwareApplication, WebApplication, and VideoGame schema.
5. Keep `sameAs` references limited to relevant authoritative entities and avoid medical-claim markup.

## Acceptance checks

- English fallback and all six locale routes use native copy and the corrected client UI.
- Each locale contains 4 intro paragraphs, 5 benchmark rows, 4 protocols, and 10 original FAQs.
- Visible FAQ content and FAQ schema are generated from the same answers.
- Metadata descriptions remain below 155 characters and subtitles remain readable.
- Localized canonical URLs, alternate-language links, and x-default are preserved.
- No IndexNow or Bing submission is enabled before deployment.
