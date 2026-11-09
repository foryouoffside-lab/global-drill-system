import AimTrainerClient from '@/app/drills/motor/hand-eye-coordination/aim-trainer/AimTrainerClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Aim trainer en ligne | Précision souris | SkillDrills",
  description: "Aim trainer gratuit en ligne : cliquez deux cibles mobiles avant qu’elles disparaissent et mesurez votre précision souris. Sans téléchargement.",
  keywords: [
    "aim trainer",
    "aim trainer en ligne",
    "aim trainer gratuit",
    "précision souris",
    "échauffement aim"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer",
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/aim-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Aim trainer en ligne | Précision souris | SkillDrills",
    description: "Aim trainer gratuit dans le navigateur : deux cibles mobiles, précision souris et taux de réussite.",
    url: "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Aim trainer en ligne | Précision souris | SkillDrills",
    description: "Aim trainer en ligne : cliquez les cibles mobiles avant leur disparition et mesurez votre précision souris.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Entrainements Moteurs",
      "item": "https://skilldrills.online/fr/drills/motor"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Coordination Oeil-Main",
      "item": "https://skilldrills.online/fr/drills/motor/hand-eye-coordination"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Aim Trainer en Ligne",
      "item": "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  "inLanguage": "fr-FR",
  "name": "Aim Trainer en Ligne",
  "url": "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "dateModified": "2026-11-09",
  "author": {
    "@type": "Organization",
    "name": "SkillDrills"
  }
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "inLanguage": "fr-FR",
  "name": "Aim Trainer en Ligne",
  "url": "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer",
  "description": "Aim trainer gratuit dans le navigateur : des cibles qui deviennent plus petites et plus rapides à chaque niveau.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills"
  },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-09"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "inLanguage": "fr-FR",
  "name": "Aim Trainer en Ligne",
  "url": "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer",
  "description": "Aim trainer 2D gratuit : cliquez deux cibles mobiles avant leur disparition pour travailler la précision de la souris.",
  "dateModified": "2026-11-09",
  "gamePlatform": "Web Browser",
  "genre": ["Aim Trainer", "FPS Training", "Hand-Eye Coordination", "Motor Control"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "inLanguage": "fr-FR",
  "name": "Comment s entrainer a la precision de souris avec Aim Trainer",
  "description": "Comment se déroule une partie de l’aim trainer SkillDrills, en 4 étapes.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer#step-1",
      "name": "Lancer la partie",
      "text": "Cliquez sur « Lancer » : le pointeur est verrouillé (Pointer Lock), puis après 3 secondes de décompte le chrono démarre à 45 secondes. Échap arrête la partie."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer#step-2",
      "name": "Repérer les deux cibles",
      "text": "Deux cibles se déplacent en permanence dans des directions aléatoires, rebondissent sur les bords et disparaissent après un court délai."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer#step-3",
      "name": "Viser et cliquer",
      "text": "Placez le réticule sur une cible et cliquez. Un tir réussi rapporte des points et +2 s (60 s maximum) ; un clic dans le vide ou une cible manquée remet le combo à zéro et coûte 1 s."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/fr/drills/motor/hand-eye-coordination/aim-trainer#step-4",
      "name": "Maintenir la serie de combos",
      "text": "Enchaînez les tirs réussis pour monter le multiplicateur jusqu’à 3,0×. Le niveau monte tous les 1 750 points ; la partie s’arrête quand le chrono atteint 0."
    }
  ]
};

