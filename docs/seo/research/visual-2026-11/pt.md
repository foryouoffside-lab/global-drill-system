# VISUAL - pt (pt-BR, cc br) keyword map, Phase A (2026-11-12)

Status: COMPLETE. AC 10/10 (`_work-pt/ac.txt`); Bing 1 batch, 40 rows, pt-BR (`_work-pt/kw.jsonl` -> `pt.csv`), 38 ok + 2 network errors (`treino de visão`, `jogos para treinar a visão`: UNKNOWN, see retry note at bottom). Canary `coordenação motora` 201/1,367 (prior 252/1,619) -> API live, zeros are real. serp_probe 2/3 (`_work-pt/serp.jsonl`). GSC 90d page x query pull: `_work-pt/gsc.tsv`.

## Headline
BR visual demand on Bing is ~0. Only 4 phrases cleared 20/mo exact, and the 2 above 50 are wrong-intent (eye exam, keyboard/monitor ghosting). Every visual page is "no-demand descriptive" except entropic-grid (small, real, honest fit). Bing covers ~3-4% of BR search: treat as a relative index.

## Bing pt-BR non-zero
| phrase | exact / broad | note |
|---|---|---|
| coordenação motora | 201 / 1,367 | canary; physical category, not visual |
| teste de ghosting | 124 / 147 | SERP = redragon.com.br keyboard anti-ghosting test, testufo, lagom, eizo monitor tests. Intent = hardware test. Our drill is NOT a monitor/keyboard test -> do not target |
| ghosting monitor | 0 / 121 | same hardware intent |
| teste de visão | 56 / 56 | SERP = zeiss, lenscope, eye-institute, oftalmologistas (medical eye exam, brand-heavy = hard + wrong intent) |
| teste de atenção concentrada | 22 / 22 | AC: detran / psicotécnico / BPA / "online grátis". Cancellation-style search = honest fit for entropic-grid as practice. Competition UNKNOWN (<50, no probe) |
| jogo de encontrar objetos | 0 / 27 | hidden-object game intent |
| teste de atenção | 0 / 22 | psych-test umbrella |
| jogos de atenção | 0 / 20 | broad only |
| teste psicotécnico online | 7 / 10 | full psych battery intent |
| busca visual | 3 / 3 | exact match for visual-search |

## GSC (BRA+all, 90d, pt visual URLs)
- distance-judgment: `teste visão online` 13i pos 8.2, `teste de estereopsia online` 3i pos 2.3 (1 click), `teste de visão online` 2i pos 9, `teste de estereopsia` 1i pos 7. Bing: teste de visão online 0, teste visão online 0. Page states it is not a stereopsis test / eye exam -> do not chase these.
- visual-tracking hub 9i pos 4.2; peripheral-ping 12i pos 8.3; multiple-targets 5i pos 13.8; strobe 5i pos 18.4 (page-level only, no query rows).

