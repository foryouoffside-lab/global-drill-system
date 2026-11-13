import ChromaSyncClient from '@/app/drills/visual/reaction-speed/go/no-go/ChromaSyncClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Go/No-Go課題｜無料オンライン反応抑制テスト | SkillDrills",
  description: "Go/No-Go課題をブラウザで無料体験。緑には素早くクリック、赤では押さずに止まる反応抑制の練習です。誤反応と見落としを記録できます。",
  keywords: [
    "Go/No-Go課題",
    "go no go テスト",
    "Go/No-Go課題 やり方",
    "ゴーノーゴー課題",
    "反応抑制",
    "反応抑制 テスト",
    "抑制機能 トレーニング",
    "衝動性 ゲーム",
    "誤反応 見落とし"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Go/No-Go課題｜無料オンライン反応抑制テスト | SkillDrills",
    description: "緑には素早くクリック、赤では押さずに止まる。反応抑制と誤反応をブラウザで確認できる無料のGo/No-Go課題です。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Go/No-Go課題｜無料オンライン反応抑制テスト | SkillDrills",
    description: "緑には素早くクリック、赤では止まる。反応抑制を練習する無料のGo/No-Go課題。"
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/go/no-go'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "ビジョントレーニング", "item": "https://skilldrills.online/ja/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "反応速度", "item": "https://skilldrills.online/ja/drills/visual/reaction-speed" },
    { "@type": "ListItem", "position": 5, "name": "Go/No-Go課題", "item": "https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Inhibitory_control"],
  "name": "Go/No-Go課題（反応抑制テスト）",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
  "description": "緑のGo刺激にはクリックし、赤のNo-Go刺激では押さずに止まるブラウザ版のGo/No-Go課題。誤反応、見落とし、反応時間を記録する練習用ツールです。",
  "featureList": [
    "performance.now() APIによるミリ秒(ms)精度の反応潜時計測",
    "難易度上昇に伴う提示時間の動的短縮（最短100ms）",
    "コミッションエラー（誤反応）とオミッションエラー（見落とし）の分離記録",
    "完全クライアントサイド実行によるローカルデータ保護"
  ],
  "dateModified": "2026-11-08"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Go/No-Go課題｜無料オンライン反応抑制テスト | SkillDrills",
  "alternateName": "Go/No-Go Pro",
  "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go",
  "dateModified": "2026-11-08",
  "description": "無料オンラインのGo/No-Go課題。緑のGo刺激にはクリックし、赤のNo-Go刺激では押さずに止まる反応抑制の練習です。",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas対応のモダンブラウザ。",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "反応抑制, 誤反応の抑制, 色の判別と反応の切り替え"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Go/No-Go課題（反応抑制トレーニング）",
  "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go",
  "description": "緑ではクリック、赤では止まる反応抑制のブラウザゲーム。",
  "genre": ["Action", "Brain Game", "Reaction Speed"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Go/No-Go課題のやり方",
  "dateModified": "2026-11-08",
  "description": "ブラウザ版Go/No-Go課題を行う4つのステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "中央レティクルに視線を固定",
      "text": "円が出る画面中央に視線を置き、指やマウスの力を抜いて構えます。",
      "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "緑のGo刺激が出たらすぐクリック",
      "text": "緑の円が出たら、表示が消える前に画面をクリックまたはタップします（+150点 × コンボ）。キーボード入力には対応していません。",
      "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "赤のNo-Go刺激が出たら指を静止",
      "text": "赤の円が出たら、消えるまで押さずに待ちます。我慢できれば+100点です。円がない間のクリックや連打も誤反応になります。",
      "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "速くなっても色を確認してから押す",
      "text": "レベルとコンボが上がると円の表示時間は最短100msまで短くなります。色を確認してから押す習慣を保ちます。",
      "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/go/no-go#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Go/No-Go課題とは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "よく出るGo刺激にはすぐ反応し、ときどき出るNo-Go刺激では反応を止める課題です。心理学では反応抑制を調べる課題として使われてきました。このページはその考え方を使ったブラウザ版の練習で、緑の円でクリックし、赤の円では押さずに待ちます。"
      }
    },
    {
      "@type": "Question",
      "name": "Go/No-Go課題のやり方を教えてください。",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「トレーニング開始」を押すと45秒の持ち時間で始まります。画面中央に緑の円が出たらクリックまたはタップし、赤の円が出たら消えるまで押さずに待ちます。正解するたびに2秒増え（最大60秒）、出題のおよそ7割が緑、3割が赤です。入力はマウスとタッチのみで、キーボードには対応していません。"
      }
    },
    {
      "@type": "Question",
      "name": "誤反応と見落としの違いは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "誤反応（コミッションエラー）は、赤のNo-Go刺激や円が出ていない間に押してしまうことです。見落とし（オミッションエラー）は、緑のGo刺激が消えるまでに押せなかったことです。前者は止める力、後者は注意の途切れや反応の遅れを示す目安になります。"
      }
    },
    {
      "@type": "Question",
      "name": "赤だと分かっているのに押してしまうのはなぜですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "緑が多く出るため、押す準備が習慣になるからです。反応を始める処理と止める処理が競争し、止める処理が先に届いたときだけ反応を抑えられるという考え方があります（Logan & Cowan, 1984）。表示が短くなるほど止める余裕が減るため、誤反応が増えやすくなります。"
      }
    },
    {
      "@type": "Question",
      "name": "FPSゲームの練習になりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "撃つ前に色を確認して判断するという点は、敵と味方を見分けてから撃つ場面に似ています。ただし、この課題は画面中央の円に反応するだけで、照準移動、索敵、移動、音などは含みません。VALORANTなどの成績が上がることは保証されません。"
      }
    },
    {
      "@type": "Question",
      "name": "結果が毎回変わるのはなぜですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "結果は画面、入力機器、眠気、集中度で変わります。同じ端末と近い体調で何度か試し、記録を比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "練習すると反応抑制は上達しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "同じ課題を繰り返すと、その課題の成績は上がりやすい傾向があります。一方で、日常生活や他のゲームにどこまで効果が及ぶかは研究でも一貫しておらず、個人差もあります。同じ条件で記録を比べ、変化の目安として使ってください。"
      }
    },
    {
      "@type": "Question",
      "name": "モニターのリフレッシュレートは結果に影響しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "影響します。画面は60Hzで約16.7ms、240Hzで約4.2msごとにしか更新されず、入力機器にも遅延があります（Woods et al., 2015）。他人と比べるより、同じ端末とブラウザで自分の記録同士を比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "記録は外部に送信されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "スコアと記録はお使いのブラウザ内（LocalStorage）に保存されます。ブラウザのデータを消去すると、過去の記録も消えることがあります。"
      }
    }
  ]
};

