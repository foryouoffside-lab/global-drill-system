import GhostingSuppressPursuitClient from '@/app/drills/visual-tracking/ghosting-suppress-pursuit/GhostingSuppressPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de Ghosting no Monitor | SkillDrills",
  description: "Observe rastros e halos em um alvo móvel e pratique fixação foveal, nitidez de movimento e estabilidade do olhar no navegador.",
  keywords: [
    "teste de ghosting no monitor",
    "teste ghosting monitor",
    "rastro na tela",
    "teste de monitor",
    "tempo de resposta do monitor",
    "desfoque de movimento",
    "teste de rastros visuais",
    "fixação foveal",
    "estabilidade do olhar",
    "teste de movimento online",
    "monitor gamer ghosting",
    "teste visual grátis"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/visual-tracking/ghosting-suppress-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/ghosting-suppress-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Ghosting no Monitor | SkillDrills",
    description: "Observe rastros e halos em um alvo móvel e pratique fixação foveal, nitidez de movimento e estabilidade do olhar no navegador.",
    url: "https://skilldrills.online/pt/drills/visual-tracking/ghosting-suppress-pursuit",
    siteName: "SkillDrills",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Teste de Ghosting no Monitor | SkillDrills",
    description: "Observe rastros e halos em um alvo móvel e pratique fixação foveal, nitidez de movimento e estabilidade do olhar.",
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
      "name": "Supressão de Rastros e Fixação",
      "item": "https://skilldrills.online/pt/drills/visual-tracking/ghosting-suppress-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Supressão de Rastros Visuais – Fixação Ocular",
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
  "name": "Teste de Estabilidade de Fixação Ocular e Supressão de Fantasmas Visuais",
  "url": "https://skilldrills.online/pt/drills/visual-tracking/ghosting-suppress-pursuit",
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
  "name": "Teste de Ghosting no Monitor – Fixação Foveal",
  "description": "Treinador visual no navegador para observar rastros em um alvo móvel e praticar fixação foveal e estabilidade do olhar.",
  "genre": ["Teste de Monitor", "Treino de Motilidade Ocular", "Treino de Reação Visual"],
  "playMode": "Um jogador",
  "applicationCategory": "Game",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Como Treinar a Estabilidade de Fixação sob Rastros Visuais",
  "description": "Protocolo para condicionar o desfoque cortical ativo e a ancoragem foveal precisa em alvos com fantasmas visuais.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Isole a Cabeça e Mantenha a Postura",
      "text": "Sente-se ereto a 50-60 cm da tela, mantendo a cabeça e o queixo imóveis para forçar o trabalho autônomo dos músculos extraoculares.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/ghosting-suppress-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Fixe o Olhar no Núcleo do Alvo",
      "text": "Concentre a visão estritamente no ponto central do alvo, ignorando conscientemente os anéis e anomalias de arrasto que o seguem.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/ghosting-suppress-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Suprima o Arrastamento Retiniano",
      "text": "Evite que o olhar escorregue para trás em direção aos rastros visuais. Mantenha microssacadas estáveis acopladas à dianteira do vetor.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/ghosting-suppress-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Realize Blocos de Alta Concentração",
      "text": "Pratique de 5 a 8 blocos de 60 segundos com intervalos de descanso para evitar fadiga dos fotorreceptores e do córtex visual.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/ghosting-suppress-pursuit#step-4"
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
      "name": "O que é o teste de ghosting e fixação do olhar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É uma prática visual que mostra um alvo móvel com rastros e halos para observar a clareza do movimento e treinar a manutenção do olhar no núcleo do alvo. Ela não substitui uma medição laboratorial do tempo de resposta do painel."
      }
    },
    {
      "@type": "Question",
      "name": "Como o sistema visual lida com o desfoque de movimento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O sistema visual combina sinais de movimento e contraste ao longo do tempo. A percepção final depende tanto do processamento neural quanto da resposta do monitor; por isso, o exercício deve ser interpretado como observação e treino, não como diagnóstico (Burr, 1980)."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a função das microssacadas durante a fixação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mesmo durante uma fixação, os olhos fazem pequenos movimentos que ajudam a renovar a estimulação da retina e a evitar o desvanecimento perceptivo, sem abandonar o alvo (Martinez-Conde et al., 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "Por que o olhar tende a seguir o rastro atrás do alvo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mudanças de brilho e contraste na periferia podem chamar a atenção. Se você seguir o halo em vez do núcleo, a fixação se desloca para trás; reduza a velocidade e retorne ao centro do alvo."
      }
    },
    {
      "@type": "Question",
      "name": "De que maneira este exercício beneficia jogadores de FPS e esports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em tiroteios caóticos com explosões, flashes e partículas, a capacidade de fixar a retícula exatamente no centro do adversário sem se distrair com efeitos visuais periféricos resulta em maior precisão e menor tempo de reação."
      }
    },
    {
      "@type": "Question",
      "name": "Por que a imobilização estrita da cabeça é obrigatória?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mover a cabeça engaja o reflexo vestíbulo-ocular (RVO), o que mascara falhas no controle fino dos músculos retos e oblíquos. Manter o queixo fixo garante que todo o esforço de compensação seja puramente oculomotor."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a frequência e duração de prática recomendadas por dia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sessões diárias de 5 a 10 minutos (5 a 8 rodadas de 60 segundos). A inibição de ruído visual exige esforço atencional contínuo; limites controlados previnem astenopia (cansaço ocular) e facilitam a consolidação neural."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o papel do tempo de resposta do monitor (GtG) e taxa de Hz neste teste?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo de resposta e a frequência do monitor alteram o rastro observado, mas nenhum navegador garante uma medição de 1 ms. Compare 60, 120 ou 144 Hz no mesmo equipamento e registre as condições antes de interpretar o resultado."
      }
    },
    {
      "@type": "Question",
      "name": "Há transferência deste treino para esportes dinâmicos como beisebol ou tênis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Bolas em alta velocidade produzem arrastamento visual no campo de visão periférica. Atletas com controle de fixação superior conseguem distinguir a costura e o giro da bola sem perder a nitidez foveal."
      }
    },
    {
      "@type": "Question",
      "name": "O exercício de supressão de fantasmas visuais é gratuito e seguro para uso diário?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, a ferramenta é totalmente gratuita, opera diretamente no navegador sem coleta de dados privados, e todos os seus resultados de estabilidade permanecem salvos exclusivamente no armazenamento local do seu dispositivo."
      }
    }
  ]
};

