import KeyboardRecognitionClient from '@/app/drills/motor/movement-speed/keyboard-recognition/KeyboardRecognitionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/fr/drills/motor/movement-speed/keyboard-recognition';
const TITLE = 'Test de réaction clavier | Touches de jeu | SkillDrills';
const DESCRIPTION = 'Test de réaction clavier gratuit : appuyez sur la touche affichée avant la fin du chrono et ignorez les faux signaux. 60 s, temps de réaction, précision et KPM.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'test de réaction clavier',
    'réaction touches gaming',
    'entraînement keybinds',
    'touches Valorant',
    'réflexes clavier',
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
    languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-recognition'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Contrôle Moteur', item: 'https://skilldrills.online/fr/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Vitesse de Mouvement', item: 'https://skilldrills.online/fr/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Test de réaction clavier', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Computer_keyboard", "https://en.wikipedia.org/wiki/Reaction_time"],
  inLanguage: 'fr-FR',
  name: 'Test de réaction clavier',
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
  name: 'Test de réaction clavier',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navigateur avec JavaScript et clavier physique',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'fr-FR',
  name: 'Test de réaction clavier',
  url: PAGE_URL,
  description: 'Jeu de touches de 60 secondes : appuyer sur les touches affichées (seules, en suite de 2 à 5 ou de mémoire) avant la fin du chrono et ignorer les faux signaux.',
  genre: ['Keyboard Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop'],
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
      name: 'Que mesure ce test de réaction clavier ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le temps entre l’apparition d’une touche à l’écran et votre bonne frappe. L’écran de fin affiche le temps de réaction moyen (ms), la précision, le KPM (frappes par minute), le combo maximal et un rang. C’est votre réaction qui est mesurée, pas la latence du clavier ni votre vitesse de frappe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels signaux peuvent apparaître ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Des touches seules, des suites de 2 à 3 touches (5 en mode « longues séquences »), un mode mémoire qui montre 3 touches pendant 1 seconde puis les cache, et de faux signaux sur lesquels il ne faut rien presser. Les touches possibles : A–Z, 0–9, Espace, Maj, Ctrl, Alt, Tab, Entrée, symboles, F1–F6 et flèches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment sont calculés les points ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bonne réponse : 120 points × multiplicateur de combo, ×1,4 pour une suite, ×1,8 en mode mémoire. Laisser passer un faux signal sans appuyer rapporte +200. Mauvaise touche, réaction à un faux signal ou temps écoulé remettent le combo à zéro. Une partie dure toujours 60 secondes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionnent la difficulté et le chrono ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En mode « adaptatif » (par défaut), chaque signal dure environ 1,8 seconde au départ, raccourcit quand vous enchaînez (jusqu’à environ 0,8 s) et rallonge après une erreur. Niveaux fixes : Easy 1,5×, Medium 1,0×, Hard 0,75×, Expert 0,55× du temps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je m’entraîner avec mes touches Valorant ou Minecraft ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Les préréglages Valorant, CS2, Fortnite, Minecraft, League of Legends et Apex Legends ne proposent que les touches par défaut du jeu choisi. Ce n’est pas un outil officiel de ces jeux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le test fonctionne-t-il avec un clavier AZERTY ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les touches sont reconnues par leur position physique et affichées avec les lettres du QWERTY américain. Sur AZERTY, « A » correspond donc à votre touche Q, « W » à Z, « Q » à A, « Z » à W, « M » à la virgule, et les chiffres demandent la rangée du haut. Les préréglages de jeu restent cohérents avec la position de ZQSD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce un testeur de clavier ou un test de frappe ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. Il ne vérifie pas si toutes vos touches fonctionnent et ne mesure pas de mots par minute. C’est un entraînement de réaction sur les touches de jeu, qui demande un clavier physique ; un appareil uniquement tactile ne peut pas lancer la partie.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
  name: 'Comment faire le test de réaction clavier',
  description: 'Réagir aux touches affichées pendant 60 secondes et s’arrêter sur les faux signaux.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Choisir le mode et le préréglage',
      text: 'Choisissez le mode, la difficulté et éventuellement un préréglage de jeu, main gauche en position habituelle.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Regarder l’écran',
      text: 'Sans regarder le clavier, identifiez la touche affichée au centre de l’écran.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Appuyer ou s’abstenir',
      text: 'Appuyez sur les vrais signaux avant la fin du chrono ; sur un faux signal, ne touchez à rien jusqu’à ce qu’il disparaisse.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Lire le résultat',
      text: 'Après 60 secondes, consultez temps de réaction, précision, KPM et combo maximal.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('donders1868', 'hick1952', 'logan1984', 'sternberg1966'),
  intro: {
    title: 'Le test de réaction clavier en bref',
    paragraphs: [
      'Le test de réaction clavier vous demande de choisir, parmi de nombreuses touches, celle qui s’affiche : c’est une tâche de réaction de choix (Donders, 1868). Plus il y a de touches possibles, plus la réaction est lente (Hick, 1952) ; rester immobile face à un faux signal entraîne l’inhibition de la réponse (Logan, 1984).',
      'Les mesures dépendent du minuteur du navigateur, de la fréquence de l’écran et du clavier : comparez vos résultats sur le même appareil.',
    ],
  },
  benchmark: {
    title: 'Rangs de l’exercice',
    description: 'Le rang découle des seuils de points et de précision définis dans le code de l’exercice. Ni normes scientifiques, ni statistiques d’utilisateurs, ni percentiles.',
    columns: ['Rang', 'Points', 'Précision'],
    rows: [
      { grade: 'S+', score: '3 500+', accuracy: '95 %+' },
      { grade: 'S', score: '2 200+', accuracy: '90 %+' },
      { grade: 'A', score: '1 400+', accuracy: '85 %+' },
      { grade: 'B', score: '700+', accuracy: '80 %+' },
      { grade: 'C', score: '300+', accuracy: '75 %+' },
      { grade: 'D', score: '100+', accuracy: '65 %+' },
    ],
  },
  protocols: {
    title: 'Conseils d’entraînement',
    description: 'Moins d’erreurs, de meilleurs scores.',
    items: [
      {
        title: 'Penser en zones',
        description: 'Retenez déplacement, capacités et rangée de chiffres comme des zones : vous trouvez le bon doigt plus vite.',
      },
      {
        title: 'S’arrêter sur les faux signaux',
        description: 'Appuyer avant d’avoir regardé casse le combo. Identifiez d’abord le type de signal, puis frappez.',
      },
      {
        title: 'Taper les suites d’un bloc',
        description: 'Mémorisez une suite de 2 à 5 touches comme un seul motif et enchaînez-la (Sternberg, 1966).',
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
  title: 'Test de réaction clavier',
  subtitle: 'Appuyez sur la touche affichée : réaction sur les touches de jeu • 60 s',
};

export default function FrenchKeyboardRecognitionPage() {
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
      <KeyboardRecognitionClient copy={frCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
    </>
  );
}
