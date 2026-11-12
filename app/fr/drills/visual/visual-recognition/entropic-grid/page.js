import EntropicGridClient from '@/app/drills/visual/visual-recognition/entropic-grid/EntropicGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/fr/drills/visual/visual-recognition/entropic-grid";
const TITLE = "Grille de codes à repérer – balayage visuel | SkillDrills";
const DESCRIPTION = "Grille de codes à repérer : en 45 secondes, cliquez chaque copie du code cible dans une grille 10 × 10 de codes à deux caractères qui change sans cesse.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "grille de codes à repérer",
    "balayage visuel",
    "grille qui se régénère",
    "trouver le code",
    "jeu de recherche",
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: URL,
    siteName: "SkillDrills",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/entropic-grid', 'fr'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr/" },
    { "@type": "ListItem", "position": 2, "name": "Entraînement Visuel", "item": "https://skilldrills.online/fr/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Reconnaissance Visuelle", "item": "https://skilldrills.online/fr/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Grille de codes à repérer", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Grille de codes à repérer",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": DESCRIPTION,
  "url": URL,
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment fonctionne la grille de codes à repérer",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Lire le code cible", "text": "En haut, sous « FIND TARGET CODE », s'affiche un code de deux caractères, lettres et chiffres, par exemple K7." },
    { "@type": "HowToStep", "position": 2, "name": "Parcourir la grille", "text": "La grille 10 × 10 contient 100 codes à deux caractères ; le code cible y figure au moins deux fois." },
    { "@type": "HowToStep", "position": 3, "name": "Cliquer chaque copie", "text": "Chaque copie trouvée vaut 150 points. Quand toutes sont trouvées, un nouveau code et une nouvelle grille apparaissent." },
    { "@type": "HowToStep", "position": 4, "name": "Tenir 45 secondes", "text": "Toutes les 700 ms, trois cases distractrices changent de code, et le code cible change au plus tard toutes les 12 secondes." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment fonctionne la grille de codes à repérer ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un code cible de deux caractères s'affiche en haut. Il apparaît plusieurs fois parmi les 100 codes de la grille 10 × 10 ; cliquez chaque copie. Quand toutes sont trouvées ou après 12 secondes, un nouveau code et une nouvelle grille arrivent. Une manche dure 45 secondes." }
    },
    {
      "@type": "Question",
      "name": "Combien de copies du code cible y a-t-il ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Deux au départ. Leur nombre augmente avec le niveau : trois dès le niveau 3, quatre dès le niveau 6, cinq dès le niveau 9 et six au maximum dès le niveau 12." }
    },
    {
      "@type": "Question",
      "name": "Pourquoi la grille change-t-elle sans cesse ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Toutes les 700 millisecondes, trois cases distractrices tirées au hasard reçoivent un nouveau code. Les copies du code cible ne bougent pas. Impossible donc de mémoriser la grille." }
    },
    {
      "@type": "Question",
      "name": "Comment les points sont-ils comptés ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Chaque copie trouvée vaut 150 points et le niveau monte tous les 750 points (5 copies). À la fin s'affichent le score, la précision, le niveau maximal et le nombre de copies trouvées." }
    },
    {
      "@type": "Question",
      "name": "Les erreurs de clic sont-elles pénalisées ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Non. La case cliquée par erreur devient rouge un instant, sans retirer de points ni de temps. Seule la précision baisse." }
    },
    {
      "@type": "Question",
      "name": "Est-ce un test de concentration officiel ou un test de vue ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Non. C'est un exercice gratuit dans le navigateur, ni un test psychologique étalonné ni un examen de la vue. Comparez votre score uniquement à vos propres manches précédentes." }
    },
    {
      "@type": "Question",
      "name": "Comment trouver les codes plus vite ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Retenez le code comme une paire, pas comme deux caractères isolés, et balayez la grille par quarts ou ligne par ligne. Les distracteurs changeant sans cesse, mémoriser des positions ne sert à rien." }
    }
  ]
};

export default function EntropicGridLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <EntropicGridClient copy={{ title: "Grille de codes à repérer", subtitle: "Le code cible dans une grille de 100 cases qui change" }} />
      <DrillGuide
        eyebrow="Jeu de balayage visuel"
        title="Grille de codes à repérer : règles, points et conseils"
        sources={sources}
      >
        <p>La <strong>grille de codes à repérer</strong> est un exercice gratuit dans le navigateur : dans une grille 10 × 10 de 100 codes à deux caractères, vous cliquez chaque copie du code cible. La manche dure 45 secondes et la grille ne reste jamais identique, car les distracteurs changent sans cesse. Souris ou écran tactile.</p>

        <h3>Ce qui se passe dans la grille</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>Code cible :</strong> deux caractères parmi les lettres (sauf I et O) et les chiffres 2 à 9.</li>
          <li><strong>Plusieurs copies :</strong> deux au départ, jusqu'à six en même temps selon le niveau.</li>
          <li><strong>Bruit :</strong> toutes les 700 ms, trois cases distractrices changent de code.</li>
          <li><strong>Changement de cible :</strong> nouveau code dès que toutes les copies sont trouvées, au plus tard après 12 secondes.</li>
        </ul>

        <h3>Pourquoi la recherche demande un effort</h3>
        <p>Un code à deux caractères ne se distingue pas des distracteurs par un trait saillant unique, mais seulement par la combinaison de deux caractères. Ce type de recherche se fait plutôt élément par élément (Treisman &amp; Gelade, 1980 ; Wolfe, 1994) et ralentit quand cible et distracteurs se ressemblent (Duncan &amp; Humphreys, 1989). Le bruit changeant empêche en plus de s'appuyer sur des positions mémorisées.</p>

        <h3>Paliers d'entraînement SkillDrills (45 secondes)</h3>
        <p>Ces paliers sont des repères propres à SkillDrills pour cette grille, pas des normes scientifiques.</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2.5 px-3 font-semibold">Palier</th>
                <th className="py-2.5 px-3 font-semibold">Copies</th>
                <th className="py-2.5 px-3 font-semibold">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr><td className="py-2.5 px-3">Débutant</td><td className="py-2.5 px-3 tabular-nums">0–2</td><td className="py-2.5 px-3 tabular-nums">0–300</td></tr>
              <tr><td className="py-2.5 px-3">Solide</td><td className="py-2.5 px-3 tabular-nums">3–4</td><td className="py-2.5 px-3 tabular-nums">450–600</td></tr>
              <tr><td className="py-2.5 px-3">Fort</td><td className="py-2.5 px-3 tabular-nums">5–6</td><td className="py-2.5 px-3 tabular-nums">750–900</td></tr>
              <tr><td className="py-2.5 px-3">Excellent</td><td className="py-2.5 px-3 tabular-nums">7+</td><td className="py-2.5 px-3 tabular-nums">1 050+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Conseils</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>Lisez le code comme une paire :</strong> cherchez la suite de deux caractères, pas une lettre isolée.</li>
          <li><strong>Balayez par quarts :</strong> parcourez la grille quart par quart au lieu de sauter au hasard.</li>
          <li><strong>Continuez après un succès :</strong> il reste presque toujours une autre copie du même code.</li>
        </ol>

        <h3>Questions fréquentes (FAQ)</h3>
        <div className="space-y-4 my-6">
          {faqSchema.mainEntity.map((q) => (
            <div key={q.name}>
              <h4 className="font-semibold text-white">{q.name}</h4>
              <p className="text-slate-300 mt-1">{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
