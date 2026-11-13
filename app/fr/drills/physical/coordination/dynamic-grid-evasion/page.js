import DynamicGridEvasionClient from '@/app/drills/physical/coordination/dynamic-grid-evasion/DynamicGridEvasionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/physical/coordination/dynamic-grid-evasion';
const title = "Jeu d’évitement sur grille 3x3 à la souris | SkillDrills";
const description = "Jeu d’évitement sur grille gratuit : sortez le curseur des cases qui clignotent en orange sur une grille 3x3 avant qu’elles n’explosent. Parties de 45 s.";

export const metadata = {
  title,
  description,
  keywords: ["jeu d’évitement sur grille", "éviter les cases piégées", "grille 3x3", "jeu d’évitement", "jeu de souris en ligne"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/coordination/dynamic-grid-evasion') },
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
    { '@type': 'ListItem', position: 3, name: 'Jeu d’évitement sur grille 3x3', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Jeu d’évitement sur grille 3x3 (Dynamic Grid Evasion)',
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
  { q: "Comment fonctionne ce jeu d’évitement sur grille 3x3 ?", a: "L’écran est découpé en grille 3x3. À chaque vague, quelques cases clignotent en orange pour avertir. Quand l’avertissement se termine, ces cases explosent en rouge ; si votre curseur est hors de ces cases à cet instant, la vague est évitée. La vague suivante démarre 0,35 seconde après l’explosion, et une partie dure 45 secondes." },
  { q: "Quand la position du curseur est-elle vérifiée ?", a: "Uniquement au moment de l’explosion. Vous pouvez traverser des cases piégées pendant l’avertissement ; il suffit d’être dans une case sûre quand elles explosent. Le curseur part du centre, et la case centrale peut elle aussi devenir piégée." },
  { q: "Comment sont calculés les points et le combo ?", a: "Chaque vague évitée rapporte 100 points multipliés par le combo. Le multiplicateur vaut 1,1x dès 3 vagues d’affilée, 1,25x à 5, 1,5x à 10, 2,0x à 20 et 2,5x à 30. Le code prévoit 3,0x à 50 d’affilée, mais une partie de 45 secondes ne compte guère plus de 40 vagues : 2,5x est le maximum atteignable en pratique." },
  { q: "Comment la difficulté augmente-t-elle ?", a: "Chaque partie commence au niveau 1. Le niveau monte de 1 tous les 250 points, et de 1 de plus toutes les 4 vagues d’affilée. L’avertissement passe de 1,4 à 0,45 seconde et les cases piégées de 3 à 7, ce qui ne laisse que 2 cases sûres. Ces deux valeurs atteignent leur limite au niveau 15." },
  { q: "Une explosion fait-elle perdre des points ou du temps ?", a: "Non. Le combo retombe à 0, avec un flash rouge et une secousse d’écran, mais le score et le temps restant ne bougent pas. Le flash rouge se désactive pendant la partie avec le bouton en bas à droite." },
  { q: "Comment la note est-elle attribuée ?", a: "Le score final est comparé à une référence de 17 000 points (B dès 6 120, C dès environ 3 450, D dès 1 530). Même en évitant toutes les vagues pendant 45 secondes, le calcul plafonne vers 8 400 points : la meilleure note réaliste ici est B." },
  { q: "Quelles commandes utilise-t-on ?", a: "Uniquement la souris. Au lancement, le pointeur est verrouillé et la sensibilité des réglages du site s’applique. Au clavier, seule la touche Échap (quitter) sert. Sur un appareil uniquement tactile, le curseur ne peut pas bouger : un ordinateur avec souris est recommandé." },
  { q: "Quelle différence avec un jeu où l’on évite des projectiles ?", a: "Ici, vous choisissez l’une des 9 cases fixes et vous y entrez avant la fin de l’avertissement. Pour fuir des projectiles venant de tous les bords, utilisez Quick Dodge dans la même catégorie." },
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
  "Cliquez sur Démarrer ; après un compte à rebours de 3 secondes, le curseur part du centre de la grille.",
  "Repérez les cases qui clignotent en orange et trouvez une case sans avertissement.",
  "Avant l’explosion, placez le curseur à l’intérieur de la case sûre, loin du bord.",
  "Enchaînez les vagues, gardez le combo et visez votre record en 45 secondes.",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment jouer au jeu d’évitement sur grille 3x3',
  description: 'Quatre étapes pour sortir des cases piégées de la grille 3x3.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Étape ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const gridGuide = {
  heading: 'Guide du jeu d’évitement sur grille',
  intro: [
    "Ce jeu d’évitement sur grille est un jeu de navigateur : sur une grille 3x3, vous sortez le curseur des cases signalées en orange avant qu’elles n’explosent. Pas d’objets qui volent : vous choisissez l’une des 9 cases, donc la décision rapide et l’arrêt précis comptent autant l’un que l’autre.",
    "Au fil des niveaux, l’avertissement passe de 1,4 à 0,45 seconde et jusqu’à 7 cases sur 9 deviennent piégées. En fin de partie il ne reste que 2 cases sûres, sans temps pour vérifier case par case. Comme dans les expériences d’indices attentionnels de Posner (Posner, 1980), il aide de lire d’un coup d’œil le contraste entre cases qui clignotent et cases sombres.",
    "Un mouvement rapide combine une grande impulsion et une petite correction finale (Woodworth, 1899). Choisir la bonne case puis dépasser son bord compte quand même comme touché : entraînez-vous à vous arrêter dans la case.",
    "Les résultats sont des relevés d’entraînement propres à SkillDrills. Comparez vos scores avec la même souris, la même sensibilité et le même écran.",
  ],
  benchmarks: {
    title: 'Paliers de note (paliers d’entraînement SkillDrills)',
    headers: ['Note', 'Points', 'Repère'],
    rows: [
      ['B', 'dès 6 120', 'presque toutes les vagues évitées en 45 secondes'],
      ['C', 'dès environ 3 450', 'plus de la moitié des vagues évitées d’affilée'],
      ['D', 'dès 1 530', 'passage fiable vers la case libre après l’avertissement'],
      ['F', 'moins de 1 530', 'débutant'],
    ],
    note: 'Les paliers comparent le score final à 17 000 points et sont des paliers d’entraînement SkillDrills. A et au-delà sont hors d’atteinte en 45 secondes selon le calcul. Ni statistiques d’utilisateurs ni centiles.',
  },
  techniques: {
    title: 'Conseils pour marquer plus',
    items: [
      { name: 'Cherchez les cases sombres', desc: 'Plutôt que de compter les cases qui clignotent, cherchez directement la case sans avertissement.', tips: 'En fin de partie, seules 2 cases sont sûres : prenez la plus proche.' },
      { name: 'La case sûre la plus proche', desc: 'Avec environ 0,5 seconde d’avertissement, les longs trajets ne passent plus. Allez vers la case sûre la plus proche.', tips: 'À l’horizontale ou à la verticale, c’est souvent plus court qu’en diagonale.' },
      { name: 'Arrêtez-vous dans la case', desc: 'C’est la position exacte du curseur qui compte. Sur le bord, il peut être compté dans la case voisine.', tips: 'Visez le centre de la case.' },
      { name: 'Gardez le combo', desc: 'Plus la série est longue, plus le multiplicateur et le niveau montent. Tenter une case lointaine et se faire toucher coûte le combo.', tips: 'Préférez la case sûre et proche.' },
    ],
  },
  steps,
  audience: 'Pour qui cherche un jeu d’évitement sur grille avec des cases piégées, et pour les joueurs qui veulent travailler la décision rapide et l’arrêt précis à la souris.',
  faqs,
  sources: pickSources('posner1980', 'woodworth1899', 'fitts1954'),
};

export default function DynamicGridEvasionPageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <DynamicGridEvasionClient
        copy={{
          title: "Jeu d’évitement sur grille 3x3",
          hudLabels: { score: "Score", timeLeft: "Temps restant", bestScore: "Meilleur score", bestCombo: "Meilleur combo" },
          rulesTitle: "Règles et calcul du score",
          rules: [
            { title: "Avertissement", text: "À chaque vague, quelques cases clignotent en orange. À la fin de l’avertissement, elles explosent." },
            { title: "Vers la case sûre", text: "Si le curseur est hors des cases piégées au moment de l’explosion, vous gagnez 100 points multipliés par le combo." },
            { title: "Niveau", text: "Le niveau monte tous les 250 points et toutes les 4 vagues d’affilée. L’avertissement passe de 1,4 à 0,45 s et les cases piégées de 3 à 7." },
            { title: "Touché", text: "Seul le combo retombe à 0. Le score et la partie de 45 secondes ne changent pas." },
          ],
          aboutTitle: "Qu’est-ce que le jeu d’évitement sur grille ?",
          aboutHeading: "Éviter les cases piégées d’une grille 3x3",
          aboutText: "Dans ce jeu d’évitement sur grille, des cases d’une grille 3x3 clignotent en orange avant d’exploser et vous amenez le curseur à temps dans une case sûre. Au fil des niveaux, l’avertissement raccourcit et les cases piégées se multiplient. Il s’agit de décider vite et de freiner la souris avec précision.",
          aboutCards: [
            { title: "Pour qui", desc: "Pour qui aime les jeux d’évitement sur grille ou veut s’exercer à réagir à un avertissement avec la souris." },
            { title: "Ce que vous travaillez", desc: "Distinguer cases piégées et sûres, choisir la plus proche, arrêter le curseur à l’intérieur." },
            { title: "Format", desc: "45 secondes fixes, toujours à partir du niveau 1. Être touché ne coûte ni points ni temps." },
          ],
        }}
      />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
