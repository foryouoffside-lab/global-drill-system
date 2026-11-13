import SaccadicGalleryWrapper from '@/app/drills/reaction-speed/saccadic-gallery/SaccadicGalleryWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Exercice de saccades oculaires : jeu de cibles | SkillDrills',
  description:
    'Exercice de saccades oculaires gratuit : portez le regard sur chaque cible qui apparaît et cliquez vite. Il mesure le temps de clic, pas vos yeux.',
  keywords: [
    'exercice saccades oculaires',
    'saccades oculaires',
    'exercice visuel',
    'exercices oculaires',
    'balayage visuel',
    'exercices saccadiques',
    'mouvements saccadiques',
    'sauts oculaires rapides',
    'agilité visuelle',
    'vitesse de réaction visuelle',
    'coordination œil-main',
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery',
    languages: getAlternateLanguages('/drills/reaction-speed/saccadic-gallery'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Exercice de saccades oculaires : jeu de cibles | SkillDrills',
    description:
      'Portez le regard sur chaque cible qui apparaît et cliquez vite : un exercice de saccades oculaires gratuit dans le navigateur.',
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Exercice de saccades oculaires : jeu de cibles | SkillDrills',
    description:
      'Exercice de saccades oculaires gratuit : repérez chaque cible et cliquez vite.',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Accueil', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Hub des Exercices', item: 'https://skilldrills.online/fr/drills' },
    { '@type': 'ListItem', position: 3, name: 'Vitesse de Réaction', item: 'https://skilldrills.online/fr/drills/reaction-speed' },
    { '@type': 'ListItem', position: 4, name: 'Exercice de saccades oculaires : jeu de cibles', item: 'https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery' },
  ],
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Exercice de saccades oculaires : jeu de cibles",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu gratuit dans le navigateur : les cibles apparaissent une à une sur une grille de points fixes ; portez le regard dessus et cliquez. Mesure le temps de clic, pas les mouvements oculaires.",
  "url": "https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-08"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Exercice de saccades oculaires : jeu de cibles",
  "description": "Exercice de saccades oculaires gratuit : repérage et clic sur cibles, jouable dans le navigateur.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne avec JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-08"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Exercice de saccades oculaires : jeu de cibles",
  "url": "https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery",
  "description": "Jeu de repérage visuel : cliquez les cibles dès qu’elles apparaissent.",
  "genre": [
    "Action",
    "Reaction Game"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-08",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cet exercice mesure-t-il vraiment mes mouvements oculaires ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Le jeu mesure le temps entre l’apparition d’une cible et votre clic, pas la trajectoire de vos yeux. Il fait travailler le repérage visuel et la réaction, qui incluent un saut du regard parmi d’autres étapes."
      }
    },
    {
      "@type": "Question",
      "name": "Que sont les saccades oculaires ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ce sont les sauts rapides des yeux d’un point à un autre. Leur vitesse angulaire maximale peut atteindre plusieurs centaines de degrés par seconde (Rayner, 1998 ; Leigh & Zee, 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Que sont les saccades expresses ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans certaines conditions, on observe des saccades à latence très courte, autour de 100 ms, appelées saccades expresses (Fischer & Weber, 1993). Ce jeu ne mesure pas la latence des yeux et ne peut donc pas les détecter."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce que la suppression saccadique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est la réduction de la sensibilité visuelle pendant le saut de l’œil, qui évite de percevoir un flou de mouvement (Leigh & Zee, 2015). Ce jeu ne la mesure pas."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionnent le temps et les points ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous partez avec 45 secondes et chaque cible touchée ajoute 2 secondes (60 secondes maximum). Une touche vaut 100 points multipliés par le combo (jusqu’à 3,0x) et un bonus de niveau. En montant de niveau, les cibles rétrécissent et restent visibles moins longtemps. Un clic manqué remet le combo à zéro ; la pénalité de 1 seconde ne s’applique que si vous l’activez dans les réglages. Le jeu se joue à la souris ou au doigt."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le temps de clic est-il mesuré ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le jeu horodate l’apparition de la cible et votre clic avec l’horloge performance.now() du navigateur. Le résultat inclut aussi le délai de l’écran et de la souris."
      }
    },
    {
      "@type": "Question",
      "name": "Le taux de rafraîchissement de l’écran change-t-il le résultat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il peut le décaler légèrement. L’intervalle entre deux images vaut 1000 divisé par la fréquence : environ 16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,2 ms à 240 Hz (Woods et al., 2015). L’effet sur le score de ce jeu n’a pas été mesuré : comparez vos séances sur le même écran."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice améliore-t-il la vitesse de lecture ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucune étude ne le démontre. Le jeu travaille le repérage de cibles et le clic, pas la lecture."
      }
    },
    {
      "@type": "Question",
      "name": "Cela aide-t-il dans les jeux de tir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rien ne prouve un transfert. Le jeu travaille le repérage visuel et la réaction sur une tâche simple ; vérifiez l’effet dans votre propre jeu."
      }
    },
    {
      "@type": "Question",
      "name": "Ce jeu est-il gratuit et fonctionne-t-il sans installation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Il est gratuit, sans compte ni installation, et vos résultats restent dans le LocalStorage de votre navigateur."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment utiliser cet entraînement visuel",
  "description": "Quatre étapes pour repérer les cibles et cliquer vite.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Installez-vous face à l’écran",
      "text": "Asseyez-vous face à l’écran à une distance confortable et posez le regard au centre de l’écran.",
      "url": "https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Repérez la cible",
      "text": "Gardez la tête immobile et repérez la cible qui apparaît sans tourner le cou.",
      "url": "https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Portez le regard sur la cible",
      "text": "Dirigez le regard vers la cible dès qu’elle apparaît.",
      "url": "https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Cliquez",
      "text": "Cliquez sur la cible (ou touchez-la sur mobile) pour enregistrer votre temps de réaction.",
      "url": "https://skilldrills.online/fr/drills/reaction-speed/saccadic-gallery#step-4"
    }
  ]
};

