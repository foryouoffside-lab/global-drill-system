import TargetAcquisitionClient from '@/app/drills/fps/target-acquisition/TargetAcquisitionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "VALORANT エイム練習 - ターゲット捕捉トレーナー | SkillDrills",
  description: "ブラウザですぐできる無料のVALORANT エイム練習。明るさの違う3〜8個のターゲットを明るい順に撃ち抜く60秒のターゲット捕捉ドリルで、優先目標の見極めと初弾の命中率を鍛えます。インストール不要でマウスだけで練習できます。",
  keywords: [
    "VALORANT エイム練習",
    "ヴァロラント エイム練習",
    "ターゲット捕捉",
    "索敵 練習",
    "初弾精度",
    "置きエイム 練習",
    "敵 発見 FPS",
    "ターゲット識別",
    "初弾ヘッドショット",
    "valorant エイム練習 ブラウザ"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/target-acquisition",
    languages: getAlternateLanguages('/drills/fps/target-acquisition'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "VALORANT エイム練習 - ターゲット捕捉トレーナー | SkillDrills",
    description: "ブラウザですぐできる無料のVALORANT エイム練習。明るさの違う3〜8個のターゲットを明るい順に撃ち抜く60秒のターゲット捕捉ドリルで、優先目標の見極めと初弾の命中率を鍛えます。インストール不要でマウスだけで練習できます。",
    url: "https://skilldrills.online/ja/drills/fps/target-acquisition",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "VALORANT エイム練習 - ターゲット捕捉トレーナー | SkillDrills",
    description: "ブラウザですぐできる無料のVALORANT エイム練習。明るさの違う3〜8個のターゲットを明るい順に撃ち抜く60秒のターゲット捕捉ドリルで、優先目標の見極めと初弾の命中率を鍛えます。インストール不要でマウスだけで練習できます。",
  },
};

