# fr / speed-drill — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Defect found
- Title `Test CPS | Clics par Seconde` duplicated the intent of `/fr/drills/motor/movement-speed/rapid-tapping` (the real CPS counter). This drill is a shrinking-target click game, not a CPS counter: the label misdescribed the tool and split the `test cps` cluster across two URLs.

## Queries
- `test cps` (measured, Bing fr-FR exact 1167) is owned by rapid-tapping.
- Candidate for this page: `jeu de rapidité souris` (Suggest fr: `jeu de rapidité souris`, `jeu de rapidité clavier en ligne`; proxy only). Bing fr-FR exact: `jeu de rapidité` 0, `jeu de rapidité en ligne` 0, `test de rapidité` 159 exact / 373 broad (generic, not mouse-specific). Label: demand not verified.
- B3: demand 1-2, ease 4, intent fit 4.

## SERP
- Not captured for this phrase (no usable French results beyond generic game portals). No competitor claim made.

## Decision
- Retitle to `Jeu de rapidité à la souris : cibles rapides`; add a sentence pointing to the CPS test for pure click counting; drop unsourced `Top 0,1% / 3% / 15%` labels; update French display name in `lib/i18n/drillNames.js` (fr block only) so internal anchor text no longer repeats `Test de Vitesse de Clic`.
- Page kept (D6): demand not verified.
