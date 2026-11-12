import StabilityChallengeClient from '@/app/drills/physical/balance-training/stability-challenge/StabilityChallengeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge';
const title = 'Stabilité de la visée à la souris | SkillDrills';
const description = 'Stabilité de la visée à la souris : un vent change de direction et pousse le viseur. Compensez pour rester 45 secondes dans l’anneau. Exercice gratuit.';

export const metadata = {
  title,
  description,
  keywords: ['stabilité de la visée à la souris', 'stabilité souris', 'viseur qui tremble', 'garder la visée stable', 'jeu de stabilité du curseur'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/balance-training/stability-challenge') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'fr_FR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil SkillDrills', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Exercices physiques', item: 'https://skilldrills.online/fr/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Stabilité de la visée à la souris', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Stabilité de la visée à la souris',
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
    q: 'En quoi consiste cet exercice de stabilité de la visée ?',
    a: 'Un anneau de sécurité occupe le centre de l’écran. Une force semblable à du vent pousse sans cesse le viseur vers l’extérieur ; vous la compensez à la souris pour rester dans l’anneau pendant 45 secondes. C’est un exercice de stabilité du curseur.',
  },
  {
    q: 'Comment les points sont-ils calculés ?',
    a: 'Tant que le viseur est dans l’anneau, le combo augmente de 1 toutes les 0,15 seconde et vous gagnez 15 points × multiplicateur. Le multiplicateur démarre à 1,1x au combo 3 et atteint son maximum de 3,0x au combo 50. Aucun clic n’est nécessaire.',
  },
  {
    q: 'Que se passe-t-il si je sors de l’anneau ?',
    a: 'Le combo retombe à 0 et un flash rouge s’affiche (désactivable via le bouton à l’écran). Aucun point ni aucune seconde n’est retiré. De retour dans l’anneau, vous reconstruisez le combo.',
  },
  {
    q: 'Comment la difficulté augmente-t-elle ?',
    a: 'Le niveau monte tous les 250 points et lors des longues séries dans l’anneau, sans plafond. L’anneau rétrécit de 45 px jusqu’à 16 px minimum, et la force du vent part de 250 puis continue d’augmenter (850 au niveau 15).',
  },
  {
    q: 'Mon viseur qui tremble en jeu, cet exercice le corrige-t-il ?',
    a: 'Pas directement. Un viseur qui tremble en jeu vient souvent de la sensibilité, du DPI, des réglages ou du matériel, que cet exercice ne modifie pas. Il ne mesure ni ne diagnostique non plus l’équilibre, les tremblements ou la santé : c’est un jeu de petites corrections continues à la souris.',
  },
  {
    q: 'Comment la note est-elle attribuée ?',
    a: 'Le score final est comparé à une référence SkillDrills de 17 000 points. En gros : A dès 9 563 points, S dès 12 283 et S+ dès 15 342. Ce sont des paliers d’entraînement, pas des statistiques d’utilisateurs ni des centiles.',
  },
  {
    q: 'Est-ce jouable sur mobile ?',
    a: 'Non. Il faut une souris et le Pointer Lock ; l’exercice ne démarre pas sur un appareil uniquement tactile. La touche Échap arrête l’exercice et ramène à l’écran de départ.',
  },
  {
    q: 'Où sont enregistrés mes résultats ?',
    a: 'Meilleur score, meilleur combo et niveau maximal sont stockés uniquement dans le stockage local de votre navigateur. C’est gratuit et sans inscription.',
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
  name: 'Comment faire l’exercice de stabilité de la visée',
  description: 'Quatre étapes pour garder le viseur dans l’anneau malgré le vent.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Démarrer', text: 'Après un compte à rebours de 3 secondes, le Pointer Lock s’active.' },
    { '@type': 'HowToStep', position: 2, name: 'Lire la poussée', text: 'Regardez dans quelle direction le viseur est poussé et déplacez légèrement la souris à l’opposé.' },
    { '@type': 'HowToStep', position: 3, name: 'Rester dans l’anneau', text: 'Plus vous restez dans l’anneau, plus le combo et le multiplicateur montent.' },
    { '@type': 'HowToStep', position: 4, name: 'Suivre l’anneau qui rétrécit', text: 'Avec le niveau, l’anneau se resserre et le vent forcit : corrigez plus tôt et plus finement.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guide = {
  heading: 'Stabilité de la visée à la souris : le guide',
  intro: [
    'Cet exercice de stabilité de la visée à la souris est simple : un vent dont la direction change au hasard pousse le viseur hors du centre, et vous le ramenez à la souris pour rester dans l’anneau de sécurité. Une partie dure exactement 45 secondes.',
    'Un mouvement de visée rapide se décrit comme un grand déplacement suivi d’une correction fine guidée par la vue (Woodworth, 1899). Ici, vous répétez cette correction sans arrêt, et plus l’anneau est petit, plus elle doit être précise (Fitts, 1954).',
    'C’est un jeu de stabilité du curseur : il ne mesure ni l’équilibre ni la santé. Comparez vos résultats uniquement avec vos propres parties, sur la même souris, la même sensibilité et le même écran ; fréquence d’affichage et taux d’interrogation influent sur la latence (Woods et al., 2015).',
  ],
  benchmarks: {
    title: 'Paliers d’entraînement SkillDrills',
    headers: ['Note', 'Points', 'Libellé'],
    rows: [
      ['S+', '15 342 et plus', 'LEGENDARY'],
      ['S', '12 283 – 15 341', 'Élite'],
      ['A', '9 563 – 12 282', 'Excellent'],
      ['B', '6 120 – 9 562', 'Très bien'],
      ['C', '3 443 – 6 119', 'Bien'],
      ['D', '1 530 – 3 442', 'Continuez'],
      ['F', 'moins de 1 530', 'À travailler'],
    ],
    note: 'La note compare le score final à la référence de 17 000 points. Ce sont des paliers d’entraînement SkillDrills, pas des statistiques d’utilisateurs, des centiles ou des normes médicales.',
  },
  techniques: {
    title: 'Quatre conseils pour rester plus longtemps dans l’anneau',
    items: [
      { name: 'Partir du centre', desc: 'Pendant le compte à rebours, le viseur est centré. Évitez les grands gestes au départ : lisez d’abord la direction du vent.', tips: 'Les premières secondes servent à lire la poussée, pas à marquer.' },
      { name: 'Corriger tôt et peu', desc: 'Tirer fort une fois au bord de l’anneau fait souvent passer de l’autre côté. Corrigez dès que la poussée commence.', tips: 'Surveillez l’écart entre le centre de l’anneau et le viseur.' },
      { name: 'Anticiper les changements de vent', desc: 'La direction du vent change au hasard puis tourne progressivement. Gardez la main souple pour éviter une correction soudaine trop forte.', tips: 'Une main ou un avant-bras crispé rend le viseur plus instable.' },
      { name: 'Protéger le combo', desc: 'Le multiplicateur plafonne à 3,0x au combo 50. Chaque sortie remet le combo à 0 : une tenue calme rapporte plus que des corrections brusques.', tips: 'Le nombre de sorties s’affiche dans les résultats sous Blowouts.' },
    ],
  },
  steps: [
    'Lancez l’exercice avec votre souris et votre sensibilité habituelles.',
    'Déplacez légèrement la souris à l’opposé de la poussée.',
    'Restez dans l’anneau pour faire monter combo et multiplicateur.',
    'Après 45 secondes, consultez note, stabilité en %, sorties et niveau maximal.',
  ],
  audience: 'Joueurs qui veulent s’exercer à garder la visée stable face à une poussée, et curieux qui veulent tester la stabilité de leur curseur.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'woods2015'),
};

export default function StabilityChallengeFrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <StabilityChallengeClient
        copy={{
          title: 'Stabilité de la visée à la souris',
          hudLabels: {
            score: 'Score',
            time: 'Temps',
            getReady: 'Préparez-vous',
            points: 'Points',
            stability: 'Stabilité',
            blowouts: 'Sorties',
            maxStreak: 'Meilleur combo',
            peakLevel: 'Niveau max',
            playAgain: 'Rejouer',
          },
          rulesTitle: 'Règles et calcul du score',
          rulesItems: [
            { title: 'Rester dans l’anneau central', text: 'Un vent de direction aléatoire pousse le viseur. Compensez à la souris pour rester dans l’anneau.' },
            { title: 'Multiplicateur de combo (jusqu’à 3,0x)', text: 'Dans l’anneau, le combo monte toutes les 0,15 s et rapporte 15 points × multiplicateur. Au combo 50 : 3,0x.' },
            { title: 'Montée de niveau', text: 'Le niveau monte tous les 250 points et lors des longues séries. L’anneau rétrécit jusqu’à 16 px et le vent forcit sans cesse.' },
            { title: 'Sortie de l’anneau', text: 'Poussé hors de l’anneau, vous perdez le combo (retour à 0). Aucun point ni temps n’est retiré.' },
          ],
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
