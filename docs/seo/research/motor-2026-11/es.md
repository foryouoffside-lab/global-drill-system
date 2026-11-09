# MOTOR category: Spain (es, es-ES, cc=es), 2026-11-09

Status: COMPLETE. Bing 39/40 `ok` + 1 error (`juego de pulso online` = UNKNOWN, not retried; 1 run, es-ES), autocomplete 10/10, SERP probes 3/3 (all timed out = UNKNOWN), GSC read-only. Raw: `_work-es/` (gsc_es_motor_pq.json, ac.txt, kw.tsv, kw.jsonl, serp.tsv, serp.jsonl). Rows: `es.csv`.

## Inputs
- GSC 90d page level (gsc-pages-90d.csv): `/es/drills/motor` 8 clk / 86 impr pos 7.3; `/es/drills/motor/hand-eye-coordination/aim-trainer` 2 / 65 pos 8.9; steady-hand 0 / 1 pos 40. Other es motor pages 0.
- GSC page x query (`_work-es/gsc_es_motor_pq.json`, 8 rows, most impressions anonymised): hub = test de velocidad de cliqueo 1i/1c pos 2, prueba de cliqueo 1i pos 1, test de cliqueo 1i pos 1, ejercicios de mouse 1i pos 11, test de puntería 1i pos 4; aim-trainer = mejorar aim online 1c pos 8, aim training 1i, punteria practicar 1i. Read: the hub ranks for CPS-type queries ("cliqueo" = LatAm wording) because rapid-tapping is not indexed/ranking.
- Prior Bing es-ES: `aim trainer` 487/685 (fps-2026-11), `aim test` 43/47 (TAKEN fps flick-shot), `test de puntería` 29 (fps flick-shot secondary), `aim trainer online` 7/9, `test de cps` 29/29 (2026-10-08), `test de reacción` 125 (TAKEN light-reaction), `tiempo de reacción` 52/76. All demand-2026-10 es/mx motor phrases = nodata (UNKNOWN).
- TAKEN (fps es): Entrenamiento de Puntería FPS (hub, + aim training), Aim Test (flick-shot, + test de puntería), Aim Trainer Valorant, Colocación de Mira, Control de Retroceso, Tracking de Strafe, Smooth Tracking, Tracking contra Strafe ADAD, Tracking en Zigzag, Microajustes de Puntería, Prioridad de Objetivos, Cambio de Objetivos, Puntería Vertical, Giro de 180° en FPS, Concentración FPS, Tiempo de Reacción en FPS. Motor aim-trainer owns bare `aim trainer` + `aim trainer online`.
- TAKEN (reaction es): Test de Reflejos (hub), Test de Reacción (light-reaction), test Go/No-Go + control inhibitorio, parar el cronómetro a ciegas, disparar a objetivos en movimiento, Limpiar ángulos en FPS, Ejercicios Sacádicos Online.
- Out-of-category: `/es/drills/physical/fitness/speed-drill` title `Test de Clic Rápido: Objetivos que se Encogen` (already honest; watch `test de clics` overlap).
- Drill mechanics: same clients as ja.md/de.md (rapid-tapping = mouse/tap CPS 45 s, keys ignored; keyboard-recognition = press prompted keybind keys, not typing, not a key checker; steady-hand = wire-loop corridor; finger-sequencing = mouse clicks on path-ordered nodes).

## Autocomplete (Google Suggest gl=es hl=es, PROXY not volume; `_work-es/ac.txt`, 10/10 calls)
- `test de cps` (75): por segundo, click derecho/izquierdo, teclado, barra espaciadora, mouse, minecraft, online, gratis, check/arealme/xbit (competitor brands). Heavy NOISE: `test de personalidad CPS` (psychometric questionnaire: pdf, psicotécnico, cuestionario) -> the bare `test de cps` is partly off-intent in Spain.
- `clics por segundo` (91): clicks por segundo test/contador/medidor/promedio/record, cuántos clics por segundo (hago/es normal), test de clicks por segundo, medir clics por segundo, barra espaciadora/teclado variants (not honest: drill ignores keys).
- `test de clics` (53): test de clicks (raton, mouse, 5/10 segundos, por segundo, por minuto, rapidos, velocidad), test de clics par seconde (FR leakage).
- `test de teclado` (178): overwhelmingly key-checker / typing intent (online, español, laptop, mecánico, ghosting, key rollover, latencia, velocidad, escritura, mecanografía); drill-relevant only `test de reaccion con teclado`, `test de teclado para juegos`, `test de teclado gamer`.
- `juego del pulso` (38): physical electric wire toy dominates (casero, materiales, circuito eléctrico, alambre, chino); online slice: `juego de pulsos online`, `juego de pulso online`, `juego de pulso firme`.
- `mano firme` (80): political slogan / Destiny 2 perk noise -> unusable.
- `arrastrar y soltar` (127): software/OS/Moodle help intent; drill-adjacent only `juegos de arrastrar y soltar`, `ejercicios de arrastrar y soltar`, `arrastrar y soltar mouse` (kids/school activity framing).
- `precisión del ratón` (22): mostly noise; `test precision raton` appears under `test de ratón`.
- `test de ratón` (43): hardware-checker (hz, dpi, doble click, botones, rueda, latencia, sensor) + `test de velocidad de reacción ratón`, `test precision raton`, `test punteria raton`, `test de clicks raton`.
- `ejercicios ratón` (28): computer-literacy for adults/kids (ratoneando, manejo del raton, para niños/adultos, online, practicar raton).

