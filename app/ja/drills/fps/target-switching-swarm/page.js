import TargetSwitchingSwarmClient from '@/app/drills/fps/target-switching-swarm/TargetSwitchingSwarmClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — ja-JP (fps / target-switching-swarm)
// PRIMARY DOMESTIC: "ターゲット スイッチング エイム"     — Core keyword target
//                   "ターゲットスイッチング"           — #1 Google Suggest hit
//                   "スイッチング エイム"              — Confirmed Google Suggest term
//                   "マルチターゲット エイム練習"      — High-intent practice term
//                   "FPS ターゲット切り替え"           — Functional search
// SECONDARY / LSI:
//                   "ターゲット スイッチング 練習"     — Extended phrase
//                   "VALORANT スイッチング エイム"     — Game specific query
//                   "エイム 練習 ブラウザ 無料"        — Broad platform intent
// WINNER TITLE:     ターゲット スイッチング エイム練習 – 無料ブラウザFPSマルチターゲットフリックトレーナー | SkillDrills
// ============================================================

export const metadata = {
  title: "ターゲットスイッチ練習｜複数の的を素早く切り替える | SkillDrills",
  description: "ブラウザで無料のターゲットスイッチ練習。画面を動き回る2〜5個の的を次々に撃ち、複数ターゲットの切り替えを鍛えます。命中で+2秒（最大60秒）、ミスで-1秒のエンドレスドリルです。",
  keywords: [
    'ターゲットスイッチ練習',
    'ターゲットスイッチング',
    '複数ターゲット 切り替え',
    'スイッチング エイム',
    'マルチターゲット エイム練習',
    'ターゲット切り替え FPS',
    'スプレートランスファー',
    '切り替え速度',
    'フリック エイム 移行',
    'エイム練習 ブラウザ 無料',
    'CS2 エイム練習',
    '連続フリック',
    '複数ターゲット エイム'
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/target-switching-swarm",
    languages: getAlternateLanguages('/drills/fps/target-switching-swarm'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'ターゲットスイッチ練習｜複数の的を素早く切り替える | SkillDrills',
    description: "ブラウザで無料のターゲットスイッチ練習。画面を動き回る2〜5個の的を次々に撃ち、複数ターゲットの切り替えを鍛えます。命中で+2秒（最大60秒）、ミスで-1秒のエンドレスドリルです。",
    url: "https://skilldrills.online/ja/drills/fps/target-switching-swarm",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'ターゲットスイッチ練習｜複数の的を素早く切り替える | SkillDrills',
    description: "ブラウザで無料のターゲットスイッチ練習。画面を動き回る2〜5個の的を次々に撃ち、複数ターゲットの切り替えを鍛えます。命中で+2秒（最大60秒）、ミスで-1秒のエンドレスドリルです。",
  },
};

export default function TargetSwitchingSwarmPageJa() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSドリル", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "ターゲット スイッチング エイム練習", "item": "https://skilldrills.online/ja/drills/fps/target-switching-swarm" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Saccade", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "ターゲットスイッチ練習｜複数の的を素早く切り替える",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "無料のブラウザ用ターゲットスイッチ練習。画面を跳ね回る2〜5個の的を連続で撃ち、複数ターゲットの切り替えを練習します。",
    "genre": "FPS Training / Target Switching",
    "url": "https://skilldrills.online/ja/drills/fps/target-switching-swarm",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ターゲットスイッチ練習｜複数の的を素早く切り替える",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "Pointer Lock API、JavaScript、HTML5 Canvas対応ブラウザ",
    "description": "無料のブラウザ用ターゲットスイッチ練習。画面を跳ね回る2〜5個の的を連続で撃ち、複数ターゲットの切り替えを練習します。",
    "url": "https://skilldrills.online/ja/drills/fps/target-switching-swarm"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "ターゲットスイッチ練習｜複数の的を素早く切り替える",
    "url": "https://skilldrills.online/ja/drills/fps/target-switching-swarm",
    "description": "無料のブラウザ用ターゲットスイッチ練習。画面を跳ね回る2〜5個の的を連続で撃ち、複数ターゲットの切り替えを練習します。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Target Switching"],
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
        "name": "FPSにおける「ターゲットスイッチング（切り替えエイム）」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ターゲットスイッチングとは、複数の敵ターゲット間を淀みなく連続してクロスヘアを移行させ、撃破後に減速躊躇なく次の敵へ即座に着弾させるエイム運動技術です。"
        }
      },
      {
        "@type": "Question",
        "name": "通常のフリック練習とターゲットスイッチングの違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "通常のフリック練習は単一の標的を撃った後クロスヘアを一旦中央に戻すことが多いのに対し、ターゲットスイッチングは画面上に群れ（スワーム）として存在する複数の標的を連続して流れるように撃ち抜くため、運動の連鎖性と視覚インデックス能力が試されます。"
        }
      },
      {
        "@type": "Question",
        "name": "このターゲットスイッチ練習はどんなルールですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "開始時の制限時間は45秒で、画面を跳ね回る的がレベルに応じて2〜5個表示され続けます。的に当てると+100点にコンボ倍率とレベル倍率が掛かり、時間が2秒増えます（最大60秒）。何もない場所をクリックすると1秒減り、コンボがリセットされます。ターゲットのタイムアウト設定がオンの場合、一定時間（序盤は約2.8秒、レベルが上がるほど短く）以内に当てられなかった的は消え、1秒減ります。2100点ごとにレベルが上がり、的は小さく速くなります。マウスとポインターロックで操作し、Escキーで終了します。"
        }
      },
      {
        "@type": "Question",
        "name": "敵を倒した後に次の標的へエイムが遅れる（躊躇する）のはなぜですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "敵が倒れたかどうかの「キル確認（視覚・聴覚フィードバック）」を無意識に待ってから次の動作を始めるためです。このドリルでは当てた的がすぐに消えて新しい的が出るため、確認を待たずに次の的へ視線とマウスを移す流れを繰り返し練習できます。"
        }
      },
      {
        "@type": "Question",
        "name": "CS2などのスプレートランスファー（リコイル移行）に役立ちますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "部分的にです。このドリルはクリック単位の判定で、リコイルや連射は再現しません。ただし、ある的から次の的へクロスヘアを移して正確に止める動作はスプレートランスファーの土台になるため、補助練習として使えます。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲットスイッチングが最も重要となるゲームタイトルは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Counter-Strike 2、Apex Legends、Overwatch 2のように、複数の敵を続けて相手にする場面が多いFPSで特に役立ちます。"
        }
      },
      {
        "@type": "Question",
        "name": "高速スイッチングに最適なマウスの持ち方はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "つかみ持ち（Claw Grip）や指先持ち（Fingertip Grip）が推奨されます。手首や指先の関節を脱力させて微調整できるため、急激なフリック停止時の衝撃を柔軟に吸収できます。"
        }
      },
      {
        "@type": "Question",
        "name": "フィッツの法則（Fitts' Law）と弾道運動はどう関係していますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "フィッツの法則では距離と標的サイズで移動時間が決まりますが、確率的最適化サブムーブメントモデル（Meyer et al., 1988）によれば、照準は距離の大半を詰める速い主移動と、短い修正移動で構成されます。的が小さく速いほど修正移動が多く必要になります。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲットスイッチングの練習頻度はどれくらいが理想ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "決まった正解はありません。試合前のウォームアップとして短く集中したセッションを数回行い、同じ環境で自己記録の変化を比べるのがおすすめです。実戦での上達を保証するものではありません。"
        }
      },
      {
        "@type": "Question",
        "name": "このターゲットスイッチングエイム練習は無料で利用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、登録不要・インストール不要で無料です。PCブラウザでマウスとポインターロックを使って練習します。タッチ専用端末ではプレイできません。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "ターゲット スイッチング エイムの練習手順",
    "description": "動き回る複数の的を連続で撃ち、ターゲットの切り替えを練習する4ステップ。",
        "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "感度設定とポインターロックの有効化",
        "text": "/drills ページの感度設定を普段のゲーム感度に合わせて開始します。開始するとポインターロックが自動でかかります。",
        "url": "https://skilldrills.online/ja/drills/fps/target-switching-swarm#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "最寄りのスワームターゲットを素早く捕捉",
        "text": "動いている的の中で最も近いものへフリックし、クリックして破壊して+2秒（最大60秒）を得ます。",
        "url": "https://skilldrills.online/ja/drills/fps/target-switching-swarm#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "キル確認の停止を挟まず即座に次へ移行",
        "text": "破壊アニメーションを待つことなく、クリック直後に次の隣接ターゲットへ弾道運動でクロスヘアを飛ばします。",
        "url": "https://skilldrills.online/ja/drills/fps/target-switching-swarm#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "脱力したフローリズムで連続キルストリークを維持",
        "text": "手首の力を抜いてリズムを保ち、的がタイムアウトで消える前に連続で撃ってコンボとレベルを積み上げます。",
        "url": "https://skilldrills.online/ja/drills/fps/target-switching-swarm#step-4"
      }
    ]
  };

  const targetSwitchingGuide = {
    heading: "ターゲットスイッチ練習：複数の的を素早く切り替えるガイド",
    intro: [
      "ターゲットスイッチ練習を探しているFPSプレイヤー向けの無料ブラウザドリルです。画面を跳ね回る2〜5個の的が常に表示され、1つ当てるとすぐ新しい的が出るため、複数ターゲットの切り替えを休まず繰り返せます。45秒から始まり、命中ごとに2秒増え（最大60秒）、ミスで1秒減るので、正確に当て続ける限りセッションが続きます。",
      "ターゲットスイッチングの心理物理学は、フィッツの法則（Fitts, 1954）およびDavid E. Meyerら（1988）が提唱した「確率的最適化サブムーブメントモデル」に基づいています。照準動作は距離の大半を詰める最初の高速弾道運動（主移動）と、視覚フィードバックによる微修正（副移動）から構成されます。多くのプレイヤーは当てた後に「倒せたかどうか」を確認して一瞬止まりますが、このドリルはクリックと同時に視線を次の的へ移す練習でその停止を減らすことに焦点を当てています。",
      "密集したスワーム群からの標的選択には、特徴統合理論と前注意的視覚探索（Treisman & Gelade, 1980; Wolfe, 2007）が深く関与します。人は少数の動く対象の位置を同時に追えるため、近い的から短い経路で処理する順番をあらかじめ決めておくと切り替えが滑らかになります。",
      "記録について：結果画面にはスコア、命中精度（命中数 ÷ 総クリック数）、破壊ターゲット数、最大コンボ、最高到達レベルが表示され、自己ベストはこのブラウザ内にのみ保存されます。的と的の間の移行時間（ms）は計測しません。モニターのリフレッシュレートやマウスのポーリングレートで体感が変わるため、同じ環境で自分の記録の変化を比べてください。"
    ],
    benchmarks: {
      title: "ターゲットスイッチ 命中精度の練習目安",
      headers: ["練習帯", "命中精度", "目安"],
      rows: [
        ["帯 1", "95% 以上", "高レベルでも空撃ちがほとんどない状態"],
        ["帯 2", "88% – 95%", "速い的で時々外すが、切り替えの流れは保てている状態"],
        ["帯 3", "80% – 88%", "離れた的へ切り替えるときにオーバーシュートが出る状態"],
        ["帯 4", "70% – 80%", "焦って空撃ちが増え、時間がよく減る状態"],
        ["帯 5", "70% 未満", "速さを落として正確に止めることから固めたい状態"]
      ],
      note: "命中精度は結果画面の値（命中数 ÷ 総クリック数）です。帯はSkillDrillsが定めた練習用の目安で、研究上の基準、ゲームのランク、ユーザー統計とは関係ありません。"
    },
    techniques: {
      title: "ターゲットスイッチングを極めるエビデンスベースのプロトコル",
      items: [
        {
          name: "サッケード先行ルーティングと視覚インデックス",
          desc: "1体目の標的の微調整が終わる直前、視線（中心視）だけを一足先に次の標的へとジャンプさせます（Treisman & Gelade, 1980; Wolfe, 2007）。通常、視線は手より先に目標へ到達します。",
          tips: "クリックした後の標的を見つめ続けないでください。周辺視野で破壊を感知し、中心視は次の獲物に固定します。"
        },
        {
          name: "終末急制動と弾道サブムーブメントの最適化",
          desc: "フリック軌道の最後の10%で拮抗筋のカウンターテンションを素早く効かせ、標的中心でマウスをピタッと停止させます（Meyer et al., 1988）。行き過ぎによる往復振動を防ぎます。",
          tips: "マウスに油圧ブレーキがついているイメージを持ちましょう。初速は爆発的に、停止は鋭く行います。"
        },
        {
          name: "最短角距離のクラスタールーティング",
          desc: "画面中を無秩序に行ったり来たりするのではなく、角度差が最も小さい隣接標的のペアから順に処理していきます（Fitts, 1954）。",
          tips: "遠くの孤立ターゲットに飛びつく前に、近くの群れを確実に一層してから大移動します。"
        },
        {
          name: "グリップ脱力と微小調整の柔軟性維持",
          desc: "グリップの握力は10段階中「3」程度に保ち、最高速で移動した直後でも指先でミリ単位の修正ができる柔軟性を残します。",
          tips: "長時間のスイッチングで手が疲れたりエイムが突っかかる場合は、親指と小指の握り込みを意図的に緩めてください。"
        }
      ]
    },
    steps: [
      "/drills ページの感度設定を普段のゲーム感度に合わせて開始（ポインターロックは自動）。",
      "出現したスワーム全体を視野に入れ、角度差の小さいターゲットの塊を素早く認識。",
      "最寄りの的へフリックして破壊し、+100点×コンボ・レベル倍率と+2秒（最大60秒）を獲得。",
      "倒したかどうかの確認停止を入れず、即座に次の標的へ向かってマウスを滑らかに飛ばす。",
      "空撃ち（-1秒）を減らしながら連続撃破を繋ぎ、的が小さく速くなる高レベルに挑戦する。"
    ],
    audience: "Counter-Strike 2、Apex Legends、Overwatch 2などで、複数の敵を続けて相手にするターゲット切り替えを個別に練習したいFPSプレイヤー。マウスが必要です。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/ja/drills/fps/vertical-air-track", label: "垂直 エイム 練習（縦エイム・空中トラッキング）" },
      { href: "/ja/drills/fps/strafe-tracking", label: "追いエイム練習（ストレイフトラッキング）" },
      { href: "/ja/drills/fps/recoil-control", label: "リコイル制御練習（リコイルコントロール）" },
      { href: "/ja/drills/motor/hand-eye-coordination/aim-trainer", label: "エイムトレーナー（反復フリック）" },
      { href: "/ja/drills/reaction-speed/reaction-game", label: "リアクションスピードテスト" }
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
      <TargetSwitchingSwarmClient
        copy={{
          h1Keyword: "ターゲットスイッチ練習",
          h1Suffix: "｜複数の的を素早く切り替える",
          subtitle: "動き回る複数の的の間で素早く正確に照準を切り替える練習を、ブラウザで無料で。",
          statScore: "スコア",
          statTime: "制限時間",
          statAccuracy: "命中精度",
          statBestScore: "自己ベスト",
          statTargetsDestroyed: "破壊ターゲット数",
          statMaxCombo: "最大コンボ",
          statPeakLevel: "最高到達レベル",
          startTitle: "Target Switching Swarm",
          startSubtitle: "ポインターロック入力 • エンドレス難易度進行",
          stageCaption: "動き回る的が消える前に、高速フリックで連続破壊。",
          rulesTitle: "ドリル操作方法 & スコア計算システム",
          aboutTitle: "ターゲット スイッチング（Target Switching）について",
          rulesItems: [
            { num: "1", text: "ターゲット命中", highlight: "+100 PTS (+2秒, 最大60秒)", result: "×コンボ倍率" },
            { num: "2", text: "持続スワーム", highlight: "即時リスポーン", result: "2〜5個の的を維持" },
            { num: "3", text: "ミス / タイムアウト", highlight: "ペナルティ", result: "コンボリセット (-1秒)" },
            { num: "4", text: "レベル難易度上昇", highlight: "+1 レベル / 2100 PTS", result: "小型化 & 高速化" }
          ]
        }}
      />
      <DrillGuide guide={targetSwitchingGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
