import AntiStrafeJitterClient from '@/app/drills/fps/anti-strafe-jitter-duel/AntiStrafeJitterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "Tracking anti-strafe ADAD : suivi réactif | SkillDrills";
const DESCRIPTION = "Tracking anti-strafe ADAD gratuit : gardez le réticule sur une cible qui change de sens au hasard. Points toutes les 0,25 s, combo par seconde tenue.";
const NAME = "Tracking anti-strafe ADAD";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tracking anti-strafe ADAD",
    "tracking anti strafe",
    "tracking réactif",
    "tracking ADAD",
    "entraînement tracking",
    "suivi de cible FPS"
  ],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/fps/anti-strafe-jitter-duel",
    languages: getAlternateLanguages('/drills/fps/anti-strafe-jitter-duel'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/fr/drills/fps/anti-strafe-jitter-duel",
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

export default function AntiStrafeJitterFrPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Drills de FPS", "item": "https://skilldrills.online/fr/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/fr/drills/fps/anti-strafe-jitter-duel" }
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
    "description": "Exercice gratuit de tracking anti-strafe ADAD dans le navigateur : gardez le réticule sur une cible qui change de sens au hasard.",
    "genre": "FPS Training / Anti-Strafe",
    "url": "https://skilldrills.online/fr/drills/fps/anti-strafe-jitter-duel",
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
    "url": "https://skilldrills.online/fr/drills/fps/anti-strafe-jitter-duel",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Tracking réactif dans le navigateur contre une cible qui strafe de gauche à droite comme un adversaire en ADAD."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/fr/drills/fps/anti-strafe-jitter-duel",
    "description": "Exercice gratuit de tracking anti-strafe ADAD dans le navigateur : gardez le réticule sur une cible qui change de sens au hasard.",
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
        "name": "Comment fonctionne cet exercice de tracking anti-strafe ADAD ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une sphère se déplace uniquement de gauche à droite, à mi-hauteur de l'écran, et change de sens et de vitesse à intervalles aléatoires. Vous ne cliquez pas : vous gardez le réticule sur la cible avec la souris. La partie démarre avec 45 secondes et s'arrête quand le chrono tombe à zéro."
        }
      },
      {
        "@type": "Question",
        "name": "Comment sont calculés les points et le combo ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tant que le réticule est sur la cible, vous gagnez toutes les 0,25 seconde 10 points multipliés par le combo et un bonus de niveau, et le chrono gagne 0,1 seconde (60 secondes maximum). Chaque seconde tenue sans interruption ajoute 1 au combo ; le multiplicateur vaut 1,1× à 3 de combo et atteint 3,0× au maximum à 50."
        }
      },
      {
        "@type": "Question",
        "name": "Que se passe-t-il si je perds la cible ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Après plus d'une seconde hors de la cible, le combo retombe à 0."
        }
      },
      {
        "@type": "Question",
        "name": "Comment la difficulté augmente-t-elle ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le niveau monte de 1 tous les 1400 points, sans plafond. À chaque niveau, la cible rétrécit, le strafe accélère et les changements de sens se rapprochent. Un combo élevé durcit aussi légèrement l'exercice."
        }
      },
      {
        "@type": "Question",
        "name": "Le tracking réactif sert-il en jeu ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'exercice simplifie la situation où un adversaire alterne A et D à courte distance. Vous répétez le recalage du réticule juste après un changement de sens, utile par exemple pour Valorant, CS2, Apex Legends ou Overwatch 2. Le transfert vers votre jeu varie d'une personne à l'autre."
        }
      },
      {
        "@type": "Question",
        "name": "Ma visée décroche à chaque changement de sens, que faire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tenez la souris sans crispation et regardez la cible plutôt que le réticule. Au lieu de flicker loin à chaque inversion, freinez brièvement puis recalez-vous sur la vitesse de la cible : le temps hors cible baisse en général."
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
    "name": "S'entraîner au tracking anti-strafe ADAD",
    "description": "Étapes pour garder le réticule sur une cible qui change de sens de gauche à droite.",
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
        "name": "Suivre la cible",
        "text": "Gardez le réticule sur la cible et recalez-vous immédiatement après chaque changement de sens."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Analyser",
        "text": "Après la partie, comparez la précision de tracking, le temps hors cible, le meilleur combo et le niveau atteint."
      }
    ]
  };

  const antiStrafeGuide = {
    heading: "Tracking anti-strafe ADAD : guide de l'exercice",
    intro: [
      "Cet exercice de tracking anti-strafe ADAD de SkillDrills vous demande de garder le réticule sur une cible qui part au hasard à gauche ou à droite. Aucun clic : seul compte le temps passé sur la cible.",
      "La cible ne bouge qu'à l'horizontale et change de sens et de vitesse à intervalles irréguliers ; certains changements partent plus vite que d'autres. Anticiper aide peu : c'est le tracking réactif juste après l'inversion qui fait la différence.",
      "Une partie commence avec 45 secondes. Tant que vous êtes sur la cible, le chrono gagne 0,4 seconde par seconde (60 secondes maximum). Les points et les niveaux n'ont pas de plafond."
    ],
    techniques: {
      title: "Conseils de tracking anti-strafe",
      items: [
        {
          name: "Une prise souple",
          desc: "Serrer la souris crispe le poignet à chaque inversion et rend le réticule saccadé.",
          tips: "Serrez juste assez pour garder doigts et poignet libres, et relâchez la main entre les longues parties."
        },
        {
          name: "Regarder la cible",
          desc: "Fixer la sphère plutôt que le réticule permet de voir plus tôt le changement de sens.",
          tips: "Si la cible devient rouge, vous êtes à côté : servez-vous du changement de couleur comme signal."
        },
        {
          name: "Éviter le sur-flick",
          desc: "Un grand flick à l'inversion vous envoie souvent de l'autre côté de la cible.",
          tips: "Enchaînez l'inversion comme un freinage puis une réaccélération, pas comme deux flicks."
        },
        {
          name: "La règle d'une seconde",
          desc: "Chaque seconde tenue ajoute +1 au combo ; plus d'une seconde hors cible l'efface.",
          tips: "Après une perte, visez un retour sur la cible en moins d'une seconde."
        }
      ]
    },
    steps: [
      "Ajuster la sensibilité souris commune sur la page des drills.",
      "Cliquer sur Démarrer pour activer le plein écran et le Pointer Lock.",
      "Garder le réticule sur la cible qui va de gauche à droite.",
      "À chaque inversion, freiner brièvement au lieu de flicker loin.",
      "Après la partie, comparer précision (%), temps hors cible, meilleur combo et niveau."
    ],
    audience: "Joueurs de Valorant, CS2, Apex Legends ou Overwatch 2 qui perdent leurs duels rapprochés face aux strafes ADAD, et tous ceux qui veulent travailler le tracking réactif gratuitement dans le navigateur.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/fr/drills/fps/anti-zigzag-movement-trainer", label: "Tracking en zigzag" },
      { href: "/fr/drills/reaction-speed/fps-tracking-trainer", label: "Entraîneur de Tracking FPS" },
      { href: "/fr/drills/fps/pro-smooth-pursuit", label: "Entraîneur de Poursuite Lisse" },
      { href: "/fr/drills/fps/flick-shot-training", label: "Entraînement au Flick Shot" },
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
      <AntiStrafeJitterClient
        copy={{
          h1Keyword: "Tracking anti-strafe ADAD",
          h1Suffix: " — suivi réactif dans le navigateur",
          statScore: "Score",
          statTime: "Temps",
          statAccuracy: "Précision",
          statBestScore: "Meilleur score",
          startTitle: NAME,
          startSubtitle: "Tracking réactif • Niveaux infinis",
          getReady: "PRÊT",
          pausedTitle: "PAUSE",
          pausedSubtitle: "Cliquez pour reprendre — le curseur sera de nouveau verrouillé.",
          stageCaption: "Gardez le réticule sur la cible qui change de sens au hasard. Aucun clic nécessaire.",
          rulesTitle: "Règles et points",
          rulesItems: [
            { num: "1", text: "Rester sur la cible", highlight: "10 pts / 0,25 s (+0,4 s/s)", result: "×Combo" },
            { num: "2", text: "Tenir 1 s d'affilée", highlight: "Combo +1", result: "Jusqu'à 3,0×" },
            { num: "3", text: "Progression", highlight: "+1 niveau / 1400 pts", result: "Plus petite, plus rapide" },
            { num: "4", text: "Plus d'1 s hors cible", highlight: "Combo remis à 0", result: "Combo à reconstruire" }
          ],
          aboutTitle: "À propos du tracking anti-strafe ADAD"
        }}
      />
      <DrillGuide guide={antiStrafeGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
