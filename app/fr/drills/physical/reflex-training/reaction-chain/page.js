import ReactionChainClient from '@/app/drills/physical/reflex-training/reaction-chain/ReactionChainClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/physical/reflex-training/reaction-chain';
const title = 'Freinage de visée souris : arrêt sur cible | SkillDrills';
const description = 'Freinage de visée à la souris : arrêtez net le curseur sur des cibles qui arrivent des bords. Chaque passage sans arrêt ou cible manquée coûte 1 seconde.';

export const metadata = {
  title,
  description,
  keywords: ['freinage de visée', 'arrêt sur cible', 'overflick', 'arrêter le curseur sur la cible', 'freinage de visée souris'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/reaction-chain') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'fr_FR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil SkillDrills', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Jeux d’agilité et de coordination', item: 'https://skilldrills.online/fr/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Freinage de visée', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Freinage de visée souris – arrêt sur cible (Reaction Chain)',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navigateur avec HTML5 Canvas et Pointer Lock, souris',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/fr' },
  inLanguage: 'fr-FR',
  dateModified: '2026-11-10',
};

const faqs = [
  {
    q: 'Que travaille cet exercice de freinage de visée ?',
    a: 'Des nœuds arrivent en ligne droite depuis l’un des quatre bords de l’écran. Vous amenez le curseur sur un nœud et l’y arrêtez complètement. Limiter l’overflick demande justement ce dernier temps de freinage : l’exercice l’isole.',
  },
  {
    q: 'Comment les points sont-ils calculés ?',
    a: 'Un arrêt dans le nœud (affichage ARREST READY) rapporte 50 points × multiplicateur. Il n’y a pas de clic. À partir de 5 arrêts d’affilée : 1,2x ; 10 : 1,5x ; 25 : 2,0x ; 40 : le maximum de 3,0x.',
  },
  {
    q: 'Que se passe-t-il en cas d’erreur ?',
    a: 'Une erreur, c’est traverser un nœud sans s’arrêter ou laisser un nœud sortir de l’écran. Chaque erreur retire 1 seconde au temps restant et remet le multiplicateur à 1,0x. Aucun point n’est retiré. Cette pénalité de temps est toujours active et ne se désactive pas.',
  },
  {
    q: 'Quand un arrêt est-il validé ?',
    a: 'Dès que le curseur, à l’intérieur du nœud, se déplace à moins de 1,5 pixel par image. Plus vite, le contact compte comme une traversée. C’est un seuil propre à l’exercice.',
  },
  {
    q: 'Comment la difficulté augmente-t-elle ?',
    a: 'Le niveau monte avec le score, de 1 à 10 (à 250, 500, 1 000, 2 000, 3 500, 5 500, 8 000, 11 000 et 15 000 points). La vitesse des nœuds passe de 360 à 1 800 px/s, 1 à 5 nœuds sont présents en même temps, et leur rayon passe de 15 à 6 px.',
  },
  {
    q: 'S’arrêter est-il plus dur que démarrer ?',
    a: 'Beaucoup le ressentent ainsi, mais cela varie selon les personnes. Un modèle connu décrit le départ et l’arrêt comme une course entre deux processus (Logan & Cowan, 1984) ; si l’arrêt arrive trop tard, l’élan emporte le curseur au-delà de la cible. Le score ne mesure pas un temps de réaction d’arrêt.',
  },
  {
    q: 'Est-ce que je vais progresser sur Valorant ou CS2 ?',
    a: 'Cette page ne le garantit pas. L’exercice travaille le freinage sur la cible, mais la sensibilité, l’écran et les règles des jeux sont différents. Servez-vous-en pour comparer vos propres parties.',
  },
  {
    q: 'De quoi ai-je besoin ?',
    a: 'D’une souris. Après le compte à rebours, le Pointer Lock s’active et vous jouez uniquement en déplaçant la souris ; l’exercice ne démarre pas sur un appareil uniquement tactile. Gardez vos DPI et votre sensibilité habituels et comparez les changements dans les mêmes conditions.',
  },
  {
    q: 'Où sont enregistrés mes résultats ?',
    a: 'Meilleur score, meilleur multiplicateur et niveau maximal restent uniquement dans le stockage local de votre navigateur et ne sont envoyés à aucun serveur. Si vous effacez les données du navigateur, ils disparaissent.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr-FR',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment faire l’exercice de freinage de visée',
  description: 'Quatre étapes pour arrêter proprement le curseur sur la cible.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Approcher vite', text: 'Dès qu’un nœud apparaît, amenez rapidement le curseur sur sa trajectoire.' },
    { '@type': 'HowToStep', position: 2, name: 'Freiner avant le bord', text: 'Ralentissez juste avant d’atteindre le bord du nœud.' },
    { '@type': 'HowToStep', position: 3, name: 'S’arrêter dans la cible', text: 'Immobilisez complètement le curseur dans le nœud jusqu’à l’affichage ARREST READY.' },
    { '@type': 'HowToStep', position: 4, name: 'Garder la série', text: 'Arrêtez-vous nœud après nœud sans traverser. Chaque erreur coûte 1 seconde.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guideProps = {
  heading: 'Freinage de visée souris : le guide',
  intro: [
    'Reaction Chain est un exercice de freinage de visée dans le navigateur : vous freinez le curseur sur des nœuds qui arrivent des bords de l’écran et l’y arrêtez complètement. Il n’y a pas de clic, seul l’arrêt compte. Une partie dure 45 secondes et chaque erreur coûte 1 seconde.',
    'Un modèle connu décrit le départ et l’arrêt comme une course entre deux processus (Logan & Cowan, 1984). Un mouvement de visée rapide se compose d’un grand déplacement et d’une correction fine (Woodworth, 1899), et plus la cible est petite, plus l’arrêt doit être précis (Fitts, 1954).',
    'Comparez vos résultats avec la même souris, la même sensibilité et le même écran ; la fréquence d’affichage et le périphérique influent sur la latence (Woods et al., 2015). Les chiffres sont des relevés d’entraînement et ne garantissent aucun résultat en jeu.',
  ],
  benchmarks: {
    title: 'Niveaux et difficulté (valeurs du jeu)',
    headers: ['Niveau', 'Dès (points)', 'Vitesse des nœuds', 'Nœuds simultanés', 'Rayon des nœuds'],
    rows: [
      ['1', '0', '360 px/s', '1', '15 px'],
      ['2', '250', '420 px/s', '1', '14 px'],
      ['3', '500', '500 px/s', '2', '13 px'],
      ['4', '1 000', '600 px/s', '2', '12 px'],
      ['5', '2 000', '720 px/s', '2', '11 px'],
      ['6', '3 500', '850 px/s', '3', '10 px'],
      ['7', '5 500', '1 000 px/s', '3', '9 px'],
      ['8', '8 000', '1 200 px/s', '4', '8 px'],
      ['9', '11 000', '1 450 px/s', '4', '7 px'],
      ['10', '15 000', '1 800 px/s', '5', '6 px'],
    ],
    note: 'Ces valeurs sont fixées dans le code de l’exercice. Pas de statistiques d’utilisateurs, pas de centiles.',
  },
  techniques: {
    title: 'Quatre techniques pour un arrêt propre',
    items: [
      { name: 'Freiner avant le bord', desc: 'Freiner seulement au bord du nœud, c’est trop tard. Commencez à ralentir juste avant.', tips: 'Au début, visez l’affichage ARREST READY plutôt que les points.' },
      { name: 'S’arrêter en souplesse', desc: 'Des doigts et un poignet crispés font trembler le curseur. Freinez en douceur, comme si vous laissiez l’élan s’éteindre.', tips: 'Tapis et patins changent la sensation d’arrêt : comparez avec le même matériel.' },
      { name: 'Ne pas traverser', desc: 'Passer vite sur un nœud ne compte pas comme un arrêt, coûte 1 seconde et casse la série.', tips: 'Tenez l’arrêt un court instant.' },
      { name: 'Ne laisser filer aucun nœud', desc: 'Un nœud qui sort de l’écran coûte aussi 1 seconde. Avec plusieurs nœuds, traitez d’abord le plus proche.', tips: 'Le multiplicateur n’atteint 3,0x qu’après 40 arrêts d’affilée : le calme paie.' },
    ],
  },
  steps: [
    'Cliquez sur Démarrer et attendez que le Pointer Lock s’active après le compte à rebours.',
    'Amenez rapidement le curseur sur la trajectoire du nœud.',
    'Freinez juste avant le bord et arrêtez-vous complètement dans le nœud.',
    'Enchaînez les arrêts pendant 45 secondes. Chaque erreur coûte 1 seconde.',
  ],
  audience: 'Joueurs de FPS qui veulent limiter l’overflick par un exercice ciblé, et toute personne qui veut s’entraîner à freiner la souris.',
  faqs: { title: 'Questions fréquentes', items: faqs },
  sources: pickSources('logan1984', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedReactionChainPageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ReactionChainClient
        copy={{
          title: 'Freinage de visée souris : arrêt sur cible',
          subtitle: 'Amenez le curseur sur la cible et arrêtez-vous net',
          description: 'Arrêter un mouvement rapide pile sur la cible est, pour beaucoup, plus difficile que le lancer. Un modèle connu décrit le départ et l’arrêt comme une course entre deux processus (Logan & Cowan, 1984) ; si l’arrêt arrive trop tard, l’élan emporte le curseur au-delà de la cible. Essayez sur les nœuds.',
          hudLabels: {
            score: 'Points',
            time: 'Temps restant',
            accuracy: 'Taux d’arrêt',
            bestScore: 'Record',
            getReady: 'Préparez-vous',
          },
          resultLabels: {
            newBest: 'Nouveau record',
            points: 'Points',
            accuracy: 'Taux d’arrêt',
            totalArrests: 'Arrêts',
            maxCombo: 'Meilleur multiplicateur',
            peakLevel: 'Niveau max',
            playAgain: 'Rejouer',
          },
          rulesTitle: 'Règles et calcul du score',
          rulesItems: [
            { title: 'Arrêt dans le nœud (+50 pts)', text: 'Immobilisez complètement le curseur dans le nœud (ARREST READY) : 50 points × multiplicateur. Il n’y a pas de clic.' },
            { title: 'Multiplicateur (max. 3,0x)', text: 'À partir de 5 arrêts d’affilée 1,2x, de 10 1,5x, de 25 2,0x, de 40 3,0x.' },
            { title: 'Traversée / cible manquée (-1 s)', text: 'Traverser un nœud sans s’arrêter ou le laisser sortir de l’écran coûte 1 seconde et remet le multiplicateur à 1,0x (aucun point retiré).' },
            { title: 'Niveaux 1 à 10', text: 'Avec le score, la vitesse des nœuds (jusqu’à 1 800 px/s) et leur nombre (jusqu’à 5) augmentent ; les nœuds rétrécissent.' },
          ],
          aboutTitle: 'À propos du freinage de visée',
          aboutSections: [
            { title: 'Travailler uniquement l’arrêt', content: 'Reaction Chain isole le freinage sur la cible. Il n’y a pas de clic ; les points ne viennent que si le curseur est complètement immobile dans le nœud.' },
            { title: 'Une course entre départ et arrêt', content: 'Un modèle connu décrit le départ et l’arrêt comme une course entre deux processus (Logan & Cowan, 1984). Si l’arrêt arrive trop tard, le curseur dépasse la cible. L’effet de l’exercice n’est pas démontré ; il sert à comparer vos propres parties.' },
          ],
          aboutCards: [
            { title: 'Pour qui', desc: 'Joueurs de FPS qui veulent moins d’overflick, et toute personne qui veut s’entraîner à freiner la souris.', bgClass: 'bg-blue-600/30', iconClass: 'text-blue-400' },
            { title: 'Ce que vous travaillez', desc: 'Le moment du freinage, l’arrêt dans de petites cibles et l’interception de cibles qui traversent l’écran.', bgClass: 'bg-emerald-600/30', iconClass: 'text-emerald-400' },
            { title: 'Critère d’arrêt', desc: 'Moins de 1,5 pixel par image à l’intérieur du nœud compte comme un arrêt.', bgClass: 'bg-purple-600/30', iconClass: 'text-purple-400' },
          ],
        }}
      >
        <DrillGuide {...guideProps} />
        <RelatedDrills />
      </ReactionChainClient>
    </>
  );
}
