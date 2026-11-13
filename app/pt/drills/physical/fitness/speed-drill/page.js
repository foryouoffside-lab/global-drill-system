import SpeedDrillClient from '@/app/drills/physical/fitness/speed-drill/SpeedDrillClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/physical/fitness/speed-drill';
const title = 'Jogo de Clicar em Alvos Rápidos que Encolhem | SkillDrills';
const description = 'Jogo de clicar em alvos rápidos, grátis: acerte os alvos que se movem e encolhem antes que sumam. Cada acerto dá +2 s; erro ou alvo perdido tira 1 s.';

export const metadata = {
  title,
  description,
  keywords: ['Jogo de Clicar em Alvos Rápidos', 'jogo de clicar na bolinha', 'alvos que encolhem', 'jogo de clicar com o mouse', 'jogo de clicar online'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/fitness/speed-drill') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'pt_BR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Início', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Treino de Agilidade com o Mouse', item: 'https://skilldrills.online/pt/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Jogo de Clicar em Alvos Rápidos', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Jogo de Clicar em Alvos Rápidos que Encolhem',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  inLanguage: 'pt-BR',
  dateModified: '2026-11-10',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Jogo de Clicar em Alvos Rápidos – app web',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador atual com suporte a HTML5 Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'pt-BR',
  dateModified: '2026-11-10',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Speed Drill: jogo de clicar em alvos que encolhem',
  url,
  description: 'Clique nos alvos que se movem e encolhem antes que desapareçam – um jogo de clicar com o mouse no navegador.',
  genre: ['Action Game', 'Casual Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-10',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: 'Como funciona o jogo de clicar em alvos rápidos?', a: 'Alvos redondos se movem pela tela e encolhem; você precisa clicar neles antes que sumam. Cada acerto junta encontrar o alvo, levar o cursor até ele e clicar com precisão, e a pontuação e o combo ficam registrados. É um jogo de prática no navegador.' },
  { q: 'Por que os alvos ficam cada vez menores?', a: 'Alvos menores são mais difíceis de acertar, como descreve a Lei de Fitts (Fitts, 1954). Cada alvo encolhe depois de aparecer e some ao chegar a 4 px de raio, então clicar tarde fica mais difícil (com a opção de tempo limite desligada, os alvos não encolhem). O ideal é acertar cedo, enquanto o alvo ainda está grande.' },
  { q: 'Como são calculados os pontos e o tempo?', a: 'Cada acerto vale 100 pontos multiplicados pelo combo e pelo nível e soma 2 segundos ao tempo restante (máximo de 60 segundos). A partida começa com 45 segundos e o nível sobe a cada 1.750 pontos. Se um alvo some ou você clica no vazio, o combo zera e 1 segundo é descontado.' },
  { q: 'O jogo mede cliques por segundo?', a: 'Não. O jogo não conta quantos cliques você dá nem a velocidade deles. Cada alvo precisa ser acertado com um clique preciso, e clicar no vazio tira 1 segundo – então clicar sem parar só atrapalha.' },
  { q: 'O que muda quando o nível sobe?', a: 'Os alvos se movem e encolhem mais rápido, e os novos já surgem menores (raio de 32 px até no mínimo 10 px). Acertos seguidos sem erro aumentam o multiplicador de combo até 3,0x. Pontuação alta exige velocidade e precisão ao mesmo tempo.' },
  { q: 'O que acontece quando eu erro?', a: 'Se um alvo some ou você clica fora, o combo zera na hora e o tempo restante cai 1 segundo. Essa penalidade vale sempre, independentemente das configurações. O segredo é equilibrar rapidez e calma.' },
  { q: 'Isso melhora minha mira em jogos de tiro?', a: 'Esta página não garante isso. Acertar alvos pequenos em movimento lembra treino de mira, mas sensibilidade, tela e regras dos jogos são diferentes. Use os resultados para comparar a sua própria evolução.' },
  { q: 'Quais configurações de mouse devo usar?', a: 'Não existe resposta única. Comece com o DPI, a sensibilidade e a pegada de sempre e, se mudar algo, compare a pontuação nas mesmas condições. Se sentir dor no punho ou nos dedos, pare ou descanse.' },
  { q: 'Taxa de atualização do monitor e polling rate fazem diferença?', a: 'Uma taxa de atualização maior mostra o movimento do alvo com mais detalhe, e um polling rate maior envia os movimentos do mouse com mais frequência. Os dois são fatores conhecidos de atraso de entrada (Woods et al., 2015), mas não medimos quanto mudam a pontuação neste drill.' },
  { q: 'Onde ficam salvos os meus resultados?', a: 'Pontuação e melhor combo ficam no armazenamento local do navegador e este drill não os envia a nenhum servidor. Se você apagar os dados do navegador, os resultados também somem. Veja a política de privacidade para mais detalhes.' },
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
  name: 'Como jogar o jogo de clicar em alvos rápidos em 4 passos',
  description: 'Como acertar alvos que encolhem e acumular pontos e combo.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Encontre o alvo', text: 'Olhe para a tela inteira e localize rápido cada novo alvo.', url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: 'Leve o cursor de uma vez', text: 'Sem hesitar, leve o cursor num só movimento até perto do alvo.', url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: 'Clique antes de encolher', text: 'Enquanto o alvo ainda está grande, freie no final e clique com precisão.', url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: 'Mantenha o combo', text: 'Siga acertando sem erros para acumular multiplicador e tempo extra.', url: `${url}#step-4` },
  ],
};

