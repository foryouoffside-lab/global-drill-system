# Keyword registry

`registry.csv` holds one row per drill/hub page, EN plus every localized tree
(ko, ja, de, fr, pt, es): the page URL, its current primary keyword, the GSC
match string (`query`), where the keyword was set (`set_in`, `set_date`), and
the demand evidence (`bing_volume`, `gsc_pos`, `competition`, `verdict`).

- `primary` is what is live on the page now. When a research log disagrees with
  the page title, the title wins (title lead before ` | ` / ` - `).
- `competition` is `unknown` unless a GSC position backs it (serp_probe is
  broken). Bing has no difficulty metric; never write KD numbers.
- `verdict`: blank volume = unmeasured, 0 = no-demand, 1-99 = low-demand,
  100+ = high-demand-low-comp if competition is low, else demand-unknown-comp.
- EN pages and pages without a research log are `unmeasured`.

## Commands

```
python scripts/seo/keyword_tracker.py build             # rebuild registry.csv (reads page.js titles; dev server on :3000 for the rest)
python scripts/seo/keyword_tracker.py snapshot 28       # GSC page+query metrics -> snapshots/<date>_28d.csv
python scripts/seo/keyword_tracker.py compare [old new] # diff two snapshots (default: last two)
```

Sources for `build`: `docs/seo/research/*-2026-11/_pass*_<page>.log`,
`extra_*.csv` (manual rows), `evidence_*.csv` (demand evidence), and the
visual/cogmem map CSVs.

After a keyword change: add the log line or an `extra_*.csv` row, rebuild,
snapshot ~28 days later, then compare.

## Baselines

- `snapshots/2026-11-12_28d.csv`: fps, physical, reaction-speed, motor only (before the physical deploy).
- `snapshots/2026-11-13_28d.csv`: full baseline, all categories, EN + 6 locales.
