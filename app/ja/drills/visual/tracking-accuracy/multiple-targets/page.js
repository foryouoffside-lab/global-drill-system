import GhostLinkClient from '@/app/drills/visual/tracking-accuracy/multiple-targets/GhostLinkClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "複数対象追跡テスト | 周辺視野トレーニング | SkillDrills",
  description: "複数の動く標的を同時に追う無料MOTテスト。周辺視野と分割的視覚注意を練習できます。",
  keywords: [
    "複数対象追跡テスト",
    "複数対象追跡",
    "複数物体追跡",
    "MOT テスト",
    "多目標追跡",
    "動くもの 同時に追う",
    "分割的注意"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "複数対象追跡テスト | 周辺視野トレーニング | SkillDrills",
    description: "複数の動く標的を同時に追う無料MOTテスト。同じ見た目の球の中から3つの標的を最後まで追いかけます。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "複数対象追跡テスト | 周辺視野トレーニング | SkillDrills",
    description: "同じ見た目の球の中から3つの標的を60秒間追い続ける、無料の複数対象追跡（MOT）テストです。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/multiple-targets'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "訓練ハブ", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "視覚・動体視力トレーニング", "item": "https://skilldrills.online/ja/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "動体追従・トラッキング", "item": "https://skilldrills.online/ja/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "複数対象追跡テスト", "item": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "複数対象追跡テスト",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "同じ見た目の球のうち、最初の2秒間だけ緑色で示される3つの標的を覚え、球が60秒間ぶつかり合いながら動いた後にその3つを選び直すブラウザ練習です。",
  "featureList": [
    "球8個でスタートし、そのうち3個が2秒間だけ緑色で表示",
    "60秒間、すべての球が同じ見た目で壁や他の球に跳ね返りながら移動",
    "停止後に3個を選んで確定：正解1個につき20点（最大60点）、不正解の減点なし",
    "ベストスコアが上がるほど球の数と速さが少しずつ増加、記録はブラウザのローカルストレージにのみ保存"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "複数対象追跡テスト | SkillDrills",
  "alternateName": "GhostLink MOT",
  "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets",
  "dateModified": "2026-11-12",
  "description": "無料オンライン複数対象追跡テスト：同じ見た目の球の中から3つの標的を60秒間見失わずに追いかけます。",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas対応のモダンブラウザ",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "複数の動く物体を同時に注意で追う、分割的注意"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "複数対象追跡テスト",
  "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets",
  "description": "同じ見た目の球の中から示された3つの標的を覚えて追い続け、最後に選び直す無料の複数対象追跡ゲーム。",
  "genre": [
    "Puzzle",
    "Visual Tracking"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "複数対象追跡テストのやり方",
  "dateModified": "2026-11-12",
  "description": "1ラウンドを進める4ステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "3つの標的を覚える",
      "text": "カウントダウン後に球が現れ、そのうち3個が2秒間だけ緑色で表示されます。位置を覚えてください。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "60秒間追いかける",
      "text": "表示が消えるとすべての球が同じ見た目になり、60秒間動き続けます。球は壁や他の球にぶつかると跳ね返ります。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "3個を選ぶ",
      "text": "時間が終わると球が止まります。標的だと思う球を3個クリック（タップ）します。もう一度押すと選択を取り消せます。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "確定して結果を見る",
      "text": "3個選んだら確定ボタンを押します。正解1個につき20点、不正解は0点で減点はありません。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/multiple-targets#step-4"
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
      "name": "複数対象追跡（MOT）テストはどのように進みますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "同じ見た目の球のうち3個が最初の2秒間だけ緑色で示されます。その後すべての球が同じ見た目で60秒間動き、止まったら最初に示された3個を選んで確定します。正解1個につき20点、1ラウンド最大60点です。"
      }
    },
    {
      "@type": "Question",
      "name": "球はいくつあり、だんだん難しくなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "最初は球8個です。ベストスコアが30点上がるごとに球が1個増え、球の速さもベストスコアに応じて少しずつ上がります。標的の数は常に3個です。"
      }
    },
    {
      "@type": "Question",
      "name": "違う球を選ぶとどうなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "不正解の選択は0点になるだけで、減点はありません。選んだ球をもう一度押すと選択を取り消せるので、確定ボタンを押すまでは選び直せます。"
      }
    },
    {
      "@type": "Question",
      "name": "人は一度にいくつまで追えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MOTの手法を最初に示した Pylyshyn & Storm（1988）以降、同じ見た目の物体を同時に追える数はおおむね4個前後が限界で、動きが速いほど少なくなると報告されています（Cavanagh & Alvarez, 2005）。このテストの標的は3個に固定されています。"
      }
    },
    {
      "@type": "Question",
      "name": "球を1個ずつ順番に見てはいけませんか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1個に視線を移している間に、ほかの標的が妨害の球と重なると、どちらが標的か分からなくなりやすくなります。標的どうしの真ん中あたりを見て、3個をまとめて意識する方法が楽だと感じる人が多いようです。"
      }
    },
    {
      "@type": "Question",
      "name": "球どうしがぶつかったときに見失わないコツは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "球はぶつかると跳ね返ります。ぶつかる直前の向きを覚えておき、跳ね返った後にどちらへ進むかを先に意識すると、標的と妨害の球の取り違えを減らせます。"
      }
    },
    {
      "@type": "Question",
      "name": "このトレーニングでゲームやスポーツが上達しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "スコアが上がるのは、この課題に慣れたことを示します。ゲーム、スポーツ、運転など別の場面への効果は保証されません。"
      }
    },
    {
      "@type": "Question",
      "name": "無料ですか？記録はどこに保存されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "登録不要・無料で使えます。ベストスコアなどの記録はお使いのブラウザのローカルストレージにのみ保存されます。"
      }
    }
  ]
};

