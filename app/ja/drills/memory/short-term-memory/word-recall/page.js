import WordRecallClient from '@/app/drills/memory/short-term-memory/word-recall/WordRecallClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "単語記憶テスト｜自由再生・言語性記憶 | SkillDrills",
  description: "無料の単語記憶テスト。単語リストを覚えて自由に再生し、言語性記憶とワーキングメモリをブラウザで練習できます。",
  keywords: [
    "単語記憶テスト",
    "単語自由再生テスト",
    "言語性記憶",
    "単語暗記テスト",
    "単語記憶課題",
    "単語リスト 記憶",
    "言語性ワーキングメモリ",
    "短期記憶 単語",
    "単語記憶ゲーム",
    "自由再生法 検査",
    "系列位置効果 テスト",
    "意味的チャンキング",
    "記憶力トレーニング 単語",
    "言葉 記憶力 テスト"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/word-recall', 'ja'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "単語記憶テスト｜自由再生・言語性記憶 | SkillDrills",
    description: "無料の単語記憶テスト。単語リストを覚えて自由に再生し、言語性記憶とワーキングメモリをブラウザで練習できます。",
    url: "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "単語記憶テスト｜自由再生・言語性記憶 | SkillDrills",
    description: "無料の単語記憶テスト。単語リストを覚えて自由に再生し、言語性記憶とワーキングメモリをブラウザで練習できます。",
  },
};

export const dynamic = 'force-static';

