import RecoilControlClient from '@/app/drills/fps/recoil-control/RecoilControlClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Contrôle du Recul | Entraînement Spray FPS | SkillDrills",
  description: "Entraînement gratuit au contrôle du recul dans le navigateur : pratiquez les motifs de spray sur CS2, Valorant et les FPS.",
  keywords: [
    "contrôle du recul",
    "recoil control",
    "contrôle du spray",
    "entraînement recul FPS",
    "motif de spray",
    "spray FPS",
    "recul CS2",
    "recul Valorant",
    "compensation du recul",
    "entraîneur recoil en ligne",
    "contrôle du recul vertical",
    "contrôle du recul horizontal"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/recoil-control",
    languages: getAlternateLanguages('/drills/fps/recoil-control'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Contrôle du Recul | Entraînement Spray FPS | SkillDrills",
    description: "Entraînement gratuit au contrôle du recul dans le navigateur : pratiquez les motifs de spray sur CS2, Valorant et les FPS.",
    url: "https://skilldrills.online/fr/drills/fps/recoil-control",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Contrôle du Recul | Entraînement Spray FPS | SkillDrills",
    description: "Entraînement gratuit au contrôle du recul dans le navigateur : pratiquez les motifs de spray sur CS2, Valorant et les FPS.",
  },
};

