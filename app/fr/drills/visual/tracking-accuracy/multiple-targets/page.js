import GhostLinkClient from '@/app/drills/visual/tracking-accuracy/multiple-targets/GhostLinkClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Suivi de Plusieurs Objets | Test MOT | SkillDrills",
  description: "Test de suivi d'objets multiples (MOT) gratuit : retenez 3 boules marquées et suivez-les 60 s parmi des boules identiques.",
  keywords: [
    "test de suivi d'objets multiples",
    "suivi de plusieurs objets",
    "test MOT",
    "multiple object tracking",
    "suivre plusieurs objets",
    "attention divisée"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Suivi de Plusieurs Objets | Test MOT | SkillDrills",
    description: "Retenez 3 boules marquées et retrouvez-les après 60 secondes de mouvement. Test MOT gratuit dans le navigateur.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Suivi de Plusieurs Objets | Test MOT | SkillDrills",
    description: "Suivi de plusieurs objets : gardez 3 cibles en vue pendant 60 s parmi des boules identiques.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/multiple-targets'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Entraînements", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Perception Visuelle", "item": "https://skilldrills.online/fr/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Précision de Poursuite", "item": "https://skilldrills.online/fr/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "Suivi d'Objets Multiples", "item": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de Suivi d'Objets Multiples (MOT)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Exercice dans le navigateur : parmi des boules identiques, 3 cibles s'allument en vert pendant 2 secondes. Toutes les boules bougent ensuite pendant 60 secondes en rebondissant les unes sur les autres, puis vous désignez les 3 cibles.",
  "featureList": [
    "Départ avec 8 boules, dont 3 marquées en vert pendant 2 secondes",
    "60 secondes de mouvement : toutes les boules sont identiques et rebondissent sur les bords et entre elles",
    "Ensuite, choisir 3 boules et valider : 20 points par cible correcte (60 max), aucune pénalité en cas d'erreur",
    "Plus votre record monte, plus il y a de boules et plus elles vont vite ; données uniquement dans le stockage local"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Suivi d'Objets Multiples (MOT) | SkillDrills",
  "alternateName": "GhostLink MOT",
  "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets",
  "dateModified": "2026-11-12",
  "description": "Test MOT gratuit en ligne : suivez 3 cibles pendant 60 secondes parmi des boules identiques.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur moderne compatible HTML5 Canvas.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Suivre plusieurs objets en mouvement avec l'attention, attention divisée"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de Suivi d'Objets Multiples (MOT)",
  "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets",
  "description": "Retenez 3 boules marquées, suivez-les parmi des boules identiques et retrouvez-les à la fin. Jeu MOT gratuit.",
  "genre": [
    "Puzzle",
    "Visual Tracking"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment se déroule le test MOT",
  "dateModified": "2026-11-12",
  "description": "Les quatre étapes d'une manche.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Retenir 3 cibles",
      "text": "Après le compte à rebours, les boules apparaissent et 3 d'entre elles s'allument en vert pendant 2 secondes. Mémorisez leur position.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Suivre pendant 60 secondes",
      "text": "Ensuite, toutes les boules deviennent identiques et bougent pendant 60 secondes. Elles rebondissent sur les bords et entre elles.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Choisir 3 boules",
      "text": "À la fin, les boules s'arrêtent. Cliquez (touchez) les 3 boules que vous pensez être les cibles. Un second clic annule la sélection.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Valider",
      "text": "Avec 3 boules choisies, appuyez sur Valider : 20 points par cible correcte, un mauvais choix vaut 0 point, sans pénalité.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/multiple-targets#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment se déroule le test de suivi d'objets multiples (MOT) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parmi des boules identiques, 3 cibles s'allument en vert pendant 2 secondes. Toutes les boules bougent ensuite pendant 60 secondes ; quand elles s'arrêtent, vous désignez les 3 cibles et validez. Chaque cible correcte rapporte 20 points, 60 au maximum par manche."
      }
    },
    {
      "@type": "Question",
      "name": "Combien y a-t-il de boules et la difficulté augmente-t-elle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous commencez avec 8 boules. Chaque tranche de 30 points de record ajoute une boule, et la vitesse augmente légèrement avec le record. Il y a toujours exactement 3 cibles."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si je choisis une mauvaise boule ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une mauvaise boule vaut 0 point, sans pénalité. Un nouveau clic annule la sélection, vous pouvez donc changer d'avis jusqu'à la validation."
      }
    },
    {
      "@type": "Question",
      "name": "Combien d'objets peut-on suivre en même temps ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depuis la première expérience MOT de Pylyshyn & Storm (1988), on rapporte que la limite pour des objets identiques se situe autour de quatre et baisse quand la vitesse augmente (Cavanagh & Alvarez, 2005). Ce test utilise toujours 3 cibles."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il regarder les boules l'une après l'autre ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pendant que votre regard saute vers une boule, une autre cible peut croiser une boule distractrice et vous perdez la correspondance. Beaucoup trouvent plus simple de regarder à peu près au milieu des cibles et de garder les trois en vue ensemble."
      }
    },
    {
      "@type": "Question",
      "name": "Comment ne pas perdre une cible lors des collisions ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les boules rebondissent les unes sur les autres. Repérez la direction juste avant le choc et celle qu'elle prendra après : vous confondrez moins souvent cible et distracteur."
      }
    },
    {
      "@type": "Question",
      "name": "Cet entraînement améliore-t-il mes performances en jeu ou en sport ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un meilleur score montre que vous maîtrisez mieux cette tâche précise. Un transfert vers les jeux, le sport ou la conduite n'est pas garanti."
      }
    },
    {
      "@type": "Question",
      "name": "Le test est-il gratuit et où sont stockées mes données ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, il est gratuit et sans compte. Les records restent uniquement dans le stockage local de votre navigateur."
      }
    }
  ]
};

