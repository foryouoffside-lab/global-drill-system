import ProSmoothPursuitClient from '@/app/drills/fps/pro-smooth-pursuit/ProSmoothPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Tracking Suave: Siga Alvos em Curva | SkillDrills",
  description: "Tracking Suave grátis no navegador: mantenha a mira com o mouse em um alvo que desliza em curvas de Lissajous. Rastreamento contínuo para Apex e Overwatch 2.",
  keywords: [
    "tracking suave",
    "rastreamento contínuo",
    "smooth tracking",
    "alvos em curva",
    "tracking com mouse"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/pro-smooth-pursuit",
    languages: getAlternateLanguages('/drills/fps/pro-smooth-pursuit'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Tracking Suave: Siga Alvos em Curva | SkillDrills",
    description: "Tracking Suave grátis no navegador: mantenha a mira com o mouse em um alvo que desliza em curvas de Lissajous. Rastreamento contínuo para Apex e Overwatch 2.",
    url: "https://skilldrills.online/pt/drills/fps/pro-smooth-pursuit",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Tracking Suave: Siga Alvos em Curva | SkillDrills",
    description: "Tracking Suave grátis no navegador: mantenha a mira com o mouse em um alvo que desliza em curvas de Lissajous. Rastreamento contínuo para Apex e Overwatch 2.",
  },
};

