import StaircaseStepClient from '@/app/drills/visual-tracking/staircase-step/StaircaseStepClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/staircase-step';
const title = "Rastreamento ocular vertical | SkillDrills";
const description = "Rastreamento ocular vertical: um alvo desce a tela em zigue-zague, degrau por degrau, e depois sobe. Treino grátis no navegador, velocidade ajustável.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento ocular vertical", "acompanhar alvo que sobe e desce", "exercício para os olhos online", "rastreamento ocular treino", "degraus zigue-zague"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/staircase-step') },
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
    { '@type': 'ListItem', position: 3, name: "Rastreamento ocular vertical", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Rastreamento ocular vertical",
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
  name: "Rastreamento ocular vertical",
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
  name: "Rastreamento ocular vertical",
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
  name: "Como fazer o rastreamento ocular vertical",
  description: "Quatro passos para acompanhar com os olhos um alvo que desce e sobe em degraus.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Escolher as configurações", text: "Comece com 60 segundos, 1,0x e a linha visível.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Ajustar a postura", text: "Sente-se confortavelmente e mantenha a cabeça reta.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Seguir só com os olhos", text: "Acompanhe o alvo pelos degraus em zigue-zague, descendo e depois subindo.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte a linha ou ligue a velocidade aleatória, uma coisa por vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "O que é o rastreamento ocular vertical?", a: "Um alvo vai da esquerda para a direita em zigue-zague enquanto desce em degraus, do alto (cerca de 15% da altura) até embaixo (cerca de 85%). No fim, ele vira e sobe pelo mesmo caminho. Você o acompanha só com os olhos; não é preciso clicar." },
  { q: "Como é exatamente o trajeto?", a: "Uma linha em zigue-zague que liga 8 pontos, com 7 mudanças de direção, e desce um pouco a cada trecho. Em 1,0x, cada trajeto leva cerca de 4,5 segundos; multiplicadores maiores aceleram o alvo na mesma proporção." },
  { q: "Movimentos verticais são mais difíceis de acompanhar?", a: "Estudos mostram que as mesmas pessoas costumam acompanhar movimentos verticais com menos precisão do que horizontais (Rottach et al., 1996). O exercício não mede isso, mas você pode comparar por conta própria a descida e a subida." },
  { q: "Por que perco o alvo nos cantos?", a: "No canto, a direção muda de uma vez e os olhos ficam um instante para trás. O acompanhamento suave começa com um pequeno atraso depois que o movimento começa (Lisberger, 2010). Diminua a velocidade, mostre a linha e antecipe o próximo canto." },
  { q: "O que acontece se eu ocultar a linha?", a: "O trajeto em zigue-zague some. O alvo se move do mesmo jeito, mas você precisa prever sozinho a próxima virada." },
  { q: "O exercício mede os movimentos dos meus olhos?", a: "Não. O navegador não sabe para onde você está olhando; ele só conhece a posição em que o alvo é desenhado, as suas configurações e a posição do ponteiro. Não é preciso clicar nem tocar; o resultado é um registro de prática para você mesmo." },
  { q: "Tem pontuação ou nota?", a: "Não há nota. No fim, a tela mostra a porcentagem de tempo com o ponteiro sobre o alvo, a distância média e RMS do ponteiro ao centro do alvo, a duração, o multiplicador de velocidade e o total de sessões (salvo neste navegador). Isso mede o ponteiro, não os seus olhos. Se quiser contar quantas vezes perdeu o alvo, anote por conta própria." },
  { q: "Quais configurações existem?", a: "Duração de 30, 45, 60, 90 ou 120 segundos, velocidade de 0,5x a 9,0x e tamanho do alvo de 10 a 50 px. Também dá para ocultar a linha (trajeto em zigue-zague), ligar velocidade aleatória, rastro, brilho, linhas de varredura, fundo claro ou escuro e trocar a cor do alvo. A tecla Esc encerra a sessão a qualquer momento." },
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
  heading: "Rastreamento ocular vertical: guia",
  intro: [
    "O rastreamento ocular vertical é um treino grátis no navegador: um alvo vai da esquerda para a direita em zigue-zague enquanto desce, degrau por degrau, do alto até a parte de baixo da tela. Lá embaixo, ele volta a subir pelo mesmo caminho. O trajeto liga 8 pontos e ocupa cerca de 60% da largura da tela.",
    "Depois da contagem 3-2-1, o alvo se move pelo tempo escolhido (30 a 120 segundos, padrão 60). Não é preciso clicar nem apertar nada; no fim, a tela mostra a distância do ponteiro ao alvo, não a posição dos seus olhos. Em 1,0x, cada trajeto leva cerca de 4,5 segundos.",
    "O navegador não registra para onde você olha. Trate o resultado como um registro de prática pessoal, não como teste de visão ou de atenção.",
    "Compare sessões na mesma tela e à mesma distância; a taxa de atualização e o atraso de exibição influenciam a fluidez do alvo (Woods et al., 2015). Pare se sentir dor, tontura, enjoo ou visão embaçada persistente."
  ],
  benchmarks: {
    title: "Etapas de prática como referência",
    headers: ["Etapa", "Configuração", "Objetivo"],
    rows: [
      ["1", "1,0x, linha visível", "Conhecer o caminho de descida e subida"],
      ["2", "1,0x a 2,0x", "Acompanhar sem atraso nas viradas"],
      ["3", "2,0x ou mais", "Ficar no alvo mesmo rápido"],
      ["4", "Linha oculta", "Prever a próxima virada"],
      ["5", "Velocidade aleatória", "Acompanhar mesmo com mudanças de velocidade"]
    ],
    note: "Etapas de prática da SkillDrills apenas como orientação. Não são normas de exame de vista, estatísticas de usuários nem percentis.",
  },
  techniques: {
    title: "Dicas de prática",
    items: [
      { name: "Mantenha a cabeça parada", desc: "Se a cabeça ou o pescoço acompanham, os olhos quase não trabalham. Mantenha a cabeça reta e siga o alvo só com os olhos.", tips: "Relaxe os ombros e o pescoço." },
      { name: "Antecipe as viradas", desc: "Em cada canto do trajeto, o alvo muda de direção de repente. Pense na nova direção um pouco antes.", tips: "Perdeu o alvo? Não corra atrás dele, retome na próxima virada." },
      { name: "Compare descida e subida", desc: "Observe se a descida ou a subida parece mais fácil para você.", tips: "Anote o que perceber e compare com as mesmas configurações." },
      { name: "Sessões curtas com pausas", desc: "Pratique em blocos de 5 a 10 minutos, pisque e olhe para longe entre as sessões. Mais tempo não é necessariamente melhor.", tips: "Pare imediatamente se sentir dor ou tontura." }
    ],
  },
  steps: [
    { title: "Escolher as configurações", text: "Comece com 60 segundos, 1,0x e a linha visível." },
    { title: "Ajustar a postura", text: "Sente-se confortavelmente e mantenha a cabeça reta." },
    { title: "Seguir só com os olhos", text: "Acompanhe o alvo pelos degraus em zigue-zague, descendo e depois subindo." },
    { title: "Aumentar aos poucos", text: "Quando ficar fácil, aumente a velocidade ou oculte a linha ou ligue a velocidade aleatória, uma coisa por vez." }
  ],
  audience: "Quem quer praticar de forma leve, como um jogo, o acompanhamento de um alvo que muda de direção e de altura.",
  faqs,
  sources: pickSources('buttner1997', 'rottach1996', 'ke2013', 'collewijn1984', 'lisberger2010', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Exercício de seguimento ocular lento" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimento de alvo com evasão" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supressão de imagem fantasma" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Exercício ocular em oito" },
    { href: "/pt/drills/visual-tracking/sine-wave-pursuit", label: "Rastreamento em onda senoidal" }
  ],
};

export default function StaircaseStepPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StaircaseStepClient
        copy={{
          title: "Rastreamento ocular vertical",
          subtitle: "Desce degrau por degrau e depois sobe",
          description: "Neste rastreamento ocular vertical, um alvo desce a tela em zigue-zague, degrau por degrau, e depois sobe. O navegador não registra seu olhar: é um registro de prática, não um teste.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
