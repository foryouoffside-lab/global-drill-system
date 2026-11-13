import GhostLinkClient from '@/app/drills/visual/tracking-accuracy/multiple-targets/GhostLinkClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Rastreamento de Múltiplos Objetos | MOT | SkillDrills",
  description: "Teste grátis de rastreamento de múltiplos objetos (MOT): memorize 3 bolas marcadas e siga-as por 60 s entre bolas iguais.",
  keywords: [
    "rastreamento de múltiplos objetos",
    "teste MOT",
    "MOT",
    "multiple object tracking",
    "acompanhar vários objetos",
    "atenção dividida"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Rastreamento de Múltiplos Objetos | MOT | SkillDrills",
    description: "Memorize 3 bolas marcadas e encontre-as de novo depois de 60 segundos de movimento. Teste MOT grátis no navegador, sem diagnóstico.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Rastreamento de Múltiplos Objetos | MOT | SkillDrills",
    description: "Rastreamento de múltiplos objetos: mantenha 3 alvos à vista por 60 s entre bolas iguais.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/multiple-targets'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Treinos", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Percepção Visual", "item": "https://skilldrills.online/pt/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Precisão de Rastreamento", "item": "https://skilldrills.online/pt/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "Rastreamento de Múltiplos Objetos", "item": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Teste de Rastreamento de Múltiplos Objetos (MOT)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "description": "Exercício no navegador: entre bolas iguais, 3 alvos acendem em verde por 2 segundos. Depois todas as bolas se movem por 60 segundos, quicando umas nas outras, e você aponta os 3 alvos. Não é teste diagnóstico de visão ou atenção.",
  "featureList": [
    "Começa com 8 bolas, 3 delas marcadas em verde por 2 segundos",
    "60 segundos de movimento: todas as bolas ficam iguais e quicam nas bordas e entre si",
    "Depois, escolha 3 bolas e confirme: 20 pontos por alvo certo (máx. 60), sem penalidade por erro",
    "Quanto maior seu recorde, mais bolas e um pouco mais de velocidade; dados só no armazenamento local"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste de Rastreamento de Múltiplos Objetos (MOT) | SkillDrills",
  "alternateName": "GhostLink MOT",
  "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets",
  "dateModified": "2026-11-12",
  "description": "Teste MOT grátis online: acompanhe 3 alvos por 60 segundos entre bolas iguais.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador moderno com suporte a HTML5 Canvas.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Acompanhar vários objetos em movimento com a atenção, atenção dividida"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Teste de Rastreamento de Múltiplos Objetos (MOT)",
  "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets",
  "description": "Memorize 3 bolas marcadas, acompanhe-as entre bolas iguais e encontre-as no final. Jogo MOT grátis.",
  "genre": [
    "Puzzle",
    "Visual Tracking"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como funciona o teste MOT",
  "dateModified": "2026-11-12",
  "description": "Os quatro passos de uma rodada.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Memorizar 3 alvos",
      "text": "Depois da contagem regressiva, as bolas aparecem e 3 delas acendem em verde por 2 segundos. Guarde as posições.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Acompanhar por 60 segundos",
      "text": "Em seguida todas as bolas ficam iguais e se movem por 60 segundos. Elas quicam nas bordas e umas nas outras.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Escolher 3 bolas",
      "text": "No fim, as bolas param. Clique (toque) nas 3 bolas que você acha que são os alvos. Um segundo clique desfaz a seleção.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Confirmar",
      "text": "Com 3 bolas escolhidas, toque em Confirmar: 20 pontos por alvo certo; escolha errada vale 0, sem penalidade.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/multiple-targets#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona o teste de rastreamento de múltiplos objetos (MOT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre bolas iguais, 3 alvos acendem em verde por 2 segundos. Depois todas as bolas se movem por 60 segundos; quando param, você escolhe os 3 alvos e confirma. Cada alvo certo vale 20 pontos, no máximo 60 por rodada."
      }
    },
    {
      "@type": "Question",
      "name": "Quantas bolas existem e o jogo fica mais difícil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você começa com 8 bolas. A cada 30 pontos de recorde entra mais uma bola, e a velocidade aumenta um pouco com o recorde. São sempre exatamente 3 alvos."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se eu escolher a bola errada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A bola errada vale 0 ponto, sem penalidade. Um novo clique desfaz a seleção, então você pode mudar de ideia até confirmar."
      }
    },
    {
      "@type": "Question",
      "name": "Quantos objetos uma pessoa consegue acompanhar ao mesmo tempo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Desde o primeiro experimento MOT de Pylyshyn & Storm (1988), relata-se que o limite para objetos iguais fica em torno de quatro e cai quando a velocidade aumenta (Cavanagh & Alvarez, 2005). Este teste usa sempre 3 alvos."
      }
    },
    {
      "@type": "Question",
      "name": "Devo olhar as bolas uma de cada vez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enquanto o olhar salta para uma bola, outro alvo pode cruzar com uma bola distratora e você perde a referência. Muita gente acha mais fácil olhar mais ou menos para o meio entre os alvos e manter os três à vista juntos."
      }
    },
    {
      "@type": "Question",
      "name": "Como não perder um alvo nas colisões?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As bolas quicam umas nas outras. Observe a direção logo antes do choque e para onde a bola vai depois: assim você confunde menos alvo e distrator."
      }
    },
    {
      "@type": "Question",
      "name": "Esse treino melhora meu desempenho em jogos ou esportes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma pontuação maior mostra que você ficou melhor nesta tarefa específica. A transferência para jogos, esportes ou direção não é garantida."
      }
    },
    {
      "@type": "Question",
      "name": "O teste é grátis e onde ficam meus dados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, é grátis e não precisa de conta. Os recordes ficam apenas no armazenamento local do seu navegador."
      }
    }
  ]
};

