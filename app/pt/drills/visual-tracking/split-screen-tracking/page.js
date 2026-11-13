import SplitScreenTrackingClient from '@/app/drills/visual-tracking/split-screen-tracking/SplitScreenTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/split-screen-tracking';
const title = "Rastreamento visual em tela dividida | SkillDrills";
const description = "Rastreamento visual em tela dividida: acompanhe dois alvos ao mesmo tempo, um sobe e desce à esquerda, outro vai e volta à direita. Treino grátis no navegador.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento visual em tela dividida", "acompanhar dois alvos", "atenção dividida exercício", "exercício para os olhos online", "rastreamento ocular treino"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/split-screen-tracking') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'pt_PT', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "Início", item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: "Rastreamento visual", item: 'https://skilldrills.online/pt/drills/visual-tracking' },
    { '@type': 'ListItem', position: 3, name: "Rastreamento visual em tela dividida", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Rastreamento visual em tela dividida",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  inLanguage: 'pt',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Rastreamento visual em tela dividida",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Navegador atual com suporte a HTML5 Canvas",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'pt',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: "Rastreamento visual em tela dividida",
  url,
  description,
  genre: ['Casual Game', 'Educational Game'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'pt',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Como fazer o rastreamento visual em tela dividida",
  description: "Quatro passos para acompanhar com os olhos dois alvos que se movem separadamente.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Escolher as configurações", text: "Selecione duração, velocidade e tamanho do alvo. Para começar: 60 segundos, 1,0x e linhas-guia visíveis.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Olhar para o centro", text: "Sente-se confortavelmente, ombros relaxados, com o olhar perto do centro da tela.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Acompanhar os dois alvos", text: "Mantenha à vista o alvo da esquerda (sobe e desce) e o da direita (vai e volta) ao mesmo tempo.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte as linhas-guia ou ligue a velocidade aleatória, uma coisa por vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "O que é o rastreamento visual em tela dividida?", a: "Um treino grátis no navegador com a tela dividida ao meio: à esquerda, um alvo sobe e desce; à direita, outro vai e volta na altura do meio. Você tenta acompanhar os dois com os olhos sem perder nenhum. Não é preciso clicar." },
  { q: "Dá para olhar para dois alvos ao mesmo tempo?", a: "O olho só foca com nitidez um ponto por vez. Você pode manter o olhar no centro e perceber os dois lados com a visão periférica, ou alternar o olhar entre os alvos; o que funciona melhor varia de pessoa para pessoa. Existem pesquisas sobre o acompanhamento de vários objetos em movimento (Pylyshyn & Storm, 1988; Alvarez & Cavanagh, 2005), mas este exercício não reproduz esses experimentos nem mede nada." },
  { q: "Por que os dois alvos não viram ao mesmo tempo?", a: "O alvo da esquerda se move na vertical e o da direita na horizontal, em trajetos de tamanhos diferentes e com a mesma velocidade. Os dois ritmos andam separados, e quem se prende a um perde o outro com facilidade." },
  { q: "O que acontece se eu ocultar as linhas-guia?", a: "Somem a linha divisória central e os dois eixos de movimento discretos. O movimento dos alvos não muda, mas sem referência fica mais fácil perdê-los. Experimente depois de dominar a versão básica." },
  { q: "Sempre perco o mesmo alvo. O que fazer?", a: "Diminua a velocidade, mostre as linhas-guia e preste atenção de propósito no lado mais fraco. O exercício não registra qual alvo você perde: anote por conta própria e compare com as mesmas configurações." },
  { q: "O exercício mede os movimentos dos meus olhos?", a: "Não. O navegador não sabe para onde você está olhando; ele só conhece a posição em que o alvo é desenhado, as suas configurações e a posição do ponteiro. Não é preciso clicar nem tocar; o resultado é um registro de prática para você mesmo." },
  { q: "Tem pontuação ou nota?", a: "Não há nota. No fim, a tela mostra a porcentagem de tempo com o ponteiro sobre o alvo, a distância média e RMS do ponteiro ao centro do alvo, a duração, o multiplicador de velocidade e o total de sessões (salvo neste navegador). Isso mede o ponteiro, não os seus olhos. Se quiser contar quantas vezes perdeu o alvo, anote por conta própria." },
  { q: "Quais configurações existem?", a: "Duração de 30, 45, 60, 90 ou 120 segundos, velocidade de 0,5x a 9,0x e tamanho do alvo de 10 a 50 px. Também dá para ocultar as linhas-guia (divisória central e eixos), ligar velocidade aleatória, rastro, brilho, linhas de varredura, fundo claro ou escuro e trocar a cor do alvo. A tecla Esc encerra a sessão a qualquer momento." },
  { q: "Isso melhora a visão ou a mira?", a: "Não há garantia. É um exercício em que você acompanha um alvo em movimento com os olhos e não promete mira melhor em jogos de tiro. Compare as sessões na mesma tela e com as mesmas configurações." },
  { q: "A tela influencia o resultado?", a: "Sim. Taxa de atualização, brilho, contraste, tamanho da tela e distância mudam a forma como o alvo aparece (Woods et al., 2015). Compare apenas sessões feitas na mesma tela, no mesmo navegador e com as mesmas configurações." },
  { q: "Quanto tempo devo praticar?", a: "Algumas sessões de cerca de 60 segundos, de 5 a 10 minutos no total, com pausas. Pare na hora se sentir olhos cansados, secos ou doloridos, tontura, enjoo ou dor de cabeça." }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guide = {
  heading: "Rastreamento visual em tela dividida: guia",
  intro: [
    "O rastreamento visual em tela dividida é um treino grátis no navegador em que você acompanha dois alvos com os olhos ao mesmo tempo. A tela é dividida ao meio: à esquerda, um alvo sobe e desce na vertical; à direita, outro vai e volta na horizontal, na altura do meio. Cada um rebate no fim do seu trajeto.",
    "Depois da contagem 3-2-1, o alvo se move pelo tempo escolhido (30 a 120 segundos, padrão 60). Não é preciso clicar nem apertar nada; no fim, a tela mostra a distância do ponteiro ao alvo, não a posição dos seus olhos. Velocidade, tamanho do alvo, linhas-guia e velocidade aleatória ajustam a dificuldade.",
    "O navegador não registra para onde você olha. Trate o resultado como um registro de prática pessoal, baseado na posição do ponteiro.",
    "Compare sessões na mesma tela e à mesma distância; a taxa de atualização e o atraso de exibição influenciam a fluidez do alvo (Woods et al., 2015). Pare se sentir dor, tontura, enjoo ou visão embaçada persistente."
  ],
  benchmarks: {
    title: "Etapas de prática como referência",
    headers: ["Etapa", "Configuração", "Objetivo"],
    rows: [
      ["1", "1,0x, linhas-guia visíveis", "Pegar o ritmo dos dois alvos"],
      ["2", "1,0x a 2,0x", "Não perder nenhum alvo por 60 segundos"],
      ["3", "2,0x ou mais", "Manter os dois lados à vista mesmo rápido"],
      ["4", "Linhas-guia ocultas", "Manter as duas posições sem referência"],
      ["5", "Velocidade aleatória", "Acompanhar mesmo com mudanças de velocidade"]
    ],
    note: "Etapas de prática da SkillDrills apenas como orientação. Não são normas oficiais, estatísticas de usuários nem percentis.",
  },
  techniques: {
    title: "Dicas de prática",
    items: [
      { name: "Olhar no centro, atenção nos dois lados", desc: "Fixar um alvo costuma fazer você perder o outro. Tente manter o olhar perto do centro e perceber os dois movimentos ao mesmo tempo.", tips: "Se ficar difícil demais, diminua a velocidade e mostre de novo as linhas-guia." },
      { name: "Dois ritmos separados", desc: "Vertical à esquerda, horizontal à direita, em trajetos de tamanhos diferentes: as viradas não acontecem juntas. Trate-os como dois ritmos separados.", tips: "Quando um alvo virar, confira onde está o outro." },
      { name: "Uma dificuldade por vez", desc: "Aumente a velocidade, oculte a linha ou ligue a velocidade aleatória, mas nunca tudo ao mesmo tempo.", tips: "Compare apenas sessões com as mesmas configurações." },
      { name: "Sessões curtas com pausas", desc: "Pratique em blocos de 5 a 10 minutos, pisque e olhe para longe entre as sessões. Mais tempo não é necessariamente melhor.", tips: "Pare imediatamente se sentir dor ou tontura." }
    ],
  },
  steps: [
    { title: "Escolher as configurações", text: "Selecione duração, velocidade e tamanho do alvo. Para começar: 60 segundos, 1,0x e linhas-guia visíveis." },
    { title: "Olhar para o centro", text: "Sente-se confortavelmente, ombros relaxados, com o olhar perto do centro da tela." },
    { title: "Acompanhar os dois alvos", text: "Mantenha à vista o alvo da esquerda (sobe e desce) e o da direita (vai e volta) ao mesmo tempo." },
    { title: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte as linhas-guia ou ligue a velocidade aleatória, uma coisa por vez." }
  ],
  audience: "Quem quer praticar de forma leve, como um jogo, a divisão da atenção entre dois alvos em movimento.",
  faqs,
  sources: pickSources('pylyshyn1988', 'alvarez2005', 'green2006', 'cavanagh2005', 'woods2015', 'leigh2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Exercício de seguimento ocular lento" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimento de alvo com evasão" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supressão de imagem fantasma" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Exercício ocular em oito" },
    { href: "/pt/drills/visual-tracking/sine-wave-pursuit", label: "Rastreamento em onda senoidal" }
  ],
};

export default function SplitScreenTrackingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SplitScreenTrackingClient
        copy={{
          title: "Rastreamento visual em tela dividida",
          subtitle: "Acompanhe dois alvos em áreas separadas",
          description: "No rastreamento visual em tela dividida, você acompanha dois alvos ao mesmo tempo: à esquerda, um sobe e desce; à direita, outro vai e volta. O navegador não registra seu olhar: é um registro de prática, não um teste.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
