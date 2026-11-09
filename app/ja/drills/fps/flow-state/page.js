import FlowStateClient from '@/app/drills/fps/flow-state/FlowStateClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "FPS 集中力トレーニング | フローエイム | SkillDrills",
  description: "FPS 集中力トレーニング：曲線で動くターゲットに照準を乗せ続ける無料ブラウザ追いエイムドリル。1秒以上外すとコンボが途切れ、スコアが上がるほど的が小さく速くなるフロー状態の練習です。",
  keywords: [
    "FPS 集中力 トレーニング",
    "ゲーム 集中力",
    "フロー状態 ゲーム",
    "ゾーン エイム練習",
    "追いエイム 練習",
    "リズム エイム 練習",
    "Valorant 集中力 練習",
    "Apex 集中力 エイム",
    "フロー状態 練習",
    "無心 エイム 練習"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/flow-state",
    languages: getAlternateLanguages('/drills/fps/flow-state'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "FPS 集中力トレーニング | フローエイム | SkillDrills",
    description: "FPS 集中力トレーニング：曲線で動くターゲットに照準を乗せ続ける無料ブラウザ追いエイムドリル。1秒以上外すとコンボが途切れ、スコアが上がるほど的が小さく速くなるフロー状態の練習です。",
    url: "https://skilldrills.online/ja/drills/fps/flow-state",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "FPS 集中力トレーニング | フローエイム | SkillDrills",
    description: "FPS 集中力トレーニング：曲線で動くターゲットに照準を乗せ続ける無料ブラウザ追いエイムドリル。1秒以上外すとコンボが途切れ、スコアが上がるほど的が小さく速くなるフロー状態の練習です。",
  },
};

