import TargetAcquisitionClient from '@/app/drills/fps/target-acquisition/TargetAcquisitionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Treinar Mira no Valorant: Aquisição de Alvos | SkillDrills",
  description: "Quer treinar mira no Valorant de graça no navegador? Acerte 3 a 8 alvos do mais claro ao mais escuro e pratique aquisição de alvos e o primeiro tiro.",
  keywords: [
    "treinar mira no Valorant",
    "treinar mira valorant",
    "aim trainer valorant",
    "aquisição de alvos",
    "detecção de alvos",
    "primeiro tiro",
    "precisão do primeiro tiro",
    "treino de mira FPS",
    "reconhecimento visual",
    "identificação de ameaças",
    "pré-mira Valorant"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/target-acquisition",
    languages: getAlternateLanguages('/drills/fps/target-acquisition'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Treinar Mira no Valorant: Aquisição de Alvos | SkillDrills",
    description: "Quer treinar mira no Valorant de graça no navegador? Acerte 3 a 8 alvos do mais claro ao mais escuro e pratique aquisição de alvos e o primeiro tiro.",
    url: "https://skilldrills.online/pt/drills/fps/target-acquisition",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Treinar Mira no Valorant: Aquisição de Alvos | SkillDrills",
    description: "Quer treinar mira no Valorant de graça no navegador? Acerte 3 a 8 alvos do mais claro ao mais escuro e pratique aquisição de alvos e o primeiro tiro.",
  },
};

