import DynamicGridEvasionClient from '@/app/drills/physical/coordination/dynamic-grid-evasion/DynamicGridEvasionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/physical/coordination/dynamic-grid-evasion';
const title = "Jogo de Esquiva em Grade: Saia Antes da Explosão | SkillDrills";
const description = "Jogo de esquiva em grade grátis: leve o cursor para fora das casas que piscam em laranja na grade 3x3 antes que explodam. Rodadas de 45 segundos.";

export const metadata = {
  title,
  description,
  keywords: ["jogo de esquiva em grade", "fuja das casas que explodem", "grade 3x3", "leitura de perigo", "jogo de esquiva no navegador"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/coordination/dynamic-grid-evasion') },
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
    { '@type': 'ListItem', position: 3, name: 'Coordenação', item: 'https://skilldrills.online/pt/drills/physical/coordination' },
    { '@type': 'ListItem', position: 4, name: 'Jogo de Esquiva em Grade', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Jogo de Esquiva em Grade (Dynamic Grid Evasion)',
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
  { q: "Como funciona o jogo de esquiva em grade?", a: "A tela é dividida em uma grade 3x3. A cada onda, algumas casas piscam em laranja como aviso. Quando o tempo de aviso acaba, essas casas explodem em vermelho; se o seu cursor estiver fora delas nesse instante, você passou da onda. A próxima onda começa 0,35 segundo depois da explosão, e cada rodada dura 45 segundos." },
  { q: "Quando a posição do cursor é verificada?", a: "Só no momento da explosão. Você pode passar por casas perigosas durante o aviso; o que conta é estar numa casa segura quando elas explodem. O cursor começa no centro, e a casa do meio também pode virar casa perigosa." },
  { q: "Como são calculados os pontos e o combo?", a: "Cada onda superada vale 100 pontos vezes o multiplicador de combo. O multiplicador fica em 1,1x a partir de 3 ondas seguidas, 1,25x com 5, 1,5x com 10, 2,0x com 20 e 2,5x com 30. O código prevê 3,0x com 50 seguidas, mas em 45 segundos cabem no máximo pouco mais de 40 ondas, então 2,5x é o máximo alcançável na prática." },
  { q: "Como a dificuldade aumenta?", a: "Toda rodada começa no nível 1. O nível sobe 1 a cada 250 pontos e mais 1 a cada 4 ondas seguidas. Com o nível, o aviso cai de 1,4 para 0,45 segundo e as casas perigosas passam de 3 para 7, sobrando só 2 seguras. Os dois valores chegam ao limite no nível 15." },
  { q: "O que acontece se a explosão me pegar?", a: "O combo volta a 0 e aparecem um flash vermelho e um tremor de tela. Você não perde pontos nem tempo. O flash vermelho pode ser desligado no botão do canto inferior direito durante o jogo." },
  { q: "Como a nota é definida?", a: "A pontuação final é comparada com uma referência de 17.000 pontos (B a partir de 6.120, C a partir de cerca de 3.450, D a partir de 1.530). Mesmo superando todas as ondas em 45 segundos, o cálculo dá no máximo cerca de 8.400 pontos, então a nota mais alta realista aqui é B." },
  { q: "Qual controle é usado?", a: "Só o mouse. Ao começar, o ponteiro é travado (pointer lock) e a sensibilidade das configurações do site é aplicada. No teclado, só Esc (sair) é usado. Em aparelhos só de toque não dá para mover o cursor; recomendamos um PC com mouse." },
  { q: "Qual a diferença para um jogo de projéteis?", a: "Aqui você escolhe uma de 9 casas fixas e entra nela antes do fim do aviso. Se você quer fugir de projéteis que vêm de todas as bordas, use o Quick Dodge na mesma categoria." },
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
  "Clique em Iniciar; depois da contagem de 3 segundos o cursor começa no centro da grade.",
  "Veja as casas que piscam em laranja e encontre uma casa sem aviso.",
  "Antes da explosão, leve o cursor para dentro da casa segura e pare longe da borda.",
  "Supere onda após onda, mantenha o combo e busque seu recorde em 45 segundos.",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como jogar o jogo de esquiva em grade',
  description: 'Quatro passos para sair das casas perigosas da grade 3x3.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Passo ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const gridGuide = {
  heading: 'Guia do jogo de esquiva em grade',
  intro: [
    "O jogo de esquiva em grade é um jogo de navegador em que você tira o cursor das casas avisadas em laranja numa grade 3x3 antes que explodam. Em vez de fugir de objetos voando, você escolhe uma de 9 casas, então decisão rápida e parada precisa contam juntas.",
    "Conforme o nível sobe, o aviso encolhe de 1,4 para 0,45 segundo e até 7 das 9 casas viram perigo. No fim sobram só 2 casas seguras e não há tempo de checar uma por uma. Como nos experimentos de pistas de atenção de Posner (Posner, 1980), ajuda ler de uma vez o contraste entre casas piscando e casas escuras.",
    "Movimentos rápidos têm um impulso grande e uma correção pequena no final (Woodworth, 1899). Escolher a casa certa e passar da borda ainda conta como acerto da explosão, por isso treine parar dentro da casa.",
    "Os resultados são registros de prática dentro do SkillDrills, não um exame médico, teste de visão ou medida de desempenho esportivo. Compare pontuações sempre com o mesmo mouse, sensibilidade e monitor.",
  ],
  benchmarks: {
    title: 'Faixas de nota (faixas de prática SkillDrills)',
    headers: ['Nota', 'Pontos', 'Referência'],
    rows: [
      ['B', 'a partir de 6.120', 'quase todas as ondas superadas em 45 segundos'],
      ['C', 'a partir de cerca de 3.450', 'mais da metade das ondas superadas em sequência'],
      ['D', 'a partir de 1.530', 'troca segura para a casa livre depois do aviso'],
      ['F', 'abaixo de 1.530', 'início'],
    ],
    note: 'As faixas comparam a pontuação final com 17.000 pontos e são faixas de prática do SkillDrills. A ou mais não é alcançável em 45 segundos pelo cálculo. Não são estatísticas de usuários nem percentis.',
  },
  techniques: {
    title: 'Dicas para pontuar mais',
    items: [
      { name: 'Procure as casas escuras', desc: 'Em vez de contar as casas piscando, procure direto a casa sem aviso.', tips: 'No fim só há 2 casas seguras; vá para a mais próxima.' },
      { name: 'Casa segura mais próxima', desc: 'Com cerca de 0,5 segundo de aviso, trajetos longos não dão tempo. Vá para a casa segura mais perto.', tips: 'Na horizontal ou vertical costuma ser mais curto que na diagonal.' },
      { name: 'Pare dentro da casa', desc: 'Vale a posição exata do cursor. Em cima da borda ele pode contar como a casa vizinha.', tips: 'Mire no centro da casa.' },
      { name: 'Mantenha o combo', desc: 'Quanto maior a sequência, mais sobem multiplicador e nível. Arriscar uma casa distante e ser pego zera o combo.', tips: 'Prefira a casa segura e próxima.' },
    ],
  },
  steps,
  audience: 'Quem procura um jogo de esquiva com casas perigosas numa grade e quem quer treinar decisão rápida e parada precisa com o mouse.',
  faqs,
  sources: pickSources('posner1980', 'woodworth1899', 'fitts1954'),
};

export default function DynamicGridEvasionPagePt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <DynamicGridEvasionClient
        copy={{
          title: "Jogo de Esquiva em Grade",
          hudLabels: { score: "Pontos", timeLeft: "Tempo", bestScore: "Recorde", bestCombo: "Melhor Combo" },
          rulesTitle: "Regras e pontuação",
          rules: [
            { title: "Aviso de perigo", text: "A cada onda algumas casas piscam em laranja. Quando o aviso acaba, elas explodem." },
            { title: "Vá para a casa segura", text: "Se o cursor estiver fora das casas perigosas na explosão, você ganha 100 pontos vezes o multiplicador de combo." },
            { title: "Nível", text: "O nível sobe a cada 250 pontos e a cada 4 ondas seguidas. O aviso cai de 1,4 para 0,45 s e as casas perigosas passam de 3 para 7." },
            { title: "Pego pela explosão", text: "Só o combo volta a 0. Pontos e a rodada de 45 segundos não mudam." },
          ],
          aboutTitle: "O que é o jogo de esquiva em grade?",
          aboutHeading: "Fuja das casas que explodem na grade 3x3",
          aboutText: "No jogo de esquiva em grade, casas de uma grade 3x3 piscam em laranja antes de explodir e você leva o cursor a tempo para uma casa segura. Com o nível, o aviso fica mais curto e há mais casas perigosas. O foco é decidir rápido e frear o mouse com precisão, não uma medida médica.",
          aboutCards: [
            { title: "Para quem", desc: "Para quem gosta de jogos de esquiva em grade ou quer treinar reação a avisos com o mouse." },
            { title: "O que você treina", desc: "Separar casas perigosas e seguras, escolher a mais próxima e parar o cursor dentro dela." },
            { title: "Formato", desc: "45 segundos fixos, sempre a partir do nível 1. Ser pego não tira pontos nem tempo." },
          ],
        }}
      />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
