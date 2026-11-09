import MicroCorrectionClient from '@/app/drills/fps/micro-correction-precision/MicroCorrectionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Microajuste de Mira para Headshots | SkillDrills",
  description: "Microajuste de mira grátis no navegador: pratique microajustes após o flick, desaceleração e precisão de headshots no Valorant e CS2.",
  keywords: [
    "microajuste de mira",
    "microajuste de mira para headshots",
    "microajustes de mira",
    "micro correção de mira",
    "micro flicks cs2",
    "ajuste fino de mira mouse",
    "treinar precisao de headshot",
    "desaceleracao de mouse fps",
    "ajuste de mira tatica",
    "desaceleração de mouse fps",
    "precisão de headshot",
    "microajuste de mira valorant"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/micro-correction-precision",
    languages: getAlternateLanguages('/drills/fps/micro-correction-precision'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Microajuste de Mira para Headshots | SkillDrills",
    description: "Microajuste de mira grátis no navegador: pratique microajustes após o flick, desaceleração e precisão de headshots no Valorant e CS2.",
    url: "https://skilldrills.online/pt/drills/fps/micro-correction-precision",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Microajuste de Mira para Headshots | SkillDrills",
    description: "Microajuste de mira grátis no navegador: pratique microajustes após o flick, desaceleração e precisão de headshots no Valorant e CS2.",
  },
};

