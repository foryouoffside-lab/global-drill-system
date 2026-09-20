import GhostingSuppressPursuitClient from '@/app/drills/visual-tracking/ghosting-suppress-pursuit/GhostingSuppressPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Rémanence Écran | SkillDrills",
  description: "Observez les traînées et halos d’une cible mobile et travaillez fixation fovéale, netteté du mouvement et stabilité du regard.",
  keywords: [
    "test de rémanence écran",
    "test ghosting écran",
    "traînée écran",
    "temps de réponse écran",
    "test de flou de mouvement",
    "fréquence de rafraîchissement écran",
    "test de mouvement écran",
    "fixation fovéale",
    "stabilité du regard",
    "test de poursuite oculaire",
    "rémanence moniteur gaming",
    "test écran gratuit"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/ghosting-suppress-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Test de Rémanence Écran | SkillDrills",
    description: "Observez les traînées et halos d’une cible mobile et travaillez fixation fovéale, netteté du mouvement et stabilité du regard.",
    url: "https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit",
    siteName: "SkillDrills",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test de Rémanence Écran | SkillDrills",
    description: "Observez les traînées et halos d’une cible mobile et travaillez fixation fovéale, netteté du mouvement et stabilité du regard.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Poursuite Visuelle",
      "item": "https://skilldrills.online/fr/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Suppression des Traînées et Fixation",
      "item": "https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Suppression des Traînées Visuelles – Fixation Oculaire",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Navigateur",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Stabilité de Fixation Oculaire et Neutralisation du Flou Visuel",
  "url": "https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Navigateur",
  "browserRequirements": "JavaScript et Canvas HTML5 requis.",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de Rémanence Écran – Fixation Fovéale",
  "description": "Entraîneur visuel sur navigateur pour observer les traînées d’une cible mobile et travailler fixation fovéale et stabilité du regard.",
  "genre": ["Test d’Écran", "Entraînement de la Motricité Oculaire", "Entraînement de la Réactivité Visuelle"],
  "playMode": "Un joueur",
  "applicationCategory": "Game",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Comment Entraîner la Fixation Fovéale Face aux Traînées Visuelles",
  "description": "Protocole pour stimuler le défloutage cortical et verrouiller le regard sur des cibles avec artefacts visuels.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Stabilisez Votre Tête et Votre Posture",
      "text": "Asseyez-vous à 50-60 cm de l'écran avec la tête parfaitement immobile pour forcer l'action directe des muscles oculomoteurs sans intervention vestibulaire.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Verrouillez le Centre du Noyau",
      "text": "Portez votre attention exclusivement sur le cœur de la cible, en refusant activement de suivre les anneaux rémanents qui traînent à l'arrière.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Inhibez le Décrochage Rétinien",
      "text": "Empêchez votre fovéa de glisser vers l'arrière. Maintenez des microsaccades d'ajustement stables sur la partie avant du vecteur.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Enchaînez des Séries Intenses et Concises",
      "text": "Effectuez 5 à 8 séries de 60 secondes avec des pauses pour préserver la précision synaptique du cortex visuel sans fatigue prématurée.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit#step-4"
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
      "name": "Qu’est-ce qu’un test de rémanence et de fixation du regard ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est une pratique visuelle qui montre une cible mobile avec des traînées et des halos afin d’observer la netteté du mouvement et de garder le regard sur le noyau. Elle ne remplace pas une mesure de laboratoire du temps de réponse de la dalle."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le système visuel gère-t-il le flou de mouvement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le système visuel combine les signaux de mouvement et de contraste au fil du temps. La perception dépend du traitement neural et de la réponse de l’écran ; le résultat doit donc rester une observation et un exercice (Burr, 1980)."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le rôle des microsaccades dans la fixation oculaire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Même lors d'une fixation stable, les yeux réalisent des microsaccades imperceptibles qui rafraîchissent la fovéa et préviennent l'évanouissement visuel (effet Troxler) sans dévier de la cible (Martinez-Conde et al., 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi le regard suit-il parfois la traînée derrière la cible ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les changements de luminosité et de contraste en périphérie peuvent attirer l’attention. Si vous suivez le halo plutôt que le noyau, la fixation recule ; ralentissez et revenez au centre."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les bénéfices directs de cet entraînement pour les joueurs de FPS ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans les affrontements chargés d'explosions et d'effets visuels complexes, maintenir le réticule exactement au cœur de la cible adverse sans être perturbé par les traînées lumineuses garantit une précision de tir constante."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi faut-il maintenir la tête strictement immobile lors du test ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les mouvements de tête déclenchent le réflexe vestibulo-oculaire (RVO), compensant le suivi via l'oreille interne. L'immobilité de la tête garantit que les muscles oculomoteurs assument la totalité de la charge de stabilisation."
      }
    },
    {
      "@type": "Question",
      "name": "Quel temps d’entraînement quotidien est recommandé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous conseillons 5 à 10 minutes quotidiennes (5 à 8 blocs de 60 secondes). La suppression de stimuli parasites exigeant une grande énergie cognitive, des séances courtes évitent la fatigue oculaire et maximisent l'apprentissage."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est l’influence de la réactivité de l’écran (GtG) et de sa fréquence (Hz) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le temps de réponse et la fréquence de l’écran modifient la traînée observée, mais un navigateur ne garantit pas une mesure de 1 ms. Comparez 60, 120 ou 144 Hz sur le même appareil et notez les conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Ce protocole s’applique-t-il aux sports de balle comme le tennis ou le football ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Une balle rapide crée une traînée sur la rétine. Les athlètes dotés d'une fixation d'élite isolent la rotation et les coutures de la balle en dépit de la vitesse, améliorant ainsi leur réactivité spatiale."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test de suppression des traînées visuelles est-il gratuit et confidentiel ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, ce test fonctionne gratuitement et directement dans votre navigateur web sans création de compte, et l'ensemble de vos données de performance est conservé localement sur votre terminal."
      }
    }
  ]
};

