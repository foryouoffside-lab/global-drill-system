import StrafeTrackingClient from '@/app/drills/fps/strafe-tracking/StrafeTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Tracking aim : entraînement strafe FPS | SkillDrills",
  description: "Entraînement gratuit au tracking dans le navigateur : pratiquez la visée en mouvement, les strafes et les changements de direction.",
  keywords: [
    "entraînement tracking FPS",
    "tracking de strafe",
    "visée en mouvement FPS",
    "tracking réactif FPS",
    "comment améliorer tracking Apex",
    "suivi strafe ADAD",
    "contrôle de visée sur strafe",
    "entraînement visée réactive",
    "aim trainer tracking gratuit",
    "améliorer tracking Overwatch 2",
    "suivi de cible en mouvement",
    "exercice de tracking FPS"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/strafe-tracking",
    languages: getAlternateLanguages('/drills/fps/strafe-tracking'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Tracking aim : entraînement strafe FPS | SkillDrills",
    description: "Entraînement gratuit au tracking dans le navigateur : pratiquez la visée en mouvement, les strafes et les changements de direction.",
    url: "https://skilldrills.online/fr/drills/fps/strafe-tracking",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Tracking aim : entraînement strafe FPS | SkillDrills",
    description: "Entraînement gratuit au tracking dans le navigateur : pratiquez la visée en mouvement, les strafes et les changements de direction.",
  },
};

