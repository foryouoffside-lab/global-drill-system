# ja / barrier-sequence-pursuit — research log

Date: 2026-10-07 · Route: `/ja/drills/reaction-speed/barrier-sequence-pursuit` · Market: Japan, `ja-JP`

## Defect found
- Rendered HTML audit showed the page serving the English title, H1, guide, benchmark table and FAQ (`content.ja` was missing from `lib/i18n/drills/barrierSequencePursuit.js`). Meta description was Japanese only.

## Tools
- WebSearch (extended), query in Japanese, 2026-10-07. Google Suggest, Trends, Bing, Yahoo! Japan, 5channel: unavailable (egress blocked, `403` from the agent proxy). Bing API key revoked (see `scripts/bing/baseline/`).
- Prior evidence reused (dated, in repo): `docs/seo/research/barrier-sequence-pursuit-2026-09-20.md` — Google Suggest on 2026-09-20 returned `置きエイム 練習`, `置きエイムサイト`, `置きエイム 練習サイト`. Label: proxy (autocomplete presence), no volume.

## Queries
| Role | Phrase | Evidence | Label |
|---|---|---|---|
| Primary | `置きエイム 練習` | Suggest 2026-09-20; live SERP 2026-10-07 returns dedicated 置きエイム tools | proxy (autocomplete + SERP) |
| Secondary | `置きエイム 練習サイト`, `置きエイムサイト` | Suggest 2026-09-20 | proxy (autocomplete) |
| Secondary | `ジグルピーク 練習`, `角待ち 練習`, `プリエイム`, `反応速度` | research file 2026-09-20 (SERP vocabulary) | proxy (SERP wording) |
| Questions | 置きエイムとは / ジグルピークとは / 反応速度と命中精度どちらを優先 | FAQ set authored from page behaviour | n/a |

## SERP, top results seen (WebSearch, 2026-10-07, query `置きエイム 練習 サイト ブラウザ`)
1. okiaimx.com — OKIAIMX, VALORANT 置きエイム browser tool (5 difficulty levels, leaderboard); covered by fpsg33ks.com and an X post.
2. webtools-lab.com/tools/aim-trainer — generic JP aim trainer.
3. pc.mogeringo.com — 3D AIM TRAINER review.
4. tps.game-tansaku.net, game-ac.com — aim-game directories.
5. webtool.rm-solution.info — generic aim tool.

Gaps: only one dedicated pre-aim tool; the rest are generic aim lists. None combine peek reaction, combo and a written methodology with benchmark table and FAQ.

## B3 score (1–5)
- Demand 3 (autocomplete presence only, no volume) · Competition ease 4 (one niche tool, otherwise directories) · Intent fit 5.
- Decision: primary `置きエイム練習`; keep `ジグルピーク` as secondary gamer term. Not claiming ranking odds.

## Trend note
- Google Trends unavailable. No seasonality claim made.

## Change
- Authored `content.ja`: title, subtitle, keywords, 4 intro paragraphs, 5-row benchmark table with disclaimer, 4 protocol steps, 10 distinct FAQs. Facts taken from the drill's own rules (+100 PTS, combo up to 3.0×, level per 1750 PTS) and `lib/drillSources.js` (Donders 1868, Woods 2015, Kosinski 2008). No percentile or user-count claims.