const saccadicGuide = {
  "heading": "Exercice de saccades oculaires : repérer une cible et cliquer vite",
  "intro": [
    "Cet exercice de saccades oculaires est un jeu gratuit : des cibles apparaissent une à une sur une grille de points fixes (4×3 sur ordinateur, 3×3 sur mobile) et vous cliquez dessus le plus vite possible. Il mesure votre temps de réaction, pas vos mouvements oculaires ; il fait travailler le repérage visuel, le déplacement du regard et la coordination œil-main.",
    "Les saccades sont des sauts rapides des yeux d’un point à un autre (Rayner, 1998). Leur vitesse peut atteindre plusieurs centaines de degrés par seconde, et la perception est réduite pendant le saut (suppression saccadique ; Leigh & Zee, 2015). Le jeu ne suit pas vos yeux : il fait seulement intervenir un saut du regard avant le clic.",
    "Mesure et matériel : tous les calculs sont réalisés dans votre navigateur avec l’horloge performance.now(), dont la résolution est limitée. Votre écran affiche une image toutes les 16,7 ms à 60 Hz, toutes les 6,9 ms à 144 Hz et toutes les 4,2 ms à 240 Hz (Woods et al., 2015) : comparez vos séances sur le même matériel."
  ],
  "benchmarks": {
    "title": "Repères de temps de réaction sur cibles (5 paliers)",
    "headers": [
      "Temps moyen de réaction",
      "Palier",
      "Lecture"
    ],
    "rows": [
      [
        "Moins de 300 ms",
        "Palier 1",
        "Très rapide pour une tâche avec choix de position"
      ],
      [
        "300 – 400 ms",
        "Palier 2",
        "Rapide"
      ],
      [
        "401 – 500 ms",
        "Palier 3",
        "Courant pour un premier essai"
      ],
      [
        "501 – 650 ms",
        "Palier 4",
        "Ralentissement possible : fatigue, écran ou souris"
      ],
      [
        "Plus de 650 ms",
        "Palier 5",
        "Point de départ : concentrez-vous sur l’exactitude"
      ]
    ],
    "note": "Paliers d’entraînement SkillDrills propres à cet exercice, ni normes issues de la recherche ni percentiles d’utilisateurs. Le temps affiché inclut le choix de la cible, le déplacement de la souris et les délais de l’écran : ce n’est pas une latence saccadique."
  },
  "techniques": {
    "title": "Quatre conseils pour des séances plus régulières",
    "items": [
      {
        "name": "Garder la tête immobile",
        "desc": "Gardez la tête et le cou immobiles et laissez les yeux se déplacer vers la cible.",
        "tips": "Posez les épaules et ne tournez pas le cou."
      },
      {
        "name": "Détecter en périphérie",
        "desc": "Gardez un regard souple et détendu au centre de l’écran pour repérer la cible avant de la fixer.",
        "tips": "Ne cherchez pas la cible : attendez qu’elle apparaisse."
      },
      {
        "name": "Viser le centre de la cible",
        "desc": "Cliquez au centre de la cible plutôt que de précipiter un clic approximatif.",
        "tips": "Un clic précis vaut mieux qu’un clic rapide mais manqué."
      },
      {
        "name": "Reposer les yeux",
        "desc": "Devant un écran, on cligne moins souvent. Faites de courtes pauses et regardez au loin entre les séries.",
        "tips": "Pas de fatigue : arrêtez la séance."
      }
    ]
  },
  "steps": [
    "Installez-vous face à l’écran, à une distance confortable.",
    "Lancez l’exercice et posez le regard au centre de l’écran.",
    "Dès qu’une cible apparaît, portez-y le regard.",
    "Cliquez sur la cible.",
    "Enchaînez les séries pour suivre votre temps moyen."
  ],
  "audience": "Joueurs et curieux qui veulent s’exercer au repérage visuel et à la coordination œil-main.",
  "related": [
    {
      "href": "/fr/drills/reaction-speed",
      "label": "Hub vitesse de réaction"
    },
    {
      "href": "/fr/drills/visual/reaction-speed/light-reaction",
      "label": "Test de temps de réaction"
    },
    {
      "href": "/fr/drills/reaction-speed/reflex-training-drill",
      "label": "Jeu de réflexes en ligne"
    },
    {
      "href": "/fr/drills/reaction-speed/visual-tracking-speed-test",
      "label": "Test de poursuite visuelle"
    }
  ],
  "faqs": faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('rayner1998', 'fischer1993', 'leigh2015', 'woods2015')
};

export default function FrenchSaccadicGalleryPage() {
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
      <SaccadicGalleryWrapper copy={{ title: 'Exercice de saccades oculaires : jeu de cibles', subtitle: 'Sauts du regard · Réaction', caption: 'Portez le regard sur chaque cible qui apparaît et cliquez dessus avec précision.' }} />
      <DrillGuide guide={saccadicGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
