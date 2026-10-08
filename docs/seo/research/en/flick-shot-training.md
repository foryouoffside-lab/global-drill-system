# /drills/fps/flick-shot-training (en) - research 2026-10-08

Tooling: Bing keyword + pagequeries OK, GSC site-level queries OK (python scripts/gsc/gsc.py queries), Suggest OK. No fresh SERP capture.

## Queries
| Query | Evidence | Label |
|---|---|---|
| flick aim trainer | 32 impr, 3 clicks, pos 9.0 (site-level, 28 days) | measured (GSC, skilldrills.online) |
| aim flick | 49 impr, 2 clicks, pos 9.0 | measured (GSC) |
| flick practice / aim trainer flick / flick aim training | 7 / 16 / 11 impr | measured (GSC) |
| flick training / flick shot training / flick shot / flick trainer | 10 / 7 / 7 / 5 impr, pos 6-8.8 | measured (Bing Webmaster, own page) |
| Bing API (us): flick aim trainer 0, flick practice 0, aim flick 0, flick training 3, flick shot broad 14 | | measured (Bing keyword API) |
| flick shot trainer, flick aim training, micro flick aim trainer, aim flick practice/test, flick practice cs2/valorant | | proxy (Google Suggest us/en) |
| aim trainer (parent term) exact 8,302/mo | | measured (Bing keyword API, us) |

## Questions
how to practice flick shots; how to 45 degree flick (own Bing, pos 2.5-6); what is a good flick accuracy (client FAQ). Existing FAQ covers flick vs tracking, overshoot, wrist vs arm, practice time.

## Intent
Tool-first ("flick aim trainer"), game-adjacent (Valorant, CS2, Apex). Note `flick training` Suggest is polluted by unrelated "Flick" brands; avoid as primary.

## Competitors
Not freshly captured. Own page is at pos 9 on Google for `flick aim trainer`, so title/H1 alignment with that exact phrase is the lever.

## Entities
Flick aim, snap aim, Fitts's Law, eDPI, Valorant, CS2, Apex Legends.

## Trend note (2026-10-08)
proxy only (Suggest persistence); no launch spike observed.

## B3 scores
`flick aim trainer` demand 3 (Google impressions highest among FPS pages) / ease 3 / intent 5. `flick shot trainer` 1 / 3 / 5 (kept in description and H1 suffix).

## Decision
Title `Flick Aim Trainer: Flick Shot Practice` (was Flick Shot Trainer); H1 "Flick Aim Trainer - Flick Shot Practice". Direct-answer intro, question H2s. Replaced the "raw input with zero hardware acceleration" wording in the guide FAQ (D4).

## Limitation (not fixed)
ProFlickClient.js hardcodes ABOUT_SECTIONS and FAQ_ITEMS with "raw, unaccelerated mouse input" and "zero hardware acceleration" wording and has no copy hook for them; editing is a *Client.js change (D2 = no), so this client-side wording remains.
