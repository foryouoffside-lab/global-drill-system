import DigitSpanClient from '@/app/drills/memory/short-term-memory/digit-span/DigitSpanClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  title: "Test d’empan de chiffres en ligne | Mémoire | SkillDrills",
  description: "Test d’empan de chiffres en ligne gratuit : retenez une suite de chiffres affichée brièvement et retapez-la dans l’ordre. Départ à 3 chiffres, jusqu’à 15.",
  keywords: [
    "test empan de chiffres",
    "empan de chiffres en ligne",
    "test mémoire des chiffres",
    "empan numérique",
    "test de mémoire numérique",
    "rétention de chiffres",
    "mémoire de travail chiffres",
    "mémoire à court terme chiffres",
    "test de chiffres gratuit",
    "span de chiffres",
    "boucle phonologique",
    "empan mnésique",
    "répéter une suite de chiffres",
    "test neuropsychologique chiffres",
    "regroupement des chiffres"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/digit-span'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test d’empan de chiffres en ligne | Mémoire | SkillDrills",
    description: "Test d’empan de chiffres en ligne gratuit : retenez une suite de chiffres affichée brièvement et retapez-la dans l’ordre. Départ à 3 chiffres, jusqu’à 15.",
    url: "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test d’empan de chiffres en ligne | Mémoire | SkillDrills",
    description: "Test d’empan de chiffres en ligne gratuit : retenez une suite de chiffres affichée brièvement et retapez-la dans l’ordre. Départ à 3 chiffres, jusqu’à 15.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Entraînements de mémoire", "item": "https://skilldrills.online/fr/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Mémoire à court terme", "item": "https://skilldrills.online/fr/drills/memory/short-term-memory" },
    { "@type": "ListItem", "position": 4, "name": "Test d’empan de chiffres", "item": "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span" }
  ]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test d’empan de chiffres en ligne",
  "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "description": "Exercice gratuit de mémoire des chiffres : une suite de chiffres s’affiche brièvement, puis vous la retapez dans le même ordre. Ce n’est pas un test clinique."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test d’empan de chiffres en ligne",
  "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "sameAs": ["https://fr.wikipedia.org/wiki/Empan"],
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test d’empan de chiffres – mémoire des chiffres",
  "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span",
  "description": "Jeu de mémoire des chiffres : retenez une suite affichée d’un bloc et retapez-la dans l’ordre. Départ à 3 chiffres, un de plus à chaque réussite.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Working Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment passer le test d’empan de chiffres",
  "description": "Quatre étapes pour retenir une suite de chiffres et la retaper dans le même ordre (séance de 45 secondes).",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span#step-1",
      "name": "Lisez la suite d’un coup d’œil",
      "text": "Toute la suite s’affiche d’un bloc : 2,5 secondes au départ, puis 0,1 seconde de moins après chaque réussite (0,8 seconde minimum)."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span#step-2",
      "name": "Regroupez les chiffres",
      "text": "Découpez la suite en blocs de 2 ou 3 chiffres, comme un numéro de téléphone (par exemple « 739-281 »)."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span#step-3",
      "name": "Répétez mentalement",
      "text": "Une fois la suite effacée, répétez les blocs dans votre tête (boucle phonologique) jusqu’à la saisie."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/fr/drills/memory/short-term-memory/digit-span#step-4",
      "name": "Saisissez en moins de 8 secondes",
      "text": "Tapez les chiffres dans le même ordre sur le pavé à l’écran ou avec les touches numériques du clavier, puis validez avec Entrée. Retour arrière efface un chiffre."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment fonctionne ce test d’empan de chiffres ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une suite de chiffres aléatoires s’affiche brièvement d’un seul bloc, puis vous la retapez dans le même ordre (empan direct). On commence à 3 chiffres ; une réussite ajoute 1 chiffre (15 maximum), une erreur ou 8 secondes sans valider en retire 1 (3 minimum). La séance dure 45 secondes."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est l’empan de chiffres moyen ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans la recherche, Miller (1956) parlait d’environ 7 ± 2 éléments ; sans répétition ni regroupement, Cowan (2001) situe la capacité plutôt autour de 4. SkillDrills ne collecte pas de données d’utilisateurs et ne donne donc ni moyenne ni percentile pour ce jeu, dont le chronomètre et l’adaptation automatique empêchent une comparaison directe. Utilisez les paliers ci-dessous et vos propres records."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce que la boucle phonologique selon Baddeley (1974) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans le modèle de Baddeley et Hitch, la boucle phonologique garde les chiffres sous forme sonore et les rafraîchit par répétition intérieure. Sans répétition, la trace s’estompe en 2 secondes environ : commencez à répéter dès que la suite disparaît."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le chunking aide-t-il à retenir les chiffres ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En regroupant les chiffres comme un numéro de téléphone (« 839-241 »), vous retenez 6 chiffres sous forme de 2 blocs. Moins d’unités à garder en tête, c’est plus facile de tenir une longue suite."
      }
    },
    {
      "@type": "Question",
      "name": "Y a-t-il aussi un empan inverse (à rebours) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non, ce test ne propose que l’empan direct. L’empan inverse oblige à retourner la suite mentalement et sollicite davantage la mémoire de travail ; il n’est pas proposé ici. Ce jeu n’est pas non plus le sous-test de la WAIS et ne calcule ni QI ni note standard."
      }
    },
    {
      "@type": "Question",
      "name": "L’entraînement régulier améliore-t-il l’empan ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rien n’est garanti. Avec de la pratique, on progresse en général dans ce jeu précis ; le transfert à la mémoire du quotidien ou aux études reste discuté dans la recherche. En cas d’inquiétude sur votre mémoire, consultez un médecin."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne le système adaptatif du test ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une réussite ajoute un chiffre, une erreur en retire un (1-up/1-down) : la longueur oscille autour de votre limite du moment. Le temps d’affichage baisse aussi de 0,1 s après une réussite et augmente de 0,2 s après une erreur (entre 0,8 et 2,5 s)."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le score est-il calculé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une suite correcte rapporte 100 × (1 + 0,1 × (chiffres − 3)) points : 100 points à 3 chiffres, 220 à 15 chiffres. Une erreur ne coûte ni points ni temps, seulement un chiffre de longueur."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on utiliser le clavier ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Les touches 0 à 9 du clavier saisissent les chiffres, Retour arrière ou Suppr efface, Entrée valide. Sur mobile, utilisez le pavé numérique affiché à l’écran."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test d’empan est-il gratuit et anonyme ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, il est gratuit, sans compte ni installation. Vos records restent uniquement dans le stockage local de votre navigateur."
      }
    }
  ]
};

