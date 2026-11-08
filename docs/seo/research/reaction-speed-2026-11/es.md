# Reaction speed: es (Spain cc=ES, Mexico cc=MX), 2026-11-08

Data: `es.csv`. Raw files: `_work-ptes/` (kw.jsonl, serp.jsonl, gsc.tsv, ac_es.json, ac_mx.json).
Labels: **Bing** = Bing Webmaster exact monthly impressions. **GSC** = Search Console. **proxy** = Google autocomplete (no volume).

## Demand (Bing exact)
| phrase | ES | MX | source |
|---|---|---|---|
| test de reacción | 125 | 6 | Bing 2026-10 (demand-2026-10/_work-es); Sep-04 showed ES 10 |
| tiempo de reacción | 52 (broad 76) | 9 | Bing 2026-11-08 |
| test de reflejos | 32 | 3 | Bing 2026-10 |
| every other phrase tested (24) | 0 | 0 | Bing; includes test de reacción/reflejos online, f1, valorant, tiempo de reacción promedio, juegos de reflejos, prueba de reflejos, entrenar reflejos, test de visión periférica |

- MX has effectively no Bing demand. MX test de tiempo de reacción is UNKNOWN (the 2026-10 request failed with a network error).
- The `es` locale serves both markets through a single es-ES tree. No MX-specific work is justified.
- Autocomplete (proxy, same in ES and MX) shows "test de reacción" + f1 / click / simple / gamer / visual / human benchmark, "test de reflejos" + f1 / semáforo / carnet de conducir, and "tiempo de reacción promedio de una persona / en ms".

## Competition (Bing SERP, ES)
- test de reacción: speedcheck.org (internet speed, wrong intent), dgt.es, arealme.com (click speed), wazzia.com, certimedic.es. Titles mostly do not match the query. Rated **LOW**.
- test de reflejos: muydivertido.com, es.vonvon.me, msdmanuals.com (medical), testdereflejos.onlinegratis.tv. Thin tools and quizzes. Rated **LOW**.
- tiempo de reacción: cps-check.com, humanbenchmark.com, cognifit.com, 10xhora.es, es.wikipedia.org. Informational and mixed. Rated **MEDIUM**.
- juegos de reflejos: ajedrezeureka.com, y8.com, silvergames.com, jugandoando.com.ar (game portals). Rated LOW, but the term has 0 Bing volume.
- 5 probes timed out (no captcha). Their competition is UNKNOWN.

## GSC
- ES, MX and LATAM have no Spanish-language reaction queries. The only clicks are a handful of English "reflex training" queries on the English hub. There is no baseline.

## Keyword map
| page | primary | secondary |
|---|---|---|
| visual/reaction-speed/light-reaction | test de reacción (125) | tiempo de reacción (52), test de reacción online (proxy), test de reflejos f1 (proxy) |
| reaction-speed hub | test de reflejos (32) | test de reacción, tiempo de reacción, juegos de reflejos |
| reaction-game | juego de reacción online (proxy, Bing 0) | juegos de reflejos |
| reflex-training-drill | juego de reflejos (proxy, Bing 0); previously titled "Test de Reflejos", which collided with the hub | juego de reflejos online |
| market-doors-pursuit | entrenamiento de puntería (unchanged, not measured this run) | |
| reaction-time-test (timing) | juego de sentido del tiempo (unchanged, Bing 0) | |
| others | unchanged | Bing 0 |

## KILL / do not chase (Bing 0)
- test de tiempo de reacción
- entrenamiento de reflejos
- entrenar reflejos
- prueba de reflejos
- juegos de reflejos
- test de seguimiento visual
- ejercicios para los ojos
- test de visión periférica
- tiempo de reacción promedio
- f1/valorant variants

No new pages, and no MX localization.

## Implemented
- light-reaction: new title ("Test de Reacción Online: Mide tus Reflejos en ms"), description, OG/Twitter text and 10 rewritten FAQs. These match the pt wording, are factual, and cite Kosinski 2008 only for the ~190 ms figure. Removed: the calibration claim, "20 a 30 ms", the "200–250 ms" range and all spacebar mentions (input is click/tap only). 240 Hz corrected to ~4,2 ms.
- hub (`reactionSpeedHubNative.js` es): title and H1 changed to "Test de Reflejos y Tiempo de Reacción Online", with a new description, keywords and intro lead, and FAQ items 1-3 rewritten.
- reflexTrainingDrillNative es: title, shareTitle and keywords now use "Juego de Reflejos".
- reactionGame es: keywords no longer claim "test de reacción" or "test de reflejos".
- reaction-time-test: the related anchor now reads "Test de reacción online (tiempo de reacción)".

## Caveats
- The September and October volumes for "test de reacción" ES differ (10 vs 125), so the term is volatile and its trend is unknown.
- Bing covers only about 3-4% of search, so treat these numbers as a relative index.
