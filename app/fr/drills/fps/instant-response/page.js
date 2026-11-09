import InstantResponseClient from '@/app/drills/fps/instant-response/InstantResponseClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Réactivité FPS : test de clic en millisecondes | SkillDrills",
  description: "Réactivité FPS au clic : cliquez dès que la cible centrale passe au vert et lisez votre temps de clic en ms. Délais aléatoires et feintes contre l'anticipation. Souris requise.",
  keywords: [
    "réactivité FPS",
    "réactivité au clic",
    "temps de clic en ms",
    "test de clic FPS",
    "réaction clic",
    "réflexes FPS",
    "tenue d'angle Valorant"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/instant-response",
    languages: getAlternateLanguages('/drills/fps/instant-response'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Réactivité FPS : test de clic en millisecondes | SkillDrills",
    description: "Réactivité FPS au clic : cliquez dès que la cible centrale passe au vert et lisez votre temps de clic en ms. Délais aléatoires et feintes contre l'anticipation. Souris requise.",
    url: "https://skilldrills.online/fr/drills/fps/instant-response",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Réactivité FPS : test de clic en millisecondes | SkillDrills",
    description: "Réactivité FPS au clic : cliquez dès que la cible centrale passe au vert et lisez votre temps de clic en ms. Délais aléatoires et feintes contre l'anticipation. Souris requise.",
  },
};

