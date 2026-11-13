import TriangularPursuitClient from '@/app/drills/visual-tracking/triangular-pursuit/TriangularPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/triangular-pursuit';
const title = "Poursuite visuelle triangulaire | SkillDrills";
const description = "Poursuite visuelle triangulaire : une cible fait le tour d'un triangle aux angles marqués, dans le même sens. Exercice gratuit en ligne, vitesse réglable.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite visuelle triangulaire", "exercice des yeux triangle", "poursuite oculaire exercice", "exercice des yeux en ligne", "suivre une cible des yeux"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/triangular-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'fr_FR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "Accueil", item: 'https://skilldrills.online/fr' },
    { '@type': 'ListItem', position: 2, name: "Poursuite visuelle", item: 'https://skilldrills.online/fr/drills/visual-tracking' },
    { '@type': 'ListItem', position: 3, name: "Poursuite visuelle triangulaire", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Poursuite visuelle triangulaire",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/fr' },
  inLanguage: 'fr',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Poursuite visuelle triangulaire",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Navigateur récent compatible HTML5 Canvas",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'fr',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: "Poursuite visuelle triangulaire",
  url,
  description,
  genre: ['Casual Game', 'Educational Game'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'fr',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Comment faire la poursuite visuelle triangulaire",
  description: "Quatre étapes pour suivre des yeux une cible sur un tracé triangulaire.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Choisir les réglages", text: "Commencez avec 60 secondes, 1,0x et la ligne visible.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Bien s'installer", text: "Asseyez-vous confortablement et gardez la tête droite.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Suivre le triangle", text: "Suivez la cible des yeux à travers les trois angles.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez la ligne ou activez la vitesse aléatoire, un réglage à la fois.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Qu'est-ce que la poursuite visuelle triangulaire ?", a: "Une cible fait sans fin le tour d'un triangle dont les sommets sont en haut au centre, en bas à droite et en bas à gauche, toujours dans le même sens. Vous suivez des yeux les deux côtés obliques et la base horizontale sans décrocher aux angles. Aucun clic n'est nécessaire." },
  { q: "La vitesse est-elle constante ?", a: "Chaque côté prend le même temps (environ 1,5 seconde à 1,0x), donc la vitesse varie un peu selon la longueur du côté. Sur un écran large, la base est le plus long côté et la cible y va le plus vite. Le multiplicateur et la vitesse aléatoire la modifient aussi." },
  { q: "Pourquoi je prends du retard ou je dépasse aux angles ?", a: "À un angle, la direction change d'un coup. La poursuite lisse ne suit pas, et les yeux rattrapent souvent la cible par un saut rapide (saccade de rattrapage) (de Brouwer et al., 2002). Baissez la vitesse et pensez à la nouvelle direction juste avant l'angle." },
  { q: "Que se passe-t-il si je masque la ligne ?", a: "Le contour du triangle disparaît. Le tracé reste le même, mais vous devez retenir vous-même la position des angles." },
  { q: "L'exercice mesure-t-il mes mouvements oculaires ?", a: "Non. Le navigateur ne sait pas où vous regardez : il connaît seulement la position où la cible est dessinée, vos réglages et la position du pointeur. Aucun clic ni toucher n'est nécessaire ; le résultat est un repère de pratique pour vous-même." },
  { q: "Y a-t-il un score ou une note ?", a: "Pas de note. À la fin, l'écran affiche le pourcentage de temps passé avec le pointeur sur la cible, l'écart moyen et RMS entre le pointeur et le centre de la cible, la durée, le multiplicateur de vitesse et le nombre total de séances (enregistré dans ce navigateur). Cela mesure le pointeur, pas vos yeux. Pour compter les pertes de cible, notez-les vous-même." },
  { q: "Quels réglages sont disponibles ?", a: "Durée de 30, 45, 60, 90 ou 120 secondes, vitesse de 0,5x à 9,0x, taille de cible de 10 à 50 px. Vous pouvez aussi masquer la ligne (contour du triangle), activer la vitesse aléatoire, la traînée, le halo, les lignes de balayage, le fond clair ou sombre et changer la couleur de la cible. La touche Échap arrête la séance à tout moment." },
  { q: "Est-ce que cela améliore la vue ou la visée ?", a: "Rien ne le garantit. C'est un exercice où l'on suit une cible mobile des yeux ; ce n'est ni un examen de la vue, ni un traitement, et il ne promet pas une meilleure visée dans les jeux de tir. En cas de gêne visuelle, consultez un ophtalmologiste." },
  { q: "L'écran influence-t-il le résultat ?", a: "Oui. La fréquence de rafraîchissement, la luminosité, le contraste, la taille de l'écran et la distance changent la façon dont la cible apparaît (Woods et al., 2015). Comparez uniquement des séances faites sur le même écran, le même navigateur et avec les mêmes réglages." },
  { q: "Combien de temps faut-il s'entraîner ?", a: "Quelques séances d'environ 60 secondes, 5 à 10 minutes au total, avec des pauses. Arrêtez immédiatement en cas d'yeux fatigués, secs ou douloureux, de vertiges, de nausées ou de maux de tête." }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guide = {
  heading: "Poursuite visuelle triangulaire : guide",
  intro: [
    "La poursuite visuelle triangulaire est un exercice gratuit dans le navigateur : une cible parcourt sans fin un triangle, du haut au centre vers le bas à droite, puis le bas à gauche et retour en haut. Des segments droits alternent avec des changements de direction nets aux angles.",
    "Chaque côté prend le même temps (environ 1,5 seconde à 1,0x) ; sur la base, plus longue, la cible va donc un peu plus vite. Après le compte à rebours 3-2-1, la cible bouge pendant la durée choisie (30 à 120 secondes, 60 par défaut). Il n'y a rien à cliquer ni à appuyer ; à la fin, l'écran indique la distance du pointeur à la cible, pas la position de vos yeux.",
    "Le navigateur n'enregistre pas votre regard. Considérez le résultat comme un repère de pratique personnel, pas comme un test de vision ou d'attention.",
    "Comparez vos séances sur le même écran et à la même distance ; la fréquence de rafraîchissement et la latence d'affichage influencent la fluidité de la cible (Woods et al., 2015). Arrêtez en cas de douleur, de vertiges, de nausées ou de vision floue persistante."
  ],
  benchmarks: {
    title: "Paliers de pratique indicatifs",
    headers: ["Palier", "Réglage", "Objectif"],
    rows: [
      ["1", "1,0x, ligne visible", "Repérer les angles et le sens du parcours"],
      ["2", "1,0x à 2,0x", "Tourner aux angles sans retard"],
      ["3", "2,0x et plus", "Rester sur la cible malgré un tour rapide"],
      ["4", "Ligne masquée", "Anticiper l'angle suivant sans contour"],
      ["5", "Vitesse aléatoire", "Suivre malgré les changements de vitesse"]
    ],
    note: "Paliers de pratique SkillDrills à titre indicatif. Ce ne sont ni des normes d'examen de la vue, ni des statistiques d'utilisateurs, ni des percentiles.",
  },
  techniques: {
    title: "Conseils pratiques",
    items: [
      { name: "Suivre calmement les côtés", desc: "Sur les segments droits, regardez le centre de la cible et déplacez les yeux régulièrement.", tips: "La tête et la nuque restent immobiles." },
      { name: "Penser à la direction suivante avant l'angle", desc: "Avoir déjà en tête le côté suivant réduit le retard et le dépassement à l'angle.", tips: "Cible perdue ? Reprenez à l'angle suivant." },
      { name: "S'habituer à la base plus rapide", desc: "La base est le plus long côté, c'est donc là que la cible va le plus vite.", tips: "Activez la vitesse aléatoire seulement une fois ce changement familier." },
      { name: "Séances courtes et pauses", desc: "Travaillez par blocs de 5 à 10 minutes, clignez des yeux et regardez au loin entre deux séances. Plus long n'est pas forcément mieux.", tips: "Arrêtez tout de suite en cas de douleur ou de vertige." }
    ],
  },
  steps: [
    { title: "Choisir les réglages", text: "Commencez avec 60 secondes, 1,0x et la ligne visible." },
    { title: "Bien s'installer", text: "Asseyez-vous confortablement et gardez la tête droite." },
    { title: "Suivre le triangle", text: "Suivez la cible des yeux à travers les trois angles." },
    { title: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez la ligne ou activez la vitesse aléatoire, un réglage à la fois." }
  ],
  audience: "Toute personne qui veut s'exercer de façon ludique à suivre des yeux une cible sur des lignes droites et des angles marqués.",
  faqs,
  sources: pickSources('debrouwer2002', 'heinen2005', 'orbandexivry2007', 'bennett2006', 'barnes2008', 'woods2015'),
};

export default function TriangularPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TriangularPursuitClient
        copy={{
          title: "Poursuite visuelle triangulaire",
          subtitle: "Lignes droites et angles marqués",
          description: "Dans la poursuite visuelle triangulaire, vous suivez des yeux une cible qui fait le tour d'un triangle. Le navigateur n'enregistre pas votre regard : c'est un repère de pratique, pas un test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
