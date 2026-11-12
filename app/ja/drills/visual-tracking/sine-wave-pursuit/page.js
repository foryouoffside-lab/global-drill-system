import SineWavePursuitClient from '@/app/drills/visual-tracking/sine-wave-pursuit/SineWavePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/sine-wave-pursuit';
const title = "サイン波の眼球追従トレーニング | SkillDrills";
const description = "画面を左右に往復しながら固定されたサイン波の曲線に沿って上下する標的を目で追う、無料の眼球追従トレーニング。速度と時間を調整できます。";

export const metadata = {
  title,
  description,
  keywords: ["サイン波の眼球追従トレーニング", "サイン波 追視", "眼球運動 トレーニング", "追従眼球運動 練習", "視線追従 練習", "無料 ブラウザ ドリル"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/sine-wave-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ja_JP', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "ホーム", item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: "ドリル一覧", item: 'https://skilldrills.online/ja/drills' },
    { '@type': 'ListItem', position: 3, name: "視覚追従・アイトラッキング", item: 'https://skilldrills.online/ja/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "サイン波の眼球追従トレーニング", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "サイン波の眼球追従トレーニング",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ja' },
  inLanguage: 'ja',
  dateModified: '2026-11-12',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "サイン波の眼球追従トレーニングのやり方",
  description: "波の曲線に沿って左右に往復する標的を、目でなめらかに追う4ステップの練習です。",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "楽な姿勢をとる",
    "text": "画面から楽な距離をとって座り、肩と首の力を抜きます。"
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "曲線を確認する",
    "text": "最初は曲線を表示したまま、標的が通る波の経路を目で確認します。"
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "なめらかに追う",
    "text": "標的が曲線に沿って上下し、左右の端で折り返す間、途切れずに目で追います。"
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "設定は一つずつ",
    "text": "慣れたら速度を上げるか、線を隠す・ランダム速度を一つずつオンにします。"
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "サイン波の眼球追従トレーニングでは標的はどう動きますか？",
    "a": "標的は画面幅の約5%〜95%の間を一定の横方向の速さ（1.0倍で毎秒約220ピクセル）で往復し、画面の高さの約28%の振幅をもつ固定されたサイン波の曲線に沿って上下します。端に着くと向きを変え、同じ曲線を戻ってきます。視線だけを使うブラウザ練習で、視力検査ではありません。"
  },
  {
    "q": "なぜ上下の速さが変わり続けるのですか？",
    "a": "横方向の速さは一定ですが、曲線の傾きが変わるためです。曲線の中央を通るときに上下の動きが最も速く、山と谷では一瞬上下の動きが止まったように見えます。"
  },
  {
    "q": "Hide LineとRandom Speedで何が変わりますか？",
    "a": "Hide Lineをオンにすると曲線が消え、経路を覚えるか動きだけを見て追うことになります。Random Speedをオンにすると移動速度が揺れ続けます。経路そのものは変わりません。"
  },
  {
    "q": "目の動きやスコアを記録しますか？",
    "a": "いいえ。ブラウザは視線の向きを知ることができず、クリックや命中判定もありません。スコアはなく、終えたセッション数だけがこのブラウザに保存されます。視線を保つのは自分自身です。"
  },
  {
    "q": "どんな設定を変えられますか？",
    "a": "3-2-1のカウントダウン後、30・45・60・90・120秒（初期値60秒）のセッションが始まります。速度0.5〜9.0倍、標的サイズ10〜50px、標的の色、Hide Line（線を隠す）・Random Speed（ランダム速度）・Gaze Trail（残像）・Neon Glow・Scanlinesの各トグル、明るい／暗い背景を選べます。Escキーでいつでも終了できます。"
  },
  {
    "q": "視力やゲームの腕が上がりますか？",
    "a": "保証はできません。視力検査や治療ではなく、目で標的を見る練習ツールです。視力の改善やエイムの向上は約束しません。目の不調が気になる場合は専門医に相談してください。"
  },
  {
    "q": "どれくらい練習すればよいですか？",
    "a": "1〜2分のセッションを数回行って休む、短いブロックで十分です。目が疲れたり乾いたりしたら遠くを見てまばたきし、痛み・めまい・吐き気・頭痛があれば中止してください。"
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "サイン波の眼球追従トレーニングガイド",
  "intro": [
    "サイン波の眼球追従トレーニングは、画面を左右に往復しながら固定されたサイン波の曲線に沿って上下する標的を、目でなめらかに追うブラウザ練習です。標的は一定の横方向の速さで動き、左右の端で折り返します。",
    "なめらかな追従眼球運動は、遅い標的ならほぼ標的と同じ速さで追えますが、速くなるほど遅れやすいと説明されています（Robinson, 1965）。この練習では速度を変えながら、山と中央で変わる動きを追います。",
    "ブラウザが知っているのは標的を描いた位置と設定だけで、目が実際にどこを見たかは記録できません。スコアや正確さの数値もないので、同じ画面・距離・設定で自分の楽さと集中を比べてください。リフレッシュレートや表示遅延も見え方に影響します（Woods et al., 2015）。"
  ],
  "benchmarks": {
    "title": "練習の段階（SkillDrillsの目安）",
    "headers": [
      "段階",
      "練習の目標"
    ],
    "rows": [
      [
        "段階1",
        "1.0倍・曲線表示で途切れずに追う"
      ],
      [
        "段階2",
        "左右の折り返しでも見失わない"
      ],
      [
        "段階3",
        "速度を上げ、速い中央部分を追う"
      ],
      [
        "段階4",
        "Hide LineかRandom Speedを一つずつ追加"
      ]
    ],
    "note": "SkillDrillsの練習段階の目安であり、検査基準・利用者統計・パーセンタイルではありません。"
  },
  "techniques": {
    "title": "練習のコツ",
    "items": [
      {
        "name": "山と中央のリズムをつかむ",
        "desc": "山で一瞬ゆっくりになり、中央で速くなるリズムを知って追うと途切れにくくなります。",
        "tips": "標的に遅れる感じがしたら速度を下げます。"
      },
      {
        "name": "カーソルではなく標的を見る",
        "desc": "マウスは使わなくて構いません。手を置いたまま、目だけで標的を見ます。",
        "tips": "頭や首が一緒に動いていないか時々確認します。"
      },
      {
        "name": "難しくするのは一つずつ",
        "desc": "速度、線を隠す、ランダム速度は別々に上げます。楽さが崩れたら前の設定に戻します。",
        "tips": "設定を変えたら前のセッションと直接比べないでください。"
      },
      {
        "name": "短くやって休む",
        "desc": "短いセッションの間にまばたきし、遠くを見ます。長くやれば良いわけではありません。",
        "tips": "痛みやめまいがあればすぐにやめます。"
      }
    ]
  },
  "steps": [
    "画面から楽な距離をとって座り、肩と首の力を抜きます。",
    "30〜60秒、速度1.0倍、線を表示した状態で始めます。",
    "標的が波の曲線に沿って上下しながら左右に往復する間、途切れずに目で追います。",
    "慣れたら速度を上げるか、線を隠す・ランダム速度を一つずつオンにします。"
  ],
  "audience": "規則的な曲線に沿って動く標的を目で追う練習を、気軽に試したい人。"
},
  faqs,
  sources: pickSources('stark1962', 'robinson1965', 'rashbass1961', 'bahill1980', 'barnes2008', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/constant-slow-pursuit", label: "低速追従眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/directional-chaos-pursuit", label: "方向変化に合わせる追従テスト" },
    { href: "/ja/drills/visual-tracking/dynamic-evasion-pursuit", label: "回避する標的の追従訓練" },
    { href: "/ja/drills/visual-tracking/ghosting-suppress-pursuit", label: "残像を抑える固視トレーニング" },
    { href: "/ja/drills/visual-tracking/infinity-pursuit", label: "8の字眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/predictive-pursuit", label: "遮蔽後の軌道予測テスト" }
  ],
};

export default function JapaneseSineWavePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SineWavePursuitClient copy={{"title": "サイン波の眼球追従トレーニング", "subtitle": "波の曲線を往復する標的を目で追う", "description": "サイン波の眼球追従トレーニングは、画面を左右に往復しながら固定された波の曲線に沿って上下する標的を目で追う練習です。Hide Lineで曲線が消えます。クリックやスコアはなく、ブラウザは視線を記録しません。"}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
