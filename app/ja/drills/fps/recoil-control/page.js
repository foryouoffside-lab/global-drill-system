import RecoilControlClient from '@/app/drills/fps/recoil-control/RecoilControlClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — ja-JP (fps / recoil-control)
// PRIMARY DOMESTIC: "リコイル練習"               — High domestic intent
//                   "リコイル 練習 ブラウザ"      — #1 Google Suggest autocomplete query
//                   "リコイル制御"               — Core tactical terminology
//                   "リコイル 練習 apex"         — High-intent tracking/FPS shooter query
//                   "リコイル制御 マウス"         — Physical hardware input query
// SECONDARY / LSI:
//                   "FPS 反動制御"              — Broad game mechanic search
//                   "スプレーコントロール 練習"   — CS2 / VALORANT spray query
//                   "CS2 リコイル練習"           — Tactical shooter query
//                   "VALORANT リコイル"          — Deterministic vertical / bloom query
//                   "エイム練習 無料 ブラウザ"   — Category intent phrase
// WINNER TITLE:     リコイル練習 – ブラウザで無料FPS反動制御・スプレーパターントレーナー | SkillDrills
// ============================================================

export const metadata = {
  title: "リコイル練習｜FPS反動制御・スプレー練習 | SkillDrills",
  description: "インストール不要のリコイル練習。ブラウザで30発フルオートのスプレーをマウスで引き下げ、動く標的でリコイルコントロール練習。VALORANT・CS2・Apex向けのウォームアップに。",
  keywords: [
    "リコイル練習",
    "リコイル練習 ブラウザ",
    "リコイルコントロール 練習",
    "リコイル制御",
    "スプレー練習",
    "反動制御 FPS",
    "リコイルパターン",
    "VALORANT リコイル",
    "CS2 リコイル練習",
    "Apex リコイル",
    "リコイル制御 マウス",
    "スプレーコントロール 練習",
    "エイム練習 無料 ブラウザ"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/recoil-control",
    languages: getAlternateLanguages('/drills/fps/recoil-control'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "リコイル練習｜FPS反動制御・スプレー練習 | SkillDrills",
    description: "インストール不要のリコイル練習。ブラウザで30発フルオートのスプレーをマウスで引き下げ、動く標的でリコイルコントロール練習。VALORANT・CS2・Apex向けのウォームアップに。",
    url: "https://skilldrills.online/ja/drills/fps/recoil-control",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "リコイル練習｜FPS反動制御・スプレー練習 | SkillDrills",
    description: "インストール不要のリコイル練習。ブラウザで30発フルオートのスプレーをマウスで引き下げ、動く標的でリコイルコントロール練習。VALORANT・CS2・Apex向けのウォームアップに。",
  },
};

export default function RecoilControlPageJa() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/" },
      { "@type": "ListItem", "position": 2, "name": "FPSトレーニング", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "リコイル練習", "item": "https://skilldrills.online/ja/drills/fps/recoil-control" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "リコイル練習 (Recoil Control Trainer)",
    "url": "https://skilldrills.online/ja/drills/fps/recoil-control",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "ブラウザ上でAK-47スタイルのスプレーパターンに対する垂直引き下げと水平補正を反復できる無料FPSリコイル練習ツール。"
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "リコイル練習 (Recoil Control Trainer)",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "ブラウザ上でAK-47スタイルのスプレーパターンに対する垂直引き下げと水平補正を反復できる無料FPSリコイル練習ツール。",
    "genre": "FPS Training / Recoil & Spray Control",
    "url": "https://skilldrills.online/ja/drills/fps/recoil-control",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "リコイル練習 (Recoil Control Trainer)",
    "url": "https://skilldrills.online/ja/drills/fps/recoil-control",
    "description": "ブラウザ上でAK-47スタイルのスプレーパターンに対する垂直引き下げと水平補正を反復できる無料FPSリコイル練習ツール。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Recoil Control"],
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
        "name": "FPSにおける「リコイル制御（反動制御）」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "リコイル制御（反動補正 / スプレーコントロール）とは、フルオート連射時に銃身が物理的に跳ね上がる（マズルクライム）動きに対し、マウスを正確に逆方向および逆のタイミングで操作して着弾点を一点に集約させる運動制御技術です。"
        }
      },
      {
        "@type": "Question",
        "name": "初弾8〜10発の垂直引き下げが最も重要とされる理由は何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "多くのアサルトライフルの初弾8〜10発は、左右のブレが小さくほぼ垂直に上昇します。本ドリルの30発パターンも最初の約10発は上昇し、その後左右に揺れます。撃ち合いの多くは初弾付近で決まるため、一定速度の引き下げを先に固めるのが効率的です。"
        }
      },
      {
        "@type": "Question",
        "name": "Apex LegendsやVALORANT、CS2におけるリコイル特性の違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CS2はAK-47などに固定の幾何学的スプレーパターンが存在し、30発目まで決まった軌道を描きます。VALORANTは初弾5〜6発が固定垂直上昇で、以降は左右ランダムなスプレー拡散（ブルーム）に移行します。Apex Legendsは武器ごとに固有の反動軌道が存在し、ジッターエイムやリコイル平滑化（スムージング）といった移動追従型の反動相殺が有効です。"
        }
      },
      {
        "@type": "Question",
        "name": "一般化運動プログラム（GMP理論）はスプレー制御の筋肉記憶をどう説明しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GMP理論（Schmidt & Lee, 2011）は、素早く繰り返す動作が毎回の視覚フィードバックではなく、学習済みの力と相対タイミングを持つオープンループのプログラムとして実行されると説明します。パターンが固定されていれば、着弾を見る前に引き下げを始められるのはこのためです。"
        }
      },
      {
        "@type": "Question",
        "name": "スプレートランスファー（複数敵への連続射撃）のコツは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "スプレートランスファーとは、最初の敵を倒した後に射撃ボタンを離さず、そのまま連射を継続しながら次の敵へフリックして倒す高度技術です。マガジンの何発目を撃っているかによって照準の反動オフセット（ズレ幅）が異なるため、その時点のスプレー位置を空間的に把握したまま次の敵の頭部に重ね合わせる必要があります。"
        }
      },
      {
        "@type": "Question",
        "name": "マウス感度（センシ）やマウスパッドの摩擦はリコイル制御にどう影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ローセンシ（低感度）は前腕全体を使った大きな引き下げ動作を要求するため、物理的なブレが少なく高い再現性と安定性が得られます。また、動摩擦の高いコントロール系マウスパッドは急激な行き過ぎ（オーバーシュート）を抑え、垂直引き下げ時の手ブレを安定させる効果があります。"
        }
      },
      {
        "@type": "Question",
        "name": "垂直リコイル引き下げで手首と前腕をどう使い分けるべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3〜7発の短いバースト射撃では指の屈曲と手首の下方スナップで素早く対応します。15〜30発のフルスプレーを行う場合は、手首を固定したまま肘を支点にして前腕全体をマウスパッド上で滑らかに後退（グライド）させることで、手首の可動域限界による引っ掛かりを防ぎます。"
        }
      },
      {
        "@type": "Question",
        "name": "スプレー拡散（ブルーム）とリコイルパターンの違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "リコイルパターンは銃身の跳ね上がりによる予測可能で再現性のある幾何学的軌道です。一方、スプレー拡散（ブルーム）は射撃継続やキャラクター移動によって弾が狙いからランダムに散る円錐状の不確定要素です。リコイルは手動で100%相殺できますが、拡散は射撃中断（リセット）でしか抑えられません。"
        }
      },
      {
        "@type": "Question",
        "name": "このリコイル練習はブラウザで無料ですか？何が必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい。無料で、Steamやアプリのダウンロード、アカウント登録は不要です。ChromeやEdgeなどのPCブラウザで動作し、マウスが必要です。開始するとポインターロックがかかり、Escを押すかロックが外れるとセッションは終了します。タッチ操作のみの端末ではプレイできません。"
        }
      },
      {
        "@type": "Question",
        "name": "なぜマガジン命中率が40%を下回るとコンボがリセットされるのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "無秩序にマガジンを撃ち尽くす「スプレーパニック」を防ぎ、ターゲットへ弾を集中させる射撃規律を養うためです。30発中の命中が40%未満だとコンボがリセットされます（タイムペナルティ設定時は残り時間も0.6秒減算）。"
        }
      },
      {
        "@type": "Question",
        "name": "このリコイルコントロール練習のパターンとルールは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AK-47スタイルの30発パターンを1種類使います（最初の約10発は垂直上昇、その後左右に揺れる）。特定ゲームの銃の反動をそのまま再現したものではありません。左クリック長押しで120msごと（毎分500発）に発射し、ボタンを離すとパターンは最初に戻ります。30発撃ち切ると1.2秒で自動リロードします。ヘッド100・胴体40・四肢20点にコンボとレベル倍率が掛かり、外すとコンボはリセット。持ち時間は45秒で、命中しても時間は増えません。1400点ごとにレベルが上がり、標的速度と反動倍率が上がります。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "リコイル制御をマスターする4つのステップ",
    "description": "実銃のスプレーパターン補正、垂直引き下げ速度、および水平カウンターステアリングを習熟するための手順。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "ゲーム感度と座標の整合性確保",
        "text": "/drillsページの共通マウス感度スライダー（1.00x = 30cm/360）を合わせ、開始を押してポインターロックを有効化します。",
        "url": "https://skilldrills.online/ja/drills/fps/recoil-control#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "継続射撃の開始",
        "text": "ターゲットに向かって左クリックを長押しし、フルオート射撃を開始します。",
        "url": "https://skilldrills.online/ja/drills/fps/recoil-control#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "垂直引き下げインパルスの実行",
        "text": "初弾8〜10発の間、銃身の上昇速度に合わせてマウスを滑らかに一定速度で真下に引き下げます。",
        "url": "https://skilldrills.online/ja/drills/fps/recoil-control#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "水平カウンターステアリングの適用",
        "text": "スプレーが左右に揺れ始めたら、銃が右に流れる時は左へ、左に流れる時は右へとマウスを微小に逆ハンドル操作します。",
        "url": "https://skilldrills.online/ja/drills/fps/recoil-control#step-4"
      }
    ]
  };

  const recoilGuideJa = {
    heading: "リコイル練習とFPS反動制御ガイド",
    intro: [
      "SkillDrillsのリコイル練習は、AK-47スタイル30発スプレーの垂直上昇と左右のブレをマウス操作で補正する無料のブラウザドリルです。左右に動く1つの標的に対して左クリック長押しで連射し（120ms間隔）、マガジン命中率が40%未満だとコンボがリセットされます。Counter-Strike 2、VALORANT、Apex Legendsのプレイヤーがリコイルコントロール練習のウォームアップとして使えます。",
      "高速なリコイル制御の運動学習理論は、リチャード・A・シュミットとティモシー・D・リー（Schmidt & Lee, 2011）の「一般化運動プログラム（GMP理論）」によって裏付けられています。パターンが固定されていれば、1発ごとに着弾を見て修正する（閉ループ制御）のではなく、学習済みの一定の力と相対タイミングを持つオープンループ運動として引き下げを始められます。",
      "射撃時の運動制御プロセスには、ロバート・S・ウッドワースの二成分照準モデル（Woodworth, 1899）およびデイビッド・E・マイヤーの最適サブムーブメント理論（Meyer et al., 1988）が適用されます。射撃開始直後の「初弾10発の直線的垂直引き下げ」というオープンループ運動と、その後に生じる水平スプレーの揺れ戻しや敵の回避移動に対する「微小な閉ループ視覚追従補正」がシームレスに結合して初めて完璧な集弾が達成されます。",
      "運動速度と精度のトレードオフはフィッツの法則（Fitts, 1954）およびシュミットのインパルス変動モデル（Schmidt et al., 1979）に従います。マウスを過度に強く素早く引っ張りすぎると筋肉の出力ばらつきが増大し、かえって集弾が乱れます。そのため強く引くより、一定の滑らかな速度で引き下げる練習が重要です。",
      "計測精度と表示ハードウェアについて：すべての射撃および命中判定はブラウザ内部のperformance.now()高分解能クロックを用いてデバイス内で完結処理されます。一般的な60Hzモニターでは約16.7msのフレーム更新間隔が生じますが、144Hz（約6.9ms）や240Hz（約4.1ms）の高リフレッシュレート環境ではスプレーの視覚的追従が滑らかになり、より精緻な微小修正が可能となります（Woods et al., 2015）。スコアや個人データが外部サーバーに送信されることはなく、プライバシーは完全に保護されます。"
    ],
    benchmarks: {
      title: "マガジン命中率の練習目安（SkillDrills基準）",
      headers: ["評価ティア", "マガジン命中率", "運動制御メカニズム", "実戦FPS（CS2 / Apex / VALORANT）での適応力"],
      rows: [
        ["ティア1 (最上位段階)", "78% – 90%+", "垂直の引き下げが一定で、30発を通して水平方向の補正も安定し、標的ゾーンから外れる弾がほとんどない。", "複数の敵への連続スプレー移行を重点的に練習する段階"],
        ["ティア2 (Competitive Pro)", "62% – 78%", "初弾10発のヘッドショット集弾が極めて精密。水平反動の切り替え時に素早く照準を再センタリングし、移動標的を安定捕捉。", "中距離のスプレーが安定し、スプレートランスファーの練習に進める段階。"],
        ["ティア3 (High-Skill FPS)", "48% – 62%", "初弾垂直引き下げは良好。12〜25発目の水平ブレ転換時にわずかなオーバーシュートや修正遅延が発生。", "近〜中距離のスプレーコントロールは実用的。遠距離では敵の肩口を超えて弾が数発抜ける傾向がある。"],
        ["ティア4 (Intermediate)", "35% – 48%", "引き下げ速度が一定せず、射撃開始7発目前後で迷いが生じて弾が頭上へ浮き上がる。", "スプレーデュエルで撃ち負けやすい。フルオートを避け、単発タップ撃ちや3発バースト射撃に依存しがちになる。"],
        ["ティア5 (Developing / Bloom Jitter)", "35% 未満", "腕や手首に過剰な力みが入り、垂直引き下げが乱雑。画面全体に弾が散乱してスプレーパニックに陥る。", "マガジン規律基準（40%）を維持できず、敵のヒットボックス外へ弾薬を大量に浪費してしまう状態。"]
      ],
      note: "命中率 = 命中弾数 ÷ 発射弾数。表はSkillDrills独自の練習目安で、研究上の基準値やユーザー統計、ゲームのランクとは対応しません。"
    },
    techniques: {
      title: "科学的エビデンスに基づくリコイル制御4大プロトコル",
      items: [
        {
          name: "初弾10発の直線的垂直引き下げインパルス",
          desc: "アサルトライフルの初弾8〜10発は水平ブレがほぼ発生せず、真上への直線的な跳ね上がりを示します。この一定速度の引き下げ運動をオープンループ運動サブルーチンとして脳に記憶させます（Schmidt & Lee, 2011）。運動は力や速度が急変するほどブレが大きくなるため（Schmidt et al., 1979）、一定の滑らかな速度を保つことが最重要です。",
          tips: "画面上で弾が跳ね上がってから引くのではなく、射撃ボタンを押した瞬間に同時に一定速度でマウスを引き下げ始めます。"
        },
        {
          name: "逆S字パターンの水平カウンターステアリング",
          desc: "10発を超えると銃器は左右へ弧を描く逆S字パターンへ移行します。武器が右に跳ねる時は左へ、左に跳ねる時は右へと、鏡像関係の逆ハンドル操作（カウンターステアリング）を行って集弾を中央に維持します（Meyer et al., 1988）。",
          tips: "急激な手首の振りは禁物です。微小で滑らかなハンドリングを意識することで弾の散らばりを防ぎます。"
        },
        {
          name: "前腕グライドと手首安定性のデカップリング",
          desc: "3〜7発の短いバースト射撃では指の屈曲と手首の角度調整で対応できますが、15〜30発のフルスプレーでは手首の可動限界に達します。手首の角度を固定し、肘を支点にして前腕全体をマウスパッド上で滑らかに後退（グライド）させる技術を確立します。",
          tips: "前腕が机の角やパッドの端に引っかからないよう、腕の配置スペースと十分なマウスパッド縦幅を確保してください。"
        },
        {
          name: "スプレーリセットとバースト射撃規律",
          desc: "15発を超えて標的から完全に照準が外れた場合、そのまま撃ち続けてもランダムな拡散（ブルーム）で弾が当たる確率は極めて低くなります。即座にトリガーを200〜300ms離して拡散をリセットし、再び初弾から撃ち直す判断規律が実戦での生存率を高めます。",
          tips: "当たることを祈ってマガジンを空にするよりも、冷静なスプレーリセットを行う方がキルタイムを短縮できます。"
        }
      ]
    },
    steps: [
      "/drillsページの共通マウス感度を合わせ、開始を押してポインターロックを有効化します。",
      "移動するターゲットに向けてマウス左ボタンを長押しし、フルオート射撃を開始します。",
      "初弾の垂直上昇を相殺するため滑らかにマウスを引き下げ、弾をヘッド・チェストゾーンに集中させます。",
      "スプレーが左右に展開したら水平カウンターステアリングを行い、30発全弾にわたって追従を維持します。",
      "終了後のリザルトで命中率、ヘッドショット数、最大コンボ、到達レベルを確認します。"
    ],
    audience: "CS2、VALORANT、Apex Legends、Rainbow Six Siegeなどでフルオートのリコイルコントロールをブラウザでさっと練習したいPCゲーマー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'schmidtLee2011', 'schmidt1979', 'woodworth1899'),
    related: [
      { href: "/ja/drills/fps/flick-shot-training", label: "フリックショット練習 (Flick Shot Trainer)" },
      { href: "/ja/drills/fps/pro-smooth-pursuit", label: "スムーズパシュート練習 (Smooth Pursuit Trainer)" },
      { href: "/ja/drills/fps/micro-correction-precision", label: "マイクロフリック練習 (Micro-Correction)" },
      { href: "/ja/drills/fps/anti-strafe-jitter-duel", label: "対ストレイフジッター練習 (Anti-Strafe Jitter)" },
      { href: "/ja/drills/fps/angle-hold-trainer", label: "置きエイム練習 (Angle Hold Trainer)" }
    ]
  };

  const copyJa = {
    h1Keyword: "リコイル練習",
    h1Suffix: " - FPS反動制御・スプレー",
    caption: "ブラウザで遊べる無料のリコイル練習です。反動パターンは固定なので、着弾を見てから直すのではなく、撃ち始めと同時に一定速度でマウスを引き下げるリコイルコントロール練習を繰り返しましょう。",
    statScore: "スコア",
    statTime: "残り時間",
    statAccuracy: "命中率",
    statBest: "自己ベスト",
    statAmmo: "残弾数",
    statReloading: "リロード中...",
    pausedTitle: "一時停止中",
    pausedPrompt: "画面をクリックしてカーソルを固定し、再開してください。",
    startTitle: "リコイル練習",
    startSubtitle: "AK-47スタイルのスプレーパターン & 反動補正 • エンドレス難易度進行",
    startButtonText: "トレーニング開始",
    getReady: "構えてください",
    statHeadshots: "ヘッドショット",
    statMaxCombo: "最大コンボ",
    statPeakLevel: "到達レベル",
    playAgainText: "もう一度挑戦",
    shareText: "スコアをシェア",
    exitText: "終了",
    bottomCaption: "射撃開始と同時にマウスを滑らかに引き下げ、銃身の上昇と左右のブレを相殺して標的に弾を集中させてください。",
    rulesTitle: "ドリルルールとスコア計算方式",
    rulesItems: [
      { num: "1", text: "ヘッドショット命中", highlight: "+100 PTS（時間ボーナスなし）", result: "×コンボ倍率" },
      { num: "2", text: "胴体・四肢ヒット", highlight: "+40 / +20 PTS", result: "コンボ継続" },
      { num: "3", text: "レベル進行", highlight: "+1レベル / 1400 PTS", result: "標的速度 & 反動倍率上昇" },
      { num: "4", text: "マガジン規律", highlight: "命中率40%未満ペナルティ", result: "コンボ喪失（ペナルティ設定時 -0.6秒）" }
    ],
    aboutTitle: "リコイル練習と反動制御について",
    whyMattersTitle: "なぜリコイル制御（反動補正）が重要なのか",
    whyMattersLead: "リコイル制御は反動パターンを脳に記憶させて実行するオープンループ運動プログラムです。運動は速度や力が増すほど出力のばらつきが大きくなるため（Schmidt et al., 1979）、急激に引っ張るのではなく一定の滑らかな速度で引き下げることが集弾率向上の鍵となります。",
    aboutIntro: [
      "リコイル練習は、フルオート射撃時に銃身の跳ね上がりに逆らってマウスを正確に動かし続けるための持続的な運動補正能力を養成します。単発タップ撃ちやフリック射撃が一瞬の微小修正であるのに対し、リコイル制御は銃器固有の反動パターンに応じた滑らかで持続的なマウス操作が求められます。",
      "初弾の垂直引き下げと後半の左右への揺れ戻し（カウンターステアリング）を運動野に刷り込むことで、Apex Legends、VALORANT、CS2で使うフルオートの反動補正を反復練習します。"
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "対象プレイヤー", text: "CS2、VALORANT、Apex Legends、CoDでスプレートランスファーや移動ターゲットへの追従集弾を向上させたいプレイヤー。" },
      { iconBg: "bg-red-600", title: "初弾5〜8発が勝負の鍵", text: "本ドリルのパターンは最初の約10発がほぼ垂直に上昇します。この区間を一定速度で引き下げることが最初の目標です。" },
      { iconBg: "bg-orange-600", title: "スプレー規律の維持", text: "無目的にマガジンを撃ち尽くす癖を防ぎます。適切なバースト射撃と追従精度を維持することで弾薬の浪費とペナルティを回避します。" }
    ],
    aboutSections: [
      {
        title: "反動補正がエイムに与える決定的影響",
        paragraphs: [
          "タクティカルシューターやTTKの長いFPSでは、最初の標的捕捉（初弾エイム）と持続的な反動補正の組み合わせが必須です。この2つを両立させることで、敵がストレイフ（左右移動）で回避行動を取っていても弾を当て続けやすくなります。",
          "滑らかな引き下げ動作は垂直の弾上がりを防ぎ、長時間の交戦でも水平方向の集弾散布界を極小に抑えます。"
        ]
      }
    ]
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* SoftwareApplication Schema */}
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

      <RecoilControlClient copy={copyJa} />

      <DrillGuide guide={recoilGuideJa} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
