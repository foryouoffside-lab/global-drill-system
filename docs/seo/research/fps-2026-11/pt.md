# FPS category: pt (Brazil, pt-BR, cc=BR), 2026-11-08

Status: COMPLETE 2026-11-09 (coordinator finished after agent died; Bing 40/40 ok, 1 run). Raw files in `_work-pt/`.

## Step 1: current state (done)
- All 16 pt FPS titles read. Of the 15 drills, 11 lead with "Treino de Mira", and so does the hub title "Treino de mira FPS grátis". That is massive self-cannibalisation on one head term.
- Pages outside FPS that also use "treino de mira": motor aim-trainer ("Treino de Mira e Aim Trainer Online Grátis"), reaction market-doors ("Treino de Mira: Checar Ângulos") and reaction barrier ("Treino de Mira para Valorant: Reação ao Peek").
- Known Bing BR figures (exact/broad): aim trainer 655/1513, treino de mira 390/773, treino de mira valorant 363/383, aim trainer valorant 97/98, aim trainer online 13/35, tracking aim trainer 2. Zero: treino de mira online, treino de tracking, treino de mira tracking, crosshair placement. From 2026-10-08: aim lab 639 (brand, not ours), teste de mira 236.
- GSC BR for 90 days (`_work-pt/gsc_br.tsv`): BR users reach the EN flick page with English queries such as "aim flick", "flick trainer" and "flick aim". On pt pages: /pt/drills/fps/instant-response shows "teste de reflexo para fps" (10 impressions, pos 9.0), and /pt/drills/fps/flick-shot-training shows "aim flick" (5 impressions, pos 8.2). Total BR FPS impressions are under 100, so there is no ranking to protect.

## Step 2: autocomplete and SERP (done; 10 of 10 AC calls used, 3 of 3 SERP probes)
- AC, a proxy with no volume (`_work-pt/ac_1..10.json`):
  - "treino de mira" + valorant / online / cs2 / navegador / fps / site / "e reflexo" / jogo de
  - "aim trainer" + valorant / cs2 / navegador / headshot / mouse
  - "treinar mira" + valorant / online / cs2 / navegador / site, and "como treinar a mira no pc / cs2"
  - "teste de mira" + valorant / mouse / fps / cs2, and "teste de precisão de mira"
  - "controle de recoil" + cs2 / valorant / r6 / pubg. Several of these mean anti-recoil hardware, so the intent is mixed.
  - "jogo de mira" is mostly noise (the Mirassol football club). Useful rows: "jogo de treinar a mira", "jogo de mira online".
  - "treino de flick valorant"
  - "teste de reflexo" + cs / fps / gamer / tiro
  - "melhorar mira" + valorant / cs2 / fortnite / fps. These are mostly how-to intents.
