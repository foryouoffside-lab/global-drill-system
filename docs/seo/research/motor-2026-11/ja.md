# MOTOR category: Japan (ja, ja-JP, cc=jp), 2026-11-09

Status: COMPLETE. Bing 40/40 `ok` (1 run, ja-JP), autocomplete 10/10, SERP probes 3/3 (2 timed out = UNKNOWN, not retried), GSC read-only (reused export). Raw: `_work-ja/` (gsc_ja_motor_pq.json, ac.txt, kw.tsv, kw.jsonl, serp.tsv, serp.jsonl). Rows: `ja.csv`.

## Inputs
- GSC 90d page level (gsc-pages-90d.csv): `/ja/drills/motor/hand-eye-coordination/aim-trainer` 117 clk / 1,737 impr pos 7.9 (PROTECT); `/ja/drills/motor` 4 / 20 pos 8.0; finger-sequencing 3 / 18 pos 6.8. Other ja motor pages 0.
- GSC page x query (`_work-ja/gsc_ja_motor_pq.json`, reused): aim-trainer = エイム練習 ブラウザ 487i/34c pos 8.7, エイム練習 360i/24c pos 6.5, aim 練習 94i, aim練習 81i, エイムテスト 101i pos 9.6, aim練習 ブラウザ 70i, エイムトレーナー 46i, エイム練習サイト 27i, マウス エイム練習 26i, エイムトレーニング 23i. Hub = エイムテスト 1i, マウスエイム 練習 6i, 連打測定 キーボード 1i pos 3.
- GSC query export (all pages): クリック ゲーム 連打 2i pos 39.5, クリック連打 2i pos 25, マウス クリック テスト 3i pos 20, クリック 連打測定 1i pos 5, 連打 計測 1i pos 9, マウス連打ゲーム 1i pos 6 -> CPS intent reaching the site but no rapid-tapping URL ranking.
- Prior Bing ja-JP (demand-2026-10/_work-ja/m1+m2.jsonl, 2026-10): 連打ツール 2,070/2,441, 連打測定 2,047/2,090 (trend -8%), 連打ゲーム 1,252/1,335, 連打 886, クリック速度測定 388, CPSテスト 107, 連打測定 スペースキー 43, クリック速度テスト 40, クリック 連打 24; キーボードテスト 7,968/8,372, キーボード テスト 670, キーボードテスト 日本語配列 384, マウステスト 317; タイピングテスト 949, タイピング ゲーム 1,759, e-typing 18,179, 寿司打 679,667; イライラ棒 ゲーム 21; エイム練習 3,098/4,010 (2026-11-09 canary).
- TAKEN (fps ja, fps-2026-11/ja.md): FPS エイム練習 (hub), VALORANT エイム練習, 置きエイム練習, フリックエイム練習 (flick-shot), リコイル練習, ストレイフ追いエイム練習, トラッキングエイム練習, レレレ撃ち対策, ジグザグ移動の敵に当てる, マイクロフリック練習, ターゲット優先順位の判断, ターゲットスイッチ練習, 縦エイム練習, 180度 振り向きエイム練習, FPS 集中力トレーニング, FPS 反応速度 測定. Motor aim-trainer owns エイム練習 / エイム練習 ブラウザ / エイムトレーナー / エイムテスト.
- TAKEN (reaction ja): 反射神経テスト, 反応速度テスト, 反射神経を鍛える, 体内時計ゲーム, 反射神経ゲーム, 反応速度ゲーム, 眼球運動トレーニング, 索敵エイム練習, ピーク反応練習, 動体視力テスト, 動く的のエイム練習, Go/No-Go課題.
- Out-of-category squatter: `/ja/drills/physical/fitness/speed-drill` title `クリック速度測定＆クリック連打テスト – 無料エイム反応速度練習`; drill = click moving shrinking targets, not a CPS counter (see de.md collision 6).
- Drill mechanics (client code, same as de.md): aim-trainer = click shrinking targets; drag-and-drop = drag objects into drop zones; precision-flick-shot = flick to targets, bullseye core scores double; finger-sequencing = MOUSE clicks on a chain of nodes in path order (red "!" traps), no keyboard; keyboard-recognition = press the prompted key(s) from game keybind presets (Valorant etc.), ignore fake prompts; NOT typing/WPM, NOT a hardware key tester; rapid-tapping = click as fast as possible 45 s, reports CPS, mouse only (keydown = Escape); steady-hand = cursor through narrowing corridor, wall touch resets (イライラ棒); tracing = keep cursor on a moving point along a path.

