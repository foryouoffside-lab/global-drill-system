import DropCatchClient from '@/app/drills/physical/reflex-training/drop-catch/DropCatchClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/physical/reflex-training/drop-catch';
const title = 'Attraper les cibles qui tombent à la souris | SkillDrills';
const description = 'Attraper les cibles qui tombent : cliquez seulement les vertes, laissez passer les leurres rouges. +2 s par prise, 1 s de pénalité par erreur. Gratuit.';

export const metadata = {
  title,
  description,
  keywords: [
    'attraper les cibles qui tombent',
    'jeu de réflexe avec la souris',
    'jeu de réflexe en ligne',
    'cibles vertes et leurres rouges',
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/drop-catch'),
  },
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
    { '@type': 'ListItem', position: 3, name: 'Attraper les cibles qui tombent', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Attraper les cibles qui tombent (Drop Catch)',
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
  { q: 'Comment fonctionne le jeu « attraper les cibles qui tombent » ?', a: 'Des cibles tombent du haut de l’écran. Vous cliquez uniquement les vertes et laissez passer les leurres rouges sans cliquer. Chaque prise verte rapporte 100 points (avec multiplicateurs de combo et de niveau) et +2 secondes, jusqu’à 60 secondes au maximum. La partie commence avec 45 secondes.' },
  { q: 'Est-ce le test de la règle qui tombe ?', a: 'Non. Dans le test de la règle, on attrape une vraie règle et on calcule un temps de réaction à partir de la distance de chute. Ce jeu ne mesure pas de temps de réaction : vous distinguez des couleurs et ne cliquez que le vert, le résultat est un score.' },
  { q: 'Que se passe-t-il en cas d’erreur ?', a: 'Si une cible verte sort par le bas, si vous cliquez un leurre rouge ou si vous cliquez dans le vide, le combo retombe à 1,0x et vous perdez 1 seconde. Cette pénalité est toujours active et ne peut pas être désactivée.' },
  { q: 'Qu’est-ce qui change quand le niveau monte ?', a: 'Le niveau monte tous les 1 750 points, sans plafond. La vitesse de chute passe d’environ 400 à 1 250 px/s, l’intervalle entre nouvelles cibles descend d’environ 0,8 à 0,18 seconde minimum, la part de leurres rouges monte de 15 % à 45 % et les cibles rétrécissent.' },
  { q: 'Comment éviter de cliquer les leurres rouges par réflexe ?', a: 'Vérifiez d’abord la couleur, puis cliquez. Un modèle décrit une course entre l’impulsion de cliquer et l’arrêt (Logan et al., 1984). Un leurre rouge qu’on laisse tomber ne coûte rien : dans le doute, ne cliquez pas.' },
  { q: 'Où regarder pendant la partie ?', a: 'Plutôt que de fixer un point en haut de l’écran, balayez du regard le tiers supérieur et le tiers central. Placer le curseur sous la trajectoire raccourcit le geste. Ce qui marche le mieux varie d’une personne à l’autre : essayez.' },
  { q: 'La fréquence de l’écran compte-t-elle ?', a: 'Avec une fréquence plus élevée, une cible rapide saute moins loin d’une image à l’autre et la latence d’affichage tend à baisser (Woods et al., 2015). L’effet sur votre score dans ce jeu n’a pas été mesuré : comparez vos résultats sur le même appareil.' },
  { q: 'Où sont enregistrés mes résultats ?', a: 'Le score et le meilleur combo sont gardés dans le stockage local de votre navigateur et ne sont pas envoyés à un serveur par ce jeu. Si vous effacez les données du navigateur, ils disparaissent.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr',
  dateModified: '2026-11-10',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const steps = [
  'Placez le curseur au centre de l’écran et gardez le tiers supérieur et le tiers central en vue.',
  'Quand une cible tombe, vérifiez d’abord : verte ou rouge ?',
  'Cliquez les cibles vertes, laissez tomber les leurres rouges sans cliquer.',
  'Avec +2 secondes par prise et un combo maintenu, faites monter le score.',
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment jouer à « attraper les cibles qui tombent »',
  description: 'Attraper le vert, laisser passer le rouge, en quatre étapes.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Étape ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const dropGuide = {
  heading: 'Guide : attraper les cibles qui tombent',
  intro: [
    'Drop Catch est un jeu de navigateur gratuit où il faut attraper les cibles qui tombent : des cibles descendent du haut de l’écran, vous cliquez seulement les vertes et laissez passer les leurres rouges. Une prise rapporte +2 secondes, une erreur coûte 1 seconde. C’est un jeu de réflexe avec la souris, pas un test de la règle.',
    'Quand il faut d’abord distinguer entre plusieurs stimuli, on répond en général plus lentement qu’à une réaction simple (Donders, 1868). Un modèle décrit aussi une course entre l’impulsion de cliquer et l’arrêt (Logan et al., 1984). Le jeu fait sentir ces deux idées de façon ludique.',
    'Lee (1976) a étudié comment on estime le temps avant l’arrivée d’un objet qui approche. La vitesse de chute monte avec le niveau d’environ 400 à 1 250 px/s : plus vous décidez tard, plus c’est difficile.',
    'Le score est un résultat d’entraînement, pas un test médical de réaction ni une évaluation sportive. Comparez vos résultats sur le même appareil et le même écran.',
  ],
  benchmarks: {
    title: 'Repères : tranches de score',
    headers: ['Palier', 'Points', 'Précision', 'Axe de travail'],
    rows: [
      ['1', 'moins de 6 000', 'moins de 70 %', 'Ne jamais cliquer les leurres rouges'],
      ['2', '6 000 – 10 999', '70 – 81 %', 'Vérifier la couleur, puis cliquer'],
      ['3', '11 000 – 16 999', '82 – 89 %', 'Tenir le combo sans coupure'],
      ['4', '17 000 – 23 999', '90 – 94 %', 'Laisser passer les leurres même à haute vitesse'],
      ['5', 'dès 24 000', 'dès 95 %', 'Allonger la partie grâce au bonus de +2 s'],
    ],
    note: 'Ces tranches sont des paliers d’entraînement SkillDrills. Ce ne sont ni des statistiques d’utilisateurs, ni des centiles, ni une référence pro.',
  },
  techniques: {
    title: '4 conseils pour marquer plus',
    items: [
      { name: 'Regard large, couleur d’abord', desc: 'Ne fixez pas un seul point : surveillez le tiers supérieur et le tiers central. Quand une cible apparaît, vérifiez d’abord la couleur.', tips: 'Ne préparez le clic qu’une fois la couleur claire.' },
      { name: 'Laisser tomber le rouge', desc: 'Un leurre rouge qu’on laisse tomber ne coûte rien. Le cliquer coûte le combo et 1 seconde : dans le doute, ne cliquez pas.', tips: 'Quand les leurres se multiplient, la précision passe avant la vitesse.' },
      { name: 'Attendre sous la trajectoire', desc: 'Au lieu de courir après la cible, placez le curseur à l’avance sous sa trajectoire. Le geste est plus court.', tips: 'Attraper au milieu de l’écran laisse plus de marge.' },
      { name: 'Prise souple', desc: 'Pour les allers-retours rapides, détendez la main et corrigez finement avec les doigts et le poignet.', tips: 'Faites une pause en cas de fatigue et comparez sur le même appareil.' },
    ],
  },
  steps,
  audience: 'Pour qui cherche un jeu de réflexe en ligne avec des cibles qui tombent et un tri par couleur, et pour les joueurs qui veulent s’exercer à retenir un clic.',
  faqs,
  sources: pickSources('donders1868', 'lee1976', 'logan1984', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedDropCatchPageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <DropCatchClient
        copy={{
          title: 'Attraper les cibles qui tombent',
          hudLabels: { score: 'Score', time: 'Temps', bestScore: 'Meilleur score', bestCombo: 'Meilleur combo', getReady: 'PRÉPAREZ-VOUS' },
          resultLabels: { accuracy: 'Précision', catches: 'Prises', fatalDecoys: 'Leurres cliqués', peakLevel: 'Niveau max.' },
          rulesTitle: 'Règles et calcul du score',
          rulesItems: [
            { title: 'Attraper le vert et bonus de temps', text: 'Cliquez les cibles vertes qui tombent pour 100 points (avec multiplicateurs de combo et de niveau) et +2 secondes (60 secondes au maximum).' },
            { title: 'Multiplicateur de combo', text: 'Les prises sans erreur font monter le multiplicateur jusqu’à 3,0x.' },
            { title: 'Montée de niveau', text: 'Le niveau monte tous les 1 750 points. La vitesse de chute (jusqu’à 1 250 px/s) et la part de leurres (jusqu’à 45 %) augmentent.' },
            { title: 'Erreurs et pénalité de temps', text: 'Une cible verte manquée, un clic sur un leurre rouge ou dans le vide remet le combo à zéro et coûte 1 seconde.' },
          ],
          aboutTitle: 'À propos de Drop Catch',
          aboutSections: [
            { title: 'Le timing des cibles qui tombent', subtitle: 'Lee (1976) : temps avant contact', content: 'La vitesse de chute monte avec le niveau. Les travaux de Lee sur l’estimation du temps avant l’arrivée d’un objet aident à comprendre le moment du clic.' },
            { title: 'Cliquer ou s’arrêter', subtitle: 'Logan (1984) : modèle du signal d’arrêt', content: 'Face aux leurres rouges, l’impulsion de cliquer et l’arrêt sont en concurrence. Le jeu entraîne à ne pas cliquer les leurres.' },
            { title: 'Réaction de choix', subtitle: 'Donders (1868) : recherches sur le temps de réaction', content: 'Quand il faut distinguer entre stimuli, la réponse est en général plus lente qu’une réaction simple. Ici, vous ne cliquez que le vert.' },
            { title: 'Geste ample, correction fine', subtitle: 'Woodworth (1899) et Fitts (1954)', content: 'Un pointage rapide combine un grand mouvement et une petite correction finale. Placez-vous d’abord sous la trajectoire, puis freinez et cliquez.' },
          ],
        }}
      />
      <DrillGuide guide={dropGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/drop-catch" />
    </>
  );
}
