import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de Reação de Escolha Online | SkillDrills",
  description: "Teste de reação de escolha grátis: toque no alvo certo conforme a regra que muda e pratique velocidade de decisão. Treino, não exame clínico.",
  keywords: [
    "teste de reação",
    "teste de reação online",
    "tempo de reação",
    "tempo de reação de escolha",
    "teste de reflexo",
    "velocidade de decisão",
    "discriminação visual",
    "lei de Hick"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Reação de Escolha Online | SkillDrills",
    description: "Teste de reação de escolha grátis: toque no alvo certo conforme a regra que muda e pratique velocidade de decisão. Treino, não exame clínico.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de Reação de Escolha Online | SkillDrills",
    description: "Teste de reação de escolha grátis: toque no alvo certo conforme a regra que muda e pratique velocidade de decisão. Treino, não exame clínico.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/reaction-time'),
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
      "name": "Tempo de Reação de Escolha",
      "item": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Teste de Tempo de Reação de Escolha – CRT",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Teste de tempo de reação de escolha online grátis: Meça sua velocidade de decisão, discriminação visual e flexibilidade cognitiva sob regras dinâmicas.",
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "pt-BR",
    "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste de Tempo de Reação de Escolha",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requer navegador moderno com suporte a JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time",
  "inLanguage": "pt-BR",
    "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Teste de Tempo de Reação de Escolha – Jogo Cognitivo",
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time",
  "description": "Teste de tempo de reação de escolha online grátis: Meça sua velocidade de decisão, discriminação visual e flexibilidade cognitiva sob regras dinâmicas.",
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
      "name": "O que é tempo de reação de escolha (CRT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo de reação de escolha é o intervalo entre a apresentação de múltiplos estímulos e a execução da resposta motora correta, exigindo discriminação visual e seleção de resposta."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre tempo de reação simples e de escolha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo simples (SRT, ~200ms) envolve responder a um único estímulo previsto. O tempo de escolha (CRT, ~280-350ms) exige avaliar opções e decidir qual ação tomar antes do disparo motor (Donders, 1868)."
      }
    },
    {
      "@type": "Question",
      "name": "O que postula a Lei de Hick (Hick, 1952)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Lei de Hick estabelece que o tempo de reação aumenta logaritmicamente conforme o número de alternativas de escolha se expande: RT = a + b * log2(n)."
      }
    },
    {
      "@type": "Question",
      "name": "Quais são as médias humanas típicas no teste CRT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A média na população adulta varia entre 280ms e 350ms. Jogadores competitivos de esports e atletas profissionais alcançam valores entre 180ms e 230ms (Der & Deary, 2006)."
      }
    },
    {
      "@type": "Question",
      "name": "Por que as regras de cores mudam dinamicamente durante o teste?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A alternância dinâmica de regras exige reconfiguração do conjunto de tarefas pelo córtex pré-frontal, avaliando flexibilidade cognitiva e inibição de respostas habituais."
      }
    },
    {
      "@type": "Question",
      "name": "É possível melhorar a velocidade de reação com treino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A prática deliberada refina a eficiência sináptica, acelera a condução neural e automatiza o mapeamento perceptivo-motor, reduzindo o tempo de indecisão."
      }
    },
    {
      "@type": "Question",
      "name": "Como a idade afeta o tempo de reação de escolha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo de reação atinge seu pico entre os 18 e 25 anos, com desaceleração gradual de 1 a 2ms por ano após os 25 anos. O treino contínuo preserva a agilidade de processamento."
      }
    },
    {
      "@type": "Question",
      "name": "Monitores e mouses afetam a precisão da medição?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monitores com taxa de atualização de 144Hz ou superior e mouses com taxa de amostragem de 1000Hz minimizam a latência de entrada do hardware (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a rotina ideal de treinamento recomendada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomenda-se de 10 a 15 minutos diários antes de partidas competitivas, sessões de estudo ou atividades que exijam reflexos imediatos."
      }
    },
    {
      "@type": "Question",
      "name": "Este teste de reação de escolha é totalmente gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, o SkillDrills oferece esta ferramenta gratuitamente, direto no navegador web, sem cadastro ou instalação de aplicativos."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Realizar o Teste de Tempo de Reação de Escolha",
  "description": "Teste de tempo de reação de escolha online grátis: Meça sua velocidade de decisão, discriminação visual e flexibilidade cognitiva sob regras dinâmicas.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Monitore a Regra Superior Ativa",
      "text": "Observe o banner no topo da tela que indica a cor do alvo ativo (ex: TOQUE NO VERMELHO ou TOQUE NO AZUL).",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Discrimine os Alvos Visuais",
      "text": "Assim que os alvos surgirem no campo, identifique instantaneamente qual nó corresponde à regra de cor ativa.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Execute o Toque de Decisão",
      "text": "Clique ou toque no alvo válido com máxima precisão antes que o cronômetro do nó expire.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Adapte-se às Inversões de Regras",
      "text": "Quando a regra no banner alternar, iniba o reflexo anterior imediatamente e passe a tocar na nova cor designada.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('donders1969', 'hick1952', 'hyman1953', 'der2006', 'woods2015'),
  intro: {
    title: "Neurociência do Tempo de Reação de Escolha & Velocidade de Decisão",
    paragraphs: [
      "O tempo de reação de escolha (CRT - Choice Reaction Time) é uma das medidas fundamentais da neuropsicologia cognitiva para quantificar a eficiência de processamento do sistema nervoso central sob demanda decisória.",
      "Diferente do tempo de reação simples (SRT, ~200ms), que envolve uma resposta mecânica a um estímulo unívoco, a tarefa de escolha introduz etapas centrais de discriminação perceptual e seleção motora, elevando a latência basal para 280–350ms (Donders, 1868).",
      "A Lei de Hick-Hyman (Hick, 1952; Hyman, 1953) demonstra que o tempo de reação de escolha escala de forma logarítmica com a complexidade informacional das opções. Este exercício adiciona alternâncias imprevisíveis de regras, recrutando o córtex pré-frontal para testar flexibilidade e controle inibitório em tempo real.",
    ],
  },
  benchmarks: {
    title: 'Padrões de Desempenho Cognitivo & Escala de Reação de Escolha (CRT)',
    headers: ['Nível', 'Faixa', 'Faixa de Latência', 'Taxa de Precisão', 'Leitura'],
    rows: [
      { tier: 'Tier 1', rank: 'Muito rápida', stat: '< 210 ms', level: 'Faixa 1', accuracy: '98%+', marker: 'Rara; repita para confirmar' },
      { tier: 'Tier 2', rank: 'Rápida', stat: '210 – 249 ms', level: 'Faixa 2', accuracy: '94-97%', marker: 'Acima da faixa típica' },
      { tier: 'Tier 3', rank: 'Boa', stat: '250 – 289 ms', level: 'Faixa 3', accuracy: '88-93%', marker: 'Treinada' },
      { tier: 'Tier 4', rank: 'Típica', stat: '290 – 349 ms', level: 'Faixa 4', accuracy: '78-87%', marker: 'Faixa típica' },
      { tier: 'Tier 5', rank: 'Mais lenta', stat: '≥ 350 ms', level: 'Faixa 5', accuracy: '< 78%', marker: 'Ponto de partida' },
    ],
    note: 'Faixas editoriais para comparar suas próprias sessões no mesmo equipamento; não são percentis de população nem normas clínicas.',
  },
  protocols: {
    title: 'Protocolos de Otimização Neuroplástica',
    description: 'Diretrizes científicas para aprimoramento da velocidade de decisão e precisão motora.',
    items: [
      { title: "Monitore a Regra Superior Ativa", description: "Observe o banner no topo da tela que indica a cor do alvo ativo (ex: TOQUE NO VERMELHO ou TOQUE NO AZUL)." },
      { title: "Discrimine os Alvos Visuais", description: "Assim que os alvos surgirem no campo, identifique instantaneamente qual nó corresponde à regra de cor ativa." },
      { title: "Execute o Toque de Decisão", description: "Clique ou toque no alvo válido com máxima precisão antes que o cronômetro do nó expire." },
      { title: "Adapte-se às Inversões de Regras", description: "Quando a regra no banner alternar, iniba o reflexo anterior imediatamente e passe a tocar na nova cor designada." },
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
      <EliteNeuroSwitchClient
        copy={{
          title: "Teste de Reação",
          subtitle: "Escolha o alvo conforme a cor ativa e treine velocidade de decisão",
          startTitle: "Teste de Reação",
          startSubtitle: "Reação de escolha • Velocidade de decisão",
          stageCaption: "Toque no alvo correspondente à regra ativa. As cores e a regra mudam rapidamente.",
          rulesTitle: "Instruções do Drill e Pontuação",
          aboutTitle: "O que mede o teste de reação?",
          faqTitle: "Perguntas frequentes",
          labels: { score: "Pontos", time: "Tempo", level: "Nível", bestScore: "Melhor pontuação", timeLeft: "Tempo restante", rule: "REGRA", ready: "PREPARE-SE", accuracy: "Precisão", hits: "Acertos", peakLevel: "Nível máximo", maxCombo: "Combo máximo" },
          ruleBanner: { RED: "ALVO VERMELHO", BLUE: "ALVO AZUL" },
          aboutLead: "O tempo de reação de escolha é o intervalo para selecionar a resposta correta entre vários estímulos. Mais alternativas costumam aumentar o tempo de decisão, como descreve a lei de Hick.",
          aboutText: "Este drill combina discriminação visual, leitura da regra e resposta motora. O resultado também inclui atrasos do monitor, do dispositivo de entrada e do navegador. Como a regra muda, cada alvo exige uma nova decisão.",
          aboutCards: [
            { title: "Para quem serve?", desc: "Para jogadores, estudantes e qualquer pessoa que queira praticar decisões visuais rápidas com precisão." },
            { title: "Habilidades treinadas", desc: "Reação de escolha, discriminação visual, execução motora e atenção durante mudanças de regra." },
            { title: "Agilidade na troca", desc: "A cor ativa muda para estimular a atualização rápida do seu mapa de resposta." }
          ],
          rulesItems: [
            { num: "1", text: "Regra ativa", highlight: "VERMELHO / AZUL", result: "Siga o banner superior" },
            { num: "2", text: "Alvo correto", highlight: "+100 pts.", result: "Bônus de combo e nível" },
            { num: "3", text: "Troca de regra", highlight: "Automática", result: "Acelera com o nível" },
            { num: "4", text: "Alvo errado / tempo", highlight: "Zera o combo", result: "−0,8 s com penalidade" }
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
