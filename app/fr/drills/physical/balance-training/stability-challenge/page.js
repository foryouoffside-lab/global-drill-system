import StabilityChallengeClient from '@/app/drills/physical/balance-training/stability-challenge/StabilityChallengeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — France & Francophonie (FR / FR-FR)
// Native SERP intent: test précision souris, entraînement visée en ligne, stabilité de la visée
// French Context: Comment stabiliser sa visée souris dans Valorant/CS2 et contrer les tremblements musculaires
// High-Demand, Low-Competition Target Keywords:
//   - "précision souris test" (Direct precision diagnostic query)
//   - "jeu précision souris" (Interactive precision game query)
//   - "entrainement précision souris" (Aim precision training query)
//   - "améliorer précision souris" (Accuracy improvement query)
//   - "test de visée souris" (Aim testing query)
//   - "stabilité de la souris" (Mouse stability and jitter query)
//   - "contrôle du recul souris" (Recoil compensation and counter-drag)
//   - "comment stabiliser sa visée souris" (Tremor reduction technique)
//   - "test équilibre moteur et résistance" (Motor equilibrium and resistance)
//   - "compensation des perturbations motrices" (Motor perturbation compensation)
// ============================================================

export const metadata = {
  title: 'Jeu de précision souris : stabilité de visée | SkillDrills',
  description: 'Jeu de précision souris gratuit : gardez le réticule dans l’anneau malgré les rafales de vent et mesurez votre stabilité de visée dans le navigateur.',
  keywords: [
    "test de précision souris",
    "entraînement visée en ligne gratuit",
    "comment stabiliser sa visée souris",
    "contrôle du recul souris",
    "stabilité de la visée",
    "jeu de précision souris",
    "test visée FPS",
    "réduire tremblement souris",
    "suivi stable de cible",
    "entraînement visée Valorant"
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge',
    languages: getAlternateLanguages('/drills/physical/balance-training/stability-challenge'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Jeu de précision souris : stabilité de visée | SkillDrills',
    description: 'Gardez le réticule dans l’anneau malgré le vent : jeu gratuit de stabilité et de précision souris dans le navigateur.',
    url: 'https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Jeu de précision souris : stabilité de visée | SkillDrills',
    description: 'Gardez le réticule dans l’anneau malgré le vent : jeu gratuit de stabilité et de précision souris dans le navigateur.',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills Accueil",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Entraînement Physique",
      "item": "https://skilldrills.online/fr/drills/physical"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Équilibre et Stabilité Motrice",
      "item": "https://skilldrills.online/fr/drills/physical/balance-training"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Défi de Stabilité et Contrôle de la Souris",
      "item": "https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Balance_(ability)"],
  "name": "Entraîneur de Stabilité Souris et Contrôle de Visée",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Jeu en ligne de précision souris : gardez le réticule dans un anneau face à des rafales de vent et mesurez votre stabilité de visée.",
  "url": "https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Défi de Stabilité de Visée (Stability Challenge)",
  "url": "https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge",
  "description": "Test interactif gratuit dans le navigateur pour mesurer et perfectionner la stabilité du curseur face à des vecteurs continus de vent et de résistance motrice.",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Défi de Stabilité de la Souris",
  "url": "https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge",
  "description": "Jeu d'adresse et de résistance neuromotrice consistant à verrouiller le réticule au centre contre des forces dynamiques déstabilisatrices.",
  "genre": ["Action", "Sports Game", "Reflex Game", "Motor Training"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que le Défi de Stabilité (Stability Challenge) et comment fonctionne-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le Défi de Stabilité est un entraînement biomécanique de motricité fine et d'équilibre postural. Des vecteurs de vent dynamiques exercent une poussée continue pour chasser votre réticule du centre. Votre objectif est d'appliquer une contre-pression douce, fluide et constante sur la souris afin de maintenir le réticule dans l'anneau de sécurité central."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice peut-il aider à stabiliser sa souris dans un jeu de tir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il fait travailler des corrections fines face à une poussée continue, ce qui ressemble à la stabilisation du réticule en jeu (Woodworth, 1899). Il ne supprime pas les tremblements et ne reproduit pas le recul d'une arme : le transfert reste à vérifier dans votre propre jeu."
      }
    },
    {
      "@type": "Question",
      "name": "Comment la force du vent et la taille de l'anneau de sécurité évoluent-elles ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tous les 250 points, vous progressez jusqu'au Niveau 15. Durant cette montée en difficulté, le rayon de l'anneau central rétrécit de 45 px à seulement 20 px, tandis que l'accélération des rafales de vent grimpe de 250 à 850 unités de force, imposant des micro-ajustements musculaires millimétrés."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il lorsque le curseur quitte l'anneau de sécurité ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sortir de l'anneau brise le verrouillage de stabilité, déclenche un flash rouge à l'écran et réinitialise instantanément le multiplicateur de combo à 1.0x. Aucun point déjà acquis n'est déduit et aucun temps n'est soustrait du chronomètre."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la durée exacte d'une session d'entraînement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque session dure 45 secondes. Le compte à rebours est identique à chaque essai, ce qui vous permet de comparer vos séances entre elles."
      }
    },
    {
      "@type": "Question",
      "name": "Quel score correspond au palier le plus haut ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le palier 1 correspond à 17 000 points ou plus avec une stabilité supérieure à 92 % dans l'anneau réduit de 20 px (niveaux 12 à 15). Ces paliers sont des repères propres à l'exercice, sans statistique de population : ils servent à situer votre progression."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle prise de souris (Palm, Claw ou Fingertip) optimise la résistance ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucune prise n'est démontrée comme la meilleure. Beaucoup de joueurs trouvent la prise Palm ou Claw, avec l'avant-bras posé sur le bureau, plus stable face à une poussée continue ; la prise Fingertip permet des micro-corrections fines mais peut fatiguer les doigts. Gardez celle de votre jeu."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle sensibilité de souris (DPI) est recommandée pour stabiliser sa visée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n'y a pas de valeur universelle. Une sensibilité plus basse rend le curseur moins sensible aux petites vibrations de la main, mais ralentit les grandes corrections. Gardez la sensibilité de votre jeu et comparez vos séances avec le même réglage."
      }
    },
    {
      "@type": "Question",
      "name": "En quoi la posture corporelle influe-t-elle sur la stabilité du curseur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nashner & McCollum (1985) décrivent le lien entre stabilité du tronc et contrôle des membres. En pratique, une bonne assise et un avant-bras posé sur le bureau limitent les mouvements parasites transmis à la souris."
      }
    },
    {
      "@type": "Question",
      "name": "Mes données de performance et mes scores sont-ils transmis à des serveurs tiers ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. SkillDrills enregistre l'intégralité de vos records, combos et analyses de manière 100 % locale dans le LocalStorage de votre navigateur, sans aucun suivi externe ni nécessité de créer un compte."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Quatre points de technique pour rester dans l’anneau",
  "description": "Des réglages simples pour stabiliser le réticule face au vent.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Centrer avant de partir",
      "text": "Placez le réticule au centre de l’anneau avant le lancement et cliquez pour verrouiller le curseur dans le navigateur.",
      "url": "https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Lire la direction de la poussée",
      "text": "Repérez d’où vient la force dès que le réticule commence à dériver, puis opposez-lui une contre-pression douce et continue.",
      "url": "https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Corriger petit, corriger tôt",
      "text": "Mieux vaut de petites corrections répétées qu’un grand geste tardif : un grand geste vous fait sortir de l’anneau de l’autre côté.",
      "url": "https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Stabiliser le bras",
      "text": "Posez l’avant-bras sur le bureau et gardez une prise détendue. Dans les niveaux élevés, faites les micro-corrections avec les doigts sans lever le bras.",
      "url": "https://skilldrills.online/fr/drills/physical/balance-training/stability-challenge#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('woodworth1899', 'fitts1954', 'woods2015'),
  intro: {
    title: 'Jeu de précision souris : comment fonctionne la stabilité de visée',
    paragraphs: [
      "Ce jeu de précision souris vous demande de garder le réticule dans un anneau central pendant que des forces de « vent » le poussent vers l’extérieur. Vous mesurez votre stabilité, vos sorties d’anneau et votre meilleure série. Ce n’est pas un test médical de tremblement : c’est un exercice de contrôle fin de la souris.",
      "Selon le modèle à deux phases de Woodworth (1899), un mouvement manuel comprend une impulsion initiale puis une phase de contrôle continu guidée par la vue. Ici, seule la seconde phase compte : vous corrigez sans cesse la position du curseur face à une poussée qui ne s’arrête pas, au lieu de viser un point fixe comme dans un flick.",
      "La difficulté augmente par niveaux : l’anneau passe de 45 px à 20 px et la force du vent croît. Plus la zone est étroite, plus l’erreur se voit vite, ce qui rejoint la loi de Fitts (1954) sur le compromis entre précision et vitesse.",
      "Le chronométrage s’appuie sur l’horloge performance.now() du navigateur, dont la résolution est limitée. Un écran à 60 Hz affiche une image environ toutes les 16,7 ms (Woods et al., 2015) : comparez vos séances sur le même matériel."
    ]
  },
  benchmarks: {
    title: "Paliers de stabilité de visée",
    headers: ["Palier", "Score de référence", "Stabilité et niveau", "Lecture"],
    rows: [
      ["Palier 1 (Très stable)", "17 000+ points", "Niveau 12–15 / stabilité supérieure à 92 %", "Contrôle fin dans l’anneau réduit"],
      ["Palier 2 (Stable)", "13 000 à 16 999 pts", "Niveau 9–11 / stabilité 85–91 %", "Bonne compensation des rafales"],
      ["Palier 3 (Correct)", "9 500 à 12 999 pts", "Niveau 6–8 / stabilité 76–84 %", "Fermeté établie, quelques sorties d’anneau"],
      ["Palier 4 (En progression)", "6 000 à 9 499 pts", "Niveau 3–5 / stabilité 65–75 %", "Base à consolider"],
      ["Palier 5 (Débutant)", "Moins de 6 000 points", "Niveau 1–2 / stabilité inférieure à 65 %", "Entraînement recommandé aux niveaux lents"]
    ],
    note: "Repères éditoriaux propres à cet exercice, établis sur le temps passé dans l’anneau, la compensation des rafales et le score brut. Ce ne sont ni des normes cliniques ni un classement de population."
  },
  protocols: {
    title: 'Quatre points de technique pour rester dans l’anneau',
    description: 'Des réglages simples pour stabiliser le réticule face au vent.',
    items: [
      {
        title: 'Centrer avant de partir',
        description: 'Placez le réticule au centre de l’anneau avant le lancement et cliquez pour verrouiller le curseur dans le navigateur.'
      },
      {
        title: 'Lire la direction de la poussée',
        description: 'Repérez d’où vient la force dès que le réticule commence à dériver, puis opposez-lui une contre-pression douce et continue.'
      },
      {
        title: 'Corriger petit, corriger tôt',
        description: 'Mieux vaut de petites corrections répétées qu’un grand geste tardif : un grand geste vous fait sortir de l’anneau de l’autre côté.'
      },
      {
        title: 'Stabiliser le bras',
        description: 'Posez l’avant-bras sur le bureau et gardez une prise détendue. Dans les niveaux élevés, faites les micro-corrections avec les doigts sans lever le bras.'
      }
    ]
  },
  faqs: {
    title: 'Questions fréquentes',
    items: faqSchema.mainEntity.map(q => ({
      q: q.name,
      a: q.acceptedAnswer.text
    }))
  }
};

