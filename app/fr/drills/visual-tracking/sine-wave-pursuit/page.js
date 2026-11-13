import SineWavePursuitClient from '@/app/drills/visual-tracking/sine-wave-pursuit/SineWavePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/sine-wave-pursuit';
const title = "Exercice de poursuite oculaire sinusoïdale | SkillDrills";
const description = "Exercice gratuit : suivez des yeux une cible qui fait des allers-retours de gauche à droite en montant et descendant sur une courbe sinusoïdale fixe.";

export const metadata = {
  title,
  description,
  keywords: ["exercice de poursuite oculaire sinusoïdale", "poursuite oculaire", "trajectoire sinusoïdale", "exercice des yeux en ligne", "poursuite lisse", "exercice oculaire gratuit"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/sine-wave-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Exercice de poursuite oculaire sinusoïdale", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Exercice de poursuite oculaire sinusoïdale",
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
  name: "Comment faire l’exercice de poursuite oculaire sinusoïdale",
  description: "Quatre étapes pour suivre en douceur une cible qui fait des allers-retours sur une courbe en vague.",
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
    "name": "Repérer la courbe",
    "text": "Au début, gardez la courbe visible et repérez la vague que la cible va parcourir."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Suivre sans à-coups",
    "text": "Suivez la cible sans interruption pendant qu’elle monte et descend sur la courbe et fait demi-tour aux bords."
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
    "q": "Comment la cible bouge-t-elle dans la poursuite oculaire sinusoïdale ?",
    "a": "La cible fait des allers-retours à vitesse horizontale constante entre environ 5 % et 95 % de la largeur de l’écran (environ 220 pixels par seconde à 1,0x) et suit une courbe sinusoïdale fixe dont l’amplitude vaut environ 28 % de la hauteur de l’écran. Aux bords, elle fait demi-tour sur la même courbe. C’est un exercice du regard dans le navigateur, pas un examen de la vue."
  },
  {
    "q": "Pourquoi la vitesse verticale change-t-elle sans cesse ?",
    "a": "La vitesse horizontale est constante, mais la pente de la courbe varie. Au milieu de la vague, le mouvement vertical est le plus rapide ; aux sommets et aux creux, il semble s’arrêter un instant."
  },
  {
    "q": "Que changent Hide Line et Random Speed ?",
    "a": "Hide Line masque la courbe : vous suivez alors de mémoire ou d’après le seul mouvement. Random Speed fait varier la vitesse en continu. La trajectoire elle-même ne change pas."
  },
  {
    "q": "L’exercice mesure-t-il mes mouvements oculaires ou un score ?",
    "a": "Non. Le navigateur ne sait pas où vous regardez et il n’y a ni clic ni détection de touche. Il n’y a pas de note. Si vous suivez la cible avec le pointeur, l’écran final indique combien de temps il est resté sur la cible et sa distance moyenne au centre ; c’est le pointeur qui est mesuré, pas vos yeux. C’est à vous de garder le regard là où l’exercice le demande."
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
  "heading": "Exercice de poursuite oculaire sinusoïdale : le guide",
  "intro": [
    "L’exercice de poursuite oculaire sinusoïdale consiste à suivre des yeux une cible qui fait des allers-retours de gauche à droite en montant et descendant sur une courbe sinusoïdale fixe. Sa vitesse horizontale est constante et elle fait demi-tour aux bords de l’écran.",
    "La poursuite lisse suit une cible lente presque à sa vitesse, mais prend plus facilement du retard quand la cible accélère (Robinson, 1965). Ici, vous variez la vitesse et suivez un mouvement qui change entre les sommets et le milieu de la vague.",
    "Le navigateur connaît seulement la position où la cible est dessinée et vos réglages, pas l’endroit où vos yeux regardent réellement. Il affiche seulement la distance du pointeur à la cible, pas une mesure des yeux : comparez aussi votre aisance et votre concentration avec le même écran, la même distance et les mêmes réglages. La fréquence de rafraîchissement et la latence d’affichage changent aussi le rendu du mouvement (Woods et al., 2015)."
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
        "1,0x, courbe visible, suivre sans interruption"
      ],
      [
        "Étape 2",
        "Ne pas perdre la cible aux demi-tours"
      ],
      [
        "Étape 3",
        "Augmenter la vitesse, suivre le milieu rapide de la vague"
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
        "name": "Caler son regard sur le rythme de la vague",
        "desc": "La cible ralentit un instant aux sommets et accélère au milieu. Connaître ce rythme aide à la suivre sans à-coups.",
        "tips": "Si vous restez derrière la cible, baissez la vitesse."
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
    "Suivez la cible sans interruption pendant ses allers-retours sur la courbe en vague.",
    "Ensuite, augmentez la vitesse ou activez Masquer la ligne puis Vitesse aléatoire, un réglage à la fois."
  ],
  "audience": "Toute personne qui veut s’exercer simplement à suivre des yeux une cible sur une courbe régulière."
},
  faqs,
  sources: pickSources('stark1962', 'robinson1965', 'rashbass1961', 'bahill1980', 'barnes2008', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Exercice de poursuite lente continue" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite lors de changements de direction" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite d’une cible évasive" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Suppression des images résiduelles" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en huit" },
    { href: "/fr/drills/visual-tracking/momentum-teleport-pursuit", label: "Poursuite d’une cible qui saute" }
  ],
};

export default function FrenchSineWavePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SineWavePursuitClient copy={{"title": "Exercice de poursuite oculaire sinusoïdale", "subtitle": "Suivre une cible sur une trajectoire en vague", "description": "Poursuite oculaire sinusoïdale : la cible fait des allers-retours de gauche à droite en montant et descendant sur une courbe en vague fixe. Hide Line masque la courbe. Pas de clic ; l’écran final indique la distance du pointeur à la cible, et le navigateur n’enregistre pas votre regard."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
