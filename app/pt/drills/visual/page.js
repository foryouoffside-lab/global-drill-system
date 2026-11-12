import VisualDrillsClient from '@/app/drills/visual/VisualDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const visualDrills = DRILLS.filter((d) => d.category === 'visual');

export const metadata = {
  title: 'Treino visual online: reação e rastreamento | SkillDrills',
  description: 'Treino visual online: 9 exercícios grátis no navegador para reação visual, rastreamento de alvos, busca visual e noção de distância. Não é exame de vista.',
  keywords: ['treino visual online', 'exercícios visuais', 'rastreamento de alvos', 'busca visual', 'jogos de atenção visual', 'percepção de profundidade', 'reação à luz', 'rastreamento de múltiplos objetos'],
  openGraph: {
    title: 'Treino visual online: reação e rastreamento | SkillDrills',
    description: 'Treino visual online: 9 exercícios grátis no navegador para reação visual, rastreamento de alvos, busca visual e noção de distância. Não é exame de vista.',
    type: 'website',
    url: 'https://skilldrills.online/pt/drills/visual',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Treino visual online no SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treino visual online: reação e rastreamento | SkillDrills',
    description: 'Treino visual online: 9 exercícios grátis no navegador para reação visual, rastreamento de alvos, busca visual e noção de distância. Não é exame de vista.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/visual',
    languages: getAlternateLanguages('/drills/visual'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Exercícios de Desempenho", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Treino Visual", "item": "https://skilldrills.online/pt/drills/visual" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12",
  "name": "Treino visual online (9 exercícios)",
  "url": "https://skilldrills.online/pt/drills/visual",
  "description": "9 exercícios grátis no navegador para reação visual, controle de impulsos, alvos em movimento, vários objetos, busca visual e estimativa de distância.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": visualDrills.map((drill) => {
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
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O treino visual no navegador ajuda no esporte ou em jogos FPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os exercícios praticam acompanhar alvos em movimento com o olhar e o mouse, reagir a sinais visuais e procurar alvos. Uma melhora no esporte ou em jogos FPS não é garantida. Use-os como prática extra e compare seus próprios resultados no mesmo aparelho."
      }
    },
    {
      "@type": "Question",
      "name": "O exercício de distância testa a visão em profundidade (3D)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Uma tela plana não tem disparidade binocular, então a visão estereoscópica não é avaliada. Uma esfera se aproxima e cresce na tela; você clica quando ela chega à profundidade marcada. O que se pratica é estimar distância e timing."
      }
    },
    {
      "@type": "Question",
      "name": "O que treina o rastreamento de múltiplos objetos (MOT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você acompanha alvos marcados entre objetos idênticos em movimento. Isso exige atenção dividida e memória de trabalho visual. Não há prova de que amplie o campo visual ou melhore o desempenho no trânsito."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre perseguição ocular suave e sacadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na perseguição suave os olhos seguem um alvo em movimento de forma contínua; sacadas são saltos rápidos do olhar. Os exercícios de rastreamento pedem sobretudo perseguição, mas o site não mede seus movimentos oculares."
      }
    },
    {
      "@type": "Question",
      "name": "O que mede o exercício de reação à luz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo entre o sinal luminoso na tela e o seu clique. O resultado inclui atrasos da tela, do mouse e do navegador; não é um tempo neural puro."
      }
    },
    {
      "@type": "Question",
      "name": "O que treina a busca visual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você procura um alvo entre elementos que distraem. Isso pratica atenção seletiva e rapidez de busca nessa tarefa; a transferência para o dia a dia varia e não é garantida."
      }
    },
    {
      "@type": "Question",
      "name": "Meus resultados dependem do equipamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Uma tela atualiza a cada 16,7 ms a 60 Hz, 6,9 ms a 144 Hz e 4,1 ms a 240 Hz. Compare sessões usando a mesma tela, o mesmo mouse e o mesmo navegador."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo deve durar uma sessão?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não existe duração ideal comprovada. Faça sessões curtas e regulares, olhe para longe nas pausas e pare se sentir cansaço, dor de cabeça ou desconforto."
      }
    }
  ]
};

faqSchema.mainEntity.push(
  { "@type": "Question", "name": "Quantos exercícios existem na categoria de treino visual?", "acceptedAnswer": { "@type": "Answer", "text": "A categoria reúne 9 exercícios no navegador em três focos: reação e controle de impulsos, rastreamento e movimento ocular, além de reconhecimento e profundidade. Cada cartão abre o treino correspondente." } },
  { "@type": "Question", "name": "Os treinos visuais no navegador substituem um exame de vista?", "acceptedAnswer": { "@type": "Answer", "text": "Não. Eles praticam tarefas repetíveis de tempo visual, rastreamento, busca e julgamento espacial. Não diagnosticam a visão nem doenças oculares e não substituem uma consulta com oftalmologista ou optometrista." } }
);

export default function VisualDrillsPage() {
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
      <VisualDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
