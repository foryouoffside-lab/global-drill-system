# fr / rapid-tapping — research log

Date: 2026-10-08 · Market: France, `fr-FR` (Suggest gl=fr hl=fr)

## Queries
- Primary: `test cps`. measured (Bing fr-FR exact): `cps test` 3949, `test cps` 1167, `cps` 2494, `click test` 1410, `test de clic` 344, `click speed test` 98, `compteur de clic` 273. B3: demand 4, ease 4, intent fit 5.
- Zero or null (Bing): `test cps souris`, `test cps clavier`, `test de clic par seconde` (17), `clics par seconde` (0 exact / 11 broad).
- Suggest (proxy, not volume): `test cps barre espace`, `test cps souris`, `test cps clavier`, `test cps telephone`, `test cps en ligne`, `test cps minecraft pvp`, `test de clic 10 secondes`.
- Questions to cover: c'est quoi un test CPS, quel CPS moyen, jitter / butterfly click, Minecraft PvP.

## SERP (proxy: WebSearch 2026-10-08, US-served, not Google.fr)
- Results: scrapbox page, jotform page, substack, tumblr, coddy.tech/tools/fr, a corsica news article. Thin, low-authority, mostly single-duration widgets. Gap: no 45 s endurance / peak-burst breakdown.
- Intent: tool. Benchmarks quoted: 6-9 CPS average, 12-15 CPS skilled.

## Trend
- Not captured (Trends needs a browser). Autocomplete shows steady sub-queries (espace, souris, telephone); no trend claimed.

## Defects fixed
- H1 subtitle was English (copy had no `subtitle`); added native subtitle via existing copy prop.
- Title `Test CPS | Vitesse de clic` → `Test CPS en ligne : clics par seconde`.
- Unsourced `Top 1% / 5% / 20%` percentile labels and a lactic-acid claim removed.
- Direct-answer paragraph (40-60 words) placed first in guide intro.

## Decision
- Keep page (demand measured). Same drill is cannibalised by `/fr/drills/physical/fitness/speed-drill`; see that log.
