import AngleHoldClient from '@/app/drills/fps/angle-hold-trainer/AngleHoldClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Placement du Viseur : Tenir un Angle en FPS | SkillDrills",
  description: "Placement du viseur gratuit : tenez un angle à hauteur de tête et cliquez quand la cible sort du mur. Écart au mur et réaction au peek, pour Valorant et CS2.",
  keywords: [
    "placement du viseur",
    "placement du viseur entraînement",
    "crosshair placement",
    "tenir un angle",
    "comment tenir une ligne valorant",
    "tenir un angle cs2",
    "peeker advantage comment contrer",
    "entraînement pre aim fps",
    "distance du viseur par rapport au mur",
    "viseur à hauteur de tête",
    "entraînement réflexe pour les angles"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/angle-hold-trainer",
    languages: getAlternateLanguages('/drills/fps/angle-hold-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Placement du Viseur : Tenir un Angle en FPS | SkillDrills",
    description: "Placement du viseur gratuit : tenez un angle à hauteur de tête et cliquez quand la cible sort du mur. Écart au mur et réaction au peek, pour Valorant et CS2.",
    url: "https://skilldrills.online/fr/drills/fps/angle-hold-trainer",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Placement du Viseur : Tenir un Angle en FPS | SkillDrills",
    description: "Placement du viseur gratuit : tenez un angle à hauteur de tête et cliquez quand la cible sort du mur. Écart au mur et réaction au peek, pour Valorant et CS2.",
  },
};

