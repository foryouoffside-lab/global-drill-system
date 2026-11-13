# Search performance baselines

One folder per pull date. Each is a frozen GSC + Bing snapshot used to measure the
effect of a deploy. First baseline: `2026-11-13/` (taken before that day's deploy).

## Create / compare

```
python scripts/seo/baseline_pull.py [YYYY-MM-DD]          # writes docs/seo/baselines/<date>/
python scripts/seo/baseline_compare.py 2026-11-13 <date> [--window 28|90] [--top 20] [--country kor] [--out DIR]
```

- Pull needs the read-only GSC token (`scripts/gsc/gsc.py auth`) and the Bing key (`BING_API_KEY` or `scripts/bing/.bing-key`).
- Before pulling a dated baseline, refresh the two copied inputs for the same date:
  `python scripts/seo/keyword_tracker.py snapshot 28` (-> `docs/seo/keywords/snapshots/<date>_28d.csv`) and an index-status pull saved as
  `docs/qa/gsc_index_<date>.jsonl`. `scripts/gsc/gsc_index.py` writes `scripts/gsc/index-status.json` instead; copy that to
  `<baseline>/google_index_status.jsonl` by hand (compare reads either JSONL or a JSON array, `coverageState` or `coverage`).
  The pull script notes any missing input in `manifest.json`.
- Compare prints net + top movers for totals, device, country, query, page, Bing query (last 28 days of data),
  and per-URL index-status changes. `--country` (GSC 3-letter code: `usa`, `kor`, `jpn`...) scopes the query and page diffs to one market.
  `--out` writes the full diffs as CSV. Negative `d_pos` = ranking improved.
- Compare like with like: the GSC windows are rolling, so compare 28d to 28d only once the new window no longer overlaps the old one (28+ days after the deploy for a clean read; 90d needs 90).

## 2026-11-13 contents

GSC property `https://skilldrills.online/`, latest finalized date 2026-11-10.
28d = 2026-10-14..2026-11-10, 90d = 2026-08-13..2026-11-10. Columns: dims + clicks, impressions, ctr, position.

| File | Rows (28d / 90d) | What |
|---|---|---|
| `google_query_country_{28,90}d.csv` | 1413 / 2196 | query x country |
| `google_page_country_{28,90}d.csv` | 585 / 891 | page x country |
| `google_page_query_{28,90}d.csv` | 869 / 1242 | page x query |
| `google_query_{28,90}d.csv` | 676 / 925 | query totals (includes anonymized-query traffic the x-country tables drop) |
| `google_page_{28,90}d.csv` | 191 / 211 | page totals |
| `google_country_{28,90}d.csv` | 150 / 175 | country totals |
| `google_device_{28,90}d.csv` | 3 / 3 | device totals |
| `google_daily_{28,90}d.csv` | 28 / 90 | daily date series |
| `google_search_appearance_{28,90}d.csv` | 0 / 0 | searchAppearance: API returned no rows (no rich-result appearances) |
| `google_index_status.jsonl` | 648 URLs | URL Inspection copy of `docs/qa/gsc_index_2026-11-13.jsonl`: 207 PASS (indexed), 441 NEUTRAL (not indexed) |
| `keyword_snapshot_28d.csv` | 637 | copy of `docs/seo/keywords/snapshots/2026-11-13_28d.csv` (registry primaries, page+keyword metrics) |

Totals: 28d 1,796 clicks / 28,593 impressions; 90d 2,412 / 36,893.

Bing Webmaster API (`skilldrills.online`), full history the API returns:

| File | Rows | Range | What |
|---|---|---|---|
| `bing_query_stats.csv` | 1973 | 2026-05-15..2026-11-06 | query x week (Date = week bucket) |
| `bing_page_stats.csv` | 818 | 2026-05-15..2026-11-06 | page x week (URL is in the `Query` column, Bing's naming) |
| `bing_rank_traffic_daily.csv` | 185 | 2026-05-10..2026-11-10 | daily clicks/impressions |
| `bing_crawl_stats.csv` | 176 | 2026-05-13..2026-11-07 | daily crawl/index counts |

`manifest.json` records the exact ranges, row counts and API status of every file.

## Known gaps

- Bing exposes no country (or device) dimension through the Webmaster API; Bing is site-wide only.
- Bing query/page stats are weekly buckets and positions are per-bucket averages; `AvgClickPosition = -1` means no clicks.
- The pull retries Bing calls that return `d: null` (rate-limit nulls look like empty data); a file with status other than `ok` in `manifest.json` is unreliable, not zero.
- GSC drops anonymized queries from query-dimension tables, so query/query_country sums are below page/country totals.
- Bing keyword-volume stats for registry primaries are deliberately not pulled (quota).
