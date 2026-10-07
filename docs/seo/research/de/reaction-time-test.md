# de / reaction-reaction-time-test — research log

Date: 2026-10-08 · Market: Germany, `de-DE` · Tools: autocomplete.py (gl=de hl=de), bing.py (de).

## Queries
- `reaktionstest` 750 / 865 — measured (Bing API)
- `reaktionszeit test` 452 / 452 — measured (Bing API)
- `reaktionstest üben` 0 exact / 115 broad — measured (Bing API)
- `reaktionstest online`, `reaktionszeit messen`, `reaktionszeit verbessern/trainieren`, `reaktionszeit test online/f1/leertaste/ampel`: 0 or null — unknown, not adopted as volume claims.

## Suggest (gl=de hl=de) — proxy
- `reaktionstest`: online kostenlos üben, mpu, üben, personenbeförderungsschein, für autofahrer, führerschein, f1, busfahrer, app, adhs, alkohol.
- `reaktionszeit`: test, formel, mensch, verbessern, trainieren, messen, monitor.
- `reaktionszeit test`: f1, online, spiel, ampel, app, lineal, kostenlos, führerschein, human benchmark, leertaste.

## Intent and SERP
- Head term is mixed: MPU, Führerschein, P-Schein, Busfahrer selection intent vs browser tool intent (see docs/seo/research/reaction-time-test-2026-09-20.md: reactiontest.net/de, neurabrain.app/de, ppfgermany.de).
- The page already qualifies itself as a visual browser drill; no medical or licence claims.

## Fix
- Meta description was 160 chars; shortened to 144 with primary phrase kept. Title, H1, 10 FAQ, JSON-LD unchanged and consistent.

## Scores (B3)
- `Reaktionstest`: demand 4, ease 2, intent fit 3. `Reaktionszeit Test`: demand 3, ease 3, intent fit 4. Decision: keep title `Reaktionstest online: Reaktionszeit in ms`.
- Trend: not available, 2026-10-08.

## Claim fix 2026-10-08
- Removed unsupported "Sub-Millisekunden" precision wording from FAQ/body (performance.now resolution is browser-dependent, about 1 ms); schema and visible text share the same source.
