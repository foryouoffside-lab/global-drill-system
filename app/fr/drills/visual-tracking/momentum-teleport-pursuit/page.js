import MomentumTeleportPursuitClient from '@/app/drills/visual-tracking/momentum-teleport-pursuit/MomentumTeleportPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/momentum-teleport-pursuit';
const title = "Poursuite oculaire : cible qui saute | SkillDrills";
const description = "Exercice gratuit : la cible avance en ligne droite et saute toutes les 1,2 s environ vers un point aléatoire, sans changer de cap. Retrouvez-la des yeux.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite oculaire cible qui saute", "poursuite oculaire", "exercice des yeux en ligne", "saccades exercice", "suivi visuel cible", "exercice oculaire gratuit"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/momentum-teleport-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Poursuite oculaire : cible qui saute", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Poursuite oculaire : cible qui saute",
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
  name: "Comment faire l’exercice de la cible qui saute",
  description: "Quatre étapes pour retrouver une cible déplacée puis continuer à suivre son mouvement dans la même direction.",
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
    "name": "Suivre le mouvement",
    "text": "Suivez calmement la cible des yeux pendant qu’elle avance en ligne droite et rebondit sur les bords de l’écran."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "La retrouver après le saut",
    "text": "Quand la cible saute ailleurs, portez le regard d’un seul coup vers sa nouvelle position puis continuez à la suivre dans la même direction."
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
    "q": "Comment fonctionne la poursuite oculaire de la cible qui saute ?",
    "a": "La cible avance en ligne droite à vitesse et direction constantes et rebondit sur les bords. À la vitesse 1,0x, elle saute environ toutes les 1,2 seconde vers une position aléatoire, sans changer de direction ni de vitesse. Vous la retrouvez des yeux et continuez à la suivre. C’est un exercice dans le navigateur, pas un examen de la vue ni une thérapie."
  },
  {
    "q": "Peut-on prévoir où la cible va sauter ?",
    "a": "Non : la nouvelle position est tirée au hasard à chaque fois. On sait seulement qu’après le saut, la cible repart dans la même direction et à la même vitesse. Un petit trait indique sa direction ; l’option Hide Line le masque."
  },
  {
    "q": "Que change une vitesse plus élevée ?",
    "a": "La cible va plus vite et saute plus souvent : environ toutes les 0,6 seconde à 2,0x. Avec Random Speed, la vitesse varie en permanence et les sauts deviennent irréguliers."
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
  "heading": "Poursuite oculaire : cible qui saute – le guide",
  "intro": [
    "La poursuite oculaire de la cible qui saute est un exercice dans le navigateur : vous retrouvez des yeux une cible qui change soudain de place. Elle avance en ligne droite, rebondit sur les bords et, à la vitesse 1,0x, saute environ toutes les 1,2 seconde vers un point aléatoire en conservant sa direction et sa vitesse.",
    "Suivre en douceur une cible en mouvement et porter rapidement le regard vers une cible éloignée (saccade) sont décrits comme deux mouvements oculaires distincts (Rashbass, 1961 ; Krauzlis, 2004). Ici, les deux alternent sans cesse.",
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
        "1,0x, trait de direction visible, retrouver la cible sans effort"
      ],
      [
        "Étape 2",
        "Après chaque saut, la retrouver en un seul regard"
      ],
      [
        "Étape 3",
        "Augmenter la vitesse et s’habituer aux sauts plus fréquents"
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
        "name": "Un seul déplacement, puis suivre",
        "desc": "Après un saut, ne cherchez pas partout : portez le regard d’un coup vers la nouvelle position puis suivez la cible dans la même direction qu’avant.",
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
    "Quand la cible saute, portez le regard vers sa nouvelle position et continuez à la suivre dans la même direction.",
    "Ensuite, augmentez la vitesse ou activez Masquer la ligne puis Vitesse aléatoire, un réglage à la fois."
  ],
  "audience": "Toute personne qui veut s’exercer simplement à retrouver des yeux une cible en mouvement qui change soudain de place."
},
  faqs,
  sources: pickSources('rashbass1961', 'bahill1980', 'findlay1999', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Poursuite oculaire fluide continue" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite avec changements de direction" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite évasive réactive" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Stabilité de la fixation oculaire" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en huit" },
    { href: "/fr/drills/visual-tracking/predictive-pursuit", label: "Poursuite oculaire prédictive" }
  ],
};

export default function FrenchMomentumTeleportPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <MomentumTeleportPursuitClient copy={{"title": "Poursuite oculaire : cible qui saute", "subtitle": "Retrouver une cible déplacée qui garde sa trajectoire", "description": "Poursuite oculaire : la cible avance en ligne droite et saute environ toutes les 1,2 seconde (à 1,0x) vers un point aléatoire, en gardant sa direction et sa vitesse. Pas de clic ni de score, seulement le regard ; le navigateur n’enregistre pas vos yeux."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
