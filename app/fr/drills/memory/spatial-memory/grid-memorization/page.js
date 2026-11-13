import GridMemorizationClient from '@/app/drills/memory/spatial-memory/grid-memorization/GridMemorizationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de mémoire visuelle en ligne | SkillDrills",
  description: "Test de mémoire visuelle en ligne : retiens les cases qui s’allument 1,5 seconde dans une grille et reproduis le motif, de 4x4 jusqu’à 12 cases en 5x5.",
  keywords: [
    "test de mémoire visuelle",
    "test mémoire visuelle",
    "motifs à mémoriser",
    "mémoire des motifs",
    "matrice de mémoire",
    "mémoire visuo-spatiale",
    "test de mémoire en ligne",
    "entraînement mémoire visuelle",
    "mémoire de travail visuelle",
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/grid-memorization'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de mémoire visuelle en ligne | SkillDrills",
    description: "Test de mémoire visuelle en ligne : retiens les cases qui s’allument 1,5 seconde dans une grille et reproduis le motif, de 4x4 jusqu’à 12 cases en 5x5.",
    url: "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de mémoire visuelle en ligne | SkillDrills",
    description: "Test de mémoire visuelle en ligne : retiens les cases qui s’allument 1,5 seconde dans une grille et reproduis le motif, de 4x4 jusqu’à 12 cases en 5x5.",
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
      "name": "Test de Memoire Visuelle",
      "item": "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Mémoire Visuelle en Ligne",
  "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization",
  "description": "Test de mémoire visuelle gratuit dans le navigateur : retenir les cases allumées 1,5 seconde dans une grille 4x4 à 5x5 et reproduire le motif.",
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
  "sameAs": "https://fr.wikipedia.org/wiki/M%C3%A9moire_visuelle",
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de Mémoire Visuelle en Ligne",
  "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization",
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
  }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de Mémoire Visuelle en Ligne",
  "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization",
  "description": "Exercice de mémoire visuelle gratuit : des cases s’allument 1,5 seconde dans une grille, puis tu reproduis le motif de mémoire.",
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
  "name": "Comment s entrainer a la memoire visuelle matricielle",
  "description": "Quatre étapes pratiques pour retenir un motif de cases allumées en 1,5 seconde et le reproduire.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization#step-1",
      "name": "Fixer le centre de la grille",
      "text": "Positionnez votre regard au centre exact de la matrice avant l allumage afin d englober la totalite du champ visuel parafoveal."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization#step-2",
      "name": "Appliquer le chunking geometrique",
      "text": "Regroupez mentalement les cases allumees en formes simples (lignes, blocs en L, diagonales) au lieu de memoriser des coordonnees isolees."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization#step-3",
      "name": "Maintenir l image dans le cache visuel",
      "text": "Conservez une image mentale globale du motif pendant la transition d extinction en evitant toute verbalisation phonologique parasite."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/grid-memorization#step-4",
      "name": "Restituer le motif avec precision",
      "text": "Cliquez methodiquement sur les cases mémorisees en commencant par les clusters les plus nets, sans vous precipiter."
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
      "name": "Comment fonctionne ce test de mémoire visuelle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sur une grille 4x4, 5 cases s’allument en violet pendant 1,5 seconde. Ensuite, tu cliques sur toutes les cases qui étaient allumées. Chaque motif complet rapporte 150 points et ajoute une case. Après 7 cases en 4x4, la grille passe en 5x5 (de 5 à 12 cases au maximum). Le chrono de 60 secondes ne tourne que pendant la reproduction. Le format rappelle le Visual Patterns Test (Della Sala et al., 1997), mais ce n’est pas ce test et il n’en reprend ni la procédure ni les normes."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la difference entre la memoire visuelle et la memoire spatiale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans le modele neurocognitif de Logie (1995), la memoire visuelle repose sur le cache visuel (stockant les formes, couleurs et arrangements statiques), tandis que la memoire spatiale fait intervenir le scribe interne (gerant les trajectoires de mouvement et les sequences motrices)."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de cases peut-on retenir d’un coup ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon Luck & Vogel (1997) et Cowan (2001), la mémoire de travail visuelle retient environ 3 à 4 objets à la fois. Regrouper les cases en formes permet d’en retenir davantage. Dans cet exercice, chaque motif réussi vaut 150 points ; le rang affiché en fin de partie est un repère d’entraînement SkillDrills (1 150 points en haut de l’échelle), pas une moyenne ni une norme."
      }
    },
    {
      "@type": "Question",
      "name": "Qu est-ce que le chunking visuo-spatial et comment l utiliser ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le chunking visuo-spatial consiste a regrouper des cases eclairees individuelles en motifs perceptifs significatifs (lignes, triangles, carres ou lettres). Cette compression reduit la charge cognitive dans le calepin visuo-spatial et permet de mémoriser davantage de cases sans depasser la limite de 4 chunks."
      }
    },
    {
      "@type": "Question",
      "name": "En quoi ce test differe-t-il du test des blocs de Corsi ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le test des blocs de Corsi mesure la memoire de travail spatio-temporelle sequentielle (l ordre d apparition des cibles). A l inverse, la grille matricielle affiche toutes les cibles simultanement, mesurant la retention de configuration spatiale statique pure."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si je clique sur une mauvaise case ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La manche s’arrête, sans perte de points ni de temps. Un nouveau motif apparaît au même niveau : la difficulté ne baisse jamais après une erreur."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le role du cache visuel passif selon le modele de Logie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le cache visuel agit comme un registre temporaire receptif qui maintient passivement l arrangement spatial et l apparence des motifs. Il retient l image retinienne traitee pendant quelques secondes avant que la trace mnesique ne s estompe ou ne soit remplacee par de nouvelles entrees."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi le motif ne s’affiche-t-il que 1,5 seconde ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’affichage est fixé à 1,5 seconde dans cet exercice. C’est court pour nommer chaque case ou compter les colonnes, ce qui pousse à retenir la forme d’ensemble du motif plutôt qu’une liste de coordonnées."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce utile pour les jeux vidéo ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’exercice ressemble à des situations où l’on voit une disposition brièvement et doit la retenir, comme la mini-carte ou un échiquier. Aucun transfert vers d’autres activités n’est garanti."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test en ligne de memoire visuelle est-il gratuit et sans inscription ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, le test de memoire visuelle SkillDrills est 100% gratuit, fonctionne entierement cote client dans votre navigateur web sans telechargement ni compte utilisateur, et affiche ton score, ta précision et ton meilleur niveau à la fin de chaque partie."
      }
    }
  ]
};

