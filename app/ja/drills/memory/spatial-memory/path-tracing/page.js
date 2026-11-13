import PathTracingClient from '@/app/drills/memory/spatial-memory/path-tracing/PathTracingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "コルシブロックテスト｜順番記憶 | SkillDrills",
  description: "無料のコルシブロックテスト。グリッド上で順番に光るタイルの位置と順番を覚え、同じ順序でクリックまたはタップします。3×3から7×7へ伸びていく経路で、順番記憶と視空間ワーキングメモリをブラウザで練習できます。",
  keywords: ['コルシブロックテスト', '順番記憶', '視空間ワーキングメモリ', '順番記憶テスト', '空間記憶 ゲーム', '脳トレ 順番記憶'],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/path-tracing', 'ja'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "コルシブロックテスト｜視空間記憶",
    description: "光るブロックの位置と順番を覚え、同じ順序でタップ。無料で試せる視空間ワーキングメモリのブラウザ課題です。",
    url: "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "コルシブロックテスト｜視空間記憶",
    description: "光るブロックの位置と順番を覚え、同じ順序でタップ。無料で試せる視空間ワーキングメモリのブラウザ課題です。",
  },
};

export const dynamic = 'force-static';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ホーム",
      "item": "https://skilldrills.online/ja"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "記憶力トレーニング",
      "item": "https://skilldrills.online/ja/drills/memory"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "空間記憶",
      "item": "https://skilldrills.online/ja/drills/memory/spatial-memory"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "コルシブロックテスト",
      "item": "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing"
    }
  ]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "コルシブロックテスト（順番記憶）",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "dateModified": "2026-11-12",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "グリッド上で隣り合うタイルが1つずつ光ってできる経路を覚え、同じ順番でタップする無料のブラウザ版コルシブロック方式の順番記憶練習。経路を完成させるたびに1ステップ長くなります。",
  "genre": "Spatial Memory",
  "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "コルシブロックテスト（順番記憶）",
  "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing",
  "description": "グリッド上で隣り合うタイルが1つずつ光ってできる経路を覚え、同じ順番でタップする無料のブラウザ版コルシブロック方式の順番記憶練習。経路を完成させるたびに1ステップ長くなります。",
  "dateModified": "2026-11-12",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "isAccessibleForFree": true,
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "コルシブロックテスト（順番記憶）",
  "description": "グリッド上で隣り合うタイルが1つずつ光ってできる経路を覚え、同じ順番でタップする無料のブラウザ版コルシブロック方式の順番記憶練習。経路を完成させるたびに1ステップ長くなります。",
  "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing",
  "genre": [
    "Memory Game",
    "Spatial Sequence Memory"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "operatingSystem": "Any",
  "numberOfPlayers": {
    "@type": "QuantitativeValue",
    "value": 1
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "コルシブロックテストはどのように進みますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "グリッド上のタイルが0.5秒間隔で1つずつ光り、経路を示します。提示が終わったら10秒以内に同じタイルを同じ順番でクリックまたはタップします。経路を最後まで正しく再現すると+150点で、次の経路が1ステップ長くなります。"
      }
    },
    {
      "@type": "Question",
      "name": "本来のコルシブロック課題と同じものですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。位置の順番を覚えて再現するという点はコルシブロック課題（Corsi, 1972）と同じですが、ここでは正方形のグリッドを使い、各ステップは上下左右に隣接するタイルへ進み、同じタイルを二度通りません。臨床検査や診断ツールではなく練習用のゲームです。"
      }
    },
    {
      "@type": "Question",
      "name": "経路の長さとグリッドの大きさはどう変わりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "レベル1は3ステップの経路から始まり、経路を完成させるたびにレベルと経路の長さが1ずつ増えます。グリッドは5ステップまで3×3、6〜8ステップで4×4、9〜12ステップで5×5、13〜16ステップで6×6、17ステップ以上で7×7です。"
      }
    },
    {
      "@type": "Question",
      "name": "制限時間はどう計算されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "セッションの時計は60秒で、自分でタイルを押す入力フェーズの間だけ減ります。経路の提示と結果表示の時間は数えません。各経路は入力開始から10秒以内に完了する必要があります。"
      }
    },
    {
      "@type": "Question",
      "name": "間違ったタイルを押すとどうなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "そのラウンドはすぐに終わり、同じ長さの新しい経路が出ます。スコアや残り時間は減らず、レベルも下がりません。10秒以内に入力できなかった場合も同じ扱いで、どちらも正解率ではミスとして記録されます。"
      }
    },
    {
      "@type": "Question",
      "name": "長い経路を覚えるコツはありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "経路は必ず隣のタイルへ続くので、1マスずつではなく「右に2、上に1」のように方向のかたまりでまとめて覚えると楽になります（Miller, 1956）。提示中はグリッド全体を見て、曲がる地点を押さえましょう。"
      }
    },
    {
      "@type": "Question",
      "name": "瞬間記憶テスト（グリッド記憶）とは何が違いますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "グリッド記憶では複数のマスが同時に光るので、1つの模様として覚えられます。コルシブロックテストはタイルが1つずつ光るため、位置に加えて順番も覚える必要があります。"
      }
    },
    {
      "@type": "Question",
      "name": "スコアは保存されますか？医学的な意味はありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ベストスコアと最高レベルはこのブラウザのlocalStorageにだけ保存され、サーバーには送信されません。結果は練習の記録であり、記憶力や脳の健康を診断するものではありません。"
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "コルシブロックテストのやり方",
  "description": "順番に光るタイルの経路を覚えて同じ順番で再現する4ステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing#step-1",
      "name": "グリッド全体を見る",
      "text": "提示が始まったら最初のタイルだけを追わず、グリッド全体を見て経路がどこで曲がるかを確認します。"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing#step-2",
      "name": "方向でまとめる",
      "text": "各ステップは隣のタイルへ進むので、「右に2、上に1」のように方向のかたまりで覚えます。"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing#step-3",
      "name": "同じ順番で押す",
      "text": "提示が終わったら10秒以内に、始点から同じ順番でクリックまたはタップします。"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/path-tracing#step-4",
      "name": "ミスの後もすぐ続ける",
      "text": "間違えても減点やレベル低下はないので、同じ長さの新しい経路にすぐ集中します。"
    }
  ]
};

