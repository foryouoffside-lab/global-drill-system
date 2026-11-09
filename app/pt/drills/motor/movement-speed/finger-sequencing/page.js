import FingerSequencingClient from '@/app/drills/motor/movement-speed/finger-sequencing/FingerSequencingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/pt/drills/motor/movement-speed/finger-sequencing';
const TITLE = 'Cliques em Sequência: Siga a Ordem dos Alvos | SkillDrills';
const DESCRIPTION = 'Cliques em sequência com o mouse: clique nos alvos na ordem certa seguindo a linha tracejada e evite as armadilhas. Treine precisão e ritmo grátis no navegador.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'cliques em sequência',
    'clicar na ordem certa',
    'sequência de alvos',
    'clique em ordem',
    'coordenação motora mouse',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/motor/movement-speed/finger-sequencing'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Treinamento Motor', item: 'https://skilldrills.online/pt/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Velocidade de Movimento', item: 'https://skilldrills.online/pt/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Cliques em Sequência', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'pt-BR',
  name: 'Cliques em Sequência',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description: DESCRIPTION,
  url: PAGE_URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'pt-BR',
  name: 'Cliques em Sequência',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requer HTML5 Canvas e JavaScript',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'pt-BR',
  name: 'Cliques em Sequência',
  url: PAGE_URL,
  description: 'Exercício de mouse: clicar em ordem nos alvos ligados por uma linha tracejada. A cada nível os alvos ficam menores, mais distantes e o tempo por cadeia diminui.',
  genre: ['Mouse Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como funcionam os cliques em sequência?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada rodada mostra uma cadeia de 3 alvos (níveis 1–2), 4 alvos (níveis 3–5) ou 5 alvos (a partir do nível 6). Uma linha tracejada roxa mostra a ordem e o alvo ativo brilha. Clique nos alvos nessa ordem com o mouse (ou toque na tela). Não há números nos alvos: siga a linha.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funcionam o tempo e os pontos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Você começa com 45 segundos. Cada alvo acertado na ordem dá +2 s (máximo de 60 s). Uma cadeia completa vale 150 pontos × multiplicador de sequência (até 3,0×) × bônus de nível. A partida termina quando o tempo zera.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que são os alvos vermelhos com “!”?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São armadilhas, que aparecem a partir do nível 6. Clicar nelas conta como erro: -1 s, sequência zerada e nova cadeia. Elas não ficam na linha tracejada, então basta ignorá-las.',
      },
    },
    {
      '@type': 'Question',
      name: 'Existe limite de tempo por cadeia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, quando a opção Timeout está ligada (padrão). No início cada cadeia tem cerca de 3,2 segundos, e o tempo diminui conforme o nível e a sequência sobem. Se acabar: -1 s, sequência zerada e nova cadeia.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que muda quando o nível sobe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O nível sobe 1 a cada 1.750 pontos, sem limite. Mais alvos por cadeia, alvos menores e mais distantes, e menos tempo por cadeia. Nos primeiros níveis, os próximos alvos aparecem menores e mais apagados como dica; isso some por volta do nível 10.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença para um teste de CPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Um teste de CPS só conta cliques no mesmo ponto. Aqui você move o mouse de alvo em alvo numa ordem fixa e precisa parar com precisão: trajeto e precisão contam mais que a velocidade de clique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como a precisão é calculada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É a proporção de alvos acertados na ordem certa sobre todas as tentativas (cliques, cliques em armadilhas e cadeias expiradas). A tela final mostra precisão, cadeias concluídas, nível máximo e combo máximo.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
  name: 'Como fazer o treino de cliques em sequência',
  description: 'Passo a passo para seguir a linha tracejada e acertar os alvos em ordem.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Ler a linha',
      text: 'Antes do primeiro clique, veja em que ordem a linha roxa liga os alvos.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Começar pelo alvo que brilha',
      text: 'Clique no alvo que brilha e siga a linha até o próximo.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Pular as armadilhas',
      text: 'Não clique nos alvos vermelhos com “!” (a partir do nível 6), só nos da linha.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Ver o resultado',
      text: 'Confira precisão, cadeias concluídas, nível máximo e combo máximo para definir a próxima meta.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('lashley1951', 'keele1968', 'fitts1954'),
  intro: {
    title: 'O que é o treino de cliques em sequência',
    paragraphs: [
      'No treino de cliques em sequência você clica nos alvos numa ordem definida, e não no mais próximo. O tempo entre dois alvos depende da distância e do tamanho (Fitts, 1954), e uma sequência fixa de movimentos pode ser planejada como um único plano motor (Lashley, 1951; Keele, 1968).',
      'A medição depende do timer do navegador e da taxa de atualização do monitor: compare seus resultados no mesmo aparelho e com as mesmas configurações de mouse.',
    ],
  },
  benchmark: {
    title: 'Faixas de prática',
    description: 'Faixas de referência definidas pela SkillDrills para a prática. Não são normas científicas, estatísticas de usuários nem percentis.',
    columns: ['Faixa', 'Nível alcançado', 'Precisão'],
    rows: [
      { tier: 'Faixa 1', level: 'Nível 12+', accuracy: '95% ou mais' },
      { tier: 'Faixa 2', level: 'Nível 9–11', accuracy: '90–94%' },
      { tier: 'Faixa 3', level: 'Nível 6–8', accuracy: '85–89%' },
      { tier: 'Faixa 4', level: 'Nível 3–5', accuracy: '75–84%' },
      { tier: 'Faixa 5', level: 'Nível 1–2', accuracy: 'menos de 75%' },
    ],
  },
  protocols: {
    title: 'Dicas de treino',
    description: 'Para evoluir com consistência.',
    items: [
      {
        title: 'Leia a linha primeiro',
        description: 'Planeje a cadeia inteira como um só movimento antes de clicar, em vez de procurar cada alvo.',
      },
      {
        title: 'Rápido na distância, preciso na chegada',
        description: 'Deslocamentos longos com o braço, a parada no alvo com punho e dedos. Os alvos encolhem com o nível.',
      },
      {
        title: 'Sem pressa',
        description: 'Cada erro custa 1 segundo e a sequência. Um ritmo constante e limpo rende mais pontos.',
      },
    ],
  },
  faqs: {
    title: 'Perguntas Frequentes (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const ptCopy = {
  title: 'Cliques em Sequência',
  subtitle: 'Clique nos alvos em ordem seguindo a linha tracejada',
  score: 'Pontos',
  timeLeft: 'Tempo restante',
  accuracy: 'Precisão',
  bestScore: 'Melhor pontuação',
  startButtonText: 'Começar',
  startSubtitle: 'Clique em ordem • começa com 45 s, +2 s por acerto',
  getReady: 'Prepare-se',
  rulesTitle: 'Como funciona e pontuação',
  rulesItems: [
    { num: '1', text: 'Alvo na ordem', highlight: '+2 s (máx. 60 s)', result: 'Cadeia: 150 pts × multi' },
    { num: '2', text: 'Multiplicador de sequência', highlight: 'até 3,0×', result: 'sobe a cada cadeia' },
    { num: '3', text: 'Nível', highlight: '+1 a cada 1.750 pts', result: 'mais alvos, menores' },
    { num: '4', text: 'Erro / armadilha / tempo esgotado', highlight: '-1 s', result: 'sequência zerada' }
  ],
  chainsCleared: 'Cadeias concluídas',
  peakLevel: 'Nível máximo',
  maxCombo: 'Combo máximo',
  playAgain: 'Jogar de novo',
  shareTitle: 'Compartilhar',
  exitTitle: 'Sair'
};

export default function PortugueseFingerSequencingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <FingerSequencingClient copy={ptCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
