const fps = {
  en: {
    drillsHeading: 'FPS aim drills',
    startCta: 'Start FPS Drill',
    domainsTitle: 'FPS Training Domains',
    drillOne: '{n} Drill',
    drillMany: '{n} Drills',
    domains: {
      clicking: { name: 'Precision Clicking', description: 'Target snapping, micro-corrections, and rapid single-shot precision clicking' },
      tracking: { name: 'Tracking & Smoothness', description: 'Continuous crosshair maintenance on evasive, accelerating, and aerial targets' },
      recoil: { name: 'Recoil & Angles', description: 'Pattern compensation, crosshair placement, and tactical angle holding' },
      reflex: { name: 'Reflex & Reaction', description: 'Simple and choice reaction speed, peripheral awareness, and rhythm flow' },
    },
    engineTitle: 'Engine & Hardware Optimization',
    engine: [
      { title: 'Pointer Lock Input', text: 'Locks the cursor inside the drill and reads relative mouse movement, so long flicks never stop at the screen edge. Your operating system pointer settings still apply.' },
      { title: 'High-Refresh Timing', text: 'Target motion is calculated from elapsed time, not frame count, so speed stays consistent on displays from 60 Hz up to 360 Hz.' },
      { title: 'One Sensitivity Setting', text: 'A single sensitivity slider applies to every mouse-aimed drill, so you calibrate once and keep the same feel between sessions.' },
    ],
  },
  ko: {
    drillsHeading: 'FPS 에임 연습 드릴',
    startCta: 'FPS 에임 연습 시작',
    domainsTitle: 'FPS 훈련 영역',
    drillOne: '{n}개 드릴',
    drillMany: '{n}개 드릴',
    domains: {
      clicking: { name: '정밀 클릭', description: '타깃 스냅, 미세 보정, 단발 정밀 클릭 훈련' },
      tracking: { name: '트래킹 & 부드러움', description: '회피·가속·공중 타깃에 크로스헤어를 계속 붙이는 훈련' },
      recoil: { name: '반동 제어 & 각도', description: '반동 패턴 보정, 크로스헤어 배치, 각도 홀딩' },
      reflex: { name: '반사신경 & 반응', description: '단순·선택 반응속도, 주변시, 리듬 흐름' },
    },
    engineTitle: '엔진 & 하드웨어 최적화',
    engine: [
      { title: '포인터 락 입력', text: '커서를 드릴 안에 고정하고 상대적인 마우스 이동량을 읽어, 큰 플릭도 화면 가장자리에서 멈추지 않습니다. 운영체제의 포인터 설정은 그대로 적용됩니다.' },
      { title: '고주사율 타이밍', text: '타깃 움직임을 프레임 수가 아니라 경과 시간으로 계산해, 60Hz부터 360Hz까지 속도가 일정하게 유지됩니다.' },
      { title: '단일 감도 설정', text: '하나의 감도 슬라이더가 마우스로 조준하는 모든 드릴에 적용되어, 한 번 맞추면 세션이 바뀌어도 같은 손맛을 유지할 수 있습니다.' },
    ],
  },
  ja: {
    drillsHeading: 'FPSエイム練習ドリル',
    startCta: 'FPSエイム練習を始める',
    domainsTitle: 'FPSトレーニング分野',
    drillOne: '{n}ドリル',
    drillMany: '{n}ドリル',
    domains: {
      clicking: { name: '精密クリック', description: 'ターゲットへのスナップ、微調整、単発の精密クリック' },
      tracking: { name: 'トラッキング・滑らかさ', description: '回避・加速・空中ターゲットに照準を合わせ続ける練習' },
      recoil: { name: 'リコイル・角度', description: 'リコイル補正、クロスヘア配置、角の保持' },
      reflex: { name: '反射神経・反応', description: '単純反応と選択反応、周辺視野、リズムの流れ' },
    },
    engineTitle: 'エンジンとハードウェアの最適化',
    engine: [
      { title: 'ポインターロック入力', text: 'カーソルをドリル内に固定して相対的なマウス移動量を読み取るため、大きなフリックでも画面端で止まりません。OSのポインター設定はそのまま適用されます。' },
      { title: '高リフレッシュレートのタイミング', text: '標的の動きをフレーム数ではなく経過時間で計算するので、60Hzから360Hzまで速度が一定です。' },
      { title: '共通の感度設定', text: 'ひとつの感度スライダーがマウスで狙うすべてのドリルに適用されるので、一度合わせれば毎回同じ感覚で練習できます。' },
    ],
  },
  de: {
    drillsHeading: 'FPS-Aim-Drills',
    startCta: 'FPS-Drill starten',
    domainsTitle: 'FPS-Trainingsbereiche',
    drillOne: '{n} Drill',
    drillMany: '{n} Drills',
    domains: {
      clicking: { name: 'Präzises Klicken', description: 'Zielwechsel, Mikrokorrekturen und schnelle Einzelschuss-Präzision' },
      tracking: { name: 'Tracking & Flüssigkeit', description: 'Das Fadenkreuz dauerhaft auf ausweichenden, beschleunigenden und fliegenden Zielen halten' },
      recoil: { name: 'Rückstoß & Winkel', description: 'Spray-Kompensation, Fadenkreuz-Platzierung und taktisches Winkelhalten' },
      reflex: { name: 'Reflex & Reaktion', description: 'Einfache und Wahl-Reaktionszeit, periphere Wahrnehmung und Rhythmus' },
    },
    engineTitle: 'Engine & Hardware-Optimierung',
    engine: [
      { title: 'Pointer-Lock-Eingabe', text: 'Der Mauszeiger bleibt im Drill gefangen und es werden relative Mausbewegungen gelesen, sodass lange Flicks nie am Bildschirmrand enden. Die Zeigereinstellungen Ihres Betriebssystems gelten weiterhin.' },
      { title: 'Timing für hohe Bildwiederholraten', text: 'Die Zielbewegung wird aus der verstrichenen Zeit statt aus der Bildzahl berechnet und bleibt von 60 Hz bis 360 Hz konsistent.' },
      { title: 'Eine Empfindlichkeitseinstellung', text: 'Ein einziger Empfindlichkeitsregler gilt für jeden mausgesteuerten Drill: einmal kalibrieren und in allen Sitzungen dasselbe Gefühl behalten.' },
    ],
  },
  pt: {
    drillsHeading: 'Treinos de mira FPS',
    startCta: 'Iniciar treino FPS',
    domainsTitle: 'Áreas de treino FPS',
    drillOne: '{n} treino',
    drillMany: '{n} treinos',
    domains: {
      clicking: { name: 'Cliques de precisão', description: 'Troca rápida de alvo, microajustes e cliques precisos de tiro único' },
      tracking: { name: 'Tracking e fluidez', description: 'Manter a mira em alvos evasivos, acelerados e aéreos' },
      recoil: { name: 'Recuo e ângulos', description: 'Compensação de padrão, posicionamento da mira e controle de ângulos' },
      reflex: { name: 'Reflexo e reação', description: 'Reação simples e de escolha, visão periférica e fluxo de ritmo' },
    },
    engineTitle: 'Engine e otimização de hardware',
    engine: [
      { title: 'Entrada com Pointer Lock', text: 'Prende o cursor dentro do treino e lê o movimento relativo do mouse, então flicks longos não param na borda da tela. As configurações de ponteiro do sistema operacional continuam valendo.' },
      { title: 'Tempo para alta taxa de atualização', text: 'O movimento dos alvos é calculado pelo tempo decorrido, e não pela contagem de quadros, mantendo a velocidade consistente de 60 Hz a 360 Hz.' },
      { title: 'Uma única sensibilidade', text: 'Um único controle de sensibilidade vale para todos os treinos controlados com o mouse: você calibra uma vez e mantém a mesma sensação entre as sessões.' },
    ],
  },
  es: {
    drillsHeading: 'Ejercicios de puntería FPS',
    startCta: 'Empezar ejercicio FPS',
    domainsTitle: 'Áreas de entrenamiento FPS',
    drillOne: '{n} ejercicio',
    drillMany: '{n} ejercicios',
    domains: {
      clicking: { name: 'Clics de precisión', description: 'Cambio rápido de objetivo, microcorrecciones y clics precisos de un solo disparo' },
      tracking: { name: 'Seguimiento y fluidez', description: 'Mantener la mira sobre objetivos evasivos, acelerados y aéreos' },
      recoil: { name: 'Retroceso y ángulos', description: 'Compensación del patrón, colocación de la mira y control de ángulos' },
      reflex: { name: 'Reflejos y reacción', description: 'Reacción simple y de elección, visión periférica y ritmo' },
    },
    engineTitle: 'Motor y optimización de hardware',
    engine: [
      { title: 'Entrada con Pointer Lock', text: 'Bloquea el cursor dentro del ejercicio y lee el movimiento relativo del ratón, así que los flicks largos no se detienen en el borde de la pantalla. Los ajustes de puntero de tu sistema operativo siguen aplicándose.' },
      { title: 'Temporización para alta frecuencia de refresco', text: 'El movimiento de los objetivos se calcula con el tiempo transcurrido y no con los fotogramas, y se mantiene constante de 60 Hz a 360 Hz.' },
      { title: 'Un único ajuste de sensibilidad', text: 'Un solo control de sensibilidad se aplica a todos los ejercicios con ratón: lo calibras una vez y mantienes la misma sensación entre sesiones.' },
    ],
  },
  fr: {
    drillsHeading: 'Exercices de visée FPS',
    startCta: 'Lancer un exercice FPS',
    domainsTitle: "Domaines d'entraînement FPS",
    drillOne: '{n} exercice',
    drillMany: '{n} exercices',
    domains: {
      clicking: { name: 'Clics de précision', description: 'Accrochage de cible, micro-corrections et clic précis en un tir' },
      tracking: { name: 'Suivi et fluidité', description: 'Garder le réticule sur des cibles évasives, accélérées et aériennes' },
      recoil: { name: 'Recul et angles', description: "Compensation du pattern, placement du réticule et tenue d'angle" },
      reflex: { name: 'Réflexes et réaction', description: 'Réaction simple et de choix, vision périphérique et rythme' },
    },
    engineTitle: 'Moteur et optimisation matérielle',
    engine: [
      { title: 'Entrée Pointer Lock', text: "Verrouille le curseur dans l'exercice et lit le mouvement relatif de la souris : un long flick ne s'arrête pas au bord de l'écran. Les réglages de pointeur de votre système restent appliqués." },
      { title: 'Timing pour écrans haute fréquence', text: "Le mouvement des cibles est calculé à partir du temps écoulé et non du nombre d'images ; la vitesse reste cohérente de 60 Hz à 360 Hz." },
      { title: 'Un seul réglage de sensibilité', text: "Un seul curseur de sensibilité s'applique à tous les exercices à la souris : vous le calibrez une fois et gardez le même ressenti d'une session à l'autre." },
    ],
  },
};

