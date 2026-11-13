import NBackClient from '@/app/drills/memory/working-memory/n-back/NBackClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Nバック課題｜ワーキングメモリ訓練 | SkillDrills",
  description: "無料のnバック課題をブラウザで。1文字ずつ表示されるアルファベットがN個前と同じかを「一致／不一致」で判定します。3バックから始まり、8問正解ごとに4バック、5バックへ上がるワーキングメモリ訓練です。",
  keywords: ['nバック課題', 'nバック課題 ブラウザ', 'nバック トレーニング', 'ワーキングメモリ訓練', '3バック', 'デュアルnバック'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Nバック課題｜ワーキングメモリ訓練 | SkillDrills",
    description: "ブラウザで遊べる無料のnバック課題。文字がN個前と一致するかを判定し、3バックから段階的に難しくなるワーキングメモリ訓練です。",
    type: "website",
    url: "https://skilldrills.online/ja/drills/memory/working-memory/n-back",
    siteName: "SkillDrills",
    locale: "ja_JP",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Nバック課題｜ワーキングメモリ訓練 | SkillDrills",
    description: "ブラウザで遊べる無料のnバック課題。文字がN個前と一致するかを判定し、3バックから段階的に難しくなるワーキングメモリ訓練です。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/memory/working-memory/n-back",
    languages: getAlternateLanguages('/drills/memory/working-memory/n-back'),
  },
};

const appDescription = "1文字ずつ表示される文字がN個前の文字と同じかを「一致／不一致」で答える、ブラウザで使える無料のnバック課題。3バックから始まり、8問正解ごとに1段階上がります。";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "記憶力トレーニング", "item": "https://skilldrills.online/ja/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "ワーキングメモリ", "item": "https://skilldrills.online/ja/drills/memory/working-memory" },
    { "@type": "ListItem", "position": 4, "name": "nバック課題", "item": "https://skilldrills.online/ja/drills/memory/working-memory/n-back" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "nバック課題（ワーキングメモリ訓練）",
  "url": "https://skilldrills.online/ja/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "nバック課題（ワーキングメモリ訓練）",
  "url": "https://skilldrills.online/ja/drills/memory/working-memory/n-back",
  "description": appDescription,
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Working Memory", "N-Back"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "nバック課題（ワーキングメモリ訓練）",
  "url": "https://skilldrills.online/ja/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "nバック課題のやり方",
  "description": "文字をN個前の文字と比べて一致／不一致を選ぶ4ステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/ja/drills/memory/working-memory/n-back#step-1",
      "name": "最初の3文字を覚える",
      "text": "開始直後の3文字は比べる相手がないので覚えるだけです。この間は残り時間が減りません。"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/ja/drills/memory/working-memory/n-back#step-2",
      "name": "N個前の文字と比べる",
      "text": "新しい文字が出たら、ちょうどN個前（最初は3個前）の文字と同じかを確認します。"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/ja/drills/memory/working-memory/n-back#step-3",
      "name": "一致か不一致を押す",
      "text": "同じなら「一致」、違えば「不一致」ボタンをクリックまたはタップします。回答時間は2秒から始まります。"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/ja/drills/memory/working-memory/n-back#step-4",
      "name": "頭の中のリストを更新する",
      "text": "判定したら一番古い文字を捨て、新しい文字を末尾に加えて直近N文字を保ちます。"
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
      "name": "このnバック課題はどうやって遊びますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "アルファベットが1文字ずつ表示されます。その文字がちょうどN個前の文字と同じなら「一致」、違えば「不一致」を押します。正解ごとに+150点です。最初のN文字は比べる相手がないため覚えるだけで、その間は残り時間が減りません。"
      }
    },
    {
      "@type": "Question",
      "name": "何バックから始まり、どう上がりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3バックから始まります。1,200点（8問正解）ごとに1段階上がって4バック、5バックとなり、次の文字から新しい段階で比較します。間違えても段階は下がりません。"
      }
    },
    {
      "@type": "Question",
      "name": "回答時間と制限時間は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1文字あたりの回答時間は2秒で、段階が上がるごとに0.1秒ずつ短くなり最短1.2秒です。セッションの制限時間は45秒で、最初のN文字を覚えている間は止まっています。"
      }
    },
    {
      "@type": "Question",
      "name": "間違えたり答えられなかったりするとどうなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "減点も時間のペナルティもありません。誤答と無回答は正答率でミスとして記録され、次の文字に進みます。一致する文字はおよそ3回に1回なので、「不一致」の判断も同じくらい大切です。"
      }
    },
    {
      "@type": "Question",
      "name": "デュアルnバックですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。文字だけを追うシングルnバック課題です。デュアルnバックは画面上の位置と音声など2種類の刺激を同時に比べる変種で、ここでは提供していません。"
      }
    },
    {
      "@type": "Question",
      "name": "キーボードで操作できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "現在は画面の「一致」「不一致」ボタンをマウスでクリックするか、タッチでタップして回答します。キーボードショートカットには対応していません。"
      }
    },
    {
      "@type": "Question",
      "name": "nバック課題でIQは上がりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "確立していません。Jaeggiら（2008）がnバック訓練と流動性知能の関係を報告しましたが、その後の研究結果は一致せず、知能を高める効果は実証されていません。練習すればこの課題自体のスコアは上がることがあります。"
      }
    },
    {
      "@type": "Question",
      "name": "記録は保存されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "自己ベストと最高段階はこのブラウザのlocalStorageにのみ保存され、サーバーには送信されません。結果は練習の記録です。"
      }
    }
  ]
};

