import ObjectLocationClient from '@/app/drills/memory/spatial-memory/object-location/ObjectLocationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de memória espacial online | SkillDrills",
  description: "Teste de memória espacial online grátis: objetos aparecem por 1,5 segundo na grade e você clica onde estava o objeto pedido. Treino de memória visuoespacial.",
  keywords: ['teste de memória espacial', 'memória espacial online', 'memória de localização de objetos', 'memória visuoespacial', 'teste de posições', 'memória de trabalho visuoespacial', 'localização de objetos', 'exercício de memória espacial', 'jogo de memória espacial', 'treino de memória espacial'],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/object-location', 'pt'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de memória espacial online | SkillDrills",
    description: "Teste de memória espacial online grátis: objetos aparecem por 1,5 segundo na grade e você clica onde estava o objeto pedido. Treino de memória visuoespacial.",
    url: "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de memória espacial online | SkillDrills",
    description: "Teste de memória espacial online grátis: objetos aparecem por 1,5 segundo na grade e você clica onde estava o objeto pedido. Treino de memória visuoespacial.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedObjectLocationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treino de Memória", "item": "https://skilldrills.online/pt/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Memória Espacial", "item": "https://skilldrills.online/pt/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Teste de Memória Espacial", "item": "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Teste de Memória Espacial (Localização de Objetos)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Teste de memória espacial grátis no navegador: memorize onde os objetos aparecem por 1,5 segundo na grade e encontre a posição do objeto pedido.",
    "genre": "Memory Game / Spatial Memory",
    "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Teste de Memória Espacial (Localização de Objetos)",
    "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location",
    "description": "Teste de memória espacial grátis no navegador: memorize onde os objetos aparecem por 1,5 segundo na grade e encontre a posição do objeto pedido.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "sameAs": "https://pt.wikipedia.org/wiki/Mem%C3%B3ria_espacial",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Teste de Memória Espacial (Localização de Objetos)",
    "description": "Teste de memória espacial grátis no navegador: memorize onde os objetos aparecem por 1,5 segundo na grade e encontre a posição do objeto pedido.",
    "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location",
    "genre": ["Memory Game", "Cognitive Training", "Spatial Memory"],
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
            "name": "O que é um teste de memória espacial de localização de objetos?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "É um jogo de treino gratuito de memória de localização de objetos: você memoriza qual objeto estava em qual célula e depois encontra a posição de um objeto pedido. Não é um psicotécnico nem um teste do Detran; a pontuação é só uma referência pessoal de treino."
            }
      },
      {
            "@type": "Question",
            "name": "Como funciona este exercício prático?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Numa grade 3x3, 2 objetos (emojis) aparecem por 1,5 segundo. Depois, um objeto-alvo é mostrado no topo e você tem 8 segundos para clicar na célula onde ele estava. Um acerto vale 150 pontos e sobe um nível; cada nível acrescenta um objeto (máximo de 10). A grade vira 4x4 no nível 8 e 5x5 no nível 15. A partida dura 45 segundos no total."
            }
      },
      {
            "@type": "Question",
            "name": "Isto é a tarefa de localização de objetos de Silverman e Eals?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. Eals e Silverman (1994) estudaram a memória de localização de objetos com uma tarefa de pesquisa em que se pergunta a posição de objetos depois de observá-los. Este jogo usa uma ideia parecida, mas não segue o procedimento nem as normas dessa tarefa."
            }
      },
      {
            "@type": "Question",
            "name": "O que significa 'Feature Binding' em neurociência cognitiva?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "É o mecanismo pelo qual a via visual ventral (que identifica o objeto) e a via dorsal (que computa a posição no espaço) convergem no hipocampo e no córtex para-hipocampal gerando uma memória integrada."
            }
      },
      {
            "@type": "Question",
            "name": "Como a pontuação é calculada?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cada posição-alvo encontrada vale 150 pontos. A nota na tela de resultado é uma faixa de treino do SkillDrills com 1.000 pontos no topo da escala; não é uma média."
            }
      },
      {
            "@type": "Question",
            "name": "Qual a diferença deste teste para o de memória em grade comum?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No teste de memória visual (grade), você repete todo um padrão de células acesas e pode agrupá-lo em formas. Aqui você memoriza qual objeto estava em qual célula e procura só a posição de um objeto-alvo."
            }
      },
      {
            "@type": "Question",
            "name": "Por que é mais complexo guardar a posição de objetos do que padrões simples?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Porque a conjunção de dois atributos diferentes (identidade visual e coordenada espacial) satura rapidamente o foco atencional da memória operacional (Luck & Vogel, 1997)."
            }
      },
      {
            "@type": "Question",
            "name": "Quais regiões cerebrais são recrutadas neste exercício?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Principalmente o hipocampo bilateral, o giro para-hipocampal, o córtex parietal posterior e o córtex pré-frontal dorsolateral (DLPFC) para sustentação ativa das coordenadas espaciais."
            }
      },
      {
            "@type": "Question",
            "name": "Ocorrem penalidades de pontos ou tempo por cliques incorretos?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. Um clique errado ou ficar 8 segundos sem responder encerra só a rodada, sem perder pontos. O nível não cai e aparece uma nova disposição no mesmo nível. O relógio de 45 segundos, porém, continua correndo."
            }
      },
      {
            "@type": "Question",
            "name": "De que forma essa memória ajuda no cotidiano e em jogos?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O exercício se parece com situações em que você guarda uma disposição de relance, como onde deixou as chaves ou posições no minimapa. Não há garantia de melhora em outras atividades."
            }
      }
]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como treinar a memória espacial e a localização de objetos",
    "description": "Quatro passos práticos para memorizar a posição dos objetos em 1,5 segundo e encontrar o objeto-alvo.",
    "step": [
      {
            "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location#step-1",
            
            "name": "Varredura por quadrantes",
            "text": "Assim que os objetos aparecerem, divida visualmente a grade em 4 partes (superior esquerda, superior direita, inferior esquerda e inferior direita) para mensurar a dispersão."
      },
      {
            "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location#step-2",
            
            "name": "Ancoragem em marcos espaciais",
            "text": "Vincule cada objeto a referências fixas e evidentes, como os cantos, as bordas laterais ou o centro da grade."
      },
      {
            "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location#step-3",
            
            "name": "Pareamento semântico-espacial",
            "text": "Crie laços imediatos entre o sentido do objeto e a sua posição (por exemplo: 'estrela no topo, chave embaixo')."
      },
      {
            "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/object-location#step-4",
            
            "name": "Localização precisa do alvo",
            "text": "Quando a grade se apagar e o alvo for exibido, consulte seu mapa mental e clique na coordenada memorizada sem hesitar."
      }
]
  };

  const objectLocationGuide = {
    intro: [
      "Este teste de memória espacial online mostra objetos (emojis) por 1,5 segundo numa grade. Depois um objeto-alvo é pedido e você clica na célula onde ele estava: é um treino de memória visuoespacial de localização de objetos, não de padrões. Você começa com 2 objetos numa grade 3x3; cada acerto acrescenta um objeto (máximo de 10), a grade vira 4x4 no nível 8 e 5x5 no nível 15.",
      "A base científica dessa avaliação remonta ao trabalho pioneiro de Marion Eals e Irwin Silverman (1994), que comprovaram que a memória para localização de objetos constitui uma adaptação evolutiva distinta da rotação espacial geométrica. Este jogo não é a tarefa de pesquisa deles, e sim um exercício de formato parecido. Antes disso, Edward C. Tolman (1948) concebeu a noção de mapa cognitivo (Cognitive Map), demonstrando como os organismos erguem maquetes espaciais internas do meio exterior.",
      "Na arquitetura da memória operacional, Robert H. Logie (1995) e Alan Baddeley (2000) comprovaram que o pareamento objeto-posição é orquestrado pelo buffer episódico (Episodic Buffer), que junta os sinais do cache visual (as identidades dos itens) com o escriba interno (o mapa das coordenadas). Steven J. Luck e Edward K. Vogel (1997) evidenciaram o alto custo atencional da fusão de atributos, e Nelson Cowan (2001) estimou a capacidade do foco da memória operacional em cerca de 3 a 4 itens.",
      "Como funciona: a disposição fica visível por 1,5 segundo e depois você tem 8 segundos para responder. Um acerto vale 150 pontos e sobe um nível; um erro ou tempo esgotado encerra a rodada sem perder pontos, e vem uma nova disposição no mesmo nível. A partida dura 45 segundos no total; tempo de reação não é medido.",
      "Dados: sua pontuação e seu recorde ficam apenas no localStorage do navegador e não são enviados a servidores."
],
    benchmarks: {
      title: "Faixas de treino SkillDrills (uma partida)",
      headers: ["Faixa", "Pontos", "Acertos", "Dificuldade alcançada"],
      rows: [
        ["Faixa alta", "1.050 ou mais", "7 ou mais", "Nível 8+, 9 a 10 objetos, grade 4x4 (5x5 após 14 acertos)"],
        ["Faixa intermediária", "600 – 900", "4 – 6", "Nível 5 a 7, 6 a 8 objetos, grade 3x3"],
        ["Faixa inicial", "150 – 450", "1 – 3", "Nível 2 a 4, 3 a 5 objetos, grade 3x3"],
        ["Início", "0", "0", "Nível 1, 2 objetos, grade 3x3"]
      ],
      note: "Pontos = acertos × 150. As faixas são calculadas a partir das regras do jogo: são referências de treino do SkillDrills, não estatísticas populacionais."
    },
    techniques: {
      title: "Estratégias cientificamente respaldadas para expandir a memória espacial",
      items: [
        {
                "name": "Ancoragem em marcos (Landmark Anchoring)",
                "desc": "Associe os itens a marcos fixos evidentes, como os 4 cantos, as bordas ou o centro (Tolman, 1948). Guardar que 'o diamante está no canto superior esquerdo' poupa o esforço de calcular coordenadas abstratas.",
                "tips": "Assim que os objetos aparecerem, foque prioritariamente nos símbolos situados em cantos e extremidades."
        },
        {
                "name": "Pareamento semântico-espacial",
                "desc": "Faça conexões lógicas instantâneas entre o significado da figura e sua localização (Baddeley, 2000). Relacione uma estrela alta ao céu e uma chave baixa a uma gaveta no piso.",
                "tips": "Utilize fórmulas verbais breves mentalmente (ex.: 'fogo no topo, gema no canto')."
        },
        {
                "name": "Divisão por quadrantes",
                "desc": "Segmente grades maiores de 4x4 ou 5x5 em quatro zonas imaginárias. Contabilizar previamente quantos objetos ocupam cada setor limita enormemente a área de busca.",
                "tips": "Conte os itens por quadrante antes de registrar a célula precisa de cada um."
        },
        {
                "name": "Olhar centralizado e varredura parafoveal",
                "desc": "Fixe os olhos no meio da matriz para captar a visão de conjunto por meio do campo parafoveal, recorrendo a apenas 1 ou 2 microssacadas para tirar dúvidas.",
                "tips": "Evite saltos oculares desordenados; conserve a cabeça firme e escaneie com estabilidade."
        }
]
    },
    steps: [
      "Concentre o foco no ponto central da matriz e observe a formação geral dos objetos.",
      "Nos 1,5 s de visualização, prenda mentalmente cada figura a um marco de referência.",
      "Crie associações semântico-espaciais instantâneas ligando o ícone à coordenada.",
      "Assim que a tela for limpa e o alvo for indicado, consulte seu mapa mental e clique na posição certa.",
      "A cada nível entra um objeto e a grade cresce de 3x3 para 4x4 e 5x5: aplique os mesmos marcos a mais objetos."
],
    audience: "Jogadores focados em vigilância de minimapa e recarga de habilidades, radiologistas, estudantes das áreas de exatas e qualquer pessoa interessada em aprimorar a memória de trabalho visoespacial.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'luck1997', 'tolman1948', 'eals1994'),
    related: [
      {
            "href": "/pt/drills/memory/spatial-memory/grid-memorization",
            "label": "Teste de Memória Visual (Memory Matrix)"
      },
      {
            "href": "/pt/drills/memory/spatial-memory/path-tracing",
            "label": "Teste de Memória de Trajetória (Path Tracing)"
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
            "label": "Teste Dual N-Back"
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
      <ObjectLocationClient
        copy={{
        "h1Keyword": "Teste de memória espacial online",
        "h1Suffix": "",
        "subtitle": "Memorize onde cada objeto estava na grade",
        "statScore": "Pontuação",
        "statTime": "Tempo",
        "statLevel": "Nível",
        "statBestScore": "Melhor Récord",
        "levelPrefix": "Nv.",
        "memorizePrompt": "MEMORIZE AS POSIÇÕES DOS OBJETOS",
        "targetPrompt": "ALVO:",
        "startTitle": "Localização de Objetos Pro",
        "startSubtitle": "Memória espacial • Posições",
        "countdownSubtitle": "PREPARE-SE",
        "newBest": "NOVO RECORDE",
        "pointsLabel": "Pontos",
        "statAccuracy": "Precisão",
        "statPeakLevel": "Nível Máximo",
        "statPerfects": "Perfeitos",
        "btnPlayAgain": "Jogar Novamente",
        "rulesTitle": "Instruções & Sistema de Pontuação",
        "aboutTitle": "Sobre o Treino de Memória Espacial",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Memorize posições & ache o alvo",
                        "highlight": "+150 PTS",
                        "result": "Memorize a grade por 1,5 s e clique na célula exata do ícone indicado"
                },
                {
                        "num": "2",
                        "text": "Progressão em grade",
                        "highlight": "3x3 → 4x4 → 5x5",
                        "result": "Um objeto a mais por nível (máx. 10), 4x4 no nível 8, 5x5 no nível 15"
                },
                {
                        "num": "3",
                        "text": "Erro ou tempo esgotado",
                        "highlight": "Zero penalidade",
                        "result": "A rodada termina sem perder pontos; 8 s para responder, o relógio de 45 s continua"
                },
                {
                        "num": "4",
                        "text": "Dificuldade consolidada",
                        "highlight": "Sem rebaixamento",
                        "result": "O nível não cai, permitindo refinar sua estratégia de ancoragem"
                }
        ]
}}
      />
      <DrillGuide guide={objectLocationGuide} />
      <RelatedDrills />
    </>
  );
}
