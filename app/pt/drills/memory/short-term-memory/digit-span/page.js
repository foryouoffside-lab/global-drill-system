import DigitSpanClient from '@/app/drills/memory/short-term-memory/digit-span/DigitSpanClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de memória numérica | Span de dígitos | SkillDrills",
  description: "Teste de memória numérica grátis: memorize a sequência de números que aparece rápido e digite na mesma ordem. Começa com 3 dígitos e vai até 15.",
  keywords: [
    "teste de memória numérica",
    "teste de memória com números",
    "teste de dígitos online",
    "span de dígitos",
    "amplitude de dígitos",
    "memória de trabalho números",
    "memória de curto prazo números",
    "jogo de memória numérica",
    "teste de retenção de números",
    "sequência numérica memória",
    "alça fonológica",
    "agrupamento de números",
    "memorizar números",
    "teste de memória grátis",
    "extensão de dígitos"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de memória numérica | Span de dígitos | SkillDrills",
    description: "Teste de memória numérica grátis: memorize a sequência de números que aparece rápido e digite na mesma ordem. Começa com 3 dígitos e vai até 15.",
    type: 'website',
    url: 'https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de memória numérica | Span de dígitos | SkillDrills",
    description: "Teste de memória numérica grátis: memorize a sequência de números que aparece rápido e digite na mesma ordem. Começa com 3 dígitos e vai até 15.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span',
    languages: getAlternateLanguages('/drills/memory/short-term-memory/digit-span'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Treino de Memória", "item": "https://skilldrills.online/pt/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Memória de Curto Prazo", "item": "https://skilldrills.online/pt/drills/memory/short-term-memory" },
    { "@type": "ListItem", "position": 4, "name": "Teste de memória numérica", "item": "https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste de memória numérica (span de dígitos)",
  "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "sameAs": ["https://pt.wikipedia.org/wiki/Mem%C3%B3ria_de_trabalho"],
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Teste de memória numérica (span de dígitos)",
  "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span",
  "description": "Jogo gratuito de memória com números: a sequência aparece de uma vez por pouco tempo e você digita na mesma ordem. Começa com 3 dígitos, +1 a cada acerto.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Working Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Teste de memória numérica (span de dígitos)",
  "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como fazer o teste de memória numérica",
  "description": "Quatro passos para memorizar uma sequência de números e digitá-la na mesma ordem (sessão de 45 segundos).",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span#step-1",
      "name": "Veja a sequência de uma vez",
      "text": "A sequência inteira aparece de uma só vez: 2,5 segundos no início e 0,1 segundo a menos a cada acerto (mínimo de 0,8 segundo)."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span#step-2",
      "name": "Agrupe os números",
      "text": "Divida os dígitos em blocos de 2 ou 3, como um número de telefone (ex.: '739-281')."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span#step-3",
      "name": "Repita mentalmente",
      "text": "Depois que os números somem, repita os blocos na cabeça (alça fonológica) até digitar."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/pt/drills/memory/short-term-memory/digit-span#step-4",
      "name": "Digite em até 8 segundos",
      "text": "Digite os números na mesma ordem no teclado da tela ou nas teclas numéricas do computador e confirme com Enter. Backspace apaga um dígito."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona este teste de memória numérica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma sequência de números aleatórios aparece rapidamente de uma só vez e depois você digita na mesma ordem (ordem direta). Começa com 3 dígitos; cada acerto acrescenta 1 dígito (máximo 15) e cada erro, ou 8 segundos sem confirmar, tira 1 (mínimo 3). A sessão dura 45 segundos."
      }
    },
    {
      "@type": "Question",
      "name": "Quantos números uma pessoa consegue memorizar em média?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na pesquisa, Miller (1956) falou em cerca de 7 ± 2 itens; sem repetição nem agrupamento, Cowan (2001) aponta algo perto de 4. A SkillDrills não coleta dados de usuários, então não mostramos médias nem percentis deste jogo, que por ter tempo limite e ajuste automático não se compara diretamente com valores de laboratório. Use as faixas de prática abaixo e seus próprios recordes."
      }
    },
    {
      "@type": "Question",
      "name": "Existe também a ordem inversa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não, este teste usa só a ordem direta. Na ordem inversa é preciso inverter a sequência mentalmente, o que exige mais da memória operacional; essa variante não está disponível aqui."
      }
    },
    {
      "@type": "Question",
      "name": "É o mesmo subteste de dígitos da WAIS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. O formato é parecido com o de repetição de dígitos, mas não é o subteste da WAIS e não calcula QI nem escore ponderado. É um jogo gratuito de prática."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o papel da alça fonológica na memória de números?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No modelo de Baddeley, os números ficam guardados como som no armazenamento fonológico e são mantidos pela repetição interna. Sem repetir, o traço some em cerca de 2 segundos, por isso vale começar a repetir assim que a sequência desaparece."
      }
    },
    {
      "@type": "Question",
      "name": "Como a pontuação é calculada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada sequência certa vale 100 × (1 + 0,1 × (dígitos − 3)) pontos: 100 pontos com 3 dígitos e 220 com 15. Errar não tira pontos nem tempo, só reduz 1 dígito."
      }
    },
    {
      "@type": "Question",
      "name": "Como o chunking ajuda no teste de memória com números?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agrupando os números como um telefone ('839-241'), você guarda 6 dígitos como 2 blocos. Com menos unidades para segurar, fica mais fácil manter sequências longas."
      }
    },
    {
      "@type": "Question",
      "name": "Por que a sequência diminui 1 dígito quando eu erro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Acertos somam 1 dígito e erros tiram 1 (1-up/1-down), então o tamanho oscila perto do seu limite atual. O tempo de exibição também cai 0,1 s após um acerto e sobe 0,2 s após um erro (entre 0,8 e 2,5 s)."
      }
    },
    {
      "@type": "Question",
      "name": "Treinar com números melhora a memória no dia a dia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não há garantia. Com prática você tende a melhorar neste jogo, mas a transferência para a memória do dia a dia, estudos ou trabalho é discutida na pesquisa. Se tiver preocupação com sua memória, procure um médico."
      }
    },
    {
      "@type": "Question",
      "name": "O teste é gratuito e funciona no celular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, é gratuito, sem cadastro nem instalação. No celular use o teclado numérico da tela; no computador, também as teclas de 0 a 9, Backspace e Enter. Seus recordes ficam só no navegador."
      }
    }
  ]
};

