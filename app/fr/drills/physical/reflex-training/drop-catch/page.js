import DropCatchClient from '@/app/drills/physical/reflex-training/drop-catch/DropCatchClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — France & Francophonie (FR / FR-FR)
// Primary Intent: test de la règle, temps de réaction, test de réflexes en ligne
// French Athletic/Academic Context: Test de la règle de Nelson transposé au numérique avec paradigme Go/No-Go et cibles en chute libre
// High-Demand, Low-Competition Target Keywords:
//   - "test de la règle temps de réaction" (Core academic/athletic ruler drop query)
//   - "test de réflexe règle" (Ruler reflex measurement query)
//   - "mesurer son temps de réaction en ligne" (Online chronometry utility query)
//   - "test de temps de réaction visuel" (Visual reaction time test query)
//   - "test go no go en ligne" (Inhibitory control & stop-signal query)
//   - "temps de réaction de choix" (Donders Type C choice reaction query)
//   - "test de réflexes et contrôle inhibiteur" (Impulse control reflex query)
//   - "améliorer son temps de réaction fps" (FPS motor agility query)
//   - "test de réflexe visuo-moteur" (Visuomotor assessment query)
//   - "exercices de réflexes et discrimination" (Discriminative conditioning query)
// ============================================================

export const metadata = {
  title: "Test de réflexe en ligne : cibles qui tombent | SkillDrills",
  description: "Test de réflexe gratuit dans le navigateur : cliquez les cibles vertes qui tombent et laissez passer les leurres rouges. Inspiré du test de la règle.",
  keywords: [
    "test de la règle",
    "test de réaction avec une règle",
    "mesurer son temps de réaction en ligne",
    "test de temps de réaction visuel",
    "test de réflexes en ligne",
    "temps de réaction avec une règle",
    "réaction visuo-motrice",
    "mesurer son temps de réaction",
    "chute de règle"
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch',
    languages: getAlternateLanguages('/drills/physical/reflex-training/drop-catch'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de réflexe en ligne : cibles qui tombent | SkillDrills",
    description: "Attrapez les cibles vertes et évitez les leurres rouges dans un test de la règle gratuit pour exercer vos réflexes visuels.",
    url: 'https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de réflexe en ligne : cibles qui tombent | SkillDrills",
    description: "Attrapez les cibles vertes et évitez les leurres rouges dans un test de la règle gratuit pour exercer vos réflexes visuels.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil SkillDrills",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Centre d'Entraînement Physique",
      "item": "https://skilldrills.online/fr/drills/physical"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Entraînement des Réflexes",
      "item": "https://skilldrills.online/fr/drills/physical/reflex-training"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Test de réflexe : cibles qui tombent",
      "item": "https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de réflexe en ligne : cibles qui tombent",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu de réflexes gratuit dans le navigateur : cliquez les cibles vertes qui tombent et laissez passer les leurres rouges.",
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de réflexe : cibles qui tombent",
  "description": "Test de réflexe numérique inspiré du test de la règle, avec cibles vertes à attraper et leurres rouges à ignorer.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne avec JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Drop Catch : test de réflexe et de retenue",
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch",
  "description": "Attrapez les cibles vertes qui tombent et ignorez les leurres rouges dans un jeu de réaction visuelle.",
  "genre": [
    "Action",
    "Reflex Game"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20",
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
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel rapport avec le test de la règle qui tombe ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le test classique mesure le temps de réaction en regardant de quelle hauteur on rattrape une règle lâchée. Ici, des cibles tombent à l’écran (de 400 à 1250 px/s) et vous ne devez cliquer que sur les vertes : c’est une version numérique qui ajoute le choix."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce que la tâche de type C de Donders (1868) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Donders a distingué plusieurs types de temps de réaction. Dans le type C, plusieurs stimuli apparaissent et un seul demande une réponse. Devoir identifier la bonne cible allonge le temps de réponse par rapport à un réflexe simple."
      }
    },
    {
      "@type": "Question",
      "name": "Que dit la théorie du tau optique de Lee (1976) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lee (1976) propose que le cerveau estime le temps avant contact à partir de la vitesse d’agrandissement de l’image de l’objet. Pour cette raison, viser le couloir de chute à l’avance aide plus que calculer la distance."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi les leurres rouges sont-ils difficiles à ignorer ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon le modèle de course de Logan et Cowan (1984), l’impulsion « go » et le signal « stop » se disputent la réponse. Si le rouge est identifié à temps, le clic est retenu."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si je clique sur un leurre rouge ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le multiplicateur de série revient à 1.0x et une alerte visuelle s’affiche. Les cibles vertes restent la seule source de points."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne le bonus de temps de +0,6 s ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque cible verte attrapée ajoute 0,6 seconde au chronomètre. Une série régulière peut donc prolonger la manche au-delà des 45 secondes de départ."
      }
    },
    {
      "@type": "Question",
      "name": "Où regarder pour anticiper la chute ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beaucoup de joueurs gardent le regard dans la partie haute de la zone, où les cibles apparaissent, pour repérer la couleur avant que la cible n’accélère. Testez et gardez ce qui vous convient."
      }
    },
    {
      "@type": "Question",
      "name": "Un écran à 144 Hz ou 240 Hz change-t-il la mesure ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, l’affichage compte : l’intervalle entre deux images est de 16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz (Woods et al., 2015). Comparez vos séances sur le même écran."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle prise de souris est conseillée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucune prise n’est démontrée comme la meilleure. La prise du bout des doigts permet des corrections verticales fines, mais gardez celle avec laquelle vous êtes le plus régulier."
      }
    },
    {
      "@type": "Question",
      "name": "Mes résultats sont-ils envoyés sur un serveur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Le jeu s’exécute dans votre navigateur et vos records restent dans son LocalStorage."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment jouer au test de réflexe Drop Catch",
  "description": "Quatre étapes pour attraper les cibles vertes et ignorer les leurres rouges.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Regardez la partie haute",
      "text": "Gardez le regard sur la partie haute de la zone pour identifier la couleur de la cible dès son apparition.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Placez le curseur sur l’axe de chute",
      "text": "Déplacez le pointeur sur la verticale de la cible avant qu’elle n’accélère.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Ignorez les leurres rouges",
      "text": "Dès qu’un cercle rouge est identifié, ne cliquez pas et laissez-le tomber pour garder votre série.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Cliquez les cibles vertes",
      "text": "Cliquez les cibles vertes avant le bas de l’écran pour gagner 0,6 s et monter le multiplicateur jusqu’à 3.0x.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch#step-4"
    }
  ]
};

