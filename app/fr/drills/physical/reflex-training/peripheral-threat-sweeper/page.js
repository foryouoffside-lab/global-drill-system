import PeripheralThreatSweeperClient from '@/app/drills/physical/reflex-training/peripheral-threat-sweeper/PeripheralThreatSweeperClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/fr.md)
// Primary: jeu de vision périphérique (no-demand descriptive; AC is medical).
// Game framing only: no eye-test, visual-field or UFOV-expansion claims.
// Fixed +0.6 s -> +2 s (cap 60 s) and the forced -1 s penalty.
// ============================================================

const url = 'https://skilldrills.online/fr/drills/physical/reflex-training/peripheral-threat-sweeper';
const title = "Jeu de vision périphérique : garder le centre | SkillDrills";
const description = "Jeu de vision périphérique : fixez le noyau central et cliquez les menaces venues des bords. +2 s par prise, -1 s par erreur. Pas un test de vue.";

export const metadata = {
  title,
  description,
  keywords: [
    "jeu de vision périphérique",
    "exercice vision périphérique",
    "menaces venues des bords",
    "défendre le centre",
    "Peripheral Threat Sweeper"
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/peripheral-threat-sweeper'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url,
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Centre d'Entraînement Physique", "item": "https://skilldrills.online/fr/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "Jeu de vision périphérique", "item": url }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Jeu de vision périphérique",
  description,
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur récent avec HTML5 Canvas et souris ou écran tactile",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  url,
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-10"
};

const faqs = [
  {
    q: "Que fait-on dans ce jeu de vision périphérique ?",
    a: "Vous gardez les yeux sur le noyau au centre de l’écran et cliquez sur les menaces qui arrivent des bords vers lui, avant qu’elles ne l’atteignent. On s’exerce ainsi à remarquer des mouvements en périphérie sans bouger le regard. C’est un jeu de navigateur, pas un test de la vue ni un traitement."
  },
  {
    q: "Quelle différence entre vision centrale et vision périphérique ?",
    a: "La vision centrale distingue les lettres et les détails dans une petite zone autour du point fixé ; la vision périphérique perçoit surtout, en dehors de cette zone, le mouvement et les changements plus grossiers. Le jeu demande de garder le regard au centre et de réagir aux menaces venues des bords."
  },
  {
    q: "Ai-je le droit de bouger les yeux ?",
    a: "Le but est de continuer à regarder le noyau et de seulement percevoir les bords. Si vous suivez les menaces des yeux, vous vous exercez à autre chose. Le navigateur ne peut pas savoir où vous regardez : c’est à vous d’y veiller."
  },
  {
    q: "Comment sont calculés les points et le temps ?",
    a: "Chaque prise rapporte 100 points multipliés par le combo et un bonus de niveau, et ajoute 2 secondes, jusqu’à 60 secondes au maximum. La partie commence avec 45 secondes et le combo monte jusqu’à 3,0x. Si une menace atteint le noyau ou si vous cliquez dans le vide, le combo retombe à 1,0x et vous perdez 1 seconde. Cette pénalité est toujours active et ne peut pas être désactivée."
  },
  {
    q: "Comment la difficulté augmente-t-elle ?",
    a: "À mesure que le score monte, les menaces accélèrent d’environ 80 px/s vers 520 px/s (un peu plus pendant un long combo), et l’intervalle entre deux apparitions passe d’environ 1,4 seconde à 0,20 seconde au minimum. Plus loin arrivent aussi des menaces plus rapides et d’autres qui ondulent latéralement."
  },
  {
    q: "Qu’appelle-t-on la vision en tunnel ?",
    a: "Sous stress ou très concentré sur un point, on perçoit souvent moins bien ce qui l’entoure ; on parle couramment de vision en tunnel. Ce jeu fait pratiquer le fait de garder le centre en vue sans perdre les bords. Il ne détecte pas une perte de champ visuel d’origine médicale : pour cela, consultez un ophtalmologiste."
  },
  {
    q: "Ce jeu élargit-il mon champ visuel ?",
    a: "Nous ne pouvons pas le promettre. On progresse souvent dans une tâche qu’on pratique, mais l’effet de ce jeu n’a pas été étudié. Utilisez-le pour comparer vos propres résultats."
  },
  {
    q: "La taille et la distance de l’écran comptent-elles ?",
    a: "Plus l’écran est grand et proche, plus les menaces apparaissent loin dans votre champ visuel. Comparez donc vos résultats à distance et posture identiques. La fréquence de rafraîchissement et la latence d’entrée peuvent aussi jouer (Woods et al., 2015)."
  },
  {
    q: "Où sont enregistrés mes résultats ?",
    a: "Le meilleur score, la précision et le meilleur combo sont stockés dans le stockage local de votre navigateur et cet exercice ne les envoie à aucun serveur. Si vous effacez les données du navigateur, ils disparaissent."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-10",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const steps = [
  "Installez-vous confortablement et regardez le noyau au centre de l’écran.",
  "Repérez les menaces qui arrivent des bords sans bouger les yeux.",
  "Cliquez sur la menace avant qu’elle n’atteigne le noyau.",
  "Gagnez 2 secondes par prise et gardez le combo pour faire monter le score."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment jouer au jeu de vision périphérique",
  "description": "Garder le regard au centre et intercepter les menaces venues des bords, en quatre étapes.",
  "step": steps.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Étape ${i + 1}`, "text": text }))
};

const guideProps = {
  heading: "Jeu de vision périphérique : mode d’emploi",
  intro: [
    "Ce jeu de vision périphérique gratuit se joue dans le navigateur : vous gardez les yeux sur le noyau central et interceptez les menaces qui arrivent des bords. Une prise rapporte 2 secondes ; un clic dans le vide ou une menace qui touche le noyau en coûte 1.",
    "La recherche montre qu’on peut déplacer son attention sans bouger les yeux (Posner, 1980). Les cibles contrastées et en mouvement se repèrent vite, même en périphérie (Treisman & Gelade, 1980). Le jeu en fait une tâche de clic.",
    "Au début, une menace apparaît environ toutes les 1,4 seconde ; avec le score, elles deviennent plus rapides et plus fréquentes (jusqu’à 0,20 seconde d’intervalle). Pour cliquer, un grand mouvement suivi d’une petite correction finale aide (Woodworth, 1899 ; Fitts, 1954).",
    "Les résultats sont des scores d’entraînement. Ils ne remplacent ni un examen de la vue, ni un diagnostic, ni un traitement. Si vous remarquez un changement de votre vision, consultez un ophtalmologiste."
  ],
  benchmarks: {
    title: "Paliers de note (paliers d’entraînement SkillDrills)",
    headers: ["Note", "Score final"],
    rows: [
      ["S+", "dès 21 660"],
      ["S", "17 340 – 21 659"],
      ["A", "13 500 – 17 339"],
      ["B", "8 640 – 13 499"],
      ["C", "4 860 – 8 639"],
      ["D", "2 160 – 4 859"],
      ["F", "moins de 2 160"]
    ],
    note: "Paliers d’entraînement SkillDrills calculés à partir de la formule de note du jeu ; ni statistique d’utilisateurs, ni percentiles, ni critère d’examen de la vue."
  },
  techniques: {
    title: "4 conseils pour marquer plus",
    items: [
      { name: "Regard fixé au centre", desc: "Regarder le noyau sans bouger les yeux est le cœur de l’exercice. Suivre les menaces du regard, c’est s’exercer à autre chose.", tips: "Si les yeux s’échappent, prenez l’habitude d’abord aux niveaux bas." },
      { name: "Voir tout l’écran en douceur", desc: "Ne vous concentrez pas sur une direction ; percevez l’écran entier d’un coup, détendu. Le mouvement attire alors l’attention plus tôt.", tips: "Relâchez les yeux, gardez une mise au point souple." },
      { name: "Grand geste, ajustement fin", desc: "Une fois la position repérée, amenez le curseur près de la cible d’un seul geste et ralentissez seulement à la fin.", tips: "Les clics précipités près du noyau coûtent le combo et 1 seconde." },
      { name: "Parties courtes, avec des pauses", desc: "Des yeux fatigués font chuter la concentration. Jouez des parties courtes et détournez le regard de l’écran entre deux.", tips: "Arrêtez en cas de douleur ou de vertige." }
    ]
  },
  steps,
  audience: "Ceux qui veulent s’exercer de façon ludique à réagir aux mouvements sur les bords de l’écran, et les joueurs qui veulent essayer de garder le regard au centre sans rien manquer autour.",
  faqs,
  sources: pickSources('posner1980', 'treisman1980', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function PeripheralThreatSweeperFrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <PeripheralThreatSweeperClient
        copy={{
          title: "Jeu de vision périphérique",
          hudLabels: {
            score: "Score",
            time: "Temps",
            bestScore: "Meilleur score",
            bestCombo: "Meilleur combo",
            accuracy: "Précision",
            sweeps: "Prises",
            breaches: "Brèches",
            peakLevel: "Niveau max",
            getReady: "PRÉPAREZ-VOUS"
          },
          rulesTitle: "Règles et points",
          rulesItems: [
            { title: "Interceptez et gagnez du temps", text: "Cliquez sur les menaces qui arrivent des bords : 100 points (multipliés par le combo et le niveau) et +2 secondes (60 secondes au maximum)." },
            { title: "Multiplicateur de combo", text: "Les prises enchaînées sans erreur font monter le multiplicateur jusqu’à 3,0x." },
            { title: "Difficulté croissante", text: "Avec le score, les menaces accélèrent et apparaissent plus souvent (jusqu’à 0,20 s d’intervalle)." },
            { title: "Noyau touché et clics dans le vide", text: "Si une menace atteint le noyau ou si vous cliquez dans le vide, le combo retombe à 1,0x et vous perdez 1 seconde." }
          ],
          aboutTitle: "À propos du jeu de vision périphérique",
          aboutSections: [
            { title: "Déplacer l’attention sans bouger les yeux", subtitle: "Posner (1980) : attention spatiale", content: "On peut porter son attention ailleurs sans bouger les yeux. Ici, le regard reste sur le noyau pendant que vous repérez les menaces sur les bords." },
            { title: "Les cibles en mouvement se remarquent", subtitle: "Treisman (1980) : recherche visuelle", content: "Les cibles contrastées et en mouvement ressortent vite, même en périphérie. En regardant tout l’écran de façon détendue, on repère plus tôt les nouvelles menaces." },
            { title: "Grand geste, ajustement fin", subtitle: "Woodworth (1899) et Fitts (1954)", content: "Pointer vite combine un grand mouvement et une petite correction finale. Près du noyau, ralentissez et cliquez avec précision." },
            { title: "Plusieurs menaces à la fois", subtitle: "Intervalles plus courts ensuite", content: "Plus loin, les menaces arrivent à la suite et l’attention doit se partager. Gardez le regard au centre et traitez d’abord celles qui sont les plus proches du noyau." }
          ]
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/peripheral-threat-sweeper" />
    </>
  );
}
