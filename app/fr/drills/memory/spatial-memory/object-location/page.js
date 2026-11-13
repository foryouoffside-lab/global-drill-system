import ObjectLocationClient from '@/app/drills/memory/spatial-memory/object-location/ObjectLocationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de mémoire spatiale en ligne | SkillDrills",
  description: "Test de mémoire spatiale en ligne : des objets s’affichent 1,5 seconde dans une grille, puis retrouve la position de l’objet demandé. Gratuit, sans inscription.",
  keywords: [
    "test de mémoire spatiale",
    "mémoire de localisation des objets",
    "position des objets",
    "test de mémoire des positions",
    "test de mémoire en ligne",
    "mémoire de travail spatiale",
    "test de positionnement visuel",
    "jeu de mémoire spatiale",
    "entraînement mémoire spatiale",
    "rappel de coordonnées"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/object-location'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de mémoire spatiale en ligne | SkillDrills",
    description: "Test de mémoire spatiale en ligne : des objets s’affichent 1,5 seconde dans une grille, puis retrouve la position de l’objet demandé. Gratuit, sans inscription.",
    url: "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de mémoire spatiale en ligne | SkillDrills",
    description: "Test de mémoire spatiale en ligne : des objets s’affichent 1,5 seconde dans une grille, puis retrouve la position de l’objet demandé. Gratuit, sans inscription.",
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
      "name": "Entrainements de Memoire",
      "item": "https://skilldrills.online/fr/drills/memory"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Memoire Spatiale",
      "item": "https://skilldrills.online/fr/drills/memory/spatial-memory"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Test de Localisation d Objets",
      "item": "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location"
    }
  ]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de Mémoire Spatiale (Localisation d Objets)",
  "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "dateModified": "2026-11-12",
  "author": {
    "@type": "Organization",
    "name": "SkillDrills"
  },
  "sameAs": "https://fr.wikipedia.org/wiki/M%C3%A9moire_spatiale"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Mémoire Spatiale (Localisation d Objets)",
  "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location",
  "description": "Test de mémoire spatiale gratuit : retenir la position d’objets affichés 1,5 seconde dans une grille, puis retrouver celle de l’objet demandé.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills"
  },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de Mémoire Spatiale (Localisation d Objets)",
  "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location",
  "description": "Jeu de mémoire spatiale gratuit : de 2 à 10 objets sur une grille qui passe de 3x3 à 4x4 puis 5x5 ; retrouve la case de l’objet cible.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Spatial Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment s entrainer a la memoire de localisation spatiale",
  "description": "Quatre étapes pratiques pour retenir la position des objets en 1,5 seconde et retrouver la case de l’objet cible.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location#step-1",
      "name": "Englober la grille entiere",
      "text": "Gardez une vision panoramique de la matrice des l apparition des objets sans vous focaliser sur une seule case."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location#step-2",
      "name": "Former des liaisons objet-coordonnees",
      "text": "Liez chaque symbole visuel a un repere spatial (coin superieur gauche, centre, bord inferieur) pour creer une carte mentale."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location#step-3",
      "name": "Identifier la cible demandee",
      "text": "Lors de la requete, focalisez-vous sur le symbole cible et retrouvez son ancre spatiale dans votre representation mentale."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/object-location#step-4",
      "name": "Valider la coordonnee exacte",
      "text": "Cliquez avec precision sur la case correspondante sur la grille vide pour valider la manche et marquer des points."
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
      "name": "Qu’est-ce que ce test de mémoire spatiale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est un jeu d’entraînement gratuit sur la mémoire de la position des objets : tu retiens quel objet se trouvait dans quelle case, puis tu retrouves l’emplacement d’un objet demandé. Ce n’est pas un test neuropsychologique ni un outil de diagnostic ; ton score est un repère personnel d’entraînement."
      }
    },
    {
      "@type": "Question",
      "name": "Comment se déroule une partie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sur une grille 3x3, 2 objets (emojis) s’affichent pendant 1,5 seconde. Ensuite, un objet cible apparaît en haut et tu as 8 secondes pour toucher la case où il se trouvait. Une bonne réponse rapporte 150 points et fait monter d’un niveau ; chaque niveau ajoute un objet (10 au maximum). La grille passe en 4x4 au niveau 8 et en 5x5 au niveau 15. La partie dure 45 secondes au total."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce la tâche de localisation d’objets de Silverman et Eals ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Eals et Silverman (1994) ont étudié la mémoire de localisation d’objets avec une tâche de recherche où l’on interroge la position d’objets après les avoir observés. Ce jeu reprend une idée proche, mais ni leur procédure ni leurs normes."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne la liaison objet-emplacement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon Ungerleider et Mishkin (1982), la voie ventrale traite surtout l’identité des objets (le « quoi ») et la voie dorsale leur localisation (le « où »). Pour réussir ici, il faut retenir les deux ensemble : quel objet, et dans quelle case."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de positions peut-on retenir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mémoire de travail visuelle retient environ 3 à 4 éléments à la fois (Luck & Vogel, 1997 ; Cowan, 2001). Au-delà, des repères comme les coins, les bords ou le centre de la grille aident à garder plus de positions en tête."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le score est-il calculé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque position cible retrouvée rapporte 150 points. Le rang affiché en fin de partie est un palier d’entraînement SkillDrills avec 1 000 points en haut de l’échelle ; ce n’est ni une moyenne ni une norme clinique."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il en cas d’erreur ou si je ne réponds pas ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un mauvais clic ou l’absence de réponse en 8 secondes termine la manche, sans perte de points. Le niveau ne baisse pas : une nouvelle disposition apparaît au même niveau. Le chrono de 45 secondes continue cependant de tourner."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence avec le test de mémoire visuelle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans le test de mémoire visuelle (grille), tu reproduis tout un motif de cases allumées, que tu peux regrouper en formes. Ici, tu retiens quel objet occupait quelle case et tu ne cherches que la position d’un seul objet cible."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce utile pour les jeux de stratégie et les FPS ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’exercice ressemble à des situations où l’on mémorise une disposition d’un coup d’œil, comme des positions sur une mini-carte. Aucun gain dans d’autres activités n’est garanti."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test de mémoire spatiale est-il gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Il fonctionne directement dans le navigateur, sans compte. Ton score et ton record restent dans le localStorage de ton navigateur et ne sont envoyés à aucun serveur."
      }
    }
  ]
};

