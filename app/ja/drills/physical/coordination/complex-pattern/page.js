import ComplexPatternClient from '@/app/drills/physical/coordination/complex-pattern/ComplexPatternClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/ja/drills/physical/coordination/complex-pattern';
const TITLE = "図形記憶テスト｜見た経路をマウスでなぞる空間認識ゲーム | SkillDrills";
const DESCRIPTION = "図形記憶テスト：一瞬だけ表示される点と線の経路を覚え、消えた後にスタート地点からゴールまでマウスでなぞって再現します。点は3〜8個、45秒間、一致率で判定する無料のブラウザゲームです。インストール不要で、今すぐブラウザで遊べます。";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "図形記憶テスト",
  "図形 記憶 ゲーム",
  "空間認識 ゲーム",
  "パターンをなぞる",
  "経路 記憶 ゲーム"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/complex-pattern'),
  },
  openGraph: {
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    "q": "図形記憶テストはどうやって遊びますか？",
    "a": "経路が短時間表示されてから消えます。水色のスタートノードの中でマウスボタンを押したまま、覚えた順番どおりに点を通って赤紫のゴールノードで離すと、描いた線が元の経路と比較されて成否が決まります。"
  },
  {
    "q": "一致率（%）はどう計算されますか？",
    "a": "描いた線と元の経路を同じ数の点に分け、互いに最も近い点までの平均距離（ピクセル）を求めて100から引きます。スタートまたはゴールがノードから約45px以上ずれると失敗になります。"
  },
  {
    "q": "レベルが上がると何が変わりますか？",
    "a": "経路の点の数が3個から8個に増え、表示時間が2.0秒から0.6秒に短くなり、成功に必要な一致率が50%から85%に上がります。レベル3からジグザグ、レベル4から渦巻き型の経路が出ることがあります。"
  },
  {
    "q": "失敗すると減点されますか？",
    "a": "されません。基準の一致率に届かない場合はコンボ倍率が1.0倍に戻るだけで、スコアや残り時間は減りません。コンボ倍率は連続成功に応じて最大3.0倍まで上がります。"
  },
  {
    "q": "1回のプレイ時間は？",
    "a": "45秒固定です。レベルは毎回1から始まります。"
  },
  {
    "q": "紙の図形記憶検査と同じものですか？",
    "a": "違います。このゲームは心理検査や適性検査を再現したものではなく、採点方法も異なります。短時間見た経路を覚えてマウスでなぞる練習として利用してください。"
  },
  {
    "q": "スマホでも遊べますか？",
    "a": "マウスのドラッグで操作するゲームのため、マウスを接続したPCのブラウザでのプレイをおすすめします。"
  },
  {
    "q": "無料ですか？記録はどこに保存されますか？",
    "a": "無料で、インストールや会員登録は不要です。ベストスコアなどの記録は使用中のブラウザ内にのみ保存されます。"
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills ホーム", item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: "フィジカルドリル", item: 'https://skilldrills.online/ja/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "図形記憶テスト", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "図形記憶テスト",
  description: DESCRIPTION,
  url: PAGE_URL,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "HTML5 Canvas対応の最新ブラウザとマウス",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ja' },
  inLanguage: 'ja',
  dateModified: '2026-11-10',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja',
  dateModified: '2026-11-10',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const guide = {
  "heading": "図形記憶テストの遊び方とコツ",
  "intro": [
    "図形記憶テストは、短時間だけ表示された経路を覚えてマウスで再現する無料のブラウザゲームです。経路が消えたら水色のスタートノードからドラッグを始め、覚えた順番どおりに点を通って赤紫のゴールノードでボタンを離します。描いた線が元の経路にどれだけ近いかが一致率（%）で計算され、基準を超えるとスコアとコンボが上がります。紙の図形検査ではなく、覚えた経路をマウスでなぞる空間認識ゲームです。",
    "1回は45秒です。レベルは毎回1から始まり、スコアと連続成功に応じて上がります。レベル15前後で点8個、表示時間0.6秒、必要一致率85%に到達します。難易度設計には、視空間情報を一時的に保持するワーキングメモリのモデル（Baddeley & Hitch, 1974）と、その容量がおよそ4項目前後とする研究（Cowan, 2001）を参考にしています。このゲームは練習用であり、記憶力や認知機能を診断・測定する検査ではありません。"
  ],
  "techniques": {
    "title": "正確になぞるためのコツ",
    "items": [
      {
        "name": "点ではなく形で覚える",
        "desc": "点が5個以上になったら、1つずつ覚えるより「N字」「三角形＋直線」のように2〜3個の大きな形にまとめて覚えるほうが楽です。",
        "tips": "表示中はまずスタートとゴールの位置を確認し、残りは全体の輪郭でとらえましょう。"
      },
      {
        "name": "スタートとゴールを正確に",
        "desc": "スタートノードから約45px以上離れて描き始めたり、ゴールから外れた位置でボタンを離したりすると、形が合っていても失敗になります。",
        "tips": "ドラッグを始める前に、カーソルが水色のノードの中にあるか確認しましょう。"
      },
      {
        "name": "曲がり角で減速する",
        "desc": "直線は速く、曲がる点の近くではゆっくり動かすと、行き過ぎるミスが減ります。",
        "tips": "急いで描くより、一定の速さで一筆書きのように描くほうが一致率は安定します。"
      }
    ]
  },
  "steps": [
    "スタートボタンを押し、カウントダウンが終わるまで待ちます。",
    "表示された経路の形と順番を覚えます。",
    "経路が消えたら、水色のスタートノードの中でマウスボタンを押します。",
    "覚えた順番どおりに点を通り、赤紫のゴールノードでボタンを離します。"
  ],
  "audience": "一瞬見た形を覚えて手で再現する練習をしたい人、マウスで正確な線を描く感覚を身につけたいPCユーザー。",
  faqs: faqItems,
  sources: pickSources('baddeley1974', 'cowan2001', 'lashley1951', 'woodworth1899'),
};

export default function ComplexPatternPageJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComplexPatternClient
        copy={{
  "title": "図形記憶テスト",
  "subtitle": "経路を覚えて、マウスでなぞって再現",
  "rulesTitle": "図形記憶テストのルール",
  "rules": [
    {
      "title": "経路を覚える",
      "text": "点と線でできた経路が短時間だけ表示されます。消える前に形と順番を覚えましょう。"
    },
    {
      "title": "スタートからドラッグ",
      "text": "水色のスタートノードの中でマウスボタンを押し、すべての点を通って赤紫のゴールノードでボタンを離します。"
    },
    {
      "title": "一致率で判定",
      "text": "描いた線が元の経路と基準の一致率（最初は50%、レベルが上がると最大85%）を超え、スタートとゴールが合っていれば成功です。"
    },
    {
      "title": "失敗しても減点なし",
      "text": "基準に届かないとコンボ倍率が1.0倍に戻るだけで、スコアや45秒の制限時間は減りません。"
    }
  ],
  "aboutTitle": "図形記憶テストについて",
  "aboutHeading": "見て、覚えて、そのままなぞる",
  "aboutText": "図形記憶テストは、画面に一瞬表示された経路を覚え、消えた後にマウスのドラッグで同じ形を描き直す45秒のゲームです。最初は点3個の経路が2秒間表示され、レベルが上がるにつれて点は最大8個に増え、表示時間は0.6秒まで短くなり、ジグザグや渦巻き型の経路も混ざります。"
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/complex-pattern" />
    </>
  );
}
