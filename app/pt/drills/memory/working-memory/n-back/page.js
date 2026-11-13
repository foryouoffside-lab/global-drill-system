import NBackClient from '@/app/drills/memory/working-memory/n-back/NBackClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste N-Back online | Memória de trabalho | SkillDrills",
  description: "Teste N-Back online e grátis: diga se a letra na tela é igual à de N passos atrás. Começa no 3-back e sobe um nível a cada 8 acertos.",
  keywords: ['teste n-back', 'n back teste online', 'teste de memória de trabalho', 'memória de trabalho', '3-back', 'tarefa n-back'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste N-Back online | Memória de trabalho | SkillDrills",
    description: "Teste N-Back grátis no navegador: compare cada letra com a de N passos atrás e treine a memória de trabalho a partir do 3-back, sem cadastro.",
    type: "website",
    url: "https://skilldrills.online/pt/drills/memory/working-memory/n-back",
    siteName: "SkillDrills",
    locale: "pt_BR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Teste N-Back online | Memória de trabalho | SkillDrills",
    description: "Teste N-Back grátis no navegador: compare cada letra com a de N passos atrás e treine a memória de trabalho a partir do 3-back, sem cadastro.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/memory/working-memory/n-back",
    languages: getAlternateLanguages('/drills/memory/working-memory/n-back'),
  },
};

const appDescription = "Teste N-Back grátis no navegador: letras aparecem uma a uma e você indica se cada uma é igual à de N passos atrás. Começa no 3-back e sobe um nível a cada 8 acertos.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Treino de memória", "item": "https://skilldrills.online/pt/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Memória de trabalho", "item": "https://skilldrills.online/pt/drills/memory/working-memory" },
    { "@type": "ListItem", "position": 4, "name": "Teste N-Back", "item": "https://skilldrills.online/pt/drills/memory/working-memory/n-back" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste N-Back online (memória de trabalho)",
  "url": "https://skilldrills.online/pt/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Teste N-Back online (memória de trabalho)",
  "url": "https://skilldrills.online/pt/drills/memory/working-memory/n-back",
  "description": appDescription,
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Working Memory", "N-Back"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Teste N-Back online (memória de trabalho)",
  "url": "https://skilldrills.online/pt/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como fazer o teste N-Back",
  "description": "Quatro passos para comparar cada letra com a de N passos atrás.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/pt/drills/memory/working-memory/n-back#step-1",
      "name": "Memorizar as 3 primeiras letras",
      "text": "As 3 primeiras letras ainda não têm com o que ser comparadas: só memorize. Enquanto isso, o relógio não corre."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/pt/drills/memory/working-memory/n-back#step-2",
      "name": "Comparar com a letra de N passos atrás",
      "text": "A cada nova letra, confira se ela é igual à de exatamente N passos atrás (3 no início)."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/pt/drills/memory/working-memory/n-back#step-3",
      "name": "Escolher Igual ou Diferente",
      "text": "Clique ou toque em 'Igual' se for a mesma letra, senão em 'Diferente'. A janela de resposta começa em 2 segundos."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/pt/drills/memory/working-memory/n-back#step-4",
      "name": "Atualizar a lista na cabeça",
      "text": "Depois de cada resposta, descarte a letra mais antiga e acrescente a nova para manter sempre as últimas N."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona o teste N-Back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Letras aparecem uma de cada vez. Se a letra atual for igual à de exatamente N passos atrás, toque em 'Igual'; se não, em 'Diferente'. Cada acerto vale +150 pontos. As N primeiras letras são só para memorizar, e o relógio não corre nesse período."
      }
    },
    {
      "@type": "Question",
      "name": "Em que nível o teste começa e como ele sobe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O teste começa no 3-back. A cada 1.200 pontos (8 acertos) o nível sobe para 4-back, 5-back e assim por diante; a nova distância vale já a partir da próxima letra. Errar nunca faz o nível cair."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo tenho para responder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você tem 2 segundos por letra; a janela diminui 0,1 segundo a cada nível, até no mínimo 1,2 segundo. A sessão dura 45 segundos e o relógio fica parado enquanto você memoriza as N primeiras letras."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se eu errar ou não responder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você não perde pontos nem tempo. Erros e falta de resposta contam como falha na precisão e a próxima letra aparece. Cerca de uma letra em cada três é igual, então responder 'Diferente' é tão importante quanto."
      }
    },
    {
      "@type": "Question",
      "name": "É um teste dual N-Back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. É um N-Back simples, só com letras. O dual N-Back compara dois estímulos ao mesmo tempo, como posição e som; essa variante não está disponível aqui."
      }
    },
    {
      "@type": "Question",
      "name": "Dá para jogar pelo teclado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Por enquanto, você responde pelos dois botões da tela, com clique do mouse ou toque. Atalhos de teclado não são suportados."
      }
    },
    {
      "@type": "Question",
      "name": "O N-Back aumenta o QI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Isso não está comprovado. Jaeggi et al. (2008) relataram uma relação entre treino de N-Back e inteligência fluida, mas estudos posteriores tiveram resultados divergentes. Com prática, sua pontuação nesta tarefa específica pode subir."
      }
    },
    {
      "@type": "Question",
      "name": "Meus resultados são salvos? Têm valor médico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A melhor pontuação e o nível máximo ficam salvos só no localStorage deste navegador e não são enviados a nenhum servidor. São marcas de treino e não diagnosticam problemas de memória de trabalho nem TDAH."
      }
    }
  ]
};

