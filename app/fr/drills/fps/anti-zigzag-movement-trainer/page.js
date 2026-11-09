import AntiZigzagClient from '@/app/drills/fps/anti-zigzag-movement-trainer/AntiZigzagClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "Tracking en zigzag : cibles évasives | SkillDrills";
const DESCRIPTION = "Tracking en zigzag gratuit : gardez le réticule sur une cible qui change brusquement de direction et videz sa barre de vie avant qu'elle s'échappe.";
const NAME = "Tracking en zigzag";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tracking en zigzag",
    "tracking zigzag",
    "cibles évasives",
    "tracking réactif",
    "suivi de cible FPS"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    languages: getAlternateLanguages('/drills/fps/anti-zigzag-movement-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AntiZigzagFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînements FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": NAME,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Exercice gratuit de tracking en zigzag dans le navigateur : gardez le réticule sur une cible évasive jusqu'à vider sa barre de vie.",
    "genre": "FPS Training / Reactive Tracking",
    "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": NAME,
    "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Tracking réactif dans le navigateur contre des cibles évasives qui changent de direction en zigzag."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/fr/drills/fps/anti-zigzag-movement-trainer",
    "description": "Exercice gratuit de tracking en zigzag dans le navigateur : gardez le réticule sur une cible évasive jusqu'à vider sa barre de vie.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Reactive Tracking"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment fonctionne le tracking en zigzag ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une cible apparaît à un endroit aléatoire, file vers la gauche ou la droite en dérivant un peu vers le haut ou le bas, et change de direction à intervalles irréguliers. Vous ne cliquez pas : tant que le réticule est sur la cible, sa barre de vie baisse. La partie démarre avec 45 secondes."
        }
      },
      {
        "@type": "Question",
        "name": "Comment détruire une cible ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sous le réticule, la cible perd 65 PV par seconde : environ 1,5 seconde au total suffit. Vous gagnez alors un bonus de 25 points multiplié par le combo, puis une nouvelle cible apparaît. Les PV retirés restent acquis même si vous décrochez entre-temps."
        }
      },
      {
        "@type": "Question",
        "name": "Comment sont calculés les points et le combo ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sur la cible, vous gagnez toutes les 0,25 seconde 10 points multipliés par le combo et un bonus de niveau, et le chrono gagne 0,1 seconde (60 secondes maximum). Chaque seconde tenue d'affilée ajoute 1 au combo ; le multiplicateur atteint 3,0× au maximum à 50 de combo."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi la cible disparaît-elle ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chaque cible a une durée de vie : environ 4,2 secondes au niveau 1, puis jusqu'à environ 1,8 seconde aux niveaux élevés. Si vous ne la détruisez pas à temps, elle s'échappe, le combo retombe à 0 et une nouvelle cible apparaît. Plus d'une seconde hors cible remet aussi le combo à 0."
        }
      },
      {
        "@type": "Question",
        "name": "Comment la difficulté augmente-t-elle ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le niveau monte de 1 tous les 1400 points, sans plafond. À chaque niveau, la cible rétrécit et accélère, et l'intervalle entre deux changements de direction raccourcit à partir d'environ 1,2 seconde."
        }
      },
      {
        "@type": "Question",
        "name": "Comment mieux suivre les cibles évasives ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un grand flick à chaque changement de direction dépasse presque toujours la cible. Regardez son centre, freinez brièvement après l'inversion puis calez-vous sur sa nouvelle vitesse. L'exercice reproduit des changements de direction brusques, pas des glissades : utile par exemple pour Apex Legends, Valorant ou Call of Duty face à des adversaires qui esquivent. Le transfert en jeu varie selon les personnes."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce jouable sur mobile ou écran tactile ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non. L'exercice lit les mouvements de la souris via le Pointer Lock, une souris est donc nécessaire. Sur un appareil uniquement tactile, un message remplace le bouton de départ. La touche Échap quitte l'exercice à tout moment."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "S'entraîner au tracking en zigzag",
    "description": "Étapes pour suivre et détruire une cible évasive qui change de direction en zigzag.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Régler la sensibilité",
        "text": "Sur la page des drills, ajustez la sensibilité souris commune pour retrouver vos sensations habituelles."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Lancer",
        "text": "Cliquez sur Démarrer : l'exercice passe en plein écran et active le Pointer Lock après le compte à rebours."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Rester sur la cible",
        "text": "Gardez le réticule sur la cible pour vider sa barre de vie."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Détruire à temps",
        "text": "Détruisez la cible avant qu'elle s'échappe pour prendre le bonus et garder le combo."
      }
    ]
  };

  const frGuide = {
    heading: "Tracking en zigzag : guide contre les cibles évasives",
    intro: [
      "Avec cet exercice de tracking en zigzag de SkillDrills, vous gardez le réticule sur une cible qui change brusquement de direction pour vider sa barre de vie. Aucun clic : le temps passé sur la cible fait les dégâts.",
      "La cible apparaît au hasard, se déplace latéralement avec une légère dérive verticale et rebondit sur les bords. Au niveau 1 elle change de direction environ toutes les 1,2 seconde, puis de plus en plus souvent. Chaque cible a une durée de vie limitée et s'échappe si vous tardez.",
      "Une partie commence avec 45 secondes ; sur la cible, le chrono gagne 0,4 seconde par seconde (60 secondes maximum). Les points et les niveaux n'ont pas de plafond."
    ],
    techniques: {
      title: "Conseils de tracking en zigzag",
      items: [
        {
          name: "Pas de sur-flick",
          desc: "Un grand flick au changement de direction vous envoie de l'autre côté et fait perdre du temps de dégâts.",
          tips: "Après l'inversion, freinez brièvement puis prenez la nouvelle vitesse."
        },
        {
          name: "Lire la traînée",
          desc: "Un court trait derrière la cible montre son dernier déplacement.",
          tips: "La direction du trait indique où la cible va en ce moment."
        },
        {
          name: "Priorité à la destruction",
          desc: "Si la durée de vie expire, le combo est perdu : accumulez le temps sur la cible et finissez-la vite.",
          tips: "Sous la moitié des PV, la barre devient rouge. Ne lâchez pas."
        },
        {
          name: "Une prise souple",
          desc: "Une main crispée rend saccadées les petites corrections dans toutes les directions.",
          tips: "Serrez juste assez pour garder doigts et poignet libres."
        }
      ]
    },
    steps: [
      "Ajuster la sensibilité souris commune sur la page des drills.",
      "Cliquer sur Démarrer pour activer le plein écran et le Pointer Lock.",
      "Garder le réticule sur la cible en zigzag pour vider sa barre de vie.",
      "La détruire avant la fin de sa durée de vie pour gagner 25 points × combo.",
      "Après la partie, comparer précision, meilleur combo et niveau."
    ],
    audience: "Joueurs d'Apex Legends, Valorant ou Call of Duty qui perdent les adversaires qui esquivent, et tous ceux qui veulent travailler le tracking en zigzag gratuitement dans le navigateur.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/fr/drills/fps/anti-strafe-jitter-duel", label: "Tracking anti-strafe ADAD" },
      { href: "/fr/drills/reaction-speed/fps-tracking-trainer", label: "Entraînement Tracking FPS" },
      { href: "/fr/drills/fps/pro-smooth-pursuit", label: "Tracking Fluide Smooth Pursuit" },
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement Flick Shot" },
      { href: "/fr/drills/visual/reaction-speed/light-reaction", label: "Test de Temps de Réaction" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <AntiZigzagClient
        copy={{
          h1Keyword: "Tracking en zigzag",
          h1Suffix: " — toucher les cibles évasives",
          statScore: "Score",
          statTime: "Temps",
          statAccuracy: "Précision",
          statBestScore: "Meilleur score",
          startTitle: NAME,
          startSubtitle: "Tracking réactif • Niveaux infinis",
          getReady: "PRÊT",
          stageCaption: "Gardez le réticule sur la cible en zigzag et videz sa barre de vie. Aucun clic nécessaire.",
          rulesTitle: "Règles et points",
          rulesItems: [
            { num: "1", text: "Rester sur la cible", highlight: "10 pts / 0,25 s (+0,4 s/s)", result: "×Combo" },
            { num: "2", text: "Cible détruite", highlight: "25 pts × combo", result: "Nouvelle cible" },
            { num: "3", text: "Progression", highlight: "+1 niveau / 1400 pts", result: "Plus petite, plus rapide" },
            { num: "4", text: "Cible échappée / 1 s hors cible", highlight: "Combo remis à 0", result: "Combo à reconstruire" }
          ],
          aboutTitle: "À propos du tracking en zigzag"
        }}
      />
      <DrillGuide guide={frGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
