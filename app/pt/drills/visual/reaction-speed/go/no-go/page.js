import ChromaSyncClient from '@/app/drills/visual/reaction-speed/go/no-go/ChromaSyncClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste Go/No-Go online grátis | Controle inibitório | SkillDrills",
  description: "Teste Go/No-Go grátis no navegador: clique rápido no verde e não clique no vermelho. Treina o controle inibitório e conta erros de comissão e omissão. Não é diagnóstico.",
  keywords: [
    "teste go no go",
    "teste Go/No-Go online",
    "tarefa Go/No-Go",
    "controle inibitório",
    "controle inibitório teste",
    "inibição de resposta",
    "jogo de impulsividade",
    "erro de comissão e omissão"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste Go/No-Go online grátis | Controle inibitório | SkillDrills",
    description: "Clique no verde, segure no vermelho. Teste Go/No-Go grátis no navegador para treinar o controle inibitório. Não é diagnóstico.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste Go/No-Go online grátis | Controle inibitório | SkillDrills",
    description: "Verde: clique. Vermelho: não clique. Teste Go/No-Go grátis no navegador."
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/go/no-go'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Catálogo de Treinos", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Treino Visual", "item": "https://skilldrills.online/pt/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Velocidade de Reação", "item": "https://skilldrills.online/pt/drills/visual/reaction-speed" },
    { "@type": "ListItem", "position": 5, "name": "Teste Go/No-Go", "item": "https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Inhibitory_control"],
  "name": "Teste Go/No-Go (controle inibitório)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
  "description": "Versão para navegador da tarefa Go/No-Go: clicar no sinal verde Go e não clicar no sinal vermelho No-Go. Conta erros de comissão, omissões e tempo de reação. Ferramenta de treino.",
  "featureList": [
    "Tempo de reação medido em milissegundos com performance.now()",
    "Tempo de exibição cai de cerca de 600 ms para no mínimo 100 ms conforme o nível",
    "Erros de comissão e omissões contados separadamente",
    "Resultados guardados só no navegador (LocalStorage)"
  ],
  "dateModified": "2026-11-08"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste Go/No-Go online grátis | Controle inibitório | SkillDrills",
  "alternateName": "Go/No-Go Pro",
  "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go",
  "dateModified": "2026-11-08",
  "description": "Teste Go/No-Go online grátis: clique no verde e segure no vermelho.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador atual com suporte a HTML5 Canvas.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Controle inibitório, menos erros de comissão, conferir a cor antes de clicar"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Teste Go/No-Go (treino de controle inibitório)",
  "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go",
  "description": "Jogo de navegador: clique no verde, pare no vermelho.",
  "genre": ["Action", "Brain Game", "Reaction Speed"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como fazer o teste Go/No-Go",
  "dateModified": "2026-11-08",
  "description": "A versão para navegador da tarefa Go/No-Go em quatro passos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Olhe para o centro da tela",
      "text": "Mantenha o olhar no centro, onde os círculos aparecem, com o dedo e o mouse relaxados.",
      "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Sinal verde Go: clique na hora",
      "text": "Quando aparecer um círculo verde, clique ou toque antes que ele suma (+150 pontos × combo). O teclado não é aceito.",
      "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Sinal vermelho No-Go: não clique",
      "text": "Quando aparecer um círculo vermelho, espere ele sumir sem clicar (+100 pontos). Clicar sem círculo na tela ou clicar sem parar também conta como erro.",
      "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Confira a cor mesmo quando acelerar",
      "text": "Com o nível e o combo, o tempo de exibição cai até 100 ms. Mantenha o hábito de reconhecer a cor antes de clicar.",
      "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/go/no-go#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é o teste Go/No-Go?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É uma tarefa em que você responde rápido a um sinal frequente (Go) e segura a resposta diante de um sinal raro (No-Go). A psicologia usa esse tipo de tarefa para estudar o controle inibitório. Esta página é uma versão de treino no navegador: clique no círculo verde e não clique no vermelho."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona o teste Go/No-Go?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depois de \"Iniciar Treino\", a partida começa com 45 segundos. Círculo verde no centro: clique ou toque. Círculo vermelho: espere ele sumir. Cada acerto soma 2 segundos (máximo de 60). Cerca de 70% dos sinais são verdes e 30% vermelhos. Funciona só com mouse ou toque, sem teclado."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre erro de comissão e omissão?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Erro de comissão é clicar no vermelho No-Go ou quando não há círculo na tela. Omissão é deixar um círculo verde Go sumir sem clicar. O primeiro mostra como você freia a resposta; o segundo aponta mais para falhas de atenção ou lentidão."
      }
    },
    {
      "@type": "Question",
      "name": "Por que eu clico no vermelho mesmo vendo a cor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Como o verde aparece muito mais, clicar vira hábito. Pelo modelo de Logan e Cowan (1984), um processo de iniciar e um de parar disputam uma corrida; a resposta só é bloqueada se o de parar chegar primeiro. Quanto menor o tempo de exibição, menos tempo sobra para frear."
      }
    },
    {
      "@type": "Question",
      "name": "Ajuda em FPS como Valorant ou CS2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conferir a cor antes de clicar lembra o momento de separar aliado de inimigo antes de atirar. Mas a tarefa não tem mira, movimento, som nem leitura de mapa. Não há garantia de melhora no jogo."
      }
    },
    {
      "@type": "Question",
      "name": "Por que meus resultados variam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O resultado depende da tela, do mouse, do cansaço e da concentração. Jogue várias rodadas no mesmo aparelho e compare suas pontuações."
      }
    },
    {
      "@type": "Question",
      "name": "O controle inibitório melhora com treino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quem repete a mesma tarefa costuma melhorar nela. Se isso passa para o dia a dia ou para outros jogos, a pesquisa não mostra resultados consistentes, e varia de pessoa para pessoa. Compare suas pontuações sempre nas mesmas condições."
      }
    },
    {
      "@type": "Question",
      "name": "A taxa de atualização do monitor muda o resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muda. Uma tela de 60 Hz só mostra um quadro novo a cada 16,7 ms, uma de 240 Hz a cada 4,2 ms, e mouse e touch também têm atraso (Woods et al., 2015). Compare seus próprios resultados no mesmo aparelho e navegador."
      }
    },
    {
      "@type": "Question",
      "name": "Meus resultados são enviados para algum lugar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pontuação e o histórico ficam salvos no seu navegador (LocalStorage). Se você apagar os dados do navegador, os resultados antigos podem sumir."
      }
    }
  ]
};

