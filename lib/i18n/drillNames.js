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
      "name": "マウス安定性テスト",
      "tagline": "風に押される照準をマウスで中央のリングに保ち続けるゲーム"
    },
    "ko": {
      "name": "마우스 에임 안정성 테스트",
      "tagline": "바람에 밀리는 조준선을 마우스로 중앙 링 안에 유지하는 게임"
    },
    "de": {
      "name": "Maus-Stabilitätstest",
      "tagline": "Halte das Fadenkreuz gegen den Wind im schrumpfenden Ring"
    },
    "es": {
      "name": "Estabilidad del cursor con el ratón",
      "tagline": "Mantén la mira dentro del anillo central mientras el viento la empuja"
    },
    "fr": {
      "name": "Stabilité de la visée à la souris",
      "tagline": "Gardez le viseur dans l'anneau central malgré le vent qui le pousse"
    },
    "pt": {
      "name": "Treino de Firmeza do Mouse",
      "tagline": "Mantenha a mira dentro do anel central enquanto o vento a empurra"
    }
  },
  "/drills/physical/coordination/complex-pattern": {
    "ja": {
      "name": "図形記憶テスト",
      "tagline": "表示された経路を覚えて、マウスで同じ順番になぞるゲーム"
    },
    "ko": {
      "name": "도형 순서 기억 게임",
      "tagline": "화면에 나온 경로를 기억했다가 마우스로 같은 순서로 그리는 게임"
    },
    "de": {
      "name": "Muster merken Spiel",
      "tagline": "Merke dir den gezeigten Pfad und zeichne ihn mit der Maus nach"
    },
    "es": {
      "name": "Juego de memoria visual",
      "tagline": "Memoriza el recorrido que aparece y repítelo con el ratón"
    },
    "fr": {
      "name": "Jeu visuo-spatial",
      "tagline": "Mémorisez le parcours affiché puis retracez-le à la souris"
    },
    "pt": {
      "name": "Memorizar e Traçar Padrões",
      "tagline": "Memorize o caminho mostrado e trace-o de novo com o mouse"
    }
  },
  "/drills/physical/coordination/cross-body-movement": {
    "ja": {
      "name": "目と手の協応テスト",
      "tagline": "細い通路から外れないようにマウスで画面を横切るゲーム"
    },
    "ko": {
      "name": "눈 손 협응력 테스트",
      "tagline": "좁은 통로를 벗어나지 않고 마우스로 화면을 가로지르는 게임"
    },
    "de": {
      "name": "Koordinationstest mit der Maus",
      "tagline": "Führe den Cursor durch einen schmalen Korridor über den Bildschirm"
    },
    "es": {
      "name": "Test de coordinación ojo-mano",
      "tagline": "Cruza la pantalla con el ratón sin salirte del pasillo"
    },
    "fr": {
      "name": "Coordination visuo-motrice à la souris",
      "tagline": "Traversez l'écran à la souris sans sortir du couloir"
    },
    "pt": {
      "name": "Coordenação Mão-Olho",
      "tagline": "Atravesse a tela com o mouse sem sair do corredor"
    }
  },
  "/drills/physical/coordination/dynamic-grid-evasion": {
    "ja": {
      "name": "危険マス回避ゲーム",
      "tagline": "3x3のマスが爆発する前に安全なマスへカーソルを移動"
    },
    "ko": {
      "name": "칸 피하기 게임",
      "tagline": "3x3 격자에서 칸이 터지기 전에 안전한 칸으로 커서 이동"
    },
    "de": {
      "name": "Raster-Ausweichspiel",
      "tagline": "Zieh den Cursor im 3x3-Raster aus Gefahrenfeldern, bevor sie explodieren"
    },
    "es": {
      "name": "Esquivar casillas en la cuadrícula",
      "tagline": "Mueve el cursor a una casilla segura antes de que explote"
    },
    "fr": {
      "name": "Jeu d'évitement sur grille 3x3",
      "tagline": "Placez le curseur sur une case sûre avant l'explosion"
    },
    "pt": {
      "name": "Jogo de Esquiva em Grade",
      "tagline": "Leve o cursor para uma casa segura antes da explosão"
    }
  },
  "/drills/physical/fitness/agility-ladder": {
    "ja": {
      "name": "アジリティラダーゲーム",
      "tagline": "ラダーのマスを決まった順番どおりにリズムよくクリック"
    },
    "ko": {
      "name": "스텝레더 게임",
      "tagline": "사다리 칸을 정해진 순서대로 리듬에 맞춰 클릭하는 게임"
    },
    "de": {
      "name": "Agility-Ladder-Rhythmusspiel",
      "tagline": "Klicke die Leitersprossen im Takt in der richtigen Reihenfolge"
    },
    "es": {
      "name": "Juego de Escalera de Agilidad",
      "tagline": "Haz clic en los peldaños en el orden correcto y con ritmo"
    },
    "fr": {
      "name": "Échelle d'agilité : jeu de rythme",
      "tagline": "Cliquez les barreaux dans le bon ordre et en rythme"
    },
    "pt": {
      "name": "Escada de Agilidade com o Mouse",
      "tagline": "Clique nos degraus na ordem certa e no ritmo"
    }
  },
  "/drills/physical/fitness/jump-sequence": {
    "ja": {
      "name": "ジャンプゲーム",
      "tagline": "長押しでジャンプを溜めて、動く的を空中で狙うゲーム"
    },
    "ko": {
      "name": "점프 타이밍 게임",
      "tagline": "길게 눌러 점프를 충전하고 공중에서 움직이는 표적을 맞히는 게임"
    },
    "de": {
      "name": "Sprung-Zielspiel",
      "tagline": "Lade den Sprung auf und triff bewegte Ziele in der Luft"
    },
    "es": {
      "name": "Juego de Saltar y Apuntar",
      "tagline": "Carga el salto y acierta a objetivos en movimiento en el aire"
    },
    "fr": {
      "name": "Jeu de saut et de trajectoire",
      "tagline": "Chargez le saut et touchez des cibles mobiles en l'air"
    },
    "pt": {
      "name": "Jogo de Salto com o Mouse",
      "tagline": "Carregue o salto e acerte alvos em movimento no ar"
    }
  },
  "/drills/physical/fitness/speed-drill": {
    "ja": {
      "name": "的当てゲーム",
      "tagline": "動きながら小さくなる的を消える前にクリック"
    },
    "ko": {
      "name": "클릭 게임",
      "tagline": "움직이며 작아지는 표적을 사라지기 전에 클릭하는 게임"
    },
    "de": {
      "name": "Schrumpfende Ziele klicken",
      "tagline": "Klicke bewegte Ziele, bevor sie zu klein werden und verschwinden"
    },
    "es": {
      "name": "Clic en objetivos que se encogen",
      "tagline": "Haz clic en objetivos móviles antes de que se encojan y desaparezcan"
    },
    "fr": {
      "name": "Jeu de clic : cibles qui rétrécissent",
      "tagline": "Cliquez les cibles mobiles avant qu'elles ne disparaissent"
    },
    "pt": {
      "name": "Clicar em Alvos que Encolhem",
      "tagline": "Clique nos alvos em movimento antes que encolham e sumam"
    }
  },
  "/drills/physical/reflex-training/drop-catch": {
    "ja": {
      "name": "落下キャッチゲーム",
      "tagline": "落ちてくる緑だけをクリックし、赤いダミーは見送る"
    },
    "ko": {
      "name": "떨어지는 표적 잡기 게임",
      "tagline": "떨어지는 초록 표적만 클릭하고 빨간 미끼는 그냥 보내는 게임"
    },
    "de": {
      "name": "Fallende Ziele fangen",
      "tagline": "Klicke nur grüne fallende Ziele, lass rote Köder durch"
    },
    "es": {
      "name": "Atrapar objetos que caen",
      "tagline": "Haz clic solo en los verdes que caen y deja pasar los rojos"
    },
    "fr": {
      "name": "Attraper les cibles qui tombent",
      "tagline": "Cliquez seulement les cibles vertes, laissez passer les rouges"
    },
    "pt": {
      "name": "Pegar Alvos em Queda",
      "tagline": "Clique só nos alvos verdes e deixe passar as iscas vermelhas"
    }
  },
  "/drills/physical/reflex-training/peripheral-threat-sweeper": {
    "ja": {
      "name": "周辺視野トレーニングゲーム",
      "tagline": "中央を見たまま、周囲から迫る標的をクリックして防ぐ"
    },
    "ko": {
      "name": "주변시야 훈련 게임",
      "tagline": "중앙을 보면서 바깥에서 다가오는 표적을 클릭해 막는 게임"
    },
    "de": {
      "name": "Peripheres Blickfeld Spiel",
      "tagline": "Fang Ziele vom Rand ab, bevor sie die Mitte erreichen"
    },
    "es": {
      "name": "Ejercicios de Visión Periférica",
      "tagline": "Detén los objetivos que llegan desde los bordes antes del centro"
    },
    "fr": {
      "name": "Jeu de vision périphérique",
      "tagline": "Interceptez les cibles venues des bords avant qu'elles n'atteignent le centre"
    },
    "pt": {
      "name": "Defesa Radial",
      "tagline": "Intercepte os alvos que vêm das bordas antes que cheguem ao centro"
    }
  },
  "/drills/physical/reflex-training/quick-dodge": {
    "ja": {
      "name": "障害物を避けるゲーム",
      "tagline": "飛んでくる弾をマウスカーソルでかわし続けるゲーム"
    },
    "ko": {
      "name": "마우스 피하기 게임",
      "tagline": "날아오는 투사체를 마우스 커서로 계속 피하는 게임"
    },
    "de": {
      "name": "Dodge Game",
      "tagline": "Weiche mit dem Mauszeiger heranfliegenden Projektilen aus"
    },
    "es": {
      "name": "Juego de esquivar con el ratón",
      "tagline": "Esquiva con el cursor los proyectiles que vuelan hacia ti"
    },
    "fr": {
      "name": "Jeu d'esquive à la souris",
      "tagline": "Esquivez avec le curseur les projectiles qui foncent sur vous"
    },
    "pt": {
      "name": "Jogo de Desviar com o Mouse",
      "tagline": "Desvie com o cursor dos projéteis que vêm na sua direção"
    }
  },
  "/drills/physical/reflex-training/reaction-chain": {
    "ja": {
      "name": "オーバーフリック改善",
      "tagline": "速く動かしたカーソルを的の中でぴたりと止める練習"
    },
    "ko": {
      "name": "오버에임 교정 훈련",
      "tagline": "빠르게 움직인 커서를 표적 안에서 정확히 멈추는 연습"
    },
    "de": {
      "name": "Overflicking stoppen",
      "tagline": "Bremse den schnellen Cursor genau im Ziel ab"
    },
    "es": {
      "name": "Frenado de puntería",
      "tagline": "Frena el cursor rápido justo dentro del objetivo sin pasarte"
    },
    "fr": {
      "name": "Freinage de visée souris",
      "tagline": "Arrêtez le curseur rapide pile dans la cible"
    },
    "pt": {
      "name": "Frenagem de Mira",
      "tagline": "Pare o cursor rápido exatamente dentro do alvo"
    }
  },
  "/drills/reaction-speed/reaction-time-test": {
    "ko": {
      "name": "시간 감각 게임",
      "tagline": "목표 시간을 기억하고 지났다고 느낄 때 클릭하는 게임"
    },
    "ja": {
      "name": "体内時計ゲーム",
      "tagline": "目標タイムを覚えて経った瞬間にクリックする時間感覚ゲーム"
    },
    "de": {
      "name": "Zeitgefühl-Test",
      "tagline": "Zielzeit schätzen und im richtigen Moment klicken"
    },
    "pt": {
      "name": "Jogo de noção de tempo",
      "tagline": "Estime o tempo-alvo e clique no momento certo"
    },
    "es": {
      "name": "Parar el cronómetro a ciegas",
      "tagline": "Estima el tiempo objetivo y haz clic en el momento justo"
    },
    "fr": {
      "name": "Jeu de perception du temps",
      "tagline": "Estimez le temps cible et cliquez au bon moment"
    }
  },
  "/drills/reaction-speed/reflex-training-drill": {
    "ja": {
      "name": "反射神経ゲーム",
      "tagline": "画面に出現する複数ターゲットを素早くタップして反射神経と分割注意力を強化"
    },
    "ko": {
      "name": "순발력 테스트 게임",
      "tagline": "동시에 출현하는 멀티 타깃을 신속하게 타격하여 순발력과 분할 주의력을 훈련"
    },
    "de": {
      "name": "Reflexe trainieren",
      "tagline": "Multi-Target-Reflextraining zur Steigerung von Reaktionsschnelligkeit und geteilter Aufmerksamkeit"
    },
    "pt": {
      "name": "Jogo de reflexo rápido",
      "tagline": "Acerte múltiplos alvos simultâneos para treinar atenção dividida e reflexos rápidos"
    },
    "es": {
      "name": "Juego de reflejos",
      "tagline": "Elimina objetivos múltiples simultáneos para entrenar reflejos rápidos y atención dividida"
    },
    "fr": {
      "name": "Test de réflexe",
      "tagline": "Éliminez les cibles multiples pour développer vos réflexes et votre attention divisée"
    }
  },
  "/drills/reaction-speed/visual-tracking-speed-test": {
    "ja": {
      "name": "動体視力テスト",
      "tagline": "動くターゲットを滑動性眼球運動で追跡し動体視力と空間認知スピードを測定・強化"
    },
    "ko": {
      "name": "동체시력 테스트 게임",
      "tagline": "화면을 이동하는 운동 타깃을 눈으로 추적하여 동체시력과 시각 반응속도를 정밀 측정"
    },
    "de": {
      "name": "Zielverfolgung testen",
      "tagline": "Blickfolgebewegung und visuelle Reflexe an dynamisch bewegten Zielen online messen"
    },
    "pt": {
      "name": "Teste de visão dinâmica",
      "tagline": "Meça sua capacidade de rastreamento ocular e reflexo visual em alvos em movimento"
    },
    "es": {
      "name": "Test de visión dinámica",
      "tagline": "Mide la agudeza visual dinámica y el tiempo de intercepción de objetivos en movimiento"
    },
    "fr": {
      "name": "Test de vision dynamique",
      "tagline": "Test de poursuite visuelle gratuit en ligne. Suivez les cibles en mouvement pour mesurer votre acuité dynamique et votre vitesse de réaction motrice."
    }
  },
  "/drills/reaction-speed/reaction-game": {
    "ja": {
      "name": "反応速度ゲーム",
      "tagline": "落下ターゲットを瞬時迎撃する縦方向視覚追跡＆反射速度トレーニング"
    },
    "ko": {
      "name": "반응속도 게임",
      "tagline": "낙하하는 타겟을 순간 요격하는 수직 시각 추적 및 순발력 측정"
    },
    "de": {
      "name": "Reaktionsspiel",
      "tagline": "Fallende Ziele abfangen und vertikale Blickverfolgung trainieren"
    },
    "pt": {
      "name": "Jogo de reflexo online",
      "tagline": "Intercepte alvos em queda acelerada e treine rastreamento vertical"
    },
    "es": {
      "name": "Juego de reacción online",
      "tagline": "Intercepta objetivos en caída acelerada y entrena seguimiento vertical"
    },
    "fr": {
      "name": "Jeu de réaction en ligne",
      "tagline": "Jeu de réflexe et de réaction en ligne gratuit : interceptez les cibles en chute rapide, entraînez votre suivi visuel et vos réflexes dans le navigateur."
    }
  },
  "/drills/cognitive/focus/concentration-grid": {
    "es": {
      "name": "Tabla de Schulte online",
      "tagline": "Pulsa los números en orden en una cuadrícula que crece con cada nivel"
    },
    "pt": {
      "name": "Tabela de Schulte online",
      "tagline": "Clique nos números em ordem numa grade que cresce a cada nível"
    },
    "ja": {
      "name": "シュルテテーブル",
      "tagline": "散らばった数字を1から順番に探してクリックする集中力トレーニング、レベルごとにマス目が増えます"
    },
    "ko": {
      "name": "슐테 테이블 게임",
      "tagline": "격자에 흩어진 숫자를 1부터 순서대로 찾아 누르는 집중력 게임, 레벨마다 격자가 커집니다"
    },
    "de": {
      "name": "Schulte-Tabelle: Konzentrationsübung online",
      "tagline": "Klicke die Zahlen im Raster der Reihe nach an – mit jedem Level wird die Tabelle größer"
    },
    "fr": {
      "name": "Table de Schulte",
      "tagline": "Cliquez les nombres dans l'ordre sur une grille qui s'agrandit à chaque niveau"
    }
  },
  "/drills/cognitive/focus/distraction-fighter": {
    "ja": {
      "name": "ストループテスト｜ストループ課題",
      "tagline": "文字の意味ではなくインクの色を選んで答えるストループ効果の練習ゲーム"
    },
    "ko": {
      "name": "스트룹 테스트",
      "tagline": "단어의 뜻이 아닌 글자 색을 골라 누르는 스트룹 효과 연습 게임"
    },
    "de": {
      "name": "Stroop-Test online kostenlos",
      "tagline": "Wähle die Schriftfarbe statt der Wortbedeutung – ein Farb-Wort-Test direkt im Browser"
    },
    "es": {
      "name": "Test de Stroop",
      "tagline": "Elige el color de la tinta, no la palabra escrita: un ejercicio de atención selectiva en el navegador"
    },
    "fr": {
      "name": "Test de Stroop en ligne gratuit",
      "tagline": "Choisissez la couleur de l'encre et non le mot écrit : un exercice d'attention sélective dans le navigateur"
    },
    "pt": {
      "name": "Teste de Stroop",
      "tagline": "Escolha a cor da tinta, não a palavra escrita: um treino de atenção seletiva no navegador"
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
      "name": "CPS Test (Clicks por Segundo)",
      "tagline": "Mide tus clicks por segundo y velocidad de cliqueo con prueba de 45 segundos"
    },
    "de": {
      "name": "CPS Test (Klickgeschwindigkeit)",
      "tagline": "Klicks pro Sekunde und Klickgeschwindigkeit mit 45-Sekunden-Test messen"
    }
  },
  "/drills/motor/hand-eye-coordination/aim-trainer": {
    "ko": {
      "name": "에임 연습 사이트",
      "tagline": "움직이는 타겟 2개를 사라지기 전에 클릭해 명중률과 콤보를 기록하는 무료 에임 연습"
    },
    "ja": {
      "name": "エイム練習 (Aim Trainer)",
      "tagline": "動き回る標的が消える前にクリックしてマウス精度と命中率を測る無料エイム練習"
    },
    "de": {
      "name": "Aim Trainer Online",
      "tagline": "Kostenloses Maus-Präzisionstraining & Zielgenauigkeitstest im Browser"
    },
    "pt": {
      "name": "Aim Trainer Online Grátis",
      "tagline": "Treine a precisão do mouse, reflexos e micro-flicks para jogos FPS"
    },
    "es": {
      "name": "Aim Trainer Online",
      "tagline": "Entrena puntería con el mouse, micro-flicks y precisión para juegos FPS"
    },
    "fr": {
      "name": "Aim Trainer en Ligne (Entraînement de Visée)",
      "tagline": "Entraînez votre précision de souris, vos micro-flicks et votre visée pour jeux FPS"
    }
  },
  "/drills/motor/movement-speed/keyboard-recognition": {
    "ko": {
      "name": "키보드 반응속도 테스트",
      "tagline": "화면에 뜬 키를 제한 시간 안에 누르고 가짜 프롬프트는 참는 키보드 반응 테스트"
    },
    "ja": {
      "name": "キーボード反応速度テスト",
      "tagline": "画面に表示されたキーを素早く押し、フェイクは押さずに我慢するキー反応テスト"
    },
    "de": {
      "name": "Tastatur-Reaktionszeit testen",
      "tagline": "Reagiere blitzschnell auf Bildschirmanweisungen zur Stärkung des Tastatur-Muskelgedächtnisses"
    },
    "es": {
      "name": "Test de reacción con teclado",
      "tagline": "Pulsa la tecla que aparece antes de que acabe el tiempo e ignora las señales falsas"
    },
    "fr": {
      "name": "Test de réaction clavier",
      "tagline": "Appuyez sur la touche affichée avant la fin du chrono et ignorez les faux signaux"
    },
    "pt": {
      "name": "Teste de reação do teclado",
      "tagline": "Aperte a tecla exibida antes do tempo acabar e ignore os sinais falsos"
    }
  },
  "/drills/motor/hand-eye-coordination/precision-flick-shot": {
    "ko": {
      "name": "마우스 정확도 테스트",
      "tagline": "미세 조리개 중심 타겟을 순간 포착하는 스냅 조준 훈련"
    },
    "ja": {
      "name": "マウス精度テスト",
      "tagline": "微小な開口部の中央ターゲットを瞬間的に捉えるスナップエイム訓練"
    },
    "de": {
      "name": "Mausgenauigkeit testen",
      "tagline": "Erfasse winzige Zielpunkte im Blenden-Zentrum mit blitzschnellem Snap-Aiming"
    },
    "es": {
      "name": "Test de precisión del ratón",
      "tagline": "Fija objetivos minúsculos en el centro de la mirilla con micro-flicks instantáneos"
    },
    "fr": {
      "name": "Test de précision souris",
      "tagline": "Verrouillez des micro-cibles au centre du réticule avec des flicks instantanés"
    },
    "pt": {
      "name": "Teste de precisão do mouse",
      "tagline": "Acerte alvos minúsculos no centro da mira com micro-flicks instantâneos"
    }
  },
  "/drills/motor/hand-eye-coordination/drag-and-drop": {
    "ko": {
      "name": "드래그 앤 드롭 테스트",
      "tagline": "움직이는 링 안으로 볼을 드래그해 정확히 놓는 마우스 드래그 연습"
    },
    "ja": {
      "name": "ドラッグ＆ドロップ練習",
      "tagline": "動くリングの中へボールをドラッグして正確に離すマウス操作練習"
    },
    "de": {
      "name": "Maus-Ziehtest",
      "tagline": "Ziehe den Ball in einen gleitenden Ring und lass ihn präzise los"
    },
    "es": {
      "name": "Prueba de arrastrar y soltar",
      "tagline": "Arrastra la bola hasta un anillo en movimiento y suéltala con precisión"
    },
    "fr": {
      "name": "Test Glisser-Déposer (Drag and Drop)",
      "tagline": "Glissez la balle dans un anneau en mouvement et lâchez-la avec précision"
    },
    "pt": {
      "name": "Teste de Arrastar e Soltar (Drag and Drop)",
      "tagline": "Arraste a bola até um anel em movimento e solte com precisão"
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
      "tagline": "Mantén el cursor sobre una onda cada vez más rápida para entrenar la precisión del trazado"
    },
    "fr": {
      "name": "Test de Tracé à la Souris (Mouse Tracing)",
      "tagline": "Gardez le curseur sur une onde de plus en plus rapide pour travailler la précision du tracé"
    },
    "pt": {
      "name": "Teste de Traçado com o Mouse (Mouse Tracing)",
      "tagline": "Mantenha o cursor sobre uma onda cada vez mais rápida para treinar a precisão do traçado"
    }
  },
  "/drills/motor/movement-speed/finger-sequencing": {
    "ko": {
      "name": "순서 클릭 연습",
      "tagline": "점선 경로가 알려주는 순서대로 타깃 3~5개를 클릭하는 마우스 연습"
    },
    "ja": {
      "name": "順番クリック練習",
      "tagline": "点線のルートが示す順番どおりに3〜5個のターゲットをクリックするマウス練習"
    },
    "de": {
      "name": "Ziele in Reihenfolge klicken",
      "tagline": "Folge der gestrichelten Linie und klicke 3 bis 5 Ziele in der richtigen Reihenfolge"
    },
    "es": {
      "name": "Clics en orden",
      "tagline": "Sigue la línea discontinua y haz clic en 3 a 5 objetivos en el orden correcto"
    },
    "fr": {
      "name": "Cliquer les cibles dans l’ordre",
      "tagline": "Suivez la ligne pointillée et cliquez 3 à 5 cibles dans le bon ordre"
    },
    "pt": {
      "name": "Cliques em Sequência",
      "tagline": "Siga a linha tracejada e clique em 3 a 5 alvos na ordem certa"
    }
  },
  "/drills/fps/angle-hold-trainer": {
    "ja": {
      "name": "置きエイム練習（角待ち）",
      "tagline": "左右の角から飛び出す的に置きエイムを合わせて撃つ角待ち練習：反応時間をms表示"
    },
    "ko": {
      "name": "대기샷 연습 (각 잡기)",
      "tagline": "좌우 모퉁이에서 튀어나오는 타겟에 미리 조준을 맞춰 두고 맞히는 각 잡기 연습: 반응 시간을 ms로 기록"
    },
    "de": {
      "name": "CS2 Aim Training – Crosshair Placement",
      "tagline": "Halte den Crosshair an der Ecke und triff Gegner, die links oder rechts herauspeeken – mit Reaktionszeit in ms."
    },
    "es": {
      "name": "Colocación de Mira",
      "tagline": "Mantén la mira en el ángulo y acierta a los objetivos que asoman por la izquierda o la derecha, con tu tiempo de reacción en ms."
    },
    "fr": {
      "name": "Placement du Viseur",
      "tagline": "Gardez le viseur sur l’angle et touchez les cibles qui peekent à gauche ou à droite, avec votre temps de réaction en ms."
    },
    "pt": {
      "name": "Posicionamento de Mira",
      "tagline": "Deixe a mira no ângulo e acerte os alvos que aparecem pela esquerda ou direita, com o tempo de reação em ms."
    }
  },
  "/drills/memory/short-term-memory/color-sequence": {
    "pt": {
      "name": "Jogo estilo Genius online",
      "tagline": "Memorize a ordem em que as cores acendem e repita: a sequência fica mais longa a cada nível"
    },
    "ko": {
      "name": "색깔 순서 기억 게임",
      "tagline": "불이 켜지는 색 버튼의 순서를 기억했다가 그대로 다시 누르는 게임, 레벨마다 순서가 길어집니다"
    },
    "ja": {
      "name": "色の順番記憶ゲーム",
      "tagline": "光った色ボタンの順番を覚えてそのまま押し直すゲーム、レベルが上がるほど順番が長くなります"
    },
    "de": {
      "name": "Senso Spiel online",
      "tagline": "Merke dir, in welcher Reihenfolge die Farbfelder aufleuchten, und tippe sie nach – jedes Level wird länger"
    },
    "es": {
      "name": "Juego Simón online",
      "tagline": "Memoriza el orden en que se iluminan los colores y repítelo: la secuencia se alarga en cada nivel"
    },
    "fr": {
      "name": "Jeu Simon en ligne",
      "tagline": "Retenez l'ordre dans lequel les couleurs s'allument et reproduisez-le : la suite s'allonge à chaque niveau"
    }
  },
  "/drills/visual/depth-perception/distance-judgment": {
    "ja": {
      "name": "深視力トレーニング",
      "tagline": "動く標的との距離を見極めるブラウザ版の深視力練習"
    },
    "ko": {
      "name": "거리감 테스트 게임",
      "tagline": "움직이는 표적의 거리를 판단해 맞히는 브라우저 거리감 연습"
    },
    "de": {
      "name": "Tiefenwahrnehmung testen",
      "tagline": "Entfernungsschätzung mit einem bewegten Ziel im Browser üben"
    },
    "es": {
      "name": "Test de Percepción de Profundidad (Cálculo de Distancia)",
      "tagline": "Practica el cálculo de distancias con un objetivo en movimiento"
    },
    "fr": {
      "name": "Test de Perception de la Profondeur (Calcul de Distance)",
      "tagline": "Entraînez l’appréciation des distances avec une cible en mouvement"
    },
    "pt": {
      "name": "Treino de Noção de Distância",
      "tagline": "Treine a noção de distância com um alvo em movimento"
    }
  },
  "/drills/motor/precision-control/steady-hand": {
    "ja": {
      "name": "イライラ棒 (Steady Hand Game)",
      "tagline": "光る細いコースからはみ出さずにゴールまで進む無料イライラ棒。クリアごとにコースが複雑に"
    },
    "ko": {
      "name": "마우스 미로 게임",
      "tagline": "빛나는 선에서 벗어나지 않고 골인 지점까지 커서를 옮기는 마우스 미로. 랩마다 길이 더 구불구불해집니다"
    },
    "de": {
      "name": "Ruhige Hand Spiel (Heißer Draht Online)",
      "tagline": "Führe den Cursor ohne Abrutschen über die Leuchtlinie ins Ziel – jede Serie macht die Strecke kurviger"
    },
    "es": {
      "name": "Juego del Pulso Firme (Laberinto del Ratón)",
      "tagline": "Lleva el cursor por la línea iluminada hasta la meta sin salirte; cada racha vuelve el trazado más sinuoso"
    },
    "fr": {
      "name": "Jeu de la Main Ferme (Fil Chaud Virtuel)",
      "tagline": "Guidez le curseur sur la ligne lumineuse jusqu’à l’arrivée sans en sortir ; chaque série rend le tracé plus sinueux"
    },
    "pt": {
      "name": "Jogo da Mão Firme (Fio Elétrico Online)",
      "tagline": "Leve o cursor pela linha luminosa até a chegada sem encostar na borda; cada volta deixa o trajeto mais sinuoso"
    }
  },
  "/drills/fps/recoil-control": {
    "ja": {
      "name": "リコイル練習 (スプレー制御)",
      "tagline": "AK風30発スプレーパターンの反動をマウスの引き下げで抑えるリコイル制御練習"
    },
    "ko": {
      "name": "반동 연습 사이트 (반동 제어)",
      "tagline": "AK 스타일 30발 스프레이 패턴의 반동을 마우스를 끌어내려 잡는 반동 제어 연습"
    },
    "de": {
      "name": "Rückstoßkontrolle lernen",
      "tagline": "Ziehe die Maus gegen ein AK-artiges 30-Schuss-Spraymuster nach unten und halte den Spray im Ziel."
    },
    "es": {
      "name": "Control de Retroceso FPS",
      "tagline": "Tira del ratón hacia abajo contra un spray de 30 balas estilo AK y mantén los tiros agrupados en el objetivo."
    },
    "fr": {
      "name": "Contrôle du Recul FPS",
      "tagline": "Tirez la souris vers le bas contre un spray de 30 balles façon AK et gardez vos tirs groupés sur la cible."
    },
    "pt": {
      "name": "Controle de Recoil",
      "tagline": "Puxe o mouse para baixo contra um spray de 30 balas estilo AK e mantenha os tiros agrupados no alvo."
    }
  },
  "/drills/fps/strafe-tracking": {
    "ja": {
      "name": "ストレイフ追いエイム練習",
      "tagline": "不規則な左右ストレイフと切り返しに吸い付く無料ブラウザ追いエイム・トラッキング練習ツール"
    },
    "ko": {
      "name": "무빙 에임 연습",
      "tagline": "불규칙한 좌우 무빙과 방향 전환을 정확하게 추적하는 무료 브라우저 에임 트래킹 훈련 도구"
    },
    "de": {
      "name": "Tracking Aim Training (Strafe)",
      "tagline": "Verfolge Ziele mit unberechenbaren AD-Strafes und schnellen Richtungswechseln – reaktives Tracking im Browser."
    },
    "es": {
      "name": "Tracking de Strafe",
      "tagline": "Sigue objetivos con strafes laterales impredecibles y lee cada cambio de dirección en el navegador."
    },
    "fr": {
      "name": "Tracking Aim : Strafe",
      "tagline": "Suivez des cibles aux strafes gauche-droite imprévisibles et lisez chaque changement de direction."
    },
    "pt": {
      "name": "Treino de Tracking Online",
      "tagline": "Acompanhe alvos com strafes laterais imprevisíveis e leia cada mudança de direção no navegador."
    }
  },
  "/drills/memory/working-memory/n-back": {
    "ja": {
      "name": "Nバック課題",
      "tagline": "1文字ずつ表示される文字が3つ前と同じかを判断するNバックの練習、正解が続くとレベルが上がります"
    },
    "ko": {
      "name": "엔백 게임",
      "tagline": "하나씩 나오는 글자가 3개 전 글자와 같은지 판단하는 N-back 작업기억 연습, 잘하면 단계가 올라갑니다"
    },
    "de": {
      "name": "N-Back Test",
      "tagline": "Entscheide bei jedem Buchstaben, ob er dem von vor 3 Schritten entspricht – bei Erfolg steigt das Level"
    },
    "es": {
      "name": "Test N-Back online",
      "tagline": "Decide si cada letra coincide con la de 3 pasos atrás: el nivel sube a medida que aciertas"
    },
    "pt": {
      "name": "Teste N-Back online",
      "tagline": "Decida se cada letra é igual à de 3 passos atrás: o nível sobe conforme você acerta"
    },
    "fr": {
      "name": "Test de mémoire de travail (N-Back)",
      "tagline": "Indiquez si chaque lettre est identique à celle d'il y a 3 étapes : le niveau monte quand vous réussissez"
    }
  },
  "/drills/memory/spatial-memory/grid-memorization": {
    "ja": {
      "name": "瞬間記憶ゲーム",
      "tagline": "一瞬光ったマスのパターンを覚えて再現するゲーム、4×4から5×5へと覚えるマスが増えていきます"
    },
    "ko": {
      "name": "순간 기억력 테스트",
      "tagline": "잠깐 켜지는 칸의 패턴을 기억했다가 다시 찍는 게임, 4×4에서 5×5로 칸 수가 늘어납니다"
    },
    "de": {
      "name": "Visueller Gedächtnistest online",
      "tagline": "Merke dir kurz aufleuchtende Felder im Raster und klicke sie nach – von 4×4 bis 5×5 mit mehr Feldern"
    },
    "es": {
      "name": "Test de memoria visual online",
      "tagline": "Memoriza las casillas que se iluminan un instante y márcalas de nuevo, de 4×4 a 5×5 con cada vez más casillas"
    },
    "pt": {
      "name": "Teste de memória visual online",
      "tagline": "Memorize as casas que acendem por um instante e marque-as de novo, de 4×4 a 5×5 com cada vez mais casas"
    },
    "fr": {
      "name": "Test de mémoire visuelle en ligne",
      "tagline": "Mémorisez les cases qui s'allument brièvement et retrouvez-les, de 4×4 à 5×5 avec de plus en plus de cases"
    }
  },
  "/drills/memory/short-term-memory/digit-span": {
    "ja": {
      "name": "数字記憶テスト",
      "tagline": "一度に表示される数字を覚えてそのまま入力する練習、桁数が増えるほど表示時間は短くなります"
    },
    "ko": {
      "name": "숫자 기억력 테스트",
      "tagline": "한 번에 보여 주는 숫자열을 외워 그대로 입력하는 연습, 자릿수는 늘고 표시 시간은 짧아집니다"
    },
    "de": {
      "name": "Zahlenspanne Test online",
      "tagline": "Merke dir eine kurz gezeigte Zahlenfolge und tippe sie ein – sie wird länger, die Anzeige kürzer"
    },
    "es": {
      "name": "Test de dígitos online",
      "tagline": "Memoriza la serie de números mostrada de una vez y escríbela: se alarga y se muestra durante menos tiempo"
    },
    "pt": {
      "name": "Teste de memória numérica",
      "tagline": "Memorize a sequência de números mostrada de uma vez e digite-a: ela cresce e aparece por menos tempo"
    },
    "fr": {
      "name": "Test d’empan de chiffres",
      "tagline": "Retenez une suite de chiffres affichée d'un coup et retapez-la : elle s'allonge et s'affiche moins longtemps"
    }
  },
  "/drills/memory/short-term-memory/word-recall": {
    "ja": {
      "name": "単語記憶テスト",
      "tagline": "2秒間まとめて表示される単語リストを覚え、順番を問わず入力する単語記憶の練習"
    },
    "ko": {
      "name": "단어 기억력 테스트",
      "tagline": "2초 동안 한꺼번에 보이는 단어 목록을 외워 순서와 상관없이 입력하는 단어 기억 연습"
    },
    "de": {
      "name": "Wortgedächtnis Test",
      "tagline": "Präge dir eine 2 Sekunden lang gezeigte Wortliste ein und tippe die Wörter in beliebiger Reihenfolge ein"
    },
    "es": {
      "name": "Test de memoria con palabras",
      "tagline": "Memoriza una lista de palabras mostrada durante 2 segundos y escríbelas en cualquier orden"
    },
    "pt": {
      "name": "Teste de memória com palavras",
      "tagline": "Memorize uma lista de palavras mostrada por 2 segundos e digite-as em qualquer ordem"
    },
    "fr": {
      "name": "Test de mémoire des mots",
      "tagline": "Retenez une liste de mots affichée 2 secondes et retapez-les dans n’importe quel ordre"
    }
  },
  "/drills/memory/spatial-memory/object-location": {
    "ja": {
      "name": "空間記憶テスト",
      "tagline": "マス目に置かれた物の位置を覚え、指定された物があったマスを答えるゲーム、3×3から5×5まで広がります"
    },
    "ko": {
      "name": "공간 기억력 테스트",
      "tagline": "격자 위 물체들의 위치를 기억했다가 목표 물체가 있던 칸을 찾는 게임, 3×3에서 5×5까지 넓어집니다"
    },
    "de": {
      "name": "Räumlicher Gedächtnistest online",
      "tagline": "Merke dir, wo Objekte im Raster liegen, und finde die Position des Zielobjekts – von 3×3 bis 5×5"
    },
    "es": {
      "name": "Test de memoria espacial online",
      "tagline": "Memoriza dónde aparecen los objetos en la cuadrícula y encuentra la casilla del objeto objetivo, de 3×3 a 5×5"
    },
    "pt": {
      "name": "Teste de memória espacial online",
      "tagline": "Memorize onde os objetos aparecem na grade e encontre a casa do objeto-alvo, de 3×3 a 5×5"
    },
    "fr": {
      "name": "Test de mémoire spatiale en ligne",
      "tagline": "Retenez la position des objets sur la grille et retrouvez la case de l'objet cible, de 3×3 à 5×5"
    }
  },
  "/drills/memory/spatial-memory/path-tracing": {
    "ja": {
      "name": "コルシブロックテスト",
      "tagline": "順番に光るタイルの経路を覚え、同じ順番でなぞる順番記憶ゲーム、レベルごとに経路が長くなります"
    },
    "ko": {
      "name": "코르시 블록 테스트",
      "tagline": "차례로 켜지는 타일의 경로를 기억했다가 같은 순서로 따라 누르는 순서 기억 게임"
    },
    "de": {
      "name": "Corsi-Block-Test online",
      "tagline": "Merke dir den Pfad der nacheinander aufleuchtenden Felder und tippe ihn in derselben Reihenfolge nach"
    },
    "es": {
      "name": "Test de Corsi online",
      "tagline": "Memoriza el camino de las casillas que se iluminan una a una y repítelo en el mismo orden"
    },
    "pt": {
      "name": "Teste de Corsi online",
      "tagline": "Memorize o caminho das casas que acendem uma a uma e repita-o na mesma ordem"
    },
    "fr": {
      "name": "Test des blocs de Corsi en ligne",
      "tagline": "Retenez le chemin des cases qui s'allument une à une et reproduisez-le dans le même ordre"
    }
  },
  "/drills/fps/vertical-air-track": {
    "ja": {
      "name": "縦エイム練習（空中トラッキング）",
      "tagline": "重力に従って放物線を描く空中ターゲットを追従：ApexやOverwatchの縦エイムと滞空追従を鍛えるFPSエイム練習"
    },
    "ko": {
      "name": "수직 에임 연습 (공중 타겟 트래킹)",
      "tagline": "중력 가속도로 낙하하는 공중 타겟을 부드럽게 추적: 에이펙스와 오버워치 수직 트래킹 에임 연습"
    },
    "de": {
      "name": "Vertikales Tracking",
      "tagline": "Verfolge Luftziele auf schwerkraftbedingten Parabelbahnen und trainiere die Mauskontrolle auf der Y-Achse."
    },
    "es": {
      "name": "Puntería Vertical FPS",
      "tagline": "Sigue objetivos aéreos en trayectoria parabólica y domina el control del ratón en el eje Y."
    },
    "fr": {
      "name": "Tracking Vertical FPS",
      "tagline": "Suivez des cibles aériennes en trajectoire parabolique et maîtrisez la visée sur l’axe Y."
    },
    "pt": {
      "name": "Mira Vertical",
      "tagline": "Acompanhe alvos aéreos em trajetória parabólica e domine o controle do mouse no eixo Y."
    }
  },
  "/drills/fps/target-switching-swarm": {
    "ja": {
      "name": "ターゲットスイッチ練習",
      "tagline": "次々に現れる複数の的へ素早く照準を切り替えて撃ち抜くターゲットスイッチ練習"
    },
    "ko": {
      "name": "타겟 스위칭 에임 연습",
      "tagline": "동적으로 생성되는 다중 타겟을 딜레이 없이 신속하게 연속 격추하는 FPS 타겟 전환 에임 트레이너"
    },
    "de": {
      "name": "Zielwechsel-Training",
      "tagline": "Wechsle schnell zwischen mehreren Zielen und triff jedes ohne Zögern – Target Switching im Browser."
    },
    "es": {
      "name": "Cambio de Objetivos",
      "tagline": "Cambia rápido entre varios objetivos y acierta a cada uno sin dudar."
    },
    "fr": {
      "name": "Changement de Cible FPS",
      "tagline": "Enchaînez plusieurs cibles le plus vite possible et basculez de l’une à l’autre sans hésiter."
    },
    "pt": {
      "name": "Troca de Alvos",
      "tagline": "Alterne rapidamente entre vários alvos e acerte cada um sem hesitar."
    }
  },
  "/drills/fps/target-acquisition": {
    "ja": {
      "name": "VALORANT エイム練習（ターゲット捕捉）",
      "tagline": "暗めのダミーの中から一番明るい的を見分けて初弾で当てるターゲット捕捉練習"
    },
    "ko": {
      "name": "발로란트 에임 연습 (타겟 포착)",
      "tagline": "흐린 타겟들 사이에서 가장 밝은 타겟을 골라 첫 발에 맞히는 타겟 포착 연습"
    },
    "de": {
      "name": "Valorant Aim Trainer: Zielerfassung",
      "tagline": "Finde zwischen dunkleren Ablenkern das hellste Ziel und triff es mit dem ersten Schuss."
    },
    "es": {
      "name": "Aim Trainer para Valorant",
      "tagline": "Encuentra el objetivo más brillante entre señuelos más oscuros y acierta con el primer disparo."
    },
    "fr": {
      "name": "Aim Trainer Valorant : Acquisition de Cibles",
      "tagline": "Repérez la cible la plus lumineuse parmi des leurres plus sombres et touchez-la dès la première balle."
    },
    "pt": {
      "name": "Mira no Valorant: Aquisição de Alvos",
      "tagline": "Encontre o alvo mais brilhante entre iscas mais escuras e acerte com o primeiro tiro."
    }
  },
  "/drills/fps/target-prioritization": {
    "ja": {
      "name": "ターゲット優先順位の判断練習",
      "tagline": "高脅威ターゲットを瞬時に見極め味方への誤射を抑制：脅威評価と意思決定スピードを高めるFPSエイム練習"
    },
    "ko": {
      "name": "타겟 우선순위 판단 연습",
      "tagline": "위협 수준이 높은 적을 즉각 선별하고 아군 오사를 억제하는 FPS 위협 평가 및 우선순위 판단 에임 트레이너"
    },
    "de": {
      "name": "Zielpriorisierung im FPS",
      "tagline": "Schalte gefährliche Ziele zuerst aus und verschone Verbündete – Zielauswahl unter Zeitdruck."
    },
    "es": {
      "name": "Prioridad de Objetivos",
      "tagline": "Elimina primero los objetivos más peligrosos y respeta a los aliados: elige antes de disparar."
    },
    "fr": {
      "name": "Priorisation des Cibles FPS",
      "tagline": "Éliminez d’abord les cibles les plus dangereuses et épargnez les alliés : choisissez avant de tirer."
    },
    "pt": {
      "name": "Prioridade de Alvos",
      "tagline": "Elimine primeiro os alvos mais perigosos e poupe os aliados: escolha antes de atirar."
    }
  },
  "/drills/fps/flick-shot-training": {
    "ja": {
      "name": "フリックエイム練習",
      "tagline": "画面のランダムな位置に出る的へ素早く照準を飛ばし、止めて当てるフリックエイム練習"
    },
    "ko": {
      "name": "플릭샷 연습",
      "tagline": "화면 곳곳에 무작위로 생성되는 목표를 번개처럼 정확하게 타격하는 FPS 플릭샷 및 초탄 정확도 에임 트레이너"
    },
    "de": {
      "name": "Aim Test – Flick-Training",
      "tagline": "Flicke auf Ziele an zufälligen Positionen, stoppe sauber und triff – mit Trefferquote pro Runde."
    },
    "es": {
      "name": "Aim Test con Flicks",
      "tagline": "Haz flicks a objetivos en posiciones aleatorias, frena en seco y acierta; precisión medida en cada sesión."
    },
    "fr": {
      "name": "Aim Test et Flicks",
      "tagline": "Flickez vers des cibles à des positions aléatoires, arrêtez-vous net et tirez : précision mesurée à chaque partie."
    },
    "pt": {
      "name": "Teste de Mira e Flick",
      "tagline": "Faça flicks para alvos em posições aleatórias, pare com precisão e acerte; precisão medida a cada sessão."
    }
  },
  "/drills/fps/micro-correction-precision": {
    "ja": {
      "name": "マイクロフリック練習",
      "tagline": "一次フリック直後の微小な位置ズレを瞬時に修正：精密な終末減速とヘッドショット精度を高めるFPSエイム練習"
    },
    "ko": {
      "name": "에임 미세조정 연습",
      "tagline": "초기 플릭 후 목표 중심의 미세 오차를 번개처럼 보정하는 FPS 에임 미세조정 및 헤드샷 정밀도 트레이너"
    },
    "de": {
      "name": "Mikrokorrekturen trainieren",
      "tagline": "Triff erst das Ankerziel, dann das kleine Ziel direkt daneben – Feinjustierung nach dem Flick für Headshot-Präzision."
    },
    "es": {
      "name": "Microajustes de Puntería",
      "tagline": "Acierta el objetivo ancla y luego el pequeño de al lado: el ajuste fino tras el flick, para headshots."
    },
    "fr": {
      "name": "Micro-ajustements de Visée",
      "tagline": "Touchez la cible d’ancrage puis la petite cible juste à côté : l’ajustement fin après le flick, pour les headshots."
    },
    "pt": {
      "name": "Microajuste de Mira",
      "tagline": "Acerte o alvo-âncora e depois o alvo pequeno ao lado: o ajuste fino após o flick, para headshots."
    }
  },
  "/drills/fps/180-degree-awareness": {
    "ja": {
      "name": "180度 振り向きエイム練習",
      "tagline": "画面端に出る的へ大きく振り向いて当てる180度エイム練習：反応時間をms表示"
    },
    "ko": {
      "name": "180도 에임 연습",
      "tagline": "화면 가장자리에 나타나는 타겟으로 크게 돌려 맞히는 180도 턴 연습: 반응 시간을 ms로 기록"
    },
    "de": {
      "name": "180-Grad-Aim-Training",
      "tagline": "Reiße die Maus zu Zielen am Bildschirmrand herum und triff sie – mit Reaktionszeit in ms."
    },
    "es": {
      "name": "Entrenamiento de Giro 180°",
      "tagline": "Gira hacia objetivos en el borde de la pantalla y acierta rápido, con tu tiempo de reacción en ms."
    },
    "fr": {
      "name": "Entraînement Demi-Tour 180°",
      "tagline": "Pivotez vers des cibles en bord d’écran et touchez-les vite, avec votre temps de réaction en ms."
    },
    "pt": {
      "name": "Giro de 180° no FPS",
      "tagline": "Gire para alvos na borda da tela e acerte rápido, com o tempo de reação em ms."
    }
  },
  "/drills/fps/instant-response": {
    "ja": {
      "name": "FPS反応速度測定",
      "tagline": "画面中央の的が光った瞬間にクリックし、反応時間をミリ秒で測るFPSクリック反応テスト"
    },
    "ko": {
      "name": "FPS 클릭 반응 테스트",
      "tagline": "화면 중앙 타겟이 켜지는 순간 클릭해 반응 시간을 ms 단위로 측정하는 FPS 클릭 반응 테스트"
    },
    "de": {
      "name": "FPS-Reflextest",
      "tagline": "Klicke, sobald das Ziel in der Bildschirmmitte aufleuchtet – misst deine Klick-Reaktion in Millisekunden."
    },
    "es": {
      "name": "Tiempo de Reacción en FPS",
      "tagline": "Haz clic en cuanto se encienda el objetivo del centro de la pantalla y mide tu reacción al clic en milisegundos."
    },
    "fr": {
      "name": "Réactivité FPS : Test de Clic",
      "tagline": "Cliquez dès que la cible s’allume au centre de l’écran : votre réactivité au clic mesurée en millisecondes."
    },
    "pt": {
      "name": "Teste de Reflexo para FPS",
      "tagline": "Clique assim que o alvo acender no centro da tela e veja sua reação no clique em milissegundos."
    }
  },
  "/drills/fps/anti-strafe-jitter-duel": {
    "ja": {
      "name": "レレレ撃ち対策",
      "tagline": "高速ADAD移動（レレレ撃ち）に追従するリアクティブトラッキング練習：近距離での切り返し反応と照準ブレを抑えるFPSエイムトレーナー"
    },
    "ko": {
      "name": "트래킹 연습 - ADAD 무빙 대응",
      "tagline": "예측 불가능한 고빈도 ADAD 좌우 무빙을 놓치지 않고 추적하는 리액티브 트래킹 트레이너: 근거리 교전 트래킹 정확도 향상"
    },
    "de": {
      "name": "ADAD-Tracking",
      "tagline": "Halte den Crosshair auf Zielen mit schnellen, unberechenbaren ADAD-Strafes – reaktives Tracking für Nahkämpfe."
    },
    "es": {
      "name": "Tracking contra Strafe ADAD",
      "tagline": "Mantén la mira en objetivos con strafes ADAD rápidos e impredecibles: tracking reactivo a corta distancia."
    },
    "fr": {
      "name": "Tracking anti-strafe ADAD",
      "tagline": "Gardez le viseur sur des cibles aux strafes ADAD rapides et imprévisibles : le tracking réactif du combat rapproché."
    },
    "pt": {
      "name": "Tracking contra Strafe ADAD",
      "tagline": "Mantenha a mira em alvos com strafes ADAD rápidos e imprevisíveis: tracking reativo para curta distância."
    }
  },
  "/drills/fps/anti-zigzag-movement-trainer": {
    "ja": {
      "name": "ジグザグ移動の敵に当てる練習",
      "tagline": "不規則なジグザグ移動に照準を追従させ、切り返しで外さないためのリアクティブトラッキング練習"
    },
    "ko": {
      "name": "지그재그 무빙 트래킹",
      "tagline": "급격한 지그재그 방향 전환을 따라가며 조준을 놓치지 않는 리액티브 트래킹 연습"
    },
    "de": {
      "name": "Zickzack-Tracking",
      "tagline": "Folge Zielen mit abrupten Zickzack-Richtungswechseln, ohne beim Umkehren den Kontakt zu verlieren."
    },
    "es": {
      "name": "Tracking en Zigzag",
      "tagline": "Sigue objetivos con cambios bruscos en zigzag sin perder el contacto en cada giro."
    },
    "fr": {
      "name": "Tracking en Zigzag",
      "tagline": "Suivez des cibles aux changements de direction brusques en zigzag sans perdre le contact au retournement."
    },
    "pt": {
      "name": "Tracking em Zigue-Zague",
      "tagline": "Acompanhe alvos com mudanças bruscas em zigue-zague sem perder o contato na virada."
    }
  },
  "/drills/fps/pro-smooth-pursuit": {
    "ja": {
      "name": "トラッキングエイム練習",
      "tagline": "リサジュー曲線を描いて動く的に、なめらかに照準を追従させ続けるトラッキング練習"
    },
    "ko": {
      "name": "에임 트래킹 연습",
      "tagline": "리사주 곡선을 그리며 움직이는 타겟을 끊김 없이 부드럽게 따라가는 트래킹 연습"
    },
    "de": {
      "name": "Smooth Tracking üben",
      "tagline": "Verfolge ein Ziel auf einer Lissajous-Kurve ohne Unterbrechung – für ruhiges, gleichmäßiges Tracking."
    },
    "es": {
      "name": "Smooth Tracking",
      "tagline": "Sigue sin cortes un objetivo que traza una curva de Lissajous: tracking suave y constante."
    },
    "fr": {
      "name": "Smooth Tracking",
      "tagline": "Suivez sans interruption une cible qui décrit une courbe de Lissajous : un tracking fluide et régulier."
    },
    "pt": {
      "name": "Tracking Suave",
      "tagline": "Siga sem interrupção um alvo que percorre uma curva de Lissajous: tracking suave e constante."
    }
  },
  "/drills/fps/flow-state": {
    "ja": {
      "name": "FPS集中力トレーニング（フローエイム）",
      "tagline": "ベジェ曲線で動く的を途切れず追い続け、集中力の持続を鍛えるトラッキング練習"
    },
    "ko": {
      "name": "FPS 집중력 훈련 (플로우 상태)",
      "tagline": "베지어 곡선으로 움직이는 타겟을 놓치지 않고 계속 추적하며 집중력 지속을 기르는 트래킹 연습"
    },
    "de": {
      "name": "FPS Fokus Training (Flow State)",
      "tagline": "Verfolge ein Ziel auf zufälligen Bézier-Kurven ohne Abreißen und trainiere anhaltende Konzentration."
    },
    "es": {
      "name": "Concentración FPS (Flow)",
      "tagline": "Sigue un objetivo por curvas de Bézier impredecibles sin perderlo y entrena la concentración sostenida."
    },
    "fr": {
      "name": "Concentration FPS (Flow)",
      "tagline": "Suivez une cible sur des courbes de Bézier imprévisibles sans décrocher et entraînez une concentration durable."
    },
    "pt": {
      "name": "Treino de Foco FPS",
      "tagline": "Siga um alvo em curvas de Bézier imprevisíveis sem perder o contato e treine a concentração contínua."
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
      "name": "ゆっくり動く点を目で追う練習",
      "tagline": "リサージュ曲線をゆっくり進む点を目で追う練習"
    },
    "ko": {
      "name": "부드러운 시각 추적 훈련",
      "tagline": "리사주 곡선을 따라 천천히 움직이는 점을 눈으로 따라가는 연습"
    },
    "de": {
      "name": "Augenfolgebewegung & Blickverfolgung",
      "tagline": "Folge einem bewegten Ziel auf einer Lissajous-Kurve, halte den Kopf ruhig und übe stabile Blickführung"
    },
    "es": {
      "name": "Ejercicio de Seguimiento Lento Constante",
      "tagline": "Sigue con la vista un punto lento por una curva de Lissajous sin mover la cabeza"
    },
    "fr": {
      "name": "Poursuite Visuelle・Suivi Oculaire",
      "tagline": "Suivez une cible sur une courbe de Lissajous sans bouger la tête et améliorez la stabilité du regard"
    },
    "pt": {
      "name": "Perseguição Suave・Rastreamento Visual",
      "tagline": "Acompanhe um ponto lento numa curva de Lissajous sem mover a cabeça"
    }
  },
  "/drills/visual-tracking/directional-chaos-pursuit": {
    "ja": {
      "name": "ランダムに揺れ動く標的を目で追う練習",
      "tagline": "向きと速さが不規則に変わる標的を目で追う練習"
    },
    "ko": {
      "name": "불규칙 방향 전환 시선 추적 훈련",
      "tagline": "방향과 속도가 불규칙하게 바뀌는 표적을 눈으로 따라가는 연습"
    },
    "de": {
      "name": "Richtungswechsel verfolgen: Zufallsbahn-Übung",
      "tagline": "Folge einem Ziel, dessen Richtung und Tempo sich zufällig ändern"
    },
    "es": {
      "name": "Seguimiento Ocular Reactivo",
      "tagline": "Sigue con la vista un objetivo que cambia de dirección y velocidad al azar"
    },
    "fr": {
      "name": "Poursuite Oculaire Réactive",
      "tagline": "Suivez des yeux une cible dont la direction et la vitesse changent au hasard"
    },
    "pt": {
      "name": "Rastreamento com Mudanças de Direção",
      "tagline": "Acompanhe com os olhos um alvo que muda de direção e velocidade ao acaso"
    }
  },
  "/drills/visual/tracking-accuracy/moving-target": {
    "ja": {
      "name": "動体視力を鍛えるゲーム",
      "tagline": "動く標的の軌道を先読みしてクリックで捉えるゲーム"
    },
    "ko": {
      "name": "동체시력 키우는 게임",
      "tagline": "움직이는 표적의 궤적을 예측해 클릭으로 맞히는 게임"
    },
    "de": {
      "name": "Bewegte Ziele abfangen",
      "tagline": "Bewegte Ziele verfolgen, ihre Bahn antizipieren und im richtigen Moment abfangen"
    },
    "es": {
      "name": "Predicción de Trayectoria",
      "tagline": "Sigue objetivos móviles, predice su trayectoria y practica la intercepción"
    },
    "fr": {
      "name": "Intercepter des cibles mobiles",
      "tagline": "Suivez une cible mobile, anticipez sa trajectoire et interceptez-la"
    },
    "pt": {
      "name": "Previsão de Trajetória",
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
      "name": "시선 추적 게임",
      "tagline": "움직이는 표적 위에 커서를 계속 유지하는 추적 게임 (점수는 커서 기준)"
    },
    "de": {
      "name": "Glatte Blickfolge",
      "tagline": "Halte den Cursor auf einem bewegten Ziel – gewertet wird nur der Cursor"
    },
    "es": {
      "name": "Persecución con el Cursor",
      "tagline": "Mantén el cursor sobre un objetivo móvil; solo se puntúa el cursor"
    },
    "fr": {
      "name": "Test de poursuite lisse au curseur",
      "tagline": "Gardez le curseur sur une cible mobile ; seul le curseur est évalué"
    },
    "pt": {
      "name": "Perseguição Suave com o Cursor",
      "tagline": "Mantenha o cursor sobre um alvo móvel; só o cursor é pontuado"
    }
  },
  "/drills/visual/visual-recognition/entropic-grid": {
    "ja": {
      "name": "視覚探索トレーニング",
      "tagline": "変化する10×10グリッドから指定コードを探す練習"
    },
    "ko": {
      "name": "글자 찾기 게임",
      "tagline": "바뀌는 10×10 그리드에서 목표 코드를 모두 찾는 게임"
    },
    "de": {
      "name": "Codes im Raster finden",
      "tagline": "Finde alle Zielcodes in einem sich verändernden 10×10-Raster"
    },
    "es": {
      "name": "Concentración en Cuadrícula",
      "tagline": "Encuentra todos los códigos objetivo en una cuadrícula 10×10 cambiante"
    },
    "fr": {
      "name": "Grille de codes à repérer",
      "tagline": "Repérez tous les codes cibles dans une grille 10×10 qui change"
    },
    "pt": {
      "name": "Atenção Concentrada em Grade",
      "tagline": "Encontre todos os códigos-alvo numa grade 10×10 que muda"
    }
  },
  "/drills/visual/visual-recognition/rhythm-anomaly": {
    "ja": {
      "name": "点滅のズレ探しゲーム",
      "tagline": "36マスの点滅からリズムがずれたマスを見つけるゲーム"
    },
    "ko": {
      "name": "깜빡임 구별 게임",
      "tagline": "36개 깜빡이는 칸 중 리듬이 어긋난 칸을 찾는 게임"
    },
    "de": {
      "name": "Visueller Rhythmustest",
      "tagline": "Finde im pulsierenden 36-Zellen-Raster die Zelle mit abweichendem Takt"
    },
    "es": {
      "name": "Encuentra la celda fuera de ritmo",
      "tagline": "Encuentra la celda que late fuera de ritmo en una cuadrícula de 36 celdas"
    },
    "fr": {
      "name": "Test de rythme visuel",
      "tagline": "Repérez la case déphasée dans une grille pulsante de 36 cellules"
    },
    "pt": {
      "name": "Encontre a célula fora do ritmo",
      "tagline": "Encontre a célula que pulsa fora do ritmo numa grade de 36 células"
    }
  },
  "/drills/visual/visual-recognition/visual-search": {
    "ja": {
      "name": "文字探しゲーム",
      "tagline": "回転した文字の中から標的の文字を見つける無料ブラウザゲーム"
    },
    "ko": {
      "name": "다른 글자 찾기",
      "tagline": "회전된 문자들 속에서 다른 글자 하나를 찾는 시각 탐색 게임"
    },
    "de": {
      "name": "Visuelle Suche Test",
      "tagline": "Finde einen Zielbuchstaben zwischen ähnlichen, gedrehten Ablenkern"
    },
    "es": {
      "name": "Búsqueda Visual",
      "tagline": "Encuentra la letra objetivo entre distractores girados"
    },
    "fr": {
      "name": "Test de recherche visuelle",
      "tagline": "Repérez la lettre cible parmi des distracteurs pivotés"
    },
    "pt": {
      "name": "Busca Visual",
      "tagline": "Encontre a letra-alvo entre distratores girados"
    }
  },
  "/drills/visual-tracking/dynamic-evasion-pursuit": {
    "ja": {
      "name": "急に向きを変える標的を目で追う練習",
      "tagline": "一定間隔で急に向きと速さを変える標的を目で追う練習"
    },
    "ko": {
      "name": "급선회 표적 추적 훈련",
      "tagline": "짧은 간격으로 방향과 속도를 바꾸는 표적을 눈으로 따라가는 연습"
    },
    "de": {
      "name": "Korrektursakkaden üben: Ziel schlägt Haken",
      "tagline": "Folge einem Ziel, das etwa jede halbe Sekunde Richtung und Tempo wechselt"
    },
    "es": {
      "name": "Objetivo que Cambia de Dirección sin Aviso",
      "tagline": "Sigue con la vista un objetivo que cambia bruscamente de dirección y velocidad"
    },
    "fr": {
      "name": "Poursuite oculaire : cible qui esquive",
      "tagline": "Suivez des yeux une cible qui change brusquement de direction et de vitesse"
    },
    "pt": {
      "name": "Alvo que Muda de Direção sem Aviso",
      "tagline": "Acompanhe com os olhos um alvo que muda bruscamente de direção e velocidade"
    }
  },
  "/drills/visual-tracking/ghosting-suppress-pursuit": {
    "ja": {
      "name": "残像トレイルに惑わされず標的を追う練習",
      "tagline": "残像トレイル付きで跳ね返る標的を目で追う練習"
    },
    "ko": {
      "name": "잔상 속 시선 고정 훈련",
      "tagline": "벽에 튕기며 직선으로 움직이는 표적을 잔상 효과와 함께 눈으로 따라가는 연습"
    },
    "de": {
      "name": "Blickstabilität trainieren: Ziel mit Geisterspur",
      "tagline": "Folge einem an den Rändern abprallenden Ziel mit optionaler Geisterspur"
    },
    "es": {
      "name": "Seguimiento con Imágenes Fantasma",
      "tagline": "Sigue con la vista un objetivo que rebota, con estela fantasma opcional"
    },
    "fr": {
      "name": "Poursuite avec traînée visuelle",
      "tagline": "Suivez des yeux une cible qui rebondit, avec traînée visuelle optionnelle"
    },
    "pt": {
      "name": "Rastreamento com Rastros Fantasma",
      "tagline": "Acompanhe um alvo que quica nas bordas, com rastro fantasma opcional"
    }
  },
  "/drills/visual-tracking/infinity-pursuit": {
    "ja": {
      "name": "8の字眼球運動トレーニング",
      "tagline": "横向きの8の字を描く標的を目で追い、正中線をまたぐ練習"
    },
    "ko": {
      "name": "8자 안구 운동・시선 추적 훈련",
      "tagline": "누운 8자 궤도를 따라 움직이는 표적을 눈으로 쫓으며 중앙선을 넘나드는 연습"
    },
    "de": {
      "name": "Liegende Acht Augenübung",
      "tagline": "Folge einem Ziel auf einer liegenden Acht über die Mittellinie hinweg"
    },
    "es": {
      "name": "Ejercicio Ocular en Ocho",
      "tagline": "Sigue con la vista un objetivo que traza un ocho y cruza la línea media"
    },
    "fr": {
      "name": "Exercice Oculaire en Huit",
      "tagline": "Suivez des yeux une cible qui trace un huit couché et croise la ligne médiane"
    },
    "pt": {
      "name": "Exercício Ocular em Oito",
      "tagline": "Acompanhe com os olhos um alvo que desenha um oito e cruza a linha média"
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
      "name": "Springendes Ziel mit den Augen verfolgen",
      "tagline": "Finde ein versetztes Ziel wieder und nimm anschließend seine Bewegung erneut auf"
    },
    "es": {
      "name": "Seguimiento de Blanco Teletransportado",
      "tagline": "Encuentra de nuevo un objetivo desplazado y retoma el seguimiento de su movimiento"
    },
    "fr": {
      "name": "Poursuite oculaire : cible qui saute",
      "tagline": "Retrouvez une cible déplacée puis reprenez le suivi de son mouvement"
    },
    "pt": {
      "name": "Rastreamento de Alvo Teleportado",
      "tagline": "Encontre novamente um alvo deslocado e retome o acompanhamento do seu movimento"
    }
  },
  "/drills/visual-tracking/peripheral-ping-pursuit": {
    "ja": {
      "name": "中心固視で周辺の点滅に気づく練習",
      "tagline": "中央の十字を見たまま、周辺で光る点に気づく練習"
    },
    "ko": {
      "name": "주변시 훈련",
      "tagline": "중앙 십자를 바라본 채 주변에서 깜빡이는 점을 알아채는 연습"
    },
    "de": {
      "name": "Randreize erkennen, Blick in der Mitte",
      "tagline": "Blick aufs zentrale Kreuz, kurz aufleuchtende Punkte am Rand wahrnehmen"
    },
    "es": {
      "name": "Entrenamiento de Visión Periférica",
      "tagline": "Mira la cruz central y detecta los puntos que se encienden en la periferia"
    },
    "fr": {
      "name": "Signaux périphériques, regard au centre",
      "tagline": "Fixez la croix centrale et repérez les points qui s’allument en périphérie"
    },
    "pt": {
      "name": "Treino de Visão Periférica",
      "tagline": "Olhe para a cruz central e perceba os pontos que acendem na periferia"
    }
  },
  "/drills/visual-tracking/predictive-pursuit": {
    "ja": {
      "name": "予測視線トレーニング",
      "tagline": "次の着地点へ移動して止まる標的を追い、着地点を先読みする練習"
    },
    "ko": {
      "name": "예측 추적 훈련",
      "tagline": "새 도착 지점으로 이동해 멈추는 표적을 따라가며 도착 위치를 미리 예상하는 연습"
    },
    "de": {
      "name": "Prädiktive Blickverfolgung",
      "tagline": "Folge einem Ziel zu wechselnden Zielpunkten und schätze, wo es anhält"
    },
    "es": {
      "name": "Seguimiento Ocular Predictivo",
      "tagline": "Sigue un objetivo hacia puntos de destino cambiantes y anticipa dónde se detiene"
    },
    "fr": {
      "name": "Poursuite Oculaire Prédictive",
      "tagline": "Suivez une cible vers des points d’arrivée successifs et anticipez où elle s’arrête"
    },
    "pt": {
      "name": "Rastreamento Visual Preditivo",
      "tagline": "Siga um alvo até pontos de destino sucessivos e antecipe onde ele para"
    }
  },
  "/drills/visual-tracking/sine-wave-pursuit": {
    "ja": {
      "name": "サイン波の眼球追従トレーニング",
      "tagline": "サイン波の軌道を左右に往復する標的を目で追う練習"
    },
    "ko": {
      "name": "사인파 안구 추적 훈련",
      "tagline": "사인파 곡선을 따라 좌우로 왕복하는 표적을 눈으로 따라가는 연습"
    },
    "de": {
      "name": "Sinuswellen-Blickverfolgung",
      "tagline": "Folge einem Ziel, das auf einer Sinuskurve hin und her läuft"
    },
    "es": {
      "name": "Seguimiento ocular sinusoidal",
      "tagline": "Sigue con la vista un objetivo que va y viene por una curva sinusoidal"
    },
    "fr": {
      "name": "Poursuite oculaire sinusoïdale",
      "tagline": "Suivez des yeux une cible qui va et vient sur une courbe sinusoïdale"
    },
    "pt": {
      "name": "Rastreamento ocular senoidal",
      "tagline": "Acompanhe com os olhos um alvo que vai e volta numa curva senoidal"
    }
  },
  "/drills/visual-tracking/spatial-shift-pursuit": {
    "ja": {
      "name": "軌道が急変する標的の追視トレーニング",
      "tagline": "直進して跳ね返る標的が突然向きと速さを変える中で目で追う練習"
    },
    "ko": {
      "name": "궤도 급변 시선 추적 훈련",
      "tagline": "직선으로 튕기며 움직이다 갑자기 방향과 속도가 바뀌는 표적을 따라가는 연습"
    },
    "de": {
      "name": "Blickfolge bei plötzlichem Kurswechsel",
      "tagline": "Folge einem geradlinig abprallenden Ziel, das plötzlich den Kurs ändert"
    },
    "es": {
      "name": "Seguimiento visual con cambio espacial",
      "tagline": "Sigue un objetivo en línea recta que rebota y cambia de rumbo de repente"
    },
    "fr": {
      "name": "Poursuite visuelle à trajectoire changeante",
      "tagline": "Suivez une cible en ligne droite qui rebondit et change soudain de cap"
    },
    "pt": {
      "name": "Rastreamento visual com mudança espacial",
      "tagline": "Siga um alvo em linha reta que quica e muda de rumo de repente"
    }
  },
  "/drills/visual-tracking/split-screen-tracking": {
    "ja": {
      "name": "画面分割追視トレーニング",
      "tagline": "左は上下、右は左右に動く2つの標的を同時に目で追う練習"
    },
    "ko": {
      "name": "화면 분할 추적 훈련",
      "tagline": "왼쪽은 상하, 오른쪽은 좌우로 움직이는 두 표적을 동시에 따라가는 연습"
    },
    "de": {
      "name": "Geteiltes Tracking: zwei Ziele gleichzeitig",
      "tagline": "Links bewegt sich ein Ziel auf und ab, rechts hin und her – verfolge beide"
    },
    "es": {
      "name": "Seguimiento visual en pantalla dividida",
      "tagline": "Sigue dos objetivos a la vez: uno vertical a la izquierda y otro horizontal a la derecha"
    },
    "fr": {
      "name": "Poursuite visuelle sur écran partagé",
      "tagline": "Suivez deux cibles à la fois : verticale à gauche, horizontale à droite"
    },
    "pt": {
      "name": "Rastreamento visual em tela dividida",
      "tagline": "Acompanhe dois alvos ao mesmo tempo: vertical à esquerda e horizontal à direita"
    }
  },
  "/drills/visual-tracking/staircase-step": {
    "ja": {
      "name": "上下視線追従トレーニング",
      "tagline": "段々に下りてまた上る標的を目で追う練習"
    },
    "ko": {
      "name": "상하 시선 추적 훈련",
      "tagline": "계단식으로 내려갔다 다시 올라가는 표적을 눈으로 따라가는 연습"
    },
    "de": {
      "name": "Vertikale Blickverfolgung",
      "tagline": "Folge einem Ziel, das stufenweise hinab- und wieder hinaufwandert"
    },
    "es": {
      "name": "Seguimiento Ocular Vertical",
      "tagline": "Sigue un objetivo que baja por escalones y vuelve a subir"
    },
    "fr": {
      "name": "Poursuite Oculaire Verticale",
      "tagline": "Suivez une cible qui descend par paliers puis remonte"
    },
    "pt": {
      "name": "Rastreamento Ocular Vertical",
      "tagline": "Acompanhe um alvo que desce em degraus e volta a subir"
    }
  },
  "/drills/visual-tracking/strobe-prediction-pursuit": {
    "ja": {
      "name": "ストロボ視覚予測トレーニング",
      "tagline": "点滅して一時的に消える標的の軌道を予測しながら目で追う練習"
    },
    "ko": {
      "name": "스트로브 시각 예측 훈련",
      "tagline": "주기적으로 사라졌다 나타나는 표적의 궤적을 예측하며 따라가는 연습"
    },
    "de": {
      "name": "Stroboskop-Tracking: blinkendes Ziel verfolgen",
      "tagline": "Folge einem Ziel, das zyklisch verschwindet, und sage seine Bahn voraus"
    },
    "es": {
      "name": "Visión Estroboscópica y Predicción",
      "tagline": "Sigue un objetivo que desaparece por intervalos y anticipa su trayectoria"
    },
    "fr": {
      "name": "Poursuite stroboscopique : cible clignotante",
      "tagline": "Suivez une cible qui disparaît par intervalles et anticipez sa trajectoire"
    },
    "pt": {
      "name": "Treino de Visão Estroboscópica",
      "tagline": "Acompanhe um alvo que some por intervalos e antecipe sua trajetória"
    }
  },
  "/drills/visual-tracking/triangular-pursuit": {
    "ja": {
      "name": "三角形視線追従トレーニング",
      "tagline": "三角形の軌道を回る標的を目で追い、角での切り返しに慣れる練習"
    },
    "ko": {
      "name": "삼각형 시선 추적 훈련",
      "tagline": "삼각형 궤도를 도는 표적을 눈으로 따라가며 모서리 전환에 익숙해지는 연습"
    },
    "de": {
      "name": "Dreieckige Blickverfolgung",
      "tagline": "Folge einem Ziel auf einer Dreiecksbahn um alle drei Ecken"
    },
    "es": {
      "name": "Seguimiento visual triangular",
      "tagline": "Sigue con la vista un objetivo que recorre un triángulo"
    },
    "fr": {
      "name": "Poursuite visuelle triangulaire",
      "tagline": "Suivez des yeux une cible qui parcourt un triangle"
    },
    "pt": {
      "name": "Rastreamento visual triangular",
      "tagline": "Acompanhe com os olhos um alvo que percorre um triângulo"
    }
  },
  "/drills/visual-tracking/zig-zag-path-pursuit": {
    "ja": {
      "name": "ジグザグ視線追従トレーニング",
      "tagline": "上下にジグザグしながら左右へ往復する標的を目で追う練習"
    },
    "ko": {
      "name": "지그재그 시선 추적 훈련",
      "tagline": "위아래로 지그재그하며 좌우를 오가는 표적을 눈으로 따라가는 연습"
    },
    "de": {
      "name": "Zickzack-Blickverfolgung",
      "tagline": "Folge einem Ziel, das im Zickzack von links nach rechts und zurück läuft"
    },
    "es": {
      "name": "Seguimiento visual en zigzag",
      "tagline": "Sigue un objetivo que va en zigzag de izquierda a derecha y vuelve"
    },
    "fr": {
      "name": "Poursuite visuelle en zigzag",
      "tagline": "Suivez une cible qui zigzague de gauche à droite puis revient"
    },
    "pt": {
      "name": "Rastreamento visual em zigue-zague",
      "tagline": "Acompanhe um alvo que faz zigue-zague da esquerda à direita e volta"
    }
  },
  "/drills/cognitive/attention/concentration-stamina": {
    "ko": {
      "name": "집중력 테스트",
      "tagline": "45초 동안 바뀌는 규칙에 맞는 자극에만 반응하고 나머지는 참는 비임상 집중력 연습"
    },
    "ja": {
      "name": "集中力テスト",
      "tagline": "45秒間、切り替わるルールに合う刺激にだけ反応し、それ以外は見送る集中力の練習（医療目的ではありません）"
    },
    "de": {
      "name": "Konzentrationstest",
      "tagline": "45 Sekunden lang nur auf Vokale oder Primzahlen reagieren und den Rest ignorieren, während die Regel wechselt"
    },
    "es": {
      "name": "Test de concentración",
      "tagline": "Durante 45 segundos, responde solo a vocales o números primos e ignora el resto mientras cambia la regla"
    },
    "fr": {
      "name": "Test de concentration",
      "tagline": "Pendant 45 secondes, réagissez seulement aux voyelles ou aux nombres premiers et ignorez le reste quand la règle change"
    },
    "pt": {
      "name": "Teste de concentração",
      "tagline": "Durante 45 segundos, responda só a vogais ou números primos e ignore o resto enquanto a regra muda"
    }
  },
  "/drills/cognitive/attention/divided-attention": {
    "ko": {
      "name": "분할 주의력 테스트",
      "tagline": "나타나는 표적을 클릭하면서 숫자 흐름에서 짝수를 판정하는 무료 이중과제 훈련"
    },
    "ja": {
      "name": "注意分割テスト",
      "tagline": "現れるターゲットをクリックしながら、数字の流れから偶数を判定する無料の二重課題トレーニング"
    },
    "de": {
      "name": "Test der geteilten Aufmerksamkeit",
      "tagline": "Klicke auftauchende Ziele an und markiere gleichzeitig gerade Zahlen in einem zweiten Strom"
    },
    "es": {
      "name": "Test de atención dividida",
      "tagline": "Haz clic en los objetivos que aparecen mientras identificas los números pares en un segundo flujo"
    },
    "fr": {
      "name": "Test d'attention divisée",
      "tagline": "Cliquez les cibles qui apparaissent tout en repérant les nombres pairs dans un second flux"
    },
    "pt": {
      "name": "Teste de atenção dividida",
      "tagline": "Clique nos alvos que aparecem enquanto identifica os números pares em um segundo fluxo"
    }
  },
  "/drills/cognitive/attention/multi-tasking": {
    "ko": {
      "name": "멀티태스킹 테스트",
      "tagline": "두 갈래로 흐르는 도형 속에서 각 레인의 표적을 동시에 찾아 클릭하는 멀티태스킹 연습"
    },
    "ja": {
      "name": "マルチタスクテスト",
      "tagline": "左右2つのレーンを流れる図形から、それぞれのターゲットを同時に見つけてクリックするマルチタスク練習"
    },
    "de": {
      "name": "Multitasking-Test",
      "tagline": "Beobachte zwei Symbol-Ströme gleichzeitig und klicke in jeder Spur das jeweilige Zielsymbol an"
    },
    "es": {
      "name": "Test de multitarea",
      "tagline": "Vigila dos flujos de símbolos a la vez y haz clic en el objetivo de cada carril"
    },
    "fr": {
      "name": "Test de multitâche",
      "tagline": "Surveillez deux flux de symboles à la fois et cliquez la cible propre à chaque voie"
    },
    "pt": {
      "name": "Teste de multitarefa",
      "tagline": "Acompanhe dois fluxos de símbolos ao mesmo tempo e clique no alvo de cada faixa"
    }
  },
  "/drills/cognitive/processing-speed/reaction-time": {
    "ko": {
      "name": "선택 반응 시간 테스트",
      "tagline": "현재 색상 규칙에 맞는 표적을 골라 클릭하는 판단 속도 훈련, 규칙은 도중에 바뀝니다"
    },
    "ja": {
      "name": "選択反応時間テスト",
      "tagline": "その時の色ルールに合う標的を選んでクリックする判断速度トレーニング、ルールは途中で切り替わります"
    },
    "de": {
      "name": "Wahlreaktionstest",
      "tagline": "Klicke das Ziel, das zur aktiven Farbregel passt – die Regel wechselt während des Durchgangs"
    },
    "es": {
      "name": "Tiempo de reacción de elección",
      "tagline": "Haz clic en el objetivo que coincide con el color activo: la regla cambia durante la partida"
    },
    "fr": {
      "name": "Réaction de choix",
      "tagline": "Cliquez la cible qui correspond à la couleur active : la règle change en cours de partie"
    },
    "pt": {
      "name": "Tempo de reação de escolha",
      "tagline": "Clique no alvo que corresponde à cor ativa: a regra muda durante a partida"
    }
  },
  "/drills/cognitive/processing-speed/rsvp-reader": {
    "ko": {
      "name": "속독 테스트·속독 훈련",
      "tagline": "영어 지문의 단어가 한 지점에 빠르게 지나가는 동안 목표 단어가 나오면 누르는 RSVP 속독 연습"
    },
    "ja": {
      "name": "速読テスト",
      "tagline": "英文の単語が1点に高速表示される中で、指定された単語が出た瞬間にタップするRSVP速読練習"
    },
    "de": {
      "name": "Schnelllesetest",
      "tagline": "Englische Textwörter erscheinen an einem festen Punkt – tippe, sobald das Zielwort auftaucht"
    },
    "es": {
      "name": "Lectura rápida online",
      "tagline": "Las palabras de un texto en inglés pasan por un punto fijo: toca en cuanto aparezca la palabra objetivo"
    },
    "fr": {
      "name": "Lecture rapide en ligne",
      "tagline": "Les mots d'un texte anglais défilent à un point fixe : touchez dès que le mot cible apparaît"
    },
    "pt": {
      "name": "Leitura Dinâmica Online",
      "tagline": "Palavras de um texto em inglês passam num ponto fixo: toque assim que a palavra-alvo aparecer"
    }
  },
  "/drills/cognitive/processing-speed/symbol-matching": {
    "ko": {
      "name": "처리속도 테스트",
      "tagline": "표시된 기호에 맞는 숫자를 대응표에서 찾아 클릭하는 기호-숫자 매칭 연습"
    },
    "ja": {
      "name": "記号と数字の照合テスト",
      "tagline": "表示された記号に対応する数字を対応表から見つけてクリックする処理速度の練習"
    },
    "de": {
      "name": "Zahlen-Symbol-Test",
      "tagline": "Finde zum gezeigten Symbol die passende Ziffer im Schlüssel und klicke sie an"
    },
    "es": {
      "name": "Test de símbolos y dígitos",
      "tagline": "Encuentra en la clave el dígito que corresponde al símbolo mostrado y haz clic en él"
    },
    "fr": {
      "name": "Test SDMT symboles et chiffres",
      "tagline": "Trouvez dans la clé le chiffre qui correspond au symbole affiché et cliquez-le"
    },
    "pt": {
      "name": "Teste de símbolos e dígitos",
      "tagline": "Encontre na chave o dígito que corresponde ao símbolo mostrado e clique nele"
    }
  },
  "/drills/reaction-speed/barrier-sequence-pursuit": {
    "ko": {
      "name": "지글피킹 연습",
      "tagline": "무료 온라인 지글 피킹 및 각 홀딩 에임 훈련"
    },
    "ja": {
      "name": "ピーク反応練習",
      "tagline": "遮蔽物から出てくる的にすばやく反応してクリックする、無料のピーク反応トレーニング"
    },
    "de": {
      "name": "Peek-Training",
      "tagline": "Kostenloser Jiggle-Peek-Trainer online"
    },
    "es": {
      "name": "Entrenar el peek en FPS",
      "tagline": "Entrenador de jiggle peek y ángulos online gratis"
    },
    "fr": {
      "name": "Réaction au peek",
      "tagline": "Entraînement de jiggle peek et ligne défensive gratuit en ligne"
    },
    "pt": {
      "name": "Treino de mira para Valorant",
      "tagline": "Treino de jiggle peek e mira de espera online grátis"
    }
  },
  "/drills/reaction-speed/fps-tracking-trainer": {
    "ko": {
      "name": "트래킹 에임 연습",
      "tagline": "무료 온라인 트래킹 에임(따라가기 에임) 연습"
    },
    "ja": {
      "name": "動く的のエイム練習",
      "tagline": "無料のトラッキングエイム（追いエイム）練習ツール。動く標的への滑らかなマウス追従と視線追従を鍛え、エイムのブレやガタつきをブラウザで解消。"
    },
    "de": {
      "name": "Bewegliche Ziele treffen",
      "tagline": "Kostenloser FPS-Tracking-Trainer online"
    },
    "es": {
      "name": "Disparar a objetivos en movimiento",
      "tagline": "Entrenador de tracking FPS online y gratuito"
    },
    "fr": {
      "name": "Tir sur cible mobile",
      "tagline": "Entraîneur de tracking FPS gratuit en ligne"
    },
    "pt": {
      "name": "Acertar alvo em movimento",
      "tagline": "Treino de tracking FPS online e gratuito"
    }
  },
  "/drills/reaction-speed/market-doors-pursuit": {
    "ko": {
      "name": "각도 확인 에임 훈련",
      "tagline": "무료 각 지우기(파이 썰기) 및 코너 체킹 에임 훈련"
    },
    "ja": {
      "name": "索敵エイム練習",
      "tagline": "無料のクリアリング＆コーナーチェック訓練ツール。開口部や死角から出現する標的を瞬時に索敵・迎撃する反応速度と視覚走査能力をブラウザで測定・強化。"
    },
    "de": {
      "name": "Ecken checken trainieren",
      "tagline": "Kostenloser Corner-Checking-Trainer online"
    },
    "es": {
      "name": "Limpiar ángulos en FPS",
      "tagline": "Entrenador de limpieza de esquinas y ángulos online gratis"
    },
    "fr": {
      "name": "Vérifier les angles en FPS",
      "tagline": "Entraînement de prise d angle et nettoyage de coins gratuit en ligne"
    },
    "pt": {
      "name": "Treino de mira: checar ângulos",
      "tagline": "Treino de varredura de cantos e limpeza de ângulos online grátis"
    }
  },
  "/drills/reaction-speed/saccadic-gallery": {
    "ko": {
      "name": "시선 이동 훈련 게임",
      "tagline": "무료 온라인 단속성 안구운동 훈련"
    },
    "ja": {
      "name": "眼球運動トレーニング",
      "tagline": "無料のサッケード眼球運動トレーニング。ランダム点滅する標的へ瞬時に視線を飛ばし、跳躍性眼球運動の速度と着弾精度をブラウザで測定・強化。"
    },
    "de": {
      "name": "Augentraining: Blicksprünge",
      "tagline": "Kostenloses Sakkadentraining online"
    },
    "es": {
      "name": "Ejercicios sacádicos",
      "tagline": "Ejercicios sacádicos online gratis"
    },
    "fr": {
      "name": "Exercice de saccades oculaires",
      "tagline": "Exercices saccadiques gratuits en ligne"
    },
    "pt": {
      "name": "Exercícios sacádicos",
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
