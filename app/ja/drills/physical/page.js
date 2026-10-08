import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

export const metadata = {
  title: '瞬発力＆反射神経トレーニング測定 (11種) | SkillDrills',
  description: 'オンラインで瞬発力と反射神経を鍛える無料ドリル集。反応速度測定、平衡感覚バランステスト、手眼協調性、ラダートレーニング、弾幕回避など11種の科学的運動テスト。',
  keywords: [
    '反射神経テスト ゲーム', '瞬発力 トレーニング', '反応速度 測定 オンライン',
    '平衡感覚 テスト オンライン', '手と目の協調性 トレーニング', 'ラダートレーニング フットワーク',
    'マウス 回避ゲーム 弾幕', '周辺視野 鍛える ゲーム', 'ゴーノーゴー 課題 テスト',
    '動的 障害物回避 ゲーム', 'ものさし落下 反応時間', '瞬発力 鍛え方 運動',
    '正中線交差 協調運動', '運動神経 反射神経 向上', '無料 ブラウザ 反射神経ゲーム'
  ],
  openGraph: {
    title: '瞬発力＆反射神経トレーニング測定 (11種) | SkillDrills',
    description: 'オンラインで瞬発力と反射神経を鍛える無料ドリル集。反応速度測定、平衡感覚バランステスト、手眼協調性、ラダートレーニング、弾幕回避など11種の科学的運動テスト。',
    type: 'website',
    url: 'https://skilldrills.online/ja/drills/physical',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: '瞬発力＆反射神経トレーニング測定ドリル | SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '瞬発力＆反射神経トレーニング測定 (11種) | SkillDrills',
    description: '11種の科学的瞬発力・反射神経測定ドリル。反応速度、平衡感覚、ラダーステップ、障害物回避をブラウザ上で無料トレーニング。',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/physical',
    languages: getAlternateLanguages('/ja/drills/physical'),
  },
};