const guideProps = {
  heading: "Bases Neurophysiologiques de la Fixation Fovéale et Neutralisation du Flou Visuel",
  intro: [
    "Lorsqu’une cible rapide se déplace, son image peut laisser une traînée à cause de la réponse des pixels, du temps d’intégration visuelle et du mouvement du regard. Ce test utilise la traînée comme distraction contrôlée : l’objectif est de garder la fixation sur le noyau, sans en faire un examen clinique (Burr, 1980 ; Burr & Morgan, 1997).",
    "Filtrage visuel et microsaccades : pendant la fixation, de petits mouvements oculaires renouvellent la stimulation rétinienne et contribuent à maintenir la perception de la cible. L’exercice associe attention au noyau, poursuite fluide et correction brève lorsque le halo attire la vision périphérique (Martinez-Conde, Macknik, & Hubel, 2004 ; Rolfs, 2009 ; Krauzlis, 2004).",
    "Interaction avec le matériel et fréquence : 60 Hz, 120 Hz et 144 Hz présentent le mouvement à des intervalles différents, tandis que l’overdrive peut produire un halo clair de dépassement. Comparez le même écran et les mêmes réglages ; l’outil fonctionne dans le navigateur et conserve les résultats localement."
  ],
  techniques: {
    title: "Quatre techniques pour garder la fixation sur le noyau",
    items: [
      { name: "Stabiliser la posture avant d’observer la traînée", desc: "Garder la tête et la mâchoire immobiles réduit les mouvements compensatoires et aide à distinguer le comportement du regard de l’artefact de l’écran.", tips: "Installez-vous à 50–70 cm, posez les pieds au sol et arrêtez en cas de brûlure, de douleur ou de vision double." },
      { name: "Fixer le noyau plutôt que le halo", desc: "Le centre de la cible sert de référence de précision ; la traînée est un stimulus secondaire qui peut attirer l’attention vers l’arrière.", tips: "Commencez lentement et répétez mentalement « centre » lorsque le halo devient plus visible." },
      { name: "Comparer une seule variable à la fois", desc: "La fréquence, la luminosité, l’overdrive et la vitesse changent l’aspect de la traînée. Tout modifier simultanément empêche une comparaison fiable.", tips: "Gardez le fond et la taille constants ; changez uniquement la vitesse ou le réglage de l’écran par série." },
      { name: "Se reposer et noter les conditions", desc: "La fatigue, la luminosité et la distance de vision influencent la stabilité du regard. Des séries courtes donnent des observations plus comparables.", tips: "Notez la vitesse, les Hz et le mode de réponse ; interrompez en cas de gêne visuelle persistante." }
    ]
  },
  steps: [
    "Asseyez-vous à 50–70 cm de l’écran, alignez votre posture et gardez la tête stable.",
    "Commencez à 0.7x ou 1.0x pendant 60 secondes et observez le noyau sans chercher à mesurer le temps de réponse de la dalle.",
    "Lorsque le halo apparaît, gardez le regard au centre ; si vous le perdez, faites une correction courte puis reprenez la poursuite fluide.",
    "Répétez la série en ne changeant qu’une condition : vitesse, fréquence de rafraîchissement ou intensité de réponse de l’écran.",
    "Faites 5 à 8 séries avec des pauses et notez les réglages, la fréquence des pertes et toute gêne."
  ],
  benchmarks: {
    title: "Normes de Performance en Fixation Fovéale et Suppression des Traînées Visuelles",
    headers: ["Niveau de Performance", "Multiplicateur de Vitesse", "Stabilité de Fixation Face aux Traînées Visuelles", "Profil Neuromoteur et Oculaire"],
    rows: [
      ["Niveau 1 : Apex Fixation – Verrouillage Fovéal Pur", "2.0x+ Ultra-Vitesse", "Le regard demeure ancré sur le noyau de la cible malgré les anneaux d'artefacts denses et les rebonds rapides.", "Inhibition corticale parfaite du flou de mouvement et précision absolue des microsaccades (Burr, 1980 ; Martinez-Conde et al., 2004). Standard d'élite en sport et esport."],
      ["Niveau 2 : Acuité de Fixation Supérieure", "1.4x – 1.9x Haute Vitesse", "Contour de la cible parfaitement isolé à vive allure ; distraction négligeable face aux traînées résiduelles.", "Remarquable filtrage sensorimoteur des muscles extraoculaires. Très grande efficacité dans les environnements riches en particules."],
      ["Niveau 3 : Standard Fonctionnel Solide", "1.0x – 1.3x Vitesse Standard", "Poursuite régulière à vitesse de référence ; brève hésitation lors des rebonds ou lorsque la traînée se densifie.", "Profil représentatif des adultes sains. Parfaitement adapté à la conduite automobile, aux loisirs sportifs et au jeu vidéo standard."],
      ["Niveau 4 : Dérive Oculaire – Pratique Recommandée", "0.7x – 0.9x Vitesse Modérée", "Le regard est régulièrement attiré vers l'arrière par les traînées ; le noyau de la cible s'échappe souvent de la fovéa.", "Filtrage cortical ralenti face au bruit visuel. Entraînement recommandé sur les paliers de vitesse inférieurs."],
      ["Niveau 5 : Perte de Fixation – Débutant", "< 0.7x Basse Vitesse", "Les yeux oscillent de façon désordonnée entre le centre de la cible et les anneaux fantômes, entraînant un décrochage complet.", "La coordination neuromusculaire de base doit d'abord être stabilisée à vitesse réduite avec immobilisation stricte de la tête."]
    ],
    note: "Normes établies d'après les recherches neurophysiologiques sur le contrôle de la fixation fovéale, la dynamique des microsaccades et la suppression corticale du flou de mouvement (Burr, 1980 ; Martinez-Conde et al., 2004 ; Rolfs, 2009 ; Krauzlis, 2004)."
  },
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('burr1980', 'martinezconde2004', 'rolfs2009', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Poursuite Oculaire Lente" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite Chaotique Directionnelle" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite Oculaire Réactive" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Poursuite en Huit" }
  ]
};

export default function GhostingSuppressPursuitPageFr() {
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
      <GhostingSuppressPursuitClient
        copy={{
          title: "Test de Rémanence Écran – Fixation Oculaire",
          subtitle: "Entraînement à la Stabilité Fovéale et à la Neutralisation du Flou Visuel",
          description: "En affichant des traînées d'arrachement et des anneaux fantômes stochastiques, cet exercice entraîne le cortex visuel à inhiber activement les perturbations d'arrière-plan pour focaliser la fovéa sur le noyau de la cible (Burr, 1980; Martinez-Conde et al., 2004)."
        }}
      />
      <DrillGuide guide={guideProps} />
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <RelatedDrills currentCategory="visual-tracking" currentHref="https://skilldrills.online/fr/drills/visual-tracking/ghosting-suppress-pursuit" />
      </div>
      <DrillFooter />
    </>
  );
}
