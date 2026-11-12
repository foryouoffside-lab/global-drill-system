# PHYSICAL - pt (pt-BR) keyword map, Phase A (2026-11-10)

Status: COMPLETE 2026-11-10. AC 10/10; Bing 1 batch, 41 rows (kw.jsonl 37 + kw_rest.jsonl 4, pt-BR, all status ok) -> `pt.csv`. Canary `coordenação motora` 252/1,619 matches prior run -> API live, zeros are real. serp_probe 0/3 used (no candidate primary >= 50; `coordenação motora` not adopted).

## Inputs reused
- GSC 90d (motor-2026-11/gsc-*.csv): zero pt physical URLs with impressions; pt queries only `teste de reflexo para fps` 10i (owned by fps/instant-response), `treino de reflexo` 2i pos 34.
- Prior Bing pt-BR (fps/motor/reaction work dirs): coordenação motora 252/1,619; 0 for teste de coordenação motora (+online), coordenação olho mão, teste de coordenação olho mão, jogos de coordenação motora, teste/treino de visão periférica, jogo da mão firme, teste de agilidade mouse, jogo de agilidade no teclado, teste de velocidade de clique, jogo de reflexo mouse/pc.
- TAKEN pt primaries: Treino de Mira (fps hub), Teste de Mira, Treinar Mira no Valorant, Teste de Reflexo para FPS, Aim Trainer, Teste de CPS, Jogos de Mouse, Teste de Precisão do Mouse, Jogo da Mão Firme, teste de reflexo (light-reaction), jogos de reflexo (reaction hub), jogo de reflexo online / rápido, treino de mira valorant (barrier). Memory category owns teste de memória visual / espacial.

## Autocomplete (10 calls, Google Suggest br/pt = proxy only)
- teste da régua: "teste da régua velocidade de reação", "tempo de reação teste da regua", "teste de tempo de reação da régua pdf" (school/PE test intent; matches drop-catch honestly as an online version).
- escada de agilidade: 157 suggestions, all equipment/purchase/gym exercise intent (preço, amazon, 10 degraus, futebol) - not a browser drill intent.
- jogo de desviar: obstacles/cars/LoL skillshots/poki - casual dodge-game intent (fits quick-dodge / dynamic-grid-evasion).
- coordenação motora: child-education / physio intent (fina, grossa, educação infantil, bebê).
- visão periférica: medical intent (embaçada, turva, AVC).
- mira tremendo: ff/cs2/valorant/emulador - mostly settings/device fixes, partial fit for stability-challenge.
- jogo de agilidade: "jogo de agilidade com o mouse", "no mouse", "online", "teste de agilidade jogo".
- jogo de pular: corda/dinossauro/obstáculos - platformer intent; jump-sequence is charge-steer-intercept, weak fit.
- jogo de clicar: "com o mouse", "rápido", "na bolinha", "online" - fits speed-drill (moving shrinking targets).
- teste de equilíbrio: clinical (Romberg, Berg) - not honest for a mouse drill. Not measured.

## Bing pt-BR results (2026-11-10, `pt.csv`)
- Non-zero: `coordenação motora` 252/1,619 (canary; AC = child education / physio intent), `jogo de pular` 17/77 (AC = dinossauro, corda, obstáculos = platformer intent).
- Everything else 0/0 (39 phrases, see kill list).

## Mechanics (verified, same drills as ko.md/de.md; all mouse-in-browser, no real exercise)
stability = keep crosshair in shrinking ring vs wind drift; complex-pattern = memorise flashed path, then drag-trace it; cross-body = sweep cursor along a diagonal corridor node-to-node; grid-evasion = 3x3 grid, leave warned cells before they explode; agility-ladder = sweep cursor L/R onto 4 rungs as ladders scroll; jump-sequence = hold to charge, release to launch, steer mid-air onto a target; speed-drill = click moving shrinking targets (NOT CPS); drop-catch = click falling green targets, ignore red decoys (NOT a ruler test); peripheral = click threats approaching the core from the outer field; quick-dodge = move cursor away from homing projectiles; reaction-chain = stop the cursor fully inside moving nodes (anti-overflick).

