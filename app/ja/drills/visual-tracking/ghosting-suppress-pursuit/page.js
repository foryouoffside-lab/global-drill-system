import GhostingSuppressPursuitClient from '@/app/drills/visual-tracking/ghosting-suppress-pursuit/GhostingSuppressPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/ghosting-suppress-pursuit';
const name = "残像トレイルに惑わされず標的を追う練習";
const title = `${name} | SkillDrills`;
const description = "残像トレイルに惑わされず標的を追う練習を無料で。直線で動き端で跳ね返る標的に、オプションで薄い残像リングを表示し、本体だけを目で追い続けます。";

export const metadata = {
  title,
  description,
  keywords: ["残像 惑わされず 標的を追う","残像トレイル 目で追う","視線を保つ 練習","動く標的 目で追う","眼球運動 練習","ブラウザ 目の練習"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/ghosting-suppress-pursuit') },
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
  name: "残像トレイルに惑わされず標的を追う練習 Webアプリ",
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
  name: "残像トレイルに惑わされず標的を追う練習のやり方",
  description: "残像トレイルに惑わされず標的を追う練習を無理なく進める4つのステップです。",
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
    "name": "本体に視線を置く",
    "text": "標的の後ろに残るリングではなく、はっきりした本体の中心を見続けます。"
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
    "q": "残像トレイルに惑わされず標的を追う練習とは何ですか？",
    "a": "直線で動く標的を目で追い、オプションの残像リングに視線を引っぱられないようにするブラウザ練習です。時間(30〜120秒)、速度、標的の大きさ、ライン表示を調整できます。視力検査や治療ではありません。"
  },
  {
    "q": "モニターの残像(ゴースト)テストですか？",
    "a": "いいえ。モニターの応答速度やゴーストを調べるテストではありません。リングはこのページが意図的に描く演出で、画面の性能は測定しません。モニターを確認したい場合は専用のテストを使ってください。"
  },
  {
    "q": "残像リングはいつ表示されますか？",
    "a": "設定のトレイルをオンにしたときだけです。標的が通った位置に、だんだん薄くなる小さなリングが残ります。オフのままなら標的だけが動きます。"
  },
  {
    "q": "目の動きを直接測定しますか？",
    "a": "いいえ。ブラウザは視線の位置を知ることができず、標的を描いた位置、設定、ポインターの位置だけを扱います。ポインターは補助で、カーソル位置が視線を示すわけではありません。終了後はポインターと標的の距離だけをまとめます。"
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
  "heading": "残像トレイルに惑わされず標的を追う練習ガイド",
  "intro": [
    "残像トレイルに惑わされず標的を追う練習では、標的が一定の速さで直線に進み、画面の端で跳ね返ります。設定でトレイルをオンにすると、標的の後ろに薄く消えていくリングが描かれます(初期設定はオフ)。後ろのリングではなく、はっきりした本体に視線を置き続けることが目的です。",
    "ブラウザが分かるのは標的を描いた位置、設定、ポインターの位置だけで、目が実際にどこを見ているかは記録しません。終了後には、ポインターが標的上にあった時間と標的中心からの平均距離が表示されます（判定はありません）。結果は臨床的な追従能力や視力ではなく、同じ条件で繰り返せる練習記録として扱ってください。",
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
        "トレイルをオンにしても本体から離れない"
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
        "name": "リングではなく本体を見る",
        "desc": "薄いリングを追わず、標的の中心を見ます。視線がリングに引っぱられたら、一度まばたきして本体に戻します。",
        "tips": "つらいときはトレイルをオフにし、速度を下げます。"
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
  "audience": "残像トレイルに惑わされず標的を追う練習を気軽に試したい人、動く標的を目で追う感覚をゲーム感覚で練習したい人。"
},
  faqs,
  sources: pickSources('burr1980', 'martinezConde2004', 'rolfs2009', 'krauzlis2004', 'leigh2015', 'woods2015'),
  related: [
  {
    "href": "/ja/drills/visual-tracking/constant-slow-pursuit",
    "label": "ゆっくり動く点を目で追う練習"
  },
  {
    "href": "/ja/drills/visual-tracking/directional-chaos-pursuit",
    "label": "ランダムに揺れ動く標的を目で追う練習"
  },
  {
    "href": "/ja/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "急に向きを変える標的を目で追う練習"
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
      <GhostingSuppressPursuitClient
        copy={{
          title: name,
          subtitle: "薄い残像リングの中で本体を見続ける",
          description: "残像トレイルに惑わされず標的を追う練習です。モニターの残像テストではありません。ブラウザは視線を記録せず、ポインターと標的の距離だけを表示するため、結果は練習の記録として見てください。",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
