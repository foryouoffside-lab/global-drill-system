# Distance Judgment — visual drill native SEO/AEO/GEO research

Research date: 2026-09-20  
Route: `/drills/visual/depth-perception/distance-judgment`  
Markets: Japan (`ja-JP`), South Korea (`ko-KR`), Germany (`de-DE`), Brazil (`pt-BR`), Spain (`es-ES`), France (`fr-FR`)

## Decision gate

Keep the six existing country pages. Live search results show market-specific intent and a usable long-tail angle in every market. Google Trends country pages were reachable for Japan, Korea, Germany, Brazil, Spain, and France, but the connector could not expose the term-level Explore chart. Bing keyword checks were run read-only on 2026-09-20; the endpoint returned useful Japan and Spain signals but zero or noisy results for the other four markets. Therefore this run does **not** claim monthly Google volume, a complete Bing market picture, or a guaranteed #1 position.

The page remains an interactive browser drill, not a clinical diagnosis. The copy must distinguish dynamic optical-looming interception from a clinical stereopsis or statutory driver-licence examination.

## Bing validation snapshot

The project Bing helper was queried one locale at a time with exact and broad match checks. Values below are the endpoint response, not Google volume and not a ranking guarantee.

| Locale | Tested terms | Bing result | Interpretation |
| --- | --- | --- | --- |
| `ja-JP` | `深視力検査`; `三桿法`; `深視力 練習` | `436/459`; `0/0`; `0/0` exact/broad | Strongest measured head term is `深視力検査`; related results include `深視力 トレーニング` (198) and `深視力検査トレーニング` (154). |
| `ko-KR` | `입체시 검사`; `심시력 검사`; `깊이 지각 테스트` | `0/0` for all | Related results were dominated by generic Korean search terms; keep native medical wording but do not claim Bing demand. |
| `de-DE` | `räumliches Sehen Test`; `Tiefensehen Test`; `Entfernung einschätzen` | `0/0` for all | Related results drifted into generic `sehen`/television queries; use German optometry SERP wording as qualitative evidence only. |
| `pt-BR` | `teste de estereopsia`; `teste de percepção de profundidade`; `noção de distância` | `0/0` for all | Related results drifted into generic internet-speed tests; use Brazilian eye-care terminology without a volume claim. |
| `es-ES` | `test de percepción de profundidad`; `estereopsis`; `cálculo de distancias` | `0/0`; `11/11`; `0/0` | `estereopsis` is the only tested Spanish term with a non-zero result; retain it in title/description/FAQ framing. |
| `fr-FR` | `test de perception de la profondeur`; `vision stéréoscopique`; `stéréopsie` | `0/0` for all | Related results were not useful; retain French ophthalmic terminology from live SERPs and label demand as unverified. |

This snapshot is deliberately conservative: zero from this endpoint can mean absent/limited Bing coverage rather than absent local demand, and noisy related suggestions are excluded from the implementation set.

## Native keyword clusters

| Locale | Primary intent | Secondary terms | Long-tail / answer intent | SERP fit |
| --- | --- | --- | --- | --- |
| `ja-JP` | `深視力検査` | `三桿法`, `深視力 練習`, `深視力 コツ`, `奥行知覚検査` | `大型免許 深視力 練習`, `二種免許 深視力`, `深視力検査 オンライン` | Dedicated simulator and licence-prep pages dominate; target the browser practice gap and disclose that this is not the statutory apparatus. |
| `ko-KR` | `입체시 검사` | `심시력 검사`, `원근감 테스트`, `깊이 지각 테스트`, `거리감` | `입체시 검사 온라인`, `심시력 검사 연습`, `거리감 테스트` | Clinical explainers and eye-care pages dominate; target a clearly labelled visual drill with clinical limitation language. |
| `de-DE` | `räumliches Sehen Test` | `Tiefensehen Test`, `Stereosehen`, `Entfernung einschätzen`, `3D-Sehtest` | `Sehtest räumliches Sehen online`, `Tiefenwahrnehmung testen`, `Entfernungsschätzung üben` | Optician and medical explainers dominate; the opportunity is a non-diagnostic interactive practice tool. |
| `pt-BR` | `teste de estereopsia` | `percepção de profundidade`, `noção de distância`, `visão tridimensional`, `teste Titmus` | `teste de percepção de profundidade online`, `teste de estereopsia online`, `treino de noção de distância` | Hospital and optometry pages explain the clinical test; distinguish the SkillDrills dynamic interception drill. |
| `es-ES` | `test de percepción de profundidad` | `estereopsis`, `visión estereoscópica`, `cálculo de distancias`, `visión tridimensional` | `test de percepción de profundidad online`, `test de estereopsis online`, `entrenar cálculo de distancias` | Medical dictionaries and optometry pages explain estereopsis; answer “qué mide” and “es diagnóstico?” directly. |
| `fr-FR` | `test de perception de la profondeur` | `vision stéréoscopique`, `stéréopsie`, `appréciation des distances`, `vision en relief` | `test de profondeur en ligne`, `tester la vision stéréoscopique`, `exercice appréciation des distances` | Ophthalmology and general screening tools dominate; target the online practice intent without implying diagnosis. |

