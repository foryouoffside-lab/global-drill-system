import AutoPursuitClient from '@/app/drills/visual/tracking-accuracy/pursuit-tracker/AutoPursuitClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "スムースパシュート | 視線追従トレーニング | SkillDrills",
  description: "速さと向きを変えながら動く点をマウスカーソルで追い続ける無料スムースパシュート練習。約1秒重ね続けるごとに+5点、45秒ラウンド。視線の計測ではありません。",
  keywords: [
    "スムースパシュート",
    "スムースパシュート テスト",
    "視線追従",
    "動く点を追う",
    "カーソル追従 ゲーム",
    "トラッキング 練習"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "スムースパシュート | 視線追従トレーニング | SkillDrills",
    description: "動き回る点にカーソルを重ね続ける無料スムースパシュート練習。採点はカーソル位置だけで、目の動きは記録しません。",
    type: 'article',
    url: 'https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "スムースパシュート | 視線追従トレーニング | SkillDrills",
    description: "動く点をカーソルで45秒間追い続ける、無料のスムースパシュート練習です。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/pursuit-tracker'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "訓練ハブ", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "視覚・動体視力トレーニング", "item": "https://skilldrills.online/ja/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "動体追従・トラッキング", "item": "https://skilldrills.online/ja/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "スムースパシュート", "item": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "スムースパシュート・視線追従トレーニング",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "画面を動き回り、速さと向きを変える点にマウスカーソル（または指）を重ね続ける45秒のブラウザ練習です。採点はカーソル位置のみで、カメラによる視線計測ではありません。",
  "featureList": [
    "45秒固定ラウンド、点はランダムに速さと向きを変え壁で跳ね返る",
    "カーソルが点の上（広めの判定）に約1秒とどまるごとに+5点、連続記録+1",
    "2秒以上外れても連続記録がリセットされるだけで、得点や時間は減らない",
    "スコアが上がるほど点が小さく速くなる、記録はブラウザのローカルストレージにのみ保存"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "スムースパシュート・視線追従トレーニング | SkillDrills",
  "alternateName": "Pursuit Tracker Pro",
  "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker",
  "dateModified": "2026-11-12",
  "description": "無料スムースパシュート練習：動く点をカーソルで45秒間見失わずに追い続けます。",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas対応のモダンブラウザ",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "動く対象を目で追いながらカーソルを重ね続ける"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "スムースパシュート・視線追従トレーニング",
  "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker",
  "description": "速さと向きを変えながら動く点をカーソルで追い続ける無料のスムースパシュート練習ゲーム。",
  "genre": [
    "Action",
    "Visual Tracking"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "スムースパシュート練習のやり方",
  "dateModified": "2026-11-12",
  "description": "45秒ラウンドを進める4ステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "点にカーソルを重ねる",
      "text": "カウントダウン後にオレンジ色の点が現れて動き回ります。カーソル（タッチ画面では指）を重ねると点が緑色になります。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "約1秒ずつ保つ",
      "text": "点の周りのリングが満ちると（約1秒）+5点、連続記録+1です。途中で外れるとリングは最初からやり直しです。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "向きの変化についていく",
      "text": "点は予告なく速さと向きを変え、壁で跳ね返ります。スコアと連続記録が上がるほど速く小さくなります。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "最後まで追い続ける",
      "text": "2秒以上外れると連続記録だけがリセットされ、得点や時間は減りません。45秒でラウンド終了です。",
      "url": "https://skilldrills.online/ja/drills/visual/tracking-accuracy/pursuit-tracker#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "このスムースパシュート練習はどんな内容ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "画面を動き回る点にマウスカーソルを重ね続ける45秒のゲームです。途切れずに約1秒保つごとに5点が入ります。採点はカーソル位置だけで、カメラやアイトラッカーで目の動きを計測することはありません。"
      }
    },
    {
      "@type": "Question",
      "name": "点から外れるとどうなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "外れた瞬間に進行中の1秒リングがリセットされ、2秒以上外れると連続記録が0に戻ります。得点や残り時間は減りません。"
      }
    },
    {
      "@type": "Question",
      "name": "だんだん難しくなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "スコアが上がるほど点が小さく（元の大きさの半分まで）なり、最高速度も上がります。連続記録が伸びても点は速くなります。"
      }
    },
    {
      "@type": "Question",
      "name": "モニターのリフレッシュレートは影響しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。このゲームは画面のフレーム数で時間を数えるため、60Hzでは約1秒ごとに得点が入り、リフレッシュレートの高いモニターでは得点も点の動きも速くなります。機器が違うとスコアを単純に比較できません。"
      }
    },
    {
      "@type": "Question",
      "name": "スムースパシュート（滑動性眼球運動）とは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "動く物体を視野の中心に保つために、目がなめらかに追いかける動きです。物体が速すぎると目が遅れ、短いサッケードで追いつきます（Krauzlis, 2004）。このゲームはその状況をカーソルで練習するもので、目の動きを計測しません。"
      }
    },
    {
      "@type": "Question",
      "name": "視力やエイムが上達しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "スコアが上がるのは、この課題に慣れたことを示します。視力、ゲームの腕前、運動能力の向上は保証されません。"
      }
    },
    {
      "@type": "Question",
      "name": "無料ですか？記録はどこに保存されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "登録不要・無料です。ベストスコアなどの記録はお使いのブラウザのローカルストレージにのみ保存されます。"
      }
    }
  ]
};