export default function StrafeTrackingFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînement FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Strafe Tracking", "item": "https://skilldrills.online/fr/drills/fps/strafe-tracking" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Entraîneur de Strafe Tracking FPS",
    "url": "https://skilldrills.online/fr/drills/fps/strafe-tracking",
    "description": "Entraîneur en ligne de strafe tracking réactif, lecture des changements de trajectoire et poursuite oculaire fluide pour shooters compétitifs.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Nécessite le support HTML5 Canvas et Pointer Lock API",
    "dateModified": "2026-09-20"
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "Entraîneur de Strafe Tracking FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-09-20",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Entraîneur en ligne de strafe tracking réactif, lecture des changements de trajectoire et poursuite oculaire fluide pour shooters compétitifs.",
    "genre": "Entraînement FPS / Tracking Réactif",
    "url": "https://skilldrills.online/fr/drills/fps/strafe-tracking",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Entraîneur de Strafe Tracking FPS",
    "url": "https://skilldrills.online/fr/drills/fps/strafe-tracking",
    "description": "Entraîneur en ligne de strafe tracking réactif, lecture des changements de trajectoire et poursuite oculaire fluide pour shooters compétitifs.",
    "dateModified": "2026-09-20",
    "gamePlatform": "Web Browser",
    "genre": ["Entraînement FPS", "Aim Trainer", "Tracking Réactif"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-09-20",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que le strafe tracking dans les jeux FPS compétitifs ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le strafe tracking est l'aptitude neuromusculaire à maintenir le réticule verrouillé sur un adversaire se déplaçant latéralement avec des esquives erratiques (ADAD). Il associe la régulation de vitesse de poursuite oculaire fluide à une compensation motrice instantanée lors des inversions de sens."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre tracking réactif et poursuite fluide prévisible ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La poursuite fluide prévisible opère quand la cible conserve une trajectoire et une vitesse constantes, permettant au cerveau d'anticiper le trajet. Le tracking réactif exige une lecture immédiate des décélérations et des demi-tours sans deviner à l'aveugle, s'appuyant sur l'erreur de vitesse rétinienne continue (Krauzlis, 2004)."
        }
      },
      {
        "@type": "Question",
        "name": "Comment la tension musculaire du bras altère-t-elle la précision en duel strafe ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une tension isométrique excessive dans l'avant-bras et le poignet active les muscles antagonistes, engendrant des micro-tremblements et retardant le freinage mécanique de la souris. Une prise plus détendue aide en général à inverser le mouvement plus proprement ; testez ce qui vous convient."
        }
      },
      {
        "@type": "Question",
        "name": "Dois-je regarder mon viseur ou le modèle de l'ennemi pendant le tracking ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fixez votre fovéa centrale directement sur le torse ou centre de masse de la cible adverse. Land & McLeod (2000) et Krauzlis (2004) décrivent le rôle du déplacement rétinien de la cible dans la poursuite ; la vision périphérique et la proprioception aident ensuite à aligner le viseur."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi le time-to-kill (TTK) rend-il le strafe tracking si capital ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dans les titres à TTK élevé comme Apex Legends, Overwatch 2 et The Finals, les cibles encaissent de multiples tirs tout en esquivant activement. Le pourcentage de temps de visée ininterrompu sur la cible (uptime) devient alors le facteur prépondérant de l'issue du duel."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle sensibilité de souris est idéale pour le strafe tracking réactif ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il n'existe pas de valeur universelle. Reprenez la sensibilité de votre jeu : le plus important est de garder la même pour comparer vos séances, car une valeur trop haute provoque des dépassements et une valeur trop basse ralentit les inversions."
        }
      },
      {
        "@type": "Question",
        "name": "En quoi le Raw Input sans accélération optimise-t-il la lecture des strafes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le raw input transmet le déplacement de la souris sans accélération logicielle, ce qui rend le rapport entre geste et mouvement du curseur plus régulier. C'est utile pour comparer vos séances et pour reproduire la sensation de votre jeu."
        }
      },
      {
        "@type": "Question",
        "name": "Le strafe tracking dans un navigateur se transfère-t-il efficacement en jeu ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En partie. L'exercice utilise le verrouillage du pointeur et les mouvements bruts de la souris, ce qui se rapproche d'un jeu de tir. Il ne reproduit ni le recul, ni le champ de vision, ni le réseau : vérifiez le transfert dans votre propre jeu."
        }
      },
      {
        "@type": "Question",
        "name": "Comment réagir si je perds le contact avec la cible sur un strafe prolongé ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Effectuez une micro-saccade de rattrapage rapide et contrôlée vers le centre de la cible, puis relâchez immédiatement l'effort pour reprendre la poursuite fluide continue, conformément au modèle de Rashbass (1961)."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps s'entraîner quotidiennement au tracking de visée ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Des séances de 10 à 20 minutes avec de courtes pauses suffisent pour suivre votre progression sans fatiguer le bras ni la concentration. Arrêtez-vous en cas de douleur au poignet."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Maîtriser le Strafe Tracking Réactif",
    "description": "Protocole étape par étape pour étalonner sa sensibilité, éliminer l'overshoot et perfectionner le suivi de cibles mobiles.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Étalonner sa Sensibilité en Jeu",
        "text": "Configurez votre sensibilité et vos DPI dans les réglages de session pour reproduire un rapport 1:1 parfait et verrouiller le curseur.",
        "url": "https://skilldrills.online/fr/drills/fps/strafe-tracking#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Ancrer le Regard sur le Modèle Cible",
        "text": "Fixez votre fovéa centrale directement sur le corps de l'adversaire plutôt que sur le réticule de visée.",
        "url": "https://skilldrills.online/fr/drills/fps/strafe-tracking#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Synchroniser la Vitesse de Glisse Latérale",
        "text": "Guidez la souris avec une pression décontractée sur l'avant-bras, en maintenant un contact continu pour faire monter le combo.",
        "url": "https://skilldrills.online/fr/drills/fps/strafe-tracking#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Réagir aux Inversions sans Anticiper",
        "text": "Rejetez les suppositions hasardeuses ; attendez le signal visuel du changement de sens avant d'inverser la course de la souris.",
        "url": "https://skilldrills.online/fr/drills/fps/strafe-tracking#step-4"
      }
    ]
  };

  const strafeTrackingGuide = {
    heading: "Guide du Tracking et de la Visée Réactive en Mouvement",
    intro: [
      "Cet entraînement de tracking aim vous fait garder le réticule sur une cible qui part en strafe latéral et change de direction. Il mesure le temps passé sur la cible, la précision et le combo. Il fait travailler le suivi réactif, sans prétendre prédire votre niveau en jeu.",
      "Les fondations neurophysiologiques de la poursuite visuelle du mouvement ont été éclairées par Richard J. Krauzlis (2004), montrant comment le cortex coordonne les mouvements oculaires de poursuite fluide via des circuits réciproques unissant le cortex visuel de mouvement (MT/V5), l'aire temporale supérieure médiane (MST) et le champ oculaire frontal (FEF). Dès qu'une cible accélère, ces structures évaluent en temps réel l'erreur de vitesse rétinienne afin d'ajuster les actions motrices oculaires et manuelles en symbiose.",
      "Lors d'une découverte majeure en psychophysique visuelle, Cyril Rashbass (1961) a prouvé que la poursuite fluide et les mouvements saccadiques dépendent de sous-systèmes physiologiques autonomes : les saccades répondent à l'écart de position, alors que la poursuite fluide réagit exclusivement à la vitesse rétinienne. En combat, les joueurs tentant de deviner les inversions déclenchent des saccades réflexes erronées, entraînant dépassements de cible (overshoot) et saccades parasitaires.",
      "En combinant le modèle de l'attention orientée de Michael I. Posner (1990), les paradigmes de repérage spatial de C. Shawn Green & Daphne Bavelier (2003) et la chronométrie numérique à faible latence (Woods et al., 2015), cet exercice conditionne le joueur à réprimer les anticipations hâtives, à relâcher la tension musculaire du bras et à développer une poursuite fluide strictement réactive sur des vecteurs dynamiques.",
      "Mesure de la performance : chaque événement est horodaté par l'horloge haute résolution performance.now() du navigateur, s'exécutant localement sur votre terminal sans transmission externe. Contraintes techniques : les minuteurs des navigateurs sont volontairement arrondis à environ 1 ms par mesure de sécurité, et l'affichage quantifie les images selon sa fréquence de rafraîchissement — environ 16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz (Woods et al., 2015). Le taux de rafraîchissement de la souris ajoute 8 ms à 125 Hz contre 1 ms à 1000 Hz. Considérez les écarts de moins de 5 ms comme du bruit de mesure et évaluez votre progression sur un équipement identique."
    ],
    benchmarks: {
      title: "Barèmes Scientifiques de Strafe Tracking et Latence d'Inversion",
      headers: ["Niveau de Performance", "% Temps sur Cible", "Latence d'Inversion", "Impact Compétitif en Match"],
      rows: [
        ["Palier 1 (Très régulier)", "85% – 95%+", "<180 ms", "Suivi très régulier ; adaptation rapide de la vitesse sans dépassement lors des inversions"],
        ["Palier 2 (Régulier)", "72% – 85%", "180 – 220 ms", "Bon temps sur cible ; reprise rapide lors des virages"],
        ["Palier 3 (Correct)", "58% – 72%", "220 – 270 ms", "Tracking assez constant ; perte momentanée de contact face aux inversions imprévues"],
        ["Palier 4 (En progression)", "42% – 58%", "270 – 330 ms", "Anticipation excessive récurrente ; le viseur dépasse la cible avant de se corriger"],
        ["Palier 5 (Débutant)", "<42%", ">330 ms", "Corrections heurtées ; difficulté à soutenir la vitesse latérale ; le réticule reste en retard"]
      ],
      note: "Repères éditoriaux propres à cet exercice, sans lien avec un rang en jeu ni norme de population. Le pourcentage sur cible correspond au temps de contact effectif divisé par la durée active du drill ; la latence d'inversion mesure le délai entre le changement de trajectoire de la cible et la réacquisition du réticule avec raw input (Woods et al., 2015)."
    },
    techniques: {
      title: "Protocoles Fondés sur la Science pour le Strafe Tracking Réactif",
      items: [
        {
          name: "Lecture Réactive plutôt que Prédiction Prématurée",
          desc: "Bannissez l'impulsion de deviner quand l'adversaire va changer de direction. Chercher à anticiper face à des rivaux agiles provoque d'importants dépassements lorsqu'ils rompent leur cadence. Cultivez une attitude strictement réactive : laissez le cortex visuel valider l'inversion réelle avant de commander le geste moteur.",
          tips: "Fixez la taille ou le centre de masse adverse ; la décélération du torse se perçoit avant la réorientation des appuis."
        },
        {
          name: "Découplage de la Tension du Poignet et de l'Avant-Bras",
          desc: "Une tension isométrique soutenue bride la fluidité et prolonge le délai d'arrêt lors des revirements. Lorsque les muscles sont contractés, amorcer l'inversion exige d'inhiber le muscle antagoniste avant d'activer l'agoniste, ce qui peut ajouter du retard au geste.",
          tips: "Gardez une prise de souris légère pour pivoter sans résistance."
        },
        {
          name: "Ancrage Fovéal sur la Cible",
          desc: "Verrouillez votre regard sur le mobile en mouvement et non sur votre propre réticule. Land & McLeod (2000) et Krauzlis (2004) décrivent le rôle de la dérive rétinienne de la cible dans la poursuite. Surveiller le viseur peut vous rendre plus hésitant.",
          tips: "Laissez la proprioception et la vision périphérique ajuster le pointeur pendant que votre fovéa mesure la vitesse ennemie."
        },
        {
          name: "Étalonnage des Saccades de Rattrapage",
          desc: "Si la cible s'échappe lors d'un strafe prolongé, exécutez une micro-saccade franche et recentrée sur le blanc, puis relâchez immédiatement l'effort pour reprendre la poursuite fluide. Cyril Rashbass (1961) a documenté la bascule naturelle entre saccades et poursuite en fonction de l'erreur spatiale.",
          tips: "Recollez vivement sur l'avant du modèle et réadaptez votre allure aussitôt."
        }
      ]
    },
    steps: [
      "Indiquez votre jeu de référence, votre sensibilité et vos DPI dans les réglages de session pour assurer une parité 1:1 et verrouiller le curseur.",
      "Concentrez votre regard sur la cible lumineuse dès qu'elle entame ses déplacements latéraux imprévisibles.",
      "Accompagnez la cible par un balayage fluide de l'avant-bras, en synchronisant la vitesse horizontale sans marquer d'arrêt.",
      "Restez au contact de la cible pour faire grimper le multiplicateur de combo jusqu'à 3,0x et franchir des paliers tous les 1400 points.",
      "Consultez votre taux de précision et le temps hors cible sur le bilan final pour cibler vos points d'amélioration dans les virages."
    ],
    audience: "Joueurs de jeux de tir qui veulent travailler le suivi de cibles en strafe, la réaction aux changements de direction et la régularité du geste.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'rashbass1961', 'land2000'),
    related: [
      { href: "/fr/drills/fps/pro-smooth-pursuit", label: "Entraînement Smooth Pursuit Pro" },
      { href: "/fr/drills/fps/anti-strafe-jitter-duel", label: "Duel Anti-Strafe Jitter" },
      { href: "/fr/drills/fps/anti-zigzag-movement-trainer", label: "Entraînement de Visée Anti-Zigzag" },
      { href: "/fr/drills/fps/micro-correction-precision", label: "Entraînement de Micro-Correction" },
      { href: "/fr/drills/fps/recoil-control", label: "Entraînement Contrôle du Recul" }
    ]
  };

  const copyFr = {
    h1Prefix: null,
    h1Keyword: "Tracking aim",
    h1Suffix: " : entraînement strafe FPS",
    caption: "Le strafe tracking consiste à maintenir son viseur verrouillé sur un adversaire aux mouvements imprévisibles. La poursuite oculaire humaine suit précisément jusqu'à environ 30°/s, et chaque virage brusque requiert une saccade de correction 100 à 130 ms après l'inversion (Rashbass, 1961 ; Krauzlis, 2004). Développez votre vitesse de synchronisation et vos réflexes de visée.",
    statStatus: "Statut",
    statusTracking: "SUIVI EN COURS",
    statusComplete: "TERMINÉ",
    statusStandby: "EN ATTENTE",
    statTime: "Temps Restant",
    statAccuracy: "Précision de Tracking",
    statBest: "Meilleur Score",
    statScore: "Score",
    pausedTitle: "Partie en Pause",
    pausedPrompt: "Cliquez pour reprendre — le verrouillage du curseur sera réactivé.",
    startTitle: "Tracking aim",
    startSubtitle: "Entrée Matérielle Brute · Progression Dynamique par Niveaux",
    startButtonText: "Lancer le Drill",
    getReady: "PRÉPAREZ-VOUS",
    statLockStreak: "Plus Longue Série",
    statPeakLevel: "Niveau Record",
    statOffTarget: "Temps Hors Cible",
    playAgainText: "Rejouer le Drill",
    shareText: "Partager le Score",
    exitText: "Retour au Menu",
    bottomCaption: "Maintenez votre réticule sur la cible en mouvement pendant qu'elle alterne des counter-strafes vifs et des accélérations latérales.",
    rulesTitle: "Consignes de l'Exercice et Paramètres",
    rulesItems: [
      { num: "1", text: "Alignement de Visée", highlight: "+50 PTS (+0.4s/s)", result: "×Mult de Combo" },
      { num: "2", text: "Combo Continu", highlight: "Jusqu'à 3.0×", result: "Multiplicateur Max" },
      { num: "3", text: "Progression de Niveau", highlight: "+1 Niveau / 1400 PTS", result: "Strafe Adaptatif" },
      { num: "4", text: "Pénalité Hors Cible", highlight: "1.0s Hors Cible", result: "Réinitialise Combo (-0.6s)" }
    ],
    aboutTitle: "À propos du Tracking et de la Visée en Mouvement",
    whatIsTitle: "Qu'est-ce que l'Entraînement au Strafe Tracking ?",
    whatIsLead: "Le strafe tracking est l'art de garder son viseur sur un opposant qui change continuellement de direction. La poursuite fluide humaine fonctionne de façon optimale jusqu'à 30°/s, chaque inversion abrupte entraînant une saccade de correction 100 à 130 ms plus tard (Rashbass, 1961 ; Krauzlis, 2004).",
    aboutIntro: [
      "Dans les combats rapprochés à TTK long, les opposants exploitent les strafes en ADAD et les variations de vitesse pour esquiver vos balles. Se fier à l'anticipation conduit presque toujours à perdre le contact continu.",
      "Cet exercice entraîne vos réflexes visuomoteurs à répondre uniquement à l'accélération véritable de la cible, bannissant la tension musculaire et maximisant la létalité de votre tir."
    ],
    aboutCards: [
      {
        title: "Poursuite Oculaire Fluide",
        description: "Stimule les aires corticales spécialisées (MT/MST) afin d'adapter fidèlement la vitesse manuelle au mouvement affiché."
      },
      {
        title: "Diminution de la Latence de Virage",
        description: "Apprend à freiner et à changer d'axe instantanément sans dépassement ni blocage moteur."
      },
      {
        title: "Efficacité sur TTK Long",
        description: "Travaille la continuité de la visée sur une cible qui change de direction, utile dans les duels où l'adversaire esquive longtemps."
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
      <StrafeTrackingClient copy={copyFr} />
      <DrillGuide guide={strafeTrackingGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
