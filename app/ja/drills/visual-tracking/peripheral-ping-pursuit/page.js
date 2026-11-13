import PeripheralPingPursuitClient from '@/app/drills/visual-tracking/peripheral-ping-pursuit/PeripheralPingPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit';
const title = "中心固視で周辺の点滅に気づく練習 | SkillDrills";
const description = "画面中央の十字に視線を置いたまま、画面のあちこちで一瞬光る点に目を動かさずに気づく無料のブラウザ練習。速度と時間を調整できます。";

export const metadata = {
  title,
  description,
  keywords: ["中心固視 周辺視 練習", "周辺視 練習", "中心固視", "視線を動かさない 練習", "周辺 点滅 気づく", "無料 ブラウザ ドリル"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/peripheral-ping-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "中心固視で周辺の点滅に気づく練習", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "中心固視で周辺の点滅に気づく練習",
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
  name: "中心固視で周辺の点滅に気づく練習のやり方",
  description: "中央の十字に視線を固定したまま、周辺で光る点に気づく4ステップの練習です。",
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
    "name": "十字に視線を固定",
    "text": "セッションが始まったら画面中央の十字を見て、視線をそのまま保ちます。"
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "目を動かさずに気づく",
    "text": "画面のどこかで点が一瞬光ったら、目をそちらへ向けず周辺視だけで気づきます。"
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
    "q": "中心固視で周辺の点滅に気づく練習はどう進みますか？",
    "a": "画面中央に十字が固定され、画面のランダムな位置に点が一つずつ一瞬現れて消えます。速度1.0倍では点は約0.75秒表示され、消えたあと少し間をおいて別の場所に現れます。点は動きません。視線を十字に置いたまま点に気づくのが目標で、クリックは不要です。"
  },
  {
    "q": "速度とHide Lineで何が変わりますか？",
    "a": "速度を上げると点がより頻繁に、より短く現れます（最短で約0.25秒）。Random Speedをオンにすると点滅の頻度と長さが揺れ続けます。Hide Lineをオンにすると中央の十字が消え、目印なしで視線を中央に保つことになります。"
  },
  {
    "q": "点を見ようとして目を動かしてはいけませんか？",
    "a": "この練習の目的は中央に視線を保つことです。ブラウザは視線を記録できないので、目が点のほうへ動いていないか自分で確認してください。よく動いてしまうなら速度を下げます。"
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
    "a": "保証はできません。目で標的を見る練習ツールで、視力の改善やエイムの向上は約束しません。同じ画面と設定でセッションの記録を比べてください。"
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
  "heading": "中心固視で周辺の点滅に気づく練習ガイド",
  "intro": [
    "中心固視で周辺の点滅に気づく練習は、画面中央の十字に視線を置いたまま、画面のあちこちで一瞬光る点に目を動かさずに気づくブラウザ練習です。点は一度に一つずつランダムな位置に現れ、速度1.0倍では約0.75秒表示されます。",
    "中心視は視線の先の狭い範囲を細かく見、周辺視はその外側の変化に気づきます。周辺に何かが現れると目はそちらへ素早く動こうとしますが（Findlay & Walker, 1999）、この練習ではその動きをこらえて中央に視線を保つ場面をくり返します。",
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
        "1.0倍・十字表示で視線を中央に保つ"
      ],
      [
        "段階2",
        "目を動かさずにほとんどの点滅に気づく"
      ],
      [
        "段階3",
        "速度を上げ、短く頻繁な点滅に慣れる"
      ],
      [
        "段階4",
        "Hide LineかRandom Speedを一つずつ追加"
      ]
    ],
    "note": "SkillDrillsの練習段階の目安であり、公式な基準・利用者統計・パーセンタイルではありません。"
  },
  "techniques": {
    "title": "練習のコツ",
    "items": [
      {
        "name": "視線は中央、注意は広く",
        "desc": "十字を楽に見ながら、画面全体を広く意識します。点を探して目を動かしません。",
        "tips": "目がつい動くなら速度を下げ、十字を表示した状態に戻します。"
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
    "十字から目を離さず、画面のあちこちで光る点に周辺視で気づきます。",
    "慣れたら速度を上げるか、線を隠す・ランダム速度を一つずつオンにします。"
  ],
  "audience": "中央を見たまま周辺の変化に気づく練習を、気軽に試したい人。"
},
  faqs,
  sources: pickSources('posner1980', 'eriksen1986', 'wolfe1994', 'findlay1999', 'leigh2015', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/constant-slow-pursuit", label: "低速追従眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/directional-chaos-pursuit", label: "方向変化の視線追従テスト" },
    { href: "/ja/drills/visual-tracking/dynamic-evasion-pursuit", label: "反応的な動体追従訓練" },
    { href: "/ja/drills/visual-tracking/ghosting-suppress-pursuit", label: "残像を抑える固視訓練" },
    { href: "/ja/drills/visual-tracking/infinity-pursuit", label: "8の字眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/momentum-teleport-pursuit", label: "瞬間移動標的の視線再捕捉" }
  ],
};

export default function JapanesePeripheralPingPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PeripheralPingPursuitClient copy={{"title": "中心固視で周辺の点滅に気づく練習", "subtitle": "中央の十字を見たまま、画面の点滅に気づく", "description": "中央の十字に視線を置いたまま、ランダムな位置で約0.75秒（1.0倍速）光る点に目を動かさずに気づく練習です。クリックやスコアはなく、ブラウザは視線を記録しません。"}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
