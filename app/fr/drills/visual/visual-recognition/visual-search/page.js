import VisualSearchClient from '@/app/drills/visual/visual-recognition/visual-search/VisualSearchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/fr/drills/visual/visual-recognition/visual-search";
const TITLE = "Test de recherche visuelle en ligne | SkillDrills";
const DESCRIPTION = "Test de recherche visuelle gratuit : trouvez en 45 secondes, le plus souvent possible, le caractère cible caché parmi 95 caractères ressemblants et tournés.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "test de recherche visuelle",
    "recherche conjonctive",
    "trouver la lettre",
    "cible parmi des distracteurs",
    "balayage visuel",
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
    languages: getAlternateLanguages('/drills/visual/visual-recognition/visual-search', 'fr'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr/" },
    { "@type": "ListItem", "position": 2, "name": "Entraînement Visuel", "item": "https://skilldrills.online/fr/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Reconnaissance Visuelle", "item": "https://skilldrills.online/fr/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Test de recherche visuelle", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de recherche visuelle",
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
  "name": "Comment fonctionne le test de recherche visuelle",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Repérer le caractère cible", "text": "En haut, « FIND » indique le caractère à chercher, par exemple C, E, P ou 6." },
    { "@type": "HowToStep", "position": 2, "name": "Parcourir la grille", "text": "La grille compte 12 × 8 = 96 cases : une seule cible et 95 distracteurs ressemblants, tous tournés au hasard de 0, 90, 180 ou 270 degrés." },
    { "@type": "HowToStep", "position": 3, "name": "Cliquer sur la cible", "text": "Cliquez ou touchez la cible. Une nouvelle grille avec un nouveau caractère cible apparaît aussitôt." },
    { "@type": "HowToStep", "position": 4, "name": "Tenir 45 secondes", "text": "La manche dure 45 secondes fixes. Chaque cible trouvée rapporte 150 points." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment fonctionne le test de recherche visuelle ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un caractère cible est affiché en haut. Il apparaît une seule fois dans la grille 12 × 8, parmi 95 distracteurs ressemblants (par exemple C parmi O, Q et G). Un clic dessus et une nouvelle grille avec une nouvelle cible apparaît. Une manche dure 45 secondes." }
    },
    {
      "@type": "Question",
      "name": "Comment les points sont-ils comptés ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Chaque cible trouvée vaut 150 points. Tous les 750 points (5 cibles), l'affichage du niveau augmente ; la grille reste à 96 cases. À la fin, vous voyez le score, la précision, le niveau maximal et le nombre de cibles trouvées." }
    },
    {
      "@type": "Question",
      "name": "Les erreurs de clic sont-elles pénalisées ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Non. La case cliquée par erreur devient rouge un instant, sans retirer de points ni de temps. Seule la précision affichée baisse." }
    },
    {
      "@type": "Question",
      "name": "Pourquoi les caractères sont-ils tournés ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Cible et distracteurs partagent courbes et traits, et la rotation aléatoire empêche les distracteurs de former une texture uniforme. La cible ne ressort donc pas d'elle-même : il faut vérifier case par case. La recherche ralentit quand la cible ressemble aux distracteurs (Duncan & Humphreys, 1989)." }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre recherche de traits et recherche conjonctive ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Une cible qui diffère par un seul trait, comme la couleur, saute aux yeux quel que soit le nombre de distracteurs. Quand il faut combiner plusieurs traits, la recherche ralentit à chaque distracteur ajouté (Treisman & Gelade, 1980 ; Wolfe, 1994)." }
    },
    {
      "@type": "Question",
      "name": "Est-ce un test de vue ou un test d'attention officiel ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Non. C'est un exercice gratuit dans le navigateur, ni un examen de la vue ni un test psychologique étalonné. Comparez votre score uniquement à vos propres manches précédentes." }
    },
    {
      "@type": "Question",
      "name": "Comment trouver la cible plus vite ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mémorisez la forme de la cible avant de chercher, puis parcourez la grille ligne par ligne ou par quarts au lieu de sauter au hasard. Vous ne vérifiez ainsi aucune case deux fois." }
    }
  ]
};

export default function VisualSearchLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <VisualSearchClient copy={{ title: "Test de recherche visuelle", subtitle: "Trouver un caractère parmi 95 distracteurs" }} />
      <DrillGuide
        eyebrow="Recherche visuelle"
        title="Test de recherche visuelle : règles, points et conseils"
        sources={sources}
      >
        <p>Ce <strong>test de recherche visuelle</strong> est un exercice gratuit dans le navigateur : une grille de 12 × 8 montre 96 caractères tournés, dont un seul est la cible. Vous avez 45 secondes pour la trouver le plus souvent possible. Après chaque cible trouvée, la grille et le caractère cible changent. Rien à voir avec la recherche d'images : il s'agit de la tâche de recherche visuelle de la psychologie de la perception.</p>

        <h3>Ce qui se passe dans la grille</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>Distracteurs ressemblants :</strong> chaque cible a trois sosies, par exemple C parmi O, Q et G, E parmi F, L et P, ou 6 parmi 8, 9 et 0.</li>
          <li><strong>Rotation aléatoire :</strong> tous les caractères, cible comprise, sont tournés de 0, 90, 180 ou 270 degrés.</li>
          <li><strong>Durée fixe :</strong> 45 secondes, sans bonus ni retrait de temps.</li>
          <li><strong>Commande :</strong> souris ou écran tactile, un clic ou une touche sur la case.</li>
        </ul>

        <h3>Pourquoi on vérifie case par case</h3>
        <p>La psychologie de la perception distingue la recherche de traits, où une cible saute aux yeux, de la recherche conjonctive, où il faut combiner des traits et examiner les éléments un à un (Treisman &amp; Gelade, 1980 ; Wolfe, 1994). Plus la cible ressemble aux distracteurs et plus ces derniers sont hétérogènes, plus la recherche ralentit (Duncan &amp; Humphreys, 1989). Cette grille reprend exactement ces conditions : formes proches et rotation aléatoire.</p>

        <h3>Paliers d'entraînement SkillDrills (45 secondes)</h3>
        <p>Ces paliers sont des repères propres à SkillDrills pour cette grille, pas des normes scientifiques.</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2.5 px-3 font-semibold">Palier</th>
                <th className="py-2.5 px-3 font-semibold">Cibles</th>
                <th className="py-2.5 px-3 font-semibold">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr><td className="py-2.5 px-3">Débutant</td><td className="py-2.5 px-3 tabular-nums">0–3</td><td className="py-2.5 px-3 tabular-nums">0–450</td></tr>
              <tr><td className="py-2.5 px-3">Solide</td><td className="py-2.5 px-3 tabular-nums">4–6</td><td className="py-2.5 px-3 tabular-nums">600–900</td></tr>
              <tr><td className="py-2.5 px-3">Fort</td><td className="py-2.5 px-3 tabular-nums">7–9</td><td className="py-2.5 px-3 tabular-nums">1 050–1 350</td></tr>
              <tr><td className="py-2.5 px-3">Excellent</td><td className="py-2.5 px-3 tabular-nums">10+</td><td className="py-2.5 px-3 tabular-nums">1 500+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Conseils</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>Mémorisez la cible :</strong> repérez le détail qui la distingue de ses sosies, comme l'ouverture du C ou la barre du G.</li>
          <li><strong>Balayez avec méthode :</strong> ligne par ligne ou par quarts, pour ne vérifier aucune case deux fois.</li>
          <li><strong>Cliquez calmement :</strong> une erreur ne coûte pas de temps, mais fait baisser la précision.</li>
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
