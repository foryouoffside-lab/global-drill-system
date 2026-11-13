import SteadyHandClient from '@/app/drills/motor/precision-control/steady-hand/SteadyHandClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/steady-hand-2026-09-20.md
// ============================================================

export const metadata = {
  title: 'イライラ棒ゲーム｜マウス精度と手の安定性テスト | SkillDrills',
  description: '無料のイライラ棒ゲーム。光る細いコースからはみ出さずにカーソルをゴールまで運び、マウス精度と手の安定性をブラウザで練習。連続クリアでコースが複雑に。登録不要。',
  keywords: [
    'マウス精度テスト', 'カーソル精度', '手の安定性', 'イライラ棒',
    'マウス 軌跡 テスト', '微細運動', 'カーソル操作 練習',
    'イライラ棒ゲーム', 'マウス迷路', 'マウス操作 精度',
    '手ぶれ コントロール', '精密マウス操作',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'イライラ棒ゲーム｜マウス精度と手の安定性テスト | SkillDrills',
    description: '無料のイライラ棒ゲーム。光る細いコースからはみ出さずにカーソルをゴールまで運び、マウス精度と手の安定性をブラウザで練習。連続クリアでコースが複雑に。登録不要。',
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/motor/precision-control/steady-hand',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'イライラ棒ゲーム｜マウス精度と手の安定性テスト | SkillDrills',
    description: '無料のイライラ棒ゲーム。光る細いコースからはみ出さずにカーソルをゴールまで運び、マウス精度と手の安定性をブラウザで練習。連続クリアでコースが複雑に。登録不要。',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/motor/precision-control/steady-hand',
    languages: getAlternateLanguages('/drills/motor/precision-control/steady-hand'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: 'モータートレーニング', item: 'https://skilldrills.online/ja/drills/motor' },
    { '@type': 'ListItem', position: 3, name: '精度コントロール', item: 'https://skilldrills.online/ja/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: 'イライラ棒', item: 'https://skilldrills.online/ja/drills/motor/precision-control/steady-hand' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'ja-JP',
  name: 'イライラ棒ゲーム – マウス精度と手の安定性',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: 'ブラウザで遊べる無料のイライラ棒ゲーム。コース中心線から2.5ピクセル以上はみ出すとスタートに戻り、連続クリアするほど次のコースの曲がり角と振れ幅が増えます。',
  url: 'https://skilldrills.online/ja/drills/motor/precision-control/steady-hand',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ja' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'ja-JP',
  name: 'イライラ棒ゲーム オンライン',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 CanvasおよびPointer Lock APIに対応した最新のWebブラウザ',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  url: 'https://skilldrills.online/ja/drills/motor/precision-control/steady-hand',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'ja-JP',
  name: 'イライラ棒・ステディハンド精密マウス操作ゲーム',
  url: 'https://skilldrills.online/ja/drills/motor/precision-control/steady-hand',
  description: 'コースからはみ出さずにカーソルを進めるオンラインのイライラ棒ゲーム。微細なマウス操作と手の安定性を練習します。',
  genre: ['Precision Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  dateModified: '2026-11-09',
};


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'イライラ棒ゲームとは何ですか？どのような能力を練習できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'イライラ棒ゲームは、光る細いコースからはみ出さずにカーソルを左のスタート地帯から右のゴール地帯まで運ぶマウス精度ゲームです。反応速度ではなく、ゆっくり安定したカーソル操作と視覚フィードバックによる細かな軌道修正を練習します。スコアは45秒の持ち時間内にクリアした周回数です。',
      },
    },
    {
      '@type': 'Question',
      name: '狭い通路を移動する際のマウス操作はどのような科学法則に基づいていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '境界で制約された狭い通路を通過する運動時間は、ジョニー・アコットとシュミン・ジャイ（1997年）が提唱した「ステアリングの法則（Accot-Zhai Steering Law）」によって規定されます。ステアリング時間は通路の長さを通路幅で積分した値に比例するため、通路幅が半分になると接触せずに通過するために要する時間は数学的に約2倍になります。',
      },
    },
    {
      '@type': 'Question',
      name: '壁に触れるとカーソルがスタート地点に戻るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '本ドリルは毎フレーム、カーソルとコース中心線との距離を判定しています。スタート地帯とゴール地帯の間で中心線から2.5ピクセルを超えて離れると壁接触（ミス）となり、カーソルはスタート地点に戻され、壁接触回数が1増え、連続クリアが0になります。タイマーは止まりません。',
      },
    },
    {
      '@type': 'Question',
      name: '周回（ラップ）を重ねると難易度はどのように変化しますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '許容幅（中心線±2.5ピクセル）は最初から最後まで変わりません。変わるのはコースの形で、連続クリアが増えるほど次のコースの屈曲数（15から最大120）と上下の振れ幅が大きくなります。壁に触れると連続クリアが0に戻るため、次のコースは再び緩やかになります。ゴールするたびに持ち時間は45秒に戻ります。',
      },
    },
    {
      '@type': 'Question',
      name: 'マウス操作中に手が震える原因は何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '健康な人でも筋肉の運動単位の同期発火や四肢の機械的共振によって8〜12Hzの「生理的手振戦（手ブレ）」が生じます。マウスを過剰に強く握りしめる（拮抗筋の過緊張）、心理的プレッシャー、カフェイン摂取や疲労などによってこの振戦振幅が増大し、壁接触の原因となります。',
      },
    },
    {
      '@type': 'Question',
      name: 'イライラ棒に最適なマウスの持ち方やDPI設定はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '前腕のスムーズな滑りと指先による微細修正を両立できる、脱力したつまみ持ちまたは浅いつかみ持ちが推奨されます。DPIは400〜800 DPI程度の低〜中感度に設定することで、生理的微細振動によるカーソルの跳ねを物理的に軽減し、滑らかな閉ループ軌道追従が可能になります。',
      },
    },
    {
      '@type': 'Question',
      name: 'ウッドワースの二成分運動モデル（1899年）はイライラ棒にどう関係していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ロバート・ウッドワースの研究によれば、目標に向かう手の動きは最初の「初期弾道衝動」と、その後の視覚フィードバックによる「現在制御（Current Control）」で構成されます。イライラ棒では壁接触を回避するため、視覚で常に現在位置と壁の距離を確認しながら微修正を加える閉ループ現在制御が不可欠です。',
      },
    },
    {
      '@type': 'Question',
      name: 'イライラ棒の練習はゲームのエイムや精密作業に効果がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FPSのトラッキングエイムやデジタルイラストの線画ペン入れのように、狭い範囲でぶれずにポインターを動かす動作に近い練習になります。効果には個人差があります。',
      },
    },
    {
      '@type': 'Question',
      name: 'プレイ中の手の疲労を防ぐコツはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '肘を約90度に曲げてデスクに腕を安定させ、マウスソールを過度にデスクへ押し付けないことが重要です。コーナーの手前で意識的に息を吐いて肩の力を抜き、1セッションごとに手首のストレッチと60秒程度のインターバルを挟んでください。',
      },
    },
    {
      '@type': 'Question',
      name: 'トラックボールやタッチ操作でもプレイできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PCではポインターロックでマウスの移動量を読み取るため、マウスやトラックボールで操作できます。タッチ専用端末では指でドラッグして操作します。ペンタブレットは機種によって動作が異なる場合があります。記録は同じ機器同士で比べてください。',
      },
    },
  ],
};


