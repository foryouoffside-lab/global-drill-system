import CrossBodyMovementClient from '@/app/drills/physical/coordination/cross-body-movement/CrossBodyMovementClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/pt/drills/physical/coordination/cross-body-movement';
const TITLE = "Coordenação Mão-Olho: Trace Linhas com o Mouse | SkillDrills";
const DESCRIPTION = "Coordenação Mão-Olho no navegador: leve o cursor de um nó na borda da tela até o nó do lado oposto sem sair de um corredor estreito. Rodadas de 45 s, grátis.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "coordenação mão-olho",
  "teste de coordenação mão olho",
  "traçar diagonais com o mouse",
  "jogo de corredor com o mouse"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/cross-body-movement'),
  },
  openGraph: {
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    "q": "Como funciona o jogo de Coordenação Mão-Olho?",
    "a": "Leve o cursor ao nó ciano numa borda da tela; a conexão começa sem clique. Se você alcançar o nó magenta do lado oposto sem sair do corredor em volta da linha, ganha pontos."
  },
  {
    "q": "O que acontece se eu sair do corredor?",
    "a": "A tentativa termina e aparece um novo par de nós. O multiplicador de combo volta a 1,0x, mas pontos e tempo restante ficam."
  },
  {
    "q": "O que muda com o nível?",
    "a": "A tolerância do corredor (quanto você pode se afastar da linha) cai de 10 px para 4 px, o raio dos nós de 16 px para 8 px, e os nós vão para as bordas, deixando o trajeto mais longo. Os pontos base por acerto sobem de 10 para 40."
  },
  {
    "q": "Como a pontuação é calculada?",
    "a": "Cada nó alcançado vale os pontos base do nível vezes o multiplicador de combo, que sobe com acertos seguidos até 3,0x."
  },
  {
    "q": "Quanto dura uma rodada?",
    "a": "Exatamente 45 segundos; o nível recomeça em 1 a cada rodada."
  },
  {
    "q": "Este jogo avalia a coordenação de uma criança?",
    "a": "Não. É um jogo de prática de controle do mouse, não uma avaliação de desenvolvimento ou de habilidades motoras e não substitui acompanhamento profissional."
  },
  {
    "q": "Funciona no celular?",
    "a": "O jogo foi feito para mouse; o ideal é jogar no computador. A tecla Esc encerra a rodada em andamento."
  },
  {
    "q": "É grátis?",
    "a": "Sim, sem instalação e sem cadastro. Os recordes ficam salvos só no seu navegador."
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills Início", item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: "Treino de Agilidade com o Mouse", item: 'https://skilldrills.online/pt/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "Coordenação Mão-Olho", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Coordenação Mão-Olho",
  description: DESCRIPTION,
  url: PAGE_URL,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Navegador atual com HTML5 Canvas e mouse",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  inLanguage: 'pt',
  dateModified: '2026-11-10',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt',
  dateModified: '2026-11-10',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const guide = {
  "heading": "Coordenação Mão-Olho: como jogar e dicas",
  "intro": [
    "Coordenação Mão-Olho é um jogo gratuito no navegador em que você guia o cursor com precisão por um corredor estreito. Toque o nó ciano numa borda da tela e siga pela linha até o nó magenta do lado oposto. Na prática, é traçar diagonais sem sair do corredor; se sair, a tentativa termina e um novo par de nós aparece.",
    "Cada rodada dura 45 segundos e o nível começa em 1. Conforme o nível sobe, a tolerância do corredor cai de 10 px para 4 px, o raio dos nós de 16 px para 8 px, e os nós vão para as bordas. A dificuldade segue a ideia da lei de Fitts (Fitts, 1954): quanto mais longo o trajeto e menor o alvo, mais difícil o movimento. É um jogo de prática de controle do mouse, não uma avaliação de coordenação nem uma terapia."
  ],
  "techniques": {
    "title": "Dicas para não sair do corredor",
    "items": [
      {
        "name": "Olhe o alvo primeiro",
        "desc": "Veja onde está o nó do outro lado antes de tocar o nó inicial. Assim a direção já sai certa.",
        "tips": "A conexão começa ao tocar o nó, então planeje a direção enquanto se aproxima dele."
      },
      {
        "name": "Ritmo constante e reto",
        "desc": "Movimentos bruscos fazem o cursor tremer no fim e sair do corredor. Mantenha um ritmo calmo e uniforme.",
        "tips": "Com 4 px de tolerância nos níveis altos, um pouco menos de velocidade ajuda a manter a sequência."
      },
      {
        "name": "Freie perto do alvo",
        "desc": "Aproximar rápido e terminar devagar perto do alvo (Woodworth, 1899) ajuda a acertar nós pequenos.",
        "tips": "Pouco antes do nó, solte a tensão do punho e chegue com suavidade."
      }
    ]
  },
  "steps": [
    "Inicie a rodada e espere a contagem regressiva.",
    "Veja onde está o nó magenta de destino.",
    "Leve o cursor até o nó ciano inicial.",
    "Siga pelo corredor até o nó magenta."
  ],
  "audience": "Jogadores e usuários de computador que querem praticar movimentos longos e retos com o mouse.",
  faqs: faqItems,
  sources: pickSources('carey1996', 'fitts1954', 'woodworth1899'),
};

export default function CrossBodyMovementPagePt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CrossBodyMovementClient
        copy={{
  "title": "Coordenação Mão-Olho",
  "subtitle": "Atravesse a tela sem sair do corredor",
  "rulesTitle": "Regras: Coordenação Mão-Olho",
  "rules": [
    {
      "title": "Toque o nó inicial",
      "text": "Leve o cursor até o nó ciano na borda da tela. A conexão começa na hora, sem clicar."
    },
    {
      "title": "Fique no corredor",
      "text": "Siga pelo corredor em volta da linha entre os dois nós até o nó magenta do outro lado."
    },
    {
      "title": "Chegue ao alvo",
      "text": "Ao alcançar o nó magenta sem sair do corredor, você pontua e a sequência de acertos cresce."
    },
    {
      "title": "Saiu do corredor",
      "text": "Ao sair do corredor a tentativa termina e um novo par de nós aparece. Só o multiplicador volta a 1,0x; pontos e tempo ficam."
    }
  ],
  "aboutTitle": "Sobre Coordenação Mão-Olho",
  "aboutHeading": "Atravessar a tela por um corredor estreito",
  "aboutText": "Neste jogo de 45 segundos você liga dois nós que aparecem nas bordas esquerda e direita da tela. A altura deles é aleatória, então o caminho pode ser diagonal ou horizontal. Com o nível, a tolerância do corredor cai de 10 px para 4 px, os nós ficam menores e se aproximam das bordas, deixando o trajeto mais longo.",
  "hudLabels": {
    "score": "Pontuação",
    "timeLeft": "Tempo Restante",
    "bestScore": "Melhor Pontuação",
    "bestCombo": "Melhor Combo"
  }
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/cross-body-movement" />
    </>
  );
}
