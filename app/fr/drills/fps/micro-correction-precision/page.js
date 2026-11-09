import MicroCorrectionClient from '@/app/drills/fps/micro-correction-precision/MicroCorrectionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Micro-ajustements de visée : précision headshot | SkillDrills",
  description: "Micro-ajustements de visée : touchez la cible ancre, puis la petite micro-cible qui apparaît à côté. Plus le tir est centré, plus il rapporte. Valorant et CS2.",
  keywords: [
    "micro-ajustements de visée",
    "micro flick",
    "micro-correction de visée",
    "micro flicks cs2",
    "précision micro ajustement souris",
    "entraînement headshot fps",
    "décélération de visée fps",
    "contrôle micro mouvements souris",
    "freinage de visée",
    "précision headshot FPS",
    "micro-ajustements Valorant"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/micro-correction-precision",
    languages: getAlternateLanguages('/drills/fps/micro-correction-precision'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Micro-ajustements de visée : précision headshot | SkillDrills",
    description: "Micro-ajustements de visée : touchez la cible ancre, puis la petite micro-cible qui apparaît à côté. Plus le tir est centré, plus il rapporte. Valorant et CS2.",
    url: "https://skilldrills.online/fr/drills/fps/micro-correction-precision",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Micro-ajustements de visée : précision headshot | SkillDrills",
    description: "Micro-ajustements de visée : touchez la cible ancre, puis la petite micro-cible qui apparaît à côté. Plus le tir est centré, plus il rapporte. Valorant et CS2.",
  },
};

