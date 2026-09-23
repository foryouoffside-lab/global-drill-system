# Visual training category hub research — 2026-09-20

Scope: `/drills/visual` and the six existing locale hubs (`ja`, `ko`, `de`, `pt-BR`, `es`, `fr`). This is a category-hub optimization run; no individual visual drill pages were generated or submitted.

## Evidence and limitations

- Bing Webmaster keyword lookups were run read-only for three native category seeds per market. The API resolved `ja-JP`, `ko-KR`, `de-DE`, `pt-BR`, `es-ES`, and `fr-FR`, but returned **no data** for all 18 exact-match seeds. This is not Google volume and is not treated as proof of zero demand.
- GSC, Google Keyword Planner, Google Trends, and an incognito Google Top-10 capture were not available through the current repository tooling. No monthly-volume, competition, or #1 probability claim is made.
- Native-language sources consistently use visual-search, dynamic-vision, peripheral-vision, eye-movement, depth, and visual-reaction concepts. The page therefore targets those native concepts without translating the English page word-for-word.
- No IndexNow/Bing URL submission was made. `ENABLE_INDEXNOW` remains disabled.

## Native market clusters

| Market | Primary native cluster | Supporting intent | Native source signal |
|---|---|---|---|
| Japan (`ja-JP`) | `動体視力テスト`, `視覚探索`, `反応速度` | `スポーツビジョン`, `周辺視`, `眼球運動` | Japanese sports-vision sources use 動体視力, 眼球運動, 周辺視, 瞬間視, and eye-hand coordination; see [Sports Science Japan](https://www.sports-science.co.jp/event/sportsvision-lab/), [Tools Navi dynamic-vision test](https://tools-navi.jp/test/dynamic-vision/), and [NDL visual-training research](https://ndlsearch.ndl.go.jp/books/R000000004-I8947720). |
| Korea (`ko-KR`) | `동체시력 테스트`, `시각 탐색`, `반응속도` | `주변시`, `눈손협응`, `시각 훈련` | Korean market wording should stay centered on native 동체시력, 시각 탐색, and 반응속도 concepts rather than a translated “visual training” phrase. Bing exact-match data was unavailable, so these are qualitative targets only.
| Germany (`de-DE`) | `dynamisches Sehen`, `visuelle Suche`, `Reaktionstest` | `peripheres Sehen`, `Augenbewegungen`, `Tiefenwahrnehmung` | German visual-training providers use visuelle Wahrnehmung, dynamisches Sehen, visual exploration, and reaction testing; see [DynamicEye](https://dynamic-eye.de/), [RehaCom Gesichtsfeld/visuelle Exploration](https://www.rehacom.de/therapiemodule/gesichtsfeld), and [Bectec Seh- und Konzentrationstest](https://sicherheitdurchsimulation.de/produkt/seh-und-konzentrationstest/). |
| Brazil (`pt-BR`) | `teste de visão dinâmica`, `busca visual`, `tempo de reação visual` | `visão periférica`, `movimento ocular`, `percepção de profundidade` | Brazilian ophthalmology research uses busca visual, tempo de reação, fixações, and movimentos sacádicos; see [Arquivos Brasileiros de Oftalmologia](https://www.aboonline.org.br/details/517/pt-BR/selecao-de-estimulos-e-analise-atentiva-na-tarefa-de-busca-visual--evidencias-de-estagios-discretos-e-sequenciais) and [eye-movement search research](https://aboonline.org.br/details/1082/pt-BR/analysis-of-the-eye-movement-patterns-in-visual-search-tasks--effect-of-familiarity-and-stimulus-features). |
| Spain (`es-ES`) | `agudeza visual dinámica`, `búsqueda visual`, `tiempo de reacción visual` | `visión periférica`, `seguimiento ocular`, `visión deportiva` | Spanish sports-vision sources use agudeza visual dinámica, búsqueda visual, fijaciones, anticipación, and tiempo de reacción; see [Universidad Miguel Hernández visual-search research](https://portalinvestigacion.umh.es/documentos/5da82caa2999523a1dc43c22), [UVA sports-vision work](https://uvadoc.uva.es/handle/10324/74277), and [Scielo visual behavior research](https://scielo.isciii.es/scielo.php?pid=S1578-84232015000200016&script=sci_arttext). |
| France (`fr-FR`) | `acuité visuelle dynamique`, `recherche visuelle`, `temps de réaction visuel` | `vision périphérique`, `suivi d’objets`, `vision sportive` | French sports-vision programs use acuité dynamique, oculomotricité, vision périphérique, suivi multiple d’objets, and temps de réaction visuo-moteur; see [IS Vision](https://www.isvision.fr/nos-formations/presentation/vision-et-sport/), [Optimeyes](https://www.optimeyes.fr/entrainement-visuel-cognitif-sur-mesure/), and [Persée oculomotor reaction research](https://www.persee.fr/doc/psy_0003-5033_1974_num_74_2_28052). |

## 14-step implementation audit

1. Candidate queries: native visual-training terms were tested per market.
2. Intent: interactive visual test, sports-vision practice, and perceptual training discovery.
3. Format: the existing interactive drill carousel remains above the visual-domain cards.
4. Localization: visible hub copy and metadata are authored per locale.
5. Title/H1: each locale front-loads its native visual-training intent.
6. Authority: no backlink, domain-rating, or difficulty estimate is invented.
7. Feature gap: the hub exposes nine drills across reaction control, tracking, and recognition/depth.
8. PAA: existing localized FAQ schema is retained and expanded with two direct hub questions.
9. Long-tail: dynamic vision, visual search, peripheral vision, eye movement, depth, and reaction modifiers are used naturally.
10. Feature matrix: collection schema lists each drill and cards preserve same-locale internal links.
11. Difficulty: no “easy #1” or “zero competition” claim is made.
12. Volume: Bing exact-match response is recorded as no data; Google demand remains unverified.
13. Keyword clusters: primary and supporting native terms are reflected in metadata and visible copy.
14. Ranking probability: qualitative only; better localization and entity clarity improve eligibility but cannot guarantee position one.

## Verification targets

- Canonical and complete locale/x-default hreflang matrix.
- Native title, description, keywords, H1, headings, category labels, measurement copy, and CTA for all seven routes.
- CollectionPage and FAQPage JSON-LD with `inLanguage`, `dateModified`, localized drill parts, and 10 non-placeholder questions.
- Lint all seven category pages and the shared visual client after editing.
