import SaccadicGalleryWrapper from '@/app/drills/reaction-speed/saccadic-gallery/SaccadicGalleryWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/reaction-speed/saccadic-gallery';
const title = '眼球運動トレーニング・視線移動ゲーム | SkillDrills';
const description =
  '無料の眼球運動トレーニング。画面に現れるターゲットへ視線を素早く移す、ビジョントレーニング向けの視線移動ゲームです。捕捉精度と反応をブラウザで記録します。';

export const metadata = {
  title,
  description,
  keywords: [
    '眼球運動 トレーニング',
    '眼球運動トレーニング',
    'ビジョントレーニング',
    '視線移動 トレーニング',
    '目の体操',
    'サッケード トレーニング',
    '跳躍性眼球運動',
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/reaction-speed/saccadic-gallery'),
  },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title,
    description: 'ターゲットへ視線を素早く移す、無料の眼球運動トレーニング・視線移動ゲーム。',
    type: 'article',
    url,
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title,
    description: '無料の眼球運動トレーニング。視線を素早く移してターゲットを正確に捉えよう。',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills ホーム', item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: 'ドリル一覧', item: 'https://skilldrills.online/ja/drills' },
    { '@type': 'ListItem', position: 3, name: '反応速度', item: 'https://skilldrills.online/ja/drills/reaction-speed' },
    { '@type': 'ListItem', position: 4, name: '眼球運動トレーニング・視線移動ゲーム', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  sameAs: ['https://en.wikipedia.org/wiki/Saccade'],
  name: '眼球運動トレーニング・視線移動ゲーム',
  alternateName: ['眼球運動 トレーニング', '視線移動 トレーニング', 'サッケード トレーニング'],
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: '画面の決まった位置に1つずつ現れるターゲットへ視線を移してクリックし、命中率と出現からクリックまでの時間を記録するブラウザゲーム。',
  browserRequirements: '最新のウェブブラウザ（Chrome, Edge, Safari, Firefox）',
  inLanguage: 'ja',
  dateModified: '2026-11-08',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '眼球運動トレーニング・視線移動ゲーム | SkillDrills',
  url,
  description: '無料の眼球運動トレーニング。ターゲットへ視線を素早く移してクリックする視線移動ゲームです。',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'JavaScript対応の最新ブラウザが必要。',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  inLanguage: 'ja',
  dateModified: '2026-11-08',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: '眼球運動トレーニング - 視線移動ゲーム',
  url,
  description: 'ブラウザで手軽に遊べる、ターゲットへ視線を移してクリックする視線移動ゲーム。',
  genre: ['Action', 'Aim Trainer'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'ja',
  dateModified: '2026-11-08',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '眼球運動トレーニング（視線移動ゲーム）の進め方',
  description: 'ターゲットへ視線を素早く移してクリックする4ステップの練習手順です。',
  step: [
    { '@type': 'HowToStep', position: 1, name: '姿勢を整える', text: '画面から約50〜70cm離れて座り、視線を画面中央に置きます。' },
    { '@type': 'HowToStep', position: 2, name: 'ターゲットに気づく', text: '頭を大きく動かさず、画面に現れた赤いターゲットに気づきます。' },
    { '@type': 'HowToStep', position: 3, name: '視線を移す', text: '目で先にターゲットへ一度で視線を移します。' },
    { '@type': 'HowToStep', position: 4, name: '正確にクリック', text: 'ターゲットを捉えてクリック（スマホはタップ）し、結果を確認します。' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    q: '眼球運動トレーニング（視線移動トレーニング）とは何ですか？',
    a: '視線をある点から別の目標へ素早く移す動き（サッケード、跳躍性眼球運動）を繰り返す練習です。このゲームでは画面の決まった位置（PCは4×3、スマホは3×3）に1つずつ現れるターゲットへ視線を移し、クリックの速さと正確さを記録します。ブラウザは眼球そのものの動きは測りません。',
  },
  {
    q: 'ルールと制限時間はどうなっていますか？',
    a: '持ち時間45秒で始まり、ターゲットに当てるたびに2秒加算されます（上限60秒）。1ヒットは100点に連続ヒットのコンボ倍率（最大3.0倍）とレベル補正がかかります。レベルが上がるとターゲットは小さくなり、表示時間も短くなります。空振りはコンボをリセットし、1秒減算は設定でオンにした場合だけです。操作はマウスかタップです。',
  },
  {
    q: 'サッケードはどれくらい速い動きですか？',
    a: 'サッケードは数十ミリ秒で終わる非常に速い眼球運動で、大きな視線移動では最高速度が毎秒数百度に達します（Leigh & Zee, 2015）。読書や画面を見渡すときにも絶えず起きています（Rayner, 1998）。',
  },
  {
    q: 'エクスプレス・サッケードとは何ですか？',
    a: '条件によっては、通常より短い潜時（およそ100ミリ秒前後）で起きるサッケードが観察され、エクスプレス・サッケードと呼ばれます（Fischer & Weber, 1993）。このゲームは眼球の潜時を測らないため、エクスプレス・サッケードかどうかは判定できません。',
  },
  {
    q: 'FPSゲームに役立ちますか？',
    a: 'VALORANTやCS2では、クリアリングやミニマップ確認、急に現れた敵へ視線を合わせる場面があり、この練習はそれに似た画面課題を繰り返せます。ただし実際の撃ち合いは立ち回りやエイム、機器設定にも左右されるため、ゲーム内の成績が上がることを保証するものではありません。',
  },
  {
    q: 'サッケード抑制とは何ですか？',
    a: '視線が素早く動いている間、画面の流れやブレをほとんど意識しない現象です。眼球運動中は視覚情報の処理が弱まる傾向があると報告されています（Leigh & Zee, 2015）。このゲームで抑制の程度は測定しません。',
  },
  {
    q: 'モニターのリフレッシュレートは結果に影響しますか？',
    a: '1フレームの間隔は1000をリフレッシュレートで割った値です。60Hzでは約16.7ms、144Hzでは約6.9ms、240Hzでは約4.2msごとに画面が更新されるため、ターゲットが表示されるタイミングに差が出ることがあります（Woods et al., 2015）。このゲームでスコアがどれだけ変わるかは測定していないので、同じ環境で比べてください。',
  },
  {
    q: '眼球運動トレーニングで読書速度や集中力は上がりますか？',
    a: '読書では行から行へ視線を移す眼球運動を使いますが、この画面上の練習で読書速度や集中力が上がるとは言い切れません。読みにくさや目の疲れが続く場合は、眼科や視能訓練士などの専門家に相談してください。このゲームは診断や治療のためのものではありません。',
  },
  {
    q: '1日にどれくらい練習すればいいですか？',
    a: '1回5〜10分ほどの短いセットにして、間に休憩を入れてください。目が疲れたり乾いたりしたら中断し、遠くを見てまばたきしましょう。長くやるほど良いわけではありません。',
  },
  {
    q: 'この眼球運動トレーニングは無料で使えますか？記録はどこに保存されますか？',
    a: 'はい、無料でインストールやアカウントは不要です。ベストスコアはブラウザのローカルストレージに保存され、このドリルからサーバーへは送信されません。ブラウザのデータを消すと記録も消えます。',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja',
  dateModified: '2026-11-08',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const saccadicGuide = {
  heading: '眼球運動トレーニング（視線移動ゲーム）ガイド',
  intro: [
    '視線移動ゲームとは、画面に次々に現れる標的へ視線を素早く移し、見つけてクリックするまでの反応と正確さを練習するゲームです。視線を一点から次の点へ飛ばす眼球運動はサッケード（跳躍性眼球運動）と呼ばれ、読書や画面の探索中にも絶えず起きています（Rayner, 1998）。このページは視力や眼の検査ではありません。',
    'ターゲットは画面上の決まった位置（PCは4×3、スマホは3×3の点）のどこかに1つずつ現れ、直前と同じ位置には続けて出ません。視線が目標から外れると小さな修正の動きが必要になるため、速さよりも一度で正確に捉えることを意識すると練習の質が上がります。',
    '測定の限界：ブラウザは視線の位置を知ることができず、記録されるのはクリックの時刻と位置だけです。結果には目の動きのほか、手の動き、マウスの入力遅延、画面の更新間隔（60Hzで約16.7ms、240Hzで約4.2ms；Woods et al., 2015）が含まれます。サッケードの潜時として解釈しないでください。',
    '同じ機器・距離・姿勢で練習し、自分の記録の推移を比べてください。目が疲れたら休み、痛みや見え方の異常があれば眼科を受診してください。',
  ],
  benchmarks: {
    title: '練習ステップの目安',
    headers: ['ステップ', '練習の目標', '意識するポイント'],
    rows: [
      ['ステップ1', 'ターゲットを逃さずクリックする', '正確に当てる感覚をつかむ'],
      ['ステップ2', '視線を一度で移す', 'ターゲットを見たらすぐに視線を動かす'],
      ['ステップ3', 'クリックのリズムを保つ', '焦らず一定のテンポをつくる'],
      ['ステップ4', '精度を保ったまま速くする', '行き過ぎと修正を減らす'],
      ['ステップ5', '長めのセッションを続ける', '疲れる前に休み、同じ条件で比べる'],
    ],
    note: 'この表はSkillDrillsの練習の進め方の目安です。反応時間の基準値、利用者の統計、パーセンタイル、医学的な基準ではありません。',
  },
  techniques: {
    title: '視線移動の練習のコツ',
    items: [
      { name: '頭は固定して目だけ動かす', desc: '頭を回さず目だけで視線を移す練習をします。姿勢を一定にすると記録も比べやすくなります。', tips: 'ときどき頭が動いていないか確認しましょう。' },
      { name: '画面全体をやわらかく見る', desc: '一点を凝視せず画面中央をぼんやり見ておくと、新しく現れたターゲットに気づきやすくなります。', tips: '視野を狭めず、全体を見渡す意識を持ちましょう。' },
      { name: '一度で止める', desc: 'ターゲットを行き過ぎたり手前で止まったりすると修正が必要になります。一度で正確に止めることを目標にしてください。', tips: 'スピード競争より正確な着地を優先します。' },
      { name: '目を休める', desc: '画面に集中するとまばたきが減り、目が乾きやすくなります。', tips: 'セットの合間に意識してまばたきし、遠くを眺めて目を休めましょう。' },
    ],
  },
  steps: [
    '画面から約50〜70cm離れて正面に座ります。',
    'ドリルを開始し、視線を画面中央に置きます。',
    'ターゲットが現れたら、まず目で素早く視線を移します。',
    'ターゲットを捉えてクリック（スマホはタップ）します。',
    '時間切れの後、命中率・平均反応・最高レベル・最大コンボを確認します。',
  ],
  audience: '画面の探索や視線移動をゲーム感覚で練習したい方、FPSプレイヤー、球技ファン。',
  faqs,
  sources: pickSources('rayner1998', 'fischer1993', 'leigh2015', 'woods2015'),
  related: [
    { href: '/ja/drills/reaction-speed', label: '反応速度 ハブ' },
    { href: '/ja/drills/visual/reaction-speed/light-reaction', label: '反応速度テスト' },
    { href: '/ja/drills/reaction-speed/reflex-training-drill', label: '反射神経ゲーム (瞬間認識ドリル)' },
    { href: '/ja/drills/reaction-speed/visual-tracking-speed-test', label: '動体視力テスト' },
  ],
};

export default function JapaneseSaccadicGalleryPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SaccadicGalleryWrapper copy={{ title: '眼球運動トレーニング・視線移動ゲーム', subtitle: '視線の跳躍 · 視覚ターゲット捕捉', caption: 'ターゲット間へ視線を素早く移し、正確にクリックします。' }} />
      <DrillGuide guide={saccadicGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
