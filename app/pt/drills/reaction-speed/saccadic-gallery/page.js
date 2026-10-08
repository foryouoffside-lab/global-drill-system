import SaccadicGalleryWrapper from '@/app/drills/reaction-speed/saccadic-gallery/SaccadicGalleryWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — pt-BR (reaction-speed / saccadic-gallery)
// PRIMARY DOMESTIC: Google Suggest expands "treino de visão" into visão periférica and visão de jogo
// Bing returned exact 0 for the specialist and peripheral seeds; use native visual-training language, not invented volume
// ============================================================

export const metadata = {
  title: 'Treino de Visão Periférica Online | SkillDrills',
  description:
    'Treino de visão periférica grátis no navegador. Mude o olhar entre alvos e pratique varredura visual, reação e coordenação olho-mão.',
  keywords: [
    'treino de visão',
    'treino de visão periférica',
    'treino de visão de jogo',
    'visão periférica treino',
    'varredura visual',
    'movimentos sacádicos',
    'exercícios sacádicos',
    'agilidade visual',
    'tempo de reação visual',
    'coordenação olho-mão',
  ],
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery',
    languages: getAlternateLanguages('/drills/reaction-speed/saccadic-gallery'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Treino de Visão Periférica Online | SkillDrills',
    description:
      'Mude o olhar entre alvos e pratique visão periférica, reação visual e coordenação olho-mão gratuitamente no navegador.',
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Treino de Visão Periférica Online | SkillDrills',
    description:
      'Treino de visão grátis: alterne o olhar entre alvos e pratique sua reação visual.',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Início', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Hub de Exercícios', item: 'https://skilldrills.online/pt/drills' },
    { '@type': 'ListItem', position: 3, name: 'Velocidade de Reação', item: 'https://skilldrills.online/pt/drills/reaction-speed' },
    { '@type': 'ListItem', position: 4, name: 'Treino de Visão Periférica Online', item: 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Saccade"],
  name: 'Treino de Visão Periférica Online',
  alternateName: ['Treino de visão', 'Treino de visão periférica', 'Treino de visão de jogo', 'Exercícios sacádicos'],
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description:
    'Ferramenta interativa para praticar movimentos sacádicos rápidos, fixação do olhar e varredura visual em tela.',
  browserRequirements: 'Navegador moderno com suporte a HTML5 Canvas e JavaScript',
  softwareVersion: '2.0',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Treino de Visão Periférica Online | SkillDrills',
  url: 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery',
  description:
    'Treino de movimentos sacádicos gratuito no navegador para praticar saltos do olhar e aquisição periférica.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requer navegador moderno com suporte a JavaScript.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  learningResourceType: 'Educational Game',
  teaches: 'Movimentos sacádicos, Saltos oculares, Fixação foveal, Varredura visual, Tempo de reação',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Treino de Visão Periférica - Jogo Visual',
  url: 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery',
  description: 'Treino interativo de velocidade de salto ocular e pontaria visual no navegador.',
  genre: ['Vision Training', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como realizar exercícios sacádicos e acelerar os saltos oculares',
  description: 'Passo a passo para praticar a transição do olhar entre alvos.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Posicionamento e foco central',
      text: 'Sente-se a cerca de 50–70 cm da tela e fixe o olhar no marcador inicial central.',
      url: 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Detectar o flash periférico',
      text: 'Mantenha a cabeça firme e perceba a aparição do alvo na visão periférica sem virar o pescoço.',
      url: 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Disparar o salto sacádico',
      text: 'Mova os dois olhos rapidamente e em linha reta para as coordenadas do alvo.',
      url: 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Travar o foco foveal e clicar',
      text: 'Centralize a fóvea no alvo com nitidez e clique imediatamente para registrar a latência.',
      url: 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery#step-4',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-09-20',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que são exercícios sacádicos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exercícios sacádicos são treinos visuais estruturados para desenvolver a velocidade, a precisão e o tempo de reação dos saltos oculares rápidos (sacadas) entre diferentes pontos do campo visual.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a velocidade de uma sacada no sistema visual humano?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A velocidade angular de pico de uma sacada atinge entre 200 e 700 graus por segundo, tornando-a um dos movimentos biológicos mais rápidos do corpo humano (Rayner, 1998).',
      },
    },
    {
      '@type': 'Question',
      name: 'O que são sacadas expressas (Fischer & Boch, 1984)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sacadas expressas são movimentos oculares de latência extremamente reduzida (~100–120 ms) acionados via vias subcorticais do colículo superior quando as inibições de fixação são liberadas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como o treino sacádico ajuda nos jogos competitivos e FPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em jogos de tiro (Valorant, CS2), sacadas velozes permitem checar cantos, consultar o minimapa e mirar em adversários surpresa com o mínimo de tempo de supressão visual.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é supressão sacádica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É o mecanismo neurológico pelo qual o cérebro suspende temporariamente a percepção visual durante o salto do olho (20–40 ms) para impedir borrões e tontura.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que significa dismetria sacádica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ocorre quando o olhar erra o alvo, caindo antes (hipometria) ou além dele (hipermetria), exigindo micro-sacadas secundárias de correção que atrasam o disparo.',
      },
    },
    {
      '@type': 'Question',
      name: 'A taxa de atualização do monitor afeta o treino de sacadas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Telas de 144 Hz ou 240 Hz exibem os alvos com atraso de apenas 4 a 7 ms (Woods et al., 2015), permitindo que a retina registre a emergência do alvo mais rapidamente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Exercícios sacádicos podem ajudar na velocidade de leitura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A leitura envolve sacadas, mas este exercício mede apenas a tarefa na tela e não prova melhora na leitura. Use-o como prática de varredura visual.',
      },
    },
    {
      '@type': 'Question',
      name: 'Com que frequência devo praticar exercícios sacádicos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma sessão diária de 5 a 10 minutos é suficiente. Treinar em excesso pode causar astenopia (cansaço ocular), logo blocos curtos e intensos são os mais indicados.',
      },
    },
    {
      '@type': 'Question',
      name: 'Este exercício sacádico é gratuito e sem instalação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O simulador da SkillDrills é 100% gratuito, funciona diretamente no navegador e calcula os tempos com a resolução de tempo do navegador (~1 ms) usando a API performance.now().',
      },
    },
  ],
};

