import TriangularPursuitClient from '@/app/drills/visual-tracking/triangular-pursuit/TriangularPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/triangular-pursuit';
const title = "三角形視線追従トレーニング | SkillDrills";
const description = "三角形視線追従トレーニングは、上・右下・左下の3つの角を順に回る標的を目で追う無料ブラウザ練習。角での急な方向転換に、速度と時間を調整して挑めます。";

export const metadata = {
  title,
  description,
  keywords: ["三角形視線追従トレーニング", "三角形 追従", "視線追従 練習", "眼球運動 トレーニング", "目で追う ゲーム", "アイトラッキング 練習"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/triangular-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "三角形視線追従トレーニング", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "三角形視線追従トレーニング",
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
  name: "三角形視線追従トレーニング",
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
  name: "三角形視線追従トレーニング",
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
  name: "三角形視線追従トレーニングのやり方",
  description: "三角形の経路を回る標的を目で追う4ステップの練習方法です。",
  step: [
    { '@type': 'HowToStep', position: 1, name: "設定を選ぶ", text: "最初は60秒・1.0倍・ガイド線表示から始めます。", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "姿勢を整える", text: "画面から楽な距離に座り、頭を正面に保ちます。", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "三角形を目で追う", text: "上・右下・左下の順に回る標的を、角でも目を離さずに追います。", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "少しずつ難しくする", text: "慣れたら速度を上げるか、ガイド線の非表示・ランダム速度を1つずつ加えます。", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "三角形視線追従トレーニングとは何ですか？", a: "画面の上中央、右下、左下を頂点とする三角形の上を、標的が同じ順番で回り続けます。斜めの2辺と水平な底辺を目で追い、角で向きが変わるたびに遅れずについていく練習です。クリックは不要です。" },
  { q: "標的の速さは一定ですか？", a: "各辺を同じ時間（1.0倍で約1.5秒）で進むため、辺の長さによって速さが少し変わります。横長の画面では底辺が最も長く、そこで最も速く動きます。速度倍率やランダム速度でも変わります。" },
  { q: "角で視線が遅れたり行き過ぎたりするのはなぜですか？", a: "角では動く向きが一瞬で変わるため、滑らかな追従だけでは追いつけず、素早い視線の跳び（キャッチアップサッカード）で位置を合わせ直すことがよくあります（de Brouwer et al., 2002）。速度を下げて角の手前で次の向きを意識してください。" },
  { q: "ガイド線を非表示にすると何が変わりますか？", a: "三角形の輪郭線が消えます。経路は同じですが、次の角の位置を自分で覚えて追う必要があります。" },
  { q: "目の動きを測定しますか？", a: "いいえ。ブラウザは視線の位置を検出できず、分かるのは標的を描いた位置、設定、ポインターの位置だけです。クリックやタッチ操作も不要で、結果は自分で振り返る練習記録です。" },
  { q: "スコアや判定はありますか？", a: "判定はありません。終了後には、ポインターが標的上にあった時間の割合、ポインターと標的中心の平均距離とRMS距離、練習時間、速度倍率、累計セッション数（このブラウザに保存）が表示されます。測っているのはポインターで、目の動きではありません。見失った回数を数えたい場合は自分でメモしてください。" },
  { q: "どんな設定を変えられますか？", a: "時間は30・45・60・90・120秒、速度倍率は0.5〜9.0倍、標的サイズは10〜50pxから選べます。ほかにガイド線（三角形の輪郭）の非表示、ランダム速度、残像トレイル、発光、走査線、昼/夜の背景、標的の色を切り替えられます。Escキーでいつでも終了できます。" },
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
  heading: "三角形視線追従トレーニングのガイド",
  intro: [
    "三角形視線追従トレーニングは、画面の上中央・右下・左下を結ぶ三角形の上を回り続ける標的を目で追う無料のブラウザ練習です。直線の区間と、角での急な方向転換が交互に来ます。",
    "標的は各辺を同じ時間（1.0倍で約1.5秒）で進むため、長い底辺ではやや速く動きます。スタートを押すと3・2・1のカウントダウンの後、選んだ時間（30〜120秒、初期値60秒）だけ標的が動き続けます。クリックやキー操作は不要です。終了後にはポインターと標的の距離が表示されますが、目の位置は記録しません。",
    "ブラウザは視線の位置を記録できません。結果は視力や注意力の検査値ではなく、自分で振り返る練習記録として扱ってください。",
    "比べるときは同じ画面と距離で行い、リフレッシュレートや表示遅延も見え方に影響することを覚えておいてください（Woods et al., 2015）。痛み、めまい、吐き気、かすみが続く場合は中止してください。"
  ],
  benchmarks: {
    title: "練習ステップの目安",
    headers: ["ステップ", "設定", "練習の目標"],
    rows: [
      ["1", "1.0倍・ガイド線表示", "3つの角の位置と回る順番をつかむ"],
      ["2", "1.0〜2.0倍", "角で遅れずに向きを変える"],
      ["3", "2.0倍以上", "速い周回でも標的から目を離さない"],
      ["4", "ガイド線非表示", "輪郭なしで次の角を予測する"],
      ["5", "ランダム速度", "速さが変わっても追い続ける"]
    ],
    note: "SkillDrillsの練習段階の目安です。視機能検査の基準、利用者統計、パーセンタイルではありません。",
  },
  techniques: {
    title: "練習のコツ",
    items: [
      { name: "直線区間は滑らかに", desc: "辺の途中では標的の中心を見て、目を滑らかに動かします。", tips: "頭や首は動かさず、目だけで追います。" },
      { name: "角の手前で次の向きを意識する", desc: "角が近づいたら次の辺の方向を意識しておくと、遅れや行き過ぎを減らしやすくなります。", tips: "見失ったら次の角で合わせ直します。" },
      { name: "底辺の速さに慣れる", desc: "底辺は他の2辺より長く、そのぶん速く動きます。", tips: "速さの違いに慣れてからランダム速度を加えます。" },
      { name: "短く区切って休む", desc: "5〜10分程度で区切り、まばたきをして遠くを見て目を休めます。長くやるほど良いわけではありません。", tips: "痛みやめまいがあればすぐにやめます。" }
    ],
  },
  steps: [
    { title: "設定を選ぶ", text: "最初は60秒・1.0倍・ガイド線表示から始めます。" },
    { title: "姿勢を整える", text: "画面から楽な距離に座り、頭を正面に保ちます。" },
    { title: "三角形を目で追う", text: "上・右下・左下の順に回る標的を、角でも目を離さずに追います。" },
    { title: "少しずつ難しくする", text: "慣れたら速度を上げるか、ガイド線の非表示・ランダム速度を1つずつ加えます。" }
  ],
  audience: "直線と急な方向転換が交互に来る動きを目で追う練習を、ゲーム感覚で試したい人。",
  faqs,
  sources: pickSources('debrouwer2002', 'heinen2005', 'orbandexivry2007', 'bennett2006', 'barnes2008', 'woods2015'),
};

export default function TriangularPursuitJaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TriangularPursuitClient
        copy={{
          title: "三角形視線追従トレーニング",
          subtitle: "斜め追従と頂点での再捕捉",
          description: "三角形視線追従トレーニングは、三角形の角を順に回る標的を目で追う練習です。ブラウザは視線を記録しないため、結果は検査ではなく練習記録として見てください。",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
