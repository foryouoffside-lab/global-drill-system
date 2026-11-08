import ChromaSyncClient from '@/app/drills/visual/reaction-speed/go/no-go/ChromaSyncClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test Go/No-Go en ligne gratuit | Inhibition de la réponse | SkillDrills",
  description: "Test Go/No-Go gratuit dans le navigateur : cliquez vite sur le vert, ne touchez à rien sur le rouge. Entraîne l’inhibition de la réponse et compte les erreurs. Pas un diagnostic.",
  keywords: [
    "test go no go",
    "test Go/No-Go en ligne",
    "tâche Go/No-Go",
    "inhibition de la réponse",
    "contrôle inhibiteur",
    "jeu d’impulsivité",
    "erreurs de commission omission"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test Go/No-Go en ligne gratuit | Inhibition de la réponse | SkillDrills",
    description: "Cliquez sur le vert, retenez-vous sur le rouge. Test Go/No-Go gratuit dans le navigateur pour travailler l’inhibition de la réponse. Pas un diagnostic.",
    type: 'article',
    url: 'https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test Go/No-Go en ligne gratuit | Inhibition de la réponse | SkillDrills",
    description: "Vert : cliquez. Rouge : ne touchez à rien. Test Go/No-Go gratuit dans le navigateur."
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/go/no-go'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Catalogue des Drills", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Entraînement Visuel", "item": "https://skilldrills.online/fr/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Vitesse de Réaction", "item": "https://skilldrills.online/fr/drills/visual/reaction-speed" },
    { "@type": "ListItem", "position": 5, "name": "Test Go/No-Go", "item": "https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Inhibitory_control"],
  "name": "Test Go/No-Go (inhibition de la réponse)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "description": "Version navigateur de la tâche Go/No-Go : cliquer sur le signal vert Go, ne rien faire sur le signal rouge No-Go. Compte les erreurs de commission, les omissions et le temps de réaction. Outil d’entraînement, pas un examen médical.",
  "featureList": [
    "Temps de réaction mesuré en millisecondes avec performance.now()",
    "Durée d’affichage qui passe d’environ 600 ms à 100 ms minimum avec le niveau",
    "Erreurs de commission et omissions comptées séparément",
    "Résultats conservés localement dans le navigateur (LocalStorage)"
  ],
  "dateModified": "2026-11-08"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test Go/No-Go en ligne gratuit | Inhibition de la réponse | SkillDrills",
  "alternateName": "Go/No-Go Pro",
  "url": "https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go",
  "dateModified": "2026-11-08",
  "description": "Test Go/No-Go gratuit en ligne : cliquer sur le vert, se retenir sur le rouge.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navigateur récent compatible HTML5 Canvas.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Inhibition de la réponse, moins d’erreurs de commission, vérifier la couleur avant de cliquer"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test Go/No-Go (entraînement à l’inhibition)",
  "url": "https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go",
  "description": "Jeu de navigateur : cliquer sur le vert, s’arrêter sur le rouge.",
  "genre": ["Action", "Brain Game", "Reaction Speed"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment faire le test Go/No-Go",
  "dateModified": "2026-11-08",
  "description": "La version navigateur de la tâche Go/No-Go en quatre étapes.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Regarder le centre de l’écran",
      "text": "Fixez le centre, où les cercles apparaissent, et gardez le doigt et la souris détendus.",
      "url": "https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Signal vert Go : cliquer tout de suite",
      "text": "Quand un cercle vert apparaît, cliquez ou touchez l’écran avant qu’il disparaisse (+150 points × combo). Le clavier n’est pas pris en charge.",
      "url": "https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Signal rouge No-Go : ne rien faire",
      "text": "Quand un cercle rouge apparaît, attendez qu’il disparaisse sans cliquer (+100 points). Un clic sans cercle ou des clics répétés comptent aussi comme erreur.",
      "url": "https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Vérifier la couleur même quand ça accélère",
      "text": "Avec le niveau et le combo, la durée d’affichage descend jusqu’à 100 ms. Gardez l’habitude de reconnaître la couleur avant de cliquer.",
      "url": "https://skilldrills.online/fr/drills/visual/reaction-speed/go/no-go#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu’est-ce que le test Go/No-Go ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est une tâche où l’on répond vite à un signal fréquent (Go) et où l’on retient sa réponse face à un signal rare (No-Go). La psychologie l’utilise pour étudier l’inhibition de la réponse. Cette page en propose une version d’entraînement dans le navigateur : on clique sur le cercle vert et on ne touche à rien sur le rouge."
      }
    },
    {
      "@type": "Question",
      "name": "Comment se déroule le test Go/No-Go ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Après « Démarrer l’entraînement », la partie commence avec 45 secondes. Un cercle vert au centre : cliquez ou touchez. Un cercle rouge : attendez qu’il disparaisse. Chaque bonne réponse ajoute 2 secondes (60 au maximum). Environ 70 % des signaux sont verts et 30 % rouges. Souris ou écran tactile uniquement, pas de clavier."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre erreur de commission et omission ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une erreur de commission, c’est cliquer sur le rouge No-Go ou quand aucun cercle n’est affiché. Une omission, c’est laisser disparaître un cercle vert Go sans cliquer. La première renseigne sur la capacité à s’arrêter, la seconde plutôt sur les baisses d’attention ou la lenteur."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi je clique sur le rouge alors que je le vois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comme le vert revient beaucoup plus souvent, cliquer devient un automatisme. Selon le modèle de Logan et Cowan (1984), un processus de départ et un processus d’arrêt font la course ; la réponse n’est bloquée que si l’arrêt arrive en premier. Plus l’affichage est court, moins il reste de temps pour s’arrêter."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce utile pour les FPS comme Valorant ou CS2 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vérifier la couleur avant de cliquer ressemble au moment où l’on distingue un allié d’un ennemi avant de tirer. Mais la tâche ne contient ni visée, ni déplacement, ni son, ni lecture de la carte. Aucun progrès en jeu n’est promis."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on dépister un TDAH ou l’impulsivité avec ce test ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. C’est un jeu d’entraînement dans le navigateur, pas un examen médical ni un diagnostic. Le résultat dépend aussi de l’écran, de la souris, de la fatigue et de la concentration. En cas d’inquiétude sur l’attention ou l’impulsivité, consultez un professionnel de santé."
      }
    },
    {
      "@type": "Question",
      "name": "L’inhibition de la réponse s’améliore-t-elle avec l’entraînement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On progresse en général sur la tâche que l’on répète. Le transfert à la vie quotidienne ou à d’autres jeux n’est pas établi de façon constante par la recherche et varie selon les personnes. Comparez vos scores dans les mêmes conditions."
      }
    },
    {
      "@type": "Question",
      "name": "La fréquence de l’écran change-t-elle le résultat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Un écran 60 Hz n’affiche une nouvelle image que toutes les 16,7 ms environ, un écran 240 Hz toutes les 4,2 ms, et les périphériques ajoutent leur propre délai (Woods et al., 2015). Comparez vos propres scores sur le même appareil et le même navigateur."
      }
    },
    {
      "@type": "Question",
      "name": "Mes résultats sont-ils envoyés quelque part ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les scores et l’historique sont enregistrés dans votre navigateur (LocalStorage). Effacer les données du navigateur peut supprimer les anciens résultats."
      }
    }
  ]
};

