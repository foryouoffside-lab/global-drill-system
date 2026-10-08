import SineWavePursuitClient from '@/app/drills/visual-tracking/sine-wave-pursuit/SineWavePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Exercice de poursuite oculaire sinusoïdale | SkillDrills",
  description: "Suivez une cible mobile sinusoïdale horizontalement et verticalement. Exercice gratuit avec décalage de phase et écart de position.",
  keywords: [
    "poursuite oculaire sinusoïdale",
    "suivi oculaire sinusoïdal",
    "exercice de poursuite visuelle",
    "suivre une cible mobile",
    "décalage de phase visuel",
    "gain de poursuite oculaire",
    "poursuite visuelle horizontale",
    "poursuite visuelle verticale",
    "cible oscillante exercice",
    "écart de position du regard"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/visual-tracking/sine-wave-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/sine-wave-pursuit'),
  },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Exercice de poursuite oculaire sinusoïdale | SkillDrills",
    description: "Suivez une cible mobile sinusoïdale horizontalement et verticalement. Exercice gratuit avec décalage de phase et écart de position.",
    url: "https://skilldrills.online/fr/drills/visual-tracking/sine-wave-pursuit",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Exercice de poursuite oculaire sinusoïdale | SkillDrills",
    description: "Exercice court pour suivre une cible périodique et observer l écart de vitesse et de position au changement de direction.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://skilldrills.online/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Exercices",
      "item": "https://skilldrills.online/fr/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Poursuite Visuelle",
      "item": "https://skilldrills.online/fr/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Poursuite Oculaire en Onde Sinusoïdale",
      "item": "https://skilldrills.online/fr/drills/visual-tracking/sine-wave-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "dateModified": "2026-09-20",
  "name": "Entraînement Oculaire Sinusoïdal",
  "operatingSystem": "Navigateur Web",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Exercice de poursuite visuelle sur une trajectoire sinusoïdale, avec gain de poursuite, décalage de phase et écart de position."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "dateModified": "2026-09-20",
  "name": "Exercice de Poursuite Sinusoïdale",
  "url": "https://skilldrills.online/fr/drills/visual-tracking/sine-wave-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Tous les navigateurs modernes",
  "browserRequirements": "Nécessite le support de JavaScript et HTML5 Canvas"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "dateModified": "2026-09-20",
  "name": "Poursuite oculaire sinusoïdale",
  "description": "Exercice de poursuite oculaire continue : suivez une cible qui oscille en vague, avec un gain de poursuite et un écart de phase affichés en fin de série.",
  "genre": ["Entraînement visuel", "Poursuite lente", "Entraînement des réflexes"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Navigateur Web"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Comment suivre une cible sinusoïdale du regard",
  "description": "Quatre étapes pour garder une poursuite fluide sur une trajectoire ondulatoire.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Repérer le rythme de l’onde",
      "text": "Placez-vous à 50-70 cm de l’écran et observez les premiers cycles pour repérer l’amplitude et la cadence."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Accompagner le passage central",
      "text": "La cible va le plus vite quand elle traverse l’axe central : laissez le regard la suivre sans à-coup."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Ralentir aux sommets",
      "text": "Quand la cible ralentit puis repart en sens inverse, ralentissez avec elle pour éviter de la dépasser."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Limiter les rattrapages",
      "text": "Gardez une poursuite continue plutôt que de multiplier les petits sauts du regard pour rattraper la cible."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu’est-ce qu’un exercice de poursuite oculaire sinusoïdale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous suivez du regard une cible qui oscille en vague, horizontalement et verticalement. L’exercice affiche ensuite votre gain de poursuite, votre décalage de phase et l’écart de position. Ce n’est pas un test médical."
      }
    },
    {
      "@type": "Question",
      "name": "En quoi la poursuite sinusoïdale diffère-t-elle d’un suivi à vitesse constante ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La vitesse et l’accélération changent en permanence : la cible va le plus vite au passage de l’axe central et s’arrête brièvement aux sommets avant de repartir en sens inverse (Stark et al., 1962)."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce que le gain de poursuite ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est le rapport entre la vitesse de votre regard et celle de la cible. Un gain proche de 1,0 signifie que l’œil suit la cible à la même vitesse ; en dessous, l’œil prend du retard (Robinson, 1965)."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi le regard fait-il des sauts de rattrapage ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quand la poursuite prend du retard, l’œil effectue une saccade de rattrapage pour replacer la cible au centre de la fovéa (Bahill et al., 1980). Peu de rattrapages indiquent généralement une poursuite plus régulière."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on anticiper une trajectoire sinusoïdale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Comme le mouvement est périodique, le cerveau peut s’appuyer sur le rythme après quelques cycles pour réduire le retard entre la cible et le regard (Barnes, 2008). Une cible aléatoire ne le permet pas."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice améliore-t-il la visée dans les jeux de tir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il entraîne le suivi d’une cible en mouvement régulier, ce qui ressemble au tracking dans un jeu. Aucune étude ne démontre à ce jour un gain direct de score en jeu à partir de cet exercice."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi garder la tête immobile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les mouvements de la tête déclenchent le réflexe vestibulo-oculaire, qui déplace les yeux en sens inverse et fausse la mesure de la poursuite (Leigh & Zee, 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "La fréquence de rafraîchissement de l’écran change-t-elle le résultat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, un peu. Un écran à 144 Hz affiche la cible plus souvent qu’un écran à 60 Hz, ce qui rend le mouvement plus fluide. Comparez toujours vos séries sur le même écran (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice oculaire est-il gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Il fonctionne gratuitement dans votre navigateur, sans inscription, et vos résultats restent enregistrés localement sur votre appareil."
      }
    },
    {
      "@type": "Question",
      "name": "À quelle fréquence faut-il s’entraîner ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Des séances courtes de 5 à 10 minutes, quelques fois par semaine, suffisent pour suivre votre progression. Arrêtez-vous en cas de fatigue ou d’inconfort visuel."
      }
    }
  ]
};

