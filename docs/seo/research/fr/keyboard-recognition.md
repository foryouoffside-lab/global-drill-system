# fr / keyboard-recognition — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Measured (Bing fr-FR exact): `test clavier` 2308, `test clavier azerty` 1150 (related), `test de saisie` 4730 (related), `keyboard tester` 330, `test de frappe` 310, `test touche clavier` 20, `tester clavier` 22, `test clavier en ligne` 31.
- Zero: `test temps de réaction clavier`, `test cps clavier`.
- Suggest (proxy): `test temps de réaction clavier`, `test clavier en ligne azerty`, `test vitesse clavier en ligne`.

## Intent mismatch (key finding)
- `test clavier` / `keyboard tester` intent = hardware key tester (which keys register). `test de frappe` = words-per-minute typing test. This drill is a prompted-key reaction game. Targeting those head terms would mislead searchers; not adopted.
- B3 for `test de réaction clavier`: demand 1 (Bing 0, Suggest only), ease 4, intent fit 5. Adopted as honest primary: demand not verified.

## SERP (proxy: WebSearch 2026-10-08, US-served)
- `test clavier en ligne azerty touches`: iobit.com/fr keyboard test, forum threads (cowcotland, linuxfr), onlyoffice blog on typing speed. Tool intent = key checker. Gap: none of these time reactions.

## Fixes
- Title → `Test de réaction clavier en ligne`; description rewritten.
- Direct-answer paragraph (40-60 words) added first in guide intro, stating what the tool is not.
- FAQ #8 replaced (was a generic daily-minutes tip) by the "keyboard tester vs typing test?" disambiguation; schema derives from the same array.
- Unsourced `Top 1/5/20%` labels removed.
- H1 text comes from the client dictionary fallback (no `copy` prop wired); left untouched (no *Client.js edits).

## Decision
- Keep page; SEO value is the disambiguation, not head-term capture.
