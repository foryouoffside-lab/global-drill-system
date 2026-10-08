import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

export const metadata = {
  title: 'Entraînement d\'Agilité & Test de Réflexes | SkillDrills',
  description: 'Entraînement d\'agilité et réflexes en ligne : 11 exercices scientifiques pour temps de réaction, équilibre, coordination œil-main, esquive et appuis vifs.',
  keywords: [
    'test de réflexe en ligne gratuit', 'exercices coordination oeil main', 'échelle de rythme exercices en ligne',
    'test d équilibre en ligne', 'jeu d esquive souris réflexe', 'entraînement vision périphérique',
    'test go no go en ligne', 'test de la règle temps de réaction', 'test vitesse de réaction en ligne',
    'améliorer vitesse de réaction et réflexes', 'exercices de vivacité motrice', 'vitesse des appuis et agilité sport',
    'mouvement bilatéral ligne médiane', 'contrôle postural et stabilité motrice', 'jeu de réflexes esquive projectiles'
  ],
  openGraph: {
    title: 'Entraînement d\'Agilité & Test de Réflexes | SkillDrills',
    description: 'Entraînement d\'agilité et réflexes en ligne : 11 exercices scientifiques pour temps de réaction, équilibre, coordination œil-main, esquive et appuis vifs.',
    type: 'website',
    url: 'https://skilldrills.online/fr/drills/physical',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Entraînement d\'Agilité et Réflexes Physiques sur SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entraînement d\'Agilité & Test de Réflexes | SkillDrills',
    description: '11 exercices scientifiques d\'agilité, équilibre, coordination motrice et réflexes rapides gratuits dans le navigateur.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/physical',
    languages: getAlternateLanguages('/fr/drills/physical'),
  },
};

Object.assign(metadata, {
  title: 'Exercices de réflexes et d’agilité en ligne | SkillDrills',
  description: `${physicalDrills.length} exercices gratuits dans le navigateur : réflexes, esquive, vision périphérique, échelle d’agilité, équilibre et coordination.`,
  keywords: ['exercices de réflexes', 'test de réflexe en ligne', 'jeu d’esquive', 'vision périphérique exercices', 'échelle d’agilité en ligne', 'coordination œil-main', 'équilibre souris', 'temps de réaction', 'exercices réflexes gratuits'],
  openGraph: {
    ...metadata.openGraph,
    title: 'Exercices de réflexes et d’agilité en ligne | SkillDrills',
    description: `${physicalDrills.length} exercices gratuits dans le navigateur : réflexes, esquive, vision périphérique, échelle d’agilité, équilibre et coordination.`,
  },
  twitter: {
    ...metadata.twitter,
    title: 'Exercices de réflexes et d’agilité en ligne | SkillDrills',
    description: `${physicalDrills.length} exercices gratuits dans le navigateur : réflexes, esquive, vision périphérique, échelle d’agilité, équilibre et coordination.`,
  },
  alternates: { ...metadata.alternates, languages: getAlternateLanguages('/drills/physical') },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Exercices de Performance", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Réflexes et agilité", "item": "https://skilldrills.online/fr/drills/physical" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "fr",
  "dateModified": "2026-09-20",
  "name": `Exercices de réflexes et d’agilité (${physicalDrills.length} exercices)`,
  "url": "https://skilldrills.online/fr/drills/physical",
  "description": `${physicalDrills.length} exercices gratuits dans le navigateur : réflexes, esquive, vision périphérique, échelle d’agilité, équilibre et coordination.`,
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels exercices contient la catégorie réflexes et agilité ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `La catégorie réunit ${physicalDrills.length} exercices dans le navigateur : test de réflexe, jeu d’esquive, freinage de visée, vision périphérique, jeu d’évitement sur grille, échelle d’agilité, jeu de précision souris, jeu de rapidité et autres exercices de coordination. Chaque carte ouvre l’exercice associé.`
      }
    },
    {
      "@type": "Question",
      "name": "Ces exercices sont-ils de vrais exercices physiques ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Ce sont des jeux à la souris ou au clavier qui travaillent le timing visuel, la vitesse de décision et le contrôle du curseur. Ils ne remplacent ni la force, ni la pliométrie, ni la mobilité, ni l’entraînement propre à un sport."
      }
    },
    {
      "@type": "Question",
      "name": "L’échelle d’agilité en ligne améliore-t-elle les appuis ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucune étude ne le démontre. C’est un jeu de rythme à la souris inspiré de l’échelle d’agilité : il travaille l’alternance gauche-droite et le séquençage, pas le jeu de jambes."
      }
    },
    {
      "@type": "Question",
      "name": "À quoi sert le jeu d’esquive et d’évitement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il vous demande de repérer des dangers à l’écran et de déplacer le curseur vers une zone sûre. Il exerce l’anticipation et le contrôle du curseur ; le transfert vers un sport ou un jeu précis n’est pas démontré."
      }
    },
    {
      "@type": "Question",
      "name": "Que travaille l’exercice de vision périphérique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il vous demande de fixer le centre de l’écran et de cliquer sur des cibles qui arrivent des bords. Il fait travailler la détection en périphérie, mais n’est ni un test médical ni une preuve d’élargissement du champ visuel."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence entre le test de réflexe et le jeu de freinage de visée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le test de réflexe mesure la réaction à des cibles qui tombent, avec des leurres à ignorer. Le freinage de visée mesure la capacité à arrêter le curseur dans une cible mobile."
      }
    },
    {
      "@type": "Question",
      "name": "Mes résultats dépendent-ils de mon matériel ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Écran, souris, navigateur et système ajoutent leur propre délai. Un écran affiche une image toutes les 16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz (Woods et al., 2015) : comparez vos séances avec le même matériel."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps s’entraîner ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’existe pas de durée prouvée. Quelques séances courtes, reposées et régulières, sur le même matériel, permettent de suivre vos résultats ; arrêtez-vous en cas de fatigue ou d’inconfort."
      }
    },
    {
      "@type": "Question",
      "name": "Ces exercices fonctionnent-ils sur téléphone ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La plupart demandent une souris et un ordinateur. Vérifiez la page de chaque exercice."
      }
    },
    {
      "@type": "Question",
      "name": "Mes scores sont-ils envoyés à un serveur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Vos records restent dans le LocalStorage de votre navigateur et aucun compte n’est nécessaire."
      }
    }
  ]
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
      <PhysicalDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
