# PHYSICAL category - ja (ja-JP) keyword map - 2026-11-10

Status: IN PROGRESS (inputs + GSC + AC done; Bing queued behind ko)

## Inputs used
- GSC 90d page x query `/ja/drills/physical*` (`_work-ja/gsc-page-query-90d.jsonl`): hub 20 impr pos 8.7 (`神経刺激ドリル` 4i p12, `physical drill` 3i p3); complex-pattern 4i p8.5; jump-sequence 8i p9.6; speed-drill 29 impr pos 20.2, ALL queries are rapid-click intent (`クリック 連打測定` p5, `連打 計測` p9, `マウス連打ゲーム` p6, `クリック 速度 測定` p7, `クリック連打` p25, `マウス クリック テスト` p20) - the page ranks for a mechanic it does not have.
- Prior measured Bing jp (status ok): 反射神経テスト 3,487 / 反射神経ゲーム 1,054 / 反射神経 518 / 反射神経 鍛える 165 / 反射神経テスト fps 172 (all reaction-speed, TAKEN); クリック速度測定 388, クリック速度テスト 40 (motor rapid-tapping secondaries, TAKEN); 連打ゲーム 1,252, 連打測定 2,047 (motor rapid-tapping, TAKEN); 避けゲー 0, 周辺視野 トレーニング 0, 定規 キャッチ 反射神経 0, 反射神経トレーニング 0; 周辺視野 22 (2026-10-08).
- TAKEN (never reuse as primary): fps `FPS エイム練習`, `VALORANT エイム練習`, `置きエイム練習`, `フリックエイム練習`, `リコイル練習`, `ストレイフ追いエイム練習`, `トラッキングエイム練習`, `レレレ撃ち対策`, `マイクロフリック練習`, `ターゲットスイッチ練習`, `縦エイム練習`, `180度 振り向きエイム練習`, `FPS 集中力トレーニング`, `FPS 反応速度 測定`; motor `マウス練習`, `エイム練習`, `ドラッグ＆ドロップ練習`, `マウス精度テスト`, `順番クリック練習`, `キーボード反応速度テスト`, `連打測定` (+ CPS/クリック速度/連打ゲーム secondaries), `イライラ棒ゲーム`, `カーソル追従テスト`; reaction `反射神経 鍛える`, `反射神経テスト`, `反射神経ゲーム`, `反応速度ゲーム`, `動体視力テスト`, `眼球運動 トレーニング`, `体内時計ゲーム`, `Go/No-Go課題`.

## Effective current titles (Object.assign overrides win)
- hub: `反応速度・敏捷性トレーニング | 無料フィジカルドリル` (base `瞬発力＆反射神経トレーニング測定 (11種)` overwritten).
- jump-sequence: `リズムジャンプ練習 | ジャンプタイミングゲーム` (base `ジャンプ力トレーニング＆プライオメトリクス練習` = real-workout claim, dead but in source).
- speed-drill: `連打ゲーム｜縮む標的をクリックして反応を鍛える` (base `クリック速度測定＆クリック連打テスト`) - FALSE: drill clicks moving shrinking targets, no clicks/sec measurement; `連打ゲーム` is also a motor rapid-tapping secondary (collision).
- Mechanics: see ko.md (same drills).

## Autocomplete (Google jp, 10 calls, `_work-ja/ac.txt`) - proxy only
- 瞬発力 テスト: `瞬発力テスト 無料`, `瞬発力テスト ゲーム`, `瞬発力 web`, `瞬発力 体力テスト` (school fitness noise).
- 手ブレ テスト: camera/video stabilisation only (AviUtl, Premiere, 手ブレ補正) - wrong intent; `手 ブレ マウス`, `手ブレ ゲーム` marginal.
- 目と手の協応: dominated by child-development / special-education intent (保育, 療育, 発達障害, プリント, 自立活動); `目と手の協応 ゲーム`, `目と手の協応 大人`, `目と手の協応 テスト` exist.
- 図形 記憶: `図形 記憶 テスト/ゲーム/検査/プリント`.
- 避ける ゲーム: huge long tail (`避ける ゲーム 無料/ブラウザ/サイト`, `弾幕 避ける ゲーム`, `障害物を 避ける ゲーム`, `ひたすら 避ける ゲーム`, `左右 に 避ける ゲーム`).
- ジャンプ ゲーム: Shonen Jump franchise games + platformers - wrong intent.
- クリック ゲーム: `クリック ゲーム ブラウザ/無料/サイト/連打`, `反射 神経 ゲーム クリック`, `クリック 練習 ゲーム`, idle clickers.
- 定規落とし: `定規落としゲーム`, `定規落とし 反射神経/実験/アプリ/やり方`.
- 周辺視野: `周辺視野 トレーニング (ゲーム/ブラウザ/アプリ/fps)`, `周辺視野 鍛える/鍛え方`, `周辺視野 テスト/測定`, `周辺視野 エイム`, `valorant 周辺視野`.
- オーバーエイム: Overwatch aim settings noise; `エイム オーバー` only.
