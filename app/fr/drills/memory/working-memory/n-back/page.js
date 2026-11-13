import NBackClient from '@/app/drills/memory/working-memory/n-back/NBackClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de mémoire de travail : N-Back en ligne | SkillDrills",
  description: "Test de mémoire de travail gratuit : la lettre affichée est-elle identique à celle d'il y a N étapes ? N-Back en ligne, départ en 3-back.",
  keywords: ['test de mémoire de travail', 'mémoire de travail', 'N-Back en ligne', 'tâche N-Back', '3-back', 'entraînement mémoire de travail'],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/memory/working-memory/n-back",
    languages: getAlternateLanguages('/drills/memory/working-memory/n-back'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de mémoire de travail : N-Back en ligne | SkillDrills",
    description: "Test de mémoire de travail gratuit dans le navigateur : compare chaque lettre à celle d'il y a N étapes, à partir du 3-back, sans inscription.",
    url: "https://skilldrills.online/fr/drills/memory/working-memory/n-back",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de mémoire de travail : N-Back en ligne | SkillDrills",
    description: "Test de mémoire de travail gratuit dans le navigateur : compare chaque lettre à celle d'il y a N étapes, à partir du 3-back, sans inscription.",
  },
};

const appDescription = "Test de mémoire de travail gratuit dans le navigateur : des lettres s'affichent une à une et tu indiques si chacune est identique à celle d'il y a N étapes. Départ en 3-back, un niveau de plus tous les 8 bons choix.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Entraînements de mémoire", "item": "https://skilldrills.online/fr/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Mémoire de travail", "item": "https://skilldrills.online/fr/drills/memory/working-memory" },
    { "@type": "ListItem", "position": 4, "name": "Test de mémoire de travail (N-Back)", "item": "https://skilldrills.online/fr/drills/memory/working-memory/n-back" }
  ]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de mémoire de travail (N-Back)",
  "url": "https://skilldrills.online/fr/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de mémoire de travail (N-Back)",
  "url": "https://skilldrills.online/fr/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de mémoire de travail (N-Back)",
  "url": "https://skilldrills.online/fr/drills/memory/working-memory/n-back",
  "description": appDescription,
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Working Memory", "N-Back"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment faire le test N-Back",
  "description": "Quatre étapes pour comparer chaque lettre à celle d'il y a N étapes.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/fr/drills/memory/working-memory/n-back#step-1",
      "name": "Retenir les 3 premières lettres",
      "text": "Les 3 premières lettres n'ont rien à quoi se comparer : retiens-les simplement. Pendant ce temps, le chronomètre ne tourne pas."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/fr/drills/memory/working-memory/n-back#step-2",
      "name": "Comparer avec la lettre d'il y a N étapes",
      "text": "À chaque nouvelle lettre, vérifie si elle est identique à celle d'il y a exactement N étapes (3 au départ)."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/fr/drills/memory/working-memory/n-back#step-3",
      "name": "Choisir Identique ou Différente",
      "text": "Clique ou touche 'Identique' si c'est la même lettre, sinon 'Différente'. La fenêtre de réponse commence à 2 secondes."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/fr/drills/memory/working-memory/n-back#step-4",
      "name": "Mettre à jour la liste mentale",
      "text": "Après chaque réponse, oublie la lettre la plus ancienne et ajoute la nouvelle pour garder toujours les N dernières."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment fonctionne ce test de mémoire de travail ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est une tâche N-Back : des lettres s'affichent une à une. Si la lettre actuelle est identique à celle d'il y a exactement N étapes, appuie sur 'Identique', sinon sur 'Différente'. Chaque bonne réponse rapporte +150 points. Les N premières lettres sont seulement à retenir et le chronomètre ne tourne pas pendant ce temps."
      }
    },
    {
      "@type": "Question",
      "name": "À quel niveau commence le test et comment progresse-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le test commence en 3-back. Tous les 1 200 points (8 bonnes réponses), le niveau monte d'un cran : 4-back, 5-back, etc. Le nouvel écart s'applique dès la lettre suivante. Une erreur ne fait jamais baisser le niveau."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps ai-je pour répondre ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tu as 2 secondes par lettre ; la fenêtre raccourcit de 0,1 seconde à chaque niveau, jusqu'à 1,2 seconde minimum. La session dure 45 secondes et le chronomètre est à l'arrêt pendant que tu retiens les N premières lettres."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il en cas d'erreur ou d'absence de réponse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucun point ni temps n'est retiré. Les erreurs et les absences de réponse comptent comme ratées dans la précision, puis la lettre suivante arrive. Environ une lettre sur trois est identique, donc répondre 'Différente' compte tout autant."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce un dual N-Back ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. C'est un N-Back simple avec des lettres uniquement. Le dual N-Back compare deux flux en même temps, par exemple une position et un son ; cette variante n'est pas proposée ici."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on jouer au clavier ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour l'instant, tu réponds avec les deux boutons à l'écran, à la souris ou au toucher. Les raccourcis clavier ne sont pas pris en charge."
      }
    },
    {
      "@type": "Question",
      "name": "Le N-Back augmente-t-il le QI ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ce n'est pas démontré. Jaeggi et al. (2008) ont rapporté un lien entre entraînement N-Back et intelligence fluide, mais les études suivantes ont donné des résultats contradictoires. L'entraînement peut améliorer ton score à cette tâche précise."
      }
    },
    {
      "@type": "Question",
      "name": "Mes résultats sont-ils enregistrés ? Ont-ils une valeur médicale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le meilleur score et le niveau maximal sont enregistrés uniquement dans le localStorage de ce navigateur, sans envoi à un serveur. Ce sont des scores d'entraînement : ils ne diagnostiquent ni trouble de la mémoire de travail ni TDAH."
      }
    }
  ]
};

