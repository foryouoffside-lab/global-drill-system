import SplitScreenTrackingClient from '@/app/drills/visual-tracking/split-screen-tracking/SplitScreenTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/split-screen-tracking';
const title = "画面分割追視トレーニング｜分割注意力ドリル | SkillDrills";
const description = "画面分割追視トレーニングは、左半分で上下、右半分で左右に動く2つの標的を同時に目で追う無料ブラウザ練習。速度と時間を調整して試せます。";

export const metadata = {
  title,
  description,
  keywords: ["画面分割追視トレーニング", "分割注意力 トレーニング", "2つの標的 同時 追視", "視線追従 練習", "周辺視 練習", "目で追う ゲーム", "眼球運動 トレーニング"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/split-screen-tracking') },
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
    { '@type': 'ListItem', position: 3, name: "画面分割追視トレーニング", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "画面分割追視トレーニング",
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
  name: "画面分割追視トレーニング",
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
  name: "画面分割追視トレーニング",
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
  name: "画面分割追視トレーニングのやり方",
  description: "左右で別々に動く2つの標的を同時に目で追う4ステップの練習方法です。",
  step: [
    { '@type': 'HowToStep', position: 1, name: "設定を選ぶ", text: "時間、速度倍率、標的サイズを選びます。最初は60秒・1.0倍・ガイド線表示がおすすめです。", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "中央に視線を置く", text: "画面から楽な距離に座り、肩と首の力を抜いて画面中央付近を見ます。", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "左右を同時に追う", text: "左の上下運動と右の左右運動を、どちらも見失わないよう目で追います。", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "少しずつ難しくする", text: "楽に追えるようになったら、速度を上げるかガイド線の非表示・ランダム速度を1つずつ加えます。", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "画面分割追視トレーニングとは何ですか？", a: "画面を中央で左右に分け、左側では標的が上下に、右側では標的が中央の高さを左右に往復します。この2つを同時に見失わないよう目で追う無料のブラウザ練習です。クリックは不要で、見ることに集中します。" },
  { q: "2つの標的を同時に見ることはできますか？", a: "視線を同時に2か所へ向けることはできません。画面中央に視線を置いて左右を周辺視で捉える方法と、視線を交互に移す方法があり、どちらが合うかは人によって異なります。複数の動く対象に注意を分けて追う研究（Pylyshyn & Storm, 1988; Alvarez & Cavanagh, 2005）がありますが、このドリルはその実験を再現・測定するものではありません。" },
  { q: "左右の標的の折り返しが揃わないのはなぜですか？", a: "左の標的は縦方向、右の標的は横方向に、それぞれ違う距離を同じ速さで往復するためです。2つのリズムが別々に進むので、片方に合わせるともう片方を見失いやすくなります。" },
  { q: "ガイド線を非表示にすると何が変わりますか？", a: "中央の仕切り線と、左右の移動軸を示す薄い線が消えます。標的の動き自体は変わりませんが、目印がなくなるため位置を見失いやすくなります。慣れてから試してください。" },
  { q: "片方の標的ばかり見失うときは？", a: "速度を下げ、ガイド線を表示した状態で、見失いやすい側を意識して練習してください。どちらを見失ったかはドリルでは記録されないので、気づいたことを自分でメモし、同じ設定で比べます。" },
  { q: "目の動きを測定しますか？", a: "いいえ。ブラウザは視線の位置を検出できず、分かるのは標的を描いた位置、設定、ポインターの位置だけです。クリックやタッチ操作も不要で、結果は自分で振り返る練習記録です。" },
  { q: "スコアや判定はありますか？", a: "判定はありません。終了後には、ポインターが標的上にあった時間の割合、ポインターと標的中心の平均距離とRMS距離、練習時間、速度倍率、累計セッション数（このブラウザに保存）が表示されます。測っているのはポインターで、目の動きではありません。見失った回数を数えたい場合は自分でメモしてください。" },
  { q: "どんな設定を変えられますか？", a: "時間は30・45・60・90・120秒、速度倍率は0.5〜9.0倍、標的サイズは10〜50pxから選べます。ほかにガイド線（中央の仕切り線と移動軸）の非表示、ランダム速度、残像トレイル、発光、走査線、昼/夜の背景、標的の色を切り替えられます。Escキーでいつでも終了できます。" },
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
  heading: "画面分割追視トレーニングのガイド",
  intro: [
    "画面分割追視トレーニングは、画面の左右で同時に動く2つの標的を目で追う無料のブラウザ練習です。左半分の標的は上下に、右半分の標的は中央の高さを左右に往復し、端で折り返します。",
    "スタートを押すと3・2・1のカウントダウンの後、選んだ時間（30〜120秒、初期値60秒）だけ標的が動き続けます。クリックやキー操作は不要です。終了後にはポインターと標的の距離が表示されますが、目の位置は記録しません。速度倍率、標的サイズ、ガイド線、ランダム速度を変えて難しさを調整します。",
    "ブラウザは視線の位置を記録できません。結果は視力や注意力の検査値ではなく、自分で振り返る練習記録として扱ってください。",
    "比べるときは同じ画面と距離で行い、リフレッシュレートや表示遅延も見え方に影響することを覚えておいてください（Woods et al., 2015）。痛み、めまい、吐き気、かすみが続く場合は中止してください。"
  ],
  benchmarks: {
    title: "練習ステップの目安",
    headers: ["ステップ", "設定", "練習の目標"],
    rows: [
      ["1", "1.0倍・ガイド線表示", "2つの標的の往復リズムをつかむ"],
      ["2", "1.0〜2.0倍", "60秒間どちらも見失わない"],
      ["3", "2.0倍以上", "速くなっても左右に注意を分け続ける"],
      ["4", "ガイド線非表示", "目印なしで2つの位置を保つ"],
      ["5", "ランダム速度", "速さが変わっても追い続ける"]
    ],
    note: "SkillDrillsの練習段階の目安です。視機能検査の基準、利用者統計、パーセンタイルではありません。",
  },
  techniques: {
    title: "練習のコツ",
    items: [
      { name: "視線は中央、注意は左右", desc: "片方の標的を凝視すると反対側を見失いやすくなります。中央付近に視線を置き、左右の動きを同時に意識してみてください。", tips: "つらく感じたら速度を下げ、ガイド線を表示に戻します。" },
      { name: "2つのリズムを分けて捉える", desc: "左は上下、右は左右と、方向も往復距離も違うため折り返しのタイミングがずれます。それぞれを別のリズムとして捉えます。", tips: "片方が折り返す瞬間に、もう片方の位置を確認してみます。" },
      { name: "難しさは1つずつ上げる", desc: "速度、ガイド線の非表示、ランダム速度は同時に変えず、1つずつ追加します。", tips: "設定を変えたら、比較は同じ設定同士で行います。" },
      { name: "短く区切って休む", desc: "5〜10分程度で区切り、まばたきをして遠くを見て目を休めます。長くやるほど良いわけではありません。", tips: "痛みやめまいがあればすぐにやめます。" }
    ],
  },
  steps: [
    { title: "設定を選ぶ", text: "時間、速度倍率、標的サイズを選びます。最初は60秒・1.0倍・ガイド線表示がおすすめです。" },
    { title: "中央に視線を置く", text: "画面から楽な距離に座り、肩と首の力を抜いて画面中央付近を見ます。" },
    { title: "左右を同時に追う", text: "左の上下運動と右の左右運動を、どちらも見失わないよう目で追います。" },
    { title: "少しずつ難しくする", text: "楽に追えるようになったら、速度を上げるかガイド線の非表示・ランダム速度を1つずつ加えます。" }
  ],
  audience: "2つの動く対象に注意を分ける練習を、ゲーム感覚で手軽に試したい人。",
  faqs,
  sources: pickSources('pylyshyn1988', 'alvarez2005', 'awh2000', 'cavanagh2005', 'green2006', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/peripheral-ping-pursuit", label: "周辺視野ピン追従トレーニング" },
    { href: "/ja/drills/visual-tracking/spatial-shift-pursuit", label: "視界ブレ・空間シフト追跡テスト" },
    { href: "/ja/drills/visual-tracking/predictive-pursuit", label: "偏差エイム練習・遮蔽軌道予測テスト" },
    { href: "/ja/drills/visual-tracking/directional-chaos-pursuit", label: "不規則方向変化・急制動追跡テスト" },
    { href: "/ja/drills/visual-tracking/constant-slow-pursuit", label: "滑動性追従・基礎アイエクササイズ" }
  ],
};

export default function SplitScreenTrackingJaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SplitScreenTrackingClient
        copy={{
          title: "画面分割追視トレーニング",
          subtitle: "左右の標的を追う分割注意力ドリル",
          description: "画面分割追視トレーニングは、左で上下、右で左右に動く2つの標的を同時に目で追う練習です。ブラウザは視線を記録しないため、結果は検査ではなく練習記録として見てください。",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
