import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

const url = 'https://skilldrills.online/fr/drills/physical';
const title = "Jeux d'agilité et de coordination à la souris | SkillDrills";
const description = "Jeux d'agilité et de coordination à la souris, gratuits : 11 exercices pour cliquer des cibles, esquiver, stabiliser le curseur et mémoriser des tracés.";

export const metadata = {
  title,
  description,
  keywords: ["jeux d'agilité et de coordination à la souris", "jeu de coordination", "jeux d'agilité en ligne", "jeu d'esquive à la souris", "exercices à la souris"],
  openGraph: {
    title,
    description,
    type: 'website',
    url,
    siteName: 'SkillDrills',
    locale: 'fr_FR',
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
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Tous les exercices", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Jeux d'agilité et de coordination", "item": url }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "fr",
  "dateModified": "2026-11-10",
  "name": "Jeux d'agilité et de coordination à la souris – 11 exercices",
  "url": url,
  "description": "11 exercices à la souris dans le navigateur : cliquer des cibles, esquiver, stabiliser le curseur, mémoriser des tracés et trouver le bon timing.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": physicalDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'fr', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/fr${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqs = [
  { q: "Le jeu d'échelle à l'écran aide-t-il pour un vrai travail d'appuis ?", a: "L'exercice travaille le timing et le rythme : vous amenez le curseur, dans le bon ordre, sur les barreaux gauche et droite d'une échelle qui défile vers le bas. Il ne remplace ni un vrai travail d'appuis ni la musculation, et cette page n'affirme aucun effet sur l'agilité sportive." },
  { q: "Que travaille le freinage de visée (chaîne de réaction) ?", a: "Vous ne marquez que si vous arrêtez complètement le curseur à l'intérieur d'un nœud en mouvement. Le traverser sans s'arrêter ou le laisser filer coupe le combo et retire 1 seconde. Aucune amélioration de la visée en jeu de tir n'est garantie." },
  { q: "Que travaille le test de stabilité face aux forces externes ?", a: "Vous gardez le viseur dans l'anneau sûr au centre pendant qu'un vent simulé le pousse. Sortir de l'anneau remet seulement le combo à zéro. C'est un exercice de contrôle stable de la souris, pas un entraînement de l'équilibre corporel." },
  { q: "Que se passe-t-il dans l'exercice de mouvement croisé ?", a: "Vous placez le curseur sur le nœud de départ, puis vous le guidez à travers l'écran, à l'intérieur d'un couloir, jusqu'au nœud d'arrivée. Sortir du couloir remet le combo à zéro. Cette page n'affirme aucun effet sur la communication entre les hémisphères du cerveau." },
  { q: "Que travaille le jeu d'évitement sur grille ?", a: "Certaines cases clignotent en avertissement puis deviennent des zones de danger ; vous devez déplacer le curseur vers une case sûre avant. Cette page ne promet aucun gain chiffré en millisecondes. Comparez niveau et précision sur le même appareil." },
  { q: "Que travaille l'exercice des menaces en bord d'écran ?", a: "Vous repérez et cliquez les nœuds de menace qui apparaissent dans la zone extérieure de l'écran pour pratiquer l'attention périphérique. Un champ de vision élargi ou une prévention des blessures n'est pas démontré ; utilisez-le comme simple pratique." },
  { q: "À quelle fréquence s'entraîner ?", a: "Il n'y a pas de règle fixe. Quelques séances de 15 à 25 minutes par semaine, tant que la concentration tient, restent légères. Arrêtez en cas de douleur aux yeux ou au poignet." },
  { q: "Ces exercices complètent-ils l'entraînement en salle ou sur le terrain ?", a: "Ils ne remplacent ni la musculation, ni la pliométrie, ni l'entraînement du sport. Ils servent de complément pour pratiquer le timing visuel et les décisions rapides face à des signaux à l'écran." },
  { q: "Combien d'exercices contient cette liste ?", a: "11 exercices dans le navigateur répartis en quatre domaines : réflexes et esquive, agilité et timing, coordination et trajectoires, équilibre et stabilité. Les cartes ouvrent la description et les consignes de chaque exercice." },
  { q: "Ces jeux d'agilité sont-ils un test physique ?", a: "Non. Ils ne mesurent ni la force, ni la détente, ni l'endurance. Ils pratiquent le timing, la vitesse de décision, la précision à la souris et les séquences de mouvement à l'écran." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr",
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
