# Word Recall / Verbal Memory Research — 2026-09-20

## Scope

One drill only: `memory/short-term-memory/word-recall`, optimized independently for `de-DE`, `es-ES`, `fr-FR`, `ja-JP`, `ko-KR`, and `pt-BR`. This is native-market search research and intent adaptation, never a word-for-word translation of the English page.

## Live evidence and limits

- Native SERPs consistently show an interactive verbal-memory intent: study a list of words, recall or recognize them, and understand free recall, serial-position, semantic encoding, or verbal working memory.
- German results use `verbaler Gedächtnistest`, `Wortlisten`, `Wörter merken`, and `freier Abruf`; current examples include [Arealme’s verbal memory test](https://www.arealme.com/verbal-memory-test/de/), [LMU’s VLMT documentation](https://psytest.psy.med.uni-muenchen.de/tdb2online/dokumentation%3Averbaler_lern-_und_merkfaehigkeitstest), and [Testzentrale’s verbal memory test](https://www.testzentrale.de/shop/verbaler-gedaechtnistest.html).
- Spanish results use `test de memoria verbal`, `memoria de palabras`, `recuerdo libre`, and `retención de palabras`; the live Spanish word-memory result [WordMemoryTest](https://wordmemorytest.com/DISCUSSIONS/Spanish_oral_WMT_copyright_Paul_Green_1995.pdf) and Spanish memory terminology were used for the cluster.
- French results use `mémoire verbale`, `mémoire des mots`, `rappel libre`, and `effet de récence`; [French short-term-memory research](https://fr.wikipedia.org/wiki/M%C3%A9moire_%C3%A0_court_terme), including free-recall wording, supports the native query choices.
- Japanese results use `単語記憶テスト`, `言語性記憶`, `単語自由再生`, and `単語記憶課題`; Japanese government material on the [松井単語記憶テスト](https://www.mhlw.go.jp/topics/2009/05/dl/tp0501-sankou7-3.pdf) and Japanese research on [単語記憶課題](https://www.psy.ritsumei.ac.jp/hat/cgi-bin/al/paper.cgi?Miyakawa-Hattori-2017aJ-ms.pdf) establish the native task language.
- Korean research uses `단어목록 기억`, `단어목록 회상`, `단어 기억력`, `언어 작업기억`, and `자유 회상`; Korean KCI research describes word-list memory and delayed word-list recall, including [word-list memory terminology](https://journal.kci.go.kr/baldal/archive/articlePdf?artiId=ART002055557) and [Korean word-recall working-memory tasks](https://journal.kci.go.kr/jsped/archive/articlePdf?artiId=ART001978073).
- Brazilian Portuguese sources use `memória verbal`, `memória de palavras`, `evocação livre`, `recordação de palavras`, and `lista de palavras`; current sources include [ClinMetrics RAVLT](https://clinmetrics.app/ravlt), [ReflexBench verbal memory](https://reflexbench.com/pt/assessments/verbal-memory/), [Tembrica cognitive testing](https://tembrica.com/pt/cognitive-test), and Portuguese free-recall terminology on [Wikipédia](https://pt.wikipedia.org/wiki/Recorda%C3%A7%C3%A3o_em_mem%C3%B3ria).
- The read-only Bing keyword endpoint returned `0` exact and `0` broad for the six sampled head phrases. This is sparse Bing evidence, not proof of zero Google demand, and no Google-volume or low-competition number is claimed.
- Google Trends query pages were attempted for all six country/language pairs but were inaccessible to the available web reader. Search Console and backlink-authority data were not authenticated. Chrome/Incognito was unavailable in the Computer Use browser inventory. These constraints are recorded instead of replaced with invented metrics.
- No Bing Webmaster submission, IndexNow request, or other search-engine push was performed.

## Native keyword decisions

| Locale | Primary native query cluster | Supporting native intent | Page positioning |
| --- | --- | --- | --- |
| `de-DE` | `Wortgedächtnis Test`, `verbaler Gedächtnistest`, `Wörter merken Test` | `Wortliste Gedächtnis`, `freier Abruf`, `verbales Arbeitsgedächtnis`, `Wortabruf Test`, `serielle Position` | Free German word-list recall drill with verbal-memory and serial-position guidance. |
| `es-ES` | `test de memoria verbal`, `test de memoria de palabras`, `recordar palabras` | `recuerdo libre`, `retención de palabras`, `memoria verbal a corto plazo`, `memoria de trabajo verbal`, `efecto de posición serial` | Spanish word-recall game for studying a list and freely recalling words in the browser. |
| `fr-FR` | `test mémoire des mots`, `test de mémoire verbale`, `rappel libre de mots` | `retenir une liste de mots`, `mémoire verbale à court terme`, `effet de primauté et récence`, `rappel de mots` | French verbal-memory drill centered on word-list learning and free recall. |
| `ja-JP` | `単語記憶テスト`, `言語性記憶`, `単語自由再生` | `単語暗記テスト`, `単語記憶課題`, `言語性ワーキングメモリ`, `単語リスト 記憶` | Japanese word-memory and free-recall training page using native psychometric wording. |
| `ko-KR` | `단어 기억력 테스트`, `단어 암기 테스트`, `단어목록 기억` | `단어목록 회상`, `자유 회상 테스트`, `언어 작업기억`, `단기 언어 기억`, `단어 회상 훈련` | Korean word-list recall training page with native memory-test terminology. |
| `pt-BR` | `teste de memória verbal`, `teste de memória de palavras`, `memorizar palavras` | `evocação livre`, `recordação de palavras`, `memória verbal de curto prazo`, `lista de palavras`, `memória operacional verbal` | Brazilian Portuguese verbal-memory drill for studying and recalling word lists. |

## Implementation gate

- Preserve the existing full scientific introduction, benchmark table, training protocol, citations, native word bank, and 10 bespoke FAQs.
- Change only the localized SEO/AEO/GEO layer: title, description, keywords, Open Graph/Twitter copy, compact visible H1/subtitle/caption, start-card subtitle, schema entity anchors, and locale-safe related links.
- Verify title under 60 characters, description under 155, compact subtitle, ten FAQ questions, one benchmark object, sameAs schema, same-language links, syntax, and route behavior for all six locales.
- A number-one ranking cannot be guaranteed before deployment and post-deployment country-level measurement.
