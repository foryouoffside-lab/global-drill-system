import ProSmoothPursuitClient from '@/app/drills/fps/pro-smooth-pursuit/ProSmoothPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Smooth Tracking : suivi fluide en FPS | SkillDrills",
  description: "Smooth tracking gratuit dans le navigateur : gardez le réticule sur une cible qui glisse sur des courbes de Lissajous. Tracking fluide pour Apex et OW2.",
  keywords: [
    "smooth tracking",
    "tracking fluide",
    "suivi fluide FPS",
    "entraînement tracking",
    "suivi de cible en courbe"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/pro-smooth-pursuit",
    languages: getAlternateLanguages('/drills/fps/pro-smooth-pursuit'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Smooth Tracking : suivi fluide en FPS | SkillDrills",
    description: "Smooth tracking gratuit dans le navigateur : gardez le réticule sur une cible qui glisse sur des courbes de Lissajous. Tracking fluide pour Apex et OW2.",
    url: "https://skilldrills.online/fr/drills/fps/pro-smooth-pursuit",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Smooth Tracking : suivi fluide en FPS | SkillDrills",
    description: "Smooth tracking gratuit dans le navigateur : gardez le réticule sur une cible qui glisse sur des courbes de Lissajous. Tracking fluide pour Apex et OW2.",
  },
};

