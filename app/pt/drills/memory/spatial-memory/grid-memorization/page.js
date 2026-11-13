import GridMemorizationClient from '@/app/drills/memory/spatial-memory/grid-memorization/GridMemorizationClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de memória visual online | SkillDrills",
  description: "Teste de memória visual online grátis: memorize os quadrados que acendem por 1,5 segundo na grade e repita o padrão, de 4x4 até 12 células em 5x5.",
  keywords: ['teste de memória visual', 'teste de memória visual online', 'matriz de memória', 'memória visuoespacial', 'grelha de memória', 'teste de padrões visuais', 'memória de trabalho visual', 'treino de memória visual', 'teste de memória online'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de memória visual online | SkillDrills",
    description: "Teste de memória visual online grátis: memorize os quadrados que acendem por 1,5 segundo na grade e repita o padrão, de 4x4 até 12 células em 5x5.",
    type: 'website',
    url: 'https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de memória visual online | SkillDrills",
    description: "Teste de memória visual online grátis: memorize os quadrados que acendem por 1,5 segundo na grade e repita o padrão, de 4x4 até 12 células em 5x5.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization',
    languages: getAlternateLanguages('/drills/memory/spatial-memory/grid-memorization'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Treino de Memória", "item": "https://skilldrills.online/pt/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Memória Espacial", "item": "https://skilldrills.online/pt/drills/memory/spatial-memory" },
    { "@type": "ListItem", "position": 4, "name": "Teste de Memória Visual", "item": "https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste de Memória Visual Online (Jogo de Grade)",
  "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "sameAs": "https://pt.wikipedia.org/wiki/Mem%C3%B3ria_espacial",
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Teste de Memória Visual Online (Jogo de Grade)",
  "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization",
  "description": "Teste de memória visual gratuito no navegador: memorize as células que acendem por 1,5 segundo numa grade de 4x4 a 5x5 e repita o padrão.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Spatial Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Teste de Memória Visual Online (Treino de Memória em Grade)",
  "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como treinar a memória visual em grades matriciais",
  "description": "Quatro passos práticos para guardar um padrão de células acesas em 1,5 segundo e repeti-lo na grade.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization#step-1",
      
      "name": "Fixar o olhar central",
      "text": "Mantenha os olhos ancorados no centro da grade antes do acendimento para usar a visão periférica em todo o tabuleiro."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization#step-2",
      
      "name": "Executar chunking de formas Gestalt",
      "text": "Agrupe as células acesas em formas geométricas reconhecíveis (linhas, cantos, blocos) em vez de tentar gravar posições isoladas."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization#step-3",
      
      "name": "Rastreamento motor visoespacial",
      "text": "Trace mentalmente uma linha contínua pelas células iluminadas durante os 1,5 segundos de exibição para reforçar o padrão motor."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/pt/drills/memory/spatial-memory/grid-memorization#step-4",
      
      "name": "Reconstrução sistemática da matriz",
      "text": "Clique primeiro nos blocos geométricos memorizados e depois preencha as células isoladas antes que a lembrança visual se apague."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é um teste de memória visual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aqui é um exercício de memória de trabalho visoespacial: você memoriza quais células acendem na grade e depois as marca de memória, sem repetir as posições em palavras. É um jogo de treino gratuito, não um teste psicotécnico ou do Detran."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona o treino de memória em grade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Numa grade 4x4, 5 células acendem em roxo por 1,5 segundo. Quando apagam, você clica em todas as que estavam acesas. Cada padrão completo vale 150 pontos e acrescenta uma célula. Depois de 7 células na 4x4, a grade passa para 5x5 (de 5 até no máximo 12 células). O relógio de 60 segundos só corre enquanto você repete o padrão."
      }
    },
    {
      "@type": "Question",
      "name": "Isto é o Visual Patterns Test (VPT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. O Visual Patterns Test (Della Sala et al., 1997) é um instrumento de pesquisa com padrões em grade. Este exercício é um jogo de treino gratuito com formato parecido, mas não segue o procedimento nem as normas desse teste."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença para o Teste dos Blocos de Corsi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O teste de blocos de Corsi (Corsi, 1972) avalia a memória espacial sequencial (tocar blocos em ordem temporal) usando o 'escriba interno'. Já o teste de grade apresenta todas as células simultaneamente, medindo o 'cache visual' estático."
      }
    },
    {
      "@type": "Question",
      "name": "Como a pontuação é calculada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada padrão repetido por completo vale 150 pontos. A nota na tela de resultado é uma faixa de treino do SkillDrills, com 1.150 pontos no topo da escala; não é média nem valor normativo."
      }
    },
    {
      "@type": "Question",
      "name": "Como o agrupamento (chunking) melhora a memória visual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A memória de trabalho visual tem um gargalo natural de 3 a 4 itens independentes (Luck & Vogel, 1997; Cowan, 2001). O chunking contorna esse limite ao reunir células vizinhas em figuras geométricas (quadrados, linhas, triângulos), guardando várias posições como um único objeto mental."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre cache visual e escriba interno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No modelo de Logie (1995), o 'cache visual' é um depósito passivo para formas, cores e padrões estáticos, enquanto o 'escriba interno' é o processo ativo de ensaio mental e planejamento de trajetórias motoras."
      }
    },
    {
      "@type": "Question",
      "name": "Por que os padrões de grade desaparecem tão rápido após 1,5 segundo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Neste exercício a exibição dura sempre 1,5 segundo. A memória icônica guarda a imagem por muito pouco tempo; o que você não agrupar em formas ou numa linha imaginada nesse intervalo tende a se perder antes de clicar."
      }
    },
    {
      "@type": "Question",
      "name": "Existe penalidade de pontuação ao errar uma célula?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Uma célula errada só encerra a rodada atual, sem perder pontos nem tempo. Em seguida aparece um padrão novo no mesmo nível."
      }
    },
    {
      "@type": "Question",
      "name": "Como a memória visual ajuda no dia a dia e nos jogos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O exercício se parece com situações em que você vê uma disposição por um instante e precisa lembrá-la, como o minimapa ou um tabuleiro de xadrez. Não há garantia de melhora em outras atividades."
      }
    }
  ]
};

