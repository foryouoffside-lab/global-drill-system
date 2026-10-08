# en / steady-hand — research log

Date: 2026-10-08 · Route: `/drills/motor/precision-control/steady-hand` · Market: US / en

## Tools
- Suggest (`autocomplete.py`, us/en, expanded): worked. Bing `keyword` (us): worked. GSC `sites`: worked, `pages`/`queries` 90d pulled.
- WebSearch is a generic search index, not a live SERP: no PAA or ranking order. SERP-derived notes below are `proxy (web search results)`.
- Google Trends not captured (no browser session in this run).

## Queries
| Phrase | Evidence |
|---|---|
| steady hand game | Bing exact 0 / broad 0 `measured (Bing us)`; Suggest returns ~120 expansions, dominated by DIY: circuit, kit, materials, school project, ks2, buzzer, arduino `proxy (Google Suggest)` |
| mouse precision test | Bing exact 10 `measured (Bing us)` |
| steady hand test / mouse steadiness test / cursor control test / steady hand game online / wire loop game online | Bing 0 / 0 `measured (Bing us)`; 0 means not reported, not proven zero |
| steady hand test game, steady hand challenge game, how does a steady hand game work, what is a steady hand game | Suggest only `proxy (Google Suggest)` |

GSC (90d): no impressions recorded for this English URL; `es` variant shows 1 impression at position 40. Nothing to ground a volume claim.

## Intent
- Head term `steady hand game` is split: physical/DIY buzzer-wire project (school, kits) vs on-screen tool. The page serves the tool intent and must say so; PAA-style questions `what is a steady hand game` and `how does a steady hand game work` are DIY-flavoured and answerable with a bridge sentence.

## Competitors (proxy, web search results)
- Tool pages for mouse steadiness/precision: SteadyHandClickTest, PrecisionPointer, BelAim (itch.io), Steady Ring: Wire Balance; roundups such as Genbeta "juegos online que ponen a prueba tu pulso con el ratón".
- Gap: none of the sampled pages explain the physics (Steering Law), corridor scaling, or how it differs from the physical buzzer game.

## Entities
Steering law (Accot & Zhai 1997), Woodworth 1899, fine motor skill (Wikipedia sameAs already present), tremor.

## Scores (B3, 1-5)
- `steady hand game`: demand 2 (suggest-rich, Bing 0), ease 3, intent fit 4 (split intent). `mouse precision test`: demand 2 (Bing 10), ease 2, fit 4.
- Decision: keep title/H1 `Steady Hand Game | Mouse Precision Test`; no keyword change (no evidence for a better phrase).

## Changes
- Added 54-word direct-answer paragraph as the first, non-collapsible intro paragraph; intro heading now `What is the steady hand game, and how is it measured?`.
- Added FAQ `How is this different from the buzzer wire steady hand game?` (bridges DIY intent); schema derives from the same array, so visible text equals JSON-LD.

## Trend note
Not captured 2026-10-08 (no Trends access); no trend claim made.
