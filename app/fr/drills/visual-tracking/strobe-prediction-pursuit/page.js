import StrobePredictionPursuitClient from '@/app/drills/visual-tracking/strobe-prediction-pursuit/StrobePredictionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/fr/drills/visual-tracking/strobe-prediction-pursuit';
const title = "Poursuite stroboscopique : cible clignotante | SkillDrills";
const description = "Poursuite stroboscopique : une cible rebondit sur les bords et disparaît à intervalles réguliers. Anticipez sa position. Exercice gratuit, pas un test de vue.";

export const metadata = {
  title,
  description,
  keywords: ["poursuite stroboscopique", "cible clignotante", "anticiper une trajectoire exercice", "poursuite oculaire exercice", "exercice des yeux en ligne"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/strobe-prediction-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Poursuite stroboscopique : cible clignotante", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Poursuite stroboscopique : cible clignotante",
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
  name: "Poursuite stroboscopique : cible clignotante",
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
  name: "Poursuite stroboscopique : cible clignotante",
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
  name: "Comment faire la poursuite stroboscopique",
  description: "Quatre étapes pour suivre une cible qui disparaît régulièrement et anticiper sa position.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Choisir les réglages", text: "Commencez avec 60 secondes, 1,0x et le contour visible.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Lire le mouvement", text: "Pendant la phase visible, suivez la direction et la vitesse de la cible.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Franchir la phase invisible", text: "Quand la cible disparaît, continuez à déplacer le regard dans la direction attendue.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez le contour ou activez la vitesse aléatoire, un réglage à la fois.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Qu'est-ce que la poursuite stroboscopique ?", a: "Un exercice dans le navigateur avec une seule cible qui se déplace en ligne droite et rebondit sur les bords de l'écran. Elle est visible environ deux tiers de chaque cycle et cachée un tiers. Comme elle continue d'avancer en étant invisible, vous anticipez l'endroit où elle va réapparaître." },
  { q: "Que fait la cible quand elle est invisible ?", a: "Elle continue dans la même direction et à la même vitesse. Si la ligne est affichée, un contour discret marque sa position. Si vous masquez la ligne, le contour disparaît aussi et vous ne suivez plus que votre anticipation." },
  { q: "Le rythme du clignotement change-t-il ?", a: "Le cycle est compté en images affichées et raccourcit avec le multiplicateur de vitesse. Une vitesse plus élevée accélère donc à la fois le mouvement et le clignotement." },
  { q: "Est-ce la même chose qu'un entraînement avec lunettes stroboscopiques ?", a: "Non. Les études sur les lunettes stroboscopiques (par exemple Appelbaum et al., 2011) utilisent des lunettes qui occultent tout le champ de vision par intermittence. Ici, seule une cible à l'écran disparaît et réapparaît. Les résultats de ces études ne s'appliquent pas à cet exercice." },
  { q: "Et si je suis sensible aux lumières clignotantes ?", a: "L'écran entier ne flashe pas : seule une cible disparaît et réapparaît. Si vous avez déjà mal réagi à une lumière clignotante, évitez quand même cet exercice et arrêtez dès le moindre malaise." },
  { q: "L'exercice mesure-t-il mes mouvements oculaires ?", a: "Non. Le navigateur ne sait pas où vous regardez : il connaît seulement la position où la cible est dessinée et vos réglages. Aucun clic ni toucher n'est nécessaire ; le résultat est un repère de pratique pour vous-même." },
  { q: "Y a-t-il un score ou une note ?", a: "Pas de note. À la fin, l'écran indique combien de temps le pointeur est resté sur la cible et sa distance moyenne au centre, séparément pour les phases visible et masquée, ainsi que la durée, le multiplicateur de vitesse et le nombre total de séances (enregistré dans ce navigateur). C'est le pointeur qui est mesuré, pas vos yeux." },
  { q: "Quels réglages sont disponibles ?", a: "Durée de 30, 45, 60, 90 ou 120 secondes, vitesse de 0,5x à 9,0x, taille de cible de 10 à 50 px. Vous pouvez aussi masquer la ligne (contour pendant la phase invisible), activer la vitesse aléatoire, la traînée, le halo, les lignes de balayage, le fond clair ou sombre et changer la couleur de la cible. La touche Échap arrête la séance à tout moment." },
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
  heading: "Poursuite stroboscopique : guide",
  intro: [
    "La poursuite stroboscopique est un exercice gratuit dans le navigateur : une cible se déplace en ligne droite, rebondit sur les bords de l'écran et disparaît à intervalles réguliers. Elle est visible environ deux tiers de chaque cycle et cachée environ un tiers.",
    "Pendant qu'elle est invisible, la cible continue dans la même direction et à la même vitesse. Par défaut, un contour discret indique sa position ; si vous masquez la ligne, le contour disparaît aussi. Après le compte à rebours 3-2-1, la cible bouge pendant la durée choisie (30 à 120 secondes, 60 par défaut). Il n'y a rien à cliquer ; si vous suivez la cible avec le pointeur, l'écran final indique la distance du pointeur à la cible.",
    "Le navigateur n'enregistre pas votre regard. Considérez le résultat comme un repère de pratique personnel, pas comme un test de vision ou d'attention. Ce n'est pas non plus un entraînement avec des lunettes stroboscopiques, qui occultent tout le champ de vision.",
    "Comparez vos séances sur le même écran et à la même distance ; la fréquence de rafraîchissement et la latence d'affichage influencent la fluidité de la cible (Woods et al., 2015). Arrêtez en cas de douleur, de vertiges, de nausées ou de vision floue persistante."
  ],
  benchmarks: {
    title: "Paliers de pratique indicatifs",
    headers: ["Palier", "Réglage", "Objectif"],
    rows: [
      ["1", "1,0x, contour visible", "Saisir direction et vitesse avant la disparition"],
      ["2", "1,0x à 2,0x", "Être sur la cible dès sa réapparition"],
      ["3", "2,0x et plus", "Continuer à anticiper malgré un clignotement rapide"],
      ["4", "Ligne masquée", "Franchir la phase invisible par anticipation seule"],
      ["5", "Vitesse aléatoire", "Ajuster l'anticipation à une vitesse variable"]
    ],
    note: "Paliers de pratique SkillDrills à titre indicatif. Ce ne sont ni des normes d'examen de la vue, ni des statistiques d'utilisateurs, ni des percentiles.",
  },
  techniques: {
    title: "Conseils pratiques",
    items: [
      { name: "Lire la direction pendant la phase visible", desc: "Quand la cible est visible, repérez sa direction et sa vitesse.", tips: "Si elle disparaît près d'un bord, pensez au rebond." },
      { name: "Ne pas arrêter le regard", desc: "Quand la cible disparaît, continuez à déplacer le regard doucement dans la direction attendue.", tips: "À la réapparition, comparez sa position à votre estimation." },
      { name: "Retirer le contour progressivement", desc: "Entraînez-vous d'abord avec le contour, puis masquez la ligne pour que le contour disparaisse aussi.", tips: "Ne changez qu'un réglage par séance." },
      { name: "Séances courtes et pauses", desc: "Travaillez par blocs de 5 à 10 minutes, clignez des yeux et regardez au loin entre deux séances. Plus long n'est pas forcément mieux.", tips: "Arrêtez tout de suite en cas de douleur ou de vertige." }
    ],
  },
  steps: [
    { title: "Choisir les réglages", text: "Commencez avec 60 secondes, 1,0x et le contour visible." },
    { title: "Lire le mouvement", text: "Pendant la phase visible, suivez la direction et la vitesse de la cible." },
    { title: "Franchir la phase invisible", text: "Quand la cible disparaît, continuez à déplacer le regard dans la direction attendue." },
    { title: "Augmenter progressivement", text: "Quand c'est facile, augmentez la vitesse ou masquez le contour ou activez la vitesse aléatoire, un réglage à la fois." }
  ],
  audience: "Toute personne qui veut s'exercer de façon ludique à suivre par anticipation une cible momentanément invisible.",
  faqs,
  sources: pickSources('appelbaum2011', 'bennett2007', 'mitroff2013', 'smith2016', 'woods2015', 'leigh2015'),
};

export default function StrobePredictionPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StrobePredictionPursuitClient
        copy={{
          title: "Poursuite stroboscopique : cible clignotante",
          subtitle: "Anticipez la position quand la cible disparaît",
          description: "Dans la poursuite stroboscopique, vous suivez une cible qui disparaît régulièrement et vous anticipez sa position. Le navigateur n'enregistre pas votre regard : c'est un repère de pratique, pas un test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
