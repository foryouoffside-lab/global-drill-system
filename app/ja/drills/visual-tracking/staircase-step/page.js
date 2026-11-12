import StaircaseStepClient from '@/app/drills/visual-tracking/staircase-step/StaircaseStepClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/staircase-step';
const title = "上下視線追従トレーニング｜動体視力ドリル | SkillDrills";
const description = "上下視線追従トレーニングは、左右に折り返しながら画面の上から下へ段々に進み、また上へ戻る標的を目で追う無料ブラウザ練習。速度と時間を調整できます。";

export const metadata = {
  title,
  description,
  keywords: ["上下視線追従トレーニング", "垂直 視線追従", "眼球運動 トレーニング", "目で追う 練習", "視線 トレーニング ブラウザ", "アイトラッキング 練習"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/staircase-step') },
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
    { '@type': 'ListItem', position: 3, name: "上下視線追従トレーニング", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "上下視線追従トレーニング",
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
  name: "上下視線追従トレーニング",
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
  name: "上下視線追従トレーニング",
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
  name: "上下視線追従トレーニングのやり方",
  description: "段々に上下する経路を進む標的を目で追う4ステップの練習方法です。",
  step: [
    { '@type': 'HowToStep', position: 1, name: "設定を選ぶ", text: "最初は60秒・1.0倍・ガイド線表示から始めます。", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "姿勢を整える", text: "画面から楽な距離に座り、頭を正面に保ちます。", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "目だけで追う", text: "左右の折り返しと段々の下り・上りを、標的から目を離さずに追います。", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "少しずつ難しくする", text: "慣れたら速度を上げるか、ガイド線の非表示・ランダム速度を1つずつ加えます。", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "上下視線追従トレーニングとは何ですか？", a: "標的が左右に折り返しながら画面の上（高さ約15%）から下（約85%）へ段々に下りていき、下端に着くと同じ道を上へ戻ります。この往復を目で追う無料のブラウザ練習で、クリックは不要です。" },
  { q: "標的はどんな経路を動きますか？", a: "8つの点を結んだジグザグの線で、左右に7回折り返しながら少しずつ下がっていきます。1.0倍では片道およそ4.5秒で、速度倍率を上げるとその分速くなります。" },
  { q: "上下の動きは左右の動きより追いにくいですか？", a: "同じ人でも上下方向の追従は左右方向より精度が落ちやすいという研究があります（Rottach et al., 1996）。このドリルはそれを測定するものではありませんが、下りと上りで追いやすさが違うかを自分で比べることはできます。" },
  { q: "折り返しで標的を見失うのはなぜですか？", a: "折り返しでは動く向きが急に変わるため、目の動きが一瞬遅れやすくなります。滑らかな追従は標的が動き始めてから少し遅れて始まることが知られています（Lisberger, 2010）。速度を下げ、ガイド線を表示して角の位置を先に意識してください。" },
  { q: "ガイド線を非表示にすると何が変わりますか？", a: "ジグザグの経路線が消えます。標的の動きは同じですが、次の折り返し位置を自分で予測する必要があります。" },
  { q: "目の動きを測定しますか？", a: "いいえ。ブラウザは視線の位置を検出できず、分かるのは標的を描いた位置と設定だけです。クリックやタッチ操作も不要で、結果は自分で振り返る練習記録です。" },
  { q: "スコアや判定はありますか？", a: "ありません。終了後に表示されるのは練習時間、速度倍率、ランダム速度の有無、累計セッション数（このブラウザに保存）だけです。見失った回数を数えたい場合は自分でメモしてください。" },
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
  heading: "上下視線追従トレーニングのガイド",
  intro: [
    "上下視線追従トレーニングは、左右に折り返しながら画面の上から下へ段々に下り、下端で向きを変えて上へ戻る標的を目で追う無料のブラウザ練習です。経路は8つの点を結んだジグザグ線で、左右の幅は画面の約6割です。",
    "スタートを押すと3・2・1のカウントダウンの後、選んだ時間（30〜120秒、初期値60秒）だけ標的が動き続けます。クリックやキー操作は不要で、スコアもありません。1.0倍では片道およそ4.5秒です。",
    "ブラウザは視線の位置を記録できません。結果は視力や注意力の検査値ではなく、自分で振り返る練習記録として扱ってください。",
    "比べるときは同じ画面と距離で行い、リフレッシュレートや表示遅延も見え方に影響することを覚えておいてください（Woods et al., 2015）。痛み、めまい、吐き気、かすみが続く場合は中止してください。"
  ],
  benchmarks: {
    title: "練習ステップの目安",
    headers: ["ステップ", "設定", "練習の目標"],
    rows: [
      ["1", "1.0倍・ガイド線表示", "下りと上りの経路を覚える"],
      ["2", "1.0〜2.0倍", "折り返しで遅れずに追う"],
      ["3", "2.0倍以上", "速い往復でも標的から目を離さない"],
      ["4", "ガイド線非表示", "次の折り返し位置を予測する"],
      ["5", "ランダム速度", "速さが変わっても追い続ける"]
    ],
    note: "SkillDrillsの練習段階の目安です。視機能検査の基準、利用者統計、パーセンタイルではありません。",
  },
  techniques: {
    title: "練習のコツ",
    items: [
      { name: "頭を動かさない", desc: "首や頭で追うと目の練習になりにくくなります。頭は正面に保ち、目だけで標的を追います。", tips: "肩と首の力を抜いた楽な姿勢で座ります。" },
      { name: "折り返しを先に意識する", desc: "標的は経路の角で急に向きを変えます。角が近づいたら次の方向を意識しておきます。", tips: "見失ったら無理に追わず、次の角で合わせ直します。" },
      { name: "下りと上りを比べる", desc: "下る区間と上る区間で追いやすさが違うかを確認します。", tips: "気づいたことはメモし、同じ設定で比べます。" },
      { name: "短く区切って休む", desc: "5〜10分程度で区切り、まばたきをして遠くを見て目を休めます。長くやるほど良いわけではありません。", tips: "痛みやめまいがあればすぐにやめます。" }
    ],
  },
  steps: [
    { title: "設定を選ぶ", text: "最初は60秒・1.0倍・ガイド線表示から始めます。" },
    { title: "姿勢を整える", text: "画面から楽な距離に座り、頭を正面に保ちます。" },
    { title: "目だけで追う", text: "左右の折り返しと段々の下り・上りを、標的から目を離さずに追います。" },
    { title: "少しずつ難しくする", text: "慣れたら速度を上げるか、ガイド線の非表示・ランダム速度を1つずつ加えます。" }
  ],
  audience: "上下方向に進む動きを目で追う練習を、ゲーム感覚で試したい人。",
  faqs,
  sources: pickSources('rottach1996', 'collewijn1984', 'ke2013', 'buttner1997', 'lisberger2010', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/split-screen-tracking", label: "画面分割アイトラッキング" },
    { href: "/ja/drills/visual-tracking/sine-wave-pursuit", label: "サイン波眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/directional-chaos-pursuit", label: "不規則方向変化・急制動追跡テスト" },
    { href: "/ja/drills/visual-tracking/predictive-pursuit", label: "偏差エイム練習・遮蔽軌道予測テスト" },
    { href: "/ja/drills/visual-tracking/constant-slow-pursuit", label: "滑動性追従・基礎アイエクササイズ" }
  ],
};

export default function StaircaseStepJaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StaircaseStepClient
        copy={{
          title: "上下視線追従トレーニング",
          subtitle: "垂直追従と標的再捕捉の練習",
          description: "上下視線追従トレーニングは、左右に折り返しながら上下に進む標的を目で追う練習です。ブラウザは視線を記録しないため、結果は検査ではなく練習記録として見てください。",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
