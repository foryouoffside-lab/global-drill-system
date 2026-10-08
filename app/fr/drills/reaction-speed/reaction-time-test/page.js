import ReactionTimeTestWrapper from '@/app/drills/reaction-speed/reaction-time-test/ReactionTimeTestWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  "title": "Jeu de perception du temps : temps cible | SkillDrills",
  "description": "Jeu de perception du temps : cliquez quand le temps cible s’est écoulé. Pas un test de réaction : voir le Test de réaction (signal lumineux).",
  "keywords": [
    "jeu de perception du temps",
    "jeu d’estimation du temps",
    "jeu de timing",
    "atteindre le temps cible",
    "horloge interne jeu",
    "entraîner la perception du temps",
    "jeu arrêter le chrono",
    "s’entraîner au timing du clic"
  ],
  "alternates": {
    "canonical": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test",
    "languages": getAlternateLanguages('/drills/reaction-speed/reaction-time-test')
  },
  "openGraph": {
    "images": [
      {
        "url": "https://skilldrills.online/opengraph-image",
        "width": 1200,
        "height": 630
      }
    ],
    "title": "Jeu de perception du temps : temps cible | SkillDrills",
    "description": "Estimez un temps cible entre 1 et 8 secondes, cliquez au bon moment et découvrez votre erreur en millisecondes.",
    "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test",
    "siteName": "SkillDrills",
    "locale": "fr_FR",
    "type": "website"
  },
  "twitter": {
    "images": [
      "https://skilldrills.online/opengraph-image"
    ],
    "card": "summary_large_image",
    "title": "Jeu de perception du temps : temps cible | SkillDrills",
    "description": "Jeu d’estimation du temps : mémorisez le temps cible, cliquez quand il s’est écoulé et voyez votre écart en millisecondes."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills Accueil",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Exercices",
      "item": "https://skilldrills.online/fr/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Vitesse de Réaction",
      "item": "https://skilldrills.online/fr/drills/reaction-speed"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Jeu de perception du temps",
      "item": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "sameAs": [
    "https://en.wikipedia.org/wiki/Time_perception"
  ],
  "name": "Jeu de perception du temps : temps cible",
  "alternateName": [
    "Jeu d’estimation du temps",
    "Jeu arrêter le chrono",
    "Entraînement de l’horloge interne"
  ],
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Jeu de navigateur pour estimer le temps : un temps cible s’affiche, vous cliquez quand vous pensez qu’il s’est écoulé et voyez votre écart en millisecondes."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Jeu de perception du temps : temps cible | SkillDrills",
  "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test",
  "description": "Jeu gratuit d’estimation du temps en ligne. Il mesure l’écart entre votre clic et un temps cible, et ne mesure pas la réaction à un signal.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
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
  "teaches": "Estimation du temps, timing d’intervalle, régularité du moment du clic"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jeu de perception du temps : temps cible",
  "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test",
  "description": "Jeu de timing : mémorisez un temps cible entre 1 et 8 secondes et cliquez au bon moment.",
  "genre": [
    "Timing Game",
    "Casual"
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
  "name": "Comment jouer au jeu de perception du temps",
  "description": "Mémorisez le temps cible, cliquez quand il s’est écoulé et lisez votre erreur en millisecondes.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Lancer l’exercice",
      "text": "Cliquez ou touchez Démarrer pour ouvrir l’arène en plein écran.",
      "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Mémoriser le temps cible",
      "text": "Lisez le temps cible, compris entre une et huit secondes. Il disparaît après un court instant.",
      "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Cliquer quand le temps est écoulé",
      "text": "Cliquez ou touchez l’écran quand vous estimez que le temps cible s’est écoulé. Aucun affichage numérique pendant que le chrono tourne.",
      "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Examiner votre erreur",
      "text": "Jouez plusieurs manches et comparez votre erreur moyenne et votre régularité.",
      "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Est-ce un test de temps de réaction ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. C’est un jeu d’estimation du temps. Un temps cible est affiché, vous cliquez quand vous estimez qu’il s’est écoulé et l’exercice indique votre écart en millisecondes. Pour mesurer votre rapidité de réaction à un signal, utilisez le Test de réaction (signal lumineux)."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne le jeu ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un temps cible apparaît un instant puis disparaît. Un orbe lumineux sans affichage numérique reste actif pendant que le chrono tourne en arrière-plan, et vous cliquez quand vous pensez que le temps cible est écoulé. L’exercice affiche ensuite l’instant exact de votre clic et votre erreur."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la durée des temps cibles ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les cibles commencent entre 1 et environ 2 secondes, et la limite haute augmente avec le niveau jusqu’à un maximum de 8 secondes. Le temps cible est affiché avec trois décimales, par exemple 3,250 s."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le score est-il calculé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Votre erreur est l’instant du clic moins le temps cible. Le clic compte comme réussi si l’erreur est dans la limite de 50 ms plus 5 % de la cible ; pour 3 secondes, cela fait 200 ms. Plus c’est proche, plus vous marquez de points, une erreur sous 10 ms est notée EXACT et les réussites consécutives augmentent un multiplicateur de combo jusqu’à 3,0×."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si je clique trop tôt ou trop tard ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les deux comptent comme une erreur. Un clic hors de la fenêtre autorisée est un échec : le combo est réinitialisé et une alerte rouge s’affiche, mais votre score est conservé."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je compter dans ma tête ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, compter est votre propre stratégie. L’orbe n’a pas d’affichage numérique et ses anneaux pulsent une fois par seconde, ce que vous pouvez utiliser comme repère. Essayez plusieurs méthodes et gardez celle qui donne la plus petite erreur moyenne."
      }
    },
    {
      "@type": "Question",
      "name": "La fréquence de rafraîchissement ou la latence d’entrée influencent-elles le résultat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Légèrement. Les clics sont horodatés avec l’horloge performance.now() du navigateur, mais votre écran affiche une nouvelle image toutes les 16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,2 ms à 240 Hz, et les périphériques ajoutent un délai d’interrogation (Woods et al., 2015). Comparez les résultats sur le même appareil."
      }
    },
    {
      "@type": "Question",
      "name": "La pratique peut-elle améliorer mon timing ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La pratique améliore généralement la tâche travaillée : votre erreur moyenne sur cet exercice devrait donc diminuer. La mesure dans laquelle cela se transfère à d’autres tâches varie et n’est pas garantie."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce la même chose que le défi des 10 secondes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’idée est proche, estimer un intervalle sans chrono visible, mais la cible change à chaque manche et n’est pas fixée à 10 secondes. L’exercice note aussi la taille de votre erreur plutôt qu’une simple réussite ou un échec."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce gratuit et cela fonctionne-t-il sur mobile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, c’est gratuit, sans inscription ni téléchargement. Cela fonctionne dans un navigateur mobile, mais l’entrée tactile ajoute sa propre latence : comparez vos scores uniquement à d’autres essais sur le même appareil."
      }
    }
  ]
};

