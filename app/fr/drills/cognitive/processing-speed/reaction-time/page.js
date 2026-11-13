import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Réaction de choix avec règle changeante | SkillDrills",
  description: "Réaction de choix avec règle changeante : cliquez la cible rouge ou bleue indiquée par la consigne. Exercice gratuit de vitesse de décision, non clinique.",
  keywords: ["réaction de choix", "temps de réaction de choix", "changement de règle", "vitesse de décision", "loi de Hick"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Réaction de choix avec règle changeante | SkillDrills",
    description: "Réaction de choix avec règle changeante : cliquez la cible rouge ou bleue indiquée par la consigne. Exercice gratuit de vitesse de décision, non clinique.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Réaction de choix avec règle changeante | SkillDrills",
    description: "Réaction de choix avec règle changeante : cliquez la cible rouge ou bleue indiquée par la consigne. Exercice gratuit de vitesse de décision, non clinique.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/reaction-time'),
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
      "name": "Réaction de choix",
      "item": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Réaction de choix avec règle changeante",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Exercice gratuit de réaction de choix dans le navigateur : cliquez la cible de la couleur indiquée par une règle qui change. Résultat en points, exactitude et niveau, sans mesure en millisecondes.",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "fr-FR",
    "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Réaction de choix avec règle changeante",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Nécessite un navigateur moderne avec support JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time",
  "inLanguage": "fr-FR",
    "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Réaction de choix – jeu de règle de couleur",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time",
  "description": "Exercice gratuit de réaction de choix dans le navigateur : cliquez la cible de la couleur indiquée par une règle qui change. Résultat en points, exactitude et niveau, sans mesure en millisecondes.",
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
      "name": "Qu'est-ce que la réaction de choix ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est le fait de repérer, parmi plusieurs stimuli, celui qui correspond à une consigne puis de choisir la bonne réponse. Ici, une cible rouge et une bleue apparaissent et vous cliquez la couleur demandée par la règle active."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence entre temps de réaction simple et de choix ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une réaction simple répond à un seul stimulus attendu. Une réaction de choix ajoute la discrimination et la sélection de la réponse, elle est donc généralement plus lente (Donders). Cet exercice ajoute en plus des changements de règle."
      }
    },
    {
      "@type": "Question",
      "name": "Que décrit la loi de Hick (Hick, 1952) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le temps de réaction augmente de façon logarithmique avec le nombre de choix possibles. Comme vous devez vérifier la règle avant chaque clic, l’exercice sollicite justement cette étape de décision."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne le changement de règle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le bandeau indique la couleur à cliquer (rouge ou bleu). À partir du niveau 2, la règle s’inverse après une série de bonnes réponses ; plus le niveau monte, moins il faut de réussites avant l’inversion (2 au minimum)."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne le chrono ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La partie commence avec 45 secondes. Chaque bonne réponse ajoute 2 secondes, jusqu’à 60. Un clic sur la mauvaise couleur, ou une paire de cibles expirée (si Target Timeouts est activé), retire 1 seconde et remet le combo à zéro. La partie s’arrête à 0."
      }
    },
    {
      "@type": "Question",
      "name": "Comment sont calculés les points et la note ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque bonne réponse rapporte 100 points multipliés par le multiplicateur de combo et celui du niveau. Le score final est comparé à une référence fixe de SkillDrills et affiché en note de F à S+."
      }
    },
    {
      "@type": "Question",
      "name": "L’exercice mesure-t-il mon temps de réaction en millisecondes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Il affiche les points, l’exactitude (bonnes réponses sur l’ensemble des essais), le niveau maximal et le meilleur combo. Les temps de réponse individuels ne sont pas enregistrés en millisecondes."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on progresser avec l’entraînement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Votre score à cet exercice augmente généralement avec la pratique. Relisez la règle avant chaque clic et gardez une bonne exactitude pour faire monter le combo. Cela ne garantit pas des réactions plus rapides dans d’autres situations."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce un test médical ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. C’est un exercice d’entraînement dans le navigateur, ni diagnostic ni dépistage. Les résultats dépendent aussi de l’appareil et de la forme du jour ; comparez vos propres scores sur le même appareil."
      }
    },
    {
      "@type": "Question",
      "name": "L’exercice est-il gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, il est gratuit, sans inscription, et fonctionne directement dans le navigateur."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment faire l’exercice de réaction de choix",
  "description": "Exercice gratuit de réaction de choix dans le navigateur : cliquez la cible de la couleur indiquée par une règle qui change. Résultat en points, exactitude et niveau, sans mesure en millisecondes.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Surveillez la Règle Active en Haut",
      "text": "Observez le bandeau supérieur indiquant la couleur de la cible valide (ex: CLIQUEZ SUR ROUGE ou CLIQUEZ SUR BLEU).",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Distinguez les Cibles Visuelles",
      "text": "Une cible rouge et une cible bleue apparaissent ensemble : repérez celle qui correspond à la consigne active.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Exécutez le Clic de Décision",
      "text": "Cliquez la bonne cible avant que la paire ne change. Une erreur ou un délai dépassé coûte 1 seconde et le combo.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Adaptez-vous aux Inversions de Règle",
      "text": "Lorsque la consigne change, inhibez immédiatement le réflexe précédent et ciblez la nouvelle couleur désignée.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('donders1969', 'hick1952', 'hyman1953', 'der2006', 'woods2015'),
  intro: {
    title: "Réaction de choix avec règle changeante",
    paragraphs: [
      "La réaction de choix avec règle changeante est un exercice gratuit dans le navigateur : une cible rouge et une cible bleue apparaissent ensemble et vous cliquez celle dont la couleur est indiquée par le bandeau. À partir du niveau 2, la règle s’inverse, il faut donc la relire avant chaque clic.",
      "Contrairement à une réaction simple à un seul stimulus, la réaction de choix ajoute la discrimination du stimulus et la sélection de la réponse ; elle est donc en général plus lente (Donders).",
      "La loi de Hick-Hyman (Hick, 1952 ; Hyman, 1953) décrit l’augmentation logarithmique du temps de décision avec le nombre de choix. L’exercice affiche points, exactitude, niveau maximal et meilleur combo ; il ne mesure pas de millisecondes et n’est pas un test clinique.",
    ],
  },
  benchmarks: {
    title: 'Paliers d’entraînement SkillDrills (exactitude)',
    headers: ['Palier', 'Profil', 'Exactitude', 'Lecture'],
    rows: [
      { tier: 'Palier 1', rank: 'Très précis', accuracy: '98%+', marker: 'Très peu d’erreurs, même après un changement de règle' },
      { tier: 'Palier 2', rank: 'Avancé', accuracy: '94-97%', marker: 'Régulier' },
      { tier: 'Palier 3', rank: 'Entraîné', accuracy: '88-93%', marker: 'Bon équilibre vitesse / précision' },
      { tier: 'Palier 4', rank: 'Intermédiaire', accuracy: '78-87%', marker: 'Erreurs surtout après les changements de règle' },
      { tier: 'Palier 5', rank: 'Débutant', accuracy: '< 78%', marker: 'Point de départ' },
    ],
    note: 'Paliers d’entraînement définis par SkillDrills, sans statistiques d’utilisateurs ni valeur clinique.',
  },
  protocols: {
    title: 'Conseils pour décider plus vite',
    description: 'Quatre habitudes simples pour rester précis quand la règle change.',
    items: [
      { title: "Surveillez la Règle Active en Haut", description: "Observez le bandeau supérieur indiquant la couleur de la cible valide (ex: CLIQUEZ SUR ROUGE ou CLIQUEZ SUR BLEU)." },
      { title: "Distinguez les Cibles Visuelles", description: "Une cible rouge et une cible bleue apparaissent ensemble : repérez celle qui correspond à la consigne active." },
      { title: "Exécutez le Clic de Décision", description: "Cliquez la bonne cible avant que la paire ne change. Une erreur ou un délai dépassé coûte 1 seconde et le combo." },
      { title: "Adaptez-vous aux Inversions de Règle", description: "Lorsque la consigne change, inhibez immédiatement le réflexe précédent et ciblez la nouvelle couleur désignée." },
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
      <EliteNeuroSwitchClient
        copy={{
          title: "Réaction de choix avec règle changeante",
          subtitle: "Choisissez la cible selon la couleur active et entraînez votre vitesse de décision",
          startTitle: "Réaction de choix avec règle changeante",
          startSubtitle: "Réaction de choix • Vitesse de décision",
          stageCaption: "Cliquez la cible qui correspond à la règle active. Les couleurs et la règle changent vite.",
          rulesTitle: "Instructions du test et score",
          aboutTitle: "Qu’est-ce que la réaction de choix ?",
          faqTitle: "Réaction de choix : questions fréquentes",
          labels: { score: "Score", time: "Temps", level: "Niveau", bestScore: "Meilleur score", timeLeft: "Temps restant", rule: "RÈGLE", ready: "PRÉPAREZ-VOUS", accuracy: "Précision", hits: "Réussites", peakLevel: "Niveau maximal", maxCombo: "Combo maximal" },
          ruleBanner: { RED: "CIBLE ROUGE", BLUE: "CIBLE BLEUE" },
          aboutLead: "Le temps de réaction de choix est l’intervalle nécessaire pour sélectionner la bonne réponse parmi plusieurs stimuli. Quand les choix augmentent, le temps de décision augmente généralement selon la loi de Hick.",
          aboutText: "Ce test combine discrimination visuelle, lecture de la règle et réponse motrice. Le résultat comprend aussi le délai de l’écran, du périphérique et du navigateur. Comme la règle change, chaque cible demande une nouvelle décision.",
          aboutCards: [
            { title: "À qui s’adresse-t-il ?", desc: "Aux joueurs, étudiants et personnes qui souhaitent exercer des décisions visuelles rapides et précises." },
            { title: "Capacités exercées", desc: "Réaction de choix, discrimination visuelle, exécution motrice et attention lors des changements de règle." },
            { title: "Agilité de bascule", desc: "La couleur active change pour solliciter la mise à jour rapide de votre réponse." }
          ],
          rulesItems: [
            { num: "1", text: "Règle active", highlight: "ROUGE / BLEU", result: "Suivez la bannière" },
            { num: "2", text: "Bonne cible", highlight: "+100 pts", result: "Combo × niveau, +2 s (max. 60 s)" },
            { num: "3", text: "Changement de règle", highlight: "Dès le niveau 2", result: "Plus fréquent quand le niveau monte" },
            { num: "4", text: "Erreur / délai", highlight: "Combo réinitialisé", result: "−1 s" }
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
