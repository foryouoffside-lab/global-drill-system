# ja / keyboard-recognition — research log (2026-10-08)

Route: `C:/Program Files/Git/ja/drills/motor/movement-speed/keyboard-recognition` · Market: Japan `ja-JP`

## Tools
Bing Webmaster API keyword (jp), Google Suggest gl=jp hl=ja, WebSearch (US egress; SERP not seen from a JP IP), 2026-10-08. GSC, Trends, Yahoo! Japan, 5channel: API unavailable / not reachable. Bing "no data" = unknown (shared-key rate limit), not zero.

## Queries
- Bing jp 2026-10-08: キーボード練習 / キーボード反応速度 / ブラインドタッチ: no data (rate-limited, unknown).\n- Suggest 2026-10-08 `キーボード 反応速度`: テスト, 測定, ランキング, 上げる, 軸, 遅い (proxy, autocomplete): users ask about keyboard response, mostly hardware; test/測定 modifiers support a test page.\n- SERP/PAA not captured from JP IP.

## B3 (demand / competition-ease / intent-fit, 1-5)
Demand 2 (proxy only) · Competition ease 3 · Intent fit 4.

Decision: Primary キーボード反応速度テスト (title already; H1 was generic キーボード練習). Demand not verified in Bing; kept per D6.

## Trend
Google Trends unavailable; no seasonality claim.

## Changes
lib/i18n/drills/keyboardRecognition.js ja title/subtitle retargeted; direct-answer paragraph added at top of guide; table percentile labels (上位1%/5%/20%) removed; 'delay eliminated' overclaim softened.