const guideData = {
  heading: "Test de suivi d'objets multiples : déroulement et conseils",
  intro: [
    "Dans ce test de suivi d'objets multiples (MOT), vous suivez 3 cibles marquées parmi des boules identiques, puis vous les désignez à la fin. La tâche reprend l'expérience de Pylyshyn & Storm (1988) sous forme de petit jeu dans le navigateur.",
    "Après le compte à rebours, 3 boules s'allument en vert pendant 2 secondes, puis toutes les boules, devenues identiques, bougent pendant 60 secondes en rebondissant sur les bords et entre elles. Quand elles s'arrêtent, vous choisissez 3 boules et validez : 20 points par cible correcte (60 max), sans pénalité pour une erreur. Plus votre record monte, plus il y a de boules et plus elles vont vite.",
    "Suivre plusieurs objets à la fois ne repose pas sur des allers-retours rapides du regard, mais sur une attention répartie entre plusieurs positions (Cavanagh & Alvarez, 2005). Ce test est un jeu d'entraînement."
  ],
  benchmarks: {
    "title": "Paliers d'entraînement SkillDrills (propres à ce jeu)",
    "headers": [
      "Palier",
      "Cibles correctes",
      "Points",
      "Description"
    ],
    "rows": [
      [
        "Parfait",
        "3 / 3",
        "60",
        "Les 3 cibles gardées pendant 60 secondes."
      ],
      [
        "Bon",
        "2 / 3",
        "40",
        "Une cible perdue lors d'une collision."
      ],
      [
        "En progrès",
        "1 / 3",
        "20",
        "Plusieurs confusions en cours de route."
      ],
      [
        "Découverte",
        "0 / 3",
        "0",
        "Prise en main du jeu."
      ]
    ],
    "note": "Paliers définis par SkillDrills pour ce jeu, pas des normes scientifiques ni une évaluation des capacités cognitives."
  },
  techniques: {
    "title": "Conseils pour ne pas perdre plusieurs cibles",
    "items": [
      {
        "name": "Regarder au centre",
        "desc": "Suivre une seule cible des yeux fait facilement perdre les autres.",
        "tips": "Regardez à peu près au milieu des 3 cibles et gardez-les en vue ensemble."
      },
      {
        "name": "Anticiper les rebonds",
        "desc": "Les boules rebondissent sur les bords et entre elles.",
        "tips": "Fixez moins le point d'impact que la direction prise ensuite."
      },
      {
        "name": "Recompter après un croisement",
        "desc": "Le moment le plus trompeur est celui où cible et distracteur se séparent.",
        "tips": "Vérifiez rapidement que vous avez toujours vos 3 cibles."
      },
      {
        "name": "Choisir calmement",
        "desc": "Une fois les boules arrêtées, il n'y a pas de limite de temps.",
        "tips": "En cas de doute, annulez la sélection d'un clic et choisissez à nouveau."
      }
    ]
  },
  steps: [
    "Appuyez sur Démarrer et retenez, après le compte à rebours, les 3 boules marquées en vert.",
    "Suivez les 3 cibles des yeux pendant 60 secondes.",
    "Quand les boules s'arrêtent, cliquez les 3 boules que vous pensez être les cibles.",
    "Validez et consultez cibles trouvées et points (20 par cible correcte).",
    "Regardez la précision et la note sur l'écran de résultats, puis rejouez."
  ],
  audience: "Pour tous ceux qui veulent essayer de suivre plusieurs objets en mouvement à la fois, par exemple les joueurs de FPS et de MOBA, ou qui cherchent un court jeu de concentration.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('pylyshyn1988', 'cavanagh2005'),
  related: [
    {
      "href": "/fr/drills/visual/tracking-accuracy/moving-target",
      "label": "Intercepter des cibles mobiles"
    },
    {
      "href": "/fr/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "Poursuite Lisse au Curseur"
    },
    {
      "href": "/fr/drills/visual-tracking/split-screen-tracking",
      "label": "Poursuite sur Écran Partagé"
    },
    {
      "href": "/fr/drills/visual/reaction-speed/go/no-go",
      "label": "Test Go/No-Go"
    },
    {
      "href": "/fr/drills/visual-tracking/peripheral-ping-pursuit",
      "label": "Poursuite Périphérique"
    }
  ]
};

export default function MultipleTargetsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <GhostLinkClient copy={{  "title": "Suivi d'Objets Multiples" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
