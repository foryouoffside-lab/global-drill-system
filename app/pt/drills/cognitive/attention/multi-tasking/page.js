import DualTargetFlowClient from '@/app/drills/cognitive/attention/multi-tasking/DualTargetFlowClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de Multitarefa | Rastreamento Duplo | SkillDrills",
  description: "Teste de multitarefa grátis: em dois fluxos de símbolos opostos, toque só no símbolo-alvo de cada lado. Um jogo de multitarefa não clínico, sem cadastro.",
  keywords: [
    "teste de multitarefa",
    "teste de flexibilidade cognitiva",
    "teste de alternancia de tarefas",
    "jogo de multitarefa cerebral",
    "treino de processamento paralelo",
    "teste de sobrecarga cognitiva",
    "treino neurocognitivo de foco duplo",
    "teste de capacidade multitarefa",
    "exercicio para agilidade mental",
    "teste de velocidade de alternancia"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Multitarefa | Rastreamento Duplo | SkillDrills",
    description: "Teste de multitarefa grátis: em dois fluxos de símbolos opostos, toque só no símbolo-alvo de cada lado. Um jogo de multitarefa não clínico, sem cadastro.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de Multitarefa | Rastreamento Duplo | SkillDrills",
    description: "Teste de multitarefa grátis: em dois fluxos de símbolos opostos, toque só no símbolo-alvo de cada lado. Um jogo de multitarefa não clínico, sem cadastro.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking',
    languages: getAlternateLanguages('/drills/cognitive/attention/multi-tasking'),
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
      "name": "Treino Cognitivo",
      "item": "https://skilldrills.online/pt/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Teste de Multitarefa",
      "item": "https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Task_switching_(psychology)", "https://en.wikipedia.org/wiki/Human_multitasking"],
  "name": "Teste de Multitarefa – Treino de Atenção em Fluxo Duplo",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Teste de multitarefa grátis: em dois fluxos de símbolos opostos, toque só no símbolo-alvo de cada lado. Um jogo de multitarefa não clínico, sem cadastro.",
  "url": "https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking",
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
  "name": "Teste de Multitarefa",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requer navegador moderno com suporte a JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jogo de Multitarefa – Treino de Foco em Fluxo Duplo",
  "url": "https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking",
  "description": "Teste de multitarefa grátis: em dois fluxos de símbolos opostos, toque só no símbolo-alvo de cada lado. Um jogo de multitarefa não clínico, sem cadastro.",
  "genre": [
    "Acao",
    "Jogo Cerebral",
    "Treino Cognitivo"
  ],
  "gamePlatform": [
    "Navegador Web",
    "Desktop",
    "Dispositivos Moveis"
  ],
  "applicationCategory": "Game",
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
      "name": "O que é o Teste de Multitarefa (Dual-Target Flow)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É um jogo de multitarefa: a tela é dividida em duas faixas (esquerda/direita na horizontal, em cima/embaixo na vertical) onde formas saem do centro para fora. Você clica ou toca só no símbolo-alvo mostrado em cada faixa. Não é um teste clínico."
      }
    },
    {
      "@type": "Question",
      "name": "O que é o custo de alternância (switch cost) segundo Rogers e Monsell (1995)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É a perda de rapidez e precisão quando se troca de uma regra de tarefa para outra, em vez de repetir a mesma."
      }
    },
    {
      "@type": "Question",
      "name": "O cérebro consegue mesmo fazer duas coisas ao mesmo tempo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para decisões não automatizadas, os estudos sobre o gargalo central sugerem uma alternância rápida, e não um processamento realmente paralelo (Pashler, 1994)."
      }
    },
    {
      "@type": "Question",
      "name": "O que Ophir, Nass e Wagner (2009) observaram em multitarefas frequentes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pessoas com muito multitarefa de mídia tiveram pior desempenho em tarefas que exigem ignorar estímulos irrelevantes. O estudo é correlacional e não mostra causa."
      }
    },
    {
      "@type": "Question",
      "name": "Como a pontuação é calculada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada alvo acertado vale 100 pontos base multiplicados pelo combo e pelo nível, e soma +2 s (máximo de 60 s). Tocar no símbolo errado ou deixar passar um símbolo-alvo tira 1 s e zera o combo. Precisão = acertos ÷ (acertos + erros). A nota depende da pontuação (24.000 pontos = nota máxima) e é uma referência de prática do SkillDrills."
      }
    },
    {
      "@type": "Question",
      "name": "Quais técnicas aumentam a pontuação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não fixe uma faixa só: olhe perto do limite entre as duas e confira os dois lados. Os símbolos-alvo mudam a cada 20 segundos, então verifique o indicador de cada faixa com frequência."
      }
    },
    {
      "@type": "Question",
      "name": "Como a dificuldade aumenta com o nível?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O nível sobe com a pontuação: as formas andam mais rápido e aparecem com mais frequência. A partir do nível 3, as duas faixas passam a ter símbolos-alvo diferentes."
      }
    },
    {
      "@type": "Question",
      "name": "A taxa de atualização da tela afeta o resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma taxa de atualização alta pode deixar as formas rápidas mais nítidas, mas não medimos o efeito na pontuação. Compare resultados no mesmo aparelho."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo dura uma partida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O relógio começa em 45 segundos: +2 s por acerto (máximo de 60 s) e −1 s por erro. A partida termina quando o tempo zera. Compare várias partidas feitas nas mesmas condições."
      }
    },
    {
      "@type": "Question",
      "name": "Este teste de multitarefa é totalmente gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, o SkillDrills oferece este teste grátis no navegador, sem cobranças, instalação ou cadastro."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Realizar o Teste de Multitarefa",
  "description": "Guia prático para vigiar dois fluxos de símbolos e tocar só nos alvos de cada faixa.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Olhe Perto do Centro",
      "text": "Posicione o olhar perto do limite entre as duas faixas para vigiar os dois lados.",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Confira os Símbolos-Alvo",
      "text": "Confira o símbolo-alvo mostrado em cada faixa; ele muda a cada 20 segundos.",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Toque nos Símbolos Certos",
      "text": "Clique ou toque nos símbolos iguais ao alvo da sua faixa antes que cheguem à borda (+2 s). Um símbolo errado custa 1 s.",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Mantenha o Ritmo com a Aceleração",
      "text": "A velocidade sobe com o nível e, a partir do nível 3, cada faixa tem seu próprio alvo. Sem erros, o multiplicador de combo cresce.",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/multi-tasking#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rogers1995', 'monsell2003', 'pashler1994', 'wickens2002', 'ophir2009', 'woods2015'),
  intro: {
    title: "Teste de Multitarefa: Guia",
    paragraphs: [
      "Este teste de multitarefa grátis pede que você vigie dois fluxos de símbolos ao mesmo tempo e toque só no alvo de cada faixa. É uma autoavaliação não clínica.",
      "O custo de alternância (switch cost) é a queda passageira de rapidez e precisão ao passar de uma regra de tarefa para outra (Rogers & Monsell, 1995).",
      "Aqui os alvos mudam a cada 20 segundos e ficam diferentes entre as faixas a partir do nível 3, então é preciso atualizar a regra de cada lado (Pashler, 1994; Wickens, 2002).",
    ],
  },
  benchmarks: {
    title: 'Faixas de prática SkillDrills (precisão)',
    headers: ['Nivel', 'Rank', 'Classificacao', 'Acuracia', 'Marcador de prática'],
    note: "Faixas editoriais de prática para comparar suas próprias sessões; não são estatísticas de população nem normas clínicas.",

    rows: [
      { tier: 'Faixa 1', rank: 'Muito avançada', stat: 'Ritmo muito alto', accuracy: '98%+', marker: 'Ritmo muito alto com alta precisão' },
      { tier: 'Faixa 2', rank: 'Avançada', stat: 'Ritmo alto', accuracy: '94-97%', marker: 'Ritmo alto e regular' },
      { tier: 'Faixa 3', rank: 'Sólida', stat: 'Ritmo estável', accuracy: '88-93%', marker: 'Ritmo estável com alguns erros' },
      { tier: 'Faixa 4', rank: 'Em desenvolvimento', stat: 'Ritmo médio', accuracy: '78-87%', marker: 'Ritmo médio com margem de melhora' },
      { tier: 'Faixa 5', rank: 'Inicial', stat: 'Ritmo inicial', accuracy: '<78%', marker: 'Ponto de partida' },
    ],
  },
  protocols: {
    title: 'Etapas de uma partida',
    description: 'Como vigiar as duas faixas sem perder o combo.',
    items: [
      { title: "Olhe Perto do Centro", description: "Posicione o olhar perto do limite entre as duas faixas para vigiar os dois lados." },
      { title: "Confira os Símbolos-Alvo", description: "Confira o símbolo-alvo mostrado em cada faixa; ele muda a cada 20 segundos." },
      { title: "Toque nos Símbolos Certos", description: "Clique ou toque nos símbolos iguais ao alvo da sua faixa antes que cheguem à borda (+2 s). Um símbolo errado custa 1 s." },
      { title: "Mantenha o Ritmo com a Aceleração", description: "A velocidade sobe com o nível e, a partir do nível 3, cada faixa tem seu próprio alvo. Sem erros, o multiplicador de combo cresce." },
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

export default function EnhancedPage() {
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
      <DualTargetFlowClient copy={{
        title: "Teste de Multitarefa", subtitle: "Vigie dois fluxos de símbolos ao mesmo tempo",
        statScore: "Pontos", statTime: "Tempo", timeLeft: "Tempo restante", statLevel: "Nível", statBest: "Melhor pontuação",
        startTitle: "Teste de Multitarefa", startSubtitle: "Dois fluxos · foco periférico", getReady: "Prepare-se", accuracy: "Precisão", hits: "Acertos", peakLevel: "Maior nível", maxCombo: "Combo máximo",
        caption: "Encontre símbolos correspondentes em dois fluxos opostos e responda antes que a velocidade aumente.",
        rulesTitle: "Instruções e pontuação", ruleItems: [
          { text: "Acerte o alvo", highlight: "+100 PTS, +2 s", result: "Símbolo da faixa" },
          { text: "Duas faixas", highlight: "Do nível 3", result: "Um alvo por faixa" },
          { text: "Erro / alvo perdido", highlight: "Combo zerado", result: "−1 s" },
          { text: "Troca de alvo", highlight: "A cada 20 s", result: "Confira o símbolo" },
        ],
        aboutTitle: "Sobre multitarefa e fluxo de dois alvos", aboutLead: "Este autocheck cognitivo não clínico combina dois fluxos visuais e observa a precisão praticada e a velocidade de alternância da atenção, não uma capacidade geral para todas as tarefas do dia a dia.",
        audienceTitle: "Para quem é", audienceText: "Para jogadores que acompanham vários elementos na tela, estudantes e pessoas que querem organizar informações simultâneas.",
        skillsTitle: "Habilidades treinadas", skillsText: "Rastreamento visual bilateral, detecção periférica, alternância de atenção e controle executivo.", flexibilityTitle: "Velocidade de troca", flexibilityText: "A cada nível, ritmo e padrões mudam: alterne entre os fluxos sem perder precisão."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
