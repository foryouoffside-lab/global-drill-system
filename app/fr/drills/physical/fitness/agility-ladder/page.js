import MotorSequencingClient from '@/app/drills/physical/fitness/agility-ladder/MotorSequencingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/fr.md)
// Primary: échelle d'agilité en ligne. Title KEPT (GSC 41 impr, pos 7.4).
// Honesty pass only: removed footwork / counter-strafe / vivacité claims,
// the false "inversion resets combo" rule and the invented tier table.
// ============================================================

const TITLE = 'Échelle d’agilité en ligne : jeu de rythme | SkillDrills';
const DESCRIPTION = 'Échelle d’agilité en ligne : passez le curseur sur les 4 échelons de chaque échelle, gauche-droite-gauche-droite. Jeu de rythme gratuit de 45 secondes.';
const URL = 'https://skilldrills.online/fr/drills/physical/fitness/agility-ladder';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['échelle d’agilité en ligne', 'jeu de rythme à la souris', 'échelle d’agilité virtuelle', 'jeu d’alternance gauche-droite', 'jeu navigateur gratuit'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/agility-ladder'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills Accueil", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Entraînement Physique", "item": "https://skilldrills.online/fr/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "Condition Physique et Vivacité", "item": "https://skilldrills.online/fr/drills/physical/fitness" },
    { "@type": "ListItem", "position": 4, "name": "Échelle d’agilité en ligne", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Échelle d’agilité en ligne",
  "description": "Jeu de rythme gratuit de 45 secondes dans le navigateur : passer le curseur sur les 4 échelons de chaque échelle qui descend, dans l’ordre gauche-droite-gauche-droite.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur récent avec HTML5 Canvas et souris",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": URL,
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-10"
};

const FAQS = [
  {
    q: "Qu’est-ce que l’échelle d’agilité en ligne ?",
    a: "Un jeu de rythme gratuit dans le navigateur : des échelles descendent à l’écran et vous passez le curseur sur les 4 échelons de chacune (gauche, droite, gauche, droite) dans un ordre fixe. Une partie dure 45 secondes et chaque échelle terminée rapporte des points."
  },
  {
    q: "Comment jouer ? Faut-il cliquer ?",
    a: "Non, aucun clic n’est nécessaire. Amenez le réticule sur l’échelon actif (contour vert) : il est validé et le suivant s’active. L’ordre est 1 (gauche) → 2 (droite) → 3 (gauche) → 4 (droite). La touche Échap quitte l’exercice."
  },
  {
    q: "Comment sont calculés les points et le combo ?",
    a: "Chaque échelle terminée rapporte 100 points multipliés par le multiplicateur de combo. Il augmente avec la série : 1,1x dès 3 échelles d’affilée, 1,25x dès 5, 1,5x dès 10, 2,0x dès 20 et 3,0x au maximum dès 50."
  },
  {
    q: "Qu’est-ce qui change quand le niveau monte ?",
    a: "Le niveau monte de 1 tous les 250 points, avec un niveau bonus toutes les 4 échelles d’affilée. Les échelles défilent à 150 px/s au départ, à 750 px/s au niveau 15, puis toujours plus vite. La zone de contact des échelons passe de 18 px à 10 px."
  },
  {
    q: "Que se passe-t-il si je rate un échelon ?",
    a: "Si une échelle atteint le bas de l’écran avant que ses 4 échelons soient validés, le combo retombe à 0, l’écran flashe en rouge et tremble. Aucun point ni aucune seconde n’est retiré."
  },
  {
    q: "Est-ce que ça remplace un vrai exercice d’échelle d’agilité ?",
    a: "Non. Le jeu reprend seulement l’ordre gauche-droite d’un exercice d’échelle et le fait jouer à la souris. Il ne mesure ni ne promet d’amélioration des appuis, de la condition physique ou de la vitesse."
  },
  {
    q: "Comment la note finale est-elle attribuée ?",
    a: "La note dépend uniquement du score final : S+ dès 15 343, S dès 12 283, A dès 9 563, B dès 6 120, C dès 3 443, D dès 1 530, F en dessous. Ce sont des paliers d’entraînement SkillDrills, pas une comparaison avec d’autres joueurs."
  },
  {
    q: "Où sont enregistrés mes résultats ?",
    a: "Le meilleur score, le meilleur combo et le niveau maximal sont stockés uniquement dans le localStorage de votre navigateur et ne sont envoyés à aucun serveur. Gratuit, sans compte et sans installation."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-10",
  "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const STEPS = [
  "Cliquez sur Démarrer ; après le compte à rebours (3-2-1) la partie commence (sur ordinateur, le curseur est verrouillé).",
  "Amenez le réticule sur le premier échelon de l’échelle qui descend (à gauche, contour vert).",
  "Enchaînez les échelons 2 (droite), 3 (gauche) et 4 (droite) dans le même rythme pour terminer l’échelle.",
  "Pendant 45 secondes, ne laissez passer aucune échelle pour faire monter le multiplicateur de combo."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment jouer à l’échelle d’agilité en ligne",
  "description": "Passer le curseur sur les 4 échelons de chaque échelle dans l’ordre gauche-droite-gauche-droite.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Étape ${i + 1}`, "text": text }))
};

const ladderGuide = {
  heading: "Échelle d’agilité en ligne : comment ça marche",
  intro: [
    "Cette échelle d’agilité en ligne transpose l’enchaînement gauche-droite-gauche-droite d’une échelle d’agilité sur la souris. Des échelles descendent à l’écran et vous passez le réticule sur les 4 échelons dans un ordre fixe. On ne clique pas : seul le mouvement de la souris compte.",
    "Une partie dure 45 secondes. Chaque échelle terminée rapporte 100 points multipliés par le combo (jusqu’à 3,0x). Tous les 250 points, le niveau monte : les échelles défilent plus vite et la zone de contact des échelons rétrécit.",
    "Les séquences de gestes rapides sont plus stables quand les quatre pas sont exécutés comme un bloc planifié plutôt qu’un par un (Lashley, 1951 ; Schmidt, 1975). Le jeu exerce cet ordre et ce rythme avec la main ; il ne fait travailler ni les appuis ni la condition physique."
  ],
  benchmarks: {
    title: "Paliers de note (paliers d’entraînement SkillDrills)",
    headers: ["Note", "Score final"],
    rows: [
      ["S+", "dès 15 343"],
      ["S", "12 283 – 15 342"],
      ["A", "9 563 – 12 282"],
      ["B", "6 120 – 9 562"],
      ["C", "3 443 – 6 119"],
      ["D", "1 530 – 3 442"],
      ["F", "moins de 1 530"]
    ],
    note: "Paliers d’entraînement SkillDrills calculés à partir de la formule de note du jeu ; ni statistique comparative ni percentiles."
  },
  techniques: {
    title: "Conseils pour marquer plus de points",
    items: [
      { name: "Quatre échelons en un geste", desc: "Regarder chaque échelon puis réagir, c’est arriver trop tard. Faites le zigzag gauche-droite-gauche-droite en un seul mouvement continu.", tips: "Ne vous arrêtez pas entre les échelons." },
      { name: "Viser un peu plus bas", desc: "L’échelle descend en permanence. Visez légèrement sous la position actuelle de l’échelon pour tomber dans la zone de contact.", tips: "Plus la vitesse augmente, plus il faut anticiper." },
      { name: "Regard au centre", desc: "Les échelons apparaissent à gauche et à droite de l’axe central. En gardant le regard au milieu, vous voyez les deux côtés.", tips: "À partir du niveau 4, les échelles se décalent un peu latéralement." }
    ]
  },
  steps: STEPS,
  audience: "Ceux qui cherchent un court jeu de rythme et d’enchaînement à la souris, ou qui veulent s’exercer à l’aller-retour rapide du curseur entre gauche et droite.",
  faqs: FAQS,
  sources: pickSources('lashley1951', 'schmidt1975', 'fitts1954')
};

export default function AgilityLadderPageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <MotorSequencingClient
        copy={{
          title: "Échelle d’agilité en ligne",
          hudLabels: { score: "Score", timeLeft: "Temps restant", bestScore: "Meilleur score", bestCombo: "Meilleur combo" },
          rulesTitle: "Règles du jeu",
          rules: [
            { title: "4 échelons dans l’ordre", text: "Passez le réticule sur les échelons de chaque échelle dans l’ordre 1 (gauche) → 2 (droite) → 3 (gauche) → 4 (droite). Aucun clic nécessaire." },
            { title: "Multiplicateur de combo", text: "Les échelles enchaînées font monter le multiplicateur jusqu’à 3,0x. Chaque échelle rapporte 100 points multipliés par le combo." },
            { title: "Montée de niveau", text: "Tous les 250 points, le niveau monte : défilement plus rapide, zone de contact plus petite." },
            { title: "Échelle manquée", text: "Si une échelle incomplète atteint le bas de l’écran, le combo est remis à zéro. Points et temps sont conservés." }
          ],
          aboutTitle: "À propos de l’échelle d’agilité en ligne",
          aboutHeading: "Ordre et rythme à la souris",
          aboutText: "L’échelle d’agilité en ligne transforme l’enchaînement gauche-droite d’une échelle d’agilité en un exercice de 45 secondes à la souris. Chaque échelle qui descend est validée quand vous passez le réticule sur ses 4 échelons dans l’ordre ; à mesure que le score monte, la vitesse passe de 150 px/s à 750 px/s au niveau 15 puis continue d’augmenter. C’est un jeu de rythme et d’enchaînement avec la main, qui ne mesure aucun progrès des appuis ni de la condition physique."
        }}
      />
      <DrillGuide guide={ladderGuide} />
      <RelatedDrills />
    </>
  );
}
