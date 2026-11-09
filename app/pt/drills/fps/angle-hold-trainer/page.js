import AngleHoldClient from '@/app/drills/fps/angle-hold-trainer/AngleHoldClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Posicionamento de Mira: Segurar Ângulo no FPS | SkillDrills",
  description: "Posicionamento de mira grátis: segure o ângulo na altura da cabeça e clique quando o alvo sair da parede. Distância da quina e reação ao peek (Valorant, CS2).",
  keywords: [
    "posicionamento de mira",
    "crosshair placement",
    "segurar ângulo",
    "como segurar angulo fps",
    "treino de marcar pixel valorant",
    "pre aim treino cs2",
    "peeker advantage como marcar",
    "distancia da mira na parede",
    "mira na altura da cabeca",
    "treino de reflexo para esquinas"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/angle-hold-trainer",
    languages: getAlternateLanguages('/drills/fps/angle-hold-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Posicionamento de Mira: Segurar Ângulo no FPS | SkillDrills",
    description: "Posicionamento de mira grátis: segure o ângulo na altura da cabeça e clique quando o alvo sair da parede. Distância da quina e reação ao peek (Valorant, CS2).",
    url: "https://skilldrills.online/pt/drills/fps/angle-hold-trainer",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Posicionamento de Mira: Segurar Ângulo no FPS | SkillDrills",
    description: "Posicionamento de mira grátis: segure o ângulo na altura da cabeça e clique quando o alvo sair da parede. Distância da quina e reação ao peek (Valorant, CS2).",
  },
};