const guideData = {
  heading: "複数対象追跡テスト：やり方とコツ",
  intro: [
    "複数対象追跡テスト（Multiple Object Tracking, MOT）は、同じ見た目の球の中から最初に示された3つの標的を最後まで追い、選び直す課題です。Pylyshyn & Storm（1988）が最初に紹介した実験の手法を、シンプルなブラウザゲームにしたものです。",
    "カウントダウン後、3個の球が2秒間だけ緑色で示され、その後すべての球が同じ見た目で60秒間、壁や他の球に跳ね返りながら動きます。球が止まったら3個を選んで確定し、正解1個につき20点（最大60点）、不正解は減点なしの0点です。ベストスコアが上がるほど球の数と速さが少しずつ増えます。",
    "複数の物体を同時に追うことは、目を1つずつ動かすのではなく、注意を複数の位置に分けて保つことで行われると説明されています（Cavanagh & Alvarez, 2005）。このテストはその状況を練習するゲームです。"
  ],
  benchmarks: {
    "title": "SkillDrills 練習バンド（このゲーム専用の目安）",
    "headers": [
      "バンド",
      "正解した標的",
      "スコア",
      "説明"
    ],
    "rows": [
      [
        "パーフェクト",
        "3 / 3",
        "60点",
        "60秒間、3つの標的をすべて保てた。"
      ],
      [
        "良好",
        "2 / 3",
        "40点",
        "衝突や重なりで1つ見失った。"
      ],
      [
        "練習中",
        "1 / 3",
        "20点",
        "途中で標的が何度か入れ替わった。"
      ],
      [
        "スタート",
        "0 / 3",
        "0点",
        "ゲームに慣れていく段階。"
      ]
    ],
    "note": "SkillDrills がこのゲーム用に設定した練習の目安で、研究に基づく基準値や認知能力の評価ではありません。"
  },
  techniques: {
    "title": "複数の標的を見失わないコツ",
    "items": [
      {
        "name": "真ん中を見る",
        "desc": "標的を1つだけ目で追うと、残りを見失いやすくなります。",
        "tips": "3つの標的の真ん中あたりに視線を置き、3つをまとめて意識してみましょう。"
      },
      {
        "name": "跳ね返る向きを先読みする",
        "desc": "球は壁や他の球にぶつかると跳ね返ります。",
        "tips": "ぶつかる地点よりも、跳ね返って進む向きを先に意識します。"
      },
      {
        "name": "重なった直後に確認する",
        "desc": "標的と妨害の球が重なって離れる瞬間がいちばん紛らわしくなります。",
        "tips": "重なりがほどけたら、標的が3つそろっているか素早く数え直します。"
      },
      {
        "name": "選ぶときは落ち着いて",
        "desc": "球が止まった後は時間制限なく選べます。",
        "tips": "自信のない球はもう一度押して取り消し、選び直しても構いません。"
      }
    ]
  },
  steps: [
    "スタートボタンを押し、カウントダウン後に緑色で示される3つの球を覚えます。",
    "表示が消えたら60秒間、3つの標的を目で追います。",
    "球が止まったら、標的だと思う3個をクリックします。",
    "確定ボタンを押して、正解数とスコア（正解1個につき20点）を確認します。",
    "結果画面で正確さと評価を見て、もう一度挑戦します。"
  ],
  audience: "複数の動くものを同時に追う練習をしてみたい人、FPSやMOBAのプレイヤー、短い集中ゲームを探している方。",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('pylyshyn1988', 'cavanagh2005'),
  related: [
    {
      "href": "/ja/drills/visual/tracking-accuracy/moving-target",
      "label": "動体視力を鍛えるゲーム"
    },
    {
      "href": "/ja/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "スムースパシュート・視線追従トレーニング"
    },
    {
      "href": "/ja/drills/visual/visual-recognition/visual-search",
      "label": "視覚探索ゲーム"
    },
    {
      "href": "/ja/drills/visual/depth-perception/distance-judgment",
      "label": "深視力トレーニング"
    },
    {
      "href": "/ja/drills/reaction-speed/visual-tracking-speed-test",
      "label": "動体視力テスト"
    }
  ]
};

export default function LocalizedMultipleTargetsJaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <GhostLinkClient copy={{  "title": "複数対象追跡" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
