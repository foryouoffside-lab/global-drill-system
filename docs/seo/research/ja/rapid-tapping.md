# ja / rapid-tapping — research log (2026-10-08)

Route: `/ja/drills/motor/movement-speed/rapid-tapping` · Market: Japan `ja-JP`

## Tools
- Bing Webmaster API keyword (jp), 2026-10-08. Google Suggest gl=jp hl=ja 2026-10-08. WebSearch (SERP seen via US-only proxy, not a JP IP). GSC, Trends, Yahoo! Japan, 5channel: API unavailable / not reachable from agent.

## Queries (Bing exact-match JP volume, measured; not Google volume)
| Phrase | Volume | Label |
|---|---|---|
| 連打ツール | 2070 | measured (Bing API jp) |
| 連打測定 | 2047 | measured (Bing API jp) |
| 連打ゲーム | 1252 | measured (Bing API jp) |
| クリック速度測定 | 388 | measured (Bing API jp) |
| cps測定 | 346 | measured (Bing API jp) |
| 連打力測定 | 229 | measured (Bing API jp) |
| クリック連打 | 141 | measured (Bing API jp) |
| CPSテスト | 107 | measured (Bing API jp) |
| クリック速度テスト | 40 | measured (Bing API jp) |
| ジッタークリック / バタフライクリック / マイクラ cps | 0 | measured 0 or unreported; kept only as FAQ vocabulary |

Suggest 2026-10-08 for `連打測定`: スペースキー, 測定器, サイト, キーボード, 1秒, ゲーム, ツール, 世界記録, スマホ, コントローラー — proxy (autocomplete). Question phrases: `連打 cps とは` (Suggest, proxy).

## SERP (WebSearch, 2026-10-08, US egress)
1. luft.co.jp rapid-fire — 1-100 s, stability analysis.
2. anysweb.co.jp/cps-test — selectable windows.
3. attackshark.jp mouse-click-tool.
4. coddy.tech/tools/ja/cps-test — 1-60 s rounds.
5. generic click-speed tools. Gap: none explain endurance with a decaying target or give a plain written answer plus FAQ in Japanese.

## Intent / entities
Tool-first, informational secondary. Entities: CPS, ジッタークリック, バタフライクリック, 指タッピング (Halstead 1947, Todor & Kyprie 1980 in drillSources).

## B3
Demand 4 (連打 family >2k Bing) · Competition ease 3 · Intent fit 5. Decision: primary `連打測定` (H1 already `連打測定・CPSテスト`); `CPSテスト` kept as secondary (volume only 107).

## Trend
Trends unavailable; no seasonality claim.

## Changes
- Title/description rewritten (primary first). Direct-answer paragraph added as first intro paragraph. Fabricated percentile column values (上位0.1% etc.) replaced with neutral labels; "ミリ秒単位の精度" and "毎秒最大600ピクセル" softened. FAQ already 10 bespoke, schema built from the same visible text.
