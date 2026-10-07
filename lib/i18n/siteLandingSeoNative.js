const SITE_URL = 'https://skilldrills.online';
const UPDATED_AT = '2026-09-20';
const LOCALE_TAGS = { en: 'en-US', ko: 'ko-KR', ja: 'ja-JP', de: 'de-DE', pt: 'pt-BR', es: 'es-ES', fr: 'fr-FR' };
const OG_LOCALES = { en: 'en_US', ko: 'ko_KR', ja: 'ja_JP', de: 'de_DE', pt: 'pt_BR', es: 'es_ES', fr: 'fr_FR' };

const NATIVE_SEO = {
  en: {
    homeTitle: 'Free Aim Trainer & Brain Games Online | SkillDrills',
    homeDescription: (count) => `${count} free browser drills for FPS aim, reaction tests, memory, focus, and visual skills. No sign-up.`,
    homeKeywords: ['free aim trainer', 'brain games free', 'reaction time test', 'memory games', 'visual tracking training', 'CPS test', 'focus training', 'online drills'],
    directoryTitle: (count) => `Free Online Drills: ${count} Skill Tests | SkillDrills`,
    directoryDescription: (count) => `Browse ${count} free browser drills for aim training, reaction speed, memory, focus, motor skills, and visual tracking. No sign-up.`,
    directoryKeywords: ['online drills free', 'free aim trainer', 'reaction time test', 'memory games', 'cognitive training', 'visual tracking training', 'CPS test'],
    homeHeadline: 'Free aim training and brain games online',
    directoryHeadline: (count) => `${count} free online skill drills`,
    faq: [
      ['What can I train with SkillDrills?', 'SkillDrills offers free browser drills for FPS aim, reaction speed, memory, focus, motor control, visual tracking, and related skills.'],
      ['Do I need an account or an installation?', 'No. The drills run in a modern browser without an account or a software download. FPS drills work best with a mouse and keyboard.'],
      ['How should I use the drill directory?', 'Choose a training category, open a drill, calibrate your device, and repeat short sessions while comparing your own results over time.'],
    ],
  },
  ko: {
    homeTitle: '무료 에임 연습·뇌 훈련 사이트 | SkillDrills',
    homeDescription: (count) => `${count}종 무료 브라우저 드릴로 에임, 반응속도, 기억력, 집중력, CPS, 시각 추적을 연습하세요. 회원가입 없이 시작합니다.`,
    homeKeywords: ['무료 에임 연습 사이트', '발로란트 에임 연습', '반응속도 테스트', 'CPS 테스트', '기억력 게임', '뇌 훈련 게임', '인지 훈련', '시각 추적 훈련', '손눈협응 훈련'],
    directoryTitle: (count) => `무료 에임·두뇌 훈련 드릴 ${count}종 | SkillDrills`,
    directoryDescription: (count) => `${count}종 무료 온라인 드릴을 분야별로 찾아보세요. 에임 연습, 반응속도 테스트, 기억력 게임, 인지 훈련, 시각 추적을 브라우저에서 실행합니다.`,
    directoryKeywords: ['무료 에임 연습 사이트', '반응속도 테스트', '뇌 훈련 게임', '기억력 게임', '인지 훈련', '시각 추적 훈련', 'CPS 테스트'],
    homeHeadline: '무료 에임 연습과 뇌 훈련',
    directoryHeadline: (count) => `${count}종 무료 온라인 훈련 드릴`,
    faq: [
      ['SkillDrills에서 어떤 능력을 훈련할 수 있나요?', 'FPS 에임, 반응속도, 기억력, 집중력, 손눈협응, 시각 추적과 관련된 브라우저 드릴을 무료로 연습할 수 있습니다.'],
      ['회원가입이나 프로그램 설치가 필요한가요?', '필요하지 않습니다. 최신 브라우저에서 계정과 별도 프로그램 없이 실행할 수 있습니다. FPS 드릴은 마우스와 키보드 사용을 권장합니다.'],
      ['전체 드릴 목록은 어떻게 사용하나요?', '훈련 분야를 선택하고 드릴을 연 뒤 기기를 확인하세요. 짧은 세션을 반복하며 자신의 기록 변화를 비교하는 방식이 좋습니다.'],
    ],
  },
  ja: {
    homeTitle: '無料エイム練習・脳トレ | SkillDrills',
    homeDescription: (count) => `${count}種類の無料ブラウザドリルでエイム、反射神経、記憶力、集中力、CPS、動体視力を練習。登録不要です。`,
    homeKeywords: ['無料 エイム練習', 'エイムトレーナー 無料', '反射神経 テスト', '脳トレ 無料', '記憶力 ゲーム', '動体視力 テスト', 'CPS テスト', 'オンライン トレーニング'],
    directoryTitle: (count) => `無料エイム・脳トレ ${count}種一覧 | SkillDrills`,
    directoryDescription: (count) => `${count}種類の無料オンラインドリルを目的別に検索。エイム練習、反射神経テスト、記憶力、集中力、動体視力をブラウザで実行できます。`,
    directoryKeywords: ['無料 エイム練習', '反射神経 テスト', '脳トレ 無料', '記憶力 ゲーム', '動体視力 テスト', 'CPS テスト', 'オンライン トレーニング'],
    homeHeadline: '無料エイム練習と脳トレ',
    directoryHeadline: (count) => `${count}種類の無料オンラインドリル`,
    faq: [
      ['SkillDrillsでは何をトレーニングできますか？', 'FPSのエイム、反射神経、記憶力、集中力、手と目の協調、動体視力などをブラウザで練習できます。'],
      ['会員登録やアプリのインストールは必要ですか？', '必要ありません。対応ブラウザでアカウント登録や別アプリなしに始められます。FPSドリルはマウスとキーボードを推奨します。'],
      ['ドリル一覧はどのように使えばよいですか？', '目的のカテゴリーを選び、ドリルを開いて端末を確認します。短いセッションを継続し、自分の記録の変化を比べてください。'],
    ],
  },
  de: {
    homeTitle: 'Aim Trainer & Gehirntraining kostenlos | SkillDrills',
    homeDescription: (count) => `${count} kostenlose Browser-Drills für Aim, Reaktion, Gedächtnis, Konzentration, CPS und visuelles Tracking. Ohne Anmeldung.`,
    homeKeywords: ['Aim Trainer kostenlos', 'Aim Trainer online', 'Gehirntraining kostenlos', 'Reaktionstest online', 'Gedächtnistraining', 'Konzentration trainieren', 'CPS Test', 'Reflexe testen'],
    directoryTitle: (count) => `Online-Drills: ${count} kostenlose Tests | SkillDrills`,
    directoryDescription: (count) => `Finde ${count} kostenlose Browser-Drills für Aim Training, Reaktionstest, Gedächtnistraining, Konzentration, Motorik und visuelles Tracking.`,
    directoryKeywords: ['Aim Trainer kostenlos', 'Gehirntraining kostenlos', 'Reaktionstest online', 'Gedächtnistraining', 'Konzentration trainieren', 'CPS Test', 'Online-Drills kostenlos'],
    homeHeadline: 'Kostenloser Aim Trainer und Gehirntraining',
    directoryHeadline: (count) => `${count} kostenlose Online-Drills`,
    faq: [
      ['Welche Fähigkeiten kann ich mit SkillDrills trainieren?', 'SkillDrills bietet Browser-Drills für FPS-Aiming, Reaktionsgeschwindigkeit, Gedächtnis, Konzentration, Motorik und visuelles Tracking.'],
      ['Brauche ich ein Konto oder eine Installation?', 'Nein. Die Übungen laufen ohne Konto und ohne Software-Download im modernen Browser. Für FPS-Drills sind Maus und Tastatur am besten geeignet.'],
      ['Wie nutze ich den Drill-Katalog?', 'Wähle einen Trainingsbereich, öffne eine Übung, prüfe dein Gerät und wiederhole kurze Einheiten. Vergleiche dabei deine eigenen Ergebnisse über die Zeit.'],
    ],
  },
  pt: {
    homeTitle: 'Treino de mira e jogos mentais grátis | SkillDrills',
    homeDescription: (count) => `${count} treinos grátis no navegador para mira, tempo de reação, memória, concentração, CPS e rastreamento visual. Sem cadastro.`,
    homeKeywords: ['treino de mira grátis', 'aim trainer online', 'teste de tempo de reação', 'jogos mentais grátis', 'treino cognitivo', 'teste de memória', 'teste de CPS', 'exercícios de concentração'],
    directoryTitle: (count) => `Treinos online: ${count} exercícios grátis | SkillDrills`,
    directoryDescription: (count) => `Explore ${count} treinos grátis no navegador para mira, reflexos, memória, concentração, coordenação motora e rastreamento visual.`,
    directoryKeywords: ['treino de mira grátis', 'teste de tempo de reação', 'jogos mentais grátis', 'treino cognitivo', 'teste de memória', 'teste de CPS', 'treinos online grátis'],
    homeHeadline: 'Treino de mira e jogos mentais grátis',
    directoryHeadline: (count) => `${count} treinos online grátis`,
    faq: [
      ['O que posso treinar no SkillDrills?', 'Você encontra treinos no navegador para mira em FPS, tempo de reação, memória, concentração, coordenação motora e rastreamento visual.'],
      ['Preciso criar uma conta ou instalar um programa?', 'Não. Os exercícios funcionam no navegador sem cadastro e sem download. Para treinos de FPS, recomendamos mouse e teclado.'],
      ['Como usar a lista de treinos?', 'Escolha uma categoria, abra um exercício, confira o dispositivo e repita sessões curtas. Compare seus próprios resultados ao longo do tempo.'],
    ],
  },
  es: {
    homeTitle: 'Aim trainer y juegos mentales gratis | SkillDrills',
    homeDescription: (count) => `${count} ejercicios gratis en el navegador para puntería, reflejos, memoria, concentración, CPS y seguimiento visual. Sin registro.`,
    homeKeywords: ['aim trainer gratis', 'entrenamiento de puntería', 'test de reflejos', 'juegos mentales gratis', 'entrenamiento cognitivo', 'test de memoria', 'test de CPS', 'ejercicios de concentración'],
    directoryTitle: (count) => `Ejercicios online: ${count} tests gratis | SkillDrills`,
    directoryDescription: (count) => `Explora ${count} ejercicios gratis en el navegador para puntería, reflejos, memoria, concentración, coordinación y seguimiento visual.`,
    directoryKeywords: ['aim trainer gratis', 'entrenamiento de puntería', 'test de reflejos', 'juegos mentales gratis', 'entrenamiento cognitivo', 'test de memoria', 'test de CPS'],
    homeHeadline: 'Aim trainer y juegos mentales gratis',
    directoryHeadline: (count) => `${count} ejercicios online gratis`,
    faq: [
      ['¿Qué habilidades puedo entrenar con SkillDrills?', 'SkillDrills ofrece ejercicios de navegador para puntería FPS, reflejos, memoria, concentración, coordinación y seguimiento visual.'],
      ['¿Necesito una cuenta o instalar un programa?', 'No. Los ejercicios funcionan en un navegador moderno sin registro ni descarga. Para los ejercicios FPS recomendamos ratón y teclado.'],
      ['¿Cómo uso el directorio de ejercicios?', 'Elige una categoría, abre un ejercicio, comprueba tu dispositivo y repite sesiones breves. Compara tus propios resultados con el tiempo.'],
    ],
  },
  fr: {
    homeTitle: 'Aim trainer et jeux cérébraux gratuits | SkillDrills',
    homeDescription: (count) => `${count} exercices gratuits dans le navigateur pour la visée, les réflexes, la mémoire, la concentration, le CPS et le suivi visuel. Sans inscription.`,
    homeKeywords: ['aim trainer gratuit', 'entraînement à la visée', 'test de réflexes', 'jeux cérébraux gratuits', 'entraînement cérébral', 'test de mémoire', 'test CPS', 'exercices de concentration'],
    directoryTitle: (count) => `Exercices en ligne : ${count} tests gratuits | SkillDrills`,
    directoryDescription: (count) => `Parcourez ${count} exercices gratuits dans le navigateur pour la visée, les réflexes, la mémoire, la concentration, la motricité et le suivi visuel.`,
    directoryKeywords: ['aim trainer gratuit', 'entraînement à la visée', 'test de réflexes', 'jeux cérébraux gratuits', 'test de mémoire', 'test CPS', 'exercices en ligne gratuits'],
    homeHeadline: 'Aim trainer et jeux cérébraux gratuits',
    directoryHeadline: (count) => `${count} exercices en ligne gratuits`,
    faq: [
      ['Quelles compétences puis-je entraîner avec SkillDrills ?', 'SkillDrills propose des exercices dans le navigateur pour la visée FPS, les réflexes, la mémoire, la concentration, la coordination et le suivi visuel.'],
      ['Faut-il créer un compte ou installer un logiciel ?', 'Non. Les exercices fonctionnent dans un navigateur moderne sans inscription ni téléchargement. Pour les exercices FPS, une souris et un clavier sont recommandés.'],
      ['Comment utiliser le répertoire des exercices ?', 'Choisissez une catégorie, ouvrez un exercice, vérifiez votre périphérique et répétez de courtes séances. Comparez vos propres résultats dans le temps.'],
    ],
  },
};

