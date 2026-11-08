import StrobeLatencyClient from '@/app/drills/visual/reaction-speed/light-reaction/StrobeLatencyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de Reflexo Online: Meça seu Tempo de Reação",
  description: "Teste de reflexo online grátis: clique quando a luz acender e veja seu tempo de reação em milissegundos. Compare com a média humana; não é exame médico.",
  keywords: [
    "teste de reflexo",
    "teste de reflexo online",
    "teste de reação",
    "teste de reação online",
    "tempo de reação",
    "tempo de reação médio",
    "teste de tempo de reação",
    "teste de reflexo para fps",
    "teste de reflexo valorant",
    "teste de reflexo f1",
    "teste de reflexo grátis",
    "tempo de reação em milissegundos"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Reflexo Online: Meça seu Tempo de Reação",
    description: "Teste de reflexo grátis: espere a luz, clique e veja seu tempo de reação em milissegundos, com média e consistência.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de Reflexo Online: Meça seu Tempo de Reação",
    description: "Teste de reflexo online: reaja a uma luz imprevisível e compare seu tempo de reação entre sessões.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/light-reaction'),
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
    { "@type": "ListItem", "position": 5, "name": "Teste de Reação à Luz", "item": "https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
  "name": "Teste de Reação à Luz (Tempo de Reação Simples)",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
  "description": "Teste neurocognitivo de alta precisão para aferir o tempo de reação visual simples (SRT) e a velocidade de transdução óptico-motora.",
  "featureList": [
    "Cronometria milissegundo a milissegundo via API performance.now()",
    "Intervalos aleatórios entre 300 ms e 2.500 ms para eliminar antecipação",
    "Heurística anti-spam para impedir cliques preditivos sem estímulo real",
    "Armazenamento puramente local no navegador sem telemetria externa"
  ],
  "dateModified": "2026-09-05"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste de Reação à Luz — Reflexo Visual | SkillDrills",
  "alternateName": "Light Reaction Pro",
  "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction",
  "dateModified": "2026-09-05",
  "description": "Teste online gratuito de reflexo visual. Clique o mais rápido possível quando o alvo piscar em branco intenso.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador web moderno compatível com HTML5 Canvas.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Tempo de Reação Visual Simples, Latência Óptico-Motora, Velocidade de Reflexo, Lei de Piéron, Foco Foveal"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Drill de Reflexo de Reação à Luz",
  "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction",
  "description": "Jogo de reflexos rápidos para treinar a latência neuromotora a clarões luminosos.",
  "genre": ["Action", "Reaction Speed", "Reflex Game"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Realizar o Teste de Reação à Luz",
  "dateModified": "2026-09-05",
  "description": "Guia de 4 passos para testar e aprimorar o tempo de reação visual simples e a velocidade do reflexo óptico.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fixe o Olhar no Círculo Central",
      "text": "Mantenha os olhos focados no alvo escuro central na tela, relaxando a musculatura da mão.",
      "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Aguarde o Clarão Branco Imprevisível",
      "text": "Espere pacientemente pelos intervalos aleatórios de 300 ms a 2.500 ms sem antecipar o clique.",
      "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Clique Imediatamente no Primeiro Fóton",
      "text": "Clique ou toque na tela no instante exato em que o alvo piscar em branco puro (+150 PTS × Multiplicador).",
      "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Evite Cliques Especulativos",
      "text": "Clicar antes da luz ativa uma pausa anti-spam de 1,2 segundo, garantindo que o tempo registrado seja reflexo real.",
      "url": "https://skilldrills.online/pt/drills/visual/reaction-speed/light-reaction#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-07",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual é um bom resultado no teste de reflexo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Um bom resultado é aquele que você consegue repetir. Num teste de reflexo online, tela, navegador e mouse somam atraso ao seu tempo real, então compare suas médias no mesmo aparelho em vez de um número isolado. Tempos baixos com muitos cliques antecipados não contam: o teste bloqueia cliques antes da luz."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é o tempo de reação médio do ser humano?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não existe um número único: ele muda com idade, atenção, tipo de estímulo e equipamento. Para reação simples a uma luz, a revisão de Kosinski (2008) cita médias perto de 190 ms em universitários, e a reação a sons costuma ser um pouco mais rápida. Depois da juventude, o tempo de reação tende a aumentar devagar com a idade."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona este teste de reação online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você fixa o olhar no círculo central e clica, ou toca na tela, assim que ele acende em branco. A espera antes da luz é aleatória para impedir que você adivinhe o momento. Cada resposta é cronometrada pelo navegador em milissegundos e, no fim, você vê o tempo médio de reação, o combo e a nota de precisão."
      }
    },
    {
      "@type": "Question",
      "name": "Serve como teste de reflexo para FPS e Valorant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ele mede a reação simples a um sinal luminoso, que é só uma parte de um duelo. Em Valorant, CS2 e outros FPS também contam leitura de jogo, posição da mira e precisão do movimento do mouse. Use este teste como linha de base e os treinos de mira do site para a parte de pontaria; não há garantia de melhora de rank."
      }
    },
    {
      "@type": "Question",
      "name": "É igual ao teste de reflexo da F1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não exatamente. O desafio de largada da F1 acende cinco luzes vermelhas e você reage quando elas se apagam. Aqui o sinal é um único clarão branco depois de uma espera aleatória. Os dois medem reação simples a um estímulo visual, mas os números não são comparáveis entre si nem com os tempos de largada dos pilotos."
      }
    },
    {
      "@type": "Question",
      "name": "Como a taxa de atualização do monitor afeta o resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Um monitor de 60 Hz mostra um novo quadro a cada 16,7 ms, então a luz pode aparecer até esse tempo depois do sinal. Em 144 Hz e 240 Hz, o intervalo entre quadros cai para cerca de 6,9 ms e 4,2 ms. Um mouse com polling de 1.000 Hz envia o clique em intervalos de 1 ms."
      }
    },
    {
      "@type": "Question",
      "name": "O que dispara o aviso de cliques repetidos (anti-spam) neste teste?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clicar antes do clarão branco ou disparar vários cliques seguidos ativa uma pausa de 1,2 segundo. Isso impede que tentativas de adivinhar o momento entrem na sua média e mantém o resultado ligado a respostas ao sinal real."
      }
    },
    {
      "@type": "Question",
      "name": "Sono, cansaço e cafeína mudam o tempo de reação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Dormir pouco, cansaço e distração costumam deixar as respostas mais lentas e mais irregulares, e a cafeína pode ter um efeito pequeno e variável. Para comparar sessões de forma justa, teste em horário parecido, descansado, com a mesma tela, o mesmo mouse e o mesmo navegador."
      }
    },
    {
      "@type": "Question",
      "name": "Dá para melhorar o reflexo com treino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A prática costuma deixar os tempos mais consistentes e reduzir cliques antecipados, porque você aprende a manter a atenção e a mão prontas. Ganhos na reação simples tendem a ser pequenos; descanso e um equipamento com menos latência muitas vezes mudam mais o número. A transferência para jogos ou esportes não é garantida."
      }
    },
    {
      "@type": "Question",
      "name": "O teste de reflexo é grátis? É um exame médico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É grátis, funciona sem cadastro e os resultados ficam no armazenamento local do seu navegador. Não é exame médico nem avaliação neurológica: é uma ferramenta de prática. Se você notar lentidão ou falta de coordenação fora do comum, procure um profissional de saúde."
      }
    }
  ]
};

