import VisualDrillsClient from '@/app/drills/visual/VisualDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const visualDrills = DRILLS.filter((d) => d.category === 'visual');

export const metadata = {
  title: 'Entraînement Visuel & Test de Vue en Ligne | SkillDrills',
  description: 'Entraînement visuel en ligne : 9 exercices d\'acuité visuelle dynamique, vision du relief, poursuite oculaire, temps de réaction et recherche visuelle.',
  keywords: [
    'test de vue en ligne gratuit', 'exercices de gymnastique oculaire', 'test acuite visuelle dynamique',
    'perception de la profondeur test', 'test vision du relief', 'temps de reaction visuel en ligne',
    'test de reaction a la lumiere', 'poursuite visuelle oculaire', 'mouvements oculaires saccadiques',
    'recherche visuelle attention selective', 'champ visuel utile entrainement', 'fatigue oculaire exercices ecran',
    'discrimination temporelle visuelle', 'poursuite dobjets multiples mot', 'sports vision entrainement visuel'
  ],
  openGraph: {
    title: 'Entraînement Visuel & Test de Vue en Ligne | SkillDrills',
    description: 'Entraînement visuel en ligne : 9 exercices d\'acuité visuelle dynamique, vision du relief, poursuite oculaire, temps de réaction et recherche visuelle.',
    type: 'website',
    url: 'https://skilldrills.online/fr/drills/visual',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Entraînement de la Vision et de l\'Acuité Visuelle sur SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entraînement Visuel & Test de Vue en Ligne | SkillDrills',
    description: '9 exercices scientifiques d\'acuité visuelle dynamique, vision du relief, poursuite oculaire et recherche visuelle.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/visual',
    languages: getAlternateLanguages('/fr/drills/visual'),
  },
};

Object.assign(metadata, {
  title: 'Exercices visuels : suivi, recherche, réaction | SkillDrills',
  description: `${visualDrills.length} exercices gratuits dans le navigateur : suivi de cibles, recherche visuelle, réaction à la lumière et appréciation des distances. Pas un test de vue.`,
  keywords: ['exercices visuels', 'recherche visuelle', 'suivi de cibles', 'temps de réaction visuel', 'réaction à la lumière', 'perception de la profondeur', 'poursuite visuelle', 'suivi de plusieurs objets', 'entraînement visuel gratuit'],
  openGraph: { ...metadata.openGraph, title: 'Exercices visuels : suivi, recherche, réaction | SkillDrills', description: `${visualDrills.length} exercices gratuits dans le navigateur : suivi de cibles, recherche visuelle, réaction à la lumière et appréciation des distances. Pas un test de vue.` },
  twitter: { ...metadata.twitter, title: 'Exercices visuels : suivi, recherche, réaction | SkillDrills', description: `${visualDrills.length} exercices gratuits dans le navigateur : suivi de cibles, recherche visuelle, réaction à la lumière et appréciation des distances. Pas un test de vue.` },
  alternates: { ...metadata.alternates, languages: getAlternateLanguages('/drills/visual') },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Exercices de Performance", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Exercices visuels", "item": "https://skilldrills.online/fr/drills/visual" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "fr",
  "dateModified": "2026-09-20",
  "name": `Exercices visuels : suivi, recherche, réaction (${visualDrills.length} exercices)`,
  "url": "https://skilldrills.online/fr/drills/visual",
  "description": `${visualDrills.length} exercices gratuits dans le navigateur : suivi de cibles, recherche visuelle, réaction à la lumière et appréciation des distances. Pas un test de vue.`,
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": visualDrills.map((drill) => {
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
      "name": "Quels exercices contient la catégorie visuelle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `La catégorie réunit ${visualDrills.length} exercices dans le navigateur : interception de cible mobile, poursuite d’objets multiples, suivi oculaire continu, réaction à la lumière, contrôle Go / No-Go, recherche visuelle, exploration de grille, anomalie de rythme et appréciation des distances.`
      }
    },
    {
      "@type": "Question",
      "name": "Ces exercices sont-ils un test de vue ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Ce sont des jeux de timing visuel, de suivi, de recherche et de jugement spatial. Ils ne diagnostiquent ni la vue ni les maladies oculaires et ne remplacent pas un examen chez un ophtalmologue ou un orthoptiste."
      }
    },
    {
      "@type": "Question",
      "name": "Le jeu d’appréciation des distances teste-t-il le relief ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Sur un écran plat, il n’y a pas de disparité binoculaire. Le jeu s’appuie sur l’agrandissement de l’image d’une sphère pour estimer le temps avant contact (Lee, 1976)."
      }
    },
    {
      "@type": "Question",
      "name": "Que fait le suivi de plusieurs objets ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous suivez plusieurs cibles parmi des objets identiques qui se déplacent. L’exercice sollicite l’attention partagée et la mémoire de travail visuelle, sans prouver un élargissement du champ visuel."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre poursuite continue et saccades ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La poursuite lisse est le suivi régulier d’une cible mobile, les saccades sont les sauts rapides du regard. Les exercices de suivi demandent surtout de la poursuite, mais le site ne mesure pas vos mouvements oculaires."
      }
    },
    {
      "@type": "Question",
      "name": "Que mesure le test de réaction à la lumière ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il mesure le temps entre l’apparition d’un signal lumineux à l’écran et votre clic. Le résultat inclut aussi le délai de l’écran, de la souris et du navigateur."
      }
    },
    {
      "@type": "Question",
      "name": "Que travaille la recherche visuelle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous cherchez une cible parmi des éléments distracteurs. Cela fait travailler l’attention sélective et la vitesse de repérage sur cette tâche précise."
      }
    },
    {
      "@type": "Question",
      "name": "Mes résultats dépendent-ils de mon matériel ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Un écran affiche une image toutes les 16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz (Woods et al., 2015). Comparez vos séances avec le même écran, la même souris et le même navigateur."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps s’entraîner ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’existe pas de durée prouvée. Faites des séances courtes et régulières, reposez vos yeux en regardant au loin et arrêtez-vous en cas de fatigue ou d’inconfort."
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
