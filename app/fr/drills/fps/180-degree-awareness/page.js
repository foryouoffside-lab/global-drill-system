import AwarenessDrillClient from '@/app/drills/fps/180-degree-awareness/AwarenessDrillClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Entraînement demi-tour 180° | Visée FPS | SkillDrills",
  description: "Entraînement gratuit au demi-tour 180° en FPS dans le navigateur : des cibles surgissent aux bords gauche et droit de l'écran, visez-les d'un grand flick et freinez net. Souris requise.",
  keywords: [
    "entraînement demi-tour 180 degrés",
    "vision périphérique FPS",
    "visée FPS",
    "entraînement de visée en ligne",
    "demi-tour souris FPS",
    "rotation rapide souris FPS",
    "réaction aux attaques de dos",
    "espace tapis de souris rotation 180",
    "entraînement visée Valorant",
    "aim trainer 180 degrés"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/180-degree-awareness",
    languages: getAlternateLanguages('/drills/fps/180-degree-awareness'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Entraînement demi-tour 180° | Visée FPS | SkillDrills",
    description: "Repérez une cible en vision périphérique, tournez à 180° et arrêtez le viseur avec précision dans ce drill FPS gratuit.",
    url: "https://skilldrills.online/fr/drills/fps/180-degree-awareness",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Entraînement demi-tour 180° | Visée FPS | SkillDrills",
    description: "Repérez une cible en vision périphérique, tournez à 180° et arrêtez le viseur avec précision dans ce drill FPS gratuit.",
  },
};