const guideProps = {
  heading: "Bases Neurofisiológicas da Fixação Foveal e Supressão de Rastros Visuais",
  intro: [
    "Ao acompanhar um alvo rápido, a imagem pode deixar uma estela por causa da resposta dos pixels, do tempo de integração visual e do movimento do olhar. Este teste usa o rastro como distração controlada: a tarefa é manter a fixação no núcleo, sem tratar o resultado como exame clínico (Burr, 1980; Burr & Morgan, 1997).",
    "Filtragem visual e microssacadas: durante a fixação, pequenos movimentos oculares renovam a estimulação da retina e ajudam a manter a percepção do alvo. A prática combina atenção ao núcleo, perseguição suave e retorno controlado quando um halo chama a visão periférica (Martinez-Conde, Macknik, & Hubel, 2004; Rolfs, 2009; Krauzlis, 2004).",
    "Interação com hardware e frequência: 60 Hz, 120 Hz e 144 Hz exibem o movimento com intervalos diferentes, enquanto overdrive pode produzir um halo claro de overshoot. Compare sempre a mesma tela e configuração; a ferramenta roda no navegador e salva os resultados localmente."
  ],
  techniques: {
    title: "Quatro técnicas para manter a fixação no núcleo do alvo",
    items: [
      { name: "Estabilize a postura antes de observar o rastro", desc: "Cabeça e mandíbula estáveis reduzem movimentos compensatórios e tornam mais fácil separar o comportamento do olhar do artefato da tela.", tips: "Sente-se a 50–70 cm, mantenha os pés apoiados e pare se houver ardor, dor ou visão dupla." },
      { name: "Fixe no núcleo, não no halo", desc: "O centro do alvo é a referência de precisão; o rastro é um estímulo secundário que pode puxar a atenção para trás.", tips: "Use uma velocidade baixa no início e repita mentalmente ‘centro’ quando o halo ficar mais chamativo." },
      { name: "Compare uma variável de cada vez", desc: "Frequência, brilho, overdrive e velocidade mudam a aparência do rastro. Alterar tudo ao mesmo tempo impede uma comparação confiável.", tips: "Mantenha o fundo e o tamanho constantes; mude apenas a velocidade ou a configuração do monitor por série." },
      { name: "Descanse e registre as condições", desc: "Fadiga, brilho e distância de visualização afetam a estabilidade do olhar. Séries curtas produzem dados mais comparáveis.", tips: "Anote velocidade, Hz e modo de resposta; interrompa a sessão ao notar desconforto visual persistente." }
    ]
  },
  steps: [
    "Sente-se a 50–70 cm da tela, alinhe a postura e deixe a cabeça estável.",
    "Comece em 0.7x ou 1.0x por 60 segundos e observe o núcleo sem tentar medir o tempo de resposta do painel.",
    "Quando o halo aparecer, mantenha o olhar no centro; se o perder, faça uma correção curta e volte à perseguição suave.",
    "Repita a série com uma única alteração: velocidade, frequência de atualização ou intensidade de resposta do monitor.",
    "Faça 5 a 8 séries com pausas e registre a configuração usada, a frequência de perdas e qualquer desconforto."
  ],
  benchmarks: {
    title: "Padrões de Desempenho em Fixação Foveal e Supressão de Rastros Visuais",
    headers: ["Nível de Desempenho", "Multiplicador de Velocidade", "Estabilidade de Fixação sob Rastros Visuais", "Perfil Neuromotor e Oculomotor"],
    rows: [
      ["Nível 1: Apex Fixação – Bloqueio Foveal Puro", "2.0x+ Ultra-Velocidade", "O olhar permanece inabalavelmente ancorado no núcleo do alvo mesmo diante de anéis de arrasto densos e quiques rápidos.", "Supressão cortical impecável do desfoque de movimento e precisão microssacádica absoluta (Burr, 1980; Martinez-Conde et al., 2004). Padrão de elite em esportes e esports."],
      ["Nível 2: Acuidade de Fixação Superior", "1.4x – 1.9x Alta Velocidade", "O contorno do alvo é perfeitamente isolado em alta velocidade; distração mínima causada pelos anéis residuais de cauda.", "Excelente filtragem sensoriomotora dos músculos extraoculares. Alto desempenho em cenários saturados de partículas e efeitos visuais."],
      ["Nível 3: Padrão Funcional Sólido", "1.0x – 1.3x Velocidade Padrão", "Perseguição estável na velocidade base; breve hesitação momentânea durante quiques ou aumento da densidade de rastros.", "Faixa normativa em adultos saudáveis. Plenamente satisfatória para direção diária, esportes recreativos e jogos casuais."],
      ["Nível 4: Desvio Ocular – Requer Treino", "0.7x – 0.9x Velocidade Moderada", "O olhar é recorrentemente atraído para trás em direção aos rastros visuais; o núcleo do alvo escapa frequentemente da fóvea.", "Filtragem cortical lenta de ruído visual. Recomenda-se prática consistente nos patamares iniciais de velocidade."],
      ["Nível 5: Perda de Fixação – Iniciante", "< 0.7x Baixa Velocidade", "Os olhos oscilam de forma desordenada entre o alvo principal e os anéis fantasmas; perda completa do foco.", "Coordenação neuromuscular básica requer desenvolvimento em velocidades lentas com imobilização rigorosa da cabeça."]
    ],
    note: "Baremos fundamentados em pesquisas neurofisiológicas sobre controle de fixação foveal, dinâmica de microssacadas e supressão cortical de desfoque retiniano (Burr, 1980; Martinez-Conde et al., 2004; Rolfs, 2009; Krauzlis, 2004)."
  },
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('burr1980', 'martinezconde2004', 'rolfs2009', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Perseguição Ocular Lenta" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Perseguição Caótica Direcional" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Perseguição Ocular Reativa" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Rastreamento em Oito" }
  ]
};

export default function GhostingSuppressPursuitPagePt() {
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
      <GhostingSuppressPursuitClient
        copy={{
          title: "Teste de Ghosting no Monitor – Fixação Ocular",
          subtitle: "Treino de Estabilidade Foveal e Supressão de Fantasmas Visuais",
          description: "Ao exibir rastros de arrasto e anéis fantasma estocásticos, este exercício condiciona o córtex visual a inibir ativamente a interferência de fundo, fixando a fóvea central exclusivamente no núcleo do alvo móvel (Burr, 1980; Martinez-Conde et al., 2004)."
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
