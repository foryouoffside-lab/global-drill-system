import AwarenessDrillClient from '@/app/drills/fps/180-degree-awareness/AwarenessDrillClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Giro de 180° no FPS: Virada e Tiro | SkillDrills",
  description: "Giro de 180° no FPS, grátis no navegador: alvos surgem nas bordas esquerda e direita da tela; leve a mira num flick amplo e freie no alvo. Requer mouse.",
  keywords: [
    "treino de mira 180 graus",
    "treino de giro 180 graus",
    "virada de 180 graus FPS",
    "visão periférica FPS",
    "giro de 180 no FPS",
    "virada rápida FPS",
    "reação a flanco FPS",
    "mira para costas FPS",
    "espaço do mousepad virada 180",
    "teste de mira"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/180-degree-awareness",
    languages: getAlternateLanguages('/drills/fps/180-degree-awareness'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Giro de 180° no FPS: Virada e Tiro | SkillDrills",
    description: "Giro de 180° no FPS: perceba alvos nas bordas da tela pela visão periférica, faça uma virada rápida e pare a mira com precisão. Grátis no navegador.",
    url: "https://skilldrills.online/pt/drills/fps/180-degree-awareness",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Giro de 180° no FPS: Virada e Tiro | SkillDrills",
    description: "Giro de 180° no FPS: perceba alvos nas bordas da tela pela visão periférica, faça uma virada rápida e pare a mira com precisão. Grátis no navegador.",
  },
};

