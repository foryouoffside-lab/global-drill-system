import MotorSequencingClient from '@/app/drills/physical/fitness/agility-ladder/MotorSequencingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// PESQUISA DE PALAVRAS-CHAVE NATIVAS (SERP BRASIL / PT-BR)
// Clusters nativos revisados por intenção; concorrência ainda não medida:
// - "treino escada de agilidade" (Busca de alta intenção esportiva e funcional)
// - "exercicios na escada de agilidade" (Metodologia de condicionamento e footwork)
// - "escadinha de agilidade exercicios" (Variação coloquial brasileira comum no futebol)
// - "treino de footwork e agilidade" (Destreza de passadas e deslocamento)
// - "treino de velocidade e agilidade" (Velocidade e cadência neuromuscular)
// - "coordenacao motora e agilidade" (Capacidade psicomotora geral)
// - "counter strafing ritmo" (Transposição para jogos de tiro e mecânica de FPS)
// - "treino de sequenciamento motor" (Neurociência do movimento coordenado)
// ============================================================

export const metadata = {
  title: "Treino de Escada de Agilidade | SkillDrills",
  description: 'Jogo de ritmo inspirado na escada de agilidade: clique degraus alternados com o mouse e treine cadência e coordenação. Não treina os pés.',
  keywords: [
    "treino de escada de agilidade",
    "exercicios na escada de agilidade",
    "escadinha de agilidade exercicios",
    "treino de footwork e agilidade",
    "treino de velocidade e agilidade",
    "coordenacao motora e agilidade",
    "counter strafing ritmo",
    "treino de sequenciamento motor",
    "cadencia e reflexo motor",
    "treino de agilidade online",
    "jogo de ritmo com mouse"
  ],
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/physical/fitness/agility-ladder',
    languages: getAlternateLanguages('/drills/physical/fitness/agility-ladder'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Treino de Escada de Agilidade | SkillDrills",
    description: 'Jogo de ritmo inspirado na escada de agilidade: clique degraus alternados com o mouse e treine cadência e coordenação. Não treina os pés.',
    url: 'https://skilldrills.online/pt/drills/physical/fitness/agility-ladder',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Treino de Escada de Agilidade | SkillDrills",
    description: 'Jogo de ritmo inspirado na escada de agilidade: clique degraus alternados com o mouse e treine cadência e coordenação. Não treina os pés.',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills Início",
      "item": "https://skilldrills.online/pt"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Treinamento Físico",
      "item": "https://skilldrills.online/pt/drills/physical"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Condicionamento e Agilidade",
      "item": "https://skilldrills.online/pt/drills/physical/fitness"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Treino de Escada de Agilidade (Ritmo com Mouse)",
      "item": "https://skilldrills.online/pt/drills/physical/fitness/agility-ladder"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Agility"],
  "name": "Treino de Escada de Agilidade & Sequenciamento Motor",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Simulador digital de escada de agilidade e ritmo motor para treinamento de coordenação bilateral e cadência rítmica de deslocamento.",
  "url": "https://skilldrills.online/pt/drills/physical/fitness/agility-ladder",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online/pt"
  },
  "inLanguage": "pt-BR",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Treinador de Cadência e Agilidade Motora",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador moderno compatível com HTML5 Canvas e Pointer Lock API",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/pt/drills/physical/fitness/agility-ladder",
  "inLanguage": "pt-BR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jogo de Escada de Agilidade (Agility Ladder Drill)",
  "url": "https://skilldrills.online/pt/drills/physical/fitness/agility-ladder",
  "description": "Jogo de ritmo e sequenciamento motor com mouse em degraus descendentes, inspirado na escada de agilidade e no ritmo de counter-strafing.",
  "genre": [
    "Fitness Drill",
    "Motor Sequencing",
    "Rhythm Training",
    "Action"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "inLanguage": "pt-BR",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual é a base fisiológica da escada de agilidade aplicada à coordenação motora fina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O exercício simula a clássica escadinha de agilidade atlética no ambiente do cursor. Ao transitar rapidamente entre degraus descendentes (esquerda-direita-esquerda-direita), o córtex motor treina o sequenciamento serial de Lashley (1951), agrupando múltiplos microajustes balísticos em um único bloco de ação motora contínua."
      }
    },
    {
      "@type": "Question",
      "name": "O que afirma a teoria de Schmidt sobre o Programa Motor Generalizado (GMP) neste treino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Richard Schmidt (1975) propôs que movimentos velozes e rítmicos preservam a invariância temporal relativa. Embora a velocidade dos degraus acelere de 150 para 750 px/s, a proporção de tempo entre as passadas laterais (1:1:1:1) permanece constante, permitindo adaptar a cadência motora sem reaprender o gesto."
      }
    },
    {
      "@type": "Question",
      "name": "Como este exercício aprimora a mecânica de counter-strafing em jogos como CS2 e Valorant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O counter-strafing perfeito exige alternar passadas laterais em tempos rigorosos para anular a inércia do boneco e estabilizar o primeiro tiro. Este drill treina o ritmo de alternância esquerda-direita com o mouse; não há garantia de transferência direta para o jogo."
      }
    },
    {
      "@type": "Question",
      "name": "Como a velocidade de rolagem e a hitbox dos degraus progridem ao longo dos 15 níveis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cada 250 pontos conquistados a dificuldade avança. A velocidade de descida da escada salta de 150 px/s no nível 1 para 750 px/s nos níveis 12 a 15, enquanto a hitbox permissiva de contato dos degraus encolhe de 18 pixels para apenas 10 pixels."
      }
    },
    {
      "@type": "Question",
      "name": "Deixar de tocar um degrau ou errar a sequência reduz o tempo de sessão ou desconta pontos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não há dedução na pontuação total nem penalidade de tempo nos 45 segundos de prova. Entretanto, perder um degrau ou quebrar a ordem serial reinicia imediatamente o multiplicador de combo para 1.0x, reforçando a consistência rítmica."
      }
    },
    {
      "@type": "Question",
      "name": "Por que devo interceptar os degraus levemente abaixo do centro visual para não errar o clique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Como a escada desce verticalmente de forma ininterrupta, mirar exatamente onde o degrau está no instante da percepção resulta em passar por cima do vazio. Aplicando a lei de interceptação de alvos móveis de Fitts (1954), o cursor deve antecipar o deslocamento mirando 2 a 3 pixels abaixo do centro geométrico do alvo."
      }
    },
    {
      "@type": "Question",
      "name": "Qual configuração de sensibilidade de mouse e pegada favorece o ritmo de alternância rápida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma pegada em garra (claw grip) ou ponta dos dedos (fingertip) combinada a uma sensibilidade média (entre 30 e 40 cm/360°) oferece a melhor resposta para micro-oscilações laterais rápidas do punho, permitindo manter o pêndulo de cadência sem fadiga do antebraço."
      }
    },
    {
      "@type": "Question",
      "name": "Como atingir a pontuação máxima de 17.000 pontos e o título de Apex Ladder Master?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É mandatório manter a sequência de 4 degraus como um chunk contínuo sem hesitação intermediária, preservando o multiplicador de 3.0x durante todos os 45 segundos. Manter o ritmo consistente mesmo quando a velocidade ultrapassa 600 px/s indica boa consistência de cadência."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a técnica de fixação ocular recomendada em velocidades extremas acima de 500 px/s?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não tente perseguir cada degrau individual com os olhos. Mantenha o olhar fixo na linha vertical imaginária do centro da tela e utilize a visão periférica para disparar os movimentos oscilatórios rítmicos da mão como um metrônomo calibrado."
      }
    },
    {
      "@type": "Question",
      "name": "O simulador armazena meus recordes de forma segura e privada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Todos os cálculos de taxa de quadros e temporização de alta precisão usam performance.now() localmente. Nenhum dado de gameplay ou identificador de máquina é enviado para servidores externos; tudo permanece confidencial no LocalStorage do seu navegador."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Protocolo de Execução da Escada de Agilidade e Sequenciamento Motor",
  "description": "Passo a passo para conectar degraus em cadência alternada esquerda-direita e praticar o ritmo de alternância.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Alinhamento no Eixo Central da Escada",
      "text": "Inicie o teste posicionando o cursor na linha média central entre as duas hastes verticais da escada descendente.",
      "url": "https://skilldrills.online/pt/drills/physical/fitness/agility-ladder#passo-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Primeiro Toque Balístico no Degrau 1",
      "text": "Assim que a escada descer, mova o cursor em um snap rápido para tocar o primeiro degrau ativo no lado esquerdo.",
      "url": "https://skilldrills.online/pt/drills/physical/fitness/agility-ladder#passo-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Conclusão Rítmica da Sequência de 4 Degraus",
      "text": "Complete a sequência (1 Esq → 2 Dir → 3 Esq → 4 Dir) em um fluxo contínuo e sem pausas para acionar o sinal verde de sucesso.",
      "url": "https://skilldrills.online/pt/drills/physical/fitness/agility-ladder#passo-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Construção de Combo e Aceleração até 750 px/s",
      "text": "Mantenha o ritmo ininterrupto para levar o combo até 3.0x e sobreviver às velocidades extremas dos níveis finais.",
      "url": "https://skilldrills.online/pt/drills/physical/fitness/agility-ladder#passo-4"
    }
  ]
};

