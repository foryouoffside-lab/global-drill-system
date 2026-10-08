# Reaction Time Test intent fix (2026-10-08)

## Problem
- `/drills/reaction-speed/reaction-time-test` is not a reaction test. It shows a target time (1-8 s, upper bound `min(8000, 1800 + 450 * level)` ms), hides it, and the user clicks when their own elapsed time reaches it. Score = timing error in ms; hit window = 50 ms + 5% of target; EXACT = error <= 10 ms.
- English title led with "Reaction Time Test"; ko/ja/de/es/fr/pt pages claimed to measure reaction to a visual signal. They competed with the real stimulus test `/drills/visual/reaction-speed/light-reaction` for the same terms.

## Measured demand (Bing, 2026-10-08)
| Query | Volume |
|---|---|
| EN "reaction time test" | 12,679 |
| EN "stop the timer game" | 89 (US exact) |
| EN "timing game" | 22 |
| EN "10 second challenge" | 7 |
| EN "time perception test" / "internal clock test" / "time estimation test" | 0 |
| KR "시간 감각 테스트" / "타이밍 게임" | 0 |
| JP "体内時計 テスト" / "時間感覚 テスト" | 0 |
| KR "반응속도 테스트" | 13,122 |
| JP 反射神経テスト | 3,487 |

The retarget terms (stop the timer game, timing game, 10 second challenge) are low-volume proxies for the mechanic, not demand claims. Locale titles are descriptive and carry no volume claim.

## Decision
- Real test owns the head term: light-reaction metadata now leads "Reaction Time Test" (en), "Test de reacción" (es), "Test de réaction" (fr), "Teste de reação" (pt); de/ko/ja already led Reaktionstest / 반응속도 테스트 / 反射神経テスト.
- Timer game retargeted: "Stop the Timer Game" (en), Zeitgefühl-Test (de), Juego de sentido del tiempo (es), Jeu de perception du temps (fr), Jogo de noção de tempo (pt), 体内時計ゲーム (ja), 시간 감각 게임 (ko). Each description says it is a timing game and points to the locale light-reaction page.
- Slug unchanged, no redirects. Internal "reaction time test" anchors now point to the light-reaction route.

## Verification
- Grep: no page copy claims the interval drill measures reaction time to a signal.
- Re-measure after indexing: "stop the timer game" impressions on the timer page, "reaction time test" impressions/CTR on light-reaction.
