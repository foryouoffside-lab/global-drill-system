import VisualTrackingDrillsClient from '@/app/drills/visual-tracking/VisualTrackingDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { buildVisualTrackingHubMetadata, getVisualTrackingHubCollectionFields, getVisualTrackingHubFaqFields } from '@/lib/i18n/visualTrackingHubNative';

const trackingDrills = DRILLS.filter((d) => d.category === 'visual-tracking');

const baseMetadata = buildVisualTrackingHubMetadata('pt', 'https://skilldrills.online/pt/drills/visual-tracking', trackingDrills.length, getAlternateLanguages('/drills/visual-tracking'));

export const metadata = {
  ...baseMetadata,
  title: 'Treino de rastreamento visual | SkillDrills',
  description: 'Treino de rastreamento visual no navegador: 15 exercícios grátis com alvos em onda senoidal, em oito, em zigue-zague e com saltos. Sem cadastro.',
  keywords: ['treino de rastreamento visual', 'rastreamento visual jogo', 'perseguição ocular', 'seguir alvos móveis', 'previsão de trajetória', 'visão periférica', 'exercícios no navegador', 'treino visual grátis'],
  openGraph: { ...baseMetadata.openGraph, title: 'Treino de rastreamento visual | SkillDrills', description: 'Treino de rastreamento visual no navegador: 15 exercícios grátis com alvos em onda senoidal, em oito, em zigue-zague e com saltos. Sem cadastro.', images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Treino de rastreamento visual' }] },
  twitter: { ...baseMetadata.twitter, title: 'Treino de rastreamento visual | SkillDrills', description: 'Treino de rastreamento visual no navegador: 15 exercícios grátis com alvos em onda senoidal, em oito, em zigue-zague e com saltos. Sem cadastro.' },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Diretório de Treinos", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Rastreamento Visual e Ocular", "item": "https://skilldrills.online/pt/drills/visual-tracking" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://skilldrills.online/pt/drills/visual-tracking",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  ...getVisualTrackingHubCollectionFields('pt', trackingDrills.length),
  "description": "15 exercícios grátis no navegador para rastreamento visual: onda senoidal, oito, zigue-zague, triângulo, degraus, mudanças de direção, alvo que salta, tela dividida e sinais periféricos.",
  "dateModified": "2026-11-12",
  "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Peripheral_vision"],
  "hasPart": trackingDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'pt', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/pt${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual a diferença entre perseguição ocular suave e sacadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na perseguição suave os olhos seguem um alvo em movimento de forma contínua; sacadas são saltos rápidos do olhar de um ponto a outro. Os exercícios pedem sobretudo perseguição, mas o site não mede seus movimentos oculares."
      }
    },
    {
      "@type": "Question",
      "name": "O treino de rastreamento visual ajuda no esporte ou em jogos FPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os exercícios praticam acompanhar alvos em movimento com o olhar e o mouse e reagir a mudanças de trajetória. Uma melhora no esporte ou em FPS não é garantida. Use-os como prática extra e compare seus resultados no mesmo aparelho."
      }
    },
    {
      "@type": "Question",
      "name": "Quais exercícios de rastreamento existem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "15 trajetórias e tarefas: onda senoidal, oito (infinito), zigue-zague, triângulo, degraus verticais, mudanças de direção imprevisíveis, alvo teleportado, tela dividida, previsão estroboscópica, sinais periféricos e outros. Eles diferem na forma do trajeto e nas mudanças de velocidade."
      }
    },
    {
      "@type": "Question",
      "name": "A taxa de atualização do monitor afeta os resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Uma tela atualiza a cada 16,7 ms a 60 Hz, 6,9 ms a 144 Hz e 4,1 ms a 240 Hz, então alvos rápidos parecem mais ou menos fluidos. Compare sessões com a mesma tela, o mesmo mouse e o mesmo navegador."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo devo treinar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não existe duração ideal comprovada. Faça sessões curtas e regulares, olhe para longe nas pausas e pare se sentir cansaço, dor de cabeça ou tontura."
      }
    }
  ]
};

const { additions, ...faqFields } = getVisualTrackingHubFaqFields('pt');
const enrichedFaqSchema = { ...faqSchema, ...faqFields, dateModified: "2026-11-12", mainEntity: [...faqSchema.mainEntity, ...additions] };

export default function LocalizedVisualTrackingDrillsClientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedFaqSchema) }} />
      <VisualTrackingDrillsClient
        faqs={enrichedFaqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