export default function FlowStateJaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSエイム練習", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "FPS 集中力トレーニング", "item": "https://skilldrills.online/ja/drills/fps/flow-state" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Flow_(psychology)"],
    "name": "FPS 集中力トレーニング",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "フロー理論から着想し、曲線軌道のターゲットを途切れずに追って集中の持続を練習する無料ブラウザFPSトラッキングドリル。",
    "genre": "FPS Training / Flow State",
    "url": "https://skilldrills.online/ja/drills/fps/flow-state",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FPS 集中力トレーニング",
    "url": "https://skilldrills.online/ja/drills/fps/flow-state",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "ブラウザで動作する無料のフロー状態練習。曲線で動くターゲットを追い、集中の維持と滑らかなトラッキングを練習します。"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "FPS 集中力トレーニング",
    "url": "https://skilldrills.online/ja/drills/fps/flow-state",
    "description": "フロー理論から着想し、曲線軌道のターゲットを途切れずに追って集中の持続を練習する無料ブラウザFPSトラッキングドリル。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Cognitive Focus"],
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
        "name": "FPSやゲームにおける「フロー状態（ゾーン）」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "心理学者ミハイ・チクセントミハイが提唱したフロー状態（ゾーン）とは、完全にタスクに没入し、余計な自己意識や躊躇が消失してプレイが自動的かつ軽やかに行われる最適な心理状態です。FPSでは、力みのない滑らかなトラッキング、直感的な反応、内省的な雑念の完全な停止として現れます。"
        }
      },
      {
        "@type": "Question",
        "name": "対戦ゲーム中に意図してフロー状態へ入るにはどうすれば良いですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "明確な短期目標の設定（クロスヘアの乗せ続け）、即時で明確な視覚・音響フィードバック、外乱の排除、そして自身の腕前に適した挑戦度の調整が必要です。試合前の短い連続トラッキングは手を温め注意を画面に集めるルーティンとして使えますが、フローに入れることを保証するものではありません。"
        }
      },
      {
        "@type": "Question",
        "name": "フローに入っているとき、脳の中では何が起きていますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dietrich（2004）の一時的前頭葉低下仮説（Transient Hypofrontality）によれば、フロー中は背外側前頭前野（DLPFC）の活動が適度に低下します。これにより「外したらどうしよう」という自己批判や余計な思考が抑制され、大脳基底核や小脳による自動化された運動反射が解放されます。"
        }
      },
      {
        "@type": "Question",
        "name": "フローに入るために必要な「挑戦とスキルのバランス」とは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "タスクが簡単すぎると退屈が生じ、難しすぎると不安や力みが生じます。チクセントミハイは、挑戦の水準とスキルが釣り合うときにフローが起こりやすいと説明しています。このドリルではスコアが上がるとレベルが上がり、的が小さく速くなります。コンボが続くと難易度もわずかに上がります。"
        }
      },
      {
        "@type": "Question",
        "name": "なぜ連続した曲線トラッキングがフロー誘導に効果的なのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "フリック射撃は標的ごとに思考の休止が挟まりますが、連続的な曲線追従は網膜スリップと手の運動を途切れなく同期させ続ける必要があります（Krauzlis, 2004）。止まる瞬間がほとんどないため、注意をターゲットに置き続ける練習になります。"
        }
      },
      {
        "@type": "Question",
        "name": "フロー状態の練習時間は1回どのくらいが適切ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "決まった正解はありません。試合前のウォーミングアップなら数回（5〜10分程度）で十分で、長く練習する場合は15分ほどで区切って休憩を挟むのが無難です。手が疲れたり精度が落ちたりしたら終えましょう。"
        }
      },
      {
        "@type": "Question",
        "name": "eスポーツにおける「一時的前頭葉低下」のメリットは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "この考え方はまだ仮説であり、eスポーツでの利点が直接証明されているわけではありません。ただ、反復で慣れた動作ほど意識的な確認が少なくて済むという点は、一般的な運動学習の経験と一致します。"
        }
      },
      {
        "@type": "Question",
        "name": "精神的な疲労がエイムに悪影響を及ぼすメカニズムは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "長く集中し続けると、注意を一点に保つことが次第に難しくなります。すると的を滑らかに追えず、遅れて大きく修正する回数が増えてエイムがガタつきます。このドリルの集中途切れ回数とトラッキング精度でその変化を確認できます。"
        }
      },
      {
        "@type": "Question",
        "name": "長時間のランク戦で集中力を途切れさせない対策は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "マッチ間に60秒間の眼球休息をとる、腹式呼吸で心拍変動を整える、水分補給を行う、そして各ラウンド前に手首・肩の筋緊張をリセットすることが極めて有効です。"
        }
      },
      {
        "@type": "Question",
        "name": "このドリルは仕事や勉強のディープワーク（深い集中）にも応用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい。持続的注意は全般的な認知リソースです。視覚的注意の散漫を抑え、目の前の対象に没入し続ける訓練は、プログラミングや読書などの深い知的作業の持久力向上にも役立つ可能性があります。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "フロー状態・集中力持続エイムの練習手順",
    "description": "心理的フローを誘導し、持続的注意と滑らかなベジェ曲線トラッキングを鍛えるステップバイステップ訓練法。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "マウス感度を調整する",
        "text": "/drills ページの設定でマウス感度を一度合わせると、すべてのマウスドリルに適用されます。普段のゲームに近い感覚に合わせましょう。",
        "url": "https://skilldrills.online/ja/drills/fps/flow-state#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "ポインターロックを有効化",
        "text": "開始ボタンを押してフルスクリーン化し、ポインターロックを有効にします。",
        "url": "https://skilldrills.online/ja/drills/fps/flow-state#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "滑らかなベジェ曲線軌道を先読み追従",
        "text": "ターゲットの中心を後追いするのではなく、移動軌道の先端を意識して滑らかに追従します。",
        "url": "https://skilldrills.online/ja/drills/fps/flow-state#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "集中チェーンを維持してゾーンに突入",
        "text": "1秒連続でターゲット内に留まるたびにコンボが1増え、スコア倍率は最大3.0倍まで上がります。1秒以上外れるとコンボがリセットされます。",
        "url": "https://skilldrills.online/ja/drills/fps/flow-state#step-4"
      }
    ]
  };

  const copy = {
    h1Keyword: "FPS 集中力トレーニング",
    h1Suffix: " - フロー状態の練習",
    statScore: "スコア",
    statTime: "残り時間",
    statAccuracy: "トラッキング精度",
    statBestScore: "自己ベスト",
    startTitle: "フロー状態 エイム 練習",
    startSubtitle: "ポインターロック入力 • 集中力持続 • エンドレス難易度",
    getReady: "準備完了",
    pausedTitle: "集中一時停止",
    pausedSubtitle: "クリックして再開（マウスロックが再有効化されます）",
    stageCaption: "連続して出現・移動するベジェ曲線ターゲットに照準を合わせ続け、エイムのリズムを維持します。",
    rulesTitle: "トレーニングルール & スコアリング",
    rulesItems: [
      { num: "1", text: "追従アライメント", highlight: "+10 PTS / 0.25秒", result: "的の上にいる間は時間 +0.4秒/秒（最大60秒）" },
      { num: "2", text: "フロー倍率", highlight: "最大3.0×倍率", result: "連続集中チェーンを維持" },
      { num: "3", text: "レベル進行", highlight: "+1 レベル / 1400 PTS", result: "適応型ベジェ軌道が加速" },
      { num: "4", text: "集中途切れペナルティ", highlight: "1.0秒ロスト", result: "コンボ初期化" }
    ],
    aboutTitle: "フロー状態トレーニング・ゾーン誘導について",
  };

  const jaGuide = {
    heading: "FPS集中力トレーニングとフロー状態ベンチマーク",
    intro: [
      "FPSの集中力トレーニングは、標的を追いながら雑念を減らし、一定のエイムリズムを保つ練習です。このドリルは45秒から始まり、的の上にいる間は残り時間が増え、スコアとコンボに応じて難易度が上がりながら、追いエイムの精度と集中の持続を記録します。フローを保証するのではなく、集中が崩れる地点を見つけて再現性を高める設計です。",
      "Dietrich（2004）の一時的前頭葉低下仮説（Transient Hypofrontality）は、フロー中に自己監視が弱まる現象を説明しようとする仮説です。このドリルがその状態を作ると保証することはできませんが、途切れないトラッキングを繰り返し、集中が崩れるタイミングを確認するのに役立ちます。",
      "ターゲットは2次ベジェ曲線に沿って動き、レベルが上がるほど半径が小さく、曲線が急になります。入力はポインターロックのマウスで、タッチ専用端末ではプレイできません。インストール不要でブラウザからすぐに始められます。",
      "測定精度およびハードウェア環境について: 本ドリルはブラウザの performance.now() API（ミリ秒未満の分解能）を用いてすべてのイベントをローカルで計測します。計測値は外部サーバーへ送信されず、お使いの端末内でのみ処理されます。ブラウザのタイマーはSpectre対策のため約1msに粗視化されており、ディスプレイのリフレッシュレート（60Hzで約16.7ms、144Hzで約6.9ms、240Hzで約4.1ms、Woods et al., 2015）やマウスのポーリングレート（125Hzで約8ms、1000Hzで約1ms）による量子化誤差が生じます。5ms未満の微細な差はハードウェアの測定ノイズとして扱い、他者のスコアとの単純比較ではなく、同一環境での自己記録推移の指標としてご活用ください。"
    ],
    benchmarks: {
      title: "フロー誘導段階と集中力持続ティア",
      headers: ["ティア", "フロー状態の次元", "生理的指標", "認知メカニズム", "実践目標"],
      rows: [
        ["ティア1", "注意の覚醒と定位", "感覚ゲーティング・視線固定", "Posner覚醒ネットワークが外部環境刺激を遮断", "トラッキング精度50%以上で1回完走"],
        ["ティア2", "挑戦とスキルの均衡", "動的スピード適応", "チクセントミハイ・チャンネル：能力に応じた目標速度", "退屈と不安を避け70〜80%の追従時間を維持"],
        ["ティア3", "中心窩追従の持続", "速度同調の連続性", "Krauzlis皮質線条体経路がサッカードを排除", "複雑なベジェ曲線上で85%以上の連続追従を達成"],
        ["ティア4", "一時的前頭葉低下", "背外側前頭前野の沈静化", "Dietrich仮説：無駄な自己監視が消え運動が自動化", "躊躇なく30秒以上の無我の集中チェーンを維持"],
        ["ティア5", "極限の集中持久力", "精神的疲労への耐性", "実行ネットワーク持久力により反応劣化を防止", "コンボ50に到達（最大3.0×倍率）"]
      ],
      note: "目標値はSkillDrillsの練習目安であり、研究上の基準値やユーザーデータではありません。段階名はフロー心理学（Csikszentmihalyi, 1975, 1990）、Dietrich（2004）、Krauzlis（2004）、Posner & Petersen（1990）の概念を参考にしています。"
    },
    techniques: {
      title: "ゲーム中のフロー状態を誘導・維持する4大プロトコル",
      items: [
        {
          name: "接線方向への視線先読み（Tangent Gaze Leading）",
          desc: "目標の中心を後追いするのではなく、曲線が向かう方向の少し先を見るようにします。",
          tips: "ターゲットの進行方向の空間を見る意識を持ち、周辺視覚で微調整を行います。"
        },
        {
          name: "内省的自己批判の沈静化（前頭葉低下プロトコル）",
          desc: "「外しているかも」「手が震えている」という頭の中の独り言は自己監視を活性化させ自動化を妨げます（Dietrich, 2004）。",
          tips: "軌道の変曲点に合わせて規則正しい呼吸を行い、リラックスした脱力状態を保ちます。"
        },
        {
          name: "動的挑戦度の最適チューニング",
          desc: "簡単すぎると退屈し、難しすぎると緊張します。SkillDrillsでは、トラッキング精度が70〜80%程度に収まる状態を練習の目安としておすすめしています。",
          tips: "集中が頻繁に途切れる場合は、高いレベルを追うより先に精度を上げましょう。コンボが途切れると的は少し大きく遅くなります。"
        },
        {
          name: "前腕の微小緊張リセットとエルゴノミクス",
          desc: "持続的なトラッキングは母指球や前腕屈筋群に等尺性筋収縮を引き起こし、微細な震えを生み出します。",
          tips: "方向転換の合間に意識してマウスの握り込み圧を抜き、最小限の力で保持します。"
        }
      ]
    },
    steps: [
      "/drills ページの設定でマウス感度を一度合わせます。すべてのマウスドリルに同じ値が使われます。",
      "「ドリル開始」をクリックしてフルスクリーンのポインターロック状態に入ります。",
      "滑らかなベジェ曲線を描いて移動するターゲットの進行方向に視線を合わせます。",
      "照準をターゲットの半径内に保ちます。1秒連続で追うごとにコンボが増え、1秒以上外れるとリセットされます。",
      "コンボをつないでスコア倍率を高め、終了後は精度と集中途切れ回数を前回の記録と比べましょう。"
    ],
    audience: "Valorant、CS2、Apex Legends、Overwatch 2などの競技シューターで、試合終盤や連戦時に集中力が切れてエイムが崩れてしまうすべてのプレイヤー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'dietrich2004'),
    related: [
      { href: "/ja/drills/fps/pro-smooth-pursuit", label: "スムーズ トラッキング 練習" },
      { href: "/ja/drills/fps/anti-zigzag-movement-trainer", label: "ジグザグ移動 練習 (スライディング追従)" },
      { href: "/ja/drills/fps/anti-strafe-jitter-duel", label: "レレレ撃ち 練習 (ジッタートラッキング)" },
      { href: "/ja/drills/fps/instant-response", label: "FPS 反応速度 測定" },
      { href: "/ja/drills/visual/reaction-speed/light-reaction", label: "反射神経テスト" }
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
      <FlowStateClient copy={copy} />
      <RelatedDrills />
      <DrillGuide guide={jaGuide} />
      <DrillFooter />
    </>
  );
}
