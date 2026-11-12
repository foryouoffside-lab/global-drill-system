# ja (Japan, ja-JP, cc jp) - VISUAL page -> primary keyword map

Status: COMPLETE 2026-11-12. Bing 1 run (40/40 ok). AC 10/10. SERP probe 3/3 (1 failed: 深視力検査, not retried).

## Step 1 - GSC (90 d, `/ja/drills/visual*`, `_work-ja/gsc_pq.json`, `gsc_pages.json`)
- Page totals: visual hub 252i/24c p7.0 · moving-target 25i/3c p8.4 · multiple-targets 12i/2c p4.25 · infinity-pursuit 7i/3c p2.4 · sine-wave 5i p5.2 · staircase-step 5i p6.6 · visual-tracking hub 3i/1c p5. Others 0.
- Hub queries: 動体視力トレーニング 無料 46i/2c p6.8, 動体視力トレーニング ブラウザ 25i p5.2, 動体視力テスト 13i/1c p12.6, 動体視力テスト 無料 9i/2c p9.9, ビジョントレーニング ブラウザ 3i p8.3, 動体視力診断 3i p11, 動体視力ゲーム 1i p13. Moving-target: 動体視力 鍛え方 1i p5.

## Step 2 - Google autocomplete gl=jp (10 seeds, `_work-ja/ac.txt`, UNMEASURED)
- 動体視力 トレーニング: 95 suggestions incl. ブラウザ, web, pc, サイト, 無料, fps, valorant, apex, ゲーム, スポーツ-specific (野球, テニス, 卓球...).
- 深視力: 270 suggestions - 深視力検査 (コツ/練習/アプリ/シミュレーター/落ちた), 深視力 練習, 深視力トレーニング (アプリ). Driver-licence (大型/二種) intent.
- 視覚探索: academic/rehab (視覚探索訓練 半側空間無視, 課題, 論文) - medical intent, avoid.
- 周辺視野: トレーニング, 鍛える, トレーニングゲーム/アプリ/ブラウザ, スポーツ.
- 文字探し: ゲーム (無料), プリント (高齢者/小学生), 脳トレ, ブラウザ, サイト, web, ビジョントレーニング 文字探し.
- 眼球運動: mostly medical/anatomy; 眼球運動 トレーニング (アプリ/遊び).
- ビジョントレーニング: 304 - プリント, 発達障害, 療育, 小学生, アプリ, アスリート. Developmental/children intent dominates.
- 追視: infant development + figure (追視アイ) noise. フリッカー: boxing / camera flicker noise. 動体視力 ゲーム: ゲーム 無料/サイト/ブラウザ/pc/web, 鍛える ゲーム (無料).

## Step 3 - Bing volume (ja-JP, `_work-ja/kw.jsonl`, rows in `ja.csv`)
- Canary 連打測定 1,990/2,063 -> panel alive.
- Non-zero: ビジョントレーニング 1,415/2,389 · 深視力検査 608/704 · 動体視力トレーニング 363/363 · 深視力 トレーニング 290/290 · 深視力 222/512 · 文字探し 58/197 · 目のトレーニング 21/21.
- All other 33 rows 0 (see kill list).

## Step 4 - Bing SERP probe (jp, `_work-ja/serp.jsonl`)
- 深視力検査: probe error (navigation) -> competition UNKNOWN.
- ビジョントレーニング: menokoto365.jp, papamo.net, vision-training.org (x2, association), kohaken.net, noikiiki.info, stretchpole-blog.com, cre-sokudoku.co.jp, ryouikukyuujin.com. All info/printables/developmental-support pages; no browser tool in top 10. Not brand-locked, but intent = children/developmental -> intent mismatch + medical-claim risk.
- 深視力 トレーニング: mousedrivelab.com (x2), youtube.com (x2), 55truck.com, play.google.com (app), kaitoriou.net, note.com, kineticvsn-lab.com. Small sites/blogs/videos, no big brand, no browser tool -> BEATABLE.

## Page -> primary map (paths under /ja/drills/)

