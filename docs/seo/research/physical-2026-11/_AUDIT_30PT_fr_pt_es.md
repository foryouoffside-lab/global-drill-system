# 30-point audit: physical pages, fr / pt / es (36 pages)

- Date: 2026-11-12. READ-ONLY audit; no files were edited.
- Sources:
  - rendered HTML from `next dev` on :3000 (all 36 returned HTTP 200, 3-28 s)
  - `app/{fr,pt,es}/drills/physical/**/page.js`
  - the shared clients in `app/drills/physical/**`
  - live `/sitemap.xml` and `/robots.txt`
  - the research docs `docs/seo/research/physical-2026-11/{fr,pt,es}.md`
- Checklist: `docs/seo/GLOBAL_PAGE_SEO_AEO_GEO_STANDARD.md` section 3.
- Legend:
  - P = pass
  - F = fail
  - W = pass with a nit
  - N = cannot be checked on a dev server
- Extra columns:
  - LANG = SSR `<html lang>`
  - BC = every BreadcrumbList `item` resolves 200, with no 308

## Evidence shared by all pages

- **1.1 Clean locale URL:** every page uses the locale path prefix, with no query or hash.
- **1.2 hreflang:** every page has 8 hreflang links (en, x-default = English URL, pt, es, ja, de, ko, fr), including itself. They come from the shared `getAlternateLanguages()`, so the set is reciprocal; the sitemap confirms this.
- **1.3 Canonical:** `rel=canonical` equals the page's own locale URL on all 36.
- **1.4 Sitemap:** all 36 are in `/sitemap.xml` with 8 `xhtml:link` alternates. W: `lastmod` is 2026-10-08, but JSON-LD `dateModified` is 2026-11-10.
- **1.5 SSR:** the H1, H2s, DrillGuide, FAQ and the canvas element are all in the SSR HTML.
- **1.6 Core Web Vitals:** cannot be measured on a dev server. Needs production PSI/CrUX.
- **2.1 Measured demand:** taken from the research docs. Most primaries measure Bing 0 / GSC 0.
  - The pages have existed since 2026-09; this deploy does not create them.
  - This is an owner decision, not a deploy regression.
- **2.2 Native phrasing:** the primaries match the native choices in the research docs.
- **2.3 SERP format:** the interactive tool is the first block under the H1.
- **2.4 Native language:** the copy in `page.js` is native. The exceptions (hard-coded English in shared clients and in the footer) are listed per page.
- **3.1 Title:** the primary keyword leads every title and every title ends with `| SkillDrills`. F = longer than 60 characters.
- **3.2 Description:** native, action-oriented copy. F = longer than 155 characters.
- **3.3 Headings:** exactly one `<h1>` on all 36, with an h2/h3 hierarchy. Nit: on drill pages the first H2 repeats the H1 text.
- **3.4 Internal links:** 0 cross-locale `<a href>` on any page, and every in-locale target has a `page.js`.
- **3.5 Alt text:** there is no `<img>` without alt. W on all pages: the game `<canvas>` has no localized `aria-label`.
- **4.1 Answer-first (BLUF):**
  - Hubs: an answer-first paragraph sits directly under the H1.
  - Drills: the DrillGuide intro opens with a definition, and FAQ answers lead with the answer.
  - Nit: on drill pages the HUD sits between the H1 and any prose (deliberate stage-first layout).
- **4.2 Question headings:** drill pages have 8-10 question H3s (the FAQ). W on hubs: no h2/h3 is phrased as a question.
- **4.3 Tables and lists:** most drill pages have a grade or benchmark `<table>`. W = no table.
- **4.4 No factual contradictions:**
  - No `aggregateRating`, no "sub-millisecond", and no user-count or percentile claims on any page.
  - The grade tables say they are SkillDrills bands, not user statistics.
  - Spot-checked against the client code:
    - agility-ladder: 150 -> 750 px/s, hitbox 18 -> 10 px
    - complex-pattern: 3 -> 8 nodes, 2.0 -> 0.6 s
    - cross-body-movement: corridor 10 -> 4 px
    - the "-1 s" claims on speed-drill, drop-catch and peripheral-threat-sweeper are true: `TIME_PER_HIT===2` forces `drillPenalty.isEnabled(true)`
