import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

const url = 'https://skilldrills.online/pt/drills/physical';
const title = "Treino de Agilidade com o Mouse: 11 Drills | SkillDrills";
const description = "Treino de agilidade com o mouse, grátis: 11 drills de clicar em alvos, esquiva, controle do cursor, memória de trajetos e timing. Não é teste físico.";

export const metadata = {
  title,
  description,
  keywords: ["Treino de Agilidade com o Mouse", "jogos de agilidade", "agilidade no navegador", "jogo de agilidade com o mouse", "drills de esquiva com o mouse"],
  openGraph: {
    title,
    description,
    type: 'website',
    url,
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://skilldrills.online/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Todos os treinos", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Treino de Agilidade com o Mouse", "item": url }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-10",
  "name": "Treino de Agilidade com o Mouse – 11 drills",
  "url": url,
  "description": "11 drills no navegador com o mouse: clicar em alvos, esquiva, controle do cursor, memória de trajetos e timing.",
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

const faqs = [
  { q: "O jogo da escada na tela ajuda no trabalho de pés de verdade?", a: "O drill treina timing e ritmo: você leva o cursor, na ordem certa, até os degraus da esquerda e da direita de uma escada que desce pela tela. Ele não substitui trabalho de pés real nem treino de força, e esta página não afirma efeitos sobre a agilidade no esporte." },
  { q: "O que a Frenagem de Mira (cadeia de reação) treina?", a: "Você só pontua se parar o cursor por completo dentro de um nó em movimento. Passar direto sem parar ou deixar o nó escapar zera o combo e tira 1 segundo. Não há garantia de melhora da mira em jogos de tiro." },
  { q: "O que o teste de estabilidade contra forças externas treina?", a: "Você mantém a mira dentro do anel seguro no centro enquanto um vento simulado a empurra. Sair do anel só zera o combo. É um exercício de controle firme do mouse, não um treino de equilíbrio corporal." },
  { q: "O que acontece no drill de coordenação mão-olho (movimento cruzado)?", a: "Você coloca o cursor no nó inicial e depois o leva pela tela, dentro de um corredor, até o nó de destino. Sair do corredor zera o combo. Esta página não afirma efeitos sobre a comunicação entre os hemisférios do cérebro." },
  { q: "O que o jogo de esquiva em grade treina?", a: "Algumas casas piscam como aviso e depois viram zona de perigo; você precisa mover o cursor para uma casa segura antes disso. Esta página não promete quantos milissegundos sua reação vai ganhar. Compare nível e precisão no mesmo aparelho." },
  { q: "O que o drill de ameaças nas bordas da tela treina?", a: "Você encontra e clica nos nós de ameaça que surgem na área externa da tela para praticar a atenção periférica. Ampliar o campo de visão ou prevenir lesões não é comprovado; use-o apenas como prática." },
  { q: "Com que frequência devo treinar?", a: "Não existe regra fixa. Algumas sessões por semana de 15 a 25 minutos, enquanto a concentração durar, são uma forma leve. Pare se sentir dor nos olhos ou no punho." },
  { q: "Drills no navegador complementam o treino na academia ou em campo?", a: "Eles não substituem treino de força, pliometria ou treino do esporte. Servem como complemento para praticar timing visual e decisões rápidas diante de sinais na tela." },
  { q: "Quantos drills existem nesta lista?", a: "São 11 drills no navegador em quatro áreas: reflexo e esquiva, agilidade e timing, coordenação e trajetórias, equilíbrio e estabilidade. Pelos cartões você abre a descrição e as instruções de cada drill." },
  { q: "Este treino de agilidade é um teste físico?", a: "Não. Os drills não medem força, impulsão nem resistência. Eles praticam timing, velocidade de decisão, precisão com o mouse e sequências de movimento na tela." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-10",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
};

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
      <PhysicalDrillsClient faqs={faqs} />
    </>
  );
}
