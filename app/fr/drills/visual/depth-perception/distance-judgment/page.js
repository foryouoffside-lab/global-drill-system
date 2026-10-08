import DistanceJudgmentClient from '@/app/drills/visual/depth-perception/distance-judgment/DistanceJudgmentClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — distance-judgment (French native search)
// PRIMARY:  "test de perception de la profondeur" — Consumer utility intent
//           "vision stéréoscopique"                — Clinical vision term
// SECONDARY / LSI:
//           "stéréopsie"                           — Ophthalmic terminology
//           "appréciation des distances"           — Natural practical phrase
//           "test de profondeur en ligne"           — Browser intent
//           "vision en relief"                      — Common supporting term
// ============================================================

export const metadata = {
  title: 'Test de perception de la profondeur en ligne | SkillDrills',
  description: 'Jeu gratuit d’appréciation des distances : cliquez quand la sphère qui grossit épouse l’anneau. Ne teste pas la vision stéréoscopique ni la vue.',
  keywords: [
    'test de perception de la profondeur',
    'vision stéréoscopique',
    'stéréopsie',
    'appréciation des distances',
    'test de profondeur en ligne',
    'vision en relief',
    'test de stéréopsie en ligne',
    'estimation de distance visuelle',
    'vision tridimensionnelle',
    'perception spatiale',
    'test de Howard-Dolman',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Test de perception de la profondeur en ligne | SkillDrills',
    description: 'Jeu gratuit d’appréciation des distances : cliquez quand la sphère qui grossit épouse l’anneau. Ne teste pas la vision stéréoscopique ni la vue.',
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Test de perception de la profondeur en ligne | SkillDrills',
    description: 'Jeu gratuit d’appréciation des distances : cliquez quand la sphère qui grossit épouse l’anneau. Ne teste pas la vision stéréoscopique ni la vue.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment',
    languages: getAlternateLanguages('/drills/visual/depth-perception/distance-judgment'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Entraînement Visuel', item: 'https://skilldrills.online/fr/drills/visual' },
    { '@type': 'ListItem', position: 3, name: 'Perception de la Profondeur', item: 'https://skilldrills.online/fr/drills/visual/depth-perception' },
    { '@type': 'ListItem', position: 4, name: 'Appréciation des distances', item: 'https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment' },
  ],
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de perception de la profondeur en ligne : appréciation des distances",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu gratuit dans le navigateur : cliquez quand la sphère qui grossit coïncide avec l’anneau. Mesure l’écart en pourcentage, sans valeur médicale.",
  "url": "https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-05"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Appréciation des distances en ligne",
  "description": "Jeu d’appréciation du temps avant contact sur écran, jouable à la souris, au toucher ou au clavier.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne avec JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-05"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Appréciation des distances : sphère et anneau",
  "url": "https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment",
  "description": "Cliquez au moment où la sphère qui grossit épouse l’anneau cible.",
  "genre": [
    "Precision Game",
    "Visual Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-05",
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
  "dateModified": "2026-09-05",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que mesure ce test de perception de la profondeur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il mesure votre appréciation du moment où une sphère qui grossit épouse un anneau fixe. Vous cliquez au moment estimé et le jeu calcule l’écart en pourcentage. Ce n’est pas un examen de la vision stéréoscopique."
      }
    },
    {
      "@type": "Question",
      "name": "Teste-t-il la vision stéréoscopique ou le relief ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Sur un écran plat, il n’y a pas de disparité binoculaire. Le jeu s’appuie sur l’agrandissement de l’image, un indice monoculaire de temps avant contact (Lee, 1976 ; Regan & Beverley, 1978)."
      }
    },
    {
      "@type": "Question",
      "name": "En quoi diffère-t-il du test de Howard-Dolman ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’appareil de Howard-Dolman (Howard, 1919) utilise des tiges réelles pour étudier la perception de la profondeur. Ce jeu utilise une sphère qui grossit à l’écran et ne peut pas le remplacer."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce que la variable tau ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lee (1976) propose que le cerveau estime le temps avant contact à partir du rapport entre la taille de l’image et la vitesse à laquelle elle grandit, sans connaître la distance réelle."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on avoir une bonne acuité et rater le test ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, parce que le jeu mesure surtout votre timing sur un indice d’agrandissement, pas la netteté de votre vue. Une mauvaise performance ne signifie pas un problème de vision."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on s’améliorer en s’entraînant ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il est probable que la répétition améliore votre timing sur cette tâche. Rien ne prouve un effet sur la conduite ou le sport. Pour une question de vision, consultez un ophtalmologue."
      }
    },
    {
      "@type": "Question",
      "name": "Comment l’erreur est-elle calculée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le jeu compare le diamètre de la sphère au moment du clic à celui de l’anneau et exprime l’écart en pourcentage. Moins de 5 % d’erreur donne le score maximal de +150 points."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il une souris, ou le tactile suffit-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous pouvez cliquer avec la souris, toucher l’écran ou appuyer sur la barre d’espace."
      }
    },
    {
      "@type": "Question",
      "name": "Le taux de rafraîchissement de l’écran compte-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Un écran affiche une image toutes les 16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz (Woods et al., 2015). Comparez vos séances sur le même écran."
      }
    },
    {
      "@type": "Question",
      "name": "Mes scores sont-ils envoyés à un serveur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Les mesures de session sont enregistrées dans le LocalStorage de votre navigateur."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment s’entraîner à apprécier les distances",
  "description": "Quatre étapes pour cliquer au moment où la sphère épouse l’anneau.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fixez l’anneau cible",
      "text": "Portez le regard sur l’anneau fixe au milieu du tunnel.",
      "url": "https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Suivez la sphère",
      "text": "Observez la sphère qui s’approche depuis le fond et grossit.",
      "url": "https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Cliquez à la superposition",
      "text": "Cliquez, touchez l’écran ou appuyez sur la barre d’espace quand la sphère coïncide avec l’anneau.",
      "url": "https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Analysez l’écart",
      "text": "Lisez votre pourcentage d’erreur et ajustez votre anticipation pour les vitesses suivantes.",
      "url": "https://skilldrills.online/fr/drills/visual/depth-perception/distance-judgment#step-4"
    }
  ]
};

