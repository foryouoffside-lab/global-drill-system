import TargetPrioritizationClient from '@/app/drills/fps/target-prioritization/TargetPrioritizationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Priorisation des Cibles FPS : Choix de Cible | SkillDrills",
  description: "Priorisation des cibles gratuite : touchez les cibles rouges avant les jaunes, ne tirez jamais sur les alliés verts. Choix de cible et contrôle du tir.",
  keywords: [
    "priorisation des cibles",
    "choix de cible",
    "sélection de cibles Valorant",
    "évaluation des menaces FPS",
    "décision tactique FPS",
    "discipline de tir",
    "entraînement de visée Valorant"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/target-prioritization",
    languages: getAlternateLanguages('/drills/fps/target-prioritization'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Priorisation des Cibles FPS : Choix de Cible | SkillDrills",
    description: "Priorisation des cibles gratuite : touchez les cibles rouges avant les jaunes, ne tirez jamais sur les alliés verts. Choix de cible et contrôle du tir.",
    url: "https://skilldrills.online/fr/drills/fps/target-prioritization",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Priorisation des Cibles FPS : Choix de Cible | SkillDrills",
    description: "Priorisation des cibles gratuite : touchez les cibles rouges avant les jaunes, ne tirez jamais sur les alliés verts. Choix de cible et contrôle du tir.",
  },
};

