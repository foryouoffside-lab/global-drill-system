import PrecisionFlickShotClient from '@/app/drills/motor/hand-eye-coordination/precision-flick-shot/PrecisionFlickShotClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'マウス精度テスト｜的の中心を狙う精密フリック | SkillDrills',
  description: '無料のマウス精度テスト。縮んでいく2つの的をフリックで撃ち、中心8pxのブルズアイは2倍得点。命中率・ブルズアイ数・到達レベルでマウス精度をチェックできます。',
  keywords: [
    'マウス精度テスト', 'マウス 精度 チェック', 'マウス 精度 測定', '中心を狙う精密クリック',
    '精度 テスト', 'クリック精度テスト', '着弾精度テスト',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'マウス精度テスト｜的の中心を狙う精密フリック | SkillDrills',
    description: '無料のマウス精度テスト。縮んでいく2つの的をフリックで撃ち、中心8pxのブルズアイは2倍得点。命中率・ブルズアイ数・到達レベルでマウス精度をチェックできます。',
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'マウス精度テスト｜的の中心を狙う精密フリック | SkillDrills',
    description: '無料のマウス精度テスト。縮んでいく2つの的をフリックで撃ち、中心8pxのブルズアイは2倍得点。命中率・ブルズアイ数・到達レベルでマウス精度をチェックできます。',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/precision-flick-shot'),
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
      name: '高精度フリックショット',
      item: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'マウス精度テスト・精密フリックショット',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: 'ブラウザで動く無料のマウス精度テスト。縮んでいく的を撃ち、命中率と中心（ブルズアイ）命中数を記録します。',
  url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '高精度フリックショットトレーナー',
  browserRequirements: 'HTML5 CanvasおよびJavaScript対応ブラウザ',
  url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'マウス精度テスト・精密フリックゲーム',
  url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot',
  description: '縮んでいく的の中心を素早く正確にクリックするマウス精度ゲーム。',
  genre: ['射撃ゲーム', 'アクション', 'eスポーツトレーニング'],
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
      name: '精密フリック（Flick Shot）とは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ターゲットが出現した瞬間に、弾道的な単一インパルスの筋肉運動でカーソルを瞬時にスナップ移動させて撃ち抜く高速エイム技術です。',
      },
    },
    {
      '@type': 'Question',
      name: 'マウス精度テストにおける「二相運動制御モデル」とは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woodworth(1899)が提唱した理論で、最初の大まかな弾道推進運動（第1相）と、視覚フィードバックによる微細な位置修正（第2相）の2段階で構成されます。',
      },
    },
    {
      '@type': 'Question',
      name: 'フリックショットで中心（Bulls-eye）に当てるためのコツは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '的の中心から8ピクセル以内をクリックするとブルズアイ判定で基本200点（通常命中は100点）になります。外側の円ではなく中心の小さな点を狙う意識が、着弾のばらつきを抑える助けになります。',
      },
    },
    {
      '@type': 'Question',
      name: 'オーバーフリック（行き過ぎ）が起こる原因と対策は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '手首伸筋による拮抗ブレーキの遅れが主な要因です。感度を固定し、ターゲット中心でピタリと止める「エイムブレーキング」の感覚を反復強化します。',
      },
    },
    {
      '@type': 'Question',
      name: '同時に2つのターゲットが現れた場合の対処法は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2つの的はどちらも縮みますが、アクティブな的のほうが速く小さくなります。小さくなった方から撃ち、もう一方へ切り替えましょう。的が消えるまで縮むとコンボがリセットされ、1秒減ります。',
      },
    },
    {
      '@type': 'Question',
      name: 'VALORANTやCS2の実戦に効果はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VALORANTやCS2のプレイヤーが、フリック後にピタッと止める感覚を練習する用途に使えます。ゲーム内の上達を保証するものではないので、ゲームと同じ感度に合わせて使ってください。',
      },
    },
    {
      '@type': 'Question',
      name: 'フリック練習に最適なDPIとマウス感度は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '800 DPI基準で振り向き30〜45cm程度の中〜ローセンシが、前腕の素早い振り幅と手首のマイクロ微調整のバランスに優れ最も推奨されます。',
      },
    },
    {
      '@type': 'Question',
      name: 'セッション評価やスコアはどのように算出されますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '命中ごとに基本点（通常100点、ブルズアイ200点）にコンボ倍率（最大3.0倍）とレベル補正が掛かります。命中で+2秒（最大60秒）、空振りや的の消滅で-1秒、コンボはリセット。ランクは最終スコアで決まり、結果画面に命中率・命中数・ブルズアイ数・到達レベルが表示されます。',
      },
    },
    {
      '@type': 'Question',
      name: 'フリックの反応速度を最大限引き出すPC設定は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '高リフレッシュレートのモニターや軽いマウスが扱いやすく、Windowsの「ポインターの精度を高める」はオフを推奨します。このマウス精度テストはそのWindows設定ではなく、クリックの正確さを練習するドリルです。',
      },
    },
    {
      '@type': 'Question',
      name: '上達のための理想的な練習頻度は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '試合前のウォームアップとして数回プレイする程度で十分です。手首に違和感があれば休み、同じ環境での自己記録の推移を見てください。',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'ja-JP',
  name: '高精度フリックショットトレーニング方法',
  description: '弾道的マウスクリック、ブルズアイ中心着弾、減速ブレーキング習得のための4ステップ。',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'クロスヘアと感度の調整',
      text: '実戦ゲームと同じ感度に設定し、画面中央のクロスヘアに視線を固定します。',
      url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '出現ターゲットの優先度判断',
      text: '周辺視野でターゲットを察知し、縮小リングの速いターゲットから順に優先ターゲットを決定します。',
      url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '単一インパルスによる弾道フリック',
      text: 'ためらいや途中の減速なしに、一息の滑らかなスナップ動作でカーソルを直進させます。',
      url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: '中心での急減速ブレーキングとクリック',
      text: '拮抗筋で慣性をピタリと止め、中心核（ブルズアイ）の上で正確に射撃クリックを入力します。',
      url: 'https://skilldrills.online/ja/drills/motor/hand-eye-coordination/precision-flick-shot#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('meyer1988', 'fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015'),
  intro: {
    title: '弾道的マイクロフリックと下位運動最適化のバイオメカニクス',
    paragraphs: [
      'このマウス精度テストは、画面に出る的の中心を素早く正確にクリックする精密フリックのドリルです。競技シューティングにおいて、フリックショットは極度の時間的制約のもとで実行される高速度の不連続目標指向運動です。Robert S. Woodworth（1899）は、自発的運動が「初期弾道インパルス」と視覚フィードバックによる「現在制御相」の二相制御アーキテクチャで構成されることを最初に解明しました。',
      'David E. Meyerら（1988）が提唱した「確率的最適化下位運動モデル（Stochastic Optimized Submovement Model）」によると、人間の運動出力は移動速度に比例した神経ノイズを伴います。過度に素早くフリックすると1次運動の着弾のばらつきが大きくなり、標的を外すと追加の修正動作が必要になって時間がかかります。',
      '最高峰のエイムスループット（MacKenzie, 1992）に到達するには、1次インパルスだけで標的の中心核に着弾できるよう速度を適正化する必要があります。中心核（ブルズアイ）へのボーナス加点は、散布界を狭小化し修正減速運動を最小化するよう運動系を条件付けます。',
      '距離とサイズのトレードオフはフィッツの法則（Fitts, 1954）に基づき、終末減速における拮抗筋の動員はElliottら（2010）の現代モデルにより立証されています。',
      'ドリルの流れ：持ち時間45秒で開始し、命中ごとに+2秒（最大60秒）、空振りや的の消滅で-1秒。マウスとポインターロックが必要で、タッチ操作のみの端末では開始できません。リフレッシュレートやポーリングレートで操作感が変わるため（Woods et al., 2015）、同じ環境での自己記録の推移を見てください。',
    ],
  },
  benchmarks: {
    title: 'マウス精度テストの目安（SkillDrills練習バンド）',
    caption: 'SkillDrillsの練習バンドです。研究の基準値やユーザー統計ではなく、結果画面のレベル・コンボ・命中率・ブルズアイ率を自分で読み取るための作者による目安です。SkillDrillsは記録を外部に収集しません。',
    headers: ['段階 (Tier)', '分類・評価ランク', '到達レベル・コンボ', 'クリック命中率', 'ブルズアイ率', 'プレイの特徴'],
    rows: [
      [
        'Tier 1',
        'エイペックス・フリックマスター',
        'Lv. 15+ (コンボ > 20回)',
        '≥ 96.0%',
        '> 65%',
        '1回のフリックで中心に収まり、追加の修正がほとんどない。',
      ],
      [
        'Tier 2',
        '上級ガンファイター',
        'Lv. 11–14 (コンボ 14–19回)',
        '91.0%–95.9%',
        '45%–64%',
        '中心をしっかり確認し、短い微調整で仕留める。',
      ],
      [
        'Tier 3',
        '熟練マークスマン',
        'Lv. 7–10 (コンボ 8–13回)',
        '84.0%–90.9%',
        '25%–44%',
        '外周リング着弾が散見、高速ターゲット遷移時に若干のオーバーシュート発生。',
      ],
      [
        'Tier 4',
        '初級フラッガー',
        'Lv. 4–6 (コンボ 4–7回)',
        '74.0%–83.9%',
        '10%–24%',
        '多段階のぎこちない修正、加速超過による散布界拡大、発射前の迷い。',
      ],
      [
        'Tier 5',
        '入門 / ビギナー',
        'Lv. 1–3 (コンボ < 4回)',
        '< 74.0%',
        '< 10%',
        'アンダーフリック（届かない）、頻繁な空振り、遅い再捕捉、手首と腕の連動不足。',
      ],
    ],
  },
  protocols: {
    title: 'フリック精度を高める4大トレーニングプロトコル',
    items: [
      {
        title: 'プロトコル1: 1次弾道インパルスの確立（レベル1–4）',
        description: '焦らず途中で引っかからない滑らかなスナップに集中します。途中の迷いを排除し、開ループ運動記憶で外枠内に確実に届かせます。',
      },
      {
        title: 'プロトコル2: マイヤー下位運動の極小化（レベル5–8）',
        description: '意図的に中心8ピクセルのブルズアイ核を狙います。標的の仮想サイズを小さく絞り込むことで、運動皮質のノイズが抑え込まれます。',
      },
      {
        title: 'プロトコル3: 複数ターゲット優先順位処理（レベル9–12）',
        description: 'ターゲットが2個同時に出た際、周辺視野で消滅リングを瞬時に比較し、期限が迫ったターゲットから順次撃ち抜きます。',
      },
      {
        title: 'プロトコル4: 拮抗筋減速によるオーバーフリック抑制（レベル13–15）',
        description: '極限の高速時、手首の伸筋群を作動させてカーソルを着弾点で確実に制動し、惰性による滑りを完全に防ぎます。',
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
  title: "マウス精度テスト｜的の中心を狙う精密フリック",
  subtitle: "縮む的2つ · 中心ブルズアイは2倍得点 · 命中で+2秒",
  startButtonText: "訓練開始",
  playAgainText: "もう一度挑戦",
  shareText: "スコアを共有",
  exitText: "終了",
  accuracyLabel: "命中率",
  targetHitsLabel: "ターゲット撃破",
  bullseyesLabel: "ブルズアイ",
  peakLevelLabel: "到達レベル",
  rulesTitle: "操作方法・スコア獲得ルール",
  rulesItems: [
    { num: "1", text: "ブルズアイ命中", highlight: "+200点 / +2秒（最大60秒）", result: "中心核へのピンポイント着弾" },
    { num: "2", text: "通常ターゲット撃破", highlight: "+100点 / +2秒（最大60秒）", result: "周辺視野の瞬時捕捉とクリック" },
    { num: "3", text: "レベル難易度進行", highlight: "1400点毎に+1レベル", result: "ターゲット縮小と生存時間短縮" },
    { num: "4", text: "ミス・時間切れ", highlight: "コンボリセット", result: "空振り・的の消滅で -1秒" }
  ],
};

export default function PrecisionFlickShotPage() {
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
      <PrecisionFlickShotClient copy={copyJa} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