const distanceGuideFr = {
  "heading": "Test de perception de la profondeur : appréciation des distances",
  "intro": [
    "Ce jeu d’appréciation des distances vous montre une sphère qui grossit dans un tunnel ; vous cliquez quand elle épouse l’anneau fixe. Le jeu calcule l’écart en pourcentage. Il s’appuie sur l’agrandissement de l’image et ne teste ni la vision stéréoscopique ni la vue : ce n’est pas un diagnostic.",
    "La perception de la profondeur combine plusieurs indices : disparité binoculaire, perspective, taille relative et agrandissement de l’image. L’appareil de Howard-Dolman (Howard, 1919) étudie la disparité avec des tiges réelles. Ici, vous utilisez surtout l’indice d’agrandissement décrit par Lee (1976) et Regan et Beverley (1978), qui donne une estimation du temps avant contact.",
    "Mesure et matériel : l’écart est calculé comme |diamètre de la sphère − diamètre de l’anneau| / diamètre de l’anneau. Les temps sont mesurés dans votre navigateur avec l’horloge performance.now(), dont la résolution est limitée. L’affichage ajoute un délai (16,7 ms à 60 Hz, 6,9 ms à 144 Hz, 4,1 ms à 240 Hz ; Woods et al., 2015) : comparez vos séances sur le même matériel.",
    "Confidentialité : vos scores et vos records restent dans le stockage local (LocalStorage) de votre navigateur."
  ],
  "benchmarks": {
    "title": "Paliers du test de perception de la profondeur (5 niveaux de repère)",
    "headers": [
      "Palier",
      "Erreur moyenne",
      "Points et niveau",
      "Lecture"
    ],
    "rows": [
      [
        "Palier 1",
        "Moins de 5,0 % d’erreur",
        "1500+ pts | Niveau 7+",
        "Clics très proches de la coïncidence"
      ],
      [
        "Palier 2",
        "5,0 % – 9,9 % d’erreur",
        "1100 – 1499 pts | Niveau 5–6",
        "Bonne anticipation à vitesse soutenue"
      ],
      [
        "Palier 3",
        "10,0 % – 15,9 % d’erreur",
        "750 – 1099 pts | Niveau 3–4",
        "Léger retard d’estimation aux pointes de vitesse"
      ],
      [
        "Palier 4",
        "16,0 % – 25,0 % d’erreur",
        "450 – 749 pts | Niveau 2",
        "Clics souvent trop précoces"
      ],
      [
        "Palier 5",
        "Plus de 25,0 % d’erreur",
        "Moins de 450 pts | Niveau 1",
        "Point de départ : attendez la coïncidence"
      ]
    ],
    "note": "Repères éditoriaux propres à cet exercice, sans lien avec un examen de la vue ni un classement de population."
  },
  "steps": [
    "Cliquez sur « Démarrer le test » pour lancer la séance de 45 secondes.",
    "Fixez l’anneau de référence cyan au centre.",
    "Suivez la sphère qui apparaît au fond du couloir et accélère vers vous.",
    "Cliquez, touchez l’écran ou appuyez sur la barre d’espace quand la sphère s’ajuste à l’anneau.",
    "Lisez votre erreur (moins de 5 % : parfait, +150 PTS) et adaptez votre rythme aux accélérations."
  ],
  "audience": "Joueurs, conducteurs et curieux qui veulent s’exercer à apprécier les distances et le temps avant contact sur écran.",
  "related": [
    {
      "href": "/fr/drills/visual/tracking-accuracy/moving-target",
      "label": "Interception de cible mobile"
    },
    {
      "href": "/fr/drills/visual/reaction-speed/light-reaction",
      "label": "Test de réaction à la lumière"
    },
    {
      "href": "/fr/drills/visual/tracking-accuracy/multiple-targets",
      "label": "Poursuite d’objets multiples"
    },
    {
      "href": "/fr/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "Suivi oculaire continu"
    },
    {
      "href": "/fr/drills/visual/reaction-speed/go/no-go",
      "label": "Contrôle d’impulsion Go / No-Go"
    },
    {
      "href": "/fr/drills/visual/visual-recognition/entropic-grid",
      "label": "Exploration de grille entropique"
    }
  ],
  "techniques": {
    "title": "Quatre conseils pour mieux estimer les distances",
    "items": [
      {
        "name": "Regarder les bords de la sphère",
        "desc": "Concentrez-vous sur la vitesse à laquelle les bords s’élargissent plutôt que sur le centre de la sphère (Lee, 1976).",
        "tips": "Comparez vos séances sur le même matériel."
      },
      {
        "name": "Contrôler l’impulsivité",
        "desc": "Attendez la superposition complète avant de cliquer, même quand la vitesse augmente.",
        "tips": "Testez et gardez ce qui vous réussit."
      },
      {
        "name": "Garder le regard sur l’anneau",
        "desc": "Laissez le regard sur le plan d’arrivée et laissez la sphère venir à vous.",
        "tips": "Testez et gardez ce qui vous réussit."
      },
      {
        "name": "Cligner entre les essais",
        "desc": "Pensez à cligner des yeux entre chaque tentative pour garder une vision confortable.",
        "tips": "Testez et gardez ce qui vous réussit."
      }
    ]
  },
  "faqs": faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('howard1919', 'lee1976', 'regan1978', 'julesz1971', 'woods2015')
};

