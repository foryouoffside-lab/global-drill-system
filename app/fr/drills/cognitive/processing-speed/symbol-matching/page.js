import SymbolMatchingClient from '@/app/drills/cognitive/processing-speed/symbol-matching/SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test symboles-chiffres en ligne gratuit | SkillDrills",
  description: "Test symboles-chiffres gratuit : associez chaque symbole à un chiffre à l’aide de la clé affichée et entraînez votre vitesse de traitement.",
  keywords: [
    "test symboles et chiffres",
    "vitesse de traitement cognitif test",
    "substitution symboles chiffres",
    "balayage visuel cognitif",
    "memoire associative test",
    "agilite mentale test gratuit",
    "test attention et rapidite",
    "exercice appariement de symboles",
    "test cognitif de symboles"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test symboles-chiffres en ligne gratuit | SkillDrills",
    description: "Test symboles-chiffres gratuit : associez chaque symbole à un chiffre à l’aide de la clé affichée et entraînez votre vitesse de traitement.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test symboles-chiffres en ligne gratuit | SkillDrills",
    description: "Test symboles-chiffres gratuit : associez chaque symbole à un chiffre à l’aide de la clé affichée et entraînez votre vitesse de traitement.",
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
      "name": "Test symboles-chiffres",
      "item": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test symboles-chiffres en ligne",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu symboles-chiffres gratuit dans le navigateur : associez des symboles à des chiffres avec la clé affichée.",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching",
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
  "name": "Test symboles-chiffres en ligne",
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
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jeu d’appariement symboles et chiffres",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/symbol-matching",
  "description": "Jeu symboles-chiffres gratuit dans le navigateur : associez des symboles à des chiffres avec la clé affichée.",
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
  "dateModified": "2026-11-12",
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
      "name": "Qu’est-ce qu’un test symboles-chiffres ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une clé associe des symboles à des chiffres : on retrouve le plus vite possible le chiffre de chaque symbole affiché. Ici, c’est un jeu d’entraînement, pas un test officiel."
      }
    },
    {
      "@type": "Question",
      "name": "Comment répond-on dans cet exercice ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On regarde le symbole cible, on cherche sa paire dans la clé, puis on appuie sur le chiffre correspondant. Il n’y a rien à écrire ni à dire à voix haute."
      }
    },
    {
      "@type": "Question",
      "name": "Comment lire mon résultat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En fin de partie, vous voyez le score, l’exactitude, les réussites, les erreurs, le niveau maximal et une note de F à S+. Comparez ces valeurs avec vos propres parties précédentes sur le même appareil."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles capacités cet exercice sollicite-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La recherche visuelle, la vitesse de traitement, la mémoire associative symbole-chiffre et l’attention soutenue."
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
      "name": "Comment fonctionnent le chrono et les pénalités ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La partie commence avec 45 secondes. Chaque bon chiffre ajoute 2 secondes (60 au maximum). Un mauvais chiffre, ou un symbole expiré (si Target Timeouts est activé), retire 1 seconde et remet le combo à zéro. Plus le niveau monte, moins vous avez de temps par symbole."
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
      "name": "Que montre le résultat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Score, exactitude, réussites, erreurs, niveau maximal et une note de F à S+ par rapport à une référence fixe de SkillDrills. Ces valeurs ne sont pas comparables aux normes du SDMT."
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
  "description": "Jeu symboles-chiffres gratuit dans le navigateur : associez des symboles à des chiffres avec la clé affichée.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Consultez la clé du haut",
      "text": "Examinez la table de correspondance qui associe chacun des six symboles à un chiffre de 1 à 6.",
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
  sources: pickSources('der2006', 'woods2015'),
  intro: {
    title: "Test symboles-chiffres en ligne : comment fonctionne l’exercice",
    paragraphs: [
      "Ce test symboles-chiffres en ligne est un jeu gratuit : une clé associe des symboles à des chiffres, un symbole cible s’affiche et vous appuyez sur le bon chiffre le plus vite possible pour entraîner la vitesse de traitement.",
      "Cette version n’a pas été étalonnée : son score ne vaut que pour cet exercice.",
      "La tâche sollicite la recherche visuelle, la mémoire associative et la sélection de réponse. La vitesse de traitement ralentit en moyenne avec l’âge (Der & Deary, 2006) ; l’écran et l’appareil ajoutent leur propre délai de mesure (Woods et al., 2015).",
    ],
  },
  benchmarks: {
    title: 'Paliers de l’exercice symboles et chiffres',
    headers: ['Palier', 'Profil', 'Efficacité', 'Exactitude', 'Lecture'],
    rows: [
      { tier: 'Palier 1', rank: 'Très avancé', stat: 'Très rapide', level: 'Palier 1', accuracy: '98%+', marker: 'Réponses très rapides et très exactes' },
      { tier: 'Palier 2', rank: 'Avancé', stat: 'Rapide', level: 'Palier 2', accuracy: '94-97%', marker: 'Réponses rapides et régulières' },
      { tier: 'Palier 3', rank: 'Confirmé', stat: 'Soutenue', level: 'Palier 3', accuracy: '88-93%', marker: 'Bonne cadence avec quelques erreurs' },
      { tier: 'Palier 4', rank: 'Intermédiaire', stat: 'Moyenne', level: 'Palier 4', accuracy: '78-87%', marker: 'Consultation fréquente de la clé' },
      { tier: 'Palier 5', rank: 'Débutant', stat: 'Initiale', level: 'Palier 5', accuracy: '< 78%', marker: 'Point de départ' },
    ],
  },
  protocols: {
    title: 'Quatre conseils pour aller plus vite',
    description: 'Des habitudes simples pour associer symboles et chiffres sans erreur.',
    items: [
      { title: "Consultez la clé du haut", description: "Examinez la table de correspondance qui associe chacun des six symboles à un chiffre de 1 à 6." },
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
          title: "Test symboles-chiffres en ligne",
          subtitle: "Trouvez rapidement la correspondance entre symboles et chiffres et entraînez le traitement",
          startTitle: "Appariement symbole-chiffre",
          startSubtitle: "Symboles-chiffres • Recherche visuelle",
          stageCaption: "Comparez le symbole cible avec la clé supérieure, puis appuyez sur le chiffre correspondant.",
          rulesTitle: "Instructions de l’exercice et score",
          aboutTitle: "Qu’est-ce que le test symboles chiffres ?",
          faqTitle: "Symboles et chiffres : vos questions",
          readyLabel: "PRÉPAREZ-VOUS",
          labels: { score: "Score", time: "Temps", level: "Niveau", bestScore: "Meilleur score", timeLeft: "Temps restant", targetSymbol: "Symbole cible", accuracy: "Précision", hits: "Réussites", misses: "Erreurs", peakLevel: "Niveau maximal" },
          aboutLead: "Une tâche symboles-chiffres demande d’associer des signes à des nombres dans un temps limité. Elle entraîne la vitesse de traitement et la recherche visuelle, pas les connaissances. Cet exercice est un jeu d’entraînement.",
          aboutText: "Le format s’inspire des tâches d’association symboles-chiffres. Consultez la clé puis sélectionnez le chiffre correspondant au symbole cible. Les séries répétées travaillent la recherche visuelle, la mémoire associative et la sélection de réponse. Le score concerne uniquement ce jeu.",
          aboutCards: [
            { title: "À qui s’adresse cet exercice ?", desc: "Aux étudiants, professionnels et joueurs qui souhaitent entraîner vitesse de traitement et recherche visuelle." },
            { title: "Quelles capacités sont entraînées ?", desc: "Recherche visuelle, mémoire associative symbole-chiffre, sélection de réponse et attention soutenue." },
            { title: "Clé renouvelée", desc: "La relation entre symboles et chiffres change à chaque session : il faut consulter activement la clé." }
          ],
          rulesItems: [
            { num: "1", text: "Clé symbole-chiffre", highlight: "6 correspondances", result: "Consulter la clé supérieure" },
            { num: "2", text: "Symbole cible", highlight: "+100 points", result: "Combo × niveau, +2 s (max. 60 s)" },
            { num: "3", text: "Chiffre incorrect", highlight: "Réinitialise le combo", result: "−1 seconde" },
            { num: "4", text: "Délai dépassé", highlight: "Fenêtre plus courte", result: "−1 s et combo perdu" }
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