const guideProps = {
  heading: "Poursuite oculaire sinusoïdale : principes et repères",
  intro: [
    "Cet exercice de poursuite oculaire sinusoïdale vous demande de suivre du regard une cible qui oscille en vague. Il affiche votre gain de poursuite, votre décalage de phase et l’écart de position. C’est un entraînement avec des repères personnels, pas un examen médical ni un test de vue.",
    "Sur une onde, la cible va le plus vite au passage de l’axe central, puis s’arrête brièvement aux sommets avant de repartir (Stark et al., 1962 ; Robinson, 1965). Comme le rythme se répète, le cerveau peut s’en servir pour réduire le retard entre la cible et le regard (Barnes, 2008).",
    "Si le regard prend du retard, il rattrape la cible par des saccades courtes (Rashbass, 1961 ; Bahill et al., 1980). Le but est de garder une poursuite continue, avec un gain proche de 1,0 et peu de rattrapages."
  ],
  benchmarks: {
    title: "Repères indicatifs de gain de poursuite",
    headers: ["Palier", "Gain de poursuite", "Rattrapages par cycle", "Lecture"],
    rows: [
      ["Très régulier", "0,96 – 1,02", "0 – 1", "Le regard reste synchronisé avec la cible, y compris aux sommets"],
      ["Régulier", "0,90 – 0,95", "2 – 3", "Quelques micro-corrections aux points d’inversion"],
      ["Correct", "0,82 – 0,89", "4 – 5", "Légère dérive quand l’oscillation s’accélère"],
      ["À travailler", "0,70 – 0,81", "6 – 8", "Retards fréquents aux sommets, rattrapages répétés"],
      ["Débutant", "Moins de 0,70", "Plus de 9", "Suivi surtout réactif ; ralentissez la vitesse"]
    ],
    note: "Repères éditoriaux propres à cet exercice, établis pour un écran à 50-70 cm entre 1.0x et 1.5x. Ce ne sont ni des normes cliniques ni un classement de population."
  },
  techniques: {
    title: "Quatre points de technique pour la poursuite sinusoïdale",
    items: [
      {
        name: "Repérer le rythme",
        desc: "Utilisez les premiers cycles pour mémoriser la cadence, puis laissez le regard accompagner la cible plutôt que de la poursuivre (Robinson, 1965).",
        tips: "Comptez mentalement « un-deux » à chaque aller-retour pour garder la cadence."
      },
      {
        name: "Ralentir aux sommets",
        desc: "À l’approche des sommets, relâchez la tension du regard pour éviter de dépasser la cible au moment où elle s’inverse.",
        tips: "Imaginez le mouvement d’un pendule qui arrive au bout de sa course."
      },
      {
        name: "Accompagner le passage central",
        desc: "La cible est la plus rapide au centre : suivez-la en continu pour conserver la fovéa sur elle.",
        tips: "Évitez de sauter en avant ; laissez le mouvement du regard rester régulier."
      },
      {
        name: "Limiter les rattrapages",
        desc: "Ne réagissez pas à chaque petit écart par un saut du regard. Corrigez par de légères variations de vitesse continue (Bahill et al., 1980).",
        tips: "Gardez le visage détendu et clignez normalement pour limiter la fatigue."
      }
    ]
  },
  steps: [
    "Installez-vous à environ 50–70 cm de l’écran et gardez la tête stable et confortable.",
    "Commencez à la vitesse la plus basse pour repérer l’amplitude et le rythme de l’onde.",
    "Suivez la cible au passage central et ralentissez doucement au point d’inversion.",
    "Faites une séance courte et arrêtez-vous en cas de fatigue ou d’inconfort visuel.",
    "Consultez ensuite le gain de poursuite, le déphasage et l’écart de position."
  ],
  audience: "Personnes souhaitant pratiquer la poursuite oculaire d’une cible périodique à l’écran, sans remplacer un bilan professionnel.",
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('stark1962', 'robinson1965', 'rashbass1961', 'bahill1980', 'barnes2008', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Exercice de poursuite lente continue" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite lors de changements de direction" },
    { href: "/fr/drills/visual-tracking/dynamic-evasion-pursuit", label: "Poursuite d’une cible évasive" },
    { href: "/fr/drills/visual-tracking/ghosting-suppress-pursuit", label: "Suppression des images résiduelles" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Exercice oculaire en huit" },
    { href: "/fr/drills/visual-tracking/momentum-teleport-pursuit", label: "Poursuite d’une cible qui saute" }
  ]
};

export default function SineWavePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SineWavePursuitClient copy={{ title: "Exercice de poursuite oculaire sinusoïdale", subtitle: "Suivez une cible périodique horizontalement et verticalement" }} />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