export default function ProSmoothPursuitPage() {
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
        "name": "Smooth Tracking : suivi fluide en FPS",
        "item": "https://skilldrills.online/fr/drills/fps/pro-smooth-pursuit"
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Smooth Tracking : suivi fluide en FPS",
    "url": "https://skilldrills.online/fr/drills/fps/pro-smooth-pursuit",
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
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "Smooth Tracking - tracking fluide",
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
    "name": "Smooth Tracking - suivi en courbe",
    "description": "Simulateur de poursuite continue sur courbes harmoniques de Lissajous avec verrouillage du curseur.",
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
        "name": "Qu'est-ce que le Smooth Pursuit (poursuite visuelle fluide) dans les FPS ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Smooth Pursuit est la capacité neuro-oculaire et motrice de synchroniser la vitesse de la souris avec celle d'une cible en mouvement continu, permettant de coller le réticule sans interruption sur la hitbox adverse."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence neurologique entre poursuite visuelle et saccades ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les saccades (flicks) sont des mouvements balistiques brusques régulés par le colliculus supérieur, tandis que le Smooth Pursuit mobilise le cortex visuel temporal médian (aire MT/V5) et le cervelet pour moduler une vitesse constante et continue sans coupures perceptives."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi ma visée tremble-t-elle lors du suivi de trajectoires en courbe ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le tremblement apparaît lorsqu'un joueur tente de suivre la cible via de micro-flicks successifs au lieu d'un balayage fluide. Une tension musculaire excessive dans le poignet induit une friction statique qui brise la linéarité du geste."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'anticipation fovéale (Foveal Gaze Leading) en tracking ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il s'agit de regarder la cible et sa direction de déplacement plutôt que votre réticule. Le regard précède souvent le geste, ce qui aide à se préparer aux changements de courbure."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi le Smooth Pursuit est-il indispensable sur Apex Legends et Overwatch 2 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dans les jeux à Time-to-Kill élevé, éliminer un ennemi exige de maintenir un tir nourri pendant plusieurs secondes au fil de glissades ou sauts aériens. Une visée fluide maximise les dégâts par seconde (DPS) sans dispersion inutile."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce qu'une courbe de Lissajous et pourquoi l'utiliser pour s'entraîner ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les courbes de Lissajous sont des figures géométriques harmoniques formées par la superposition de mouvements sinusoïdaux sur deux axes. Elles obligent à moduler en continu accélérations et décélérations sur les deux axes, sans trajectoire rectiligne à mémoriser."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est l'impact de la fréquence de l'écran et du polling rate sur le tracking ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un écran plus rapide raccourcit l'intervalle entre images (60 Hz ≈ 16,7 ms, 144 Hz ≈ 6,9 ms), ce qui affiche les courbes plus finement. Un polling rate de 1000 Hz rafraîchit la position de la souris environ chaque milliseconde. L'entraînement et les différences individuelles pèsent toutefois souvent plus que le matériel."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle prise en main de souris apporte la meilleure stabilité en suivi continu ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une prise Palm ou Claw détendue assure un bon contact avec la coque de la souris, permettant aux grands groupes musculaires de l'avant-bras et de l'épaule de guider le déplacement sans accumuler de tension parasite dans le poignet."
        }
      },
      {
        "@type": "Question",
        "name": "À quelle fréquence s'entraîner à la poursuite visuelle fluide ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Des sessions régulières de 10 à 15 minutes avant les matchs compétitifs sont recommandées. Le tracking continu mobilisant une grande concentration sensorimotrice, de courtes pauses préservent les tendons des avant-bras."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi quitter la cible réinitialise-t-il le combo dans cet entraîneur ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le multiplicateur récompense le contact ininterrompu. Sur la cible, vous gagnez 50 points de base toutes les 0,25 s (multipliés par le combo et le niveau) et 0,1 s de temps (60 s restantes au maximum) ; chaque seconde sans décrocher ajoute 1 au combo, jusqu'à 3,0×. Si vous restez 1 s d'affilée hors de la cible, le combo retombe à 0. La partie démarre à 45 s."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Maîtriser le Tracking Fluide et Suivi en Courbe",
    "description": "Méthode pas à pas pour synchroniser la vitesse de déplacement et éliminer les tremblements sur cible mobile.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibration et Verrouillage du Curseur",
        "text": "Réglez le multiplicateur de sensibilité dans les paramètres de /drills, puis lancez le drill : le curseur est verrouillé (Pointer Lock) après le compte à rebours."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Verrouillage Initial sur la Cible",
        "text": "Dès l'apparition de la sphère oscillante, placez le réticule au centre d'un geste souple et continu."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Guidage Continu par l'Avant-Bras",
        "text": "Suivez les courbures de Lissajous en mobilisant l'avant-bras avec une pression constante et une vitesse modulée."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Maintien de la Série de Combo",
        "text": "Restez collé à la sphère lors des décélérations aux sommets de courbe pour accumuler le multiplicateur de score maximal."
      }
    ]
  };

  const copyFr = {
    h1Keyword: "Smooth Tracking",
    h1Suffix: " : suivi fluide en FPS",
    statScore: "Score",
    statTime: "Temps",
    statAccuracy: "Précision",
    statBestScore: "Record",
    pausedTitle: "Jeu en Pause",
    pausedSubtitle: "Cliquez sur la zone de jeu pour réactiver le verrouillage du curseur.",
    startTitle: "Smooth Tracking",
    startSubtitle: "Courbes de Lissajous • Pointer Lock • Progression Continue",
    getReady: "PRÊT ?",
    stageCaption: "Suivez en continu la cible oscillante le long des courbes sans perdre le contact visuel.",
    rulesTitle: "Consignes d'Entraînement et Barème",
    rulesItems: [
      { num: "1", text: "Maintien sur Cible", highlight: "+50 PTS / 0,25s (+0,4s/s)", result: "×Multiplicateur Combo" },
      { num: "2", text: "1s Sans Décrocher", highlight: "Combo +1, jusqu'à 3,0×", result: "Multiplicateur Max" },
      { num: "3", text: "Progression Niveau", highlight: "+1 Niveau / 1400 PTS", result: "Courbes Adaptatives" },
      { num: "4", text: "Perte de Contact", highlight: "1,0s d'affilée hors cible", result: "Reset Combo" }
    ],
    aboutTitle: "À propos du smooth tracking",
    aboutHeading: "Qu'est-ce que la Poursuite Visuelle Fluide (Smooth Pursuit) ?",
    aboutText: "La poursuite visuelle fluide (Smooth Pursuit) est la capacité oculomotrice à maintenir le regard sur un objet en mouvement continu par une modulation précise de la vitesse oculaire et de l'avant-bras (Krauzlis, 2004 ; Barnes, 2008). Cet exercice élimine les micro-flicks superflus pour transformer votre visée en un faisceau régulier et constant."
  };

  const smoothPursuitGuide = {
    heading: "Smooth Tracking : guide du suivi fluide en FPS",
    intro: [
      "Le smooth tracking consiste à maintenir le réticule sur une cible mobile sans à-coups. Ce drill fait glisser une cible ronde sur des courbes de Lissajous et mesure le pourcentage de temps passé dessus, pour travailler le tracking fluide utile dans Apex, Overwatch 2 et les autres FPS à TTK long.",
      "Contrairement aux flicks balistiques régis par la loi de Fitts (1954), la poursuite fluide sollicite des réseaux corticaux spécialisés dans l'aire temporale médiane (MT/V5) et le cervelet (Krauzlis, 2004 ; Lisberger et al., 1987). Ces structures décodent les vecteurs de flux optique et ajustent le gain neuromusculaire pour épouser l'accélération adverse.",
      "La trajectoire du module s'appuie sur des courbes harmoniques de Lissajous combinant des fonctions sinusoïdales sur les axes horizontaux et verticaux. Cette structure empêche toute prévisibilité linéaire, stimulant un contrôle moteur anticipateur (Barnes, 2008) sans générer de saccades correctives saccadées.",
      "En combinant l'API Pointer Lock à une chronométrie haute précision via performance.now() (Woods et al., 2015), cet outil mesure le temps de maintien effectif sur la cible pour suivre votre régularité d'une séance à l'autre.",
      "Mode de mesure : le temps de contact et la régularité du faisceau sont calculés localement à chaque trame. Les variations inférieures à 5 ms relèvent des tolérances normales d'affichage et d'échantillonnage de capteur."
    ],
    benchmarks: {
      title: "Smooth tracking : paliers SkillDrills",
      headers: ["Palier", "Temps sur Cible (%)", "Ce que l'on observe", "Axe de travail"],
      rows: [
        ["Palier 1", "85% – 95%+", "Le réticule reste sur la cible même aux sommets de courbe", "Tenir ce taux aux niveaux élevés"],
        ["Palier 2", "72% – 85%", "Freine proprement avec la cible aux sommets", "Ne pas décrocher dans la partie centrale rapide"],
        ["Palier 3", "58% – 72%", "Tracking stable sur les portions droites, brèves pertes aux inversions", "Ralentir avant le sommet"],
        ["Palier 4", "42% – 58%", "Micro-flicks au lieu d'un glissement ; à-coups dus à la crispation", "Relâcher la prise, guider depuis l'avant-bras"],
        ["Palier 5", "Moins de 42%", "Retard constant sur la cible, grosses corrections fréquentes", "Apprendre à rester sur la cible aux premiers niveaux"]
      ],
      note: "Le temps sur cible est la part des images où le réticule touche la cible. Paliers SkillDrills d'auto-évaluation, sans lien avec un rang en jeu, une norme de recherche ou des statistiques d'utilisateurs."
    },
    techniques: {
      title: "Quatre leviers pour un tracking fluide",
      items: [
        {
          name: "Balayage par l'Avant-Bras et Relâchement du Poignet",
          desc: "Effectuez la majorité du déplacement continu en faisant pivoter l'avant-bras depuis le coude, tout en maintenant le poignet relâché pour éviter la friction statique créatrice de saccades.",
          tips: "Posez confortablement l'avant-bras sur le bureau pour offrir un plan d'appui stable lors des grandes trajectoires."
        },
        {
          name: "Anticipation Visuelle Fovéale (Gaze Leading)",
          desc: "Regardez la cible et sa direction de déplacement plutôt que votre réticule, pour mieux anticiper les changements de vitesse.",
          tips: "Ne fixez pas votre propre réticule ; concentrez votre attention sur le bord avant de la cible mobile."
        },
        {
          name: "Transition Continue aux Points d'Inflexion",
          desc: "Aux sommets de courbe où la cible ralentit pour changer de direction, ne stoppez pas le mouvement brusquement. Décélérez progressivement et inversez la trajectoire avec souplesse.",
          tips: "Visualisez la courbe comme une onde sinusoïdale fluide plutôt que comme des lignes brisées."
        },
        {
          name: "Pression Constante sur le Tapis de Souris",
          desc: "Appliquez une pression descendante légère et constante pour garantir une résistance cinétique uniforme sous les patins de la souris tout au long du tracé.",
          tips: "Un tapis de souris avec une glisse homogène et une faible friction statique élimine les micro-blocages au départ des courbes."
        }
      ]
    },
    steps: [
      "Réglez le multiplicateur de sensibilité dans les paramètres de /drills et lancez le drill ; le curseur se verrouille après le compte à rebours.",
      "Dès que la cible mobile apparaît, amenez le réticule au centre avec un mouvement progressif.",
      "Épousez les ondulations de la courbe de Lissajous en déplaçant l'avant-bras à la même vitesse que la cible.",
      "Conservez le réticule sur la sphère sans interruption pour faire grimper votre combo et progresser vers les paliers exigeants."
    ],
    audience: "Compétiteurs d'Apex Legends, d'Overwatch 2 et de The Finals souhaitant éliminer les tremblements de visée et perfectionner un tracking de haute précision.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'barnes2008', 'krauzlis2004', 'lisberger1987'),
    related: [
      { href: "/fr/drills/fps/anti-zigzag-movement-trainer", label: "Entraîneur de Mouvement Anti-Zigzag" },
      { href: "/fr/drills/fps/anti-strafe-jitter-duel", label: "Tracking anti-strafe ADAD" },
      { href: "/fr/drills/fps/strafe-tracking", label: "Tracking aim : entraînement strafe" },
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement Flick Shot" },
      { href: "/fr/drills/fps/micro-correction-precision", label: "Micro-Correction de Visée" }
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

      <ProSmoothPursuitClient copy={copyFr} />

      <DrillGuide guide={smoothPursuitGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
