import TargetAcquisitionClient from '@/app/drills/fps/target-acquisition/TargetAcquisitionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Aim Trainer Valorant - Acquisition de cibles | SkillDrills",
  description: "Aim trainer Valorant gratuit dans le navigateur : touchez 3 à 8 cibles de la plus claire à la plus sombre pour travailler l'acquisition et le premier tir.",
  keywords: [
    "aim trainer Valorant",
    "valorant aim trainer",
    "valorant aim training",
    "acquisition de cibles",
    "entraînement de visée",
    "premier tir",
    "précision du premier tir",
    "détection visuelle FPS",
    "identification des menaces",
    "flick premier tir",
    "réticule"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/target-acquisition",
    languages: getAlternateLanguages('/drills/fps/target-acquisition'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Aim Trainer Valorant - Acquisition de cibles | SkillDrills",
    description: "Aim trainer Valorant gratuit dans le navigateur : touchez 3 à 8 cibles de la plus claire à la plus sombre pour travailler l'acquisition et le premier tir.",
    url: "https://skilldrills.online/fr/drills/fps/target-acquisition",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Aim Trainer Valorant - Acquisition de cibles | SkillDrills",
    description: "Aim trainer Valorant gratuit dans le navigateur : touchez 3 à 8 cibles de la plus claire à la plus sombre pour travailler l'acquisition et le premier tir.",
  },
};

