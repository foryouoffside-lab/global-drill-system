import SpatialShiftPursuitClient from '@/app/drills/visual-tracking/spatial-shift-pursuit/SpatialShiftPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Rastreamento visual com mudança espacial | SkillDrills",
  description: "Siga um alvo enquanto o campo visual muda. Exercício gratuito no navegador com reação, reaquisição e erro de posição.",
  keywords: [
    "mudança espacial rastreamento visual",
    "remapeamento visual treino",
    "tela tremendo mira treino",
    "seguir alvo com campo visual móvel",
    "atenção espacial exercício",
    "reaquisição visual treino",
    "mudança de referencial visual",
    "rastreamento sob movimento de tela",
    "coordenação olho alvo",
    "erro de posição visual",
    "treino de rastreamento visual",
    "treino de mira"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/visual-tracking/spatial-shift-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/spatial-shift-pursuit'),
  },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Rastreamento visual com mudança espacial | SkillDrills",
    description: "Siga um alvo enquanto o campo visual muda. Exercício gratuito no navegador com reação, reaquisição e erro de posição.",
    url: "https://skilldrills.online/pt/drills/visual-tracking/spatial-shift-pursuit",
    siteName: 'SkillDrills',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Rastreamento visual com mudança espacial | SkillDrills",
    description: "Siga um alvo enquanto o campo visual muda. Exercício gratuito no navegador com reação, reaquisição e erro de posição.",
  },
};

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
      "name": "Exercícios",
      "item": "https://skilldrills.online/pt/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Rastreamento Visual",
      "item": "https://skilldrills.online/pt/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Rastreamento com Mudança Espacial",
      "item": "https://skilldrills.online/pt/drills/visual-tracking/spatial-shift-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "Rastreamento com Mudança Espacial",
  "operatingSystem": "Navegador Web",
  "applicationCategory": "GameApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Aplicação de treino visual adaptativo para observar a recuperação do olhar sob deslocamentos espaciais dinâmicos.",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Exercício de Rastreamento com Mudança Espacial",
  "url": "https://skilldrills.online/pt/drills/visual-tracking/spatial-shift-pursuit",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Todos os navegadores modernos",
  "browserRequirements": "Requer suporte a JavaScript e HTML5 Canvas",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Rastreamento visual com mudança espacial",
  "description": "Exercício de rastreamento em que o campo visual se desloca de repente e o jogador precisa reencontrar e seguir o alvo.",
  "genre": ["Treino Visual", "Seguimento Ocular", "Treino de Reflexos"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Navegador Web",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Treinar o Rastreamento sob Mudança Espacial",
  "description": "Passo a passo para reencontrar e voltar a acompanhar o alvo depois de uma mudança brusca no campo visual.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Estabeleça a Fixação Inicial",
      "text": "Posicione-se a 50-70 cm da tela. Comece o acompanhamento mantendo o alvo no centro da visão."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Identifique o Deslocamento Global",
      "text": "Quando o quadro girar ou se deslocar de repente, perceba primeiro a direção do deslocamento em vez de procurar às cegas."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Execute a Sacada Balística de Recuperação",
      "text": "Leve o olhar de forma direta para a nova posição do alvo, sem muitas correções intermediárias."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Retome o Acompanhamento Suave",
      "text": "Assim que reencontrar o alvo, volte a acompanhar a nova trajetória na mesma velocidade dele."
    }
  ],
  "dateModified": "2026-09-20"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é o exercício de rastreamento com mudança espacial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É um exercício em que o campo visual se desloca ou gira de repente e você precisa reencontrar o alvo e voltar a acompanhá-lo (Krauzlis, 2004). A página registra o desempenho nessa tarefa; não mede a visão."
      }
    },
    {
      "@type": "Question",
      "name": "Como mudanças bruscas de referencial afetam a visão?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quando o espaço visual se desloca ou gira rapidamente, a imagem do alvo muda de posição na retina e o olhar precisa se reajustar para reencontrá-lo (Robinson, 1965)."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o papel do córtex parietal posterior (PPC) neste exercício?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pesquisa descreve o PPC como uma região que combina sinais da retina com informação motora para relacionar a posição do alvo na retina com a posição no espaço (Findlay & Gilchrist, 1999). O exercício não mede essa atividade cerebral."
      }
    },
    {
      "@type": "Question",
      "name": "O que é a sacada de recuperação balística?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É um salto rápido do olhar que leva a visão central até a nova posição do alvo antes de o acompanhamento suave recomeçar (Rashbass, 1961)."
      }
    },
    {
      "@type": "Question",
      "name": "Este treino ajuda na mira de jogos FPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em jogos de tiro há recuo, tremor de tela e giros bruscos de câmera que desviam o alvo do centro. O exercício pratica reencontrar um alvo depois de uma mudança assim, mas não há garantia de transferência para a mira no jogo."
      }
    },
    {
      "@type": "Question",
      "name": "Serve para esportes dinâmicos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em esportes como futebol, basquete ou automobilismo, bola e adversários se movem em trajetórias cruzadas. O exercício pratica o acompanhamento visual na tela; não substitui treino esportivo nem garante ganho em campo."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona a transição da sacada para o acompanhamento suave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depois do salto do olhar, o acompanhamento precisa recomeçar na velocidade do alvo. Quanto mais cedo isso acontece, menos tempo você passa sem acompanhar o alvo."
      }
    },
    {
      "@type": "Question",
      "name": "Quantas sessões de treino são recomendadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma sugestão prática é fazer algumas séries curtas de 60 segundos, com pausas. Não há um número fixo comprovado; pare se sentir cansaço ou desconforto visual."
      }
    },
    {
      "@type": "Question",
      "name": "Este exercício é gratuito e funciona sem cadastro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, o SkillDrills oferece o treino gratuitamente no navegador, sem download e sem criar conta."
      }
    },
    {
      "@type": "Question",
      "name": "A taxa de atualização da tela tem impacto no treino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monitores de 144 Hz ou mais mostram o movimento com mais quadros por segundo e reduzem o atraso entre quadros (Woods et al., 2015). Compare sessões apenas no mesmo equipamento."
      }
    }
  ],
  "dateModified": "2026-09-20"
};