const ladderGuide = {
  heading: "Fundamentação Biomecânica: Sequenciamento Motor Serial e Cadência Rítmica",
  subtitle: "Ordenação serial de Lashley, invariância temporal de Schmidt (GMP) e dinâmica de interceptação de Fitts",
  intro: [
    "O treino na escada de agilidade (Agility Ladder Drill) é um exercício comum de preparação física no atletismo, futebol, boxe e basquete para trabalhar a velocidade dos pés. Este jogo não treina os pés: a escada de solo é transposta para um padrão cinemático contínuo que testa a capacidade do sistema nervoso de executar sequências bilaterais rápidas em resposta a alvos em rolagem vertical.",
    "O neuropsicólogo pioneiro Karl Lashley (1951), em seu estudo seminal sobre 'A Ordem Serial no Comportamento', demonstrou que ações motoras em alta cadência não podem ser controladas por feedback sensorial passo a passo, devido ao atraso de latência da alça reflexa (mínimo de 100-150ms). O cérebro precisa pré-programar os 4 passos da escada como um 'bloco motor unificado' (motor chunk), disparando a alternância completa em um único impulso sincronizado.",
    "Esse princípio é reforçado pela teoria do Programa Motor Generalizado (GMP) de Richard A. Schmidt (1975), que estabelece a invariância temporal relativa: a estrutura proporcional do ritmo permanece constante independentemente da aceleração absoluta da tarefa. Conforme a velocidade escala de 150 px/s para 750 px/s e as hitboxes diminuem de 18 para 10 pixels, o atleta do mouse deve aplicar as correções preditivas de Fitts (1954), interceptando alvos móveis através de antecipação angular inferior sem colapsar a cadência metronômica.",
    "Especificações de precisão técnica: Este treino opera diretamente no motor Canvas com mensuração por performance.now() em resolução de cerca de 1 ms. O desempenho percebido correlaciona-se com a taxa de atualização do monitor (60Hz = 16,6ms; 144Hz = 6,9ms; 240Hz = 4,1ms) e a frequência de polling do mouse. Oscilações inferiores a 5ms constituem variações normais de hardware."
  ],
  benchmarks: {
    title: "Faixas de Referência de Agilidade Motora (5 Níveis)",
    headers: ["Faixa", "Classificação editorial", "Pontuação Alvo", "Nível Atingido", "Velocidade de Rolagem", "Perfil Neurofuncional de Cadência"],
    rows: [
      ["Faixa 1", "Muito alta", "17.000+ pontos", "Nível 12 – 15", "600 – 750 px/s", "Agrupamento serial de 4 passos perfeito; manutenção impecável de cadência metronômica a 750 px/s (Lashley 1951; Schmidt 1975)"],
      ["Faixa 2", "Alta", "13.000 – 16.999 pts", "Nível 9 – 11", "480 – 599 px/s", "Excelente alternância bilateral em alta cadência; interceptação preditiva consistente em degraus estreitos de 10-12px (Fitts 1954)"],
      ["Faixa 3", "Boa", "9.500 – 12.999 pts", "Nível 6 – 8", "350 – 479 px/s", "Nível avançado para atletas e jogadores competitivos; boa coordenação de punho e controle de ritmo estável"],
      ["Faixa 4", "Intermediária", "6.000 – 9.499 pts", "Nível 3 – 5", "230 – 349 px/s", "Faixa intermediária; quebras periódicas de ritmo quando a rolagem ultrapassa 350 px/s devido a hesitação sensorial"],
      ["Faixa 5", "Inicial", "< 6.000 pontos", "Nível 1 – 2", "< 230 px/s", "Dificuldade na integração rítmica dos 4 passos; tendência a reagir a cada degrau individualmente com perda de alinhamento"]
    ],
    note: "Faixas editoriais para comparar suas próprias sessões, não percentis de população nem normas clínicas. Padrões consolidados com base na ordenação serial motora (Lashley 1951), teoria do GMP (Schmidt 1975) e dinâmica de interceptação de Fitts (1954)."
  },
  techniques: {
    title: "Protocolos Práticos para Domínio do Ritmo e Agilidade na Escada",
    items: [
      {
        name: "Agrupamento Motor em Bloco Único de Lashley (4-Step Serial Chunking)",
        desc: "Não reaja a cada degrau como uma decisão isolada. Visualize a sequência 'Esq-Dir-Esq-Dir' como um único gesto contínuo e fluído, liberando a alternância completa a partir do primeiro toque.",
        tips: "Abandone a checagem visual entre os degraus e deixe a mão oscilar ritmicamente como um pêndulo elástico."
      },
      {
        name: "Invariância Temporal Rítmica de Schmidt (GMP Metronomic Cadence)",
        desc: "Ao enfrentar aumentos bruscos de velocidade da escada, mantenha a proporção relativa de tempo 1:1:1:1 constante. Ajuste apenas a intensidade muscular do punho, preservando o compasso interno.",
        tips: "Conte mentalmente um ritmo quaternário constante ('um-dois-três-quatro') para estabilizar as transições."
      },
      {
        name: "Interceptação Preditiva com Compensação de Descida (Moving Target Interception)",
        desc: "Como os degraus descem continuamente, mire 2 a 3 pixels abaixo do centro da caixa. O movimento de descida fará o degrau encontrar seu cursor exatamente no ponto ideal.",
        tips: "Evite mirar no topo do degrau para que ele não escorregue por baixo do cursor antes do toque."
      },
      {
        name: "Fixação Ocular Central Desfocada para Alta Velocidade (Central Axis Gaze)",
        desc: "Nas velocidades superiores a 500 px/s, acompanhar os degraus com os olhos causa desorientação. Fixe o olhar suavemente na linha central da escada e use a visão periférica para guiar o punho.",
        tips: "Permita que o brilho dos degraus na periferia dispare o ritmo automático da mão."
      }
    ]
  },
  steps: [
    "Sente-se com boa postura e posicione o cursor na linha média entre as hastes da escada.",
    "Ao iniciar a descida, execute o snap inicial em direção ao primeiro degrau à esquerda.",
    "Conecte os degraus 2, 3 e 4 em um único movimento rítmico contínuo sem hesitar.",
    "Preserve o multiplicador de 3.0x ininterruptamente para atingir o nível Apex durante os 45 segundos."
  ],
  audience: "Gamers de eSports que querem praticar ritmo de counter-strafing e quem busca um exercício de cadência e coordenação olho-mão. Não substitui o treino físico com escada no chão.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('lashley1951', 'schmidt1975', 'fitts1954', 'woodworth1899', 'woods2015')
};

