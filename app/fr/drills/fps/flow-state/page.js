import FlowStateClient from '@/app/drills/fps/flow-state/FlowStateClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Concentration FPS | Entraînement de Flow | SkillDrills",
  description: "Concentration FPS gratuite : gardez le réticule sur une cible qui suit des courbes. 1 s hors cible casse le combo, et chaque niveau rend la cible plus petite.",
  keywords: [
    "entraînement concentration FPS",
    "état de flow jeu",
    "entrer dans la zone Valorant",
    "concentration pour jouer aux FPS",
    "visée en état de flow",
    "tracking fluide",
    "garder son focus sur CS2",
    "routine mentale gaming",
    "endurance mentale FPS",
    "état de flow FPS"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/flow-state",
    languages: getAlternateLanguages('/drills/fps/flow-state'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Concentration FPS | Entraînement de Flow | SkillDrills",
    description: "Concentration FPS gratuite : gardez le réticule sur une cible qui suit des courbes. 1 s hors cible casse le combo, et chaque niveau rend la cible plus petite.",
    url: "https://skilldrills.online/fr/drills/fps/flow-state",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Concentration FPS | Entraînement de Flow | SkillDrills",
    description: "Concentration FPS gratuite : gardez le réticule sur une cible qui suit des courbes. 1 s hors cible casse le combo, et chaque niveau rend la cible plus petite.",
  },
};

