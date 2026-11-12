import SplitScreenTrackingClient from '@/app/drills/visual-tracking/split-screen-tracking/SplitScreenTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/split-screen-tracking';
const title = "Poursuite visuelle sur écran partagé | SkillDrills";
const description = "Poursuite visuelle sur écran partagé : suivez deux cibles à la fois, l'une monte et descend à gauche, l'autre va et vient à droite. Exercice gratuit en ligne.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite visuelle sur écran partagé", "suivre deux cibles", "attention partagée exercice", "exercice des yeux en ligne", "poursuite oculaire exercice"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/split-screen-tracking') },
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
    { '@type': 'ListItem', position: 3, name: "Poursuite visuelle sur écran partagé", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Poursuite visuelle sur écran partagé",
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
  name: "Poursuite visuelle sur écran partagé",
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
  name: "Poursuite visuelle sur écran partagé",
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
  name: "Comment faire la poursuite visuelle sur écran partagé",
  description: "Quatre étapes pour suivre des yeux deux cibles qui bougent séparément.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Choisir les réglages", text: "Sélectionnez la durée, la vitesse et la taille de cible. Pour débuter : 60 secondes, 1,0x et lignes repères visibles.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Regard vers le centre", text: "Asseyez-vous confortablement, épaules relâchées, le regard près du centre de l'écran.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Suivre les deux cibles", text: "Gardez en vue la cible de gauche (haut-bas) et celle de droite (gauche-droite) en même temps.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez les lignes repères ou activez la vitesse aléatoire, un réglage à la fois.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Qu'est-ce que la poursuite visuelle sur écran partagé ?", a: "Un exercice gratuit dans le navigateur avec un écran coupé en deux : à gauche, une cible monte et descend ; à droite, une autre va et vient à mi-hauteur. Vous essayez de suivre les deux des yeux sans en perdre aucune. Aucun clic n'est nécessaire." },
  { q: "Peut-on regarder deux cibles en même temps ?", a: "L'œil ne fixe nettement qu'un point à la fois. Vous pouvez garder le regard au centre et percevoir les deux côtés en vision périphérique, ou alterner le regard entre les cibles ; ce qui marche le mieux varie d'une personne à l'autre. Il existe des recherches sur le suivi de plusieurs objets mobiles (Pylyshyn & Storm, 1988 ; Alvarez & Cavanagh, 2005), mais cet exercice ne reproduit pas ces expériences et ne mesure rien." },
  { q: "Pourquoi les deux cibles ne font-elles pas demi-tour en même temps ?", a: "La cible de gauche se déplace verticalement, celle de droite horizontalement, sur des trajets de longueurs différentes et à la même vitesse. Les deux rythmes avancent donc séparément, et se caler sur l'un fait facilement perdre l'autre." },
  { q: "Que se passe-t-il si je masque les lignes repères ?", a: "La ligne de séparation centrale et les deux axes de déplacement discrets disparaissent. Le mouvement des cibles ne change pas, mais sans repère on les perd plus facilement. À essayer une fois la version de base maîtrisée." },
  { q: "Je perds toujours la même cible, que faire ?", a: "Baissez la vitesse, affichez les lignes repères et portez volontairement votre attention sur le côté le plus faible. L'exercice n'enregistre pas quelle cible vous perdez : notez-le vous-même et comparez avec les mêmes réglages." },
  { q: "L'exercice mesure-t-il mes mouvements oculaires ?", a: "Non. Le navigateur ne sait pas où vous regardez : il connaît seulement la position où la cible est dessinée et vos réglages. Aucun clic ni toucher n'est nécessaire ; le résultat est un repère de pratique pour vous-même." },
  { q: "Y a-t-il un score ou une note ?", a: "Non. À la fin, l'écran affiche seulement la durée, le multiplicateur de vitesse, l'activation ou non de la vitesse aléatoire et le nombre total de séances (enregistré dans ce navigateur). Pour compter les pertes de cible, notez-les vous-même." },
  { q: "Quels réglages sont disponibles ?", a: "Durée de 30, 45, 60, 90 ou 120 secondes, vitesse de 0,5x à 9,0x, taille de cible de 10 à 50 px. Vous pouvez aussi masquer les lignes repères (séparation centrale et axes), activer la vitesse aléatoire, la traînée, le halo, les lignes de balayage, le fond clair ou sombre et changer la couleur de la cible. La touche Échap arrête la séance à tout moment." },
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
  heading: "Poursuite visuelle sur écran partagé : guide",
  intro: [
    "La poursuite visuelle sur écran partagé est un exercice gratuit dans le navigateur où vous suivez deux cibles des yeux en même temps. L'écran est coupé en deux : à gauche, une cible monte et descend verticalement ; à droite, une autre va et vient horizontalement à mi-hauteur. Chacune rebondit au bout de sa trajectoire.",
    "Après le compte à rebours 3-2-1, la cible bouge pendant la durée choisie (30 à 120 secondes, 60 par défaut). Il n'y a rien à cliquer ni à appuyer, et pas de score. La vitesse, la taille de la cible, les lignes repères et la vitesse aléatoire règlent la difficulté.",
    "Le navigateur n'enregistre pas votre regard. Considérez le résultat comme un repère de pratique personnel, pas comme un test de vision ou d'attention.",
    "Comparez vos séances sur le même écran et à la même distance ; la fréquence de rafraîchissement et la latence d'affichage influencent la fluidité de la cible (Woods et al., 2015). Arrêtez en cas de douleur, de vertiges, de nausées ou de vision floue persistante."
  ],
  benchmarks: {
    title: "Paliers de pratique indicatifs",
    headers: ["Palier", "Réglage", "Objectif"],
    rows: [
      ["1", "1,0x, lignes repères visibles", "Saisir le rythme des deux cibles"],
      ["2", "1,0x à 2,0x", "Ne perdre aucune cible pendant 60 secondes"],
      ["3", "2,0x et plus", "Garder les deux côtés en vue malgré la vitesse"],
      ["4", "Lignes repères masquées", "Garder les deux positions sans repère"],
      ["5", "Vitesse aléatoire", "Suivre malgré les changements de vitesse"]
    ],
    note: "Paliers de pratique SkillDrills à titre indicatif. Ce ne sont ni des normes d'examen de la vue, ni des statistiques d'utilisateurs, ni des percentiles.",
  },
  techniques: {
    title: "Conseils pratiques",
    items: [
      { name: "Regard au centre, attention des deux côtés", desc: "Fixer une cible fait souvent perdre l'autre. Essayez de garder le regard près du centre et de percevoir les deux mouvements à la fois.", tips: "Si c'est trop difficile, baissez la vitesse et réaffichez les lignes repères." },
      { name: "Deux rythmes distincts", desc: "Vertical à gauche, horizontal à droite, sur des trajets de longueurs différentes : les demi-tours ne tombent pas en même temps. Traitez-les comme deux rythmes séparés.", tips: "Quand une cible fait demi-tour, vérifiez où se trouve l'autre." },
      { name: "Une difficulté à la fois", desc: "Augmentez la vitesse, masquez la ligne ou activez la vitesse aléatoire, mais jamais tout en même temps.", tips: "Comparez seulement des séances aux réglages identiques." },
      { name: "Séances courtes et pauses", desc: "Travaillez par blocs de 5 à 10 minutes, clignez des yeux et regardez au loin entre deux séances. Plus long n'est pas forcément mieux.", tips: "Arrêtez tout de suite en cas de douleur ou de vertige." }
    ],
  },
  steps: [
    { title: "Choisir les réglages", text: "Sélectionnez la durée, la vitesse et la taille de cible. Pour débuter : 60 secondes, 1,0x et lignes repères visibles." },
    { title: "Regard vers le centre", text: "Asseyez-vous confortablement, épaules relâchées, le regard près du centre de l'écran." },
    { title: "Suivre les deux cibles", text: "Gardez en vue la cible de gauche (haut-bas) et celle de droite (gauche-droite) en même temps." },
    { title: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez les lignes repères ou activez la vitesse aléatoire, un réglage à la fois." }
  ],
  audience: "Toute personne qui veut s'exercer de façon ludique à répartir son attention entre deux cibles mobiles.",
  faqs,
  sources: pickSources('pylyshyn1988', 'alvarez2005', 'green2006', 'cavanagh2005', 'woods2015', 'leigh2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Exercice de poursuite lente constante" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite avec changements de direction" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite de cibles qui esquivent" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Suppression des images fantômes" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en forme de huit" },
    { href: "/fr/drills/visual-tracking/sine-wave-pursuit", label: "Poursuite visuelle en onde sinusoïdale" }
  ],
};

export default function SplitScreenTrackingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SplitScreenTrackingClient
        copy={{
          title: "Poursuite visuelle sur écran partagé",
          subtitle: "Suivez deux cibles dans des zones séparées",
          description: "La poursuite visuelle sur écran partagé consiste à suivre des yeux deux cibles à la fois : à gauche, l'une monte et descend ; à droite, l'autre va et vient. Le navigateur n'enregistre pas votre regard : c'est un repère de pratique, pas un test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