## Live SERP and trend evidence

### Japan

- Google Trends Japan is available at `https://trends.google.com/home?geo=JP&hl=ja` and Trending Now identifies Japan as the selected market.
- Search results repeatedly use the native cluster `深視力検査`, `三桿法`, `大型免許`, `二種免許`, `深視力 練習`, and `深視力 コツ`, rather than a literal translation of “depth perception test”.
- Competitor/intent sample: `https://shinshiryoku.shoumei.org/guide/training/`, `https://www.mach-tools.net/health/visiontest-deep/`, Apple’s `かんたん深視力` listing, the Japanese Council of Traffic Science paper, Fukui Prefectural Police guidance, and `https://optnet.org/sinsiryoku/faq`.
- The official-style result pattern makes the statutory distinction important: the Japanese rule is three trials at 2.5 m with mean error within 2 cm. This page should mention that the browser drill is a timing/looming exercise, not a replacement for the official machine.

### South Korea

- Google Trends Korea is available at `https://trends.google.com/home?geo=KR&hl=ko`.
- Native ophthalmic terminology appears as `입체시 검사` and `심시력`; general visual-language searches also use `원근감` and `깊이 지각`. The search surface is noisier than Japan, so avoid asserting a single dominant volume winner.
- Competitor/intent sample: Korean government child-health guidance for `입체시 검사`, Korean ophthalmology explainers, the Korean Journal of Ophthalmology result on stereotest reliability, and Apollo Hospitals’ Korean `심도 지각 테스트` explainer.
- `입체시 검사` is the safest page-level anchor; `심시력 검사 연습` is the practical long-tail hook. Use `원근감 테스트` only as a secondary phrase because general photography results also occupy that query.

### Germany

- Google Trends Germany is available through the country-aware Google Trends interface; Google’s German help explicitly notes that terms must be compared in the language users actually search.
- German pages consistently use `räumliches Sehen`, `Tiefensehen`, `Stereosehen`, and `Entfernungen einschätzen`; the literal `Tiefenwahrnehmung Test` is less natural as a primary H1.
- Competitor/intent sample: `https://www.sehen.de/sehtests/sehtest-fuer-erwachsene/`, `https://www.visilab.ch/de/gutes-sehen/sehtest-online/tiefensehen`, Pschyrembel’s `Räumliches Sehen`, Auge Online’s 3D vision explainer, DocCheck, and German optometry guidance.
- The winnable angle is `Sehtest räumliches Sehen online` / `Tiefensehen testen`: an interactive practice utility with an explicit non-diagnostic disclaimer.

### Brazil / Portuguese

