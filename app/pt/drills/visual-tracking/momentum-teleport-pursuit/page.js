import MomentumTeleportPursuitClient from '@/app/drills/visual-tracking/momentum-teleport-pursuit/MomentumTeleportPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/momentum-teleport-pursuit';
const title = "Rastreamento de Alvo Teleportado | SkillDrills";
const description = "Exercício ocular grátis: o alvo avança em linha reta e teleporta-se a cada 1,2 s para um ponto aleatório, sem mudar de rumo. Reencontre-o com o olhar.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento de alvo teleportado", "alvo teleportado", "exercício para os olhos online", "sacadas exercício", "rastreamento visual", "exercício ocular grátis"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/momentum-teleport-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Rastreamento de Alvo Teleportado", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Rastreamento de Alvo Teleportado",
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
  name: "Como fazer o rastreamento de alvo teleportado",
  description: "Quatro passos para reencontrar um alvo que mudou de lugar e continuar a seguir o seu movimento na mesma direção.",
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
    "name": "Seguir o movimento",
    "text": "Siga o alvo com calma enquanto ele avança em linha reta e ressalta nas margens do ecrã."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Reencontrar após o salto",
    "text": "Quando o alvo se teleportar, leve o olhar de uma só vez até à nova posição e continue a segui-lo na mesma direção."
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
    "q": "Como funciona o rastreamento de alvo teleportado?",
    "a": "O alvo avança em linha reta com direção e velocidade constantes e ressalta nas margens. À velocidade 1,0x, teleporta-se cerca de cada 1,2 segundos para uma posição aleatória, mantendo a direção e a velocidade. Reencontra-o com o olhar e continua a segui-lo. É um exercício no navegador, não um exame de visão nem uma terapia."
  },
  {
    "q": "Dá para prever para onde o alvo vai saltar?",
    "a": "Não. A nova posição é aleatória em cada salto. O que se sabe é que, depois do salto, o alvo continua na mesma direção e à mesma velocidade. Uma linha curta mostra a direção do movimento; a opção Hide Line esconde-a."
  },
  {
    "q": "O que muda com mais velocidade?",
    "a": "O alvo fica mais rápido e salta mais vezes: cerca de cada 0,6 segundos a 2,0x. Com Random Speed, a velocidade oscila sempre e os saltos tornam-se irregulares."
  },
  {
    "q": "O exercício mede os movimentos dos olhos ou dá pontuação?",
    "a": "Não. O navegador não sabe para onde está a olhar e não há cliques nem deteção de acertos. No fim, a página mostra apenas valores do ponteiro (tempo sobre o alvo e distância ao centro), não dos olhos; apenas o número de sessões concluídas fica guardado neste navegador. Manter o olhar onde o exercício pede depende de si."
  },
  {
    "q": "Que definições posso mudar?",
    "a": "Depois de uma contagem 3-2-1, a sessão dura 30, 45, 60, 90 ou 120 segundos (60 por defeito). Pode ajustar a velocidade de 0,5x a 9,0x, o tamanho do alvo de 10 a 50 px, a cor, as opções Hide Line (ocultar linha), Random Speed (velocidade aleatória), Gaze Trail (rasto), Neon Glow e Scanlines, e fundo claro ou escuro. A tecla Esc termina a sessão a qualquer momento."
  },
  {
    "q": "Isto melhora a minha visão ou a minha mira?",
    "a": "Não há garantia. Não é um exame de visão nem uma terapia, mas uma ferramenta para praticar o olhar sobre um alvo. Não promete melhor acuidade nem melhor pontaria. Se notar algum problema nos olhos, consulte um profissional."
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
  "heading": "Rastreamento de Alvo Teleportado: guia",
  "intro": [
    "O rastreamento de alvo teleportado é um exercício no navegador em que reencontra com o olhar um alvo que muda de lugar de repente. O alvo avança em linha reta, ressalta nas margens e, à velocidade 1,0x, teleporta-se cerca de cada 1,2 segundos para um ponto aleatório, mantendo a direção e a velocidade.",
    "Acompanhar suavemente um alvo em movimento e levar o olhar depressa até um alvo distante (sacada) são descritos como movimentos oculares diferentes (Rashbass, 1961; Krauzlis, 2004). Aqui, os dois alternam constantemente.",
    "O navegador só conhece a posição onde o alvo é desenhado e as suas definições, não o sítio para onde os seus olhos realmente olham. Mostra apenas valores do ponteiro (tempo sobre o alvo e distância ao centro), nada sobre os olhos: compare antes o seu conforto e concentração com o mesmo ecrã, distância e definições. A taxa de atualização e o atraso do ecrã também mudam a forma como o movimento aparece (Woods et al., 2015)."
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
        "1,0x, linha de direção visível, reencontrar sem esforço"
      ],
      [
        "Etapa 2",
        "Após cada salto, encontrar o alvo num só olhar"
      ],
      [
        "Etapa 3",
        "Subir a velocidade e habituar-se a saltos mais frequentes"
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
        "name": "Um só movimento, depois seguir",
        "desc": "Depois de um salto, não procure por todo o ecrã: leve o olhar de uma vez até à nova posição e siga o alvo na mesma direção de antes.",
        "tips": "Se o perder muitas vezes, baixe a velocidade e mantenha a linha de direção visível."
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
    "Quando o alvo se teleportar, leve o olhar até à nova posição e continue a segui-lo na mesma direção.",
    "Depois aumente a velocidade ou ative Ocultar linha e Velocidade aleatória, um de cada vez."
  ],
  "audience": "Quem quer praticar, de forma simples, reencontrar com o olhar um alvo em movimento que muda de lugar de repente."
},
  faqs,
  sources: pickSources('rashbass1961', 'bahill1980', 'findlay1999', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Perseguição ocular suave contínua" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Perseguição evasiva reativa" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Estabilidade da fixação ocular" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Exercício ocular em oito" },
    { href: "/pt/drills/visual-tracking/predictive-pursuit", label: "Rastreamento ocular preditivo" }
  ],
};

export default function PortugueseMomentumTeleportPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <MomentumTeleportPursuitClient copy={{"title": "Rastreamento de Alvo Teleportado", "subtitle": "Reencontrar um alvo que salta mas mantém o rumo", "description": "Rastreamento de alvo teleportado: o alvo avança em linha reta e teleporta-se cerca de cada 1,2 segundos (a 1,0x) para um ponto aleatório, mantendo direção e velocidade. Sem cliques; no fim vê a distância do ponteiro ao alvo, mas o navegador não regista os seus olhos."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
