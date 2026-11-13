import ConcentrationGridClient from '@/app/drills/cognitive/focus/concentration-grid/ConcentrationGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Table de Schulte | Grille de concentration | SkillDrills",
  description: "Table de Schulte gratuite dans le navigateur : trouvez les nombres dans l’ordre et entraînez la recherche visuelle. Auto-test non clinique.",
  keywords: [
    "table de schulte",
    "table de schulte en ligne",
    "grille de concentration en ligne",
    "test table de schulte gratuit",
    "entraînement vision périphérique lecture rapide",
    "exercice table de schulte concentration",
    "vitesse d exploration visuelle test",
    "jeux de concentration visuelle adultes",
    "recherche numérique séquentielle réflexes",
    "élargissement champ visuel parafovéal",
    "test attention soutenue et balayage oculaire",
    "exercices de lecture dynamique en ligne"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Table de Schulte en ligne – Grille de concentration | SkillDrills",
    description: "Table de Schulte gratuite en ligne : touchez les nombres dans l’ordre pendant 45 secondes, sur une grille qui grandit de 3x3 à 8x8. Exercice, pas un test clinique.",
    type: "website",
    url: "https://skilldrills.online/fr/drills/cognitive/focus/concentration-grid",
    siteName: "SkillDrills",
    locale: "fr_FR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Table de Schulte en ligne – Grille de concentration | SkillDrills",
    description: "Table de Schulte gratuite en ligne : touchez les nombres dans l’ordre pendant 45 secondes, sur une grille qui grandit de 3x3 à 8x8. Exercice, pas un test clinique.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/cognitive/focus/concentration-grid",
    languages: getAlternateLanguages('/drills/cognitive/focus/concentration-grid'),
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
      "name": "Entraînement Cognitif",
      "item": "https://skilldrills.online/fr/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Table de Schulte",
      "item": "https://skilldrills.online/fr/drills/cognitive/focus/concentration-grid"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Table de Schulte en Ligne",
  "description": "Table de Schulte gratuite en ligne : retrouvez les chiffres dans l ordre croissant sur une grille de concentration qui grandit de 3x3 à 8x8 en 45 secondes.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "url": "https://skilldrills.online/fr/drills/cognitive/focus/concentration-grid",
  "dateModified": "2026-11-12",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Attention"],
  "name": "Table de Schulte Trainer",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Défi Table de Schulte et Grille de Concentration",
  "gamePlatform": "Web Browser",
  "genre": ["Brain Training", "Cognitive Drill", "Vision Training"],
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment Réaliser l Entraînement sur Table de Schulte",
  "description": "Déroulement d une manche de 45 secondes sur la table de Schulte en ligne.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Fixation au Centre de la Grille",
      "text": "Fixez le centre du tableau sans déplacer excessivement le regard vers chaque numéro."
    },
    {
      "@type": "HowToStep",
      "name": "Activation de la Vision Périphérique",
      "text": "Utilisez votre vision parafovéale pour repérer les chiffres dans l ordre croissant de 1 au maximum."
    },
    {
      "@type": "HowToStep",
      "name": "Sélection Rapide des Cibles",
      "text": "Cliquez sur chaque chiffre dès son identification pour déclencher l expansion de la grille."
    },
    {
      "@type": "HowToStep",
      "name": "Maintien de la Cadence sur 45s",
      "text": "Complétez autant de grilles que possible dans le délai strict de 45 secondes sans perdre en précision."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu est-ce qu une table de Schulte et quel est son but?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conçue par le psychiatre Walter Schulte, c est une grille de chiffres disposés aléatoirement à retrouver dans l ordre croissant. Elle sert d exercice de recherche visuelle et de concentration ; cette version en ligne n est pas un test psychologique."
      }
    },
    {
      "@type": "Question",
      "name": "Comment la table de Schulte aide-t-elle à la lecture rapide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elle fait travailler le repérage de chiffres en périphérie sans sauter du regard vers chaque case, ce qui explique qu on l associe à la lecture rapide. Un gain de vitesse de lecture n est pas garanti, et l exercice ne la mesure pas."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi ne faut-il pas bouger excessivement les yeux?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C est la consigne habituelle de l exercice : garder le regard au centre oblige à repérer les chiffres en vision périphérique. Il s agit d une règle de pratique, pas d une méthode prouvée."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles dimensions de grilles sont proposées dans ce test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L exercice démarre sur une grille 3x3 et progresse dynamiquement vers des formats 4x4, 5x5 jusqu à 8x8 au fur et à mesure des réussites."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le temps limite pour chaque session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque série dure 45 secondes exactement, sur un chronomètre unique : valider une grille n ajoute ni ne retire de temps."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il en cas de clic erroné?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une brève alerte visuelle s affiche et la précision globale est recalculée, mais le chronomètre poursuit son cours sans interruption."
      }
    },
    {
      "@type": "Question",
      "name": "À quelle fréquence est-il conseillé de s entraîner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n y a pas de règle fixe. Quelques manches par jour (environ 10 minutes) avec des pauses ménagent les yeux ; aucun progrès n est garanti."
      }
    },
    {
      "@type": "Question",
      "name": "Cet outil est-il adapté aux sportifs de haut niveau?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucun effet sur la performance sportive n est démontré. L exercice ressemble toutefois au fait de repérer des informations en bord d écran sans quitter le centre du regard ; utilisez-le en complément."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le score global est-il calculé?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque bon chiffre rapporte 100 points plus un bonus de rapidité (jusqu à 120 points) ; chaque grille terminée ajoute un bonus proportionnel à son nombre de cases. Les erreurs ne retirent pas de points mais baissent la précision affichée."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on utiliser ce test sur smartphone ou tablette?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, l interface est parfaitement adaptée aux écrans tactiles ainsi qu aux ordinateurs de bureau avec souris."
      }
    }
  ]
};