const pathTracingGuide = {
  "intro": [
    "コルシブロックテストは、グリッド上で順番に光るタイルの位置と順番を覚え、同じ順序でもう一度押す無料の順番記憶ゲームです。視空間ワーキングメモリの研究で使われるコルシブロック課題（Milner, 1971; Corsi, 1972）の考え方を、グリッド上の経路として再現しています。",
    "レベル1では3×3のグリッドに3ステップの経路が出ます。タイルは0.5秒間隔で光り、各ステップは上下左右に隣接するタイルへ進み、同じタイルを二度通りません。経路を正しく再現するたびに+150点、レベル+1、経路+1ステップとなり、グリッドは4×4、5×5、6×6を経て7×7まで広がります。",
    "セッションの時計は60秒で、入力フェーズの間だけ減ります。1つの経路は10秒以内に完了する必要があります。間違ったタイルを押すか時間切れになると、減点なしで同じ長さの新しい経路が出て、レベルは下がりません。操作はマウスのクリックまたはタッチです。",
    "データの扱い：スコアはこのブラウザのlocalStorageにだけ保存され、サーバーには送信されません。そのため当サイトはユーザー平均や順位を公表しません。",
    "本ドリルは練習と楽しみのための無料ブラウザゲームです。公式のコルシ検査、医療機器、診断ツールではなく、結果が記憶障害や脳の健康状態を示すものではありません。記憶力に不安がある場合は医療機関にご相談ください。"
  ],
  "benchmarks": {
    "title": "SkillDrills 練習の目安（スコア = 完成した経路数 × 150点）",
    "headers": [
      "練習段階",
      "到達した経路の長さ・グリッド",
      "スコア",
      "内容"
    ],
    "rows": [
      [
        "入門",
        "3〜4ステップ・3×3",
        "0〜150点",
        "経路0〜1本を完成。ルールと入力のリズムに慣れる段階"
      ],
      [
        "基本",
        "5〜7ステップ・3×3〜4×4",
        "300〜600点",
        "経路2〜4本を完成。グリッドが4×4に広がり始める"
      ],
      [
        "熟練",
        "8〜12ステップ・4×4〜5×5",
        "750〜1,350点",
        "経路5〜9本を完成。方向のかたまりで覚える工夫が必要"
      ],
      [
        "上級",
        "13ステップ以上・6×6〜7×7",
        "1,500点以上",
        "経路10本以上を完成。60秒の入力時間内に長い経路を連続で再現"
      ]
    ],
    "note": "この表はゲームの採点ルールから計算したSkillDrillsの練習の目安であり、人口規準や臨床基準ではありません。"
  },
  "techniques": {
    "title": "長い経路を覚えるコツ",
    "items": [
      {
        "name": "方向のかたまりを作る",
        "desc": "経路は必ず隣のタイルへ続くので、マスの位置ではなく「右2、上1、左1」のような方向のまとまりで覚えます（Miller, 1956）。",
        "tips": "L字、階段、ジグザグなど形に名前を付けてみましょう。"
      },
      {
        "name": "曲がり角を押さえる",
        "desc": "直線部分は覚えやすいので、方向が変わるタイルと始点を特にしっかり押さえます。",
        "tips": "入力前に始点と最後の曲がり角を思い出しましょう。"
      },
      {
        "name": "グリッド全体を見る",
        "desc": "光るタイルごとに視線を急いで動かすより、グリッドの中央付近を見ながら経路の流れを追います。",
        "tips": "大きなグリッド（6×6、7×7）で特に有効です。"
      },
      {
        "name": "一定のリズムで入力する",
        "desc": "入力時間は10秒あるので急ぐ必要はありませんが、途中で長く止まると後半の順番を忘れやすくなります。",
        "tips": "頭の中のかたまり単位で区切って順に押しましょう。"
      }
    ]
  },
  "steps": [
    "スタートを押し、3秒のカウントダウンを待ちます。",
    "タイルが1つずつ光る経路を最後まで見ます。",
    "10秒以内に同じタイルを同じ順番でクリックまたはタップします。",
    "成功すると経路が1ステップ長くなり、失敗すると同じ長さの新しい経路が出ます。",
    "60秒の入力時間が終わったら、スコア、最高レベル、正解率を確認します。"
  ],
  "audience": "順番記憶や視空間ワーキングメモリをゲームで練習したい人、マップの移動ルートや動作の順番を覚える必要があるゲーマーやスポーツ選手、短い脳トレを探しているすべての方。",
  "faqs": faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('corsi1972', 'milner1971', 'logie1995', 'miller1956'),
  "related": [
    {
      "href": "/ja/drills/memory/spatial-memory/grid-memorization",
      "label": "瞬間記憶テスト (Visual Memory Test)"
    },
    {
      "href": "/ja/drills/memory/spatial-memory/object-location",
      "label": "空間記憶テスト (Object Location Test)"
    },
    {
      "href": "/ja/drills/memory/short-term-memory/digit-span",
      "label": "数唱テスト (Digit Span)"
    },
    {
      "href": "/ja/drills/memory/short-term-memory/word-recall",
      "label": "単語記憶テスト (Verbal Memory)"
    },
    {
      "href": "/ja/drills/memory/working-memory/n-back",
      "label": "nバック課題 (N-Back)"
    }
  ]
};

