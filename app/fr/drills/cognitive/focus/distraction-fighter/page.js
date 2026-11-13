import DistractionFighterClient from '@/app/drills/cognitive/focus/distraction-fighter/DistractionFighterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Stroop en ligne gratuit | SkillDrills",
  description: "Test de Stroop en ligne gratuit : choisissez la couleur de l’encre, pas le mot, pour ressentir l’effet Stroop et exercer l’attention sélective. Exercice non clinique.",
  keywords: [
    "test de stroop",
    "test de stroop en ligne",
    "test de stroop en ligne gratuit",
    "test de stroop interprétation",
    "effet stroop test",
    "effet stroop psychologie",
    "attention sélective",
    "contrôle inhibiteur"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/cognitive/focus/distraction-fighter",
    languages: getAlternateLanguages('/drills/cognitive/focus/distraction-fighter')
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de Stroop en ligne gratuit | SkillDrills",
    description: "Test de Stroop en ligne gratuit : choisissez la couleur de l’encre, pas le mot, pour ressentir l’effet Stroop et exercer l’attention sélective. Exercice non clinique.",
    url: "https://skilldrills.online/fr/drills/cognitive/focus/distraction-fighter",
    siteName: "SkillDrills",
    locale: "fr_FR",
    type: "website"
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Test de Stroop en ligne gratuit | SkillDrills",
    description: "Test de Stroop en ligne gratuit : choisissez la couleur de l’encre, pas le mot, pour ressentir l’effet Stroop et exercer l’attention sélective. Exercice non clinique."
  }
};