const digitSpanGuide = {
  intro: [
  "O teste de memória numérica mostra rapidamente uma sequência de números que você digita depois na mesma ordem. É uma versão de prática da tarefa de span de dígitos, usada há muito tempo pela psicologia para estudar a memória de curto prazo, e não é um teste clínico nem de QI.",
  "A pergunta sobre o tamanho do span ficou famosa com o 'número mágico 7 ± 2' de George A. Miller (1956). Um formato parecido aparece na escala Wechsler (WAIS), mas este jogo não é esse subteste e não calcula escores.",
  "No modelo de memória operacional de Alan Baddeley (Baddeley & Hitch, 1974; Baddeley, 2000), sequências de números são mantidas pela alça fonológica e somem em cerca de 2 segundos sem repetição. Segundo Nelson Cowan (2001), a capacidade bruta sem repetir nem agrupar fica perto de 4 unidades; para sequências longas, o chunking ajuda.",
  "Como funciona: começa com 3 dígitos; a sequência aparece inteira de uma vez (2,5 s no início, 0,1 s a menos a cada acerto até 0,8 s, 0,2 s a mais após um erro). Depois você tem 8 segundos para digitar no teclado da tela ou do computador. Acerto: +1 dígito (máximo 15); erro ou tempo esgotado: −1 dígito (mínimo 3). O jogo registra pontuação, maior sequência e precisão (porcentagem de rodadas certas); o tempo de reação não é medido.",
  "Transparência de dados: a SkillDrills não coleta pontuações em servidores; tudo fica no localStorage do seu navegador. Por isso esta página não mostra médias de usuários, percentis nem número de usuários; os números citados vêm dos estudos listados abaixo.",
  "Aviso: este jogo de prática não é dispositivo médico nem exame diagnóstico. Se tiver preocupação com memória ou concentração, consulte um médico ou neuropsicólogo."
],
  benchmarks: {
    title: "Faixas de prática do teste de memória numérica (SkillDrills, 45 s)",
    headers: ["Faixa", "Tamanho alcançado", "Pontos sem erro até lá", "Estratégia típica"],
    rows: [
  ["Faixa 1", "13+ dígitos", "cerca de 1.450+", "Blocos de 3 ou 4 e repetição interna rápida"],
  ["Faixa 2", "11–12 dígitos", "cerca de 1.080–1.449", "Blocos de 3 estáveis"],
  ["Faixa 3", "9–10 dígitos", "cerca de 750–1.079", "Agrupa em 2 ou 3, mas perde números do meio"],
  ["Faixa 4", "7–8 dígitos", "cerca de 460–749", "Repete um número por vez, sem agrupar"],
  ["Faixa 5", "3–6 dígitos", "menos de 460", "Aprendendo as regras e o ritmo de exibição"]
],
    note: "Faixas de prática da SkillDrills, não normas populacionais nem escores da WAIS. Os pontos valem para uma sessão sem erros desde 3 dígitos até esse tamanho (pontos por rodada = 100 × (1 + 0,1 × (dígitos − 3))); erros encurtam a sequência, então a pontuação real varia."
  },
  techniques: {
    title: "Estratégias para lembrar mais números",
    items: [
  {
    "name": "Blocos ritmados de 3 dígitos",
    "desc": "Divida a sequência como um telefone ('739 - 281 - 405'; Miller, 1956): 9 dígitos viram 3 blocos.",
    "tips": "Dê uma leve ênfase mental ao primeiro número de cada bloco para marcar as fronteiras."
  },
  {
    "name": "Repetição interna rápida",
    "desc": "Repita os blocos na cabeça em ciclo (alça fonológica; Baddeley, 2000). Sem repetição o traço some em cerca de 2 segundos, então comece assim que a sequência desaparecer.",
    "tips": "Fale cada bloco como uma palavra só, e não dígito por dígito."
  },
  {
    "name": "Caminho do dedo no teclado",
    "desc": "Transforme a sequência em um caminho sobre o teclado numérico da tela (Logie, 1995), somando uma pista espacial à sonora.",
    "tips": "Enquanto os números aparecem, desenhe mentalmente a linha entre as teclas."
  },
  {
    "name": "Proteja o meio da sequência",
    "desc": "Começo e fim costumam ficar melhor; os dígitos do meio são os que mais se perdem (efeito de posição serial). Concentre a repetição nos blocos centrais.",
    "tips": "Fixe logo os 3 primeiros dígitos e deixe os 2 últimos para a memória imediata."
  }
]
  },
  steps: [
  "Inicie a sessão de 45 segundos e olhe para o centro da tela.",
  "Quando a sequência aparecer, divida-a logo em blocos de 2 ou 3 dígitos.",
  "Depois que ela some, repita os blocos mentalmente.",
  "Digite os números na mesma ordem em até 8 segundos e confirme com Enter.",
  "Acertos aumentam a sequência e erros diminuem: compare pontuação e maior sequência com seus próprios recordes."
],
  audience: "Estudantes, concurseiros, profissionais e curiosos que querem saber quantos números conseguem memorizar e praticar a memória operacional.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995'),
  related: [
  {
    "href": "/pt/drills/memory/working-memory/n-back",
    "label": "Teste N-Back (Memória Operacional)"
  },
  {
    "href": "/pt/drills/memory/spatial-memory/grid-memorization",
    "label": "Teste de Memória Visual (Grade)"
  },
  {
    "href": "/pt/drills/cognitive/focus/concentration-grid",
    "label": "Tabela de Schulte (Grade de Concentração)"
  },
  {
    "href": "/pt/drills/visual/reaction-speed/light-reaction",
    "label": "Teste de Reflexo (Tempo de Reação)"
  },
  {
    "href": "/pt/drills/reaction-speed/reflex-training-drill",
    "label": "Jogo de Reflexo e Treino de Reflexos"
  }
]
};

