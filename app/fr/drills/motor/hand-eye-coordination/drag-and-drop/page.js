import DragAndDropClient from '@/app/drills/motor/hand-eye-coordination/drag-and-drop/DragAndDropClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Test glisser-déposer | Précision souris | SkillDrills',
  description: 'Test glisser-déposer gratuit en ligne : pendant 45 secondes, attrapez la balle à la souris et lâchez-la dans un conteneur mobile. Précision, combo et niveau.',
  keywords: [
    'test glisser-déposer', 'glisser-déposer en ligne', 'contrôle de la souris', 'jeu glisser-déposer',
    'entraînement glisser-déposer', 'test glisser déposer en ligne', 'précision du glissement', 'contrôle du curseur',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Test glisser-déposer | Précision souris | SkillDrills',
    description: 'Test glisser-déposer gratuit en ligne : pendant 45 secondes, attrapez la balle à la souris et lâchez-la dans un conteneur mobile. Précision, combo et niveau.',
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Test glisser-déposer | Précision souris | SkillDrills',
    description: 'Test glisser-déposer gratuit en ligne : pendant 45 secondes, attrapez la balle à la souris et lâchez-la dans un conteneur mobile. Précision, combo et niveau.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/drag-and-drop'),
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
      name: 'Entraîneur Drag and Drop',
      item: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Drag_and_drop", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Test de Drag and Drop et Précision Souris',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Test glisser-déposer gratuit dans le navigateur : attraper la balle, la glisser et la lâcher dans un conteneur mobile.',
  url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Entraîneur de Drag and Drop',
  browserRequirements: 'Nécessite HTML5 Canvas et JavaScript activé',
  url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'fr-FR',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Jeu de Précision Drag and Drop',
  url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop',
  description: 'Glissez une balle vers un conteneur mobile et lâchez-la dedans, en 45 secondes.',
  genre: ['Précision', 'Coordination Motrice', 'Esport'],
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
      name: 'Que mesure le test de Drag and Drop à la souris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pendant 45 secondes, vous attrapez une balle bouton gauche enfoncé, la glissez vers un conteneur rond qui se déplace et la lâchez à l intérieur. Le résultat affiche le score, la précision (part des dépôts réussis), le nombre de dépôts, le meilleur combo et le niveau atteint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi glisser-déposer est plus difficile qu un simple clic ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maintenir le bouton enfoncé impose une tension continue à l index et limite les micro-corrections du poignet. MacKenzie et al. (1991) ont montré que glisser est nettement plus lent et plus sujet aux erreurs que simplement pointer la même cible avec le même périphérique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qu est-ce que la loi de pilotage d Accot-Zhai (Steering Law) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Formulée en 1997 par Johnny Accot et Shumin Zhai, elle montre que le temps pour traverser un corridor étroit est proportionnel à sa longueur divisée par sa largeur : un couloir deux fois plus étroit prend environ deux fois plus de temps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment éviter de dépasser (overshoot) le conteneur en mouvement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Commencez à freiner juste avant le conteneur, en visant sa trajectoire plutôt que sa position actuelle, et relâchez dès que la balle est à l intérieur. Un lâcher hors zone compte comme un raté et remet le combo à zéro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle prise de souris favorise la stabilité en glisser-déposer ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La prise en paume (palm grip) offre un appui stable de l avant-bras pour les trajectoires directes, tandis que la prise en griffe (claw grip) favorise les micro-ajustements rapides.',
      },
    },
    {
      '@type': 'Question',
      name: 'En quoi cet exercice aide-t-il les joueurs de FPS et MOBA ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans les FPS comme Apex Legends ou Warzone, il accélère le pillage de caisses (loot) et le swap d armure. Dans les RTS et MOBA, il optimise les sélections d unités en cadre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les graphistes et monteurs vidéo tirent-ils profit de cet exercice ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le même geste sert sur une timeline de montage ou dans un logiciel de graphisme. Ce drill est un exercice de contrôle de la souris.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment sont calculés les combos et les points ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chaque dépôt réussi rapporte 100 points × le multiplicateur de combo (jusqu à 3,0x) × un bonus de niveau. Le niveau monte tous les 250 points (plus des niveaux bonus par série de 4) : balle et conteneur rétrécissent, le conteneur accélère. Un relâchement hors zone réinitialise la série. La partie dure 45 secondes ; une souris et le verrouillage du pointeur sont requis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels réglages matériels garantissent une précision optimale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Désactivez l accélération du pointeur dans le système, adoptez une sensibilité entre 800 et 1600 DPI, un tapis en tissu régulier et un taux d interrogation de 1000 Hz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel temps d entraînement quotidien est recommandé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quelques parties de 45 secondes par jour suffisent comme routine ; arrêtez-vous en cas de gêne au poignet. Comparez vos scores avec vos propres parties précédentes sur la même configuration.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'fr-FR',
  name: 'Comment s entraîner à la précision de drag and drop',
  description: 'Protocole structuré en 4 étapes pour perfectionner la décélération, le guidage rectiligne et le relâchement.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Alignez le curseur sur l orbe source',
      text: 'Placez le pointeur de la souris précisément sur la sphère surlignée sur le canevas.',
      url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Maintenez le bouton gauche avec une pression souple',
      text: 'Exercez une force constante et modérée sur le clic pour agripper l objet sans raidir les doigts.',
      url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Guidez l objet le long d une trajectoire directe',
      text: 'Transportez la cible vers le conteneur en minimisant les oscillations latérales.',
      url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Relâchez avec précision au centre de la zone',
      text: 'Relâchez le clic dès que la balle est dans le conteneur pour valider le dépôt (100 points × combo).',
      url: 'https://skilldrills.online/fr/drills/motor/hand-eye-coordination/drag-and-drop#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'mackenzie1991', 'fitts1954', 'elliott2010', 'woods2015'),
  intro: {
    title: 'Biomécanique du Glisser-Déposer, Guidage et Décélération Motrice',
    paragraphs: [
      'Ce test glisser-déposer entraîne le contrôle de la souris en continu. En interaction homme-machine, le glisser-déposer continu (drag and drop) présente un défi sensorimoteur fondamentalement distinct du simple pointage avec clic. Alors que le ciblage discret est décrit par la loi de Fitts (Fitts, 1954), le glisser-déposer exige une co-contraction isométrique prolongée des fléchisseurs digitaux pour maintenir le commutateur enfoncé tout en assurant une translation dynamique et fluide sur le tapis.',
      'MacKenzie, Sellen et Buxton (1991) ont montré que glisser est nettement plus lent et plus sujet aux erreurs que simplement pointer la même cible avec le même périphérique. Le bouton maintenu limite les ajustements fins des doigts et du poignet.',
      'Par ailleurs, Johnny Accot et Shumin Zhai (1997) ont formulé la loi de pilotage (Steering Law) modélisant les déplacements dans des corridors contraints. Lors de tâches de glisser-déposer dynamiques, l utilisateur doit constamment contrebalancer l élan d accélération par une décélération antagoniste (Elliott et al., 2010) pour éviter tout dépassement de la zone de réception.',
      'Déroulement : 45 secondes pour attraper la balle, la glisser et la lâcher dans le conteneur mobile. Le taux de rafraîchissement de l écran et la fréquence de scrutation de la souris influencent la sensation (Woods et al., 2015) ; comparez-vous surtout à vos propres parties sur la même machine. SkillDrills conserve vos scores localement dans votre navigateur.',
    ],
  },
  benchmarks: {
    title: 'Paliers d\'entraînement du test glisser-déposer (SkillDrills)',
    caption: 'Paliers d\'entraînement SkillDrills : ni normes scientifiques ni statistiques d\'utilisateurs, mais des repères fixés par l\'auteur du drill pour lire votre niveau, votre combo et votre précision. SkillDrills ne collecte aucune donnée externe.',
    headers: ['Palier (Tier)', 'Classification', 'Niveau et Combo', 'Taux de Réussite', 'Profil de jeu'],
    rows: [
      [
        'Tier 1',
        'Élite / Pro Designer',
        'Nv. 12–15 (Combo > 18x)',
        '≥ 98,0%',
        'Freinage fluide même sur conteneurs rapides, presque aucun lâcher hors zone.',
      ],
      [
        'Tier 2',
        'Avancé / Compétitif',
        'Nv. 9–11 (Combo 12–17x)',
        '94,0%–97,9%',
        'Décélération maîtrisée, petits conteneurs atteints avec de courts micro-ajustements.',
      ],
      [
        'Tier 3',
        'Compétent / Intermédiaire',
        'Nv. 6–8 (Combo 7–11x)',
        '87,0%–93,9%',
        'Léger dépassement en phase d accélération, ralentissement visible avant l entrée dans le récepteur.',
      ],
      [
        'Tier 4',
        'Débutant / En Progression',
        'Nv. 3–5 (Combo 3–6x)',
        '78,0%–86,9%',
        'Guidage saccadé en plusieurs à-coups, tension digitale trop forte provoquant des décrochages.',
      ],
      [
        'Tier 5',
        'Base / Novice',
        'Nv. 1–2 (Combo < 3x)',
        '< 78,0%',
        'Déplacement lent, relâchements fréquents hors récepteur.',
      ],
    ],
  },
  protocols: {
    title: 'Protocoles d Entraînement à la Précision Souris',
    items: [
      {
        title: 'Protocole 1 : Stabilisation de la Force Isométrique (Niveaux 1–4)',
        description: 'Appliquez uniquement la force minimale nécessaire pour maintenir le clic engagé sans crisper les doigts. Un excès de pression rigidifie le poignet et engendre des micro-tremblements.',
      },
      {
        title: 'Protocole 2 : Optimisation du Couloir Accot-Zhai (Niveaux 5–8)',
        description: 'Minimisez l écart spatial entre la prise et le récepteur. Visualisez un tunnel rectiligne imaginaire et éliminez tout balancement en arc de cercle.',
      },
      {
        title: 'Protocole 3 : Décélération Antagoniste et Freinage (Niveaux 9–12)',
        description: 'Commencez à freiner juste avant le récepteur mobile pour stopper la course à l intérieur, puis relâchez.',
      },
      {
        title: 'Protocole 4 : Interception Dynamique par Anticipation (Niveaux 13–15)',
        description: 'À grande vitesse, anticipez la trajectoire future du conteneur plutôt que sa position instantanée, en relâchant avec fluidité sur son point d arrivée.',
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
  title: "Test glisser-déposer : contrôle de la souris",
  subtitle: "Glissez la balle et lâchez-la dans le conteneur mobile · 45 secondes",
  startButtonText: "DÉMARRER LE DRILL",
  playAgainText: "Rejouer",
  shareText: "Partager le score",
  exitText: "Quitter",
  accuracyLabel: "Précision",
  targetDropsLabel: "Dépôts réussis",
  maxComboLabel: "Combo Max",
  peakLevelLabel: "Niveau Max",
  rulesTitle: "Instructions du Drill & Système de Score",
  rulesItems: [
    { num: "1", text: "Dépôt Réussi", highlight: "+100 PTS × Combo", result: "Glisser et relâcher dans le conteneur" },
    { num: "2", text: "Combo Continu", highlight: "Jusqu'à 3,0× Multiplicateur", result: "Enchaîner les dépôts sans faute" },
    { num: "3", text: "Progression de Niveau", highlight: "+1 Niveau / 250 PTS", result: "Les conteneurs rétrécissent et accélèrent" },
    { num: "4", text: "Tir Manqué / Expiration", highlight: "Combo réinitialisé", result: "Relâcher hors zone réinitialise le combo" }
  ],
};

export default function DragAndDropPage() {
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
      <DragAndDropClient copy={copyFr} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