const nBackClientCopyJa = {
  h1Keyword: "nバック課題",
  h1Suffix: "（ワーキングメモリ訓練）",
  subtitle: "文字がN個前と同じかを判定。3バックから始まります。",
  statScore: "スコア",
  statTime: "残り時間",
  statLevel: "段階",
  statBest: "自己ベスト",
  hudScore: "スコア",
  hudTime: "残り時間",
  modeSuffix: "バック",
  memorizingText: "最初の {n} 文字を記憶中...",
  btnMatch: "一致",
  btnNoMatch: "不一致",
  startTitle: "nバック課題",
  startSubtitle: "ワーキングメモリ • 3バックから",
  countdownSubtitle: "準備してください",
  newBest: "新記録",
  statPoints: "獲得ポイント",
  statAccuracy: "正答率",
  statPeakLevel: "最高段階",
  statPerfects: "正解数",
  btnPlayAgain: "もう一度プレイ",
  rulesTitle: "ルールと得点",
  rulesItems: [
    { num: "1", text: "一致／不一致の判定（N個前の文字）", highlight: "+150 PTS", result: "正解ごとに加点" },
    { num: "2", text: "段階アップ", highlight: "3-Back → 4-Back+", result: "1,200点（8問正解）ごと" },
    { num: "3", text: "回答時間の短縮", highlight: "2.0秒 → 最短1.2秒", result: "段階ごとに0.1秒短く" },
    { num: "4", text: "無回答", highlight: "減点なし", result: "スコア・時間の減少なし、ミスとして記録" },
    { num: "5", text: "誤答", highlight: "減点なし", result: "段階は維持、45秒の時計はそのまま進行" }
  ]
};