export default function TargetPrioritizationFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînement FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Priorisation des cibles - choix de cible FPS", "item": "https://skilldrills.online/fr/drills/fps/target-prioritization" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Priorisation des cibles - choix de cible FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Drill gratuit de priorisation des cibles avec cibles rouges, jaunes et vertes : évaluation des menaces et retenue du tir (Go/No-Go) pour les jeux de tir.",
    "genre": "Entraînement FPS / Visée Cognitive et Prise de Décision",
    "url": "https://skilldrills.online/fr/drills/fps/target-prioritization",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Priorisation des cibles - choix de cible FPS",
    "url": "https://skilldrills.online/fr/drills/fps/target-prioritization",
    "description": "Drill gratuit de priorisation des cibles avec cibles rouges, jaunes et vertes : évaluation des menaces et retenue du tir (Go/No-Go) pour les jeux de tir.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Nécessite le support HTML5 Canvas et Pointer Lock API",
    "dateModified": "2026-11-09"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Priorisation des cibles - choix de cible FPS",
    "url": "https://skilldrills.online/fr/drills/fps/target-prioritization",
    "description": "Drill gratuit de priorisation des cibles avec cibles rouges, jaunes et vertes : évaluation des menaces et retenue du tir (Go/No-Go) pour les jeux de tir.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["Entraînement FPS", "Aim Trainer", "Priorisation des Cibles"],
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
        "name": "Qu'est-ce que la priorisation des cibles dans les FPS compétitifs ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La priorisation des cibles est la fonction exécutive cognitive qui consiste à analyser immédiatement plusieurs ennemis à l'écran, à identifier la menace la plus urgente et à la neutraliser en priorité, tout en retenant son tir devant les cibles secondaires et alliées."
        }
      },
      {
        "@type": "Question",
        "name": "Comment se déroule ce drill de priorisation des cibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Au départ, le plein écran et le verrouillage du pointeur s'activent et le chrono démarre à 45 secondes. De 2 à 4 cibles se déplacent en même temps et rebondissent sur les bords. Une rouge (menace haute) rapporte 100 points, une jaune (menace moyenne) 50 points, multipliés par le combo et le niveau, et chaque touche ajoute 2 secondes (60 maximum). Une jaune devient rouge au bout d'un moment ; une verte (alliée) ne doit pas être touchée et disparaît après environ 3 secondes. Toucher une jaune alors qu'une rouge est encore visible est une erreur de priorité : aucun point et combo perdu. Le tir allié et les tirs manqués remettent aussi le combo à zéro, et coûtent 1 seconde. Tous les 1400 points, le niveau monte avec plus de cibles, plus de vitesse et plus de rouges."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi les joueurs tirent-ils en panique sur la mauvaise cible ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sous stress, on réagit facilement au premier objet en mouvement plutôt qu'au joueur le plus dangereux, avant d'avoir vérifié s'il s'agit d'une menace. S'entraîner à retenir son tir aide à garder ce contrôle."
        }
      },
      {
        "@type": "Question",
        "name": "Comment le paradigme Go/No-Go s'applique-t-il au tir tactique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Décrit par Franciscus Donders (1868), le protocole Go/No-Go mesure l'aptitude à tirer sans délai sur les cibles valides et à bloquer le geste devant les éléments neutres ou alliés, empêchant ainsi le tir ami et les pertes d'avantage tactique."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que le Temps de Réaction au Signal d'Arrêt (SSRT) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le SSRT (Logan & Cowan, 1984) chiffre le délai pour annuler un ordre moteur déjà enclenché. Plus il est court, plus on peut annuler vite un tir vers un coéquipier ou un leurre. Ce drill ne mesure pas le SSRT directement ; il entraîne à ne pas tirer sur les cibles vertes."
        }
      },
      {
        "@type": "Question",
        "name": "Comment hiérarchiser les menaces face à plusieurs adversaires ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les critères courants sont la ligne de vue directe, l'armement et l'imminence de la riposte : un adversaire qui a déjà son viseur sur vous passe avant un joueur qui se déplace de profil. Ce drill simplifie cela en un ordre fixe, rouge avant jaune."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que la suppression des distracteurs en neurosciences de la vision ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est la capacité d'attention sélective permettant au cerveau d'inhiber les données visuelles superflues (Treisman, 1980), concentrant ainsi la fovéa sur la cible critique sans se faire piéger par les leurres périphériques."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le coût d'un tir sur un allié ou un leurre dans Valorant et CS2 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tirer sur un clone (comme un leurre de Yoru) révèle votre position sonore, gaspille vos balles et écarte le viseur du danger authentique, ce qui laisse une fenêtre au vrai adversaire."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle sensibilité de souris facilite la sélection rapide de cibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une sensibilité très élevée rend l'arrêt net sur la cible plus difficile, une très basse ralentit les changements vers des cibles éloignées. Utilisez plutôt votre sensibilité de jeu habituelle, avec laquelle vous vous arrêtez proprement."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi l'adrénaline altère-t-elle la vitesse de décision tactique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une stimulation sympathique aiguë restreint le champ de vision (effet tunnel) et surcharge la mémoire de travail, diminuant la capacité à traiter plusieurs silhouettes simultanément sans entraînement préalable."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps faut-il consacrer à la priorisation de cibles chaque jour ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il n'y a pas de règle fixe. Une dizaine de minutes avant de jouer est un format raisonnable ; comparez votre précision et votre nombre de tirs alliés sur le même matériel d'un jour à l'autre."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Maîtriser la Priorisation de Cibles et la Discipline de Tir",
    "description": "Protocole étape par étape pour calibrer la sensibilité, catégoriser les menaces et abattre les cibles dans le bon ordre.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrer sa Sensibilité",
        "text": "Ajustez la sensibilité pour qu'elle soit proche de votre jeu habituel.",
        "url": "https://skilldrills.online/fr/drills/fps/target-prioritization#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Intégrer le Code Couleur des Menaces",
        "text": "Identifiez les cibles rouges comme urgence absolue (+100 PTS), les jaunes comme secondaires (+50 PTS) et les vertes comme alliées protégées.",
        "url": "https://skilldrills.online/fr/drills/fps/target-prioritization#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Éliminer les Cibles Rouges Immédiates",
        "text": "Envoyez des flicks incisifs vers les cibles rouges avant que leur compte à rebours n'expire et n'ampute votre score.",
        "url": "https://skilldrills.online/fr/drills/fps/target-prioritization#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Retenir son Tir sur les Cibles Vertes Alliées",
        "text": "Bloquez tout réflexe de clic au survol des silhouettes vertes pour conserver intact votre multiplicateur de combo.",
        "url": "https://skilldrills.online/fr/drills/fps/target-prioritization#step-4"
      }
    ]
  };

  const targetPrioritizationGuide = {
    heading: "Priorisation des cibles en FPS : choix de cible et retenue du tir",
    intro: [
      "Ce drill de priorisation des cibles travaille la décision de choisir l'ennemi le plus dangereux avant de tirer : cibles rouges mobiles (menace haute) d'abord, puis jaunes, et jamais les alliés verts. Vous y entraînez l'évaluation des menaces, le filtrage de l'attention et la retenue du tir, par exemple pour les combats à plusieurs adversaires sur Valorant et CS2.",
      "Le mécanisme neurobiologique de l'inhibition motrice a été documenté par Gordon D. Logan et William B. Cowan (1984) au travers du modèle horse-race : quand un signal d'arrêt se manifeste, l'ordre d'inhibition entre en compétition avec la commande motrice déjà initiée. Sous pression, le clic l'emporte souvent avant que la cible soit vérifiée : c'est le tir de panique.",
      "En combinant la chronométrie mentale de Franciscus Cornelis Donders (1868/1969) relative aux temps de réaction de choix et la théorie d'intégration des traits d'Anne Treisman et Garry Gelade (1980), cet entraînement force le système visuel à hiérarchiser les cibles selon leur dangerosité avant d'autoriser la pression sur la souris.",
      "En associant le modèle attentionnel de Michael I. Posner (1990), les recherches spatiales de C. Shawn Green et Daphne Bavelier (2003) et la mesure numérique à haute résolution (Woods et al., 2015), l'exercice vous fait pratiquer une visée sélective et la retenue du tir sous contrainte de temps.",
      "Protocole de mesure : chaque action est mesurée en millisecondes avec performance.now() localement dans votre navigateur sans aucune fuite de données. Contraintes matérielles : les minuteurs web intègrent une précision de 1 ms, et les écrans se rafraîchissent par paliers de 16,7 ms (60 Hz), 6,9 ms (144 Hz) et 4,1 ms (240 Hz). Le taux de rafraîchissement de la souris génère 8 ms à 125 Hz contre 1 ms à 1000 Hz (Woods et al., 2015). Évaluez votre évolution sur un équipement identique."
    ],
    benchmarks: {
      title: "Lire l'écran de résultats",
      headers: ["Valeur", "Comment le drill la compte", "Signification", "Progresser"],
      rows: [
        ["Précision", "(touches rouges + jaunes) ÷ tous les clics", "Part des tirs correctement priorisés", "Comparer ses propres valeurs sur le même appareil"],
        ["Menaces éliminées", "Touches sur cibles rouges et jaunes", "Quantité de menaces traitées dans le temps", "Augmenter en gardant le combo"],
        ["Tir allié / erreur de priorité", "Tir sur un vert, ou sur un jaune quand un rouge est visible", "Échec de retenue ou d'évaluation des menaces", "Chercher le rouge en premier"],
        ["Combo max · niveau record", "Touches sans erreur d'affilée, 1 niveau par 1400 points", "Régularité et difficulté atteinte", "Réduire les erreurs avant la vitesse"]
      ],
      note: "Ce tableau décrit les valeurs que ce drill enregistre réellement ; il ne s'agit ni de rangs, ni de paliers, ni de statistiques d'utilisateurs."
    },
    techniques: {
      title: "Protocoles Fondés sur la Science pour Perfectionner la Priorisation",
      items: [
        {
          name: "Inhibition Motrice Exécutive (Discipline Go/No-Go)",
          desc: "Entraînez le blocage délibéré du clic réflexe dès l'apparition d'un mouvement. Conditionnez votre index à patienter jusqu'à validation de la couleur par le cortex visuel avant d'actionner le commutateur de tir.",
          tips: "Gardez votre doigt légèrement posé sur le bouton gauche, sans tension musculaire préalable."
        },
        {
          name: "Balayage Dynamique de la Hiérarchie des Dangers",
          desc: "Inspectez la zone en recherchant prioritairement la couleur de danger critique (rouge). Neutralisez l'urgence absolue avant de consacrer votre visée aux menaces secondaires en compte à rebours (jaune).",
          tips: "Réglez toutes les cibles rouges avant de changer d'axe ; considérez les jaunes comme des urgences imminentes."
        },
        {
          name: "Suppression des Distracteurs Périphériques",
          desc: "Apprenez à occulter les éléments neutres ou alliés verts émergeant en périphérie, maintenant votre regard fovéal sur les couloirs occupés par des hostiles.",
          tips: "Ne détournez pas le réticule vers des silhouettes vertes même si elles se situent près de votre trajectoire."
        },
        {
          name: "Visée Balistique Cadencée et Arrêt Net",
          desc: "Considérez chaque flick comme un acte réfléchi et rythmé. Accélérez franchement vers le centre de la cible prioritaire et immobilisez la souris avec fermeté sur le tapis.",
          tips: "Privilégiez un déplacement net et contrôlé plutôt qu'une succession de secousses sans contrôle chromatique."
        }
      ]
    },
    steps: [
      "Réglez la sensibilité pour rester proche de votre jeu habituel, puis lancez le drill.",
      "Concentrez votre regard au centre sans forcer et attendez l'apparition simultanée de cibles rouges, jaunes et vertes.",
      "Repérez et neutralisez les cibles rouges d'urgence avec des tirs nets (+100 PTS / +2 s au chronomètre, 60 s maximum).",
      "Éliminez les cibles jaunes secondaires (+50 PTS / +2 s) seulement quand aucune rouge n'est visible, avant qu'elles ne virent au rouge.",
      "Retenez impérativement votre tir face aux cibles vertes alliées ; tirer dessus, toucher une jaune quand une rouge est visible ou rater remet le combo à zéro."
    ],
    audience: "Joueurs compétitifs sur Valorant, Counter-Strike 2, Rainbow Six Siege et Apex Legends cherchant à éliminer les tirs réflexes, à maîtriser la discipline de tir et à dominer les combats à cibles multiples.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'green2003', 'donders1969', 'treisman1980', 'logan1984'),
    related: [
      { href: "/fr/drills/fps/target-acquisition", label: "Entraînement Acquisition de Cibles" },
      { href: "/fr/drills/fps/target-switching-swarm", label: "Entraînement Target Switching Swarm" },
      { href: "/fr/drills/fps/vertical-air-track", label: "Entraînement Poursuite Aérienne Verticale" },
      { href: "/fr/drills/fps/strafe-tracking", label: "Entraînement Strafe Tracking" },
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement Flick Shot" }
    ]
  };

  const copyFr = {
    h1Keyword: "Priorisation des cibles",
    h1Suffix: " – choix de cible en FPS",
    subtitle: "Choisissez la cible la plus dangereuse et contrôlez votre tir sous pression dans le navigateur.",
    statScore: "Score",
    statTime: "Temps",
    statAccuracy: "Précision",
    statBestScore: "Record",
    statThreatsCleared: "Menaces Éliminées",
    statMaxCombo: "Combo Max",
    statPeakLevel: "Niveau Record",
    startTitle: "Priorisation des cibles",
    startSubtitle: "Évaluation des Menaces · Filtrage Cognitif · Niveaux Dynamiques",
    getReady: "PRÉPAREZ-VOUS",
    toggleFlash: "Basculer le Flash d'Échec",
    toggleSound: "Basculer le Son",
    pausedTitle: "Jeu en Pause",
    pausedSubtitle: "Cliquez pour reprendre — le verrouillage du pointeur sera réactivé.",
    stageCaption: "Neutralisez d'abord les cibles rouges prioritaires puis les jaunes. Retenez votre tir sur les alliés verts !",
    rulesTitle: "Consignes de l'Exercice et Barème",
    rulesItems: [
      { num: "1", text: "Cible Haute Menace", highlight: "Rouge (+100 PTS / +2s, max 60s)", result: "Priorité Absolue" },
      { num: "2", text: "Menace Moyenne", highlight: "Jaune (+50 PTS / +2s)", result: "Points seulement sans rouge visible ; devient rouge après un délai" },
      { num: "3", text: "Unité Alliée", highlight: "Vert (NE PAS TIRER)", result: "Tir allié, erreur de priorité ou tir manqué : reset combo (-1s)" },
      { num: "4", text: "Niveau Supérieur", highlight: "+1 / 1400 PTS", result: "Progression Dynamique Continue" }
    ],
    aboutTitle: "À propos de ce drill de priorisation des cibles",
    aboutHeading: "Qu'est-ce que la Priorisation des Cibles ?",
    aboutText: "La priorisation des cibles est la capacité de sélectionner rapidement la menace à abattre tout en retenant son tir sur le reste de la scène. Interrompre un geste déjà enclenché est un processus distinct qui fait la course avec l'ordre de tir (Logan & Cowan, 1984) — c'est pourquoi retenir son tir est plus difficile que presser la détente. Ce drill l'entraîne avec la règle rouge avant jaune et aucun tir sur le vert."
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
      <TargetPrioritizationClient copy={copyFr} />
      <DrillGuide guide={targetPrioritizationGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
