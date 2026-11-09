# MOTOR category: pt (Brazil, pt-BR, cc=BR), 2026-11-09

Status: COMPLETE 2026-11-09. Bing 40/40 ok (1 run, rows in pt.csv), autocomplete 10/10, SERP 3/3 (2 timeouts = UNKNOWN). Steps 4-6 finished from collected data only (no new queries). Raw files in `_work-pt/`.

## Step 1: current state (done)
- Current titles (`app/pt/drills/motor/...`):
  - hub: `Precisão do mouse e treino de mira` (the hub keywords also list treino de mira, teste CPS and velocidade de digitação)
  - aim-trainer: `Aim Trainer Online Grátis | Precisão do Mouse` (already changed by the FPS phase B pass; "Treino de Mira" dropped)
  - drag-and-drop: `Teste Drag and Drop – Precisão de Mouse`
  - precision-flick-shot: `Flick Shot de Precisão – Teste de Precisão do Mouse`
  - finger-sequencing: `Treino de Mira Sequencial` (collides with the FPS hub owner `treino de mira`)
  - keyboard-recognition: `Teste de reação do teclado | Keybinds`
  - rapid-tapping: `Teste de CPS`
  - steady-hand: `Teste de precisão do mouse | Mão firme` (collides with the flick-shot title "Teste de Precisão do Mouse")
  - tracing: `Teste de Rastreamento do Mouse`
- What each drill actually does (read from the client code):
  - aim-trainer: click targets that spawn and shrink; the clock starts at 45 s and is extended by hits.
  - drag-and-drop: drag a ball into a goal zone and release it.
  - precision-flick-shot: click shrinking targets, with a bonus for hitting the centre.
  - finger-sequencing: click a set of nodes in a required order (only the live node shows its marker). This is a mouse drill, not a finger or keyboard drill.
  - keyboard-recognition: a key prompt appears, the player presses it before the timer runs out, and fake prompts must be ignored. It uses game keybind presets (Valorant, Fortnite, Minecraft, LoL, Apex) and lasts 60 s. It is a key-reaction game. It is NOT a typing test (no words or WPM) and NOT a keyboard hardware tester.
  - rapid-tapping: click as fast as possible for 45 s and read the CPS result. This is honest `teste de CPS` / `cps test` intent.
  - steady-hand: move the cursor along a narrowing corridor; touching a wall sends you back to the start (wire-loop game).
  - tracing: keep the cursor on a moving wave for 45 s (continuous tracking).
- GSC BR, 90 days (`_work-pt/gsc.tsv`): no pt motor page has an exposed query row. The page totals are /pt/drills/motor at 4 impressions (pos 8.8) and keyboard-recognition at 2 clicks / 11 impressions (pos 7.5). The EN steady-hand page gets "mouse precision test" (1 impression, pos 6). There is no ranking to protect in BR.
- Prior Bing BR figures (2026-10-08). The handoff flags that day's pt run as throttle-suspect, so the figures are re-measured below:
  - cps test 2,491
  - teste de click 400
  - teste de cps 354
  - click speed test 83
  - cliques por segundo 68
  - teste de clique 56
  - teste de teclado 13,118 (keyboard hardware tester intent)
  - teste de teclado online 3,749
  - jogo de teclado 318
  - jogo de digitação 107
  - precisão do mouse 20
  - zero: teste de reação teclado, teste de mão firme, jogo da mão firme, teste de precisão do mouse
- TAKEN primaries in pt (never reuse):
  - FPS, from `fps-2026-11/pt.md`: treino de mira (hub), teste de mira (flick-shot), treinar mira no valorant (target-acquisition), and the descriptive names of the other FPS drills.
  - reaction: teste de reflexo, teste de reação, jogos de reflexo, treino de mira valorant (barrier), acertar alvo em movimento.
  - motor aim-trainer owns **aim trainer** (655/1,513).