const objectLocationGuide = {
  heading: "Guide Scientifique : Mémoire Spatiale et Liaison Objet-Localisation",
  intro: [
    "Ce test de mémoire spatiale en ligne affiche des objets (emojis) pendant 1,5 seconde dans une grille. Un objet cible est ensuite demandé et tu touches la case où il se trouvait : il s'agit de retenir la position des objets, pas un motif. Tu commences avec 2 objets sur une grille 3x3 ; chaque bonne réponse ajoute un objet (10 au maximum), la grille passe en 4x4 au niveau 8 et en 5x5 au niveau 15.",
    "Les fondements cliniques de l'évaluation de la mémoire de localisation d'objets ont été posés par Marion Eals & Irwin Silverman (1994) dans leurs recherches pionnières sur la cognition spatiale, démontrant que la rétention des emplacements d'objets constitue un mécanisme évolutif spécialisé, distinct de la rotation mentale. Ce jeu n'est pas leur tâche de recherche, mais un exercice de format proche. Auparavant, Edward C. Tolman (1948) avait formalisé le concept de carte cognitive, illustrant comment les organismes construisent des modèles spatiaux internes de leur environnement.",
    "Dans l'architecture de la mémoire de travail, Robert H. Logie (1995) et Alan Baddeley (2000) ont établi que la liaison objet-localisation est coordonnée par le tampon épisodique (Episodic Buffer), qui intègre les données du cache visuel (identités des objets) et du scribe interne (coordonnées spatiales). Les travaux de Steven J. Luck & Edward K. Vogel (1997) ont prouvé que la conjonction de traits visuo-spatiaux génère un coût attentionnel majeur, tandis que Nelson Cowan (2001) a estimé la capacité de la mémoire de travail focale à environ 3 ou 4 éléments.",
    "Déroulement : la disposition reste visible 1,5 seconde, puis tu as 8 secondes pour répondre. Une bonne réponse rapporte 150 points et fait monter d'un niveau ; une erreur ou l'absence de réponse termine la manche sans perte de points, et une nouvelle disposition apparaît au même niveau. La partie dure 45 secondes au total ; aucun temps de réaction n'est mesuré.",
    "Données : ton score et ton record restent uniquement dans le localStorage de ton navigateur et ne sont envoyés à aucun serveur.",
    "Cet entraînement est un jeu interactif sur navigateur conçu pour la pratique cognitive et l'intérêt intellectuel. Il ne constitue pas un dispositif médical, un outil d'évaluation clinique, ni un protocole de diagnostic pour le TDAH, les troubles de la mémoire ou les affections neurocognitives. En cas d'inquiétude sur vos capacités cognitives ou de mémoire, consultez un neuropsychologue ou un médecin qualifié."
  ],
  benchmarks: {
    title: "Repères d'entraînement SkillDrills (une partie)",
    headers: ["Palier", "Points", "Bonnes réponses", "Difficulté atteinte"],
    rows: [
      ["Palier haut", "1 050 et plus", "7 ou plus", "Niveau 8+, 9 à 10 objets, grille 4x4 (5x5 après 14 bonnes réponses)"],
      ["Palier intermédiaire", "600 – 900", "4 – 6", "Niveau 5 à 7, 6 à 8 objets, grille 3x3"],
      ["Palier de départ", "150 – 450", "1 – 3", "Niveau 2 à 4, 3 à 5 objets, grille 3x3"],
      ["Début", "0", "0", "Niveau 1, 2 objets, grille 3x3"]
    ],
    note: "Points = bonnes réponses × 150. Ces paliers sont calculés à partir des règles du jeu : ce sont des repères d'entraînement SkillDrills, pas des statistiques de population ni des normes cliniques."
  },
  techniques: {
    title: "Protocoles Scientifiques pour Développer la Mémoire de Localisation",
    items: [
      {
        name: "Ancrage Relationnel sur Repères Topologiques",
        desc: "Associez les objets cibles aux repères spatiaux fixes tels que les 4 angles, la case centrale ou les bordures extérieures (Tolman, 1948). Retenir que « le losange est dans le coin supérieur gauche » ancre l'élément à un point de repère saillant sans nécessiter de calcul de coordonnées complexe.",
        tips: "Identifiez immédiatement quels objets occupent les cases périphériques et les coins dès leur apparition."
      },
      {
        name: "Appariement Associatif Sémantico-Spatial",
        desc: "Créez des associations narratives ou verbales rapides liant l'identité d'un symbole à son orientation spatiale (Baddeley, 2000). Par exemple, associez mentalement une « étoile » en haut au ciel, ou une « clé » en bas à un tiroir secret.",
        tips: "Formulez instantanément une étiquette verbale reliant le nom de l'icône à sa direction (ex. « étoile en haut, clé en bas »)."
      },
      {
        name: "Sectorisation par Quadrants et Chunking",
        desc: "Subdivisez mentalement les grilles plus grandes de 4x4 ou 5x5 en 4 quadrants distincts (haut-gauche, haut-droite, bas-gauche, bas-droite). Comptez le nombre d'objets présents dans chaque quadrant pour restreindre votre espace de recherche.",
        tips: "Dénombrez d'abord les objets par quadrant avant de mémoriser leur case précise au sein de ce sous-secteur."
      },
      {
        name: "Balayage Parafovéal et Ancrage Central",
        desc: "Fixez votre regard rigoureusement au centre de la grille lors de l'apparition pour capturer la disposition globale par vision parafovéale, puis effectuez 1 ou 2 micro-saccades ciblées pour résoudre les icônes périphériques ambiguës.",
        tips: "Évitez les mouvements oculaires désordonnés ; gardez la tête immobile et balayez la matrice avec fluidité."
      }
    ]
  },
  steps: [
    "Centrez votre regard sur la matrice et observez la répartition initiale des objets.",
    "Durant les 1,5 seconde d'affichage, reliez chaque objet à un repère saillant (angles, bordures, centre).",
    "Formez des paires sémantico-spatiales rapides reliant l'identité de l'icône à son emplacement.",
    "Dès l'effacement de la grille et l'apparition de l'icône cible, interrogez votre carte mentale et touchez la case mémorisée.",
    "À chaque niveau, un objet s'ajoute et la grille passe de 3x3 à 4x4 puis 5x5 : appliquez les mêmes repères à davantage d'objets."
  ],
  audience: "Joueurs de jeux tactiques et compétitifs (gestion des temps de recharge et suivi de cartes), étudiants en sciences et ingénierie, radiologues, conducteurs et toute personne désireuse d'optimiser sa mémoire de travail spatiale et sa cartographie cognitive.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'luck1997', 'tolman1948', 'eals1994'),
  related: [
    { href: "/fr/drills/memory/spatial-memory/grid-memorization", label: "Test de Mémoire Visuelle" },
    { href: "/fr/drills/memory/spatial-memory/path-tracing", label: "Test de Mémorisation de Trajet" },
    { href: "/fr/drills/memory/short-term-memory/digit-span", label: "Test d'Empan Numérique" },
    { href: "/fr/drills/memory/short-term-memory/word-recall", label: "Test de Mémoire Verbale" },
    { href: "/fr/drills/memory/working-memory/n-back", label: "Test de Mémoire de Travail N-Back" }
  ]
};