const clientCopy = {
  "h1Keyword": "コルシブロックテスト",
  "h1Suffix": "（順番記憶）",
  "subtitle": "順番に光るタイルの位置と順番を覚えて、同じ順序でタップ。",
  "statScore": "スコア",
  "statTime": "残り時間",
  "statLevel": "レベル",
  "statBestScore": "ベストスコア",
  "levelPrefix": "Lv.",
  "startTitle": "コルシブロックテスト",
  "startSubtitle": "順番記憶 • 視空間ワーキングメモリ",
  "countdownSubtitle": "準備してください",
  "newBest": "自己新記録",
  "pointsLabel": "ポイント",
  "statAccuracy": "正解率",
  "statPeakLevel": "最高レベル",
  "statPerfects": "パーフェクト",
  "btnPlayAgain": "もう一度プレイ",
  "rulesTitle": "ルール & スコア",
  "aboutTitle": "コルシブロックテストについて",
  "rulesItems": [
    {
      "num": "1",
      "text": "経路を同じ順番で再現",
      "highlight": "+150 PTS",
      "result": "成功でレベル+1・経路+1ステップ（入力は10秒以内）"
    },
    {
      "num": "2",
      "text": "グリッド拡大",
      "highlight": "3x3 → 7x7",
      "result": "経路が長くなるとグリッドが自動で広がる"
    },
    {
      "num": "3",
      "text": "ミス・時間切れ",
      "highlight": "ペナルティなし",
      "result": "減点・時間減少なしで同じ長さの新しい経路"
    },
    {
      "num": "4",
      "text": "レベルは維持",
      "highlight": "レベル降下なし",
      "result": "失敗してもレベルは下がらず、60秒は入力中だけ減少"
    }
  ]
};

export default function LocalizedPathTracingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <PathTracingClient copy={clientCopy} />
      <DrillGuide guide={pathTracingGuide} />
      <RelatedDrills />
    </>
  );
}
