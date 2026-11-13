import DynamicEvasionPursuitClient from '@/app/drills/visual-tracking/dynamic-evasion-pursuit/DynamicEvasionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/dynamic-evasion-pursuit';
const name = "Poursuite oculaire : cible qui esquive";
const title = `${name} | SkillDrills`;
const description = "Poursuite oculaire avec une cible qui esquive : elle file en ligne droite puis change brusquement de direction toutes les 0,5 s environ. Exercice gratuit.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite oculaire cible qui esquive","cible qui esquive","changement de direction brusque","saccade de rattrapage","suivre une cible des yeux","exercice des yeux navigateur"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/dynamic-evasion-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'fr_FR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbItems('fr', url, 'visual-tracking', name, true),
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/fr' },
  inLanguage: 'fr',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Poursuite oculaire : cible qui esquive (application web)",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Navigateur récent compatible HTML5 Canvas",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'fr',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name,
  url,
  description,
  genre: ['Visual training', 'Eye tracking exercise'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'fr',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Comment faire : Poursuite oculaire : cible qui esquive",
  description: "Poursuite oculaire : cible qui esquive en quatre étapes simples.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "Installez-vous confortablement",
    "text": "Asseyez-vous à une distance confortable de l'écran, épaules et main détendues."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "Repérer le virage",
    "text": "Ne ratez pas le moment où la cible tourne et recalez le regard sur sa nouvelle direction."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Suivez avec les yeux",
    "text": "Suivez la cible des yeux, pas le curseur, et terminez la séance de 30 à 120 secondes."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "Changez un réglage à la fois",
    "text": "Augmentez ensuite la vitesse, ou ajoutez Masquer la ligne ou la vitesse aléatoire, un réglage à la fois."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "Qu'est-ce que la poursuite oculaire avec une cible qui esquive ?",
    "a": "Un exercice dans le navigateur : vous suivez des yeux une cible qui change brusquement de direction à intervalles courts. Durée (30 à 120 secondes), vitesse, taille et ligne sont réglables. Le résultat repose sur la position du pointeur."
  },
  {
    "q": "La cible fuit-elle mon curseur ?",
    "a": "Non. Les changements de direction arrivent au hasard environ toutes les 0,5 seconde, quel que soit le curseur. Avec la ligne visible, un petit trait indique la direction en cours."
  },
  {
    "q": "Mesure-t-il le mouvement de mes yeux ?",
    "a": "Non. Le navigateur ne voit pas votre regard ; il connaît seulement la position dessinée de la cible et vos réglages. Le curseur n'est qu'une aide et ne prouve pas où vous regardez. En fin de séance, la page affiche seulement des valeurs du pointeur (temps sur la cible, distance au centre)."
  },
  {
    "q": "Que change la vitesse aléatoire ?",
    "a": "La vitesse de la cible varie de façon irrégulière, elle devient plus difficile à anticiper. Activez-la une fois la vitesse de base confortable, et pas en même temps que le masquage de la ligne."
  },
  {
    "q": "Faut-il laisser la ligne visible ?",
    "a": "Une ligne visible aide à anticiper le mouvement au début. Vous pourrez la masquer ensuite pour corser l'exercice. Il n'y a pas de bon choix : comparez uniquement des réglages identiques."
  },
  {
    "q": "Quels réglages pour commencer ?",
    "a": "Des séances de 30 à 60 secondes, une vitesse lente (0,5 à 1,0×) et la ligne visible. La vitesse va de 0,5 à 9,0× et la taille de cible de 10 à 50 px ; changez un seul réglage à la fois."
  },
  {
    "q": "Cet exercice améliore-t-il ma vue ou mon aim ?",
    "a": "Rien ne le garantit. C'est un exercice pour suivre une cible des yeux ; il ne promet ni meilleure vue ni meilleure visée en FPS. Comparez vos séances sur le même écran avec les mêmes réglages."
  },
  {
    "q": "L'écran et l'environnement comptent-ils ?",
    "a": "Oui. Fréquence d'affichage, luminosité, contraste, taille et distance de l'écran et navigateur changent l'apparence de la cible. La latence d'entrée et d'affichage joue aussi (Woods et al., 2015) : comparez dans les mêmes conditions."
  },
  {
    "q": "Combien de temps pratiquer ?",
    "a": "Par blocs courts de 5 à 10 minutes avec des pauses. Si les yeux fatiguent ou sèchent, arrêtez, clignez et regardez au loin. Douleur, vertige, nausée ou mal de tête : arrêtez."
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
  "heading": "Guide : Poursuite oculaire : cible qui esquive",
  "intro": [
    "Dans cette poursuite oculaire avec une cible qui esquive, la cible avance en ligne droite et repart environ toutes les 0,5 seconde (0,35 à 0,65 s avec la vitesse aléatoire) dans une nouvelle direction au hasard ; elle rebondit sur les bords. Après chaque virage, l'œil prend du retard jusqu'à ce qu'une saccade de rattrapage comble l'écart et que la poursuite reprenne (Rashbass, 1961 ; Krauzlis, 2004).",
    "Le navigateur connaît seulement la position dessinée de la cible et vos réglages, pas l'endroit où regardent vos yeux. La page affiche seulement des valeurs du pointeur (temps sur la cible, distance au centre) et compte les séances terminées. Le résultat est un repère d'entraînement reproductible, basé sur la position du pointeur.",
    "Gardez une distance confortable et comparez toujours le même écran et le même navigateur. La fréquence d'affichage et le périphérique d'entrée changent le rendu (Woods et al., 2015). Arrêtez en cas de douleur, vertige, nausée ou vision floue persistante."
  ],
  "benchmarks": {
    "title": "Repères d'entraînement",
    "headers": [
      "Étape",
      "Objectif"
    ],
    "rows": [
      [
        "1",
        "Vitesse lente, ligne visible"
      ],
      [
        "2",
        "Tenir la vitesse de base sans effort"
      ],
      [
        "3",
        "Revenir vite sur la cible après chaque virage"
      ],
      [
        "4",
        "Masquer la ligne"
      ],
      [
        "5",
        "Ajouter la vitesse aléatoire"
      ]
    ],
    "note": "Ce tableau est un repère d'entraînement SkillDrills. Ce n'est ni une norme visuelle, ni une statistique d'utilisateurs, ni un percentile."
  },
  "techniques": {
    "title": "4 conseils pratiques",
    "items": [
      {
        "name": "Revenir d'un seul mouvement",
        "desc": "Après un virage, ne balayez pas l'écran : repérez la nouvelle direction puis reprenez la poursuite en douceur. Inutile d'anticiper chaque changement.",
        "tips": "Si c’est inconfortable, baissez la vitesse et réaffichez la ligne."
      },
      {
        "name": "Regarder la cible, pas le curseur",
        "desc": "Le pointeur n’est qu’une aide. Suivez la cible des yeux et relâchez épaules et main.",
        "tips": "Vérifiez de temps en temps que la tête et le cou ne tournent pas avec."
      },
      {
        "name": "Une difficulté à la fois",
        "desc": "Augmentez séparément la vitesse, le masquage de la ligne et la vitesse aléatoire. Si le confort baisse, revenez au réglage précédent.",
        "tips": "Après chaque changement, comparez à nouveau."
      },
      {
        "name": "Séances courtes, pauses régulières",
        "desc": "Travaillez par blocs de 5 à 10 minutes, clignez des yeux et regardez au loin. Plus long n’est pas forcément mieux.",
        "tips": "Douleur, vertige ou nausée : arrêtez immédiatement."
      }
    ]
  },
  "steps": [
    "Asseyez-vous à une distance confortable, épaules et main détendues.",
    "Commencez par 30 à 60 secondes, vitesse lente, ligne visible.",
    "Suivez la cible des yeux, pas le curseur.",
    "Augmentez ensuite la vitesse ou un seul réglage à la fois."
  ],
  "audience": "Toute personne qui veut essayer « Poursuite oculaire : cible qui esquive » dans le navigateur et s'exercer à suivre une cible mobile de façon ludique."
},
  faqs,
  sources: pickSources('bahill1980', 'rashbass1961', 'krauzlis2004', 'robinson1965', 'barnes2008', 'woods2015'),
  related: [
  {
    "href": "/fr/drills/visual-tracking/constant-slow-pursuit",
    "label": "Exercice de Poursuite Visuelle"
  },
  {
    "href": "/fr/drills/visual-tracking/directional-chaos-pursuit",
    "label": "Exercice de poursuite oculaire chaotique"
  },
  {
    "href": "/fr/drills/visual-tracking/ghosting-suppress-pursuit",
    "label": "Poursuite avec traînée visuelle"
  },
  {
    "href": "/fr/drills/visual-tracking/infinity-pursuit",
    "label": "Exercice des yeux en huit couché"
  }
],
};

export default function LocalizedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DynamicEvasionPursuitClient
        copy={{
          title: name,
          subtitle: "Lignes droites et virages brusques",
          description: "Poursuite oculaire avec une cible qui esquive : elle change brusquement de direction environ toutes les 0,5 s. La page indique ensuite la distance du pointeur à la cible, mais le navigateur n'enregistre pas votre regard ; c'est un repère d'entraînement basé sur le pointeur.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
