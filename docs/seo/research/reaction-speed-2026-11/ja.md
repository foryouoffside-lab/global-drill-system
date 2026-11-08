# Reaction-speed: Japan (ja, JP), 2026-11-08

Data: `ja.csv` (103 rows). Raw data is in `_work-ja/` (ac.json autocomplete, gsc_jp.tsv, kw1/kw2.jsonl Bing, serp.jsonl). Earlier measurements were reused, not re-measured: `scripts/keywords/out/reaction-speed-intl-2026-09-04.csv` and `docs/seo/research/demand-2026-10/_work-ja/m1,m2,serp*.jsonl`.

Labels: **Bing** = Bing Webmaster exact monthly volume, using the newest measurement. **GSC** = Google Search Console, country=jpn, 90 days, position/impressions. **UNKNOWN** = not measured, or the SERP was unusable.

## Findings
- Google already ranks the **hub** `/ja/drills/reaction-speed` for the test head terms. The real test page (`light-reaction`) has **zero JP GSC rows**. Examples: 反射神経テスト pos 13.0 with 201 impressions (GSC); 反応速度テスト pos 12.4 with 54 impressions.
- The hub sits at **pos 5-7** for the "train reflexes site" phrases: 反射神経 鍛える サイト 6.4/85, 反射神経を鍛えるサイト 5.2/15, 反射神経ゲームサイト 7.4/57, 反応速度トレーニング 6.7/11. That makes it the natural owner of 鍛える/サイト.
- Bing demand is concentrated in a few terms: 反射神経テスト 3,487, 反応速度テスト 2,091, 反射神経ゲーム 1,054, 反射神経 518, 動体視力トレーニング 353, 動体視力テスト 254, 反応速度測定 203, 反射神経測定 181, 反射神経テスト fps 172, 反射神経 鍛える 165, 動体視力 152. Almost every long-tail and modifier phrase measured 0 on Bing JP (平均, 鍛え方, スマホ, fps 反応速度, valorant 反応速度, 体内時計ゲーム, ゴーノーゴー課題, トラッキングエイム). Bing's JP share is small, so 0 means "below threshold", not "no Google demand". Autocomplete confirms these phrases exist.
- Competition (Bing SERP): 反射神経テスト, 反応速度テスト and 反応速度測定 are led by thin single-page tools (reaction.html.xdomain.jp, tps.game-tansaku.net, webtools-oasis.com, cps-check.com), so competition is LOW. 動体視力テスト: small games plus blogs (game.weclo.net, curazy.com), LOW-MED. 反射神経 鍛える: content/how-to (wikihow.jp, cocoiro.me), MED.
- The Bing JP SERP probe returned off-topic location results (parking, Makuhari Messe, ENT clinics, Google Maps) for 5 queries and timed out on 6. Those are labelled UNKNOWN.
- ビジョントレーニング gets 1,527 on Bing, but autocomplete shows the intent is kids/developmental therapy (プリント, 発達障害, 療育). It fits saccadic-gallery only partially, so it is used as a secondary keyword there and nowhere as a primary.

## Keyword map (one primary per page)
| Page | Primary | Bing | Competition | GSC now | Secondary |
|---|---|---|---|---|---|
| Hub `/ja/drills/reaction-speed` | 反射神経 鍛える (サイト) | 165 | MED | 9.8 / 41 impr. (サイト variant 6.4 / 85) | 反応速度 鍛える, 反応速度トレーニング, 反射神経トレーニング, 反応速度 上げる方法 |
| light-reaction | 反射神経テスト | 3,487 | LOW | hub 13.0 (page itself: none) | 反応速度テスト 2,091, 反応速度測定 203, 反射神経測定 181, 反射神経テスト fps 172, 平均/年齢/スマホ (FAQ) |
| reflex-training-drill | 反射神経ゲーム | 1,054 | LOW-MED | none | 反射神経ゲーム 無料, 反射神経ゲームサイト (hub 7.4/57), ブラウザ |
| reaction-game | 反応速度ゲーム | 0 (反応速度 ゲーム) | UNKNOWN | none | 反射神経 鍛える ゲーム, 反応速度 鍛える ゲーム |
| visual-tracking-speed-test | 動体視力テスト | 254 | LOW-MED | 14.0 (page) | 動体視力トレーニング 353, 動体視力 152, 動体視力 鍛え方, 動体視力テスト 平均 |
| saccadic-gallery | 眼球運動 トレーニング | 21 | UNKNOWN | none | ビジョントレーニング (partial intent), 目の体操 25, 視線移動 トレーニング |
| reaction-time-test (timing game) | 体内時計ゲーム | 0 | UNKNOWN | none | タイミングゲーム 21, ストップウォッチ ゲーム, 体内時計ゲーム サイト |
| go/no-go | Go/No-Goテスト (unchanged) | 0 (all variants) | UNKNOWN | none | not changed |
| fps-tracking-trainer | トラッキングエイム練習 (unchanged) | 0 | UNKNOWN | none | not changed |
| barrier / market-doors | 置きエイム / クリアリング練習 (unchanged) | 0 (Sep) | UNKNOWN | none | not changed |

