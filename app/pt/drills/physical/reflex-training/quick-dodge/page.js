import QuickDodgeClient from '@/app/drills/physical/reflex-training/quick-dodge/QuickDodgeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/physical/reflex-training/quick-dodge';
const title = "Jogo de Desviar com o Mouse: Fuja dos Projéteis | SkillDrills";
const description = "Jogo de desviar grátis no navegador: mova o mouse para fugir dos projéteis vermelhos que vêm de todas as bordas na direção do cursor. Rodadas de 45 segundos.";

export const metadata = {
  title,
  description,
  keywords: ["jogo de desviar", "jogo de desviar online", "desviar de projéteis com o mouse", "jogo de desviar de obstáculos", "jogo de mouse no navegador"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/quick-dodge') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'pt_BR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Início', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Treino Físico', item: 'https://skilldrills.online/pt/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Jogo de Desviar com o Mouse', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Jogo de Desviar com o Mouse (Quick Dodge)',
  url,
  description,
  genre: ['Action Game', 'Browser Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  operatingSystem: 'All',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-10',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: "Como funciona o jogo de desviar?", a: "Projéteis vermelhos e redondos surgem em uma das quatro bordas da tela e voam em linha reta para o ponto onde o cursor estava quando apareceram. Se um projétil sai da tela sem te acertar, conta como um desvio. Cada rodada dura 45 segundos." },
  { q: "Os projéteis perseguem o cursor?", a: "Não. Eles miram na posição do cursor no momento em que surgem e depois seguem reto, sem mudar de direção. No caminho ficam um pouco maiores, então desvie com alguma folga." },
  { q: "Como são calculados os pontos e o combo?", a: "Cada projétil desviado vale pontos base vezes o multiplicador de combo. Os pontos base sobem de 2 para 20 conforme o nível. O multiplicador fica em 1,1x a partir de 3 desvios seguidos, 1,5x com 10, 2,0x com 20, 2,5x com 30 e 3,0x com 50." },
  { q: "Como a dificuldade aumenta?", a: "Toda rodada começa no nível 1. O nível sobe 1 a cada 250 pontos e mais 1 a cada 4 desvios seguidos. A velocidade vai de 300 px/s até 1.600 px/s no nível 15 e continua subindo depois; um combo longo soma até 200 px/s. O intervalo entre projéteis cai de 0,65 para 0,10 segundo e podem existir de 8 até 58 projéteis na tela ao mesmo tempo." },
  { q: "O que acontece se eu for atingido?", a: "O combo volta a 1,0x, todos os projéteis somem da tela e aparecem um flash vermelho e um tremor. Você não perde pontos nem tempo. O flash vermelho pode ser desligado no botão do canto inferior direito durante o jogo." },
  { q: "Qual controle é usado?", a: "Só o mouse. Ao começar, o ponteiro é travado (pointer lock) e a sensibilidade das configurações do site é aplicada. No teclado, só Esc (sair) é usado. Recomendamos um PC com mouse." },
  { q: "Como a nota é definida?", a: "A pontuação final é comparada com 17.000 pontos: S+ a partir de cerca de 15.350, S de cerca de 12.300, A de cerca de 9.550, B de 6.120, C de cerca de 3.450 e D de 1.530. São faixas de prática do SkillDrills, não estatísticas de usuários nem percentis." },
  { q: "Qual a diferença para o jogo da grade 3x3?", a: "Aqui você foge de projéteis livres que vêm de todos os lados. No jogo da grade 3x3 da mesma categoria você escolhe uma de 9 casas fixas antes que ela exploda." },
  { q: "É grátis? Onde ficam os recordes?", a: "Sim, grátis, sem instalação nem cadastro, direto no navegador. Recorde e melhor combo ficam só no armazenamento local do seu navegador." },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-10',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const steps = [
  "Clique em Iniciar; depois da contagem de 3 segundos o cursor começa no centro da tela.",
  "Quando um projétil surgir na borda, lembre que ele vem para onde você está agora e saia para o lado.",
  "Faça movimentos curtos e fique nos espaços livres entre os projéteis.",
  "Desvie em sequência sem ser atingido, suba o combo e busque seu recorde em 45 segundos.",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como jogar o jogo de desviar com o mouse',
  description: 'Quatro passos para desviar dos projéteis e subir o combo.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Passo ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const dodgeGuide = {
  heading: 'Guia do jogo de desviar com o mouse',
  intro: [
    "O jogo de desviar com o mouse (Quick Dodge) é um jogo de navegador em que projéteis vermelhos vêm de todas as bordas na direção do cursor e você foge deles movendo o mouse. O objetivo é não ser atingido; quanto mais desvios seguidos, maior o multiplicador de combo.",
    "Cada projétil mira na posição do cursor quando surge e depois segue reto. Quem fica parado é atingido; quem dá um passo para o lado escapa. Movimentos rápidos são planejados antes de começar (Kawato, 1999), então vale decidir o destino assim que o projétil aparece.",
    "Com o nível, os projéteis ficam mais rápidos, mais frequentes e maiores. Quanto menores os espaços livres, mais precisão o movimento exige (Fitts, 1954). Ser atingido limpa a tela e só zera o combo.",
    "Os resultados são registros de prática dentro do SkillDrills, não um exame médico nem medida de desempenho esportivo. Taxa de atualização e periférico influenciam a latência (Woods et al., 2015); compare pontuações com o mesmo equipamento.",
  ],
  benchmarks: {
    title: 'Faixas de nota (faixas de prática SkillDrills)',
    headers: ['Nota', 'Pontos'],
    rows: [
      ['S+', 'a partir de cerca de 15.350'],
      ['S', 'a partir de cerca de 12.300'],
      ['A', 'a partir de cerca de 9.550'],
      ['B', 'a partir de 6.120'],
      ['C', 'a partir de cerca de 3.450'],
      ['D', 'a partir de 1.530'],
    ],
    note: 'As faixas comparam a pontuação final com 17.000 pontos e são faixas de prática do SkillDrills. Não são estatísticas de usuários nem percentis.',
  },
  techniques: {
    title: 'Dicas para pontuar mais',
    items: [
      { name: 'Olhe o surgimento', desc: 'O projétil vai para onde o cursor estava quando ele surgiu. Um passo curto para o lado costuma bastar.', tips: 'Não fique muito tempo no mesmo lugar.' },
      { name: 'Movimentos curtos', desc: 'Movimentos grandes levam o cursor direto para novos projéteis. Fique nos espaços livres com movimentos curtos.', tips: 'O lado por onde um projétil acabou de passar costuma estar livre.' },
      { name: 'Conte com o crescimento', desc: 'Os projéteis crescem no caminho. Prefira desviar com folga a passar raspando.', tips: 'Na fase rápida, segurança primeiro.' },
      { name: 'Mantenha o combo', desc: 'Quanto maior a sequência, mais sobem multiplicador e nível. Depois de um acerto a tela fica vazia: recomece com calma.', tips: 'Relaxe punho e ombro e pare se sentir dor.' },
    ],
  },
  steps,
  audience: 'Quem quer um jogo de desviar online no navegador e quem quer treinar o controle do mouse.',
  faqs,
  sources: pickSources('kawato1999', 'fitts1954', 'woods2015'),
};

export default function LocalizedQuickDodgePagePt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <QuickDodgeClient
        copy={{
          title: "Jogo de Desviar com o Mouse",
          hudLabels: { score: "Pontos", time: "Tempo", bestScore: "Recorde", bestCombo: "Melhor Combo", getReady: "PREPARE-SE" },
          resultLabels: { newBest: "NOVO RECORDE", points: "Pontos", accuracy: "Taxa de desvio", dodges: "Desvios", peakSpeed: "Vel. máx.", peakLevel: "Nível máx.", playAgain: "Jogar de novo" },
          rulesTitle: "Regras e pontuação",
          rulesItems: [
            { title: "Desvie dos projéteis", text: "Projéteis vermelhos surgem na borda e voam para onde o cursor estava naquele momento. Se saírem da tela sem te acertar, conta um desvio." },
            { title: "Multiplicador de combo", text: "Desvios seguidos aumentam o multiplicador até 3,0x (com 50 seguidos)." },
            { title: "Dificuldade crescente", text: "Com pontos e sequências o nível sobe; os projéteis vão de 300 px/s a mais de 1.600 px/s e surgem com mais frequência." },
            { title: "Atingido", text: "O combo volta a 1,0x e a tela é limpa. Pontos e a rodada de 45 segundos não mudam." },
          ],
          aboutTitle: "Sobre o jogo de desviar",
          aboutSections: [
            { title: "Projéteis em linha reta", content: "Cada projétil mira no cursor quando surge e depois segue reto. Regra básica: sair para o lado assim que ele aparece." },
            { title: "Decida antes", subtitle: "Kawato, 1999", content: "Movimentos rápidos são planejados antes. Defina o destino assim que um projétil surgir." },
            { title: "Espaços cada vez menores", subtitle: "Fitts, 1954", content: "Quanto mais projéteis, menores os espaços livres e mais preciso o movimento precisa ser." },
            { title: "Equipamento e comparação", subtitle: "Woods et al., 2015", content: "Taxa de atualização e periférico influenciam a latência. Compare resultados com o mesmo equipamento." },
          ],
        }}
      />
      <DrillGuide guide={dodgeGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/quick-dodge" />
    </>
  );
}
