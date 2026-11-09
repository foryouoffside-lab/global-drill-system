# MOTOR coordinator queue (apply after all Phase B agents finish)
## drillNames.js card sync
- rapid-tapping es: Test de CPS (Clicks Por Segundo) -> CPS Test (Clicks por Segundo)
- precision-flick-shot: ja マウス精度テスト; de Mausgenauigkeit testen; fr Test de précision souris; es Test de precisión del ratón; pt Teste de precisão do mouse; ko 마우스 정확도 테스트
- drag-and-drop: ja ドラッグ＆ドロップ練習; de Maus-Ziehtest; es Prueba de arrastrar y soltar; taglines say rings "teleport" (they glide) -> fix all locales
## Code follow-ups
- subtitle inside <h1> in drag-and-drop + precision-flick-shot clients (+ aim-trainer) -> move to sibling <p> (same fix as FPS AngleHold/InstantResponse)
- EN RULES_ITEMS "-0.8s": drag has no time penalty; flick = -1s forced -> fix
## Notes
- ko/pt precision-flick retitles done early; they match the completed ko/pt maps -> keep.
## From finger-sequencing + keyboard-recognition agent
- drillNames finger-sequencing: ko 순서 클릭 연습; ja 順番クリック練習; de Ziele in Reihenfolge klicken; fr Cliquer les cibles dans l'ordre; es Clics en orden; pt -> Cliques em Sequência (per pt map). Taglines all locales say "size order" (wrong: order = dashed path) -> fix.
- drillNames keyboard-recognition ja/es/fr/pt names claim speed/typing test -> use page titles.
- pt finger-sequencing page still mechanics-only, title "Treino de mira sequencial" collides with pt FPS hub -> retarget to "Cliques em Sequência" (pt map).
- ko finger-sequencing retitle 순서 클릭 연습 matches ko map -> keep.
- CLIENT BUG keyboard-recognition: matches event.code (positions) but labels US QWERTY -> AZERTY/QWERTZ users told wrong letters. Fix: label from event.key / navigator.keyboard.getLayoutMap() where available.
- EN finger-sequencing client RULES + EN page: +0.6s/-0.8s (real +2s / -1s forced), "numbered", "size order" -> fix. ko dictionary keyboard rule 4 "0.55x" (real floor ~0.8s).
- subtitle inside <h1> in finger-sequencing + keyboard-recognition clients.
## From hub + aim-trainer agent (12/12 OK, ko/pt full retarget)
- drillNames aim-trainer: pt Aim Trainer Online Grátis; es Aim Trainer Online; ko 에임 연습 사이트; ko/ja taglines say targets shrink -> they move.
- lib/i18n/dictionaries.js hubs.motor.h1/desc (all locales) still old titles + "9 drills" + keyboard-speed claims -> sync to new hub titles (ko 마우스 연습, ja マウス練習, de Maus-Präzisionstest & Feinmotorik-Übungen, fr Coordination œil-main à la souris, pt Jogos de Mouse, es Ejercicios de ratón). NOTE drill count becomes 9 again once keyboard-tester is added.
- AimTrainerClient.js:663 subtitle span inside <h1> -> move out.
## From ko/pt retarget agent (done, audits OK)
- drillNames: ko finger-sequencing 순서 조준 테스트 -> 순서 클릭 연습; ko steady-hand 손떨림 제어 테스트 (Steady Hand Game) -> 마우스 미로 게임; pt finger-sequencing Sequência de Mira (Sequence Aim Trainer) -> Cliques em Sequência; pt steady-hand keep.
- steady-hand taglines (all 6) say "narrowing corridor" (tolerance fixed) -> fix; tracing taglines es/fr/pt "surgical" -> fix.
