import StrobeLatencyClient from '@/app/drills/visual/reaction-speed/light-reaction/StrobeLatencyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "反射神経テスト・反応速度テスト｜無料 | SkillDrills",
  description: "無料の反射神経テスト。光った瞬間にクリックして反応速度をミリ秒で測定します。平均の目安、年齢、FPS、スマホでの注意点も解説。",
  keywords: [
    "反射神経テスト",
    "反応速度テスト",
    "反応速度測定",
    "反射神経測定",
    "反射神経テスト 平均",
    "反応速度 平均 ms",
    "反射神経テスト fps",
    "反射神経テスト スマホ",
    "反射神経テスト 年齢",
    "反応速度テスト 無料"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "反射神経テスト・反応速度テスト｜無料 | SkillDrills",
    description: "無料の反射神経テスト。光った瞬間にクリックして反応速度をミリ秒で測定します。平均の目安、年齢、FPS、スマホでの注意点も解説。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "反射神経テスト・反応速度テスト｜無料 | SkillDrills",
    description: "反射神経テストで反応速度をミリ秒測定。平均反応時間を同じ端末で比べられます。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/light-reaction'),
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
    { "@type": "ListItem", "position": 5, "name": "光反応テスト", "item": "https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
  "name": "光反応テスト (視覚反射速度測定)",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
  "description": "光の閃光刺激に対する単純視覚反応時間（SRT）および神経筋伝達潜時をミリ秒単位で計測する高精度神経認知ツール。",
  "featureList": [
    "performance.now() APIによるミリ秒(ms)精度の光学潜時計測",
    "300ms〜2,500msのランダム遅延による予測撃ちの完全排除",
    "不正連打（スパムクリック）検知による真正反射測定システム",
    "完全クライアントサイド実行によるローカルデータ保護"
  ],
  "dateModified": "2026-09-05"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "光反応テスト — 視覚反射速度測定 | SkillDrills",
  "alternateName": "Light Reaction Pro",
  "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction",
  "dateModified": "2026-09-05",
  "description": "無料オンライン視覚反射テスト。画面中央の白い閃光に最速で反応してクリックし、ミリ秒単位で反射神経を測定します。",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas対応のモダンブラウザ。",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "単純視覚反応時間, 光学運動潜時, 神経筋反射速度, ピエロンの法則, 視覚的注意配分"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "光反応反射ドリル",
  "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction",
  "description": "光の閃光刺激に対する瞬間的な反応速度と反射神経を極限まで高めるオンライントレーニング。",
  "genre": ["Action", "Reaction Speed", "Reflex Game"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "光反応テストの実施手順",
  "dateModified": "2026-09-05",
  "description": "ストロボ光刺激プロトコルを通じて視覚反応時間と神経筋潜時を測定する4つのステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "中央ターゲットに視線を固定",
      "text": "画面中央の暗い円形ターゲットに視線を静かに合わせ、不要な筋肉の緊張を緩めます。",
      "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "不規則な白の光点滅を待機",
      "text": "300msから2,500msのランダムな間隔の間、ヤマ勘でクリックせず高い集中力を維持します。",
      "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "白く光った瞬間最速でクリック",
      "text": "ターゲットが真っ白に閃光した刹那、画面をクリックまたはタップします（+150点 × コンボ × レベル）。",
      "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "連打・予測タップを避ける",
      "text": "光る前にタップすると1.2秒のクールダウンが発生するため、真の神経反射で入力します。",
      "url": "https://skilldrills.online/ja/drills/visual/reaction-speed/light-reaction#step-4"
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
      "name": "反射神経テストの平均は何ミリ秒ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "決まった一つの数値はありません。光への単純反応について、Kosinski（2008）のレビューは大学生の平均を約190ms前後と紹介しています。ブラウザの反射神経テストでは画面やマウス、ブラウザの遅延が加わるため、それより遅い数値が出るのが普通です。同じ機器で自分の平均を比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "この反射神経テストはどうやって測りますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "画面中央の円に視線を合わせ、白く光った瞬間にクリックまたはタップします。光るまでの待ち時間はランダムなので、タイミングを読んで押すことはできません。ブラウザが合図から入力までをミリ秒で記録し、終了後に平均反応時間、コンボ、評価を表示します。"
      }
    },
    {
      "@type": "Question",
      "name": "年齢によって反応速度は変わりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "一般に、単純反応時間は20代ごろに最も速く、その後は年齢とともに少しずつ遅くなる傾向が報告されています（Kosinski, 2008のレビュー）。ただし個人差が大きく、体調、集中、練習量、機器でも数値は変わります。このテストは年齢の判定や診断のためのものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "FPSやプロゲーマー向けの反応速度テストとして使えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "光への単純な反応を測るテストなので、撃ち合いの一部だけを見ています。VALORANTやApexなどのFPSでは、状況判断、クロスヘアの置き方、エイムの正確さも結果を左右します。基準値の確認に使い、エイム練習は別のドリルで行ってください。ランクの向上を保証するものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "スマホでも反射神経テストはできますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "できます。画面をタップすれば記録されます。ただしタッチ画面は端末やブラウザによって入力の遅れが異なるため、パソコンのマウスで測った数値とは比べられません。記録を比べるときは、いつも同じ端末、同じブラウザ、同じ入力方法で測ってください。"
      }
    },
    {
      "@type": "Question",
      "name": "60Hzと144Hzのモニターで反応速度テストの結果は変わりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "変わることがあります。60Hzの画面は約16.7msごとに表示を更新するため、光が実際に表示されるまで最大でその分だけ遅れます。144Hzでは約6.9ms、240Hzでは約4.2msです。1,000Hzのマウスはクリックを約1ms間隔で送ります。"
      }
    },
    {
      "@type": "Question",
      "name": "光る前にクリックするとどうなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "光る前のクリック（フライング）や速すぎる連打は検出され、1.2秒間のクールダウンが入ります。当てずっぽうの入力ではなく、光を見てからの反応を記録するための仕組みです。"
      }
    },
    {
      "@type": "Question",
      "name": "睡眠不足や疲れで反応速度は遅くなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。睡眠不足、疲労、気が散った状態では、反応が遅くなったり記録がばらついたりしやすくなります。カフェインの影響は小さく、人によって異なります。公平に比べるには、同じくらいの時間帯に、休んだ状態で、同じ画面とマウスを使って測ってください。"
      }
    },
    {
      "@type": "Question",
      "name": "このテストは無料ですか？記録はどこに保存されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、登録や課金なしで無料です。反応時間やスコアはお使いのブラウザ（LocalStorage）にのみ保存され、外部には送信されません。"
      }
    }
  ]
};