const guideData = {
  heading: "Rastreamento de múltiplos objetos: como funciona e dicas",
  intro: [
    "Neste teste de rastreamento de múltiplos objetos (MOT), você acompanha 3 alvos marcados entre bolas iguais e os aponta no final. A tarefa vem do experimento de Pylyshyn & Storm (1988), adaptado como um jogo simples no navegador.",
    "Depois da contagem regressiva, 3 bolas acendem em verde por 2 segundos; em seguida todas as bolas, agora iguais, se movem por 60 segundos quicando nas bordas e entre si. Quando param, você escolhe 3 bolas e confirma: 20 pontos por alvo certo (máx. 60), sem penalidade por erro. Quanto maior o recorde, mais bolas e mais velocidade.",
    "Acompanhar vários objetos ao mesmo tempo não depende de olhar rapidamente de um para outro, e sim de manter a atenção distribuída entre várias posições (Cavanagh & Alvarez, 2005). O teste é um jogo de treino."
  ],
  benchmarks: {
    "title": "Faixas de treino SkillDrills (só para este jogo)",
    "headers": [
      "Faixa",
      "Alvos certos",
      "Pontos",
      "Descrição"
    ],
    "rows": [
      [
        "Perfeito",
        "3 / 3",
        "60",
        "Os 3 alvos mantidos durante 60 segundos."
      ],
      [
        "Bom",
        "2 / 3",
        "40",
        "Um alvo perdido numa colisão."
      ],
      [
        "Em treino",
        "1 / 3",
        "20",
        "Várias trocas no caminho."
      ],
      [
        "Início",
        "0 / 3",
        "0",
        "Adaptação ao jogo."
      ]
    ],
    "note": "Faixas definidas pelo SkillDrills para este jogo, não são normas científicas nem avaliação de capacidade cognitiva."
  },
  techniques: {
    "title": "Dicas para não perder vários alvos",
    "items": [
      {
        "name": "Olhar para o centro",
        "desc": "Seguir só um alvo com os olhos faz perder os outros com facilidade.",
        "tips": "Olhe mais ou menos para o meio dos 3 alvos e mantenha os três à vista."
      },
      {
        "name": "Antecipar os quiques",
        "desc": "As bolas quicam nas bordas e entre si.",
        "tips": "Preste menos atenção ao ponto do choque e mais à direção seguinte."
      },
      {
        "name": "Recontar depois de um cruzamento",
        "desc": "O momento mais confuso é quando alvo e distrator se separam.",
        "tips": "Confira rapidamente se você ainda tem os 3 alvos."
      },
      {
        "name": "Escolher com calma",
        "desc": "Depois que as bolas param, não há limite de tempo.",
        "tips": "Na dúvida, desfaça a seleção com um clique e escolha de novo."
      }
    ]
  },
  steps: [
    "Toque em Iniciar e, depois da contagem regressiva, memorize as 3 bolas verdes.",
    "Acompanhe os 3 alvos com os olhos por 60 segundos.",
    "Quando as bolas pararem, clique nas 3 que você acha que são os alvos.",
    "Confirme e veja alvos certos e pontos (20 por alvo certo).",
    "Confira precisão e nota na tela de resultados e jogue de novo."
  ],
  audience: "Para quem quer experimentar acompanhar vários objetos em movimento ao mesmo tempo, como jogadores de FPS e MOBA, ou procura um jogo curto de concentração.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('pylyshyn1988', 'cavanagh2005'),
  related: [
    {
      "href": "/pt/drills/visual/tracking-accuracy/moving-target",
      "label": "Previsão de Trajetória de Alvo Móvel"
    },
    {
      "href": "/pt/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "Perseguição Suave com o Cursor"
    },
    {
      "href": "/pt/drills/visual-tracking/split-screen-tracking",
      "label": "Rastreamento em Tela Dividida"
    },
    {
      "href": "/pt/drills/visual/reaction-speed/go/no-go",
      "label": "Teste Go/No-Go"
    },
    {
      "href": "/pt/drills/visual-tracking/peripheral-ping-pursuit",
      "label": "Perseguição Periférica"
    }
  ]
};

export default function MultipleTargetsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <GhostLinkClient copy={{  "title": "Rastreamento de Múltiplos Objetos" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