export default function TargetAcquisitionPtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Aquisição de Alvos", "item": "https://skilldrills.online/pt/drills/fps/target-acquisition" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Treinar Mira no Valorant: Aquisição de Alvos",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Drill gratuito de aquisição de alvos para quem quer treinar mira no Valorant: acerte os alvos por ordem de brilho e pratique o primeiro disparo.",
    "genre": "Treinamento FPS / Precisão do Primeiro Tiro",
    "url": "https://skilldrills.online/pt/drills/fps/target-acquisition",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Treinar Mira no Valorant: Aquisição de Alvos",
    "url": "https://skilldrills.online/pt/drills/fps/target-acquisition",
    "description": "Drill gratuito de aquisição de alvos para quem quer treinar mira no Valorant: acerte os alvos por ordem de brilho e pratique o primeiro disparo.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requer suporte a HTML5 Canvas e Pointer Lock API",
    "dateModified": "2026-11-09"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Treinar Mira no Valorant: Aquisição de Alvos",
    "url": "https://skilldrills.online/pt/drills/fps/target-acquisition",
    "description": "Drill gratuito de aquisição de alvos para quem quer treinar mira no Valorant: acerte os alvos por ordem de brilho e pratique o primeiro disparo.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["Treinamento FPS", "Aim Trainer", "Aquisição de Alvos"],
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
        "name": "Como funciona este drill para treinar mira no Valorant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada sessão dura 60 segundos. Aparecem grupos de 3 a 8 alvos com brilhos diferentes, e você precisa acertá-los do mais claro ao mais escuro. Um alvo correto vale +100 pontos multiplicados pelo combo e pelo nível; limpar o grupo soma +400 pontos multiplicados pelo nível e gera um novo grupo. Acertar o alvo errado ou clicar no vazio zera o combo. Joga-se com mouse e travamento do ponteiro; Esc encerra o drill. O SkillDrills é uma ferramenta independente, sem vínculo com a Riot Games."
        }
      },
      {
        "@type": "Question",
        "name": "O que é aquisição de alvos em jogos FPS competitivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A aquisição de alvos é a sequência cognitiva e motora que une detecção visual de um inimigo no campo de visão, distinção em relação a elementos do cenário, planejamento de trajetória motora e execução de um flick balístico para acertar o primeiro disparo."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre aquisição de alvos e tempo de reação puro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O teste de tempo de reação simples mede apenas a latência entre um estímulo isolado e um clique. A aquisição de alvos incorpora busca visual espacial, atenção seletiva, discriminação de contraste/luminância e precisão motora sob pressão de tempo."
        }
      },
      {
        "@type": "Question",
        "name": "Como a Teoria de Integração de Características explica a detecção de alvos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Formulada por Anne Treisman & Garry Gelade (1980), a teoria comprova que características visuais básicas (luminância, cor, orientação) são processadas em paralelo antes que a atenção espacial focada una esses traços em objetos distintos para seleção motora."
        }
      },
      {
        "@type": "Question",
        "name": "Como usar o olhar para adquirir alvos mais rápido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Segundo o modelo Guided Search (Wolfe, 2007), a atenção vai primeiro para o que mais se destaca. Em vez de varrer a tela linha por linha, mantenha o olhar no centro, encontre o alvo mais visível e leve o mouse para onde seu olhar já está. É exatamente essa sequência que o drill faz repetir."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o impacto da precisão do primeiro tiro em jogos táticos como CS2 e Valorant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em jogos de TTK ultracurto com headshots letais de um disparo (Vandal ou AK-47), o primeiro acerto muitas vezes decide o duelo, e errar o primeiro tiro dá tempo ao adversário de responder. Este drill não simula headshots reais, mas isola o hábito de escolher o alvo certo e depois colocar o primeiro clique com precisão."
        }
      },
      {
        "@type": "Question",
        "name": "Devo usar a visão central ou visão periférica para localizar alvos inimigos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Localize alvos com a visão periférica e use a visão fóvea central em conjunto com a retícula para confirmar o disparo. Fixar os olhos exclusivamente na mira estreita seu campo de atenção e retarda a detecção periférica."
        }
      },
      {
        "@type": "Question",
        "name": "Como a poluição visual e múltiplos alvos afetam o tempo de aquisição?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quando múltiplos alvos ou elementos de fundo compartilham características com o inimigo, a busca visual passa de paralela para serial, o que aumenta o tempo para encontrar o alvo (Treisman & Gelade, 1980). Neste drill, o número de alvos aumenta e a diferença de brilho diminui conforme o nível sobe."
        }
      },
      {
        "@type": "Question",
        "name": "Qual empunhadura de mouse é mais eficiente para aquisição rápida de múltiplos alvos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As pegadas Claw e Fingertip são as mais recomendadas por permitirem micro-ajustes rápidos com a ponta dos dedos e frenagem instantânea no mousepad, mantendo o antebraço livre para flicks angulares amplos."
        }
      },
      {
        "@type": "Question",
        "name": "A aceleração do mouse atrapalha o treino de mira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em geral, sim: a aceleração faz o mesmo movimento físico resultar em distâncias diferentes conforme a velocidade da mão, o que dificulta criar memória muscular. Use no jogo a mesma sensibilidade do treino e deixe a aceleração do mouse desligada."
        }
      },
      {
        "@type": "Question",
        "name": "Quantos minutos diários de treino de aquisição de alvos são indicados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não há uma duração ideal comprovada. Algumas sessões de 60 segundos bem focadas no aquecimento são um bom começo; pare antes da fadiga visual e compare seus resultados no mesmo equipamento."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Dominar a Aquisição de Alvos e Primeiro Tiro",
    "description": "Instruções passo a passo para identificar ameaças prioritárias, eliminar hesitação visual e acertar o primeiro disparo.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrar Sensibilidade",
        "text": "Ajuste a sensibilidade na página /drills para ficar igual à do seu jogo. O ponteiro é travado automaticamente ao começar.",
        "url": "https://skilldrills.online/pt/drills/fps/target-acquisition#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Manter Olhar Suave e Atenção Periférica",
        "text": "Mantenha os olhos relaxados no centro da tela, usando a visão periférica para detectar o surgimento do cluster de alvos.",
        "url": "https://skilldrills.online/pt/drills/fps/target-acquisition#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Discriminar Contraste da Ameaça Principal",
        "text": "Identifique instantaneamente o alvo com maior brilho sem realizar varreduras em série pelos outros elementos.",
        "url": "https://skilldrills.online/pt/drills/fps/target-acquisition#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Executar Flick Balístico com Frenagem no Mousepad",
        "text": "Mova a mira em linha reta ao centro do alvo e atire, usando a fricção do mousepad para impedir o sobretiro.",
        "url": "https://skilldrills.online/pt/drills/fps/target-acquisition#step-4"
      }
    ]
  };

  const targetAcquisitionGuide = {
    heading: "Treinar mira no Valorant: aquisição de alvos e primeiro tiro",
    intro: [
      "Para quem quer treinar mira no Valorant direto no navegador e de graça: durante 60 segundos aparecem de 3 a 8 alvos com brilhos diferentes, que devem ser acertados do mais claro ao mais escuro. Assim você repete o caminho entre escolher o alvo certo e acertar o primeiro tiro, útil para Valorant, CS2 e outros FPS táticos. O SkillDrills é uma ferramenta independente, sem vínculo com a Riot Games.",
      "A base teórica da busca visual e identificação de objetos foi formulada por Anne Treisman & Garry Gelade (1980) na Teoria de Integração de Características. Treisman provou que características visuais primárias — como contraste de luminância, cores salientes e orientação de bordas — são extraídas em paralelo por todo o campo visual. Apenas quando a atenção espacial focada é direcionada à coordenada, esses traços são fundidos em uma ameaça inimiga identificável.",
      "Expandindo o processamento visual paralelo, o modelo Guided Search de Jeremy M. Wolfe (1994, 2007) detalha como mapas sensoriais de saliência se combinam com expectativas cognitivas para priorizar a atenção. Quando os jogadores treinam discriminação de contraste, o córtex visual aprende a rejeitar distrações de fundo instantaneamente, o que pode encurtar o tempo entre o surgimento do alvo e o início do movimento nesta tarefa, sem garantia de melhora na partida.",
      "Integrando as leis motoras de Paul M. Fitts (1954), a teoria de submovimentos otimizados de David E. Meyer et al. (1988) e a cronometria digital de alta resolução (Woods et al., 2015), este exercício foca em iniciar o primeiro flick sem hesitar e parar com precisão no centro do alvo. Ele não garante melhora em partidas; serve para acompanhar a evolução dos seus próprios resultados.",
      "Sobre os resultados: a tela final mostra pontuação, precisão (acertos no alvo certo ÷ total de cliques), grupos limpos, combo máximo e nível alcançado. Seu recorde fica salvo apenas neste navegador. Este drill não mede tempo de reação em milissegundos. A taxa de atualização do monitor e o polling rate do mouse mudam a sensação, então compare-se no mesmo equipamento."
    ],
    benchmarks: {
      title: "Faixas de treino de precisão na aquisição de alvos",
      headers: ["Faixa", "Precisão", "O que indica"],
      rows: [
        ["Faixa 1", "95% ou mais", "Quase nenhum erro de ordem ou clique no vazio"],
        ["Faixa 2", "88% – 95%", "Mesmo em níveis altos, o alvo mais claro costuma ser escolhido primeiro"],
        ["Faixa 3", "80% – 88%", "Erros de ordem começam a aparecer com muitos alvos"],
        ["Faixa 4", "70% – 80%", "Alvos de brilho parecido são confundidos com frequência"],
        ["Faixa 5", "abaixo de 70%", "Firme a ordem antes de aumentar a velocidade"]
      ],
      note: "Precisão é o valor da tela final (acertos no alvo certo ÷ total de cliques). As faixas são referências de treino do SkillDrills, não normas científicas, ranques de jogo nem estatísticas de usuários."
    },
    techniques: {
      title: "Protocolos Baseados em Evidências para Aperfeiçoar a Aquisição de Alvos",
      items: [
        {
          name: "Varredura Paralela em Vez de Busca em Série",
          desc: "Evite examinar zonas individuais da tela uma a uma. Conte com os filtros pré-atencionais (Treisman & Gelade, 1980) para detectar pontos de contraste na visão periférica enquanto mantém o olhar central suave.",
          tips: "Mantenha o olhar relaxado perto do centro; deixe o alvo mais brilhante orientar sua sacada inicial."
        },
        {
          name: "Acoplamento Sacádico-Motor no Flick",
          desc: "Desacople o movimento dos olhos e das mãos: execute sacadas fóveas primeiro para identificar o centro do alvo, permitindo que a propriocepção impulsione a mira na trajetória correta.",
          tips: "Garanta que seu olhar já esteja no centro do alvo antes de mover o mouse."
        },
        {
          name: "Discriminação Rápida de Limiar de Contraste",
          desc: "Em cenários poluídos, silhuetas tênues indicam alvos secundários, enquanto alta luminância indica ameaça iminente. Treine para filtrar o ruído visual sem pausar a sequência balística.",
          tips: "Condicione-se a ignorar alvos secundários mais escuros até eliminar o estímulo de maior contraste."
        },
        {
          name: "Frenagem com Fricção no Mousepad",
          desc: "Equilibre velocidade balística com capacidade de frenagem (Meyer et al., 1988). Utilize o atrito do mousepad e a ponta dos dedos para cessar o movimento da mira exatamente no alvo sem sobretiro.",
          tips: "Aplique uma leve pressão vertical com a mão no final do movimento para travar o mouse mecanicamente."
        }
      ]
    },
    steps: [
      "Ajuste a sensibilidade na página /drills para ficar igual à do seu jogo e comece; o ponteiro é travado automaticamente.",
      "Fixe a visão em um olhar central suave, aguardando o aparecimento do conjunto de alvos pela tela.",
      "Identifique visualmente o alvo mais brilhante e prioritário através da filtragem de contraste em paralelo.",
      "Execute um flick limpo até o centro do alvo e clique para somar +100 PTS × multiplicadores de combo e nível. O tempo é fixo em 60 segundos e não aumenta com acertos.",
      "Elimine os alvos restantes em ordem decrescente de brilho para ganhar o bônus de grupo de +400 PTS × multiplicador de nível."
    ],
    audience: "Jogadores competitivos de Valorant, Counter-Strike 2, Apex Legends e Overwatch 2 que querem praticar a escolha do alvo e o primeiro tiro de forma isolada. É preciso usar mouse.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/pt/drills/fps/target-prioritization", label: "Treino de Priorização de Alvos" },
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/fps/micro-correction-precision", label: "Treino de Precisão e Micro-Correção" },
      { href: "/pt/drills/fps/strafe-tracking", label: "Treino de Strafe Tracking" },
      { href: "/pt/drills/fps/180-degree-awareness", label: "Treino de Percepção 180° Pro" }
    ]
  };

  const copyPt = {
    h1Keyword: "Treinar Mira no Valorant",
    h1Suffix: ": Aquisição de Alvos",
    subtitle: "Treine mira para o Valorant de graça: acerte os alvos do mais claro ao mais escuro e pratique o primeiro tiro no navegador.",
    statScore: "Pontuação",
    statTime: "Tempo",
    statAccuracy: "Precisão",
    statBestScore: "Recorde",
    statSetsCleared: "Conjuntos Limpos",
    statMaxCombo: "Combo Máximo",
    statPeakLevel: "Nível Máximo",
    startTitle: "Aquisição de Alvos Pro",
    startSubtitle: "Velocidade de Reconhecimento Visual · Dificuldade Dinâmica Infinita",
    getReady: "PREPARE-SE",
    toggleFlash: "Alternar Flash de Erro",
    toggleSound: "Alternar Efeitos Sonoros",
    pausedTitle: "Jogo Pausado",
    pausedSubtitle: "Clique para retomar — o travamento do ponteiro será reativado.",
    stageCaption: "Identifique e clique no alvo mais brilhante (maior opacidade) de cada conjunto o mais rápido e preciso possível.",
    rulesTitle: "Instruções do Treino e Pontuação",
    rulesItems: [
      { num: "1", text: "Alvo Atingido", highlight: "+100 PTS × Nível", result: "×Multiplicador Combo" },
      { num: "2", text: "Conjunto Limpo", highlight: "+400 PTS × Nível", result: "Novo Agrupamento" },
      { num: "3", text: "Subir de Nível", highlight: "+1 / 1400 PTS", result: "Escalonamento Contínuo" },
      { num: "4", text: "Alvo Incorreto / Erro", highlight: "Penalidade", result: "Zera Combo" }
    ],
    aboutTitle: "Sobre o Treino de Aquisição de Alvos",
    aboutHeading: "O que é Aquisição de Alvos?",
    aboutText: "A aquisição de alvos consiste em localizar a ameaça correta e direcionar a mira até ela. Recursos visuais básicos como cor, brilho e orientação são processados em paralelo pelo campo de visão antes que a atenção una esses elementos em um objeto (Treisman & Gelade, 1980) — razão pela qual um inimigo destacado é detectado muito mais rápido que um camuflado."
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
      <TargetAcquisitionClient copy={copyPt} />
      <DrillGuide guide={targetAcquisitionGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