export default function ProSmoothPursuitPage() {
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
        "name": "Exercícios FPS",
        "item": "https://skilldrills.online/pt/drills/fps"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Tracking Suave: Siga Alvos em Curva",
        "item": "https://skilldrills.online/pt/drills/fps/pro-smooth-pursuit"
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Tracking Suave: Siga Alvos em Curva",
    "url": "https://skilldrills.online/pt/drills/fps/pro-smooth-pursuit",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requer navegador moderno com API Pointer Lock",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "Tracking Suave - rastreamento contínuo",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Tracking Suave - alvos em curva",
    "description": "Simulador de rastreamento contínuo em curvas harmônicas de Lissajous com ponteiro bruto.",
    "genre": ["Action", "Esports Trainer", "Aim Trainer"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Browser Game"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o treino de Smooth Pursuit (rastreamento suave) em jogos FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smooth Pursuit é a capacidade fisiológica do sistema oculomotor e dos músculos do braço de acompanhar um alvo em deslocamento contínuo combinando a velocidade do mouse com a velocidade da trajetória, mantendo a retícula ininterruptamente colada à hitbox do adversário."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a diferença entre o rastreamento suave e os movimentos sacádicos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Os movimentos sacádicos (flicks) são impulsos balísticos rápidos de ponto a ponto controlados pelo córtex frontal e colículo superior, enquanto o Smooth Pursuit envolve circuitos corticais do córtex temporal médio (área MT/V5) e do cerebelo para calcular velocidade e manter aceleração fluida contínua sem saltos visuais."
        }
      },
      {
        "@type": "Question",
        "name": "Por que minha mira treme ou oscila ao tentar acompanhar trajetórias curvas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O tremor ocorre quando o jogador tenta rastrear usando micro-flicks sucessivos em vez de um deslizamento contínuo. A contração excessiva do punho e antebraço gera atrito estático que impede a modulação fluida nas curvaturas da trajetória."
        }
      },
      {
        "@type": "Question",
        "name": "O que é antecipação visual foveal (Foveal Gaze Leading) no tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É olhar para o alvo e para a direção em que ele se move, em vez de olhar para a própria retícula. O olhar costuma anteceder o gesto, o que ajuda a se preparar para as mudanças de curva."
        }
      },
      {
        "@type": "Question",
        "name": "Por que o Smooth Pursuit é fundamental em jogos de alto TTK como Apex Legends e Overwatch 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em jogos com longo Time-to-Kill, abater um oponente requer contato contínuo de disparos por vários segundos enquanto o inimigo pula, esquiva ou desliza. Um tracking fluido maximiza o dano por segundo (DPS) sem desperdiçar munição durante o combate dinâmico."
        }
      },
      {
        "@type": "Question",
        "name": "O que é uma curva de Lissajous e por que ela é utilizada neste exercício?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As curvas de Lissajous são trajetórias matemáticas harmônicas bidimensionais com variação senoidal contínua nos eixos X e Y. Elas obrigam a ajustar aceleração e desaceleração nos dois eixos ao mesmo tempo, sem uma trajetória reta para decorar."
        }
      },
      {
        "@type": "Question",
        "name": "Como a taxa de atualização do monitor e o polling rate influenciam o tracking suave?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Taxas de atualização maiores encurtam o intervalo entre quadros (60 Hz ≈ 16,7 ms, 144 Hz ≈ 6,9 ms), mostrando as curvas com mais detalhe. Um polling rate de 1000 Hz atualiza a posição do mouse cerca de uma vez por milissegundo. Ainda assim, prática e diferenças individuais costumam pesar mais que o equipamento."
        }
      },
      {
        "@type": "Question",
        "name": "Qual empunhadura de mouse oferece maior estabilidade para rastreamento prolongado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Empunhaduras Claw ou Palm relaxadas apoiam melhor a mão na concha do mouse, permitindo que os grandes grupos musculares do antebraço e do ombro executem o deslizamento sem tensões pontuais nos dedos que geram tremores indesejados."
        }
      },
      {
        "@type": "Question",
        "name": "Com que frequência devo praticar treinos de tracking suave?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recomenda-se realizar de 10 a 15 minutos de sessões focadas antes de partidas competitivas. Como o tracking exige concentração neuromotora contínua, pausas regulares evitam a fadiga dos músculos flexores do antebraço."
        }
      },
      {
        "@type": "Question",
        "name": "Por que sair do alvo zera o multiplicador de combo neste treinador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O multiplicador premia o contato ininterrupto. Sobre o alvo, você ganha 50 pontos base a cada 0,25 s (multiplicados pelo combo e pelo nível) e +0,1 s no relógio (máximo de 60 s); cada segundo sem perder o alvo soma 1 ao combo, até 3,0×. Se ficar 1 s seguido fora do alvo, o combo zera. A rodada começa com 45 s."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Treinar Tracking Suave e Rastreamento em Curva",
    "description": "Guia estruturado para sincronizar velocidade e estabilizar a mira em trajetórias móveis contínuas.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibração e Ativação do Ponteiro",
        "text": "Ajuste o multiplicador de sensibilidade nas configurações de /drills e clique em iniciar; o ponteiro é travado ao fim da contagem regressiva."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Acoplamento Inicial no Alvo",
        "text": "Quando a esfera de rastreamento surgir, posicione a retícula sobre ela com movimento suave sem aplicar força brusca."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Deslizamento Contínuo com o Antebraço",
        "text": "Use o antebraço e ombro para guiar o mouse pelas curvas de Lissajous, evitando micro-ajustes tensos no punho."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Manutenção da Zona de Combo",
        "text": "Mantenha a retícula colada à esfera durante acelerações e desacelerações nas curvas para acumular o multiplicador máximo."
      }
    ]
  };

  const copyPt = {
    h1Keyword: "Tracking Suave",
    h1Suffix: ": Siga Alvos em Curva",
    statScore: "Pontuação",
    statTime: "Tempo",
    statAccuracy: "Precisão",
    statBestScore: "Recorde",
    pausedTitle: "Jogo Pausado",
    pausedSubtitle: "Clique na tela para reengajar a trava do cursor do mouse.",
    startTitle: "Tracking Suave",
    startSubtitle: "Curvas de Lissajous • Pointer Lock • Progressão Contínua",
    getReady: "PREPARE-SE",
    stageCaption: "Acompanhe continuamente o alvo em movimento oscilatório pelas curvas suaves da tela sem perder o contato visual.",
    rulesTitle: "Instruções do Treino e Sistema de Pontos",
    rulesItems: [
      { num: "1", text: "Rastreamento no Alvo", highlight: "+50 PTS / 0,25s (+0,4s/s)", result: "×Mult de Combo" },
      { num: "2", text: "1s Sem Perder", highlight: "Combo +1, até 3,0×", result: "Multiplicador Máx" },
      { num: "3", text: "Progressão de Nível", highlight: "+1 Nível / 1400 PTS", result: "Curvas Adaptativas" },
      { num: "4", text: "Perda de Contato", highlight: "1,0s seguido fora", result: "Reset de Combo" }
    ],
    aboutTitle: "Sobre o Tracking Suave",
    aboutHeading: "O que é o Rastreamento Suave (Smooth Pursuit)?",
    aboutText: "O rastreamento suave (Smooth Pursuit) é a capacidade neuro-ocular de manter o olhar fixo em um objeto em movimento contínuo através da modulação da velocidade dos músculos oculares e da coordenação motora do antebraço (Krauzlis, 2004; Barnes, 2008). Este exercício elimina os micro-flicks corretivos desnecessários e transforma sua mira em um feixe constante e fluido."
  };

  const smoothPursuitGuide = {
    heading: "Tracking Suave: guia para seguir alvos em curva",
    intro: [
      "O Tracking Suave é a capacidade de manter o retículo sobre um alvo móvel sem movimentos bruscos. Este drill faz um alvo redondo deslizar em curvas de Lissajous e mede a porcentagem de tempo com a mira sobre ele, como prática de rastreamento contínuo para Apex, Overwatch 2 e outros FPS de TTK longo.",
      "Diferente dos flicks balísticos instantâneos regidos pela Lei de Fitts (1954), o rastreamento suave mobiliza redes neurais corticais especializadas na área temporal média (MT/V5) e no cerebelo (Krauzlis, 2004; Lisberger et al., 1987). Esses circuitos analisam vetores de fluxo óptico e ajustam continuamente o ganho de velocidade neuromuscular para coincidir com a aceleração do adversário.",
      "A trajetória utilizada neste exercício baseia-se em curvas harmônicas de Lissajous, combinando frequências senoidais interdependentes nos eixos X e Y. Essa dinâmica elimina trajetórias lineares previsíveis, estimulando o planejamento motor antecipatório (Barnes, 2008) sem recorrer a correções abruptas por sobressaltos sacádicos.",
      "Ao utilizar a API de Pointer Lock aliada à cronometria de alta resolução via performance.now() (Woods et al., 2015), o exercício mede o tempo de permanência sobre a hitbox para você acompanhar sua regularidade entre sessões.",
      "Como é medido: o tempo de contato na hitbox e a estabilidade angular são computados localmente a cada quadro. Pequenas variações de medição menores a 5 ms correspondem a latências de hardware normais de tela e taxa de polling de periféricos."
    ],
    benchmarks: {
      title: "Tracking Suave: faixas de prática SkillDrills",
      headers: ["Faixa", "Tempo em Alvo (%)", "O que costuma acontecer", "Foco de treino"],
      rows: [
        ["Faixa 1", "85% – 95%+", "A mira fica no alvo mesmo nas inflexões da curva", "Manter a taxa em níveis altos"],
        ["Faixa 2", "72% – 85%", "Desacelera junto com o alvo no ápice das curvas", "Não ficar para trás no trecho central rápido"],
        ["Faixa 3", "58% – 72%", "Estável nos trechos retos, perde o alvo por instantes nas inversões", "Reduzir antes do vértice"],
        ["Faixa 4", "42% – 58%", "Micro-flicks em vez de deslizar; tremor por tensão no punho", "Soltar a pegada e guiar pelo antebraço"],
        ["Faixa 5", "Abaixo de 42%", "Mira sempre atrás do alvo, correções grandes frequentes", "Aprender a ficar sobre o alvo nos primeiros níveis"]
      ],
      note: "O tempo em alvo é a fração de quadros com a retícula sobre o alvo. Faixas de prática da SkillDrills para autoavaliação, não ranks de jogo, normas de pesquisa ou estatísticas de usuários."
    },
    techniques: {
      title: "Quatro ajustes para um Tracking Suave",
      items: [
        {
          name: "Deslizamento Pelo Antebraço e Relaxamento do Punho",
          desc: "Execute a maior parte do deslocamento contínuo movimentando o antebraço a partir do cotovelo, mantendo o punho relaxado em posição neutra para evitar tremores causados por atrito estático.",
          tips: "Mantenha o antebraço confortavelmente apoiado na mesa para criar estabilidade mecânica natural durante curvas amplas."
        },
        {
          name: "Fixação Foveal com Antecipação (Gaze Leading)",
          desc: "Olhe para o alvo e para a direção da curva, não para a retícula, para antecipar melhor as mudanças de velocidade.",
          tips: "Evite fixar os olhos na retícula; seu foco primário deve estar na borda frontal da esfera móvel."
        },
        {
          name: "Transição Suave nas Inflexões de Direção",
          desc: "Nos vértices da curva onde o alvo desacelera e inverte o sentido, não pare a mão abruptamente. Reduza a velocidade de forma progressiva e inverta o fluxo com controle muscular contínuo.",
          tips: "Pense na curva como uma onda fluida e não como retas conectadas por cantos angulares."
        },
        {
          name: "Pressão Constante na Superfície do Mousepad",
          desc: "Mantenha uma pressão descendente leve e uniforme durante todo o trajeto para assegurar atrito cinético homogêneo sob os pés do mouse.",
          tips: "Mousepads com superfície suave e baixo atrito estático ajudam a eliminar micropausas ao iniciar curvas."
        }
      ]
    },
    steps: [
      "Ajuste o multiplicador de sensibilidade nas configurações de /drills e clique em iniciar; o cursor é travado após a contagem regressiva.",
      "Quando o alvo em curva surgir, posicione a retícula no centro sem movimentos abruptos.",
      "Acompanhe o movimento da curva de Lissajous deslizando o antebraço com velocidade constante correspondente ao alvo.",
      "Mantenha contato contínuo na trajetória para acumular o multiplicador de combo e progredir para níveis com alvos menores."
    ],
    audience: "Jogadores de Apex Legends, Overwatch 2 e The Finals que buscam eliminar tremores de mira e aperfeiçoar o tracking de alta precisão em duelos contínuos.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'barnes2008', 'krauzlis2004', 'lisberger1987'),
    related: [
      { href: "/pt/drills/fps/anti-zigzag-movement-trainer", label: "Treinador de Movimento Anti-Zigue-Zague" },
      { href: "/pt/drills/fps/anti-strafe-jitter-duel", label: "Tracking contra Strafe ADAD" },
      { href: "/pt/drills/fps/strafe-tracking", label: "Treino de Tracking: mira em movimento" },
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/fps/micro-correction-precision", label: "Micro Correção de Mira" }
    ]
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* VideoGame Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <ProSmoothPursuitClient copy={copyPt} />

      <DrillGuide guide={smoothPursuitGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
