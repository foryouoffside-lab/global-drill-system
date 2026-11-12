import PeripheralThreatSweeperClient from '@/app/drills/physical/reflex-training/peripheral-threat-sweeper/PeripheralThreatSweeperClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/physical/reflex-training/peripheral-threat-sweeper';
const title = "周辺視野トレーニングゲーム｜中央を見たまま迫る標的をクリック | SkillDrills";
const description = "周辺視野トレーニングのブラウザゲーム。画面中央のコアを見たまま、外側から近づく標的をコアに届く前にクリックします。命中で+2秒、空振りやコア到達で-1秒。視線を中央に保ったまま周りの動きに気づく練習を、登録不要で試せます。視野検査ではない無料のゲームです。";

export const metadata = {
  title,
  description,
  keywords: [
    "周辺視野 トレーニング",
    "周辺視野 ゲーム",
    "周辺視野 鍛える ゲーム",
    "周辺視野 中心視野 違い",
    "トンネルビジョン"
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/peripheral-threat-sweeper'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url,
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "身体機能トレーニングハブ", "item": "https://skilldrills.online/ja/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "反射神経トレーニング", "item": "https://skilldrills.online/ja/drills/physical/reflex-training" },
    { "@type": "ListItem", "position": 4, "name": "周辺視野トレーニングゲーム", "item": url }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "周辺視野トレーニングゲーム（Peripheral Threat Sweeper）",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  description,
  url,
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/ja" },
  "inLanguage": "ja",
  "dateModified": "2026-11-10"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "周辺視野トレーニングゲーム ウェブアプリ",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvasおよびポインター入力対応の最新ブラウザ",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  url,
  "inLanguage": "ja",
  "dateModified": "2026-11-10"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "周辺視野トレーニングゲーム（Peripheral Threat Sweeper）",
  url,
  description,
  "genre": ["Action Game", "Reflex Game"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "inLanguage": "ja",
  "dateModified": "2026-11-10",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const faqs = [
  {
    q: "この周辺視野トレーニングゲームでは何をしますか？",
    a: "画面中央のコアを見たまま、外側から中心へ近づいてくる標的を見つけてクリックします。視線を一点に置いたまま周りの動きに気づく練習になります。視野検査や治療ではなく、ブラウザで遊ぶ練習用ゲームです。"
  },
  {
    q: "周辺視野と中心視野はどう違いますか？",
    a: "中心視野は視線のごく中心で文字や細部を見る範囲で、周辺視野はその外側で動きや大きな変化に気づく範囲です。このゲームは中央に視線を置いたまま、周りから来る標的に反応する課題です。"
  },
  {
    q: "目を動かしてはいけませんか？",
    a: "中央のコアを見続けて周りを意識するのが目的です。標的を目で追うと周辺視野の練習になりにくくなります。視線の向きはブラウザでは記録できないので、自分で守る必要があります。"
  },
  {
    q: "スコアと時間はどう計算されますか？",
    a: "標的をクリックすると100点にコンボとレベルの倍率がかかり、残り時間が2秒増えます（上限60秒）。開始時の持ち時間は45秒、コンボ倍率は最大3.0倍です。標的がコアに届くか、標的のない場所をクリックするとコンボが1.0倍に戻り、1秒減ります。この減点は常に有効で、設定でオフにはできません。"
  },
  {
    q: "難易度はどう上がりますか？",
    a: "スコアが上がるにつれて標的の速さは約80px/sから最大520px/sへ、出現間隔は約1.4秒から最短0.20秒へ変わります。レベルが進むと、速い標的や左右に揺れながら近づく標的も混ざります。"
  },
  {
    q: "トンネルビジョンとは何ですか？",
    a: "緊張したり一点に集中しすぎたりすると周りに気づきにくくなる状態をトンネルビジョンと呼ぶことがあります。このゲームは中心に集中しながら周りも見落とさない練習をする遊びです。病気による視野の狭まりはこのゲームでは判断できないので、眼科を受診してください。"
  },
  {
    q: "このトレーニングで視野は広がりますか？",
    a: "視野が広がるとは言えません。似た課題を練習するとその課題の成績が上がることはありますが、このゲームの効果は検証されていません。自分の記録を比べる用途で使ってください。"
  },
  {
    q: "画面の大きさや距離は影響しますか？",
    a: "画面が大きく近いほど標的は視野の外側に現れ、周辺視野を多く使うことになります。記録は同じ距離と姿勢で比べてください。リフレッシュレートや入力遅延も影響することがあります（Woods et al., 2015）。"
  },
  {
    q: "記録はどこに保存されますか？",
    a: "スコア、命中率、最高コンボはブラウザのローカルストレージに保存され、このドリルからサーバーへは送信しません。ブラウザのデータを消すと記録も消えます。詳しくはプライバシーポリシーをご確認ください。"
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "周辺視野トレーニングゲームの遊び方",
  "description": "中央を見たまま周りの標的を処理する4ステップです。",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "中央を見る", "text": "画面中央のコアに視線を置き、目を動かさないようにします。" },
    { "@type": "HowToStep", "position": 2, "name": "周りの動きに気づく", "text": "外側から近づく標的の動きに、視線を動かさずに気づきます。" },
    { "@type": "HowToStep", "position": 3, "name": "コアに届く前にクリック", "text": "標的がコアに届く前に位置を合わせてクリックします。" },
    { "@type": "HowToStep", "position": 4, "name": "コンボを伸ばす", "text": "ミスなく続けて処理し、+2秒とコンボ倍率を積み上げます。" }
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` }))
};

const guideProps = {
  heading: "周辺視野トレーニングゲームのガイド",
  intro: [
    "Peripheral Threat Sweeperは、ブラウザで遊べる周辺視野トレーニングのゲームです。画面中央のコアを見たまま、外側から近づく標的をコアに届く前にクリックします。命中で2秒増え、空振りやコア到達で1秒減ります。",
    "目を動かさなくても注意を画面の別の場所に向けられるという研究があります（Posner, 1980）。また、コントラストの強い動く標的は周辺でも目立ちやすいとされます（Treisman & Gelade, 1980）。このゲームはそうした課題をゲームにしたものです。",
    "最初は約1.4秒間隔でゆっくり始まり、スコアが上がると標的の速さ（最大520px/s）と出現間隔（最短0.20秒）が厳しくなります。クリックは大きく動かしてから最後に小さく合わせると効率的です（Woodworth, 1899; Fitts, 1954）。",
    "結果は練習の記録です。視野検査、診断、治療の代わりにはなりません。見え方に異常を感じたら眼科を受診してください。"
  ],
  benchmarks: {
    title: "スコア帯の目安",
    headers: ["段階", "スコア帯", "練習ポイント"],
    rows: [
      ["1", "6,000点未満", "視線を中央に置く習慣をつける"],
      ["2", "6,000 – 10,999点", "標的がコアに届く前に処理する"],
      ["3", "11,000 – 16,999点", "コンボを切らさずに続ける"],
      ["4", "17,000 – 23,999点", "速い標的でも視線を中央に保つ"],
      ["5", "24,000点以上", "複数の標的を続けて処理する"]
    ],
    note: "SkillDrillsが練習用に分けたスコア帯です。ユーザー統計、パーセンタイル、視野検査の基準ではありません。"
  },
  techniques: {
    title: "スコアを伸ばす4つのコツ",
    items: [
      {
        name: "中央に視線を置く",
        desc: "コアを見たまま目を動かさないのがこのゲームの要点です。標的を目で追うと練習の目的から外れます。",
        tips: "目が動いてしまうときは、まずゆっくりしたレベルで習慣をつけましょう。"
      },
      {
        name: "全体をぼんやり見る",
        desc: "一方向に集中せず、画面全体を一度に見る感覚を持つと、動きに先に気づけます。",
        tips: "目の力を抜いて、焦点を柔らかく保ちます。"
      },
      {
        name: "大きく動かして小さく合わせる",
        desc: "標的の位置が分かったら、カーソルを一気に近づけて最後だけ減速してクリックしましょう。",
        tips: "コアの近くで焦って空振りすると、コンボが消えて1秒減ります。"
      },
      {
        name: "短く遊んで休む",
        desc: "目が疲れると集中が落ちます。短いセッションを繰り返し、画面から目を離して休みましょう。",
        tips: "痛みやめまいがあれば中止します。"
      }
    ]
  },
  steps: [
    "画面中央のコアを見ながら楽な姿勢で座ります。",
    "外側から近づく標的に、目を動かさずに気づきます。",
    "標的がコアに届く前にクリックします。",
    "命中ごとの+2秒とコンボを保ってスコアを伸ばします。"
  ],
  audience: "周りの動きへの反応をゲームで練習したい方、視線を固定したまま周りを見る感覚を試したいゲーマー。",
  faqs,
  sources: pickSources('posner1980', 'treisman1980', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function PeripheralThreatSweeperJaPage() {
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
      <PeripheralThreatSweeperClient
        copy={{
          title: "周辺視野トレーニングゲーム",
          subtitle: "中央を見たまま、周りの標的を見つける",
          hudLabels: {
            score: "スコア",
            time: "残り時間",
            bestScore: "自己ベスト",
            bestCombo: "最高コンボ",
            accuracy: "命中率",
            sweeps: "命中数",
            breaches: "コア到達",
            peakLevel: "到達レベル",
            getReady: "準備"
          },
          rulesTitle: "ルールと採点",
          rulesItems: [
            { title: "標的のクリックと時間延長", text: "外側から近づく標的をクリックすると100点（コンボとレベルの倍率つき）と+2秒（上限60秒）を獲得します。" },
            { title: "コンボ倍率", text: "ミスなく続けて処理すると、コンボ倍率が最大3.0倍まで上がります。" },
            { title: "難易度の上昇", text: "スコアが上がるにつれて標的の速さ（最大520px/s）と出現間隔（最短0.20秒）が厳しくなります。" },
            { title: "コア到達と空振り", text: "標的がコアに届くか、標的のない場所をクリックすると、コンボが1.0倍に戻り残り時間が1秒減ります。" }
          ],
          aboutTitle: "周辺視野トレーニングゲームについて",
          aboutSections: [
            {
              title: "視線を動かさずに注意を移す",
              subtitle: "ポズナー（Posner, 1980）の注意研究",
              content: "目を動かさなくても注意を画面の別の場所に向けられるという研究があります。中央を見たまま周りの標的に気づく課題です。"
            },
            {
              title: "目立つ動く標的",
              subtitle: "トリーズマン（Treisman, 1980）の視覚探索研究",
              content: "コントラストの強い動く標的は周辺でも目立ちやすいとされます。画面全体を広く見ると新しい標的に先に気づけます。"
            },
            {
              title: "大きく動いて小さく合わせる",
              subtitle: "ウッドワース（1899）とフィッツ（1954）の研究",
              content: "素早いクリックは、大きく動かしてから最後に小さく修正する2段階で説明されます。コアの近くでは減速して正確にクリックしましょう。"
            },
            {
              title: "複数の標的を同時に処理する",
              subtitle: "出現間隔が短くなる後半",
              content: "後半は標的が続けて現れるので、注意を分ける必要があります。視線は中央に置いたまま、コアに近い標的から処理しましょう。"
            }
          ]
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/peripheral-threat-sweeper" />
    </>
  );
}