const nBackClientCopyFr = {
  h1Keyword: "Test de mémoire de travail",
  h1Suffix: " : N-Back en ligne",
  subtitle: "La lettre est-elle identique à celle d'il y a N étapes ? Départ en 3-back.",
  statScore: "Score",
  statTime: "Temps",
  statLevel: "Niveau",
  statBest: "Record",
  hudScore: "Score",
  hudTime: "Temps",
  modeSuffix: "-BACK",
  memorizingText: "Retiens les {n} premières lettres...",
  btnMatch: "IDENTIQUE",
  btnNoMatch: "DIFFÉRENTE",
  startTitle: "Test N-Back",
  startSubtitle: "Mémoire de travail • dès 3-back",
  countdownSubtitle: "PRÉPARE-TOI",
  newBest: "NOUVEAU RECORD",
  statPoints: "Points",
  statAccuracy: "Précision",
  statPeakLevel: "Niveau max",
  statPerfects: "Bonnes réponses",
  btnPlayAgain: "Rejouer",
  rulesTitle: "Règles et points",
  rulesItems: [
    { num: "1", text: "Identique / Différente (il y a N étapes)", highlight: "+150 PTS", result: "Par bonne réponse" },
    { num: "2", text: "Montée de niveau", highlight: "3-Back → 4-Back+", result: "Tous les 1 200 points (8 bonnes réponses)" },
    { num: "3", text: "Fenêtre de réponse plus courte", highlight: "2,0 s → 1,2 s min.", result: "0,1 s de moins par niveau" },
    { num: "4", text: "Pas de réponse", highlight: "Aucune pénalité", result: "Ni points ni temps perdus, compte comme ratée" },
    { num: "5", text: "Mauvaise réponse", highlight: "Aucune pénalité", result: "Le niveau reste, le chrono de 45 s continue normalement" }
  ]
};