export default function InstantResponseFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînements FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Réactivité FPS au clic", "item": "https://skilldrills.online/fr/drills/fps/instant-response" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Réactivité FPS : test de clic en millisecondes",
    "url": "https://skilldrills.online/fr/drills/fps/instant-response",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Nécessite un navigateur prenant en charge HTML5 Canvas et JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Outil gratuit pour mesurer votre réactivité au clic en millisecondes pour les FPS. Cliquez au signal vert et ignorez les feintes."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
    "name": "Réactivité FPS au clic - SkillDrills",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Entraîneur psychomoteur de latence de clic et de réaction visuelle pour joueurs compétitifs de tir à la première personne.",
    "genre": "Entraînement FPS / Réflexes",
    "url": "https://skilldrills.online/fr/drills/fps/instant-response",
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
    "name": "Réactivité FPS au clic",
    "url": "https://skilldrills.online/fr/drills/fps/instant-response",
    "description": "Drill de réactivité au clic : une cible centrale s'allume après un délai aléatoire, avec de brèves feintes à partir des niveaux intermédiaires.",
    "gamePlatform": "Web Browser",
    "genre": ["Entraînement FPS", "Réactivité au clic"],
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
        "name": "Quel temps de clic viser dans ce drill ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous ne publions pas de moyennes de joueurs. Le tableau ci-dessous donne des repères d'entraînement SkillDrills tirés du barème : un bonus de vitesse sous 500 ms, complet à 150 ms ou moins. Comparez-vous surtout à vous-même, sur le même appareil."
        }
      },
      {
        "@type": "Question",
        "name": "Comment cliquer plus vite au premier tir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Annulez la course morte du bouton de souris en posant le doigt directement sur le commutateur, ancrez votre regard au point d'apparition et optez pour un écran à haute fréquence."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre réaction simple et réaction de choix ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La réaction simple (Donders Type A) demande un clic instantané dès le signal. La réaction de choix (loi de Hick) oblige à vérifier la cible pour éviter les feintes, ce qui ajoute un temps de décision."
        }
      },
      {
        "@type": "Question",
        "name": "La fréquence de l'écran influence-t-elle le temps de réponse ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Un écran 60 Hz rafraîchit l'image toutes les 16,67 ms contre 4,17 ms à 240 Hz. Cet écart de 12,5 ms permet de percevoir l'adversaire plus rapidement."
        }
      },
      {
        "@type": "Question",
        "name": "Le polling rate de la souris modifie-t-il la latence de clic ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "À 1000 Hz, la souris transmet son statut chaque milliseconde contre 8,0 ms à 125 Hz. Un réglage à 1000 Hz ou plus réduit le délai d’enregistrement du tir."
        }
      },
      {
        "@type": "Question",
        "name": "Comment ne pas tirer trop tôt sur des feintes en jeu ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Travaillez l'inhibition motrice volontaire (protocole No-Go). Habituez votre cerveau à valider la couleur ou la forme de la cible avant de déclencher la contraction du doigt."
        }
      },
      {
        "@type": "Question",
        "name": "La caféine améliore-t-elle les réflexes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous ne donnons pas de chiffre : l'effet varie selon les personnes, et un excès provoque des tremblements. Comparez vos sessions dans des conditions semblables."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi les réflexes baissent-ils en fin de soirée ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La fatigue et le manque de sommeil peuvent ralentir vos clics. Comparez les sessions fatiguées séparément de vos sessions habituelles."
        }
      },
      {
        "@type": "Question",
        "name": "Comment tenir une ligne efficacement sur les jeux de tir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ne collez pas le réticule au bord du mur. Laissez un espace correspondant à votre temps de clic moyen pour que l'adversaire traverse votre viseur au moment précis du tir."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps s'entraîner aux réflexes chaque jour ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Des sessions courtes de 10 à 15 minutes par jour suffisent. Les exercices de réflexe pur sollicitent intensément le système nerveux ; prolonger l'effort induit des tirs prématurés."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Mesurer et Travailler sa Réactivité au Clic en FPS",
    "description": "Guide méthodique pour évaluer la latence de tir et développer des réflexes réguliers sur PC.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Placer le Doigt sur le Commutateur de la Souris",
        "text": "Posez l'index au contact immédiat du bouton sans appuyer pour éliminer tout jeu mécanique inutile.",
        "url": "https://skilldrills.online/fr/drills/fps/instant-response#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Activer le Plein Écran et le Verrouillage du Pointeur",
        "text": "Lancez l'exercice en plein écran avec le verrouillage du pointeur pour limiter les distractions.",
        "url": "https://skilldrills.online/fr/drills/fps/instant-response#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Retenir le Tir Pendant les Délais Aléatoires",
        "text": "Fixez le centre sans céder à la tentation de cliquer prématurément lors des feintes visuelles.",
        "url": "https://skilldrills.online/fr/drills/fps/instant-response#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Cliquer Dès l'Apparition du Signal Vert",
        "text": "Pressez le commutateur à la milliseconde précise du changement de teinte pour enregistrer votre vitesse nette.",
        "url": "https://skilldrills.online/fr/drills/fps/instant-response#step-4"
      }
    ]
  };

  const copyFr = {
    h1Keyword: "Réactivité FPS au clic",
    h1Suffix: " — test de clic en millisecondes",
    subtitle: "Mesurez votre temps de clic en ms et entraînez la discipline de gâchette face aux feintes",
    statScore: "Score",
    statTime: "Temps Restant",
    statAccuracy: "Précision",
    statBestScore: "Meilleur Score",
    startTitle: "Réactivité FPS au clic",
    startSubtitle: "Souris + Pointer Lock • 45 s au départ • Niveaux infinis",
    getReady: "Prêt",
    pausedTitle: "En Pause",
    pausedSubtitle: "Cliquez pour reprendre (le verrouillage du pointeur sera réactivé)",
    stageCaption: "Cliquez dès que la cible centrale s'allume en vert. Retenez votre tir lors des feintes.",
    rulesTitle: "Règles d'Entraînement et Attribution des Points",
    rulesItems: [
      { num: "1", text: "Tir sur Flash", highlight: "+100 PTS (+2 s, max. 60 s)", result: "×Multiplicateur Combo" },
      { num: "2", text: "Bonus Vitesse", highlight: "Tir sous 500 ms", result: "Jusqu'à +150 PTS (≤150 ms)" },
      { num: "3", text: "Progression Niveau", highlight: "+1 Niveau / 1400 PTS", result: "Fenêtres Adaptatives" },
      { num: "4", text: "Tir Anticipé / Erreur", highlight: "Feintes et expirations incluses", result: "Reset Combo (-1 s)" }
    ],
    aboutTitle: "À propos du test de réactivité FPS au clic",
    aboutHeading: "Comment fonctionne la mesure des réflexes en jeu de tir ?"
  };

  const instantResponseGuide = {
    heading: "Réactivité FPS au clic : guide et repères",
    intro: [
      "Ce test de réactivité FPS au clic mesure l'intervalle entre le passage au vert de la cible centrale et votre clic. Il affiche votre temps de clic en ms et pénalise les clics anticipés, pour travailler la tenue d'angle dans CS2, Valorant et autres FPS.",
      "La focalisation spatiale joue un rôle majeur dans la réduction de ce délai. Selon les recherches de Michael Posner (1990), orienter son attention vers le point d'apparition peut accélérer la réponse par rapport à une surveillance non guidée. Sur Valorant ou CS2, c'est l'intérêt de garder le regard sur l'angle tenu.",
      "Le matériel et le logiciel introduisent une chaîne de latence incompressible. Cette application utilise l'horloge haute résolution performance.now() (Woods et al., 2015). Sur un système de compétition combinant un écran 240 Hz (4,17 ms par image) et une souris 1000 Hz (1,0 ms de rapport USB), les retards techniques diminuent, mais ils restent inclus dans chaque mesure.",
      "Mesure technique sur votre appareil : chaque clic est horodaté localement par votre navigateur sans transfert vers des serveurs externes. Les navigateurs limitent la résolution à ~1 ms pour des raisons de sécurité liées à Spectre et les écrans affichent l'image à des cadences fixes (16,7 ms à 60 Hz contre 4,1 ms à 240 Hz). Analysez votre progression en comparant vos sessions sur un même poste."
    ],
    benchmarks: {
      title: "Repères d'entraînement SkillDrills selon le temps de clic",
      headers: ["Repère SkillDrills", "Mesure dans le drill (ms)", "Points de base par touche (avant multiplicateurs combo et niveau)", "Remarque"],
      rows: [
        ["Repère A", "≤ 150 ms", "100 + bonus de vitesse 150", "Bonus complet. Si c'est fréquent, vérifiez que vous n'anticipez pas."],
        ["Repère B", "150 – 250 ms", "100 + env. 107–150", "L'essentiel du bonus reste acquis."],
        ["Repère C", "250 – 350 ms", "100 + env. 64–107", "Bonus réduit environ de moitié."],
        ["Repère D", "350 – 500 ms", "100 + 0–64", "Bonus proche de 0."],
        ["Repère E", "> 500 ms", "100 (sans bonus)", "Au niveau 1 la cible reste allumée env. 550 ms ; plus court ensuite, puis expiration."]
      ],
      note: "Ces repères d'entraînement SkillDrills découlent du barème du drill. Ce ne sont ni des normes de recherche ni des données d'utilisateurs ; les mesures incluent la latence de l'écran, de la souris et du navigateur."
    },
    techniques: {
      title: "Méthodes Clés pour Accélérer son Déclenchement de Tir",
      items: [
        {
          name: "Suppression de la Course Morte du Clic",
          desc: "Maintenez l'index posé directement sur le point de contact du commutateur. Éliminer la course vide raccourcit le geste de clic.",
          tips: "Ne crispez pas l'avant-bras ; gardez le poignet souple pour préserver la réactivité."
        },
        {
          name: "Ancrage Visuel Fovéal Ciblé",
          desc: "Portez votre regard exactement là où le rival doit surgir. La théorie de Posner (1990) confirme que l'anticipation spatiale accélère le traitement cérébral.",
          tips: "Évitez de regarder ailleurs sur l'écran pendant que vous tenez une ligne critique."
        },
        {
          name: "Réduction de la Latence Système",
          desc: "Activez les modes basse latence comme NVIDIA Reflex, réglez la souris sur 1000 Hz et désactivez la synchronisation verticale en jeu.",
          tips: "L'overdrive bien dosé sur l'écran atténue le flou de mouvement et clarifie l'apparition."
        },
        {
          name: "Régulation du Rythme Respiratoire",
          desc: "L'anxiété conduit à des tirs prématurés sur les feintes. Respirez posément pour maintenir votre activation nerveuse au niveau idéal de la loi de Yerkes-Dodson.",
          tips: "Si vous tirez avant le signal vert, marquez un court temps d'arrêt pour retrouver votre calme."
        }
      ]
    },
    scientificPrinciples: {
      title: "Fondements scientifiques de la réactivité au clic",
      items: [
        {
          name: "Méthode Soustractive de Donders",
          desc: "Francisus Donders a établi que les réactions simples constituent la réponse la plus rapide chez l'être humain en supprimant tout choix cognitif intermédiaire."
        },
        {
          name: "Effet Posner et Préparation de l'Attention",
          desc: "Savoir à l'avance où le stimulus apparaîtra pré-active les neurones visuels, accélérant le signal dirigé vers les muscles de la main."
        },
        {
          name: "Inhibition Motrice et Discipline de Tir",
          desc: "À haut niveau, retenir son tir lors d'une feinte est primordial. Les circuits préfrontaux entraînés bloquent le geste avant l'erreur."
        }
      ]
    },
    steps: [
      "Configurez votre sensibilité habituelle pour préserver une mémoire musculaire constante.",
      "Cliquez sur 'Démarrer le Drill' pour activer le plein écran et le Pointer Lock du navigateur.",
      "Fixez votre regard sur le réticule central, l'index légèrement en appui sur le commutateur de souris.",
      "Cliquez instantanément dès l'apparition du signal vert, en réprimant tout clic prématuré.",
      "Chaque touche ajoute 2 s (max. 60 s) ; chaque tir anticipé, tir manqué ou expiration retire 1 s. La partie démarre à 45 s et s'arrête à 0 ; examinez ensuite votre temps de clic moyen, votre précision, votre meilleur combo et votre niveau atteint."
    ],
    audience: "Joueurs de FPS compétitifs et tactiques (Valorant, CS2, Rainbow Six Siege, Apex Legends, Overwatch 2), compétiteurs d'esport et athlètes entraînant leur vivacité réflexe.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'donders1969', 'hick1952'),
    related: [
      { href: "/fr/drills/fps/angle-hold-trainer", label: "Placement du Réticule et Tenue d'Angle" },
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement Flick Shot" },
      { href: "/fr/drills/fps/180-degree-awareness", label: "Conscience Spatiale 180°" },
      { href: "/fr/drills/visual/reaction-speed/light-reaction", label: "Test de Temps de Réaction" },
      { href: "/fr/drills/reaction-speed/reflex-training-drill", label: "Entraînement aux Réflexes" }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <InstantResponseClient copy={copyFr} />
      <DrillGuide guide={instantResponseGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
