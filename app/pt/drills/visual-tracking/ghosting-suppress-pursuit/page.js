import GhostingSuppressPursuitClient from '@/app/drills/visual-tracking/ghosting-suppress-pursuit/GhostingSuppressPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/ghosting-suppress-pursuit';
const name = "Rastreamento com Rastros Fantasma";
const title = `${name} | SkillDrills`;
const description = "Rastreamento com rastros fantasma: o alvo anda em linha reta e quica nas bordas, com rastro opcional de anéis claros. Não é teste de ghosting de monitor.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento com rastros fantasma","ignorar imagens fantasma","alvo com rastro","acompanhar alvo com os olhos","estabilidade do olhar","exercício para os olhos no navegador"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/ghosting-suppress-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'pt_BR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbItems('pt', url, 'visual-tracking', name, true),
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
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  inLanguage: 'pt',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Rastreamento com Rastros Fantasma (app web)",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Navegador atual com suporte a HTML5 Canvas",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'pt',
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
  inLanguage: 'pt',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Como fazer: Rastreamento com Rastros Fantasma",
  description: "Rastreamento com Rastros Fantasma em quatro passos simples.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "Fique em posição confortável",
    "text": "Sente a uma distância confortável da tela, com ombros e mão relaxados."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "Fique no alvo",
    "text": "Mantenha o olhar no centro do alvo sólido, não nos anéis atrás dele."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Acompanhe com os olhos",
    "text": "Siga o alvo com os olhos, não o cursor, e termine a sessão de 30 a 120 segundos."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "Mude um ajuste por vez",
    "text": "Depois aumente a velocidade ou ative Ocultar linha ou a velocidade aleatória, um de cada vez."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "O que é o rastreamento com rastros fantasma?",
    "a": "Um exercício no navegador: você acompanha com os olhos um alvo em linha reta sem se deixar puxar pelo rastro opcional. Duração (30 a 120 segundos), velocidade, tamanho e linha são ajustáveis. Não é teste de visão nem tratamento."
  },
  {
    "q": "É um teste de ghosting do monitor?",
    "a": "Não. O exercício não mede tempo de resposta nem ghosting da sua tela. Os anéis são desenhados de propósito pela página; o desempenho do monitor não é testado. Para isso, use um teste de monitor específico."
  },
  {
    "q": "Quando o rastro aparece?",
    "a": "Só quando você ativa o rastro nas configurações. Aí ficam pequenos anéis, cada vez mais claros, nas últimas posições. Sem ele, só o alvo se move."
  },
  {
    "q": "O exercício mede o movimento dos meus olhos?",
    "a": "Não. O navegador não vê o seu olhar; conhece apenas a posição desenhada do alvo e os ajustes. O cursor é só um apoio e não prova para onde você olha. Não há pontuação."
  },
  {
    "q": "O que muda com a velocidade aleatória?",
    "a": "A velocidade do alvo varia de forma irregular e fica mais difícil de prever. Ative depois que a velocidade base estiver confortável, e não junto com a linha oculta."
  },
  {
    "q": "Devo deixar a linha visível?",
    "a": "Com a linha visível fica mais fácil prever o movimento, o que ajuda no começo. Depois você pode ocultá-la para aumentar a dificuldade. Não existe escolha certa: compare apenas ajustes iguais."
  },
  {
    "q": "Com quais ajustes devo começar?",
    "a": "Sessões de 30 a 60 segundos, velocidade lenta (0,5 a 1,0×) e linha visível. A velocidade vai de 0,5 a 9,0× e o tamanho do alvo de 10 a 50 px; mude um ajuste por vez."
  },
  {
    "q": "O exercício melhora a visão ou a mira?",
    "a": "Não há garantia. É um exercício de acompanhar um alvo com os olhos; não promete melhorar a visão, tratar problemas oculares nem melhorar a mira em FPS. Em caso de desconforto ocular, procure um profissional."
  },
  {
    "q": "A tela e o ambiente influenciam?",
    "a": "Sim. Taxa de atualização, brilho, contraste, tamanho e distância da tela e o navegador mudam a aparência do alvo. Atrasos de entrada e de exibição também contam (Woods et al., 2015), então compare nas mesmas condições."
  },
  {
    "q": "Por quanto tempo devo praticar?",
    "a": "Em blocos curtos de 5 a 10 minutos, com pausas. Se os olhos cansarem ou ressecarem, pare, pisque e olhe para longe. Pare se houver dor, tontura, náusea ou dor de cabeça."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "Guia: Rastreamento com Rastros Fantasma",
  "intro": [
    "No rastreamento com rastros fantasma, o alvo anda em velocidade constante em linha reta e quica nas bordas. Se você ativar o rastro, a página desenha atrás dele anéis claros que vão sumindo (desligado por padrão). O objetivo é manter o olhar no alvo sólido sem seguir as cópias.",
    "O navegador conhece apenas a posição desenhada do alvo e seus ajustes, não para onde seus olhos estão olhando. Não há pontuação: só as sessões concluídas são contadas. O resultado é um registro de prática repetível, não uma medida clínica nem um teste de visão.",
    "Use uma distância confortável e compare sempre a mesma tela e o mesmo navegador. Taxa de atualização e dispositivo de entrada mudam a exibição (Woods et al., 2015). Pare se sentir dor, tontura, náusea ou visão embaçada persistente."
  ],
  "benchmarks": {
    "title": "Etapas de prática (referência)",
    "headers": [
      "Etapa",
      "Objetivo"
    ],
    "rows": [
      [
        "1",
        "Velocidade lenta, linha visível"
      ],
      [
        "2",
        "Manter a velocidade base com conforto"
      ],
      [
        "3",
        "Ficar no alvo com o rastro ligado"
      ],
      [
        "4",
        "Ocultar a linha"
      ],
      [
        "5",
        "Adicionar velocidade aleatória"
      ]
    ],
    "note": "Esta tabela é uma orientação de prática do SkillDrills. Não é norma de função visual, estatística de usuários nem percentil."
  },
  "techniques": {
    "title": "4 dicas de prática",
    "items": [
      {
        "name": "Olhe o alvo, não os anéis",
        "desc": "Não siga o rastro claro; mire o centro do alvo. Se o olhar escapar para o rastro, pisque uma vez e volte ao alvo.",
        "tips": "Se ficar desconfortável, desligue o rastro e reduza a velocidade."
      },
      {
        "name": "Olhe o alvo, não o cursor",
        "desc": "O ponteiro é só um apoio. Siga o alvo com os olhos e relaxe ombros e mão.",
        "tips": "Confira de vez em quando se a cabeça ou o pescoço estão girando junto."
      },
      {
        "name": "Uma dificuldade por vez",
        "desc": "Aumente separadamente a velocidade, a linha oculta e a velocidade aleatória. Se o conforto cair, volte ao ajuste anterior.",
        "tips": "Depois de cada mudança, compare de novo."
      },
      {
        "name": "Sessões curtas com pausas",
        "desc": "Pratique em blocos de 5 a 10 minutos, pisque e olhe para longe. Mais tempo não é necessariamente melhor.",
        "tips": "Dor, tontura ou náusea: pare na hora."
      }
    ]
  },
  "steps": [
    "Sente a uma distância confortável, com ombros e mão relaxados.",
    "Comece com 30 a 60 segundos, velocidade lenta e linha visível.",
    "Siga o alvo com os olhos, não o cursor.",
    "Depois aumente a velocidade ou um ajuste por vez."
  ],
  "audience": "Quem quer experimentar o exercício \"Rastreamento com Rastros Fantasma\" no navegador e praticar o acompanhamento de um alvo em movimento de forma leve."
},
  faqs,
  sources: pickSources('burr1980', 'martinezConde2004', 'rolfs2009', 'krauzlis2004', 'leigh2015', 'woods2015'),
  related: [
  {
    "href": "/pt/drills/visual-tracking/constant-slow-pursuit",
    "label": "Exercício de Perseguição Visual"
  },
  {
    "href": "/pt/drills/visual-tracking/directional-chaos-pursuit",
    "label": "Rastreamento com Mudanças de Direção"
  },
  {
    "href": "/pt/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "Alvo que Muda de Direção sem Aviso"
  },
  {
    "href": "/pt/drills/visual-tracking/infinity-pursuit",
    "label": "Exercício Ocular em Oito"
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
          subtitle: "Olhar o alvo, não o rastro",
          description: "Rastreamento com rastros fantasma: acompanhe um alvo com rastro opcional. Não é um teste de ghosting de monitor. O navegador não registra seu olhar e não há pontuação.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
