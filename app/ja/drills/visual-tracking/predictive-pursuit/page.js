import PredictivePursuitClient from '@/app/drills/visual-tracking/predictive-pursuit/PredictivePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/predictive-pursuit';
const title = "予測視線トレーニング｜着地点を先読み | SkillDrills";
const description = "約2.2秒ごとに新しい目的地へすべるように動き、減速して止まる標的を追う無料の予測視線トレーニング。目的地の線を隠すと、動きだけから着地点を先読みします。";

export const metadata = {
  title,
  description,
  keywords: ["予測視線トレーニング", "予測 追視 練習", "着地点 先読み", "眼球運動 トレーニング", "視線追従 練習", "無料 ブラウザ ドリル"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/predictive-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "予測視線トレーニング", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "予測視線トレーニング",
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
  name: "予測視線トレーニングのやり方",
  description: "新しい目的地へ動く標的を追い、止まる位置を先読みする4ステップの練習です。",
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
    "name": "目的地の線を見る",
    "text": "最初は標的と目的地を結ぶ線を表示したまま、標的が線に沿って動き、止まるまでを目で追います。"
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "着地点を先読みする",
    "text": "Hide Lineをオンにし、標的が動き出す向きと速さだけから止まる位置を先読みして追います。"
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
    "q": "予測視線トレーニングでは標的はどう動きますか？",
    "a": "速度1.0倍では約2.2秒ごとに画面のランダムな地点が新しい目的地になります。標的はそこへ勢いよく動き出し、だんだん減速して約1.5秒以内に止まり、次の目的地が決まるまで待ちます。隠れたり消えたりする区間はありません。視線だけを使うブラウザ練習です。"
  },
  {
    "q": "何を予測するのですか？",
    "a": "標的が止まる位置です。初期状態では標的と目的地を結ぶ線が表示され、着地点が見えています。Hide Lineをオンにすると線が消えるので、動き出しの向きと減速から着地点を先読みします。"
  },
  {
    "q": "速度とRandom Speedで何が変わりますか？",
    "a": "速度を上げると移動も目的地の切り替えも速くなります。Random Speedをオンにすると速度が揺れ続け、次の目的地までの間隔も不規則になります。"
  },
  {
    "q": "目の動きやスコアを記録しますか？",
    "a": "いいえ。ブラウザは視線の向きを知ることができず、クリックや命中判定もありません。判定はありません。ポインターで標的を追うと、終了画面にポインターが標的上にあった時間と標的中心からの平均距離が表示されます。測っているのはポインターで、目ではありません。視線を保つのは自分自身です。"
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
  "heading": "予測視線トレーニングガイド",
  "intro": [
    "予測視線トレーニングは、新しい目的地へすべるように動き、減速して止まる標的を目で追い、止まる位置を先読みするブラウザ練習です。速度1.0倍では約2.2秒ごとにランダムな目的地が決まり、目的地の線を隠すと動きだけから着地点を予測することになります。",
    "なめらかな追従眼球運動は動きが始まってから少し遅れて立ち上がるため、動きを予期することがその遅れを補うと説明されています（Kowler, 1989; Barnes, 2008）。この練習はそうした予期が必要な場面をくり返します。",
    "ブラウザが知っているのは標的を描いた位置と設定だけで、目が実際にどこを見たかは記録できません。表示されるのはポインターと標的の距離だけで、目の測定ではないので、同じ画面・距離・設定で自分の楽さと集中を比べてください。リフレッシュレートや表示遅延も見え方に影響します（Woods et al., 2015）。"
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
        "1.0倍・目的地の線表示で移動と停止を追う"
      ],
      [
        "段階2",
        "標的より先に着地点を見る"
      ],
      [
        "段階3",
        "Hide Lineをオンにし、動き出しだけで予測"
      ],
      [
        "段階4",
        "速度かRandom Speedを一つずつ追加"
      ]
    ],
    "note": "SkillDrillsの練習段階の目安であり、公式な基準・利用者統計・パーセンタイルではありません。"
  },
  "techniques": {
    "title": "練習のコツ",
    "items": [
      {
        "name": "動き出しの瞬間を見逃さない",
        "desc": "標的が動き出す瞬間の向きと速さに注目します。減速のカーブから止まる位置の見当がつきます。",
        "tips": "線を隠すのが難しければ、線を表示して着地のパターンに慣れ直します。"
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
    "標的が動き出したら、向きと減速から止まる位置を先読みして追います。",
    "慣れたら速度を上げるか、線を隠す・ランダム速度を一つずつオンにします。"
  ],
  "audience": "動く標的がどこで止まるかを先読みしながら追う練習を、気軽に試したい人。"
},
  faqs,
  sources: pickSources('barnes2008', 'bennett2003', 'kowler1989', 'krauzlis2004', 'robinson1965', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/constant-slow-pursuit", label: "低速追従眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/directional-chaos-pursuit", label: "方向変化に合わせる追従テスト" },
    { href: "/ja/drills/visual-tracking/dynamic-evasion-pursuit", label: "回避する標的の追従訓練" },
    { href: "/ja/drills/visual-tracking/ghosting-suppress-pursuit", label: "残像を抑える固視トレーニング" },
    { href: "/ja/drills/visual-tracking/infinity-pursuit", label: "8の字眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/momentum-teleport-pursuit", label: "瞬間移動する標的の追従エイム" }
  ],
};

export default function JapanesePredictivePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PredictivePursuitClient copy={{"title": "予測視線トレーニング", "subtitle": "標的が止まる位置を先に読む練習", "description": "予測視線トレーニングは、約2.2秒ごと（1.0倍速）に新しい目的地へ動き、減速して止まる標的を追い、止まる位置を先読みする練習です。Hide Lineで目的地の線が消えます。クリックは不要で、終了画面にはポインターと標的の距離が表示されます。ブラウザは視線を記録しません。"}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