const guideFr = {
  intro: [
    "Ce test de mémoire de travail est une tâche N-Back en ligne, gratuite : des lettres s'affichent une à une et tu indiques pour chacune si elle est identique à celle d'il y a exactement N étapes. Comme il faut garder en tête les N dernières lettres et mettre la liste à jour à chaque nouvelle lettre, la tâche sollicite surtout la mise à jour de la mémoire de travail (Kirchner, 1958).",
    "Le test commence en 3-back. Les 3 premières lettres sont seulement à retenir ; ensuite, tu réponds 'Identique' ou 'Différente' à chaque lettre. Chaque bonne réponse rapporte +150 points et tous les 1 200 points (8 bonnes réponses) le niveau passe à 4-back, 5-back, etc. La fenêtre de réponse commence à 2 secondes et raccourcit de 0,1 seconde par niveau, jusqu'à 1,2 seconde.",
    "La session dure 45 secondes ; le chronomètre est à l'arrêt pendant que tu retiens les premières lettres. Les erreurs et absences de réponse ne coûtent ni points ni temps et ne font pas baisser le niveau : elles comptent seulement comme ratées dans la précision. C'est un N-Back simple avec des lettres, pas un dual N-Back (position + son). Réponse au clic ou au toucher sur les boutons.",
    "Transparence des données : les résultats sont enregistrés uniquement dans le localStorage de ce navigateur et ne sont envoyés à aucun serveur. SkillDrills ne publie donc ni moyennes d'utilisateurs ni classements.",
    "Cet outil est un jeu gratuit d'entraînement dans le navigateur. Ce n'est ni un dispositif médical ni un outil de diagnostic, et les résultats ne renseignent pas sur un trouble de la mémoire, un TDAH ou le QI."
  ],
  benchmarks: {
    title: "Paliers d'entraînement SkillDrills (points = bonnes réponses × 150)",
    headers: ["Palier", "Bonnes réponses", "Points", "Niveau atteint"],
    rows: [
      ["Découverte", "0–3", "0–450", "3-back. Prise en main des règles et du rythme"],
      ["Base", "4–7", "600–1 050", "Toujours 3-back. Mise à jour stable des 3 dernières lettres"],
      ["Confirmé", "8–15", "1 200–2 250", "4-back atteint, fenêtre de 1,9 s"],
      ["Avancé", "16+", "2 400+", "5-back ou plus, fenêtre de 1,8 s ou moins"]
    ],
    note: "Ces paliers sont calculés à partir des règles de score du jeu ; ce ne sont ni des normes de population ni des seuils cliniques."
  },
  techniques: {
    title: "Astuces pour le test N-Back",
    items: [
      { name: "Répéter à voix basse", desc: "Répète mentalement les N dernières lettres à rythme régulier (ex. B-M-T → M-T-R). Quand une nouvelle lettre arrive, compare-la à la première puis retire celle-ci.", tips: "Des noms de lettres courts aident à garder le rythme." },
      { name: "Se méfier des lettres proches", desc: "Une lettre vue il y a 1 ou 2 étapes paraît familière mais n'est pas la bonne. Vérifie qu'il s'agit bien d'exactement N étapes.", tips: "Une impression de déjà-vu ne suffit pas pour répondre 'Identique'." },
      { name: "Oser répondre 'Différente'", desc: "Seule une lettre sur trois environ est identique. Hésiter trop longtemps fait perdre la réponse par dépassement de temps.", tips: "Choisis toujours une des deux réponses dans la fenêtre." },
      { name: "Repartir vite après une perte", desc: "Si tu as perdu le fil, n'essaie pas de te souvenir : reconstruis la liste à partir de la lettre actuelle.", tips: "Après N lettres, tu peux de nouveau comparer avec certitude." }
    ]
  },
  steps: [
    "Appuie sur Démarrer et attends le compte à rebours de 3 secondes.",
    "Retiens les 3 premières lettres (le chronomètre ne tourne pas).",
    "Ensuite, pour chaque lettre, choisis 'Identique' si elle correspond à celle d'il y a 3 étapes, sinon 'Différente'.",
    "Toutes les 8 bonnes réponses, le niveau passe à 4-back, 5-back et la fenêtre de réponse raccourcit.",
    "Après 45 secondes, consulte ton score, ton niveau maximal et ta précision."
  ],
  audience: "Toute personne qui veut faire un test de mémoire de travail directement dans le navigateur, les étudiants qui découvrent la tâche N-Back et quiconque cherche un jeu de réflexion court.",
  faqs: faqSchema.mainEntity.map(({ name, acceptedAnswer }) => ({ q: name, a: acceptedAnswer.text })),
  sources: pickSources('baddeley1974', 'cowan2001'),
  related: [
    { href: "/fr/drills/memory/spatial-memory/path-tracing", label: "Test des blocs de Corsi" },
    { href: "/fr/drills/memory/spatial-memory/grid-memorization", label: "Test de Mémoire Visuelle" },
    { href: "/fr/drills/memory/spatial-memory/object-location", label: "Test de Mémoire de Localisation" },
    { href: "/fr/drills/memory/short-term-memory/digit-span", label: "Test d'Empan Numérique" },
    { href: "/fr/drills/memory/short-term-memory/word-recall", label: "Test de Mémoire Verbale" }
  ]
};

export default function NBackPageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <NBackClient copy={nBackClientCopyFr} />

      <DrillGuide guide={guideFr} />

      <RelatedDrills />
    </>
  );
}
