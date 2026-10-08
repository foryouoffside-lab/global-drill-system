import DrillsDirectoryClient from '@/app/drills/DrillsDirectoryClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { buildDirectoryMetadata, getDirectoryCollectionFields } from '@/lib/i18n/siteLandingSeoNative';

const legacyMetadata = {
  title: '無料エイム練習＆脳トレ81種・全ドリル一覧 | SkillDrills',
  description: '8大カテゴリー全81種の無料オンライン科学的トレーニングドリル一覧。VALORANT・Apex向けエイム練習、反射神経測定、動体視力、記憶力、認知機能向上テストをブラウザで即座に開始。',
  keywords: [
    '無料エイム練習サイト', 'エイム練習ゲーム', '反射神経テスト',
    '動体視力トレーニング', '脳トレゲーム無料', '記憶力テスト',
    '周辺視野トレーニング', 'cps測定', 'フリックエイム練習',
    '追いエイム練習', 'ストループテスト', 'シュルテテーブル',
    '深視力検査', 'ワーキングメモリテスト', 'スポーツビジョントレーニング'
  ],
  openGraph: {
    title: '無料エイム練習＆脳トレ81種・全ドリル一覧 | SkillDrills',
    description: '8大カテゴリー全81種の無料オンライン科学的トレーニングドリル一覧。VALORANT・Apex向けエイム練習、反射神経測定、動体視力、記憶力、認知機能向上テストをブラウザで即座に開始。',
    type: 'website',
    url: 'https://skilldrills.online/ja/drills',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    images: [{
      url: 'https://skilldrills.online/icons/icon-512x512.png',
      width: 512,
      height: 512,
      alt: 'SkillDrills 全トレーニングドリル一覧',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '無料エイム練習＆脳トレ81種・全ドリル一覧 | SkillDrills',
    description: '8大分野81種の無料エイムトレーナー、反射神経、認知機能トレーニング。',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills',
    languages: getAlternateLanguages('/ja/drills'),
  },
};

export const metadata = {
  ...legacyMetadata,
  ...buildDirectoryMetadata('ja', 'https://skilldrills.online/ja/drills', DRILLS.length, getAlternateLanguages('/ja/drills')),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills トップ", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "全トレーニングドリル一覧", "item": "https://skilldrills.online/ja/drills" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "全エイム練習＆認知・身体トレーニングドリル一覧 (81種)",
  "url": "https://skilldrills.online/ja/drills",
  "description": "8大カテゴリー全81種の科学的インタラクティブ訓練ドリル集。エイムトレーナー、反応速度、動体視力追従、認知制御、記憶力検査。",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": DRILLS.map((drill) => {
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "SkillDrillsの81種のトレーニングドリルはどのような科学的根拠で設計されていますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SkillDrillsの各ドリルは、フィッツの法則、メンタルクロノメトリー（反応時間研究）、バドリーのワーキングメモリモデルなど、公開されている研究の考え方を参考に作られています。参照した文献は各ドリルページの出典欄に載せています。ブラウザ上の練習課題であり、医療検査や効果の保証ではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "外部アプリやプラグインのインストールなしで、なぜミリ秒単位の高精度測定ができるのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ドリルの多くは、ブラウザ標準の performance.now() タイマーでミリ秒単位の時間を記録し、計測は端末上で行います。ただし表示のリフレッシュレート、マウスのポーリングレート、ブラウザの負荷によって数ミリ秒から十数ミリ秒の誤差が出ます。他人との比較より、同じ環境での自己記録の推移を見てください。"
      }
    },
    {
      "@type": "Question",
      "name": "FPS（VALORANT、Apex Legends、CS2）の上達に最も推奨されるウォームアップ手順は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "実践前におすすめする15分間のウォームアップルーティンは次の4段階です：1）単純反応速度テスト（5回）で中枢神経系を覚醒、2）フリックショット練習でマウスパッドの摩擦制動力を補正、3）スムーズパシュート（滑動性眼球運動）で動く敵への吸い付きを安定化、4）ターゲットスイッチングで複数標的の優先順位付けと視線移動を整えてからランクマッチに挑むことです。"
      }
    },
    {
      "@type": "Question",
      "name": "脳トレ・記憶力ドリルは、仕事や学習など実生活の認知機能向上に役立ちますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "日常生活での効果は保証できません。N-Backやストループ課題、注意分割ドリルは、作業記憶や抑制、課題切り替えを使う練習になりますが、練習した課題が上達することと、仕事や学習の成績が上がることは別の問題です。結果は課題の慣れも含むため、目安として使い、医療や診断には利用しないでください。"
      }
    },
    {
      "@type": "Question",
      "name": "モニターのリフレッシュレート（Hz）やマウス感度設定はスコアに影響しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "非常に大きく影響します。一般的な60Hzモニターは1フレームあたり約16.7msの表示遅延が発生しますが、144Hz（6.9ms）や240Hz（4.2ms）のゲーミングモニターは視覚フィードバックを素早く網膜に届けるため、微細な減速補正が正確に行えます。また、サイト内のグローバル感度スライダーを用いることで、普段プレイしているゲームの物理的振り向き距離（cm/360°）と完全に一致させることが可能です。"
      }
    },
    {
      "@type": "Question",
      "name": "1日の理想的な練習時間やセッション頻度はどのくらいが効果的ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "神経可塑性（脳と神経系の適応能力）を最大限に引き出すためには、疲労するまで長時間プレイするよりも、1回15〜25分の高い集中力を維持した短期分散トレーニングが最も有効です。末梢の筋肉や視神経に過度の疲労が溜まると運動学習効率が低下するため、セッション間に1〜2分の休憩を挟むことを推奨します。"
      }
    },
    {
      "@type": "Question",
      "name": "測定スコアや個人データが外部のサーバーに送信・収集されることはありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ウェブ版ではアカウント登録やログインは不要で、ハイスコアやマウス感度などの設定はお使いのブラウザ内（localStorage）に保存されます。サイト全体の表示や性能を把握するための匿名のアクセス計測は行っています。詳しくはプライバシーポリシーをご覧ください。"
      }
    },
    {
      "@type": "Question",
      "name": "スマートフォンやタブレットなどのモバイル端末でもプレイ可能ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "反応速度テスト、記憶力ゲーム、認知機能判定など、タッチ操作に適したドリルはスマートフォンやタブレットでも快適にプレイ可能です。ただし、マウスのポインター固定（Pointer Lock API）や精密なエイム操作を必要とするFPSエイムドリルや微細運動制御ドリルは、パソコン（デスクトップ/ノートPC）でのプレイが推奨されます。"
      }
    }
  ]
};

Object.assign(collectionSchema, getDirectoryCollectionFields('ja', DRILLS.length));

export default function LocalizedDrillsDirectoryPage() {
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
      <DrillsDirectoryClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