const visualTracking = {
  en: {
    domainsTitle: 'Tracking Domains',
    drillOne: '{n} Drill',
    drillMany: '{n} Drills',
    domains: {
      'smooth-pursuit': { name: 'Continuous Smooth Pursuit', description: 'Practise following a predictable moving point while keeping posture and viewing comfort stable' },
      'chaotic-tracking': { name: 'Chaotic & Evasive Tracking', description: 'Practise re-acquiring a moving point after controlled direction and speed changes' },
      'predictive-pursuit': { name: 'Predictive & Multi-Vector', description: 'Practise visual prediction and divided attention with clearly labelled browser tasks' },
    },
    engineTitle: 'Engine & Hardware Optimization',
    engine: [
      { title: 'Decoupled Physics Engine', text: 'Advances target motion from elapsed time, so a busy frame changes the next position instead of changing the intended path speed.' },
      { title: 'Sub-Pixel Vector Smoothing', text: 'Sub-pixel coordinates and a single canvas keep the moving point continuous without creating a large DOM tree or per-frame React updates.' },
      { title: '360Hz Display Calibration', text: 'The loop is capped at a predictable render budget and skips redundant high-refresh callbacks to leave CPU time for the browser and input.' },
    ],
  },
  ko: {
    domainsTitle: '시각 추적 영역',
    drillOne: '{n}개 드릴',
    drillMany: '{n}개 드릴',
    domains: {
      'smooth-pursuit': { name: '연속 부드러운 추적', description: '자세와 시야 편안함을 유지하면서 예측 가능한 움직이는 점을 따라가는 연습' },
      'chaotic-tracking': { name: '불규칙·회피 추적', description: '방향과 속도가 통제된 상태로 바뀐 뒤 움직이는 점을 다시 찾는 연습' },
      'predictive-pursuit': { name: '예측·다중 벡터', description: '명확하게 표시된 브라우저 과제로 시각 예측과 분할 주의를 연습' },
    },
    engineTitle: '엔진 & 하드웨어 최적화',
    engine: [
      { title: '프레임 독립 물리 엔진', text: '타깃 움직임을 경과 시간으로 진행시켜, 프레임이 밀려도 의도한 경로 속도가 아니라 다음 위치만 달라집니다.' },
      { title: '서브픽셀 벡터 보정', text: '서브픽셀 좌표와 단일 캔버스로 큰 DOM 트리나 프레임마다의 React 업데이트 없이 움직이는 점을 끊김 없이 이어 줍니다.' },
      { title: '360Hz 디스플레이 보정', text: '루프를 예측 가능한 렌더링 예산으로 제한하고 중복된 고주사율 콜백을 건너뛰어, 브라우저와 입력에 CPU 시간을 남깁니다.' },
    ],
  },
  ja: {
    domainsTitle: '視覚追跡の分野',
    drillOne: '{n}ドリル',
    drillMany: '{n}ドリル',
    domains: {
      'smooth-pursuit': { name: '連続スムーズ追従', description: '姿勢と見やすさを保ちながら、予測できる動く点を追う練習' },
      'chaotic-tracking': { name: '不規則・回避追跡', description: '方向や速度が制御された形で変わったあと、動く点を再び捉える練習' },
      'predictive-pursuit': { name: '予測・マルチベクトル', description: 'はっきり表示されたブラウザ課題で、視覚的予測と分割注意を練習' },
    },
    engineTitle: 'エンジンとハードウェアの最適化',
    engine: [
      { title: 'フレーム非依存の物理エンジン', text: '標的の動きを経過時間で進めるため、処理が重いフレームがあっても変わるのは次の位置だけで、意図した経路の速さは変わりません。' },
      { title: 'サブピクセル・ベクトル補正', text: 'サブピクセル座標と単一のキャンバスで、大きなDOMツリーやフレームごとのReact更新を使わずに動く点を滑らかに保ちます。' },
      { title: '360Hzディスプレイ対応', text: 'ループを予測可能な描画予算に抑え、重複する高リフレッシュレートのコールバックを省いて、ブラウザと入力にCPU時間を残します。' },
    ],
  },
  de: {
    domainsTitle: 'Tracking-Bereiche',
    drillOne: '{n} Drill',
    drillMany: '{n} Drills',
    domains: {
      'smooth-pursuit': { name: 'Kontinuierliche Folgebewegung', description: 'Einem vorhersehbaren bewegten Punkt folgen und dabei Haltung und Sehkomfort stabil halten' },
      'chaotic-tracking': { name: 'Chaotisches & ausweichendes Tracking', description: 'Einen bewegten Punkt nach kontrollierten Richtungs- und Tempowechseln erneut erfassen' },
      'predictive-pursuit': { name: 'Prädiktiv & Multi-Vektor', description: 'Visuelle Vorhersage und geteilte Aufmerksamkeit mit klar beschriebenen Browser-Aufgaben üben' },
    },
    engineTitle: 'Engine & Hardware-Optimierung',
    engine: [
      { title: 'Entkoppelte Physik-Engine', text: 'Die Zielbewegung wird aus der verstrichenen Zeit fortgeschrieben: Ein stark ausgelasteter Frame verschiebt die nächste Position, statt die beabsichtigte Bahngeschwindigkeit zu verändern.' },
      { title: 'Sub-Pixel-Vektorglättung', text: 'Sub-Pixel-Koordinaten und ein einzelnes Canvas halten den bewegten Punkt kontinuierlich, ohne großen DOM-Baum und ohne React-Updates pro Frame.' },
      { title: '360-Hz-Display-Kalibrierung', text: 'Die Schleife ist auf ein vorhersehbares Render-Budget begrenzt und überspringt überflüssige Callbacks bei hohen Bildraten, damit CPU-Zeit für Browser und Eingabe bleibt.' },
    ],
  },
  pt: {
    domainsTitle: 'Áreas de rastreamento',
    drillOne: '{n} treino',
    drillMany: '{n} treinos',
    domains: {
      'smooth-pursuit': { name: 'Perseguição suave contínua', description: 'Seguir um ponto em movimento previsível mantendo postura e conforto visual estáveis' },
      'chaotic-tracking': { name: 'Rastreamento caótico e evasivo', description: 'Reencontrar um ponto em movimento após mudanças controladas de direção e velocidade' },
      'predictive-pursuit': { name: 'Preditivo e multivetor', description: 'Praticar previsão visual e atenção dividida com tarefas de navegador claramente descritas' },
    },
    engineTitle: 'Engine e otimização de hardware',
    engine: [
      { title: 'Motor de física desacoplado', text: 'O movimento dos alvos avança pelo tempo decorrido; um quadro pesado altera a próxima posição, e não a velocidade pretendida da trajetória.' },
      { title: 'Suavização vetorial em subpixel', text: 'Coordenadas em subpixel e um único canvas mantêm o ponto contínuo, sem uma árvore DOM grande nem atualizações do React a cada quadro.' },
      { title: 'Calibração para monitores de 360 Hz', text: 'O laço usa um orçamento de renderização previsível e ignora callbacks redundantes de alta taxa de atualização, deixando tempo de CPU para o navegador e a entrada.' },
    ],
  },
  es: {
    domainsTitle: 'Áreas de seguimiento',
    drillOne: '{n} ejercicio',
    drillMany: '{n} ejercicios',
    domains: {
      'smooth-pursuit': { name: 'Seguimiento suave continuo', description: 'Seguir un punto en movimiento predecible manteniendo estables la postura y la comodidad visual' },
      'chaotic-tracking': { name: 'Seguimiento caótico y evasivo', description: 'Volver a localizar un punto en movimiento tras cambios controlados de dirección y velocidad' },
      'predictive-pursuit': { name: 'Predictivo y multivector', description: 'Practicar predicción visual y atención dividida con tareas de navegador claramente descritas' },
    },
    engineTitle: 'Motor y optimización de hardware',
    engine: [
      { title: 'Motor de física desacoplado', text: 'El movimiento de los objetivos avanza con el tiempo transcurrido: un fotograma cargado cambia la siguiente posición, no la velocidad prevista de la trayectoria.' },
      { title: 'Suavizado vectorial a nivel de subpíxel', text: 'Las coordenadas subpíxel y un único canvas mantienen el punto continuo sin un árbol DOM grande ni actualizaciones de React en cada fotograma.' },
      { title: 'Calibración para pantallas de 360 Hz', text: 'El bucle se limita a un presupuesto de renderizado predecible y omite callbacks redundantes de alta frecuencia, dejando tiempo de CPU al navegador y a la entrada.' },
    ],
  },
  fr: {
    domainsTitle: 'Domaines de suivi',
    drillOne: '{n} exercice',
    drillMany: '{n} exercices',
    domains: {
      'smooth-pursuit': { name: 'Poursuite lisse continue', description: 'Suivre un point mobile prévisible en gardant une posture et un confort visuel stables' },
      'chaotic-tracking': { name: 'Suivi chaotique et évasif', description: 'Retrouver un point mobile après des changements de direction et de vitesse contrôlés' },
      'predictive-pursuit': { name: 'Prédictif et multi-vecteur', description: "Pratiquer la prédiction visuelle et l'attention partagée avec des tâches de navigateur clairement décrites" },
    },
    engineTitle: 'Moteur et optimisation matérielle',
    engine: [
      { title: 'Moteur physique découplé', text: "Le mouvement des cibles avance selon le temps écoulé : une image chargée modifie la position suivante, pas la vitesse prévue de la trajectoire." },
      { title: 'Lissage vectoriel au sous-pixel', text: "Des coordonnées au sous-pixel et un seul canvas gardent le point continu, sans grand arbre DOM ni mise à jour React à chaque image." },
      { title: 'Calibration pour écrans 360 Hz', text: "La boucle est plafonnée à un budget de rendu prévisible et ignore les callbacks redondants à haute fréquence, pour laisser du temps CPU au navigateur et à l'entrée." },
    ],
  },
};

