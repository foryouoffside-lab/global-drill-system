import FlowStateClient from '@/app/drills/fps/flow-state/FlowStateClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Treino de foco FPS | Mira em flow | SkillDrills",
  description: "Treino grátis de foco para FPS no navegador: mantenha o ritmo da mira, ajuste o desafio ao seu nível e acompanhe a estabilidade do tracking.",
  keywords: [
    "treino de foco FPS",
    "estado de flow jogos",
    "concentração para jogar",
    "mira em estado de flow",
    "tracking suave",
    "como entrar no flow Valorant",
    "foco no Valorant",
    "treino de resistência mental FPS",
    "treino de mira grátis online",
    "como não perder o foco CS2"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/flow-state",
    languages: getAlternateLanguages('/drills/fps/flow-state'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Treino de foco FPS | Mira em flow | SkillDrills",
    description: "Mantenha o ritmo da mira e reduza distrações neste treino grátis de foco FPS. Ajuste o desafio e acompanhe seu tracking.",
    url: "https://skilldrills.online/pt/drills/fps/flow-state",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Treino de foco FPS | Mira em flow | SkillDrills",
    description: "Mantenha o ritmo da mira e reduza distrações neste treino grátis de foco FPS. Ajuste o desafio e acompanhe seu tracking.",
  },
};