const copyFr = {
  h1Keyword: "Table de Schulte",
  h1Suffix: " en Ligne – Grille de Concentration",
  caption: "Touchez les numéros dans l ordre séquentiel strict sur des grilles de Schulte en expansion continue. Entraînez votre vision périphérique, vitesse d exploration visuelle et endurance attentionnelle.",
  statScore: "Points",
  statTime: "Temps",
  statGridSize: "Grille",
  statBest: "Record",
  hudTarget: "Cible:",
  startTitle: "Table de Schulte Trainer",
  startSubtitle: "Recherche Numérique Séquentielle • Grilles de Schulte Dynamiques",
  startButtonText: "Démarrer l Entraînement",
  getReady: "PRÉPAREZ-VOUS",
  statPoints: "Points",
  statAccuracy: "Précision",
  statGridsCleared: "Complétées",
  statPeakGrid: "Grille Max",
  playAgainText: "Rejouer",
  shareText: "Partager le Résultat",
  exitText: "Quitter",
  stageCaption: "Trouvez et touchez les chiffres dans l ordre croissant sur des grilles toujours plus grandes avant la fin du temps imparti.",
  rulesTitle: "Règles et Système de Points",
  rulesItems: [
    { title: "Recherche Séquentielle", text: "Sélectionnez les chiffres dans l ordre numérique strict de 1 jusqu au plus grand chiffre de la matrice." },
    { title: "Grilles en Expansion", text: "Compléter une grille débloque des formats plus vastes (3x3 → 4x4 → 5x5...), stimulant votre champ périphérique." },
    { title: "Session Fixe de 45s", text: "Vous disposez d une fenêtre unique de 45 secondes. Chaque grille validée agrandit le plateau sans modifier l horloge." },
    { title: "Précision et Focalisation", text: "Les erreurs déclenchent une brève alerte et réduisent votre précision finale, sans interrompre la manche." }
  ],
  aboutTitle: "À Propos de la Table de Schulte et de la Grille de Concentration",
  aboutLead: "La table de Schulte est une grille de recherche visuelle : on retrouve des chiffres mélangés dans l ordre, en travaillant la fixation du regard et la vision périphérique (Lu et al., 2022; Rayner, 1998).",
  aboutCards: [
    { title: "Public Cible", text: "Athlètes de haut niveau, pilotes, étudiants et joueurs d esports devant traiter rapidement des flux visuels denses.", color: "bg-blue-600" },
    { title: "Compétences Développées", text: "Vitesse de balayage visuel, efficacité saccadique, repérage spatial et endurance attentionnelle soutenue.", color: "bg-emerald-600" },
    { title: "Vision Périphérique", text: "Chaque niveau supérieur élargit la matrice, ce qui oblige à balayer une zone plus large sans perdre la cadence.", color: "bg-purple-600" }
  ]
};

