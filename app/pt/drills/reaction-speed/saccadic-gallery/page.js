import SaccadicGalleryWrapper from '@/app/drills/reaction-speed/saccadic-gallery/SaccadicGalleryWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/reaction-speed/saccadic-gallery';
const title = 'Exercícios Sacádicos Online: Treino do Olhar | SkillDrills';
const description =
  'Exercícios sacádicos grátis no navegador: leve o olhar de um alvo a outro e clique em cada um com precisão. Pratique saltos do olhar e coordenação olho-mão.';

export const metadata = {
  title,
  description,
  keywords: [
    'exercícios sacádicos',
    'movimentos sacádicos',
    'exercício sacádico online',
    'treino do olhar',
    'saltos do olhar',
    'varredura visual',
    'coordenação olho-mão',
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/reaction-speed/saccadic-gallery'),
  },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title,
    description: 'Leve o olhar de um alvo a outro e clique com precisão: exercícios sacádicos grátis no navegador.',
    type: 'article',
    url,
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title,
    description: 'Exercícios sacádicos grátis: salte o olhar entre alvos e clique com precisão.',
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
    { '@type': 'ListItem', position: 4, name: 'Exercícios Sacádicos Online', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  sameAs: ['https://en.wikipedia.org/wiki/Saccade'],
  name: 'Exercícios Sacádicos Online: Treino do Olhar',
  alternateName: ['Exercícios sacádicos', 'Movimentos sacádicos', 'Treino do olhar'],
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description: 'Jogo no navegador: os alvos aparecem um por vez em pontos fixos de uma grade; você leva o olhar até eles e clica. Registra acertos e o tempo até o clique.',
  browserRequirements: 'Navegador moderno com suporte a HTML5 Canvas e JavaScript',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-08',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Exercícios Sacádicos Online | SkillDrills',
  url,
  description: 'Exercícios sacádicos grátis no navegador para praticar saltos do olhar entre alvos.',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requer navegador moderno com suporte a JavaScript.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  inLanguage: 'pt-BR',
  dateModified: '2026-11-08',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Exercícios Sacádicos - Treino do Olhar',
  url,
  description: 'Leve o olhar rapidamente de um alvo a outro e clique em cada um, direto no navegador.',
  genre: ['Action', 'Aim Trainer'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-08',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como fazer os exercícios sacádicos',
  description: 'Quatro passos para levar o olhar até cada alvo e clicar com precisão.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Posicione-se', text: 'Sente-se a cerca de 50–70 cm da tela e deixe o olhar no centro da tela.' },
    { '@type': 'HowToStep', position: 2, name: 'Perceba o alvo', text: 'Mantenha a cabeça parada e perceba o alvo vermelho assim que ele aparecer em um dos pontos da grade.' },
    { '@type': 'HowToStep', position: 3, name: 'Salte o olhar', text: 'Leve o olhar até o alvo em um único salto, antes da mão.' },
    { '@type': 'HowToStep', position: 4, name: 'Clique com precisão', text: 'Clique no alvo (no celular, toque) e confira o resultado no fim.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    q: 'O que são exercícios sacádicos?',
    a: 'São exercícios que repetem os saltos rápidos do olhar (sacadas) de um ponto a outro. Aqui os alvos aparecem um por vez em pontos fixos de uma grade (4×3 no computador, 3×3 no celular), nunca duas vezes seguidas no mesmo ponto, e você leva o olhar até eles e clica. É um jogo de navegador, não um exame de vista nem um tratamento.',
  },
  {
    q: 'Isso é treino de visão periférica?',
    a: 'Não exatamente. O alvo aparece fora do ponto que você está olhando e você precisa notá-lo, mas a tarefa principal é saltar o olhar até ele e clicar. Por isso o foco é o movimento sacádico, não a visão periférica isolada.',
  },
  {
    q: 'Como funcionam o tempo e os pontos?',
    a: 'Você começa com 45 segundos e cada acerto soma 2 segundos (máximo de 60). Cada acerto vale 100 pontos multiplicados pelo combo (até 3,0x) e por um bônus de nível. Conforme o nível sobe, os alvos ficam menores e visíveis por menos tempo. Um clique errado zera o combo; a perda de 1 segundo só vale se você ativar a penalidade nas configurações. Joga-se com mouse ou toque.',
  },
  {
    q: 'Qual a velocidade de uma sacada?',
    a: 'Uma sacada dura poucas dezenas de milissegundos e, em saltos grandes, a velocidade de pico chega a várias centenas de graus por segundo (Leigh & Zee, 2015). Elas acontecem o tempo todo durante a leitura e ao percorrer uma tela (Rayner, 1998).',
  },
  {
    q: 'O que são sacadas expressas?',
    a: 'Em certas condições aparecem sacadas com latência muito curta, por volta de 100 ms, chamadas sacadas expressas (Fischer & Weber, 1993). Este exercício não mede a latência dos olhos, então não consegue identificá-las.',
  },
  {
    q: 'O exercício mede meus movimentos oculares?',
    a: 'Não. O navegador não sabe para onde você olha; ele registra apenas o momento e a posição do clique. O resultado inclui o salto do olhar, o movimento da mão, o atraso do mouse e a taxa de atualização da tela. Não é latência sacádica.',
  },
  {
    q: 'Ajuda em jogos de tiro como Valorant e CS2?',
    a: 'Checar cantos, olhar o minimapa e encontrar um adversário que aparece de repente lembram esta tarefa. Mas o desempenho no jogo depende também de mira, posicionamento e equipamento, então não há garantia de melhora.',
  },
  {
    q: 'A taxa de atualização do monitor afeta o resultado?',
    a: 'O intervalo entre dois quadros é 1000 dividido pela taxa de atualização: cerca de 16,7 ms em 60 Hz, 6,9 ms em 144 Hz e 4,2 ms em 240 Hz. Isso pode mudar levemente o momento em que o alvo aparece (Woods et al., 2015). O efeito na pontuação deste jogo não foi medido; compare sessões na mesma tela.',
  },
  {
    q: 'Com que frequência devo praticar?',
    a: 'Blocos curtos de 5 a 10 minutos com pausas são suficientes. Se os olhos cansarem ou ficarem secos, pare, pisque e olhe para longe. Treinar mais tempo não é necessariamente melhor.',
  },
  {
    q: 'É grátis? Onde ficam meus resultados?',
    a: 'Sim, é grátis, sem instalação e sem conta. Seu recorde fica no armazenamento local do navegador e não é enviado a um servidor por este exercício. Se você limpar os dados do navegador, o recorde some.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-08',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const saccadicGuide = {
  heading: 'Guia dos exercícios sacádicos',
  intro: [
    'Nestes exercícios sacádicos, os alvos aparecem um por vez em pontos diferentes da tela. Você leva o olhar até o alvo em um salto e clica. Esses saltos rápidos do olhar se chamam movimentos sacádicos e acontecem o tempo todo na leitura e ao percorrer uma imagem (Rayner, 1998).',
    'Durante a sacada o processamento visual fica reduzido, e quando o olhar cai ao lado do alvo surge uma pequena correção (Leigh & Zee, 2015). Por isso vale priorizar uma chegada precisa antes da velocidade.',
    'Limites da medição: o navegador não conhece a posição do seu olhar e registra apenas o momento e o local do clique. O resultado inclui movimento da mão, atraso do mouse e intervalo da tela (cerca de 16,7 ms em 60 Hz, 6,9 ms em 144 Hz, 4,2 ms em 240 Hz; Woods et al., 2015). Não é latência sacádica nem avaliação da saúde ocular.',
    'Pratique no mesmo aparelho, com a mesma distância e postura, e compare só as suas próprias sessões. Em caso de dor ou alteração na visão, procure um oftalmologista.',
  ],
  benchmarks: {
    title: 'Etapas de prática',
    headers: ['Etapa', 'Objetivo', 'Ponto de atenção'],
    rows: [
      ['Etapa 1', 'Não deixar alvo passar', 'Pegar o jeito de clicar com precisão'],
      ['Etapa 2', 'Levar o olhar em um salto', 'Olhar assim que o alvo aparece'],
      ['Etapa 3', 'Manter o ritmo de cliques', 'Tempo constante, sem afobação'],
      ['Etapa 4', 'Mais rápido com a mesma precisão', 'Menos ultrapassagens e correções'],
      ['Etapa 5', 'Sessões mais longas', 'Pausar antes do cansaço e comparar nas mesmas condições'],
    ],
    note: 'Esta tabela é uma orientação de prática da SkillDrills. Não traz normas de tempo de reação, estatísticas de usuários, percentis nem valores clínicos.',
  },
  techniques: {
    title: 'Dicas para saltos do olhar mais limpos',
    items: [
      { name: 'Cabeça parada, só os olhos', desc: 'Não gire a cabeça; deixe apenas os olhos saltarem. Uma postura fixa também deixa as sessões mais comparáveis.', tips: 'Confira de vez em quando se a cabeça não está acompanhando.' },
      { name: 'Olhar suave no centro', desc: 'Não fixe um ponto com força; deixe o olhar relaxado no centro da tela para notar o alvo novo mais rápido.', tips: 'Mantenha a tela inteira no campo de visão.' },
      { name: 'Chegar em um salto', desc: 'Se o olhar fica curto ou passa do alvo, é preciso corrigir. O objetivo é parar direto no centro do alvo.', tips: 'Precisão antes da pressa.' },
      { name: 'Descansar os olhos', desc: 'Concentrado na tela, você pisca menos e os olhos ressecam.', tips: 'Pisque de propósito entre as rodadas e olhe para longe.' },
    ],
  },
  steps: [
    'Sente-se a cerca de 50–70 cm, de frente para o centro da tela.',
    'Inicie o exercício e deixe o olhar no centro da tela.',
    'Quando um alvo aparecer, leve primeiro os olhos até ele.',
    'Clique no alvo (no celular, toque).',
    'No fim do tempo, confira precisão, reação média, nível máximo e combo máximo.',
  ],
  audience: 'Quem quer praticar saltos do olhar de forma lúdica, jogadores de FPS (Valorant, CS2) e fãs de esportes com bola.',
  faqs,
  sources: pickSources('rayner1998', 'fischer1993', 'leigh2015', 'woods2015'),
  related: [
    { href: '/pt/drills/reaction-speed', label: 'Hub Velocidade de Reação' },
    { href: '/pt/drills/visual/reaction-speed/light-reaction', label: 'Teste de Tempo de Reação' },
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
      <SaccadicGalleryWrapper copy={{ title: 'Exercícios Sacádicos Online: Treino do Olhar', subtitle: 'Saltos do Olhar · Aquisição Visual', caption: 'Mude o olhar rapidamente entre os alvos e clique em cada um com precisão.' }} />
      <DrillGuide guide={saccadicGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
