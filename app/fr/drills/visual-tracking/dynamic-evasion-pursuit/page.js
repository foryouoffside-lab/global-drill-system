import DynamicEvasionPursuitClient from '@/app/drills/visual-tracking/dynamic-evasion-pursuit/DynamicEvasionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Exercice de poursuite oculaire : cible mobile | SkillDrills",
  description: "Rattrapez une cible mobile qui change de direction. Travaillez la vision dynamique, la réactivité et la refixation fovéale en ligne.",
  keywords: [
    "poursuite oculaire",
    "suivi visuel réactif",
    "cible mobile exercice",
    "vision dynamique entraînement",
    "refixation fovéale",
    "saccades de rattrapage",
    "réactivité visuelle",
    "rupture de direction",
    "motricité oculaire exercice",
    "suivi oculaire pour le sport",
    "entraînement visuel en ligne",
    "test de poursuite oculaire gratuit"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/visual-tracking/dynamic-evasion-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/dynamic-evasion-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Exercice de poursuite oculaire : cible mobile | SkillDrills",
    description: "Rattrapez une cible mobile qui change de direction et travaillez vision dynamique, réactivité et refixation fovéale.",
    url: "https://skilldrills.online/fr/drills/visual-tracking/dynamic-evasion-pursuit",
    siteName: "SkillDrills",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Exercice de poursuite oculaire : cible mobile | SkillDrills",
    description: "Rattrapez une cible mobile qui change de direction et travaillez vision dynamique, réactivité et refixation fovéale.",
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
      "name": "Poursuite Visuelle",
      "item": "https://skilldrills.online/fr/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Poursuite Évasive Dynamique",
      "item": "https://skilldrills.online/fr/drills/visual-tracking/dynamic-evasion-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "Poursuite Oculaire Réactive – Cible Mobile",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Navigateur",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Poursuite de Cible Évasive et Refixation Fovéale",
  "url": "https://skilldrills.online/fr/drills/visual-tracking/dynamic-evasion-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Navigateur",
  "browserRequirements": "JavaScript et Canvas HTML5 requis.",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Poursuite Oculaire Réactive – Entraîneur Visuel",
  "description": "Entraîneur visuel sur navigateur pour suivre une cible mobile qui change de direction et exercer la réactivité visuelle.",
  "genre": ["Entraînement de la Motricité Oculaire", "Vision Sportive", "Entraînement de la Réactivité Visuelle"],
  "playMode": "Un joueur",
  "applicationCategory": "Game",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Comment Entraîner la Refixation Saccadique sur Cibles Évasives",
  "description": "Protocole pour conditionner des réflexes visuo-moteurs réactifs et éliminer le temps de latence face aux ruptures de trajectoire.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Stabilisez Votre Posture",
      "text": "Asseyez-vous le dos droit à 50-60 cm de l'écran. Gardez la tête immobile pour éviter l'intervention du réflexe vestibulo-oculaire (RVO).",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/dynamic-evasion-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Accompagnez les Segments Linéaires",
      "text": "Maintenez une poursuite fluide continue tant que la cible évolue à vitesse stable sur sa trajectoire rectiligne.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/dynamic-evasion-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Déclenchez une Saccade Immédiate à la Rupture",
      "text": "Dès que la cible effectue une rupture d'angle, laissez la rétine percevoir le décrochage et lancez une saccade nette pour recentrer la fovéa.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/dynamic-evasion-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Effectuez des Séries Courtes et Dynamiques",
      "text": "Réalisez 5 à 8 séries de 60 secondes avec des pauses régulières pour préserver une réactivité neuronale optimale sans fatigue oculaire.",
      "url": "https://skilldrills.online/fr/drills/visual-tracking/dynamic-evasion-pursuit#step-4"
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
      "name": "Qu’est-ce que l’exercice de poursuite oculaire réactive sur cible mobile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est un entraînement oculaire combinant des portions de poursuite fluide et des changements brusques de direction, afin de ramener rapidement le regard sur la cible."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence avec la poursuite chaotique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La poursuite chaotique change continuellement, tandis que cet exercice présente des trajectoires stables interrompues par des virages soudains, ce qui oblige à relire la direction."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il sur la rétine lors d’un changement de direction imprévu ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La déviation brutale de la cible fait glisser son image sur la rétine. Le colliculus supérieur et le cortex visuel participent à la saccade corrective qui repositionne la fovéa sur la nouvelle trajectoire (Krauzlis, 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est l’impact de cet exercice sur le suivi de cible dans les jeux de tir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans les jeux de tir, les adversaires enchaînent des déplacements latéraux imprévisibles. Cet exercice affine le recentrage fovéal, réduit l'hésitation visuelle et aide à conserver la cible."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi faut-il impérativement garder la tête immobile pendant le test ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bouger la tête active le réflexe vestibulo-oculaire (RVO) de l'oreille interne, compensant artificiellement le retard moteur. L'immobilité stricte de la tête garantit que les six muscles oculomoteurs réalisent l'ensemble de l'effort."
      }
    },
    {
      "@type": "Question",
      "name": "Quel volume d’entraînement quotidien est conseillé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous conseillons 5 à 10 minutes par jour (5 à 8 blocs de 60 secondes). Les ruptures angulaires sollicitant intensément l'attention et la motricité réflexe, des formats concis préviennent l'épuisement oculaire."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire si la cible s’échappe après une manœuvre d’esquive rapide ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ne balayez pas l'écran au hasard. Fixez calmement le champ visuel central, repérez le nouveau vecteur avec la vision périphérique et lancez une saccade directe. Si le décrochage est régulier, passez temporairement à 0.8x."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le rôle de la fréquence de rafraîchissement de l’écran (Hz) sur ce test ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un moniteur à 144 Hz ou plus réduit le délai d'affichage à moins de 6,9 ms (Woods et al., 2015), rendant les ruptures d'angles immédiatement perceptibles sans saccades parasites, optimisant la réponse motrice de l'œil."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice apporte-t-il des bénéfices aux athlètes de sports collectifs ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Au football, au tennis ou au basketball, les feintes et les balles déviées demandent de retrouver vite la cible du regard. Cet exercice entraîne ce mécanisme sur écran, sans preuve que le gain se transfère au terrain."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test de poursuite évasive est-il gratuit et confidentiel ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, ce test fonctionne directement dans votre navigateur web sans aucun frais ni inscription, et l'intégralité de vos scores et temps reste stockée exclusivement sur votre terminal local."
      }
    }
  ]
};

