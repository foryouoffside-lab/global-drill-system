import VerticalAirTrackClient from '@/app/drills/fps/vertical-air-track/VerticalAirTrackClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Tracking vertical FPS : cibles aériennes | SkillDrills',
  description: "Tracking vertical gratuit dans le navigateur : maintenez le clic sur des cibles aériennes qui montent puis retombent en parabole. Axe Y pour Apex et Overwatch 2.",
  keywords: [
    'tracking vertical FPS',
    'visée verticale FPS',
    'suivi aérien',
    'suivi vertical Apex',
    'contrôle souris axe Y',
    'vertical aim trainer',
    'trajectoire parabolique Overwatch',
    'smooth pursuit vertical',
    'précision souris verticale',
    'sensibilité verticale souris',
    'tir aérien FPS'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/fps/vertical-air-track',
    languages: getAlternateLanguages('/drills/fps/vertical-air-track'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Tracking vertical FPS : cibles aériennes | SkillDrills',
    description: "Tracking vertical gratuit dans le navigateur : maintenez le clic sur des cibles aériennes qui montent puis retombent en parabole. Axe Y pour Apex et Overwatch 2.",
    url: 'https://skilldrills.online/fr/drills/fps/vertical-air-track',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Tracking vertical FPS : cibles aériennes | SkillDrills',
    description: "Tracking vertical gratuit dans le navigateur : maintenez le clic sur des cibles aériennes qui montent puis retombent en parabole. Axe Y pour Apex et Overwatch 2.",
  },
};

