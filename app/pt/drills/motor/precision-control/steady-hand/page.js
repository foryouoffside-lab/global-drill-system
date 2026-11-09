import SteadyHandClient from '@/app/drills/motor/precision-control/steady-hand/SteadyHandClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/steady-hand-2026-09-20.md
// ============================================================

export const metadata = {
  title: 'Jogo da Mão Firme: Labirinto com o Mouse | SkillDrills',
  description: 'Jogo da mão firme online: leve o cursor pela linha luminosa até a chegada sem encostar na borda. Cada volta em sequência deixa o trajeto mais sinuoso. Grátis.',
  keywords: [
    'jogo da mão firme', 'labirinto com o mouse', 'mão firme no mouse',
    'sem encostar na parede', 'mão firme', 'controle motor fino',
    'jogo de labirinto mouse', 'controle do cursor', 'estabilidade da mão',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Jogo da Mão Firme: Labirinto com o Mouse | SkillDrills',
    description: 'Jogo da mão firme online: leve o cursor pela linha luminosa até a chegada sem encostar na borda. Cada volta em sequência deixa o trajeto mais sinuoso. Grátis.',
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Jogo da Mão Firme: Labirinto com o Mouse | SkillDrills',
    description: 'Jogo da mão firme online: leve o cursor pela linha luminosa até a chegada sem encostar na borda. Cada volta em sequência deixa o trajeto mais sinuoso. Grátis.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand',
    languages: getAlternateLanguages('/drills/motor/precision-control/steady-hand'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Treinamento Motor', item: 'https://skilldrills.online/pt/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Controle de Precisão', item: 'https://skilldrills.online/pt/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: 'Jogo da Mão Firme', item: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'pt-BR',
  name: 'Jogo da Mão Firme – Labirinto com o Mouse',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description: 'Jogo da mão firme gratuito para navegador. Desviar mais de 2,5 pixels da linha central manda o cursor de volta ao início, e cada volta em sequência deixa o próximo trajeto mais sinuoso.',
  url: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'pt-BR',
  name: 'Jogo da Mão Firme Online',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador moderno com HTML5 Canvas e Pointer Lock API',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  url: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'pt-BR',
  name: 'Jogo da Mão Firme e Precisão Motora',
  url: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand',
  description: 'Desafio interativo de controle de cursor sobre uma linha sinuosa, inspirado na Lei de Accot-Zhai.',
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
      name: 'O que é o Jogo da Mão Firme e o que ele treina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Jogo da Mão Firme você leva o cursor da área de largada à esquerda até a área de chegada à direita seguindo uma linha luminosa sinuosa, sem sair dela. Não é teste de reflexo: treina o controle lento e estável do mouse com correção visual contínua. A pontuação é o número de voltas concluídas antes de o cronômetro de 45 segundos zerar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual lei científica rege o movimento do mouse em corredores estreitos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O movimento em túneis delimitados obedece à Lei de Direção de Accot-Zhai (1997), uma extensão da Lei de Fitts para trajetórias contínuas. A lei estabelece que o tempo de condução é proporcional à integral do comprimento do trajeto dividido pela largura da pista: corredores mais estreitos exigem velocidades menores para evitar colisões.',
      },
    },
    {
      '@type': 'Question',
      name: 'Por que o cursor retorna ao início ao encostar na borda da pista?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cada quadro o motor calcula a distância entre o cursor e a linha central. Entre as áreas de largada e chegada, um desvio maior que 2,5 pixels conta como toque na borda: o cursor volta ao início, os erros sobem 1 e a sequência zera. O cronômetro não para.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como a dificuldade aumenta a cada volta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tolerância (±2,5 pixels em torno da linha) nunca muda. O que muda é o traçado: a cada volta concluída em sequência, o próximo trajeto ganha mais segmentos (de 15 até 120) e oscilações verticais maiores. Um toque zera a sequência e o trajeto seguinte volta a ser suave. Cada volta concluída reinicia o cronômetro em 45 segundos.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que causa o tremor nas mãos durante o manuseio fino do mouse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O tremor fisiológico normal (8–12 Hz) resulta de disparos síncronos de unidades motoras e ressonância biomecânica dos membros. Tensão excessiva na pegada do mouse (co-contração de músculos agonistas e antagonistas), estresse e cafeína amplificam esse tremor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais são a pegada e o DPI ideais para o jogo da mão firme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recomenda-se uma pegada fingertip ou claw relaxada, combinando o deslize suave do antebraço com microajustes nos dedos. Configurações de DPI mais baixas (400 a 800 DPI) filtram o jitter natural da mão muito melhor do que sensibilidades ultrarrápidas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como o modelo de Woodworth (1899) se aplica ao seguimento de caminhos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robert S. Woodworth demonstrou que movimentos direcionados combinam um impulso balístico inicial com uma fase de controle contínuo por feedback visual (Current Control). No jogo da mão firme, esse controle contínuo em circuito fechado atua corrigindo microdesvios antes do choque com a parede.',
      },
    },
    {
      '@type': 'Question',
      name: 'O treino de mão firme ajuda jogadores de FPS e desenhistas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O movimento se parece com o tracking em jogos de tiro e com o traço na ilustração digital, em que o ponteiro precisa ficar numa trajetória estreita. O ganho varia de pessoa para pessoa, e o jogo não é um exame médico de tremor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como evitar fadiga muscular e cãibras durante o exercício?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mantenha o cotovelo apoiado a cerca de 90 graus na mesa sem pressionar o mouse excessivamente para baixo. Solte o ar conscientemente antes de curvas fechadas para relaxar o ombro e faça pausas de 60 segundos.',
      },
    },
    {
      '@type': 'Question',
      name: 'O jogo funciona com trackball ou tela de toque?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No computador o jogo lê o movimento do mouse via Pointer Lock, então mouse e trackball funcionam. Em aparelhos só de toque, arraste o dedo. Canetas de mesa digitalizadora se comportam de forma diferente conforme o equipamento. Compare resultados no mesmo aparelho.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
  name: 'Como treinar firmeza manual e precisão no mouse',
  description: 'Guia passo a passo para conduzir o cursor por trajetos cada vez mais sinuosos.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      url: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand#step-1',
      name: 'Posicionar cursor na área de largada',
      text: 'Clique em „Iniciar Treino“. Após a contagem de 3 segundos, o cursor fica na área verde à esquerda e o cronômetro de 45 segundos começa. No PC o ponteiro é travado (Pointer Lock); Esc encerra.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      url: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand#step-2',
      name: 'Manter velocidade constante e suave',
      text: 'Deslize com suavidade pela linha verde luminosa, equilibrando avanço com controle para não estourar o tempo.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      url: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand#step-3',
      name: 'Antecipar curvas fechadas com desaceleração',
      text: 'Reduza a velocidade em cerca de 40% ao se aproximar de cotovelos e olhe de 20 a 30 pixels à frente do cursor para antecipar o feedback visual.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      url: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand#step-4',
      name: 'Atingir a chegada para a próxima volta',
      text: 'Entre na zona verde à direita para fechar a volta. O cronômetro volta a 45 segundos e, quanto maior a sequência, mais sinuoso fica o próximo trajeto.',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'woodworth1899', 'fitts1954', 'woods2015'),
  intro: {
    title: 'Como a firmeza da mão e a precisão são medidas',
    paragraphs: [
      'Precisão da medição e limites do sistema: A cronometragem utiliza a API performance.now() do navegador (arredondada para ~1 ms por segurança). A renderização gráfica é sincronizada com a taxa de atualização do monitor — ~16,7 ms a 60 Hz, ~6,9 ms a 144 Hz e ~4,1 ms a 240 Hz (Woods et al., 2015). A taxa de varredura do mouse adiciona ~8 ms a 125 Hz e ~1 ms a 1000 Hz. Diferenças abaixo de 5 ms são ruído técnico. O SkillDrills armazena seus dados apenas localmente no navegador.',
    ],
  },
  benchmark: {
    title: 'Jogo da Mão Firme: faixas de prática SkillDrills',
    description: 'Faixas de prática SkillDrills para comparar suas próprias sessões; não são normas de pesquisa nem dados de usuários. Seguem a nota da tela de resultado: voltas concluídas e toques na borda em uma sessão.',
    columns: ['Nota', 'Classificação', 'Voltas', 'Toques', 'Faixa'],
    rows: [
      { tier: 'S+', rank: 'Estabilidade de grão-mestre', stat: '8+ voltas', errors: '0', band: 'Faixa de prática SkillDrills' },
      { tier: 'S', rank: 'Condução de mestre', stat: '6+ voltas', errors: 'até 1', band: 'Faixa de prática SkillDrills' },
      { tier: 'A', rank: 'Controle preciso', stat: '4+ voltas', errors: 'até 2', band: 'Faixa de prática SkillDrills' },
      { tier: 'B', rank: 'Boa firmeza', stat: '2+ voltas', errors: 'sem limite', band: 'Faixa de prática SkillDrills' },
      { tier: 'C', rank: 'Controle básico', stat: 'menos de 2 voltas', errors: 'sem limite', band: 'Faixa de prática SkillDrills' },
    ],
  },
  protocols: {
    title: 'Protocolos de Treino para Estabilidade e Firmeza',
    description: 'Instruções práticas para um movimento mais calmo e trajetórias sinuosas no mouse.',
    items: [
      {
        title: 'Protocolo 1: Ritmo de Velocidade por Accot-Zhai (Controle em Túneis)',
        description: 'Conforme a Lei de Accot-Zhai (1997), o tempo para atravessar um túnel cresce com o comprimento e cai com a largura. Acelere nos trechos suaves para poupar tempo e reduza bem a velocidade antes das quebras bruscas do trajeto.',
      },
      {
        title: 'Protocolo 2: Antecipação Visual de Woodworth (Feedforward)',
        description: 'Fixe os olhos cerca de 20 a 30 pixels à frente do ponteiro e não sobre ele. Essa antecipação permite ao córtex motor compensar os ~150 ms de atraso do feedback visual e corrigir desvios antes da colisão.',
      },
      {
        title: 'Protocolo 3: Damping de Tremor Fisiológico (8–12 Hz) e Desacoplamento',
        description: 'Execute curvas amplas com o antebraço e use os dedos apenas para pequenos retoques. Aperto excessivo no mouse causa co-contração muscular e agrava o tremor natural.',
      },
      {
        title: 'Protocolo 4: Abordagem pelo Ápice da Curva',
        description: 'Quando a sequência cresce e o trajeto fica cheio de zigue-zagues, prefira o centro da linha à velocidade. Mirar levemente o lado de dentro da curva reduz a deriva do cursor para fora.',
      },
    ],
  },
  faqs: {
    title: 'Perguntas Frequentes sobre o Jogo da Mão Firme e Precisão no Mouse',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const ptCopy = {
  h1Keyword: 'Jogo da Mão Firme',
  h1Suffix: ' (Labirinto com o Mouse)',
  subtitle: 'Leve o cursor pela linha luminosa até a chegada sem sair dela',
  caption: 'O jogo da mão firme treina a estabilidade e a precisão motora fina: guie o cursor por uma linha luminosa sem sair dela. Fundamentado na Lei de Accot-Zhai (1997) e no controle motor em circuito fechado de Woodworth (1899).',
  statLaps: 'Voltas',
  statTime: 'Tempo Restante',
  statStreak: 'Sequência',
  statBest: 'Recorde',
  pausedTitle: 'Pausado',
  pausedPrompt: 'Clique na tela para fixar o cursor e continuar.',
  startTitle: 'Circuito da Mão Firme',
  startSubtitle: 'Mão firme e precisão do caminho • 45 s',
  startBtn: 'Iniciar Treino',
  countdownSubtitle: 'PREPARE-SE',
  newBest: 'NOVO RECORDE',
  errorsLabel: 'Toques na Borda',
  maxStreakLabel: 'Maior Sequência',
  difficultyLabel: 'Nível Alcançado',
  trainAgain: 'Tentar Novamente',
  shareTitle: 'Compartilhar Pontuação',
  exitTitle: 'Sair e Voltar',
  rulesTitle: 'Instruções e Regras de Pontuação',
  rulesItems: [
    { num: '1', text: 'Siga a linha esmeralda', highlight: 'fluorescente com exatidão', result: 'Chegar ao fim reseta o tempo para 45s' },
    { num: '2', text: 'Volta completa', highlight: 'Dificuldade progressiva', result: 'Mais quebras e oscilação' },
    { num: '3', text: 'Toque na borda', highlight: 'Retorno ao início', result: 'Erro +1, sequência zera' },
    { num: '4', text: 'Mouse (Pointer Lock)', highlight: 'Toque suportado', result: 'Esc encerra' },
  ],
  rule1Text: 'Siga a linha esmeralda',
  rule1Highlight: 'fluorescente com exatidão',
  rule1Result: 'Chegar ao fim reseta o tempo para 45s',
  rule2Text: 'Volta completa',
  rule2Highlight: 'Dificuldade progressiva',
  rule2Result: 'Mais quebras e oscilação',
  rule3Text: 'Toque na borda',
  rule3Highlight: 'Retorno ao início',
  rule3Result: 'Erro +1, sequência zera',
  rule4Text: 'Mouse (Pointer Lock)',
  rule4Highlight: 'Toque suportado',
  rule4Result: 'Esc encerra',
  aboutTitle: 'Sobre o Jogo da Mão Firme',
  aboutHeading: 'Rastreamento de Trajetória e Redução do Tremor Manual',
  aboutP1: 'O Jogo da Mão Firme é uma ferramenta especializada para aperfeiçoar a coordenação olho-mão, o controle motor fino dos dedos e a estabilidade do cursor. Seguir uma linha estreita que fica mais sinuosa a cada sequência exige pequenas correções do punho e do antebraço.',
  aboutP2: 'Segundo a Lei de Direção de Accot & Zhai (1997), o tempo de condução cresce quando o caminho fica mais estreito e mais longo. Aqui a tolerância fica fixa em ±2,5 px, mas o trajeto ganha zigue-zagues a cada sequência e exige feedback visual contínuo (Woodworth, 1899).',
  aboutCard1Title: 'Público-alvo',
  aboutCard1Text: 'Gamers de FPS/MOBA, ilustradores digitais e quem quer treinar a estabilidade do ponteiro.',
  aboutCard2Title: 'Benefícios Motores',
  aboutCard2Text: 'Coordenação motora fina, firmeza de mão, controle de velocidade em curvas e consciência da fadiga muscular.',
  aboutCard3Title: 'Trajeto cada vez mais sinuoso',
  aboutCard3Text: 'A tolerância (±2,5 px) não muda; cada volta em sequência adiciona quebras e oscilação ao próximo trajeto.',
  gradeLabels: {
    'S+': 'Firmeza Excelente',
    'S': 'Controle Muito Bom',
    'A': 'Mira Precisa',
    'B': 'Boa Estabilidade',
    'C': 'Controle Básico',
  },
  shareDrillName: 'Jogo da Mão Firme',
  shareUrl: 'https://skilldrills.online/pt/drills/motor/precision-control/steady-hand',
  shareTextTemplate: '🖐️ Completei {laps} voltas no {drillName} com precisão de {acc}! Experimente de graça no skilldrills.online!',
  copiedAlert: 'Cartão de pontuação copiado!',
};

export default function PortugueseSteadyHandPage() {
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
      <SteadyHandClient copy={ptCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
