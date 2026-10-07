import ReactionTimeTestWrapper from '@/app/drills/reaction-speed/reaction-time-test/ReactionTimeTestWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — France & Francophonie (FR / FR-FR / FR-CA)
// LIVE RESEARCH (2026-09-20): Bing returned 0 exact / 18 broad for
// "temps de réaction" and 0 for the longer tested variants. Google Suggest
// surfaces test en ligne, souris, clavier, humain, and rapidité de réaction.
// French SERPs use test de temps de réaction, test de réaction, and réflexes;
// no French volume or #1 ranking is claimed.
// ============================================================

export const metadata = {
  title: "Test de temps de réaction en ligne | SkillDrills",
  description: "Test de temps de réaction gratuit : mesurez vos réflexes visuels en millisecondes, comparez la moyenne de plusieurs essais et suivez votre régularité.",
  keywords: [
    "test de temps de réaction",
    "test de réaction en ligne",
    "temps de réaction",
    "test de temps de réaction en ligne",
    "temps de réaction souris",
    "test de réaction clavier",
    "test de rapidité de réaction",
    "temps de réponse",
    "réflexes visuels"
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test',
    languages: getAlternateLanguages('/drills/reaction-speed/reaction-time-test'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de temps de réaction en ligne | SkillDrills",
    description: "Mesurez vos réflexes visuels en millisecondes, répétez plusieurs essais et comparez votre moyenne et votre régularité.",
    url: 'https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test',
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de temps de réaction en ligne | SkillDrills",
    description: "Mesurez votre vitesse de réaction visuelle en millisecondes en ligne gratuitement, avec des repères clairs sur la latence de l'appareil.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills Accueil",
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
      "name": "Vitesse de Réaction",
      "item": "https://skilldrills.online/fr/drills/reaction-speed"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Test de Temps de Réaction",
      "item": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Test de Temps de Réaction & Réflexes en Ligne",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Outil chronométrique haute précision pour mesurer le temps de réaction visuel en millisecondes (ms), évaluer les latences neuromusculaires et comparer ses performances aux benchmarks esports.",
  "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online/fr"
  },
  "inLanguage": "fr",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Temps de Réaction & Réflexes en Ligne | SkillDrills",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires HTML5 Canvas and JavaScript enabled browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test",
  "inLanguage": "fr",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de Temps de Réaction Visuel",
  "url": "https://skilldrills.online/fr/drills/reaction-speed/reaction-time-test",
  "genre": ["Reflex Game", "Chronometry Trainer", "Esports Precision"],
  "playMode": "SinglePlayer",
  "description": "Mesurez vos réflexes visuels purs en millisecondes en réagissant instantanément aux stimuli graphiques sans délai réseau."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le temps de réaction moyen d'un être humain face à un stimulus visuel ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le temps de réaction visuel moyen chez un adulte sain se situe entre 200 et 250 millisecondes (ms) (Kosinski, 2008). Dans ce test, un résultat sous 190 ms est très rapide ; l'écran, la souris et l'état de fatigue modifient le score mesuré, donc comparez plutôt vos moyennes sur le même appareil."
      }
    },
    {
      "@type": "Question",
      "name": "Comment ce test mesure-t-il les millisecondes avec une telle exactitude ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le test s'appuie sur l'API performance.now() du navigateur, dont la résolution est d'environ 1 ms. Aucun aller-retour serveur n'interfère : le chronométrage se fait localement dans votre navigateur. La latence de l'écran et de la souris s'ajoute toutefois au résultat (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Est-il scientifiquement possible d'améliorer son temps de réaction par l'entraînement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Des recherches en neurosciences cognitives (Dye, Green, & Bavelier, 2009) ont démontré qu'une pratique régulière de drills sensorimoteurs optimise le traitement visuel fovéal et réduit le délai de déclenchement moteur de 15 à 30 ms, tout en réduisant considérablement la variabilité inter-essais."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi les réflexes auditifs sont-ils systématiquement plus rapides que les réflexes visuels ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le signal auditif met seulement 8 à 10 ms pour transiter des mécanorécepteurs de la cochlée jusqu'au tronc cérébral et au cortex auditif. À l'inverse, la phototransduction rétinienne implique des réactions chimiques complexes nécessitant 20 à 40 ms. De ce fait, le temps de réaction auditif (140-160 ms) devance toujours le temps visuel (Shelton & Kumar, 2010)."
      }
    },
    {
      "@type": "Question",
      "name": "Quel impact le taux de rafraîchissement de l'écran (Hz) a-t-il sur le résultat mesuré ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un écran 60 Hz n'actualise l'image que toutes les 16,6 ms, ajoutant une latence d'affichage incompressible. Sur un écran 144 Hz (6,9 ms) ou 240 Hz (4,1 ms), le stimulus apparaît physiquement plus tôt sur la dalle, ce qui améliore mécaniquement le score mesuré de 10 à 12 ms à performance physiologique identique (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence entre un réflexe spinal et un temps de réaction volontaire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un réflexe spinal (comme le réflexe rotulien) emprunte un arc réflexe monosynaptique sans transiter par les hémisphères cérébraux, s'exécutant en 20 à 50 ms. Le temps de réaction mesuré ici mobilise la rétine, les voies optiques, le cortex visuel primaire, les aires décisionnelles préfrontales et le cortex moteur, nécessitant au minimum 150 ms."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi mes scores varient-ils d'un jour à l'autre ou au cours de la journée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La chronométrie mentale fluctue en fonction des rythmes circadiens, de la dette de sommeil, de la charge cognitive préalable, de l'hydratation et de la consommation de stimulants comme la caféine, qui peut réduire temporairement la latence motrice de 10 à 20 ms en bloquant les récepteurs d'adénosine (Smith, 2002)."
      }
    },
    {
      "@type": "Question",
      "name": "Le vieillissement dégrade-t-il inéluctablement la vitesse de réaction ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le pic de vitesse réflexe pure culmine entre 18 et 24 ans, avant de fléchir modérément d'environ 2 à 6 ms par décennie (Der & Deary, 2006). Néanmoins, le maintien d'une activité cardiovasculaire régulière et la pratique de jeux vidéo d'action préservent l'efficacité synaptique et compensent le ralentissement biologique."
      }
    },
    {
      "@type": "Question",
      "name": "En quoi le temps de réaction est-il déterminant dans des jeux comme Valorant, CS2 ou League of Legends ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans un duel au tir, quelques dizaines de millisecondes peuvent départager deux joueurs, mais le résultat dépend aussi du réseau, de la visée et de l'anticipation. Ce test mesure uniquement votre réaction visuelle simple, pas ces autres facteurs."
      }
    },
    {
      "@type": "Question",
      "name": "Le test fonctionne-t-il fidèlement sur smartphone et tablette tactile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, le module prend en charge les événements tactiles PointerEvents avec une détection immédiate au contact de l'écran. Toutefois, les dalles tactiles des appareils mobiles introduisent généralement 10 à 30 ms de latence de numériseur supplémentaire comparé à une souris filaire 1000 Hz."
      }
    },
    {
      "@type": "Question",
      "name": "La caféine améliore-t-elle réellement la vitesse de réaction ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. La consommation modérée de caféine bloque les récepteurs centraux de l'adénosine, stimulant l'éveil cortical et réduisant temporairement le temps de réaction moteur de 10 à 20 ms (Smith, 2002)."
      }
    },
    {
      "@type": "Question",
      "name": "En quoi ce test se distingue-t-il d'un outil comme Human Benchmark ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Alors qu'un test classique se limite souvent à un simple clic binaire rouge/vert, notre outil évalue la chronométrie mentale et l'estimation d'intervalle, sanctionnant l'anticipation impulsive et offrant un barème comparatif multi-paliers adapté aux exigences compétitives modernes."
      }
    },
    {
      "@type": "Question",
      "name": "Ce test de temps de réaction en ligne est-il totalement gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, l'ensemble des modules d'évaluation et d'entraînement sur SkillDrills est accessible 100 % gratuitement, sans inscription, sans téléchargement d'application et sans publicités invasives."
      }
    },
    {
      "@type": "Question",
      "name": "Les athlètes de disciplines traditionnelles peuvent-ils tirer profit de ce test ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Les pilotes de sports mécaniques (Formule 1, moto), les boxeurs, les escrimeurs et les joueurs de sports de raquette (tennis de table, badminton) utilisent ces protocoles visuels pour affûter le recrutement des unités motrices rapides et la vigilance réflexe."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il fixer le centre de l'écran ou privilégier la vision périphérique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il est conseillé d'adopter une fixation attentionnelle détendue (« regard adouci »). Cela permet aux cellules en bâtonnets de la rétine périphérique, très sensibles aux variations lumineuses, de détecter l'éclair instantanément avant que le cortex moteur ne déclenche la frappe."
      }
    },
    {
      "@type": "Question",
      "name": "À quelle fréquence est-il recommandé de mesurer et d'entraîner ses réflexes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une courte session quotidienne de 5 à 10 minutes suffit pour établir une ligne de base neuro-fonctionnelle fiable, servir d'échauffement avant des parties compétitives et mesurer l'évolution de la vitesse de réaction au fil des semaines."
      }
    }
  ]
};