const gridGuide = {
  intro: [
  "Este teste de memória visual online mostra por 1,5 segundo células acesas numa grade, e depois você repete o padrão de memória. Você começa com 5 células numa grade 4x4; cada padrão certo acrescenta uma célula, e na grade 5x5 o desafio vai até 12 células. Serve como treino de memória visual, inclusive para quem pratica para provas de atenção e memória, mas não é um teste psicotécnico oficial.",
  "A investigação do span visoespacial começou com Pietro Corsi (1972) por meio do Teste dos Blocos de Corsi, que comprovou que a memória espacial opera em redes neurais distintas do span de dígitos verbal (Milner, 1971). Em 1997, Sergio Della Sala, Robert H. Logie e colaboradores publicaram o Visual Patterns Test (VPT) para dissociar a retenção de matrizes estáticas de sequências motoras ativas. Este exercício usa um formato parecido, mas não é o VPT.",
  "Na neurociência cognitiva moderna, Robert H. Logie (1995) e Alan Baddeley (2000) dividiram o esboço visoespacial em 'Cache Visual' (armazenamento passivo de formas, cores e imagens estáticas) e 'Escriba Interno' (mecanismo ativo de repetição espacial e planejamento motor). Pesquisas de Steven J. Luck & Edward K. Vogel (1997) e Nelson Cowan (2001) confirmaram que a capacidade visual bruta sem agrupamento é limitada a 3 ou 4 itens. Expandir essa marca exige chunking espacial: combinar células acesas em formas Gestalt reconhecíveis.",
  "Como funciona: cada padrão aparece por 1,5 segundo. O relógio de 60 segundos só corre enquanto você repete o padrão. Um padrão completo vale 150 pontos; uma célula errada encerra a rodada sem perder pontos nem tempo, e vem um padrão novo no mesmo nível. Tempo de reação não é medido.",
  "Dados: sua pontuação e seu recorde ficam salvos apenas no localStorage do navegador e não são enviados a servidores."
],
  benchmarks: {
    title: "Faixas de treino SkillDrills (uma partida)",
    headers: ["Faixa", "Pontos", "Padrões completos", "Dificuldade alcançada"],
    rows: [
      ["Faixa alta", "1.200 ou mais", "8 ou mais", "Grade 5x5, 10 a 12 células"],
      ["Faixa intermediária", "600 – 1.050", "4 – 7", "Grade 5x5, 6 a 9 células"],
      ["Faixa inicial", "150 – 450", "1 – 3", "4x4 com 6 a 7 células; após 3 padrões, 5x5"],
      ["Início", "0", "0", "Grade 4x4, 5 células"]
    ],
    note: "Pontos = padrões completos × 150. As faixas são calculadas a partir das regras do jogo: são referências de treino do SkillDrills, não estatísticas populacionais."
  },
  techniques: {
    title: "Técnicas comprovadas para expandir a memória visual matricial",
    items: [
  {
    "name": "Chunking de formas espaciais (Gestalt)",
    "desc": "Agrupe mentalmente as células iluminadas em formas geométricas básicas como triângulos, retas, quadrados ou letras (Wertheimer, 1923; Della Sala et al., 1999). Agrupar 7 coordenadas em 2 ou 3 figuras reduz o número de unidades a lembrar.",
    "tips": "Foque de imediato em linhas contínuas e cantos em vez de olhar pontos soltos."
  },
  {
    "name": "Codificação de espaço negativo (vazios)",
    "desc": "Quando uma região estiver muito cheia de células acesas, memorize os espaços vazios (apagados). Gravar 2 buracos escuros em um bloco de 6 posições é muito mais eficiente do que tentar gravar 4 luzes.",
    "tips": "Se uma área estiver quase toda preenchida, foque exclusivamente nos 'buracos' pretos."
  },
  {
    "name": "Rastreamento cinestésico do escriba interno",
    "desc": "Acione o 'escriba interno' (Logie, 1995) desenhando mentalmente uma linha contínua unindo todas as células acesas durante os 1,5 segundos. O planejamento motor reforça a retenção visual passiva.",
    "tips": "Mantenha um sentido de varredura consistente (ex.: superior esquerdo para inferior direito) para dar rumo ao padrão."
  },
  {
    "name": "Fixação central e captura parafoveal",
    "desc": "Mantenha os olhos firmes no centro da matriz ao iniciar a rodada. Evite movimentos sacádicos frenéticos entre células; a visão periférica captura a estrutura global simultaneamente.",
    "tips": "Relaxe ligeiramente o foco para absorver a matriz inteira como uma única fotografia."
  }
]
  },
  steps: [
  "Fixe o olhar no centro da grade e aguarde o padrão acender.",
  "Durante o flash de 1,5 segundo, agrupe as células em 2 ou 3 formas geométricas.",
  "Em regiões muito cheias, memorize os espaços apagados (espaço negativo) para economizar esforço.",
  "Ao apagar da grade, clique rapidamente nas formas memorizadas sobre o tabuleiro.",
  "Avance de grades 4x4 para 5x5 a fim de elevar continuamente seu limite de memória operacional."
],
  audience: "Jogadores de FPS que buscam melhor percepção de minimapa, estudantes de exatas e arquitetura, enxadristas e qualquer pessoa focada em elevar sua memória não-verbal.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'corsi1972', 'luck1997', 'milner1971'),
  related: [
  {
    "href": "/pt/drills/memory/working-memory/n-back",
    "label": "Teste N-Back (Memória Operacional)"
  },
  {
    "href": "/pt/drills/cognitive/focus/concentration-grid",
    "label": "Tabela de Schulte (Grade de Concentração)"
  },
  {
    "href": "/pt/drills/memory/short-term-memory/digit-span",
    "label": "Teste de Dígitos (Span de Memória)"
  },
  {
    "href": "/pt/drills/visual/reaction-speed/light-reaction",
    "label": "Teste de Reflexo (Tempo de Reação)"
  },
  {
    "href": "/pt/drills/reaction-speed/reflex-training-drill",
    "label": "Jogo de Reflexo e Treino de Reflexos"
  }
]
};

