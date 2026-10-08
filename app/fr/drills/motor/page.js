import MotorDrillsClient from '@/app/drills/motor/MotorDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const motorDrills = DRILLS.filter((d) => d.category === 'motor');

export const metadata = {
  title: 'Test CPS et précision souris : exercices | SkillDrills',
  description: `${motorDrills.length} exercices gratuits dans le navigateur : test CPS, précision de la souris, visée, réaction au clavier et coordination œil-main.`,
  keywords: [
    'test de précision souris', 'entraînement de visée', 'test CPS', 'coordination œil-main',
    'vitesse de frappe', 'contrôle du curseur', 'entraîneur de visée gratuit',
    'précision de la souris', 'clics par seconde', 'exercices de motricité',
    'entraînement main sûre', 'test de suivi souris', 'visée FPS',
    'vitesse clavier', 'exercices moteurs gratuits'
  ],
  openGraph: {
    title: 'Test CPS et précision souris : exercices | SkillDrills',
    description: `${motorDrills.length} exercices gratuits dans le navigateur : test CPS, précision de la souris, visée, réaction au clavier et coordination œil-main.`,
    type: 'website',
    url: 'https://skilldrills.online/fr/drills/motor',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Test CPS et précision souris sur SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test CPS et précision souris : exercices | SkillDrills',
    description: `${motorDrills.length} exercices gratuits dans le navigateur : test CPS, précision de la souris, visée, réaction au clavier et coordination œil-main.`,
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/motor',
    languages: getAlternateLanguages('/fr/drills/motor'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Exercices de Performance", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Contrôle Moteur & Précision", "item": "https://skilldrills.online/fr/drills/motor" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20",
  "name": `Test CPS et précision souris : ${motorDrills.length} exercices moteurs`,
  "url": "https://skilldrills.online/fr/drills/motor",
  "description": `${motorDrills.length} exercices gratuits dans le navigateur : test CPS, précision de la souris, visée, réaction au clavier et coordination œil-main.`,
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": motorDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'fr', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/fr${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr-FR",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels exercices moteurs propose SkillDrills ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La catégorie moteur regroupe le test CPS, l’aim trainer en ligne, le flick shot, la séquence de visée, le glisser-déposer, le tracé à la souris, la réaction au clavier et le jeu du fil électrique. Tous sont gratuits et fonctionnent dans le navigateur."
      }
    },
    {
      "@type": "Question",
      "name": "Qu’est-ce qu’un bon score au test CPS ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’existe pas de norme officielle. Comparez vos résultats sur la même durée et avec le même matériel. Les techniques de clic rapide (jitter, butterfly) peuvent fatiguer les mains : arrêtez-vous en cas de douleur."
      }
    },
    {
      "@type": "Question",
      "name": "Que dit la loi de Fitts sur la précision et la vitesse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La loi de Fitts (1954) relie le temps de mouvement vers une cible à la distance et à la taille de la cible : plus la cible est petite ou éloignée, plus le mouvement est long. Les exercices de visée et de glisser-déposer illustrent ce compromis."
      }
    },
    {
      "@type": "Question",
      "name": "Comment travailler la stabilité du curseur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les exercices de tracé et le jeu du fil électrique demandent de garder le curseur dans un couloir étroit. Ils font travailler le contrôle fin de la souris ; ils ne suppriment pas les tremblements et ne remplacent pas un avis médical."
      }
    },
    {
      "@type": "Question",
      "name": "Le test du clavier est-il un testeur de touches ou un test de frappe ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ni l’un ni l’autre. C’est un jeu de réaction : une touche s’affiche et vous l’appuyez le plus vite possible. Il ne détecte pas les touches défectueuses (ghosting, chattering) et ne mesure pas les mots par minute."
      }
    },
    {
      "@type": "Question",
      "name": "Mes résultats dépendent-ils de mon matériel ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Écran, souris, navigateur et système ajoutent leur propre délai. Un écran affiche une image toutes les 16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz (Woods et al., 2015) : comparez vos séances avec le même matériel."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle sensibilité de souris utiliser pour ces exercices ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’y a pas de réglage universel. Une sensibilité basse stabilise la trajectoire mais demande de grands gestes, une sensibilité haute accélère mais complique l’arrêt. Gardez celle de votre jeu et comparez vos séances avec le même réglage."
      }
    },
    {
      "@type": "Question",
      "name": "Ces exercices m’aideront-ils dans les jeux de tir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ils permettent de s’exercer à viser, à cliquer et à contrôler le curseur, et de suivre vos résultats. Aucune étude ne garantit un transfert vers un jeu précis : vérifiez l’effet dans le vôtre."
      }
    },
    {
      "@type": "Question",
      "name": "Ces exercices fonctionnent-ils sur téléphone ou tablette ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les exercices de visée et de précision demandent une souris et un ordinateur. Le test CPS peut se jouer au toucher, mais les résultats ne sont pas comparables à ceux d’une souris."
      }
    },
    {
      "@type": "Question",
      "name": "Mes scores sont-ils enregistrés sur un serveur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Vos records restent dans le LocalStorage de votre navigateur et aucun compte n’est nécessaire."
      }
    }
  ]
};

export default function FrenchMotorHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MotorDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}

