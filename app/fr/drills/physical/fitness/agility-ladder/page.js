import MotorSequencingClient from '@/app/drills/physical/fitness/agility-ladder/MotorSequencingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// RECHERCHE DE MOTS-CLÉS NATIFS (SERP FRANCE / FR-FR)
// Clusters natifs à intention sportive; concurrence non mesurée :
// - "échelle d'agilité" (Suggest gl=fr: exercices, decathlon; intent = matériel physique; Bing exact 0)
// - "échelle de rythme exercices" (Cadence neuromusculaire et coordination)
// - "échelle de vélocité entraînement" (Vitesse d'appuis en football et athlétisme)
// - "travail des appuis et vivacité" (Terminologie de préparation physique française)
// - "entraînement agilité et vitesse" (Développement des qualités motrices)
// - "coordination motrice bilatérale souris" (Transposition eSport / bureautique)
// - "rythme counter strafe" (Mécanique de tir et arrêt instantané en FPS)
// - "test de vitesse et vivacité" (Évaluation de réactivité sur navigateur)
// ============================================================

export const metadata = {
  title: "Échelle d’agilité en ligne : jeu de rythme | SkillDrills",
  description: "Échelle d’agilité virtuelle : touchez les échelons qui défilent en alternant gauche et droite à la souris. Un jeu de rythme, pas un exercice physique.",
  keywords: [
    "exercices échelle d'agilité",
    "echelle de rythme exercices",
    "echelle de velocite entrainement",
    "travail des appuis et vivacite",
    "entrainement agilite et vitesse",
    "coordination motrice bilaterale souris",
    "rythme counter strafe",
    "test de vitesse et vivacite",
    "sequencage moteur reflexe",
    "jeu de rythme moteur",
    "vitesse des appuis exercice"
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/physical/fitness/agility-ladder',
    languages: getAlternateLanguages('/drills/physical/fitness/agility-ladder'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Échelle d’agilité en ligne : jeu de rythme | SkillDrills",
    description: "Échelle d’agilité virtuelle : touchez les échelons qui défilent en alternant gauche et droite à la souris. Un jeu de rythme, pas un exercice physique.",
    url: 'https://skilldrills.online/fr/drills/physical/fitness/agility-ladder',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Échelle d’agilité en ligne : jeu de rythme | SkillDrills",
    description: "Échelle d’agilité virtuelle : touchez les échelons qui défilent en alternant gauche et droite à la souris. Un jeu de rythme, pas un exercice physique.",
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
      "name": "SkillDrills Accueil",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Entraînement Physique",
      "item": "https://skilldrills.online/fr/drills/physical"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Condition Physique et Vivacité",
      "item": "https://skilldrills.online/fr/drills/physical/fitness"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Échelle d’agilité en ligne",
      "item": "https://skilldrills.online/fr/drills/physical/fitness/agility-ladder"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Échelle d’agilité en ligne : jeu de rythme",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu de rythme gratuit dans le navigateur : touchez des échelons qui défilent en alternant gauche et droite à la souris. Inspiré de l’échelle d’agilité, sans effort physique.",
  "url": "https://skilldrills.online/fr/drills/physical/fitness/agility-ladder",
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
  "name": "Échelle d’agilité en ligne",
  "description": "Jeu d’échelle d’agilité virtuelle jouable à la souris, avec 15 niveaux de vitesse croissante sur 45 secondes.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne avec JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/physical/fitness/agility-ladder",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Échelle d’agilité virtuelle (Agility Ladder Drill)",
  "url": "https://skilldrills.online/fr/drills/physical/fitness/agility-ladder",
  "description": "Jeu de rythme à la souris : touchez des échelons qui descendent dans l’ordre gauche, droite, gauche, droite.",
  "genre": [
    "Action",
    "Rhythm Game",
    "Motor Sequencing"
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
      "name": "Est-ce un vrai exercice d’échelle d’agilité ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. C’est un jeu de rythme à la souris inspiré de l’échelle d’agilité : des échelons descendent et vous les touchez en alternant gauche et droite. Il ne remplace pas un entraînement physique des appuis."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne la séquence gauche-droite ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque série compte 4 échelons à toucher dans l’ordre : 1 gauche, 2 droite, 3 gauche, 4 droite. Un échelon manqué ou une inversion ramène le multiplicateur à 1.0x."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’apporte le programme moteur généralisé de Schmidt ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schmidt (1975) décrit des gestes dont les proportions de rythme restent stables quand la vitesse change. Ici, la descente accélère de 150 à 750 px/s : l’idée est de garder le même rythme interne à quatre temps."
      }
    },
    {
      "@type": "Question",
      "name": "Que dit Lashley sur l’enchaînement rapide de gestes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lashley (1951) soutient que les séquences rapides ne peuvent pas être guidées pas à pas par les sens. Regrouper les quatre touches en un seul geste est la stratégie qui en découle."
      }
    },
    {
      "@type": "Question",
      "name": "Comment évoluent la vitesse et la taille des échelons ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La difficulté monte tous les 250 points. Le défilement passe de 150 px/s au niveau 1 à 750 px/s aux niveaux 12 à 15, et la zone de contact se réduit de 18 à 10 pixels."
      }
    },
    {
      "@type": "Question",
      "name": "Rater un échelon coûte-t-il des points ou du temps ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Aucun point acquis n’est retiré et la séance reste de 45 secondes. Seul le multiplicateur de série retombe à 1.0x."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi viser un peu sous le centre de l’échelon ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les échelons descendent en continu : le curseur arrive donc sur un échelon déjà plus bas. Viser légèrement en dessous compense ce décalage, selon la logique d’interception de cibles mobiles (Fitts, 1954)."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice aide-t-il à améliorer le counter-strafing ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucune étude ne le démontre. Il travaille l’alternance gauche-droite et le rythme à la souris ; le transfert vers un jeu de tir reste à vérifier dans votre propre jeu."
      }
    },
    {
      "@type": "Question",
      "name": "Où regarder quand la vitesse augmente ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beaucoup de joueurs trouvent plus simple de garder le regard sur l’axe central de l’échelle plutôt que de suivre chaque échelon. Testez les deux et gardez ce qui marche pour vous."
      }
    },
    {
      "@type": "Question",
      "name": "Mes records sont-ils envoyés à un serveur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Vos records sont stockés dans le LocalStorage de votre navigateur et le jeu fonctionne sans compte."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment jouer à l’échelle d’agilité en ligne",
  "description": "Quatre étapes pour toucher les échelons dans l’ordre et garder le rythme.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Centrez le curseur",
      "text": "Placez le curseur sur l’axe central, entre les deux montants de l’échelle qui descend.",
      "url": "https://skilldrills.online/fr/drills/physical/fitness/agility-ladder#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Touchez le premier échelon",
      "text": "Dès que la descente commence, touchez le premier échelon actif, à gauche.",
      "url": "https://skilldrills.online/fr/drills/physical/fitness/agility-ladder#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Enchaînez les quatre échelons",
      "text": "Parcourez 1 gauche, 2 droite, 3 gauche, 4 droite en un geste continu pour valider la série.",
      "url": "https://skilldrills.online/fr/drills/physical/fitness/agility-ladder#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Montez le combo",
      "text": "Gardez le rythme sans omission pour atteindre le multiplicateur 3.0x et supporter la vitesse des derniers niveaux.",
      "url": "https://skilldrills.online/fr/drills/physical/fitness/agility-ladder#step-4"
    }
  ]
};

