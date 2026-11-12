import ComplexPatternClient from '@/app/drills/physical/coordination/complex-pattern/ComplexPatternClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/fr/drills/physical/coordination/complex-pattern';
const TITLE = "Jeu visuo-spatial : retracer un parcours | SkillDrills";
const DESCRIPTION = "Ce jeu visuo-spatial en ligne affiche un parcours de 3 à 8 points pendant un instant : mémorisez-le puis retracez-le à la souris. Parties de 45 s, gratuit.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "jeu visuo-spatial",
  "jeux visuo spatial en ligne",
  "mémoriser un parcours",
  "mémoire de travail visuelle",
  "retracer un parcours"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/complex-pattern'),
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
    "q": "Comment fonctionne ce jeu visuo-spatial ?",
    "a": "Un parcours s'affiche un court instant puis disparaît. Maintenez le bouton de la souris dans le nœud cyan, passez par les points dans l'ordre retenu et relâchez dans le nœud magenta. Votre tracé est ensuite comparé à l'original."
  },
  {
    "q": "Comment la similarité est-elle calculée ?",
    "a": "Votre tracé et le parcours d'origine sont découpés en autant de points. La distance moyenne au point le plus proche (en pixels) est soustraite de 100. Si le départ ou l'arrivée est à plus d'environ 45 px du nœud, l'essai compte comme un échec."
  },
  {
    "q": "Qu'est-ce qui change avec le niveau ?",
    "a": "Le parcours passe de 3 à 8 points, l'affichage de 2,0 à 0,6 seconde et la similarité demandée de 50 % à 85 %. Des parcours en zigzag peuvent apparaître dès le niveau 3, en spirale dès le niveau 4."
  },
  {
    "q": "Une erreur fait-elle perdre des points ?",
    "a": "Non. Sous le seuil, seul le multiplicateur de combo retombe à 1,0x ; le score et le temps restant sont conservés. Le multiplicateur monte jusqu'à 3,0x avec les réussites consécutives."
  },
  {
    "q": "Combien de temps dure une partie ?",
    "a": "Exactement 45 secondes. Le niveau repart de 1 à chaque partie."
  },
  {
    "q": "Est-ce un exercice de rééducation, par exemple pour la dyspraxie visuo-spatiale ?",
    "a": "Non. C'est un jeu d'entraînement à la souris, pas un outil d'évaluation ni de rééducation. Pour un enfant ou un adulte suivi, demandez conseil à l'ergothérapeute ou au professionnel qui l'accompagne."
  },
  {
    "q": "Est-ce un test de mémoire visuelle ?",
    "a": "Non, il n'y a ni diagnostic ni normes. Les tests de mémoire de SkillDrills se trouvent dans la catégorie Mémoire."
  },
  {
    "q": "Est-ce gratuit ? Fonctionne-t-il sur mobile ?",
    "a": "Oui, c'est gratuit, sans installation ni inscription, et les records restent dans votre navigateur. Le jeu se contrôle en glissant la souris : un ordinateur est conseillé."
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills Accueil", item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: "Entraînement physique", item: 'https://skilldrills.online/fr/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "Jeu visuo-spatial : mémoriser et retracer un parcours", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Jeu visuo-spatial : mémoriser et retracer un parcours",
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
  "heading": "Jeu visuo-spatial : règles et conseils",
  "intro": [
    "Ce jeu visuo-spatial gratuit se joue dans le navigateur : un parcours s'affiche brièvement, vous le mémorisez, puis vous le retracez à la souris. Quand il disparaît, partez du nœud cyan, passez par les points dans l'ordre retenu et relâchez le bouton dans le nœud magenta. La proximité entre votre tracé et l'original est calculée en pourcentage de similarité.",
    "Une partie dure 45 secondes. Le niveau repart de 1 à chaque partie et monte avec les points et les séries ; vers le niveau 15, le jeu atteint 8 points, 0,6 seconde d'affichage et 85 % de similarité demandée. La difficulté s'appuie sur le modèle de la mémoire de travail visuelle et son calepin visuo-spatial (Baddeley & Hitch, 1974) et sur les travaux qui estiment sa capacité à environ quatre éléments (Cowan, 2001). C'est un jeu d'entraînement, pas un test de mémoire avec diagnostic ou normes."
  ],
  "techniques": {
    "title": "Conseils pour retracer plus précisément",
    "items": [
      {
        "name": "Retenir des formes, pas des points",
        "desc": "À partir de 5 points, découpez le parcours en deux ou trois grandes formes, par exemple un N ou un triangle plus un segment, plutôt que de mémoriser chaque point.",
        "tips": "Pendant l'affichage, repérez d'abord le départ et l'arrivée, puis retenez le reste comme un contour."
      },
      {
        "name": "Viser juste au départ et à l'arrivée",
        "desc": "Commencer à plus d'environ 45 px du nœud de départ ou relâcher hors du nœud d'arrivée compte comme un échec, même si la forme est bonne.",
        "tips": "Avant de glisser, vérifiez que le curseur est bien dans le nœud cyan."
      },
      {
        "name": "Ralentir dans les angles",
        "desc": "Rapide sur les lignes droites, plus lent près des angles : vous dépasserez moins les points.",
        "tips": "Un tracé continu et régulier donne en général une meilleure similarité qu'un tracé précipité."
      }
    ]
  },
  "steps": [
    "Lancez la partie et attendez la fin du compte à rebours.",
    "Mémorisez la forme et l'ordre du parcours affiché.",
    "Quand il disparaît, appuyez sur le bouton de la souris dans le nœud cyan.",
    "Passez par les points dans l'ordre retenu et relâchez dans le nœud magenta."
  ],
  "audience": "Adolescents et adultes qui veulent s'exercer à retenir une forme vue un instant et à la reproduire précisément à la souris.",
  faqs: faqItems,
  sources: pickSources('baddeley1974', 'cowan2001', 'lashley1951', 'woodworth1899'),
};

