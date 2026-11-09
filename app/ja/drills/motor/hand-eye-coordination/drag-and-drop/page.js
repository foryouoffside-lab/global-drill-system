import DragAndDropClient from '@/app/drills/motor/hand-eye-coordination/drag-and-drop/DragAndDropClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'ドラッグ＆ドロップ練習｜マウス操作テスト | SkillDrills',
  description: '無料のドラッグ＆ドロップ練習。45秒間、ボールをマウスでつかんで動く枠の中で離すマウス ドラッグ 練習ゲームです。精度・コンボ・到達レベルを記録します。',
  keywords: [
    'ドラッグ＆ドロップ練習', 'マウス ドラッグ 練習', 'ドラッグ 練習 ゲーム', 'ドラッグ アンド ドロップ 練習',
    'マウス操作テスト', 'ドラッグ精度テスト', 'マウス操作 練習',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'ドラッグ＆ドロップ練習｜マウス操作テスト | SkillDrills',
    description: '無料のドラッグ＆ドロップ練習。45秒間、ボールをマウスでつかんで動く枠の中で離すマウス ドラッグ 練習ゲームです。精度・コンボ・到達レベルを記録します。',
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'ドラッグ＆ドロップ練習｜マウス操作テスト | SkillDrills',
    description: '無料のドラッグ＆ドロップ練習。45秒間、ボールをマウスでつかんで動く枠の中で離すマウス ドラッグ 練習ゲームです。精度・コンボ・到達レベルを記録します。',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/drag-and-drop'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'SkillDrills トップ',
      item: 'https://skilldrills.online/ja',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '運動神経トレーニング',
      item: 'https://skilldrills.online/ja/drills/motor',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: '手と目の協調性',
      item: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'ドラッグ＆ドロップ練習',
      item: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Drag_and_drop", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'ドラッグ＆ドロップ練習・マウス精度測定ツール',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: 'ブラウザで動くドラッグ＆ドロップ練習。ボールをつかんで運び、動く円形の枠の中で離すマウス操作ドリル。',
  url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ドラッグ＆ドロップマウストレーナー',
  browserRequirements: 'HTML5 CanvasおよびJavaScript対応ブラウザ',
  url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'ドラッグ＆ドロップマウストレーニングゲーム',
  url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop',
  description: 'オブジェクトを長押しして素早く運び、移動目標枠に正確に落とすマウススキル向上ゲーム。',
  genre: ['精度ゲーム', 'アクション', 'eスポーツトレーニング'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'ja-JP',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ドラッグ＆ドロップ練習（Drag and Drop Test）とは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '45秒間、画面のボールをマウスの左ボタンでつかんで運び、動き回る円形の枠の中で離すマウス ドラッグ 練習です。運ぶ動作、枠の手前での減速、離すタイミングを練習し、結果画面にスコア・精度（成功ドロップの割合）・ドロップ数・最大コンボ・到達レベルが表示されます。',
      },
    },
    {
      '@type': 'Question',
      name: '通常のマウスクリックとドラッグ操作の運動学的な違いは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '通常クリックは瞬時の一打点運動ですが、ドラッグ操作は人差し指の等尺性筋緊張を維持したまま、手首と前腕を協調させてカーソルを誘導する持続的な運動制御が要求されます。',
      },
    },
    {
      '@type': 'Question',
      name: 'マッケンジーらの研究（MacKenzie et al., 1991）におけるドラッグの知見は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '同じ装置で同じターゲットを指すだけの場合と比べ、ドラッグは明らかに遅く、エラーも多いことが示されました。ボタンを押したまま動かすことで指や手首の微調整が制約されるためと考えられています。',
      },
    },
    {
      '@type': 'Question',
      name: 'アコットとチャイの操縦の法則（Accot & Zhai, 1997）とは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '限られた幅の通路をポインターで通過する所要時間は「通路の長さ÷幅」に比例するという法則です。幅が半分になると、はみ出さずに通るにはおよそ2倍の時間がかかります。ドラッグで軌道を外れないよう視覚で修正し続ける動作に当てはまります。',
      },
    },
    {
      '@type': 'Question',
      name: 'ドラッグ操作の速度と精度を高めるためのフォームは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'スイッチを押す指の力を最小限にとどめ、手首や前腕の脱力を意識します。過度に力を入れるとパッドとの摩擦が増加し、微細なエイム制御が乱れます。',
      },
    },
    {
      '@type': 'Question',
      name: 'ドロップ目標ゾーンに正確に入れるためのタイミングは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '枠の現在位置ではなく進む方向を予測し、少し手前から減速して、ボールの中心が円形の枠の中に入った状態でボタンを離します。枠の外で離すとミス扱いになり、コンボがリセットされます。',
      },
    },
    {
      '@type': 'Question',
      name: 'このトレーニングはどのようなゲームや作業に役立ちますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RTSやMOBAにおけるユニットの範囲指定枠操作、バトロワFPS（Apex Legends等）での高速デスボックス漁りやアーマースワップ、動画編集ソフトのタイムライン操作に役立つ可能性があります。',
      },
    },
    {
      '@type': 'Question',
      name: 'レベル上昇に伴いどのような難易度変化が発生しますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'スコア250点ごと（連続コンボ4回ごとにボーナス）にレベルが上がり、ボールと枠が小さくなり、枠の移動速度と方向転換が速くなります。タイムアウト設定がオンなら1球あたりの制限時間も短くなります。1回のプレイは45秒固定です。',
      },
    },
    {
      '@type': 'Question',
      name: 'マウスハードウェアやマウスパッドの推奨設定は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Windowsの「ポインターの精度を高める」を無効化し、800〜1600 DPI、1000Hz以上のポーリングレート、適度な摩擦感を持つ布製コントロールパッドが最適です。',
      },
    },
    {
      '@type': 'Question',
      name: 'スマートフォンやタブレットでも遊べますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'このドリルはマウスとポインターロックが必要なため、タッチ操作のみの端末では開始できません。マウスを接続したPCのブラウザで遊んでください。',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'ja-JP',
  name: 'ドラッグ＆ドロップマウス操作精度トレーニング',
  description: 'マウスポインターの減速制御、搬送軌道の最適化、リリースタイミング習得のための4ステップ。',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'オブジェクトの確実なホバーと把持',
      text: '出現したオブジェクトの中心に素早くカーソルを合わせ、マウス左ボタンをしっかり押し込んで掴みます。',
      url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '滑らかな軌道での高速ドラッグ移動',
      text: 'ボタンを押した状態を保ちながら、目標のドロップスロットに向けて最短直線距離でカーソルを動かします。',
      url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '目標枠内での精密なアライメント',
      text: 'ドロップゾーンの境界内にオブジェクトが完全に重なるよう、手首の微小筋で位置を微調整します。',
      url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: '正確なリリースクリック',
      text: '枠の中で確実にボタンを離すとドロップ成功となり、100点×コンボ倍率のスコアを獲得します。',
      url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/drag-and-drop#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'mackenzie1991', 'fitts1954', 'elliott2010', 'woods2015'),
  intro: {
    title: 'ドラッグ、操縦軌道および感覚運動減速の生体力学的原理',
    paragraphs: [
      'このドラッグ＆ドロップ練習は、マウスでボールをつかみ、動く枠まで運んで離す操作を繰り返すドリルです。ドラッグ＆ドロップ操作は単なるポイント＆クリック操作とは神経運動学的に根本から異なります。離散的なポインティング動作がフィッツの法則（Fitts, 1954）に支配されるのに対し、ドラッグは人差し指の屈筋による等尺性筋収縮を維持したまま、マウスパッド上で腕と手首の多軸並進運動を精密に同期させる必要があります。',
      'MacKenzie, Sellen, Buxton（1991）の実験では、ドラッグは同じ装置で同じターゲットを指すだけの操作より明らかに遅く、エラーも多いことが示されました。ボタンを押し続けることで指や手首の細かな調整が制約されるためと考えられています。',
      'さらにJohnny AccotとShumin Zhai（1997）は、軌道拘束下での運動能力を数学的に記述する「操縦の法則（Steering Law）」を打ち立てました。動的なドラッグ課題においてユーザーは、前進推進の勢いと移動する目標枠内での確実な減速制動（Elliott et al., 2010）を常に調和させ、オーバーシュートを防ぐ必要があります。',
      'ドリルの流れ：45秒間、ボールをつかんで動く円形の枠の中で離すと成功です。ディスプレイのリフレッシュレートやマウスのポーリングレートで入力の感触が変わるため（Woods et al., 2015）、他人との比較より同じ環境での自己記録の推移を見てください。SkillDrillsは記録をブラウザ内にのみ保存します。',
    ],
  },
  benchmarks: {
    title: 'ドラッグ＆ドロップ練習の目安（SkillDrills練習バンド）',
    caption: 'SkillDrillsの練習バンドです。研究の基準値やユーザー統計ではなく、結果画面のレベル・コンボ・精度を自分で読み取るための作者による目安です。SkillDrillsは記録を外部に収集しません。',
    headers: ['段階 (Tier)', '分類・評価ランク', '到達レベル・コンボ', 'ドロップ成功率', 'プレイの特徴'],
    rows: [
      [
        'Tier 1',
        '最上位段階',
        'Lv. 12–15 (コンボ > 18回)',
        '≥ 98.0%',
        '速い枠でも減速が滑らかで、枠外で離すミスがほとんどない。',
      ],
      [
        'Tier 2',
        '上級 / 競技プレイヤー',
        'Lv. 9–11 (コンボ 12–17回)',
        '94.0%–97.9%',
        '安定した減速、小さな枠でも短い微調整で収められる。',
      ],
      [
        'Tier 3',
        '中級 / 一般実力派',
        'Lv. 6–8 (コンボ 7–11回)',
        '87.0%–93.9%',
        '加速期にわずかな軌道オーバーシュート、目標枠侵入直前に一時的な速度低下が見られる。',
      ],
      [
        'Tier 4',
        '初級 / 基礎育成段階',
        'Lv. 3–5 (コンボ 3–6回)',
        '78.0%–86.9%',
        '何度も区切って修正する動き、握り込みすぎで枠外ドロップが起きやすい。',
      ],
      [
        'Tier 5',
        '入門 / ビギナー',
        'Lv. 1–2 (コンボ < 3回)',
        '< 78.0%',
        '運ぶ速度が遅く、枠外で離すミスが多い。',
      ],
    ],
  },
  protocols: {
    title: 'マウス操作精度を高める4大トレーニングプロトコル',
    items: [
      {
        title: 'プロトコル1: 等尺性スイッチ保持力の適正化（レベル1–4）',
        description: 'マウス移動中、スイッチが切れない最小限の力で押し続ける脱力感覚を養います。過剰な握力は手首屈筋を硬直させ、高周波の筋震戦（ブレ）を引き起こします。',
      },
      {
        title: 'プロトコル2: アコット・チャイ操縦トンネルの直線化（レベル5–8）',
        description: 'オブジェクトのピックアップ座標と目標枠の中心を結ぶ仮想の直線トンネルをイメージし、横方向のカーブや蛇行修正を排除して最短時間での搬送を目指します。',
      },
      {
        title: 'プロトコル3: 拮抗筋減速制動とリリースタイミング（レベル9–12）',
        description: '動く枠に届く少し手前から減速して勢いを抑え、ボールが枠の中に入った瞬間にボタンを離します。',
      },
      {
        title: 'プロトコル4: 動的リード角による未来位置捕捉（レベル13–15）',
        description: '高速移動する目標枠の現在位置ではなく、数ミリ秒後の予測到達点に向けてカーソルを先行させ、枠の運動ベクトルに合わせて滑らかにドロップします。',
      },
    ],
  },
  faqs: {
    title: 'よくある質問 (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyJa = {
  title: "ドラッグ＆ドロップ練習｜マウス操作テスト",
  subtitle: "ボールをつかんで動く枠の中で離す45秒のマウス ドラッグ 練習",
  startButtonText: "訓練開始",
  playAgainText: "もう一度挑戦",
  shareText: "スコアを共有",
  exitText: "終了",
  accuracyLabel: "精度",
  targetDropsLabel: "ターゲット投入",
  maxComboLabel: "最大コンボ",
  peakLevelLabel: "到達レベル",
  rulesTitle: "操作方法・スコア獲得ルール",
  rulesItems: [
    { num: "1", text: "ターゲット投入", highlight: "+100点 × コンボ", result: "ボールをドラッグして動く枠内にリリース" },
    { num: "2", text: "連続コンボ", highlight: "最大3.0倍倍率", result: "連続投入成功でボーナス倍率獲得" },
    { num: "3", text: "レベル難易度進行", highlight: "250点毎に+1レベル", result: "容器の縮小と移動速度の上昇" },
    { num: "4", text: "ミス・時間切れ", highlight: "コンボリセット", result: "枠外へのドロップで倍率リセット" }
  ],
};

export default function DragAndDropPage() {
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
      <DragAndDropClient copy={copyJa} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
