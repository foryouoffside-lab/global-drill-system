import DividedAttentionClient from '@/app/drills/cognitive/attention/divided-attention/DividedAttentionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de Atenção Dividida | Dupla Tarefa | SkillDrills",
  description: "Teste de atenção dividida online grátis: clique nos alvos que aparecem e marque os números pares ao mesmo tempo. Treino de dupla tarefa, não é diagnóstico.",
  keywords: [
    "teste de atencao dividida",
    "atencao dividida exercicios",
    "teste de dupla tarefa online",
    "treino de atencao dividida",
    "periodo refratario psicologico",
    "gargalo cognitivo teste",
    "teste de atencao compartilhada",
    "multitarefa cognitiva teste",
    "rastreamento visual e numeros",
    "exercicio de foco duplo",
    "treino mental de dupla tarefa"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Atenção Dividida | Dupla Tarefa | SkillDrills",
    description: "Teste de atenção dividida online grátis: clique nos alvos que aparecem e marque os números pares ao mesmo tempo. Treino de dupla tarefa, não é diagnóstico.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/cognitive/attention/divided-attention',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de Atenção Dividida | Dupla Tarefa | SkillDrills",
    description: "Teste de atenção dividida online grátis: clique nos alvos que aparecem e marque os números pares ao mesmo tempo. Treino de dupla tarefa, não é diagnóstico.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/cognitive/attention/divided-attention',
    languages: getAlternateLanguages('/drills/cognitive/attention/divided-attention'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://skilldrills.online/pt"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Treinos",
      "item": "https://skilldrills.online/pt/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cognitivo",
      "item": "https://skilldrills.online/pt/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Atenção Dividida e Dupla Tarefa",
      "item": "https://skilldrills.online/pt/drills/cognitive/attention/divided-attention"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Divided_attention"],
  "name": "Teste de Atenção Dividida – Dupla Tarefa",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Teste de atenção dividida online grátis: clique nos alvos que aparecem e marque os números pares ao mesmo tempo. Treino de dupla tarefa, não é diagnóstico.",
  "url": "https://skilldrills.online/pt/drills/cognitive/attention/divided-attention",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Teste de Atenção Dividida Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requer navegador moderno com suporte a JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/pt/drills/cognitive/attention/divided-attention",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jogo de Foco Dividido e Multitarefa Cognitiva",
  "url": "https://skilldrills.online/pt/drills/cognitive/attention/divided-attention",
  "description": "Teste de atenção dividida online grátis: clique nos alvos que aparecem e marque os números pares ao mesmo tempo. Treino de dupla tarefa, não é diagnóstico.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é atenção dividida e o que este teste avalia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Atenção dividida é acompanhar duas fontes de informação ao mesmo tempo. Aqui você clica nos alvos azuis que aparecem em posições aleatórias e toca em “Classificar” quando o dígito (0 a 9) do painel lateral é par. É um treino, não um teste clínico nem o exame oficial do Detran."
      }
    },
    {
      "@type": "Question",
      "name": "O que é o Período Refratário Psicológico (PRP, Pashler 1994)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O PRP é o atraso da segunda resposta quando um segundo estímulo surge logo após o primeiro, atribuído a um gargalo central na seleção de respostas."
      }
    },
    {
      "@type": "Question",
      "name": "O que postula a Teoria dos Múltiplos Recursos de Wickens (2002)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Segundo Christopher Wickens, a atenção se divide com mais facilidade quando as tarefas usam canais sensoriais e códigos diferentes (por exemplo, espacial-visual e numérico)."
      }
    },
    {
      "@type": "Question",
      "name": "É possível treinar e melhorar a capacidade de dupla tarefa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sua pontuação neste treino pode subir com a prática, mas a transferência para outras tarefas ou para o dia a dia não é garantida. Spelke et al. (1976) observaram que a prática prolongada pode melhorar a execução de duas tarefas ao mesmo tempo."
      }
    },
    {
      "@type": "Question",
      "name": "Por que o teste combina alvos na tela e classificação de números?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As duas tarefas usam códigos diferentes: localizar uma posição na tela de um lado e aplicar uma regra (par ou ímpar) a um dígito do outro. É a situação descrita pela teoria dos múltiplos recursos."
      }
    },
    {
      "@type": "Question",
      "name": "Como este exercício se aplica ao desempenho em esportes e videogames?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O treino reproduz a carga de acompanhar dois fluxos ao mesmo tempo, como minimapa e ação no jogo ou estrada e painel ao dirigir. Não garante melhora no jogo nem ao volante."
      }
    },
    {
      "@type": "Question",
      "name": "Como a pontuação e a nota são calculadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada acerto vale 100 pontos base multiplicados pelo combo e pelo nível. A nota depende da pontuação, e 24.000 pontos equivalem à nota máxima; a precisão aparece à parte. São referências de prática do SkillDrills, não estatísticas populacionais."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo dura uma partida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O relógio começa em 45 segundos: +2 s por acerto (máximo de 60 s) e −1 s por erro ou alvo perdido. A partida continua até o tempo zerar; conforme a pontuação sobe, o nível aumenta, os estímulos trocam mais rápido e os alvos ficam menores."
      }
    },
    {
      "@type": "Question",
      "name": "O que conta como erro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tocar em “Classificar” com número ímpar, tocar duas vezes no mesmo número, deixar um alvo sumir ou deixar passar um número par. Cada erro dispara um flash vermelho, zera o combo e tira 1 segundo."
      }
    },
    {
      "@type": "Question",
      "name": "Este teste online de atenção dividida é gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, o SkillDrills oferece este treino de atenção dividida 100% gratuito e direto no navegador, sem taxas ou formulários de cadastro."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Realizar o Teste de Atenção Dividida",
  "description": "Teste de atenção dividida online grátis: clique nos alvos que aparecem e marque os números pares ao mesmo tempo. Treino de dupla tarefa, não é diagnóstico.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Clique no Alvo Azul",
      "text": "Clique ou toque no alvo azul que aparece em uma posição aleatória antes que ele suma: +2 s por acerto (máximo de 60 s).",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/divided-attention#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Processe o Fluxo Secundário de Números",
      "text": "Observe o painel lateral: se o dígito for par (0, 2, 4, 6, 8), toque em “Classificar”; se for ímpar, não faça nada.",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/divided-attention#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Responda com Mouse ou Toque",
      "text": "As duas tarefas são feitas com clique ou toque (o teclado não é usado, exceto Esc para sair).",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/divided-attention#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Equilibre a Precisão em Ambos os Canais",
      "text": "Não privilegie uma tarefa só: sem erros, o multiplicador de combo cresce; cada erro zera o combo e custa 1 segundo.",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/divided-attention#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('pashler1994', 'wickens2002', 'strayer2001', 'spelke1976', 'woods2015'),
  intro: {
    title: "Teste de Atenção Dividida: Guia",
    paragraphs: [
      "Este teste de atenção dividida online grátis pede duas tarefas ao mesmo tempo: clicar nos alvos que aparecem e marcar os números pares. É uma autoavaliação não clínica.",
      "Os estudos de Harold Pashler (1994) sobre o Período Refratário Psicológico (PRP) descrevem um gargalo central: quando duas respostas precisam ser escolhidas quase ao mesmo tempo, a segunda atrasa.",
      "Inspirado na Teoria dos Múltiplos Recursos de Christopher Wickens (2002), o treino combina uma tarefa espacial (clicar no alvo) com uma numérica (par ou ímpar).",
    ],
  },
  benchmarks: {
    title: 'Faixas de prática SkillDrills (precisão)',
    headers: ['Nível', 'Classificação', 'Faixa de Rendimento', 'Precisão', 'Marcador de prática'],
    note: "Faixas editoriais de prática para comparar suas próprias sessões; não são estatísticas de população nem normas clínicas.",

    rows: [
      { tier: 'Faixa 1', rank: 'Muito avançada', stat: 'Ritmo muito alto', accuracy: '98%+', marker: 'Ritmo muito alto com alta precisão' },
      { tier: 'Faixa 2', rank: 'Avançada', stat: 'Ritmo alto', accuracy: '94-97%', marker: 'Ritmo alto e regular' },
      { tier: 'Faixa 3', rank: 'Sólida', stat: 'Ritmo estável', accuracy: '88-93%', marker: 'Ritmo estável com alguns erros' },
      { tier: 'Faixa 4', rank: 'Em desenvolvimento', stat: 'Ritmo médio', accuracy: '78-87%', marker: 'Ritmo médio com margem de melhora' },
      { tier: 'Faixa 5', rank: 'Inicial', stat: 'Ritmo inicial', accuracy: '< 78%', marker: 'Ponto de partida' },
    ],
  },
  protocols: {
    title: 'Protocolos de Treinamento em Dupla Tarefa',
    description: 'As etapas de uma partida, para lidar com os dois canais sem perder o combo.',
    items: [
      { title: "Clique no Alvo Azul", description: "Clique ou toque no alvo azul que aparece em uma posição aleatória antes que ele suma: +2 s por acerto (máximo de 60 s)." },
      { title: "Processe o Fluxo Secundário de Números", description: "Observe o painel lateral: se o dígito for par (0, 2, 4, 6, 8), toque em “Classificar”; se for ímpar, não faça nada." },
      { title: "Responda com Mouse ou Toque", description: "As duas tarefas são feitas com clique ou toque (o teclado não é usado, exceto Esc para sair)." },
      { title: "Equilibre a Precisão em Ambos os Canais", description: "Não privilegie uma tarefa só: sem erros, o multiplicador de combo cresce; cada erro zera o combo e custa 1 segundo." },
    ],
  },
  faqs: {
    title: 'Perguntas Frequentes (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function EnhancedPagePt() {
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
      <DividedAttentionClient copy={{
        title: "Teste de Atenção Dividida", subtitle: "Clique em alvos e classifique números ao mesmo tempo",
        statScore: "Pontos", statTime: "Tempo", timeLeft: "Tempo restante", statLevel: "Nível", statBest: "Melhor pontuação",
        match: "Classificar", evenNumbers: "NÚMEROS PARES", tapEven: "Toque nos pares", startTitle: "Teste de Atenção Dividida", startSubtitle: "Dupla tarefa · foco alternado",
        getReady: "Prepare-se", dualAccuracy: "Precisão dupla", hits: "Acertos", misses: "Erros", peakLevel: "Maior nível",
        caption: "Clique no alvo que aparece e classifique simultaneamente os números pares no fluxo lateral.",
        rulesTitle: "Instruções e pontuação", ruleItems: [
          { text: "Acerte o alvo", highlight: "+100 PTS", result: "Alvo clicado: +2 s (máx. 60 s)" },
          { text: "Classifique os pares", highlight: "Resposta correta", result: "Pressione quando for par" },
          { text: "Ignore os ímpares", highlight: "Sem erro", result: "Não pressione nos ímpares" },
          { text: "Erro / alvo perdido", highlight: "Combo zerado", result: "−1 s" },
        ],
        aboutTitle: "Sobre atenção dividida e dupla tarefa", aboutLead: "Este é um autocheck cognitivo não clínico que combina clique em alvos com classificação numérica para observar o desempenho dos dois canais.",
        audienceTitle: "Para quem é", audienceText: "Para jogadores que acompanham minimapa e alvo, estudantes e pessoas que precisam lidar rapidamente com várias entradas.",
        skillsTitle: "Habilidades treinadas", skillsText: "Processamento em dupla tarefa, rastreamento visual, decisão numérica e distribuição da atenção.", flexibilityTitle: "Processamento paralelo", flexibilityText: "Alterne entre os dois fluxos sem deixar a precisão de um canal cair."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