| page | current title | proposed primary | secondaries | evidence (Bing, GSC impr/pos, AC) | competition note | action |
|---|---|---|---|---|---|---|
| visual (hub) | 動体視力テスト・深視力検査・視覚トレーニング | 動体視力トレーニング | 動体視力トレーニング 無料/ブラウザ, 動体視力 ゲーム | Bing 363; GSC 252i p7.0 (トレーニング 無料 46i p6.8, ブラウザ 25i p5.2); AC strong | proven beatable (pos 5-7) | KEEP page ranking, REORDER title: lead 動体視力トレーニング; drop 動体視力テスト lead (TAKEN by reaction visual-tracking-speed-test, hub only p12.6 on it) and 深視力検査 (-> distance-judgment) |
| visual-tracking (hub) | 動体視力トレーニング & 視覚追跡 | 視線追従トレーニング (descriptive) | 眼球運動 トレーニング (body only; saccadic owns), ビジョントレーニング (body, see decisions) | Bing 視線追従 0, 眼球運動トレーニング 0; GSC 3i p5 | n/a | KEEP URL/positioning (pos 5), but primary 動体視力トレーニング moves to visual hub (that is where its 70+ impressions are) |
| visual/depth-perception/distance-judgment | 深視力検査・三桿法練習 | 深視力 トレーニング | 深視力検査 (608), 深視力 (222), 深視力 練習 | Bing 290 / 608 / 222; GSC 0; AC 深視力検査 練習/アプリ/シミュレーター | 深視力 トレーニング: small sites/YouTube/app = BEATABLE; 深視力検査 UNKNOWN | RETARGET: `深視力トレーニング｜深視力検査の練習 無料`. Honesty: drill = one object approaching a depth plane (optical expansion timing), not the 3-rod apparatus; keep "医療検査ではありません" and say it is not the 三桿法 device |
| visual/reaction-speed/go/no-go | Go/No-Go課題 | Go/No-Go課題 (owned by reaction pass) | - | Bing 0 | n/a | keep |
| visual/reaction-speed/light-reaction | 反射神経テスト・反応速度テスト | 反射神経テスト (owned by reaction pass, 3,487) | 反応速度テスト | reaction-pass data | n/a | keep |
| visual/tracking-accuracy/moving-target | 動体視力テスト \| 移動標的トレーニング | 動体視力を鍛えるゲーム | 動体視力 鍛え方, 移動標的トレーニング | Bing 0 (動体視力 鍛える / 鍛える ゲーム); GSC 25i p8.4 (動体視力 鍛え方 1i p5); AC 動体視力 鍛える ゲーム (無料) | UNKNOWN | RETARGET (collision overrides keep): 動体視力テスト is TAKEN by reaction visual-tracking-speed-test |
| visual/tracking-accuracy/multiple-targets | 複数対象追跡テスト \| 周辺視野トレーニング | 複数対象追跡テスト | MOT, 複数物体追跡 | Bing 0 (多重/複数物体追跡); GSC 12i p4.25 | pos 4 | KEEP primary; drop 周辺視野トレーニング secondary (physical peripheral-threat-sweeper primary) |
| visual/tracking-accuracy/pursuit-tracker | スムースパシュート \| 視線追従トレーニング | スムースパシュート テスト | 視線追従 | Bing 視線追従 0; GSC 0 | n/a | no-demand descriptive (keep) |
| visual/visual-recognition/entropic-grid | 視覚探索トレーニング \| 選択的注意テスト | 視覚探索トレーニング | 文字コード探し | Bing 視覚探索/課題/ゲーム 0; AC 視覚探索 = rehab/academic | n/a | no-demand descriptive; drop 選択的注意 (cognitive distraction-fighter ストループ...選択的注意トレーニング); never use 訓練/半側空間無視 framing |
| visual/visual-recognition/visual-search | 文字探しテスト \| 視覚探索・選択的注意 | 文字探し | 文字探しゲーム 無料, 文字探し ブラウザ | Bing 58/197 (文字探しゲーム 0); GSC 0; AC ゲーム 無料/ブラウザ/サイト/脳トレ | UNKNOWN (no probe left); AC shows printables-for-kids/elderly sites | RETARGET-light: `文字探しゲーム｜無料ブラウザ 文字探し`; mechanic = find the one target character among rotated look-alikes (fits) |
| visual/visual-recognition/rhythm-anomaly | フリッカーテスト \| 視覚の時間分解能 | 点滅のズレ探し (descriptive) | 視覚リズム | Bing フリッカーテスト / ちらつき テスト 0; AC フリッカー = boxing/camera noise | n/a | no-demand descriptive. Drop `フリッカーテスト`: it names the clinical CFF test the drill does not perform (factual risk) |
| visual-tracking/peripheral-ping-pursuit | 周辺視野トレーニング｜中心を見たまま反応 | 中心固視の周辺反応トレーニング | 周辺視野 (body) | Bing 周辺視野トレーニング 0; GSC 0 | n/a | RETARGET: 周辺視野トレーニング is TAKEN by physical peripheral-threat-sweeper |
| visual-tracking/infinity-pursuit | 8の字眼球運動トレーニング | (unchanged) | - | GSC 7i/3c p2.4 | pos 2 | KEEP |
| visual-tracking/sine-wave-pursuit | サイン波の眼球追従トレーニング | (unchanged) | - | GSC 5i p5.2 | n/a | KEEP |
| visual-tracking/staircase-step | 上下視線追従トレーニング｜動体視力ドリル | (unchanged) | - | GSC 5i p6.6 | n/a | KEEP |
| visual-tracking/{constant-slow, directional-chaos, dynamic-evasion, ghosting-suppress, momentum-teleport, predictive, spatial-shift, split-screen-tracking, strobe-prediction, triangular, zig-zag-path} | descriptive titles | (unchanged) | - | GSC 0; no Bing rows spent (brief) | n/a | no-demand descriptive. directional-chaos / dynamic-evasion lead with 動体視力トレーニング -> demote to body (visual hub owns). ghosting-suppress `モニター残像テスト` reads as a monitor-ghosting test - Phase B to verify it is not a factual overclaim |

