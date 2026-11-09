import FPSHubClient from '@/app/drills/fps/FPSHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const fpsDrills = DRILLS.filter((d) => d.category === 'fps');

export const metadata = {
  title: 'Aim Training FPS : entraînement de visée gratuit | SkillDrills',
  description: 'Aim Training FPS gratuit : 15 exercices de visée pour Valorant, CS2 et Apex (flick, tracking, contrôle du recul, réflexes) dans le navigateur.',
  keywords: [
    'aim training', 'aim train', 'aim practice', 'entraînement de visée', 'améliorer son aim FPS', 
    'entraînement visée Valorant', 'aim trainer CS2', 'exercices de flick',
    'tracking visée FPS', 'placement du réticule', 'sensibilité souris shooter',
    'contrôle du recul', 'viser bras ou poignet',
    'micro-ajustements visée', 'eDPI Valorant', 'entraînement de visée FPS'
  ],
  openGraph: {
    title: 'Aim Training FPS : entraînement de visée gratuit | SkillDrills',
    description: 'Aim Training FPS gratuit : 15 exercices de visée pour Valorant, CS2 et Apex (flick, tracking, contrôle du recul, réflexes) dans le navigateur.',
    type: 'website',
    url: 'https://skilldrills.online/fr/drills/fps',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Aim Trainer FPS en Ligne Gratuit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aim Training FPS : entraînement de visée gratuit | SkillDrills',
    description: 'Aim Training FPS gratuit : 15 exercices de visée pour Valorant, CS2 et Apex dans le navigateur.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/fps',
    languages: getAlternateLanguages('/fr/drills/fps'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Catalogue des Exercices", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visée FPS", "item": "https://skilldrills.online/fr/drills/fps" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-09",
  "name": "Aim Training FPS : entraînement de visée gratuit (15 exercices)",
  "url": "https://skilldrills.online/fr/drills/fps",
  "description": `Aim Training FPS gratuit : 15 exercices de visée pour Valorant, CS2 et Apex : flick, tracking, contrôle du recul, changement de cible et réflexes dans le navigateur.`,
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": fpsDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'fr', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/fr${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment l'entraînement sur navigateur se transfère-t-il concrètement sur Valorant et CS2 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sur Valorant et CS2, les premières balles décident souvent du duel : la précision du premier tir et les petites corrections comptent beaucoup. Un Deathmatch en jeu impose des temps morts (réapparitions, déplacements), alors qu'un aim training dans le navigateur enchaîne bien plus de flicks et d'arrêts précis en peu de temps. Un geste plus régulier laisse plus d'attention pour le placement du réticule et la lecture du jeu en match. Le transfert varie d'un joueur à l'autre : comparez aussi vos résultats en jeu."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence fondamentale entre Click-Timing (Flicks), Tracking et Target Switching ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les mécaniques de tir FPS reposent sur trois piliers physiomoteurs distincts : 1) Le Click-Timing / Flicks consiste à projeter rapidement le réticule sur une cible et à valider l'impact au moment exact de l'interception, indispensable pour les fusils semi-automatiques et snipers (Vandal, AK-47, AWP). 2) Le Tracking (poursuite oculaire et motrice) maintient continuellement la mire verrouillée sur une trajectoire dynamique en compensant les changements de vitesse, primordial dans Apex Legends et Overwatch 2. 3) Le Target Switching combine un flick ultra-rapide entre plusieurs cibles avec une stabilisation instantanée, essentiel pour neutraliser des vagues d'ennemis en situation d'embuscade."
      }
    },
    {
      "@type": "Question",
      "name": "Vaut-il mieux viser avec le bras, le poignet ou adopter une technique hybride ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beaucoup de joueurs utilisent une approche hybride : le bras et l'épaule pour les grands déplacements et les demi-tours à 180°, le poignet pour les distances moyennes, et les doigts pour les petites corrections à hauteur de tête. Viser uniquement au poignet limite l'amplitude, viser uniquement au bras rend les toutes petites corrections plus difficiles. Choisissez ce qui est confortable et faites une pause en cas de douleur."
      }
    },
    {
      "@type": "Question",
      "name": "Comment calculer sa sensibilité optimale et sa distance de rotation (cm/360) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La métrique universelle pour calibrer sa visée est la distance physique nécessaire pour effectuer un tour complet de 360° (cm/360). Pour les shooters tactiques (Valorant, CS2), une sensibilité basse située entre 35 et 55 cm/360 (soit un eDPI d'environ 200 à 320) offre une stabilité optimale lors des micro-corrections. Pour les fast-FPS et battle royales (Apex Legends, Overwatch 2), une sensibilité moyenne entre 25 et 38 cm/360 favorise la réactivité des rotations sans sacrifier la fluidité du tracking. Le réglage parfait vous permet de compenser un strafe latéral en maintenant votre réticule immobile sur une cible fixe sans tremblement."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi mon viseur tremble-t-il ou dépasse-t-il la cible (overshooting), et comment y remédier ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les tremblements (shakiness) et les dépassements de cible (overshooting) résultent généralement d'une crispation musculaire excessive de l'avant-bras, d'une prise de souris trop serrée ou d'une sensibilité supérieure à votre capacité actuelle de décélération motrice. Pour stabiliser votre visée : 1) utilisez la friction mécanique de votre tapis de souris en appliquant une légère pression vers le bas avec la base de la paume pour freiner net ; 2) intégrez des exercices de poursuite lente et fluide (smoothness drills) afin de relâcher les tensions musculaires ; et 3) réduisez votre sensibilité de 10 % à 15 % pour élargir votre marge de tolérance neuromusculaire."
      }
    },
    {
      "@type": "Question",
      "name": "Un aim trainer en ligne sur navigateur est-il aussi performant qu'une application installée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour s'entraîner, en grande partie oui. SkillDrills dessine sur un Canvas HTML5 et utilise l'API Pointer Lock du navigateur, qui masque le curseur et fournit le déplacement relatif de la souris (movementX/movementY) : un long flick ne s'arrête donc pas au bord de l'écran. Le mouvement des cibles est calculé à partir du temps écoulé et non du nombre d'images ; les exercices restent donc cohérents sur des écrans 144 Hz, 240 Hz ou 360 Hz. L'entrée du navigateur passe toutefois toujours par les réglages de pointeur du système d'exploitation : gardez le même DPI, la même sensibilité et la même accélération de souris d'une session à l'autre pour comparer vos scores."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce qui prime en match : le placement du réticule (crosshair placement) ou le flick réflexe ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un bon placement du réticule (viser à l'avance la hauteur de tête là où l'adversaire va apparaître) aide plus souvent, car il évite presque tout grand flick. Mais face à des off-angles inattendus, des swings larges ou plusieurs adversaires à la fois, le pré-aim ne suffit plus et ce sont la vitesse du flick et les micro-corrections qui comptent. Entraînez les deux séparément : le placement avec Placement du Viseur, les flicks avec l'exercice de flick."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de minutes par jour faut-il s'entraîner pour progresser sans fatigue nerveuse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Des séances courtes et concentrées sont plus faciles à tenir dans la durée que des sessions marathons de plusieurs heures. Un bon point de départ : 15 à 25 minutes, plusieurs fois par semaine, en arrêtant quand la précision baisse ou que la main fatigue. Il n'existe pas de durée idéale valable pour tout le monde : ajustez selon vos propres résultats."
      }
    }
  ]
};

export default function FrenchFPSHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FPSHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}

