import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Temps de réaction de choix : test en ligne | SkillDrills",
  description: "Test gratuit de temps de réaction de choix : sélectionnez la cible selon une règle qui change. Entraînez la décision visuelle ; non clinique.",
  keywords: [
    "test temps de réaction",
    "test de temps de réaction en ligne",
    "test de réaction",
    "temps de réaction",
    "temps de réaction de choix",
    "vitesse de décision",
    "réaction visuelle",
    "loi de Hick"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Temps de réaction de choix : test en ligne | SkillDrills",
    description: "Test gratuit de temps de réaction de choix : sélectionnez la cible selon une règle qui change. Entraînez la décision visuelle ; non clinique.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Temps de réaction de choix : test en ligne | SkillDrills",
    description: "Test gratuit de temps de réaction de choix : sélectionnez la cible selon une règle qui change. Entraînez la décision visuelle ; non clinique.",
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
      "name": "Temps de Réaction de Choix",
      "item": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Test de Temps de Réaction de Choix – CRT",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Test de temps de réaction de choix gratuit dans le navigateur : cliquez la bonne cible selon une règle qui change et suivez votre vitesse de décision.",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time",
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
  "name": "Test de Temps de Réaction de Choix",
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
    "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de Temps de Réaction de Choix – Jeu Cérébral",
  "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time",
  "description": "Test de temps de réaction de choix gratuit dans le navigateur : cliquez la bonne cible selon une règle qui change et suivez votre vitesse de décision.",
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
      "name": "Qu'est-ce que le temps de réaction de choix (CRT) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le temps de réaction de choix est le délai nécessaire pour identifier un stimulus spécifique parmi plusieurs options et exécuter l'action motrice correspondante."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence entre temps simple et de choix ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le temps simple (SRT, ~200ms) réagit à un signal unique prévu. Le temps de choix (CRT, ~280-350ms) incorpore une délibération corticale et une discrimination visuelle (Donders, 1868)."
      }
    },
    {
      "@type": "Question",
      "name": "Que décrit la loi de Hick (Hick, 1952) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La loi de Hick stipule que le temps de réaction augmente de manière logarithmique en fonction du nombre d'alternatives disponibles : RT = a + b * log2(n)."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les valeurs moyennes observées chez l'être humain ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En laboratoire, le temps de réaction de choix d’un adulte se situe souvent autour de 280 à 350 ms, mais il dépend de la tâche, de l’âge et du matériel (Der & Deary, 2006). Les repères de ce test servent à suivre votre progression, pas à vous classer."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi les règles de couleur changent-elles en cours de session ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le changement de règle vous oblige à abandonner la consigne précédente et à appliquer la nouvelle : c’est ce qui rend chaque cible plus exigeante qu’un simple clic de réaction."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on améliorer sa vitesse de décision avec l'entraînement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une pratique répétée de la même tâche améliore généralement les performances sur cette tâche. Rien ne prouve que le gain se transfère à d’autres situations : suivez votre progression d’une séance à l’autre sur le même matériel."
      }
    },
    {
      "@type": "Question",
      "name": "Comment l'âge influence-t-il le temps de réaction ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les temps de réaction tendent à s’allonger lentement avec l’âge (Der & Deary, 2006). Les écarts entre personnes sont importants : comparez-vous surtout à vos propres séances."
      }
    },
    {
      "@type": "Question",
      "name": "Le matériel informatique influe-t-il sur la mesure ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. L’écran, la souris et le navigateur ajoutent leur propre délai (Woods et al., 2015). Un écran à fréquence élevée réduit l’intervalle entre deux images : comparez vos séances sur le même matériel."
      }
    },
    {
      "@type": "Question",
      "name": "Quel protocole d'entraînement est recommandé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’existe pas de protocole prouvé. Quelques séances courtes, régulières et reposées, sur le même appareil, permettent de suivre votre évolution sans fatigue."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test de temps de réaction est-il entièrement gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, SkillDrills propose cette évaluation gratuitement dans votre navigateur, sans téléchargement ni inscription."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment Réaliser le Test de Temps de Réaction de Choix",
  "description": "Test de temps de réaction de choix gratuit dans le navigateur : cliquez la bonne cible selon une règle qui change et suivez votre vitesse de décision.",
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
      "text": "Dès l'apparition des cibles à l'écran, déterminez instantanément quel élément correspond à la consigne active.",
      "url": "https://skilldrills.online/fr/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Exécutez le Clic de Décision",
      "text": "Appuyez sur la cible correcte le plus vite possible avant l'expiration du décompte temporel.",
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
    title: "Neurosciences du Temps de Réaction de Choix & Rapidité de Décision",
    paragraphs: [
      "Le temps de réaction de choix est le délai pour repérer la bonne cible parmi plusieurs et cliquer dessus. Ici, une règle de couleur change en cours de séance et vous mesurez votre vitesse de décision et votre exactitude. Avec un temps simple autour de 200 ms, un choix prend souvent 280 à 350 ms (Donders, 1868).",
      "Le temps de réaction de choix (CRT - Choice Reaction Time) est une métrique fondamentale en neurosciences cognitives pour évaluer l'efficacité de traitement du système nerveux central face à des alternatives multiples.",
      "Contrairement au temps de réaction simple (SRT, ~200ms) où la réponse est stéréotypée, la tâche de choix ajoute des étapes de discrimination sensorielle et de sélection d'action, portant le délai physiologique à 280–350ms (Donders, 1868).",
      "La loi de Hick-Hyman (Hick, 1952; Hyman, 1953) démontre que la latence décisionnelle augmente selon une fonction logarithmique du nombre de choix. Cet exercice introduit des renversements de règles pour solliciter le contrôle inhibiteur frontal.",
    ],
  },
  benchmarks: {
    title: 'Repères de performance au temps de réaction de choix',
    headers: ['Palier', 'Profil', 'Latence de réaction', 'Exactitude', 'Lecture'],
    rows: [
      { tier: 'Palier 1', rank: 'Très rapide', stat: '< 210 ms', level: 'Palier 1', accuracy: '98%+', marker: 'Très rapide et très précis' },
      { tier: 'Palier 2', rank: 'Avancé', stat: '210 – 249 ms', level: 'Palier 2', accuracy: '94-97%', marker: 'Rapide et régulier' },
      { tier: 'Palier 3', rank: 'Entraîné', stat: '250 – 289 ms', level: 'Palier 3', accuracy: '88-93%', marker: 'Bon niveau d’entraînement' },
      { tier: 'Palier 4', rank: 'Intermédiaire', stat: '290 – 349 ms', level: 'Palier 4', accuracy: '78-87%', marker: 'Plage courante en laboratoire' },
      { tier: 'Palier 5', rank: 'Débutant', stat: '≥ 350 ms', level: 'Palier 5', accuracy: '< 78%', marker: 'Point de départ' },
    ],
  },
  protocols: {
    title: 'Conseils pour décider plus vite',
    description: 'Quatre habitudes simples pour rester précis quand la règle change.',
    items: [
      { title: "Surveillez la Règle Active en Haut", description: "Observez le bandeau supérieur indiquant la couleur de la cible valide (ex: CLIQUEZ SUR ROUGE ou CLIQUEZ SUR BLEU)." },
      { title: "Distinguez les Cibles Visuelles", description: "Dès l'apparition des cibles à l'écran, déterminez instantanément quel élément correspond à la consigne active." },
      { title: "Exécutez le Clic de Décision", description: "Appuyez sur la cible correcte le plus vite possible avant l'expiration du décompte temporel." },
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
          title: "Temps de réaction de choix",
          subtitle: "Choisissez la cible selon la couleur active et entraînez votre vitesse de décision",
          startTitle: "Temps de réaction de choix",
          startSubtitle: "Réaction de choix • Vitesse de décision",
          stageCaption: "Cliquez la cible qui correspond à la règle active. Les couleurs et la règle changent vite.",
          rulesTitle: "Instructions du test et score",
          aboutTitle: "Que mesure le test de réaction ?",
          faqTitle: "Test de réaction de choix : vos questions",
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
            { num: "2", text: "Bonne cible", highlight: "+100 pts", result: "Bonus de combo et niveau" },
            { num: "3", text: "Changement de règle", highlight: "Automatique", result: "Accélère avec le niveau" },
            { num: "4", text: "Erreur / délai", highlight: "Combo réinitialisé", result: "−0,8 s avec pénalité" }
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