const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
  name: 'イライラ棒でマウス精度と手ブレ抑制をトレーニングする手順',
  description: '周回ごとに複雑になるコースをぶれずに完走し、ステアリング効率を高めるための段階的プロトコル。',
  step: [
    {
      '@type': 'HowToStep',
      "position": 1,
      "url": "https://skilldrills.online/ja/drills/motor/precision-control/steady-hand#step-1",
      name: 'スタートゾーンにカーソルを配置',
      text: '「イライラ棒を開始」をクリックすると3秒のカウントダウン後、カーソルが左側のスタート地帯（グリーン領域）に置かれ、45秒タイマーが始まります。PCではポインターロックがかかり、Escで終了します。',
    },
    {
      '@type': 'HowToStep',
      "position": 2,
      "url": "https://skilldrills.online/ja/drills/motor/precision-control/steady-hand#step-2",
      name: '等速かつ滑らかな軌道でコースを進む',
      text: '光るグリーンのコースに沿ってカーソルを滑らせます。制限時間と壁接触リスクのバランスを取りながら、一定の速度で前進します。',
    },
    {
      '@type': 'HowToStep',
      "position": 3,
      "url": "https://skilldrills.online/ja/drills/motor/precision-control/steady-hand#step-3",
      name: 'ヘアピンコーナーでの事前減速と視線先読み',
      text: '急な屈曲部に差し掛かる直前に速度を約40%落とし、カーソルの20〜30px先を注視して視覚的フィードバック修正を間に合わせます。',
    },
    {
      '@type': 'HowToStep',
      "position": 4,
      "url": "https://skilldrills.online/ja/drills/motor/precision-control/steady-hand#step-4",
      name: 'ゴール到達で次の周回へ',
      text: '右側のゴール地帯に到達すると周回クリア。タイマーが45秒にリセットされ、連続クリアが増えるほど次のコースの屈曲と振れ幅が大きくなります。',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'woodworth1899', 'fitts1954', 'woods2015'),
  intro: {
    title: '手ブレと微細運動精度の測定方法と限界',
    paragraphs: [      'イライラ棒ゲームとは、コースからはみ出さないようにカーソルでたどってゴールを目指す、手の安定性を試すゲームです。このページでは連続クリアするほど曲がりくねるコースを、45秒の持ち時間内に何周クリアできるかでマウス精度と手の安定性を確認できます。',      '測定精度とディスプレイの特性について：本ドリルにおける時間計測はブラウザの performance.now() API（Spectre緩和策により約1ミリ秒分解能に制限）を用いています。また画面表示はディスプレイのリフレッシュレート（60Hzで約16.7ms、144Hzで約6.9ms、240Hzで約4.1ms）単位で量子化されます（Woods et al., 2015）。マウスのポーリングレート（125Hzで約8ms、1000Hzで約1msの遅延）も入力軌跡のサンプリング密度に影響します。約5ミリ秒未満の差は測定ノイズとして解釈し、他人の環境と比較するのではなく、同一デバイス上での自己記録の推移を追跡してください。スコアはお使いのブラウザ（LocalStorage）に保存されます。',
    ],
  },
  benchmark: {
    title: 'イライラ棒 SkillDrills練習目安',
    description: '研究上の基準値やユーザー統計ではなく、SkillDrillsの練習目安です。結果画面のランク判定（1セッションのクリア周回数と壁接触回数）と同じ基準です。',
    columns: ['ランク', '称号', 'クリア周回数', '壁接触', '区分'],
    rows: [
      { tier: 'S+', rank: '神業の安定性', stat: '8周以上', errors: '0回', band: 'SkillDrills練習目安' },
      { tier: 'S', rank: '達人級の操舵', stat: '6周以上', errors: '1回以下', band: 'SkillDrills練習目安' },
      { tier: 'A', rank: '精密コントロール', stat: '4周以上', errors: '2回以下', band: 'SkillDrills練習目安' },
      { tier: 'B', rank: '良好な安定性', stat: '2周以上', errors: '制限なし', band: 'SkillDrills練習目安' },
      { tier: 'C', rank: '基礎クリア', stat: '2周未満', errors: '制限なし', band: 'SkillDrills練習目安' },
    ],
  },
  protocols: {
    title: 'イライラ棒攻略と手ブレ抑制トレーニングプロトコル',
    description: '運動生理学およびヒューマンコンピュータインタラクション（HCI）モデルに基づく、手の震えを最小限に抑えステアリング通過効率を高める実践メソッド。',
    items: [
      {
        title: 'プロトコル1：Accot-Zhaiステアリング法則に基づく動的速度配分（トンネル幅ペーシング）',
        description: 'Accot & Zhai（1997）のステアリング法則が示す通り、制約されたトンネルを通過する所要時間は通路が細く長いほど延びます。緩やかな区間では速めに進んで持ち時間を稼ぎ、急に折れ曲がる区間の直前で意識的に速度を落とすメリハリのある速度制御を徹底してください。',
      },
      {
        title: 'プロトコル2：ウッドワースの現在制御を活かす視線先読み（フィードフォワード追従）',
        description: 'Robert S. Woodworth（1899）の二成分運動モデルに基づき、カーソルそのものではなくカーソルの約20〜30ピクセル前方へ視線を置きます。この先読みにより、視覚皮質が約150ミリ秒のフィードバック遅延を克服し、壁接触に至る前に微細な軌道修正衝動を筋肉へ伝達できます。',
      },
      {
        title: 'プロトコル3：生理的手振戦（8〜12Hz）の抑制と関節の機能分離',
        description: '大きなカーブ軌道は肘および前腕のスライドで描き、指先は微細なセンタリング修正のみに限定します。マウスを強く握りしめすぎると主動筋と拮抗筋の同時収縮が生じ、8〜12Hzの生理的振戦（手の震え）が増幅されて壁接触の原因となります。常に脱力を意識してください。',
      },
      {
        title: 'プロトコル4：急カーブでのコーナーアペックス（頂点）アプローチ',
        description: '連続クリアが増えて屈曲が細かくなったら、前進速度よりもコース中心線のキープを最優先します。カーブではわずかにイン側の頂点（エイペックス）寄りを狙うと、急転回でカーソルが外側に膨らむミスを減らせます。',
      },
    ],
  },
  faqs: {
    title: 'イライラ棒・マウス精度テストに関するよくある質問（FAQ）',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const jaCopy = {
  h1Keyword: 'イライラ棒ゲーム',
  h1Suffix: '（マウス精度・手の安定性）',
  subtitle: '光るコースからはみ出さずにゴールまでたどるマウス精度ゲーム',
  caption: 'イライラ棒ゲームは、光るコースから一度もはみ出さずにカーソルをゴールまで導くことで、反射速度ではなく微細運動の安定性を練習します。難易度はステアリングの法則（Accot & Zhai, 1997）に支配されており、通路の通過時間は長さを通路幅で割った値に比例します。中心線上をキープする動作は閉ループ課題であり、運動中も視覚が絶え間なく手の軌道を修正し続けます（Woodworth, 1899）。',
  statLaps: 'クリア周回数',
  statTime: '残り時間',
  statStreak: '連続クリア',
  statBest: '自己ベスト',
  pausedTitle: '一時停止中',
  pausedPrompt: '画面をクリックしてカーソルを固定し、再開してください。',
  startTitle: 'イライラ棒ゲーム',
  startSubtitle: '手の安定性とコース精度 • 45秒',
  startBtn: 'イライラ棒を開始',
  countdownSubtitle: 'コースに集中',
  newBest: '新記録達成',
  errorsLabel: '壁接触回数',
  maxStreakLabel: '最大連続周回',
  difficultyLabel: '到達レベル',
  trainAgain: 'もう一度挑戦',
  shareTitle: 'スコアをシェア',
  exitTitle: '終了して戻る',
  rulesTitle: '操作方法とスコア算出ルール',
  rulesItems: [
    { num: '1', text: '発光するエメラルド', highlight: '電撃コースを正確に追従', result: 'ゴール到達で45秒にリセット' },
    { num: '2', text: '周回クリア', highlight: '無限難易度上昇', result: '屈曲と振れ幅が増加' },
    { num: '3', text: '壁への接触', highlight: 'スタート地点へ即リセット', result: '連続クリア0＆接触+1' },
    { num: '4', text: 'マウス（ポインターロック）', highlight: 'タッチ対応', result: 'Escで終了' },
  ],
  rule1Text: '発光するエメラルド',
  rule1Highlight: '電撃コースを正確に追従',
  rule1Result: 'ゴール到達で45秒にリセット',
  rule2Text: '周回クリア',
  rule2Highlight: '無限難易度上昇',
  rule2Result: '屈曲と振れ幅が増加',
  rule3Text: '壁への接触',
  rule3Highlight: 'スタート地点へ即リセット',
  rule3Result: '連続クリア0＆接触+1',
  rule4Text: 'マウス（ポインターロック）',
  rule4Highlight: 'タッチ対応',
  rule4Result: 'Escで終了',
  aboutTitle: 'イライラ棒（Steady Hand Game）について',
  aboutHeading: '連続軌道の追従精度と手の震え（生理的手振戦）の抑制',
  aboutP1: 'イライラ棒ゲームは、手と目の協調性、微細な手指の運動制御、および滑らかなポインター追従の安定性を鍛える本格的トレーニングツールです。複雑にうねる細いコースからはみ出さずにカーソルを導く練習で、手首と前腕による細かなマウス操作を繰り返します。',
  aboutP2: 'Johnny Accot & Shumin Zhai（1997）による「ステアリングの法則」に基づき、幅の狭いトンネルの通過時間は通路の長さを幅で割った積分値に依存します。本ドリルの許容幅は中心線±2.5pxで一定ですが、連続クリアごとにコースが長く複雑になるため、視覚フィードバックによるリアルタイムの軌道修正（Woodworth 1899）と、余計な力みを抜いた操作が求められます。',
  aboutCard1Title: '対象ユーザー',
  aboutCard1Text: 'FPS・MOBAのゲーマー、デジタルイラストレーターなど、カーソルのぶれを減らして安定したマウス操作を練習したい方。',
  aboutCard2Title: '鍛えられる能力',
  aboutCard2Text: '微細運動協調性、手の静止安定性、コーナーでのスムーズな速度制御、および拮抗筋の過緊張防止。',
  aboutCard3Title: '連続クリアで複雑化するコース',
  aboutCard3Text: '許容幅（±2.5px）は一定のまま、連続クリアが増えるごとに次のコースの屈曲数と上下の振れ幅が大きくなります。',
  gradeLabels: {
    'S+': '神業の安定性 (Grandmaster)',
    'S': '達人級の操舵 (Master)',
    'A': '精密エイム (Diamond)',
    'B': '良好な安定性 (Platinum)',
    'C': '基礎クリア (Gold)',
  },
  shareDrillName: 'イライラ棒',
  shareUrl: 'https://skilldrills.online/ja/drills/motor/precision-control/steady-hand',
  shareTextTemplate: '🖐️ {drillName}で {laps} 周クリア（精度: {acc}）を達成！skilldrills.online で無料で挑戦できます！',
  copiedAlert: 'スコアがクリップボードにコピーされました！',
};

export default function JapaneseSteadyHandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <SteadyHandClient copy={jaCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
