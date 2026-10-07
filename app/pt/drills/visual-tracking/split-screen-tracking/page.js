import SplitScreenTrackingClient from '@/app/drills/visual-tracking/split-screen-tracking/SplitScreenTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Rastreamento visual em tela dividida | SkillDrills",
  description: "Acompanhe dois alvos em áreas separadas da tela. Treino gratuito com atenção dividida, estabilidade do olhar e erro por lado.",
  keywords: [
    "treino de atenção dividida tela dividida",
    "rastreamento visual em tela dividida",
    "exercício ocular de atenção bilateral",
    "visão periférica simultânea",
    "rastreamento de múltiplos alvos",
    "atividade de atenção e concentração",
    "evitar visão em túnel exercício",
    "coordenação visual bilateral",
    "rastreamento com divisão de tela",
    "atenção visual dividida treino",
    "exercício de foco periférico",
    "treino de visão periférica para jogos"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/visual-tracking/split-screen-tracking",
    languages: getAlternateLanguages('/drills/visual-tracking/split-screen-tracking'),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Rastreamento visual em tela dividida | SkillDrills",
    description: "Acompanhe dois alvos em áreas separadas da tela. Treino gratuito com atenção dividida, estabilidade do olhar e erro por lado.",
    url: "https://skilldrills.online/pt/drills/visual-tracking/split-screen-tracking",
    siteName: 'SkillDrills',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rastreamento visual em tela dividida | SkillDrills",
    description: "Acompanhe dois alvos em áreas separadas da tela. Treino gratuito com atenção dividida, estabilidade do olhar e erro por lado.",
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
      "name": "Rastreamento em Tela Dividida",
      "item": "https://skilldrills.online/pt/drills/visual-tracking/split-screen-tracking"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Divided_attention", "https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Rastreamento em Tela Dividida",
  "operatingSystem": "Navegador Web",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Aplicação de treino visual para observar atenção dividida e seguimento ocular bilateral.",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Exercício de Rastreamento em Tela Dividida",
  "url": "https://skilldrills.online/pt/drills/visual-tracking/split-screen-tracking",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Todos os navegadores modernos",
  "browserRequirements": "Requer suporte a JavaScript e HTML5 Canvas",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Split-Screen Tracking",
  "description": "Desafio de atencao visual dividida onde o utilizador monitoriza simultaneamente dois alvos independentes em trajetorias ortogonais.",
  "genre": ["Treino Visual", "Atenção Dividida", "Treino de Reflexos"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Navegador Web",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Treinar a Atenção Dividida com Tela Dividida",
  "description": "Guia passo a passo para expandir a atencao periferica coberta e rastrear alvos ortogonais duplos sem alternancia sacadica.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fixe o Olhar na Divisória Central",
      "text": "Sente-se a 50-70 cm do ecra. Ancore o foco suave na linha central divisoria entre os dois campos visuais."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Expanda a Atenção Coberta Bilateral",
      "text": "Amplie a atencao espacial para os dois lados simultaneamente, utilizando os fotorrecetores perifericos sem mover o centro dos olhos."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Desassocie as Trajetórias Ortogonais",
      "text": "Processe o movimento vertical a esquerda e o horizontal a direita como duas correntes visuais autonomas."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Suprima a Alternância Sacádica",
      "text": "Evite alternar o olhar de um lado para o outro para impedir que a supressao sacadica oculte os alvos em movimento."
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
      "name": "O que e o exercicio Split-Screen Tracking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Split-Screen Tracking desenvolve a atencao visual dividida forcando o utilizador a monitorizar dois alvos ortogonais (um vertical e um horizontal) em campos visuais separados."
      }
    },
    {
      "@type": "Question",
      "name": "Por que os olhos humanos nao focam dois alvos em movimento ao mesmo tempo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fovea centralis de alta resolucao cobre apenas 1 a 2 graus do campo de visao. Varios alvos so podem ser monitorizados atraves de atencao periferica coberta ou saltos alternados (Pylyshyn & Storm, 1988)."
      }
    },
    {
      "@type": "Question",
      "name": "O que e a vantagem do hemicampo bilateral?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ao distribuir um alvo para cada hemicampo visual, cada hemisferio cerebral processa o seu alvo em paralelo, aumentando a capacidade de atencao comparativamente a concentrar dois alvos num unico lado (Alvarez & Cavanagh, 2005)."
      }
    },
    {
      "@type": "Question",
      "name": "O que e a supressao sacadica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Durante saltos sacadicos rapidos, a visao e parcialmente inibida durante 20 a 50 ms. Olhar alternadamente de um lado para o outro gera lapsos de percepcao frequentes."
      }
    },
    {
      "@type": "Question",
      "name": "Como este exercicio beneficia jogadores de FPS tatico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em jogos como CS2, Valorant e Apex Legends, o jogador mantem a mira centrada enquanto monitoriza o minimapa, municao e movimentacoes perifericas sem desviar a mira (Green & Bavelier, 2006)."
      }
    },
    {
      "@type": "Question",
      "name": "Por que tendo a perder o alvo de um dos lados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A dominancia ocular e hemisferica direciona inconscientemente a atencao para um lado. Focar propositadamente a atencao no lado mais fraco restaura o equilibrio bilateral."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o efeito de ocultar a linha guia (Hide Line)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Remover a linha visivel obriga o cortex parietal a criar um modelo preditivo puramente interno da trajetoria dos dois alvos."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o impacto em desportos coletivos e conducao?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Permite aos atletas e condutores manter o foco na linha principal enquanto percecionam colegas de equipa, adversarios ou veiculos laterais."
      }
    },
    {
      "@type": "Question",
      "name": "Este treino e gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, o SkillDrills oferece este treino de forma totalmente aberta e gratuita no navegador sem necessidade de registo."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a rotina diaria sugerida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Praticar 2 a 3 series de 60 segundos por dia (cerca de 5 minutos) estimula a neuroplasticidade frontoparietal sem provocar esgotamento cognitivo."
      }
    }
  ],
  "dateModified": "2026-09-20"
};