const lightReactionGuide = {
  heading: "反射神経テストで測る反応速度とミリ秒の読み方",
  intro: [
    "反射神経テストは、画面の光が出た瞬間からクリックするまでの時間（単純反応時間）をミリ秒で測ります。陸上のスタートやFPSの撃ち合いなど、合図にすぐ反応したい場面の基礎になる数値です。",
    "表示される数値には、目で光を見て手を動かすまでの時間に加えて、画面の表示遅延、マウスやタッチの入力遅延、ブラウザの処理時間が含まれます。そのため研究で報告される平均（Kosinski, 2008など）とそのまま比べることはできません。",
    "記録を比べるときは、同じ端末・同じ画面・同じ入力方法で、数回の平均を見てください。1回だけの速い記録より、平均とばらつきのほうが今の反応速度をよく表します。",
    "計測には、ブラウザ標準の performance.now() を使っています。記録はすべて端末内に保存されます。"
  ],
  benchmarks: {
    title: "反射神経テストの目安（このドリル内の練習用）",
    headers: ["段階", "平均反応時間 (ms)", "スコア・コンボの目安", "見直すポイント"],
    rows: [
      ["段階1：とても速い", "< 180 ms", "15,000点以上 | コンボ 28x+", "フライングが混ざっていないか確認しましょう。"],
      ["段階2：速い", "180 – 219 ms", "10,500 – 14,999点 | コンボ 18x+", "速さを保ったまま、ばらつきを小さくします。"],
      ["段階3：標準的", "220 – 259 ms", "6,000 – 10,499点 | コンボ 10x+", "ブラウザで測るとよく見られる範囲です。体調で前後します。"],
      ["段階4：やや遅い", "260 – 319 ms", "2,500 – 5,999点 | コンボ 5x+", "画面の遅延、目の疲れ、集中の途切れを見直しましょう。"],
      ["段階5：これから", "> 320 ms", "< 2,500点 | コンボ < 5x", "60Hz画面やタッチ入力の遅延、疲れが影響している可能性があります。"]
    ],
    note: "この目安はドリル内の練習用で、年齢別の順位や医学的な基準ではありません。画面、入力機器、体調によって数値は変わります。"
  },
  techniques: {
    title: "反応速度テストを安定させる練習方法",
    items: [
      {
        name: "中心窩の事前活性化と視線固定",
        desc: "中心窩（Fovea）をターゲット中心に完全に固定することで、視覚的注意移動に伴う20〜30msの遅延を削ぎ落とします（Posner, 1980）。",
        tips: "中央の暗い円形に視線を集中させ、待機中にHUDのタイマーやスコアへ視線を泳がせないようにしてください。"
      },
      {
        name: "ピエロン効果を活かしたコントラスト最適化",
        desc: "最大限の輝度コントラストは網膜神経節細胞の発火頻度を高め、感覚伝達時間を最短化します（Pins & Bonnet, 1996）。",
        tips: "部屋の照明を少し落とし、瞳孔を適度に開かせることで白ストロボのコントラスト刺激を最大限に受容します。"
      },
      {
        name: "指先の等尺性プレテンション保持",
        desc: "指が空中に浮いているとキーストロークやデバウンスにより不要な物理遅延が生じます（Woods et al., 2015）。",
        tips: "指先をマウスボタンやタッチ画面に軽く触れさせた状態を保ち、無駄なストロークなしに筋肉を即座に収縮させます。"
      },
      {
        name: "高リフレッシュレート環境による遅延排除",
        desc: "60Hz画面は最大16.7msの表示遅延を生みますが、240Hz画面はこれを4.1msまで圧縮します（Woods et al., 2015）。",
        tips: "144Hz〜240Hzの高リフレッシュレートモニターと1,000Hzポーリングレートのマウスを使用し、本物の反射神経を計測します。"
      }
    ]
  },
  steps: [
    "「ドリル開始」をクリックして45秒の光反応セッションを起動します。",
    "キャンバス中央の暗い円形ターゲットに視線を集中させます。",
    "300ms〜2,500msの不規則な待機時間中、ヤマ勘で押さずに待ちます。",
    "ターゲットが真っ白に点滅した瞬間、即座に画面をクリックします（+150点 × 倍率）。",
    "終了後に平均反応時間、到達最高レベル、総合評価ランクを確認します。"
  ],
  audience: "FPSなどのeスポーツ競技者、陸上短距離選手、格闘家、レーサー、そして視覚運動反射の限界に挑むすべての方。",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('woods2015', 'kosinski2008', 'pins1996', 'posner1980', 'jain2015', 'dye2009'),
  related: [
    { href: "/ja/drills/visual/reaction-speed/go/no-go", label: "Go / No-Go 衝動制御テスト" },
    { href: "/ja/drills/visual/depth-perception/distance-judgment", label: "三桿法 深視力・距離判定検査" },
    { href: "/ja/drills/visual/tracking-accuracy/moving-target", label: "移動標的迎撃テスト" },
    { href: "/ja/drills/visual/tracking-accuracy/multiple-targets", label: "複数目標追跡 (MOT) 検査" },
    { href: "/ja/drills/visual/tracking-accuracy/pursuit-tracker", label: "滑動性眼球運動トラッカー" },
    { href: "/ja/drills/visual/visual-recognition/entropic-grid", label: "エントロピーグリッド探索テスト" }
  ]
};

export default function StrobeLatencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <StrobeLatencyClient copy={{ title: "反射神経テスト（視覚反応）", startCardTitle: "反射神経テスト", startCardSubtitle: "光刺激への反応速度を測定" }} />
      <DrillGuide guide={lightReactionGuide} />
      <RelatedDrills />
    </>
  );
}
