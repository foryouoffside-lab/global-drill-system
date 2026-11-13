import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Tempo de Reação de Escolha: Teste Online | SkillDrills",
  description: "Tempo de reação de escolha: toque no alvo vermelho ou azul indicado pela regra que muda e pratique velocidade de decisão. Treino grátis, não exame clínico.",
  keywords: ["tempo de reação de escolha", "reação de escolha", "teste de escolha rápida", "velocidade de decisão", "lei de Hick"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Tempo de Reação de Escolha: Teste Online | SkillDrills",
    description: "Tempo de reação de escolha: toque no alvo vermelho ou azul indicado pela regra que muda e pratique velocidade de decisão. Treino grátis, não exame clínico.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Tempo de Reação de Escolha: Teste Online | SkillDrills",
    description: "Tempo de reação de escolha: toque no alvo vermelho ou azul indicado pela regra que muda e pratique velocidade de decisão. Treino grátis, não exame clínico.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/reaction-time'),
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
      "name": "Tempo de Reação de Escolha",
      "item": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Tempo de Reação de Escolha",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Treino grátis de tempo de reação de escolha no navegador: toque no alvo da cor indicada por uma regra que muda. Resultado em pontos, precisão e nível, sem medição em milissegundos.",
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time",
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
  "name": "Tempo de Reação de Escolha – Teste Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requer navegador moderno com suporte a JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time",
  "inLanguage": "pt-BR",
    "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Tempo de Reação de Escolha – Jogo de Regra de Cor",
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time",
  "description": "Treino grátis de tempo de reação de escolha no navegador: toque no alvo da cor indicada por uma regra que muda. Resultado em pontos, precisão e nível, sem medição em milissegundos.",
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
      "name": "O que é tempo de reação de escolha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É o tempo para identificar, entre vários estímulos, o que corresponde a uma regra e escolher a resposta certa. Aqui aparecem um alvo vermelho e um azul, e você toca na cor pedida pela regra ativa."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre tempo de reação simples e de escolha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na reação simples você responde a um único estímulo esperado. Na de escolha entram a discriminação e a seleção da resposta, por isso ela costuma ser mais lenta (Donders). Este treino ainda acrescenta trocas de regra."
      }
    },
    {
      "@type": "Question",
      "name": "O que diz a Lei de Hick (Hick, 1952)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo de reação aumenta de forma logarítmica com o número de opções. Como você precisa conferir a regra antes de cada toque, o treino exercita justamente essa etapa de decisão."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona a troca de regra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O banner no topo mostra a cor a tocar (vermelho ou azul). A partir do nível 2, a regra se inverte depois de uma sequência de acertos; quanto maior o nível, menos acertos até a troca (no mínimo 2)."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona o tempo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A rodada começa com 45 segundos. Cada acerto soma 2 segundos, até 60. Tocar na cor errada, ou deixar um par de alvos expirar (com Target Timeouts ativado), tira 1 segundo e zera o combo. A rodada termina em 0."
      }
    },
    {
      "@type": "Question",
      "name": "Como são calculados os pontos e a nota?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada acerto vale 100 pontos multiplicados pelo multiplicador de combo e pelo de nível. A pontuação final é comparada com uma referência fixa da SkillDrills e exibida como nota de F a S+."
      }
    },
    {
      "@type": "Question",
      "name": "O treino mede meu tempo de reação em milissegundos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Ele mostra pontos, precisão (acertos sobre todas as tentativas), nível máximo e melhor combo. Tempos de resposta individuais não são registrados em milissegundos."
      }
    },
    {
      "@type": "Question",
      "name": "Dá para melhorar com treino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sua pontuação nesta tarefa costuma subir com a prática. Confira a regra antes de cada toque e mantenha a precisão alta para o combo crescer. Isso não garante reações mais rápidas em outras situações."
      }
    },
    {
      "@type": "Question",
      "name": "É um exame médico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. É um treino no navegador, não um diagnóstico, triagem ou exame psicotécnico oficial. O resultado também depende do aparelho e do dia; compare suas próprias sessões no mesmo aparelho."
      }
    },
    {
      "@type": "Question",
      "name": "É grátis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, é grátis, sem cadastro, e funciona direto no navegador."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como fazer o treino de tempo de reação de escolha",
  "description": "Treino grátis de tempo de reação de escolha no navegador: toque no alvo da cor indicada por uma regra que muda. Resultado em pontos, precisão e nível, sem medição em milissegundos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Monitore a Regra Superior Ativa",
      "text": "Observe o banner no topo da tela que indica a cor do alvo ativo (ex: TOQUE NO VERMELHO ou TOQUE NO AZUL).",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Discrimine os Alvos Visuais",
      "text": "Um alvo vermelho e um azul aparecem juntos: identifique qual corresponde à regra de cor ativa.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Execute o Toque de Decisão",
      "text": "Toque no alvo certo antes que o par mude. Erro ou tempo esgotado custam 1 segundo e o combo.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Adapte-se às Inversões de Regras",
      "text": "Quando a regra no banner alternar, iniba o reflexo anterior imediatamente e passe a tocar na nova cor designada.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('donders1969', 'hick1952', 'hyman1953', 'der2006', 'woods2015'),
  intro: {
    title: "Tempo de Reação de Escolha",
    paragraphs: [
      "O tempo de reação de escolha é o tempo para identificar, entre vários estímulos, aquele que segue a regra e escolher a resposta certa. Neste treino grátis, um alvo vermelho e um azul aparecem juntos e você toca na cor indicada pelo banner. A partir do nível 2 a regra se inverte, então confira a regra antes de cada toque.",
      "Diferente da reação simples a um único estímulo, a reação de escolha acrescenta a discriminação do estímulo e a seleção da resposta, por isso costuma ser mais lenta (Donders).",
      "A Lei de Hick-Hyman (Hick, 1952; Hyman, 1953) descreve o aumento logarítmico do tempo de decisão com o número de opções. O treino mostra pontos, precisão, nível máximo e melhor combo; não mede milissegundos e não é um exame clínico.",
    ],
  },
  benchmarks: {
    title: 'Faixas de treino SkillDrills (precisão)',
    headers: ['Nível', 'Faixa', 'Taxa de Precisão', 'Leitura'],
    rows: [
      { tier: 'Tier 1', rank: 'Muito precisa', accuracy: '98%+', marker: 'Quase sem erros, mesmo após trocas de regra' },
      { tier: 'Tier 2', rank: 'Avançada', accuracy: '94-97%', marker: 'Consistente' },
      { tier: 'Tier 3', rank: 'Boa', accuracy: '88-93%', marker: 'Bom equilíbrio entre velocidade e precisão' },
      { tier: 'Tier 4', rank: 'Em evolução', accuracy: '78-87%', marker: 'Erros concentrados nas trocas de regra' },
      { tier: 'Tier 5', rank: 'Início', accuracy: '< 78%', marker: 'Ponto de partida' },
    ],
    note: 'Faixas de treino definidas pela SkillDrills para comparar suas próprias sessões; não são percentis de população nem normas clínicas.',
  },
  protocols: {
    title: 'Como jogar',
    description: 'Os quatro passos de cada rodada.',
    items: [
      { title: "Monitore a Regra Superior Ativa", description: "Observe o banner no topo da tela que indica a cor do alvo ativo (ex: TOQUE NO VERMELHO ou TOQUE NO AZUL)." },
      { title: "Discrimine os Alvos Visuais", description: "Um alvo vermelho e um azul aparecem juntos: identifique qual corresponde à regra de cor ativa." },
      { title: "Execute o Toque de Decisão", description: "Toque no alvo certo antes que o par mude. Erro ou tempo esgotado custam 1 segundo e o combo." },
      { title: "Adapte-se às Inversões de Regras", description: "Quando a regra no banner alternar, iniba o reflexo anterior imediatamente e passe a tocar na nova cor designada." },
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
      <EliteNeuroSwitchClient
        copy={{
          title: "Tempo de Reação de Escolha",
          subtitle: "Escolha o alvo conforme a cor ativa e treine velocidade de decisão",
          startTitle: "Tempo de Reação de Escolha",
          startSubtitle: "Reação de escolha • Velocidade de decisão",
          stageCaption: "Toque no alvo correspondente à regra ativa. As cores e a regra mudam rapidamente.",
          rulesTitle: "Instruções do Drill e Pontuação",
          aboutTitle: "O que é tempo de reação de escolha?",
          faqTitle: "Perguntas frequentes",
          labels: { score: "Pontos", time: "Tempo", level: "Nível", bestScore: "Melhor pontuação", timeLeft: "Tempo restante", rule: "REGRA", ready: "PREPARE-SE", accuracy: "Precisão", hits: "Acertos", peakLevel: "Nível máximo", maxCombo: "Combo máximo" },
          ruleBanner: { RED: "ALVO VERMELHO", BLUE: "ALVO AZUL" },
          aboutLead: "O tempo de reação de escolha é o intervalo para selecionar a resposta correta entre vários estímulos. Mais alternativas costumam aumentar o tempo de decisão, como descreve a lei de Hick.",
          aboutText: "Este drill combina discriminação visual, leitura da regra e resposta motora. O resultado também inclui atrasos do monitor, do dispositivo de entrada e do navegador. Como a regra muda, cada alvo exige uma nova decisão.",
          aboutCards: [
            { title: "Para quem serve?", desc: "Para jogadores, estudantes e qualquer pessoa que queira praticar decisões visuais rápidas com precisão." },
            { title: "Habilidades treinadas", desc: "Reação de escolha, discriminação visual, execução motora e atenção durante mudanças de regra." },
            { title: "Agilidade na troca", desc: "A cor ativa muda para estimular a atualização rápida do seu mapa de resposta." }
          ],
          rulesItems: [
            { num: "1", text: "Regra ativa", highlight: "VERMELHO / AZUL", result: "Siga o banner superior" },
            { num: "2", text: "Alvo correto", highlight: "+100 pts.", result: "Combo × nível, +2 s (máx. 60 s)" },
            { num: "3", text: "Troca de regra", highlight: "A partir do nível 2", result: "Mais frequente com o nível" },
            { num: "4", text: "Alvo errado / tempo", highlight: "Zera o combo", result: "−1 s" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
