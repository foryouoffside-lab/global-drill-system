# Digit Span / Number Memory Research — 2026-09-20

## Scope

One drill only: `memory/short-term-memory/digit-span`, optimized independently for `de-DE`, `es-ES`, `fr-FR`, `ja-JP`, `ko-KR`, and `pt-BR`. The keyword choices use native market wording and intent; they are not word-for-word translations of an English page.

## Live evidence and limits

- Native web research found a consistent interactive intent: remember a growing sequence of digits and reproduce it in the same order, with secondary working-memory, phonological-loop, chunking, and neuropsychological-test intent.
- German results use `Zahlenspanne`, `Zahlengedächtnis`, and `Zahlenspanne vorwärts und rückwärts`; [NerdSip](https://nerdsip.com/de/tests/gedaechtnistest/) and [NEURA](https://neurabrain.app/de/test/digit-span) are current German-language examples.
- Spanish results use `test de dígitos`, `amplitud de dígitos`, `retención de dígitos`, and `memoria de números`; [Soundary](https://soundary.life/es/test/digit-span), [NEURA](https://neurabrain.app/es/test/digit-span), and [Climodo](https://www.climodo.com/es/number-memory) show the live terminology.
- French results use `empan de chiffres`, `empan numérique`, `mémoire des chiffres`, and `mémoire de travail`; [PaxHelios](https://www.paxheliose-eval-psy.com/tests-cognitifs/empan-de-chiffres), [Pilotest](https://www.pilotest.com/fr/tests/working_memory1), and the [French neuropsychological test instructions](https://host.credim.u-bordeaux.fr/dnn-memento/Portals/0/Chercheurs/DOC/MEMENTO_Part4b_Instructions_Tests_Neuropsychologiques_Echelles.pdf) corroborate the native phrasing.
- Japanese results use `数唱テスト`, `数唱課題`, `数字記憶`, and `ワーキングメモリ`; [Michael Dardol’s Japanese test](https://www.michaeldardol.com/span/ja/) and [ReflexBench Japan](https://reflexbench.com/ja/assessments/working-memory/) show the local task language.
- Korean search results were noisier for the branded loanword, so the primary cluster uses the clearer native task intent `숫자 기억력 테스트`, `숫자 외우기`, `작업기억`, and `순차 기억력`; `디지트 스팬` remains a supporting specialist term rather than the only title phrase.
- Brazilian Portuguese research uses `teste de memória de números`, `span de dígitos`, `amplitude/extensão de dígitos`, and `memória de trabalho`; Brazilian academic sources describe the direct and reverse digit-span task, including [USP](https://teses.usp.br/teses/disponiveis/59/59141/tde-16052025-150449/pt-br.html), [SciELO](https://www.scielo.br/j/epsic/a/6zRqMWQ6F63bSy73xbgpyJd/?lang=pt), and [Integra Neuropsicologia](https://www.integradaneuropsicologia.com.br/exercicios-de-estimulacao-mental/sequencia-numerica).
- The read-only Bing keyword endpoint returned `0` exact and `0` broad for the six sampled head phrases. This is sparse Bing evidence, not proof that Google demand is zero, and no Google-volume or low-competition number is claimed.
- Google Trends query pages were attempted for all six country/language pairs but were inaccessible to the available web reader. Search Console and backlink-authority data were not authenticated. Chrome/Incognito was unavailable in the Computer Use browser inventory. These limitations are recorded instead of being replaced with invented metrics.
- No Bing Webmaster submission, IndexNow request, or other search-engine push was performed.

## Native keyword decisions

| Locale | Primary native query cluster | Supporting native intent | Page positioning |
| --- | --- | --- | --- |
| `de-DE` | `Zahlenspanne Test online`, `Zahlengedächtnis Test`, `Zahlen merken Test` | `Ziffernspanne`, `Arbeitsgedächtnis Zahlen`, `phonologische Schleife`, `Kurzzeitgedächtnis Zahlen`, `Zahlenspanne vorwärts` | Free browser test for remembering and entering growing digit sequences. |
| `es-ES` | `test de dígitos online`, `test de memoria de números`, `amplitud de dígitos` | `retención de dígitos`, `memoria numérica`, `memoria de trabajo`, `bucle fonológico`, `agrupamiento de números` | Free numerical-memory test with exact-order recall and adaptive sequence length. |
| `fr-FR` | `test empan de chiffres`, `empan de chiffres en ligne`, `test mémoire des chiffres` | `empan numérique`, `mémoire de travail chiffres`, `rétention de chiffres`, `boucle phonologique`, `regroupement des chiffres` | Browser digit-span test framed around native psychometric and memory terminology. |
| `ja-JP` | `数唱テスト`, `数唱課題`, `数字記憶テスト` | `デジットスパンテスト`, `ワーキングメモリ 数字`, `短期記憶 数字`, `数字列 記憶` | Japanese number-span practice for remembering and entering sequences in order. |
| `ko-KR` | `숫자 기억력 테스트`, `숫자 외우기 테스트`, `숫자 기억 테스트` | `디지트 스팬 테스트`, `작업기억 숫자 검사`, `단기기억 숫자`, `순차 기억력 테스트`, `숫자 청킹` | Native Korean number-memory training page with the specialist Digit Span term as support. |
| `pt-BR` | `teste de memória de números`, `teste de dígitos online`, `span de dígitos` | `amplitude de dígitos`, `memória de trabalho números`, `memória de curto prazo`, `alça fonológica`, `sequência numérica memória` | Brazilian Portuguese number-memory and digit-span tool for exact-order recall. |

## Implementation gate

- Preserve the existing full scientific introduction, benchmark table, training protocols, sources, and 10 bespoke FAQs.
- Change only the localized SEO/AEO/GEO layer: title, description, keywords, Open Graph/Twitter copy, visible H1/subtitle/caption, start-card subtitle, schema entity anchors, and locale-safe related links.
- Verify title under 60 characters, description under 155, compact visible subtitle, ten FAQ questions, one benchmark object, sameAs schema, same-language links, syntax, and HTTP 200 for all six routes.
- A number-one ranking cannot be guaranteed before deployment and post-deployment country-level measurement.