const lightReactionGuide = {
  heading: "Teste de reflexo online: como entender seu tempo de reação visual",
  intro: [
    "Este teste de reflexo online mede seu tempo de reação visual: espere o círculo central acender em branco e clique o mais rápido possível. A espera muda a cada rodada, então adivinhar não ajuda. É o mesmo tipo de teste de reação simples usado em estudos de cronometria mental, mas aqui o resultado também inclui o atraso da tela, do navegador e do mouse.",
    "Entre ver a luz e clicar entram a retina, as vias visuais, a preparação do movimento e o comando motor para a mão. Quanto dura cada etapa varia conforme o estudo e a pessoa; um teste no navegador mede só o total, somado ao atraso da tela e do mouse (Kosinski, 2008; Jain et al., 2015).",
    "Segundo a Lei de Piéron (1952; Pins & Bonnet, 1996), quanto mais forte o estímulo em relação ao fundo, mais rápida tende a ser a reação. Por isso o drill usa um clarão branco sobre fundo escuro. Pesquisas de atenção encoberta (Posner, 1980) e jogos de ação (Dye et al., 2009) sugerem que a atenção dirigida pode encurtar a fase de preparação da resposta.",
    "Metodologia e Precisão Temporal: As exibições de luz e os cliques do usuário são capturados pela API de alta resolução performance.now(). A quantização de quadros da tela e a varredura USB (Woods et al., 2015) continuam somando alguns milissegundos ao resultado, por isso compare sessões no mesmo equipamento. Os dados ficam só no seu navegador."
  ],
  benchmarks: {
    title: "Referências do teste de reflexo (escala própria deste drill)",
    headers: ["Nível", "Tempo de reação médio (ms)", "Pontos e combo", "O que conferir"],
    rows: [
      ["Nível 1: muito rápido", "< 180 ms", "15.000+ PTS | Combo 28x+", "Confira se não houve queimada de largada (clique antes da luz)."],
      ["Nível 2: rápido", "180 – 219 ms", "10.500 – 14.999 PTS | Combo 18x+", "Mantenha a velocidade e reduza a variação entre tentativas."],
      ["Nível 3: médio", "220 – 259 ms", "6.000 – 10.499 PTS | Combo 10x+", "Faixa comum em medições no navegador; muda com o cansaço e o dia."],
      ["Nível 4: um pouco lento", "260 – 319 ms", "2.500 – 5.999 PTS | Combo 5x+", "Confira atraso da tela, cansaço visual e concentração."],
      ["Nível 5: começando", "> 320 ms", "< 2.500 PTS | Combo < 5x", "Tela de 60 Hz, atraso do toque ou cansaço podem pesar."]
    ],
    note: "Esta tabela é uma escala de treino da SkillDrills, não um padrão científico, nem média por idade, nem percentil de usuários. Tela, mouse e disposição mudam os resultados."
  },
  techniques: {
    title: "Como treinar o tempo de reação sem confundir latência do aparelho",
    items: [
      {
        name: "Pré-Ativação Foveal e Fixação Central",
        desc: "Travar a fóvea visual estritamente no centro evita o atraso extra das mudanças de foco (Posner, 1980).",
        tips: "Fixe os olhos no círculo escuro central; não desvie o olhar para o relógio ou para os pontos do placar enquanto espera."
      },
      {
        name: "Otimização de Contraste e Priming Fotorreceptor",
        desc: "O contraste elevado maximiza as frequências de disparo ganglionar retiniano, diminuindo o tempo de transdução (Pins & Bonnet, 1996).",
        tips: "Reduza a iluminação do ambiente para que suas pupilas se dilatem levemente, intensificando o impacto perceptual do flash branco."
      },
      {
        name: "Pré-Tensão Músculo-Digital Isométrica",
        desc: "A distância do curso do botão e o debounce adicionam atrasos mecânicos desnecessários se o dedo estiver flutuando (Woods et al., 2015).",
        tips: "Repouse a ponta do dedo diretamente sobre o switch do mouse com uma leve pré-tensão relaxada, sem folga mecânica."
      },
      {
        name: "Calibração e Monitores de Alta Frequência",
        desc: "Um display de 60 Hz adiciona até 16,7 ms de atraso de quadro, enquanto um monitor de 240 Hz reduz esse tempo para cerca de 4,2 ms (Woods et al., 2015).",
        tips: "Execute o drill em telas de 144 Hz ou 240 Hz com mouse de 1.000 Hz para registrar seus reflexos sem gargalos técnicos."
      }
    ]
  },
  steps: [
    "Clique em Iniciar Drill para iniciar a sessão de 45 segundos de reação à luz.",
    "Fixe a visão de forma firme no círculo escuro localizado no centro da tela.",
    "Aguarde pacientemente pelos intervalos aleatórios (300 ms a 2.500 ms) sem precipitação.",
    "Clique ou toque na tela no momento exato em que o alvo brilhar em branco puro (+150 PTS × Multiplicador).",
    "Analise seu tempo médio de reação, melhor combo e graduação de precisão ao fim do teste."
  ],
  audience: "Jogadores de e-sports táticos, lutadores, corredores de velocidade, pilotos de corrida e todos que desejam desenvolver a velocidade do reflexo visual.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('woods2015', 'kosinski2008', 'pins1996', 'posner1980', 'jain2015', 'dye2009'),
  related: [
    { href: "/pt/drills/visual/reaction-speed/go/no-go", label: "Teste Go / No-Go de Inibição" },
    { href: "/pt/drills/visual/depth-perception/distance-judgment", label: "Percepção de Profundidade e Distância" },
    { href: "/pt/drills/visual/tracking-accuracy/moving-target", label: "Interceptação de Alvo Móvel" },
    { href: "/pt/drills/visual/tracking-accuracy/multiple-targets", label: "Rastreamento de Múltiplos Objetos" },
    { href: "/pt/drills/visual/tracking-accuracy/pursuit-tracker", label: "Rastreador de Perseguição Suave" },
    { href: "/pt/drills/visual/visual-recognition/entropic-grid", label: "Busca em Grade Entrópica" }
  ]
};

export default function StrobeLatencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <StrobeLatencyClient copy={{ title: "Teste de Reflexo Online (Tempo de Reação)", startCardTitle: "Teste de reflexo", startCardSubtitle: "Clique quando a luz acender e veja seu tempo em ms" }} />
      <DrillGuide guide={lightReactionGuide} />
      <RelatedDrills />
    </>
  );
}
