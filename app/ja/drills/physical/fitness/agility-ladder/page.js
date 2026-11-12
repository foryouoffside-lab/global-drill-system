import MotorSequencingClient from '@/app/drills/physical/fitness/agility-ladder/MotorSequencingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/ja.md + coordinator queue)
// Primary: アジリティラダーゲーム (descriptive, unmeasured).
// ラダートレーニング (244) appears only as an honest analogy: this is a mouse
// sequence game, not a footwork workout. No fitness or FPS outcome claims.
// ============================================================

const TITLE = 'アジリティラダーゲーム｜ラダートレーニングの順番をマウスで再現 | SkillDrills';
const DESCRIPTION = '無料のアジリティラダーゲーム。上から流れてくるはしごのマス4つを、左・右・左・右の順にマウスカーソルで通過します。45秒間コンボをつないでスコアを伸ばし、レベルが上がるほどはしごが速くなります。登録不要・インストール不要ですぐに遊べます。';
const URL = 'https://skilldrills.online/ja/drills/physical/fitness/agility-ladder';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['アジリティラダーゲーム', 'ラダートレーニング マウス', 'リズムゲーム マウス', '順番 マウスゲーム', '無料 ブラウザゲーム'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/agility-ladder'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "身体機能トレーニング", "item": "https://skilldrills.online/ja/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "フィットネス", "item": "https://skilldrills.online/ja/drills/physical/fitness" },
    { "@type": "ListItem", "position": 4, "name": "アジリティラダーゲーム", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "アジリティラダーゲーム",
  "description": "流れてくるはしごのマス4つを左・右・左・右の順にマウスカーソルで通過する45秒の無料ブラウザゲーム。",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvasとマウスに対応した最新のWebブラウザ",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": URL,
  "inLanguage": "ja",
  "dateModified": "2026-11-10"
};

const FAQS = [
  {
    q: "アジリティラダーゲームとはどんなゲームですか？",
    a: "画面の上から流れてくるはしご（ラダー）ごとに、4つのマス（左・右・左・右）を決まった順番でマウスカーソルで通過する無料ブラウザゲームです。1回のプレイは45秒で、はしごを完成させるたびにスコアが入ります。"
  },
  {
    q: "操作方法は？クリックは必要ですか？",
    a: "クリックは不要です。マウスを動かして照準を今のマス（緑の枠）に重ねると踏んだ扱いになり、次のマスが有効になります。順番は1（左）→2（右）→3（左）→4（右）です。Escキーでドリルを終了します。"
  },
  {
    q: "スコアとコンボはどう計算されますか？",
    a: "はしごを1つ完成させると100点×コンボ倍率が入ります。連続完成数に応じて倍率は3連続で1.1倍、5連続で1.25倍、10連続で1.5倍、20連続で2.0倍、50連続で最大3.0倍まで上がります。"
  },
  {
    q: "レベルが上がると何が変わりますか？",
    a: "スコア250点ごとにレベルが1上がり、連続完成4回ごとにボーナスレベルが加わります。はしごの流れる速さは150 px/sから始まり、レベル15で750 px/sになり、その後も速くなり続けます。マスの判定範囲は18pxから10pxまで狭くなります。"
  },
  {
    q: "マスを取り逃すとどうなりますか？",
    a: "4マスを通過する前にはしごが画面下に届くと失敗となり、コンボが0に戻り、赤いフラッシュと画面の揺れが出ます。獲得済みのスコアや残り時間は減りません。"
  },
  {
    q: "実際のラダートレーニングの代わりになりますか？",
    a: "なりません。ラダートレーニングの左右の順番パターンを、画面上で手とマウスでなぞるゲームです。フットワーク、体力、敏捷性の向上を測定したり保証したりするものではありません。"
  },
  {
    q: "結果画面のランクはどう決まりますか？",
    a: "ランクは最終スコアだけで決まります。15,343点以上でS+、12,283点以上でS、9,563点以上でA、6,120点以上でB、3,443点以上でC、1,530点以上でD、それ未満はFです。SkillDrillsの練習用の目安で、他のユーザーとの比較統計ではありません。"
  },
  {
    q: "記録はどこに保存されますか？",
    a: "ベストスコア、最高コンボ、最高レベルはお使いのブラウザのlocalStorageにのみ保存され、サーバーには送信されません。登録やインストールなしで無料で遊べます。"
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja",
  "dateModified": "2026-11-10",
  "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const STEPS = [
  "スタートを押し、カウントダウン（3-2-1）の後にゲームが始まります（PCではポインターロックが有効になります）。",
  "流れてくるはしごの1番目のマス（左、緑の枠）に照準を重ねます。",
  "2番（右）、3番（左）、4番（右）のマスを同じリズムで続けて通過し、はしごを完成させます。",
  "45秒間はしごを取り逃さずにつなぎ、コンボ倍率を上げます。"
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "アジリティラダーゲームの遊び方",
  "description": "はしごのマス4つを左・右・左・右の順にマウスカーソルで通過する方法。",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `ステップ${i + 1}`, "text": text }))
};

