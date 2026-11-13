import PredictivePursuitClient from '@/app/drills/visual-tracking/predictive-pursuit/PredictivePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/predictive-pursuit';
const title = "Rastreamento visual preditivo | SkillDrills";
const description = "Exercício grátis: a cada 2,2 s, aprox., o alvo desliza para um novo ponto e abranda até parar. Sem a linha, antecipe o ponto de chegada pelo movimento.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento visual preditivo", "rastreamento preditivo", "antecipar trajetória", "exercício para os olhos online", "rastreamento ocular", "exercício ocular grátis"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/predictive-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'pt_BR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "Início", item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: "Treinos", item: 'https://skilldrills.online/pt/drills' },
    { '@type': 'ListItem', position: 3, name: "Rastreamento Visual", item: 'https://skilldrills.online/pt/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "Rastreamento visual preditivo", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Rastreamento visual preditivo",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  inLanguage: 'pt',
  dateModified: '2026-11-12',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Como praticar o rastreamento visual preditivo",
  description: "Quatro passos para seguir um alvo até ao seu novo ponto de paragem e antecipá-lo.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "Postura confortável",
    "text": "Sente-se a uma distância confortável do ecrã e relaxe ombros e pescoço."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "Começar com a linha",
    "text": "Mantenha primeiro visível a linha que liga o alvo ao ponto de chegada e siga-o até parar."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Antecipar a paragem",
    "text": "Ative Hide Line e estime, pela direção e velocidade de partida, onde o alvo vai parar."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "Um ajuste de cada vez",
    "text": "Quando ficar fácil, aumente a velocidade ou ative Ocultar linha e Velocidade aleatória, um de cada vez."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "Como se move o alvo no rastreamento visual preditivo?",
    "a": "À velocidade 1,0x, um ponto aleatório do ecrã passa a ser o novo destino a cada 2,2 segundos, aproximadamente. O alvo arranca depressa nessa direção, abranda aos poucos, para em cerca de 1,5 segundos e espera pelo destino seguinte. Não há oclusão nem desaparecimento. É um exercício do olhar no navegador."
  },
  {
    "q": "O que se antecipa, exatamente?",
    "a": "O ponto onde o alvo para. Por defeito, uma linha liga o alvo a esse ponto, que fica visível. Com Hide Line, a linha desaparece e tem de deduzir o ponto de paragem pela direção de partida e pela travagem."
  },
  {
    "q": "O que mudam a velocidade e o Random Speed?",
    "a": "Mais velocidade acelera tanto o movimento como a mudança de destino. Random Speed faz a velocidade oscilar sempre e torna irregular o intervalo até ao destino seguinte."
  },
  {
    "q": "O exercício mede os movimentos dos olhos ou dá pontuação?",
    "a": "Não. O navegador não sabe para onde está a olhar e não há cliques nem deteção de acertos. Não há nota. Se seguir o alvo com o ponteiro, o ecrã final mostra quanto tempo ele esteve sobre o alvo e a distância média ao centro; é o ponteiro que é medido, não os seus olhos. Manter o olhar onde o exercício pede depende de si."
  },
  {
    "q": "Que definições posso mudar?",
    "a": "Depois de uma contagem 3-2-1, a sessão dura 30, 45, 60, 90 ou 120 segundos (60 por defeito). Pode ajustar a velocidade de 0,5x a 9,0x, o tamanho do alvo de 10 a 50 px, a cor, as opções Hide Line (ocultar linha), Random Speed (velocidade aleatória), Gaze Trail (rasto), Neon Glow e Scanlines, e fundo claro ou escuro. A tecla Esc termina a sessão a qualquer momento."
  },
  {
    "q": "Isto melhora a minha visão ou a minha mira?",
    "a": "Não há garantia. É uma ferramenta para praticar o olhar sobre um alvo e não promete melhor acuidade nem melhor pontaria. Compare as sessões no mesmo ecrã e com as mesmas definições."
  },
  {
    "q": "Quanto tempo devo praticar?",
    "a": "Algumas sessões de 1 a 2 minutos com pausas chegam. Se os olhos ficarem cansados ou secos, pisque e olhe ao longe; pare se sentir dor, tontura, náusea ou dor de cabeça."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "Rastreamento visual preditivo: guia",
  "intro": [
    "O rastreamento visual preditivo consiste em seguir com o olhar um alvo que desliza para um novo ponto e abranda até parar, antecipando onde ele vai ficar. À velocidade 1,0x é escolhido um destino aleatório a cada 2,2 segundos, aproximadamente; sem a linha de destino, tem de o deduzir pelo movimento.",
    "O seguimento suave dos olhos arranca com um pequeno atraso depois de o movimento começar; a antecipação ajuda a reduzir esse atraso (Kowler, 1989; Barnes, 2008). O exercício repete situações em que essa antecipação é útil.",
    "O navegador só conhece a posição onde o alvo é desenhado e as suas definições, não o sítio para onde os seus olhos realmente olham. Só é mostrada a distância do ponteiro ao alvo, não uma medida dos olhos: compare também o seu conforto e concentração com o mesmo ecrã, distância e definições. A taxa de atualização e o atraso do ecrã também mudam a forma como o movimento aparece (Woods et al., 2015)."
  ],
  "benchmarks": {
    "title": "Etapas de prática (referência SkillDrills)",
    "headers": [
      "Etapa",
      "Objetivo de prática"
    ],
    "rows": [
      [
        "Etapa 1",
        "1,0x, linha visível, seguir o trajeto e a paragem"
      ],
      [
        "Etapa 2",
        "Olhar para o ponto de chegada antes do alvo"
      ],
      [
        "Etapa 3",
        "Hide Line ativo: antecipar só pela partida"
      ],
      [
        "Etapa 4",
        "Juntar velocidade ou Random Speed, um de cada vez"
      ]
    ],
    "note": "Etapas de prática sugeridas pela SkillDrills: não são normas de teste, estatísticas de utilizadores nem percentis."
  },
  "techniques": {
    "title": "Dicas de execução",
    "items": [
      {
        "name": "Observar bem a partida",
        "desc": "Concentre-se na direção e na velocidade no instante em que o alvo arranca. A travagem permite estimar o ponto de paragem.",
        "tips": "Se for difícil sem linha, volte a mostrá-la e reaprenda o padrão."
      },
      {
        "name": "Olhar para o alvo, não para o cursor",
        "desc": "O rato não é usado. Pouse a mão e siga apenas com os olhos.",
        "tips": "Confirme de vez em quando que a cabeça e o pescoço não acompanham o movimento."
      },
      {
        "name": "Dificultar uma coisa de cada vez",
        "desc": "Aumente separadamente a velocidade, Ocultar linha e Velocidade aleatória. Se o conforto se perder, volte à definição anterior.",
        "tips": "Depois de mudar uma definição, não compare diretamente com sessões antigas."
      },
      {
        "name": "Sessões curtas e pausas",
        "desc": "Entre sessões curtas, pisque e olhe ao longe. Mais tempo não é melhor.",
        "tips": "Pare de imediato se sentir dor ou tontura."
      }
    ]
  },
  "steps": [
    "Sente-se a uma distância confortável do ecrã e relaxe ombros e pescoço.",
    "Comece com 30 a 60 segundos, velocidade 1,0x e linha visível.",
    "Quando o alvo arrancar, estime o ponto de paragem pela direção e pela travagem e siga-o até lá.",
    "Depois aumente a velocidade ou ative Ocultar linha e Velocidade aleatória, um de cada vez."
  ],
  "audience": "Quem quer praticar, de forma simples, antecipar onde um alvo em movimento vai parar."
},
  faqs,
  sources: pickSources('robinson1965', 'kowler1989', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Perseguição ocular suave contínua" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Perseguição de alvo evasivo" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Estabilidade da fixação ocular" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Treino ocular em oito" },
    { href: "/pt/drills/visual-tracking/momentum-teleport-pursuit", label: "Rastreamento de alvo com salto" }
  ],
};

export default function PortuguesePredictivePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PredictivePursuitClient copy={{"title": "Rastreamento visual preditivo", "subtitle": "Antecipar onde o alvo vai parar", "description": "Rastreamento visual preditivo: a cada 2,2 segundos, aprox. (a 1,0x), o alvo desliza para um novo ponto e abranda até parar. Antecipe onde ele fica; Hide Line esconde a linha de destino. Sem cliques; o ecrã final mostra a distância do ponteiro ao alvo, e o navegador não regista o seu olhar."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
