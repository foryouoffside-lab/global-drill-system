# fr / fps-tracking-trainer — research log

Date: 2026-10-08 · Market: France, `fr-FR`

## Queries
- measured (Bing fr-FR exact): `aim trainer` 1906 (broad 3016), `aim lab` 867, `3d aim trainer` 374 (related), `aim trainer valorant` 306, `aim test` 192, `entrainement visée` 0, `entrainement fps` 0, `tracking aim` 0, `aim trainer gratuit` 0, `aim trainer en ligne` 0 (two nulls may be throttling).
- Suggest (proxy, gl=fr hl=fr): `aim trainer` → `en ligne`, `gratuit`, `valorant`, `cs2`, `mobile`, `3d`; `tracking aim` → `trainer`, `cs2`, `valorant`, `online`; `entraînement fps` → `souris fps`, `en ligne`, `tir fps`.
- French users type the English loanword `aim trainer`. Bing: the head term is the brand-adjacent ranking pool (`okiaimx` 1340, `aim lab` 867): a mix of navigational queries. Bing volume is not Google volume.
- B3 for `aim trainer en ligne`: demand 3 (head term 1906, qualifier unmeasured), ease 2 (brand competitors), intent fit 4.

## SERP (proxy: WebSearch 2026-10-08, US-served)
- playgama.com/fr aim training, 3D Aim Trainer, itch.io builds, OpenAimTrainer (GitHub), Opera extension. Several are untranslated or light pages; no French-native editorial leader seen.

## Fixes
- Title `Entraînement de visée FPS` → `Aim trainer en ligne : tracking de cibles`, unique against `/fr/drills/fps/target-acquisition` (`Aim Trainer Valorant`) and `/fr/drills/fps/strafe-tracking`; description rewritten (copy in `lib/i18n/drills/fpsTrackingTrainer.js` fr entries only).
- Page content already hedged (no pro/rank claims), 10 bespoke FAQ: kept.
- Supersedes `docs/seo/research/fr/barrier-sequence-pursuit.md` statement that this page keeps `entraînement de visée FPS`; the barrier page title is unchanged and remains distinct.
