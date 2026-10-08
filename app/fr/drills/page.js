import DrillsDirectoryClient from '@/app/drills/DrillsDirectoryClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { buildDirectoryMetadata, getDirectoryCollectionFields } from '@/lib/i18n/siteLandingSeoNative';

const legacyMetadata = {
  title: 'Aim Trainer : 81 Exercices Gratuits | SkillDrills',
  description: '81 exercices en ligne gratuits en 8 catégories : aim trainer FPS, test de réflexes, mémoire, CPS et acuité visuelle directement sur navigateur.',
  keywords: [
    'aim trainer gratuit',
    'entrainement au tir en ligne',
    'test de reflexe en ligne',
    'jeux dentrainement cerebral gratuit',
    'test de memoire gratuit',
    'poursuite visuelle exercices',
    'test cps clic par seconde',
    'entrainer son aim valorant',
    'flick shot entrainement',
    'tracking aim entrainement',
    'test de stroop en ligne',
    'table de schulte en ligne',
    'memoire de travail exercices',
    'vision peripherique entrainement',
    'coordination oeil main test'
  ],
  openGraph: {
    title: 'Aim Trainer : 81 Exercices Gratuits | SkillDrills',
    description: '81 exercices en ligne gratuits en 8 catégories : aim trainer FPS, test de réflexes, mémoire, CPS et acuité visuelle directement sur navigateur.',
    type: 'website',
    url: 'https://skilldrills.online/fr/drills',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    images: [{
      url: 'https://skilldrills.online/icons/icon-512x512.png',
      width: 512,
      height: 512,
      alt: 'Catalogue Complet des 81 Exercices SkillDrills',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aim Trainer : 81 Exercices Gratuits | SkillDrills',
    description: '81 exercices en ligne pour la visée, les réflexes, la mémoire et l\'acuité visuelle.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills',
    languages: getAlternateLanguages('/fr/drills'),
  },
};

export const metadata = {
  ...legacyMetadata,
  ...buildDirectoryMetadata('fr', 'https://skilldrills.online/fr/drills', DRILLS.length, getAlternateLanguages('/fr/drills')),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tous les Exercices",
      "item": "https://skilldrills.online/fr/drills"
    }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Catalogue Complet des 81 Exercices de Performance SkillDrills",
  "description": "Collection scientifique complète de 81 exercices interactifs pour la visée FPS, la vitesse de réaction, la poursuite visuelle, la cognition, la mémoire et la motricité fine.",
  "url": "https://skilldrills.online/fr/drills",
  "inLanguage": "fr",
  "hasPart": DRILLS.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'fr', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/fr${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Nécessite JavaScript et la prise en charge de HTML5 Canvas",
      "description": loc.tagline || drill.description,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR"
      }
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels exercices trouve-t-on sur SkillDrills ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `SkillDrills regroupe ${DRILLS.length} exercices gratuits dans le navigateur : visée et suivi de cible, réflexes et temps de réaction, mémoire, concentration, précision de la souris, coordination et suivi visuel. Chaque catégorie a sa page avec la liste de ses exercices.`
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il créer un compte ou installer un logiciel ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Non. Les exercices fonctionnent dans un navigateur moderne, sans inscription ni téléchargement. Vos records sont stockés dans le LocalStorage de votre navigateur.`
      }
    },
    {
      "@type": "Question",
      "name": "Par quel exercice commencer ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Pour la vitesse de clic, ouvrez le test CPS. Pour la visée, l’aim trainer en ligne. Pour les réflexes, le test de réaction ou le jeu de réflexes. Pour la mémoire, les exercices de la catégorie mémoire, comme le jeu Simon.`
      }
    },
    {
      "@type": "Question",
      "name": "Les exercices fonctionnent-ils sur téléphone ou tablette ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Les exercices de mémoire, de concentration et de réaction fonctionnent au toucher. Les exercices de visée et de précision de la souris demandent une souris et un ordinateur.`
      }
    },
    {
      "@type": "Question",
      "name": "Les résultats sont-ils des tests médicaux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Non. Ce sont des jeux d’entraînement sans valeur de diagnostic. Les paliers affichés sont des repères propres à chaque exercice, pas des classements de population. Pour une question de santé, consultez un professionnel.`
      }
    },
    {
      "@type": "Question",
      "name": "Ces exercices me feront-ils progresser dans mes jeux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Ils permettent de s’exercer à des tâches précises, comme viser, réagir ou mémoriser, et de suivre vos résultats d’une séance à l’autre. Aucune étude ne garantit un transfert vers un jeu précis : vérifiez l’effet dans le vôtre.`
      }
    },
    {
      "@type": "Question",
      "name": "Comment comparer deux séances de façon fiable ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Utilisez le même appareil, le même écran et la même souris. L’affichage ajoute un délai : 16,7 ms entre deux images à 60 Hz, 6,9 ms à 144 Hz, 4,1 ms à 240 Hz (Woods et al., 2015).`
      }
    },
    {
      "@type": "Question",
      "name": "Que mesurent les tests de réaction du site ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Ils mesurent le temps entre un stimulus et votre clic ou votre appui. Le résultat comprend aussi le délai de l’écran, du périphérique et du navigateur : il sert à suivre vos progrès, pas à vous situer face à une norme.`
      }
    },
    {
      "@type": "Question",
      "name": "Comment les catégories sont-elles organisées ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Les exercices sont classés par capacité travaillée : aim trainer et visée, contrôle cognitif, mémoire, motricité, réflexes physiques, perception visuelle, suivi visuel fluide, vitesse de réaction.`
      }
    },
    {
      "@type": "Question",
      "name": "Quelles données sont enregistrées ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Vos scores et vos préférences restent dans le stockage local de votre navigateur. Consultez la page de confidentialité pour le détail.`
      }
    }
  ]
};

Object.assign(collectionSchema, getDirectoryCollectionFields('fr', DRILLS.length));

export default function FrenchDrillsDirectoryPage() {
  const faqs = faqSchema.mainEntity.map((item) => ({
    q: item.name,
    a: item.acceptedAnswer.text,
  }));

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
      <DrillsDirectoryClient faqs={faqs} />
    </>
  );
}

