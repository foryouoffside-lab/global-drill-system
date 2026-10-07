# de / rapid-tapping — research log

Date: 2026-10-08 · Market: Germany, `de-DE` · Tools: autocomplete.py (gl=de hl=de), bing.py (de), WebSearch (US-only SERP proxy). GSC not queried.

## Queries (Bing DE, exact/broad)
- `cps test` 5644 / 5891 — measured (Bing API)
- `klicktest` 171 — measured (Bing API)
- `klicks pro sekunde` 21 — measured (Bing API)
- `cps test spacebar` 12 — measured (Bing API)
- `jitter clicking` 1 — measured (Bing API)
- `klickgeschwindigkeit test`, `klicks pro sekunde messen`, `cps test tastatur/handy/rechtsklick`, `minecraft cps test`, `butterfly clicking`, `maus klicks pro sekunde`, `klickrate test`: 0 — unknown/null, not adopted.

## Suggest (gl=de hl=de) — proxy
- `cps test`: right click, left click, mobile, keyboard, spacebar, tastatur, 1 sec, rechtsklick, handy, controller, online.
- `klicks pro sekunde`: messen, weltrekord, zähler, rekord, wie viele klicks pro sekunde, meiste klicks pro sekunde.
- `schneller klicken`: lernen, maus, minecraft.

## SERP (proxy, seen from US, German query)
- Competitors: codeitbro.com/de, coddy.tech/de, cps-test.de, keymap.io/de, jotform-hosted tools. Standard scales: 1/5/10/30/60 s modes; rating bands Exzellent >12, Gut 9-12, Durchschnitt 7-9.
- Gap: all are short fixed-window counters; none offer an endurance drill with shrinking target. Page differentiates on 45 s Klick-Ausdauer.
- Question patterns: Was ist ein CPS-Test, durchschnittliche CPS, wie klicke ich schneller, Jitter/Butterfly.

## Defects found and fixed
- Benchmark table claimed `Offizielle CPS-Rangliste`, `Top 0.1% Weltklasse`, `Top 3%`, `Top 15%`: unsupported percentiles. Replaced with qualitative labels and a note that the table is orientation, not a population norm. English tier names (Apex Tapper etc.) replaced with German labels.
- Title, description, H1 and the 10 bespoke FAQs unchanged: already match primary `CPS-Test`.

## Scores (B3)
- `CPS-Test`: demand 5, competition ease 2, intent fit 5. Decision: keep as primary.
- Trend: Trends explore not reachable, 2026-10-08.