const goNoGoGuide = {
  heading: "Go/No-Go課題で練習する反応抑制",
  intro: [
    "Go/No-Go課題は、よく出る合図には反応し、ときどき出る合図では反応を止める課題です。速く押すだけでなく、押してはいけない場面で止まれるかどうかを見る点が、単純な反射神経テストとの違いです。",
    "このブラウザ版では、画面中央に緑の円（Go）か赤の円（No-Go）が出ます。緑はクリックまたはタップ、赤は押さずに待ちます。円が出ていない間のクリックや素早い連打も誤反応として扱われます。レベルが上がると表示時間は約600msから短くなり、最短100msになります。",
    "選択して反応する課題の考え方はドンデルス（1868）の反応時間研究にさかのぼり、反応を始める処理と止める処理の競争はLogan & Cowan（1984）がモデル化しました。このスコアは画面、入力機器、ブラウザを含めた練習の結果です。",
    "時間の計測はブラウザのperformance.now()で行います。ディスプレイのリフレッシュや入力の遅延が結果に加わるため（Woods et al., 2015）、記録は同じ端末どうしで比べてください。データはこの端末のブラウザ内に保存されます。"
  ],
  benchmarks: {
    title: "誤反応率の練習目安（このドリル独自）",
    headers: ["段階", "誤反応率", "スコアとコンボ", "見方"],
    rows: [
      ["上級", "2.0%未満", "16,000点以上 / コンボ30以上", "表示が短くなっても色を確認してから押せている"],
      ["安定", "2.0〜4.9%", "11,000〜15,999点 / コンボ20以上", "誤反応は少ない。速さを少しずつ上げてよい段階"],
      ["標準", "5.0〜9.9%", "6,500〜10,999点 / コンボ12以上", "テンポが上がると赤で押してしまうことがある"],
      ["練習中", "10.0〜18.0%", "3,000〜6,499点 / コンボ6以上", "色を見る前に押していることが多い。速さより正確さを優先"],
      ["基礎", "18.0%超", "3,000点未満 / コンボ6未満", "まず赤で止まること、連打しないことを練習する"]
    ],
    note: "この表はSkillDrillsの練習用の目安で、研究による基準値や年齢別の平均ではありません。眠気、集中度、画面環境によって結果は変わります。"
  },
  techniques: {
    title: "Go/No-Go課題で誤反応を減らすコツ",
    items: [
      {
        name: "色を確認してから押す",
        desc: "円が出たこと自体ではなく、色を合図にします。表示されたと感じた瞬間に押すと、赤でも押してしまいやすくなります。",
        tips: "最初は少し遅くてもよいので、緑だと分かってからクリックします。誤反応が減ってから速さを上げます。"
      },
      {
        name: "指の力を抜いて待つ",
        desc: "ボタンを押しかけた状態で待つと、止めるのが間に合わなくなります。",
        tips: "マウスやタッチパネルの上で指を軽く置き、押し込まずに構えます。"
      },
      {
        name: "リズムで押さない",
        desc: "緑が続くと一定のテンポで押す癖がつき、まれな赤で誤反応が増えます（Robertson et al., 1997）。",
        tips: "1回ごとに新しい合図として見ます。円がない間はクリックしないでください。連打すると円が出なくなります。"
      },
      {
        name: "同じ環境で記録する",
        desc: "表示時間が短い段階では、画面の更新間隔や入力遅延の差も結果に表れます（Woods et al., 2015）。",
        tips: "モニター、ブラウザ、入力機器、時間帯をそろえて、誤反応率と平均反応を比べます。"
      }
    ]
  },
  steps: [
    "「トレーニング開始」を押して、持ち時間45秒のGo/No-Go課題を始めます。",
    "円が出る画面中央に視線を置きます。",
    "緑のGoの円が出たら、消える前にクリックまたはタップします。",
    "赤のNo-Goの円が出たら、消えるまで押さずに待ちます。",
    "終了後、誤反応率、平均反応、到達レベルを確認します。"
  ],
  audience: "Go/No-Go課題をオンラインで試したい方、速さだけでなく「押さない判断」を練習したいゲーマーやスポーツをする方向けです。",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('donders1868', 'logan1984', 'robertson1997', 'woods2015'),
  related: [
    { href: "/ja/drills/visual/reaction-speed/light-reaction", label: "反射神経テスト（光反応）" },
    { href: "/ja/drills/reaction-speed", label: "反射神経を鍛えるサイト" },
    { href: "/ja/drills/visual/depth-perception/distance-judgment", label: "三桿法 深視力・距離判定検査" },
    { href: "/ja/drills/visual/tracking-accuracy/moving-target", label: "移動標的迎撃テスト" },
    { href: "/ja/drills/visual/tracking-accuracy/multiple-targets", label: "複数目標追跡 (MOT) 検査" },
    { href: "/ja/drills/visual/visual-recognition/entropic-grid", label: "エントロピーグリッド探索テスト" }
  ]
};

export default function ChromaSyncPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <ChromaSyncClient copy={{ title: "Go/No-Go課題（反応抑制テスト）", subtitle: "緑の円はすぐクリック、赤の円は押さずに我慢。ブラウザで無料で試せるGo/No-Go課題です。" }} />
      <DrillGuide guide={goNoGoGuide} />
      <RelatedDrills />
    </>
  );
}
