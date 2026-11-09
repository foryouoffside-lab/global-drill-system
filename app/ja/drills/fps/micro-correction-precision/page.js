import MicroCorrectionClient from '@/app/drills/fps/micro-correction-precision/MicroCorrectionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "マイクロフリック練習｜エイム微調整 | SkillDrills",
  description: "マイクロフリック練習をブラウザで。大きなアンカーターゲットを撃つと近くに小さなマイクロターゲットが出現し、中心に近いほど高得点。命中ごとに+1秒、ミスは-1秒。VALORANT・CS2のヘッドショット精度とエイム微調整を無料で練習できます。",
  keywords: [
    "マイクロフリック練習",
    "エイム マイクロ フリック",
    "マイクロフリック",
    "エイム 微調整",
    "ヘッドショット 精度 練習",
    "エイムトレーナー 無料",
    "微小エイム 補正",
    "ヘッドショット 微調整",
    "マウス 減速 コントロール"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/micro-correction-precision",
    languages: getAlternateLanguages('/drills/fps/micro-correction-precision'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "マイクロフリック練習｜エイム微調整 | SkillDrills",
    description: "マイクロフリック練習をブラウザで。大きなアンカーターゲットを撃つと近くに小さなマイクロターゲットが出現し、中心に近いほど高得点。命中ごとに+1秒、ミスは-1秒。VALORANT・CS2のヘッドショット精度とエイム微調整を無料で練習できます。",
    url: "https://skilldrills.online/ja/drills/fps/micro-correction-precision",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "マイクロフリック練習｜エイム微調整 | SkillDrills",
    description: "マイクロフリック練習をブラウザで。大きなアンカーターゲットを撃つと近くに小さなマイクロターゲットが出現し、中心に近いほど高得点。命中ごとに+1秒、ミスは-1秒。VALORANT・CS2のヘッドショット精度とエイム微調整を無料で練習できます。",
  },
};