const ladderGuide = {
  "heading": "Échelle d’agilité en ligne : comment ça marche",
  "subtitle": "Séquençage moteur (Lashley), invariance de rythme (Schmidt) et interception de cibles mobiles (Fitts)",
  "intro": [
    "Cette échelle d’agilité en ligne est un jeu de rythme à la souris : des échelons descendent et vous les touchez en alternant gauche, droite, gauche, droite. Elle s’inspire de l’échelle d’agilité des sportifs mais ne fait pas travailler les jambes ; c’est un exercice de séquençage et de précision manuelle.",
    "Lashley (1951) a posé le problème de l’ordre sériel : les gestes enchaînés trop vite ne peuvent pas être guidés pas à pas par le retour sensoriel. Regrouper les quatre touches en un seul bloc moteur est donc la stratégie naturelle de cet exercice.",
    "Schmidt (1975) décrit le programme moteur généralisé, dont les proportions de rythme restent stables quand la vitesse globale change. La descente accélère de 150 à 750 px/s et les zones de contact passent de 18 à 10 pixels, ce qui rejoint les principes d’interception de Fitts (1954).",
    "Mesure et matériel : le test s’exécute dans votre navigateur avec l’horloge performance.now(), dont la résolution est limitée. Un écran à 60 Hz affiche une image toutes les 16,7 ms et un écran à 144 Hz toutes les 6,9 ms (Woods et al., 2015) : comparez vos séances sur le même matériel."
  ],
  "benchmarks": {
    "title": "Paliers de l’échelle d’agilité en ligne (5 niveaux de repère)",
    "headers": [
      "Palier",
      "Score requis",
      "Niveau atteint",
      "Vitesse de défilement",
      "Lecture"
    ],
    "rows": [
      [
        "Palier 1",
        "17 000+ points",
        "Niveau 12 – 15",
        "600 – 750 px/s",
        "Séries de 4 échelons enchaînées à très haute vitesse"
      ],
      [
        "Palier 2",
        "13 000 – 16 999 pts",
        "Niveau 9 – 11",
        "480 – 599 px/s",
        "Alternance régulière sur des échelons de 10 à 12 px"
      ],
      [
        "Palier 3",
        "9 500 – 12 999 pts",
        "Niveau 6 – 8",
        "350 – 479 px/s",
        "Tempo stable, quelques séries manquées"
      ],
      [
        "Palier 4",
        "6 000 – 9 499 pts",
        "Niveau 3 – 5",
        "230 – 349 px/s",
        "Ruptures de rythme au-delà de 350 px/s"
      ],
      [
        "Palier 5",
        "Moins de 6 000 points",
        "Niveau 1 – 2",
        "Moins de 230 px/s",
        "Point de départ : apprenez l’ordre des quatre échelons"
      ]
    ],
    "note": "Repères éditoriaux propres à cet exercice, établis sur le niveau atteint et la vitesse de défilement. Ce ne sont ni des normes sportives ni un classement de population."
  },
  "techniques": {
    "title": "Quatre techniques pour tenir le rythme sur l’échelle",
    "items": [
      {
        "name": "Regrouper les quatre touches",
        "desc": "Considérez gauche-droite-gauche-droite comme un seul geste fluide, lancé dès le premier contact, plutôt que quatre actions séparées.",
        "tips": "Évitez de vérifier chaque échelon : laissez la main osciller régulièrement."
      },
      {
        "name": "Garder le même tempo",
        "desc": "Quand l’échelle accélère, conservez la même répartition du temps entre les quatre touches et adaptez seulement l’énergie du geste.",
        "tips": "Un décompte mental à quatre temps aide à cadencer."
      },
      {
        "name": "Viser légèrement sous le centre",
        "desc": "Comme l’échelle descend, visez 2 à 3 pixels sous le centre de l’échelon : le mouvement de chute amène la cible sous le réticule.",
        "tips": "Ne visez pas le haut de l’échelon, il risque de passer sous le curseur."
      },
      {
        "name": "Regarder l’axe central",
        "desc": "À haute vitesse, suivre chaque échelon des yeux désoriente. Fixez l’axe central et laissez la périphérie rythmer la main.",
        "tips": "Si cela ne marche pas pour vous, suivez les échelons du regard : testez les deux."
      }
    ]
  },
  "steps": [
    "Alignez le curseur au centre des deux montants.",
    "Dès que la descente commence, touchez le premier échelon à gauche.",
    "Validez les échelons 2, 3 et 4 sans interruption.",
    "Gardez le multiplicateur 3.0x pendant les 45 secondes."
  ],
  "audience": "Joueurs et curieux qui veulent s’exercer à l’alternance rythmée à la souris, ainsi que sportifs qui cherchent un jeu de rythme complémentaire (pas un substitut à l’échelle physique).",
  "faqs": faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('lashley1951', 'schmidt1975', 'fitts1954', 'woodworth1899', 'woods2015')
};