## Autocomplete (Google Suggest gl=jp hl=ja, PROXY not volume; `_work-ja/ac.txt`, 10/10 calls)
- `連打測定` (69): サイト, 器/機, スペース キー, 1秒, キーボード, ゲーム, ツール, スマホ, 右クリック, マウス, cps, クリック, 平均, 無料, ランキング, 世界記録, コツ, web, エンター, コントローラー. Drill is mouse/tap only -> キーボード/スペース/エンター/コントローラー variants NOT honest.
- `クリック速度` (36): 測定, テスト, チェック, 計測, 平均, 上げる, 鍛える, サイト, 世界記録; plus OS-setting intent (変更, 設定, windows11) and hardware latency (ms, 2ms, クリック応答速度) -> avoid.
- `キーボード 反応速度` (47): mostly hardware/settings intent (上げる, 設定, 軸, 有線 無線, razer/logicool, windows11). Drill-relevant: キーボード 反応速度テスト, 測定, 計測, 確認, valorant キーボード 反応速度. Copy must say it measures reaction to on-screen key prompts, not device latency.
- `キー入力 練習` (10): サイト, フリーソフト, キーボード入力 練習 アプリ -> typing-tutor / beginner intent; weak.
- `イライラ棒` (225): dominated by physical toy/DIY (作り方, ダンボール, 自作, 文化祭), TV show (炎のチャレンジャー, ウッチャンナンチャン), trademark. Online intent: ゲーム, ゲーム 無料, ブラウザ, ブラウザゲーム, web, マウス, 無料ゲーム, pc, flash, フリーゲーム, サイト, 迷路.
- `マウス 練習` (123): beginner/kids computer-literacy (金魚すくい, もぐらたたき, 小学生, 初心者, 幼児, ドラえもん, biglobe) + mouthpiece (楽器) noise; gaming slice = マウス aim 練習, マウス エイム 練習 (サイト), マウス 練習 fps, マウス 操作 練習 fps, キーマウ 練習, apex キーマウス 練習, マウス フリック 練習, マウス トラッキング 練習, マウス 連打 練習, マウス 練習 ドラッグ, マウス 練習 迷路.
- `ドラッグ 練習` (20): ドラッグ 練習 ゲーム, ドラッグ アンド ドロップ 練習, マウス ドラッグ 練習; ドラッグクリック練習 = Minecraft drag-click (different intent, avoid).
- `マウス 精度` (76): Windows "ポインターの精度を高める" setting dominates (wrong intent); drill-relevant: マウス精度テスト, マウス 精度 テスト/チェック/測定/確認, マウス クリック 精度, マウス 操作 精度.
- `マウス トレース` (34): AviUtl / line-trace robot / micromouse noise -> no native gaming phrase for tracing; closest = マウス トラッキング 練習 (from マウス 練習 seed).
- `順番 クリック` (57): PowerPoint/Canva animation order, JS click events, Excel -> finger-sequencing has NO native phrase.

## SERP (Bing cc=jp, 3/3 probes used; `_work-ja/serp.jsonl`)
- `連打測定`: arealme.com (CPSタップスピードテスト), Logicool S3 page (マウスクリック連射テスト), typing.twi1.me (typing game), unityroom (連打検定 game), reaction.html.xdomain.jp. Only 5 organic, 0 ads, no answer box. Competition LOW: thin hobby tools + one brand page; no dedicated JP CPS domain wall like DE/KR.
- `イライラ棒 ゲーム`: probe timeout (selector) = UNKNOWN, not retried.
- `キーボード 反応速度 テスト`: probe timeout = UNKNOWN, not retried.

## Bing volume (ja-JP, exact/broad monthly; `_work-ja/kw.jsonl`, 40/40 ok, 2026-11-09)
- `連打測定` 2,555 / 2,652 (was 2,047 in 2026-10: +25%) - biggest native motor term.
- `cps 測定` 1,410 / 1,452 (NEW, not measured before); `cpsテスト` 229 (was 107); `クリック 連打` 54.
- `イライラ棒` 278 (bare; AC = toy/TV/DIY intent); `イライラ棒 ゲーム` 21 (2026-10).
- `マウス練習` 209 (AC = beginner/kids mouse-practice + some FPS slice); `キーボード 練習` 97 (mixed typing intent).
- Prior (2026-10, not re-measured): 連打ツール 2,070 (auto-clicker intent), 連打ゲーム 1,252, クリック速度測定 388, クリック速度テスト 40, キーボードテスト 7,968, タイピングテスト 949, マウステスト 317.
- 0: every spaced/modifier variant (連打測定 サイト/マウス, クリック速度 測定 spaced, キーボード 反応速度 テスト/測定, イライラ棒 ゲーム 無料/ブラウザ/マウス, ドラッグ 練習, マウス精度テスト, マウス エイム 練習, マウス トラッキング 練習, 順番にクリック ...). Pattern: JP Bing concentrates on the unspaced head form; modifiers read 0.

