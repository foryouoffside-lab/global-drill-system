# ja (Japan, ja-JP, cc jp) - COGNITIVE + MEMORY page -> primary keyword map (2026-11-12)

Status: DONE (Bing 1 run / 40 rows; AC 10/10; GSC read-only).

## Inputs
- Bing: _work-ja/kw.tsv -> kw.jsonl (kw.done). Canary `連打測定` = 1,990 exact -> live; zeros are MEASURED zeros.
- Non-zero (exact/broad): 脳トレ 5,566/42,906; 脳トレ無料ゲーム 2,789/2,904; 脳トレ 無料 278/608; 脳トレゲーム 255; ストループ効果 268/333; ストループテスト 253; ストループ課題 201; 記憶力テスト 149. Everything else 0 (集中力テスト, 瞬間記憶, 数唱テスト, シュルテテーブル, nバック課題, 速読テスト, マルチタスク テスト, ...).
- AC (Google jp/ja, _work-ja/ac.txt): 記憶力テスト 無料/数字/ゲーム/簡単 (+認知症 - banned), 集中力テスト 無料/簡単/2分, 脳トレ (326 sugg., heavy 高齢者/プリント/DS intent), 瞬間記憶 ゲーム/トレーニング/能力テスト, ストループテスト/課題/無料/やり方, シュルテテーブル やり方/平均/サイト, 数字 記憶 ゲーム/テスト, nバック課題 ブラウザ/アプリ/テスト, 速読テスト (日本語/英語), マルチタスク 能力 テスト.
- GSC 90d: ja/memory 146i/11c p9.2 (記憶力 テスト 無料 17i p10.1, 記憶力テスト 無料 10i p10.8, オンライン記憶力テスト 8i p6.4, 記憶力 テスト 6i p15.7, 短期記憶力テスト 4i p10.8); ja/cognitive 55i/7c p6.7 (集中力テスト 無料 5i p6.6, 集中力 診断 ゲーム 4i p1, 集中力 ゲーム p4, 記憶力テスト 無料 p37-48); concentration-stamina 77i/7c p7.4 (集中力テスト 4i p21.5, 集中力 測り方 p11); multi-tasking 6i p5.2 (マルチタスクテスト p6); path-tracing 9i p7.
- Competition: serp_probe broken -> GSC pos <= 10 = low, else UNKNOWN.
- Taken: 反射神経テスト/ゲーム, 反応速度テスト/ゲーム, FPS 集中力トレーニング, 図形記憶テスト (physical), Go/No-Go課題, 文字探し (visual), 動体視力*, 周辺視野トレーニング.

