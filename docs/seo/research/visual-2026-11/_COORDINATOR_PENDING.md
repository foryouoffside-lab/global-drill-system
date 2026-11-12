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
