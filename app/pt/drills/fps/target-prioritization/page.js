import TargetPrioritizationClient from '@/app/drills/fps/target-prioritization/TargetPrioritizationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Prioridade de Alvos no FPS: Seleção de Alvos | SkillDrills",
  description: "Prioridade de alvos grátis no navegador: acerte os vermelhos antes dos amarelos e nunca atire nos aliados verdes. Seleção de alvos e controle do disparo.",
  keywords: [
    "prioridade de alvos",
    "seleção de alvos",
    "seleção de alvos Valorant",
    "priorização de alvos FPS",
    "avaliação de ameaças",
    "decisão tática FPS",
    "disciplina de gatilho",
    "treino de decisão sob pressão"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/target-prioritization",
    languages: getAlternateLanguages('/drills/fps/target-prioritization'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Prioridade de Alvos no FPS: Seleção de Alvos | SkillDrills",
    description: "Prioridade de alvos grátis no navegador: acerte os vermelhos antes dos amarelos e nunca atire nos aliados verdes. Seleção de alvos e controle do disparo.",
    url: "https://skilldrills.online/pt/drills/fps/target-prioritization",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Prioridade de Alvos no FPS: Seleção de Alvos | SkillDrills",
    description: "Prioridade de alvos grátis no navegador: acerte os vermelhos antes dos amarelos e nunca atire nos aliados verdes. Seleção de alvos e controle do disparo.",
  },
};

