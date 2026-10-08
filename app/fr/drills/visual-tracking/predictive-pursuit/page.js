import PredictivePursuitClient from '@/app/drills/visual-tracking/predictive-pursuit/PredictivePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// FRENCH SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "poursuite oculaire prédictive" / "entraînement anticipation visuelle"
// Secondary:    "poursuite visuelle avec occlusion", "extrapolation trajectoire cible", "exercice de visée prédictive"
// LSI / Domain:  "mémoire de travail oculomotrice", "contrôle moteur par anticipation", "anticipation de trajectoire jeux de tir",
//               "suivi visuel sous masquage", "vision prédictive pour gamers", "acuité visuelle dynamique prédictive", "évaluation poursuite prédictive"
// Authentic Domain Terms: Poursuite Oculaire Prédictive（Predictive Smooth Pursuit）, Anticipation de Trajectoire（Trajectory Anticipation）, Occlusion Visuelle（Visual Occlusion）, Modèle Interne Cérébelleux（Internal Cerebellar Forward Model）, Contrôle Feedforward（Feedforward Control）, Gain sous Occlusion（Occlusion Gain）
// ============================================================

export const metadata = {
  title: "Poursuite oculaire prédictive | SkillDrills",
  description: "Suivez une cible mobile et estimez sa position après un bref masquage. Exercice gratuit dans le navigateur avec réaction et écart de trajectoire.",
  keywords: [
    "poursuite oculaire prédictive",
    "anticipation visuelle sport",
    "prédire trajectoire cible",
    "suivi d objet en mouvement",
    "entraînement sous masquage",
    "exercice de poursuite visuelle",
    "anticipation de trajectoire",
    "suivi oculaire en ligne",
    "entraînement vision dynamique",
    "écart de trajectoire cible"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Poursuite oculaire prédictive | SkillDrills",
    description: "Suivez une cible mobile et estimez sa position après un bref masquage. Exercice gratuit dans le navigateur avec réaction et écart de trajectoire.",
    type: "website",
    url: "https://skilldrills.online/fr/drills/visual-tracking/predictive-pursuit",
    siteName: "SkillDrills",
    locale: "fr_FR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Poursuite oculaire prédictive | SkillDrills",
    description: "Exercice court pour suivre une cible, maintenir son estimation pendant le masquage et observer l écart à sa réapparition.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/visual-tracking/predictive-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/predictive-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Exercices", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Poursuite Visuelle", "item": "https://skilldrills.online/fr/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "Poursuite Oculaire Prédictive", "item": "https://skilldrills.online/fr/drills/visual-tracking/predictive-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Entraînement de Poursuite Oculaire Prédictive",
  "operatingSystem": "Navigateur Web",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Exercice oculomoteur pour pratiquer l estimation de trajectoire et la poursuite pendant un bref masquage.",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Application de Poursuite Visuelle Prédictive",
  "url": "https://skilldrills.online/fr/drills/visual-tracking/predictive-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Tous les navigateurs modernes",
  "browserRequirements": "Nécessite la prise en charge de JavaScript et HTML5 Canvas",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Poursuite Oculaire Prédictive",
  "description": "Exercice neurovisuel où l utilisateur anticipe la trajectoire de cibles mobiles franchissant des zones d occlusion sans repères visuels directs.",
  "genre": ["Entraînement Visuel", "Visée Prédictive", "Entraînement des Réflexes"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Navigateur Web",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment Entraîner l Anticipation de Trajectoire avec la Poursuite Prédictive",
  "description": "Protocole structuré pour pratiquer l estimation d une trajectoire pendant un bref masquage.",
  "dateModified": "2026-09-20",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Encodage du Vecteur Initial",
      "text": "Fixez la cible durant les premiers 100 à 200 ms pour déterminer avec exactitude sa vitesse vectorielle et sa direction."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Extrapolation Mentale Continue",
      "text": "Dès que la cible disparaît sous masquage, maintenez la vitesse oculaire constante le long de la trajectoire projetée."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Inhibition des Saccades Parasites",
      "text": "Évitez tout saut de recherche anarchique dans l obscurité ; conservez la régularité du glissement oculaire."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Interception Fovéale à la Sortie",
      "text": "Placez la fovéa avec précision sur la coordonnée de réapparition à l instant où la cible redevient visible."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "En quoi consiste la poursuite oculaire prédictive ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C est un mécanisme neurovisuel où le cerveau extrapole la trajectoire d une cible temporairement masquée, guidant les yeux sans attendre de retour visuel direct (Barnes, 2008)."
      }
    },
    {
      "@type": "Question",
      "name": "Comment la poursuite prédictive surmonte-t-elle le temps de réaction biologique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le délai de rétroaction sensorimoteur est de 130 à 150 ms. Les commandes feedforward du cervelet anticipent la position future et annulent complètement ce retard (Robinson, 1965)."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles structures cérébrales soutiennent la poursuite sous masquage ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les champs oculaires frontaux (FEF) et la mémoire de travail visuelle conservent la représentation de vitesse, prolongeant le mouvement oculaire sans influx rétinien direct (Bennett & Barnes, 2003)."
      }
    },
    {
      "@type": "Question",
      "name": "Comment cet exercice peut-il soutenir la visée anticipée dans les jeux de tir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lorsqu un adversaire passe derrière un mur ou un fumigène, un joueur entraîné positionne son réticule sur le point de sortie avant l apparition, au lieu de réagir tardivement."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est l intérêt de cet entraînement pour les sportifs de balle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Au baseball, au cricket ou au tennis, la vitesse de la balle dépasse la vitesse maximale de réaction. Les athlètes projettent la trajectoire avant la frappe (Kowler, 1989). Cet exercice entraîne ce réflexe d’anticipation sur écran, sans preuve de transfert au terrain."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi doit-on éviter les saccades de recherche lors de l occlusion ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les saccades anarchiques provoquent une suppression saccadique et brisent la synchronisation de vitesse. Une poursuite fluide aide à intercepter proprement à la sortie (Krauzlis, 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "Que mesure le gain sous occlusion lors des tests oculomoteurs ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il s agit du ratio entre la vitesse oculaire durant le masquage et la vitesse réelle de la cible. Un gain proche de 1,0 indique une absence de ralentissement dans la zone aveugle."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est l influence de la fréquence de l écran sur l extrapolation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un écran à taux élevé fournit des informations cinétiques plus détaillées avant la coupure, permettant au cervelet de calculer un vecteur prédictif d une grande fidélité (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Cet outil d entraînement prédictif est-il gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, SkillDrills met cet outil à disposition gratuitement, sans inscription et sans publicité intrusive, directement dans votre navigateur web."
      }
    },
    {
      "@type": "Question",
      "name": "Les adultes plus âgés peuvent-ils progresser en poursuite prédictive ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Même si les réflexes bruts diminuent légèrement avec l âge, les modèles prédictifs internes du cervelet conservent une grande plasticité sous entraînement régulier (Kowler, 1989)."
      }
    }
  ]
};