export default function AwarenessDrillFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Drills de FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Entraînement Demi-Tour 180°", "item": "https://skilldrills.online/fr/drills/fps/180-degree-awareness" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Entraînement Demi-Tour 180°",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Navigateur Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Simulateur interactif de demi-tour 180 degrés pour FPS. Améliorez votre vitesse de bras, votre réaction aux attaques dorsales et votre vision périphérique.",
    "genre": "Entraînement FPS / Conscience Spatiale",
    "url": "https://skilldrills.online/fr/drills/fps/180-degree-awareness",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Entraînement Demi-Tour 180°",
    "url": "https://skilldrills.online/fr/drills/fps/180-degree-awareness",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Nécessite JavaScript et HTML5 Canvas avec Pointer Lock",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Entraînement gratuit au demi-tour 180° en FPS dans le navigateur. Travaillez les grands flicks vers les bords de l'écran et le freinage souris pour CS2 et Valorant."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Entraînement Demi-Tour 180°",
    "gamePlatform": "Web Browser",
    "genre": ["Entraînement FPS", "Aim Trainer"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "url": "https://skilldrills.online/fr/drills/fps/180-degree-awareness",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "dateModified": "2026-11-09"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'entraînement à la perception et au demi-tour à 180° en FPS ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est un exercice moteur ciblé visant à conditionner la vision périphérique et la rotation de la souris lorsque des cibles surgissent hors du champ visuel central."
        }
      },
      {
        "@type": "Question",
        "name": "Comment développer son repérage spatial à 360° ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En combinant des exercices de wide flick, le placement du réticule et l'écoute audio 3D, on construit peu à peu une carte mentale de l'espace de jeu."
        }
      },
      {
        "@type": "Question",
        "name": "Les exercices de demi-tour 180° améliorent-ils le temps de réaction ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cela peut aider. Repérer une cible en vision périphérique avant de lancer le balayage est exactement ce que le drill fait répéter, mais aucun gain n'est garanti."
        }
      },
      {
        "@type": "Question",
        "name": "De quelle façon la vision périphérique aide-t-elle dans les jeux de tir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La fovéa ne couvre que ~2 degrés, tandis que la rétine périphérique perçoit le mouvement jusqu'à 180 degrés, permettant de détecter les flancs sans quitter l'angle principal."
        }
      },
      {
        "@type": "Question",
        "name": "Comment éviter de se faire contourner ou éliminer dans le dos en FPS ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En combinant les repères audio avec des rotations rapides à 180 degrés. Répéter la distance physique sur le tapis aide à neutraliser la menace arrière plus vite."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que la conscience situationnelle en sport électronique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est la synthèse mentale continue de la mini-carte, des bruits de pas, des éliminations et des indices visuels périphériques pour anticiper les mouvements ennemis."
        }
      },
      {
        "@type": "Question",
        "name": "Cet exercice est-il adapté pour CS2, Valorant et d'autres jeux de tir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En partie. Dans CS2 et Valorant, un retournement rapide sert à éviter une flash ou à vérifier un angle. Le drill ne simule pas les flashs ni une caméra 3D : il fait répéter le grand flick vers les bords de l'écran et l'arrêt net, utiles à ces gestes."
        }
      },
      {
        "@type": "Question",
        "name": "À quelle fréquence faut-il s'entraîner aux demi-tours à 180 degrés ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une session de 10 à 15 minutes par jour suffit, sans provoquer de fatigue musculaire au niveau du poignet ou du coude."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il utiliser le poignet ou le bras pour pivoter à 180 degrés ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les grands demi-tours à 180 degrés doivent être exécutés principalement avec l'avant-bras, le coude et l'épaule, réservant le poignet et les doigts aux micro-ajustements terminaux."
        }
      },
      {
        "@type": "Question",
        "name": "Comment ce simulateur capture-t-il le mouvement de la souris ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le drill utilise l’API HTML5 Pointer Lock pour capturer le mouvement de la souris dans le navigateur. Le résultat dépend des réglages de votre système et de votre souris."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Réaliser des Demi-Tours 180° et Développer la Vision Périphérique",
    "description": "Instructions détaillées pour maîtriser les demi-tours rapides à 180 degrés et la détection d'ennemis sur les flancs.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Activez le Pointer Lock et recentrez la souris",
        "text": "Cliquez sur Démarrer pour verrouiller le curseur et placez votre souris au centre précis de votre tapis."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Détectez la cible grâce à la vision périphérique",
        "text": "Gardez le regard central détendu et repérez l'apparition de la cible en bordure d'écran avec votre vision latérale."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Exécutez le balayage balistique avec l'avant-bras",
        "text": "Lancez un swipe horizontal rapide initié par le coude et l'épaule pour amener le réticule jusqu'au bord opposé de l'écran."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Appliquez le freinage musculaire et confirmez le tir",
        "text": "Activez les muscles antagonistes pour stabiliser le réticule sur la cible et cliquez instantanément."
      }
    ]
  };

  const awarenessGuideFr = {
    heading: "Guide d'Entraînement Demi-Tour 180° et Repères Psychomoteurs",
    intro: [
      "L'entraînement au demi-tour 180° en FPS suit une séquence simple : repérer une cible au bord de l'écran en vision périphérique, tourner avec le bras puis arrêter le viseur sur la cible. Il reproduit la réponse à une attaque dans le dos sans confondre vitesse de rotation et précision finale.",
      "Transformer cette détection en un demi-tour virtuel de 180° repose sur le modèle moteur à deux composantes (Elliott et al., 2010) : un balayage balistique en boucle ouverte initié par l'épaule et le coude couvrant 80% à 90% de la trajectoire, suivi immédiatement du freinage musculaire antagoniste pour neutraliser tout dépassement (Schmidt et al., 1979). Selon la loi de Fitts (Fitts, 1954), l'amplitude angulaire accrue élève l'indice de difficulté, rendant le pouvoir d'arrêt (stopping power) et l'espace sur le tapis prépondérants.",
      "La chronométrie numérique repose sur performance.now() et l'API HTML5 Pointer Lock. Les différences inférieures à 5 ms relèvent du bruit de mesure. Un taux d'interrogation de 1000 Hz et un moniteur à rafraîchissement élevé réduisent cette marge (Woods et al., 2015).",
      "Mesure de la performance : chaque rotation et tir est chronométré localement sur votre machine sans téléversement. Conservez la même sensibilité (cm/360°) et un positionnement stable pour forger des automatismes musculaires durables."
    ],
    benchmarks: {
      title: "Benchmarks de Demi-Tour 180° et Réacquisition Spatiale",
      headers: ["Phase de Rotation / Métrique", "Latence Moyenne (ms)", "Mécanisme Biomécanique Moteur", "Classification Psychomotrice"],
      rows: [
        ["Détection Périphérique et Déclenchement Saccadique", "140 – 190 ms", "Bâtonnets rétiniens et colliculus supérieur", "Orientation visuelle pré-attentionnelle (Rayner 1998)"],
        ["Balayage Balistique du Bras (Rotation 180°)", "180 – 260 ms", "Propulsion de l'avant-bras, coude et épaule", "Accélération cinématique en boucle ouverte (Elliott 2010)"],
        ["Décélération et Freinage du Réticule", "60 – 110 ms", "Freinage des muscles antagonistes (stopping power)", "Amortissement de l'impulsion de freinage (Schmidt 1979)"],
        ["Micro-Correction Terminale et Clic", "70 – 130 ms", "Rétroaction visuelle fovéale et déclenchement du tir", "Phase d'approche selon la loi de Fitts (Fitts 1954)"],
        ["Temps Total de Réacquisition 180°", "450 – 690 ms", "Boucle sensorimotrice complète de rotation", "Repère d'entraînement SkillDrills"],
        ["Exécution Subconsciente Avancée 180°", "320 – 420 ms", "Synergie sensibilité et mémoire musculaire en un geste", "Repère d'entraînement SkillDrills avancé"]
      ],
      note: "Ces valeurs sont des repères d'entraînement SkillDrills, pas des normes de recherche ni des données d'utilisateurs ; les références de la colonne de droite expliquent seulement la phase du mouvement (Rayner 1998; Fitts 1954; Schmidt et al. 1979; Elliott et al. 2010; Woods et al. 2015). Les latences réelles dépendent de la sensibilité (cm/360°), du frottement du tapis et des hertz de l'écran."
    },
    techniques: {
      title: "Biomécanique et Astuces pour des Demi-Tours 180° Éclairs",
      items: [
        {
          name: "Mouvement de Bras et Point de Pivot",
          desc: "Effectuez les grandes rotations en prenant le coude et l'épaule comme pivots principaux plutôt que de solliciter le poignet. Gardez l'avant-bras parallèle au bureau pour assurer un balayage fluide et sans frottement.",
          tips: "Libérez suffisamment d'espace sur votre tapis de souris pour exécuter une rotation complète de 180° en un seul mouvement sans soulever la souris."
        },
        {
          name: "Calibration des cm/360° et Sensibilité",
          desc: "La distance d'un demi-tour vaut la moitié de vos cm/360° : à 40 cm/360°, un 180° demande 20 cm. Veillez à ce qu'un geste du centre au bord du tapis corresponde précisément à un demi-tour.",
          tips: "Évitez de changer fréquemment de DPI afin de stabiliser votre cartographie kinesthésique."
        },
        {
          name: "Esquive de Flashbangs et Rétablissement",
          desc: "En FPS tactique, un demi-tour rapide permet d'éviter d'être aveuglé par une flash (le drill ne simule pas les flashs). Pivoter pour fuir la grenade et se réaligner immédiatement exige un contrôle parfait de la décélération.",
          tips: "Entraînez-vous à replacer le réticule au niveau de la tête adverse immédiatement après le demi-tour d'évitement."
        },
        {
          name: "Recentrage Neutre sur le Tapis",
          desc: "Après avoir effectué un grand 180° et neutralisé une menace dans votre dos, profitez des temps morts pour replacer rapidement votre souris au centre de votre tapis afin de préserver votre zone de course.",
          tips: "Prenez l'habitude de lever légèrement la souris lors des transitions pour éviter de buter contre le bord du tapis."
        }
      ]
    },
    steps: [
      "Cliquez sur Démarrer pour passer en plein écran et verrouiller le pointeur.",
      "Gardez le réticule centré tout en maintenant une attention visuelle périphérique large.",
      "Lorsqu'une cible apparaît sur le bord gauche ou droit (de plus en plus souvent à mesure que le niveau monte), effectuez un swipe horizontal dynamique vers elle.",
      "Freinez fermement à proximité de la cible, confirmez l'alignement et cliquez immédiatement.",
      "Chaque touche ajoute 2 s (max. 60 s), chaque tir manqué, clic dans le vide ou expiration retire 1 s. La partie démarre à 45 s et s'arrête à 0 ; consultez ensuite précision, temps d'acquisition et meilleure série."
    ],
    audience: "Joueurs de CS2, Valorant, Apex Legends, Overwatch et tout FPS cherchant à perfectionner leurs demi-tours, leur défense contre les flancs et leur vitesse de rotation.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'elliott2010', 'fitts1954', 'schmidt1979', 'leigh2015', 'rayner1998'),
    related: [
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement au Flick Shot" },
      { href: "/fr/drills/fps/angle-hold-trainer", label: "Entraîneur de Placement de Viseur (Crosshair Placement)" },
      { href: "/fr/drills/fps/micro-correction-precision", label: "Entraînement aux Micro-Corrections" },
      { href: "/fr/drills/visual/reaction-speed/light-reaction", label: "Test de Temps de Réaction" }
    ]
  };

  const copyFr = {
    h1Keyword: "Entraînement demi-tour 180°",
    h1Suffix: " — Retournement rapide en FPS",
    subtitle: "Repérez la cible aux bords de l'écran en vision périphérique, lancez un grand flick et freinez le viseur dessus : le geste d'un retournement rapide en FPS.",
    statScore: "Score",
    statTime: "Temps",
    statAccuracy: "Précision",
    statBestScore: "Meilleur Score",
    startTitle: "Entraînement Demi-Tour 180°",
    startSubtitle: "Souris + Pointer Lock • 45 s au départ • Niveaux infinis",
    stageCaption: "Repérez les cibles sur les bords par vision périphérique et touchez-les d'un grand flick avant qu'elles ne disparaissent.",
    rulesTitle: "Règles d'Entraînement et Système de Points",
    rulesItems: [
      { num: "1", text: "Cible Périphérique", highlight: "+100 PTS (+2 s, max. 60 s)", result: "×Mult de Combo" },
      { num: "2", text: "Apparitions à 180°", highlight: "Plus fréquentes aux bords", result: "Plus petites & plus brèves" },
      { num: "3", text: "Progression de Niveau", highlight: "+1 Niveau / 1 750 PTS", result: "Échelle Adaptative" },
      { num: "4", text: "Tir Manqué / Expiration", highlight: "Clics dans le vide inclus", result: "Reset Combo (-1 s)" }
    ],
    aboutTitle: "À Propos de l'Entraînement Demi-Tour 180°",
    aboutHeading: "Pourquoi entraîner les demi-tours à 180 degrés ?",
    aboutText1: "Un demi-tour à 180 degrés représente le mouvement physique le plus ample dans un jeu de tir. Selon la loi de Fitts (1954), la durée du mouvement dépend de la distance et de la taille de la cible : la difficulté majeure réside dans le freinage et l'arrêt net sur la cible après la rotation.",
    aboutText2: "180° Awareness Pro isole et affine votre capacité à traiter les informations visuelles en dehors de votre champ fovéal. Contrairement aux drills de micro-ajustement, cet exercice sollicite une grande amplitude motrice sur votre tapis.",
    aboutText3: "Le drill reproduit le demi-tour par des cibles aux bords de l'écran, sans caméra 3D. Avec une sensibilité constante, la répétition vous aide à mémoriser la distance sur le tapis, ce qui peut servir face aux ennemis dans votre dos sur CS2 et Valorant."
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

      <AwarenessDrillClient copy={copyFr} />

      <DrillGuide guide={awarenessGuideFr} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
