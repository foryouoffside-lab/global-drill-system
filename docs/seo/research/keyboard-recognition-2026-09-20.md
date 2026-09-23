# Keyboard recognition / key-response research — 2026-09-20

## Scope and guardrails

This is a one-drill audit for `movement-speed/keyboard-recognition`. All six existing country routes are retained because each market returned relevant native browser-test, keyboard-reaction, typing, or gamer keybind intent. No English copy was translated. Existing native guides, scientific references, benchmark tables, protocols, client copy, and ten FAQs remain intact; this run changes only demand-led metadata, schema naming/language, and the short start subtitle.

The workspace has no connected Google Search Console property, Google Keyword Planner export, or Bing Webmaster volume export. Live SERPs below establish phrasing and intent, not monthly volume. Google Trends links are regional relative-interest checks, not absolute demand. No ranking guarantee is made, and no Bing/IndexNow submission was performed.

## Native SERP evidence and keyword clusters

### Korea — `ko-KR`

Primary cluster: `키보드 반응속도 테스트`, `키보드 입력 속도 테스트`, `키 입력 반응 테스트`.

Secondary cluster: `키보드 레이턴시 테스트`, `키보드 CPS 테스트`, `키 바인드 연습`, `게이밍 키보드 반응속도`.

The Korean SERP distinguishes input latency, duplicate/chatter diagnosis, repeat-rate measurement, and keyboard CPS. This drill is a prompt-to-key reaction task, so the page should lead with `키보드 반응속도 테스트` and explain that browser event timing is not a laboratory hardware-latency certification.

