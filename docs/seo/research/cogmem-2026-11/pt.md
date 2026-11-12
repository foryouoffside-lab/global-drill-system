# pt (Brazil, pt-BR, cc br) - COGNITIVE + MEMORY page -> primary keyword map (2026-11-12)

Status: DONE (AC 10/10, Bing 1 run 40 phrases, kw.done).

## Inputs
- AC (10 calls, _work-pt/ac.txt): teste de memória, teste de atenção, teste de concentração, tabela de schulte, teste de stroop, leitura dinâmica, genius jogo, jogos de memória, jogos para treinar o cérebro, teste n-back.
- Bing pt-BR (_work-pt/kw.jsonl): canary `coordenação motora` 201 / 1,367 -> API live, zeros below are real low volume (below Bing's reporting floor), not UNKNOWN.
- GSC 90d page level (motor-2026-11/gsc-pages-90d.csv): symbol-matching 29i/3c p5.41; concentration-grid 20i p7.45; reaction-time 11i/2c p10.36. Other pt cog/mem pages: no rows. Page+query pull (_work-pt/gsc_pq_*.json) = 0 rows (anonymized).
- serp_probe broken -> competition = GSC pos <= 10 => low, else UNKNOWN.
- Taken (registry pt + visual-2026-11/pt.md): teste de reflexo, teste de reação / tempo de reação (light-reaction), teste go/no-go, memorizar e traçar padrões (physical complex-pattern), coordenação mão-olho, treino de foco fps, treino de atenção concentrada (grade) + secondary teste de atenção concentrada online (visual entropic-grid).

## Measured demand (Bing exact / broad, pt-BR)
| phrase | exact / broad |
|---|---|
| coordenação motora (canary) | 201 / 1,367 |
| teste de memória | 38 / 38 |
| jogos de memória | 8 / 8 |
| teste de atenção | 0 / 22 |
| all other 36 phrases (treino cerebral, jogos para treinar o cérebro, teste de concentração, teste de atenção dividida, tabela de schulte, teste de stroop, leitura dinâmica, leitura rápida, jogo genius, teste de memória visual/espacial/numérica/com palavras, teste n-back, teste de corsi, teste de memória detran ...) | 0 / 0 |

Verdict: the Sept 2026 "~zero non-English demand" finding is CONFIRMED for pt on Bing. Only the memory hub has measurable Bing demand. AC (Google) shows rich long-tails for every family (strong detran/psicotécnico intent), so Google demand exists but is unmeasured -> pick the AC-attested native head term, never a literal translation.

## Page map
| page | current title | proposed primary | secondaries | evidence (Bing, GSC impr/pos, AC) | competition | action |
|---|---|---|---|---|---|---|
| cognitive (hub) | Treino cerebral e concentração | treino cerebral | jogos para treinar o cérebro, exercícios para o cérebro | Bing 0/0 all three; AC "jogos para treinar o cérebro online/grátis" | UNKNOWN | keep (no-demand descriptive); do not lead with "concentração" (owned by concentration-stamina) |
| attention/concentration-stamina | Teste de Concentração \| Atenção Sustentada | teste de concentração | teste de concentração online, teste de atenção sustentada | Bing 0; AC 61 sugg (online grátis, psicotécnico, detran) | UNKNOWN | keep; psicotécnico only as "pratique para o psicotécnico" |
| attention/divided-attention | Teste de Atenção Dividida \| Dupla Tarefa | teste de atenção dividida | teste de atenção dividida online grátis | Bing 0; AC "online grátis", "detran", "como passar no teste de atenção dividida" | UNKNOWN | keep; practice framing only, never "teste oficial do Detran" |
| attention/multi-tasking | Teste de Multitarefa \| Rastreamento Duplo | teste de multitarefa | jogo de multitarefa | Bing 0; no AC family | UNKNOWN | keep (no-demand descriptive) |
| focus/concentration-grid | Tabela de Schulte online \| Treino de foco | tabela de schulte | tabela de schulte online, tabela de schulte jogo | Bing 0; AC online/jogo/avançada; GSC 20i p7.45 | low (GSC <= 10) | keep |
| focus/distraction-fighter | Teste de Stroop \| Atenção Seletiva | teste de stroop | teste de stroop online, efeito stroop, teste de atenção seletiva | Bing 0; AC 94 sugg (online, gratuito, cores e palavras) | UNKNOWN | keep |
| processing-speed/reaction-time | Teste de Reação de Escolha Online | tempo de reação de escolha | teste de escolha rápida | Bing 0; GSC 11i p10.36; "teste de reação" family TAKEN by reaction-speed | UNKNOWN (p10.4) | retarget: lead with "Tempo de reação de escolha", drop leading "Teste de Reação" (collision with light-reaction) |
| processing-speed/rsvp-reader | Leitura Rápida Online \| Treino RSVP | leitura dinâmica online | treino de leitura dinâmica, palavras por minuto, RSVP | Bing 0 both; AC "leitura dinâmica" 184 sugg incl. online/teste/treino/"quantas palavras por minuto"/"spritz leitura dinamica" (= RSVP) | UNKNOWN | retarget: BR native term is "leitura dinâmica", not "leitura rápida"; no course claims |
| processing-speed/symbol-matching | Teste de Símbolos e Dígitos \| SDMT Online | teste de símbolos e dígitos | SDMT online | Bing 0; GSC 29i/3c p5.41 (best pt cog page) | low (GSC <= 10) | keep (no clinical claim) |
| memory (hub) | Testes de Memória e Treino de Memória | teste de memória | jogos de memória, teste de memória online, treino de memória | Bing 38/38 (only real pt demand); jogos de memória 8; AC 255 sugg | UNKNOWN (no GSC rows) | keep; exclude RAM/hardware and idosos/alzheimer intent |
| short-term-memory/color-sequence | Jogo Simon online \| Sequência de cores | jogo genius online | jogo de sequência de cores, jogo tipo genius, jogo simon | Bing 0 both; AC "genius jogo online", "jogo genius online grátis", "jogo genius simon", "jogo tipo genius" (Genius = BR name for Simon) | UNKNOWN | retarget: phrase as "estilo Genius" / "jogo tipo Genius" (Estrela trademark), never imply the official product |
| short-term-memory/digit-span | Teste de memória de números \| Span de dígitos | teste de memória numérica | teste de memória com números, span de dígitos | Bing 0; AC "teste de memória numérica", "teste de memoria com numeros" | UNKNOWN | retarget minor: AC-attested "memória numérica" form |
| short-term-memory/word-recall | Teste de memória verbal online \| Palavras | teste de memória com palavras | teste de memória verbal | Bing 0; AC "teste de memória com palavras", "teste de memoria verbal", "lista de palavras" | UNKNOWN | retarget minor: lay phrase first, "verbal" secondary |
| spatial-memory/grid-memorization | Teste de memória visual online | teste de memória visual | teste de memória visual online | Bing 0; AC strong (online, detran, psicotécnico) | UNKNOWN | keep; detran only as practice |
| spatial-memory/object-location | Teste de memória espacial online | teste de memória espacial | memória visuoespacial | Bing 0; AC "teste de memoria espacial", "visuoespacial" | UNKNOWN | keep |
| spatial-memory/path-tracing | Teste de Corsi online \| Memória espacial | teste de corsi | blocos de corsi | Bing 0; no AC | UNKNOWN | keep (no-demand descriptive) |
| working-memory/n-back | Teste N-Back online \| Memória de trabalho | teste n-back | teste dual n-back, teste de memória de trabalho | Bing 0; AC "n back teste online", "teste dual n back" | UNKNOWN | keep |

## Collisions resolved
- "teste de reação" / "tempo de reação" -> reaction-speed light-reaction; cognitive reaction-time takes the distinct "tempo de reação de escolha".
- "teste de atenção concentrada" -> visual entropic-grid secondary; no cognitive page uses it as primary.
- Hub "teste de memória" vs drills "teste de memória visual/espacial/numérica/com palavras": distinct long-tails.
- Hub "treino cerebral" vs concentration-stamina "teste de concentração": hub drops the "concentração" lead.
- path-tracing "teste de corsi" vs physical complex-pattern "memorizar e traçar padrões": distinct.
- No two pages share a primary.

## Kill list (never target)
- teste de memória ram / windows / bios / memtest / cartão de memória (hardware intent).
- idosos / alzheimer / mini mental / moca / tdah / déficit de atenção / neuropsicológica (clinical/diagnostic).
- "teste oficial detran/psicotécnico"; BPA, AC, TEACO, d2, Vetor, Hogrefe instrument names (restricted psych tests).
- leitura dinâmica redetv (TV show); curso / hotmart / Renato Alves (course brands).
- jogo genius Estrela / comprar / preço (physical toy purchase).
- teste de concentração d&d / urinária; teste de atenção gorila / basquete (viral video).
