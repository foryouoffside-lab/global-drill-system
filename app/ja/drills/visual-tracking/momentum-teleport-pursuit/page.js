import MomentumTeleportPursuitClient from '@/app/drills/visual-tracking/momentum-teleport-pursuit/MomentumTeleportPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/momentum-teleport-pursuit';
const title = "瞬間移動標的の視線再捕捉 | SkillDrills";
const description = "直線に動き、約1.2秒ごとにランダムな位置へ瞬間移動する標的を目で見つけ直す無料の眼球運動ドリル。移動の向きと速さは保たれ、速度と時間を調整できます。";

export const metadata = {
  title,
  description,
  keywords: ["瞬間移動標的の視線再捕捉", "視線 再捕捉", "眼球運動 トレーニング", "サッカード 練習", "視線追従 練習", "無料 ブラウザ ドリル"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/momentum-teleport-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "瞬間移動標的の視線再捕捉", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "瞬間移動標的の視線再捕捉",
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
  name: "瞬間移動標的の視線再捕捉のやり方",
  description: "瞬間移動した標的を見つけ直し、同じ向きの動きを続けて追う4ステップの練習です。",
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
    "name": "動きを追う",
    "text": "標的が直線に動き、画面の端で跳ね返る間、目でなめらかに追います。"
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "移動後に見つけ直す",
    "text": "標的が別の位置へ移ったら視線を一度で新しい位置へ移し、同じ向きの動きを続けて追います。"
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
    "q": "瞬間移動標的の視線再捕捉とはどんなドリルですか？",
    "a": "標的は一定の向きと速さで直線に動き、画面の端で跳ね返ります。速度1.0倍では約1.2秒ごとにランダムな位置へ瞬間移動しますが、移動の向きと速さはそのままです。新しい位置を目で見つけ直し、その動きを続けて追うブラウザ練習で、視力検査や治療ではありません。"
  },
  {
    "q": "移動先を前もって予測できますか？",
    "a": "できません。移動先は毎回ランダムです。予測できるのは、移動後も同じ向きと速さで動き続けることだけです。標的から伸びる短い線が進行方向を示し、Hide Lineをオンにするとこの線は消えます。"
  },
  {
    "q": "速度を上げると何が変わりますか？",
    "a": "標的が速くなり、瞬間移動の間隔も短くなります。2倍速では約0.6秒ごとに位置が変わります。Random Speedをオンにすると速度が揺れ続け、瞬間移動の間隔も不規則になります。"
  },
  {
    "q": "目の動きやスコアを記録しますか？",
    "a": "いいえ。ブラウザは視線の向きを知ることができず、クリックや命中判定もありません。終了時に表示されるのはポインターの値（標的上の時間と中心からの距離）だけで、目の値ではありません。保存されるのは終えたセッション数だけです。視線を保つのは自分自身です。"
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
  "heading": "瞬間移動標的の視線再捕捉ガイド",
  "intro": [
    "瞬間移動標的の視線再捕捉は、直線に動いていた標的が突然別の位置へ移ったときに、目で見つけ直すブラウザ練習です。標的は画面の端で跳ね返りながら動き、速度1.0倍では約1.2秒ごとにランダムな位置へ瞬間移動しますが、移動の向きと速さは保たれます。",
    "動く標的をなめらかに追う眼の動きと、離れた位置へ視線を素早く移す動き（サッカード）は別の動きとして説明されます（Rashbass, 1961; Krauzlis, 2004）。この練習では、その二つが交互に必要になる場面をくり返し経験します。",
    "ブラウザが知っているのは標的を描いた位置と設定だけで、目が実際にどこを見たかは記録できません。表示されるのはポインターの値（標的上の時間と中心からの距離）だけなので、同じ画面・距離・設定で自分の楽さと集中を比べてください。リフレッシュレートや表示遅延も見え方に影響します（Woods et al., 2015）。"
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
        "1.0倍・方向線表示で楽に見つけ直す"
      ],
      [
        "段階2",
        "移動後、一度で新しい位置を捉える"
      ],
      [
        "段階3",
        "速度を上げ、短くなった間隔に慣れる"
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
        "name": "一度で移して、続けて追う",
        "desc": "標的が移ったらあちこち探さず、新しい位置へ一度で視線を移し、直前と同じ向きの動きを続けて追います。",
        "tips": "よく見失う場合は速度を下げ、方向線を表示した状態に戻します。"
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
    "標的が瞬間移動したら新しい位置へ視線を移し、同じ向きの動きを続けて追います。",
    "慣れたら速度を上げるか、線を隠す・ランダム速度を一つずつオンにします。"
  ],
  "audience": "動きながら位置が変わる標的を目で見つけ直す練習を、気軽に試したい人。"
},
  faqs,
  sources: pickSources('rashbass1961', 'bahill1980', 'findlay1999', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/constant-slow-pursuit", label: "低速視線追従トレーニング" },
    { href: "/ja/drills/visual-tracking/directional-chaos-pursuit", label: "方向変化の視線追従" },
    { href: "/ja/drills/visual-tracking/dynamic-evasion-pursuit", label: "動く標的の追従訓練" },
    { href: "/ja/drills/visual-tracking/ghosting-suppress-pursuit", label: "残像を抑える固視訓練" },
    { href: "/ja/drills/visual-tracking/infinity-pursuit", label: "8の字眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/predictive-pursuit", label: "予測視線追従トレーニング" }
  ],
};

export default function JapaneseMomentumTeleportPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <MomentumTeleportPursuitClient copy={{"title": "瞬間移動標的の視線再捕捉", "subtitle": "同じ向きに動き続ける標的を見つけ直す練習", "description": "瞬間移動標的の視線再捕捉は、直線に動き、約1.2秒ごと（1.0倍速）にランダムな位置へ瞬間移動する標的を目で見つけ直す練習です。移動の向きと速さは保たれます。クリックはなく、終了時にポインターと標的の距離を表示しますが、ブラウザは視線を記録しません。"}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
