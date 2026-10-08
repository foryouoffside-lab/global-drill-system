import PeripheralThreatSweeperClient from '@/app/drills/physical/reflex-training/peripheral-threat-sweeper/PeripheralThreatSweeperClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — France & Francophonie (FR / FR-FR)
// Primary Intent: entraîner sa vision périphérique, test de vision périphérique en ligne, élargir son champ visuel exercices
// French Gaming & Athletic Context: Prévention de la vision en tunnel dans les FPS (Valorant, CS2) et extension du champ visuel utile (UFOV)
// High-Demand, Low-Competition Target Keywords:
//   - "entraîner sa vision périphérique" (Core high-demand vision conditioning query)
//   - "test de vision périphérique en ligne" (Visual field testing query)
//   - "élargir son champ visuel exercices" (Visual field expansion exercises)
//   - "éviter la vision en tunnel gaming" (Tunnel vision prevention in gaming)
//   - "test de réflexes périphériques" (Peripheral reaction chronometry)
//   - "test champ visuel utile ufov" (Useful Field of View assessment query)
//   - "exercices de vision périphérique sport" (Athletic vision training)
//   - "attention visuelle couverte test" (Covert visual orienting paradigm)
//   - "entraînement visuel esport" (Esports visual training query)
//   - "rapidité de balayage visuel" (Visual sweeping speed query)
// ============================================================

export const metadata = {
  title: "Exercices de vision périphérique en ligne | SkillDrills",
  description: "Jeu gratuit de vision périphérique : fixez le centre et cliquez les nœuds qui convergent avant qu’ils touchent le noyau. Pas un test médical.",
  keywords: [
    "entraîner sa vision périphérique",
    "test de vision périphérique en ligne",
    "test de réflexes périphériques",
    "exercices de vision périphérique sport",
    "élargir son champ visuel exercices",
    "test champ visuel utile UFOV",
    "entraînement visuel esport",
    "éviter la vision en tunnel gaming",
    "attention visuelle couverte test",
    "rapidité de balayage visuel"
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper',
    languages: getAlternateLanguages('/drills/physical/reflex-training/peripheral-threat-sweeper'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Exercices de vision périphérique en ligne | SkillDrills",
    description: "Jeu gratuit de vision périphérique : fixez le centre et cliquez les nœuds qui convergent avant qu’ils touchent le noyau. Pas un test médical.",
    url: 'https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Exercices de vision périphérique en ligne | SkillDrills",
    description: "Jeu gratuit de vision périphérique : fixez le centre et cliquez les nœuds qui convergent avant qu’ils touchent le noyau. Pas un test médical.",
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
      "name": "Exercices de vision périphérique",
      "item": "https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Exercices de vision périphérique en ligne",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu gratuit dans le navigateur : fixez le centre, repérez les nœuds qui convergent depuis les bords et cliquez dessus avant qu’ils touchent le noyau.",
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper",
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
  "name": "Exercices de vision périphérique en ligne",
  "description": "Jeu de vision périphérique jouable à la souris, avec une difficulté croissante : nœuds plus rapides et plus fréquents.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne avec JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Défense radiale : vision périphérique",
  "url": "https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper",
  "description": "Fixez le centre et neutralisez les nœuds qui convergent depuis les bords.",
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
      "name": "Comment cet exercice travaille-t-il la vision périphérique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous fixez le noyau au centre de l’écran et vous cliquez sur les nœuds rouges et orangés qui convergent depuis les bords, sans suivre leur trajet des yeux. Cela s’appuie sur l’orientation de l’attention sans mouvement des yeux décrite par Posner (1980)."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi les nœuds colorés se repèrent-ils sans chercher ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon Treisman et Gelade (1980), une caractéristique visuelle simple comme la couleur se repère en parallèle, presque indépendamment du nombre d’éléments à l’écran. Les nœuds contrastés ressortent donc sans balayage séquentiel."
      }
    },
    {
      "@type": "Question",
      "name": "Que signifie le champ visuel utile (UFOV) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le champ visuel utile désigne la zone dont on peut extraire de l’information en un coup d’œil, sans bouger les yeux ni la tête (Ball et al., 1988). Cet exercice fait travailler la détection en périphérie, mais n’en mesure pas l’étendue."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice est-il un test de vision médical ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. C’est un jeu d’entraînement et il ne remplace pas un examen chez un ophtalmologue. Si vous avez des doutes sur votre champ de vision, consultez un professionnel de santé."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne le geste de frappe vers un nœud ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le modèle en deux phases de Woodworth (1899) décrit une impulsion rapide vers la cible puis une correction fine avant le clic. C’est la logique de chaque frappe radiale."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi ramener le curseur au centre ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le centre est à égale distance de tous les bords. Revenir au centre après chaque frappe raccourcit le trajet vers le nœud suivant, quelle que soit sa direction (loi de Fitts, 1954)."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si un nœud touche le noyau ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une brèche est comptée, le multiplicateur de série retombe à 1.0x et l’écran clignote en rouge. Chaque nœud neutralisé rapporte des points et 0,6 s de temps."
      }
    },
    {
      "@type": "Question",
      "name": "Comment la difficulté évolue-t-elle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’intervalle d’apparition passe de 1,4 s à 0,20 s et la vitesse des nœuds de 160 à 520 px/s au fil des niveaux."
      }
    },
    {
      "@type": "Question",
      "name": "Un écran à 144 Hz ou 240 Hz change-t-il l’expérience ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’affichage ajoute un délai propre : 16,7 ms entre deux images à 60 Hz, 6,9 ms à 144 Hz, 4,1 ms à 240 Hz (Woods et al., 2015). Comparez vos séances sur le même écran."
      }
    },
    {
      "@type": "Question",
      "name": "Mes scores sont-ils envoyés à un serveur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Le jeu s’exécute dans votre navigateur et vos scores restent dans son LocalStorage."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment s’entraîner à la vision périphérique avec ce jeu",
  "description": "Quatre étapes pour fixer le centre, repérer les nœuds et les neutraliser.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fixez le noyau central",
      "text": "Gardez le regard sur le noyau, au centre, sans suivre les nœuds des yeux (Posner, 1980).",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Repérez les nœuds colorés",
      "text": "Repérez les nœuds rouges et orangés qui convergent depuis les bords grâce à votre vision périphérique.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Frappez le nœud",
      "text": "Déplacez la souris d’un geste rapide vers le nœud et cliquez avant qu’il n’atteigne le noyau.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Revenez au centre",
      "text": "Ramenez le curseur au centre après chaque frappe pour rester à égale distance de tous les bords.",
      "url": "https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper#step-4"
    }
  ]
};

