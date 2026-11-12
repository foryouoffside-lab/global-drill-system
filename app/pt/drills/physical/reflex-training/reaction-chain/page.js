import ReactionChainClient from '@/app/drills/physical/reflex-training/reaction-chain/ReactionChainClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/physical/reflex-training/reaction-chain';
const title = 'Frenagem de Mira: Pare o Cursor Dentro do Alvo | SkillDrills';
const description = 'Frenagem de mira grátis: pare o cursor por completo dentro de alvos que vêm das bordas da tela. Passar direto ou deixar um alvo escapar tira 1 segundo.';

export const metadata = {
  title,
  description,
  keywords: ['frenagem de mira', 'parar a mira no alvo', 'evitar overflick', 'overflick', 'parar o cursor no alvo'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/reaction-chain') },
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
    { '@type': 'ListItem', position: 3, name: 'Frenagem de Mira', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Frenagem de Mira (Reaction Chain)',
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
    q: 'O que se pratica na frenagem de mira?',
    a: 'Alvos (nós) entram em linha reta por uma das quatro bordas da tela. Você leva o cursor até um nó e para por completo dentro dele. Para evitar overflick, esse último instante de frenagem é o que importa, e o drill treina só ele.',
  },
  {
    q: 'Como os pontos são calculados?',
    a: 'Parar dentro do nó (aviso ARREST READY) vale 50 pontos × multiplicador. Não há clique. Com 5 paradas seguidas o multiplicador vai a 1,2x, com 10 a 1,5x, com 25 a 2,0x e com 40 ao máximo de 3,0x.',
  },
  {
    q: 'O que acontece quando eu erro?',
    a: 'Erro é passar direto por um nó sem parar ou deixar um nó sair da tela. Cada erro tira 1 segundo do tempo restante e volta o multiplicador para 1,0x. Pontos não são descontados. Essa penalidade está sempre ativa e não pode ser desligada.',
  },
  {
    q: 'Quando uma parada conta?',
    a: 'Quando o cursor, dentro do nó, se move a menos de 1,5 pixel por quadro. Mais rápido que isso, o contato conta como passar direto. É um critério interno do drill.',
  },
  {
    q: 'Como a dificuldade aumenta?',
    a: 'O nível sobe com a pontuação de 1 a 10 (aos 250, 500, 1.000, 2.000, 3.500, 5.500, 8.000, 11.000 e 15.000 pontos). A velocidade dos nós vai de 360 a 1.800 px/s, aparecem de 1 a 5 nós ao mesmo tempo e o raio do nó cai de 15 para 6 px.',
  },
  {
    q: 'Parar é mais difícil que começar o movimento?',
    a: 'Muita gente sente isso, mas varia de pessoa para pessoa. Um modelo conhecido descreve começar e parar como uma corrida entre dois processos (Logan & Cowan, 1984); se a parada chega tarde, o embalo leva a mira além do alvo. A pontuação não mede tempo de reação de parada.',
  },
  {
    q: 'Vou jogar melhor Valorant ou CS2?',
    a: 'Não dá para garantir. O drill pratica frear no alvo, mas sensibilidade, tela e regras do jogo são diferentes. Use-o para comparar suas próprias partidas.',
  },
  {
    q: 'O que preciso para jogar?',
    a: 'Um mouse. Depois da contagem o Pointer Lock é ativado e você controla só com o movimento do mouse; em aparelhos só de toque o drill não inicia. Use seu DPI e sensibilidade de sempre e compare mudanças nas mesmas condições.',
  },
  {
    q: 'Onde ficam meus resultados?',
    a: 'Melhor pontuação, melhor multiplicador e nível máximo ficam só no armazenamento local do navegador e não vão para nenhum servidor. Se você apagar os dados do navegador, eles somem.',
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
  name: 'Como fazer a frenagem de mira',
  description: 'Quatro passos para parar o cursor dentro do alvo.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Aproximar', text: 'Quando um nó aparecer, leve o cursor rapidamente para a trajetória dele.' },
    { '@type': 'HowToStep', position: 2, name: 'Frear antes da borda', text: 'Desacelere pouco antes de chegar à borda do nó.' },
    { '@type': 'HowToStep', position: 3, name: 'Parar dentro', text: 'Pare o cursor por completo dentro do nó até aparecer ARREST READY.' },
    { '@type': 'HowToStep', position: 4, name: 'Manter a sequência', text: 'Pare nó após nó sem passar direto. Cada erro custa 1 segundo.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guideProps = {
  heading: 'Frenagem de mira: guia para parar o cursor no alvo',
  intro: [
    'A frenagem de mira (Reaction Chain) é um drill de navegador em que você para o cursor por completo dentro de nós que chegam das bordas da tela. Não há clique: só a parada conta. Cada partida dura 45 segundos e cada erro tira 1 segundo.',
    'Um modelo conhecido descreve começar e parar como uma corrida entre dois processos (Logan & Cowan, 1984). Movimentos rápidos de mira têm um deslocamento grande e uma correção fina (Woodworth, 1899), e quanto menor o alvo, mais precisa a parada precisa ser (Fitts, 1954).',
    'Compare resultados no mesmo mouse, sensibilidade e monitor; taxa de atualização e dispositivo de entrada afetam o atraso (Woods et al., 2015). Os números são registros de prática e não garantem desempenho em jogo.',
  ],
  benchmarks: {
    title: 'Níveis e dificuldade (valores do jogo)',
    headers: ['Nível', 'A partir de', 'Velocidade do nó', 'Nós ao mesmo tempo', 'Raio do nó'],
    rows: [
      ['1', '0', '360 px/s', '1', '15 px'],
      ['2', '250', '420 px/s', '1', '14 px'],
      ['3', '500', '500 px/s', '2', '13 px'],
      ['4', '1.000', '600 px/s', '2', '12 px'],
      ['5', '2.000', '720 px/s', '2', '11 px'],
      ['6', '3.500', '850 px/s', '3', '10 px'],
      ['7', '5.500', '1.000 px/s', '3', '9 px'],
      ['8', '8.000', '1.200 px/s', '4', '8 px'],
      ['9', '11.000', '1.450 px/s', '4', '7 px'],
      ['10', '15.000', '1.800 px/s', '5', '6 px'],
    ],
    note: 'Valores definidos no código do drill. Não são estatísticas de usuários nem percentis.',
  },
  techniques: {
    title: 'Quatro técnicas para uma parada limpa',
    items: [
      { name: 'Frear antes da borda', desc: 'Frear só ao tocar a borda do nó já é tarde. Comece a desacelerar um pouco antes.', tips: 'No início, olhe mais para o ARREST READY do que para os pontos.' },
      { name: 'Parar com a mão solta', desc: 'Dedos e pulso tensos fazem o cursor tremer. Pare de forma relaxada, deixando o embalo morrer.', tips: 'Mousepad e mouse feet mudam a sensação de parada; compare sempre com o mesmo setup.' },
      { name: 'Não passar direto', desc: 'Atravessar o nó rápido não conta como parada, custa 1 segundo e zera a sequência.', tips: 'Segure a parada por um instante.' },
      { name: 'Não deixar nó escapar', desc: 'Um nó que sai da tela também custa 1 segundo. Com vários nós, resolva primeiro o mais próximo.', tips: 'O multiplicador só chega a 3,0x com 40 paradas seguidas; calma rende pontos.' },
    ],
  },
  steps: [
    'Clique em iniciar e espere o Pointer Lock ser ativado após a contagem.',
    'Leve o cursor rapidamente até a trajetória do nó.',
    'Desacelere pouco antes da borda e pare por completo dentro do nó.',
    'Acumule paradas seguidas por 45 segundos. Cada erro tira 1 segundo.',
  ],
  audience: 'Jogadores de FPS que querem reduzir o overflick com prática focada e quem quer treinar a frenagem do mouse.',
  faqs: { title: 'Perguntas frequentes', items: faqs },
  sources: pickSources('logan1984', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedReactionChainPagePt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ReactionChainClient
        copy={{
          title: 'Frenagem de Mira',
          subtitle: 'Leve o cursor ao alvo e pare por completo',
          description: 'Parar um movimento rápido exatamente no alvo costuma ser mais difícil do que começá-lo. Um modelo conhecido descreve começar e parar como uma corrida entre dois processos (Logan & Cowan, 1984); se a parada chega tarde, o embalo leva a mira além do alvo. Experimente nos nós.',
          hudLabels: {
            score: 'Pontos',
            time: 'Tempo',
            accuracy: 'Taxa de parada',
            bestScore: 'Recorde',
            getReady: 'Prepare-se',
          },
          resultLabels: {
            newBest: 'Novo recorde',
            points: 'Pontos',
            accuracy: 'Taxa de parada',
            totalArrests: 'Paradas',
            maxCombo: 'Maior multiplicador',
            peakLevel: 'Nível máximo',
            playAgain: 'Jogar de novo',
          },
          rulesTitle: 'Regras e pontuação',
          rulesItems: [
            { title: 'Parada no nó (+50 pts)', text: 'Pare o cursor por completo dentro do nó (ARREST READY): 50 pontos × multiplicador. Não há clique.' },
            { title: 'Multiplicador (até 3,0x)', text: '5 paradas seguidas: 1,2x; 10: 1,5x; 25: 2,0x; 40: 3,0x.' },
            { title: 'Passar direto / deixar escapar (-1 s)', text: 'Atravessar um nó sem parar ou deixá-lo sair da tela custa 1 segundo e volta o multiplicador a 1,0x (sem perder pontos).' },
            { title: 'Níveis 1–10', text: 'Com a pontuação sobem a velocidade (até 1.800 px/s) e o número de nós (até 5); os nós ficam menores.' },
          ],
          aboutTitle: 'Sobre a frenagem de mira',
          aboutSections: [
            { title: 'Treinar só a parada', content: 'O Reaction Chain isola a frenagem no alvo. Não há clique; só pontua quando o cursor fica totalmente parado dentro do nó.' },
            { title: 'Corrida entre começar e parar', content: 'Um modelo conhecido descreve começar e parar como uma corrida entre dois processos (Logan & Cowan, 1984). Se a parada atrasa, o cursor passa do alvo. O efeito do drill não foi comprovado; ele serve para comparar suas partidas.' },
          ],
          aboutCards: [
            { title: 'Para quem', desc: 'Jogadores de FPS que querem passar menos do alvo e quem quer treinar a frenagem do mouse.', bgClass: 'bg-blue-600/30', iconClass: 'text-blue-400' },
            { title: 'O que você pratica', desc: 'Momento de frear, parar em alvos pequenos e interceptar alvos que cruzam a tela.', bgClass: 'bg-emerald-600/30', iconClass: 'text-emerald-400' },
            { title: 'Critério de parada', desc: 'Menos de 1,5 pixel por quadro dentro do nó conta como parada.', bgClass: 'bg-purple-600/30', iconClass: 'text-purple-400' },
          ],
        }}
      >
        <DrillGuide {...guideProps} />
        <RelatedDrills />
      </ReactionChainClient>
    </>
  );
}
