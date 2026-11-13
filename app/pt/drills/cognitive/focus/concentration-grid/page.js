import ConcentrationGridClient from '@/app/drills/cognitive/focus/concentration-grid/ConcentrationGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — pt-BR / pt-PT (concentration-grid)
// PRIMARY:  "tabela de schulte"              — Top Brazilian query (6 Google suggestions)
//           "tabela de schulte online"       — High intent query
// SECONDARY / LSI:
//           "tabela schulte"                 — Common variant (6 suggestions)
//           "tabela schulte online"          — Web app query
//           "tabela de schulte avançada"     — Experienced user query
//           "grade de concentracao"          — Direct translation
//           "visao periferica leitura dinamica"— Speed reading target
// ============================================================

export const metadata = {
  title: "Tabela de Schulte online | Treino de foco | SkillDrills",
  description: "Tabela de Schulte online grátis: toque os números em ordem crescente por 45 segundos numa grade que cresce de 3x3 a 8x8. Treino de foco.",
  keywords: [
    "tabela de schulte",
    "tabela de schulte online",
    "tabela schulte",
    "tabela schulte online",
    "tabela de schulte avançada",
    "grade de concentracao",
    "treino de foco e concentracao",
    "leitura dinamica tabela schulte",
    "exercicios para visao periferica",
    "treinamento cognitivo gratis",
    "tabela de schulte 5x5 gratis",
    "teste de atencao e foco online"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Tabela de Schulte online | Treino de foco | SkillDrills",
    description: "Tabela de Schulte online grátis: toque números em ordem crescente durante 45 segundos em grades que crescem de 3x3 a 8x8. Sem cadastro.",
    type: "website",
    url: "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid",
    siteName: "SkillDrills",
    locale: "pt_BR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Tabela de Schulte online | Treino de foco | SkillDrills",
    description: "Tabela de Schulte online grátis: toque números em ordem crescente durante 45 segundos em grades que crescem de 3x3 a 8x8. Sem cadastro.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid",
    languages: getAlternateLanguages('/drills/cognitive/focus/concentration-grid'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/" },
    { "@type": "ListItem", "position": 2, "name": "Treinos Cognitivos", "item": "https://skilldrills.online/pt/drills/cognitive" },
    { "@type": "ListItem", "position": 3, "name": "Tabela de Schulte", "item": "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tabela de Schulte Online (Concentration Grid)",
  "url": "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid",
  "description": "Tabela de Schulte online grátis: encontre os números em ordem crescente em grades que crescem de 3x3 a 8x8 durante uma rodada de 45 segundos.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12",
  "educationalUse": ["Busca Visual", "Visão Periférica", "Atenção Sustentada"]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Attention"],
  "name": "Tabela de Schulte Online (Concentration Grid)",
  "url": "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid",
  "description": "Tabela de Schulte online grátis: encontre os números em ordem crescente em grades que crescem de 3x3 a 8x8 durante uma rodada de 45 segundos.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Tabela de Schulte Online (Concentration Grid)",
  "url": "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid",
  "description": "Jogo online de busca sequencial de números em tabelas de Schulte em expansão, numa rodada fixa de 45 segundos.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Treino Cognitivo", "Busca Visual", "Tabela de Schulte", "Concentration Grid"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Treinar com a Tabela de Schulte e Grade de Concentração",
  "description": "Como jogar uma rodada de 45 segundos na tabela de Schulte online.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid#step-1",
      "name": "Fixe o olhar no centro da tabela",
      "text": "Mantenha os olhos relaxados focados próximo ao centro da matriz, sem mover a visão desordenadamente de um quadrado para o outro."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid#step-2",
      "name": "Toque nos números em ordem crescente",
      "text": "Encontre e clique nos números em sequência numérica estrita a começar pelo número 1 (1, 2, 3...) o mais rápido possível."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid#step-3",
      "name": "Expanda sua visão periférica",
      "text": "Aproveite a visão periférica para identificar a localização dos dígitos seguintes enquanto confirma o toque no número atual."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/pt/drills/cognitive/focus/concentration-grid#step-4",
      "name": "Supere matrizes progressivamente maiores",
      "text": "Ao limpar cada matriz, novas grades maiores e com dígitos rotacionados (3x3 até 8x8) surgem dentro da mesma rodada de 45 segundos; em telas estreitas (menos de 380 px) a grade para em 7x7."
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
      "name": "O que é a Tabela de Schulte e qual a sua utilidade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Tabela de Schulte leva o nome do psiquiatra alemão Walter Schulte: uma grade com números embaralhados que devem ser encontrados em ordem crescente. Hoje é usada sobretudo como exercício de busca visual e foco, inclusive em cursos de leitura dinâmica. Esta versão online é um treino, não um teste psicológico."
      }
    },
    {
      "@type": "Question",
      "name": "Como a Tabela de Schulte ajuda na leitura dinâmica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na leitura, o olhar alterna fixações e sacadas (Rayner, 1998). A tabela pratica captar dígitos fora do ponto de fixação sem saltar para cada casa, por isso é associada à leitura dinâmica. Um ganho de velocidade de leitura não é garantido, e o drill não o mede."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a postura ou técnica correta para resolver a tabela?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A regra habitual do exercício é manter o olhar perto do centro da grade e localizar os números vizinhos com a visão periférica, em vez de correr os olhos de canto a canto. É uma regra de prática, não um método comprovado."
      }
    },
    {
      "@type": "Question",
      "name": "O que é considerado uma boa pontuação ou tempo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não existe um tempo de referência oficial, e a SkillDrills não coleta dados de usuários. Este drill não mede uma tabela 5x5 isolada, e sim uma rodada de 45 segundos a partir de 3x3: cada acerto vale 100 pontos mais bônus de rapidez (até 120) e cada grade concluída soma um bônus proporcional ao número de casas. Compare seus pontos e grades concluídas com suas próprias rodadas anteriores."
      }
    },
    {
      "@type": "Question",
      "name": "Por que as grades aumentam de tamanho e os números giram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada grade concluída dá lugar a outra com uma casa a mais por lado (até 8x8, ou 7x7 em telas estreitas), aumentando a área a percorrer. A partir de 5x5 os dígitos aparecem levemente girados (até 12°, e até 20° a partir de 7x7), o que dificulta reconhecê-los de relance (Treisman & Gelade, 1980)."
      }
    },
    {
      "@type": "Question",
      "name": "Esta ferramenta é utilizada por pilotos e atletas profissionais?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pode servir como prática complementar de busca visual e atenção, sem garantia de efeito fora da tela."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo devo treinar por dia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não há regra fixa. Sessões curtas de 5 a 10 minutos (algumas rodadas) com pausas poupam os olhos e são fáceis de manter; nenhuma melhora é garantida."
      }
    },
    {
      "@type": "Question",
      "name": "Cliques errados diminuem o tempo restante?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Um toque errado não tira tempo nem pontos: gera um alerta visual vermelho e reduz sua porcentagem final de precisão."
      }
    },
    {
      "@type": "Question",
      "name": "É compatível com celular e tablet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, funciona com toque e com mouse. Em telas com menos de 380 px de largura a grade máxima é 7x7."
      }
    },
    {
      "@type": "Question",
      "name": "É necessário pagar ou criar conta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. O acesso é 100% gratuito e ilimitado direto no navegador, sem cadastros, cobranças ou necessidade de baixar aplicativos."
      }
    }
  ]
};