const guideProps = {
  "intro": {
    "title": "Exercices de vision périphérique : comment ça marche",
    "paragraphs": [
      "Ce jeu de vision périphérique vous demande de fixer un noyau au centre de l’écran et de cliquer sur les nœuds rouges et orangés qui convergent depuis les bords, sans les suivre des yeux. Il travaille la détection en périphérie et la rapidité de réponse à la souris. Ce n’est pas un test médical du champ visuel.",
      "La fovéa, zone de vision la plus nette, ne couvre qu’une petite partie du champ visuel ; la périphérie détecte surtout le mouvement et les contrastes. Posner (1980) a montré que l’attention peut être déplacée vers la périphérie sans bouger les yeux, et Treisman et Gelade (1980) que des caractéristiques simples comme la couleur se repèrent en parallèle.",
      "Le champ visuel utile (Ball et al., 1988) désigne la zone dont on extrait de l’information en un coup d’œil. Ce jeu fait travailler la détection en périphérie en accélérant les nœuds de 160 à 520 px/s et en réduisant l’intervalle d’apparition de 1,4 s à 0,20 s, sans prouver un élargissement de ce champ.",
      "Mesure et matériel : le jeu s’exécute dans votre navigateur avec l’horloge performance.now(), dont la résolution est limitée. Votre écran affiche une image toutes les 16,7 ms à 60 Hz et toutes les 6,9 ms à 144 Hz (Woods et al., 2015) : comparez vos séances sur le même matériel."
    ]
  },
  "benchmarks": {
    "title": "Paliers de l’exercice de vision périphérique (5 niveaux de repère)",
    "headers": [
      "Palier",
      "Score ciblé",
      "Précision et vitesse",
      "Lecture"
    ],
    "rows": [
      [
        "Palier 1",
        "24 000+ pts",
        "90 %+ de touches / 450+ px/s",
        "Détection fiable à très haute vitesse"
      ],
      [
        "Palier 2",
        "17 000 – 23 999 pts",
        "82 – 89 % / 350 – 449 px/s",
        "Bonne gestion de plusieurs nœuds simultanés"
      ],
      [
        "Palier 3",
        "11 000 – 16 999 pts",
        "74 – 81 % / 250 – 349 px/s",
        "Détection stable, quelques brèches"
      ],
      [
        "Palier 4",
        "6 000 – 10 999 pts",
        "65 – 73 % / 160 – 249 px/s",
        "Tendance à fixer les nœuds plutôt que le centre"
      ],
      [
        "Palier 5",
        "Moins de 6 000 pts",
        "Moins de 65 % / moins de 160 px/s",
        "Point de départ : apprenez à fixer le noyau"
      ]
    ],
    "note": "Repères éditoriaux propres à cet exercice, établis sur le score, les brèches subies et la vitesse atteinte. Ce ne sont ni des normes cliniques ni un classement de population."
  },
  "protocols": {
    "title": "Quatre habitudes pour mieux utiliser la périphérie",
    "description": "Des gestes simples pour fixer le centre et enchaîner les frappes.",
    "items": [
      {
        "title": "Fixer le noyau sans suivre les nœuds",
        "description": "Gardez les yeux sur le noyau central et résistez à l’envie de suivre les nœuds du regard (Posner, 1980)."
      },
      {
        "title": "Repérer la couleur d’abord",
        "description": "Laissez les nœuds rouges et orangés ressortir sans les chercher un par un (Treisman & Gelade, 1980)."
      },
      {
        "title": "Frapper puis corriger",
        "description": "Lancez la souris d’un geste rapide vers le nœud, puis ajustez du bout des doigts avant le clic (Woodworth, 1899)."
      },
      {
        "title": "Traiter le plus proche du noyau en premier",
        "description": "Quand plusieurs nœuds arrivent, neutralisez d’abord celui qui est le plus proche du noyau."
      }
    ]
  },
  "faqs": {
    "title": "Questions fréquentes",
    "items": faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))
  },
  "sources": pickSources('posner1980', 'treisman1980', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function LocalizedPeripheralThreatSweeperPageFr() {
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
      <PeripheralThreatSweeperClient
        copy={{
          title: "Exercices de vision périphérique",
          subtitle: "Fixez le centre et repérez les menaces latérales",
          description: "La vision périphérique correspond à ce que vous percevez sans regarder directement. L’attention peut être orientée vers la périphérie pendant que les yeux restent immobiles (Posner, 1980), et un trait simple comme la couleur se repère en parallèle, alors que des cibles combinant plusieurs critères imposent une recherche active (Treisman & Gelade, 1980).",
          hudLabels: {
            score: "Score",
            time: "Temps",
            bestScore: "Meilleur Score",
            bestCombo: "Meilleur Combo",
            getReady: "PRÉPAREZ-VOUS",
            accuracy: "Précision",
            sweeps: "Balayages",
            breaches: "Brèches",
            peakLevel: "Niveau Max"
          },
          resultLabels: {
            accuracy: "Précision",
            sweeps: "Balayages",
            breaches: "Brèches",
            peakLevel: "Niveau Max"
          },
          rulesTitle: "Règles du jeu et système de points",
          rulesItems: [
            { title: "Défense du Noyau et Points", text: "Cliquez sur les nœuds rouges et orangés convergents avant qu'ils ne touchent le noyau central. Chaque neutralisation rapporte 100 points de base (pondérés par le niveau et le combo) et +0,6s de temps." },
            { title: "Sanction en Cas de Brèche", text: "Si un nœud pénètre le noyau central, une brèche (breach) est décomptée : la série de combo retombe à 1.0x et l'écran émet un flash rouge d'alerte." },
            { title: "Accélération Évolutive", text: "À mesure que les points augmentent, l'intervalle de spawn se réduit de 1,4s à 0,20s et la vitesse des vecteurs grimpe de 160 px/s à 520 px/s." },
            { title: "Recentrage Tactique", text: "Ramenez le curseur sur le noyau central après chaque frappe pour conserver une couverture équidistante à 360° vers tous les quadrants." }
          ],
          aboutTitle: "À propos des exercices de vision périphérique",
          aboutSections: [
            {
              title: "Orientation Attentionnelle Couverte et Balayage Périphérique",
              subtitle: "Guidage spatial de Posner sans déviation de la fixation fovéale",
              content: "L'interception des menaces périphériques entraîne l'attention spatiale couverte (Posner, 1980). Au lieu de promener son regard, le joueur conserve son point d'ancrage central tout en projetant son attention sur l'ensemble des 360° extérieurs."
            },
            {
              title: "Intégration Pré-Attentionnelle et Cartes de Saillance",
              subtitle: "Exploration visuelle parallèle de Treisman à travers les angles radiaux",
              content: "L'émergence de nouveaux vecteurs alerte des détecteurs pré-attentionnels de mouvement et de couleur sur la rétine périphérique (Treisman & Gelade, 1980). Les nœuds contrastés créent l'effet pop-out, guidant le cerveau vers la frappe."
            },
            {
              title: "Flick Balistique et Sauvegarde du Noyau",
              subtitle: "Mouvement rapide de Woodworth complété par un freinage millimétré",
              content: "Les balayages nécessitent le contrôle en deux temps de Woodworth (1899) : une impulsion initiale rapide, relayée par des micro-corrections visuelles avant le clic."
            },
            {
              title: "Champ Visuel Utile et Traitement Multi-Vectoriel",
              subtitle: "Élargissement de la capacité cognitive sous haute fréquence d'apparition",
              content: "En raccourcissant les délais d'apparition et en accélérant les cibles jusqu'à 520 px/s, le jeu sollicite la détection en périphérie (voir Ball et al., 1988, sur le champ visuel utile) sans prouver un élargissement de ce champ."
            }
          ]
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/peripheral-threat-sweeper" />
    </>
  );
}