## Page map (12 rows)
| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition note | action |
|---|---|---|---|---|---|---|
| physical (hub) | Treino de Agilidade & Teste de Reflexos | Treino de Agilidade com o Mouse | jogos de agilidade, agilidade e coordenação no navegador | treino de agilidade 0, jogos de agilidade 0, jogo de agilidade com o mouse 0 (AC exists); GSC 0 | n/a | retarget: drop `Teste de Reflexos` (`teste de reflexo` TAKEN by reaction/fps). Title idea `Treino de Agilidade com o Mouse: 11 Drills de Esquiva, Coordenação e Controle`. No-demand descriptive |
| balance-training/stability-challenge | Mira Tremendo? Treino de Firmeza do Mouse | Mira Tremendo | firmeza da mira, segurar a mira estável | mira tremendo 0, + valorant 0, + cs2 0, minha mira treme muito 0, teste de estabilidade do mouse 0; AC = ff/cs2/valorant settings fixes | n/a | keep (no-demand descriptive). Copy must not promise to fix hardware/sensitivity tremor; must not use `mão firme` (motor steady-hand owns `Jogo da Mão Firme`) |
| coordination/complex-pattern | Jogo de Memória Visual \| Teste Espacial | Memorizar e Traçar Padrões | jogo de padrões, traçar o caminho de memória | jogo de padrões 0, jogo de memória de padrões 0, consciência espacial 0 | n/a | retarget: `memória visual` / `teste espacial` belong to the memory category. Title idea `Memorize e Trace o Padrão: Jogo de Caminhos com o Mouse`. No-demand descriptive |
| coordination/cross-body-movement | Teste de Coordenação Mão e Olho | Coordenação Mão-Olho | traçar diagonais sem sair do corredor | teste de coordenação mão olho 0, teste de coordenação 0, coordenação motora bilateral 0 (prior: coordenação olho mão 0, teste de coordenação motora 0) | n/a | keep primary, no-demand descriptive. Title idea `Coordenação Mão-Olho: Trace Diagonais com o Mouse`. Do NOT add `coordenação motora` (collision #1) |
| coordination/dynamic-grid-evasion | Teste de Reflexo \| Jogo de Esquiva | Jogo de Esquiva em Grade | fuja das casas que explodem, leitura de perigo | jogo de desviar dos quadrados 0; GSC 0 | n/a | retarget: drop `Teste de Reflexo` (TAKEN). Title idea `Jogo de Esquiva em Grade: Saia Antes da Explosão`. Must not lead with `jogo de desviar` (quick-dodge owns) |
| fitness/agility-ladder | Treino de Escada de Agilidade | Escada de Agilidade com o Mouse | jogo de ritmo, passos laterais com o cursor | escada de agilidade 0, exercícios com escada de agilidade 0; AC = equipment purchase / gym / futebol | n/a | retarget qualifier: bare `escada de agilidade` intent is physical equipment; add `com o Mouse`. Title idea `Escada de Agilidade com o Mouse: Jogo de Ritmo`. No real-workout claims. Avoid leading with `sequência` (motor finger-sequencing `Cliques em Sequência`) |
| fitness/jump-sequence | Salto Vertical – Treino Pliométrico | Jogo de Salto com o Mouse | jogo de pular (body copy only), carregar, soltar e guiar o salto | jogo de pular 17/77 (AC platformer: dinossauro, corda, obstáculos), jogo de pular obstáculos 0 | low volume, off-intent | retarget (current title FALSE: claims vertical-jump / plyometric training). Title idea `Jogo de Salto: Carregue, Solte e Acerte o Alvo`. `jogo de pular` = weak fit (searchers want a platformer/runner); one body-copy mention, not in title. Decision #2 |
| fitness/speed-drill | Cliques por Segundo: Jogo de Alvos Rápidos | Jogo de Clicar em Alvos Rápidos | jogo de clicar na bolinha, alvos que encolhem | jogo de clicar rápido 0, com o mouse 0, na bolinha 0, online 0, no mouse rápido 0; AC jogo de clicar = com o mouse / rápido / na bolinha | n/a | retarget: current title FALSE (no clicks/sec measured) and collides with motor rapid-tapping (`cliques por segundo` 142 is its secondary). Title idea `Jogo de Clicar em Alvos Rápidos que Encolhem`. No-demand descriptive |
| reflex-training/drop-catch | Teste da Régua \| Tempo de Reação Online | Pegar Alvos em Queda | jogo de pegar objetos caindo, ignorar iscas vermelhas | teste da régua 0 (+ tempo de reação 0, + velocidade de reação 0), teste de régua 0; AC = school/PE ruler test, PDF | n/a | retarget: current title FALSE (no ruler drop, no single-stimulus timing); `tempo de reação` is reaction-category territory. Title idea `Pegue os Alvos em Queda: Ignore as Iscas Vermelhas`. No-demand descriptive |
| reflex-training/peripheral-threat-sweeper | Defesa Radial: Treino de Visão Periférica | Defesa Radial | visão periférica no jogo, ameaças vindo das bordas | visão periférica 0, exercícios para visão periférica 0, como melhorar a visão periférica 0; AC = medical (embaçada, turva, AVC) | n/a | keep (no-demand descriptive). Copy must not claim to improve peripheral vision medically; `teste de visão dinâmica` is TAKEN (reaction) |
| reflex-training/quick-dodge | Jogo de Desviar o Mouse \| Teste de Reflexos | Jogo de Desviar | desviar de projéteis com o mouse, jogo de desviar online | jogo de desviar 0, + obstáculos 0, + online 0, jogo da bolinha de desviar 0; AC = casual dodge games (poki, carros, LoL skillshots) = honest fit | n/a | retarget suffix: drop `Teste de Reflexos` (TAKEN). Title idea `Jogo de Desviar com o Mouse: Fuja dos Projéteis`. Single owner of `desviar` |
| reflex-training/reaction-chain | Frenagem de Mira \| Treino de Reflexos | Frenagem de Mira | parar a mira no alvo, evitar overflick | treino de reflexos 0, exercícios de reflexo 0; no AC seed | n/a | retarget suffix: drop `Treino de Reflexos` (`treino de reflexo` is a reaction-hub keyword). Title idea `Frenagem de Mira: Pare o Cursor Dentro do Alvo`. Must not use `treino de mira` (fps hub) |

## Collisions resolved
1. `coordenação motora` (252/1,619, the only meaningful volume): motor pass (2026-11-09) assigned `coordenação motora com o mouse` as copy-only secondary on the motor hub and rejected it as any primary (child-development / PE / physio intent). Physical does NOT reuse it: no physical page gets it as primary or secondary. cross-body keeps `Coordenação Mão-Olho` (0, honest, uncontested).
2. `Teste de Reflexo(s)` on hub, dynamic-grid-evasion, quick-dodge = TAKEN (`teste de reflexo` light-reaction, `Teste de Reflexo para FPS` fps/instant-response) -> all three drop it.
3. `Treino de Reflexos` on reaction-chain vs reaction-hub keyword `treino de reflexo` -> dropped.
4. speed-drill `Cliques por Segundo` vs motor rapid-tapping (`Teste de CPS`, secondary `cliques por segundo` 142) -> removed; speed-drill does not measure CPS.
5. complex-pattern `Memória Visual` / `Teste Espacial` vs memory category (`teste de memória visual / espacial`) -> retarget to pattern tracing.
6. drop-catch `Tempo de Reação` vs reaction category -> removed (ruler-test claim also false).
7. `desviar` (quick-dodge) vs `esquiva` (dynamic-grid-evasion) -> one stem per page.
8. `mão firme` stays with motor steady-hand; stability-challenge keeps `Mira Tremendo` / `firmeza`.
9. Honesty fixes (not collisions): jump-sequence `Salto Vertical / Pliométrico` real-exercise claim; agility-ladder bare equipment term.

## Kill list (Bing pt-BR exact 0 / broad 0, 2026-11-10, canary valid)
treino de agilidade, teste de agilidade, jogos de agilidade, jogo de agilidade online, jogo de agilidade com o mouse, mira tremendo, mira tremendo valorant, mira tremendo cs2, minha mira treme muito, teste de estabilidade do mouse, jogo de memória de padrões, jogo de padrões, teste de coordenação, teste de coordenação mão olho, coordenação motora bilateral, jogo de coordenação motora, jogo de desviar, jogo de desviar de obstáculos, jogo de desviar online, jogo da bolinha de desviar, jogo de desviar dos quadrados, consciência espacial, escada de agilidade, exercícios com escada de agilidade, jogo de pular obstáculos, jogo de clicar rápido, jogo de clicar com o mouse, jogo de clicar na bolinha, jogo de clicar online, jogo de clicar no mouse rápido, teste da régua, teste da régua tempo de reação, teste de régua, teste da régua velocidade de reação, visão periférica, exercícios para visão periférica, como melhorar a visão periférica, treino de reflexos, exercícios de reflexo.
- Not measured (off-intent by AC): teste de equilíbrio (clinical Romberg/Berg).
- Measured but off-intent: coordenação motora 252/1,619 (child development; motor hub copy-only), jogo de pular 17/77 (platformer).

## Decisions needed (owner)
1. `coordenação motora` (252): confirm it stays motor-hub copy-only and physical never uses it (recommended). Alternative (move to cross-body as copy-only, remove from motor) gains ~0; not recommended.
2. `jogo de pular` (17): body-copy mention on jump-sequence only (recommended) vs title use (off-intent; platformer searchers bounce).
3. pt physical has zero usable measured demand: Phase B for pt is honesty + collision cleanup (speed-drill, drop-catch, jump-sequence false claims; 4 TAKEN-term suffixes), not traffic acquisition.
