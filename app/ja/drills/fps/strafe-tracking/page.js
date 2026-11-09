import StrafeTrackingClient from '@/app/drills/fps/strafe-tracking/StrafeTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — ja-JP (fps / strafe-tracking)
// PRIMARY (2026-11 Phase B): "ストレイフ追いエイム練習" (GSC 44 impr, pos 6.9) — keep.
// トラッキングエイム練習 is owned by fps/pro-smooth-pursuit, 動く的のエイム練習 by reaction fps-tracking-trainer.
// ============================================================

export const metadata = {
  title: "ストレイフ追いエイム練習｜ADAD切り返し | SkillDrills",
  description: "無料のストレイフ追いエイム練習。ADADで左右に切り返す標的へマウスで照準を合わせ続け、Apex・OW2向けの追いエイム精度をブラウザで確認できます。",
  keywords: [
    "追いエイム 練習",
    "追いエイム 練習 ブラウザ",
    "追いエイム",
    "ストレイフ 練習",
    "ストレイフ 練習 サイト",
    "ストレイフトラッキング",
    "FPS 追いエイム",
    "apex 追いエイム 練習",
    "ow2 追いエイム 練習",
    "エイム練習 無料 ブラウザ",
    "ADAD 切り返し"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/strafe-tracking",
    languages: getAlternateLanguages('/drills/fps/strafe-tracking'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "ストレイフ追いエイム練習｜ADAD切り返し | SkillDrills",
    description: "無料のストレイフ追いエイム練習。ADADで左右に切り返す標的へマウスで照準を合わせ続け、Apex・OW2向けの追いエイム精度をブラウザで確認できます。",
    url: "https://skilldrills.online/ja/drills/fps/strafe-tracking",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "ストレイフ追いエイム練習｜ADAD切り返し | SkillDrills",
    description: "無料のストレイフ追いエイム練習。ADADで左右に切り返す標的へマウスで照準を合わせ続け、Apex・OW2向けの追いエイム精度をブラウザで確認できます。",
  },
};

export default function StrafeTrackingPageJa() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/" },
      { "@type": "ListItem", "position": 2, "name": "FPSトレーニング", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "ストレイフ追いエイム練習", "item": "https://skilldrills.online/ja/drills/fps/strafe-tracking" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ストレイフ追いエイム練習 (Strafe Tracking)",
    "url": "https://skilldrills.online/ja/drills/fps/strafe-tracking",
    "description": "ブラウザ上で不規則な左右ストレイフと切り返しに対する追いエイム（トラッキング）を反復トレーニングできる無料FPSエイム練習ツール。",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires HTML5 Canvas and Pointer Lock API support",
    "dateModified": "2026-11-09"
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "ストレイフ追いエイム練習 (Strafe Tracking)",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "ブラウザ上で不規則な左右ストレイフと切り返しに対する追いエイム（トラッキング）を反復トレーニングできる無料FPSエイム練習ツール。",
    "genre": "FPS Training / Strafe Tracking Aim",
    "url": "https://skilldrills.online/ja/drills/fps/strafe-tracking",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "ストレイフ追いエイム練習 (Strafe Tracking)",
    "url": "https://skilldrills.online/ja/drills/fps/strafe-tracking",
    "description": "ブラウザ上で不規則な左右ストレイフと切り返しに対する追いエイム（トラッキング）を反復トレーニングできる無料FPSエイム練習ツール。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Strafe Tracking", "Tracking Aim"],
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
        "name": "FPSにおける「追いエイム（トラッキングエイム）」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "追いエイム（トラッキング / スムーズパシュート）とは、激しく動き回る敵ターゲットに対して照準（レティクル）を常に重ね合わせ続ける運動視覚追従技術です。Apex LegendsやOverwatch 2のようにTTK（キルに必要な時間）が長いシューターで最重要視されます。"
        }
      },
      {
        "@type": "Question",
        "name": "ストレイフの「切り返し」でエイムが外れてしまう理由は何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人間が動く対象を滑らかに追従できる角速度の上限は約30°/秒であり、急激な反転時には脳が速度変化を認識して追いつき跳躍眼球運動（キャッチアップサッケード）を発動するまでに約100〜130ミリ秒の不可避な遅延が発生するためです（Rashbass, 1961; Krauzlis, 2004）。"
        }
      },
      {
        "@type": "Question",
        "name": "フリックエイムと追いエイムの神経科学的な違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "フリックエイムは目標位置へ一挙に照準を飛ばす開ループの弾道性サッケード運動（約150〜200ms）です。一方、追いエイムは網膜上の像の滑り（網膜スリップ速度）を視覚野でリアルタイム検知し、小脳と前頭眼野を通じて筋出力を微小調整し続ける連続閉ループ追従制御です（Krauzlis, 2004）。"
        }
      },
      {
        "@type": "Question",
        "name": "追いエイムを安定させるための適切なマウスの持ち方や腕の使い方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "近距離の激しい切り返しには手首と指の柔軟な屈曲を用い、中長距離の持続的な追従には肘を支点にした前腕全体の滑らかなスライド（アームグライド）を連動させることで、手首の可動域限界による引っ掛かりや筋肉の過緊張を防ぐことができます。"
        }
      },
      {
        "@type": "Question",
        "name": "「オーバートラッキング（行き過ぎ）」を防ぐにはどうすればよいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "敵の速度以上にマウスを急激に振ってしまうオーバートラッキングは、力みや焦りによる過剰補正が原因です。敵の動きを先読みしようとしすぎず、敵の角速度にマウス速度を正確に同期（マッチング）させる意識を持つことで改善に役立ちます（Land & Horwood, 1995）。"
        }
      },
      {
        "@type": "Question",
        "name": "マウス感度（センシ）はトラッキングエイムにどのように影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一般的に中〜低感度（ミドル〜ローセンシ）の方がマウスパッド上の移動ストロークが大きくなり、手の微小な震えや筋電ノイズが照準に反映されにくいため、滑らかなトラッキング軌道を描きやすくなります。"
        }
      },
      {
        "@type": "Question",
        "name": "本ツールはApex LegendsやOverwatch 2の実戦練習になりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "補助練習として役立ちます。本ツールはポインターロックを使い、/drillsの設定で決めたマウス感度倍率でADADストレイフ（左右不規則運動）への追従を練習できます。ブラウザの入力はOSのポインター設定を経由するため、実戦での伸び方には個人差があります。"
        }
      },
      {
        "@type": "Question",
        "name": "スコア・コンボ・残り時間はどう計算されますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "照準が標的に重なっている間、0.25秒ごとに基本50点（コンボ倍率とレベル倍率を適用）と0.1秒が加算されます（残り時間の上限は60秒）。1秒途切れずに追うとコンボが1上がり、倍率は最大3.0倍です。標的から外れた瞬間にコンボは0に戻り、時間ペナルティ設定がオンなら1秒外れるごとに0.6秒減ります。45秒から始まり、残り時間が0で終了です。クリックは不要です。"
        }
      },
      {
        "@type": "Question",
        "name": "高リフレッシュレートモニター（144Hz/240Hz）はトラッキング精度に影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "影響する場合があります。フレーム間隔は60Hzで約16.7ms、144Hzで約6.9ms、240Hzで約4.1msなので、高リフレッシュレートほど切り返しが細かいコマで表示されます。ただしスコア差は機材より練習量や個人差の影響が大きいこともあります。"
        }
      },
      {
        "@type": "Question",
        "name": "本追いエイム練習ツールはブラウザ上で無料で利用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、完全無料です。インストールや会員登録、課金などは一切不要で、Webブラウザを開くだけでストレイフ追いエイム練習を始められます。ポインターロックを使うマウス専用ドリルなのでPCで利用してください。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "追いエイム（ストレイフトラッキング）を極める4ステップ",
    "description": "不規則な左右ストレイフと切り返しに正確に吸い付く追いエイム技術を習得するための手順。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "感度を合わせて開始",
        "text": "ドリル一覧（/drills）の設定でマウス感度倍率を普段のゲームに近づけ、トレーニング開始を押します。カウントダウン後にポインターロックがかかります。",
        "url": "https://skilldrills.online/ja/drills/fps/strafe-tracking#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "ターゲットの初動捕捉",
        "text": "出現したターゲットの中央に素早くレティクルを重ね合わせ、追従を開始します。",
        "url": "https://skilldrills.online/ja/drills/fps/strafe-tracking#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "滑らかな角速度マッチング",
        "text": "標的の左右移動速度に合わせてマウスを滑らかに動かし、レティクルが標的の中心から外れないよう同期させます。",
        "url": "https://skilldrills.online/ja/drills/fps/strafe-tracking#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "切り返し瞬間のキャッチアップリカバリー",
        "text": "標的が急反転した瞬間、約100msの認識遅延を受け止めつつ、素早い微小フリックで即座に照準を再捕捉します。",
        "url": "https://skilldrills.online/ja/drills/fps/strafe-tracking#step-4"
      }
    ]
  };

  const strafeGuideJa = {
    heading: "ストレイフ追いエイム練習ガイド：ADAD切り返しを追う",
    intro: [
      "ストレイフ追いエイム練習は、ADADで左右に切り返す標的へ照準を合わせ続けるFPSトレーニングです。Apex LegendsやOverwatch 2では、一瞬のフリックだけでなく、数秒間ターゲットを追い続けるトラッキング精度が重要になります。",
      "滑らかな追従（スムーズパシュート）は標的の速度が上がりすぎると追いつけず、追いつきサッケードで補う必要があります（Krauzlis, 2004; Rashbass, 1961）。標的が不意に反転した直後には、認知と反応の遅れが生じます。この遅れで生じたズレをすばやく戻す練習が追いエイムの土台になります。",
      "視覚誘導型ハンドコントロールにおいては、 Michael F. Land & David N. Horwood（1995）の二重注視点モデルおよび C.S. Green & D. Bavelier（2003）のアクションビデオゲーム視覚認知理論が適用されます。視線はターゲットの輪郭そのものだけでなく、進行方向のわずかな予備動作や速度変化（速度シグナル）を先読み知覚し、前頭眼野および小脳を通じて滑らかな手の連続補正動作を生成します。",
      "計測について：このドリルはフレームごとに照準が標的のヒットボックス内にあるかを判定し、精度（%）とターゲット外時間を端末内で計算します。表示のリフレッシュレートや入力機器の遅延で結果は変わるため、同じ環境での自己記録の推移を見てください。",
      "ディスプレイと入力環境の最適化について：通常の60Hzモニターでは約16.7msのフレーム遅延が生じ、高速な反転時にターゲットの像が不連続に飛んで見えます。144Hz（約6.9ms）や240Hz（約4.1ms）の高リフレッシュレートモニターとポーリングレート1000Hz以上のゲーミングマウスを併用することで、標的の切り返しを鮮明に捉え、微細なハンドコントロールを反映しやすくなります。"
    ],
    benchmarks: {
      title: "ストレイフ追いエイム精度の目安（SkillDrills練習基準）",
      headers: ["目安ティア", "追従精度 %", "最大吸い付き時間", "状態の目安"],
      rows: [
        ["ティア1", "82% – 95%+", "5.0秒以上", "速いADADの切り返しでも照準が標的から離れにくく、反転直後の戻りが早い段階。"],
        ["ティア2", "68% – 81%", "3.5秒 – 4.9秒", "一定速度の追従が滑らかで、切り返しの遅れを小さな修正で戻せる段階。"],
        ["ティア3", "54% – 67%", "2.0秒 – 3.4秒", "通常の左右移動は安定して追従可能。標的の移動速度が加速した際や急激な反転時にわずかなオーバーシュート（行き過ぎ）が生じる。"],
        ["ティア4", "38% – 53%", "1.0秒 – 1.9秒", "標的の切り返しに反応が遅れ、照準が敵の背後を取り残される現象が発生。直線追従でも手のブレや力みによる細かいカクつきが見られる。"],
        ["ティア5", "38% 未満", "1.0秒未満", "ターゲットの不規則運動に目が追いつかず、過剰補正のジッター（手の震え）が発生。実戦で敵のストレイフに翻弄され弾を外してしまう状態。"]
      ],
      note: "精度はセッション全体のフレームのうち照準が標的ヒットボックス内にあった割合、最大吸い付き時間は途切れずに追えた最長秒数です。区分はSkillDrillsが決めた練習用の目安で、研究基準やユーザー統計ではありません。"
    },
    techniques: {
      title: "ストレイフ追いエイムを安定させる4つのポイント",
      items: [
        {
          name: "角速度マッチング（速度同期）と脱力",
          desc: "追いエイムで最も重要なのは「照準を追いつかせる」ことではなく「標的と同じ速度でマウスを動かし続ける」ことです。力みが入ると手の動摩擦が跳ね上がり、微小なカクつきが発生します。手のひらと指の力を抜き、マウスパッド上を滑らせるように操作します（Schmidt et al., 1979）。",
          tips: "ターゲットの先を予測して急激に振るのではなく、敵の移動速度にハンドスピードをぴったり合わせる感覚を意識してください。"
        },
        {
          name: "切り返し時のキャッチアップサッケード（追いつき復帰）",
          desc: "標的が反転した際、人間の神経伝達遅延により約100msは必ず照準が取り残されます。この物理的遅延を慌てずに受け止め、直後に小さく素早いマイクロフリック（キャッチアップサッケード）を行って照準を再センタリングします（Rashbass, 1961; Krauzlis, 2004）。",
          tips: "反転された瞬間に焦って大きく振り抜かないこと。小さな修正フリックで再捕捉し、すぐに滑らかな追従モードへ戻します。"
        },
        {
          name: "前腕グライドと手首のハイブリッド分担",
          desc: "近距離の小刻みな切り返しは手首の可動域で高速処理し、横に長い大ストレイフや追いかけ動作は肘を支点にした前腕スライド（アームグライド）で処理します。関節の役割を分担すると、可動域の端で手首が引っかかる場面を減らせます。",
          tips: "前腕が机に張り付かないよう、アームカバーの使用や十分なマウスパッド面積の確保が効果的です。"
        },
        {
          name: "オーバートラッキングの抑制と先読み自制",
          desc: "敵が切り返すと勝手に予測してフライングでマウスを止めてしまう「予測エイム」は、敵がそのまま直進した際に致命的なミスとなります。視覚シグナルの確定を待ってから反応するトリガー規律を保つことで、追従の一貫性の向上に役立つ可能性があります（Land & Horwood, 1995）。",
          tips: "「動いたのを見てから追う」という反応規律を徹底することで、フェイントストレイフに釣られなくなります。"
        }
      ]
    },
    steps: [
      "/drillsの設定でマウス感度倍率を合わせ、トレーニング開始を押します（カウントダウン後にポインターロック）。",
      "ステージ中央に出現した移動ターゲットに素早く照準を重ね、追従を開始します。",
      "標的の左右移動速度に合わせてマウスを滑らかに動かし、レティクルを中心部に固定し続けます。",
      "標的が急反転した際は素早い微小修正で即座にリカバリーし、最大吸い付き継続時間を伸ばします。",
      "セッション終了後、追従精度（%）、最大ロック時間、オフターゲット時間を確認し弱点を分析します。"
    ],
    audience: "Apex Legends、Overwatch 2、THE FINALS、VALORANTなどで敵の激しいストレイフや切り返しに翻弄されず、吸い付くような正確なトラッキングエイムを習得したいすべてのPCゲーマー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'rashbass1961', 'land2000'),
    related: [
      { href: "/ja/drills/fps/recoil-control", label: "リコイル練習 (Recoil Control Trainer)" },
      { href: "/ja/drills/fps/angle-hold-trainer", label: "置きエイム練習 (Angle Hold Trainer)" },
      { href: "/ja/drills/fps/pro-smooth-pursuit", label: "トラッキングエイム練習（なめらかな追従）" },
      { href: "/ja/drills/fps/anti-strafe-jitter-duel", label: "レレレ撃ち対策" },
      { href: "/ja/drills/fps/micro-correction-precision", label: "マイクロフリック練習 (Micro-Correction)" }
    ]
  };

  const copyJa = {
    h1Keyword: "ストレイフ追いエイム練習",
    h1Suffix: " - ADAD切り返し",
    caption: "追いエイム（トラッキング）は不規則に動く敵に照準を合わせ続ける運動視覚制御です。人間の滑らかな追従は約30°/秒が上限であり、急な切り返しには約100〜130msの認識遅延が伴います（Rashbass, 1961; Krauzlis, 2004）。冷静な速度同期と素早いリカバリーを鍛えましょう。",
    statStatus: "ステータス",
    statusTracking: "追従中",
    statusComplete: "完了",
    statusStandby: "待機中",
    statTime: "残り時間",
    statAccuracy: "追従精度",
    statBest: "自己ベスト",
    statScore: "スコア",
    pausedTitle: "一時停止中",
    pausedPrompt: "画面をクリックしてカーソルを固定し、再開してください。",
    startTitle: "ストレイフ追いエイム練習",
    startSubtitle: "左右ADAD追従 • ポインターロック • エンドレス難易度進行",
    startButtonText: "トレーニング開始",
    getReady: "構えてください",
    statLockStreak: "最大吸い付き時間",
    statPeakLevel: "到達レベル",
    statOffTarget: "ターゲット外時間",
    playAgainText: "もう一度挑戦",
    shareText: "スコアをシェア",
    exitText: "終了",
    bottomCaption: "フロア上を左右に激しく切り返すターゲットに照準を合わせ続け、不規則なストレイフへの追従力を鍛えてください。",
    rulesTitle: "ドリルルールと設定",
    rulesItems: [
      { num: "1", text: "標的に重ねる", highlight: "0.25秒ごと +50 PTS (+0.4秒/秒)", result: "×コンボ倍率" },
      { num: "2", text: "1秒連続追従", highlight: "コンボ+1・最大 3.0×", result: "最大倍率" },
      { num: "3", text: "レベル進行", highlight: "+1 レベル / 1400 PTS", result: "可変ストレイフ加速" },
      { num: "4", text: "標的から外れる", highlight: "即コンボリセット", result: "1秒ごと -0.6秒（ペナルティON）" }
    ],
    aboutTitle: "ストレイフ追いエイム練習について",
    whatIsTitle: "ストレイフ追いエイム練習とは？",
    whatIsLead: "追いエイムとは、予測不能に動く標的に照準を重ね合わせ続ける技術です。人間の滑らかな視覚追従は角速度約30°/秒まで正確に機能し、反転のたびに約100〜130ミリ秒の不可避な遅れ（キャッチアップサッケード）が発生します（Rashbass, 1961; Krauzlis, 2004）。",
    aboutIntro: [
      "追いエイム練習は、画面上を左右不規則に動き回る敵に対して照準を吸い付かせるための持続的な運動補正能力を徹底的に強化します。"
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "対象プレイヤー", text: "Apex LegendsやOverwatch 2などで高速なADADレレレ移動や不規則な敵の回避行動を捉えたい競技プレイヤー。" },
      { iconBg: "bg-fuchsia-600", title: "鍛えられるスキル", text: "リアクティブトラッキング、エイムの滑らかさ、切り返しの読み、方向転換リカバリースピード、アームグライド制御。" },
      { iconBg: "bg-orange-600", title: "ポインターロック入力", text: "ポインターロックを使用し、ゲーム内の操作感に近づけて練習できます。マウス加速の影響はOSとブラウザの設定によって異なります。" }
    ]
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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

      <StrafeTrackingClient copy={copyJa} />

      <DrillGuide guide={strafeGuideJa} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