export default function FlowStateFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînements FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Concentration FPS", "item": "https://skilldrills.online/fr/drills/fps/flow-state" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Concentration FPS",
    "url": "https://skilldrills.online/fr/drills/fps/flow-state",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Nécessite un navigateur prenant en charge HTML5 Canvas et JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Exercice gratuit de concentration FPS : suivre sans interruption une cible sur des courbes de Bézier pour travailler l'attention soutenue et le tracking."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Flow_(psychology)"],
    "name": "Concentration FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Exercice de tracking continu dans le navigateur pour travailler la concentration des joueurs de FPS.",
    "genre": "Entraînement FPS / Focus Mental",
    "url": "https://skilldrills.online/fr/drills/fps/flow-state",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Concentration FPS",
    "url": "https://skilldrills.online/fr/drills/fps/flow-state",
    "description": "Exercice de précision avec courbes de Bézier continues développé pour stimuler l'attention ininterrompue et fluidifier la visée.",
    "gamePlatform": "Web Browser",
    "genre": ["Entraînement FPS", "Entraîneur de Visée"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'état de flow dans les jeux FPS ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'état de flow (ou entrer dans la zone) est un état mental optimal où le niveau du défi correspond parfaitement aux compétences du joueur (Csikszentmihalyi, 1990), supprimant les doutes et rendant les gestes instinctifs."
        }
      },
      {
        "@type": "Question",
        "name": "Comment entrer dans la Zone sur Valorant et CS2 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour entrer dans la zone, adoptez une respiration régulière, supprimez les distractions extérieures et suivez la trajectoire des cibles sans focaliser votre attention sur vos mains."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'hypofrontalité transitoire lors du tir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est une hypothèse de Dietrich (2004) : pendant le flow, l'activité du cortex préfrontal dorsolatéral baisserait temporairement, ce qui réduirait le contrôle conscient des gestes. Elle reste discutée et ce drill ne la mesure pas."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi la visée tremble-t-elle lors des duels sous pression ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le stress stimule le système sympathique, provoquant la contraction simultanée des muscles agonistes et antagonistes. Cette rigidité perturbe la fluidité de la poursuite oculaire."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi les courbes de Bézier favorisent-elles la concentration ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les trajectoires de Bézier produisent des accélérations progressives et naturelles, obligeant le système visuel à maintenir une poursuite oculaire lente (Krauzlis, 2004) sans saccades parasites."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle sensibilité de souris choisir pour travailler le flow ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilisez votre sensibilité réelle en jeu. Le travail du flow sert à consolider la mémoire musculaire exploitée lors de vos véritables matches compétitifs."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il regarder le centre du viseur ou anticiper la cible ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Portez votre regard légèrement en avant du centre de la cible dans la direction du déplacement. Ce guidage prédictif soulage la tension oculaire et anticipe les virages."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi perd-on en précision après plusieurs heures de jeu ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Après une longue concentration, il devient plus difficile de garder l'attention sur un point : le suivi devient moins fluide et les corrections tardives se multiplient. Les ruptures de focus et la précision de suivi de ce drill montrent ce changement."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles pauses permettent de maintenir son focus entre les rounds ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fixez un point lointain pendant 30 à 60 secondes, buvez de l'eau à intervalles réguliers et détendez vos épaules pour relâcher la tension musculaire accumulée."
        }
      },
      {
        "@type": "Question",
        "name": "Cet exercice aide-t-il la concentration au travail ou aux études ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ce n'est pas démontré. Le transfert d'un exercice de tracking vers le travail ou les études n'est pas prouvé, mais le drill peut servir de courte pause de concentration."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Développer le Focus et l'État de Flow en Jeu FPS",
    "description": "Guide pratique pour atteindre une immersion mentale totale et un suivi de visée sans saccades.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Aligner la Sensibilité en Jeu",
        "text": "Réglez une fois la sensibilité de la souris dans les paramètres de la page /drills ; elle s'applique à tous les exercices à la souris.",
        "url": "https://skilldrills.online/fr/drills/fps/flow-state#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Verrouiller le Curseur en Mode Plein Écran",
        "text": "Cliquez sur démarrer pour passer en plein écran avec verrouillage du pointeur (Pointer Lock). Une souris est nécessaire, le tactile n'est pas pris en charge.",
        "url": "https://skilldrills.online/fr/drills/fps/flow-state#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Anticiper la Trajectoire de la Courbe de Bézier",
        "text": "Fixez le regard légèrement en avant de la trajectoire pour engager une poursuite fovéale continue sans retard.",
        "url": "https://skilldrills.online/fr/drills/fps/flow-state#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Maintenir la Série dans la Zone de Flow",
        "text": "Chaque seconde complète sur la cible ajoute 1 au combo et le multiplicateur monte jusqu'à 3,0x. Après 1 seconde hors cible, le combo repart à zéro.",
        "url": "https://skilldrills.online/fr/drills/fps/flow-state#step-4"
      }
    ]
  };

  const copyFr = {
    h1Keyword: "Concentration FPS",
    h1Suffix: " – Entraînement de Flow",
    statScore: "Score",
    statTime: "Temps Restant",
    statAccuracy: "Précision de Suivi",
    statBestScore: "Meilleur Score",
    startTitle: "Entraînement Focus FPS et État de Flow",
    startSubtitle: "Pointer Lock • Endurance attentionnelle • Difficulté progressive",
    getReady: "Prêt",
    pausedTitle: "Concentration en Pause",
    pausedSubtitle: "Cliquez pour reprendre (le verrouillage de souris sera réactivé)",
    stageCaption: "Suivez la trajectoire des courbes de Bézier avec régularité et gardez un rythme de visée constant.",
    rulesTitle: "Règles d'Entraînement et Attribution des Points",
    rulesItems: [
      { num: "1", text: "Alignement Continu", highlight: "+10 PTS / 0,25 s", result: "Sur la cible : +0,4 s/s de temps (60 s max)" },
      { num: "2", text: "Multiplicateur de Flow", highlight: "Jusqu'à 3,0x points", result: "Chaîne de focus ininterrompue" },
      { num: "3", text: "Progression en Niveaux", highlight: "+1 Niveau / 1400 PTS", result: "Vitesse Bézier adaptative" },
      { num: "4", text: "Rupture de Focus", highlight: "1,0s hors cible", result: "Combo remis à zéro" }
    ],
    aboutTitle: "À Propos de l'Entraîneur d'État de Flow FPS"
  };

  const flowStateGuide = {
    heading: "Guide de Concentration FPS et Benchmarks de l'État de Flow",
    intro: [
      "L'entraînement de concentration FPS consiste à suivre une cible avec un rythme stable et à réduire les distractions. Le drill commence avec 45 secondes, ajoute du temps tant que vous restez sur la cible et devient plus difficile avec le score et le combo. Il mesure la précision du tracking et l'endurance attentionnelle ; il ne promet pas de créer le flow à volonté, mais révèle quand le focus et le contrôle diminuent.",
      "L'hypothèse d'hypofrontalité transitoire de Dietrich (2004) tente d'expliquer pourquoi le contrôle conscient diminue pendant le flow. Ce drill ne garantit pas cet état, mais il permet de répéter un suivi sans interruption et de voir à quel moment la concentration lâche.",
      "La cible suit des courbes de Bézier quadratiques ; à chaque niveau son rayon diminue et les courbes se resserrent. Le contrôle se fait à la souris en Pointer Lock, sans installation, directement dans le navigateur.",
      "Mesure technique sur votre appareil : chaque événement est horodaté localement via le navigateur sans transmission de métriques vers des serveurs distants. Rappelez-vous que les navigateurs appliquent une discrétisation de ~1 ms pour contrer les failles de temporisation et que les écrans actualisent l'image par pas réguliers (16,7 ms à 60 Hz contre 4,1 ms à 240 Hz). Mesurez vos progrès en comparant vos performances sur le même poste."
    ],
    benchmarks: {
      title: "Paliers d'Induction du Flow et Niveaux d'Endurance Attentionnelle",
      headers: ["Niveau", "Dimension du Flow", "Indicateur Physiologique", "Mécanisme Cognitif", "Objectif Pratique"],
      rows: [
        ["Niveau 1", "Orientation Attentionnelle", "Filtrage sensoriel et fixation fovéale", "Le réseau d'alerte de Posner inhibe les bruits ambiants", "Terminer une partie avec au moins 50 % de précision de suivi"],
        ["Niveau 2", "Équilibre Défi-Compétence", "Calibration dynamique de la vitesse", "Canal de Csikszentmihalyi : vitesse calée sur la motricité", "Maintenir 70% à 80% de contact régulier sur la cible"],
        ["Niveau 3", "Poursuite Visuelle Lente", "Synchronisation de vitesse fovéale", "Les voies cortico-striées de Krauzlis suppriment les saccades", "Plus de 85% de maintien stable sur courbes de Bézier"],
        ["Niveau 4", "Hypofrontalité Transitoire", "Mise en retrait relative du DLPFC", "Hypothèse de Dietrich : motricité réflexe sans doute conscient", "Plus de 30 secondes d'immersion ininterrompue sans hésiter"],
        ["Niveau 5", "Endurance Maximale de Focus", "Résistance à la fatigue exécutive", "Le réseau exécutif empêche la dégradation du temps de réaction", "Atteindre un combo de 50 (multiplicateur max 3,0x)"]
      ],
      note: "Les objectifs sont des paliers d'entraînement SkillDrills, pas des normes de recherche ni des données d'utilisateurs. Les noms des paliers s'inspirent de Csikszentmihalyi (1975, 1990), Dietrich (2004), Krauzlis (2004) et Posner & Petersen (1990)."
    },
    techniques: {
      title: "Protocoles Pratiques pour Stimuler le Flow en Jeu",
      items: [
        {
          name: "Guidage Prédictif Tangentiel",
          desc: "Au lieu de regarder en retard le centre de la cible, regardez un peu en avant, dans la direction où la courbe se dirige.",
          tips: "Restez attentif aux infimes variations de courbure du tracé."
        },
        {
          name: "Relâchement Musculaire et Respiration Calme",
          desc: "La crispation des avant-bras nuit à la régularité. Prenez de lentes respirations avant les moments cruciaux pour abaisser l'excitation nerveuse.",
          tips: "Allégez la pression de la main sur la souris lors des grands virages."
        },
        {
          name: "Suppression du Jugement Intérieur",
          desc: "Penser au résultat en plein tir réveille le DLPFC et freine les réflexes. Focalisez toute votre perception uniquement sur le trajet du joueur adverse.",
          tips: "Considérez chaque décrochage comme un simple repère de correction immédiate."
        },
        {
          name: "Gestion des Pauses et Hydratation",
          desc: "Une concentration soutenue fatigue. Boire un peu d'eau et s'accorder une courte pause aide à repartir plus frais.",
          tips: "Prenez une pause toutes les 45 à 60 minutes de session classée intense."
        }
      ]
    },
    scientificPrinciples: {
      title: "Bases Psychologiques et Cérébrales de l'État de Flow",
      items: [
        {
          name: "Le Canal de Flow de Csikszentmihalyi",
          desc: "Un exercice trop aisé amène l'ennui alors qu'une difficulté démesurée suscite l'anxiété. Le flow s'installe dans la zone médiane où l'épreuve pousse le potentiel à sa limite."
        },
        {
          name: "Modèle des Réseaux d'Attention de Posner",
          desc: "L'attention s'articule autour de réseaux d'alerte, d'orientation et de contrôle exécutif. La pratique régulière équilibre ces composantes et filtre les distractions."
        },
        {
          name: "Efficience Motrice Sous-Corticale",
          desc: "Un geste bien répété demande moins de contrôle conscient, ce qui laisse plus d'attention pour le jeu."
        }
      ]
    },
    steps: [
      "Réglez une fois la sensibilité de la souris dans les paramètres de la page /drills ; la valeur s'applique à tous les exercices à la souris.",
      "Cliquez sur 'Lancer' pour activer le plein écran avec verrouillage du pointeur (Pointer Lock).",
      "Fixez votre attention visuelle sur la cible en mouvement le long de courbes de Bézier continues et fluides.",
      "Gardez le réticule dans le rayon de la cible : chaque seconde complète augmente le combo, 1 seconde hors cible le remet à zéro.",
      "Prolongez le combo pour augmenter le multiplicateur, puis comparez la précision et les ruptures de focus avec vos parties précédentes.",
    ],
    audience: "Joueurs compétitifs de FPS et de jeux de tir tactiques (Valorant, CS2, Apex Legends, Overwatch 2, Warzone), athlètes eSport en échauffement de tournoi et passionnés de performance cognitive souhaitant développer l'attention soutenue.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'dietrich2004'),
    related: [
      { href: "/fr/drills/reaction-speed/fps-tracking-trainer", label: "Entraîneur de Tracking FPS" },
      { href: "/fr/drills/fps/anti-zigzag-movement-trainer", label: "Tracking en zigzag" },
      { href: "/fr/drills/fps/anti-strafe-jitter-duel", label: "Tracking anti-strafe ADAD" },
      { href: "/fr/drills/fps/flick-shot-training", label: "Aim Test : flicks et précision" },
      { href: "/fr/drills/reaction-speed/visual-tracking-speed-test", label: "Test de Vitesse de Tracking Visuel" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <FlowStateClient copy={copyFr} />
      <RelatedDrills />
      <DrillGuide guide={flowStateGuide} />
      <DrillFooter />
    </>
  );
}
