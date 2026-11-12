# VISUAL Phase B - coordinator pending (2026-11-12)

Apply to lib/i18n/drillNames.js after all 7 groups report (name = page primary, honest tagline; drop flicker/CFF/stereo/selective-attention claims).

## Card names (old -> new)
- rhythm-anomaly (G2): ko 깜빡임 구별 게임 | ja 点滅のズレ探しゲーム | de Visueller Rhythmustest | fr Test de rythme visuel | pt Encontre a célula fora do ritmo | es Encuentra la celda fuera de ritmo. Taglines: no flicker/CFF.
- distance-judgment (G2): ja 深視力トレーニング | ko 거리감 테스트 게임 | de Tiefenwahrnehmung testen | pt Treino de Noção de Distância; remove 입체시/stereo/estereopsia/stéréoscopique taglines ko/es/fr/pt.
- visual-search (G4): ko 다른 글자 찾기 | ja 文字探しゲーム | de Visuelle Suche Test | fr Test de recherche visuelle | pt Busca Visual | es Búsqueda Visual
- entropic-grid (G4): ko 글자 찾기 게임 | ja 視覚探索トレーニング | de Codes im Raster finden | fr Grille de codes à repérer | pt Atenção Concentrada em Grade | es Concentración en Cuadrícula

## Other coordinator items
- DONE: dictionaries.js hubs.visual-tracking h1/desc de/fr/es/pt (audit OK).
- DONE: EN distance-judgment page honesty + client subtitle out of h1 (EN/ko/ja audit OK).
- TODO: rhythm-anomaly client rules hardcoded English in all locales (i18n, defer/ask).
- CHECK vs cogmem maps: pt entropic-grid 'Atenção Concentrada' and es 'Concentración' may collide with cognitive concentration-grid / pt 'teste de atenção concentrada' family -> resolve when cogmem pt/es maps land.
- lib/i18n/visualTrackingHubNative.js still has clinical wording (overridden by pages) - cleanup optional.
- ja visual-tracking hub: map wants 視線追従トレーニング, blocked by ja keep rule.
- moving-target (G3): ko 동체시력 키우는 게임 | ja 動体視力を鍛えるゲーム | de Bewegte Ziele abfangen | fr Intercepter des cibles mobiles | pt Previsão de Trajetória | es Predicción de Trayectoria
- pursuit-tracker (G3): ko 시선 추적 게임 | de Glatte Blickfolge | fr Test de poursuite lisse au curseur | pt Perseguição Suave com o Cursor | es Persecución con el Cursor (ja unchanged)
- multiple-targets (G3): titles kept. ko/ja still contain 주변시 훈련 / 周辺視野トレーニング (map says drop; KOREA keep rule held) -> revisit after Korea settles.
- G7 card names: de split-screen 'Geteiltes Tracking: zwei Ziele gleichzeitig' | de strobe 'Stroboskop-Tracking: blinkendes Ziel verfolgen' | fr strobe 'Poursuite stroboscopique : cible clignotante'. Others unchanged.
- TODO (after G5/G6 finish): every visual-tracking client puts the subtitle INSIDE <h1> -> move to sibling <p> (markup only) in all 15 *Client.tsx, re-audit.
- G5 card names = new page titles: constant-slow ko 부드러운 시각 추적 훈련 / ja ゆっくり動く点を目で追う練習 / es Ejercicio de Seguimiento Lento Constante; directional-chaos ja/de/pt; dynamic-evasion ja/de/fr/pt/es; ghosting-suppress ALL 6 (drop 'monitor test' card names); infinity de Liegende Acht Augenübung. ko constant/directional/dynamic cards: drop 동체시력 prefix.
- RESOLVED: ko constant-slow title change OK (ko.md: GSC 0, no-demand descriptive; map already listed 부드러운 시각 추적 훈련).
- TODO: EN ghosting page still titled 'Eye Fixation Stability Training – Ghosting' -> honest EN title.
- G6 card names = new titles: peripheral ja/de/fr, momentum de + fr 'Poursuite oculaire : cible qui saute', predictive ko/ja, spatial-shift ko/ja/de/fr. False taglines all 6 locales: predictive (occlusion), spatial-shift (moving FOV/recording), sine ('horizontal and vertical', gain/phase error), peripheral (central target/responding).
- NOTE: visual-tracking start-card toggles are English-only on localized pages (copy glosses them) - i18n later.
