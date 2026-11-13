import KineticInterceptClient from '@/app/drills/visual/tracking-accuracy/moving-target/KineticInterceptClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Intercepter des cibles mobiles | Trajectoire | SkillDrills",
  description: "Intercepter des cibles mobiles en ligne : la sphère rebondit sur les bords puis saute ailleurs. Touche +2 s, clic raté -1 s. Gratuit, pas un test de vue.",
  keywords: [
    "intercepter des cibles mobiles",
    "prédire la trajectoire",
    "cible qui rebondit",
    "cliquer sur une cible mobile",
    "anticiper une trajectoire",
    "jeu de cibles mobiles"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Intercepter des cibles mobiles | Trajectoire | SkillDrills",
    description: "Lisez la trajectoire d'une sphère qui rebondit et cliquez-la avant qu'elle ne saute ailleurs. Entraînement gratuit dans le navigateur.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Intercepter des cibles mobiles | Trajectoire | SkillDrills",
    description: "Intercepter des cibles mobiles : prédire la trajectoire et cliquer au bon moment. Gratuit dans le navigateur.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/moving-target'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Catalogue des Drills", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Entraînement Visuel", "item": "https://skilldrills.online/fr/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Précision de Poursuite", "item": "https://skilldrills.online/fr/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "Intercepter des cibles mobiles", "item": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Intercepter des cibles mobiles",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Exercice dans le navigateur : une sphère se déplace en ligne droite, rebondit sur les bords et saute à un autre endroit après un court délai. Il faut la cliquer avant. Ce n'est pas un test de la vue ni des mouvements oculaires.",
  "featureList": [
    "Cible qui rebondit sur les bords et saute à une nouvelle position quand son anneau expire",
    "Touche : 150 pts × combo × bonus de niveau et +2 s (60 s restantes au maximum)",
    "Plus le niveau monte, plus la cible est rapide et petite, et plus le délai avant le saut est court",
    "Les records restent uniquement dans le stockage local de votre navigateur"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Intercepter des cibles mobiles | SkillDrills",
  "alternateName": "Moving Target Pro",
  "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target",
  "dateModified": "2026-11-12",
  "description": "Jeu gratuit dans le navigateur : intercepter des cibles mobiles avant qu'elles ne sautent ailleurs.",
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
  "teaches": "Suivre une cible mobile du regard, prédire sa trajectoire, précision du clic à la souris"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Intercepter des cibles mobiles",
  "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target",
  "description": "Cliquez une sphère qui rebondit avant qu'elle ne saute ailleurs. Jeu gratuit pour intercepter des cibles mobiles.",
  "genre": [
    "Action",
    "Aim Trainer",
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
  "name": "Comment jouer à « Intercepter des cibles mobiles »",
  "dateModified": "2026-11-12",
  "description": "Quatre étapes pour démarrer et faire monter votre score.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Suivre la sphère du regard et du curseur",
      "text": "Après le compte à rebours, une sphère orange avance en ligne droite et rebondit sur les bords. Gardez le curseur près d'elle.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Surveiller l'anneau",
      "text": "L'anneau et les secondes affichés autour de la cible indiquent quand elle va sauter ailleurs. Au début, c'est environ 1 seconde ; le délai raccourcit avec le niveau et le combo.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Cliquer la cible",
      "text": "Un clic (ou une touche à l'écran) sur la sphère compte comme une touche : 150 pts × combo × bonus de niveau et +2 s de temps (60 s maximum).",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Éviter les clics ratés",
      "text": "Un clic à côté coûte 1 seconde et remet le combo à zéro. À 0 seconde, la partie s'arrête.",
      "url": "https://skilldrills.online/fr/drills/visual/tracking-accuracy/moving-target#step-4"
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
      "name": "Comment fonctionne l'exercice « Intercepter des cibles mobiles » ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une sphère se déplace en ligne droite et rebondit sur les bords de la zone. Après un court délai (environ 1 seconde au début), elle saute à un autre endroit. Vous devez la cliquer avant. La partie commence avec 45 secondes, chaque touche ajoute 2 s (60 s maximum) et elle s'arrête à 0."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le score est-il calculé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque touche rapporte 150 points multipliés par le combo et par un bonus de niveau. Le niveau monte en continu avec le score : la cible devient plus rapide et plus petite, et elle saute plus tôt."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si je rate ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un clic à côté de la cible retire 1 seconde et remet le combo à 0. Si l'option « Target Timeouts » est active dans les réglages (par défaut), une cible qui saute sans avoir été touchée compte aussi comme une erreur et coûte 1 seconde."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi viser un peu devant la cible ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre voir, décider et cliquer, il s'écoule un court instant pendant lequel la sphère continue d'avancer. Plus elle est rapide, plus il est utile de viser légèrement dans le sens de son déplacement."
      }
    },
    {
      "@type": "Question",
      "name": "En quoi prédire la trajectoire aide-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La sphère ne change de direction qu'en touchant un bord, comme une balle qui rebondit. Si vous repérez le rebond tôt, vous pouvez déjà placer le curseur là où elle va repartir."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre poursuite oculaire et saccades ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pendant la poursuite, les yeux glissent avec un objet en mouvement ; une saccade est un saut rapide du regard vers un nouveau point. Les deux sont contrôlés séparément (Rashbass, 1961). Ici, il faut les deux : suivre la sphère tant qu'elle avance, puis la retrouver quand elle saute."
      }
    },
    {
      "@type": "Question",
      "name": "Cet entraînement améliore-t-il ma vue ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un meilleur score montre que vous progressez dans cette tâche précise. Aucun effet sur l'acuité visuelle, les performances sportives ou d'autres tâches n'est établi."
      }
    },
    {
      "@type": "Question",
      "name": "L'exercice est-il gratuit et où sont enregistrés mes scores ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, il est gratuit et sans compte. Les records et combos restent uniquement dans le stockage local de votre navigateur."
      }
    }
  ]
};

