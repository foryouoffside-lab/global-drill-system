import DividedAttentionClient from '@/app/drills/cognitive/attention/divided-attention/DividedAttentionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "注意分割テスト | 二重課題トレーニング | SkillDrills",
  description: "無料の注意分割テスト：ランダムな位置に現れる青い標的をクリックしながら、数字ストリームの偶数を判定する二重課題トレーニング。",
  keywords: ["注意分割テスト", "二重課題 トレーニング", "デュアルタスク 練習", "注意の分割", "マルチタスク 脳トレ", "二重課題 テスト", "心理的不応期", "認知ボトルネック", "注意配分 テスト", "動体追従 数字処理",
    "二重課題 認知テスト",
    "注意分割 訓練 無料"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "注意分割テスト | 二重課題トレーニング | SkillDrills",
    description: "無料の注意分割テスト：ランダムな位置に現れる青い標的をクリックしながら、数字ストリームの偶数を判定する二重課題トレーニング。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/cognitive/attention/divided-attention',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "注意分割テスト | 二重課題トレーニング | SkillDrills",
    description: "無料の注意分割テスト：ランダムな位置に現れる青い標的をクリックしながら、数字ストリームの偶数を判定する二重課題トレーニング。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/cognitive/attention/divided-attention',
    languages: getAlternateLanguages('/drills/cognitive/attention/divided-attention'),
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
      "name": "注意分割テスト",
      "item": "https://skilldrills.online/ja/drills/cognitive/attention/divided-attention"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Divided_attention"],
  "name": "注意分割テスト・デュアルタスク訓練ツール",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "無料の注意分割テスト：ランダムな位置に現れる青い標的をクリックしながら、数字ストリームの偶数を判定する二重課題トレーニング。",
  "url": "https://skilldrills.online/ja/drills/cognitive/attention/divided-attention",
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
  "name": "注意分割テスト・二重課題トレーニング – デュアルタスク能力測定",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "url": "https://skilldrills.online/ja/drills/cognitive/attention/divided-attention",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "注意分割テスト – 二重課題視覚追従＆数字照合ゲーム",
  "url": "https://skilldrills.online/ja/drills/cognitive/attention/divided-attention",
  "description": "無料の注意分割テスト：ランダムな位置に現れる青い標的をクリックしながら、数字ストリームの偶数を判定する二重課題トレーニング。",
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
      "name": "注意分割テスト（Divided Attention Test）とは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2つの情報源に同時に注意を配分する練習ドリルです。ランダムな位置に現れる青い標的をクリックしつつ、右側の数字（0〜9）が偶数のときだけ判定ボタンを押します。"
      }
    },
    {
      "@type": "Question",
      "name": "心理的不応期（Psychological Refractory Period: PRP）とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2つの刺激が短い時間間隔で連続提示された際、中枢の決定ボトルネック（Pashler, 1994）によって2番目の反応が大幅に遅延する生理的現象です。"
      }
    },
    {
      "@type": "Question",
      "name": "ウィッケンズの多重資源理論（Wickens, 2002）とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "視覚・空間処理と聴覚・言語処理など、異なる感覚モダリティを用いる課題同士であれば、同一モダリティ同士よりも注意の競合が少なく効率的に分割できるという理論です。"
      }
    },
    {
      "@type": "Question",
      "name": "デュアルタスク訓練で並行処理能力は向上しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "繰り返すとこのドリルのスコアは伸びることがありますが、他の課題や日常生活への効果は保証されません。Spelkeら（1976）は長期間の練習で2つの課題を同時にこなせるようになった例を報告しています。"
      }
    },
    {
      "@type": "Question",
      "name": "日常生活やゲームにおける注意分割の重要性は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "運転中の計器と道路、FPSでの交戦とミニマップのように、2つの情報を同時に見る負荷を練習します。実際の運転や試合の成績向上を保証するものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "結果のランクはどう決まりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ランクはスコアで決まり、24,000点が最上位ランクの基準です。正解ごとに基本100点にコンボ倍率とレベル倍率が掛かります。正答率は別に表示され、いずれもSkillDrillsの練習用目安で母集団の統計ではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "疲労が注意分割に与える影響は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "睡眠不足や疲労は、片方のチャンネルを見落とすミスを増やすことがあります。記録は似たコンディションで比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "モニターのリフレッシュレートは関係しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "標的は動かず、ランダムな位置に現れて消えるだけなので、リフレッシュレートの影響は大きくありません。記録は同じ機器で比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "1回のプレイ時間は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45秒から始まり、正解ごとに+2秒（最大60秒）、ミスや見落としごとに-1秒。時間が0になるまで続き、スコアが上がるとレベルが上がって標的の切り替えが速く、小さくなります。"
      }
    },
    {
      "@type": "Question",
      "name": "完全無料で使えますか？",
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
  "name": "注意分割テスト・二重課題トレーニング",
  "description": "無料の注意分割テスト：ランダムな位置に現れる青い標的をクリックしながら、数字ストリームの偶数を判定する二重課題トレーニング。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "デュアルストリームの始動",
      "text": "スタートボタンを押して視覚追従フィールドと右側の数字ストリームを同時に開始します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/divided-attention#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "青い標的をクリック",
      "text": "ランダムな位置に現れる青い標的を、消える前にクリックまたはタップします。命中ごとに+2秒（最大60秒）です。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/divided-attention#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "数字ストリームの並行照合",
      "text": "右側パネルに偶数（0, 2, 4, 6, 8）が出たら判定ボタンをタップします。奇数で押す、同じ数字で2回押すとミスになります。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/divided-attention#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "両チャンネルの精度維持",
      "text": "両方のチャンネルを見落とさなければコンボ倍率が上がります。ミスするとコンボがリセットされ、1秒減ります。",
      "url": "https://skilldrills.online/ja/drills/cognitive/attention/divided-attention#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('pashler1994', 'wickens2002', 'strayer2001', 'spelke1976', 'woods2015'),
  intro: {
    title: "注意分割テストのガイド",
    paragraphs: [
      "無料の注意分割テスト：ランダムな位置に現れる青い標的をクリックしながら、数字ストリームの偶数を判定する二重課題トレーニング。",
      "2つの刺激が短い時間間隔で連続提示された際、中枢の決定ボトルネック（Pashler, 1994）によって2番目の反応が大幅に遅延する生理的現象です。",
      "視覚・空間処理と聴覚・言語処理など、異なる感覚モダリティを用いる課題同士であれば、同一モダリティ同士よりも注意の競合が少なく効率的に分割できるという理論です。",
    ],
  },
  benchmarks: {
    title: 'SkillDrills 練習段階（正答率の目安）',
    note: '段階は SkillDrills が設けた練習用の目安であり、人口統計やパーセンタイルではありません。',
    headers: ['等級 (Tier)', '称号 (Rank)', '評価基準', '到達ランク', '正答率', '練習段階'],
    rows: [
      { tier: 'Tier 1', rank: '並行処理の最上位段階', stat: '最上位段階', level: 'マスタリー（極限）', accuracy: '98% 以上', percentile: '最上位段階' },
      { tier: 'Tier 2', rank: 'アドバンス・デュアルタスカー', stat: '上級段階', level: 'ダイヤモンド（優秀）', accuracy: '94–97%', percentile: '上級段階' },
      { tier: 'Tier 3', rank: '熟練オペレーター', stat: '中上級段階', level: 'プラチナ（熟練）', accuracy: '88–93%', percentile: '中上級段階' },
      { tier: 'Tier 4', rank: '標準の練習段階', stat: '標準段階', level: 'ゴールド（標準）', accuracy: '78–87%', percentile: '標準段階' },
      { tier: 'Tier 5', rank: '入門・初期基準値', stat: '基準値（基礎）', level: 'シルバー（基礎）', accuracy: '78% 未満', percentile: '基準値（下位）' },
    ],
  },
  protocols: {
    title: '二重課題の練習4ステップ',
    description: '多重資源理論（Wickens, 2002）を参考に、2つのチャンネルを同時に処理する練習手順です。',
    items: [
      { title: "デュアルストリームの始動", description: "スタートボタンを押して視覚追従フィールドと右側の数字ストリームを同時に開始します。" },
      { title: "青い標的をクリック", description: "ランダムな位置に現れる青い標的を、消える前にクリックまたはタップします。命中ごとに+2秒（最大60秒）です。" },
      { title: "数字ストリームの並行照合", description: "右側パネルに偶数（0, 2, 4, 6, 8）が出たら判定ボタンをタップします。奇数で押す、同じ数字で2回押すとミスになります。" },
      { title: "両チャンネルの精度維持", description: "両方のチャンネルを見落とさなければコンボ倍率が上がります。ミスするとコンボがリセットされ、1秒減ります。" },
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
      <DividedAttentionClient copy={{
        title: "注意分割テスト", subtitle: "現れる標的と数字を同時に扱う二重課題トレーニング",
        statScore: "スコア", statTime: "時間", timeLeft: "残り時間", statLevel: "レベル", statBest: "ベストスコア",
        match: "判定", evenNumbers: "偶数", tapEven: "偶数でタップ", startTitle: "注意分割テスト", startSubtitle: "二重課題・集中切替",
        getReady: "準備してください", dualAccuracy: "総合正確度", hits: "成功", misses: "ミス", peakLevel: "最高レベル",
        caption: "現れる標的をクリックしながら、数字ストリームの偶数を同時に判定します。",
        rulesTitle: "ドリルの手順とスコア基準", ruleItems: [
          { text: "標的をタップ", highlight: "+100点", result: "標的をクリック（+2秒、最大60秒）" },
          { text: "偶数を判定", highlight: "正確に反応", result: "偶数のときに判定" },
          { text: "奇数は無視", highlight: "誤反応なし", result: "奇数では押さない" },
          { text: "ミス / 見落とし", highlight: "コンボリセット", result: "-1秒" },
        ],
        aboutTitle: "注意分割テストと二重課題トレーニング", aboutLead: "現れる視覚標的のクリックと数字分類を同時に行う、認知トレーニングです。",
        audienceTitle: "おすすめの人", audienceText: "ゲームでミニマップと目標を同時に見る人、学習者、複数の入力を素早く扱う人に向いています。",
        skillsTitle: "鍛える力", skillsText: "二重課題処理、視覚追従、数字判断、注意資源の配分を練習します。", flexibilityTitle: "並列処理", flexibilityText: "二つの情報の流れを切り替えながら、片方の正確さを落とさないよう調整します。"
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
