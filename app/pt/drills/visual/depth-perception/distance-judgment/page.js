import DistanceJudgmentClient from '@/app/drills/visual/depth-perception/distance-judgment/DistanceJudgmentClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Treino de Noção de Distância | Percepção de Profundidade',
  description: 'Treino grátis de noção de distância e percepção de profundidade: clique quando a esfera encaixar no anel. Não é teste de estereopsia nem exame de visão.',
  keywords: [
    'treino de noção de distância',
    'teste de percepção de profundidade',
    'treino de percepção de profundidade',
    'noção de distância',
    'teste de percepção de profundidade online',
    'estimar distância',
    'tempo até o contato',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Treino de Noção de Distância | Percepção de Profundidade',
    description: 'Treino grátis de noção de distância e percepção de profundidade: clique quando a esfera encaixar no anel. Não é teste de estereopsia nem exame de visão.',
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Treino de Noção de Distância | Percepção de Profundidade',
    description: 'Treino grátis de noção de distância e percepção de profundidade: clique quando a esfera encaixar no anel. Não é teste de estereopsia nem exame de visão.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment',
    languages: getAlternateLanguages('/drills/visual/depth-perception/distance-judgment'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Treinamento Visual', item: 'https://skilldrills.online/pt/drills/visual' },
    { '@type': 'ListItem', position: 3, name: 'Percepção de Profundidade', item: 'https://skilldrills.online/pt/drills/visual/depth-perception' },
    { '@type': 'ListItem', position: 4, name: 'Noção de Distância', item: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Depth_perception"],
  name: 'Treino de Noção de Distância e Percepção de Profundidade',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description: 'Exercício gratuito no navegador: clique quando a esfera que se aproxima encaixar no anel. Mede o desvio em porcentagem; não é exame de visão.',
  url: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Treino de noção de distância online',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador moderno com suporte a HTML5 Canvas e Pointer Events',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  url: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Treino de Interceptação Visual em Profundidade',
  url: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment',
  description: 'Exercício de timing: clique quando a esfera que cresce na tela atinge a profundidade do anel.',
  genre: ['Precision Game', 'Visual Training', 'Esports'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como treinar a percepção de profundidade e o cálculo de distâncias',
  description: 'Passo a passo para sincronizar a expansão óptica da imagem com o momento de interceptação.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Fixar o anel de referência no túnel',
      text: 'Mantenha o foco visual no anel de profundidade estacionário no centro do túnel.',
      url: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Acompanhar a expansão do alvo',
      text: 'Observe a esfera enquanto ela se aproxima e cresce na tela.',
      url: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Clicar na coincidência exata',
      text: 'Clique ou toque na tela quando a esfera preencher o anel alvo.',
      url: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Conferir o erro percentual de profundidade',
      text: 'Examine o desvio percentual obtido e refine a antecipação para as velocidades maiores.',
      url: 'https://skilldrills.online/pt/drills/visual/depth-perception/distance-judgment#step-4'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é o teste de percepção de profundidade e o que ele avalia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É um treino de noção de distância na tela: uma esfera cresce como se viesse na sua direção e você clica quando ela encaixa no anel. O jogo mede o desvio em porcentagem. Não é teste de estereopsia nem exame de visão.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como ele se compara ao teste de varetas de Howard-Dolman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O teste de Howard-Dolman (1919) usa varetas físicas para medir a estereopsia binocular pura. Como monitores planos não produzem disparidade binocular real, este exercício usa apenas a ampliação da imagem (Lee, 1976) e não substitui esse aparelho.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é a variável Tau e o tempo até o contato (TTC)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'David Lee (1976) demonstrou que o sistema visual calcula o tempo até a colisão dividindo o tamanho aparente do objeto por sua taxa de expansão, dispensando o conhecimento prévio de seu tamanho real.',
      },
    },
    {
      '@type': 'Question',
      name: 'Este treino serve como exame de visão ou de habilitação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. É um jogo de navegador sem valor médico ou legal. Não substitui exame oftalmológico nem avaliação para a CNH.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pessoas com boa acuidade visual podem falhar no teste de profundidade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, porque o jogo mede principalmente o timing do clique a partir da ampliação da esfera, não a nitidez da visão. Um resultado fraco aqui não indica problema de visão.',
      },
    },
    {
      '@type': 'Question',
      name: 'A noção de distância pode ser aprimorada com treino?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode melhorar sua pontuação neste exercício com a prática, mas não há garantia de ganho fora da tela. Dificuldades de visão devem ser avaliadas por um profissional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como é calculada a margem de erro na pontuação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O jogo compara a profundidade da esfera no momento do clique com a do anel, em porcentagem do túnel. Até 7 % de desvio: +150 pontos; até 16 %: +100 pontos. Essas margens caem para 4 % e 10 % nos níveis altos. A cada 750 pontos você sobe de nível, e errar não tira pontos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dá para jogar no celular ou com o teclado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim no celular: toque na tela. No computador, clique com o mouse. O teclado não é usado para jogar.',
      },
    },
    {
      '@type': 'Question',
      name: 'A taxa de atualização do monitor afeta a precisão?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode afetar. A 60 Hz a tela atualiza a cada 16,7 ms; a 144 Hz, a cada 6,9 ms (Woods et al., 2015). Compare seus resultados sempre no mesmo aparelho.',
      },
    },
    {
      '@type': 'Question',
      name: 'Os resultados são salvos de forma privada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Todas as pontuações e históricos ficam armazenados exclusivamente no seu navegador (LocalStorage), sem envio de dados a servidores remotos.',
      },
    },
  ],
};