const reactionGuide = {
  "heading": "Jeu de perception du temps : fonctionnement de l’exercice d’estimation",
  "intro": [
    "C’est un jeu d’estimation du temps, pas un test de temps de réaction. Un temps cible compris entre une et huit secondes s’affiche brièvement, disparaît, et vous cliquez quand vous estimez qu’il s’est écoulé. L’exercice indique l’écart entre votre clic et la cible en millisecondes. Pour tester votre rapidité de réaction à un signal visuel, utilisez le Test de réaction (signal lumineux).",
    "Chaque clic est horodaté avec l’horloge performance.now() du navigateur, entièrement sur votre appareil. Votre écran quantifie ce que vous voyez selon son intervalle de rafraîchissement : environ 16,7 ms par image à 60 Hz, 6,9 ms à 144 Hz et 4,2 ms à 240 Hz (Woods et al., 2015). L’interrogation de la souris ajoute environ 8 ms à 125 Hz contre 1 ms à 1000 Hz.",
    "Considérez les écarts inférieurs à environ 5 ms comme du bruit de mesure et comparez vos propres sessions sur le même matériel plutôt qu’avec la configuration d’une autre personne. C’est un outil d’entraînement, pas une mesure clinique."
  ],
  "benchmarks": {
    "title": "Comment l’erreur de timing est notée",
    "headers": [
      "Note",
      "Erreur autorisée",
      "Exemple pour une cible de 3,000 s"
    ],
    "rows": [
      [
        "EXACT",
        "Jusqu’à 10 ms",
        "Clic entre 2,990 s et 3,010 s"
      ],
      [
        "PERFECT",
        "Jusqu’à 20 % de la fenêtre de réussite",
        "À moins de 40 ms"
      ],
      [
        "EXCELLENT",
        "Jusqu’à 40 % de la fenêtre de réussite",
        "À moins de 80 ms"
      ],
      [
        "GOOD",
        "Jusqu’à 60 % de la fenêtre de réussite",
        "À moins de 120 ms"
      ],
      [
        "OK",
        "Jusqu’à 80 % de la fenêtre de réussite",
        "À moins de 160 ms"
      ],
      [
        "HIT",
        "Jusqu’à la fenêtre de réussite complète",
        "À moins de 200 ms"
      ]
    ],
    "note": "La fenêtre de réussite est de 50 ms plus 5 % du temps cible : les cibles longues sont donc plus tolérantes en valeur absolue. Ce sont les règles de score de cet exercice, pas des normes de population."
  },
  "techniques": {
    "title": "Façons d’estimer un court intervalle",
    "items": [
      {
        "name": "Compter à rythme constant",
        "desc": "Compter mentalement des subdivisions vous donne un tempo interne reproductible. Différentes vitesses de comptage conviennent à différentes cibles.",
        "tips": "Choisissez une vitesse de comptage et gardez-la pendant toute la séance pour que vos erreurs restent comparables."
      },
      {
        "name": "Utiliser la pulsation d’une seconde",
        "desc": "Les anneaux autour de l’orbe pulsent une fois par seconde. En comptant chaque pulsation comme un tic, vous additionnez des secondes entières et n’estimez que le reste.",
        "tips": "Avec des cibles à décimales comme 3,250 s, le dernier clic tombe entre deux pulsations."
      },
      {
        "name": "Analyser l’erreur signée",
        "desc": "Après chaque clic, l’exercice indique quand vous avez cliqué. Si vous êtes toujours en avance ou en retard, décalez votre comptage interne.",
        "tips": "Un petit biais constant se corrige plus facilement qu’une grande dispersion aléatoire."
      }
    ]
  },
  "steps": [
    "Appuyez sur Démarrer pour ouvrir l’arène en plein écran.",
    "Lisez le temps cible avant qu’il ne disparaisse.",
    "Cliquez ou touchez l’écran quand vous estimez que le temps cible s’est écoulé.",
    "Jouez plusieurs manches et comparez votre erreur moyenne et votre régularité."
  ],
  "audience": "Joueurs, musiciens, sportifs et toute personne qui souhaite travailler un timing de clic plus régulier et un meilleur sens des intervalles courts.",
  "faqs": faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('woods2015'),
  "related": [
    {
      "href": "/fr/drills/visual/reaction-speed/light-reaction",
      "label": "Test de réaction (signal lumineux)"
    },
    {
      "href": "/fr/drills/reaction-speed",
      "label": "Vitesse de Réaction"
    },
    {
      "href": "/fr/drills/motor/movement-speed/rapid-tapping",
      "label": "Test de CPS"
    },
    {
      "href": "/fr/drills/reaction-speed/fps-tracking-trainer",
      "label": "Entraîneur de suivi FPS"
    }
  ]
};

export default function FrenchReactionTimeTestPage() {
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
      <ReactionTimeTestWrapper
        copy={{
          title: "Jeu de perception du temps",
          subtitle: "Estimation du temps : mémorisez le temps cible, cliquez au bon moment et voyez votre erreur en millisecondes",
          caption: "Un temps cible s’affiche puis disparaît. Cliquez quand vous pensez que ce temps s’est écoulé.",
        }}
      />
      <DrillGuide guide={reactionGuide} />
      <RelatedDrills currentCategory="reaction-speed" currentHref="/drills/reaction-speed/reaction-time-test" />
      <DrillFooter />
    </>
  );
}