const concentrationGridGuidePt = {
  heading: "Guia da Tabela de Schulte, Leitura Dinâmica e Foco Visual",
  intro: [
    "A Tabela de Schulte é um exercício clássico de busca visual e foco, que leva o nome do psiquiatra alemão Walter Schulte. Em sua implementação tradicional, números de 1 a 25 são dispersos aleatoriamente em uma matriz 5x5, exigindo que o indivíduo localize cada numeral em sequência estritamente crescente enquanto mantém a fixação visual próxima ao centro da grade.",
    "Na psicologia esportiva aplicada, esse exercício evoluiu para a denominada 'grade de concentração' (Harris & Harris, 1984), descrita em manuais de psicologia do esporte como exercício de varredura visual e concentração sob pressão de tempo. Um estudo de potenciais relacionados a eventos (ERP) com 27 crianças de 8 a 11 anos examinando tabelas de Schulte constatou que a busca por números em sequência exigiu maior tempo do que localizar um alvo isolado, e que a inclusão de uma segunda cor desacelerou ambos os processos, com diferenças proporcionais nos registros do sinal ERP (Lu et al., 2022).",
    "A tabela de Schulte online da SkillDrills transforma a folha estática em uma rodada contínua de 45 segundos. A grade cresce de 3x3 até 8x8 a cada etapa concluída (7x7 em telas com menos de 380 px), com dígitos levemente girados a partir de 5x5. Assim você pratica percorrer uma área cada vez maior dentro de uma janela fixa de 45 segundos.",
    "Metodologia de mensuração: cada interação é registrada com carimbo de alta precisão através do relógio performance.now() da API do navegador, processado integralmente no dispositivo do usuário — nenhuma pontuação é transmitida externamente. Os cronômetros dos navegadores são deliberadamente discretizados como mitigação de segurança contra vulnerabilidades do tipo Spectre (geralmente em torno de 1 ms), e a exibição quantiza cada transição à taxa de atualização do monitor, correspondendo a aproximadamente 16,7 ms por quadro a 60 Hz (Woods et al., 2015). Para análises comparativas de evolução, preserve as mesmas condições de hardware.",
    "Transparência de dados e privacidade: a SkillDrills não coleta métricas agregadas de desempenho. Seus recordes e configurações permanecem armazenados estritamente no localStorage do seu próprio navegador e nunca são enviados a servidores, de modo que esta plataforma não publica médias globais, percentis ou contagens de usuários. As informações de contexto vêm das fontes listadas; as faixas de pontuação são bandas de prática da SkillDrills, não normas.",
    "Este treino é um aplicativo web gratuito desenvolvido para fins pedagógicos e aprimoramento reflexivo pessoal."
  ],
  benchmarks: {
    title: "Tabela de Schulte: faixas de nota (pontos por rodada de 45 s)",
    headers: ["Nota", "Pontos (45 s)"],
    rows: [
      ["S+", "7.220 ou mais"],
      ["S", "5.780 – 7.219"],
      ["A", "4.500 – 5.779"],
      ["B", "2.880 – 4.499"],
      ["C", "1.620 – 2.879"],
      ["D", "720 – 1.619"],
      ["F", "menos de 720"]
    ],
    note: "Faixas de prática da SkillDrills, calculadas diretamente da fórmula de nota da tela final (fração de 8.000 pontos de referência); não são estatísticas de usuários nem normas. Cada acerto vale 100 pontos mais bônus de rapidez (até 120), e cada grade concluída soma um bônus proporcional ao número de casas."
  },
  techniques: {
    title: "Estratégias Científicas de Aprimoramento",
    items: [
      {
        name: "Ancoragem no Centro da Grade",
        desc: "Mantenha o olhar relaxado perto do centro da grade e use a visão periférica para localizar os números ao redor, em vez de mover a cabeça ou os olhos até cada dígito.",
        tips: "Evite correr os olhos freneticamente de um lado ao outro."
      },
      {
        name: "Busca Pareada e Antecipação (Lookahead)",
        desc: "Enquanto clica no número atual (ex: 3), sua visão já deve ter detectado e guardado na memória de trabalho espacial a posição do seguinte (o 4) (Rayner, 1998).",
        tips: "Nunca procure apenas um número isolado; trabalhe sempre mentalmente em pares."
      },
      {
        name: "Busca Guiada e Padrões Visuais (Wolfe, 2007)",
        desc: "A expectativa mental direcionada facilita a identificação de alvos. Ter em mente o formato do próximo numeral ajuda a reconhecê-lo ao percorrer a grade.",
        tips: "Imagine mentalmente o desenho do número antes de procurá-lo."
      },
      {
        name: "Invariância à Rotação",
        desc: "Dígitos inclinados exigem que o cérebro identifique características estruturais básicas (como a curva do 6 ou a barra do 4) em vez de depender de formatos perfeitos.",
        tips: "Reconheça a estrutura do algarismo em vez de tentar girá-lo na mente."
      }
    ]
  },
  steps: [
    "Repouse a visão suavemente no centro da grade.",
    "Localize o número 1 e toque para iniciar a contagem.",
    "Aplique a visão periférica: enquanto confirma o número atual, localize o próximo.",
    "Avance rapidamente para desbloquear matrizes maiores de 5x5, 6x6 e 7x7.",
    "Mantenha a tranquilidade diante de números girados durante os 45 segundos."
  ],
  audience: "Leitores dinâmicos, estudantes para concursos, pilotos, gamers de FPS tático e interessados em biohacking e desempenho mental.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('lu2022', 'treisman1980', 'rayner1998', 'rayner2016', 'wolfe2007', 'woods2015'),
  related: [
    { href: "/pt/drills/cognitive/attention/concentration-stamina", label: "Teste de Foco Contínuo" },
    { href: "/pt/drills/cognitive/focus/distraction-fighter", label: "Teste de Stroop Online" },
    { href: "/pt/drills/cognitive/attention/divided-attention", label: "Atenção Dividida" },
    { href: "/pt/drills/cognitive/processing-speed/rsvp-reader", label: "Teste de Leitura Rápida" },
    { href: "/pt/drills/cognitive/processing-speed/symbol-matching", label: "Substituição de Símbolos" },
    { href: "/pt/drills/cognitive/processing-speed/reaction-time", label: "Velocidade de Reação" }
  ]
};