## Page -> primary map (one primary per page; paths under `/ja/drills/`)

| page | current title | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition note | action |
|---|---|---|---|---|---|---|
| motor (hub) | マウス精度テスト・エイム練習 | マウス練習 | マウス操作 練習, 連打測定 / エイム練習 only as child-card anchors | マウス練習 209/209; GSC 20 impr pos 8.0 (エイムテスト, マウスエイム 練習); AC マウス 練習 ゲーム/サイト/fps | UNKNOWN (AC shows kids-tutorial sites) | retarget: drop `エイム練習` (motor aim-trainer owns it; hub collected only 6-impr aim leakage) and `マウス精度テスト` (-> precision-flick-shot). e.g. `マウス練習｜精度・連打・操作を鍛える無料ドリル`. Copy must be honest: timed accuracy drills, not a kids' tutorial |
| hand-eye-coordination/aim-trainer | エイム練習｜無料ブラウザエイムトレーナー | エイム練習 | エイム練習 ブラウザ, エイムトレーナー, エイムテスト, マウス エイム練習 | 3,098/4,010; GSC 117 clk / 1,737 impr pos 7.9 (エイム練習 ブラウザ 487i, エイム練習 360i, エイムテスト 101i) | MEDIUM (fps-2026-11) | PROTECT, keep unchanged |
| hand-eye-coordination/drag-and-drop | ドラッグ＆ドロップ練習｜マウス操作テスト | ドラッグ＆ドロップ練習 | マウス ドラッグ 練習, ドラッグ 練習 ゲーム | all 0; AC ドラッグ 練習 ゲーム / ドラッグ アンド ドロップ 練習 / マウス ドラッグ 練習 | n/a | keep (no-demand descriptive); avoid ドラッグクリック (Minecraft intent) |
| hand-eye-coordination/precision-flick-shot | フリックエイム練習｜マウス精度テスト | マウス精度テスト | マウス 精度 チェック, 中心を狙う精密クリック | マウス精度テスト 0, マウス 精度 測定 0; AC マウス精度テスト / 精度 テスト / チェック / 測定 | n/a | retarget: `フリックエイム練習` = fps/flick-shot-training primary (collision). e.g. `マウス精度テスト｜的の中心を狙う精密フリック`. Copy must not imply the Windows "ポインターの精度を高める" setting |
| movement-speed/finger-sequencing | ターゲット切替エイム練習・順番クリック | 順番クリック練習 | 順番にクリック, ルート順にターゲットを押す | 順番にクリック 0; AC 順番 クリック = PowerPoint/JS noise; GSC 18 impr pos 6.8 | n/a | retarget (no-demand descriptive): drop `ターゲット切替エイム練習` (overlaps fps ターゲットスイッチ練習 + aim-trainer エイム練習). e.g. `順番クリック練習｜ルート通りにマウスで押す` |
| movement-speed/keyboard-recognition | キーボード反応速度テスト \| キー入力測定 | キーボード反応速度テスト | キーボード 練習 (97, mixed), キー配置 練習, valorant キーボード 反応速度 | キーボード 反応速度 テスト/測定 0; AC キーボード 反応速度テスト/測定/確認 (but AC dominated by hardware settings) | UNKNOWN (probe timeout) | keep; copy must state it times reaction to on-screen key prompts, not device latency. Do NOT target キーボードテスト (7,968) / タイピングテスト (949): drill is not a key checker or typing test. Note: primary contains `反応速度テスト` (light-reaction); the `キーボード` prefix keeps it distinct, keep `キーボード` first |
| movement-speed/rapid-tapping | 連打測定・CPSテスト｜クリック速度を45秒計測 | 連打測定 | cps 測定 (1,410), CPSテスト (229), クリック速度測定 (388, 2026-10), 連打ゲーム (1,252, 2026-10), クリック 連打 (54) | 2,555/2,652; GSC 0 on this URL (CPS queries leak to other pages at pos 5-66) | LOW (Bing: arealme, Logicool page, unityroom, hobby tools; 5 organic) | keep title; add `CPS測定` to h1/description; honest: mouse/tap only, 45 s. Do NOT add スペースキー/キーボード/エンター variants (drill ignores keys). Biggest motor opportunity in ja after aim-trainer |
| precision-control/steady-hand | イライラ棒ゲーム｜マウス精度と手の安定性テスト | イライラ棒ゲーム | イライラ棒 (278, toy/TV intent), イライラ棒 ブラウザ, マウス 迷路 | イライラ棒 ゲーム 21 (2026-10); variants 0; AC イライラ棒 ゲーム 無料 / ブラウザ / web / マウス | UNKNOWN (probe timeout) | keep; consider `イライラ棒ゲーム｜ブラウザで遊べる無料マウス版`. Note イライラ棒 is a registered trademark (AC 商標) - use generically/descriptively, no brand claims |
| precision-control/tracing | マウストレースゲーム \| カーソル追従テスト | カーソル追従テスト | マウストレースゲーム, 線に沿って動かす | all 0; AC マウス トレース = AviUtl/robot noise; マウス トラッキング 練習 0 | n/a | keep (no-demand descriptive), lead with `カーソル追従テスト`; avoid `トラッキングエイム練習` (fps pro-smooth-pursuit) |

