import AntiZigzagClient from '@/app/drills/fps/anti-zigzag-movement-trainer/AntiZigzagClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Treino de Mira | Tracking em Zigue-Zague | SkillDrills",
  description: "Treino de mira grátis no navegador: acompanhe movimentos em zigue-zague e slide cancels, controlando o overshoot em duelos FPS.",
  keywords: [
    "treino de mira",
    "treino de mira online",
    "treino de mira fps",
    "treino de mira navegador",
    "tracking zigue-zague",
    "movimento evasivo",
    "slide cancel",
    "mira contra movimento",
    "tracking apex",
    "tracking warzone"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    languages: getAlternateLanguages('/drills/fps/anti-zigzag-movement-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
      title: "Treino de Mira | Tracking em Zigue-Zague | SkillDrills",
    description: "Treino de mira grátis no navegador: acompanhe movimentos em zigue-zague e slide cancels, controlando o overshoot em duelos FPS.",
    url: "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
      title: "Treino de Mira | Tracking em Zigue-Zague | SkillDrills",
    description: "Treino de mira grátis no navegador: acompanhe movimentos em zigue-zague e slide cancels, controlando o overshoot em duelos FPS.",
  },
};

export default function AntiZigzagPtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos de FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Treino de mira - tracking em zigue-zague", "item": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Treino de mira - tracking em zigue-zague",
    "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requer suporte a JavaScript e HTML5 Canvas com Pointer Lock",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Treinador online de tracking contra zigue-zague e slide cancels com Pointer Lock."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "Treino de mira - tracking em zigue-zague",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-09-20",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Aperfeiçoe o tracking reativo contra mudanças bruscas de direção, zigue-zagues em V e slide cancels.",
    "genre": "Treino de FPS / Anti-Zigzag",
    "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Treino de mira - tracking em zigue-zague",
    "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    "description": "Treinador de mira para tracking reativo contra movimentação evasiva, zigue-zague e slide cancels no navegador.",
    "dateModified": "2026-09-20",
    "gamePlatform": "Web Browser",
    "genre": ["Treino de FPS", "Treinador de Mira", "Tracking Reativo"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-09-20",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Por que os jogadores fazem movimentação em zigue-zague nos jogos de FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Os jogadores usam o zigue-zague para quebrar o alinhamento da mira do oponente, forçando reversões angulares bruscas que excedem a latência de reação humana e exploram desvios temporários de hitbox causados pela interpolação de rede."
        }
      },
      {
        "@type": "Question",
        "name": "Como acompanhar alvos que fazem zigue-zague no Apex Legends e Warzone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em vez de perseguir desesperadamente os pontos externos da curva de movimentação, ancore sua mira no corredor central (V-Crossover). Relaxe a musculatura do antebraço e case a velocidade do mouse quando o inimigo cruzar o centro."
        }
      },
      {
        "@type": "Question",
        "name": "O que é a técnica de ancoragem no eixo central (V-Crossover)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A técnica de V-Crossover consiste em manter o retículo próximo ao eixo central por onde o adversário precisa obrigatoriamente passar para trocar de lado. Isso reduz a distância de deslocamento do mouse e elimina o overshoot nas pontas."
        }
      },
      {
        "@type": "Question",
        "name": "Como rastrear inimigos executando slide cancel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O slide cancel combina aceleração horizontal repentina com queda vertical do modelo. Treine tracking diagonal em múltiplos eixos e evite disparar por adivinhação: espere a animação se comprometer antes de alinhar na altura do peito."
        }
      },
      {
        "@type": "Question",
        "name": "Por que minha mira ultrapassa o alvo (overshoot) na mudança de direção?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O overshoot ocorre devido à tensão muscular excessiva (aperto excessivo do mouse) e tentativa de predição. A contração dos músculos antagonistas impede uma desaceleração suave, fazendo o mouse passar direto quando o alvo inverte o vetor."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a sensibilidade recomendada para tracking de alvos evasivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uma sensibilidade média entre 28 cm e 42 cm por giro de 360° oferece o equilíbrio perfeito: rápida o bastante para absorver varreduras diagonais a curta distância sem levantar o mouse, e estável o suficiente para evitar tremidos nos microajustes."
        }
      },
      {
        "@type": "Question",
        "name": "Um monitor com maior taxa de atualização ajuda a acompanhar zigue-zague?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Um monitor de 144 Hz ou 240 Hz atualiza quadros a cada 6,9 ms ou 4,1 ms (contra 16,7 ms em 60 Hz), reduzindo o borrão de movimento e exibindo o início da desaceleração do alvo muito antes, facilitando o processamento cortical visual."
        }
      },
      {
        "@type": "Question",
        "name": "Como a movimentação rápida causa dessincronização de hitbox no servidor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em sistemas de netcode com compensação de lag e interpolação, guinadas bruscas de velocidade criam breves discrepâncias entre a posição calculada da hitbox no servidor e o modelo visual renderizado no cliente."
        }
      },
      {
        "@type": "Question",
        "name": "Como melhorar a precisão de tempo de contato (dwell time) na mira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Melhore o dwell time eliminando correções espasmódicas. Fixe os olhos no centro de massa do alvo e execute um deslizamento contínuo e suave com a mão e o punho, priorizando consistência de contato sobre cliques afoitos."
        }
      },
      {
        "@type": "Question",
        "name": "Treinar anti zigue-zague melhora duelos de curto alcance com submetralhadoras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Confrontos a curta distância produzem a maior velocidade angular na tela. Condicionar o tracking reativo contra zigue-zague desenvolve o controle neuromuscular necessário para manter o dano constante contra adversários evasivos."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Treinar Tracking Contra Zigue-Zague e Movimento Evasivo",
    "description": "Instruções passo a passo para dominar o tracking reativo contra movimentação imprevisível em zigue-zague.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrar a Sensibilidade",
        "text": "Ajuste a sensibilidade do jogo nas opções da sessão para treinar com uma sensibilidade familiar.",
        "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Ativar Tela Cheia e Pointer Lock",
        "text": "Clique em Iniciar para ativar tela cheia e travar o cursor do mouse no Canvas sem curvas de aceleração do sistema.",
        "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Ancorar no Corredor Central (V-Crossover)",
        "text": "Mantenha a atenção visual e o posicionamento da mira no corredor central da trajetória, sem se afobar nas pontas externas.",
        "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Sustentar Contato Contínuo (Dwell)",
        "text": "Mantenha a mira sobre o alvo para esgotar sua vida útil antes que o tempo expire, acumulando multiplicadores de combo.",
        "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer#step-4"
      }
    ]
  };

  const ptGuide = {
    heading: "Treino de Mira para Tracking em Zigue-Zague e Movimento Evasivo",
    intro: [
      "O treino de mira para tracking em zigue-zague pratica manter a mira no alvo durante mudanças diagonais, slide cancels e movimentos evasivos. Este drill mede inversões de direção, controle de overshoot e tempo de contato em duelos de Apex, Warzone e Overwatch 2.",
      "O erro mecânico primordial de quem tenta rastrear alvos evasivos é o overshoot atrás do ápice externo da curva. Quando um oponente executa um zigue-zague em V, sua velocidade horizontal cai momentaneamente para zero no ponto de virada antes de acelerar de volta pelo centro. Tentar perseguir freneticamente esse ponto extremo faz com que o retículo passe direto e os músculos antagonistas travem. Miradores de elite utilizam a ancoragem no eixo central (V-Crossover): eles mantêm o foco visual no corredor central e aplicam microajustes suaves acompanhando a velocidade enquanto o alvo cruza de volta.",
      "O Anti-Zigzag Aim Trainer roda diretamente no navegador moderno via HTML5 Pointer Lock API e cronometria via performance.now(). Ao testar a mecânica de dano por tempo de contato contínuo sob frequências crescentes de zigue-zague, este exercício pratica a supressão sensório-motora para reduzir correções de pânico (Woods et al., 2015).",
      "Metodologia de medição: todos os eventos de rastreamento são registrados localmente pelo relógio de alta precisão performance.now() do navegador. Variáveis do ecossistema: navegadores reduzem temporizadores a cerca de 1 ms por segurança contra Spectre; monitores quantizam estímulos conforme a taxa de atualização (16,7 ms a 60 Hz, 6,9 ms a 144 Hz e 4,1 ms a 240 Hz). O polling do mouse adiciona cerca de 1 ms a 1000 Hz. Variações inferiores a 5 ms constituem ruído instrumental; compare seus resultados em condições estáveis de hardware."
    ],
    benchmarks: {
      title: "Estágios Sensório-Motores & Latência de Reversão em Zigue-Zague",
      headers: ["Fase de Tracking / Estágio Sensório-Motor", "Faixa Típica de Latência", "Via Neural & Função Biomecânica", "Implicação em Combate"],
      rows: [
        ["Detecção da Inversão Lateral-Diagonal", "160 – 210 ms", "Sinais de escorregamento retiniano processados em V1 e áreas temporais médias MT/V5", "Intervalo até o cérebro perceber que o alvo iniciou a troca de sentido"],
        ["Desaceleração Antagonista & Frenagem", "85 – 135 ms", "Disparo corticoespinal para flexores do antebraço e músculos tenares; corte de inércia", "Tempo físico necessário para deter o movimento do mouse e inverter o vetor"],
        ["Realinhamento Foveal & Centralização", "65 – 105 ms", "Microssacada corretiva de captura e articulação fina do punho para retomar contato", "Retomada do contato estável sobre a hitbox para reativar o dano contínuo"],
        ["Janela Total de Reaquisição Desprevenida", "310 – 450 ms", "Intervalo total entre a virada inesperada do zigue-zague e o travamento do retículo", "Queda natural de DPS onde disparos são perdidos contra alvos com boa movimentação"],
        ["Tracking Evasivo Avançado", "215 – 295 ms", "Amortecimento antecipado de velocidade e relaxamento muscular no V-crossover", "Foque em um padrão consistente, com amortecimento antecipado"]
      ],
      note: "Métricas sintetizadas a partir de estudos oculomotores (Rashbass, 1961; Krauzlis, 2004), modelos de direção contínua (Accot & Zhai, 1997; Fitts, 1954) e testes de cronometria digital (Woods et al., 2015)."
    },
    techniques: {
      title: "Técnicas Comprovadas Contra Movimentação em Zigue-Zague",
      items: [
        {
          name: "Ancoragem no Corredor Central (V-Crossover)",
          desc: "Não tente caçar o alvo nos extremos laterais onde a direção muda de forma abrupta. Mantenha o retículo mais próximo do corredor central por onde o adversário necessariamente transita.",
          tips: "Deixe o alvo retornar ao retículo, casando a velocidade de forma suave na reversão em vez de dar chicotadas com o mouse."
        },
        {
          name: "Pegada Relaxada e Amortecimento Muscular",
          desc: "Tensionar o antebraço excessivamente (death grip) faz com que grupos musculares opostos entrem em atrito durante inversões diagonais bruscas, gerando trajetórias serrilhadas.",
          tips: "Mantenha uma pegada relaxada em garra (claw) ou ponta dos dedos (fingertip) para que os dedos absorvam microoscilações sem sobrecarregar o braço."
        },
        {
          name: "Focalização Visual Centrada no Alvo",
          desc: "Fixe o olhar diretamente no centro do tronco do personagem inimigo em vez de olhar fixamente para o ponto da sua mira. O córtex visual extrai velocidade e direção automaticamente do movimento retiniano.",
          tips: "Se notar que sua mira vive atrasada em relação ao alvo, transfira 100% da sua atenção visual para o modelo do oponente."
        },
        {
          name: "Leitura de Quadros de Desaceleração e Inclinação",
          desc: "Em títulos com física de momento (como Apex e Warzone), os modelos de personagens inclinam-se ligeiramente antes de virar e exibem breves quadros de desaceleração.",
          tips: "Treine seu cérebro para reconhecer essa sutil inclinação 30 a 50 ms antes que a mudança de sentido se complete."
        }
      ]
    },
    steps: [
      "Selecione a sensibilidade do seu jogo principal no seletor para garantir transferência precisa de memória muscular.",
      "Clique em Iniciar Treino para entrar em tela cheia e ativar o Pointer Lock.",
      "Fixe a atenção visual no alvo esférico enquanto ele executa movimentos diagonais rápidos em zigue-zague.",
      "Mantenha o retículo continuamente colado na esfera, priorizando a ancoragem no eixo central V-Crossover.",
      "Destrua alvos antes do término de sua vida útil para subir multiplicadores de combo e avançar de nível."
    ],
    audience: "Jogadores competitivos de FPS (Apex Legends, Call of Duty: Warzone, Overwatch 2, The Finals, CODM), duelistas de curto alcance e atletas de eSports que buscam neutralizar movimentação evasiva.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'fitts1954', 'green2003', 'rashbass1961', 'accotZhai1997'),
    related: [
      { href: "/pt/drills/fps/anti-strafe-jitter-duel", label: "Treino Anti-Strafe Jitter" },
      { href: "/pt/drills/reaction-speed/fps-tracking-trainer", label: "Treino de Tracking FPS" },
      { href: "/pt/drills/fps/pro-smooth-pursuit", label: "Tracking Suave Smooth Pursuit" },
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/visual/reaction-speed/light-reaction", label: "Teste de Tempo de Reação" }
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
      <AntiZigzagClient
        copy={{
          startTitle: "Treino de mira - tracking em zigue-zague",
          startSubtitle: "Tracking Reativo • Progressão Infinita de Níveis",
          getReady: "PREPARE-SE",
          pausedTitle: "PAUSADO",
          pausedSubtitle: "Clique para retomar — o cursor do mouse será travado novamente.",
          stageCaption: "Mantenha a mira em alvos evasivos com trajetórias em zigue-zague imprevisíveis. Foque no corredor central!",
          rulesTitle: "Regras do Treino & Pontuação",
          rulesItems: [
            { num: "1", text: "Alinhamento de Mira", highlight: "+50 PTS (+0.4s/s)", result: "×Mult de Combo" },
            { num: "2", text: "Destruição do Alvo", highlight: "+25 PTS Bônus", result: "Reset HP & Respawn" },
            { num: "3", text: "Progressão de Nível", highlight: "+1 Nível / 1400 PTS", result: "Zigue-Zague Adaptativo" },
            { num: "4", text: "Fuga do Alvo", highlight: "Tempo Expirado", result: "Reinicia Combo (-0.6s)" }
          ],
          h1Keyword: "Treino de mira",
          h1Suffix: " — tracking em zigue-zague",
          aboutTitle: "Sobre treino de mira e tracking em zigue-zague"
        }}
      />
      <DrillGuide guide={ptGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