## SERP (Bing cc=es, 3/3 probes used; `_work-es/serp.jsonl`)
- `test de cps`, `juego del pulso`, `test de ratón`: all three timed out (Bing result selector) = competition UNKNOWN, not retried (cap). Prior proxy (fps-2026-11 es): Spanish thin CPS/aim tool pages (cps-check.com, cpstest.click, checkcps.com, cpstest.uno, xbitlabs) rank for adjacent `test de puntería` / `aim trainer` -> CPS competition likely MEDIUM (clone tool domains with es copy).

## Bing volume (es-ES, exact/broad monthly; `_work-es/kw.jsonl`, 2026-11-09)
- CPS: `cps test` 685 / 713 (English loanword is the head term, 17x `test de cps`), `clicks por segundo` 343 / 420, `test de clicks` 49, `test de cps` 40 (29 on 2026-10-08), `test de velocidad de cliqueo` 31, `clics por segundo` 28, `test de clics` 22, `contador de clicks por segundo` 17. Spelling `clicks` beats `clics` ~12x.
- Keyboard checker: `keyboard test` 525 / 576, `test de teclado` 370 / 400, `probar teclado` 233 / 260, `keyboard tester` 213 / 222, `test de teclado online` 27 (all key-checker intent per AC) = ~1,370/mo.
- 0: every mouse-skill, pulso, arrastrar, seguimiento and keyboard-reaction phrase (kill list). Same as DE: ES demand = loanword tool names + checker terms; descriptive Spanish phrases are 0.

## Page -> primary map (one primary per page; paths under `/es/drills/`)

| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition note | action |
|---|---|---|---|---|---|---|
| motor (hub) | Precisión del ratón y puntería | Ejercicios de ratón | precisión del ratón, coordinación mano-ojo; CPS Test + Aim Trainer only as child-card anchors | ejercicios de raton / ejercicios de mouse / juegos de ratón 0; GSC 86 impr pos 7.3 (CPS queries + ejercicios de mouse 1i pos 11); AC ejercicios de raton online / practicar raton | n/a | retarget (no-demand descriptive): drop `puntería` (fps hub `Entrenamiento de Puntería FPS`). Trim keywords `entrenamiento de puntería`, `entrenador de puntería gratis`, `puntería FPS` (fps), `test CPS`, `clics por segundo` (rapid-tapping), `test de precisión del ratón` (-> precision-flick-shot), `velocidad de escritura` (dishonest: no typing drill). e.g. `Ejercicios de ratón: precisión, clics y control` |
| hand-eye-coordination/aim-trainer | Aim Trainer Online Gratis \| Precisión del Ratón | Aim Trainer | aim trainer online (7), aim trainer gratis | 487/685 (fps run); GSC 65 impr pos 8.9 | HIGH (fps-2026-11: aimtrainer.io, 3daimtrainer, HB + es clone tools) | keep; trim keywords `adquisición de objetivos` (fps target-acquisition), `puntería Valorant` (fps `Aim Trainer Valorant`), `puntería CS2`, `entrenamiento de flick` (fps flick-shot), `puntería FPS` |
| hand-eye-coordination/drag-and-drop | Prueba de arrastre \| Precisión del ratón | Prueba de arrastrar y soltar | juego de arrastrar y soltar con el ratón | juegos/ejercicios de arrastrar y soltar 0; AC = Moodle/OS help intent | n/a | keep (no-demand descriptive); spell out `arrastrar y soltar` in title; drop `Precisión del ratón` suffix (hub/precision-flick) |
| hand-eye-coordination/precision-flick-shot | Entrenamiento de flick \| Test de puntería | Test de precisión del ratón | precisión al centro del objetivo, test precision raton | test de precisión del ratón 0, test precision raton 0; AC test precision raton (under `test de ratón`) | n/a | retarget: `flick` + `Test de puntería` collide with fps flick-shot (`Aim Test: Test de Puntería con Flicks`). e.g. `Test de precisión del ratón: acierta en el centro`. Trim keywords `entrenamiento de puntería`, `test de puntería FPS`, `adquisición de objetivos`, `microajustes de mira` (fps micro-correction), `puntería para Valorant/CS2`, `flick shot gratis` |
| movement-speed/finger-sequencing | Puntería secuencial \| Cambio de objetivos | Clics en orden | secuencia de objetivos, ruta de clics | clic en orden 0 | n/a | retarget (no-demand descriptive): `Cambio de objetivos` = fps target-switching-swarm primary; `aim trainer español`, `entrenamiento de puntería`, `test de velocidad de clic`, `objetivos numerados` (no numbers drawn) must go. e.g. `Clics en orden: sigue la secuencia de objetivos` |
| movement-speed/keyboard-recognition | Test de Reacción con Teclado | Test de reacción con teclado | teclas de juego (keybinds), WASD | test de reaccion con teclado 0, test de reacción teclado 0; AC `test de reaccion con teclado` exists | n/a | keep; trim keywords `latencia de teclado` (implies hardware latency: dishonest), `test de reflejos teclado` (reaction hub `Test de Reflejos`), `test de velocidad de teclado`, `test de teclas online` (checker intent). Do NOT target `test de teclado` 370 / `keyboard test` 525 / `probar teclado` 233. Primary contains `test de reacción` (light-reaction, 125); `con teclado` keeps it distinct |
| movement-speed/rapid-tapping | Test de CPS \| Clics por segundo | CPS Test | clicks por segundo (343), test de clicks (49), test de CPS (40), test de velocidad de cliqueo (31), contador de clicks por segundo (17) | 685/713; GSC 0 on URL (hub absorbs CPS queries, pos 1-2) | UNKNOWN (probe timeout); proxy MEDIUM (es clone tool domains) | retarget order: `CPS Test: Clicks por Segundo en 45 s` (loanword first, `clicks` spelling). Keep `jitter click` / `butterfly click` / `Minecraft PvP CPS` only if copy explains them honestly; no spacebar/teclado variants (drill ignores keys). Avoid bare `test de cps` lead: AC shows psychometric `test de personalidad CPS` noise |
| precision-control/steady-hand | Juego del Pulso Online \| Test de Mano Firme | Juego del pulso online | juego de pulso firme, mano firme | juego del pulso 0, juego de pulso 0, juego de pulso firme 0, juego de pulso online UNKNOWN (API error); AC online slice exists; `mano firme` AC = political/Destiny noise | n/a | keep (no-demand descriptive) |
| precision-control/tracing | Test de seguimiento del ratón \| Trazado | Test de seguimiento del ratón | seguir la ruta con el cursor | 0 | n/a | keep (no-demand descriptive); avoid `tracking` alone (fps Smooth/Strafe Tracking) |

