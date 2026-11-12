import StabilityChallengeClient from '@/app/drills/physical/balance-training/stability-challenge/StabilityChallengeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/physical/balance-training/stability-challenge';
const title = 'Mira Tremendo? Treino de Firmeza do Mouse | SkillDrills';
const description = 'Mira tremendo? Um vento muda de direção e empurra o retículo para fora do centro. Corrija com o mouse e segure a mira estável no anel por 45 segundos. Grátis.';

export const metadata = {
  title,
  description,
  keywords: ['mira tremendo', 'firmeza da mira', 'segurar a mira estável', 'estabilidade do cursor', 'jogo de estabilidade do mouse'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/balance-training/stability-challenge') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'pt_BR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Início', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Drills Físicos', item: 'https://skilldrills.online/pt/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Treino de Firmeza do Mouse', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Treino de Firmeza do Mouse',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador com HTML5 Canvas e Pointer Lock, mouse',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  inLanguage: 'pt-BR',
  dateModified: '2026-11-10',
};

const faqs = [
  {
    q: 'O que é este treino de firmeza do mouse?',
    a: 'No centro da tela há um anel seguro. Uma força parecida com vento empurra o retículo para fora o tempo todo, e você corrige com o mouse para manter a mira dentro do anel por 45 segundos. É um drill de estabilidade do cursor.',
  },
  {
    q: 'Como os pontos são calculados?',
    a: 'Enquanto o retículo está dentro do anel, o combo sobe 1 a cada 0,15 segundo e você ganha 15 pontos × multiplicador. O multiplicador começa em 1,1x no combo 3 e chega ao máximo de 3,0x no combo 50. Não é preciso clicar.',
  },
  {
    q: 'O que acontece se a mira sair do anel?',
    a: 'O combo volta a 0 e aparece um flash vermelho (dá para desligar pelo botão na tela). Pontos e tempo não são descontados. Ao voltar para o anel, você recomeça o combo.',
  },
  {
    q: 'Como a dificuldade aumenta?',
    a: 'O nível sobe a cada 250 pontos e também em sequências longas dentro do anel, sem limite. O anel encolhe de 45 px até no mínimo 16 px, e a força do vento começa em 250 e continua crescendo (850 no nível 15).',
  },
  {
    q: 'Este treino corrige mira tremendo no jogo ou tremor na mão?',
    a: 'Não. Mira tremendo em jogos costuma vir de sensibilidade, DPI, configuração ou hardware, e isto não ajusta nada disso. Também não mede nem diagnostica tremor, equilíbrio ou saúde. É um jogo para praticar correções pequenas e contínuas com o mouse.',
  },
  {
    q: 'Como a nota é definida?',
    a: 'A pontuação final é comparada com uma referência de 17.000 pontos do SkillDrills. Aproximadamente: A a partir de 9.563, S a partir de 12.283 e S+ a partir de 15.342. São faixas de prática, não estatísticas de usuários nem percentis.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Não. Precisa de mouse e Pointer Lock, e não inicia em aparelhos só de toque. A tecla Esc encerra o drill e volta à tela inicial.',
  },
  {
    q: 'Onde ficam meus resultados?',
    a: 'Melhor pontuação, maior combo e nível máximo ficam apenas no armazenamento local do navegador. É grátis e não exige cadastro.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como fazer o treino de firmeza do mouse',
  description: 'Quatro passos para segurar a mira estável no anel contra o vento.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Começar', text: 'Clique em iniciar; após a contagem de 3 segundos o Pointer Lock é ativado.' },
    { '@type': 'HowToStep', position: 2, name: 'Ler a força', text: 'Veja para onde o retículo está sendo empurrado e mova o mouse um pouco para o lado oposto.' },
    { '@type': 'HowToStep', position: 3, name: 'Ficar no anel', text: 'Quanto mais tempo dentro do anel, maiores o combo e o multiplicador.' },
    { '@type': 'HowToStep', position: 4, name: 'Acompanhar o anel menor', text: 'Com o nível, o anel diminui e o vento fica mais forte: corrija mais cedo e com movimentos menores.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guide = {
  heading: 'Mira tremendo? Guia do treino de firmeza do mouse',
  intro: [
    'Se a sua mira fica tremendo e escapando do alvo, este treino isola uma parte do problema: segurar a mira estável contra uma força que muda de direção. Um vento aleatório empurra o retículo para fora do centro e você corrige com o mouse para ficar dentro do anel. Cada partida dura 45 segundos.',
    'Movimentos rápidos de mira são descritos como um deslocamento grande seguido de uma correção fina guiada pela visão (Woodworth, 1899). Aqui você repete essa correção sem parar, e quanto menor o anel, mais precisa ela precisa ser (Fitts, 1954).',
    'Este treino não ajusta sensibilidade, DPI nem hardware, e não mede tremor, equilíbrio ou saúde. Compare resultados só com suas próprias partidas no mesmo mouse, sensibilidade e monitor; taxa de atualização e polling rate afetam o atraso de entrada (Woods et al., 2015).',
  ],
  benchmarks: {
    title: 'Faixas de prática do SkillDrills',
    headers: ['Nota', 'Pontos', 'Rótulo'],
    rows: [
      ['S+', '15.342 ou mais', 'LEGENDARY'],
      ['S', '12.283 – 15.341', 'Elite'],
      ['A', '9.563 – 12.282', 'Excellent'],
      ['B', '6.120 – 9.562', 'Great'],
      ['C', '3.443 – 6.119', 'Good'],
      ['D', '1.530 – 3.442', 'Keep Going'],
      ['F', 'menos de 1.530', 'Needs Practice'],
    ],
    note: 'A nota compara a pontuação final com a referência de 17.000 pontos. São faixas de prática do SkillDrills, não estatísticas de usuários, percentis ou critérios médicos.',
  },
  techniques: {
    title: 'Quatro dicas para ficar mais tempo no anel',
    items: [
      { name: 'Comece pelo centro', desc: 'Durante a contagem o retículo fica no centro. Não faça movimentos grandes logo de cara; primeiro leia a direção do vento.', tips: 'Nos primeiros segundos, priorize a direção, não os pontos.' },
      { name: 'Corrija pouco e cedo', desc: 'Puxar forte só na borda do anel faz a mira passar para o outro lado. Corrija assim que o empurrão começar.', tips: 'Observe a distância entre o centro do anel e o retículo.' },
      { name: 'Espere a troca de vento', desc: 'A direção do vento muda ao acaso e gira aos poucos. Mantenha a mão relaxada para a correção não ficar grande de repente.', tips: 'Mão e antebraço tensos deixam a mira mais instável.' },
      { name: 'Proteja o combo', desc: 'O multiplicador chega a 3,0x no combo 50. Cada saída zera o combo, então segurar com calma rende mais que correções bruscas.', tips: 'O número de saídas aparece no resultado como Blowouts.' },
    ],
  },
  steps: [
    'Comece com seu mouse e sensibilidade de sempre.',
    'Mova o mouse levemente contra a direção em que o retículo é empurrado.',
    'Fique dentro do anel e acumule combo e multiplicador.',
    'Depois de 45 segundos, veja nota, estabilidade em %, saídas e nível máximo.',
  ],
  audience: 'Jogadores que querem praticar segurar a mira estável contra uma força que empurra, e quem quer testar a estabilidade do cursor de forma leve.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'woods2015'),
};

export default function StabilityChallengePtPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <StabilityChallengeClient
        copy={{
          title: 'Mira Tremendo? Treino de Firmeza do Mouse',
          hudLabels: {
            score: 'Pontos',
            time: 'Tempo',
            getReady: 'Prepare-se',
            points: 'Pontos',
            stability: 'Estabilidade',
            blowouts: 'Saídas',
            maxStreak: 'Maior combo',
            peakLevel: 'Nível máximo',
            playAgain: 'Jogar de novo',
          },
          rulesTitle: 'Regras e pontuação',
          rulesItems: [
            { title: 'Fique no anel central', text: 'Um vento com direção aleatória empurra o retículo. Corrija com o mouse e mantenha a mira dentro do anel.' },
            { title: 'Multiplicador de combo (até 3,0x)', text: 'Dentro do anel o combo sobe a cada 0,15 s e rende 15 pontos × multiplicador. No combo 50 são 3,0x.' },
            { title: 'Subida de nível', text: 'O nível sobe a cada 250 pontos e em sequências longas. O anel encolhe até 16 px e o vento fica cada vez mais forte.' },
            { title: 'Saída do anel', text: 'Se a mira for empurrada para fora, o combo volta a 0. Pontos e tempo não são descontados.' },
          ],
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