const nBackClientCopyPt = {
  h1Keyword: "Teste N-Back online",
  h1Suffix: " – Memória de trabalho",
  subtitle: "A letra é igual à de N passos atrás? Começa no 3-back.",
  statScore: "Pontos",
  statTime: "Tempo",
  statLevel: "Nível",
  statBest: "Recorde",
  hudScore: "Pontos",
  hudTime: "Tempo",
  modeSuffix: "-BACK",
  memorizingText: "Memorizando as primeiras {n} letras...",
  btnMatch: "IGUAL",
  btnNoMatch: "DIFERENTE",
  startTitle: "Teste N-Back",
  startSubtitle: "Memória de trabalho • a partir do 3-back",
  countdownSubtitle: "PREPARE-SE",
  newBest: "NOVO RECORDE",
  statPoints: "Pontos",
  statAccuracy: "Precisão",
  statPeakLevel: "Nível máximo",
  statPerfects: "Acertos",
  btnPlayAgain: "Jogar de novo",
  rulesTitle: "Regras e pontuação",
  rulesItems: [
    { num: "1", text: "Igual / Diferente (N passos atrás)", highlight: "+150 PTS", result: "Por acerto" },
    { num: "2", text: "Subida de nível", highlight: "3-Back → 4-Back+", result: "A cada 1.200 pontos (8 acertos)" },
    { num: "3", text: "Janela de resposta menor", highlight: "2,0 s → mín. 1,2 s", result: "0,1 s a menos por nível" },
    { num: "4", text: "Sem resposta", highlight: "Sem desconto", result: "Sem perda de pontos ou tempo, conta como falha" },
    { num: "5", text: "Resposta errada", highlight: "Sem desconto", result: "O nível se mantém, o relógio de 45 s segue normal" }
  ]
};

