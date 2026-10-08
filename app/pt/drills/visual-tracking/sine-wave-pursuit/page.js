import SineWavePursuitClient from '@/app/drills/visual-tracking/sine-wave-pursuit/SineWavePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Rastreamento ocular senoidal | SkillDrills",
  description: "Siga um alvo em movimento senoidal na horizontal e na vertical. Exercício gratuito no navegador com atraso de fase e erro de posição.",
  keywords: [
    "rastreamento ocular onda senoidal",
    "perseguição ocular senoidal",
    "seguir alvo em movimento",
    "treino de acompanhamento ocular",
    "atraso de fase visual",
    "ganho de perseguição ocular",
    "exercício de seguimento ocular",
    "rastreamento de alvo oscilante",
    "seguir alvo na vertical",
    "erro de posição do olhar"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/visual-tracking/sine-wave-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/sine-wave-pursuit'),
  },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Rastreamento ocular senoidal | SkillDrills",
    description: "Siga um alvo em movimento senoidal na horizontal e na vertical. Exercício gratuito no navegador com atraso de fase e erro de posição.",
    url: "https://skilldrills.online/pt/drills/visual-tracking/sine-wave-pursuit",
    siteName: 'SkillDrills',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Rastreamento ocular senoidal | SkillDrills",
    description: "Exercício curto para acompanhar um alvo periódico e conferir a diferença de velocidade e o erro na mudança de direção.",
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
      "name": "Exercícios",
      "item": "https://skilldrills.online/pt/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Rastreamento Visual",
      "item": "https://skilldrills.online/pt/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Rastreamento em Onda Senoidal",
      "item": "https://skilldrills.online/pt/drills/visual-tracking/sine-wave-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "dateModified": "2026-09-20",
  "name": "Treino de Movimento Ocular Senoidal",
  "operatingSystem": "Navegador Web",
  "applicationCategory": "GameApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Exercício de rastreamento visual em onda senoidal no navegador para praticar o acompanhamento de um alvo com velocidade variável."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "dateModified": "2026-09-20",
  "name": "Exercício de Rastreamento Senoidal",
  "url": "https://skilldrills.online/pt/drills/visual-tracking/sine-wave-pursuit",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Todos os navegadores modernos",
  "browserRequirements": "Requer suporte a JavaScript e HTML5 Canvas"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "dateModified": "2026-09-20",
  "name": "Sine Wave Pursuit",
  "description": "Exercício de acompanhamento visual contínuo em que o jogador segue um alvo em oscilação senoidal.",
  "genre": ["Treino Visual", "Seguimento Ocular", "Treino de Reflexos"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Navegador Web"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Como Treinar o Rastreamento em Onda Senoidal",
  "description": "Passo a passo para acompanhar um alvo em curvas de oscilação sem perder o ritmo.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Observe a Frequência da Oscilação",
      "text": "Posicione-se a 50-70 cm da tela. Observe os ciclos iniciais da onda para perceber o ritmo e a frequência da oscilação."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Acompanhe o Cruzamento Central",
      "text": "Acompanhe o alvo ao atravessar o eixo central, onde a velocidade dele é maior."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Desacelere nos Pontos de Retorno",
      "text": "Reduza o ritmo com suavidade quando o alvo se aproximar das cristas e vales da onda, para não passar do ponto de retorno."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Evite Saltos Corretivos",
      "text": "Tente manter um acompanhamento contínuo em vez de recorrer a saltos rápidos de recuperação."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é o exercício de rastreamento em onda senoidal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É um exercício em que você acompanha com os olhos um alvo que se move em onda senoidal. Em trajetórias periódicas, o sistema visual consegue antecipar parte do movimento (Robinson, 1965); a página mede apenas a tarefa na tela."
      }
    },
    {
      "@type": "Question",
      "name": "Como o rastreamento senoidal difere do acompanhamento em velocidade constante?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em trajetórias senoidais, a velocidade e a aceleração variam continuamente: o pico de velocidade ocorre no centro, enquanto nos extremos a velocidade cai a zero antes de inverter a direção (Stark et al., 1962)."
      }
    },
    {
      "@type": "Question",
      "name": "O que é a latência de fase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É a diferença de tempo entre o movimento do alvo e o do olhar. Em movimentos periódicos o olhar pode acompanhar com atraso menor do que em trajetórias imprevisíveis, mas o valor medido aqui depende da tela e do navegador."
      }
    },
    {
      "@type": "Question",
      "name": "O que causa as sacadas de recuperação durante o treino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quando o ganho de velocidade do acompanhamento cai abaixo de 1.0, o olhar fica atrás do alvo e um salto rápido de recuperação o reposiciona (Bahill et al., 1980)."
      }
    },
    {
      "@type": "Question",
      "name": "Este exercício ajuda na mira em jogos FPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em jogos como Apex Legends e Overwatch, os adversários fazem deslocamentos rítmicos. O exercício pratica acompanhar um movimento periódico, mas não há garantia de transferência para a mira no jogo."
      }
    },
    {
      "@type": "Question",
      "name": "Serve para esportes de bola?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No tênis, vôlei e futebol, as bolas descrevem arcos. O exercício pratica o acompanhamento visual de um alvo em movimento na tela; não substitui treino esportivo nem garante ganho em campo."
      }
    },
    {
      "@type": "Question",
      "name": "Por que a cabeça deve ficar imóvel durante o treino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Movimentos do pescoço ativam o reflexo vestíbulo-ocular (VOR), que gera contrarrotações dos olhos e mistura o esforço da cabeça com o dos olhos (Leigh & Zee, 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "A taxa de atualização do monitor influencia o exercício?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monitores de 144 Hz ou mais desenham a curva com mais quadros por segundo, o que torna o movimento mais fluido (Woods et al., 2015). Compare sessões apenas no mesmo equipamento."
      }
    },
    {
      "@type": "Question",
      "name": "Este treino senoidal é gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, o SkillDrills disponibiliza esta ferramenta gratuitamente no navegador, sem necessidade de cadastro ou instalação."
      }
    },
    {
      "@type": "Question",
      "name": "Com que frequência devo praticar este exercício?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comece com sessões curtas de 5 a 10 minutos, faça pausas e compare os próprios resultados ao longo do tempo. Não há um prazo fixo de melhora; pare se sentir desconforto."
      }
    }
  ]
};

