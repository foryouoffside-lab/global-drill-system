import InfinityPursuitClient from '@/app/drills/visual-tracking/infinity-pursuit/InfinityPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// JAPANESE SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "8の字 眼球運動" (Figure-8 eye movement exercise) / "8の字 目の体操"
// Secondary:    "両眼協調性 トレーニング", "正中線交差 視覚トレーニング", "ビジョントレーニング 8の字"
// LSI / Domain:  "ベルヌーイのレムニスケート 追従", "滑動性追従 8の字", "外眼筋 バランス 運動",
//               "動体視力 8の字 トレーニング", "斜め視線 動体視力", "視線ジャンプ 抑制", "アイトラッキング 8の字"
// Authentic Domain Terms: 8の字眼球運動（Figure-8 Oculomotor Exercise）, ベルヌーイのレムニスケート（Lemniscate of Bernoulli）, 正中線交差（Midline Crossing）, 両眼協調運動（Binocular Coordination）, 滑動性追従眼球運動（Smooth Pursuit）, サッケード侵入抑制（Saccadic Intrusion Suppression）
// ============================================================

export const metadata = {
  title: "8の字眼球運動トレーニング | SkillDrills",
  description: "8の字の動く標的を両眼で追い、視線追従と正中線通過を練習する無料の眼球運動トレーニング。ブラウザで実践できます。",
  keywords: [
    "8の字 眼球運動 トレーニング",
    "フィギュアエイトトレーニング",
    "視線追従 眼球運動",
    "追従性眼球運動",
    "正中線 目の運動",
    "両眼協調 トレーニング",
    "動体視力 8の字",
    "ビジョントレーニング 8の字",
    "眼球運動 トレーニング",
    "視線ジャンプ 抑制",
    "アイトラッキング 8の字",
    "無料 視線追従 練習"
  ],
  openGraph: {
    title: "8の字眼球運動トレーニング | SkillDrills",
    description: "8の字の動く標的を両眼で追い、視線追従と正中線通過を練習する無料の眼球運動トレーニング。",
    type: "website",
    url: "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit",
    siteName: "SkillDrills",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "8の字視線追従トレーニング | SkillDrills",
    description: "8の字の軌道を滑らかに追い、中心を通るときの視線の乱れを観察する無料トレーニング。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/infinity-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "視覚追従・アイトラッキング", "item": "https://skilldrills.online/ja/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "8の字眼球運動トレーニング・インフィニティ視覚追従テスト", "item": "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "8の字眼球運動トレーニング・インフィニティ視覚追従テスト",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "ブラウザ",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "ベルヌーイのレムニスケート（8の字無限ループ）に沿って全6外眼筋を連動させ、正中線交差と滑動追従ゲインを鍛える無料ビジョントレーニングツール。",
  "url": "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/ja" },
  "inLanguage": "ja",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "8の字眼球運動トレーニング・インフィニティ視覚追従テスト – 両眼協調＆正中線交差スムーズパシュート | SkillDrills",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "ブラウザ",
  "browserRequirements": "HTML5 Canvas対応ブラウザ（Chrome, Edge, Firefox, Safari）",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit",
  "inLanguage": "ja",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "8の字眼球運動トレーニング・インフィニティ視覚追従テスト",
  "url": "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit",
  "description": "8の字レムニスケート軌道上を連続移動するターゲットを中心窩でロックし、滑動性追従運動と正中線交差能力を測定・強化するアイトラッキングゲーム。",
  "genre": ["眼球運動トレーニング", "スポーツビジョン", "視線追従"],
  "gamePlatform": ["ブラウザ"],
  "dateModified": "2026-09-20",
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "8の字眼球運動トレーニングの測定・実践手順",
  "description": "ベルヌーイのレムニスケート軌道を用いて両眼協調性と正中線交差追従力を正しく向上させる4段階のステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "画面距離の確保と頭部の固定",
      "text": "ディスプレイから約50〜70cmの距離を保ち、顎を引いて頭部を完全に静止させます。首の回旋で標的を追わず、眼球のみを動かす準備を整えます。",
      "url": "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "訓練時間と速度倍率の設定",
      "text": "目的に応じてセッション時間（30秒〜120秒）と速度倍率（0.5x〜9.0x）を設定します。初心者は1.0xから開始し、滑動性追従が途切れない速度を見極めます。",
      "url": "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "中心窩ロックと正中線交差の連続追跡",
      "text": "開始合図とともに8の字軌道を周回するターゲットの中心を中心窩で捉え続けます。左右のループを往復する中央の交差点（正中線）でも視線をジャンプさせず滑らかに保ちます。",
      "url": "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "追従精度・サッケード混入率の分析と負荷調整",
      "text": "セッション完了後、視線の安定性と追従維持率を確認します。正中線通過時にカクつきが生じた場合は速度を落とし、完璧に追従できるようになったら段階的に速度を引き上げます。",
      "url": "https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "8の字眼球運動（インフィニティパシュート）とはどのようなトレーニングですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "数学的なベルヌーイのレムニスケート（横倒しの8の字・無限大記号∞）の曲線軌道に沿って移動するターゲットを、頭部を動かさずに視線（中心窩）だけで滑らかに追従し続けるビジョントレーニングです。水平・垂直・斜め方向の眼球運動が途切れることなく連続するため、眼球を取り囲む全6つの外眼筋を複合的に刺激し、視線の滑らかさと動体視力を向上させます。"
      }
    },
    {
      "@type": "Question",
      "name": "なぜ円運動や直線運動ではなく「8の字（レムニスケート）」が効果的なのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "直線運動は反転時に角速度がゼロになる停止点が生じ、単純な円運動は単一の回転方向に偏ります。これに対し8の字軌道は、曲率半径が連続的に変化しながら時計回りと反時計回りが交互に入れ替わり、さらに左右の視野を結ぶ「正中線（体の中心線）」を斜めに横断します。この連続的な加速度変化と軌道反転の組み合わせが、小脳による予期的運動制御と両眼協調性を最も効率的に活性化させます。"
      }
    },
    {
      "@type": "Question",
      "name": "正中線を通るときに視線がぶれやすいのはなぜですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "視線が視野の中央（身体の正中線）を横切る際、網膜から視覚入力を受け取る大脳半球の担当領域が左半球から右半球（またはその逆）へと切り替わります。大脳皮質間を連絡する脳梁を介した情報伝達にわずかな遅延や処理負荷が生じると、滑動性追従（スムーズパシュート）が途切れ、代償として不随意な視線跳躍（補正サッケード）が混入しやすくなります。この交差部を滑らかに通過できるよう訓練することが本ドリルの主目的です。"
      }
    },
    {
      "@type": "Question",
      "name": "8の字の追従に関与している眼球筋肉（外眼筋）はどれですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "内直筋・外直筋（水平運動）、上直筋・下直筋（垂直運動）、そして上斜筋・下斜筋（回旋および斜め上下運動）の全6対の外眼筋が絶え間なく協調して働きます。特に8の字ループの斜めカーブおよび中央交差部では斜筋群と直筋群の精密な同時収縮が要求されるため、特定の筋肉に偏らない総合的な外眼筋バランスが養われます。"
      }
    },
    {
      "@type": "Question",
      "name": "FPSやeスポーツのエイム力向上にどのようなメリットがありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FPSの追いエイム（トラッキング）において、敵キャラクターが斜めにジャンプしたり不規則な弧を描いて移動する際、プレイヤーの視線が滑らかに追従できずサッケードでカクつくと、画面上の敵がブレて正確なクロスヘア修正が不可能になります。8の字眼球運動で滑動追従ゲイン（Gain）を高めることで、曲線的な敵の機動に対して視線が吸い付くようになり、オーバーシュートや手首の力みを大幅に低減できます。"
      }
    },
    {
      "@type": "Question",
      "name": "読書スピードや学習効率、動体視力にも良い影響がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。読書時の行送りや文章走査、球技におけるボール軌道の追尾では、視野の中心をまたぐ両眼の協調動作が不可欠です。8の字トレーニングによって正中線交差が円滑になると、視線の引っかかりや読み飛ばし、目の疲労が軽減され、広範な視野情報を素早く脳内で処理できるようになります。"
      }
    },
    {
      "@type": "Question",
      "name": "追従中に頭部が一緒に動いてしまうのを防ぐにはどうすればよいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "頭部が動いてしまうのは、前庭動眼反射（VOR）や頸部の運動代償を使って眼球の負荷を逃がそうとする脳の代償メカニズムです。顎の下に手を添えたり、モニターの中央下部に顎を軽く固定する意識を持ち、首の筋肉を完全に弛緩させて眼球のみを独立して動かす（純粋な眼球運動の単離）練習を意識的に行ってください。"
      }
    },
    {
      "@type": "Question",
      "name": "1日の推奨トレーニング時間と適切なセッション頻度は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1セッションあたり60秒〜90秒を1日2〜3回行うのが最も効果的です。長時間の連続訓練は外眼筋の疲労や調節痙攣を招き、追従ゲインが逆に低下するため、セット間に20秒以上の遠方凝視（20-20-20ルール）を挟んで目をリフレッシュさせながら実施することを推奨します。"
      }
    },
    {
      "@type": "Question",
      "name": "モニターとの適切な距離や画面設定はどうすべきですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ディスプレイから50cm〜70cm離れ、画面の上端が目の高さとほぼ水平になる位置に座ります。視野角にして左右約30〜40度の範囲でターゲットが移動するように画面サイズやブラウザ幅を調整すると、外眼筋の可動域を最大限に活用したトレーニングが可能になります。"
      }
    },
    {
      "@type": "Question",
      "name": "トレーニング中に眼精疲労や軽いめまいを感じた場合はどうすればいいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "普段あまり使われない斜筋群や正中線交差回路に強い負荷がかかると、一時的な眼精疲労や軽い乗り物酔いに似た感覚が生じることがあります。その場合は直ちにドリルを中断し、目を閉じて深呼吸するか、5メートル以上遠くの景色をぼんやり眺めてください。次回のセッションでは速度倍率を0.8xや0.5xに下げ、無理のない強度から再開してください。"
      }
    }
  ]
};