export default function ComplexPatternPageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComplexPatternClient
        copy={{
  "title": "Jeu visuo-spatial : mémoriser et retracer un parcours",
  "subtitle": "Mémorisez le parcours, puis retracez-le à la souris",
  "rulesTitle": "Règles du jeu visuo-spatial",
  "rules": [
    {
      "title": "Mémoriser le parcours",
      "text": "Un parcours de points et de segments s'affiche brièvement. Retenez sa forme et son ordre avant qu'il disparaisse."
    },
    {
      "title": "Glisser depuis le départ",
      "text": "Appuyez sur le bouton de la souris dans le nœud cyan, passez par tous les points et relâchez dans le nœud magenta."
    },
    {
      "title": "Similarité minimale",
      "text": "Si votre tracé atteint la similarité demandée (50 % au début, jusqu'à 85 % ensuite) et part et arrive aux bons nœuds, le motif est validé."
    },
    {
      "title": "Aucune perte de points",
      "text": "Sous le seuil, seul le multiplicateur de combo retombe à 1,0x. Le score et les 45 secondes ne sont pas touchés."
    }
  ],
  "aboutTitle": "À propos du jeu visuo-spatial",
  "aboutHeading": "Voir, mémoriser, retracer",
  "aboutText": "Un parcours apparaît un instant puis disparaît ; vous le redessinez de mémoire en faisant glisser la souris. Au début il compte 3 points et reste visible 2 secondes ; avec les niveaux il monte à 8 points, l'affichage descend à 0,6 seconde et des formes en zigzag et en spirale apparaissent.",
  "hudLabels": {
    "getReady": "PRÊT",
    "points": "Points",
    "accuracy": "Précision moy.",
    "traced": "Tracés",
    "missed": "Manqués",
    "peakLevel": "Niveau max",
    "playAgain": "Rejouer"
  }
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/complex-pattern" />
    </>
  );
}
