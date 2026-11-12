import DistanceJudgmentClient from '@/app/drills/visual/depth-perception/distance-judgment/DistanceJudgmentClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual/depth-perception/distance-judgment';
const title = "深視力トレーニング｜深視力検査の練習 無料 | SkillDrills";
const description = "無料の深視力トレーニング。奥から近づく球が基準リングと重なる瞬間にクリックし、奥行きと到達タイミングの判断をブラウザで練習します。深視力検査（三桿法）の装置とは別物で、医療検査ではありません。";

export const metadata = {
  title,
  description,
  keywords: ["深視力トレーニング", "深視力", "深視力検査 練習", "深視力 練習", "奥行き知覚", "遠近感", "到達タイミング"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual/depth-perception/distance-judgment') },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ja_JP', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: 'ドリル一覧', item: 'https://skilldrills.online/ja/drills' },
    { '@type': 'ListItem', position: 3, name: '視覚トレーニング', item: 'https://skilldrills.online/ja/drills/visual' },
    { '@type': 'ListItem', position: 4, name: '深視力トレーニング', item: url },
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '深視力トレーニング',
  applicationCategory: 'GameApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description,
  featureList: [
    '奥から近づく球と基準リングの重なりを判定',
    '誤差7%以内で150点、16%以内で100点（レベルが上がると4%・10%まで狭まる）',
    '750点ごとにレベルアップし、接近速度が上がる',
    'スコアはブラウザ内にのみ保存',
  ],
  url,
  inLanguage: 'ja',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '深視力トレーニング',
  url,
  description,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvasに対応した最新のWebブラウザ',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  isAccessibleForFree: true,
  inLanguage: 'ja',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: '深視力トレーニング',
  url,
  description,
  gamePlatform: 'Web Browser',
  genre: ['Visual Training', 'Timing'],
  playMode: 'SinglePlayer',
  applicationCategory: 'Game',
  inLanguage: 'ja',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '深視力トレーニングのやり方',
  description: '近づく球が基準リングと重なる瞬間を合わせる4ステップの練習方法です。',
  step: [
    { '@type': 'HowToStep', position: 1, name: '基準リングを確認', text: '画面中央の点線の基準リングの大きさを確認します。リングの大きさは毎回変わります。' },
    { '@type': 'HowToStep', position: 2, name: '近づく球を見る', text: 'トンネルの奥から近づいてくる球が大きくなる速さを見ます。' },
    { '@type': 'HowToStep', position: 3, name: '重なった瞬間にクリック', text: '球の外周が基準リングと重なった瞬間に、画面をクリックまたはタップします。' },
    { '@type': 'HowToStep', position: 4, name: '誤差を確認', text: 'レベルが上がると球が速くなり、判定も厳しくなります。早押しを減らすことを意識します。' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    q: '深視力トレーニングでは何をしますか？',
    a: 'トンネルの奥から近づいてくる球の外周が、画面中央の基準リングと重なった瞬間にクリックまたはタップします。球が大きくなる速さから到達のタイミングを判断する練習で、クリック時点の誤差が点数になります。ブラウザで無料・登録不要で使えます。',
  },
  {
    q: '深視力検査（三桿法）とはどんな検査ですか？',
    a: '3本の棒のうち中央の1本が前後に動き、3本が横一列に並んだと感じた瞬間にボタンを押す検査です。約2.5m離れて行い、3回の平均誤差が2cm以内かどうかで判定されます。大型・中型・準中型・けん引・第二種免許の取得や更新で行われます。',
  },
  {
    q: 'このトレーニングは深視力検査の練習になりますか？',
    a: '方式が違うため、検査の代わりや合否の予測にはなりません。三桿法は実物の棒を両目で見る装置ですが、このトレーニングは平面の画面で1つの球の大きさの変化を見てタイミングを合わせます。「重なる瞬間まで待って押す」感覚を手軽に練習するためのものとして使ってください。',
  },
  {
    q: '点数はどう計算されますか？',
    a: '球と基準リングの誤差が7%以内なら150点、16%以内なら100点です。レベルが上がるとこの範囲はそれぞれ4%、10%まで狭まります。750点ごとにレベルが上がり、球の接近速度も上がります。外れても減点はなく、次の球が出ます。1回は45秒です。',
  },
  {
    q: '立体視の検査ですか？',
    a: 'いいえ。平面のモニターでは左右の目の像のズレ（両眼視差）が生じないため、立体視は測れません。このトレーニングは球の大きさの変化（オプティカルルーミング）から到達の瞬間を判断する練習です。目の状態が気になる場合は眼科で相談してください。',
  },
  {
    q: 'オプティカルルーミングとは何ですか？',
    a: '近づいてくる物の網膜像が大きくなっていく変化のことです。この拡大の速さから、物の大きさや速度を知らなくても到達までの時間を見積もれるとする研究があります（Lee, 1976; Regan & Beverley, 1978）。このトレーニングはその状況を単純化したものです。',
  },
  {
    q: 'つい早押ししてしまうのはなぜですか？',
    a: '球が速くなると「間に合わない」と感じて、重なる前に押しやすくなります。今の速度で誤差が安定するまで、外周がリングに届く瞬間を待つ練習をしてみてください。',
  },
  {
    q: 'モニターの性能は結果に影響しますか？',
    a: '影響することがあります。60Hzのモニターでは1フレームが約16.7msで、速い接近では球の大きさの変化が粗く見えます。入力遅延もクリックのタイミングに影響します（Woods et al., 2015）。記録は同じ環境で比べてください。',
  },
  {
    q: '無料で使えますか？記録はどこに保存されますか？',
    a: '無料で、会員登録やインストールは不要です。スコアと最高レベルはブラウザのローカルストレージに保存され、このドリルからサーバーへは送信しません。',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const distanceGuideJa = {
  heading: '深視力トレーニングのガイド',
  intro: [
    'この深視力トレーニングは、トンネルの奥から近づく球が基準リングと重なる瞬間にクリックするブラウザ練習です。球が大きくなる速さを見て到達のタイミングを判断し、早押しせずに待つ感覚を練習します。',
    '運転免許の深視力検査（三桿法）は3本の棒を両目で見る装置で行います（Howard, 1919の装置が原型）。このトレーニングはその装置ではなく、平面の画面での奥行き・タイミング判断の練習です。検査の合否を予測したり保証したりするものではありません。',
    '1回は45秒です。誤差7%以内で150点、16%以内で100点、750点ごとにレベルが上がり、球が速くなって判定も厳しくなります（最終的に4%・10%）。外れても減点はありません。',
    'モニターのリフレッシュレートや入力遅延もクリックのタイミングに影響するため（Woods et al., 2015）、記録は同じ環境で比べてください。',
  ],
  benchmarks: {
    title: '練習の目安（SkillDrillsの練習段階）',
    headers: ['段階', '誤差の目安', '練習ポイント'],
    rows: [
      ['1', '25%超', '重なる前に押す癖を減らす'],
      ['2', '16 – 25%', 'リングの縁を基準に待つ'],
      ['3', '7 – 16%', '一定のリズムで押す'],
      ['4', '4 – 7%', '速い球でもタイミングを保つ'],
      ['5', '4%未満', '同じ精度を何回も続ける'],
    ],
    note: 'この表はSkillDrillsの練習段階の目安です。深視力検査の基準、利用者の統計、パーセンタイルではありません。',
  },
  techniques: {
    title: '深視力トレーニングのコツ4つ',
    items: [
      { name: 'リングの縁に視線を置く', desc: '近づく球を目で追うより、基準リングの縁に視線を置いて球の外周が届く瞬間を待つ方が合わせやすい人が多いです。', tips: 'やりやすい方法は人によって違うので、両方試して比べてください。' },
      { name: '拡大の速さを見る', desc: '球は近づくほど急に大きく見えます。外周の広がり方に注目して、重なる瞬間をつかみます。', tips: '球の色や模様ではなく外周を見ます。' },
      { name: '早押ししない', desc: '速くなると焦って早く押しがちです。完全に重なるまで待つ練習をします。', tips: '誤差が増えたら、その速度で安定するまで続けます。' },
      { name: '目を休める', desc: '画面を見続けるとまばたきが減り目が乾きます。', tips: 'セットの合間に遠くを見て、目が疲れたら中断してください。' },
    ],
  },
  steps: [
    'スタートボタンを押して45秒のセッションを始めます。',
    '画面中央の基準リングの大きさを確認します。',
    '奥から近づく球が大きくなる速さを見ます。',
    '球の外周がリングと重なった瞬間にクリックまたはタップします。',
    '結果を確認し、速くなる球に合わせて練習を続けます。',
  ],
  audience: '近づく物のタイミングを合わせる練習をしたい人、深視力という言葉に興味がある人、球技やゲームでタイミング判断を練習したい人。',
  faqs,
  sources: pickSources('howard1919', 'lee1976', 'regan1978', 'julesz1971', 'woods2015'),
  related: [
    { href: '/ja/drills/visual/tracking-accuracy/moving-target', label: '移動ターゲット追従訓練' },
    { href: '/ja/drills/visual/reaction-speed/light-reaction', label: '光反応スピードテスト' },
    { href: '/ja/drills/visual/tracking-accuracy/multiple-targets', label: 'マルチオブジェクト動体視力' },
    { href: '/ja/drills/visual/tracking-accuracy/pursuit-tracker', label: '滑動性眼球運動トラッカー' },
    { href: '/ja/drills/visual/reaction-speed/go/no-go', label: 'Go / No-Go 衝動制御テスト' },
    { href: '/ja/drills/visual/visual-recognition/entropic-grid', label: 'エントロピック視覚探索テスト' },
  ],
};

const copyJa = {
  title: '深視力トレーニング',
  subtitle: '深視力検査の練習（ブラウザ版）',
  caption: '無料の深視力トレーニングです。奥から近づく球が基準リングと重なる瞬間にクリックし、球が大きくなる速さから到達のタイミングを判断します（Lee, 1976; Regan & Beverley, 1978）。三桿法の装置とは別物で、医療検査ではありません。',
  statScore: 'スコア',
  statTime: '残り時間',
  statLevel: 'レベル',
  statBestScore: 'ハイスコア',
  startTitle: '深視力トレーニング',
  startSubtitle: '近づく球とリングが重なる瞬間を合わせる',
  startBtn: 'スタート',
  getReady: '準備してください',
  newBest: '自己ベスト更新',
  statPoints: 'ポイント',
  statAccuracy: '精度',
  statPeakLevel: '到達レベル',
  statIntercepts: '成功数',
  playAgain: 'もう一度プレイ',
  shareScore: '結果を共有',
  returnOptions: '終了',
  shareDrillName: '深視力トレーニング',
  rulesTitle: 'ルールと採点',
  rule1Text: 'ぴったり一致',
  rule1Highlight: '+150 PTS',
  rule1Result: '誤差7%以内（高レベルで4%）',
  rule2Text: 'ほぼ一致',
  rule2Highlight: '+100 PTS',
  rule2Result: '誤差16%以内（高レベルで10%）',
  rule3Text: 'レベルアップ',
  rule3Highlight: '750点ごと',
  rule3Result: '球の接近速度が上がる',
  rule4Text: '外れ',
  rule4Highlight: '減点なし',
  rule4Result: '得点なしで次の球へ',
  aboutTitle: '深視力トレーニングについて',
  overviewTitle: 'このトレーニングで練習すること',
  overviewLead: '近づく球が大きくなる速さを見て、基準リングと重なる瞬間にクリックする練習です。',
  overviewBody: '運転免許の深視力検査（三桿法）は3本の棒を両目で見る装置で行いますが、このトレーニングは平面の画面で1つの球を使います。検査の代わりや合否の予測にはなりません。',
  aboutCards: [
    { iconBg: 'bg-blue-600', title: 'おすすめの人', text: '近づく物のタイミング判断を手軽に練習したい人、球技やゲームでタイミングを合わせたい人。' },
    { iconBg: 'bg-cyan-600', title: '練習すること', text: '到達タイミングの判断、クリックのタイミング、早押しを抑えること。' },
    { iconBg: 'bg-purple-600', title: 'コツ', text: '基準リングの縁に視線を置き、球の外周が重なる瞬間まで待ってからクリックします。' },
  ],
  aboutSections: [
    {
      title: '深視力検査（三桿法）との違い',
      paragraphs: [
        '三桿法では、約2.5m離れた位置から3本の棒を見て、中央の棒が両側と並んだと感じた瞬間にボタンを押します。実物の奥行きを両目で見る検査です。',
        'このトレーニングは平面の画面なので両眼視差がなく、球の大きさの変化だけで判断します。仕組みが違うため、検査の結果を保証するものではありません。',
      ],
    },
    {
      title: 'オプティカルルーミングと到達タイミング',
      paragraphs: [
        '近づく物の像は、近づくほど急に大きくなります。この拡大の速さから到達までの時間を見積もれるとする研究があります（Lee, 1976）。',
        '速くなる球で到達のタイミングを繰り返し合わせることで、そのタイミングに慣れる練習になります。',
      ],
    },
  ],
};

export default function JapaneseDistanceJudgmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DistanceJudgmentClient copy={copyJa} />
      <DrillGuide guide={distanceGuideJa} />
      <RelatedDrills currentCategory="visual" currentHref="/drills/visual/depth-perception/distance-judgment" locale="ja" />
    </>
  );
}
