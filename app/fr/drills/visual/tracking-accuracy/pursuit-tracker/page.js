import AutoPursuitClient from '@/app/drills/visual/tracking-accuracy/pursuit-tracker/AutoPursuitClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de poursuite lisse au curseur | SkillDrills",
  description: "Test de poursuite lisse au curseur : gardez la souris 45 s sur un point qui change de vitesse et de direction, +5 pts par seconde. Pas un test de la vue.",
  keywords: [
    "test de poursuite lisse",
    "poursuite lisse au curseur",
    "garder le curseur sur la cible",
    "précision de suivi",
    "suivre un point mobile",
    "smooth pursuit"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de poursuite lisse au curseur | SkillDrills",
    description: "Gardez le curseur sur un point qui change de vitesse et de direction. Seul le curseur est noté, pas vos yeux. Gratuit dans le navigateur.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de poursuite lisse au curseur | SkillDrills",
    description: "Poursuite lisse au curseur : suivez un point mobile pendant 45 secondes sans le lâcher.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/pursuit-tracker'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Entraînements", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Perception Visuelle", "item": "https://skilldrills.online/fr/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Précision de Poursuite", "item": "https://skilldrills.online/fr/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "Poursuite lisse au curseur", "item": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de poursuite lisse au curseur",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Exercice de 45 secondes dans le navigateur : gardez le curseur (ou le doigt) sur un point qui change de vitesse et de direction. Seule la position du curseur est notée ; pas de mesure du regard par caméra, ni test de la vue ou examen médical.",
  "featureList": [
    "Manche fixe de 45 secondes ; le point change de vitesse et de direction au hasard et rebondit sur les bords",
    "Environ 1 seconde de curseur sur le point (zone de contact généreuse) : +5 points et série +1",
    "Plus de 2 secondes à côté remet seulement la série à zéro, sans perte de points ni de temps",
    "Plus le score monte, plus le point est petit et rapide ; données uniquement dans le stockage local"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de poursuite lisse au curseur | SkillDrills",
  "alternateName": "Pursuit Tracker Pro",
  "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker",
  "dateModified": "2026-11-12",
  "description": "Test gratuit de poursuite lisse au curseur : gardez un point mobile sous la souris pendant 45 secondes.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne compatible HTML5 Canvas.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Suivre une cible mobile du regard et garder le curseur dessus"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de poursuite lisse au curseur",
  "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker",
  "description": "Gardez le curseur sur un point qui change de vitesse et de direction. Jeu gratuit de poursuite lisse.",
  "genre": [
    "Action",
    "Visual Tracking"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment se déroule le test de poursuite lisse au curseur",
  "dateModified": "2026-11-12",
  "description": "Les quatre étapes de la manche de 45 secondes.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Placer le curseur sur le point",
      "text": "Après le compte à rebours, un point orange apparaît et se déplace. Quand le curseur (ou le doigt sur écran tactile) est dessus, il devient vert.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Tenir environ 1 seconde",
      "text": "Quand l'anneau autour du point est plein (environ 1 seconde) : +5 points et série +1. Si vous glissez à côté, l'anneau repart de zéro.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Suivre les changements de direction",
      "text": "Le point change de vitesse et de direction sans prévenir et rebondit sur les bords. Il accélère et rétrécit avec le score et la série.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Tenir jusqu'au bout",
      "text": "Plus de 2 secondes à côté remet seulement la série à zéro ; points et temps restent. La manche s'arrête après 45 secondes.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/pursuit-tracker#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment fonctionne le test de poursuite lisse au curseur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous gardez le curseur sur un point mobile pendant 45 secondes. Chaque seconde (environ) de contact ininterrompu rapporte 5 points. Seule la position du curseur est notée : aucune caméra ni eye-tracker ne mesure vos yeux."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si je perds le point ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'anneau d'une seconde en cours repart de zéro, et après plus de 2 secondes à côté la série retombe à 0. Aucun point ni temps n'est retiré."
      }
    },
    {
      "@type": "Question",
      "name": "La difficulté augmente-t-elle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plus le score monte, plus le point rétrécit (jusqu'à la moitié de sa taille) et plus sa vitesse maximale augmente. Une longue série le rend aussi plus rapide."
      }
    },
    {
      "@type": "Question",
      "name": "La fréquence de l'écran compte-t-elle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. L'exercice compte des images : à 60 Hz, les points tombent environ chaque seconde ; sur un écran plus rapide, les points arrivent plus vite et le point bouge plus vite. Les scores de différents appareils ne sont donc pas comparables."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que la poursuite lisse (smooth pursuit) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est le mouvement des yeux qui glisse avec un objet en mouvement pour le garder au centre du regard. Si l'objet va trop vite, l'œil prend du retard et le rattrape par de petites saccades (Krauzlis, 2004). L'exercice reproduit cette situation avec le curseur, sans mesurer les yeux."
      }
    },
    {
      "@type": "Question",
      "name": "Cet entraînement améliore-t-il ma vue ou ma visée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un meilleur score montre que vous maîtrisez mieux cette tâche. Aucune amélioration de la vue, du jeu ou du sport n'est garantie, et l'exercice ne remplace pas un examen chez un ophtalmologiste."
      }
    },
    {
      "@type": "Question",
      "name": "Le test est-il gratuit et où sont stockés mes scores ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, gratuit et sans compte. Les records restent uniquement dans le stockage local de votre navigateur."
      }
    }
  ]
};

