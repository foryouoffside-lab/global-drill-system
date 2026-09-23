# Reaction Chain — Japan native SEO/AEO/GEO research

Date: 2026-09-20  
Route: `/ja/drills/physical/reflex-training/reaction-chain`  
Locale: `ja-JP` / Japan  
Scope: one drill, one locale

## Evidence boundary

Bing figures are the configured Bing Webmaster keyword endpoint's monthly exact-match and broad-match snapshots for `jp/ja-JP`; they are not Google volume and do not measure difficulty. Google autocomplete is evidence of active query expansion, not a monthly-volume number. Google Trends and Search Console were not readable in this environment, so no Trends or GSC claim is made. The public Bing SERP response was locale-inconsistent in this environment, so competition is based on the live Japanese web SERP review below and is explicitly editorial.

## Candidate demand

| Query | Bing exact | Bing broad | Google Japan autocomplete / fit |
| --- | ---: | ---: | --- |
| `エイム練習 無料 ブラウザ` | 287 | 287 | Exact phrase is not shown for the seed, but `エイム練習 ブラウザ`, `エイム練習 ブラウザ 3d`, `エイム練習 ブラウザ apex`, `エイム練習 ブラウザ valorant`, `エイム練習 ブラウザ スマホ`, and `エイム練習 ブラウザ コントローラー` are suggested. Exact tool intent; primary target. |
| `反射神経テスト fps` | 152 | 152 | Google suggests the exact phrase. Adjacent FPS/reflex intent; secondary target. |
| `反射神経テスト` | 2,504 | 2,656 | Google suggests `ゲーム`, `プロゲーマー`, `平均`, `スマホ`, `ボタン`, `フレーム`. High demand but broad and incumbent-heavy. |
| `反応速度テスト` | 1,477 | 1,477 | Related to the broad reaction-test cluster. Useful semantic support, not the page's lead because this drill is not a simple color-click test. |
| `反射神経ゲーム` | 847 | 847 | Related to the reaction-test cluster. Strong format fit, but broad. |
| `エイム練習` | 1,526 | 1,933 | Google suggests browser/site/game modifiers. Broad head term; use only in supporting copy. |
| `置きエイム 練習` | 28 | 210 | Native FPS phrase, but this drill measures interception and stopping rather than map-specific pre-aim. Supporting semantic only. |
| `反応速度測定サイト` | 46 | 46 | Native tool phrase; useful in FAQ/context, not primary. |
| `マウス エイム 練習` | 0 | 0 | No exact/broad Bing demand snapshot. Do not lead with it. |
| `オーバーフリック 矯正` | 0 | 0 | No exact/broad Bing demand snapshot. Keep as an honest problem description, not a keyword target. |
| `エイム ブレーキ 練習` | 0 | 0 | No exact/broad Bing demand snapshot. Current page wording is semantically valid but not the lead query. |

## Live SERP review

The Japanese SERP for `エイム練習 無料 ブラウザ` contains purpose-built tools and small Japanese publishers, not only global incumbents. Reviewed examples:

1. [OKIAIMX](https://okiaimx.com/) — native Japanese, browser-based, free, mouse-first pre-aim practice; strong direct-tool competitor.
2. [Aim Trainer](https://aimtrainer.online/ja/) — Japanese browser aim trainer with flick, tracking, and reaction positioning; direct tool competitor.
3. [GearPick browser aim practice](https://gear-pick.com/aim-trainer/) — native Japanese grid/flick/tracking tool plus editorial wrapper; direct tool competitor.
4. [Shooting Aim Trainer](https://shootingaimtrainer.com/ja/) — Japanese localized browser FPS aim trainer; direct tool competitor.
5. [ZeroedTools FPS tools](https://www.dfaccount.com/ja/) — broader FPS utility suite including reaction and aim tests; adjacent competitor.
6. [GamespecLab aim guide](https://gamespeclab.com/aim-training-guide) — native editorial content on pre-aim, sensitivity, and practice structure; informational competitor.

The SERP is tool-led and the strongest pages focus on static targets, flicking, tracking, or pre-aim. A narrower page that clearly defines “move to a target, then stop inside it” can own a sub-intent those pages do not foreground. This is an editorial competition judgment, not a measured difficulty score. `反射神経テスト` itself is not a winnable lead term because the Japanese SERP is populated by dedicated reaction-test tools and the query is broader than this drill.

## 14-step audit

1. Candidate query: `エイム練習 無料 ブラウザ`; secondary `反射神経テスト fps`.
2. Intent: use an interactive browser tool; secondary intent is FPS reaction practice.
3. Ranking quality: direct competitors are fast, browser-first tools with play controls above the fold.
4. Localization: top reviewed tools use native Japanese UI/copy; a Japanese page is required, not a translated English wrapper.
5. Title/H1 pattern: front-load `エイム練習`, `ブラウザ`, `無料`; explain the differentiator after the lead phrase.
6. Authority: reviewed set mixes small tools and publishers; no authority metric is available here.
7. Feature gap: reviewed tools foreground clicking/flicking/tracking; Reaction Chain exposes post-flick stopping accuracy and combo retention.
8. PAA: Google autocomplete surfaces `反射神経テスト 平均`, `反射神経テスト ボタン`, and `反射神経テスト フレーム`; these inform FAQ language without claiming PAA volume.
9. Long-tail expansion: `エイム練習 ブラウザ`, `エイム練習 サイト`, `エイム練習ゲーム 無料`, `反射神経テスト fps`.
10. Competitor matrix: direct tools win on generic aim practice; Reaction Chain differentiates on cursor stopping, overshoot control, browser-local scoring, and a scientific measurement explanation.
11. Difficulty: editorially medium for the primary long-tail, high for the broad head terms.
12. Volume cross-check: Bing exact/broad snapshots above; Google autocomplete confirms active expansions; Trends/GSC unavailable.
13. Cluster: primary `エイム練習 無料 ブラウザ`; support `エイム練習 ブラウザ`, `エイム練習ゲーム 無料`, `反射神経テスト fps`, `反射神経ゲーム`, `反応速度テスト`, `置きエイム 練習`.
14. Ranking probability: plausible for the specific tool sub-intent if the page keeps the native term in the title/H1, answers the task immediately, and is internally linked from the Japanese physical hub; not a credible #1 claim for `反射神経テスト` or `エイム練習` alone.

## Implementation decision

Retain the existing Japanese route and full guide depth. Change the title, description, Open Graph copy, schema names, and visible H1/subtitle to native demand-led wording. Keep `エイムブレーキング` and `オーバーフリック` in explanatory copy because they describe the drill's differentiator, not because Bing measured demand for them. Keep exactly ten distinct Japanese FAQs and the existing scientific references. Do not modify the other five locales in this run.

## AEO/GEO limits

The page can be made extractable with a short definition, question-shaped sections, tables, FAQs, schema, references, and transparent browser-timing limits. A before/after citation-rate test across ChatGPT, Copilot, Perplexity, and Google AI Overviews was not run, so AI visibility is unmeasured and no “AI-optimized” outcome claim is made.
