import SpeedDrillClient from '@/app/drills/physical/fitness/speed-drill/SpeedDrillClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/physical/fitness/speed-drill';
const title = 'Jeu de clic : cibles mobiles qui rétrécissent | SkillDrills';
const description = 'Jeu de clic gratuit : touchez des cibles mobiles qui rétrécissent avant qu’elles disparaissent. Chaque touche ajoute 2 s, chaque raté retire 1 s.';

export const metadata = {
  title,
  description,
  keywords: ['jeu de clic', 'jeu de clic sur cibles mobiles', 'cibles qui rétrécissent', 'jeu de souris cibles', 'rapidité de la souris'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/fitness/speed-drill') },
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
    { '@type': 'ListItem', position: 3, name: 'Jeu de clic', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Jeu de clic : cibles mobiles qui rétrécissent',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/fr' },
  inLanguage: 'fr-FR',
  dateModified: '2026-11-10',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Jeu de clic – application web',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navigateur récent compatible HTML5 Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'fr-FR',
  dateModified: '2026-11-10',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Speed Drill : jeu de clic sur cibles qui rétrécissent',
  url,
  description: 'Cliquez des cibles mobiles qui rétrécissent avant qu’elles disparaissent – un jeu de clic à la souris dans le navigateur.',
  genre: ['Action Game', 'Casual Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-10',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: 'Comment fonctionne ce jeu de clic ?', a: 'Des cibles rondes se déplacent à l’écran et rétrécissent ; vous devez les cliquer avant qu’elles disparaissent. Chaque touche combine repérage, déplacement du curseur et précision du clic, et le score et le combo sont enregistrés. C’est un jeu d’entraînement dans le navigateur, pas un examen médical des réflexes.' },
  { q: 'Pourquoi les cibles deviennent-elles de plus en plus petites ?', a: 'Une cible plus petite est plus difficile à toucher, comme le décrit la loi de Fitts (Fitts, 1954). Chaque cible rétrécit après son apparition et disparaît à 4 px de rayon : plus vous cliquez tard, plus c’est dur (si l’option de délai est désactivée, les cibles ne rétrécissent pas). L’idéal est de toucher tôt, tant que la cible est grande.' },
  { q: 'Comment sont calculés les points et le temps ?', a: 'Chaque touche rapporte 100 points multipliés par le combo et le niveau, et ajoute 2 secondes au temps restant (60 secondes au maximum). La partie commence avec 45 secondes et le niveau monte tous les 1 750 points. Si une cible disparaît ou si vous cliquez dans le vide, le combo repart à zéro et 1 seconde est retirée.' },
  { q: 'Le jeu mesure-t-il les clics par seconde ?', a: 'Non. Le jeu ne compte ni le nombre ni la vitesse de vos clics. Chaque cible doit être touchée d’un clic précis, et un clic dans le vide retire 1 seconde : cliquer en rafale vous pénalise.' },
  { q: 'Qu’est-ce qui change quand le niveau monte ?', a: 'Les cibles se déplacent et rétrécissent plus vite, et les nouvelles apparaissent plus petites (rayon de 32 px jusqu’à 10 px minimum). Des touches sans erreur font monter le multiplicateur de combo jusqu’à 3,0x. Un gros score demande à la fois vitesse et précision.' },
  { q: 'Que se passe-t-il quand je rate ?', a: 'Si une cible disparaît ou si vous cliquez à côté, le combo repart aussitôt à zéro et le temps restant baisse d’1 seconde. Cette pénalité s’applique toujours, quels que soient les réglages. Il faut trouver l’équilibre entre vitesse et calme.' },
  { q: 'Est-ce que cela améliore ma visée dans les jeux de tir ?', a: 'Cette page ne le garantit pas. Toucher vite de petites cibles mobiles ressemble à un exercice de visée, mais la sensibilité, l’écran et les règles des jeux sont différents. Servez-vous des résultats pour comparer votre propre progression.' },
  { q: 'Quels réglages de souris utiliser ?', a: 'Il n’y a pas de réponse unique. Commencez avec vos DPI, votre sensibilité et votre prise habituels, et comparez les scores dans les mêmes conditions après chaque changement. En cas de douleur au poignet ou aux doigts, faites une pause ou arrêtez.' },
  { q: 'La fréquence de l’écran et le taux d’interrogation comptent-ils ?', a: 'Un écran à haute fréquence affiche le mouvement des cibles plus finement, et un taux d’interrogation élevé transmet plus souvent les mouvements de la souris. Ce sont des facteurs connus de latence (Woods et al., 2015), mais nous n’avons pas mesuré leur effet sur le score de cet exercice.' },
  { q: 'Où sont enregistrés mes résultats ?', a: 'Le score et le meilleur combo restent dans le stockage local de votre navigateur ; cet exercice ne les envoie à aucun serveur. Si vous effacez les données du navigateur, les résultats disparaissent aussi. Voir la politique de confidentialité pour plus de détails.' },
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
  name: 'Jouer au jeu de clic en 4 étapes',
  description: 'Comment toucher des cibles qui rétrécissent et cumuler points et combo.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Repérer la cible', text: 'Gardez tout l’écran en vue et repérez vite chaque nouvelle cible.', url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: 'Amener le curseur d’un geste', text: 'Sans hésiter, amenez le curseur d’un seul mouvement près de la cible.', url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: 'Cliquer avant le rétrécissement', text: 'Tant que la cible est encore grande, freinez à la fin et cliquez avec précision.', url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: 'Garder le combo', text: 'Enchaînez les touches sans erreur pour cumuler multiplicateur et temps bonus.', url: `${url}#step-4` },
  ],
};