const guideProps = {
  heading: "Fundamentos Científicos do Rastreamento em Tela Dividida e Atenção Dividida",
  intro: [
    "O aparelho visual humano possui uma restricao anatomica estrita: a fovea centralis de maxima acuidade cobre apenas um angulo visual diminuto de 1 a 2 graus. Quando dois estimulos se movimentam simultaneamente em planos espaciais separados, a foveacao optica direta de ambos e impossivel. O cerebro depara-se com um dilema executivo: alternar os olhos rapidamente atraves de sacadas constantes, ou estabelecer uma ancoragem visual central e estender a atencao espacial coberta de forma bimodal por toda a periferia.",
    "A investigacao de Pylyshyn & Storm (1988) sobre rastreamento de multiplos objetos (MOT) demonstrou que o cortex dispõe de indices visuais independentes capazes de acompanhar alvos em paralelo. Subsequentemente, Alvarez & Cavanagh (2005) comprovaram que a capacidade atencional e distribuida entre os dois hemisferios cerebrais: dividir um alvo no campo esquerdo (hemisferio direito) e outro no campo direito (hemisferio esquerdo) confere uma vantagem bilateral tangivel, evitando sobrecargas atencionais.",
    "Alternar os olhos incessantemente acarreta um custo neurologico elevado. Cada sacada consome entre 20 a 50 milissegundos e desencadeia o fenomeno da supressao sacadica, durante o qual a sensibilidade visual cai temporariamente. O exercicio Split-Screen Tracking treina uma fixacao central estavel associada a uma atencao periferica abrangente (Cavanagh & Alvarez, 2005; Green & Bavelier, 2006). A disposicao ortogonal (vertical a esquerda e horizontal a direita) elimina agrupamentos de movimento e forca o cerebro a um processamento paralelo genuino."
  ],
  benchmarks: {
    title: "Tabela de Classificação em Atenção Dividida e Rastreamento Bilateral",
    headers: ["Nível de Desempenho", "Velocidade do Alvo", "Estabilidade da Ancoragem Central", "Simetria Hemisférica (Erro)", "Percentil Populacional"],
    rows: [
      ["Elite (Esports / Aviadores)", "3.5x – 5.0x+", "Fixação central estável; 0 sacadas intrusivas", "< 3% de discrepância (bloqueio bimodal)", "Top 1.5%"],
      ["Avançado (Competitivo)", "2.5x – 3.5x", "Fixação estável; raras micro-sacadas", "< 7% de discrepância (monitorização dupla consistente)", "Top 8%"],
      ["Competente (Adulto Saudável)", "1.8x – 2.5x", "Foco central mantido; sacadas ligeiras nos picos", "< 12% de discrepância (ligeira dominância unilateral)", "Top 25%"],
      ["Em Desenvolvimento (Divisão Ineficiente)", "1.2x – 1.8x", "Sacadas involuntárias frequentes para o alvo mais rápido", "15% – 25% de atraso no hemicampo não dominante", "45% Intermédios"],
      ["Iniciante (Visão em Túnel)", "0.5x – 1.2x", "Alternância constante entre ecrãs por sacadas balísticas", "> 25% de perda total de seguimento de um alvo", "Nível Inicial"]
    ],
    note: "※ Calibrado com base em limiares de capacidade MOT (Pylyshyn & Storm, 1988) e modelos de recursos hemisfericos bilaterais (Alvarez & Cavanagh, 2005) em ecrãs 1080p a 50–70 cm de distancia."
  },
  techniques: {
    title: "Quatro Técnicas Fundamentais para a Atenção Dividida com Tela Dividida",
    items: [
      {
        name: "Ancoragem Visual Central e Foco Suave",
        desc: "Fixe a linha divisoria vertical central com um olhar suave. Relaxe os musculos dos olhos para permitir que a visao periferica detete o movimento dos dois alvos simultaneamente.",
        tips: "Nao olhe diretamente para nenhum dos alvos; a linha central e a sua ancora visual permanente."
      },
      {
        name: "Desassociação de Vetores Ortogonais",
        desc: "O cerebro tenta instintivamente fundir movimentos perpendiculares num vetor diagonal. Processe o ritmo do movimento vertical e do horizontal como dois sinais completamente independentes.",
        tips: "Utilize os pontos de inversao de cada alvo como marcadores visuais separados."
      },
      {
        name: "Equilíbrio de Dominância Hemisférica",
        desc: "A maioria das pessoas tem uma dominancia ocular que privilegia um lado do campo visual. Aloque conscientemente 60% da atencao mental para o hemicampo mais fraco para evitar perdas.",
        tips: "Verifique nas estatisticas qual o lado com menor precisao e incline o foco para essa lateral."
      },
      {
        name: "Supressão de Sacadas e Sincronização de Piscar",
        desc: "Resista ao reflexo de olhar para o alvo mais veloz. Sincronize o pestanejar com os momentos de inversao de marcha, quando as trajetorias sao mais previsiveis.",
        tips: "Pestaneje brevemente apenas quando ambos os alvos atingem os seus limites de curso."
      }
    ]
  },
  steps: [
    { title: "Fixe a linha central", text: "Olhe suavemente para o centro da tela e perceba os dois alvos sem fixar nenhum deles diretamente." },
    { title: "Separe os dois movimentos", text: "Leia o movimento vertical à esquerda e o horizontal à direita como ritmos independentes." },
    { title: "Compare as perdas por lado", text: "Após cada rodada, verifique qual alvo foi perdido e se o ponto central permaneceu estável." },
    { title: "Aumente a velocidade aos poucos", text: "Suba a velocidade somente quando a precisão e o equilíbrio entre os lados estiverem consistentes." }
  ],
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('pylyshyn1988', 'alvarez2005', 'green2006', 'cavanagh2005', 'woods2015', 'leigh2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Exercício de seguimento ocular lento" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimento de alvo com evasão" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supressão de imagem fantasma" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Exercício ocular em oito" },
    { href: "/pt/drills/visual-tracking/sine-wave-pursuit", label: "Rastreamento em onda senoidal" }
  ]
};

export default function SplitScreenTrackingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SplitScreenTrackingClient copy={{ title: "Rastreamento visual em tela dividida", subtitle: "Acompanhe dois alvos em áreas separadas" }} />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