const speedGuide = {
  heading: 'Guia do jogo de clicar em alvos rápidos',
  intro: {
    title: 'O que é este jogo de clicar em alvos?',
    paragraphs: [
      'O Speed Drill é um jogo de clicar em alvos rápidos no navegador: alvos redondos se movem pela tela e encolhem até sumir, e você precisa acertá-los antes disso. Cada clique junta busca, movimento do cursor e precisão – um treino diferente de um teste simples de tempo de reação.',
      'Mirar rápido com o mouse costuma ser descrito em duas fases: um movimento grande e uma pequena correção no fim (Woodworth, 1899). A Lei de Fitts (Fitts, 1954) explica por que alvos menores são mais difíceis. Como aqui os alvos encolhem o tempo todo, vale começar o movimento grande cedo.',
      'Alvos em movimento, claros e com bom contraste chamam atenção até na borda do campo de visão (Treisman & Gelade, 1980). Em vez de fixar o olhar num ponto, olhe a tela toda para encontrar novos alvos mais rápido.',
      'Compare resultados com o mesmo mouse, sensibilidade e monitor; taxa de atualização e dispositivo de entrada influenciam o atraso (Woods et al., 2015). Os números são registros de prática.',
    ],
  },
  benchmarks: {
    title: 'Referência de faixas de pontuação',
    headers: ['Faixa', 'Pontos', 'Meta de precisão', 'Foco do treino'],
    rows: [
      ['Faixa 1', 'abaixo de 6.000', 'abaixo de 70%', 'Achar alvos mais rápido e reduzir cliques errados'],
      ['Faixa 2', '6.000 – 10.999', '70 – 81%', 'Clicar cedo, com o alvo ainda grande'],
      ['Faixa 3', '11.000 – 16.999', '82 – 89%', 'Manter o combo sem interrupção'],
      ['Faixa 4', '17.000 – 23.999', '90 – 94%', 'Manter a precisão com alvos rápidos'],
      ['Faixa 5', 'a partir de 24.000', 'a partir de 95%', 'Usar o tempo extra para partidas longas'],
    ],
    note: 'Estas faixas são níveis de prática definidos pela SkillDrills. Não se baseiam em estatísticas de usuários, percentis ou valores de jogadores profissionais.',
  },
  techniques: {
    title: '4 dicas de treino para pontuar mais',
    items: [
      { name: 'Movimento grande, correção pequena', desc: 'Leve o cursor num só movimento até perto do alvo e freie só no final. Arrastar devagar dá tempo para o alvo encolher.', tips: 'Trajetos longos com punho e braço, ajuste fino com os dedos.' },
      { name: 'Clique enquanto o alvo é grande', desc: 'Quanto menor o alvo, mais difícil acertar. Não mire no centro perfeito: clique cedo, dentro da borda.', tips: 'Se a precisão cair muito, jogue um pouco mais devagar.' },
      { name: 'Olhe a tela toda', desc: 'Quem fixa o olhar num ponto demora a ver alvos do outro lado. Olhe o centro com calma e perceba os movimentos nas bordas.', tips: 'Primeiro os olhos, logo depois a mão.' },
      { name: 'Segure o mouse sem tensão', desc: 'Mantenha a pegada de sempre, relaxada. Força demais tira precisão e cansa o punho.', tips: 'Descanse quando cansar e compare com o mesmo equipamento.' },
    ],
  },
  steps: [
    'Sente-se confortável e deixe o cursor no centro da tela.',
    'Quando um alvo aparecer, leve o cursor num só movimento até perto dele.',
    'Clique antes que ele encolha e ganhe pontos e 2 segundos de tempo extra.',
    'Faça sequências sem erro para aumentar o combo e a pontuação.',
  ],
  audience: 'Jogadores e qualquer pessoa que queira praticar, de forma leve, acertar alvos em movimento com o mouse e a coordenação mão-olho.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'treisman1980', 'lee1976', 'woods2015'),
};

