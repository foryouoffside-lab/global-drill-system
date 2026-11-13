import SteadyHandClient from '@/app/drills/motor/precision-control/steady-hand/SteadyHandClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/steady-hand-2026-09-20.md
// ============================================================

export const metadata = {
  title: 'Jeu du fil électrique : précision souris | SkillDrills',
  description: 'Jeu du fil électrique gratuit : guidez le curseur sur une ligne lumineuse jusqu’à l’arrivée sans en sortir. Chaque série rend le tracé plus sinueux.',
  keywords: [
    'jeu du fil électrique', 'test de main sûre', 'précision du curseur',
    'main sûre', 'motricité fine souris', 'stabilité de la main',
    'contrôle du curseur', 'jeu de labyrinthe souris', 'entraînement précision souris',
    'jeu du fil électrique en ligne', 'test de trajectoire souris',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Jeu du fil électrique : précision souris | SkillDrills',
    description: 'Jeu du fil électrique gratuit : guidez le curseur sur une ligne lumineuse sans en sortir et entraînez la stabilité de la main dans le navigateur.',
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Jeu du fil électrique : précision souris | SkillDrills',
    description: 'Jeu du fil électrique gratuit pour travailler la précision du curseur et la stabilité de la main.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand',
    languages: getAlternateLanguages('/drills/motor/precision-control/steady-hand'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Entraînement Moteur', item: 'https://skilldrills.online/fr/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Contrôle de Précision', item: 'https://skilldrills.online/fr/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: 'Jeu du Fil Électrique', item: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'fr-FR',
  name: 'Jeu du Fil Électrique – Main sûre et précision souris',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Jeu du fil électrique gratuit sur navigateur. Un écart de plus de 2,5 pixels par rapport à la ligne renvoie au départ, et chaque tour en série rend le tracé suivant plus sinueux.',
  url: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/fr' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'fr-FR',
  name: 'Jeu du Fil Électrique en Ligne',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navigateur moderne avec HTML5 Canvas et Pointer Lock API',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'fr-FR',
  name: 'Jeu du Fil Électrique & Dextérité Motrice',
  url: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand',
  description: 'Épreuve de précision gestuelle pour travailler la stabilité de la main au curseur.',
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
      name: 'Qu\'est-ce que le Jeu du Fil Électrique et que travaille-t-il ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Jeu du Fil Électrique (Steady Hand Game) consiste à guider le curseur de la zone de départ à gauche jusqu\'à la zone d\'arrivée à droite en suivant une ligne lumineuse sinueuse, sans en sortir. Il ne s\'agit pas de réflexes mais d\'un contrôle lent et régulier de la souris, corrigé en continu par la vue. Le score est le nombre de tours bouclés avant la fin du chrono de 45 secondes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle loi scientifique régit le déplacement de la souris dans un couloir étroit ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La trajectoire dans des passages délimités est modélisée par la loi de direction d\'Accot-Zhai (1997), extension de la loi de Fitts. Elle établit que le temps de parcours est proportionnel à l\'intégrale de la longueur divisée par la largeur du chenal : plus le couloir rétrécit, plus la vitesse doit mathématiquement diminuer pour éviter la faute.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi le curseur revient-il au départ dès qu\'il touche un bord ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le moteur calcule à chaque image la distance entre le curseur et la ligne médiane. Entre les zones de départ et d\'arrivée, un écart de plus de 2,5 pixels compte comme une touche : le curseur revient au départ, le compteur de fautes augmente de 1 et la série retombe à 0. Le chrono continue de tourner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment la difficulté augmente-t-elle au fil des tours ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tolérance (±2,5 pixels autour de la ligne) ne change jamais. C\'est le tracé qui se complique : à chaque tour réussi en série, le parcours suivant compte plus de segments (de 15 jusqu\'à 120) et des écarts verticaux plus amples. Une touche remet la série à 0, et le tracé suivant redevient plus doux. Chaque tour bouclé remet le chrono à 45 secondes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce qui provoque le tremblement de la main lors de tracés précis ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le tremblement physiologique naturel (8–12 Hz) résulte des décharges synchrones des unités motrices et de la résonance mécanique du bras. Une crispation excessive (co-contraction des muscles fléchisseurs et extenseurs), le stress ou le café amplifient ces oscillations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle prise en main et quelle sensibilité DPI sont recommandées ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une prise fingertip ou claw détendue permet d\'associer le glissement de l\'avant-bras aux micro-ajustements des doigts. Une sensibilité basse (400 à 800 DPI) atténue les micro-tressaillements de façon bien plus stable qu\'un DPI trop élevé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment s\'applique le modèle à deux composantes de Woodworth (1899) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robert S. Woodworth a démontré que tout geste dirigé combine une impulsion balistique initiale et une phase de contrôle continu sous retour visuel. Dans ce jeu, ce contrôle en boucle fermée s\'exécute en continu pour rectifier la trajectoire avant le contact.',
      },
    },
    {
      '@type': 'Question',
      name: 'L\'exercice de main sûre est-il utile aux graphistes et joueurs e-sport ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le geste ressemble à l\'encrage graphique et au tracking dans les jeux de tir, où le pointeur doit rester sur une trajectoire étroite. Le transfert varie selon les personnes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment prévenir la fatigue musculaire et les crampes lors de l\'exercice ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Posez votre coude à 90 degrés sur le bureau sans écraser la souris sur le tapis. Expirez calmement avant d\'aborder les épingles à cheveux pour dénouer les épaules et ménagez des pauses d\'une minute toutes les 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le jeu fonctionne-t-il avec un trackball ou un écran tactile ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sur ordinateur, l\'exercice lit le mouvement de la souris via le verrouillage du pointeur (Pointer Lock) : souris et trackball fonctionnent. Sur un appareil uniquement tactile, on glisse le doigt. Les stylets de tablette graphique se comportent différemment selon le matériel. Comparez vos scores sur le même appareil.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
  name: 'Comment entraîner la stabilité de la main et la précision souris',
  description: 'Protocole méthodique pour suivre des tracés de plus en plus sinueux et maîtriser la loi de guidage gestuel.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      url: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand#step-1',
      name: 'Placer le curseur dans la zone de départ',
      text: 'Cliquez sur „Lancer l\'exercice“. Après un compte à rebours de 3 secondes, le curseur est placé dans le sas vert à gauche et le chronomètre de 45 secondes démarre. Sur PC, le pointeur est verrouillé ; Échap quitte l\'exercice.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      url: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand#step-2',
      name: 'Maintenir une vitesse fluide et régulière',
      text: 'Glissez le long de la ligne verte lumineuse en dosant l\'allure pour respecter le temps imparti sans en sortir.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      url: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand#step-3',
      name: 'Ralentir avant les virages en épingle',
      text: 'Réduisez votre allure d\'environ 40% à l\'approche des angles aigus et portez votre regard 20 à 30 pixels en avant du pointeur.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      url: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand#step-4',
      name: 'Atteindre l\'arrivée pour le tour suivant',
      text: 'Rejoignez le sas d\'arrivée vert à droite pour boucler le tour. Le chronomètre revient à 45 secondes, et plus votre série est longue, plus le tracé suivant est sinueux.',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'woodworth1899', 'fitts1954', 'woods2015'),
  intro: {
    title: 'Comment la stabilité de la main et la précision sont mesurées',
    paragraphs: [
      'Le jeu du fil électrique en ligne vous demande de guider le curseur le long d’une ligne lumineuse sinueuse sans en sortir. Il entraîne la stabilité de la main et la précision de la souris : tours réussis, contacts et série sans erreur.',
      'Fiabilité des mesures et contraintes matérielles : La mesure temporelle provient de l\'API performance.now() du navigateur, quantifiée à ~1 ms pour des raisons de sécurité. L\'affichage est synchronisé avec le taux de rafraîchissement de l\'écran — ~16,7 ms à 60 Hz, ~6,9 ms à 144 Hz et ~4,1 ms à 240 Hz (Woods et al., 2015). Le taux d\'interrogation de la souris ajoute ~8 ms à 125 Hz contre ~1 ms à 1000 Hz. Tout écart inférieur à 5 ms relève du bruit de mesure. SkillDrills stocke vos performances uniquement dans votre navigateur.',
    ],
  },
  benchmark: {
    title: 'Jeu du Fil Électrique : paliers de pratique SkillDrills',
    description: 'Paliers de pratique SkillDrills pour comparer vos propres séances ; ce ne sont ni des normes de recherche ni des données d\'utilisateurs. Ils reprennent la note de l\'écran de résultat : tours bouclés et touches dans une même séance.',
    columns: ['Note', 'Titre de Rang', 'Tours', 'Touches', 'Palier'],
    rows: [
      { tier: 'S+', rank: 'Stabilité de grand maître', stat: '8 tours ou plus', errors: '0', band: 'Palier de pratique SkillDrills' },
      { tier: 'S', rank: 'Pilotage de maître', stat: '6 tours ou plus', errors: '1 au plus', band: 'Palier de pratique SkillDrills' },
      { tier: 'A', rank: 'Contrôle précis', stat: '4 tours ou plus', errors: '2 au plus', band: 'Palier de pratique SkillDrills' },
      { tier: 'B', rank: 'Bonne stabilité', stat: '2 tours ou plus', errors: 'sans limite', band: 'Palier de pratique SkillDrills' },
      { tier: 'C', rank: 'Contrôle de base', stat: 'moins de 2 tours', errors: 'sans limite', band: 'Palier de pratique SkillDrills' },
    ],
  },
  protocols: {
    title: 'Protocoles d\'Entraînement pour une Main Parfaitement Stable',
    description: 'Recommandations pour un geste plus calme et des virages négociés avec fluidité.',
    items: [
      {
        title: 'Protocole 1 : Régulation de Vitesse selon Accot-Zhai (Gestion du Rythme)',
        description: 'Selon la loi d\'Accot-Zhai (1997), le temps de parcours d\'un tunnel augmente avec sa longueur et diminue avec sa largeur. Allez plus vite sur les portions douces pour gagner du temps et ralentissez nettement avant les cassures du tracé.',
      },
      {
        title: 'Protocole 2 : Anticipation Visuelle de Woodworth (Contrôle Continu)',
        description: 'Fixez votre regard 20 à 30 pixels en avant du curseur et non directement dessus. Cette projection visuelle donne au cortex moteur environ 150 ms pour amorcer les micro-corrections avant toute sortie de piste.',
      },
      {
        title: 'Protocole 3 : Amortissement du Tremblement (8–12 Hz) et Découplage',
        description: 'Exécutez les courbes amples avec l\'avant-bras en réservant les doigts au centrage fin. Évitez de serrer excessivement la souris, car la co-contraction musculaire amplifie le tremblement physiologique.',
      },
      {
        title: 'Protocole 4 : Trajectoire par le Point de Corde en Virage',
        description: 'Quand la série s\'allonge et que le tracé se resserre en zigzags, privilégiez le centre de la ligne à la vitesse. Viser légèrement l\'intérieur des courbes limite la dérive du curseur vers l\'extérieur.',
      },
    ],
  },
  faqs: {
    title: 'Foire Aux Questions sur le Jeu du Fil Électrique et la Précision Souris',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const frCopy = {
  h1Keyword: 'Jeu du fil électrique',
  h1Suffix: ' (précision souris)',
  subtitle: 'Guidez le curseur sur la ligne lumineuse jusqu\'à l\'arrivée sans en sortir',
  caption: 'Le jeu du fil électrique entraîne la stabilité de votre main et votre motricité fine : guidez le curseur sur une ligne sinueuse sans en sortir. Fondé sur la loi de direction d\'Accot-Zhai (1997) et le contrôle en boucle fermée de Woodworth (1899).',
  statLaps: 'Tours',
  statTime: 'Temps Restant',
  statStreak: 'Série',
  statBest: 'Record',
  pausedTitle: 'En Pause',
  pausedPrompt: 'Cliquez sur l\'écran pour verrouiller le curseur et reprendre.',
  startTitle: 'Parcours du Fil Électrique',
  startSubtitle: 'Main sûre et précision du tracé • 45 s',
  startBtn: 'Lancer l\'exercice',
  countdownSubtitle: 'PRÉPAREZ-VOUS',
  newBest: 'NOUVEAU RECORD',
  errorsLabel: 'Touches de Paroi',
  maxStreakLabel: 'Série Max',
  difficultyLabel: 'Niveau Atteint',
  trainAgain: 'Recommencer',
  shareTitle: 'Partager le Score',
  exitTitle: 'Quitter et Revenir',
  rulesTitle: 'Consignes et Modalités de Score',
  rulesItems: [
    { num: '1', text: 'Suivez la ligne émeraude', highlight: 'lumineuse avec exactitude', result: 'L\'arrivée réinitialise le temps à 45s' },
    { num: '2', text: 'Tour validé', highlight: 'Difficulté progressive', result: 'Plus de cassures et d\'amplitude' },
    { num: '3', text: 'Touche de paroi', highlight: 'Retour au départ', result: 'Faute +1, série à 0' },
    { num: '4', text: 'Souris (Pointer Lock)', highlight: 'Tactile possible', result: 'Échap pour quitter' },
  ],
  rule1Text: 'Suivez la ligne émeraude',
  rule1Highlight: 'lumineuse avec exactitude',
  rule1Result: 'L\'arrivée réinitialise le temps à 45s',
  rule2Text: 'Tour validé',
  rule2Highlight: 'Difficulté progressive',
  rule2Result: 'Plus de cassures et d\'amplitude',
  rule3Text: 'Touche de paroi',
  rule3Highlight: 'Retour au départ',
  rule3Result: 'Faute +1, série à 0',
  rule4Text: 'Souris (Pointer Lock)',
  rule4Highlight: 'Tactile possible',
  rule4Result: 'Échap pour quitter',
  aboutTitle: 'À Propos du Jeu du Fil Électrique',
  aboutHeading: 'Stabilité de Guidage et Atténuation du Tremblement Gestuel',
  aboutP1: 'Le Jeu du Fil Électrique est un exercice pour travailler la motricité fine et la régularité du pointeur. Suivre une ligne étroite qui devient plus sinueuse à chaque série sollicite les petites corrections du poignet et de l\'avant-bras.',
  aboutP2: 'Selon la loi de direction de Johnny Accot et Shumin Zhai (1997), le temps de guidage s\'accroît à mesure que le chenal rétrécit. Ici la tolérance reste de ±2,5 px, mais le tracé s\'allonge en zigzags à chaque série, ce qui exige une correction visuelle constante (Woodworth, 1899).',
  aboutCard1Title: 'Public Visé',
  aboutCard1Text: 'Joueurs (FPS/MOBA), illustrateurs numériques et toute personne qui veut un curseur plus stable.',
  aboutCard2Title: 'Bénéfices Moteurs',
  aboutCard2Text: 'Coordination motrice fine, régularité de la trajectoire, dosage de la vitesse en virage et élimination des tensions parasites.',
  aboutCard3Title: 'Tracé de plus en plus sinueux',
  aboutCard3Text: 'La tolérance (±2,5 px) reste fixe ; chaque tour en série ajoute des cassures et de l\'amplitude au tracé suivant.',
  gradeLabels: {
    'S+': 'Stabilité Chirurgicale (Grandmaster)',
    'S': 'Maîtrise Parfaite (Master)',
    'A': 'Précision Remarquable (Diamond)',
    'B': 'Bonne Stabilité (Platinum)',
    'C': 'Validation Basique (Gold)',
  },
  shareDrillName: 'Jeu du Fil Électrique',
  shareUrl: 'https://skilldrills.online/fr/drills/motor/precision-control/steady-hand',
  shareTextTemplate: '🖐️ J\'ai bouclé {laps} tours au {drillName} avec {acc} de précision ! Essayez gratuitement sur skilldrills.online',
  copiedAlert: 'Score copié dans le presse-papiers !',
};

export default function FrenchSteadyHandPage() {
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
      <SteadyHandClient copy={frCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