const faqs = [
  {
    q: "Qu’est-ce que cet aim trainer en ligne et comment fonctionne-t-il ?",
    a: "Un aim trainer mesure la vitesse et la précision avec lesquelles vous cliquez des cibles à la souris. Ici, deux cibles mobiles sont toujours à l’écran. Le chrono démarre à 45 secondes : chaque cible touchée ajoute 2 s (60 s maximum), chaque clic raté ou cible manquée retire 1 s, et la partie s’arrête à 0. Gratuit, sans téléchargement ni compte.",
  },
  {
    q: "Comment le score est-il calculé ?",
    a: "Chaque cible touchée vaut 100 points multipliés par le combo (1,1× dès 3 tirs réussis d’affilée, jusqu’à 3,0× à partir de 50) et par un bonus de niveau. Un clic raté ou une cible manquée remet le combo à zéro.",
  },
  {
    q: "Comment la difficulté augmente-t-elle ?",
    a: "Le niveau monte tous les 1 750 points, sans limite. Jusqu’au niveau 15, le rayon des cibles passe de 26 px à 12 px (jusqu’à 8 px avec un gros combo), leur vitesse de 80 px/s à 370 px/s et leur durée de vie de 2,8 s à 0,4 s.",
  },
  {
    q: "Que se passe-t-il quand je rate ?",
    a: "Le combo retombe à 1,0× et vous perdez 1 seconde. Spammer les clics ne paie donc pas.",
  },
  {
    q: "Comment la loi de Fitts s’applique-t-elle à cet aim trainer ?",
    a: "La loi de Fitts (1954) relie le temps de mouvement au rapport entre la distance et la taille de la cible (Indice de Difficulté). Comme les cibles rétrécissent à chaque niveau, l’indice augmente et la souris doit être contrôlée plus finement.",
  },
  {
    q: "Cet aim trainer aide-t-il pour Valorant ou CS2 ?",
    a: "Il peut servir d’échauffement complémentaire. Il entraîne des clics rapides sur des cibles 2D mobiles, pas la visée 3D d’un jeu ; aucune progression en jeu n’est garantie.",
  },
  {
    q: "Qu’est-ce qu’un bon score sur cet aim trainer ?",
    a: "Selon les repères SkillDrills : moins de 8 000 points débutant, 8 000–17 999 en développement, 18 000–31 999 compétent, 32 000–47 999 avancé, 48 000 et plus palier maître. Ce sont des repères d’entraînement, pas des statistiques d’utilisateurs.",
  },
  {
    q: "Puis-je régler la sensibilité de la souris ?",
    a: "Oui, avec le multiplicateur de sensibilité dans les réglages des exercices. Il n’y a pas de conversion automatique de votre cm/360 en jeu : réglez-le à la sensation.",
  },
  {
    q: "L’aim trainer fonctionne-t-il sur mobile ou écran tactile ?",
    a: "Non. Il utilise le verrouillage du pointeur (Pointer Lock) et nécessite une souris sur un navigateur d’ordinateur.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const copyFr = {
  title: "Aim Trainer en Ligne",
  subtitle: "Deux cibles mobiles • Précision souris • Taux de réussite",
  caption: "Cliquez les deux cibles mobiles avant leur disparition. Touché +2 s, clic raté ou cible manquée -1 s.",
  startButtonText: "LANCER L'ENTRAÎNEMENT",
  playAgainText: "Rejouer",
  shareText: "Partager le Score",
  exitText: "Quitter",
  rulesTitle: "Instructions & Système de Score",
  aboutTitle: "À Propos d'Aim Trainer Elite",
  rulesItems: [
    {
      num: "1",
      text: "Cible Touchée",
      highlight: "+100 PTS / +2 s (max 60 s)",
      result: "× multiplicateur de combo"
    },
    {
      num: "2",
      text: "Combo Continu",
      highlight: "Jusqu'à 3,0× Multiplicateur",
      result: "Enchaîner les tirs réussis sans faute"
    },
    {
      num: "3",
      text: "Progression de Niveau",
      highlight: "+1 Niveau / 1750 PTS",
      result: "Cibles réduites et accélérées"
    },
    {
      num: "4",
      text: "Tir Raté & Expiration",
      highlight: "Combo Réinitialisé",
      result: "-1 s au chrono"
    }
  ]
};

export default function AimTrainerFrenchPage() {
  const sources = pickSources('fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <AimTrainerClient copy={copyFr} />

      <DrillGuide
        eyebrow="Psychophysique du Contrôle Moteur & Interaction Homme-Machine"
        title="La Science de la Visée à la Souris, Loi de Fitts & Précision Motrice"
        sources={sources}
      >
        <p>
          L’<strong>aim trainer</strong> SkillDrills est gratuit et tourne dans le navigateur : deux cibles mobiles à cliquer avant qu’elles disparaissent. L acquisition de cible a l aide d une souris d ordinateur figure parmi les taches de coordination motrice fine les plus exigeantes etudiees en interaction homme-machine (IHM) et en psychophysique sportive. Qu il s agisse de tenir une ligne dans un jeu de tir tactique a la premiere personne ou de manoeuvrer une interface robotisee de haute precision, le systeme neuromusculaire doit traduire des coordonnees visuelles bidimensionnelles en contractions physiques sous-millimetriques de la main, du poignet et de l avant-bras (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>Loi de Fitts &amp; Indice de Difficulté (ID)</h3>
        <p>
          Dans ses travaux pionniers de 1954, Paul M. Fitts a etabli que le temps de mouvement (\(MT\)) necessaire pour atteindre une zone cible repond a une fonction logarithmique reliant la distance (\(D\)) a la largeur ou diametre de la cible (\(W\)) :
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 my-3 text-center font-mono text-sm text-cyan-300">
          MT = a + b · log₂(2D / W) = a + b · ID
        </div>
        <p>
          Cette composante logarithmique est appelee l <strong>Indice de Difficulte (ID)</strong>, exprimee en bits d information. Dans cet aim trainer, le rayon des cibles passe de 26 à 12 pixels au niveau 15 (jusqu’à 8 pixels avec un gros combo). La largeur de cible (\(W\)) diminue, donc l’Indice de Difficulté augmente (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>Le Modèle à Deux Composantes du Mouvement Visé (Woodworth 1899; Elliott et al. 2010)</h3>
        <p>
          La visee a haute vitesse n est pas un geste unique et continu. Les decouvertes historiques de Woodworth (1899) et les syntheses modernes d Elliott et al. (2010) demontrent qu un mouvement de pointage se decompose en deux sous-phases distinctes :
        </p>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>L impulsion balistique initiale (Boucle ouverte) :</strong> Une acceleration motrice puissante et non ajustee couvrant environ 85 % a 90 % de la trajectoire globale vers la cible.
          </li>
          <li>
            <strong>Le controle en cours de mouvement (Boucle fermee) :</strong> Une phase de deceleration guidee par la retroaction visuelle directe permettant d ajuster le reticule au centre de la cible avant le clic.
          </li>
        </ul>
        <p>
          Les joueurs non entraînés souffrent fréquemment d&apos;<em>over-flicking</em> (force balistique excessive imposant des allers-retours correctifs oscillatoires) ou d&apos;<em>under-flicking</em> (décélération prématurée entraînant une approche hésitante et lente vers la cible). Les tireurs d&apos;élite minimisent la variance motrice en calibrant l&apos;impulsion balistique pour qu&apos;elle s&apos;interrompe exactement sur le bord de la cible, ne nécessitant qu&apos;un micro-ajustement instantané (Elliott et al., 2010; Woods et al., 2015).
        </p>

        <h3>Taux de Rafraîchissement, Quantisation &amp; Délais Neuro-sensoriels</h3>
        <p>
          Un timing de clic chirurgical exige de minimiser la latence du système. Comme documenté par Woods et al. (2015), les temps de réaction motrice humains sont limités par la conduction neurosensorielle (transmission rétinienne ~30–50 ms, traitement cortical visuel ~60–80 ms, transmission corticospinale motrice ~40–60 ms). Sur un moniteur à 60 Hz, les images sont quantisées par pas de 16,7 ms ; à 144 Hz ou 240 Hz, ce délai chute à 6,9 ms ou 4,1 ms. Comparez vos scores sur le même matériel et les mêmes réglages.
        </p>

        <h3>Paliers de Référence : Vitesse &amp; Précision d Acquisition de Cible</h3>
        <p>
          Ces paliers sont des repères d’entraînement fixés par SkillDrills pour une partie qui démarre à 45 secondes (+2 s par cible touchée, 60 s maximum). Ce ne sont ni des données d’utilisateurs ni des rangs de jeu :
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-xs sm:text-sm border-collapse border border-white/10 text-left">
            <thead>
              <tr className="bg-white/5 text-slate-200">
                <th className="p-2.5 border border-white/10 font-semibold">Palier</th>
                <th className="p-2.5 border border-white/10 font-semibold">Score Brut</th>
                <th className="p-2.5 border border-white/10 font-semibold">Niveau Atteint</th>
                <th className="p-2.5 border border-white/10 font-semibold">Précision &amp; Combo</th>
                <th className="p-2.5 border border-white/10 font-semibold">Repère</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 divide-y divide-white/5">
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-amber-300">Palier 1 : Maître</td>
                <td className="p-2.5 border border-white/10">48 000+ PTS</td>
                <td className="p-2.5 border border-white/10">Niveau 12+</td>
                <td className="p-2.5 border border-white/10">&gt; 95 % (Combo 25+)</td>
                <td className="p-2.5 border border-white/10">Palier avancé : micro-corrections rapides</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-cyan-300">Palier 2 : Avancé</td>
                <td className="p-2.5 border border-white/10">32 000 – 47 999 PTS</td>
                <td className="p-2.5 border border-white/10">Niveau 9–11</td>
                <td className="p-2.5 border border-white/10">88 % – 94 % (Combo 18–24)</td>
                <td className="p-2.5 border border-white/10">Excellente précision balistique et faible dispersion</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-blue-400">Palier 3 : Compétent</td>
                <td className="p-2.5 border border-white/10">18 000 – 31 999 PTS</td>
                <td className="p-2.5 border border-white/10">Niveau 6–8</td>
                <td className="p-2.5 border border-white/10">78 % – 87 % (Combo 12–17)</td>
                <td className="p-2.5 border border-white/10">Niveau intermédiaire solide : bonne tenue de trajectoire</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-amber-400">Palier 4 : En développement</td>
                <td className="p-2.5 border border-white/10">8 000 – 17 999 PTS</td>
                <td className="p-2.5 border border-white/10">Niveau 3–5</td>
                <td className="p-2.5 border border-white/10">65 % – 77 % (Combo 6–11)</td>
                <td className="p-2.5 border border-white/10">En progression : hésitations fréquentes</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-rose-400">Palier 5 : Débutant</td>
                <td className="p-2.5 border border-white/10">&lt; 8 000 PTS</td>
                <td className="p-2.5 border border-white/10">Niveau 1–2</td>
                <td className="p-2.5 border border-white/10">&lt; 65 % (Combo &lt; 6)</td>
                <td className="p-2.5 border border-white/10">Forte dispersion motrice et dépassement systématique des cibles</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Protocole d Entraînement de la Visée à la Souris</h3>
        <p>
          Pour reduire methodiquement la latence d acquisition et maximiser la precision de clic, appliquez ces quatre principes fondes sur la recherche neuromotrice :
        </p>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>Calibration de l impulsion balistique (Woodworth, 1899; Elliott et al., 2010) :</strong> Entrainez votre flick principal a couvrir 90 % de la trajectoire en une seule impulsion nette. Evitez les micro-arrets intermediaires en cours de vol.
          </li>
          <li>
            <strong>Deceleration terminale et centrage (Fitts, 1954) :</strong> Lorsque le pointeur entre dans la zone cible, basculez sur un controle fin des doigts et du poignet pour absorber l inertie avant de declencher le tir.
          </li>
          <li>
            <strong>Sensibilite universelle en cm/360 (MacKenzie, 1992) :</strong> Calibrez la sensibilite physique de votre souris afin qu un deplacement donne de la main corresponde toujours a la meme distance sur l ecran, consolidant ainsi votre memoire musculaire.
          </li>
          <li>
            <strong>Discipline de clic et maintien souple (Woods et al., 2015) :</strong> Gardez une prise de souris souple. Veillez a ce que la pression mecanique du clic n entraine aucune torsion physique qui decalerait le reticule hors de la hitbox.
          </li>
        </ul>

        <h3>Foire Aux Questions (FAQ)</h3>
        <div className="space-y-4 my-4">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-white/10 pb-3">
              <h4 className="font-bold text-white text-sm mb-1">{f.q}</h4>
              <p className="text-xs sm:text-sm text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
