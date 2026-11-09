import StrafeTrackingClient from '@/app/drills/fps/strafe-tracking/StrafeTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Treino de Tracking Online | Mira em Movimento | SkillDrills",
  description: "Treino de Tracking grátis no navegador: mantenha a mira em um alvo que faz strafe para os lados e muda de direção sem aviso. Mira em movimento para CS2 e Apex.",
  keywords: [
    "treino de tracking",
    "treino de tracking online",
    "treino de tracking valorant",
    "treino de tracking cs2",
    "treino de mira tracking",
    "tracking de strafe",
    "treinar mira em movimento",
    "mira de tracking reativo",
    "como treinar tracking apex",
    "rastreamento ADAD FPS",
    "treino de mira reativa",
    "treinador de tracking grátis"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/strafe-tracking",
    languages: getAlternateLanguages('/drills/fps/strafe-tracking'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Treino de Tracking Online | Mira em Movimento | SkillDrills",
    description: "Treino de Tracking grátis no navegador: mantenha a mira em um alvo que faz strafe para os lados e muda de direção sem aviso. Mira em movimento para CS2 e Apex.",
    url: "https://skilldrills.online/pt/drills/fps/strafe-tracking",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Treino de Tracking Online | Mira em Movimento | SkillDrills",
    description: "Treino de Tracking grátis no navegador: mantenha a mira em um alvo que faz strafe para os lados e muda de direção sem aviso. Mira em movimento para CS2 e Apex.",
  },
};

