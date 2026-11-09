import InstantResponseClient from '@/app/drills/fps/instant-response/InstantResponseClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Teste de Reflexo para FPS: Reação no Clique | SkillDrills",
  description: "Teste de reflexo para FPS grátis: clique quando o alvo central ficar verde e veja seu tempo de reação no clique em ms. Esperas aleatórias e fintas. Requer mouse.",
  keywords: [
    "teste de reflexo para fps",
    "teste de reflexo fps",
    "tempo de reação no clique",
    "reação no clique",
    "tempo de reação fps",
    "reflexo gamer",
    "reação rápida fps"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/instant-response",
    languages: getAlternateLanguages('/drills/fps/instant-response'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Reflexo para FPS: Reação no Clique | SkillDrills",
    description: "Teste de reflexo para FPS grátis: clique quando o alvo central ficar verde e veja seu tempo de reação no clique em ms. Esperas aleatórias e fintas. Requer mouse.",
    url: "https://skilldrills.online/pt/drills/fps/instant-response",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de Reflexo para FPS: Reação no Clique | SkillDrills",
    description: "Teste de reflexo para FPS grátis: clique quando o alvo central ficar verde e veja seu tempo de reação no clique em ms. Esperas aleatórias e fintas. Requer mouse.",
  },
};

export default function InstantResponsePtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos de FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Teste de Reflexo para FPS", "item": "https://skilldrills.online/pt/drills/fps/instant-response" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Teste de Reflexo para FPS: Reação no Clique",
    "url": "https://skilldrills.online/pt/drills/fps/instant-response",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requer navegador com suporte a HTML5 Canvas e JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Teste de reflexo para FPS no navegador: mede o tempo de reação no clique em milissegundos e penaliza disparos antecipados e cliques em fintas."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
    "name": "Teste de Reflexo para FPS - SkillDrills",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Ferramenta psicomotora para medição da latência de estímulo visual e resposta de clique em shooters competitivos.",
    "genre": "Treino FPS / Reflexos",
    "url": "https://skilldrills.online/pt/drills/fps/instant-response",
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
    "name": "Teste de Reflexo para FPS",
    "url": "https://skilldrills.online/pt/drills/fps/instant-response",
    "description": "Alvo central que acende após uma espera aleatória, com fintas curtas a partir dos níveis intermediários, para treinar contenção de disparo e retenção de ângulos.",
    "gamePlatform": "Web Browser",
    "genre": ["Treino FPS", "Reação no clique"],
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
        "name": "Que tempo de reação no clique devo buscar neste teste?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não publicamos médias de jogadores. A tabela abaixo traz faixas de prática SkillDrills tiradas da pontuação: há bônus de velocidade abaixo de 500 ms, completo com 150 ms ou menos. Compare-se principalmente consigo mesmo, no mesmo aparelho."
        }
      },
      {
        "@type": "Question",
        "name": "Como diminuir o tempo de reação no primeiro tiro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reduza o pré-curso mecânico do botão do mouse mantendo o dedo em contato leve com o switch, ancore a visão foveal no ponto exato de abertura do ângulo e configure hardware com alta taxa de atualização."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a diferença entre tempo de reação simples e de escolha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O tempo de reação simples (Donders Tipo A) exige apenas um clique rápido ao ver o sinal. A reação de escolha (Lei de Hick) exige decidir entre atirar ou não (como evitar atirar em uma finta), o que adiciona tempo de decisão."
        }
      },
      {
        "@type": "Question",
        "name": "Como a taxa de atualização do monitor afeta a latência?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Um monitor de 60 Hz exibe novos quadros a cada 16,67 ms, enquanto um de 240 Hz atualiza a cada 4,17 ms. Essa diferença de 12,5 ms reduz diretamente o atraso físico antes que seus olhos vejam o adversário."
        }
      },
      {
        "@type": "Question",
        "name": "O polling rate do mouse faz diferença no tempo de reação?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Um mouse configurado a 1000 Hz envia dados a cada 1,0 ms, enquanto a 125 Hz o intervalo sobe para 8,0 ms. Taxas superiores a 1000 Hz reduzem o atraso de registro do clique no sistema operacional."
        }
      },
      {
        "@type": "Question",
        "name": "Como evitar atirar antes da hora em fintas ou flashbangs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Treine a inibição motora (resposta No-Go). Em vez de disparar por mero reflexo espasmódico, condicione o cérebro a confirmar a cor ou silhueta do alvo antes de liberar a contração muscular."
        }
      },
      {
        "@type": "Question",
        "name": "A cafeína realmente melhora o tempo de reação?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não damos números: o efeito varia de pessoa para pessoa, e o excesso causa tremores que prejudicam a precisão. Compare sessões feitas em condições parecidas."
        }
      },
      {
        "@type": "Question",
        "name": "Por que o tempo de reação piora à noite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cansaço e falta de sono podem deixar seus cliques mais lentos. Compare as sessões cansadas separadamente das sessões normais."
        }
      },
      {
        "@type": "Question",
        "name": "Como segurar pixel (angle hold) de forma mais eficiente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não coloque a retícula colada na quina da parede. Dê uma margem de espaço correspondente ao seu tempo de reação (cerca de meio corpo de distância) para que o adversário cruze sua mira na hora do clique."
        }
      },
      {
        "@type": "Question",
        "name": "Por quanto tempo devo treinar reflexos diariamente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sessões de 10 a 15 minutos costumam bastar. Treinos de reação exigem muito foco; sessões longas cansam e favorecem cliques antecipados."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Medir e Treinar o Tempo de Reação em Jogos FPS",
    "description": "Instruções passo a passo para avaliar a latência de clique e desenvolver reflexos motores limpos.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Posicionar o Cursor e Apoiar o Dedo no Switch",
        "text": "Mantenha a retícula no ponto neutro e encoste a ponta do indicador diretamente no botão do mouse sem pressionar.",
        "url": "https://skilldrills.online/pt/drills/fps/instant-response#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Ativar Modo Tela Cheia e Trava de Cursor",
        "text": "Inicie o exercício para capturar as coordenadas do mouse.",
        "url": "https://skilldrills.online/pt/drills/fps/instant-response#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Aguardar o Sinal Visual sem Disparos Falsos",
        "text": "Fixe o olhar no alvo central e resista ao impulso de atirar durante os intervalos de espera imprevisíveis.",
        "url": "https://skilldrills.online/pt/drills/fps/instant-response#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Disparar Instantaneamente ao Sinal Verde",
        "text": "Pressione o botão no instante da mudança de cor para registrar seu tempo de reação no clique (inclui a latência do monitor e do mouse).",
        "url": "https://skilldrills.online/pt/drills/fps/instant-response#step-4"
      }
    ]
  };

  const copyPt = {
    h1Keyword: "Teste de Reflexo para FPS",
    h1Suffix: " — reação no clique",
    subtitle: "Meça seu tempo de reação no clique em ms e treine a disciplina de gatilho contra fintas",
    statScore: "Pontuação",
    statTime: "Tempo Restante",
    statAccuracy: "Precisão",
    statBestScore: "Recorde Pessoal",
    startTitle: "Teste de Reflexo para FPS",
    startSubtitle: "Mouse + Pointer Lock • Início com 45 s • Níveis infinitos",
    getReady: "Preparar",
    pausedTitle: "Pausado",
    pausedSubtitle: "Clique para retomar (a trava de cursor será reativada)",
    stageCaption: "Clique imediatamente quando o alvo central acender em verde. Evite disparos antecipados em fintas.",
    rulesTitle: "Regras de Treino e Sistema de Pontos",
    rulesItems: [
      { num: "1", text: "Acerto no Flash", highlight: "+100 PTS (+2 s, máx. 60 s)", result: "×Mult de Combo" },
      { num: "2", text: "Bônus de Velocidade", highlight: "Tiro abaixo de 500 ms", result: "Até +150 PTS (≤150 ms)" },
      { num: "3", text: "Progressão de Nível", highlight: "+1 Nível / 1400 PTS", result: "Janelas Adaptativas" },
      { num: "4", text: "Disparo Antecipado", highlight: "Inclui fintas, erros e tempo esgotado", result: "Reset de Combo (-1 s)" }
    ],
    aboutTitle: "Sobre o Teste de Reflexo para FPS",
    aboutHeading: "Como funciona o teste de reflexo para FPS?"
  };

  const instantResponseGuide = {
    heading: "Teste de Reflexo para FPS: guia e faixas de prática",
    intro: [
      "O teste de reflexo para FPS mede o intervalo entre o alvo central ficar verde e o seu clique. O drill mostra o tempo de reação no clique em milissegundos e penaliza cliques antecipados, para treinar a retenção de ângulos em CS2, Valorant e outros FPS.",
      "A atenção espacial focalizada desempenha papel determinante na redução desse atraso. De acordo com os experimentos de Michael Posner (1990), direcionar a atenção ao ponto esperado pode acelerar a resposta em relação a uma observação dispersa. No Valorant e no CS2, é o motivo para manter o olhar no ângulo que você segura.",
      "A latência da cadeia de hardware e o relógio digital do sistema impõem limites à medição prática. Este teste emprega o temporizador de alta precisão performance.now() da API do navegador (Woods et al., 2015). Em um ecossistema competitivo moderno com monitor de 240 Hz (4,17 ms por quadro) e mouse de 1000 Hz (1,0 ms por relatório USB), o atraso instrumental diminui, mas continua incluído em cada medição.",
      "Medição técnica no seu navegador: todos os eventos de clique são cronometrados localmente sem transmissão para servidores de rede. Por razões de mitigação de vulnerabilidades Spectre, navegadores discretizam o relógio em ~1 ms, e telas operam em frequências fixas (16,7 ms a 60 Hz contra 4,1 ms a 240 Hz). Para comparações rigorosas, avalie sua evolução em condições de hardware idênticas."
    ],
    benchmarks: {
      title: "Faixas de prática SkillDrills por tempo de reação no clique",
      headers: ["Faixa SkillDrills", "Medição no drill (ms)", "Pontos base por acerto (antes dos multiplicadores de combo e nível)", "Observação"],
      rows: [
        ["Faixa A", "≤ 150 ms", "100 + bônus de velocidade 150", "Bônus completo. Se for frequente, verifique se não está antecipando."],
        ["Faixa B", "150 – 250 ms", "100 + aprox. 107–150", "A maior parte do bônus se mantém."],
        ["Faixa C", "250 – 350 ms", "100 + aprox. 64–107", "Bônus cai para cerca da metade."],
        ["Faixa D", "350 – 500 ms", "100 + 0–64", "Bônus perto de 0."],
        ["Faixa E", "> 500 ms", "100 (sem bônus)", "No nível 1 o alvo fica aceso cerca de 550 ms; depois fica mais curto e o tempo esgota."]
      ],
      note: "Estas faixas de prática SkillDrills vêm da pontuação do drill. Não são normas de pesquisa nem dados de usuários; as medições incluem a latência do monitor, do mouse e do navegador."
    },
    techniques: {
      title: "Técnicas para Reduzir a Latência de Reação",
      items: [
        {
          name: "Eliminação do Pré-Curso do Switch",
          desc: "Mantenha o indicador repousando levemente sobre o botão do mouse, no limiar exato do clique. Eliminar o deslocamento mecânico inicial encurta o movimento do clique.",
          tips: "Não tensione o braço todo; mantenha a mão relaxada para não endurecer o reflexo."
        },
        {
          name: "Ancoragem Visual Foveal Concentrada",
          desc: "Foque a visão exatamente onde o adversário irá aparecer. A teoria de atenção seletiva de Posner (1990) confirma que o foco pontual acelera o sinal no córtex visual.",
          tips: "Evite dispersar o olhar em áreas secundárias do cenário enquanto aguarda o contato."
        },
        {
          name: "Otimização da Cadeia de Latência do PC",
          desc: "Ative tecnologias de redução de atraso como NVIDIA Reflex ou AMD Anti-Lag, use taxa de amostragem de 1000 Hz no mouse e desative sincronização vertical (V-Sync).",
          tips: "Monitores com overdrive calibrado reduzem borrões de movimento e antecipam a identificação da silhueta."
        },
        {
          name: "Controle da Respiração e Nível de Alerta",
          desc: "O excesso de ansiedade leva a cliques falsos antes da hora. Pratique respirações pausadas para manter a ativação na faixa ideal segundo a Lei de Yerkes-Dodson.",
          tips: "Se estiver atirando antes do flash verde, pare por alguns segundos e recupere o foco."
        }
      ]
    },
    scientificPrinciples: {
      title: "Princípios Científicos do Tempo de Reação",
      items: [
        {
          name: "Modelo Subtrativo de Donders",
          desc: "Francisus Donders categorizou as reações mentais. A reação simples é a mais rápida possível, pois dispensa etapas de discriminação de alvos ou seleção de respostas alternativas."
        },
        {
          name: "Efeito de Posner e Atenção Espacial",
          desc: "Quando o cérebro sabe previamente onde o estímulo ocorrerá, os neurônios visuais entram em pré-ativação metabólica, acelerando a transmissão para o córtex motor."
        },
        {
          name: "Inibição de Resposta e Controle de Impulso",
          desc: "No nível competitivo, saber quando não atirar é tão importante quanto atirar rápido. O treino de No-Go reforça as vias pré-frontais que impedem cliques acidentais."
        }
      ]
    },
    steps: [
      "Ajuste sua sensibilidade de mouse usual nas configurações para manter a memória muscular consistente.",
      "Clique em 'Iniciar Treino' para ativar o modo de tela cheia e o bloqueio de cursor (Pointer Lock).",
      "Concentre a atenção visual na retícula central com o dedo indicador encostado levemente no gatilho.",
      "Clique instantaneamente ao detectar o sinal verde, evitando atirar antes da hora durante o atraso aleatório.",
      "Cada acerto soma 2 s (máx. 60 s); cada disparo antecipado, erro ou tempo esgotado tira 1 s. A partida começa com 45 s e termina em 0; depois veja tempo médio de reação, precisão, maior combo e nível alcançado."
    ],
    audience: "Jogadores competitivos de FPS e shooters táticos (Valorant, CS2, Rainbow Six Siege, Apex Legends, Overwatch 2), atletas de esportes eletrônicos e qualquer um treinando velocidade de reflexo.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'donders1969', 'hick1952'),
    related: [
      { href: "/pt/drills/fps/angle-hold-trainer", label: "Posicionamento de Mira e Retenção de Ângulos" },
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/fps/180-degree-awareness", label: "Consciência Espacial 180°" },
      { href: "/pt/drills/visual/reaction-speed/light-reaction", label: "Teste de Tempo de Reação" },
      { href: "/pt/drills/reaction-speed/reflex-training-drill", label: "Treino de Reflexos" }
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
      <InstantResponseClient copy={copyPt} />
      <DrillGuide guide={instantResponseGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
