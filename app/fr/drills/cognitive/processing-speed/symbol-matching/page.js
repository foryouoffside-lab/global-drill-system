import SymbolMatchingClient from '@/app/drills/cognitive/processing-speed/symbol-matching/SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test SDMT en ligne : symboles et chiffres | SkillDrills",
  description: "Jeu gratuit inspiré du SDMT : associez chaque symbole à un chiffre à l’aide de la clé affichée et entraînez votre vitesse de traitement. Non clinique.",
  keywords: [
    "test symboles et chiffres",
    "test sdmt en ligne",
    "vitesse de traitement cognitif test",
    "substitution symboles chiffres",
    "test dsst en ligne",
    "balayage visuel cognitif",
    "memoire associative test",
    "agilite mentale test gratuit",
    "evaluation neuropsychologique gratuite",
    "test attention et rapidite",
    "exercice appariement de symboles",
    "test cognitif de symboles"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test SDMT en ligne : symboles et chiffres | SkillDrills",
    description: "Jeu gratuit inspiré du SDMT : associez chaque symbole à un chiffre à l’aide de la clé affichée et entraînez votre vitesse de traitement. Non clinique.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test SDMT en ligne : symboles et chiffres | SkillDrills",
    description: "Jeu gratuit inspiré du SDMT : associez chaque symbole à un chiffre à l’aide de la clé affichée et entraînez votre vitesse de traitement. Non clinique.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/symbol-matching'),
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
      "name": "Test SDMT Symboles",
      "item": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test SDMT en ligne : symboles et chiffres",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu gratuit inspiré du SDMT dans le navigateur : associez des symboles à des chiffres avec la clé affichée. Entraînement, pas un test clinique.",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching",
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
  "name": "Test SDMT en Ligne",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Nécessite un navigateur moderne avec support JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jeu d’appariement symboles et chiffres",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching",
  "description": "Jeu gratuit inspiré du SDMT dans le navigateur : associez des symboles à des chiffres avec la clé affichée. Entraînement, pas un test clinique.",
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu’est-ce que le test SDMT (Symbol Digit Modalities Test) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le SDMT est un test neuropsychologique créé par Aaron Smith (1973) : on associe des symboles à des chiffres le plus vite possible. Cet exercice s’en inspire mais n’est pas le test officiel."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence entre le SDMT et le DSST ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans le DSST de Wechsler, on dessine à la main les symboles correspondant à des chiffres. Dans le SDMT, on associe des symboles à des chiffres, ici en appuyant sur le chiffre correspondant."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice remplace-t-il un test clinique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. C’est un jeu d’entraînement : son score n’est pas étalonné et ne constitue pas un diagnostic. Pour une évaluation cognitive, consultez un professionnel de santé."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles capacités cet exercice sollicite-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La recherche visuelle, la vitesse de traitement, la mémoire associative symbole-chiffre et l’attention soutenue (Smith, 1973)."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le rôle de la mémoire dans la performance ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En retenant quelques paires symbole-chiffre, vous consultez moins souvent la clé et répondez plus vite. La clé change à chaque session, il faut donc la réapprendre."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi cet exercice fatigue-t-il autant ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque essai enchaîne repérage du symbole, consultation de la clé et réponse. Cet enchaînement sans pause est exigeant ; faites des séances courtes."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice aide-t-il dans les jeux compétitifs ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucune étude ne le démontre. Il travaille la recherche visuelle et la rapidité de réponse sur une tâche précise ; le transfert vers un jeu reste à vérifier."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps s’entraîner ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’existe pas de durée prouvée. Des séances courtes et régulières, sur le même appareil, suffisent pour suivre vos progrès sans saturation."
      }
    },
    {
      "@type": "Question",
      "name": "La vitesse de traitement baisse-t-elle avec l’âge ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les temps de réaction et la vitesse de traitement tendent à ralentir avec l’âge (Der & Deary, 2006), avec de fortes différences entre personnes. Comparez-vous à vos propres séances."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test de symboles et chiffres est-il gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Il est gratuit, sans inscription ni téléchargement, directement dans le navigateur."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment jouer au test symboles et chiffres",
  "description": "Jeu gratuit inspiré du SDMT dans le navigateur : associez des symboles à des chiffres avec la clé affichée. Entraînement, pas un test clinique.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Consultez la clé du haut",
      "text": "Examinez la table de correspondance qui associe chaque symbole géométrique à un chiffre.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Repérez le symbole cible",
      "text": "Observez le symbole cible et trouvez le chiffre correspondant dans la clé.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Appuyez sur le chiffre associé",
      "text": "Appuyez sur le bouton du chiffre correspondant, le plus vite possible et sans erreur.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Mémorisez les paires",
      "text": "En retenant quelques paires, vous répondez sans revenir à la clé à chaque fois.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "Test SDMT en ligne : comment fonctionne l’exercice",
    paragraphs: [
      "Ce test SDMT en ligne est un jeu gratuit : une clé associe des symboles à des chiffres, un symbole cible s’affiche et vous appuyez sur le bon chiffre le plus vite possible. Il s’inspire du Symbol Digit Modalities Test (Smith, 1973) pour entraîner la vitesse de traitement. Ce n’est pas un test clinique.",
      "Le SDMT d’origine est un instrument de neuropsychologie. Cette version n’a pas été étalonnée ni validée cliniquement : son score ne vaut que pour cet exercice et ne constitue pas un diagnostic.",
      "La tâche sollicite la recherche visuelle, la mémoire associative et la sélection de réponse. La vitesse de traitement ralentit en moyenne avec l’âge (Der & Deary, 2006) ; l’écran et l’appareil ajoutent leur propre délai de mesure (Woods et al., 2015).",
    ],
  },
  benchmarks: {
    title: 'Paliers de l’exercice symboles et chiffres',
    headers: ['Palier', 'Profil', 'Efficacité', 'Exactitude', 'Lecture'],
    rows: [
      { tier: 'Palier 1', rank: 'Très avancé', stat: 'Très rapide', level: 'Palier 1', accuracy: '98%+', percentile: 'Réponses très rapides et très exactes' },
      { tier: 'Palier 2', rank: 'Avancé', stat: 'Rapide', level: 'Palier 2', accuracy: '94-97%', percentile: 'Réponses rapides et régulières' },
      { tier: 'Palier 3', rank: 'Confirmé', stat: 'Soutenue', level: 'Palier 3', accuracy: '88-93%', percentile: 'Bonne cadence avec quelques erreurs' },
      { tier: 'Palier 4', rank: 'Intermédiaire', stat: 'Moyenne', level: 'Palier 4', accuracy: '78-87%', percentile: 'Consultation fréquente de la clé' },
      { tier: 'Palier 5', rank: 'Débutant', stat: 'Initiale', level: 'Palier 5', accuracy: '< 78%', percentile: 'Point de départ' },
    ],
  },
  protocols: {
    title: 'Quatre conseils pour aller plus vite',
    description: 'Des habitudes simples pour associer symboles et chiffres sans erreur.',
    items: [
      { title: "Consultez la clé du haut", description: "Examinez la table de correspondance qui associe chaque symbole géométrique à un chiffre." },
      { title: "Repérez le symbole cible", description: "Observez le symbole cible et trouvez le chiffre correspondant dans la clé." },
      { title: "Appuyez sur le chiffre associé", description: "Appuyez sur le bouton du chiffre correspondant, le plus vite possible et sans erreur." },
      { title: "Mémorisez les paires", description: "En retenant quelques paires, vous répondez sans revenir à la clé à chaque fois." },
    ],
  },
  faqs: {
    title: 'Questions fréquentes',
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
      <SymbolMatchingClient
        copy={{
          title: "Test SDMT symboles et chiffres",
          subtitle: "Trouvez rapidement la correspondance entre symboles et chiffres et entraînez le traitement",
          startTitle: "Appariement symbole-chiffre",
          stageCaption: "Comparez le symbole cible avec la clé supérieure, puis appuyez sur le chiffre correspondant.",
          rulesTitle: "Instructions de l’exercice et score",
          aboutTitle: "Qu’est-ce que le test symboles chiffres ?",
          faqTitle: "Symboles et chiffres : vos questions",
          readyLabel: "PRÉPAREZ-VOUS",
          labels: { score: "Score", time: "Temps", level: "Niveau", bestScore: "Meilleur score", timeLeft: "Temps restant", targetSymbol: "Symbole cible", accuracy: "Précision", hits: "Réussites", misses: "Erreurs", peakLevel: "Niveau maximal" },
          aboutLead: "Une tâche symboles-chiffres demande d’associer des signes à des nombres dans un temps limité. Elle entraîne la vitesse de traitement et la recherche visuelle, pas les connaissances. Cet exercice est un jeu d’entraînement, pas un outil clinique.",
          aboutText: "Le format s’inspire des tâches d’association du SDMT et du DSST. Consultez la clé puis sélectionnez le chiffre correspondant au symbole cible. Les séries répétées travaillent la recherche visuelle, la mémoire associative et la sélection de réponse. Le score concerne uniquement ce jeu et ne constitue pas un diagnostic médical.",
          aboutCards: [
            { title: "À qui s’adresse cet exercice ?", desc: "Aux étudiants, professionnels et joueurs qui souhaitent entraîner vitesse de traitement et recherche visuelle." },
            { title: "Quelles capacités sont entraînées ?", desc: "Recherche visuelle, mémoire associative symbole-chiffre, sélection de réponse et attention soutenue." },
            { title: "Clé renouvelée", desc: "La relation entre symboles et chiffres change à chaque session : il faut consulter activement la clé." }
          ],
          rulesItems: [
            { num: "1", text: "Clé symbole-chiffre", highlight: "6 correspondances", result: "Consulter la clé supérieure" },
            { num: "2", text: "Symbole cible", highlight: "+100 points", result: "Multiplicateurs de combo et niveau" },
            { num: "3", text: "Chiffre incorrect", highlight: "Réinitialise le combo", result: "Temps retiré si la pénalité est active" },
            { num: "4", text: "Série et pénalité", highlight: "Temps·appuis erronés", result: "Active : −0,8 seconde" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