const digitSpanGuide = {
  heading: "Guide du test d’empan de chiffres et de la mémoire de travail",
  intro: [
    "Le test d’empan de chiffres affiche brièvement une suite de chiffres que vous retapez ensuite dans le même ordre. C’est une version d’entraînement de la tâche d’empan (digit span) utilisée depuis longtemps en psychologie pour étudier la mémoire à court terme, pas un test clinique ni un test de QI.",
    "La question de l’empan a été popularisée par le « nombre magique 7 ± 2 » de George A. Miller (1956). Une épreuve proche figure dans l’échelle de Wechsler (WAIS), mais ce jeu n’est pas ce sous-test et ne calcule pas de note standard.",
    "Dans le modèle d’Alan Baddeley (Baddeley & Hitch, 1974 ; Baddeley, 2000), les suites de chiffres sont maintenues par la boucle phonologique et s’estompent en 2 secondes environ sans répétition. Selon Nelson Cowan (2001), la capacité brute sans répétition ni regroupement tourne autour de 4 unités : pour les longues suites, le chunking aide.",
    "Déroulement : départ à 3 chiffres ; la suite s’affiche d’un bloc (2,5 s au début, 0,1 s de moins après chaque réussite jusqu’à 0,8 s, 0,2 s de plus après une erreur). Vous avez ensuite 8 secondes pour la saisir au pavé ou au clavier. Réussite : un chiffre de plus (15 max) ; erreur ou délai dépassé : un de moins (3 min). Le jeu enregistre le score, la plus longue suite et la précision (part de manches réussies) ; le temps de réaction n’est pas mesuré.",
    "Transparence : SkillDrills ne collecte pas vos scores sur un serveur ; tout reste dans le localStorage de votre navigateur. Cette page ne donne donc ni moyenne d’utilisateurs, ni percentile, ni nombre d’utilisateurs ; les chiffres cités viennent des études listées plus bas.",
    "Avertissement : ce jeu d’entraînement n’est ni un dispositif médical ni un outil de diagnostic. En cas d’inquiétude sur votre mémoire, consultez un médecin ou un neuropsychologue."
  ],
  benchmarks: {
    title: "Paliers d’entraînement du test d’empan de chiffres (SkillDrills, 45 s)",
    headers: ["Palier", "Longueur atteinte", "Score sans erreur jusque-là", "Stratégie typique"],
    rows: [
      ["Palier 1", "13 chiffres et plus", "env. 1 450+", "Blocs de 3-4 chiffres et répétition intérieure rapide"],
      ["Palier 2", "11–12 chiffres", "env. 1 080–1 449", "Blocs de 3 stables"],
      ["Palier 3", "9–10 chiffres", "env. 750–1 079", "Regroupe par 2 ou 3 mais perd souvent les chiffres du milieu"],
      ["Palier 4", "7–8 chiffres", "env. 460–749", "Répète les chiffres un à un, sans regroupement"],
      ["Palier 5", "3–6 chiffres", "moins de 460", "Découverte des règles et du rythme d’affichage"]
    ],
    note: "Paliers d’entraînement SkillDrills, ni normes de population ni notes WAIS. Le score correspond à un parcours sans erreur depuis 3 chiffres jusqu’à cette longueur (points par suite = 100 × (1 + 0,1 × (chiffres − 3))) ; les erreurs raccourcissent la suite, donc les scores réels varient."
  },
  techniques: {
    title: "4 stratégies pour allonger son empan de chiffres",
    items: [
      {
        name: "Blocs rythmés de 3 chiffres",
        desc: "Découpez la suite comme un numéro de téléphone (« 739 - 281 - 405 » ; Miller, 1956) : 9 chiffres deviennent 3 blocs.",
        tips: "Accentuez légèrement le premier chiffre de chaque bloc pour bien marquer les frontières."
      },
      {
        name: "Répétition intérieure rapide",
        desc: "Faites tourner les blocs dans votre tête (boucle phonologique ; Baddeley, 2000). La trace s’estompe en 2 secondes environ : commencez dès que la suite disparaît.",
        tips: "Prononcez chaque bloc comme un seul mot plutôt que chiffre par chiffre."
      },
      {
        name: "Visualiser le trajet sur le pavé",
        desc: "Transformez la suite en trajet du doigt sur le pavé numérique (Logie, 1995) pour ajouter une trace spatiale à la trace sonore.",
        tips: "Pendant l’affichage, dessinez mentalement la ligne qui relie les touches."
      },
      {
        name: "Protéger le milieu (effet de position sérielle)",
        desc: "Le début et la fin se retiennent mieux ; ce sont les chiffres du milieu qui tombent le plus souvent. Concentrez la répétition sur les blocs centraux.",
        tips: "Fixez tout de suite les 3 premiers chiffres et laissez les 2 derniers à la mémoire immédiate."
      }
    ]
  },
  steps: [
    "Lancez la séance de 45 secondes et regardez le centre de l’écran.",
    "Dès que la suite apparaît, découpez-la en blocs de 2 ou 3 chiffres.",
    "Après l’effacement, répétez les blocs mentalement.",
    "Saisissez les chiffres dans l’ordre en moins de 8 secondes et validez avec Entrée.",
    "Les réussites allongent la suite, les erreurs la raccourcissent : comparez votre score et votre plus longue suite à vos propres records."
  ],
  audience: "Étudiants, professionnels et curieux qui veulent voir combien de chiffres ils retiennent et s’exercer à la mémoire de travail.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995'),
  related: [
    { href: "/fr/drills/memory/short-term-memory/color-sequence", label: "Jeu Simon des Couleurs" },
    { href: "/fr/drills/memory/short-term-memory/word-recall", label: "Test de Memoire Verbale" },
    { href: "/fr/drills/memory/spatial-memory/grid-memorization", label: "Memoire Spatiale sur Grille" },
    { href: "/fr/drills/memory/spatial-memory/object-location", label: "Localisation d Objets" },
    { href: "/fr/drills/memory/working-memory/n-back", label: "Test Dual N-Back" }
  ]
};

