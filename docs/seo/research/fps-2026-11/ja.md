# ja (Japan, ja-JP, cc jp) - FPS category keyword map (Phase A, 2026-11-08)

Status: COMPLETE 2026-11-09 (coordinator finished after agent died; Bing 40/40 ok + 1 canary).

## Inputs used
- GSC page x query, 90d, pages containing /ja/: `_work-ja/gsc_page_query.tsv`
- Prior Bing jp: demand-2026-10/_work-ja/m1.jsonl (エイム練習 1933/2593, valorant エイム練習 79/101, 反射神経テスト fps 172), reaction-speed-2026-11/_work-p3-retry.jsonl (置きエイム 362/876, valorant 置きエイム 練習 157; 追いエイム / トラッキングエイム = 0)
- Taken by reaction-speed (ja): 反射神経テスト, 反応速度テスト (light-reaction), 反射神経を鍛える (hub), 体内時計ゲーム, 反射神経ゲーム, 反応速度ゲーム, 眼球運動トレーニング, 索敵エイム練習 (market-doors), ピーク反応練習 (barrier), 動体視力テスト, 動く的のエイム練習 (fps-tracking-trainer)
- Motor aim-trainer title: エイム練習｜無料ブラウザエイムトレーナー; GSC: エイム練習 ブラウザ 469 impr pos 8.6 (34 clk), エイム練習 359 impr pos 6.4 (24 clk). It owns エイム練習 / エイム練習 ブラウザ / エイムトレーナー / エイムテスト.

## GSC (90d) per FPS page
- /ja/drills/fps: 25 clk / 255 impr / pos 8.6; queries fps 練習 (20 impr pos 7), fps練習 (14, 5.4), エイム練習 ブラウザ apex (11), valorant エイム練習 ブラウザ (8), プリエイム 練習 サイト (7)
- 180-degree-awareness: 6/40/7.2; fps 振り向き 8 impr pos 7.8
- strafe-tracking: 4/44/6.9
- flow-state: 2/48/7.2; エイム練習 ブラウザ 5 impr pos 3.8
- instant-response: 1/34/29.4; 反応速度 (テスト/測定) variants - collides with light-reaction
- anti-zigzag 1/15; flick-shot 0/14; others ~0

## Step 2 - autocomplete (10/10 calls used) -> `_work-ja/ac.txt`
- リコイル練習: apex / ブラウザ / やり方 / cs2 / valorant / リコイルコントロール 練習 / リコイル制御 練習 (tool intent strong)
- フリック エイム: 練習 / コツ / 練習 ブラウザ / とは / valorant / apex; エイム マイクロ フリック present
- 振り向き: mostly non-FPS (illustration, songs); FPS slice = 振り向き計算 / 振り向き cm / 振り向き 感度 / fps 振り向き 練習 (sensitivity-calc intent dominates, not a drill)
- 縦エイム: thin (縦のエイム, エイム 縦, ow 縦エイム)
- レレレ撃ち: とは / apex / valorant / 当たらない / 対策 / 当て方 / 練習 (strafe-shooting; "当て方/対策" = hitting a strafing enemy = anti-strafe drill)
- ジグザグ エイム: zero FPS suggestions (band/Pokemon noise) -> no native term
- fps 反応速度: テスト / 鍛える / 平均 / 測定 / トレーニング
- トラッキング エイム: 練習 / コツ / 練習 ブラウザ / 練習 サイト / 切り返し
- エイム 切り替え: = ADS toggle/hold settings intent, NOT target switching -> do not use
- fps 練習: ブラウザ / サイト / 無料 / 方法 / エイム 練習 / 振り向き 練習 / トラッキング 練習
- SERP probes (3/3): all timed out (Bing selector) -> competition UNKNOWN

## Bing volume (ja-JP, `_work-ja/kw.jsonl`, `ja.csv`)
- All 40 batch phrases = 0 (status ok). Canary エイム練習 = 3,098 / 4,010 (2026-11-09; was 1,933 in 2026-10) -> API healthy, zeros are real Bing-JP readings. Prior: 置きエイム 362/876, valorant 置きエイム 練習 157, valorant エイム練習 79.
- Pattern: JP demand = head term エイム練習 (+ブラウザ). Mechanic terms only proven by AC and GSC (fps 練習 20 impr pos 7 on hub).

## Page -> primary map (paths under /ja/drills/)

