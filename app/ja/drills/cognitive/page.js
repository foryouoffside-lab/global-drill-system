import CognitiveHubClient from '@/app/drills/cognitive/CognitiveHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const cognitiveDrills = DRILLS.filter((d) => d.category === 'cognitive');

export const metadata = {
  title: '脳トレ無料ゲーム・集中力テスト | SkillDrills',
  description: '脳トレ無料ゲーム8種。選択的注意、分割注意、集中の持続、選択反応、処理速度を練習できます。ストループ、シュルテテーブル、速読をブラウザですぐ体験。',
  keywords: [
    '脳トレ', '脳トレ 無料', '集中力 テスト', '認知機能 トレーニング',
    '脳トレ 無料ゲーム', '集中力テスト 無料', '処理速度 テスト', 'ストループテスト',
    'シュルテテーブル', '注意力 トレーニング', 'ワーキングメモリ トレーニング',
    '脳トレ ゲーム', '無料 脳トレ', '分割注意 トレーニング', '視覚探索 テスト'
  ],
  openGraph: {
    title: '脳トレ無料ゲーム・集中力テスト | SkillDrills',
    description: '脳トレ無料ゲーム8種。選択的注意、分割注意、集中の持続、選択反応、処理速度を練習できます。ストループ、シュルテテーブル、速読をブラウザですぐ体験。',
    type: 'website',
    url: 'https://skilldrills.online/ja/drills/cognitive',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: '無料オンライン脳トレ・認知機能トレーニング一覧' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '脳トレ無料ゲーム・集中力テスト | SkillDrills',
    description: '集中力、注意の切り替え、処理速度を練習する脳トレ無料ゲーム8種をブラウザで体験できます。',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/cognitive',
    languages: getAlternateLanguages('/ja/drills/cognitive'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "全ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "脳トレ・認知機能トレーニング", "item": "https://skilldrills.online/ja/drills/cognitive" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-12",
  "name": "無料オンライン脳トレ & 認知機能トレーニングドリル一覧 (8 Drills)",
  "url": "https://skilldrills.online/ja/drills/cognitive",
  "description": "集中力持続、注意分割、情報処理速度、ストループ抑制制御、シュルテテーブルなど8種類の認知トレーニングドリルを無料で提供。",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": cognitiveDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'ja', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/ja${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "認知機能トレーニング（脳トレ）とは何ですか？脳にどのような生理学的変化をもたらしますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "認知機能トレーニングは、大脳の前頭前野（Prefrontal Cortex）が司る高次実行機能（実行制御）を集中的に鍛える神経科学的エクササイズです。単なる知識の記憶ではなく、選択的注意、ワーキングメモリ、認知柔軟性（タスク切り替え）、情報処理速度を負荷をかけて刺激します。適切な認知的負荷をかけた練習を繰り返すことで、同じ種類の課題の処理に慣れていきます。"
      }
    },
    {
      "@type": "Question",
      "name": "脳トレゲームによって情報処理速度（Processing Speed）は実際に速くなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "同じ種類の課題を繰り返すと、その課題での判断や入力が速くなることはよくありますが、神経伝達そのものが速くなるという保証はありません。これらのドリルは目標を探してルール通りに入力する練習で、同じ端末で繰り返した記録を比べてご自身の変化を確かめる目的で使えます。"
      }
    },
    {
      "@type": "Question",
      "name": "持続的集中力（Sustained Attention）と注意分割能力（Divided Attention）の違いは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "持続的集中力（警戒持続力）は、青斑核ノルアドレナリン系と前頭前野が外部の誘惑や雑念を遮断し、単一の対象に対して長時間の没頭状態を維持する能力です。一方、注意分割能力（デュアルタスク処理）は、背側および腹側注意ネットワークを駆使して、同時に提示される2つ以上の独立した情報源に注意資源を最適配分したり、瞬時に注意を切り替えるマルチタスク制御能力を指します。"
      }
    },
    {
      "@type": "Question",
      "name": "ストループ効果（Stroop Effect）とは何ですか？認知抑制制御能力はどのように測定されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ストループ効果とは、無意識に自動化された処理（文字の読み取り）と、意識的な実行制御（文字色の識別）が競合した際に発生する認知的干渉現象です。例えば、赤色のインクで「あお」と書かれている場合、前帯状皮質（ACC）が葛藤を感知し、背外側前頭前野（DLPFC）が文字を読もうとする反射的衝動を抑制しなければなりません。古典的なストループ検査では、一致条件と不一致条件の反応時間の差（干渉）でこれを見ます。SkillDrillsのストループドリルは文字色を選ぶ練習で、干渉スコアではなくスコア、正確さ、到達レベルを記録します。"
      }
    },
    {
      "@type": "Question",
      "name": "シュルテテーブル（Schulte Table）訓練は周辺視野や視覚探索速度にどのような効果がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "シュルテテーブルは、ランダムに並んだ数字を1から順番に探すマス目課題で、5×5の表がよく知られています。SkillDrills版は3×3から始まり、表をすべて見つけるたびにマス目が大きくなります。中央に視線を置き周辺視野で次の数字を探す練習になりますが、周辺視野や眼球運動が一定の割合で改善するという根拠はないため、ご自身の完了タイムの変化を目安にしてください。"
      }
    },
    {
      "@type": "Question",
      "name": "脳トレゲームのトレーニング効果は、eスポーツや日常の仕事・学習能力に転移（Transfer）しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "訓練した課題と似た課題での成績向上（近位転移）は研究で報告されていますが、eスポーツや日常業務への転移は確立しておらず、効果には個人差があります。視覚探索や選択的注意、干渉抑制を繰り返す練習は、ミニマップの確認や敵の優先順位付けに似た動きの補助練習として役立つ可能性があります。"
      }
    },
    {
      "@type": "Question",
      "name": "脳トレ・認知機能トレーニングは1日に何分程度行うのが最も効果的ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "決まった最適時間はありません。集中が続く10〜15分ほどの短いセッションを週に数回行うと、記録を比べやすくなります。疲れて正確さが落ちてきたら休憩してください。"
      }
    },
    {
      "@type": "Question",
      "name": "脳トレドリルはどのように活用すればよいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "情報処理速度やワーキングメモリを使う短い練習として、同じ端末でご自身の記録の変化を確かめる目的でご利用ください。"
      }
    }
  ]
};

export default function LocalizedCognitiveHubClientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CognitiveHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
