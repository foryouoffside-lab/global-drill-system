# VISUAL - es (es-ES, cc es) keyword map, Phase A (2026-11-12)

Status: COMPLETE. AC 10/10 (`_work-es/ac.txt`); Bing 1 batch, 40 rows, es-ES (`_work-es/kw.jsonl` -> `es.csv`), 40 ok, 0 errors. Canary `test de reacción` 50/50 (prior 125 / 61 / 10) -> API live, zeros are real. serp_probe 2/3 used (`_work-es/serp.log`): `búsqueda visual` timed out twice (Bing `#b_results` selector) -> no SERP data, competition UNKNOWN. GSC 90d page x query: `_work-es/gsc.tsv`.

## Headline
ES visual demand on Bing is ~0. 37/40 phrases are 0 exact. The only large number (`búsqueda visual` 19,979) is almost certainly the Bing/Google "visual search" (image-search) product, not the psychology task (pt `busca visual` = 3; that ratio makes no sense for a cognitive term). That is an inference: the SERP probe failed, so it is unverified. Our only proven rankings are GSC: strobe 26i pos 4.8, distance-judgment 5i pos 7.6. Bing covers a small share of ES search: treat it as a relative index.

## Bing es-ES non-zero
| phrase | exact / broad | note |
|---|---|---|
| búsqueda visual | 19,979 / 20,634 | likely image-search product intent (Bing Visual Search / Google Lens). SERP probe failed 2x -> UNVERIFIED. Do not make it the primary of the drill on this number alone |
| test de reacción | 50 / 50 | canary; TAKEN by light-reaction (reaction pass) |
| percepción visual | 5 / 5 | AC = psychology/Frostig/DTVP tests (clinical-academic) |
| juego de encontrar objetos | 0 / 61 | hidden-object game intent |

## GSC (90d, es visual URLs)
- strobe-prediction-pursuit: `entrenamiento estroboscópico` 1c / 26i pos 4.8 (Bing 0 exact; Google demand real). Proven beatable.
- distance-judgment: `percepción de profundidad test` 5i pos 7.6, `percepción profunda test` 2i pos 6.0, `test de profundidad visual online` 1i pos 2.0 (Bing 0 for all). AC confirms `percepción de profundidad test` / `... prueba`.
- visual hub + strobe: `skilldrills online` (brand) only.