## Step 2: autocomplete (done; 10 of 10 calls, Google Suggest gl=br hl=pt, PROXY with no volume; raw `_work-pt/ac_1..10.json`)
1. teste de cps: + minecraft / mouse / botão direito / esquerdo / teclado / drag click / 1 segundo / online / celular / barra de espaço, plus "site de teste de cps". Some rows are psychology noise ("teste cps psicotécnico").
2. teste de clique: + teste de click / cliques / cliques por segundo / clique duplo / rápido / 10 segundos / velocidade do clique / "teste de precisão de clique". Many rows mean hardware checks (double-click, ghost click).
3. teste de teclado: 241 suggestions, almost all hardware (notebook, 60%, abnt2, mecânico, anti ghosting, redragon, testarteclado.com.br). The intent is checking whether keys work, not our drill. EXCLUDED.
4. jogo de teclado: + para treinar / digitar / online / sem instalar / "jogo de apertar teclado" / "jogo de agilidade no teclado" / gamer / musical (piano noise). Mixed intent: typing practice, piano and kids' games.
5. teste de mouse: hardware (polling rate, dpi, double click, botões). A few rows are skill-adjacent: "teste de agilidade mouse", "teste de arrastar mouse", "teste aim mouse", "teste de mouse tiro".
6. precisão do mouse: + jogo / testar / treinar / melhorar, "teste de precisão do mouse", "jogo de precisão do mouse", coquinhos (a kids' game portal). A Windows "precisão do ponteiro" settings intent (desativar / tirar) is mixed in.
7. arrastar e soltar: almost all Windows / dev troubleshooting. Useful rows: "jogos de arrastar e soltar", "jogo arrastar e soltar", coquinhos (kids). Weak fit.
8. jogo da mão firme: "jogo da mao firme" exists; everything else is noise (máfia, filme). The physical-toy intent is likely.
9. teste de reação teclado: teste tempo de reação teclado, teste de tempo de reação teclado, teste de resposta teclado, teste de reação mouse/click. This is a real phrasing that fits keyboard-recognition.
10. jogo de clicar: + com o mouse / rápido / na tela / "jogo de clicar nas letras" / "no teclado" / "em qualquer tecla" / "jogo de apontar e clicar". Mostly idle-clicker noise (capivara, cookie).

## Step 3: SERP (done; 3 of 3 Bing probes; raw `_work-pt/serp.jsonl`)
- teste de cps (BR): the top 9 are all dedicated CPS-tool exact-match domains with pt titles: arealme, cps-check.com, cps-tester.com, cpstest.io (x2), testthiscps.com, clickspersecond.com, cpstesters.com, cps-tester.us. Rated **HIGH**: saturated, single-purpose sites. Our angle (a 45 s endurance round, not a 1/5/10 s counter) is a differentiator, but not a ranking edge.
- teste de precisão do mouse and teste de reação teclado: the probes timed out (selector, no captcha). Competition is UNKNOWN (not retried, per cap).

## Step 4: Bing volume (pt-BR, exact/broad monthly; `_work-pt/kw.jsonl`, 40/40 ok, 2026-11-09)
- `teste de teclado` 15,966 / 21,495; `teste de teclado online` 4,419 / 4,947 (hardware key-checker intent; AC confirms) - off-intent
- `cps test` 3,148 / 3,315; `teste de click` 543 / 736; `teste de cps` 352; `cliques por segundo` 142; `teste de clique` 96; `teste de cliques` 88; `click speed test` 88 / 92
- `teste de mouse` 969 (hardware: polling/dpi/double click per AC) - off-intent
- `jogo de teclado` 284 / 460 (mixed: typing practice, piano, kids); `coordenação motora` 252 / 1,619 (child-development / PE intent); `jogos de mouse` 218; `jogo do labirinto` 19 (kids maze); `treino de teclado` 0 / 19
- Reused (fps-2026-11/pt.md): `aim trainer` 655 / 1,513.
- 0: every descriptive drill phrase (kill list).

## Page -> primary map (one primary per page; paths under `/pt/drills/`)

| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition note | action |
|---|---|---|---|---|---|---|
| motor (hub) | Precisão do mouse e treino de mira | Jogos de Mouse | coordenação motora com o mouse (copy only), habilidade no mouse; Aim Trainer / Teste de CPS only as child-card anchors | jogos de mouse 218/218; GSC hub 4 impr pos 8.8 (BR: mouse precision training 1i); precisão do mouse 0 | UNKNOWN (no probe) | retarget: `treino de mira` = fps hub primary (TAKEN); `precisão do mouse` -> precision-flick-shot. e.g. `Jogos de Mouse: Precisão, Cliques e Controle Online`. Trim hub keywords treino de mira, teste CPS, velocidade de digitação (no typing drill). Do not use `coordenação motora` as primary (252, child-development intent) |
| hand-eye-coordination/aim-trainer | Aim Trainer Online Grátis \| Precisão do Mouse | Aim Trainer | aim trainer online, aim trainer grátis | 655/1,513 (fps-2026-11); GSC 0 | HIGH (fps-2026-11 probe) | keep primary; swap suffix `Precisão do Mouse` (now precision-flick-shot primary) for e.g. `Clique nos Alvos`. Must not use `treino de mira` (fps hub), `teste de mira` (fps flick), Valorant phrases (fps target-acquisition / reaction barrier) |
| hand-eye-coordination/drag-and-drop | Teste de arrastar e soltar \| Precisão do mouse | Teste de Arrastar e Soltar | jogo de arrastar e soltar, arrastar com o mouse | teste de arrastar mouse 0, jogo(s) de arrastar e soltar 0; AC = Windows/dev help + coquinhos kids | n/a | keep primary (Phase B mechanics-only pass already applied); drop suffix `Precisão do mouse` (precision-flick-shot owns) |
| hand-eye-coordination/precision-flick-shot | Treino de mira Flick \| Precisão do mouse | Teste de Precisão do Mouse | precisão do mouse, teste de precisão de clique, acertar o centro do alvo | teste de precisão do mouse 0, precisão do mouse 0, teste de precisão de clique 0, flick test 0; AC teste/jogo de precisão do mouse; GSC EN steady-hand got `mouse precision test` 1i pos 6 | UNKNOWN (probe timed out) | retarget (COLLISION): `Treino de mira` = fps hub, `Flick` = fps flick-shot (`Teste de Mira`, aim flick). e.g. `Teste de Precisão do Mouse: Acerte o Centro`. Trim fps keywords. Copy must not imply the Windows "precisão do ponteiro" setting |
| movement-speed/finger-sequencing | Treino de mira sequencial \| Teste de clique | Cliques em Sequência | clicar na ordem certa, sequência de alvos | jogo de clicar com o mouse 0, teste de agilidade mouse 0; no native AC phrase; GSC 0 | n/a | retarget (2 collisions): `treino de mira` (fps hub), `teste de clique` (96 -> rapid-tapping). e.g. `Cliques em Sequência: Siga a Ordem dos Alvos`. Honest: mouse, ordered nodes, trap nodes; not finger/keyboard |
| movement-speed/keyboard-recognition | Teste de reação do teclado \| Keybinds | Teste de Reação do Teclado | jogo de teclado (284/460, mixed), treino de keybinds (Valorant/Fortnite/Minecraft presets) | teste de (tempo de) reação teclado 0; AC teste tempo de reação teclado / teste de resposta teclado; GSC 2 clk / 11 impr pos 7.5 (only pt motor page with clicks) | UNKNOWN (probe timed out) | keep (has the only pt motor clicks). Add `jogo de teclado` as secondary in description/H2. Do NOT target `teste de teclado` (15,966) / `teste de teclado online` (4,419): key-checker intent. No typing claims (no words/WPM). `do teclado` qualifier keeps it distinct from reaction `teste de reação` |
| movement-speed/rapid-tapping | Teste de CPS (CPS Test) Online | Teste de CPS (CPS Test) | cps test (3,148/3,315), teste de click (543/736), cliques por segundo (142), teste de clique (96), teste de cliques (88), click speed test (88) | teste de cps 352; cps test 3,148/3,315; GSC 0 | HIGH (9 exact-match CPS tool domains with pt titles) | DONE (Phase B `_passB_rapid-tapping.log`) - keep. Optional follow-up: add `teste de click` / `cliques por segundo` to description/H2. Honest: 45 s, mouse only, no teclado/barra de espaço CPS |
| precision-control/steady-hand | Teste de precisão do mouse \| Mão firme | Jogo da Mão Firme | labirinto com o mouse, mão firme no mouse, sem encostar na parede | jogo da mão firme 0 (AC `jogo da mao firme` exists, physical-toy leaning); jogo do labirinto 19 (kids maze, off-intent); GSC EN page 1i `mouse precision test` | n/a | retarget (COLLISION): `Teste de precisão do mouse` -> precision-flick-shot. e.g. `Jogo da Mão Firme: Labirinto com o Mouse`. Copy must not claim tremor/medical measurement |
| precision-control/tracing | Teste de rastreamento do mouse \| Seguir linha | Teste de Rastreamento do Mouse | seguir a linha com o mouse, rastreamento do cursor | teste de rastreamento do mouse 0; GSC 0 | n/a | keep (no-demand descriptive). Must not use `rastreamento contínuo` / `Tracking Suave` (fps pro-smooth-pursuit) or `Treino de Tracking` (fps strafe-tracking) |

## Collisions resolved
1. `treino de mira` on hub, precision-flick-shot and finger-sequencing titles = fps hub primary (`Treino de Mira`) -> all three drop it.
2. precision-flick-shot `Flick` lead vs fps flick-shot-training (`Teste de Mira`; secondaries aim flick, flick trainer) -> motor flick becomes `Teste de Precisão do Mouse`.
3. `Teste de precisão do mouse` on steady-hand vs precision-flick-shot -> precision-flick-shot owns (bullseye accuracy = honest fit, matches de/ja/ko); steady-hand -> `Jogo da Mão Firme`.
4. `Precisão do mouse` suffix on hub, aim-trainer, drag-and-drop -> drop; precision-flick-shot is the single owner.
5. `teste de clique` (96) on finger-sequencing -> rapid-tapping secondary.
6. `Aim Trainer` (655): single owner motor aim-trainer (decided in fps pass); no other motor page uses it.
7. keyboard-recognition `teste de reação` stem vs reaction `teste de reação` primary -> kept with `do teclado` qualifier (ja/ko precedent); watch GSC for cannibalisation.
8. Hub keyword `velocidade de digitação` -> remove (no typing drill; dishonest).

## Kill list (Bing pt-BR exact 0, status ok)
teste de cliques por segundo, teste de cps online, teste de velocidade de clique, teste de reação teclado, teste de tempo de reação teclado, jogo de agilidade no teclado, jogo de apertar teclado, precisão do mouse, teste de precisão do mouse, jogo de precisão do mouse, treinar precisão do mouse, teste de agilidade mouse, teste de precisão de clique, coordenação olho mão, jogos de coordenação motora, teste de coordenação motora, teste de arrastar mouse, jogo arrastar e soltar, jogos de arrastar e soltar, jogo da mão firme, teste de rastreamento do mouse, jogo de clicar com o mouse, jogo de clicar rápido, flick test, treino de teclado (broad 19), controle do mouse.
Measured but off-intent (skip): teste de teclado 15,966/21,495, teste de teclado online 4,419/4,947, teste de mouse 969 (hardware), coordenação motora 252/1,619 (child development), jogo do labirinto 19 (kids maze).
Caveat: 0 = below Bing floor; several 0 phrases have Google AC suggestions.

## Decisions needed
- Keyboard tester: `teste de teclado` 15,966 + `teste de teclado online` 4,419 = ~20k/mo exact in BR, the largest motor-adjacent number measured in any market. Only reachable with a real key-checker tool (press any key, ABNT2 layout, ghosting). keyboard-recognition must not claim it. Product decision (same as de/ja/ko).
- Mouse tester: `teste de mouse` 969 (polling rate / dpi / double-click) needs a real hardware-check tool; out of scope.
- Hub primary `Jogos de Mouse` (218) is weak, partly kids-game intent; alternative is a no-demand descriptive `Treino de Mouse`. Pick one.
- Phase B still to apply: hub, precision-flick-shot, finger-sequencing, steady-hand (retargets); aim-trainer + drag-and-drop (suffix trims). rapid-tapping DONE; keyboard-recognition + tracing keep.

## Unknown / not measured
- SERPs for `teste de precisão do mouse` and `teste de reação teclado` (probe timeouts, not retried). `jogos de mouse` / `jogo de teclado` SERPs not probed (cap). Trend not run.
