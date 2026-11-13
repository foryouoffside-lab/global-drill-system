import WordRecallClient from '@/app/drills/memory/short-term-memory/word-recall/WordRecallClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  title: "Test de mémoire des mots en ligne | Mémoire | SkillDrills",
  description: "Test de mémoire des mots gratuit : une liste s’affiche 2 secondes, puis tapez les mots retenus dans n’importe quel ordre. De 3 à 12 mots, en 45 s.",
  keywords: [
    "test mémoire des mots",
    "test de mémoire verbale",
    "rappel libre de mots",
    "retenir une liste de mots",
    "mémoire verbale à court terme",
    "effet de primauté et récence",
    "rappel de mots test",
    "mémoire des listes de mots",
    "exercice mémoire verbale",
    "mémoire de travail verbale",
    "test de mémoire gratuit",
    "regroupement sémantique",
    "mémoriser des mots"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/word-recall'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de mémoire des mots en ligne | Mémoire | SkillDrills",
    description: "Test de mémoire des mots gratuit : une liste s’affiche 2 secondes, puis tapez les mots retenus dans n’importe quel ordre. De 3 à 12 mots, en 45 s.",
    url: "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de mémoire des mots en ligne | Mémoire | SkillDrills",
    description: "Test de mémoire des mots gratuit : une liste s’affiche 2 secondes, puis tapez les mots retenus dans n’importe quel ordre. De 3 à 12 mots, en 45 s.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Entraînements de mémoire", "item": "https://skilldrills.online/fr/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Mémoire à court terme", "item": "https://skilldrills.online/fr/drills/memory/short-term-memory" },
    { "@type": "ListItem", "position": 4, "name": "Test de mémoire des mots", "item": "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall" }
  ]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de mémoire des mots en ligne",
  "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "description": "Exercice gratuit de mémoire des mots : une liste s’affiche 2 secondes, puis vous tapez les mots retenus dans n’importe quel ordre. Ce n’est pas un test clinique."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de mémoire des mots en ligne",
  "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "sameAs": ["https://fr.wikipedia.org/wiki/M%C3%A9moire_%C3%A0_court_terme"],
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de mémoire des mots – rappel libre",
  "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall",
  "description": "Jeu de rappel libre : retenez une liste de mots affichée 2 secondes et retapez-les dans n’importe quel ordre. Départ à 3 mots, un de plus à chaque réussite.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Verbal Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment passer le test de mémoire des mots",
  "description": "Quatre étapes pour retenir une liste affichée 2 secondes et retaper les mots (séance de 45 secondes).",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall#step-1",
      "name": "Regardez la liste 2 secondes",
      "text": "Toute la liste s’affiche d’un bloc pendant 2 secondes. Lisez-la rapidement."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall#step-2",
      "name": "Reliez-les dans une scène",
      "text": "Imaginez tous les mots ensemble dans une courte scène."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall#step-3",
      "name": "Tapez d’abord les derniers mots",
      "text": "Quand le champ apparaît, tapez d’abord les derniers mots lus. L’ordre n’a pas d’importance."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/word-recall#step-4",
      "name": "Validez en moins de 12 secondes",
      "text": "Séparez les mots par des espaces ou des virgules et validez avec Entrée. Vous avez 12 secondes."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment fonctionne ce test de mémoire des mots ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une liste de mots s’affiche d’un bloc pendant 2 secondes. Ensuite, en 12 secondes maximum, vous tapez tous les mots retenus, séparés par des espaces ou des virgules, et validez avec Entrée. L’ordre est libre (rappel libre). On commence à 3 mots ; si tous sont justes sans mot en trop, la liste suivante gagne un mot (12 maximum), sinon elle en perd un (3 minimum). La séance dure 45 secondes."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le score est-il calculé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seules les manches où vous tapez tous les mots de la liste, sans mot en trop, rapportent des points : 150 × (1 + 0,15 × (mots − 3)). 3 mots = 150 points, 12 mots = environ 353. Une erreur ne coûte ni points ni temps, seulement un mot de longueur."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de mots retient-on en moyenne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SkillDrills ne collecte pas de données d’utilisateurs et ne donne donc ni moyenne ni percentile. Avec 2 secondes d’affichage et 12 secondes de saisie, ce jeu n’est pas comparable aux tests cliniques de mémoire de mots. Utilisez les paliers ci-dessous et vos propres records."
      }
    },
    {
      "@type": "Question",
      "name": "Le test prend-il en compte les fautes de frappe ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque mot doit correspondre exactement à celui de la liste (majuscules et accents ignorés). Une faute de frappe compte comme un mot en trop et le bon mot comme oublié : la manche est perdue."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence entre rappel libre et reconnaissance ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En rappel libre, vous retrouvez les mots en mémoire sans indice ; en reconnaissance, vous choisissez parmi des propositions ce que vous avez vu. Ce test utilise le rappel libre, plus difficile."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce que l’effet de position sérielle (Murdock, 1962) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les mots du début (primauté) et de la fin (récence) d’une liste sont mieux retenus que ceux du milieu (Murdock, 1962). Ici tous les mots s’affichent ensemble : c’est votre ordre de lecture qui joue ce rôle."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi relier les mots dans une scène aide-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Penser au sens des mots ou les relier entre eux les fait traiter plus en profondeur et mieux retenir (niveaux de traitement, Craik & Lockhart, 1972). Avec seulement 2 secondes, une scène simple est plus réaliste qu’une longue histoire."
      }
    },
    {
      "@type": "Question",
      "name": "L’ordre de saisie compte-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. La manche est réussie si tous les mots de la liste sont présents, dans n’importe quel ordre. Tapez de préférence d’abord les derniers mots lus."
      }
    },
    {
      "@type": "Question",
      "name": "S’entraîner améliore-t-il la mémoire au quotidien ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rien n’est garanti. On progresse en général dans ce jeu précis, mais le transfert à la mémoire du quotidien reste discuté dans la recherche. Ce test n’est pas un outil de diagnostic ; en cas d’inquiétude, consultez un médecin."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test est-il gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, gratuit, sans compte ni installation. Vos records restent uniquement dans le navigateur."
      }
    }
  ]
};

