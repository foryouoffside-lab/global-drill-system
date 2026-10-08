import SpatialShiftPursuitClient from '@/app/drills/visual-tracking/spatial-shift-pursuit/SpatialShiftPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Poursuite visuelle avec saut spatial | SkillDrills",
  description: "Suivez une cible pendant un changement du champ visuel. Exercice gratuit avec temps de réaction, réacquisition et écart de position.",
  keywords: [
    "saut spatial poursuite visuelle",
    "remappage visuel exercice",
    "écran qui tremble entraînement visuel",
    "suivre une cible dans un champ mobile",
    "attention spatiale exercice",
    "réacquisition visuelle entraînement",
    "changement de repère visuel",
    "poursuite sous mouvement d'écran",
    "coordination œil cible",
    "écart de position visuelle",
    "exercice de poursuite visuelle",
    "entraînement de suivi de cible"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/visual-tracking/spatial-shift-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/spatial-shift-pursuit'),
  },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Poursuite visuelle avec saut spatial | SkillDrills",
    description: "Suivez une cible pendant un changement du champ visuel. Exercice gratuit avec temps de réaction, réacquisition et écart de position.",
    url: "https://skilldrills.online/fr/drills/visual-tracking/spatial-shift-pursuit",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Poursuite visuelle avec saut spatial | SkillDrills",
    description: "Suivez une cible pendant un changement du champ visuel. Exercice gratuit avec temps de réaction, réacquisition et écart de position.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Exercices",
      "item": "https://skilldrills.online/fr/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Poursuite Visuelle",
      "item": "https://skilldrills.online/fr/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Poursuite avec Saut Spatial",
      "item": "https://skilldrills.online/fr/drills/visual-tracking/spatial-shift-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "Poursuite avec Saut Spatial",
  "operatingSystem": "Navigateur Web",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Outil de pratique visuelle pour observer la récupération du regard lors des changements du repère spatial.",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Exercice de Poursuite avec Saut Spatial",
  "url": "https://skilldrills.online/fr/drills/visual-tracking/spatial-shift-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Tous les navigateurs modernes",
  "browserRequirements": "Nécessite le support de JavaScript et HTML5 Canvas",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Poursuite visuelle avec saut spatial",
  "description": "Exercice de poursuite oculaire : le champ visuel se décale ou pivote pendant que vous suivez une cible, et le temps de réacquisition est mesuré.",
  "genre": ["Entraînement visuel", "Poursuite lente", "Entraînement des réflexes"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Navigateur Web",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment suivre une cible quand le champ visuel se décale",
  "description": "Quatre étapes pour retrouver la cible après un saut spatial et reprendre la poursuite.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Suivre la cible au départ",
      "text": "Placez-vous à 50-70 cm de l’écran et gardez une poursuite continue sur la trajectoire initiale."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Repérer le décalage du champ",
      "text": "Quand l’écran se décale ou pivote, repérez d’abord la direction du mouvement d’ensemble sans balayer au hasard."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Retrouver la cible d’un seul saut",
      "text": "Dirigez le regard vers la nouvelle position de la cible sans hésitation."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Reprendre la poursuite",
      "text": "Dès que la cible est retrouvée, suivez sa trajectoire de façon fluide et comparez ensuite votre écart de position."
    }
  ],
  "dateModified": "2026-09-20"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu’est-ce qu’une poursuite visuelle avec saut spatial ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous suivez une cible pendant que le champ visuel se décale ou pivote d’un coup. L’exercice mesure le temps que vous mettez à la retrouver, puis votre précision et votre écart de position. Ce n’est pas un test médical."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi le décalage du champ perturbe-t-il le suivi ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quand tout le champ bouge d’un coup, la position de la cible sur la rétine change brutalement. Le regard doit retrouver la cible avant de reprendre une poursuite fluide (Robinson, 1965 ; Krauzlis, 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce qu’une saccade ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est un saut très rapide du regard d’un point à un autre. Après un saut spatial, une saccade ramène la fovéa sur la cible avant que la poursuite lente reprenne (Rashbass, 1961)."
      }
    },
    {
      "@type": "Question",
      "name": "Que signifie le temps de réacquisition affiché ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est le délai entre le décalage du champ et le moment où votre regard est de nouveau sur la cible. Il dépend de l’écran, de la distance, de la vitesse choisie et de votre attention, donc comparez vos séries dans les mêmes conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice aide-t-il dans les jeux de tir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il reproduit la reprise de cible après un à-coup de caméra ou un recul, mais aucune étude ne démontre à ce jour un gain de score en jeu à partir de cet exercice."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il anticiper le saut ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Les sauts sont aléatoires : il vaut mieux repérer la direction du mouvement d’ensemble, puis retrouver la cible d’un seul saut du regard plutôt que de la chercher en balayant l’écran."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire si je perds régulièrement la cible ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Baissez la vitesse, gardez la tête immobile et fixez le centre de l’écran comme repère. Augmentez la vitesse seulement quand vous retrouvez la cible régulièrement."
      }
    },
    {
      "@type": "Question",
      "name": "La fréquence de rafraîchissement de l’écran compte-t-elle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, un peu. Un écran à 144 Hz affiche le mouvement plus souvent qu’un écran à 60 Hz, ce qui peut rendre le décalage plus lisible. Comparez toujours sur le même écran (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice est-il gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Il fonctionne gratuitement dans votre navigateur, sans inscription, et vos résultats restent enregistrés localement sur votre appareil."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps s’entraîner ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quelques séries de 60 secondes, soit 5 à 8 minutes par séance, suffisent pour suivre votre progression. Arrêtez-vous en cas de fatigue ou d’inconfort visuel."
      }
    }
  ],
  "dateModified": "2026-09-20"
};