const gridGuide = {
  heading: "Guide Scientifique de la Mémoire Visuelle & Matrice de Grille",
  intro: [
    "Ce test de mémoire visuelle en ligne affiche pendant 1,5 seconde des cases allumées dans une grille, puis tu reproduis le motif de mémoire. Tu commences avec 5 cases sur une grille 4x4 ; chaque motif réussi ajoute une case, et la grille 5x5 monte jusqu'à 12 cases. Ce sont des motifs à mémoriser par leur forme, sans les décrire avec des mots.",
    "L'étude clinique de l'empan visuo-spatial a été inaugurée par Pietro Corsi (1972) à travers le test des blocs de Corsi, démontrant que la mémoire visuo-spatiale constitue un système mnésique indépendant de l'empan verbal de chiffres (Milner, 1971). En 1997, Sergio Della Sala, Robert H. Logie et leurs collègues ont publié le Visual Patterns Test (VPT) afin d'isoler la rétention de motifs matriciels statiques des processus de mouvement séquentiel. Cet exercice utilise un format proche, mais ce n'est pas le VPT.",
    "Dans les neurosciences cognitives modernes, Robert H. Logie (1995) et Alan Baddeley (2000) ont subdivisé le calepin visuo-spatial en deux registres : le « cache visuel » (espace passif dédié aux représentations statiques de forme, de couleur et d'agencement) et le « scribe interne » (mécanisme actif de planification motrice et de répétition spatiale). Les recherches pionnières de Steven J. Luck & Edward K. Vogel (1997) et de Nelson Cowan (2001) confirment que la mémoire de travail visuelle brute est strictement plafonnée à 3 ou 4 unités indépendantes : repousser cette limite impose un regroupement spatial en formes gestaltistes (chunking).",
    "Déroulement : chaque motif s'affiche 1,5 seconde. Le chrono de 60 secondes ne tourne que pendant la reproduction. Un motif complet rapporte 150 points et ajoute une case ; une case erronée termine la manche sans perte de points ni de temps, et un nouveau motif apparaît au même niveau. Aucun temps de réaction n'est mesuré.",
    "Transparence des données et respect de la vie privée : SkillDrills ne collecte aucune donnée agrégée. Vos scores et préférences demeurent stockés exclusivement dans le localStorage de votre navigateur web, garantissant qu'aucune moyenne globale ni profil d'utilisateur n'est publié.",
    "Cet entraînement est un jeu interactif sur navigateur conçu à des fins d'entraînement personnel et pédagogique. Il ne constitue pas un dispositif médical, un outil d'évaluation clinique, ni un protocole de diagnostic pour le TDAH, les troubles de la mémoire ou les affections neurocognitives. Si vous avez des interrogations sur votre santé cognitive ou vos capacités de mémorisation, consultez un neuropsychologue ou un médecin qualifié."
  ],
  benchmarks: {
    title: "Repères d'entraînement SkillDrills (une partie)",
    headers: ["Palier", "Points", "Motifs réussis", "Difficulté atteinte"],
    rows: [
      ["Palier haut", "1 200 et plus", "8 ou plus", "Grille 5x5, 10 à 12 cases"],
      ["Palier intermédiaire", "600 – 1 050", "4 – 7", "Grille 5x5, 6 à 9 cases"],
      ["Palier de départ", "150 – 450", "1 – 3", "4x4 avec 6 à 7 cases, passage en 5x5 après 3 motifs"],
      ["Début", "0", "0", "Grille 4x4, 5 cases"]
    ],
    note: "Points = motifs réussis × 150. Ces paliers sont calculés à partir des règles du jeu : ce sont des repères d'entraînement SkillDrills, pas des statistiques de population ni des normes cliniques."
  },
  techniques: {
    title: "Protocoles Scientifiques pour Développer la Mémoire Matricielle",
    items: [
      {
        name: "Regroupement Spatial et Formes Gestaltistes",
        desc: "Regroupez mentalement les cases allumées adjacentes en formes géométriques familières telles que des triangles, des lignes, des carrés ou des lettres (Wertheimer, 1923 ; Della Sala et al., 1999). Regrouper 7 coordonnées en 2 ou 3 formes réduit le nombre d'unités à retenir.",
        tips: "Recherchez immédiatement les lignes connectées et les blocs d'angles plutôt que de fixer des cases isolées."
      },
      {
        name: "Encodage de l'Espace Négatif et Déduction Complémentaire",
        desc: "Lorsqu'un secteur de la matrice est densément peuplé de cases allumées, mémorisez les cases éteintes (vides). Retenir 2 cases sombres manquantes dans un bloc de 6 est cognitivement bien plus économique que d'encoder les 4 positions illuminées.",
        tips: "Si un quadrant est presque entièrement illuminé, mémorisez les « trous » sombres au lieu des cibles."
      },
      {
        name: "Traçage Kinesthésique du Scribe Interne",
        desc: "Mobilisez le « scribe interne » (Logie, 1995) en traçant mentalement une ligne ou une trajectoire continue reliant les cases illuminées durant les 1,5 seconde d'exposition. La pré-planification motrice renforce les représentations passives du cache visuel.",
        tips: "Adoptez un balayage fluide (par exemple de haut en bas ou de gauche à droite) pour donner une direction au motif."
      },
      {
        name: "Point d'Ancrage Central et Capture Parafovéale",
        desc: "Fixez votre regard rigoureusement au centre de la grille dès le début de la manche. Évitez les saccades oculaires saccadées d'une case à l'autre ; la vision parafovéale enregistre la configuration spatiale globale de manière simultanée.",
        tips: "Relâchez légèrement votre mise au point focale pour absorber le motif comme un instantané photographique global."
      }
    ]
  },
  steps: [
    "Fixez le regard au centre de la grille et attendez l'illumination du motif.",
    "Pendant le flash de 1,5 seconde, regroupez instantanément les cases en 2 ou 3 formes géométriques simples.",
    "Exploitez l'espace négatif (trous sombres) dans les zones denses pour limiter le nombre d'unités mnésiques.",
    "Dès l'extinction de la grille, restituez méthodiquement les blocs géométriques identifiés.",
    "Progressez à travers les grilles de 4x4 à 5x5 pour étendre continuellement votre plafond de mémoire de travail visuelle."
  ],
  audience: "Joueurs de jeux tactiques et FPS (lecture rapide de mini-carte), étudiants en sciences et ingénierie (géométrie spatiale), radiologues, joueurs d'échecs et toute personne souhaitant développer sa mémoire de travail non verbale.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'corsi1972', 'luck1997', 'milner1971'),
  related: [
    { href: "/fr/drills/memory/spatial-memory/path-tracing", label: "Test de Mémorisation de Trajet" },
    { href: "/fr/drills/memory/spatial-memory/object-location", label: "Test de Mémoire de Localisation" },
    { href: "/fr/drills/memory/short-term-memory/digit-span", label: "Test d'Empan Numérique" },
    { href: "/fr/drills/memory/short-term-memory/word-recall", label: "Test de Mémoire Verbale" },
    { href: "/fr/drills/memory/working-memory/n-back", label: "Test de Mémoire de Travail N-Back" }
  ]
};