- Bing SERP BR for "treino de mira": cps-check.com (#1 and #7), aimtrainer.io, aiming.pro, cpstest.io "Teste de Mira", 3daimtrainer, arealme, Aimlabs Steam, testthiscps.com. Most of these are thin click-target tools, with pt-native titles at #1, #4 and #9. Rated **MEDIUM**: beatable.
- The "aim trainer" and "teste de mira" SERPs timed out. Their competition is UNKNOWN (not retried, per cap).

## Step 3: Bing volume (pt-BR, `_work-pt/kw.jsonl`, `pt.csv`)
- New: teste de mira 268 · treinar mira 167/300 · treinar mira valorant 133 · jogo de mira 29 (Mirassol noise) · treino de mira valorant online 20 · aim trainer cs2 3. Known: aim trainer 655/1,513 · treino de mira 390/773 · treino de mira valorant 363 (reaction barrier) · aim trainer valorant 97.
- Zero (34): every mechanic term (flick, recoil/spray, tracking, headshot, target switching, 180), every "site/navegador/grátis/online" modifier, "teste de reflexo fps", "como melhorar a mira".
- GSC BR: EN flick page gets `aim flick` 11i, `flick aim` 7i, `flick trainer` 7i (pos 6-8); pt flick page `aim flick` 5i pos 8.2. English loanwords are how BR users search the mechanic.

## Index state (2026-11-07)
Indexed: hub, flick-shot, micro-correction (6 clk / 27 impr pos 6.9), 180, instant-response (58 impr pos 8.2). Everything else discovered-not-indexed or unknown -> no ranking to protect there.

## Page -> primary map (paths under /pt/drills/)

| page | current title | proposed primary | secondaries | evidence | competition | action |
|---|---|---|---|---|---|---|
| fps (hub) | Treino de mira FPS grátis | Treino de Mira | treinar mira (167), treino de mira FPS, jogo de treinar a mira | 390/773; GSC 15 impr pos 12.2 | MEDIUM (cps-check, cpstest.io pt pages rank; beatable) | keep; add `treinar mira` in description/H1 support |
| fps/flick-shot-training | Treino de Mira - Flick Trainer no Navegador | Teste de Mira | aim flick, flick trainer, flick aim (GSC) | 268 exact; GSC pt 71 impr pos 7.7 (aim flick) | UNKNOWN (probe timed out) | retarget: `Teste de Mira: Flick Trainer no Navegador` (drop leading Treino de Mira; keep "Flick Trainer"/"aim flick" in copy) |
| fps/target-acquisition | Treino de Mira Valorant - Aquisição de Alvos | Treinar Mira no Valorant | aim trainer valorant (97) | 133 exact; URL unknown | UNKNOWN | retarget: `Treinar Mira no Valorant: Aquisição de Alvos` (treino de mira valorant = barrier) |
| fps/angle-hold-trainer | Treino de Mira \| Posicionamento de Mira | Posicionamento de Mira | crosshair placement, segurar ângulo | 0 (crosshair placement 0); AC none | n/a | no-demand descriptive; drop lead -> `Posicionamento de Mira: Segurar Ângulo no FPS` |
| fps/recoil-control | Controle de Recoil \| Treino de Spray FPS | Controle de Recoil | controle de spray | 0; AC controle de recoil cs2/valorant/r6 (mixed with anti-recoil hardware) | n/a | keep; FAQ should say it is a mouse-skill drill, not a macro/anti-recoil tool |
| fps/strafe-tracking | Treino de Tracking Online \| Mira em Movimento | Treino de Tracking | mira em movimento, strafe | 0 | n/a | keep |
| fps/pro-smooth-pursuit | Treino de Mira \| Tracking FPS Suave | Tracking Suave | rastreamento contínuo | 0 | n/a | drop lead -> `Tracking Suave: Siga Alvos em Curva` |
| fps/anti-strafe-jitter-duel | Treino de Mira \| Tracking Reativo & Strafe | Tracking contra Strafe ADAD | tracking reativo | 0 | n/a | drop lead |
| fps/anti-zigzag-movement-trainer | Treino de Mira \| Tracking em Zigue-Zague | Tracking em Zigue-Zague | alvos evasivos | 0 | n/a | drop lead |
| fps/micro-correction-precision | Treino de Mira \| Microajuste para Headshots | Microajuste de Mira | headshot, precisão | 0; GSC 6 clk / 27 impr pos 6.9 (indexed) | n/a | drop lead only, keep rest: `Microajuste de Mira para Headshots` |
| fps/target-prioritization | Treino de Mira \| Seleção de Alvos | Prioridade de Alvos | seleção de alvos, decisão de tiro | 0 | n/a | drop lead |
| fps/target-switching-swarm | Treino de Mira - Troca de Alvos Valorant | Troca de Alvos | target switching, múltiplos alvos | 0 | n/a | drop lead + Valorant (target-acquisition owns Valorant) -> `Troca de Alvos: Vários Alvos Rápidos` |
| fps/vertical-air-track | Treino de Mira Vertical - Tracking Aéreo | Mira Vertical | tracking aéreo | 0 | n/a | drop "Treino de" -> `Mira Vertical: Tracking Aéreo` |
| fps/180-degree-awareness | Treino de mira 180° \| Giro FPS | Giro de 180° no FPS | virada rápida | treino de mira 180 = 0; GSC 25 impr pos 6.8 (indexed) | n/a | drop lead -> `Giro de 180° no FPS: Virada e Tiro` |
| fps/flow-state | Treino de foco FPS \| Mira em flow | Treino de Foco FPS | estado de flow | 0 | n/a | keep |
| fps/instant-response | Teste de Reflexo \| Tempo de Reação FPS | Teste de Reflexo para FPS | tempo de reação no clique | GSC `teste de reflexo para fps` 10i pos 9.0 (indexed); bare teste de reflexo (209) = light-reaction | n/a | retarget: `Teste de Reflexo para FPS: Reação no Clique` (longer, page-specific phrase that already ranks) |

Outside FPS (Phase B single-line fixes, owner-approved category pass):
- motor aim-trainer `Treino de Mira e Aim Trainer Online Grátis` -> keep **Aim Trainer** (655) + aim trainer online; drop "Treino de Mira" (hub owns it): `Aim Trainer Online Grátis | Precisão do Mouse`.
- reaction market-doors `Treino de Mira: Checar Ângulos` -> drop "Treino de Mira" lead (hub owns it).

## Collisions resolved
1. "Treino de Mira" lead on 11 FPS drills + motor + market-doors -> single owner = pt FPS hub.
2. treino de mira valorant (363) = reaction barrier; target-acquisition -> treinar mira valorant (133); target-switching drops Valorant.
3. teste de reflexo (209) = light-reaction; instant-response keeps longer "teste de reflexo para fps" (already ranks pos 9).
4. aim trainer (655) = motor aim-trainer; teste de mira (268) = flick-shot.

## Kill list (Bing pt-BR exact 0, status ok)
treino de mira cs2/fps/navegador/grátis/180/e reflexo, site de treino de mira, site para treinar a mira, jogo para treinar a mira, jogo de mira online, aim trainer navegador, teste de mira mouse/valorant, teste de reflexo fps / para fps, controle de recoil (+cs2/valorant), controle de spray, recoil control, flick aim, aim flick, flick trainer, treino de flick, treino de tracking valorant, aim trainer headshot, treino de headshot, target switching, fps training, treino fps, como melhorar a mira (+valorant), melhorar mira (+valorant).
