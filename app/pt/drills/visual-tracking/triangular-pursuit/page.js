import TriangularPursuitClient from '@/app/drills/visual-tracking/triangular-pursuit/TriangularPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/triangular-pursuit';
const title = "Rastreamento visual triangular | SkillDrills";
const description = "Rastreamento visual triangular: um alvo dá voltas em um triângulo com três cantos marcados, sempre no mesmo sentido. Treino grátis, velocidade ajustável.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento visual triangular", "exercício para os olhos triângulo", "rastreamento ocular treino", "exercício para os olhos online", "acompanhar alvo com os olhos"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/triangular-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Rastreamento visual triangular", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Rastreamento visual triangular",
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
  name: "Rastreamento visual triangular",
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
  name: "Rastreamento visual triangular",
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
  name: "Como fazer o rastreamento visual triangular",
  description: "Quatro passos para acompanhar com os olhos um alvo em uma trajetória triangular.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Escolher as configurações", text: "Comece com 60 segundos, 1,0x e a linha visível.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Ajustar a postura", text: "Sente-se confortavelmente e mantenha a cabeça reta.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Seguir o triângulo", text: "Acompanhe o alvo com os olhos pelos três cantos.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte a linha ou ligue a velocidade aleatória, uma coisa por vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "O que é o rastreamento visual triangular?", a: "Um alvo dá voltas sem parar em um triângulo com vértices no alto ao centro, embaixo à direita e embaixo à esquerda, sempre no mesmo sentido. Você acompanha com os olhos os dois lados inclinados e a base horizontal sem se perder nos cantos. Não é preciso clicar." },
  { q: "A velocidade é constante?", a: "Cada lado leva o mesmo tempo (cerca de 1,5 segundo em 1,0x), então a velocidade muda um pouco conforme o tamanho do lado. Em telas largas, a base é o lado mais longo e o alvo anda mais rápido nela. O multiplicador e a velocidade aleatória também alteram a velocidade." },
  { q: "Por que fico para trás ou passo do ponto nos cantos?", a: "No canto, a direção muda de uma vez. O acompanhamento suave não dá conta, e os olhos costumam alcançar o alvo com um salto rápido (sacada de correção) (de Brouwer et al., 2002). Diminua a velocidade e pense na nova direção logo antes do canto." },
  { q: "O que acontece se eu ocultar a linha?", a: "O contorno do triângulo some. O trajeto continua igual, mas você precisa lembrar sozinho onde ficam os cantos." },
  { q: "O exercício mede os movimentos dos meus olhos?", a: "Não. O navegador não sabe para onde você está olhando; ele só conhece a posição em que o alvo é desenhado e as suas configurações. Não é preciso clicar nem tocar; o resultado é um registro de prática para você mesmo." },
  { q: "Tem pontuação ou nota?", a: "Não. No fim, a tela mostra apenas a duração, o multiplicador de velocidade, se a velocidade aleatória estava ligada e o total de sessões (salvo neste navegador). Se quiser contar quantas vezes perdeu o alvo, anote por conta própria." },
  { q: "Quais configurações existem?", a: "Duração de 30, 45, 60, 90 ou 120 segundos, velocidade de 0,5x a 9,0x e tamanho do alvo de 10 a 50 px. Também dá para ocultar a linha (contorno do triângulo), ligar velocidade aleatória, rastro, brilho, linhas de varredura, fundo claro ou escuro e trocar a cor do alvo. A tecla Esc encerra a sessão a qualquer momento." },
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
  heading: "Rastreamento visual triangular: guia",
  intro: [
    "O rastreamento visual triangular é um treino grátis no navegador: um alvo percorre um triângulo sem parar, do alto no centro para baixo à direita, depois para baixo à esquerda e de volta ao alto. Trechos retos se alternam com mudanças bruscas de direção nos cantos.",
    "Cada lado leva o mesmo tempo (cerca de 1,5 segundo em 1,0x); por isso, na base, que é mais longa, o alvo anda um pouco mais rápido. Depois da contagem 3-2-1, o alvo se move pelo tempo escolhido (30 a 120 segundos, padrão 60). Não é preciso clicar nem apertar nada, e não há pontuação.",
    "O navegador não registra para onde você olha. Trate o resultado como um registro de prática pessoal, não como teste de visão ou de atenção.",
    "Compare sessões na mesma tela e à mesma distância; a taxa de atualização e o atraso de exibição influenciam a fluidez do alvo (Woods et al., 2015). Pare se sentir dor, tontura, enjoo ou visão embaçada persistente."
  ],
  benchmarks: {
    title: "Etapas de prática como referência",
    headers: ["Etapa", "Configuração", "Objetivo"],
    rows: [
      ["1", "1,0x, linha visível", "Conhecer os cantos e o sentido da volta"],
      ["2", "1,0x a 2,0x", "Virar nos cantos sem atraso"],
      ["3", "2,0x ou mais", "Ficar no alvo mesmo em voltas rápidas"],
      ["4", "Linha oculta", "Prever o próximo canto sem contorno"],
      ["5", "Velocidade aleatória", "Acompanhar mesmo com mudanças de velocidade"]
    ],
    note: "Etapas de prática da SkillDrills apenas como orientação. Não são normas de exame de vista, estatísticas de usuários nem percentis.",
  },
  techniques: {
    title: "Dicas de prática",
    items: [
      { name: "Siga os lados com calma", desc: "Nos trechos retos, olhe para o centro do alvo e mova os olhos de forma regular.", tips: "Cabeça e pescoço ficam parados." },
      { name: "Pense na próxima direção antes do canto", desc: "Ter o próximo lado em mente reduz o atraso e a passada do ponto no canto.", tips: "Perdeu o alvo? Retome no próximo canto." },
      { name: "Acostume-se à base mais rápida", desc: "A base é o lado mais longo, e é nela que o alvo anda mais rápido.", tips: "Ligue a velocidade aleatória só quando essa diferença ficar familiar." },
      { name: "Sessões curtas com pausas", desc: "Pratique em blocos de 5 a 10 minutos, pisque e olhe para longe entre as sessões. Mais tempo não é necessariamente melhor.", tips: "Pare imediatamente se sentir dor ou tontura." }
    ],
  },
  steps: [
    { title: "Escolher as configurações", text: "Comece com 60 segundos, 1,0x e a linha visível." },
    { title: "Ajustar a postura", text: "Sente-se confortavelmente e mantenha a cabeça reta." },
    { title: "Seguir o triângulo", text: "Acompanhe o alvo com os olhos pelos três cantos." },
    { title: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte a linha ou ligue a velocidade aleatória, uma coisa por vez." }
  ],
  audience: "Quem quer praticar de forma leve, como um jogo, o acompanhamento de um alvo em retas e cantos bem marcados.",
  faqs,
  sources: pickSources('debrouwer2002', 'heinen2005', 'orbandexivry2007', 'bennett2006', 'barnes2008', 'woods2015'),
};

export default function TriangularPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TriangularPursuitClient
        copy={{
          title: "Rastreamento visual triangular",
          subtitle: "Retas e cantos bem marcados",
          description: "No rastreamento visual triangular, você acompanha com os olhos um alvo que dá voltas em um triângulo. O navegador não registra seu olhar: é um registro de prática, não um teste.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
