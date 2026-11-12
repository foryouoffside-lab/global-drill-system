import SpeedDrillClient from '@/app/drills/physical/fitness/speed-drill/SpeedDrillClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/physical/fitness/speed-drill';
const title = '的当てゲーム｜動いて縮む的をクリック | SkillDrills';
const description = '動きながら縮んでいく的を、消える前にマウスでクリックする無料の的当てゲーム。命中で残り時間が2秒増え、空振りや見逃しで1秒減ります。45秒から始まり、コンボとレベル倍率でスコアを伸ばしましょう。記録はブラウザ内に保存されます。';

export const metadata = {
  title,
  description,
  keywords: ['的当てゲーム', '縮む的をクリック', 'ターゲットクリックゲーム', 'マウス 的当て', '無料 的当てゲーム', '動く的 クリック'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/fitness/speed-drill') },
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
    { '@type': 'ListItem', position: 3, name: '的当てゲーム', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '的当てゲーム・動いて縮む的をクリック',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ja' },
  inLanguage: 'ja',
  dateModified: '2026-11-10',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '的当てゲーム ウェブアプリ',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas対応の最新ブラウザ',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'ja',
  dateModified: '2026-11-10',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'スピードドリル：動いて縮む的の的当てゲーム',
  url,
  description: '動きながら縮んでいく的を、消える前にクリックするマウスの的当てゲーム。',
  genre: ['Action Game', 'Casual Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'ja',
  dateModified: '2026-11-10',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: 'この的当てゲームでは何をしますか？', a: '画面を動きながら縮んでいく丸い的を、消える前にクリックするゲームです。的を見つける速さ、カーソルを運ぶ速さ、クリックの正確さが一度に使われ、スコアとコンボで記録されます。医療用の反応検査ではなく、ブラウザで遊べる練習ツールです。' },
  { q: 'なぜ的はどんどん小さくなるのですか？', a: '的が小さいほど当てにくくなる関係は、フィッツの法則（Fitts, 1954）で説明されます。このドリルの的は出現後に縮み続け、半径4px以下になると消えるため、クリックが遅いほど難しくなります（タイムアウト設定をオフにすると的は縮みません）。大きいうちに素早く当てるのがコツです。' },
  { q: 'スコアと時間はどう計算されますか？', a: '的に当てるたびに100点にコンボとレベルの倍率が掛かり、残り時間が2秒増えます（上限60秒）。開始時の持ち時間は45秒で、1,750点ごとにレベルが上がります。的が消えたり何もない場所をクリックしたりすると、コンボがリセットされ残り時間が1秒減ります。' },
  { q: '連打の回数や1秒あたりのクリック数を測るテストですか？', a: 'いいえ。このゲームはクリックの回数や速さを測定しません。位置が変わり続ける的に1回ずつ正確に当てる必要があり、何もない場所をクリックすると1秒減るため、連打はむしろ不利になります。' },
  { q: 'レベルが上がると何が変わりますか？', a: '的の移動速度と縮むペースが少しずつ速くなり、新しく出る的の大きさも小さくなります（半径32pxから最小10px）。ミスなく連続で当てるとコンボ倍率が最大3.0倍まで上がります。速さと正確さを両立するほどスコアが伸びます。' },
  { q: '外したときのペナルティは？', a: '的が消えたり空振りしたりするとコンボがすぐにリセットされ、残り時間が1秒減ります。この減点は設定に関係なく常に適用されます。ゆっくり正確に狙うより、速さと安定のバランスが大切です。' },
  { q: 'FPSのエイムは上達しますか？', a: 'このページはFPSの上達を保証しません。動く小さな的を素早く当てる動作はエイム練習に似ていますが、ゲームの感度・画面・ルールが違うため、同じ効果につながるとは言えません。自分の練習記録を比べる用途で使ってください。' },
  { q: 'マウスの設定はどうすればよいですか？', a: '決まった正解はありません。普段使っているDPI・感度・持ち方から始め、設定を変えたら同じ条件で変更前後のスコアを比べてください。手首や指に痛みがあれば休むか中止しましょう。' },
  { q: 'モニターのリフレッシュレートやマウスのポーリングレートは影響しますか？', a: 'リフレッシュレートが高いと的の動きがより細かく表示され、ポーリングレートが高いとマウス入力がより頻繁に伝わります。どちらも遅延に関わる要素として知られていますが（Woods et al., 2015）、このドリルでスコアがどれだけ変わるかは測定していません。' },
  { q: '記録はどこに保存されますか？', a: 'スコアや最高コンボなどの記録はブラウザのローカルストレージに保存され、このドリルからサーバーへは送信されません。ブラウザのデータを消すと記録も消えます。詳しくはプライバシーポリシーをご確認ください。' },
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
  name: '的当てゲームの遊び方 4ステップ',
  description: '縮んでいく的を素早くクリックしてスコアとコンボを積み上げる方法です。',
  step: [
    { '@type': 'HowToStep', position: 1, name: '的の位置を見つける', text: '画面全体を広く見て、的が出た位置を素早く見つけます。', url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: 'カーソルを一気に運ぶ', text: '的を見つけたら迷わず、カーソルを的の近くまで一度に動かします。', url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: '縮む前にクリック', text: '的がまだ大きいうちに、最後だけ速度を落として正確にクリックします。', url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: 'コンボを保つ', text: 'ミスなく連続で当て、コンボ倍率と追加時間を積み上げます。', url: `${url}#step-4` },
  ],
};

const speedGuide = {
  heading: '的当てゲームのガイド',
  intro: {
    title: '動いて縮む的の的当てゲームとは？',
    paragraphs: [
      'スピードドリルは、動きながら縮んでいく丸い的を消える前にクリックする無料のブラウザ的当てゲームです。1回のクリックに的の発見、カーソル移動、クリックの正確さがすべて含まれるため、単純な反応時間テストとは別の種類の練習になります。',
      '素早いマウス操作は、まず大きく動かし最後に小さく修正する2段階で説明されます（Woodworth, 1899）。的が小さいほど当てにくくなる関係はフィッツの法則（Fitts, 1954）が説明します。このドリルでは的が縮み続けるので、大きく動かす段階を早く始めるほど有利です。',
      '明るくコントラストの強い動く的は、視野の端でも目に留まりやすくなります（Treisman & Gelade, 1980）。画面の一点だけを見ず、全体を広く見ると新しい的を早く見つけられます。',
      'スコアは同じマウス・感度・モニターで比べてください。リフレッシュレートや入力機器も遅延に影響します（Woods et al., 2015）。結果は練習記録であり、医学的な検査や選手の等級ではありません。',
    ],
  },
  benchmarks: {
    title: 'スコア帯の目安',
    headers: ['段階', 'スコア帯', '命中率の目標', '練習ポイント'],
    rows: [
      ['段階1', '6,000点未満', '70%未満', '的を素早く見つけ、空振りを減らす'],
      ['段階2', '6,000 – 10,999点', '70 – 81%', '的が大きいうちに早めにクリックする'],
      ['段階3', '11,000 – 16,999点', '82 – 89%', 'コンボを切らさずにつなぐ'],
      ['段階4', '17,000 – 23,999点', '90 – 94%', '速い的でも正確さを保つ'],
      ['段階5', '24,000点以上', '95%以上', '時間ボーナスで長いセッションを続ける'],
    ],
    note: 'この区分はSkillDrillsが練習用に分けたスコア帯です。ユーザー統計、パーセンタイル、プロ選手の基準ではありません。',
  },
  techniques: {
    title: 'スコアを伸ばす4つの練習法',
    items: [
      { name: '大きく動かして小さく修正する', desc: '的を見つけたらカーソルを一度に的の近くまで運び、到着直前だけ減速します。ゆっくり引きずると、その間に的が縮みます。', tips: '手首と腕で大きく、指で小さく修正するよう分けてみましょう。' },
      { name: '的が大きいうちにクリックする', desc: '的は縮むほど当てにくくなります。ど真ん中を狙うより、まだ大きいうちに縁の内側を素早くクリックしましょう。', tips: '命中率が急に落ちたら、速さを一段階落として安定させます。' },
      { name: '画面を広く見る', desc: '一点だけを見ていると、反対側に出た的を見つけるのが遅れます。画面の中央をやわらかく見て、周りの動きも一緒に捉えましょう。', tips: '目が先に動き、手がすぐ後を追うリズムを作ってみましょう。' },
      { name: '楽な持ち方を保つ', desc: '力を抜き、手が楽な持ち方を保ちます。余計な力が入ると正確さが落ち、手首も疲れやすくなります。', tips: '疲れたら休み、同じ機材で記録を比べましょう。' },
    ],
  },
  steps: [
    '楽な姿勢で座り、カーソルを画面中央に置きます。',
    '的が出たら、カーソルを一度に的の近くまで運びます。',
    '的が縮む前にクリックし、スコアと追加時間2秒を獲得します。',
    '連続で当ててコンボを積み、スコアを伸ばします。',
  ],
  audience: '動く的を正確に当てるマウス操作と手と目の協調を、気軽に練習したいゲーマーや一般の方。',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'treisman1980', 'lee1976', 'woods2015'),
};

export default function LocalizedSpeedDrillPageJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <SpeedDrillClient
        copy={{
          title: '的当てゲーム',
          hudLabels: { score: 'スコア', time: '残り時間', bestScore: '自己ベスト', bestCombo: '最高コンボ' },
          rulesTitle: 'ルールと採点',
          rulesItems: [
            { title: '的をクリックして時間延長', text: '的が消える前にクリックしてください。命中ごとに100点（コンボとレベル倍率を適用）と2秒の追加時間（上限60秒）がもらえます。' },
            { title: 'コンボ倍率', text: 'ミスなく連続で当てると、コンボ倍率が最大3.0倍まで上がります。' },
            { title: '難易度の上昇', text: '1,750点ごとにレベルが上がり、的の移動速度と縮むペースが速くなります。' },
            { title: '見逃しと空振り', text: '的が消えたり何もない場所をクリックしたりすると、コンボがリセットされ残り時間が1秒減ります。' },
          ],
          aboutTitle: 'スピードドリルについて',
          aboutSections: [
            { title: '大きく動かして小さく修正する', subtitle: 'ウッドワース（Woodworth, 1899）の2段階の運動説明', content: '素早い照準は、まず大きく移動し最後に小さく修正する2段階で説明されます。レベルが上がるほど修正に使える時間が短くなります。' },
            { title: '縮む的とフィッツの法則', subtitle: '的が小さいほど難しくなる関係', content: '的が半径4pxまで縮むにつれて許容範囲が狭くなります。大きく見えるうちに素早くクリックするのがポイントです。' },
            { title: '目に留まる動く的', subtitle: 'トリーズマン（Treisman, 1980）の視覚探索研究', content: 'コントラストの強い動く的は視野の端でも目立ちます。画面全体を広く見ると、新しい的を早く見つけられます。' },
            { title: '消えるまでの残り時間を見積もる', subtitle: 'リー（Lee, 1976）の接触までの時間の研究', content: '近づいたり大きさが変わったりする対象について、人が残り時間を見積もる仕組みに関する研究です。的が消える前のクリックのタイミングをつかむ参考になります。' },
          ],
        }}
      />
      <DrillGuide {...speedGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/fitness/speed-drill" />
    </>
  );
}
