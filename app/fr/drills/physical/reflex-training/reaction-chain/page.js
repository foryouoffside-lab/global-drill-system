import ReactionChainClient from '@/app/drills/physical/reflex-training/reaction-chain/ReactionChainClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — France & Francophonie (FR / FR-FR / FR-CA)
// Primary Intent: entraînement au freinage de visée souris, comment corriger l'overflick, test d'inhibition motrice
// French Gaming Context: Correction de l'overflick sur Valorant et CS2, freinage cinétique de souris, inhibition de réponse motrice
// High-Demand, Low-Competition Target Keywords:
//   - "entraînement au freinage de visée souris" (Mouse aim braking training)
//   - "comment corriger overflick souris" (How to fix overflick with mouse)
//   - "test d'inhibition motrice réflexe" (Motor inhibition reflex test)
//   - "jeu de freinage de souris réflexes" (Mouse stopping reflex game)
//   - "exercice de décélération de souris esport" (Esports mouse deceleration drill)
//   - "arrêt cinétique visée réflexe" (Kinetic arrest aim reflex)
//   - "test de précision et réflexe souris" (Mouse precision and reflex test)
//   - "jeu de vitesse de réaction souris" (Mouse reaction speed game)
// ============================================================

export const metadata = {
  title: "Freinage de visée souris : arrêt sur cible | SkillDrills",
  description: "Entraînement gratuit de freinage de visée à la souris : arrêtez le curseur dans la cible mobile pour limiter l’overflick. 45 secondes, sans compte.",
  keywords: [
    "entraînement freinage visée souris",
    "aim trainer gratuit en ligne",
    "comment corriger l'overflick souris",
    "test inhibition motrice",
    "jeu réflexe arrêt souris",
    "exercice décélération souris",
    "test précision souris",
    "jeu vitesse réaction souris",
    "comment arrêter sa souris sur la cible",
    "entraînement visée Valorant"
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain',
    languages: getAlternateLanguages('/drills/physical/reflex-training/reaction-chain'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Freinage de visée souris : arrêt sur cible | SkillDrills",
    description: "Interceptez des cibles mobiles, arrêtez le curseur avec précision et pratiquez le contrôle de l’overflick au navigateur.",
    url: 'https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Freinage de visée souris : arrêt sur cible | SkillDrills",
    description: "Visez la cible, arrêtez le curseur avec précision et pratiquez le contrôle de l’overflick.",
  },
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
      "name": "Entraînement des Réflexes",
      "item": "https://skilldrills.online/fr/drills/physical/reflex-training"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Freinage de visée souris",
      "item": "https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Freinage de visée souris : arrêt sur cible",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu gratuit dans le navigateur : interceptez des nœuds mobiles et immobilisez le curseur dans la cible pour travailler le freinage de visée.",
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain",
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
  "name": "Freinage de visée souris",
  "description": "Entraînement au freinage de visée à la souris, avec nœuds jusqu’à 1 800 px/s et zone d’arrêt qui se resserre.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne avec JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Reaction Chain : freinage de visée à la souris",
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain",
  "description": "Interceptez les nœuds et immobilisez le curseur dans la cible.",
  "genre": [
    "Action",
    "Aim Trainer"
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
      "name": "Pourquoi s’arrêter sur une cible est-il plus difficile qu’accélérer ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lancer le curseur est un geste simple, mais l’arrêter pile sur la cible demande de freiner au bon moment. Woodworth (1899) décrit une impulsion rapide suivie d’un contrôle fin guidé par la vue : si le freinage arrive trop tard, le curseur dépasse la cible, c’est l’overflick."
      }
    },
    {
      "@type": "Question",
      "name": "Que décrit le modèle de course de Logan et Cowan (1984) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ce modèle propose que l’ordre d’agir et le signal d’arrêt se disputent indépendamment la réponse. Pour interrompre un flick avant de dépasser la cible, le signal d’arrêt doit « gagner la course » avant la fin du mouvement."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce que le temps de réaction au signal d’arrêt (SSRT) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est le temps nécessaire pour annuler une action déjà lancée. Ce jeu s’en inspire pour le freinage du curseur, sans mesurer le SSRT au sens de la recherche (Verbruggen & Logan, 2008)."
      }
    },
    {
      "@type": "Question",
      "name": "D’où vient l’overflick ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quand l’impulsion de départ est trop forte et le freinage trop tardif, le curseur dépasse la cible. Anticiper l’arrêt plus tôt dans le geste aide à réduire ce dépassement."
      }
    },
    {
      "@type": "Question",
      "name": "Que signifie la vitesse inférieure à 1,5 px par image ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est le seuil retenu par le jeu pour valider un arrêt : sous 1,5 px par image, le curseur est considéré comme immobile dans la cible, ce qui évite de simplement traverser la cible."
      }
    },
    {
      "@type": "Question",
      "name": "Comment la loi de Fitts s’applique-t-elle ici ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon Fitts (1954), plus la zone visée est petite par rapport à la distance, plus le mouvement est difficile. Aux niveaux élevés, les nœuds vont jusqu’à 1 800 px/s et la zone d’arrêt se resserre."
      }
    },
    {
      "@type": "Question",
      "name": "La surface du tapis de souris change-t-elle le freinage ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, probablement : la friction entre les patins et le tapis influence la facilité à s’arrêter. Gardez votre matériel habituel et comparez vos séances avec le même."
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
      "name": "Ce jeu corrige-t-il l’overflick dans les jeux de tir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucune étude ne le démontre. Il fait travailler le freinage du curseur sur une tâche précise ; gardez la sensibilité et la prise de votre jeu et vérifiez le transfert vous-même."
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
  "name": "Comment s’entraîner au freinage de visée",
  "description": "Quatre étapes pour lancer le geste, freiner dans la cible et enchaîner les arrêts.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Verrouillez le pointeur",
      "text": "Cliquez dans la zone de jeu pour verrouiller le curseur et placez le réticule au centre.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Lancez le geste vers le nœud",
      "text": "Repérez la trajectoire du nœud et lancez un mouvement rapide vers lui.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Freinez dans la cible",
      "text": "En entrant dans la cible, ralentissez et immobilisez le curseur sous 1,5 px par image.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Enchaînez les arrêts",
      "text": "Validez les arrêts pendant 45 secondes pour monter le multiplicateur jusqu’à 3,0x.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain#step-4"
    }
  ]
};