export default function RecoilControlPage() {
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
        "name": "Contrôle du Recul",
        "item": "https://skilldrills.online/fr/drills/fps/recoil-control"
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Entraîneur de Contrôle du Recul SkillDrills",
    "url": "https://skilldrills.online/fr/drills/fps/recoil-control",
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
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Entraînement Contrôle du Recul et Spray",
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
    "name": "Recoil Control Pattern Trainer",
    "description": "Simulateur de compensation motrice et motifs de recul d'armes avec verrouillage de curseur.",
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
        "name": "Qu'est-ce que le contrôle du recul (Recoil Control) dans les FPS ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le contrôle du recul est la capacité neuromotrice à contrecarrer la montée et les oscillations latérales du viseur lors d'un tir continu en déplaçant la souris dans la direction opposée au motif de dispersion de l'arme."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi les 8 à 10 premières balles sont-elles la phase cruciale d'un spray ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dans la majorité des shooters tactiques, les 8 à 10 premiers tirs présentent une ascension purement verticale hautement prévisible. Le motif de cet exercice suit la même logique : environ 10 balles de montée verticale, puis des oscillations latérales. Maîtriser cette première phase est donc la priorité."
        }
      },
      {
        "@type": "Question",
        "name": "Comment le recul diffère-t-il entre CS2, Valorant et Apex Legends ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dans CS2, chaque arme possède un spray pattern fixe et rigoureusement reproductible. Dans Valorant, la montée verticale est fixe mais les oscillations horizontales terminales intègrent de l'aléatoire. Dans Apex Legends, le recul est continu et conçu pour le suivi sur cibles mobiles."
        }
      },
      {
        "@type": "Question",
        "name": "Comment la théorie du Programme Moteur Généralisé (GMP) théorise-t-elle le spray ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selon Schmidt & Lee (2011), le système nerveux encode le schéma inverse de recul sous forme de programme moteur en boucle ouverte. Comme le motif est fixe, la descente peut commencer par anticipation, sans attendre de voir chaque impact."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce qu'un spray transfer et comment le réussir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le spray transfer consiste à rediriger une rafale continue d'une cible vers une seconde sans relâcher la détente, en ajustant à la fois le stade actuel de la dispersion et la distance angulaire jusqu'au nouvel adversaire."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est l'impact de la sensibilité et du tapis de souris sur le recul ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une sensibilité modérée accorde une meilleure finesse lors de la descente de l'avant-bras. Un tapis de souris offrant un bon pouvoir de freinage aide à stopper la descente au millimètre près."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il baisser la souris avec le poignet ou avec l'avant-bras ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour de courtes rafales de 5 à 7 tirs, les doigts et le poignet suffisent. Pour des sprays complets de 30 balles, l'avant-bras doit guider le mouvement descendant pour éviter de bloquer l'articulation du poignet."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre la dispersion (bloom) et le motif de recul ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le recul est le décalage géométrique et compensable du canon. La dispersion (bloom) représente la divergence conique stochastique de chaque balle qui ne peut pas être entièrement anticipée."
        }
      },
      {
        "@type": "Question",
        "name": "Cet entraînement au contrôle du recul est-il gratuit, et que faut-il ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, il est gratuit et tourne dans un navigateur PC récent, sans téléchargement ni compte. Il faut une souris : au démarrage, le curseur est verrouillé (Pointer Lock) et Échap ou la perte du verrouillage termine la session. Les appareils uniquement tactiles ne sont pas pris en charge."
        }
      },
      {
        "@type": "Question",
        "name": "À quelle fréquence s'entraîner au contrôle du recul ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quelques sessions de 10 à 15 minutes avant les parties classées suffisent en général. Des séances courtes et régulières valent mieux qu'une longue séance quand le bras fatigue."
        }
      },
      {
        "@type": "Question",
        "name": "Quel motif de spray et quelles règles utilise cet exercice ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un seul motif de 30 balles de type AK-47 : environ 10 balles de montée verticale, puis des oscillations gauche-droite. Ce n'est pas la copie exacte d'une arme d'un jeu précis. Le clic gauche maintenu tire toutes les 120 ms (500 coups/min) ; relâcher remet le motif à zéro. Après 30 balles, rechargement automatique en 1,2 s. Tête 100, poitrine 40, membres 20 points, multipliés par le combo et le niveau ; un tir manqué remet le combo à zéro. Le chrono démarre à 45 s et les touches ne l'allongent pas. Tous les 1400 points, le niveau monte et la cible accélère avec un recul plus fort."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Maîtriser le Contrôle du Recul dans les FPS",
    "description": "Méthode rigoureuse pour mémoriser les motifs de dispersion et compenser le recul des armes.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Configuration et Verrouillage du Curseur",
        "text": "Réglez la sensibilité globale sur la page /drills puis cliquez sur Démarrer ; le pointeur se verrouille après le compte à rebours."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Descente Verticale au Démarrage",
        "text": "Dès le premier tir de la rafale, abaissez la souris de façon fluide à la vitesse exacte de la montée de l'arme."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Compensation des Décalages Latéraux",
        "text": "Après la dixième balle, modulez le geste latéralement à l'opposé des oscillations du motif du spray."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Maintien du Groupement Central",
        "text": "Conservez les impacts concentrés dans la zone centrale de la cible pour maximiser votre multiplicateur de score."
      }
    ]
  };

  const copyFr = {
    h1Keyword: "Contrôle du Recul",
    h1Suffix: " – Entraînement Spray FPS",
    caption: "Entraînement gratuit au contrôle du recul : maintenez le clic sur une cible mobile et descendez la souris à l'opposé du motif de spray pour garder vos balles sur la tête et le torse.",
    statScore: "Score",
    statTime: "Temps",
    statAccuracy: "Précision",
    statBest: "Record",
    statAmmo: "Munitions",
    statReloading: "RECHARGEMENT...",
    pausedTitle: "Jeu en Pause",
    pausedPrompt: "Cliquez sur la zone de jeu pour réactiver le verrouillage du curseur.",
    startTitle: "Entraînement au Contrôle du Recul",
    startSubtitle: "Motif de Spray type AK-47 et Compensation • Progression Continue",
    startButtonText: "DÉMARRER L'ENTRAÎNEMENT",
    getReady: "PRÊT ?",
    statHeadshots: "Headshots",
    statMaxCombo: "Combo Max",
    statPeakLevel: "Niveau Max",
    playAgainText: "REJOUER",
    shareText: "PARTAGER LE RÉSULTAT",
    rulesTitle: "Consignes d'Entraînement et Barème",
    rulesItems: [
      { num: "1", text: "Tir à la Tête Précis", highlight: "+100 PTS (sans bonus de temps)", result: "×Multiplicateur de Combo" },
      { num: "2", text: "Tirs Poitrine & Membres", highlight: "+40 / +20 PTS", result: "Maintient la Série de Combo" },
      { num: "3", text: "Progression de Niveau", highlight: "+1 Niveau / 1400 PTS", result: "Accélère Vitesse & Recul" },
      { num: "4", text: "Discipline de Chargeur", highlight: "<40% Pénalité", result: "Réinitialise le Combo (-0,6s si pénalité activée)" }
    ],
    aboutTitle: "À propos du Contrôle du Recul et du Spray",
    aboutHeading: "Qu'est-ce que le Contrôle du Recul (Recoil) ?",
    aboutText: "Le recul est le relèvement mécanique du canon lors d'un tir en rafale automatique. Sa compensation repose sur des programmes moteurs en boucle ouverte (Schmidt & Lee, 2011) qui anticipent la trajectoire sans subir le temps de réaction visuel."
  };

  const recoilControlGuide = {
    heading: "Guide du Contrôle du Recul et des Motifs de Spray FPS",
    intro: [
      "Cet entraînement au contrôle du recul se joue dans le navigateur : vous maintenez le clic gauche sur une cible qui se déplace latéralement et compensez un spray de 30 balles de type AK-47 en descendant la souris puis en corrigeant à gauche et à droite. Si moins de 40 % d'un chargeur touche, le combo tombe. Un échauffement de spray control pour CS2, Valorant, Apex Legends et PUBG.",
      "Les fusils automatiques des jeux tirent souvent à plusieurs centaines de balles par minute (500 coups/min ici, une balle toutes les 120 ms). Comme le motif est fixe, la compensation peut s'appuyer sur un programme moteur en boucle ouverte appris à l'avance (Schmidt & Lee, 2011) plutôt que sur une correction balle par balle.",
      "L'exercice structure le geste en deux séquences indispensables : une traction verticale fluide sur les 10 premières balles environ, puis une modulation latérale corrective sur le reste du chargeur, sur le modèle des fusils d'assaut courants.",
      "Avec la Pointer Lock API, chaque balle est comptée en zone tête, poitrine ou membres selon l'endroit où elle tombe (réticule + décalage du recul). Une traction trop forte fait passer les balles sous la cible, une traction trop faible au-dessus.",
      "Mode de mesure : la précision globale par chargeur et la concentration des tirs sont mesurées localement en temps réel dans votre navigateur. Les variations inférieures à 5 ms relèvent des marges usuelles de rafraîchissement d'écran et d'échantillonnage de souris."
    ],
    benchmarks: {
      title: "Paliers d'entraînement SkillDrills : précision par chargeur",
      headers: ["Niveau de Maîtrise", "Précision par Chargeur (%)", "Caractéristiques du Contrôle Moteur", "Impact Compétitif en Match"],
      rows: [
        ["Tier 1 (Laser Apex)", "78% – 90%+", "Vitesse de compensation quasi parfaite ; micro-ajustements latéraux constants sur les 30 balles", "Entraîne les spray transfers entre plusieurs cibles avec une compensation stable"],
        ["Tier 2 (Palier Intermédiaire-Haut)", "62% – 78%", "Groupement chirurgical sur les 10 premières balles ; recentrage rapide lors des inversions de spray", "Sprays stables à moyenne distance ; prêt à travailler les spray transfers"],
        ["Tier 3 (Haut Niveau FPS)", "48% – 62%", "Bonne traction verticale ; légères hésitations ou surcompensation entre les balles 12 et 25", "Sprays fiables à courte et moyenne distance ; légère difficulté sur transferts lointains"],
        ["Tier 4 (Intermédiaire)", "35% – 48%", "Vitesse de descente instable ; hésitation vers la septième balle laissant le canon dépasser la tête", "Vulnérable lors des duels directs en tir continu ; contraint de privilégier de courtes rafales"],
        ["Tier 5 (En Progression)", "Moins de 35%", "Traction verticale tardive ou excessive ; absence d'ajustement latéral créant une dispersion anarchique", "Pertes fréquentes de duels directs ; dispersion totale des tirs autour de la cible"]
      ],
      note: "Paliers propres à SkillDrills, pas des normes scientifiques, des statistiques d'utilisateurs ni des rangs de jeu. Précision = balles touchées ÷ balles tirées."
    },
    techniques: {
      title: "Protocoles Scientifiques pour Perfectionner le Contrôle du Recul",
      items: [
        {
          name: "Décomposition du Spray en Deux Temps Moteurs",
          desc: "Abordez le chargeur comme deux mouvements distincts : une descente verticale ferme et continue sur les 10 premières balles, puis des micro-ajustements latéraux au bout des doigts.",
          tips: "La majorité des éliminations tactiques interviennent dans les 8 premiers tirs ; privilégiez la perfection de la descente initiale."
        },
        {
          name: "Guidage par l'Avant-Bras pour Libérer le Poignet",
          desc: "Faites glisser l'avant-bras sur le bureau pour assurer la descente régulière sans casser excessivement le poignet vers le bas.",
          tips: "Un poignet trop plié vers l'avant bloque la mobilité latérale requise pour corriger les oscillations finales du spray."
        },
        {
          name: "Exploitation de la Friction Dynamique du Tapis",
          desc: "Appliquez une pression descendante modérée et constante pour engager la friction dynamique du tapis et stabiliser la descente.",
          tips: "Un tapis avec une texture équilibrée évite les à-coups brusques lors des tractions verticales soutenues."
        },
        {
          name: "Fixation Visuelle sur la Cible et Non sur le Réticule",
          desc: "Gardez le regard rivé sur la silhouette ennemie. Laissez la main réaliser le geste inverse de façon automatisée.",
          tips: "Suivre des yeux le réticule plutôt que la cible retarde les corrections et disperse la rafale."
        }
      ]
    },
    steps: [
      "Réglez la sensibilité globale sur la page /drills (1,00x = 30 cm/360), puis cliquez sur Démarrer pour activer le Pointer Lock.",
      "Dès le départ du tir, abaissez la souris de façon continue pour neutraliser la montée verticale initiale.",
      "Après la dixième balle, modulez le geste latéralement à l'opposé des oscillations du spray.",
      "Maintenez le groupement serré au centre de la silhouette pour faire grimper votre multiplicateur et progresser de niveau."
    ],
    audience: "Joueurs PC de CS2, Valorant, Apex Legends et PUBG qui veulent travailler le contrôle du recul en tir automatique dans le navigateur.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'woodworth1899'),
    related: [
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement Flick Shot" },
      { href: "/fr/drills/fps/pro-smooth-pursuit", label: "Tracking Fluide Professionnel" },
      { href: "/fr/drills/fps/micro-correction-precision", label: "Micro-Correction de Visée" },
      { href: "/fr/drills/fps/anti-strafe-jitter-duel", label: "Duel Anti-Strafe Jitter" }
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

      <RecoilControlClient copy={copyFr} />

      <DrillGuide guide={recoilControlGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
