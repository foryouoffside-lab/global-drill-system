import Link from 'next/link';
import KeyboardTesterClient from '@/app/drills/motor/movement-speed/keyboard-tester/KeyboardTesterClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';

const URL = 'https://skilldrills.online/fr/drills/motor/movement-speed/keyboard-tester';
const TITLE = 'Test clavier en ligne AZERTY | Keyboard tester | SkillDrills';
const DESCRIPTION = 'Test clavier en ligne gratuit, compatible AZERTY : appuyez sur chaque touche, voyez event.key et event.code, testez ghosting et rollover sans installation.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['test clavier', 'keyboard tester', 'test clavier en ligne', 'test clavier azerty', 'test touche clavier', 'test ghosting clavier'],
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: URL, siteName: 'SkillDrills', locale: 'fr_FR' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
  alternates: { canonical: URL, languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-tester') },
};

const FAQS = [
  {
    q: 'Comment tester mon clavier avec ce test clavier en ligne ?',
    a: 'Cliquez sur le clavier affiché pour lui donner le focus, puis appuyez une fois sur chaque touche. Une touche s’allume tant qu’elle est enfoncée et reste verte une fois relâchée : toute touche qui ne devient jamais verte n’est pas arrivée jusqu’au navigateur. Le compteur indique combien de touches du schéma vous avez déjà testées.',
  },
  {
    q: 'Le test clavier fonctionne-t-il avec un clavier AZERTY ?',
    a: 'Oui. Les touches sont reconnues par leur position physique (event.code), pas par le caractère qu’elles tapent, donc chaque touche AZERTY correspond à une touche du schéma. Le schéma est dessiné avec des libellés QWERTY américains, mais après chaque appui la touche affiche le caractère réellement tapé par votre disposition, par exemple A à la place de Q. La touche ISO supplémentaire à côté du Shift gauche (< >, event.code IntlBackslash) n’existe pas sur le schéma ANSI : elle s’affiche seulement dans le panneau « Dernière touche » et n’entre pas dans le compteur.',
  },
  {
    q: 'Qu’est-ce que le ghosting d’un clavier ?',
    a: 'Le ghosting, c’est quand un clavier ne signale pas une touche parce que plusieurs autres sont déjà enfoncées. Beaucoup de claviers partagent le câblage entre plusieurs touches, si bien que certaines combinaisons ne peuvent pas être détectées ensemble. Pour le vérifier, maintenez la combinaison que vous utilisez vraiment, par exemple Z, Q et Shift sur AZERTY, et regardez si toutes les touches s’allument en même temps.',
  },
  {
    q: 'Que signifie N-key rollover et que montre « Max. simultanées » ?',
    a: 'Le rollover est le nombre de touches qu’un clavier peut signaler en même temps. N-key rollover signifie que toutes les touches peuvent l’être ; beaucoup de claviers sont limités à 6 touches en USB, ou moins sur certaines combinaisons. Le compteur « Max. simultanées » affiche le plus grand nombre de touches que cette page a vues enfoncées ensemble. C’est une vérification rapide, pas une mesure de laboratoire : le navigateur, le système et le nombre de vos doigts limitent ce qu’il peut montrer.',
  },
  {
    q: 'Pourquoi certaines touches ne s’affichent-elles pas dans un test clavier en ligne ?',
    a: 'Certaines touches sont traitées avant qu’une page web ne les voie. La touche Windows ou Commande, Fn, beaucoup de touches multimédia et de luminosité, ainsi que les raccourcis comme Ctrl+W, Ctrl+T ou Alt+F4 sont pris par le système ou le navigateur. Impr. écran ne se signale souvent qu’au relâchement. Si l’une de ces touches ne s’allume pas, elle n’est pas forcément cassée : testez-la dans une application de bureau.',
  },
  {
    q: 'Que signifient event.key, event.code et keyCode ?',
    a: 'event.code identifie la touche physique (par exemple KeyQ pour la touche A d’un AZERTY), event.key est le caractère ou l’action produit avec votre disposition et vos modificateurs (par exemple a, A ou q), et keyCode est un ancien code numérique que les navigateurs renvoient encore. location indique s’il s’agit de la touche gauche ou droite, comme Shift gauche ou droit, ou d’une touche du pavé numérique.',
  },
  {
    q: 'Puis-je utiliser ce test clavier sur un téléphone ou une tablette ?',
    a: 'Seulement avec un clavier physique branché. Les claviers tactiles ne renvoient pas les codes de touches physiques de la même façon : le test nécessite un clavier USB ou Bluetooth.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: 'Contrôle Moteur', item: 'https://skilldrills.online/fr/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Vitesse de Mouvement', item: 'https://skilldrills.online/fr/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Test clavier', item: URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'fr-FR',
  name: 'Test clavier en ligne',
  description: DESCRIPTION,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navigateur avec JavaScript et clavier physique',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr-FR',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const guideProps = {
  intro: {
    title: 'Que vérifie un test clavier ?',
    paragraphs: [
      'Un test clavier montre si chaque touche de votre clavier arrive bien jusqu’à l’ordinateur. Appuyez sur une touche, elle s’allume sur le schéma ; relâchez-la, elle reste marquée comme testée, ce qui fait ressortir les touches mortes ou capricieuses. Maintenir plusieurs touches ensemble montre si le clavier peut les signaler en même temps : c’est là qu’apparaissent le ghosting et les limites de rollover.',
      'Cette page n’a ni chronomètre ni score. Elle affiche seulement ce que le navigateur a reçu : le code physique de la touche, le caractère produit, sa position et s’il s’agit d’une répétition automatique. Rien n’est enregistré ni envoyé.',
    ],
  },
  faqs: { title: 'Questions fréquentes sur le test clavier', items: FAQS },
};

const copy = {
  h1: 'Test clavier en ligne : testez chaque touche',
  subtitle: 'Appuyez sur n’importe quelle touche pour vérifier qu’elle est détectée, puis maintenez-en plusieurs pour tester le ghosting et le rollover',
  keysTested: 'Touches testées',
  heldNow: 'Enfoncées',
  maxHeld: 'Max. simultanées',
  touchNote: 'Ce test nécessite un clavier physique. Les claviers tactiles ne renvoient pas les codes de touches physiques.',
  ariaLabel: 'Test clavier. Appuyez sur des touches pour les tester ; cliquez ailleurs pour libérer le clavier.',
  listening: 'À l’écoute – appuyez sur une touche',
  clickToStart: 'Cliquez sur le clavier pour commencer le test',
  reset: 'Réinitialiser',
  legendPressed: 'Enfoncée',
  legendTested: 'Testée',
  legendUntested: 'Pas encore testée',
  lastKey: 'Dernière touche',
  noKeyYet: 'Aucune touche pressée pour l’instant.',
  note: 'Les touches sont reconnues par leur position physique (event.code) : AZERTY, QWERTZ, JIS et les autres dispositions fonctionnent, et chaque touche affiche le caractère tapé par votre disposition dès que vous l’avez pressée. Le schéma est un clavier ANSI américain : la touche ISO à côté du Shift gauche (< >) n’y figure pas et apparaît seulement dans « Dernière touche ». Certaines touches n’atteignent jamais une page web : les raccourcis de la touche Windows/Commande, Fn, beaucoup de touches multimédia et des raccourcis comme Ctrl+W ou Alt+F4 sont traités d’abord par le système ou le navigateur. Impr. écran ne se signale souvent qu’au relâchement.',
};

const jsonLd = [breadcrumbSchema, webApplicationSchema, faqSchema];

export default function FrenchKeyboardTesterPage() {
  return (
    <>
      {jsonLd.map((s) => (
        <script key={s['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <KeyboardTesterClient copy={copy} />
      <section className="max-w-6xl mx-auto px-4 pb-2 text-sm text-slate-300 leading-relaxed">
        Toutes les touches répondent ? Entraînez-vous avec : le{' '}
        <Link href="/fr/drills/motor/movement-speed/keyboard-recognition" className="text-cyan-300 underline underline-offset-2 hover:text-white">test de réaction clavier</Link>{' '}
        mesure la vitesse à laquelle vous frappez la touche affichée, et le{' '}
        <Link href="/fr/drills/motor/movement-speed/rapid-tapping" className="text-cyan-300 underline underline-offset-2 hover:text-white">test CPS</Link>{' '}
        mesure combien de clics par seconde vous tenez.
      </section>
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