const wordRecallGuide = {
  heading: "Guide du test de mémoire des mots (rappel libre)",
  intro: [
    "Le test de mémoire des mots affiche brièvement une liste, puis vous tapez dans n’importe quel ordre les mots retenus. C’est une version d’entraînement du rappel libre étudié en psychologie de la mémoire, pas un test clinique ni un outil de diagnostic.",
    "La recherche sur les listes de mots remonte à Hermann Ebbinghaus (1885). Bennet Murdock (1962) a décrit l’effet de position sérielle en rappel libre — le début et la fin d’une liste sont mieux retenus — et Endel Tulving (1962) a montré que l’on regroupe spontanément les mots.",
    "Selon les niveaux de traitement (Craik & Lockhart, 1972), les mots traités par leur sens ou reliés entre eux sont en général mieux retenus. Avec l’affichage court de ce jeu, relier vite les mots dans une scène aide.",
    "Déroulement : départ à 3 mots ; la liste s’affiche d’un bloc pendant 2 secondes. Vous avez ensuite 12 secondes pour taper les mots, séparés par des espaces ou des virgules, et valider avec Entrée. Tous justes sans mot en trop : un mot de plus (12 max) ; un oubli, un mot faux ou le délai dépassé : un de moins (3 min). Le jeu enregistre le score, la plus longue liste et la précision (part de manches réussies) ; le temps de réaction n’est pas mesuré.",
    "Transparence : SkillDrills ne collecte pas vos résultats sur un serveur ; tout reste dans le localStorage de votre navigateur. Cette page ne donne donc ni moyenne d’utilisateurs, ni percentile, ni nombre d’utilisateurs ; les études citées figurent plus bas.",
    "Avertissement : ce jeu d’entraînement n’est ni un dispositif médical ni un outil de diagnostic. En cas d’inquiétude sur votre mémoire, consultez un médecin."
  ],
  benchmarks: {
    title: "Paliers d’entraînement du test de mémoire des mots (SkillDrills, 45 s)",
    headers: ["Palier", "Mots atteints", "Score sans erreur jusque-là", "Stratégie typique"],
    rows: [
      ["Palier 1", "12 mots", "env. 2 160+", "Relie toute la liste dans une scène immédiatement"],
      ["Palier 2", "10–11 mots", "env. 1 520–2 159", "Regroupe par sens, par 2 ou 3"],
      ["Palier 3", "8–9 mots", "env. 980–1 519", "Retient le début et la fin, perd le milieu"],
      ["Palier 4", "6–7 mots", "env. 520–979", "Lit et retient mot par mot"],
      ["Palier 5", "3–5 mots", "moins de 520", "Découverte de l’affichage de 2 s et de la saisie"]
    ],
    note: "Paliers d’entraînement SkillDrills, pas des normes de population. Le score correspond à un parcours sans erreur depuis 3 mots jusqu’à cette longueur (points par manche = 150 × (1 + 0,15 × (mots − 3))). En 45 secondes on joue peu de manches et les erreurs raccourcissent la liste : les scores réels varient."
  },
  techniques: {
    title: "4 stratégies pour retenir plus de mots",
    items: [
      {
        name: "Une seule scène",
        desc: "Placez tous les mots dans une image (par ex. « rivière », « bougie », « dragon » → un dragon tenant une bougie au-dessus d’une rivière). Relier par le sens approfondit le traitement (Craik & Lockhart, 1972).",
        tips: "Gardez la scène simple pour la construire en 2 secondes."
      },
      {
        name: "Regrouper par catégories",
        desc: "Rassemblez les mots proches : animaux, lieux, objets. On regroupe naturellement les mots (Tulving, 1962).",
        tips: "Au moment de taper, rappelez-les catégorie par catégorie."
      },
      {
        name: "Les derniers d’abord",
        desc: "Les mots lus en dernier s’effacent vite (récence). Tapez-les en premier, puis retrouvez le début et le milieu (Murdock, 1962).",
        tips: "L’ordre de saisie n’influence pas le score."
      },
      {
        name: "Attention aux fautes de frappe",
        desc: "Une faute de frappe compte comme mot faux et fait perdre toute la manche. Taper avec précision dans les 12 secondes est essentiel.",
        tips: "Deviner un mot absent de la liste fait aussi perdre la manche."
      }
    ]
  },
  steps: [
    "Lancez la séance de 45 secondes et regardez la zone des mots au centre.",
    "Lisez vite la liste affichée 2 secondes et reliez les mots dans une scène.",
    "Dans le champ de saisie, tapez d’abord les derniers mots lus.",
    "Tapez tous les mots, séparés par des espaces ou des virgules, en moins de 12 secondes et validez avec Entrée.",
    "Les réussites allongent la liste, les erreurs la raccourcissent : comparez votre score et votre plus longue liste à vos propres records."
  ],
  audience: "Étudiants, professionnels et curieux qui veulent voir combien de mots ils retiennent.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('craik1972', 'murdock1962', 'tulving1962'),
  related: [
    { href: "/fr/drills/memory/short-term-memory/digit-span", label: "Test d Empan de Chiffres" },
    { href: "/fr/drills/memory/short-term-memory/color-sequence", label: "Jeu de couleurs façon Simon" },
    { href: "/fr/drills/memory/spatial-memory/grid-memorization", label: "Memoire Spatiale sur Grille" },
    { href: "/fr/drills/memory/working-memory/n-back", label: "Test Dual N-Back" }
  ]
};

