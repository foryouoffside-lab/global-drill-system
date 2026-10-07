import ZigZagPathPursuitClient from '@/app/drills/visual-tracking/zig-zag-path-pursuit/ZigZagPathPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Poursuite visuelle en zigzag | SkillDrills",
  description: "Suivez une cible en zigzag. Exercice gratuit pour poursuite oculaire, virages rapides et pertes de cible.",
  keywords: [
    "poursuite visuelle en zigzag exercice",
    "mouvements oculaires en zigzag",
    "exercice de motricité oculaire",
    "suivi de cible en zigzag",
    "exercice de poursuite oculaire",
    "changement brusque de direction du regard",
    "coordination oculomotrice exercice",
    "saccades correctrices entraînement",
    "contrôle du regard dans les virages",
    "entraînement visuel pour le sport",
    "agilité visuelle et réflexes",
    "exercice de poursuite visuelle en ligne"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/visual-tracking/zig-zag-path-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/zig-zag-path-pursuit')
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Poursuite visuelle en zigzag | SkillDrills",
    description: "Suivez une cible en zigzag. Exercice gratuit pour poursuite oculaire, virages rapides et pertes de cible.",
    url: "https://skilldrills.online/fr/drills/visual-tracking/zig-zag-path-pursuit",
    siteName: "SkillDrills",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Poursuite visuelle en zigzag | SkillDrills",
    description: "Suivez une cible en zigzag. Exercice gratuit pour poursuite oculaire, virages rapides et pertes de cible."
  }
};

