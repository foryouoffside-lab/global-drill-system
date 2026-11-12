# es (Spain, es-ES, cc es) - COGNITIVE + MEMORY page -> primary keyword map (2026-11-12)

Status: DONE (AC 10/10, Bing 1 run 40 phrases, kw.done).

## Inputs
- AC (10 calls, _work-es/ac.txt): test de memoria, test de atención, test de concentración, tabla de schulte, test de stroop, lectura rápida, juego simon, juegos de memoria, ejercicios para el cerebro, test de dígitos.
- Bing es-ES (_work-es/kw.jsonl): canary `test de reacción` 50 / 50 -> API live, zeros are real low volume, not UNKNOWN.
- GSC 90d page level (motor-2026-11/gsc-pages-90d.csv): memory hub 128i/4c p9.09; symbol-matching 61i/3c p7.11; multi-tasking 8i p5.5; cognitive hub 5i p12.6. Query level (gsc-queries-90d.csv): ejercicios de memoria online 2i p29, test de memoria 2i p66, test de memoria online 1i p17, test de memoria a corto plazo 1i p28. Page+query pull (_work-es/gsc_pq_*.json) = 0 rows.
- serp_probe broken -> competition = GSC pos <= 10 => low, else UNKNOWN.
- Taken (registry es + visual-2026-11/es.md): test de reacción, tiempo de reacción (secondary), test de reflejos, juego de reflejos, test go/no-go, juego de memoria visual (physical complex-pattern), concentración fps, concentración en cuadrícula (visual entropic-grid; its secondary "test de concentración" must yield, see collisions).

## Measured demand (Bing exact / broad, es-ES)
| phrase | exact / broad |
|---|---|
| juegos de memoria | 164 / 430 |
| test de reacción (canary, TAKEN) | 50 / 50 |
| efecto stroop | 44 / 44 |
| test de stroop | 39 / 39 |
| test de memoria | 33 / 51 |
| lectura rápida | 18 / 18 |
| juegos de memoria online | 17 / 133 |
| juegos de concentración | 1 / 2 |
| all other 32 phrases (entrenamiento cerebral, ejercicios para el cerebro, test de concentración, test de atención/sostenida/dividida, tabla de schulte, tiempo de reacción de elección, test de símbolos y dígitos, juego simon, test de dígitos, test de memoria visual/espacial/con números/con palabras, test de corsi, test n-back ...) | 0 / 0 |

Verdict: es memory has real Bing demand (juegos de memoria family ~430 broad); cognitive demand is concentrated on Stroop (~83 combined) and lectura rápida. Everything else is 0 on Bing; AC shows Google long-tails (psicotécnico/oposiciones, d2, WAIS = mostly clinical/instrument intent).