## Keyword map
| page | current title | proposed primary | secondaries | evidence (Bing, GSC, AC) | competition note | action |
|---|---|---|---|---|---|---|
| visual (hub) | Test de Agudeza Visual & Percepción | ejercicios de percepción visual online | búsqueda visual, percepción de profundidad, atención visual | percepción visual 5; test de visión 0, test de visión online 0, entrenamiento visual 0; AC test de visión = optician/DGT/Ishihara | n/a | retarget: "Agudeza Visual" = optician acuity exam, factually wrong for the hub (no eye exam here) |
| visual-tracking (hub) | Seguimiento Visual & Visión Dinámica Online | seguimiento visual online | juegos de seguimiento visual, ejercicios de seguimiento visual | seguimiento visual 0, juegos de seguimiento visual online 0; AC `ejercicios de seguimiento visual para adultos`, `juegos seguimiento visual` | n/a | retarget: drop "Visión Dinámica" (TAKEN: reaction visual-tracking-speed-test `Test de visión dinámica con objetivos móviles`) |
| depth-perception/distance-judgment | Test de percepción de profundidad online | percepción de profundidad test | percepción de distancia, test de profundidad visual online | Bing 0 (4 variants); GSC 5i pos 7.6 + 2i pos 6.0 + 1i pos 2.0; AC `percepción de profundidad test/prueba` | proven beatable (GSC pos <=10) | keep; copy must say screen-based distance-judgment practice, not stereopsis/clinical exam |
| reaction-speed/go/no-go | Test Go/No-Go online gratis \| Control inhibitorio | test Go/No-Go (TAKEN reaction pass) | control inhibitorio | reaction-2026-11 | - | keep |
| reaction-speed/light-reaction | Test de Reacción Online: Mide tus Reflejos en ms | test de reacción (TAKEN reaction pass) | tiempo de reacción | 50 today (125 / 61 earlier) | LOW (reaction es.md SERP) | keep |
| tracking-accuracy/moving-target | Seguimiento Visual \| Objetivo Móvil | predicción de trayectoria de objetivo móvil | objetivo que acelera | seguimiento de objetivos en movimiento 0; "disparar a objetivos en movimiento" TAKEN (reaction fps-tracking-trainer) | - | retarget (no-demand descriptive): "Seguimiento Visual" belongs to the visual-tracking hub; strip "visión dinámica" keyword |
| tracking-accuracy/multiple-targets | Seguimiento de Múltiples Objetos \| MOT | seguimiento de múltiples objetos | MOT, test MOT | 0 | - | keep (no-demand descriptive; term is accurate) |
| tracking-accuracy/pursuit-tracker | Seguimiento Ocular \| Persecución Visual | persecución con el cursor | mantener el cursor sobre el objetivo | seguimiento ocular 0; juego de seguir el punto 0 | - | retarget: drill scores the cursor, not the eyes ("Seguimiento Ocular" implies eye tracking) |
| visual-recognition/entropic-grid | Concentración en Cuadrícula \| Escaneo Visual | concentración en cuadrícula | escaneo visual, test de concentración visual (AC) | test de concentración online 0; test de atención 0 / online 0 / d2 0 / al detalle 0 / visual 0; AC d2, Toulouse, BTA = clinical/oposiciones tests | n/a | keep (no-demand descriptive). Do NOT claim d2/Toulouse/psicotécnico (named clinical tests) |
| visual-recognition/rhythm-anomaly | Discriminación Temporal \| Ritmo Visual | encuentra la celda fuera de ritmo | discriminación temporal visual | juego de encontrar anomalías 0 | - | keep (no-demand descriptive) |
| visual-recognition/visual-search | Búsqueda Visual \| Atención Selectiva | búsqueda visual | juego de encontrar la letra, tarea de búsqueda visual | búsqueda visual 19,979 (intent unverified, likely image search); juego de encontrar la letra 0 | UNKNOWN (probe failed) | keep primary (accurate term, no cost); do not expect the 19,979. Drop "Atención Selectiva" (cognitive Stroop owns it, same as pt) |
| visual-tracking/constant-slow-pursuit | Ejercicio de Seguimiento Suave | ejercicio de seguimiento lento constante | seguimiento visual lento | AC `ejercicios de seguimiento visual para adultos`; prior 0 | - | retarget (no-demand descriptive): "seguimiento suave" = fps pro-smooth-pursuit secondary (fps-2026-11/es.md) |
| visual-tracking/directional-chaos-pursuit | Seguimiento ocular con cambios de dirección | seguimiento con cambios de dirección | - | not measured (variant) | - | keep (already distinct from dynamic-evasion) |
| visual-tracking/dynamic-evasion-pursuit | Seguimiento Ocular Reactivo \| Objetivo Móvil | objetivo que cambia de dirección sin aviso | seguimiento reactivo | not measured | - | retarget (descriptive): "Objetivo Móvil" duplicates moving-target |
| visual-tracking/ghosting-suppress-pursuit | Test de Ghosting del Monitor | seguimiento con imágenes fantasma | ignorar rastros fantasma | test de ghosting 0, ghosting monitor 0 (es-ES) | - | retarget: title is factually wrong (drill draws ghost images; it is not a monitor test). In ES the hardware term has 0 Bing volume, so the retitle costs nothing |
| visual-tracking/infinity-pursuit | Ejercicio Ocular en Figura Ocho | ejercicio ocular en ocho | - | ejercicios oculares 0, ejercicios para la vista 0 (AC = medical) | - | keep; no eyesight claims |
| visual-tracking/momentum-teleport-pursuit | Seguimiento de Blanco Teletransportado | blanco teletransportado | - | not measured | - | keep |
| visual-tracking/peripheral-ping-pursuit | Fijación Central y Visión Periférica | fijación central y visión periférica | visión periférica ejercicios (AC) | test de visión periférica 0 (reaction es); AC = medical symptoms (borrosa, ondulante) | - | keep; no medical claims |
| visual-tracking/predictive-pursuit | Seguimiento ocular predictivo | seguimiento predictivo | - | not measured | - | keep |
| visual-tracking/sine-wave-pursuit | Seguimiento ocular sinusoidal | trayectoria sinusoidal | - | not measured | - | keep |
| visual-tracking/spatial-shift-pursuit | Seguimiento visual con cambio espacial | cambio espacial del objetivo | - | not measured | - | keep |
| visual-tracking/split-screen-tracking | Seguimiento visual en pantalla dividida | pantalla dividida | - | not measured | - | keep |
| visual-tracking/staircase-step | Seguimiento ocular vertical | seguimiento vertical en escalera | - | not measured | - | keep |
| visual-tracking/strobe-prediction-pursuit | Entrenamiento visual estroboscópico | entrenamiento estroboscópico | visión estroboscópica | Bing 0 (+ gafas estroboscópicas 0); GSC 26i pos 4.8, 1 click | proven beatable (GSC pos 4.8) | keep - best ES visual page; consider exact "Entrenamiento Estroboscópico" at title start |
| visual-tracking/triangular-pursuit | Seguimiento visual triangular | trayectoria triangular | - | not measured | - | keep |
| visual-tracking/zig-zag-path-pursuit | Seguimiento visual en zigzag | trayectoria en zigzag | - | not measured | - | keep |