const guideData = {
  heading: "Test de poursuite lisse au curseur : garder la cible sous la souris",
  intro: [
    "Ce test de poursuite lisse au curseur consiste à suivre du regard un point qui se déplace pendant 45 secondes en gardant le curseur dessus. Seul le temps passé par le curseur sur le point est noté ; vos yeux ne sont pas filmés.",
    "Chaque seconde environ de contact ininterrompu (zone généreuse) rapporte +5 points et allonge la série. Le point change de vitesse et de direction sans prévenir, rebondit sur les bords et devient plus petit et plus rapide quand le score monte. Plus de 2 secondes à côté remet seulement la série à zéro.",
    "Les yeux suivent en douceur un objet lent ; s'il va trop vite, le regard prend du retard et rattrape par petits sauts (Krauzlis, 2004). L'exercice en fait une simple tâche de curseur et ne mesure ni ne diagnostique l'acuité visuelle ou les mouvements des yeux."
  ],
  benchmarks: {
    "title": "Paliers d'entraînement SkillDrills (propres à cet exercice, 60 Hz)",
    "headers": [
      "Palier",
      "Points en 45 s",
      "Description"
    ],
    "rows": [
      [
        "Haut",
        "180+",
        "Le point est tenu presque tout le temps."
      ],
      [
        "Stable",
        "120 – 179",
        "Quelques pertes juste après un changement de direction."
      ],
      [
        "En progrès",
        "60 – 119",
        "Souvent interrompu dans les phases rapides."
      ],
      [
        "Découverte",
        "< 60",
        "Prise en main de l'exercice."
      ]
    ],
    "note": "Paliers définis par SkillDrills, pas des normes scientifiques ni une évaluation de la vue. La fréquence de l'écran et la souris influencent le résultat."
  },
  techniques: {
    "title": "Conseils pour garder le curseur sur la cible",
    "items": [
      {
        "name": "Viser le centre",
        "desc": "Au bord du point, le moindre changement de direction vous fait sortir.",
        "tips": "Gardez le curseur au milieu du point et bougez avec lui."
      },
      {
        "name": "Poignet détendu",
        "desc": "Une main crispée fait sauter le curseur.",
        "tips": "Petites corrections au poignet, grands déplacements avec le bras."
      },
      {
        "name": "Anticiper les bords",
        "desc": "Le point rebondit dès qu'il touche un bord.",
        "tips": "Quand il approche d'un bord, préparez-vous à repartir dans l'autre sens."
      },
      {
        "name": "Revenir tout de suite",
        "desc": "Revenir en moins de 2 secondes conserve la série.",
        "tips": "Ne vous arrêtez pas en cas d'écart : revenez aussitôt sur le point."
      }
    ]
  },
  steps: [
    "Appuyez sur Démarrer et attendez le compte à rebours.",
    "Placez le curseur sur le point jusqu'à ce qu'il devienne vert.",
    "Restez dessus pour gagner 5 points environ chaque seconde.",
    "Suivez les changements de direction et les rebonds.",
    "Après 45 secondes, consultez score, série et note."
  ],
  audience: "Pour tous ceux qui veulent s'exercer à garder le curseur sur une cible mobile, et les joueurs qui veulent tester rapidement leur suivi.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('krauzlis2004', 'rashbass1961'),
  related: [
    {
      "href": "/fr/drills/visual/tracking-accuracy/moving-target",
      "label": "Intercepter des cibles mobiles"
    },
    {
      "href": "/fr/drills/visual/tracking-accuracy/multiple-targets",
      "label": "Suivi d'Objets Multiples"
    },
    {
      "href": "/fr/drills/visual/reaction-speed/go/no-go",
      "label": "Test Go/No-Go"
    },
    {
      "href": "/fr/drills/fps/strafe-tracking",
      "label": "Strafe Tracking FPS"
    },
    {
      "href": "/fr/drills/fps/pro-smooth-pursuit",
      "label": "Pro Smooth Pursuit FPS"
    }
  ]
};

export default function PursuitTrackerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <AutoPursuitClient copy={{  "title": "Test de poursuite lisse au curseur" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