export default function LocalizedDigitSpanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitSpanClient copy={{
        "h1Keyword": "Teste de memória numérica",
        "h1Suffix": " – Span de dígitos",
        "subtitle": "Memorize números e repita a sequência exata",
        "caption": "A sequência de números aparece de uma vez e some: digite na mesma ordem. Cada acerto deixa a próxima sequência um dígito mais longa.",
        "statScore": "Pontos",
        "statTime": "Tempo",
        "statSpan": "Span",
        "digitsUnit": "Dígitos",
        "statBest": "Recorde",
        "hudScore": "Pontos",
        "hudTime": "Tempo",
        "memorizeTitle": "MEMORIZE A SEQUÊNCIA",
        "evaluating": "Avaliando...",
        "startTitle": "Teste de memória numérica",
        "startSubtitle": "Memória numérica • span de dígitos",
        "countdownSubtitle": "PREPARE-SE",
        "newBest": "NOVO RECORDE",
        "pointsLabel": "Pontos",
        "statAccuracy": "Precisão",
        "statPeakSpan": "Span Máximo",
        "statPerfects": "Perfeitos",
        "btnPlayAgain": "Jogar novamente",
        "rulesTitle": "Instruções do Treino e Pontuação",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Evocação de Dígitos",
                        "highlight": "+100 PTS",
                        "result": "Memorize a sequência numérica e digite no teclado virtual ou numérico"
                },
                {
                        "num": "2",
                        "text": "Bônus de Extensão",
                        "highlight": "Até +120% PTS",
                        "result": "Rodada = 100 × (1 + 0,1 × (dígitos − 3)) pontos"
                },
                {
                        "num": "3",
                        "text": "Erro / Tempo Esgotado",
                        "highlight": "-1 Dígito",
                        "result": "Erro ou 8 s sem confirmar: sem perder pontos nem tempo, próxima sequência 1 dígito menor"
                },
                {
                        "num": "4",
                        "text": "Escada Adaptativa",
                        "highlight": "Ajuste dinâmico",
                        "result": "Acerto +1 dígito, erro −1 dígito (3 a 15)"
                }
        ]
}} />
      <DrillGuide guide={digitSpanGuide} />
      <RelatedDrills />
    </>
  );
}
