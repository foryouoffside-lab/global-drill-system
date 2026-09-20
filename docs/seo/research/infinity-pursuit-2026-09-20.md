# Infinity Pursuit: native SEO/AEO/GEO research (2026-09-20)

## Scope and guardrails

This research supports one drill only: `/drills/visual-tracking/infinity-pursuit`, a browser exercise in which a visible target travels along a figure-eight/Lemniscate path. The page is positioned as practice for smooth visual pursuit, vertical-midline crossing and binocular coordination; it is not a clinical eye examination or a promise to improve eyesight. No URL was submitted to Bing or IndexNow.

Search demand was checked by market, not by translating an English seed. Bing Webmaster keyword endpoints were queried read-only for each market. Bing returned zero exact and broad volume for the long-tail phrases below; that is an instrument limitation, not proof of zero demand. Google Trends and Search Console data were not available in this environment, so “high demand/low competition” and a number-one ranking cannot be guaranteed. The keyword choices therefore combine native web evidence, local terminology and intent fit, with the long-tail terms kept natural rather than stuffed.

## Native market clusters

| Market | Primary native intent | Supporting native terms | Search interpretation |
|---|---|---|---|
| Japan (`ja-JP`) | `8の字 眼球運動 トレーニング`, `フィギュアエイトトレーニング` | `視線追従`, `追従性眼球運動`, `動体視力`, `正中線 目の運動`, `眼球運動 トレーニング` | Local sources use `8の字`, `フィギュアエイト`, and the clinical/sports-vision term `追従性眼球運動`. |
| Korea (`ko-KR`) | `8자 안구 운동 훈련`, `무한대 눈 운동` | `시선 추적`, `안구 운동`, `정중선 교차`, `양안 협응`, `동체시력` | Korean research and training sources use `추종 안구 운동`, `안구 운동`, and `양안 시기능`; consumer copy uses the simpler `눈으로 8자 그리기`. |
| Germany (`de-DE`) | `Liegende Acht Augentraining`, `Blickverfolgung liegende Acht` | `Augenübung liegende Acht`, `Blickverfolgung`, `Augenkoordination`, `Mittellinie überkreuzen`, `beidäugige Koordination` | German sources consistently use `Liegende Acht` and `Blickverfolgung`; the page avoids wellness claims that exceed the evidence. |
| Brazil (`pt-BR`) | `exercício ocular oito deitado`, `exercício de figura 8 para os olhos` | `rastreamento ocular`, `coordenação binocular`, `cruzamento da linha média`, `movimento ocular`, `perseguição suave` | Brazilian Portuguese sources use `figura do oito` and `oito deitado`; `rastreamento ocular` is also an established research term. |
| Spain (`es-ES`) | `ejercicio ocular figura ocho`, `seguimiento ocular ocho` | `ocho tumbado`, `coordinación binocular`, `cruzar la línea media`, `movimiento ocular`, `seguimiento suave` | Spanish visual-health sources use `figura ocho`, `ocho tumbado`, `seguimiento ocular` and `movimientos oculares`. |
| France (`fr-FR`) | `exercice oculaire en huit`, `poursuite visuelle en huit` | `huit couché`, `coordination binoculaire`, `franchissement de la ligne médiane`, `mouvement des yeux`, `poursuite fluide` | French orthoptic sources use `poursuite oculaire`, `poursuite lisse` and `huit couché`; medical terminology was kept distinct from unsupported treatment promises. |

## Live native sources

- Japan: [フィギュアエイトトレーニング](https://shin-yu.net/mekintore/video/figure-eight-training.html) uses `フィギュアエイトトレーニング`, `8の字`, `視線切り替え` and head-still tracking; [わかさ生活の眼球運動トレーニング](https://kenkyu.wakasa.jp/training/eyemovement/) uses `追従性眼球運動`.
- Korea: [한국안광학회/대한시과학회 research abstract](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11527189) uses `추종 안구 운동`, `충동 안구 운동`, `양안 시기능` and reports a small controlled training study; [KOCW eye-movement lecture](https://contents2.kocw.or.kr/KOCW/document/2016/cup/kimjindong/5.pdf) defines coordinated binocular movement.
- Germany: [Physitrack Blickverfolgung – Liegende Acht](https://de.physitrack.com/home-exercise-video/blickverfolgung---liegende-acht) uses `Blickverfolgung` and `Liegende Acht`; [schule.at](https://www.schule.at/lernwelt/bewegungsideen/liegende-acht) describes eye-only tracking and crossing the midline.
- Brazil: [Lenscope](https://lenscope.com.br/blog/exercicios-para-melhorar-a-visao/) uses `A figura do oito` and `oito deitado`; [SciELO Brazil](https://www.scielo.br/j/delta/a/mSChQsvsKJkdvZPdJLnv8wh/?lang=pt) documents the native research term `rastreamento ocular`.
- Spain: [Acción Visión España](https://www.esvision.es/ejercicios-sencillos-para-la-salud-visual/) uses `Ejercicio de Figura Ocho`; [Optonet](https://optonet.es/docs/movimientos-oculares/) uses `seguimientos` and `coordinación binocular`.
- France: [Académie nationale de médecine](https://www.academie-medecine.fr/le-dictionnaire/index.php?q=mouvement+de+poursuite.) defines `poursuite oculaire` and `poursuite fluide`; [Centre Saint-Marc Grenoble](https://www.centresaintmarc-grenoble.fr/exercice-orthoptie-maison/) uses `poursuite lisse` for a slow circle or eight.

## Bing read-only checks

| Market | Exact seed | Broad seed | Related-seed observation |
|---|---:|---:|---|
| `ja-JP` | 0 | 0 | No related terms returned for the native long-tail seed. |
| `ko-KR` | 0 | 0 | Broad `안구 운동` results were noisy; local specialist language was retained. |
| `de-DE` | 0 | 0 | `Liegende Acht` related results were dominated by the number eight and unrelated entities. |
| `pt-BR` | 0 | 0 | Broad `exercício ocular` was noisy; figure-eight wording was retained from local sources. |
| `es-ES` | 0 | 0 | Broad `ejercicio ocular` was dominated by generic exercise queries. |
| `fr-FR` | 0 | 0 | Broad `exercice oculaire` was dominated by school exercise queries. |

## On-page SEO/AEO/GEO decisions

- Each locale receives native metadata, headings, schema labels, technique copy, calibration steps and ten native FAQs. No English page is translated into another language.
- The answer-first copy defines what the drill does, how to use it, what to measure and when to stop. JSON-LD uses the same localized entities and includes `dateModified`.
- Country hreflang remains handled by the application’s existing locale routing. No claim of guaranteed first place is made; actual performance must be validated after deployment with Google Search Console, local SERPs and market-level analytics.
