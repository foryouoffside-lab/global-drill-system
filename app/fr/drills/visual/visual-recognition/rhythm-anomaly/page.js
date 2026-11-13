import RhythmAnomalyClient from '@/app/drills/visual/visual-recognition/rhythm-anomaly/RhythmAnomalyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = "https://skilldrills.online/fr/drills/visual/visual-recognition/rhythm-anomaly";
const TITLE = "Test de rythme visuel : la case déphasée | SkillDrills";
const DESCRIPTION = "Test de rythme visuel : dans une grille 6x6 qui pulse, repérez la seule case qui clignote sur un autre tempo. 45 secondes, gratuit.";
const FAQS = [
  [
    "Que mesure ce test de rythme visuel ?",
    "Il compte combien de fois vous trouvez la case déphasée en 45 secondes (10 points par case), votre meilleure série et vos erreurs. C’est un score d’entraînement à la comparaison de rythmes."
  ],
  [
    "Est-ce un test de fréquence critique de fusion (CFF) ?",
    "Non. La grille ne clignote qu’environ 0,6 à 2,5 fois par seconde. La fréquence critique de fusion (environ 50 à 60 Hz) n’est pas mesurée ici."
  ],
  [
    "Comment montent les points et le niveau ?",
    "Chaque bonne réponse vaut 10 points et le niveau monte tous les 3 bons clics. Plus vous trouvez de cases, plus le tempo accélère (période de 1,6 s à 0,6 s) et plus les clignotements parasites sont fréquents."
  ],
  [
    "Une erreur fait-elle perdre des points ?",
    "Non. Un mauvais clic déclenche un flash rouge et remet seulement la série à zéro. Si le délai est activé, la case change de place quand vous ne la trouvez pas à temps."
  ],
  [
    "À quoi servent les cases qui s’assombrissent ?",
    "Ce sont des distracteurs aléatoires. La bonne case est celle qui clignote en continu sur un autre tempo."
  ],
  [
    "Peut-on jouer au clavier ?",
    "Non, on joue au clic ou au toucher. Le clavier n’a aucune fonction dans le jeu."
  ],
  [
    "La fréquence de l’écran compte-t-elle ?",
    "Peu, car la grille clignote lentement et s’affiche correctement même à 60 Hz. La luminosité, la taille de l’écran et la latence d’entrée peuvent toutefois jouer (Woods et al., 2015) : comparez sur le même appareil."
  ],
  [
    "Le jeu convient-il aux personnes sensibles à la lumière ?",
    "La grille clignote lentement dans des gris sombres. Si les écrans qui clignotent vous gênent ou si vous êtes photosensible, ne jouez pas. Arrêtez en cas de mal de tête ou de vertige."
  ]
];
const RULES = [
  "Bonne case cliquée : +10 points, la case déphasée change de place.",
  "Tous les 3 bons clics, le niveau monte ; le tempo et les clignotements parasites accélèrent.",
  "Des cases au hasard s’assombrissent brièvement en continu (distracteurs).",
  "Mauvais clic : flash rouge et remise à zéro de la série. Aucun point ni temps retiré.",
  "Si le délai est activé dans les réglages, la case déphasée change de place après 6 s (1,8 s minimum en fin de partie) sans réponse, et la série repart à zéro."
];
const BANDS = [
  [
    "Palier 1",
    "< 50",
    "0–4",
    "L1–2"
  ],
  [
    "Palier 2",
    "50–99",
    "5–9",
    "L2–4"
  ],
  [
    "Palier 3",
    "100–149",
    "10–14",
    "L4–5"
  ],
  [
    "Palier 4",
    "150–199",
    "15–19",
    "L6–7"
  ],
  [
    "Palier 5",
    "200+",
    "20+",
    "L7+"
  ]
];
const TIPS = [
  "Regardez toute la grille plutôt que case par case : la case hors tempo ressort plus vite.",
  "Une case qui s’assombrit une fois est un distracteur. Cliquez quand une case a clignoté au moins deux fois sur un autre tempo.",
  "Quand le niveau monte, observez le nouveau tempo pendant un battement avant de cliquer.",
  "Comparez vos scores sur le même appareil, avec la même luminosité."
];
const INTRO = [
  "Dans ce test de rythme visuel, les 36 cases d’une grille 6x6 clignotent lentement sur le même tempo. Une seule case clignote sur un tempo plus rapide : c’est elle qu’il faut cliquer. Une séance dure 45 secondes et se joue gratuitement dans le navigateur, à la souris ou au toucher.",
  "La case déphasée a une période d’environ 72 % de celle des autres : elle clignote environ 1,4 fois plus vite et devient un peu plus claire au pic. À chaque bonne réponse, toute la grille accélère (période de 1,6 s jusqu’à 0,6 s minimum). Facile au début, l’écart de tempo doit ensuite être repéré plus vite.",
  "La grille clignote environ 0,6 à 2,5 fois par seconde, bien en dessous de la fréquence critique de fusion (environ 50 à 60 Hz ; De Lange, 1958 ; Kelly, 1961). Ce n’est donc pas un test de scintillement (CFF) mais une tâche d’attention où l’on compare des rythmes. Juger si deux stimuli sont en phase n’est possible qu’à des cadences bien plus lentes que la simple détection du scintillement (Holcombe, 2009)."
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "test de rythme visuel",
  "repérer la case déphasée",
  "grille qui pulse",
  "jeu de perception visuelle",
  "trouver l’intrus visuel"
],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: PAGE_URL,
    siteName: "SkillDrills",
    locale: "fr_FR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/rhythm-anomaly', 'fr'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr/" },
    { "@type": "ListItem", "position": 2, "name": "Entraînement visuel", "item": "https://skilldrills.online/fr/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Reconnaissance visuelle", "item": "https://skilldrills.online/fr/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Test de rythme visuel", "item": PAGE_URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de rythme visuel",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Jeu de 45 secondes dans le navigateur : trouvez dans une grille 6x6 la case qui clignote plus vite que les autres. Souris ou tactile.",
  "url": PAGE_URL,
  "inLanguage": "fr-FR",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment jouer au test de rythme visuel",
  "inLanguage": "fr-FR",
  "step": [
  [
    "Regarder toute la grille",
    "Posez le regard au centre de la grille 6x6 et repérez le tempo commun des 36 cases."
  ],
  [
    "Trouver la case déphasée",
    "Cherchez la seule case qui clignote plus vite. Les cases qui s’assombrissent brièvement sont des distracteurs."
  ],
  [
    "Cliquer ou toucher",
    "Cliquez ou touchez la case : +10 points, puis elle change de place."
  ],
  [
    "Suivre l’accélération",
    "Tous les 3 bons clics, le niveau monte et le tempo accélère. Après 45 secondes, lisez vos points et votre série."
  ]
].map(([name, text], i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": name,
    "text": text,
    "url": `${PAGE_URL}#step-${i + 1}`
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-12",
  "mainEntity": FAQS.map(([q, a]) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function FrenchRhythmAnomalyPage() {
  const sources = pickSources('holcombe2009', 'kelly1961', 'delange1958', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RhythmAnomalyClient copy={{ title: "Test de rythme visuel", subtitle: "Repérez la case déphasée dans la grille qui pulse" }} />
      <DrillGuide
        eyebrow={"Guide du test de rythme visuel"}
        title={"Test de rythme visuel : déroulement et points"}
        sources={sources}
      >
        {INTRO.map((p) => <p key={p}>{p}</p>)}

        <h3>{"Règles"}</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          {RULES.map((r) => <li key={r}>{r}</li>)}
        </ul>

        <h3>{"Paliers d’entraînement SkillDrills"}</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                {[
  "Palier",
  "Points (45 s)",
  "Bonnes réponses",
  "Niveau atteint"
].map((h) => <th key={h} className="py-2.5 px-3 font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {BANDS.map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => <td key={i} className="py-2.5 px-3 tabular-nums">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{"Paliers d’entraînement SkillDrills : ni statistique de population, ni percentile."}</p>

        <h3>{"Conseils"}</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          {TIPS.map((t) => <li key={t}>{t}</li>)}
        </ol>

        <h3>{"Questions fréquentes"}</h3>
        <div className="space-y-4 my-6">
          {FAQS.map(([q, a]) => (
            <div key={q}>
              <h4 className="font-semibold text-white">{q}</h4>
              <p className="text-slate-300 mt-1">{a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
