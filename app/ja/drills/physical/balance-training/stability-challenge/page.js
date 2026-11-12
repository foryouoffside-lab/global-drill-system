import StabilityChallengeClient from '@/app/drills/physical/balance-training/stability-challenge/StabilityChallengeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/physical/balance-training/stability-challenge';
const title = "マウス安定性テスト｜風に押される照準を中央に保つ | SkillDrills";
const description = "無料のマウス安定性テスト。ランダムに向きを変える風が照準を押し流すなか、45秒間マウスで逆方向に補正して中央のセーフリング内に保ちます。エイムの安定をブラウザですぐに練習できます。";

export const metadata = {
  title,
  description,
  keywords: ["マウス安定性テスト", "エイム 安定", "照準 安定 練習", "カーソル 安定", "マウス 安定 ゲーム"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/balance-training/stability-challenge') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ja_JP', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills ホーム', item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: 'フィジカルドリル', item: 'https://skilldrills.online/ja/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'マウス安定性テスト', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'マウス安定性テスト',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas とポインターロックに対応したブラウザ、マウス',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ja' },
  inLanguage: 'ja',
  dateModified: '2026-11-10',
};

const faqs = [
  {
    q: 'マウス安定性テストとは何ですか？',
    a: '画面中央にセーフリングがあり、風のような力が照準を外側へ押し続けます。マウスで逆方向に補正し、45秒間照準をリング内に保つカーソル安定性のドリルです。',
  },
  {
    q: 'スコアはどう加算されますか？',
    a: '照準がリング内にある間、0.15秒ごとにコンボが1つ増え、15点×コンボ倍率が加算されます。倍率はコンボ3で1.1倍から始まり、コンボ50で最大3.0倍になります。クリック操作はありません。',
  },
  {
    q: 'リングの外に押し出されるとどうなりますか？',
    a: 'コンボが0に戻り、赤いフラッシュが表示されます（画面内のボタンでオフにできます）。スコアや残り時間は減りません。リングに戻れば再びコンボを積み上げられます。',
  },
  {
    q: '難易度はどう上がりますか？',
    a: '250点ごと、そしてリング内で長く連続して留まったときにレベルが上がります。レベルに上限はありません。セーフリングの半径は45pxから最小16pxまで縮み、風の強さは250から始まって上がり続けます（レベル15で850）。',
  },
  {
    q: '健康状態や身体のバランスを測るテストですか？',
    a: 'いいえ。マウスカーソルを操作するゲームであり、身体のバランスや健康状態を測定・診断するものではありません。体の症状が気になる場合は医療機関に相談してください。',
  },
  {
    q: 'ランクはどう決まりますか？',
    a: '最終スコアをSkillDrillsの基準スコア17,000点と比較して判定します。目安は9,563点以上でA、12,283点以上でS、15,342点以上でS+です。ユーザー統計やパーセンタイルではなく練習用の区分です。',
  },
  {
    q: 'FPSのリコイル制御は上達しますか？',
    a: '保証はできません。押し流される照準を小さく補正し続ける練習ですが、ゲームの反動パターンや感度とは異なるため、上達につながると断定はできません。',
  },
  {
    q: 'スマホでも遊べますか？',
    a: 'マウスとポインターロックが必要なため、タッチ専用端末では開始できません。プレイ中にEscキーを押すとドリルが終了し、スタート画面に戻ります。',
  },
  {
    q: '記録はどこに保存されますか？',
    a: 'ベストスコア、最大コンボ、最高レベルはブラウザのローカルストレージにのみ保存されます。無料で、登録は不要です。',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'マウス安定性テストのやり方',
  description: '風に逆らって照準をセーフリング内に保つ4ステップです。',
  step: [
    { '@type': 'HowToStep', position: 1, name: '開始', text: 'スタートを押すと3秒のカウントダウンの後、ポインターロックが有効になります。' },
    { '@type': 'HowToStep', position: 2, name: '押される方向を読む', text: '照準が流される方向を見て、反対側へマウスを小さく動かします。' },
    { '@type': 'HowToStep', position: 3, name: 'リング内に留まる', text: 'リング内に長く留まるほどコンボと倍率が上がります。' },
    { '@type': 'HowToStep', position: 4, name: '縮むリングに対応', text: 'レベルが上がるとリングが小さく風が強くなるため、より早く、より小さく補正します。' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guide = {
  heading: 'マウス安定性テストのガイド',
  intro: [
    'マウス安定性テストは、ランダムに向きを変える風が照準を画面中央から押し流すなか、マウスで逆方向に補正して照準をセーフリング内に保つブラウザドリルです。1回のプレイは45秒固定です。',
    '素早い照準動作は、大きく動いた後に視覚フィードバックで小さく修正する過程として説明されます（Woodworth, 1899）。このドリルはその小さな修正を途切れなく繰り返させ、リングが小さくなるほど同じ修正にも高い精度が求められます（Fitts, 1954）。',
    'エイムの安定を練習するゲームであり、身体のバランスや健康状態を測るものではありません。スコアは同じマウス・感度・モニターで自分の記録同士を比べてください。リフレッシュレートやポーリングレートも入力遅延に影響します（Woods et al., 2015）。',
  ],
  benchmarks: {
    title: 'SkillDrills 練習ランク区分',
    headers: ['ランク', 'スコア', '表示ラベル'],
    rows: [
      ['S+', '15,342点以上', 'LEGENDARY'],
      ['S', '12,283 – 15,341点', 'Elite'],
      ['A', '9,563 – 12,282点', 'Excellent'],
      ['B', '6,120 – 9,562点', 'Great'],
      ['C', '3,443 – 6,119点', 'Good'],
      ['D', '1,530 – 3,442点', 'Keep Going'],
      ['F', '1,530点未満', 'Needs Practice'],
    ],
    note: 'ランクは最終スコアを基準スコア17,000点と比較して算出するSkillDrillsの練習区分です。ユーザー統計、パーセンタイル、医学的な基準ではありません。',
  },
  techniques: {
    title: 'リング内に長く留まる4つのコツ',
    items: [
      { name: '中央から始める', desc: 'カウントダウン中、照準は中央に置かれます。開始直後に大きく動かさず、まず流される方向を確認しましょう。', tips: '最初の数秒はスコアより方向の読み取りに集中します。' },
      { name: '小さく、早めに補正', desc: 'リングの端に触れてから大きく引き戻すと、反対側へ行き過ぎがちです。流され始めた瞬間に小さく補正しましょう。', tips: 'リング中心と照準の間隔を見ながら動かします。' },
      { name: '風向きの変化に備える', desc: '風の向きはランダムに変わり、新しい方向へ徐々に移ります。補正が急に大きくならないよう手の力を抜きましょう。', tips: '腕や手首に力が入ると照準が揺れやすくなります。' },
      { name: 'コンボを守る', desc: '倍率はコンボ50で最大3.0倍です。一度はみ出すとコンボが0になるため、無理な大補正より安定した維持がスコアにつながります。', tips: 'はみ出した回数は結果画面のBlowoutsに表示されます。' },
    ],
  },
  steps: [
    'いつものマウスと感度でスタートを押します。',
    '照準が流される方向の反対へマウスを小さく動かします。',
    'セーフリング内に留まり、コンボと倍率を積み上げます。',
    '45秒が終わったら、ランク、安定率（%）、はみ出し回数、最高レベルを確認します。',
  ],
  audience: '照準をぶらさずに保つ練習をしたいゲーマーや、カーソルの安定性を気軽に試したい人。',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'woods2015'),
};

export default function StabilityChallengeJaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <StabilityChallengeClient
        copy={{
          title: 'マウス安定性テスト',
          hudLabels: {
            score: 'スコア',
            time: '残り時間',
            getReady: '準備してください',
            points: 'ポイント',
            stability: '安定率',
            blowouts: 'はみ出し',
            maxStreak: '最大コンボ',
            peakLevel: '最高レベル',
            playAgain: 'もう一度',
          },
          rulesTitle: 'ルールとスコア計算',
          rulesItems: [
            { title: '中央のセーフリングを保つ', text: 'ランダムに向きを変える風が照準を押し流します。マウスで逆方向に補正し、リング内に留まりましょう。' },
            { title: 'コンボ倍率（最大3.0倍）', text: 'リング内にいる間、0.15秒ごとにコンボが増え、15点×倍率を獲得します。コンボ50で3.0倍です。' },
            { title: 'レベル上昇', text: '250点ごと、そして長い連続維持でレベルが上がります。リングは最小16pxまで縮み、風は強くなり続けます。' },
            { title: 'はみ出し', text: 'リングの外に押し出されるとコンボが0になります。スコアと時間は減りません。' },
          ],
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
