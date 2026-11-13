import FineMotorClient from '@/app/drills/motor/precision-control/tracing/TracingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'カーソル追従テスト｜マウストレースゲーム | SkillDrills',
  description: '無料のカーソル追従テスト。流れる波形の上に45秒間カーソルを乗せ続けるマウストレースゲームで、追従精度と滑らかな手の操作を練習。波は徐々に速く大きくなります。',
  keywords: ['マウス トレース ゲーム', 'マウス 軌跡 なぞり 練習', '精密マウス操作 テスト', 'マウストラッキング 練習', 'カーソル 追従 測定', 'スムーズ追従 練習', 'マウス 手首 コントロール', 'マウス 精密 制御', 'カーソル軌跡 テスト', 'マウス操作 なめらか', '連続追従 トレーニング'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'カーソル追従テスト｜マウストレースゲーム | SkillDrills',
    description: '無料のカーソル追従テスト。流れる波形の上に45秒間カーソルを乗せ続けるマウストレースゲームで、追従精度と滑らかな手の操作を練習。波は徐々に速く大きくなります。',
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/motor/precision-control/tracing',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'カーソル追従テスト｜マウストレースゲーム | SkillDrills',
    description: '無料のカーソル追従テスト。流れる波形の上に45秒間カーソルを乗せ続けるマウストレースゲームで、追従精度と滑らかな手の操作を練習。波は徐々に速く大きくなります。',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/motor/precision-control/tracing',
    languages: getAlternateLanguages('/drills/motor/precision-control/tracing'),
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
      "name": "運動・操作トレーニング",
      "item": "https://skilldrills.online/ja/drills/motor"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "マウストレースゲーム",
      "item": "https://skilldrills.online/ja/drills/motor/precision-control/tracing"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  "name": "マウストレース精密軌跡追従テスト",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "流れる波形ラインにカーソルを沿わせ続けるカーソル追従テスト（マウストレースゲーム）。ラインの上下22ピクセル以内にいる間だけスコアが加算されます。",
  "url": "https://skilldrills.online/ja/drills/motor/precision-control/tracing",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-09"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "マウストレースゲーム・精密軌跡追従テスト – スムーストラッキング測定",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas, Pointer Lock API, modern web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "url": "https://skilldrills.online/ja/drills/motor/precision-control/tracing",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-09"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "inLanguage": "ja-JP",
  "name": "マウストレースゲーム – 連続波形ライン精密追従ゲーム",
  "url": "https://skilldrills.online/ja/drills/motor/precision-control/tracing",
  "description": "流れる波形ラインにカーソルを沿わせ続けるカーソル追従テスト（マウストレースゲーム）。ラインの上下22ピクセル以内にいる間だけスコアが加算されます。",
  "genre": [
    "Action",
    "Aim Trainer",
    "Esports Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "dateModified": "2026-11-09"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "マウストレースゲーム（Mouse Tracing Game）とは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "右から左へ流れる波形ラインの上に45秒間カーソルを乗せ続けるゲームです。ラインの上下22ピクセル以内にいる間は1フレームごとに1点、4秒連続で乗り続けるごとに+5点、外れた後にラインへ戻ると+10点が入ります。"
      }
    },
    {
      "@type": "Question",
      "name": "単発のクリック測定と軌跡追従（トラッキング）の違いは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "クリック測定が瞬間的な位置合わせであるのに対し、トラッキングは時々刻々と変化する目標速度に合わせて手の速度を同調させ続ける連続閉ループ制御です。"
      }
    },
    {
      "@type": "Question",
      "name": "スムーズパシュート眼球運動（Krauzlis, 2004）とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "動く物体を滑らかに網膜の中心（中心窩）に捉え続ける目の追従運動です。秒間約30度を超える速度になると目が追いつかなくなり、衝動性サッカードが発生します。"
      }
    },
    {
      "@type": "Question",
      "name": "ラシュバスのステップランプ実験（Rashbass, 1961）の意義は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "眼球運動系が物体の「位置のズレ」と「動く速度」を独立したメカニズムで処理し、速度に追従した滑らかな運動を出力することを証明しました。"
      }
    },
    {
      "@type": "Question",
      "name": "操縦の法則（Steering Law, Accot & Zhai, 1997）との関係は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "狭いカーブやラインから逸脱せずにカーソルを進める限界速度は、ラインの曲率と幅に物理的に拘束されるという法則です。"
      }
    },
    {
      "@type": "Question",
      "name": "ラインから脱線（Off-Path）した際のスコアペナルティは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "外れている間はスコアが加算されず、継続フレームが0になり、フロー安定度が毎秒25%ずつ下がります（ライン上では毎秒15%ずつ回復）。外れた瞬間に赤い警告フラッシュと効果音が出ますが、獲得済みのスコアは減りません。"
      }
    },
    {
      "@type": "Question",
      "name": "手首のブレを抑えて滑らかにカーソルを動かすコツは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "マウスを強く握りすぎず、手首と前腕をマウスパッドに均等に密着させて安定した摩擦支点を作ることが大切です。"
      }
    },
    {
      "@type": "Question",
      "name": "競技FPSにおけるトラッキングエイム向上に役立ちますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apex LegendsやOverwatchのように動く敵を追い続けるゲームをする人にとって、似た手の動きの練習になります。実際のゲームの腕前にどの程度生きるかは人によって異なります。"
      }
    },
    {
      "@type": "Question",
      "name": "マウスのDPIやセンサー感度はどう影響しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "センサーのジッター（揺らぎ）が少ない高精度センサーマウスと、滑らかなコントロール系マウスパッドを使用すると微小追従が容易になります。"
      }
    },
    {
      "@type": "Question",
      "name": "完全無料で測定できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、料金も会員登録も不要です。ハイスコアはブラウザのlocalStorageにだけ保存され、サーバーには送信されません。"
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-09",
  "name": "マウストレースゲーム・精密軌跡追従テスト – スムーストラッキング測定",
  "description": "流れる波形ラインにカーソルを沿わせ続けるカーソル追従テスト（マウストレースゲーム）。ラインの上下22ピクセル以内にいる間だけスコアが加算されます。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "カーソルのポインターロックと初期位置合わせ",
      "text": "訓練開始を押すと3秒のカウントダウン後にカーソルがロックされ（タッチ端末は指で操作）、画面左から4分の1の位置に置かれます。すぐに波形の上へ移動しましょう。Escで終了します。",
      "url": "https://skilldrills.online/ja/drills/motor/precision-control/tracing#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "波形速度に合わせた同調トラッキング",
      "text": "ラインの進行速度とカーソル速度を一致させ、線の中心帯から逸脱しないよう滑らかに手首を動かします。",
      "url": "https://skilldrills.online/ja/drills/motor/precision-control/tracing#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "急激なカーブでの微細速度調整",
      "text": "波の頂点や谷の急峻なカーブでは前腕と指先の筋肉を繊細にコントロールし、オーバーシュートを防ぎます。",
      "url": "https://skilldrills.online/ja/drills/motor/precision-control/tracing#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "スーパーフローストリークの維持",
      "text": "4秒連続でライン上にいるごとに+5点とフロー+10%が入ります。45秒の間に波は2.2から3.8 px/フレームへ加速し振れ幅も大きくなるので、最後までリズムを保ちましょう。",
      "url": "https://skilldrills.online/ja/drills/motor/precision-control/tracing#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('accot1997', 'krauzlis2004', 'rashbass1961', 'woodworth1899', 'woods2015'),
  intro: {
    title: "マウストレースゲーム・精密軌跡追従テスト – スムーストラッキング測定",
    paragraphs: [
      "カーソル追従テストは、流れる波形ラインからカーソルを外さずに45秒間たどり続けるマウストレースゲームです。波は右から左へ流れ、時間とともに速く、上下に大きくなります。",
      "クリック測定が瞬間的な位置合わせであるのに対し、トラッキングは時々刻々と変化する目標速度に合わせて手の速度を同調させ続ける連続閉ループ制御です。",
      "動く物体を滑らかに網膜の中心（中心窩）に捉え続ける目の追従運動です。秒間約30度を超える速度になると目が追いつかなくなり、衝動性サッカードが発生します。",
    ],
  },
  benchmarks: {
    title: 'カーソル追従テスト SkillDrills練習目安',
    note: '研究上の基準値やユーザー統計ではなく、結果画面のランク判定（終了時のフロー安定度とスコア）と同じSkillDrillsの練習目安です。スコアは1フレーム1点のため、リフレッシュレートが高いモニターほど大きくなります。同じ機器同士で比べてください。',
    headers: ['ランク', '称号', '終了時フロー安定度', 'スコア条件', '区分'],
    rows: [
      { tier: 'S+', rank: 'グランドマスターフロー', flow: '90%以上', score: '1,400点以上', band: 'SkillDrills練習目安' },
      { tier: 'S', rank: 'ピークフロー', flow: '80%以上', score: '-', band: 'SkillDrills練習目安' },
      { tier: 'A', rank: '安定した追従', flow: '60%以上', score: '-', band: 'SkillDrills練習目安' },
      { tier: 'B', rank: '着実な追従', flow: '35%以上', score: '-', band: 'SkillDrills練習目安' },
      { tier: 'C', rank: 'トレース完了', flow: '35%未満', score: '-', band: 'SkillDrills練習目安' },
    ],
  },
  protocols: {
    title: 'マウス操作精度を高める4大トレーニングプロトコル',
    description: 'ステアリングの法則（Accot-Zhai, 1997）および滑動性眼球運動（Smooth Pursuit, Krauzlis, 2004）に基づく、連続軌跡一致度と手首の微細筋協調を最適化する科学的運動制御プロトコルです。',
    items: [
      { title: "開始直後の位置合わせ", description: "カウントダウン後、カーソルは画面左から4分の1の位置に置かれます。すぐに波形の上へ移動して最初の得点を稼ぎましょう。" },
      { title: "波形速度に合わせた同調トラッキング", description: "ラインの進行速度とカーソル速度を一致させ、線の中心帯から逸脱しないよう滑らかに手首を動かします。" },
      { title: "急激なカーブでの微細速度調整", description: "波の頂点や谷の急峻なカーブでは前腕と指先の筋肉を繊細にコントロールし、オーバーシュートを防ぎます。" },
      { title: "スーパーフローストリークの維持", description: "4秒連続維持ごとに+5点とフロー+10%。ランクはセッション終了時のフロー安定度で決まるので、最後の数秒が特に重要です。" },
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

const jaCopy = {
  title: "カーソル追従テスト",
  subtitle: "カーソル追従トレーニング • 45秒",
  startButtonText: "訓練開始",
  startBtn: "訓練開始",
  trainAgain: "もう一度プレイ",
  shareTitle: "スコアを共有",
  exitTitle: "終了",
  statFlowScore: "フロースコア",
  statTimeLeft: "残り時間",
  statFlowIntegrity: "フロー安定度",
  statBestScore: "ハイスコア",
  maxStreakLabel: "最大継続フレーム",
  peakFlowLabel: "終了時フロー安定度",
  bestScoreLabel: "自己最高記録",
  rulesTitle: "訓練手順とスコアシステム",
  rulesItems: [
    { num: "1", text: "軌跡追従", highlight: "エメラルド波形", result: "経路維持で1フレームあたり+1pt" },
    { num: "2", text: "速度上昇", highlight: "漸進的加速", result: "45秒で2.2 → 3.8 px/fに加速" },
    { num: "3", text: "フローボーナス", highlight: "スーパーフロー", result: "4秒連続維持で+5ptボーナス" },
    { num: "4", text: "脱線", highlight: "許容範囲 ±22px", result: "継続リセット・フロー低下" }
  ],
};

export default function LocalizedMotorPage() {
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
      <FineMotorClient copy={jaCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