export default function VerticalAirTrackFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînements FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Tracking vertical FPS", "item": "https://skilldrills.online/fr/drills/fps/vertical-air-track" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Tracking vertical FPS - cibles aériennes",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any (Web Browser)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Entraîneur en ligne gratuit de contrôle de souris sur l'axe Y et de poursuite oculaire de cibles aériennes pour Apex Legends et Overwatch 2."
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Tracking vertical FPS - cibles aériennes",
    "url": "https://skilldrills.online/fr/drills/fps/vertical-air-track",
    "browserRequirements": "Requires Pointer Lock API and WebGL support",
    "applicationCategory": "ShooterTraining",
    "creator": {
      "@type": "Organization",
      "name": "SkillDrills"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Tracking vertical FPS - cibles aériennes",
    "description": "Simulateur de suivi de cibles aériennes sous contrainte gravitationnelle pour perfectionner la motricité sur l'axe Y et intercepter les cibles volantes.",
    "genre": ["First-Person Shooter", "Aim Trainer", "Reaction Training"],
    "playMode": "SinglePlayer",
    "gamePlatform": ["PC", "Web Browser"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'entraînement à la visée verticale dans les FPS ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il cible les mouvements de souris sur l'axe Y (haut et bas), souvent négligés par rapport aux déplacements horizontaux. Il est crucial pour ajuster son tir sur des cibles sautant, volant ou chutant dans Apex Legends et Overwatch 2."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que le popcorn tracking et comment ce module l'entraîne-t-il ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est la capacité à suivre des cibles qui rebondissent dans les airs selon des trajectoires paraboliques. L'exercice conditionne la poursuite oculaire continue et l'anticipation de la pesanteur au sommet de chaque courbe."
        }
      },
      {
        "@type": "Question",
        "name": "En quoi la visée verticale est-elle primordiale sur Apex Legends ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apex Legends exploite une grande verticalité : tremplins d'Octane, ascenseurs d'Horizon, grappins de Pathfinder. Cet exercice isole le suivi de ces trajectoires sur l'axe Y pour le répéter à part."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce qu'un 'elevator peek' dans les jeux compétitifs ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est lorsqu'un adversaire emprunte une corde ou un dénivelé pour surgir brutalement au-dessus de votre viseur. L'exercice entraîne à suivre des cibles qui jaillissent du bas de l'écran et changent brusquement de hauteur."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi le tracking vertical est-il plus difficile biomécaniquement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le tracking horizontal repose sur la rotation naturelle de l'avant-bras et du poignet. Le tracking vertical impose l'extension inconfortable du poignet, la crispation des doigts ou le glissement du bras contre la friction du tapis."
        }
      },
      {
        "@type": "Question",
        "name": "Comment les joueurs d'Overwatch 2 s'entraînent-ils contre les cibles aériennes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ils s'exercent contre des héros volants comme Pharah, Echo ou Mercy et les bonds plongeants de Winston, en synchronisant la vitesse de leur souris sur l'axe Y. Cet exercice reproduit ce type de suivi vertical, pas les hitbox ni les déplacements exacts du jeu."
        }
      },
      {
        "@type": "Question",
        "name": "Le tracking vertical aide-t-il sur Halo Infinite ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, Halo Infinite intègre des canons de projection, des répulseurs et des grappins. Cet entraînement travaille le suivi vertical d'une cible en plein saut ; il fonctionne en tir maintenu et ne reproduit pas les rafales du Battle Rifle."
        }
      },
      {
        "@type": "Question",
        "name": "Comment les erreurs sont-elles pénalisées dans Vertical Air-Track ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tant que vous maintenez le clic gauche avec le réticule sur la cible, elle perd ses points de vie (100) ; à 0, elle est détruite. Chaque destruction rapporte 100 points plus un bonus d'altitude (+25/+50/+75 au-delà de 25 %/50 %/75 % de la hauteur d'écran), multipliés par le combo et le niveau, et ajoute 2 s au chrono (60 s max). Le chrono démarre à 45 s. Si une cible sort par le bas de l'écran, le combo est remis à zéro et vous perdez 1 s (si l'option Timeout est désactivée, elle rebondit). Décrocher un instant ne casse pas le combo mais fait baisser le taux de suivi. Tous les 1 400 points, le niveau monte : plus de gravité et d'esquives, cibles plus petites, deux cibles à la fois dès le niveau 5."
        }
      },
      {
        "@type": "Question",
        "name": "À quelle fréquence s'entraîner sur la visée verticale ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il n'y a pas de durée magique ; 10 à 15 minutes, 3 à 4 fois par semaine, est un bon rythme. Suivez votre taux de suivi et votre niveau atteint sur le même matériel."
        }
      },
      {
        "@type": "Question",
        "name": "Cet entraînement au tracking vertical est-il gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, gratuit, sans téléchargement ni inscription, dans un navigateur PC. Il faut une souris : au démarrage, le curseur est verrouillé (Pointer Lock) ; Échap ou la perte du verrouillage termine la session. Les appareils uniquement tactiles ne sont pas pris en charge."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Entraîner la Visée Verticale et le Suivi Aérien sur Navigateur",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Paramétrer la Sensibilité et Verrouiller le Curseur",
        "text": "Réglez la sensibilité globale sur la page /drills (1,00x = 30 cm/360) puis cliquez sur Démarrer pour verrouiller le curseur."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Intercepter la Cible Dès son Éjection",
        "text": "Positionnez le réticule sur la trajectoire ascendante de la cible aérienne dès son apparition."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Accompagner la Décélération au Sommet du Vol",
        "text": "Ralentissez la vitesse de glisse au sommet de la trajectoire où la cible marque une courte pause."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Accélérer Pendant la Descente Gravitationnelle",
        "text": "Tirez vivement la souris vers le bas pour épouser l'accélération de pesanteur (g = 9,81 m/s²)."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Maintenir le Combo et Détruire les Cibles",
        "text": "Détruisez les cibles haut dans l'écran pour le bonus d'altitude (jusqu'à +75) et avant qu'elles ne sortent par le bas."
      }
    ]
  };

  const verticalAirTrackGuide = {
    heading: "Tracking vertical FPS : axe Y et cibles aériennes",
    intro: [
      "Cet exercice gratuit de tracking vertical se joue dans le navigateur : des cibles aériennes sont lancées depuis le bas de l'écran, esquivent en vol (sauts, dashs latéraux, plongeons) puis retombent sous la gravité. Vous maintenez le clic gauche et suivez la cible sur l'axe Y jusqu'à la détruire. Le score de précision est la part du temps de tir où le réticule est sur une cible. Un échauffement pour les cibles aériennes d'Apex Legends et d'Overwatch 2.",
      "La neurophysiologie de la poursuite visuelle verticale se distingue fondamentalement du plan horizontal. Krauzlis (2004) rapporte que la poursuite oculaire (smooth pursuit) reste précise jusqu'à environ 30°/s, et Rashbass (1961) a prouvé que la poursuite continue est guidée par l'écart de vitesse rétinienne (retinal slip) plutôt que par une simple erreur de position statique, exigeant un ajustement permanent de la vitesse angulaire.",
      "Le suivi et l'interception de cibles en suspension exigent d'intégrer intuitivement les lois de l'accélération gravitationnelle (g = 9,81 m/s²). Land & McLeod (2000) montrent que les intercepteurs expérimentés prédisent où sera la cible plutôt que de la poursuivre, et anticipent la décélération de la trajectoire parabolique à l'apex du saut et son accélération exponentielle lors de la descente. Les joueurs qui négligent cette courbure cinétique accusent un retard systématique lors des phases de chute libre.",
      "Les cibles ont aussi une vitesse latérale et des dashs, mais l'essentiel du mouvement se fait sur l'axe Y : montée, apex, chute. Si vous travaillez surtout le tracking horizontal, cet exercice comble la partie verticale.",
      "Mesure des performances et latence matérielle : chaque impact et changement de direction est horodaté localement par l'horloge haute résolution performance.now() du navigateur sur votre propre machine — aucun score n'est transmis vers un serveur externe. Deux contraintes physiques inhérentes : les minuteurs des navigateurs sont volontairement arrondis pour contrer les failles Spectre (environ 1 ms), et votre écran quantifie les stimuli visuels selon sa fréquence de rafraîchissement (environ 16,7 ms par image à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz ; Woods et al., 2015). Le taux d'interrogation (polling rate) de la souris ajoute environ 8 ms à 125 Hz contre 1 ms à 1000 Hz. Les écarts inférieurs à 5 ms relèvent du bruit de mesure ; comparez vos séries sur une même configuration matérielle."
    ],
    benchmarks: {
      title: "Paliers d'entraînement SkillDrills : taux de suivi",
      headers: ["Palier", "Taux de suivi", "Profil typique"],
      rows: [
        ["Palier 1", "> 82 %", "Transition fluide à l'apex ; les esquives décrochent rarement le réticule"],
        ["Palier 2", "70 % – 82 %", "Poursuite régulière ; légères hésitations après une esquive"],
        ["Palier 3", "58 % – 70 %", "Bonne montée ; décrochage fréquent pendant la chute accélérée"],
        ["Palier 4", "45 % – 58 %", "Micro-flicks saccadés au lieu d'un mouvement continu sur l'axe Y"],
        ["Palier 5", "< 45 %", "Poignet crispé ; le réticule reste à la traîne des cibles en chute"]
      ],
      note: "Taux de suivi = part du temps de tir (clic maintenu) où le réticule est sur une cible. Paliers propres à SkillDrills, pas des normes scientifiques, des statistiques d'utilisateurs ni des rangs de jeu."
    },
    techniques: {
      title: "Protocoles Scientifiques pour Dompter la Visée Verticale",
      items: [
        {
          name: "Égalisation de Vitesse Rétinienne sur l'Axe Y",
          desc: "Concentrez-vous sur l'ajustement continu de la vitesse angulaire de la main sur celle de la cible plutôt que sur des micro-flicks (Rashbass, 1961 ; Krauzlis, 2004).",
          tips: "Fixez le centre du projectile aérien et laissez votre main glisser sans à-coups."
        },
        {
          name: "Anticipation de l'Apex Parabolique",
          desc: "Ralentissez la vitesse de glisse juste avant le point culminant pour préparer la redescente rapide (Land & McLeod, 2000).",
          tips: "Mettez à profit la décélération au sommet du bond pour engranger le bonus d'altitude (+75 PTS)."
        },
        {
          name: "Coordination Doigts et Avant-Bras",
          desc: "En prise claw ou fingertip, pliez et allongez les doigts pour des micro-ajustements verticaux vifs sans lever la main.",
          tips: "Pour les grands trajets verticaux, déplacez l'avant-bras de manière fluide sans bloquer le coude."
        },
        {
          name: "Contrôle de la Friction Statique Verticale",
          desc: "Ne plaquez pas excessivement la souris sur le tapis pour conserver une glisse aérienne sans résistance au démarrage.",
          tips: "Si la souris accroche lors de la montée, relâchez la pression de la paume et dépoussiérez le tapis."
        }
      ]
    },
    steps: [
      "Réglez la sensibilité globale sur la page /drills et cliquez sur Démarrer pour verrouiller le curseur.",
      "Repérez le départ de la cible aérienne et positionnez immédiatement votre viseur.",
      "Accompagnez l'ascension de la trajectoire parabolique en gardant le viseur centré.",
      "Synchronisez votre freinage au point culminant pour récolter les points de bonus d'apex.",
      "Accélérez vers le bas pendant la chute et videz les points de vie de la cible avant qu'elle ne sorte de l'écran."
    ],
    audience: "Joueurs d'Apex Legends, Overwatch 2, Halo et Destiny 2 qui veulent travailler le tracking vertical sur cibles aériennes dans le navigateur.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'rashbass1961', 'land2000'),
    related: [
      { href: "/fr/drills/fps/pro-smooth-pursuit", label: "Pro Smooth Pursuit" },
      { href: "/fr/drills/fps/strafe-tracking", label: "Suivi de Strafe" },
      { href: "/fr/drills/fps/target-switching-swarm", label: "Target Switching Swarm" },
      { href: "/fr/drills/fps/target-acquisition", label: "Acquisition de Cible FPS" },
      { href: "/fr/drills/fps/flow-state", label: "Flow State" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <VerticalAirTrackClient
        copy={{
          h1Keyword: "Tracking vertical FPS",
          h1Suffix: " – Cibles aériennes",
          statScore: "Score",
          statTime: "Temps",
          statAccuracy: "Précision",
          statBestScore: "Meilleur Score",
          statTargetsDestroyed: "Cibles Détruites",
          statMaxCombo: "Combo Max",
          statPeakLevel: "Niveau Max",
          startTitle: "Vertical Air-Track",
          startSubtitle: "Pointer Lock • Progression Dynamique",
          startButtonText: "Démarrer l'Exercice",
          playAgainText: "Rejouer",
          shareText: "Partager le Score",
          exitText: "Quitter",
          stageCaption: "Tracking vertical : maintenez le clic sur les cibles aériennes jusqu'à vider leurs points de vie avant qu'elles ne sortent par le bas.",
          rulesTitle: "Consignes de l'Exercice & Système de Points",
          aboutTitle: "À Propos du Simulateur Vertical Air-Track",
          rulesItems: [
            {
              num: "1",
              text: "Suivre la Cible Aérienne",
              highlight: "+100 PTS / +2s par élimination (60s max)",
              result: "Accompagnez l'arc parabolique de façon ininterrompue"
            },
            {
              num: "2",
              text: "Bonus d'Altitude",
              highlight: "Jusqu'à +75 PTS de bonus",
              result: "Détruisez les cibles à proximité de l'apex"
            },
            {
              num: "3",
              text: "Règle de Pénalité",
              highlight: "Reset de combo / -1s",
              result: "Quand une cible sort par le bas (option Timeout)"
            },
            {
              num: "4",
              text: "Montée en Niveau",
              highlight: "+1 Niveau tous les 1 400 PTS",
              result: "Plus de gravité et d'esquives, cibles plus petites, 2 cibles dès le niveau 5"
            }
          ]
        }}
      />
      <DrillGuide guide={verticalAirTrackGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
