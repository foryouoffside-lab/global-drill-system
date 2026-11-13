import KineticInterceptClient from '@/app/drills/visual/tracking-accuracy/moving-target/KineticInterceptClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "動体視力を鍛えるゲーム | 移動標的トレーニング | SkillDrills",
  description: "壁で跳ね返り、時間が来ると別の位置へ移る球体をクリックして当てる無料の動体視力を鍛えるゲーム。登録不要のブラウザ練習で、命中ごとに+2秒、空振りは-1秒。視力検査ではありません。",
  keywords: [
    "動体視力を鍛えるゲーム",
    "動体視力 鍛え方",
    "移動標的トレーニング",
    "動体視力 ゲーム",
    "移動標的",
    "軌道予測",
    "標的迎撃",
    "視線追跡",
    "手と目の協応",
    "FPS 移動標的",
    "動くボール 追う"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "動体視力を鍛えるゲーム | 移動標的トレーニング | SkillDrills",
    description: "動く標的を目で追い、別の位置へ移る前にクリックして当てる無料の動体視力を鍛えるゲーム。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "動体視力を鍛えるゲーム | 移動標的トレーニング | SkillDrills",
    description: "跳ね返る標的の軌道を読んでクリックする、無料の動体視力を鍛えるゲーム。画面やマウス環境で結果は変わります。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/moving-target'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "ビジョントレーニング", "item": "https://skilldrills.online/ja/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "追従精度", "item": "https://skilldrills.online/ja/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "移動標的トレーニング", "item": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "動体視力を鍛えるゲーム・移動標的トレーニング",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
  "description": "壁で跳ね返りながら動き、一定時間で別の位置へ移動する球体をクリックして当てるブラウザ練習ゲーム。",
  "featureList": [
    "壁で反射しながら動き、制限時間が切れると新しい位置へ移る標的",
    "命中150点 × コンボ倍率 × レベルボーナス、命中ごとに+2秒（上限60秒）",
    "レベルが上がるほど標的が速く小さくなり、移動間隔も短縮",
    "記録はブラウザのローカルストレージにのみ保存"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "動体視力を鍛えるゲーム・移動標的トレーニング | SkillDrills",
  "alternateName": "Moving Target Pro",
  "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target",
  "dateModified": "2026-11-12",
  "description": "無料の動体視力を鍛えるゲーム。画面内を跳ね返る球体を目で追い、別の位置へ移る前にクリックして当てます。",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas対応のモダンブラウザ。",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "動く標的の目視追従, 軌道予測, マウスでの迎撃精度"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "動体視力を鍛えるゲーム・移動標的トレーニング",
  "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target",
  "description": "動く標的を目で追い、別の位置へ移る前にクリックして当てる無料オンライン動体視力ゲーム。",
  "genre": ["Action", "Aim Trainer", "Visual Tracking"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "移動標的トレーニングの遊び方",
  "dateModified": "2026-11-12",
  "description": "移動標的トレーニングを始めてスコアを伸ばすための4ステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "動く球体を目で追う",
      "text": "カウントダウン後にオレンジ色の球体が現れ、一定方向に動いて壁で跳ね返ります。カーソルを標的の近くに置いて一緒に追いかけます。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "移動タイマーを確認する",
      "text": "標的の周りのリングと数字は、標的が別の位置へ移るまでの残り時間です。最初は約1秒で、レベルやコンボが上がるほど短くなります。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "標的をクリックする",
      "text": "標的をクリック（タップ）すると命中です：+150点 × コンボ × レベルボーナス、残り時間+2秒（上限60秒）。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "空振りを減らす",
      "text": "標的の外をクリックすると1秒減ってコンボがリセットされます。残り時間が0になるとセッション終了です。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/moving-target#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "この動体視力を鍛えるゲームはどんな内容ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "画面内を跳ね返る球体をクリック（タップ）して当てるブラウザゲームです。標的は一定時間（最初は約1秒、レベルやコンボが上がるほど短くなる）が過ぎると別の位置へ移ります。セッションは45秒から始まり、命中ごとに+2秒（上限60秒）、残り時間が0になると終了します。"
      }
    },
    {
      "@type": "Question",
      "name": "スコアはどう計算されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "命中1回につき150点にコンボ倍率とレベルボーナスが掛かります。スコアに応じてレベルが連続的に上がり、標的は速く小さくなり、移動間隔も短くなります。"
      }
    },
    {
      "@type": "Question",
      "name": "外すとどうなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "標的の外をクリックすると残り時間が1秒減り、コンボが0に戻ります。ドリル設定の Target Timeouts（標的タイムアウト）がオン（初期設定）の場合、当てられないまま標的が移動したときもミスとして1秒減ります。"
      }
    },
    {
      "@type": "Question",
      "name": "滑動性眼球運動（パシュート）とサッケード（跳躍性眼球運動）の違いは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "パシュートは動く物体を視野の中心に保つために目が滑らかに追う運動で、サッケードは視線を別の地点へ素早く飛ばす運動です。両者は別々の制御系を持つとされています（Rashbass, 1961）。このゲームでは標的が位置を変えるたびにサッケードで探し直す必要があります。"
      }
    },
    {
      "@type": "Question",
      "name": "動く標的を撃つとき、なぜ少し前を狙うのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "見て判断し手を動かすまでには時間がかかるため、クリックした瞬間には標的がすでに少し進んでいます。標的が速いほど、進行方向の少し先を狙うほうが当たりやすくなります。"
      }
    },
    {
      "@type": "Question",
      "name": "このゲームで動体視力は鍛えられますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ゲーム内のスコアが伸びるのは、この課題に慣れたことを示します。実際の視力やスポーツの成績、他の課題への効果を保証するものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "ディスプレイのリフレッシュレートは結果に影響しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "標的は画面の更新ごとに描画されるため、リフレッシュレートの高いモニターでは動きがより滑らかに見えます。機器やマウス環境が違うとスコアを単純に比較できません。"
      }
    },
    {
      "@type": "Question",
      "name": "無料ですか？記録はどこに保存されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、登録不要・無料で使えます。ベストスコアやコンボの記録はお使いのブラウザのローカルストレージにのみ保存されます。"
      }
    }
  ]
};

