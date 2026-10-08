# en / drills/visual/.../rhythm-anomaly - research log

Date: 2026-10-08 | Agent: t2b | Slug: `rhythm-anomaly` (under /drills/visual/)

## Tools
- Bing API (`scripts/bing/bing.py keyword "<phrase>" us`): working; exact-match, Bing only, not Google volume; 0 may mean below threshold or unknown.
- Google Suggest (`scripts/keywords/autocomplete.py`, us/en): working; not volume.
- GSC (`scripts/gsc/gsc.py`): working; top 28-day queries have no term for this page. proxy.
- WebSearch (standard, US only, seen from laptop IP).

## Queries
- Primary: visual timing test
- Secondary / long-tail: visual timing test / visual rhythm test (Bing 0/unknown); odd one out game (Bing 32, different intent)
- Question phrases: What is a visual timing test?
- Intent: free online test/exercise; clinical-screening SERPs exist for several phrases and the page states it is not clinical.

## Measured (Bing exact-match US, 2026-10-08)
depth perception test 196; concentration grid 94; peripheral vision test 128; smooth pursuit test 70; dynamic visual acuity test 77; mouse tracking test 51; odd one out game 32; go no go test 17; mot test 14.

## Competitors and gaps
Go/no-go SERP: Testable, NeuronUp, Lancaster glossary, a free browser attention test; mostly research tooling or clinical explainers. MOT SERP: academic papers, PickTests, Okazolab. Gap: instant free browser drill with honest limits and plain-language definition.

## PAA / AI-answer pattern
Definition first, what it measures, how it is scored, limits. Direct-answer block follows that order.

## Trend note
Google Trends not accessed in this run (2026-10-08); no trend claim made.

## B3 (demand / competition-ease / intent-fit, 1-5)
1 / 3 / 4

## Decision
Title kept. Removed invented population score norms. No direct-answer paragraph added: copy is in JSX and about text in Client; logged.
