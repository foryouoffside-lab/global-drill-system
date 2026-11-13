import DualTargetFlowClient from '@/app/drills/cognitive/attention/multi-tasking/DualTargetFlowClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de multitâche | Suivi double | SkillDrills",
  description: "Test de multitâche gratuit : dans deux flux de symboles opposés, touchez seulement le symbole cible de chaque côté. Non clinique, c’est un auto-test cognitif.",
  keywords: [
    "test de multitache",
    "test de flexibilite cognitive",
    "test de changement de tache",
    "test d attention partagee en ligne",
    "jeu de multitache cerebral",
    "entrainement traitement parallele",
    "evaluation surcharge cognitive",
    "cout du switch cognitif test",
    "test de capacite multitache",
    "exercice agilite mentale gratuit",
    "vitesse d alternance attentionnelle"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de multitâche | Suivi double | SkillDrills",
    description: "Test de multitâche gratuit : dans deux flux de symboles opposés, touchez seulement le symbole cible de chaque côté. Non clinique, c’est un auto-test cognitif.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de multitâche | Suivi double | SkillDrills",
    description: "Test de multitâche gratuit : dans deux flux de symboles opposés, touchez seulement le symbole cible de chaque côté. Non clinique, c’est un auto-test cognitif.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking',
    languages: getAlternateLanguages('/drills/cognitive/attention/multi-tasking'),
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
      "name": "Entrainements",
      "item": "https://skilldrills.online/fr/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Entraînement cognitif",
      "item": "https://skilldrills.online/fr/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Test de multitâche",
      "item": "https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Task_switching_(psychology)", "https://en.wikipedia.org/wiki/Human_multitasking"],
  "name": "Test de multitâche – suivi de deux flux",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Test de multitâche gratuit : dans deux flux de symboles opposés, touchez seulement le symbole cible de chaque côté. Non clinique, c’est un auto-test cognitif.",
  "url": "https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de multitâche",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Necessite un navigateur moderne avec support JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jeu de multitâche – suivi de deux flux",
  "url": "https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking",
  "description": "Test de multitâche gratuit : dans deux flux de symboles opposés, touchez seulement le symbole cible de chaque côté. Non clinique, c’est un auto-test cognitif.",
  "genre": [
    "Action",
    "Jeu Cerebral",
    "Entrainement Cognitif"
  ],
  "gamePlatform": [
    "Navigateur Web",
    "Bureau",
    "Appareils Mobiles"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu’est-ce que le test de multitâche (Dual-Target Flow) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est un exercice d’entraînement : l’écran est divisé en deux couloirs (gauche/droite en paysage, haut/bas en portrait) où des formes partent du centre vers l’extérieur. Vous cliquez ou touchez seulement le symbole cible affiché dans chaque couloir. Ce n’est pas un test clinique."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce que le coût de changement (switch cost) selon Rogers et Monsell (1995) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est la baisse de rapidité et de précision observée quand on passe d’une règle de tâche à une autre."
      }
    },
    {
      "@type": "Question",
      "name": "Le cerveau peut-il vraiment faire plusieurs choses à la fois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour les décisions non automatisées, les travaux sur le goulot d’étranglement central suggèrent une alternance rapide plutôt qu’un traitement réellement parallèle (Pashler, 1994)."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’ont observé Ophir, Nass et Wagner (2009) chez les adeptes du multitâche ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les gros utilisateurs du multitâche médiatique obtenaient de moins bons résultats dans des tâches où il faut ignorer des stimuli non pertinents. L’étude est corrélationnelle et ne montre pas de cause."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le score est-il calculé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque cible touchée rapporte 100 points de base multipliés par le combo et le niveau, et ajoute 2 s (60 s maximum). Toucher un mauvais symbole ou laisser filer un symbole cible retire 1 s et remet le combo à zéro. Précision = réussites ÷ (réussites + erreurs). La note dépend du score (24 000 points = meilleure note) : c’est un repère de pratique SkillDrills."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles stratégies aident à améliorer son score ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ne fixez pas un seul couloir : regardez près de la limite entre les deux et vérifiez les deux côtés. Les symboles cibles changent toutes les 20 secondes, contrôlez donc leur affichage régulièrement."
      }
    },
    {
      "@type": "Question",
      "name": "Comment la difficulté évolue-t-elle au fil des niveaux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le niveau monte avec le score : les formes défilent plus vite et apparaissent plus souvent. À partir du niveau 3, les deux couloirs ont des symboles cibles différents."
      }
    },
    {
      "@type": "Question",
      "name": "La fréquence de l’écran influe-t-elle sur les résultats ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un écran à fréquence élevée peut rendre les formes rapides plus nettes, mais nous n’avons pas mesuré l’effet sur le score. Comparez vos résultats sur le même appareil."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure une partie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le chrono démarre à 45 secondes : +2 s par cible touchée (60 s maximum), −1 s par erreur. La partie se termine à 0. Comparez plusieurs parties jouées dans les mêmes conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test de multitâche est-il gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, SkillDrills le propose gratuitement dans votre navigateur, sans inscription ni téléchargement."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment passer le test de multitâche",
  "description": "Méthode pratique pour surveiller deux flux de symboles et toucher seulement les cibles de chaque couloir.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Regardez près du Centre",
      "text": "Placez votre regard près de la limite entre les deux couloirs pour surveiller les deux côtés.",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Repérez les Symboles Cibles",
      "text": "Repérez le symbole cible affiché dans chaque couloir ; il change toutes les 20 secondes.",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Cliquez Rapidement sur les Correspondances",
      "text": "Cliquez ou touchez les symboles identiques à la cible de leur couloir avant qu’ils n’atteignent le bord (+2 s). Un mauvais symbole coûte 1 s.",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Gérez l’Accélération",
      "text": "Le défilement accélère avec le niveau et, dès le niveau 3, chaque couloir a sa propre cible. Sans erreur, le multiplicateur de combo augmente.",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/multi-tasking#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rogers1995', 'monsell2003', 'pashler1994', 'wickens2002', 'ophir2009', 'woods2015'),
  intro: {
    title: "Test de Multitâche et Flexibilité Cognitive",
    paragraphs: [
      "Ce test de multitâche gratuit vous demande de surveiller deux flux de symboles à la fois et de toucher seulement la cible de chaque couloir. C’est une auto-évaluation non clinique.",
      "Le coût de changement (switch cost) désigne la baisse passagère de rapidité et de précision lors du passage d’une règle à une autre (Rogers & Monsell, 1995).",
      "Ici, les cibles changent toutes les 20 secondes et deviennent différentes d’un couloir à l’autre à partir du niveau 3 : il faut donc mettre à jour la règle de chaque côté (Pashler, 1994 ; Wickens, 2002).",
    ],
  },
  benchmarks: {
    title: 'Paliers de pratique SkillDrills (précision)',
    headers: ['Palier', 'Rang', 'Evaluation', 'Precision', 'Repère de pratique'],
    note: "Paliers éditoriaux de pratique pour comparer vos propres séances ; ce ne sont pas des statistiques de population ni des normes cliniques.",

    rows: [
      { tier: 'Palier 1', rank: 'Très avancé', stat: 'Rythme très élevé', accuracy: '98%+', marker: 'Rythme très élevé et précis' },
      { tier: 'Palier 2', rank: 'Avancé', stat: 'Rythme élevé', accuracy: '94-97%', marker: 'Rythme élevé et régulier' },
      { tier: 'Palier 3', rank: 'Solide', stat: 'Rythme stable', accuracy: '88-93%', marker: 'Rythme stable avec quelques erreurs' },
      { tier: 'Palier 4', rank: 'En progression', stat: 'Rythme moyen', accuracy: '78-87%', marker: 'Rythme moyen avec marge de progression' },
      { tier: 'Palier 5', rank: 'Initial', stat: 'Rythme initial', accuracy: '<78%', marker: 'Point de départ' },
    ],
  },
  protocols: {
    title: 'Étapes d’une partie',
    description: 'Comment surveiller les deux couloirs sans perdre le combo.',
    items: [
      { title: "Regardez près du Centre", description: "Placez votre regard près de la limite entre les deux couloirs pour surveiller les deux côtés." },
      { title: "Repérez les Symboles Cibles", description: "Repérez le symbole cible affiché dans chaque couloir ; il change toutes les 20 secondes." },
      { title: "Cliquez Rapidement sur les Correspondances", description: "Cliquez ou touchez les symboles identiques à la cible de leur couloir avant qu’ils n’atteignent le bord (+2 s). Un mauvais symbole coûte 1 s." },
      { title: "Gérez l’Accélération", description: "Le défilement accélère avec le niveau et, dès le niveau 3, chaque couloir a sa propre cible. Sans erreur, le multiplicateur de combo augmente." },
    ],
  },
  faqs: {
    title: 'Foire Aux Questions (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function EnhancedPage() {
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
      <DualTargetFlowClient copy={{
        title: "Test de multitâche", subtitle: "Surveillez deux flux de symboles en parallèle",
        statScore: "Points", statTime: "Temps", timeLeft: "Temps restant", statLevel: "Niveau", statBest: "Meilleur score",
        startTitle: "Test de multitâche", startSubtitle: "Deux flux · focus périphérique", getReady: "Préparez-vous", accuracy: "Précision", hits: "Réussites", peakLevel: "Niveau maximal", maxCombo: "Combo maximal",
        caption: "Repérez les symboles correspondants dans deux flux opposés et réagissez avant l’accélération.",
        rulesTitle: "Consignes et score", ruleItems: [
          { text: "Touchez la cible", highlight: "+100 PTS, +2 s", result: "Symbole du couloir" },
          { text: "Deux couloirs", highlight: "Dès le niveau 3", result: "Une cible par couloir" },
          { text: "Erreur / cible ratée", highlight: "Combo perdu", result: "−1 s" },
          { text: "Changement de cible", highlight: "Toutes les 20 s", result: "Revérifiez le symbole" },
        ],
        aboutTitle: "À propos du multitâche et du double flux", aboutLead: "Cet auto-test cognitif non clinique associe deux flux visuels et observe la précision pratiquée ainsi que la vitesse de changement attentionnel, sans prétendre mesurer une capacité générale du quotidien.",
        audienceTitle: "Pour qui", audienceText: "Pour les joueurs qui surveillent plusieurs éléments, les apprenants et les personnes qui veulent organiser des informations simultanées.",
        skillsTitle: "Compétences travaillées", skillsText: "Suivi visuel bilatéral, détection périphérique, changement attentionnel et contrôle exécutif.", flexibilityTitle: "Vitesse de changement", flexibilityText: "Chaque niveau modifie le rythme et les formes : passez d’un flux à l’autre sans perdre en précision."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
