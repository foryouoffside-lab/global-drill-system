import ZigZagPathPursuitClient from '@/app/drills/visual-tracking/zig-zag-path-pursuit/ZigZagPathPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/zig-zag-path-pursuit';
const title = "Rastreamento visual em zigue-zague | SkillDrills";
const description = "Rastreamento visual em zigue-zague: um alvo sobe e desce em curvas fechadas, da esquerda para a direita e de volta. Treino grátis no navegador.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento visual em zigue-zague", "exercício para os olhos zigue-zague", "rastreamento ocular treino", "exercício para os olhos online", "acompanhar alvo com os olhos"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/zig-zag-path-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Rastreamento visual em zigue-zague", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Rastreamento visual em zigue-zague",
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
  name: "Rastreamento visual em zigue-zague",
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
  name: "Rastreamento visual em zigue-zague",
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
  name: "Como fazer o rastreamento visual em zigue-zague",
  description: "Quatro passos para acompanhar com os olhos um alvo em uma trajetória em zigue-zague.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Escolher as configurações", text: "Comece com 60 segundos, 1,0x e a linha visível.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Ajustar a postura", text: "Sente-se confortavelmente e mantenha a cabeça reta.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Seguir o zigue-zague", text: "Acompanhe o alvo com os olhos em todas as curvas, na ida e na volta.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte a linha ou ligue a velocidade aleatória, uma coisa por vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "O que é o rastreamento visual em zigue-zague?", a: "Um alvo sobe e desce entre a parte de cima (cerca de 20% da altura) e a de baixo (cerca de 80%) em 7 curvas fechadas, da borda esquerda até a direita, e depois volta pelo mesmo caminho. Você o acompanha só com os olhos; não é preciso clicar." },
  { q: "Qual a diferença para o rastreamento visual triangular?", a: "No triângulo, o alvo gira sempre no mesmo sentido por três cantos. No zigue-zague, as curvas fechadas vêm uma atrás da outra e, na borda, o sentido de todo o percurso se inverte. Em 1,0x, cada trajeto leva cerca de 4,5 segundos." },
  { q: "E para o rastreamento ocular vertical?", a: "No rastreamento ocular vertical, o alvo vai de um lado para o outro enquanto desce. Aqui, ele sobe e desce enquanto avança para a direita, então cada trecho é principalmente vertical." },
  { q: "Por que meu olhar passa do alvo nas curvas?", a: "Na curva, a direção muda de uma vez. O acompanhamento suave não dá conta e os olhos costumam corrigir com um salto rápido (de Brouwer et al., 2002). Diminua a velocidade, mostre a linha e antecipe a próxima curva." },
  { q: "O que acontece se eu ocultar a linha?", a: "O trajeto em zigue-zague some. O alvo se move do mesmo jeito, mas você precisa prever sozinho a próxima curva." },
  { q: "O exercício mede os movimentos dos meus olhos?", a: "Não. O navegador não sabe para onde você está olhando; ele só conhece a posição em que o alvo é desenhado, as suas configurações e a posição do ponteiro. Não é preciso clicar nem tocar; o resultado é um registro de prática para você mesmo." },
  { q: "Tem pontuação ou nota?", a: "Não há nota. No fim, a tela mostra a porcentagem de tempo com o ponteiro sobre o alvo, a distância média e RMS do ponteiro ao centro do alvo, a duração, o multiplicador de velocidade e o total de sessões (salvo neste navegador). Isso mede o ponteiro, não os seus olhos. Se quiser contar quantas vezes perdeu o alvo, anote por conta própria." },
  { q: "Quais configurações existem?", a: "Duração de 30, 45, 60, 90 ou 120 segundos, velocidade de 0,5x a 9,0x e tamanho do alvo de 10 a 50 px. Também dá para ocultar a linha (trajeto em zigue-zague), ligar velocidade aleatória, rastro, brilho, linhas de varredura, fundo claro ou escuro e trocar a cor do alvo. A tecla Esc encerra a sessão a qualquer momento." },
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
  heading: "Rastreamento visual em zigue-zague: guia",
  intro: [
    "O rastreamento visual em zigue-zague é um treino grátis no navegador: um alvo sobe e desce entre a parte de cima e a de baixo da tela enquanto avança da borda esquerda até a direita. Ao chegar à direita, volta pelo mesmo caminho. O trajeto liga 8 pontos com 7 curvas fechadas.",
    "Depois da contagem 3-2-1, o alvo se move pelo tempo escolhido (30 a 120 segundos, padrão 60). Não é preciso clicar nem apertar nada; no fim, a tela mostra a distância do ponteiro ao alvo, não a posição dos seus olhos. Em 1,0x, cada trajeto leva cerca de 4,5 segundos.",
    "O navegador não registra para onde você olha. Trate o resultado como um registro de prática pessoal, baseado na posição do ponteiro.",
    "Compare sessões na mesma tela e à mesma distância; a taxa de atualização e o atraso de exibição influenciam a fluidez do alvo (Woods et al., 2015). Pare se sentir dor, tontura, enjoo ou visão embaçada persistente."
  ],
  benchmarks: {
    title: "Etapas de prática como referência",
    headers: ["Etapa", "Configuração", "Objetivo"],
    rows: [
      ["1", "1,0x, linha visível", "Conhecer a posição e o ritmo das curvas"],
      ["2", "1,0x a 2,0x", "Acompanhar sem atraso nas curvas"],
      ["3", "2,0x ou mais", "Ficar no alvo mesmo no vaivém rápido"],
      ["4", "Linha oculta", "Prever a próxima curva"],
      ["5", "Velocidade aleatória", "Acompanhar mesmo com mudanças de velocidade"]
    ],
    note: "Etapas de prática da SkillDrills apenas como orientação. Não são normas oficiais, estatísticas de usuários nem percentis.",
  },
  techniques: {
    title: "Dicas de prática",
    items: [
      { name: "Não balance a cabeça", desc: "Com os grandes movimentos de sobe e desce, a cabeça tende a acompanhar. Mantenha-a reta e siga só com os olhos.", tips: "Relaxe os ombros e o pescoço." },
      { name: "Antecipe as curvas", desc: "Pouco antes de cada curva, já pense na direção oposta.", tips: "Perdeu o alvo? Retome no trecho seguinte." },
      { name: "Prepare-se para a volta na borda", desc: "Nas bordas esquerda e direita, o sentido de todo o percurso se inverte.", tips: "Pense no caminho de volta pouco antes da borda." },
      { name: "Sessões curtas com pausas", desc: "Pratique em blocos de 5 a 10 minutos, pisque e olhe para longe entre as sessões. Mais tempo não é necessariamente melhor.", tips: "Pare imediatamente se sentir dor ou tontura." }
    ],
  },
  steps: [
    { title: "Escolher as configurações", text: "Comece com 60 segundos, 1,0x e a linha visível." },
    { title: "Ajustar a postura", text: "Sente-se confortavelmente e mantenha a cabeça reta." },
    { title: "Seguir o zigue-zague", text: "Acompanhe o alvo com os olhos em todas as curvas, na ida e na volta." },
    { title: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte a linha ou ligue a velocidade aleatória, uma coisa por vez." }
  ],
  audience: "Quem quer praticar de forma leve, como um jogo, o acompanhamento de um alvo em mudanças rápidas de direção.",
  faqs,
  sources: pickSources('debrouwer2002', 'krauzlis2004', 'orbandexivry2007', 'bennett2006', 'barnes2008', 'woods2015'),
};

export default function ZigZagPathPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ZigZagPathPursuitClient
        copy={{
          title: "Rastreamento visual em zigue-zague",
          subtitle: "Curvas fechadas para cima e para baixo",
          description: "No rastreamento visual em zigue-zague, um alvo sobe e desce em curvas fechadas, da esquerda para a direita e de volta. O navegador não registra seu olhar: é um registro de prática, não um teste.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
