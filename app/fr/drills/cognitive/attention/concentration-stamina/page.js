import ConcentrationStaminaClient from '@/app/drills/cognitive/attention/concentration-stamina/ConcentrationStaminaClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Concentration | Attention Soutenue | SkillDrills",
  description: "Test gratuit de concentration dans le navigateur : évaluez l’attention soutenue, l’inhibition et les changements de règle.",
  keywords: [
    "test de concentration",
    "test de concentration gratuit",
    "test de concentration en ligne",
    "attention soutenue test",
    "test d’attention",
    "test de vigilance cognitive",
    "test de mémoire et concentration gratuit",
    "test de fatigue mentale",
    "entraînement concentration gratuit",
    "contrôle inhibiteur et attention",
    "test CPT en ligne",
    "exercice de concentration continue"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de Concentration | Attention Soutenue | SkillDrills",
    description: "Test gratuit de concentration dans le navigateur : évaluez l’attention soutenue, l’inhibition et les changements de règle.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de Concentration | Attention Soutenue | SkillDrills",
    description: "Test gratuit de concentration dans le navigateur : évaluez l’attention soutenue, l’inhibition et les changements de règle.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina',
    languages: getAlternateLanguages('/drills/cognitive/attention/concentration-stamina'),
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
      "name": "Cognitif",
      "item": "https://skilldrills.online/fr/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Attention Soutenue et Concentration",
      "item": "https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Vigilance_(psychology)", "https://en.wikipedia.org/wiki/Attention"],
  "name": "Test de Concentration et d Attention Soutenue",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Test de concentration et d attention soutenue en ligne gratuit: Évaluez le déclin de vigilance, la stabilité attentionnelle et le contrôle inhibiteur.",
  "url": "https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina",
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
  "name": "Test de Concentration en Ligne",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Nécessite un navigateur moderne avec support JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jeu d Endurance de Focus et Concentration",
  "url": "https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina",
  "description": "Test de concentration et d attention soutenue en ligne gratuit: Évaluez le déclin de vigilance, la stabilité attentionnelle et le contrôle inhibiteur.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
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
      "name": "Qu'est-ce que le test d'attention soutenue et d'endurance de concentration ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est un exercice de 45 secondes au format CPT (tâche de performance continue) : des lettres et des chiffres défilent, vous réagissez seulement à ceux qui respectent la règle active (voyelles ou nombres premiers) et ignorez les autres."
      }
    },
    {
      "@type": "Question",
      "name": "Que désigne le déclin de vigilance de Mackworth (1948) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mackworth (1948) a observé chez des opérateurs radar que la détection de signaux rares baisse à mesure que la surveillance se prolonge. Une partie de ce test ne dure que 45 secondes : elle ne reproduit pas ce déclin, elle entraîne la concentration sous un rythme rapide."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi les règles changent-elles au cours de la session ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Toutes les 10 secondes, la règle cible alterne entre voyelles (A E I O U) et nombres premiers (2 3 5 7). Vous entraînez ainsi le passage immédiat à un nouveau critère (changement de tâche, Monsell, 2003)."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le score est-il calculé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le score ne mesure pas un temps de réaction en millisecondes : il compte les bonnes cibles (+100 points), les cibles manquées (omissions) et les fausses alertes (commissions). La précision = bonnes cibles ÷ (bonnes cibles + omissions + fausses alertes)."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les indices révélateurs d'une baisse de concentration ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans ce test, une baisse de concentration se voit surtout aux cibles manquées et aux fausses alertes. Chaque fausse alerte déclenche un flash rouge et bloque la saisie pendant 1 seconde ; aucun point n'est retiré."
      }
    },
    {
      "@type": "Question",
      "name": "Comment progresser à ce test de concentration ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gardez la règle active en tête (voyelles ou nombres premiers), réagissez seulement aux éléments qui la respectent et laissez passer les autres. Comparez vos propres séances sur le même appareil pour suivre votre précision."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le rythme d'entraînement recommandé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quelques parties (45 secondes chacune) avant le travail ou les études suffisent ; comparez vos scores à la même heure et sur le même appareil. Une amélioration dans la vie quotidienne n'est pas garantie."
      }
    },
    {
      "@type": "Question",
      "name": "Quel impact le manque de sommeil a-t-il sur les résultats ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La privation de sommeil peut accélérer le déclin de vigilance et augmenter les erreurs de déclenchement intempestif."
      }
    },
    {
      "@type": "Question",
      "name": "Que signifient les paliers de performance indiqués ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ce sont des repères de pratique SkillDrills fondés sur votre précision, pour comparer vos propres séances. Ils ne reposent sur aucune donnée normative."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test d'attention soutenue est-il totalement gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, SkillDrills propose cette évaluation gratuitement dans votre navigateur, sans inscription requise ni abonnement."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment Réaliser le Test de Concentration Soutenue",
  "description": "Test de concentration et d attention soutenue en ligne gratuit: Évaluez le déclin de vigilance, la stabilité attentionnelle et le contrôle inhibiteur.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Consultez la Règle Active Supérieure",
      "text": "Repérez la consigne sur le bandeau en haut qui définit les cibles valides (ex: Voyelles ou Nombres Premiers).",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Maintenez une Vigilance Ininterrompue",
      "text": "Surveillez attentivement le défilement continu des stimuli sans quitter la zone focale des yeux.",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Réagissez Uniquement aux Cibles Valides",
      "text": "Cliquez, touchez l'écran ou appuyez sur Espace ou Entrée uniquement lorsque l'élément affiché satisfait la consigne.",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Ajustez-vous aux Inversions de Règles",
      "text": "Toutes les 10 secondes, adaptez instantanément votre sélection selon le nouveau critère affiché sans précipitation.",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/concentration-stamina#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('mackworth1948', 'parasuraman1979', 'robertson1997', 'monsell2003', 'broadbent1958', 'woods2015'),
  intro: {
    title: "Test de Concentration et Attention Soutenue : Guide",
    paragraphs: [
      "Ce test gratuit de concentration en 45 secondes mesure l’attention soutenue, l’inhibition et les changements de règle comme une autoévaluation. Le résultat varie selon l’état du jour et l’habitude et ne remplace pas un avis professionnel.",
      "Mackworth (1948) a observé chez des opérateurs radar que la détection de signaux rares baisse à mesure que la surveillance se prolonge, et ce déclin est plus marqué quand les événements sont rapides (Parasuraman, 1979). Ce test condense l'exercice en 45 secondes.",
      "Toutes les 10 secondes, la règle alterne entre voyelles et nombres premiers : il faut abandonner l'ancien critère et appliquer le nouveau aussitôt (Monsell, 2003).",
    ],
  },
  benchmarks: {
    title: 'Standards de Performance Cognitive & Échelle de Vigilance Continue (CPT)',
    headers: ['Niveau', 'Rang', 'Performance', 'Exactitude', 'Repère de pratique'],
    note: "Paliers éditoriaux de pratique pour comparer vos propres séances ; ce ne sont pas des statistiques de population.",

    rows: [
      { tier: 'Palier 1', rank: 'Très avancé', stat: 'Rythme très élevé', accuracy: '98%+', marker: 'Rythme très élevé et précis' },
      { tier: 'Palier 2', rank: 'Avancé', stat: 'Rythme élevé', accuracy: '94-97%', marker: 'Rythme élevé et régulier' },
      { tier: 'Palier 3', rank: 'Solide', stat: 'Rythme stable', accuracy: '88-93%', marker: 'Rythme stable avec quelques erreurs' },
      { tier: 'Palier 4', rank: 'En progression', stat: 'Rythme moyen', accuracy: '78-87%', marker: 'Rythme moyen avec marge de progression' },
      { tier: 'Palier 5', rank: 'Initial', stat: 'Rythme initial', accuracy: '< 78%', marker: 'Point de départ' },
    ],
  },
  protocols: {
    title: 'Protocoles d Optimisation de la Vigilance',
    description: 'Directives neuroscientifiques pour muscler votre résistance à l inattention.',
    items: [
      { title: "Consultez la Règle Active Supérieure", description: "Repérez la consigne sur le bandeau en haut qui définit les cibles valides (ex: Voyelles ou Nombres Premiers)." },
      { title: "Maintenez une Vigilance Ininterrompue", description: "Surveillez attentivement le défilement continu des stimuli sans quitter la zone focale des yeux." },
      { title: "Réagissez Uniquement aux Cibles Valides", description: "Cliquez, touchez l'écran ou appuyez sur Espace ou Entrée uniquement lorsque l'élément affiché satisfait la consigne." },
      { title: "Ajustez-vous aux Inversions de Règles", description: "Toutes les 10 secondes, adaptez instantanément votre sélection selon le nouveau critère affiché sans précipitation." },
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

export default function EnhancedPageFr() {
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
      <ConcentrationStaminaClient copy={{
        title: "Test de Concentration | Attention Soutenue", subtitle: "Autoévaluation de l’attention continue, du repérage et du contrôle inhibiteur",
        statScore: "Score", statTime: "Temps", statLevel: "Niveau", statBest: "Meilleur score", ruleLabel: "Règle", vowels: "Voyelles (A E I O U)", primes: "Nombres premiers (2 3 5 7)", startTitle: "Test de Concentration", startSubtitle: "Attention soutenue • Entraînement type CPT", getReady: "Préparez-vous", flashTitle: "Flash d’erreur", soundTitle: "Son", newBest: "Nouveau record", points: "Points", accuracy: "Précision", misses: "Erreurs", peakLevel: "Niveau maximal", playAgain: "Rejouer", shareScore: "Partager le score", exitDrill: "Quitter l’exercice",
        caption: "Réagissez uniquement aux stimuli correspondant à la règle active et filtrez les distractions lors de chaque changement.", rulesTitle: "Consignes et système de score", ruleItems: [{ text: "Règle cible", highlight: "Change toutes les 10 s", result: "Voyelles ↔ Premiers" }, { text: "Bonne cible", highlight: "+100 PTS", result: "Clic/toucher, Espace ou Entrée" }, { text: "Non-cible", highlight: "Inhiber", result: "Ignorez l’élément différent" }, { text: "Fausse alerte", highlight: "Blocage 1 s", result: "Réduit la précision" }],
        aboutTitle: "À propos du test de concentration", aboutLead: "L’attention soutenue peut diminuer lors de la surveillance prolongée de signaux rares. Ce test court mesure les changements de règle, le repérage et les erreurs comme autoévaluation.", aboutText: "L’attention soutenue permet de sélectionner les signaux pertinents dans une séquence répétitive. Répétez dans les mêmes conditions et observez l’évolution du score et des erreurs.\n\nLe sommeil, le stress, l’écran et l’habitude influencent le résultat ; ce test ne remplace pas une évaluation professionnelle.", audienceTitle: "À qui s’adresse-t-il ?", audienceText: "Aux étudiants avant de longues épreuves, aux joueurs qui veulent garder leur précision et aux personnes qui doivent rester concentrées longtemps.", skillsTitle: "Compétences entraînées", skillsText: "Attention soutenue, repérage des cibles, vigilance sous fatigue et contrôle des impulsions.", flexibilityTitle: "Flexibilité cognitive", flexibilityText: "Alterner voyelles et nombres premiers toutes les 10 secondes entraîne le changement rapide de règle."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
