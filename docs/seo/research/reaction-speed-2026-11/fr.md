# Reaction-speed: France (fr, cc=FR), 2026-11-08

Data: `_work-defr/kw.jsonl` + `kw2.jsonl` (Bing exact/broad, measured), `serp.jsonl` (Bing SERP cc=fr), `ac.txt` (Google autocomplete gl=fr), GSC 90d country=fra. Table: `fr.csv`.

## Verdict
French reaction demand is confirmed near zero. The largest phrase in France is the ENGLISH `reaction time test` (639). The best native phrase is `test de reflexe` (51). fr edits are deliberately minimal: two pages retargeted, the rest untouched.

## Measured demand (Bing exact, monthly, FR)
- `reaction time test` 639 (English)
- `reaction test` 117 (broad 275)
- `reflex test` 87
- `temps de reaction` 71 / `temps de réaction` 66 (broad 162/140)
- `test de rapidité` 70 (off-intent, see SERP)
- `go no go` 57
- `test de reflexe` 51 (accented `test de réflexe` returns 0: Bing keys the unaccented form; treat as one query)
- `test reflex` 41, `test reaction` 27, `test de réactivité` 21
- 0 (`ok`): test réflexe, test de réflexes, test de réaction f1, temps de réaction moyen/humain/test, test de rapidité réflexe/clic, jeu réflexe, jeu(x) de réflexe, tester/travailler ses réflexes, exercice yeux, acuité visuelle dynamique.
- BE `test de réflexe` 0; BE/CA rows failed (DNS error): UNKNOWN.
- Batch 2 (kw2): all 19 FR rows (test de réaction, test temps de réaction, jeu de réflexe en ligne, améliorer ses réflexes, …) still UNKNOWN at hand-off: the shared Bing lock was serving ~1 row/2-3 min. The process keeps appending to `_work-defr/kw2.jsonl`; rerun `python _work-defr/mkcsv.py` to refresh `fr.csv`. `test de réaction` was picked as light-reaction primary from SERP + autocomplete evidence, not volume.

## SERP check (Bing cc=fr)
- `test de reflexe`: tool intent: humanbenchmark, cps-check, cpstest.io, aimtrainer.io, cpstest.click, colorvisiontest. Medium (small tool sites).
- `test de réflexe` (accented): mixed: jacquote (game) + medical reflexes (msdmanuals, Babinski, ooreka).
- `test temps de réaction`: cps-check, humanbenchmark, cpstest.io, colorblindtest, cps-tests.
- `temps de réaction`: driving-school informational (ornikar, envoituresimone, lepermislibre, videopermis) + cps-check #1. Off-intent for a drill; hard.
- `test de rapidité`: typing / CPS / internet speedtest. KILL.
- `reaction time test` (cc=fr): arealme, cps-check, cpstest.click, human-benchmark.org, cpstest.io, aimtrainer.

## GSC (90d, fra)
- `test de réflexe`: 2 impr, pos 5.0 on `/fr/drills/reaction-speed/reflex-training-drill`: the only reaction query with FR visibility. Fastest win: made it that page's primary.
- `exercice yeux` pos 27, `suivi visuel` pos 33 (visual-tracking, out of scope).

## Keyword map
| Page | Primary | Bing exact | Competition | GSC pos | Secondary |
|---|---|---|---|---|---|
| `/fr/drills/reaction-speed/reflex-training-drill` | test de réflexe | 51 | medium | 5.0 | reflex test (87), test reflex (41), tester ses réflexes |
| `/fr/drills/visual/reaction-speed/light-reaction` | test de réaction | see kw2 | medium | - | reaction time test (639), test temps de réaction, test reaction (27), test de réactivité (21) |
| `/fr/drills/reaction-speed` (hub) | unchanged copy (jeux de réflexes / temps de réaction) | 0 / 66 | hard (driving) | - | |
| go/no-go | Test Go/No-Go (unchanged) | 57 (`go no go`, mixed intent) | unprobed | - | |
| all other fr reaction-speed drills | unchanged | 0 | n/a | - | |

## Implemented
- reflex-training-drill (fr block of `lib/i18n/drills/reflexTrainingDrillNative.js`): title/H1 `Test de réflexe en ligne : cibles multiples`, description, keywords, intro title, new plain first intro paragraph (incl. "not the doctor's hammer reflex test" to separate medical intent), FAQ #1 rewritten as `Comment fonctionne ce test de réflexe en ligne ?`.
- light-reaction (fr): title `Test de réaction en ligne : temps de réaction en ms`, description, keywords (dropped `test de réflexes` to avoid sharing the reflex drill's primary), OG/Twitter titles, H1 copy, guide heading, FAQ #1 rewritten (how it works), caffeine/sleep FAQ de-fabricated (removed -10-20 ms caffeine and +30-80 ms claims), HowTo step 3 "barre d'espace" claim fixed (no keyboard handler).

## Kill list
test de rapidité (wrong intent), jeu(x) de réflexe(s), tester/travailler ses réflexes, temps de réaction moyen/humain, acuité visuelle dynamique, exercice yeux, test de réaction f1. Do not translate further fr reaction pages: demand does not justify it.

## Batch 2 completed (post hand-off)
- `test de reaction` 95, `test temps de réaction` 74, `test de réaction` 41, `reaction time` 101 (broad 887). All other FR batch-2 rows 0.
- Confirms light-reaction primary `test de réaction` (95+41 combined) with `test temps de réaction` (74) as secondary; both already in its title/keywords.
