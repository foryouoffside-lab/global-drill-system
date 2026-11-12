import CrossBodyMovementClient from '@/app/drills/physical/coordination/cross-body-movement/CrossBodyMovementClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/ja/drills/physical/coordination/cross-body-movement';
const TITLE = "目と手の協応テスト｜大人向けマウス協調運動ゲーム | SkillDrills";
const DESCRIPTION = "目と手の協応テスト：画面の片側にあるスタートノードから反対側のノードまで、細い通路からはみ出さないようにマウスを動かす大人向けゲームです。45秒間、通路はだんだん細くなります。無料・インストール不要で今すぐ遊べます。";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "目と手の協応テスト",
  "目と手の協応 大人",
  "協調運動ゲーム",
  "マウス 操作 ゲーム"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/cross-body-movement'),
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
    "q": "目と手の協応テストはどうやって遊びますか？",
    "a": "画面の端にある水色のノードにカーソルを合わせると接続が始まります。2つのノードを結ぶ直線の周りの通路からはみ出さずに、反対側の赤紫のノードに触れると得点です。クリックは必要ありません。"
  },
  {
    "q": "通路からはみ出すとどうなりますか？",
    "a": "その試行は失敗となり、新しいノードのペアが現れます。コンボ倍率は1.0倍に戻りますが、スコアと残り時間は減りません。"
  },
  {
    "q": "レベルが上がると何が変わりますか？",
    "a": "通路の許容幅（線から離れてよい距離）が10pxから4pxに、ノードの半径が16pxから8pxに小さくなり、ノードが画面の端に近づいて移動距離が長くなります。1回の成功の基本点も10点から40点に上がります。"
  },
  {
    "q": "スコアはどう計算されますか？",
    "a": "到達するたびに、レベルに応じた基本点にコンボ倍率を掛けて加算します。コンボ倍率は連続成功に応じて最大3.0倍まで上がります。"
  },
  {
    "q": "1回のプレイ時間は？",
    "a": "45秒固定で、レベルは毎回1から始まります。"
  },
  {
    "q": "子どもの発達や協応性を評価する検査ですか？",
    "a": "いいえ。大人向けのマウス操作練習ゲームであり、子どもの発達や運動機能を評価したり、療育・治療の効果をもたらしたりするものではありません。"
  },
  {
    "q": "スマホでも遊べますか？",
    "a": "マウス操作を前提としたゲームのため、マウスを接続したPCのブラウザをおすすめします。プレイ中にEscキーを押すと終了します。"
  },
  {
    "q": "無料ですか？",
    "a": "無料で、インストールや会員登録は不要です。記録は使用中のブラウザ内にのみ保存されます。"
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills ホーム", item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: "フィジカルドリル", item: 'https://skilldrills.online/ja/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "目と手の協応テスト", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "目と手の協応テスト",
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
  "heading": "目と手の協応テストの遊び方とコツ",
  "intro": [
    "目と手の協応テストは、画面を見ながらマウスカーソルを細い通路の中で正確に動かす、大人向けの無料ブラウザゲームです。画面の端にある水色のノードにカーソルを合わせたら、2つのノードを結ぶ直線から外れないように反対側の赤紫のノードまで動かすと得点になります。通路から外れるとその試行は失敗となり、新しいノードのペアが現れます。",
    "1回は45秒で、レベルは毎回1から始まります。レベルが上がるにつれて通路の許容幅は10pxから4pxへ、ノードの半径は16pxから8pxへ小さくなり、ノードは画面の端に近づきます。距離が長く目標が小さいほど動作が難しくなるというフィッツの法則（Fitts, 1954）を難易度設計の参考にしています。このゲームはマウス操作の練習用であり、発達や運動機能を評価・診断する検査ではありません。"
  ],
  "techniques": {
    "title": "通路からはみ出さないコツ",
    "items": [
      {
        "name": "先にゴールを見る",
        "desc": "スタートノードにカーソルを合わせる前に、反対側のノードの位置を確認しておくと最初の方向を正確に決められます。",
        "tips": "スタートノードに触れた瞬間に接続が始まるので、近づく段階から進む方向を意識しましょう。"
      },
      {
        "name": "一定の速さでまっすぐ",
        "desc": "勢いよく振ると最後にぶれて通路から外れやすくなります。最初から最後まで同じくらいの速さでまっすぐ動かしましょう。",
        "tips": "通路が4pxまで狭くなる高レベルでは、少し速度を落とすほうがコンボを保ちやすくなります。"
      },
      {
        "name": "到着直前に減速",
        "desc": "素早く近づいてから目標付近でゆっくり仕上げる動き（Woodworth, 1899）が、小さなノードに正確に届くのに役立ちます。",
        "tips": "ノードの手前で手首の力を抜き、止まるように到着しましょう。"
      }
    ]
  },
  "steps": [
    "スタートボタンを押し、カウントダウンを待ちます。",
    "反対側の赤紫のノードの位置を確認します。",
    "水色のスタートノードにカーソルを合わせて接続を始めます。",
    "通路からはみ出さないように赤紫のノードまでカーソルを動かします。"
  ],
  "audience": "マウスを長く、まっすぐ動かす感覚を練習したい大人のPCユーザーやゲーマー。",
  faqs: faqItems,
  sources: pickSources('carey1996', 'fitts1954', 'woodworth1899'),
};

export default function CrossBodyMovementPageJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CrossBodyMovementClient
        copy={{
  "title": "目と手の協応テスト",
  "subtitle": "通路からはみ出さずに画面の反対側へ",
  "rulesTitle": "目と手の協応テストのルール",
  "rules": [
    {
      "title": "スタートノードに合わせる",
      "text": "画面の端にある水色のスタートノードにカーソルを合わせると接続が始まります。クリックは不要です。"
    },
    {
      "title": "通路に沿って移動",
      "text": "2つのノードを結ぶ直線の周りの通路の中を通って、反対側の赤紫のノードまでカーソルを動かします。"
    },
    {
      "title": "到達で得点",
      "text": "通路からはみ出さずに赤紫のノードに触れると得点し、連続成功のコンボが上がります。"
    },
    {
      "title": "はみ出すとコンボリセット",
      "text": "通路から外れるとその試行は失敗となり、新しいノードのペアが現れます。コンボ倍率は1.0倍に戻りますが、スコアと時間は減りません。"
    }
  ],
  "aboutTitle": "目と手の協応テストについて",
  "aboutHeading": "細い通路に沿って画面を横切る",
  "aboutText": "このゲームは、画面の左端と右端に1つずつ現れる2つのノードをマウスで結ぶ45秒の練習です。2つのノードの高さはランダムなので経路は斜めや水平になります。レベルが上がるにつれて通路の許容幅は10pxから4pxに狭まり、ノードは小さくなって画面の端に近づくため、移動距離が長くなります。"
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/cross-body-movement" />
    </>
  );
}