export default function AwarenessDrillPtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos de FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Giro de 180° no FPS", "item": "https://skilldrills.online/pt/drills/fps/180-degree-awareness" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Giro de 180° no FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Navegador Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Simulador interativo de giro de 180 graus para FPS. Desenvolva agilidade de braço, tempo de reação contra flanqueamentos e percepção periférica.",
    "genre": "Treino de FPS / Percepção Espacial",
    "url": "https://skilldrills.online/pt/drills/fps/180-degree-awareness",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Giro de 180° no FPS",
    "url": "https://skilldrills.online/pt/drills/fps/180-degree-awareness",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requer suporte a JavaScript e HTML5 Canvas com Pointer Lock",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Giro de 180° no FPS grátis no navegador. Pratique flicks amplos até as bordas da tela e o controle de parada da mira para CS2 e Valorant."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Giro de 180° no FPS",
    "gamePlatform": "Web Browser",
    "genre": ["Treino de FPS", "Treinador de Mira"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "url": "https://skilldrills.online/pt/drills/fps/180-degree-awareness",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "dateModified": "2026-11-09"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o treino de percepção e giro de 180 graus em FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É uma rotina psicomotora para condicionar a detecção visual periférica e a reorientação mecânica do mouse quando alvos surgem totalmente fora do campo visual central."
        }
      },
      {
        "@type": "Question",
        "name": "Como aprimorar a percepção espacial de 360°?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Combinando exercícios de wide flick, posicionamento de mira e atenção ao áudio 3D, você constrói aos poucos um mapa mental do mapa do jogo."
        }
      },
      {
        "@type": "Question",
        "name": "Exercícios de 180° melhoram o tempo de reação motora?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Podem ajudar. Perceber o alvo pela visão periférica antes de disparar o movimento do braço é exatamente o que o treino repete, mas não há ganho garantido."
        }
      },
      {
        "@type": "Question",
        "name": "De que forma a visão periférica ajuda em jogos de tiro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A visão central foveal cobre apenas cerca de 2 graus, enquanto a visão periférica detecta movimentos em quase 180 graus, permitindo identificar inimigos que flanqueiam sem perder a mira do ângulo principal."
        }
      },
      {
        "@type": "Question",
        "name": "Como parar de morrer de costas ou ser flanqueado em FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Combinando áudio espacial com giros rápidos e calibrados de 180 graus. Treinar a distância física exata no mousepad ajuda a virar e acertar o inimigo antes de ser eliminado."
        }
      },
      {
        "@type": "Question",
        "name": "O que é consciência situacional (gamesense) em e-sports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É a capacidade contínua de sintetizar minimapa, sons de passos, habilidades usadas e visão periférica para antecipar a posição e o timing dos adversários."
        }
      },
      {
        "@type": "Question",
        "name": "Este treino funciona para CS2, Valorant e outros jogos de tiro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em parte. No CS2 e no Valorant, uma virada rápida serve para fugir de flashbangs e checar ângulos. O treino não simula flashes nem câmera 3D: ele repete o flick amplo até as bordas da tela e a parada precisa que esses movimentos exigem."
        }
      },
      {
        "@type": "Question",
        "name": "Com que frequência devo treinar giros rápidos de 180 graus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De 10 a 15 minutos diários bastam para praticar a memória muscular de grandes rotações sem sobrecarregar tendões do punho ou ombro."
        }
      },
      {
        "@type": "Question",
        "name": "Devo movimentar o pulso ou o braço para fazer giros de 180°?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Giros amplos de 180 graus devem ser realizados prioritariamente com o antebraço, cotovelo e ombro, reservando o pulso e os dedos apenas para a microcorreção final sobre a cabeça."
        }
      },
      {
        "@type": "Question",
        "name": "Como o treino captura o movimento do mouse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O simulador utiliza a API HTML5 Pointer Lock para capturar o movimento do mouse no navegador. O resultado depende das configurações do seu sistema e do seu mouse."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Treinar Giros de 180° e Percepção Espacial",
    "description": "Instruções passo a passo para treinar giros rápidos de 180 graus e detecção de ameaças periféricas no mouse.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Ative o Pointer Lock e centralize o mouse",
        "text": "Clique em Iniciar Treino para travar o cursor e posicione o mouse físico no centro exato do mousepad."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Detecte o estímulo visual na visão periférica",
        "text": "Mantenha o foco central relaxado e identifique alvos nas extremidades laterais com a visão periférica."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Execute o movimento balístico com o antebraço",
        "text": "Faça um swipe horizontal de alta velocidade impulsionado pelo cotovelo e ombro, levando a mira até a borda oposta da tela."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Aplique a frenagem muscular e confirme o clique",
        "text": "Acione os músculos antagonistas para frear a mira sobre o alvo, confirme o alinhamento e clique para eliminar."
      }
    ]
  };

  const awarenessGuidePt = {
    heading: "Guia do Giro de 180° no FPS e Benchmarks Psicomotores",
    intro: [
      "O giro de 180° no FPS é treinado aqui em uma sequência prática: perceber um alvo na borda pela visão periférica, virar com o braço e parar a mira sobre o alvo. Ele reproduz a leitura de um flanco no FPS sem confundir velocidade de giro com precisão de finalização.",
      "A conversão dessa detecção em uma reorientação virtual completa de 180° opera sob o modelo de impulso em dois componentes (Elliott et al., 2010). Um impulso balístico inicial de malha aberta cobre de 80% a 90% da rotação necessária, seguido imediatamente pela frenagem muscular antagonista para evitar que o retículo ultrapasse o alvo (Schmidt et al., 1979). Pela Lei de Fitts (Fitts, 1954), quanto maior a amplitude angular, maior a dificuldade da tarefa, tornando o controle de parada e a área do mousepad determinantes.",
      "A cronometria digital neste treinador é executada através de registros de alta resolução performance.now() sob a API Pointer Lock do HTML5. Timers de navegadores possuem leve suavização por mitigações de hardware (~1 ms), portanto diferenças menores que 5 ms devem ser interpretadas como ruído natural. A operação com taxa de amostragem de 1000 Hz no mouse e monitor com alta taxa de atualização reduz distorções nas medições de sua velocidade e precisão (Woods et al., 2015).",
      "Como medir seu desempenho: cada disparo e deslocamento é registrado localmente no seu computador com clock de alta precisão. Mantenha as mesmas configurações de DPI, sensibilidade no jogo e espaço físico no mousepad entre as sessões para consolidar padrões motores confiáveis."
    ],
    benchmarks: {
      title: "Benchmarks de Giro de 180° e Reaquisição Espacial",
      headers: ["Fase do Giro / Métrica", "Latência Típica (ms)", "Mecanismo Biomecânico Motor", "Classificação Psicomotora"],
      rows: [
        ["Detecção Periférica e Gatilho Sacádico", "140 – 190 ms", "Bastonetes da retina e colículo superior", "Orientação visual pré-atentiva (Rayner 1998)"],
        ["Movimento Balístico do Braço (Giro 180°)", "180 – 260 ms", "Propulsão de antebraço, cotovelo e ombro", "Aceleração cinemática de malha aberta (Elliott 2010)"],
        ["Desaceleração e Frenagem da Mira", "60 – 110 ms", "Frenagem de músculos antagonistas (stopping power)", "Amortecimento de impulso de parada (Schmidt 1979)"],
        ["Microajuste Terminal e Clique", "70 – 130 ms", "Feedback visual foveal e disparo do gatilho", "Fase de aproximação pela Lei de Fitts (Fitts 1954)"],
        ["Tempo Total de Reaquisição de 180°", "450 – 690 ms", "Ciclo sensoriomotor completo de virada", "Faixa de prática SkillDrills"],
        ["Execução Subconsciente Avançada 180°", "320 – 420 ms", "Sinergia de sensibilidade e memória muscular pura", "Faixa de prática SkillDrills avançada"]
      ],
      note: "Estes valores são faixas de prática SkillDrills, não normas de pesquisa nem dados de usuários; as referências da coluna da direita apenas explicam a fase do movimento (Rayner 1998; Fitts 1954; Schmidt et al. 1979; Elliott et al. 2010; Woods et al. 2015). Latências reais variam com a sensibilidade física (cm/360°), atrito do mousepad e taxa de quadros."
    },
    techniques: {
      title: "Biomecânica e Dicas para Giros Ultrarrápidos de 180°",
      items: [
        {
          name: "Mecânica de Braço e Ponto de Apoio",
          desc: "Execute grandes viradas utilizando o cotovelo e o ombro como eixos centrais de rotação, em vez de forçar os tendões do pulso. Mantenha o antebraço plano e nivelado na mesa para permitir deslizamento suave.",
          tips: "Deixe espaço suficiente no mousepad para realizar uma virada completa de 180° em uma única passada sem erguer o mouse."
        },
        {
          name: "Calibração de cm/360° e Sensibilidade",
          desc: "A distância de meia volta é a metade do seu cm/360°: com 40 cm/360°, um giro de 180° pede 20 cm. Garanta que seu movimento do centro até a borda do mousepad cubra exatamente meia volta.",
          tips: "Evite alterar o DPI com frequência; a memória motora exige mapeamento angular consistente entre sessões de jogo."
        },
        {
          name: "Desvio Rápido de Flashbangs e Retorno",
          desc: "Em jogos competitivos, giros de 180° ajudam a não ser cegado por utilitários (o treino não simula flashes). Virar instantaneamente 180° para longe do flash e voltar em seguida exige controle rigoroso de desaceleração.",
          tips: "Treine reposicionar a mira na altura da cabeça imediatamente após concluir a manobra de fuga do flash."
        },
        {
          name: "Recentralização Rápida no Mousepad",
          desc: "Após realizar um giro longo de 180 graus e abater uma ameaça de costas, erga o mouse levemente e retorne-o ao centro do mousepad durante o tempo morto para nunca ficar sem espaço físico.",
          tips: "Pratique o reset do mouse com toques suaves no mousepad para evitar impactos que desgastem os pés de teflon."
        }
      ]
    },
    steps: [
      "Clique em Iniciar Treino para ativar o Pointer Lock e o modo imersivo de jogo.",
      "Mantenha a mira centralizada e a visão relaxada sobre a totalidade da tela.",
      "Assim que um alvo aparecer na borda esquerda ou direita (cada vez mais frequente conforme o nível sobe), execute uma passada explosiva de antebraço na horizontal.",
      "Freie com firmeza perto do alvo, confirme o alinhamento com a visão central e clique.",
      "Cada acerto soma 2 s (máx. 60 s); cada erro, clique no vazio ou alvo expirado tira 1 s. A partida começa com 45 s e termina em 0; depois veja pontuação, precisão e reação média no relatório final."
    ],
    audience: "Jogadores de CS2, Valorant, Apex Legends, Overwatch e shooters em geral que buscam reflexos rápidos contra flancos e maior velocidade de rotação no mouse.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'elliott2010', 'fitts1954', 'schmidt1979', 'leigh2015', 'rayner1998'),
    related: [
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/fps/angle-hold-trainer", label: "Treino de Mira e Ângulo (Crosshair Placement)" },
      { href: "/pt/drills/fps/micro-correction-precision", label: "Treino de Microcorreção" },
      { href: "/pt/drills/visual/reaction-speed/light-reaction", label: "Teste de Tempo de Reação" }
    ]
  };

  const copyPt = {
    h1Keyword: "Giro de 180° no FPS",
    h1Suffix: " — Virada e Tiro",
    subtitle: "Perceba alvos nas bordas da tela pela visão periférica, faça uma virada rápida com um flick amplo e freie a mira sobre o alvo.",
    statScore: "Pontuação",
    statTime: "Tempo",
    statAccuracy: "Precisão",
    statBestScore: "Recorde",
    startTitle: "Treino de Giro 180°",
    startSubtitle: "Mouse + Pointer Lock • Início com 45 s • Níveis infinitos",
    stageCaption: "Identifique alvos nas bordas com visão periférica e acerte-os com um flick amplo antes que desapareçam.",
    rulesTitle: "Regras de Treino e Sistema de Pontuação",
    rulesItems: [
      { num: "1", text: "Acerto de Alvo", highlight: "+100 PTS (+2 s, máx. 60 s)", result: "×Mult de Combo" },
      { num: "2", text: "Bordas de 180°", highlight: "Mais frequentes nas bordas", result: "Menores e mais breves" },
      { num: "3", text: "Progressão de Nível", highlight: "+1 Nível / 1.750 PTS", result: "Escala Adaptativa" },
      { num: "4", text: "Erro / Tempo Esgotado", highlight: "Inclui clique no vazio", result: "Reset Combo (-1 s)" }
    ],
    aboutTitle: "Sobre o Treino de Giro 180°",
    aboutHeading: "Por que treinar giros de 180 graus?",
    aboutText1: "Um giro de 180 graus é a maior rotação física realizada em um jogo de tiro. Segundo a Lei de Fitts (1954), o tempo de deslocamento cresce com a distância e o tamanho do alvo; portanto, o maior desafio é frear e cravar a mira na cabeça imediatamente após o giro.",
    aboutText2: "O simulador 180° Awareness Pro isola e desenvolve sua capacidade de processar estímulos visuais fora do ponto central. Diferente de treinos comuns de microajuste, este exercício exige amplitude espacial e rápida virada de mesa.",
    aboutText3: "O treino reproduz o giro com alvos nas bordas da tela, sem câmera 3D. Com a mesma sensibilidade, a repetição ajuda a memorizar a distância no mousepad, o que pode ajudar contra inimigos nas costas em CS2 e Valorant."
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

      <AwarenessDrillClient copy={copyPt} />

      <DrillGuide guide={awarenessGuidePt} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
