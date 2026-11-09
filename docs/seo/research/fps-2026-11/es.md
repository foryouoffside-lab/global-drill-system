# FPS category - es (Spain es-ES; MX es-MX cross-check), 2026-11-08

Status: COMPLETE 2026-11-09 (coordinator finished after agent died).

## Inputs reused
- Bing exact/broad (demand-2026-10/_work-es/vol2.jsonl): `aim trainer` ES 405/595, MX 23/40.
- Bing 0 (reaction-speed-2026-11/_work-ptes/kw_p2_es.jsonl, ES): entrenar puntería, entrenar punteria online/valorant, entrenar aim (+valorant), mejorar puntería (+valorant), juegos para entrenar punteria, tracking aim trainer, juego de puntería online, mejorar reflejos (+valorant). `aim tracking` = 2.
- GSC 90d (_work-es/gsc.tsv): /es/drills/fps hub 1 click / 7 impr; flick-shot 1/32 (pos 6.6); vertical-air-track 0/15; target-switching 0/6; motor aim-trainer 2/65. No Spanish FPS query >1 impression. No baseline.

## Autocomplete (Google Suggest gl=es hl=es, PROXY, 6 calls; raw `_work-es/ac_es.txt`)
- aim trainer: online, valorant, 3d, cs2, fortnite, overwatch, mobile, test, pc, browser, benchmark.
- entrenar punteria: raton, online, valorant, fortnite, mouse, juegos para entrenar punteria.
- control de retroceso: vertical / lateral / horizontal (cod mobile, warzone, bloodstrike), que es el control de retroceso. Mixed with non-gaming noise (esfinteres, word).
- tracking aim: trainer, training, web, practice, test, trainer online.
- flick: no gaming suggestions (football coach Hansi Flick dominates) -> Spanish users do not search bare "flick".

## SERP (Bing, es-ES, 3 probes; raw `_work-es/serp.jsonl`)
- aim trainer: aimtrainer.io, 3daimtrainer, humanbenchmark, aiming.pro, cps-check.com (es), aimtrainer.io/tracking, theaimtrainer.vercel.app, KovaaK's Steam, cpstest.click (es). Dedicated exact-match domains + HB. Rated HIGH. Two Spanish-language thin tool pages (cps-check, cpstest.click) rank, so a native es page can enter top 10.
- control de retroceso, entrenamiento de puntería: probe timeout (no captcha). Competition UNKNOWN (cap reached, not retried).

## Bing volume (es-ES, `_work-es/kw.jsonl`, `es.csv`; 40/40 ok, 1 run)
- aim trainer 487/685 · aim test 43/47 · aim training 31/35 · test de puntería 29 · aim trainer 3d 19 (our drills are 2D: do not target) · aim trainer valorant 8/9 (a duplicate row read 0 -> volatile) · aim trainer online 7/9 · smooth tracking 1.
- 0: every Spanish-native phrase (entrenamiento/practicar/juego de puntería, colocación de mira, control de retroceso, microajustes, test de reflejos fps, tiempo de reacción fps) and every mechanic loanword (flick, crosshair placement, pre aim, recoil, target switching, vertical aim, 180).
- Index (2026-11-09): indexed hub, vertical-air-track, target-switching, flick-shot (GSC 32 impr pos 6.6), instant-response, flow-state.

## Page -> primary map (paths under /es/drills/)