const guideJa = {
  intro: [
    "nバック課題は、1文字ずつ表示される文字がちょうどN個前の文字と同じかを判定する、ブラウザで使える無料のワーキングメモリ訓練です。直近N文字を頭の中に保ちながら、新しい文字が来るたびにリストを更新する必要があり、単純な暗記よりも記憶の「更新」に負荷がかかります（Kirchner, 1958）。",
    "課題は3バックから始まります。最初の3文字は覚えるだけで、その後は1文字ごとに「一致」か「不一致」を押します。正解は+150点で、1,200点（8問正解）ごとに4バック、5バックへ上がります。回答時間は2秒から始まり、段階ごとに0.1秒ずつ短くなって最短1.2秒です。",
    "セッションの制限時間は45秒で、最初の文字を覚えている間は止まります。誤答や無回答に減点はなく段階も下がらず、正答率にミスとして記録されるだけです。これは文字だけを使うシングルnバックで、デュアルnバック（位置＋音声）ではありません。操作は画面ボタンのクリックまたはタップです。",
    "データの透明性：スコアはこのブラウザのlocalStorageにのみ保存され、サーバーには送信されません。そのため当サイトはユーザー平均やランキングを公開していません。"
  ],
  benchmarks: {
    title: "SkillDrills練習の目安（スコア = 正解数 × 150点）",
    headers: ["練習の目安", "正解数", "スコア", "到達段階"],
    rows: [
      ["入門", "0〜3問", "0〜450点", "3バック。ルールと回答のリズムに慣れる段階"],
      ["基本", "4〜7問", "600〜1,050点", "3バックのまま。直近3文字のリストを安定して更新"],
      ["上級", "8〜15問", "1,200〜2,250点", "4バック到達、回答時間1.9秒"],
      ["熟練", "16問以上", "2,400点以上", "5バック以上、回答時間1.8秒以下"]
    ],
    note: "この表はこのゲームの採点ルールから計算したSkillDrillsの練習の目安であり、母集団の基準値ではありません。"
  },
  techniques: {
    title: "nバック課題のコツ",
    items: [
      { name: "小声で繰り返す", desc: "直近N文字を一定のリズムで心の中で繰り返します（例：B-M-T → M-T-R）。新しい文字が来たら先頭の文字と比べて捨てます。", tips: "文字名を短く唱えるとリズムを保ちやすくなります。" },
      { name: "近い文字にだまされない", desc: "1〜2個前に出た文字は見覚えがあっても正解ではありません。ちょうどN個前かを確認しましょう。", tips: "見覚えだけで「一致」を押さないこと。" },
      { name: "「不一致」も積極的に", desc: "一致する文字はおよそ3回に1回です。迷って回答を先延ばしにすると無回答のミスになります。", tips: "回答時間内に必ずどちらかを選びましょう。" },
      { name: "見失ったらすぐ組み直す", desc: "順番を見失ったら過去を思い出そうとせず、今の文字からリストを作り直します。", tips: "N文字経てば再び正確に比較できます。" }
    ]
  },
  steps: [
    "スタートを押し、3秒のカウントダウンを待ちます。",
    "最初の3文字を覚えます（時間は減りません）。",
    "その後は1文字ごとに、3個前と同じなら「一致」、違えば「不一致」を押します。",
    "8問正解ごとに4バック、5バックへ上がり、回答時間が短くなります。",
    "45秒が終わったらスコア、最高段階、正答率を確認します。"
  ],
  audience: "nバック課題をブラウザですぐ試したい人、ワーキングメモリの課題を体験したい学生、短い脳トレゲームを探しているすべての人。",
  faqs: faqSchema.mainEntity.map(({ name, acceptedAnswer }) => ({ q: name, a: acceptedAnswer.text })),
  sources: pickSources('baddeley1974', 'cowan2001'),
  related: [
    { href: "/ja/drills/memory/spatial-memory/path-tracing", label: "コルシブロックテスト" },
    { href: "/ja/drills/memory/spatial-memory/grid-memorization", label: "視覚記憶テスト" },
    { href: "/ja/drills/memory/spatial-memory/object-location", label: "空間記憶テスト" },
    { href: "/ja/drills/memory/short-term-memory/digit-span", label: "数字記憶テスト" },
    { href: "/ja/drills/memory/short-term-memory/word-recall", label: "単語記憶テスト" }
  ]
};

export default function NBackPageJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <NBackClient copy={nBackClientCopyJa} />

      <DrillGuide guide={guideJa} />

      <RelatedDrills />
    </>
  );
}
