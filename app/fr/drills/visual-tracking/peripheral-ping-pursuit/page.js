import PeripheralPingPursuitClient from '@/app/drills/visual-tracking/peripheral-ping-pursuit/PeripheralPingPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/peripheral-ping-pursuit';
const title = "Signaux périphériques, regard au centre | SkillDrills";
const description = "Exercice gratuit : gardez le regard sur la croix centrale pendant que des points s’allument brièvement ailleurs à l’écran. Repérez-les sans bouger les yeux.";

export const metadata = {
  title,
  description,
  keywords: ["signaux périphériques regard au centre", "vision périphérique exercice", "fixation centrale", "exercice des yeux en ligne", "regard fixe exercice", "perception périphérique"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/peripheral-ping-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Signaux périphériques, regard au centre", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Signaux périphériques, regard au centre",
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
  name: "Comment repérer des signaux périphériques sans bouger les yeux",
  description: "Quatre étapes pour garder le regard sur la croix centrale et remarquer les points qui s’allument en périphérie.",
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
    "name": "Fixer la croix",
    "text": "Au départ, regardez la croix au centre de l’écran et gardez-y le regard."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Remarquer sans regarder",
    "text": "Quand un point s’allume quelque part, remarquez-le du coin de l’œil, sans tourner les yeux vers lui."
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
    "q": "Comment se déroule l’exercice des signaux périphériques ?",
    "a": "Une croix fixe est affichée au centre. Des points apparaissent un par un à des endroits aléatoires de l’écran puis disparaissent : environ 0,75 seconde à la vitesse 1,0x, puis le suivant arrive après une courte pause. Les points ne bougent pas. Le but est de les remarquer en gardant le regard sur la croix ; aucun clic n’est demandé. Ce n’est pas un examen du champ visuel."
  },
  {
    "q": "Que changent la vitesse et Hide Line ?",
    "a": "Une vitesse plus élevée fait apparaître les points plus souvent et plus brièvement (environ 0,25 seconde au minimum). Random Speed fait varier en continu leur fréquence et leur durée. Hide Line masque la croix : il faut alors garder le centre sans repère."
  },
  {
    "q": "Ai-je le droit de regarder les points ?",
    "a": "L’intérêt de l’exercice est de garder le regard au centre. Le navigateur n’enregistre pas vos yeux : vérifiez vous-même qu’ils ne suivent pas les points. Si cela arrive souvent, baissez la vitesse."
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
    "a": "Rien n’est garanti. C’est un outil pour s’exercer à regarder une cible ; il ne promet ni meilleure acuité ni meilleure visée. Comparez vos séances sur le même écran avec les mêmes réglages."
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
  "heading": "Signaux périphériques, regard au centre : le guide",
  "intro": [
    "Dans l’exercice « Signaux périphériques, regard au centre », vous gardez le regard sur une croix au milieu de l’écran et remarquez, sans bouger les yeux, des points qui s’allument brièvement. Ils apparaissent un par un à des endroits aléatoires et restent visibles environ 0,75 seconde à la vitesse 1,0x.",
    "La vision centrale saisit les détails là où l’on regarde ; la vision périphérique repère les changements autour. Quand quelque chose apparaît sur le côté, les yeux ont tendance à sauter vers lui (Findlay & Walker, 1999). Cet exercice répète des situations où l’on résiste à ce réflexe.",
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
        "1,0x, croix visible, regard maintenu au centre"
      ],
      [
        "Étape 2",
        "Remarquer la plupart des points sans les regarder"
      ],
      [
        "Étape 3",
        "Augmenter la vitesse : points plus brefs et plus fréquents"
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
        "name": "Regard au centre, attention large",
        "desc": "Regardez la croix sans crispation et percevez l’écran entier. Ne cherchez pas les points avec les yeux.",
        "tips": "Si vos yeux partent souvent, baissez la vitesse et gardez la croix affichée."
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
    "Gardez le regard sur la croix et remarquez les points qui s’allument du coin de l’œil.",
    "Ensuite, augmentez la vitesse ou activez Masquer la ligne puis Vitesse aléatoire, un réglage à la fois."
  ],
  "audience": "Toute personne qui veut s’exercer simplement à percevoir ce qui change en périphérie, sans quitter le centre des yeux."
},
  faqs,
  sources: pickSources('posner1980', 'eriksen1986', 'wolfe1994', 'findlay1999', 'leigh2015', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Poursuite oculaire fluide continue" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite avec changements de direction" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite évasive réactive" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Stabilité de la fixation oculaire" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en huit" },
    { href: "/fr/drills/visual-tracking/momentum-teleport-pursuit", label: "Poursuite d une cible déplacée" }
  ],
};

export default function FrenchPeripheralPingPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PeripheralPingPursuitClient copy={{"title": "Signaux périphériques, regard au centre", "subtitle": "Fixer la croix centrale et remarquer les points qui clignotent", "description": "Regard sur la croix centrale : des points s’allument environ 0,75 seconde (à 1,0x) à des endroits aléatoires. Repérez-les sans bouger les yeux. Pas de clic ni de score ; le navigateur n’enregistre pas votre regard."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