const movingTargetGuide = {
  heading: "動体視力を鍛えるゲーム：移動標的を追って当てる方法",
  intro: [
    "この動体視力を鍛えるゲームは、画面内を跳ね返る球体を目で追い、クリックして当てるブラウザ練習です。標的は一定の方向と速さで動いて壁で反射し、決まった時間が過ぎると別の位置へ移るため、追い続けながら探し直す必要があります。",
    "セッションは45秒から始まります。命中ごとに150点 × コンボ × レベルボーナスを得て残り時間が2秒増え（上限60秒）、空振りは1秒減ってコンボがリセットされます。スコアが上がるほど標的は速く小さくなり、移動間隔も約1秒から少しずつ短くなります。動体視力の鍛え方として、短い時間で集中して繰り返せるのが特徴です。",
    "動く物体を目で追う滑動性眼球運動は比較的遅い速さでは正確に保たれ、それより速くなると目が遅れて追いつきサッケードで補うようになります（Krauzlis, 2004）。このゲームはそうした状況を単純なクリック課題として練習するもので、視力や眼球運動を測定する検査ではありません。"
  ],
  benchmarks: {
    title: "SkillDrills 練習バンド（このゲーム専用の目安）",
    headers: ["バンド", "標的の移動間隔", "スコア・コンボ", "プレイの特徴"],
    rows: [
      ["バンド1", "< 0.25秒", "16,000点以上 | コンボ 25x+", "非常に速く小さい標的を連続で命中。"],
      ["バンド2", "0.25 – 0.45秒", "10,500 – 15,999点 | コンボ 16x+", "速い標的でも空振りが少ない。"],
      ["バンド3", "0.46 – 0.70秒", "6,000 – 10,499点 | コンボ 9x+", "直線部分は安定、壁の反射直後にときどき外す。"],
      ["バンド4", "0.71 – 1.00秒", "2,500 – 5,999点 | コンボ 4x+", "標的を後ろから追いかけてクリックしがち。"],
      ["バンド5", "> 1.00秒", "< 2,500点 | コンボ < 4x", "ゲームに慣れていく段階。"]
    ],
    note: "SkillDrills が独自に設定した練習の目安で、研究に基づく基準値や視力の評価基準ではありません。モニターやマウス環境で変わります。"
  },
  techniques: {
    title: "移動標的に当てやすくするコツ",
    items: [
      {
        name: "進行方向の少し先を狙う",
        desc: "クリックする間にも標的は動くため、今の位置をそのままクリックすると後ろに外れやすくなります。",
        tips: "標的が進む方向へ少し先を狙ってクリックします。"
      },
      {
        name: "壁での跳ね返りを先読みする",
        desc: "標的は壁に当たると入射角どおりに反射します。",
        tips: "壁までカーソルで追わず、跳ね返ってくる方向に先にカーソルを置いて待ちます。"
      },
      {
        name: "カーソルも一緒に動かす",
        desc: "カーソルを止めて標的が通るのを待つと、速いレベルではタイミングが合いません。",
        tips: "目とカーソルを標的と一緒に滑らかに動かして追います。"
      },
      {
        name: "連打しない",
        desc: "空振りのたびに1秒減り、コンボもリセットされます。",
        tips: "カーソルが標的に重なったと確認できたときだけクリックします。"
      }
    ]
  },
  steps: [
    "「ドリル開始」をクリックして45秒のセッションを始めます。",
    "現れた球体を目とカーソルで追います。",
    "標的の周りのリングが消える前に、進行方向を見込んでクリックします。",
    "命中で+150点 × 倍率と+2秒、空振りで-1秒とコンボリセット。",
    "時間が0になったら命中数、正確さ、最高レベル、最大コンボを確認します。"
  ],
  audience: "FPSで動く相手に当てる練習をしたい人や、気軽に動体視力ゲームを楽しみたいすべての方。",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('rashbass1961', 'krauzlis2004', 'land2000', 'bahill1980', 'woods2015'),
  related: [
    { href: "/ja/drills/visual/tracking-accuracy/multiple-targets", label: "複数目標追跡 (MOT) 検査" },
    { href: "/ja/drills/visual/tracking-accuracy/pursuit-tracker", label: "スムースパシュート・視線追従トレーニング" },
    { href: "/ja/drills/visual/reaction-speed/light-reaction", label: "閃光反応速度テスト" },
    { href: "/ja/drills/visual/reaction-speed/go/no-go", label: "Go / No-Go 衝動制御テスト" },
    { href: "/ja/drills/visual/depth-perception/distance-judgment", label: "深視力トレーニング" },
    { href: "/ja/drills/visual/visual-recognition/entropic-grid", label: "エントロピーグリッド探索テスト" }
  ]
};

export default function KineticInterceptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <KineticInterceptClient copy={{ title: "動体視力を鍛えるゲーム：移動標的トレーニング" }} />
      <DrillGuide guide={movingTargetGuide} />
      <RelatedDrills />
    </>
  );
}