const concentrationGridGuideFr = {
  heading: "Guide Complet de la Table de Schulte et Psychologie de l Attention Visuelle",
  intro: [
    "La table de Schulte (Schulte Table) est un exercice classique de recherche visuelle et de concentration, nommé d après le psychiatre allemand Walter Schulte. Dans son format traditionnel, les chiffres de 1 à 25 sont dispersés aléatoirement sur une grille 5x5, le participant devant pointer chaque valeur dans l ordre croissant tout en fixant le centre géométrique de la matrice.",
    "En psychologie du sport appliquée, cet exercice a évolué pour devenir la 'grille de concentration' (Harris & Harris, 1984), décrite dans des manuels de psychologie du sport comme un exercice pour travailler la vitesse d exploration et la discipline mentale sous pression temporelle. Une étude en potentiels évoqués cognitifs (ERP) menée chez des enfants de 8 à 11 ans a révélé que la recherche séquentielle de chiffres active des composantes neuronales nettement plus exigeantes que le repérage isolé, un effet amplifié par l ajout de distracteurs chromatiques (Lu et al., 2022).",
    "Le simulateur de SkillDrills transforme cette table statique en une manche continue de 45 secondes. Plutôt qu une matrice statique isolée, la grille s élargit dynamiquement de 3x3 jusqu à 8x8 au fil des réussites, tout en introduisant des perturbations de rotation dès le niveau 5x5. Sur petit écran (moins de 380 px de large), la grille plafonne à 7x7. Vous vous entraînez ainsi à balayer un champ de plus en plus large dans une fenêtre stricte de 45 secondes (Treisman & Gelade, 1980 ; Wolfe, 2007).",
    "Méthodologie chronométrique : chaque action tactile ou clic est horodatée via l horloge haute résolution performance.now() du navigateur directement sur votre terminal. Les navigateurs intègrent une atténuation délibérée pour parer aux failles matérielles de type Spectre (résolution d environ 1 ms), et votre écran quantifie chaque affichage selon sa fréquence de rafraîchissement (environ 16,7 ms par image à 60 Hz, Woods et al., 2015). Évaluez votre progression sur un même matériel.",
    "Transparence des données : SkillDrills ne collecte aucune donnée agrégée. Vos scores et configurations sont conservés exclusivement dans le localStorage de votre navigateur et ne sont jamais transmis à des serveurs distants.",
    "Ce module est un jeu d entraînement cognitif gratuit à visée pédagogique et sportive. Il ne s agit pas d un dispositif médical, d un outil de diagnostic ou de dépistage du TDAH, de la dyslexie ou d autres troubles neurodéveloppementaux."
  ],
  benchmarks: {
    title: "Table de Schulte : paliers de note (points par manche de 45 s)",
    headers: ["Palier", "Points (45 s)"],
    rows: [
      ["S+", "7 220 et plus"],
      ["S", "5 780 – 7 219"],
      ["A", "4 500 – 5 779"],
      ["B", "2 880 – 4 499"],
      ["C", "1 620 – 2 879"],
      ["D", "720 – 1 619"],
      ["F", "moins de 720"]
    ],
    note: "Paliers d entraînement SkillDrills, calculés directement à partir de la formule de note de l écran final (part de 8 000 points de référence) ; ni statistiques d utilisateurs ni normes. Chaque bon chiffre rapporte 100 points plus un bonus de rapidité (jusqu à 120), chaque grille terminée un bonus proportionnel à son nombre de cases."
  },
  techniques: {
    title: "4 Techniques Scientifiques pour Maximiser la Vitesse d'Exploration",
    items: [
      {
        name: "Ancrage Fovéal Central et Vision Parafovéale Élargie",
        desc: "Ne suivez pas chaque chiffre avec des mouvements saccadés amples. Maintenez le regard posé au centre géométrique du plateau, laissant votre vision périphérique enregistrer les chiffres candidats (Lu et al., 2022).",
        tips: "Évitez de tourner la tête ou de fixer les coins de l écran ; élargissez votre champ attentionnel."
      },
      {
        name: "Chunking Séquentiel et Anticipation Double (Lookahead)",
        desc: "Ne cherchez jamais un chiffre de manière isolée. Si vous apercevez '4' en cherchant '3', stockez ses coordonnées dans la mémoire de travail visuo-spatiale pour l enchaîner sans latence (Rayner, 1998).",
        tips: "Conservez une carte mentale de 1 à 2 chiffres d avance pour lier vos clics en continu."
      },
      {
        name: "Recherche Guidée et Intégration des Traits (Wolfe, 2007)",
        desc: "Les attentes cognitives descendantes (Top-Down) orientent la saillance perceptive. Garder en mémoire la géométrie distinctive du prochain chiffre active les détecteurs neuronaux avant tout balayage au hasard.",
        tips: "Visualisez mentalement la forme du chiffre suivant avant de scanner la grille."
      },
      {
        name: "Invariance à la Rotation et Détection de Repères Structurels",
        desc: "La rotation des chiffres perturbe la reconnaissance automatique de gabarit. Le cortex inférotemporal doit extraire des repères invariants (la boucle d un 6/9, la traverse d un 4).",
        tips: "Identifiez les traits structurels clés plutôt que d essayer de redresser le chiffre mentalement."
      }
    ]
  },
  steps: [
    "Posez votre regard au centre du plateau pour englober la matrice entière.",
    "Repérez le chiffre '1' et touchez-le promptement pour lancer la chaîne séquentielle.",
    "Anticipez : pendant la validation du chiffre actuel, scannez la périphérie pour les suivants.",
    "Progressez dans les grilles : terminez rapidement les petits plateaux pour débloquer les matrices 5x5, 6x6 et 7x7.",
    "Maintenez votre discipline visuelle face aux chiffres rotatifs durant les 45 secondes complètes."
  ],
  audience: "Lecteurs rapides, athlètes, pilotes, compétiteurs d esport (FPS/MOBA), étudiants et professionnels qui veulent s exercer à balayer rapidement un écran.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('lu2022', 'treisman1980', 'rayner1998', 'rayner2016', 'wolfe2007', 'woods2015'),
  related: [
    { href: "/fr/drills/cognitive/focus/distraction-fighter", label: "Test de Stroop en Ligne" },
    { href: "/fr/drills/cognitive/attention/concentration-stamina", label: "Test d Attention Soutenue" },
    { href: "/fr/drills/cognitive/attention/divided-attention", label: "Test d Attention Divisée" },
    { href: "/fr/drills/cognitive/processing-speed/rsvp-reader", label: "Test de Lecture Rapide RSVP" },
    { href: "/fr/drills/cognitive/processing-speed/symbol-matching", label: "Test de Substitution de Symboles" },
    { href: "/fr/drills/cognitive/processing-speed/reaction-time", label: "Test de Temps de Réaction" }
  ]
};

export default function ConcentrationGridPageFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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

      <ConcentrationGridClient copy={copyFr} />
      <DrillGuide guide={concentrationGridGuideFr} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