## Collisions resolved
- "Visión Dinámica": visual-tracking hub (+ keywords on moving-target, directional-chaos, dynamic-evasion) vs reaction visual-tracking-speed-test (`Test de visión dinámica`) -> reaction keeps it; strip from all visual pages.
- "Seguimiento Visual": hub phrase also leads moving-target title -> owned by visual-tracking hub; moving-target retargeted.
- "Objetivo Móvil": moving-target vs dynamic-evasion -> moving-target keeps; dynamic-evasion goes descriptive.
- "Seguimiento Suave": constant-slow-pursuit vs fps pro-smooth-pursuit secondary -> fps keeps; constant-slow becomes "seguimiento lento constante".
- "Atención Selectiva": visual-search vs cognitive Stroop -> Stroop keeps it.
- "búsqueda visual" -> visual-search only; hub uses it only as a secondary.
- Avoided TAKEN: test de reacción / tiempo de reacción (light-reaction), test de reflejos (reaction hub), disparar a objetivos en movimiento (fps-tracking-trainer), Ejercicios Sacádicos (saccadic), test de seguimiento del ratón (motor tracing), Smooth Tracking / seguimiento suave (fps).

## Kill list (Bing es-ES 0 exact, 2026-11-12)
test de visión, test de visión online, test de visión espacial, test de visión estereoscópica, entrenamiento visual, entrenamiento visual online, entrenamiento visual deportivo, entrenamiento visual por ordenador, juegos de seguimiento visual online, seguimiento visual, test de percepción visual, percepción de profundidad, percepción de profundidad test, test de profundidad, test de percepción de profundidad, test de atención, test de atención online, test de atención d2, test de atención d2 online, test de atención al detalle, test de atención visual, juegos de atención, test psicotécnico online, juego de encontrar objetos (exact), juego de encontrar anomalías, juego de encontrar la letra, seguimiento de múltiples objetos, seguimiento ocular, entrenamiento estroboscópico, gafas estroboscópicas, test de ghosting, ghosting monitor, ejercicios oculares, ejercicios para la vista, seguimiento de objetivos en movimiento, juego de seguir el punto, test de concentración online.
Note: Bing 0 does not mean Google 0. `entrenamiento estroboscópico` and `percepción de profundidad test` are 0 on Bing but carry real GSC impressions.

## Decisions needed
1. ghosting-suppress-pursuit: retitle off "Test de Ghosting del Monitor" (false claim; 0 ES Bing demand, so nothing is lost).
2. Visual hub: drop "Test de Agudeza Visual" (optician-exam claim).
3. visual-tracking hub: drop "Visión Dinámica" (reaction collision); it ranks for nothing in ES GSC, so the risk is low.
4. `búsqueda visual` 19,979: unverified intent. Re-probe in a later session (1 probe left) before anyone builds copy around it.
