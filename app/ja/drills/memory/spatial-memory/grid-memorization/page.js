import GridMemorizationClient from '@/app/drills/memory/spatial-memory/grid-memorization/GridMemorizationClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "瞬間記憶ゲーム｜視覚記憶テスト・トレーニング | SkillDrills",
  description: "無料の瞬間記憶ゲーム。グリッドで1.5秒だけ光るマスの位置を覚えて押し直す視覚記憶トレーニングです。4×4の5マスから始まり、5×5で最大12マスまで難しくなります。",
  keywords: ['瞬間記憶ゲーム', '瞬間記憶 トレーニング', '瞬間記憶テスト', '視覚記憶テスト', '視覚記憶ゲーム', '空間記憶テスト', 'グリッド記憶', 'パターン記憶テスト', 'メモリーマトリクス', '記憶力トレーニング', '短期視覚記憶', '視覚的作業記憶'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "瞬間記憶ゲーム｜視覚記憶テスト・トレーニング | SkillDrills",
    description: "無料の瞬間記憶ゲーム。1.5秒だけ光るマスの位置を覚えて押し直す視覚記憶トレーニング。",
    type: 'website',
    url: 'https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "瞬間記憶ゲーム｜視覚記憶テスト・トレーニング | SkillDrills",
    description: "無料の瞬間記憶ゲーム。1.5秒だけ光るマスの位置を覚えて押し直す視覚記憶トレーニング。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization',
    languages: getAlternateLanguages('/drills/memory/spatial-memory/grid-memorization'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "記憶力トレーニング", "item": "https://skilldrills.online/ja/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "空間記憶", "item": "https://skilldrills.online/ja/drills/memory/spatial-memory" },
    { "@type": "ListItem", "position": 4, "name": "瞬間記憶ゲーム", "item": "https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "瞬間記憶ゲーム（視覚記憶・グリッド記憶）",
  "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "sameAs": "https://ja.wikipedia.org/wiki/%E8%A6%96%E8%A6%9A%E8%A8%98%E6%86%B6",
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "瞬間記憶ゲーム（視覚記憶・グリッド記憶）",
  "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization",
  "description": "4×4から5×5へ広がるグリッドで1.5秒間光ったマスの位置を覚え、押し直して再現する無料の瞬間記憶ゲーム。",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Spatial Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "瞬間記憶ゲーム（視覚記憶テスト）",
  "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "瞬間記憶ゲームでグリッドパターンを覚えるコツ",
  "description": "視覚性ワーキングメモリのボトルネックを克服し、瞬間提示されたグリッドパターンを効率的に記憶・再構成するための4段階実践プロトコル。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization#step-1",
      
      "name": "中心視野に視線を固定",
      "text": "パターン点灯前にグリッドの中心点に焦点を置き、周辺視野・傍中心窩視野を活用してグリッド全体の幾何学的トポロジーを一度に捉えます。"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization#step-2",
      
      "name": "ゲシュタルト形状チャンキングの実行",
      "text": "個別の座標をバラバラに暗記しようとせず、隣接する点灯マスを幾何学的クラスター（直線、L字、正方形、三角など）として統合します。"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization#step-3",
      
      "name": "運動空間軌跡の心内トレース",
      "text": "1.5秒の点灯時間内に点灯マスを一筆書きの軌跡として心内でなぞり、運動野の空間シミュレーション（インナースクライブ）を活性化させます。"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/grid-memorization#step-4",
      
      "name": "体系的なマトリックス再構成",
      "text": "記憶が鮮明なうちにグループ化した幾何学的塊を優先的にクリックし、その後に残った単独のマスを埋めていきます。"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "瞬間記憶ゲームとは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "グリッドで一瞬光ったマスの位置を覚え、消えた後に同じマスを押して再現する視空間ワーキングメモリの練習ゲームです。言葉で唱えるのではなく配置を目で覚える練習になります。いわゆる「瞬間記憶能力」を判定するものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "グリッド瞬間記憶ドリルの仕組みはどうなっていますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "4×4のグリッドで5マスが1.5秒間紫色に光ります。消えたら光っていたマスをすべて押して再現し、完成するたびに150点を獲得、光るマスが1つ増えます。4×4で7マスをクリアすると5×5（5マスから最大12マス）へ進みます。60秒の制限時間は再現中だけ減ります。"
      }
    },
    {
      "@type": "Question",
      "name": "このゲームは視覚パターン検査（VPT）と同じものですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。視覚パターン検査（Della Sala et al., 1997）はグリッドパターンを使う研究用の神経心理学検査です。このゲームは似た形式の無料練習ツールで、その検査の手順や基準値には従っていません。"
      }
    },
    {
      "@type": "Question",
      "name": "コルシブロックテスト（Corsi Block-Tapping Test）との違いは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "コルシブロックテスト（Corsi, 1972）はブロックが順番に叩かれる動的な時間的系列（空間経路）を記憶するテストで「インナースクライブ（能動的空間リハーサル）」を用います。一方、このグリッド記憶テストは全セルが同時に提示され、静的な形態や配置を保持する「視覚キャッシュ」の容量を独立して評価します。"
      }
    },
    {
      "@type": "Question",
      "name": "スコアはどう計算されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "パターンを1つ完全に再現するごとに150点です。結果画面の評価は1,150点を最上位の目安とするSkillDrillsの練習用ランクで、平均値や基準値ではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "空間チャンキング（塊化）によってなぜ記憶力が向上するのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "人間の視覚性作業記憶には約3〜4個の独立した対象しか同時に保持できないという厳格な認知的制約があります（Luck & Vogel, 1997; Cowan, 2001）。隣接するマスを正方形や直線、アルファベットなどの意味ある図形（チャンク）にまとめることで、1つの情報単位に圧縮し容量制限を突破できます。"
      }
    },
    {
      "@type": "Question",
      "name": "視覚キャッシュ（Visual Cache）とインナースクライブ（Inner Scribe）の違いは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ロギー（Logie, 1995）の視空間ワーキングメモリモデルにおいて、視覚キャッシュは物体の色・形状・静止配置情報を受動的に保持する保管庫であり、インナースクライブは空間的な移動経路や順序情報を能動的にリハーサル・更新する処理機構です。"
      }
    },
    {
      "@type": "Question",
      "name": "なぜグリッドパターンは1.5秒経過すると急速に消えてしまうのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "網膜に映る超短期のアイコニック記憶（感覚記憶）はわずか250〜500ミリ秒で急速に減衰します。1.5秒の間に空間チャンキングや運動軌跡化によって作業記憶へ能動的に転送・定着させないと、視覚痕跡は消失してしまいます。"
      }
    },
    {
      "@type": "Question",
      "name": "間違ったマスをクリックした場合にスコア減点ペナルティはありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。違うマスを押すとそのラウンドは終わりますが、減点や残り時間の減少はありません。同じ難易度で新しいパターンが出ます。"
      }
    },
    {
      "@type": "Question",
      "name": "視覚記憶の向上は実生活やゲームにどう役立ちますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ミニマップの配置を一目で覚える、将棋やチェスの盤面を覚えるなど、短く見た配置を記憶する場面に近い練習です。ほかの作業への効果は保証されません。"
      }
    }
  ]
};

