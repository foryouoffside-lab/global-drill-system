# de / motor hub — research log

Date: 2026-10-08 · Market: Germany, `de-DE`

## Evidence
- Bing DE exact (measured): `cps test` 5644, `klicktest` 171, `klicks pro sekunde` 21.
- Suggest `maus präzision` (proxy): maus präzision testen, verbessern. `tastatur reaktionszeit` (proxy): test, messen.

## Defects found
- Rendered German hub showed English headings `Motor precision drills`, `Motor Training Domains`, `Kinematics & Motor Performance Specifications` and English spec card text: the `de` block of lib/i18n/dictionaries.js lacked `hubs.motor.drillsHeading/domainsHeading/specsHeading/spec1-3/startCta`.
- FAQ answer said `Sub-Millisekunden-Auflösung von 0,1 ms` (unsupported precision claim).
- Description 108 chars, thin.

## Fix
- Added the German `hubs.motor.*` keys (lib/i18n/dictionaries.js, de motor block only).
- FAQ rewritten to `browserabhängige Auflösung von etwa 1 ms` (visible FAQ and JSON-LD share the same source, verified).
- Description extended with `CPS-Test` and `Ohne Anmeldung` (3 occurrences in page metadata).

## Not fixed
- `Häufig Gestellte Fragen` capitalisation comes from shared `faqTitle`; left as is.

## Scores (B3)
- `CPS-Test` hub lead: demand 5, ease 2, intent fit 4.
- Trend: not available, 2026-10-08.
