import ConcentrationStaminaClient from '@/app/drills/cognitive/attention/concentration-stamina/ConcentrationStaminaClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de Concentração | Atenção Sustentada | SkillDrills",
  description: "Teste de concentração online grátis de 45 segundos: avalie atenção sustentada, controle inibitório e troca de regras. Não é diagnóstico clínico.",
  keywords: [
    "teste de concentração",
    "teste de concentração online grátis",
    "teste de concentração online",
    "atenção sustentada",
    "teste de atenção",
    "teste de foco e atenção",
    "teste de vigilância cognitiva",
        "treino de foco mental grátis",
    "controle inibitório e foco",
    "teste CPT online",
    "exercício de concentração prolongada"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Concentração | Atenção Sustentada | SkillDrills",
    description: "Teste de concentração online grátis de 45 segundos: avalie atenção sustentada, controle inibitório e troca de regras. Não é diagnóstico clínico.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Teste de Concentração | Atenção Sustentada | SkillDrills",
    description: "Teste de concentração online grátis de 45 segundos: avalie atenção sustentada, controle inibitório e troca de regras. Não é diagnóstico clínico.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina',
    languages: getAlternateLanguages('/drills/cognitive/attention/concentration-stamina'),
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
      "name": "Atenção Sustentada e Concentração",
      "item": "https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Vigilance_(psychology)", "https://en.wikipedia.org/wiki/Attention"],
  "name": "Teste de Concentração e Atenção Sustentada",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Teste de concentração online grátis de 45 segundos: reaja só às vogais ou aos números primos da regra ativa e treine atenção sustentada e controle inibitório.",
  "url": "https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina",
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
  "name": "Teste de Concentração Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requer navegador moderno com suporte a JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jogo de Resistência de Foco e Atenção",
  "url": "https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina",
  "description": "Teste de concentração online grátis de 45 segundos: reaja só às vogais ou aos números primos da regra ativa e treine atenção sustentada e controle inibitório.",
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
      "name": "O que é o Teste de Atenção Sustentada e Resistência de Concentração?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É um treino de 45 segundos no formato CPT (tarefa de desempenho contínuo): letras e números aparecem em sequência e você reage apenas aos que cumprem a regra ativa (vogais ou números primos), ignorando os demais. Não é um teste clínico nem ferramenta de diagnóstico."
      }
    },
    {
      "@type": "Question",
      "name": "O que é o declínio de vigilância (Mackworth, 1948)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mackworth (1948) observou em operadores de radar que a detecção de sinais raros cai à medida que o monitoramento se prolonga. Este teste dura só 45 segundos: não reproduz esse declínio, mas treina a concentração em ritmo rápido."
      }
    },
    {
      "@type": "Question",
      "name": "Como a alternância de regras desafia a resistência mental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cada 10 segundos a regra alterna entre vogais (A E I O U) e números primos (2 3 5 7). Assim você treina a passagem imediata para um novo critério (troca de tarefa, Monsell, 2003)."
      }
    },
    {
      "@type": "Question",
      "name": "Como a pontuação é calculada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pontuação não mede tempo de reação em milissegundos: conta os alvos corretos (+100 pontos), os alvos perdidos (omissões) e os alarmes falsos (comissões). Precisão = acertos ÷ (acertos + omissões + alarmes falsos)."
      }
    },
    {
      "@type": "Question",
      "name": "Como identificar se minha concentração está falhando durante o teste?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Neste teste, a queda de concentração aparece nos alvos perdidos e nos alarmes falsos. Cada alarme falso gera um flash vermelho e bloqueia a resposta por 1 segundo; nenhum ponto é descontado."
      }
    },
    {
      "@type": "Question",
      "name": "Este teste pode detectar TDAH?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. É um exercício de treino não clínico: não faz triagem nem diagnóstico de nenhum transtorno de atenção e não substitui a avaliação de um profissional de saúde."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a frequência diária recomendada para aprimorar o foco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Algumas partidas (45 segundos cada) antes do trabalho ou do estudo bastam; compare suas pontuações no mesmo horário e no mesmo aparelho. Melhora no dia a dia não é garantida."
      }
    },
    {
      "@type": "Question",
      "name": "Como o estresse e o sono impactam a pontuação neste teste?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sono curto e estresse tendem a aumentar alvos perdidos e respostas impulsivas. Por isso, compare resultados feitos em condições parecidas."
      }
    },
    {
      "@type": "Question",
      "name": "O que representam as categorias de pontuação do teste?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "São faixas de prática do SkillDrills baseadas na sua precisão, para comparar suas próprias sessões. Não se baseiam em dados normativos, percentis nem estudos clínicos."
      }
    },
    {
      "@type": "Question",
      "name": "Este teste de concentração e atenção sustentada é gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, o SkillDrills disponibiliza esta ferramenta gratuitamente direto no navegador, sem taxas ou formulários de cadastro."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Realizar o Teste de Resistência de Concentração",
  "description": "Teste de concentração online grátis de 45 segundos: reaja só às vogais ou aos números primos da regra ativa e treine atenção sustentada e controle inibitório.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Verifique a Regra Alvo Inicial",
      "text": "Observe a diretriz no banner superior que define o critério de ativação válido (ex: Vogais ou Números Primos).",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Mantenha o Monitoramento Contínuo",
      "text": "Acompanhe atentamente os estímulos que piscam sequencialmente sem desviar a atenção visual da área central.",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Dispare o Toque Apenas em Alvos Válidos",
      "text": "Clique, toque na tela ou pressione Espaço ou Enter apenas quando o estímulo cumprir a regra ativa.",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Responda à Inversão Periódica de Regras",
      "text": "A cada 10 segundos, reconfigure seu foco para o novo critério anunciado sem cometer disparos impulsivos.",
      "url": "https://skilldrills.online/pt/drills/cognitive/attention/concentration-stamina#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('mackworth1948', 'parasuraman1979', 'robertson1997', 'monsell2003', 'broadbent1958', 'woods2015'),
  intro: {
    title: "Teste de Concentração e Atenção Sustentada: Guia",
    paragraphs: [
      "Este teste de concentração online grátis de 45 segundos registra atenção sustentada, controle inibitório e troca de regras como uma autoavaliação não clínica. O resultado varia com o estado do dia e a familiaridade e não substitui avaliação profissional.",
      "Mackworth (1948) observou em operadores de radar que a detecção de sinais raros cai à medida que o monitoramento se prolonga, e a queda é maior quando os eventos são rápidos (Parasuraman, 1979). Este teste condensa o exercício em 45 segundos.",
      "A cada 10 segundos a regra alterna entre vogais e números primos: é preciso abandonar o critério anterior e aplicar o novo na hora (Monsell, 2003).",
    ],
  },
  benchmarks: {
    title: 'Padrões de Desempenho Cognitivo & Escala de Atenção Sustentada (CPT)',
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
    title: 'Protocolos de Fortalecimento da Concentração',
    description: 'Pautas de treinamento para aumentar a resistência à fadiga mental e aprimorar o foco contínuo.',
    items: [
      { title: "Verifique a Regra Alvo Inicial", description: "Observe a diretriz no banner superior que define o critério de ativação válido (ex: Vogais ou Números Primos)." },
      { title: "Mantenha o Monitoramento Contínuo", description: "Acompanhe atentamente os estímulos que piscam sequencialmente sem desviar a atenção visual da área central." },
      { title: "Dispare o Toque Apenas em Alvos Válidos", description: "Clique, toque na tela ou pressione Espaço ou Enter apenas quando o estímulo cumprir a regra ativa." },
      { title: "Responda à Inversão Periódica de Regras", description: "A cada 10 segundos, reconfigure seu foco para o novo critério anunciado sem cometer disparos impulsivos." },
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
      <ConcentrationStaminaClient copy={{
        title: "Teste de Concentração | Atenção Sustentada", subtitle: "Autoavaliação não clínica de foco contínuo, identificação de alvos e controle inibitório",
        statScore: "Pontos", statTime: "Tempo", statLevel: "Nível", statBest: "Melhor pontuação", ruleLabel: "Regra", vowels: "Vogais (A E I O U)", primes: "Primos (2 3 5 7)", startTitle: "Teste de Concentração", startSubtitle: "Atenção sustentada • Treino no formato CPT", getReady: "Prepare-se", flashTitle: "Flash de erro", soundTitle: "Som", newBest: "Novo recorde", points: "Pontos", accuracy: "Precisão", misses: "Erros", peakLevel: "Nível máximo", playAgain: "Jogar novamente", shareScore: "Compartilhar pontuação", exitDrill: "Sair do treino",
        caption: "Reaja apenas aos estímulos que correspondem à regra ativa e filtre as distrações quando a regra mudar.", rulesTitle: "Instruções e sistema de pontuação", ruleItems: [{ text: "Regra do alvo", highlight: "Muda a cada 10s", result: "Vogais ↔ Primos" }, { text: "Alvo correto", highlight: "+100 PTS", result: "Clique/toque, Espaço ou Enter" }, { text: "Não alvo", highlight: "Inibir", result: "Ignore o diferente" }, { text: "Alarme falso", highlight: "Bloqueio de 1 s", result: "Afeta a precisão" }],
        aboutTitle: "Sobre o teste de concentração", aboutLead: "A atenção sustentada pode cair durante a observação prolongada de sinais raros. Este teste curto registra troca de regras, identificação de alvos e erros como autoavaliação não clínica.", aboutText: "Atenção sustentada é a capacidade de selecionar sinais relevantes em uma sequência repetitiva. Repita nas mesmas condições e acompanhe a evolução dos pontos e erros.\n\nSono, estresse, tela e familiaridade alteram o resultado; ele não substitui avaliação profissional.", audienceTitle: "Para quem serve?", audienceText: "Para estudantes antes de provas longas, jogadores que querem manter precisão e pessoas que precisam sustentar o foco no trabalho.", skillsTitle: "Habilidades treinadas", skillsText: "Atenção sustentada, identificação de alvos, vigilância sob fadiga e controle de impulsos.", flexibilityTitle: "Flexibilidade cognitiva", flexibilityText: "A troca entre vogais e números primos a cada 10 segundos treina a alternância rápida entre regras."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
