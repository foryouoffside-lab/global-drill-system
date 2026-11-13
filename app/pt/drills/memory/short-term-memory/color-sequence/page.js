import ColorSequenceClient from '@/app/drills/memory/short-term-memory/color-sequence/ColorSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  title: "Jogo estilo Genius online | Sequência de cores | SkillDrills",
  description: "Jogo estilo Genius online e grátis: memorize a sequência de cores que acende e repita na mesma ordem em 6 botões. Começa com 3 cores, +1 a cada acerto.",
  keywords: [
    "jogo genius online",
    "jogo tipo genius",
    "jogo de sequência de cores",
    "memória de cores",
    "jogo da memoria de cores",
    "treino de memoria visual",
    "memoria de curto prazo teste",
    "memoria operacional visual",
    "jogo genius online grátis",
    "jogo simon",
    "teste de amplitude de memoria"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/color-sequence'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Jogo estilo Genius online | Sequência de cores | SkillDrills",
    description: "Jogo estilo Genius online e grátis: memorize a sequência de cores que acende e repita na mesma ordem em 6 botões. Começa com 3 cores, +1 a cada acerto.",
    url: "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Jogo estilo Genius online | Sequência de cores | SkillDrills",
    description: "Jogo estilo Genius online e grátis: memorize a sequência de cores que acende e repita na mesma ordem em 6 botões. Começa com 3 cores, +1 a cada acerto.",
  },
};

export default function PortugueseColorSequencePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos de Memória", "item": "https://skilldrills.online/pt/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Memória de Curto Prazo", "item": "https://skilldrills.online/pt/drills/memory" },
      { "@type": "ListItem", "position": 4, "name": "Jogo estilo Genius online", "item": "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Jogo estilo Genius online",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
    "description": "Jogo gratuito estilo Genius: durante 45 segundos, memorize sequências de cores cada vez mais longas e repita na mesma ordem para praticar memória operacional visual e agrupamento.",
    "genre": "Treinamento Cognitivo / Memória Visual de Trabalho",
    "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Jogo estilo Genius online",
    "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence",
    "description": "Jogo de sequência de cores estilo Genius, grátis no navegador: 6 botões coloridos, 3 cores no nível 1 e uma cor a mais a cada sequência certa.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" }
  };

  