const goNoGoGuide = {
  heading: "S’entraîner à l’inhibition de la réponse avec le test Go/No-Go",
  intro: [
    "Le test Go/No-Go consiste à répondre aux signaux fréquents et à se retenir face aux signaux rares. Il ne s’agit pas seulement de cliquer vite, mais de savoir ne pas cliquer au bon moment, ce qui le distingue d’un simple test de réaction.",
    "Dans cette version navigateur, un cercle vert (Go) ou rouge (No-Go) apparaît au centre. Vert : cliquez ou touchez. Rouge : attendez. Un clic sans cercle ou des clics en rafale comptent aussi comme erreur. La durée d’affichage passe d’environ 600 ms à 100 ms minimum au fil des niveaux.",
    "L’idée des tâches de choix remonte aux travaux de Donders (1868) sur le temps de réaction ; la course entre départ et arrêt a été modélisée par Logan et Cowan (1984). Le score obtenu ici reste un résultat d’entraînement qui inclut l’écran, la souris et le navigateur, pas un examen médical.",
    "La mesure utilise performance.now() dans le navigateur. Le rafraîchissement de l’écran et le délai des périphériques s’ajoutent au résultat (Woods et al., 2015) : comparez vos scores sur le même appareil. Les données restent dans le navigateur de cet appareil."
  ],
  benchmarks: {
    title: "Repères d’entraînement sur le taux d’erreurs (échelle propre à ce drill)",
    headers: ["Palier", "Taux d’erreurs", "Score et combo", "Lecture"],
    rows: [
      ["Avancé", "moins de 2,0 %", "16 000 pts et plus / combo 30+", "Vérifie la couleur même quand l’affichage est très court"],
      ["Solide", "2,0 – 4,9 %", "11 000 – 15 999 pts / combo 20+", "Peu d’erreurs, on peut accélérer peu à peu"],
      ["Moyen", "5,0 – 9,9 %", "6 500 – 10 999 pts / combo 12+", "Clique parfois sur le rouge quand le rythme monte"],
      ["En progrès", "10,0 – 18,0 %", "3 000 – 6 499 pts / combo 6+", "Clique souvent avant de voir la couleur ; viser la précision avant la vitesse"],
      ["Débutant", "plus de 18,0 %", "moins de 3 000 pts / combo < 6", "D’abord s’arrêter sur le rouge et ne pas cliquer en rafale"]
    ],
    note: "Ce tableau est une échelle d’entraînement de SkillDrills, pas une norme scientifique ni une moyenne par âge. Fatigue, concentration et écran font varier les résultats."
  },
  techniques: {
    title: "Conseils pour faire moins d’erreurs au test Go/No-Go",
    items: [
      {
        name: "Voir la couleur, puis cliquer",
        desc: "Le signal, c’est la couleur, pas l’apparition du cercle. Cliquer dès le premier flash fait cliquer aussi sur le rouge.",
        tips: "Au début, acceptez d’être un peu plus lent et ne cliquez qu’une fois le vert reconnu. Accélérez quand les erreurs baissent."
      },
      {
        name: "Garder le doigt détendu",
        desc: "Attendre avec le bouton à moitié enfoncé empêche de s’arrêter à temps.",
        tips: "Posez le doigt légèrement sur la souris ou l’écran, sans appuyer."
      },
      {
        name: "Ne pas cliquer en rythme",
        desc: "Une série de verts installe un rythme de clic, et les erreurs augmentent quand le rouge arrive (Robertson et al., 1997).",
        tips: "Traitez chaque signal comme nouveau. Ne cliquez pas sans cercle ; en cas de clics répétés, le cercle n’apparaît plus."
      },
      {
        name: "Garder les mêmes conditions",
        desc: "Quand l’affichage est très court, le rafraîchissement de l’écran et le délai de la souris se voient dans le score (Woods et al., 2015).",
        tips: "Même écran, même navigateur, même souris, même moment de la journée, puis comparez taux d’erreurs et moyenne."
      }
    ]
  },
  steps: [
    "Cliquez sur « Démarrer l’entraînement » : la partie commence avec 45 secondes.",
    "Regardez le centre de l’écran.",
    "Cercle vert Go : cliquez ou touchez avant qu’il disparaisse.",
    "Cercle rouge No-Go : attendez qu’il disparaisse sans cliquer.",
    "À la fin, regardez le taux d’erreurs, la réaction moyenne et le niveau atteint."
  ],
  audience: "Pour tester la tâche Go/No-Go en ligne et travailler, en plus de la vitesse, la capacité à ne pas cliquer : joueurs, sportifs et curieux. Ne convient pas à une évaluation médicale.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('donders1868', 'logan1984', 'robertson1997', 'woods2015'),
  related: [
    { href: "/fr/drills/visual/reaction-speed/light-reaction", label: "Test de réaction" },
    { href: "/fr/drills/reaction-speed/reflex-training-drill", label: "Test de réflexe" },
    { href: "/fr/drills/visual/depth-perception/distance-judgment", label: "Jugement de Distance et Perception de Profondeur" },
    { href: "/fr/drills/visual/tracking-accuracy/moving-target", label: "Interception de Cible Mobile" },
    { href: "/fr/drills/visual/tracking-accuracy/multiple-targets", label: "Poursuite d'Objets Multiples" },
    { href: "/fr/drills/visual/visual-recognition/entropic-grid", label: "Recherche sur Grille Entropique" }
  ]
};

export default function ChromaSyncPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <ChromaSyncClient copy={{ title: "Test Go/No-Go (inhibition de la réponse)", subtitle: "Cercle vert : cliquez. Cercle rouge : ne touchez à rien. Gratuit dans le navigateur." }} />
      <DrillGuide guide={goNoGoGuide} />
      <RelatedDrills />
    </>
  );
}