## Collisions resolved
1. precision-flick-shot `Entrenamiento de flick | Test de puntería` vs fps/flick-shot-training (`Aim Test` + `test de puntería`) -> motor moves to `Test de precisión del ratón`.
2. finger-sequencing `Cambio de objetivos` vs fps/target-switching-swarm primary `Cambio de Objetivos` -> finger-sequencing becomes `Clics en orden`.
3. Hub `puntería` / keyword `entrenamiento de puntería` vs fps hub `Entrenamiento de Puntería FPS` -> hub becomes `Ejercicios de ratón`.
4. Hub keyword `test de precisión del ratón` -> precision-flick-shot only. Hub keywords `test CPS`, `clics por segundo` -> rapid-tapping only (hub currently ranks pos 1-2 for cliqueo queries; link hub card to rapid-tapping with anchor `CPS Test`).
5. aim-trainer keywords `adquisición de objetivos`, `puntería Valorant` -> fps target-acquisition (`Aim Trainer Valorant`); trimmed.
6. keyboard-recognition keyword `test de reflejos teclado` vs reaction hub `Test de Reflejos` -> trimmed.
7. OUT OF SCOPE, watch: `/es/drills/physical/fitness/speed-drill` `Test de Clic Rápido` (honest: shrinking targets) overlaps `test de clics` (22) lexically; keep it off `clicks por segundo` / `CPS`.

## Kill list (Bing es-ES exact 0, status ok)
test de clicks por segundo, test de clics por segundo, medir clicks por segundo, test de velocidad de clicks, test de cliqueo, test de click raton, test de reaccion con teclado, test de reacción teclado, test de teclas, test de ratón, test de raton online, test precision raton, test de precisión del ratón, test punteria raton, ejercicios de raton, ejercicios con el raton, ejercicios de mouse, ejercicios raton online, juegos de ratón, juego del pulso, juego de pulso, juego de pulso firme, juegos de arrastrar y soltar, ejercicios de arrastrar y soltar, test de seguimiento del ratón, clic en orden.
Measured but off-intent (skip): keyboard test 525, test de teclado 370, probar teclado 233, keyboard tester 213, test de teclado online 27.

## Decisions needed
- Keyboard tester (ES ~1,370/mo exact). Needs a real key-checker tool; keyboard-recognition must not claim it. Same decision as de/ja.
- Hub retarget to `Ejercicios de ratón` may lose the accidental pos 1-2 on cliqueo queries; acceptable only if rapid-tapping gets indexed and linked from the hub.

## Unknown / not measured
- All 3 SERPs (timeouts). `juego de pulso online` (API error). es-MX not measured (es-ES only per brief). Trend not run.
