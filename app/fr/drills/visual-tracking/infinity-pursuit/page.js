import InfinityPursuitClient from '@/app/drills/visual-tracking/infinity-pursuit/InfinityPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Exercice Oculaire en Huit | SkillDrills",
  description: "Exercice oculaire en huit couché pour pratiquer poursuite visuelle, coordination binoculaire et passage de la ligne médiane. Gratuit en ligne.",
  keywords: [
    "exercice oculaire en huit",
    "poursuite visuelle en huit",
    "huit couché",
    "coordination binoculaire",
    "franchissement de la ligne médiane",
    "mouvement des yeux",
    "poursuite fluide",
    "exercice des yeux en forme de huit",
    "exercice oculaire gratuit en ligne",
    "entraînement visuel sportif",
    "suivi visuel en huit",
    "coordination œil-main"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/visual-tracking/infinity-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/infinity-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Exercice Oculaire en Huit | SkillDrills",
    description: "Exercice oculaire en huit couché pour pratiquer poursuite visuelle, coordination binoculaire et passage de la ligne médiane. Gratuit en ligne.",
    url: "https://skilldrills.online/fr/drills/visual-tracking/infinity-pursuit",
    siteName: "SkillDrills",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exercice Oculaire en Huit | SkillDrills",
    description: "Exercice oculaire en huit couché pour pratiquer poursuite visuelle, coordination binoculaire et passage de la ligne médiane. Gratuit en ligne.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Poursuite Visuelle",
      "item": "https://skilldrills.online/fr/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Poursuite en Huit Infini",
      "item": "https://skilldrills.online/fr/drills/visual-tracking/infinity-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Exercice Oculaire en Huit – Poursuite Visuelle",
  "dateModified": "2026-09-20",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Navigateur",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Poursuite Oculaire en Huit Couché et Ligne Médiane",
  "dateModified": "2026-09-20",
  "url": "https://skilldrills.online/fr/drills/visual-tracking/infinity-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Navigateur",
  "browserRequirements": "JavaScript et Canvas HTML5 requis.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Entraînement de Poursuite Oculaire en Huit",
  "dateModified": "2026-09-20",
  "description": "Entraînement visuel dans le navigateur pour pratiquer la coordination binoculaire sur une trajectoire continue en huit couché.",
  "genre": ["Entraînement oculaire", "Vision sportive", "Poursuite visuelle"],
  "playMode": "Un joueur",
  "applicationCategory": "Game"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment Réaliser l’Exercice du Huit Couché pour les Yeux",
  "dateModified": "2026-09-20",
  "description": "Protocole pour entraîner la poursuite fluide et la coordination binoculaire le long de la lemniscate de Bernoulli.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Stabilisez Votre Posture",
      "text": "Placez-vous à 50-70 cm de l'écran avec la tête immobile pour mobiliser exclusivement les muscles oculomoteurs.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/infinity-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Démarrez à Vitesse Standard",
      "text": "Choisissez 1.0x afin d'habituer votre regard à la bascule continue entre les boucles gauche et droite.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/infinity-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Franchissez le Centre de Manière Fluide",
      "text": "Lors du croisement de la ligne médiane centrale, maintenez un glissement oculaire régulier sans clignement ni saccade corrective.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/infinity-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Enchaînez des Séries Courtes",
      "text": "Réalisez 5 à 8 blocs de 60 secondes avec des pauses pour renforcer le modèle moteur prédictif du cervelet.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/infinity-pursuit#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu’est-ce que l’exercice oculaire en huit couché ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est une pratique visuelle où les deux yeux suivent une cible qui parcourt un huit couché. Elle permet d’observer la continuité du regard et le passage central, sans remplacer un bilan clinique."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi observer le franchissement de la ligne médiane ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le passage central fait changer la cible de côté dans le champ visuel. L’observer aide à repérer les hésitations ou les sauts pendant la séance, sans transformer cette observation en diagnostic."
      }
    },
    {
      "@type": "Question",
      "name": "Comment les yeux participent-ils à la trajectoire en huit couché ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les muscles extraoculaires de chaque œil coordonnent des mouvements horizontaux, verticaux et diagonaux pour garder la cible dans le regard. L’exercice pratique le contrôle visuel et ne promet ni renforcement ni traitement."
      }
    },
    {
      "@type": "Question",
      "name": "Que signifie suivre la cible avec stabilité ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cela signifie garder le regard près de la cible pendant la courbe, avec peu de pertes ou de corrections. La mesure de la page sert à comparer des séances identiques et n’est pas une mesure clinique universelle."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice peut-il aider à suivre des cibles dans un jeu ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il propose une tâche contrôlée pour pratiquer la continuité du regard dans les courbes. Le transfert vers un jeu dépend de l’entraînement spécifique et de chaque personne ; aucune amélioration de visée n’est garantie."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi garder la tête stable pendant l’exercice ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une tête stable permet de mieux observer ce que les yeux suivent seuls et de comparer les séances. Ne raidissez pas la nuque : relâchez-la et arrêtez en cas de douleur ou de vertige."
      }
    },
    {
      "@type": "Question",
      "name": "Quel temps de pratique quotidienne est recommandé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commencez par une ou deux séries d’environ 60 secondes et reposez-vous entre elles. Augmentez seulement si le regard reste confortable ; il n’existe pas de dose quotidienne universelle."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice aide-t-il à réduire la fatigue oculaire devant les écrans ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cela peut servir de pause active pour varier un regard fixé sur l’écran, mais aucun soulagement n’est garanti. En cas de gêne persistante, de douleur ou de vision double, arrêtez et consultez."
      }
    },
    {
      "@type": "Question",
      "name": "Existe-t-il un transfert vers les sports réels comme le tennis ou le football ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La tâche ne reproduit qu’une partie du suivi d’une trajectoire. Les sports demandent aussi anticipation, profondeur, réaction et décision ; utilisez-la comme complément, pas comme remplacement."
      }
    },
    {
      "@type": "Question",
      "name": "L’exercice en huit est-il gratuit et comment le pratiquer en sécurité ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’outil est gratuit et fonctionne dans le navigateur sans compte obligatoire. Pratiquez à un rythme confortable, clignez naturellement et arrêtez en cas de douleur, vision double, nausée ou vertige ; demandez conseil si cela persiste."
      }
    }
  ]
};