export default function StabilityChallengeFrPage() {
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
      <StabilityChallengeClient
        copy={{
          title: 'Jeu de précision souris',
          subtitle: 'Stabilité de visée : gardez le réticule centré malgré le vent',
          hudLabels: {
            score: "Points",
            time: "Temps",
            stability: "Stabilité",
            blowouts: "Décrochages",
            maxStreak: "Meilleure Série",
            peakLevel: "Niveau Max",
            getReady: "PRÊT",
            points: "Points",
            playAgain: "Rejouer"
          },
          rulesTitle: "Règles de l'Exercice et Barème des Scores",
          rulesItems: [
            { title: 'Rester dans l’anneau', text: "Gardez le réticule centré dans l'anneau de sécurité contre les forces de résistance du vent." },
            { title: 'Combo de stabilité', text: "Maintenez une stabilisation ininterrompue pour faire grimper le combo jusqu'à 3.0x." },
            { title: 'Niveaux', text: "Tous les 250 points, le niveau s'élève. L'anneau passe de 45px à 20px et les vents s'accélèrent." },
            { title: 'Sortie d’anneau', text: "Quitter l'anneau remet le multiplicateur à 1.0x immédiatement, sans pénalité de score ni de temps." }
          ],
          aboutTitle: "À Propos du Défi de Stabilité",
          aboutHeading: "Compensation Dynamique des Forces et Équilibre Postural",
          aboutIntro: "Le Défi de Stabilité est un entraînement biomécanique de précision motrice et de stabilisation posturale. Les vecteurs de vent chassent votre curseur en continu, exigeant une contre-pression douce et millimétrée.",
          aboutScience: "Inspiré des synergies posturales de Nashner & McCollum (1985) et des principes d'équilibre de David A. Winter (1995), l'exercice mobilise le contrôle visuel en boucle fermée (Woodworth, 1899). Avec la montée du score, l'anneau rétrécit à 20px et la force accélère jusqu'à 850 unités.",
          aboutCards: [
            { title: 'Pour qui ?', text: "Joueurs de jeux de tir et toute personne qui veut travailler la stabilité de la souris et la régularité des petites corrections." },
            { title: 'Ce qui est travaillé', text: "Compensation d'une poussée continue, stabilité du bras, stabilisation du réticule et micro-ajustements des doigts." },
            { title: 'Lien avec le recul', text: "La contre-pression continue ressemble à la compensation du recul d'une arme, sans la reproduire : vérifiez le transfert dans votre jeu." }
          ]
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/balance-training/stability-challenge" />
    </>
  );
}