export default function FlowStatePtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos de FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Treino de foco FPS", "item": "https://skilldrills.online/pt/drills/fps/flow-state" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Treino de foco FPS",
    "url": "https://skilldrills.online/pt/drills/fps/flow-state",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requer navegador com suporte a HTML5 Canvas e JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Treinador de foco sustentado e estado de flow para jogos de tiro. Elimine distrações mentais e aperfeiçoe a suavidade de tracking no mouse."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Flow_(psychology)"],
    "name": "Treino de foco FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Simulador psicomotor para indução do estado de zona e treino de atenção contínua para atletas de esports e jogadores de FPS.",
    "genre": "Treino FPS / Foco Mental",
    "url": "https://skilldrills.online/pt/drills/fps/flow-state",
    "dateModified": "2026-09-20",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Treino de foco FPS",
    "url": "https://skilldrills.online/pt/drills/fps/flow-state",
    "description": "Exercício de pontaria com curvas Bézier orgânicas projetado para induzir foco ininterrupto e eliminar hesitações motoras.",
    "gamePlatform": "Web Browser",
    "genre": ["Treino FPS", "Treinador de Concentração"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-09-20"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-09-20",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o estado de flow nos jogos de tiro FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O estado de flow (ou 'entrar na zona') é um estado mental ótimo onde o desafio da partida e a habilidade do jogador se equilibram perfeitamente (Csikszentmihalyi, 1990), eliminando dúvidas e automatizando as decisões motoras."
        }
      },
      {
        "@type": "Question",
        "name": "Como entrar na Zona durante partidas de Valorant e CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alcance o estado de zona estabelecendo respiração ritmada, eliminando estímulos externos distratores e focando a visão suavemente na trajetória dos alvos em vez de pensar nos comandos manuais."
        }
      },
      {
        "@type": "Question",
        "name": "O que é a hipofrontalidade transitória na pontaria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É a desativação seletiva e temporária do córtex pré-frontal dorsolateral durante atividades de alto desempenho (Dietrich, 2004), permitindo que os gânglios basais e o cerebelo executem a mira sem interferência do ego ou de autocrítica."
        }
      },
      {
        "@type": "Question",
        "name": "Por que a mira oscila ou treme quando ficamos nervosos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O estresse ativa o sistema nervoso simpático, aumentando o tônus muscular em agonistas e antagonistas simultaneamente. Isso gera microcontrações espasmódicas que quebram o rastreamento ocular suave."
        }
      },
      {
        "@type": "Question",
        "name": "Como o tracking em curvas Bézier estimula o foco contínuo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As curvas Bézier geram vetores de aceleração contínuos e sem quebras abruptas, forçando o sistema oculomotor a manter o rastreamento foveal suave (Krauzlis, 2004) e evitando sacadas desnecessárias."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a sensibilidade recomendada para treinos de flow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilize sua sensibilidade nativa em jogo com a aceleração do Windows desativada. O treinamento de flow busca consolidar a memória muscular que você usa nas partidas competitivas."
        }
      },
      {
        "@type": "Question",
        "name": "Devo focar no centro da retícula ou antecipar o alvo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mantenha o foco visual ligeiramente à frente do centro do alvo na direção do vetor de deslocamento. Isso ativa os circuitos pré-motores preditivos e reduz a fadiga ocular."
        }
      },
      {
        "@type": "Question",
        "name": "Por que perdemos precisão após várias horas consecutivas de jogo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sessões prolongadas esgotam os neurotransmissores da rede frontoparietal de atenção (Posner & Petersen, 1990). O rastreamento suave se degrada em movimentos aos solavancos quando a fadiga se instala."
        }
      },
      {
        "@type": "Question",
        "name": "Quais hábitos evitam a perda de foco entre as rodadas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Faça pausas de 30 a 60 segundos olhando para um ponto distante, beba água regularmente e solte os ombros e o punho para desativar a tensão isométrica acumulada."
        }
      },
      {
        "@type": "Question",
        "name": "Esse treino melhora a concentração no trabalho ou estudos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A capacidade de sustentar atenção contínua e inibir distrações periféricas é uma função executiva transferível para tarefas intelectuais profundas, como programação e leitura técnica."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Treinar o Foco e Induzir o Estado de Flow em Jogos FPS",
    "description": "Instruções passo a passo para alcançar imersão mental profunda e rastreamento motor ininterrupto.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Configurar a Sensibilidade In-Game",
        "text": "Selecione seu jogo principal e insira a sensibilidade exata para manter perfeita equivalência neuromuscular.",
        "url": "https://skilldrills.online/pt/drills/fps/flow-state#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Ativar Entrada RAW e Trava de Cursor",
        "text": "Clique no botão de início para ativar o modo de tela cheia e capturar o cursor.",
        "url": "https://skilldrills.online/pt/drills/fps/flow-state#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Antecipar a Trajetória da Curva Bézier",
        "text": "Fixe o olhar levemente à frente do alvo acompanhando a curvatura do movimento em vez de persegui-lo com atraso.",
        "url": "https://skilldrills.online/pt/drills/fps/flow-state#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Sustentar Sequências Contínuas na Zona",
        "text": "Mantenha a retícula dentro do raio do alvo para acumular o medidor de flow e alcançar bônus multiplicadores.",
        "url": "https://skilldrills.online/pt/drills/fps/flow-state#step-4"
      }
    ]
  };

  const copyPt = {
    h1Keyword: "Treino de foco FPS",
    h1Suffix: " – Mira em flow",
    statScore: "Pontuação",
    statTime: "Tempo Restante",
    statAccuracy: "Precisão de Rastreamento",
    statBestScore: "Recorde Pessoal",
    startTitle: "Treino de Foco FPS e Estado de Flow",
    startSubtitle: "Entrada RAW do mouse • Resistência de foco • Dificuldade adaptativa",
    getReady: "Preparar",
    pausedTitle: "Foco Pausado",
    pausedSubtitle: "Clique para retomar (a trava do cursor será reativada)",
    stageCaption: "Acompanhe a trajetória de curvas Bézier sem perder a cadência e mantenha o ritmo de mira contínuo.",
    rulesTitle: "Regras de Treino e Sistema de Pontos",
    rulesItems: [
      { num: "1", text: "Alinhamento Contínuo", highlight: "+10 PTS (+0,4s/s)", result: "Foco fixado no alvo móvel" },
      { num: "2", text: "Multiplicador de Flow", highlight: "Até 3,0x pontos", result: "Cadeia contínua de foco" },
      { num: "3", text: "Progressão de Nível", highlight: "+1 Nivel / 1400 PTS", result: "Velocidade Bézier adaptativa" },
      { num: "4", text: "Quebra de Concentração", highlight: "1,0s fora da zona", result: "Reinício de sequência (-0,6s)" }
    ],
    aboutTitle: "Sobre o Treinador de Estado de Flow e Foco FPS"
  };

  const flowStateGuide = {
    heading: "Guia de Foco FPS e Benchmarks do Estado de Flow",
    intro: [
      "O treino de foco FPS ensina você a acompanhar um alvo com ritmo estável, reduzir distrações e ajustar a dificuldade ao próprio nível. O drill mede a precisão do tracking e a resistência da atenção; ele não promete produzir flow sob comando, mas mostra quando a concentração e o controle começam a cair.",
      "A hipótese da hipofrontalidade transitória (Dietrich, 2004) esclarece o mecanismo neural desse fenômeno: ao reduzir temporariamente o processamento analítico no córtex pré-frontal dorsolateral (DLPFC), o cérebro transfere o comando para os circuitos dos gânglios da base e cerebelo. Em shooters competitivos, esse mecanismo liberta a mira da hesitação consciente e permite microajustes motores ultraprecisos.",
      "Com a cronometria de alta resolução performance.now() da API do navegador (Woods et al., 2015) e trajetórias contínuas baseadas em curvas Bézier orgânicas (Krauzlis, 2004; Posner & Petersen, 1990), esta ferramenta fortalece a capacidade de concentração sem exigir downloads ou configurações complexas.",
      "Metodologia de medição no seu dispositivo: cada evento é registrado localmente com o relógio de alta precisão do navegador, sem envio de métricas para servidores remotos. Lembre-se de que os navegadores discretizam o tempo em ~1 ms por proteção contra exploits de temporização, e os monitores atualizam a tela em intervalos regulares (16,7 ms a 60 Hz contra 4,1 ms a 240 Hz). Portanto, acompanhe sua evolução comparando sessões no mesmo hardware."
    ],
    benchmarks: {
      title: "Estágios de Indução de Flow e Níveis de Resistência Atencional",
      headers: ["Nível", "Dimensão do Flow", "Indicador Fisiológico", "Mecanismo Cognitivo", "Meta de Desempenho"],
      rows: [
        ["Nível 1", "Orientação da Atenção", "Gating sensorial e fixação foveal", "A rede de alerta de Posner inibe distrações ambientais", "Alinhamento foveal com o alvo em menos de 200 ms"],
        ["Nível 2", "Equilíbrio Desafio-Habilidade", "Calibração dinâmica de velocidade", "Canal de Csikszentmihalyi: velocidade ajustada à capacidade motora", "Manter 70% a 80% de permanência contínua sobre o alvo"],
        ["Nível 3", "Rastreamento Suave Contínuo", "Sincronização de velocidade foveal", "Vias corticoestriatais de Krauzlis eliminam sacadas corretivas", "Mais de 85% de contato estável em curvas Bézier complexas"],
        ["Nível 4", "Hipofrontalidade Transitória", "Desativação relativa do DLPFC", "Hipótese de Dietrich: automação reflexa sem interferência do ego", "Mais de 30 segundos ininterruptos em fluxo sem hesitações"],
        ["Nível 5", "Resistência Máxima de Foco", "Imunidade à fadiga executiva", "A rede executiva previne degradação do tempo de reação", "Sessões de mais de 60 segundos com multiplicador máximo de combo"]
      ],
      note: "Parâmetros sintetizados a partir da psicologia do flow (Csikszentmihalyi, 1975, 1990), neurobiologia cognitiva (Dietrich, 2004), rastreamento ocular suave (Krauzlis, 2004) e redes atencionais humanas (Posner & Petersen, 1990)."
    },
    techniques: {
      title: "Protocolos Científicos para Induzir o Flow nos Jogos",
      items: [
        {
          name: "Antecipação Tangencial (Predictive Pursuit)",
          desc: "Em vez de perseguir o centro do alvo com atraso, projete o foco 2 a 3 graus à frente na direção do movimento. Essa fixação preditiva ativa os circuitos motores antecipatórios e reduz o esforço ocular.",
          tips: "Mantenha a visão periférica atenta às mudanças sutis de curvatura do alvo."
        },
        {
          name: "Relaxamento Muscular e Respiração Diafragmática",
          desc: "Tensão excessiva nos flexores do antebraço prejudica a fluidez. Pratique respirações profundas para diminuir a atividade simpática antes de rodadas decisivas.",
          tips: "Solte a pegada do mouse no início de cada curva ampla."
        },
        {
          name: "Eliminação da Autocrítica Consciente",
          desc: "Pensar no placar durante o confronto reativa o DLPFC e bloqueia a memória motora automatizada. Concentre-se unicamente no vetor de movimento do adversário.",
          tips: "Encare os erros como dados de ajuste imediato, não como falhas pessoais."
        },
        {
          name: "Gestão de Pausas e Hidratação",
          desc: "O cérebro consome glicose em taxas elevadas durante períodos de foco intenso. Pequenos goles de água e pausas de 60 segundos restauram a clareza mental.",
          tips: "Faça uma pausa a cada 45 a 60 minutos de partidas competitivas intensas."
        }
      ]
    },
    scientificPrinciples: {
      title: "Fundamentos Psiconeurológicos do Estado de Flow",
      items: [
        {
          name: "Teoria do Canal de Flow (Csikszentmihalyi)",
          desc: "Quando uma tarefa é fácil demais surge o tédio; quando é difícil em excesso sobrevém a ansiedade. O flow reside na faixa intermediária dinâmica onde a exigência testa o limite máximo das habilidades."
        },
        {
          name: "Modelo de Redes de Atenção de Posner",
          desc: "A atenção humana opera através de três redes: alerta, orientação e controle executivo. O treino de flow harmoniza essas redes, suprimindo ruídos sensoriais irrelevantes."
        },
        {
          name: "Automação Subcortical e Eficiência Motora",
          desc: "Ao suprimir o controle reflexivo deliberado, o sistema nervoso central consome menos energia metabólica e responde a estímulos de movimento com velocidade máxima."
        }
      ]
    },
    steps: [
      "Selecione sua sensibilidade de jogo habitual pelo seletor universal para treinar com uma sensibilidade familiar.",
      "Clique em 'Iniciar' para ativar a tela cheia com bloqueio do ponteiro (Pointer Lock).",
      "Fixe a atenção visual no alvo em movimento contínuo ao longo de curvas Bézier orgânicas na tela.",
      "Mantenha a mira dentro do raio do alvo para preencher a barra de Flow e entrar na Zona.",
      "Sustente sequências ininterruptas de foco para multiplicar seus pontos e desenvolver resistência à fadiga mental.",
    ],
    audience: "Jogadores competitivos de FPS e shooters táticos (Valorant, CS2, Apex Legends, Overwatch 2, Warzone), atletas de eSports em aquecimento pré-campeonato e profissionais que buscam aprimorar atenção sustentada e resistência a distrações.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'dietrich2004'),
    related: [
      { href: "/pt/drills/reaction-speed/fps-tracking-trainer", label: "Treino de Tracking FPS" },
      { href: "/pt/drills/fps/anti-zigzag-movement-trainer", label: "Treino Anti-Zigzag" },
      { href: "/pt/drills/fps/anti-strafe-jitter-duel", label: "Duelo Anti-Strafe Jitter" },
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/reaction-speed/visual-tracking-speed-test", label: "Teste de Velocidade de Rastreamento Visual" }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <FlowStateClient copy={copyPt} />
      <RelatedDrills />
      <DrillGuide guide={flowStateGuide} />
      <DrillFooter />
    </>
  );
}
