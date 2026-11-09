import FingerSequencingClient from '@/app/drills/motor/movement-speed/finger-sequencing/FingerSequencingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/ja/drills/motor/movement-speed/finger-sequencing';
const TITLE = '順番クリック練習｜ルート通りにマウスで押す | SkillDrills';
const DESCRIPTION = '無料の順番クリック練習。点線のルートが示す順番どおりに3〜5個のターゲットをマウスでクリック。正解ごとに+2秒、ミスと罠は-1秒。レベルが上がるほど的が小さく遠くなるブラウザ練習です。';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    '順番クリック練習',
    '順番にクリック',
    'ルート順にターゲットを押す',
    'マウス クリック 練習',
    'マウス 精度 練習',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/motor/movement-speed/finger-sequencing'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: '運動制御トレーニング', item: 'https://skilldrills.online/ja/drills/motor' },
    { '@type': 'ListItem', position: 3, name: '動作速度', item: 'https://skilldrills.online/ja/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: '順番クリック練習', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'ja-JP',
  name: '順番クリック練習',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: DESCRIPTION,
  url: PAGE_URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'ja-JP',
  name: '順番クリック練習',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas と JavaScript が必要',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'ja-JP',
  name: '順番クリック練習',
  url: PAGE_URL,
  description: '点線でつながったターゲットを決められた順番にクリックするマウス練習ゲーム。レベルが上がるとターゲットが小さく遠くなり、チェーンの制限時間も短くなります。',
  genre: ['Mouse Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: '順番クリック練習の遊び方は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '画面にターゲットが3個（レベル1〜2）、4個（レベル3〜5）、または5個（レベル6以上）の1チェーンで表示され、紫の点線がクリックする順番を示します。光っている現在のターゲットから順番にマウスでクリック（タッチ端末ではタップ）してください。番号は表示されないので、点線のルートをたどります。',
      },
    },
    {
      '@type': 'Question',
      name: '時間とスコアの仕組みは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '開始時は45秒で、順番どおりにターゲットを当てるたびに+2秒（最大60秒）。チェーンを最後まで完了すると150点 × 連続チェーン倍率（最大3.0倍）× レベルボーナスが入ります。残り時間が0になると終了です。',
      },
    },
    {
      '@type': 'Question',
      name: '赤い「!」のターゲットは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'レベル6から出てくる罠ターゲットです。クリックすると空振りと同じく-1秒、連続記録リセット、新しいチェーンになります。点線のルートには含まれないので、飛ばして次のターゲットを押してください。',
      },
    },
    {
      '@type': 'Question',
      name: 'チェーンに制限時間はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'タイムアウト設定がオン（初期値）のとき、チェーンごとに制限時間があります。最初は約3.2秒で、レベルと連続記録が上がるほど短くなります。間に合わないと-1秒と連続記録リセットになり、新しいチェーンが出ます。',
      },
    },
    {
      '@type': 'Question',
      name: 'レベルが上がると何が変わりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1,750点ごとにレベルが1上がり、上限はありません。レベルが上がるとターゲット数が増え、ターゲットが小さく、互いに遠くなり、チェーンの制限時間が短くなります。低レベルでは後ろのターゲットほど小さく薄く表示されるヒントがありますが、レベル10前後で消えます。',
      },
    },
    {
      '@type': 'Question',
      name: 'CPSテストとの違いは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CPSテストはその場でボタンを押す回数だけを数えます。順番クリック練習は、決められた順番にマウスを動かして正確に止めて押す動作の練習で、連打の速さより移動と正確さがスコアを左右します。',
      },
    },
    {
      '@type': 'Question',
      name: '命中率はどう計算されますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '全試行（クリック、罠のクリック、チェーンの時間切れを含む）のうち、順番どおりに当てたターゲットの割合です。結果画面には命中率、完了チェーン数、最高レベル、最大コンボが表示されます。',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
  name: '順番クリック練習のやり方',
  description: '点線のルートに沿ってターゲットを順番にクリックする手順。',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'ルートを確認',
      text: '最初のクリックの前に、紫の点線がつなぐターゲットの順番を確認します。',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '光るターゲットからクリック',
      text: '光っているターゲットをクリックし、点線に沿って次のターゲットへ移ります。',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '罠を飛ばす',
      text: 'レベル6から出る赤い「!」のターゲットは押さず、ルート上のターゲットだけをクリックします。',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: '結果を確認',
      text: '命中率、完了チェーン数、最高レベル、最大コンボを見て次の目標を決めます。',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('lashley1951', 'keele1968', 'fitts1954'),
  intro: {
    title: '順番クリック練習とは',
    paragraphs: [
      '順番クリック練習は、いちばん近いターゲットではなく決められた順番にターゲットをクリックするマウス練習です。ターゲット間の移動時間は距離と大きさで変わり（Fitts, 1954）、順番の決まった動作はひとまとまりとして前もって計画できます（Lashley, 1951; Keele, 1968）。',
      '計測はブラウザのタイマーとモニターのリフレッシュレートに影響されるため、同じ機器・同じマウス設定で自分の記録の変化を比べてください。',
    ],
  },
  benchmark: {
    title: '順番クリック練習の目安',
    description: 'SkillDrillsが決めた練習用の目安です。研究上の基準、ユーザー統計、パーセンタイルではありません。',
    columns: ['目安', '到達レベル', '命中率'],
    rows: [
      { tier: '目安1', level: 'レベル12+', accuracy: '95%以上' },
      { tier: '目安2', level: 'レベル9–11', accuracy: '90–94%' },
      { tier: '目安3', level: 'レベル6–8', accuracy: '85–89%' },
      { tier: '目安4', level: 'レベル3–5', accuracy: '75–84%' },
      { tier: '目安5', level: 'レベル1–2', accuracy: '75%未満' },
    ],
  },
  protocols: {
    title: '練習のコツ',
    description: '記録を安定して伸ばすためのポイント。',
    items: [
      {
        title: '先にルートを読む',
        description: '最初のクリックの前に点線全体を見て、チェーンをひとつの動きとして計画しましょう。ターゲットごとに次の位置を探す時間が減ります。',
      },
      {
        title: '遠い距離は速く、最後は正確に',
        description: '遠い距離は腕で素早く動かし、ターゲットの近くで手首と指で止めます。レベルが上がるとターゲットが小さくなるので、正確に止める練習が大切です。',
      },
      {
        title: '焦らない',
        description: '1回のミスで-1秒と連続記録リセットになるため、速くても正確な一定のテンポのほうが高いスコアにつながります。',
      },
    ],
  },
  faqs: {
    title: 'よくある質問（FAQ）',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const jaCopy = {
  title: '順番クリック練習',
  subtitle: '点線のルートどおりにターゲットを順番にクリックするマウス練習',
  score: 'スコア',
  timeLeft: '残り時間',
  accuracy: '命中率',
  bestScore: '自己ベスト',
  startButtonText: 'トレーニング開始',
  startSubtitle: 'ルート順にクリック • 開始45秒、正解ごとに+2秒',
  getReady: '準備してください',
  rulesTitle: '遊び方とスコア',
  rulesItems: [
    { num: '1', text: '順番どおりのターゲット', highlight: '+2秒（最大60秒）', result: 'チェーン完了 150点 × 倍率' },
    { num: '2', text: '連続チェーン倍率', highlight: '最大3.0倍', result: '連続完了で上昇' },
    { num: '3', text: 'レベル', highlight: '1,750点ごとに+1', result: 'ターゲット増加・縮小' },
    { num: '4', text: 'ミス / 罠 / 時間切れ', highlight: '-1秒', result: '連続記録リセット' }
  ],
  chainsCleared: '完了チェーン',
  peakLevel: '最高レベル',
  maxCombo: '最大コンボ',
  playAgain: 'もう一度',
  shareTitle: 'スコアを共有',
  exitTitle: '終了'
};

export default function JapaneseFingerSequencingPage() {
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
      <FingerSequencingClient copy={jaCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
