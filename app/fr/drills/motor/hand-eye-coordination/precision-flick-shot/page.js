import PrecisionFlickShotClient from '@/app/drills/motor/hand-eye-coordination/precision-flick-shot/PrecisionFlickShotClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Test de précision souris : flicks au centre | SkillDrills',
  description: 'Test de précision souris gratuit : touchez deux cibles qui rétrécissent, un tir dans le centre de 8 px vaut double. Précision de clic, tirs au centre et niveau.',
  keywords: [
    'test de précision souris', 'test précision souris', 'précision souris', 'précision de clic',
    'tirs au centre de la cible', 'jeu précision souris',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Test de précision souris : flicks au centre | SkillDrills',
    description: 'Test de précision souris gratuit : touchez deux cibles qui rétrécissent, un tir dans le centre de 8 px vaut double. Précision de clic, tirs au centre et niveau.',
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Test de précision souris : flicks au centre | SkillDrills',
    description: 'Test de précision souris gratuit : touchez deux cibles qui rétrécissent, un tir dans le centre de 8 px vaut double. Précision de clic, tirs au centre et niveau.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/precision-flick-shot'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'SkillDrills Accueil',
      item: 'https://skilldrills.online/fr',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Entraînement Moteur',
      item: 'https://skilldrills.online/fr/drills/motor',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Coordination Œil-Main',
      item: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Flick Shot de Précision',
      item: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Test de précision souris : flicks au centre',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Test de précision souris gratuit dans le navigateur : touchez des cibles qui rétrécissent et comptez vos tirs plein centre.',
  url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Entraîneur de Flick Shot',
  browserRequirements: 'Nécessite HTML5 Canvas et JavaScript activé',
  url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Jeu de précision souris : flicks au centre',
  url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot',
  description: 'Touchez des cibles qui rétrécissent, si possible en plein centre.',
  genre: ['Tir', 'Réflexes', 'Esport'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'fr-FR',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qu est-ce qu un flick shot dans les jeux de tir FPS ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un flick shot est un mouvement balistique ultra-rapide et discontinu permettant d aligner instantanément le curseur sur la cible avant de déclencher le tir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne le modèle à deux phases de Woodworth (1899) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il établit que tout mouvement visé se compose d une première impulsion balistique majeure, suivie d une phase de contrôle visuel terminal pour l ajustement fin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi la décélération motrice est-elle si importante ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parce que dépasser la cible (overshoot) oblige à effectuer des micro-corrections pénalisantes en temps. Le freinage musculaire net stabilise le tir dès le premier impact.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est l avantage des points bonus au centre (bulls-eye) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En récompensant les impacts dans le noyau de 8 pixels, le système nerveux est incité à resserrer la dispersion des tirs plutôt qu à se satisfaire des bords.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cet entraînement aide-t-il directement sur CS2 et Valorant ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les joueurs de Valorant ou CS2 peuvent s en servir pour travailler l arrêt net après un flick. Aucun progrès en jeu n est garanti ; réglez la même sensibilité que dans votre jeu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment réagir face à deux cibles simultanées ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deux cibles sont toujours affichées ; les deux rétrécissent, mais la cible active plus vite. Touchez d abord la plus petite. Si une cible disparaît, le combo est remis à zéro et 1 seconde est retirée.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle sensibilité et quel DPI choisir pour le flick ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À 800 DPI, une sensibilité nécessitant 30 à 45 cm pour un tour complet à 360 degrés équilibre idéalement balayage du bras et micro-précision du poignet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment sont calculés les scores et les grades ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chaque touche rapporte des points de base (100, ou 200 dans le centre de 8 px) × le combo (jusqu à 3,0x) × un bonus de niveau, plus 2 secondes (max. 60). Un clic raté ou une cible expirée coûte 1 seconde et le combo. Le rang dépend uniquement du score final ; aucun temps d acquisition n est mesuré.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels réglages matériels optimisent la vitesse de flick ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un écran à haute fréquence, l option Windows « Améliorer la précision du pointeur » désactivée et une souris légère. Ce test mesure la précision de vos clics, pas ce réglage Windows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il s entraîner par jour ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quelques parties en échauffement avant de jouer suffisent. Faites une pause en cas de gêne au poignet et comparez-vous surtout à vos propres parties.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'fr-FR',
  name: 'Comment s entraîner aux flick shots et à la précision souris',
  description: 'Méthodologie progressive pour maîtriser les déplacements balistiques, les tirs plein centre et le freinage moteur.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Calibrez la sensibilité et fixez le réticule',
      text: 'Harmonisez les réglages avec votre jeu compétitif principal et focalisez le regard sur le réticule central.',
      url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Repérez et priorisez la cible active',
      text: 'Balayez le canevas et évaluez les anneaux de décomposition pour engager en premier la cible la plus urgente.',
      url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Exécutez un flick balistique direct',
      text: 'Propulsez le curseur d un geste net et fluide sans marquer d hésitation ou de saccade à mi-chemin.',
      url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Freinez net sur le centre et cliquez',
      text: 'Activez les extenseurs du poignet pour figer le mouvement pile au centre de la cible avant de presser le bouton.',
      url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/precision-flick-shot#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('meyer1988', 'fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015'),
  intro: {
    title: 'Biomécanique des Micro-Flicks Balistiques et Optimisation des Mouvements',
    paragraphs: [
      'Ce test de précision souris vous demande de toucher des cibles qui rétrécissent, au plus près de leur centre. Dans le tir compétitif et les interactions homme-machine, le flick shot est un mouvement manuel rapide et discontinu produit sous contrainte temporelle extrême. Robert S. Woodworth (1899) a mis en évidence le fait que les actions orientées vers un but obéissent à un contrôle en deux étapes : une impulsion balistique initiale qui projette le membre vers la cible, suivie d une phase de contrôle continu visuel pour ajuster la position terminale.',
      'Dans leur modèle théorique majeur (Stochastic Optimized Submovement Model), David E. Meyer et al. (1988) ont démontré que la commande motrice humaine est sujette à un bruit neuronal proportionnel à la vitesse. Une accélération excessive élargit la dispersion finale. Si le premier élan manque la zone cible, un sous-mouvement correctif supplémentaire est nécessaire et coûte du temps.',
      'Pour maximiser l efficacité de visée (MacKenzie, 1992), les tireurs doivent ajuster la vitesse de l impulsion principale afin que la trajectoire atteigne directement la cible. La bonification des impacts plein centre (bulls-eye) conditionne le système nerveux à réduire la dispersion et à perfectionner le freinage antagoniste.',
      'Le compromis distance-taille répond à la loi de Fitts (Fitts, 1954), avec des éclairages biomécaniques récents issus des travaux d Elliott et al. (2010).',
      'Déroulement : départ à 45 secondes, +2 secondes par touche (max. 60), -1 seconde par clic raté ou cible expirée. Une souris et le verrouillage du pointeur sont requis ; les appareils uniquement tactiles ne sont pas pris en charge. La fréquence d écran et de scrutation influencent la sensation (Woods et al., 2015). Vos performances restent dans votre navigateur.',
    ],
  },
  benchmarks: {
    title: 'Paliers d\'entraînement du test de précision souris (SkillDrills)',
    caption: 'Paliers d\'entraînement SkillDrills : ni normes scientifiques ni statistiques d\'utilisateurs, mais des repères fixés par l\'auteur du drill pour lire votre niveau, combo, précision de clic et ratio plein centre. SkillDrills n\'effectue aucune collecte externe de données.',
    headers: ['Palier (Tier)', 'Classification', 'Niveau et Combo', 'Précision au Clic', 'Ratio Plein Centre', 'Profil de jeu'],
    rows: [
      [
        'Tier 1',
        'Maître du Flick Apex',
        'Nv. 15+ (Combo > 20x)',
        '≥ 96,0%',
        '> 65%',
        'Un seul flick arrive au centre, presque aucune correction.',
      ],
      [
        'Tier 2',
        'Tireur d Élite',
        'Nv. 11–14 (Combo 14–19x)',
        '91,0%–95,9%',
        '45%–64%',
        'Centre bien visé, micro-ajustements courts.',
      ],
      [
        'Tier 3',
        'Tireur Confirmé',
        'Nv. 7–10 (Combo 8–13x)',
        '84,0%–90,9%',
        '25%–44%',
        'Impacts fréquents en périphérie, légers dépassements lors des enchaînements rapides de cibles.',
      ],
      [
        'Tier 4',
        'Fragger en Progression',
        'Nv. 4–6 (Combo 4–7x)',
        '74,0%–83,9%',
        '10%–24%',
        'Corrections saccadées, dispersion accrue par suraccélération, hésitation avant le tir.',
      ],
      [
        'Tier 5',
        'Base / Novice',
        'Nv. 1–3 (Combo < 4x)',
        '< 74,0%',
        '< 10%',
        'Flicks trop courts, tirs manqués fréquents.',
      ],
    ],
  },
  protocols: {
    title: 'Protocoles d Entraînement pour Perfectionner le Flick',
    items: [
      {
        title: 'Protocole 1 : Calibrage de l Impulsion Balistique (Niveaux 1–4)',
        description: 'Privilégiez un geste fluide et direct sans à-coups. Fiez-vous à la mémoire motrice en boucle ouverte pour atteindre la cible sans marquer de temps d arrêt.',
      },
      {
        title: 'Protocole 2 : Minimisation des Sous-Mouvements de Meyer (Niveaux 5–8)',
        description: 'Visez délibérément le noyau central de 8 pixels. Réduire la cible virtuelle oblige le cortex moteur à resserrer le faisceau de dispersion.',
      },
      {
        title: 'Protocole 3 : Séquençage Prioritaire Multi-Cibles (Niveaux 9–12)',
        description: 'Lorsqu au moins deux cibles coexistent, fiez-vous à votre vision périphérique pour éliminer la cible la plus proche de l expiration avant de pivoter.',
      },
      {
        title: 'Protocole 4 : Freinage Antagoniste contre l Overshoot (Niveaux 13–15)',
        description: 'À grande vitesse, contractez activement les extenseurs du poignet pour bloquer net le curseur pile sur le centre sans glissement d inertie.',
      },
    ],
  },
  faqs: {
    title: 'Foire Aux Questions (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyFr = {
  title: "Test de précision souris : flicks au centre de la cible",
  subtitle: "Deux cibles qui rétrécissent · le centre vaut double · +2 s par touche",
  startButtonText: "DÉMARRER LE DRILL",
  playAgainText: "Rejouer",
  shareText: "Partager le score",
  exitText: "Quitter",
  accuracyLabel: "Précision",
  targetHitsLabel: "Cibles touchées",
  bullseyesLabel: "Plein centre (Mouche)",
  peakLevelLabel: "Niveau Max",
  rulesTitle: "Instructions du Drill & Système de Score",
  rulesItems: [
    { num: "1", text: "Tir Plein Centre", highlight: "+200 PTS / +2s (max. 60s)", result: "Précision millimétrique du noyau" },
    { num: "2", text: "Tir Standard", highlight: "+100 PTS / +2s (max. 60s)", result: "Acquisition périphérique rapide" },
    { num: "3", text: "Progression de Niveau", highlight: "+1 Niveau / 1400 PTS", result: "Les cibles rétrécissent et expirent plus vite" },
    { num: "4", text: "Tir Manqué / Expiration", highlight: "Combo réinitialisé", result: "Pénalité de temps : -1s" }
  ],
};

export default function PrecisionFlickShotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <PrecisionFlickShotClient copy={copyFr} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
