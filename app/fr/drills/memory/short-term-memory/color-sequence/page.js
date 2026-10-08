import ColorSequenceClient from '@/app/drills/memory/short-term-memory/color-sequence/ColorSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  title: "Jeu Simon en ligne | Mémoire des couleurs | SkillDrills",
  description: "Joue à Simon gratuitement : mémorise une suite de couleurs et de sons qui s'allonge, puis reproduis-la dans le bon ordre.",
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
    title: "Jeu Simon en ligne | Mémoire des couleurs | SkillDrills",
    description: "Joue à Simon gratuitement : mémorise une suite de couleurs et de sons qui s'allonge, puis reproduis-la dans le bon ordre.",
    url: "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Jeu Simon en ligne | Mémoire des couleurs | SkillDrills",
    description: "Joue à Simon gratuitement : mémorise une suite de couleurs et de sons qui s'allonge, puis reproduis-la dans le bon ordre.",
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
      { "@type": "ListItem", "position": 4, "name": "Jeu Simon des couleurs", "item": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Jeu Simon en ligne",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-09-16",
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
    "name": "Jeu Simon en ligne",
    "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence",
    "description": "Jeu de mémoire Simon gratuit dans le navigateur, avec 6 touches colorées et une difficulté adaptative.",
    "dateModified": "2026-09-16",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "sameAs": ["https://fr.wikipedia.org/wiki/Simon_%28jeu%29"]
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Jeu Simon : suite de couleurs",
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
        "name": "Qu’est-ce que le jeu Simon et comment fonctionne-t-il ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le jeu Simon est un défi de mémorisation séquentielle. Une suite de signaux lumineux et sonores s’allonge à chaque manche, et vous devez la reproduire dans le même ordre en cliquant sur les touches colorées."
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
          "text": "Luck et Vogel (1997) ont montré que la mémoire de travail visuelle retient environ 3 à 4 éléments en même temps. Au-delà, regrouper les éléments en blocs devient nécessaire."
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
        "name": "Pourquoi six couleurs au lieu des quatre du Simon classique ?",
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
          "text": "Aucun temps n’est retiré du chronomètre et les points déjà gagnés sont conservés. Après une erreur ou un délai dépassé, la suite recule d’un niveau pour que la séance continue."
        }
      },
      {
        "@type": "Question",
        "name": "Quel niveau correspond à une bonne performance ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les paliers du tableau sont des repères propres à ce jeu : à partir du niveau 8, vous retenez des suites de plus de quatre couleurs, ce qui suppose un regroupement actif. Ce ne sont pas des statistiques de population."
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
        "name": "Ce jeu Simon est-il gratuit et sans inscription ?",
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
    "name": "Comment jouer au jeu Simon des couleurs",
    "description": "Quatre étapes pour retenir et reproduire de longues suites de couleurs.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/color-sequence#step-1",
        "name": "Suivez l’allumage des touches",
        "text": "Gardez le regard au centre des six boutons pour capter la succession de lumières et de sons sans vous précipiter."
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
        "text": "À chaque réussite, la suite s’allonge d’une couleur et le bonus de niveau augmente vos points."
      }
    ]
  };

  const frCopy = {
    title: 'Jeu Simon en ligne',
    subtitle: 'Mémorise les couleurs et reproduis la suite exacte',
    caption: 'Suivez la suite lumineuse et reproduisez-la dans l’ordre exact à mesure qu’elle s’allonge.',
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
    rule3Result: 'Aucun point perdu ; la difficulté est réajustée',
    rule4Text: 'Difficulté adaptative',
    rule4Highlight: 'Dynamique',
    rule4Result: 'La longueur de la suite suit votre capacité du moment',
    aboutTitle: 'À propos du jeu Simon de suite de couleurs',
    overviewTitle: 'Que travaille le jeu de mémoire des couleurs ?',
    overviewLead: 'La mémoire de travail visuelle ne retient qu’environ 4 éléments simples à la fois (Luck & Vogel, 1997 ; Cowan, 2001). Une suite de couleurs qui s’allonge pousse directement contre cette limite.',
    aboutIntro: [
      'Ce jeu entraîne l’encodage, le maintien et la reproduction de suites de stimuli dans un ordre précis.',
      'À force de répéter des suites de couleurs, vous affinez le regroupement en blocs (chunking) et votre calme face au chronomètre.',
    ],
    aboutCards: [
      { title: 'À qui s’adresse ce jeu ?', text: 'Étudiants, seniors, joueurs et toute personne qui veut s’exercer à retenir des suites.' },
      { title: 'Capacités sollicitées', text: 'Empan visuel, encodage en série dans le calepin visuo-spatial (Baddeley & Hitch, 1974) et rapidité d’exécution.' },
      { title: 'Stratégie de chunking', text: 'Assemblez les couleurs en blocs rythmés ou en trajets visuels pour dépasser le seuil de 4 éléments (Miller, 1956).' },
    ],
  };

  const frColorSequenceGuide = {
    heading: 'Guide du jeu Simon et de la mémoire visuelle de travail',
    intro: [
      'Le jeu Simon en ligne vous montre une suite de couleurs et de sons qui s’allonge à chaque manche ; vous la reproduisez dans le bon ordre. Il travaille la mémoire de travail visuelle, dont la capacité tourne autour de 4 éléments (Cowan, 2001). C’est un exercice gratuit dans le navigateur, pas un test médical.',
      'Le jeu électronique Simon a été popularisé par Ralph Baer et Howard Morrison (1978). Cette version l’étend à six touches avec une difficulté adaptative : vous encodez des stimuli colorés, les organisez en blocs mentaux, puis les restituez dans l’ordre.',
      'Alors que George A. Miller (1956) évoquait 7 ± 2 éléments, les travaux de Nelson Cowan (2001) et de Luck et Vogel (1997) situent la capacité de la mémoire de travail visuelle autour de 4 unités indépendantes. Sans stratégie de regroupement, la rétention chute vite au-delà de quatre éléments consécutifs.',
      'Dans le modèle de Baddeley et Hitch (1974), les suites visuelles passent par le calepin visuo-spatial. Associer les couleurs à de petits sons ou à un mot intérieur donne un double encodage qui peut aider à retenir plus longtemps.',
      'Mesure et matériel : chaque appui est horodaté localement avec l’horloge performance.now() du navigateur, dont la résolution est volontairement limitée. Votre écran affiche une image toutes les 16,7 ms à 60 Hz et toutes les 6,9 ms à 144 Hz (Woods et al., 2015) : comparez vos séances sur le même matériel.',
      'Confidentialité : vos scores et vos records restent dans le stockage local (localStorage) de votre navigateur.',
      'Avertissement : ce jeu d’entraînement n’est ni un dispositif médical ni un outil de diagnostic. En cas d’inquiétude sur votre mémoire, consultez un médecin ou un neuropsychologue.'
    ],
    benchmarks: {
      title: 'Paliers de performance au jeu Simon (séance de 45 secondes)',
      headers: ['Palier', 'Niveau atteint', 'Score (45 s)', 'Stratégie de mémorisation'],
      rows: [
        ['Palier 1 (très avancé)', 'Niveau 11+', 'Plus de 1 500 PTS', 'Regroupement en blocs maîtrisé ; encodage visuel et sonore'],
        ['Palier 2 (avancé)', 'Niveau 8 – 10', '1 100 – 1 499 PTS', 'Suites de plus de 4 couleurs retenues grâce au regroupement binaire'],
        ['Palier 3 (solide)', 'Niveau 5 – 7', '700 – 1 099 PTS', 'Capacité classique de mémoire à court terme ; hésitation aux cadences rapides'],
        ['Palier 4 (en progression)', 'Niveau 3 – 4', '350 – 699 PTS', 'Mémoire de travail à sa limite ; regroupement encore peu structuré'],
        ['Palier 5 (débutant)', 'Sous le niveau 3', 'Moins de 350 PTS', 'Difficulté dès le 3e signal ; commencez par les niveaux lents']
      ],
      note: 'Repères éditoriaux propres à ce jeu (suites à 6 teintes, séance de 45 secondes). Ce ne sont ni des normes cliniques ni un classement de population.'
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
          name: 'Visualiser un trajet',
          desc: 'Reliez les touches éclairées par un fil imaginaire (triangle, diagonale, arc) au lieu de manipuler des noms de couleurs.',
          tips: 'Retenir une figure géométrique est souvent plus simple que retenir une liste.'
        },
        {
          name: 'S’appuyer sur les sons',
          desc: 'Chaque couleur a sa tonalité. Retenez la petite mélodie obtenue pour doubler l’encodage visuel par un encodage auditif.',
          tips: 'Gardez le son activé pour profiter du double codage.'
        },
        {
          name: 'Concentrer l’attention sur la dernière touche',
          desc: 'Le début de la suite reste identique d’un tour à l’autre : consacrez l’essentiel de votre attention à l’élément qui vient de s’ajouter.',
          tips: 'Révisez le début en tâche de fond et concentrez-vous sur la fin.'
        }
      ]
    },
    steps: [
      'Lancez la séance de 45 secondes et fixez le centre des touches.',
      'Observez la suite de lumières et de sons.',
      'Regroupez mentalement la suite en blocs de deux ou trois couleurs.',
      'Dès que la main passe à vous, appuyez sur les touches dans l’ordre.',
      'Franchissez les niveaux pour augmenter votre score et votre record.'
    ],
    audience: 'Étudiants, candidats à des concours, seniors et joueurs qui veulent s’exercer au regroupement et à la mémorisation de suites.',
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'luck1997', 'woods2015'),
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