const guideData = {
  heading: "Intercepter des cibles mobiles : comment fonctionne l'exercice",
  intro: [
    "Le but est d'intercepter des cibles mobiles : une sphère avance en ligne droite, rebondit sur les bords et saute à un autre endroit après un court délai. Vous devez la cliquer avant, donc prédire sa trajectoire.",
    "La partie commence avec 45 secondes. Chaque touche rapporte 150 points × combo × bonus de niveau et ajoute 2 s (60 s maximum) ; un clic raté coûte 1 seconde et le combo. Plus le score monte, plus la sphère est rapide et petite, et le délai avant le saut raccourcit à partir d'environ 1 seconde.",
    "Les yeux suivent sans à-coups un objet lent ; s'il va trop vite, le regard prend du retard et rattrape la cible par petits sauts (Krauzlis, 2004). L'exercice transforme cette situation en une simple tâche de clic. Il ne mesure ni l'acuité visuelle ni les mouvements des yeux."
  ],
  benchmarks: {
    "title": "Paliers d'entraînement SkillDrills (propres à cet exercice)",
    "headers": [
      "Palier",
      "Délai avant le saut",
      "Score et combo",
      "Profil de jeu"
    ],
    "rows": [
      [
        "Palier 1",
        "< 0,25 s",
        "16 000+ pts | Combo 25x+",
        "Cibles très rapides et petites touchées en série."
      ],
      [
        "Palier 2",
        "0,25 – 0,45 s",
        "10 500 – 15 999 pts | Combo 16x+",
        "Peu de clics ratés, même sur des cibles rapides."
      ],
      [
        "Palier 3",
        "0,46 – 0,70 s",
        "6 000 – 10 499 pts | Combo 9x+",
        "Lignes droites maîtrisées, quelques ratés juste après un rebond."
      ],
      [
        "Palier 4",
        "0,71 – 1,00 s",
        "2 500 – 5 999 pts | Combo 4x+",
        "Le curseur court souvent derrière la sphère."
      ],
      [
        "Palier 5",
        "> 1,00 s",
        "< 2 500 pts | Combo < 4x",
        "Prise en main de l'exercice."
      ]
    ],
    "note": "Paliers définis par SkillDrills pour s'entraîner, pas des normes scientifiques ni une évaluation de la vue. L'écran et la souris influencent le résultat."
  },
  techniques: {
    "title": "Conseils pour toucher plus souvent une cible mobile",
    "items": [
      {
        "name": "Viser un peu devant",
        "desc": "Pendant votre clic, la sphère continue d'avancer. Cliquer sur sa position actuelle fait souvent rater derrière.",
        "tips": "Cliquez légèrement en avant, dans le sens de son déplacement."
      },
      {
        "name": "Anticiper les rebonds",
        "desc": "La sphère rebondit sur les bords comme une balle.",
        "tips": "Ne la suivez pas jusque dans le bord : déplacez déjà le curseur vers la direction de son rebond."
      },
      {
        "name": "Accompagner avec le curseur",
        "desc": "Attendre avec un curseur immobile fait manquer le bon moment aux niveaux élevés.",
        "tips": "Faites glisser le regard et le curseur en même temps que la sphère."
      },
      {
        "name": "Ne pas cliquer au hasard",
        "desc": "Chaque clic raté coûte 1 seconde et le combo.",
        "tips": "Cliquez seulement quand le curseur est bien sur la sphère."
      }
    ]
  },
  steps: [
    "Cliquez sur « Démarrer » pour lancer la partie de 45 secondes.",
    "Suivez la sphère du regard et avec le curseur.",
    "Cliquez-la avant la fin de l'anneau, en visant un peu dans le sens de son déplacement.",
    "Touche : +150 pts × multiplicateur et +2 s ; clic raté : -1 s et combo remis à zéro.",
    "À la fin, consultez votre score, vos touches, votre précision et votre meilleur combo."
  ],
  audience: "Pour tous ceux qui veulent s'entraîner à toucher des cibles mobiles dans le navigateur, par exemple les joueurs de FPS, ou qui cherchent un petit jeu de réflexes.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('rashbass1961', 'krauzlis2004'),
  related: [
    {
      "href": "/fr/drills/visual/tracking-accuracy/multiple-targets",
      "label": "Suivi d'Objets Multiples"
    },
    {
      "href": "/fr/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "Poursuite Lisse au Curseur"
    },
    {
      "href": "/fr/drills/visual/reaction-speed/light-reaction",
      "label": "Test de Réaction Lumineuse"
    },
    {
      "href": "/fr/drills/visual/reaction-speed/go/no-go",
      "label": "Test Go / No-Go d'Inhibition Motrice"
    },
    {
      "href": "/fr/drills/visual/depth-perception/distance-judgment",
      "label": "Jugement de Distance et Perception de Profondeur"
    },
    {
      "href": "/fr/drills/visual/visual-recognition/entropic-grid",
      "label": "Recherche sur Grille Entropique"
    }
  ]
};

export default function KineticInterceptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <KineticInterceptClient copy={{  "title": "Intercepter des cibles mobiles : prédire la trajectoire" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
