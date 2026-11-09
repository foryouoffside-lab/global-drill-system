import Link from 'next/link';
import KeyboardTesterClient from '@/app/drills/motor/movement-speed/keyboard-tester/KeyboardTesterClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';

const PAGE_URL = 'https://skilldrills.online/ja/drills/motor/movement-speed/keyboard-tester';
const TITLE = 'キーボードテスト｜全キーの入力をオンラインで確認 | SkillDrills';
const DESCRIPTION = '無料のオンラインキーボードテスト。キーを押して入力されるか確認し、event.keyとevent.code、同時押し（ゴースト・ロールオーバー）もチェックできます。日本語配列（JIS）対応で、インストールも登録も不要です。';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['キーボードテスト', 'キーボード テスト', 'キーボードテスト 日本語配列', 'キー入力 確認', '同時押し テスト', 'nキーロールオーバー 確認'],
  openGraph: {
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
  alternates: { canonical: PAGE_URL, languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-tester') },
};

const FAQS = [
  {
    q: 'このキーボードテストはどう使いますか？',
    a: '画面のキーボードをクリックしてフォーカスを合わせ、キーを1つずつ押してください。押している間はキーが明るく光り、離すと緑色のまま残ります。最後まで緑にならないキーは、入力がブラウザまで届いていません。カウンターには、配列上のキーのうちテスト済みの数が表示されます。',
  },
  {
    q: 'キーボードのゴースト（ゴースティング）とは？',
    a: 'ゴーストとは、すでに複数のキーを押しているときに、キーボードが特定のキーの入力を報告できない現象です。多くのキーボードはキー同士で配線を共有しているため、一部の組み合わせは同時に検出できません。確認するには、実際に使う組み合わせ（例：W、A、Shift）を同時に押し、すべてのキーが一緒に光るかを見てください。',
  },
  {
    q: 'Nキーロールオーバーとは？「最大同時押し」カウンターとの関係は？',
    a: 'ロールオーバーとは、キーボードが同時に報告できるキーの数です。Nキーロールオーバーは全キーを同時に報告できることを意味し、多くのキーボードはUSBで6キー、特定の組み合わせではそれ以下に制限されます。「最大同時押し」カウンターは、このページが同時に押されていると確認したキー数の最大値です。精密な測定ではなく簡易チェックで、ブラウザ、OS、そして指の本数によって表示できる値は制限されます。',
  },
  {
    q: 'ブラウザのキーボードテストで反応しないキーがあるのはなぜ？',
    a: '一部のキーはWebページに届く前に処理されます。WindowsキーやCommandキー、Fn、多くのメディアキーや明るさキー、Ctrl+W、Ctrl+T、Alt+F4などのショートカットはOSやブラウザが先に受け取ります。半角/全角、変換、無変換、カタカナ/ひらがなキーもIMEが先に処理するため、表示されないか、違う形で表示されることがあります。Print Screenはキーを離したときだけ報告されることが多いです。これらが光らなくても故障とは限らないので、デスクトップアプリで確認してください。',
  },
  {
    q: '日本語配列（JISキーボード）でも使えますか？',
    a: 'はい。キーは入力される文字ではなく物理的な位置（event.code）で照合されるため、JISキーボードの各キーも画面のキーボードに対応します。キーを押すと、実際に入力された値が最後のキー欄に表示されます。ただし図は米国ANSI配列なので、変換・無変換・かな・￥・ろ などJIS配列にしかないキーは図に載っていない場合があります。そのようなキーは最後のキー欄で確認してください。',
  },
  {
    q: 'event.key、event.code、keyCodeとは？',
    a: 'event.codeは物理的なキー（例：KeyA）を、event.keyは現在の配列と修飾キーの状態でそのキーが生んだ文字や動作（例：a、A、ち）を表します。keyCodeはブラウザがまだ報告している古い数値コードです。locationは左Shiftと右Shiftのような左右の区別や、テンキーかどうかを示します。',
  },
  {
    q: 'スマホやタブレットでも使えますか？',
    a: '物理キーボードを接続した場合のみ使えます。画面のタッチキーボードは物理キーコードを同じ方法で報告しないため、USBまたはBluetoothキーボードが必要です。',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: '運動制御トレーニング', item: 'https://skilldrills.online/ja/drills/motor' },
    { '@type': 'ListItem', position: 3, name: '動作速度', item: 'https://skilldrills.online/ja/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'キーボードテスト', item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'ja-JP',
  name: 'キーボードテスト',
  description: DESCRIPTION,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  browserRequirements: 'JavaScript対応ブラウザと物理キーボードが必要',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  url: PAGE_URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja-JP',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const guideProps = {
  intro: {
    title: 'キーボードテストで何がわかる？',
    paragraphs: [
      'キーボードテストは、キーボードの各キーがパソコンまで正しく入力されるかを表示します。キーを押すと図のキーが光り、離すとテスト済みとして残るので、反応しないキーや時々途切れるキーがすぐにわかります。複数のキーを同時に押せば、キーボードが同時に報告できるかを確認でき、ゴーストやキーロールオーバーの限界がここで見えます。',
      'このページにはタイマーもスコアもありません。ブラウザが受け取った情報（物理キーコード、入力された文字、位置、オートリピートかどうか）を表示するだけで、何も記録・送信しません。',
    ],
  },
  faqs: { title: 'キーボードテストのよくある質問', items: FAQS },
};

const copy = {
  h1: 'キーボードテスト｜全キーの入力をオンラインで確認',
  subtitle: 'キーを押して入力されるか確認し、複数のキーを同時に押してゴーストとキーロールオーバーをチェック',
  keysTested: 'テスト済みのキー',
  heldNow: '現在押しているキー',
  maxHeld: '最大同時押し',
  touchNote: 'このテストには物理キーボードが必要です。タッチキーボードは物理キーコードを報告しません。',
  ariaLabel: 'キーボードテスト。キーを押してテストします。外側をクリックするとキーボードのフォーカスが外れます。',
  listening: '入力待ち – 任意のキーを押してください',
  clickToStart: 'キーボードをクリックしてテストを開始',
  reset: 'リセット',
  legendPressed: '押下中',
  legendTested: 'テスト済み',
  legendUntested: '未入力',
  lastKey: '最後のキーイベント',
  noKeyYet: 'まだキーが押されていません。',
  note: 'キーは物理的な位置（event.code）で照合されるため、JIS、AZERTY、QWERTZなどの配列でも動作し、キーを押すと配列で入力された文字が表示されます。図は米国ANSI配列のため、変換・無変換・かな・￥などJIS配列にしかないキーは図に載っていない場合があります。一部のキーはWebページに届きません：Windows/Commandキーの組み合わせ、Fn、多くのメディアキー、Ctrl+WやAlt+F4などのショートカットはOSやブラウザが先に処理します。Print Screenはキーを離したときだけ報告されることが多いです。',
};

const jsonLd = [breadcrumbSchema, webApplicationSchema, faqSchema];
const linkClass = 'text-cyan-300 underline underline-offset-2 hover:text-white';

export default function JapaneseKeyboardTesterPage() {
  return (
    <>
      {jsonLd.map((s) => (
        <script key={s['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <KeyboardTesterClient copy={copy} />
      <section className="max-w-6xl mx-auto px-4 pb-2 text-sm text-slate-300 leading-relaxed">
        すべてのキーが正常なら、次は練習です。{' '}
        <Link href="/ja/drills/motor/movement-speed/keyboard-recognition" className={linkClass}>キーボード反応速度テスト</Link>は表示されたキーをどれだけ速く正確に押せるかを測り、{' '}
        <Link href="/ja/drills/motor/movement-speed/rapid-tapping" className={linkClass}>連打測定（CPSテスト）</Link>は1秒あたりのクリック数を測ります。
      </section>
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