export default function DistractionFighterPageFR() {
  const sources = pickSources('stroop1935', 'macleod1991', 'logan1984', 'posner1990', 'woods2015');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînement Cognitif", "item": "https://skilldrills.online/fr/drills/cognitive" },
      { "@type": "ListItem", "position": 3, "name": "Test de Stroop", "item": "https://skilldrills.online/fr/drills/cognitive/focus/distraction-fighter" }
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Stroop_effect", "https://en.wikipedia.org/wiki/Inhibitory_control"],
    "name": "Test de Stroop Trainer",
    "dateModified": "2026-11-12",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Test de Stroop en ligne gratuit : exercice couleur-mot où l on choisit la couleur de l encre plutôt que le sens du mot."
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Test de Stroop en Ligne Interactif",
    "dateModified": "2026-11-12",
    "url": "https://skilldrills.online/fr/drills/cognitive/focus/distraction-fighter",
    "applicationCategory": "EducationalApplication",
    "browserRequirements": "Requires JavaScript. HTML5 Canvas compatible."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Défi d Inhibition Cognitive de Stroop",
    "gamePlatform": "Web Browser",
    "dateModified": "2026-11-12",
    "genre": ["Brain Training", "Cognitive Drill", "Focus Training"]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment Passer le Test de Stroop en Ligne",
    "description": "Déroulement d une manche du test de Stroop en ligne.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Fixation Visuelle du Terme",
        "text": "Portez votre regard sur le mot sans prononcer intérieurement sa signification textuelle."
      },
      {
        "@type": "HowToStep",
        "name": "Inhibition du Réflexe de Lecture",
        "text": "Bloquez l automatisme de lecture sémantique et isolez la couleur physique du tracé."
      },
      {
        "@type": "HowToStep",
        "name": "Sélection de la Couleur",
        "text": "Cliquez sur le bouton désignant la couleur réelle de la police avant la fin du décompte."
      },
      {
        "@type": "HowToStep",
        "name": "Enchaînement Régulier",
        "text": "Le chrono démarre à 45 secondes : chaque bonne réponse ajoute 2 s (60 s max), chaque erreur ou mot expiré retire 1 s. La manche s arrête à 0."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu est-ce que l effet Stroop et quelle en est la cause?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C est le ralentissement observé lors de la dénomination de la couleur d un mot lorsque celui-ci exprime une couleur divergente. Il s explique par la primauté de la lecture automatique sur la reconnaissance volontaire des couleurs."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles zones cérébrales régulent ce conflit d attention?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La régulation mobilise le cortex cingulaire antérieur (ACC), sentinelle des conflits cognitifs, et le cortex préfrontal dorsolatéral (DLPFC), chef d orchestre du contrôle attentionnel descendant."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi la lecture prend-elle le pas sur la couleur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La lecture de mots courants est un automatisme ancré par des années de pratique, qui s active plus rapidement que l analyse intentionnelle de la couleur."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est l intérêt pour les athlètes et les joueurs d esports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aucun effet sur la performance sportive ou en jeu n est démontré. L exercice fait simplement pratiquer le fait d ignorer une information trompeuse sous pression de temps ; utilisez-le en complément."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps faut-il s entraîner chaque jour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il n y a pas de règle fixe. Quelques minutes par jour, avec des pauses, suffisent pour s exercer sans fatigue ; aucun progrès n est garanti."
        }
      },
      {
        "@type": "Question",
        "name": "L effet Stroop s estompe-t-il avec l entraînement régulier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avec la pratique, l interférence diminue souvent un peu, mais elle ne disparaît pas chez un lecteur habitué (MacLeod, 1991). Dans cet exercice, vos progrès se voient surtout au score et à la précision."
        }
      },
      {
        "@type": "Question",
        "name": "Existe-t-il une méthode pour réduire l interférence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Certains joueurs fixent le bord d une lettre plutôt que le mot entier pour moins le lire ; c est une astuce de pratique, pas une méthode prouvée."
        }
      },
      {
        "@type": "Question",
        "name": "Comment le calcul de points s effectue-t-il?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chaque bonne réponse rapporte 100 points × multiplicateur de combo (jusqu à 3x) × facteur de niveau, et ajoute 2 secondes au chrono (60 s max). Une erreur ou un mot expiré (option Délai activée, par défaut) remet le combo à zéro et retire 1 seconde. Les mots de couleur s affichent pour l instant en anglais (RED, BLUE…)."
        }
      },
      {
        "@type": "Question",
        "name": "Les personnes daltoniennes peuvent-elles utiliser ce module?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Difficilement : l exercice utilise rouge, vert, orange, jaune, bleu et violet, et ne propose pas de mode adapté au daltonisme."
        }
      },
      {
        "@type": "Question",
        "name": "Quel impact ce test a-t-il sur la concentration au quotidien?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ce n est pas démontré. Le score progresse souvent avec la pratique, mais le transfert vers la concentration au quotidien reste incertain. Utilisez-le comme un court échauffement."
        }
      }
    ]
  };

  const guide = {
    title: "Guide Scientifique du Test de Stroop et Neurobiologie de l Inhibition",
    intro: [
      "L effet Stroop, documenté pour la première fois par J. Ridley Stroop (1935), est l une des manifestations les plus étudiées de la psychologie cognitive. Lorsque la couleur de la police contredit le texte (par exemple, le mot 'ROUGE' affiché en bleu), la réponse ralentit et les erreurs augmentent.",
      "Ce décalage provient de la dissymétrie de vitesse entre automatismes et processus contrôlés: lire est une compétence hyper-automatisée chez l adulte (MacLeod, 1991). La recherche sur l inhibition décrit l arrêt d une réponse automatique comme une course (Logan & Cowan, 1984) : dans le test de Stroop, une erreur survient quand la lecture n est pas freinée à temps.",
      "Des études d imagerie associent le cortex cingulaire antérieur et le cortex préfrontal dorsolatéral à la résolution de ce conflit (Posner & Petersen, 1990). Cet exercice fait pratiquer l attention sélective sous contrainte de temps, sans mesurer l activité cérébrale ni garantir de progrès.",
      "Chronométrage : l exercice n affiche pas de temps de réaction, mais un score, une précision et un niveau atteint. La fenêtre de réponse de chaque mot est gérée par les minuteurs du navigateur, sur votre terminal. Les navigateurs intègrent une limitation délibérée pour parer aux failles matérielles de type Spectre (résolution d'environ 1 ms), et votre écran quantifie chaque rafraîchissement: environ 16,7 ms par image à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz (Woods et al., 2015). Évaluez votre progression sur un même matériel plutôt que de comparer des valeurs brutes entre configurations hétérogènes.",
      "Transparence des données et avertissement éducatif: SkillDrills ne collecte aucune donnée agrégée et ne transmet aucun historique à des serveurs tiers. Vos scores et préférences résident exclusivement dans le localStorage de votre navigateur. Ce module constitue un jeu d'entraînement cognitif à vocation pédagogique et ludique; il ne s'agit pas d'un dispositif médical, d'un outil de diagnostic ou de dépistage du TDAH ou d'autres troubles cognitifs."
    ],
    benchmarks: {
      title: "Test de Stroop : paliers de note (points par manche)",
      headers: ["Palier", "Points"],
      rows: [
        ["S+", "21 660 et plus"],
        ["S", "17 340 – 21 659"],
        ["A", "13 500 – 17 339"],
        ["B", "8 640 – 13 499"],
        ["C", "4 860 – 8 639"],
        ["D", "2 160 – 4 859"],
        ["F", "moins de 2 160"]
      ],
      note: "Paliers d entraînement SkillDrills, calculés directement à partir de la formule de note de l écran final (part de 24 000 points de référence) ; ni statistiques d utilisateurs ni normes. Chaque bonne réponse vaut 100 points × combo (jusqu à 3x) × facteur de niveau."
    },
    techniques: {
      title: "4 Stratégies pour Surmonter l'Interférence de Stroop",
      items: [
        {
          name: "Focalisation périphérique sur les contours de lettres",
          desc: "Ne lisez pas le mot dans sa globalité; fixez l'extrémité d'une seule lettre pour neutraliser le décodage automatique des aires visuo-linguistiques.",
          tips: "Traitez le signe graphique comme une forme géométrique colorée."
        },
        {
          name: "Inhibition de la subvocalisation interne",
          desc: "Prononcer mentalement le mot sature la boucle phonologique et retarde l'action. Liez directement le signal chromatique à la réponse motrice du doigt.",
          tips: "Détendez la mâchoire et maintenez une respiration fluide."
        },
        {
          name: "Gestion du tempo et préservation du combo",
          desc: "Les clics impulsifs précipités détruisent votre série de multiplicateurs. Un tempo régulier et méthodique aide à obtenir un meilleur score final.",
          tips: "Donnez toujours la priorité à l'exactitude avant la vitesse brute."
        },
        {
          name: "Entraînement fractionné à la résistance aux distracteurs",
          desc: "La fatigue fait grimper les erreurs. Des blocs quotidiens de 3 à 5 minutes sont faciles à tenir.",
          tips: "Utilisable comme court échauffement avant une session de travail."
        }
      ]
    },
    steps: [
      "Fixez le mot affiché au centre sans chercher à le décoder vocalement.",
      "Freinez le réflexe de lecture et ciblez uniquement la teinte de l'encre.",
      "Appuyez sur le bouton de couleur correspondant à l'encre affichée.",
      "Enchaînez les réponses justes : +2 s par bonne réponse (60 s max), -1 s par erreur, jusqu à ce que le chrono atteigne 0."
    ],
    audience: "Étudiants, cadres en open space, esportifs et toute personne curieuse de ressentir l effet Stroop.",
    faqs: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <DistractionFighterClient
        copy={{
          title: "Test de Stroop en ligne gratuit",
          subtitle: "Effet Stroop et attention sélective : choisissez la couleur de l encre, pas le mot",
          caption: "Nommez la couleur de police et ignorez le sens du mot. L interférence entre lecture automatique et identification de couleur mesure votre contrôle inhibiteur exécutif (Stroop, 1935).",
          stageCaption: "Cliquez sur le bouton de la couleur de police et ignorez le mot contradictoire.",
          rulesTitle: "Consignes de l Exercice et Système de Points",
          aboutTitle: "À Propos du Test de Stroop et du Contrôle Inhibiteur",
          aboutText: "L effet Stroop caractérise le délai pour nommer la couleur d un mot lorsque l encre et le sens s opposent (Stroop, 1935; MacLeod, 1991).\n\nLire est un automatisme profond. Le cortex préfrontal doit freiner volontairement la lecture pour laisser place à la perception chromatique.\n\nL exercice permet de pratiquer ce conflit ; il ne garantit pas une meilleure concentration au quotidien.",
          aboutCards: [
            { title: "Public Conseillé", desc: "Professionnels en espaces ouverts, étudiants et joueurs de jeux d action compétitifs.", color: "bg-blue-600" },
            { title: "Qualités Développées", desc: "Résistance à l interférence, inhibition cognitive, attention focalisée et maîtrise des impulsions.", color: "bg-emerald-600" },
            { title: "Contrôle Inhibiteur", desc: "Freinez le réflexe de lecture et ciblez les teintes avec précision sous cadence rapide.", color: "bg-purple-600" }
          ],
          rulesItems: [
            { num: "1", text: "Mot de couleur (en anglais)", highlight: "choisir l encre", result: "ignorer le mot" },
            { num: "2", text: "Bonne réponse", highlight: "100 × combo × niveau", result: "+2 s (60 s max)" },
            { num: "3", text: "Erreur / mot expiré", highlight: "combo à zéro", result: "-1 s" },
            { num: "4", text: "Niveau supérieur", highlight: "délai plus court", result: "6 couleurs dès niv. 4" }
          ]
        }}
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