const gridGuide = {
  intro: [
  "瞬間記憶ゲームは、グリッドで1.5秒だけ光るマスの位置を覚え、消えた後に押して再現する無料の視覚記憶トレーニングです。4×4の5マスから始まり、成功するたびに光るマスが増え、5×5では最大12マスまで進みます。言葉で唱えるのではなく、配置を目で覚える練習です。",
  "視空間記憶スパンの研究はピエトロ・コルシ（Pietro Corsi, 1972）のコルシブロックテストに始まり、視空間記憶が言語性の数唱記憶とは解剖学的・機能的に独立した脳内システムであることが実証されました（Milner, 1971）。1997年にはセルジオ・デラ・サラ（Sergio Della Sala）やロバート・ロギー（Robert H. Logie）らが、動的な運動系列から静的マトリックスパターンの保持を分離する「視覚パターン検査（VPT）」を発表しました。このゲームは似た形式の練習ツールであり、VPTそのものではありません。",
  "現代の認知神経科学において、ロギー（Logie, 1995）およびアラン・バドリー（Alan Baddeley, 2000）は視空間スケッチパッドを「視覚キャッシュ（色・形・静止配置を保持する受動的保管庫）」と「インナースクライブ（運動計画と空間的更新を担う能動的機構）」に再定義しました。さらにLuck & Vogel（1997）およびCowan（2001）の研究が示す通り、未処理の視覚記憶容量は3〜4個の独立した項目に制限されます。マトリックス記憶スパンを拡張するには、点灯したマスをゲシュタルト図形としてまとめる「空間チャンキング」が不可欠です。",
  "進行ルール：パターンは1.5秒表示され、60秒の制限時間はマスを押して再現している間だけ減ります。完成で150点、違うマスを押しても減点はなく、同じ難易度の新しいパターンが出ます。反応時間は計測していません。",
  "データ：スコアと自己ベストはブラウザのlocalStorageにのみ保存され、サーバーには送信されません。"
],
  benchmarks: {
    title: "SkillDrills 練習の目安（1プレイ）",
    headers: ["段階", "スコア", "完成したパターン", "到達した難易度"],
    rows: [
      ["上位の練習段階", "1,200点以上", "8個以上", "5×5グリッド、10〜12マス"],
      ["中位の練習段階", "600〜1,050点", "4〜7個", "5×5グリッド、6〜9マス"],
      ["初期の練習段階", "150〜450点", "1〜3個", "4×4で6〜7マス、3個完成で5×5へ"],
      ["スタート", "0点", "0個", "4×4グリッド、5マス"]
    ],
    note: "スコアは完成したパターン数×150点です。段階はゲームのルールから計算した SkillDrills の練習用の目安で、人口統計や基準値ではありません。"
  },
  techniques: {
    title: "マトリックス視覚記憶容量を拡張するエビデンスベースの技法",
    items: [
  {
    "name": "ゲシュタルト空間形状チャンキング",
    "desc": "隣接する点灯マスを、三角形、直線、正方形、あるいは見慣れたアルファベットなどの幾何学的基本形状として心内でグループ化します（Wertheimer, 1923; Della Sala et al., 1999）。7個の座標を2〜3個の図形にまとめれば、覚える単位が減ります。",
    "tips": "孤立したマスを1個ずつ見るのではなく、連結した線や角のブロックを最優先で視覚探索してください。"
  },
  {
    "name": "ネガティブスペース（消去法）の活用",
    "desc": "特定の領域に点灯マスが密集している場合は、点灯していない「空きマス（穴）」の配置を記憶します。6マスのブロック内で点灯している4マスを覚えるよりも、消えている2マスの位置を記憶する方が情報保持効率が劇的に高まります。",
    "tips": "あるブロックがほとんど点灯している場合、暗い「穴」の座標だけを意識的に記憶してください。"
  },
  {
    "name": "運動感覚的スクライブ（一筆書き）トレース",
    "desc": "1.5秒の点灯時間内に、点灯マスを一本の線でつなぐように視線と心内シミュレーションでなぞり「インナースクライブ」（Logie, 1995）を刺激します。運動野の経路計画が受動的な視覚キャッシュの保持を強化します。",
    "tips": "左上から右下へ流れるような一貫した走査順序を保つと、パターンに方向性が生まれ記憶が定着しやすくなります。"
  },
  {
    "name": "中心視野の固定と傍中心窩スナップショット",
    "desc": "ラウンド開始時はグリッドの幾何学的中心に視線を固定します。個別のマスへ視線を激しく動かす（サッケード）と像がブレるため、傍中心窩視野を活用して全体の空間トポロジーを一度に捉えます。",
    "tips": "焦点のピントをわずかに和らげ、パターン全体を一枚のシルエット写真のように網膜に焼き付ける意識を持ってください。"
  }
]
  },
  steps: [
  "グリッドの中心に視線を合わせ、パターンの瞬間点灯を待ちます。",
  "1.5秒の点灯中に、光ったマスを即座に2〜3個の幾何学的形状（チャンク）にグループ化します。",
  "密集した領域では空いているマス（ネガティブスペース）に注目し、情報量を最小化します。",
  "点灯が消えたら、記憶した幾何学的チャンクをグリッド上に素早くタップして再現します。",
  "4×4から5×5の拡大グリッドへと進み、自身の視覚性作業記憶の上限値を継続的に更新します。"
],
  audience: "FPSゲームでミニマップ状況把握を極めたいゲーマー、幾何学や立体図面を扱う理系学生、放射線科医、チェス・将棋プレイヤー、非言語性視覚記憶と集中力を高めたいすべての方。",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'corsi1972', 'luck1997', 'milner1971'),
  related: [
  {
    "href": "/ja/drills/memory/working-memory/n-back",
    "label": "3-Back ワーキングメモリ課題"
  },
  {
    "href": "/ja/drills/cognitive/focus/concentration-grid",
    "label": "シュルテテーブル（集中力グリッド）"
  },
  {
    "href": "/ja/drills/memory/short-term-memory/digit-span",
    "label": "数唱記憶スパンテスト"
  },
  {
    "href": "/ja/drills/visual/reaction-speed/light-reaction",
    "label": "反射神経・反応速度テスト"
  },
  {
    "href": "/ja/drills/reaction-speed/reflex-training-drill",
    "label": "反射神経ゲーム"
  }
]
};

