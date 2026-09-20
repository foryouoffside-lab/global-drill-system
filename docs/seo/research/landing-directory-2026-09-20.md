# Landing and all-drills directory SEO/AEO/GEO research — 2026-09-20

## Scope and data integrity

This audit covers the English and six supported locale homepages plus the all-drills directory. The registry currently contains 82 drills across eight categories. Several localized metadata blocks still said 80 or 81, so the implementation derives the count from `DRILLS.length`.

This is native search-intent research, not a translated keyword list. Search result review and Google Trends seeds are evidence for phrasing and intent only; no Google or Bing monthly volume, competition score, or ranking position is claimed without first-party data. No Bing submission or IndexNow request was made.

## Native landing-page keyword clusters

### Korea — `ko-KR`

`무료 에임 연습 사이트`, `발로란트 에임 연습`, `반응속도 테스트`, `CPS 테스트`, `기억력 게임`, `뇌 훈련 게임`, `인지 훈련`, `시각 추적 훈련`, `손눈협응 훈련`.

### Japan — `ja-JP`

`無料 エイム練習`, `エイムトレーナー 無料`, `反射神経 テスト`, `脳トレ 無料`, `記憶力 ゲーム`, `動体視力 テスト`, `CPS テスト`, `オンライン トレーニング`.

Japanese results and app listings use `反射神経測定`, `エイム練習`, and `脳トレ` as natural mixed gaming/brain-training intent rather than a literal translation of “reaction training”.

### Germany — `de-DE`

`Aim Trainer kostenlos`, `Aim Trainer online`, `Gehirntraining kostenlos`, `Reaktionstest online`, `Gedächtnistraining`, `Konzentration trainieren`, `CPS Test`, `Reflexe testen`, `Online-Drills kostenlos`.

German result pages commonly promise short browser exercises, free access, and no account; the metadata leads with `Aim Trainer kostenlos` and `Gehirntraining` while keeping the platform claim factual.

### Brazil — `pt-BR`

`treino de mira grátis`, `aim trainer online`, `teste de tempo de reação`, `jogos mentais grátis`, `treino cognitivo`, `teste de memória`, `teste de CPS`, `exercícios de concentração`, `treinos online grátis`.

Brazilian Portuguese uses `treino`, `teste`, and `jogos mentais` naturally. The site copy avoids the unnatural direct translation “drills” in visible user-facing text.

### Spain / Spanish market — `es-ES`

`aim trainer gratis`, `entrenamiento de puntería`, `test de reflejos`, `juegos mentales gratis`, `entrenamiento cognitivo`, `test de memoria`, `test de CPS`, `ejercicios de concentración`, `ejercicios online gratis`.

Spanish result pages group `memoria`, `atención`, `reflejos`, and `velocidad de pensamiento` under `juegos mentales` and `entrenamiento cognitivo`; the directory metadata keeps the catalogue intent explicit.

### France — `fr-FR`

`aim trainer gratuit`, `entraînement à la visée`, `test de réflexes`, `jeux cérébraux gratuits`, `entraînement cérébral`, `test de mémoire`, `test CPS`, `exercices de concentration`, `exercices en ligne gratuits`.

French results use `jeux cérébraux`, `entraînement cérébral`, `réflexes`, and `test de mémoire` for broad catalogue intent. The title does not force the English “brain training” phrase into French pages.

## Live result references

- Japan: [反射神経測定 and aim practice listing](https://apps.apple.com/jp/app/%E5%8F%8D%E5%B0%84%E7%A5%9E%E7%B5%8C%E6%B8%AC%E5%AE%9A-%E6%97%A5%E3%80%85%E3%81%AE-%E3%82%A8%E3%82%A4%E3%83%A0%E7%B7%B4%E7%BF%92-%E3%82%84-%E8%84%B3%E3%83%88%E3%83%AC-%E3%81%AB%E6%9C%80%E9%81%A9%E3%82%B2%E3%83%BC/id1589211472), [MIKIRI](https://mikiri.app/)
- Germany: [Shooting Aim Trainer](https://shootingaimtrainer.com/de/), [ReflexStats](https://reflexstats.com/de/), [Ausbildungspark Gedächtnistraining](https://www.ausbildungspark.com/einstellungstest/gedaechtnistraining)
- Brazil: [Shooting Aim Trainer](https://shootingaimtrainer.com/pt/), [PlayingMind](https://playingmind.com/pt-BR/), [ReflexStats](https://reflexstats.com/pt/)
- Spain: [BB Gym](https://bbgym.club/es/trainers/), [NEURA Spanish](https://neurabrain.app/es), [PlayingMind](https://playingmind.com/es/)
- France: [Mind Skills Arcade](https://www.mindskillsarcade.com/fr.html), [Train the Brain](https://trainthebrain.app/fr), [Mentilus](https://www.mentilus.com/fr/)

Google Trends follow-up seeds:

- KR: `https://trends.google.com/trends/explore?geo=KR&q=%EB%AC%B4%EB%A3%8C%20%EC%97%90%EC%9E%84%20%EC%97%B0%EC%8A%B5`
- JP: `https://trends.google.com/trends/explore?geo=JP&q=%E7%84%A1%E6%96%99%20%E3%82%A8%E3%82%A4%E3%83%A0%E7%B7%B4%E7%BF%92`
- DE: `https://trends.google.com/trends/explore?geo=DE&q=Aim%20Trainer%20kostenlos`
- BR: `https://trends.google.com/trends/explore?geo=BR&q=treino%20de%20mira%20gr%C3%A1tis`
- ES: `https://trends.google.com/trends/explore?geo=ES&q=aim%20trainer%20gratis`
- FR: `https://trends.google.com/trends/explore?geo=FR&q=aim%20trainer%20gratuit`

## Implementation checklist

- Use dynamic `DRILLS.length` in all titles, descriptions, visible directory copy, and collection schemas.
- Keep locale-specific title, description, keywords, canonical, Open Graph, Twitter, and `hreflang` metadata.
- Add `WebPage`/`CollectionPage` language and modification signals without inventing search volume.
- Keep the existing native homepage copy and directory FAQ blocks; only replace stale metadata and add missing root-directory AEO content.
- Do not localize legal or search utility pages as SEO landing pages: `/terms` is legal content and `/search` is intentionally noindex.
- Validate titles, descriptions, schemas, canonical URLs, alternates, and the 30-point global audit before deployment.