const distanceGuidePt = {
  heading: 'Treino de noção de distância e percepção de profundidade',
  intro: [
    'Este treino de noção de distância mostra uma esfera que cresce dentro de um túnel, como se viesse na sua direção. Você clica quando ela encaixa no anel fixo e o jogo mede o desvio em porcentagem. Trabalha a percepção de profundidade na tela com base na ampliação da imagem: não é teste de estereopsia nem exame de visão.',
    'Fora da tela, a percepção de profundidade combina vários indícios: disparidade binocular, perspectiva, tamanho relativo e ampliação da imagem. O aparelho de Howard-Dolman (Howard, 1919) estuda a disparidade com varetas reais. Aqui você usa só o indício de ampliação descrito por Lee (1976) e Regan e Beverley (1978), que permite estimar o tempo até o contato.',
    'Uma sessão dura 45 segundos e o anel muda de profundidade a cada tentativa. Até 7 % de desvio: +150 pontos; até 16 %: +100 pontos. A cada 750 pontos você sobe de nível: a esfera chega mais rápido e as margens caem até 4 % e 10 %. Errar não tira pontos.',
    'A taxa de atualização da tela e a latência de entrada afetam o momento do clique (Woods et al., 2015): compare resultados no mesmo aparelho. Seus recordes ficam só no armazenamento local (LocalStorage) do navegador.'
  ],
  benchmarks: {
    title: 'Faixas de prática (SkillDrills)',
    headers: ['Faixa', 'Desvio típico', 'Leitura'],
    rows: [
      ['Faixa 1', 'Acima de 25 %', 'Cliques bem antes do encaixe.'],
      ['Faixa 2', '16 – 25 %', 'Fixe a borda do anel e espere.'],
      ['Faixa 3', '7 – 16 %', 'Tentativas na zona de +100 pontos.'],
      ['Faixa 4', '4 – 7 %', 'O timing se mantém com a velocidade maior.'],
      ['Faixa 5', 'Abaixo de 4 %', 'Manter essa precisão a sessão inteira.'],
    ],
    note: 'Faixas de prática do SkillDrills: não são estatística populacional, percentil nem exame de visão.',
  },
  techniques: {
    title: 'Como treinar a noção de distância com este exercício',
    items: [
      { name: 'Olhe para as bordas', desc: 'Observe a velocidade com que as bordas da esfera se abrem em relação ao anel, não só o centro (Lee, 1976).' },
      { name: 'Segure o clique precoce', desc: 'Quando a velocidade subir, espere o encaixe completo antes de clicar.' },
      { name: 'Olhar fixo no anel', desc: 'Mantenha a visão no anel alvo e deixe a esfera chegar até ele.' },
      { name: 'Pisque entre tentativas', desc: 'Pisque entre as tentativas para manter a visão confortável.' },
    ],
  },
  steps: [
    'Clique em "Iniciar Teste" para começar a sessão de 45 segundos.',
    'Mantenha o olhar fixado estavelmente sobre o anel ciano de referência localizado no plano médio.',
    'Acompanhe a esfera que surge no fundo do túnel e cresce em sua direção.',
    'Clique com o mouse ou toque na tela quando a esfera preencher o anel alvo.',
    'Veja o desvio (até 7 %: +150 PTS; até 16 %: +100 PTS) e ajuste o timing à velocidade crescente.'
  ],
  audience: 'Jogadores e curiosos que querem praticar noção de distância e timing de clique com um alvo que se aproxima na tela.',
  faqs: {
    title: 'Perguntas Frequentes sobre Percepção de Profundidade e Distância',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
  sources: pickSources('howard1919', 'lee1976', 'regan1978', 'julesz1971', 'woods2015'),
  related: [
    { href: "/pt/drills/visual/tracking-accuracy/moving-target", label: "Interceptação de Alvo Móvel" },
    { href: "/pt/drills/visual/reaction-speed/light-reaction", label: "Teste de Reação à Luz" },
    { href: "/pt/drills/visual/tracking-accuracy/multiple-targets", label: "Rastreamento de Múltiplos Objetos" },
    { href: "/pt/drills/visual/tracking-accuracy/pursuit-tracker", label: "Rastreador de Perseguição Ocular" },
    { href: "/pt/drills/visual/reaction-speed/go/no-go", label: "Controle de Impulso Go / No-Go" },
    { href: "/pt/drills/visual/visual-recognition/entropic-grid", label: "Varredura em Grade Entrópica" }
  ]
};

const copyPt = {
  title: 'Treino de Noção de Distância',
  subtitle: 'Percepção de profundidade na tela',
  caption: 'A percepção de profundidade permite estimar distâncias e posições espaciais. Em telas planas, a taxa de expansão óptica (Lee, 1976; Regan & Beverley, 1978) permite estimar o tempo até o contato (TTC) sem depender do conhecimento prévio do tamanho real do objeto.',
  statScore: 'Pontos',
  statTime: 'Tempo',
  statLevel: 'Nível',
  statBestScore: 'Recorde',
  startTitle: 'Noção de Distância',
  startSubtitle: 'Treine distância e timing com um alvo em movimento',
  startBtn: 'Iniciar Teste',
  getReady: 'PREPARE-SE',
  newBest: 'NOVO RECORDE',
  statPoints: 'Pontos',
  statAccuracy: 'Precisão',
  statPeakLevel: 'Nível Máximo',
  statIntercepts: 'Acertos',
  playAgain: 'Jogar Novamente',
  shareScore: 'Compartilhar Pontuação',
  returnOptions: 'Voltar',
  rulesTitle: 'Regras e Critérios de Pontuação',
  rule1Text: 'Interceptação Perfeita',
  rule1Highlight: '+150 PTS',
  rule1Result: 'Desvio ≤ 7 % (4 % nos níveis altos)',
  rule2Text: 'Interceptação Próxima',
  rule2Highlight: '+100 PTS',
  rule2Result: 'Desvio ≤ 16 % (10 % nos níveis altos)',
  rule3Text: 'Velocidade Progressiva',
  rule3Highlight: 'Mais Rápido',
  rule3Result: 'Alvo se aproxima mais depressa',
  rule4Text: 'Erro / Tempo Esgotado',
  rule4Highlight: 'Sem Penalidade',
  rule4Result: 'Novo alvo surge sem perda de pontos',
  aboutTitle: 'Sobre o treino de noção de distância',
  overviewTitle: 'O que este treino mede?',
  overviewLead: 'Mede o quanto seu clique se aproxima do encaixe entre a esfera que cresce e o anel.',
  overviewBody: 'Com a repetição, você tende a melhorar o timing nesta tarefa específica; não há garantia de efeito fora da tela.',
  aboutCards: [
    { iconBg: 'bg-blue-600', title: 'Público Indicado', text: 'Jogadores e quem quer praticar a estimativa de distância na tela.' },
    { iconBg: 'bg-cyan-600', title: 'Habilidades Treinadas', text: 'Expansão óptica, cálculo de Time-to-Contact, antecipação visual e timing do clique.' },
    { iconBg: 'bg-purple-600', title: 'Dica', text: 'Fixe os olhos na borda do anel e dispare apenas quando o contorno da esfera coincidir por completo.' }
  ]
};

export default function PortugueseDistanceJudgmentPage() {
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
      <DistanceJudgmentClient copy={copyPt} />
      <DrillGuide guide={distanceGuidePt} />
      <RelatedDrills currentCategory="visual" currentHref="/drills/visual/depth-perception/distance-judgment" locale="pt" />
    </>
  );
}