export default function MicroCorrectionPage() {
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
        "name": "Exercices FPS",
        "item": "https://skilldrills.online/fr/drills/fps"
      },
      {
        "@type": "ListItem",
        "position": 3,
         "name": "Micro-ajustements de visée",
        "item": "https://skilldrills.online/fr/drills/fps/micro-correction-precision"
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Micro-ajustements de visée et headshots",
    "url": "https://skilldrills.online/fr/drills/fps/micro-correction-precision",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Nécessite un navigateur moderne avec support Pointer Lock",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Fine_motor_skill"],
    "name": "Micro-ajustements de visée et headshots",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Micro-Correction Precision FPS Trainer",
    "description": "Simulateur de visée pour calibrer la décélération terminale et les micro-ajustements avec verrouillage du curseur.",
    "genre": ["Action", "Esports Trainer", "Aim Trainer"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Browser Game"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que le freinage moteur (décélération terminale) dans la visée FPS ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le freinage moteur est la capacité biomécanique d'arrêter net l'élan de la souris à la fin d'un déplacement vif. Une décélération parfaitement maîtrisée dissipe l'énergie cinétique et empêche le réticule de dépasser la hitbox de la tête adverse (overflick)."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi les joueurs dépassent-ils souvent leur cible (overflick) sur Valorant et CS2 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'overflick survient lorsque l'impulsion balistique initiale produit plus de vitesse que les muscles stabilisateurs de la main et la friction du tapis de souris ne peuvent en absorber. Cela découle souvent d'une sensibilité inadaptée ou d'une contraction excessive du poignet."
        }
      },
      {
        "@type": "Question",
        "name": "Comment le modèle de visée en deux composantes (Woodworth et Meyer) théorise-t-il la micro-correction ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Établi par Robert S. Woodworth (1899) et développé par Meyer et al. (1988), ce modèle décompose le ciblage en deux étapes : une impulsion balistique rapide couvrant 85% à 90% de la trajectoire, suivie d'un sous-mouvement correctif guidé par le contrôle visuel continu. C'est cette seconde phase qui convertit le mouvement en tir létal."
        }
      },
      {
        "@type": "Question",
        "name": "Comment travailler ses micro-ajustements pour CS2 et Valorant ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Associez un bon placement du réticule à des exercices de petits ajustements, et ne tirez qu'après avoir vu le réticule aligné sur la tête. Dans ce drill, la micro-cible apparaît à 55 à 90 px de la cible ancre (jusqu'à 145 px quand le niveau monte), ce qui reproduit cette petite correction."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que la confirmation visuelle de cible (target confirmation) avant le tir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il s'agit de la fraction de seconde cognitive durant laquelle le cortex visuel vérifie que le réticule est verrouillé sur la hitbox ennemie avant d'actionner le clic. Déclencher le tir précipitamment pendant la course entraîne des tirs manqués évitables."
        }
      },
      {
        "@type": "Question",
        "name": "L'entraînement aux micro-corrections augmente-t-il directement le pourcentage de headshots ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cela peut aider. Le premier flick tombe rarement pile sur la tête, et ce drill répète justement la petite correction qui suit. L'effet en jeu dépend de chacun et du volume d'entraînement, il n'est pas garanti."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est l'impact du taux de rafraîchissement (Hz) et du polling rate sur les micro-flicks ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les écrans haute fréquence (144Hz à 360Hz) procurent une plus grande densité temporelle d'images et réduisent le délai perçu. Un taux de scrutation de souris à 1000Hz ou plus abaisse la latence de capture sous 1 ms, autorisant des micro-ajustements sub-pixel sans latence."
        }
      },
      {
        "@type": "Question",
        "name": "À quelle fréquence s'entraîner aux micro-corrections pour éviter la fatigue sensorimotrice ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une pratique quotidienne de 10 à 15 minutes en pré-échauffement compétitif est idéale. Des sessions courtes et intenses consolident la motricité fine sans créer de tension excessive sur les tendons et articulations de la main."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle prise en main de souris (Fingertip, Claw, Palm) favorise les micro-ajustements des doigts ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les prises Claw et Fingertip sont supérieures pour les micro-corrections, car la paume ne bloque pas le corps de la souris, accordant aux articulations des doigts toute leur amplitude de flexion et d'extension pour les ajustements fins."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi les tirs manqués ou les dépassements de temps réinitialisent-ils le combo ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour récompenser la précision plutôt que les clics précipités. Un tir manqué sur l'ancre ou la micro-cible, ou une cible qui expire, remet le combo à 0 et retire 1 seconde. Le combo n'augmente que sur les touches de micro-cible, et son multiplicateur va jusqu'à 3,0×."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps dure une partie et comment le score est-il calculé ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La partie commence avec 45 secondes. Chaque touche d'ancre et chaque touche de micro-cible ajoute 1 seconde (60 secondes maximum), et la partie s'arrête à 0. Une ancre rapporte 10 points, une micro-cible 100 à 150 points selon la distance au centre, multipliés par le combo et le niveau. Le niveau monte de 1 tous les 1 400 points, sans plafond : les cibles rétrécissent et leur durée de vie (1,8 s au départ) raccourcit."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Maîtriser la Micro-Correction de Visée",
    "description": "Méthode rigoureuse pour affiner la décélération terminale et les micro-ajustements sur les FPS tactiques.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibration et Verrouillage du Pointeur",
        "text": "Réglez votre sensibilité et vos DPI exacts pour maintenir votre ratio cm/360 habituel et activez le Pointer Lock."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Activation de la Cible Ancre",
        "text": "Cliquez sur la première cible ancre pour faire apparaître la micro-cible adjacente."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Freinage Moteur et Micro-Ajustement des Doigts",
        "text": "Couvrez 90% du trajet d'un flick souple, freinez net à l'approche et ajustez le centre avec le bout des doigts."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Confirmation Visuelle et Clic Décisif",
        "text": "Validez visuellement l'alignement sur la cible avant de cliquer pour préserver votre multiplicateur de score."
      }
    ]
  };

  const copyFr = {
    h1Keyword: "Micro-ajustements de visée",
    h1Suffix: " : précision headshot",
    subtitle: "Micro-ajustements de visée : touchez la cible ancre puis ramenez aussitôt le réticule sur la petite micro-cible juste à côté. Pour les joueurs de Valorant et CS2.",
    statScore: "Score",
    statTime: "Temps",
    statAccuracy: "Précision",
    statBestScore: "Record",
    statAvgCorrection: "Correction Moyenne",
    statMaxCombo: "Combo Max",
    statPeakLevel: "Niveau Max",
    startTitle: "Micro-ajustements de visée",
    startSubtitle: "Pointer Lock • Progression Continue et Décélération",
    getReady: "PRÊT ?",
    toggleFlash: "Flash de tir manqué",
    toggleSound: "Effets sonores",
    stageCaption: "Cliquez sur la cible ancre puis ajustez instantanément votre réticule avec les doigts pour toucher la micro-cible.",
    rulesTitle: "Consignes d'Entraînement et Barème",
    rulesItems: [
      { num: "1", text: "Toucher l'Ancre", highlight: "+10 pts (+1,0s)", result: "Active la micro-cible" },
      { num: "2", text: "Toucher la Micro", highlight: "100–150 pts (+1,0s)", result: "Précision × Combo × Niveau" },
      { num: "3", text: "Montée de Niveau", highlight: "+1 Niveau / 1 400 pts", result: "Échelle adaptative" },
      { num: "4", text: "Tir Manqué / Expiration", highlight: "Pénalité", result: "Reset combo (-1,0s)" }
    ],
    aboutTitle: "À propos des micro-ajustements de visée",
    aboutHeading: "Qu'est-ce que la Micro-Correction de Visée ?",
    aboutText: "La majorité des mouvements de visée ne sont pas un geste unique mais deux : une poussée balistique initiale rapide, suivie d'un micro-ajustement visuel de précision (Woodworth, 1899 ; Meyer et al., 1988). Cet exercice isole et perfectionne la seconde moitié du geste, là où se joue l'issue du duel."
  };

  const microCorrectionGuide = {
    heading: "Guide des micro-ajustements de visée",
    intro: [
      "Les micro-ajustements de visée sont la phase finale d'un mouvement balistique : après être arrivé près de la cible, vous freinez et effectuez un petit ajustement pour centrer le réticule. Ce drill isole cette phase, mesure le temps entre la cible ancre et la micro-cible et révèle quand la vitesse provoque une seconde correction.",
      "Le cadre théorique des mouvements dirigés rapides a été établi par Robert S. Woodworth (1899) avec son modèle en deux composantes : une impulsion balistique initiale en boucle ouverte propulsant la main vers le stimulus, suivie d'une phase de contrôle continu en boucle fermée guidée par le retour sensoriel. Ce compromis vitesse-précision a été formalisé par la loi de Fitts (1954), où le temps de mouvement évolue avec la distance et la taille de la cible.",
      "Les avancées de David E. Meyer et al. (1988) avec le modèle stochastique des sous-mouvements optimisés ont démontré que le système nerveux planifie le déplacement initial pour atterrir légèrement avant la cible, comptant sur de micro-ajustements rapides pour absorber l'inertie sans dépassement chaotique.",
      "Pendant la fixation fovéale terminale, l'œil humain active des microsaccades (Rolfs, 2009 ; Martinez-Conde et al., 2004) — de minuscules mouvements involontaires à haute fréquence — pour stabiliser la rétine sur les cibles critiques. Cet entraîneur associe le Pointer Lock à une chronométrie haute précision via performance.now() (Woods et al., 2015) pour éliminer les oscillations terminales et garantir des headshots constants.",
      "Mode de mesure : chaque tir et chaque micro-ajustement sont horodatés localement dans votre navigateur en temps réel. Les variations inférieures à 5 ms relèvent des tolérances matérielles normales (fréquence de l'écran et variations de capture du capteur de souris)."
    ],
    benchmarks: {
      title: "Plages d'entraînement SkillDrills pour les micro-ajustements (repères)",
      headers: ["Plage", "Fenêtre de Latence de Correction", "Mécanique de Contrôle Moteur", "Point à travailler"],
      rows: [
        ["Plage 1", "Moins de 280 ms", "Décélération quasi instantanée ; micro-ajustements aux doigts exécutés sans aucune oscillation", "Entraîne le premier tir avec décélération contrôlée, sans dépasser la cible"],
        ["Plage 2", "280 – 340 ms", "Freinage musculaire discipliné ; transition fluide du flick primaire au micro-ajustement", "Entraîne les duels contre les lignes agressives avec des headshots réguliers"],
        ["Plage 3", "340 – 420 ms", "Bonne acquisition de cible ; léger dépassement occasionnel de 10 à 15px demandant un double ajustement", "Efficacité tactique solide ; légère hésitation sur les décalages verticaux"],
        ["Plage 4", "420 – 520 ms", "Décélération hésitante ; tendance à glisser au-delà de la hitbox avant de corriger la visée", "Vulnérable aux contre-strafes rapides ; difficultés lors des transferts de tirs"],
        ["Plage 5", "520 ms+", "Inertie balistique excessive avec overflick régulier ; retard de confirmation visuelle", "Dépasse fréquemment la cible en duel direct ; nécessité de réajustements amples"]
      ],
      note: "Repères d'entraînement SkillDrills, pas des normes de recherche, des rangs de jeu ni des données d'utilisateurs. Les latences correspondent au temps entre la touche sur l'ancre et la touche sur la micro-cible, mesuré via performance.now()."
    },
    techniques: {
      title: "Protocoles Scientifiques pour Perfectionner Décélération et Micro-Visée",
      items: [
        {
          name: "Freinage Musculaire Terminal et Friction du Tapis",
          desc: "Au lieu de laisser la souris glisser librement après un flick rapide, appliquez une légère pression vers le tapis ou posez le bout des doigts annulaire et auriculaire pour dissiper instantanément l'énergie cinétique.",
          tips: "Un tapis de souris hybride offrant un bon pouvoir d'arrêt dynamique facilite la décélération sans bloquer les micro-glissements."
        },
        {
          name: "Cadence de Visée en Deux Temps",
          desc: "Décomposez consciemment votre visée en deux rythmes : un flick rapide et relâché couvrant 90% du trajet, suivi d'un micro-mouvement précis. Ne précipitez jamais le clic avant confirmation visuelle.",
          tips: "Résistez à l'envie de cliquer par réflexe en même temps que le flick ; dissociez le mouvement de la main de la pression sur le clic."
        },
        {
          name: "Articulation des Doigts pour les Décalages Sub-Degrés",
          desc: "Mobilisez le bras et le poignet pour le grand déplacement balistique, mais réservez la flexion et l'extension du bout des doigts pour les 5 à 20 derniers pixels.",
          tips: "Adoptez une prise Claw ou Fingertip relâchée laissant un espace libre sous la paume pour permettre aux doigts d'ajuster la trajectoire."
        },
        {
          name: "Verrouillage Visuel Anticipé (Microsaccades)",
          desc: "Fixez votre regard sur le pixel central de la tête adverse avant même l'arrivée du curseur. Selon la psychophysique visuelle (Rolfs, 2009), regarder la cible en avance prépare le cortex moteur avec les coordonnées exactes.",
          tips: "Gardez les yeux fixés sur le centre de la cible — ne suivez pas le réticule des yeux lors de son déplacement."
        }
      ]
    },
    steps: [
      "Configurez votre jeu, vos DPI et votre sensibilité exacte dans les paramètres pour garantir un ratio cm/360 parfait, puis activez le Pointer Lock.",
      "À l'apparition de la cible ancre, effectuez un déplacement rapide pour couvrir 90% du trajet vers la zone de la cible.",
      "Freinez net près de la bordure, effectuez un micro-ajustement précis au bout des doigts vers le centre, confirmez visuellement et cliquez.",
      "Conservez une cadence régulière sans tirs précipités pour maintenir votre combo et relever les paliers aux cibles toujours plus réduites."
    ],
    audience: "Joueurs de Valorant, CS2 et Rainbow Six Siege qui veulent travailler la correction après un flick légèrement à côté et réduire l'overflick.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'martinezConde2004', 'rolfs2009', 'woodworth1899'),
    related: [
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement Flick Shot" },
      { href: "/fr/drills/fps/angle-hold-trainer", label: "Entraîneur de Ligne de Visée" },
      { href: "/fr/drills/fps/instant-response", label: "Réponse Instantanée" }
    ]
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* VideoGame Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <MicroCorrectionClient copy={copyFr} />

      <DrillGuide guide={microCorrectionGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
