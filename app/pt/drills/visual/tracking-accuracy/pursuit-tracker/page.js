import AutoPursuitClient from '@/app/drills/visual/tracking-accuracy/pursuit-tracker/AutoPursuitClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Perseguição Suave com o Cursor | SkillDrills",
  description: "Perseguição suave com o cursor: mantenha o mouse por 45 s sobre um ponto que muda de velocidade e direção, +5 pts por segundo. Não é exame de vista.",
  keywords: [
    "perseguição suave com o cursor",
    "manter o cursor no alvo",
    "seguir ponto em movimento",
    "precisão de rastreamento do mouse",
    "smooth pursuit",
    "jogo de seguir o alvo"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Perseguição Suave com o Cursor | SkillDrills",
    description: "Mantenha o cursor sobre um ponto que muda de velocidade e direção. Só o cursor é avaliado, não seus olhos. Grátis no navegador.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Perseguição Suave com o Cursor | SkillDrills",
    description: "Perseguição suave com o cursor: siga um ponto em movimento por 45 segundos sem perdê-lo.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/pursuit-tracker'),
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
    { "@type": "ListItem", "position": 5, "name": "Perseguição Suave com o Cursor", "item": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Perseguição Suave com o Cursor",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "description": "Exercício de 45 segundos no navegador: mantenha o cursor (ou o dedo) sobre um ponto que muda de velocidade e direção. Só a posição do cursor é avaliada; não há medição do olhar por câmera.",
  "featureList": [
    "Rodada fixa de 45 segundos; o ponto muda de velocidade e direção ao acaso e quica nas bordas",
    "Cerca de 1 segundo de cursor sobre o ponto (área de contato generosa): +5 pontos e sequência +1",
    "Mais de 2 segundos fora só zera a sequência, sem perda de pontos ou tempo",
    "Quanto maior a pontuação, menor e mais rápido o ponto; dados só no armazenamento local"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Perseguição Suave com o Cursor | SkillDrills",
  "alternateName": "Pursuit Tracker Pro",
  "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker",
  "dateModified": "2026-11-12",
  "description": "Exercício grátis de perseguição suave com o cursor: mantenha um ponto em movimento sob o mouse por 45 segundos.",
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
  "teaches": "Acompanhar um alvo em movimento com o olhar e manter o cursor sobre ele"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Perseguição Suave com o Cursor",
  "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker",
  "description": "Mantenha o cursor sobre um ponto que muda de velocidade e direção. Jogo grátis de perseguição suave.",
  "genre": [
    "Action",
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
  "name": "Como funciona a perseguição suave com o cursor",
  "dateModified": "2026-11-12",
  "description": "Os quatro passos da rodada de 45 segundos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Colocar o cursor no ponto",
      "text": "Depois da contagem regressiva aparece um ponto laranja que se move. Com o cursor (ou o dedo na tela de toque) sobre ele, o ponto fica verde.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Segurar cerca de 1 segundo",
      "text": "Quando o anel em volta do ponto enche (cerca de 1 segundo): +5 pontos e sequência +1. Se escapar, o anel recomeça.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Acompanhar as mudanças de direção",
      "text": "O ponto muda de velocidade e direção sem aviso e quica nas bordas. Fica mais rápido e menor com a pontuação e a sequência.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Ir até o fim",
      "text": "Mais de 2 segundos fora só zera a sequência; pontos e tempo continuam. A rodada termina após 45 segundos.",
      "url": "https://skilldrills.online/pt/drills/visual/tracking-accuracy/pursuit-tracker#step-4"
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
      "name": "Como funciona a perseguição suave com o cursor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você mantém o cursor sobre um ponto em movimento por 45 segundos. Cada segundo (aprox.) de contato contínuo vale 5 pontos. Só a posição do cursor conta: nenhuma câmera ou eye tracker mede seus olhos."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se eu perder o ponto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O anel de um segundo recomeça, e depois de mais de 2 segundos fora a sequência volta a 0. Nenhum ponto ou tempo é descontado."
      }
    },
    {
      "@type": "Question",
      "name": "Fica mais difícil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quanto maior a pontuação, mais o ponto encolhe (até metade do tamanho) e maior sua velocidade máxima. Uma sequência longa também o deixa mais rápido."
      }
    },
    {
      "@type": "Question",
      "name": "A taxa de atualização do monitor influencia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. O exercício conta quadros: a 60 Hz os pontos entram mais ou menos a cada segundo; em monitores mais rápidos os pontos vêm antes e o ponto se move mais rápido. Pontuações de aparelhos diferentes não são comparáveis."
      }
    },
    {
      "@type": "Question",
      "name": "O que é perseguição ocular suave (smooth pursuit)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É o movimento dos olhos que desliza junto com um objeto para mantê-lo no centro da visão. Se o objeto é rápido demais, o olho fica para trás e o alcança com pequenas sacadas (Krauzlis, 2004). O exercício reproduz isso com o cursor, sem medir os olhos."
      }
    },
    {
      "@type": "Question",
      "name": "Esse treino melhora minha visão ou minha mira?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma pontuação maior mostra que você melhorou nesta tarefa. Não há garantia de melhora na visão, em jogos ou esportes."
      }
    },
    {
      "@type": "Question",
      "name": "É grátis e onde ficam meus resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, grátis e sem conta. Os recordes ficam apenas no armazenamento local do seu navegador."
      }
    }
  ]
};