const guideProps = {
  heading: "Principes Scientifiques de la Poursuite Oculaire Prédictive et Extrapolation",
  intro: [
    "Cet exercice de poursuite oculaire prédictive vous fait suivre une cible mobile qui disparaît brièvement : vous devez estimer où elle réapparaît. Il mesure le temps de réaction et l’écart de trajectoire. C’est un entraînement avec des repères personnels, pas un examen médical.",
    "Le système visuel humain est confronté à un obstacle physiologique incontournable : un temps de latence sensorimotrice de 130 à 150 millisecondes pour que l influx lumineux rétinien chemine jusqu aux centres corticaux et déclenche la contraction des muscles oculomoteurs. Si le guidage du regard fonctionnait purement par boucle de rétroaction réactive, la fovéa subirait un glissement rétinien continu (retinal slip), restant constamment en retard sur les cibles mobiles. L adaptation évolutive face à ce défi réside dans la poursuite oculaire prédictive.",
    "Les recherches pionnières de Robinson (1965) et Barnes (2008) ont mis en évidence la capacité du cervelet, en lien direct avec les champs oculaires frontaux (FEF), à extraire la vitesse et la trajectoire de la cible dans les 100 à 200 premières millisecondes de son parcours. Grâce à ces paramètres, le cerveau émet un modèle interne feedforward qui propulse le regard à la vitesse future estimée, éliminant totalement le retard temporel biologique.",
    "Dans les sports et les jeux, les cibles disparaissent parfois derrière un obstacle. Bennett & Barnes (2003) ont montré que le regard peut continuer à suivre le mouvement quelques instants sans stimulus visible. Cet exercice fait travailler cette anticipation sur écran, sans promesse de transfert au terrain."
  ],
  benchmarks: {
    title: "Repères pour prévoir une trajectoire sous masquage",
    headers: ["Niveau", "Précision de la prévision (%)", "Écart à la réapparition", "Correspondance de la poursuite", "Profil d anticipation"],
    rows: [
      ["Très précis","Supérieur à 94%", "Inférieur à 15 px (Atterrissage Parfait)", "0.95 – 1.02", "Modèle cérébelleux optimal ; anticipation millimétrique sans saccade correctrice consécutive."],
      ["Avancé (Niveau Compétition)", "86% – 93%", "15 px – 28 px", "0.88 – 0.94", "Excellente extrapolation vectorielle avec minime ajustement à la réapparition."],
      ["Compétent (Adulte Sain)", "76% – 85%", "29 px – 45 px", "0.78 – 0.87", "Prédiction solide avec légère dérive lors d occlusions prolongées."],
      ["En Progression", "62% – 75%", "46 px – 65 px", "0.65 – 0.77", "Prédominance du contrôle réactif ; décélération notable dans la zone masquée."],
      ["Débutant / Rééducation", "Inférieur à 62%", "Supérieur à 65 px", "Inférieur à 0.65", "Arrêt visuel complet dès l occlusion ; retard marqué lors de la récupération."]
    ],
    note: "※ Valeurs établies en résolution 1080p à 50–70 cm avec des vitesses de 1.0x à 1.5x. La notation mesure la justesse d arrivée fovéale sur le point d émergence sans saccades correctrices ultérieures."
  },
  techniques: {
    title: "Quatre principes pour prévoir une trajectoire avec précision",
    items: [
      {
        name: "Lire la vitesse et la direction initiales",
        desc: "Focalisez intensément la cible au cours des 100 à 200 premières millisecondes. Le cervelet requiert des données cinétiques nettes pour bâtir la simulation interne appropriée (Barnes, 2008).",
        tips: "Regardez la vitesse à laquelle le repère glisse par rapport aux éléments du fond plutôt que son graphisme."
      },
      {
        name: "Prolonger mentalement la zone masquée",
        desc: "Lorsque la cible s éclipse sous le masquage, n immobilisez pas les yeux. Continuez d accompagner le trajet supposé à vitesse inchangée jusqu au point d émergence.",
        tips: "Ne fixez pas l endroit où la cible a disparu ; projetez votre axe visuel vers l avant dans le vide."
      },
      {
        name: "Garder le regard stable pendant le masquage",
        desc: "La disparition visuelle incite le cerveau à déclencher des saccades de repérage anarchiques. Ces secousses détruisent la dynamique motrice. Préservez la continuité du glissement (Krauzlis, 2004).",
        tips: "Imaginez que vos yeux se déplacent le long d un rail magnétique invisible à travers la zone masquée."
      },
      {
        name: "Vérifier l écart à la réapparition",
        desc: "Estimez l instant précis et la coordonnée où la cible reparaîtra. Coïncidez l arrivée du regard avec l émergence du mobile pour verrouiller la fovéa sans saccade.",
        tips: "Mieux vaut atteindre la zone de sortie une fraction de seconde en avance qu être en retard sur la cible."
      }
    ]
  },
  steps: [
    "Installez-vous à une distance de 50 à 70 cm de votre écran, tête et nuque stables.",
    "Sélectionnez la vitesse voulue et activez le masquage de trajectoire pour accroître le défi d anticipation.",
    "Suivez attentivement la cible visible en mémorisant son vecteur d accélération.",
    "Pendant le passage masqué, poursuivez le glissement oculaire régulier sur la trajectoire extrapolée.",
    "Reprenez le contact fovéal dès la réapparition du mobile et observez votre précision d anticipation."
  ],
  audience: "Joueurs de jeux de tir, sportifs de disciplines de balle et toute personne qui veut s’exercer à anticiper la trajectoire d’une cible masquée.",
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('robinson1965', 'kowler1989', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Poursuite oculaire douce continue" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite lors de changements de direction" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite d une cible évasive" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Stabilité de la fixation oculaire" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en huit" },
    { href: "/fr/drills/visual-tracking/momentum-teleport-pursuit", label: "Poursuite d une cible qui saute" }
  ]
};

export default function FrenchPredictivePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PredictivePursuitClient
        copy={{
          title: "Poursuite oculaire prédictive sous masquage",
          subtitle: "Suivez une cible mobile et estimez son point de réapparition",
          description: "Suivez une cible mobile et gardez une estimation de sa direction pendant un bref masquage. Consultez ensuite le temps de réaction et l écart à la réapparition. L exercice est gratuit dans le navigateur."
        }}
      />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />

      <DrillFooter />
    </>
  );
}