const guideProps = {
  heading: "Fundamentos Científicos do Rastreamento com Mudança Espacial e Adaptação Ocular",
  intro: [
    "No dia a dia e no esporte, o rastreamento visual raramente acontece sobre cenários parados. Em sprints em piso irregular, na direção em alta velocidade ou em jogos de tiro em primeira pessoa, com tremores de tela e giros bruscos de câmera, o quadro de referência do observador pode se deslocar ou girar de repente (Krauzlis, 2004; Robinson, 1965). Reencontrar e manter o alvo na visão central nessas condições exige adaptação rápida.",
    "Pesquisas de Findlay & Gilchrist (1999) e Kahlon & Lisberger (1996) descrevem que a posição dos estímulos é inicialmente representada em relação à retina. Quando todo o cenário se desloca, essa referência muda de uma vez, e regiões como o córtex parietal posterior ajudam a relacionar sinais visuais e comandos motores para localizar o alvo no espaço. Este exercício não mede essas estruturas; ele registra seu desempenho na tarefa.",
    "Em seguida, o olhar costuma dar um salto rápido (sacada) até a nova posição do alvo e, ao chegar, retoma o acompanhamento suave na velocidade dele (Rashbass, 1961). O exercício pratica essa sequência de reencontrar o alvo e voltar a segui-lo sem hesitar."
  ],
  benchmarks: {
    title: "Faixas de Referência em Mudança Espacial e Reencontro do Alvo",
    headers: ["Nível de Desempenho", "Tempo de Recentralização (ms)", "Precisão de Rastreamento (%)", "Estabilidade Pós-Sacádica", "Perfil Adaptativo"],
    rows: [
      ["Faixa 1 (Muito alta)", "< 220 ms", "> 95%", "> 96% (Fixação imediata)", "Transição muito rápida da sacada para o acompanhamento contínuo."],
      ["Faixa 2 (Alta)", "220 – 280 ms", "88% – 94%", "90% – 95%", "Boa adaptação espacial, com recuperação rápida do alvo e pouco desvio."],
      ["Faixa 3 (Boa)", "281 – 360 ms", "78% – 87%", "80% – 89%", "Recuperação consistente, com leve hesitação em rotações simultâneas."],
      ["Faixa 4 (Intermediária)", "361 – 450 ms", "65% – 77%", "68% – 79%", "Dificuldade visível em mudanças bruscas, com várias sacadas corretivas."],
      ["Faixa 5 (Inicial)", "> 450 ms", "< 65%", "< 68%", "Perda do referencial e busca visual reativa."]
    ],
    note: "Faixas editoriais para comparar suas próprias sessões, não percentis de população nem normas clínicas. ※ Referência para telas 1080p a 50–70 cm, velocidades de 1.0x a 1.5x e desvios aleatórios do referencial, avaliada pelo tempo de recentralização e pela estabilidade após a sacada."
  },
  techniques: {
    title: "Quatro Estratégias para o Rastreamento com Mudança Espacial",
    items: [
      {
        name: "Perceba o Deslocamento Global",
        desc: "No momento da mudança, não procure apenas o ponto isolado. Perceba para onde o quadro inteiro se deslocou e use essa informação para reencontrar o alvo.",
        tips: "Concentre-se em perceber para onde todo o ambiente saltou."
      },
      {
        name: "Recentralização Direta",
        desc: "Assim que perceber a nova posição, leve o olhar até ela de uma vez. A hesitação gera vários saltos pequenos que atrasam a fixação.",
        tips: "Leve o olhar com um movimento firme e direto."
      },
      {
        name: "Retomada Fluida",
        desc: "Ao reencontrar o alvo, não pare. Entre imediatamente no sentido do movimento dele para seguir acompanhando.",
        tips: "Volte ao acompanhamento com fluidez, sem frear."
      },
      {
        name: "Referência no Centro da Tela",
        desc: "Quando a mudança incluir rotação, use o centro da tela como ponto de referência para manter a orientação.",
        tips: "Use o centro do monitor como referência."
      }
    ]
  },
  steps: [
    { title: "Fixe o alvo inicial", text: "Sente-se a uma distância confortável e acompanhe o alvo sem mover a cabeça." },
    { title: "Observe a mudança do campo", text: "Quando a tela se deslocar, perceba primeiro a direção do movimento do quadro inteiro." },
    { title: "Recupere o alvo", text: "Leve o olhar diretamente para a nova posição do alvo e observe o tempo de reaquisição." },
    { title: "Retome o rastreamento", text: "Assim que reencontrar o alvo, acompanhe sua trajetória e compare precisão e erro de posição." }
  ],
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('krauzlis2004', 'findlay1999', 'robinson1965', 'rashbass1961', 'kahlon1996', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Exercício de seguimento ocular lento" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimento de alvo com evasão" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supressão de imagem fantasma" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Exercício ocular em oito" },
    { href: "/pt/drills/visual-tracking/sine-wave-pursuit", label: "Rastreamento em onda senoidal" }
  ]
};

export default function SpatialShiftPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SpatialShiftPursuitClient copy={{ title: "Rastreamento visual com mudança espacial", subtitle: "Siga um alvo enquanto o campo visual muda" }} />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
