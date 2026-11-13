import PathTracingClient from '@/app/drills/memory/spatial-memory/path-tracing/PathTracingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de Corsi online | Memória sequencial | SkillDrills",
  description: "Teste de Corsi online e grátis: memorize os quadrados que acendem um a um e toque neles na mesma ordem. Os percursos crescem a cada acerto, de 3x3 até 7x7.",
  keywords: ['teste de Corsi', 'teste de Corsi online', 'blocos de Corsi', 'teste dos blocos de Corsi', 'memória sequencial', 'span visuoespacial'],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/path-tracing', 'pt'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Corsi online | Memória sequencial | SkillDrills",
    description: "Teste de Corsi grátis: toque nos quadrados iluminados na mesma ordem e treine a memória dos blocos de Corsi direto no navegador, sem cadastro.",
    url: "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de Corsi online | Memória sequencial | SkillDrills",
    description: "Teste de Corsi grátis: toque nos quadrados iluminados na mesma ordem e treine a memória dos blocos de Corsi direto no navegador, sem cadastro.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedPathTracingPage() {
  const appDescription = "Teste de Corsi grátis no navegador: quadrados vizinhos acendem um a um e formam um percurso que você repete na mesma ordem. Cada percurso concluído fica um passo mais longo.";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treino de memória", "item": "https://skilldrills.online/pt/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Memória espacial", "item": "https://skilldrills.online/pt/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Teste de Corsi", "item": "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Teste de Corsi online",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": appDescription,
    "genre": "Spatial Memory",
    "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Teste de Corsi online",
    "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing",
    "description": appDescription,
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Teste de Corsi online",
    "description": appDescription,
    "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing",
    "genre": ["Memory Game", "Spatial Sequence Memory"],
    "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "numberOfPlayers": {
      "@type": "QuantitativeValue",
      "value": 1
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona o teste de Corsi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quadrados da grade acendem um a um a cada 0,5 segundo e desenham um percurso. Depois você tem 10 segundos para clicar ou tocar nos mesmos quadrados na mesma ordem. Cada percurso completo vale +150 pontos e o próximo tem um passo a mais."
        }
      },
      {
        "@type": "Question",
        "name": "É o mesmo teste dos blocos de Corsi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. O princípio é o da tarefa dos blocos de Corsi (Corsi, 1972): lembrar posições na ordem e reproduzi-las. Aqui, porém, a grade é quadrada, cada passo vai só para um quadrado vizinho (cima, baixo, esquerda, direita) e nenhum quadrado é visitado duas vezes. É um jogo de treino."
        }
      },
      {
        "@type": "Question",
        "name": "Como aumentam o tamanho do percurso e da grade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O nível 1 começa com um percurso de 3 passos. Cada percurso concluído aumenta o nível e o comprimento em 1. A grade é 3x3 até 5 passos, 4x4 de 6 a 8, 5x5 de 9 a 12, 6x6 de 13 a 16 e 7x7 a partir de 17."
        }
      },
      {
        "@type": "Question",
        "name": "Como o tempo é contado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O relógio da sessão tem 60 segundos e só corre enquanto você repete o percurso. A demonstração e a tela de resultado não contam. Cada percurso precisa ser concluído em até 10 segundos depois do início da resposta."
        }
      },
      {
        "@type": "Question",
        "name": "O que acontece se eu tocar no quadrado errado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A rodada termina na hora e aparece um novo percurso do mesmo tamanho. Você não perde pontos nem tempo, e o nível não cai. Passar dos 10 segundos é tratado da mesma forma; nos dois casos a tentativa conta como erro na precisão."
        }
      },
      {
        "@type": "Question",
        "name": "Como lembrar percursos mais longos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Como o percurso sempre segue para um quadrado vizinho, guarde blocos de direção em vez de quadrados soltos, por exemplo 'dois à direita, um para cima' (agrupamento, Miller, 1956). Durante a demonstração, olhe a grade inteira e fixe principalmente as curvas."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença para o teste de memória visual (grade)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No teste de memória visual vários quadrados acendem ao mesmo tempo e podem ser lembrados como um único padrão. No teste de Corsi eles acendem um de cada vez, então é preciso lembrar a ordem além das posições."
        }
      },
      {
        "@type": "Question",
        "name": "Meus resultados são salvos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A melhor pontuação e o nível máximo ficam salvos só no localStorage deste navegador e não são enviados a nenhum servidor. Os resultados são marcas de treino."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como jogar o teste de Corsi",
    "description": "Quatro passos para repetir na mesma ordem um percurso que acende quadrado por quadrado.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing#step-1",
        "name": "Olhar a grade inteira",
        "text": "Durante a demonstração, não siga só o primeiro quadrado: observe a grade inteira e veja onde o percurso vira."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing#step-2",
        "name": "Agrupar por direções",
        "text": "Cada passo vai para um quadrado vizinho, então guarde blocos de direção como 'direita 2, cima 1'."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing#step-3",
        "name": "Tocar na mesma ordem",
        "text": "Depois da demonstração, clique ou toque nos quadrados na mesma ordem a partir do inicial, em até 10 segundos."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/path-tracing#step-4",
        "name": "Seguir em frente após um erro",
        "text": "Errar não custa pontos nem nível, então foque logo no novo percurso do mesmo tamanho."
      }
    ]
  };

  const pathTracingGuide = {
    intro: [
      "O teste de Corsi online é um jogo grátis de memória de ordem: quadrados de uma grade acendem um depois do outro e, em seguida, você toca neles na mesma ordem. Ele leva o princípio da tarefa dos blocos de Corsi (Milner, 1971; Corsi, 1972) para um percurso na grade e treina a memória sequencial e o span visuoespacial.",
      "No nível 1 aparece um percurso de 3 passos numa grade 3x3. Os quadrados acendem a cada 0,5 segundo; cada passo vai para um quadrado acima, abaixo, à esquerda ou à direita, e nenhum quadrado é visitado duas vezes. Cada percurso concluído vale +150 pontos, nível +1 e um passo a mais; a grade cresce para 4x4, 5x5 e 6x6 até 7x7.",
      "O relógio da sessão tem 60 segundos e só corre durante a resposta. Cada percurso deve ser concluído em 10 segundos. Um quadrado errado ou o fim do tempo encerra a rodada sem desconto; vem um novo percurso do mesmo tamanho e o nível não cai. Resposta por clique ou toque.",
      "Transparência de dados: os resultados ficam salvos só no localStorage deste navegador e não são enviados a nenhum servidor. Por isso o SkillDrills não publica médias de usuários nem rankings."
    ],
    benchmarks: {
      title: "Faixas de treino SkillDrills (pontos = percursos concluídos × 150)",
      headers: ["Faixa", "Tamanho alcançado · grade", "Pontos", "Significado"],
      rows: [
        ["Iniciante", "3–4 passos · 3x3", "0–150", "0 a 1 percurso concluído. Aprendendo as regras e o ritmo"],
        ["Básico", "5–7 passos · 3x3–4x4", "300–600", "2 a 4 percursos concluídos. A grade passa a 4x4"],
        ["Intermediário", "8–12 passos · 4x4–5x5", "750–1.350", "5 a 9 percursos concluídos. Agrupar por direções vira necessidade"],
        ["Avançado", "13+ passos · 6x6–7x7", "1.500+", "10 ou mais percursos concluídos. Percursos longos seguidos em 60 segundos de resposta"]
      ],
      note: "Estas faixas são calculadas a partir das regras de pontuação do jogo; não são normas populacionais."
    },
    techniques: {
      title: "Dicas para percursos longos",
      items: [
        {
          "name": "Montar blocos de direção",
          "desc": "O percurso sempre segue para um quadrado vizinho. Guarde blocos como 'direita 2, cima 1, esquerda 1' em vez de quadrados soltos (Miller, 1956).",
          "tips": "Dê nomes às formas: L, escada, zigue-zague."
        },
        {
          "name": "Marcar as curvas",
          "desc": "Trechos retos são fáceis de lembrar. Fixe principalmente o quadrado inicial e os quadrados onde a direção muda.",
          "tips": "Antes de responder, relembre o início e a última curva."
        },
        {
          "name": "Ver a grade inteira",
          "desc": "Em vez de pular de um quadrado aceso para outro, olhe perto do centro da grade e acompanhe o traçado.",
          "tips": "Ajuda principalmente nas grades 6x6 e 7x7."
        },
        {
          "name": "Responder em ritmo constante",
          "desc": "Com 10 segundos de resposta não é preciso correr, mas pausas longas fazem você esquecer o final do percurso.",
          "tips": "Responda bloco por bloco."
        }
      ]
    },
    steps: [
      "Toque em Iniciar e espere a contagem regressiva de 3 segundos.",
      "Observe o percurso enquanto os quadrados acendem um a um.",
      "Em até 10 segundos, clique ou toque nos mesmos quadrados na mesma ordem.",
      "Se acertar, o percurso ganha um passo; se errar, aparece um novo percurso do mesmo tamanho.",
      "Depois de 60 segundos de resposta, veja sua pontuação, nível máximo e precisão."
    ],
    audience: "Quem quer treinar a memória sequencial e o span visuoespacial jogando, gamers e atletas que precisam decorar rotas ou sequências de movimentos, e quem procura um jogo de memória rápido.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('corsi1972', 'milner1971', 'logie1995', 'miller1956'),
    related: [
      {
        "href": "/pt/drills/memory/spatial-memory/grid-memorization",
        "label": "Teste de Memória Visual (Memory Matrix)"
      },
      {
        "href": "/pt/drills/memory/spatial-memory/object-location",
        "label": "Teste de Memória Espacial (Object Location)"
      },
      {
        "href": "/pt/drills/memory/short-term-memory/digit-span",
        "label": "Teste de Dígitos (Digit Span)"
      },
      {
        "href": "/pt/drills/memory/short-term-memory/word-recall",
        "label": "Teste de Memória Verbal (Word Recall)"
      },
      {
        "href": "/pt/drills/memory/working-memory/n-back",
        "label": "Teste N-Back"
      }
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
      <PathTracingClient
        copy={{
        "h1Keyword": "Teste de Corsi online",
        "h1Suffix": " – Memória sequencial",
        "subtitle": "Memorize os quadrados que acendem um a um e toque neles na mesma ordem.",
        "statScore": "Pontos",
        "statTime": "Tempo",
        "statLevel": "Nível",
        "statBestScore": "Melhor pontuação",
        "levelPrefix": "Nv.",
        "startTitle": "Teste de Corsi",
        "startSubtitle": "Blocos de Corsi • Memória sequencial",
        "countdownSubtitle": "PREPARE-SE",
        "newBest": "NOVO RECORDE",
        "pointsLabel": "Pontos",
        "statAccuracy": "Precisão",
        "statPeakLevel": "Nível máximo",
        "statPerfects": "Perfeitos",
        "btnPlayAgain": "Jogar de novo",
        "rulesTitle": "Regras e pontuação",
        "aboutTitle": "Sobre o teste de Corsi",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Repetir o percurso na mesma ordem",
                        "highlight": "+150 PTS",
                        "result": "Acerto: nível +1 e um passo a mais (10 s para responder)"
                },
                {
                        "num": "2",
                        "text": "A grade cresce",
                        "highlight": "3x3 → 7x7",
                        "result": "A grade aumenta sozinha conforme o percurso fica mais longo"
                },
                {
                        "num": "3",
                        "text": "Quadrado errado / tempo esgotado",
                        "highlight": "Sem desconto",
                        "result": "Sem perda de pontos ou tempo; novo percurso do mesmo tamanho"
                },
                {
                        "num": "4",
                        "text": "Nível mantido",
                        "highlight": "Sem queda",
                        "result": "O nível nunca cai; os 60 segundos só correm durante a resposta"
                }
        ]
}}
      />
      <DrillGuide guide={pathTracingGuide} />
      <RelatedDrills />
    </>
  );
}