faqSchema.mainEntity = faqSchema.mainEntity.slice(0, 10);
const saccadicGuide = {
  heading: 'Guia de Exercícios Sacádicos: Velocidade de Saltos Oculares e Fixação Foveal',
  intro: [
    'Os movimentos sacádicos são saltos balísticos de altíssima velocidade que transportam o centro da visão foveal de uma coordenada para outra (Rayner, 1998; Fischer & Boch, 1984).',
    'Com velocidades que superam 700°/s, as sacadas colocam o cérebro em modo de supressão sacádica para evitar borrões na retina. Se os olhos não atingirem o ponto com precisão (dismetria sacádica), micro-sacadas de ajuste serão necessárias, adicionando atrasos cruciais. Este exercício pratica frear o olhar e aterrissar no alvo em um único movimento.',
    'Metodologia de medição no navegador: todos os tempos são medidos localmente via High Resolution Time API (performance.now()). Considere as latências do monitor (~16,7 ms em 60 Hz, ~6,9 ms em 144 Hz e ~4,1 ms em 240 Hz; Woods et al., 2015) e a taxa de atualização do mouse. Variações inferiores a 5 ms representam ruído de medição.',
    'Treine sempre no mesmo computador e tela para acompanhar seu progresso fisiológico e reflexos oculares.',
  ],
  benchmarks: {
    title: 'Faixas de Referência de Latência Sacádica e Precisão',
    headers: ['Latência Sacádica (Reação)', 'Classificação', 'Dinâmica do Salto Ocular', 'Contexto Funcional', 'Foco Recomendado'],
    rows: [
      ['< 130 ms', 'Faixa 1 (Muito alta)', 'Disparo subcortical via colículo superior; inibição mínima', 'Latências muito baixas, ligadas a sacadas expressas (Fischer & Boch, 1984)', 'Treinar amplitude máxima de salto visual'],
      ['130 – 170 ms', 'Faixa 2 (Alta)', 'Iniciação cortical extremamente rápida; sem hesitação', 'Resposta rápida em tarefas de reação', 'Consolidar precisão de parada sem ultrapassar o alvo'],
      ['171 – 220 ms', 'Faixa 3 (Boa)', 'Latência saudável de referência para adultos', 'Faixa de referência para leitura e varredura visual (Rayner, 1998)', 'Expandir o raio de percepção periférica'],
      ['221 – 280 ms', 'Faixa 4 (Intermediária)', 'Atraso na liberação da fixação; leve hesitação', 'Fadiga ocasional ou recuperação incompleta', 'Fazer pausas 20-20-20 para descanso dos olhos'],
      ['> 280 ms', 'Faixa 5 (Inicial)', 'Dismetria sacádica evidente com múltiplas correções', 'Músculos oculares fatigados ou distrações na tela', 'Priorizar aterrissagem precisa antes de focar em velocidade'],
    ],
    note: 'Faixas editoriais para comparar suas próprias sessões, não percentis de população nem normas clínicas. Baseadas em estudos de oculomotricidade (Rayner, 1998; Fischer & Boch, 1984; Leigh & Zee, 2015) adaptada para telas digitais (Woods et al., 2015).',
  },
  techniques: {
    title: 'Técnicas para Maximizar a Velocidade dos Saltos Oculares',
    items: [
      {
        name: 'Isolamento dos Movimentos da Cabeça',
        desc: 'Mova apenas os globos oculares, mantendo cabeça e pescoço totalmente imóveis. Saltos oculares puros são duas vezes mais velozes que movimentos de cabeça.',
        tips: 'Apoie o queixo na mão se perceber que está girando o rosto sem querer.',
      },
      {
        name: 'Percepção Periférica Antecipada',
        desc: 'Use a retina periférica para detectar a coordenada do alvo antes de iniciar a transição rápida dos olhos.',
        tips: 'Mantenha um olhar suave no centro da tela para não criar visão de túnel.',
      },
      {
        name: 'Freio Ocular Preciso (Stopping Power)',
        desc: 'Evite passar do alvo ou frear antes: travar os olhos de primeira no centro do ponto elimina sacadas corretivas.',
        tips: 'A precisão de parada economiza mais tempo do que a pressa cega.',
      },
      {
        name: 'Hidratação e Descanso dos Olhos',
        desc: 'A fixação intensa na tela diminui o piscar em até 60 %, causando ressecamento e lentidão muscular.',
        tips: 'Pisque conscientemente entre as rodadas e olhe para o horizonte.',
      },
    ],
  },
  steps: [
    'Sente-se alinhado ao centro da tela a aproximadamente 60 cm de distância.',
    'Inicie o exercício e fixe o olhar no ponto de partida central.',
    'Assim que um alvo piscar no campo visual, lance os olhos rapidamente sobre ele.',
    'Centralize a fóvea no meio do alvo e clique para registrar a latência.',
    'Repita as rodadas e avalie sua média de latência sacádica.',
  ],
  audience: 'Jogadores de FPS (Valorant, CS2, Apex Legends) e qualquer pessoa que queira praticar varredura visual e coordenação olho-mão.',
  faqs: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('rayner1998', 'fischer1984', 'leigh2015', 'woods2015'),
  related: [
    { href: '/pt/drills/reaction-speed', label: 'Hub Velocidade de Reação' },
    { href: '/pt/drills/reaction-speed/reaction-time-test', label: 'Teste de Tempo de Reação' },
    { href: '/pt/drills/reaction-speed/reflex-training-drill', label: 'Teste de Reflexo (Multi-Alvos)' },
    { href: '/pt/drills/reaction-speed/visual-tracking-speed-test', label: 'Teste de Rastreamento Visual' },
  ],
};

export default function PortugueseSaccadicGalleryPage() {
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
      <SaccadicGalleryWrapper copy={{ title: 'Treino de Visão Periférica Online', subtitle: 'Saltos do Olhar · Aquisição Visual', caption: 'Mude o olhar rapidamente entre os alvos e clique em cada um com precisão.' }} />
      <DrillGuide guide={saccadicGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