export default function TargetAcquisitionJaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSエイム練習", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "ターゲット捕捉", "item": "https://skilldrills.online/ja/drills/fps/target-acquisition" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "VALORANT エイム練習 - ターゲット捕捉トレーナー",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "VALORANTプレイヤー向けの無料ブラウザ用ターゲット捕捉ドリル。明るい順にターゲットを撃ち、優先目標の識別と初弾精度を練習します。",
    "genre": "FPS Training / Target Acquisition",
    "url": "https://skilldrills.online/ja/drills/fps/target-acquisition",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "VALORANT エイム練習 - ターゲット捕捉トレーナー",
    "url": "https://skilldrills.online/ja/drills/fps/target-acquisition",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "VALORANTプレイヤー向けの無料ブラウザ用ターゲット捕捉ドリル。明るい順にターゲットを撃ち、優先目標の識別と初弾精度を練習します。"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "VALORANT エイム練習 - ターゲット捕捉トレーナー",
    "url": "https://skilldrills.online/ja/drills/fps/target-acquisition",
    "description": "VALORANTプレイヤー向けの無料ブラウザ用ターゲット捕捉ドリル。明るい順にターゲットを撃ち、優先目標の識別と初弾精度を練習します。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Target Acquisition"],
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
        "name": "このVALORANT エイム練習ドリルはどのようなルールですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "60秒間、明るさの異なるターゲットが3〜8個ずつセットで表示され、最も明るいものから暗い順に撃つ必要があります。正しいターゲットは+100点にコンボ倍率とレベル倍率が掛かり、セットを全て消すと+400点×レベル倍率のボーナスと共に次のセットが出現します。順番違いのターゲットや何もない場所をクリックするとコンボがリセットされ、ペナルティ設定をオンにしている場合は0.6秒減ります。マウスとポインターロックで操作し、Escキーで終了します。SkillDrillsはRiot Gamesとは無関係の独立した練習ツールです。"
        }
      },
      {
        "@type": "Question",
        "name": "競技FPSにおける「ターゲット捕捉（Target Acquisition）」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ターゲット捕捉とは、視界内の背景や遮蔽物から敵を視覚的に検出し、味方や無害なオブジェクトと瞬時に識別した上で運動軌道を策定し、初弾を命中させる一連の認知・運動シーケンスです。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲット捕捉は単純な反応速度とどう違いますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "単純反応速度は単一の予測可能な刺激に対するクリック遅延のみを測定します。ターゲット捕捉は視覚探索、選択的空間注意、特徴識別（輝度や輪郭差）、および時間的制約下での精密なポインティング運動を包括します。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲット検出における特徴統合理論（Feature-Integration Theory）とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anne TreismanとGarry Gelade（1980）が提唱した理論で、輝度・色・傾きなどの基本視覚特徴は視野全体で前注意的かつ並列に処理され、その後に空間的注意が結合されて個別ターゲットとして認識されます。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲットを速く認識して撃つには何が重要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ガイド探索（Wolfe, 2007）と周辺視野のコントラスト感度を活かし、視線を順番に走査せず最も脅威度の高いターゲットへサッカード（跳躍眼球運動）とフリックを連動させる練習が重要です。"
        }
      },
      {
        "@type": "Question",
        "name": "VALORANTやCS2などのタクティカルシューターにおいて、初弾精度は撃ち合いの勝敗にどう影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TTK（Time to Kill）が短いゲームでは、初弾を外すと相手に反撃の時間を与えてしまいます。このドリルは実際のヘッドショットを再現するものではありませんが、正しい目標を選んでから最初のクリックを正確に入れる習慣を切り出して練習できます。"
        }
      },
      {
        "@type": "Question",
        "name": "敵の位置を特定する際、中心視野と周辺視野のどちらを重視すべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "初期の敵検出には高感度な周辺視野を活用し（ソフトフォーカス）、位置を捉えた瞬間に中心窩（フォーカルビジョン）へサッカードを飛ばして微細な照準修正を完結させるのが理想的です。"
        }
      },
      {
        "@type": "Question",
        "name": "視界内のオブジェクト密度やクラッター（散乱要素）は捕捉速度をどう低下させますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "妨害刺激が増え、目標と似てくるほどポップアウト効果が弱まり、一つずつ確認する直列的な探索に近づくため、目標を見つけるまでの時間が長くなります（Treisman & Gelade, 1980）。このドリルではレベルが上がるほどターゲット数が増え、明るさの差が小さくなるため、この効果を体感できます。"
        }
      },
      {
        "@type": "Question",
        "name": "高速な複数ターゲット捕捉に最適なマウスの持ち方はどれですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "クローグリップ（つかみ持ち）やつまみ持ち（フィンガーティップ）が適しています。指先と手首の関節の自由度が高く、初弾の急速なフリック停止と微小な終末減速をマウスパッドの摩擦と合わせて精密に行えるためです。"
        }
      },
      {
        "@type": "Question",
        "name": "OSのマウス加速オフはターゲット捕捉の一貫性にどう寄与しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "マウス加速をオフにすると、手の移動距離とクロスヘアの移動量が一定の比率を保ちやすくなり、運動記憶（マッスルメモリー）を築きやすくなります。ただし、ブラウザで練習するときの入力処理は環境によって異なります。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲット捕捉ドリルは毎日どのくらいの時間練習すべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "決まった正解はありませんが、60秒のセッションを短く集中して数回繰り返す方法がおすすめです。目が疲れる前にやめ、同じ環境で自己記録の変化を比べてください。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "ターゲット捕捉エイムの効率的練習手順",
    "description": "ターゲット捕捉ドリルで視覚識別と初弾精度を練習する4つのステップ。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "センシビリティのキャリブレーション",
        "text": "/drills ページの感度設定を普段のゲーム感度に合わせます。開始するとポインターロックが自動でかかります。"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "ソフトフォーカス（中央注視）の維持",
        "text": "画面中央に視線をリラックスさせて置き、周辺視野全体で高輝度ターゲットのポップアウトを待ち受けます。"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "最高優先度ターゲットのコントラスト識別",
        "text": "クラスタ出現時に並列視覚フィルタを働かせ、最も明るく不透明度の高いターゲットを瞬時に特定します。"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "弾道フリックとパッドブレーキングの実行",
        "text": "目標中心点へ鋭くフリックし、マウスパッドの摩擦と指先の制動でクロスヘアをピタリと止めてクリックします。"
      }
    ]
  };

  const targetAcquisitionGuide = {
    title: "VALORANT エイム練習：ターゲット捕捉と初弾精度ガイド",
    subtitle: "明るさの差で優先目標を見極め、初弾を正確に当てる練習のためのガイド",
    intro: [
      "VALORANT エイム練習をブラウザで探しているプレイヤー向けの無料ドリルです。60秒間、明るさの違うターゲットが3〜8個表示され、最も明るいものから順番に撃つ必要があるため、正しい目標を先に選んでから初弾を正確に入れる流れを繰り返し練習できます。VALORANTやCS2のように初弾が重要なゲーム向けの練習で、SkillDrillsはRiot Gamesとは無関係の独立ツールです。",
      "視覚探索と物体認識の理論的基盤は、Anne TreismanとGarry Gelade（1980）が提唱した「特徴統合理論（Feature-Integration Theory）」によって確立されました。トレイスマンは、輝度コントラストや色相のポップアウト、輪郭のエッジ方向といった低次視覚特徴が、視野全体にわたって前注意的（Preattentively）かつ並列に抽出されることを実証しました。焦点を絞った空間的注意が特定の座標に向けられて初めて、これらの特徴が統合され、認識可能な敵性脅威として把握されます。",
      "この並列処理メカニズムを発展させたJeremy M. Wolfe（1994, 2007）の「ガイド探索モデル（Guided Search）」は、トップダウンの認知的予測とボトムアップの感覚的顕著性マップが融合して視覚的注意の優先順位を決定するプロセスを詳述しています。明暗コントラストの識別訓練を反復することで、視覚野は背景の雑音や低コントラストの妨害刺激を瞬時に遮断することを学習し、標的の出現から動作開始までの時間を縮められる可能性があります（効果はこの課題に特化したもので、実戦での上達を保証しません）。",
      "Paul M. Fitts（1954）の運動難易度法則、David E. Meyerら（1988）の確率的最適化サブムーブメント理論、そして高分解能デジタル時間計測（Woods et al., 2015）を統合することで、本ドリルは、発見から初弾までの判断のためらいと初弾精度を、同じ環境で繰り返し確認できるようにしています。",
      "記録について：結果画面にはスコア、命中率（正しいターゲットへの命中数 ÷ 総クリック数）、クリアセット数、最大コンボ、最高レベルが表示され、自己ベストはこのブラウザ内にのみ保存されます。反応時間（ms）は計測しません。モニターのリフレッシュレートやマウスのポーリングレートで体感が変わるため、他人と比べるより同じ環境で自分の記録の変化を追ってください。"
    ],
    benchmarks: {
      title: "ターゲット捕捉 命中率の練習目安",
      headers: ["練習帯", "命中率", "目安"],
      rows: [
        ["帯 1", "95% 以上", "順番ミスや空撃ちがほとんどない状態"],
        ["帯 2", "88% – 95%", "高レベルでも最も明るいターゲットを概ね先に選べている状態"],
        ["帯 3", "80% – 88%", "ターゲットが増えると順番ミスが出始める状態"],
        ["帯 4", "70% – 80%", "明るさの近いターゲットをよく誤って撃つ状態"],
        ["帯 5", "70% 未満", "速さより順番の正確さを先に固めたい状態"]
      ],
      note: "命中率は結果画面の値（正しいターゲットへの命中数 ÷ 総クリック数）です。帯はSkillDrillsが定めた練習用の目安で、研究上の基準、ゲームのランク、ユーザー統計とは関係ありません。"
    },
    techniques: {
      title: "ターゲット捕捉を高めるための科学的実践テクニック",
      items: [
        {
          name: "周辺視野を活用した並列スキャン（ソフトフォーカス）",
          desc: "画面の各ゾーンを目で追うシリアル走査を避け、画面中央付近に視線を緩やかに固定したまま、周辺視野で最も輝度の高いターゲットの出現を感知します（Treisman & Gelade, 1980）。",
          tips: "目を凝らしすぎず、画面全体をぼんやり捉えることで、視覚皮質のポップアウト検出を最大限に引き出します。"
        },
        {
          name: "サッカード・モーター結合による初弾スナップ",
          desc: "視線と手の動きを協調させます。まず跳躍眼球運動（サッカード）でターゲットの中心点を捉え、その眼球ベクトルに追従させるようにマウスを鋭くフリックします。",
          tips: "マウスを動かす前に、視線が先にターゲットの中心に届いている状態を意識してください。"
        },
        {
          name: "コントラスト識別の閾値コントロール",
          desc: "暗いターゲット（低脅威）に目移りせず、最も高輝度な目標のみを選択的に抽出する識別フィルターを脳内に構築します。",
          tips: "最高輝度のターゲットが消えるまでは、他のターゲットを視覚的に完全に無視する訓練を徹底します。"
        },
        {
          name: "パッド摩擦による終末制動（ブレーキング）",
          desc: "初速の弾道フリックに対し、目標直前でマウスパッドの摩擦と指先の微調整を用いてピタリと停止させます（Meyer et al., 1988）。",
          tips: "フリックの終わり際に手のひらや小指へわずかに下向きの力を加え、行き過ぎ（オーバーシュート）を防ぎます。"
        }
      ]
    },
    steps: [
      "/drills ページの感度設定を普段のゲーム感度に合わせて開始します。ポインターロックは自動でかかります。",
      "画面中央に視線を置き、ターゲットクラスタの出現に備えます。",
      "並列視覚フィルタを働かせ、最も明るい優先ターゲットを瞬時に見分けます。",
      "目標の中心へフリックしてクリックし、+100点×コンボ・レベル倍率を獲得します。制限時間は60秒固定で、命中しても延長されません。",
      "残りのターゲットを輝度順に連続処理して、+400点×レベルのセットボーナスを狙いましょう。"
    ],
    audience: "VALORANT、Counter-Strike 2、Apex Legends、Overwatch 2などをプレイし、目標の見極めと初弾精度を個別に練習したいFPSプレイヤー。マウスが必要です。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/ja/drills/fps/target-switching-swarm", label: "ターゲット スイッチング エイム練習" },
      { href: "/ja/drills/fps/vertical-air-track", label: "垂直エイム トラッキング練習" },
      { href: "/ja/drills/fps/strafe-tracking", label: "ストレイフ トラッキング練習" },
      { href: "/ja/drills/fps/recoil-control", label: "リコイル コントロール練習" }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <TargetAcquisitionClient
        copy={{
          h1Keyword: "VALORANT エイム練習",
          h1Suffix: " - ターゲット捕捉トレーナー",
          subtitle: "VALORANTプレイヤー向けの無料練習：最も明るいターゲットから順に撃ち、初弾の精度を鍛えます。",
          statScore: "スコア",
          statTime: "残り時間",
          statAccuracy: "命中率",
          statBestScore: "自己ベスト",
          statSetsCleared: "クリアセット",
          statMaxCombo: "最大コンボ",
          statPeakLevel: "最高レベル",
          startTitle: "ターゲット捕捉 Pro",
          startSubtitle: "視覚識別スピード • エンドレス難易度進行",
          getReady: "準備完了",
          toggleFlash: "ミスフラッシュ切替",
          toggleSound: "効果音切替",
          pausedTitle: "一時停止中",
          pausedSubtitle: "クリックして再開 — カーソルロックが再適用されます",
          stageCaption: "各クラスタ内で最も輝度（不透明度）の高いターゲットを素早く見極めて正確に撃ち抜いてください。",
          rulesTitle: "ドリル手順 & スコアリングシステム",
          rulesItems: [
            { num: "1", text: "ターゲット命中", highlight: "+100点 × レベル倍率", result: "コンボ倍率適用" },
            { num: "2", text: "セットクリア", highlight: "+400点 × レベル", result: "クラスタ即時生成" },
            { num: "3", text: "レベル進行", highlight: "+1 / 1400点", result: "シームレス難易度深化" },
            { num: "4", text: "誤クリック / ミス", highlight: "ペナルティ", result: "コンボリセット (ペナルティ設定時 -0.6秒)" }
          ],
          aboutTitle: "ターゲット捕捉 エイム練習について",
          aboutHeading: "ターゲット捕捉（Target Acquisition）とは？",
          aboutText: "ターゲット捕捉とは、視野内の乱雑な情報から瞬時に敵を特定し、照準を合わせる一連の視覚認知・運動プロセスです。色や輝度などの基本特徴は並列処理（Treisman & Gelade, 1980）されるため、このドリルでは明るさの差で優先目標を選び、初弾を当てる流れを繰り返し練習します。"
        }}
      />
      <DrillGuide guide={targetAcquisitionGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