export default function LocalizedGridMemorizationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GridMemorizationClient copy={{
        "h1Keyword": "Teste de memória visual online",
        "h1Suffix": "",
        "subtitle": "Memorize quadrados iluminados em uma grade",
        "caption": "A memória de trabalho visual armazena cerca de quatro objetos distintos simultaneamente; o limite é o número de itens e não o detalhe individual de cada um (Luck & Vogel, 1997). As grades matriciais avaliam o 'cache visual', o depósito passivo de formas e disposição espacial (Logie, 1995).",
        "statScore": "Pontos",
        "statTime": "Tempo",
        "statGridSize": "Grade",
        "statBest": "Recorde",
        "hudScore": "Pontos",
        "hudTime": "Tempo",
        "startTitle": "Memória Visual Pro",
        "startSubtitle": "Memória visual • Grade",
        "countdownSubtitle": "PREPARE-SE",
        "newBest": "NOVO RECORDE",
        "pointsLabel": "Pontos",
        "statAccuracy": "Precisão",
        "cellsUnit": "Células",
        "statPeakPattern": "Padrão Máximo",
        "statPerfects": "Perfeitos",
        "btnPlayAgain": "Jogar novamente",
        "rulesTitle": "Instruções do Treino e Pontuação",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Retenção de Padrão",
                        "highlight": "+150 PTS",
                        "result": "Memorize as células iluminadas e clique para recriar o padrão"
                },
                {
                        "num": "2",
                        "text": "Progressão de Nível",
                        "highlight": "4x4 → 5x5",
                        "result": "Uma célula a mais por padrão certo, até 12 células na 5x5"
                },
                {
                        "num": "3",
                        "text": "Erro",
                        "highlight": "Sem Penalidades",
                        "result": "A rodada termina, sem perder pontos nem tempo"
                },
                {
                        "num": "4",
                        "text": "Nível Mantido",
                        "highlight": "Mesmo Nível",
                        "result": "Após um erro, vem um padrão novo no mesmo nível"
                }
        ]
}} />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
