import JumpSequenceClient from '@/app/drills/physical/fitness/jump-sequence/JumpSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/fr.md)
// Primary: jeu de saut et de trajectoire (no-demand descriptive).
// Deleted the dead base title and Object.assign override claiming Détente
// Verticale / Sauter Plus Haut: this is a charge-release-steer mouse game.
// ============================================================

const TITLE = 'Jeu de saut et de trajectoire à la souris | SkillDrills';
const DESCRIPTION = 'Jeu de saut et de trajectoire gratuit : maintenez le clic pour charger, relâchez pour sauter et guidez le saut en l’air vers une cible mobile. 45 secondes.';
const URL = 'https://skilldrills.online/fr/drills/physical/fitness/jump-sequence';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['jeu de saut et de trajectoire', 'jeu de saut à la souris', 'charger et viser', 'jeu de timing à la souris', 'jeu navigateur gratuit'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/jump-sequence'),
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
    { "@type": "ListItem", "position": 4, "name": "Jeu de saut et de trajectoire", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Jeu de saut et de trajectoire",
  "description": "Jeu gratuit de 45 secondes dans le navigateur : charger, sauter et guider le saut en l’air vers une cible mobile.",
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
    q: "Qu’est-ce que le jeu de saut et de trajectoire ?",
    a: "Un jeu gratuit dans le navigateur : vous chargez le point posé au sol (votre personnage), le faites sauter puis le guidez en l’air vers une cible qui traverse l’écran. Une partie dure 45 secondes."
  },
  {
    q: "Comment jouer ?",
    a: "Placez le réticule sur le personnage au sol et maintenez le bouton de la souris : le saut se charge (plein en 1 seconde environ). Relâchez et le personnage saute à la verticale ; en l’air, il suit la position horizontale de la souris. La touche Échap quitte l’exercice."
  },
  {
    q: "Comment sont calculés les points et le combo ?",
    a: "Si le personnage touche la cible pendant le saut, c’est un coup réussi. Au niveau 1 il rapporte 5 points de base, davantage aux niveaux suivants, multipliés par le combo de la série (3,0x au maximum dès 50 réussites d’affilée)."
  },
  {
    q: "Qu’est-ce qui change quand le niveau monte ?",
    a: "Le niveau monte de 1 tous les 250 points, avec un niveau bonus toutes les 4 réussites d’affilée. La cible part à 120 px/s, atteint environ 800 px/s au niveau 15 (jusqu’à 900 px/s avec une longue série) puis accélère encore. Son rayon passe de 35 px à 12 px."
  },
  {
    q: "Que se passe-t-il si je rate la cible ?",
    a: "Si le personnage retombe au sol sans toucher la cible, la série et le combo sont remis à zéro et l’écran flashe en rouge. Les points et le temps restant sont conservés, et une nouvelle cible apparaît."
  },
  {
    q: "Ce jeu fait-il travailler la détente ?",
    a: "Non. C’est un jeu de timing où vous réglez à la souris la durée de charge et la direction en l’air. Il ne mesure ni n’entraîne la hauteur de saut ou la force des jambes et ne promet aucun effet d’entraînement physique."
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
  "Cliquez sur Démarrer puis, après le compte à rebours (3-2-1), placez le réticule sur le personnage au sol.",
  "Estimez la hauteur de la cible, maintenez le bouton de la souris pour charger et relâchez.",
  "En l’air, déplacez la souris vers la gauche ou la droite pour amener le personnage là où la cible va passer.",
  "Pendant 45 secondes, enchaînez les réussites pour faire monter le multiplicateur de combo."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment jouer au jeu de saut et de trajectoire",
  "description": "Charger, sauter et guider le saut en l’air vers une cible mobile.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Étape ${i + 1}`, "text": text }))
};

const jumpGuide = {
  heading: "Jeu de saut et de trajectoire : comment ça marche",
  intro: [
    "Dans ce jeu de saut et de trajectoire, deux choses décident de chaque essai : la durée de la charge et la direction donnée en l’air. Plus le bouton reste enfoncé, plus le saut est haut ; en l’air, le personnage suit la position horizontale de la souris. La cible traverse l’écran et rebondit sur les bords.",
    "Une partie dure 45 secondes. Chaque réussite rapporte des points et allonge la série ; avec le niveau, la cible devient plus rapide et plus petite. Retomber sans toucher ne coûte que le combo, ni points ni temps.",
    "Pour toucher une cible mobile, il faut prévoir le point de rencontre plutôt que viser sa position actuelle (Lee, 1976). Ce type de mouvement combine une phase principale planifiée et une correction finale (Woodworth, 1899). Le jeu exerce ce timing à la souris et n’a rien à voir avec de vrais sauts."
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
      { name: "Ne charger que le nécessaire", desc: "Charger à fond à chaque fois fait passer au-dessus de la cible. Relâchez quand la charge correspond à la hauteur de la cible.", tips: "Comparez la jauge de charge à la hauteur de la cible." },
      { name: "Guider en anticipant", desc: "Ne courez pas après la cible : amenez la souris là où elle va passer. Le personnage se rapproche progressivement de la position de la souris.", tips: "Tenez compte des rebonds sur les bords." },
      { name: "Repartir tout de suite", desc: "Après une réussite ou un raté, une nouvelle cible apparaît. Replacez aussitôt le réticule sur le personnage et rechargez.", tips: "Moins de temps mort, des séries plus longues." }
    ]
  },
  steps: STEPS,
  audience: "Ceux qui cherchent un court jeu de timing à la souris ou veulent s’exercer à anticiper des cibles mobiles.",
  faqs: FAQS,
  sources: pickSources('lee1976', 'woodworth1899', 'kawato1999', 'fitts1954')
};

export default function JumpSequencePageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <JumpSequenceClient
        copy={{
          title: "Jeu de saut et de trajectoire",
          hudLabels: { score: "Score", timeLeft: "Temps restant", bestScore: "Meilleur score", bestCombo: "Meilleur combo" },
          rulesTitle: "Règles du jeu",
          rules: [
            { title: "Charger et sauter", text: "Placez le réticule sur le personnage et maintenez le bouton de la souris pour charger ; relâchez pour sauter à la verticale." },
            { title: "Guider en l’air", text: "En l’air, déplacez la souris vers la gauche ou la droite ; le personnage s’y dirige et file vers la cible." },
            { title: "Multiplicateur de combo", text: "Les réussites enchaînées font monter le multiplicateur jusqu’à 3,0x." },
            { title: "Un raté remet le combo à zéro", text: "Si vous retombez sans toucher la cible, le combo est remis à zéro. Points et temps sont conservés." }
          ],
          aboutTitle: "À propos du jeu de saut et de trajectoire"
        }}
      />
      <DrillGuide guide={jumpGuide} />
      <RelatedDrills />
    </>
  );
}
