import SymbolMatchingClient from '@/app/drills/cognitive/processing-speed/symbol-matching/SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de Símbolos e Dígitos | SDMT Online | SkillDrills",
  description: "Teste gratuito de símbolos e dígitos no navegador: pratique pareamento símbolo-dígito e velocidade de processamento. Inspirado no SDMT, não é clínico.",
  keywords: ["teste de símbolos e dígitos", "SDMT online", "teste sdmt online", "pareamento símbolo-dígito", "velocidade de processamento", "busca visual"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Símbolos e Dígitos | SDMT Online | SkillDrills",
    description: "Teste gratuito de símbolos e dígitos no navegador: pratique pareamento símbolo-dígito e velocidade de processamento. Inspirado no SDMT, não é clínico.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de Símbolos e Dígitos | SDMT Online | SkillDrills",
    description: "Teste gratuito de símbolos e dígitos no navegador: pratique pareamento símbolo-dígito e velocidade de processamento. Inspirado no SDMT, não é clínico.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/symbol-matching'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://skilldrills.online/pt"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Treinos",
      "item": "https://skilldrills.online/pt/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cognitivo",
      "item": "https://skilldrills.online/pt/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Teste SDMT de Símbolos",
      "item": "https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Teste SDMT – Símbolos e Dígitos",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Treino online grátis inspirado no SDMT: pratique pareamento de símbolos e dígitos, busca visual e memória associativa. Não é o teste clínico.",
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste SDMT Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requer navegador moderno com suporte a JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jogo de Correspondência de Símbolos e Dígitos",
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching",
  "description": "Treino online grátis inspirado no SDMT: pratique pareamento de símbolos e dígitos, busca visual e memória associativa. Não é o teste clínico.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "dateModified": "2026-11-12",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é o teste SDMT (Symbol Digit Modalities Test)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É um teste neuropsicológico criado por Aaron Smith (1973), em que se associam símbolos a dígitos usando uma chave. Este treino usa o mesmo formato, mas não é o SDMT nem um teste clínico."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre os testes SDMT e DSST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No DSST (Wechsler) escreve-se o símbolo de cada dígito. No SDMT diz-se o dígito de cada símbolo. Este treino segue o SDMT: você vê o símbolo e toca no dígito."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona este teste de símbolos e dígitos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A chave no topo mostra seis símbolos com os dígitos 1 a 6. Quando um símbolo aparece no centro, toque no dígito correspondente. A chave muda a cada sessão e fica fixa durante a rodada."
      }
    },
    {
      "@type": "Question",
      "name": "Como funcionam o tempo e as penalidades?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A rodada começa com 45 segundos. Cada acerto soma 2 segundos (até 60). Um dígito errado, ou um símbolo que expira (com Target Timeouts ativado), tira 1 segundo e zera o combo. A rodada termina em 0."
      }
    },
    {
      "@type": "Question",
      "name": "Como são calculados os pontos e o nível?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada acerto vale 100 pontos multiplicados pelo combo e pelo nível. Conforme a pontuação sobe, o nível aumenta e o tempo para responder cada símbolo diminui."
      }
    },
    {
      "@type": "Question",
      "name": "O que o resultado mostra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pontos, precisão, acertos, erros, nível máximo e uma nota de F a S+ comparada a uma referência fixa da SkillDrills. Não é comparável a normas clínicas do SDMT nem a QI."
      }
    },
    {
      "@type": "Question",
      "name": "É um exame médico ou neuropsicológico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. É um jogo de prática no navegador, sem valor diagnóstico. Se você se preocupa com memória ou raciocínio, procure um profissional de saúde."
      }
    },
    {
      "@type": "Question",
      "name": "Como melhorar a pontuação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Decore a chave nos primeiros segundos, mantenha o olhar perto da chave e priorize a precisão, porque cada erro custa 1 segundo e o combo."
      }
    },
    {
      "@type": "Question",
      "name": "Treinar deixa meu processamento mais rápido?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sua pontuação nesta tarefa costuma subir com a prática. Não há garantia de que isso acelere outras tarefas do dia a dia."
      }
    },
    {
      "@type": "Question",
      "name": "Este teste online de símbolos e dígitos é gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, é grátis, direto no navegador, sem cadastro nem instalação, no computador ou no celular."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Realizar o Teste SDMT de Correspondência de Símbolos",
  "description": "Treino online grátis inspirado no SDMT: pratique pareamento de símbolos e dígitos, busca visual e memória associativa. Não é o teste clínico.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Consulte a Chave Superior de Mapeamento",
      "text": "Veja a chave que associa cada um dos seis símbolos a um dígito de 1 a 6.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Identifique o Símbolo Central Ativo",
      "text": "Observe o símbolo apresentado na área central de foco e determine imediatamente seu número correspondente.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Pressione o Dígito Correto",
      "text": "Toque ou clique no botão do dígito correspondente na tela. Erro ou tempo esgotado custam 1 segundo e o combo.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Memorize os Pares para Ganhar Ritmo",
      "text": "A chave fica igual durante a sessão: decorar os pares reduz as consultas. Com o nível, sobra menos tempo por símbolo.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "Teste de Símbolos e Dígitos – SDMT Online",
    paragraphs: [
      "O teste de símbolos e dígitos é um treino grátis no navegador: a chave no topo associa seis símbolos aos dígitos 1 a 6, um símbolo aparece no centro e você toca no dígito correspondente. A chave é embaralhada a cada sessão. A rodada começa com 45 segundos; cada acerto soma 2 segundos (máx. 60) e cada erro ou tempo esgotado tira 1 segundo.",
      "Responder do símbolo para o dígito é o formato do SDMT (Smith, 1973); no DSST da escala Wechsler é o contrário (dígito para símbolo). Este treino não é nenhum dos dois testes e seus resultados não se comparam a normas clínicas.",
      "O resultado mostra pontos, precisão, acertos, erros e nível máximo. É um jogo de prática, não um diagnóstico nem uma avaliação de QI ou neuropsicológica.",
    ],
  },
  benchmarks: {
    title: 'Faixas de referência para o treino de símbolos e dígitos',
    headers: ['Nível', 'Classificação', 'Faixa de Rendimento', 'Precisão', 'Leitura'],
    rows: [
      { tier: 'Tier 1', rank: 'Muito rápida', stat: 'Faixa 1', level: 'Faixa 1', accuracy: '98%+', marker: 'Rara; repita para confirmar' },
      { tier: 'Tier 2', rank: 'Rápida', stat: 'Faixa 2', level: 'Faixa 2', accuracy: '94-97%', marker: 'Consistente' },
      { tier: 'Tier 3', rank: 'Boa', stat: 'Faixa 3', level: 'Faixa 3', accuracy: '88-93%', marker: 'Treinada' },
      { tier: 'Tier 4', rank: 'Em evolução', stat: 'Faixa 4', level: 'Faixa 4', accuracy: '78-87%', marker: 'Consulta frequente da chave' },
      { tier: 'Tier 5', rank: 'Ponto de partida', stat: 'Faixa 5', level: 'Faixa 5', accuracy: '< 78%', marker: 'Ponto de partida' },
    ],
    note: 'Faixas editoriais para comparar suas próprias sessões; não são percentis de população, escores do SDMT clínico nem normas.',
  },
  protocols: {
    title: 'Como jogar',
    description: 'Os quatro passos de cada rodada.',
    items: [
      { title: "Consulte a Chave Superior de Mapeamento", description: "Veja a chave que associa cada um dos seis símbolos a um dígito de 1 a 6." },
      { title: "Identifique o Símbolo Central Ativo", description: "Observe o símbolo apresentado na área central de foco e determine imediatamente seu número correspondente." },
      { title: "Pressione o Dígito Correto", description: "Toque ou clique no botão do dígito correspondente na tela. Erro ou tempo esgotado custam 1 segundo e o combo." },
      { title: "Memorize os Pares para Ganhar Ritmo", description: "A chave fica igual durante a sessão: decorar os pares reduz as consultas. Com o nível, sobra menos tempo por símbolo." },
    ],
  },
  faqs: {
    title: 'Perguntas Frequentes (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function EnhancedPagePt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <SymbolMatchingClient
        copy={{
          title: "Teste de Símbolos e Dígitos",
          subtitle: "Encontre rapidamente a correspondência entre símbolos e dígitos e treine o processamento",
          startTitle: "Teste de Símbolos e Dígitos",
          stageCaption: "Compare o símbolo-alvo com a chave acima e toque no dígito correspondente.",
          rulesTitle: "Instruções do drill e pontuação",
          aboutTitle: "O que é o teste de símbolos e dígitos?",
          faqTitle: "Perguntas frequentes",
          readyLabel: "PREPARE-SE",
          labels: { score: "Pontos", time: "Tempo", level: "Nível", bestScore: "Melhor pontuação", timeLeft: "Tempo restante", targetSymbol: "Símbolo-alvo", accuracy: "Precisão", hits: "Acertos", misses: "Erros", peakLevel: "Nível máximo" },
          aboutLead: "Uma tarefa de símbolos e dígitos pede que você associe sinais a números contra o relógio. Ela treina velocidade de processamento e busca visual, não conhecimento. Este drill é um jogo de prática, não um instrumento clínico.",
          aboutText: "O formato se inspira nas tarefas de associação do SDMT e do DSST. Confira a chave e escolha o dígito do símbolo-alvo. As rodadas repetidas praticam busca visual, memória associativa e seleção de resposta. A pontuação vale apenas para este jogo e não é diagnóstico médico.",
          aboutCards: [
            { title: "Para quem serve?", desc: "Para estudantes, profissionais e gamers que querem praticar velocidade de processamento e busca visual." },
            { title: "O que é treinado?", desc: "Busca visual, memória associativa símbolo-dígito, escolha da resposta e atenção sustentada." },
            { title: "Chave rotativa", desc: "A relação entre símbolos e dígitos muda a cada sessão, exigindo consulta ativa em vez de memorização fixa." }
          ],
          rulesItems: [
            { num: "1", text: "Chave símbolo-dígito", highlight: "6 relações", result: "Consulte a chave superior" },
            { num: "2", text: "Símbolo-alvo", highlight: "+100 pontos", result: "Combo × nível, +2 s (máx. 60 s)" },
            { num: "3", text: "Dígito errado", highlight: "Zera o combo", result: "−1 segundo" },
            { num: "4", text: "Tempo esgotado", highlight: "Janela encurta", result: "−1 s e combo zerado" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