const speedGuide = {
  heading: 'Guide du jeu de clic',
  intro: {
    title: 'Qu’est-ce que ce jeu de clic sur cibles mobiles ?',
    paragraphs: [
      'Le Speed Drill est un jeu de clic dans le navigateur : des cibles rondes se déplacent à l’écran et rétrécissent jusqu’à disparaître, et vous devez les toucher avant. Chaque clic combine recherche, déplacement du curseur et précision – un autre exercice qu’un simple test de temps de réaction.',
      'Viser vite à la souris se décrit souvent en deux phases : un grand mouvement puis une petite correction finale (Woodworth, 1899). La loi de Fitts (Fitts, 1954) explique pourquoi les petites cibles sont plus difficiles. Comme les cibles rétrécissent sans cesse, mieux vaut lancer le grand mouvement tôt.',
      'Des cibles mobiles claires et contrastées attirent l’œil même en bord de champ visuel (Treisman & Gelade, 1980). Plutôt que de fixer un point, regardez tout l’écran pour repérer plus vite les nouvelles cibles.',
      'Comparez vos résultats avec la même souris, la même sensibilité et le même écran ; la fréquence d’affichage et le périphérique influencent la latence (Woods et al., 2015). Les chiffres sont des relevés d’entraînement, pas une mesure médicale ni un classement de joueurs.',
    ],
  },
  benchmarks: {
    title: 'Repères de score',
    headers: ['Palier', 'Points', 'Précision visée', 'Axe de travail'],
    rows: [
      ['Palier 1', 'moins de 6 000', 'moins de 70 %', 'Repérer plus vite les cibles et réduire les clics ratés'],
      ['Palier 2', '6 000 – 10 999', '70 – 81 %', 'Cliquer tôt, tant que la cible est grande'],
      ['Palier 3', '11 000 – 16 999', '82 – 89 %', 'Garder le combo sans interruption'],
      ['Palier 4', '17 000 – 23 999', '90 – 94 %', 'Rester précis sur les cibles rapides'],
      ['Palier 5', '24 000 et plus', '95 % et plus', 'Profiter du temps bonus pour de longues parties'],
    ],
    note: 'Ces paliers sont des niveaux d’entraînement définis par SkillDrills. Ils ne reposent pas sur des statistiques d’utilisateurs, des percentiles ou des valeurs de joueurs professionnels.',
  },
  techniques: {
    title: '4 conseils pour marquer plus',
    items: [
      { name: 'Grand geste, petite correction', desc: 'Amenez le curseur d’un seul mouvement près de la cible et ne freinez qu’à l’arrivée. Glisser lentement laisse à la cible le temps de rétrécir.', tips: 'Longs trajets avec le poignet et le bras, ajustement fin avec les doigts.' },
      { name: 'Cliquer tant que la cible est grande', desc: 'Plus la cible est petite, plus elle est dure à toucher. Ne visez pas le centre parfait : cliquez tôt, à l’intérieur du bord.', tips: 'Si la précision chute, jouez un peu plus lentement.' },
      { name: 'Regarder tout l’écran', desc: 'Fixer un point fait repérer trop tard les cibles de l’autre côté. Regardez le centre calmement et percevez les mouvements en périphérie.', tips: 'Les yeux d’abord, la main juste après.' },
      { name: 'Tenir la souris sans crispation', desc: 'Gardez votre prise habituelle, détendue. Trop de force coûte de la précision et fatigue le poignet.', tips: 'Faites une pause en cas de fatigue et comparez avec le même matériel.' },
    ],
  },
  steps: [
    'Installez-vous confortablement, curseur au centre de l’écran.',
    'Dès qu’une cible apparaît, amenez le curseur près d’elle d’un seul geste.',
    'Cliquez avant qu’elle rétrécisse pour gagner des points et 2 secondes de bonus.',
    'Enchaînez sans erreur pour faire monter le combo et le score.',
  ],
  audience: 'Joueurs et toute personne qui veut pratiquer, en douceur, le clic rapide et juste sur des cibles mobiles qui rétrécissent.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'treisman1980', 'lee1976', 'woods2015'),
};

export default function LocalizedSpeedDrillPageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <SpeedDrillClient
        copy={{
          title: 'Jeu de clic : cibles mobiles qui rétrécissent',
          hudLabels: { score: 'Points', time: 'Temps restant', bestScore: 'Record', bestCombo: 'Meilleur combo' },
          rulesTitle: 'Règles et score',
          rulesItems: [
            { title: 'Toucher pour gagner du temps', text: 'Cliquez chaque cible avant qu’elle disparaisse. Chaque touche rapporte 100 points (avec multiplicateur de combo et de niveau) et 2 secondes de bonus (60 secondes au maximum).' },
            { title: 'Multiplicateur de combo', text: 'Des touches sans erreur font monter le multiplicateur de combo jusqu’à 3,0x.' },
            { title: 'Difficulté croissante', text: 'Tous les 1 750 points, le niveau monte ; les cibles bougent et rétrécissent plus vite.' },
            { title: 'Cible manquée ou clic à côté', text: 'Si une cible disparaît ou si vous cliquez à côté, le combo repart à zéro et 1 seconde est retirée.' },
          ],
          aboutTitle: 'À propos du Speed Drill',
          aboutSections: [
            { title: 'Grand geste, petite correction', subtitle: 'Modèle en deux phases de Woodworth (1899)', content: 'Viser vite, c’est un grand mouvement suivi d’une petite correction finale. Plus le niveau monte, moins il reste de temps pour corriger.' },
            { title: 'Cibles qui rétrécissent et loi de Fitts', subtitle: 'Cibles plus petites, difficulté plus grande', content: 'À mesure que la cible rétrécit jusqu’à 4 px de rayon, la marge se réduit. Cliquer tôt, tant qu’elle est grande, est l’essentiel.' },
            { title: 'Des cibles mobiles qui attirent l’œil', subtitle: 'Recherche visuelle selon Treisman (1980)', content: 'Les cibles mobiles contrastées ressortent même en bord de vision. Regarder tout l’écran aide à repérer plus vite les nouvelles cibles.' },
            { title: 'Estimer le temps avant disparition', subtitle: 'Travaux de Lee (1976) sur le temps avant contact', content: 'Recherches sur la façon dont on estime le temps restant pour des objets qui approchent ou changent de taille – utile pour caler son clic avant que la cible disparaisse.' },
          ],
        }}
      />
      <DrillGuide {...speedGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/fitness/speed-drill" />
    </>
  );
}