const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jogo de Sequência de Cores Online (Treino de Memória)",
  "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence",
  "description": "Jogo tipo Genius: as cores acendem uma a uma no círculo central e você repete a ordem nos 6 botões coloridos.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Treino de Memória", "Jogos Cognitivos", "Memória Visual", "Sequência de Cores"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona este jogo estilo Genius online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É um jogo de sequência de cores estilo Genius (o Genius da Estrela, conhecido lá fora como Simon); não é o produto oficial. As cores acendem uma de cada vez no círculo central e depois você toca os 6 botões coloridos na mesma ordem. O nível 1 tem 3 cores (tamanho = nível + 2); acertar sobe 1 nível, errar desce 1. Cada rodada é uma nova sequência aleatória e a sessão dura 45 segundos."
        }
      },
      {
        "@type": "Question",
        "name": "Quantos itens a memória visual de curto prazo consegue reter simultaneamente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enquanto George A. Miller (1956) sugeriu o clássico limiar de 7 ± 2 itens para estímulos verbais, estudos contemporâneos sobre memória puramente visual de Nelson Cowan (2001) e Steven J. Luck & Edward K. Vogel (1997) demonstram que a capacidade não agrupada é estritamente limitada a cerca de 4 itens. Superar 4 estímulos exige técnicas ativas de agrupamento cognitivo (chunking)."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre memória de trabalho e memória de curto prazo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A memória de curto prazo refere-se ao armazenamento passivo e temporário de informações por breves instantes. Já a memória operacional (ou memória de trabalho), modelada por Alan Baddeley (2000), envolve retenção ativa, manipulação contínua, ordenação temporal e filtragem de estímulos no esboço visuoespacial durante a execução de uma tarefa."
        }
      },
      {
        "@type": "Question",
        "name": "Que tipo de memória o jogo tipo Genius usa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Repetir sequências de cores, como no Genius, usa o cache visual (armazenamento temporário de cores) e o escriba interno (ensaio de trajetórias e ordens; Logie, 1995), além de atenção sustentada sob pressão de tempo."
        }
      },
      {
        "@type": "Question",
        "name": "O que é agrupamento cognitivo (chunking) e como aplicá-lo neste jogo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agrupamento cognitivo (chunking) é o processo mental de combinar elementos individuais em unidades conceituais maiores. Por exemplo, transformar 'Vermelho, Azul, Verde, Amarelo' em dois pares ('Vermelho-Azul' e 'Verde-Amarelo') permite guardar 4 cores como apenas 2 unidades de memória, contornando o gargalo biológico de 4 itens de Cowan."
        }
      },
      {
        "@type": "Question",
        "name": "Por que é mais difícil lembrar das cores no meio de uma sequência longa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Isso decorre do Efeito de Posição Serial. O efeito de primazia protege os primeiros itens da sequência pelo ensaio mental inicial, enquanto o efeito de recência preserva o último item pelo eco sensorial imediato. Os elementos centrais sofrem interferência proativa (estímulos anteriores) e retroativa (estímulos posteriores), tornando-se os mais propensos ao esquecimento."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre este teste de cores e o teste de amplitude de dígitos (Digit Span)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O teste de dígitos utiliza símbolos numéricos que são naturalmente processados pela alça fonológica (voz interna). O jogo da memória de cores isola prioritariamente o esboço visuoespacial, exigindo codificação cromática e espacial que dificulta a subvocalização simples, recrutando redes neurais distintas de memória de trabalho."
        }
      },
      {
        "@type": "Question",
        "name": "Treinar a memória sequencial visual ajuda nos estudos e na produtividade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não há garantia. Com prática você tende a melhorar neste jogo, mas a transferência para a memória do dia a dia, os estudos ou o trabalho é discutida na pesquisa. Use como exercício de memória; se tiver preocupação com sua memória, procure um médico."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona o sistema adaptativo de dificuldade da escada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O comprimento da sequência cresce dinamicamente conforme o nível atingido (comprimento = nível + 2). Rodadas certas elevam o nível em 1; tocar uma cor errada ou ficar 8 segundos sem tocar reduz 1 nível (mínimo nível 1), sem perder pontos nem tempo. Cada rodada certa vale 100 × (1 + 0,1 × nível) pontos e as cores piscam mais rápido a cada nível."
        }
      },
      {
        "@type": "Question",
        "name": "O jogo genius online é gratuito e funciona no celular e computador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O jogo estilo Genius da SkillDrills é gratuito e roda direto no navegador em smartphones, tablets e computadores, por toque ou clique, sem download, instalação ou cadastro. Seus recordes ficam salvos só no seu navegador."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Treinar a Memória Sequencial de Cores Online",
    "description": "Passo a passo fundamentado em neuropsicologia para codificar, agrupar e reproduzir sequências cromáticas com exatidão.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence#step-1",
        "name": "Observe a Apresentação da Sequência",
        "text": "Fixe o olhar no círculo central e acompanhe cada cor que acende, sem tentar tocar antes da hora."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence#step-2",
        "name": "Agrupe as Cores em Unidades Pareadas",
        "text": "Divida mentalmente os estímulos em pares de cores (ex.: Vermelho-Azul, Verde-Amarelo) em vez de reter cada cor isolada."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence#step-3",
        "name": "Reproduza a Sequência com Ritmo Constante",
        "text": "Toque nas cores correspondentes na ordem exata. Mantenha uma cadência rítmica fluida para evitar esquecimento prematuro."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/color-sequence#step-4",
        "name": "Expanda sua Capacidade de Memória de Curto Prazo",
        "text": "Cada acerto sobe o nível: a próxima sequência, nova e aleatória, tem uma cor a mais. Compare sua pontuação com os seus próprios recordes."
      }
    ]
  };

  const ptCopy = {
    title: 'Jogo estilo Genius online',
    subtitle: 'Jogo de sequência de cores: memorize e repita na mesma ordem',
    caption: 'As cores acendem uma a uma no círculo central. Repita a sequência na mesma ordem; cada acerto deixa a próxima sequência uma cor mais longa.',
    statScore: 'Pontuação',
    statTime: 'Tempo',
    statLevel: 'Nível',
    statBestScore: 'Recorde',
    rulesTitle: 'Instruções do Jogo & Sistema de Pontuação',
    rule1Text: 'Retenção Sequencial',
    rule1Highlight: '+100 PTS',
    rule1Result: 'Reproduza o padrão luminoso na ordem exata de exibição',
    rule2Text: 'Bônus de Nível',
    rule2Highlight: '+10% PTS / Nível',
    rule2Result: 'Rodada no nível N vale 100 × (1 + 0,1 × N) pontos',
    rule3Text: 'Erro ou Tempo Esgotado',
    rule3Highlight: '-1 Nível',
    rule3Result: 'Cor errada ou 8 s sem tocar: sem perder pontos nem tempo; nova sequência',
    rule4Text: 'Dificuldade Adaptativa',
    rule4Highlight: 'Sobe e Desce',
    rule4Result: 'Nível N = N + 2 cores; as cores piscam mais rápido a cada nível',
    aboutTitle: 'Sobre o jogo estilo Genius: sequência de cores',
    overviewTitle: 'O que é o Treino de Memória Operacional Visual?',
    overviewLead: 'A memória de trabalho visual armazena cerca de 4 itens simples por vez, limite determinado pela contagem de objetos e não pela complexidade de cada um (Luck & Vogel, 1997; Cowan, 2001). Uma sequência de cores que fica mais longa permite praticar perto desse limite.',
    aboutIntro: [
      'O treino de memória visual isola e exercita a capacidade cerebral de codificar, reter e recuperar padrões cromáticos em sucessão temporal estrita.',
      'Ao praticar a reprodução sequencial de cores, você aprimora estratégias de agrupamento cognitivo (chunking) e desenvolve resistência à distração sob pressão de tempo.',
    ],
    aboutCards: [
      {
        title: 'Para Quem É?',
        text: 'Estudantes que buscam melhorar a retenção de leitura, adultos que desejam manter a agilidade mental e gamers que precisam processar padrões visuais com rapidez.',
      },
      {
        title: 'Habilidades Desenvolvidas',
        text: 'Retenção visual de curto prazo, amplitude de memória operacional, codificação sequencial e foco sustentado.',
      },
      {
        title: 'Agrupamento (Chunking)',
        text: 'Agrupe cores em blocos pareados (ex.: par Vermelho-Azul) para contornar o gargalo de capacidade imediata e alcançar níveis elevados.',
      },
    ],
    tapPrompt: 'Toque na Sequência em Ordem',
    evaluating: 'Avaliando...',
    startCardTitle: 'Jogo estilo Genius',
    startCardSubtitle: 'Memória de cores • sequência crescente',
    getReady: 'PREPARE-SE',
    newBest: 'NOVO RECORDE',
    points: 'Pontos',
    statAccuracy: 'Precisão',
    statPeakLevel: 'Nível Máximo',
    statPerfects: 'Perfeitos',
    playAgain: 'Jogar Novamente',
    shareTitle: 'Compartilhar Pontuação',
    exitTitle: 'Sair e Voltar',
  };

  const ptColorSequenceGuide = {
    heading: "Guia do jogo estilo Genius online: memória operacional e sequência de cores",
    intro: [
      "Este jogo genius online (estilo Genius, não o produto oficial da Estrela) é um jogo de sequência de cores para praticar a memória operacional visual e a retenção da ordem. Diferente dos jogos tradicionais de encontrar pares estáticos de cartas em tabuleiros, este teste dinâmico desafia a amplitude imediata (span) do cérebro para reter estímulos cromáticos que surgem em ordem temporal estrita.",
      "A arquitetura da memória humana foi amplamente documentada pela neuropsicologia cognitiva. Enquanto George A. Miller (1956) postulou o limite de $7 \pm 2$ itens para memória verbal, pesquisas contemporâneas em memória puramente visual conduzidas por Nelson Cowan (2001) e pela dupla Steven J. Luck & Edward K. Vogel (1997) comprovaram que a capacidade da memória operacional visual não agrupada é de aproximadamente 4 itens independentes. Sem estratégias ativas de recodificação, a capacidade de retenção imediata sofre colapso além do quarto elemento.",
      "Segundo o modelo de memória operacional de Alan Baddeley (Baddeley & Hitch, 1974; Baddeley, 2000), o processamento de sequências visuais recruta ativamente o esboço visuoespacial (visuospatial sketchpad). Robert H. Logie (1995) subdividiu este componente em cache visual (armazenamento estático temporário de cores e formas) e escriba interno (mecanismo ativo de ensaio de sequências espaciais e temporais). Praticantes experientes conectam esse esboço à alça fonológica, gerando uma codificação dual (visual e subvocal) que ajuda a segurar a sequência.",
      "O que é registrado: em 45 segundos o jogo guarda a pontuação, o nível máximo (tamanho da sequência) e a precisão (porcentagem de rodadas certas). O tempo de reação por toque não é medido.",
      "Como funciona uma rodada: no nível N aparecem N + 2 cores entre 6 possíveis, sempre numa sequência nova e aleatória. Quanto maior o nível, menos tempo cada cor fica acesa (de cerca de 0,7 s até no mínimo 0,25 s). Depois você tem 8 segundos para cada toque; cor errada ou tempo esgotado desce 1 nível.",
      "Transparência de dados: a SkillDrills não coleta métricas agregadas nem armazena resultados em servidores externos. Suas pontuações permanecem salvas apenas no localStorage do seu navegador, razão pela qual não divulgamos médias populacionais não verificadas. As faixas da tabela abaixo são faixas de prática da SkillDrills calculadas pela pontuação do jogo; os números de pesquisa citados vêm das referências abaixo.",
      "Isenção de responsabilidade médica: este jogo de navegador é um exercício de memória e entretenimento. Não constitui dispositivo médico, exame diagnóstico ou terapia neurológica, e sua pontuação não reflete diagnóstico clínico. Em caso de dúvidas sobre sua memória ou cognição, consulte um médico especialista ou neuropsicólogo."
    ],
    benchmarks: {
      title: "Faixas de prática do jogo estilo Genius (SkillDrills, sessão de 45 s)",
      headers: ["Faixa", "Nível alcançado (cores)", "Pontos sem erro até o nível", "Estratégia típica"],
      rows: [
        ["Faixa 1", "Nível 11+ (13+ cores)", "cerca de 1.550+", "Nomear as cores e agrupar em blocos"],
        ["Faixa 2", "Nível 8 a 10 (10 a 12 cores)", "cerca de 980 a 1.549", "Agrupamento estável em pares ou trios"],
        ["Faixa 3", "Nível 5 a 7 (7 a 9 cores)", "cerca de 500 a 979", "Cores do meio se perdem quando a exibição acelera"],
        ["Faixa 4", "Nível 3 a 4 (5 a 6 cores)", "cerca de 230 a 499", "Cores guardadas uma a uma, ainda sem agrupar"],
        ["Faixa 5", "Nível 1 a 2 (3 a 4 cores)", "menos de 230", "Aprendendo as regras e o ritmo"]
      ],
      note: "Faixas de prática da SkillDrills para comparar suas próprias sessões, não médias de população nem normas clínicas. Os pontos valem para uma sessão sem erros até aquele nível (pontos por rodada = 100 × (1 + 0,1 × nível)); erros descem o nível, então a pontuação real varia."
    },
    techniques: {
      title: "Técnicas Baseadas em Evidências para Ampliar a Memória Sequencial",
      items: [
        {
          name: "Agrupamento Pareado Relacional (Paired Chunking)",
          desc: "Divida o fluxo contínuo de cores em blocos binários ou ternários (Miller, 1956). Em vez de tentar memorizar 'Vermelho, Azul, Verde, Amarelo' de forma desconexa, agrupe em blocos conceituais ('Vermelho-Azul' e 'Verde-Amarelo'). Isso reduz a carga informacional pela metade, permitindo encaixar sequências longas dentro do limite de Cowan (2001).",
          tips: "Faça uma micro-pausa mental a cada dois estímulos para fixar conscientemente os limites de cada bloco."
        },
        {
          name: "Codificação Dual Cruzada (Alça Fonológica Integrada)",
          desc: "Integre a alça fonológica de Baddeley ao esboço visuoespacial (Baddeley, 2000). Repita mentalmente ou sussurre a inicial de cada cor ('V-A-V-A') em ritmo cadenciado enquanto observa a iluminação dos botões, gerando dois registros de memória complementares (visual e auditivo).",
          tips: "Use uma cadência rítmica de dois em dois tons para sincronizar a fala interna à exibição visual na tela."
        },
        {
          name: "Mapeamento Cinestésico de Trajetória Espacial",
          desc: "As cores acendem só no círculo central, mas os 6 botões de resposta (grade 3 × 2) têm posição fixa. A cada cor, imagine o botão correspondente e guarde o caminho do dedo como um desenho (Logie, 1995).",
          tips: "Olhe a disposição dos botões antes de começar para conseguir desenhar o caminho."
        },
        {
          name: "Blindagem de Posição Serial (Serial Position Shielding)",
          desc: "Cada rodada é uma sequência aleatória nova, então a rodada anterior não ajuda. Pelo efeito de posição serial, os itens centrais de uma sequência sofrem a maior taxa de esquecimento devido à interferência mútua. Fixe imediatamente o primeiro bloco na memória de trabalho ativa e confie no eco sensorial recente para o último elemento exibido.",
          tips: "Consolide o primeiro par logo no início da exibição e reproduza a resposta sem hesitar para aproveitar o rastro sensorial fresco."
        }
      ]
    },
    steps: [
      "Mantenha o olhar fixo no círculo central, onde as cores acendem uma a uma.",
      "Observe a sequência luminosa sem tentar clicar antecipadamente, mantendo a respiração estável e o foco absoluto.",
      "Agrupe as cores exibidas em pares mentais utilizando subvocalização rítmica ou trajetórias geométricas.",
      "Assim que o sinal de entrada for ativado, reproduza os toques na ordem exata com determinação e cadência fluida.",
      "A cada acerto o nível sobe e a próxima sequência, nova, tem uma cor a mais; a cada erro o nível desce 1."
    ],
    audience: "Estudantes em preparação para concursos e vestibulares, praticantes de e-sports que querem praticar leitura rápida de padrões, profissionais e entusiastas de condicionamento cognitivo que buscam treinar a amplitude da memória operacional, técnicas de agrupamento (chunking) e atenção sob limite de tempo.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995', 'luck1997', 'simon1974'),
    related: [
      { href: "/pt/drills/memory/short-term-memory/digit-span", label: "Teste de Dígitos (Digit Span)" },
      { href: "/pt/drills/memory/short-term-memory/word-recall", label: "Teste de Memória Verbal" },
      { href: "/pt/drills/memory/spatial-memory/grid-memorization", label: "Teste de Memória Visual em Grade" },
      { href: "/pt/drills/memory/spatial-memory/object-location", label: "Teste de Localização de Objetos" },
      { href: "/pt/drills/memory/working-memory/n-back", label: "Teste Dual N-Back" }
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
      <ColorSequenceClient copy={ptCopy} />
      <DrillGuide guide={ptColorSequenceGuide} />
      <RelatedDrills currentCategory="memory" currentHref="/drills/memory/short-term-memory/color-sequence" locale="pt" />
    </>
  );
}
