import HomePageClient from '../HomePageClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildHomeMetadata, buildHomeSchema } from '@/lib/i18n/siteLandingSeoNative';

const legacyMetadata = {
  title: 'Aim Trainer Gratuit & Entraînement Cérébral en Ligne | SkillDrills',
  description: 'Améliorez votre visée sur Valorant, CS2, temps de réaction, CPS et mémoire avec 81 exercices interactifs gratuits directement sur votre navigateur.',
  keywords: [
    'aim trainer gratuit',
    'test de temps de réaction',
    'entraînement visée valorant',
    'test cps souris',
    'jeux de mémoire gratuits',
    'améliorer ses réflexes',
    'exercices cognitifs en ligne',
    'entraînement fps en ligne'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/fr',
    languages: getAlternateLanguages('/fr'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'SkillDrills - Aim Trainer Gratuit & Entraînement Cérébral en Ligne',
    description: 'Améliorez votre visée sur Valorant, CS2, temps de réaction, CPS et mémoire directement dans votre navigateur.',
    url: 'https://skilldrills.online/fr',
    locale: 'fr_FR',
    type: 'website',
  },
};

export const metadata = {
  ...legacyMetadata,
  ...buildHomeMetadata('fr', 'https://skilldrills.online/fr', DRILLS.length, getAlternateLanguages('/fr')),
};

const homeSchema = buildHomeSchema('fr', 'https://skilldrills.online/fr', DRILLS.length);

export default function FrenchHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
    <HomePageClient
      copy={{
        srH2: 'SkillDrills - Aim Trainer et Entraînement Cérébral Gratuits',
        srBody: 'SkillDrills est une plateforme d\'entraînement en ligne gratuite proposant 81 exercices interactifs répartis en 8 catégories : aim trainer FPS, entraînement cérébral, suivi visuel, jeux de mémoire de travail, coordination œil-main, réflexes, reconnaissance visuelle et tests de temps de réaction. Sans inscription, 100% dans le navigateur.',
        heroH1: 'Affûtez Visée et Esprit',
        heroSub: 'Développez votre précision mécanique, votre vitesse d\'acquisition de cible et votre mémoire de travail. 81 exercices gratuits dans le navigateur, répartis en 8 domaines. Sans inscription, disponibles instantanément.',
        heroExploreCta: 'Voir les 81 exercices',
        fpsHubCta: 'Aim Trainer',
        statFreeDrills: 'Exercices gratuits',
        statDomains: 'Domaines',
        statServerDelay: 'Délai serveur',
        hudEngineTelemetry: 'EXEMPLE DE MESURE',
        hudReady: 'PRÊT',
        hudAvgLatency: 'Latence moy.',
        hudPrecision: 'Précision',
        hudFrameSync: 'Sync images',
        hudCalibration: 'EXEMPLE DE CALIBRAGE',
        hudSubPixel: 'MOTEUR SUB-PIXEL',
        methodologyBadge: 'Paradigmes cognitifs et moteurs',
        methodologyH2: 'Fondé sur les sciences cognitives et la mécanique esport',
        methodologyBody: 'Chaque exercice est modelé directement sur des tests psychométriques validés et les exigences motrices de l\'esport compétitif — isolant des voies neurologiques stimulus-réponse distinctes et la coordination œil-main.',
        pillDigitSpan: 'Empan chiffré',
        pillDigitSpanSub: 'Mémoire de travail',
        pillNBack: 'Tâche N-back',
        pillNBackSub: 'Contrôle exécutif',
        pillChoiceRT: 'Temps de choix',
        pillChoiceRTSub: 'Calibrage de latence',
        pillSmoothPursuit: 'Poursuite lisse',
        pillSmoothPursuitSub: 'Suivi oculomoteur',
        adaptationCurve: 'Courbe d\'adaptation typique : -15 à -22% de latence en 14 jours',
        empiricalNote: '(Modèle de progression empirique)',
        profileH2: 'Votre profil de progression',
        profileSub: 'Progression locale agrégée sur l\'ensemble des exercices complétés',
        profileSessions: 'Sessions',
        profileDrills: 'Exercices',
        profileLvlPrefix: 'Niv.',
        profileAvgLevel: 'Niveau moy.',
        profileRating: 'Score',
        categoriesH2: 'Catégories d\'entraînement',
        categoriesSub: 'Choisissez un axe de compétence pour démarrer votre calibrage.',
        desktopOnly: 'Ordinateur uniquement',
        drillsSuffix: 'exercices',
        popular: 'Populaire',
        exploreCategory: 'Voir la catégorie',
        categories: {
          fps: { name: 'Entraînement FPS', description: 'Aim trainer, flick shots, suivi de cible et exercices de réflexes pour le gaming compétitif' },
          cognitive: { name: 'Cognitif', description: 'Mémoire, attention, concentration et résolution de problèmes' },
          memory: { name: 'Mémoire', description: 'Mémoire de travail, mémorisation spatiale et rétention à long terme' },
          motor: { name: 'Motricité', description: 'Coordination œil-main, contrôle de précision et précision du timing' },
          physical: { name: 'Physique', description: 'Équilibre, réflexes directionnels et exercices de coordination' },
          visual: { name: 'Entraînement visuel', description: 'Vision périphérique, reconnaissance saccadique et détection éclair' },
          'visual-tracking': { name: 'Suivi visuel', description: 'Poursuite lisse, suivi de trajectoire continu et prédiction de trajectoire' },
          'reaction-speed': { name: 'Vitesse de réaction', description: 'Calibrage du temps de réaction simple et de choix, et réponse réflexe' },
        },
        featuresH2: 'Diagnostics moteur & fonctionnalités',
        featuresSub: 'Conçu pour les hauts taux de rafraîchissement et une réponse tactile instantanée dans tous les navigateurs modernes.',
        features: [
          { title: 'Statistiques de session en direct', description: 'Latence, précision et exactitude se mettent à jour pendant que vous jouez. Les mesures dépendent de votre écran et de votre périphérique d\'entrée' },
          { title: 'Courbes de progression locales', description: 'Suivez vos scores et votre progression en privé, dans le navigateur' },
          { title: 'Progression adaptative', description: 'La difficulté augmente avec votre série, pour que chaque exercice reste exigeant à mesure que vous progressez' },
          { title: 'Paradigmes établis', description: 'Construit sur des tâches établies de psychologie cognitive et des schémas d\'entraînement esport. Ce n\'est pas un test clinique' },
          { title: 'Axes de compétence ciblés', description: 'Ciblez des points faibles précis parmi 8 catégories de performance spécialisées' },
          { title: 'Zéro friction', description: '100% gratuit, exécution côté navigateur, sans compte ni carte bancaire' },
        ],
        audienceH2: 'Public visé',
        audienceSub: 'Des parcours d\'entraînement adaptés, que vous calibriez votre visée ou repoussiez vos limites cognitives.',
        audience: [
          { title: 'Joueurs compétitifs', description: 'Affûtez précision de flick, suivi de cible et temps de réaction pour Valorant, CS2, Overwatch et Apex Legends.' },
          { title: 'Performeurs cognitifs', description: 'Développez votre mémoire de travail, votre endurance attentionnelle et votre vitesse de traitement.' },
          { title: 'Adeptes du quotidien', description: 'Des micro-sessions de 5 minutes conçues pour un échauffement mental rapide et un calibrage moteur quotidien.' },
        ],
        ctaH2: 'Entraînez-vous maintenant',
        ctaSub: 'Sans compte. Sans paiement. 81 exercices dans le navigateur, prêts pour un calibrage instantané.',
        ctaExploreCta: 'Voir les 81 exercices',
        reactionTest: {
          headlineIdle: 'CLIQUEZ POUR COMMENCER',
          headlineWaiting: 'ATTENDEZ LE VERT',
          headlineGo: 'CLIQUEZ !',
          headlineEarly: 'TROP TÔT',
          sublineIdle: 'Rouge pour l\'instant — cliquez dès que ça devient vert',
          sublineWaiting: 'Restez prêt…',
          sublineGo: 'Maintenant !',
          sublineEarly: 'Vous avez cliqué avant le flash vert',
          labelElite: 'ÉLITE',
          labelFast: 'RAPIDE',
          labelAverage: 'MOYEN',
          labelSlow: 'LENT',
          labelWarmUp: 'ÉCHAUFFEMENT',
          hudTitle: 'Télémétrie de latence',
          hudBadge: 'Module en direct',
          ariaClickNow: 'Cliquez maintenant',
          ariaWait: 'Attendez que le cercle devienne vert',
          ariaStart: 'Démarrer le test de réaction',
          statLast: 'DERNIER',
          statBest: 'MEILLEUR',
          statAttempts: 'ESSAIS',
          resetBtn: 'Réinitialiser',
          liveReaction: 'Temps de réaction {ms} millisecondes',
        },
      }}
    />
    </>
  );
}