export default function TargetAcquisitionFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînement FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Acquisition de Cibles", "item": "https://skilldrills.online/fr/drills/fps/target-acquisition" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Aim Trainer Valorant - Acquisition de cibles",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Drill gratuit d'acquisition de cibles pour joueurs de Valorant : touchez les cibles par ordre de luminosité et travaillez la précision du premier tir.",
    "genre": "Entraînement FPS / Précision du Premier Tir",
    "url": "https://skilldrills.online/fr/drills/fps/target-acquisition",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Aim Trainer Valorant - Acquisition de cibles",
    "url": "https://skilldrills.online/fr/drills/fps/target-acquisition",
    "description": "Drill gratuit d'acquisition de cibles pour joueurs de Valorant : touchez les cibles par ordre de luminosité et travaillez la précision du premier tir.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Nécessite le support HTML5 Canvas et Pointer Lock API",
    "dateModified": "2026-11-09"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Aim Trainer Valorant - Acquisition de cibles",
    "url": "https://skilldrills.online/fr/drills/fps/target-acquisition",
    "description": "Drill gratuit d'acquisition de cibles pour joueurs de Valorant : touchez les cibles par ordre de luminosité et travaillez la précision du premier tir.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["Entraînement FPS", "Aim Trainer", "Acquisition de Cibles"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment fonctionne cet aim trainer Valorant d'acquisition de cibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une session dure 60 secondes. Des groupes de 3 à 8 cibles de luminosité différente apparaissent et il faut les toucher de la plus claire à la plus sombre. Une bonne cible rapporte +100 points multipliés par le combo et le niveau ; vider un groupe ajoute +400 points multipliés par le niveau et fait apparaître un nouveau groupe. Toucher la mauvaise cible ou cliquer dans le vide remet le combo à zéro et retire 0,6 seconde si la pénalité de temps est activée. Le drill se joue à la souris avec verrouillage du pointeur ; Échap le quitte. SkillDrills est un outil indépendant, non affilié à Riot Games."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'acquisition de cibles dans les FPS compétitifs ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'acquisition de cibles est la chaîne cognitive et motrice associant repérage visuel d'un ennemi dans le champ de vision, distinction par rapport aux éléments du décor et coéquipiers, calcul de trajectoire du curseur et tir balistique précis dès la première balle."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre acquisition de cibles et temps de réaction simple ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le temps de réaction simple n'évalue que la latence entre un signal isolé prévisible et un clic. L'acquisition de cibles englobe recherche spatiale, attention sélective, tri par contraste/luminance et précision motrice sous pression temporelle."
        }
      },
      {
        "@type": "Question",
        "name": "Comment la Théorie de l'Intégration des Traits éclaire-t-elle la détection d'ennemis ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Établie par Anne Treisman et Garry Gelade (1980), cette théorie démontre que les traits élémentaires (luminance, teinte, orientation) sont extraits en parallèle sur l'ensemble du champ visuel avant que l'attention spatiale ne les assemble en cible individualisée."
        }
      },
      {
        "@type": "Question",
        "name": "Comment utiliser son regard pour acquérir les cibles plus vite ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selon le modèle Guided Search (Wolfe, 2007), l'attention va d'abord vers les éléments les plus saillants. Plutôt que de balayer l'écran ligne par ligne, gardez le regard au centre, repérez la cible la plus visible et amenez la souris là où votre regard se trouve déjà. C'est exactement l'enchaînement que ce drill fait répéter."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est l'impact de la précision du premier tir dans CS2 et Valorant ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dans les shooters tactiques où un tir à la tête élimine instantanément (Vandal ou AK-47), le premier tir réussi décide souvent du duel, et un premier tir manqué laisse à l'adversaire le temps de répliquer. Ce drill ne simule pas de vrais tirs à la tête, mais isole l'habitude de choisir la bonne cible puis de placer proprement le premier clic."
        }
      },
      {
        "@type": "Question",
        "name": "Doit-on privilégier la vision centrale ou périphérique pour repérer les cibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Repérez les cibles avec la vision périphérique et alignez le viseur avec votre vision fovéale centrale. Garder les yeux rivés sur le réticule restreint la fenêtre d'attention et ralentit l'alerte périphérique."
        }
      },
      {
        "@type": "Question",
        "name": "En quoi l'encombrement visuel influence-t-il la vitesse d'acquisition ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lorsque plusieurs éléments partagent des propriétés visuelles avec l'opposant, le traitement visuel passe d'une analyse parallèle instantanée à un balayage séquentiel laborieux, ce qui allonge le temps nécessaire pour trouver la cible (Treisman & Gelade, 1980). Dans ce drill, le nombre de cibles augmente et les écarts de luminosité diminuent avec le niveau."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle prise de souris est la plus performante pour l'acquisition de cibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les prises Claw et Fingertip sont idéales car elles autorisent des micro-ajustements rapides du bout des doigts et un freinage net sur le tapis, tout en préservant l'amplitude de l'avant-bras sur les grands angles."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi une sensibilité constante aide-t-elle l’acquisition de cibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une sensibilité constante stabilise le rapport entre le geste de la main et l’écran, ce qui aide le système moteur à calibrer l’impulsion balistique."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps consacrer chaque jour au drill d'acquisition de cibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il n'y a pas de durée idéale prouvée. Quelques sessions de 60 secondes bien concentrées en échauffement sont un bon point de départ ; arrêtez-vous avant la fatigue visuelle et comparez vos scores sur le même matériel."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Maîtriser l'Acquisition de Cibles et le Premier Tir",
    "description": "Protocole pratique pour identifier les cibles majeures, supprimer les hésitations visuelles et réussir le premier tir.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrer sa Sensibilité",
        "text": "Réglez la sensibilité sur la page /drills pour retrouver votre sensibilité habituelle en jeu. Le pointeur est verrouillé automatiquement au démarrage.",
        "url": "https://skilldrills.online/fr/drills/fps/target-acquisition#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Adopter un Regard Central Dévitalisé",
        "text": "Maintenez vos yeux détendus au milieu de l'écran pour saisir l'apparition des grappes de cibles en vision périphérique.",
        "url": "https://skilldrills.online/fr/drills/fps/target-acquisition#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Identifier la Cible Prioritaire par le Contraste",
        "text": "Repérez instantanément la cible la plus brillante sans passer en revue chaque élément un par un.",
        "url": "https://skilldrills.online/fr/drills/fps/target-acquisition#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Exécuter un Flick Balistique avec Freinage Tapis",
        "text": "Amenez franchement le viseur au centre de la cible et cliquez, en utilisant l'adhérence du tapis pour bloquer l'overshoot.",
        "url": "https://skilldrills.online/fr/drills/fps/target-acquisition#step-4"
      }
    ]
  };

  const targetAcquisitionGuide = {
    heading: "Aim Trainer Valorant : acquisition de cibles et premier tir",
    intro: [
      "Cet aim trainer Valorant gratuit dans le navigateur travaille l'acquisition de cibles : pendant 60 secondes, 3 à 8 cibles de luminosité différente apparaissent et doivent être touchées de la plus claire à la plus sombre. Vous répétez ainsi le passage du choix de la bonne cible au premier tir précis, utile pour Valorant, CS2 et les autres FPS tactiques. Il ne reproduit ni le recul, ni le réseau, ni la carte d'un jeu précis.",
      "Le socle théorique de la prospection visuelle et de l'identification a été posé par Anne Treisman et Garry Gelade (1980) au travers de la Théorie de l'Intégration des Traits. Treisman a prouvé que les propriétés visuelles primaires — comme le contraste de brillance, les couleurs saillantes et l'orientation des bordures — sont perçues en parallèle sur tout le champ oculaire. Ce n'est qu'avec la focalisation de l'attention spatiale que ces éléments fusionnent en une cible ennemie distincte.",
      "En prolongeant le traitement parallèle, le modèle Guided Search de Jeremy M. Wolfe (1994, 2007) décrit l'interaction entre cartes de saillance sensorielle et attentes cognitives. En s'exerçant au tri de contrastes, le cortex visuel apprend à écarter immédiatement les distracteurs d'arrière-plan, ce qui peut réduire le délai entre l'apparition de la cible et le début du mouvement dans cette tâche, sans garantie de transfert en match.",
      "En synthétisant les lois biomécaniques de Paul M. Fitts (1954), la théorie des sous-mouvements optimisés de David E. Meyer et al. (1988) et la chronométrie numérique à haute résolution (Woods et al., 2015), cet exercice se concentre sur le lancement du premier flick sans hésitation et sur un arrêt net au centre de la cible. Il ne garantit aucun progrès en match ; il sert à suivre l'évolution de vos propres scores.",
      "À propos des résultats : l'écran de fin affiche le score, la précision (bonnes cibles touchées ÷ clics totaux), les groupes vidés, le combo max et le niveau atteint. Votre meilleur score est enregistré uniquement dans ce navigateur. Ce drill ne mesure pas de temps de réaction en millisecondes. La fréquence de l'écran et le polling rate de la souris changent les sensations : comparez-vous sur la même configuration."
    ],
    benchmarks: {
      title: "Paliers d'entraînement de précision en acquisition de cibles",
      headers: ["Palier", "Précision", "Signification"],
      rows: [
        ["Palier 1", "95 % et plus", "Presque aucune erreur d'ordre ni clic dans le vide"],
        ["Palier 2", "88 – 95 %", "La cible la plus claire est presque toujours choisie en premier, même à haut niveau"],
        ["Palier 3", "80 – 88 %", "Des erreurs d'ordre apparaissent quand les cibles sont nombreuses"],
        ["Palier 4", "70 – 80 %", "Les cibles de luminosité proche sont souvent confondues"],
        ["Palier 5", "moins de 70 %", "Sécuriser l'ordre avant d'augmenter la vitesse"]
      ],
      note: "La précision est la valeur de l'écran de fin (bonnes cibles touchées ÷ clics totaux). Ces paliers sont des repères d'entraînement SkillDrills, pas des normes scientifiques, des rangs de jeu ni des statistiques d'utilisateurs."
    },
    techniques: {
      title: "Protocoles Fondés sur la Science pour Perfectionner l'Acquisition",
      items: [
        {
          name: "Balayage Parallèle plutôt qu'Inspection Séquentielle",
          desc: "Bannissez la fouille oculaire zone par zone. Exploitez les filtres pré-attentionnels (Treisman & Gelade, 1980) pour repérer les sursauts de contraste en vision périphérique en gardant le regard au centre.",
          tips: "Gardez vos yeux détendus vers le centre ; laissez la cible la plus brillante guider votre première saccade oculaire."
        },
        {
          name: "Couplage Saccadique et Moteur lors du Flick",
          desc: "Désolidarisez le regard de la main : déclenchez d'abord la saccade oculaire fovéale pour caler le centre de la cible, puis laissez la proprioception fouetter le pointeur sur la bonne ligne.",
          tips: "Veillez à ce que votre regard soit déjà sur le centre de la cible avant de bouger la souris."
        },
        {
          name: "Filtrage Rapide du Seuil de Contraste",
          desc: "Dans les scènes encombrées, les silhouettes ternes correspondent à des leurres, tandis qu'un contraste marqué signale l'urgence. Apprenez à éliminer le bruit visuel sans freiner votre flick.",
          tips: "Habituez-vous à ignorer totalement les cibles secondaires assombries jusqu'à neutraliser la cible principale."
        },
        {
          name: "Freinage Dynamique sur Tapis de Souris",
          desc: "Conciliez vivacité balistique et pouvoir d'arrêt (Meyer et al., 1988). Servez-vous du frottement du tapis et des doigts pour stopper net le curseur au centre sans dépassement parasite.",
          tips: "Exercez une légère pression verticale avec les doigts en fin de course pour verrouiller la souris mécaniquement."
        }
      ]
    },
    steps: [
      "Réglez la sensibilité sur la page /drills selon votre sensibilité en jeu, puis lancez ; le pointeur est verrouillé automatiquement.",
      "Posez votre regard au centre sans forcer, en guettant l'apparition du groupe de cibles sur l'écran.",
      "Repérez sans délai la cible la plus lumineuse grâce au pré-filtrage visuel de contraste en parallèle.",
      "Réalisez un flick net vers le centre de la cible et tirez pour gagner +100 PTS × multiplicateurs de combo et de niveau. Le temps est fixé à 60 secondes et n'augmente pas avec les touches.",
      "Neutralisez les cibles restantes par ordre décroissant de brillance pour remporter le bonus de groupe de +400 PTS × multiplicateur de niveau."
    ],
    audience: "Joueurs de FPS tactiques qui veulent s'exercer à repérer une cible parmi des distracteurs et à réussir leur premier clic. Aim trainer indépendant, non affilié à Riot Games ni à Valve.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/fr/drills/fps/target-prioritization", label: "Entraînement Priorisation des Cibles" },
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement Flick Shot" },
      { href: "/fr/drills/fps/micro-correction-precision", label: "Entraînement de Micro-Correction" },
      { href: "/fr/drills/fps/strafe-tracking", label: "Entraînement Strafe Tracking" },
      { href: "/fr/drills/fps/180-degree-awareness", label: "Entraînement Conscience 180°" }
    ]
  };

  const copyFr = {
    h1Keyword: "Aim Trainer Valorant",
    h1Suffix: " – Acquisition de cibles",
    subtitle: "Gratuit pour les joueurs de Valorant : touchez les cibles de la plus claire à la plus sombre et travaillez le premier tir.",
    statScore: "Score",
    statTime: "Temps",
    statAccuracy: "Précision",
    statBestScore: "Record",
    statSetsCleared: "Séries Réussies",
    statMaxCombo: "Combo Max",
    statPeakLevel: "Niveau Record",
    startTitle: "Acquisition de Cibles Pro",
    startSubtitle: "Vitesse de Reconnaissance Visuelle · Niveaux Dynamiques Illimités",
    getReady: "PRÉPAREZ-VOUS",
    toggleFlash: "Basculer le Flash d'Échec",
    toggleSound: "Basculer les Effets Sonores",
    pausedTitle: "Jeu en Pause",
    pausedSubtitle: "Cliquez pour reprendre — le verrouillage du pointeur sera réactivé.",
    stageCaption: "Repérez et cliquez sur la cible la plus brillante (plus forte opacité) de chaque grappe le plus vite et le plus précisément possible.",
    rulesTitle: "Consignes de l'Exercice et Barème",
    rulesItems: [
      { num: "1", text: "Cible Touchée", highlight: "+100 PTS × Niveau", result: "×Multiplicateur Combo" },
      { num: "2", text: "Série Neutralisée", highlight: "+400 PTS × Niveau", result: "Nouvelle Grappe" },
      { num: "3", text: "Niveau Supérieur", highlight: "+1 / 1400 PTS", result: "Progression Dynamique Continue" },
      { num: "4", text: "Tir Erroné / Manqué", highlight: "Pénalité", result: "Réinitialise Combo (-0,6s si pénalité active)" }
    ],
    aboutTitle: "À Propos de l'Acquisition de Cibles",
    aboutHeading: "Qu'est-ce que l'Acquisition de Cibles ?",
    aboutText: "L'acquisition de cibles consiste à repérer la cible adéquate et à amener le viseur sur elle. Les propriétés visuelles élémentaires telles que couleur, brillance et orientation sont traitées en parallèle sur tout le champ visuel avant que l'attention ne les lie en un objet unique (Treisman & Gelade, 1980) — raison pour laquelle un opposant contrasté est perçu bien plus rapidement qu'une silhouette camouflée."
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
      <TargetAcquisitionClient copy={copyFr} />
      <DrillGuide guide={targetAcquisitionGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
