import RSVPReaderClient from '@/app/drills/cognitive/processing-speed/rsvp-reader/RSVPReaderClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Leitura Dinâmica Online | Treino RSVP | SkillDrills",
  description: "Leitura dinâmica online grátis: palavras aparecem uma a uma num ponto fixo, de 250 a 850 palavras por minuto, e você toca na palavra-alvo. Não mede compreensão.",
  keywords: ["leitura dinâmica online", "leitura dinâmica", "treino de leitura dinâmica", "palavras por minuto", "RSVP", "leitura rápida"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Leitura Dinâmica Online | Treino RSVP | SkillDrills",
    description: "Leitura dinâmica online grátis: palavras aparecem uma a uma num ponto fixo, de 250 a 850 palavras por minuto, e você toca na palavra-alvo. Não mede compreensão.",
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/cognitive/processing-speed/rsvp-reader',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Leitura Dinâmica Online | Treino RSVP | SkillDrills",
    description: "Leitura dinâmica online grátis: palavras aparecem uma a uma num ponto fixo, de 250 a 850 palavras por minuto, e você toca na palavra-alvo. Não mede compreensão.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/cognitive/processing-speed/rsvp-reader',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/rsvp-reader'),
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
      "name": "Leitor RSVP",
      "item": "https://skilldrills.online/pt/drills/cognitive/processing-speed/rsvp-reader"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Rapid_serial_visual_presentation"],
  "name": "Leitura Dinâmica Online – Treino RSVP",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Treino grátis de leitura dinâmica online no método RSVP: palavras de um texto em inglês aparecem uma a uma num ponto fixo, de 250 a 850 PPM, e você toca quando surge a palavra-alvo. Não mede compreensão.",
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/rsvp-reader",
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
  "name": "Leitura Dinâmica Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requer navegador moderno com suporte a JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/rsvp-reader",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Treino de Leitura Dinâmica RSVP",
  "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/rsvp-reader",
  "description": "Treino grátis de leitura dinâmica online no método RSVP: palavras de um texto em inglês aparecem uma a uma num ponto fixo, de 250 a 850 PPM, e você toca quando surge a palavra-alvo. Não mede compreensão.",
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
  "dateModified": "2026-11-12",
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
      "name": "O que é o método RSVP (Apresentação Visual Serial Rápida)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É uma forma de leitura dinâmica em que as palavras aparecem uma a uma no mesmo ponto da tela, sem que o olhar precise percorrer a linha. Não garante melhor compreensão."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona este treino de leitura dinâmica online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O banner mostra uma palavra-alvo. No centro passam palavras em inglês, uma por vez; tocar no botão enquanto a palavra-alvo está na tela vale 100 pontos. Cada rodada dura 45 segundos."
      }
    },
    {
      "@type": "Question",
      "name": "Como a velocidade aumenta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A rodada começa no nível 1 (250 palavras por minuto). A cada 2 palavras-alvo encontradas (a cada 200 pontos) sobe um nível: 350, 480, 650 e 850 PPM no nível 5."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se eu errar ou deixar passar o alvo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tocar em outra palavra conta como erro e trava o botão por 1 segundo. Deixar a palavra-alvo passar conta como perda. Os dois reduzem a precisão, mas não tiram tempo."
      }
    },
    {
      "@type": "Question",
      "name": "O PPM mostrado é a minha velocidade de leitura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. É a velocidade de exibição de cada nível. O resultado mostra pontos, acertos, erros, precisão e nível alcançado, não a sua velocidade pessoal de leitura."
      }
    },
    {
      "@type": "Question",
      "name": "O treino mede compreensão?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Não há perguntas sobre o texto. Estudos mostram que a compreensão pode cair quando o ritmo do RSVP sobe (Rayner et al., 2016)."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a velocidade média de leitura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para leitura silenciosa em inglês costuma-se citar cerca de 200 a 300 palavras por minuto (Rayner, 1998). Isso não é diretamente comparável aos níveis deste treino."
      }
    },
    {
      "@type": "Question",
      "name": "Dá para treinar com texto em português?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ainda não: o fluxo de palavras é em inglês."
      }
    },
    {
      "@type": "Question",
      "name": "O que é o Ponto de Reconhecimento Ótimo (ORP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É a letra de cada palavra, um pouco à esquerda do centro, onde o olhar se fixa com mais facilidade. No treino ela aparece em vermelho."
      }
    },
    {
      "@type": "Question",
      "name": "Este treino de leitura dinâmica é grátis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, é grátis, sem cadastro, direto no navegador."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como fazer o treino de leitura dinâmica",
  "description": "Treino grátis de leitura dinâmica online no método RSVP: palavras de um texto em inglês aparecem uma a uma num ponto fixo, de 250 a 850 PPM, e você toca quando surge a palavra-alvo. Não mede compreensão.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fixe o Olhar no Ponto Focal Central",
      "text": "Mantenha o olhar relaxado na letra vermelha central, sem mover os olhos de um lado para o outro.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Comece a 250 PPM",
      "text": "Toda rodada começa no nível 1 (250 PPM) para você se acostumar ao fluxo de palavras.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Toque na palavra-alvo",
      "text": "Guarde a palavra-alvo do banner e toque no botão enquanto ela estiver na tela. Tocar em outra palavra trava o botão por 1 segundo.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "A velocidade sobe sozinha",
      "text": "A cada 2 palavras-alvo encontradas, a velocidade sobe um nível, até 850 PPM.",
      "url": "https://skilldrills.online/pt/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rayner1998', 'rayner2016', 'woods2015'),
  intro: {
    title: "Leitura Dinâmica Online com RSVP",
    paragraphs: [
      "Leitura dinâmica online no método RSVP: as palavras aparecem uma a uma no mesmo ponto da tela, com a letra do ORP em vermelho. Toque no botão quando surgir a palavra-alvo do banner; a cada 2 acertos a velocidade sobe um nível, de 250 até 850 palavras por minuto. O texto exibido é em inglês.",
      "Na leitura comum, o olhar salta de palavra em palavra (sacadas) e às vezes volta atrás (Rayner, 1998). O RSVP elimina esses saltos, mas em ritmo alto a compreensão pode cair (Rayner et al., 2016).",
      "Este treino mede só o reconhecimento da palavra-alvo: mostra pontos, acertos, erros, precisão e nível alcançado. Não é curso de leitura dinâmica, não mede compreensão e não é exame clínico.",
    ],
  },
  benchmarks: {
    title: 'Faixas de treino SkillDrills (nível alcançado)',
    headers: ['Nível', 'Classificação', 'Nível alcançado', 'Precisão', 'Leitura'],
    rows: [
      { tier: 'Tier 1', rank: 'Muito rápida', stat: 'Nível 5 (850 PPM)', accuracy: '95%+', marker: 'Fluxo mais rápido acompanhado com precisão' },
      { tier: 'Tier 2', rank: 'Rápida', stat: 'Nível 4 (650 PPM)', accuracy: '90-94%', marker: 'Bom acompanhamento em alta velocidade' },
      { tier: 'Tier 3', rank: 'Boa', stat: 'Nível 3 (480 PPM)', accuracy: '85-89%', marker: 'Acompanhamento regular' },
      { tier: 'Tier 4', rank: 'Em evolução', stat: 'Nível 2 (350 PPM)', accuracy: '75-84%', marker: 'Em progresso' },
      { tier: 'Tier 5', rank: 'Início', stat: 'Nível 1 (250 PPM)', accuracy: '< 75%', marker: 'Ponto de partida' },
    ],
    note: 'Faixas de treino definidas pela SkillDrills para comparar suas próprias sessões; não são percentis de população nem normas clínicas, e não medem compreensão.',
  },
  protocols: {
    title: 'Como jogar',
    description: 'Os quatro passos de cada rodada.',
    items: [
      { title: "Fixe o Olhar no Ponto Focal Central", description: "Mantenha o olhar relaxado na letra vermelha central, sem mover os olhos de um lado para o outro." },
      { title: "Comece a 250 PPM", description: "Toda rodada começa no nível 1 (250 PPM) para você se acostumar ao fluxo de palavras." },
      { title: "Toque na palavra-alvo", description: "Guarde a palavra-alvo do banner e toque no botão enquanto ela estiver na tela. Tocar em outra palavra trava o botão por 1 segundo." },
      { title: "A velocidade sobe sozinha", description: "A cada 2 palavras-alvo encontradas, a velocidade sobe um nível, até 850 PPM." },
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
      <RSVPReaderClient
        copy={{
          title: "Leitura Dinâmica Online",
          subtitle: "Processe palavras em um ponto fixo e treine velocidade de leitura",
          startTitle: "Leitura Dinâmica Online",
          startSubtitle: "Reconhecimento de palavras • Foco ORP",
          stageCaption: "As palavras aparecem no centro. Toque quando a palavra-alvo surgir.",
          rulesTitle: "Instruções do drill e pontuação",
          aboutTitle: "O que é leitura RSVP?",
          faqTitle: "Perguntas frequentes",
          labels: { score: "Pontos", time: "Tempo", speed: "Velocidade", bestScore: "Melhor pontuação", timeLeft: "Tempo restante", targetWord: "Palavra-alvo", detected: "ALVO ENCONTRADO", ready: "PREPARE-SE", accuracy: "Precisão", hits: "Acertos", errors: "Erros", points: "Pontos", playAgain: "Jogar novamente" },
          aboutLead: "O RSVP mostra palavras uma por vez no mesmo ponto da tela. Isso reduz parte dos saltos do olhar, mas a compreensão pode cair quando o ritmo fica alto.",
          aboutText: "Este drill treina o reconhecimento de palavras de um texto em inglês no ponto de reconhecimento ótimo (ORP). PPM indica o ritmo de exibição; atraso da tela e do toque também afeta o resultado. 850 PPM é o nível mais alto deste drill, não uma promessa de compreensão geral nessa velocidade.",
          aboutCards: [
            { title: "Para quem serve?", desc: "Para estudantes, profissionais e pessoas que leem muito ou querem praticar leitura rápida." },
            { title: "O que é treinado?", desc: "Reconhecimento de palavras, memória de trabalho e atenção sustentada diante de informação visual rápida." },
            { title: "Ritmo progressivo", desc: "Cinco níveis de 250 a 850 PPM; a cada 2 palavras-alvo encontradas o ritmo sobe um nível." }
          ],
          rulesItems: [
            { num: "1", text: "Palavra-alvo", highlight: "Banner superior", result: "Encontrar no fluxo central" },
            { num: "2", text: "Foco no ORP", highlight: "Reduza movimentos do olhar", result: "Leia no mesmo ponto" },
            { num: "3", text: "Alvo encontrado", highlight: "+100 pontos", result: "Toque enquanto ela aparece" },
            { num: "4", text: "Nível de ritmo", highlight: "250 → 850 PPM", result: "Sobe a cada 2 acertos" }
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