export default function MicroCorrectionPage() {
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
         "name": "Microajuste de mira",
        "item": "https://skilldrills.online/pt/drills/fps/micro-correction-precision"
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Microajuste de mira para headshots",
    "url": "https://skilldrills.online/pt/drills/fps/micro-correction-precision",
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
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Fine_motor_skill"],
    "name": "Microajuste de mira para headshots",
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
    "name": "Micro-Correction Precision FPS Trainer",
    "description": "Simulador de treino de tiro tático para calibrar desaceleração terminal e micro-ajustes com ponteiro bruto.",
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
        "name": "O que é a desaceleração de mouse (frenagem motora) no tiro tático FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A desaceleração de mouse é a capacidade biomecânica de frear o momentum da mão de forma rápida e estável no final de um deslocamento rápido (flick). O domínio dessa frenagem neutraliza a inércia cinética, impedindo que a retícula ultrapasse a hitbox inimiga (overshoot) e permitindo o alinhamento no pixel exato da cabeça."
        }
      },
      {
        "@type": "Question",
        "name": "Por que os jogadores passam do alvo (overflick) em jogos como Valorant e CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O overflick ocorre quando o impulso balístico inicial gera mais energia cinética do que a musculatura da mão e a fricção do mousepad conseguem absorver. Geralmente decorre de sensibilidade excessivamente alta, tensão muscular exagerada no antebraço ou falta de coordenação entre os músculos flexores dos dedos para estabilizar a parada."
        }
      },
      {
        "@type": "Question",
        "name": "Como o modelo de movimento em dois componentes (Woodworth e Meyer) explica o micro-ajuste?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Formalizado por Robert S. Woodworth (1899) e aprimorado por Meyer et al. (1988), o modelo divide mira rápida em duas fases: uma fase balística aberta cobrindo aproximadamente 85% a 90% da distância, seguida por uma submovimentação corretiva fechada orientada por feedback visual imediato. É nessa fase final que os micro-ajustes decidem o acerto."
        }
      },
      {
        "@type": "Question",
        "name": "Como treinar micro-correções de mira para Valorant e CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Combine um bom posicionamento prévio de mira (crosshair placement) com exercícios de micro-ajuste, e só dispare depois de ver a retícula alinhada na cabeça. Neste drill, o micro-alvo surge a 55–90 px do alvo âncora (até 145 px conforme o nível sobe), reproduzindo essa correção curta."
        }
      },
      {
        "@type": "Question",
        "name": "O que significa confirmação de alvo (target confirmation) antes do disparo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Confirmação de alvo é a fração de segundo cognitiva em que o córtex visual valida que a retícula está sobreposta à hitbox do adversário antes do disparo. Atirar precipitadamente durante o deslocamento gera disparos falhos por desvio balístico."
        }
      },
      {
        "@type": "Question",
        "name": "O treino de micro-correção realmente melhora a taxa de headshots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pode ajudar. O primeiro flick raramente cai exatamente na cabeça, e este drill repete justamente a pequena correção que vem depois. O efeito no jogo depende de cada pessoa e do volume de treino, e não é garantido."
        }
      },
      {
        "@type": "Question",
        "name": "A taxa de atualização do monitor (Hz) e o polling rate do mouse influenciam os micro-ajustes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Monitores de alta frequência (144Hz a 360Hz) fornecem maior densidade temporal de quadros, diminuindo o atraso de exibição e proporcionando trajetórias de retícula mais nítidas. Taxas de sondagem de 1000Hz ou mais reduzem a latência de entrada do sensor para 1 ms ou menos, garantindo precisão sub-pixel sem atraso perceptível."
        }
      },
      {
        "@type": "Question",
        "name": "Com que frequência devo treinar exercícios de micro-correção para evitar fadiga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sessões diárias focadas de 10 a 15 minutos antes de partidas ranqueadas são ideais. Períodos mais curtos e com alta concentração constroem memória neuromuscular sem causar fadiga nos músculos intrínsecos da mão e tendões do punho."
        }
      },
      {
        "@type": "Question",
        "name": "Qual empunhadura de mouse (Fingertip, Claw, Palm) favorece ajustes finos com as pontas dos dedos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Empunhaduras Claw (garra) e Fingertip (pontas dos dedos) oferecem maior liberdade para micro-ajustes verticais e horizontais, pois a base da palma não bloqueia o deslizamento do mouse e os dedos mantêm amplitude total de flexão e extensão."
        }
      },
      {
        "@type": "Question",
        "name": "Por que erros de clique ou tempo esgotado zeram o combo neste treinador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para valorizar a precisão em vez de cliques apressados. Errar o âncora ou o micro-alvo, ou deixar um alvo expirar, zera o combo e tira 1 segundo. O combo só sobe ao acertar o micro-alvo, e o multiplicador vai até 3,0×."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo dura uma rodada e como a pontuação é calculada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A rodada começa com 45 segundos. Cada acerto no âncora e cada acerto no micro-alvo soma 1 segundo (máximo de 60 segundos), e a rodada termina em 0. O âncora vale 10 pontos e o micro-alvo de 100 a 150 pontos conforme a distância do centro, multiplicados pelo combo e pelo nível. O nível sobe 1 a cada 1.400 pontos, sem limite: os alvos ficam menores e o tempo de vida (começa em 1,8 s) fica mais curto."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Praticar Micro Correção de Mira com Precisão",
    "description": "Protocolo metódico para isolar desaceleração terminal e executar ajustes finos de mira em atiradores táticos.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibração e Bloqueio de Ponteiro",
        "text": "Configure sua sensibilidade e DPI reais para manter sua sensibilidade habitual e ative o Pointer Lock no navegador."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Disparo no Alvo Âncora",
        "text": "Clique no alvo primário central para ativar o micro-alvo periférico adjacente."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Frenagem e Micro-Ajuste com os Dedos",
        "text": "Mova a retícula cobrindo 90% do percurso, freie bruscamente e use a ponta dos dedos para centralizar o micro-alvo."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Confirmação Visual e Finalização",
        "text": "Confirme visualmente o alinhamento da mira no centro do micro-alvo antes de disparar, mantendo cadência constante."
      }
    ]
  };

  const copyPt = {
    h1Keyword: "Microajuste de Mira",
    h1Suffix: " para Headshots",
    subtitle: "Treine a desaceleração terminal e micro-ajustes imediatos para precisão cirúrgica de headshots.",
    statScore: "Pontuação",
    statTime: "Tempo",
    statAccuracy: "Precisão",
    statBestScore: "Recorde",
    statAvgCorrection: "Correção Média",
    statMaxCombo: "Combo Máximo",
    statPeakLevel: "Nível Máximo",
    startTitle: "Microajuste de mira para headshots",
    startSubtitle: "Pointer Lock • Progressão Contínua e Desaceleração",
    getReady: "PREPARE-SE",
    toggleFlash: "Alternar Flash de Erro",
    toggleSound: "Alternar Efeitos Sonoros",
    stageCaption: "Clique no alvo âncora e ajuste instantaneamente a retícula com os dedos para acertar o micro-alvo.",
    rulesTitle: "Instruções do Treino e Sistema de Pontos",
    rulesItems: [
      { num: "1", text: "Acertar Âncora", highlight: "+10 pts (+1,0s)", result: "Libera micro-alvo" },
      { num: "2", text: "Acertar Micro", highlight: "100–150 pts (+1,0s)", result: "Precisão × Combo × Nível" },
      { num: "3", text: "Subida de Nível", highlight: "+1 Nível / 1.400 pts", result: "Escala adaptativa" },
      { num: "4", text: "Erro / Tempo", highlight: "Penalidade", result: "Reset combo (-1,0s)" }
    ],
    aboutTitle: "Sobre o microajuste de mira",
    aboutHeading: "O que é a Micro Correção de Mira?",
    aboutText: "A maioria dos movimentos de mira não ocorre em um único impulso, mas em dois: um deslocamento balístico inicial e um micro-ajuste corretivo guiado visualmente (Woodworth, 1899; Meyer et al., 1988). Este treino isola e condiciona essa segunda fase, onde a precisão de headshots é realmente definida."
  };

  const microCorrectionGuide = {
    heading: "Guia de Microajuste de Mira e Precisão de Headshots",
    intro: [
      "O microajuste de mira é a fase final de um movimento balístico: depois de chegar perto do alvo, você freia e faz um ajuste curto para centralizar a retícula. Este drill isola essa etapa, mede o tempo entre o alvo âncora e o micro-alvo e mostra quando o excesso de velocidade cria um segundo ajuste.",
      "A estrutura científica subjacente aos movimentos manuais direcionados foi formulada pioneiramente por Robert S. Woodworth (1899) em seu modelo clássico de dois componentes: um impulso balístico primário em circuito aberto que projeta o membro na direção aproximada do estímulo, seguido por uma fase de controle visual de circuito fechado governada por feedback contínuo. Esse compromisso entre velocidade e precisão foi matematizado pela Lei de Fitts (1954), em que o tempo de movimento escala com a distância e o tamanho do alvo.",
      "Mais tarde, David E. Meyer et al. (1988) apresentaram o Modelo de Submovimentos Otimizados Estocásticos, comprovando que o cérebro planeja os deslocamentos para pousar ligeiramente aquém do alvo ou em sua borda, dependendo de micro-movimentos refinados para resolver discrepâncias de coordenadas sem sofrer com oscilações inerciais descontroladas.",
      "Durante a fase de fixação foveal terminal, os olhos realizam microssacadas — pequenos movimentos oculares involuntários de alta frequência (Rolfs, 2009; Martinez-Conde et al., 2004) — para centralizar a retina e recalibrar o mapa espacial. Este treinador combina a API de Pointer Lock com cronometria de alta precisão via performance.now() (Woods et al., 2015) para eliminar oscilações no final do movimento e consolidar headshots cirúrgicos com consistência profissional.",
      "Como é medido: cada disparo e correção é registrado localmente no relógio de alta precisão do navegador em tempo real. Diferenças inferiores a 5 ms devem ser interpretadas como tolerância técnica de hardware (taxas de atualização e variação de polling de mouse)."
    ],
    benchmarks: {
      title: "Faixas de treino SkillDrills para microajuste (referência)",
      headers: ["Faixa", "Janela de Latência de Correção", "Mecânica de Controle Motor", "Ponto a treinar"],
      rows: [
        ["Faixa 1", "Abaixo de 280 ms", "Frenagem quase instantânea; micro-ajustes com os dedos executados sem oscilações de overflick", "Treina o primeiro tiro com frenagem controlada, sem passar do alvo"],
        ["Faixa 2", "280 – 340 ms", "Frenagem muscular disciplinada; transição suave do flick primário para o micro-ajuste final", "Prática de duelos contra peeks agressivos com consistência em alvos minúsculos"],
        ["Faixa 3", "340 – 420 ms", "Boa aquisição de alvos; ocasionais desvios de 10 a 15px demandando submovimento duplo", "Alto rendimento tático; leve hesitação ao corrigir alvos com desnível vertical"],
        ["Faixa 4", "420 – 520 ms", "Desaceleração frouxa; tendência de arrastar o mouse além da borda antes de iniciar a correção", "Vulnerável a strafes rápidos; dificuldade em transferências de tiro imediatas"],
        ["Faixa 5", "520 ms+", "Momentum balístico excessivo com overshoot acentuado; atraso na confirmação visual", "Frequentemente ultrapassa alvos em confrontos diretos; necessidade de reajustes amplos"]
      ],
      note: "Faixas de treino da SkillDrills, não normas de pesquisa, ranks de jogo nem dados de usuários. As latências são o tempo entre o acerto no âncora e o acerto no micro-alvo, registrado via performance.now()."
    },
    techniques: {
      title: "Protocolos Baseados em Evidências para Aperfeiçoar Frenagem e Micro-Mira",
      items: [
        {
          name: "Frenagem Muscular Terminal e Atrito do Mousepad",
          desc: "Em vez de deixar o mouse deslizar solto após o flick, pressione levemente o mouse contra o tecido do mousepad ou encoste as pontas dos dedos anelar e mínimo na superfície para criar atrito mecânico imediato no perímetro do alvo.",
          tips: "Mousepads híbridos com fricção de parada controlada ajudam na frenagem sem comprometer o deslizamento inicial."
        },
        {
          name: "Cadência de Mira em Duas Fases",
          desc: "Conscientize-se do ritmo duplo: um flick rápido e relaxado cobrindo 90% da distância, seguido por um toque sutil e preciso. Nunca force o clique antes de confirmar o alinhamento visual.",
          tips: "Evite clicar no desespero junto com o flick; desassocie o movimento da mão do clique do gatilho."
        },
        {
          name: "Articulação das Pontas dos Dedos para Micro-Desvios",
          desc: "Utilize o pulso e o antebraço apenas para o deslocamento amplo, reservando a flexão e extensão das pontas dos dedos para corrigir os últimos 5 a 20 pixels.",
          tips: "Adote uma pegada Claw ou Fingertip relaxada que preserve a mobilidade vertical e horizontal sob a palma da mão."
        },
        {
          name: "Fixação Visual com Microssacadas",
          desc: "Fixe os olhos no pixel central da cabeça do inimigo antes de o cursor chegar. Segundo a psicofísica visual (Rolfs, 2009), adiantar o olhar instrui o córtex pré-motor com as coordenadas exatas de correção.",
          tips: "Mantenha o foco visual estritamente no centro do alvo — não fique olhando para a sua própria retícula viajar na tela."
        }
      ]
    },
    steps: [
      "Ajuste seu jogo, DPI e sensibilidade exata nas configurações de sessão para assegurar correspondência muscular idêntica de cm/360, travando o ponteiro.",
      "Ao surgir o alvo âncora, execute um movimento inicial até a área aproximada do alvo cobrindo a maior parte do percurso.",
      "Aplique frenagem muscular imediata, realize o micro-ajuste com a ponta dos dedos no centro do micro-alvo, confirme visualmente e dispare.",
      "Mantenha o ritmo sem precipitar disparos imprecisos, preservando seu multiplicador de combo e avançando pelos níveis mais desafiadores."
    ],
    audience: "Jogadores de Valorant, CS2 e Rainbow Six Siege que querem treinar a correção depois de um flick que passou perto da cabeça e reduzir o overflick.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'martinezConde2004', 'rolfs2009', 'woodworth1899'),
    related: [
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/fps/angle-hold-trainer", label: "Treinador de Marcação de Ângulo" },
      { href: "/pt/drills/fps/instant-response", label: "Resposta Instantânea" }
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

      <MicroCorrectionClient copy={copyPt} />

      <DrillGuide guide={microCorrectionGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
