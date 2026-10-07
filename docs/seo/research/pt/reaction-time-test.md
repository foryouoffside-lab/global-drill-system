# pt / reaction-time-test (teste de reflexo) - research log

Date: 2026-10-08 - Market: Brazil pt-BR (gl=br hl=pt). Agent: pt.

## Queries
- `teste de reflexo` 180 exact (broad 180) - measured (Bing Webmaster API, BR/pt-BR, 2026-10-08). 183 on 2026-09-20.
- `teste de reação` 165 exact - measured (Bing, 2026-09-20 pass). `tempo de reação` 49 - measured (same pass).
- Bing figures are Bing-only, not Google volume; Google volume needs GSC / Keyword Planner. Re-measure of other phrases on 2026-10-08 failed: API returned no data for the shared key (rate limit), so those are unknown, not zero.
- Google Suggest `teste de reflexo` (gl=br hl=pt) - proxy (unmeasured): click, valorant, f1, para fps, jogo, plus medical items (joelho, patelar, vermelho, recém-nascido, bebê).
- Google Suggest `teste de tempo de reação`: valorant, f1, da régua, teclado, simples, online, mouse. proxy.
- Google Suggest `jogo de reflexo`: rápido, valorant, online, mouse, lol, navegador, pc. proxy.

## Intent and SERP
- Mixed: medical reflex (joelho/patelar/teste do olhinho) shares the head term, so the page must say "visual, no navegador" and the FAQ already separates "reflexo vs tempo de reação". Tool intent wins on `valorant`, `fps`, `click`, `online`.
- Earlier-pass competitors (Brazilian): UPBOOST teste-tempo-de-reacao, reaction-time-test.online/pt, iobit.com/pt/teste-de-reflexo; school pages on "reação de régua". SERP not re-captured this pass (WebSearch is US-only): proxy.

## Entities
Tempo de reação, cronometria mental, taxa de atualização (Hz), latência do mouse. Sources already in lib/drillSources: Kosinski 2008, Woods 2015, Dye 2009, Shelton & Kumar 2010.

## Trend note
Google Trends not captured (no browser session). No trend claim.

## Scores (B3): demand 3, competition ease 3, intent fit 4.

## Decision / changes
- Title `Teste de Reflexo Online | Tempo de Reação | SkillDrills` (53): primary first, `online` and `tempo de reação` from Suggest.
- Description cut to <=155.
- Removed fabricated percentile column (Top 1% ... Inferior 20%) and game-rank equivalences (Imortal, Faceit 10, F1 pilot); replaced with editorial bands and a note.
- Removed "precisão inferior a um milissegundo" / "sub-milissegundos"; competitor-comparison FAQ rewritten neutrally.
