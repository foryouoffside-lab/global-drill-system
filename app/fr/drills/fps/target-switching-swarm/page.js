import TargetSwitchingSwarmClient from '@/app/drills/fps/target-switching-swarm/TargetSwitchingSwarmClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Changement de cible : entraînement multi-cibles | SkillDrills',
  description: "Entraînement gratuit au changement de cible dans le navigateur : touchez 2 à 5 cibles mobiles à la suite. +2 s par touche (max 60 s), -1 s par clic manqué.",
  keywords: [
    'changement de cible',
    'changement de cible FPS',
    'target switching',
    'changement rapide de cible',
    'entraînement de visée FPS',
    'transition de cible',
    'flick enchaîné',
    'visée multi cibles',
    'vitesse de changement de cible',
    'précision souris gaming'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/fps/target-switching-swarm',
    languages: getAlternateLanguages('/drills/fps/target-switching-swarm'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Changement de cible : entraînement multi-cibles | SkillDrills',
    description: "Entraînement gratuit au changement de cible dans le navigateur : touchez 2 à 5 cibles mobiles à la suite. +2 s par touche (max 60 s), -1 s par clic manqué.",
    url: 'https://skilldrills.online/fr/drills/fps/target-switching-swarm',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Changement de cible : entraînement multi-cibles | SkillDrills',
    description: "Entraînement gratuit au changement de cible dans le navigateur : touchez 2 à 5 cibles mobiles à la suite. +2 s par touche (max 60 s), -1 s par clic manqué.",
  },
};

export default function TargetSwitchingSwarmFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînements FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Target Switching Swarm", "item": "https://skilldrills.online/fr/drills/fps/target-switching-swarm" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Saccade", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Changement de cible : entraînement multi-cibles",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any (Web Browser)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Entraînement gratuit au changement de cible dans le navigateur : 2 à 5 cibles mobiles qui rebondissent, à toucher les unes après les autres."
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Changement de cible : entraînement multi-cibles",
    "url": "https://skilldrills.online/fr/drills/fps/target-switching-swarm",
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
    "name": "Changement de cible : entraînement multi-cibles",
    "description": "Drill gratuit de changement de cible : un essaim de 2 à 5 cibles mobiles qui réapparaissent dès qu'elles sont touchées, pour travailler l'enchaînement.",
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
        "name": "Qu'est-ce que le target switching dans l'entraînement au tir FPS ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le target switching (changement de cible) est l'aptitude mécanique à détruire un premier ennemi et à transférer instantanément le viseur sur une seconde cible sans marquer de temps d'arrêt perceptif ni réinitialiser sa posture."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre le target switching et un flick shot classique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le flick classique se concentre sur un tir balistique isolé depuis une posture neutre. Le target switching exige d'enchaîner plusieurs flicks consécutifs avec un freinage précis au centre de chaque cible en conservant l'inertie du mouvement."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles sont les règles de cet entraînement au changement de cible ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le chrono démarre à 45 secondes. Selon le niveau, 2 à 5 cibles mobiles qui rebondissent restent à l'écran. Une touche rapporte +100 points multipliés par le combo et le niveau, et ajoute 2 secondes (60 maximum). Un clic dans le vide retire 1 seconde et remet le combo à zéro. Si l'option d'expiration des cibles est activée, une cible non touchée à temps (environ 2,8 secondes au début, moins aux niveaux supérieurs) disparaît et retire aussi 1 seconde. Le niveau monte tous les 2 100 points ; les cibles deviennent plus petites et plus rapides. Le drill se joue à la souris avec verrouillage du pointeur ; Échap le quitte."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi observe-t-on souvent une hésitation après avoir éliminé un adversaire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cette pause survient quand on attend le son ou l'animation de confirmation avant de chercher la cible suivante. Dans ce drill, une cible touchée disparaît aussitôt et une nouvelle apparaît : vous répétez le passage direct du regard et de la souris à la cible suivante."
        }
      },
      {
        "@type": "Question",
        "name": "Le changement de cible aide-t-il pour les spray transfers sur CS2 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En partie seulement. Ce drill compte des clics isolés et ne simule ni le recul ni le tir en rafale. Déplacer le réticule d'une cible à l'autre et s'arrêter net reste toutefois la base d'un spray transfer ; il sert donc d'exercice complémentaire."
        }
      },
      {
        "@type": "Question",
        "name": "Quels jeux compétitifs tirent le plus grand bénéfice du target switching ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Counter-Strike 2, Apex Legends, Overwatch 2 et Call of Duty, entre autres. Dans les FPS tactiques, il permet d'enchaîner des têtes en 1vX ; dans les battle royales, il permet de basculer de tir dès qu'un blindage est brisé."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle prise de souris (grip) optimise les enchaînements rapides de cibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les prises Claw grip et Fingertip grip sont idéales car elles combinent l'amplitude du bras pour les grands changements d'angle avec la mobilité des doigts pour effectuer des micro-arrêts millimétrés."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le rapport entre le target switching et la loi de Fitts ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selon la loi de Fitts (Fitts, 1954), le temps d'exécution dépend de la distance et de la taille de la cible. Cibler prioritairement les ennemis proches réduit la distance angulaire et accélère la cadence globale d'élimination."
        }
      },
      {
        "@type": "Question",
        "name": "À quelle fréquence convient-il de s'entraîner au target switching ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il n'existe pas de durée idéale prouvée. Quelques sessions concentrées en échauffement avant vos parties sont un bon point de départ ; comparez vos résultats sur le même matériel. Aucun progrès en match n'est garanti."
        }
      },
      {
        "@type": "Question",
        "name": "Cet entraîneur de target switching en ligne est-il gratuit et fluide ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, gratuit et sans téléchargement. Il tourne dans votre navigateur avec une souris et le verrouillage du pointeur ; il n'est pas jouable sur un appareil uniquement tactile."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Maîtriser le Target Switching et l'Enchaînement de Cibles FPS",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Régler la Sensibilité et Verrouiller le Curseur",
        "text": "Réglez la sensibilité sur la page /drills selon votre sensibilité en jeu, puis lancez ; le pointeur est verrouillé automatiquement."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Repérer les Groupes de Cibles les Plus Proches",
        "text": "Scannez l'arène pour identifier les cibles disposant de la plus faible séparation angulaire."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Détruire la Première Cible et Prolonger le Temps",
        "text": "Touchez la première cible pour gagner +100 points et ajouter 2 secondes au chrono (60 secondes maximum)."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Enchaîner la Cible Suivante sans Pause",
        "text": "Basculez directement sur la cible voisine sans marquer de temps d'arrêt pour valider le kill précédent."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Maintenir la Série de Combos et Gravir les Niveaux",
        "text": "Enchaînez les cibles avec précision pour augmenter le multiplicateur de combo et franchir les paliers de difficulté."
      }
    ]
  };

  const targetSwitchingGuide = {
    heading: "Changement de cible : enchaîner plusieurs cibles mobiles",
    intro: [
      "Cet entraînement gratuit au changement de cible garde en permanence 2 à 5 cibles mobiles qui rebondissent à l'écran. Dès que vous en touchez une, une autre apparaît : vous répétez le passage du réticule à la cible suivante sans pause de confirmation. Le chrono démarre à 45 secondes, chaque touche ajoute 2 secondes (60 maximum) et chaque clic manqué en retire 1 ; tant que vous touchez proprement, la session continue.",
      "La psychophysique du target switching repose sur la loi de Fitts (Fitts, 1954) et sur le modèle stochastique des sous-mouvements optimisés de David E. Meyer et al. (1988). Selon cette approche, un mouvement de visée comprend un sous-mouvement primaire rapide couvrant l'essentiel de la trajectoire, suivi de micro-ajustements secondaires guidés par la rétroaction visuelle. Beaucoup de joueurs marquent une courte pause après chaque tir pour vérifier que l'ennemi est tombé. Ce drill vise à déplacer le regard vers la cible suivante dès le clic pour raccourcir cette pause.",
      "L'indexation visuelle dans un groupe dense fait appel aux mécanismes d'intégration des caractéristiques et de recherche visuelle préattentionnelle (Anne M. Treisman & Garry Gelade, 1980 ; Jeremy M. Wolfe, 2007). On peut suivre quelques objets mobiles en même temps ; prévoir un ordre de passage court entre cibles proches rend les changements plus fluides.",
      "À propos des résultats : l'écran de fin affiche le score, la précision (touches ÷ clics totaux), les cibles détruites, le combo max et le niveau atteint. Votre meilleur score est enregistré uniquement dans ce navigateur. Ce drill ne mesure pas de temps de transition en millisecondes. La fréquence de l'écran et le polling rate de la souris changent les sensations : comparez-vous sur la même configuration."
    ],
    benchmarks: {
      title: "Paliers d'entraînement de précision au changement de cible",
      headers: ["Palier", "Précision", "Signification"],
      rows: [
        ["Palier 1", "95 % et plus", "Presque aucun clic dans le vide, même à haut niveau"],
        ["Palier 2", "88 – 95 %", "Quelques ratés sur les cibles rapides, le rythme d'enchaînement tient"],
        ["Palier 3", "80 – 88 %", "Dépassements lors des changements vers des cibles éloignées"],
        ["Palier 4", "70 – 80 %", "Les clics précipités font souvent perdre du temps"],
        ["Palier 5", "moins de 70 %", "Ralentir et sécuriser l'arrêt avant de chercher la vitesse"]
      ],
      note: "La précision est la valeur de l'écran de fin (touches ÷ clics totaux). Ces paliers sont des repères d'entraînement SkillDrills, pas des normes scientifiques, des rangs de jeu ni des statistiques d'utilisateurs."
    },
    techniques: {
      title: "Protocoles Scientifiques pour Perfectionner le Changement de Cible",
      items: [
        {
          name: "Pré-Routage Saccadique et Indexation Visuelle",
          desc: "Dirigez votre regard vers la cible suivante pendant que votre main finalise le tir sur la cible courante (Treisman & Gelade, 1980 ; Wolfe, 2007). En général, le regard atteint la cible avant la main.",
          tips: "Ne fixez jamais une cible après avoir tiré ; laissez la vision périphérique valider la destruction tandis que votre fovéa verrouille la prochaine cible."
        },
        {
          name: "Freinage Terminal et Contrôle des Sous-Mouvements",
          desc: "Appliquez une fermeté musculaire de contre-tension en fin de mouvement pour immobiliser la souris au centre sans rebond (Meyer et al., 1988).",
          tips: "Voyez votre souris comme un bolide avec des freins hydrauliques : accélérez fort au départ, puis bloquez net au centre du prochain blanc."
        },
        {
          name: "Enchaînement Spatial par Cibles Voisines",
          desc: "Éliminez les groupes de cibles présentant le moins d'écart angulaire plutôt que de traverser le moniteur de manière désordonnée (Fitts, 1954).",
          tips: "Neutralisez d'abord les binômes proches pour accumuler les points avant d'entamer de grandes diagonales."
        },
        {
          name: "Détente Musculaire et Micro-Ajustabilité",
          desc: "Adoptez une force de prise détendue (3 sur 10) pour permettre des micro-ajustements rapides avec les doigts sans verrouiller l'avant-bras.",
          tips: "Si vous ressentez des tensions ou des à-coups, relâchez consciemment la pression du pouce et de l'auriculaire."
        }
      ]
    },
    steps: [
      "Réglez la sensibilité sur la page /drills selon votre jeu, puis lancez (verrouillage du pointeur automatique).",
      "Identifiez les grappes de cibles proches afin de définir l'ordre d'élimination le plus court.",
      "Touchez la première cible pour obtenir +100 points × multiplicateurs de combo et de niveau et +2 s au chrono (60 s max).",
      "Transférez immédiatement votre visée sur la cible voisine sans marquer de temps de validation.",
      "Évitez les clics manqués (-1 s), enchaînez pour accroître le combo et atteignez des niveaux aux cibles plus petites et rapides."
    ],
    audience: "Joueurs de CS2, Apex Legends et Overwatch 2 qui veulent travailler à part le changement de cible entre plusieurs adversaires. Une souris est nécessaire.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/fr/drills/fps/target-prioritization", label: "Priorisation des Cibles FPS" },
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement au Flick Shot" },
      { href: "/fr/drills/fps/target-acquisition", label: "Acquisition de Cible FPS" },
      { href: "/fr/drills/fps/180-degree-awareness", label: "Perception 180° Pro" },
      { href: "/fr/drills/fps/recoil-control", label: "Contrôle du Recul" }
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

      <TargetSwitchingSwarmClient
        copy={{
          h1Keyword: "Changement de cible",
          h1Suffix: " : entraînement multi-cibles",
          subtitle: "Enchaînez rapidement et précisément plusieurs cibles mobiles, gratuitement dans le navigateur.",
          statScore: "Score",
          statTime: "Temps",
          statAccuracy: "Précision",
          statBestScore: "Meilleur Score",
          statTargetsDestroyed: "Cibles Détruites",
          statMaxCombo: "Combo Max",
          statPeakLevel: "Niveau Max",
          startTitle: "Target Switching Swarm",
          startSubtitle: "Pointer Lock • Progression Continue",
          stageCaption: "Touchez les cibles mobiles à la suite avant qu'elles disparaissent. Un clic manqué coûte 1 seconde et le combo.",
          rulesTitle: "Règles d'Entraînement & Système de Score",
          aboutTitle: "À Propos du Target Switching dans les FPS",
          rulesItems: [
            { num: "1", text: "Cible Touchée", highlight: "+100 PTS (+2s, max 60s)", result: "×Multiplicateur Combo" },
            { num: "2", text: "Essaim Continu", highlight: "Réapparition Immédiate", result: "2 à 5 cibles actives" },
            { num: "3", text: "Tir Manqué / Expiration", highlight: "Pénalité", result: "Reset de Combo (-1s)" },
            { num: "4", text: "Progression de Niveau", highlight: "+1 Niveau / 2 100 PTS", result: "Plus Rapide & Petit" }
          ]
        }}
      />
      <DrillGuide guide={targetSwitchingGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
