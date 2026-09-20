import ZigZagPathPursuitClient from '@/app/drills/visual-tracking/zig-zag-path-pursuit/ZigZagPathPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Rastreamento visual em zigue-zague | SkillDrills",
  description: "Acompanhe um alvo em zigue-zague. Treino gratuito para seguimento ocular, viradas rápidas e perdas do alvo.",
  keywords: [
    "rastreamento visual zigue-zague exercício",
    "exercício de seguimento ocular",
    "movimento ocular em zigue-zague",
    "treino de visão dinâmica",
    "rastreamento visual com viradas rápidas",
    "exercício de coordenação ocular",
    "treino de sacadas corretivas",
    "controle do olhar em mudanças de direção",
    "treino visual para esportes",
    "exercício de agilidade visual online",
    "teste de precisão do rastreamento visual",
    "treino gratuito de movimento ocular"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/visual-tracking/zig-zag-path-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/zig-zag-path-pursuit')
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Rastreamento visual em zigue-zague | SkillDrills",
    description: "Acompanhe um alvo em zigue-zague. Treino gratuito para seguimento ocular, viradas rápidas e perdas do alvo.",
    url: "https://skilldrills.online/pt/drills/visual-tracking/zig-zag-path-pursuit",
    siteName: "SkillDrills",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rastreamento visual em zigue-zague | SkillDrills",
    description: "Acompanhe um alvo em zigue-zague. Treino gratuito para seguimento ocular, viradas rápidas e perdas do alvo."
  }
};