export default function GridMemorizationFrenchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
      <GridMemorizationClient copy={{
        "h1Keyword": "Test de mémoire visuelle en ligne",
        "h1Suffix": "",
        "subtitle": "Mémorise les cases éclairées d’une grille",
        "caption": "La mémoire de travail visuelle stocke environ quatre objets intégrés simultanément, la limite étant fixée par le nombre d'objets plutôt que par la complexité visuelle (Luck & Vogel, 1997). Les grilles matricielles sollicitent le cache visuel passif pour la forme et l'organisation spatiale (Logie, 1995).",
        "statScore": "Score",
        "statTime": "Temps",
        "statGridSize": "Grille",
        "statBest": "Meilleur",
        "hudScore": "Score",
        "hudTime": "Temps",
        "startTitle": "Test de Mémoire Visuelle Pro",
        "startSubtitle": "Mémoire visuelle • Grille",
        "countdownSubtitle": "PRÉPAREZ-VOUS",
        "newBest": "NOUVEAU RECORD",
        "pointsLabel": "Points",
        "statAccuracy": "Précision",
        "cellsUnit": "cases",
        "statPeakPattern": "Motif max",
        "statPerfects": "Sans faute",
        "btnPlayAgain": "Rejouer",
        "rulesTitle": "Règles de l'Exercice et Système de Points",
        "rulesItems": [
          {
            "num": "1",
            "text": "Rappel de motif",
            "highlight": "+150 PTS",
            "result": "Mémorisez les cases allumées et cliquez dessus"
          },
          {
            "num": "2",
            "text": "Progression de niveau",
            "highlight": "4x4 → 5x5",
            "result": "Une case de plus par motif réussi, jusqu’à 12 cases en 5x5"
          },
          {
            "num": "3",
            "text": "Clic erroné",
            "highlight": "Aucune pénalité",
            "result": "Fin de la manche, sans perte de points ni de temps"
          },
          {
            "num": "4",
            "text": "Niveau maintenu",
            "highlight": "Même palier",
            "result": "Après une erreur, un nouveau motif au même niveau"
          }
        ]
      }} />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
