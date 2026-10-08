import ReactionTimeTestWrapper from '@/app/drills/reaction-speed/reaction-time-test/ReactionTimeTestWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  "title": "体内時計ゲーム｜目標タイムを狙う | SkillDrills",
  "description": "目標タイムを見て、その時間が経った瞬間にクリックする時間感覚ゲーム。反応速度テストではありません。合図への反応は反射神経テスト（光反応）で。",
  "keywords": [
    "体内時計ゲーム",
    "時間感覚ゲーム",
    "タイミングゲーム",
    "目標タイム ゲーム",
    "ストップウォッチ ゲーム",
    "時間感覚 トレーニング",
    "タイミング練習",
    "クリックタイミング"
  ],
  "alternates": {
    "canonical": "https://skilldrills.online/ja/drills/reaction-speed/reaction-time-test",
    "languages": getAlternateLanguages('/drills/reaction-speed/reaction-time-test')
  },
  "openGraph": {
    "images": [
      {
        "url": "https://skilldrills.online/opengraph-image",
        "width": 1200,
        "height": 630
      }
    ],
    "title": "体内時計ゲーム｜目標タイムを狙う | SkillDrills",
    "description": "1〜8秒の目標タイムを体内時計で狙い、クリックのズレをミリ秒で確認できる無料の時間感覚ゲームです。",
    "url": "https://skilldrills.online/ja/drills/reaction-speed/reaction-time-test",
    "siteName": "SkillDrills",
    "locale": "ja_JP",
    "type": "website"
  },
  "twitter": {
    "images": [
      "https://skilldrills.online/opengraph-image"
    ],
    "card": "summary_large_image",
    "title": "体内時計ゲーム｜目標タイムを狙う | SkillDrills",
    "description": "目標タイムを覚えて、経ったと思った瞬間にクリック。ズレをミリ秒で確認できる時間感覚ゲーム。"
  },
  "robots": {
    "index": true,
    "follow": true
  }
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
      "name": "訓練ハブ",
      "item": "https://skilldrills.online/ja/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "反射神経・反応速度",
      "item": "https://skilldrills.online/ja/drills/reaction-speed"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "体内時計ゲーム",
      "item": "https://skilldrills.online/ja/drills/reaction-speed/reaction-time-test"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "sameAs": [
    "https://en.wikipedia.org/wiki/Time_perception"
  ],
  "name": "体内時計ゲーム｜目標タイムを狙う",
  "alternateName": [
    "時間感覚ゲーム",
    "ストップタイマーゲーム",
    "体内時計トレーニング"
  ],
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "description": "ブラウザで遊べる時間感覚ゲーム。目標タイムを見て、経ったと思った瞬間にクリックし、ズレをミリ秒で確認します。"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "体内時計ゲーム｜目標タイムを狙う | SkillDrills",
  "url": "https://skilldrills.online/ja/drills/reaction-speed/reaction-time-test",
  "description": "無料の時間感覚ゲーム。クリックが目標タイムにどれだけ近いかを測るもので、合図への反応速度を測るテストではありません。",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
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
  "teaches": "時間の見積もり、インターバルタイミング、クリックタイミングの安定"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "体内時計ゲーム｜目標タイムを狙う",
  "url": "https://skilldrills.online/ja/drills/reaction-speed/reaction-time-test",
  "description": "タイミングゲーム：1〜8秒の目標タイムを覚えて、経ったと思った瞬間にクリックします。",
  "genre": [
    "Timing Game",
    "Casual"
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
  "name": "体内時計ゲームの遊び方",
  "description": "目標タイムを覚え、経ったと思った瞬間にクリックして、ズレをミリ秒で確認します。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "ドリルを開始",
      "text": "「ドリル開始」をクリックまたはタップして、全画面のアリーナを開きます。",
      "url": "https://skilldrills.online/ja/drills/reaction-speed/reaction-time-test#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "目標タイムを覚える",
      "text": "1〜8秒の目標タイムを読みます。数字はしばらくすると消えます。",
      "url": "https://skilldrills.online/ja/drills/reaction-speed/reaction-time-test#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "時間が経ったらクリック",
      "text": "目標タイムが経ったと思った瞬間にクリックまたはタップします。時計が進んでいる間、数字は表示されません。",
      "url": "https://skilldrills.online/ja/drills/reaction-speed/reaction-time-test#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "ズレを確認",
      "text": "数ラウンド遊んで、平均誤差と安定度を比べます。",
      "url": "https://skilldrills.online/ja/drills/reaction-speed/reaction-time-test#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "これは反応速度テストですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ、時間感覚ゲームです。目標タイムが表示され、その時間が経ったと思った瞬間にクリックすると、ズレがミリ秒で表示されます。合図への反応の速さを測るには、反射神経テスト（光反応テスト）を使ってください。"
      }
    },
    {
      "@type": "Question",
      "name": "ゲームの仕組みを教えてください。",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "目標タイムがしばらく表示されて消えます。その後、数字のない光る球体が動き、裏で時計が進みます。目標タイムが経ったと思った瞬間にクリックすると、クリックした正確な時刻と誤差が表示されます。"
      }
    },
    {
      "@type": "Question",
      "name": "目標タイムはどのくらいの長さですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "最初は約1〜2秒の範囲で始まり、レベルが上がると上限が伸びて最大8秒になります。目標は3.250sのように小数点以下3桁で表示されます。"
      }
    },
    {
      "@type": "Question",
      "name": "スコアはどう計算されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "誤差は「クリックの時刻 − 目標タイム」です。誤差が50ms＋目標の5%以内なら命中となり、3秒の目標なら200msです。近いほど高得点で、10ms未満はEXACT評価、連続命中でコンボ倍率が最大3.0倍まで上がります。"
      }
    },
    {
      "@type": "Question",
      "name": "早すぎる、または遅すぎるクリックはどうなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "どちらも誤差です。許容範囲外のクリックはミスとなり、コンボがリセットされて赤い警告が出ますが、スコアは維持されます。"
      }
    },
    {
      "@type": "Question",
      "name": "頭の中でカウントしてもいいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、カウントは自分の戦略です。球体に数字はなく、周囲のリングが1秒に1回脈打つので、拍として使えます。いろいろ試して、平均誤差が最も小さい方法を選びましょう。"
      }
    },
    {
      "@type": "Question",
      "name": "リフレッシュレートや入力遅延は結果に影響しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "わずかに影響します。クリックはブラウザのperformance.now()で記録されますが、ディスプレイは60Hzで16.7ms、144Hzで6.9ms、240Hzで4.2msごとにしか画面を更新せず、入力機器にもポーリング遅延があります（Woods et al., 2015）。比較は同じ端末で行ってください。"
      }
    },
    {
      "@type": "Question",
      "name": "練習でタイミングは上達しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "練習した課題は上達しやすい傾向があるため、このドリルの平均誤差は小さくなる可能性があります。他の課題にどこまで効果が及ぶかは人によって異なり、保証されません。"
      }
    },
    {
      "@type": "Question",
      "name": "「10秒チャレンジ」と同じですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "秒数を時計なしで見積もる点は似ていますが、目標はラウンドごとに変わり、10秒固定ではありません。また、成功か失敗かではなく誤差の大きさで採点します。"
      }
    },
    {
      "@type": "Question",
      "name": "無料ですか？スマホでも遊べますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、無料で登録やダウンロードは不要です。スマホのブラウザでも動きますが、タッチ入力には独自の遅延があるため、同じ端末での記録同士で比べてください。"
      }
    }
  ]
};

