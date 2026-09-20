# Physical training category hub research — 2026-09-20

Scope: `/drills/physical` and the six existing locale hubs (`ja`, `ko`, `de`, `pt-BR`, `es`, `fr`). This is one category-hub run; no drill pages were generated or submitted.

## Evidence and limitations

- Bing Webmaster keyword lookups were run read-only for three native seed phrases per market. The API resolved the markets correctly (`ja-JP`, `ko-KR`, `de-DE`, `pt-BR`, `es-ES`, `fr-FR`) but returned **no data** for all 18 exact-match seeds. This is not evidence of zero Google demand and is not reported as Google volume.
- Google Search Console and Google Keyword Planner credentials were not available in this workspace, so no Google monthly-volume claim is made.
- Google Trends and an incognito Google SERP capture were not available through the repository tooling in this run. The SERP observations below are qualitative native-language source signals, not volume or ranking guarantees.
- No IndexNow/Bing URL submission was made. `ENABLE_INDEXNOW` remains disabled.

## Native market clusters

| Market | Primary native cluster | Supporting native intent | SERP / ecosystem signal |
|---|---|---|---|
| Japan (`ja-JP`) | `反応速度テスト`, `反射神経`, `反応時間` | `敏捷性トレーニング`, `手と目の協調`, browser test intent | Japanese reaction-test pages and Japanese sports/reflex terminology use these concepts; see [reactiontimetest.me/ja](https://reactiontimetest.me/ja), [reactiontimetest.net/ja](https://reactiontimetest.net/ja), and [zyougi.com/reaction](https://zyougi.com/reaction/). |
| Korea (`ko-KR`) | `반응속도 테스트`, `순발력`, `민첩성` | `방향전환`, `균형감각`, `손눈협응` | Korean sports-performance material consistently frames the category around 순발력, 민첩성, direction change, balance, and rhythm response; see [KSAF material](https://www.ksaf.org/common/download/?id=4395&pos=article) and [KACEP material](https://kacep.or.kr/data2/files/ka-7a-3-13.pdf?PHPSESSID=08b940f46e9343c00dc675733f073146). |
| Germany (`de-DE`) | `Reaktionstest online`, `Koordinationstraining`, `Gleichgewichtstraining` | `Fußarbeit`, `Hand-Auge-Koordination`, `Ausweichspiel` | German sports-performance terminology uses Reaktion, Koordination, Gleichgewicht, and change-of-direction training; see [DFB Akademie](https://www.dfb-akademie.de/individuelle-analyse/-/id-11009665) and [NEKU balance/reaction training](https://www.heimerer.de/seminar/neku-gleichgewicht-und-reaktionstraining-online/). |
| Brazil (`pt-BR`) | `teste de reflexo`, `tempo de reação`, `treino de agilidade` | `coordenação motora`, `coordenação olho-mão`, `jogo de esquiva` | Brazilian Portuguese tool and performance pages use reflex test, reaction time, eye-hand coordination, and agility training language; see [Reflexa](https://apps.apple.com/br/app/reflexa-teste-reflexo-rea%C3%A7%C3%A3o/id6772612739), [ReflexBench PT](https://reflexbench.com/pt/assessments/wasd-trainer/), and [SciELO](https://www.scielo.br/j/motriz/a/gWKMYnP6hgqPKcftzS8Z7SS/?lang=pt). |
| Spain (`es-ES`) | `juego de reflejos`, `test de reacción`, `entrenamiento de agilidad` | `coordinación motriz`, `equilibrio`, `juego de esquivar` | Native Spanish game and movement sources use reflejos, tiempo de reacción, agilidad, coordinación, and evasión; see [Reflex Rivals](https://reflexrivals.com/es/index.html), [INTEF Movimiento inteligente](https://descargas.intef.es/recursos_educativos/RED_ES/03_Eso/3/S_3_028_2025_0614/movimiento_inteligente.html), and [Maníaco Digital](https://maniacodigital.es/juegos/juegos-de-habilidad/ataja-los-clics-online-test-de-reflejos-y-precision/). |
| France (`fr-FR`) | `test de réflexes`, `temps de réaction`, `entraînement agilité` | `coordination motrice`, `équilibre`, `jeu d'esquive` | French reaction and motor-performance sources use temps de réaction, réflexes, agilité, coordination motrice, and esquive; see [ReflexBench FR](https://reflexbench.com/fr/), [INSEP](https://www.insep.fr/sites/default/files/media/downloads/R%C3%A9flexions%20Sport%20%2322%20-%20light.pdf), and [Académie de Lyon coordination material](https://eps.enseigne.ac-lyon.fr/spip/IMG/pdf/test_2_diaporama_dribble_et_cible__coordination_prei_cision.pdf). |

## 14-step implementation audit

1. Candidate queries: the native clusters above were tested, not English translations.
2. Intent: interactive test, training drill, and sports-performance discovery.
3. Format: the hub keeps the playable drill carousel above the domain cards.
4. Localization: hub metadata and visible hub copy are authored natively per locale.
5. Title/H1: primary native intent is front-loaded; English remains the x-default.
6. Authority: no backlink or domain-rating estimates are claimed without a tool.
7. Feature gap: the hub exposes 11 drills grouped by reflex, fitness, coordination, and balance.
8. PAA: existing localized FAQ schema is retained and expanded with two direct hub questions.
9. Long-tail: browser, free, coordination, balance, footwork, and evasion modifiers are included where natural.
10. Feature matrix: collection schema lists every drill and each card links to its same-locale route.
11. Difficulty: no fabricated “easy #1” or competition score is asserted.
12. Volume: Bing exact-match result is recorded as no data; Google volume remains unverified.
13. Keyword clusters: metadata uses the native primary and supporting terms above.
14. Ranking probability: qualitative only; page quality is improved, but #1 cannot be guaranteed without measured Google demand and SERP authority data.

## Verification targets

- One self-referencing canonical plus the complete locale/x-default hreflang matrix.
- Native title, description, keywords, visible H1, hub headings, category labels, and CTA for all seven routes.
- `CollectionPage` and `FAQPage` JSON-LD with `inLanguage`, `dateModified`, localized drill parts, and 10 non-placeholder questions.
- Lint the shared client and all seven category route files after editing.