- **5.1 JSON-LD:** every JSON-LD block parses. FAQPage Q and A text matches the visible FAQ on all 36 pages (0 mismatches). W = more than one app entity for one URL.
- **5.2 sameAs:** no `sameAs` or Wikidata anchor on any page.
- **5.3 E-E-A-T:** a References section with DOI-linked sources (Fitts 1954, Lashley 1951, Schmidt 1975, etc.), plus caveats about hardware and refresh rate.
- **5.4 Utility hook:** every drill page offers a free instant tool.
- **5.5 AI crawlers:** `robots.txt` allows GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot and Google-Extended.
- **6.1 IndexNow:** `scripts/notify-indexnow.js` exists, but it only runs manually (`npm run notify-search-engines`); `package.json` has no postbuild hook. W: run it after the deploy.
- **6.2 Not orphaned:** each drill is linked from its locale hub (11 drill links) and from sibling RelatedDrills. Hubs are linked from `/<loc>/drills` and the footer.
- **6.3 Status:** HTTP 200 and `meta robots "index, follow"`; no page has noindex.
- **7.1 / 7.2:** one-click Start, with no login or modal; a free browser utility.
- **LANG:** the SSR HTML has `<html lang="en">` on all 36 localized pages. This is the known site-wide root-layout gap; hreflang and `inLanguage` only partly compensate.
- **BC:** the group URLs `/<loc>/drills/physical/{fitness,coordination,reflex-training}` now 308 to the hub (checked live: `/fr/drills/physical/fitness` -> `/fr/drills/physical`). F = the breadcrumb still lists one of them.

## Per-page matrix

## FR

| page | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 1.6 | 2.1 | 2.2 | 2.3 | 2.4 | 3.1 | 3.2 | 3.3 | 3.4 | 3.5 | 4.1 | 4.2 | 4.3 | 4.4 | 5.1 | 5.2 | 5.3 | 5.4 | 5.5 | 6.1 | 6.2 | 6.3 | 7.1 | 7.2 | LANG | BC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| hub | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | W | W | W | P | W | P | P | P | W | P | P | P | P | F | P |
| balance-training_stability-challenge | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | P | P | W | P | W | P | P | P | W | P | P | P | P | F | P |
| coordination_complex-pattern | P | P | P | W | P | N | P | P | P | F | F | P | P | P | W | P | P | W | P | P | W | P | P | P | W | P | P | P | P | F | P |
| coordination_cross-body-movement | P | P | P | W | P | N | P | P | P | F | F | F | P | P | W | P | P | W | P | P | W | P | P | P | W | P | P | P | P | F | P |
| coordination_dynamic-grid-evasion | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| fitness_agility-ladder | P | P | P | W | P | N | P | P | P | F | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| fitness_jump-sequence | P | P | P | W | P | N | P | P | P | F | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| fitness_speed-drill | P | P | P | W | P | N | P | P | P | P | P | F | P | P | W | P | P | P | P | W | W | P | P | P | W | P | P | P | P | F | P |
| reflex-training_drop-catch | P | P | P | W | P | N | F | P | P | P | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | P |
| reflex-training_peripheral-threat-sweeper | P | P | P | W | P | N | F | P | P | P | F | F | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| reflex-training_quick-dodge | P | P | P | W | P | N | P | P | P | P | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | P |
| reflex-training_reaction-chain | P | P | P | W | P | N | F | P | P | P | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | P |

