import DropCatchClient from '@/app/drills/physical/reflex-training/drop-catch/DropCatchClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ja/drills/physical/reflex-training/drop-catch';
const title = "落下キャッチゲーム｜赤いダミーを避けて緑だけクリック | SkillDrills";
const description = "落下キャッチゲーム：画面の上から落ちてくる緑の標的だけをクリックし、赤いダミーは見送ります。緑を取ると+2秒、緑の見逃しや赤・何もない場所のクリックは-1秒。色を見分けて押すか見送るかを決める判断ゲームを、登録不要・無料でブラウザから遊べます。";

export const metadata = {
  title,
  description,
  keywords: [
    "落下キャッチゲーム",
    "緑だけクリック",
    "落ちてくるものをクリックするゲーム",
    "落下ターゲット ゲーム",
    "ドロップキャッチ"
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/drop-catch'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url,
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills ホーム",
      "item": "https://skilldrills.online/ja"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "身体機能トレーニングハブ",
      "item": "https://skilldrills.online/ja/drills/physical"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "反射神経トレーニング",
      "item": "https://skilldrills.online/ja/drills/physical/reflex-training"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "落下キャッチゲーム",
      "item": url
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ドロップキャッチ（落下キャッチゲーム）",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  description,
  url,
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/ja" },
  "inLanguage": "ja",
  "dateModified": "2026-11-10"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "ドロップキャッチ（落下キャッチゲーム）ウェブアプリ",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvasおよびポインター入力対応の最新ブラウザ",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  url,
  "inLanguage": "ja",
  "dateModified": "2026-11-10"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "ドロップキャッチ（落下キャッチゲーム）",
  url,
  description,
  "genre": ["Action Game", "Reflex Game"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "inLanguage": "ja",
  "dateModified": "2026-11-10",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const faqs = [
  {
    q: "落下キャッチゲームはどんな遊び方ですか？",
    a: "画面の上から落ちてくる標的のうち、緑だけをクリックで取り、赤いダミーはクリックせずに下まで見送ります。緑を取ると100点（コンボとレベルの倍率つき）と残り時間+2秒（上限60秒）。開始時の持ち時間は45秒です。"
  },
  {
    q: "学校の定規落としテストと同じですか？",
    a: "違います。定規落としは実物の定規をつかんだ位置から反応時間を求める方法ですが、このゲームは反応時間を測りません。色を見分けて緑だけクリックする選択型のゲームで、結果はスコアとして記録されます。"
  },
  {
    q: "ミスをするとどうなりますか？",
    a: "緑の標的を画面下まで見逃す、赤いダミーをクリックする、標的のない場所をクリックする、のいずれかでコンボが1.0倍に戻り、残り時間が1秒減ります。この減点は常に有効で、設定でオフにはできません。"
  },
  {
    q: "レベルが上がると何が変わりますか？",
    a: "1,750点ごとにレベルが上がり、上限はありません。落下速度は約400px/sから1,250px/sへ、出現間隔は約0.8秒から最短0.18秒へ、赤いダミーの割合は15%から最大45%へ変わり、標的も小さくなります。"
  },
  {
    q: "赤いダミーをクリックしないコツは？",
    a: "標的が出たら、まず色を確認してから指に力を入れます。押そうとする動きと止めようとする動きが競争するというモデルがあります（Logan et al., 1984）。赤は見送っても損はないので、迷ったら押さないのが安全です。"
  },
  {
    q: "どこを見ながらプレイすればいいですか？",
    a: "画面の一番上の一点だけを見るより、上から中ほどまでを広めに見ると、出てきた瞬間に色を判断しやすくなります。落ちてくる線の下にカーソルを先に置くと移動が短くて済みます。合う方法は人によって違うので比べてみてください。"
  },
  {
    q: "モニターのリフレッシュレートは関係しますか？",
    a: "リフレッシュレートが高いと、速く落ちる標的の1フレームあたりの移動量が小さく見え、入力遅延も減る傾向があります（Woods et al., 2015）。このゲームでスコアがどれだけ変わるかは測定していないので、記録は同じ環境で比べてください。"
  },
  {
    q: "記録はどこに保存されますか？",
    a: "スコアと最高コンボはブラウザのローカルストレージに保存され、このドリルからサーバーへは送信しません。ブラウザのデータを消すと記録も消えます。詳しくはプライバシーポリシーをご確認ください。"
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "落下キャッチゲームの遊び方",
  "description": "緑は取って赤は見送る、4ステップの遊び方です。",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "色を先に確認", "text": "標的が出たら、緑か赤かを先に確認します。" },
    { "@type": "HowToStep", "position": 2, "name": "赤は押さない", "text": "赤いダミーはクリックせず、そのまま下へ見送ります。" },
    { "@type": "HowToStep", "position": 3, "name": "落下線の下で待つ", "text": "緑なら落ちてくる線の下にカーソルを置き、重なった瞬間にクリックします。" },
    { "@type": "HowToStep", "position": 4, "name": "コンボを伸ばす", "text": "ミスなく続けて取り、+2秒とコンボ倍率を積み上げます。" }
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` }))
};

const dropGuide = {
  heading: "落下キャッチゲームの遊び方ガイド",
  intro: [
    "ドロップキャッチは、ブラウザで遊べる無料の落下キャッチゲームです。画面の上から落ちてくる標的のうち緑だけをクリックし、赤いダミーは見送ります。緑を取ると+2秒、ミスすると-1秒です。",
    "色を見分けてから反応する選択反応は、単純な反応より時間がかかる傾向があります（Donders, 1868）。また、押そうとする動きと止めようとする動きが競争するという説明があります（Logan et al., 1984）。このゲームはその2つを気軽に試せるように作られています。",
    "近づいてくる物体が届くまでの時間を人がどう見積もるかは、リー（Lee, 1976）の研究で扱われています。落下速度はレベルとともに約400px/sから1,250px/sへ上がるので、判断が遅れるほど難しくなります。",
    "記録は練習用のスコアです。医学的な反応時間検査や選手の評価ではありません。比べるときは同じ機器とモニターで比べてください。"
  ],
  benchmarks: {
    title: "スコア帯の目安",
    headers: ["段階", "スコア帯", "正確さの目安", "練習ポイント"],
    rows: [
      ["1", "6,000点未満", "70%未満", "赤いダミーを押さない習慣をつける"],
      ["2", "6,000 – 10,999点", "70 – 81%", "色を確認してからクリックする"],
      ["3", "11,000 – 16,999点", "82 – 89%", "コンボを切らさずに続ける"],
      ["4", "17,000 – 23,999点", "90 – 94%", "速い落下でもダミーを見送る"],
      ["5", "24,000点以上", "95%以上", "+2秒を積み上げて長く続ける"]
    ],
    note: "SkillDrillsが練習用に分けたスコア帯です。ユーザー統計、パーセンタイル、プロ選手の基準ではありません。"
  },
  techniques: {
    title: "スコアを伸ばす4つのコツ",
    items: [
      {
        name: "広く見て色を先に確認",
        desc: "画面の一点に固定せず、上から中ほどまでを広く見て、標的が出たらまず色を確認しましょう。",
        tips: "色を確認するまで指に力を入れないようにします。"
      },
      {
        name: "赤はそのまま見送る",
        desc: "赤いダミーは見送れば損はありません。押すとコンボが消えて1秒減るので、迷ったら押さないでください。",
        tips: "ダミーの割合が増える後半は正確さを優先します。"
      },
      {
        name: "落下線の下で待ち構える",
        desc: "標的を追いかけるより、これから通る線の下にカーソルを先に置くと移動が短くなります。",
        tips: "画面の中ほどで取ると余裕が生まれます。"
      },
      {
        name: "力を抜いて持つ",
        desc: "上下に素早く動かすときは手の力を抜き、指と手首で小さく合わせましょう。",
        tips: "疲れたら休み、同じ機器で比べます。"
      }
    ]
  },
  steps: [
    "カーソルを画面中央に置き、上から中ほどまでを広く見ます。",
    "標的が落ちてきたら、緑か赤かを先に確認します。",
    "緑はクリックで取り、赤いダミーは押さずに見送ります。",
    "緑を取るたびに得る+2秒とコンボを保ってスコアを伸ばします。"
  ],
  audience: "落ちてくるものを色で見分けてクリックするゲームを遊びたい方、選択反応と衝動のコントロールを気軽に練習したいゲーマー。",
  faqs,
  sources: pickSources('donders1868', 'lee1976', 'logan1984', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function LocalizedDropCatchPageJa() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <DropCatchClient
        copy={{
          title: "落下キャッチゲーム",
          subtitle: "緑だけ取って、赤いダミーは見送る",
          hudLabels: {
            score: "スコア",
            time: "残り時間",
            bestScore: "自己ベスト",
            bestCombo: "最高コンボ"
          },
          rulesTitle: "ルールと採点",
          rulesItems: [
            { title: "緑をキャッチして時間延長", text: "落ちてくる緑の標的をクリックすると100点（コンボとレベルの倍率つき）と+2秒（上限60秒）を獲得します。" },
            { title: "コンボ倍率", text: "ミスなく続けて取ると、コンボ倍率が最大3.0倍まで上がります。" },
            { title: "難易度の上昇", text: "1,750点ごとにレベルが上がり、落下速度（最大1,250px/s）と赤いダミーの割合（最大45%）が増えます。" },
            { title: "ミスと減点", text: "緑を見逃す、赤いダミーや何もない場所をクリックすると、コンボが1.0倍に戻り残り時間が1秒減ります。" }
          ],
          aboutTitle: "ドロップキャッチについて",
          aboutSections: [
            {
              title: "落ちてくる標的のタイミング",
              subtitle: "リー（Lee, 1976）の接触までの時間の研究",
              content: "落下速度はレベルとともに上がります。近づく物体が届くまでの時間を人がどう見積もるかの研究で、クリックのタイミングを考える参考になります。"
            },
            {
              title: "押す動きと止める動き",
              subtitle: "ローガン（Logan, 1984）の停止信号モデル",
              content: "赤いダミーが出ると、押そうとする動きと止めようとする動きが競争するというモデルがあります。ダミーを押さない練習になります。"
            },
            {
              title: "選択反応と反応時間",
              subtitle: "ドンデルス（Donders, 1868）の反応時間研究",
              content: "刺激を見分けて反応する場合、単純な反応より時間が長くなる傾向があります。緑だけを押す選択型の課題です。"
            },
            {
              title: "大きく動いて小さく合わせる",
              subtitle: "ウッドワース（1899）とフィッツ（1954）の研究",
              content: "素早いポインティングは、大きく動かしてから最後に小さく修正する2段階で説明されます。落下線の下へ先に動かし、最後に減速してクリックしましょう。"
            }
          ]
        }}
      />
      <DrillGuide {...dropGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/drop-catch" />
    </>
  );
}
