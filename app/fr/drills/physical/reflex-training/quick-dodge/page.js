import QuickDodgeClient from '@/app/drills/physical/reflex-training/quick-dodge/QuickDodgeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — France & Francophonie (FR / FR-FR / FR-CA)
// Primary Intent: jeu d'esquive souris, jeu pour esquiver à la souris, test de réflexe esquive
// French Gaming & Athletic Context: Jeu classique d'esquive à la souris (bullet hell) et entraînement des micro-mouvements pour LoL et FPS
// High-Demand, Low-Competition Target Keywords:
//   - "jeu d'esquive souris" (Core viral browser reflex game query)
//   - "jeu pour esquiver à la souris" (High-intent variation)
//   - "test de réflexe esquive" (Reflex evasion assessment query)
//   - "jeu d'esquive de projectiles" (Projectile evasion challenge)
//   - "entraînement réflexes souris" (Mouse reflex training)
//   - "micro-mouvements souris esport" (Competitive gamer mouse movement drill)
//   - "bullet hell entraînement souris en ligne" (Online bullet hell mouse drill)
// ============================================================

export const metadata = {
  title: "Jeu d’esquive à la souris : projectiles | SkillDrills",
  description: "Jeu d’esquive gratuit à la souris : évitez les sphères rouges le plus longtemps possible. Vitesse et fréquence croissantes, sans compte.",
  keywords: [
    "jeu d'esquive souris",
    "jeu pour esquiver à la souris",
    "test de réflexe esquive",
    "jeu d'esquive de projectiles",
    "entraînement réflexes souris",
    "micro-mouvements souris esport",
    "esquive de projectiles en ligne",
    "temps de réaction moteur esquive",
    "jeu de réflexes souris gratuit",
    "contrôle précis du curseur"
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge',
    languages: getAlternateLanguages('/drills/physical/reflex-training/quick-dodge'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Jeu d’esquive à la souris : projectiles | SkillDrills",
    description: "Jeu d’esquive gratuit à la souris : évitez les sphères rouges le plus longtemps possible. Vitesse et fréquence croissantes, sans compte.",
    url: 'https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Jeu d’esquive à la souris : projectiles | SkillDrills",
    description: "Évitez les projectiles, survivez plus longtemps et entraînez vos réflexes dans ce jeu gratuit au navigateur.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
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
      "name": "Entraînement des Réflexes",
      "item": "https://skilldrills.online/fr/drills/physical/reflex-training"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Jeu d’esquive à la souris",
      "item": "https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Jeu d’esquive à la souris : projectiles",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu d’esquive gratuit dans le navigateur : évitez des sphères rouges à la souris pendant 45 secondes, avec une difficulté croissante.",
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge",
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
  "name": "Jeu d’esquive à la souris",
  "description": "Jeu d’esquive de projectiles jouable à la souris, avec vitesse et fréquence croissantes.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne avec JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Quick Dodge : jeu d’esquive à la souris",
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge",
  "description": "Évitez les sphères rouges qui convergent et survivez le plus longtemps possible.",
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
      "name": "Comment fonctionne ce jeu d’esquive à la souris ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Des sphères rouges arrivent de plusieurs directions. Vous déplacez le curseur pour éviter tout contact pendant 45 secondes : chaque seconde sans collision rapporte des points et un contact ramène le multiplicateur à 1.0x."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi anticiper plutôt que réagir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La boucle visuo-motrice prend du temps entre la perception et le geste. Quand plusieurs projectiles arrivent vite, il vaut mieux placer le curseur dans un espace libre en avance, ce qui rejoint l’idée de modèles prédictifs du mouvement (Kawato, 1999)."
      }
    },
    {
      "@type": "Question",
      "name": "Que dit la loi de Fitts sur la difficulté du jeu ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon Fitts (1954), plus le passage à viser est étroit, plus le mouvement demande de précision. Quand les projectiles se multiplient, l’espace libre se réduit et le jeu devient plus difficile."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il regarder les projectiles ou le curseur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beaucoup de joueurs gardent un regard large vers le centre pour voir plusieurs projectiles à la fois plutôt que de fixer le curseur. Testez les deux et gardez ce qui vous réussit."
      }
    },
    {
      "@type": "Question",
      "name": "Que sont les esquives rapprochées ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frôler un projectile à quelques pixels donne un bonus et fait monter plus vite le multiplicateur, mais augmente le risque de collision."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle sensibilité de souris choisir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’y a pas de réglage universel. Une sensibilité très haute rend l’arrêt difficile, une sensibilité très basse oblige à de grands gestes. Gardez celle de votre jeu et comparez vos séances avec le même réglage."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi vaut-il mieux faire de petits mouvements ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les grands déplacements demandent plus de temps et un freinage plus long. Rester près du centre avec de petites corrections laisse plus d’espace pour les vagues suivantes."
      }
    },
    {
      "@type": "Question",
      "name": "Un écran à 144 Hz ou 240 Hz aide-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’affichage ajoute un délai propre : 16,7 ms entre deux images à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz (Woods et al., 2015). Comparez vos séances sur le même écran."
      }
    },
    {
      "@type": "Question",
      "name": "Ce jeu aide-t-il à esquiver dans d’autres jeux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucune étude ne le démontre. Il travaille l’anticipation et les petits mouvements de souris ; le transfert vers un autre jeu reste à vérifier."
      }
    },
    {
      "@type": "Question",
      "name": "Mes records sont-ils envoyés à un serveur ?",
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
  "name": "Comment jouer au jeu d’esquive à la souris",
  "description": "Quatre étapes pour anticiper les projectiles et rester au centre.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Centrez le curseur",
      "text": "Placez le curseur au centre de l’arène et gardez un regard large.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Anticipez les trajectoires",
      "text": "Repérez d’où arrivent les projectiles et préparez de petites déviations avant qu’ils n’entrent en zone critique.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Revenez vers le centre",
      "text": "Évitez de vous réfugier dans les coins, où l’espace de fuite est réduit, et recentrez le curseur après chaque esquive.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Tenez 45 secondes",
      "text": "Survivez sans collision pour garder le multiplicateur 3.0x et monter votre score.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge#step-4"
    }
  ]
};