## Implemented
- **Hub** (`lib/i18n/reactionSpeedHubNative.js`, ja block only):
  - Title: 反射神経を鍛えるサイト｜反応速度トレーニング. Description, H1, intro and keywords updated to match.
  - The start button now reads 反射神経テストを始める. It links to light-reaction, so the anchor text matches that page's primary keyword.
  - FAQ: 3 new local-phrasing questions (反射神経を鍛える方法, 反応速度を上げる方法, ゲームで鍛えられるか), and the eSports question reworded as FPSの反射神経.
  - ItemList names now match the card names.
- **light-reaction**:
  - Title: 反射神経テスト・反応速度テスト｜無料 | SkillDrills. New description and keywords.
  - FAQ (9 questions) rewritten to remove unsourced physiology figures, the caffeine ms claims and the 200-250 ms "healthy adult" claim. The average question now cites Kosinski 2008 (~190 ms, college age).
  - The guide intro and benchmark tier descriptions were de-hyped ("神速/超覚醒" and the brain-pathway claims removed).
- **reflex-training-drill / reaction-game / visual-tracking-speed-test** (ja blocks of the shared files): retargeted title, description and keywords. Phrases owned by light-reaction (反射神経テスト, 反応速度テスト) removed from their keywords. One FAQ per page added in local phrasing.
- **saccadic-gallery**: was cannibalising visual-tracking on 動体視力トレーニング. It now targets 眼球運動トレーニング. The FPS-benefit and reading-speed overclaims were corrected.
- **reaction-time-test**: already honest. One keyword swapped (体内時計ゲーム サイト).
- **`lib/i18n/drillNames.js`** (ja names): reaction-game is now 反応速度ゲーム（落下ターゲット）. Before this, two hub cards were both named 反射神経ゲーム.

## KILL list (targets with no measured demand)
- 反応速度 テスト (spaced form), 無料 反応速度テスト, human benchmark 日本語, 反応速度 練習, 反射神経 練習: all Bing 0. They are kept only as natural text, never as primaries.
- サッケード, サッケード トレーニング, 跳躍性眼球運動: Bing 0. Demoted to secondary.
- ピーク 練習, ジグルピーク, クリアリング 練習, プリエイム 練習, 角待ち 対策, fps トラッキング, トラッキング 練習: Bing 0 (Sep). The current names stay; they are not worth retargeting until measured otherwise.
- 反応速度 平均 / 反射神経 平均 / 反応速度テスト 平均: Bing 0, but they appear in autocomplete. They are answered as FAQs on light-reaction and are not titles.

## Not measured / open
- No Google-side volume (Yahoo! JAPAN uses Google results). No Google/Yahoo SERP was viewed manually in this run.
- `--trend` was not run.
- Competition is unknown for 平均, 鍛える サイト, 動体視力ゲーム and timing-game terms (Bing SERP garbage or timeouts).

## Pass 2

Mode changed 2026-11-08: owner asked for ONE page x ONE country per step (sequential, coordinator-reviewed).

| page | primary | demand evidence | competition | status |
|---|---|---|---|---|
| go/no-go | Go/No-Go課題 | Bing 0 (exact+broad); Google-JP autocomplete: `go/no-go課題` is #1 suggestion for "go/no-go", plus `go/no-go課題 アプリ` (proxy only) | UNKNOWN (all 5 Bing SERP probes timed out) | DONE 2026-11-08: title/desc/H1/FAQ/schema retargeted; fabricated claims removed (rIFC "measurement", 240Hz "dramatic" claim, physiology tier labels, "1-2x/day" routine); tier table relabelled as SkillDrills practice guide; all mechanic claims verified vs ChromaSyncClient.js (45 s, +2 s cap 60, 70/30, 600->100 ms, idle-click + spam penalty, no keyboard). Render audit: 1 h1, 9/9 FAQ visible, no noindex. |
| remaining ja pages | - | - | - | pending, one per step |
