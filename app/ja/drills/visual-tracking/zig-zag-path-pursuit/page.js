import ZigZagPathPursuitClient from '@/app/drills/visual-tracking/zig-zag-path-pursuit/ZigZagPathPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/zig-zag-path-pursuit';
const title = "ジグザグ視線追従トレーニング | SkillDrills";
const description = "ジグザグ視線追従トレーニングは、上下に大きく折り返しながら左から右へ進み、また戻ってくる標的を目で追う無料ブラウザ練習。速度と時間を調整できます。";

export const metadata = {
  title,
  description,
  keywords: ["ジグザグ視線追従トレーニング", "ジグザグ 追従", "視線追従 練習", "眼球運動 トレーニング", "目で追う ゲーム", "アイトラッキング 練習"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/zig-zag-path-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ja_JP', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills ホーム", item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: "視覚追従・アイトラッキング", item: 'https://skilldrills.online/ja/drills/visual-tracking' },
    { '@type': 'ListItem', position: 3, name: "ジグザグ視線追従トレーニング", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "ジグザグ視線追従トレーニング",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ja' },
  inLanguage: 'ja',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "ジグザグ視線追従トレーニング",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "HTML5 Canvas対応の最新ブラウザ",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'ja',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: "ジグザグ視線追従トレーニング",
  url,
  description,
  genre: ['Casual Game', 'Educational Game'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'ja',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "ジグザグ視線追従トレーニングのやり方",
  description: "ジグザグの経路を往復する標的を目で追う4ステップの練習方法です。",
  step: [
    { '@type': 'HowToStep', position: 1, name: "設定を選ぶ", text: "最初は60秒・1.0倍・ガイド線表示から始めます。", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "姿勢を整える", text: "画面から楽な距離に座り、頭を正面に保ちます。", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "ジグザグを目で追う", text: "上下の切り返しを繰り返しながら進む標的を、目を離さずに追います。", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "少しずつ難しくする", text: "慣れたら速度を上げるか、ガイド線の非表示・ランダム速度を1つずつ加えます。", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "ジグザグ視線追従トレーニングとは何ですか？", a: "標的が画面の上側（高さ約20%）と下側（約80%）の間を7回折り返しながら左端から右端へ進み、右端に着くと同じ道を戻ります。この往復を目で追う無料のブラウザ練習で、クリックは不要です。" },
  { q: "三角形視線追従トレーニングとの違いは？", a: "三角形は同じ3つの角を一方向に回り続けますが、ジグザグは急な上下の切り返しが短い間隔で続き、端に着くと進む向きそのものが逆になります。1.0倍では片道およそ4.5秒です。" },
  { q: "上下視線追従トレーニングとの違いは？", a: "上下視線追従トレーニングは左右に折り返しながら上から下へ進みます。ジグザグ視線追従トレーニングは上下に折り返しながら左から右へ進むため、各区間の動きはほぼ縦方向になります。" },
  { q: "切り返しで視線が飛び出すのはなぜですか？", a: "切り返しでは向きが急に変わるため、滑らかな追従だけでは追いつけず、素早い視線移動で合わせ直すことがよくあります（de Brouwer et al., 2002）。速度を下げ、ガイド線を表示した状態で角の位置を意識してください。" },
  { q: "ガイド線を非表示にすると何が変わりますか？", a: "ジグザグの経路線が消えます。標的の動きは同じですが、次の折り返し位置を自分で予測する必要があります。" },
  { q: "目の動きを測定しますか？", a: "いいえ。ブラウザは視線の位置を検出できず、分かるのは標的を描いた位置、設定、ポインターの位置だけです。クリックやタッチ操作も不要で、結果は自分で振り返る練習記録です。" },
  { q: "スコアや判定はありますか？", a: "判定はありません。終了後には、ポインターが標的上にあった時間の割合、ポインターと標的中心の平均距離とRMS距離、練習時間、速度倍率、累計セッション数（このブラウザに保存）が表示されます。測っているのはポインターで、目の動きではありません。見失った回数を数えたい場合は自分でメモしてください。" },
  { q: "どんな設定を変えられますか？", a: "時間は30・45・60・90・120秒、速度倍率は0.5〜9.0倍、標的サイズは10〜50pxから選べます。ほかにガイド線（ジグザグの経路）の非表示、ランダム速度、残像トレイル、発光、走査線、昼/夜の背景、標的の色を切り替えられます。Escキーでいつでも終了できます。" },
  { q: "視力やゲームのエイムは良くなりますか？", a: "保証はできません。これは動く標的を目で追う練習で、視力の改善、目の病気の治療、FPSでのエイム向上を約束するものではありません。目の不調があれば眼科を受診してください。" },
  { q: "画面環境は結果に影響しますか？", a: "リフレッシュレート、明るさ、コントラスト、画面サイズや距離によって標的の見え方は変わります（Woods et al., 2015）。比べるときは同じ画面・同じブラウザ・同じ設定で行ってください。" },
  { q: "どれくらい練習すればよいですか？", a: "60秒前後のセッションを数回、合計5〜10分程度の短いブロックで行い、間に休憩を入れてください。目の疲れ・乾き・痛み・めまい・吐き気・頭痛があればすぐ中止します。" }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guide = {
  heading: "ジグザグ視線追従トレーニングのガイド",
  intro: [
    "ジグザグ視線追従トレーニングは、画面の上側と下側の間を折り返しながら左端から右端へ進み、右端で向きを変えて同じ道を戻る標的を目で追う無料のブラウザ練習です。経路は8つの点を結んだ線で、急な切り返しが7回続きます。",
    "スタートを押すと3・2・1のカウントダウンの後、選んだ時間（30〜120秒、初期値60秒）だけ標的が動き続けます。クリックやキー操作は不要です。終了後にはポインターと標的の距離が表示されますが、目の位置は記録しません。1.0倍では片道およそ4.5秒です。",
    "ブラウザは視線の位置を記録できません。結果は視力や注意力の検査値ではなく、自分で振り返る練習記録として扱ってください。",
    "比べるときは同じ画面と距離で行い、リフレッシュレートや表示遅延も見え方に影響することを覚えておいてください（Woods et al., 2015）。痛み、めまい、吐き気、かすみが続く場合は中止してください。"
  ],
  benchmarks: {
    title: "練習ステップの目安",
    headers: ["ステップ", "設定", "練習の目標"],
    rows: [
      ["1", "1.0倍・ガイド線表示", "折り返しの位置とリズムをつかむ"],
      ["2", "1.0〜2.0倍", "切り返しで遅れずに追う"],
      ["3", "2.0倍以上", "速い往復でも標的から目を離さない"],
      ["4", "ガイド線非表示", "次の折り返しを予測する"],
      ["5", "ランダム速度", "速さが変わっても追い続ける"]
    ],
    note: "SkillDrillsの練習段階の目安です。視機能検査の基準、利用者統計、パーセンタイルではありません。",
  },
  techniques: {
    title: "練習のコツ",
    items: [
      { name: "頭を動かさない", desc: "上下の動きが大きいので、頭でうなずくように追いがちです。頭は正面に保ち、目だけで追います。", tips: "肩と首の力を抜きます。" },
      { name: "切り返しを先に意識する", desc: "次の折り返しが近づいたら、反対方向への動きを意識しておきます。", tips: "見失ったら無理に追わず、次の区間で合わせ直します。" },
      { name: "端での向きの反転に備える", desc: "右端・左端に着くと、進む方向そのものが逆になります。", tips: "端が近づいたら戻りの経路を思い浮かべます。" },
      { name: "短く区切って休む", desc: "5〜10分程度で区切り、まばたきをして遠くを見て目を休めます。長くやるほど良いわけではありません。", tips: "痛みやめまいがあればすぐにやめます。" }
    ],
  },
  steps: [
    { title: "設定を選ぶ", text: "最初は60秒・1.0倍・ガイド線表示から始めます。" },
    { title: "姿勢を整える", text: "画面から楽な距離に座り、頭を正面に保ちます。" },
    { title: "ジグザグを目で追う", text: "上下の切り返しを繰り返しながら進む標的を、目を離さずに追います。" },
    { title: "少しずつ難しくする", text: "慣れたら速度を上げるか、ガイド線の非表示・ランダム速度を1つずつ加えます。" }
  ],
  audience: "上下の急な切り返しが続く動きを目で追う練習を、ゲーム感覚で試したい人。",
  faqs,
  sources: pickSources('debrouwer2002', 'heinen2005', 'orbandexivry2007', 'krauzlis2004', 'barnes2008', 'woods2015'),
};

export default function ZigZagPathPursuitJaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ZigZagPathPursuitClient
        copy={{
          title: "ジグザグ視線追従トレーニング",
          subtitle: "上下の急な切り返しを目で追う",
          description: "ジグザグ視線追従トレーニングは、上下に折り返しながら左右に進む標的を目で追う練習です。ブラウザは視線を記録しないため、結果は検査ではなく練習記録として見てください。",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