| page | current title | proposed primary | secondaries | evidence | competition | action |
|---|---|---|---|---|---|---|
| fps (hub) | Entrenamiento de puntería FPS | Entrenamiento de Puntería FPS | aim training (31), entrenar puntería | aim training 31; native 0; GSC 7 impr | HIGH for aim training | keep; add `Aim Training` in H1/description |
| fps/flick-shot-training | Aim Trainer - Entrenamiento de puntería | Aim Test | test de puntería (29), flicks | 43/47; GSC 32 impr pos 6.6 (indexed) | MEDIUM (HB + cps sites with es pages) | retarget: `Aim Test: Test de Puntería con Flicks` |
| fps/target-acquisition | Aim Trainer Online - Adquisición de objetivos | Aim Trainer Valorant | adquisición de objetivos, primer disparo | 8/9 (volatile) | UNKNOWN | retarget: `Aim Trainer para Valorant: Adquisición de Objetivos` (aim trainer online -> motor) |
| fps/angle-hold-trainer | Aim Trainer \| Colocación de Mira | Colocación de Mira | crosshair placement, mantener el ángulo | 0 | n/a | drop lead |
| fps/recoil-control | Control de Retroceso \| Entrenamiento FPS | Control de Retroceso | control de retroceso vertical/horizontal (AC) | 0; AC strong | n/a | keep |
| fps/strafe-tracking | Tracking Aim Trainer: Strafe y Puntería FPS | Tracking de Strafe | puntería en movimiento | tracking aim training 0 | n/a | drop "Aim Trainer" -> `Tracking de Strafe: Puntería en Movimiento` |
| fps/pro-smooth-pursuit | Entrenamiento de Puntería \| Tracking FPS | Smooth Tracking | seguimiento suave | 1 | n/a | retarget (hub owns entrenamiento de puntería) -> `Smooth Tracking: Seguimiento Suave en FPS` |
| fps/anti-strafe-jitter-duel | Aim Trainer \| Tracking Reactivo & Strafe | Tracking contra Strafe ADAD | tracking reactivo | anti strafe 0 | n/a | drop lead |
| fps/anti-zigzag-movement-trainer | Aim Trainer \| Tracking en Zigzag | Tracking en Zigzag | objetivos evasivos | 0 | n/a | drop lead |
| fps/micro-correction-precision | Aim Trainer \| Microajustes de Puntería FPS | Microajustes de Puntería | headshots, precisión | 0 | n/a | drop lead |
| fps/target-prioritization | Aim Trainer \| Selección de Objetivos | Prioridad de Objetivos | selección de objetivos | 0 | n/a | drop lead |
| fps/target-switching-swarm | Aim Trainer Valorant - Cambio de objetivos | Cambio de Objetivos | target switching, varios objetivos | 0; indexed | n/a | drop "Aim Trainer Valorant" (target-acquisition owns) -> `Cambio de Objetivos: Target Switching en FPS` |
| fps/vertical-air-track | Entrenador de Puntería Vertical - Tracking | Puntería Vertical | tracking aéreo | 0; GSC 15 impr pos 9.7 (indexed) | n/a | light: `Puntería Vertical: Tracking Aéreo` |
| fps/180-degree-awareness | Entrenamiento giro 180° \| Puntería FPS | Giro de 180° en FPS | giro rápido | 0 | n/a | keep primary; drop trailing "Puntería FPS" |
| fps/flow-state | Concentración FPS \| Entrenamiento de Flow | Concentración FPS | estado de flow | 0; indexed | n/a | keep |
| fps/instant-response | Test de Reflejos \| Tiempo de Reacción FPS | Tiempo de Reacción en FPS | reacción al clic | test de reflejos = es reaction hub primary | n/a | retarget: `Tiempo de Reacción en FPS: Test de Clic` |

Outside FPS: motor aim-trainer `Entrenamiento de puntería | Aim Trainer` -> owns **Aim Trainer** (487) + aim trainer online; drop the leading "Entrenamiento de puntería" (hub owns it): `Aim Trainer Online | Precisión con el Ratón`.

## Collisions resolved
1. "Aim Trainer" lead on 9 FPS drills -> motor owns head term; FPS drills drop it (target-acquisition keeps the Valorant phrase only).
2. "Entrenamiento de puntería" on hub + motor + pro-smooth -> hub only.
3. test de reflejos = reaction hub; instant-response -> tiempo de reacción en FPS.
4. Valorant only on target-acquisition.

## Kill list (Bing es-ES exact 0)
aim trainer gratis/navegador, entrenamiento de puntería, practicar puntería, juego de puntería, entrenar punteria raton, flick aim trainer, flick shot, aim flick, 180 aim trainer, crosshair placement, colocación de mira, pre aim, anti strafe, microajustes, tracking aim training, control de retroceso (+vertical), recoil control, spray control, recoil trainer, target switching, target acquisition, vertical aim, test de reflejos fps, tiempo de reacción fps.
