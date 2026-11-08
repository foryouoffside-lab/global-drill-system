# Pass 3 progress - reaction-speed, ONE page x ONE locale (coordinator inline, 2026-11-08)

Resume rule: take the first unticked line, do it, tick it, append one line of evidence. Audit with
`python <scratchpad>/audit.py <path-without-leading-slash>` (dev server :3000) - checks title, 1 h1, FAQ JSON-LD == visible, no noindex, no spacebar/aggregateRating. Script copy: `_audit.py` in this folder.
Rules: no new Google/Naver queries; Bing kw max 1 run per market; every mechanic claim verified against the drill client; no fabricated stats/tiers; FAQ JSON-LD must equal visible text.

## Go/No-Go (spacebar claim false + fabricated physiology tiers in ko/de/fr/pt/es)
- [x] ja go/no-go - Go/No-Go課題 (AC #1 suggestion; Bing 0)
- [x] ko go/no-go - 고노고 과제 (AC; Bing 0) - rewritten from verified ja template, audit OK
- [x] de go/no-go - Go/No-Go-Test (Bing 0, descriptive) - audit OK
- [x] fr go/no-go - test Go/No-Go (Bing `go no go` 57, mixed intent) - audit OK
- [x] pt go/no-go - teste Go/No-Go + controle inibitório (Bing 0) - audit OK
- [x] es go/no-go - test Go/No-Go + control inhibitorio (Bing ES 29) - audit OK

## Timing game (reaction-time-test)
- [x] es reaction-time-test - "parar el cronómetro a ciegas" (descriptive, Bing 0); 1-8 s blind target verified

## Remaining pages - PARALLEL RUN (owner asked for agents, 2026-11-08)
8 background agents, ONE PER DRILL (exclusive file ownership: lib/i18n/drills/<file>.js + app/<6 loc>/drills/reaction-speed/<drill>/page.js), each walking ko->ja->de->fr->pt->es.
Brief: `_AGENT_BRIEF_PASS3.md`. Per-drill resume log: `_pass3_<drill>.log` (one line per finished locale).
Drills: barrier-sequence-pursuit, market-doors-pursuit, fps-tracking-trainer, saccadic-gallery, visual-tracking-speed-test, reflex-training-drill, reaction-game, reaction-time-test (es done).
IF CHAT DIES: for each drill whose log has < 6 locales (reaction-time-test: < 5), relaunch one general-purpose agent with the brief + "resume: skip locales already in the log".
Coordinator also did: fr hub DONE (primary temps de réaction 66-71 exact; title+h1+desc), keyboard claims removed from hub FAQ+hardware copy in all 7 locales (drill keydown = Escape only); timing-game h1 fix (subtitle moved out of <h1>, ReactionTimeTestClient.tsx); fr hub still TODO (coordinator).
Bing re-run (ja+pt seeds) done -> `_work-p3-retry.jsonl`: ja 置きエイム 362/876, valorant 置きエイム 練習 157 (owner = ja fps/angle-hold-trainer); pt aim trainer 655, treino de mira valorant 363, aim trainer valorant 97.
Cannibalization logged for FPS pass: ja barrier vs fps/angle-hold both titled 置きエイム練習 (barrier moves off); pt "treino de mira" on market-doors + fps hub + angle-hold; de/fr/es angle-hold titled plain "Aim Trainer".

## Old checklist (superseded by the per-drill logs)
- [ ] ko: saccadic-gallery, barrier-sequence-pursuit, market-doors-pursuit, reaction-time-test
- [ ] ja: fps-tracking-trainer, barrier-sequence-pursuit, market-doors-pursuit
- [ ] de: reflex-training-drill, reaction-game, reaction-time-test, saccadic-gallery, visual-tracking-speed-test, fps-tracking-trainer, barrier, market-doors
- [ ] fr: hub, reaction-game, reaction-time-test, saccadic-gallery, visual-tracking-speed-test, fps-tracking-trainer, barrier, market-doors
- [ ] pt: saccadic-gallery, visual-tracking-speed-test, fps-tracking-trainer, barrier
- [ ] es: market-doors, saccadic-gallery, visual-tracking-speed-test, fps-tracking-trainer, barrier

## Final
- [ ] npx next build (never npm run build) -> full audit of all 66 locale reaction pages -> commit -> owner OK to push
- light-reaction (coordinator): fabricated tier physiology + 'based on literature' notes replaced with SkillDrills practice-band tables in ko/de/fr/pt/es (ja already clean); fr/es/pt per-stage physiology ms timings + 'neuroplasticity raises cortico-spinal excitability' + 'ganglion depolarization' rewritten; delay claim 300-2500 ms verified vs StrobeLatencyClient. Audit OK x6.
- reaction-time-test agent DONE (ko/ja/de/fr/pt, audits OK); coordinator fixed es rule1Highlight -> '+250 PTS × combo'.
- DONE agents: reaction-time-test, reaction-game, barrier-sequence-pursuit, reflex-training-drill, visual-tracking-speed-test (all audits OK; see _pass3_<drill>.log).
- Coordinator follow-ups done: es timing rule1Highlight '+250 PTS x combo' + ring wording; client fallback penalty text -0.8s -> -1s in 7 clients (code TIME_PENALTY=1 everywhere).
- FINDING (owner decision): every reaction drill calls drillPenalty.isEnabled(TIME_PER_HIT === 2) => time penalty is FORCED ON; the /drills landing Timeout toggle has no effect on these drills, and client "Zero penalties (default)" branches are dead. Copy now describes the forced -1s.
- Waiting: market-doors-pursuit, fps-tracking-trainer, saccadic-gallery.
- DONE fps-tracking-trainer (ja 動く的 エイム練習, de bewegliche Ziele treffen, fr tir sur cible mobile, pt acertar alvo em movimento, es disparar a objetivos en movimiento; fake '% time on target' column removed). FPS-PASS TODO: ko 트래킹 에임 연습 shared by reaction fps-tracking-trainer + fps/strafe-tracking; en fpsTracking benchmark still has fake time-on-target column. Waiting: market-doors, saccadic.
- DONE market-doors-pursuit (de Ecken checken trainieren, fr Vérifier les angles en FPS, es Limpiar ángulos en FPS; random-door + forced penalty copy fixed). FPS-PASS TODO: pt 'treino de mira' now on market-doors + fps/angle-hold + pt fps hub; ko 에임 테스트 (58) -> motor aim-trainer secondary. Waiting: saccadic only.
- DONE saccadic-gallery (fr Exercice de saccades oculaires, pt Exercícios Sacádicos Online, es Ejercicios Sacádicos Online; fake saccade-latency norms + peripheral/centre-marker claims removed; pickSources fischer1984 (nonexistent key, silently dropped) -> fischer1993). FPS/VISUAL-PASS TODO: de visual hub title also starts "Augentraining".
- ALL 8 AGENTS DONE 2026-11-08. Next: final audit (77 pages) -> hub card names (lib/i18n/reactionSpeedHubNative.js line ~110) synced to final H1s -> red-flag grep -> npx next build -> commit -> ask owner to push.
