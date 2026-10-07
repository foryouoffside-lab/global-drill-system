const LABELS = {
  en: { home: 'Home', drills: 'Drills', 'reaction-speed': 'Reaction Speed', 'visual-tracking': 'Visual Tracking' },
  ko: { home: '홈', drills: '드릴', 'reaction-speed': '반응 훈련', 'visual-tracking': '동체시력 및 시각 추적' },
  ja: { home: 'ホーム', drills: 'ドリル', 'reaction-speed': '反応トレーニング', 'visual-tracking': '動体視力・視覚追跡' },
  de: { home: 'Startseite', drills: 'Drills', 'reaction-speed': 'Reaktionstraining', 'visual-tracking': 'Visuelles Tracking & Augentraining' },
  pt: { home: 'Início', drills: 'Treinos', 'reaction-speed': 'Treino de reação', 'visual-tracking': 'Rastreamento Visual e Ocular' },
  es: { home: 'Inicio', drills: 'Ejercicios', 'reaction-speed': 'Entrenamiento de reacción', 'visual-tracking': 'Seguimiento Visual y Ocular' },
  fr: { home: 'Accueil', drills: 'Exercices', 'reaction-speed': 'Entraînement de la réaction', 'visual-tracking': 'Poursuite Oculaire & Suivi Visuel' },
};

export function breadcrumbItems(locale, url, category, name, withDirectory = false) {
  const labels = LABELS[locale] || LABELS.en;
  const origin = url.split('/drills/')[0];
  const trail = [
    { name: labels.home, item: origin },
    ...(withDirectory ? [{ name: labels.drills, item: `${origin}/drills` }] : []),
    { name: labels[category], item: `${origin}/drills/${category}` },
    { name, item: url },
  ];
  return trail.map((entry, index) => ({ '@type': 'ListItem', position: index + 1, ...entry }));
}
