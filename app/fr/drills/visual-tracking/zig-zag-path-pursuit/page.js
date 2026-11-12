import ZigZagPathPursuitClient from '@/app/drills/visual-tracking/zig-zag-path-pursuit/ZigZagPathPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/zig-zag-path-pursuit';
const title = "Poursuite visuelle en zigzag | SkillDrills";
const description = "Poursuite visuelle en zigzag : une cible monte et descend en virages serrés, de gauche à droite puis retour. Exercice gratuit en ligne, pas un test de vue.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite visuelle en zigzag", "exercice des yeux zigzag", "poursuite oculaire exercice", "exercice des yeux en ligne", "suivre une cible des yeux"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/zig-zag-path-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Poursuite visuelle en zigzag", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Poursuite visuelle en zigzag",
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
  name: "Poursuite visuelle en zigzag",
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
  name: "Poursuite visuelle en zigzag",
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
  name: "Comment faire la poursuite visuelle en zigzag",
  description: "Quatre étapes pour suivre des yeux une cible sur un tracé en zigzag.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Choisir les réglages", text: "Commencez avec 60 secondes, 1,0x et la ligne visible.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Bien s'installer", text: "Asseyez-vous confortablement et gardez la tête droite.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Suivre le zigzag", text: "Suivez la cible des yeux dans tous les virages, à l'aller comme au retour.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez la ligne ou activez la vitesse aléatoire, un réglage à la fois.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Qu'est-ce que la poursuite visuelle en zigzag ?", a: "Une cible monte et descend entre le haut (environ 20 % de la hauteur) et le bas (environ 80 %) en 7 virages serrés, du bord gauche au bord droit, puis revient par le même chemin. Vous la suivez uniquement des yeux ; aucun clic n'est nécessaire." },
  { q: "Quelle différence avec la poursuite visuelle triangulaire ?", a: "Dans le triangle, la cible tourne toujours dans le même sens autour de trois angles. Dans le zigzag, les virages serrés se suivent de près et, au bord, tout le sens du parcours s'inverse. À 1,0x, un trajet dure environ 4,5 secondes." },
  { q: "Et avec la poursuite oculaire verticale ?", a: "Dans la poursuite oculaire verticale, la cible va de gauche à droite en descendant. Ici, elle monte et descend en avançant vers la droite : chaque segment est donc surtout vertical." },
  { q: "Pourquoi mon regard dépasse la cible dans les virages ?", a: "Dans un virage, la direction change d'un coup. La poursuite lisse ne suit pas et les yeux corrigent souvent par un saut rapide (de Brouwer et al., 2002). Baissez la vitesse, affichez la ligne et anticipez le virage suivant." },
  { q: "Que se passe-t-il si je masque la ligne ?", a: "Le tracé en zigzag disparaît. La cible bouge de la même façon, mais vous devez anticiper vous-même le prochain virage." },
  { q: "L'exercice mesure-t-il mes mouvements oculaires ?", a: "Non. Le navigateur ne sait pas où vous regardez : il connaît seulement la position où la cible est dessinée et vos réglages. Aucun clic ni toucher n'est nécessaire ; le résultat est un repère de pratique pour vous-même." },
  { q: "Y a-t-il un score ou une note ?", a: "Non. À la fin, l'écran affiche seulement la durée, le multiplicateur de vitesse, l'activation ou non de la vitesse aléatoire et le nombre total de séances (enregistré dans ce navigateur). Pour compter les pertes de cible, notez-les vous-même." },
  { q: "Quels réglages sont disponibles ?", a: "Durée de 30, 45, 60, 90 ou 120 secondes, vitesse de 0,5x à 9,0x, taille de cible de 10 à 50 px. Vous pouvez aussi masquer la ligne (tracé en zigzag), activer la vitesse aléatoire, la traînée, le halo, les lignes de balayage, le fond clair ou sombre et changer la couleur de la cible. La touche Échap arrête la séance à tout moment." },
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
  heading: "Poursuite visuelle en zigzag : guide",
  intro: [
    "La poursuite visuelle en zigzag est un exercice gratuit dans le navigateur : une cible monte et descend entre le haut et le bas de l'écran tout en avançant du bord gauche vers le bord droit. Arrivée à droite, elle revient par le même chemin. Le tracé relie 8 points avec 7 virages serrés.",
    "Après le compte à rebours 3-2-1, la cible bouge pendant la durée choisie (30 à 120 secondes, 60 par défaut). Il n'y a rien à cliquer ni à appuyer, et pas de score. À 1,0x, un trajet dure environ 4,5 secondes.",
    "Le navigateur n'enregistre pas votre regard. Considérez le résultat comme un repère de pratique personnel, pas comme un test de vision ou d'attention.",
    "Comparez vos séances sur le même écran et à la même distance ; la fréquence de rafraîchissement et la latence d'affichage influencent la fluidité de la cible (Woods et al., 2015). Arrêtez en cas de douleur, de vertiges, de nausées ou de vision floue persistante."
  ],
  benchmarks: {
    title: "Paliers de pratique indicatifs",
    headers: ["Palier", "Réglage", "Objectif"],
    rows: [
      ["1", "1,0x, ligne visible", "Repérer la position et le rythme des virages"],
      ["2", "1,0x à 2,0x", "Suivre sans retard dans les virages"],
      ["3", "2,0x et plus", "Rester sur la cible malgré les allers-retours rapides"],
      ["4", "Ligne masquée", "Anticiper le prochain virage"],
      ["5", "Vitesse aléatoire", "Suivre malgré les changements de vitesse"]
    ],
    note: "Paliers de pratique SkillDrills à titre indicatif. Ce ne sont ni des normes d'examen de la vue, ni des statistiques d'utilisateurs, ni des percentiles.",
  },
  techniques: {
    title: "Conseils pratiques",
    items: [
      { name: "Ne pas hocher la tête", desc: "Avec les grands mouvements haut-bas, la tête a tendance à suivre. Gardez-la droite et suivez uniquement des yeux.", tips: "Relâchez les épaules et la nuque." },
      { name: "Anticiper les virages", desc: "Juste avant chaque virage, pensez déjà à la direction opposée.", tips: "Cible perdue ? Reprenez au segment suivant." },
      { name: "Se préparer au demi-tour au bord", desc: "Aux bords gauche et droit, tout le sens du parcours s'inverse.", tips: "Pensez au chemin du retour juste avant le bord." },
      { name: "Séances courtes et pauses", desc: "Travaillez par blocs de 5 à 10 minutes, clignez des yeux et regardez au loin entre deux séances. Plus long n'est pas forcément mieux.", tips: "Arrêtez tout de suite en cas de douleur ou de vertige." }
    ],
  },
  steps: [
    { title: "Choisir les réglages", text: "Commencez avec 60 secondes, 1,0x et la ligne visible." },
    { title: "Bien s'installer", text: "Asseyez-vous confortablement et gardez la tête droite." },
    { title: "Suivre le zigzag", text: "Suivez la cible des yeux dans tous les virages, à l'aller comme au retour." },
    { title: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez la ligne ou activez la vitesse aléatoire, un réglage à la fois." }
  ],
  audience: "Toute personne qui veut s'exercer de façon ludique à suivre des yeux une cible à travers des changements de direction rapides.",
  faqs,
  sources: pickSources('debrouwer2002', 'krauzlis2004', 'orbandexivry2007', 'bennett2006', 'barnes2008', 'woods2015'),
};

export default function ZigZagPathPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ZigZagPathPursuitClient
        copy={{
          title: "Poursuite visuelle en zigzag",
          subtitle: "Virages serrés vers le haut et le bas",
          description: "Dans la poursuite visuelle en zigzag, une cible monte et descend en virages serrés, de gauche à droite puis retour. Le navigateur n'enregistre pas votre regard : c'est un repère de pratique, pas un test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
