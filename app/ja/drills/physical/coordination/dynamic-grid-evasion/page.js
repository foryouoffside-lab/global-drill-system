import DynamicGridEvasionClient from '@/app/drills/physical/coordination/dynamic-grid-evasion/DynamicGridEvasionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/physical/coordination/dynamic-grid-evasion';
const title = "危険マス回避ゲーム｜爆発する前に安全マスへ移動 | SkillDrills";
const description = "3×3のマス目でオレンジに点滅する危険マスが爆発する前に、マウスで安全なマスへ移動する無料の危険マス回避ゲーム。45秒間ウェーブを連続で避けてコンボを伸ばし、短くなる警告時間の中でハイスコアを目指します。";

export const metadata = {
  title,
  description,
  keywords: ["危険マス回避ゲーム", "マス目を避けるゲーム", "爆発マスから逃げる", "3×3 マス ゲーム", "マウス 回避 ゲーム ブラウザ"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/coordination/dynamic-grid-evasion') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ja_JP', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills ホーム', item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: 'フィジカルトレーニング', item: 'https://skilldrills.online/ja/drills/physical' },
    { '@type': 'ListItem', position: 3, name: '危険マス回避ゲーム', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: '危険マス回避ゲーム (Dynamic Grid Evasion)',
  url,
  description,
  genre: ['Action Game', 'Browser Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  operatingSystem: 'All',
  inLanguage: 'ja',
  dateModified: '2026-11-10',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ja' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: "危険マス回避ゲームはどう遊びますか？", a: "画面が3×3のマス目に分かれ、ウェーブごとにいくつかのマスがオレンジに点滅して警告します。警告時間が終わった瞬間にそのマスが赤く爆発し、そのときカーソルが警告マスの外にいればそのウェーブは回避成功です。爆発の0.35秒後に次のウェーブがすぐ始まり、1セッションは45秒です。" },
  { q: "カーソル位置はいつ判定されますか？", a: "爆発する瞬間に1回だけ判定します。警告中に危険マスを通り抜けても問題なく、爆発の瞬間に安全なマスの中にいれば成功です。カーソルはマス目の中央から始まり、中央マスも危険マスになることがあります。" },
  { q: "スコアとコンボはどう計算されますか？", a: "回避したウェーブごとに100点×コンボ倍率が加算されます。倍率は連続3ウェーブで1.1倍、5で1.25倍、10で1.5倍、20で2.0倍、30で2.5倍です。コード上は50連続で3.0倍になりますが、45秒で出現するウェーブは最大40数回なので、実際に届く最高倍率は2.5倍です。" },
  { q: "難易度はどう上がりますか？", a: "レベルは毎セッション1から始まり、250点ごとに1、さらに連続回避4ウェーブごとに1上がります。レベルが上がると警告時間は1.4秒から0.45秒へ短くなり、危険マスは3個から7個に増えて安全なマスは2個だけになります。この2つの値はレベル15で上限に達します。" },
  { q: "爆発に巻き込まれるとどうなりますか？", a: "コンボが0に戻り、赤いフラッシュと画面の揺れが出ます。スコアや残り時間は減りません。赤いフラッシュはプレイ中に右下のボタンでオフにできます。" },
  { q: "ランクはどう決まりますか？", a: "最終スコアを17,000点の基準と比べてランクを付けます（B 6,120点以上、C 約3,450点以上、D 1,530点以上）。45秒間すべてのウェーブを避けても計算上は約8,400点が上限なので、このドリルで現実的な最高ランクはBです。" },
  { q: "操作方法は？", a: "マウスのみです。開始するとポインターがロックされ、サイトの感度設定が反映されます。キーボードはEsc（終了）だけを使います。タッチ専用端末ではカーソルを動かせないため、マウス付きのPCをおすすめします。" },
  { q: "飛んでくる障害物を避けるゲームとの違いは？", a: "危険マス回避ゲームは決まった9マスから安全なマスを選び、警告が終わる前に移動する形式です。四方から飛んでくる弾を避けたい場合は、同じカテゴリのクイックドッジを使ってください。" },
  { q: "無料ですか？記録はどこに保存されますか？", a: "無料で、インストールや登録なしにブラウザで動きます。ベストスコアと最高コンボはブラウザのローカルストレージにだけ保存されます。" },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja',
  dateModified: '2026-11-10',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const steps = [
  "スタートを押すと3秒のカウントダウン後、カーソルがマス目の中央から始まります。",
  "オレンジに点滅する危険マスを見て、警告の出ていない安全なマスを探します。",
  "爆発前にカーソルを安全なマスの内側へ移動し、境界線ぎりぎりで止めないようにします。",
  "連続で回避してコンボをつなぎ、45秒間でハイスコアを目指します。",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '危険マス回避ゲームの遊び方',
  description: '3×3のマス目で危険マスを避けて安全なマスへ移動する4ステップです。',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `ステップ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const gridGuide = {
  heading: '危険マス回避ゲームのガイド',
  intro: [
    "危険マス回避ゲームは、3×3のマス目でオレンジに警告された危険マスが爆発する前に、マウスカーソルを安全なマスへ移動させるブラウザゲームです。飛んでくる物を避けるのではなく、9マスのうちどこが安全かを選ぶマス目を避けるゲームなので、素早い判断と正確に止める操作の両方が必要です。",
    "警告時間はレベルが上がるにつれて1.4秒から0.45秒まで短くなり、危険マスは3個から7個まで増えます。終盤は安全なマスが2個しかなく、1マスずつ確認する余裕はありません。注意を引く手がかりが反応を速めるという研究（Posner, 1980）のように、点滅するマスと暗いマスの差を一度に読むことがポイントです。",
    "速い動きは、大きく動いてから最後に小さく修正する2段階で説明されます（Woodworth, 1899）。安全なマスを選べても、カーソルが境界を越えてしまえば失敗なので、マスの内側で止める練習が大切です。",
    "結果はSkillDrills内の練習記録です。医学的な検査、視力測定、実際の運動能力の評価ではありません。スコアを比べるときは同じマウス、感度、モニターを使ってください。",
  ],
  benchmarks: {
    title: 'ランク基準表（SkillDrills練習バンド）',
    headers: ['ランク', 'スコア', '目安'],
    rows: [
      ['B', '6,120点以上', '45秒間ほぼすべてのウェーブを回避する段階'],
      ['C', '約3,450点以上', 'ウェーブの半分以上を連続で回避する段階'],
      ['D', '1,530点以上', '警告を見て安全なマスへ移る操作に慣れる段階'],
      ['F', '1,530点未満', '始めたばかりの段階'],
    ],
    note: 'ランクは最終スコアを17,000点基準と比べたSkillDrillsの練習バンドです。A以上は45秒のセッションでは計算上届きません。ユーザー統計やパーセンタイルではありません。',
  },
  techniques: {
    title: 'スコアを伸ばすコツ',
    items: [
      { name: '暗いマスを先に探す', desc: '点滅する危険マスを1つずつ数えるより、光っていないマスを直接探すほうが速くなります。', tips: '終盤は安全なマスが2個だけなので、近いほうを選びましょう。' },
      { name: '近い安全マスへ', desc: '警告時間が0.5秒前後になると遠いマスまでは間に合いにくくなります。今の位置から一番近い安全マスへ移りましょう。', tips: '斜めより上下左右の移動のほうが短いことが多いです。' },
      { name: 'マスの内側で止める', desc: '判定はカーソルの正確な位置で行われます。境界線にかかると隣のマス扱いになることがあります。', tips: 'マスの中心を狙って動かしましょう。' },
      { name: 'コンボを切らさない', desc: '連続回避が長いほど倍率とレベルが一緒に上がります。無理に遠いマスへ行って被弾するとコンボが消えます。', tips: '確実なマスを優先しましょう。' },
    ],
  },
  steps,
  audience: 'マス目の危険マスから逃げるタイプのマウスゲームを探している人、警告を見て素早く判断し正確に止める練習をしたいゲーマー。',
  faqs,
  sources: pickSources('posner1980', 'woodworth1899', 'fitts1954'),
};

export default function DynamicGridEvasionPageJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <DynamicGridEvasionClient
        copy={{
          title: "危険マス回避ゲーム",
          hudLabels: { score: "スコア", timeLeft: "残り時間", bestScore: "ベストスコア", bestCombo: "最高コンボ" },
          rulesTitle: "ルールとスコア計算",
          rules: [
            { title: "危険マスの警告", text: "ウェーブごとにいくつかのマスがオレンジに点滅します。警告が終わるとそのマスが爆発します。" },
            { title: "安全なマスへ移動", text: "爆発の瞬間にカーソルが警告マスの外にいれば回避成功。100点×コンボ倍率を獲得します。" },
            { title: "レベルアップ", text: "250点ごと、さらに連続4ウェーブごとにレベルが上がります。警告時間は1.4秒から0.45秒へ、危険マスは3個から7個へ増えます。" },
            { title: "爆発に巻き込まれたら", text: "コンボだけが0に戻ります。スコアと45秒のセッション時間は減りません。" },
          ],
          aboutTitle: "危険マス回避ゲームとは",
          aboutHeading: "3×3マス目の危険回避",
          aboutText: "危険マス回避ゲームは、3×3のマス目でオレンジに点滅する危険マスを見て、爆発する前にマウスで安全なマスへ移動するゲームです。レベルが上がるほど警告時間が短くなり、危険マスが増えます。素早い判断とマスの中で正確に止めるマウス操作を練習するためのもので、医学的な測定ではありません。",
          aboutCards: [
            { title: "おすすめの人", desc: "マス目を避けるゲームが好きな人、警告を見て素早く動く練習をしたい人。" },
            { title: "練習できること", desc: "危険マスと安全マスの見分け、近いマスの選択、マスの中でカーソルを止める操作。" },
            { title: "セッション構成", desc: "45秒固定、毎回レベル1から開始。被弾してもスコアと時間は減りません。" },
          ],
        }}
      />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