## Keyword map
| page | current title | proposed primary | secondaries | evidence | competition note | action |
|---|---|---|---|---|---|---|
| visual (hub) | Treino Visual & Teste de Visão Online | treino visual online | jogos de atenção visual, busca visual, percepção de profundidade | treino visual 0; teste de visão 56 (medical SERP) | n/a | retarget: drop "Teste de Visão Online" (eye-exam intent, factually wrong for the hub) |
| visual-tracking (hub) | Treino de rastreamento visual | treino de rastreamento visual | rastreamento visual jogo | rastreamento visual 0, rastreamento visual jogo 0; GSC hub 9i pos 4.2 | UNKNOWN | keep |
| depth-perception/distance-judgment | Treino de Noção de Distância \| Percepção de Profundidade | noção de distância | percepção de profundidade | percepção de profundidade 0, teste de profundidade visual 0; GSC teste visão online 13i pos 8.2 (Bing 0) | GSC pos <=10 = beatable but no volume | keep |
| reaction-speed/go/no-go | Teste Go/No-Go online grátis | teste Go/No-Go (reaction pass 3) | controle inibitório | Bing 0 (reaction-2026-11) | - | keep |
| reaction-speed/light-reaction | Teste de Reflexo Online: Meça seu Tempo de Reação | teste de reflexo (TAKEN by reaction pass for this page) | teste de reação, tempo de reação | 209 / 182 / 87 (reaction-2026-11) | MEDIUM (cps-check, humanbenchmark) | keep |
| tracking-accuracy/moving-target | Rastreamento Visual \| Alvo Móvel | previsão de trajetória de alvo móvel | alvo em aceleração | alvo em movimento 0; "acertar alvo em movimento" TAKEN by reaction fps-tracking-trainer | - | retarget (collision: "rastreamento visual" also on hub + 10 variants) - no-demand descriptive |
| tracking-accuracy/multiple-targets | Rastreamento de Múltiplos Objetos \| MOT | rastreamento de múltiplos objetos | MOT, teste MOT | 0 | - | keep (no-demand descriptive, term is accurate) |
| tracking-accuracy/pursuit-tracker | Perseguição Ocular \| Rastreamento Visual | perseguição suave com o cursor | manter o cursor no alvo | perseguição ocular 0, seguir o alvo 0 | - | retarget: drill scores the cursor, not the eyes; drop "Rastreamento Visual" collision |
| visual-recognition/entropic-grid | Concentração Visual \| Escaneamento Visual | treino de atenção concentrada (grade) | teste de atenção concentrada online, escaneamento visual | teste de atenção concentrada 22 exact; AC detran/psicotécnico/online grátis; "...online" 0 | UNKNOWN (<50, no probe); psych-test PDFs/clinics likely | retarget - must say practice, NOT the official AC/BPA psicotécnico test |
| visual-recognition/rhythm-anomaly | Discriminação Temporal \| Ritmo Visual | encontre a célula fora do ritmo | discriminação temporal visual | jogo de encontrar anomalia 0, jogo de encontrar o diferente 0 | - | keep (no-demand descriptive) |
| visual-recognition/visual-search | Busca Visual \| Atenção Seletiva | busca visual | jogo de encontrar a letra | busca visual 3; jogo de encontrar a letra 0 | UNKNOWN | keep primary; drop "Atenção Seletiva" (cognitive Stroop page title owns it) |
| visual-tracking/constant-slow-pursuit | Exercício de Perseguição Visual | perseguição visual lenta | - | prior 0 (perseguição suave ocular, exercício ocular) | - | keep (no-demand descriptive) |
| visual-tracking/directional-chaos-pursuit | Rastreamento Ocular Reativo | rastreamento com mudanças de direção | - | not measured (variant) | - | retarget: title duplicates dynamic-evasion |
| visual-tracking/dynamic-evasion-pursuit | Rastreamento Ocular Reativo \| Alvo Móvel | alvo que muda de direção sem aviso | rastreamento reativo | not measured | GSC 3i pos 16.7 | retarget (collision with directional-chaos) - descriptive |
| visual-tracking/ghosting-suppress-pursuit | Teste de Ghosting no Monitor | rastreamento com rastros fantasma | ignorar imagens fantasma | teste de ghosting 124 / ghosting monitor 0/121 = hardware intent (SERP) | hard + wrong intent | retarget (factually wrong: drill draws ghost images, it does not test the monitor) - OWNER DECISION |
| visual-tracking/infinity-pursuit | Exercício Ocular em Oito | exercício ocular em oito | - | exercícios oculares 0; AC "exercícios para os olhos" = medical (glaucoma, miopia) | - | keep; no eyesight claims |
| visual-tracking/momentum-teleport-pursuit | Rastreamento de Alvo Teleportado | alvo teleportado | - | not measured | - | keep |
| visual-tracking/peripheral-ping-pursuit | Visão Periférica e Fixação Central | visão periférica e fixação central | - | visão periférica 0, como treinar visão periférica 0, teste/treino de visão periférica 0 (prior) | GSC 12i pos 8.3 | keep |
| visual-tracking/predictive-pursuit | Rastreamento visual preditivo | rastreamento preditivo | - | not measured | - | keep |
| visual-tracking/sine-wave-pursuit | Rastreamento ocular senoidal | trajetória senoidal | - | not measured | - | keep |
| visual-tracking/spatial-shift-pursuit | Rastreamento visual com mudança espacial | mudança espacial do alvo | - | not measured; GSC "shift pursuit" 1i | - | keep |
| visual-tracking/split-screen-tracking | Rastreamento visual em tela dividida | tela dividida | - | not measured | - | keep |
| visual-tracking/staircase-step | Rastreamento ocular vertical | rastreamento vertical em degraus | - | not measured | - | keep |
| visual-tracking/strobe-prediction-pursuit | Treino visual estroboscópico | treino estroboscópico | - | treino estroboscópico 0, visão estroboscópica 0 | GSC 5i pos 18.4 | keep |
| visual-tracking/triangular-pursuit | Rastreamento visual triangular | trajetória triangular | - | not measured | - | keep |
| visual-tracking/zig-zag-path-pursuit | Rastreamento visual em zigue-zague | trajetória em zigue-zague | - | not measured | - | keep |

## Collisions resolved
- "Rastreamento Ocular Reativo": directional-chaos and dynamic-evasion share it -> split by mechanic (continuous chaos vs straight-line-then-cut).
- "Rastreamento Visual": hub-level phrase also in moving-target + pursuit-tracker titles -> owned by visual-tracking hub; moving-target and pursuit-tracker retargeted.
- "Atenção Seletiva": visual-search vs cognitive distraction-fighter (Stroop) -> Stroop keeps it.
- "teste de atenção concentrada" -> entropic-grid only (not visual-search) so the two grid/search pages don't split it.
- Avoided TAKEN: teste de reflexo/reação (light-reaction), teste de visão dinâmica (reaction visual-tracking-speed-test), exercícios sacádicos (saccadic), acertar alvo em movimento (fps-tracking-trainer), teste de concentração / atenção dividida (cognitive), teste de rastreamento do mouse / seguir linha (motor tracing).

## Kill list (Bing pt-BR 0 exact, 2026-11-12)
teste de visão online, teste visão online, treino visual, percepção visual, teste de percepção visual (+online), percepção de profundidade, teste de profundidade visual, rastreamento visual, rastreamento visual jogo, exercícios de rastreamento visual, rastreamento de múltiplos objetos, teste de atenção online, teste de atenção visual, teste de atenção concentrada online, teste de atenção alternada (+online), jogo de atenção, jogo de encontrar a letra, jogo de encontrar anomalia, jogo de encontrar o diferente, perseguição ocular, seguir o alvo, alvo em movimento, treino estroboscópico, visão estroboscópica, exercícios oculares, como treinar visão periférica.
Wrong-intent (non-zero, do not target): teste de visão (medical), teste de ghosting / ghosting monitor (hardware).

## Decisions needed
1. ghosting-suppress-pursuit: current pt title "Teste de Ghosting no Monitor" claims a hardware test the drill is not. Recommend retitle off it (loses a 124/mo wrong-intent term).
2. Hub: drop "Teste de Visão Online" (medical intent, brand SERP).
3. entropic-grid on "atenção concentrada" (22/mo): only if copy clearly says practice, not the detran/BPA test.
