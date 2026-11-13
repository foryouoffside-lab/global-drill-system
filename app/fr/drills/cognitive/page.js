import CognitiveHubClient from '@/app/drills/cognitive/CognitiveHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const cognitiveDrills = DRILLS.filter((d) => d.category === 'cognitive');

export const metadata = {
  title: 'Entraînement cérébral et concentration | SkillDrills',
  description: "Entraînement cérébral gratuit : 8 exercices pour l'attention, la concentration, la réaction de choix et la vitesse de traitement, dont Stroop et Schulte.",
  keywords: [
    'entraînement cognitif', 'jeux de cerveau gratuits', 'exercices de concentration', 'entraînement cérébral gratuit',
    "test d'attention", 'vitesse de traitement', 'réaction de choix', 'lecture rapide',
    'test de Stroop', 'table de Schulte', "entraîner l'attention", 'jeux cérébraux en ligne',
    'gymnastique cérébrale', 'attention divisée', 'agilité mentale'
  ],
  openGraph: {
    title: 'Entraînement cérébral et concentration | SkillDrills',
    description: "Entraînement cérébral gratuit : 8 exercices pour l'attention, la concentration, la réaction de choix et la vitesse de traitement, dont Stroop et Schulte.",
    type: 'website',
    url: 'https://skilldrills.online/fr/drills/cognitive',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Entraînement Cérébral et Exercices Cognitifs sur SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entraînement cérébral et concentration | SkillDrills',
    description: "8 exercices gratuits d'entraînement cérébral pour l'attention, la concentration et la vitesse de traitement dans le navigateur.",
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/cognitive',
    languages: getAlternateLanguages('/fr/drills/cognitive'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Exercices de Performance", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Entraînement Cérébral & Cognitif", "item": "https://skilldrills.online/fr/drills/cognitive" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-12",
  "name": "Entraînement cérébral et concentration (8 exercices)",
  "url": "https://skilldrills.online/fr/drills/cognitive",
  "description": "8 exercices gratuits dans le navigateur pour l'attention, la concentration, la réaction de choix et la vitesse de traitement.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": cognitiveDrills.map((drill) => {
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
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que l'entraînement cognitif et comment renforce-t-il les capacités mentales ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'entraînement cognitif regroupe des exercices répétables qui sollicitent l'attention sélective, l'attention divisée, le changement de règle et la vitesse de traitement de l'information. Contrairement à l'apprentissage par cœur, vous vous exercez à choisir la bonne réponse sous contrainte de temps. La pratique régulière rend généralement plus rapide et plus précis sur la même tâche ; un effet durable sur le fonctionnement du cerveau n'est pas démontré."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les domaines cognitifs fondamentaux entraînés par ces exercices ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les 8 exercices couvrent cinq domaines : la vitesse de traitement (appariement de symboles, lecture rapide RSVP), l'inhibition des distracteurs (exercice Stroop), l'attention divisée et le multitâche (plusieurs flux à surveiller en même temps), la recherche visuelle avec la table de Schulte, et le changement de règle (réaction de choix dont la règle change). Les exercices de mémoire se trouvent dans la catégorie Mémoire."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne le test de Stroop et pourquoi est-il essentiel pour l'attention ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Décrit par John Ridley Stroop en 1935, l'effet Stroop est l'interférence qui apparaît quand le sens d'un mot (par exemple VERT) entre en conflit avec la couleur de son encre (par exemple rouge) : il faut freiner le réflexe de lecture pour nommer la couleur. Le test classique mesure l'écart de temps entre les essais congruents et incongruents. L'exercice Stroop de SkillDrills est une pratique : vous choisissez la couleur de l'encre et le score, la précision et le niveau atteint sont enregistrés, sans score d'interférence."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les bénéfices de la table de Schulte pour la vitesse de lecture et le champ visuel ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La table de Schulte est une grille de nombres mélangés, associée à Walter Schulte, que l'on parcourt de 1 dans l'ordre croissant ; la version 5×5 est la plus connue. Dans SkillDrills, la grille commence en 3×3 et s'agrandit à chaque table terminée. Garder le regard au centre et repérer le nombre suivant en vision périphérique est une bonne stratégie d'exercice, mais aucun gain chiffré sur le champ visuel ou la lecture n'est garanti : suivez plutôt votre propre temps de résolution."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la durée d'entraînement recommandée pour observer des progrès mesurables ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n'existe pas de durée optimale établie. Des séances courtes et concentrées, d'environ 10 à 15 minutes plusieurs fois par semaine, sont plus faciles à comparer que de longues séances fatigantes. Faites une pause dès que votre précision baisse."
      }
    },
    {
      "@type": "Question",
      "name": "Les exercices cérébraux en ligne apportent-ils un réel avantage en compétition esport ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pas de manière garantie. Les progrès sont surtout démontrés sur des tâches très proches de celles entraînées ; le transfert vers les jeux vidéo, le travail ou la vie quotidienne reste incertain et varie selon les personnes. La recherche visuelle et l'inhibition des distracteurs ressemblent à certaines actions de jeu, comme lire la minicarte, et peuvent servir d'exercice complémentaire."
      }
    },
    {
      "@type": "Question",
      "name": "Ces exercices conviennent-ils aux enfants, aux adultes et aux personnes âgées ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les exercices sont utilisables par les adolescents et les adultes, avec une difficulté qui augmente au fil des niveaux. Servez-vous-en pour suivre vos propres résultats."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il du matériel spécifique pour réaliser ces tests cognitifs ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucun téléchargement ni installation n'est nécessaire : tous les exercices fonctionnent directement dans le navigateur, à la souris ou au toucher. Pour des résultats plus comparables, utilisez le même appareil et le même navigateur, fermez les onglets gourmands en arrière-plan et évitez de changer de périphérique d'une séance à l'autre."
      }
    }
  ]
};

export default function FrenchCognitiveHubPage() {
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
      <CognitiveHubClient faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))} />
    </>
  );
}

