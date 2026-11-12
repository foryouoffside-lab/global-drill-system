import QuickDodgeClient from '@/app/drills/physical/reflex-training/quick-dodge/QuickDodgeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/physical/reflex-training/quick-dodge';
const title = "障害物を避けるゲーム｜マウスで迫る弾をかわすブラウザ避けゲー | SkillDrills";
const description = "四方からカーソルめがけて飛んでくる赤い弾をマウスでかわす、無料の障害物を避けるゲーム。45秒間連続で避けてコンボ倍率を伸ばし、どんどん速くなる弾の中でハイスコアを目指すブラウザ避けゲーです。";

export const metadata = {
  title,
  description,
  keywords: ["障害物を避けるゲーム", "避けゲー", "避けるゲーム ブラウザ", "弾幕 避ける ゲーム", "マウス 避ける ゲーム"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/quick-dodge') },
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
    { '@type': 'ListItem', position: 3, name: 'リフレックス', item: 'https://skilldrills.online/ja/drills/physical/reflex-training' },
    { '@type': 'ListItem', position: 4, name: '障害物を避けるゲーム', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: '障害物を避けるゲーム (Quick Dodge)',
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
  { q: "障害物を避けるゲームはどう遊びますか？", a: "赤い円形の弾が画面の四辺のどこかから現れ、出現した瞬間のカーソル位置に向かってまっすぐ飛んできます。カーソルを動かして当たらずに画面外へ抜けさせると、回避1回としてカウントされます。1セッションは45秒です。" },
  { q: "弾はカーソルを追いかけてきますか？", a: "いいえ。出現した瞬間のカーソル位置を狙って飛び出した後は、向きを変えずに直進します。飛びながら少しずつ大きくなるので、余裕を持って横へずれるのが安全です。" },
  { q: "スコアとコンボはどう計算されますか？", a: "弾を1つ避けるたびに基本点×コンボ倍率を獲得します。基本点はレベルが上がるにつれて2点から20点まで増えます。倍率は連続回避3回で1.1倍、10回で1.5倍、20回で2.0倍、30回で2.5倍、50回で3.0倍です。" },
  { q: "難易度はどう上がりますか？", a: "レベルは毎セッション1から始まり、250点ごとに1、連続回避4回ごとにさらに1上がります。弾の速さは秒速300pxからレベル15で1,600pxまで上がり、その後も上がり続け、コンボが長いと最大200px/sが上乗せされます。出現間隔は0.65秒から0.10秒へ縮まり、同時に画面にいられる弾は8個から58個まで増えます。" },
  { q: "弾に当たるとどうなりますか？", a: "コンボが1.0倍に戻り、画面上の弾がすべて消え、赤いフラッシュと画面の揺れが出ます。スコアと残り時間は減りません。赤いフラッシュはプレイ中に右下のボタンでオフにできます。" },
  { q: "操作方法は？", a: "マウスのみです。開始するとポインターがロックされ、サイトの感度設定が反映されます。キーボードはEsc（終了）だけを使います。マウス付きのPCをおすすめします。" },
  { q: "ランクはどう決まりますか？", a: "最終スコアを17,000点の基準と比べて、S+（約15,350点以上）、S（約12,300点）、A（約9,550点）、B（6,120点）、C（約3,450点）、D（1,530点）に分けます。SkillDrills内の練習バンドで、ユーザー統計やパーセンタイルではありません。" },
  { q: "弾幕シューティングと同じですか？", a: "自分から撃つ要素はなく、避けることだけに集中する避けゲーです。弾は画面の端から直線で飛んでくるので、弾幕 避ける ゲームのように隙間を見つけて動く感覚に近いですが、弾のパターンは毎回ランダムです。" },
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
  "スタートを押すと3秒のカウントダウン後、カーソルが画面中央から始まります。",
  "端に弾が現れたら、今のカーソル位置へ飛んでくることを意識して横へずれます。",
  "大きく振り回さず、短く動いて弾と弾の間の空いた場所にとどまります。",
  "当たらずに連続で避けてコンボ倍率を上げ、45秒間でハイスコアを目指します。",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '障害物を避けるゲームの遊び方',
  description: '飛んでくる弾をマウスでかわしてコンボを伸ばす4ステップです。',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `ステップ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const dodgeGuide = {
  heading: '障害物を避けるゲームのガイド',
  intro: [
    "障害物を避けるゲーム（クイックドッジ）は、画面の四方からカーソルめがけて飛んでくる赤い弾をマウスでかわし、スコアを積み上げるブラウザ避けゲーです。当たらずに耐えるのが目的で、連続で避けるほどコンボ倍率が上がります。",
    "弾は出現した瞬間のカーソル位置を狙って直進します。そのため止まっていると当たり、少し横へずれるだけで避けられます。速い動きはあらかじめ計画してから始まるという説明（Kawato, 1999）のように、弾が見えたら行き先を先に決めておくと有利です。",
    "レベルが上がると弾は速く、頻繁に、大きくなります。空いている場所が狭くなるほど小さな目標の中で正確に動く必要があり、難しくなります（Fitts, 1954）。当たると画面の弾が消え、コンボだけがリセットされます。",
    "結果はSkillDrills内の練習記録です。医学的な検査や実際の運動能力の評価ではありません。リフレッシュレートや入力機器も遅延に影響するため（Woods et al., 2015）、同じ環境で記録を比べてください。",
  ],
  benchmarks: {
    title: 'ランク基準表（SkillDrills練習バンド）',
    headers: ['ランク', 'スコア'],
    rows: [
      ['S+', '約15,350点以上'],
      ['S', '約12,300点以上'],
      ['A', '約9,550点以上'],
      ['B', '6,120点以上'],
      ['C', '約3,450点以上'],
      ['D', '1,530点以上'],
    ],
    note: 'ランクは最終スコアを17,000点基準と比べたSkillDrillsの練習バンドです。ユーザー統計やパーセンタイルではありません。',
  },
  techniques: {
    title: 'スコアを伸ばすコツ',
    items: [
      { name: '出現の瞬間を見る', desc: '弾は出現時のカーソル位置へ飛んできます。出た瞬間に横へずれれば、ほとんどの弾は避けられます。', tips: '同じ場所に長くとどまらないようにしましょう。' },
      { name: '小さく動く', desc: '大きく振り回すと、新しく飛んでくる弾にぶつかりやすくなります。短く動いて空いた場所にとどまりましょう。', tips: '画面端より、弾が通り過ぎた側のほうが空いていることが多いです。' },
      { name: '大きくなることを見込む', desc: '弾は飛びながら大きくなります。ぎりぎりを狙うより余裕を持ちましょう。', tips: '終盤の高速帯では安全な距離が優先です。' },
      { name: 'コンボをつなぐ', desc: '連続回避が長いほど倍率とレベルが一緒に上がります。当たると画面が空になるので落ち着いて立て直しましょう。', tips: '手首や肩の力を抜き、痛みがあれば休みましょう。' },
    ],
  },
  steps,
  audience: 'ブラウザで手軽に障害物を避けるゲームや避けゲーを遊びたい人、マウス操作を練習したいゲーマー。',
  faqs,
  sources: pickSources('kawato1999', 'fitts1954', 'woods2015'),
};

export default function LocalizedQuickDodgePageJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <QuickDodgeClient
        copy={{
          title: "障害物を避けるゲーム",
          hudLabels: { score: "スコア", time: "残り時間", bestScore: "最高スコア", bestCombo: "最高コンボ", getReady: "レディー" },
          resultLabels: { newBest: "自己ベスト更新", points: "最終得点", accuracy: "回避率", dodges: "回避回数", peakSpeed: "最高速度", peakLevel: "到達レベル", playAgain: "もう一度挑戦" },
          rulesTitle: "ルールとスコア計算",
          rulesItems: [
            { title: "弾をかわす", text: "赤い弾が端から現れ、その瞬間のカーソル位置へ飛んできます。当たらずに画面外へ抜けさせれば回避1回です。" },
            { title: "コンボ倍率", text: "連続回避が増えると倍率が上がり、最大3.0倍（50連続）になります。" },
            { title: "難易度の上昇", text: "スコアと連続回避に応じてレベルが上がり、弾の速さは300px/sから1,600px/s以上になり、出現も頻繁になります。" },
            { title: "当たったら", text: "コンボが1.0倍に戻り、画面の弾が消えます。スコアと45秒のセッション時間は減りません。" },
          ],
          aboutTitle: "障害物を避けるゲームについて",
          aboutSections: [
            { title: "直進してくる弾", content: "弾は出現した瞬間のカーソル位置を狙って直進します。出た瞬間に横へずれるのが基本です。" },
            { title: "先に決めて動く", subtitle: "Kawato, 1999", content: "速い動きはあらかじめ計画して始まるという説明があります。弾が見えたら行き先を先に決めましょう。" },
            { title: "狭くなる隙間", subtitle: "Fitts, 1954", content: "弾が増えるほど空いた場所が狭くなり、正確な動きが必要になります。" },
            { title: "機材と記録の比較", subtitle: "Woods et al., 2015", content: "リフレッシュレートや入力機器は遅延に影響することがあります。同じ機材で記録を比べましょう。" },
          ],
        }}
      />
      <DrillGuide guide={dodgeGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/quick-dodge" />
    </>
  );
}