## Collisions resolved
- 動体視力トレーニング: visual hub (GSC proven) vs visual-tracking hub + directional-chaos + dynamic-evasion titles -> visual hub only.
- 動体視力テスト: TAKEN (reaction visual-tracking-speed-test) -> removed as lead from visual hub and moving-target.
- 深視力検査: visual hub title -> distance-judgment only.
- 周辺視野トレーニング: TAKEN (physical peripheral-threat-sweeper) -> dropped from multiple-targets and peripheral-ping.
- 選択的注意: cognitive distraction-fighter -> dropped from entropic-grid / visual-search.
- 文字探し: visual-search only (entropic-grid stays 視覚探索).

## Kill list (Bing ja-JP 0/0, canary alive)
動体視力 トレーニング 無料/ブラウザ/サイト/fps, 動体視力 鍛える (ゲーム), 動体視力 テスト 無料, ビジョントレーニング 無料/アプリ, 深視力 練習, 深視力検査 練習/アプリ, 距離感 テスト, 視覚探索 / 視覚探索課題 / 視覚探索 ゲーム, 文字探しゲーム, 文字探し 脳トレ, 間違い探し 文字, 周辺視野トレーニング (+ブラウザ, を広げるトレーニング), 眼球運動トレーニング (+アプリ), 追視 トレーニング, 多重物体追跡, 複数物体追跡, ちらつき テスト, フリッカーテスト, スポーツビジョン (+トレーニング), 視線追従.
Long-tail modifiers (無料/ブラウザ) are 0 on Bing but GSC-proven on Google (hub) - use as secondaries.

## Decisions needed
1. ビジョントレーニング (1,415/mo, no tool in top 10) is the largest visual term, but SERP intent is children/developmental (療育, 発達障害, プリント). Target it on the visual-tracking hub (eye-follow drills) with strict no-medical copy, or skip? Recommendation: secondary on the visual-tracking hub only, not primary.
2. distance-judgment retarget to 深視力 トレーニング: acceptable only with the explicit "not the 三桿法 device" disclaimer.