const guideProps = {
  heading: "Bases Neurophysiologiques de la Poursuite Oculaire Réactive",
  intro: [
    "Cet exercice de poursuite oculaire avec cible mobile vous demande de suivre du regard un point qui file en ligne droite puis change brusquement de direction. À chaque virage, votre regard décroche et doit rattraper la cible. Ce n’est pas un test médical : c’est un entraînement avec un repère de progression personnel.",
    "Les entraînements oculaires traditionnels reposent souvent sur des trajectoires régulières, au sein desquelles le cervelet aide à anticiper le mouvement grâce à une commande motrice prédictive (Bahill, Iandolo, & Troost, 1980). Ici, la cible parcourt des segments rectilignes avant de changer soudainement de direction, comme dans les sports rapides et les jeux compétitifs.",
    "Glissement rétinien et saccades de rattrapage : lors d'une déviation imprévisible, l'image se déplace sur la rétine plus vite que la poursuite fluide ne peut la compenser. Le cortex visuel et le colliculus supérieur traitent cette erreur et orientent une saccade corrective pour ramener la fovéa sur la cible (Rashbass, 1961 ; Krauzlis, 2004 ; Barnes, 2008).",
    "Fréquence de rafraîchissement et latence d'affichage : un écran à 60 Hz peut imposer jusqu'à 16,7 ms entre deux images, tandis que 144 Hz ou 240 Hz réduisent cet intervalle. L'application fonctionne dans le navigateur et conserve les résultats localement, sans inscription."
  ],
  techniques: {
    title: "Quatre techniques pour améliorer la récupération saccadique",
    items: [
      { name: "Stabiliser la tête pour isoler la motricité oculaire", desc: "Garder la tête et la mâchoire stables réduit la participation du réflexe vestibulo-oculaire et laisse les muscles oculomoteurs corriger le regard.", tips: "Installez-vous à 50–70 cm de l'écran, posez les pieds au sol et faites une pause en cas de brûlure ou de vision double." },
      { name: "Lire le nouveau vecteur avant la refixation", desc: "Après un virage, la rétine périphérique détecte le déplacement avant que la fovéa ne retrouve la cible. Une saccade courte et dirigée est plus efficace qu'un balayage prolongé.", tips: "Observez le premier déplacement après le virage et sautez vers le centre probable de la cible, sans suivre sa traînée." },
      { name: "Réagir sans anticiper le prochain virage", desc: "La trajectoire ne répétant pas un modèle fiable, deviner la prochaine courbe augmente les erreurs directionnelles. L'exercice doit privilégier l'information qui vient d'apparaître.", tips: "Si vous attendez un virage connu, ralentissez puis répondez uniquement au mouvement observé." },
      { name: "Progresser avec vitesse et repos", desc: "La qualité de la refixation est plus utile qu'une vitesse élevée avec des pertes constantes. Des séries courtes permettent de comparer la stabilité sans accumuler de fatigue.", tips: "Commencez à 1.0x, augmentez par petits paliers lorsque la cible est retrouvée régulièrement et reposez vos yeux entre les séries." }
    ]
  },
  steps: [
    "Asseyez-vous à 50–70 cm de l'écran, alignez votre posture et gardez la tête et la mâchoire stables.",
    "Commencez à 1.0x pendant 60 secondes afin d'observer la fréquence à laquelle la cible est perdue.",
    "Lors d'un virage, détectez le nouveau vecteur avec la vision périphérique et faites une saccade courte pour recentrer la fovéa.",
    "Reprenez la poursuite continue dès que la cible est retrouvée ; ne balayez pas l'écran au hasard.",
    "Faites 5 à 8 séries avec des pauses, notez la vitesse à laquelle la stabilité baisse et utilisez-la pour régler la séance suivante."
  ],
  benchmarks: {
    title: "Normes de Performance en Poursuite Évasive et Refixation Saccadique",
    headers: ["Niveau de Performance", "Multiplicateur de Vitesse", "Refixation Saccadique lors des Ruptures Évasives", "Profil Neuromoteur et Oculaire"],
    rows: [
      ["Niveau 1 : Apex Réactif – Réflexes d’Élite", "2.0x+ Ultra-Vitesse", "La saccade corrective intervient en moins de 150 ms ; verrouillage fovéal immédiat sans oscillation résiduelle.", "Vitesse maximale de conduction synaptique entre fovéa et noyaux oculomoteurs. Niveau de référence de l'exercice, sans valeur de classement."],
      ["Niveau 2 : Agilité Visuelle Supérieure", "1.4x – 1.9x Haute Vitesse", "Recentrage rapide et fiable en 1 à 2 images vidéo ; reprise immédiate de la vitesse de poursuite continue.", "Contrôle remarquable des muscles oculomoteurs externes. Excellente maîtrise face aux déplacements d'esquive imprévisibles."],
      ["Niveau 3 : Standard Fonctionnel Solide", "1.0x – 1.3x Vitesse Standard", "Suivi régulier des portions linéaires ; léger retard de latence lors des ruptures à angle aigu.", "Profil représentatif des adultes sains. Parfaitement adapté à la conduite automobile, aux sports de loisir et aux jeux vidéo."],
      ["Niveau 4 : Refixation Retardée – Pratique Recommandée", "0.7x – 0.9x Vitesse Modérée", "La cible décroche de la fovéa sur la majorité des ruptures ; nécessite plusieurs saccades successives pour reprendre l'alignement.", "Latence sensori-motrice augmentée lors des changements de cap. Entraînement recommandé à vitesses réduites."],
      ["Niveau 5 : Instabilité Oculaire – Débutant", "< 0.7x Basse Vitesse", "Le regard reste figé sur l'ancienne trajectoire de la cible avant de déclencher une réaction compensatoire tardive.", "La motricité oculaire élémentaire doit d'abord être consolidée sur des trajectoires régulières avec stabilisation stricte de la tête."]
    ],
    note: "Normes fondées sur les études neurophysiologiques de la latence saccadique, du glissement rétinien et de la reprise de poursuite lors de ruptures angulaires soudaines (Bahill et al., 1980 ; Rashbass, 1961 ; Krauzlis, 2004 ; Barnes, 2008)."
  },
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('bahill1980', 'barnes2008', 'krauzlis2004', 'robinson1965', 'rashbass1961', 'woods2015'),
  related: [
    { href: "/fr/drills/visual-tracking/constant-slow-pursuit", label: "Poursuite Oculaire Lente" },
    { href: "/fr/drills/visual-tracking/directional-chaos-pursuit", label: "Poursuite Chaotique Directionnelle" },
    { href: "/fr/drills/visual-tracking/sine-wave-pursuit", label: "Poursuite en Onde Sinusoïdale" },
    { href: "/fr/drills/visual-tracking/infinity-pursuit", label: "Poursuite en Huit" }
  ]
};

export default function DynamicEvasionPursuitPageFr() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DynamicEvasionPursuitClient
        copy={{
          title: "Exercice de poursuite oculaire : cible mobile",
          subtitle: "Entraînement de Refixation Fovéale et Réaction aux Ruptures Brusques",
          description: "En alternant trajectoires linéaires régulières et ruptures d'angles imprévisibles, cet exercice empêche l'anticipation motrice cérébelleuse. Le système oculomoteur opère en boucle fermée, déclenchant des saccades rapides pour recentrer la cible sur la fovéa (Bahill et al., 1980; Krauzlis, 2004)."
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