const ladderGuide = {
  heading: "アジリティラダーゲームのガイド",
  intro: [
    "アジリティラダーゲームは、ラダートレーニングの「左・右・左・右」のステップ順をマウスゲームに置き換えたドリルです。上からはしごが流れてきたら、4つのマスを決まった順番で照準で通過します。クリックは使わず、マウスの移動だけで遊びます。",
    "1回のプレイは45秒です。はしごを1つ完成させるごとに100点×コンボ倍率（最大3.0倍）が入り、スコア250点ごとにレベルが上がって、はしごが速く流れ、マスの判定範囲が狭くなります。",
    "速い連続動作は1マスずつ反応するよりも、4マスを1つのまとまりとして事前に計画した方が安定するという研究があります（Lashley, 1951; Schmidt, 1975）。このゲームはその順番とリズムを手で練習するもので、実際のフットワークや体力を鍛えるものではありません。"
  ],
  benchmarks: {
    title: "結果ランクの基準（SkillDrills練習用の目安）",
    headers: ["ランク", "最終スコア"],
    rows: [
      ["S+", "15,343点以上"],
      ["S", "12,283～15,342点"],
      ["A", "9,563～12,282点"],
      ["B", "6,120～9,562点"],
      ["C", "3,443～6,119点"],
      ["D", "1,530～3,442点"],
      ["F", "1,530点未満"]
    ],
    note: "ゲームのランク計算式から求めたSkillDrills練習用の目安です。他のユーザーとの比較統計やパーセンタイルではありません。"
  },
  techniques: {
    title: "スコアを伸ばすコツ",
    items: [
      { name: "4マスをひとまとまりで", desc: "1マスずつ見て反応すると間に合いません。左・右・左・右のジグザグを1つの動きとして続けて通過しましょう。", tips: "マスとマスの間で止まらず、カーソルを流し続けます。" },
      { name: "少し下を狙う", desc: "はしごは下へ流れ続けるので、マスの今の位置より少し下へ動かすと判定範囲に入りやすくなります。", tips: "速くなるほど下を予測します。" },
      { name: "視線は中央に", desc: "マスは画面中央の縦軸の左右に出ます。視線を中央に置くと左右のマスを一度に見られます。", tips: "レベル4以降ははしごの位置が左右に少しずれます。" }
    ]
  },
  steps: STEPS,
  audience: "マウスで遊べる短いリズム・順番ゲームを探している人、左右のカーソル往復を繰り返し練習したいPCユーザー。",
  faqs: FAQS,
  sources: pickSources('lashley1951', 'schmidt1975', 'fitts1954')
};

export default function AgilityLadderPageJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <MotorSequencingClient
        copy={{
          title: "アジリティラダーゲーム",
          hudLabels: { score: "スコア", timeLeft: "残り時間", bestScore: "ベストスコア", bestCombo: "最高コンボ" },
          rulesTitle: "アジリティラダーゲームのルール",
          rules: [
            { title: "4マスを順番に", text: "流れてくるはしごのマスを1（左）→2（右）→3（左）→4（右）の順に照準で通過します。クリックは不要です。" },
            { title: "コンボ倍率", text: "はしごを連続で完成させるとコンボ倍率が最大3.0倍まで上がります。はしご1つは100点×倍率です。" },
            { title: "レベルアップ", text: "スコア250点ごとにレベルが上がり、流れる速さが上がってマスの判定範囲が狭くなります。" },
            { title: "取り逃したはしご", text: "完成前にはしごが画面下に届くとコンボがリセットされます。スコアと時間は減りません。" }
          ],
          aboutTitle: "アジリティラダーゲームについて",
          aboutHeading: "左右の順番とリズムをマウスで",
          aboutText: "アジリティラダーゲームは、ラダートレーニングの左・右・左・右のステップ順をマウスゲームにした45秒のドリルです。流れてくるはしごのマス4つを順番に照準で通過するとはしごが完成し、スコアが上がるほど流れる速さが150 px/sからレベル15の750 px/sを超えて速くなり続けます。手とマウスで順番とリズムを練習するゲームで、実際のフットワークや体力の向上を測定するものではありません。"
        }}
      />
      <DrillGuide guide={ladderGuide} />
      <RelatedDrills />
    </>
  );
}
