import JumpSequenceClient from '@/app/drills/physical/fitness/jump-sequence/JumpSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/ja.md)
// Primary: ジャンプゲーム (169, AC = platformers; honest qualified title).
// Deleted the dead base title ジャンプ力トレーニング＆プライオメトリクス and the
// inaccurate リズム framing: this is a hold-charge, release, steer mouse game.
// ============================================================

const TITLE = 'ジャンプゲーム｜長押しで溜めて動く的を狙うブラウザゲーム | SkillDrills';
const DESCRIPTION = '無料のジャンプゲーム。マウスボタンを長押ししてパワーを溜め、離して跳び上がったら、空中でマウスを左右に動かして動く的に当てます。45秒間コンボをつないでスコアを伸ばすブラウザゲームです。登録不要・インストール不要ですぐに遊べます。';
const URL = 'https://skilldrills.online/ja/drills/physical/fitness/jump-sequence';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['ジャンプゲーム', 'ジャンプタイミングゲーム', '溜めジャンプ', 'ジャンプゲーム ブラウザ', 'マウス タイミングゲーム'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/jump-sequence'),
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
    { "@type": "ListItem", "position": 3, "name": "ジャンプゲーム", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "ジャンプゲーム",
  "description": "長押しで溜めて離して跳び、空中で向きを変えて動く的に当てる45秒の無料ブラウザゲーム。",
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
    q: "このジャンプゲームはどんなゲームですか？",
    a: "床の上の点（プレイヤー）を溜めて跳び上がらせ、空中で向きを変えて画面内を動き回る的に当てる無料ブラウザゲームです。1回のプレイは45秒です。"
  },
  {
    q: "操作方法は？",
    a: "照準を床のプレイヤーの点に重ねてマウスボタンを押し続けるとパワーが溜まります（約1秒で最大）。ボタンを離すと真上に跳び、空中にいる間はプレイヤーがマウスの左右の位置へ寄っていきます。Escキーでドリルを終了します。"
  },
  {
    q: "スコアとコンボはどう計算されますか？",
    a: "空中で的に触れると命中です。1回の命中の基本点はレベル1で5点、レベルが上がるほど増え、そこに連続命中数に応じたコンボ倍率（50連続で最大3.0倍）が掛かります。"
  },
  {
    q: "レベルが上がると何が変わりますか？",
    a: "スコア250点ごとにレベルが1上がり、連続命中4回ごとにボーナスレベルが加わります。的の速さは120 px/sから始まり、レベル15で約800 px/s（長いコンボ中は最大900 px/s）になり、その後も速くなり続けます。的の半径は35pxから12pxまで小さくなります。"
  },
  {
    q: "的に当たらなかったらどうなりますか？",
    a: "的に触れないまま床に戻ると失敗となり、連続命中とコンボがリセットされ、赤いフラッシュが出ます。スコアと残り時間は減らず、新しい的が現れます。"
  },
  {
    q: "実際の運動効果はありますか？",
    a: "上がりません。このゲームはマウスで溜め時間と空中の向きを調整するタイミングゲームで、実際のジャンプの高さや脚力を測定したり鍛えたりするものではありません。運動効果はうたっていません。"
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
  "スタートを押し、カウントダウン（3-2-1）が終わったら照準を床のプレイヤーの点に重ねます。",
  "的の高さを見て、マウスボタンを押してパワーを溜めてから離します。",
  "空中にいる間にマウスを左右に動かし、的が通る位置へ向きを変えます。",
  "45秒間、連続命中をつないでコンボ倍率を上げます。"
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "ジャンプゲームの遊び方",
  "description": "長押しで溜めて跳び、空中で向きを変えて動く的に当てる方法。",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `ステップ${i + 1}`, "text": text }))
};

const jumpGuide = {
  heading: "ジャンプゲームのガイド",
  intro: [
    "このジャンプゲームは「どれだけ溜めるか」と「空中でどこへ寄せるか」を合わせるマウスゲームです。ボタンを押している時間が長いほど高く跳び、空中ではプレイヤーがマウスの左右の位置を追いかけます。的は画面内を漂い、壁に当たると跳ね返ります。",
    "1回のプレイは45秒です。的に当てるたびにスコアと連続命中が積み上がり、レベルが上がると的が速く小さくなります。的に触れずに床に戻ってもコンボがリセットされるだけで、スコアと時間はそのままです。",
    "動く対象に当てるには、今の位置ではなく出会う地点を予測する必要があります（Lee, 1976）。跳んだ後の短い間に向きを直す動きは、事前に計画した大きな動作と最後の修正に分かれます（Woodworth, 1899）。このゲームはそのタイミングをマウスで練習するもので、実際のジャンプ能力とは関係ありません。"
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
      { name: "必要な分だけ溜める", desc: "毎回最大まで溜めると的を飛び越えてしまいます。的の高さに合わせて溜め時間を短く切りましょう。", tips: "溜めゲージと的の高さを見比べます。" },
      { name: "先回りして寄せる", desc: "的を追いかけず、的が通る場所へ先にマウスを動かします。プレイヤーはマウスの方へ少しずつ寄っていきます。", tips: "跳ね返る向きまで読むと当てやすくなります。" },
      { name: "着地後すぐ次のジャンプ", desc: "命中でも失敗でも新しい的が出ます。照準をすぐプレイヤーの点に戻し、次の溜めに入りましょう。", tips: "無駄な時間を減らすほどコンボを長くつなげます。" }
    ]
  },
  steps: STEPS,
  audience: "短いマウスのタイミングゲームを探している人、動く的の位置を予測する練習をしたいPCユーザー。",
  faqs: FAQS,
  sources: pickSources('lee1976', 'woodworth1899', 'kawato1999', 'fitts1954')
};

export default function JumpSequencePageJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <JumpSequenceClient
        copy={{
          title: "ジャンプゲーム",
          hudLabels: { score: "スコア", timeLeft: "残り時間", bestScore: "ベストスコア", bestCombo: "最高コンボ" },
          rulesTitle: "ジャンプゲームのルール",
          rules: [
            { title: "溜めてジャンプ", text: "照準をプレイヤーの点に重ねてマウスボタンを押し続けると溜まり、離すと真上に跳びます。" },
            { title: "空中で向きを変える", text: "空中にいる間にマウスを左右に動かすと、プレイヤーがその方へ寄って的に向かいます。" },
            { title: "コンボ倍率", text: "連続で的に当てるとコンボ倍率が最大3.0倍まで上がります。" },
            { title: "失敗でコンボリセット", text: "的に当てずに床に戻るとコンボがリセットされます。スコアと時間は減りません。" }
          ],
          aboutTitle: "ジャンプゲームについて"
        }}
      />
      <DrillGuide guide={jumpGuide} />
      <RelatedDrills />
    </>
  );
}
