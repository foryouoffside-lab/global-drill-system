import MotorDrillsClient from '@/app/drills/motor/MotorDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const motorDrills = DRILLS.filter((d) => d.category === 'motor');

export const metadata = {
  title: 'マウス練習｜精度・連打・操作を鍛える無料ドリル | SkillDrills',
  description: '無料のマウス練習ドリル8種。動く標的を狙うエイム練習、45秒の連打測定（CPS）、ドラッグ操作、細い通路を抜ける手ブレ練習、軌跡トレース、キー認識反応で、マウス操作の精度と速さを記録できます。登録不要。',
  keywords: [
    'マウス練習', 'マウス操作 練習', 'マウス 練習 ゲーム', 'マウス 練習 サイト',
    '連打測定', 'マウス 手ブレ 練習', '手眼協調 トレーニング', 'マウス 微細操作 練習'
  ],
  openGraph: {
    title: 'マウス練習｜精度・連打・操作を鍛える無料ドリル | SkillDrills',
    description: '無料のマウス練習ドリル8種。動く標的を狙うエイム練習、45秒の連打測定（CPS）、ドラッグ操作、細い通路を抜ける手ブレ練習、軌跡トレース、キー認識反応で、マウス操作の精度と速さを記録できます。登録不要。',
    type: 'website',
    url: 'https://skilldrills.online/ja/drills/motor',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'マウス練習ドリル一覧 | SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'マウス練習｜精度・連打・操作を鍛える無料ドリル | SkillDrills',
    description: '無料のマウス練習ドリル8種。動く標的を狙うエイム練習、45秒の連打測定（CPS）、ドラッグ操作、細い通路を抜ける手ブレ練習、軌跡トレース、キー認識反応で、マウス操作の精度と速さを記録できます。登録不要。',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/motor',
    languages: getAlternateLanguages('/ja/drills/motor'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "全ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "モーター制御・マウス精度", "item": "https://skilldrills.online/ja/drills/motor" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-09",
  "name": "マウス練習ドリル（8種）",
  "url": "https://skilldrills.online/ja/drills/motor",
  "description": "マウス操作の精度、エイム、連打（CPS）、キー認識反応、手眼協調を練習できる無料ブラウザドリル8種。",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": motorDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'ja', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/ja${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqs = [
  { q: "このマウス練習ドリルでは何ができますか？", a: "マウスで動く標的を狙うエイム練習、45秒間のクリック数を数える連打測定（CPS）、ドラッグ＆ドロップ、順番クリック、的の中心を狙う精密クリック、細い通路を壁に触れずに抜ける手ブレ練習、動く点を追う軌跡トレース、画面のキーを押すキー認識反応の8種類です。どれもブラウザで無料、登録不要です。" },
  { q: "一般的なCPS（秒間クリック数）の平均値と主な連打テクニックは何ですか？", a: "CPSはマウス、クリック方法、測定時間で大きく変わるため、公認の平均値はありません。主な方法は通常クリック、腕を緊張させて指を細かく震わせるジッタークリック、2本の指で交互に押すバタフライクリックです。SkillDrillsの連打測定は45秒間のマウスクリックを数えて平均CPSを表示するので、同じ環境で自分の記録を比べる使い方がおすすめです。" },
  { q: "マウストレーシングや手ブレ練習はエイムのブレに役立ちますか？", a: "細い通路を壁に触れずに進む手ブレ練習や、動く点を追い続けるトレースは、カーソルを小さな範囲に保つ練習になります。効果には個人差があり、上達の保証はありません。同じ環境で記録の推移を確認してください。" },
  { q: "フィッツの法則（Fitts’s Law）とは何ですか？エイム速度と正確性にどう関係しますか？", a: "フィッツの法則は、目標までの移動時間が「距離と目標の大きさの比」の対数に比例するという運動制御のモデルです。照準動作は、距離の大部分を一気に詰める素早い移動と、直前で減速して中心に合わせる微修正の2段階で説明されることが多く、標的が小さいほど微修正の比重が大きくなります。" },
  { q: "キー認識ドリルは何を練習しますか？", a: "画面に表示されるキー（英字、数字、記号、矢印キーなど）を見て、60秒間できるだけ速く正確に押す反応ドリルです。フェイクの表示には反応してはいけません。タイピング速度の測定やキーボード本体の検査ツールではありません。" },
  { q: "ブラウザ上で動作するマウスやキーボードの測定精度はどの程度ですか？", a: "SkillDrillsはWebブラウザ標準のperformance.now() APIで時間を記録します。ブラウザの仕様でタイマーの分解能は丸められ、結果はディスプレイのリフレッシュレート（144Hzなら約6.9ms、240Hzなら約4.1ms）やマウス/キーボードのポーリングレート（1000Hzなら約1ms）の影響を受けます。数ミリ秒の差は誤差として扱い、同じ環境での自己記録の推移を見る使い方をおすすめします。" },
  { q: "マウス感度（DPIおよびゲーム内感度）とeDPIは練習にどう影響しますか？", a: "DPIとゲーム内感度の積であるeDPIが高いほど、小さな手の動きでカーソルが大きく動きます。高感度は素早い振り向きに向きますが手ブレも大きく映り、低感度は動きが安定しやすい反面、大きく腕を動かす必要があります。記録を比べるときは感度を固定して練習してください。" },
  { q: "チャタリングやゴーストキーはこのドリルで調べられますか？", a: "調べられません。チャタリング（1回の打鍵が複数回入力される不良）やゴースト（押していないキーが入力される現象）はキーボード本体の問題で、専用の検査ツールが必要です。SkillDrillsのキー認識ドリルは画面のキーへの反応を練習するもので、ハードウェアの診断は行いません。" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-09",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

export default function JapaneseMotorHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MotorDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}

