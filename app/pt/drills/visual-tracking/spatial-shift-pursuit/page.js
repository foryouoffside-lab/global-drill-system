import SpatialShiftPursuitClient from '@/app/drills/visual-tracking/spatial-shift-pursuit/SpatialShiftPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/spatial-shift-pursuit';
const title = "Rastreamento visual com mudança espacial | SkillDrills";
const description = "Exercício grátis: o alvo avança em linha reta, ressalta nas margens e muda de direção e velocidade sem aviso. Siga-o com o olhar sem o perder.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento visual com mudança espacial", "mudança de trajetória", "rastreamento ocular", "exercício para os olhos online", "seguir alvo em movimento", "exercício ocular grátis"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/spatial-shift-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'pt_PT', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "Início", item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: "Exercícios", item: 'https://skilldrills.online/pt/drills' },
    { '@type': 'ListItem', position: 3, name: "Rastreamento Visual", item: 'https://skilldrills.online/pt/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "Rastreamento visual com mudança espacial", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Rastreamento visual com mudança espacial",
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
  name: "Como fazer o rastreamento visual com mudança espacial",
  description: "Quatro passos para seguir um alvo que muda bruscamente de direção e velocidade.",
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
    "name": "Seguir as retas",
    "text": "Siga o alvo com calma enquanto avança em linha reta e ressalta nas margens do ecrã."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Reajustar após a mudança",
    "text": "Quando a direção e a velocidade mudarem de repente, reajuste o olhar ao novo movimento e continue."
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
    "q": "Como se move o alvo no rastreamento visual com mudança espacial?",
    "a": "O alvo avança em linha reta, ressalta nas margens e fica um pouco mais rápido a cada ressalto (cerca de 2%). Em momentos aleatórios muda, sem aviso, de direção e velocidade: o sentido horizontal e o vertical invertem-se ou não, e a velocidade é multiplicada por 0,8 a 1,3. Não há saltos nem movimento do ecrã. É um exercício do olhar, não um exame de visão."
  },
  {
    "q": "Com que frequência muda a trajetória?",
    "a": "Sem ritmo fixo, ao acaso, geralmente cerca de uma vez por segundo. Com Random Speed, a probabilidade de mudança duplica e a velocidade também oscila."
  },
  {
    "q": "Para que serve a linha no alvo?",
    "a": "Mostra a direção e a velocidade atuais. Com Hide Line desaparece, e tem de notar a mudança apenas pelo movimento do alvo."
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
  "heading": "Rastreamento visual com mudança espacial: guia",
  "intro": [
    "O rastreamento visual com mudança espacial consiste em seguir com o olhar um alvo que avança em linha reta, ressalta nas margens e muda de direção e velocidade sem aviso. As mudanças são aleatórias e frequentes; o alvo não salta e o ecrã não se mexe.",
    "Quando um alvo muda bruscamente de direção, o seguimento suave chega atrasado e juntam-se movimentos rápidos de correção (Robinson, 1965; Krauzlis, 2004). O exercício repete esses reajustes.",
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
        "1,0x, linha visível, reajustar após cada mudança"
      ],
      [
        "Etapa 2",
        "Quase não perder o alvo nas mudanças"
      ],
      [
        "Etapa 3",
        "Subir a velocidade e seguir mudanças mais rápidas"
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
        "name": "Não se antecipar demais",
        "desc": "Mesmo nas retas, conte com uma mudança a qualquer momento e mantenha o olhar no alvo. Olhar demasiado à frente faz perdê-lo na mudança.",
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
    "Quando a direção e a velocidade mudarem de repente, reajuste o olhar ao novo movimento e continue a seguir.",
    "Depois aumente a velocidade ou ative Ocultar linha e Velocidade aleatória, um de cada vez."
  ],
  "audience": "Quem quer praticar, de forma simples, seguir com o olhar movimentos imprevisíveis."
},
  faqs,
  sources: pickSources('krauzlis2004', 'findlay1999', 'robinson1965', 'rashbass1961', 'kahlon1996', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Exercício de seguimento ocular lento" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimento de alvo com evasão" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supressão de imagem fantasma" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Exercício ocular em oito" },
    { href: "/pt/drills/visual-tracking/sine-wave-pursuit", label: "Rastreamento em onda senoidal" }
  ],
};

export default function PortugueseSpatialShiftPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SpatialShiftPursuitClient copy={{"title": "Rastreamento visual com mudança espacial", "subtitle": "Seguir um alvo que muda de direção e velocidade sem aviso", "description": "Rastreamento visual com mudança espacial: o alvo avança em linha reta, ressalta e muda em momentos aleatórios de direção e velocidade. Hide Line esconde a linha de direção. Sem cliques nem pontuação; o navegador não regista o seu olhar."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
