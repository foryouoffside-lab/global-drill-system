import RSVPReaderClient from '@/app/drills/cognitive/processing-speed/rsvp-reader/RSVPReaderClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Lecture rapide en ligne : entraînement RSVP | SkillDrills",
  description: "Entraînement RSVP gratuit : repérez un mot cible dans un flux de 250 à 850 MPM, au même point de l’écran. Ni test de compréhension ni test clinique.",
  keywords: ["lecture rapide", "test vitesse de lecture", "vitesse de lecture", "lecteur rapide en ligne", "RSVP lecture", "mots par minute", "entraînement lecture rapide"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Lecture rapide en ligne : entraînement RSVP | SkillDrills",
    description: "Entraînement RSVP gratuit : repérez un mot cible dans un flux de 250 à 850 MPM, au même point de l’écran. Ni test de compréhension ni test clinique.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Lecture rapide en ligne : entraînement RSVP | SkillDrills",
    description: "Entraînement RSVP gratuit : repérez un mot cible dans un flux de 250 à 850 MPM, au même point de l’écran. Ni test de compréhension ni test clinique.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/rsvp-reader'),
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
      "name": "Cognitif",
      "item": "https://skilldrills.online/fr/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Lecteur RSVP",
      "item": "https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Rapid_serial_visual_presentation"],
  "name": "Lecture rapide en ligne : entraînement RSVP",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Entraînement RSVP gratuit dans le navigateur : repérez un mot cible dans un flux de mots affichés au même endroit, de 250 à 850 MPM.",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lecteur RSVP en Ligne",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Nécessite un navigateur moderne avec support JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Entraînement de Lecture Rapide RSVP",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader",
  "description": "Entraînement RSVP gratuit dans le navigateur : repérez un mot cible dans un flux de mots affichés au même endroit, de 250 à 850 MPM.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu’est-ce que le RSVP (présentation visuelle sérielle rapide) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le RSVP affiche les mots l’un après l’autre au même endroit de l’écran, ce qui supprime les déplacements des yeux le long de la ligne."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce que le point de reconnaissance optimal (ORP) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’ORP est la lettre d’un mot, un peu à gauche du centre, sur laquelle l’œil reconnaît le plus facilement le mot. Elle est mise en rouge dans l’exercice (Rayner, 1998)."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi la lecture classique est-elle plus lente ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lire un texte suppose des saccades et des fixations successives, et parfois des retours en arrière. Un lecteur adulte lit couramment 200 à 250 mots par minute (Rayner, 1998, 2016)."
      }
    },
    {
      "@type": "Question",
      "name": "Que fait exactement cet exercice ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ce n’est pas un lecteur de texte : un flux de mots défile au centre et vous appuyez quand le mot cible s’affiche. Vous suivez votre score et votre exactitude à cinq vitesses, de 250 à 850 MPM."
      }
    },
    {
      "@type": "Question",
      "name": "La compréhension tient-elle quand la vitesse augmente ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pas toujours. Les études sur la lecture montrent que la compréhension baisse quand le rythme dépasse ce que l’on peut traiter (Rayner, 2016). Cet exercice mesure le repérage de mots, pas la compréhension d’un texte."
      }
    },
    {
      "@type": "Question",
      "name": "Le RSVP supprime-t-il la subvocalisation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rien ne le prouve. À un rythme élevé, la prononciation intérieure devient plus difficile à maintenir, mais cet exercice n’a pas été conçu pour la mesurer ni pour la supprimer."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle durée d’entraînement est conseillée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’existe pas de durée prouvée. Quelques séances courtes, reposées, avec une montée progressive de vitesse, permettent de suivre vos résultats sans fatigue visuelle."
      }
    },
    {
      "@type": "Question",
      "name": "Le lecteur RSVP est-il adapté aux smartphones ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, le flux de mots s’affiche à un seul endroit, ce qui convient aux petits écrans : pas de zoom ni de défilement."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi une lettre est-elle colorée en rouge sur chaque mot ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La lettre rouge marque le point ORP du mot et aide le regard à rester au même endroit du début à la fin du flux."
      }
    },
    {
      "@type": "Question",
      "name": "Cet exercice RSVP est-il gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Il est gratuit, sans inscription ni téléchargement, directement dans le navigateur."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment s’entraîner avec l’exercice RSVP",
  "description": "Entraînement RSVP gratuit dans le navigateur : repérez un mot cible dans un flux de mots affichés au même endroit, de 250 à 850 MPM.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fixez le point central",
      "text": "Gardez le regard détendu sur la lettre rouge centrale, sans bouger les yeux de gauche à droite.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Choisissez une vitesse de départ",
      "text": "Commencez par une cadence modérée (250 MPM) pour vous habituer au flux de mots.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Repérez le mot cible",
      "text": "Gardez le mot cible en tête et appuyez dès qu’il apparaît, sans relire.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Montez la vitesse par paliers",
      "text": "Quand votre exactitude reste stable, passez au niveau suivant, jusqu’à 850 MPM.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/rsvp-reader#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rayner1998', 'rayner2016', 'woods2015'),
  intro: {
    title: "Lecture rapide RSVP : comment fonctionne l’entraînement",
    paragraphs: [
      "La lecture rapide en RSVP consiste à voir les mots défiler un par un au même endroit. Dans cet exercice gratuit, vous repérez un mot cible dans un flux de 250 à 850 mots par minute (MPM) et vous suivez votre score et votre exactitude. Ce n’est pas un test de compréhension ni un test médical.",
      "Le RSVP est un paradigme de recherche sur la lecture : en affichant chaque mot au même endroit, on supprime les déplacements des yeux le long de la ligne. En lecture classique, les saccades et les fixations occupent une part importante du temps (Rayner, 1998, 2016).",
      "Chaque mot est affiché avec sa lettre ORP, le point où la reconnaissance est la plus aisée. Les MPM décrivent la cadence d’affichage ; la latence de l’écran et de l’appareil influence aussi le résultat (Woods et al., 2015). Une cadence élevée ne garantit pas une bonne compréhension.",
    ],
  },
  benchmarks: {
    title: 'Paliers de vitesse de l’exercice RSVP (MPM)',
    headers: ['Palier', 'Profil', 'Vitesse', 'Exactitude', 'Lecture'],
    rows: [
      { tier: 'Palier 1', rank: 'Très rapide', stat: '650 – 850+ MPM', level: 'Palier 1', accuracy: '95%+', percentile: 'Flux très rapide suivi avec précision' },
      { tier: 'Palier 2', rank: 'Rapide', stat: '450 – 649 MPM', level: 'Palier 2', accuracy: '90-94%', percentile: 'Bon suivi aux hautes vitesses' },
      { tier: 'Palier 3', rank: 'Confirmé', stat: '300 – 449 MPM', level: 'Palier 3', accuracy: '85-89%', percentile: 'Suivi régulier à vitesse soutenue' },
      { tier: 'Palier 4', rank: 'Intermédiaire', stat: '200 – 299 MPM', level: 'Palier 4', accuracy: '75-84%', percentile: 'Cadence proche de la lecture courante' },
      { tier: 'Palier 5', rank: 'Débutant', stat: '< 200 MPM', level: 'Palier 5', accuracy: '< 75%', percentile: 'Point de départ' },
    ],
  },
  protocols: {
    title: 'Quatre conseils pour suivre le flux de mots',
    description: 'Des habitudes simples pour rester précis quand la vitesse augmente.',
    items: [
      { title: "Fixez le point central", description: "Gardez le regard détendu sur la lettre rouge centrale, sans bouger les yeux de gauche à droite." },
      { title: "Choisissez une vitesse de départ", description: "Commencez par une cadence modérée (250 MPM) pour vous habituer au flux de mots." },
      { title: "Repérez le mot cible", description: "Gardez le mot cible en tête et appuyez dès qu’il apparaît, sans relire." },
      { title: "Montez la vitesse par paliers", description: "Quand votre exactitude reste stable, passez au niveau suivant, jusqu’à 850 MPM." },
    ],
  },
  faqs: {
    title: 'Questions fréquentes',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function EnhancedPageFr() {
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
      <RSVPReaderClient
        copy={{
          title: "Lecture rapide en ligne",
          subtitle: "Traitez les mots à un point fixe et entraînez votre vitesse de lecture",
          startTitle: "Entraînement RSVP",
          startSubtitle: "Reconnaissance des mots • Focalisation ORP",
          stageCaption: "Les mots apparaissent au centre. Appuyez quand le mot cible s’affiche.",
          rulesTitle: "Instructions de l’exercice et score",
          aboutTitle: "Qu’est-ce que la lecture RSVP ?",
          faqTitle: "Exercice RSVP : vos questions",
          labels: { score: "Score", time: "Temps", speed: "Vitesse", bestScore: "Meilleur score", timeLeft: "Temps restant", targetWord: "Mot cible", detected: "CIBLE DÉTECTÉE", ready: "PRÉPAREZ-VOUS", accuracy: "Précision", hits: "Réussites", errors: "Erreurs", points: "Points", playAgain: "Rejouer" },
          aboutLead: "Le RSVP affiche les mots un par un au même endroit de l’écran. Cela réduit une partie des mouvements oculaires, mais la compréhension peut baisser quand le rythme augmente.",
          aboutText: "Cet exercice entraîne la reconnaissance des mots au point optimal de reconnaissance (ORP). Les MPM décrivent le rythme d’affichage ; la latence de l’écran et du toucher influence aussi le résultat. 850 MPM est le niveau maximal de cet exercice, pas une promesse de compréhension générale à cette vitesse.",
          aboutCards: [
            { title: "À qui s’adresse cet exercice ?", desc: "Aux étudiants, professionnels et lecteurs réguliers qui souhaitent pratiquer la lecture rapide." },
            { title: "Quelles capacités sont entraînées ?", desc: "La reconnaissance des mots, la mémoire de travail et l’attention soutenue face à un flux visuel rapide." },
            { title: "Vitesse progressive", desc: "Cinq niveaux de 250 à 850 MPM augmentent le rythme pendant que vous surveillez la précision." }
          ],
          rulesItems: [
            { num: "1", text: "Mot cible", highlight: "Bannière supérieure", result: "Le repérer dans le flux central" },
            { num: "2", text: "Focalisation ORP", highlight: "Limiter les mouvements des yeux", result: "Lire au même endroit" },
            { num: "3", text: "Cible détectée", highlight: "+100 points", result: "Appuyer sur le bouton de détection" },
            { num: "4", text: "Niveau de vitesse", highlight: "250 → 850 MPM", result: "Cinq niveaux de difficulté" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
