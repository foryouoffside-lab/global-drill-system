import VerticalAirTrackClient from '@/app/drills/fps/vertical-air-track/VerticalAirTrackClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Mira Vertical: Tracking Aéreo no FPS | SkillDrills',
  description: 'Mira vertical no navegador, grátis: segure o clique em alvos aéreos que sobem e caem em parábola e treine tracking aéreo no eixo Y para Apex e Overwatch 2.',
  keywords: [
    'mira vertical',
    'mira vertical fps',
    'tracking aéreo FPS',
    'rastreamento aéreo',
    'mira eixo Y',
    'treino de tracking Apex',
    'controle de mouse vertical',
    'mira vertical FPS',
    'treino de pontaria aérea',
    'smooth pursuit vertical',
    'sensibilidade vertical mouse',
    'treinador de mira grátis'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/fps/vertical-air-track',
    languages: getAlternateLanguages('/drills/fps/vertical-air-track'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Mira Vertical: Tracking Aéreo no FPS | SkillDrills',
    description: 'Mira vertical no navegador, grátis: segure o clique em alvos aéreos que sobem e caem em parábola e treine tracking aéreo no eixo Y para Apex e Overwatch 2.',
    url: 'https://skilldrills.online/pt/drills/fps/vertical-air-track',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Mira Vertical: Tracking Aéreo no FPS | SkillDrills',
    description: 'Mira vertical no navegador, grátis: segure o clique em alvos aéreos que sobem e caem em parábola e treine tracking aéreo no eixo Y para Apex e Overwatch 2.',
  },
};

