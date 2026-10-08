import RSVPReaderClient from '@/app/drills/cognitive/processing-speed/rsvp-reader/RSVPReaderClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "速読テスト | RSVP読書トレーニング | SkillDrills",
  description: "無料ブラウザの速読テストで、単語を固定位置に順番表示します。WPMと正確さを確認する非臨床の読書トレーニングです。",
  keywords: ["速読テスト", "速読テスト 無料", "読書速度 測定", "速読トレーニング", "RSVP速読", "WPM 読書速度", "読解速度 テスト", "速読アプリ"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "速読テスト | RSVP読書トレーニング | SkillDrills",
    description: "無料ブラウザの速読テストで、単語を固定位置に順番表示します。WPMと正確さを確認する非臨床の読書トレーニングです。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "速読テスト | RSVP読書トレーニング | SkillDrills",
    description: "無料ブラウザの速読テストで、単語を固定位置に順番表示します。WPMと正確さを確認する非臨床の読書トレーニングです。",
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
  "name": "RSVP速読トレーニング・読書速度測定ツール",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "無料ブラウザ完結のRSVP速読トレーニングツール。視線跳躍（サッカード）を排除し、単語の最適認識点（ORP）へ高速連続表示することで、最大850WPMの超高速テキスト処理と読解速度を精密測定。",
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "ja-JP",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "速読トレーニング・RSVP読書速度測定 – 毎分単語数WPM診断",
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
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "RSVP速読テスト – 超高速テキスト処理＆標的語検知ゲーム",
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader",
  "description": "無料ブラウザ完結のRSVP速読トレーニングツール。視線跳躍（サッカード）を排除し、単語の最適認識点（ORP）へ高速連続表示することで、最大850WPMの超高速テキスト処理と読解速度を精密測定。",
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
  "dateModified": "2026-09-20",
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
        "text": "画面の固定された1点に単語を1語ずつ高速で連続点滅表示させ、眼球の移動時間を完全にゼロにする先進的な速読技術です。"
      }
    },
    {
      "@type": "Question",
      "name": "最適認識点（Optimal Recognition Point: ORP）とは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "単語の中で人間の脳が最も瞬時に語彙を識別できる文字位置（通常は単語の中央よりやや左側）のことです（Rayner, 1998）。"
      }
    },
    {
      "@type": "Question",
      "name": "通常の読書でスピードが制限される理由は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "通常の読書では、時間の最大80%が単語間を移動するサッカード眼球運動（20〜40ms）と読み返し（回帰）に費やされているためです（Rayner, 2016）。"
      }
    },
    {
      "@type": "Question",
      "name": "一般的な成人の読書速度（WPM）はどれくらいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "英語換算で一般成人の平均読書速度は200〜250WPMです。訓練された速読者は400〜600WPMを達成します。"
      }
    },
    {
      "@type": "Question",
      "name": "本ドリルで体験できる速度レベルは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "レベル1（250WPM）から始まり、レベル2（350WPM）、レベル3（480WPM）、レベル4（650WPM）、最上位のレベル5（850WPM）まで段階的に加速します。"
      }
    },
    {
      "@type": "Question",
      "name": "ターゲット単語の検知システムがある理由は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ただ単語を目で流すだけでなく、脳が意味を確実にデコードして理解しているかを客観的に検証するためです。"
      }
    },
    {
      "@type": "Question",
      "name": "RSVP練習で脳の情報処理速度は向上しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、視覚性単語形成領域（VWFA）での語彙認識速度とワーキングメモリのバッファ容量が鍛えられます。"
      }
    },
    {
      "@type": "Question",
      "name": "画面のリフレッシュレートは影響しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "144Hz以上のディスプレイは高速点滅時のフレーム抜けを防ぎ、クリアな文字視認性を担保します（Woods et al., 2015）。"
      }
    },
    {
      "@type": "Question",
      "name": "どのような人に効果的ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "大量の論文や書類を処理する学生・専門職、UI情報を瞬時に読み取るeスポーツプレイヤーに最適です。"
      }
    },
    {
      "@type": "Question",
      "name": "利用料金や登録は必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ、SkillDrillsは完全無料・登録不要で、いつでもブラウザから即座に利用可能です。"
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "速読トレーニング・RSVP読書速度測定",
  "description": "無料ブラウザ完結のRSVP速読トレーニングツール。視線跳躍（サッカード）を排除し、単語の最適認識点（ORP）へ高速連続表示することで、最大850WPMの超高速テキスト処理と読解速度を精密測定。",
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
      "name": "超高速テキストストリームの受容",
      "text": "サッカードを起こさず、網膜に流れ込む単語を流れるように意味理解します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "ターゲット出現時の瞬間検知タップ",
      "text": "目標単語が中央に点滅した瞬間、即座に「TARGET DETECTED」をタップします。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/rsvp-reader#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rayner1998', 'rayner2016', 'woods2015'),
  intro: {
    title: "速読トレーニング・RSVP読書速度測定 – 毎分単語数WPM診断",
    paragraphs: [
      "速読テスト（RSVP）とは、単語を画面の一点に次々と表示し、読む速さ（WPM）と正確さを確かめる練習です。このドリルでは固定位置に表示される単語を読み、指定のターゲット単語が出たらタップします。視線移動の時間を省けますが、内容の理解は別に確かめる必要があります。",
      "最適認識点（ORP）とは、単語の中で認識しやすい文字位置のことで、通常は単語の中央よりやや左側とされます（Rayner, 1998）。このドリルではその位置を強調して表示します。",
      "通常の読書では、視線が単語間を移動するサッカードや読み返し（回帰）にも時間が使われます（Rayner, 2016）。RSVPはその移動を省きますが、速度を上げると理解が落ちることがあるため、WPMだけでなく正確さも併せて見てください。",
    ],
  },
  benchmarks: {
    title: '認知パフォーマンス標準評価（ベンチマーク）',
    headers: ['等級 (Tier)', '称号 (Rank)', '到達ランク', '正答率'],
    note: 'この表は練習の目安として編集したもので、統計や診断ではありません。環境によって結果は変わります。',
    rows: [
      { tier: 'Tier 1', rank: '超高速情報処理の最上位段階', level: 'マスタリー（極限）', accuracy: '98% 以上' },
      { tier: 'Tier 2', rank: '上級速読スペシャリスト', level: 'ダイヤモンド（優秀）', accuracy: '94–97%' },
      { tier: 'Tier 3', rank: '熟練情報オペレーター', level: 'プラチナ（熟練）', accuracy: '88–93%' },
      { tier: 'Tier 4', rank: '一般成人標準', level: 'ゴールド（標準）', accuracy: '78–87%' },
      { tier: 'Tier 5', rank: '入門・初期基準値', level: 'シルバー（基礎）', accuracy: '78% 未満' },
    ],
  },
  protocols: {
    title: '脳の処理速度と集中力を高める4大トレーニングプロトコル',
    description: '最適認識点（ORP, Rayner, 1998）固定とサッカード眼球移動の浪費排除に基づく、視覚語彙処理速度を極限まで引き上げる科学的RSVP速読トレーニングプロトコルです。',
    items: [
      { title: "目標ターゲット単語の確認", description: "画面上部のバナーに表示されている「出現予定ターゲット単語」を記憶します。" },
      { title: "中央ORPアンカーへの視線固定", description: "視線を動かさず、中心のハイライトされたピボット文字に視線を集中します。" },
      { title: "超高速テキストストリームの受容", description: "サッカードを起こさず、網膜に流れ込む単語を流れるように意味理解します。" },
      { title: "ターゲット出現時の瞬間検知タップ", description: "目標単語が中央に点滅した瞬間、即座に「TARGET DETECTED」をタップします。" },
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
          startTitle: "RSVP速読テスト",
          startSubtitle: "単語認識 • ORP集中",
          stageCaption: "中央に単語が連続表示されます。指定された単語が見えたらすぐにボタンを押してください。",
          rulesTitle: "ドリルの説明とスコア",
          aboutTitle: "RSVP速読とは？",
          faqTitle: "よくある質問",
          labels: { score: "スコア", time: "時間", speed: "速度", bestScore: "ベストスコア", timeLeft: "残り時間", targetWord: "ターゲット単語", detected: "ターゲット検出", ready: "準備", accuracy: "正確さ", hits: "成功", errors: "ミス", points: "ポイント", playAgain: "もう一度" },
          aboutLead: "RSVPは単語を画面の同じ位置に一つずつ表示する読書方法です。左右に視線を移す負担を減らせますが、速度を上げるほど理解度が下がることがあるため、速さと正確さを一緒に見ます。",
          aboutText: "このドリルでは中央のORPに視線を保ち、流れてくる単語を処理します。WPMは表示テンポの目安で、画面や端末の遅延も結果に影響します。850WPMはこのドリルの最上位レベルであり、すべての文章をその速度で理解できるという意味ではありません。",
          aboutCards: [
            { title: "どんな人に向いていますか？", desc: "多くの文章を読む学生や仕事で読む人、速読を練習したい人に向いています。" },
            { title: "鍛えられる力", desc: "単語認識、ワーキングメモリ、高速な視覚情報への持続的な注意を練習します。" },
            { title: "段階的な速度", desc: "250〜850WPMの5段階で、正確さを保ちながらテンポを上げます。" }
          ],
          rulesItems: [
            { num: "1", text: "ターゲット単語", highlight: "上部バナー", result: "中央の流れから探す" },
            { num: "2", text: "ORP固定", highlight: "視線移動を抑える", result: "同じ位置で読む" },
            { num: "3", text: "ターゲット検出", highlight: "+100点", result: "検出ボタンを押す" },
            { num: "4", text: "速度レベル", highlight: "250 → 850 WPM", result: "5段階の難易度" }
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
