import StrobePredictionPursuitClient from '@/app/drills/visual-tracking/strobe-prediction-pursuit/StrobePredictionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/strobe-prediction-pursuit';
const title = "ストロボ視覚トレーニング｜点滅する標的の予測練習 | SkillDrills";
const description = "ストロボ視覚トレーニングは、画面の端で跳ね返りながら動き、一定の間隔で消える標的を目で追う無料ブラウザ練習。消えている間の位置を予測します。";

export const metadata = {
  title,
  description,
  keywords: ["ストロボ視覚トレーニング", "ストロボ トレーニング", "点滅 標的 予測", "視線追従 練習", "眼球運動 トレーニング", "目で追う ゲーム"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/strobe-prediction-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "ストロボ視覚トレーニング", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "ストロボ視覚トレーニング",
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
  name: "ストロボ視覚トレーニング",
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
  name: "ストロボ視覚トレーニング",
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
  name: "ストロボ視覚トレーニングのやり方",
  description: "点滅して隠れる標的の位置を予測しながら目で追う4ステップの練習方法です。",
  step: [
    { '@type': 'HowToStep', position: 1, name: "設定を選ぶ", text: "最初は60秒・1.0倍・ガイド線表示（輪郭あり）から始めます。", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "動きをつかむ", text: "標的が見えている間に、進む向きと速さを目で追います。", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "消えている間も追う", text: "標的が消えても、進んでいるはずの方向へ視線を動かし続けます。", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "少しずつ難しくする", text: "慣れたら速度を上げるか、輪郭の非表示・ランダム速度を1つずつ加えます。", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "ストロボ視覚トレーニングとは何ですか？", a: "画面の端で跳ね返りながら直線的に動く1つの標的を目で追う練習です。標的は周期の約3分の2は表示され、残り約3分の1は消えます。消えている間も動き続けるので、再び現れる位置を予測しながら追います。" },
  { q: "消えている間、標的はどうなっていますか？", a: "同じ速さと向きで動き続けます。ガイド線が表示の設定では、消えている間も薄い輪郭が位置を示します。ガイド線を非表示にすると輪郭も消え、予測だけで追うことになります。" },
  { q: "点滅の速さは変わりますか？", a: "点滅の周期は描画フレーム単位で数えられ、速度倍率を上げると短くなります。速度を上げると、標的の動きと点滅の両方が速くなります。" },
  { q: "ストロボメガネを使ったトレーニングと同じですか？", a: "違います。ストロボメガネの研究（Appelbaum et al., 2011 など）は視界全体を断続的に遮る器具を使いますが、このドリルは画面上の1つの標的が消えたり現れたりするだけです。研究の結果がこの練習にそのまま当てはまるわけではありません。" },
  { q: "光の点滅が苦手な場合は？", a: "画面全体が光るフラッシュではなく、標的1つが消えたり現れたりする点滅です。それでも光の点滅で体調を崩したことがある場合は使用せず、気分が悪くなったらすぐに中止してください。" },
  { q: "目の動きを測定しますか？", a: "いいえ。ブラウザは視線の位置を検出できず、分かるのは標的を描いた位置と設定だけです。クリックやタッチ操作も不要で、結果は自分で振り返る練習記録です。" },
  { q: "スコアや判定はありますか？", a: "ありません。終了後に表示されるのは練習時間、速度倍率、ランダム速度の有無、累計セッション数（このブラウザに保存）だけです。見失った回数を数えたい場合は自分でメモしてください。" },
  { q: "どんな設定を変えられますか？", a: "時間は30・45・60・90・120秒、速度倍率は0.5〜9.0倍、標的サイズは10〜50pxから選べます。ほかにガイド線（消えている間の輪郭）の非表示、ランダム速度、残像トレイル、発光、走査線、昼/夜の背景、標的の色を切り替えられます。Escキーでいつでも終了できます。" },
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
  heading: "ストロボ視覚トレーニングのガイド",
  intro: [
    "ストロボ視覚トレーニングは、画面の端で跳ね返りながら直線的に動く標的が一定の間隔で消える中、その位置を予測して目で追う無料のブラウザ練習です。標的は周期の約3分の2は見え、約3分の1は隠れます。",
    "消えている間も標的は同じ向きと速さで進み続けます。初期設定では薄い輪郭が位置を示し、ガイド線を非表示にすると輪郭も消えます。スタートを押すと3・2・1のカウントダウンの後、選んだ時間（30〜120秒、初期値60秒）だけ標的が動き続けます。クリックやキー操作は不要で、スコアもありません。",
    "ブラウザは視線の位置を記録できません。結果は視力や注意力の検査値ではなく、自分で振り返る練習記録として扱ってください。ストロボメガネのように視界全体を遮る器具とも異なります。",
    "比べるときは同じ画面と距離で行い、リフレッシュレートや表示遅延も見え方に影響することを覚えておいてください（Woods et al., 2015）。痛み、めまい、吐き気、かすみが続く場合は中止してください。"
  ],
  benchmarks: {
    title: "練習ステップの目安",
    headers: ["ステップ", "設定", "練習の目標"],
    rows: [
      ["1", "1.0倍・輪郭表示", "消える前の向きと速さをつかむ"],
      ["2", "1.0〜2.0倍", "再表示の位置で遅れずに追う"],
      ["3", "2.0倍以上", "速い点滅でも予測を続ける"],
      ["4", "ガイド線非表示", "完全に消えた区間を予測で追う"],
      ["5", "ランダム速度", "速さが変わっても予測を合わせる"]
    ],
    note: "SkillDrillsの練習段階の目安です。視機能検査の基準、利用者統計、パーセンタイルではありません。",
  },
  techniques: {
    title: "練習のコツ",
    items: [
      { name: "見えている間に向きをつかむ", desc: "標的が見えている区間で、進む向きと速さを意識しておきます。", tips: "壁の近くで消えたときは、跳ね返った後の向きを予測します。" },
      { name: "消えても目を止めない", desc: "標的が消えても視線を止めず、進んでいるはずの方向へゆっくり動かし続けます。", tips: "再び現れた位置と自分の予測のずれを確認します。" },
      { name: "輪郭は段階的に外す", desc: "まず輪郭ありで慣れ、楽になってからガイド線を非表示にして輪郭も消します。", tips: "1回に変える設定は1つだけにします。" },
      { name: "短く区切って休む", desc: "5〜10分程度で区切り、まばたきをして遠くを見て目を休めます。長くやるほど良いわけではありません。", tips: "痛みやめまいがあればすぐにやめます。" }
    ],
  },
  steps: [
    { title: "設定を選ぶ", text: "最初は60秒・1.0倍・ガイド線表示（輪郭あり）から始めます。" },
    { title: "動きをつかむ", text: "標的が見えている間に、進む向きと速さを目で追います。" },
    { title: "消えている間も追う", text: "標的が消えても、進んでいるはずの方向へ視線を動かし続けます。" },
    { title: "少しずつ難しくする", text: "慣れたら速度を上げるか、輪郭の非表示・ランダム速度を1つずつ加えます。" }
  ],
  audience: "見えなくなった標的の位置を予測しながら追う練習を、ゲーム感覚で試したい人。",
  faqs,
  sources: pickSources('appelbaum2011', 'mitroff2013', 'smith2016', 'bennett2007', 'appelbaum2012', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/predictive-pursuit", label: "偏差エイム練習・遮蔽軌道予測テスト" },
    { href: "/ja/drills/visual-tracking/ghosting-suppress-pursuit", label: "残像抑制アイパシュート訓練" },
    { href: "/ja/drills/visual-tracking/sine-wave-pursuit", label: "サイン波眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/spatial-shift-pursuit", label: "視界ブレ・空間シフト追跡テスト" },
    { href: "/ja/drills/visual-tracking/split-screen-tracking", label: "画面分割アイトラッキング" }
  ],
};

export default function StrobePredictionPursuitJaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StrobePredictionPursuitClient
        copy={{
          title: "ストロボ視覚トレーニング",
          subtitle: "点滅して隠れる標的を予測して追う",
          description: "ストロボ視覚トレーニングは、一定の間隔で消える標的の位置を予測しながら目で追う練習です。ブラウザは視線を記録しないため、結果は検査ではなく練習記録として見てください。",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
