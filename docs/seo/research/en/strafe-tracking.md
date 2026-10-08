# /drills/fps/strafe-tracking (en) - research 2026-10-08

Tooling: Bing keyword + pagequeries OK, Suggest OK. No fresh SERP capture.

## Queries
| Query | Evidence | Label |
|---|---|---|
| strafe tracking | 48 impr, pos 2.8 | measured (Bing Webmaster, own site) |
| strafetrack / strafetrack终极 | 68 / 153 impr, 34 clicks, pos 5.2 | measured (Bing Webmaster, own site) - brand/navigational query for a third-party tool named StrafeTrack; NOT adopted |
| aim400kg strafe tracking | 16 impr, pos 9.0 | measured (Bing, own) - names a third-party creator, not adopted |
| apex strafe trainer; counter strafe practice/trainer | 11; 10, 6 impr | measured (Bing, own) - counter-strafe is movement not tracking; not adopted as the drill does not teach counter-strafing movement |
| Bing API (us): strafe tracking 0, strafe aim 0, apex strafe trainer 0 | | measured (Bing keyword API) - undercounts own impressions |
| strafe tracking aimlabs / kovaaks / voltaic / valorant; strafe aim trainer overwatch / apex; how to track strafing targets; how to improve strafing valorant | | proxy (Google Suggest us/en) |

## Questions
how to track strafing targets; how to improve strafe tracking; what is strafe tracking (existing FAQ #1 covers).

## Intent
Tool plus how-to; game-linked (Apex, Overwatch 2, Valorant, CS2). KovaaK's/Aim Lab/Voltaic scenario names appear in Suggest: those are other products' playlists, not targeted.

## Competitors
Not freshly captured (no SERP pass). Own page already sits at pos 2.8 for `strafe tracking` on Bing.

## Entities
Strafing, ADAD, smooth pursuit (Krauzlis 2004, Rashbass 1961), Apex Legends, Overwatch 2, Valorant, CS2.

## Trend note (2026-10-08)
proxy (Suggest): no launch-driven spike seen; scenario-name queries (voltaic, kovaaks) persist.

## B3 scores
`strafe tracking aim trainer` demand 2 / ease 3 / intent 5. `strafe tracking` 2 / 3 / 4.

## Decision
Title `Strafe Tracking Aim Trainer: Reactive Aim`, description names the four games and the ADAD reversal mechanic. Direct-answer intro, question H2s. D4: replaced FAQ "raw unaccelerated input" with an honest acceleration answer; start-card subtitle and the "Hardware Raw Input" about card replaced through the `startSubtitle` and `aboutCards` copy props passed from page.js (Client.js untouched). Game-rank names removed from the tier table; tiers labelled as this drill's own scale.
