import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "選択反応時間テスト | 判断速度トレーニング | SkillDrills",
  description: "無料ブラウザの選択反応時間テスト：変化するルールに合うターゲットを選び、判断速度と正確さを練習します。臨床検査ではありません。",
  keywords: ["選択反応時間", "選択反応時間 テスト", "選択反応 テスト", "判断速度", "ヒックの法則"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "選択反応時間テスト | 判断速度トレーニング | SkillDrills",
    description: "無料ブラウザの選択反応時間テスト：変化するルールに合うターゲットを選び、判断速度と正確さを練習します。臨床検査ではありません。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "選択反応時間テスト | 判断速度トレーニング | SkillDrills",
    description: "無料ブラウザの選択反応時間テスト：変化するルールに合うターゲットを選び、判断速度と正確さを練習します。臨床検査ではありません。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/reaction-time'),
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
      "name": "選択反応時間テスト",
      "item": "https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "選択反応時間テスト",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "無料ブラウザの選択反応時間テスト。赤と青の標的から上部ルールに合う色を選び、判断速度と正確さを練習します。結果はスコア・正確さ・最高レベルで、ミリ秒計測や臨床検査ではありません。",
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time",
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
  "name": "選択反応時間テスト – 判断速度トレーニング",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time",
  "inLanguage": "ja-JP",
    "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "選択反応時間テスト – 色ルール切り替えゲーム",
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time",
  "description": "無料ブラウザの選択反応時間テスト。赤と青の標的から上部ルールに合う色を選び、判断速度と正確さを練習します。結果はスコア・正確さ・最高レベルで、ミリ秒計測や臨床検査ではありません。",
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
      "name": "選択反応時間（Choice Reaction Time）とは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "複数の刺激から条件に合うものを見分け、正しい反応を選んで実行するまでの時間です。このドリルでは赤と青のうち、現在のルールの色をクリックします。"
      }
    },
    {
      "@type": "Question",
      "name": "単純反応時間との違いは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "単純反応は予想された1つの刺激にすぐ反応します。選択反応では刺激の弁別と反応の選択が加わるため、一般に遅くなります（Donders）。このドリルはさらにルールの切り替えを加えています。"
      }
    },
    {
      "@type": "Question",
      "name": "ヒックの法則（Hick's Law, 1952）とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "選択肢の数が増えるほど反応時間が対数的に長くなるという法則です。このドリルでは毎回ルールを確認する必要があり、判断の段階を練習できます。"
      }
    },
    {
      "@type": "Question",
      "name": "ルールの切り替えはどう動きますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "上部のバナーがクリックする色（赤または青）を示します。レベル2からは、現在の色を一定回数正解するとルールが反転し、レベルが上がるほど反転までの回数が減ります（最少2回）。"
      }
    },
    {
      "@type": "Question",
      "name": "制限時間の仕組みは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45秒から始まり、正解ごとに2秒加算されます（上限60秒）。違う色のクリック、または標的の時間切れ（Target Timeouts がオンのとき）で1秒減り、コンボがリセットされます。0秒で終了です。"
      }
    },
    {
      "@type": "Question",
      "name": "スコアと評価はどう決まりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "正解1回で100点にコンボ倍率とレベル倍率を掛けた点が入ります。最終スコアはSkillDrillsの固定基準と比べ、FからS+までの評価で表示されます。"
      }
    },
    {
      "@type": "Question",
      "name": "反応時間をミリ秒で表示しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。結果はスコア、正確さ（全試行に占める正解の割合）、最高レベル、最大コンボです。1回ごとの反応時間はミリ秒で記録しません。"
      }
    },
    {
      "@type": "Question",
      "name": "練習すると上達しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "この課題のスコアは練習でたいてい伸びます。毎回ルールを先に確認し、正確さを保ってコンボを積むのがコツです。ほかの場面での反応が速くなることを保証するものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "医学的な検査ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。練習用のブラウザドリルで、診断やスクリーニングではありません。結果は端末や体調で変わるため、同じ端末で自分の記録を比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "無料で使えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、登録不要・無料でブラウザからすぐに使えます。"
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "選択反応時間テストのやり方",
  "description": "無料ブラウザの選択反応時間テスト。赤と青の標的から上部ルールに合う色を選び、判断速度と正確さを練習します。結果はスコア・正確さ・最高レベルで、ミリ秒計測や臨床検査ではありません。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "アクティブルール表示の確認",
      "text": "画面上部に表示されている現在のターゲット色（TAP RED または TAP BLUE）を把握します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "出現ターゲットの瞬時弁別",
      "text": "同時に現れる赤と青の標的から、現在の指定色と同じ標的を見つけます。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "的確な打鍵の実行",
      "text": "違う色は避け、標的が入れ替わる前に正しい色をクリックします。誤答や時間切れは1秒減とコンボ解除です。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "ルール反転への瞬間順応",
      "text": "上部のルール表示が切り替わった瞬間、即座に旧ルールを抑制して新ルール色へと照準を移します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('donders1969', 'hick1952', 'hyman1953', 'der2006', 'woods2015'),
  intro: {
    title: "選択反応時間テスト – 判断速度トレーニング",
    paragraphs: [
      "選択反応時間テストとは、複数の選択肢から条件に合うものを選んで反応する課題です。このドリルでは赤と青の標的が同時に現れ、画面上部の色ルールに合う標的だけをクリックします。レベル2からルールが切り替わるため、毎回ルールを確認する必要があります。",
      "単一の刺激にすぐ反応する単純反応と比べ、選択反応には刺激の弁別と反応の選択という段階が加わるため、一般に遅くなります（Donders）。",
      "選択肢の数が増えるほど反応時間が長くなる傾向は、ヒックの法則として知られています（Hick, 1952）。このドリルはミリ秒ではなく、スコア・正確さ・最高レベル・最大コンボを表示します。臨床検査ではありません。",
    ],
  },
  benchmarks: {
    title: '認知パフォーマンス標準評価（ベンチマーク）',
    headers: ['等級 (Tier)', '称号 (Rank)', '到達ランク', '正答率'],
    note: 'この表は練習の目安として編集したもので、統計や診断ではありません。環境によって結果は変わります。',
    rows: [
      { tier: 'Tier 1', rank: '超高速判断の最上位段階', level: 'マスタリー（極限）', accuracy: '98% 以上' },
      { tier: 'Tier 2', rank: '上級認知弁別スペシャリスト', level: 'ダイヤモンド（優秀）', accuracy: '94–97%' },
      { tier: 'Tier 3', rank: '熟練オペレーター', level: 'プラチナ（熟練）', accuracy: '88–93%' },
      { tier: 'Tier 4', rank: '標準', level: 'ゴールド（標準）', accuracy: '78–87%' },
      { tier: 'Tier 5', rank: '入門・初期基準値', level: 'シルバー（基礎）', accuracy: '78% 未満' },
    ],
  },
  protocols: {
    title: '選択反応時間テストの進め方',
    description: '2色の標的と切り替わるルールに合わせて、判断と正確さを練習する手順です。選択肢と判断時間の関係はヒックの法則（Hick, 1952）で説明されます。',
    items: [
      { title: "アクティブルール表示の確認", description: "画面上部に表示されている現在のターゲット色（TAP RED または TAP BLUE）を把握します。" },
      { title: "出現ターゲットの瞬時弁別", description: "同時に現れる赤と青の標的から、現在の指定色と同じ標的を見つけます。" },
      { title: "的確な打鍵の実行", description: "違う色は避け、標的が入れ替わる前に正しい色をクリックします。誤答や時間切れは1秒減とコンボ解除です。" },
      { title: "ルール反転への瞬間順応", description: "上部のルール表示が切り替わった瞬間、即座に旧ルールを抑制して新ルール色へと照準を移します。" },
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
      <EliteNeuroSwitchClient
        copy={{
          title: "選択反応時間テスト",
          subtitle: "色のルールに合わせて標的を選ぶ判断速度トレーニング",
          startTitle: "選択反応時間テスト",
          startSubtitle: "選択反応 • 判断速度",
          stageCaption: "上部のルールと同じ色の標的を素早くタップ。ルールと色は途中で切り替わります。",
          rulesTitle: "ドリルの説明とスコア",
          aboutTitle: "選択反応時間テストとは？",
          faqTitle: "よくある質問",
          labels: { score: "スコア", time: "時間", level: "レベル", bestScore: "ベストスコア", timeLeft: "残り時間", rule: "ルール", ready: "準備", accuracy: "正確さ", hits: "成功回数", peakLevel: "最高レベル", maxCombo: "最大コンボ" },
          ruleBanner: { RED: "赤の標的", BLUE: "青の標的" },
          aboutLead: "選択反応時間は、いくつかの刺激から現在のルールに合う反応を選ぶまでの時間です。選択肢が増えるほど判断時間が伸びるというヒックの法則と関係します。",
          aboutText: "このドリルでは、2色の標的を見分け、表示されたルールに合う標的を選びます。結果には視覚処理、判断、指の操作、端末の遅延が含まれます。途中でルールが切り替わるため、色を見た後に正しい操作を選ぶ必要があります。",
          aboutCards: [
            { title: "どんな人に向いていますか？", desc: "ゲーム、学習、運転などで素早い視覚判断と正確な操作を練習したい人に向いています。" },
            { title: "鍛えられる力", desc: "選択反応時間、視覚的な弁別、運動反応、ルール変更への注意を練習します。" },
            { title: "ルール切り替え", desc: "有効な色のルールが変わったとき、反応基準を更新する速さを刺激します。" }
          ],
          rulesItems: [
            { num: "1", text: "有効なルール", highlight: "赤 / 青", result: "上部バナーを確認" },
            { num: "2", text: "正しい標的", highlight: "+100点", result: "コンボ・レベル倍率、+2秒（上限60秒）" },
            { num: "3", text: "ルール変更", highlight: "レベル2から", result: "レベルが上がるほど頻繁に" },
            { num: "4", text: "誤答 / 時間切れ", highlight: "コンボ解除", result: "-1秒" }
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
