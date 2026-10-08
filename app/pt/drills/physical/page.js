import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

export const metadata = {
  title: 'Treino de Agilidade & Teste de Reflexos | SkillDrills',
  description: 'Treino de agilidade e reflexos online: 11 exercícios para tempo de reação, equilíbrio, coordenação motora, esquiva e velocidade de pés.',
  keywords: [
    'teste de reflexo online gratis', 'exercicios de coordenacao motora', 'escada de agilidade exercicios',
    'teste de equilibrio corporal online', 'jogo de esquiva desviar do mouse', 'treino de visao periferica',
    'teste go no go impulsividade', 'teste da regua tempo de reacao', 'como melhorar a velocidade de reacao',
    'exercicios de agilidade e reflexos', 'velocidade de pes no futebol', 'movimento bilateral cruzando a linha media',
    'controle postural e estabilidade motora', 'jogo de reflexo e agilidade mental', 'exercicios pliometricos tempo de contato'
  ],
  openGraph: {
    title: 'Treino de Agilidade & Teste de Reflexos | SkillDrills',
    description: 'Treino de agilidade e reflexos online: 11 exercícios para tempo de reação, equilíbrio, coordenação motora, esquiva e velocidade de pés.',
    type: 'website',
    url: 'https://skilldrills.online/pt/drills/physical',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Treino de Agilidade e Reflexos Físicos no SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treino de Agilidade & Teste de Reflexos | SkillDrills',
    description: '11 exercícios de agilidade, equilíbrio, coordenação motora e reflexos rápidos gratuitos no navegador.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/physical',
    languages: getAlternateLanguages('/pt/drills/physical'),
  },
};

Object.assign(metadata, {
  title: 'Agilidade e Reflexo | 11 Exercícios | SkillDrills',
  description: '11 exercícios gratuitos no navegador para tempo de reação, agilidade, equilíbrio, coordenação motora e reflexos.',
  keywords: ['teste de reflexo', 'treino de agilidade', 'tempo de reação', 'coordenação motora', 'equilíbrio corporal', 'velocidade de pés', 'coordenação olho-mão', 'jogo de esquiva', 'treino esportivo online', 'exercícios físicos no navegador'],
  openGraph: {
    ...metadata.openGraph,
    title: 'Agilidade e Reflexo | 11 Exercícios | SkillDrills',
    description: '11 exercícios gratuitos no navegador para reflexos, tempo de reação, agilidade e coordenação motora.',
  },
  twitter: {
    ...metadata.twitter,
    title: 'Agilidade e Reflexo | SkillDrills',
    description: 'Treine reflexos, agilidade, equilíbrio e coordenação com 11 exercícios gratuitos.',
  },
  alternates: { ...metadata.alternates, languages: getAlternateLanguages('/drills/physical') },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Treinos de Performance", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Reflexos Físicos & Agilidade", "item": "https://skilldrills.online/pt/drills/physical" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-09-20",
  "name": "Treino de Agilidade & Testes de Reflexos (11 Exercícios)",
  "url": "https://skilldrills.online/pt/drills/physical",
  "description": "11 exercícios interativos para tempo de reação, equilíbrio postural, coordenação olho-mão, escada de agilidade e esquiva ágil.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": physicalDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'pt', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/pt${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como o treino digital de escada de agilidade melhora os apoios dos pés e a agilidade esportiva real?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os exercícios de escada de agilidade na tela desenvolvem o reconhecimento veloz de estímulos visuais e o ritmo de cadência no córtex motor. Ao exigir respostas em frações de milissegundos a pistas visuais em constante mudança, o exercício pratica reconhecimento rápido de estímulos e ritmo de resposta com o mouse. Ele não treina os pés nem garante ganhos em mudanças de direção (COD) no esporte."
      }
    },
    {
      "@type": "Question",
      "name": "O que é uma cadeia de reação com inibição de impulso e por que ela evita antecipações falsas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O teste de parada de impulso (Go/No-Go) afere a capacidade do sistema neuromotor de frear imediatamente uma ação já iniciada diante de um estímulo falso ou drible adversário. O teste pratica a inibição de respostas rápidas em uma tarefa de tela; ele não mede nem garante a capacidade de conter movimentos reais."
      }
    },
    {
      "@type": "Question",
      "name": "De que forma o desafio virtual de estabilidade contra forças dinâmicas fortalece o equilíbrio físico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O equilíbrio postural dinâmico depende da integração sensorial contínua entre a fixação visual, o labirinto no ouvido interno (sistema vestibular) e os proprioceptores musculares. Resistir a forças em movimento na tela pratica correções finas de mouse; o exercício não treina o equilíbrio corporal real."
      }
    },
    {
      "@type": "Question",
      "name": "Por que cruzar a linha média do corpo (movimento bilateral) é essencial para a coordenação motora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mover-se cruzando a linha média visual e corporal é uma ideia comum em treinos esportivos. Aqui, os exercícios de interceptação com o mouse praticam coordenação olho-mão e leitura espacial na tela; não substituem treino físico em campo."
      }
    },
    {
      "@type": "Question",
      "name": "Em quanto tempo os treinos de esquiva dinâmica em grade reduzem o tempo de reação de fuga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diferente de testes estáticos previsíveis, zonas dinâmicas de perigo exigem atualização constante do mapa espacial no lobo parietal. Essa prática exercita o tempo de reação de escolha (Choice Reaction Time) sob pressão; compare seus próprios resultados ao longo das sessões, sem expectativa de ganho fixo."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o papel da visão periférica (campo visual útil UFOV) na prevenção de colisões e lesões?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O monitoramento ativo de ameaças periféricas expande o campo visual funcional. O exercício pratica notar estímulos na borda da tela enquanto o olhar fica no centro; não há garantia de efeito em esportes ou no trânsito."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a frequência ideal de treino para agilidade neuromotora e velocidade de reflexos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma sugestão prática é fazer sessões curtas de 15 a 25 minutos, algumas vezes por semana. Sessões muito longas tendem a cansar e a piorar a precisão; pare quando notar queda de desempenho."
      }
    },
    {
      "@type": "Question",
      "name": "Os testes e exercícios no navegador substituem o treinamento atlético no campo ou na academia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não, eles atuam de maneira complementar. Enquanto o treino físico trabalha músculos, tendões e pliometria, os treinos digitais praticam tempo de resposta e decisão na tela. Não há garantia de transferência para o campo."
      }
    }
  ]
};

faqSchema.mainEntity.push(
  {
    "@type": "Question",
    "name": "Quantos exercícios existem na categoria de treinos físicos?",
    "acceptedAnswer": { "@type": "Answer", "text": "A categoria reúne 11 exercícios no navegador em quatro focos: reflexo e esquiva, agilidade e condicionamento, coordenação e trajetórias, além de equilíbrio e estabilidade. Cada cartão abre o treino correspondente." }
  },
  {
    "@type": "Question",
    "name": "Os treinos no navegador substituem força ou equilíbrio físico?",
    "acceptedAnswer": { "@type": "Answer", "text": "Não. Eles treinam tempo visual, velocidade de decisão, precisão de controle e sequência de movimentos. Servem como complemento, não como substituto para força, pliometria, mobilidade ou orientação esportiva." }
  }
);

export default function PhysicalDrillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PhysicalDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
