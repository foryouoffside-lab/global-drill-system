import WordRecallClient from '@/app/drills/memory/short-term-memory/word-recall/WordRecallClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de memória com palavras | Memória verbal | SkillDrills",
  description: "Teste de memória com palavras grátis: a lista aparece por 2 segundos e você digita as palavras em qualquer ordem. Começa com 3 e vai até 12 palavras.",
  keywords: [
    "teste de memória verbal",
    "teste de memória de palavras",
    "memorizar palavras",
    "evocação livre",
    "recordação de palavras",
    "memória verbal de curto prazo",
    "memoria operacional verbal",
    "lista de palavras memória",
    "teste de evocação de palavras",
    "exercício de memória verbal",
    "efeito de posição serial",
    "agrupamento semântico",
    "teste de memória grátis",
    "memória de palavras online"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/word-recall', 'pt'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de memória com palavras | Memória verbal | SkillDrills",
    description: "Teste de memória com palavras grátis: a lista aparece por 2 segundos e você digita as palavras em qualquer ordem. Começa com 3 e vai até 12 palavras.",
    url: "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de memória com palavras | Memória verbal | SkillDrills",
    description: "Teste de memória com palavras grátis: a lista aparece por 2 segundos e você digita as palavras em qualquer ordem. Começa com 3 e vai até 12 palavras.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedWordRecallPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treino de Memória", "item": "https://skilldrills.online/pt/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Memória de Curto Prazo", "item": "https://skilldrills.online/pt/drills/memory/short-term-memory" },
      { "@type": "ListItem", "position": 4, "name": "Teste de memória com palavras", "item": "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Teste de memória com palavras",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Teste de memória com palavras grátis: a lista aparece por 2 segundos e você digita as palavras em qualquer ordem. Começa com 3 e vai até 12 palavras.",
    "genre": "Cognitive Assessment / Verbal Memory",
    "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall",
    "sameAs": ["https://pt.wikipedia.org/wiki/Recorda%C3%A7%C3%A3o_em_mem%C3%B3ria"],
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Teste de memória com palavras",
    "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall",
    "description": "Teste de memória com palavras grátis: a lista aparece por 2 segundos e você digita as palavras em qualquer ordem. Começa com 3 e vai até 12 palavras.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Teste de memória com palavras",
    "description": "Teste de memória com palavras grátis: a lista aparece por 2 segundos e você digita as palavras em qualquer ordem. Começa com 3 e vai até 12 palavras.",
    "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall",
    "genre": ["Memory Game", "Cognitive Training", "Brain Game"],
    "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "numberOfPlayers": {
      "@type": "QuantitativeValue",
      "value": 1
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona este teste de memória com palavras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uma lista de palavras aparece inteira por 2 segundos. Depois, em até 12 segundos, você digita todas as palavras de que lembra, separadas por espaço ou vírgula, e envia com Enter. A ordem não importa (evocação livre). Começa com 3 palavras; se acertar todas sem palavras extras, ganha 1 palavra (máximo 12), senão perde 1 (mínimo 3). A sessão dura 45 segundos."
        }
      },
      {
        "@type": "Question",
        "name": "Como a pontuação é calculada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Só pontuam as rodadas em que você digita todas as palavras da lista sem palavras a mais: 150 × (1 + 0,15 × (palavras − 3)). 3 palavras = 150 pontos, 12 palavras = cerca de 353. Errar não tira pontos nem tempo, só reduz 1 palavra."
        }
      },
      {
        "@type": "Question",
        "name": "Quantas palavras uma pessoa lembra em média?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A SkillDrills não coleta dados de usuários, então não mostramos médias nem percentis. Com 2 segundos de exibição e 12 de digitação, este jogo não é comparável a testes padronizados com listas de palavras. Use as faixas de prática abaixo e seus próprios recordes."
        }
      },
      {
        "@type": "Question",
        "name": "O que acontece se eu digitar errado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada palavra precisa ser igual à da lista (maiúsculas e acentos são ignorados). Um erro de digitação conta como palavra extra, e a palavra certa conta como esquecida, então a rodada é perdida."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre evocação livre e reconhecimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Na evocação livre você busca as palavras na memória sem pistas; no reconhecimento escolhe o que já viu entre opções. Este teste de memória verbal usa evocação livre, por isso é mais difícil."
        }
      },
      {
        "@type": "Question",
        "name": "O que é o efeito de posição serial em listas de palavras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As palavras do começo (primazia) e do fim (recência) de uma lista são lembradas melhor que as do meio (Murdock, 1962). Como aqui todas aparecem juntas, a ordem em que você lê faz esse papel."
        }
      },
      {
        "@type": "Question",
        "name": "Por que ligar as palavras numa cena ajuda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pensar no significado ou ligar as palavras faz com que sejam processadas mais a fundo e lembradas melhor (níveis de processamento, Craik & Lockhart, 1972). Com só 2 segundos, uma cena simples é mais realista do que uma história longa."
        }
      },
      {
        "@type": "Question",
        "name": "A ordem das palavras importa na digitação?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. A rodada vale se todas as palavras da lista estiverem lá, em qualquer ordem. Vale a pena digitar primeiro as últimas que você leu."
        }
      },
      {
        "@type": "Question",
        "name": "Praticar com palavras melhora a memória no dia a dia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não há garantia. Com prática você tende a melhorar neste jogo, mas a transferência para o dia a dia é discutida na pesquisa."
        }
      },
      {
        "@type": "Question",
        "name": "Este teste online de memória com palavras é gratuito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, é gratuito, sem cadastro nem instalação. Seus recordes ficam salvos só no navegador."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como fazer o teste de memória com palavras",
    "description": "Quatro passos para memorizar uma lista exibida por 2 segundos e digitar as palavras (sessão de 45 segundos).",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall#step-1",
        "name": "Veja a lista por 2 segundos",
        "text": "A lista inteira aparece de uma vez por 2 segundos. Leia rápido."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall#step-2",
        "name": "Junte numa cena",
        "text": "Imagine todas as palavras juntas numa cena curta."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall#step-3",
        "name": "Digite primeiro as últimas",
        "text": "Quando o campo aparecer, digite primeiro as últimas palavras que leu. A ordem não importa."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/word-recall#step-4",
        "name": "Envie em até 12 segundos",
        "text": "Separe as palavras com espaço ou vírgula e envie com Enter. Você tem 12 segundos."
      }
    ]
  };

  const wordRecallGuide = {
    heading: "Guia do teste de memória com palavras (evocação livre)",
    intro: [
      "O teste de memória com palavras mostra rapidamente uma lista e depois você digita, em qualquer ordem, as palavras de que lembra. É uma versão de prática da evocação livre estudada pela psicologia da memória e um teste de memória verbal de treino.",
      "A pesquisa com listas de palavras começa com Hermann Ebbinghaus (1885). Bennet Murdock (1962) descreveu o efeito de posição serial na evocação livre — começo e fim da lista são lembrados melhor — e Endel Tulving (1962) mostrou que as pessoas agrupam as palavras por conta própria.",
      "Segundo os níveis de processamento (Craik & Lockhart, 1972), palavras pensadas pelo significado ou ligadas entre si tendem a ficar mais na memória. Com a exibição curta deste jogo, ajuda juntar as palavras rapidamente numa cena.",
      "Como funciona: começa com 3 palavras; a lista aparece inteira por 2 segundos. Depois você tem 12 segundos para digitar as palavras separadas por espaço ou vírgula e enviar com Enter. Acertou todas sem extras: +1 palavra (máximo 12); faltou alguma, digitou uma errada ou o tempo acabou: −1 palavra (mínimo 3). O jogo registra pontuação, maior lista e precisão (porcentagem de rodadas certas); o tempo de reação não é medido.",
      "Transparência de dados: a SkillDrills não coleta resultados em servidores; tudo fica no localStorage do navegador. Por isso esta página não mostra médias de usuários, percentis nem número de usuários; os estudos citados estão listados abaixo."
    ],
    benchmarks: {
      title: "Faixas de prática do teste de memória com palavras (SkillDrills, 45 s)",
      headers: ["Faixa", "Palavras alcançadas", "Pontos sem erro até lá", "Estratégia típica"],
      rows: [
        ["Faixa 1", "12 palavras", "cerca de 2.160+", "Junta a lista inteira numa cena na hora"],
        ["Faixa 2", "10–11 palavras", "cerca de 1.520–2.159", "Agrupa por significado em pares ou trios"],
        ["Faixa 3", "8–9 palavras", "cerca de 980–1.519", "Lembra começo e fim, perde as do meio"],
        ["Faixa 4", "6–7 palavras", "cerca de 520–979", "Lê e decora uma palavra por vez"],
        ["Faixa 5", "3–5 palavras", "menos de 520", "Aprendendo a exibição de 2 s e a digitação"]
      ],
      note: "Faixas de prática da SkillDrills, não normas populacionais. Os pontos valem para uma sessão sem erros desde 3 palavras até esse tamanho (pontos por rodada = 150 × (1 + 0,15 × (palavras − 3))). Em 45 segundos cabem poucas rodadas e erros encurtam a lista, então a pontuação real varia."
    },
    techniques: {
      title: "Estratégias para lembrar mais palavras",
      items: [
        {
          "name": "Uma cena só",
          "desc": "Coloque todas as palavras numa imagem (ex.: 'rio', 'vela', 'dragão' → um dragão segurando uma vela sobre um rio). Ligar pelo significado aprofunda o processamento (Craik & Lockhart, 1972).",
          "tips": "Mantenha a cena simples para montá-la em 2 segundos."
        },
        {
          "name": "Agrupar por categoria",
          "desc": "Junte palavras parecidas: animais, lugares, objetos. As pessoas agrupam palavras naturalmente (Tulving, 1962).",
          "tips": "Na hora de digitar, lembre categoria por categoria."
        },
        {
          "name": "As últimas primeiro",
          "desc": "As palavras recém-lidas somem rápido (recência). Digite-as primeiro e depois recupere o começo e o meio (Murdock, 1962).",
          "tips": "A ordem da digitação não afeta a pontuação."
        },
        {
          "name": "Cuidado com erros de digitação",
          "desc": "Um erro de digitação conta como palavra errada e faz perder a rodada inteira. Digitar com precisão nos 12 segundos é essencial.",
          "tips": "Chutar uma palavra que não estava na lista também faz perder a rodada."
        }
      ]
    },
    steps: [
      "Inicie a sessão de 45 segundos e olhe para a área das palavras no centro.",
      "Leia rápido a lista que aparece por 2 segundos e junte as palavras numa cena.",
      "No campo de texto, digite primeiro as últimas palavras que leu.",
      "Digite todas as palavras separadas por espaço ou vírgula em até 12 segundos e envie com Enter.",
      "Acertos aumentam a lista e erros diminuem: compare pontuação e maior lista com seus próprios recordes."
    ],
    audience: "Estudantes, concurseiros, profissionais e curiosos que querem saber quantas palavras conseguem memorizar.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('craik1972', 'murdock1962', 'tulving1962'),
    related: [
      { href: "/pt/drills/memory/short-term-memory/digit-span", label: "Teste de memória de dígitos" },
      { href: "/pt/drills/memory/short-term-memory/color-sequence", label: "Jogo de memória de cores" },
      { href: "/pt/drills/memory/spatial-memory/grid-memorization", label: "Teste de memória visual" },
      { href: "/pt/drills/memory/spatial-memory/object-location", label: "Memória de localização" },
      { href: "/pt/drills/memory/working-memory/n-back", label: "Teste N-Back" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <WordRecallClient copy={{
          "h1Keyword": "Teste de memória com palavras",
          "h1Suffix": " – Memória verbal",
          "subtitle": "Memorize palavras e faça a evocação livre",
          "statScore": "Pontos",
          "statTime": "Tempo",
          "statWords": "Palavras",
          "wordsUnit": "Palavras",
          "statBestScore": "Recorde",
          "memorizePhase": "MEMORIZE AS PALAVRAS",
          "btnSkip": "Pular",
          "inputPhase": "DIGITE AS PALAVRAS LEMBRADAS",
          "inputPlaceholder": "Digite as palavras lembradas separadas por espaço...",
          "btnSubmit": "ENVIAR RESPOSTAS",
          "inputHint": "Pressione Enter para enviar",
          "feedbackPhase": "AVALIAÇÃO DA EVOCAÇÃO",
          "extraWordsLabel": "Palavras incorretas ou extras digitadas:",
          "startTitle": "Evocação Verbal Pro",
          "startSubtitle": "Memória verbal • evocação livre",
          "countdownSubtitle": "PREPARE-SE",
          "newBest": "NOVO RECORDE",
          "pointsLabel": "Pontos",
          "statAccuracy": "Precisão",
          "statPeakWords": "Palavras Máx.",
          "statPerfects": "Perfeitos",
          "btnPlayAgain": "Jogar Novamente",
          "rulesTitle": "Instruções do Exercício e Sistema de Pontos",
          "aboutTitle": "Sobre o Teste de Memória Verbal (Word Recall)",
          "rulesItems": [
                    {
                              "num": "1",
                              "text": "Evocação de Lista",
                              "highlight": "+150 PTS",
                              "result": "Memorize as palavras e digite-as na fase de evocação livre"
                    },
                    {
                              "num": "2",
                              "text": "Bônus de Nível",
                              "highlight": "Até +135%",
                              "result": "Rodada = 150 × (1 + 0,15 × (palavras − 3)) pontos"
                    },
                    {
                              "num": "3",
                              "text": "Erro / Tempo Esgotado",
                              "highlight": "-1 Palavra",
                              "result": "Faltou, errou ou passou de 12 s: sem perder pontos nem tempo, 1 palavra a menos"
                    },
                    {
                              "num": "4",
                              "text": "Span Adaptativo",
                              "highlight": "Sobe e Desce",
                              "result": "Todas certas +1 palavra, erro −1 palavra (3 a 12)"
                    }
          ],
          "wordBank": [
                    "maçã",
                    "ponte",
                    "castelo",
                    "diamante",
                    "águia",
                    "floresta",
                    "jardim",
                    "martelo",
                    "ilha",
                    "selva",
                    "cavaleiro",
                    "lanterna",
                    "montanha",
                    "agulha",
                    "oceano",
                    "palácio",
                    "rainha",
                    "foguete",
                    "poente",
                    "templo",
                    "guarda-chuva",
                    "vale",
                    "janela",
                    "zebra",
                    "vela",
                    "dragão",
                    "pena",
                    "prata",
                    "ouro",
                    "mármore",
                    "veludo",
                    "cristal",
                    "bronze",
                    "cobre",
                    "sombra",
                    "espírito",
                    "sabedoria",
                    "honra",
                    "glória",
                    "sonho",
                    "tempestade",
                    "rio",
                    "nuvem",
                    "chama",
                    "pedra",
                    "trovão",
                    "arco-íris",
                    "fênix",
                    "relógio",
                    "espelho"
          ]
}} />
      <DrillGuide guide={wordRecallGuide} />
      <RelatedDrills />
    </>
  );
}
