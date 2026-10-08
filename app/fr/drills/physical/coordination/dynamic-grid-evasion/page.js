import DynamicGridEvasionClient from '@/app/drills/physical/coordination/dynamic-grid-evasion/DynamicGridEvasionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// RECHERCHE DE MOTS-CLÉS NATIFS (SERP FRANCE / FR-FR)
// Clusters natifs à intention forte; concurrence non mesurée :
// - "jeu d'évitement" (Suggest gl=fr: jeux d'évitement; Bing exact 0, non vérifié)
// - "test de vision périphérique en ligne gratuit" (Évaluation visuelle et cognitive)
// - "jeu d'esquive de zone réflexe" (Entraînement à la détection spatiale)
// - "entraînement aux réflexes spatiaux" (Neuro-motricité appliquée)
// - "esquiver les sorts jeu d'entraînement" / "esquive skillshot" (eSports / MOBA / FPS)
// - "test d'attention visuelle et de détection périphérique" (Mesure psychologique)
// - "jeu de rapidité et d'évitement souris" (Recherche ludique sur navigateur)
// - "réflexe d'évitement et coordination visuelle" (Capacité psychomotrice)
// ============================================================

export const metadata = {
  title: "Jeu d’évitement sur grille 3x3 à la souris | SkillDrills",
  description: "Jeu d’évitement gratuit : repérez les cases qui vont exploser sur une grille 3x3 et rejoignez une case sûre à la souris. 15 niveaux, 45 secondes.",
  keywords: [
    "jeu d'esquive à la souris en ligne",
    "test de vision périphérique en ligne",
    "jeu de réflexes",
    "jeu d'esquive de zone réflexe",
    "entraînement aux réflexes spatiaux",
    "esquiver les sorts jeu d'entraînement",
    "test d'attention visuelle et de détection périphérique",
    "jeu de rapidité et d'évitement souris",
    "réflexe d'évitement et coordination visuelle",
    "réflexes souris entraînement"
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion',
    languages: getAlternateLanguages('/drills/physical/coordination/dynamic-grid-evasion'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Jeu d’évitement sur grille 3x3 à la souris | SkillDrills",
    description: "Jeu d’évitement gratuit : repérez les cases qui vont exploser sur une grille 3x3 et rejoignez une case sûre à la souris. 15 niveaux, 45 secondes.",
    url: 'https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Jeu d’évitement sur grille 3x3 à la souris | SkillDrills",
    description: "Jeu d’évitement gratuit : repérez les cases qui vont exploser sur une grille 3x3 et rejoignez une case sûre à la souris. 15 niveaux, 45 secondes.",
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
      "name": "Coordination Motrice",
      "item": "https://skilldrills.online/fr/drills/physical/coordination"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Jeu d’évitement sur grille 3x3",
      "item": "https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Jeu d’évitement sur grille 3x3 à la souris",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu gratuit dans le navigateur : repérez les cases qui vont exploser sur une grille 3x3 et rejoignez une case sûre avant l’explosion.",
  "url": "https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion",
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
  "name": "Jeu d’évitement sur grille 3x3",
  "description": "Jeu d’évitement gratuit dans le navigateur, avec 15 niveaux de difficulté croissante sur 45 secondes.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne avec JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jeu d’évitement sur grille dynamique (Dynamic Grid Evasion)",
  "url": "https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion",
  "description": "Jeu d’évitement sur une grille 3x3 : repérez les cases dangereuses et rejoignez une case sûre à la souris.",
  "genre": [
    "Action",
    "Reflex Game",
    "Spatial Awareness"
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
      "name": "Comment fonctionne ce jeu d’évitement sur grille 3x3 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’écran est divisé en 9 cases. Des bordures ambrées signalent les cases qui vont exploser en rouge. Vous repérez les cases restées sombres et déplacez votre curseur vers l’une d’elles avant l’explosion."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il fixer le centre de la grille ou balayer case par case ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fixer le centre permet de voir les neuf cases d’un coup, alors qu’un balayage case par case demande du temps que le délai d’alerte ne laisse pas. La recherche sur les caractéristiques visuelles saillantes (Treisman & Gelade, 1980) soutient cette stratégie, que vous pouvez comparer à la vôtre."
      }
    },
    {
      "@type": "Question",
      "name": "Comment la difficulté augmente-t-elle sur les 15 niveaux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le niveau monte tous les 250 points. Le délai d’avertissement passe de 1,4 s au niveau 1 à 0,45 s aux niveaux 12 à 15, et le nombre de cases dangereuses de 3 à 7 simultanément, avec 2 refuges au minimum."
      }
    },
    {
      "@type": "Question",
      "name": "Une explosion fait-elle perdre des points ou du temps ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Aucun point acquis n’est retiré et le chronomètre de 45 secondes ne change pas. Être touché ramène seulement le multiplicateur de série à 1.0x."
      }
    },
    {
      "@type": "Question",
      "name": "Comment placer le curseur dans la case sûre sans la dépasser ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vers la case choisie, un grand mouvement suivi d’un freinage court correspond au modèle à deux phases de Woodworth (1899). Reposer légèrement la main sur le tapis aide certains joueurs à s’arrêter net."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle sensibilité de souris choisir pour ce jeu ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’y a pas de réglage unique. Une sensibilité trop basse oblige à de grands mouvements du bras, une sensibilité très haute rend l’arrêt difficile. Gardez celle de votre jeu et comparez vos séances avec le même réglage."
      }
    },
    {
      "@type": "Question",
      "name": "Comment atteindre le palier 1 de 17 000 points ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gardez le regard au centre, choisissez toujours la case sûre la plus proche de votre curseur et conservez le multiplicateur 3.0x sur les 45 secondes. Les paliers sont des repères propres à l’exercice, pas des classements."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre attention volontaire et réflexe ici ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Posner (1980) distingue l’attention dirigée volontairement, plus lente, de celle attirée par un signal visuel soudain. Ce jeu vous fait réagir aux bordures ambrées, donc au signal, plutôt que de chercher activement."
      }
    },
    {
      "@type": "Question",
      "name": "Ce jeu entraîne-t-il à esquiver dans les jeux vidéo ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il travaille la détection de signaux visuels en périphérie et le déplacement rapide du curseur. Aucune étude ne démontre un transfert vers un jeu précis : testez dans votre propre jeu."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il installer quelque chose ou créer un compte ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Le jeu fonctionne dans le navigateur, sans installation ni compte, et vos records sont stockés dans le LocalStorage de votre navigateur."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment jouer au jeu d’évitement sur grille 3x3",
  "description": "Quatre étapes pour surveiller la grille, repérer les cases sûres et éviter les explosions.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Placez le curseur au centre",
      "text": "Placez le curseur au milieu de la grille 3x3 et gardez un regard large qui englobe les neuf cases.",
      "url": "https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Repérez les cases sombres",
      "text": "Repérez par vision périphérique les cases qui ne clignotent pas en ambre : ce sont les zones sûres.",
      "url": "https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Rejoignez la case sûre",
      "text": "Déplacez le curseur vers la case sûre la plus proche avant l’explosion rouge.",
      "url": "https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Gardez la série",
      "text": "Enchaînez les évitements pour maintenir le multiplicateur 3.0x pendant les 45 secondes.",
      "url": "https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion#step-4"
    }
  ]
};

