import SineWavePursuitClient from '@/app/drills/visual-tracking/sine-wave-pursuit/SineWavePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/sine-wave-pursuit';
const title = "Rastreamento ocular senoidal | SkillDrills";
const description = "Exercício grátis: siga com o olhar um alvo que vai e volta da esquerda para a direita, subindo e descendo numa trajetória senoidal fixa. Velocidade ajustável.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento ocular senoidal", "trajetória senoidal", "rastreamento ocular", "exercício para os olhos online", "seguimento suave", "exercício ocular grátis"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/sine-wave-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Rastreamento ocular senoidal", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Rastreamento ocular senoidal",
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
  name: "Como fazer o rastreamento ocular senoidal",
  description: "Quatro passos para seguir suavemente um alvo que vai e volta numa curva em onda.",
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
    "name": "Ver a curva",
    "text": "No início, mantenha a curva visível e observe a onda que o alvo vai percorrer."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Seguir sem quebras",
    "text": "Siga o alvo sem interrupções enquanto sobe e desce na curva e inverte o sentido nas margens."
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
    "q": "Como se move o alvo no rastreamento ocular senoidal?",
    "a": "O alvo vai e volta com velocidade horizontal constante entre cerca de 5% e 95% da largura do ecrã (cerca de 220 píxeis por segundo a 1,0x) e segue uma curva senoidal fixa com amplitude de cerca de 28% da altura do ecrã. Nas margens inverte o sentido e percorre a mesma curva de volta. É um exercício do olhar no navegador, não um exame de visão."
  },
  {
    "q": "Porque é que a velocidade vertical muda sempre?",
    "a": "A velocidade horizontal é constante, mas a inclinação da curva varia. No meio da onda o movimento vertical é mais rápido; nos picos e vales parece parar por um instante."
  },
  {
    "q": "O que mudam o Hide Line e o Random Speed?",
    "a": "Hide Line esconde a curva: segue então de memória ou só pelo movimento. Random Speed faz a velocidade oscilar continuamente. A trajetória em si não muda."
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
  "heading": "Rastreamento ocular senoidal: guia",
  "intro": [
    "O rastreamento ocular senoidal consiste em seguir com o olhar um alvo que vai e volta da esquerda para a direita, subindo e descendo numa curva senoidal fixa. A velocidade horizontal é constante e o alvo inverte o sentido nas margens do ecrã.",
    "O seguimento suave dos olhos acompanha um alvo lento quase à mesma velocidade, mas atrasa-se com mais facilidade quando o alvo acelera (Robinson, 1965). Aqui varia a velocidade e acompanha um movimento que muda entre os picos e o meio da onda.",
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
        "1,0x, curva visível, seguir sem interrupções"
      ],
      [
        "Etapa 2",
        "Não perder o alvo nas inversões"
      ],
      [
        "Etapa 3",
        "Subir a velocidade e seguir o meio rápido da onda"
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
        "name": "Apanhar o ritmo da onda",
        "desc": "O alvo abranda um instante nos picos e acelera no meio. Conhecer este ritmo ajuda a segui-lo sem quebras.",
        "tips": "Se ficar atrás do alvo, baixe a velocidade."
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
    "Siga o alvo sem interrupções enquanto ele vai e volta na curva em onda.",
    "Depois aumente a velocidade ou ative Ocultar linha e Velocidade aleatória, um de cada vez."
  ],
  "audience": "Quem quer praticar, de forma simples, seguir com o olhar um alvo numa curva regular."
},
  faqs,
  sources: pickSources('stark1962', 'robinson1965', 'rashbass1961', 'bahill1980', 'barnes2008', 'woods2015'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Exercício de seguimento ocular lento" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Rastreamento com mudanças de direção" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimento de alvo evasivo" },
    { href: "/pt/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supressão de imagens residuais" },
    { href: "/pt/drills/visual-tracking/infinity-pursuit", label: "Exercício ocular em oito" },
    { href: "/pt/drills/visual-tracking/momentum-teleport-pursuit", label: "Rastreamento de alvo com salto" }
  ],
};

export default function PortugueseSineWavePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SineWavePursuitClient copy={{"title": "Rastreamento ocular senoidal", "subtitle": "Seguir um alvo numa trajetória em onda", "description": "Rastreamento ocular senoidal: o alvo vai e volta da esquerda para a direita, subindo e descendo numa curva em onda fixa. Hide Line esconde a curva. Sem cliques nem pontuação; o navegador não regista o seu olhar."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