export default function LocalizedWordRecallPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "記憶力トレーニング", "item": "https://skilldrills.online/ja/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "短期記憶", "item": "https://skilldrills.online/ja/drills/memory/short-term-memory" },
      { "@type": "ListItem", "position": 4, "name": "単語記憶テスト", "item": "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "単語記憶テスト・単語再生テスト（Verbal Memory Test）",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "2秒間だけ表示される単語リストを、順番に関係なく思い出して入力する無料の単語記憶テスト。3語から始まり、全部正解すると1語ずつ増えます。",
    "genre": "Cognitive Assessment / Verbal Memory",
    "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall",
    "sameAs": ["https://ja.wikipedia.org/wiki/%E3%83%AF%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%A1%E3%83%A2%E3%83%AA"],
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "単語記憶テスト・単語再生テスト（Verbal Memory Test）",
    "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall",
    "description": "2秒間だけ表示される単語リストを、順番に関係なく思い出して入力する無料の単語記憶テスト。3語から始まり、全部正解すると1語ずつ増えます。",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "単語記憶テスト・単語再生テスト（Verbal Memory Test）",
    "description": "2秒間だけ表示される単語リストを、順番に関係なく思い出して入力する無料の単語記憶テスト。3語から始まり、全部正解すると1語ずつ増えます。",
    "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall",
    "genre": ["Memory Game", "Cognitive Training", "Brain Game"],
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
        "name": "単語記憶テストはどのように進みますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "単語のリストが一度に2秒間表示されて消えたら、12秒以内に覚えている単語をスペースか読点（、）で区切って入力し、Enterで送信します。順番は自由です（自由再生）。3語から始まり、全部正解すると1語増え（最大12語）、1語でも抜けたりリストにない語を入力すると1語減ります（最小3語）。1セッションは45秒です。"
        }
      },
      {
        "@type": "Question",
        "name": "スコアはどのように計算されますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "リストの単語をすべて、余計な語なしで入力できたラウンドだけ得点になります。1ラウンドの得点 = 150 ×（1 ＋ 0.15 ×（単語数 − 3））で、3語は150点、12語は約353点です。間違えてもスコアや残り時間は減らず、単語数が1つ下がるだけです。"
        }
      },
      {
        "@type": "Question",
        "name": "単語記憶テストの平均は何語ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkillDrills は利用者データを収集しないため、平均値やパーセンタイルは示していません。このゲームは2秒表示・12秒入力の制限があり、研究室の記憶検査とは直接比べられません。下の練習帯と自分の過去の記録を比べてください。"
        }
      },
      {
        "@type": "Question",
        "name": "入力ミス（誤字）はどう扱われますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "入力した単語はリストの単語と完全に一致する必要があります（英字は大文字・小文字とアクセントを区別しません）。誤字は「リストにない語」として扱われ、元の単語も抜けたことになるため、そのラウンドは失敗になります。"
        }
      },
      {
        "@type": "Question",
        "name": "自由再生と再認の違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "自由再生は手がかりなしに記憶から単語を思い出す方法、再認は選択肢の中から見たものを選ぶ方法です。このテストは自由再生なので、再認より難しくなります。"
        }
      },
      {
        "@type": "Question",
        "name": "系列位置効果とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "リストの最初の単語（初頭効果）と最後の単語（新近効果）は覚えやすく、中間の単語は忘れやすい現象です（Murdock, 1962）。このゲームでは単語が一度に表示されるので、読んだ順番がその役割を果たします。"
        }
      },
      {
        "@type": "Question",
        "name": "単語をイメージでつなぐと覚えやすいのはなぜですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "単語の意味を考えたり互いに結びつけたりすると、見た目だけを見るより深く処理され、記憶に残りやすい傾向があります（処理水準説、Craik & Lockhart, 1972）。ただし2秒は短いので、1枚の簡単な場面にまとめる程度が現実的です。"
        }
      },
      {
        "@type": "Question",
        "name": "入力する順番は関係ありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "いいえ。順番に関係なく、リストの単語がすべて含まれていれば正解です。最初に消えやすい最後の単語から入力するのも有効です。"
        }
      },
      {
        "@type": "Question",
        "name": "単語記憶の練習で日常の記憶力は良くなりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "効果は保証できません。練習すればこのゲームの記録は伸びる可能性がありますが、日常の記憶力への効果の移り方は研究によって結果が分かれます。"
        }
      },
      {
        "@type": "Question",
        "name": "このオンライン単語記憶テストは無料ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、無料で、インストールや会員登録なしにブラウザですぐ使えます。記録はブラウザ内にだけ保存されます。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "単語記憶テストのやり方",
    "description": "45秒間、2秒だけ表示される単語リストを覚えて入力する4ステップ。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall#step-1",
        "name": "2秒間リストを見る",
        "text": "単語のリスト全体が一度に2秒間表示されます。素早く目を通しましょう。"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall#step-2",
        "name": "1つの場面にまとめる",
        "text": "単語をひとつの短い場面やイメージにまとめて思い浮かべます。"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall#step-3",
        "name": "最後に見た単語から入力",
        "text": "入力欄が出たら、すぐに消えやすい最後の単語から入力します。順番は自由です。"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/word-recall#step-4",
        "name": "12秒以内に送信",
        "text": "単語をスペースか読点で区切ってすべて入力し、Enterで送信します。入力時間は12秒です。"
      }
    ]
  };

  const wordRecallGuide = {
    heading: "単語記憶テスト ガイド＆自由再生",
    intro: [
      "単語記憶テストは、一瞬表示された単語のリストを順番に関係なく思い出して入力する単語再生ゲームです。心理学の自由再生課題を練習用にしたものです。",
      "単語リストの記憶研究はヘルマン・エビングハウス（1885）の記憶実験から始まりました。マードック（Murdock, 1962）は自由再生でリストの最初と最後の単語がよく思い出される系列位置効果を報告し、タルヴィング（Tulving, 1962）は人が単語を自分なりにまとめて覚えることを示しました。",
      "クレイクとロックハート（Craik & Lockhart, 1972）の処理水準説によれば、単語の意味を考えたり互いに結びつけたりするほど記憶に残りやすい傾向があります。表示時間が短いこのゲームでは、単語を1つの場面に素早くまとめるのが役立ちます。",
      "ゲームの仕組み：3語から始まり、単語のリストが一度に2秒間表示されます。消えたあと12秒以内に、覚えている単語をスペースか読点で区切って入力し、Enterで送信します。すべて正解で余計な語がなければ1語増え（最大12語）、抜けや誤った語、時間切れがあると1語減ります（最小3語）。45秒間のスコア、最大単語数、正答率（成功ラウンドの割合）を記録し、反応時間は計測しません。",
      "データの透明性：SkillDrills はプレイ結果をサーバーに収集しません。記録はブラウザの localStorage にのみ保存されるため、このページでは利用者の平均値、パーセンタイル、利用者数を示しておらず、引用している研究は下部の参考文献にあります。"
    ],
    benchmarks: {
      title: "単語記憶テスト 練習帯（SkillDrills基準・45秒）",
      headers: ["練習帯", "到達単語数", "ノーミス到達時のスコア", "典型的な覚え方"],
      rows: [
        ["帯 1", "12語", "約2,160点以上", "リスト全体を1つの場面に即座にまとめる"],
        ["帯 2", "10〜11語", "約1,520〜2,159点", "意味ごとに2〜3語ずつまとめて覚える"],
        ["帯 3", "8〜9語", "約980〜1,519点", "最初と最後は覚えているが中間の語を落とす"],
        ["帯 4", "6〜7語", "約520〜979点", "1語ずつ読んで覚えている"],
        ["帯 5", "3〜5語", "520点未満", "2秒表示と入力方法に慣れる段階"]
      ],
      note: "人口平均ではなく SkillDrills の練習帯です。スコアは3語からノーミスでその単語数に到達した場合の値です（1ラウンドの得点 = 150 ×（1 ＋ 0.15 ×（単語数 − 3）））。45秒間に行えるラウンド数には限りがあり、間違えると単語数が下がるため、実際のスコアは変わります。"
    },
    techniques: {
      title: "覚えられる単語数を増やすコツ",
      items: [
        {
          "name": "1つの場面にまとめる",
          "desc": "単語をひとつの場面に入れて思い浮かべます（例：「川」「ろうそく」「竜」→ 川の上でろうそくを持つ竜）。意味でつなぐと深く処理されます（Craik & Lockhart, 1972）。",
          "tips": "2秒で作れるよう、場面はシンプルにしましょう。"
        },
        {
          "name": "カテゴリーで分ける",
          "desc": "動物・場所・物のように似た単語同士をまとめます。人は単語を自分なりにまとめて覚える傾向があります（Tulving, 1962）。",
          "tips": "入力するときもカテゴリーごとに思い出すと抜けが減ります。"
        },
        {
          "name": "最後の単語から入力",
          "desc": "直前に見た単語はすぐ消えやすい（新近効果）ので、入力欄が開いたら先に入力し、そのあと最初と中間の単語を思い出します（Murdock, 1962）。",
          "tips": "入力の順番は採点に影響しません。"
        },
        {
          "name": "誤字に注意",
          "desc": "誤字は間違った語として扱われ、そのラウンド全体が失敗になります。12秒以内に正確に入力することが大切です。",
          "tips": "自信のない単語を当てずっぽうで入れると、かえって失敗につながります。"
        }
      ]
    },
    steps: [
      "45秒セッションを開始し、画面中央の単語表示エリアを見ます。",
      "単語のリストが2秒間一度に表示されたら、素早く読んで1つの場面にまとめます。",
      "入力欄が出たら、最後に見た単語から入力します。",
      "すべての単語をスペースか読点で区切って12秒以内に入力し、Enterで送信します。",
      "全部正解で1語増え、間違えると1語減ります。スコアと最大単語数を自分の記録と比べましょう。"
    ],
    audience: "単語の記憶力を試してみたい学生や社会人、記憶ゲームで頭を使いたいすべての方。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('craik1972', 'murdock1962', 'tulving1962'),
    related: [
      { href: "/ja/drills/memory/short-term-memory/digit-span", label: "数唱記憶テスト" },
      { href: "/ja/drills/memory/short-term-memory/color-sequence", label: "色順番記憶ゲーム" },
      { href: "/ja/drills/memory/spatial-memory/grid-memorization", label: "視覚記憶テスト" },
      { href: "/ja/drills/memory/spatial-memory/object-location", label: "位置記憶テスト" },
      { href: "/ja/drills/memory/working-memory/n-back", label: "Nバック作業記憶テスト" }
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
      <WordRecallClient copy={{
          "h1Keyword": "単語記憶テスト",
          "h1Suffix": "｜自由再生・言語性記憶",
          "subtitle": "単語リストを覚えて自由に再生",
          "statScore": "スコア",
          "statTime": "残り時間",
          "statWords": "単語数",
          "wordsUnit": "語",
          "statBestScore": "ベストスコア",
          "memorizePhase": "単語を記憶してください",
          "btnSkip": "スキップ",
          "inputPhase": "記憶した単語を入力",
          "inputPlaceholder": "覚えている単語をスペース区切りで入力...",
          "btnSubmit": "回答を送信",
          "inputHint": "Enterキーで送信できます",
          "feedbackPhase": "再生結果の判定",
          "extraWordsLabel": "余分または誤って入力された単語:",
          "startTitle": "単語記憶 Pro",
          "startSubtitle": "単語記憶 • 自由再生",
          "countdownSubtitle": "準備してください",
          "newBest": "自己新記録",
          "pointsLabel": "ポイント",
          "statAccuracy": "正解率",
          "statPeakWords": "最大単語数",
          "statPerfects": "パーフェクト",
          "btnPlayAgain": "もう一度プレイ",
          "rulesTitle": "ドリルルール & スコア算出方法",
          "aboutTitle": "単語記憶テスト（Verbal Memory）について",
          "rulesItems": [
                    {
                              "num": "1",
                              "text": "単語リストの再生",
                              "highlight": "+150 PTS",
                              "result": "記憶フェーズで単語を覚え、入力フェーズで正確に入力"
                    },
                    {
                              "num": "2",
                              "text": "レベルボーナス",
                              "highlight": "最大+135% PTS",
                              "result": "1ラウンド = 150 ×（1 ＋ 0.15 ×（単語数 − 3））点"
                    },
                    {
                              "num": "3",
                              "text": "ミス・時間切れ",
                              "highlight": "-1 単語",
                              "result": "抜け・誤った語・12秒超過：減点・時間減少なしで1語減る"
                    },
                    {
                              "num": "4",
                              "text": "適応型スパン測定",
                              "highlight": "自動昇降",
                              "result": "全問正解で＋1語、ミスで−1語（3〜12語）"
                    }
          ],
          "wordBank": [
                    "りんご",
                    "城",
                    "橋",
                    "ダイヤ",
                    "鷲",
                    "森",
                    "庭園",
                    "金槌",
                    "島",
                    "密林",
                    "騎士",
                    "灯台",
                    "山",
                    "針",
                    "海",
                    "宮殿",
                    "女王",
                    "ロケット",
                    "夕日",
                    "神殿",
                    "傘",
                    "渓谷",
                    "窓",
                    "シマウマ",
                    "ろうそく",
                    "ドラゴン",
                    "羽",
                    "銀",
                    "金",
                    "大理石",
                    "水晶",
                    "青銅",
                    "影",
                    "魂",
                    "知恵",
                    "名誉",
                    "栄光",
                    "夢",
                    "嵐",
                    "川",
                    "雲",
                    "炎",
                    "石",
                    "雷",
                    "虹",
                    "不死鳥",
                    "時計",
                    "鏡",
                    "帽子"
          ]
}} />
      <DrillGuide guide={wordRecallGuide} />
      <RelatedDrills />
    </>
  );
}
