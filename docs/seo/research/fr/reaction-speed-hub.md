# fr / reaction-speed hub — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Bing fr-FR (measured): `temps de réaction` 18 exact / 47 broad, `test de réaction` 17, `test de temps de réaction` 0, `jeux de réflexes` 0, `jeu de réaction` 0, `aim trainer` 1906 exact (owned by fps-tracking-trainer), `test cps` 1167 (owned by rapid-tapping). B3 for `test de réaction`: demand 1-2, intent fit 5, ease 3.
- Hub carries the measured terms in title/description and leaves the drill-specific head terms to the drill pages.

## SERP / trend
- Not captured. No trend claimed.

## Defects fixed
- Title/H1 `Tests de Réaction et Entraînement des Réflexes` → `Tests de réaction et jeux de réflexes en ligne`; description and keywords dropped "mouvements saccadiques" / "entraînement saccadique" (the saccadic drill measures click latency, not eye movement) and now lists real drills.
- FAQ answer for the starting drill used English names (Reaction Time Test, Saccadic Gallery); now French names matching the drill pages. The rest of the 10-question FAQ already hedged correctly and is unchanged.
- Shared-file edit: only the `fr:` UI line and one fr FAQ string in lib/i18n/reactionSpeedHubNative.js.

## Decision
- Keep hub, demand low.