const guideData = {
  heading: "スムースパシュート：動く点をカーソルで追う方法",
  intro: [
    "このスムースパシュート練習は、画面を動き回る点を目で追いながら、マウスカーソルをその上に重ね続ける45秒のゲームです。採点はカーソルが点の上にとどまった時間だけで行い、カメラで視線を追跡することはありません。",
    "カーソルが点の上（広めの判定）に約1秒途切れずにとどまると+5点、連続記録+1です。点は予告なく速さと向きを変えて壁で跳ね返り、スコアが上がるほど小さく速くなります。2秒以上外れても連続記録がリセットされるだけで減点はありません。",
    "目は遅い物体ならなめらかに追えますが、速すぎると遅れて短い跳躍運動で追いつきます（Krauzlis, 2004）。このゲームはその状況を単純なカーソル課題にしたものです。"
  ],
  benchmarks: {
    "title": "SkillDrills 練習バンド（このゲーム専用・60Hz基準）",
    "headers": [
      "バンド",
      "45秒のスコア",
      "説明"
    ],
    "rows": [
      [
        "上位",
        "180点以上",
        "ほぼ全時間、点を見失わない。"
      ],
      [
        "安定",
        "120 – 179点",
        "向きが変わった直後にときどき外れる。"
      ],
      [
        "練習中",
        "60 – 119点",
        "速い場面で途切れがち。"
      ],
      [
        "スタート",
        "60点未満",
        "ゲームに慣れていく段階。"
      ]
    ],
    "note": "SkillDrills がこのゲーム用に設定した練習の目安で、研究に基づく基準値や視力の評価ではありません。リフレッシュレートやマウス環境で変わります。"
  },
  techniques: {
    "title": "点を見失わないコツ",
    "items": [
      {
        "name": "点の中心にカーソルを置く",
        "desc": "端に引っかかっているだけだと、小さな方向転換でも外れます。",
        "tips": "カーソルを点の真ん中に置いて一緒に動かします。"
      },
      {
        "name": "手首の力を抜く",
        "desc": "力が入るとカーソルが跳ねて判定から外れやすくなります。",
        "tips": "小さな動きは手首、大きな移動は腕で追います。"
      },
      {
        "name": "壁の近くで備える",
        "desc": "点は壁に触れるとすぐ跳ね返ります。",
        "tips": "壁に近づいたら逆方向へ動く準備をします。"
      },
      {
        "name": "外れてもすぐ戻る",
        "desc": "2秒以内に戻れば連続記録は保たれます。",
        "tips": "外れても止まらず、すぐに点の上へ戻ります。"
      }
    ]
  },
  steps: [
    "スタートボタンを押してカウントダウンを待ちます。",
    "現れた点にカーソルを重ね、緑色になることを確認します。",
    "リングが満ちるたび（約1秒）に5点ずつ積み重なるよう追い続けます。",
    "点が向きを変えたり壁で跳ね返ったりしてもカーソルを重ねておきます。",
    "45秒が終わったらスコア、連続記録、評価を確認します。"
  ],
  audience: "動く対象をカーソルで追い続ける練習をしてみたい人や、トラッキングの感覚を気軽に確かめたいゲーマー。",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('krauzlis2004', 'rashbass1961'),
  related: [
    {
      "href": "/ja/drills/visual/tracking-accuracy/moving-target",
      "label": "動体視力を鍛えるゲーム"
    },
    {
      "href": "/ja/drills/visual/tracking-accuracy/multiple-targets",
      "label": "複数対象追跡テスト"
    },
    {
      "href": "/ja/drills/visual/visual-recognition/visual-search",
      "label": "視覚探索ゲーム"
    },
    {
      "href": "/ja/drills/reaction-speed/visual-tracking-speed-test",
      "label": "動体視力テスト"
    }
  ]
};

export default function LocalizedPursuitTrackerJaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <AutoPursuitClient copy={{  "title": "スムースパシュート" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