const guideData = {
  heading: "Perseguição suave com o cursor: mantenha o alvo sob o mouse",
  intro: [
    "Na perseguição suave com o cursor você acompanha com o olhar um ponto em movimento durante 45 segundos e mantém o cursor sobre ele. Só conta o tempo em que o cursor fica sobre o ponto; seus olhos não são filmados.",
    "Cada segundo, aproximadamente, de contato contínuo (área generosa) vale +5 pontos e aumenta a sequência. O ponto muda de velocidade e direção sem aviso, quica nas bordas e fica menor e mais rápido conforme a pontuação sobe. Mais de 2 segundos fora só zera a sequência.",
    "Os olhos acompanham suavemente um objeto lento; se ele é rápido demais, o olhar fica para trás e recupera com pequenos saltos (Krauzlis, 2004). O exercício transforma isso numa tarefa simples de cursor."
  ],
  benchmarks: {
    "title": "Faixas de treino SkillDrills (só para este exercício, 60 Hz)",
    "headers": [
      "Faixa",
      "Pontos em 45 s",
      "Descrição"
    ],
    "rows": [
      [
        "Alta",
        "180+",
        "O ponto é mantido quase o tempo todo."
      ],
      [
        "Estável",
        "120 – 179",
        "Escapa só logo depois de mudanças de direção."
      ],
      [
        "Em treino",
        "60 – 119",
        "Interrupções frequentes nas fases rápidas."
      ],
      [
        "Início",
        "< 60",
        "Adaptação ao exercício."
      ]
    ],
    "note": "Faixas definidas pelo SkillDrills, não são normas científicas nem avaliação da visão. Taxa de atualização e mouse influenciam o resultado."
  },
  techniques: {
    "title": "Dicas para manter o cursor no alvo",
    "items": [
      {
        "name": "Mirar no centro",
        "desc": "Na borda do ponto, qualquer mudança de direção faz você escapar.",
        "tips": "Mantenha o cursor no meio do ponto e mova-se junto."
      },
      {
        "name": "Pulso relaxado",
        "desc": "Mão tensa faz o cursor pular.",
        "tips": "Correções pequenas com o pulso, deslocamentos grandes com o braço."
      },
      {
        "name": "Antecipar as bordas",
        "desc": "O ponto quica assim que toca uma borda.",
        "tips": "Quando ele se aproximar de uma borda, prepare-se para ir no sentido oposto."
      },
      {
        "name": "Voltar na hora",
        "desc": "Voltar em menos de 2 segundos mantém a sequência.",
        "tips": "Se escapar, não pare: volte imediatamente para o ponto."
      }
    ]
  },
  steps: [
    "Toque em Iniciar e aguarde a contagem regressiva.",
    "Coloque o cursor sobre o ponto até ele ficar verde.",
    "Continue em cima para somar 5 pontos a cada segundo, aproximadamente.",
    "Acompanhe mudanças de direção e quiques.",
    "Após 45 segundos, veja pontuação, sequência e nota."
  ],
  audience: "Para quem quer praticar manter o cursor sobre um alvo em movimento e jogadores que querem testar rapidamente seu rastreamento.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('krauzlis2004', 'rashbass1961'),
  related: [
    {
      "href": "/pt/drills/visual/tracking-accuracy/moving-target",
      "label": "Previsão de Trajetória de Alvo Móvel"
    },
    {
      "href": "/pt/drills/visual/tracking-accuracy/multiple-targets",
      "label": "Rastreamento de Múltiplos Objetos"
    },
    {
      "href": "/pt/drills/visual/reaction-speed/go/no-go",
      "label": "Teste Go/No-Go"
    },
    {
      "href": "/pt/drills/fps/strafe-tracking",
      "label": "Strafe Tracking FPS"
    },
    {
      "href": "/pt/drills/fps/pro-smooth-pursuit",
      "label": "Pro Smooth Pursuit FPS"
    }
  ]
};

export default function PursuitTrackerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <AutoPursuitClient copy={{  "title": "Perseguição Suave com o Cursor" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
