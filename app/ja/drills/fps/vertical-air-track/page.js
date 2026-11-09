import VerticalAirTrackClient from '@/app/drills/fps/vertical-air-track/VerticalAirTrackClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — ja-JP (fps / vertical-air-track)
// PRIMARY DOMESTIC: "垂直 エイム 練習"          — High-intent genre target
//                   "縦 エイム"                — #1 Google Suggest hit ('ow 縦 エイム')
//                   "トラッキング エイム 練習"   — Confirmed high-volume category term
//                   "空中 トラッキング 練習"     — Technical airborne pursuit phrase
//                   "エイム 練習 ブラウザ"       — Platform intent
// SECONDARY / LSI:
//                   "縦エイム トレーニング"      — Direct skill phrase
//                   "FPS 垂直 エイム"           — High-intent genre term
//                   "apex 縦 エイム"           — Apex Legends specific search
//                   "エイムトレーナー 無料"      — Category broad search
// WINNER TITLE:     垂直 エイム 練習 – 無料ブラウザFPS縦エイム・空中トラッキングトレーナー | SkillDrills
// ============================================================

export const metadata = {
  title: "Apex 縦エイム練習 - 空中トラッキング | SkillDrills",
  description: "ブラウザで無料のApex縦エイム練習。下から打ち上がり放物線で落ちる空中ターゲットを左クリック長押しで追い続け、空中トラッキングとY軸のマウス操作を鍛えます。",
  keywords: [
    'Apex 縦エイム練習',
    '縦エイム',
    '追いエイム 練習',
    '空中トラッキング',
    'Apex エイム練習',
    '垂直 トラッキング',
    'エイム練習 無料 ブラウザ',
    'エイムトレーナー 無料',
    'Y軸 マウス操作',
    'オーバーウォッチ 対空エイム',
    '落下ターゲット 練習',
    '縦トラッキング'
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/vertical-air-track",
    languages: getAlternateLanguages('/drills/fps/vertical-air-track'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Apex 縦エイム練習 - 空中トラッキング | SkillDrills",
    description: "ブラウザで無料のApex縦エイム練習。下から打ち上がり放物線で落ちる空中ターゲットを左クリック長押しで追い続け、空中トラッキングとY軸のマウス操作を鍛えます。",
    url: "https://skilldrills.online/ja/drills/fps/vertical-air-track",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Apex 縦エイム練習 - 空中トラッキング | SkillDrills",
    description: "ブラウザで無料のApex縦エイム練習。下から打ち上がり放物線で落ちる空中ターゲットを左クリック長押しで追い続け、空中トラッキングとY軸のマウス操作を鍛えます。",
  },
};

export default function VerticalAirTrackPageJa() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSドリル", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "垂直 エイム 練習", "item": "https://skilldrills.online/ja/drills/fps/vertical-air-track" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Apex 縦エイム練習 - 空中トラッキング",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "無料のブラウザFPS垂直エイム・空中トラッキング練習ツール。重力加速度に従う放物線ターゲットの追従とY軸マウスコントロールを鍛えるウォームアップアプリ。",
    "genre": "FPS Training / Vertical Tracking",
    "url": "https://skilldrills.online/ja/drills/fps/vertical-air-track",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Apex 縦エイム練習 - 空中トラッキング",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "Pointer Lock API、JavaScript、HTML5 Canvas対応ブラウザ",
    "description": "無料のブラウザFPS垂直エイム・空中トラッキング練習ツール。重力加速度に従う放物線ターゲットの追従とY軸マウスコントロールを鍛えるウォームアップアプリ。",
    "url": "https://skilldrills.online/ja/drills/fps/vertical-air-track"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Apex 縦エイム練習 - 空中トラッキング",
    "url": "https://skilldrills.online/ja/drills/fps/vertical-air-track",
    "description": "無料のブラウザFPS垂直エイム・空中トラッキング練習ツール。重力加速度に従う放物線ターゲットの追従とY軸マウスコントロールを鍛えるウォームアップアプリ。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Vertical Tracking"],
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
        "name": "FPSにおける「垂直エイム（縦エイム）」練習とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "垂直エイム（縦エイム）練習とは、マウスのY軸（上下方向）の視覚追従およびコントロールを集中的に鍛えるトレーニングです。横方向の水平トラッキングに比べ、日常的に練習量が不足しがちな縦方向のエイムを特化して強化します。"
        }
      },
      {
        "@type": "Question",
        "name": "ポップコーントラッキングとは何ですか？このドリルで鍛えられますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ポップコーントラッキングとは、ポップコーンが弾けるように上空へ打ち上げられ重力で放物線を描いて落下するターゲットを追従する技術です。本ドリルのターゲットも画面下から打ち上がり重力で放物線を描いて落ちるため、ポップコーントラッキングの練習に使えます。"
        }
      },
      {
        "@type": "Question",
        "name": "Apex Legendsにおいて縦エイムの練習が重要な理由は何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apex Legendsにはオクタンのジャンプパッド、ホライゾンのグラビティリフト、パスファインダーのグラップル、ヴァルキリーのジェットパックなど空中機動スキルが豊富に存在します。縦エイム練習は、こうした空中機動中の敵を追うY軸トラッキングを切り出して反復するのに役立ちます。"
        }
      },
      {
        "@type": "Question",
        "name": "競技FPSにおける「エレベーターピーク」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ジップラインやロープ昇降、高所からの段差飛び降りによって、横ではなく縦方向から突然頭出し（ピーク）してくる動きを指します。本ドリルは不意の上下の出現に対して瞬時に照準を合わせる初動フリックと追従を鍛えます。"
        }
      },
      {
        "@type": "Question",
        "name": "なぜ縦方向のトラッキングは横方向よりも身体運動学的に難しいのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "横トラッキングは肘の回旋や手首の自然な左右の屈曲で行えるのに対し、縦トラッキングは手首の過伸展や指の曲げ伸ばし、または前腕全体をマウスパッド上で滑らせる必要があり、静摩擦抵抗の変化が大きいためです。"
        }
      },
      {
        "@type": "Question",
        "name": "Overwatch 2（オーバーウォッチ2）の対空エイムに効果はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "対空トラッキングのウォームアップとして使えます。ファラやエコー、マーシーの滞空、ウィンストンやドゥームフィストの放物線ジャンプを追う場面に近いY軸追従を反復します。ゲーム内のヒットボックスや移動をそのまま再現するものではありません。"
        }
      },
      {
        "@type": "Question",
        "name": "Halo Infiniteなどのアリーナシューターでも活用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "グラップルショットやリパルサー、マンキャノンで滞空する相手を追うY軸コントロールの練習に使えます。本ドリルはボタン長押しの連続トラッキング方式で、バースト射撃は再現していません。"
        }
      },
      {
        "@type": "Question",
        "name": "Vertical Air-Trackにおけるミス判定やペナルティはどうなっていますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "左クリック長押し中にレティクルがターゲット内にあるとHP（100）が減り、0で破壊です。破壊ごとに100点＋高度ボーナス（画面の高さ25%/50%/75%以上で+25/+50/+75）にコンボとレベル倍率が掛かり、残り時間が+2秒（最大60秒）されます。開始時は45秒です。ターゲットを画面下へ落とすとコンボがリセットされ1秒減ります（タイムアウト設定がオフなら跳ね返ります）。レティクルが一瞬外れるだけではコンボは切れませんが、トラッキング率は下がります。1400点ごとにレベルが上がり、重力と回避が強まりターゲットが小さくなり、レベル5からは2体同時に出ます。"
        }
      },
      {
        "@type": "Question",
        "name": "縦エイム練習はどれくらいの頻度で行うべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "決まった回数はありませんが、1回10〜15分を週3〜4回程度、短く継続するのがおすすめです。同じ端末と感度でトラッキング率と到達レベルの推移を記録しましょう。"
        }
      },
      {
        "@type": "Question",
        "name": "この垂直エイムトレーナーは完全無料で利用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、無料・登録不要・インストール不要です。PCブラウザとマウスが必要で、開始するとポインターロックがかかります。Escを押すかロックが外れるとセッションは終了し、タッチ操作のみの端末ではプレイできません。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "垂直Y軸トラッキングエイムの練習方法",
    "description": "空中ターゲットの放物線落下軌道を予測し、滑らかな縦方向マウスコントロールを習得する4ステップ。",
        "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "センシ設定とポインターロックの有効化",
        "text": "/drillsページの共通マウス感度スライダー（1.00x = 30cm/360）を合わせ、開始を押してポインターロックを有効化します。",
        "url": "https://skilldrills.online/ja/drills/fps/vertical-air-track#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "放物線の上昇速度と頂点での減速を一致させる",
        "text": "打ち上げられたターゲットを視覚追従し、軌道の最高到達点（アペックス）付近で垂直速度がゼロに近づく瞬間を予測してマウスを滑らかに制御します。",
        "url": "https://skilldrills.online/ja/drills/fps/vertical-air-track#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "重力加速に合わせた引き下げトラッキングの実行",
        "text": "頂点から重力によって加速しながら落下するターゲットに合わせて、手首と指先をリラックスさせながら真っ直ぐマウスを引き下げます。",
        "url": "https://skilldrills.online/ja/drills/fps/vertical-air-track#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "着地直前の迎撃完了とニュートラル姿勢への復帰",
        "text": "最下点に達する前に破壊ダメージを与え切り、余計な反動ブレを起こさずに素早く中央へレティクルを再配置して次の打ち上げに備えます。",
        "url": "https://skilldrills.online/ja/drills/fps/vertical-air-track#step-4"
      }
    ]
  };

  const verticalAirTrackGuide = {
    heading: "Apex 縦エイム練習：空中トラッキングと落下軌道",
    intro: [
      "SkillDrillsのApex 縦エイム練習は、画面下から打ち上がり重力で放物線を描いて落ちる空中ターゲットを、左クリック長押しで追い続けて破壊する無料ブラウザドリルです。ターゲットは空中で急上昇・横ダッシュ・急降下の回避を行い、記録されるのは射撃ボタンを押していた時間のうちレティクルがターゲット上にあった割合（トラッキング率）です。Y軸のマウス操作と空中トラッキングをまとめて練習できます。",
      "上下（垂直）方向のスムーズパシュート（滑動性眼球運動）の神経機構は、左右の水平運動とは大きく異なります。Krauzlis（2004）は滑動性追従がおよそ30°/sまで正確であるとまとめており、Rashbass（1961）が示したように、滑らかな追従運動はターゲットの位置誤差ではなく「速度誤差（網膜スリップ）」によって駆動されるため、カクカクしたフリックではなく連続的な速度一致が不可欠です。",
      "滞空する敵を確実に捉えるには、重力加速度（g = 9.81 m/s²）の物理挙動を身体感覚に落とし込む必要があります。Land & McLeod（2000）によると、熟練した迎撃者は現在位置を追うのではなくジャンプの最高到達点（頂点）での減速と、その後の急速な落下加速を事前に予測して眼球と四肢を先行連動させています。",
      "ターゲットには横方向の速度や横ダッシュもありますが、動きの中心は上昇・頂点・落下のY軸です。普段横トラッキング中心に練習しているなら、不足しがちな縦方向の追従を補う用途に向いています。",
      "測定精度について：すべてのイベントはブラウザのperformance.now()高精度クロックを使用し、外部サーバー通信なしで端末内でミリ秒単位で処理されます。Spectre緩和策により一般的なブラウザタイマーは約1msに丸められ、画面リフレッシュレート（60Hzで約16.7ms、144Hzで約6.9ms、240Hzで約4.1ms）に応じた量子化が発生します。5ms以内の微小な数値差は測定誤差として扱い、他者の異なるPC環境と比較するのではなく、ご自身の同一ハードウェア環境での成長指標として活用してください。"
    ],
    benchmarks: {
      title: "トラッキング率の練習目安（SkillDrills基準）",
      headers: ["練習段階", "トラッキング率", "よく見られる傾向"],
      rows: [
        ["段階1", "82% 以上", "頂点の減速から落下加速への切り替えが滑らかで、回避にもほぼ置いていかれない"],
        ["段階2", "70% – 82%", "安定したY軸トラッキング。急な回避の直後にわずかにブレる"],
        ["段階3", "56% – 70%", "規則的な放物線には対応できるが、横ダッシュが混ざると遅れる"],
        ["段階4", "40% – 56%", "落下時に照準がターゲットの後ろに残り、取り戻そうとして行き過ぎる"],
        ["段階5", "40% 未満", "手首や腕に力が入り、頂点を過ぎるとターゲットを見失いやすい"]
      ],
      note: "トラッキング率 = 射撃ボタンを押していた時間のうちレティクルがターゲット上にあった割合。表はSkillDrills独自の練習目安で、研究上の基準値やユーザー統計、ゲームのランクとは対応しません。"
    },
    techniques: {
      title: "垂直エイム精度を高める神経運動プロトコル",
      items: [
        {
          name: "手首伸展と指先関節の独立コントロール",
          desc: "マウスの上下移動は腕全体を固めて動かすのではなく、指先を曲げ伸ばしして微調整します（Fitts, 1954）。肩や前腕を力ませると横方向の揺れ（ウォブル）が混入します。",
          tips: "指を軽く縮めてマウスを下へスムーズに引き込み、指を伸ばして上方向へ押し出します。"
        },
        {
          name: "放物線頂点（アペックス）での速度スリップ適応",
          desc: "ジャンプの最高到達点では垂直方向の速度が一瞬ゼロに近づきます（Rashbass, 1961; Land & McLeod, 2000）。ターゲットが止まる直前にマウスの移動速度を自ら緩めてください。",
          tips: "頂点は最大のダメージチャンスです。軌道の一番高いところの直前でマウスの引き速度を抜きます。"
        },
        {
          name: "落下加速度に先行する中心視アンカー配置",
          desc: "ターゲットが降下し始めたら、視線をターゲットの下端へ素早く固定します。重力により落下速度は二次関数的に急増するため、下方に視線を先行させて引き下げを先導します。",
          tips: "落ちてくる敵の上側を見つめないでください。敵の底面に視線を落としてマウスを引き下げます。"
        },
        {
          name: "前腕の摩擦低減とマウスパッドグライド",
          desc: "机やマウスパッドと前腕の皮膚が引っかかると、下方向へのストローク時に突っかかりが生じます。静摩擦抵抗が高いと追従がカクつきます。",
          tips: "アームスリーブを着用するか、手首をパッドの滑りやすい位置に配置して摩擦ドラッグを排除してください。"
        }
      ]
    },
    steps: [
      "/drillsページの共通マウス感度を合わせ、開始を押してポインターロックを有効化。",
      "画面下部のターゲット射出ポイント付近にクロスヘアを構え、垂直打ち上げの初動に備える。",
      "上空への上昇軌道を滑らかに追い、指先の伸展を使って上昇速度にぴったり合わせる。",
      "頂点での減速に合わせ、マウスを落ち着かせて滞空中のボーナスタイムに最大ダメージを与える。",
      "重力による落下加速に合わせてマウスを下へ加速させ、画面下へ落ちる前にHPを削り切って破壊する。"
    ],
    audience: "Apex Legends、Overwatch 2、Halo Infiniteなどで空中機動する敵を追う縦エイムを個別に練習したいPC FPSプレイヤー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'fitts1954', 'rashbass1961', 'land2000'),
    related: [
      { href: "/ja/drills/fps/strafe-tracking", label: "追いエイム練習（ストレイフトラッキング）" },
      { href: "/ja/drills/fps/recoil-control", label: "リコイル制御練習（リコイルコントロール）" },
      { href: "/ja/drills/fps/angle-hold-trainer", label: "アングルホールド練習（置きエイム）" },
      { href: "/ja/drills/motor/hand-eye-coordination/aim-trainer", label: "エイムトレーナー（反復フリック）" },
      { href: "/ja/drills/reaction-speed/visual-tracking-speed-test", label: "視覚追従速度テスト" }
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
      <VerticalAirTrackClient
        copy={{
          h1Keyword: "Apex 縦エイム練習",
          h1Suffix: " - 空中トラッキング",
          statScore: "スコア",
          statTime: "制限時間",
          statAccuracy: "トラッキング命中率",
          statBestScore: "自己ベスト",
          statTargetsDestroyed: "破壊ターゲット数",
          statMaxCombo: "最大コンボ",
          statPeakLevel: "最高到達レベル",
          startTitle: "Vertical Air-Track",
          startSubtitle: "ポインターロック入力 • エンドレス難易度進行",
          startButtonText: "トレーニング開始",
          playAgainText: "もう一度プレイ",
          shareText: "スコアを共有",
          exitText: "終了する",
          stageCaption: "縦エイム練習：放物線で落ちる空中ターゲットを左クリック長押しで追い続け、HPを削って破壊しよう。",
          rulesTitle: "ドリル操作方法 & スコア計算システム",
          aboutTitle: "垂直 エイム 練習（Vertical Air-Track）について",
          rulesItems: [
            {
              num: "1",
              text: "空中ターゲット追従",
              highlight: "破壊で +100 PTS / +2秒（最大60秒）",
              result: "重力放物線の落下軌道をスムーズに追跡"
            },
            {
              num: "2",
              text: "高所ボーナス",
              highlight: "最大 +75 PTS",
              result: "高高度でターゲットを破壊するほど高得点"
            },
            {
              num: "3",
              text: "落下ペナルティ",
              highlight: "コンボリセット / -1秒",
              result: "ターゲットが画面下へ落ちると適用（タイムアウト設定時）"
            },
            {
              num: "4",
              text: "レベル進行システム",
              highlight: "1400 PTS毎にレベルアップ",
              result: "重力・回避が上昇、ターゲット縮小、Lv5から2体同時"
            }
          ]
        }}
      />
      <DrillGuide guide={verticalAirTrackGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
