# en / drills/visual/.../distance-judgment - research log

Date: 2026-10-08 | Agent: t2b | Slug: `distance-judgment` (under /drills/visual/)

## Tools
- Bing API (`scripts/bing/bing.py keyword "<phrase>" us`): working; exact-match, Bing only, not Google volume; 0 may mean below threshold or unknown.
- Google Suggest (`scripts/keywords/autocomplete.py`, us/en): working; not volume.
- GSC (`scripts/gsc/gsc.py`): working; top 28-day queries have no term for this page. proxy.
- WebSearch (standard, US only, seen from laptop IP).

## Queries
- Primary: depth perception test
- Secondary / long-tail: depth perception test (Bing 196, measured); depth perception test online (Suggest); distance estimation test (Bing 0/unknown)
- Question phrases: How is depth perception tested? Can you test depth perception online?
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
4 / 2 / 2

## Decision
Title kept (primary first). SERP intent for 'depth perception test' is clinical/eye-doctor and military screening; this page is a looming-timing drill and says so. Direct answer added; 'zero telemetry' and Tier 1 'Stereoscopic' wording removed (page states it does not use stereo cues).