const guideProps = {
  "intro": {
    "title": "Freinage de visée à la souris : comment ça marche",
    "paragraphs": [
      "Ce jeu de freinage de visée vous demande d’intercepter un nœud mobile, puis d’immobiliser le curseur dans la cible, sous 1,5 px par image. Il travaille l’arrêt du curseur et limite le dépassement de la cible (overflick). Il dure 45 secondes, sans compte.",
      "Arrêter un geste rapide demande de freiner au bon moment. Logan et Cowan (1984) décrivent l’ordre d’agir et le signal d’arrêt comme deux processus indépendants en compétition, et Woodworth (1899) un mouvement en deux phases : une impulsion rapide puis une correction fine guidée par la vue.",
      "Selon la loi de Fitts (1954), plus la zone visée est petite par rapport à la distance, plus le mouvement est difficile. Aux niveaux élevés, les nœuds atteignent 1 800 px/s et la zone d’arrêt se resserre : il faut préparer le freinage avant l’entrée dans la cible.",
      "Mesure et matériel : le jeu calcule la vitesse du curseur image par image avec l’horloge performance.now(), dont la résolution est limitée. L’affichage ajoute un délai (16,7 ms à 60 Hz, 6,9 ms à 144 Hz, 4,1 ms à 240 Hz ; Woods et al., 2015) : comparez vos séances sur le même matériel."
    ]
  },
  "benchmarks": {
    "title": "Paliers du freinage de visée (5 niveaux de repère)",
    "headers": [
      "Palier",
      "Barème de points",
      "Arrêts réussis et vitesse",
      "Lecture"
    ],
    "rows": [
      [
        "Palier 1",
        "15 000+ pts",
        "95 %+ / 1500+ px/s",
        "Arrêts réguliers à très haute vitesse"
      ],
      [
        "Palier 2",
        "11 000 – 14 999 pts",
        "90 – 94 % / 1200 – 1499 px/s",
        "Décélération maîtrisée après de fortes accélérations"
      ],
      [
        "Palier 3",
        "7 500 – 10 999 pts",
        "82 – 89 % / 900 – 1199 px/s",
        "Freinage régulier, quelques dérapages à vitesse maximale"
      ],
      [
        "Palier 4",
        "4 000 – 7 499 pts",
        "70 – 81 % / 600 – 899 px/s",
        "Dépassements fréquents de la cible"
      ],
      [
        "Palier 5",
        "Moins de 4 000 pts",
        "Moins de 70 % / moins de 600 px/s",
        "Point de départ : apprenez à freiner plus tôt"
      ]
    ],
    "note": "Repères éditoriaux propres à cet exercice, sans lien avec une norme clinique ni un classement de population."
  },
  "protocols": {
    "title": "Quatre techniques pour freiner dans la cible",
    "description": "Des habitudes simples pour limiter l’overflick.",
    "items": [
      {
        "title": "Freiner plus tôt",
        "description": "Attendre d’être sur la cible pour freiner mène au dépassement. Commencez à ralentir avant l’entrée, vers 80 % du trajet."
      },
      {
        "title": "Aider le freinage avec les doigts",
        "description": "Au moment de l’arrêt, une légère pression des doigts sur la souris peut augmenter la friction sur le tapis. Gardez la prise qui vous est la plus régulière."
      },
      {
        "title": "Valider l’arrêt avant de continuer",
        "description": "Maintenez le curseur immobile dans la cible jusqu’à ce que l’indicateur « ARREST READY » valide l’arrêt, plutôt que de traverser la cible."
      },
      {
        "title": "Protéger le multiplicateur",
        "description": "Un arrêt raté ne retire aucun point mais ramène le multiplicateur à 1,0x : visez la régularité dans les premiers niveaux."
      }
    ]
  },
  "faqs": {
    "title": "Questions fréquentes",
    "items": faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))
  },
  "sources": pickSources('logan1984', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function LocalizedReactionChainPageFr() {
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
      <ReactionChainClient
        copy={{
          title: "Freinage de visée souris",
          subtitle: "Visez la cible et arrêtez le curseur",
          badge: "Freinage de visée",
          description: "Arrêter net un geste rapide sur une coordonnée précise est plus difficile que d’accélérer. L’ordre d’agir et le signal d’arrêt se disputent la réponse (Logan & Cowan, 1984), et un freinage trop tardif provoque un dépassement de la cible, l’overflick (Woodworth, 1899). Interceptez les nœuds et immobilisez le curseur dans la cible.",
          hudLabels: {
            score: "Score",
            time: "Temps",
            accuracy: "Précision d'Arrêt",
            bestScore: "Meilleur Score",
            getReady: "PRÉPAREZ-VOUS"
          },
          pauseTitle: "Entraînement en Pause",
          pauseSubtitle: "Cliquez dans la fenêtre pour réactiver le verrouillage du pointeur.",
          resultLabels: {
            newBest: "NOUVEAU RECORD",
            points: "Points",
            accuracy: "Précision",
            totalArrests: "Arrêts Cinétiques",
            maxCombo: "Combo Max",
            peakLevel: "Niveau Max",
            playAgain: "Rejouer"
          },
          rulesTitle: "Règles du jeu et système de points",
          rulesItems: [
            { title: "Arrêt Cinétique (+50 PTS)", text: "Interceptez le nœud incident et immobilisez totalement le curseur dans sa circonférence (ARREST READY) pour marquer 50 points." },
            { title: "Multiplicateur de Combo (jusqu'à 3,0x)", text: "Les arrêts consécutifs sans faute élèvent graduellement le multiplicateur jusqu'au plafond de 3,0x." },
            { title: "Glissements & Erreurs", text: "Traverser sans s'arrêter ou manquer la cible remet le combo à 1,0x (sans déduction de points)." },
            { title: "Accélération Fulgurante", text: "Au fur et à mesure que votre score grimpe, les nœuds accélèrent jusqu'à 1 800 px/s et la zone d'arrêt se resserre." }
          ],
          aboutTitle: "À propos du freinage de visée à la souris",
          aboutSections: [
            {
              title: "Freiner le curseur dans la cible",
              content: "Reaction Chain isole la décélération du curseur. Plutôt que de simplement cliquer sur des cibles en mouvement, vous devez croiser leur trajectoire puis immobiliser le curseur dans la zone d'arrêt."
            },
            {
              title: "Modèle de course de Logan",
              content: "Le modèle de Logan et Cowan (1984) décrit une compétition entre l'ordre d'agir et le signal d'arrêt. Répéter l'exercice travaille le freinage sur cette tâche précise ; le transfert vers un jeu de tir reste à vérifier."
            }
          ],
          aboutCards: [
            {
              title: "À qui s’adresse ce jeu ?",
              desc: "Joueurs qui veulent travailler l'arrêt du curseur et limiter l'overflick.",
              bgClass: "bg-blue-600/30",
              iconClass: "text-blue-400"
            },
            {
              title: "Capacités exercées",
              desc: "Décélération du curseur, anticipation du freinage et interception de cibles mobiles.",
              bgClass: "bg-emerald-600/30",
              iconClass: "text-emerald-400"
            },
            {
              title: "Vitesse croissante",
              desc: "Les nœuds vont jusqu'à 1 800 px/s ; stoppez sous 1,5 px/image pour atteindre le multiplicateur 3,0x.",
              bgClass: "bg-purple-600/30",
              iconClass: "text-purple-400"
            }
          ]
        }}
      >
        <DrillGuide {...guideProps} />
        <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/reaction-chain" />
      </ReactionChainClient>
    </>
  );
}
