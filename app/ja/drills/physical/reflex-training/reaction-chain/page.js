import ReactionChainClient from '@/app/drills/physical/reflex-training/reaction-chain/ReactionChainClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/physical/reflex-training/reaction-chain';
const title = "オーバーフリック改善｜エイムの急停止精度を練習 | SkillDrills";
const description = "無料のオーバーフリック改善ドリル。画面の端から飛んでくるノードの上でカーソルを完全に止めます。止まれずに通り過ぎたりノードを逃したりすると残り時間が1秒減ります。45秒でエイムの急停止を練習しましょう。";

export const metadata = {
  title,
  description,
  keywords: ["オーバーフリック改善", "オーバーフリック", "エイム 止める", "オーバーエイム", "カーソル 停止 練習"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/reaction-chain') },
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
    { '@type': 'ListItem', position: 3, name: 'オーバーフリック改善', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'オーバーフリック改善ドリル（リアクション・チェーン）',
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
    q: 'オーバーフリック改善ドリルでは何をしますか？',
    a: '画面の四辺のどこかから直線で飛んでくるノードにカーソルを重ね、ノードの中でカーソルを完全に止めます。標的を通り過ぎてしまうオーバーフリックやオーバーエイムを減らすには最後の停止が重要で、このドリルはその部分だけを切り出して練習します。',
  },
  {
    q: 'スコアはどう計算されますか？',
    a: 'ノード内でカーソルを止める（ARREST READY表示）と50点×コンボ倍率を獲得します。クリックは不要です。連続成功5回で1.2倍、10回で1.5倍、25回で2.0倍、40回で最大3.0倍になります。',
  },
  {
    q: 'ミスするとどうなりますか？',
    a: '止まらずにノードの上を通り過ぎた場合と、ノードが画面外へ出てしまった場合はミスです。ミスのたびに残り時間が1秒減り、コンボ倍率が1.0倍に戻ります。スコアは減りません。このペナルティは常に有効で、設定でオフにはできません。',
  },
  {
    q: '「止まった」と判定される基準は？',
    a: 'ノードの中でカーソルの移動速度が1フレームあたり1.5px未満になると停止と判定されます。それより速く通過するとミスになります。判定はこのドリル内だけの基準です。',
  },
  {
    q: '難易度はどう上がりますか？',
    a: 'レベルはスコアに応じて1から10まで上がります（250、500、1,000、2,000、3,500、5,500、8,000、11,000、15,000点）。ノード速度は360px/sから1,800px/sへ、同時に出るノードは1個から5個へ増え、ノードの半径は15pxから6pxへ縮みます。',
  },
  {
    q: '止めるのは動き出すより難しいのですか？',
    a: 'そう感じる人は多いものの個人差があります。動作を始める過程と止める過程が競争するというモデルがあり（Logan & Cowan, 1984）、止める側が遅れると慣性で行き過ぎます。このドリルのスコアは停止反応時間を直接測るものではありません。',
  },
  {
    q: 'VALORANTやCS2のエイムは上達しますか？',
    a: '保証はできません。標的で止まる練習ですが、ゲームの感度・画面・ルールは異なるため、同じ結果につながるとは断定できません。自分の練習記録の比較に使ってください。',
  },
  {
    q: '必要な環境は？',
    a: 'カウントダウンが終わるとポインターロックが有効になり、マウスの動きだけで操作します。タッチ専用端末では開始できません。いつものDPIと感度で始め、設定を変えたら変更前後のスコアを同じ条件で比べましょう。',
  },
  {
    q: '記録はどこに保存されますか？',
    a: 'ベストスコア、最大コンボ、最高レベルはブラウザのローカルストレージに保存され、サーバーには送信されません。ブラウザのデータを削除すると記録も消えます。',
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
  name: 'オーバーフリック改善ドリルのやり方',
  description: '標的の上でカーソルを正確に止める4ステップです。',
  step: [
    { '@type': 'HowToStep', position: 1, name: '大きく近づく', text: 'ノードが現れたら、カーソルを一気にノードの進路近くまで動かします。' },
    { '@type': 'HowToStep', position: 2, name: '入る前に減速', text: 'ノードの境界に入る直前に速度を落とします。' },
    { '@type': 'HowToStep', position: 3, name: '中で止める', text: 'ノードの中でカーソルを完全に止め、ARREST READY表示を出します。' },
    { '@type': 'HowToStep', position: 4, name: 'コンボを続ける', text: '通り過ぎずに連続で止めてコンボ倍率を上げます。ミスごとに1秒減ります。' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guideProps = {
  heading: 'オーバーフリック改善ドリルのガイド',
  intro: [
    'リアクション・チェーンは、画面の端から飛んでくるノードの上でカーソルを完全に止めるオーバーフリック改善ドリルです。クリックはなく、止まれたかどうかだけが判定されます。1回のプレイは45秒で、ミスのたびに1秒減ります。',
    '動作を始める過程と止める過程が競争するというモデルがあります（Logan & Cowan, 1984）。また素早い照準は、大きく動いた後に小さく修正する2段階で説明されます（Woodworth, 1899）。標的が小さいほど正確に止める必要があることはフィッツの法則（Fitts, 1954）で知られています。',
    'スコアは同じマウス・感度・モニターで比較してください。リフレッシュレートや入力機器も遅延に影響します（Woods et al., 2015）。結果は練習記録であり、ゲームの実力やランクを保証するものではありません。',
  ],
  benchmarks: {
    title: 'レベルと難易度（ゲーム内の設定値）',
    headers: ['レベル', '必要スコア', 'ノード速度', '同時ノード数', 'ノード半径'],
    rows: [
      ['1', '0', '360 px/s', '1', '15 px'],
      ['2', '250', '420 px/s', '1', '14 px'],
      ['3', '500', '500 px/s', '2', '13 px'],
      ['4', '1,000', '600 px/s', '2', '12 px'],
      ['5', '2,000', '720 px/s', '2', '11 px'],
      ['6', '3,500', '850 px/s', '3', '10 px'],
      ['7', '5,500', '1,000 px/s', '3', '9 px'],
      ['8', '8,000', '1,200 px/s', '4', '8 px'],
      ['9', '11,000', '1,450 px/s', '4', '7 px'],
      ['10', '15,000', '1,800 px/s', '5', '6 px'],
    ],
    note: 'ドリルのコードに設定されている値です。ユーザー統計やパーセンタイルではありません。',
  },
  techniques: {
    title: '正確に止めるための4つの練習法',
    items: [
      { name: '入る前に減速する', desc: 'ノードの境界に触れてから減速しても間に合いません。境界に入る直前に減速を始めましょう。', tips: '最初はスコアよりARREST READY表示が出るかを確認します。' },
      { name: '力を抜いて止める', desc: '止める瞬間に手首や指に力が入るとカーソルが揺れます。力を抜き、慣性を消すように止めましょう。', tips: 'マウスパッドやソールの摩擦で止まり方が変わるため、同じ機材で比べます。' },
      { name: '通り過ぎない', desc: 'ノードの上を速く通過すると停止判定にならず、1秒失いコンボも切れます。速さより確実な停止を優先しましょう。', tips: '止まった状態を一瞬保つ意識で練習します。' },
      { name: 'ノードを逃さない', desc: 'ノードが画面外に出てもミスになり1秒減ります。複数のノードが出る高レベルでは、近い順に処理しましょう。', tips: '倍率は連続40回で最大3.0倍なので、落ち着いて続けることがスコアにつながります。' },
    ],
  },
  steps: [
    'スタートを押し、カウントダウン後にポインターロックが有効になるのを待ちます。',
    'ノードが現れたらカーソルを大きく動かして近づきます。',
    '境界の直前で減速し、ノードの中でカーソルを完全に止めます。',
    '45秒間連続で止めてコンボとスコアを積み上げます。ミスごとに1秒減ります。',
  ],
  audience: '標的を通り過ぎてしまうオーバーフリックを練習で減らしたいFPSプレイヤーや、マウスの停止動作を練習したい人。',
  faqs: { title: 'よくある質問', items: faqs },
  sources: pickSources('logan1984', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedReactionChainPageJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ReactionChainClient
        copy={{
          title: 'オーバーフリック改善',
          subtitle: '標的の上でカーソルをぴたりと止める',
          description: '標的に向かって速く動くより、正確に止まるほうが難しいと感じる人は多いはずです。動作を始める過程と止める過程が競争するというモデルがあり（Logan & Cowan, 1984）、止める側が遅れると慣性で標的を通り過ぎます。ノードの上でカーソルを止めてみましょう。',
          hudLabels: {
            score: 'スコア',
            time: '残り時間',
            accuracy: '停止精度',
            bestScore: '最高記録',
            getReady: '準備してください',
          },
          resultLabels: {
            newBest: '自己ベスト更新',
            points: 'ポイント',
            accuracy: '停止精度',
            totalArrests: '停止成功数',
            maxCombo: '最大倍率',
            peakLevel: '到達レベル',
            playAgain: 'もう一度',
          },
          rulesTitle: 'ルールとスコア計算',
          rulesItems: [
            { title: '停止成功（+50点）', text: 'ノードの中でカーソルを完全に止める（ARREST READY）と50点×コンボ倍率を獲得します。クリックは不要です。' },
            { title: 'コンボ倍率（最大3.0倍）', text: '連続成功5回で1.2倍、10回で1.5倍、25回で2.0倍、40回で3.0倍になります。' },
            { title: '通過・見逃し（-1秒）', text: '止まらずにノードを通り過ぎるか、ノードが画面外に出ると残り時間が1秒減り、倍率が1.0倍に戻ります（減点なし）。' },
            { title: 'レベル1〜10', text: 'スコアに応じてノード速度は最大1,800px/s、同時ノードは最大5個に増え、ノードは小さくなります。' },
          ],
          aboutTitle: 'オーバーフリック改善ドリルについて',
          aboutSections: [
            { title: '止める動作だけを練習する', content: 'リアクション・チェーンは標的の上でカーソルを止める動作を切り出して練習します。クリックはなく、ノードの中で速度を落として完全に止まったときだけ得点になります。' },
            { title: '始める過程と止める過程の競争', content: '動作を始める過程と止める過程が競争するというモデルがあります（Logan & Cowan, 1984）。止める側が遅れると慣性で標的を通り過ぎます。このドリルの効果は検証されておらず、練習記録の比較用です。' },
          ],
          aboutCards: [
            { title: 'こんな人に', desc: '標的を通り過ぎるオーバーフリックを減らしたいFPSプレイヤーや、停止動作を練習したい人。', bgClass: 'bg-blue-600/30', iconClass: 'text-blue-400' },
            { title: '練習できること', desc: '減速のタイミング、小さな範囲での停止、画面を横切る標的への先回り。', bgClass: 'bg-emerald-600/30', iconClass: 'text-emerald-400' },
            { title: '停止判定', desc: 'ノード内でカーソル速度が1フレームあたり1.5px未満になると停止と判定します。', bgClass: 'bg-purple-600/30', iconClass: 'text-purple-400' },
          ],
        }}
      >
        <DrillGuide {...guideProps} />
        <RelatedDrills />
      </ReactionChainClient>
    </>
  );
}
