import StaircaseStepClient from '@/app/drills/visual-tracking/staircase-step/StaircaseStepClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/staircase-step';
const title = "Poursuite oculaire verticale | SkillDrills";
const description = "Poursuite oculaire verticale : une cible descend l'écran marche par marche en zigzag, puis remonte. Exercice gratuit dans le navigateur, vitesse réglable.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite oculaire verticale", "suivre une cible qui monte et descend", "exercice des yeux en ligne", "poursuite oculaire exercice", "zigzag vertical"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/staircase-step') },
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
    { '@type': 'ListItem', position: 3, name: "Poursuite oculaire verticale", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Poursuite oculaire verticale",
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
  name: "Poursuite oculaire verticale",
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
  name: "Poursuite oculaire verticale",
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
  name: "Comment faire la poursuite oculaire verticale",
  description: "Quatre étapes pour suivre des yeux une cible qui descend puis remonte par paliers.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Choisir les réglages", text: "Commencez avec 60 secondes, 1,0x et la ligne visible.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Bien s'installer", text: "Asseyez-vous confortablement et gardez la tête droite.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Suivre uniquement des yeux", text: "Suivez la cible à travers les marches en zigzag vers le bas, puis vers le haut.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez la ligne ou activez la vitesse aléatoire, un réglage à la fois.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Qu'est-ce que la poursuite oculaire verticale ?", a: "Une cible va de gauche à droite en zigzag tout en descendant par paliers, du haut (environ 15 % de la hauteur) vers le bas (environ 85 %). En bas, elle fait demi-tour et remonte par le même chemin. Vous la suivez uniquement des yeux ; aucun clic n'est nécessaire." },
  { q: "À quoi ressemble exactement le tracé ?", a: "Une ligne en zigzag qui relie 8 points, avec 7 changements de direction, et descend un peu à chaque segment. À 1,0x, un trajet dure environ 4,5 secondes ; un multiplicateur plus élevé accélère la cible d'autant." },
  { q: "Les mouvements verticaux sont-ils plus difficiles à suivre ?", a: "Des études montrent que les mêmes personnes suivent souvent moins précisément un mouvement vertical qu'un mouvement horizontal (Rottach et al., 1996). L'exercice ne le mesure pas, mais vous pouvez comparer vous-même la descente et la remontée." },
  { q: "Pourquoi je perds la cible dans les angles ?", a: "Dans un angle, la direction change d'un coup et les yeux prennent un léger retard. La poursuite lisse démarre avec un petit délai après le début du mouvement (Lisberger, 2010). Baissez la vitesse, affichez la ligne et anticipez l'angle suivant." },
  { q: "Que se passe-t-il si je masque la ligne ?", a: "Le tracé en zigzag disparaît. La cible bouge de la même façon, mais vous devez anticiper vous-même le prochain virage." },
  { q: "L'exercice mesure-t-il mes mouvements oculaires ?", a: "Non. Le navigateur ne sait pas où vous regardez : il connaît seulement la position où la cible est dessinée, vos réglages et la position du pointeur. Aucun clic ni toucher n'est nécessaire ; le résultat est un repère de pratique pour vous-même." },
  { q: "Y a-t-il un score ou une note ?", a: "Pas de note. À la fin, l'écran affiche le pourcentage de temps passé avec le pointeur sur la cible, l'écart moyen et RMS entre le pointeur et le centre de la cible, la durée, le multiplicateur de vitesse et le nombre total de séances (enregistré dans ce navigateur). Cela mesure le pointeur, pas vos yeux. Pour compter les pertes de cible, notez-les vous-même." },
  { q: "Quels réglages sont disponibles ?", a: "Durée de 30, 45, 60, 90 ou 120 secondes, vitesse de 0,5x à 9,0x, taille de cible de 10 à 50 px. Vous pouvez aussi masquer la ligne (tracé en zigzag), activer la vitesse aléatoire, la traînée, le halo, les lignes de balayage, le fond clair ou sombre et changer la couleur de la cible. La touche Échap arrête la séance à tout moment." },
  { q: "Est-ce que cela améliore la vue ou la visée ?", a: "Rien ne le garantit. C'est un exercice où l'on suit une cible mobile des yeux ; il ne promet pas une meilleure visée dans les jeux de tir. Comparez vos séances sur le même écran avec les mêmes réglages." },
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
  heading: "Poursuite oculaire verticale : guide",
  intro: [
    "La poursuite oculaire verticale est un exercice gratuit dans le navigateur : une cible va de gauche à droite en zigzag tout en descendant marche par marche du haut vers le bas de l'écran. Arrivée en bas, elle remonte par le même chemin. Le tracé relie 8 points et couvre environ 60 % de la largeur de l'écran.",
    "Après le compte à rebours 3-2-1, la cible bouge pendant la durée choisie (30 à 120 secondes, 60 par défaut). Il n'y a rien à cliquer ni à appuyer ; à la fin, l'écran indique la distance du pointeur à la cible, pas la position de vos yeux. À 1,0x, un trajet dure environ 4,5 secondes.",
    "Le navigateur n'enregistre pas votre regard. Considérez le résultat comme un repère de pratique personnel, basé sur la position du pointeur.",
    "Comparez vos séances sur le même écran et à la même distance ; la fréquence de rafraîchissement et la latence d'affichage influencent la fluidité de la cible (Woods et al., 2015). Arrêtez en cas de douleur, de vertiges, de nausées ou de vision floue persistante."
  ],
  benchmarks: {
    title: "Paliers de pratique indicatifs",
    headers: ["Palier", "Réglage", "Objectif"],
    rows: [
      ["1", "1,0x, ligne visible", "Repérer le chemin de descente et de remontée"],
      ["2", "1,0x à 2,0x", "Suivre sans retard aux points de virage"],
      ["3", "2,0x et plus", "Rester sur la cible malgré la vitesse"],
      ["4", "Ligne masquée", "Anticiper le prochain virage"],
      ["5", "Vitesse aléatoire", "Suivre malgré les changements de vitesse"]
    ],
    note: "Paliers de pratique SkillDrills à titre indicatif. Ce ne sont ni des normes officielles, ni des statistiques d'utilisateurs, ni des percentiles.",
  },
  techniques: {
    title: "Conseils pratiques",
    items: [
      { name: "Gardez la tête immobile", desc: "Si la tête ou le cou suivent, ce ne sont plus vraiment les yeux qui travaillent. Gardez la tête droite et suivez la cible uniquement des yeux.", tips: "Relâchez les épaules et la nuque." },
      { name: "Anticiper les virages", desc: "À chaque angle du tracé, la cible change brusquement de direction. Pensez à la nouvelle direction juste avant.", tips: "Cible perdue ? Ne la poursuivez pas, reprenez au virage suivant." },
      { name: "Comparer descente et remontée", desc: "Observez si la descente ou la remontée vous paraît plus facile.", tips: "Notez vos impressions et comparez avec les mêmes réglages." },
      { name: "Séances courtes et pauses", desc: "Travaillez par blocs de 5 à 10 minutes, clignez des yeux et regardez au loin entre deux séances. Plus long n'est pas forcément mieux.", tips: "Arrêtez tout de suite en cas de douleur ou de vertige." }
    ],
  },
  steps: [
    { title: "Choisir les réglages", text: "Commencez avec 60 secondes, 1,0x et la ligne visible." },
    { title: "Bien s'installer", text: "Asseyez-vous confortablement et gardez la tête droite." },
    { title: "Suivre uniquement des yeux", text: "Suivez la cible à travers les marches en zigzag vers le bas, puis vers le haut." },
    { title: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez la ligne ou activez la vitesse aléatoire, un réglage à la fois." }
  ],
  audience: "Toute personne qui veut s'exercer de façon ludique à suivre des yeux une cible qui change de direction et de hauteur.",
  faqs,
  sources: pickSources('buttner1997', 'rottach1996', 'ke2013', 'collewijn1984', 'lisberger2010', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Exercice de poursuite lente constante" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite en chaos directionnel" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite avec évasion dynamique" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Suppression d'images fantômes" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en huit" },
    { href: "/fr/drills/visual-tracking/sine-wave-pursuit", label: "Poursuite oculaire en onde sinusoïdale" }
  ],
};

export default function StaircaseStepPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StaircaseStepClient
        copy={{
          title: "Poursuite oculaire verticale",
          subtitle: "Descente marche par marche, puis remontée",
          description: "Dans cette poursuite oculaire verticale, une cible descend l'écran en zigzag, marche par marche, puis remonte. Le navigateur n'enregistre pas votre regard : c'est un repère de pratique, pas un test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
