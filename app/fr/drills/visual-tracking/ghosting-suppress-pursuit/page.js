import GhostingSuppressPursuitClient from '@/app/drills/visual-tracking/ghosting-suppress-pursuit/GhostingSuppressPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit';
const name = "Poursuite avec traînée visuelle";
const title = `${name} | SkillDrills`;
const description = "Poursuite avec traînée visuelle : la cible file en ligne droite et rebondit, avec une traînée d'anneaux pâles en option. Pas un test de ghosting écran.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite avec traînée visuelle","cible avec traînée","ignorer la traînée","suivre une cible des yeux","stabilité du regard","exercice des yeux navigateur"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/ghosting-suppress-pursuit') },
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
  name: "Poursuite avec traînée visuelle (application web)",
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
  name: "Comment faire : Poursuite avec traînée visuelle",
  description: "Poursuite avec traînée visuelle en quatre étapes simples.",
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
    "name": "Rester sur la cible",
    "text": "Gardez le regard au centre de la cible pleine, pas sur les anneaux derrière elle."
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
    "q": "Qu'est-ce que la poursuite avec traînée visuelle ?",
    "a": "Un exercice dans le navigateur : vous suivez des yeux une cible en ligne droite sans vous laisser attirer par la traînée optionnelle. Durée (30 à 120 secondes), vitesse, taille et ligne sont réglables. Ni test de vue, ni thérapie."
  },
  {
    "q": "Est-ce un test de ghosting d'écran ?",
    "a": "Non. L'exercice ne mesure ni le temps de réponse ni le ghosting de votre écran. Les anneaux sont dessinés volontairement par la page ; les performances du moniteur ne sont pas testées. Pour cela, utilisez un test d'écran dédié."
  },
  {
    "q": "Quand la traînée apparaît-elle ?",
    "a": "Seulement si vous activez la traînée dans les réglages. De petits anneaux de plus en plus pâles restent alors sur les dernières positions. Sans elle, seule la cible bouge."
  },
  {
    "q": "Mesure-t-il le mouvement de mes yeux ?",
    "a": "Non. Le navigateur ne voit pas votre regard ; il connaît seulement la position dessinée de la cible et vos réglages. Le curseur n'est qu'une aide et ne prouve pas où vous regardez. Il n'y a pas de score."
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
  "heading": "Guide : Poursuite avec traînée visuelle",
  "intro": [
    "Dans cette poursuite avec traînée visuelle, la cible avance à vitesse constante en ligne droite et rebondit sur les bords. Si vous activez la traînée, la page dessine derrière elle des anneaux pâles qui s'estompent (désactivée par défaut). Le but : garder le regard sur la cible pleine, sans suivre les copies.",
    "Le navigateur connaît seulement la position dessinée de la cible et vos réglages, pas l'endroit où regardent vos yeux. Il n'y a pas de score : seules les séances terminées sont comptées. Le résultat est un repère d'entraînement reproductible, pas une mesure clinique ni un test de vue.",
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
        "Rester sur la cible avec la traînée activée"
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
        "name": "Regarder la cible, pas les anneaux",
        "desc": "Ne suivez pas la traînée pâle, visez le centre de la cible. Si le regard décroche vers la traînée, clignez une fois et revenez sur la cible.",
        "tips": "Si c’est inconfortable, coupez la traînée et baissez la vitesse."
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
  "audience": "Toute personne qui veut essayer « Poursuite avec traînée visuelle » dans le navigateur et s'exercer à suivre une cible mobile de façon ludique."
},
  faqs,
  sources: pickSources('burr1980', 'martinezConde2004', 'rolfs2009', 'krauzlis2004', 'leigh2015', 'woods2015'),
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
    "href": "/fr/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "Poursuite oculaire : cible qui esquive"
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
      <GhostingSuppressPursuitClient
        copy={{
          title: name,
          subtitle: "Fixer la cible, pas sa traînée",
          description: "Poursuite avec traînée visuelle : suivez une cible dotée d'une traînée optionnelle. Ce n'est pas un test de ghosting d'écran. Le navigateur n'enregistre pas votre regard et il n'y a pas de score.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