export default function VerticalAirTrackPtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Mira Vertical", "item": "https://skilldrills.online/pt/drills/fps/vertical-air-track" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Mira Vertical - Tracking Aéreo",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any (Web Browser)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Treinador online de controle de mira no eixo Y e perseguição suave de alvos aéreos com física gravitacional para Apex Legends e Overwatch 2."
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mira Vertical - Tracking Aéreo",
    "url": "https://skilldrills.online/pt/drills/fps/vertical-air-track",
    "browserRequirements": "Requires Pointer Lock API and WebGL support",
    "applicationCategory": "ShooterTraining",
    "creator": {
      "@type": "Organization",
      "name": "SkillDrills"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Mira Vertical - Tracking Aéreo",
    "description": "Simulador de rastreamento de alvos em arco parabólico no ar para aprimorar precisão motora vertical e velocidade de resposta anti-aérea.",
    "genre": ["First-Person Shooter", "Aim Trainer", "Reaction Training"],
    "playMode": "SinglePlayer",
    "gamePlatform": ["PC", "Web Browser"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é treinar a mira vertical em jogos FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Treinar a mira vertical isola o movimento do mouse no eixo Y (para cima e para baixo), um plano motor subtreinado em comparação ao eixo horizontal. É essencial para rastrear alvos voando, pulando ou caindo em jogos como Apex Legends e Overwatch 2."
        }
      },
      {
        "@type": "Question",
        "name": "O que é popcorn tracking e como este exercício o desenvolve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Popcorn tracking é a habilidade de seguir alvos que saltam repetidamente em trajetórias parabólicas no ar. Este exercício condiciona a perseguição suave contínua e a predição da aceleração gravitacional no ápice do salto."
        }
      },
      {
        "@type": "Question",
        "name": "Como o treino vertical auxilia jogadores de Apex Legends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apex Legends apresenta intensa mobilidade vertical: jump pads do Octane, elevadores gravitacionais da Horizon, tirolesas e ganchos do Pathfinder. Este exercício isola o acompanhamento dessas trajetórias no eixo Y para repetir à parte."
        }
      },
      {
        "@type": "Question",
        "name": "O que é um 'elevator peek' e como puni-lo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O elevator peek ocorre quando o adversário aproveita cordas, tirolesas ou desníveis de terreno para surgir de repente acima da sua mira. Este exercício treina seguir alvos que surgem da parte de baixo da tela e mudam de altura de repente."
        }
      },
      {
        "@type": "Question",
        "name": "Por que o rastreamento vertical é biomecanicamente mais difícil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O movimento horizontal usa a rotação natural do antebraço e flexão do pulso. Já o movimento vertical depende da extensão forçada do punho, contração dos dedos ou deslizamento do braço contra o atrito estático do mousepad."
        }
      },
      {
        "@type": "Question",
        "name": "Como jogadores de Overwatch 2 treinam contra heróis aéreos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Praticam perseguição vertical contra heróis como Pharah, Echo e Mercy, além de mergulhos rápidos de Winston ou Doomfist, igualando a velocidade no eixo Y. Este exercício reproduz esse tipo de tracking vertical, não as hitboxes nem os movimentos exatos do jogo."
        }
      },
      {
        "@type": "Question",
        "name": "O treino vertical tem impacto em Halo Infinite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, Halo Infinite utiliza man cannons, ganchos (grappleshot) e saltos com propulsores. O exercício treina o tracking vertical de um alvo no ar; funciona com o clique segurado e não reproduz as rajadas do Battle Rifle."
        }
      },
      {
        "@type": "Question",
        "name": "Como os erros são penalizados no Vertical Air-Track?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enquanto você segura o clique esquerdo com a mira dentro do alvo, ele perde vida (100); em 0, é destruído. Cada destruição vale 100 pontos mais bônus de altura (+25/+50/+75 acima de 25 %/50 %/75 % da altura da tela), multiplicados por combo e nível, e soma 2 s ao tempo (máx. 60 s). O tempo começa em 45 s. Se um alvo sair pela parte de baixo da tela, o combo zera e você perde 1 s (com a opção Timeout desligada, ele quica de volta). Sair do alvo por um instante não quebra o combo, mas reduz a taxa de tracking. A cada 1.400 pontos o nível sobe: mais gravidade e esquivas, alvos menores e, a partir do nível 5, dois alvos ao mesmo tempo."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a frequência semanal recomendada para treinos verticais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não há número mágico; sessões de 10 a 15 minutos, 3 a 4 vezes por semana, são um bom ritmo. Acompanhe a taxa de tracking e o nível atingido no mesmo equipamento."
        }
      },
      {
        "@type": "Question",
        "name": "Este exercício de mira vertical é gratuito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, é gratuito e roda no navegador do PC sem instalação nem conta. Exige mouse: ao começar, o cursor é travado (Pointer Lock), e Esc ou a perda da trava encerra a sessão. Aparelhos só de toque não são suportados."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Treinar Rastreamento de Mira Vertical no Navegador",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Ajustar Sensibilidade e Travar o Cursor",
        "text": "Ajuste a sensibilidade global na página /drills (1,00x = 30 cm/360) e clique em Iniciar para travar o cursor."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Interceptar o Lançamento do Alvo",
        "text": "Posicione o retículo na trajetória ascendente do alvo aéreo assim que ele for ejetado."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Acompanhar a Curvatura no Ápice Parabólico",
        "text": "Desacelere o movimento no topo da trajetória onde o alvo perde velocidade antes de iniciar a queda."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Acelerar na Fase de Descida Gravitacional",
        "text": "Aumente a velocidade vertical de puxada do mouse para acompanhar a aceleração de queda (g = 9.81 m/s²)."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Sustentar o Combo e Destruir Alvos",
        "text": "Destrua os alvos no alto da tela para o bônus de altura (até +75) e antes que saiam pela parte de baixo."
      }
    ]
  };

  const verticalAirTrackGuide = {
    heading: "Mira Vertical: tracking aéreo e eixo Y",
    intro: [
      "Este exercício grátis de mira vertical roda no navegador: alvos aéreos são lançados da parte de baixo da tela, se esquivam no ar (saltos, dashes laterais, mergulhos) e caem pela gravidade. Você segura o clique esquerdo e acompanha o alvo no eixo Y até destruí-lo. A precisão é a parte do tempo de disparo em que a mira está sobre um alvo. Um aquecimento de tracking aéreo para Apex Legends e Overwatch 2.",
      "A neurobiologia do rastreamento de perseguição vertical difere fundamentalmente do plano horizontal. Krauzlis (2004) relata que a perseguição suave (smooth pursuit) é precisa até cerca de 30°/s, e Rashbass (1961) comprovou que a perseguição contínua é impulsionada pelo erro de velocidade retiniana (retinal slip) e não por mero erro de posição estática, demandando correspondência contínua de velocidade angular.",
      "Rastrear entidades em suspensão aérea exige internalizar a física da aceleração gravitacional (g = 9,81 m/s²). Land & McLeod (2000) mostram que interceptadores experientes preveem onde o alvo vai estar em vez de persegui-lo, e antecipam a desaceleração parabólica no ápice do salto e a aceleração brusca durante a trajetória de descida. Jogadores que não antecipam essa curvatura de velocidade perdem o alvo repetidamente em momentos de queda livre.",
      "Os alvos também têm velocidade lateral e dashes, mas o essencial do movimento é no eixo Y: subida, ápice e queda. Se você treina mais tracking horizontal, este exercício cobre a parte vertical.",
      "Como medimos o desempenho e latência de hardware: cada evento e alteração de trajetória é registrado em tempo real pelo relógio de alta resolução performance.now() do navegador, funcionando exclusivamente de forma local no seu computador — nenhum dado é enviado para servidores externos. Duas limitações físicas do ambiente web: temporizadores de navegadores sofrem quantização deliberada contra brechas Spectre (tipicamente em torno de 1 ms) e o monitor projeta quadros de acordo com sua taxa de atualização — cerca de 16,7 ms por quadro a 60 Hz, 6,9 ms a 144 Hz e 4,1 ms a 240 Hz (Woods et al., 2015). A taxa de varredura (polling rate) do mouse adiciona cerca de 8 ms a 125 Hz contra 1 ms a 1000 Hz. Diferenças menores que 5 ms constituem ruído de medição; analise sua evolução em um mesmo conjunto de periféricos."
    ],
    benchmarks: {
      title: "Faixas de treino SkillDrills: taxa de tracking",
      headers: ["Faixa", "Taxa de tracking", "Perfil típico"],
      rows: [
        ["Faixa 1", "> 82 %", "Transição suave no ápice; as esquivas raramente tiram a mira do alvo"],
        ["Faixa 2", "70 % – 82 %", "Tracking constante; pequenas hesitações depois de uma esquiva"],
        ["Faixa 3", "58 % – 70 %", "Bom controle na subida; perde o alvo na queda acelerada"],
        ["Faixa 4", "45 % – 58 %", "Micro-flicks espasmódicos em vez de movimento contínuo no eixo Y"],
        ["Faixa 5", "< 45 %", "Pulso travado; a mira fica para trás dos alvos em queda"]
      ],
      note: "Taxa de tracking = parte do tempo com o clique segurado em que a mira está sobre um alvo. Faixas próprias do SkillDrills, não normas científicas, estatísticas de usuários nem ranks de jogos."
    },
    techniques: {
      title: "Protocolos para Dominar a Mira Vertical",
      items: [
        {
          name: "Equalização de Velocidade Retiniana no Eixo Y",
          desc: "Foque em igualar a velocidade angular da mão à do alvo em vez de fazer sucessivos micro-flicks (Rashbass, 1961; Krauzlis, 2004).",
          tips: "Mantenha o olhar fixo no centro da esfera aérea e deixe a mão deslizar em velocidade contínua sem trancos."
        },
        {
          name: "Desaceleração no Ápice e Aceleração na Queda",
          desc: "Preveja a perda de energia cinética no topo do arco e prepare a puxada descendente acelerada (Land & McLeod, 2000).",
          tips: "Suavize o movimento no ápice do pulo para garantir o bônus de altura (+75 PTS) antes da descida veloz."
        },
        {
          name: "Articulação Vertical: Dedos e Antebraço",
          desc: "Em pegadas claw ou fingertip, dobre ou estique os dedos para microajustes verticais rápidos sem mover a base da mão.",
          tips: "Para movimentos verticais amplos, deslize suavemente o antebraço pelo mousepad sem cravar o cotovelo na mesa."
        },
        {
          name: "Eliminação do Atrito Estático Vertical",
          desc: "Evite pressionar o mouse excessivamente contra a base, mantendo um deslizamento leve e constante no mousepad.",
          tips: "Se o mouse agarrar na subida, reduza o peso aplicado pela palma e limpe a superfície do mousepad."
        }
      ]
    },
    steps: [
      "Ajuste a sensibilidade global na página /drills e clique em Iniciar para travar o cursor.",
      "Acompanhe o lançamento do alvo aéreo na tela e posicione o retículo no centro do círculo.",
      "Mantenha a mira alinhada durante a fase ascendente para acumular multiplicadores de combo.",
      "Equalize a desaceleração no topo da parábola para capitalizar no bônus de pontuação no ápice.",
      "Acelere a puxada para baixo durante a queda e zere a vida do alvo antes que ele saia pela parte de baixo da tela."
    ],
    audience: "Jogadores competitivos de Apex Legends, Overwatch 2, Halo e Destiny 2 que querem treinar a mira vertical contra alvos aéreos no navegador.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'rashbass1961', 'land2000'),
    related: [
      { href: "/pt/drills/fps/pro-smooth-pursuit", label: "Pro Smooth Pursuit" },
      { href: "/pt/drills/fps/strafe-tracking", label: "Rastreamento de Strafe" },
      { href: "/pt/drills/fps/target-switching-swarm", label: "Target Switching Swarm" },
      { href: "/pt/drills/fps/target-acquisition", label: "Aquisição de Alvos FPS" },
      { href: "/pt/drills/fps/flow-state", label: "Flow State" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <VerticalAirTrackClient
        copy={{
          h1Keyword: "Mira Vertical",
          h1Suffix: ": Tracking Aéreo no FPS",
          statScore: "Pontos",
          statTime: "Tempo",
          statAccuracy: "Precisão",
          statBestScore: "Recorde",
          statTargetsDestroyed: "Alvos Destruídos",
          statMaxCombo: "Combo Máximo",
          statPeakLevel: "Nível Máximo",
          startTitle: "Vertical Air-Track",
          startSubtitle: "Pointer Lock • Progressão Dinâmica de Níveis",
          startButtonText: "Iniciar Treino",
          playAgainText: "Jogar Novamente",
          shareText: "Compartilhar Pontuação",
          exitText: "Sair",
          stageCaption: "Mira vertical: segure o clique nos alvos aéreos até zerar a vida deles antes que saiam pela parte de baixo da tela.",
          rulesTitle: "Instruções do Exercício e Sistema de Pontos",
          aboutTitle: "Sobre o Treinador Vertical Air-Track",
          rulesItems: [
            {
              num: "1",
              text: "Rastrear Alvo Aéreo",
              highlight: "+100 PTS / +2s ao destruir (máx. 60s)",
              result: "Acompanhe a curva parabólica de forma contínua"
            },
            {
              num: "2",
              text: "Bônus de Altura",
              highlight: "Até +75 PTS de bônus",
              result: "Elimine alvos próximos ao ápice do lançamento"
            },
            {
              num: "3",
              text: "Regra de Penalidade",
              highlight: "Reset de combo / -1s",
              result: "Quando um alvo sai pela parte de baixo (opção Timeout)"
            },
            {
              num: "4",
              text: "Progressão de Nivel",
              highlight: "A cada 1.400 PTS +1 Nível",
              result: "Mais gravidade e esquivas, alvos menores, 2 alvos a partir do nível 5"
            }
          ]
        }}
      />
      <DrillGuide guide={verticalAirTrackGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