export default function FrenchAngleHoldPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Drills de FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Placement du viseur - tenir un angle", "item": "https://skilldrills.online/fr/drills/fps/angle-hold-trainer" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Placement du viseur - tenir un angle",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Entraîneur en ligne de placement de viseur, de tenue de ligne défensive et de pré-visée pour les jeux de tir tactiques.",
    "genre": "Entraînement FPS / Placement du Viseur",
    "url": "https://skilldrills.online/fr/drills/fps/angle-hold-trainer",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Placement du viseur - tenir un angle",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Simulateur interactif de tenue de ligne et de discipline de tir pour contrer le peeker's advantage sur CS2 et Valorant.",
    "genre": "Entraînement FPS / Placement du Viseur",
    "url": "https://skilldrills.online/fr/drills/fps/angle-hold-trainer",
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
    "name": "Placement du viseur - tenir un angle",
    "url": "https://skilldrills.online/fr/drills/fps/angle-hold-trainer",
    "description": "Simulateur interactif de réflexes et de placement de réticule aux angles pour les jeux de tir compétitifs.",
    "gamePlatform": "Web Browser",
    "genre": ["Entraînement FPS", "Aim Trainer"],
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
        "name": "Qu'est-ce que le placement du viseur (crosshair placement) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est la technique tactique de base consistant à maintenir le réticule constamment à hauteur de tête là où l'ennemi va apparaître, évitant les flicks réactifs d'urgence."
        }
      },
      {
        "@type": "Question",
        "name": "Comment se déroule ce drill de placement du viseur ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Au départ, le plein écran et le verrouillage du pointeur s'activent et le chrono démarre à 45 secondes. Les cibles sortent du bord gauche ou droit du mur à une hauteur aléatoire puis se retirent. Un tir réussi rapporte 100 points multipliés par le combo et le niveau, et ajoute 2 secondes (60 maximum). Tous les 1400 points, le niveau monte : les peeks durent moins longtemps et les cibles rétrécissent, et des faux peeks orange apparaissent aux niveaux élevés. Un tir raté, un tir sans cible ou un tir sur un faux peek remet le combo à zéro et coûte 1 seconde. La partie s'arrête à 0 seconde."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'avantage du peeker (peeker's advantage) en FPS tactique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est le délai de transmission réseau client-serveur. L'attaquant qui décale envoie ses données avant que le défenseur immobile ne les reçoive, offrant un avantage dont la durée dépend du ping, du tickrate et de l'interpolation."
        }
      },
      {
        "@type": "Question",
        "name": "Comment les joueurs de CS2 et Valorant tiennent-ils les lignes et les angles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En décalant légèrement leur viseur du coin du mur. Cet espace absorbe le temps de réaction visuel et la vitesse de course ennemie pour cliquer dès qu'il traverse le réticule."
        }
      },
      {
        "@type": "Question",
        "name": "À quelle distance du mur le viseur doit-il être placé lors d'une tenue d'angle ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cela dépend de la vitesse adverse : contre les décalages larges en pleine course, tenez plus large. Contre les jiggle peeks serrés ou les approches lentes, tenez plus près du coin."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi certains joueurs tirent-ils trop tôt (pre-fire involontaire) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "À cause de la tension anticipatoire et d'un échec de discrimination cognitive Go/No-Go face à des feintes. Dans ce drill, des faux peeks orange très courts apparaissent aux niveaux élevés ; tirer dessus compte comme un tir précipité. Vous apprenez ainsi à déclencher uniquement sur cible confirmée."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre tenir une ligne et faire du jiggle peek ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tenir une ligne est une posture défensive statique misant sur le temps de réaction pur. Le jiggle peek est un mouvement actif en pas latéraux pour prendre l'information sans s'exposer."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la formule réseau expliquant le peeker's advantage ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La formule est : T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp. Le délai découle du ping cumulé des deux joueurs et du tampon d'interpolation du serveur."
        }
      },
      {
        "@type": "Question",
        "name": "La fréquence de rafraîchissement de l'écran influence-t-elle la tenue de ligne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Un écran à 240 Hz rafraîchit l'affichage toutes les 4,17 ms contre 16,67 ms à 60 Hz, ce qui affiche en moyenne plus tôt la première image de l'adversaire ; le gain ne dépasse pas l'écart entre les intervalles d'image."
        }
      },
      {
        "@type": "Question",
        "name": "À quelle fréquence faut-il entraîner son placement de viseur ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il n'y a pas de règle fixe. Une session de 10 à 15 minutes avant de jouer, combinée à du deathmatch, est un format raisonnable. Comparez votre temps de réaction moyen et votre précision sur le même matériel d'un jour à l'autre."
        }
      },
      {
        "@type": "Question",
        "name": "Comment ce simulateur capture-t-il le mouvement de la souris ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le drill utilise l'API HTML5 Pointer Lock pour lire les déplacements relatifs de la souris et horodate les clics avec performance.now(). Aucune entrée non accélérée n'est demandée, donc les réglages de pointeur du système peuvent encore s'appliquer. Une souris est nécessaire ; le drill ne démarre pas sur un appareil uniquement tactile."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Pratiquer le Placement du Viseur et la Tenue de Ligne",
    "description": "Étapes détaillées pour ajuster la hauteur du réticule, l'écartement au mur et contrer le peeker's advantage.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrez l'écartement du viseur par rapport à l'angle du mur",
        "text": "Placez le réticule légèrement décollé de l'arête du mur pour laisser la marge imposée par votre temps de réaction.",
        "url": "https://skilldrills.online/fr/drills/fps/angle-hold-trainer#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Verrouillez le viseur exactement à hauteur de tête",
        "text": "Ajustez la hauteur sur des repères visuels du décor pour que la tête adverse apparaisse directement sous le réticule.",
        "url": "https://skilldrills.online/fr/drills/fps/angle-hold-trainer#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Anticipez la vitesse de course de l'adversaire",
        "text": "Élargissez l'écartement contre les décalages en pleine course et resserrez-le face aux approches prudentes.",
        "url": "https://skilldrills.online/fr/drills/fps/angle-hold-trainer#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Tirez dès l'entrée de la cible dans le réticule",
        "text": "Faites confiance à votre pré-visée et cliquez instantanément lors du passage sans tenter de microflick réactif.",
        "url": "https://skilldrills.online/fr/drills/fps/angle-hold-trainer#step-4"
      }
    ]
  };

  const angleHoldGuideFr = {
    heading: "Placement du viseur : tenir un angle en FPS",
    intro: [
      "Ce drill de placement du viseur travaille le réticule à hauteur de tête avant que l'adversaire sorte de l'angle. Les cibles apparaissent au bord gauche ou droit d'un mur et vous cliquez dès qu'elles entrent dans le réticule : écart au mur, tenue d'angle et réaction au peek, pour les joueurs de Valorant et CS2.",
      "Sur les réseaux multijoueurs le délai d'acheminement des paquets engendre le peeker's advantage : T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp. Pour compenser ce déficit, le défenseur doit écarter son viseur de l'arête du mur selon D_offset = v_peeker × T_reaction, permettant à l'attaquant d'entrer dans le réticule pile au moment où le tir se déclenche.",
      "La précision motrice obéit à la loi de Fitts (Fitts, 1954) : chaque microcorrection de dernière seconde coûte du temps. Angle Hold Pro horodate les clics avec performance.now() ; la fréquence d'écran et le polling de la souris de votre machine influencent toujours les valeurs, et les faux peeks ajoutent une décision Go/No-Go (Hick, 1952; Woods et al., 2015).",
      "Évaluation des performances : chaque tir et chaque réaction sont mesurés en local sur votre appareil. Maintenez les mêmes réglages de sensibilité et d'espace de bureau d'une session à l'autre pour forger une mémoire kinesthésique durable."
    ],
    benchmarks: {
      title: "Repères de réaction et de réseau pour tenir un angle",
      headers: ["Phase / Métrique", "Repère (ms)", "Facteur", "Lecture"],
      rows: [
        ["Réaction visuelle simple", "env. 200 – 250 ms (plage de la recherche)", "Voir le stimulus puis cliquer", "Réaction simple à un stimulus attendu (Woods et al., 2015)"],
        ["Réaction de discrimination (faux peek / jiggle)", "quelques dizaines de ms de plus", "Décision Go/No-Go", "Plus d'alternatives, réaction plus longue (Hick, 1952)"],
        ["Peeker's advantage", "variable selon serveur et ping", "RTT client-serveur + tampon d'interpolation", "Avance réseau de l'attaquant en mouvement"],
        ["Écart au mur stable", "référence", "Réticule à hauteur de tête devant l'arête avant le peek", "Comparer ses propres valeurs sur le même appareil"]
      ],
      note: "Valeurs indicatives tirées des plages générales de la recherche sur le temps de réaction (Donders, 1868; Hick, 1952; Woods et al., 2015) ; ce ne sont ni des statistiques d'utilisateurs ni des rangs. Les latences effectives dépendent des hertz de l'écran, du polling de la souris et de la vigilance."
    },
    techniques: {
      title: "Géométrie de Placement et Règles de Tenue d'Angle",
      items: [
        {
          name: "Calibration de l'Écartement par Rapport au Coin",
          desc: "Ne collez pas le viseur directement contre l'arête du mur. Laissez un espacement horizontal proportionnel à votre temps de réaction : plus large face aux courses rapides et plus resserré face aux décalages lents.",
          tips: "Si les adversaires dépassent souvent votre viseur avant le tir, élargissez un peu l'écartement ; si vous tirez trop tôt à côté, resserrez-le."
        },
        {
          name: "Discipline Horizontale à Hauteur de Tête",
          desc: "Alignez la hauteur de votre réticule à l'aide de repères de décor comme les caisses, chambranles de portes ou bandes de peinture correspondant à la tête aux distances clés.",
          tips: "Évitez le relâchement musculaire qui fait dériver le viseur vers le bas lors des phases passives."
        },
        {
          name: "La Règle 'Cliquez, N'Ajustez Pas'",
          desc: "En tenant une ligne pré-visée calibrée, engagez-vous à cliquer dès que l'ennemi franchit le réticule, sans chercher à faire un microflick réactif, qui ajoute un mouvement de correction et donc du retard.",
          tips: "Ayez confiance en votre placement et fixez votre regard légèrement en avant du réticule."
        },
        {
          name: "Positionnement en Off-Angle",
          desc: "Les angles standards s'exposent aux tirs de précaution (prefires). Décalez-vous d'un demi-pas vers une position inattendue pour désynchroniser la pré-visée ennemie tout en préservant votre ligne.",
          tips: "Assurez-vous d'avoir une ligne de repli immédiate avant de prendre un off-angle agressif."
        }
      ]
    },
    steps: [
      "Cliquez sur Démarrer pour passer en plein écran et verrouiller le curseur.",
      "Placez votre réticule à hauteur de tête face à l'angle en réglant l'écartement avec le mur.",
      "Gardez la main stable avec une tension musculaire modérée pour éviter les tremblements d'anticipation.",
      "Dès que la cible franchit le plan du réticule, effectuez un unique clic instantané.",
      "Suivez votre temps de réaction moyen (ms) et votre discipline de tir au fil des manches."
    ],
    audience: "Joueurs de CS2, Valorant et Rainbow Six Siege désirant perfectionner leur placement de viseur, leur discipline de tir et leurs réflexes de défense aux coins.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'woodworth1899'),
    related: [
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement au Flick Shot" },
      { href: "/fr/drills/fps/180-degree-awareness", label: "Entraînement Demi-Tour 180°" },
      { href: "/fr/drills/fps/micro-correction-precision", label: "Entraînement aux Micro-Corrections" },
      { href: "/fr/drills/visual/reaction-speed/light-reaction", label: "Test de Temps de Réaction" }
    ]
  };

  const copyFr = {
    h1Prefix: null,
    bottomCaption: "Gardez votre viseur sur l’angle et cliquez dès que la cible apparaît.",
    h1Keyword: "Placement du viseur",
    h1Suffix: " — tenir un angle en FPS",
    aboutIntro: [
      "Ce drill de placement du viseur (crosshair placement) vous apprend à tenir un angle : réticule à hauteur de tête près du bord d'un mur, clic dès qu'une cible sort. Il s'adresse aux joueurs de Valorant et CS2 qui veulent tenir les angles avec discipline, et affiche à la fin le temps de réaction moyen, la précision, le combo et le niveau.",
      "Chaque peek sort à gauche ou à droite à une hauteur aléatoire, impossible donc d'apprendre un rythme. Plus le niveau monte, plus les peeks sont courts et les cibles petites, et des faux peeks orange punissent les clics précipités. Le drill ne reproduit ni le netcode ni le classement d'un vrai jeu : utilisez-le comme complément d'entraînement."
    ],
    subtitle: "Entraînement à la Tenue d'Angle et Défense contre le Peeker's Advantage",
    rulesItems: [
      { num: "1", text: "Tir Réussi", highlight: "+100 PTS (+2s, max 60s)", result: "×Combo Mult" },
      { num: "2", text: "Apparitions d'Angle", highlight: "Bord gauche/droit du mur", result: "Plus court, plus petit" },
      { num: "3", text: "Progression de Niveau", highlight: "+1 Niveau / 1400 PTS", result: "Échelle Adaptative" },
      { num: "4", text: "Tir Raté / Précipité / Faux Peek", highlight: "Pénalité", result: "Reset Combo (-1s)" }
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "Recommandé pour", text: "Les défenseurs de site sur Valorant, les anchors sur CS2, les joueurs de R6 Siege et quiconque veut tenir une ligne avec rigueur." },
      { iconBg: "bg-orange-600", title: "Compétences Développées", text: "Calibration de l'écartement au mur, discipline de tir contre les jiggle peeks, temps de réaction et régularité à hauteur de tête." },
      { iconBg: "bg-purple-600", title: "Détection des Fausses Décalages", text: "Les niveaux supérieurs ajoutent de courts faux peeks orange. Entraînez votre décision Go/No-Go pour ne tirer que sur décalage complet." }
    ],
    aboutSections: [
      {
        title: "Écartement Idéal par Rapport au Mur (Géométrie d'Offset)",
        paragraphs: [
          "L'erreur la plus fréquente en tenant une ligne est de coller son viseur au ras de l'arête du mur. Comme il faut un temps de réaction entre voir et cliquer, un ennemi décalant en course dépasse le viseur avant que le doigt ne puisse cliquer.",
          "En laissant un écart horizontal (D_offset = v_peeker × T_reaction), l'assaillant se jette exactement dans la trajectoire de votre balle sans nécessiter de micro-ajustement d'urgence."
        ]
      },
      {
        title: "Compenser le Peeker's Advantage",
        paragraphs: [
          "En raison de la latence réseau (RTT), l'attaquant en mouvement perçoit le défenseur immobile un peu plus tôt, selon le ping et le serveur. Ce déficit peut être atténué en élargissant l'écart du viseur pour compenser l'accélération transversale adverse."
        ]
      },
      {
        title: "Méthode de Mesure et Précision des Capteurs",
        paragraphs: [
          "Angle Hold Pro s'appuie sur l'API HTML5 Pointer Lock et performance.now() pour chronométrer les temps de clic à la milliseconde près."
        ]
      }
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

      <AngleHoldClient copy={copyFr} />

      <RelatedDrills />

      <DrillGuide guide={angleHoldGuideFr} />
      <DrillFooter />
    </>
  );
}