export default function FrenchWordRecallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <WordRecallClient copy={{
        h1Keyword: "Test de mémoire des mots",
        h1Suffix: " – Rappel libre",
        subtitle: "Mémorisez des mots et rappelez-les librement",
        wordsLabel: "Mots",
        scoreLabel: "Score",
        timeLeftLabel: "Temps",
        recallTitle: "RESTITUEZ LES MOTS",
        memorizeTitle: "MÉMORISEZ LA LISTE",
        evaluating: "Évaluation...",
        startTitle: "Test de mémoire des mots",
        startSubtitle: "Mémoire verbale • rappel libre de mots",
        countdownSubtitle: "PRÉPAREZ-VOUS",
        newBest: "NOUVEAU RECORD",
        pointsLabel: "Points",
        statAccuracy: "Précision",
        statPeakWords: "Mots Max",
        statPerfects: "Parfaits",
        btnPlayAgain: "Rejouer",
        rulesTitle: "Règles de l’exercice et barème",
        aboutTitle: "À propos du test de mémoire des mots",
        rulesItems: [
          {
            num: "1",
            text: "Rappel de Liste",
            highlight: "+150 PTS",
            result: "Retenez les mots affichés 2 s et tapez-les en 12 s, dans n’importe quel ordre"
          },
          {
            num: "2",
            text: "Bonus de Niveau",
            highlight: "Jusqu’à +135 %",
            result: "Manche = 150 × (1 + 0,15 × (mots − 3)) points"
          },
          {
            num: "3",
            text: "Erreur / temps écoulé",
            highlight: "-1 Mot",
            result: "Oubli, mot faux ou 12 s dépassées : ni points ni temps perdus, un mot de moins"
          },
          {
            num: "4",
            text: "Ampleur Adaptative",
            highlight: "Ajustement continu",
            result: "Tous justes +1 mot, erreur −1 mot (3 à 12)"
          }
        ],
        wordBank: [
          "pomme", "pont", "chateau", "diamant", "aigle", "foret", "jardin", "marteau",
          "ile", "jungle", "chevalier", "lanterne", "montagne", "aiguille", "ocean",
          "palais", "reine", "fusee", "couchant", "temple", "parapluie", "vallee",
          "fenetre", "zebre", "navire", "flamme", "riviere", "horloge", "miroir", "etoile"
        ]
      }} />
      <DrillGuide guide={wordRecallGuide} />
      <RelatedDrills />
    </>
  );
}