const guideProps = {
  heading: "Fundamentos Científicos do Rastreamento em Onda Senoidal e Coordenação Ocular",
  intro: [
    "O acompanhamento ocular contínuo (smooth pursuit) é desafiado quando o alvo segue uma oscilação harmônica em vez de um percurso linear previsível. Ao longo de uma curva senoidal, velocidade e aceleração variam: a velocidade é máxima ao cruzar o eixo central e cai a zero nos pontos de retorno, antes de inverter o sentido (Stark et al., 1962; Robinson, 1965).",
    "Estudos clássicos de Robinson (1965) e Barnes (2008) descrevem que o sistema de acompanhamento ocular tem um atraso em trajetórias imprevisíveis e que, em movimentos periódicos, consegue usar a repetição para antecipar parte do trajeto. Neste exercício, esse efeito aparece como menor atraso de fase quando você acompanha o ritmo da onda.",
    "Quando a velocidade do alvo passa do que o acompanhamento consegue seguir, ou quando há cansaço visual, o ganho de velocidade cai. Segundo Rashbass (1961) e Bahill et al. (1980), o olhar então usa saltos corretivos (sacadas), durante os quais a visão fica momentaneamente suprimida. O exercício pratica manter o acompanhamento o mais contínuo possível."
  ],
  benchmarks: {
    title: "Faixas de Referência do Rastreamento Senoidal e Ganho de Velocidade",
    headers: ["Nível de Desempenho", "Ganho de Velocidade", "Latência de Fase", "Sacadas por Ciclo", "Perfil Oculomotor"],
    rows: [
      ["Faixa 1 (Muito alta)", "0.96 – 1.02", "< 15 ms (Sincronização Total)", "0 – 1 (Fluxo Perfeito)", "Acompanhamento muito sincronizado, com pouco atraso de fase."],
      ["Faixa 2 (Alta)", "0.90 – 0.95", "15 – 30 ms", "2 – 3", "Elevada fidelidade de trajetória e mínimas micro-sacadas nos vértices de inversão."],
      ["Faixa 3 (Boa)", "0.82 – 0.89", "31 – 50 ms", "4 – 5", "Bom rastreamento harmônico com ligeira dispersão em oscilações de alta frequência."],
      ["Faixa 4 (Intermediária)", "0.70 – 0.81", "51 – 80 ms", "6 – 8", "Instabilidade nos vértices com frequentes sacadas corretivas para recuperar o alvo."],
      ["Faixa 5 (Inicial)", "< 0.70", "> 80 ms", "> 9", "Dificuldade em antecipar o ritmo harmônico com seguimento estritamente reativo."]
    ],
    note: "Faixas editoriais para comparar suas próprias sessões, não percentis de população nem normas clínicas. ※ Referência para telas 1080p a uma distância de 50–70 cm com velocidades de 1.0x a 1.5x. Avaliado pelo razão de ganho angular e ausência de sacadas corretivas."
  },
  techniques: {
    title: "Quatro Técnicas Fundamentais para o Rastreamento Senoidal Harmónico",
    items: [
      {
        name: "Bloqueio de Fase Harmónica",
        desc: "Utilize os primeiros ciclos da onda para absorver a cadência do movimento. Tente seguir o ritmo da oscilação (Robinson, 1965).",
        tips: "Mantenha uma contagem rítmica mental ('um-dois, um-dois') para eliminar o atraso visual."
      },
      {
        name: "Amortecimento no Ápice",
        desc: "Ao aproximar-se das cristas e vales da curva, reduza gradualmente a força ocular para impedir que o olhar ultrapasse o ponto de inversão.",
        tips: "Imagine o balanço suave de um pêndulo desacelerando até ao cume antes de retornar."
      },
      {
        name: "Aceleração no Cruzamento Central",
        desc: "A velocidade tangencial do alvo atinge o valor mais alto ao atravessar o centro. Aplique um impulso antecipado para não perder o enquadramento foveal.",
        tips: "Acelere a rotação ocular deliberadamente no centro para sustentar o ganho."
      },
      {
        name: "Supressão Disciplinada de Sacadas",
        desc: "Evite pequenos saltos oculares reflexos quando houver pequenas defasagens. Corrija a posição acelerando a velocidade contínua (Bahill et al., 1980).",
        tips: "Conserve os músculos dos olhos relaxados e elásticos como um fluido contínuo."
      }
    ]
  },
  steps: [
    "Sente-se a cerca de 50–70 cm da tela e mantenha a cabeça confortável e estável.",
    "Comece na velocidade mais baixa para perceber a amplitude e o ritmo da onda.",
    "Acompanhe o alvo durante o cruzamento central e reduza suavemente no ponto de retorno.",
    "Repita uma sessão curta e pare se houver cansaço ou desconforto visual.",
    "Confira o ganho de acompanhamento, o atraso de fase e o erro de posição ao final."
  ],
  audience: "Pessoas que querem praticar o acompanhamento ocular de alvos periódicos em uma tela, sem substituir avaliação profissional.",
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('stark1962', 'robinson1965', 'rashbass1961', 'bahill1980', 'barnes2008', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Exercício de seguimento ocular lento" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimento de alvo evasivo" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supressão de imagens residuais" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Exercício ocular em oito" },
    { href: "/pt/drills/visual-tracking/momentum-teleport-pursuit", label: "Rastreamento de alvo com salto" }
  ]
};

export default function SineWavePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SineWavePursuitClient copy={{ title: "Rastreamento ocular senoidal", subtitle: "Siga um alvo periódico na horizontal e na vertical" }} />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