Object.assign(metadata, {
  title: '反応速度・敏捷性トレーニング | 無料フィジカルドリル | SkillDrills',
  description: '反応速度テスト、フットワーク、バランス、運動協調をブラウザで練習できる11種類の無料ドリル。',
  keywords: ['反応速度テスト', '反射神経 トレーニング', '敏捷性 トレーニング', 'フットワーク 練習', 'バランス トレーニング', '手と目の協調', '運動協調 トレーニング', '回避ゲーム', '無料 ブラウザ トレーニング', 'スポーツ 反応練習'],
  openGraph: {
    ...metadata.openGraph,
    title: '反応速度・敏捷性トレーニング | 無料フィジカルドリル | SkillDrills',
    description: '反応速度、フットワーク、バランス、運動協調を練習できる11種類の無料ブラウザドリル。',
  },
  twitter: {
    ...metadata.twitter,
    title: '反応速度・敏捷性トレーニング | SkillDrills',
    description: '反応速度と敏捷性を練習できる11種類の無料フィジカルドリル。',
  },
  alternates: { ...metadata.alternates, languages: getAlternateLanguages('/drills/physical') },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "全ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "身体反射・瞬発力トレーニング", "item": "https://skilldrills.online/ja/drills/physical" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ja",
  "dateModified": "2026-09-20",
  "name": "身体反射・瞬発力トレーニングドリル (11種)",
  "url": "https://skilldrills.online/ja/drills/physical",
  "description": "11種類の科学的身体反射、動的バランステスト、手眼協調性、敏捷性ラダー、弾幕回避トレーニング。",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": physicalDrills.map((drill) => {
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "画面上のラダートレーニングは実際のフットワークやスポーツの敏捷性にどう効果がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "デジタル画面でスクロールするアジリティラダードリルは、高速な視覚情報認知とリズム同期の練習になります。動くグリッドに合わせて瞬間的な運動判断を下す練習は、方向転換の練習に役立つ可能性があります。"
      }
    },
    {
      "@type": "Question",
      "name": "衝動制御と反応チェーンドリルは、試合中のフェイント見極めや過剰反応（オーバーコミット）をどう防ぎますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "衝動制動（Impulse Arrest）テストは、すでに開始された運動指令を予期せぬデコイ（妨害刺激）の出現時に瞬時に停止・修正する抑制制御能力を測定します。大脳基底核や前頭前野の抑制回路を鍛えることで、150ミリ秒以内に慣性を制動し、相手のフェイントに対する過剰反応を防ぎます。"
      }
    },
    {
      "@type": "Question",
      "name": "風圧や外力に抗するバランステストは、身体の平衡感覚をどのように向上させますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "動的平衡感覚は、視覚による視線安定性、内耳の前庭系、筋紡錘や関節の固有受容覚の統合によって成り立っています。画面上の外力ベクトルに逆らって中心を保つ訓練は、不規則な外乱に対して中枢神経系が微細な抗力をリアルタイムに算出し、姿勢保持筋を動員する能力を高めます。"
      }
    },
    {
      "@type": "Question",
      "name": "両側性正中線交差運動（Cross-Body Movement）がアスリートの身体協調性に重要な理由は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "画面の中央正中線をまたぐ交差動作は、脳梁（Corpus Callosum）を介した左右両半球の情報伝達を活性化します。対角線のキネティックチェーン（身体運動連鎖）を協調させることで、多方向への方向転換、回旋パワー、全身の3次元空間認識能力の向上に役立つ可能性があります。"
      }
    },
    {
      "@type": "Question",
      "name": "3x3動的グリッド回避ドリルは、リアルタイムの回避反応時間をどれだけ短縮しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "静止した単純反応テストとは異なり、不規則に迫る動的グリッド障害物は頭頂葉（Parietal Lobe）の空間マップ更新速度を要求します。高プレッシャー環境における選択反応時間（Choice Reaction Time）を平均280msから190ms以下へと大幅に短縮させます。"
      }
    },
    {
      "@type": "Question",
      "name": "周辺視野スキャン訓練（有効視野UFOV）は、競技力向上と怪我予防にどう寄与しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "周辺脅威探知ドリルは有効視野（FFOV: Functional Field of View）を広げます。視野の外縁にある動的刺激は大細胞視覚路（Magnocellular Pathway）を通じて処理され、直接視線を向けなくても死角からの接近者を察知して回避運動を誘発し、接触による受傷リスクを軽減します。"
      }
    },
    {
      "@type": "Question",
      "name": "瞬発力・反射神経トレーニングの最適な練習頻度と1回の時間はどのくらいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1回あたり15〜25分、週3〜5回のセッションが最も推奨されます。高精度の操作は集中力を使うため、30分を超えると疲労が蓄積し、練習の効率が下がることがあります。"
      }
    },
    {
      "@type": "Question",
      "name": "ブラウザで動作するデジタルトレーニングは、実際のジムやフィールドでの練習を補完できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。デジタルドリルは筋力やプライオメトリクスによる跳躍力そのものを代替するものではありませんが、運動のトリガーとなる「知覚・認知フェーズ」を極限まで短縮します。視覚認知から運動指令の発信までのレイテンシを削ぎ落とすことで、フィールド上で肉体のポテンシャルを最大発揮させます。"
      }
    }
  ]
};

faqSchema.mainEntity.push(
  {
    "@type": "Question",
    "name": "フィジカルトレーニング一覧には何種類のドリルがありますか？",
    "acceptedAnswer": { "@type": "Answer", "text": "一覧には反応・回避、敏捷性、協調運動、バランスの4分野に分かれた11種類のブラウザドリルがあります。カードから各ドリルの説明と練習方法を開けます。" }
  },
  {
    "@type": "Question",
    "name": "ブラウザの反応トレーニングは実際の体力トレーニングの代わりになりますか？",
    "acceptedAnswer": { "@type": "Answer", "text": "いいえ。画面上のドリルは視覚的なタイミング、判断速度、操作の正確さ、動作の順序づけを練習するものです。筋力、瞬発力、柔軟性、競技練習の代わりではなく補助として使います。" }
  }
);

export default function PhysicalDrillsPage() {
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
      <PhysicalDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
