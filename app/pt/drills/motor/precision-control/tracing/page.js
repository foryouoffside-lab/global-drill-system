import FineMotorClient from '@/app/drills/motor/precision-control/tracing/TracingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/tracing-2026-09-20.md
// ============================================================

export const metadata = {
  title: 'Teste de rastreamento do mouse | Seguir linha | SkillDrills',
  description: 'Teste de rastreamento do mouse grátis: mantenha o cursor por 45 segundos sobre uma onda cada vez mais rápida e treine precisão do traçado e controle motor fino.',
  keywords: [
    'teste de rastreamento do mouse', 'seguir linha com mouse', 'jogo de traçar com mouse',
    'teste de precisão de traçado', 'controle motor fino',
    'rastreamento do cursor', 'precisão do traçado', 'exercício de mira suave',
    'teste de fluidez motora mouse', 'jogo de seguir a linha', 'coordenação visomotora',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Teste de rastreamento do mouse | Seguir linha | SkillDrills',
    description: 'Teste de rastreamento do mouse grátis: mantenha o cursor por 45 segundos sobre uma onda cada vez mais rápida e treine precisão do traçado e controle motor fino.',
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Teste de rastreamento do mouse | Seguir linha | SkillDrills',
    description: 'Teste de rastreamento do mouse grátis: mantenha o cursor por 45 segundos sobre uma onda cada vez mais rápida e treine precisão do traçado e controle motor fino.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing',
    languages: getAlternateLanguages('/drills/motor/precision-control/tracing'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Treinamento Motor', item: 'https://skilldrills.online/pt/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Controle de Precisão', item: 'https://skilldrills.online/pt/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: 'Jogo de Traçado', item: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  inLanguage: 'pt-BR',
  name: 'Jogo de Traçado do Mouse – Teste de Precisão Motora',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description: 'Teste de rastreamento do mouse: mantenha o cursor sobre uma onda que rola pela tela. Os pontos só contam enquanto o cursor fica a até 22 pixels acima ou abaixo da linha.',
  url: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'pt-BR',
  name: 'Jogo de Rastreamento Contínuo Online',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador moderno com HTML5 Canvas e Pointer Lock API',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  url: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'pt-BR',
  name: 'Treino de Traçado e Fluidez de Cursor',
  url: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing',
  description: 'Jogo de precisão em que você mantém o cursor sobre uma onda em movimento por 45 segundos.',
  genre: ['Precision Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é este teste de rastreamento do mouse e como se pontua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Você mantém o cursor por 45 segundos sobre uma onda que corre da direita para a esquerda. Enquanto o cursor fica a até 22 pixels da linha (acima ou abaixo), ganha 1 ponto por quadro, +5 a cada 4 segundos sem interrupção e +10 ao voltar para a linha depois de sair dela.',
      },
    },
    {
      '@type': 'Question',
      name: 'Por que a onda se move continuamente em vez de esperar pelo usuário?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O movimento contínuo exige engajamento cinemático ininterrupto. Em tarefas estáticas, o usuário pode parar para reorganizar a pegada; aqui, a onda exige antecipação constante e microcorreções imediatas sem interrupções.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é a Integridade do Fluxo (Flow Integrity) e como é pontuada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Integridade do Fluxo (0 a 100%) começa em 100%. Sobe 15% por segundo enquanto o cursor está na linha (±22 px), ganha 10% a cada bônus de 4 segundos e cai 25% por segundo fora da linha. A nota final depende do valor no fim da sessão. Sair da linha não tira pontos já ganhos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como a velocidade e a amplitude aumentam durante os 45 segundos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A onda começa a 2,2 px por quadro e acelera de forma contínua até 3,8 px por quadro aos 45 segundos. A amplitude principal vai de 90 a 125 px e uma oscilação secundária vai de 8 a 32 px, deixando a curva mais alta e irregular.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais modelos científicos fundamentam o rastreamento contínuo de trajetórias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O exercício se baseia na Lei de Direção de Accot-Zhai (1997) e no modelo motor de dois componentes de Robert Woodworth (1899), exigindo controle ininterrupto em circuito fechado onde a visão ajusta o trajeto a cada 150–200 ms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como os movimentos de perseguição suave diferem dos movimentos sacádicos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Como demonstrado por Krauzlis (2004) e Rashbass (1961), a perseguição ocular suave acompanha a velocidade do alvo continuamente, enquanto as sacadas são saltos rápidos. Ao desviar da linha, o cérebro realiza uma sacada corretiva seguida de desaceleração suave para retomar o trajeto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como esse treino ajuda em jogos de tiro competitivo (FPS)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jogos com alto tempo para matar (TTK) exigem mira estável sobre alvos em movimento. Este exercício pratica um gesto parecido: deslize regular do antebraço e mudanças de direção. O quanto isso se transfere para o jogo varia de pessoa para pessoa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual sensibilidade e DPI são ideais para o jogo de traçado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sensibilidades médias a baixas (800 DPI com 25 a 45 cm/360°) oferecem maior controle físico e ativam o antebraço, reduzindo microtremores involuntários. Mantenha a taxa de varredura do mouse em 1000 Hz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como evitar tensão muscular e fadiga durante o treino contínuo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evite apertar o mouse com força excessiva contra o mousepad. Use uma pegada claw ou fingertip relaxada, mova o antebraço a partir do cotovelo para curvas amplas e reserve os dedos para microajustes.',
      },
    },
    {
      '@type': 'Question',
      name: 'É possível treinar com trackball ou tela de toque?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No computador o teste lê o movimento do mouse via Pointer Lock, então mouse e trackball funcionam. Em aparelhos só de toque, arraste o dedo. Canetas de mesa digitalizadora se comportam de forma diferente conforme o equipamento.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
  name: 'Como treinar traçado e rastreamento contínuo no mouse',
  description: 'Guia passo a passo para ficar mais tempo sobre a onda.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Posicionar o cursor na origem da onda',
      text: 'Após a contagem de 3 segundos, o ponteiro é travado (no toque, use o dedo) e fica a um quarto da largura da tela. Leve-o logo para a onda. Esc encerra.',
      url: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Acompanhar a velocidade e trajetória da curva',
      text: 'Deslize o mouse suavemente sobre o filamento enquanto ele percorre a tela, igualando sua velocidade.',
      url: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Suprimir microtremores e correções bruscas',
      text: 'Relaxe a mão e mantenha o olhar 20 pixels à frente para antecipar os picos da onda sem sair do canal.',
      url: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Analisar pontuação e consistência de fluxo',
      text: 'Ao fim dos 45 segundos, veja sua pontuação, a maior sequência de quadros na linha e a Integridade do Fluxo no fim da sessão.',
      url: 'https://skilldrills.online/pt/drills/motor/precision-control/tracing#step-4'
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'krauzlis2004', 'rashbass1961', 'woodworth1899', 'woods2015'),
  intro: {
    title: 'Como o rastreamento contínuo é mensurado',
    paragraphs: [
      'Este teste de rastreamento do mouse pede que você mantenha o cursor sobre uma onda que corre da direita para a esquerda por 45 segundos, ficando mais rápida e mais alta. Os pontos se acumulam quadro a quadro enquanto você está na linha.',
      'Precisão da medição e limites do sistema: A cronometragem utiliza a API performance.now() do navegador (resolução de ~1 ms por segurança). A exibição visual é quantizada pela frequência do monitor — ~16,7 ms a 60 Hz, ~6,9 ms a 144 Hz e ~4,1 ms a 240 Hz (Woods et al., 2015). A taxa de varredura do mouse adiciona ~8 ms a 125 Hz contra ~1 ms a 1000 Hz. Diferenças abaixo de 5 ms constituem ruído de medição. O SkillDrills não coleta dados externos.',
    ],
  },
  benchmark: {
    title: 'Teste de rastreamento do mouse: faixas de prática SkillDrills',
    description: 'Faixas de prática SkillDrills, não normas de pesquisa nem dados de usuários. Seguem a nota da tela de resultado (Integridade do Fluxo no fim da sessão e pontuação). A pontuação é 1 ponto por quadro: monitores com taxa maior somam mais, então compare no mesmo aparelho.',
    columns: ['Nota', 'Classificação', 'Fluxo no fim', 'Condição de pontos', 'Faixa'],
    rows: [
      { tier: 'S+', rank: 'Fluxo de grão-mestre', flow: '90% ou mais', score: '1.400 pontos ou mais', band: 'Faixa de prática SkillDrills' },
      { tier: 'S', rank: 'Fluxo máximo', flow: '80% ou mais', score: '-', band: 'Faixa de prática SkillDrills' },
      { tier: 'A', rank: 'Rastreamento travado', flow: '60% ou mais', score: '-', band: 'Faixa de prática SkillDrills' },
      { tier: 'B', rank: 'Rastreamento estável', flow: '35% ou mais', score: '-', band: 'Faixa de prática SkillDrills' },
      { tier: 'C', rank: 'Traçado concluído', flow: 'menos de 35%', score: '-', band: 'Faixa de prática SkillDrills' },
    ],
  },
  protocols: {
    title: 'Protocolos de Treino para Rastreamento Contínuo',
    description: 'Recomendações para acompanhar a onda com os olhos e estabilizar a mão.',
    items: [
      {
        title: 'Protocolo 1: Fixação Antecipada e Rastreamento Feedforward (Krauzlis 2004)',
        description: 'Mantenha a foveação visual cerca de 15 a 25 pixels à frente da onda e não exatamente sobre a mira. Essa antecipação permite ao córtex pré-motor calcular curvas de aceleração antes que as mudanças de inflexão ocorram.',
      },
      {
        title: 'Protocolo 2: Rastreamento em Modo Duplo de Rashbass (1961)',
        description: 'Ao sair da margem de 22 px, execute uma sacada rápida e relaxe a tensão muscular de volta ao modo de perseguição contínua para evitar solavancos que causam saída repetida.',
      },
      {
        title: 'Protocolo 3: Modulação de Curvatura de Accot-Zhai (Picos e Vales)',
        description: 'Conforme a Lei de Accot-Zhai (1997), cristas e vales exigem velocidades tangenciais menores do que trechos retos. Diminua ligeiramente o ritmo ao passar pelas curvas para evitar derrapagens.',
      },
      {
        title: 'Protocolo 4: Deslize de Antebraço e Controle de Fricção',
        description: 'Apoie o antebraço levemente sobre a superfície sem cravar o punho na mesa. Faça o pivô a partir do cotovelo para absorver as ondas verticais, deixando os dedos apenas para pequenos ajustes de 1–2 px.',
      },
    ],
  },
  faqs: {
    title: 'Perguntas Frequentes sobre Traçado de Mouse e Rastreamento de Ondas',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const ptCopy = {
  title: "Teste de Rastreamento do Mouse",
  subtitle: "Rastreamento contínuo • 45 s",
  startButtonText: "Iniciar Treino",
  startBtn: "Iniciar Treino",
  trainAgain: "Treinar Novamente",
  shareTitle: "Compartilhar Pontuação",
  exitTitle: "Sair",
  statFlowScore: "Pontos de Fluxo",
  statTimeLeft: "Tempo Restante",
  statFlowIntegrity: "Integridade do Fluxo",
  statBestScore: "Melhor Pontuação",
  maxStreakLabel: "Sequência Máxima de Frames",
  peakFlowLabel: "Fluxo no Fim da Sessão",
  bestScoreLabel: "Recorde Pessoal",
  rulesTitle: "Instruções do Treino e Sistema de Pontuação",
  rulesItems: [
    { num: "1", text: "Traçar a Trajetória", highlight: "Onda Esmeralda", result: "+1 PT / frame dentro da linha" },
    { num: "2", text: "Velocidade Progressiva", highlight: "Onda Dinâmica", result: "2.2 → 3.8 px/f em 45s" },
    { num: "3", text: "Integridade de Fluxo", highlight: "Super Fluxo", result: "4s seguidos dão +5 Bônus" },
    { num: "4", text: "Saída da linha", highlight: "Tolerância ±22 px", result: "Sequência zera, fluxo cai" }
  ],
};

export default function PortugueseTracingPage() {
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
      <FineMotorClient copy={ptCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
