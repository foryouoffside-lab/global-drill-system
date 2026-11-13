import CrossBodyMovementClient from '@/app/drills/physical/coordination/cross-body-movement/CrossBodyMovementClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/fr/drills/physical/coordination/cross-body-movement';
const TITLE = "Exercice de coordination visuo-motrice | SkillDrills";
const DESCRIPTION = "Exercice de coordination visuo-motrice à la souris : guidez le curseur d'un bord de l'écran à l'autre sans sortir d'un couloir étroit. 45 s, gratuit.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "coordination visuo-motrice à la souris",
  "exercice coordination visuo motrice",
  "balayage croisé",
  "jeu de couloir à la souris"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/cross-body-movement'),
  },
  openGraph: {
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    "q": "Comment fonctionne cet exercice de coordination visuo-motrice ?",
    "a": "Placez le curseur sur le nœud cyan au bord de l'écran : la liaison démarre sans clic. Si vous atteignez le nœud magenta en face sans sortir du couloir autour de la ligne, vous marquez des points."
  },
  {
    "q": "Que se passe-t-il si je sors du couloir ?",
    "a": "L'essai s'arrête et une nouvelle paire de nœuds apparaît. Le multiplicateur de combo retombe à 1,0x, mais le score et le temps restant sont conservés."
  },
  {
    "q": "Qu'est-ce qui change avec le niveau ?",
    "a": "La tolérance du couloir (l'écart permis par rapport à la ligne) passe de 10 px à 4 px, le rayon des nœuds de 16 px à 8 px, et les nœuds se rapprochent des bords, ce qui allonge le trajet. Les points de base par réussite passent de 10 à 40."
  },
  {
    "q": "Comment le score est-il calculé ?",
    "a": "Chaque nœud atteint rapporte les points de base du niveau multipliés par le combo, qui monte jusqu'à 3,0x avec les réussites consécutives."
  },
  {
    "q": "Combien de temps dure une partie ?",
    "a": "Exactement 45 secondes ; le niveau repart de 1 à chaque partie."
  },
  {
    "q": "Comment rester dans le couloir ?",
    "a": "Repérez le nœud d'en face avant de toucher le nœud de départ, gardez un rythme calme et régulier et finissez lentement près de la cible. Avec 4 px de tolérance aux niveaux élevés, ralentir un peu aide à garder la série."
  },
  {
    "q": "Fonctionne-t-il sur mobile ?",
    "a": "Le jeu est conçu pour la souris ; un ordinateur est conseillé. La touche Échap arrête la partie en cours."
  },
  {
    "q": "Est-ce gratuit ?",
    "a": "Oui, sans installation ni inscription. Les records restent uniquement dans votre navigateur."
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills Accueil", item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: "Entraînement physique", item: 'https://skilldrills.online/fr/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "Coordination visuo-motrice à la souris", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Coordination visuo-motrice à la souris",
  description: DESCRIPTION,
  url: PAGE_URL,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Navigateur récent compatible HTML5 Canvas et souris",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/fr' },
  inLanguage: 'fr',
  dateModified: '2026-11-10',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr',
  dateModified: '2026-11-10',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const guide = {
  "heading": "Coordination visuo-motrice à la souris : règles et conseils",
  "intro": [
    "Cet exercice de coordination visuo-motrice à la souris est un jeu gratuit dans le navigateur : vous guidez le curseur avec précision dans un couloir étroit. Touchez le nœud cyan sur un bord de l'écran, puis suivez la ligne jusqu'au nœud magenta du côté opposé. Chaque trajet est un balayage croisé d'un bord à l'autre ; si vous sortez du couloir, l'essai s'arrête et une nouvelle paire de nœuds apparaît.",
    "Une partie dure 45 secondes et le niveau repart de 1. En montant, la tolérance du couloir passe de 10 px à 4 px, le rayon des nœuds de 16 px à 8 px, et les nœuds glissent vers les bords. La difficulté suit l'idée de la loi de Fitts (Fitts, 1954) : plus le trajet est long et la cible petite, plus le geste est difficile. C'est un jeu d'entraînement au contrôle de la souris."
  ],
  "techniques": {
    "title": "Conseils pour rester dans le couloir",
    "items": [
      {
        "name": "Regarder d'abord la cible",
        "desc": "Repérez le nœud d'en face avant de toucher le nœud de départ : la direction est juste dès le début.",
        "tips": "La liaison démarre au contact du nœud, donc préparez la direction pendant l'approche."
      },
      {
        "name": "Vitesse régulière, trajet droit",
        "desc": "Un geste brusque fait trembler le curseur à la fin et sortir du couloir. Gardez un rythme calme et régulier.",
        "tips": "Avec 4 px de tolérance aux niveaux élevés, ralentir un peu aide à garder la série."
      },
      {
        "name": "Freiner près de la cible",
        "desc": "Approcher vite puis finir lentement près de la cible (Woodworth, 1899) aide à toucher les petits nœuds.",
        "tips": "Juste avant le nœud, relâchez la tension du poignet et arrivez en douceur."
      }
    ]
  },
  "steps": [
    "Lancez la partie et attendez le compte à rebours.",
    "Repérez la position du nœud magenta d'arrivée.",
    "Placez le curseur sur le nœud cyan de départ.",
    "Suivez le couloir jusqu'au nœud magenta."
  ],
  "audience": "Joueurs et utilisateurs d'ordinateur qui veulent s'exercer à des mouvements de souris longs et droits.",
  faqs: faqItems,
  sources: pickSources('carey1996', 'fitts1954', 'woodworth1899'),
};

export default function CrossBodyMovementPageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CrossBodyMovementClient
        copy={{
  "title": "Coordination visuo-motrice à la souris",
  "subtitle": "Traversez l'écran sans sortir du couloir",
  "rulesTitle": "Règles de l'exercice de coordination visuo-motrice",
  "rules": [
    {
      "title": "Toucher le nœud de départ",
      "text": "Placez le curseur sur le nœud cyan au bord de l'écran. La liaison démarre aussitôt, sans clic."
    },
    {
      "title": "Rester dans le couloir",
      "text": "Suivez le couloir autour de la ligne qui relie les deux nœuds jusqu'au nœud magenta en face."
    },
    {
      "title": "Atteindre la cible",
      "text": "Si vous touchez le nœud magenta sans sortir du couloir, vous marquez des points et votre série augmente."
    },
    {
      "title": "Sortie de couloir",
      "text": "Sortir du couloir met fin à l'essai et une nouvelle paire de nœuds apparaît. Seul le multiplicateur retombe à 1,0x ; score et temps restent."
    }
  ],
  "aboutTitle": "À propos de l'exercice de coordination visuo-motrice",
  "aboutHeading": "Traverser l'écran dans un couloir étroit",
  "aboutText": "Dans ce jeu de 45 secondes, vous reliez deux nœuds qui apparaissent sur les bords gauche et droit de l'écran. Leur hauteur est aléatoire, donc le trajet est tantôt diagonal, tantôt horizontal. Avec les niveaux, la tolérance du couloir passe de 10 px à 4 px, les nœuds rapetissent et se rapprochent des bords, ce qui allonge le trajet.",
  "hudLabels": {
    "score": "Score",
    "timeLeft": "Temps restant",
    "bestScore": "Meilleur score",
    "bestCombo": "Meilleur combo"
  }
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/cross-body-movement" />
    </>
  );
}
