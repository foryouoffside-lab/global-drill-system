# FPS phase A - coordinator decisions (2026-11-08)
- de: motor aim-trainer owns `aim trainer` (1,563; ranks 7.1); fps hub = `aim training` (168); target-acquisition = `valorant aim trainer` (149); flick-shot = `aim test` (117) and remove `aim test` from motor keywords; angle-hold = `cs2 aim training`; drop "Aim Trainer" prefix from 10 de FPS titles; instant-response -> "FPS-Reflextest". Phase B: trim reaction fps-tracking-trainer de keywords that overlap hub/target-acquisition/angle-hold.

# Phase B card-name sync queue (lib/i18n/drillNames.js) - apply after all agents finish
- anti-strafe: ko 무빙 트래킹 에임 연습 (ADAD 지터) -> 트래킹 연습 - ADAD 무빙 대응; ja レレレ撃ち 練習 (ジッタートラッキング) -> レレレ撃ち対策; de Anti-Strafe Aim Trainer -> ADAD-Tracking; fr Tracking Réactif -> Tracking anti-strafe ADAD; pt Treino de Anti-Strafe -> Tracking contra Strafe ADAD; es Tracking Reactivo -> Tracking contra Strafe ADAD
- anti-zigzag: ko 지그재그 무빙 트래킹 (슬라이딩 추적) -> 지그재그 무빙 트래킹; ja ジグザグ移動 練習 (スライディング追従) -> ジグザグ移動の敵に当てる練習; de Anti-Zigzag Aim Trainer -> Zickzack-Tracking; ALL-locale taglines promise slide-cancel/overshoot elimination -> rewrite (drill has no slides)
- Code follow-up (later, separate commit): AntiStrafeJitterClient.js + AntiZigzagClient.js RULES_ITEMS fallback says "+50 PTS (+0.4s/s)" (wrong); ABOUT_INTRO/ABOUT_CARDS render English on localized pages ("desync their hitbox"). EN pages likely carry same fabricated latency tables.
- vertical-air-track: de Vertikales Aim Training -> Vertikales Tracking; pt Treino de Mira Vertical -> Mira Vertical
- recoil-control: ko 반동 제어 연습 (스프레이 조절) -> 반동 연습 사이트 (반동 제어); ko tagline "총기별 반동 패턴" is wrong (one AK-style 30-round pattern) -> rewrite
- Code follow-up: VerticalAirTrackClient.js fallback "-0.6s" (code = 1s); RecoilControlClient.js "-0.6s" not marked opt-in.
- strafe-tracking: ko 에임 트래킹 연습 (Strafe Tracking Aim Trainer) -> 무빙 에임 연습; ja 追いエイム練習 (…) -> ストレイフ追いエイム練習; es Strafe Tracking de Puntería -> Tracking de Strafe
- pro-smooth-pursuit: ko 스무스 트래킹 에임 연습 (활창 추적) -> 에임 트래킹 연습; ja スムーズ トラッキング 練習 (滑走性眼球運動) -> トラッキングエイム練習; de Smooth Pursuit Aim Trainer -> Smooth Tracking üben; fr Tracking Fluide FPS -> Smooth Tracking; pt Treino de Tracking Suave -> Tracking Suave; es Tracking Suave de Puntería -> Smooth Tracking
- Code follow-up: strafe-tracking client rule 4 "1.0s off-target resets combo (-0.6s)" wrong (combo resets instantly; penalty opt-in).
- flick-shot-training: ko 플릭 에임 연습 -> 플릭샷 연습; de Flick Shot Training -> Aim Test – Flick-Training; fr -> Aim Test et Flicks; pt -> Teste de Mira e Flick; es -> Aim Test con Flicks
- micro-correction-precision: ko 마이크로 플릭 연습 -> 에임 미세조정 연습; ja マイクロフリック 練習 -> マイクロフリック練習; de -> Mikrokorrekturen trainieren
- Code follow-up: ProFlickClient RULES_ITEMS -0.8s (code -1s forced), "15 levels", fake pro accuracy %; MicroCorrectionClient RULES +0.2s/+585/-0.6s and FAQ "no time loss default" (forced -1s).
- target-prioritization: ko 타겟 우선순위 에임 연습 -> 타겟 우선순위 판단 연습; ja ターゲット優先度 エイム練習 -> ターゲット優先順位の判断練習; pt -> Prioridade de Alvos; es -> Prioridad de Objetivos
- REVIEW: angle-hold now has a "literature-range table" in 6 locales -> verify it cites nothing invented before push.
- Code follow-up: angle-hold RULES_ITEMS -0.8s, target-prioritization -0.6s (code: -1s opt-in, +2s/hit); angle-hold client overviewLead cites Donders/Hick, shown in fr/pt/es.