const guideProps = {
  heading: "8の字眼球運動・インフィニティ視覚追従の神経眼科学基準",
  intro: [
    "8の字、つまりベルヌーイのレムニスケートは、左右の曲線と中央の交差を一つの軌道にまとめた形です。動く標的を眼球だけで追うと、水平・垂直・斜めの視線移動が連続します。ここではその動きの仕組みを学びますが、眼の病気を調べたり治療したりする検査ではありません。",
    "左右のループが交わる中央では、視線が右側と左側の視野を行き来します。標的を見失う、視線が小さく跳ぶ、中央で止まるといった変化を観察すると、どの部分が難しいかを同じ条件で比較できます。これらは練習中の観察であり、診断結果ではありません。",
    "動きやすさは画面との距離、標的の大きさ、表示の滑らかさ、疲労によって変わります。速さよりも楽に追えることを優先し、自然にまばたきしてください。痛み、複視、吐き気、めまいが出たら中止し、症状が続く場合は医療専門家に相談しましょう。",
    "読書やスポーツへの効果を一律に約束することはできません。このページは、動く標的への視線追従を短時間で練習し、記録を同じ条件で振り返るためのものです。"
  ],
  benchmarks: {
     title: "8の字眼球運動・視線追従のパフォーマンス指標",
     headers: ["習熟度", "標的への追従", "正中線での視線跳び", "軌道の正確さ", "実践的な見方"],
    rows: [
      ["エリート (プロアスリート級)", "0.96 ～ 1.02", "2% 未満 (完全平滑)", "98% 以上", "全外眼筋の完全な協調。正中線交差時もサッケード混入が皆無で小脳内部モデルが完璧に同期"],
      ["アドバンス (競技ゲーマー級)", "0.90 ～ 0.95", "2% ～ 5%", "92% ～ 97%", "高い滑動追従安定性。急激な曲率変化に対してわずかな位相遅延が見られる程度で中心窩ロックを維持"],
      ["コンピテント (一般健康成人)", "0.80 ～ 0.89", "6% ～ 12%", "82% ～ 91%", "日常的な視覚追尾に十分な水準。正中線交差やループ端部で散発的な補正サッケードが発生"],
      ["デベロッピング (発達途上・軽度疲労)", "0.68 ～ 0.79", "13% ～ 22%", "70% ～ 81%", "追従遅延が顕著。頻繁な視線飛びが生じ、外眼筋の緊張や左右大脳半球間の協調遅延が認められる"],
      ["ノービス (要トレーニング・眼精疲労)", "0.68 未満", "22% 超", "70% 未満", "滑動追従の継続が困難。頭部の代償運動が混入しやすく、外眼筋の柔軟性・両眼協調性の基礎訓練が必要"]
    ],
    note: "※測定数値は50〜70cmの視距離において、速度1.0x〜2.0xで連続60秒間のレムニスケート追従を行った際の眼球運動解析データに基づく基準値です。追従ゲインは「眼球角速度 ÷ 標的角速度」で定義され、1.0が完全同期を示します。"
  },
  techniques: {
    title: "8の字無限軌道追従ゲインと正中線交差を極める4大テクニック",
    items: [
      {
        name: "頭部を安定させて眼球だけで追う",
        desc: "顎の下に軽く指先を当て、頭部が1ミリも動いていないことを触覚で確認しながら、眼球のみを動かしてください。頸部を静止させることで前庭動眼反射（VOR）が遮断され、大脳・小脳から外眼筋へと送られる純粋な運動神経指令のみが集中的に鍛えられます。",
        tips: "首筋の力を完全に抜き、モニター中央と自分の鼻先を結ぶラインを意識的にロックしましょう。"
      },
      {
        name: "中央の交差前に速度を整える",
        desc: "8の字の中央交差点を通過する直前、ターゲットは外側ループから直線的な加速を伴って中心へと突入します。ターゲットが中心ノードに差し掛かる約50ミリ秒前から、視線を交差点の数ピクセル先へと滑らかに滑らせる意識を持ち、脳梁を介した半球間情報転移の遅延を予測的に相殺してください。",
        tips: "中心を通る瞬間は『見る』のではなく『視線が自然に通過していく』イメージを持つとサッケードが激減します。"
      },
      {
        name: "外側のループを省略せず追う",
        desc: "標的の外側接線まで中心窩を密着させ、外眼筋（特に上斜筋・下斜筋）の最大伸展域まで丁寧に視線を導くことで、視野周辺部における動体視力の死角を完全に排除できます。",
        tips: "ループの端で視線が内側をショートカットしようとする衝動を意識的に抑制してください。"
      },
      {
        name: "速度を段階的に上げて休む",
        desc: "まずは1.0xで60秒間、一度も視線がブレない完璧なセッションを達成してください。その後0.2x刻みで速度を上げ、限界に達したら20秒間遠方の景色を眺めて毛様体筋と外眼筋を弛緩させる「20-20-20ルール」を徹底してください。",
        tips: "目の乾きや疲労を感じたら無理をせず、まばたきを意識的に増やして涙液層を保ちましょう。"
      }
    ]
  },
  steps: [
    "ディスプレイから約50〜70cmの距離を保ち、顎を引いて頭部を完全に静止させます。",
    "目的に応じてセッション時間（30秒〜120秒）と速度倍率（0.5x〜9.0x）を設定します。",
    "開始合図とともに8の字軌道を周回するターゲットの中心を中心窩で捉え続けます。",
    "中央の交差点（正中線）を通過する際も視線をジャンプさせず滑らかに保ちます。",
    "セッション完了後、追従維持率を確認し、完璧に追従できるようになったら段階的に速度を引き上げます。"
  ],
  audience: "FPS（Apex Legends, Overwatch, VALORANT）競技プレイヤー、動体視力と空間把握力を高めたい球技アスリート、読書やデスクワークによる目の疲労・視線ブレを改善したいすべてのユーザー。",
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('robinson1965', 'leigh2015', 'barnes2008', 'krauzlis2004', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/constant-slow-pursuit", label: "低速視線追従トレーニング" },
    { href: "/ja/drills/visual-tracking/directional-chaos-pursuit", label: "方向変化の視線追従" },
    { href: "/ja/drills/visual-tracking/dynamic-evasion-pursuit", label: "動く標的の追従訓練" },
    { href: "/ja/drills/visual-tracking/ghosting-suppress-pursuit", label: "残像を抑える固視訓練" },
    { href: "/ja/drills/visual-tracking/sine-wave-pursuit", label: "正弦波の視線追従" },
    { href: "/ja/drills/visual-tracking/predictive-pursuit", label: "予測視線追従トレーニング" }
  ]
};

export default function JapaneseInfinityPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <InfinityPursuitClient
        copy={{
          title: "8の字眼球運動トレーニング",
          subtitle: "視線追従と正中線通過の練習",
          description: "8の字の軌道を動く標的を両眼で追い、中央を通るときの視線の連続性を練習します。無理のない速度で記録を比較できます。"
        }}
      />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
