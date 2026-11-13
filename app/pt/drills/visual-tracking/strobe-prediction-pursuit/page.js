import StrobePredictionPursuitClient from '@/app/drills/visual-tracking/strobe-prediction-pursuit/StrobePredictionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/strobe-prediction-pursuit';
const title = "Treino visual estroboscópico | SkillDrills";
const description = "Treino visual estroboscópico: um alvo rebate nas bordas da tela e some em intervalos regulares. Preveja onde ele está. Treino grátis, não é exame de vista.";

export const metadata = {
  title,
  description,
  keywords: ["treino visual estroboscópico", "treino estroboscópico", "alvo que pisca", "prever trajetória exercício", "rastreamento ocular treino"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/strobe-prediction-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'pt_BR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "Início", item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: "Rastreamento visual", item: 'https://skilldrills.online/pt/drills/visual-tracking' },
    { '@type': 'ListItem', position: 3, name: "Treino visual estroboscópico", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Treino visual estroboscópico",
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
  name: "Treino visual estroboscópico",
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
  name: "Treino visual estroboscópico",
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
  name: "Como fazer o treino visual estroboscópico",
  description: "Quatro passos para acompanhar um alvo que some em intervalos e prever a posição dele.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Escolher as configurações", text: "Comece com 60 segundos, 1,0x e o contorno visível.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Ler o movimento", text: "Na fase visível, acompanhe a direção e a velocidade do alvo.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Atravessar a fase invisível", text: "Quando o alvo some, continue movendo o olhar na direção esperada.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte o contorno ou ligue a velocidade aleatória, uma coisa por vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "O que é o treino visual estroboscópico?", a: "Um exercício no navegador com um único alvo que se move em linha reta e rebate nas bordas da tela. Ele aparece por cerca de dois terços de cada ciclo e fica escondido um terço. Como continua andando mesmo invisível, você prevê onde ele vai reaparecer." },
  { q: "O que o alvo faz enquanto está invisível?", a: "Continua na mesma direção e velocidade. Com a linha visível, um contorno discreto marca a posição. Se você ocultar a linha, o contorno também some e você segue apenas a sua previsão." },
  { q: "O ritmo das piscadas muda?", a: "O ciclo é contado em quadros exibidos e fica mais curto com o multiplicador de velocidade. Uma velocidade maior acelera, ao mesmo tempo, o movimento e as piscadas." },
  { q: "É o mesmo que treinar com óculos estroboscópicos?", a: "Não. Os estudos com óculos estroboscópicos (por exemplo, Appelbaum et al., 2011) usam óculos que bloqueiam todo o campo de visão em intervalos. Aqui, só um alvo na tela some e reaparece. Os resultados desses estudos não se aplicam a este exercício." },
  { q: "E se eu for sensível a luzes piscando?", a: "A tela inteira não pisca: só um alvo some e reaparece. Mesmo assim, se você já passou mal com luz piscando, evite este exercício e pare ao menor desconforto." },
  { q: "O exercício mede os movimentos dos meus olhos?", a: "Não. O navegador não sabe para onde você está olhando; ele só conhece a posição em que o alvo é desenhado e as suas configurações. Não é preciso clicar nem tocar; o resultado é um registro de prática para você mesmo." },
  { q: "Tem pontuação ou nota?", a: "Não há nota. No fim, a tela mostra quanto tempo o ponteiro ficou sobre o alvo e a distância média até o centro, separadas para as fases visível e oculta, além da duração, do multiplicador de velocidade e do total de sessões (salvo neste navegador). O que é medido é o ponteiro, não os seus olhos." },
  { q: "Quais configurações existem?", a: "Duração de 30, 45, 60, 90 ou 120 segundos, velocidade de 0,5x a 9,0x e tamanho do alvo de 10 a 50 px. Também dá para ocultar a linha (contorno na fase invisível), ligar velocidade aleatória, rastro, brilho, linhas de varredura, fundo claro ou escuro e trocar a cor do alvo. A tecla Esc encerra a sessão a qualquer momento." },
  { q: "Isso melhora a visão ou a mira?", a: "Não há garantia. É um exercício em que você acompanha um alvo em movimento com os olhos; não é exame de vista, não é tratamento e não promete mira melhor em jogos de tiro. Se sentir algum problema nos olhos, procure um oftalmologista." },
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
  heading: "Treino visual estroboscópico: guia",
  intro: [
    "O treino visual estroboscópico é um exercício grátis no navegador: um alvo se move em linha reta, rebate nas bordas da tela e some em intervalos regulares. Ele fica visível por cerca de dois terços de cada ciclo e escondido por cerca de um terço.",
    "Enquanto está invisível, o alvo continua na mesma direção e velocidade. Por padrão, um contorno discreto mostra a posição; se você ocultar a linha, o contorno também some. Depois da contagem 3-2-1, o alvo se move pelo tempo escolhido (30 a 120 segundos, padrão 60). Não é preciso clicar; se você seguir o alvo com o ponteiro, a tela final mostra a distância do ponteiro até o alvo.",
    "O navegador não registra para onde você olha. Trate o resultado como um registro de prática pessoal, não como teste de visão ou de atenção. Também não é um treino com óculos estroboscópicos, que bloqueiam todo o campo de visão.",
    "Compare sessões na mesma tela e à mesma distância; a taxa de atualização e o atraso de exibição influenciam a fluidez do alvo (Woods et al., 2015). Pare se sentir dor, tontura, enjoo ou visão embaçada persistente."
  ],
  benchmarks: {
    title: "Etapas de prática como referência",
    headers: ["Etapa", "Configuração", "Objetivo"],
    rows: [
      ["1", "1,0x, contorno visível", "Captar direção e velocidade antes de sumir"],
      ["2", "1,0x a 2,0x", "Estar no alvo assim que ele reaparece"],
      ["3", "2,0x ou mais", "Continuar prevendo mesmo com piscadas rápidas"],
      ["4", "Linha oculta", "Atravessar a fase invisível só com a previsão"],
      ["5", "Velocidade aleatória", "Ajustar a previsão a uma velocidade variável"]
    ],
    note: "Etapas de prática da SkillDrills apenas como orientação. Não são normas de exame de vista, estatísticas de usuários nem percentis.",
  },
  techniques: {
    title: "Dicas de prática",
    items: [
      { name: "Leia a direção enquanto o alvo aparece", desc: "Na fase visível, observe a direção e a velocidade do alvo.", tips: "Se ele sumir perto de uma borda, pense no rebote." },
      { name: "Não pare o olhar", desc: "Quando o alvo some, continue movendo o olhar com calma na direção esperada.", tips: "Quando ele reaparecer, compare a posição com a sua previsão." },
      { name: "Tire o contorno aos poucos", desc: "Pratique primeiro com o contorno e depois oculte a linha para que o contorno também suma.", tips: "Mude só uma configuração por sessão." },
      { name: "Sessões curtas com pausas", desc: "Pratique em blocos de 5 a 10 minutos, pisque e olhe para longe entre as sessões. Mais tempo não é necessariamente melhor.", tips: "Pare imediatamente se sentir dor ou tontura." }
    ],
  },
  steps: [
    { title: "Escolher as configurações", text: "Comece com 60 segundos, 1,0x e o contorno visível." },
    { title: "Ler o movimento", text: "Na fase visível, acompanhe a direção e a velocidade do alvo." },
    { title: "Atravessar a fase invisível", text: "Quando o alvo some, continue movendo o olhar na direção esperada." },
    { title: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte o contorno ou ligue a velocidade aleatória, uma coisa por vez." }
  ],
  audience: "Quem quer praticar de forma leve, como um jogo, o acompanhamento por previsão de um alvo que fica invisível por instantes.",
  faqs,
  sources: pickSources('appelbaum2011', 'bennett2007', 'mitroff2013', 'smith2016', 'woods2015', 'leigh2015'),
};

export default function StrobePredictionPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StrobePredictionPursuitClient
        copy={{
          title: "Treino visual estroboscópico",
          subtitle: "Preveja a posição quando o alvo some",
          description: "No treino visual estroboscópico, você acompanha um alvo que some em intervalos regulares e prevê a posição dele. O navegador não registra seu olhar: é um registro de prática, não um teste.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
