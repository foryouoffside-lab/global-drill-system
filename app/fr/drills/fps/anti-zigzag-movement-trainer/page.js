import AntiZigzagClient from '@/app/drills/fps/anti-zigzag-movement-trainer/AntiZigzagClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Aim Trainer | Tracking Évasif | SkillDrills",
  description: "Aim trainer gratuit dans le navigateur : suivez les déplacements en zigzag et les slide cancels en contrôlant l'overshoot.",
  keywords: [
    "aim trainer",
    "aim trainer en ligne",
    "aim trainer gratuit",
    "aim trainer valorant",
    "tracking zigzag",
    "mouvement évasif",
    "suivi de cible",
    "slide cancel",
    "visée contre déplacement",
    "tracking apex"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    languages: getAlternateLanguages('/drills/fps/anti-zigzag-movement-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
      title: "Aim Trainer | Tracking Évasif | SkillDrills",
    description: "Aim trainer gratuit dans le navigateur : suivez les déplacements en zigzag et les slide cancels en contrôlant l'overshoot.",
    url: "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
      title: "Aim Trainer | Tracking Évasif | SkillDrills",
    description: "Aim trainer gratuit dans le navigateur : suivez les déplacements en zigzag et les slide cancels en contrôlant l'overshoot.",
  },
};

