import KeyboardRecognitionClient from '@/app/drills/motor/movement-speed/keyboard-recognition/KeyboardRecognitionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/ja/drills/motor/movement-speed/keyboard-recognition';
const TITLE = 'キーボード反応速度テスト｜表示キーへの反応 | SkillDrills';
const DESCRIPTION = '無料のキーボード反応速度テスト。画面に表示されたキーを制限時間内に押し、フェイクは押さずに我慢。60秒で平均反応時間・正確さ・KPMを記録。VALORANTなどのキー配置プリセット付き。';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'キーボード反応速度テスト',
    'キーボード 反応速度 測定',
    'キー配置 練習',
    'valorant キーボード 反応速度',
    'キーバインド 練習',
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
    languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-recognition'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: '運動制御トレーニング', item: 'https://skilldrills.online/ja/drills/motor' },
    { '@type': 'ListItem', position: 3, name: '動作速度', item: 'https://skilldrills.online/ja/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'キーボード反応速度テスト', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Computer_keyboard", "https://en.wikipedia.org/wiki/Reaction_time"],
  inLanguage: 'ja-JP',
  name: 'キーボード反応速度テスト',
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
  name: 'キーボード反応速度テスト',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'JavaScript対応ブラウザと物理キーボードが必要',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'ja-JP',
  name: 'キーボード反応速度テスト',
  url: PAGE_URL,
  description: '画面に表示されたキー（単発、2〜5キーの連続、記憶モード）を制限時間内に押し、フェイク表示は無視する60秒のキー反応ゲーム。',
  genre: ['Keyboard Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop'],
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
      name: 'キーボード反応速度テストは何を測りますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '画面にキーが表示されてから、そのキーを正しく押すまでの時間を測ります。結果画面には平均反応時間（ms）、正確さ、KPM（1分あたりのキー入力数）、最大コンボ、ランクが表示されます。キーボード本体の入力遅延（デバイスのレイテンシー）やタイピング速度を測るツールではなく、表示されたキーに対する人の反応を練習するものです。',
      },
    },
    {
      '@type': 'Question',
      name: 'どんな表示が出ますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '単発キー、2〜3キーを順番に押すシーケンス（ロングシーケンスモードは5キー）、3キーを1秒見せてから隠す記憶モード、そして押してはいけないフェイク表示が混ざって出ます。キーはA〜Z、0〜9、Space、Shift、Ctrl、Alt、Tab、Enter、記号、F1〜F6、矢印キーです。',
      },
    },
    {
      '@type': 'Question',
      name: 'スコアの仕組みは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '正しく入力すると120点 × コンボ倍率、シーケンスは1.4倍、記憶モードは1.8倍です。フェイク表示を最後まで押さなければ+200点。違うキーを押す、フェイクに反応する、制限時間を過ぎるとコンボがリセットされます。セッションは60秒固定です。',
      },
    },
    {
      '@type': 'Question',
      name: '難易度と制限時間は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '初期設定のアダプティブでは1表示あたり約1.8秒から始まり、連続正解で短く（最短約0.8秒）、ミスで長くなります。固定難易度はEasy 1.5倍、Medium 1.0倍、Hard 0.75倍、Expert 0.55倍の時間です。',
      },
    },
    {
      '@type': 'Question',
      name: 'VALORANTやLoLのキー配置で練習できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい。Valorant、CS2、Fortnite、Minecraft、League of Legends、Apex Legendsのプリセットを選ぶと、そのゲームの初期キー配置だけが出題されます。各ゲームの公式ツールではありません。',
      },
    },
    {
      '@type': 'Question',
      name: 'キーボードテストやタイピング練習として使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'いいえ。すべてのキーが反応するか確かめるキーボードテスターでも、文章を打つタイピングテストでもありません。キーは物理的な位置で判定され、記号キーはUS配列の位置で表示されるため、JIS配列では刻印と異なる記号があります。',
      },
    },
    {
      '@type': 'Question',
      name: 'スマホでもできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '物理キーボードが必要です。タッチ操作だけの端末では開始できません。タブレットはBluetoothキーボードをつなげば遊べます。',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'ja-JP',
  dateModified: '2026-11-09',
  name: 'キーボード反応速度テストのやり方',
  description: '表示されたキーに反応し、フェイクでは止まる60秒の練習手順。',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'モードとプリセットを選ぶ',
      text: 'モード、難易度、必要ならゲームのプリセットを選び、左手をいつものキー位置に置きます。',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '画面の表示を見る',
      text: 'キーボードを見ずに、画面中央に出るキーを確認します。',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '押すか、我慢するか',
      text: '本物の表示は制限時間内に押し、フェイク表示は消えるまで何も押しません。',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: '結果を確認',
      text: '60秒後に平均反応時間、正確さ、KPM、最大コンボを確認します。',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('donders1868', 'hick1952', 'logan1984', 'sternberg1966'),
  intro: {
    title: 'キーボード反応速度テストとは',
    paragraphs: [
      'キーボード反応速度テストは、複数のキーの中から画面に出たひとつを選んで押す選択反応の課題です（Donders, 1868）。選べるキーが多いほど反応は遅くなり（Hick, 1952）、フェイク表示で止まるのは反応抑制の練習です（Logan, 1984）。',
      '反応時間はブラウザのタイマー、モニターのリフレッシュレート、キーボードによって変わるので、同じ機器で自分の記録の変化を比べてください。',
    ],
  },
  benchmark: {
    title: 'ドリルのランク基準',
    description: '結果のランクは、このドリルのコードで決められたスコアと正確さの基準で決まります。研究上の基準、ユーザー統計、パーセンタイルではありません。',
    columns: ['ランク', 'スコア', '正確さ'],
    rows: [
      { grade: 'S+', score: '3,500+', accuracy: '95%+' },
      { grade: 'S', score: '2,200+', accuracy: '90%+' },
      { grade: 'A', score: '1,400+', accuracy: '85%+' },
      { grade: 'B', score: '700+', accuracy: '80%+' },
      { grade: 'C', score: '300+', accuracy: '75%+' },
      { grade: 'D', score: '100+', accuracy: '65%+' },
    ],
  },
  protocols: {
    title: '練習のコツ',
    description: 'ミスを減らして記録を伸ばすポイント。',
    items: [
      {
        title: 'キーをエリアで覚える',
        description: '移動（WASD）、スキル（Q、E、C、X）、数字列（1〜4）のようにエリアで覚えると、表示を見てから指を選ぶ時間が減ります。',
      },
      {
        title: 'フェイクで止まる',
        description: '確認する前に押すクセがあるとコンボがすぐ切れます。表示の種類を見てから押しましょう。',
      },
      {
        title: 'シーケンスはまとめて入力',
        description: '2〜5キーのシーケンスは1キーずつ読まず、ひとまとまりで覚えて続けて押します（Sternberg, 1966）。',
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
  title: 'キーボード反応速度テスト',
  subtitle: '画面に表示されたキーを押すゲーム向けキー配置の反応練習',
};

export default function JapaneseKeyboardRecognitionPage() {
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
      <KeyboardRecognitionClient copy={jaCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