export default function TargetPrioritizationPtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Prioridade de alvos - seleção de alvos no FPS", "item": "https://skilldrills.online/pt/drills/fps/target-prioritization" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Prioridade de alvos - seleção de alvos no FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Drill grátis de prioridade de alvos com alvos vermelhos, amarelos e verdes: avaliação de ameaças e controle do disparo (Go/No-Go) para jogos de tiro.",
    "genre": "Treinamento FPS / Mira Cognitiva e Decisão",
    "url": "https://skilldrills.online/pt/drills/fps/target-prioritization",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Prioridade de alvos - seleção de alvos no FPS",
    "url": "https://skilldrills.online/pt/drills/fps/target-prioritization",
    "description": "Drill grátis de prioridade de alvos com alvos vermelhos, amarelos e verdes: avaliação de ameaças e controle do disparo (Go/No-Go) para jogos de tiro.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requer suporte a HTML5 Canvas e Pointer Lock API",
    "dateModified": "2026-11-09"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Prioridade de alvos - seleção de alvos no FPS",
    "url": "https://skilldrills.online/pt/drills/fps/target-prioritization",
    "description": "Drill grátis de prioridade de alvos com alvos vermelhos, amarelos e verdes: avaliação de ameaças e controle do disparo (Go/No-Go) para jogos de tiro.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["Treinamento FPS", "Aim Trainer", "Priorização de Alvos"],
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
        "name": "O que é priorização de alvos em jogos de tiro FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Priorização de alvos é o processo cognitivo executivo de avaliar instantaneamente múltiplos adversários em tela, determinar qual representa maior perigo imediato e abatê-lo primeiro, enquanto retém o disparo contra alvos secundários e aliados."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona este treino de prioridade de alvos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ao iniciar, a tela cheia e o Pointer Lock são ativados e o relógio começa em 45 segundos. De 2 a 4 alvos se movem ao mesmo tempo e quicam nas bordas. Vermelho (ameaça alta) vale 100 pontos e amarelo (ameaça média) 50 pontos, multiplicados pelo combo e pelo nível, e cada acerto soma 2 segundos (máximo de 60). O amarelo vira vermelho depois de um tempo; o verde (aliado) não pode ser atingido e some após cerca de 3 segundos. Acertar um amarelo enquanto ainda há um vermelho na tela é erro de prioridade: nenhum ponto e combo zerado. Fogo amigo e tiros errados também zeram o combo e tiram 1 segundo. A cada 1400 pontos o nível sobe, com mais alvos, mais velocidade e mais vermelhos."
        }
      },
      {
        "@type": "Question",
        "name": "Por que os jogadores atiram em pânico no alvo errado durante tiroteios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sob estresse, é comum reagir ao objeto mais próximo ou ao primeiro movimento em vez da ameaça mais perigosa, antes de verificar o que é. Treinar segurar o tiro ajuda a manter esse controle."
        }
      },
      {
        "@type": "Question",
        "name": "Como o paradigma cognitivo Go/No-Go se aplica ao tiro tático?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Formulado por Franciscus Donders (1868), o teste Go/No-Go avalia a capacidade de disparar rapidamente diante de estímulos válidos e suprimir o clique diante de estímulos neutros ou aliados, impedindo o fogo amigo e o desperdício de munição."
        }
      },
      {
        "@type": "Question",
        "name": "O que é o Tempo de Reação com Sinal de Parada (SSRT)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O SSRT (Logan & Cowan, 1984) mede o tempo necessário para cancelar uma ordem motora já iniciada. Quanto menor, mais rápido dá para cancelar um tiro contra um aliado ou chamariz. Este drill não mede o SSRT diretamente; ele treina não atirar nos alvos verdes."
        }
      },
      {
        "@type": "Question",
        "name": "Como ordenar ameaças quando vários inimigos entram no bomb?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Critérios comuns são linha de visão direta, letalidade da arma do inimigo e tempo até o disparo: quem já está mirando em você vem antes de quem está correndo ou de costas. Este drill simplifica isso em uma ordem fixa, vermelho antes de amarelo."
        }
      },
      {
        "@type": "Question",
        "name": "O que é supressão de distratores na neurociência da visão?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É o mecanismo de atenção seletiva pelo qual o córtex visual inibe intencionalmente respostas a estímulos irrelevantes (Treisman, 1980), permitindo fixar a fóvea no alvo crítico sem ser enganado por movimentos periféricos."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o custo de disparar em aliados ou chamarizes no Valorant e CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atirar em chamarizes (como clones do Yoru ou bonecos de distração) revela sua posição acústica, consome balas essenciais e desvia a mira da ameaça real, o que dá uma janela para o inimigo real."
        }
      },
      {
        "@type": "Question",
        "name": "Qual sensibilidade de mouse favorece a seleção precisa de ameaças?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sensibilidade muito alta dificulta parar a mira no alvo; muito baixa deixa lenta a troca para alvos distantes. Use de preferência sua sensibilidade habitual de jogo, com a qual você para com firmeza."
        }
      },
      {
        "@type": "Question",
        "name": "Por que a adrenalina elevada prejudica a tomada de decisão tática?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A ativação simpática intensa gera visão em túnel e prejudica a memória de trabalho, reduzindo a capacidade de processar simultaneamente múltiplos alvos sem treino cognitivo específico."
        }
      },
      {
        "@type": "Question",
        "name": "Com que frequência devo treinar a priorização cognitiva de alvos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não existe regra fixa. Uns 10 minutos antes de jogar são um formato razoável; compare sua precisão e o número de fogo amigo no mesmo equipamento ao longo dos dias."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Dominar a Priorização de Alvos e Disciplina de Gatilho",
    "description": "Procedimento passo a passo para calibrar a sensibilidade, avaliar ameaças e eliminar alvos na hierarquia correta.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrar Hardware e Sensibilidade",
        "text": "Ajuste a sensibilidade para ficar próxima da do seu jogo habitual.",
        "url": "https://skilldrills.online/pt/drills/fps/target-prioritization#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Identificar Hierarquia de Cores das Ameaças",
        "text": "Mapeie mentalmente os alvos vermelhos como prioridade máxima (+100 PTS), amarelos como secundários (+50 PTS) e verdes como aliados proibidos.",
        "url": "https://skilldrills.online/pt/drills/fps/target-prioritization#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Eliminar Ameaças Vermelhas Imediatas",
        "text": "Execute flicks precisos diretamente nos alvos vermelhos antes que seus cronômetros expirem e causem penalidade.",
        "url": "https://skilldrills.online/pt/drills/fps/target-prioritization#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Exercer Inibição de Disparo em Aliados Verdes",
        "text": "Reprema ativamente qualquer impulso de clique ao passar a mira sobre alvos verdes para preservar seu combo.",
        "url": "https://skilldrills.online/pt/drills/fps/target-prioritization#step-4"
      }
    ]
  };

  const targetPrioritizationGuide = {
    heading: "Prioridade de alvos no FPS: seleção de alvos e controle do disparo",
    intro: [
      "Este drill de prioridade de alvos pratica a decisão de escolher o inimigo mais perigoso antes do disparo: alvos vermelhos em movimento (ameaça alta) primeiro, depois os amarelos, e nunca os aliados verdes. Você treina avaliação de ameaças, filtragem da atenção e controle do tiro, por exemplo para trocações com vários inimigos no Valorant e CS2.",
      "A base da inibição da resposta motora foi elucidada por Gordon D. Logan & William B. Cowan (1984) no clássico modelo horse-race: quando um sinal de parada surge, o processo de inibição compete contra o processo motor em andamento. Sob pressão, o clique costuma vencer antes que o alvo seja conferido: é o tiro em pânico.",
      "Expandindo os fundamentos da cronometria mental de Franciscus Cornelis Donders (1868/1969) sobre tempos de reação de escolha e a teoria de integração de características de Anne Treisman & Garry Gelade (1980), este exercício força o cérebro a classificar alvos visualmente por nível de perigo antes de liberar a ordem motora para o dedo disparar.",
      "Ao incorporar o modelo de atenção de Michael I. Posner (1990), os paradigmas de rastreamento espacial de C. Shawn Green & Daphne Bavelier (2003) e cronometria digital de baixa latência (Woods et al., 2015), o exercício pratica mira seletiva e controle do disparo sob limite de tempo.",
      "Como isto é medido: cada disparo é cronometrado com precisão milissegunda via performance.now() no seu navegador de forma puramente local. Fatores de hardware: temporizadores web possuem granularidade típica de 1 ms, e telas atualizam em intervalos de 16,7 ms (60 Hz), 6,9 ms (144 Hz) e 4,1 ms (240 Hz). O polling rate do mouse soma cerca de 8 ms a 125 Hz contra 1 ms a 1000 Hz (Woods et al., 2015). Avalie seu progresso na mesma máquina."
    ],
    benchmarks: {
      title: "Como ler a tela de resultados",
      headers: ["Valor", "Como o drill conta", "Significado", "Como melhorar"],
      rows: [
        ["Precisão", "(acertos vermelhos + amarelos) ÷ todos os cliques", "Parcela de tiros na prioridade certa", "Compare seus próprios valores no mesmo aparelho"],
        ["Ameaças eliminadas", "Acertos em alvos vermelhos e amarelos", "Quantas ameaças você resolveu no tempo", "Aumentar mantendo o combo"],
        ["Fogo amigo / erro de prioridade", "Tiro no verde, ou no amarelo com vermelho visível", "Falha em segurar o tiro ou avaliar a ameaça", "Procurar o vermelho primeiro"],
        ["Combo máximo · nível máximo", "Acertos seguidos sem erro, 1 nível a cada 1400 pontos", "Consistência e dificuldade alcançada", "Reduzir erros antes de ganhar velocidade"]
      ],
      note: "Esta tabela descreve os valores que este drill realmente registra; não são ranques, tiers nem estatísticas de usuários."
    },
    techniques: {
      title: "Protocolos Baseados em Evidências para Aperfeiçoar a Priorização",
      items: [
        {
          name: "Inibição Executiva de Resposta (Disciplina Go/No-Go)",
          desc: "Treine a supressão voluntária do clique imediato ao avistar um alvo. Condicione o dedo indicador a aguardar a confirmação da cor pelo córtex visual antes de pressionar o interruptor do mouse.",
          tips: "Mantenha o dedo levemente relaxado sobre o botão esquerdo, sem exercer pressão prévia involuntária."
        },
        {
          name: "Varredura Dinâmica da Hierarquia de Ameaças",
          desc: "Varra o cenário buscando primeiro a assinatura visual de maior perigo (vermelho). Neutralize a ameaça urgente antes de direcionar a atenção aos alvos em contagem regressiva (amarelo).",
          tips: "Elimine alvos vermelhos antes de considerar qualquer outra ação; trate os amarelos como perigo em incubação."
        },
        {
          name: "Supressão Periférica de Distratores",
          desc: "Aprenda a ignorar estímulos neutros ou aliados verdes que surgem na periferia do seu campo visual, mantendo a fóvea focada no corredor de alvos hostis.",
          tips: "Não desvie a mira para alvos verdes mesmo que surjam perto da sua retícula."
        },
        {
          name: "Mira Balística Cadenciada com Parada Firme",
          desc: "Execute cada flick como um movimento deliberado e cadenciado. Acelere velozmente até o centro do alvo prioritário e freie com firmeza no mousepad.",
          tips: "Prefira um flick firme e controlado a movimentos frenéticos sem confirmação visual de cor."
        }
      ]
    },
    steps: [
      "Ajuste a sensibilidade para ficar próximo do seu jogo habitual e inicie o drill.",
      "Fixe a atenção no centro da tela e aguarde a aparição simultânea de alvos vermelhos, amarelos e verdes.",
      "Localize e elimine os alvos vermelhos de alta prioridade com disparos rápidos (+100 PTS / +2 s no relógio, máximo de 60 s).",
      "Neutralize os alvos amarelos (+50 PTS / +2 s) só quando não houver vermelho na tela, antes que virem vermelhos.",
      "Preserve o gatilho intacto diante de alvos verdes aliados; atirar em verdes, acertar amarelo com vermelho na tela ou errar zera seu combo."
    ],
    audience: "Jogadores competitivos de Valorant, Counter-Strike 2, Rainbow Six Siege e Apex Legends que buscam eliminar disparos por impulso, aprimorar a disciplina de tiro e dominar confrontos caóticos com múltiplos inimigos.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'green2003', 'donders1969', 'treisman1980', 'logan1984'),
    related: [
      { href: "/pt/drills/fps/target-acquisition", label: "Treino de Aquisição de Alvos" },
      { href: "/pt/drills/fps/target-switching-swarm", label: "Treino de Target Switching Swarm" },
      { href: "/pt/drills/fps/vertical-air-track", label: "Treino de Rastreamento Aéreo Vertical" },
      { href: "/pt/drills/fps/strafe-tracking", label: "Treino de Strafe Tracking" },
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" }
    ]
  };

  const copyPt = {
    h1Keyword: "Prioridade de alvos",
    h1Suffix: " - seleção de alvos no FPS",
    subtitle: "Escolha o alvo mais perigoso e controle o disparo em situações de pressão direto no navegador.",
    statScore: "Pontuação",
    statTime: "Tempo",
    statAccuracy: "Precisão",
    statBestScore: "Recorde",
    statThreatsCleared: "Ameaças Eliminadas",
    statMaxCombo: "Combo Máximo",
    statPeakLevel: "Nivel Máximo",
    startTitle: "Prioridade de alvos",
    startSubtitle: "Avaliação de Ameaças · Filtragem Cognitiva · Dificuldade Dinâmica",
    getReady: "PREPARE-SE",
    toggleFlash: "Alternar Flash de Erro",
    toggleSound: "Alternar Áudio",
    pausedTitle: "Jogo Pausado",
    pausedSubtitle: "Clique para retomar — o bloqueio do cursor será reativado.",
    stageCaption: "Elimine primeiro os alvos vermelhos de maior ameaça e depois os amarelos. Segure o disparo contra aliados verdes!",
    rulesTitle: "Instruções do Treino e Sistema de Pontos",
    rulesItems: [
      { num: "1", text: "Alvo de Alta Ameaça", highlight: "Vermelho (+100 PTS / +2s, máx. 60s)", result: "Prioridade Máxima" },
      { num: "2", text: "Ameaça Média", highlight: "Amarelo (+50 PTS / +2s)", result: "Pontua só sem vermelho na tela; vira vermelho" },
      { num: "3", text: "Unidade Amiga", highlight: "Verde (NÃO DISPARAR)", result: "Fogo amigo, erro de prioridade ou tiro errado zera combo (-1s)" },
      { num: "4", text: "Subir de Nível", highlight: "+1 / 1400 PTS", result: "Escalonamento Contínuo" }
    ],
    aboutTitle: "Sobre este drill de prioridade de alvos",
    aboutHeading: "O que é Priorização de Alvos?",
    aboutText: "Prioridade de alvos é a capacidade de escolher rapidamente qual ameaça abater primeiro enquanto retém o tiro contra todo o resto. Interromper uma ação já iniciada é um processo próprio que corre contra a ordem de disparo (Logan & Cowan, 1984) — por isso segurar o tiro é mais difícil do que disparar. Este drill treina isso com a regra vermelho antes de amarelo e nenhum tiro no verde."
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
      <TargetPrioritizationClient copy={copyPt} />
      <DrillGuide guide={targetPrioritizationGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