export default function ZigZagPathPursuitPageFR() {
  const sources = pickSources(
    'debrouwer2002',
    'krauzlis2004',
    'orbandexivry2007',
    'bennett2006',
    'barnes2008',
    'woods2015'
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînement Visuel", "item": "https://skilldrills.online/fr/drills/visual-tracking" },
      { "@type": "ListItem", "position": 3, "name": "Poursuite en Zigzag", "item": "https://skilldrills.online/fr/drills/visual-tracking/zig-zag-path-pursuit" }
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Saccade"],
    "name": "Entraîneur de Poursuite en Zigzag",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Entraînement neurocognitif de poursuite en ligne brisée et extinction des dépassements saccadiques lors de virages angulaires serrés.",
    "dateModified": "2026-09-20"
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Exercice de Poursuite Vectorielle en Zigzag",
    "url": "https://skilldrills.online/fr/drills/visual-tracking/zig-zag-path-pursuit",
    "applicationCategory": "TrainingTool",
    "browserRequirements": "Nécessite JavaScript et la compatibilité HTML5 Canvas.",
    "dateModified": "2026-09-20"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Défi de Poursuite en Zigzag",
    "gamePlatform": "Navigateur web",
    "genre": ["Entraînement visuel", "Exercice de poursuite oculaire", "Réflexes pour l esports"],
    "dateModified": "2026-09-20"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Maîtriser la Poursuite Oculaire en Zigzag",
    "description": "Protocole pour acquérir le freinage fovéal anticipé et éviter le dépassement aux sommets aigus.",
    "dateModified": "2026-09-20",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Posture Fixe et Alignement",
        "text": "Placez-vous à environ 50-60 cm de votre moniteur, tête immobile, et fixez le repère sur sa première lancée diagonale."
      },
      {
        "@type": "HowToStep",
        "name": "Poursuite Rectiligne Harmonieuse",
        "text": "Suivez le trajet en mobilisant de manière proportionnelle les muscles droits horizontaux et verticaux."
      },
      {
        "@type": "HowToStep",
        "name": "Freinage Précis au Sommet de Virage",
        "text": "À l approche immédiate du sommet en dent de scie, enclenchez la décélération pour ne pas déborder hors du virage."
      },
      {
        "@type": "HowToStep",
        "name": "Hausse Progressivede Cadence",
        "text": "Montez en vitesse lorsque votre écart moyen aux angles reste en dessous de 38 pixels."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-09-20",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pourquoi la trajectoire en zigzag est-elle particulièrement complexe à suivre?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Elle combine une vélocité constante sur les arêtes et des inversions instantanées à haute fréquence, imposant une alternance ultra-rapide entre muscles agonistes et antagonistes."
        }
      },
      {
        "@type": "Question",
        "name": "Quels centres cérébraux pilotent la décélération avant chaque virage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le cervelet (vermis dorsal et flocculus), les ganglions de la base et le cortex frontal (FEF) émettent des décharges inhibitrices anticipatoires pour freiner le regard à l angle exact."
        }
      },
      {
        "@type": "Question",
        "name": "Qu est-ce que le dépassement et comment l éviter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C est l inertie motrice qui propulse le regard au-delà du sommet. On le réduit en renforçant le modèle prédictif anticipé par des entraînements répétés."
        }
      },
      {
        "@type": "Question",
        "name": "Quel avantage ce module offre-t-il aux sportifs et joueurs compétitifs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il affine la faculté de bloquer net la visée sur un angle et d enchaîner sans flottement sur une cible fuyante en mouvement saccadé."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi insister sur l immobilité stricte de la tête?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Garder la tête fixe neutralise la compensation du réflexe vestibulo-oculaire (RVO), concentrant l ensemble du travail sur la commande oculomotrice pure."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le volume quotidien optimal d entraînement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Des séquences de 6 à 10 minutes par jour, découpées en séries courtes de 60 secondes avec des pauses de repos, maximisent l adaptation synaptique."
        }
      },
      {
        "@type": "Question",
        "name": "Qu est-ce que le glissement rétinien lors des renversements de cap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C est le décrochage visuel instantané qui survient quand la cible bifurque, servant de stimulus biologique pour déclencher la saccade de correction."
        }
      },
      {
        "@type": "Question",
        "name": "Un écran 144Hz ou 240Hz fait-il une réelle différence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, il restitue le point d impact du virage avec une netteté totale et sans latence d affichage, optimisant l estimation temporelle du freinage."
        }
      },
      {
        "@type": "Question",
        "name": "En quoi le zigzag diffère-t-il d une onde sinusoïdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L onde sinusoïdale amortit sa course en courbe aux sommets, alors que le zigzag maintient sa pleine vitesse jusqu au point angulaire avant de bifurquer net."
        }
      },
      {
        "@type": "Question",
        "name": "Comment le calcul de performance évalue-t-il la précision?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L algorithme scrute la distance pixel continue entre le curseur et la cible, en sanctionnant lourdement les dépassements et les coupes anticipées."
        }
      }
    ]
  };

  const guide = {
    title: "Guide Scientifique de Poursuite en Zigzag et Contrôle d Inflexion",
    intro: [
      "La poursuite visuelle le long de trajectoires brisées en zigzag à segments multiples constitue l'un des défis de coordination les plus exigeants en neuro-optométrie et en préparation visuelle sportive. Contrairement aux mouvements cardinaux simples, le suivi de vecteurs diagonaux requiert une innervation proportionnelle et continue de paires musculaires distinctes, reliant les centres prémoteurs pontiques horizontaux (PPRF) et les noyaux mésencéphaliques verticaux (riMLF; Orban de Xivry & Lefèvre, 2007).",
      "Le stress neurocomputationnel culmine aux sommets d'inflexion aigus où la trajectoire s'inverse brusquement. Lors de cette rupture angulaire, le glissement rétinien instantané s'emballe tandis que l'erreur de positionnement fovéal explose. Les recherches fondamentales de de Brouwer et al. (2002) et Heinen et al. (2005) ont établi que les saccades de rattrapage (catch-up saccades) sont déclenchées par une boucle neuronale partagée au sein du colliculus supérieur et des champs oculaires frontaux (FEF), intégrant l'écart spatial et l'erreur de vitesse pour produire un réajustement balistique rigoureux.",
      "Sans préparation motrice ciblée, le système oculomoteur subit d'importants dépassements par inertie ou des raccourcissements prématurés, entraînant des latences de réacquisition prolongées et une instabilité fovéale. En revanche, l'exposition répétée aux tracés alternés en zigzag active les modèles internes prédictifs du cervelet (Barnes, 2008; Krauzlis, 2004; Orban de Xivry & Lefèvre, 2007), assurant une décélération anticipée avant chaque sommet, réduisant l'erreur saccadique et favorisant un réengagement fluide sur la trajectoire diagonale opposée.",
      "L'exercice de poursuite visuelle en zigzag isole et entraîne ces réseaux sensorimoteurs directement dans votre navigateur web. En suivant la cible le long d'un parcours alterné ininterrompu, vous calibrez l'égalisation dynamique de vitesse et le recentrage net aux points d'inflexion. L'option qui masque la ligne supprime les repères graphiques pour évaluer l'estimation perceptive en temps réel, tandis que la vitesse aléatoire conditionne la flexibilité visuelle face aux ruptures de cadence imprévues.",
      "Méthodologie de mesure et latence matérielle : Les mesures temporelles et d'adhésion visuelle intègrent la quantification de rafraîchissement d'écran (~16,7 ms à 60 Hz, ~6,9 ms à 144 Hz, ~4,1 ms à 240 Hz) ainsi que les intervalles de scrutation des périphériques (~8 ms à 125 Hz contre ~1 ms à 1 000 Hz), comme documenté par Woods et al. (2015). L'ensemble de vos scores et métriques reste exclusivement stocké dans le stockage local (localStorage) de votre navigateur, garantissant une confidentialité totale sans transmission télémétrique."
    ],
    benchmarks: {
      title: "Normes de Performance en Zigzag (Vitesse et Précision aux Inflexions)",
      headers: ["Niveau de Maîtrise", "Multiplicateur de Vitesse", "Erreur au Sommet", "Latence Saccadique de Virage", "Percentile Mondial"],
      rows: [
        ["Élite / Maître de la Reversion Rapide", "3.5x – 5.0x+", "Erreur < 12 px (fixation parfaite au virage)", "Latence < 110 ms (freinage prédictif)", "Top 1.5%"],
        ["Maître / Haute Discipline Vectorielle", "2.5x – 3.5x", "Erreur < 22 px (microsaccades minimes)", "Latence < 140 ms (virages fluides)", "Top 8%"],
        ["Avancé / Athlète Compétitif", "1.8x – 2.5x", "Erreur < 38 px (réacquisition rapide)", "Latence < 180 ms (transitions stables)", "Top 25%"],
        ["Intermédiaire / Pratiquant Régulier", "1.2x – 1.8x", "Erreur 38 – 70 px (dépassements et virages coupés)", "Latence 180 – 240 ms (corrections multiples)", "Moyenne 45%"],
        ["Débutant / Non Initié", "0.5x – 1.2x", "Erreur > 70 px (perte complète aux sommets)", "Latence > 250 ms (dépassement marqué)", "Niveau de Base"]
      ],
      note: "Barèmes établis d après de Brouwer et al. (2002) sur la dynamique des saccades correctives et Krauzlis (2004) sur le contrôle moteur lors de rapides changements de vitesse et de direction."
    },
    steps: [
      { title: "Fixez la cible au centre", text: "Gardez la tête stable et suivez du regard le premier segment diagonal." },
      { title: "Suivez la diagonale sans couper", text: "Accompagnez la cible jusqu au bout de chaque segment et gardez le regard au centre." },
      { title: "Freinez avant le virage", text: "Réduisez l impulsion avant l inflexion pour éviter que le regard ne dépasse l angle." },
      { title: "Augmentez le rythme avec précision", text: "Montez la vitesse seulement lorsque les pertes de cible et l erreur aux virages restent stables." }
    ],
    instructions: [
      "Fixez la cible fovéale et suivez la course diagonale initiale.",
      "Anticipez le point de virage et déclenchez un freinage moteur souple avant la bascule.",
      "Projetez une microsaccade réactive pour vous caler sans à-coup sur le vecteur opposé.",
      "Augmentez la vitesse dès que votre erreur de virage demeure sous les 38 px."
    ],
    tips: [
      "Ne coupez pas la courbe: parcourez l arête complète jusqu au point angulaire extrême.",
      "Conservez une prise détendue sur la souris pour éviter toute tension au poignet.",
      "Gardez une respiration régulière pour stabiliser l innervation musculaire des yeux."
    ],
    sources,
    faqs: faqSchema.mainEntity.map(({ name, acceptedAnswer }) => ({ q: name, a: acceptedAnswer.text }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ZigZagPathPursuitClient
        copy={{
          title: "Poursuite visuelle en zigzag",
          subtitle: "Exercice de diagonales et de virages rapides",
          description: "Suivez une cible en zigzag et mesurez les pertes et l erreur aux virages."
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