**fr/hub**: title 59c "Jeux d'agilité et de coordination à la souris | SkillDrills"; desc 152c; h1 "Jeux d’agilité et de coordination à la souris"; FAQ schema matches visible FAQ (10 Q).
  - 2.1 hub primary measures 0
  - 2.4 footer category names render in English (FPS Aim, Cognitive, Memory, Motor Skills, Physical, Visual, Visual Tracking, Reaction Speed): components/SiteFooter.js uses SITE_CATEGORIES cat.name
  - 4.4 nit: hub card copy says "Améliorez/Mejora ..." while the drill pages say no improvement is promised
**fr/balance-training_stability-challenge**: title 47c "Stabilité de la visée à la souris | SkillDrills"; desc 151c; h1 "Stabilité de la visée à la souris"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 SSR HUD renders English "Time Left / Best Score / Best Combo" (and "Score"), hard-coded in the shared client; page.js passes hudLabels but they are ignored
  - 2.4 "NEW BEST" is also hard-coded (runtime)
  - 4.4 nit: S+ cutoff is given as 15 342 here and 15 343 on agility/jump (same 17 000 formula)
**fr/coordination_complex-pattern**: title 63c "Jeu visuo-spatial en ligne : retracer un parcours | SkillDrills"; desc 155c; h1 "Jeu visuo-spatial : mémoriser et retracer un parcours"; FAQ schema matches visible FAQ (8 Q).
  - 3.1 title is 63 chars (limit 60)
  - 2.1 demand > 0: GSC 65 impr pos 8.3
  - 2.4 SSR HUD renders English "Time Left / Best Score / Best Combo" (and "Score"), hard-coded in the shared client; page.js passes hudLabels but they are ignored
  - 2.4 "NEW BEST" is also hard-coded (runtime)
  - 4.3 no HTML table
