import PathTracingClient from '@/app/drills/memory/spatial-memory/path-tracing/PathTracingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test des blocs de Corsi en ligne | SkillDrills",
  description: "Test des blocs de Corsi gratuit en ligne : retiens les cases qui s'allument une à une et touche-les dans le même ordre. Parcours de plus en plus longs.",
  keywords: ['test des blocs de Corsi', 'blocs de Corsi en ligne', 'empan visuo-spatial', 'mémoire séquentielle spatiale', 'mémoire de travail visuo-spatiale', 'test de Corsi'],
  alternates: {
    canonical: "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/path-tracing'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test des blocs de Corsi en ligne | SkillDrills",
    description: "Test des blocs de Corsi gratuit : touche les cases éclairées dans le même ordre et entraîne ton empan visuo-spatial dans le navigateur, sans inscription.",
    url: "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing",
    siteName: 'SkillDrills',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test des blocs de Corsi en ligne | SkillDrills",
    description: "Test des blocs de Corsi gratuit : touche les cases éclairées dans le même ordre et entraîne ton empan visuo-spatial dans le navigateur, sans inscription.",
  },
};

export const dynamic = 'force-static';

export default function PathTracingFrenchPage() {
  const appDescription = "Test des blocs de Corsi gratuit dans le navigateur : des cases voisines s'allument une à une et forment un parcours que tu reproduis dans le même ordre. Chaque parcours réussi s'allonge d'une étape.";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
      { "@type": "ListItem", "position": 2, "name": "Entraînements de mémoire", "item": "https://skilldrills.online/fr/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Mémoire spatiale", "item": "https://skilldrills.online/fr/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Test des blocs de Corsi", "item": "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Test des blocs de Corsi en ligne",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": appDescription,
    "genre": "Spatial Memory",
    "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Test des blocs de Corsi en ligne",
    "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing",
    "description": appDescription,
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Test des blocs de Corsi en ligne",
    "description": appDescription,
    "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing",
    "genre": ["Memory Game", "Spatial Sequence Memory"],
    "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "numberOfPlayers": {
      "@type": "QuantitativeValue",
      "value": 1
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment se déroule le test des blocs de Corsi ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Des cases de la grille s'allument une à une toutes les 0,5 seconde et dessinent un parcours. Ensuite, tu as 10 secondes pour cliquer ou toucher les mêmes cases dans le même ordre. Un parcours complet rapporte +150 points et le suivant compte une étape de plus."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce le test de Corsi utilisé en clinique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non. Le principe est celui de la tâche des blocs de Corsi (Corsi, 1972) : retenir des positions dans leur ordre puis les reproduire. Ici, on utilise une grille carrée, chaque étape mène uniquement à une case voisine (haut, bas, gauche, droite) et aucune case n'est visitée deux fois. C'est un jeu d'entraînement, pas un test clinique ni un outil de diagnostic."
        }
      },
      {
        "@type": "Question",
        "name": "Comment évoluent la longueur du parcours et la taille de la grille ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le niveau 1 commence avec un parcours de 3 étapes. Chaque parcours réussi augmente le niveau et la longueur d'une unité. La grille est en 3x3 jusqu'à 5 étapes, 4x4 de 6 à 8, 5x5 de 9 à 12, 6x6 de 13 à 16 et 7x7 à partir de 17."
        }
      },
      {
        "@type": "Question",
        "name": "Comment le temps est-il compté ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le chronomètre de session dure 60 secondes et ne tourne que pendant que tu reproduis le parcours. La démonstration et l'affichage du résultat ne sont pas décomptés. Chaque parcours doit être terminé dans les 10 secondes après le début de la saisie."
        }
      },
      {
        "@type": "Question",
        "name": "Que se passe-t-il si je touche une mauvaise case ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La manche s'arrête aussitôt et un nouveau parcours de même longueur apparaît. Aucun point ni temps n'est retiré et le niveau ne baisse pas. Dépasser les 10 secondes est traité de la même façon ; dans les deux cas, l'essai compte comme raté dans la précision."
        }
      },
      {
        "@type": "Question",
        "name": "Comment retenir des parcours plus longs ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comme le parcours passe toujours à une case voisine, retiens des blocs de directions plutôt que des cases isolées, par exemple « deux à droite, une en haut » (regroupement, Miller, 1956). Pendant la démonstration, garde toute la grille en vue et repère surtout les virages."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle différence avec le test de mémoire visuelle (grille) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dans le test de mémoire visuelle, plusieurs cases s'allument en même temps et peuvent être retenues comme un seul motif. Dans le test des blocs de Corsi, les cases s'allument une à une : il faut retenir l'ordre en plus des positions."
        }
      },
      {
        "@type": "Question",
        "name": "Mes résultats sont-ils enregistrés ? Ont-ils une valeur médicale ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le meilleur score et le niveau maximal sont enregistrés uniquement dans le localStorage de ce navigateur, sans envoi à un serveur. Les résultats sont des scores d'entraînement et ne disent rien d'un trouble de la mémoire ou de la santé du cerveau."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment jouer au test des blocs de Corsi",
    "description": "Quatre étapes pour reproduire dans le même ordre un parcours qui s'allume case par case.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing#step-1",
        "name": "Regarder toute la grille",
        "text": "Pendant la démonstration, ne suis pas seulement la première case : observe toute la grille et repère où le parcours tourne."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing#step-2",
        "name": "Regrouper par directions",
        "text": "Chaque étape mène à une case voisine : retiens des blocs de directions comme « droite 2, haut 1 »."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing#step-3",
        "name": "Toucher dans le même ordre",
        "text": "Après la démonstration, clique ou touche les cases dans le même ordre à partir de la case de départ, en moins de 10 secondes."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/fr/drills/memory/spatial-memory/path-tracing#step-4",
        "name": "Enchaîner après une erreur",
        "text": "Une erreur ne coûte ni points ni niveau : concentre-toi tout de suite sur le nouveau parcours de même longueur."
      }
    ]
  };

  const pathTracingGuide = {
    intro: [
      "Le test des blocs de Corsi en ligne est un jeu gratuit de mémoire de l'ordre : des cases d'une grille s'allument l'une après l'autre, puis tu les touches dans le même ordre. Il reprend le principe de la tâche des blocs de Corsi (Milner, 1971 ; Corsi, 1972) sous forme de parcours sur une grille pour entraîner ton empan visuo-spatial et ta mémoire de travail visuo-spatiale.",
      "Au niveau 1, un parcours de 3 étapes apparaît sur une grille 3x3. Les cases s'allument toutes les 0,5 seconde ; chaque étape mène à une case en haut, en bas, à gauche ou à droite, et aucune case n'est visitée deux fois. Chaque parcours réussi rapporte +150 points, niveau +1 et une étape de plus ; la grille passe en 4x4, 5x5 et 6x6 jusqu'à 7x7.",
      "Le chronomètre de session dure 60 secondes et ne tourne que pendant la saisie. Chaque parcours doit être terminé en 10 secondes. Une mauvaise case ou un dépassement de temps termine la manche sans pénalité ; un nouveau parcours de même longueur suit et le niveau ne baisse pas. Saisie au clic ou au toucher.",
      "Transparence des données : les résultats sont enregistrés uniquement dans le localStorage de ce navigateur et ne sont envoyés à aucun serveur. SkillDrills ne publie donc ni moyennes d'utilisateurs ni classements.",
      "Cet outil est un jeu gratuit d'entraînement dans le navigateur. Ce n'est ni le test de Corsi officiel, ni un dispositif médical, ni un outil de diagnostic, et les résultats ne renseignent pas sur un trouble de la mémoire. En cas d'inquiétude, consulte un professionnel de santé."
    ],
    benchmarks: {
      title: "Paliers d'entraînement SkillDrills (points = parcours réussis × 150)",
      headers: ["Palier", "Longueur atteinte · grille", "Points", "Signification"],
      rows: [
        ["Découverte", "3–4 étapes · 3x3", "0–150", "0 à 1 parcours réussi. Prise en main des règles et du rythme"],
        ["Base", "5–7 étapes · 3x3–4x4", "300–600", "2 à 4 parcours réussis. La grille passe en 4x4"],
        ["Confirmé", "8–12 étapes · 4x4–5x5", "750–1 350", "5 à 9 parcours réussis. Le regroupement par directions devient nécessaire"],
        ["Avancé", "13+ étapes · 6x6–7x7", "1 500+", "10 parcours réussis ou plus. Longs parcours enchaînés en 60 secondes de saisie"]
      ],
      note: "Ces paliers sont calculés à partir des règles de score du jeu ; ce ne sont ni des normes de population ni des seuils cliniques."
    },
    techniques: {
      title: "Astuces pour les longs parcours",
      items: [
        {
          "name": "Former des blocs de directions",
          "desc": "Le parcours passe toujours à une case voisine. Retiens donc des blocs comme « droite 2, haut 1, gauche 1 » plutôt que des cases isolées (Miller, 1956).",
          "tips": "Nomme les formes : L, escalier, zigzag."
        },
        {
          "name": "Repérer les virages",
          "desc": "Les lignes droites se retiennent facilement. Fixe surtout la case de départ et les cases où la direction change.",
          "tips": "Avant de saisir, rappelle-toi le départ et le dernier virage."
        },
        {
          "name": "Garder toute la grille en vue",
          "desc": "Plutôt que de sauter d'une case éclairée à l'autre, regarde près du centre de la grille et suis le tracé.",
          "tips": "Particulièrement utile sur les grilles 6x6 et 7x7."
        },
        {
          "name": "Saisir à rythme régulier",
          "desc": "Avec 10 secondes de saisie, inutile de te précipiter, mais de longues pauses font oublier la fin du parcours.",
          "tips": "Saisis bloc par bloc."
        }
      ]
    },
    steps: [
      "Appuie sur Démarrer et attends le compte à rebours de 3 secondes.",
      "Observe le parcours pendant que les cases s'allument une à une.",
      "En moins de 10 secondes, clique ou touche les mêmes cases dans le même ordre.",
      "En cas de réussite, le parcours s'allonge d'une étape ; en cas d'erreur, un nouveau parcours de même longueur apparaît.",
      "Après 60 secondes de saisie, consulte ton score, ton niveau maximal et ta précision."
    ],
    audience: "Toute personne qui veut entraîner son empan visuo-spatial en jouant, les joueurs et sportifs qui doivent retenir des trajets ou des enchaînements, et quiconque cherche un jeu de mémoire court.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('corsi1972', 'milner1971', 'logie1995', 'miller1956'),
    related: [
      { href: "/fr/drills/memory/spatial-memory/grid-memorization", label: "Test de Mémoire Visuelle" },
      { href: "/fr/drills/memory/spatial-memory/object-location", label: "Test de Mémoire de Localisation" },
      { href: "/fr/drills/memory/short-term-memory/digit-span", label: "Test d'Empan Numérique" },
      { href: "/fr/drills/memory/short-term-memory/word-recall", label: "Test de Mémoire Verbale" },
      { href: "/fr/drills/memory/working-memory/n-back", label: "Test de Mémoire de Travail N-Back" }
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
      <PathTracingClient
        copy={{
          "h1Keyword": "Test des blocs de Corsi en ligne",
          "h1Suffix": " – Empan visuo-spatial",
          "subtitle": "Retiens les cases qui s'allument une à une et touche-les dans le même ordre.",
          "statScore": "Score",
          "statTime": "Temps",
          "statLevel": "Niveau",
          "statBestScore": "Meilleur Score",
          "levelPrefix": "Niv.",
          "startTitle": "Test des blocs de Corsi",
          "startSubtitle": "Empan visuo-spatial • Mémoire de l'ordre",
          "countdownSubtitle": "PRÉPARE-TOI",
          "newBest": "NOUVEAU RECORD",
          "pointsLabel": "Points",
          "statAccuracy": "Précision",
          "statPeakLevel": "Niveau Max",
          "statPerfects": "Sans faute",
          "btnPlayAgain": "Rejouer",
          "rulesTitle": "Règles et points",
          "aboutTitle": "À propos du test des blocs de Corsi",
          "rulesItems": [
            {
              "num": "1",
              "text": "Reproduire le parcours dans le même ordre",
              "highlight": "+150 PTS",
              "result": "Réussite : niveau +1 et une étape de plus (10 s de saisie)"
            },
            {
              "num": "2",
              "text": "La grille s'agrandit",
              "highlight": "3x3 → 7x7",
              "result": "La grille grandit automatiquement avec la longueur du parcours"
            },
            {
              "num": "3",
              "text": "Mauvaise case / temps écoulé",
              "highlight": "Aucune pénalité",
              "result": "Ni points ni temps retirés ; nouveau parcours de même longueur"
            },
            {
              "num": "4",
              "text": "Niveau conservé",
              "highlight": "Pas de recul",
              "result": "Le niveau ne baisse jamais ; les 60 secondes ne tournent que pendant la saisie"
            }
          ]
        }}
      />
      <DrillGuide guide={pathTracingGuide} />
      <RelatedDrills />
    </>
  );
}