## Collisions resolved
1. precision-flick-shot `フリックエイム練習` vs fps/flick-shot-training primary `フリックエイム練習` -> fps keeps; motor moves to `マウス精度テスト`.
2. Hub `エイム練習` vs motor aim-trainer (PROTECTED owner of エイム練習 3,098) -> hub drops it; hub takes `マウス練習` (209).
3. Hub `マウス精度テスト` -> moves to precision-flick-shot (hub and child must not share).
4. finger-sequencing `ターゲット切替エイム練習` vs fps/target-switching-swarm `ターゲットスイッチ練習` and aim-trainer `エイム練習` -> finger-sequencing becomes `順番クリック練習`.
5. OUT OF SCOPE, flag: `/ja/drills/physical/fitness/speed-drill` title `クリック速度測定＆クリック連打テスト` squats rapid-tapping secondaries (クリック速度測定 388, クリック 連打 54) and is dishonest (drill = click moving shrinking targets, no CPS). Needs retarget in a physical pass.
6. keyboard-recognition `キーボード反応速度テスト` contains reaction light-reaction's `反応速度テスト`; kept because Bing reads the compound separately and AC shows the compound as its own query. Watch GSC for cannibalisation.

## Kill list (Bing ja-JP exact 0, status ok)
連打測定 サイト, 連打測定 マウス, マウス 連打 測定, 連打 テスト, クリック速度 測定 (spaced), クリック速度チェック, マウス連打ゲーム, マウス 連打 練習, キーボード 反応速度 テスト, キーボード 反応速度 測定, キー入力 練習, キー入力練習, キーボード 入力 練習, キーマウ 練習, キーマウ 練習 ブラウザ, キー マウス 練習 ゲーム, イライラ棒 ゲーム 無料, イライラ棒 ブラウザ, イライラ棒 マウス, マウス 迷路, ドラッグ 練習, マウス ドラッグ 練習, ドラッグ アンド ドロップ 練習, マウス精度テスト, マウス 精度 測定, マウス 操作 練習, マウス 練習 ゲーム, マウス 練習 サイト, マウス エイム 練習, マウス トラッキング 練習, マウス カーソル 練習, 順番にクリック, マウス 練習 クリック.
Caveat: JP Bing returns 0 for most spaced variants even where AC shows the query (see fps ja.md); treat 0 as "below Bing floor", not proof of no Google demand.

## Decisions needed
- Keyboard tester: `キーボードテスト` 7,968 + `キーボード テスト` 670 + `キーボードテスト 日本語配列` 384 (2026-10) = ~9k/mo in JP alone. Only reachable with a real key-checker tool (press any key, see it light up, JIS layout). keyboard-recognition must not claim it. Same product decision as de/ko.
- Typing: タイピングテスト 949 / タイピング ゲーム 1,759 / e-typing 18k / 寿司打 680k. No current drill measures typing; out of scope unless a typing drill is built.
- Physical speed-drill ja retarget off クリック速度測定 (collision 5).

## Unknown / not measured
- SERPs for イライラ棒 ゲーム and キーボード 反応速度 テスト (timeouts). Trend not run. cps 測定 trend unknown (first measurement).
