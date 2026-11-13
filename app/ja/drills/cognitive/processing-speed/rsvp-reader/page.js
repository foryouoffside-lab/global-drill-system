import RSVPReaderClient from '@/app/drills/cognitive/processing-speed/rsvp-reader/RSVPReaderClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "速読テスト | RSVP読書トレーニング | SkillDrills",
  description: "無料ブラウザの速読テストで、単語を固定位置に順番表示します。WPMと正確さを確認する読書トレーニングです。",
  keywords: ["速読テスト", "速読テスト 無料", "速読 トレーニング", "RSVP速読", "WPM", "速読 練習"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "速読テスト | RSVP読書トレーニング | SkillDrills",
    description: "無料ブラウザの速読テストで、単語を固定位置に順番表示します。WPMと正確さを確認する読書トレーニングです。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "速読テスト | RSVP読書トレーニング | SkillDrills",
    description: "無料ブラウザの速読テストで、単語を固定位置に順番表示します。WPMと正確さを確認する読書トレーニングです。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/rsvp-reader'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills ホーム",
      "item": "https://skilldrills.online/ja"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "訓練ハブ",
      "item": "https://skilldrills.online/ja/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "認知・集中力トレーニング",
      "item": "https://skilldrills.online/ja/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "RSVP速読テスト",
      "item": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Rapid_serial_visual_presentation"],
  "name": "速読テスト（RSVP）",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "無料ブラウザの速読テスト（RSVP）。英文の単語を画面の一点に250〜850WPMの5段階で1語ずつ表示し、ターゲット単語が出たらボタンを押します。結果はヒット数・正確さ・到達速度で、読解力の測定ではありません。",
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "速読テスト – RSVP読書トレーニング",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "RSVP速読テスト – ターゲット単語検出ゲーム",
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader",
  "description": "無料ブラウザの速読テスト（RSVP）。英文の単語を画面の一点に250〜850WPMの5段階で1語ずつ表示し、ターゲット単語が出たらボタンを押します。結果はヒット数・正確さ・到達速度で、読解力の測定ではありません。",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "dateModified": "2026-11-12",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "RSVP（Rapid Serial Visual Presentation: 視覚性急速系列提示）とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "画面の同じ位置に単語を1語ずつ連続表示し、視線を動かさずに読む方式です。理解度を保証する方法ではないため、速さだけで読解力は判断できません。"
      }
    },
    {
      "@type": "Question",
      "name": "この速読テストはどう進みますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "上部バナーにターゲット単語が表示されます。中央に英単語が1語ずつ流れ、ターゲット単語が表示されている間に検出ボタンを押すと100点です。1回のプレイは45秒です。"
      }
    },
    {
      "@type": "Question",
      "name": "速度レベルはどう上がりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "レベル1（250WPM）から、350、480、650、最上位のレベル5（850WPM）まであります。ターゲット単語を2回見つけるごと（200点ごと）に1段階上がります。"
      }
    },
    {
      "@type": "Question",
      "name": "押し間違えたり見逃したりするとどうなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ターゲット以外の単語で押すとエラーになり、ボタンが1秒間ロックされます。ターゲット単語を押さずに通過すると見逃しになります。どちらも正確さに反映されますが、残り時間は減りません。"
      }
    },
    {
      "@type": "Question",
      "name": "結果では何がわかりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "スコア、ヒット数、エラー、正確さ、到達した速度レベルが表示されます。WPMは単語の表示テンポで、あなた自身の読書速度を測った値ではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "日本語の文章で速読テストできますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "現在表示される文章は英文です。日本語の読書速度は通常「文字/分」で表すため、このドリルのWPMとはそのまま比べられません。"
      }
    },
    {
      "@type": "Question",
      "name": "最適認識点（ORP）とは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "単語の中で視線を置きやすい文字位置のことで、通常は中央よりやや左側です。このドリルではその文字を強調して、一点に視線を保ちやすくしています。"
      }
    },
    {
      "@type": "Question",
      "name": "一般的な成人の読書速度（WPM）はどれくらいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "英語の黙読では毎分約200〜300語と報告されています（Rayner, 1998）。このドリルのレベル速度とは直接比較できません。"
      }
    },
    {
      "@type": "Question",
      "name": "練習すると速く読めるようになりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "速い単語の流れからターゲットを見つける課題は、練習で上達することが多いです。ただし速度を上げると理解が落ちることがあり、読書全般が速くなることは保証されません。"
      }
    },
    {
      "@type": "Question",
      "name": "利用料金や登録は必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ、無料・登録不要で、ブラウザからすぐに利用できます。"
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "速読テストのやり方",
  "description": "無料ブラウザの速読テスト（RSVP）。英文の単語を画面の一点に250〜850WPMの5段階で1語ずつ表示し、ターゲット単語が出たらボタンを押します。結果はヒット数・正確さ・到達速度で、読解力の測定ではありません。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "目標ターゲット単語の確認",
      "text": "画面上部のバナーに表示されている「出現予定ターゲット単語」を記憶します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "中央ORPアンカーへの視線固定",
      "text": "視線を動かさず、中心のハイライトされたピボット文字に視線を集中します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "単語の流れを追う",
      "text": "同じ位置に1語ずつ現れる英単語を追いながら、ターゲット単語を待ちます。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "ターゲット出現時の瞬間検知タップ",
      "text": "ターゲット単語が表示されている間に検出ボタンを押します。違う単語で押すと1秒間ボタンがロックされます。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rayner1998', 'rayner2016', 'woods2015'),
  intro: {
    title: "速読テスト – RSVP読書トレーニング",
    paragraphs: [
      "速読テスト（RSVP）は、単語を画面の一点に1語ずつ表示する無料のブラウザ練習です。上部バナーのターゲット単語が出たらボタンを押し、2回見つけるごとに表示速度が250WPMから最大850WPMまで1段階ずつ上がります。表示される文章は英文で、WPMは英単語の表示テンポです（文字/分の計測ではありません）。",
      "最適認識点（ORP）とは、単語の中で視線を置きやすい文字位置のことで、通常は中央よりやや左側とされます。このドリルではその文字を強調して表示します。",
      "通常の読書では、視線が単語間を移動するサッカードや読み返しにも時間が使われます（Rayner, 1998）。RSVPはその移動を省きますが、速度を上げると理解が落ちることがあります（Rayner ほか, 2016）。このドリルは読解力を測定しません。",
    ],
  },
  benchmarks: {
    title: '認知パフォーマンス標準評価（ベンチマーク）',
    headers: ['等級 (Tier)', '称号 (Rank)', '到達ランク', '正答率'],
    note: 'この表は練習の目安として編集したもので、統計ではありません。環境によって結果は変わります。',
    rows: [
      { tier: 'Tier 1', rank: '超高速情報処理の最上位段階', level: 'マスタリー（極限）', accuracy: '98% 以上' },
      { tier: 'Tier 2', rank: '上級速読スペシャリスト', level: 'ダイヤモンド（優秀）', accuracy: '94–97%' },
      { tier: 'Tier 3', rank: '熟練情報オペレーター', level: 'プラチナ（熟練）', accuracy: '88–93%' },
      { tier: 'Tier 4', rank: '標準', level: 'ゴールド（標準）', accuracy: '78–87%' },
      { tier: 'Tier 5', rank: '入門・初期基準値', level: 'シルバー（基礎）', accuracy: '78% 未満' },
    ],
  },
  protocols: {
    title: '速読テストの進め方',
    description: '一点に視線を置き、流れてくる単語の中からターゲット単語を見つける手順です。',
    items: [
      { title: "目標ターゲット単語の確認", description: "画面上部のバナーに表示されている「出現予定ターゲット単語」を記憶します。" },
      { title: "中央ORPアンカーへの視線固定", description: "視線を動かさず、中心のハイライトされたピボット文字に視線を集中します。" },
      { title: "単語の流れを追う", description: "同じ位置に1語ずつ現れる英単語を追いながら、ターゲット単語を待ちます。" },
      { title: "ターゲット出現時の瞬間検知タップ", description: "ターゲット単語が表示されている間に検出ボタンを押します。違う単語で押すと1秒間ボタンがロックされます。" },
    ],
  },
  faqs: {
    title: 'よくある質問 (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function LocalizedCognitivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <RSVPReaderClient
        copy={{
          title: "速読テスト",
          subtitle: "固定した視点で単語を処理し、読書速度と正確さを練習します",
          startTitle: "速読テスト",
          startSubtitle: "単語認識 • ORP集中",
          stageCaption: "中央に単語が連続表示されます。指定された単語が見えたらすぐにボタンを押してください。",
          rulesTitle: "ドリルの説明とスコア",
          aboutTitle: "RSVP速読とは？",
          faqTitle: "よくある質問",
          labels: { score: "スコア", time: "時間", speed: "速度", bestScore: "ベストスコア", timeLeft: "残り時間", targetWord: "ターゲット単語", detected: "ターゲット検出", ready: "準備", accuracy: "正確さ", hits: "成功", errors: "ミス", points: "ポイント", playAgain: "もう一度" },
          aboutLead: "RSVPは単語を画面の同じ位置に一つずつ表示する読書方法です。左右に視線を移す負担を減らせますが、速度を上げるほど理解度が下がることがあるため、速さと正確さを一緒に見ます。",
          aboutText: "このドリルでは中央のORPに視線を保ち、流れてくる英単語を処理します。WPMは表示テンポの目安で、画面や端末の遅延も結果に影響します。850WPMはこのドリルの最上位レベルであり、すべての文章をその速度で理解できるという意味ではありません。",
          aboutCards: [
            { title: "どんな人に向いていますか？", desc: "多くの文章を読む学生や仕事で読む人、速読を練習したい人に向いています。" },
            { title: "鍛えられる力", desc: "単語認識、ワーキングメモリ、高速な視覚情報への持続的な注意を練習します。" },
            { title: "段階的な速度", desc: "250〜850WPMの5段階で、ターゲット単語を2回見つけるごとに1段階上がります。" }
          ],
          rulesItems: [
            { num: "1", text: "ターゲット単語", highlight: "上部バナー", result: "中央の流れから探す" },
            { num: "2", text: "ORP固定", highlight: "視線移動を抑える", result: "同じ位置で読む" },
            { num: "3", text: "ターゲット検出", highlight: "+100点", result: "表示中に検出ボタンを押す" },
            { num: "4", text: "速度レベル", highlight: "250 → 850 WPM", result: "2回検出ごとに1段階" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
