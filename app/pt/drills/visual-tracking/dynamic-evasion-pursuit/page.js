import DynamicEvasionPursuitClient from '@/app/drills/visual-tracking/dynamic-evasion-pursuit/DynamicEvasionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Rastreamento Ocular Reativo | Alvo Móvel | SkillDrills",
  description: "Recapture um alvo móvel que faz curvas bruscas. Pratique visão dinâmica, reação visual e refixação foveal grátis no navegador.",
  keywords: [
    "rastreamento ocular",
    "visão dinâmica treino",
    "alvo móvel exercício",
    "trajetória imprevisível",
    "reação visual",
    "refixação foveal",
    "sacadas corretivas",
    "rastreamento visual reativo",
    "treino de motilidade ocular",
    "agilidade visual online",
    "coordenação olho-mão",
    "exercício visual grátis"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/dynamic-evasion-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Rastreamento Ocular Reativo | Alvo Móvel | SkillDrills",
    description: "Recapture um alvo móvel que faz curvas bruscas e pratique reação visual, refixação foveal e visão dinâmica gratuitamente.",
    url: "https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit",
    siteName: "SkillDrills",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rastreamento Ocular Reativo | Alvo Móvel | SkillDrills",
    description: "Recapture um alvo imprevisível e pratique reação visual e recuperação sacádica gratuitamente online.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills",
      "item": "https://skilldrills.online/pt"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Rastreamento Visual",
      "item": "https://skilldrills.online/pt/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Perseguição Evasiva Dinâmica",
      "item": "https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Rastreamento Ocular Reativo – Alvo Móvel",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Navegador",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste de Rastreamento de Alvo Evasivo e Refixação Foveal",
  "url": "https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Navegador",
  "browserRequirements": "JavaScript e Canvas HTML5 necessários",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Rastreamento Ocular Reativo – Treinador Visual",
  "description": "Treinador visual no navegador para acompanhar um alvo móvel que faz mudanças bruscas de direção, praticando visão dinâmica e reação visual.",
  "genre": ["Treino de Motilidade Ocular", "Visão Esportiva", "Treino de Reação Visual"],
  "playMode": "Um jogador",
  "applicationCategory": "Game",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Como Treinar a Refixação Sacádica contra Alvos Evasivos",
  "description": "Protocolo para condicionar respostas visuais rápidas e supressão de latência frente a manobras evasivas abruptas.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Mantenha a Postura Estável",
      "text": "Posicione-se a 50-60 cm da tela com a cabeça e mandíbula imóveis para isolar os músculos retos e oblíquos externos.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Acompanhe os Segmentos Lineares",
      "text": "Sustente a perseguição contínua suave enquanto o alvo se desloca em velocidade uniforme ao longo do vetor atual.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Execute Sacadas Imediatas na Evasão",
      "text": "No exato instante em que o alvo guinar em ângulo agudo, reaja ao deslizamento retiniano com uma microssacada rápida para recentralizar a fóvea.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Complete Séries de Alta Atenção",
      "text": "Execute de 5 a 8 sessões de 60 segundos com intervalos de descanso ocular para manter as conexões neuromusculares no ápice.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit#step-4"
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
      "name": "O que é o treino de rastreamento ocular reativo com alvo móvel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É um exercício de motilidade ocular que combina trechos de perseguição contínua com mudanças bruscas de direção, treinando o sistema visual a recentralizar o foco com rapidez."
      }
    },
    {
      "@type": "Question",
      "name": "Como este exercício se diferencia da perseguição caótica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A perseguição caótica muda o movimento continuamente; este treino mantém trechos lineares estáveis e os interrompe com guinadas repentinas, exigindo uma nova leitura da trajetória."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece na retina durante uma quebra brusca de direção?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quando o alvo guina, o vetor de velocidade diverge e a imagem desliza sobre a retina. O colículo superior participa da resposta sacádica corretiva que restabelece o alinhamento da fóvea (Krauzlis, 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "De que forma este exercício aprimora a mira de acompanhamento em jogos competitivos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em jogos de tiro rápido, oponentes alternam deslocamentos laterais com mudanças rápidas de sentido. Este treino pratica a readquisição visual do alvo, reduzindo a hesitação quando a trajetória muda."
      }
    },
    {
      "@type": "Question",
      "name": "Por que é indispensável imobilizar a cabeça durante a execução?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Girar a cabeça ativa o reflexo vestíbulo-ocular (RVO), compensando mecanicamente o atraso e mascarando a lentidão dos músculos oculares. Isolar a cabeça força o desenvolvimento exclusivo dos seis músculos extraoculares."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a duração e a frequência diária recomendadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sessões diárias de 5 a 10 minutos (5 a 8 blocos de 60 segundos). Como as rupturas angulares exigem esforço máximo de foco e contração muscular rápida, séries curtas evitam o cansaço visual e potencializam a neuroplasticidade."
      }
    },
    {
      "@type": "Question",
      "name": "O que fazer se o alvo se afastar excessivamente após a manobra evasiva?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evite varreduras desordenadas. Fixe a atenção na área de visão periférica próxima, localize o novo trajeto e dispare uma sacada firme e direta. Se a taxa de perda for alta, diminua o multiplicador de velocidade para 0.8x."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a relevância da taxa de atualização do monitor (Hz) para o rastreamento evasivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monitores de 144 Hz ou superiores reduzem a latência entre quadros para menos de 6,9 ms (Woods et al., 2015), exibindo a quebra angular no exato instante em que ela ocorre, permitindo respostas sacádicas muito mais velozes."
      }
    },
    {
      "@type": "Question",
      "name": "Este exercício traz benefícios para modalidades esportivas convencionais?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. No futebol, basquete, tênis e artes marciais, adversários e bolas realizam fintas e mudanças imprevisíveis de trajeto. A capacidade de reajustar o olhar rapidamente é determinante para antecipação espacial e tempo de reação esportivo."
      }
    },
    {
      "@type": "Question",
      "name": "O teste de perseguição evasiva é gratuito e seguro para uso contínuo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, a ferramenta é totalmente gratuita, roda nativamente no navegador web sem rastreadores ou cadastro, e todos os seus índices de precisão permanecem salvos unicamente no armazenamento local do seu dispositivo."
      }
    }
  ]
};

