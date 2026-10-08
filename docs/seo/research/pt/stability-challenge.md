# pt / stability-challenge - research log

Date: 2026-10-08 - Market: Brazil pt-BR (gl=br hl=pt). Agent: pt.

## Defect found
- A bad global string replace had overwritten the guide intro title, protocol title/items, FAQ heading, four rule titles and three about-card titles with the page title (duplicate H2s, identical protocol steps). Fixed with native, distinct headings and four real protocol steps.
- Benchmark table carried "Top 0,5% / 5% / 20%" population percentiles with no data behind them; replaced with editorial labels and a note. FAQ "sem telemetria invasiva" and "privacidade absoluta" claims replaced with a localStorage statement that points to the privacy policy.

## Queries
- Google Suggest `estabilidade de mira` (gl=br hl=pt): returns construction/medical items only (estabilidade de muro, milrinona) - the old primary is not native gamer phrasing. proxy (Suggest, unmeasured).
- Google Suggest `mira tremendo`: valorant, cs2, ff (Free Fire), emulador. proxy.
- Google Suggest `como parar de tremer a mira`: valorant, free fire, mobile, emulador. proxy.
- Google Suggest `controle de mouse` / `treino de mouse`: treino de precisao de mouse, treino de mouse online. proxy.
- Bing `estabilidade de mira` BR: no data (API rate-limited 2026-10-08, shared key); volume unknown, not zero.
- Demand not verified (no measured Bing volume this run).

## Intent / SERP
Browser tool / how-to intent (fix shaking aim). Competitors seen in the earlier pass: Brazilian aim-trainer tools that do not offer a counter-force stability drill. SERP not captured this pass (WebSearch is US-only) - proxy only.

## Scores (B3): demand 2, competition ease 4, intent fit 4.

## Decision
- Title: `Mira Tremendo? Treino de Firmeza do Mouse | SkillDrills` (55 chars). H1: `Treino de Firmeza do Mouse (Mira Estável)`. Description kept.