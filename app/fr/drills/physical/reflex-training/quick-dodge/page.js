import QuickDodgeClient from '@/app/drills/physical/reflex-training/quick-dodge/QuickDodgeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/physical/reflex-training/quick-dodge';
const title = "Jeu d’esquive à la souris : projectiles | SkillDrills";
const description = "Jeu d’esquive à la souris gratuit : déplacez le curseur pour éviter les projectiles rouges qui arrivent de tous les bords vers vous. Parties de 45 s.";

export const metadata = {
  title,
  description,
  keywords: ["jeu d’esquive à la souris", "jeu d’esquive", "éviter les projectiles", "jeu d’esquive en ligne", "jeu de souris en ligne"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/quick-dodge') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'fr_FR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Accueil', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Entraînement physique', item: 'https://skilldrills.online/fr/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Jeu d’esquive à la souris', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Jeu d’esquive à la souris (Quick Dodge)',
  url,
  description,
  genre: ['Action Game', 'Browser Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  operatingSystem: 'All',
  inLanguage: 'fr',
  dateModified: '2026-11-10',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/fr' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: "Comment fonctionne ce jeu d’esquive à la souris ?", a: "Des projectiles rouges et ronds apparaissent sur l’un des quatre bords de l’écran et filent en ligne droite vers l’endroit où se trouvait votre curseur à leur apparition. Un projectile qui sort de l’écran sans vous toucher compte comme une esquive. Une partie dure 45 secondes." },
  { q: "Les projectiles suivent-ils le curseur ?", a: "Non. Ils visent la position du curseur au moment où ils apparaissent, puis continuent tout droit sans changer de direction. Ils grossissent un peu en chemin : gardez de la marge." },
  { q: "Comment sont calculés les points et le combo ?", a: "Chaque projectile esquivé rapporte des points de base multipliés par le combo. Les points de base passent de 2 à 20 avec le niveau. Le multiplicateur vaut 1,1x dès 3 esquives d’affilée, 1,5x à 10, 2,0x à 20, 2,5x à 30 et 3,0x à 50." },
  { q: "Comment la difficulté augmente-t-elle ?", a: "Chaque partie commence au niveau 1. Le niveau monte de 1 tous les 250 points et de 1 de plus toutes les 4 esquives d’affilée. La vitesse passe de 300 px/s à 1 600 px/s au niveau 15 et continue ensuite ; un long combo ajoute jusqu’à 200 px/s. L’intervalle entre projectiles descend de 0,65 à 0,10 seconde, et de 8 à 58 projectiles peuvent être à l’écran en même temps." },
  { q: "Que se passe-t-il si je suis touché ?", a: "Le combo retombe à 1,0x, tous les projectiles disparaissent de l’écran, avec un flash rouge et une secousse. Le score et le temps restant ne bougent pas. Le flash rouge se désactive pendant la partie avec le bouton en bas à droite." },
  { q: "Quelles commandes utilise-t-on ?", a: "Uniquement la souris. Au lancement, le pointeur est verrouillé et la sensibilité des réglages du site s’applique. Au clavier, seule la touche Échap (quitter) sert. Un ordinateur avec souris est recommandé." },
  { q: "Comment la note est-elle attribuée ?", a: "Le score final est comparé à 17 000 points : S+ dès environ 15 350, S dès environ 12 300, A dès environ 9 550, B dès 6 120, C dès environ 3 450, D dès 1 530. Ce sont des paliers d’entraînement SkillDrills, ni statistiques d’utilisateurs ni centiles." },
  { q: "Quelle différence avec le jeu sur grille 3x3 ?", a: "Ici, vous fuyez des projectiles libres venus de tous les côtés. Dans le jeu sur grille 3x3 de la même catégorie, vous choisissez l’une des 9 cases fixes avant qu’elle n’explose." },
  { q: "Est-ce gratuit ? Où sont gardés mes records ?", a: "Oui, gratuit, sans installation ni compte, directement dans le navigateur. Le meilleur score et le meilleur combo restent dans le stockage local de votre navigateur." },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr',
  dateModified: '2026-11-10',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const steps = [
  "Cliquez sur Démarrer ; après un compte à rebours de 3 secondes, le curseur part du centre de l’écran.",
  "Quand un projectile apparaît sur un bord, il vise votre position actuelle : décalez-vous sur le côté.",
  "Faites des mouvements courts et restez dans les espaces libres entre les projectiles.",
  "Enchaînez les esquives sans être touché, montez le combo et visez votre record en 45 secondes.",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment jouer au jeu d’esquive à la souris',
  description: 'Quatre étapes pour éviter les projectiles et faire monter le combo.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Étape ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const dodgeGuide = {
  heading: 'Guide du jeu d’esquive à la souris',
  intro: [
    "Ce jeu d’esquive à la souris (Quick Dodge) se joue dans le navigateur : des projectiles rouges arrivent de tous les bords vers votre curseur et vous les évitez en bougeant la souris. Le but est de ne pas être touché ; plus les esquives s’enchaînent, plus le multiplicateur de combo monte.",
    "Chaque projectile vise la position du curseur à son apparition, puis file tout droit. Rester immobile, c’est être touché ; un pas de côté suffit souvent. Les mouvements rapides sont planifiés avant de démarrer (Kawato, 1999) : décidez où aller dès qu’un projectile apparaît.",
    "Avec le niveau, les projectiles deviennent plus rapides, plus fréquents et plus gros. Plus les espaces libres rétrécissent, plus le mouvement doit être précis (Fitts, 1954). Être touché vide l’écran et remet seulement le combo à zéro.",
    "Les résultats sont des relevés d’entraînement propres à SkillDrills. La fréquence d’écran et le périphérique influent sur la latence (Woods et al., 2015) : comparez vos scores avec le même matériel.",
  ],
  benchmarks: {
    title: 'Paliers de note (paliers d’entraînement SkillDrills)',
    headers: ['Note', 'Points'],
    rows: [
      ['S+', 'dès environ 15 350'],
      ['S', 'dès environ 12 300'],
      ['A', 'dès environ 9 550'],
      ['B', 'dès 6 120'],
      ['C', 'dès environ 3 450'],
      ['D', 'dès 1 530'],
    ],
    note: 'Les paliers comparent le score final à 17 000 points et sont des paliers d’entraînement SkillDrills. Ni statistiques d’utilisateurs ni centiles.',
  },
  techniques: {
    title: 'Conseils pour marquer plus',
    items: [
      { name: 'Regardez l’apparition', desc: 'Le projectile part vers l’endroit où était le curseur à son apparition. Un court pas de côté suffit souvent.', tips: 'Ne restez pas longtemps au même endroit.' },
      { name: 'Petits mouvements', desc: 'Les grands gestes envoient le curseur droit sur de nouveaux projectiles. Restez dans les espaces libres avec des mouvements courts.', tips: 'Le côté où un projectile vient de passer est souvent libre.' },
      { name: 'Anticipez la taille', desc: 'Les projectiles grossissent en chemin. Esquivez avec de la marge plutôt qu’au ras.', tips: 'Dans la phase rapide, la sécurité d’abord.' },
      { name: 'Gardez le combo', desc: 'Plus la série est longue, plus le multiplicateur et le niveau montent. Après un contact, l’écran est vide : repartez calmement.', tips: 'Détendez poignet et épaule, arrêtez en cas de douleur.' },
    ],
  },
  steps,
  audience: 'Pour qui cherche un jeu d’esquive en ligne dans le navigateur, et pour les joueurs qui veulent travailler le contrôle de la souris.',
  faqs,
  sources: pickSources('kawato1999', 'fitts1954', 'woods2015'),
};

export default function LocalizedQuickDodgePageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <QuickDodgeClient
        copy={{
          title: "Jeu d’esquive à la souris",
          hudLabels: { score: "Score", time: "Temps", bestScore: "Meilleur score", bestCombo: "Meilleur combo", getReady: "PRÊT ?" },
          resultLabels: { newBest: "NOUVEAU RECORD", points: "Points", accuracy: "Taux d’esquive", dodges: "Esquives", peakSpeed: "Vitesse max.", peakLevel: "Niveau max.", playAgain: "Rejouer" },
          rulesTitle: "Règles et calcul du score",
          rulesItems: [
            { title: "Esquiver les projectiles", text: "Des projectiles rouges apparaissent sur un bord et filent vers l’endroit où était le curseur à cet instant. S’ils sortent de l’écran sans vous toucher, c’est une esquive." },
            { title: "Multiplicateur de combo", text: "Les esquives d’affilée font monter le multiplicateur jusqu’à 3,0x (à 50 d’affilée)." },
            { title: "Difficulté croissante", text: "Le niveau monte avec les points et les séries ; les projectiles passent de 300 px/s à plus de 1 600 px/s et apparaissent plus souvent." },
            { title: "Touché", text: "Le combo retombe à 1,0x et l’écran est vidé. Le score et la partie de 45 secondes ne changent pas." },
          ],
          aboutTitle: "À propos du jeu d’esquive",
          aboutSections: [
            { title: "Des projectiles en ligne droite", content: "Chaque projectile vise le curseur à son apparition puis va tout droit. Règle de base : se décaler dès qu’il apparaît." },
            { title: "Décider avant", subtitle: "Kawato, 1999", content: "Les mouvements rapides sont planifiés à l’avance. Fixez votre destination dès qu’un projectile surgit." },
            { title: "Des espaces qui rétrécissent", subtitle: "Fitts, 1954", content: "Plus il y a de projectiles, plus les espaces libres sont petits et plus le geste doit être précis." },
            { title: "Matériel et comparaison", subtitle: "Woods et al., 2015", content: "La fréquence d’écran et le périphérique influent sur la latence. Comparez vos résultats avec le même matériel." },
          ],
        }}
      />
      <DrillGuide guide={dodgeGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/quick-dodge" />
    </>
  );
}
