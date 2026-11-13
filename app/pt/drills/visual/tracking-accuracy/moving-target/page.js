import KineticInterceptClient from '@/app/drills/visual/tracking-accuracy/moving-target/KineticInterceptClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Previsão de Trajetória | Interceptar Alvo Móvel | SkillDrills",
  description: "Previsão de trajetória de alvo móvel no navegador: a esfera quica nas bordas e salta para outro lugar. Acerto +2 s, erro -1 s. Grátis, não é exame de vista.",
  keywords: [
    "previsão de trajetória de alvo móvel",
    "interceptar alvo móvel",
    "alvo que quica",
    "clicar em alvo em movimento",
    "antecipar trajetória",
    "jogo de alvo móvel"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Previsão de Trajetória | Interceptar Alvo Móvel | SkillDrills",
    description: "Leia a trajetória de uma esfera que quica e clique nela antes que ela salte para outro lugar. Treino grátis no navegador.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Previsão de Trajetória | Interceptar Alvo Móvel | SkillDrills",
    description: "Previsão de trajetória de alvo móvel: antecipe o rebote e clique na hora certa. Grátis no navegador.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/moving-target'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Catálogo de Treinos", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Treino Visual", "item": "https://skilldrills.online/pt/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Precisão de Rastreamento", "item": "https://skilldrills.online/pt/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "Interceptar Alvo Móvel", "item": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Previsão de Trajetória de Alvo Móvel",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "description": "Exercício no navegador: uma esfera anda em linha reta, quica nas bordas e salta para outra posição depois de um curto prazo. O objetivo é clicar nela antes disso. Não é teste de visão nem de movimentos oculares.",
  "featureList": [
    "Alvo que quica nas bordas e salta para uma nova posição quando o anel termina",
    "Acerto: 150 pts × combo × bônus de nível e +2 s (no máximo 60 s restantes)",
    "Quanto maior o nível, mais rápido e menor o alvo, e menor o prazo até o salto",
    "Recordes ficam apenas no armazenamento local do seu navegador"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Previsão de Trajetória de Alvo Móvel | SkillDrills",
  "alternateName": "Moving Target Pro",
  "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target",
  "dateModified": "2026-11-12",
  "description": "Jogo grátis no navegador: preveja a trajetória do alvo móvel e clique antes que ele salte.",
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
  "teaches": "Acompanhar um alvo móvel com os olhos, prever a trajetória, precisão do clique com o mouse"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Previsão de Trajetória de Alvo Móvel",
  "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target",
  "description": "Clique numa esfera que quica antes que ela salte para outro lugar. Jogo grátis de previsão de trajetória de alvo móvel.",
  "genre": [
    "Action",
    "Aim Trainer",
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
  "name": "Como jogar a Previsão de Trajetória de Alvo Móvel",
  "dateModified": "2026-11-12",
  "description": "Quatro passos para começar e aumentar sua pontuação.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Acompanhar a esfera com o olhar e o cursor",
      "text": "Depois da contagem regressiva aparece uma esfera laranja que anda em linha reta e quica nas bordas. Mantenha o cursor perto dela.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Observar o anel",
      "text": "O anel e os segundos ao redor do alvo mostram quando ele vai saltar para outro lugar. No começo é cerca de 1 segundo; o prazo diminui com o nível e o combo.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Clicar no alvo",
      "text": "Um clique (ou toque) na esfera conta como acerto: 150 pts × combo × bônus de nível e +2 s de tempo (máximo 60 s).",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Evitar cliques errados",
      "text": "Clicar fora custa 1 segundo e zera o combo. Com 0 segundos a rodada termina.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/moving-target#step-4"
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
      "name": "Como funciona o treino de previsão de trajetória de alvo móvel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma esfera anda em linha reta pela área de jogo e quica nas bordas. Depois de um curto prazo (cerca de 1 segundo no início), ela salta para outro lugar. Você precisa clicar nela antes. A rodada começa com 45 segundos, cada acerto soma +2 s (máximo 60 s) e ela termina em 0."
      }
    },
    {
      "@type": "Question",
      "name": "Como a pontuação é calculada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada acerto vale 150 pontos multiplicados pelo combo e por um bônus de nível. O nível sobe continuamente com a pontuação: o alvo fica mais rápido e menor e salta mais cedo."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se eu errar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Um clique fora do alvo tira 1 segundo e zera o combo. Se a opção \"Target Timeouts\" estiver ativa nas configurações (padrão), um alvo que salta sem ser acertado também conta como erro e custa 1 segundo."
      }
    },
    {
      "@type": "Question",
      "name": "Por que mirar um pouco à frente do alvo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre ver, decidir e clicar passa um instante em que a esfera continua andando. Quanto mais rápida ela estiver, mais vale mirar um pouco à frente, no sentido do movimento."
      }
    },
    {
      "@type": "Question",
      "name": "Como prever a trajetória ajuda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A esfera só muda de direção ao bater numa borda, como uma bola que quica. Se você percebe o rebote cedo, já pode levar o cursor para onde ela vai em seguida."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre perseguição ocular e sacadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na perseguição suave, os olhos deslizam junto com um objeto em movimento; a sacada é um salto rápido do olhar para um novo ponto. Os dois são controlados separadamente (Rashbass, 1961). Aqui você usa os dois: acompanha a esfera enquanto ela anda e a procura de novo quando ela salta."
      }
    },
    {
      "@type": "Question",
      "name": "Esse treino melhora a minha visão?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma pontuação maior mostra que você melhorou nesta tarefa específica. Não há efeito comprovado na acuidade visual, no desempenho esportivo ou em outras tarefas."
      }
    },
    {
      "@type": "Question",
      "name": "É grátis e onde meus resultados ficam salvos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, é grátis e não precisa de conta. Recordes e combos ficam apenas no armazenamento local do seu navegador."
      }
    }
  ]
};