const copyFr = {
  title: 'Test de Perception de la Profondeur',
  subtitle: 'Vision 3D et appréciation des distances',
  caption: 'La perception de la profondeur permet d\'évaluer l\'éloignement et l\'ordre des objets. Sur un écran plat, le taux d\'expansion optique (Lee, 1976; Regan & Beverley, 1978) permet de mesurer le temps avant contact (TTC) sans nécessiter la connaissance de la taille de l\'objet.',
  statScore: 'Points',
  statTime: 'Temps',
  statLevel: 'Niveau',
  statBestScore: 'Record',
  startTitle: 'Appréciation des distances',
  startSubtitle: 'Entraînez le timing avec une cible en mouvement',
  startBtn: 'Démarrer le Test',
  getReady: 'PRÉPAREZ-VOUS',
  newBest: 'NOUVEAU RECORD',
  statPoints: 'Points',
  statAccuracy: 'Précision',
  statPeakLevel: 'Niveau Max',
  statIntercepts: 'Pleins Succès',
  playAgain: 'Rejouer',
  shareScore: 'Partager le Score',
  returnOptions: 'Retour',
  rulesTitle: 'Règles et Attribution des Points',
  rule1Text: 'Interception Parfaite',
  rule1Highlight: '+150 PTS',
  rule1Result: 'Moins de 5% d\'erreur',
  rule2Text: 'Interception Rapprochée',
  rule2Highlight: '+100 PTS',
  rule2Result: 'Moins de 12% d\'erreur',
  rule3Text: 'Accélération Progressive',
  rule3Highlight: 'Plus Rapide',
  rule3Result: 'La sphère s\'approche plus vite',
  rule4Text: 'Temps Écoulé / Manqué',
  rule4Highlight: 'Aucune Pénalité',
  rule4Result: 'Nouvelle cible sans perte de points',
  aboutTitle: 'À propos du test de perception de la profondeur',
  overviewTitle: 'Que mesure cette épreuve ?',
  overviewLead: 'Elle évalue la vitesse et la justesse avec lesquelles le cerveau décrypte une approche spatiale en 3D.',
  overviewBody: 'En analysant le moment de coïncidence par expansion de contour, le jeu fait travailler le timing visuo-moteur sur cette tâche précise.',
  aboutCards: [
    { iconBg: 'bg-blue-600', title: 'À qui s\'adresse ce jeu ?', text: 'Joueurs et curieux qui veulent s\'exercer à estimer le temps avant contact sur écran.' },
    { iconBg: 'bg-cyan-600', title: 'Capacités exercées', text: 'Expansion optique, estimation du temps de contact, anticipation visuelle et acuité spatiale.' },
    { iconBg: 'bg-purple-600', title: 'Conseil Clé', text: 'Fixez l\'anneau cible et déclenchez votre clic au millimètre près quand les contours coïncident.' }
  ]
};

export default function FrenchDistanceJudgmentPage() {
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
      <DistanceJudgmentClient copy={copyFr} />
      <DrillGuide guide={distanceGuideFr} />
      <RelatedDrills currentCategory="visual" currentHref="/drills/visual/depth-perception/distance-judgment" locale="fr" />
    </>
  );
}