export default function AgilityLadderPagePt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <MotorSequencingClient
        copy={{
          title: "Treino de Escada de Agilidade",
          subtitle: "Siga passadas alternadas com ritmo • 15 níveis",
          hudLabels: {
            score: "Pontuação",
            timeLeft: "Tempo Restante",
            bestScore: "Melhor Pontuação",
            bestCombo: "Melhor Combo"
          },
          rulesTitle: "Regras do Teste da Escada de Agilidade e Pontuação",
          rules: [
            { title: "Toque Sequencial em Degraus", text: "Toque os degraus na ordem estrita de descida (1 Esq → 2 Dir → 3 Esq → 4 Dir) para completar a escada." },
            { title: "Multiplicador de Combo", text: "Complete escadas consecutivas sem perder degraus para elevar o multiplicador até 3.0x." },
            { title: "Aceleração Progressiva", text: "A cada 250 pontos a velocidade de rolagem sobe de 150 para 750 px/s e as hitboxes diminuem." },
            { title: "Quebra de Sequência", text: "Errar a ordem ou perder um degrau reinicia o multiplicador para 1.0x, sem perda de pontuação." }
          ],
          aboutTitle: "Sobre a Escada de Agilidade e Sequenciamento Motor",
          aboutHeading: "Ritmo e Coordenação Bilateral com o Mouse",
          aboutText: "Inspirado nos exercícios tradicionais de escada de agilidade do futebol e do boxe, este jogo pratica o sequenciamento serial descrito por Lashley (1951). A alternância rítmica do cursor exercita a cadência motora com o mouse, útil como prática extra de ritmo para jogos de tiro.",
          aboutCards: [
            {
              title: "Público-Alvo",
              desc: "Gamers buscando praticar o ritmo de counter-strafing e paradas de mira, e praticantes de coordenação fina com o mouse."
            },
            {
              title: "Habilidades Desenvolvidas",
              desc: "Cadência rítmica bilateral, agrupamento serial motor de 4 passos, interceptação dinâmica de alvos móveis e controle de desaceleração."
            },
            {
              title: "Velocidade Adaptativa",
              desc: "A rolagem vertical escala de 150 até 750 px/s com variações laterais, exigindo adaptação psicomotora contínua sob pressão."
            }
          ]
        }}
      />
      <DrillGuide guide={ladderGuide} />
      <RelatedDrills />
    </>
  );
}