- Google Trends Brazil is available at `https://trends.google.com/home?geo=BR&hl=pt-BR`; Google Trends documentation confirms that its regional score is relative interest, not absolute monthly volume.
- Brazilian clinical pages use `teste de estereopsia`, `percepção de profundidade`, `visão tridimensional`, and `noção de distância`. `Teste de percepção de profundidade` is a clear consumer phrase; `teste de estereopsia` supplies clinical relevance.
- Competitor/intent sample: HOB Brasília’s `https://www.hobr.com.br/exame/teste-de-estereopsia`, Hospital de Olhos do Paraná, Brazilian educational material on binocular vision, and Portuguese depth-perception explainers.
- Make the FAQ answer “este teste é diagnóstico?” explicit and position the page as `treino de noção de distância` plus dynamic visual interception.

### Spain / Spanish

- Google Trends Spain is available at `https://trends.google.com/home?geo=ES&hl=es` and Trending Now reports Spain as the selected market.
- Native medical language is `estereopsis`, `visión estereoscópica`, `percepción de profundidad`, `cálculo de distancias`, and `visión tridimensional`; `test de percepción de profundidad` is suitable for the consumer-facing title.
- Competitor/intent sample: Clínica Universidad de Navarra’s estereoscopia dictionary, Spanish optometry/stereopsis explainers, VISUS’s Spanish stereo test listing, and the Spanish depth-perception patent/explainer results.
- Keep the title compact and put `estereopsis` in the description/FAQ rather than overloading the title with every synonym.

### France / French

- Google Trends France is available at `https://trends.google.com/home?geo=FR&hl=fr`; the current Trending Now page reports that France’s live trending feed is not supported, so it is not evidence of demand for this niche.
- French ophthalmic language uses `perception de la profondeur`, `vision stéréoscopique`, `stéréopsie`, and `vision en relief`. `Appréciation des distances` is a natural supporting phrase but not the only primary keyword.
- Competitor/intent sample: the Société Française d’Ophtalmologie digital stereoscopic-test abstract, ANSES’s 3D vision report, a French depth-perception screening tool, and French-language stereopsis references.
- Use an answer-first heading such as `Que mesure un test de perception de la profondeur ?` and make the non-diagnostic boundary visible.

## 14-step audit summary

1. Candidate queries were chosen from native clinical, licence, optometry, sports, and browser-tool language per market.
2. Intent is predominantly utility/information: users want to test, practise, understand a licence test, or learn whether a result is clinical.
3. Top results are generally responsive explainers or simulators; the page should put the playable drill before the long guide.
4. Native-language results were preferred; machine-translated aggregator pages were not used as keyword evidence.
5. Titles should front-load the local utility term, keep the SkillDrills brand suffix short, and avoid English parentheticals.
6. No backlink/domain-rating tool is available in this workspace; authority is therefore recorded as a risk, not guessed.
7. The differentiator is an instant dynamic optical-looming drill, local score storage, benchmark table, and explicit calibration limits.
8. FAQ intent comes from recurring questions in the result pages: licence criteria, what the test measures, whether training helps, display conditions, and whether an online result is diagnostic.
9. Long-tail modifiers are `online`, `Übung/練習/연습/treino/ejercicio/exercice`, `Führerschein/免許/운전면허`, and `stereopsis/立体視/입체시` where native.
10. Competitor matrix: medical explainers win trust; licence simulators win exact procedural intent; SkillDrills can combine interactive practice with transparent measurement.
11. SERP difficulty is medium-to-high for clinical head terms and lower for the dynamic practice long tails; no numeric difficulty score is claimed.
12. Google Trends country pages confirm the market interfaces and Google’s documentation confirms relative-interest semantics. Bing exact/broad checks were completed for all six locales; only Japan and Spanish `estereopsis` produced usable non-zero signals, so the other markets remain SERP-qualified rather than volume-qualified.
13. The keyword clusters above are the implementation set; they are not treated as monthly-volume facts.
14. Build decision: keep the pages, target native long-tail practice intent, and validate performance after deployment through GSC/Bing before making ranking claims.

## Implementation constraints

- Keep the full ten-question localized FAQ, benchmark table, calibration protocol, citations, and visible guide already present on this drill.
- Replace only the page’s search framing and answer wording; do not translate English strings mechanically.
- The subtitle under the drill name must stay short enough for the existing one-line UI clamp.
- Do not enable or call IndexNow during this pre-deployment run.
