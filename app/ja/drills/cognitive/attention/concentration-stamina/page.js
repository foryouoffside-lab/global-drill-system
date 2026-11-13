import ConcentrationStaminaClient from '@/app/drills/cognitive/attention/concentration-stamina/ConcentrationStaminaClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "集中力テスト | 持続的注意の測定 | SkillDrills",
  description: "無料ブラウザの集中力テストで持続的注意、誤反応の抑制、ルール切り替えを確認。",
  keywords: ["集中力テスト", "集中力テスト 無料", "集中力 測定", "持続的注意 テスト", "注意力 テスト", "ビジランス テスト", "集中力 ゲーム", "抑制機能 テスト", "集中力 トレーニング", "集中力テスト ブラウザ", "CPTテスト オンライン"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "集中力テスト | 持続的注意の測定 | SkillDrills",
    description: "無料ブラウザの集中力テストで持続的注意、誤反応の抑制、ルール切り替えを確認。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "集中力テスト | 持続的注意の測定 | SkillDrills",
    description: "無料ブラウザの集中力テストで持続的注意、誤反応の抑制、ルール切り替えを確認。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina',
    languages: getAlternateLanguages('/drills/cognitive/attention/concentration-stamina'),
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
      "name": "集中力テスト",
      "item": "https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Vigilance_(psychology)", "https://en.wikipedia.org/wiki/Attention"],
  "name": "集中力テスト・持続的注意セルフチェック",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "無料ブラウザの集中力テストで持続的注意、誤反応の抑制、ルール切り替えを記録するセルフチェックです。",
  "url": "https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina",
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
  "name": "集中力テスト・持続的注意の測定",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "url": "https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "集中力テスト – 持続的注意＆抑制コントロールゲーム",
  "url": "https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina",
  "description": "無料ブラウザの集中力テストで持続的注意、誤反応の抑制、ルール切り替えを記録するセルフチェックです。",
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
      "name": "集中力持続テスト（Concentration Stamina / CPT）とは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "次々と表示される文字・数字の中から、現在のルール（母音または素数）に合うものだけに反応し、それ以外は見送る CPT（持続遂行課題）形式の練習です。1回45秒です。"
      }
    },
    {
      "@type": "Question",
      "name": "マックワースのビジランス低下現象（Mackworth, 1948）とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "レーダー監視の研究（Mackworth, 1948）で、まれな信号を長く監視するほど検出精度が下がるビジランス低下が報告されました。このドリルは1回45秒と短いため、その現象を再現するというより、速い刺激の中で集中を保つ練習です。"
      }
    },
    {
      "@type": "Question",
      "name": "ルール切り替え（母音と素数）が脳に与える負荷は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "10秒ごとに標的ルールが母音（A E I O U）と素数（2 3 5 7）の間で切り替わるため、新しい基準へ素早く切り替えるタスク切り替え（Monsell, 2003）を練習できます。"
      }
    },
    {
      "@type": "Question",
      "name": "選択的注意と持続的注意の違いは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "選択的注意が特定の瞬間に雑音を遮断する能力であるのに対し（Broadbent, 1958）、持続的注意はその集中状態を長時間落とさず維持する耐久力です。"
      }
    },
    {
      "@type": "Question",
      "name": "フォールスアラーム（お手つき）が多いのはなぜですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ルールに合わない刺激に早まって反応した状態で、反応抑制課題でよく見られます（Robertson et al., 1997）。このドリルではお手つきのたびに赤いフラッシュとともに1秒間入力がロックされ、正答率に反映されます。点数は減りません。"
      }
    },
    {
      "@type": "Question",
      "name": "集中力スタミナはトレーニングで鍛えられますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "同じ条件で繰り返すと、慣れによってこの課題のスコアや正答率は上がることがありますが、日常の集中力向上が保証されるわけではありません。ヒットするほどレベルが上がり、刺激の表示時間が短くなります。"
      }
    },
    {
      "@type": "Question",
      "name": "運動や水分補給は集中持続に有効ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "睡眠、休憩、水分補給などのコンディションは結果に影響します。記録を比べるときは、同じ時間帯・同じ体調に近い条件でプレイしてください。"
      }
    },
    {
      "@type": "Question",
      "name": "ハードウェア環境が測定に与える影響は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "このドリルは反応時間（ms）を採点せず、ヒット・見逃し・お手つきだけを記録するため、リフレッシュレートの影響は小さめです。ただし高レベルでは刺激が約0.26秒しか表示されないため、遅延の少ない画面のほうが見やすくなります（Woods et al., 2015）。"
      }
    },
    {
      "@type": "Question",
      "name": "推奨される練習頻度は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "仕事や勉強の前に数回（1回45秒）プレイし、同じ時間帯・同じ端末でスコアと正答率を比べる使い方がおすすめです。"
      }
    },
    {
      "@type": "Question",
      "name": "完全無料で測定できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、SkillDrillsは完全無料・登録不要で、いつでもブラウザから即座に利用可能です。"
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "集中力テスト・持続的注意測定",
      "description": "無料ブラウザの集中力テストで持続的注意、誤反応の抑制、ルール切り替えを記録するセルフチェックです。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "画面中央への注視と初期ルールの確認",
      "text": "中央の刺激表示エリアに視線を固定し、現在有効なルール（母音または素数）を確認します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "合致ターゲットの瞬時識別",
      "text": "次々と切り替わる文字・数字の中から、アクティブルールに一致する標的を即座に見極めます。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "誤答の抑制と的確な打鍵",
      "text": "一致した時だけ画面をクリック・タップするか Space / Enter キーで反応し、非ターゲットには反応しません。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "10秒ごとのルール反転への適応",
      "text": "ルールが切り替わったら上部のルール表示を確認し、すぐに新しい基準で判定します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/concentration-stamina#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('mackworth1948', 'parasuraman1979', 'robertson1997', 'monsell2003', 'broadbent1958', 'woods2015'),
  intro: {
    title: "集中力テストと持続的注意の測定ガイド",
    paragraphs: [
      "この無料ブラウザ集中力テストは、45秒間に点滅する文字・数字への持続的注意、誤反応の抑制、ルール切り替えを記録するセルフチェックです。結果は体調や慣れに左右されます。",
      "レーダー監視の研究（Mackworth, 1948）で、まれな信号を長く監視するほど検出精度が下がるビジランス低下が報告されました。このドリルは1回45秒と短いため、その現象を再現するというより、速い刺激の中で集中を保つ練習です。",
      "10秒ごとに標的ルールが母音（A E I O U）と素数（2 3 5 7）の間で切り替わるため、新しい基準へ素早く切り替えるタスク切り替え（Monsell, 2003）を練習できます。",
    ],
  },
  benchmarks: {
    title: '認知パフォーマンス標準評価（ベンチマーク）',
    note: '段階は SkillDrills が設けた練習用の目安であり、人口統計やパーセンタイルではありません。',
    headers: ['等級 (Tier)', '称号 (Rank)', '評価基準', '到達ランク', '正答率', '練習段階'],
    rows: [
      { tier: 'Tier 1', rank: '最上位段階', stat: '最上位段階', level: 'マスタリー（極限）', accuracy: '98% 以上', percentile: '最上位段階' },
      { tier: 'Tier 2', rank: 'アドバンス・フォーカス', stat: '上級段階', level: 'ダイヤモンド（優秀）', accuracy: '94–97%', percentile: '上級段階' },
      { tier: 'Tier 3', rank: '熟練オペレーター', stat: '中上級段階', level: 'プラチナ（熟練）', accuracy: '88–93%', percentile: '中上級段階' },
      { tier: 'Tier 4', rank: '標準段階', stat: '標準段階', level: 'ゴールド（標準）', accuracy: '78–87%', percentile: '標準段階' },
      { tier: 'Tier 5', rank: '入門・初期基準値', stat: '基準値（基礎）', level: 'シルバー（基礎）', accuracy: '78% 未満', percentile: '基準値（下位）' },
    ],
  },
  protocols: {
    title: '脳の処理速度と集中力を高める4大トレーニングプロトコル',
    description: '持続的注意課題（CPT）の研究を参考にした、集中力と抑制機能を練習するドリルです。',
    items: [
      { title: "画面中央への注視と初期ルールの確認", description: "中央の刺激表示エリアに視線を固定し、現在有効なルール（母音または素数）を確認します。" },
      { title: "合致ターゲットの瞬時識別", description: "次々と切り替わる文字・数字の中から、アクティブルールに一致する標的を即座に見極めます。" },
      { title: "誤答の抑制と的確な打鍵", description: "一致した時だけ画面をクリック・タップするか Space / Enter キーで反応し、非ターゲットには反応しません。" },
      { title: "10秒ごとのルール反転への適応", description: "ルールが切り替わったら上部のルール表示を確認し、すぐに新しい基準で判定します。" },
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
      <ConcentrationStaminaClient copy={{
        title: "集中力テスト | 持続的注意の測定", subtitle: "持続集中・標的判別・誤反応の抑制を記録するセルフチェック",
        statScore: "スコア", statTime: "残り時間", statLevel: "レベル", statBest: "自己ベスト", ruleLabel: "ルール", vowels: "母音 (A E I O U)", primes: "素数 (2 3 5 7)",
        startTitle: "集中力テスト", startSubtitle: "持続的注意 • CPT方式の集中トレーニング", getReady: "準備してください", flashTitle: "ミス表示", soundTitle: "サウンド", newBest: "自己ベスト", points: "ポイント", accuracy: "正答率", misses: "ミス", peakLevel: "最高レベル", playAgain: "もう一度", shareScore: "スコアを共有", exitDrill: "終了",
        caption: "現在のルールに合う刺激だけへ素早く反応し、ルール切り替え時は不要な刺激を抑えてください。", rulesTitle: "ルールとスコア計算", ruleItems: [{ text: "標的ルール", highlight: "10秒ごとに切替", result: "母音 ↔ 素数" }, { text: "標的ヒット", highlight: "+100点", result: "クリック・タップ / Space・Enter" }, { text: "非標的", highlight: "抑制", result: "不一致は無視" }, { text: "誤反応", highlight: "1秒入力ロック", result: "正答率に反映" }],
        aboutTitle: "集中力テストについて", aboutLead: "まれな信号を長く監視すると持続的注意は低下することがあります。この練習は短いセッションでルール切り替え、標的判別、誤反応を記録するセルフチェックです。", aboutText: "持続的注意とは、繰り返し現れる刺激から重要な信号を選び続ける力です。同じ条件で繰り返し、スコアとミスの変化を確認しましょう。\n\n睡眠、疲労、画面環境、慣れで結果は変わります。", audienceTitle: "どんな人に向いていますか？", audienceText: "長時間の試験を準備する人、試合後半も精度を保ちたいゲーマー、持続的な集中が必要な仕事をする人に向いています。", skillsTitle: "鍛えられる力", skillsText: "持続的注意、標的判別、疲労下の警戒、誤反応の抑制を練習します。", flexibilityTitle: "認知の柔軟性", flexibilityText: "10秒ごとに母音と素数の基準が変わり、刺激を新しいルールで分類する切り替え力を鍛えます。"
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
