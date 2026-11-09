import AntiStrafeJitterClient from '@/app/drills/fps/anti-strafe-jitter-duel/AntiStrafeJitterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "レレレ撃ち対策｜左右に揺れる敵に当てる練習 | SkillDrills";
const DESCRIPTION = "無料のレレレ撃ち対策ドリル。左右にランダムで切り返すターゲットに照準を合わせ続けると0.25秒ごとにスコア、1秒維持ごとにコンボが加算され、レベルに上限はありません。マウスとポインターロックでブラウザからすぐ練習できます。";
const NAME = "レレレ撃ち対策 - 左右切り返しトラッキング";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "レレレ撃ち対策",
    "レレレ撃ち 当て方",
    "レレレ撃ち 練習",
    "レレレ撃ち 当たらない",
    "ADAD 対策",
    "切り返し トラッキング",
    "近距離 トラッキング",
    "リアクティブ トラッキング"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/anti-strafe-jitter-duel",
    languages: getAlternateLanguages('/drills/fps/anti-strafe-jitter-duel'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/ja/drills/fps/anti-strafe-jitter-duel",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AntiStrafeJitterJaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSエイム練習", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/ja/drills/fps/anti-strafe-jitter-duel" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": NAME,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "左右にランダムで切り返すターゲットに照準を合わせ続ける、無料ブラウザのレレレ撃ち対策トラッキングドリル。",
    "genre": "FPS Training / Anti-Strafe",
    "url": "https://skilldrills.online/ja/drills/fps/anti-strafe-jitter-duel",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": NAME,
    "url": "https://skilldrills.online/ja/drills/fps/anti-strafe-jitter-duel",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "ブラウザで動く無料のレレレ撃ち対策練習。近距離のADAD移動のように左右へ切り返すターゲットを追いかけます。"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/ja/drills/fps/anti-strafe-jitter-duel",
    "description": "左右にランダムで切り返すターゲットに照準を合わせ続ける、無料ブラウザのレレレ撃ち対策トラッキングドリル。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Reactive Tracking"],
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
        "name": "このレレレ撃ち対策ドリルはどう遊ぶのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "画面中央の高さでターゲットの球が左右だけに動き、ランダムな間隔で向きと速さを切り返します。クリックは不要で、マウスで照準をターゲットに重ねている間スコアが入ります。開始時の残り時間は45秒で、0になるとセッション終了です。"
        }
      },
      {
        "@type": "Question",
        "name": "スコアとコンボの仕組みは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "照準がターゲットに重なっていると0.25秒ごとに10点×コンボ倍率×レベル補正が入り、残り時間が0.1秒増えます（上限60秒）。1秒連続で合わせ続けるたびにコンボが1増え、倍率はコンボ3で1.1倍、コンボ50で最大3.0倍です。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲットから外れるとどうなりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1秒以上外れるとコンボが0に戻ります。ドリル設定でタイムペナルティをオンにしている場合は、このとき残り時間が0.6秒減ります。初期設定はオフです。"
        }
      },
      {
        "@type": "Question",
        "name": "難易度はどう上がりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1400点ごとにレベルが1上がり、上限はありません。レベルが上がるほどターゲットが小さく、左右移動が速く、切り返しの間隔が短くなります。コンボが高いときも少しずつ難しくなります。"
        }
      },
      {
        "@type": "Question",
        "name": "レレレ撃ちの当て方の練習になりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "近距離で相手がA・Dを交互に押して左右に揺れる動きを単純化したドリルです。切り返した直後に照準を合わせ直すトラッキングを繰り返せるので、VALORANT、Apex Legends、Overwatch 2などでレレレ撃ちが当たらないと感じる人の反復練習に使えます。上達の度合いには個人差があります。"
        }
      },
      {
        "@type": "Question",
        "name": "切り返しでエイムが置いていかれるときのコツは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "マウスを強く握りすぎず、照準ではなくターゲット自体を見てください。向きが変わった瞬間に大きくフリックで追うより、一瞬止めてからターゲットの速さに合わせて重ね直すほうが外れている時間を減らしやすくなります。"
        }
      },
      {
        "@type": "Question",
        "name": "スマホやタッチ画面でも使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "いいえ。マウスの移動量を読むポインターロック方式のため、マウスが必要です。タッチ専用端末ではスタートボタンの代わりに案内が表示されます。プレイ中はEscキーでドリルを終了できます。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "レレレ撃ち対策トラッキングの練習手順",
    "description": "左右に切り返すターゲットに照準を合わせ続けるトラッキング練習の手順。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "感度を合わせる",
        "text": "ドリル一覧ページの共通マウス感度を、普段の感覚に近づけます。"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "スタート",
        "text": "スタートを押すと全画面になり、カウントダウン後にポインターロックがかかります。"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "ターゲットを追う",
        "text": "左右に揺れるターゲットに照準を重ね続け、切り返したらすぐに合わせ直します。"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "結果を確認する",
        "text": "終了後に追従精度、外れていた時間、最大コンボ、到達レベルを確認します。"
      }
    ]
  };

  const antiStrafeGuide = {
    heading: "レレレ撃ち対策：左右に揺れる敵に当てる練習ガイド",
    intro: [
      "SkillDrillsのレレレ撃ち対策ドリルは、左右にランダムで切り返すターゲットに照準を合わせ続ける練習です。クリックはせず、マウスの動きだけでターゲットに重なっている時間を伸ばします。",
      "ターゲットは横方向だけに動き、決まっていない間隔で向きと速さを変えます。一部の切り返しはより速く飛び出すため、先読みよりも切り返した直後に合わせ直すリアクティブトラッキングが中心になります。",
      "セッションは45秒から始まり、ターゲットに重なっている間は1秒あたり0.4秒ずつ時間が延びます（上限60秒）。スコアとレベルに上限はありません。"
    ],
    techniques: {
      title: "レレレ撃ちの当て方のコツ",
      items: [
        {
          name: "軽く握る",
          desc: "マウスを強く握ると、切り返しで手首が固まり照準がカクつきやすくなります。",
          tips: "指先と手首が自由に動く程度の力で握り、長めのセッションの合間には手をほぐしてください。"
        },
        {
          name: "ターゲットを見る",
          desc: "照準ではなく球の中心を見ると、向きが変わる瞬間に早く気づけます。",
          tips: "ターゲットが赤くなったら照準が外れています。色の変化を合図にしてください。"
        },
        {
          name: "オーバーフリックを減らす",
          desc: "切り返しで大きくフリックすると反対側へ行き過ぎやすくなります。",
          tips: "切り返しを2回のフリックではなく、1回の減速と再加速としてつなげてみてください。"
        },
        {
          name: "1秒ルールを意識する",
          desc: "1秒連続で合わせるたびにコンボが増え、1秒以上外れるとコンボが消えます。",
          tips: "外れたら1秒以内に合わせ直すことを目標にしましょう。"
        }
      ]
    },
    steps: [
      "ドリル一覧ページで共通マウス感度を普段の感覚に合わせます。",
      "スタートを押して全画面とポインターロックを有効にします。",
      "左右に揺れるターゲットに照準を重ね続けます。",
      "切り返したら大きくフリックせず、短く減速してから合わせ直します。",
      "終了後、追従精度（%）、外れていた時間、最大コンボ、到達レベルで次の目標を決めます。"
    ],
    audience: "VALORANT、Apex Legends、Overwatch 2などで近距離のレレレ撃ちが当たらないプレイヤー、ブラウザで手軽にレレレ撃ちの練習をしたいPCゲーマー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/ja/drills/fps/anti-zigzag-movement-trainer", label: "ジグザグ移動の敵に当てる練習" },
      { href: "/ja/drills/fps/vertical-air-track", label: "空中垂直トラッキング" },
      { href: "/ja/drills/fps/pro-smooth-pursuit", label: "スムーズパースート・エイム練習" },
      { href: "/ja/drills/fps/flick-shot-training", label: "フリック エイム 練習" },
      { href: "/ja/drills/visual/reaction-speed/light-reaction", label: "反応速度測定テスト" }
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
      <AntiStrafeJitterClient
        copy={{
          h1Keyword: "レレレ撃ち対策",
          h1Suffix: "｜左右に揺れる敵に当てる練習",
          statScore: "スコア",
          statTime: "残り時間",
          statAccuracy: "追従精度",
          statBestScore: "自己ベスト",
          startTitle: NAME,
          startSubtitle: "左右切り返しターゲット追従 • エンドレスレベル",
          getReady: "準備",
          pausedTitle: "一時停止中",
          pausedSubtitle: "クリックして再開 — カーソルロックが再適用されます",
          stageCaption: "左右にランダムで切り返すターゲットに照準を重ね続けてください。クリックは不要です。",
          rulesTitle: "ドリル手順 & スコアリング",
          rulesItems: [
            { num: "1", text: "ターゲットに重ねる", highlight: "0.25秒ごとに10点 (+0.1秒)", result: "×コンボ倍率" },
            { num: "2", text: "1秒連続で維持", highlight: "コンボ +1", result: "最大 3.0×" },
            { num: "3", text: "レベル進行", highlight: "+1 レベル / 1400点", result: "小さく速いターゲット" },
            { num: "4", text: "1秒以上外れる", highlight: "コンボリセット", result: "ペナルティ設定時 -0.6秒" }
          ],
          aboutTitle: "レレレ撃ち対策とトラッキングについて",
          aboutHeading: "リアクティブトラッキングとは？"
        }}
      />
      <DrillGuide guide={antiStrafeGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
