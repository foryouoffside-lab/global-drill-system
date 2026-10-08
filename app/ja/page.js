import HomePageClient from '../HomePageClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildHomeMetadata, buildHomeSchema } from '@/lib/i18n/siteLandingSeoNative';

const legacyMetadata = {
  title: '無料エイム練習＆反射神経・脳トレトレーナー',
  description: '登録不要・ブラウザで今すぐプレイ可能な80以上の無料トレーニングドリル。VALORANTやCS2向けのエイム練習、反射神経テスト、CPSテスト。',
  keywords: [
    'エイム練習', '無料 エイムトレーナー', '反射神経テスト', 'CPSテスト', '脳トレ 無料 ゲーム', 'VALORANT エイム練習', 'Apex エイム練習'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/ja',
    languages: getAlternateLanguages('/ja'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'SkillDrills - 無料エイム練習＆反射神経・脳トレオンライントレーナー',
    description: '登録不要・ブラウザで今すぐプレイ可能な80以上の無料エイム＆反射神経トレーニングドリル。',
    url: 'https://skilldrills.online/ja',
    locale: 'ja_JP',
    type: 'website',
  },
};

export const metadata = {
  ...legacyMetadata,
  ...buildHomeMetadata('ja', 'https://skilldrills.online/ja', DRILLS.length, getAlternateLanguages('/ja')),
};

const homeSchema = buildHomeSchema('ja', 'https://skilldrills.online/ja', DRILLS.length);

export default function JapaneseHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
    <HomePageClient
      copy={{
        srH2: 'SkillDrills - 無料の脳トレ＆エイムトレーナープラットフォーム',
        srBody: 'SkillDrillsは81種類のインタラクティブなドリルを8カテゴリーで無料提供するオンライントレーニングプラットフォームです。FPSエイム練習、脳トレ、視覚トラッキング、記憶力ゲーム、モータースキル、反射神経トレーニング、視覚認知、反応速度テストが揃っています。登録不要、100%ブラウザで完結。',
        heroH1: '思考も操作も鍛える',
        heroSub: '精密なエイムコントロール、ターゲット捕捉速度、ワーキングメモリを鍛えよう。81種類の無料ドリルを8つのトレーニング領域で、ブラウザだけで今すぐ。登録不要・完全無料。',
        heroExploreCta: '全81ドリルを見る',
        fpsHubCta: 'エイムトレーナー',
        statFreeDrills: '無料ドリル',
        statDomains: '領域数',
        statServerDelay: 'サーバー遅延',
        hudEngineTelemetry: 'サンプル表示',
        hudReady: '準備完了',
        hudAvgLatency: '平均レイテンシ',
        hudPrecision: '精度',
        hudFrameSync: 'フレーム同期',
        hudCalibration: 'サンプル校正画面',
        hudSubPixel: 'サブピクセルエンジン',
        methodologyBadge: '認知・運動パラダイム',
        methodologyH2: '認知科学とeスポーツ理論に基づく設計',
        methodologyBody: '全てのドリルは検証済みの心理測定テストと競技eスポーツで求められる運動能力をもとに設計されており、神経の刺激反応経路と手と目の協調運動をそれぞれ独立して鍛えます。',
        pillDigitSpan: '数唱課題',
        pillDigitSpanSub: 'ワーキングメモリ',
        pillNBack: 'Nバック課題',
        pillNBackSub: '実行機能',
        pillChoiceRT: '選択反応',
        pillChoiceRTSub: 'レイテンシ較正',
        pillSmoothPursuit: '追従性眼球運動',
        pillSmoothPursuitSub: '眼球運動トラッキング',
        adaptationCurve: '一般的な習熟曲線：14日間でレイテンシが15〜22%改善',
        empiricalNote: '（実測データに基づくモデル）',
        profileH2: 'あなたのトレーニングプロフィール',
        profileSub: '完了したドリルから集計したブラウザ内のローカル進捗',
        profileSessions: 'セッション数',
        profileDrills: 'ドリル数',
        profileLvlPrefix: 'Lv',
        profileAvgLevel: '平均レベル',
        profileRating: '評価スコア',
        categoriesH2: 'トレーニングカテゴリー',
        categoriesSub: '鍛えたいスキルを選んでキャリブレーションを始めよう。',
        desktopOnly: 'PC専用',
        drillsSuffix: 'ドリル',
        popular: '人気',
        exploreCategory: 'カテゴリーを見る',
        categories: {
          fps: { name: 'FPSトレーニング', description: 'エイムトレーナー、フリックショット、トラッキング、競技ゲーミング向け反射神経ドリル' },
          cognitive: { name: '認知トレーニング', description: '記憶力、注意力、集中力、問題解決力を鍛えるドリル' },
          memory: { name: '記憶力', description: 'ワーキングメモリ、空間記憶、長期記憶の強化' },
          motor: { name: 'モータースキル', description: '手と目の協調運動、精密操作、タイミング精度' },
          physical: { name: '身体反応', description: 'バランス、方向反射、協調運動のトレーニング' },
          visual: { name: '視覚認知', description: '周辺視野、サッカード認識、瞬間視の検出' },
          'visual-tracking': { name: '視覚追従・トラッキング', description: '追従性眼球運動、連続的な軌道トラッキング、軌道予測' },
          'reaction-speed': { name: '反射神経', description: '単純反応・選択反応のレイテンシ較正と反射応答' },
        },
        featuresH2: 'エンジン診断＆機能',
        featuresSub: '高リフレッシュレートと即応性を重視し、あらゆる最新ブラウザで動作するよう設計。',
        features: [
          { title: 'セッション中の計測値', description: 'プレイ中にレイテンシ・精度・正確性の数値が更新されます。測定値はディスプレイと入力機器の限界を受けます' },
          { title: 'ローカル進捗曲線', description: 'スコアと進捗をブラウザ内でプライベートに記録' },
          { title: 'アダプティブ難易度', description: '連続成功に応じて難易度が上がり、上達しても歯ごたえのある練習を保ちます' },
          { title: '確立されたパラダイム', description: '確立された認知心理学の課題とeスポーツの練習方法をもとに作成。臨床検査ではありません' },
          { title: '的を絞ったスキル強化', description: '8つの専門カテゴリーで特定の弱点をピンポイントに鍛える' },
          { title: '手間ゼロ', description: '完全無料でブラウザだけで動作、登録もクレジットカードも不要' },
        ],
        audienceH2: '対象ユーザー',
        audienceSub: 'エイムを極めたい人も、思考力を伸ばしたい人にも合わせたトレーニング。',
        audience: [
          { title: '競技ゲーマー', description: 'VALORANT、CS2、Overwatch、Apex Legendsに向けてフリック精度、ターゲットトラッキング、反応速度を磨く。' },
          { title: '認知パフォーマー', description: 'ワーキングメモリを広げ、注意持続力を高め、情報処理速度を上げる。' },
          { title: '日課トレーニング派', description: '5分の短時間セッションで、手軽なウォームアップと日々のコンディション調整を。' },
        ],
        ctaH2: '今すぐトレーニング開始',
        ctaSub: '登録不要、支払い不要。81種類のブラウザ完結型ドリルがすぐに使える。',
        ctaExploreCta: '全81ドリルを見る',
        reactionTest: {
          headlineIdle: 'クリックで開始',
          headlineWaiting: '緑になるまで待て',
          headlineGo: 'クリック！',
          headlineEarly: '早すぎ',
          sublineIdle: '赤の間は待機 — 緑に変わった瞬間にクリック',
          sublineWaiting: 'じっと待つ…',
          sublineGo: '今だ！',
          sublineEarly: '緑になる前にクリックしてしまいました',
          labelElite: '非常に速い',
          labelFast: '速い',
          labelAverage: '平均的',
          labelSlow: '遅い',
          labelWarmUp: 'ウォームアップ',
          hudTitle: 'レイテンシテレメトリ',
          hudBadge: 'ライブモジュール',
          ariaClickNow: '今すぐクリック',
          ariaWait: '円が緑になるまで待ってください',
          ariaStart: '反応テストを開始',
          statLast: '直近',
          statBest: 'ベスト',
          statAttempts: '試行回数',
          resetBtn: 'リセット',
          liveReaction: '反応時間 {ms} ミリ秒',
        },
      }}
    />
    </>
  );
}
