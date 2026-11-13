import DividedAttentionClient from '@/app/drills/cognitive/attention/divided-attention/DividedAttentionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test d’attention divisée | Double tâche | SkillDrills",
  description: "Test d’attention divisée gratuit : cliquez les cibles qui apparaissent et validez en même temps les nombres pairs. Exercice de double tâche, non clinique.",
  keywords: [
    "test attention divisee",
    "attention partagee exercices",
    "test double tache en ligne",
    "entrainement attention divisee",
    "periode refractaire psychologique",
    "goulot d etranglement cognitif",
    "test attention partagee gratuit",
    "multitache cognitif test",
    "poursuite visuelle et calcul",
    "exercice double concentration",
    "entrainement double tache"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test d’attention divisée | Double tâche | SkillDrills",
    description: "Test d’attention divisée gratuit : cliquez les cibles qui apparaissent et validez en même temps les nombres pairs. Exercice de double tâche, non clinique.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/cognitive/attention/divided-attention',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test d’attention divisée | Double tâche | SkillDrills",
    description: "Test d’attention divisée gratuit : cliquez les cibles qui apparaissent et validez en même temps les nombres pairs. Exercice de double tâche, non clinique.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/cognitive/attention/divided-attention',
    languages: getAlternateLanguages('/drills/cognitive/attention/divided-attention'),
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
      "name": "Attention Divisée et Double Tâche",
      "item": "https://skilldrills.online/fr/drills/cognitive/attention/divided-attention"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Divided_attention"],
  "name": "Test d Attention Divisée – Double Tâche",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Test d’attention divisée gratuit : cliquez les cibles qui apparaissent et validez en même temps les nombres pairs. Exercice de double tâche, non clinique.",
  "url": "https://skilldrills.online/fr/drills/cognitive/attention/divided-attention",
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
  "name": "Test d Attention Divisée en Ligne",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Nécessite un navigateur moderne avec support JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/cognitive/attention/divided-attention",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jeu de Double Focalisation et Multitâche",
  "url": "https://skilldrills.online/fr/drills/cognitive/attention/divided-attention",
  "description": "Test d’attention divisée gratuit : cliquez les cibles qui apparaissent et validez en même temps les nombres pairs. Exercice de double tâche, non clinique.",
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
      "name": "Qu'est-ce que l'attention divisée et que mesure ce test ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'attention divisée consiste à suivre deux sources d'information à la fois. Ici, vous cliquez les cibles bleues qui apparaissent à des endroits aléatoires et vous appuyez sur « Valider » quand le chiffre (0 à 9) du panneau latéral est pair. C'est un exercice d'entraînement, pas un test clinique."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que la Période Réfractaire Psychologique (PRP, Pashler 1994) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La PRP est le retard de la seconde réponse lorsqu'un second stimulus arrive peu après le premier, attribué à un goulot d'étranglement central dans la sélection de la réponse."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'apporte la Théorie des Ressources Multiples de Wickens (2002) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon Wickens, l'attention se partage plus facilement lorsque les deux tâches mobilisent des canaux sensoriels et des codes distincts (par exemple spatial-visuel et numérique)."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on améliorer sa capacité de double tâche par l'exercice ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Votre score dans cet exercice peut progresser avec la pratique, mais un transfert vers d'autres tâches ou la vie quotidienne n'est pas garanti. Spelke et al. (1976) ont observé qu'une longue pratique peut améliorer la réalisation simultanée de deux tâches."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi associer cibles spatiales et classement de nombres ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les deux tâches utilisent des codes différents : repérer une position à l'écran d'un côté, appliquer une règle (pair ou impair) à un chiffre de l'autre. C'est la situation décrite par la théorie des ressources multiples."
      }
    },
    {
      "@type": "Question",
      "name": "Quel lien avec l'esport ou la conduite ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'exercice reproduit la charge de surveiller deux flux à la fois, comme la mini-carte et l'action en jeu, ou la route et le tableau de bord. Il ne garantit aucune amélioration en compétition ou au volant."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le score et la note sont-ils calculés ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque bonne réponse rapporte 100 points de base multipliés par le combo et le niveau. La note dépend du score, 24 000 points correspondant à la meilleure note ; la précision est affichée à part. Ce sont des repères de pratique SkillDrills, pas des statistiques de population."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure une partie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le chrono démarre à 45 secondes : +2 s par bonne réponse (60 s maximum), −1 s par erreur ou cible manquée. La partie continue jusqu'à 0 ; quand le score monte, le niveau augmente, les stimuli changent plus vite et les cibles rétrécissent."
      }
    },
    {
      "@type": "Question",
      "name": "Que compte comme une erreur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appuyer sur « Valider » pour un nombre impair, appuyer deux fois sur le même nombre, laisser disparaître une cible ou laisser passer un nombre pair. Chaque erreur déclenche un flash rouge, remet le combo à zéro et retire 1 seconde."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test d'attention divisée est-il entièrement gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, SkillDrills met cet outil à votre disposition de façon 100% gratuite et directement dans votre navigateur web, sans téléchargement."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment Réaliser le Test d Attention Divisée",
  "description": "Test d’attention divisée gratuit : cliquez les cibles qui apparaissent et validez en même temps les nombres pairs. Exercice de double tâche, non clinique.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Cliquez la Cible Bleue",
      "text": "Cliquez ou touchez la cible bleue qui apparaît à un endroit aléatoire avant qu'elle ne disparaisse : +2 s par cible touchée (60 s maximum).",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/divided-attention#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Analysez le Flux de Chiffres",
      "text": "Surveillez le panneau latéral : si le chiffre affiché est pair (0, 2, 4, 6, 8), appuyez sur « Valider » ; s'il est impair, ne faites rien.",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/divided-attention#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Répondez à la Souris ou au Toucher",
      "text": "Les deux tâches se jouent au clic ou au toucher (aucune touche du clavier, sauf Échap pour quitter).",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/divided-attention#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Équilibrez la Performance Globale",
      "text": "Ne privilégiez pas une tâche au détriment de l'autre : sans erreur, le multiplicateur de combo augmente ; chaque erreur le remet à zéro et coûte 1 seconde.",
      "url": "https://skilldrills.online/fr/drills/cognitive/attention/divided-attention#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('pashler1994', 'wickens2002', 'strayer2001', 'spelke1976', 'woods2015'),
  intro: {
    title: "Test d’attention divisée : guide",
    paragraphs: [
      "Ce test d’attention divisée gratuit vous fait gérer deux tâches à la fois : cliquer les cibles qui apparaissent et valider les nombres pairs. C’est une auto-évaluation non clinique.",
      "Les travaux de Harold Pashler (1994) sur la période réfractaire psychologique (PRP) décrivent un goulot d’étranglement central : quand deux réponses doivent être choisies presque en même temps, la seconde est retardée.",
      "En s’inspirant de la théorie des ressources multiples de Christopher Wickens (2002), l’exercice associe une tâche spatiale (cliquer la cible) à une tâche numérique (pair ou impair).",
    ],
  },
  benchmarks: {
    title: 'Paliers de pratique SkillDrills (précision)',
    headers: ['Niveau', 'Rang', 'Performance', 'Exactitude', 'Repère de pratique'],
    note: "Paliers éditoriaux de pratique pour comparer vos propres séances ; ce ne sont pas des statistiques de population ni des normes cliniques.",

    rows: [
      { tier: 'Palier 1', rank: 'Très avancé', stat: 'Rythme très élevé', accuracy: '98%+', marker: 'Rythme très élevé et précis' },
      { tier: 'Palier 2', rank: 'Avancé', stat: 'Rythme élevé', accuracy: '94-97%', marker: 'Rythme élevé et régulier' },
      { tier: 'Palier 3', rank: 'Solide', stat: 'Rythme stable', accuracy: '88-93%', marker: 'Rythme stable avec quelques erreurs' },
      { tier: 'Palier 4', rank: 'En progression', stat: 'Rythme moyen', accuracy: '78-87%', marker: 'Rythme moyen avec marge de progression' },
      { tier: 'Palier 5', rank: 'Initial', stat: 'Rythme initial', accuracy: '< 78%', marker: 'Point de départ' },
    ],
  },
  protocols: {
    title: 'Protocoles d Entraînement en Double Tâche',
    description: 'Les étapes d’une partie, pour gérer les deux canaux sans perdre le combo.',
    items: [
      { title: "Cliquez la Cible Bleue", description: "Cliquez ou touchez la cible bleue qui apparaît à un endroit aléatoire avant qu'elle ne disparaisse : +2 s par cible touchée (60 s maximum)." },
      { title: "Analysez le Flux de Chiffres", description: "Surveillez le panneau latéral : si le chiffre affiché est pair (0, 2, 4, 6, 8), appuyez sur « Valider » ; s'il est impair, ne faites rien." },
      { title: "Répondez à la Souris ou au Toucher", description: "Les deux tâches se jouent au clic ou au toucher (aucune touche du clavier, sauf Échap pour quitter)." },
      { title: "Équilibrez la Performance Globale", description: "Ne privilégiez pas une tâche au détriment de l'autre : sans erreur, le multiplicateur de combo augmente ; chaque erreur le remet à zéro et coûte 1 seconde." },
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
      <DividedAttentionClient copy={{
        title: "Test d’attention divisée", subtitle: "Cliquez une cible et classez des nombres en parallèle",
        statScore: "Points", statTime: "Temps", timeLeft: "Temps restant", statLevel: "Niveau", statBest: "Meilleur score",
        match: "Valider", evenNumbers: "NOMBRES PAIRS", tapEven: "Appuyez pour un pair", startTitle: "Test d’attention divisée", startSubtitle: "Double tâche · changement de focus",
        getReady: "Préparez-vous", dualAccuracy: "Précision globale", hits: "Réussites", misses: "Erreurs", peakLevel: "Niveau maximal",
        caption: "Cliquez la cible qui apparaît et classez simultanément les nombres pairs du flux latéral.",
        rulesTitle: "Consignes et score", ruleItems: [
          { text: "Touchez la cible", highlight: "+100 PTS", result: "Cible cliquée : +2 s (max 60 s)" },
          { text: "Classez les pairs", highlight: "Bonne réponse", result: "Appuyez si le nombre est pair" },
          { text: "Ignorez les impairs", highlight: "Sans erreur", result: "Ne touchez pas aux impairs" },
          { text: "Erreur / oubli", highlight: "Combo perdu", result: "−1 s" },
        ],
        aboutTitle: "À propos de l’attention divisée et de la double tâche", aboutLead: "Cet auto-test cognitif non clinique associe clic sur cible et classement numérique pour observer la stabilité des deux canaux.",
        audienceTitle: "Pour qui", audienceText: "Pour les joueurs qui surveillent une mini-carte et une cible, les apprenants et les personnes qui traitent plusieurs entrées rapidement.",
        skillsTitle: "Compétences travaillées", skillsText: "Traitement en double tâche, suivi visuel, décision numérique et partage de l’attention.", flexibilityTitle: "Traitement parallèle", flexibilityText: "Passez d’un flux à l’autre sans laisser la précision d’un canal s’effondrer."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
