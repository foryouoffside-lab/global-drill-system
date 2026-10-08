# fr / color-sequence — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Bing fr-FR (measured, `bing.py keyword <phrase> fr`): `jeu simon` 28 exact, `memory jeu` 119, `test de mémoire` 13 exact / 101 broad, `jeu de mémoire` 0 exact / 5 broad, `simon jeu en ligne` 0. B3 for `jeu simon en ligne`: demand 2, ease 4, intent fit 5.
- Suggest (proxy, gl=fr hl=fr): `jeu simon` → original, classique, année 80, en ligne, en ligne gratuit, hasbro; `jeu de mémoire couleurs` → couleur en ligne, 4 couleurs. Intent is a mix of physical toy and online play; "en ligne" qualifier keeps the page on the online intent.
- Note: `bing.py keyword "<phrase>" fr fr` returns 0 for everything (language arg breaks the call); use `... fr` only.

## SERP / trend
- Not captured (no Google.fr SERP or Trends access). No trend claimed.

## Defects fixed
- FAQ, HowTo, guide, rules and table copy had dropped apostrophes and accents (`Qu est-ce`, `Regles`, `Memoire`); restored.
- Fabricated `Tier 1 Grand Maitre / Elite` ladder, "centile d'élite", "double synaptic activity" and "reduces everyday forgetting" claims removed or softened; benchmark note now says editorial markers, not population stats.
- 40-60 word direct answer placed first in the guide intro. Schema descriptions rewritten to match visible text.
- Title kept (`Jeu Simon en ligne | Mémoire des couleurs`): primary is the only measured phrase.

## Decision
- Keep page. Demand low but measured; H2 `Color Sequence Pro` is English from the client component (D2, left).
