import SpatialShiftPursuitClient from '@/app/drills/visual-tracking/spatial-shift-pursuit/SpatialShiftPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/spatial-shift-pursuit';
const title = "Poursuite visuelle à trajectoire changeante | SkillDrills";
const description = "Exercice gratuit : la cible avance en ligne droite, rebondit sur les bords et change sans prévenir de direction et de vitesse. Gardez-la dans votre regard.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite visuelle à trajectoire changeante", "changement de trajectoire", "poursuite oculaire", "exercice des yeux en ligne", "suivre une cible mobile", "exercice oculaire gratuit"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/spatial-shift-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Poursuite visuelle à trajectoire changeante", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Poursuite visuelle à trajectoire changeante",
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
  name: "Comment suivre une cible à trajectoire changeante",
  description: "Quatre étapes pour suivre une cible qui change brusquement de direction et de vitesse.",
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
    "name": "Suivre les lignes droites",
    "text": "Suivez la cible calmement pendant qu’elle avance en ligne droite et rebondit sur les bords."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Se recaler après un changement",
    "text": "Quand la direction et la vitesse changent soudain, recalez le regard sur le nouveau mouvement et continuez."
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
    "q": "Comment la cible se déplace-t-elle dans cet exercice ?",
    "a": "La cible avance en ligne droite, rebondit sur les bords et accélère légèrement à chaque rebond (environ 2 %). À des moments aléatoires, elle change sans prévenir de direction et de vitesse : le sens horizontal et le sens vertical s’inversent ou non, et la vitesse est multipliée par 0,8 à 1,3. Il n’y a ni saut ni mouvement de l’écran. C’est un exercice du regard, pas un examen de la vue."
  },
  {
    "q": "À quelle fréquence la trajectoire change-t-elle ?",
    "a": "Sans rythme fixe, au hasard, le plus souvent environ une fois par seconde. Avec Random Speed, la probabilité de changement double et la vitesse varie en plus en continu."
  },
  {
    "q": "À quoi sert le trait sur la cible ?",
    "a": "Il montre la direction et la vitesse actuelles. Avec Hide Line, il disparaît : il faut alors repérer le changement au seul mouvement de la cible."
  },
  {
    "q": "L’exercice mesure-t-il mes mouvements oculaires ou un score ?",
    "a": "Non. Le navigateur ne sait pas où vous regardez et il n’y a ni clic ni détection de touche. En fin de séance, la page affiche seulement des valeurs du pointeur (temps sur la cible, distance au centre), pas des yeux ; seul le nombre de séances terminées est enregistré dans ce navigateur. C’est à vous de garder le regard là où l’exercice le demande."
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
  "heading": "Poursuite visuelle à trajectoire changeante : le guide",
  "intro": [
    "La poursuite visuelle à trajectoire changeante consiste à suivre des yeux une cible qui avance en ligne droite, rebondit sur les bords et change sans prévenir de direction et de vitesse. Les changements sont aléatoires et fréquents ; la cible ne saute pas et l’écran ne bouge pas.",
    "Quand une cible change brusquement de direction, la poursuite lisse arrive en retard et de rapides mouvements de correction s’y ajoutent (Robinson, 1965 ; Krauzlis, 2004). L’exercice répète ces réajustements.",
    "Le navigateur connaît seulement la position où la cible est dessinée et vos réglages, pas l’endroit où vos yeux regardent réellement. Il n’affiche que des valeurs du pointeur (temps sur la cible, distance au centre), rien sur les yeux : comparez plutôt votre aisance et votre concentration avec le même écran, la même distance et les mêmes réglages. La fréquence de rafraîchissement et la latence d’affichage changent aussi le rendu du mouvement (Woods et al., 2015)."
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
        "1,0x, trait visible, se recaler après chaque changement"
      ],
      [
        "Étape 2",
        "Ne presque plus perdre la cible lors des changements"
      ],
      [
        "Étape 3",
        "Augmenter la vitesse, suivre des changements plus rapides"
      ],
      [
        "Étape 4",
        "Ajouter Hide Line ou Random Speed, un à la fois"
      ]
    ],
    "note": "Repères de pratique proposés par SkillDrills : ni normes de test, ni statistiques d’utilisateurs, ni percentiles."
  },
  "techniques": {
    "title": "Conseils d’exécution",
    "items": [
      {
        "name": "Ne pas anticiper à l’excès",
        "desc": "Même en ligne droite, attendez-vous à un changement à tout moment et gardez le regard sur la cible. Regarder trop loin devant fait perdre la cible au changement.",
        "tips": "Si vous la perdez souvent, baissez la vitesse et gardez le trait de direction visible."
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
    "Quand la direction et la vitesse changent soudain, recalez le regard sur le nouveau mouvement et continuez à suivre.",
    "Ensuite, augmentez la vitesse ou activez Masquer la ligne puis Vitesse aléatoire, un réglage à la fois."
  ],
  "audience": "Toute personne qui veut s’exercer simplement à suivre des yeux des mouvements imprévisibles."
},
  faqs,
  sources: pickSources('krauzlis2004', 'findlay1999', 'robinson1965', 'rashbass1961', 'kahlon1996', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Exercice de poursuite lente constante" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite avec changements de direction" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite de cibles qui esquivent" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Suppression des images fantômes" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en forme de huit" },
    { href: "/fr/drills/visual-tracking/sine-wave-pursuit", label: "Poursuite visuelle en onde sinusoïdale" }
  ],
};

export default function FrenchSpatialShiftPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SpatialShiftPursuitClient copy={{"title": "Poursuite visuelle à trajectoire changeante", "subtitle": "Suivre une cible qui change de direction et de vitesse sans prévenir", "description": "Poursuite visuelle à trajectoire changeante : la cible avance en ligne droite, rebondit et change à des moments aléatoires de direction et de vitesse. Hide Line masque le trait de direction. Pas de clic ; la page indique ensuite la distance du pointeur à la cible, mais le navigateur n’enregistre pas votre regard."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
