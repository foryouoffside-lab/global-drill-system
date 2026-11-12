import ComplexPatternClient from '@/app/drills/physical/coordination/complex-pattern/ComplexPatternClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/pt/drills/physical/coordination/complex-pattern';
const TITLE = "Memorizar e Traçar Padrões com o Mouse | SkillDrills";
const DESCRIPTION = "Memorizar e Traçar Padrões: um caminho de 3 a 8 pontos aparece por instantes. Memorize e trace o caminho com o mouse. Rodadas de 45 s, grátis no navegador.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "memorizar e traçar padrões",
  "jogo de padrões",
  "traçar o caminho de memória",
  "jogo de caminhos com o mouse"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/complex-pattern'),
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
    "q": "Como funciona Memorizar e Traçar Padrões?",
    "a": "Um caminho aparece por pouco tempo e some. Segure o botão do mouse dentro do nó ciano, passe pelos pontos na ordem lembrada e solte no nó magenta. Em seguida o seu traço é comparado com o original."
  },
  {
    "q": "Como a semelhança é calculada?",
    "a": "O seu traço e o caminho original são divididos no mesmo número de pontos. A distância média até o ponto mais próximo (em pixels) é subtraída de 100. Se o início ou o fim ficar a mais de uns 45 px do nó, a tentativa conta como erro."
  },
  {
    "q": "O que muda com o nível?",
    "a": "O caminho passa de 3 para 8 pontos, o tempo de exibição cai de 2,0 para 0,6 segundo e a semelhança exigida sobe de 50% para 85%. A partir do nível 3 podem surgir caminhos em zigue-zague e, a partir do nível 4, em espiral."
  },
  {
    "q": "Errar tira pontos?",
    "a": "Não. Quem não atinge o mínimo só perde o multiplicador de combo (volta a 1,0x); pontos e tempo restante ficam. O multiplicador sobe com acertos seguidos até 3,0x."
  },
  {
    "q": "Quanto dura uma rodada?",
    "a": "Exatamente 45 segundos. O nível recomeça em 1 a cada rodada."
  },
  {
    "q": "É um teste de memória visual?",
    "a": "Não. É um jogo de prática sem diagnóstico nem valores de referência. Os testes de memória da SkillDrills ficam na categoria Memória."
  },
  {
    "q": "Funciona no celular?",
    "a": "O controle é por arrastar com o mouse; o ideal é jogar no navegador do computador."
  },
  {
    "q": "É grátis?",
    "a": "Sim, sem instalação e sem cadastro. Os recordes ficam salvos apenas no seu navegador."
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills Início", item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: "Treino de Agilidade com o Mouse", item: 'https://skilldrills.online/pt/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "Memorizar e Traçar Padrões", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Memorizar e Traçar Padrões",
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
  "heading": "Memorizar e Traçar Padrões: como jogar e dicas",
  "intro": [
    "Memorizar e Traçar Padrões é um jogo de padrões gratuito no navegador: um caminho aparece rapidamente, você o memoriza e depois traça o caminho de memória com o mouse. Quando o caminho some, comece no nó ciano, passe pelos pontos na ordem lembrada e solte o botão no nó magenta. A proximidade entre o seu traço e o original é calculada como semelhança em porcentagem.",
    "Cada rodada dura 45 segundos. O nível começa em 1 a cada rodada e sobe com pontos e sequências de acertos; perto do nível 15 o jogo chega a 8 pontos, 0,6 segundo de exibição e 85% de semelhança exigida. Como referência de dificuldade usamos o modelo de memória de trabalho com o seu componente visuoespacial (Baddeley & Hitch, 1974) e estudos que estimam a sua capacidade em cerca de quatro itens (Cowan, 2001). É um jogo de prática, não um teste de memória com diagnóstico ou valores de referência."
  ],
  "techniques": {
    "title": "Dicas para traçar com mais precisão",
    "items": [
      {
        "name": "Memorize formas, não pontos",
        "desc": "A partir de 5 pontos, divida o caminho em duas ou três formas maiores, como um N ou um triângulo mais uma reta, em vez de guardar cada ponto.",
        "tips": "Durante a exibição, olhe primeiro onde ficam o início e o fim; o resto guarde como contorno."
      },
      {
        "name": "Acerte o início e o fim",
        "desc": "Começar a mais de uns 45 px do nó inicial ou soltar fora do nó final conta como erro, mesmo que a forma esteja certa.",
        "tips": "Antes de arrastar, confira se o cursor está dentro do nó ciano."
      },
      {
        "name": "Desacelere nas curvas",
        "desc": "Rápido nas retas e mais devagar perto dos cantos: assim você passa menos do ponto.",
        "tips": "Um traço contínuo e de ritmo constante costuma dar mais semelhança do que desenhar com pressa."
      }
    ]
  },
  "steps": [
    "Inicie a rodada e espere a contagem regressiva.",
    "Memorize a forma e a ordem do caminho exibido.",
    "Quando o caminho sumir, pressione o botão do mouse dentro do nó ciano.",
    "Passe pelos pontos na ordem lembrada e solte no nó magenta."
  ],
  "audience": "Quem quer praticar guardar uma forma vista por instantes e reproduzi-la com o mouse com precisão.",
  faqs: faqItems,
  sources: pickSources('baddeley1974', 'cowan2001', 'lashley1951', 'woodworth1899'),
};

export default function ComplexPatternPagePt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComplexPatternClient
        copy={{
  "title": "Memorizar e Traçar Padrões",
  "subtitle": "Memorize o caminho e trace com o mouse",
  "rulesTitle": "Regras: Memorizar e Traçar Padrões",
  "rules": [
    {
      "title": "Memorize o caminho",
      "text": "Um caminho de pontos e linhas aparece por pouco tempo. Guarde a forma e a ordem antes que ele suma."
    },
    {
      "title": "Arraste do início",
      "text": "Pressione o botão do mouse dentro do nó ciano, passe por todos os pontos e solte no nó magenta."
    },
    {
      "title": "Semelhança mínima",
      "text": "Se o traço atingir a semelhança exigida (50% no começo, até 85% depois) e começar e terminar nos nós certos, o padrão conta."
    },
    {
      "title": "Sem perda de pontos",
      "text": "Se não atingir o mínimo, só o multiplicador de combo volta a 1,0x. Pontos e os 45 segundos não são descontados."
    }
  ],
  "aboutTitle": "Sobre Memorizar e Traçar Padrões",
  "aboutHeading": "Veja, memorize e trace",
  "aboutText": "Neste jogo um caminho aparece por instantes e depois some; você o redesenha de memória arrastando o mouse. No início o caminho tem 3 pontos e fica visível por 2 segundos; com o nível ele chega a 8 pontos, o tempo de exibição cai para 0,6 segundo e surgem formas em zigue-zague e espiral.",
  "hudLabels": {
    "getReady": "PREPARE-SE",
    "points": "Pontos",
    "accuracy": "Precisão Média",
    "traced": "Traçados",
    "missed": "Erros",
    "peakLevel": "Nível Máx",
    "playAgain": "Jogar Novamente"
  }
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/complex-pattern" />
    </>
  );
}