export default function FrenchDigitSpanPage() {
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
      <DigitSpanClient copy={{
        h1Keyword: "Test d’empan de chiffres",
        h1Suffix: " – Mémoire numérique",
        subtitle: "Mémorisez les chiffres et restituez la suite",
        caption: "La suite de chiffres s’affiche d’un bloc puis disparaît : retapez-la dans le même ordre. Chaque réussite allonge la suite suivante d’un chiffre.",
        digitLabel: "Chiffres",
        scoreLabel: "Score",
        timeLeftLabel: "Temps",
        recallTitle: "RESTITUEZ LA SÉQUENCE",
        memorizeTitle: "MÉMORISEZ LA SÉQUENCE",
        evaluating: "Évaluation...",
        startTitle: "Test d’empan de chiffres",
        startSubtitle: "Mémoire numérique • empan de chiffres",
        countdownSubtitle: "PRÉPAREZ-VOUS",
        newBest: "NOUVEAU RECORD",
        pointsLabel: "Points",
        statAccuracy: "Précision",
        statPeakSpan: "Empan Max",
        statPerfects: "Parfaits",
        btnPlayAgain: "Rejouer",
        rulesTitle: "Règles de l’exercice et barème",
        rulesItems: [
          {
            num: "1",
            text: "Rétention de chiffres",
            highlight: "+100 PTS",
            result: "Retenez la suite affichée et tapez-la au pavé ou au clavier"
          },
          {
            num: "2",
            text: "Bonus d’empan",
            highlight: "Jusqu’à +120 % PTS",
            result: "Suite = 100 × (1 + 0,1 × (chiffres − 3)) points"
          },
          {
            num: "3",
            text: "Erreur / temps écoulé",
            highlight: "-1 Chiffre",
            result: "Erreur ou 8 s sans valider : ni points ni temps perdus, suite suivante 1 chiffre plus courte"
          },
          {
            num: "4",
            text: "Escalier adaptatif",
            highlight: "Ajustement continu",
            result: "Réussite +1 chiffre, erreur −1 chiffre (3 à 15)"
          }
        ]
      }} />
      <DrillGuide guide={digitSpanGuide} />
      <RelatedDrills />
    </>
  );
}
