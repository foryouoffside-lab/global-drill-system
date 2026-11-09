import FingerSequencingClient from '@/app/drills/motor/movement-speed/finger-sequencing/FingerSequencingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/fr/drills/motor/movement-speed/finger-sequencing';
const TITLE = 'Cliquer les cibles dans l’ordre : clic séquentiel | SkillDrills';
const DESCRIPTION = 'Cliquer les cibles dans l’ordre : suivez la ligne pointillée et touchez 3 à 5 cibles à la souris. +2 s par bonne cible, -1 s par erreur. Gratuit en ligne.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'cliquer les cibles dans l’ordre',
    'clic séquentiel',
    'cibles dans l’ordre',
    'précision souris',
    'exercice souris',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/motor/movement-speed/finger-sequencing'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Contrôle Moteur', item: 'https://skilldrills.online/fr/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Vitesse de Mouvement', item: 'https://skilldrills.online/fr/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Cliquer les cibles dans l’ordre', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'fr-FR',
  name: 'Cliquer les cibles dans l’ordre',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: DESCRIPTION,
  url: PAGE_URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'fr-FR',
  name: 'Cliquer les cibles dans l’ordre',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Nécessite HTML5 Canvas et JavaScript',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'fr-FR',
  name: 'Cliquer les cibles dans l’ordre',
  url: PAGE_URL,
  description: 'Exercice à la souris : cliquer dans l’ordre des cibles reliées par une ligne pointillée. À chaque niveau, les cibles rétrécissent, s’éloignent et le temps par chaîne diminue.',
  genre: ['Mouse Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment se joue l’exercice ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chaque manche affiche une chaîne de 3 cibles (niveaux 1–2), 4 cibles (niveaux 3–5) ou 5 cibles (dès le niveau 6). Une ligne pointillée violette indique l’ordre et la cible active brille. Cliquez les cibles dans cet ordre à la souris (ou touchez-les sur écran tactile). Aucun numéro n’est affiché : suivez la ligne.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionnent le temps et les points ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vous démarrez avec 45 secondes. Chaque cible touchée dans l’ordre ajoute 2 s (60 s maximum). Une chaîne complète rapporte 150 points × multiplicateur de série (jusqu’à 3,0×) × bonus de niveau. La partie s’arrête quand le chrono tombe à zéro.',
      },
    },
    {
      '@type': 'Question',
      name: 'À quoi servent les cibles rouges marquées « ! » ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ce sont des pièges, présents à partir du niveau 6. Cliquer dessus compte comme un clic raté : -1 s, série remise à zéro et nouvelle chaîne. Elles ne sont pas sur la ligne pointillée, il suffit de les ignorer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il une limite de temps par chaîne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, si l’option Timeout est active (par défaut). Au début, chaque chaîne dispose d’environ 3,2 secondes, puis moins à mesure que le niveau et la série augmentent. Si le temps expire : -1 s, série remise à zéro et nouvelle chaîne.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que change le niveau ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le niveau monte de 1 tous les 1 750 points, sans plafond. Plus de cibles par chaîne, des cibles plus petites et plus éloignées, et moins de temps par chaîne. Aux premiers niveaux, les cibles suivantes sont plus petites et plus pâles pour guider ; cet indice disparaît vers le niveau 10.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence avec un test CPS ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un test CPS compte seulement vos clics au même endroit. Ici, vous déplacez la souris d’une cible à l’autre dans un ordre imposé et devez vous arrêter précisément : le trajet et la précision comptent plus que la vitesse de clic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment la précision est-elle calculée ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'C’est la part de cibles touchées dans le bon ordre sur l’ensemble des tentatives (clics, clics sur piège et chaînes expirées). L’écran de fin affiche la précision, les chaînes terminées, le niveau maximal et le combo maximal.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
  name: 'Comment cliquer les cibles dans l’ordre',
  description: 'Les étapes pour suivre la ligne pointillée et toucher les cibles une à une.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Lire la ligne',
      text: 'Avant le premier clic, repérez l’ordre dans lequel la ligne violette relie les cibles.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Commencer par la cible lumineuse',
      text: 'Cliquez la cible qui brille, puis suivez la ligne jusqu’à la suivante.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Éviter les pièges',
      text: 'Ne cliquez pas les cibles rouges « ! » (dès le niveau 6), seulement celles de la ligne.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Lire le résultat',
      text: 'Regardez précision, chaînes terminées, niveau maximal et combo maximal pour fixer votre prochain objectif.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('lashley1951', 'keele1968', 'fitts1954'),
  intro: {
    title: 'Cliquer les cibles dans l’ordre : le principe',
    paragraphs: [
      'Cet exercice consiste à cliquer les cibles dans l’ordre imposé plutôt que la plus proche. Le temps entre deux cibles dépend de leur distance et de leur taille (Fitts, 1954), et une suite fixe de gestes peut être préparée comme un seul plan moteur (Lashley, 1951 ; Keele, 1968).',
      'La mesure dépend du minuteur du navigateur et de la fréquence de l’écran : comparez vos scores sur le même appareil avec les mêmes réglages de souris.',
    ],
  },
  benchmark: {
    title: 'Paliers d’entraînement',
    description: 'Paliers indicatifs fixés par SkillDrills pour l’entraînement. Ce ne sont ni des normes scientifiques, ni des statistiques d’utilisateurs, ni des percentiles.',
    columns: ['Palier', 'Niveau atteint', 'Précision'],
    rows: [
      { tier: 'Palier 1', level: 'Niveau 12+', accuracy: '95 % et plus' },
      { tier: 'Palier 2', level: 'Niveau 9–11', accuracy: '90–94 %' },
      { tier: 'Palier 3', level: 'Niveau 6–8', accuracy: '85–89 %' },
      { tier: 'Palier 4', level: 'Niveau 3–5', accuracy: '75–84 %' },
      { tier: 'Palier 5', level: 'Niveau 1–2', accuracy: 'moins de 75 %' },
    ],
  },
  protocols: {
    title: 'Conseils d’entraînement',
    description: 'Pour progresser de façon régulière.',
    items: [
      {
        title: 'Lire la ligne d’abord',
        description: 'Planifiez toute la chaîne comme un seul mouvement avant de cliquer, au lieu de chercher chaque cible.',
      },
      {
        title: 'Vite sur la distance, précis à l’arrivée',
        description: 'Les grands déplacements avec le bras, l’arrêt sur la cible avec le poignet et les doigts. Les cibles rétrécissent avec le niveau.',
      },
      {
        title: 'Ne pas se précipiter',
        description: 'Chaque erreur coûte 1 seconde et la série. Un rythme régulier et propre rapporte plus de points.',
      },
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

const frCopy = {
  title: 'Cliquer les cibles dans l’ordre',
  subtitle: 'Clic séquentiel : suivez la ligne pointillée d’une cible à l’autre',
  score: 'Score',
  timeLeft: 'Temps restant',
  accuracy: 'Précision',
  bestScore: 'Meilleur score',
  startButtonText: 'Commencer',
  startSubtitle: 'Clic dans l’ordre • départ à 45 s, +2 s par cible',
  getReady: 'Préparez-vous',
  rulesTitle: 'Déroulement et points',
  rulesItems: [
    { num: '1', text: 'Cible dans l’ordre', highlight: '+2 s (max. 60 s)', result: 'Chaîne : 150 pts × multi' },
    { num: '2', text: 'Multiplicateur de série', highlight: 'jusqu’à 3,0×', result: 'monte à chaque chaîne' },
    { num: '3', text: 'Niveau', highlight: '+1 tous les 1 750 pts', result: 'cibles plus nombreuses et petites' },
    { num: '4', text: 'Raté / piège / temps écoulé', highlight: '-1 s', result: 'série remise à zéro' }
  ],
  chainsCleared: 'Chaînes terminées',
  peakLevel: 'Niveau max',
  maxCombo: 'Combo max',
  playAgain: 'Rejouer',
  shareTitle: 'Partager',
  exitTitle: 'Quitter'
};

export default function FrenchFingerSequencingPage() {
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
      <FingerSequencingClient copy={frCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