export default function PortugueseAngleHoldPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos de FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Posicionamento de mira - segurar ângulo", "item": "https://skilldrills.online/pt/drills/fps/angle-hold-trainer" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Posicionamento de mira - segurar ângulo",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Treinador online de posicionamento de mira, marcação defensiva de cantos e pré-mira para jogadores de FPS tático.",
    "genre": "Treino de FPS / Posicionamento de Mira",
    "url": "https://skilldrills.online/pt/drills/fps/angle-hold-trainer",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Posicionamento de mira - segurar ângulo",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Simulador interativo de retenção de ângulos e disciplina de mira para neutralizar a vantagem do peeker em CS2 e Valorant.",
    "genre": "Treino de FPS / Posicionamento de Mira",
    "url": "https://skilldrills.online/pt/drills/fps/angle-hold-trainer",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Posicionamento de mira - segurar ângulo",
    "url": "https://skilldrills.online/pt/drills/fps/angle-hold-trainer",
    "description": "Treinador interativo de mira e reação a cantos para jogos de tiro tático.",
    "gamePlatform": "Web Browser",
    "genre": ["Treino de FPS", "Treinador de Mira"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é posicionamento de mira (crosshair placement)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É a mecânica fundamental de manter a retícula exatamente na altura da cabeça e no ponto onde o inimigo irá surgir, eliminando a necessidade de fazer flicks reativos ao avistar o oponente."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona este treino de posicionamento de mira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ao iniciar, a tela cheia e o Pointer Lock são ativados e o relógio começa em 45 segundos. Os alvos saem da borda esquerda ou direita da parede em altura aleatória e voltam a se esconder. Cada acerto vale 100 pontos multiplicados pelo combo e pelo nível e soma 2 segundos (máximo de 60). A cada 1400 pontos o nível sobe: os peeks ficam mais curtos e os alvos menores, e em níveis altos surgem fake peeks laranja. Errar, atirar sem alvo ou atirar em um fake peek zera o combo e tira 1 segundo se a penalidade de tempo estiver ativada. A rodada termina quando o tempo chega a 0."
        }
      },
      {
        "@type": "Question",
        "name": "O que é peeker's advantage em jogos de tiro tático?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É o atraso de latência de rede cliente-servidor. Quem abre o pixel envia seus dados antes de o defensor parado receber a informação, concedendo ao atacante uma pequena janela em que ele vê primeiro; o tamanho depende de ping, tickrate e interpolação."
        }
      },
      {
        "@type": "Question",
        "name": "Como jogadores de CS2 e Valorant seguram ângulos e cravam pixels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Posicionando a mira ligeiramente afastada da quina. Esse espaço acomoda o tempo de reação humano e a velocidade de corrida do rival, permitindo clicar no momento exato em que ele passa pela retícula."
        }
      },
      {
        "@type": "Question",
        "name": "A que distância da parede minha mira deve ficar ao marcar um ângulo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende da velocidade esperada do oponente: contra swings abertos e correndo, segure mais aberto. Contra jiggle peeks curtos ou aberturas cautelosas no shift, segure mais rente à quina."
        }
      },
      {
        "@type": "Question",
        "name": "O que faz os jogadores atirarem antes da hora (pre-fire acidental)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ansiedade motora e falha na discriminação visual Go/No-Go diante de feintes ou utilitários. Neste drill, fake peeks laranja bem curtos aparecem nos níveis altos e atirar neles conta como pre-fire. Assim você pratica disparar apenas quando o alvo se compromete com a abertura."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre segurar pixel e fazer jiggle peek?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Segurar pixel é uma postura defensiva passiva focada em tempo de reação puro. Fazer jiggle peek é uma movimentação ativa com strafes A-D para obter informação e iscar tiros sem se expor."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a fórmula matemática de latência do peeker's advantage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A fórmula é: T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp. O atraso resulta dos pings dos dois jogadores somados ao buffer de interpolação do servidor."
        }
      },
      {
        "@type": "Question",
        "name": "A taxa de atualização do monitor afeta a reação ao segurar ângulos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Telas de 240 Hz exibem quadros a cada 4,17 ms contra 16,67 ms em 60 Hz, o que mostra em média mais cedo o primeiro quadro do adversário; o ganho não passa da diferença entre os intervalos de quadro."
        }
      },
      {
        "@type": "Question",
        "name": "Com que frequência devo treinar posicionamento de mira e marcação de pixel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não existe regra fixa. Sessões de 10 a 15 minutos antes de jogar, junto com deathmatch, são um formato razoável. Compare seu tempo médio de reação e sua precisão no mesmo equipamento ao longo dos dias."
        }
      },
      {
        "@type": "Question",
        "name": "Como o simulador captura o movimento do mouse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O drill usa a API Pointer Lock do HTML5 para ler o movimento relativo do mouse e marca os cliques com performance.now(). Não é solicitada entrada sem aceleração, então as configurações de ponteiro do sistema ainda podem valer. É preciso um mouse; o drill não inicia em aparelhos só com toque."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Praticar Posicionamento de Mira e Retenção de Ângulos",
    "description": "Instruções passo a passo para calibrar a altura do retículo, distância da parede e neutralizar o peeker advantage.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibre o espaçamento da mira em relação à parede",
        "text": "Posicione o retículo levemente afastado da quina, deixando um vão correspondente à sua velocidade de reação visual.",
        "url": "https://skilldrills.online/pt/drills/fps/angle-hold-trainer#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Trave a mira exatamente na altura da cabeça",
        "text": "Alinhe a retícula com referências visuais do cenário na altura exata da cabeça para acertar o tiro sem microajustes.",
        "url": "https://skilldrills.online/pt/drills/fps/angle-hold-trainer#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Antecipe a velocidade de corrida do adversário",
        "text": "Amplie o espaçamento contra inimigos em corrida aberta e estreite-o contra adversários em passadas cautelosas.",
        "url": "https://skilldrills.online/pt/drills/fps/angle-hold-trainer#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Dispare imediatamente na entrada do alvo na retícula",
        "text": "Confie no posicionamento e dê um único clique assim que o alvo cruzar a retícula, sem tentar flicks reativos de última hora.",
        "url": "https://skilldrills.online/pt/drills/fps/angle-hold-trainer#step-4"
      }
    ]
  };

  const angleHoldGuidePt = {
    heading: "Posicionamento de mira: segurar ângulo no FPS",
    intro: [
      "Este drill de posicionamento de mira pratica deixar o retículo na altura da cabeça antes do inimigo sair da esquina. Os alvos aparecem na borda esquerda ou direita de uma parede e você clica assim que entram no retículo: distância da quina, segurar ângulo e reação ao peek, para quem joga Valorant e CS2.",
      "Em arquiteturas de rede multijogador a latência gera a assimetria conhecida como peeker's advantage: T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp. Para neutralizar esse déficit, o defensor deve afastar a mira da quina em D_offset = v_peeker × T_reação, permitindo que o atacante cruze o retículo exatamente no instante em que o clique mecânico ocorre.",
      "A precisão motora segue os princípios da Lei de Fitts (Fitts, 1954): cada microcorreção durante a espera custa tempo. O Angle Hold Pro marca os cliques com performance.now(); a taxa de atualização da tela e o polling do mouse do seu equipamento continuam influenciando os valores, e os fake peeks acrescentam uma decisão Go/No-Go (Hick, 1952; Woods et al., 2015).",
      "Como medir seu desempenho: cada tiro é registrado localmente com o relógio de alta precisão do navegador. Diferenças menores que 5 ms são ruídos esperados de temporização. Mantenha as mesmas configurações de sensibilidade física e espaço no mousepad para consolidar respostas confiáveis."
    ],
    benchmarks: {
      title: "Referências de reação e rede ao segurar ângulo",
      headers: ["Fase / Métrica", "Referência (ms)", "Fator", "Leitura"],
      rows: [
        ["Reação visual simples", "cerca de 200 – 250 ms (faixa da pesquisa)", "Ver o estímulo e clicar", "Reação simples a um estímulo esperado (Woods et al., 2015)"],
        ["Reação de discriminação (fake / jiggle peek)", "algumas dezenas de ms a mais", "Decisão Go/No-Go", "Mais alternativas, reação mais lenta (Hick, 1952)"],
        ["Peeker's advantage", "varia com servidor e ping", "RTT cliente-servidor + buffer de interpolação", "Vantagem de rede do atacante em movimento"],
        ["Distância da quina estável", "referência", "Retículo na altura da cabeça à frente da quina antes do peek", "Compare seus próprios valores no mesmo aparelho"]
      ],
      note: "Valores explicativos baseados em faixas gerais da pesquisa sobre tempo de reação (Donders, 1868; Hick, 1952; Woods et al., 2015); não são estatísticas de usuários nem ranques. Os tempos variam com a taxa de atualização da tela, a taxa de amostragem do mouse e o estado de alerta."
    },
    techniques: {
      title: "Geometria de Posicionamento e Diretrizes de Marcação",
      items: [
        {
          name: "Calibração de Espaçamento da Quina",
          desc: "Não cole a mira diretamente na borda da parede. Deixe uma margem horizontal proporcional ao seu reflexo: segure mais aberto contra corridas amplas e mais fechado contra aproximações lentas.",
          tips: "Se os adversários costumam ultrapassar sua mira antes do tiro, amplie um pouco o afastamento; se você atira cedo demais e erra, segure mais fechado."
        },
        {
          name: "Disciplina Horizontal na Altura da Cabeça",
          desc: "Alinhe a elevação da mira com elementos do cenário como caixas, batentes de portas ou faixas na parede correspondentes à altura da cabeça nas distâncias comuns.",
          tips: "Evite o relaxamento da mão que faz a mira cair em direção ao chão ao patrulhar ângulos passivos."
        },
        {
          name: "A Regra 'Clique, Não Ajuste'",
          desc: "Ao segurar um ângulo calibrado com pré-mira, comprometa-se a clicar no instante em que o inimigo entrar na retícula, em vez de tentar microflicks, que acrescentam um movimento de correção e, portanto, atraso.",
          tips: "Confie na sua colocação de mira e fixe o foco visual ligeiramente à frente do retículo."
        },
        {
          name: "Posicionamento em Off-Angles",
          desc: "Ângulos óbvios atraem tiros prévios (prefires). Dê meio passo para posições incomuns para quebrar a pré-mira do adversário enquanto mantém sua própria linha de visão limpa.",
          tips: "Tenha sempre uma rota de fuga planejada antes de assumir um off-angle agressivo."
        }
      ]
    },
    steps: [
      "Clique em Iniciar para entrar em tela cheia e travar o cursor do mouse.",
      "Posicione a mira na altura da cabeça em relação à quina, ajustando o vão da parede.",
      "Mantenha a mão firme com tensão suave para evitar tremores antecipatórios.",
      "No milissegundo em que o alvo cruzar o plano da retícula, execute um único clique rápido.",
      "Acompanhe sua latência média de reação (ms) e disciplina ao longo das rodadas."
    ],
    audience: "Jogadores competitivos de CS2, Valorant e Rainbow Six Siege que desejam aprimorar posicionamento de mira, disciplina de disparo e reflexos de defesa em esquinas.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'woodworth1899'),
    related: [
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/fps/180-degree-awareness", label: "Treino de Giro 180°" },
      { href: "/pt/drills/fps/micro-correction-precision", label: "Treino de Microcorreção" },
      { href: "/pt/drills/visual/reaction-speed/light-reaction", label: "Teste de Tempo de Reação" }
    ]
  };

  const copyPt = {
    h1Prefix: null,
    bottomCaption: "Mantenha a mira no canto e clique assim que o alvo aparecer.",
    h1Keyword: "Posicionamento de mira",
    h1Suffix: " — segurar ângulo no FPS",
    aboutIntro: [
      "Este drill de posicionamento de mira (crosshair placement) treina segurar ângulo: retículo na altura da cabeça perto da borda de uma parede e clique assim que um alvo sair. É para quem joga Valorant e CS2 e quer segurar ângulos com disciplina, e mostra no fim o tempo médio de reação, a precisão, o combo e o nível.",
      "Cada peek sai pela esquerda ou pela direita em altura aleatória, então não dá para decorar um ritmo. Conforme o nível sobe, os peeks ficam mais curtos e os alvos menores, e fake peeks laranja punem cliques apressados. O drill não reproduz o netcode nem o ranque de um jogo real: use-o como complemento de treino."
    ],
    subtitle: "Treino de Marcação de Pixel e Defesa contra Peeker's Advantage",
    rulesItems: [
      { num: "1", text: "Acerto no Peek", highlight: "+100 PTS (+2s, máx. 60s)", result: "×Multiplicador" },
      { num: "2", text: "Surgimento em Cantos", highlight: "Borda esquerda/direita da parede", result: "Mais curto e menor" },
      { num: "3", text: "Progressão de Nível", highlight: "+1 Nível / 1400 PTS", result: "Escala Adaptativa" },
      { num: "4", text: "Erro / Pre-Fire / Fake Peek", highlight: "Penalidade", result: "Reset Combo (-1s com penalidade de tempo)" }
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "Recomendado para", text: "Defensores de bombsite em Valorant, âncoras de CS2, operadores de R6 Siege e quem deseja cravar mira com disciplina." },
      { iconBg: "bg-orange-600", title: "Habilidades Treinadas", text: "Calibração de distância da quina, disciplina de gatilho contra jiggle peeks, tempo de reação e consistência na altura da cabeça." },
      { iconBg: "bg-purple-600", title: "Detecção de Fake Peek", text: "Níveis altos acrescentam fake peeks laranja bem curtos. Treine o discernimento Go/No-Go para atirar apenas quando o alvo se comprometer." }
    ],
    aboutSections: [
      {
        title: "Espaçamento Ideal da Parede (Geometria de Offset)",
        paragraphs: [
          "O erro mais frequente ao marcar um ângulo é colar a mira diretamente na quina da parede. Como existe um tempo de reação entre ver e clicar, um inimigo correndo passa direto pela mira colada antes que o dedo consiga disparar.",
          "Ao deixar um espaço horizontal entre a parede e o retículo (D_offset = v_peeker × T_reação), o adversário corre exatamente para o ponto onde seu tiro é acionado, eliminando a necessidade de microajustes desesperados."
        ]
      },
      {
        title: "Compensando o Peeker's Advantage",
        paragraphs: [
          "Devido à latência de rede entre cliente e servidor (RTT), o atacante em movimento enxerga o defensor parado um pouco mais cedo, dependendo do ping e do servidor. Essa desvantagem pode ser atenuada posicionando a mira mais afastada da quina para compensar a aceleração transversal do inimigo."
        ]
      },
      {
        title: "Metodologia de Medição e Precisão do Sensor",
        paragraphs: [
          "Angle Hold Pro utiliza a API HTML5 Pointer Lock e marcas de tempo de performance.now() para registrar latências de clique com a resolução de tempo do navegador (~1 ms)."
        ]
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

      <AngleHoldClient copy={copyPt} />

      <RelatedDrills />

      <DrillGuide guide={angleHoldGuidePt} />
      <DrillFooter />
    </>
  );
}
