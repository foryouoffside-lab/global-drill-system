# PHYSICAL category - ja (ja-JP) keyword map - 2026-11-10

Status: COMPLETE (Phase A, 2026-11-10). Bing ja-JP batch 40 rows, canary 連打測定 2,555/2,652 = OK -> zeros are real (below Bing reporting floor), not UNKNOWN. 1 row errored (マウス ゲーム HTTP 503 = UNKNOWN).

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

## Bing ja-JP (2026-11-10, `_work-ja/kw.jsonl`, exact/broad) - non-zero only
- 連打測定 2,555/2,652 (canary, motor TAKEN), クリックゲーム 351, ラダートレーニング 244, ジャンプゲーム 169, 的当てゲーム 46, 障害物を避けるゲーム 32, 目と手の協応 22, 瞬発力テスト 21, アジリティ トレーニング 19.
- Everything else 0 (see kill list). マウス ゲーム = HTTP 503, UNKNOWN.

## SERP probes (Bing jp, 3 of 3 used, `_work-ja/serp.jsonl`)
- クリックゲーム: game16.net, hitoikigame.com, poki.com, game-tansaku.net - all idle/clicker (放置・クリッカー) lists -> WRONG intent for speed-drill. Killed as primary.
- ラダートレーニング: timeout (UNKNOWN). Intent inferred real-world footwork exercise (agility ladder).
- ジャンプゲーム: timeout (UNKNOWN). AC = Shonen Jump franchise + platformers.

## Page -> primary map (ja)

