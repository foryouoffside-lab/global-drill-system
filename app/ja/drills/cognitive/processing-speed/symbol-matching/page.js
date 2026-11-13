import SymbolMatchingClient from '@/app/drills/cognitive/processing-speed/symbol-matching/SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "記号と数字の照合テスト | 処理速度トレーニング | SkillDrills",
  description: "無料ブラウザの記号と数字の照合テスト。上部キーで6つの記号と数字1〜6の対応を確かめ、表示された記号に合う数字を押して処理速度と視覚探索を練習します。",
  keywords: ["記号と数字の照合テスト", "処理速度 テスト", "記号 数字 照合", "処理速度 トレーニング", "視覚探索 練習", "記号照合 脳トレ"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "記号と数字の照合テスト | 処理速度トレーニング | SkillDrills",
    description: "無料ブラウザの記号と数字の照合テスト。上部キーで6つの記号と数字1〜6の対応を確かめ、表示された記号に合う数字を押して処理速度と視覚探索を練習します。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "記号と数字の照合テスト | 処理速度トレーニング | SkillDrills",
    description: "無料ブラウザの記号と数字の照合テスト。上部キーで6つの記号と数字1〜6の対応を確かめ、表示された記号に合う数字を押して処理速度と視覚探索を練習します。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/symbol-matching'),
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
      "name": "記号と数字の照合テスト",
      "item": "https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "記号と数字の照合テスト",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "無料ブラウザの記号と数字の照合テスト。上部キーの記号と数字1〜6の対応を見て、中央の記号に合う数字を押す処理速度トレーニングです。SDMTの形式を参考にした練習用ゲームです。",
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching",
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
  "name": "記号と数字の照合テスト – 処理速度トレーニング",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "記号と数字の照合テスト – 記号照合ゲーム",
  "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching",
  "description": "無料ブラウザの記号と数字の照合テスト。上部キーの記号と数字1〜6の対応を見て、中央の記号に合う数字を押す処理速度トレーニングです。SDMTの形式を参考にした練習用ゲームです。",
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
      "name": "SDMT（Symbol Digit Modalities Test）とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aaron Smith（1973）が作った古典的な注意課題で、記号と数字の対応表を見て記号に合う数字を答えます。このドリルはその形式を参考にした練習用ゲームで、SDMTそのものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "DSST（Wechsler符号問題）との違いは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DSSTは数字を見て記号を書き、SDMTは記号を見て数字を答えます。このドリルはSDMTと同じく、記号を見て数字ボタンを押します。"
      }
    },
    {
      "@type": "Question",
      "name": "記号と数字の照合テストはどう進みますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "上部キーに6つの記号と数字1〜6の対応が表示されます。中央に記号が出たら、合う数字ボタンを押します。キーはセッションごとに変わり、セッション中は固定です。"
      }
    },
    {
      "@type": "Question",
      "name": "時間とペナルティの仕組みは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45秒から始まり、正解ごとに2秒加算されます（上限60秒）。間違った数字や時間切れ（Target Timeouts がオンのとき）で1秒減り、コンボがリセットされます。0秒で終了です。"
      }
    },
    {
      "@type": "Question",
      "name": "スコアと難易度はどう決まりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "正解1回で100点にコンボ倍率とレベル倍率を掛けた点が入ります。スコアが上がるとレベルが上がり、1つの記号に使える回答時間が短くなります。"
      }
    },
    {
      "@type": "Question",
      "name": "結果からわかることは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "スコア、正確さ、ヒット数、ミス数、最高レベルと、SkillDrillsの固定基準によるFからS+の評価です。SDMTの基準値やIQとは比較できません。"
      }
    },
    {
      "@type": "Question",
      "name": "結果はどのように読めばよいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "終了画面でスコア、正確さ、ヒット数、ミス数、最高レベルと、FからS+の評価を確認できます。同じ端末で自分の以前の記録と比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "スコアを上げるコツは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "最初の数秒でキーを覚え、上部キーと中央の記号の間の視線移動を減らしましょう。誤答は1秒とコンボを失うので、正確さを優先するのが有利です。"
      }
    },
    {
      "@type": "Question",
      "name": "練習すると処理速度は上がりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "この課題のスコアは練習でたいてい伸びます。ただし、ほかの日常の作業まで速くなることは保証されません。"
      }
    },
    {
      "@type": "Question",
      "name": "スマートフォンでもできますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、画面下部の1〜6の数字ボタンをタップして操作します。登録不要・無料です。"
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "記号と数字の照合テストのやり方",
  "description": "無料ブラウザの記号と数字の照合テスト。上部キーの記号と数字1〜6の対応を見て、中央の記号に合う数字を押す処理速度トレーニングです。SDMTの形式を参考にした練習用ゲームです。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "上部凡例キーマトリックスの確認",
      "text": "ヘッダーに並ぶ6つの固有記号と数字（1〜6）の対応関係を素早く把握します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "中央ターゲット記号の瞬間認識",
      "text": "中央プロンプトに出現する記号を瞬時に視認します。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "対応数字キーの即時タップ",
      "text": "キーを覚えるか見直して、対応する数字ボタン（1〜6）をタップします。誤答や時間切れは1秒減とコンボ解除です。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "流れるような連想リズムの維持",
      "text": "正確さを保ってコンボをつなぎます。レベルが上がるほど1つの記号に使える時間が短くなります。",
      "url": "https://skilldrills.online/ja/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "記号と数字の照合テスト – 処理速度トレーニング",
    paragraphs: [
      "記号と数字の照合テストは、上部キーに並ぶ6つの記号と数字1〜6の対応を見て、中央に出た記号に合う数字ボタンを押す無料の練習です。キーはセッションごとに入れ替わります。45秒から始まり、正解ごとに2秒加算（上限60秒）、誤答や時間切れで1秒減ります。",
      "記号を見て数字で答える形式はSDMT（Smith, 1973）と同じで、数字を見て記号を書くDSSTとは向きが逆です。このドリルはどちらの検査でもなく、その基準値とは比較できません。",
      "結果はスコア、正確さ、ヒット数、ミス数、最高レベルで表示されます。IQの評価ではありません。",
    ],
  },
  benchmarks: {
    title: 'SkillDrills 練習の目安（正答率）',
    headers: ['等級 (Tier)', '称号 (Rank)', '到達ランク', '正答率'],
    note: 'この表は練習の目安として編集したもので、統計ではありません。環境によって結果は変わります。',
    rows: [
      { tier: 'Tier 1', rank: '超高速記号連想の最上位段階', level: 'マスタリー（極限）', accuracy: '98% 以上' },
      { tier: 'Tier 2', rank: '上級記号照合スペシャリスト', level: 'ダイヤモンド（優秀）', accuracy: '94–97%' },
      { tier: 'Tier 3', rank: '熟練視覚スキャナー', level: 'プラチナ（熟練）', accuracy: '88–93%' },
      { tier: 'Tier 4', rank: '標準', level: 'ゴールド（標準）', accuracy: '78–87%' },
      { tier: 'Tier 5', rank: '入門・初期基準値', level: 'シルバー（基礎）', accuracy: '78% 未満' },
    ],
  },
  protocols: {
    title: '記号と数字の照合テストの進め方',
    description: '上部キーを見て、表示された記号に合う数字を選ぶ手順です。形式はSDMT（Smith, 1973）を参考にしています。',
    items: [
      { title: "上部凡例キーマトリックスの確認", description: "ヘッダーに並ぶ6つの固有記号と数字（1〜6）の対応関係を素早く把握します。" },
      { title: "中央ターゲット記号の瞬間認識", description: "中央プロンプトに出現する記号を瞬時に視認します。" },
      { title: "対応数字キーの即時タップ", description: "キーを覚えるか見直して、対応する数字ボタン（1〜6）をタップします。誤答や時間切れは1秒減とコンボ解除です。" },
      { title: "流れるような連想リズムの維持", description: "正確さを保ってコンボをつなぎます。レベルが上がるほど1つの記号に使える時間が短くなります。" },
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
      <SymbolMatchingClient
        copy={{
          title: "記号と数字の照合テスト",
          subtitle: "記号と数字の対応を素早く見つけ、情報処理速度を練習します",
          startTitle: "記号と数字の照合テスト",
          stageCaption: "中央のターゲット記号を上のキーと照合し、対応する数字を押してください。",
          rulesTitle: "ドリルの説明とスコア",
          aboutTitle: "記号と数字の照合テストとは？",
          faqTitle: "よくある質問",
          readyLabel: "準備",
          labels: { score: "スコア", time: "時間", level: "レベル", bestScore: "ベストスコア", timeLeft: "残り時間", targetSymbol: "ターゲット記号", accuracy: "正確さ", hits: "成功", misses: "ミス", peakLevel: "最高レベル" },
          aboutLead: "記号数字課題は、時間内に記号と数字の対応を探し、知識ではなく情報処理速度と視覚探索を練習するものです。このドリルは練習用ゲームです。",
          aboutText: "このドリルはSDMTやDSSTで使われる記号と数字の対応形式を参考にしています。キーを確認してターゲット記号に合う数字を選ぶことで、視覚探索、連想記憶、選択反応を繰り返します。スコアはこのゲームでの成績を示すものです。",
          aboutCards: [
            { title: "どんな人に向いていますか？", desc: "情報処理速度と視覚探索を集中的に練習したい学生や社会人、ゲーマーに向いています。" },
            { title: "鍛えられる力", desc: "視覚探索、記号と数字の連想記憶、選択反応、反復課題での持続的な注意を練習します。" },
            { title: "毎回変わるキー", desc: "セッションごとに対応キーが変わるため、単純暗記ではなく実際の照合と探索を使います。" }
          ],
          rulesItems: [
            { num: "1", text: "記号数字キー", highlight: "6つの対応", result: "上部キーで数字を確認" },
            { num: "2", text: "ターゲット記号", highlight: "+100ポイント", result: "コンボ・レベル倍率、+2秒（上限60秒）" },
            { num: "3", text: "間違った数字", highlight: "コンボ解除", result: "−1秒" },
            { num: "4", text: "時間切れ", highlight: "回答時間が短縮", result: "−1秒・コンボ解除" }
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
