# ja / reaction-time — research log (2026-10-08)

Route: `C:/Program Files/Git/ja/drills/cognitive/processing-speed/reaction-time` · Market: Japan `ja-JP`

## Tools
Bing Webmaster API keyword (jp), Google Suggest gl=jp hl=ja, WebSearch (US egress; SERP not seen from a JP IP), 2026-10-08. GSC, Trends, Yahoo! Japan, 5channel: API unavailable / not reachable. Bing "no data" = unknown (shared-key rate limit), not zero.

## Queries
- 選択反応時間: no data in Bing (unknown). 反応速度テスト 2091 / 反射神経テスト 3487 (measured, Bing jp) are owned by reaction-speed/reaction-time-test, so this page no longer uses them as H1 (cannibalization fix).\n- Suggest 2026-10-08 `反応速度テスト`: fps, 平均, プロゲーマー, 格ゲー, スマホ — proxy (autocomplete).\n- Entities: 選択反応時間, ヒックの法則 (Hick 1952), Donders 1868 (in lib/drillSources.js).\n- Competitors/PAA: not captured from JP IP; generic JP reaction tools do not cover choice RT or rule reversal.

## B3 (demand / competition-ease / intent-fit, 1-5)
Demand 2 (no measured volume for 選択反応時間) · Competition ease 4 · Intent fit 5.

Decision: H1 `選択反応時間テスト` (accurate to the task, differentiates from simple reaction page). Demand not verified; kept per D6.

## Trend
Google Trends unavailable; no seasonality claim.

## Changes
app/ja/.../reaction-time/page.js: H1/subtitle to 選択反応時間テスト, keywords deconflicted, three coherent intro paragraphs with a direct-answer lead (removes 'ミリ秒単位で精密診断'), benchmark table stat/percentile columns (上位1%/5%/15%/50%) removed and note added.