## Page -> primary map (paths under /ja/drills/)
| page | current title | proposed primary | secondaries | evidence (Bing, GSC impr/pos, AC) | competition | action |
|---|---|---|---|---|---|---|
| cognitive (hub) | 無料脳トレ・集中力テスト | 脳トレ 無料ゲーム | 脳トレ (5,566), 脳トレゲーム, 集中力テスト 無料, 集中力 ゲーム | Bing 脳トレ無料ゲーム 2,789, 脳トレ 5,566, 脳トレ 無料 278, 脳トレゲーム 255; GSC 55i p6.7 but 0 impressions on any 脳トレ query | page pos 6.7 = low on 集中力 queries; 脳トレ head term UNKNOWN (likely Nintendo/portal/printables) | KEEP (pos <= 10) + Phase B title tweak: `脳トレ無料ゲーム・集中力テスト` (biggest measured term in ko+ja). No 脳年齢 / 認知症予防 / 高齢者 claims |
| cognitive/attention/concentration-stamina | 集中力テスト \| 持続的注意の測定 | 集中力テスト | 集中力テスト 無料, 集中力 測り方, 集中力測定 | Bing 0; GSC 77i/7c p7.4 (集中力テスト p21.5, 集中力 測り方 p11); AC 集中力テスト 無料/簡単/2分 | pos 7.4 = low | KEEP (pos <= 10); owns 集中力テスト (hub uses only `集中力テスト 無料` as secondary) |
| cognitive/attention/divided-attention | 注意分割テスト \| 二重課題トレーニング | 注意分割テスト | 二重課題 | Bing 0; GSC 0; AC none | UNKNOWN | no-demand descriptive (keep) |
| cognitive/attention/multi-tasking | マルチタスクテスト \| 二重ターゲット追従 | マルチタスクテスト | マルチタスク 能力 テスト | Bing 0/0; GSC 6i p5.2 (マルチタスクテスト p6); AC マルチタスク 能力 テスト | pos 5 = low | KEEP. Never 適性検査 / asd (AC shows both) |
| cognitive/focus/concentration-grid | シュルテテーブル \| 集中力グリッド練習 | シュルテテーブル | シュルテテーブル やり方/平均/サイト | Bing 0; GSC 0; AC 13 sugg. (やり方, 平均, 何秒, サイト) | UNKNOWN | keep; add 平均タイム / やり方 sections (AC intent) |
| cognitive/focus/distraction-fighter | ストループテスト \| 選択的注意トレーニング | ストループテスト | ストループ課題 (201), ストループ効果 (268), ストループテスト 無料 | Bing 253 / 201 / 268; GSC 0; AC ストループテスト/課題/無料/やり方 | UNKNOWN (no GSC; 効果 term is academic/explainer intent) | keep primary; Phase B: add ストループ課題 to title (`ストループテスト｜ストループ課題 無料`) + a short ストループ効果 explainer. Avoid 検査 framing |
| cognitive/processing-speed/reaction-time | 選択反応時間テスト \| 判断速度トレーニング | 選択反応時間テスト | 判断速度 | Bing 選択反応時間 0 | UNKNOWN | no-demand descriptive (keep). Must not take 反応速度/反射神経 terms |
| cognitive/processing-speed/rsvp-reader | 速読テスト \| RSVP読書トレーニング | 速読テスト | 日本語 速読 テスト, 速読 トレーニング | Bing 0/0; AC 日本語 速読 テスト, 速読テスト | UNKNOWN | keep; state 文字/分 measured, no comprehension score |
| cognitive/processing-speed/symbol-matching | 符号数字置換検査 \| SDMT方式の処理速度トレーニング | 記号と数字の照合テスト (descriptive) | 処理速度 テスト | Bing 処理速度 テスト 0; AC none | UNKNOWN | no-demand descriptive; RETARGET-light: drop `検査` + `SDMT方式` lead (names a clinical instrument) |
| memory (hub) | 記憶力テストと記憶力トレーニング | 記憶力テスト | 記憶力テスト 無料, オンライン記憶力テスト, 短期記憶力テスト | Bing 記憶力テスト 149 (無料/ゲーム/トレーニング variants 0); GSC 146i/11c p9.2 (記憶力 テスト 無料 17i p10.1, オンライン 8i p6.4) | pos 9-10 = low/beatable | KEEP (pos <= 10). Phase B: add `無料` to title (`記憶力テスト 無料｜記憶力トレーニング`), the exact GSC query sitting at p10. No 認知症 framing |
| memory/short-term-memory/color-sequence | サイモンゲーム｜色順番記憶 | 色の順番記憶ゲーム | サイモンゲーム | Bing サイモンゲーム 0 | UNKNOWN | no-demand descriptive (prefer descriptive lead; Simon is a Hasbro trademark) |
| memory/short-term-memory/digit-span | 数唱テスト｜数字記憶・ワーキングメモリ | 数字記憶テスト | 数字記憶ゲーム, 数唱テスト, 何桁 | Bing 数唱テスト 0, 数字 記憶テスト 0; AC 数字 記憶 ゲーム/テスト/何桁/平均 (no 数唱 in AC) | UNKNOWN | RETARGET-light: lead with lay term 数字記憶テスト (AC) over clinical 数唱; add 平均何桁 section |
| memory/short-term-memory/word-recall | 単語記憶テスト｜自由再生・言語性記憶 | 単語記憶テスト | - | Bing 0; AC none specific | UNKNOWN | no-demand descriptive (keep) |
| memory/spatial-memory/grid-memorization | 瞬間記憶テスト｜視覚記憶ゲーム | 瞬間記憶ゲーム | 瞬間記憶 トレーニング, 瞬間記憶能力テスト | Bing 0 (all 瞬間記憶 rows); AC 瞬間記憶ゲーム, トレーニング, 能力テスト (dominant AC is photographic-memory curiosity) | UNKNOWN | RETARGET-light: lead `瞬間記憶ゲーム` (game intent); never claim to detect 瞬間記憶能力 |
| memory/spatial-memory/object-location | 空間記憶テスト｜物体位置記憶 | 空間記憶テスト | 物体位置記憶 | Bing 0; AC none | UNKNOWN | no-demand descriptive (keep) |
| memory/spatial-memory/path-tracing | コルシブロックテスト｜順番記憶 | コルシブロックテスト | 順番記憶, 視空間ワーキングメモリ | Bing コルシブロック 0; GSC 9i p7 | pos 7 = low | KEEP (pos <= 10); mechanic is a Corsi task - accurate |
| memory/working-memory/n-back | Nバック課題｜ワーキングメモリ訓練 | nバック課題 | nバック課題 ブラウザ, nバック トレーニング, デュアルnバック | Bing 0 (all); AC nバック課題 ブラウザ/アプリ/テスト/平均 | UNKNOWN | keep; add `ブラウザ` (AC). No IQ-gain claim |

## Collisions resolved
- 集中力テスト: concentration-stamina owns it (title + 77i); cognitive hub leads with 脳トレ 無料ゲーム and keeps `集中力テスト 無料` as secondary only.
- 記憶力テスト: memory hub owns it (149 + GSC p9-10); the cognitive hub's stray 記憶力テスト 無料 impressions (p37-48) are not chased.
- 瞬間記憶 vs 図形記憶テスト (physical complex-pattern): distinct; grid-memorization stays on 瞬間記憶.
- 反射神経/反応速度: untouched; reaction-time stays 選択反応時間.

## Kill list
- 記憶力テスト 認知症, 脳トレ 高齢者 / 認知症予防, 脳年齢チェック, マルチタスク 適性検査 / asd, 瞬間記憶能力 何人に1人 / 実在, ストループワッフル, 脳トレ ds/switch (Nintendo), 速読 btr/basic/core (products), nバック 日能研.

## Decisions
- ja is the only one of ko/ja with real Bing cog/mem demand: 脳トレ family ~8.9k exact across 4 rows; Stroop family ~720; 記憶力テスト 149.
- Sept 2026 abandonment holds for most drill-level terms (0), but NOT for hub-level 脳トレ and drill-level ストループ in Japanese.
- 脳トレ competition unproven: zero GSC impressions on it despite 無料脳トレ in the hub title. Stretch target.