faqSchema.mainEntity = faqSchema.mainEntity.slice(0, 10);

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment Mesurer Précisément son Temps de Réaction en Ligne",
  "description": "Protocole en 4 étapes pour évaluer votre vitesse de réaction visuelle avec un étalonnage scientifique.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Lancement du Mode Plein Écran",
      "text": "Cliquez sur la zone de test pour activer le mode immersif et minimiser les distractions visuelles."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Fixation Attentionnelle & Préparation",
      "text": "Fixez le centre du champ et préparez votre index sur le bouton de souris sans exercer de pression prématurée."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Déclenchement Moteur Instantané",
      "text": "Dès l'apparition du signal lumineux, cliquez le plus rapidement possible sans anticiper au hasard."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Analyse de la Moyenne & Comparaison au Barème",
      "text": "Répétez 5 à 10 essais pour éliminer les valeurs aberrantes et comparez votre moyenne au barème."
    }
  ]
};

const reactionGuide = {
  heading: "Guide Scientifique du Temps de Réaction & Barèmes Officiels",
  intro: [
    "Un test de temps de réaction mesure, en millisecondes, le délai entre l'apparition d'un signal visuel et votre clic. Chez l'adulte, la moyenne se situe autour de 200 à 250 ms (Kosinski, 2008). Répétez 5 essais : une moyenne est plus fiable qu'un score isolé, car l'écran et la souris ajoutent leur propre latence.",
    "Ce délai couvre la détection du stimulus par la rétine, son traitement par le cortex visuel, la décision, puis la commande motrice envoyée à l'index.",
    "Le chronométrage s'effectue localement dans votre navigateur via l'API performance.now(), sans aller-retour réseau : la connexion internet n'influence pas le résultat.",
    "Considérations matérielles : les écrans 60 Hz ajoutent jusqu'à 16,6 ms de délai d'affichage par trame. L'utilisation d'une dalle 144 Hz ou 240 Hz couplée à une souris optique à 1000 Hz est fortement préconisée pour révéler votre véritable potentiel physiologique (Woods et al., 2015)."
  ],
  benchmarks: {
    title: "Temps de réaction moyen : repères en millisecondes",
    headers: ["Temps de réaction (ms)", "Palier", "Lecture"],
    rows: [
      ["Moins de 150 ms", "Très rapide", "Rare sur un test avec écran et souris ; vérifiez qu'il ne s'agit pas d'une anticipation"],
      ["150 – 190 ms", "Rapide", "Réaction visuelle très vive, souvent associée à un écran à haut taux de rafraîchissement"],
      ["190 – 250 ms", "Dans la moyenne", "Zone typique d'un adulte en bonne forme (Kosinski, 2008)"],
      ["250 – 300 ms", "À améliorer", "Écran 60 Hz, souris lente ou attention dispersée peuvent expliquer l'écart"],
      ["Plus de 300 ms", "Lent", "Fatigue, manque de sommeil ou latence d'affichage importante"]
    ],
    note: "Repères indicatifs, non issus d'un panel de joueurs SkillDrills. Sources : Kosinski (2008) ; Woods et al. (2015). Un écran 60 Hz ajoute jusqu'à environ 16,7 ms par image."
  },
  techniques: {
    title: "Physiologie Sensorielle & Principes d'Optimisation des Réflexes",
    items: [
      {
        name: "Chaîne de Traitement Visuelle (~200–250 ms)",
        desc: "Délai incompressible requis par les photons pour activer la rhodopsine rétinienne, propager l'influx le long du nerf optique vers le corps genouillé latéral, puis activer le cortex moteur via le faisceau pyramidal (Kosinski, 2008)."
      },
      {
        name: "Avantage Chronométrique Auditif (~140–160 ms)",
        desc: "La transduction mécanosensorielle de l'oreille interne s'effectue en quelques millisecondes, devançant les réactions biochimiques de la rétine de 30 à 50 ms (Shelton & Kumar, 2010)."
      },
      {
        name: "Suppression de la Latence d'Affichage Matérielle",
        desc: "Un taux de rafraîchissement élevé (144Hz/240Hz) couplé à la désactivation de la synchronisation verticale (V-Sync) élimine le tamponnage des images et libère 10 à 15 ms de gain pur (Woods et al., 2015)."
      },
      {
        name: "Posture & Régulation de la Tension Musculaire",
        desc: "Une préhension détendue des doigts sur le commutateur de la souris évite la co-contraction d'inhibition des antagonistes, accélérant la course de clic lors de la prise de décision motrice."
      }
    ]
  },
  steps: [
    "Positionnez-vous confortablement face à l'écran et centrez votre regard sur la zone d'affichage.",
    "Reposez délicatement la pulpe de l'index sur le bouton gauche de la souris sans forcer.",
    "Dès le basculement visuel de la cible, pressez instantanément le bouton sans hésitation.",
    "Répétez une série de 5 mesures complètes pour consolider votre moyenne officielle en millisecondes."
  ],
  audience: "Joueurs d'esport sur Counter-Strike 2, Valorant, Apex Legends et League of Legends, athlètes de sports de combat et de vitesse, conducteurs et toute personne désireuse d'évaluer et de perfectionner sa vivacité neuromotrice.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('kosinski2008', 'woods2015', 'jain2015', 'shelton2010', 'dye2009', 'der2006', 'smith2002'),
};

export default function LocalizedReactionTimeTestPageFr() {
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
      <ReactionTimeTestWrapper
        copy={{
          title: "Test de temps de réaction",
          subtitle: "Mesurez vos réflexes visuels en millisecondes",
          caption: "Cliquez dès que le signal apparaît pour mesurer votre temps de réaction visuelle.",
        }}
      />
      <DrillGuide {...reactionGuide} />
      <RelatedDrills currentCategory="reaction-speed" currentHref="/drills/reaction-speed/reaction-time-test" />
      <DrillFooter />
    </>
  );
}