export default function LocalizedGridMemorizationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GridMemorizationClient copy={{
        "h1Keyword": "瞬間記憶ゲーム",
        "h1Suffix": "（視覚記憶テスト）",
        "subtitle": "光るマスの位置を覚えてパターンを再現",
        "caption": "視覚性作業記憶（ワーキングメモリ）は一度に約4つの独立したオブジェクトを保持でき、その制限は詳細度ではなくオブジェクトの個数に依存します（Luck & Vogel, 1997）。静的なグリッドパターンは形態と配置の受動的保持領域である視覚キャッシュ（Visual Cache）を直接測定・テストします（Logie, 1995）。",
        "statScore": "スコア",
        "statTime": "残り時間",
        "statGridSize": "グリッドサイズ",
        "statBest": "ベストスコア",
        "hudScore": "スコア",
        "hudTime": "時間",
        "startTitle": "グリッド瞬間記憶 Pro",
        "startSubtitle": "視覚記憶 • グリッド",
        "countdownSubtitle": "準備してください",
        "newBest": "自己新記録",
        "pointsLabel": "ポイント",
        "statAccuracy": "正解率",
        "cellsUnit": "マス",
        "statPeakPattern": "最大パターン",
        "statPerfects": "パーフェクト",
        "btnPlayAgain": "もう一度プレイ",
        "rulesTitle": "ドリルルール & スコア算出方法",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "パターン記憶",
                        "highlight": "+150 PTS",
                        "result": "点灯したマスの位置を記憶し、タップして正確に再現"
                },
                {
                        "num": "2",
                        "text": "レベル進行",
                        "highlight": "4x4 → 5x5",
                        "result": "正解するごとにマトリックスと難易度が自然に拡大"
                },
                {
                        "num": "3",
                        "text": "ミス",
                        "highlight": "ペナルティなし",
                        "result": "ラウンド終了、減点や時間の減少はなし"
                },
                {
                        "num": "4",
                        "text": "レベル維持",
                        "highlight": "現在レベルをキープ",
                        "result": "ミスしてもレベルは下がらず、同じレベルの新しいパターンで再挑戦"
                }
        ]
}} />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