export default function ObjectLocationFrenchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
      <ObjectLocationClient
        copy={{
          "h1Keyword": "Test de mémoire spatiale en ligne",
          "h1Suffix": "",
          "subtitle": "Mémorise où se trouve chaque objet dans la grille",
          "statScore": "Score",
          "statTime": "Temps",
          "statLevel": "Niveau",
          "statBestScore": "Meilleur Score",
          "levelPrefix": "Niv.",
          "memorizePrompt": "MÉMORISEZ LES EMPLACEMENTS DES OBJETS",
          "targetPrompt": "CIBLE :",
          "startTitle": "Localisation d'Objets Pro",
          "startSubtitle": "Mémoire spatiale • Positions",
          "countdownSubtitle": "PRÉPAREZ-VOUS",
          "newBest": "NOUVEAU RECORD",
          "pointsLabel": "Points",
          "statAccuracy": "Précision",
          "statPeakLevel": "Niveau Max",
          "statPerfects": "Sans faute",
          "btnPlayAgain": "Rejouer",
          "rulesTitle": "Instructions et Système de Points",
          "aboutTitle": "À propos de l'entraînement à la localisation spatiale",
          "rulesItems": [
            {
              "num": "1",
              "text": "Mémoriser les positions & trouver la cible",
              "highlight": "+150 PTS",
              "result": "Mémorisez les objets en 1,5s puis cliquez sur la coordonnée demandée"
            },
            {
              "num": "2",
              "text": "Progression de niveau",
              "highlight": "Grille 3x3 → 4x4 → 5x5",
              "result": "Un objet de plus par niveau (10 max), 4x4 au niveau 8, 5x5 au niveau 15"
            },
            {
              "num": "3",
              "text": "Clic erroné / pas de réponse",
              "highlight": "Aucune pénalité",
              "result": "Fin de la manche sans perte de points ; 8 s pour répondre, le chrono de 45 s continue"
            },
            {
              "num": "4",
              "text": "Répétition de niveau",
              "highlight": "Même palier",
              "result": "Après un échec, nouvelle disposition au même niveau"
            }
          ]
        }}
      />
      <DrillGuide guide={objectLocationGuide} />
      <RelatedDrills />
    </>
  );
}