**fr/coordination_cross-body-movement**: title 64c "Exercice de coordination visuo-motrice à la souris | SkillDrills"; desc 160c; h1 "Coordination visuo-motrice à la souris"; FAQ schema matches visible FAQ (8 Q).
  - 3.1 title is 64 chars (limit 60)
  - 3.2 description is 160 chars (limit 155)
  - 2.1 demand > 0: GSC 4 impr
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - 4.3 no HTML table
**fr/coordination_dynamic-grid-evasion**: title 56c "Jeu d’évitement sur grille 3x3 à la souris | SkillDrills"; desc 153c; h1 "Jeu d’évitement sur grille 3x3"; FAQ schema matches visible FAQ (9 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**fr/fitness_agility-ladder**: title 56c "Échelle d’agilité en ligne : jeu de rythme | SkillDrills"; desc 151c; h1 "Échelle d’agilité en ligne"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 demand > 0: GSC 41 impr pos 7.4
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**fr/fitness_jump-sequence**: title 55c "Jeu de saut et de trajectoire à la souris | SkillDrills"; desc 155c; h1 "Jeu de saut et de trajectoire"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 demand > 0: GSC 1 impr
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**fr/fitness_speed-drill**: title 59c "Jeu de clic : cibles mobiles qui rétrécissent | SkillDrills"; desc 157c; h1 "Jeu de clic : cibles mobiles qui rétrécissent"; FAQ schema matches visible FAQ (10 Q).
  - 3.2 description is 157 chars (limit 155)
  - 2.1 demand > 0: Bing "jeu de clic" 18
  - 2.4 nit: an H2 uses the English drill name ("Speed Drill" / "Drop Catch")
  - 5.1 three app entities (SoftwareApplication + WebApplication + VideoGame) for one URL; names carry English parentheticals
**fr/reflex-training_drop-catch**: title 57c "Attraper les cibles qui tombent à la souris | SkillDrills"; desc 151c; h1 "Attraper les cibles qui tombent"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 nit: an H2 uses the English drill name ("Speed Drill" / "Drop Catch")
**fr/reflex-training_peripheral-threat-sweeper**: title 61c "Jeu de vision périphérique : défendre le centre | SkillDrills"; desc 159c; h1 "Jeu de vision périphérique"; FAQ schema matches visible FAQ (9 Q).
  - 3.1 title is 61 chars (limit 60)
  - 3.2 description is 159 chars (limit 155)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**fr/reflex-training_quick-dodge**: title 53c "Jeu d’esquive à la souris : projectiles | SkillDrills"; desc 149c; h1 "Jeu d’esquive à la souris"; FAQ schema matches visible FAQ (9 Q).
  - 2.1 demand > 0: GSC 3 impr
**fr/reflex-training_reaction-chain**: title 56c "Freinage de visée souris : arrêt sur cible | SkillDrills"; desc 153c; h1 "Freinage de visée souris : arrêt sur cible"; FAQ schema matches visible FAQ (9 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)

## PT

| page | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 1.6 | 2.1 | 2.2 | 2.3 | 2.4 | 3.1 | 3.2 | 3.3 | 3.4 | 3.5 | 4.1 | 4.2 | 4.3 | 4.4 | 5.1 | 5.2 | 5.3 | 5.4 | 5.5 | 6.1 | 6.2 | 6.3 | 7.1 | 7.2 | LANG | BC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| hub | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | W | W | P | P | W | P | P | P | W | P | P | P | P | F | P |
| balance-training_stability-challenge | P | P | P | W | P | N | F | P | P | F | P | F | P | P | W | P | P | P | W | P | W | P | P | P | W | P | P | P | P | F | P |
| coordination_complex-pattern | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | P | W | P | P | W | P | P | P | W | P | P | P | P | F | P |
| coordination_cross-body-movement | P | P | P | W | P | N | F | P | P | F | P | F | P | P | W | P | P | W | P | P | W | P | P | P | W | P | P | P | P | F | P |
| coordination_dynamic-grid-evasion | P | P | P | W | P | N | F | P | P | F | F | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| fitness_agility-ladder | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| fitness_jump-sequence | P | P | P | W | P | N | P | P | P | F | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| fitness_speed-drill | P | P | P | W | P | N | F | P | P | P | P | P | P | P | W | P | P | P | P | W | W | P | P | P | W | P | P | P | P | F | P |
| reflex-training_drop-catch | P | P | P | W | P | N | F | P | P | P | F | P | P | P | W | P | P | P | P | W | W | P | P | P | W | P | P | P | P | F | F |
| reflex-training_peripheral-threat-sweeper | P | P | P | W | P | N | F | P | P | P | P | F | P | P | W | P | P | P | P | W | W | P | P | P | W | P | P | P | P | F | F |
| reflex-training_quick-dodge | P | P | P | W | P | N | F | P | P | P | F | F | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| reflex-training_reaction-chain | P | P | P | W | P | N | F | P | P | P | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | P |

**pt/hub**: title 56c "Treino de Agilidade com o Mouse: 11 Drills | SkillDrills"; desc 149c; h1 "Treino de Agilidade com o Mouse"; FAQ schema matches visible FAQ (10 Q).
  - 2.1 hub primary measures 0
  - 2.4 footer category names render in English (FPS Aim, Cognitive, Memory, Motor Skills, Physical, Visual, Visual Tracking, Reaction Speed): components/SiteFooter.js uses SITE_CATEGORIES cat.name
**pt/balance-training_stability-challenge**: title 55c "Mira Tremendo? Treino de Firmeza do Mouse | SkillDrills"; desc 158c; h1 "Mira Tremendo? Treino de Firmeza do Mouse"; FAQ schema matches visible FAQ (8 Q).
  - 3.2 description is 158 chars (limit 155)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 SSR HUD renders English "Time Left / Best Score / Best Combo" (and "Score"), hard-coded in the shared client; page.js passes hudLabels but they are ignored
  - 2.4 "NEW BEST" is also hard-coded (runtime)
  - 4.4 nit: S+ cutoff is given as 15 342 here and 15 343 on agility/jump (same 17 000 formula)
**pt/coordination_complex-pattern**: title 52c "Memorizar e Traçar Padrões com o Mouse | SkillDrills"; desc 155c; h1 "Memorizar e Traçar Padrões"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 SSR HUD renders English "Time Left / Best Score / Best Combo" (and "Score"), hard-coded in the shared client; page.js passes hudLabels but they are ignored
  - 2.4 "NEW BEST" is also hard-coded (runtime)
  - 4.3 no HTML table
**pt/coordination_cross-body-movement**: title 60c "Coordenação Mão-Olho: Trace Linhas com o Mouse | SkillDrills"; desc 157c; h1 "Coordenação Mão-Olho"; FAQ schema matches visible FAQ (8 Q).
  - 3.2 description is 157 chars (limit 155)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - 4.3 no HTML table
**pt/coordination_dynamic-grid-evasion**: title 62c "Jogo de Esquiva em Grade: Saia Antes da Explosão | SkillDrills"; desc 145c; h1 "Jogo de Esquiva em Grade"; FAQ schema matches visible FAQ (9 Q).
  - 3.1 title is 62 chars (limit 60)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**pt/fitness_agility-ladder**: title 60c "Escada de Agilidade com o Mouse: Jogo de Ritmo | SkillDrills"; desc 151c; h1 "Escada de Agilidade com o Mouse"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**pt/fitness_jump-sequence**: title 58c "Jogo de Salto com o Mouse: Carregue e Acerte | SkillDrills"; desc 151c; h1 "Jogo de Salto com o Mouse"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 demand > 0: Bing "jogo de pular" 17 (off-intent, body copy only)
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**pt/fitness_speed-drill**: title 58c "Jogo de Clicar em Alvos Rápidos que Encolhem | SkillDrills"; desc 149c; h1 "Jogo de Clicar em Alvos Rápidos"; FAQ schema matches visible FAQ (10 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 nit: an H2 uses the English drill name ("Speed Drill" / "Drop Catch")
  - 5.1 three app entities (SoftwareApplication + WebApplication + VideoGame) for one URL; names carry English parentheticals
**pt/reflex-training_drop-catch**: title 61c "Pegar Alvos em Queda: Ignore as Iscas Vermelhas | SkillDrills"; desc 151c; h1 "Pegar Alvos em Queda"; FAQ schema matches visible FAQ (8 Q).
  - 3.1 title is 61 chars (limit 60)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 5.1 three app entities (SoftwareApplication + WebApplication + VideoGame) for one URL; names carry English parentheticals
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**pt/reflex-training_peripheral-threat-sweeper**: title 55c "Defesa Radial: Treino de Visão Periférica | SkillDrills"; desc 159c; h1 "Defesa Radial"; FAQ schema matches visible FAQ (9 Q).
  - 3.2 description is 159 chars (limit 155)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 5.1 three app entities (SoftwareApplication + WebApplication + VideoGame) for one URL; names carry English parentheticals
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**pt/reflex-training_quick-dodge**: title 61c "Jogo de Desviar com o Mouse: Fuja dos Projéteis | SkillDrills"; desc 157c; h1 "Jogo de Desviar com o Mouse"; FAQ schema matches visible FAQ (9 Q).
  - 3.1 title is 61 chars (limit 60)
  - 3.2 description is 157 chars (limit 155)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**pt/reflex-training_reaction-chain**: title 60c "Frenagem de Mira: Pare o Cursor Dentro do Alvo | SkillDrills"; desc 151c; h1 "Frenagem de Mira"; FAQ schema matches visible FAQ (9 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)

## ES

| page | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 1.6 | 2.1 | 2.2 | 2.3 | 2.4 | 3.1 | 3.2 | 3.3 | 3.4 | 3.5 | 4.1 | 4.2 | 4.3 | 4.4 | 5.1 | 5.2 | 5.3 | 5.4 | 5.5 | 6.1 | 6.2 | 6.3 | 7.1 | 7.2 | LANG | BC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| hub | P | P | P | W | P | N | F | P | P | F | P | F | P | P | W | P | W | W | W | P | W | P | P | P | W | P | P | P | P | F | P |
| balance-training_stability-challenge | P | P | P | W | P | N | F | P | P | F | P | F | P | P | W | P | P | P | W | P | W | P | P | P | W | P | P | P | P | F | P |
| coordination_complex-pattern | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | P | W | P | P | W | P | P | P | W | P | P | P | P | F | P |
| coordination_cross-body-movement | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | P | W | P | P | W | P | P | P | W | P | P | P | P | F | P |
| coordination_dynamic-grid-evasion | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | P |
| fitness_agility-ladder | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| fitness_jump-sequence | P | P | P | W | P | N | F | P | P | F | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| fitness_speed-drill | P | P | P | W | P | N | F | P | P | P | P | P | P | P | W | P | P | P | P | W | W | P | P | P | W | P | P | P | P | F | P |
| reflex-training_drop-catch | P | P | P | W | P | N | F | P | P | P | P | F | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | P |
| reflex-training_peripheral-threat-sweeper | P | P | P | W | P | N | F | P | P | P | P | F | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | F |
| reflex-training_quick-dodge | P | P | P | W | P | N | P | P | P | P | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | P |
| reflex-training_reaction-chain | P | P | P | W | P | N | F | P | P | P | P | P | P | P | W | P | P | P | P | P | W | P | P | P | W | P | P | P | P | F | P |

**es/hub**: title 60c "Juegos de agilidad con el ratón: 11 ejercicios | SkillDrills"; desc 156c; h1 "Juegos de agilidad con el ratón"; FAQ schema matches visible FAQ (10 Q).
  - 3.2 description is 156 chars (limit 155)
  - 2.1 hub primary measures 0
  - 2.4 footer category names render in English (FPS Aim, Cognitive, Memory, Motor Skills, Physical, Visual, Visual Tracking, Reaction Speed): components/SiteFooter.js uses SITE_CATEGORIES cat.name
  - 4.4 nit: hub card copy says "Améliorez/Mejora ..." while the drill pages say no improvement is promised
**es/balance-training_stability-challenge**: title 49c "Estabilidad del cursor con el ratón | SkillDrills"; desc 157c; h1 "Estabilidad del cursor con el ratón"; FAQ schema matches visible FAQ (9 Q).
  - 3.2 description is 157 chars (limit 155)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 SSR HUD renders English "Time Left / Best Score / Best Combo" (and "Score"), hard-coded in the shared client; page.js passes hudLabels but they are ignored
  - 2.4 "NEW BEST" is also hard-coded (runtime)
  - 4.4 nit: S+ cutoff is given as 15 342 here and 15 343 on agility/jump (same 17 000 formula)
**es/coordination_complex-pattern**: title 53c "Juego de memoria visual | Test espacial | SkillDrills"; desc 145c; h1 "Juego de memoria visual"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 SSR HUD renders English "Time Left / Best Score / Best Combo" (and "Score"), hard-coded in the shared client; page.js passes hudLabels but they are ignored
  - 2.4 "NEW BEST" is also hard-coded (runtime)
  - 4.3 no HTML table
**es/coordination_cross-body-movement**: title 56c "Test de coordinación ojo-mano con el ratón | SkillDrills"; desc 146c; h1 "Test de coordinación ojo-mano"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - 4.3 no HTML table
**es/coordination_dynamic-grid-evasion**: title 52c "Esquivar casillas en la cuadrícula 3x3 | SkillDrills"; desc 152c; h1 "Esquivar casillas en la cuadrícula"; FAQ schema matches visible FAQ (9 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
**es/fitness_agility-ladder**: title 56c "Juego de Escalera de Agilidad con el Ratón | SkillDrills"; desc 154c; h1 "Juego de Escalera de Agilidad"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**es/fitness_jump-sequence**: title 52c "Juego de Saltar y Apuntar con el Ratón | SkillDrills"; desc 154c; h1 "Juego de Saltar y Apuntar"; FAQ schema matches visible FAQ (8 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 runtime results tiles are hard-coded English (Accuracy, Peak Level, Peak Speed, Waves Cleared, ...) plus "NEW BEST"; not in SSR
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**es/fitness_speed-drill**: title 59c "Test de Clic Rápido: Objetivos que se Encogen | SkillDrills"; desc 147c; h1 "Test de Clic Rápido: Objetivos que se Encogen"; FAQ schema matches visible FAQ (10 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 nit: an H2 uses the English drill name ("Speed Drill" / "Drop Catch")
  - 5.1 three app entities (SoftwareApplication + WebApplication + VideoGame) for one URL; names carry English parentheticals
**es/reflex-training_drop-catch**: title 59c "Atrapar objetos que caen: verdes sí, rojos no | SkillDrills"; desc 159c; h1 "Atrapar objetos que caen"; FAQ schema matches visible FAQ (8 Q).
  - 3.2 description is 159 chars (limit 155)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - 2.4 nit: an H2 uses the English drill name ("Speed Drill" / "Drop Catch")
**es/reflex-training_peripheral-threat-sweeper**: title 59c "Ejercicios de Visión Periférica: Juego Online | SkillDrills"; desc 156c; h1 "Ejercicios de Visión Periférica"; FAQ schema matches visible FAQ (9 Q).
  - 3.2 description is 156 chars (limit 155)
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)
  - BC BreadcrumbList position 3 is a group URL that 308s to the hub
**es/reflex-training_quick-dodge**: title 57c "Juego de esquivar con el ratón: proyectiles | SkillDrills"; desc 148c; h1 "Juego de esquivar con el ratón"; FAQ schema matches visible FAQ (9 Q).
  - 2.1 demand > 0: Bing "juego de esquivar" 73
**es/reflex-training_reaction-chain**: title 59c "Frenado de Puntería: Para la Mira sin Pasarte | SkillDrills"; desc 155c; h1 "Frenado de Puntería: Para la Mira sin Pasarte"; FAQ schema matches visible FAQ (9 Q).
  - 2.1 primary and variants measure Bing 0 / GSC 0 (research doc)

## FAILs ranked by severity

### Blockers

None. All 36 pages:
- return 200 and are indexable
- have a canonical pointing to themselves
- have the full hreflang set including x-default
- have valid JSON-LD with FAQ matching the visible FAQ
- have no aggregateRating and no fabricated stats
- have no English leakage in titles, descriptions, H1s or schema FAQs

### Should-fix

1. **BreadcrumbList items point to group URLs that now 308 (13 pages).** This change was introduced by e80b3786. Fix: drop position 3 and renumber, so the hub is position 2.
   - fr:
     - `app/fr/drills/physical/coordination/dynamic-grid-evasion/page.js`
     - `app/fr/drills/physical/fitness/agility-ladder/page.js`
     - `app/fr/drills/physical/fitness/jump-sequence/page.js`
     - `app/fr/drills/physical/reflex-training/peripheral-threat-sweeper/page.js`
   - pt:
     - `app/pt/drills/physical/coordination/dynamic-grid-evasion/page.js`
     - `app/pt/drills/physical/fitness/agility-ladder/page.js`
     - `app/pt/drills/physical/fitness/jump-sequence/page.js`
     - `app/pt/drills/physical/reflex-training/drop-catch/page.js`
     - `app/pt/drills/physical/reflex-training/peripheral-threat-sweeper/page.js`
     - `app/pt/drills/physical/reflex-training/quick-dodge/page.js`
   - es:
     - `app/es/drills/physical/fitness/agility-ladder/page.js`
     - `app/es/drills/physical/fitness/jump-sequence/page.js`
     - `app/es/drills/physical/reflex-training/peripheral-threat-sweeper/page.js`
2. **English in the SSR HUD on stability-challenge and complex-pattern (6 pages).** The labels "Time Left / Best Score / Best Combo" (and "Score") are hard-coded in the shared client, which ignores the `hudLabels` that `page.js` passes.
   - `app/drills/physical/balance-training/stability-challenge/StabilityChallengeClient.js:602-605`
   - `app/drills/physical/coordination/complex-pattern/ComplexPatternClient.js:827-835`
3. **English footer category names on the 3 hubs** (FPS Aim, Cognitive, Memory, Motor Skills, Physical, Visual, Visual Tracking, Reaction Speed). They render from `SITE_CATEGORIES` `cat.name` in `components/SiteFooter.js`. This is site-wide, so it also affects other localized hubs.
4. **Titles over 60 characters (6 pages):**
   - fr complex-pattern 63, fr cross-body-movement 64, fr peripheral-threat-sweeper 61
   - pt dynamic-grid-evasion 62, pt drop-catch 61, pt quick-dodge 61
5. **Meta descriptions over 155 characters (11 pages):**
   - fr cross-body-movement 160, fr peripheral-threat-sweeper 159, fr speed-drill 157
   - pt stability-challenge 158, pt peripheral-threat-sweeper 159, pt cross-body-movement 157, pt quick-dodge 157
   - es drop-catch 159, es stability-challenge 157, es peripheral-threat-sweeper 156, es hub 156
6. **`<html lang="en">` on all 36 localized pages.** This is the known site-wide root-layout gap and was not introduced here, but it fails the "html lang" point everywhere.
7. **Runtime-only English (not in SSR) on cross-body-movement, dynamic-grid-evasion, agility-ladder and jump-sequence.** The results tiles (Accuracy, Peak Level, Peak Speed, Waves Cleared, Warning Window, Target Hits, Connected, Missed, Cleared) are hard-coded English, and "NEW BEST" is hard-coded in 6 physical clients.
   - `app/drills/physical/coordination/cross-body-movement/CrossBodyMovementClient.js:~770-788`
   - `DynamicGridEvasionClient.js:~790-798`
   - `MotorSequencingClient.js:~840-844`
   - `JumpSequenceClient.js:~859-867`
   - "NEW BEST": the same 4 files plus `StabilityChallengeClient.js:708` and `ComplexPatternClient.js:934`
8. **Demand (2.1, owner decision).** Only these pages have measured demand above 0:
   - fr: complex-pattern (GSC 65), agility-ladder (GSC 41), cross-body-movement, quick-dodge, jump-sequence, and speed-drill (Bing 18)
   - pt: jump-sequence (17, off-intent)
   - es: quick-dodge (73)

   Every other localized physical page, all 3 hubs included, measures Bing 0 / GSC 0. That breaks Principle 1 ("no demand = no page"), but the pages are older than this deploy.

### Nits

- 5.1: speed-drill (fr/pt/es), pt drop-catch and pt peripheral-threat-sweeper each declare three app entities (SoftwareApplication, WebApplication and VideoGame) for one URL. Several of the names carry English parentheticals such as "(Peripheral Threat Sweeper)" or "(Quick Dodge)".
- `inLanguage` is inconsistent across pages: `fr` vs `fr-FR`, and `pt` vs `pt-BR`.
- H2s use the English drill name: "À propos du Speed Drill", "Sobre o Speed Drill", "À propos de Drop Catch", "Sobre Drop Catch".
- The S+ cutoff is 15 342 on stability-challenge but 15 343 on agility-ladder and jump-sequence (same 17 000 formula), and "environ 15 350" on quick-dodge.
- fr/es hub cards say "Améliorez/Mejora ...", while the drill FAQs say no improvement is promised.
- The sitemap `lastmod` (2026-10-08) is older than the 2026-11-10 content edits.
- No `sameAs` on any page; the canvas has no localized `aria-label`; the hubs have no question-phrased headings; complex-pattern and cross-body-movement have no table.
- IndexNow is manual. Run `npm run notify-search-engines` after the deploy (it reads the live sitemap).
- Core Web Vitals (1.6) were not measured on the dev server.
