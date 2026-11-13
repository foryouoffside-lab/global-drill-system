import ObjectLocationClient from '@/app/drills/memory/spatial-memory/object-location/ObjectLocationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "空間記憶テスト｜物体位置記憶 | SkillDrills",
  description: "無料の空間記憶テスト。グリッド上の物体があった位置を覚え、表示が消えたあと指定された場所を再現して空間記憶を鍛えます。",
  keywords: ['空間記憶テスト', '物体位置記憶', '位置記憶テスト', '空間認知トレーニング', '空間視覚ゲーム', '配置記憶ゲーム', '視空間記憶', '空間ワーキングメモリ', '物体の位置記憶', '脳トレ 空間記憶'],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/object-location', 'ja'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "空間記憶テスト｜物体位置記憶 | SkillDrills",
    description: "グリッド上の物体の位置を覚え、表示が消えたあと指定された場所を再現する無料の空間記憶ゲームです。",
    url: "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "空間記憶テスト｜物体位置記憶 | SkillDrills",
    description: "グリッド上の物体の位置を覚え、表示が消えたあと指定された場所を再現する無料の空間記憶ゲームです。",
  },
};

export const dynamic = 'force-static';

export default function LocalizedObjectLocationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "記憶力トレーニング", "item": "https://skilldrills.online/ja/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "空間記憶", "item": "https://skilldrills.online/ja/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "空間記憶テスト", "item": "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "空間記憶テスト (物体位置記憶テスト)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "グリッドに1.5秒だけ表示される絵文字の位置を覚え、指定された目標の物体があったマスを探してタップする無料の空間記憶テスト（ゲーム）。",
    "genre": "Memory Game / Spatial Memory",
    "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "空間記憶テスト (物体位置記憶テスト)",
    "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location",
    "description": "グリッドに1.5秒だけ表示される絵文字の位置を覚え、指定された目標の物体があったマスを探してタップする無料の空間記憶テスト（ゲーム）。",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "sameAs": "https://ja.wikipedia.org/wiki/%E7%A9%BA%E9%96%93%E8%A8%98%E6%86%B6",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "空間記憶テスト (物体位置記憶テスト)",
    "description": "グリッドに1.5秒だけ表示される絵文字の位置を覚え、指定された目標の物体があったマスを探してタップする無料の空間記憶テスト（ゲーム）。",
    "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location",
    "genre": ["Memory Game", "Cognitive Training", "Spatial Memory"],
    "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
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
            "name": "空間記憶テスト（Object Location Memory Test）とは何ですか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "物体が「何か」と「どこにあったか」を一緒に覚える力（物体と位置の結合）を練習する無料のブラウザゲームです。結果は自分の練習記録としてご覧ください。"
            }
      },
      {
            "@type": "Question",
            "name": "このドリルの仕組みとルールはどうなっていますか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "3×3のグリッドに絵文字が2個、1.5秒間表示されます。消えたあと画面上部に目標の物体が1つ示されるので、8秒以内にその物体があったマスをタップします。正解で150点、レベルが1上がり、物体が1個ずつ増えます（最大10個）。レベル8から4×4、レベル15から5×5になります。制限時間は全体で45秒です。"
            }
      },
      {
            "@type": "Question",
            "name": "エールズ＆シルバーマン（Silverman-Eals）の物体位置記憶課題と同じものですか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "いいえ。エールズとシルバーマン（Eals & Silverman, 1994）は物体の配列を見せたあと位置を問う研究課題で物体位置記憶を調べました。このゲームは似た考え方の練習用ゲームで、その課題の手順や基準値には従っていません。"
            }
      },
      {
            "@type": "Question",
            "name": "認知神経科学における「特徴結合（Object-Location Binding）」とは何ですか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "脳の腹側皮質視覚路（『何』を処理する経路）と背側皮質視覚路（『どこ』を処理する空間経路）からの情報が、海馬および海馬傍回において単一のエピソード的表象として統合・結合される神経プロセスです。"
            }
      },
      {
            "@type": "Question",
            "name": "スコアはどう計算されますか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "目標の位置を当てるごとに150点です。結果画面の評価は1,000点を最上位の目安とするSkillDrillsの練習用ランクで、成人の平均値ではありません。"
            }
      },
      {
            "@type": "Question",
            "name": "単純なグリッド瞬間記憶テスト（Visual Matrix）との違いは何ですか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "瞬間記憶ゲーム（グリッド記憶）は光ったマス全体のパターンを押し直すので、図形としてまとめて覚えられます。物体位置記憶は「どの物体がどのマスにあったか」を組み合わせて覚え、指定された1つの物体の位置だけを答えます。"
            }
      },
      {
            "@type": "Question",
            "name": "なぜ単純な図形パターンよりも物体の位置を記憶する方が難しいのですか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "作業記憶において特徴の結合（Conjunction）は単一特徴の保持よりも高い注意資源と認知コストを消費するためです（Luck & Vogel, 1997）。脳は物体認識と空間座標という2つの異なる次元を同時に保持しなければならないため負荷が倍増します。"
            }
      },
      {
            "@type": "Question",
            "name": "物体位置記憶を担う主な脳領域はどこですか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "両側の海馬、海馬傍回、後頭頂皮質、および空間座標の能動的保持を担う背外側前頭前野（DLPFC）が主要な神経基盤を構成しています。"
            }
      },
      {
            "@type": "Question",
            "name": "誤ったマスをタップした場合のペナルティはありますか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "いいえ。誤答や8秒の時間切れでそのラウンドは終わりますが、減点はありません。レベルも下がらず、同じレベルの新しい配置が出ます。ただし45秒の制限時間は進み続けます。"
            }
      },
      {
            "@type": "Question",
            "name": "物体位置記憶の向上は日常生活やゲームプレイにどのように役立ちますか？",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "鍵やスマートフォンを置いた場所、駐車位置などの日常的な場面や、FPSやMOBAなどのゲームでマップ上の敵・アイテム・スキルの配置を把握する場面と似た動作の練習になりますが、効果は保証されません。"
            }
      }
]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "空間記憶テストで物体位置記憶と視覚特徴結合を高める方法",
    "description": "象限分割とランドマーク固定で、1.5秒間見た物体の位置を覚えて目標を探すための4つのコツ。",
    "step": [
      {
            "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location#step-1",
            
            "name": "グリッドの象限分割スキャン",
            "text": "物体が表示されたら、まずグリッドを直感的に4つの象限（左上・右上・左下・右下）に分割して大まかな分布を把握します。"
      },
      {
            "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location#step-2",
            
            "name": "固定ランドマークへのアンカー設定",
            "text": "各物体を4隅の角、外枠の境界、中央のマスといった目立つ幾何学的ランドマークと結びつけて記憶を固定します。"
      },
      {
            "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location#step-3",
            
            "name": "意味と空間の連想ペアリング形成",
            "text": "物体の視覚的特徴（絵文字）と位置を結びつける即時の言語ラベルやイメージを形成します（例：『星は右上角』『鍵は中央下』）。"
      },
      {
            "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/ja/drills/memory/spatial-memory/object-location#step-4",
            
            "name": "目標物体の座標特定とタップ",
            "text": "グリッドが消え目標アイコンが提示されたら、脳内の認知地図を検索して該当するマスを迷わずタップします。"
      }
]
  };

  const objectLocationGuide = {
    intro: [
      "この空間記憶テストは、グリッドに1.5秒だけ表示される絵文字の位置を覚え、表示が消えたあと指定された目標の物体があったマスを探す物体位置記憶ゲームです。3×3のグリッドに2個の物体から始まり、正解するたびに物体が1個増え（最大10個）、レベル8から4×4、レベル15から5×5になります。光ったマスのパターンだけを覚えるグリッド記憶と違い、どの物体がどこにあったかを一緒に覚える必要があります。",
      "物体位置記憶研究の基盤は、マリオン・エールズとアーウィン・シルバーマン（Eals & Silverman, 1994）による空間認知研究によって確立されました。彼らは物体の位置記憶が、メンタルローテーション（心的回転）などの空間操作とは独立した進化的適応機構として機能することを証明しました。このゲームはその研究課題そのものではなく、似た形式の練習用ゲームです。さらに古くは、エドワード・トールマン（Tolman, 1948）が認知地図（Cognitive Map）の概念を提唱し、生物が環境の内的空間モデルをどのように形成するかを示しました。",
      "作業記憶の理論的枠組みにおいて、ロバート・ロギー（Logie, 1995）およびアラン・バドリー（Baddeley, 2000）は、物体位置の結合がエピソード・バッファ（Episodic Buffer）によって調整され、視覚キャッシュ（物体の特徴）とインナー・スクライブ（空間座標）からの入力を統合していることを明らかにしました。スティーブン・ラックとエドワード・フォーゲル（Luck & Vogel, 1997）は特徴結合が大きな注意負荷を要求することを実証し、ネルソン・コーワン（Cowan, 2001）は焦点化された作業記憶の容量をおよそ3〜4項目と整理しました。",
      "進行ルール：配置は1.5秒間表示され、目標の位置は8秒以内にタップします。正解で150点とレベル+1、誤答や時間切れは減点なしで同じレベルの新しい配置に進みます。制限時間は全体で45秒で、反応時間は計測していません。",
      "データ：スコアと自己ベストはブラウザのlocalStorageにのみ保存され、外部サーバーには送信されません。"
],
    benchmarks: {
      title: "SkillDrills 練習の目安（1プレイ）",
      headers: ["段階", "スコア", "正解したラウンド", "到達した難易度"],
      rows: [
        ["上位の練習段階", "1,050点以上", "7回以上", "レベル8以上、物体9〜10個、4×4（14回正解で5×5）"],
        ["中位の練習段階", "600〜900点", "4〜6回", "レベル5〜7、物体6〜8個、3×3"],
        ["初期の練習段階", "150〜450点", "1〜3回", "レベル2〜4、物体3〜5個、3×3"],
        ["スタート", "0点", "0回", "レベル1、物体2個、3×3"]
      ],
      note: "スコア＝正解したラウンド数×150点。段階はゲームのルールから計算したSkillDrillsの練習用の目安で、人口統計の基準ではありません。"
    },
    techniques: {
      title: "物体位置記憶の結合限界を拡張する認知戦略",
      items: [
        {
                "name": "相対的ランドマーク固定法（Landmark Anchoring）",
                "desc": "4隅の角、中央マス、外枠の辺といった不変の幾何学的ランドマークを基準にして目標物体の位置を固定します（Tolman, 1948）。『ダイヤが左上角にある』のように目立つ標識と紐づけることで、複雑な座標計算を省略できます。",
                "tips": "表示されたらすぐに、どの物体が角や外枠に位置しているかを最優先で確認してください。"
        },
        {
                "name": "意味的・空間的連想ペアリング（Semantic-Spatial Pairing）",
                "desc": "物体の持つ意味やイメージと、その空間的位置を結びつける即時のナラティブ（連想）を作成します（Baddeley, 2000）。例えば上部にある『星』を夜空、下部にある『鍵』を隠し引き出しのように関連付けます。",
                "tips": "物体の名称と空間的な方向を組み合わせた短い言語ラベル（例：『星は上、鍵は下』）を心の中で即座に唱えましょう。"
        },
        {
                "name": "象限分割スキャン法（Quadrantal Zoning）",
                "desc": "4×4や5×5の大きなグリッドを4つの象限（左上、右上、左下、右下）に頭の中で分割します。各エリアに何個の物体が存在するかを把握することで、目標検索時の探索空間を一気に絞り込めます。",
                "tips": "まずエリアごとの個数を素早くカウントし、その後に各エリア内の具体的な位置を精緻化します。"
        },
        {
                "name": "中心注視と周辺視野スキャン（Parafoveal Sweep）",
                "desc": "視線をグリッドの中央に固定して周辺視野（傍中心窩視）で全体の分布を大まかに捉え、その後に1〜2回の正確な微小サッケード（急速眼球運動）を行って曖昧なアイコンを確定します。",
                "tips": "目を激しくあちこち動かすのではなく、視線を安定させて滑らかに視野全体へ意識を広げてください。"
        }
]
    },
    steps: [
      "グリッドの中央に視線を合わせ、物体の全体的な配置に注意を集中します。",
      "1.5秒間の提示中に、各物体をランドマーク（角、辺、中央）に素早く結びつけます。",
      "物体のアイコンと空間位置を関連付ける意味的・空間的ペアを瞬時に形成します。",
      "グリッドが消え目標アイコンが表示されたら、頭の中の認知地図から該当のマスをタップします。",
      "レベルが上がると物体が増え、グリッドも3×3から4×4、5×5へ広がるので、同じコツをより多くの物体に使います。"
],
    audience: "FPSやMOBAでミニマップとリソース配置の把握力を高めたいゲーマー、STEM分野の学生、および空間認知能力・視覚ワーキングメモリを高めたいすべての方。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'luck1997', 'tolman1948', 'eals1994'),
    related: [
      {
            "href": "/ja/drills/memory/spatial-memory/grid-memorization",
            "label": "瞬間記憶テスト (Visual Memory Test)"
      },
      {
            "href": "/ja/drills/memory/spatial-memory/path-tracing",
            "label": "パストレーシング記憶テスト (Path Tracing)"
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
            "label": "nバック課題 (Dual N-Back)"
      }
]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ObjectLocationClient
        copy={{
        "h1Keyword": "空間記憶テスト",
        "h1Suffix": "（物体位置記憶）",
        "subtitle": "グリッド上の物体があった位置を再現",
        "statScore": "スコア",
        "statTime": "残り時間",
        "statLevel": "レベル",
        "statBestScore": "ベストスコア",
        "levelPrefix": "Lv.",
        "memorizePrompt": "物体の配置を記憶してください",
        "targetPrompt": "目標:",
        "startTitle": "物体位置記憶 Pro",
        "startSubtitle": "空間記憶 • 位置再現",
        "countdownSubtitle": "準備してください",
        "newBest": "自己新記録",
        "pointsLabel": "ポイント",
        "statAccuracy": "正解率",
        "statPeakLevel": "最高レベル",
        "statPerfects": "パーフェクト",
        "btnPlayAgain": "もう一度プレイ",
        "rulesTitle": "ドリルルール & スコア算出方法",
        "aboutTitle": "物体位置記憶（Object Location Training）について",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "配置記憶と目標特定",
                        "highlight": "+150 PTS",
                        "result": "1.5秒で絵文字配置を覚え、消去後に指定目標の位置をタップ"
                },
                {
                        "num": "2",
                        "text": "難易度の上昇",
                        "highlight": "3x3 → 4x4 → 5x5",
                        "result": "レベルごとに物体+1（最大10個）、レベル8で4×4、15で5×5"
                },
                {
                        "num": "3",
                        "text": "ミス・時間切れ",
                        "highlight": "ペナルティなし",
                        "result": "ラウンド終了、減点なし。回答は8秒以内、45秒の制限時間は進行"
                },
                {
                        "num": "4",
                        "text": "難易度は維持",
                        "highlight": "レベル降下なし",
                        "result": "誤答してもレベルは下がらず、空間記憶の定着をサポート"
                }
        ]
}}
      />
      <DrillGuide guide={objectLocationGuide} />
      <RelatedDrills />
    </>
  );
}