const copyPt = {
  h1Keyword: "Tabela de Schulte",
  h1Suffix: " Online – Grade de Concentração",
  caption: "Toque nos números em ordem crescente em tabelas de Schulte que crescem a cada grade concluída. Pratique busca visual e foco por 45 segundos.",
  statScore: "Pontos",
  statTime: "Tempo",
  statGridSize: "Grade",
  statBest: "Recorde",
  hudTarget: "Alvo:",
  startTitle: "Tabela de Schulte Trainer",
  startSubtitle: "Busca Sequencial de Números • Grades Schulte Expansivas",
  startButtonText: "Começar Treino",
  getReady: "PREPARE-SE",
  statPoints: "Pontos",
  statAccuracy: "Precisão",
  statGridsCleared: "Completadas",
  statPeakGrid: "Grade Máx.",
  playAgainText: "Jogar Novamente",
  shareText: "Compartilhar",
  exitText: "Sair",
  stageCaption: "Localize e toque nos números em ordem crescente em matrizes cada vez maiores antes que o tempo se esgote.",
  rulesTitle: "Regras e Pontuação",
  rulesItems: [
    { title: "Busca Sequencial", text: "Toque nos números rigorosamente em ordem crescente a partir do 1 até o maior número da grade." },
    { title: "Grades em Expansão", text: "Completar a grade atual avança para tamanhos maiores (3x3 → 4x4 → 5x5...), exigindo visão periférica mais ampla." },
    { title: "Sessão Fixa de 45s", text: "Você joga durante 45 segundos exatos. Limpar grades faz a matriz crescer sem adicionar tempo extra ao relógio." },
    { title: "Foco e Precisão", text: "Toques incorretos acionam um alerta visual e reduzem sua precisão final, sem tirar pontos nem tempo." }
  ],
  aboutTitle: "Sobre a Tabela de Schulte e Grade de Concentração",
  aboutLead: "A Tabela de Schulte é uma grade clássica de busca visual: números embaralhados devem ser encontrados em ordem crescente, praticando a fixação do olhar e a visão periférica (Lu et al., 2022; Rayner, 1998).",
  aboutCards: [
    { title: "Quem deve treinar?", text: "Estudantes, concurseiros, leitores, atletas e gamers que querem praticar busca visual rápida sob pressão de tempo.", color: "bg-blue-600" },
    { title: "Habilidades Desenvolvidas", text: "Velocidade de busca visual, controle do olhar, uso da visão periférica e atenção sustentada.", color: "bg-emerald-600" },
    { title: "Visão Periférica", text: "Cada nível concluído expande a área da grade, forçando os olhos a captar números nos extremos sem desviar o centro de visão.", color: "bg-purple-600" }
  ]
};

export default function ConcentrationGridPagePt() {
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

      <ConcentrationGridClient copy={copyPt} />
      <DrillGuide guide={concentrationGridGuidePt} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