export default function AgilityLadderPageFr() {
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
      <MotorSequencingClient
        copy={{
          title: "Échelle d’agilité en ligne",
          subtitle: "Touchez les échelons en alternant gauche et droite • 15 niveaux",
          hudLabels: {
            score: "Score",
            timeLeft: "Temps Restant",
            bestScore: "Meilleur Score",
            bestCombo: "Meilleur Combo"
          },
          rulesTitle: "Règles du jeu et barème de points",
          rules: [
            { title: "Validation Séquentielle des Échelons", text: "Touchez les échelons dans l'ordre strict de descente (1 Gauche → 2 Droite → 3 Gauche → 4 Droite) pour valider chaque volée." },
            { title: "Multiplicateur de Série", text: "Franchissez les échelles successives sans accroc pour porter le combo jusqu'à 3.0x." },
            { title: "Accélération Continue", text: "Tous les 250 points, la vitesse de descente s'accroît de 150 à 750 px/s et les hitboxes diminuent." },
            { title: "Rupture de Cadence", text: "Omettre un échelon ou inverser la séquence réinitialise le multiplicateur à 1.0x sans déduire de points." }
          ],
          aboutTitle: "À propos de l’échelle d’agilité en ligne",
          aboutHeading: "Alternance rythmée et séquençage moteur",
          aboutText: "Inspiré de l’échelle d’agilité utilisée en football et en boxe, ce jeu de rythme travaille l’enchaînement sériel décrit par Lashley (1951) avec le curseur de la souris. Il n’entraîne pas les jambes : c’est un exercice d’alternance et de précision manuelle.",
          aboutCards: [
            {
              title: "À qui s’adresse ce jeu ?",
              desc: "Joueurs et curieux qui veulent s’exercer à l’alternance rythmée à la souris."
            },
            {
              title: "Capacités exercées",
              desc: "Rythme gauche-droite, enchaînement de quatre touches en un geste et interception de cibles qui défilent."
            },
            {
              title: "Vitesse Évolutive",
              desc: "Le défilement accélère de 150 à 750 px/s, ce qui demande de garder le même tempo à des vitesses croissantes."
            }
          ]
        }}
      />
      <DrillGuide guide={ladderGuide} />
      <RelatedDrills />
    </>
  );
}