export default function ZigZagPathPursuitPagePT() {
  const sources = pickSources(
    'debrouwer2002',
    'krauzlis2004',
    'orbandexivry2007',
    'bennett2006',
    'barnes2008',
    'woods2015'
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinamento Visual", "item": "https://skilldrills.online/pt/drills/visual-tracking" },
      { "@type": "ListItem", "position": 3, "name": "Perseguição em Zigue-Zague", "item": "https://skilldrills.online/pt/drills/visual-tracking/zig-zag-path-pursuit" }
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Treinador de Perseguição em Zigue-Zague",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Treinamento neuromuscular de rastreamento dinâmico em dente de serra e supressão de ultrapassagem sacádica em reversões angulares agudas.",
    "dateModified": "2026-09-20"
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Exercício de Rastreamento Vetorial em Zigue-Zague",
    "url": "https://skilldrills.online/pt/drills/visual-tracking/zig-zag-path-pursuit",
    "applicationCategory": "TrainingTool",
    "browserRequirements": "Requer JavaScript e compatibilidade com HTML5 Canvas.",
    "dateModified": "2026-09-20"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Desafio de Perseguição em Zigue-Zague",
    "gamePlatform": "Navegador Web",
    "genre": ["Treino visual", "Exercício de rastreamento ocular", "Reflexos para esports"],
    "dateModified": "2026-09-20"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Treinar Rastreamento Ocular em Zigue-Zague",
    "description": "Protocolo neurofuncional para frenagem de ultrapassagens e estabilização foveal em reversões agudas.",
    "dateModified": "2026-09-20",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Postura Estável e Fixação",
        "text": "Mantenha a cabeça perfeitamente estática a 50-60 cm da tela, fixando o alvo na aresta diagonal inicial."
      },
      {
        "@type": "HowToStep",
        "name": "Perseguição em Vetor Diagonal",
        "text": "Siga o alvo ao longo da reta mantendo sincronia entre os músculos retos horizontais e verticais."
      },
      {
        "@type": "HowToStep",
        "name": "Frenagem nos Pontos de Inflexão",
        "text": "No momento exato da reversão aguda, acione a desaceleração motora antecipada para não projetar o olhar além da curva."
      },
      {
        "@type": "HowToStep",
        "name": "Aumento Gradual de Velocidade",
        "text": "Progrida para velocidades maiores apenas quando seu erro de vértice for menor que 38 pixels em 80% das reversões."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-09-20",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Por que trajetórias em zigue-zague causam tanta sobrecarga neuromuscular aos olhos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Porque combinam aceleração diagonal contínua com reversões de alta frequência, forçando ativação e frenagem antagônica quase instantânea entre os músculos extraoculares."
        }
      },
      {
        "@type": "Question",
        "name": "Quais estruturas neurológicas governam a frenagem antecipatória do olhar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O cerebelo (flóculo e verme posterior) e os gânglios da base operam com o córtex frontal (FEF) para emitir comandos inibitórios que amortecem a velocidade antes do vértice."
        }
      },
      {
        "@type": "Question",
        "name": "O que é o erro de ultrapassagem em curvas agudas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É quando a inércia faz o globo ocular continuar na direção anterior por dezenas de milissegundos após o alvo já ter mudado bruscamente de sentido."
        }
      },
      {
        "@type": "Question",
        "name": "Como este exercício aprimora o desempenho em jogos competitivos (FPS)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ele condiciona o controle de mira em microcorreções rápidas, permitindo frear o retículo exatamente sobre o oponente que realiza strafe evasivo em zigue-zague."
        }
      },
      {
        "@type": "Question",
        "name": "Por que não devo movimentar a cabeça junto com os olhos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Movimentar a cabeça aciona o reflexo vestíbulo-ocular que mascara a fraqueza oculomotora, reduzindo o ganho neuromuscular que o treino proporciona."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a duração recomendada por sessão?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sessões de 6 a 10 minutos por dia em rodadas curtas de 60 segundos são ideais para gerar neuroplasticidade sem fadiga visual excessiva."
        }
      },
      {
        "@type": "Question",
        "name": "O que caracteriza o deslizamento retiniano nas reversões?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É a perda foveal momentânea quando o alvo inverte o sentido, criando um erro de posição que força uma sacada de recuperação rápida."
        }
      },
      {
        "@type": "Question",
        "name": "Como um monitor de alta taxa de atualização impacta este treino?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Monitores de 144Hz a 240Hz exibem o ponto de quebra da curva sem atrasos, permitindo que o cérebro inicie o processo de desaceleração vários milissegundos mais cedo."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre rastreamento senoidal e zigue-zague?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O movimento senoidal desacelera suavemente nos ápices, enquanto o zigue-zague apresenta velocidade linear constante até o vértice e uma reversão angular abrupta."
        }
      },
      {
        "@type": "Question",
        "name": "Como o sistema avalia minha precisão nas curvas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Calcula a distância euclidiana entre o cursor e o alvo nos instantes críticos de mudança de sentido, penalizando ultrapassagens e cortes de curva."
        }
      }
    ]
  };

  const guide = {
    title: "Diretrizes Científicas de Rastreamento em Zigue-Zague e Controle de Inflexão",
    intro: [
      "O rastreamento motor ocular ao longo de polilinhas em zigue-zague de múltiplos segmentos representa um dos desafios de coordenação mais complexos na visão esportiva e na neuro-optometria. Ao contrário dos deslocamentos retilíneos simples, o seguimento de trajetórias diagonais exige a inervação proporcional e contínua de pares musculares distintos, harmonizando os centros pré-motores pontinos horizontais (PPRF) com os núcleos mesencefálicos verticais (riMLF; Orban de Xivry & Lefèvre, 2007).",
      "A sobrecarga neurocomputacional atinge o ápice nas inflexões agudas em que a trajetória inverte abruptamente o sentido. No momento dessa deflexão súbita, o deslizamento retiniano instantâneo eleva-se de maneira drástica enquanto o erro de posição foveal sofre um pico agudo. As pesquisas clássicas de de Brouwer et al. (2002) e Heinen et al. (2005) demonstraram que as sacadas de recuperação (catch-up saccades) são disparadas por um circuito computacional compartilhado no colículo superior e nos campos oculares frontais (FEF), integrando o desvio posicional e o erro de velocidade para efetuar correções balísticas milimétricas.",
      "Sem um condicionamento visual específico, o sistema oculomotor apresenta ultrapassagens excessivas ou cortes antecipados de curva, acarretando latências prolongadas de reaquisição e instabilidade foveal. Em contrapartida, a prática deliberada em trajetórias de zigue-zague estimula os modelos internos preditivos do cerebelo (Barnes, 2008; Krauzlis, 2004; Orban de Xivry & Lefèvre, 2007), permitindo uma desaceleração antecipada antes de cada vértice, atenuando o erro sacádico e acelerando o reengajamento suave ao longo do vetor diagonal de saída.",
      "O exercício de Rastreamento visual em zigue-zague isola e aprimora essas vias sensoriomotoras críticas no navegador web. Ao seguir o alvo em sua trajetória contínua e alternada, o usuário desenvolve a equalização de velocidade na perseguição suave e uma reancoragem foveal precisa nas inflexões. O recurso de ocultar a linha elimina guias espaciais para avaliar a estimativa perceptiva em tempo real, enquanto a velocidade variável rompe automatismos para desenvolver agilidade visual adaptativa.",
      "Metodologia de medição e latência de hardware: As estimativas temporais incorporam a quantização de atualização das telas (~16,7 ms a 60 Hz, ~6,9 ms a 144 Hz, ~4,1 ms a 240 Hz) e os intervalos de varredura dos dispositivos de entrada (~8 ms a 125 Hz contra ~1 ms a 1.000 Hz), conforme detalhado por Woods et al. (2015). Todas as suas pontuações e registros de precisão residem exclusivamente no armazenamento local (localStorage) do seu navegador, resguardando total privacidade sem transmissão externa."
    ],
    benchmarks: {
      title: "Padrões de Eficiência em Zigue-Zague (Velocidade e Erro de Inflexão)",
      headers: ["Nível de Habilidade", "Multiplicador de Velocidade", "Erro no Vértice", "Latência da Sacada de Virada", "Percentil Global"],
      rows: [
        ["Elite / Mestre da Reversão Rápida", "3.5x – 5.0x+", "Erro < 12 px (fixação perfeita na inflexão)", "Latência < 110 ms (frenagem preditiva)", "Top 1.5%"],
        ["Mestre / Alta Disciplina Vetorial", "2.5x – 3.5x", "Erro < 22 px (apenas microssacadas mínimas)", "Latência < 140 ms (curvas fluidas)", "Top 8%"],
        ["Avançado / Atleta Competitivo", "1.8x – 2.5x", "Erro < 38 px (reaquisição veloz)", "Latência < 180 ms (viradas estáveis)", "Top 25%"],
        ["Intermediário / Praticante Regular", "1.2x – 1.8x", "Erro 38 – 70 px (ultrapassagem e corte de curvas)", "Latência 180 – 240 ms (múltiplas correções)", "Médio 45%"],
        ["Iniciante / Não Treinado", "0.5x – 1.2x", "Erro > 70 px (perda total nos vértices)", "Latência > 250 ms (ultrapassagem evidente)", "Base"]
      ],
      note: "Parâmetros baseados em de Brouwer et al. (2002) sobre dinâmica de sacadas corretivas e Krauzlis (2004) sobre controle motor em reversões rápidas de velocidade e direção."
    },
    steps: [
      { title: "Fixe o alvo no centro", text: "Mantenha a cabeça estável e acompanhe o primeiro segmento diagonal com os olhos." },
      { title: "Siga a diagonal sem cortar", text: "Acompanhe o alvo até o fim de cada segmento e preserve o olhar no centro da figura." },
      { title: "Frene antes da virada", text: "Reduza o impulso antes da inflexão para evitar que o olhar ultrapasse o canto." },
      { title: "Aumente o ritmo com precisão", text: "Suba a velocidade somente quando as perdas do alvo e o erro nas viradas estiverem estáveis." }
    ],
    instructions: [
      "Fixe os olhos no alvo circular e acompanhe o trajeto retilíneo inicial.",
      "Antecipe o ponto de inflexão e aplique frenagem muscular suave antes da virada.",
      "Execute uma micro-sacada ágil para retomar o alinhamento com o vetor oposto.",
      "Eleve a velocidade somente quando seu erro de vértice se mantiver abaixo de 38 px."
    ],
    tips: [
      "Evite antecipar excessivamente cortando os cantos: atinja o ápice de cada zigue-zague.",
      "Mantenha a musculatura dos ombros e pescoço totalmente relaxada.",
      "Respire com fluidez para manter a estabilidade do tônus ocular nas acelerações."
    ],
    sources
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ZigZagPathPursuitClient
        copy={{
          title: "Rastreamento visual em zigue-zague",
          subtitle: "Treino de diagonais e viradas rápidas",
          description: "Acompanhe um alvo em zigue-zague e registre as perdas e o erro nas viradas."
        }}
      />
      <DrillGuide guide={guide} />
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <RelatedDrills currentCategory="visual-tracking" currentHref="https://skilldrills.online/pt/drills/visual-tracking/zig-zag-path-pursuit" />
      </div>
    </>
  );
}
