import TargetSwitchingSwarmClient from '@/app/drills/fps/target-switching-swarm/TargetSwitchingSwarmClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Troca de Alvos: Vários Alvos Rápidos | SkillDrills',
  description: 'Treine troca de alvos grátis no navegador: acerte de 2 a 5 alvos em movimento em sequência. +2 s por acerto (máx. 60 s) e -1 s por clique errado.',
  keywords: [
    'troca de alvos',
    'troca de alvos FPS',
    'target switching',
    'múltiplos alvos',
    'spray transfer CS2',
    'mira multi alvos',
    'flick contínuo FPS',
    'troca rápida de alvos',
    'transição de mira',
    'troca de alvos sob pressão'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/fps/target-switching-swarm',
    languages: getAlternateLanguages('/drills/fps/target-switching-swarm'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Troca de Alvos: Vários Alvos Rápidos | SkillDrills',
    description: 'Treine troca de alvos grátis no navegador: acerte de 2 a 5 alvos em movimento em sequência. +2 s por acerto (máx. 60 s) e -1 s por clique errado.',
    url: 'https://skilldrills.online/pt/drills/fps/target-switching-swarm',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Troca de Alvos: Vários Alvos Rápidos | SkillDrills',
    description: 'Treine troca de alvos grátis no navegador: acerte de 2 a 5 alvos em movimento em sequência. +2 s por acerto (máx. 60 s) e -1 s por clique errado.',
  },
};

export default function TargetSwitchingSwarmPtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Target Switching Swarm", "item": "https://skilldrills.online/pt/drills/fps/target-switching-swarm" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Saccade", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Troca de Alvos: Vários Alvos Rápidos",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any (Web Browser)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Treino gratuito de troca de alvos no navegador: 2 a 5 alvos em movimento que quicam pela tela, para acertar um após o outro."
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Troca de Alvos: Vários Alvos Rápidos",
    "url": "https://skilldrills.online/pt/drills/fps/target-switching-swarm",
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
    "name": "Troca de Alvos: Vários Alvos Rápidos",
    "description": "Drill gratuito de troca de alvos: um enxame de 2 a 5 alvos em movimento que reaparecem assim que são acertados, para treinar a sequência.",
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
        "name": "O que é target switching no treino de mira para FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Target switching (troca de alvos) é a habilidade mecânica de eliminar um alvo e transitar instantaneamente a mira para o próximo alvo hostil sem pausa perceptiva ou retorno ao ponto neutro. É útil em confrontos contra vários adversários seguidos."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a diferença entre target switching e um flick shot convencional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O flick shot convencional foca em uma única transição balística a partir de uma postura neutra. O target switching exige encadear múltiplos flicks contínuos com desaceleração precisa nos limites do alvo, absorvendo a inércia do movimento sem pausas de confirmação."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são as regras deste treino de troca de alvos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O cronômetro começa em 45 segundos. Conforme o nível, 2 a 5 alvos em movimento que quicam pela tela ficam ativos. Cada acerto vale +100 pontos multiplicados pelo combo e pelo nível e soma 2 segundos (máximo de 60). Um clique no vazio tira 1 segundo e zera o combo. Com a opção de tempo limite dos alvos ativada, um alvo não acertado a tempo (cerca de 2,8 segundos no início, menos nos níveis altos) some e também tira 1 segundo. A cada 2.100 pontos o nível sobe e os alvos ficam menores e mais rápidos. Joga-se com mouse e travamento do ponteiro; Esc encerra o drill."
        }
      },
      {
        "@type": "Question",
        "name": "Por que muitos jogadores hesitam após eliminar um inimigo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essa hesitação ocorre quando você espera o retorno visual ou sonoro da eliminação antes de procurar o próximo alvo. Neste drill, o alvo acertado some na hora e outro aparece, então você repete a passagem direta do olhar e do mouse para o próximo alvo."
        }
      },
      {
        "@type": "Question",
        "name": "A troca de alvos ajuda no spray transfer do CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Só em parte. Este drill conta cliques isolados e não simula recuo nem rajadas. Mas levar a mira de um alvo ao próximo e parar com precisão é a base do spray transfer, então ele serve como treino complementar."
        }
      },
      {
        "@type": "Question",
        "name": "Quais jogos competitivos mais exigem excelência em troca de alvos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Counter-Strike 2, Apex Legends, Overwatch 2 e Call of Duty Warzone, entre outros. Em jogos táticos, decide clutches com disparos únicos; em jogos com alto time-to-kill (TTK), permite alternar o fogo imediatamente após a quebra de escudo."
        }
      },
      {
        "@type": "Question",
        "name": "Qual pegada de mouse proporciona o melhor desempenho em target switching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As pegadas Claw grip e Fingertip grip são ideais porque preservam a mobilidade dos dedos e do pulso para microcorreções rápidas de frenagem, enquanto o antebraço cuida de transições amplas de grande amplitude angular."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a relação entre target switching e a Lei de Fitts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Lei de Fitts (Fitts, 1954) dita que o tempo de movimento depende da distância e da largura do alvo. No target switching, os jogadores aprendem a escolher trajetórias com menor índice de dificuldade (alvos adjacentes), reduzindo o tempo total do ciclo de disparos."
        }
      },
      {
        "@type": "Question",
        "name": "Com que frequência devo praticar o exercício de target switching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não há uma duração ideal comprovada. Algumas sessões focadas como aquecimento antes das partidas são um bom começo; compare seus resultados no mesmo equipamento. Não há garantia de melhora nas partidas."
        }
      },
      {
        "@type": "Question",
        "name": "Este treinador de target switching é gratuito e seguro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, é gratuito e sem download, rodando no navegador com mouse e travamento do ponteiro; não funciona em aparelhos só com toque. Seu recorde fica salvo apenas neste navegador."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Treinar Target Switching e Troca Rápida de Alvos no Navegador",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Configurar Sensibilidade e Travar o Cursor",
        "text": "Ajuste a sensibilidade na página /drills para ficar igual à do seu jogo e comece; o ponteiro é travado automaticamente."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Mapear Grupos de Alvos por Proximidade",
        "text": "Faça uma varredura visual rápida do enxame para identificar pares ou grupos de alvos com menor separação angular."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Eliminar o Primeiro Alvo e Ganhar Tempo Bônus",
        "text": "Acerte o primeiro alvo para somar +100 pontos e adicionar 2 segundos ao cronômetro (máximo de 60)."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Transitar Imediatamente sem Pausa de Confirmação",
        "text": "Lance a mira em direção ao próximo alvo enquanto o tiro anterior ainda é registrado, eliminando a hesitação pós-abate."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Construir Multiplicadores de Combo e Avançar Níveis",
        "text": "Mantenha a sequência de eliminações ininterrupta para elevar os combos multiplicadores e desbloquear níveis com maior velocidade."
      }
    ]
  };

  const targetSwitchingGuide = {
    heading: "Troca de alvos: encadear vários alvos rápidos",
    intro: [
      "Este treino gratuito de troca de alvos mantém sempre de 2 a 5 alvos em movimento quicando pela tela. Assim que você acerta um, outro aparece, e você repete a passagem da mira para o próximo alvo sem pausa de confirmação. O cronômetro começa em 45 segundos, cada acerto soma 2 segundos (máximo de 60) e cada clique errado tira 1; enquanto você acerta com precisão, a sessão continua.",
      "A psicofísica da troca de alvos é regida pela Lei de Fitts (Fitts, 1954) e pelo modelo estocástico de submovimentos otimizados desenvolvido por David E. Meyer et al. (1988). Sob essa ótica biomecânica, um movimento de mira compõe-se de um submovimento primário rápido que cobre a maior parte da distância, seguido por microcorreções secundárias guiadas por feedback visual. Muitos jogadores fazem uma pausa curta após cada abate para confirmar a eliminação. Este drill busca levar o olhar ao próximo alvo já no clique para encurtar essa pausa.",
      "A indexação visual em enxames densos apoia-se em mecanismos de integração de características e busca visual pré-atencional (Anne M. Treisman & Garry Gelade, 1980; Jeremy M. Wolfe, 2007). Conseguimos acompanhar alguns objetos em movimento ao mesmo tempo; planejar uma ordem curta entre alvos próximos deixa as trocas mais fluidas.",
      "Sobre os resultados: a tela final mostra pontuação, precisão (acertos ÷ total de cliques), alvos destruídos, combo máximo e nível alcançado. Seu recorde fica salvo apenas neste navegador. Este drill não mede tempo de transição em milissegundos. A taxa de atualização do monitor e o polling rate do mouse mudam a sensação, então compare-se no mesmo equipamento."
    ],
    benchmarks: {
      title: "Faixas de treino de precisão na troca de alvos",
      headers: ["Faixa", "Precisão", "O que indica"],
      rows: [
        ["Faixa 1", "95% ou mais", "Quase nenhum clique no vazio, mesmo em níveis altos"],
        ["Faixa 2", "88% – 95%", "Erros ocasionais em alvos rápidos, mas o ritmo de troca se mantém"],
        ["Faixa 3", "80% – 88%", "Passa do alvo ao trocar para alvos distantes"],
        ["Faixa 4", "70% – 80%", "Cliques apressados fazem perder tempo com frequência"],
        ["Faixa 5", "abaixo de 70%", "Reduza a velocidade e firme a parada antes de acelerar"]
      ],
      note: "Precisão é o valor da tela final (acertos ÷ total de cliques). As faixas são referências de treino do SkillDrills, não normas científicas, ranques de jogo nem estatísticas de usuários."
    },
    techniques: {
      title: "Protocolos Científicos para Dominar a Troca de Alvos",
      items: [
        {
          name: "Pré-Roteamento Sacádico e Indexação Visual",
          desc: "Desloque o foco visual para o alvo secundário enquanto a mão ainda conclui a microcorreção final do primeiro alvo (Treisman & Gelade, 1980; Wolfe, 2007). Em geral, o olhar chega ao alvo antes da mão.",
          tips: "Nunca encare um alvo após atirar nele; confie na visão periférica para registrar a destruição enquanto a fóvea ocular já mira o próximo candidato."
        },
        {
          name: "Frenagem Terminal e Otimização Submovimental",
          desc: "Aplique controtensão muscular firme no final do flick para cessar o movimento bruscamente no centro do alvo sem oscilações (Meyer et al., 1988).",
          tips: "Pense no mouse como se tivesse freios hidráulicos: acelere velozmente saindo do alvo anterior e trave com firmeza sobre o próximo."
        },
        {
          name: "Roteamento Espacial pelo Vizinho Mais Próximo",
          desc: "Varra o enxame priorizando alvos com menor distância angular entre si em vez de cruzar a tela de ponta a ponta sem critério (Fitts, 1954).",
          tips: "Limpe pares e trios vizinhos antes de fazer flicadas longas pelas diagonais da tela."
        },
        {
          name: "Desacoplamento de Tensão Muscular e Microajuste",
          desc: "Mantenha uma pegada relaxada (nível 3 em uma escala de 10) para viabilizar microcorreções de dedos e pulso sem enrijecer o antebraço.",
          tips: "Se o pulso cansar ou a mira travar em transições longas, solte conscientemente a pressão do polegar e do dedo mínimo."
        }
      ]
    },
    steps: [
      "Ajuste a sensibilidade na página /drills igual à do seu jogo e comece (ponteiro travado automaticamente).",
      "Identifique visualmente os agrupamentos de alvos mais próximos para traçar sua rota de disparos.",
      "Acerte o primeiro alvo para somar +100 pontos × multiplicadores de combo e nível e +2 s no cronômetro (máx. 60 s).",
      "Redirecione o impulso do retículo imediatamente ao próximo alvo vizinho sem esperar confirmação visual.",
      "Evite cliques errados (-1 s), encadeie acertos para subir o combo e chegue a níveis com alvos menores e mais rápidos."
    ],
    audience: "Jogadores de CS2, Apex Legends e Overwatch 2 que querem treinar separadamente a troca de alvos entre vários adversários. É preciso usar mouse.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/pt/drills/fps/target-prioritization", label: "Priorização de Alvos FPS" },
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/fps/target-acquisition", label: "Aquisição de Alvos FPS" },
      { href: "/pt/drills/fps/180-degree-awareness", label: "Percepção 180° Pro" },
      { href: "/pt/drills/fps/recoil-control", label: "Controle de Recuo" }
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

      <TargetSwitchingSwarmClient
        copy={{
          h1Keyword: "Troca de Alvos",
          h1Suffix: ": Vários Alvos Rápidos",
          subtitle: "Treine trocas rápidas e precisas entre vários alvos em movimento, grátis no navegador.",
          statScore: "Pontos",
          statTime: "Tempo",
          statAccuracy: "Precisão",
          statBestScore: "Recorde",
          statTargetsDestroyed: "Alvos Destruídos",
          statMaxCombo: "Combo Máximo",
          statPeakLevel: "Nível Máximo",
          startTitle: "Target Switching Swarm",
          startSubtitle: "Entrada Raw de Hardware • Progressão Contínua",
          stageCaption: "Acerte os alvos em movimento em sequência antes que sumam. Cada clique errado custa 1 segundo e o combo.",
          rulesTitle: "Regras de Treino e Sistema de Pontuação",
          aboutTitle: "Sobre Target Switching em Jogos de Tiro (FPS)",
          rulesItems: [
            { num: "1", text: "Alvo Atingido", highlight: "+100 PTS (+2s, máx. 60s)", result: "×Multiplicador Combo" },
            { num: "2", text: "Enxame Contínuo", highlight: "Respawn Imediato", result: "2 a 5 alvos ativos" },
            { num: "3", text: "Tiro Errado / Tempo Esgotado", highlight: "Penalidade", result: "Reset de Combo (-1s)" },
            { num: "4", text: "Progressão de Nível", highlight: "+1 Nivel / 2.100 PTS", result: "Mais Rápido & Menor" }
          ]
        }}
      />
      <DrillGuide guide={targetSwitchingGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
