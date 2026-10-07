# fr / reaction-time-test — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- measured (Bing fr-FR exact): `temps de réaction` 18 (broad 47), `test de réaction` 17, `test de temps de réaction` 0, `test de vitesse de réaction` 0, `temps de réaction moyen` 0, `test de réflexes` 0, `jeu de réaction` 0. Prior measurement (near-zero FR reaction demand) confirmed.
- Suggest (proxy, gl=fr hl=fr): `test temps de réaction` → `auditif`, `f1`, `conduite`, `clavier`, `en ligne`, `humain`, `souris`, `human benchmark`; `temps de réaction moyen` → `humain`, `f1`, `ms`, `homme`, `femme`, `gamer`, `conducteur`, `voiture`, `au volant`.
- Intent split: driving (code de la route, conduite), F1/sport trivia, medical/auditory, and the online tool. Only the tool intent fits this page.
- B3 for `test de temps de réaction en ligne`: demand 2, ease 4 (SERP shows thin pages), intent fit 5.

## SERP (proxy: WebSearch 2026-10-08, US-served)
- Results: testdeclick.cmonsite.fr (a CPS site), mentalup.co blog, McGill dentworms React test, jotform template, coddy.tech/tools/fr reaction test, kulturegeek (ruler test). Weak French-native competition; no strong authority page seen.
- PAA/answer pattern: definition + "green then click" + average value.

## Trend
- Not captured. No trend claim.

## Defects fixed (claims hygiene)
- Removed unsourced F1-pilot / esport 150-170 ms claim (FAQ 1) and the Valorant "fenêtre de tir" claim (FAQ 9); softened `performance.now()` attribution.
- Benchmark table: removed fabricated `Percentile Mondial` and `Rang Esport Estimé` columns (Radiant/Immortel, pilotes F1); replaced by 3-column indicative table with a "non issus d'un panel SkillDrills" note; fixed the 280-300 ms gap.
- Intro: first paragraph is a 40-60 word direct answer; removed "chaque gain de 10 ms décuple l'efficacité".
- HowTo step 4 no longer promises a percentile.

## Decision
- Keep page and title; demand weak (measured 17-18/mo Bing) but native phrasing already matches Suggest.