const goNoGoGuide = {
  heading: "Treine o controle inibitório com o teste Go/No-Go",
  intro: [
    "No teste Go/No-Go você responde aos sinais frequentes e se segura nos sinais raros. Não basta clicar rápido: é preciso não clicar na hora certa. É isso que o diferencia de um teste de reflexo simples.",
    "Nesta versão para navegador aparece no centro um círculo verde (Go) ou vermelho (No-Go). Verde: clique ou toque. Vermelho: espere. Clicar sem círculo ou clicar sem parar também conta como erro. Conforme o nível sobe, o tempo de exibição cai de cerca de 600 ms para no mínimo 100 ms.",
    "A ideia das tarefas de escolha vem dos estudos de tempo de reação de Donders (1868); a corrida entre iniciar e parar foi modelada por Logan e Cowan (1984). A pontuação daqui é um resultado de treino que inclui tela, mouse e navegador.",
    "A medição usa performance.now() no navegador. A atualização da tela e o atraso do mouse ou do toque entram no resultado (Woods et al., 2015), então compare pontuações no mesmo aparelho. Os dados ficam no navegador deste aparelho."
  ],
  benchmarks: {
    title: "Referências de treino para a taxa de erros (escala própria deste drill)",
    headers: ["Nível", "Taxa de erros", "Pontos e combo", "Como ler"],
    rows: [
      ["Avançado", "abaixo de 2,0%", "16.000+ pts / combo 30+", "Confere a cor mesmo com exibição muito curta"],
      ["Sólido", "2,0–4,9%", "11.000–15.999 pts / combo 20+", "Poucos erros; dá para subir o ritmo aos poucos"],
      ["Médio", "5,0–9,9%", "6.500–10.999 pts / combo 12+", "Às vezes clica no vermelho quando o ritmo aumenta"],
      ["Em evolução", "10,0–18,0%", "3.000–6.499 pts / combo 6+", "Clica antes de ver a cor; priorize precisão, não velocidade"],
      ["Iniciante", "acima de 18,0%", "abaixo de 3.000 pts / combo < 6", "Primeiro aprenda a parar no vermelho e a não clicar sem parar"]
    ],
    note: "Esta tabela é uma escala de treino da SkillDrills, não um padrão científico nem uma média por idade. Cansaço, concentração e tela mudam os resultados."
  },
  techniques: {
    title: "Dicas para errar menos no teste Go/No-Go",
    items: [
      {
        name: "Veja a cor, depois clique",
        desc: "O sinal é a cor, não o surgimento do círculo. Quem clica no primeiro brilho acaba clicando no vermelho também.",
        tips: "No começo, aceite ser um pouco mais lento e só clique quando tiver certeza do verde. Acelere quando os erros caírem."
      },
      {
        name: "Deixe o dedo relaxado",
        desc: "Esperar com o botão meio apertado impede de frear a tempo.",
        tips: "Apoie o dedo de leve no mouse ou na tela, sem pressionar."
      },
      {
        name: "Não clique no ritmo",
        desc: "Uma sequência de verdes cria um ritmo de clique, e os erros sobem quando o vermelho aparece (Robertson et al., 1997).",
        tips: "Trate cada sinal como novo. Não clique sem círculo; se clicar sem parar, o círculo deixa de aparecer."
      },
      {
        name: "Mantenha as mesmas condições",
        desc: "Com exibição muito curta, a atualização da tela e o atraso do mouse aparecem na pontuação (Woods et al., 2015).",
        tips: "Mesmo monitor, navegador, mouse e horário; depois compare taxa de erros e média."
      }
    ]
  },
  steps: [
    "Clique em \"Iniciar Treino\": a partida começa com 45 segundos.",
    "Olhe para o centro da tela.",
    "Círculo verde Go: clique ou toque antes que ele suma.",
    "Círculo vermelho No-Go: espere ele sumir sem clicar.",
    "No fim, veja a taxa de erros, a reação média e o nível alcançado."
  ],
  audience: "Para quem quer fazer o teste Go/No-Go online e treinar, além da velocidade, a capacidade de não clicar: gamers, atletas e curiosos.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('donders1868', 'logan1984', 'robertson1997', 'woods2015'),
  related: [
    { href: "/pt/drills/visual/reaction-speed/light-reaction", label: "Teste de reflexo" },
    { href: "/pt/drills/reaction-speed", label: "Jogos de reflexo" },
    { href: "/pt/drills/visual/depth-perception/distance-judgment", label: "Percepção de Profundidade e Distância" },
    { href: "/pt/drills/visual/tracking-accuracy/moving-target", label: "Interceptação de Alvo Móvel" },
    { href: "/pt/drills/visual/tracking-accuracy/multiple-targets", label: "Rastreamento de Múltiplos Objetos" },
    { href: "/pt/drills/visual/visual-recognition/entropic-grid", label: "Busca em Grade Entrópica" }
  ]
};

export default function ChromaSyncPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <ChromaSyncClient copy={{ title: "Teste Go/No-Go (controle inibitório)", subtitle: "Círculo verde: clique. Círculo vermelho: não clique. Grátis no navegador." }} />
      <DrillGuide guide={goNoGoGuide} />
      <RelatedDrills />
    </>
  );
}