| page | current title (effective) | proposed primary | secondaries | evidence (Bing exact/broad, GSC impr/pos, AC) | competition note | action |
|---|---|---|---|---|---|---|
| hub `/ja/drills/physical` | 反応速度・敏捷性トレーニング \| 無料フィジカルドリル | 瞬発力テスト | 瞬発力テスト 無料, 敏捷性テスト (0) | 21/21; GSC 20 impr pos 8.7 (神経刺激ドリル, physical drill); AC 瞬発力テスト 無料/ゲーム/web | UNKNOWN (no probe, <50); AC has school 体力テスト noise | retarget: drop `反応速度` lead (reaction hub owns 反応速度ゲーム/反射神経 family). e.g. `瞬発力テスト｜無料ブラウザで遊べるフィジカルドリル11種`. Delete dead base title `瞬発力＆反射神経トレーニング測定` (反射神経 = reaction TAKEN) |
| balance-training/stability-challenge | エイム安定化｜マウス安定性テスト | マウス安定性テスト | エイム 安定 (0), マウス 手ブレ (0) | all 0; AC 手ブレ テスト = camera stabilisation intent | n/a | keep (no-demand descriptive), lead with `マウス安定性テスト`; never `手ブレ テスト` (medical/camera intent). Mild overlap with motor steady-hand secondary `手の安定性テスト` - keep `マウス` prefix |
| coordination/complex-pattern | 図形記憶テスト｜空間認識ゲーム | 図形記憶テスト | 図形 記憶 ゲーム (0), 空間認識 ゲーム (0), パターンをなぞる | all 0; GSC 4 impr pos 8.5; AC 図形 記憶 テスト/ゲーム/検査 | n/a | keep (no-demand descriptive). Copy must say: memorise a flashed path, then drag it (not a paper 図形検査). No collision: ja memory path-tracing = コルシブロックテスト |
| coordination/cross-body-movement | 目と手の協応テスト｜協調運動ゲーム | 目と手の協応テスト | 目と手の協応 (22, child-dev intent), 協調運動ゲーム | 目と手の協応 22/22; ゲーム/トレーニング 0; AC dominated by 保育/療育/発達障害 + `目と手の協応 大人/ゲーム/テスト` | UNKNOWN (<50) | keep; copy targets adults (`大人向け`), describe drag-along-a-diagonal-corridor honestly; no clinical/assessment claims |
| coordination/dynamic-grid-evasion | 危険マス回避ゲーム｜周辺視野で避ける反射神経トレーニング | 危険マス回避ゲーム | マス目を避けるゲーム, 爆発マスから逃げる | all evasion variants 0 except 障害物を避けるゲーム 32 (given to quick-dodge, better fit) | n/a | retarget (no-demand descriptive): remove `周辺視野` (peripheral-threat-sweeper owns) and `反射神経トレーニング` (0, reaction family). e.g. `危険マス回避ゲーム｜爆発する前に安全マスへ移動` |
| fitness/agility-ladder | ラダートレーニング｜アジリティ練習 | アジリティラダーゲーム (descriptive, unmeasured) | ラダートレーニング (244, mention only), アジリティ トレーニング (19) | ラダートレーニング 244/244; アジリティ トレーニング 19; probe timeout | UNKNOWN; intent = real footwork exercise (sports sites/videos) | DECISION: title-leading `ラダートレーニング` promises a real workout the cursor drill cannot deliver. Recommend `アジリティラダーゲーム｜ラダートレーニングの順番をマウスで再現` (term kept in subtitle as honest analogy, no fitness-outcome claims) |
| fitness/jump-sequence | リズムジャンプ練習 \| ジャンプタイミングゲーム | ジャンプゲーム | ジャンプタイミングゲーム, 溜めジャンプ, ジャンプゲーム ブラウザ (0) | ジャンプゲーム 169/169; GSC 8 impr pos 9.6; AC Jump franchise + platformers; probe timeout | UNKNOWN | retarget: `リズム` is inaccurate (hold-charge, release, steer mid-air to hit a moving target). e.g. `ジャンプゲーム｜長押しで溜めて動く的を狙うブラウザゲーム`. DELETE dead base `ジャンプ力トレーニング＆プライオメトリクス練習` (false real-workout claim; drill's own About says it does not measure vertical jump) |
| fitness/speed-drill | 連打ゲーム｜縮む標的をクリックして反応を鍛える | 的当てゲーム | 縮む的をクリック, ターゲットクリックゲーム | 的当てゲーム 46/46; GSC 29 impr pos 20.2 all 連打/クリック速度 intent (wrong mechanic); クリックゲーム 351 SERP = idle clickers | UNKNOWN (<50); 的当て may carry toy/party intent | retarget: remove `連打ゲーム` (motor rapid-tapping secondary, 1,252) and base `クリック速度測定＆クリック連打テスト` (false CPS claim). e.g. `的当てゲーム｜動いて縮む的をクリックで撃ち抜く`. No 連打/CPS/クリック速度 anywhere in title/h1/description |
| reflex-training/drop-catch | 定規落としゲーム｜反応時間テスト | 落下キャッチゲーム (descriptive, unmeasured) | 定規落とし (0, analogy only), 緑だけクリック | 定規落とし/ゲーム/反射神経 all 0; AC 定規落としゲーム/反射神経/実験/アプリ | n/a | retarget (no-demand descriptive): drill is falling green targets + red decoys, not a ruler drop; `反応時間テスト` too close to reaction 反射神経テスト/FPS 反応速度 測定. e.g. `落下キャッチゲーム｜赤いダミーを避けて緑だけクリック`. Owner may keep 定規落とし as subtitle analogy |
| reflex-training/peripheral-threat-sweeper | 周辺視野トレーニングゲーム｜ブラウザで脅威を探す | 周辺視野トレーニング | 周辺視野 ゲーム (0), 周辺視野 鍛える (0), 周辺視野 テスト (0), 周辺視野 (22, 2026-10) | all phrase variants 0; AC 周辺視野 トレーニング ゲーム/ブラウザ/アプリ/fps, 周辺視野 鍛える | n/a | keep (no-demand descriptive); sole owner of `周辺視野` in ja physical. No eyesight-improvement claims |
| reflex-training/quick-dodge | 避けゲー（ブラウザ）｜マウスで弾幕をかわす反射神経ゲーム | 障害物を避けるゲーム | 避けゲー (0), 避けるゲーム ブラウザ (0), 弾幕 避ける ゲーム (0) | 障害物を避けるゲーム 32/32; 避けるゲーム 0 despite large AC tail (AC breadth != volume) | UNKNOWN (<50) | retarget: remove `反射神経ゲーム` (reaction TAKEN, 1,054). e.g. `障害物を避けるゲーム｜マウスで迫る弾をかわすブラウザ避けゲー` |
| reflex-training/reaction-chain | オーバーフリック改善｜エイムの急停止精度を練習 | オーバーフリック改善 | エイム 止める (0), オーバーエイム (0) | all 0; AC オーバーエイム = Overwatch settings noise | n/a | keep (no-demand descriptive). Distinct from fps `フリックエイム練習`/`マイクロフリック練習` (modifier `オーバー`+`改善`); do not add `エイム練習` |

## Collisions resolved
- speed-drill `連打ゲーム` (title) vs motor rapid-tapping secondary `連打ゲーム`/primary `連打測定` -> speed-drill drops all 連打/CPS/クリック速度; GSC 連打 impressions should migrate to motor rapid-tapping.
- hub `反応速度` + dead base `反射神経` vs reaction hub/reflex primaries -> hub moves to `瞬発力テスト`.
- quick-dodge `反射神経ゲーム` vs reaction `反射神経ゲーム` (1,054) -> removed.
- dynamic-grid-evasion `周辺視野`/`反射神経トレーニング` vs peripheral-threat-sweeper / reaction -> removed; 周辺視野 = sweeper only.
- 障害物を避けるゲーム (32): quick-dodge (homing obstacles) over dynamic-grid-evasion (grid cells) - better literal fit.
- drop-catch `反応時間テスト` vs reaction `反射神経テスト` / fps `FPS 反応速度 測定` -> dropped.
- stability-challenge `手の安定性` vs motor steady-hand -> keep `マウス安定性テスト` prefix; acceptable secondary overlap.
- No physical primary reuses a fps/motor/reaction TAKEN term.

## Kill list (Bing ja-JP 0, canary OK)
瞬発力テスト ゲーム, 瞬発力 トレーニング, 敏捷性 テスト, フィジカル テスト, エイム 安定, マウス 手ブレ, 手ブレ ゲーム, 目と手の協応 ゲーム, 目と手の協応 トレーニング, 図形記憶 テスト, 図形 記憶 ゲーム, 空間認識 ゲーム, 避けるゲーム, 避けるゲーム ブラウザ, 弾幕 避ける ゲーム, 避けゲー ブラウザ, ジャンプゲーム ブラウザ, クリックゲーム ブラウザ, マウス クリック ゲーム, 反射神経 ゲーム クリック, 定規落とし, 定規落としゲーム, 定規落とし 反射神経, 周辺視野 トレーニング ゲーム, 周辺視野 鍛える, 周辺視野 テスト, 周辺視野 ゲーム, オーバーエイム, オーバーフリック, エイム 止める. Prior: 避けゲー, 周辺視野 トレーニング, 反射神経トレーニング, 定規 キャッチ 反射神経 (all 0).
- Wrong-intent (volume but killed): クリックゲーム 351 (idle/clicker SERP), 手ブレ テスト (camera/medical AC).
- UNKNOWN: マウス ゲーム (HTTP 503).

## Decisions needed (owner)
1. agility-ladder: keep `ラダートレーニング` lead (244, real-exercise intent, honesty risk) or switch to `アジリティラダーゲーム` with ラダートレーニング as analogy (recommended).
2. speed-drill -> `的当てゲーム` (46) accepted? Alternative is pure descriptive with no measured term.
3. drop-catch: drop `定規落とし` from title lead (0 volume, mechanic mismatch) - recommended.