const guideProps = {
  heading: "Fundamentos Neurofisiológicos do Rastreamento Ocular Reativo",
  intro: [
    "A perseguição visual convencional costuma usar trajetórias contínuas, nas quais o cerebelo ajuda a antecipar o movimento e a reduzir o atraso sensorial por meio de modelos motores (Bahill, Iandolo, & Troost, 1980). Neste exercício, o alvo percorre segmentos lineares e muda de direção de forma súbita, aproximando-se das exigências de esportes rápidos e jogos competitivos.",
    "Deslizamento retiniano e sacadas corretivas: quando a direção muda, a imagem se desloca sobre a retina mais rápido do que o olhar consegue acompanhar suavemente. O córtex visual e o colículo superior processam esse erro e orientam uma sacada corretiva para devolver a fóvea ao alvo (Rashbass, 1961; Krauzlis, 2004; Barnes, 2008).",
    "Amostragem temporal e resposta visual: uma tela de 60 Hz apresenta um intervalo de até 16,7 ms entre quadros, enquanto 144 Hz ou 240 Hz reduzem esse intervalo. A plataforma roda no navegador e mantém os resultados localmente, sem cadastro."
  ],
  techniques: {
    title: "Quatro técnicas para melhorar a recuperação sacádica",
    items: [
      { name: "Estabilização da cabeça para isolar a motilidade ocular", desc: "Manter cabeça e mandíbula estáveis reduz a participação do reflexo vestíbulo-ocular e deixa a correção do olhar sob responsabilidade dos músculos oculares extrínsecos.", tips: "Sente-se a 50–70 cm da tela, apoie os pés e faça pausas assim que surgir ardor ou visão dupla." },
      { name: "Leitura do novo vetor antes da refixação", desc: "Depois de uma guinada, a retina periférica detecta o deslocamento antes de a fóvea voltar ao alvo. Uma sacada curta e dirigida é mais eficiente que arrastar o olhar pela tela.", tips: "Observe o primeiro deslocamento após a mudança e salte para o centro provável do alvo, sem perseguir o rastro." },
      { name: "Resposta visual sem antecipação", desc: "Como a trajetória não repete um padrão confiável, tentar adivinhar a próxima curva aumenta os erros direcionais. O treino deve privilegiar a informação que acabou de aparecer.", tips: "Se perceber que está esperando uma curva conhecida, reduza a velocidade e volte a reagir apenas ao movimento observado." },
      { name: "Progressão por velocidade e descanso", desc: "A qualidade da refixação é mais útil que uma velocidade alta com perdas constantes. Séries curtas permitem comparar a estabilidade ocular sem acumular fadiga.", tips: "Comece em 1.0x, avance em pequenos passos somente quando recuperar o alvo com consistência e descanse entre séries." }
    ]
  },
  steps: [
    "Sente-se a 50–70 cm da tela, alinhe a postura e mantenha cabeça e mandíbula estáveis.",
    "Comece em 1.0x por uma série de 60 segundos para observar a frequência de perdas do alvo.",
    "Quando ocorrer uma guinada, detecte o novo vetor com a visão periférica e faça uma sacada curta para recentrar a fóvea.",
    "Retome a perseguição contínua assim que o alvo for reencontrado; não varra a tela aleatoriamente.",
    "Faça de 5 a 8 séries com pausas, registre a velocidade em que a estabilidade caiu e use esse valor para ajustar a próxima sessão."
  ],
  benchmarks: {
    title: "Padrões de Desempenho em Perseguição Evasiva e Refixação Sacádica",
    headers: ["Nível de Desempenho", "Multiplicador de Velocidade", "Refixação Sacádica nas Quebras Evasivas", "Perfil Neuromotor e Oculomotor"],
    rows: [
      ["Nível 1: Apex Reativo – Reflexos de Elite", "2.0x+ Ultra-Velocidade", "Sacada corretiva dispara com latência inferior a 150 ms; fixação foveal instantânea sem oscilação pós-sacádica.", "Velocidade máxima de transmissão sináptica entre fóvea e centros oculomotores. Padrão de elite para competidores de esports e atletas de alta reação."],
      ["Nível 2: Agilidade Visual Superior", "1.4x – 1.9x Alta Velocidade", "Recentralização rápida e consistente em 1 a 2 quadros de vídeo; retomada fluida da velocidade de perseguição.", "Músculos extraoculares altamente treinados. Domínio expressivo sobre manobras de esquiva e deslocamentos laterais evasivos."],
      ["Nível 3: Padrão Funcional Sólido", "1.0x – 1.3x Velocidade Padrão", "Acompanhamento confiável nos trechos lineares; ligeiro atraso latente diante de quebras angulares agudas.", "Faixa normativa para adultos saudáveis. Totalmente suficiente para direção diária, esportes recreativos e jogos casuais."],
      ["Nível 4: Refixação Tardia – Requer Prática", "0.7x – 0.9x Velocidade Moderada", "O alvo escapa da fóvea na maioria das manobras evasivas; múltiplas sacadas corretivas necessárias para reengajar.", "Latência sensoriomotora elevada em rupturas de rumo. Recomenda-se consolidação prévia em velocidades moderadas."],
      ["Nível 5: Instabilidade Inicial – Iniciante", "< 0.7x Baixa Velocidade", "O olhar permanece preso na trajetória antiga do alvo, sofrendo atraso substancial antes da reação.", "Coordenação motora ocular elementar necessita de desenvolvimento em trajetórias contínuas com imobilização estrita da cabeça."]
    ],
    note: "Baremos fundamentados em investigações neurofisiológicas sobre latência sacádica, compensação de deslizamento retiniano e retomada de perseguição sob quebras angulares abruptas (Bahill et al., 1980; Rashbass, 1961; Krauzlis, 2004; Barnes, 2008)."
  },
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('bahill1980', 'barnes2008', 'krauzlis2004', 'robinson1965', 'rashbass1961', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Perseguição Ocular Lenta" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Perseguição Caótica Direcional" },
    { href: "/pt/drills/visual-tracking/sine-wave-pursuit", label: "Rastreamento em Onda Senoidal" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Rastreamento em Oito" }
  ]
};

export default function DynamicEvasionPursuitPagePt() {
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
      <DynamicEvasionPursuitClient
        copy={{
          title: "Perseguição Evasiva Dinâmica – Rastreamento Ocular",
          subtitle: "Treino de Refixação Foveal e Reação a Alvos Evasivos",
          description: "Ao alternar deslocamentos lineares regulares com quebras direcionais imprevisíveis, este exercício impede a compensação preditiva do cerebelo. O sistema oculomotor é forçado a reacionar em malha fechada, disparando microssacadas de alta velocidade para recentralizar o alvo na fóvea central (Bahill et al., 1980; Krauzlis, 2004)."
        }}
      />
      <DrillGuide guide={guideProps} />
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <RelatedDrills currentCategory="visual-tracking" currentHref="https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit" />
      </div>
      <DrillFooter />
    </>
  );
}
