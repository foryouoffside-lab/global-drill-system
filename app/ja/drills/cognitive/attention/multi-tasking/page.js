import DualTargetFlowClient from '@/app/drills/cognitive/attention/multi-tasking/DualTargetFlowClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "マルチタスクテスト | 二重ターゲット追従 | SkillDrills",
  description: "無料ブラウザで二つのターゲットを同時に追従するマルチタスク練習。医学的診断ではない認知セルフチェックです。",
  keywords: ["マルチタスク 練習", "マルチタスク テスト", "二重ターゲット 追従", "並行処理 能力 測定", "タスク切り替え コスト", "認知的柔軟性 テスト", "両視野 追従 訓練", "脳トレ マルチタスク", "注意配分 テスト", "マルチタスク 能力 テスト", "視覚ストリーム 処理", "情報処理速度 測定"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "マルチタスクテスト | 二重ターゲット追従 | SkillDrills",
    description: "無料のマルチタスクテスト：反対方向に流れる2つの図形の流れから、それぞれの目標図形だけをタップするマルチタスク能力テスト。医学的診断ではない認知セルフチェックです。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "マルチタスクテスト | 二重ターゲット追従 | SkillDrills",
    description: "無料のマルチタスクテスト：反対方向に流れる2つの図形の流れから、それぞれの目標図形だけをタップするマルチタスク能力テスト。医学的診断ではない認知セルフチェックです。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking',
    languages: getAlternateLanguages('/drills/cognitive/attention/multi-tasking'),
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
      "name": "マルチタスクテスト",
      "item": "https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Task_switching_(psychology)", "https://en.wikipedia.org/wiki/Human_multitasking"],
  "name": "マルチタスクテスト（二重ターゲット追従）",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "無料のマルチタスクテスト：反対方向に流れる2つの図形の流れから、それぞれの目標図形だけをタップするマルチタスク能力テスト。医学的診断ではない認知セルフチェックです。",
  "url": "https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking",
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
  "name": "マルチタスクテスト・二重ターゲット追従",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "url": "https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "マルチタスクテスト – 対向ストリーム並行追従ゲーム",
  "url": "https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking",
  "description": "無料のマルチタスクテスト：反対方向に流れる2つの図形の流れから、それぞれの目標図形だけをタップするマルチタスク能力テスト。医学的診断ではない認知セルフチェックです。",
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
      "name": "マルチタスクテスト（Dual-Target Flow）とは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "画面を2つのレーン（横画面は左右、縦画面は上下）に分け、中央から外側へ反対方向に流れる図形のうち、各レーンに表示された目標図形だけをクリックまたはタップする練習ゲームです。臨床検査ではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "タスク切り替えコスト（Switch Cost, Rogers & Monsell, 1995）とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "異なるルールの課題を切り替えるときに生じる、反応の遅れやエラーの増加のことです。"
      }
    },
    {
      "@type": "Question",
      "name": "人間は本当に完全なマルチタスクが可能ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "高度な注意を要する作業では、脳は並列処理ではなく高速な時分割シリアル処理（Pashler, 1994）を行っています。"
      }
    },
    {
      "@type": "Question",
      "name": "メディア・マルチタスクの落とし穴（Ophir et al., 2009）とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "メディアを頻繁に同時利用する人は、無関係な刺激を無視する課題で成績が低い傾向があったと報告されています（相関研究であり因果は示されていません）。"
      }
    },
    {
      "@type": "Question",
      "name": "スコアはどう計算されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "目標図形を当てると基本100点にコンボ倍率とレベル倍率が掛かり、+2秒（最大60秒）。違う図形を押す、または目標図形を見逃すと-1秒でコンボがリセットされます。正確度＝成功÷（成功＋ミス）。結果ランクはスコア基準（24,000点が最上位）のSkillDrills練習用目安です。"
      }
    },
    {
      "@type": "Question",
      "name": "高スコアを出すための視線使いのコツは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "片方のレーンだけを見続けず、2つのレーンの境目付近を見ながら両方を確認することです。目標図形は20秒ごとに変わるので、各レーンの表示をこまめに確認しましょう。"
      }
    },
    {
      "@type": "Question",
      "name": "レベルが上がるとどう難しくなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "スコアが上がるとレベルが上がり、図形の流れが速く、出現頻度も高くなります。レベル3からは2つのレーンの目標図形が別々になります。"
      }
    },
    {
      "@type": "Question",
      "name": "モニターのリフレッシュレートは関係しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "高リフレッシュレートでは速く動く図形が見やすくなる可能性がありますが、スコアへの影響は測定していません。記録は同じ機器で比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "1回のプレイ時間は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45秒から始まり、正解ごとに+2秒（最大60秒）、ミスごとに-1秒。時間が0になると終了します。同じ条件で数回プレイしてスコアを比べましょう。"
      }
    },
    {
      "@type": "Question",
      "name": "スマートフォンでもプレイできますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。縦画面では2つのレーンが上下に、横画面では左右に並び、タッチで操作できます。"
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "マルチタスクテスト・二重ターゲット追従",
  "description": "無料のマルチタスクテスト：反対方向に流れる2つの図形の流れから、それぞれの目標図形だけをタップするマルチタスク能力テスト。医学的診断ではない認知セルフチェックです。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "レーンの境目付近を見る",
      "text": "画面中央に視線を落ち着かせ、左右（または上下）の両方の流れを同時に視野に収めます。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "ターゲット図形の確認",
      "text": "各レーンに表示されている目標図形を確認します。目標図形は20秒ごとに変わります。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "一致図形の高速タップ",
      "text": "流れてくる図形のうち、そのレーンの目標図形と同じものだけを画面外に出る前にクリックまたはタップします（+2秒）。違う図形を押すと-1秒です。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "加速するフローへの同調",
      "text": "レベルが上がると流れが速くなり、レベル3からは2つのレーンの目標が別々になります。ミスなく続けるとコンボ倍率が上がります。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/multi-tasking#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rogers1995', 'monsell2003', 'pashler1994', 'wickens2002', 'ophir2009', 'woods2015'),
  intro: {
    title: "マルチタスクテストのガイド",
    paragraphs: [
      "無料のマルチタスクテスト：反対方向に流れる2つの図形の流れから、それぞれの目標図形だけをタップするマルチタスク能力テスト。医学的診断ではない認知セルフチェックです。",
      "異なるルールの課題を切り替えるときに生じる、反応の遅れやエラーの増加のことです。",
      "高度な注意を要する作業では、脳は並列処理ではなく高速な時分割シリアル処理（Pashler, 1994）を行っています。",
    ],
  },
  benchmarks: {
    title: 'SkillDrills 練習段階（正確度の目安）',
    note: '段階は SkillDrills が設けた練習用の目安であり、人口統計やパーセンタイルではありません。',
    headers: ['等級 (Tier)', '称号 (Rank)', '評価基準', '到達ランク', '正答率', '練習段階'],
    rows: [
      { tier: 'Tier 1', rank: 'マルチタスクの最上位段階', stat: '最上位段階', level: 'マスタリー（極限）', accuracy: '98% 以上', percentile: '最上位段階' },
      { tier: 'Tier 2', rank: 'アドバンス・並行処理スペシャリスト', stat: '上級段階', level: 'ダイヤモンド（優秀）', accuracy: '94–97%', percentile: '上級段階' },
      { tier: 'Tier 3', rank: '熟練オペレーター', stat: '中上級段階', level: 'プラチナ（熟練）', accuracy: '88–93%', percentile: '中上級段階' },
      { tier: 'Tier 4', rank: '標準の練習段階', stat: '標準段階', level: 'ゴールド（標準）', accuracy: '78–87%', percentile: '標準段階' },
      { tier: 'Tier 5', rank: '入門・初期基準値', stat: '基準値（基礎）', level: 'シルバー（基礎）', accuracy: '78% 未満', percentile: '基準値（下位）' },
    ],
  },
  protocols: {
    title: 'マルチタスク練習の4ステップ',
    description: 'タスク切り替えコスト（Rogers & Monsell, 1995）を参考に、2つの流れを交互に確認する練習手順です。',
    items: [
      { title: "レーンの境目付近を見る", description: "画面中央に視線を落ち着かせ、左右（または上下）の両方の流れを同時に視野に収めます。" },
      { title: "ターゲット図形の確認", description: "各レーンに表示されている目標図形を確認します。目標図形は20秒ごとに変わります。" },
      { title: "一致図形の高速タップ", description: "流れてくる図形のうち、そのレーンの目標図形と同じものだけを画面外に出る前にクリックまたはタップします（+2秒）。違う図形を押すと-1秒です。" },
      { title: "加速するフローへの同調", description: "レベルが上がると流れが速くなり、レベル3からは2つのレーンの目標が別々になります。ミスなく続けるとコンボ倍率が上がります。" },
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
      <DualTargetFlowClient copy={{
        title: "マルチタスクテスト", subtitle: "二つのターゲットを同時に追従する認知トレーニング",
        statScore: "スコア", statTime: "時間", timeLeft: "残り時間", statLevel: "レベル", statBest: "ベストスコア",
        startTitle: "マルチタスクテスト", startSubtitle: "二重ストリーム・周辺フォーカス", getReady: "準備してください", accuracy: "正確度", hits: "成功", peakLevel: "最高レベル", maxCombo: "最大コンボ",
        caption: "反対方向に動く二つのターゲットストリームから、同じ図形を見つけて素早くタップします。",
        rulesTitle: "ドリルの手順とスコア基準", ruleItems: [
          { text: "目標図形を当てる", highlight: "+100点、+2秒", result: "レーンの図形をクリック" },
          { text: "両レーンを確認", highlight: "レベル3から", result: "レーンごとに目標が別" },
          { text: "誤タップ / 見逃し", highlight: "コンボリセット", result: "-1秒" },
          { text: "目標の変更", highlight: "20秒ごと", result: "表示を再確認" },
        ],
        aboutTitle: "マルチタスクと二重ターゲット追従", aboutLead: "二つの視覚ストリームを追従する非臨床の認知セルフチェックです。実生活の万能なマルチタスク能力ではなく、練習中の切替速度と両側の正確さを見ます。",
        audienceTitle: "おすすめの人", audienceText: "ゲーム中に複数の画面要素を見る人、学習者、同時に入る情報を整理したい人に向いています。",
        skillsTitle: "鍛える力", skillsText: "両側の視覚追従、周辺ターゲット検出、注意の切替、実行機能の調整を練習します。", flexibilityTitle: "課題切替の速さ", flexibilityText: "レベルが上がると速度とルールが変わるため、二つの流れを素早く正確に切り替えます。"
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