const reactionGuide = {
  "heading": "体内時計ゲームの仕組みと採点方法",
  "intro": [
    "これは反応速度テストではなく、時間感覚を試すゲームです。1〜8秒の目標タイムが短時間表示されて消え、その時間が経ったと思った瞬間にクリックします。クリックと目標のズレがミリ秒で表示されます。視覚的な合図への反応の速さを測りたい場合は、反射神経テスト（光反応テスト）を使ってください。",
    "すべてのクリックは、端末内でブラウザのperformance.now()タイマーにより記録されます。ディスプレイは見える映像をリフレッシュ間隔に丸めます。60Hzで約16.7ms、144Hzで6.9ms、240Hzで4.2msです（Woods et al., 2015）。マウスのポーリングは125Hzで約8ms、1000Hzで約1msの遅延を加えます。",
    "約5ms未満の差は測定ノイズとして扱い、他人の環境ではなく同じ端末での自分の記録同士で比べてください。これは練習用ツールであり、医学的な測定ではありません。"
  ],
  "benchmarks": {
    "title": "タイミング誤差の評価",
    "headers": [
      "評価",
      "許容誤差",
      "目標3.000sの場合の例"
    ],
    "rows": [
      [
        "EXACT",
        "10msまで",
        "2.990s〜3.010sの間でクリック"
      ],
      [
        "PERFECT",
        "命中範囲の20%まで",
        "40ms以内"
      ],
      [
        "EXCELLENT",
        "命中範囲の40%まで",
        "80ms以内"
      ],
      [
        "GOOD",
        "命中範囲の60%まで",
        "120ms以内"
      ],
      [
        "OK",
        "命中範囲の80%まで",
        "160ms以内"
      ],
      [
        "HIT",
        "命中範囲いっぱいまで",
        "200ms以内"
      ]
    ],
    "note": "命中範囲は50msに目標タイムの5%を足した値で、目標が長いほど絶対値では緩くなります。これはこのドリルの採点ルールであり、一般的な基準値ではありません。"
  },
  "techniques": {
    "title": "短い時間を見積もる方法",
    "items": [
      {
        "name": "一定のペースで数える",
        "desc": "心の中で細かく区切って数えると、再現しやすい体内リズムが作れます。目標によって合うカウント速度は異なります。",
        "tips": "カウント速度を1つ決めてセッション中は変えないと、誤差を比べやすくなります。"
      },
      {
        "name": "1秒ごとの脈動を使う",
        "desc": "球体の周囲のリングは1秒に1回脈打ちます。脈動を1拍と数えれば、整数秒は足し算で済み、端数だけ見積もればよくなります。",
        "tips": "3.250sのように小数がある目標では、最後のクリックは脈動と脈動の間に来ます。"
      },
      {
        "name": "符号付きの誤差を確認する",
        "desc": "クリックのたびに、いつクリックしたかが表示されます。いつも早い、または遅いなら、内部のカウントをその分ずらしましょう。",
        "tips": "小さく一定した偏りは、大きくばらつく誤差より直しやすいです。"
      }
    ]
  },
  "steps": [
    "「ドリル開始」を押して全画面のアリーナを開きます。",
    "目標タイムが消える前に読み取ります。",
    "目標タイムが経ったと思った瞬間にクリックまたはタップします。",
    "数ラウンド遊んで、平均誤差と安定度を比べます。"
  ],
  "audience": "ゲーマー、音楽をする人、アスリートなど、クリックのタイミングを安定させ、短い時間の感覚を磨きたい方。",
  "faqs": faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('woods2015'),
  "related": [
    {
      "href": "/ja/drills/visual/reaction-speed/light-reaction",
      "label": "反射神経テスト（光反応テスト）"
    },
    {
      "href": "/ja/drills/reaction-speed",
      "label": "反射神経ハブ"
    },
    {
      "href": "/ja/drills/reaction-speed/reflex-training-drill",
      "label": "反射神経ゲーム"
    },
    {
      "href": "/ja/drills/reaction-speed/fps-tracking-trainer",
      "label": "FPS追従エイムトレーナー"
    },
    {
      "href": "/ja/drills/motor/movement-speed/rapid-tapping",
      "label": "連打測定・CPSテスト"
    }
  ]
};

export default function JapaneseReactionTimeTestPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReactionTimeTestWrapper
        copy={{
          title: "体内時計ゲーム｜目標タイムを狙う",
          subtitle: "目標タイムを覚えて、経ったと思った瞬間にクリック。ズレをミリ秒で確認できる時間感覚ゲーム",
          caption: "目標タイムが表示されて消えます。その時間が経ったと思った瞬間にクリックします。",
        }}
      />
      <DrillGuide guide={reactionGuide} />
      <DrillFooter />
    </>
  );
}