export default function MicroCorrectionJaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSエイム練習", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "マイクロフリック練習 - エイム微調整", "item": "https://skilldrills.online/ja/drills/fps/micro-correction-precision" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Fine_motor_skill"],
    "name": "マイクロフリック練習 - エイム微調整",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "アンカーの次に出る小さなマイクロターゲットを正確に撃ち、微修正時間と精度を記録する無料ブラウザのマイクロフリック練習。",
    "genre": "FPS Training / Micro-Correction",
    "url": "https://skilldrills.online/ja/drills/fps/micro-correction-precision",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "マイクロフリック練習 - エイム微調整",
    "url": "https://skilldrills.online/ja/drills/fps/micro-correction-precision",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "アンカーの次に出る小さなマイクロターゲットを正確に撃ち、微修正時間と精度を記録する無料ブラウザのマイクロフリック練習。"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "マイクロフリック練習 - エイム微調整",
    "url": "https://skilldrills.online/ja/drills/fps/micro-correction-precision",
    "description": "アンカーの次に出る小さなマイクロターゲットを正確に撃ち、微修正時間と精度を記録する無料ブラウザのマイクロフリック練習。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Micro Correction"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "FPSエイムにおける「マウス減速制御（Deceleration Control）」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "マウス減速制御とは、初期の弾道フリック後にマウスパッドの摩擦と指先の微小な下向き圧力を利用して、照準を行き過ぎ（オーバーシュート）させずにピタリと目標上で停止させる運動技能です。"
        }
      },
      {
        "@type": "Question",
        "name": "タクティカルシューターで標的を行き過ぎてしまう（オーバーフリック）主な原因は何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "初速の加速力に対して手首や指先の拮抗筋ブレーキが不足していること、または極端に高すぎるeDPIが原因です。目標の手前で意図的に減速をかける練習が必要です。"
        }
      },
      {
        "@type": "Question",
        "name": "二段階運動モデル（Two-Component Aiming Model）は微調整エイムをどう説明していますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Woodworth（1899）およびMeyerら（1988）が提唱した理論で、人間の照準運動は「距離の大部分を跳躍する一次弾道インパルス」と「着弾直前の視覚フィードバックによる微小修正」の二段階で完結します。"
        }
      },
      {
        "@type": "Question",
        "name": "VALORANTやCS2向けにマイクロフリックはどう練習すればいいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "プリエイム位置と実際の頭の位置との数ピクセルのズレを、指先と手首の小さな動きで合わせる動作を繰り返します。このドリルでは、アンカーを撃った後に55〜90px（レベルが上がると最大145px）離れた位置に出る小さなマイクロターゲットへ照準を移す動作がその練習になります。"
        }
      },
      {
        "@type": "Question",
        "name": "射撃前の「標的確認（Target Confirmation）」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "クロスヘアが標的中心（頭部）に合致したことを視覚的に確認してからクリックするプロセスです。確認を怠った早撃ちはアンダーシュートや無駄撃ちの原因になります。"
        }
      },
      {
        "@type": "Question",
        "name": "マイクロフリック訓練でヘッドショット率は向上しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "役立つ可能性があります。初弾フリックが頭から少しずれたときに照準を頭の中心へ戻す修正動作を繰り返し練習するためです。効果には個人差と練習量による差があり、保証されるものではありません。"
        }
      },
      {
        "@type": "Question",
        "name": "モニターのリフレッシュレートやマウスのポーリングレートは微調整に影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "極めて大きく影響します。高リフレッシュレート（144Hz/240Hz）と1000Hz以上のポーリングレートは入力遅延と表示カクつきを抑え、数ミリ秒単位の微細な指先補正を視覚的に正確に反映させます。"
        }
      },
      {
        "@type": "Question",
        "name": "マイクロフリックの練習頻度はどのくらいが最適ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "毎日15〜20分間、他のフリックやトラッキングドリルと組み合わせて行うのが最適です。神経系の疲労を避け、高い集中力で行うことが微細運動技能の定着に繋がります。"
        }
      },
      {
        "@type": "Question",
        "name": "マウスの持ち方（グリップスタイル）は指先微調整にどう影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "かぶせ持ち（Palm Grip）は手首と腕主導になり指先が固定されるため微調整が難しくなります。つかみ持ち（Claw）やつまみ持ち（Fingertip）は指の関節がフリーなため、微小なエイム修正に最も適しています。"
        }
      },
      {
        "@type": "Question",
        "name": "このドリルでミスやタイムアウトになるとコンボがリセットされるのはなぜですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "スピードより確認してから撃つ正確さを練習するためです。アンカーやマイクロを外したり、ターゲットが消えるまで撃てなかったりするとコンボが0に戻り、残り時間が1秒減ります。コンボはマイクロ命中時にだけ増え、コンボ倍率は最大3.0倍です。"
        }
      },
      {
        "@type": "Question",
        "name": "マイクロフリック練習は何秒続き、スコアはどう計算されますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "開始時は45秒で、アンカー命中とマイクロ命中ごとにそれぞれ+1秒されます（最大60秒）。残り時間が0になると終了です。アンカー命中は10点、マイクロ命中は中心に近いほど100〜150点で、これにコンボ倍率とレベル倍率が掛かります。1,400点ごとにレベルが1上がり上限はなく、レベルが上がるほどターゲットが小さくなり表示時間（1.8秒から開始）が短くなります。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "エイム微調整・マイクロフリックの4段階練習手順",
    "description": "一次フリックの減速と指先による高精度な位置修正を習得するための科学的トレーニングステップ。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "ゲーム内感度のキャリブレーション",
        "text": "普段プレイしているゲームのDPI・ゲーム内感度をセッション設定で一致させます。"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "アンカーターゲットへの一次フリック",
        "text": "大きく出現したアンカーターゲットへ素早く照準を飛ばしてクリックし、二次マイクロターゲットを出現させます。"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "パッド摩擦による急減速（ブレーキング）",
        "text": "アンカー周辺でマウスパッドの摩擦と下向き圧力を効かせ、マウスの慣性を急停止させて行き過ぎを防ぎます。"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "指先によるマイクロ微調整と着弾確認",
        "text": "指先の関節を微小に動かしてクロスヘアをマイクロターゲットの中心に吸い付かせ、確認してクリックします。"
      }
    ]
  };

  const microCorrectionGuide = {
    heading: "マイクロフリック練習とエイム微調整ガイド",
    subtitle: "一次フリック直後の微小な位置ズレ修正、終末摩擦減速、そしてヘッドショット精度を科学的プロトコルで極める",
    intro: [
      "マイクロフリック練習は、初弾フリックで目標付近へ移動したあと、照準を短く止めて中心へ合わせる動作を反復する練習です。このドリルは小さな標的への最後の微調整時間と命中率を記録し、VALORANT・CS2でのオーバーフリックと遅い補正を減らします。",
      "急速な目標指向運動を支配する理論的枠組みは、Robert S. Woodworth（1899）が提唱した二段階モデルに端を発します。目標へ向けて四肢を急加速させる初期の開ループ弾道インパルス（Open-loop ballistic impulse）と、連続的な感覚フィードバックによって精密誘導される終末閉ループ制御フェーズ（Closed-loop control）の組み合わせです。この速度と精度のトレードオフはPaul M. Fitts（1954）のフィッツの法則によって数学的に定式化され、移動時間は目標距離と標的幅の比率に応じて対数関数的に増大します（ID = log2(2D / W)）。",
      "その後、David E. Meyerら（1988）が提唱した確率的最適化サブムーブメントモデル（Stochastic Optimized Submovement Model）により、人間の運動制御系は過度な慣性オーバーシュートを防ぐため、一次動作を標的境界のわずかに手前または近傍に着地させ、その直後に極めて迅速な二次微修正動作（Submovement）を繰り出して座標誤差を解消するよう運動計画を構築することが実証されました。",
      "終末固視フェーズにおいて、人間の眼球運動系はマイクロサッカード（振幅1度未満の不随意微小跳躍運動）を展開し、網膜の神経受容を更新して中心窩を高周波の視覚標的に正確に位置合わせします（Rolfs, 2009; Martinez-Conde et al., 2004）。本ドリルはポインターロックによるマウス入力と performance.now() によるデジタル時間測定（Woods et al., 2015）を組み合わせ、終末の照準振動や行き過ぎ（オーバーフリック）を抑える練習を支援します。",
      "測定精度とハードウェア遅延について：すべての判定イベントはブラウザの performance.now() 高分解能クロックを用いてデバイス内でリアルタイムにタイムスタンプが記録され、外部へスコアが送信されることはありません。ブラウザ仕様としてSpectre対策のためタイマー分解能が約1msに丸められている点、およびディスプレイのリフレッシュレート（60Hzで約16.7ms、144Hzで約6.9ms、240Hzで約4.1ms; Woods et al., 2015）による物理的表示量子化が存在します。さらにマウスのポーリングレート（125Hzで約8ms、1000Hzで1ms）も加わるため、5ms未満の微小な差異は測定ノイズとして扱い、他者の環境ではなく同一ハードウェア環境での自己記録比較を行ってください。"
    ],
    benchmarks: {
      title: "SkillDrills マイクロフリック練習の目安（参考）",
      headers: ["練習段階", "平均微修正時間", "マイクロ命中率", "練習のポイント"],
      rows: [
        ["段階 1", "140 ms 未満", "95% – 99%+", "フリックと微修正が一つの動作につながる段階"],
        ["段階 2", "140 – 190 ms", "88% – 95%", "減速制御が安定している段階"],
        ["段階 3", "190 – 250 ms", "80% – 88%", "手首の力みでときどきオーバーシュートする段階"],
        ["段階 4", "250 – 340 ms", "70% – 80%", "行き過ぎてから戻す「二重修正」が多い段階"],
        ["段階 5", "340 ms 以上", "70% 未満", "腕だけで微調整しようとする練習初期の段階"]
      ],
      note: "SkillDrillsの練習用の目安で、研究上の基準値・ゲームのランク・ユーザーデータではありません。平均微修正時間はアンカー命中からマイクロターゲット命中までの時間です。"
    },
    techniques: {
      title: "マイクロフリック精度を最大化する生体力学テクニック",
      items: [
        {
          name: "指先関節を活用した微小ストローク（フィンガーチップ制御）",
          desc: "数ピクセルの微調整を手首や前腕で行おうとせず、マウスを把持する親指・薬指・小指の関節の伸縮でマウスを微妙にスライドさせます。",
          tips: "手のひらの後部をマウスパッドに軽くアンカーさせ、指先だけを自由に動かせる姿勢を保ちます。"
        },
        {
          name: "マウスパッド摩擦による能動的ブレーキング（摩擦減速）",
          desc: "アンカー着弾の直前、小指側または親指側にわずかな下向き圧力を加えてマウスソールとパッドの摩擦を急増させ、余計な慣性を遮断します。",
          tips: "力を入れすぎると次の微小修正が固まるため、0.1秒だけ軽くブレーキをかけてすぐに脱力します。"
        },
        {
          name: "着弾前の視覚的確信（ターゲットコンファメーション）",
          desc: "クロスヘアがマイクロターゲットの境界内に確実に入ったことを中心窩で捉えてからクリックする規律を徹底します（Rolfs, 2009）。",
          tips: "当たる前に反射で左クリックを押してしまう早撃ち癖を意識的に排除します。"
        },
        {
          name: "アンカー・マイクロ間の一定リズム確立",
          desc: "「タン・タン」という二拍子のリズムをメトロノームのように体内時計で刻み、運動ループの再現性を高めます。",
          tips: "リズムを一定に保つことで、過剰な緊張下でも筋肉の過緊張（フリーズ）を防げます。"
        }
      ]
    },
    steps: [
      "普段プレイしているゲームの感度・DPIを設定し、ポインターロックを有効化します。",
      "画面に出現する大きなアンカーターゲットへ素早くフリックしてクリックします。",
      "アンカー撃破と同時にマウスを急減速させ、隣に出現する小さなマイクロターゲットへ指先で照準を合わせます。",
      "中心点に合致したことを確認してクリックし、高得点ボーナスを獲得します。",
      "ミスによるコンボ途切れを防ぎながら、レベル進行による極小ターゲットへの対応力を磨きましょう。"
    ],
    audience: "VALORANT、Counter-Strike 2、Rainbow Six Siege、Apex Legendsなどで、ヘッドショットの微調整を練習したいFPSプレイヤー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'martinezConde2004', 'rolfs2009', 'woodworth1899'),
    related: [
      { href: "/ja/drills/fps/flick-shot-training", label: "フリック エイム 練習" },
      { href: "/ja/drills/fps/target-acquisition", label: "ターゲット捕捉 エイム練習" },
      { href: "/ja/drills/fps/target-prioritization", label: "ターゲット優先度 エイム練習" },
      { href: "/ja/drills/fps/target-switching-swarm", label: "ターゲット スイッチング エイム練習" }
    ]
  };

  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* VideoGame Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <MicroCorrectionClient
        copy={{
          h1Keyword: "マイクロフリック練習",
          h1Suffix: "｜エイム微調整",
          subtitle: "マイクロフリック練習：アンカーターゲットを撃った直後、すぐ近くに出る小さなマイクロターゲットへ照準を移して中心を撃ち抜きます。VALORANT・CS2のヘッドショット精度の練習に。",
          statScore: "スコア",
          statTime: "残り時間",
          statAccuracy: "命中率",
          statBestScore: "自己ベスト",
          statAvgCorrection: "平均微修正",
          statMaxCombo: "最大コンボ",
          statPeakLevel: "最高レベル",
          startTitle: "マイクロフリック練習",
          startSubtitle: "入力キャリブレーション • エンドレス難易度進行",
          getReady: "準備完了",
          toggleFlash: "ミスフラッシュ切替",
          toggleSound: "効果音切替",
          stageCaption: "アンカーターゲットをクリック後、瞬時に微小ターゲットへ照準を微調整して射撃してください。",
          rulesTitle: "ドリル手順 & スコアリングシステム",
          rulesItems: [
            { num: "1", text: "アンカー命中", highlight: "+10点 (+1.0秒)", result: "マイクロ解除" },
            { num: "2", text: "マイクロ命中", highlight: "100〜150点 (+1.0秒)", result: "精度 × コンボ × レベル" },
            { num: "3", text: "レベル進行", highlight: "+1Lv / 1,400点", result: "連続縮小適応" },
            { num: "4", text: "ミス / 制限時間", highlight: "ペナルティ", result: "コンボリセット (-1.0秒)" }
          ],
          aboutTitle: "マイクロフリック練習について",
          aboutHeading: "マイクロフリック（微調整エイム）とは？",
          aboutText: "ほとんどのエイム動作は単一ではなく二段階で構成されます。初速の素早い弾道フリックと、着弾直前の微小な減速・位置修正動作です（Woodworth, 1899; Meyer et al., 1988）。本ドリルはこの勝敗を決定づける「第2フェーズ（微調整）」を集中的に鍛え上げます。"
        }}
      />

      <DrillGuide guide={microCorrectionGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