export default function StrafeTrackingPtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Treino de Strafe Tracking", "item": "https://skilldrills.online/pt/drills/fps/strafe-tracking" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Treino de Strafe Tracking FPS",
    "url": "https://skilldrills.online/pt/drills/fps/strafe-tracking",
    "description": "Treinador online de strafe tracking reativo, leitura de inversão de movimento e resposta motora de perseguição suave para jogos de tiro competitivo.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requer suporte a HTML5 Canvas e Pointer Lock API",
    "dateModified": "2026-11-09"
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "Treino de Strafe Tracking FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Treinador online de strafe tracking reativo, leitura de inversão de movimento e resposta motora de perseguição suave para jogos de tiro competitivo.",
    "genre": "Treinamento FPS / Tracking Reativo",
    "url": "https://skilldrills.online/pt/drills/fps/strafe-tracking",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Treino de Strafe Tracking FPS",
    "url": "https://skilldrills.online/pt/drills/fps/strafe-tracking",
    "description": "Treinador online de strafe tracking reativo, leitura de inversão de movimento e resposta motora de perseguição suave para jogos de tiro competitivo.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["Treinamento FPS", "Aim Trainer", "Tracking Reativo"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é strafe tracking em jogos de tiro FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strafe tracking é a habilidade neuromuscular de manter a mira travada em um adversário que se desloca lateralmente em padrões erráticos e imprevisíveis (ADAD). Ele combina regulação contínua de velocidade de perseguição suave com rápida compensação motora nas inversões de sentido."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre tracking puramente reativo e perseguição suave previsível?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A perseguição suave previsível ocorre quando o alvo se move em velocidade e trajetória constantes, permitindo ao córtex visual antecipar a rota. O tracking reativo exige leitura instantânea de desacelerações e quebras de ritmo sem antecipação às cegas, dependendo de feedback retiniano contínuo (Krauzlis, 2004)."
        }
      },
      {
        "@type": "Question",
        "name": "Como a tensão muscular no braço prejudica o tracking em duelos ADAD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A tensão isométrica excessiva no antebraço e punho recruta músculos antagonistas, provocando tremores e aumentando o tempo mecânico para parar e inverter o mouse. Uma pegada mais relaxada costuma facilitar inversões limpas; teste o que funciona para você."
        }
      },
      {
        "@type": "Question",
        "name": "Devo olhar para a retícula de mira ou diretamente para o modelo do inimigo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fixe sua visão fóvea central diretamente no centro de massa ou tronco do oponente. Land & McLeod (2000) e Krauzlis (2004) descrevem o papel do deslocamento do alvo na retina na perseguição; a visão periférica e a propriocepção ajudam a alinhar a mira."
        }
      },
      {
        "@type": "Question",
        "name": "Por que o tempo para matar (TTK) torna o strafe tracking tão decisivo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em jogos de TTK elevado como Apex Legends, Overwatch 2 e The Finals, os oponentes resistem a múltiplos tiros enquanto esquivam com mobilidade intensa. Nesses cenários, a porcentagem de tempo de mira no alvo (uptime) é o fator primordial que define a vitória nos confrontos diretos."
        }
      },
      {
        "@type": "Question",
        "name": "Qual sensibilidade de mouse é ideal para o treino de strafe tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não existe valor universal. Muitos jogadores de tracking usam algo entre 28 cm e 42 cm por giro de 360°; o mais importante é manter a mesma sensibilidade para comparar suas sessões."
        }
      },
      {
        "@type": "Question",
        "name": "A aceleração do mouse atrapalha o tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em geral, sim: a aceleração faz o mesmo movimento físico resultar em distâncias diferentes conforme a velocidade da mão, o que dificulta criar memória muscular. Para treinar tracking, use no jogo a mesma configuração de sensibilidade e deixe a aceleração do mouse desligada."
        }
      },
      {
        "@type": "Question",
        "name": "O treino de strafe tracking no navegador realmente melhora a mira nos jogos instalados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pode ajudar como prática extra de perseguição e leitura de inversões, mas não há garantia de transferência direta para o jogo. O treino usa a Pointer Lock API e um multiplicador de sensibilidade ajustado em /drills; compare resultados sempre com o mesmo mouse e configuração."
        }
      },
      {
        "@type": "Question",
        "name": "O que fazer quando perco o contato com o alvo durante um strafe longo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em vez de acelerar a mira descontroladamente, execute uma micro-sacada corretiva rápida diretamente ao centro do alvo e relaxe instantaneamente a pegada de volta à perseguição suave, seguindo o modelo clássico de transição de Rashbass (1961)."
        }
      },
      {
        "@type": "Question",
        "name": "Quantos minutos diários de treino de tracking são recomendados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sessões de 15 a 20 minutos com pausas regulares costumam render mais que treinos exaustivos e evitam fadiga no antebraço. Pare se sentir dor no punho."
        }
      },
      {
        "@type": "Question",
        "name": "Como funcionam a pontuação, o combo e o tempo neste treino de tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enquanto a mira está sobre o alvo, você ganha 50 pontos base a cada 0,25 s (multiplicados pelo combo e pelo nível) e +0,1 s no relógio (máximo de 60 s restantes). Cada segundo sem perder o alvo soma 1 ao combo, cujo multiplicador vai até 3,0×. Ao sair do alvo, o combo volta a 0 na hora. A rodada começa com 45 s e termina em 0. Não há clique: só o movimento do mouse conta."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Dominar o Strafe Tracking Reativo",
    "description": "Instruções passo a passo para calibrar sensibilidade, eliminar overshoot e dominar o tracking de alvos evasivos.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrar Sensibilidade do Jogo",
        "text": "Ajuste o multiplicador de sensibilidade nas configurações de /drills e clique em Iniciar Treino; o ponteiro é travado ao fim da contagem regressiva.",
        "url": "https://skilldrills.online/pt/drills/fps/strafe-tracking#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Fixar o Olhar no Centro do Alvo",
        "text": "Mantenha a visão fóvea central travada no modelo inimigo em vez de observar a retícula de mira.",
        "url": "https://skilldrills.online/pt/drills/fps/strafe-tracking#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Sincronizar Velocidade Lateral Suave",
        "text": "Deslize o mouse com pressão relaxada no punho e antebraço, mantendo contato constante para acumular multiplicadores de combo.",
        "url": "https://skilldrills.online/pt/drills/fps/strafe-tracking#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Reagir com Precisão às Inversões de Sentido",
        "text": "Evite adivinhações prematuras; espere a confirmação visual da mudança de direção antes de inverter a trajetória do mouse.",
        "url": "https://skilldrills.online/pt/drills/fps/strafe-tracking#step-4"
      }
    ]
  };

  const strafeTrackingGuide = {
    heading: "Guia de Tracking e Mira Reativa em Movimento",
    intro: [
      "Este treino de tracking desenvolve a perseguição lateral reativa contra evasões erráticas em ADAD. Em Apex Legends, Overwatch 2, The Finals e Call of Duty, o tempo de mira contínua no alvo ajuda a manter dano enquanto o adversário muda de direção.",
      "Os fundamentos neurofisiológicos da perseguição visual foram detalhados por Richard J. Krauzlis (2004), revelando como o encéfalo coordena movimentos oculares de perseguição suave através de circuitos recíprocos entre o córtex visual de movimento (MT/V5), a área temporal superior medial (MST) e o campo ocular frontal (FEF). Quando um alvo se desloca, essas estruturas calculam em tempo real o erro de velocidade retiniana para orientar os subsistemas motores ocular e manual em sincronia contínua.",
      "Em descoberta clássica da psicofísica visual, Cyril Rashbass (1961) demonstrou que a perseguição suave e os movimentos sacádicos são controlados por subsistemas fisiológicos distintos: as sacadas respondem ao deslocamento posicional do erro, enquanto a perseguição suave reage estritamente à velocidade retiniana (escorregamento óptico). Em confrontos dinâmicos, jogadores que tentam 'adivinhar' inversões acionam sacadas corretivas involuntárias, resultando em sobrepasso (overshoot) e instabilidade na mira.",
      "Ao integrar o modelo de atenção orientada de Michael I. Posner (1990), os paradigmas de rastreamento espacial de C. Shawn Green & Daphne Bavelier (2003) e a cronometria digital de baixa latência (Woods et al., 2015), este exercício condiciona o praticante a suprimir adivinhações precipitadas, relaxar a musculatura do antebraço e executar perseguição suave puramente reativa em vetores dinâmicos.",
      "Como isto é mensurado: cada evento é registrado pelo relógio de alta resolução performance.now() do navegador, rodando estritamente no seu dispositivo — nenhum dado é enviado externamente. Fatores do hardware: os timers de navegadores são mitigados para cerca de 1 ms, e a tela quantiza os estímulos de acordo com a taxa de atualização — aproximadamente 16,7 ms a 60 Hz, 6,9 ms a 144 Hz e 4,1 ms a 240 Hz (Woods et al., 2015). O polling rate do mouse adiciona cerca de 8 ms a 125 Hz contra 1 ms a 1000 Hz. Trate variações inferiores a 5 ms como ruído e compare seus dados no mesmo hardware."
    ],
    benchmarks: {
      title: "Faixas de Treino de Tracking (referência SkillDrills)",
      headers: ["Faixa", "% Tempo no Alvo", "Maior Sequência Contínua", "O que costuma acontecer"],
      rows: [
        ["Faixa 1 (Muito alta)", "85% – 95%+", "> 7 s", "Rastreamento muito consistente; quase sem overshoot contra strafes rápidos"],
        ["Faixa 2 (Alta)", "72% – 85%", "4,5 – 7 s", "Muito tempo de mira contínua; recuperação rápida após mudanças de sentido"],
        ["Faixa 3 (Boa)", "58% – 72%", "2,5 – 4,5 s", "Tracking linear sólido; perde o alvo por instantes em inversões bruscas"],
        ["Faixa 4 (Intermediária)", "42% – 58%", "1,2 – 2,5 s", "Previsão precipitada recorrente; a mira frequentemente ultrapassa o alvo antes de efetuar sacadas lentas de correção"],
        ["Faixa 5 (Inicial)", "<42%", "< 1,2 s", "Oscilação acentuada na mira; dificuldade em acompanhar a aceleração lateral; cursor fica sistematicamente atrás do alvo"]
      ],
      note: "Faixas de prática da SkillDrills para comparar suas próprias sessões, não percentis de população nem normas de pesquisa. O % de tempo no alvo é a fração de quadros com a mira sobre o alvo; a maior sequência contínua é o tempo máximo sem perder o alvo."
    },
    techniques: {
      title: "Protocolos Baseados em Evidências para Strafe Tracking Reativo",
      items: [
        {
          name: "Leitura Reativa em Vez de Premonição",
          desc: "Controle o impulso de adivinhar quando o adversário mudará de sentido. Tentar prever movimentos contra jogadores experientes provoca graves desvios quando eles quebram o padrão. Adote postura estritamente reativa: deixe o córtex visual identificar a inversão real antes de emitir a ordem motora.",
          tips: "Fixe a visão na cintura ou centro de gravidade do alvo; a desaceleração do tronco se manifesta antes da mudança dos pés."
        },
        {
          name: "Relaxamento da Tensão Muscular",
          desc: "A rigidez isométrica no punho ou antebraço prejudica a fluidez e atrasa o tempo de resposta nas trocas direcionais. Com os músculos contraídos, a inversão tende a sair mais lenta e travada.",
          tips: "Mantenha uma empunhadura leve (aproximadamente 30% da força máxima) para possibilitar pivôs de mira sem resistência."
        },
        {
          name: "Ancoragem da Fóvea Central no Alvo",
          desc: "Mantenha a fixação ocular diretamente no modelo em movimento e não na retícula. Land & McLeod (2000) e Krauzlis (2004) descrevem como o deslocamento do alvo na retina alimenta a perseguição. Olhar para a própria mira tende a deixar o movimento mais travado.",
          tips: "Deixe a visão periférica e a memória proprioceptiva posicionarem o retículo enquanto a fóvea analisa a velocidade inimiga."
        },
        {
          name: "Calibração de Sacadas de Recuperação",
          desc: "Quando o alvo escapar do alcance durante um strafe longo, faça uma micro-sacada rápida e precisa de volta ao centro e retome imediatamente a perseguição suave. Cyril Rashbass (1961) provou que o sistema visual alterna suavemente entre sacadas e perseguição quando o erro posicional supera o de velocidade.",
          tips: "Ajuste o cursor com um estalo limpo para a frente do alvo e relaxe o braço de imediato no mesmo vetor."
        }
      ]
    },
    steps: [
      "Ajuste o multiplicador de sensibilidade nas configurações de /drills e clique em Iniciar Treino; o cursor é travado após a contagem regressiva.",
      "Fixe os olhos no modelo luminoso enquanto ele inicia seus movimentos laterais imprevisíveis pela tela.",
      "Deslize o mouse com pressão controlada e suave no antebraço, acompanhando a velocidade horizontal sem interrupções.",
      "Mantenha o cursor sobre o alvo: cada segundo sem perdê-lo sobe o combo (multiplicador até 3,0x) e cada 1400 pontos avança um nível.",
      "Analise a precisão percentual e o tempo fora do alvo no painel final para identificar fraquezas em trocas de direção."
    ],
    audience: "Jogadores competitivos de Apex Legends, Overwatch 2, The Finals, Call of Duty Warzone, Valorant e CS2 que buscam disparos contínuos estáveis, leitura rápida de mudanças de rota e controle motor reativo de alto nível.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'rashbass1961', 'land2000'),
    related: [
      { href: "/pt/drills/fps/pro-smooth-pursuit", label: "Tracking Suave: alvos em curva" },
      { href: "/pt/drills/fps/anti-strafe-jitter-duel", label: "Duelo Anti-Strafe Jitter" },
      { href: "/pt/drills/fps/anti-zigzag-movement-trainer", label: "Treino de Mira Anti-Zigzag" },
      { href: "/pt/drills/fps/micro-correction-precision", label: "Treino de Precisão e Micro-Correção" },
      { href: "/pt/drills/fps/recoil-control", label: "Treino de Controle de Recuo" }
    ]
  };

  const copyPt = {
    h1Prefix: null,
    h1Keyword: "Treino de Tracking",
    h1Suffix: " – Mira em Movimento FPS",
    caption: "O strafe tracking é a habilidade de manter o retículo travado em um oponente com movimentação errática. A perseguição suave humana opera com precisão até cerca de 30°/s, e cada inversão brusca exige uma sacada de correção cerca de 100–130 ms após o estímulo (Rashbass, 1961; Krauzlis, 2004). Desenvolva sincronização de velocidade e resposta imediata.",
    statStatus: "Status",
    statusTracking: "RASTREAMENTO",
    statusComplete: "CONCLUÍDO",
    statusStandby: "EM ESPERA",
    statTime: "Tempo Restante",
    statAccuracy: "Precisão de Tracking",
    statBest: "Melhor Pontuação",
    statScore: "Pontuação",
    pausedTitle: "Jogo Pausado",
    pausedPrompt: "Clique para retomar — o bloqueio do cursor será reativado.",
    startTitle: "Treino de Tracking",
    startSubtitle: "Mira Travada · Progressão Contínua de Níveis",
    startButtonText: "Iniciar Treino",
    getReady: "PREPARE-SE",
    statLockStreak: "Maior Sequência Contínua",
    statPeakLevel: "Nível Máximo",
    statOffTarget: "Tempo Fora do Alvo",
    playAgainText: "Treinar Novamente",
    shareText: "Compartilhar Resultado",
    exitText: "Voltar ao Início",
    bottomCaption: "Mantenha a retícula sobre o alvo luminoso enquanto ele inverte bruscamente de sentido e varia de aceleração pelo cenário.",
    rulesTitle: "Instruções do Treino e Calibração",
    rulesItems: [
      { num: "1", text: "Mira no Alvo", highlight: "+50 PTS / 0,25s (+0,4s/s)", result: "×Mult de Combo" },
      { num: "2", text: "1s Sem Perder", highlight: "Combo +1, até 3,0×", result: "Multiplicador Máx" },
      { num: "3", text: "Progressão de Nível", highlight: "+1 Nível / 1400 PTS", result: "Strafe Adaptativo" },
      { num: "4", text: "Fora do Alvo", highlight: "Penalidade", result: "Combo zera na hora" }
    ],
    aboutTitle: "Sobre Tracking e Mira em Movimento",
    whatIsTitle: "O que é o Treino de Strafe Tracking?",
    whatIsLead: "O strafe tracking consiste em manter a retícula sobre um adversário que alterna direções de forma imprevisível. A perseguição suave humana acompanha com precisão movimentos até aproximadamente 30°/s, e cada inversão de direção custa uma sacada de recuperação após 100–130 ms (Rashbass, 1961; Krauzlis, 2004).",
    aboutIntro: [
      "Nos confrontos de curta e média distância com TTK prolongado, os jogadores utilizam strafes em ADAD e variações de ritmo para desviar dos disparos. Quem depende de adivinhações costuma perder contato constante com o alvo.",
      "Este treino condiciona os reflexos visomotores a reagirem puramente à aceleração real do alvo, eliminando a tensão muscular e elevando a consistência dos seus disparos."
    ],
    aboutCards: [
      {
        title: "Perseguição Suave Ocular",
        description: "Treina a mão a acompanhar a velocidade do alvo na tela."
      },
      {
        title: "Redução de Latência de Inversão",
        description: "Treina a transição imediata de desaceleração e inversão vetorial sem sobrepasso ou congelamento motor."
      },
      {
        title: "Consistência sob TTK Longo",
        description: "Aumenta a porcentagem contínua de contato com o alvo, essencial para vencer duelos em Apex Legends e Overwatch 2."
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
      <StrafeTrackingClient copy={copyPt} />
      <DrillGuide guide={strafeTrackingGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
