import KeyboardRecognitionClient from '@/app/drills/motor/movement-speed/keyboard-recognition/KeyboardRecognitionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/pt/drills/motor/movement-speed/keyboard-recognition';
const TITLE = 'Teste de reação do teclado | Keybinds | SkillDrills';
const DESCRIPTION = 'Teste de reação do teclado grátis: aperte a tecla exibida antes do tempo acabar e ignore os sinais falsos. 60 s com tempo de reação, precisão e KPM.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'teste de reação teclado',
    'teste de tempo de reação teclado',
    'tempo de reação das teclas',
    'keybinds FPS',
    'teclas WASD treino',
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
    languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-recognition'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Treinamento Motor', item: 'https://skilldrills.online/pt/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Velocidade de Movimento', item: 'https://skilldrills.online/pt/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Teste de Reação do Teclado', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Computer_keyboard", "https://en.wikipedia.org/wiki/Reaction_time"],
  inLanguage: 'pt-BR',
  name: 'Teste de Reação do Teclado',
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
  name: 'Teste de Reação do Teclado',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador com JavaScript e teclado físico',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'pt-BR',
  name: 'Teste de Reação do Teclado',
  url: PAGE_URL,
  description: 'Jogo de teclas de 60 segundos: apertar as teclas exibidas (sozinhas, em sequências de 2 a 5 ou de memória) antes do tempo acabar e ignorar os sinais falsos.',
  genre: ['Keyboard Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop'],
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
      name: 'O que o teste de reação do teclado mede?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O tempo entre a tecla aparecer na tela e você apertá-la corretamente. A tela final mostra tempo médio de reação (ms), precisão, KPM (teclas por minuto), combo máximo e rank. É a sua reação que é medida, não a latência do teclado nem a velocidade de digitação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que tipos de sinal aparecem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teclas sozinhas, sequências de 2 a 3 teclas (5 no modo de sequências longas), um modo de memória que mostra 3 teclas por 1 segundo e depois esconde, e sinais falsos em que você não deve apertar nada. As teclas possíveis: A–Z, 0–9, Space, Shift, Ctrl, Alt, Tab, Enter, símbolos, F1–F6 e setas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona a pontuação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Acerto: 120 pontos × multiplicador de combo, ×1,4 em sequências e ×1,8 no modo de memória. Deixar um sinal falso passar sem apertar vale +200. Tecla errada, reagir a um sinal falso ou deixar o tempo acabar zera o combo. A partida dura sempre 60 segundos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funcionam a dificuldade e o tempo por sinal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No modo adaptativo (padrão) cada sinal começa com cerca de 1,8 segundo, encurta quando você acerta em sequência (até cerca de 0,8 s) e aumenta depois de erros. Níveis fixos: Easy 1,5×, Medium 1,0×, Hard 0,75× e Expert 0,55× do tempo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dá para treinar com as teclas do Valorant ou do Minecraft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Os presets de Valorant, CS2, Fortnite, Minecraft, League of Legends e Apex Legends usam só as teclas padrão de cada jogo. Não é uma ferramenta oficial desses jogos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Serve como teste de teclado ou teste de digitação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Ele não verifica se todas as teclas funcionam e não mede palavras por minuto. É um treino de reação nas teclas de jogo. As teclas são lidas pela posição física com rótulos do padrão americano, então alguns símbolos no ABNT2 ficam em outro lugar; letras e números batem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Funciona no celular?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Precisa de teclado físico. Aparelhos só com toque não conseguem iniciar; em tablets, conecte um teclado Bluetooth.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
  name: 'Como fazer o teste de reação do teclado',
  description: 'Reagir às teclas exibidas por 60 segundos e parar nos sinais falsos.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Escolher modo e preset',
      text: 'Escolha o modo, a dificuldade e, se quiser, um preset de jogo, com a mão esquerda na posição de sempre.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Olhar para a tela',
      text: 'Sem olhar o teclado, identifique a tecla no centro da tela.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Apertar ou segurar',
      text: 'Aperte os sinais verdadeiros antes do tempo acabar; num sinal falso, não aperte nada até ele sumir.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Ver o resultado',
      text: 'Depois de 60 segundos, confira tempo de reação, precisão, KPM e combo máximo.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('donders1868', 'hick1952', 'logan1984', 'sternberg1966'),
  intro: {
    title: 'O que é o teste de reação do teclado',
    paragraphs: [
      'O teste de reação do teclado pede que você escolha, entre muitas teclas, a que aparece na tela: uma tarefa de reação de escolha (Donders, 1868). Quanto mais teclas possíveis, mais lenta a reação (Hick, 1952); segurar o dedo num sinal falso treina a inibição de resposta (Logan, 1984).',
      'Os valores dependem do timer do navegador, da taxa de atualização do monitor e do teclado: compare seus resultados no mesmo aparelho.',
    ],
  },
  benchmark: {
    title: 'Ranks do exercício',
    description: 'O rank vem dos limites de pontos e precisão definidos no código do exercício. Não são normas científicas, estatísticas de usuários nem percentis.',
    columns: ['Rank', 'Pontos', 'Precisão'],
    rows: [
      { grade: 'S+', score: '3.500+', accuracy: '95%+' },
      { grade: 'S', score: '2.200+', accuracy: '90%+' },
      { grade: 'A', score: '1.400+', accuracy: '85%+' },
      { grade: 'B', score: '700+', accuracy: '80%+' },
      { grade: 'C', score: '300+', accuracy: '75%+' },
      { grade: 'D', score: '100+', accuracy: '65%+' },
    ],
  },
  protocols: {
    title: 'Dicas de treino',
    description: 'Menos erros, resultados melhores.',
    items: [
      {
        title: 'Pense em zonas',
        description: 'Guarde movimento (WASD), habilidades (Q, E, C, X) e a fileira de números (1–4) como zonas: você acha o dedo certo mais rápido.',
      },
      {
        title: 'Pare nos sinais falsos',
        description: 'Apertar antes de olhar quebra o combo. Primeiro identifique o tipo de sinal, depois aperte.',
      },
      {
        title: 'Digite sequências em bloco',
        description: 'Memorize uma sequência de 2 a 5 teclas como um só padrão e aperte de uma vez (Sternberg, 1966).',
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
  title: 'Teste de Reação do Teclado',
  subtitle: 'Aperte a tecla exibida: reação nas teclas e keybinds de jogo',
};

export default function PortugueseKeyboardRecognitionPage() {
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
      <KeyboardRecognitionClient copy={ptCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
    </>
  );
}