const guideData = {
  heading: "Previsão de trajetória de alvo móvel: como funciona",
  intro: [
    "Este é um treino de previsão de trajetória de alvo móvel: uma esfera anda em linha reta, quica nas bordas e salta para outro lugar depois de um curto prazo. Você precisa clicar nela antes disso, antecipando para onde ela vai.",
    "A rodada começa com 45 segundos. Cada acerto vale 150 pontos × combo × bônus de nível e soma +2 s (máximo 60 s); um clique errado custa 1 segundo e o combo. Conforme a pontuação sobe, a esfera fica mais rápida e menor, e o prazo até o salto diminui a partir de cerca de 1 segundo.",
    "Os olhos conseguem seguir suavemente um objeto lento; quando ele é rápido demais, o olhar fica para trás e recupera com pequenos saltos (Krauzlis, 2004). O exercício transforma essa situação numa tarefa simples de clique. Ele não mede a acuidade visual nem os movimentos dos olhos."
  ],
  benchmarks: {
    "title": "Faixas de treino SkillDrills (só para este exercício)",
    "headers": [
      "Faixa",
      "Prazo até o salto",
      "Pontos e combo",
      "Perfil de jogo"
    ],
    "rows": [
      [
        "Faixa 1",
        "< 0,25 s",
        "16.000+ pts | Combo 25x+",
        "Alvos muito rápidos e pequenos acertados em sequência."
      ],
      [
        "Faixa 2",
        "0,25 – 0,45 s",
        "10.500 – 15.999 pts | Combo 16x+",
        "Poucos erros mesmo com alvos rápidos."
      ],
      [
        "Faixa 3",
        "0,46 – 0,70 s",
        "6.000 – 10.499 pts | Combo 9x+",
        "Retas seguras, alguns erros logo depois do rebote."
      ],
      [
        "Faixa 4",
        "0,71 – 1,00 s",
        "2.500 – 5.999 pts | Combo 4x+",
        "O cursor costuma correr atrás da esfera."
      ],
      [
        "Faixa 5",
        "> 1,00 s",
        "< 2.500 pts | Combo < 4x",
        "Fase de adaptação ao exercício."
      ]
    ],
    "note": "Faixas definidas pelo SkillDrills para treino, não são normas científicas nem avaliação da visão. Monitor e mouse influenciam o resultado."
  },
  techniques: {
    "title": "Dicas para interceptar o alvo móvel",
    "items": [
      {
        "name": "Mirar um pouco à frente",
        "desc": "Enquanto você clica, a esfera continua andando. Clicar na posição atual costuma errar por trás.",
        "tips": "Clique um pouco à frente, no sentido do movimento."
      },
      {
        "name": "Antecipar o rebote",
        "desc": "A esfera quica nas bordas como uma bola.",
        "tips": "Não a siga até a borda: leve o cursor antes para a direção do rebote."
      },
      {
        "name": "Mover o cursor junto",
        "desc": "Esperar com o cursor parado faz perder o momento nos níveis altos.",
        "tips": "Deslize o olhar e o cursor junto com a esfera."
      },
      {
        "name": "Não clicar sem parar",
        "desc": "Cada clique errado custa 1 segundo e o combo.",
        "tips": "Clique só quando o cursor estiver claramente sobre a esfera."
      }
    ]
  },
  steps: [
    "Clique em \"Iniciar\" para começar a rodada de 45 segundos.",
    "Acompanhe a esfera com o olhar e o cursor.",
    "Clique nela antes que o anel termine, mirando um pouco à frente do movimento.",
    "Acerto: +150 pts × multiplicador e +2 s; erro: -1 s e combo zerado.",
    "No fim, veja pontuação, acertos, precisão e combo máximo."
  ],
  audience: "Para quem quer treinar a interceptação de alvos móveis no navegador, como jogadores de FPS, ou procura um exercício visual curto.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('rashbass1961', 'krauzlis2004'),
  related: [
    {
      "href": "/pt/drills/visual/tracking-accuracy/multiple-targets",
      "label": "Rastreamento de Múltiplos Objetos"
    },
    {
      "href": "/pt/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "Perseguição Suave com o Cursor"
    },
    {
      "href": "/pt/drills/visual/reaction-speed/light-reaction",
      "label": "Teste de Reação Luminosa"
    },
    {
      "href": "/pt/drills/visual/reaction-speed/go/no-go",
      "label": "Teste Go / No-Go de Inibição"
    },
    {
      "href": "/pt/drills/visual/depth-perception/distance-judgment",
      "label": "Percepção de Profundidade e Distância"
    },
    {
      "href": "/pt/drills/visual/visual-recognition/entropic-grid",
      "label": "Busca em Grade Entrópica"
    }
  ]
};

export default function KineticInterceptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <KineticInterceptClient copy={{  "title": "Previsão de Trajetória: Interceptar Alvo Móvel" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