| page | current title | proposed primary | secondaries | evidence | competition | action |
|---|---|---|---|---|---|---|
| fps (hub) | FPSエイム練習・無料エイムトレーナー | FPS エイム練習 | fps 練習, fps 練習 ブラウザ/サイト | GSC 25 clk/255 impr pos 8.6 (fps 練習 20i p7, fps練習 14i p5.4); Bing 0 | UNKNOWN | keep |
| fps/target-acquisition | VALORANT エイム練習 - ターゲット捕捉トレーナー | VALORANT エイム練習 | valorant エイム練習 ブラウザ | 79 (2026-10); GSC hub 8i | UNKNOWN | keep; VALORANT only as usage context |
| fps/angle-hold-trainer | 置きエイム練習｜角待ち・飛び出し反応 | 置きエイム練習 | valorant 置きエイム 練習 (157), プリエイム | 置きエイム 362/876; GSC hub プリエイム 練習 サイト 7i | UNKNOWN | keep |
| fps/flick-shot-training | エイム練習 - フリックエイムトレーナー | フリックエイム練習 | フリック エイム 練習 ブラウザ, フリック コツ | AC フリック エイム 練習/ブラウザ/コツ; Bing 0; GSC 14 impr p10.4 | n/a | retarget: drop `エイム練習 -` lead -> `フリックエイム練習｜ブラウザで素早く当てる` |
| fps/recoil-control | リコイル練習｜FPS反動制御・スプレー練習 | リコイル練習 | リコイルコントロール 練習, リコイル 練習 ブラウザ | AC strong (apex/ブラウザ/cs2/valorant); Bing 0 | n/a | keep |
| fps/strafe-tracking | ストレイフ追いエイム練習｜ADAD切り返し | ストレイフ追いエイム練習 | ADAD 切り返し | GSC 44 impr pos 6.9; Bing 0 | n/a | keep (ranking) |
| fps/pro-smooth-pursuit | エイム練習 \| トラッキングFPSトレーナー | トラッキングエイム練習 | トラッキング エイム 練習 ブラウザ/サイト, なめらかな追従 | AC トラッキング エイム: 練習/コツ/ブラウザ/サイト; Bing 0 | n/a | retarget: `トラッキングエイム練習｜なめらかに追い続ける` |
| fps/anti-strafe-jitter-duel | エイム練習 \| レレレ撃ち・トラッキング | レレレ撃ち対策 | レレレ撃ち 当て方, レレレ撃ち 練習 | AC レレレ撃ち: 当て方/対策/練習/当たらない; Bing 0 | n/a | retarget: `レレレ撃ち対策｜左右に揺れる敵に当てる練習` (drill = target ADAD-strafes, player tracks it) |
| fps/anti-zigzag-movement-trainer | エイム練習 \| ジグザグ移動・トラッキング | ジグザグ移動の敵に当てる | 不規則な動き 追従 | AC ジグザグ エイム = 0 gaming; GSC 15 impr | n/a | no-demand descriptive; drop lead |
| fps/micro-correction-precision | エイム練習 \| マイクロフリック微調整 | マイクロフリック練習 | エイム 微調整, ヘッドショット精度 | AC エイム マイクロ フリック; Bing 0 | n/a | retarget: `マイクロフリック練習｜エイム微調整` |
| fps/target-prioritization | エイム練習 \| ターゲット選択・脅威判定 | ターゲット優先順位の判断 | 脅威判定, 撃たない判断 | none | n/a | no-demand descriptive; drop lead |
| fps/target-switching-swarm | VALORANT ターゲット切り替え - エイム練習 | ターゲットスイッチ練習 | 複数ターゲット 切り替え | AC `エイム 切り替え` = ADS toggle intent (avoid); Bing 0 | n/a | retarget: drop VALORANT (target-acquisition owns VALORANT エイム練習) -> `ターゲットスイッチ練習｜複数の的を素早く切り替える` |
| fps/vertical-air-track | Apex 縦エイム練習 - 空中トラッキング | 縦エイム練習 | 空中トラッキング, Apex 縦エイム | AC 縦エイム thin; Bing 0 | n/a | keep |
| fps/180-degree-awareness | 180度 エイム練習 \| 振り向きトレーナー | 180度 振り向きエイム練習 | fps 振り向き 練習 | GSC 40 impr pos 7.2 (fps 振り向き 8i p7.8); AC 振り向き = sensitivity-calc intent | n/a | keep (振り向き stays secondary; drill is a turn drill, not a cm/360 calculator) |
| fps/flow-state | FPS 集中力トレーニング \| フローエイム | FPS 集中力トレーニング | フロー状態 | GSC 48 impr pos 7.2 | n/a | keep |
| fps/instant-response | 反応速度テスト \| FPSクリック反応測定 | FPS 反応速度 測定 | クリック反応, fps 反応速度 平均 | 反応速度テスト owned by light-reaction; GSC 34 impr pos 29.4 (losing to it); AC fps 反応速度 テスト/測定/平均 | n/a | retarget: `FPS反応速度測定｜クリック反応をms表示` (drop leading 反応速度テスト) |

Outside FPS: motor aim-trainer (エイム練習｜無料ブラウザエイムトレーナー, 117 clk / 1,737 impr pos 7.9) keeps エイム練習 (3,098) + エイム練習 ブラウザ. No change.

## Collisions resolved
1. `エイム練習` lead on flick, pro-smooth, anti-strafe, anti-zigzag, micro, target-prioritization -> removed (motor owns head term, hub owns FPS エイム練習).
2. VALORANT エイム練習: target-acquisition only; target-switching drops VALORANT.
3. 反応速度テスト: light-reaction owns; instant-response -> FPS反応速度測定.
4. 置きエイム練習: angle-hold only (reaction barrier already moved off it).
5. 動く的のエイム練習 (reaction fps-tracking-trainer) vs pro-smooth トラッキングエイム練習 vs strafe-tracking ストレイフ追いエイム練習: distinct strings.

## Kill list (Bing ja-JP exact 0, status ok)
fps 練習 (+fps練習, サイト, ブラウザ), fps エイム練習, プリエイム 練習, 振り向き (4 forms), リコイル (6 forms), スプレー 練習, フリック (3), マイクロフリック, トラッキング (3), ストレイフ (2), レレレ撃ち (4), 縦エイム (2), fps 反応速度 (2), fps 集中力, ターゲット切り替え エイム, ヘッドショット 練習, エイム 微調整, エイム 練習 valorant, apex エイム 練習 ブラウザ. Zero on Bing only; AC/GSC proof noted in table.