const guideProps = {
  heading: "Poursuite avec saut spatial : principes et repères",
  intro: [
    "Cet exercice de poursuite visuelle avec saut spatial vous demande de suivre une cible alors que le champ visuel se décale ou pivote d’un coup. Il mesure le temps pour retrouver la cible, votre précision de suivi et l’écart de position. C’est un entraînement avec des repères personnels, pas un examen médical.",
    "Quand tout le champ bouge, la cible quitte le centre de votre regard. Une saccade, saut rapide du regard, la ramène sur la fovéa, puis la poursuite lente reprend (Rashbass, 1961 ; Krauzlis, 2004). Le cerveau doit pour cela mettre à jour la position de la cible dans l’espace (Findlay & Gilchrist, 1999).",
    "Le résultat dépend de l’écran, de la distance, de la vitesse choisie et de votre attention. Comparez vos séances dans les mêmes conditions."
  ],
  benchmarks: {
    title: "Repères indicatifs de réacquisition après un saut spatial",
    headers: ["Palier", "Temps de réacquisition", "Précision de suivi", "Lecture"],
    rows: [
      ["Très rapide", "Moins de 220 ms", "Plus de 95 %", "Retrouve la cible d’un seul saut et reprend la poursuite aussitôt"],
      ["Rapide", "220 – 280 ms", "88 – 94 %", "Réacquisition rapide avec une dérive minime"],
      ["Correct", "281 – 360 ms", "78 – 87 %", "Récupération régulière, légère hésitation quand le champ pivote"],
      ["À travailler", "361 – 450 ms", "65 – 77 %", "Désorientation après les sauts brusques, saccades correctrices"],
      ["Débutant", "Plus de 450 ms", "Moins de 65 %", "Suivi surtout réactif ; réduisez la vitesse"]
    ],
    note: "Repères éditoriaux propres à cet exercice, pour un écran à 50-70 cm entre 1.0x et 1.5x. Ce ne sont ni des normes cliniques ni un classement de population."
  },
  techniques: {
    title: "Quatre points de technique après un saut spatial",
    items: [
      {
        name: "Repérer le mouvement d’ensemble",
        desc: "Ne cherchez pas seulement le point isolé : repérez dans quelle direction le champ entier s’est décalé, puis dirigez le regard vers la position attendue.",
        tips: "Demandez-vous d’abord de quel côté l’ensemble de l’écran a bougé."
      },
      {
        name: "Retrouver la cible d’un seul saut",
        desc: "Une fois la direction repérée, envoyez le regard franchement vers la nouvelle position. L’hésitation allonge le temps de réacquisition.",
        tips: "Évitez de balayer l’écran ; visez directement le point attendu."
      },
      {
        name: "Enchaîner avec la poursuite",
        desc: "Ne bloquez pas le regard à l’arrivée : reprenez tout de suite le mouvement fluide dans la direction de la cible.",
        tips: "Accompagnez la cible dès que vous l’avez retrouvée."
      },
      {
        name: "Garder un repère au centre",
        desc: "Quand le champ pivote, le centre de l’écran sert de repère stable pour se réorienter.",
        tips: "Gardez la tête immobile et revenez au centre si vous perdez la cible."
      }
    ]
  },
  steps: [
    { title: "Fixez la cible au départ", text: "Installez-vous à une distance confortable et suivez la cible sans bouger la tête." },
    { title: "Observez le changement du champ", text: "Quand l’écran se déplace, repérez d’abord la direction du mouvement de l’ensemble." },
    { title: "Récupérez la cible", text: "Déplacez le regard directement vers sa nouvelle position et observez le temps de réacquisition." },
    { title: "Reprenez la poursuite", text: "Une fois la cible retrouvée, suivez sa trajectoire et comparez précision et écart de position." }
  ],
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('krauzlis2004', 'findlay1999', 'robinson1965', 'rashbass1961', 'kahlon1996', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Exercice de poursuite lente constante" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite avec changements de direction" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite de cibles qui esquivent" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Suppression des images fantômes" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en forme de huit" },
    { href: "/fr/drills/visual-tracking/sine-wave-pursuit", label: "Poursuite visuelle en onde sinusoïdale" }
  ]
};

export default function SpatialShiftPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SpatialShiftPursuitClient copy={{ title: "Poursuite visuelle avec saut spatial", subtitle: "Suivez une cible pendant un changement du champ visuel" }} />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