function getSeo(locale) {
  return NATIVE_SEO[locale] || NATIVE_SEO.en;
}

export function buildHomeMetadata(locale, url, count, languages) {
  const seo = getSeo(locale);
  const description = seo.homeDescription(count);
  return {
    title: seo.homeTitle,
    description,
    keywords: seo.homeKeywords,
    alternates: { canonical: url, languages },
    robots: { index: true, follow: true },
    openGraph: {
      title: seo.homeTitle,
      description,
      url,
      siteName: 'SkillDrills',
      locale: OG_LOCALES[locale] || OG_LOCALES.en,
      type: 'website',
      images: [{ url: `${SITE_URL}/icons/icon-512x512.png`, width: 512, height: 512, alt: seo.homeHeadline }],
    },
    twitter: { card: 'summary_large_image', title: seo.homeTitle, description, images: [`${SITE_URL}/icons/icon-512x512.png`] },
  };
}

export function buildDirectoryMetadata(locale, url, count, languages) {
  const seo = getSeo(locale);
  const description = seo.directoryDescription(count);
  return {
    title: seo.directoryTitle(count),
    description,
    keywords: seo.directoryKeywords,
    alternates: { canonical: url, languages },
    robots: { index: true, follow: true },
    openGraph: {
      title: seo.directoryTitle(count),
      description,
      url,
      siteName: 'SkillDrills',
      locale: OG_LOCALES[locale] || OG_LOCALES.en,
      type: 'website',
      images: [{ url: `${SITE_URL}/icons/icon-512x512.png`, width: 512, height: 512, alt: seo.directoryHeadline(count) }],
    },
    twitter: { card: 'summary_large_image', title: seo.directoryTitle(count), description, images: [`${SITE_URL}/icons/icon-512x512.png`] },
  };
}

