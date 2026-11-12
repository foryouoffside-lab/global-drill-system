import SpatialShiftPursuitClient from '@/app/drills/visual-tracking/spatial-shift-pursuit/SpatialShiftPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/spatial-shift-pursuit';
const title = "軌道が急変する標的の追視トレーニング | SkillDrills";
const description = "直線に動いて壁で跳ね返り、予告なく向きと速さが急に変わる標的を目で追う無料の追視トレーニング。速度と時間を調整できます。";

export const metadata = {
  title,
  description,
  keywords: ["軌道が急変する標的の追視トレーニング", "軌道変化 追視", "視線追従 練習", "眼球運動 トレーニング", "動く標的 追う", "無料 ブラウザ ドリル"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/spatial-shift-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "軌道が急変する標的の追視トレーニング", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "軌道が急変する標的の追視トレーニング",
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
  name: "軌道が急変する標的の追視トレーニングのやり方",
  description: "急に向きと速さが変わる標的を見失わずに追う4ステップの練習です。",
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
    "name": "直線部分を追う",
    "text": "標的が直線に動き、画面の端で跳ね返る間、目でなめらかに追います。"
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "急変に合わせ直す",
    "text": "標的の向きと速さが急に変わったら、新しい動きに視線を合わせ直して追い続けます。"
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
    "q": "この追視トレーニングで標的はどう動きますか？",
    "a": "標的は直線に動いて画面の端で跳ね返り、跳ね返るたびに少しずつ（約2%）速くなります。さらにランダムな瞬間に予告なく向きと速さが変わります。横・縦の向きがそれぞれ反転するかそのままで、速さは0.8〜1.3倍に変わります。瞬間移動や画面の揺れはありません。視線だけを使うブラウザ練習で、視力検査ではありません。"
  },
  {
    "q": "向きの変化はどれくらいの頻度で起きますか？",
    "a": "決まった周期はなくランダムに起き、たいてい1秒に1回前後と頻繁に変わります。Random Speedをオンにすると変化の確率が2倍になり、移動速度も揺れ続けます。"
  },
  {
    "q": "標的から伸びる線は何ですか？",
    "a": "現在の進行方向と速さを示す線です。Hide Lineをオンにすると消えるので、標的の動きだけから向きの変化に気づく必要があります。"
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
  "heading": "軌道が急変する標的の追視トレーニングガイド",
  "intro": [
    "軌道が急変する標的の追視トレーニングは、直線に動いて壁で跳ね返り、予告なく向きと速さが急に変わる標的を目で追うブラウザ練習です。変化はランダムかつ頻繁に起き、標的が瞬間移動したり画面が動いたりすることはありません。",
    "動く標的の向きが急に変わると、なめらかな追従だけでは遅れ、視線を素早く移す補正の動きが混ざると説明されています（Robinson, 1965; Krauzlis, 2004）。この練習はそうした合わせ直しがくり返される場面をつくります。",
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
        "1.0倍・方向線表示で急変後に合わせ直す"
      ],
      [
        "段階2",
        "向きが変わってもほとんど見失わない"
      ],
      [
        "段階3",
        "速度を上げ、速い急変に慣れる"
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
        "name": "先回りしすぎない",
        "desc": "直線部分でもいつでも向きが変わり得ると考え、標的そのものに視線を置きます。先を見すぎると急変で大きく見失います。",
        "tips": "よく見失うなら速度を下げ、方向線を表示した状態に戻します。"
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
    "標的の向きと速さが急に変わったら、新しい動きに視線を合わせ直して追います。",
    "慣れたら速度を上げるか、線を隠す・ランダム速度を一つずつオンにします。"
  ],
  "audience": "予測しにくい動きを目で追う練習を、気軽に試したい人。"
},
  faqs,
  sources: pickSources('krauzlis2004', 'findlay1999', 'robinson1965', 'rashbass1961', 'kahlon1996', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/constant-slow-pursuit", label: "低速追従眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/directional-chaos-pursuit", label: "方向変化の追従テスト" },
    { href: "/ja/drills/visual-tracking/dynamic-evasion-pursuit", label: "回避標的の追従訓練" },
    { href: "/ja/drills/visual-tracking/ghosting-suppress-pursuit", label: "残像抑制固視トレーニング" },
    { href: "/ja/drills/visual-tracking/infinity-pursuit", label: "8の字眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/predictive-pursuit", label: "遮蔽軌道予測テスト" }
  ],
};

export default function JapaneseSpatialShiftPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SpatialShiftPursuitClient copy={{"title": "軌道が急変する標的の追視トレーニング", "subtitle": "予告なく向きと速さが変わる標的を追う", "description": "直線に動いて壁で跳ね返り、ランダムな瞬間に向きと速さが変わる標的を目で追う練習です。Hide Lineで方向線が消えます。クリックやスコアはなく、ブラウザは視線を記録しません。"}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
