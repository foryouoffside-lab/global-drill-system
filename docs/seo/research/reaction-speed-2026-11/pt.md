# Reaction speed: pt (Brazil, cc=BR), 2026-11-08

Data: `pt.csv`. Raw files: `_work-ptes/` (kw.jsonl, serp.jsonl, gsc.tsv, ac_pt.json).
Labels: **Bing** = Bing Webmaster exact monthly impressions. **GSC** = Search Console, BRA, 90 days. **proxy** = Google autocomplete, which shows a phrase exists but gives no volume.

## Demand (Bing exact)
| phrase | exact | source |
|---|---|---|
| treino de mira | 390 (broad 773) | Bing 2026-11-08 |
| teste de reflexo | 209 | Bing 2026-09-04 |
| teste de reação | 182 | Bing 2026-09-04 |
| jogos de reflexo | 128 | Bing 2026-09-05 |
| tempo de reação | 87 (broad 165) | Bing 2026-11-08 |
| every other phrase tested (31) | 0 | Bing; includes teste de reflexo online/f1/valorant, tempo de reação médio, jogo de reflexo, treino de reflexo, acuidade visual dinâmica, go no go, jogo de parar o tempo |

- The 2026-10 `_work-pt` run returned all nodata, so the September figures are the latest valid numbers for the top three terms.
- Autocomplete (proxy) shows "teste de reflexo/reação" + f1 / valorant / click / mouse / fps / human benchmark, and "tempo de reação médio humano / em ms". These phrasings are real but Bing has no volume for them, so they are used only as FAQ topics and secondary keywords.

## Competition (Bing SERP, BR)
- teste de reflexo: cps-check.com, humanbenchmark.com, reactiontimetest.org, 3daimtrainer.com, cpstest.io. Mostly thin tools, with one brand at #2. Rated **MEDIUM**: beatable.
- teste de reação: cps-check.com, humanbenchmark.com, reacao.bebaoverclock.com.br, reactiontimetest.org, cpstest.io. Rated **MEDIUM**.
- The other 9 probes timed out (no captcha). Their competition is UNKNOWN.

## GSC (BRA, 90 days)
- /pt/drills/reaction-speed/reaction-time-test is the TIMING game. Google ranks it for "teste de reação" (pos 21, 3 impressions), "teste de reflexo" (30), "tempo de reação" (52) and "teste tempo de reação" (17). That is an intent mismatch: these queries belong to light-reaction. The page's related-link anchor now reads "Teste de reflexo online (tempo de reação)".
- Total BR reaction impressions are under 15, so there is no ranking baseline.

## Keyword map
| page | primary | secondary |
|---|---|---|
| visual/reaction-speed/light-reaction | teste de reflexo (209) | teste de reação (182), tempo de reação (87), teste de reflexo online (proxy) |
| reaction-speed hub | jogos de reflexo (128) | teste de reação, teste de reflexo, treino de reflexo |
| market-doors-pursuit | treino de mira (390), primary unchanged | treino de mira online |
| reaction-game | jogo de reflexo online (proxy, Bing 0) | jogo de reflexo grátis |
| reflex-training-drill | jogo de reflexo rápido (proxy, Bing 0) | múltiplos alvos |
| reaction-time-test (timing) | jogo de noção de tempo (Bing 0) | jogo de parar o tempo (proxy, Bing 0) |
| others (saccadic, tracking, fps, barrier, go/no-go) | unchanged | Bing 0 for every native candidate |

## KILL / do not chase (Bing 0)
- teste de tempo de reação
- treino de reflexo
- jogo de reflexo
- teste de acuidade visual dinâmica
- teste de rastreamento visual
- exercícios para os olhos
- treino de tracking fps
- teste go no go
- teste de reflexo f1/valorant
- tempo de reação médio

No new pages. Keep the existing ones, which are cheap to hold.

## Implemented
- light-reaction: new title, description and OG/Twitter text, plus 10 rewritten FAQs. The FAQs are factual. Kosinski 2008 is cited only as "médias perto de 190 ms em universitários". Removed: the unsourced claims (calibration, "20 a 30 ms", the "200–250 ms" range) and every spacebar mention, because the game takes click/tap only. 240 Hz corrected to ~4,2 ms.
- hub (`reactionSpeedHubNative.js` pt): title and H1 changed to "Jogos de Reflexo e Testes de Reação Online", with a new description, keywords and intro lead, and FAQ items 1-3 rewritten. The FAQ JSON-LD is generated from the same array.
- reaction-time-test: the related anchor now points to the light-reaction owner phrase.

## Caveats
- Bing covers about 3-4% of BR search, so treat these numbers as a relative index.
- The BR market for this category is thin: only 4 terms above 50/mo.
