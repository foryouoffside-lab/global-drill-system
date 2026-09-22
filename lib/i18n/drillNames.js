// lib/i18n/drillNames.js
// Per-locale override layer for drill display names and taglines.
// Keyed strictly by canonical English href -> locale -> { name, tagline }.
//
// WHY THIS FILE EXISTS:
// lib/drillsRegistry.js and lib/drillCatalog.js are flat English.
// When rendering drill cards, H1s, and internal anchor text in localized views,
// this provides native terminology justified by empirical keyword research.

export const DRILL_LOCALIZATIONS = {
  "/drills/physical/balance-training/stability-challenge": {
    "ja": {
      "name": "マウス安定性テスト・体幹バランス測定",
      "tagline": "風圧と反動力のベクトルに抗してカーソルを中央に安定維持するモーター制御テスト"
    },
    "ko": {
      "name": "마우스 안정성 테스트・신체 균형 감각 훈련",
      "tagline": "불규칙한 외력과 바람 저항 벡터에 맞서 크로스헤어를 중앙에 정밀 유지하는 제어 훈련"
    },
    "de": {
      "name": "Maus Stabilität Test (Balance Challenge Online)",
      "tagline": "Posturale Stabilität und präzise Maus-Stabilisierung gegen dynamische Kraftvektoren"
    },
    "es": {
      "name": "Test de Estabilidad del Ratón (Reto de Equilibrio)",
      "tagline": "Estabilidad postural y control micromotor contra vectores dinámicos de viento y fuerza"
    },
    "fr": {
      "name": "Test de Stabilité de la Souris (Défi d'Équilibre)",
      "tagline": "Stabilité posturale et contrôle micromoteur contre les vecteurs dynamiques de vent et de force"
    },
    "pt": {
      "name": "Teste de Estabilidade do Mouse (Desafio de Equilíbrio)",
      "tagline": "Estabilidade postural e controle micromotor contra vetores dinâmicos de vento e força"
    }
  },
  "/drills/physical/coordination/complex-pattern": {
    "ja": {
      "name": "パターン記憶ゲーム・視覚空間追従テスト",
      "tagline": "複雑化する幾何学パスを瞬時に記憶し正確に再現する視覚記憶・協調運動ドリル"
    },
    "ko": {
      "name": "패턴 기억 게임・공간 기억력 훈련",
      "tagline": "점점 복잡해지는 시각 경로를 기억하고 정확하게 다시 그리는 공간 인지 협응 훈련"
    },
    "de": {
      "name": "Muster Gedächtnis Spiel (Visuelles Gedächtnistraining)",
      "tagline": "Präge dir geometrische Pfade ein und zeichne sie fehlerfrei nach"
    },
    "es": {
      "name": "Juego de Memoria de Patrones (Memoria Espacial)",
      "tagline": "Memoriza trayectorias geométricas complejas y reprodúcelas sin errores"
    },
    "fr": {
      "name": "Jeu de Mémorisation de Motifs (Mémoire Spatiale)",
      "tagline": "Mémorisez des tracés géométriques complexes et reproduisez-les sans erreur"
    },
    "pt": {
      "name": "Jogo de Memória de Padrões (Memória Espacial)",
      "tagline": "Memorize trajetórias geométricas complexas e reproduza os caminhos motores sem cometer falhas"
    }
  },
  "/drills/physical/coordination/cross-body-movement": {
    "ja": {
      "name": "手と目の協調ゲーム・両側性正中線交差運動",
      "tagline": "画面の正中線を越えてノードを連結し大脳半球間の情報伝達と対角線エイムを強化"
    },
    "ko": {
      "name": "손 눈 협응력 게임・양측 정중선 교차 훈련",
      "tagline": "화면 중앙 정중선을 교차하는 노드를 신속하게 연결하여 양뇌 소통과 협응력을 극대화"
    },
    "de": {
      "name": "Hand-Auge-Koordination Spiel (Bilaterales Training)",
      "tagline": "Verbinde Knotenpunkte über die Mittellinie zur Schulung der interhemisphärischen Koordination"
    },
    "es": {
      "name": "Juego de Coordinación Ojo-Mano (Movimiento Bilateral)",
      "tagline": "Conecta nodos cruzando la línea media para entrenar la coordinación interhemisférica"
    },
    "fr": {
      "name": "Jeu de Coordination Œil-Main (Mouvement Bilatéral)",
      "tagline": "Reliez des nœuds en franchissant la ligne médiane pour stimuler la coordination interhémisphérique"
    },
    "pt": {
      "name": "Jogo de Coordenação Olho-Mão (Movimento Bilateral)",
      "tagline": "Conecte nós cruzando a linha média visual para estimular a integração inter-hemisférica"
    }
  },
  "/drills/physical/coordination/dynamic-grid-evasion": {
    "ja": {
      "name": "障害物回避ゲーム・グリッド空間認識テスト",
      "tagline": "格子状グリッド上を移動する危険エリアを瞬時に察知しカーソルを安全区画へ退避"
    },
    "ko": {
      "name": "마우스 피하기 게임・그리드 공간 회피 훈련",
      "tagline": "그리드 셀에서 발생하는 위험 요소를 신속하게 예측하고 안전 구역으로 마우스를 긴급 회피"
    },
    "de": {
      "name": "Ausweichspiel Online (Gitter-Ausweich-Trainer)",
      "tagline": "Taktisches Ausweichen vor Gefahrenzonen im dynamischen Koordinatengitter"
    },
    "es": {
      "name": "Juego de Esquivar Cuadrícula (Evasión Rápida)",
      "tagline": "Esquiva zonas de peligro en una cuadrícula dinámica con reflejos rápidos"
    },
    "fr": {
      "name": "Jeu d'Esquive sur Grille (Évasion Rapide)",
      "tagline": "Esquivez les zones de danger sur une grille dynamique avec des réflexes rapides"
    },
    "pt": {
      "name": "Jogo de Esquiva na Grade (Evasão Dinâmica)",
      "tagline": "Desvie de zonas dinâmicas de risco em uma grade coordenada com reflexos rápidos e precisão"
    }
  },
  "/drills/physical/fitness/agility-ladder": {
    "ja": {
      "name": "ラダートレーニング・敏捷性フットワークドリル",
      "tagline": "アジリティラダーのリズミカルなステップ運動と両側運動シーケンスを体得"
    },
    "ko": {
      "name": "민첩성 사다리 훈련・풋워크 스텝 드릴",
      "tagline": "양측성 운동 시퀀싱과 리듬감 있는 발놀림 스텝으로 신체 민첩성 극대화"
    },
    "de": {
      "name": "Koordinationsleiter Übungen (Agility Ladder Training)",
      "tagline": "Bilateral motorische Schrittfolgen und Rhythmusgefühl für maximale Beinschnelligkeit"
    },
    "es": {
      "name": "Escalera de Agilidad Online (Entrenamiento de Pies)",
      "tagline": "Secuencias motoras bilaterales y ritmo para maximizar la velocidad de pies y agilidad"
    },
    "fr": {
      "name": "Échelle d'Agilité en Ligne (Entraînement des Pieds)",
      "tagline": "Séquences motrices bilatérales et rythme pour maximiser la vitesse des appuis et la vivacité"
    },
    "pt": {
      "name": "Escada de Agilidade Online (Treino de Passadas)",
      "tagline": "Sequências motoras bilaterales e ritmo ágil para maximizar a velocidade de pés e coordenação"
    }
  },
  "/drills/physical/fitness/jump-sequence": {
    "ja": {
      "name": "ジャンプタイミング練習・プライオメトリクス運動",
      "tagline": "伸張-短縮サイクル(SSC)のインパルスを計算し空中の標的を完璧なタイミングで捉える"
    },
    "ko": {
      "name": "점프 타이밍 훈련・플라이오메트릭 리듬 테스트",
      "tagline": "신장-단축 주기(SSC) 탄성을 활용하여 공중 표적을 정확한 타점에 요격"
    },
    "de": {
      "name": "Sprung Timing Übung (Reaktivkraft-Training)",
      "tagline": "Berechne Sprungtrajektorien und nutze den Dehnungs-Verkürzungs-Zyklus optimal"
    },
    "es": {
      "name": "Test de Timing de Salto (Fuerza Reactiva)",
      "tagline": "Calcula trayectorias y optimiza el ciclo de estiramiento-acortamiento para interceptar dianas"
    },
    "fr": {
      "name": "Test de Timing de Saut (Force Réactive)",
      "tagline": "Calculez les trajectoires et exploitez le cycle étirement-détente pour intercepter les cibles"
    },
    "pt": {
      "name": "Teste de Timing de Salto (Força Reativa)",
      "tagline": "Calcule trajetórias balísticas e use o ciclo de alongamento-encurtamento para interceptar alvos"
    }
  },
  "/drills/physical/fitness/speed-drill": {
    "ja": {
      "name": "マウスクリック連打テスト・俊敏性タッピング速度",
      "tagline": "縮小するターゲットに対して高精度かつ最速のクリック連打を叩き込む"
    },
    "ko": {
      "name": "마우스 클릭 속도 테스트・광클 연타 훈련",
      "tagline": "수축하는 표적의 경계 내에서 최고 속도로 정밀 연타를 기록하는 민첩성 테스트"
    },
    "de": {
      "name": "Click Speed Test (Klick-Geschwindigkeitstest & Speed Drill)",
      "tagline": "Zielerfassung und Klickkadenz unter schrumpfenden Zielradien testen"
    },
    "es": {
      "name": "Test de Velocidad de Clic (Speed Drill de Reflejos)",
      "tagline": "Precisión y cadencia de clics a máxima velocidad en objetivos de tamaño decreciente"
    },
    "fr": {
      "name": "Test de Vitesse de Clic (Speed Drill de Réflexes)",
      "tagline": "Précision et cadence de clics à cadence maximale sur des cibles au rayon décroissant"
    },
    "pt": {
      "name": "Teste de Velocidade de Clique (Speed Drill de Reflexos)",
      "tagline": "Cadência máxima de cliques e precisão em alvos dinâmicos com raio de acerto decrescente"
    }
  },
  "/drills/physical/reflex-training/drop-catch": {
    "ja": {
      "name": "ものさし落下テスト・ドロップキャッチ反射神経測定",
      "tagline": "重力加速度で落下する緑の標的を最速でキャッチし赤のデコイを瞬時に抑制"
    },
    "ko": {
      "name": "자 떨어뜨리기 반응속도・낙하 드롭 캐치 테스트",
      "tagline": "자유낙하하는 표적을 밀리초(ms) 단위로 낚아채고 붉은 유인물을 억제하는 순발력 훈련"
    },
    "de": {
      "name": "Lineal Fall Test Online (Drop-Catch-Reaktionstest)",
      "tagline": "Fange fallende Zielobjekte im freien Fall und widerstehe roten Ködern"
    },
    "es": {
      "name": "Test de la Regla que Cae (Drop Catch de Reflejos)",
      "tagline": "Atrapa objetivos en caída libre en milisegundos e inhibe la respuesta a señuelos rojos"
    },
    "fr": {
      "name": "Test de la Règle qui Tombe (Drop Catch de Réflexes)",
      "tagline": "Attrapez les cibles en chute libre en millisecondes et inhibez la réponse aux leurres rouges"
    },
    "pt": {
      "name": "Teste da Régua Caindo (Drop Catch de Reflexos)",
      "tagline": "Capture alvos em queda livre com rapidez milimétrica e iniba impulsos diante de iscas vermelhas"
    }
  },
  "/drills/physical/reflex-training/peripheral-threat-sweeper": {
    "ja": {
      "name": "周辺視野トレーニングゲーム・有効視野(UFOV)測定",
      "tagline": "中心を注視しながら周辺視野に出現する脅威を迅速に察知・排除する動体視野テスト"
    },
    "ko": {
      "name": "주변 시야 테스트 게임・유효 시야(UFOV) 훈련",
      "tagline": "화면 중앙을 응시하면서 주변부 시야에 깜빡이는 위험을 감지하여 반응하는 동체시력 훈련"
    },
    "de": {
      "name": "Gesichtsfeld Test Online (Peripheres Sehen Training)",
      "tagline": "Trainiere dein peripheres Blickfeld (UFOV) und reagiere blitzschnell auf radiale Reize"
    },
    "es": {
      "name": "Test de Visión Periférica (Campo Visual Útil UFOV)",
      "tagline": "Entrena tu campo visual periférico y reacciona de inmediato a amenazas perimétricas"
    },
    "fr": {
      "name": "Test de Vision Périphérique (Champ Visuel Utile UFOV)",
      "tagline": "Entraînez votre champ visuel périphérique et réagissez instantanément aux menaces radiales"
    },
    "pt": {
      "name": "Teste de Visão Periférica (Campo Visual Útil UFOV)",
      "tagline": "Treine a amplitude do campo visual útil periférico e responda de imediato a ameaças radiais"
    }
  },
  "/drills/physical/reflex-training/quick-dodge": {
    "ja": {
      "name": "マウス回避ゲーム・反射神経弾幕ドッジ",
      "tagline": "四方から迫り来る高速プロジェクタイルを極限のミリメートル精度で回避し続ける"
    },
    "ko": {
      "name": "마우스 피하기 게임・순발력 탄막 회피 챌린지",
      "tagline": "화면을 가로지르는 고속 투사체를 마우스 커서로 극한까지 회피하는 반사신경 게임"
    },
    "de": {
      "name": "Ausweichspiel Online (Maus-Ausweich-Challenge)",
      "tagline": "Weiche dynamischen Projektilen mit präziser Cursor-Steuerung millimetergenau aus"
    },
    "es": {
      "name": "Juego de Esquivar con el Ratón (Evasión de Balas)",
      "tagline": "Esquiva proyectiles dinámicos a alta velocidad con precisión milimétrica del cursor"
    },
    "fr": {
      "name": "Jeu d'Esquive à la Souris (Esquive de Projectiles)",
      "tagline": "Esquivez des projectiles dynamiques à haute vitesse avec une précision millimétrique du curseur"
    },
    "pt": {
      "name": "Jogo de Esquiva com o Mouse (Desvio de Projéteis)",
      "tagline": "Desvie o cursor de projéteis em alta velocidade com precisão milimétrica e reflexos afiados"
    }
  },
  "/drills/physical/reflex-training/reaction-chain": {
    "ja": {
      "name": "ゴーノーゴーテスト・連続反応＆衝動制御ドリル",
      "tagline": "連続する視覚シグナルに対して進行と即時停止(Go/No-Go)を切り替える制動抑制テスト"
    },
    "ko": {
      "name": "고노고 테스트 온라인・충동 조절 연속 반응 훈련",
      "tagline": "급가속하는 마우스 커서를 정지 구역에 즉각 제동하여 모터 억제력을 평가하는 반응 드릴"
    },
    "de": {
      "name": "Go No Go Test Online (Reaktionskette & Impulskontrolle)",
      "tagline": "Trainiere blitzschnelle Beschleunigung und präzise Bremskontrolle bei visuellen Stoppsignalen"
    },
    "es": {
      "name": "Test Go/No-Go Online (Cadena de Reacción & Freno)",
      "tagline": "Entrena aceleración rápida y desaceleración inmediata ante señales visuales de parada"
    },
    "fr": {
      "name": "Test Go/No-Go en Ligne (Chaîne de Réaction & Frein)",
      "tagline": "Entraînez accélération vive et décélération immédiate face aux signaux visuels d'arrêt"
    },
    "pt": {
      "name": "Teste Go/No-Go Online (Cadeia de Reação & Freio)",
      "tagline": "Acelere o movimento e aplique desaceleração imediata de frenagem motora a sinais de parada"
    }
  },
  "/drills/reaction-speed/reaction-time-test": {
    "ko": {
      "name": "반응속도 테스트",
      "tagline": "밀리초(ms) 단위 시각 반응속도 정밀 측정 및 등급 판정"
    },
    "ja": {
      "name": "反射神経テスト・反応速度テスト",
      "tagline": "ミリ秒(ms)単位で視覚反射神経と反応速度を正確に測定・診断"
    },
    "de": {
      "name": "Reaktionstest (Reaktionszeit Test)",
      "tagline": "Reaktionszeit in Millisekunden (ms) online messen und Reflexe trainieren"
    },
    "pt": {
      "name": "Teste de Reflexo (Tempo de Reação)",
      "tagline": "Meça seu tempo de reação visual e reflexos em milissegundos (ms)"
    },
    "es": {
      "name": "Test de Reflejos (Tiempo de Reacción)",
      "tagline": "Mide tu velocidad de reacción visual en milisegundos (ms) online"
    },
    "fr": {
      "name": "Test de Réflexe (Temps de Réaction)",
      "tagline": "Mesurez votre temps de réaction visuelle en millisecondes en ligne"
    }
  },
  "/drills/reaction-speed/reflex-training-drill": {
    "ja": {
      "name": "反射神経ゲーム",
      "tagline": "画面に出現する複数ターゲットを素早くタップして反射神経と分割注意力を強化"
    },
    "ko": {
      "name": "순발력 테스트・반사신경 게임",
      "tagline": "동시에 출현하는 멀티 타깃을 신속하게 타격하여 순발력과 분할 주의력을 훈련"
    },
    "de": {
      "name": "Reflex-Training & Reaktionsspiel",
      "tagline": "Multi-Target-Reflextraining zur Steigerung von Reaktionsschnelligkeit und geteilter Aufmerksamkeit"
    },
    "pt": {
      "name": "Jogo de Reflexo e Treino de Reflexos",
      "tagline": "Acerte múltiplos alvos simultâneos para treinar atenção dividida e reflexos rápidos"
    },
    "es": {
      "name": "Juego de Reflejos (Multi-Objetivo)",
      "tagline": "Elimina objetivos múltiples simultáneos para entrenar reflejos rápidos y atención dividida"
    },
    "fr": {
      "name": "Jeu de Réflexe & Entraînement",
      "tagline": "Éliminez les cibles multiples pour développer vos réflexes et votre attention divisée"
    }
  },
  "/drills/reaction-speed/visual-tracking-speed-test": {
    "ja": {
      "name": "動体視力テスト（視覚追従スピード測定）",
      "tagline": "動くターゲットを滑動性眼球運動で追跡し動体視力と空間認知スピードを測定・強化"
    },
    "ko": {
      "name": "동체시력 테스트 (시각 추적 속도 검사)",
      "tagline": "화면을 이동하는 운동 타깃을 눈으로 추적하여 동체시력과 시각 반응속도를 정밀 측정"
    },
    "de": {
      "name": "Visueller Reaktionstest (Blickverfolgung & Reflex-Test)",
      "tagline": "Blickfolgebewegung und visuelle Reflexe an dynamisch bewegten Zielen online messen"
    },
    "pt": {
      "name": "Teste de Rastreamento Visual (Acuidade Visual Dinâmica)",
      "tagline": "Meça sua capacidade de rastreamento ocular e reflexo visual em alvos em movimento"
    },
    "es": {
      "name": "Test de Seguimiento Visual (Agudeza Visual Dinámica)",
      "tagline": "Mide la agudeza visual dinámica y el tiempo de intercepción de objetivos en movimiento"
    },
    "fr": {
      "name": "Test de Poursuite Visuelle",
      "tagline": "Test de poursuite visuelle gratuit en ligne. Suivez les cibles en mouvement pour mesurer votre acuité dynamique et votre vitesse de réaction motrice."
    }
  },
  "/drills/reaction-speed/reaction-game": {
    "ja": {
      "name": "反射神経ゲーム (Reaction Game)",
      "tagline": "落下ターゲットを瞬時迎撃する縦方向視覚追跡＆反射速度トレーニング"
    },
    "ko": {
      "name": "반응속도 게임 (Reaction Game)",
      "tagline": "낙하하는 타겟을 순간 요격하는 수직 시각 추적 및 순발력 측정"
    },
    "de": {
      "name": "Reaktionsspiel Online",
      "tagline": "Fallende Ziele abfangen und vertikale Blickverfolgung trainieren"
    },
    "pt": {
      "name": "Jogos de Reflexo Online",
      "tagline": "Intercepte alvos em queda acelerada e treine rastreamento vertical"
    },
    "es": {
      "name": "Juego de Reflejos Online",
      "tagline": "Intercepta objetivos en caída acelerada y entrena seguimiento vertical"
    },
    "fr": {
      "name": "Jeu de Réflexe en Ligne",
      "tagline": "Jeu de réflexe et de réaction en ligne gratuit : interceptez les cibles en chute rapide, entraînez votre suivi visuel et vos réflexes dans le navigateur."
    }
  },
  "/drills/cognitive/focus/concentration-grid": {
    "es": {
      "name": "Tabla de Schulte (Concentration Grid)",
      "tagline": "Busca números secuenciales en cuadrículas Schulte en expansión y amplía tu visión periférica"
    },
    "pt": {
      "name": "Tabela de Schulte (Concentration Grid)",
      "tagline": "Encontre números sequenciais em grades de Schulte em expansão e amplie sua visão periférica"
    },
    "ja": {
      "name": "シュルテテーブル (Concentration Grid)",
      "tagline": "拡大するグリッド上の連番を素早く見つけ周辺視野と集中力を鍛える無料認知トレーニング"
    },
    "ko": {
      "name": "슐테 테이블 – 주변시야 집중력 격자 훈련",
      "tagline": "무작위 배열된 숫자를 순서대로 빠르게 찾아 시각 탐색 속도와 시야각 확장 훈련"
    },
    "de": {
      "name": "Schulte-Tabelle Online",
      "tagline": "Kostenlose Schulte-Tabelle online: Trainiere peripheres Sehen, Schnelllesen und visuelle Suchgeschwindigkeit auf anpassbaren Zahlen-Gittern."
    },
    "fr": {
      "name": "Table de Schulte en Ligne",
      "tagline": "Table de Schulte gratuite en ligne: entraînez vision périphérique, lecture rapide et exploration séquentielle sur des grilles dynamiques sans inscription."
    }
  },
  "/drills/cognitive/focus/distraction-fighter": {
    "ja": {
      "name": "ストループテスト (Stroop Test)",
      "tagline": "文字の意味とインク色の不一致を瞬時に見極める認知干渉抑制テスト"
    },
    "ko": {
      "name": "스트룹 검사 – 인지 억제 및 주의력 테스트",
      "tagline": "단어 의미와 글자 색상의 인지적 간섭을 극복하고 순간 반응 판단력 측정"
    },
    "de": {
      "name": "Stroop-Test Online",
      "tagline": "Kostenloser Stroop-Test online: Messe kognitive Inhibition und selektive Aufmerksamkeit beim Farb-Wort-Interferenztest direkt im Browser ohne Anmeldung."
    },
    "es": {
      "name": "Test de Stroop Online",
      "tagline": "Test de Stroop online gratis: mida su inhibición cognitiva y atención selectiva indicando el color de la tinta sin dejarse confundir por la palabra escrita."
    },
    "fr": {
      "name": "Test de Stroop en Ligne",
      "tagline": "Test de Stroop gratuit en ligne: évaluez votre inhibition cognitive et votre attention sélective en nommant la couleur de police sans lire le mot écrit."
    },
    "pt": {
      "name": "Teste de Stroop Online",
      "tagline": "Teste de Stroop online grátis: avalie sua inibição cognitiva e atenção seletiva nomeando a cor da fonte enquanto ignora o significado da palavra escrita."
    }
  },
  "/drills/motor/movement-speed/rapid-tapping": {
    "ko": {
      "name": "CPS 측정 (클릭속도 테스트)",
      "tagline": "초당 클릭 수(CPS) 정밀 측정 및 마우스 광클 지속력 훈련"
    },
    "ja": {
      "name": "連打測定・CPSテスト",
      "tagline": "1秒間のクリック速度測定・CPS測定と連打持久力テスト"
    },
    "pt": {
      "name": "Teste de CPS (Velocidade de Clique)",
      "tagline": "Meça seus cliques por segundo (CPS) e resistência de toque"
    },
    "fr": {
      "name": "Test CPS (Vitesse de Clic)",
      "tagline": "Mesurez vos clics par seconde et votre endurance de frappe"
    },
    "es": {
      "name": "Test de CPS (Clicks Por Segundo)",
      "tagline": "Mide tus clicks por segundo y velocidad de cliqueo con prueba de 45 segundos"
    },
    "de": {
      "name": "CPS Test (Klickgeschwindigkeit)",
      "tagline": "Klicks pro Sekunde und Klickgeschwindigkeit mit 45-Sekunden-Test messen"
    }
  },
  "/drills/motor/hand-eye-coordination/aim-trainer": {
    "ko": {
      "name": "에임 연습 (Aim Trainer)",
      "tagline": "축소되는 타겟을 연속 격파하는 동적 마우스 정확도 훈련"
    },
    "ja": {
      "name": "エイム練習 (Aim Trainer)",
      "tagline": "小さくなるターゲットを素早く連続クリックするマウス精度訓練"
    },
    "de": {
      "name": "Aim Trainer Online",
      "tagline": "Kostenloses Maus-Präzisionstraining & Zielgenauigkeitstest im Browser"
    },
    "pt": {
      "name": "Treino de Mira Online (Aim Trainer)",
      "tagline": "Treine a precisão do mouse, reflexos e micro-flicks para jogos FPS"
    },
    "es": {
      "name": "Aim Trainer Online (Entrenador de Puntería)",
      "tagline": "Entrena puntería con el mouse, micro-flicks y precisión para juegos FPS"
    },
    "fr": {
      "name": "Aim Trainer en Ligne (Entraînement de Visée)",
      "tagline": "Entraînez votre précision de souris, vos micro-flicks et votre visée pour jeux FPS"
    }
  },
  "/drills/motor/movement-speed/keyboard-recognition": {
    "ko": {
      "name": "키보드 타건 속도 훈련",
      "tagline": "화면 프롬프트에 맞는 키를 즉시 입력하는 키 속도 훈련"
    },
    "ja": {
      "name": "キーボード練習 (Keyboard Speed Test)",
      "tagline": "ブラインドタッチと打鍵反応速度を測定・訓練する無料キートレーナー"
    },
    "de": {
      "name": "Tastatur Reaktionsgeschwindigkeitstest",
      "tagline": "Reagiere blitzschnell auf Bildschirmanweisungen zur Stärkung des Tastatur-Muskelgedächtnisses"
    },
    "es": {
      "name": "Test de Velocidad de Teclado",
      "tagline": "Reacciona a indicaciones en pantalla para consolidar la memoria muscular mecanográfica"
    },
    "fr": {
      "name": "Test de Vitesse de Frappe au Clavier",
      "tagline": "Réagissez aux instructions à l'écran pour ancrer la mémoire musculaire dactyle"
    },
    "pt": {
      "name": "Teste de Velocidade no Teclado (Digitação Rápida)",
      "tagline": "Reaja a comandos na tela para fortalecer a memória muscular de digitação e keybinds"
    }
  },
  "/drills/motor/hand-eye-coordination/precision-flick-shot": {
    "ko": {
      "name": "정밀 플릭 샷",
      "tagline": "미세 조리개 중심 타겟을 순간 포착하는 스냅 조준 훈련"
    },
    "ja": {
      "name": "精密フリックショット (Precision Flick Shot)",
      "tagline": "微小な開口部の中央ターゲットを瞬間的に捉えるスナップエイム訓練"
    },
    "de": {
      "name": "Präzisions-Flick-Shot (Snap-Aim-Training)",
      "tagline": "Erfasse winzige Zielpunkte im Blenden-Zentrum mit blitzschnellem Snap-Aiming"
    },
    "es": {
      "name": "Flick Shot de Precisión (Snap Aim)",
      "tagline": "Fija objetivos minúsculos en el centro de la mirilla con micro-flicks instantáneos"
    },
    "fr": {
      "name": "Flick Shot de Précision (Snap Aim)",
      "tagline": "Verrouillez des micro-cibles au centre du réticule avec des flicks instantanés"
    },
    "pt": {
      "name": "Flick Shot de Precisão (Snap Aim)",
      "tagline": "Acerte alvos minúsculos no centro da mira com micro-flicks instantâneos"
    }
  },
  "/drills/motor/hand-eye-coordination/drag-and-drop": {
    "ko": {
      "name": "드래그 앤 드롭 테스트",
      "tagline": "순간이동하는 링 안으로 정밀하게 볼을 이동시키는 마우스 조작 훈련"
    },
    "ja": {
      "name": "ドラッグ＆ドロップ テスト",
      "tagline": "テレポートするリング内へ高精度にボールを運ぶマウス操作ドラッグ訓練"
    },
    "de": {
      "name": "Drag-and-Drop Test Online",
      "tagline": "Bewege Bälle präzise in dynamische Teleportationsringe zur Kalibrierung der Mausführung"
    },
    "es": {
      "name": "Test de Arrastrar y Soltar (Drag and Drop)",
      "tagline": "Mueve esferas con precisión hacia anillos dinámicos para calibrar el agarre del cursor"
    },
    "fr": {
      "name": "Test Glisser-Déposer (Drag and Drop)",
      "tagline": "Déplacez les sphères avec précision dans des anneaux dynamiques pour calibrer le guidage du curseur"
    },
    "pt": {
      "name": "Teste de Arrastar e Soltar (Drag and Drop)",
      "tagline": "Mova esferas com precisão para anéis dinâmicos para calibrar o controle do cursor"
    }
  },
  "/drills/motor/precision-control/tracing": {
    "ko": {
      "name": "마우스 트레이싱",
      "tagline": "불규칙한 파동 궤적을 부드럽게 추적하는 마우스 연속 제어"
    },
    "ja": {
      "name": "マウストレーシング (Mouse Tracing Game)",
      "tagline": "不規則な正弦波の軌道を滑らかに追従するマウス連続コントロール訓練"
    },
    "de": {
      "name": "Maus Tracing Spiel (Pfadverfolgung)",
      "tagline": "Verfolge unregelmäßige Wellenkurven geschmeidig für kontinuierliche Mikrokontrolle"
    },
    "es": {
      "name": "Test de Trazado de Ratón (Mouse Tracing)",
      "tagline": "Sigue ondas sinusoidales continuas con suavidad para un micro-control quirúrgico"
    },
    "fr": {
      "name": "Test de Tracé à la Souris (Mouse Tracing)",
      "tagline": "Suivez des trajectoires sinusoïdales continues avec fluidité pour un micro-contrôle chirurgical"
    },
    "pt": {
      "name": "Teste de Traçado com o Mouse (Mouse Tracing)",
      "tagline": "Siga ondas senoidais contínuas com suavidade para micro-controle cirúrgico do cursor"
    }
  },
  "/drills/motor/movement-speed/finger-sequencing": {
    "ko": {
      "name": "순서 조준 테스트",
      "tagline": "크기 순서대로 노드를 신속하게 클릭하는 손가락 기민성 훈련"
    },
    "ja": {
      "name": "順序エイム練習 (Sequence Aim Trainer)",
      "tagline": "大きさ順にノードを最速クリックする指先の敏捷性と反応シーケンス訓練"
    },
    "de": {
      "name": "Reihenfolge-Zieltraining (Finger-Sequenzierung)",
      "tagline": "Klicke Knotenpunkte in aufsteigender Größenordnung zur Schulung von Fingerfertigkeit und Rhythmus"
    },
    "es": {
      "name": "Secuencia de Disparo (Sequence Aim Trainer)",
      "tagline": "Haz clic en nodos por orden de tamaño para entrenar destreza digital y ritmo motor"
    },
    "fr": {
      "name": "Séquence de Visée (Sequence Aim Trainer)",
      "tagline": "Cliquez sur les nœuds par ordre de taille pour développer la dextérité digitale et le rythme"
    },
    "pt": {
      "name": "Sequência de Mira (Sequence Aim Trainer)",
      "tagline": "Clique em nós por ordem de tamanho para treinar destreza digital e ritmo motor"
    }
  },
  "/drills/fps/angle-hold-trainer": {
    "ja": {
      "name": "置きエイム 練習 (プリエイム)",
      "tagline": "チョークポイントの飛び出しに対する置き幅と初弾反応速度を測定・強化：ピークアドバンテージを打破する防御プリエイムFPSドリル"
    },
    "ko": {
      "name": "대기 에임 연습 (각 쪼개기)",
      "tagline": "모퉁이에서 튀어나오는 적에 맞춘 적정 대기폭(오프셋)과 격발 반응속도를 훈련：피커스 어드밴티지를 무력화하는 방어형 프리 에임 트레이너"
    },
    "de": {
      "name": "Crosshair Placement Training",
      "tagline": "Kostenloser Crosshair Placement Trainer. Optimiere Wandabstand, Kopfhöhe und Reaktionszeit, um den Peeker-Advantage in CS2 und Valorant auszukontern."
    },
    "es": {
      "name": "Colocación de Mira",
      "tagline": "Entrena colocación de mira y retención de ángulos en el navegador. Calibra la separación de esquina y supera la ventaja del peeker en CS2 y Valorant."
    },
    "fr": {
      "name": "Placement du Viseur",
      "tagline": "Entraînez le placement du viseur et la tenue de ligne sur PC. Calibrez votre distance au mur et neutralisez le peeker advantage sur CS2 et Valorant."
    },
    "pt": {
      "name": "Posicionamento de Mira",
      "tagline": "Treine posicionamento de mira e marcação de ângulos no navegador. Calibre o espaçamento da parede e neutralize o peeker advantage no CS2 e Valorant."
    }
  },
  "/drills/memory/short-term-memory/color-sequence": {
    "pt": {
      "name": "Jogo da Memória Online (Color Sequence)",
      "tagline": "Treino interativo de memória operacional visual e retenção de sequências de cores"
    },
    "ko": {
      "name": "사이먼 게임 – 색깔 순서 단기 기억력 테스트",
      "tagline": "점진적으로 길어지는 발광 컬러 시퀀스를 정확히 기억하고 재현하는 순차 기억력 훈련"
    },
    "ja": {
      "name": "サイモンゲーム – 色と順番の記憶力テスト",
      "tagline": "光る色の順番を記憶して再現し、視覚的ワーキングメモリと短期記憶容量を測定・強化"
    },
    "de": {
      "name": "Senso Spiel Online",
      "tagline": "Kostenloses Senso-Spiel online: Merke dir die wachsende Farb-Reihenfolge und teste dein visuelles Arbeitsgedächtnis direkt im Browser ohne Anmeldung."
    },
    "es": {
      "name": "Juego Simón Online",
      "tagline": "Juego Simón online gratis: Memoriza secuencias de colores en expansión y pon a prueba tu memoria de trabajo visual directamente en el navegador sin descargas."
    },
    "fr": {
      "name": "Jeu Simon en Ligne",
      "tagline": "Jeu Simon en ligne gratuit: Retenez des suites de couleurs croissantes et testez votre mémoire de travail visuelle directement dans le navigateur sans compte."
    }
  },
  "/drills/visual/depth-perception/distance-judgment": {
    "ja": {
      "name": "深視力検査 (Distance Judgment)",
      "tagline": "三桿法の深視力練習と奥行知覚のタイミングドリル"
    },
    "ko": {
      "name": "입체시 검사・원근감 테스트 (삼간법 거리 판단)",
      "tagline": "입체시 검사와 심시력 연습을 위한 거리감 훈련 드릴"
    },
    "de": {
      "name": "Tiefensehen Test (Räumliches Sehen & Abstandsschätzung)",
      "tagline": "Räumliches Sehen testen und Entfernungsschätzung mit einem bewegten Ziel üben"
    },
    "es": {
      "name": "Test de Percepción de Profundidad (Cálculo de Distancia)",
      "tagline": "Practica la estereopsis y el cálculo de distancias con un objetivo en movimiento"
    },
    "fr": {
      "name": "Test de Perception de la Profondeur (Calcul de Distance)",
      "tagline": "Entraînez la vision stéréoscopique et l’appréciation des distances en ligne"
    },
    "pt": {
      "name": "Teste de Percepção de Profundidade (Cálculo de Distância)",
      "tagline": "Treine a estereopsia e a noção de distância com um alvo em movimento"
    }
  },
  "/drills/motor/precision-control/steady-hand": {
    "ja": {
      "name": "イライラ棒 (Steady Hand Game)",
      "tagline": "壁に触れずに狭まる電撃コースを進む無料イライラ棒・マウス精度テスト"
    },
    "ko": {
      "name": "손떨림 제어 테스트 (Steady Hand Game)",
      "tagline": "좁아지는 통로를 벗어나지 않고 이동하는 미세 마우스 제어 및 손떨림 억제 훈련"
    },
    "de": {
      "name": "Ruhige Hand Spiel (Heißer Draht Online)",
      "tagline": "Führe den Cursor ohne Wandberührung durch enge Korridore zur Unterdrückung von Handzittern"
    },
    "es": {
      "name": "Juego del Pulso Firme (Laberinto del Ratón)",
      "tagline": "Guía el cursor por pasillos estrechos sin tocar los bordes para suprimir el temblor de mano"
    },
    "fr": {
      "name": "Jeu de la Main Ferme (Fil Chaud Virtuel)",
      "tagline": "Guidez le curseur dans des couloirs étroits sans toucher les parois pour supprimer les tremblements"
    },
    "pt": {
      "name": "Jogo da Mão Firme (Fio Elétrico Online)",
      "tagline": "Guie o cursor por corredores estreitos sem tocar as bordas para eliminar tremores"
    }
  },
  "/drills/fps/recoil-control": {
    "ja": {
      "name": "リコイル練習 (スプレー制御)",
      "tagline": "武器の反動パターンとマウス引き下げ速度を同期させるリコイル制御トレーニング：長押しフルオート時の集弾率を極めるFPSエイムトレーナー"
    },
    "ko": {
      "name": "반동 제어 연습 (스프레이 조절)",
      "tagline": "총기별 반동 패턴과 수직 마우스 드래그 속도를 정밀하게 제어하는 리코일 컨트롤 트레이너: 연사 시 탄퍼짐 억제 및 집탄율 극대화"
    },
    "de": {
      "name": "Recoil Control lernen",
      "tagline": "Kostenloses Recoil Control Training im Browser. Meistere Spray Patterns, vertikale Mauskompensation und Trefferdichte für CS2, Valorant und Apex Legends."
    },
    "es": {
      "name": "Control de Retroceso FPS",
      "tagline": "Entrena el control de retroceso y patrones de spray en tu navegador. Domina la compensación vertical y ráfagas para CS2 y Valorant gratis."
    },
    "fr": {
      "name": "Contrôle du Recul FPS",
      "tagline": "Entraînez le contrôle du recul et les spray patterns sur votre navigateur. Maîtrisez la compensation verticale et les tirs groupés sur CS2 et Valorant."
    },
    "pt": {
      "name": "Treino de Controle de Recoil",
      "tagline": "Treine controle de recoil e padrões de spray no navegador. Domine a compensação vertical e transferências de tiro para CS2 e Valorant gratuitamente."
    }
  },
  "/drills/fps/strafe-tracking": {
    "ja": {
      "name": "追いエイム練習 (Strafe Tracking Aim Trainer)",
      "tagline": "不規則な左右ストレイフと切り返しに吸い付く無料ブラウザ追いエイム・トラッキング練習ツール"
    },
    "ko": {
      "name": "에임 트래킹 연습 (Strafe Tracking Aim Trainer)",
      "tagline": "불규칙한 좌우 무빙과 방향 전환을 정확하게 추적하는 무료 브라우저 에임 트래킹 훈련 도구"
    },
    "de": {
      "name": "Strafe Tracking Übung",
      "tagline": "Kostenlose Strafe-Tracking-Übung im Browser. Trainiere reaktives Zielen auf AD-Strafes, Smooth Pursuit und schnelle Richtungswechsel für Apex und CS2."
    },
    "es": {
      "name": "Strafe Tracking de Puntería",
      "tagline": "Entrena strafe tracking reactivo y lectura de cambios de dirección en tu navegador. Domina el seguimiento de blancos para Apex y Overwatch 2 gratis."
    },
    "fr": {
      "name": "Strafe Tracking FPS",
      "tagline": "Entraînez le strafe tracking réactif et la lecture des changements de direction. Maîtrisez le suivi de cibles pour Apex Legends et Overwatch 2."
    },
    "pt": {
      "name": "Treino de Strafe Tracking",
      "tagline": "Treine strafe tracking reativo e mudanças de direção no navegador. Domine o rastreamento de alvos velozes para Apex Legends e Overwatch 2 grátis."
    }
  },
  "/drills/memory/working-memory/n-back": {
    "ja": {
      "name": "nバック課題 (デュアルnバック)",
      "tagline": "ワーキングメモリ・作業記憶の連続情報更新と実行機能を鍛える無料ブラウザ認知トレーニング"
    },
    "ko": {
      "name": "N-Back 게임 및 연습 사이트 (N백 작업기억 훈련)",
      "tagline": "연속적인 정보 갱신과 작업기억 용량을 측정하고 유동성 지능을 훈련하는 무료 브라우저 도구"
    },
    "de": {
      "name": "N-Back Test Online (Arbeitsgedächtnis-Training)",
      "tagline": "Kostenloser N-Back Test zur Messung und Steigerung der kontinuierlichen Arbeitsgedächtnis-Kapazität"
    },
    "es": {
      "name": "Test N-Back Online (Tarea N-Back Memoria de Trabajo)",
      "tagline": "Entrena la actualización continua de la memoria de trabajo y el control ejecutivo gratis en el navegador"
    },
    "pt": {
      "name": "Teste N-Back Online (Treino de Memória Operacional)",
      "tagline": "Treine a atualização contínua da memória operacional e a flexibilidade cognitiva online grátis"
    },
    "fr": {
      "name": "Test N-Back en Ligne",
      "tagline": "Test N-back en ligne gratuit: Entrainez votre memoire de travail et la mise a jour continue de l information a 2-back et 3-back sans inscription."
    }
  },
  "/drills/memory/spatial-memory/grid-memorization": {
    "ja": {
      "name": "瞬間記憶テスト (Visual Memory Test)",
      "tagline": "4×4〜5×5の拡大グリッドパターンを記憶し視覚キャッシュ容量を鍛える無料ブラウザ瞬間記憶テスト"
    },
    "ko": {
      "name": "순간 기억 테스트 (시각 기억력 검사)",
      "tagline": "확장되는 격자 매트릭스 패턴을 순간 기억하여 시각 작업기억 용량을 훈련하는 무료 브라우저 도구"
    },
    "de": {
      "name": "Visueller Gedächtnistest Online (Memory Matrix)",
      "tagline": "Visuelles Arbeitsgedächtnis und räumliches Mustergedächtnis auf Matrixgittern online trainieren"
    },
    "es": {
      "name": "Test de Memoria Visual Online (Juego de Memoria en Cuadrícula)",
      "tagline": "Entrena la memoria de trabajo visoespacial y la retención de patrones matriciales gratis"
    },
    "pt": {
      "name": "Teste de Memória Visual Online (Treino de Memória em Grade)",
      "tagline": "Treine a memória operacional visoespacial e retenção de padrões em matrizes online grátis"
    },
    "fr": {
      "name": "Test de Mémoire Visuelle",
      "tagline": "Test de memoire visuelle en ligne gratuit: Memorisez les motifs de grille en 1,5s et developpez votre empan spatial et chunking visuel sans inscription."
    }
  },
  "/drills/memory/short-term-memory/digit-span": {
    "ja": {
      "name": "数唱課題・数唱テスト (Digit Span)",
      "tagline": "ランダムな数字の提示シーケンスを記憶し音韻ループ容量と短期記憶スパンを測定・鍛える無料ツール"
    },
    "ko": {
      "name": "숫자 기억력 테스트 (디지트 스팬)",
      "tagline": "점진적으로 길어지는 숫자 배열을 기억하고 입력하여 음운 루프와 작업기억 용량을 측정하는 무료 도구"
    },
    "de": {
      "name": "Zahlenspannen-Test Online (Digit Span)",
      "tagline": "Zahlenfolgen einprägen und abrufen: Phonologische Schleife und Kurzzeitgedächtnis-Kapazität online testen"
    },
    "es": {
      "name": "Test de Dígitos Online (Digit Span)",
      "tagline": "Memoriza secuencias numéricas crecientes y mide la capacidad de retención y bucle fonológico gratis"
    },
    "pt": {
      "name": "Teste de Dígitos Online (Span de Dígitos)",
      "tagline": "Treine a retenção de sequências numéricas e avalie o span de memória de curto prazo e alça fonológica online"
    },
    "fr": {
      "name": "Test d Empan de Chiffres",
      "tagline": "Test d empan de chiffres en ligne gratuit: Retenez des suites de nombres croissantes et evaluez votre boucle phonologique sans telechargement ni inscription."
    }
  },
  "/drills/memory/short-term-memory/word-recall": {
    "ja": {
      "name": "単語記憶テスト・単語再生テスト (Verbal Memory)",
      "tagline": "提示された単語リストを記憶し自由再生で入力：言語性短期記憶と意味的処理能力を鍛える無料認知テスト"
    },
    "ko": {
      "name": "단어 기억력 테스트 (언어 기억 회상)",
      "tagline": "제시된 단어 목록을 기억하고 자유 회상으로 입력하여 언어성 단기 기억력과 작업기억을 측정하는 무료 도구"
    },
    "de": {
      "name": "Verbaler Gedächtnistest Online (Wortliste & Freie Wiedergabe)",
      "tagline": "Wortlisten einprägen und frei abrufen: Verbales Kurzzeitgedächtnis und semantische Enkodierung online testen"
    },
    "es": {
      "name": "Test de Memoria Verbal Online (Recuerdo Libre de Palabras)",
      "tagline": "Memoriza listas de palabras y evalúa el recuerdo libre inmediato y la memoria verbal a corto plazo gratis"
    },
    "pt": {
      "name": "Teste de Memória Verbal Online (Evocação Livre de Palavras)",
      "tagline": "Treine a evocação livre de palavras e avalie a capacidade de memória verbal de curto prazo online grátis"
    },
    "fr": {
      "name": "Test de Mémoire Verbale",
      "tagline": "Test de memoire verbale en ligne gratuit: Retenez des listes de mots, maitrisez l effet de position serielle et entrainez votre memoire de travail sans compte."
    }
  },
  "/drills/memory/spatial-memory/object-location": {
    "ja": {
      "name": "空間記憶テスト (物体位置記憶テスト)",
      "tagline": "拡大グリッド上の物体配置を記憶し目標座標を特定：空間位置記憶と視覚特徴結合能を鍛える無料認知テスト"
    },
    "ko": {
      "name": "공간 기억력 테스트 (물체 위치 기억 검사)",
      "tagline": "확장되는 격자 매트릭스 위 사물 위치를 순간 기억하고 목표 좌표를 찾는 공간 기억력 및 시각 결합 훈련"
    },
    "de": {
      "name": "Räumliches Gedächtnistest (Objektposition-Gedächtnis)",
      "tagline": "Objektpositionen auf expandierenden Rastern einprägen und abrufen: Visuell-räumliche Merkfähigkeit online testen"
    },
    "es": {
      "name": "Test de Memoria Espacial (Localización de Objetos)",
      "tagline": "Memoriza la ubicación de objetos en cuadrículas expansivas y entrena la retención visoespacial gratis"
    },
    "pt": {
      "name": "Teste de Memória Espacial (Localização de Objetos)",
      "tagline": "Memorize a localização de objetos em matrizes expansivas e treine a retenção visoespacial online grátis"
    },
    "fr": {
      "name": "Test de Mémoire Spatiale",
      "tagline": "Test de memoire spatiale en ligne gratuit: Memorisez la position des objets sur grille en 1,5s et retrouvez les coordonnees cibles sans inscription."
    }
  },
  "/drills/memory/spatial-memory/path-tracing": {
    "ja": {
      "name": "順番記憶テスト (コルシブロック・パストレーシング)",
      "tagline": "光るタイルの移動軌跡を記憶し正確な順番でなぞる：空間系列記憶とコルシブロック課題を鍛える無料認知テスト"
    },
    "ko": {
      "name": "순서 기억 테스트 (패스 트레이싱)",
      "tagline": "점등되는 타일의 이동 경로를 기억하고 순서대로 재현하는 공간 순서 기억 및 코시 블록 훈련"
    },
    "de": {
      "name": "Corsi-Block-Test (Sequenzgedächtnis Online)",
      "tagline": "Pfadsequenzen einprägen und exakt nachzeichnen: Räumliches Sequenzgedächtnis und Corsi-Block-Spanne online testen"
    },
    "es": {
      "name": "Test de Memoria Secuencial (Bloques de Corsi)",
      "tagline": "Memoriza secuencias de rutas animadas y reprodúcelas en orden: Evalúa la memoria de trabajo visoespacial gratis"
    },
    "pt": {
      "name": "Teste de Memória Sequencial (Blocos de Corsi)",
      "tagline": "Memorize trajetórias em grade e reproduza na ordem exata: Avalie o span de memória sequencial espacial online grátis"
    },
    "fr": {
      "name": "Test des Blocs de Corsi",
      "tagline": "Test des blocs de corsi en ligne gratuit: Memorisez les trajectoires animees sur grille et reproduisez les sequences dans l ordre exact sans inscription."
    }
  },
  "/drills/fps/vertical-air-track": {
    "ja": {
      "name": "垂直 エイム 練習 (縦エイム・空中トラッキング)",
      "tagline": "重力に従って放物線を描く空中ターゲットを追従：ApexやOverwatchの縦エイムと滞空追従を鍛えるFPSエイム練習"
    },
    "ko": {
      "name": "수직 에임 연습 (공중 타겟 트래킹)",
      "tagline": "중력 가속도로 낙하하는 공중 타겟을 부드럽게 추적: 에이펙스와 오버워치 수직 트래킹 에임 연습"
    },
    "de": {
      "name": "Vertikales Aim Training",
      "tagline": "Kostenloser Vertical Aim Trainer: Trainiere Y-Achsen-Mauskontrolle, Parabel-Flugkurven und Luftziel-Tracking für Apex Legends und Overwatch 2."
    },
    "es": {
      "name": "Puntería Vertical FPS",
      "tagline": "Entrena puntería vertical y rastreo aéreo en el navegador. Domina el control del eje Y y trayectorias parabólicas en Apex Legends y Overwatch 2 gratis."
    },
    "fr": {
      "name": "Visée Verticale FPS",
      "tagline": "Entraînez la visée verticale et le suivi aérien. Maîtrisez l"
    },
    "pt": {
      "name": "Treino de Mira Vertical",
      "tagline": "Treine mira vertical e rastreamento aéreo no navegador. Domine o controle no eixo Y e trajetórias parabólicas no Apex Legends e Overwatch 2 de graça."
    }
  },
  "/drills/fps/target-switching-swarm": {
    "ja": {
      "name": "ターゲット スイッチング エイム練習",
      "tagline": "動的スワーム群を連続フリックで高速撃破：複数敵戦やスプレーツランスファーを鍛えるFPSエイム練習"
    },
    "ko": {
      "name": "타겟 스위칭 에임 연습",
      "tagline": "동적으로 생성되는 다중 타겟을 딜레이 없이 신속하게 연속 격추하는 FPS 타겟 전환 에임 트레이너"
    },
    "de": {
      "name": "Target Switching Aim Trainer",
      "tagline": "Kostenloses Target-Switching-Training im Browser: Trainiere schnelle Zielwechsel, Spray Transfers und verzögerungsfreie Flicks für CS2 und Valorant."
    },
    "es": {
      "name": "Target Switching FPS",
      "tagline": "Entrena target switching y cambio rápido de blancos en el navegador. Elimina la duda tras cada baja y domina spray transfers en Valorant y CS2 gratis."
    },
    "fr": {
      "name": "Target Switching FPS",
      "tagline": "Entraînez le target switching et le changement de cible. Éliminez l"
    },
    "pt": {
      "name": "Target Switching FPS",
      "tagline": "Treine target switching e troca rápida de alvos no navegador. Elimine o atraso de confirmação e domine spray transfers no Valorant e CS2 gratuitamente."
    }
  },
  "/drills/fps/target-acquisition": {
    "ja": {
      "name": "ターゲット捕捉 エイム練習",
      "tagline": "視野内の高優先度ターゲットを瞬時に識別し初弾を正確に叩き込む：索敵認識とフリック精度を高めるFPSエイム練習"
    },
    "ko": {
      "name": "타겟 획득 에임 연습",
      "tagline": "시야 내 위협 대상을 즉각 식별하고 초탄을 정밀하게 타격하는 FPS 타겟 포착 및 초탄 에임 트레이너"
    },
    "de": {
      "name": "Zielerfassung FPS Training",
      "tagline": "Kostenloses Zielerfassungs-Training im Browser: Trainiere visuelle Zielerkennung, Kontrastunterscheidung und präzise erste Schüsse für CS2 und Valorant."
    },
    "es": {
      "name": "Adquisición de Objetivos FPS",
      "tagline": "Entrena adquisición de objetivos, detección visual y precisión del primer tiro en el navegador. Domina el primer disparo para CS2 y Valorant gratis."
    },
    "fr": {
      "name": "Acquisition de Cibles FPS",
      "tagline": "Entraînez l"
    },
    "pt": {
      "name": "Treino de Aquisição de Alvos",
      "tagline": "Treine aquisição de alvos, velocidade de detecção visual e precisão do primeiro tiro no navegador. Domine o primeiro disparo para CS2 e Valorant grátis."
    }
  },
  "/drills/fps/target-prioritization": {
    "ja": {
      "name": "ターゲット優先度 エイム練習",
      "tagline": "高脅威ターゲットを瞬時に見極め味方への誤射を抑制：脅威評価と意思決定スピードを高めるFPSエイム練習"
    },
    "ko": {
      "name": "타겟 우선순위 에임 연습",
      "tagline": "위협 수준이 높은 적을 즉각 선별하고 아군 오사를 억제하는 FPS 위협 평가 및 우선순위 판단 에임 트레이너"
    },
    "de": {
      "name": "Zielpriorisierung FPS Training",
      "tagline": "Kostenloses Zielpriorisierungs-Training im Browser: Trainiere Bedrohungseinschätzung, Trigger-Disziplin und Schusshemmung für CS2 und Valorant."
    },
    "es": {
      "name": "Priorización de Objetivos FPS",
      "tagline": "Entrena priorización de objetivos, evaluación de amenazas y disciplina de gatillo en el navegador. Domina la toma de decisiones para Valorant y CS2 gratis."
    },
    "fr": {
      "name": "Priorisation des Cibles FPS",
      "tagline": "Entraînez la priorisation des cibles, l"
    },
    "pt": {
      "name": "Treino de Priorização de Alvos",
      "tagline": "Treine priorização de alvos, avaliação de ameaças e disciplina de gatilho no navegador. Domine a mira decisiva para Valorant e CS2 gratuitamente."
    }
  },
  "/drills/fps/flick-shot-training": {
    "ja": {
      "name": "フリック エイム 練習",
      "tagline": "出現するターゲットへ瞬時に照準を飛ばす弾道フリックエイム練習：初弾精度と終末制動力を鍛えるFPSエイムトレーナー"
    },
    "ko": {
      "name": "플릭 에임 연습",
      "tagline": "화면 곳곳에 무작위로 생성되는 목표를 번개처럼 정확하게 타격하는 FPS 플릭샷 및 초탄 정확도 에임 트레이너"
    },
    "de": {
      "name": "Flick Shot Training",
      "tagline": "Kostenloses Flick Shot Training im Browser. Trainiere Snap Aiming, Mausbeschleunigung und Reibungsbremsung für präzise Headshots in CS2 und Valorant."
    },
    "es": {
      "name": "Entrenamiento de Flick Shot",
      "tagline": "Entrena flick shot y puntería rápida en el navegador. Perfecciona la aceleración balística y el frenado de ratón para dar headshots en CS2 y Valorant."
    },
    "fr": {
      "name": "Entraînement Flick Shot",
      "tagline": "Entraînez le flick shot et le tir réflexe sur PC. Maîtrisez la propulsion balistique et le freinage de souris pour réussir vos tirs sur CS2 et Valorant."
    },
    "pt": {
      "name": "Treino de Flick Shot",
      "tagline": "Treine flick shot e mira rápida no navegador. Aperfeiçoe a aceleração balística e a frenagem de mouse para acertar tiros na cabeça no CS2 e Valorant."
    }
  },
  "/drills/fps/micro-correction-precision": {
    "ja": {
      "name": "マイクロフリック 練習",
      "tagline": "一次フリック直後の微小な位置ズレを瞬時に修正：精密な終末減速とヘッドショット精度を高めるFPSエイム練習"
    },
    "ko": {
      "name": "마이크로 플릭 연습",
      "tagline": "초기 플릭 후 목표 중심의 미세 오차를 번개처럼 보정하는 FPS 에임 미세조정 및 헤드샷 정밀도 트레이너"
    },
    "de": {
      "name": "Mikrokorrektur Aiming",
      "tagline": "Mikrokorrektur-Aiming im Browser: Trainiere Feinjustierung nach dem ersten Flick, Bremskontrolle und Headshot-Präzision für CS2 und Valorant."
    },
    "es": {
      "name": "Micro Corrección de Puntería",
      "tagline": "Entrena la micro corrección de puntería y desaceleración en tu navegador. Domina micro ajustes y precisión de headshots en Valorant y CS2 gratis."
    },
    "fr": {
      "name": "Micro-Correction de Visée",
      "tagline": "Entraînez la micro-correction de visée et la décélération terminale. Maîtrisez les micro-ajustements et la précision headshot sur Valorant et CS2."
    },
    "pt": {
      "name": "Treino de Micro Correção de Mira",
      "tagline": "Treine micro correção de mira e desaceleração terminal no navegador. Domine micro-ajustes finos e precisão de headshots para Valorant e CS2 gratuitamente."
    }
  },
  "/drills/fps/180-degree-awareness": {
    "ja": {
      "name": "180度 振り向き 練習",
      "tagline": "画面端や背後の敵を瞬時に捉える180度振り向きエイム練習：周辺視野認識と大振りフリックの初弾精度を高めるFPSエイムトレーナー"
    },
    "ko": {
      "name": "180도 플릭 에임 연습",
      "tagline": "화면 가장자리와 후방의 적을 번개처럼 포착하는 180도 화면전환 플릭 트레이너: 주변시야 반응과 급격한 시야 회전 정확도 향상"
    },
    "de": {
      "name": "180 Grad Aiming",
      "tagline": "Kostenloses 180-Grad-Aim-Training im Browser: Trainiere schnelle 180°-Drehungen, peripheres Sehen und Flashbang-Reaktionen für CS2, Valorant und Apex."
    },
    "es": {
      "name": "Entrenamiento de Giro 180°",
      "tagline": "Entrena giros rápidos de 180 grados, detección periférica y reacción ante flancos en el navegador. Mejora tu puntería y control de alfombrilla en FPS."
    },
    "fr": {
      "name": "Entraînement Demi-Tour 180°",
      "tagline": "Entraînez les demi-tours à 180 degrés, la vision périphérique et la réaction aux attaques de dos. Perfectionnez vos flicks et votre vitesse sur CS2."
    },
    "pt": {
      "name": "Treino de Giro 180°",
      "tagline": "Treine giros rápidos de 180 graus, reflexo contra flancos e visão periférica no navegador. Melhore sua agilidade de braço e mira no CS2 e Valorant."
    }
  },
  "/drills/fps/instant-response": {
    "ja": {
      "name": "FPS 反応速度 テスト",
      "tagline": "視覚刺激に対する反射神経とクリック反応速度をミリ秒単位で測定：置きエイムと飛び出し反応を高めるFPS反射神経トレーナー"
    },
    "ko": {
      "name": "FPS 반응속도 테스트",
      "tagline": "시각 자극에 대한 클릭 반응 시간(ms)을 정밀 측정하고 페인트 사격을 억제하는 FPS 에임 반사신경 및 격발 트레이너"
    },
    "de": {
      "name": "FPS Reaktionszeit Test",
      "tagline": "Kostenloser FPS-Reaktionszeit-Test im Browser: Miss visuelle Reaktionszeit, Klicklatenz und Trigger-Reflexe in Millisekunden für CS2 und Valorant."
    },
    "es": {
      "name": "Tiempo de Reacción FPS",
      "tagline": "Mide tu tiempo de reacción en shooters en milisegundos. Perfecciona el reflejo de clic y la retención de ángulos para ganar duelos en CS2 y Valorant."
    },
    "fr": {
      "name": "Temps de Réaction FPS",
      "tagline": "Mesurez votre temps de réaction FPS en millisecondes. Développez la vitesse de clic et la tenue de ligne pour remporter vos duels sur CS2 et Valorant."
    },
    "pt": {
      "name": "Tempo de Reação FPS",
      "tagline": "Teste seu tempo de reação no FPS em milissegundos. Aperfeiçoe os reflexos de clique e segure ângulos com precisão para vencer duelos no CS2 e Valorant."
    }
  },
  "/drills/fps/anti-strafe-jitter-duel": {
    "ja": {
      "name": "レレレ撃ち 練習 (ジッタートラッキング)",
      "tagline": "高速ADAD移動（レレレ撃ち）に追従するリアクティブトラッキング練習：近距離での切り返し反応と照準ブレを抑えるFPSエイムトレーナー"
    },
    "ko": {
      "name": "무빙 트래킹 에임 연습 (ADAD 지터)",
      "tagline": "예측 불가능한 고빈도 ADAD 좌우 무빙을 놓치지 않고 추적하는 리액티브 트래킹 트레이너: 근거리 교전 트래킹 정확도 향상"
    },
    "de": {
      "name": "Anti-Strafe Aim Trainer",
      "tagline": "Kostenloser Anti-Strafe Trainer im Browser: Meistere reaktives Tracking und unberechenbare ADAD-Strafes für Apex Legends, Overwatch 2 und Warzone."
    },
    "es": {
      "name": "Tracking Reactivo",
      "tagline": "Entrena tracking reactivo contra strafes erráticos ADAD en el navegador. Domina duelos a corta distancia y microcorrecciones en Apex Legends y Overwatch 2."
    },
    "fr": {
      "name": "Tracking Réactif",
      "tagline": "Entraînez le tracking réactif face aux strafes rapides ADAD sur PC. Maîtrisez le suivi à courte distance et les micro-ajustements sur Apex et Overwatch 2."
    },
    "pt": {
      "name": "Treino de Anti-Strafe",
      "tagline": "Treine tracking reativo contra strafes rápidos ADAD no navegador. Domine trocas de tiro a curta distância e microajustes no Apex Legends e Overwatch 2."
    }
  },
  "/drills/fps/anti-zigzag-movement-trainer": {
    "ja": {
      "name": "ジグザグ移動 練習 (スライディング追従)",
      "tagline": "不規則なジグザグ移動・スライディングキャンセルに照準を吸い付かせるリアクティブトラッキング練習：切り返し時のオーバーシュートを防ぐFPSエイムトレーナー"
    },
    "ko": {
      "name": "지그재그 무빙 트래킹 (슬라이딩 추적)",
      "tagline": "급격한 지그재그 회피 기동과 슬라이딩 캔슬을 침착하게 추적하는 리액티브 에임 트레이너: 방향 전환 시 오버에이밍 억제 및 트래킹 유지력 향상"
    },
    "de": {
      "name": "Anti-Zigzag Aim Trainer",
      "tagline": "Kostenloser Anti-Zigzag-Trainer im Browser: Meistere reaktives Tracking gegen Zickzack-Ausweichbewegungen und Slide-Cancels für Apex Legends und Warzone."
    },
    "es": {
      "name": "Tracking Zigzag",
      "tagline": "Entrena tracking contra zigzag y slide cancels en el navegador. Elimina el overshoot de tu mira y domina objetivos evasivos en Apex Legends y Warzone."
    },
    "fr": {
      "name": "Tracking Zigzag",
      "tagline": "Entraînez le tracking contre les zigzags et slide cancels. Éliminez le dépassement du viseur et touchez les cibles évasives sur Apex et Warzone."
    },
    "pt": {
      "name": "Tracking Zigue-Zague",
      "tagline": "Treine tracking contra zigue-zague e slide cancels no navegador. Elimine o overshoot da mira e domine alvos com movimentação evasiva no Apex e Warzone."
    }
  },
  "/drills/fps/pro-smooth-pursuit": {
    "ja": {
      "name": "スムーズ トラッキング 練習 (滑走性眼球運動)",
      "tagline": "リサジュー曲線の不規則な軌道を滑らかに追従するスムースパシュート練習：手首の力みやブレを抑え吸い付くようなエイムを鍛えるFPSドリル"
    },
    "ko": {
      "name": "스무스 트래킹 에임 연습 (활창 추적)",
      "tagline": "리사주 곡선 궤적을 부드럽게 추종하는 스무스 퍼슈트 에임 훈련: 불필요한 떨림을 억제하고 목표물에 조준선을 밀착시키는 고정밀 트래킹 트레이너"
    },
    "de": {
      "name": "Smooth Pursuit Aim Trainer",
      "tagline": "Kostenloser Smooth Pursuit Aim Trainer. Trainiere kontinuierliches Kurven-Tracking und flüssige Mausführung für High-TTK-Shooter wie Apex und Overwatch 2."
    },
    "es": {
      "name": "Tracking Suave de Puntería",
      "tagline": "Entrena el tracking suave y seguimiento en curva en tu navegador. Domina la puntería continua y fluida para Apex Legends y Overwatch 2 gratis."
    },
    "fr": {
      "name": "Tracking Fluide FPS",
      "tagline": "Entraînez le tracking fluide et le suivi de trajectoire en courbe. Maîtrisez la visée continue sans tremblements pour Apex et Overwatch 2."
    },
    "pt": {
      "name": "Treino de Tracking Suave",
      "tagline": "Treine tracking suave e rastreamento em curva no navegador. Domine a mira contínua sem tremores para Apex Legends e Overwatch 2 gratuitamente."
    }
  },
  "/drills/fps/flow-state": {
    "ja": {
      "name": "フロー状態 エイム 練習 (集中力持続)",
      "tagline": "無心で目標を追い続ける心理的フロー状態（ゾーン）を誘導：余計な力みや雑念を排除し滑らかな追従リズムを極めるFPS集中力トレーナー"
    },
    "ko": {
      "name": "플로우 상태 에임 연습 (몰입 훈련)",
      "tagline": "잡념과 불필요한 긴장을 제거하고 에임 몰입 상태(Zone)를 유도하는 리듬 트레이너: 연속적인 표적 전환과 부드러운 트래킹 지속력 극대화"
    },
    "de": {
      "name": "Flow State Aim Trainer",
      "tagline": "Kostenloser Flow State Aim Trainer. Trainiere Konzentrationsausdauer, Smooth Pursuit Tracking und erreiche den mentalen Flow-Zustand für FPS-Gaming."
    },
    "es": {
      "name": "Entrenamiento de Foco FPS",
      "tagline": "Entrena el estado de flow y foco para shooters en el navegador. Desarrolla enfoque sostenido y tracking suave para rendir al máximo en CS2 y Valorant."
    },
    "fr": {
      "name": "Entraînement Focus FPS",
      "tagline": "Entraînez la concentration mentale et la visée continue sur PC. Entrez dans la zone pour éliminer les hésitations et réussir vos duels sur CS2 et Valorant."
    },
    "pt": {
      "name": "Treino de Foco FPS",
      "tagline": "Treine o estado de flow e foco para FPS no navegador. Desenvolva atenção sustentada e tracking contínuo para manter a mira calibrada em partidas longas."
    }
  },
  "/drills/visual/reaction-speed/go/no-go": {
    "ja": {
      "name": "Go/No-Goテスト（反応抑制）",
      "tagline": "緑には反応し、赤では踏みとどまる反応抑制トレーニング"
    },
    "ko": {
      "name": "고노고 과제（반응 억제）",
      "tagline": "초록에는 반응하고 빨강에는 멈추는 반응 억제 훈련"
    },
    "de": {
      "name": "Go/No-Go-Test (Impulskontrolle)",
      "tagline": "Bei Grün reagieren und bei Rot den Impuls zurückhalten"
    },
    "es": {
      "name": "Test Go/No-Go (Control inhibitorio)",
      "tagline": "Pulsa ante el verde y frena la respuesta ante el rojo"
    },
    "fr": {
      "name": "Test Go/No-Go (Contrôle inhibiteur)",
      "tagline": "Réagissez au vert et retenez-vous face au rouge"
    },
    "pt": {
      "name": "Teste Go/No-Go (Controle inibitório)",
      "tagline": "Responda ao verde e freie o impulso diante do vermelho"
    }
  },
  "/drills/visual/reaction-speed/light-reaction": {
    "ja": {
      "name": "反射神経テスト・反応速度測定",
      "tagline": "光刺激への視覚反応速度をミリ秒単位で測定"
    },
    "ko": {
      "name": "반응속도 테스트 (시각 반응)",
      "tagline": "빛 신호에 반응하는 시간을 밀리초 단위로 측정"
    },
    "de": {
      "name": "Reaktionstest online (visuelle Reaktionszeit)",
      "tagline": "Reagiere auf ein Lichtsignal und miss deine Zeit in Millisekunden"
    },
    "es": {
      "name": "Test de reflejos online (reacción visual)",
      "tagline": "Responde a una señal luminosa y mide tu tiempo en milisegundos"
    },
    "fr": {
      "name": "Test de réflexes en ligne (réaction visuelle)",
      "tagline": "Réagissez à un signal lumineux et mesurez votre temps en millisecondes"
    },
    "pt": {
      "name": "Teste de reflexo online (reação visual)",
      "tagline": "Reaja ao sinal luminoso e meça seu tempo em milissegundos"
    }
  },
  "/drills/visual-tracking/constant-slow-pursuit": {
    "ja": {
      "name": "眼球運動トレーニング・視線追従",
      "tagline": "リサージュ曲線の標的を目で追い、視線のブレを抑えて動体視力と中心窩の保持力を高める練習"
    },
    "ko": {
      "name": "안구 운동 훈련・시선 추적",
      "tagline": "리사주 곡선을 따라 움직이는 표적을 눈으로 쫓으며 시선 흔들림과 도약을 줄이는 동체시력 훈련"
    },
    "de": {
      "name": "Augenfolgebewegung & Blickverfolgung",
      "tagline": "Folge einem bewegten Ziel auf einer Lissajous-Kurve, halte den Kopf ruhig und übe stabile Blickführung"
    },
    "es": {
      "name": "Seguimiento Visual・Persecución Suave",
      "tagline": "Sigue un objetivo por una curva de Lissajous sin mover la cabeza y mejora la visión dinámica gratis"
    },
    "fr": {
      "name": "Poursuite Visuelle・Suivi Oculaire",
      "tagline": "Suivez une cible sur une courbe de Lissajous sans bouger la tête et améliorez la stabilité du regard"
    },
    "pt": {
      "name": "Perseguição Suave・Rastreamento Visual",
      "tagline": "Acompanhe um alvo na curva de Lissajous sem mover a cabeça e pratique visão dinâmica grátis"
    }
  },
  "/drills/visual-tracking/directional-chaos-pursuit": {
    "ja": {
      "name": "動体視力トレーニング・不規則視線追従",
      "tagline": "方向と速度が予測不能に変わる標的を目で再捕捉し、サッケード回復と視線反応を鍛える練習"
    },
    "ko": {
      "name": "동체시력 훈련・불규칙 시선 추적",
      "tagline": "방향과 속도가 갑자기 바뀌는 표적을 재포착하며 사케드 회복과 돌발 시각 반응을 연습하는 훈련"
    },
    "de": {
      "name": "Dynamisches Sehen・Reaktive Blickverfolgung",
      "tagline": "Verfolge unvorhersehbare Ziele und übe schnelle Refixation bei Richtungswechseln"
    },
    "es": {
      "name": "Seguimiento Ocular Reactivo",
      "tagline": "Recaptura objetivos impredecibles y practica reacción visual y sacadas correctoras"
    },
    "fr": {
      "name": "Poursuite Oculaire Réactive",
      "tagline": "Rattrapez une cible imprévisible et entraînez saccades et réactivité visuelle"
    },
    "pt": {
      "name": "Rastreamento Ocular Reativo",
      "tagline": "Recapture alvos imprevisíveis e pratique reação visual e recuperação sacádica"
    }
  },
  "/drills/visual/tracking-accuracy/moving-target": {
    "ja": {
      "name": "動体視力テスト・移動標的トレーニング",
      "tagline": "動く標的を追い、軌道を予測して迎撃する動体視力トレーニング"
    },
    "ko": {
      "name": "동체시력 테스트・이동 표적 훈련",
      "tagline": "움직이는 표적을 추적하고 궤적을 예측해 맞히는 동체시력 훈련"
    },
    "de": {
      "name": "Zielverfolgung & Auge-Hand-Koordination",
      "tagline": "Bewegte Ziele verfolgen, ihre Bahn antizipieren und im richtigen Moment abfangen"
    },
    "es": {
      "name": "Seguimiento Visual de Objetivos Móviles",
      "tagline": "Sigue objetivos móviles, predice su trayectoria y practica la intercepción"
    },
    "fr": {
      "name": "Poursuite Visuelle de Cibles Mobiles",
      "tagline": "Suivez une cible mobile, anticipez sa trajectoire et interceptez-la"
    },
    "pt": {
      "name": "Rastreamento Visual de Alvos Móveis",
      "tagline": "Acompanhe alvos móveis, preveja sua trajetória e intercepte no momento certo"
    }
  },
  "/drills/visual/tracking-accuracy/multiple-targets": {
    "ja": {
      "name": "複数対象追跡テスト・周辺視野トレーニング",
      "tagline": "複数の動く標的を同時に追い、周辺視野と視覚的注意を練習するMOTトレーニング"
    },
    "ko": {
      "name": "다중 객체 추적 테스트 (주변시 훈련)",
      "tagline": "여러 움직이는 표적을 동시에 따라가며 주변시와 분할 주의력을 연습하는 MOT 훈련"
    },
    "de": {
      "name": "Mehrfach-Objektverfolgung (MOT-Test)",
      "tagline": "Verfolge mehrere bewegte Objekte gleichzeitig und übe geteilte Aufmerksamkeit und peripheres Sehen"
    },
    "es": {
      "name": "Seguimiento de Múltiples Objetos (MOT)",
      "tagline": "Sigue varios objetos móviles a la vez y practica atención dividida y visión periférica"
    },
    "fr": {
      "name": "Suivi d'Objets Multiples (MOT)",
      "tagline": "Suivez plusieurs objets mobiles à la fois et pratiquez attention divisée et vision périphérique"
    },
    "pt": {
      "name": "Rastreamento de Múltiplos Objetos (MOT)",
      "tagline": "Acompanhe vários objetos móveis ao mesmo tempo e pratique atenção dividida e visão periférica"
    }
  },
  "/drills/visual/tracking-accuracy/pursuit-tracker": {
    "ja": {
      "name": "スムースパシュート・視線追従トレーニング",
      "tagline": "動く標的を目とカーソルで追い続け、視線追従とエイムの安定性を練習"
    },
    "ko": {
      "name": "에임 트래킹・시선 추적 훈련",
      "tagline": "움직이는 표적에 시선과 조준점을 유지하며 트래킹 에임을 연습"
    },
    "de": {
      "name": "Glatte Blickfolge・Zielverfolgung",
      "tagline": "Ein bewegtes Ziel mit Augen und Cursor verfolgen und visumotorische Präzision trainieren"
    },
    "es": {
      "name": "Seguimiento Ocular・Persecución Visual",
      "tagline": "Mantén la mirada y el cursor sobre un objetivo móvil para entrenar el seguimiento visual"
    },
    "fr": {
      "name": "Poursuite Oculaire・Suivi Visuel",
      "tagline": "Gardez le regard et le curseur sur une cible mobile pour entraîner le suivi visuel"
    },
    "pt": {
      "name": "Perseguição Ocular・Rastreamento Visual",
      "tagline": "Mantenha o olhar e o cursor em um alvo móvel para praticar o rastreamento visual"
    }
  },
  "/drills/visual/visual-recognition/entropic-grid": {
    "ja": {
      "name": "視覚探索トレーニング・選択的注意テスト",
      "tagline": "変化するグリッドから指定コードを探し、視覚的注意と走査速度を鍛える"
    },
    "ko": {
      "name": "시각 탐색 훈련·선택적 주의력 테스트",
      "tagline": "변화하는 그리드에서 목표 코드를 찾으며 시각적 주의력과 스캐닝을 연습"
    },
    "de": {
      "name": "Visuelle Suche und selektive Aufmerksamkeit",
      "tagline": "Finde Zielzeichen im wechselnden Raster und übe visuelles Scannen"
    },
    "es": {
      "name": "Búsqueda Visual y Atención Selectiva",
      "tagline": "Encuentra códigos en una cuadrícula cambiante y practica el escaneo visual"
    },
    "fr": {
      "name": "Recherche Visuelle et Attention Sélective",
      "tagline": "Trouvez des codes dans une grille changeante et pratiquez le balayage visuel"
    },
    "pt": {
      "name": "Busca Visual e Atenção Seletiva",
      "tagline": "Encontre códigos numa matriz em mudança e pratique o escaneamento visual"
    }
  },
  "/drills/visual/visual-recognition/rhythm-anomaly": {
    "ja": {
      "name": "フリッカーテスト・視覚の時間分解能",
      "tagline": "36マスの点滅パルスから位相のズレを見つけ、ちらつきの識別と視覚タイミングを練習"
    },
    "ko": {
      "name": "깜빡임 구별·시각 시간 분해능 훈련",
      "tagline": "36개 맥동 셀에서 위상차를 찾아 시각적 시간 판별과 타이밍을 연습"
    },
    "de": {
      "name": "Flimmerfusion und zeitliche visuelle Diskrimination",
      "tagline": "Erkenne Phasenverschiebungen im pulsierenden 36-Zellen-Raster und übe visuelle Zeitauflösung"
    },
    "es": {
      "name": "Fusión de Parpadeo y Discriminación Temporal",
      "tagline": "Detecta desfases en una matriz pulsante de 36 celdas y practica la resolución temporal visual"
    },
    "fr": {
      "name": "Scintillement et Discrimination Temporelle",
      "tagline": "Détectez les déphasages dans une grille pulsante de 36 cellules et pratiquez la résolution temporelle"
    },
    "pt": {
      "name": "Discriminação Temporal e Ritmo Visual",
      "tagline": "Detecte desfasamentos numa matriz pulsante de 36 células e pratique a resolução temporal visual"
    }
  },
  "/drills/visual/visual-recognition/visual-search": {
    "ja": {
      "name": "文字探しテスト・視覚探索",
      "tagline": "回転した文字の中から標的を見つけ、視覚探索と選択的注意を練習"
    },
    "ko": {
      "name": "글자 찾기 테스트·시각 탐색",
      "tagline": "회전된 문자 속에서 표적을 찾고 시각 탐색과 선택적 주의력을 연습"
    },
    "de": {
      "name": "Visuelle Suche und Aufmerksamkeitstest",
      "tagline": "Finde einen Zielbuchstaben zwischen ähnlichen Ablenkern und trainiere selektive Aufmerksamkeit"
    },
    "es": {
      "name": "Búsqueda Visual y Atención Selectiva",
      "tagline": "Encuentra el objetivo entre distractores y practica la atención selectiva"
    },
    "fr": {
      "name": "Recherche Visuelle et Attention Sélective",
      "tagline": "Repérez la cible parmi les distracteurs et entraînez votre attention sélective"
    },
    "pt": {
      "name": "Busca Visual e Atenção Seletiva",
      "tagline": "Encontre o alvo entre distratores e pratique a atenção seletiva"
    }
  },
  "/drills/visual-tracking/dynamic-evasion-pursuit": {
    "ja": {
      "name": "動体視力・急旋回ターゲット訓練",
      "tagline": "急旋回する標的を再捕捉し、補正サッケードと視線反応を鍛える練習"
    },
    "ko": {
      "name": "동체시력 훈련・급선회 표적 추적",
      "tagline": "급선회하는 표적을 재포착하며 보정 사케드와 시선 반응을 연습하는 훈련"
    },
    "de": {
      "name": "Dynamisches Sehen・Ausweichziel-Verfolgung",
      "tagline": "Verfolge ein ausweichendes Ziel und übe schnelle Refixation bei Richtungswechseln"
    },
    "es": {
      "name": "Seguimiento Ocular Reactivo",
      "tagline": "Recaptura un objetivo móvil y practica reacción visual y sacadas correctoras"
    },
    "fr": {
      "name": "Poursuite Oculaire Réactive",
      "tagline": "Rattrapez une cible mobile et entraînez saccades et réactivité visuelle"
    },
    "pt": {
      "name": "Rastreamento Ocular Reativo",
      "tagline": "Recapture um alvo móvel e pratique reação visual e refixação foveal"
    }
  },
  "/drills/visual-tracking/ghosting-suppress-pursuit": {
    "ja": {
      "name": "モニター残像テスト・視線固定練習",
      "tagline": "動く標的の残像を見ながら中心核への視線固定と動体視力を練習"
    },
    "ko": {
      "name": "모니터 잔상 테스트・시선 고정 훈련",
      "tagline": "움직이는 표적의 잔상을 관찰하며 중심 표적에 시선을 고정하는 시각 훈련"
    },
    "de": {
      "name": "Monitor-Nachzieheffekt testen – Blickstabilität",
      "tagline": "Beobachte Nachzieheffekte und übe foveale Fixation und stabile Blickführung an einem bewegten Ziel"
    },
    "es": {
      "name": "Prueba de Ghosting del Monitor",
      "tagline": "Observa estelas en movimiento y practica fijación foveal y estabilidad de la mirada"
    },
    "fr": {
      "name": "Test de Rémanence Écran",
      "tagline": "Observez les traînées en mouvement et travaillez fixation fovéale et stabilité du regard"
    },
    "pt": {
      "name": "Teste de Ghosting no Monitor",
      "tagline": "Observe rastros em movimento e pratique fixação foveal e estabilidade do olhar"
    }
  },
  "/drills/visual-tracking/infinity-pursuit": {
    "ja": {
      "name": "8の字眼球運動トレーニング",
      "tagline": "8の字の視線追従で正中線を越える動きと両眼協調を練習"
    },
    "ko": {
      "name": "8자 안구 운동・시선 추적 훈련",
      "tagline": "무한대 궤도를 따라가며 정중선 통과와 양안 협응을 연습"
    },
    "de": {
      "name": "Liegende Acht・Blickverfolgung",
      "tagline": "Folge einer liegenden Acht und übe ruhige Augenkoordination über die Mittellinie"
    },
    "es": {
      "name": "Ejercicio Ocular en Ocho",
      "tagline": "Sigue una figura de ocho y practica coordinación binocular y cruce de la línea media"
    },
    "fr": {
      "name": "Exercice Oculaire en Huit",
      "tagline": "Suivez un huit et travaillez coordination binoculaire et franchissement de la ligne médiane"
    },
    "pt": {
      "name": "Exercício Ocular em Oito",
      "tagline": "Siga uma figura 8 e pratique cruzamento da linha média e coordenação binocular"
    }
  },
  "/drills/visual-tracking/momentum-teleport-pursuit": {
    "ja": {
      "name": "瞬間移動標的の視線再捕捉",
      "tagline": "位置が変わった標的を見つけ直し、その動きの追視へ戻る練習"
    },
    "ko": {
      "name": "순간이동 표적 시선 재포착",
      "tagline": "위치가 바뀐 표적을 다시 찾고 움직임 추적으로 돌아가는 연습"
    },
    "de": {
      "name": "Sprungziel・Blickverfolgung",
      "tagline": "Finde ein versetztes Ziel wieder und nimm anschließend seine Bewegung erneut auf"
    },
    "es": {
      "name": "Seguimiento de Blanco Teletransportado",
      "tagline": "Encuentra de nuevo un objetivo desplazado y retoma el seguimiento de su movimiento"
    },
    "fr": {
      "name": "Poursuite de Cible Téléportée",
      "tagline": "Retrouvez une cible déplacée puis reprenez le suivi de son mouvement"
    },
    "pt": {
      "name": "Rastreamento de Alvo Teleportado",
      "tagline": "Encontre novamente um alvo deslocado e retome o acompanhamento do seu movimento"
    }
  },
  "/drills/visual-tracking/peripheral-ping-pursuit": {
    "ja": {
      "name": "周辺視野トレーニング",
      "tagline": "中心を追いながら周辺の光刺激に気づく練習"
    },
    "ko": {
      "name": "주변시 훈련",
      "tagline": "중앙 표적을 따라가며 주변 빛 자극에 반응하는 연습"
    },
    "de": {
      "name": "Peripheres Sehen trainieren",
      "tagline": "Ziel in der Mitte verfolgen und kurze Randreize erkennen"
    },
    "es": {
      "name": "Entrenamiento de Visión Periférica",
      "tagline": "Sigue el objetivo central y detecta señales laterales sin apartar la mirada"
    },
    "fr": {
      "name": "Entraînement Vision Périphérique",
      "tagline": "Suivez la cible centrale et repérez les signaux latéraux sans détourner le regard"
    },
    "pt": {
      "name": "Treino de Visão Periférica",
      "tagline": "Siga o alvo central e responda a sinais laterais sem desviar o olhar"
    }
  },
  "/drills/visual-tracking/predictive-pursuit": {
    "ja": {
      "name": "予測視線トレーニング",
      "tagline": "動く標的を追い、遮蔽後に現れる位置を先読みする練習"
    },
    "ko": {
      "name": "예측 추적 훈련",
      "tagline": "움직이는 표적을 따라가며 가림 뒤 위치를 미리 예상하는 연습"
    },
    "de": {
      "name": "Prädiktive Blickverfolgung",
      "tagline": "Verfolge ein bewegtes Ziel und schätze seine Position nach kurzer Verdeckung"
    },
    "es": {
      "name": "Seguimiento Ocular Predictivo",
      "tagline": "Sigue un objetivo y estima su posición después de una breve oclusión"
    },
    "fr": {
      "name": "Poursuite Oculaire Prédictive",
      "tagline": "Suivez une cible et estimez sa position après un bref masquage"
    },
    "pt": {
      "name": "Rastreamento Visual Preditivo",
      "tagline": "Siga um alvo e estime sua posição depois de uma breve oclusão"
    }
  },
  "/drills/visual-tracking/sine-wave-pursuit": {
    "ja": {
      "name": "サイン波の眼球追従トレーニング",
      "tagline": "水平・垂直の正弦波オシレーション（波形運動）に合わせて周期的眼球追従速度を最適化"
    },
    "ko": {
      "name": "사인파 안구 추적 훈련",
      "tagline": "상하좌우 정현파 진동 궤적에 맞춰 안구의 주기적 가속과 감속 반응을 조화롭게 제어"
    },
    "de": {
      "name": "Sinuswellen-Blickverfolgung",
      "tagline": "Periodische sinusförmige Augenfolgebewegungen zur Optimierung harmonischer Oszillationen"
    },
    "es": {
      "name": "Seguimiento ocular sinusoidal",
      "tagline": "Entrena el seguimiento ocular suave a traves de ondas sinusoidales. Optimiza la ganancia de velocidad y elimina el desfase visual gratis."
    },
    "fr": {
      "name": "Poursuite oculaire sinusoïdale",
      "tagline": "Suivez des trajectoires sinusoidales harmoniques. Ameliorez le gain de vitesse et eliminez le dephasage sensoriel sans inscription."
    },
    "pt": {
      "name": "Rastreamento ocular senoidal",
      "tagline": "Exercite o seguimento ocular ao longo de ondas senoidais. Aprimore o ganho de velocidade e elimine a latencia de fase sem cadastro."
    }
  },
  "/drills/visual-tracking/spatial-shift-pursuit": {
    "ja": {
      "name": "視界ブレ追従トレーニング",
      "tagline": "画面や視野が動く中で標的を追い、再捕捉までの時間と位置ずれを記録"
    },
    "ko": {
      "name": "화면 흔들림 추적 훈련",
      "tagline": "시야가 움직여도 표적을 따라가며 재포착 시간과 위치 오차를 기록"
    },
    "de": {
      "name": "Blickverfolgung bei Sichtfeldwechsel",
      "tagline": "Verfolge ein Ziel trotz verschobenem Sichtfeld und beobachte Wiedererfassung und Positionsabweichung"
    },
    "es": {
      "name": "Seguimiento visual con cambio espacial",
      "tagline": "Sigue un objetivo mientras cambia el campo visual y observa readquisición y error de posición"
    },
    "fr": {
      "name": "Poursuite visuelle avec saut spatial",
      "tagline": "Suivez une cible pendant un changement du champ visuel et observez la réacquisition et l'écart de position"
    },
    "pt": {
      "name": "Rastreamento visual com mudança espacial",
      "tagline": "Siga um alvo enquanto o campo visual muda e observe reaquisição e erro de posição"
    }
  },
  "/drills/visual-tracking/split-screen-tracking": {
    "ja": {
      "name": "画面分割追視トレーニング",
      "tagline": "左右の動く標的を同時に追い、視線アンカーと左右のロストを記録"
    },
    "ko": {
      "name": "화면 분할 추적 훈련",
      "tagline": "좌우의 움직이는 표적을 동시에 따라가며 시선 앵커와 표적 손실을 기록"
    },
    "de": {
      "name": "Geteilte Aufmerksamkeit: Blickverfolgung",
      "tagline": "Verfolge zwei bewegte Ziele in getrennten Bildschirmbereichen und vergleiche die Seiten"
    },
    "es": {
      "name": "Seguimiento visual en pantalla dividida",
      "tagline": "Sigue dos objetivos en zonas separadas y compara el anclaje visual y el error lateral"
    },
    "fr": {
      "name": "Poursuite visuelle sur écran partagé",
      "tagline": "Suivez deux cibles dans des zones séparées et comparez l'ancrage du regard et l'écart latéral"
    },
    "pt": {
      "name": "Rastreamento visual em tela dividida",
      "tagline": "Acompanhe dois alvos em áreas separadas e compare a estabilidade do olhar e o erro por lado"
    }
  },
  "/drills/visual-tracking/staircase-step": {
    "ja": {
      "name": "上下視線追従トレーニング",
      "tagline": "段階的に上下する標的を追い、視線の遅れと標的ロストを確認"
    },
    "ko": {
      "name": "상하 시선 추적 훈련",
      "tagline": "계단식으로 오르내리는 표적을 따라가며 시선 지연과 표적 손실을 확인하는 훈련"
    },
    "de": {
      "name": "Vertikale Blickverfolgung",
      "tagline": "Verfolge ein stufenförmig auf und ab bewegtes Ziel und prüfe Blickverzögerung und Zielverluste"
    },
    "es": {
      "name": "Seguimiento Ocular Vertical",
      "tagline": "Sigue un objetivo que sube y baja y comprueba el retraso de mirada y las pérdidas"
    },
    "fr": {
      "name": "Poursuite Oculaire Verticale",
      "tagline": "Suivez une cible qui monte et descend et mesurez le retard du regard et les pertes"
    },
    "pt": {
      "name": "Rastreamento Ocular Vertical",
      "tagline": "Acompanhe um alvo que sobe e desce e verifique o atraso do olhar e as perdas"
    }
  },
  "/drills/visual-tracking/strobe-prediction-pursuit": {
    "ja": {
      "name": "ストロボ視覚予測トレーニング",
      "tagline": "点滅で隠れる標的の軌道を予測し、再点灯時の視線ズレを確認"
    },
    "ko": {
      "name": "스트로브 시각 예측 훈련",
      "tagline": "점멸로 가려지는 표적의 궤적을 예측하고 재등장 시선 오차를 확인하는 훈련"
    },
    "de": {
      "name": "Stroboskopisches Sehtraining",
      "tagline": "Verfolge ein verdecktes Ziel gedanklich und prüfe den Blickfehler beim Wiedererscheinen"
    },
    "es": {
      "name": "Visión Estroboscópica y Predicción",
      "tagline": "Predice la ruta de un objetivo oculto por destellos y comprueba el error al reaparecer"
    },
    "fr": {
      "name": "Vision Stroboscopique et Prédiction",
      "tagline": "Prévoyez la trajectoire d’une cible masquée et mesurez l’erreur lors de sa réapparition"
    },
    "pt": {
      "name": "Treino de Visão Estroboscópica",
      "tagline": "Preveja a rota de um alvo ocultado por flashes e confira o erro ao retomar o olhar"
    }
  },
  "/drills/visual-tracking/triangular-pursuit": {
    "ja": {
      "name": "三角形視線追従トレーニング",
      "tagline": "三角軌道の標的を追い、角での再捕捉と視線ズレを確認"
    },
    "ko": {
      "name": "삼각형 시선 추적 훈련",
      "tagline": "삼각 궤적 표적을 따라가며 모서리 재포착과 시선 오차를 확인"
    },
    "de": {
      "name": "Dreieckige Blickverfolgung",
      "tagline": "Verfolge ein Ziel auf einer Dreiecksbahn und prüfe Eckpunktfehler und Zielverluste"
    },
    "es": {
      "name": "Seguimiento visual triangular",
      "tagline": "Sigue un objetivo por una ruta triangular y comprueba el error en esquinas y las pérdidas"
    },
    "fr": {
      "name": "Poursuite visuelle triangulaire",
      "tagline": "Suivez une cible sur une route triangulaire et mesurez l erreur aux angles et les pertes"
    },
    "pt": {
      "name": "Rastreamento visual triangular",
      "tagline": "Acompanhe um alvo em uma rota triangular e confira o erro nas quinas e as perdas"
    }
  },
  "/drills/visual-tracking/zig-zag-path-pursuit": {
    "ja": {
      "name": "ジグザグ視線追従トレーニング",
      "tagline": "ジグザグ軌道の標的を追い、折れ点での視線ズレと標的ロストを確認"
    },
    "ko": {
      "name": "지그재그 시선 추적 훈련",
      "tagline": "지그재그 궤적 표적을 따라가며 꺾임 지점의 시선 이탈과 표적 손실을 확인"
    },
    "de": {
      "name": "Zickzack-Blickverfolgung",
      "tagline": "Verfolge ein Ziel auf einer Zickzackbahn und prüfe Blickverluste an den Knickpunkten"
    },
    "es": {
      "name": "Seguimiento visual en zigzag",
      "tagline": "Sigue un objetivo en zigzag y comprueba las pérdidas y el error en los giros"
    },
    "fr": {
      "name": "Poursuite visuelle en zigzag",
      "tagline": "Suivez une cible en zigzag et mesurez les pertes et l erreur aux virages"
    },
    "pt": {
      "name": "Rastreamento visual em zigue-zague",
      "tagline": "Acompanhe um alvo em zigue-zague e confira as perdas e o erro nas viradas"
    }
  },
  "/drills/cognitive/attention/concentration-stamina": {
    "ko": {
      "name": "집중력 테스트・지속 주의력 검사",
      "tagline": "무료 온라인 집중력 테스트(CPT 지속수행검사)"
    },
    "ja": {
      "name": "集中力テスト・持続的注意測定",
      "tagline": "無料ブラウザ完結の集中力持続テスト（CPT）。長時間の刺激提示に対するビジランス低下、抑制機能、ルール切り替え耐性を精密測定。ADHD傾向の把握や仕事・勉強前の集中ウォームアップに。"
    },
    "de": {
      "name": "Konzentrationstest",
      "tagline": "Kostenloser Online-Konzentrationstest (CPT): Teste Daueraufmerksamkeit, Impulskontrolle und kognitive Ausdauer bei dynamischen Regelwechseln direkt im Browser"
    },
    "es": {
      "name": "Test de Concentración",
      "tagline": "Test de concentración y atención sostenida online gratis: Mide decaimiento de vigilancia, foco visual continuo y control inhibitorio sin registro"
    },
    "fr": {
      "name": "Test de Concentration",
      "tagline": "Test de concentration et d attention soutenue en ligne gratuit: Évaluez le déclin de vigilance, la stabilité attentionnelle et le contrôle inhibiteur"
    },
    "pt": {
      "name": "Teste de Concentração",
      "tagline": "Teste de concentração e atenção sustentada online grátis: Meça declínio de vigilância, foco contínuo e controle inibitório sob pressão temporal"
    }
  },
  "/drills/cognitive/attention/divided-attention": {
    "ko": {
      "name": "주의분할 테스트・이중과제 훈련",
      "tagline": "무료 브라우저 주의분할(이중과제) 테스트 도구"
    },
    "ja": {
      "name": "注意分割テスト・二重課題トレーニング",
      "tagline": "無料ブラウザ完結の注意分割テスト・デュアルタスク訓練ツール。動くターゲットの視覚追従と数字ストリームの偶数判定を同時に処理し、心理的不応期（PRP）と脳の認知ボトルネック処理能力を精密測定。"
    },
    "de": {
      "name": "Geteilte Aufmerksamkeit Test",
      "tagline": "Kostenloser Online-Test für geteilte Aufmerksamkeit (Dual-Task): Verfolge visuelle Ziele und klassifiziere Zahlenreihen zur Messung kognitiver Engpässe"
    },
    "es": {
      "name": "Test de Atención Dividida",
      "tagline": "Test de atención dividida y doble tarea online gratis: Rastrea objetivos visuales móviles y procesa secuencias numéricas simultáneas sin registro previo"
    },
    "fr": {
      "name": "Test d Attention Divisée",
      "tagline": "Test d attention divisée et double tâche en ligne gratuit: Suivez des cibles visuelles en mouvement tout en classant des flux numériques sans inscription"
    },
    "pt": {
      "name": "Teste de Atenção Dividida",
      "tagline": "Teste de atenção dividida e dupla tarefa online grátis: Monitore alvos visuais em movimento e classifique sequências numéricas simultaneamente sem cadastro"
    }
  },
  "/drills/cognitive/attention/multi-tasking": {
    "ko": {
      "name": "멀티태스킹 테스트・이중 표적 추적 훈련",
      "tagline": "무료 멀티태스킹 테스트"
    },
    "ja": {
      "name": "マルチタスクテスト・二重ターゲット追従",
      "tagline": "無料ブラウザ完結のマルチタスクテスト。対向方向に流れる2つの独立した図形ストリームを両視野で同時に監視し、タスク切り替えコストと大脳半球間の協調処理能力を精密測定。"
    },
    "de": {
      "name": "Multitasking Test",
      "tagline": "Kostenloser Online-Multitasking-Test: Verfolge zwei gegenläufige Symbol-Streams gleichzeitig und messe kognitive Belastung und Reaktionszeit im Browser"
    },
    "es": {
      "name": "Test de Multitarea",
      "tagline": "Test de multitarea y flexibilidad cognitiva online: Rastrea dos flujos visuales opuestos en tiempo real y evalua el coste de alternancia mental sin registro"
    },
    "fr": {
      "name": "Test de Multitâche",
      "tagline": "Test de multitache et flexibilite cognitive en ligne gratuit: Suivez deux flux visuels opposes en simultane et evaluez le cout d alternance sans inscription"
    },
    "pt": {
      "name": "Teste de Multitarefa",
      "tagline": "Teste de multitarefa e flexibilidade cognitiva online gratis: Monitore dois fluxos visuais opostos em tempo real e avalie a alternancia mental sob pressao"
    }
  },
  "/drills/cognitive/processing-speed/reaction-time": {
    "ko": {
      "name": "선택 반응시간 테스트・판단 속도 측정",
      "tagline": "무료 브라우저 선택 반응시간(CRT) 측정 도구"
    },
    "ja": {
      "name": "選択反応時間テスト・判断速度測定",
      "tagline": "無料ブラウザ完結の選択反応時間（CRT）測定ツール。動的に反転する色ルールを瞬時に判別して正しい標的をクリックし、意思決定潜時と前頭葉の認知柔軟性をミリ秒単位で精密診断。"
    },
    "de": {
      "name": "Wahlreaktionszeit Test",
      "tagline": "Kostenloser Wahlreaktionszeit-Test (CRT): Miss deine Entscheidungsgeschwindigkeit, visuelle Diskrimination und kognitive Flexibilitat bei Farbwechseln"
    },
    "es": {
      "name": "Test de Tiempo de Reacción de Elección",
      "tagline": "Test de tiempo de reacción de elección online gratis: Mide tu velocidad de toma de decisiones, discriminación visual y flexibilidad cognitiva sin registro"
    },
    "fr": {
      "name": "Test de Temps de Réaction de Choix",
      "tagline": "Test de temps de réaction de choix en ligne gratuit: Mesurez votre vitesse de décision, discrimination visuelle et flexibilité cognitive sans inscription"
    },
    "pt": {
      "name": "Teste de Tempo de Reação de Escolha",
      "tagline": "Teste de tempo de reação de escolha online grátis: Meça sua velocidade de decisão, discriminação visual e flexibilidade cognitiva sob regras dinâmicas"
    }
  },
  "/drills/cognitive/processing-speed/rsvp-reader": {
    "ko": {
      "name": "속독 연습 RSVP・읽기 속도 테스트",
      "tagline": "무료 온라인 RSVP 속독 연습 및 독서 속도 검사"
    },
    "ja": {
      "name": "速読トレーニング・RSVP読書速度測定",
      "tagline": "無料ブラウザ完結のRSVP速読トレーニングツール。視線跳躍（サッカード）を排除し、単語の最適認識点（ORP）へ高速連続表示することで、最大850WPMの超高速テキスト処理と読解速度を精密測定。"
    },
    "de": {
      "name": "Schnelllesetest RSVP",
      "tagline": "Kostenloser RSVP-Schnelllesetest: Trainiere Wortverarbeitung bis 850 WPM ohne Sakkaden durch serielle optische Textprasentation direkt im Browser"
    },
    "es": {
      "name": "Lector RSVP",
      "tagline": "Lector RSVP y test de lectura rápida online gratis: Elimina saltos sacádicos oculares y entrena tu velocidad léxica y comprensión hasta 850 WPM sin registro"
    },
    "fr": {
      "name": "Lecteur RSVP",
      "tagline": "Lecteur RSVP et test de lecture rapide en ligne gratuit: Éliminez les saccades oculaires et entraînez votre vitesse de traitement lexical jusqu à 850 MPM"
    },
    "pt": {
      "name": "Leitor RSVP",
      "tagline": "Leitor RSVP e teste de leitura dinâmica online grátis: Elimine movimentos sacádicos oculares e treine velocidade de leitura e compreensão até 850 WPM"
    }
  },
  "/drills/cognitive/processing-speed/symbol-matching": {
    "ko": {
      "name": "기호 숫자 매칭 인지속도・SDMT 인지 검사",
      "tagline": "무료 온라인 기호 숫자 매칭 인지 검사(SDMT)"
    },
    "ja": {
      "name": "符号テストSDMT・記号数字置換",
      "tagline": "無料ブラウザ完結の符号テスト（Symbol Digit Modalities Test / SDMT）。記号と数字の対応マトリックスを照合して即座に入力し、情報処理速度、視覚スキャン効率、短期連想記憶を精密測定。"
    },
    "de": {
      "name": "Symbol",
      "tagline": "Kostenloser Symbol Digit Modalities Test (SDMT): Teste deine kognitive Verarbeitungsgeschwindigkeit und visuelle Scanning-Effizienz ohne Registrierung"
    },
    "es": {
      "name": "Test SDMT",
      "tagline": "Test SDMT y emparejamiento de símbolos y dígitos online gratis: Evalúa tu velocidad de procesamiento cognitivo, rastreo visual y memoria de trabajo asociativa"
    },
    "fr": {
      "name": "Test SDMT",
      "tagline": "Test SDMT en ligne gratuit: Évaluez votre vitesse de traitement cognitif, votre balayage visuel et votre mémoire associative de travail sans inscription"
    },
    "pt": {
      "name": "Teste SDMT",
      "tagline": "Teste SDMT e substituição de símbolos e dígitos online grátis: Meça velocidade de processamento cognitivo, rastreamento visual e memória associativa"
    }
  },
  "/drills/reaction-speed/barrier-sequence-pursuit": {
    "ko": {
      "name": "지글 피킹 연습",
      "tagline": "무료 온라인 지글 피킹 및 각 홀딩 에임 훈련"
    },
    "ja": {
      "name": "置きエイム練習",
      "tagline": "無料の置きエイム＆ジグルピーク訓練ツール。遮蔽物からの飛び出しに対する反射速度と、ピーク有利を克服するクロスヘアオフセット技術をブラウザで測定・強化。"
    },
    "de": {
      "name": "Jiggle Peek Trainer",
      "tagline": "Kostenloser Jiggle-Peek-Trainer online"
    },
    "es": {
      "name": "Entrenador de Jiggle Peek",
      "tagline": "Entrenador de jiggle peek y ángulos online gratis"
    },
    "fr": {
      "name": "Entraînement Jiggle Peek",
      "tagline": "Entraînement de jiggle peek et ligne défensive gratuit en ligne"
    },
    "pt": {
      "name": "Treino de Jiggle Peek",
      "tagline": "Treino de jiggle peek e mira de espera online grátis"
    }
  },
  "/drills/reaction-speed/fps-tracking-trainer": {
    "ko": {
      "name": "트래킹 에임 연습",
      "tagline": "무료 온라인 트래킹 에임(따라가기 에임) 연습"
    },
    "ja": {
      "name": "トラッキングエイム練習",
      "tagline": "無料のトラッキングエイム（追いエイム）練習ツール。動く標的への滑らかなマウス追従と視線追従を鍛え、エイムのブレやガタつきをブラウザで解消。"
    },
    "de": {
      "name": "FPS Tracking Trainer",
      "tagline": "Kostenloser FPS-Tracking-Trainer online"
    },
    "es": {
      "name": "Tracking FPS",
      "tagline": "Entrenador de tracking FPS online y gratuito"
    },
    "fr": {
      "name": "Entraînement Tracking FPS",
      "tagline": "Entraîneur de tracking FPS gratuit en ligne"
    },
    "pt": {
      "name": "Tracking FPS",
      "tagline": "Treino de tracking FPS online e gratuito"
    }
  },
  "/drills/reaction-speed/market-doors-pursuit": {
    "ko": {
      "name": "각 지우기 연습",
      "tagline": "무료 각 지우기(파이 썰기) 및 코너 체킹 에임 훈련"
    },
    "ja": {
      "name": "クリアリング練習",
      "tagline": "無料のクリアリング＆コーナーチェック訓練ツール。開口部や死角から出現する標的を瞬時に索敵・迎撃する反応速度と視覚走査能力をブラウザで測定・強化。"
    },
    "de": {
      "name": "Ecken Clearen Trainer",
      "tagline": "Kostenloser Corner-Checking-Trainer online"
    },
    "es": {
      "name": "Limpieza de Esquinas",
      "tagline": "Entrenador de limpieza de esquinas y ángulos online gratis"
    },
    "fr": {
      "name": "Prise d Angle FPS",
      "tagline": "Entraînement de prise d angle et nettoyage de coins gratuit en ligne"
    },
    "pt": {
      "name": "Varredura de Cantos",
      "tagline": "Treino de varredura de cantos e limpeza de ângulos online grátis"
    }
  },
  "/drills/reaction-speed/saccadic-gallery": {
    "ko": {
      "name": "단속성 안구운동 훈련",
      "tagline": "무료 온라인 단속성 안구운동 훈련"
    },
    "ja": {
      "name": "サッケードトレーニング",
      "tagline": "無料のサッケード眼球運動トレーニング。ランダム点滅する標的へ瞬時に視線を飛ばし、跳躍性眼球運動の速度と着弾精度をブラウザで測定・強化。"
    },
    "de": {
      "name": "Sakkaden Sehtraining",
      "tagline": "Kostenloses Sakkadentraining online"
    },
    "es": {
      "name": "Ejercicios Sacádicos Online",
      "tagline": "Ejercicios sacádicos online gratis"
    },
    "fr": {
      "name": "Exercices Saccadiques",
      "tagline": "Exercices saccadiques gratuits en ligne"
    },
    "pt": {
      "name": "Exercícios Sacádicos Online",
      "tagline": "Exercícios sacádicos online grátis"
    }
  }
};

export function getLocalizedDrill(href, locale, fallbackName = '', fallbackDescription = '') {
  if (!href) return { name: fallbackName, tagline: fallbackDescription };
  
  // Normalize href (ensure leading slash, strip locale prefix if present)
  let cleanHref = href;
  const match = cleanHref.match(/^\/(?:ko|ja|de|es|fr|pt)(\/.*)$/);
  if (match) {
    cleanHref = match[1];
  }
  if (!cleanHref.startsWith('/')) {
    cleanHref = '/' + cleanHref;
  }

  const drill = DRILL_LOCALIZATIONS[cleanHref];
  if (drill && drill[locale] && drill[locale].name) {
    return {
      name: drill[locale].name,
      tagline: drill[locale].tagline || fallbackDescription,
    };
  }

  return {
    name: fallbackName,
    tagline: fallbackDescription,
  };
}