export default function LocalizedSpeedDrillPagePt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <SpeedDrillClient
        copy={{
          title: 'Jogo de Clicar em Alvos Rápidos',
          hudLabels: { score: 'Pontos', time: 'Tempo restante', bestScore: 'Recorde', bestCombo: 'Melhor combo' },
          rulesTitle: 'Regras e pontuação',
          rulesItems: [
            { title: 'Acerte e ganhe tempo', text: 'Clique em cada alvo antes que ele suma. Cada acerto vale 100 pontos (com multiplicador de combo e nível) e 2 segundos extras (máximo de 60 segundos).' },
            { title: 'Multiplicador de combo', text: 'Acertos seguidos sem erro elevam o multiplicador de combo até 3,0x.' },
            { title: 'Dificuldade crescente', text: 'A cada 1.750 pontos o nível sobe; os alvos se movem e encolhem mais rápido.' },
            { title: 'Alvo perdido ou clique fora', text: 'Se um alvo some ou você clica fora, o combo zera e 1 segundo é descontado.' },
          ],
          aboutTitle: 'Sobre o Speed Drill',
          aboutSections: [
            { title: 'Movimento grande, correção pequena', subtitle: 'Modelo de duas fases de Woodworth (1899)', content: 'Mirar rápido envolve um movimento grande e uma pequena correção no fim. Quanto maior o nível, menos tempo sobra para corrigir.' },
            { title: 'Alvos que encolhem e a Lei de Fitts', subtitle: 'Alvos menores, mais dificuldade', content: 'Conforme o alvo encolhe até 4 px de raio, a margem de acerto diminui. Clicar cedo, enquanto ele é grande, é o principal.' },
            { title: 'Alvos em movimento que chamam atenção', subtitle: 'Busca visual segundo Treisman (1980)', content: 'Alvos em movimento com bom contraste se destacam até na borda da visão. Olhar a tela toda ajuda a achar novos alvos mais rápido.' },
            { title: 'Estimar o tempo até sumir', subtitle: 'Pesquisa de tempo até o contato de Lee (1976)', content: 'Estudos sobre como as pessoas estimam o tempo restante de objetos que se aproximam ou mudam de tamanho – úteis para cronometrar o clique antes que o alvo suma.' },
          ],
        }}
      />
      <DrillGuide {...speedGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/fitness/speed-drill" />
    </>
  );
}
