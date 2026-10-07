# fr / steady-hand — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- Suggest (proxy, gl=fr hl=fr): `jeu du fil électrique` → `jeu fil électrique kermesse`, `jeu fil electrique enfant`, `jeu avec fil électrique`; `jeu de précision souris` → `jeux de précision avec la souris`; `test tremblement main` → medical results only (`diagnostic tremblement mains`, `tremblement essentiel`).
- Bing fr-FR: `test tremblement main` 0, `jeu du fil électrique` / `jeu de précision` / `test de dextérité` returned no data (null = unknown, shared-key throttling possible). Nothing measured.
- B3 for `jeu du fil électrique`: demand 2 (Suggest-only, child/kermesse intent), ease 4, intent fit 4. Not a medical-tremor tool; `test tremblement main` has medical intent and is not targeted.

## SERP
- Not captured; no competitor claim.

## Fixes
- Title `Précision souris | Test de main sûre` → `Jeu du fil électrique : précision souris` (the page's own H2s already call it Jeu du Fil Électrique).
- H1 was `Test de Précision Souris (Main Sûre)` + English subtitle (copy had no `subtitle`): H1 now `Jeu du fil électrique (précision souris)` + French subtitle via existing copy prop.
- Direct answer paragraph added to guide intro, explicit "not a medical tremor test".
- Unsourced `Top 1/5/25%` labels removed.

## Decision
- Keep page; demand not verified.