const guideProps = {
  heading: "Bases Neurophysiologiques de la Lemniscate et de la Coordination Binoculaire",
  intro: [
    "La figure en huit couché, aussi appelée lemniscate, réunit des courbes diagonales et des passages par le centre dans une tâche de poursuite visuelle. La cible se déplace continûment afin de pratiquer un regard qui reste accroché sans transformer chaque virage en une suite de sauts. Il s’agit d’un exercice visuel, pas d’un examen ophtalmologique ou orthoptique.",
    "Le passage central permet d’observer la transition entre les hémichamps visuels droit et gauche. Gardez la cible nette et notez si le regard quitte la trajectoire, effectue un petit saut ou nécessite une pause. Cette observation décrit la séance et ne permet pas de poser un diagnostic binoculaire ou neurologique.",
    "La réponse dépend de la distance à l’écran, de la taille de la cible, du rafraîchissement et de la fatigue. Utilisez un affichage confortable, clignez naturellement et privilégiez la régularité à la vitesse. En cas de douleur, vision double, nausée ou vertige, arrêtez et demandez un avis professionnel."
  ],
  techniques: {
    title: "Quatre techniques pour suivre un huit couché",
    items: [
      { name: "Repère central", desc: "Commencez par percevoir le croisement central avant de suivre toute la boucle.", tips: "Gardez le buste calme, respirez naturellement et ralentissez si vous perdez la cible." },
      { name: "Courbe continue", desc: "Laissez les yeux accompagner la courbe sans anticiper la boucle suivante par un saut.", tips: "Regardez la cible présente ; n’essayez pas de couvrir tout le parcours d’un seul coup." },
      { name: "Symétrie des côtés", desc: "Comparez la boucle gauche et la boucle droite au cours de la même séance.", tips: "Si un côté est plus difficile, répétez lentement et notez l’écart sans forcer." },
      { name: "Progression mesurée", desc: "Augmentez la vitesse seulement si la trajectoire reste stable et confortable.", tips: "Faites une courte série, regardez au loin pour récupérer, puis revenez au dernier niveau confortable." }
    ]
  },
  steps: [
    "Asseyez-vous le dos soutenu et placez l’écran à une distance confortable, sans rapprocher le visage.",
    "Réglez la luminosité et la taille de la fenêtre pour voir la cible nettement ; relâchez et stabilisez la tête.",
    "Commencez à la vitesse la plus lente et suivez le point lumineux avec les deux yeux en clignant normalement.",
    "Observez le passage au centre et ralentissez si le regard saute ou si la tête commence à bouger.",
    "Notez la précision et le confort, reposez les yeux en regardant au loin, puis répétez ou augmentez d’un niveau."
  ],
  benchmarks: {
    title: "Repères de performance sur le huit couché",
    headers: ["Niveau", "Suivi de la cible", "Pertes au centre", "Précision du parcours", "Lecture pratique"],
    rows: [
      ["Très stable", "Cible presque toujours suivie", "Rares", "98 % ou plus", "Rythme confortable ; repère personnel, pas un diagnostic."],
      ["Stable", "Suivi continu", "Peu nombreuses", "92–97 %", "Bonne constance ; essayez une légère progression de vitesse."],
      ["Fonctionnel", "Quelques corrections", "Occasionnelles", "82–91 %", "Base adaptée aux séances lentes et à l’observation des changements."],
      ["En développement", "Retards perceptibles", "Fréquentes", "70–81 %", "Ralentissez, reposez-vous et comparez des séances aux conditions identiques."],
      ["Instable", "Cible souvent perdue", "Nombreuses", "Moins de 70 %", "Revenez à la vitesse lente et arrêtez en cas d’inconfort visuel."]
    ],
    note: "Ces fourchettes servent à comparer vos propres séances avec le même écran et la même distance ; elles ne sont pas des normes cliniques. Le suivi de la cible ne mesure ni l’acuité visuelle ni une maladie."
  },
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('barnes2008', 'krauzlis2004', 'robinson1965', 'leighzee2015', 'woods2015', 'salthouse1980'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Poursuite oculaire lente" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite directionnelle variable" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite évasive dynamique" },
    { href: "/fr/drills/visual-tracking/sine-wave-pursuit", label: "Poursuite en onde sinusoïdale" }
  ]
};

export default function InfinityPursuitPageFr() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InfinityPursuitClient
        copy={{
          title: "Exercice Oculaire en Huit",
          subtitle: "Poursuite visuelle et coordination binoculaire",
          description: "Suivez une cible sur un huit couché, observez le passage de la ligne médiane et pratiquez une poursuite fluide à un rythme confortable."
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