export function buildHomeSchema(locale, url, count) {
  const seo = getSeo(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.homeHeadline,
    headline: seo.homeHeadline,
    description: seo.homeDescription(count),
    url,
    inLanguage: LOCALE_TAGS[locale] || LOCALE_TAGS.en,
    dateModified: UPDATED_AT,
    isAccessibleForFree: true,
    isPartOf: { '@type': 'WebSite', name: 'SkillDrills', url: SITE_URL },
    about: { '@type': 'Thing', name: seo.homeHeadline },
  };
}

export function getDirectoryCollectionFields(locale, count) {
  const seo = getSeo(locale);
  return {
    name: seo.directoryHeadline(count),
    description: seo.directoryDescription(count),
    inLanguage: LOCALE_TAGS[locale] || LOCALE_TAGS.en,
    dateModified: UPDATED_AT,
    isAccessibleForFree: true,
    numberOfItems: count,
  };
}

export function getDirectoryFaqSchema(locale) {
  const seo = getSeo(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LOCALE_TAGS[locale] || LOCALE_TAGS.en,
    dateModified: UPDATED_AT,
    mainEntity: seo.faq.map(([name, text]) => ({
      '@type': 'Question',
      name,
      acceptedAnswer: { '@type': 'Answer', text },
    })),
  };
}