const gridGuide = {
  "heading": "Jeu d’évitement sur grille 3x3 : comment ça marche",
  "subtitle": "Attention spatiale périphérique (Treisman, Posner) et freinage en deux phases (Woodworth)",
  "intro": [
    "Ce jeu d’évitement vous place devant une grille de 9 cases dont certaines vont exploser. Vous repérez les cases restées sombres et rejoignez l’une d’elles à la souris avant l’explosion rouge. Il dure 45 secondes, compte 15 niveaux et exerce la détection périphérique et le déplacement rapide du curseur.",
    "Treisman et Gelade (1980) ont montré que les caractéristiques visuelles saillantes, comme un clignotement ou un changement de couleur, sont repérées en parallèle sur le champ visuel. En fixant le centre de la grille, vous pouvez donc voir l’état des neuf cases sans balayage séquentiel.",
    "Posner (1980) a décrit l’orientation de l’attention vers un lieu sans bouger les yeux. Du niveau 12 au niveau 15, la fenêtre de réaction tombe de 1,4 s à 0,45 s pendant que 7 cases sur 9 deviennent dangereuses. Le déplacement vers la case sûre suit le modèle en deux phases de Woodworth (1899) : un mouvement rapide puis une correction fine.",
    "Mesure et matériel : le test s’exécute dans votre navigateur avec l’horloge performance.now(), dont la résolution est limitée. Un écran à 60 Hz affiche une image toutes les 16,7 ms et un écran à 144 Hz toutes les 6,9 ms (Woods et al., 2015) : comparez vos séances sur le même matériel."
  ],
  "benchmarks": {
    "title": "Paliers du jeu d’évitement (5 niveaux de repère)",
    "headers": [
      "Palier",
      "Score requis",
      "Niveau atteint",
      "Délai d’alerte",
      "Lecture"
    ],
    "rows": [
      [
        "Palier 1",
        "17 000+ points",
        "Niveau 12 – 15",
        "0,45 – 0,60 s",
        "Évitement fluide face à 7 cases dangereuses"
      ],
      [
        "Palier 2",
        "13 000 – 16 999 pts",
        "Niveau 9 – 11",
        "0,65 – 0,80 s",
        "Bonne gestion de 5 à 6 explosions simultanées"
      ],
      [
        "Palier 3",
        "9 500 – 12 999 pts",
        "Niveau 6 – 8",
        "0,85 – 1,05 s",
        "Décisions rapides, arrêts bien dosés"
      ],
      [
        "Palier 4",
        "6 000 – 9 499 pts",
        "Niveau 3 – 5",
        "1,10 – 1,25 s",
        "Séries interrompues quand le délai passe sous 1 s"
      ],
      [
        "Palier 5",
        "Moins de 6 000 points",
        "Niveau 1 – 2",
        "Plus de 1,25 s",
        "Point de départ : cherchez à voir toute la grille"
      ]
    ],
    "note": "Repères éditoriaux propres à cet exercice, établis sur le niveau atteint et le délai d’alerte. Ce ne sont ni des normes cliniques ni un classement de population."
  },
  "techniques": {
    "title": "Quatre techniques pour mieux éviter sur la grille",
    "items": [
      {
        "name": "Fixer le centre de la grille",
        "desc": "Gardez le regard détendu sur le centre sans vous attacher à une case. Laissez la périphérie repérer l’éclat ambré sur l’ensemble des zones.",
        "tips": "Ne suivez pas le curseur des yeux : guidez-le avec votre bras."
      },
      {
        "name": "Réagir à l’absence de signal",
        "desc": "Ne cherchez pas d’abord où est le danger : dirigez la main vers une case restée sombre.",
        "tips": "Une case sans bordure ambrée est votre refuge."
      },
      {
        "name": "Mouvement rapide puis freinage",
        "desc": "Partez vite vers la case choisie, puis ralentissez en entrant dans la case pour ne pas la dépasser.",
        "tips": "Un léger appui de la main sur le tapis peut aider à s’arrêter net."
      },
      {
        "name": "Choisir la case sûre la plus proche",
        "desc": "Aux niveaux élevés, chercher la case idéale coûte du temps : visez le refuge le plus proche de votre curseur, en horizontal, vertical ou diagonale.",
        "tips": "Une décision rapide vaut mieux qu’un déplacement parfait mais tardif."
      }
    ]
  },
  "steps": [
    "Placez le curseur au centre de la grille 3x3.",
    "Gardez les yeux détendus au centre pour surveiller les signaux en périphérie.",
    "Rejoignez la case sûre la plus proche avant l’explosion rouge.",
    "Maintenez le combo 3.0x pendant les 45 secondes."
  ],
  "audience": "Joueurs, sportifs et toute personne qui veut s’exercer à la détection périphérique et à l’évitement rapide à la souris.",
  "faqs": faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('posner1980', 'treisman1980', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function DynamicGridEvasionPageFr() {
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
      <DynamicGridEvasionClient
        copy={{
          title: "Jeu d’évitement sur grille 3x3",
          subtitle: "Repérez le danger et rejoignez une case sûre • 15 niveaux",
          hudLabels: {
            score: "Score",
            timeLeft: "Temps Restant",
            bestScore: "Meilleur Score",
            bestCombo: "Meilleur Combo"
          },
          rulesTitle: "Règles du jeu et barème de points",
          rules: [
            { title: "Évitement des Zones Dangereuses", text: "Dirigez le réticule vers les cases sécurisées avant que les bordures ambrées n'explosent en rouge." },
            { title: "Multiplicateur de Série", text: "Survivez à plusieurs vagues consécutives sans dégât pour élever le combo jusqu'à 3.0x." },
            { title: "Montée en Difficulté", text: "Tous les 250 points le niveau augmente, réduisant le délai d'avertissement de 1,4s à 0,45s et imposant jusqu'à 7 zones dangereuses." },
            { title: "Impact d'une Détonation", text: "Être touché par une détonation ramène le combo à 1.0x sans la moindre déduction de score." }
          ],
          aboutTitle: "À propos du jeu d’évitement sur grille",
          aboutHeading: "Attention périphérique et évitement rapide",
          aboutText: "Cet exercice s’appuie sur la théorie de l’intégration des attributs de Treisman et Gelade (1980) et sur les travaux de Posner (1980) sur l’orientation de l’attention. La grille 3x3 fait travailler la détection périphérique et le déplacement rapide vers une zone sûre.",
          aboutCards: [
            {
              title: "À qui s’adresse ce jeu ?",
              desc: "Joueurs et toute personne qui veut s’exercer à repérer des signaux en périphérie et à réagir vite avec la souris."
            },
            {
              title: "Capacités exercées",
              desc: "Détection visuelle en parallèle, attention attirée par un signal, décision rapide et freinage du curseur."
            },
            {
              title: "Vision Périphérique",
              desc: "Fixer le centre de la grille vous apprend à utiliser la périphérie du regard plutôt que de fixer une seule case."
            }
          ]
        }}
      />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
