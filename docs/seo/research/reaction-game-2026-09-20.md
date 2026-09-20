# Reaction Game — native SEO/AEO/GEO research

Date: 2026-09-20  
Route: `/drills/reaction-speed/reaction-game`  
Scope: one drill, six supported localized markets. No IndexNow, Bing URL submission, or deployment push was performed.

## Search intent and product fit

The drill is a falling-target interception game. A player watches multiple vertical lanes, clicks targets before they reach the lower boundary, and receives score, accuracy, reaction, combo, and level feedback. The strongest search intent is a free browser reaction/reflex game or reaction-time practice tool, not a clinical test. The page must explain that screen refresh, browser scheduling, pointer input, and target motion affect the result.

## Native keyword evidence

| Market | Primary native terms | Supporting terms | Live SERP evidence and implementation use |
|---|---|---|---|
| Korea (`ko-KR`) | `반응 속도 테스트`, `반사 신경 테스트` | `반응 게임`, `리액션 테스트`, `순발력 테스트` | Korean-language search intent is centered on reaction speed and reflex measurement rather than a direct English “reaction game” phrase. Use `반응 속도 테스트` in the title/description and `반사 신경 테스트` in guide/FAQ copy. Search-tool autocomplete calls returned no suggestions in this environment and are recorded as unavailable, not as zero demand. |
| Japan (`ja-JP`) | `反応速度テスト`, `反射神経テスト` | `反応ゲーム`, `動体視力`, `反応速度 測定` | Japanese SERPs include [Hen-game's flying reflex test](https://www.hen-game.com/games/reaction-test/), which uses `反射神経テスト`, repeated attempts, average results, and browser play. [Luft's reflex test](https://www.luft.co.jp/cgi/reflex-test.php) uses `反応速度` and `反射神経` with multiple modes and local best records. The page uses those native entities and distinguishes this moving-target game from a single color-change timer. |
| Germany (`de-DE`) | `Reaktionstest`, `Reaktionszeit testen` | `Reaktionsspiel`, `Reflexe testen`, `Reaktionstest online` | German SERPs use `Reaktionstest` and `Reaktionszeit` for browser tools. [DropPlay](https://www.dropplay.games/de/reaction) describes a browser `Reaktionstest` with millisecond output, while [ReactionTest.org DE](https://reactiontest.org/de/) discusses browser timing and setup effects. Use `Reaktionstest` first and `Reaktionsspiel` as the game modifier. |
| Brazil (`pt-BR`) | `teste de reflexo`, `tempo de reação` | `jogo de reflexos`, `teste de reação online`, `treino de reação` | Native Brazilian intent uses `reflexo`, `tempo de reação`, and `jogo`. Portuguese search results and reference language distinguish reaction time as the interval from stimulus to motor response ([Portuguese Wikipedia](https://pt.wikipedia.org/wiki/Tempo_de_rea%C3%A7%C3%A3o)); gaming discussions also connect setup latency and reaction results. Use natural Brazilian Portuguese rather than translating “reaction game” literally. |
| Spain (`es-ES`) | `test de reacción`, `tiempo de reacción` | `test de reflejos`, `juegos de reflejos`, `juego de reacción` | Spanish SERPs use `test de reacción` and `tiempo de reacción`. [IObit España](https://www.iobit.com/es/test-de-reaccion.php) positions an online reaction test for players and athletes, while [ZeroPlay](https://zeroplaygames.com/es/reaction-games) uses `juegos de reflejos y reacción gratis online` and browser-play intent. The page targets the broad native term, then explains its falling-target game mechanic. |
| France (`fr-FR`) | `test de réaction`, `temps de réaction` | `test de réflexes`, `jeu de réflexes`, `réaction en ligne` | French SERPs use `test de réaction` and `temps de réaction`. [GameMaster France](https://gamemaster.fr/jeux/test-reaction/) uses repeated trials and browser play, while [Gottrix](https://gottrix.app/fr/test-de-reaction) discusses high-resolution browser timestamps and device effects. Use `test de réaction` first while clearly describing the game as moving-target practice rather than a clinical test. |

## Tool limitations and data integrity

- The local Bing API client was attempted for all six country/language pairs. It failed with Windows `WinError 10013` socket-permission errors before returning volume data. This report therefore contains no fabricated Bing volume numbers.
- The local Google Autocomplete calls returned `0 suggestions` for the tested seeds in this run; because the same endpoint was unavailable across unrelated languages, this is recorded as a tool limitation rather than proof of zero demand.
- Google Trends and Search Console remain read-only research dependencies; no indexing or URL submission was attempted. Existing Search Console authentication has previously returned `invalid_grant`.
- Native web SERPs were used to validate wording and intent. Autocomplete is not treated as monthly search volume, and no “#1 guaranteed” or “zero competition” claim is made.
- No English copy is translated into another language. Each locale's page copy, FAQ, UI, metadata, and headings will be authored independently around its native terms.

## Implementation decisions

1. Front-load the broad native entity: `반응 속도 테스트`, `反応速度テスト`, `Reaktionstest`, `teste de reflexo`, `test de reacción`, and `test de réaction`.
2. Add the game modifier in a short subtitle so titles stay readable and do not become keyword strings.
3. Describe the actual utility: falling-target interception, visual tracking, timing, accuracy, combo, and adaptive speed. Do not promise medical improvement or universal human percentiles.
4. Explain measurement limits in the intro and FAQs: browser `performance.now()`, display refresh, input device, frame timing, and target trajectory all affect results.
5. Generate localized metadata, canonical/hreflang, BreadcrumbList, FAQPage, HowTo, SoftwareApplication, WebApplication, and VideoGame schemas from one shared builder.

## Acceptance checks

- English fallback plus six locale routes use the same corrected drill client with native UI strings.
- Every locale contains 4 scientific/measurement intro paragraphs, 5 benchmark rows, 4 training protocol steps, and 10 original FAQs.
- FAQ schema and visible `DrillGuide` answers come from the same locale data.
- Metadata descriptions remain below 155 characters and subtitles stay compact.
- No IndexNow or Bing submission is enabled before deployment.