const dropGuide = {
  "heading": "Test de réflexe en ligne : comment fonctionne Drop Catch",
  "intro": {
    "title": "Test de réflexe et retenue : bases du jeu",
    "paragraphs": [
      "Drop Catch est un test de réflexe en ligne : des cercles tombent de plus en plus vite et vous ne cliquez que sur les verts, en laissant passer les rouges. Il s’inspire du test de la règle qui tombe, avec un choix en plus. Ce n’est ni un test médical ni un test étalonné.",
      "Dans le test de la règle, on rattrape un objet lâché ; ici, la vitesse de chute passe de 400 à 1250 px/s. Lee (1976) propose que l’on estime le temps avant contact à partir de l’agrandissement de l’image de l’objet, ce qui explique l’intérêt de placer le curseur sur l’axe de chute à l’avance.",
      "Les leurres rouges ajoutent un choix : selon Donders (1868), reconnaître la bonne cible allonge le temps de réponse, et selon le modèle de Logan et Cowan (1984), l’impulsion de cliquer et le signal d’arrêt se disputent la réponse.",
      "Mesure et matériel : le jeu s’exécute dans votre navigateur avec l’horloge performance.now(), dont la résolution est limitée. L’affichage ajoute un délai (16,7 ms à 60 Hz, 6,9 ms à 144 Hz, 4,1 ms à 240 Hz ; Woods et al., 2015) : comparez vos séances sur le même matériel."
    ]
  },
  "benchmarks": {
    "title": "Paliers du test de réflexe Drop Catch (5 niveaux de repère)",
    "headers": [
      "Palier",
      "Objectif de points",
      "Temps de réaction et précision",
      "Lecture"
    ],
    "rows": [
      [
        "Palier 1",
        "24 000+ points",
        "Moins de 190 ms / plus de 95 %",
        "Interception à 1250 px/s sans clic sur un leurre"
      ],
      [
        "Palier 2",
        "17 000 – 23 999 points",
        "195 – 240 ms / 90 – 94 %",
        "Bonne anticipation, série 3.0x tenue malgré les leurres"
      ],
      [
        "Palier 3",
        "11 000 – 16 999 points",
        "245 – 310 ms / 82 – 89 %",
        "Coordination œil-main efficace, bonus de temps bien utilisé"
      ],
      [
        "Palier 4",
        "6 000 – 10 999 points",
        "311 – 370 ms / 70 – 81 %",
        "Clics impulsifs sur les leurres au-delà de 800 px/s"
      ],
      [
        "Palier 5",
        "Moins de 6 000 points",
        "Plus de 370 ms / moins de 70 %",
        "Point de départ : repérez la couleur avant de cliquer"
      ]
    ],
    "note": "Repères éditoriaux propres à cet exercice, sans lien avec une norme clinique ni un classement de population. Les temps affichés dépendent aussi de votre écran et de votre souris."
  },
  "steps": [
    "Installez-vous confortablement et regardez la partie haute de la zone.",
    "Identifiez la couleur du cercle qui descend.",
    "Cliquez les cibles vertes dans la zone médiane et laissez passer les rouges.",
    "Utilisez le bonus de +0,6 s pour maintenir le multiplicateur 3.0x."
  ],
  "audience": "Élèves, sportifs et joueurs qui veulent une version numérique du test de la règle avec choix et retenue.",
  "protocols": {
    "title": "Quatre techniques pour attraper sans cliquer sur les leurres",
    "description": "Quatre habitudes simples pour attraper les bonnes cibles.",
    "items": [
      {
        "title": "Regarder en haut de la zone",
        "description": "Ne suivez pas la cible du regard jusqu’en bas : gardez la partie haute pour repérer la couleur dès l’apparition et préparer le curseur. Cueillez la cible au point d’interception prévu plutôt que de la poursuivre."
      },
      {
        "title": "Retenir le clic devant le rouge",
        "description": "Dès qu’un cercle rouge est identifié, relâchez la tension du doigt et laissez-le passer. Un clic sur un leurre ramène le multiplicateur à 1.0x : s’abstenir vaut autant que viser juste."
      },
      {
        "title": "Intercepter dans la zone médiane",
        "description": "La vitesse augmente pendant la chute. Cliquez dans la partie centrale, avant que la cible n’atteigne sa vitesse maximale. N’attendez pas le bord inférieur."
      },
      {
        "title": "Corriger avec les doigts",
        "description": "Ajustez la hauteur par de petits mouvements des doigts et gardez l’avant-bras souple. Gardez la prise avec laquelle vous êtes le plus régulier."
      }
    ]
  },
  "faqs": faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('donders1868', 'lee1976', 'logan1984', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function LocalizedDropCatchPageFr() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <DropCatchClient
        copy={{
          title: "Test de réflexe en ligne",
          subtitle: "Attrapez les cibles vertes qui tombent, évitez les leurres",
          description: "Ce test de réflexe en ligne s’inspire du test de la règle qui tombe : vous réagissez à un objet qui chute et vous devez aussi savoir vous retenir quand il ne faut pas cliquer. Le temps avant contact peut être estimé à partir de l’agrandissement de l’image de la cible (Lee, 1976) ; la retenue vient d’une course interne entre l’impulsion de cliquer et le signal d’arrêt (Logan & Cowan, 1984).",
          hudLabels: {
            score: "Score",
            time: "Temps",
            bestScore: "Meilleur Score",
            bestCombo: "Meilleur Combo",
            getReady: "PRÉPAREZ-VOUS"
          },
          resultLabels: {
            accuracy: "Précision",
            catches: "Captures",
            fatalDecoys: "Leurres Fatals",
            peakLevel: "Niveau Max"
          },
          rulesTitle: "Règles du jeu et barème de points",
          rulesItems: [
            { title: "Capture des Cibles Vertes", text: "Cliquez sur les cercles verts avant qu'ils ne touchent le bas. Chaque capture rapporte 100 points de base (pondérés par le niveau et le combo) et crédite +0,6s au temps." },
            { title: "Leurres Piégés (Decoys)", text: "Ne cliquez pas sur les cercles rouges. Laissez-les tomber librement. Frapper un leurre annule l'intégralité du multiplicateur de série et déclenche une alerte visuelle." },
            { title: "Accélération Évolutive", text: "Au fil de votre score, la vitesse de chute grimpe de 400 px/s à 1250 px/s, le diamètre des cibles rétrécit et la part de leurres atteint 45%." },
            { title: "Multiplicateur et Survie", text: "Enchaînez les réceptions impeccables pour maintenir le multiplicateur 3.0x et profitez du gain continu de +0,6s par touche pour prolonger votre manche." }
          ],
          aboutTitle: "À propos du test de réflexe Drop Catch",
          aboutSections: [
            {
              title: "Accélération Gravitationnelle et Tau Optique d'Interception",
              subtitle: "Évaluation du temps de contact sous accélération verticale constante",
              content: "Les objets en chute libre accélèrent continuellement sous la pesanteur. L'œil humain évalue la fenêtre d'impact par le tau optique (τ), le taux relatif inverse de l'expansion rétinienne (Lee, 1976). Cela permet d'anticiper la milliseconde précise de capture."
            },
            {
              title: "Contrôle Inhibiteur et Signaux d'Arrêt de Logan",
              subtitle: "Paradigme de contre-ordre et inhibition motrice préfrontale",
              content: "La vue de leurres rouges enclenche une compétition interne entre l'impulsion motrice réflexe 'Go' et l'inhibition 'Stop' (Logan et al., 1984). Retenir son geste jusqu'à la vérification de la couleur évite le clic sur un leurre."
            },
            {
              title: "Chronométrie de Discrimination de Type C de Donders",
              subtitle: "Latence d'identification du stimulus avant le déclenchement moteur",
              content: "Contrairement aux tests de réflexe simple, Drop Catch reproduit la tâche de type C de Donders (1868) : plusieurs stimuli surgissent mais seuls les cibles vertes doivent être interceptées, ce qui allonge le temps de réponse."
            },
            {
              title: "Flick Balistique et Décélération Finale en Deux Temps",
              subtitle: "Impulsion en boucle ouverte de Woodworth combinée aux ajustements précis",
              content: "L'alignement de la souris obéit au modèle en deux phases de Woodworth (1899) : une impulsion initiale suivie de micro-corrections visuelles finales, dans l'esprit de la loi de Fitts (1954)."
            }
          ]
        }}
      />
      <DrillGuide {...dropGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/drop-catch" />
    </>
  );
}