const dodgeGuide = {
  "heading": "Jeu d’esquive à la souris : comment ça marche",
  "intro": {
    "title": "Anticipation et petits mouvements : bases du jeu",
    "paragraphs": [
      "Ce jeu d’esquive à la souris vous demande d’éviter des sphères rouges qui convergent de plusieurs directions pendant 45 secondes. Chaque seconde sans collision rapporte des points, et la vitesse comme la fréquence augmentent avec le score. C’est un jeu d’entraînement gratuit, sans compte.",
      "Le temps entre la perception d’un projectile et le geste est trop long pour tout corriger en réaction ; il faut donc anticiper et placer le curseur dans un espace libre avant l’arrivée des sphères. Kawato (1999) décrit des modèles internes qui prédisent les conséquences d’un mouvement, une idée qui éclaire cette anticipation.",
      "Le modèle en deux phases de Woodworth (1899) décrit une impulsion rapide suivie d’une correction fine. Quand les projectiles dépassent 500 px/s, la loi de Fitts (1954) rappelle que plus le passage est étroit, plus la précision demandée augmente : de petits mouvements précis valent mieux que de grands gestes.",
      "Mesure et matériel : le jeu s’exécute dans votre navigateur avec l’horloge performance.now(), dont la résolution est limitée. L’affichage ajoute un délai (16,7 ms à 60 Hz, 6,9 ms à 144 Hz, 4,1 ms à 240 Hz ; Woods et al., 2015) : comparez vos séances sur le même matériel."
    ]
  },
  "benchmarks": {
    "title": "Paliers du jeu d’esquive (5 niveaux de repère)",
    "headers": [
      "Palier",
      "Plafond de score",
      "Précision et vitesse",
      "Lecture"
    ],
    "rows": [
      [
        "Palier 1",
        "24 000+ pts",
        "95 %+ / 500+ px/s",
        "Esquive fiable face à de nombreux projectiles"
      ],
      [
        "Palier 2",
        "17 000 – 23 999 pts",
        "90 – 94 % / 400 – 499 px/s",
        "Bonne tenue du centre face aux trajectoires croisées"
      ],
      [
        "Palier 3",
        "11 000 – 16 999 pts",
        "82 – 89 % / 300 – 399 px/s",
        "Contrôle stable et bonne anticipation des points d’apparition"
      ],
      [
        "Palier 4",
        "6 000 – 10 999 pts",
        "70 – 81 % / 200 – 299 px/s",
        "Tendance à se faire acculer dans les coins"
      ],
      [
        "Palier 5",
        "Moins de 6 000 pts",
        "Moins de 70 % / moins de 200 px/s",
        "Point de départ : travaillez le recentrage"
      ]
    ],
    "note": "Repères éditoriaux propres à cet exercice, sans lien avec une norme clinique ni un classement de population."
  },
  "steps": [
    "Installez-vous et placez le curseur au centre de l’arène.",
    "Anticipez les trajectoires et déviez le curseur vers les zones libres.",
    "Recentrez le curseur après chaque esquive.",
    "Tenez les 45 secondes sans collision pour garder le multiplicateur 3.0x."
  ],
  "audience": "Joueurs et curieux qui veulent s’exercer à l’anticipation et aux petits mouvements de souris.",
  "protocols": {
    "title": "Quatre techniques pour survivre plus longtemps",
    "description": "Quatre habitudes simples pour éviter plus longtemps.",
    "items": [
      {
        "title": "Anticiper les trajectoires",
        "description": "N’attendez pas qu’une sphère soit proche. Dès son apparition, imaginez sa trajectoire et placez le curseur dans l’espace libre. Regardez les espaces libres entre les sphères plutôt que les sphères elles-mêmes."
      },
      {
        "title": "Petites corrections",
        "description": "Évitez les grands cercles à travers l’écran. Corrigez par petites impulsions de quelques pixels avec les doigts. Gardez la souris bien posée et utilisez les doigts pour freiner."
      },
      {
        "title": "Revenir vers le centre",
        "description": "Les bords et les coins réduisent vos directions de fuite. Après chaque manœuvre, ramenez le curseur vers le centre de l’arène. Prenez le réflexe de revenir au centre après chaque esquive."
      },
      {
        "title": "Garder un regard large",
        "description": "Fixer uniquement le curseur vous prive de la vue d’ensemble. Gardez un regard détendu vers le centre pour repérer plusieurs trajectoires. Si cela ne vous réussit pas, suivez le curseur : testez les deux."
      }
    ]
  },
  "faqs": faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('kawato1999', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function LocalizedQuickDodgePageFr() {
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
      <QuickDodgeClient
        copy={{
          title: "Jeu d’esquive à la souris",
          subtitle: "Évitez les projectiles, survivez plus longtemps",
          description: "Esquiver des projectiles relève surtout de l’anticipation : le temps que vos yeux perçoivent une trajectoire, la sphère a déjà avancé. Les modèles internes décrits par Kawato (1999) éclairent cette anticipation. Quand la cadence s’accélère, la fenêtre de correction se réduit et le placement en amont du curseur compte davantage.",
          badge: "Jeu d'esquive",
          hudLabels: {
            score: "Score",
            time: "Temps",
            bestScore: "Meilleur Score",
            bestCombo: "Meilleur Combo",
            getReady: "PRÉPAREZ-VOUS"
          },
          resultLabels: {
            newBest: "NOUVEAU RECORD",
            points: "Points",
            accuracy: "Précision",
            dodges: "Esquives",
            peakSpeed: "Vitesse Max",
            peakLevel: "Niveau Max",
            playAgain: "Rejouer"
          },
          rulesTitle: "Règles du jeu et système de points",
          rulesItems: [
            { title: "Évitement de Projectiles & Score", text: "Évitez tout contact avec les sphères rouges. Chaque seconde de survie sans collision incrémente continuellement votre score." },
            { title: "Esquives Rapprochées (Close Shave)", text: "Frôlez les projectiles à quelques pixels de distance pour décrocher des bonus et accélérer la montée du multiplicateur de combo." },
            { title: "Accélération Continue du Rythme", text: "Au fur et à mesure que votre score s'élève, les projectiles atteignent 500 px/s et la fréquence d'apparition s'intensifie drastiquement." },
            { title: "Pénalité de Collision", text: "Toucher un projectile réinitialise immédiatement votre multiplicateur à 1.0x et déclenche un avertissement visuel rouge." }
          ],
          aboutTitle: "À propos du jeu d’esquive à la souris",
          aboutSections: [
            {
              title: "Évasion de Menaces Cinétiques & Modèles Prédictifs de Kawato",
              subtitle: "Prédire la trajectoire avant que le retard visuel ne s'impose",
              content: "Esquiver des objets rapides repose sur l'anticipation motrice décrite par Kawato (1999). Extraire l'angle de départ permet d'engager la souris sur une voie dégagée avant que le retard visuel ne condamne le mouvement."
            },
            {
              title: "Contrôle Bifasique de Woodworth & Micro-Freinage",
              subtitle: "Équilibre entre impulsion balistique initiale et verrouillage micrométrique",
              content: "Tout mouvement réactif associe une accélération première et une décélération de précision (Woodworth, 1899). Bloquer net la trajectoire avec les doigts évite les glissements incontrôlés propices aux impacts."
            },
            {
              title: "Loi de Fitts & Réduction de la Marge de Sécurité",
              subtitle: "Croissance logarithmique de la difficulté au sein du champ dense de projectiles",
              content: "Quand les obstacles prolifèrent, la largeur de passage sécurisé diminue de façon critique, exigeant une rigueur motrice millimétrique pour naviguer sans heurts (Fitts, 1954)."
            },
            {
              title: "Taux de Rafraîchissement Élevé & Fluidité Temporelle",
              subtitle: "Dalles 144Hz/240Hz et intervalle de 4,1 ms entre deux images",
              content: "Un écran à haute fréquence réduit l'intervalle entre deux images, ce qui rend les projectiles plus fluides à l'écran (Woods et al., 2015)."
            }
          ]
        }}
      />
      <DrillGuide {...dodgeGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/quick-dodge" />
    </>
  );
}
