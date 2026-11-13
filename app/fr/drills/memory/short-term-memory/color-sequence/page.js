import ColorSequenceClient from '@/app/drills/memory/short-term-memory/color-sequence/ColorSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  title: "Jeu de mémoire des couleurs façon Simon | SkillDrills",
  description: "Jeu de mémoire des couleurs façon Simon, gratuit : mémorise la suite qui s'allume, puis reproduis-la sur 6 touches. Dès 3 couleurs, +1 à chaque réussite.",
  keywords: [
    "jeu Simon en ligne",
    "jeu de mémoire de couleurs",
    "suite de couleurs",
    "jeu de séquences",
    "jeu simon en ligne gratuit",
    "jeu de memoire des couleurs",
    "jeu du simon en ligne",
    "test de memoire a court terme",
    "test memoire de travail visuelle",
    "jeu pour travailler la memoire",
    "retenir suite de couleurs jeu",
    "exercice memoire visuelle gratuit",
    "test de memoire sequentielle",
    "technique de chunking memoire",
    "capacite empan mnemonique test",
    "entrainement cognitif memoire"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/color-sequence'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Jeu de mémoire des couleurs façon Simon | SkillDrills",
    description: "Jeu de mémoire des couleurs façon Simon, gratuit : mémorise la suite qui s'allume, puis reproduis-la sur 6 touches. Dès 3 couleurs, +1 à chaque réussite.",
    url: "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Jeu de mémoire des couleurs façon Simon | SkillDrills",
    description: "Jeu de mémoire des couleurs façon Simon, gratuit : mémorise la suite qui s'allume, puis reproduis-la sur 6 touches. Dès 3 couleurs, +1 à chaque réussite.",
  },
};

