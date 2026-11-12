import PredictivePursuitClient from '@/app/drills/visual-tracking/predictive-pursuit/PredictivePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/predictive-pursuit';
const title = "Poursuite oculaire prédictive | SkillDrills";
const description = "Exercice gratuit : toutes les 2,2 s environ, la cible glisse vers un nouveau point en ralentissant. Sans la ligne, anticipez où elle va s’arrêter.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite oculaire prédictive", "anticiper une trajectoire", "point d’arrivée cible", "exercice des yeux en ligne", "poursuite oculaire", "exercice oculaire gratuit"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/predictive-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'fr_FR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "Accueil", item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: "Exercices", item: 'https://skilldrills.online/fr/drills' },
    { '@type': 'ListItem', position: 3, name: "Poursuite Visuelle", item: 'https://skilldrills.online/fr/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "Poursuite oculaire prédictive", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Poursuite oculaire prédictive",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/fr' },
  inLanguage: 'fr',
  dateModified: '2026-11-12',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Comment pratiquer la poursuite oculaire prédictive",
  description: "Quatre étapes pour suivre une cible jusqu’à son nouveau point d’arrêt et l’anticiper.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "S’installer confortablement",
    "text": "Asseyez-vous à une distance confortable de l’écran, épaules et nuque relâchées."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "Commencer avec la ligne",
    "text": "Gardez d’abord visible la ligne qui relie la cible à son point d’arrivée et suivez-la jusqu’à l’arrêt."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Anticiper l’arrêt",
    "text": "Activez Hide Line et devinez, d’après la direction et la vitesse au départ, où la cible va s’arrêter."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "Un réglage à la fois",
    "text": "Quand c’est facile, augmentez la vitesse ou activez Masquer la ligne puis Vitesse aléatoire, l’un après l’autre."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "Comment la cible se déplace-t-elle en poursuite oculaire prédictive ?",
    "a": "À la vitesse 1,0x, un point aléatoire de l’écran devient la nouvelle destination environ toutes les 2,2 secondes. La cible part vite vers ce point, ralentit progressivement, s’arrête en 1,5 seconde environ et attend la destination suivante. Il n’y a ni masquage ni disparition. C’est un exercice du regard dans le navigateur, pas un examen de la vue."
  },
  {
    "q": "Qu’est-ce qu’on anticipe exactement ?",
    "a": "Le point où la cible s’arrête. Par défaut, une ligne relie la cible à ce point, qui est donc visible. Avec Hide Line, la ligne disparaît : il faut déduire le point d’arrêt de la direction de départ et du ralentissement."
  },
  {
    "q": "Que changent la vitesse et Random Speed ?",
    "a": "Une vitesse plus élevée accélère à la fois les déplacements et les changements de destination. Random Speed fait varier la vitesse en continu et rend irrégulier l’intervalle avant la destination suivante."
  },
  {
    "q": "L’exercice mesure-t-il mes mouvements oculaires ou un score ?",
    "a": "Non. Le navigateur ne sait pas où vous regardez et il n’y a ni clic ni détection de touche. Il n’y a pas de score : seul le nombre de séances terminées est enregistré dans ce navigateur. C’est à vous de garder le regard là où l’exercice le demande."
  },
  {
    "q": "Quels réglages sont disponibles ?",
    "a": "Après un compte à rebours 3-2-1, la séance dure 30, 45, 60, 90 ou 120 secondes (60 par défaut). Vous réglez la vitesse de 0,5x à 9,0x, la taille de la cible de 10 à 50 px, sa couleur, les options Hide Line (masquer la ligne), Random Speed (vitesse aléatoire), Gaze Trail (traînée), Neon Glow et Scanlines, ainsi qu’un fond clair ou sombre. Échap arrête la séance à tout moment."
  },
  {
    "q": "Est-ce que ma vue ou ma visée vont s’améliorer ?",
    "a": "Rien n’est garanti. Ce n’est ni un examen de la vue ni une thérapie, mais un outil pour s’exercer à regarder une cible. Il ne promet ni meilleure acuité ni meilleure visée. En cas de gêne visuelle, consultez un professionnel."
  },
  {
    "q": "Combien de temps s’entraîner ?",
    "a": "Quelques séances de 1 à 2 minutes avec des pauses suffisent. Si vos yeux sont fatigués ou secs, clignez et regardez au loin ; arrêtez en cas de douleur, vertige, nausée ou mal de tête."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "Poursuite oculaire prédictive : le guide",
  "intro": [
    "La poursuite oculaire prédictive consiste à suivre des yeux une cible qui glisse vers un nouveau point en ralentissant, et à anticiper l’endroit où elle s’arrêtera. À la vitesse 1,0x, une destination aléatoire est choisie environ toutes les 2,2 secondes ; sans la ligne de destination, il faut la deviner d’après le mouvement.",
    "La poursuite lisse démarre avec un léger retard après le début du mouvement ; l’anticipation aide à réduire ce retard (Kowler, 1989 ; Barnes, 2008). L’exercice répète des situations où cette anticipation est utile.",
    "Le navigateur connaît seulement la position où la cible est dessinée et vos réglages, pas l’endroit où vos yeux regardent réellement. Il n’affiche ni score ni précision : comparez plutôt votre aisance et votre concentration avec le même écran, la même distance et les mêmes réglages. La fréquence de rafraîchissement et la latence d’affichage changent aussi le rendu du mouvement (Woods et al., 2015)."
  ],
  "benchmarks": {
    "title": "Étapes de pratique (repères SkillDrills)",
    "headers": [
      "Étape",
      "Objectif de pratique"
    ],
    "rows": [
      [
        "Étape 1",
        "1,0x, ligne visible, suivre le trajet et l’arrêt"
      ],
      [
        "Étape 2",
        "Regarder le point d’arrivée avant la cible"
      ],
      [
        "Étape 3",
        "Hide Line activé : anticiper d’après le départ"
      ],
      [
        "Étape 4",
        "Ajouter vitesse ou Random Speed, un à la fois"
      ]
    ],
    "note": "Repères de pratique proposés par SkillDrills : ni normes de test, ni statistiques d’utilisateurs, ni percentiles."
  },
  "techniques": {
    "title": "Conseils d’exécution",
    "items": [
      {
        "name": "Bien observer le départ",
        "desc": "Concentrez-vous sur la direction et la vitesse au moment où la cible démarre. Le ralentissement permet d’estimer le point d’arrêt.",
        "tips": "Si c’est trop difficile sans ligne, réaffichez-la pour réapprendre le schéma."
      },
      {
        "name": "Regarder la cible, pas le curseur",
        "desc": "La souris n’est pas utilisée. Posez la main et suivez uniquement avec les yeux.",
        "tips": "Vérifiez de temps en temps que la tête et la nuque ne tournent pas."
      },
      {
        "name": "Un seul paramètre plus difficile à la fois",
        "desc": "Augmentez séparément la vitesse, Masquer la ligne et Vitesse aléatoire. Si l’aisance disparaît, revenez au réglage précédent.",
        "tips": "Après un changement, ne comparez pas directement avec les anciennes séances."
      },
      {
        "name": "Court, avec des pauses",
        "desc": "Entre deux séances courtes, clignez des yeux et regardez au loin. Plus long n’est pas mieux.",
        "tips": "Arrêtez immédiatement en cas de douleur ou de vertige."
      }
    ]
  },
  "steps": [
    "Asseyez-vous à une distance confortable de l’écran, épaules et nuque relâchées.",
    "Commencez par 30 à 60 secondes, vitesse 1,0x, ligne visible.",
    "Dès que la cible démarre, estimez son point d’arrêt d’après sa direction et son ralentissement, puis suivez-la.",
    "Ensuite, augmentez la vitesse ou activez Masquer la ligne puis Vitesse aléatoire, un réglage à la fois."
  ],
  "audience": "Toute personne qui veut s’exercer simplement à anticiper où s’arrêtera une cible en mouvement."
},
  faqs,
  sources: pickSources('robinson1965', 'kowler1989', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Poursuite oculaire douce continue" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite lors de changements de direction" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite d une cible évasive" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Stabilité de la fixation oculaire" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en huit" },
    { href: "/fr/drills/visual-tracking/momentum-teleport-pursuit", label: "Poursuite d une cible qui saute" }
  ],
};

export default function FrenchPredictivePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PredictivePursuitClient copy={{"title": "Poursuite oculaire prédictive", "subtitle": "Anticiper l’endroit où la cible va s’arrêter", "description": "Poursuite oculaire prédictive : toutes les 2,2 secondes environ (à 1,0x), la cible glisse vers un nouveau point en ralentissant. Anticipez où elle s’arrête ; Hide Line masque la ligne de destination. Pas de clic ni de score ; le navigateur n’enregistre pas votre regard."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