const guidePt = {
  intro: [
    "O teste N-Back online é um treino grátis de memória de trabalho no navegador: letras aparecem uma a uma e você indica se cada uma é igual à de exatamente N passos atrás. Como é preciso guardar as últimas N letras e atualizar a lista a cada nova letra, a tarefa exige sobretudo a atualização da memória de trabalho (Kirchner, 1958).",
    "O teste começa no 3-back. As 3 primeiras letras são só para memorizar; depois, você responde 'Igual' ou 'Diferente' a cada letra. Cada acerto vale +150 pontos e a cada 1.200 pontos (8 acertos) o nível sobe para 4-back, 5-back e assim por diante. A janela de resposta começa em 2 segundos e diminui 0,1 segundo por nível, até 1,2 segundo.",
    "A sessão dura 45 segundos; o relógio fica parado enquanto você memoriza as primeiras letras. Erros e falta de resposta não custam pontos nem tempo e não fazem o nível cair: só contam como falha na precisão. É um N-Back simples com letras, não um teste dual N-Back (posição + som). Resposta por clique ou toque nos botões.",
    "Transparência de dados: os resultados ficam salvos só no localStorage deste navegador e não são enviados a nenhum servidor. Por isso o SkillDrills não publica médias de usuários nem rankings.",
    "Esta ferramenta é um jogo grátis de treino no navegador. Não é um dispositivo médico nem uma ferramenta de diagnóstico, e os resultados não indicam problemas de memória, TDAH ou QI."
  ],
  benchmarks: {
    title: "Faixas de treino SkillDrills (pontos = acertos × 150)",
    headers: ["Faixa", "Acertos", "Pontos", "Nível alcançado"],
    rows: [
      ["Iniciante", "0–3", "0–450", "3-back. Aprendendo as regras e o ritmo"],
      ["Básico", "4–7", "600–1.050", "Ainda 3-back. Atualização estável das 3 últimas letras"],
      ["Intermediário", "8–15", "1.200–2.250", "4-back alcançado, janela de 1,9 s"],
      ["Avançado", "16+", "2.400+", "5-back ou mais, janela de 1,8 s ou menos"]
    ],
    note: "Estas faixas são calculadas a partir das regras de pontuação do jogo; não são normas populacionais nem limites clínicos."
  },
  techniques: {
    title: "Dicas para o teste N-Back",
    items: [
      { name: "Repetir baixinho", desc: "Repita mentalmente as últimas N letras num ritmo fixo (ex.: B-M-T → M-T-R). Quando chegar uma nova, compare com a primeira e descarte-a.", tips: "Nomes curtos para as letras ajudam a manter o ritmo." },
      { name: "Cuidado com letras próximas", desc: "Uma letra vista há 1 ou 2 passos parece familiar, mas não é a certa. Confira se são exatamente N passos.", tips: "Familiaridade sozinha não é motivo para tocar em 'Igual'." },
      { name: "Responder 'Diferente' sem medo", desc: "Só cerca de uma letra em três é igual. Hesitar demais faz a resposta expirar.", tips: "Escolha sempre uma das duas respostas dentro da janela." },
      { name: "Recomeçar rápido depois de se perder", desc: "Se perder a sequência, não tente lembrar o passado: monte a lista de novo a partir da letra atual.", tips: "Depois de N letras você volta a comparar com segurança." }
    ]
  },
  steps: [
    "Toque em Iniciar e espere a contagem regressiva de 3 segundos.",
    "Memorize as 3 primeiras letras (o relógio não corre).",
    "Depois, a cada letra, escolha 'Igual' se for a mesma de 3 passos atrás, senão 'Diferente'.",
    "A cada 8 acertos o nível sobe para 4-back, 5-back e a janela de resposta encurta.",
    "Depois de 45 segundos, veja sua pontuação, nível máximo e precisão."
  ],
  audience: "Quem quer fazer um teste N-Back ou um teste de memória de trabalho direto no navegador, estudantes conhecendo a tarefa e quem procura um jogo rápido de raciocínio.",
  faqs: faqSchema.mainEntity.map(({ name, acceptedAnswer }) => ({ q: name, a: acceptedAnswer.text })),
  sources: pickSources('baddeley1974', 'cowan2001'),
  related: [
    { href: "/pt/drills/memory/spatial-memory/path-tracing", label: "Teste de Corsi" },
    { href: "/pt/drills/memory/spatial-memory/grid-memorization", label: "Teste de Memória Visual" },
    { href: "/pt/drills/memory/spatial-memory/object-location", label: "Teste de Memória Espacial" },
    { href: "/pt/drills/memory/short-term-memory/digit-span", label: "Teste de Dígitos" },
    { href: "/pt/drills/memory/short-term-memory/word-recall", label: "Teste de Memória Verbal" }
  ]
};

export default function NBackPagePt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <NBackClient copy={nBackClientCopyPt} />

      <DrillGuide guide={guidePt} />

      <RelatedDrills />
    </>
  );
}