export default function FrenchColorSequencePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînements de mémoire", "item": "https://skilldrills.online/fr/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Mémoire à court terme", "item": "https://skilldrills.online/fr/drills/memory" },
      { "@type": "ListItem", "position": 4, "name": "Jeu de couleurs façon Simon", "item": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Jeu de mémoire des couleurs façon Simon",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Jeu gratuit dans le navigateur : retenez et reproduisez des suites de couleurs de plus en plus longues pour exercer la mémoire de travail visuelle.",
    "genre": "Entraînement cognitif / mémoire visuelle de travail",
    "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Jeu de mémoire des couleurs façon Simon",
    "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence",
    "description": "Jeu de mémoire façon Simon, gratuit dans le navigateur : 6 touches colorées, 3 couleurs au niveau 1, une couleur de plus à chaque suite réussie.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Suite de couleurs façon Simon",
    "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence",
    "description": "Jeu de suites de couleurs inspiré du Simon électronique, jouable dans le navigateur.",
    "genre": ["Jeu de mémoire", "Entraînement cognitif", "Puzzle"],
    "gamePlatform": ["Navigateur web", "Mobile", "Tablette", "Bureau"],
    "applicationCategory": "Game",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment fonctionne ce jeu de mémoire façon Simon ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C’est un jeu de mémoire façon Simon (pas le jouet Hasbro). Les couleurs s’allument une à une dans le cercle central, puis vous les reproduisez dans le même ordre sur les 6 touches colorées. Le niveau 1 compte 3 couleurs (longueur = niveau + 2) ; une suite réussie fait monter d’un niveau, une erreur fait descendre d’un niveau. Chaque manche est une nouvelle suite aléatoire et la séance dure 45 secondes."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles fonctions cognitives ce jeu sollicite-t-il ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il sollicite surtout la mémoire de travail visuelle, que le modèle de Baddeley et Hitch (1974) rattache au calepin visuo-spatial, ainsi que l’attention soutenue et l’encodage en série."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la limite d’empan selon Luck et Vogel (1997) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Luck et Vogel (1997) ont montré que la mémoire de travail visuelle retient environ 3 à 4 éléments en même temps. Leur étude portait sur des objets montrés simultanément, pas sur des suites, mais elle explique pourquoi regrouper les couleurs en blocs aide sur les suites longues."
        }
      },
      {
        "@type": "Question",
        "name": "Qu’est-ce que le chunking et comment l’appliquer ici ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le chunking (Miller, 1956) consiste à regrouper des éléments en blocs porteurs de sens. Retenir deux groupes de trois couleurs plutôt que six couleurs isolées réduit le nombre d’éléments à garder en tête."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi six couleurs au lieu des quatre du jeu électronique classique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le violet et l’orange portent le clavier à six touches. Plus de choix possibles à chaque étape rendent la suite plus difficile à deviner et à mémoriser."
        }
      },
      {
        "@type": "Question",
        "name": "Y a-t-il une pénalité en cas d’erreur ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aucun temps n’est retiré du chronomètre et les points déjà gagnés sont conservés. Une mauvaise couleur, ou 8 secondes sans appuyer, fait reculer d’un niveau (minimum niveau 1) et une nouvelle suite aléatoire commence."
        }
      },
      {
        "@type": "Question",
        "name": "Quel niveau correspond à une bonne performance ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il n’existe pas de norme officielle. Les paliers du tableau sont des repères propres à ce jeu : au niveau L, la suite compte L + 2 couleurs et une suite réussie rapporte 100 × (1 + 0,1 × L) points. Dès le niveau 8 (10 couleurs), il faut regrouper activement. Ce ne sont pas des statistiques de population."
        }
      },
      {
        "@type": "Question",
        "name": "Ce jeu améliore-t-il la mémoire dans la vie courante ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rien ne prouve un effet sur la mémoire du quotidien. Le jeu entraîne la reproduction de suites, une tâche précise : voyez-le comme un exercice, pas comme un traitement."
        }
      },
      {
        "@type": "Question",
        "name": "Le jeu fonctionne-t-il sur écran tactile ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Les touches répondent au toucher sur smartphone et tablette ainsi qu’au clic de souris sur ordinateur."
        }
      },
      {
        "@type": "Question",
        "name": "Ce jeu façon Simon est-il gratuit et sans inscription ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Il est gratuit, sans compte ni installation, et vos records restent stockés dans le navigateur de votre appareil."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment jouer au jeu de couleurs façon Simon",
    "description": "Quatre étapes pour retenir et reproduire de longues suites de couleurs.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence#step-1",
        "name": "Suivez l’allumage des touches",
        "text": "Gardez le regard sur le cercle central où les couleurs s’allument une à une."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence#step-2",
        "name": "Regroupez les couleurs en blocs",
        "text": "Regroupez les signaux par deux ou trois pour dépasser la limite d’environ quatre éléments."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence#step-3",
        "name": "Reproduisez la suite sans hésiter",
        "text": "Dès que la main passe à vous, cliquez sur les touches dans l’ordre exact, à un rythme régulier."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence#step-4",
        "name": "Montez de niveau",
        "text": "À chaque réussite, le niveau monte : la nouvelle suite aléatoire compte une couleur de plus et rapporte davantage de points."
      }
    ]
  };

  const frCopy = {
    title: 'Jeu de mémoire des couleurs façon Simon',
    subtitle: 'Mémorise les couleurs et reproduis la suite exacte',
    caption: 'Les couleurs s’allument une à une dans le cercle central : reproduisez la suite dans le même ordre. Chaque réussite rallonge la suite suivante d’une couleur.',
    statScore: 'Score',
    statTime: 'Temps',
    statLevel: 'Niveau',
    statBestScore: 'Record',
    rulesTitle: 'Règles du jeu et attribution des points',
    rule1Text: 'Reproduction de la suite',
    rule1Highlight: '+100 PTS',
    rule1Result: 'Reproduisez les touches éclairées dans l’ordre exact',
    rule2Text: 'Bonus de niveau',
    rule2Highlight: '+10% PTS / Niveau',
    rule2Result: 'Les suites plus longues rapportent plus de points',
    rule3Text: 'Erreur ou délai dépassé',
    rule3Highlight: '-1 Niveau',
    rule3Result: 'Mauvaise couleur ou 8 s sans appui : aucun point ni temps perdu, nouvelle suite',
    rule4Text: 'Difficulté adaptative',
    rule4Highlight: 'Dynamique',
    rule4Result: 'Niveau L = L + 2 couleurs ; l’affichage accélère à chaque niveau',
    aboutTitle: 'À propos du jeu de suite de couleurs façon Simon',
    overviewTitle: 'Que travaille le jeu de mémoire des couleurs ?',
    overviewLead: 'La mémoire de travail visuelle ne retient qu’environ 4 éléments simples à la fois (Luck & Vogel, 1997 ; Cowan, 2001). Une suite de couleurs qui s’allonge permet de s’exercer près de cette limite.',
    aboutIntro: [
      'Ce jeu entraîne l’encodage, le maintien et la reproduction de suites de stimuli dans un ordre précis.',
      'À force de reproduire des suites de couleurs, vous vous exercez au regroupement en blocs (chunking) et au calme face au chronomètre.',
    ],
    aboutCards: [
      { title: 'À qui s’adresse ce jeu ?', text: 'Étudiants, seniors, joueurs et toute personne qui veut s’exercer à retenir des suites.' },
      { title: 'Capacités sollicitées', text: 'Empan visuel, encodage en série dans le calepin visuo-spatial (Baddeley & Hitch, 1974) et rapidité d’exécution.' },
      { title: 'Stratégie de chunking', text: 'Assemblez les couleurs en blocs rythmés ou en trajets visuels pour dépasser le seuil de 4 éléments (Miller, 1956).' },
    ],
  };

  const frColorSequenceGuide = {
    heading: 'Guide du jeu de couleurs façon Simon et de la mémoire visuelle de travail',
    intro: [
      'Ce jeu de mémoire façon Simon vous montre une suite de couleurs, une couleur à la fois ; vous la reproduisez dans le bon ordre, et chaque réussite rallonge la suite suivante d’une couleur. Il travaille la mémoire de travail visuelle, dont la capacité tourne autour de 4 éléments (Cowan, 2001). C’est un exercice gratuit dans le navigateur, pas un test médical.',
      'Le principe a été popularisé par un jeu électronique de Ralph Baer et Howard Morrison (1978). Cette version façon Simon passe à six touches avec une difficulté adaptative : vous encodez des stimuli colorés, les organisez en blocs mentaux, puis les restituez dans l’ordre.',
      'Alors que George A. Miller (1956) évoquait 7 ± 2 éléments, les travaux de Nelson Cowan (2001) et de Luck et Vogel (1997) situent la capacité de la mémoire de travail visuelle autour de 4 unités indépendantes. Sans stratégie de regroupement, la rétention chute vite au-delà de quatre éléments consécutifs.',
      'Dans le modèle de Baddeley et Hitch (1974), les suites visuelles passent par le calepin visuo-spatial. Nommer chaque couleur intérieurement ajoute un encodage verbal (boucle phonologique ; Baddeley, 2000) qui peut aider à retenir plus longtemps.',
      'Ce qui est mesuré : en 45 secondes, le jeu enregistre le score, le niveau maximal atteint (longueur de la suite) et la précision (part de manches réussies). Le temps de réaction par appui n’est pas mesuré. Au niveau L, la suite compte L + 2 couleurs parmi 6 ; chaque couleur reste affichée moins longtemps à mesure que le niveau monte (d’environ 0,7 s à 0,25 s minimum), puis vous avez 8 secondes pour chaque appui.',
      'Confidentialité : vos scores et vos records restent dans le stockage local (localStorage) de votre navigateur. SkillDrills ne collecte pas de statistiques d’utilisateurs : cette page ne donne ni moyennes, ni percentiles.',
      'Avertissement : ce jeu d’entraînement n’est ni un dispositif médical ni un outil de diagnostic. En cas d’inquiétude sur votre mémoire, consultez un médecin ou un neuropsychologue.'
    ],
    benchmarks: {
      title: 'Paliers de performance au jeu façon Simon (séance de 45 secondes)',
      headers: ['Palier', 'Niveau atteint', 'Score sans erreur', 'Stratégie de mémorisation'],
      rows: [
        ['Palier 1', 'Niveau 11+ (13+ couleurs)', 'env. 1 550+ PTS', 'Nommer les couleurs et les regrouper en blocs'],
        ['Palier 2', 'Niveau 8 – 10 (10–12 couleurs)', 'env. 980 – 1 549 PTS', 'Regroupement stable par deux ou trois'],
        ['Palier 3', 'Niveau 5 – 7 (7–9 couleurs)', 'env. 500 – 979 PTS', 'Les couleurs du milieu se perdent quand l’affichage accélère'],
        ['Palier 4', 'Niveau 3 – 4 (5–6 couleurs)', 'env. 230 – 499 PTS', 'Couleurs retenues une à une, sans regroupement'],
        ['Palier 5', 'Niveau 1 – 2 (3–4 couleurs)', 'moins de 230 PTS', 'Découverte des règles et du rythme']
      ],
      note: 'Paliers d’entraînement SkillDrills, ni normes cliniques ni classement de population. Le score indiqué correspond à un parcours sans erreur jusqu’à ce niveau (points par suite = 100 × (1 + 0,1 × niveau)) ; une erreur fait baisser le niveau, donc les scores réels varient.'
    },
    techniques: {
      title: '4 méthodes pour mémoriser des suites de couleurs plus longues',
      items: [
        {
          name: 'Regroupement rythmique (chunking)',
          desc: 'N’enregistrez pas les couleurs une à une. Répétez mentalement les initiales sur un rythme (par exemple « Rouge-Bleu … Vert-Jaune »).',
          tips: 'Scindez la suite en paires dès qu’elle dépasse 4 éléments.'
        },
        {
          name: 'Visualiser un trajet sur les touches',
          desc: 'Les couleurs s’allument dans le cercle central, mais les 6 touches de réponse (grille 3 × 2) ont une place fixe. À chaque couleur, imaginez la touche correspondante et retenez le trajet de votre doigt (Logie, 1995).',
          tips: 'Repérez la disposition des touches avant de commencer.'
        },
        {
          name: 'Nommer les couleurs à voix intérieure',
          desc: 'Dites mentalement le nom de chaque couleur qui s’allume (« rouge, bleu, vert ») pour ajouter un encodage verbal à l’image (Baddeley, 2000).',
          tips: 'Récitez par paires, sur un rythme régulier.'
        },
        {
          name: 'Protéger le milieu de la suite',
          desc: 'Chaque manche est une suite aléatoire entièrement nouvelle : la précédente ne sert à rien. Le début et la fin se retiennent mieux, le milieu se perd le plus facilement (effet de position sérielle). Regroupez donc le milieu en priorité.',
          tips: 'Récitez le début tout de suite en bloc et laissez la fin à l’image encore fraîche.'
        }
      ]
    },
    steps: [
      'Lancez la séance de 45 secondes et fixez le cercle central.',
      'Observez les couleurs qui s’allument une à une.',
      'Regroupez mentalement la suite en blocs de deux ou trois couleurs.',
      'Dès que la main passe à vous, appuyez sur les touches dans l’ordre.',
      'Franchissez les niveaux pour augmenter votre score et votre record.'
    ],
    audience: 'Étudiants, candidats à des concours, seniors et joueurs qui veulent s’exercer au regroupement et à la mémorisation de suites.',
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995', 'luck1997'),
    related: [
      { href: "/fr/drills/memory/short-term-memory/digit-span", label: "Test d’empan de chiffres" },
      { href: "/fr/drills/memory/short-term-memory/word-recall", label: "Test de mémoire verbale" },
      { href: "/fr/drills/memory/spatial-memory/grid-memorization", label: "Mémoire spatiale sur grille" },
      { href: "/fr/drills/cognitive/focus/concentration-grid", label: "Table de Schulte en ligne" },
      { href: "/fr/drills/cognitive/focus/distraction-fighter", label: "Test de Stroop en ligne" }
    ]
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ColorSequenceClient copy={frCopy} />
      <DrillGuide guide={frColorSequenceGuide} />
      <RelatedDrills />
    </>
  );
}
