import FineMotorClient from '@/app/drills/motor/precision-control/tracing/TracingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/tracing-2026-09-20.md
// ============================================================

export const metadata = {
  title: 'Test de suivi souris | Tracé du curseur | SkillDrills',
  description: 'Test de suivi souris gratuit : gardez le curseur 45 secondes sur une onde de plus en plus rapide et entraînez la précision du tracé et la motricité fine.',
  keywords: [
    'test de suivi de souris', 'suivre une ligne avec la souris', 'jeu de tracé souris',
    'test de précision de tracé', 'suivi de curseur', 'motricité fine souris',
    'test de suivi souris', 'stabilité du tracé', 'jeu suivre la ligne',
    'coordination visuo-motrice', 'fluidité du mouvement souris',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Test de suivi souris | Tracé du curseur | SkillDrills',
    description: 'Test de suivi souris gratuit : gardez le curseur 45 secondes sur une onde de plus en plus rapide et entraînez la précision du tracé et la motricité fine.',
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Test de suivi souris | Tracé du curseur | SkillDrills',
    description: 'Test de suivi souris gratuit : gardez le curseur 45 secondes sur une onde de plus en plus rapide et entraînez la précision du tracé et la motricité fine.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing',
    languages: getAlternateLanguages('/drills/motor/precision-control/tracing'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Entraînement Moteur', item: 'https://skilldrills.online/fr/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Contrôle de Précision', item: 'https://skilldrills.online/fr/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: 'Jeu de Tracé', item: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  inLanguage: 'fr-FR',
  name: 'Test de suivi souris – Jeu de tracé',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Test de suivi souris : maintenez le curseur sur une onde qui défile. Les points ne s\'accumulent que si le curseur reste à 22 pixels ou moins au-dessus ou au-dessous de la ligne.',
  url: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/fr' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'fr-FR',
  name: 'Jeu de Poursuite Continue en Ligne',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navigateur moderne avec HTML5 Canvas et Pointer Lock API',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'fr-FR',
  name: 'Entraînement de Tracé et Fluidité Souris',
  url: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing',
  description: 'Jeu d\'adresse où l\'on garde le curseur sur une onde qui défile pendant 45 secondes.',
  genre: ['Precision Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qu\'est-ce que ce test de suivi souris et comment marque-t-on des points ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vous gardez le curseur pendant 45 secondes sur une onde qui défile de droite à gauche. Tant que le curseur reste à 22 pixels ou moins de la ligne (au-dessus ou au-dessous), vous gagnez 1 point par image, +5 toutes les 4 secondes sans interruption, et +10 quand vous revenez sur la ligne après l\'avoir quittée.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi l\'onde défile-t-elle sans attendre l\'utilisateur ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le défilement permanent impose une réactivité cinétique continue. Contrairement aux épreuves statiques où l\'on peut figer son geste, ce test exige une anticipation constante et des micro-corrections instantanées.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce que l\'Intégrité de Flux (Flow Integrity) et comment est-elle notée ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'Intégrité de Flux (0 à 100 %) démarre à 100 %. Elle monte de 15 % par seconde tant que le curseur est sur la ligne (±22 px), gagne 10 % à chaque bonus de 4 secondes et baisse de 25 % par seconde hors de la ligne. La note finale dépend de sa valeur à la fin de la séance. Sortir de la ligne ne retire aucun point déjà gagné.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment la vitesse et l\'amplitude augmentent-elles au fil des 45 secondes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'onde démarre à 2,2 px par image et accélère régulièrement jusqu\'à 3,8 px par image à 45 secondes. L\'amplitude principale passe de 90 à 125 px et une seconde ondulation passe de 8 à 32 px, ce qui rend la courbe plus haute et plus irrégulière.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels modèles scientifiques décrivent le suivi de trajectoire continue ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ce test s\'appuie sur la loi de direction d\'Accot-Zhai (1997) et le modèle moteur de Woodworth (1899), fonctionnant en boucle fermée ininterrompue où le système visuel rectifie le mouvement toutes les 150 à 200 ms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre poursuite fluide et saccades de rattrapage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comme établi par Krauzlis (2004) et Rashbass (1961), la poursuite fluide cale sa vitesse sur celle de la cible, alors que les saccades sont des impulsions balistiques brèves. En cas de décrochage, le cortex déclenche une saccade de rattrapage avant de réenclencher la poursuite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment cet exercice favorise-t-il les performances dans les jeux FPS ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans les jeux à temps d\'élimination long (TTK), il faut garder le réticule sur un adversaire en mouvement. Cet exercice travaille un geste proche : glissement régulier du bras et inversions de sens. Le transfert en jeu varie selon les joueurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle sensibilité et quel DPI de souris sont les plus adaptés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une sensibilité moyenne à basse (800 DPI avec 25 à 45 cm/360°) offre plus de contrôle mécanique et engage l\'avant-bras, atténuant les micro-tremblements. Un taux de rafraîchissement de 1000 Hz est vivement conseillé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment éviter les tensions et la fatigue musculaire lors du tracé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ne crispez pas la main sur la souris. Adoptez une prise claw ou fingertip relâchée, pilotez depuis le coude pour les amples ondulations verticales et conservez les doigts pour les micro-corrections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on s\'entraîner avec un trackball ou un écran tactile ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sur ordinateur, le test lit le mouvement de la souris via le verrouillage du pointeur (Pointer Lock) : souris et trackball fonctionnent. Sur un appareil uniquement tactile, on glisse le doigt. Les stylets de tablette graphique se comportent différemment selon le matériel.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
  name: 'Comment s\'entraîner au tracé et au suivi continu à la souris',
  description: 'Protocole structuré pour rester plus longtemps sur l\'onde.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Placer le curseur sur le point d\'origine',
      text: 'Après le compte à rebours de 3 secondes, le pointeur est verrouillé (au doigt sur écran tactile) et placé au quart gauche de l\'écran. Amenez-le aussitôt sur l\'onde. Échap quitte l\'exercice.',
      url: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Harmoniser sa vitesse avec la trajectoire de l\'onde',
      text: 'Faites glisser la souris avec fluidité sur la courbe sinusoïdale en synchronisant votre allure.',
      url: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Neutraliser les micro-secousses et les saccades',
      text: 'Détendez votre poignet et portez votre regard environ 20 pixels en avant du réticule pour anticiper.',
      url: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Consulter son score d\'Intégrité de Flux',
      text: 'Après 45 secondes, consultez votre score, votre plus longue série d\'images sur la ligne et votre Intégrité de Flux en fin de séance.',
      url: 'https://skilldrills.online/fr/drills/motor/precision-control/tracing#step-4'
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'krauzlis2004', 'rashbass1961', 'woodworth1899', 'woods2015'),
  intro: {
    title: 'Comment le suivi continu est mesuré',
    paragraphs: [
      'Ce test de suivi souris vous demande de garder le curseur sur une onde qui défile de droite à gauche pendant 45 secondes, en accélérant et en s\'amplifiant. Les points s\'accumulent image par image tant que vous restez sur la ligne.',
      'Fiabilité des mesures et contraintes matérielles : Le chronométrage repose sur l\'API performance.now() du navigateur (~1 ms pour des impératifs de sécurité). L\'affichage dépend du taux de rafraîchissement de l\'écran — ~16,7 ms à 60 Hz, ~6,9 ms à 144 Hz et ~4,1 ms à 240 Hz (Woods et al., 2015). Le taux de transfert de la souris introduit ~8 ms à 125 Hz contre ~1 ms à 1000 Hz. Tout écart inférieur à 5 ms relève du bruit de mesure. SkillDrills n\'enregistre aucune donnée sur des serveurs distants.',
    ],
  },
  benchmark: {
    title: 'Test de suivi souris : paliers de pratique SkillDrills',
    description: 'Paliers de pratique SkillDrills, ni normes de recherche ni données d\'utilisateurs. Ils reprennent la note de l\'écran de résultat (Intégrité de Flux en fin de séance et score). Le score compte 1 point par image : un écran à fréquence plus élevée en donne davantage, comparez donc sur le même appareil.',
    columns: ['Note', 'Titre de Rang', 'Flux en fin de séance', 'Condition de score', 'Palier'],
    rows: [
      { tier: 'S+', rank: 'Flux de grand maître', flow: '90 % ou plus', score: '1 400 points ou plus', band: 'Palier de pratique SkillDrills' },
      { tier: 'S', rank: 'Flux maximal', flow: '80 % ou plus', score: '-', band: 'Palier de pratique SkillDrills' },
      { tier: 'A', rank: 'Suivi verrouillé', flow: '60 % ou plus', score: '-', band: 'Palier de pratique SkillDrills' },
      { tier: 'B', rank: 'Suivi régulier', flow: '35 % ou plus', score: '-', band: 'Palier de pratique SkillDrills' },
      { tier: 'C', rank: 'Tracé terminé', flow: 'moins de 35 %', score: '-', band: 'Palier de pratique SkillDrills' },
    ],
  },
  protocols: {
    title: 'Protocoles d\'Entraînement pour le Suivi Continu',
    description: 'Directives pour garder l\'onde des yeux et stabiliser le geste.',
    items: [
      {
        title: 'Protocole 1 : Fixation Anticipée et Poursuite Feedforward (Krauzlis 2004)',
        description: 'Fixez votre regard 15 à 25 pixels en avant de l\'onde plutôt que directement sur la cible. Cette projection visuelle permet au cortex prémoteur de programmer l\'accélération avant les points d\'inflexion.',
      },
      {
        title: 'Protocole 2 : Poursuite en Mode Double de Rashbass (1961)',
        description: 'En cas de sortie de la zone de 22 px, effectuez une brève saccade de rattrapage puis relâchez immédiatement l\'effort pour retrouver la poursuite fluide sans rebondir sur les limites.',
      },
      {
        title: 'Protocole 3 : Modulation de Courbure selon Accot-Zhai (Crêtes et Creux)',
        description: 'D\'après la loi d\'Accot-Zhai (1997), les crêtes et les creux requièrent une vitesse tangentielle plus faible que les portions planes. Ralentissez légèrement dans les tournants pour éviter les dérapages.',
      },
      {
        title: 'Protocole 4 : Glissement d\'Avant-Bras et Maîtrise de la Friciton',
        description: 'Reposez délicatement l\'avant-bras sur le tapis sans enfoncer le poignet. Pivotez depuis le coude pour encaisser les vagues verticales et réservez les doigts aux micro-ajustements de 1–2 px.',
      },
    ],
  },
  faqs: {
    title: 'Foire Aux Questions sur le Tracé à la Souris et le Suivi d\'Onde',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const frCopy = {
  title: "Test de Suivi de Souris",
  subtitle: "Suivi continu • 45 s",
  startButtonText: "Démarrer l'Entraînement",
  startBtn: "Démarrer l'Entraînement",
  trainAgain: "Recommencer",
  shareTitle: "Partager le Score",
  exitTitle: "Quitter",
  statFlowScore: "Score de Flux",
  statTimeLeft: "Temps Restant",
  statFlowIntegrity: "Intégrité du Flux",
  statBestScore: "Meilleur Score",
  maxStreakLabel: "Série Max d'Images",
  peakFlowLabel: "Flux en fin de séance",
  bestScoreLabel: "Record Personnel",
  rulesTitle: "Instructions de l'Exercice et Système de Points",
  rulesItems: [
    { num: "1", text: "Tracer la Trajectoire", highlight: "Onde Émeraude", result: "+1 PT / image sur la trajectoire" },
    { num: "2", text: "Vitesse Progressive", highlight: "Onde Dynamique", result: "2,2 → 3,8 px/img sur 45s" },
    { num: "3", text: "Intégrité du Flux", highlight: "Super Flux", result: "4s de verrouillage = +5 Bonus" },
    { num: "4", text: "Sortie de ligne", highlight: "Tolérance ±22 px", result: "Série à 0, flux en baisse" }
  ],
};

export default function FrenchTracingPage() {
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
      <FineMotorClient copy={frCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