## Page map
| page | current title | proposed primary | secondaries | evidence (Bing, GSC impr/pos, AC) | competition | action |
|---|---|---|---|---|---|---|
| cognitive (hub) | Entrenamiento cerebral y concentración | ejercicios para el cerebro online | entrenamiento cerebral, juegos de concentración | Bing 0 / 0 / 1; AC "ejercicios para el cerebro online/en linea/juegos" (most AC = physical/yoga/oxigenar = wrong intent); GSC 5i p12.6 | UNKNOWN | no-demand descriptive; optional retarget to the AC-native "ejercicios para el cerebro online", do not lead with "concentración" |
| attention/concentration-stamina | Test de Concentración \| Atención Sostenida | test de concentración | test de atención sostenida, test de concentración online | Bing 0; AC "online", "gratis", "y memoria" | UNKNOWN | keep; owns "test de concentración" (visual entropic-grid drops it as secondary) |
| attention/divided-attention | Test de Atención Dividida \| Doble Tarea | test de atención dividida | doble tarea | Bing 0 | UNKNOWN | keep (no-demand descriptive) |
| attention/multi-tasking | Test de Multitarea \| Rastreo Doble | test de multitarea | - | Bing 0; GSC 8i p5.5 | low (GSC <= 10) | keep |
| focus/concentration-grid | Tabla de Schulte online \| Rejilla de foco | tabla de schulte | tabla de schulte online, test de la tabla de schulte | Bing 0; AC online/ejercicios/juego | UNKNOWN | keep |
| focus/distraction-fighter | Test de Stroop \| Atención Selectiva | test de stroop | efecto stroop, test de stroop online | Bing 39 + efecto stroop 44; AC "test de stroop online/gratis/colores y palabras" | UNKNOWN | keep; add "efecto Stroop" to description/H2 (informational term, explain it honestly) - TOP cognitive opportunity |
| processing-speed/reaction-time | Tiempo de Reacción de Elección \| Velocidad de Decisión | tiempo de reacción de elección | velocidad de decisión | Bing 0; "test de reacción"/"tiempo de reacción" TAKEN by light-reaction | UNKNOWN | keep; never lead with "test de reacción" |
| processing-speed/rsvp-reader | Lectura Rápida Online \| Lector RSVP | lectura rápida | lectura rápida online, ejercicios de lectura rápida, palabras por minuto | Bing 18 (online 0); AC "lectura rápida online gratis", "practicar lectura rápida online", "palabras por minuto" | UNKNOWN | keep; no "curso" claims |
| processing-speed/symbol-matching | Test de Símbolos y Dígitos \| SDMT Online | test de símbolos y dígitos | SDMT online | Bing 0; GSC 61i/3c p7.11; AC "sdmt test de símbolos y dígitos" | low (GSC <= 10) | keep (no clinical claim) |
| memory (hub) | Test de Memoria Online y Entrenamiento | juegos de memoria online | juegos de memoria, test de memoria, ejercicios de memoria online | juegos de memoria 164/430, online 17/133, test de memoria 33/51; GSC hub 128i p9.09 (ejercicios de memoria online p29, test de memoria p66) | low (hub p9.1) / UNKNOWN per query | retarget: lead "Juegos de memoria online" + keep "test de memoria"; caveat: SERP for "juegos de memoria" is likely card-pairs games - we have none, so copy must describe our actual games (sequence, grid, n-back); TOP opportunity |
| short-term-memory/color-sequence | Juego Simón online \| Secuencia de colores | juego simon online | juego simon dice online, juego de memoria de colores | Bing 0 all; AC "juego simon online", "juego simon memoria", "juego simon dice online" | UNKNOWN | keep; "estilo Simon" (Hasbro trademark), no official-product claim |
| short-term-memory/digit-span | Test de dígitos online \| Memoria numérica | test de dígitos | span de dígitos, test de memoria con números, dígitos directos e inversos | Bing 0; AC "test span de dígitos", "test de dígitos directos e inversos", WAIS/WISC variants | UNKNOWN | keep; never claim WAIS/WISC equivalence |
| short-term-memory/word-recall | Test de memoria verbal online \| Palabras | test de memoria con palabras | test de memoria verbal | Bing 0; AC "test de memoria con palabras" | UNKNOWN | retarget minor: lay phrase first |
| spatial-memory/grid-memorization | Test de memoria visual online | test de memoria visual | test de memoria visual online | Bing 0; AC "test de memoria visual" (Benton = clinical, exclude) | UNKNOWN | keep; must not use "juego de memoria visual" (physical complex-pattern) |
| spatial-memory/object-location | Test de memoria espacial online | test de memoria espacial | memoria visoespacial | Bing 0 | UNKNOWN | keep |
| spatial-memory/path-tracing | Test de Corsi online \| Bloques de Corsi | test de corsi | bloques de corsi | Bing 0 | UNKNOWN | keep |
| working-memory/n-back | Test N-Back online \| Memoria de trabajo | test n-back | test de memoria de trabajo, dual n-back | Bing 0; AC "test de memoria de trabajo de n back" | UNKNOWN | keep |

## Collisions resolved
- "test de concentración": concentration-stamina primary; visual entropic-grid must drop it from secondaries (it keeps "concentración en cuadrícula").
- "test de reacción" / "tiempo de reacción" -> reaction-speed light-reaction; cognitive reaction-time keeps "tiempo de reacción de elección".
- "juego de memoria visual" -> physical complex-pattern; grid-memorization keeps "test de memoria visual".
- "juegos de memoria" (hub) vs "juego simon online" / "test de memoria visual" (drills): distinct.
- "test de memoria" stays as hub secondary only; no drill takes the bare head term.
- No two pages share a primary.

## Kill list (never target)
- test de memoria ram / pc / windows; juegos de memoria ps2/xbox/usb (hardware).
- adultos mayores / alzheimer / pfeiffer / cerad / deterioro (clinical/dementia).
- d2 / Brickenkamp / Toulouse-Piéron / BTA / CPT / caras-R / WAIS / WISC / Benton (restricted instruments; no equivalence claims).
- test psicotécnico "oficial" / DGT / oposiciones as official (practice framing only; Bing 0 anyway).
- test de concentración de espermatozoides / urinaria; test de atención al cliente.
- ejercicios para el cerebro yoga / oxigenar / respiración / acv (physical or medical intent).
- juego simon bolívar / simon says en inglés / curso lectura rápida.