export default function AntiZigzagFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînements FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Aim Trainer - tracking évasif", "item": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Aim Trainer - tracking évasif",
    "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Nécessite JavaScript et HTML5 Canvas avec Pointer Lock",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Entraîneur en ligne gratuit pour développer le tracking réactif face aux trajectoires en zigzag et aux slide cancels sur navigateur."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "Aim Trainer - tracking évasif",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-09-20",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Maîtrisez le tracking réactif face aux mouvements imprévisibles, aux zigzags en V et aux slide cancels avec Pointer Lock.",
    "genre": "Entraînement FPS / Anti-Zigzag",
    "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Aim Trainer - tracking évasif",
    "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    "description": "Simulateur de visée réactive contre cibles évasives en zigzag et slide cancels directement dans le navigateur.",
    "dateModified": "2026-09-20",
    "gamePlatform": "Web Browser",
    "genre": ["Entraînement FPS", "Entraîneur de Visée", "Tracking Réactif"],
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
        "name": "Pourquoi les joueurs zigzaguent-ils dans les FPS compétitifs ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les adversaires utilisent le zigzag pour briser l'alignement du viseur, imposant des inversions d'angles rapides qui dépassent le temps de réaction humain et exploitent les légers décalages de hitbox liés au netcode."
        }
      },
      {
        "@type": "Question",
        "name": "Comment suivre un ennemi en zigzag sur Apex Legends et Warzone ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Plutôt que de courir après les extrémités de la courbe de déplacement, ancrez votre viseur sur l'axe central (V-Crossover). Relâchez les muscles de l'avant-bras et adaptez la vitesse au moment où la cible repasse au centre."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que la technique d'ancrage sur le couloir central (V-Crossover) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La technique du V-Crossover consiste à stabiliser le viseur sur l'axe médian par lequel l'adversaire doit obligatoirement transiter pour changer de côté. Cela minimise le mouvement de souris et supprime le dépassement (overshoot)."
        }
      },
      {
        "@type": "Question",
        "name": "Comment maintenir le tracking sur des adversaires en slide cancel ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le slide cancel allie une accélération latérale avec un affaissement vertical soudain. Entraînez le tracking diagonal multi-axes sans anticiper aveuglément : attendez que l'animation s'engage avant d'ajuster au niveau du buste."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi le viseur dépasse-t-il la cible (overshoot) lors d'un virage ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'overshoot résulte d'une crispation excessive (death grip) et de coups saccadés. La contraction des muscles antagonistes empêche une décélération progressive, propulsant le viseur au-delà de la cible lors du freinage."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle sensibilité souris est recommandée pour le tracking évasif ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une sensibilité intermédiaire comprise entre 28 cm et 42 cm par tour de 360° assure un compromis idéal : assez vive pour absorber les grands angles rapprochés sans lever la souris, et stable pour bannir les tremblements."
        }
      },
      {
        "@type": "Question",
        "name": "Un écran à haut taux de rafraîchissement aide-t-il à suivre les zigzags ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Un écran 144 Hz ou 240 Hz actualise l'image toutes les 6,9 ms ou 4,1 ms (contre 16,7 ms à 60 Hz), éliminant le flou cinétique et dévoilant le freinage de l'adversaire plus tôt pour un décodage visuel accéléré."
        }
      },
      {
        "@type": "Question",
        "name": "Comment le zigzag désynchronise-t-il les hitboxes en réseau ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dans les netcodes avec compensation de lag et interpolation, les brusques changements de direction génèrent de fugaces discordances entre la hitbox calculée sur le serveur et le modèle affiché sur le client."
        }
      },
      {
        "@type": "Question",
        "name": "Comment maximiser le temps de maintien du réticule sur la cible (dwell time) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Améliorez votre dwell time en supprimant les micro-flicks paniqués. Fixez le buste du personnage et maintenez un glissement continu et souple de la main, en privilégiant la constance de contact sur les clics impulsifs."
        }
      },
      {
        "@type": "Question",
        "name": "L'entraînement anti-zigzag améliore-t-il les duels au corps à corps à la mitraillette ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument. Les affrontements rapprochés produisent les vitesses angulaires d'écran les plus extrêmes. Conditionner son tracking au zigzag procure le contrôle neuromusculaire indispensable pour maintenir des dégâts constants."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment S'entraîner au Tracking Anti-Zigzag et Mouvements Évasifs",
    "description": "Guide méthodique étape par étape pour maîtriser le tracking réactif face aux trajectoires imprévisibles.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrer sa Sensibilité",
        "text": "Harmonisez votre sensibilité de jeu dans les réglages pour vous entraîner avec une sensibilité familière.",
        "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Activer le Plein Écran et le Pointer Lock",
        "text": "Cliquez sur Démarrer pour passer en plein écran et verrouiller le curseur dans le Canvas.",
        "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "S'ancrer sur le Couloir Médian (V-Crossover)",
        "text": "Concentrez votre regard sur l'axe central de déplacement plutôt que de poursuivre avec précipitation les virages extérieurs.",
        "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Maintenir un Contact Continu (Dwell Lock)",
        "text": "Gardez le réticule à l'intérieur de la sphère pour consumer sa jauge de vie avant la fin du temps imparti et bâtir des combos.",
        "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer#step-4"
      }
    ]
  };

  const frGuide = {
    heading: "Aim Trainer pour Tracking Évasif et Déplacements en Zigzag",
    intro: [
      "Un aim trainer pour le tracking évasif apprend à garder le viseur sur la cible pendant les changements de direction, les slide cancels et les déplacements en zigzag. Ce drill mesure les inversions de sens, le contrôle de l'overshoot et le temps de contact sur Apex, Warzone et Overwatch 2.",
      "L'erreur technique dominante commise par les tireurs novices lors de manœuvres d'esquive réside dans le sur-tir (overshoot) au-delà du sommet extérieur de la courbe. Lorsqu'un ennemi trace un zigzag en V, sa vitesse horizontale tombe fugitivement à zéro au point d'inversion avant de réaccélérer en retraversant le centre. Tenter de chasser ce sommet excentré projette inévitablement la souris trop loin et paralyse les muscles antagonistes. Les joueurs d'élite adoptent la technique de l'ancrage central (V-Crossover) : ils fixent l'attention sur le couloir médian et effectuent des micro-ajustements souples dès que la cible croise à nouveau le réticule.",
      "Anti-Zigzag Aim Trainer s'exécute nativement dans votre navigateur via l'API Pointer Lock HTML5 et une horloge performance.now(). En jaugeant la constance de contact (dwell time) contre des fréquences d'esquive accrues, cet exercice travaille la sérénité neuromotrice pour réduire les micro-saccades de panique (Woods et al., 2015).",
      "Modalités de chronométrie : l'ensemble des métriques est mesuré localement par l'horloge haute résolution performance.now() du navigateur. Paramètres environnementaux : les navigateurs dégradent volontairement la granularité des temps à ~1 ms par mesure de protection contre Spectre ; les écrans quantifient l'information visuelle selon le taux de rafraîchissement (16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz). Le polling souris requiert ~1 ms à 1000 Hz. Les écarts inférieurs à 5 ms relèvent du bruit d'observation ; veillez à comparer vos sessions sur une configuration matérielle constante."
    ],
    benchmarks: {
      title: "Étapes Sensorimotrices & Latence d'Inversion de Trajectoire",
      headers: ["Phase de Tracking / Étape Sensorimotrice", "Plage de Latence Typique", "Voie Neurale & Fonction Biomécanique", "Implication en Combat"],
      rows: [
        ["Détection de l'Inversion Latérale-Diagonale", "160 – 210 ms", "Signaux de glissement rétinien décodés dans V1 et les régions visuelles médianes MT/V5", "Délai incompressible avant que l'œil ne constate le retournement de l'adversaire"],
        ["Freinage Antagoniste & Inversion Vectorielle", "85 – 135 ms", "Décharge motrice corticospinale aux fléchisseurs de l'avant-bras; arrêt de l'inertie", "Délai biomécanique indispensable pour stopper la souris et réenclencher l'opposé"],
        ["Réalignement Fovéal & Centrage du Viseur", "65 – 105 ms", "Micro-saccade de rattrapage et articulation subtile du poignet pour refaire contact", "Rétablissement de la présence sur la hitbox pour relancer les tics de dégâts"],
        ["Fenêtre Totale de Réacquisition Imprévue", "310 – 450 ms", "Délai cumulé entre la rupture de trajectoire et le verrouillage net du réticule", "Créneau naturel où les dégâts chutent face à un joueur doté d'un bon mouvement"],
        ["Tracking Évasif Avancé", "215 – 295 ms", "Amortissement anticipé de la vélocité et relâchement antagoniste au V-crossover", "Vise un schéma constant avec amortissement anticipé"]
      ],
      note: "Données synthétisées d'études oculomotrices (Rashbass, 1961; Krauzlis, 2004), des théories de contrôle de trajectoire (Accot & Zhai, 1997; Fitts, 1954) et de chronométrie numérique (Woods et al., 2015)."
    },
    techniques: {
      title: "Techniques Éprouvées Contre les Trajectoires en Zigzag",
      items: [
        {
          name: "Ancrage sur le Couloir Médian (V-Crossover)",
          desc: "Ne poursuivez pas les cibles aux sommets extrêmes de leur courbe où les inversions sont imprévisibles. Stabilisez votre viseur sur l'axe central où l'adversaire doit obligatoirement repasser.",
          tips: "Laissez la cible revenir vers votre réticule en adoptant une vitesse constante sans sursauter lors de l'inversion."
        },
        {
          name: "Atténuation Musculaire et Prise Souple",
          desc: "Crisper la main sur la souris force les muscles antagonistes à lutter les uns contre les autres lors d'inversions diagonales soudaines, créant des trajectoires heurtées.",
          tips: "Adoptez une prise en pince (claw) ou du bout des doigts (fingertip) détendue pour que le poignet amortisse les à-coups sans mobiliser l'inertie du bras."
        },
        {
          name: "Ancrage Visuel sur le Buste de la Cible",
          desc: "Fixez votre regard sur le centre de masse de l'adversaire plutôt que de regarder le point de votre viseur. Le cortex visuel dorsal extrait la direction et la vitesse à partir du mouvement rétinien.",
          tips: "Si vous constatez que votre viseur est perpétuellement en retard, dirigez 100 % de votre acuité visuelle sur la silhouette adverse."
        },
        {
          name: "Lecture des Trames de Décélération et de Bascule",
          desc: "Dans les jeux pourvus d'inertie (comme Warzone et Apex), les modèles de personnages penchent et affichent quelques trames de décélération avant d'inverser leur foulée.",
          tips: "Apprenez à identifier cette bascule corporelle 30 à 50 ms avant que le virage complet ne soit opéré."
        }
      ]
    },
    steps: [
      "Sélectionnez votre sensibilité habituelle pour vous entraîner avec une sensibilité familière.",
      "Cliquez sur Démarrer pour passer en plein écran et verrouiller le pointeur de souris.",
      "Fixez la sphère cible pendant qu'elle opère des zigzags diagonaux rapides et désordonnés.",
      "Conservez le réticule sur la sphère en privilégiant l'axe médian du V-Crossover.",
      "Détruisez les cibles avant l'expiration de leur temps imparti pour accroître vos multiplicateurs et monter de niveau."
    ],
    audience: "Joueurs compétitifs de FPS (Apex Legends, Call of Duty: Warzone, Overwatch 2, The Finals, CODM), adeptes des duels rapprochés et compétiteurs désireux de maîtriser les slide cancels et le desync.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'fitts1954', 'green2003', 'rashbass1961', 'accotZhai1997'),
    related: [
      { href: "/fr/drills/fps/anti-strafe-jitter-duel", label: "Entraînement Anti-Strafe Jitter" },
      { href: "/fr/drills/reaction-speed/fps-tracking-trainer", label: "Entraînement Tracking FPS" },
      { href: "/fr/drills/fps/pro-smooth-pursuit", label: "Tracking Fluide Smooth Pursuit" },
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement Flick Shot" },
      { href: "/fr/drills/visual/reaction-speed/light-reaction", label: "Test de Temps de Réaction" }
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
      <AntiZigzagClient
        copy={{
          startTitle: "Aim Trainer - tracking évasif",
          startSubtitle: "Tracking Réactif • Progression Infinie de Niveaux",
          getReady: "PRÉPAREZ-VOUS",
          pausedTitle: "EN PAUSE",
          pausedSubtitle: "Cliquez pour reprendre — le curseur de souris sera reverrouillé.",
          stageCaption: "Gardez votre réticule sur les cibles évasives aux trajectoires en zigzag imprévisibles. Concentrez-vous sur l'axe central !",
          rulesTitle: "Règles d'Entraînement & Système de Score",
          rulesItems: [
            { num: "1", text: "Alignement de Visée", highlight: "+50 PTS (+0.4s/s)", result: "×Mult de Combo" },
            { num: "2", text: "Destruction de Cible", highlight: "+25 PTS Bonus", result: "Reset HP & Respawn" },
            { num: "3", text: "Progression de Niveau", highlight: "+1 Niveau / 1400 PTS", result: "Zigzag Adaptatif" },
            { num: "4", text: "Fuite de Cible", highlight: "Temps Écoulé", result: "Réinitialise Combo (-0.6s)" }
          ],
          h1Keyword: "Aim Trainer",
          h1Suffix: " — tracking évasif et zigzag",
          aboutTitle: "À propos de l'aim trainer et du tracking évasif"
        }}
      />
      <DrillGuide guide={frGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
