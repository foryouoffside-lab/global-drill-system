import DirectionalChaosPursuitClient from '@/app/drills/visual-tracking/directional-chaos-pursuit/DirectionalChaosPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/directional-chaos-pursuit';
const name = "ランダムに揺れ動く標的を目で追う練習";
const title = `${name} | SkillDrills`;
const description = "ランダムに揺れ動く標的を目で追う練習をブラウザで無料で。毎フレーム少しずつ向きと速さが変わり、画面端で跳ね返る標的を目で追い続けます。";

export const metadata = {
  title,
  description,
  keywords: ["ランダムに動く標的 目で追う","不規則な動き 目で追う 練習","視線追従 練習","眼球運動 練習","予測できない動き 追従","ブラウザ 目の練習"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/directional-chaos-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ja_JP', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbItems('ja', url, 'visual-tracking', name, true),
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ja' },
  inLanguage: 'ja',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "ランダムに揺れ動く標的を目で追う練習 Webアプリ",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "HTML5 Canvas対応の最新ブラウザ",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'ja',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name,
  url,
  description,
  genre: ['Visual training', 'Eye tracking exercise'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'ja',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "ランダムに揺れ動く標的を目で追う練習のやり方",
  description: "ランダムに揺れ動く標的を目で追う練習を無理なく進める4つのステップです。",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "楽な姿勢を作る",
    "text": "画面から楽な距離に座り、肩と手の力を抜きます。"
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "動きの変化を見る",
    "text": "標的の向きが変わったら、新しい方向に視線を合わせ直します。"
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "目で追い続ける",
    "text": "カーソルではなく標的を目で追い、30〜120秒のセッションを最後まで続けます。"
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "設定を一つずつ変える",
    "text": "慣れたら速度を上げるか、ライン非表示・ランダム速度を一つずつ追加します。"
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "ランダムに揺れ動く標的を目で追う練習とは何ですか？",
    "a": "向きと速さがランダムに少しずつ変わる標的を目で追うブラウザ練習です。時間(30〜120秒)、速度、標的の大きさ、ライン表示を調整できます。視力検査や治療ではなく練習用のツールです。"
  },
  {
    "q": "標的はどのように動きますか？",
    "a": "毎フレーム小さなランダムな加速が加わり、上限速度の範囲で向きと速さが変わります。画面の端に当たると跳ね返り、少し速くなります。カーソルの位置には反応しません。"
  },
  {
    "q": "目の動きを直接測定しますか？",
    "a": "いいえ。ブラウザは視線の位置を知ることができず、標的を描いた位置と設定だけを扱います。ポインターは補助で、カーソル位置が視線を示すわけではありません。終了画面にはポインターと標的の距離だけが表示され、判定はありません。"
  },
  {
    "q": "ランダム速度をオンにすると何が変わりますか？",
    "a": "標的の速さが時間とともに不規則に変わり、先読みしにくくなります。基準速度で楽に追えるようになってから、ライン非表示とは別々に追加してください。"
  },
  {
    "q": "ラインは表示したほうがよいですか？",
    "a": "ラインがあると標的の動きを予想しやすく、最初は助けになります。慣れたら非表示にして難しくできます。どちらが正解ということはないので、同じ設定どうしで比べてください。"
  },
  {
    "q": "最初はどんな設定で始めればよいですか？",
    "a": "30〜60秒の短いセッション、遅い速度(0.5〜1.0倍)、ライン表示から始めます。速度は0.5〜9.0倍、標的の大きさは10〜50pxで調整でき、慣れたら一つずつ変えます。"
  },
  {
    "q": "この練習で視力やゲームの腕が上がりますか？",
    "a": "保証はできません。これは動く標的を目で追う練習で、視力の改善、目の病気の治療、FPSのエイム向上を約束するものではありません。目の不調が気になる場合は専門家に相談してください。"
  },
  {
    "q": "画面や環境は結果に影響しますか？",
    "a": "リフレッシュレート、明るさ、コントラスト、画面の大きさと距離、ブラウザで標的の見え方が変わります。入力機器や表示の遅延も影響するので(Woods et al., 2015)、同じ環境で比べてください。"
  },
  {
    "q": "どのくらい練習すればよいですか？",
    "a": "5〜10分ほどの短いブロックで行い、休憩を入れます。目が疲れたり乾いたりしたら止めて遠くを見てまばたきします。痛み、めまい、吐き気、頭痛があれば中止してください。"
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "ランダムに揺れ動く標的を目で追う練習ガイド",
  "intro": [
    "ランダムに揺れ動く標的を目で追う練習では、標的の速度が毎フレーム少しずつランダムに変わり、画面の端で跳ね返ります。決まった軌道がないため先読みしにくく、標的が先に進んだら素早く視線を戻して追い続ける場面をくり返し体験できます(Krauzlis, 2004)。",
    "ブラウザが分かるのは標的を描いた位置と設定だけで、目が実際にどこを見ているかは記録しません。表示されるのはポインターと標的の距離と、完了したセッション数だけです。結果は臨床的な追従能力や視力ではなく、同じ条件で繰り返せる練習記録として扱ってください。",
    "楽な距離と姿勢で、同じ画面とブラウザで比べてください。リフレッシュレートや入力機器も見え方に影響します(Woods et al., 2015)。痛み、めまい、吐き気、続くぼやけなどがあれば中止してください。"
  ],
  "benchmarks": {
    "title": "練習段階の目安",
    "headers": [
      "段階",
      "練習の目標"
    ],
    "rows": [
      [
        "1",
        "遅い速度・ライン表示"
      ],
      [
        "2",
        "基準速度で楽に追える"
      ],
      [
        "3",
        "向きが変わっても標的から離れない"
      ],
      [
        "4",
        "ライン非表示を追加"
      ],
      [
        "5",
        "ランダム速度を追加"
      ]
    ],
    "note": "この表はSkillDrillsの練習段階の目安です。視機能検査の基準、利用者統計、パーセンタイルではありません。"
  },
  "techniques": {
    "title": "練習のコツ4つ",
    "items": [
      {
        "name": "先読みしすぎない",
        "desc": "軌道は毎回違うので、未来の位置を当てようとせず、今の標的を中心で捉え続けます。離れたら一度で戻します。",
        "tips": "つらいときは速度を下げ、ラインを表示した状態に戻します。"
      },
      {
        "name": "カーソルではなく標的を見る",
        "desc": "ポインターは補助にすぎません。カーソルではなく標的を目で追い、肩と手の力を抜きます。",
        "tips": "首や頭が一緒に動いていないかときどき確認します。"
      },
      {
        "name": "一度に一つだけ難しくする",
        "desc": "速度、ライン非表示、ランダム速度は別々に上げます。快適さが崩れたら前の設定に戻します。",
        "tips": "設定を変えたら新しい記録として比べます。"
      },
      {
        "name": "短く区切って休む",
        "desc": "5〜10分を目安にし、まばたきして遠くを見て休みます。長くやるほど良いわけではありません。",
        "tips": "痛み、めまい、吐き気があればすぐ中止します。"
      }
    ]
  },
  "steps": [
    "画面から楽な距離に座り、肩と手の力を抜きます。",
    "30〜60秒、遅い速度、ライン表示で始めます。",
    "カーソルではなく標的を目で追います。",
    "慣れたら速度を上げるか、設定を一つずつ追加します。"
  ],
  "audience": "ランダムに揺れ動く標的を目で追う練習を気軽に試したい人、動く標的を目で追う感覚をゲーム感覚で練習したい人。"
},
  faqs,
  sources: pickSources('bahill1980', 'barnes2008', 'krauzlis2004', 'robinson1965', 'rashbass1961', 'woods2015'),
  related: [
  {
    "href": "/ja/drills/visual-tracking/constant-slow-pursuit",
    "label": "ゆっくり動く点を目で追う練習"
  },
  {
    "href": "/ja/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "急に向きを変える標的を目で追う練習"
  },
  {
    "href": "/ja/drills/visual-tracking/ghosting-suppress-pursuit",
    "label": "残像トレイルに惑わされず標的を追う練習"
  },
  {
    "href": "/ja/drills/visual-tracking/infinity-pursuit",
    "label": "8の字眼球運動トレーニング"
  }
],
};

export default function LocalizedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DirectionalChaosPursuitClient
        copy={{
          title: name,
          subtitle: "予測できない動きへの視線の再捕捉",
          description: "ランダムに揺れ動く標的を目で追う練習です。ブラウザは視線を記録せず、測るのはポインターと標的の距離だけなので、結果は医療的な検査ではなく練習の記録として見てください。",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
