# Color Sequence / Simon Memory Research — 2026-09-20

## Scope

One drill only: `memory/short-term-memory/color-sequence`, optimized independently for `de-DE`, `es-ES`, `fr-FR`, `ja-JP`, `ko-KR`, and `pt-BR`. This is native search research and transcreation of the drill’s intent, never a word-for-word translation of the English page.

## Evidence and limits

- Bing keyword research was run for one local Simon/color-sequence head term in each market. Bing returned `0` exact and `0` broad volume for all six sampled phrases. This is sparse Bing evidence, not a claim that Google demand is zero.
- Bing related-query output was useful for the French seed only but was dominated by unrelated card-game queries, so it was excluded from keyword decisions. The other related-query calls returned no usable suggestions.
- Native SERP research found interactive browser intent in every market. The recurring task is: watch lights/colors and sounds, then repeat the growing sequence in the same order.
- Google Trends URLs were tested, but the Trends explorer was inaccessible to the available web reader. GSC is not authenticated in this workspace. Chrome/Incognito was unavailable in the Computer Use browser inventory. These limitations are preserved rather than replaced with invented trend or volume numbers.
- No Bing Webmaster submission, IndexNow request, or other search-engine push was performed.

## Native keyword decisions

| Locale | Primary native query cluster | Supporting native intent | Page positioning |
| --- | --- | --- | --- |
| `de-DE` | `Senso Spiel online`, `Senso online kostenlos` | `Farbsequenz-Spiel`, `Farbenfolge merken`, `visuelles Arbeitsgedächtnis`, `Simon Spiel online` | Free Senso/Simon-style browser game for repeating a growing color-and-sound sequence. |
| `es-ES` | `juego Simón`, `Simón online` | `memoria de colores`, `secuencia de colores`, `juego de memoria online`, `memoria visual y auditiva` | Online Simón game with exact-order sequence recall and no download. |
| `fr-FR` | `jeu Simon en ligne`, `jeu de mémoire de couleurs` | `suite de couleurs`, `jeu de séquences`, `mémoire visuelle`, `mémoire auditive` | Browser Simon memory game focused on growing color sequences. |
| `ja-JP` | `サイモンゲーム`, `色と順番の記憶` | `色順番記憶`, `記憶力ゲーム`, `視覚ワーキングメモリ`, `色の順番ゲーム` | Native Japanese color-order memory game with visual/audio sequence recall. |
| `ko-KR` | `색깔 순서 기억`, `색깔 기억력 게임` | `순서 기억 게임`, `기억력 게임`, `색상 순서 기억`, `시각 작업기억` | Korean color-sequence memory training; `사이먼 게임` retained as a secondary branded term because SERP intent is noisy. |
| `pt-BR` | `jogo Simon`, `jogo de sequência de cores` | `memória de cores`, `sequência de cores`, `jogo de memória online`, `Genius jogo` | Brazilian Portuguese Simon/Genius-style browser memory game. |

## Native SERP observations

- German: [Senso online](https://www.senso-game.net/) explicitly uses `Senso online und kostenlos`; [German Wikipedia’s Senso entry](https://de.wikipedia.org/wiki/Senso_%28Spiel%29) describes repeating alternating lights, tones, and their order. A separate German browser result uses `Simon online spielen` and `Farbsequenz-Spiel`.
- Spanish: [Leo Games’ native memory game](https://leogames.es/j/simon.html) uses `Repite la secuencia de colores`; [Pibono’s Simón page](https://www.pibono.com/es/simon.html) describes a growing sequence of colors and tones; [Spanish Wikipedia’s Simon entry](https://es.wikipedia.org/wiki/Simon_%28juego%29) confirms visual-and-sound sequence recall.
- French: [GameMaster’s French Simon page](https://gamemaster.fr/jeux/simon/) emphasizes color memory, working memory, auditory memory, and same-order clicking; [French Wikipedia’s Simon entry](https://fr.wikipedia.org/wiki/Simon_%28jeu%29) describes the light-and-tone sequence mechanic.
- Japanese: the live search surfaced the native `サイモンゲーム` / color-and-order intent, while current page wording already uses `サイモンゲーム`; the keyword set therefore emphasizes `色と順番の記憶` and `視覚ワーキングメモリ` rather than an English-translated phrase.
- Korean: general `사이먼 게임` results were noisy, while Korean cognitive-training results consistently used `기억력 훈련`, `시각 작업기억`, and `순서 기억`; these become the primary intent terms and the branded Simon phrase stays secondary.
- Portuguese/Brazil: [Pibono’s Brazilian Portuguese Simon page](https://www.pibono.com/pt-br/simon.html) uses `jogo de memória`, `sequência de cores`, and lights/tones; [PlayMemorize Portuguese](https://www.memorisepi.com/color/pt) uses `Memória de Cores`; Brazil-specific results also surface `Genius` as the local Simon-family name.

## 14-step audit summary

1. Representative live localized SERP URLs and snippets were captured above; a full browser Top-10 capture was unavailable because no Chrome/Incognito surface was exposed.
2. Intent is overwhelmingly interactive tool/game, with secondary explanatory intent.
3. Competitors are lightweight browser games; the opportunity is a faster, accessible tool plus deeper methodology.
4. Native-language pages were prioritized; machine-translated pages were excluded.
5. The strongest local title patterns front-load `Senso`, `Simón`, `Simon`, `サイモン`, or native color-sequence language.
6. Backlink/domain metrics were not available from the permitted live tools; no authority claim is made.
7. Common gaps are limited accessibility, missing benchmark context, shallow FAQs, and no transparent browser-timing methodology.
8. Local question intent centers on how to play, what the game measures, and how to remember longer sequences.
9. Long-tail modifiers are `online`, `kostenlos/gratis`, `en ligne`, `無料`, `온라인`, `online grátis`, plus memory/color/sequence terms.
10. SkillDrills differentiates with a full guide, benchmark table, training protocol, FAQ schema, and browser measurement transparency.
11. Difficulty is treated as moderate for generic game terms and more winnable for localized color-memory/working-memory long tails; no unsupported #1 claim is made.
12. Bing exact/broad sample: `0/0` for each six-market head term; Google-specific volume remains unverified.
13. Keyword clusters are listed above by locale and are used without direct English translation.
14. Ranking probability is improved through intent alignment and depth, but cannot be guaranteed before live GSC/Trends data and post-deployment SERP measurement.

## Implementation gate

- Preserve the existing full guide, benchmark table, scientific references, training/calibration protocol, and 10 bespoke FAQs.
- Update only the localized SEO/AEO/GEO layer: title, description, keywords, Open Graph/Twitter copy, H1, compact subtitle, start-card subtitle, schema entity links, and any remaining root internal links.
- Keep canonical, hreflang, SSR guide content, and no-index-push safeguards intact.
- Verify metadata character limits, six syntax checks, one benchmark object, 10 FAQ questions, same-language links, sameAs schema, route HTTP 200, and production-build status.
