import AngleHoldClient from '@/app/drills/fps/angle-hold-trainer/AngleHoldClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — ja-JP (fps / angle-hold-trainer)
// PRIMARY DOMESTIC: "エイム練習"               — 1,526 exact / 1,933 broad searches/mo
// ANGLE INTENT:     "置きエイム 練習"          — 28 exact / 210 broad searches/mo
// AUTOCOMPLETE:     "置きエイム 練習サイト", "valorant 置きエイム 練習"
// SECONDARY / LSI:
//                   "プリエイム 練習"          — Pre-aim technique search
//                   "クロスヘア 練習"          — Crosshair placement phrase
//                   "置き幅 練習"              — Wall offset adjustment query
//                   "アングルアドバンテージ"    — Perspective geometry query
//                   "ピークアドバンテージ"      — Peeker's advantage netcode concept
//                   "ヘッドライン 合わせ方"    — Head level crosshair alignment
// EXCLUDED BRANDS:  "okiaimx" (2,475/mo), "aimlab" (200/mo), "kovaaks" (333/mo)
// WINNER TITLE:     置きエイム練習｜角待ち・飛び出し反応 | SkillDrills
// ============================================================

export const metadata = {
  title: "置きエイム練習｜角待ち・飛び出し反応 | SkillDrills",
  description: "無料の置きエイム練習。角に置く幅と頭の高さを整え、敵の飛び出しに対する初弾の反応をブラウザで測定します。VALORANT・CS2の角待ち練習に。",
  keywords: [
    "エイム練習",
    "エイム練習 ブラウザ",
    "エイム練習 valorant",
    "置きエイム",
    "置きエイム 練習",
    "プリエイム",
    "クロスヘア 練習",
    "置き幅 練習",
    "FPS 置きエイム",
    "valorant 置きエイム 練習",
    "置きエイム 練習サイト",
    "ピークアドバンテージ 対策",
    "ヘッドライン 練習"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/angle-hold-trainer",
    languages: getAlternateLanguages('/drills/fps/angle-hold-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "置きエイム練習｜角待ち・飛び出し反応 | SkillDrills",
    description: "無料の置きエイム練習。角に置く幅と頭の高さを整え、敵の飛び出しに対する初弾の反応をブラウザで測定します。VALORANT・CS2の角待ち練習に。",
    url: "https://skilldrills.online/ja/drills/fps/angle-hold-trainer",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "置きエイム練習｜角待ち・飛び出し反応 | SkillDrills",
    description: "無料の置きエイム練習。角に置く幅と頭の高さを整え、敵の飛び出しに対する初弾の反応をブラウザで測定します。VALORANT・CS2の角待ち練習に。",
  },
};

export default function JapaneseAngleHoldPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSドリル", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "エイム練習 - 置きエイム", "item": "https://skilldrills.online/ja/drills/fps/angle-hold-trainer" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "エイム練習 - 置きエイム",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "壁角からの敵の飛び出しに対するプリエイム規律、適切な置き幅、防衛アングル保持反応速度を訓練する無料ブラウザFPSエイムトレーナー。",
    "genre": "FPS Training / Crosshair Placement",
    "url": "https://skilldrills.online/ja/drills/fps/angle-hold-trainer",
    "dateModified": "2026-09-20",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
      "name": "エイム練習 - 置きエイム",
    "url": "https://skilldrills.online/ja/drills/fps/angle-hold-trainer",
    "description": "壁角からの敵の飛び出しに対するプリエイム規律、適切な置き幅、防衛アングル保持反応速度を訓練する無料ブラウザFPSエイムトレーナー。",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires HTML5 Canvas and Pointer Lock API support",
    "dateModified": "2026-09-20"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "エイム練習 - 置きエイム",
    "url": "https://skilldrills.online/ja/drills/fps/angle-hold-trainer",
    "description": "壁角からの敵の飛び出しに対するプリエイム規律、適切な置き幅、防衛アングル保持反応速度を訓練する無料ブラウザFPSエイムトレーナー。",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-09-20"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-09-20",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "置きエイム（プリエイム・アングルホールド）とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "置きエイムとは、敵が出現すると予測される壁際やチョークポイントのヘッドライン（頭の高さ）にあらかじめレティクルを固定して待機する基本技術です。敵が現れてから照準を合わせに行くフリックエイムとは異なり、照準合わせの所要時間をゼロにして純粋な反応クリックのみで撃破します。"
        }
      },
      {
        "@type": "Question",
        "name": "FPSにおけるピークアドバンテージ（飛び出し有利）とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ピークアドバンテージとは、オンラインゲームのクライアント・サーバー間通信遅延（Pingおよび補間バッファ）によって発生する現象です。壁から飛び出した攻撃側の動きがサーバーを経由して防御側の画面に表示されるまでに40〜90ms程度のタイムラグが生じるため、動いている攻撃側の方が静止している防御側よりも先に相手を視認できます。"
        }
      },
      {
        "@type": "Question",
        "name": "VALORANTやCS2で角を待つ際、壁からどれくらいレティクルを離すべきですか（置き幅）？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "適切な置き幅は自身の反応速度と敵の飛び出し速度（ワイドスイングか歩きピークか）によって決まります。壁の角にぴったり密着させると人間の視覚遅延（約180〜220ms）により頭が通り過ぎてしまうため、敵が自らレティクルの中に走って飛び込んでくるよう数キャラ分外側に隙間を空けて構えます。"
        }
      },
      {
        "@type": "Question",
        "name": "置きエイム中に敵のフェイクピークに釣られて早撃ちしてしまう原因は何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "早撃ち（プリファイアの暴発）は、視覚的な刺激に対する認知的なGo/No-Go判断の乱れや過剰な緊張によって引き起こされます。完全な露出と肩透かし（ショルダーピーク）を識別するトリガーディシプリンを反復練習し、実露出を確認してから撃つ神経回路を強化する必要があります。"
        }
      },
      {
        "@type": "Question",
        "name": "置きエイムとクリアリング（プリエイム）の違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "置きエイムは防衛側が静止して敵の侵入を待ち構える防御技術であるのに対し、プリエイム（クリアリング）は攻撃側が角を曲がる際に敵がいるであろう位置にあらかじめ照準を合わせながらピークする能動技術です。"
        }
      },
      {
        "@type": "Question",
        "name": "ネットコードにおけるピークアドバンテージの計算式は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ピークアドバンテージの遅延時間は概ね「T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp」で表されます。攻撃側と防御側双方の片道Pingとサーバー補間時間の合計値が、静止している防御側が受ける視覚遅延のハンディキャップとなります。"
        }
      },
      {
        "@type": "Question",
        "name": "モニターのリフレッシュレートは置きエイムの反応速度に影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、大きく影響します。一般的な60Hzモニターのフレーム間隔が約16.67msであるのに対し、144Hzは約6.94ms、240Hzは約4.17ms、360Hzは約2.78msで更新されます。高リフレッシュレート環境では敵が角から顔を出した最初のフレームが物理的に早く眼球へ届くため、視覚遅延を大幅に削減できます。"
        }
      },
      {
        "@type": "Question",
        "name": "オフアングル（変則ポジション）はなぜ有効なのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一般的な角待ちポジションは攻撃側にプリエイムされやすいためです。定番の角から半歩外れた「オフアングル」で待機することで、相手のクロスヘアを外し、相手にマイクロフリックを強いることで撃ち合いを有利に進められます。"
        }
      },
      {
        "@type": "Question",
        "name": "置きエイムの練習は1日にどれくらい行うべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "毎日のランクマッチ前に10〜15分間の集中した置きエイムドリルを行うのが最も効果的です。長時間の練習は神経筋の疲労を招き反応速度の低下を引き起こすため、短期集中で反射の鋭さとトリガーディシプリンを活性化させることが推奨されます。"
        }
      },
      {
        "@type": "Question",
        "name": "このツールはブラウザ上で生のマウス入力に対応していますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい。HTML5 Pointer Lock APIを使用し、ブラウザのOSマウスマウス加速を排除した1:1のハードウェア入力を実現しています。時間計測はperformance.now()高精度クロックで行われます。なおブラウザのタイマーはセキュリティ上約1msに丸められており、ディスプレイのリフレッシュ間隔（約4〜16ms）を考慮すると、約5ms未満の微細な差は測定ノイズとして扱われます。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "置きエイム（プリエイム）と飛び出し反応の練習方法",
    "description": "壁角からの敵の飛び出しに対するヘッドライン維持と適切な置き幅クリックのステップバイステップ手順。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "置き幅（壁オフセット）の調整",
        "text": "壁の角から少し隙間を空けた位置にレティクルを固定し、自身の反応速度に応じた置き幅を確保します。",
        "url": "https://skilldrills.online/ja/drills/fps/angle-hold-trainer#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "ヘッドラインの固定",
        "text": "マップのオブジェクトや壁のラインを基準に敵の頭の高さ（ヘッドライン）に照準の高さを固定します。",
        "url": "https://skilldrills.online/ja/drills/fps/angle-hold-trainer#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "敵のスイング速度の予測",
        "text": "相手が走って飛び出すワイドスイングか、歩きピークかを想定し、状況に応じて置き幅を微調整します。",
        "url": "https://skilldrills.online/ja/drills/fps/angle-hold-trainer#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "照準進入の瞬間にワンクリック",
        "text": "敵ターゲットがレティクルに重なった瞬間にフリックせず即座にクリックし、無駄な補正遅延をゼロにします。",
        "url": "https://skilldrills.online/ja/drills/fps/angle-hold-trainer#step-4"
      }
    ]
  };

  const angleHoldGuideJa = {
    heading: "エイム練習と置きエイム・プリエイムガイド",
    intro: [
      "エイム練習の中でも置きエイムは、敵が出る位置にレティクルを先に置き、標的が重なった瞬間にクリックする練習です。このドリルは置き幅、ヘッドライン、飛び出し反応を測定し、VALORANT・CS2の角待ちを安定させます。",
      "VALORANTやCS2などのオンライン対戦ゲームでは、パケット通信遅延により攻撃側が角から飛び出した際に防御側より早く視認できる「ピークアドバンテージ（飛び出し有利）」が構造的に発生します（T_advantage = RTT_peeker/2 + RTT_holder/2 + T_interp）。この遅延不利を相殺するためには、壁の角に照準を密着させるのではなく、D_offset = v_peeker × T_reaction に基づいて壁から一定の隙間（置き幅）を空けて構えることが幾何学的に不可欠となります。",
      "本ツールのクロノメトリーは、高リフレッシュレート同期とperformance.now()タイムスタンプで時間を記録します。表示や入力の量子化による誤差は残りますが（Woods et al., 2015）、トリガーディシプリンと飛び出し反応速度を同じ環境で比べられます（Fitts, 1954; Hick, 1952）。",
      "計測仕様について：すべての入力イベントはブラウザの高精度パフォーマンスAPIによってミリ秒単位で記録され、すべて端末内（クライアントサイド）で完結します。ブラウザのタイマーはSpectre緩和策として約1msに丸められており、ディスプレイ表示はリフレッシュレート（60Hzで約16.7ms、144Hzで約6.9ms、240Hzで約4.1ms）単位で量子化されます（Woods et al., 2015）。そのため約5ms未満の微小な数値差は測定環境のノイズとして考慮し、他人との比較よりも同一環境での自己記録推移の確認を推奨します。"
    ],
    benchmarks: {
      title: "置きエイム防御反応速度＆ネットコード基準値（ミリ秒）",
      headers: ["動作フェーズ / 指標", "標準レイテンシ (ms)", "神経筋・ネットコード要因", "競技パフォーマンス分類"],
      rows: [
        ["単純視覚トリガー反応速度", "150 – 190 ms", "網膜中心窩の受容と一次運動野の発火", "予測された視覚刺激に対する無意識の引き金反応 (Donders, 1868)"],
        ["弁別反応遅延（フェイク・屈伸ピーク）", "210 – 280 ms", "Go/No-Go判断による実露出の識別", "ベイトや揺さぶりに対する撃ち控え自制力 (Hick, 1952)"],
        ["ピークアドバンテージによる遅延不利", "40 – 90 ms", "クライアント-サーバー間RTT往復遅延＋補間バッファ", "動いている攻撃側に生じるネットコード上の視覚先行"],
        ["実質的な防衛反応有効ウィンドウ", "250 – 340 ms", "視覚反応時間とネットワーク遅延の合計", "競技FPSにおける一般的な防御ラインの基準値"],
        ["エリート級プリエイム保持精度", "170 – 220 ms", "敵の飛び出し速度に完全に合致した置き幅", "VALORANTレディアント / CS2 Faceit Lv10の精密防衛"]
      ],
      note: "数値は認知反応クロノメトリー文献（Donders, 1868; Hick, 1952; Woods et al., 2015）および競技FPSネットコード構造分析に基づいています。個人の反応速度はモニターのリフレッシュレート、マウスのポーリングレート、および集中度によって変動します。"
    },
    techniques: {
      title: "戦術的置きエイム＆クロスヘア幾何学の要点",
      items: [
        {
          name: "壁からの置き幅（オフセット）の厳密な管理",
          desc: "壁の角に照準を密着させるのは最大の誤りです。自身の反応速度（約200ms）と相手のピーク速度を計算し、あらかじめ通過点に隙間を空けて構えます。",
          tips: "敵の頭が照準を通り過ぎてしまう場合は、置き幅を15〜20%広げてください。"
        },
        {
          name: "環境基準点を用いたヘッドライン固定",
          desc: "マップ内の木箱の継ぎ目、ドアノブ、壁の帯状テクスチャなど、頭の高さに対応するオブジェクトを目印にしてレティクルを固定します。",
          tips: "アングルをキープしている最中に無意識に照準が下がる（下向きエイム病）を徹底排除します。"
        },
        {
          name: "「合わせに行かず、入ってきたら撃つ」の徹底",
          desc: "置きエイムの極意は、敵が出現した際に照準を動かそうとせず、レティクルの中に敵の頭が入ってきた瞬間にクリックすることです。フリックを挟むと80〜120msの無駄な運動補正遅延が発生します。",
          tips: "自分の置き位置を信じ、レティクルの少し手前の空間に視界の焦点を置いて待ち構えます。"
        },
        {
          name: "オフアングル（変則ポジション）の活用",
          desc: "誰もが知っている定番の角待ちポジションは、相手にプリファイア（飛び出し撃ち）されるリスクが高くなります。定番から一歩ズレた変則的な角度に立つことで、相手の照準を狂わせます。",
          tips: "オフアングルを使う際は、撃ち合って倒した後に安全に引ける退路を必ず確保してください。"
        }
      ]
    },
    steps: [
      "「スタート」をクリックしてフルスクリーンモードに入り、ポインターをロックします。",
      "敵が出現するチョークポイントの角を想定し、ヘッドラインの高さにレティクルを構えます。",
      "自分の反応速度に合わせて壁の端から適切な置き幅（オフセットの隙間）を空けます。",
      "敵ターゲットが壁から飛び出してきた瞬間に、照準を動かさず即座にクリックします。",
      "フェイクピークに惑わされないよう自制心を保ち、スコアカードで反応速度と命中率を確認します。"
    ],
    audience: "VALORANT、CS2、レインボーシックス シージ等のタクティカルFPSプレイヤー、サイト防衛アンカー、および正確なプリエイムと置きエイム技術を習得したいすべてのゲーマー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'woodworth1899'),
    related: [
      { href: "/ja/drills/fps/flick-shot-training", label: "フリックエイム訓練" },
      { href: "/ja/drills/fps/180-degree-awareness", label: "180度視点移動の練習" },
      { href: "/ja/drills/fps/micro-correction-precision", label: "マイクロフリック練習" },
      { href: "/ja/drills/reaction-speed/reaction-time-test", label: "反射神経テスト・反応速度テスト" }
    ]
  };

  const copyJa = {
    h1Prefix: null,
    h1Keyword: "置きエイム練習",
    h1Suffix: " - 角待ち・プリエイム",
    subtitle: "飛び出し反応速度トレーナー",
    caption: "壁角からの敵の飛び出し（ピーク）に対し、適切な置き幅を保って即座に射撃する置きエイム練習ツール。F.C.ドンデルスの単純反応時間（Donders, 1868）とアングル幾何学に基づき、ピークアドバンテージを打破する防御プリエイムを鍛えます。",
    startTitle: "置きエイム練習",
    startSubtitle: "プリエイム・飛び出し反応・トリガーディシプリン • エンドレス難易度進行",
    statScore: "スコア",
    statTime: "残り時間",
    statAccuracy: "命中率",
    statBestScore: "自己ベスト",
    statAvgReaction: "平均反応速度",
    statMaxCombo: "最大コンボ",
    statPeakLevel: "到達レベル",
    getReady: "構えてください",
    bottomCaption: "壁の角から適切な置き幅を空けてレティクルを固定し、ターゲットが飛び出した瞬間にクリックしてください。",
    accordionRulesTitle: "ドリルルールとスコア計算方式",
    accordionAboutTitle: "エイム練習 - 置きエイムについて",
    overviewTitle: "置きエイムとプリエイムの仕組み",
    overviewLead: "置きエイムとは、敵が現れる位置にあらかじめ照準を合わせておき、敵が重なった瞬間に撃つ防衛技術です。人間の単純視覚反応時間は約200〜250msですが、敵の行動を判別する判断が加わると選択肢の数に応じて反応時間が対数的に増加します（Donders, 1868; Hick, 1952）。",
    rulesItems: [
      { num: "1", text: "ピーク命中", highlight: "+100 PTS (+0.6秒)", result: "×コンボ倍率" },
      { num: "2", text: "ピーク出現", highlight: "角からの奇襲", result: "露出時間短縮" },
      { num: "3", text: "レベル進行", highlight: "+1レベル / 1400 PTS", result: "適応型難易度" },
      { num: "4", text: "ミス・早撃ち", highlight: "ペナルティ", result: "コンボリセット (-0.8s)" }
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "対象プレイヤー", text: "VALORANTでサイトを守るアンカー、CS2でチョークポイントを抑えるディフェンダー、およびミリ単位のプリエイム反応を極めたいFPSプレイヤー。" },
      { iconBg: "bg-orange-600", title: "鍛えられるスキル", text: "壁からの置き幅調整、トリガーディシプリン（早撃ち自制）、飛び出し反応速度、高低差ヘッドラインの維持力。" },
      { iconBg: "bg-purple-600", title: "フェイクピーク対策", text: "高難易度では敵が素早くフェイクスイングを仕掛けてきます。不完全な露出での早撃ちを抑え、確実な実露出を見極めて撃つ判断力を養います。" }
    ],
    aboutSections: [
      {
        title: "壁からどれくらい離して構えるべきか（置き幅の重要性）",
        paragraphs: [
          "角待ちで最も多い失敗は、壁の角にレティクルをぴったりくっつけて待つことです。人間の視覚情報処理と神経伝達には物理的な遅延（約180〜220ms）が存在するため、壁際に置いていると相手の飛び出しスピードに追いつけず、頭が通り過ぎてから撃つことになってしまいます。",
          "自分の反応速度と相手のピーク速度（ワイドピークかスローピークか）を計算し、あらかじめ通過点に隙間を空けておくことで、相手自らがレティクルに飛び込んでくる形を作り出すことができます。"
        ]
      },
      {
        title: "段階的エスカレーションと動的難易度",
        paragraphs: [
          "スコアの上昇に伴ってレベルが上がり、ターゲットの露出時間（露出ウィンドウ）が徐々に短縮され、ピークの発生間隔がタイトになっていきます。競技シーンのクラッチ（1on多）における極限の緊張感を再現しています。"
        ]
      },
      {
        title: "記録・分析される指標",
        paragraphs: [
          "平均反応速度（ms）はターゲットが出現してからクリックを完了するまでの純粋な応答時間を計測します。最大コンボ数は早撃ちや見逃しを犯さずにどれだけ正確な防衛規律を維持できたかを示します。"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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

      <AngleHoldClient copy={copyJa} />

      <RelatedDrills />

      <DrillGuide guide={angleHoldGuideJa} />
      <DrillFooter />
    </>
  );
}
