import AntiZigzagClient from '@/app/drills/fps/anti-zigzag-movement-trainer/AntiZigzagClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "ジグザグ移動の敵に当てる練習｜トラッキング | SkillDrills";
const DESCRIPTION = "ジグザグ移動の敵に当てるための無料トラッキング練習。不規則に向きを変えるターゲットに照準を重ねてHPを削り切ります。逃がすとコンボが切れ、レベルに上限はありません。マウスとポインターロックでブラウザから練習。";
const NAME = "ジグザグ移動の敵に当てる練習";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ジグザグ移動の敵に当てる",
    "ジグザグ移動 エイム",
    "不規則な動き 追従",
    "切り返し トラッキング",
    "リアクティブ トラッキング"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/anti-zigzag-movement-trainer",
    languages: getAlternateLanguages('/drills/fps/anti-zigzag-movement-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/ja/drills/fps/anti-zigzag-movement-trainer",
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

export default function AntiZigzagJaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSエイム練習", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/ja/drills/fps/anti-zigzag-movement-trainer" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": NAME,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
    "description": "不規則に向きを変えるターゲットに照準を重ねて倒す、無料ブラウザのジグザグ移動トラッキング練習。",
    "genre": "FPS Training / Reactive Tracking",
    "url": "https://skilldrills.online/ja/drills/fps/anti-zigzag-movement-trainer",
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
    "url": "https://skilldrills.online/ja/drills/fps/anti-zigzag-movement-trainer",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "description": "ブラウザで動く無料のトラッキング練習。ジグザグに向きを変えるターゲットを追いかけて倒します。"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/ja/drills/fps/anti-zigzag-movement-trainer",
    "description": "不規則に向きを変えるターゲットに照準を重ねて倒す、無料ブラウザのジグザグ移動トラッキング練習。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Reactive Tracking"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "このジグザグ移動の練習はどう遊ぶのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ターゲットが画面のランダムな位置に現れ、左右に走りながら上下にも少し揺れ、決まっていない間隔で向きを変えます。クリックは不要で、マウスで照準を重ねている間ターゲット上のHPバーが減ります。開始時の残り時間は45秒です。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲットはどうやって倒すのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "照準が重なっている間、HPが毎秒65ずつ減り、合計約1.5秒重ね続けると倒せます。倒すと25点×コンボ倍率のボーナスが入り、新しいターゲットが出現します。一度外れても削ったHPはそのまま残ります。"
        }
      },
      {
        "@type": "Question",
        "name": "スコアとコンボの仕組みは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ターゲットに重なっていると0.25秒ごとに10点×コンボ倍率×レベル補正が入り、残り時間が0.1秒増えます（上限60秒）。1秒連続で重ね続けるたびにコンボが1増え、倍率はコンボ50で最大3.0倍です。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲットが消えてしまうのはなぜ？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "各ターゲットには寿命があり、レベル1では約4.2秒、レベルが上がると約1.8秒まで短くなります。その間に倒せないとターゲットが逃げてコンボが0になり、新しいターゲットが出ます。1秒以上外れた場合もコンボはリセットされます。"
        }
      },
      {
        "@type": "Question",
        "name": "難易度はどう上がりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1400点ごとにレベルが1上がり、上限はありません。レベルが上がるほどターゲットは小さく速くなり、向きを変える間隔も約1.2秒から短くなっていきます。"
        }
      },
      {
        "@type": "Question",
        "name": "ジグザグ移動の敵に当てるコツは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "向きが変わるたびに大きくフリックすると反対側へ行き過ぎます。ターゲットの中心を見て、切り返した直後に短く減速し、新しい方向の速さに合わせて重ね直しましょう。Apex Legends、VALORANT、Overwatch 2などで不規則な動きの敵を追い切れない人の反復練習に使えます。効果には個人差があります。"
        }
      },
      {
        "@type": "Question",
        "name": "スマホやタッチ画面でも使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "いいえ。ポインターロックでマウスの移動量を読むため、マウスが必要です。タッチ専用端末ではスタートボタンの代わりに案内が表示されます。プレイ中はEscキーで終了できます。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "ジグザグ移動の敵に当てる練習の手順",
    "description": "向きを変えるターゲットに照準を重ねて倒すトラッキング練習の手順。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "感度を合わせる",
        "text": "ドリル一覧ページの共通マウス感度を普段の感覚に近づけます。"
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
        "name": "重ね続ける",
        "text": "向きを変えるターゲットに照準を重ね、HPバーを削ります。"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "寿命内に倒す",
        "text": "ターゲットが逃げる前に倒してボーナスを取り、コンボをつなぎます。"
      }
    ]
  };

  const jaGuide = {
    heading: "ジグザグ移動の敵に当てる練習ガイド",
    intro: [
      "SkillDrillsのこのドリルは、ジグザグ移動の敵に当てるためのトラッキング練習です。不規則に向きを変えるターゲットに照準を重ね、HPバーを削り切って倒します。クリックは不要で、重ねている時間がそのままダメージになります。",
      "ターゲットはランダムな位置に現れ、左右に走りながら上下にも揺れ、壁に当たると跳ね返ります。向きを変える間隔はレベル1で約1.2秒、レベルが上がるほど短くなります。ターゲットごとに寿命があり、長く外すと逃げられます。",
      "セッションは45秒から始まり、重ねている間は1秒あたり0.4秒ずつ延びます（上限60秒）。スコアとレベルに上限はありません。"
    ],
    techniques: {
      title: "ジグザグ移動を追うコツ",
      items: [
        {
          name: "切り返しでフリックしすぎない",
          desc: "向きが変わった瞬間に大きく振ると反対側へ行き過ぎ、HPを削る時間を失います。",
          tips: "切り返した直後に短く減速し、新しい方向の速さに合わせて重ね直してください。"
        },
        {
          name: "軌跡を見る",
          desc: "ターゲットの後ろに直近の移動経路が短い線で描かれます。",
          tips: "線の向きで、今どちらへ動いているかを確認しましょう。"
        },
        {
          name: "倒し切りを優先",
          desc: "寿命が切れるとコンボが消えるため、重ねる時間を集めて早めに倒すことが大切です。",
          tips: "HPが半分以下になるとバーの色が変わります。最後まで外さないようにしましょう。"
        },
        {
          name: "軽く握る",
          desc: "力が入ると上下左右の細かい修正がカクつきます。",
          tips: "指先と手首が自由に動く程度の力で握ってください。"
        }
      ]
    },
    steps: [
      "ドリル一覧ページで共通マウス感度を合わせます。",
      "スタートを押して全画面とポインターロックを有効にします。",
      "向きを変えるターゲットに照準を重ねてHPバーを削ります。",
      "寿命内に倒して25点×コンボのボーナスを取り、次のターゲットへ進みます。",
      "終了後、追従精度、最大コンボ、到達レベルを確認します。"
    ],
    audience: "Apex Legends、VALORANT、Overwatch 2などでジグザグ移動の敵に当てられないプレイヤー、ブラウザで無料でトラッキングを練習したいPCゲーマー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/ja/drills/fps/anti-strafe-jitter-duel", label: "レレレ撃ち対策" },
      { href: "/ja/drills/fps/flick-shot-training", label: "フリック エイム 練習" },
      { href: "/ja/drills/fps/180-degree-awareness", label: "180度 振り向き 練習" },
      { href: "/ja/drills/fps/instant-response", label: "FPS 反応速度 テスト" },
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
      <AntiZigzagClient
        copy={{
          h1Keyword: "ジグザグ移動の敵に当てる練習",
          h1Suffix: "｜トラッキング",
          statScore: "スコア",
          statTime: "残り時間",
          statAccuracy: "追従精度",
          statBestScore: "自己ベスト",
          startTitle: NAME,
          startSubtitle: "向きを変えるターゲットを追従 • エンドレスレベル",
          getReady: "準備",
          stageCaption: "不規則に向きを変えるターゲットに照準を重ね、HPバーを削ってください。クリックは不要です。",
          rulesTitle: "ドリル手順 & スコアリング",
          rulesItems: [
            { num: "1", text: "ターゲットに重ねる", highlight: "0.25秒ごとに10点 (+0.1秒)", result: "×コンボ倍率" },
            { num: "2", text: "ターゲット撃破", highlight: "25点 × コンボ ボーナス", result: "新ターゲット出現" },
            { num: "3", text: "レベル進行", highlight: "+1 レベル / 1400点", result: "小さく速いターゲット" },
            { num: "4", text: "寿命切れ / 1秒外れ", highlight: "ペナルティ", result: "コンボリセット" }
          ],
          aboutTitle: "ジグザグ移動トラッキングについて"
        }}
      />
      <DrillGuide guide={jaGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