const cognitive = {
  en: {
    drillsHeading: 'Cognitive drills',
    domainsTitle: 'Cognitive Training Domains',
    drillOne: '{n} Drill',
    drillMany: '{n} Drills',
    domains: {
      focus: { name: 'Focus & Inhibition', description: 'Train selective focus, suppress distractions, and master inhibitory control' },
      'processing-speed': { name: 'Processing Speed', description: 'Accelerate visual identification, rapid recognition, and decision speed' },
      attention: { name: 'Attention & Task Switching', description: 'Enhance divided attention, multi-tasking, and vigilance endurance' },
    },
    engineTitle: 'Engine & Hardware Optimization',
    engine: [
      { title: 'High-Resolution Stimulus Timers', text: "Stimulus onset and response times are read from the browser's high-resolution timer (performance.now). Display refresh and input hardware still limit accuracy, so compare sessions on the same device." },
      { title: 'Dynamic Interference Engine', text: 'Stroop and distractor-conflict drills get harder as your streak grows, keeping selective attention under load.' },
      { title: 'Local Score Storage', text: 'Accuracy and stamina results are stored locally in your browser and are not sent to a server.' },
    ],
  },
  ko: {
    drillsHeading: '인지 훈련 드릴',
    domainsTitle: '인지 훈련 영역',
    drillOne: '{n}개 드릴',
    drillMany: '{n}개 드릴',
    domains: {
      focus: { name: '집중력 & 억제 제어', description: '선택적 집중을 높이고 방해 요소를 억제하며 충동 제어를 훈련' },
      'processing-speed': { name: '처리 속도', description: '시각 식별, 빠른 인식, 판단 속도를 끌어올리는 훈련' },
      attention: { name: '주의력 & 과제 전환', description: '분할 주의, 멀티태스킹, 지속적 경계 능력을 강화' },
    },
    engineTitle: '엔진 & 하드웨어 최적화',
    engine: [
      { title: '고해상도 자극 타이머', text: '자극 제시와 반응 시간은 브라우저의 고해상도 타이머(performance.now)로 읽습니다. 모니터 주사율과 입력 장치가 정확도의 한계가 되므로, 같은 기기에서 세션을 비교하세요.' },
      { title: '동적 간섭 엔진', text: '스트룹과 방해 자극 충돌 과제는 연속 정답이 쌓일수록 난이도가 올라가 선택적 주의에 계속 부하를 줍니다.' },
      { title: '점수 로컬 저장', text: '정확도와 지구력 결과는 브라우저에 로컬로 저장되며 서버로 전송되지 않습니다.' },
    ],
  },
  ja: {
    drillsHeading: '認知トレーニングドリル',
    domainsTitle: '認知トレーニング分野',
    drillOne: '{n}ドリル',
    drillMany: '{n}ドリル',
    domains: {
      focus: { name: '集中力・抑制', description: '選択的注意を高め、邪魔な刺激を抑えて抑制制御を鍛える' },
      'processing-speed': { name: '処理速度', description: '視覚的な識別、素早い認識、判断の速さを高める' },
      attention: { name: '注意・タスク切り替え', description: '分割注意、マルチタスク、警戒の持久力を強化する' },
    },
    engineTitle: 'エンジンとハードウェアの最適化',
    engine: [
      { title: '高分解能の刺激タイマー', text: '刺激の提示と反応時間はブラウザの高分解能タイマー（performance.now）で計測します。ディスプレイのリフレッシュレートや入力機器が精度の限界になるため、同じ端末でセッションを比べてください。' },
      { title: '動的干渉エンジン', text: 'ストループや妨害刺激の課題は、連続正解が増えるほど難易度が上がり、選択的注意に負荷をかけ続けます。' },
      { title: 'スコアのローカル保存', text: '正答率や持久力の結果はブラウザ内に保存され、サーバーには送信されません。' },
    ],
  },
  de: {
    drillsHeading: 'Kognitive Drills',
    domainsTitle: 'Kognitive Trainingsbereiche',
    drillOne: '{n} Drill',
    drillMany: '{n} Drills',
    domains: {
      focus: { name: 'Fokus & Inhibition', description: 'Selektive Aufmerksamkeit schärfen, Ablenkungen unterdrücken und Impulskontrolle trainieren' },
      'processing-speed': { name: 'Verarbeitungsgeschwindigkeit', description: 'Visuelle Identifikation, schnelles Erkennen und Entscheidungstempo steigern' },
      attention: { name: 'Aufmerksamkeit & Aufgabenwechsel', description: 'Geteilte Aufmerksamkeit, Multitasking und Vigilanz-Ausdauer stärken' },
    },
    engineTitle: 'Engine & Hardware-Optimierung',
    engine: [
      { title: 'Hochauflösende Reiz-Timer', text: 'Reizbeginn und Reaktionszeiten werden mit dem hochauflösenden Timer des Browsers (performance.now) gemessen. Bildwiederholrate und Eingabegerät begrenzen die Genauigkeit weiterhin; vergleichen Sie Sitzungen daher auf demselben Gerät.' },
      { title: 'Dynamische Interferenz-Engine', text: 'Stroop- und Ablenkungs-Konfliktaufgaben werden mit wachsender Serie schwieriger und halten die selektive Aufmerksamkeit unter Last.' },
      { title: 'Lokale Ergebnisspeicherung', text: 'Genauigkeits- und Ausdauerergebnisse werden lokal im Browser gespeichert und nicht an einen Server gesendet.' },
    ],
  },
  pt: {
    drillsHeading: 'Treinos cognitivos',
    domainsTitle: 'Áreas de treino cognitivo',
    drillOne: '{n} treino',
    drillMany: '{n} treinos',
    domains: {
      focus: { name: 'Foco e inibição', description: 'Treine a atenção seletiva, suprima distrações e domine o controle inibitório' },
      'processing-speed': { name: 'Velocidade de processamento', description: 'Acelere a identificação visual, o reconhecimento rápido e a velocidade de decisão' },
      attention: { name: 'Atenção e troca de tarefas', description: 'Fortaleça a atenção dividida, o multitasking e a resistência de vigilância' },
    },
    engineTitle: 'Engine e otimização de hardware',
    engine: [
      { title: 'Temporizadores de estímulo de alta resolução', text: 'O início do estímulo e os tempos de resposta são lidos do temporizador de alta resolução do navegador (performance.now). A taxa de atualização da tela e o dispositivo de entrada ainda limitam a precisão; compare sessões no mesmo dispositivo.' },
      { title: 'Motor de interferência dinâmica', text: 'As tarefas de Stroop e de conflito com distratores ficam mais difíceis conforme sua sequência de acertos cresce, mantendo a atenção seletiva sob carga.' },
      { title: 'Armazenamento local de resultados', text: 'Os resultados de precisão e resistência ficam salvos localmente no navegador e não são enviados a um servidor.' },
    ],
  },
  es: {
    drillsHeading: 'Ejercicios cognitivos',
    domainsTitle: 'Áreas de entrenamiento cognitivo',
    drillOne: '{n} ejercicio',
    drillMany: '{n} ejercicios',
    domains: {
      focus: { name: 'Enfoque e inhibición', description: 'Entrena la atención selectiva, suprime distracciones y domina el control inhibitorio' },
      'processing-speed': { name: 'Velocidad de procesamiento', description: 'Acelera la identificación visual, el reconocimiento rápido y la velocidad de decisión' },
      attention: { name: 'Atención y cambio de tarea', description: 'Mejora la atención dividida, la multitarea y la resistencia de vigilancia' },
    },
    engineTitle: 'Motor y optimización de hardware',
    engine: [
      { title: 'Temporizadores de estímulo de alta resolución', text: 'El inicio del estímulo y los tiempos de respuesta se leen del temporizador de alta resolución del navegador (performance.now). La frecuencia de refresco y el dispositivo de entrada siguen limitando la precisión; compara sesiones en el mismo dispositivo.' },
      { title: 'Motor de interferencia dinámica', text: 'Las tareas de Stroop y de conflicto con distractores se vuelven más difíciles a medida que crece tu racha, y mantienen la atención selectiva bajo carga.' },
      { title: 'Almacenamiento local de resultados', text: 'Los resultados de precisión y resistencia se guardan localmente en el navegador y no se envían a ningún servidor.' },
    ],
  },
  fr: {
    drillsHeading: 'Exercices cognitifs',
    domainsTitle: "Domaines d'entraînement cognitif",
    drillOne: '{n} exercice',
    drillMany: '{n} exercices',
    domains: {
      focus: { name: 'Concentration et inhibition', description: "Entraînez l'attention sélective, supprimez les distractions et maîtrisez le contrôle inhibiteur" },
      'processing-speed': { name: 'Vitesse de traitement', description: "Accélérez l'identification visuelle, la reconnaissance rapide et la vitesse de décision" },
      attention: { name: 'Attention et changement de tâche', description: "Renforcez l'attention partagée, le multitâche et l'endurance de vigilance" },
    },
    engineTitle: 'Moteur et optimisation matérielle',
    engine: [
      { title: 'Minuteurs de stimulus haute résolution', text: "Le début du stimulus et les temps de réponse sont lus sur le minuteur haute résolution du navigateur (performance.now). La fréquence d'écran et le périphérique d'entrée limitent toujours la précision : comparez vos sessions sur le même appareil." },
      { title: "Moteur d'interférence dynamique", text: "Les tâches de Stroop et de conflit avec distracteurs deviennent plus difficiles à mesure que votre série progresse et gardent l'attention sélective sous charge." },
      { title: 'Stockage local des résultats', text: "Les résultats de précision et d'endurance sont enregistrés localement dans le navigateur et ne sont pas envoyés à un serveur." },
    ],
  },
};

const HUBS = { fps, 'visual-tracking': visualTracking, cognitive };

export const getHubCopy = (hub, locale) => HUBS[hub][locale] || HUBS[hub].en;

export const drillCountLabel = (copy, count) => (count === 1 ? copy.drillOne : copy.drillMany).replace('{n}', count);
