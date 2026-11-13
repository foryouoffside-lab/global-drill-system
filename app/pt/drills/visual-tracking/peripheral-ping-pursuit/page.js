import PeripheralPingPursuitClient from '@/app/drills/visual-tracking/peripheral-ping-pursuit/PeripheralPingPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/peripheral-ping-pursuit';
const title = "Visão Periférica e Fixação Central | SkillDrills";
const description = "Exercício grátis no navegador: mantenha o olhar na cruz central enquanto pontos piscam por instantes noutros sítios do ecrã. Note-os sem mexer os olhos.";

export const metadata = {
  title,
  description,
  keywords: ["visão periférica e fixação central", "visão periférica exercício", "fixação central", "exercício para os olhos online", "olhar fixo exercício", "perceção periférica"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/peripheral-ping-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Visão Periférica e Fixação Central", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Visão Periférica e Fixação Central",
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
  name: "Como praticar visão periférica com fixação central",
  description: "Quatro passos para manter o olhar na cruz central e notar os pontos que piscam na periferia.",
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
    "name": "Fixar a cruz",
    "text": "Quando a sessão começar, olhe para a cruz no centro do ecrã e mantenha o olhar aí."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Notar sem olhar",
    "text": "Quando um ponto piscar algures, note-o com o canto do olho, sem virar os olhos para ele."
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
    "q": "Como funciona o exercício de visão periférica e fixação central?",
    "a": "Há uma cruz fixa no centro do ecrã. Em posições aleatórias, aparece um ponto de cada vez que logo desaparece: cerca de 0,75 segundos à velocidade 1,0x, e o seguinte surge após uma pequena pausa. Os pontos não se movem. O objetivo é notá-los mantendo o olhar na cruz; não é preciso clicar. Não é um exame do campo visual."
  },
  {
    "q": "O que mudam a velocidade e o Hide Line?",
    "a": "Mais velocidade faz os pontos aparecerem mais vezes e durante menos tempo (no mínimo cerca de 0,25 segundos). Random Speed faz variar continuamente a frequência e a duração. Hide Line esconde a cruz, e passa a ter de manter o centro sem referência."
  },
  {
    "q": "Posso olhar para os pontos?",
    "a": "O sentido do exercício é manter o olhar no centro. O navegador não regista os seus olhos, por isso confirme sozinho se eles seguem os pontos. Se acontecer muitas vezes, baixe a velocidade."
  },
  {
    "q": "O exercício mede os movimentos dos olhos ou dá pontuação?",
    "a": "Não. O navegador não sabe para onde está a olhar e não há cliques nem deteção de acertos. Não existe pontuação: apenas o número de sessões concluídas fica guardado neste navegador. Manter o olhar onde o exercício pede depende de si."
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
  "heading": "Visão Periférica e Fixação Central: guia",
  "intro": [
    "Visão periférica e fixação central é um exercício no navegador em que mantém o olhar numa cruz no centro do ecrã e nota, sem mexer os olhos, pontos que piscam por instantes. Os pontos surgem um de cada vez em posições aleatórias e ficam visíveis cerca de 0,75 segundos à velocidade 1,0x.",
    "A visão central capta os detalhes para onde se olha; a visão periférica deteta mudanças à volta. Quando algo aparece de lado, os olhos tendem a saltar para lá (Findlay & Walker, 1999). Este exercício repete situações em que resiste a esse impulso.",
    "O navegador só conhece a posição onde o alvo é desenhado e as suas definições, não o sítio para onde os seus olhos realmente olham. Não há pontuação nem percentagem de precisão: compare antes o seu conforto e concentração com o mesmo ecrã, distância e definições. A taxa de atualização e o atraso do ecrã também mudam a forma como o movimento aparece (Woods et al., 2015)."
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
        "1,0x, cruz visível, olhar mantido no centro"
      ],
      [
        "Etapa 2",
        "Notar a maioria dos pontos sem olhar para eles"
      ],
      [
        "Etapa 3",
        "Subir a velocidade: pontos mais curtos e frequentes"
      ],
      [
        "Etapa 4",
        "Juntar Hide Line ou Random Speed, um de cada vez"
      ]
    ],
    "note": "Etapas de prática sugeridas pela SkillDrills: não são normas de teste, estatísticas de utilizadores nem percentis."
  },
  "techniques": {
    "title": "Dicas de execução",
    "items": [
      {
        "name": "Olhar no centro, atenção alargada",
        "desc": "Olhe para a cruz sem tensão e tenha consciência do ecrã inteiro. Não procure os pontos com os olhos.",
        "tips": "Se os olhos fugirem muitas vezes, baixe a velocidade e mantenha a cruz visível."
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
    "Mantenha o olhar na cruz e note os pontos que piscam com o canto do olho.",
    "Depois aumente a velocidade ou ative Ocultar linha e Velocidade aleatória, um de cada vez."
  ],
  "audience": "Quem quer praticar, de forma simples, perceber mudanças na periferia sem tirar os olhos do centro."
},
  faqs,
  sources: pickSources('posner1980', 'eriksen1986', 'wolfe1994', 'findlay1999', 'leigh2015', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Perseguição ocular suave contínua" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Perseguição evasiva reativa" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Estabilidade da fixação ocular" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Exercício ocular em oito" },
    { href: "/pt/drills/visual-tracking/momentum-teleport-pursuit", label: "Rastreamento de alvo deslocado" }
  ],
};

export default function PortuguesePeripheralPingPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PeripheralPingPursuitClient copy={{"title": "Visão Periférica e Fixação Central", "subtitle": "Olhar a cruz central e notar os pontos que piscam", "description": "Olhar fixo na cruz central: em posições aleatórias, pontos piscam cerca de 0,75 segundos (a 1,0x). Note-os sem mexer os olhos. Sem cliques nem pontuação; o navegador não regista o seu olhar."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
