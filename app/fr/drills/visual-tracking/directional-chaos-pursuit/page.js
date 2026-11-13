import DirectionalChaosPursuitClient from '@/app/drills/visual-tracking/directional-chaos-pursuit/DirectionalChaosPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/directional-chaos-pursuit';
const name = "Exercice de poursuite oculaire chaotique";
const title = `${name} | SkillDrills`;
const description = "Exercice de poursuite oculaire chaotique gratuit : la cible change sans cesse de direction et de vitesse et rebondit sur les bords. Vitesse et durée réglables.";

export const metadata = {
  title,
  description,
  keywords: ["exercice de poursuite oculaire chaotique","poursuite oculaire chaotique","cible imprévisible","suivre une cible des yeux","changements de direction","exercice des yeux navigateur"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/directional-chaos-pursuit') },
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
  name: "Exercice de poursuite oculaire chaotique (application web)",
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
  name: "Comment faire : Exercice de poursuite oculaire chaotique",
  description: "Exercice de poursuite oculaire chaotique en quatre étapes simples.",
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
    "name": "Repérer les changements",
    "text": "Quand la cible change de direction, recalez calmement le regard sur elle."
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
    "q": "Qu'est-ce que l'exercice de poursuite oculaire chaotique ?",
    "a": "Un exercice dans le navigateur où vous suivez des yeux une cible aux changements de direction imprévisibles. Durée (30 à 120 secondes), vitesse, taille et ligne sont réglables. Ce n'est ni un test de vue ni une thérapie."
  },
  {
    "q": "Comment la cible se déplace-t-elle ?",
    "a": "À chaque image, une petite impulsion aléatoire s'ajoute à sa vitesse, dans la limite d'une vitesse maximale. Au bord, elle rebondit et accélère légèrement. Elle ne réagit pas au curseur."
  },
  {
    "q": "Mesure-t-il le mouvement de mes yeux ?",
    "a": "Non. Le navigateur ne voit pas votre regard ; il connaît seulement la position dessinée de la cible et vos réglages. Le curseur n'est qu'une aide et ne prouve pas où vous regardez. L'écran final indique seulement la distance du pointeur à la cible, sans note."
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
    "a": "Rien ne le garantit. C'est un exercice pour suivre une cible des yeux ; il ne promet ni meilleure vue, ni traitement d'un trouble visuel, ni meilleure visée en FPS. En cas de gêne oculaire, consultez un professionnel."
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
  "heading": "Guide : Exercice de poursuite oculaire chaotique",
  "intro": [
    "Dans cet exercice de poursuite oculaire chaotique, la cible reçoit à chaque image une petite impulsion aléatoire : sa direction et sa vitesse changent en permanence et elle rebondit sur les bords. Sans trajectoire fixe, impossible de l'anticiper vraiment ; quand elle prend de l'avance, une saccade de rattrapage la ramène en général dans le regard central (Krauzlis, 2004).",
    "Le navigateur connaît seulement la position dessinée de la cible et vos réglages, pas l'endroit où regardent vos yeux. Seules la distance du pointeur à la cible et les séances terminées sont affichées. Le résultat est un repère d'entraînement reproductible, pas une mesure clinique ni un test de vue.",
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
        "Rester sur la cible malgré les changements"
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
        "name": "Ne pas trop anticiper",
        "desc": "La trajectoire change à chaque fois. N'essayez pas de deviner la prochaine position : gardez la cible au centre du regard et revenez dessus d'un seul mouvement.",
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
  "audience": "Toute personne qui veut essayer « Exercice de poursuite oculaire chaotique » dans le navigateur et s'exercer à suivre une cible mobile de façon ludique."
},
  faqs,
  sources: pickSources('bahill1980', 'barnes2008', 'krauzlis2004', 'robinson1965', 'rashbass1961', 'woods2015'),
  related: [
  {
    "href": "/fr/drills/visual-tracking/constant-slow-pursuit",
    "label": "Exercice de Poursuite Visuelle"
  },
  {
    "href": "/fr/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "Poursuite oculaire : cible qui esquive"
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
      <DirectionalChaosPursuitClient
        copy={{
          title: name,
          subtitle: "Garder des yeux une cible imprévisible",
          description: "Exercice de poursuite oculaire chaotique : la cible change sans cesse de direction et de vitesse. Le navigateur n'enregistre pas votre regard et mesure seulement la distance du pointeur à la cible ; voyez le résultat comme un repère d'entraînement, pas comme un examen médical.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