Evidence: [KeyboardTest.io Korean latency test](https://keyboardtest.io/ko/keyboard-latency/), [Xbitlabs Korean key-chatter test](https://www.xbitlabs.com/ko/key-chatter-test/), [ChaosLens Korean keyboard CPS test](https://chaoslens.com/ko/keyboard-testing-tools/keyboard-cps-test/).

### Japan — `ja-JP`

Primary cluster: `キーボード 反応速度 テスト`, `キー反応 テスト`, `反応速度測定 キー版`.

Secondary cluster: `WASD トレーナー`, `キーバインド 練習`, `打鍵 速度 測定`, `タイピング 反応速度`.

Japanese results show a clear split between general reaction-time tools and gamer-specific WASD trainers. The localized page should make the key-prompt choice reaction explicit, with `WASD`/keybind language as supporting intent rather than replacing the general reaction query.

Evidence: [Luft Japanese keyboard reaction mode](https://www.luft.co.jp/cgi/reaction-speed-test.php), [ReflexBench Japanese WASD trainer](https://reflexbench.com/ja/assessments/wasd-trainer/), [typingpra key reaction test](https://typingpra.github.io/reaction_time/).

### Germany — `de-DE`

Primary cluster: `Tastatur Reaktionszeit Test`, `Tastatur Latenztest`, `Tasten Reaktionszeit messen`.

Secondary cluster: `WASD Trainer`, `Tastatur Reflex Test`, `Keybind Training`, `Tastatur Klickgeschwindigkeit`.

German SERPs explicitly separate input latency from human choice reaction and map key prompts to WASD execution. Metadata should front-load `Tastatur Reaktionszeit` and use `Keybind`/`WASD` as a gamer modifier without claiming that browser event timing proves hardware scan latency.

Evidence: [Xbitlabs German keyboard latency test](https://www.xbitlabs.com/de/keyboard-latency-test/), [ReflexBench German WASD trainer](https://reflexbench.com/de/assessments/wasd-trainer/), [German keyboard click-speed test](https://frameratetest.com/de/keyboard-clicker/).

### Brazil / Portuguese — `pt-BR`

Primary cluster: `teste de velocidade de teclado`, `teste de reação teclado`, `tempo de reação das teclas`.

Secondary cluster: `teste de reflexo no teclado`, `keybinds FPS`, `velocidade de resposta do teclado`, `teste de teclado gamer`.

Brazilian Portuguese SERPs favor direct online keyboard tests and clearly explain browser-visible key events, ABNT2 layouts, and gaming diagnostics. The page should use `teste de velocidade de teclado` plus reaction/keybind wording and stay honest about browser-observable input.

Evidence: [Testar Periférico Brazilian keyboard test](https://testarperiferico.com.br/teste-de-teclado), [Online Keyboard Tester Portuguese](https://www.onlinekeyboardtester.com/pt/), [Toolv Portuguese keyboard test](https://toolv.com/pt-BR/app/teste-de-teclado).

### Spain / Spanish — `es-ES`

Primary cluster: `test de reacción con tecla`, `test de velocidad de teclado`, `tiempo de reacción teclado`.

Secondary cluster: `test de reflejos teclado`, `latencia de teclado`, `velocidad de pulsación de teclas`, `keybinds teclado`.

Spanish results include a dedicated key-reaction test where the user presses only the displayed key, plus keyboard latency and key-event tools. This matches the drill’s choice-response mechanic better than generic typing-speed terms, so `test de reacción con tecla` leads the localized intent.

Evidence: [CPS-TEST Spanish key reaction test](https://cps-test.online/es/tests/reaction-key-test/), [Keymap Labs Spanish input-latency test](https://keymap.io/es/input-latency-test/), [Online Keyboard Tester Spanish](https://www.onlinekeyboardtester.com/es/).

### France / French — `fr-FR`

Primary cluster: `test de réaction clavier`, `test vitesse clavier`, `temps de réponse touche`.

Secondary cluster: `test clavier en ligne`, `latence clavier`, `vitesse de frappe clavier`, `entraînement touches gaming`.

French results distinguish a keyboard tester from a typing-speed test and expose browser `KeyboardEvent` data, latency caveats, and simultaneous-key limits. The page should lead with a native reaction/keyboard test phrase and make the browser-measurement boundary explicit.

Evidence: [OnlineKeyboardTester French keyboard test](https://www.onlinekeyboardtester.com/fr/), [key-test French keyboard performance test](https://key-test.com/fr/), [Keymap Labs French keyboard tester](https://keymap.io/fr/keyboard-tester/).

## Google Trends regional checks

These are relative-interest starting points only:

- [KR: 키보드 반응속도 테스트](https://trends.google.com/trends/explore?geo=KR&q=%ED%82%A4%EB%B3%B4%EB%93%9C%20%EB%B0%98%EC%9D%91%EC%86%8D%EB%8F%84%20%ED%85%8C%EC%8A%A4%ED%8A%B8)
- [JP: キーボード 反応速度 テスト](https://trends.google.com/trends/explore?geo=JP&q=%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%20%E5%8F%8D%E5%BF%9C%E9%80%9F%E5%BA%A6%20%E3%83%86%E3%82%B9%E3%83%88)
- [DE: Tastatur Reaktionszeit Test](https://trends.google.com/trends/explore?geo=DE&q=Tastatur%20Reaktionszeit%20Test)
- [BR: teste de velocidade de teclado](https://trends.google.com/trends/explore?geo=BR&q=teste%20de%20velocidade%20de%20teclado)
- [ES: test de reacción con tecla](https://trends.google.com/trends/explore?geo=ES&q=test%20de%20reacci%C3%B3n%20con%20tecla)
- [FR: test de réaction clavier](https://trends.google.com/trends/explore?geo=FR&q=test%20de%20r%C3%A9action%20clavier)

## 14-step audit record

1. Live localized SERPs were sampled for all six supported markets; relevant native tool pages are linked above.
2. Intent is interactive measurement first: see a prompt, press the matching physical key, then inspect reaction/accuracy results.
3. Competitor UX was reviewed from live snippets and page content; no unverified speed or Core Web Vitals claim is made.
4. Evidence pages are native-language or regional pages; no machine-translated implementation copy is introduced.
5. Competitor title patterns front-load reaction, latency, keyboard, key, WASD, or typing terms; the new metadata follows local phrasing.
6. Backlink authority was not available, so SERP difficulty and ranking probability are not fabricated.
7. SkillDrills differentiation is the focused choice-reaction drill, native client UI, full scientific guide, benchmark table, protocols, and ten FAQs.
8. Local question intent covers latency versus human reaction, keybind practice, browser limits, accuracy, and keyboard layouts; the existing FAQs cover these questions natively.
9. Long-tail modifiers were taken from local SERPs and gamer vocabulary, not translated from the English slug.
10. Competitors cluster around keyboard checks, typing speed, latency, and WASD trainers; this page owns the prompt-to-key reaction niche.
11. Broad keyboard tests are competitive; key-reaction and keybind modifiers are more focused, but no “easy” or “zero competition” claim is made.
12. Volume evidence is qualitative only: SERPs plus regional Trends links. Numeric Bing/GSC data is unavailable in the workspace.
13. Primary, secondary, and long-tail clusters are recorded above and applied individually to each locale.
14. The country-page demand gate is provisionally passed for all six because each market returned relevant native input/reaction intent; deployment data should validate impressions in GSC.

## Implementation checklist

- [x] Six locale-specific native keyword clusters researched.
- [x] Localized titles, descriptions, social metadata, and keywords prepared.
- [x] Language-specific schema entities and modification dates prepared.
- [x] Existing full content depth, benchmark table, protocols, sources, and ten FAQs retained.
- [x] Canonical and reciprocal alternate-language helper retained.
- [x] No English-to-local translation introduced.
- [x] No Bing, IndexNow, or deployment submission performed.
