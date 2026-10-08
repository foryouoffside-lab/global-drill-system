'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Layers, Volume2, VolumeX, Play, RefreshCw, Share2, Users, TrendingUp, ArrowLeft, Zap, ZapOff } from 'lucide-react';

import { isIdleFrameSkippable } from '@/lib/performance';
import generateShareCard, { shareScoreCard } from '../../../../../components/ShareScoreCard';
import { drillAudio } from '../../../../../lib/drillAudio';
import { drillFlash } from '../../../../../lib/drillFlash';
import { drillTimeout } from '../../../../../lib/drillTimeout';
import { drillPenalty } from '../../../../../lib/drillPenalty';
import { getPlayerName } from '../../../../../lib/leaderboard';
import { getFpsScoreGrade, getComboMultiplier } from '../../../../../lib/scoringEngine';
import { getDifficultyProgress, getStartLevel, ramp } from '../../../../../lib/drillDifficulty';
import useDrillFlash from '../../../../../lib/useDrillFlash';
import useUnexpectedExitGuard from '../../../../../lib/useUnexpectedExitGuard';
import DrillCountdown from '../../../../../components/drill/DrillCountdown';
import DrillAccordion from '../../../../../components/drill/DrillAccordion';
import { useTranslation } from '@/lib/i18n/useTranslation';
import DrillFlashOverlay from '../../../../../components/drill/DrillFlashOverlay';
import FpsStartCard from '../../../../../components/drill/FpsStartCard';
import DrillResultCard from '../../../../../components/drill/DrillResultCard';
import useHitBurst from '../../../../../lib/useHitBurst';
import useImmersiveMode from '@/lib/useImmersiveMode';

function RuleItem({ num, text, highlight = '', result }) {
  return (
    <div className="flex items-center gap-3 bg-black px-3.5 py-2.5 rounded-xl border border-white/10 shadow-sm font-sans min-w-0">
      <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-black shadow-lg flex-shrink-0">
        {num}
      </div>
      <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
        <p className="text-xs sm:text-sm font-medium text-gray-100 font-sans truncate">
          {text}{highlight && <span className="font-bold text-white"> ({highlight})</span>}
        </p>
        <div className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg bg-[#050811] border border-white/10 text-white whitespace-nowrap shadow-inner tracking-wide flex-shrink-0">
          {result}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TUNING CONSTANTS
// ============================================================
const DRILL_DURATION = 45; // starting clock only; a run grows past this
const POINTS_PER_HIT = 100;
const POINTS_PER_LEVEL = 1750; // 250 -> 1750 (7x)
const ELITE_SCORE = 24000; // 10000 -> 24000 (~2.4x)
const TIME_PER_HIT = 2; // +2s on clean hit, capped at 60s
const TIME_PENALTY = 1; // -1s on wrong tap or miss (opt-in gated)
const STORAGE_KEY = 'skilldrills_divided_attention_v8';

const getSavedData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { bestScore: 0, bestCombo: 0, bestLevel: 1, totalSessions: 0 };
    return { bestScore: 0, bestCombo: 0, bestLevel: 1, totalSessions: 0, ...JSON.parse(raw) };
  } catch (e) {
    return { bestScore: 0, bestCombo: 0, bestLevel: 1, totalSessions: 0 };
  }
};

const saveData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
};

// Continuous unbounded difficulty with streak heat
const getLevelConfig = (level, combo = 0) => {
  const p = getDifficultyProgress(level); // 0 at L1, 1 at L15, unbounded above
  const heat = (getComboMultiplier(combo) - 1) / 2;
  return {
    ballSpeed: Math.max(180, ramp(1800, 240, p) * (1 - heat * 0.25)),
    numSpeed: Math.max(220, ramp(2000, 300, p) * (1 - heat * 0.25)),
    ballScale: Math.max(0.45, 1.0 - p * 0.45),
    spawnDelayMin: Math.max(60, ramp(500, 80, p)),
    spawnDelayMax: Math.max(100, ramp(700, 140, p))
  };
};

const RULES_ITEMS = [
  { num: "1", text: "Dual Streams", highlight: "Visual + Number", result: "Track Both Channels" },
  { num: "2", text: "Target Hit", highlight: "+100 PTS", result: "Click/Tap Target (+2s, max 60s)" },
  { num: "3", text: "Even Match", highlight: "+100 PTS", result: "MATCH on Even Digits" },
  { num: "4", text: "Miss / Mistake", highlight: "Resets Combo", result: "−0.8s on Penalty" }
];

const ABOUT_TEXT = `Divided Attention is a core cognitive drill designed to measure and train multi-channel visual tracking and simultaneous information processing. Based on dual-task psychological paradigms, this exercise forces the brain to allocate attention across two distinct channels at once: spatial motion tracking and numeric categorization.

In fast-paced tactical environments (such as esports, aviation, high-frequency trading, and emergency response), peak performers must process secondary telemetry while maintaining primary spatial awareness. Divided Attention builds cognitive flexibility by testing your ability to rapidly shift focus between spatial targets and symbolic data streams without sacrificing accuracy on either.

By scaling target speeds and shrinking target dimensions as your score rises, the drill pushes prefrontal executive control networks to their absolute limit.`;

export default function DividedAttentionClient({ copy } = {}) {
  const { locale } = useTranslation();
  const [gameState, setGameState] = useState('start'); // 'start' | 'countdown' | 'playing' | 'gameOver'
  const [isFullscreen, setIsFullscreen] = useState(false);
  useImmersiveMode(isFullscreen); // locks the page behind while the drill fills the screen
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [flashEnabled, setFlashEnabled] = useState(true);
  const [penaltyEnabled, setPenaltyEnabled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [countdownValue, setCountdownValue] = useState(3);

  // Live HUD State
  const [uiScore, setUiScore] = useState(0);
  const [uiLevel, setUiLevel] = useState(1);
  const [uiCombo, setUiCombo] = useState(0);
  const [uiTimeLeft, setUiTimeLeft] = useState(DRILL_DURATION);
  const [bestScore, setBestScore] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [bestLevel, setBestLevel] = useState(1);
  const [totalSessions, setTotalSessions] = useState(0);
  const [isNewBest, setIsNewBest] = useState(false);

  // Active Game State
  const [currentTarget, setCurrentTarget] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [wasMatched, setWasMatched] = useState(true);
  const [ballScale, setBallScale] = useState(1.0);

  // Analytics
  const [analytics, setAnalytics] = useState({
    accuracy: 100,
    visualHits: 0,
    numberHits: 0,
    visualAttempts: 0,
    numberAttempts: 0,
    maxCombo: 0,
    mistakes: 0,
    finalLevel: 1,
    grade: null
  });

  // Engine Refs
  const containerRef = useRef(null);
  const bestLevelRunRef = useRef(1);
  const countdownTimeoutsRef = useRef([]);
  const ballTimerRef = useRef(null);
  const numTimerRef = useRef(null);
  const startingRef = useRef(false);
  const gameActiveRef = useRef(false);
  const lastTimeRef = useRef(DRILL_DURATION);

  const engine = useRef({
    score: 0,
    level: 1,
    combo: 0,
    maxCombo: 0,
    visualHits: 0,
    numberHits: 0,
    visualAttempts: 0,
    numberAttempts: 0,
    mistakes: 0,
    timeLeft: DRILL_DURATION,
    currentTargetId: null,
    currentNumber: null,
    wasMatched: true
  });

  const { flashes, triggerFlash } = useDrillFlash();
  const { bursts, spawnBurst } = useHitBurst();

  // Storage & settings init
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSoundEnabled(drillAudio.isEnabled());
      setFlashEnabled(drillFlash.isEnabled());
      setPenaltyEnabled(drillPenalty.isEnabled(TIME_PER_HIT === 2));
      const saved = getSavedData();
      setBestScore(saved.bestScore || 0);
      setBestCombo(saved.bestCombo || 0);
      setBestLevel(saved.bestLevel || 1);
      setTotalSessions(saved.totalSessions || 0);
    }
  }, []);

  // Clean timers on unmount
  useEffect(() => {
    return () => {
      countdownTimeoutsRef.current.forEach(clearTimeout);
      if (ballTimerRef.current) clearTimeout(ballTimerRef.current);
      if (numTimerRef.current) clearTimeout(numTimerRef.current);
    };
  }, []);

  const { markIntentionalExit } = useUnexpectedExitGuard({
    active: gameState === 'playing' || gameState === 'countdown',
    onUnexpectedExit: () => {
      countdownTimeoutsRef.current.forEach(clearTimeout);
      countdownTimeoutsRef.current = [];
      if (ballTimerRef.current) clearTimeout(ballTimerRef.current);
      if (numTimerRef.current) clearTimeout(numTimerRef.current);
      startingRef.current = false;
      gameActiveRef.current = false;
      setIsFullscreen(false);
      setGameState('start');
    },
  });

  const handleExitDrill = useCallback(async () => {
    markIntentionalExit();
    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];
    if (ballTimerRef.current) clearTimeout(ballTimerRef.current);
    if (numTimerRef.current) clearTimeout(numTimerRef.current);
    startingRef.current = false;
    gameActiveRef.current = false;

    if (typeof document !== 'undefined' && document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch (err) {}
    }
    setIsFullscreen(false);
    setGameState('start');
  }, [markIntentionalExit]);

  // Keyboard and Fullscreen Lifecycle (Rule 6)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleExitDrill();
      }
    };
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isFullscreen) {
        handleExitDrill();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handleExitDrill, isFullscreen]);

  const endGame = useCallback(() => {
    markIntentionalExit();
    gameActiveRef.current = false;
    startingRef.current = false;
    if (ballTimerRef.current) clearTimeout(ballTimerRef.current);
    if (numTimerRef.current) clearTimeout(numTimerRef.current);

    setGameState('gameOver');

    const e = engine.current;

    if (e.currentTargetId !== null) {
      e.visualAttempts += 1;
    }
    if (e.currentNumber !== null && e.currentNumber % 2 === 0 && !e.wasMatched) {
      e.numberAttempts += 1;
    }

    const totalActs = e.visualAttempts + e.numberAttempts;
    const totalHits = e.visualHits + e.numberHits;
    const acc = totalActs > 0 ? Math.round((totalHits / totalActs) * 100) : 0;

    const rating = getFpsScoreGrade(e.score, ELITE_SCORE);
    const gradeObj = {
      letter: rating.grade || rating.letter || 'C',
      label: rating.label || 'Keep Going',
      color: rating.color || 'text-blue-400',
    };

    setAnalytics({
      accuracy: acc,
      visualHits: e.visualHits,
      numberHits: e.numberHits,
      visualAttempts: e.visualAttempts,
      numberAttempts: e.numberAttempts,
      maxCombo: e.maxCombo,
      mistakes: e.mistakes,
      finalLevel: Math.floor(bestLevelRunRef.current),
      grade: gradeObj
    });

    setUiScore(e.score);

    const prevSaved = getSavedData();
    const isNew = e.score > prevSaved.bestScore;
    setIsNewBest(isNew);

    const runBestLevel = Math.max(prevSaved.bestLevel, Math.floor(bestLevelRunRef.current));
    const updatedData = {
      bestScore: Math.max(prevSaved.bestScore, e.score),
      bestCombo: Math.max(prevSaved.bestCombo || 0, e.maxCombo),
      bestLevel: runBestLevel,
      totalSessions: (prevSaved.totalSessions || 0) + 1
    };
    saveData(updatedData);

    setBestScore(updatedData.bestScore);
    setBestCombo(updatedData.bestCombo);
    setBestLevel(updatedData.bestLevel);
    setTotalSessions(updatedData.totalSessions);

    drillAudio.playSessionEnd();
  }, [markIntentionalExit]);

  // Main RAF loop for clock draining
  useEffect(() => {
    if (gameState !== 'playing') return;

    let animId;
    let lastTime = performance.now();

    const loop = (now) => {
      if (isIdleFrameSkippable(gameState === 'playing', now, lastTime)) {
        animId = requestAnimationFrame(loop);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const e = engine.current;
      if (gameActiveRef.current) {
        if (e.timeLeft > 0) e.timeLeft -= dt;
        if (e.timeLeft <= 0) {
          e.timeLeft = 0;
          setUiTimeLeft(0);
          endGame();
          return;
        }

        const ceilSec = Math.ceil(e.timeLeft);
        if (ceilSec !== lastTimeRef.current) {
          lastTimeRef.current = ceilSec;
          setUiTimeLeft(ceilSec);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [gameState, endGame]);

  const registerMiss = useCallback(() => {
    const e = engine.current;
    if (drillPenalty.isEnabled(TIME_PER_HIT === 2)) e.timeLeft -= TIME_PENALTY;
    e.combo = 0;
    setUiCombo(0);
    triggerFlash();
    drillAudio.playPenalty();
  }, [triggerFlash]);

  // Spawning logic
  const spawnBall = useCallback(() => {
    if (ballTimerRef.current) clearTimeout(ballTimerRef.current);
    if (!gameActiveRef.current) return;

    const e = engine.current;
    const config = getLevelConfig(e.level, e.combo);

    const id = Date.now() + Math.random();
    e.currentTargetId = id;
    const targetObj = {
      id,
      x: 15 + Math.random() * 70,
      y: 15 + Math.random() * 70
    };
    setCurrentTarget(targetObj);
    setBallScale(config.ballScale);

    ballTimerRef.current = setTimeout(function checkBallExpiry() {
      if (!gameActiveRef.current) return;
      if (!drillTimeout.isEnabled()) {
        ballTimerRef.current = setTimeout(checkBallExpiry, config.ballSpeed);
        return;
      }
      // Missed target timeout
      e.visualAttempts += 1;
      e.mistakes += 1;
      registerMiss();
      spawnBall();
    }, config.ballSpeed);
  }, [registerMiss]);

  const spawnNumber = useCallback(() => {
    if (numTimerRef.current) clearTimeout(numTimerRef.current);
    if (!gameActiveRef.current) return;

    const e = engine.current;
    const config = getLevelConfig(e.level, e.combo);

    if (e.currentNumber !== null && e.currentNumber % 2 === 0 && !e.wasMatched && drillTimeout.isEnabled()) {
      // Missed an even number
      e.numberAttempts += 1;
      e.mistakes += 1;
      registerMiss();
    }

    let newNum;
    do {
      newNum = Math.floor(Math.random() * 10);
    } while (newNum === e.currentNumber);

    e.currentNumber = newNum;
    e.wasMatched = false;
    setCurrentNumber(newNum);
    setWasMatched(false);

    numTimerRef.current = setTimeout(() => {
      spawnNumber();
    }, config.numSpeed);
  }, [registerMiss]);

  // Interaction handlers
  const handleVisualClick = useCallback((id, x, y, e) => {
    if (e) e.stopPropagation();
    if (!gameActiveRef.current) return;

    const eng = engine.current;
    if (eng.currentTargetId !== id) return;

    if (ballTimerRef.current) clearTimeout(ballTimerRef.current);

    spawnBurst(x, y, 32, '#3b82f6');

    eng.currentTargetId = null;
    setCurrentTarget(null);

    eng.visualHits += 1;
    eng.visualAttempts += 1;
    eng.combo += 1;
    if (eng.combo > eng.maxCombo) eng.maxCombo = eng.combo;

    const levelMult = 1 + getDifficultyProgress(eng.level) * 0.5;
    eng.score += Math.round(POINTS_PER_HIT * getComboMultiplier(eng.combo) * levelMult);

    // Time bonus on clean hit
    eng.timeLeft = Math.min(60, eng.timeLeft + TIME_PER_HIT);

    // Continuous level progression
    const rawLevel = (eng.score / POINTS_PER_LEVEL) + 1;
    eng.level = Math.max(eng.level, rawLevel);
    bestLevelRunRef.current = Math.max(bestLevelRunRef.current, eng.level);

    setUiScore(eng.score);
    setUiLevel(Math.floor(eng.level));
    setUiCombo(eng.combo);
    drillAudio.playHit();

    const config = getLevelConfig(eng.level, eng.combo);
    ballTimerRef.current = setTimeout(spawnBall, config.spawnDelayMin + Math.random() * (config.spawnDelayMax - config.spawnDelayMin));
  }, [spawnBall, spawnBurst]);

  const handleNumberCheck = useCallback((e) => {
    if (e) e.stopPropagation();
    if (!gameActiveRef.current) return;

    const eng = engine.current;
    const num = eng.currentNumber;
    if (num === null) return;

    if (eng.wasMatched) {
      // Double tap on an already-resolved number
      eng.numberAttempts += 1;
      eng.mistakes += 1;
      registerMiss();
      return;
    }

    eng.wasMatched = true;
    setWasMatched(true);

    if (num % 2 === 0) {
      eng.numberHits += 1;
      eng.numberAttempts += 1;
      eng.combo += 1;
      if (eng.combo > eng.maxCombo) eng.maxCombo = eng.combo;

      const levelMult = 1 + getDifficultyProgress(eng.level) * 0.5;
      eng.score += Math.round(POINTS_PER_HIT * getComboMultiplier(eng.combo) * levelMult);

      // Time bonus on clean hit
      eng.timeLeft = Math.min(60, eng.timeLeft + TIME_PER_HIT);

      // Continuous level progression
      const rawLevel = (eng.score / POINTS_PER_LEVEL) + 1;
      eng.level = Math.max(eng.level, rawLevel);
      bestLevelRunRef.current = Math.max(bestLevelRunRef.current, eng.level);

      setUiScore(eng.score);
      setUiLevel(Math.floor(eng.level));
      setUiCombo(eng.combo);
      drillAudio.playHit();
    } else {
      // Wrong match on odd number
      eng.numberAttempts += 1;
      eng.mistakes += 1;
      registerMiss();
    }
  }, [registerMiss]);

  // Enter Drill
  const enterDrill = useCallback(async () => {
    if (startingRef.current) return;
    startingRef.current = true;

    setIsFullscreen(true);

    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];
    if (ballTimerRef.current) clearTimeout(ballTimerRef.current);
    if (numTimerRef.current) clearTimeout(numTimerRef.current);

    drillAudio.init();

    const startLevel = getStartLevel();
    bestLevelRunRef.current = startLevel;

    setIsNewBest(false);
    setUiScore(0);
    setUiLevel(startLevel);
    setUiCombo(0);
    setUiTimeLeft(DRILL_DURATION);
    lastTimeRef.current = DRILL_DURATION;

    engine.current = {
      score: 0,
      level: startLevel,
      combo: 0,
      maxCombo: 0,
      visualHits: 0,
      numberHits: 0,
      visualAttempts: 0,
      numberAttempts: 0,
      mistakes: 0,
        timeLeft: DRILL_DURATION,
      currentTargetId: null,
      currentNumber: null,
      wasMatched: true
    };

    setGameState('countdown');
    setCountdownValue(3);
    drillAudio.playCountdownTick();

    const t1 = setTimeout(() => {
      setCountdownValue(2);
      drillAudio.playCountdownTick();
    }, 700);

    const t2 = setTimeout(() => {
      setCountdownValue(1);
      drillAudio.playCountdownTick();
    }, 1400);

    const t3 = setTimeout(() => {
      setCountdownValue('GO');
      drillAudio.playGo();
    }, 2100);

    const t4 = setTimeout(() => {
      gameActiveRef.current = true;
      startingRef.current = false;
      setGameState('playing');
      spawnBall();
      spawnNumber();
    }, 2450);

    countdownTimeoutsRef.current = [t1, t2, t3, t4];
  }, [spawnBall, spawnNumber]);

  const shareResult = useCallback(async () => {
    const url = 'https://skilldrills.online/drills/cognitive/attention/divided-attention';
    try {
      const canvas = generateShareCard({
        score: uiScore,
        accuracy: analytics.accuracy,
        speed: 0,
        drillName: 'Divided Attention Test',
        rank: analytics.grade?.letter || 'A',
        rankName: analytics.grade?.label || 'DUAL TASK MASTER',
        playerName: getPlayerName(),
        level: analytics.finalLevel,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        url: 'skilldrills.online/drills/cognitive/attention/divided-attention'
      });
      await shareScoreCard(url, canvas);
    } catch (e) {
      if (navigator.share) {
        navigator.share({ title: 'Divided Attention Test Score', text: `I scored ${uiScore} on Divided Attention Test!`, url }).catch(() => {});
      }
    }
  }, [uiScore, analytics]);

  return (
    <div className="min-h-screen bg-[#050508] text-white flex flex-col font-sans select-none">
      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col gap-6">
        {/* Title — left-aligned and sitting directly above the drill box */}
        {!isFullscreen && (
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              <span data-seo-kw="1">{copy?.title || "Divided Attention Test"}</span>
              <span className="block text-sm font-semibold text-slate-400 mt-1">{copy?.subtitle || "Divided attention test for tracking moving targets while matching numbers and training multitasking focus"}</span>
            </h1>
          </div>
        )}

        {/* Live Stat Cards — full width flush with the drill container */}
        {!isFullscreen && (
          <div className="grid grid-cols-4 gap-2 w-full -mb-2">
            {[
              { label: copy?.statScore || 'Score', value: uiScore, tone: 'text-blue-400' },
              { label: copy?.statTime || 'Time', value: `${uiTimeLeft}s`, tone: uiTimeLeft <= 10 && gameState === 'playing' ? 'text-red-400 animate-pulse' : 'text-white' },
              { label: copy?.statLevel || 'Level', value: `L${uiLevel}`, tone: 'text-blue-400' },
              { label: copy?.statBest || 'Best Score', value: bestScore, tone: 'text-amber-400' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-white/[0.06] bg-white/[0.015] px-2 py-2 text-center">
                <div className="text-[9.5px] uppercase font-semibold text-slate-500 tracking-[0.12em]">{s.label}</div>
                <div className={`text-lg sm:text-xl font-black tabular-nums font-mono mt-0.5 ${s.tone}`}>{s.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Game Stage Container */}
        <div 
          ref={containerRef} 
          className={
            isFullscreen ? 'fixed inset-0 z-[100] w-screen h-[100dvh] bg-[#050508] flex flex-col items-center justify-center' : 'w-full rounded-2xl aspect-video min-h-[460px] md:min-h-[500px] max-h-[88vh] max-md:portrait:aspect-[3/4] max-md:portrait:min-h-[420px] max-md:portrait:max-h-[76vh] max-md:landscape:min-h-[340px] max-md:landscape:max-h-[85vh] bg-[#080811] border border-white/10 relative overflow-hidden flex flex-col'
          }
        >
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          {/* Screen Flashes */}
          <DrillFlashOverlay flashes={flashes} />

          {/* IN-BOX OVERLAY HUD */}
          {(gameState === 'playing' || gameState === 'countdown') && (
            <>
              {/* Score - Top Left */}
              <div className="absolute top-4 left-4 z-30 pointer-events-none flex flex-col items-start gap-0.5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{copy?.statScore || 'Score'}</p>
                  <p className="text-2xl sm:text-3xl font-black text-white tabular-nums leading-tight">{uiScore}</p>
                </div>
              </div>

              {/* Time Left - Top Right */}
              <div className="absolute top-4 right-4 z-30 pointer-events-none text-right">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{copy?.timeLeft || 'Time Left'}</p>
                <p className={`text-2xl sm:text-3xl font-black tabular-nums leading-tight ${uiTimeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>{uiTimeLeft}s</p>
              </div>
            </>
          )}

          {/* IN-GAME HUD SOUND + FLASH TOGGLES */}
          {(gameState === 'playing' || gameState === 'countdown') && (
            <div className="absolute bottom-4 max-sm:bottom-32 right-4 z-40 flex items-center gap-2">
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setFlashEnabled((v) => {
                    drillFlash.setEnabled(!v);
                    return !v;
                  });
                }}
                className="p-2.5 rounded-full bg-black/60 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Toggle Miss Flash"
              >
                {flashEnabled ? <Zap className="w-4 h-4 text-red-400" /> : <ZapOff className="w-4 h-4 text-slate-500" />}
              </button>
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setSoundEnabled((v) => {
                    drillAudio.setEnabled(!v);
                    return !v;
                  });
                }}
                className="p-2.5 rounded-full bg-black/60 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Toggle Sound"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              </button>
            </div>
          )}

          {/* DUAL-TASK GAMEPLAY PLAYING AREA */}
          {gameState === 'playing' && (
            <div className="relative w-full h-full flex flex-col sm:flex-row">
              {/* Target Canvas Area */}
              <div className="relative flex-1 bg-transparent overflow-hidden">
                {currentTarget && (
                  <button
                    type="button"
                    onPointerDown={(e) => handleVisualClick(currentTarget.id, currentTarget.x, currentTarget.y, e)}
                    className="absolute z-20 focus:outline-none touch-none bg-transparent border-none cursor-pointer"
                    style={{
                      left: `${currentTarget.x}%`,
                      top: `${currentTarget.y}%`,
                      transform: `translate(-50%, -50%) scale(${ballScale})`
                    }}
                  >
                    <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 hover:scale-110 active:scale-90 transition-transform duration-100">
                      {/* Outer pulse ring */}
                      <div className="absolute -inset-2 rounded-full border border-[#3b82f6]/50 animate-ping opacity-60 pointer-events-none" />

                      {/* Tactical Target SVG matching 180-degree-awareness */}
                      <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] pointer-events-none" viewBox="0 0 100 100">
                        {/* Ghost outer ring */}
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.25" />
                        {/* Tactical outer ring */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="2.5" opacity="0.6" />
                        {/* Outer crosshair ticks */}
                        <line x1="50" y1="4" x2="50" y2="10" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
                        <line x1="50" y1="90" x2="50" y2="96" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
                        <line x1="4" y1="50" x2="10" y2="50" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
                        <line x1="90" y1="50" x2="96" y2="50" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
                        {/* Filled body */}
                        <circle cx="50" cy="50" r="32" fill="#3b82f6" opacity="0.85" />
                        {/* Inner highlight sheen */}
                        <circle cx="50" cy="50" r="22" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
                        {/* Bright white core dot */}
                        <circle cx="50" cy="50" r="7" fill="#ffffff" />
                      </svg>
                    </div>
                  </button>
                )}

                {/* Hit-impact bursts (visual target stream only — the MATCH button is not a spatial target) */}
                {bursts.map((b) => (
                  <div key={b.id} className="absolute z-40 pointer-events-none" style={{ left: `${b.x}%`, top: `${b.y}%`, transform: 'translate(-50%,-50%)' }}>
                    <div className="fx-hit-ring" style={{ left: -b.r, top: -b.r, width: b.r * 2, height: b.r * 2, borderWidth: 3, borderColor: b.color }} />
                    {b.sparks.map((s, i) => (
                      <div key={i} className="fx-hit-spark" style={{ left: -3, top: -3, width: 6, height: 6, background: b.color, '--tx': `${s.dx}px`, '--ty': `${s.dy}px` }} />
                    ))}
                  </div>
                ))}
              </div>

              {/* Number Stream Panel */}
              <div className="w-full sm:w-64 h-[120px] sm:h-full flex-shrink-0 bg-gray-950/95 backdrop-blur-md border-t sm:border-t-0 sm:border-l border-gray-800 z-30 flex flex-row sm:flex-col items-center justify-between sm:justify-center p-3 sm:p-6 sm:space-y-6">
                <div className="hidden sm:block text-center pointer-events-none">
                  <h3 className="text-lg font-black text-white uppercase">{copy?.match || 'Match'}</h3>
                  <h3 className="text-sm font-bold text-blue-400 tracking-widest animate-pulse">{copy?.evenNumbers || 'EVEN NUMBERS'}</h3>
                </div>

                <div className="relative flex items-center justify-center w-20 h-20 sm:w-32 sm:h-32 text-4xl sm:text-6xl font-black rounded-2xl bg-black border border-blue-500/30 text-white pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
                  {currentNumber !== null ? (
                    <span key={currentNumber} className="animate-in slide-in-from-bottom-2 fade-in duration-150 block">
                      {currentNumber}
                    </span>
                  ) : '?'}

                  {wasMatched && currentNumber !== null && currentNumber % 2 === 0 && (
                    <div className="absolute inset-0 rounded-2xl bg-green-500/20 border-2 border-green-500" />
                  )}
                </div>

                <div className="flex flex-col items-center w-28 sm:w-full">
                  <button
                    type="button"
                    onPointerDown={handleNumberCheck}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-black text-lg sm:text-xl active:scale-95 transition-all hover:from-blue-500 hover:to-indigo-500 border border-blue-400/30 cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  >
                    {copy?.match || 'MATCH'}
                  </button>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">{copy?.tapEven || 'Tap when EVEN'}</p>
                </div>
              </div>
            </div>
          )}

          {/* START CARD */}
          {gameState === 'start' && (
            <FpsStartCard
              icon={Layers}
              accent="blue"
              title={copy?.startTitle || "Divided Attention Test"}
              subtitle={copy?.startSubtitle || "Dual-Task Stream"}
              isTouchOnlyDevice={false}
              onStart={enterDrill}
            />
          )}

          {/* COUNTDOWN OVERLAY */}
          {gameState === 'countdown' && (
            <DrillCountdown value={countdownValue} subtitle={copy?.getReady || "GET READY"} />
          )}

          {/* UNIVERSAL RESULT CARD */}
          {gameState === 'gameOver' && analytics.grade && (
            <DrillResultCard
              accent="blue"
              grade={analytics.grade}
              score={uiScore}
              isNewBest={isNewBest}
              stats={[
                { label: copy?.dualAccuracy || 'Dual Accuracy', value: analytics.accuracy, suffix: '%' },
                { label: copy?.hits || 'Hits', value: analytics.visualHits + analytics.numberHits },
                { label: copy?.misses || 'Misses', value: analytics.mistakes },
                { label: copy?.peakLevel || 'Peak Level', value: `Lv. ${analytics.finalLevel}` },
              ]}
              onPlayAgain={enterDrill}
              onBeforeShare={() => setIsFullscreen(false)}
              onShare={shareResult}
              onExit={handleExitDrill}
            />
          )}

        </div>

        {/* Stage Caption */}
        {!isFullscreen && (
          <p className="text-xs text-slate-400 leading-relaxed -mt-2">
            {copy?.caption || 'Track moving spatial targets while simultaneously monitoring the number stream for even digits.'}
          </p>
        )}

        {/* ── ACCORDIONS ── */}
        {!isFullscreen && (
        <div className="[&>div]:!mt-0">
        <DrillAccordion
          id="rules"
          title={copy?.rulesTitle || "Drill Instructions & Scoring System"}
          isOpen={openAccordion === 'rules'}
          onToggle={() => setOpenAccordion(openAccordion === 'rules' ? null : 'rules')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {RULES_ITEMS.map((item, i) => (
              <RuleItem key={i} num={item.num} text={copy?.ruleItems?.[i]?.text || item.text} highlight={copy?.ruleItems?.[i]?.highlight || item.highlight} result={copy?.ruleItems?.[i]?.result || item.result} />
            ))}
          </div>
        </DrillAccordion>

        <DrillAccordion
          id="about"
          title={copy?.aboutTitle || "About Divided Attention Test & Dual-Task Training"}
          isOpen={openAccordion === 'about'}
          onToggle={() => setOpenAccordion(openAccordion === 'about' ? null : 'about')}
        >
          <div className="space-y-8">
            <section>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-gray-300">
                  {copy?.aboutLead || 'Test your split focus and dual-task processing capacity. When two concurrent tasks compete for central executive resources, performance suffers from psychological refractory bottlenecks and cross-talk interference (Pashler, 1994; Wickens, 2002).'}
                </p>
                {(copy?.aboutText || (locale === 'en' ? ABOUT_TEXT : '')).split('\n\n').filter(Boolean).map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-gray-300">{para}</p>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-gray-800 bg-white/[0.02]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center"><Users className="w-3.5 h-3.5 text-white" /></div>
                  <h5 className="text-xs font-bold text-white">{copy?.audienceTitle || 'Who Should Use This?'}</h5>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{copy?.audienceText || 'Air traffic controllers, ER nurses, esports players tracking minimap and targets at once, and drivers who need to safely process multiple input streams.'}</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-800 bg-white/[0.02]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5 text-white" /></div>
                  <h5 className="text-xs font-bold text-white">{copy?.skillsTitle || 'Skills Improved'}</h5>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{copy?.skillsText || 'Dual-task capacity, multi-channel visual tracking, numerical cognition, and prefrontal executive resource allocation.'}</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-800 bg-white/[0.02]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center"><Layers className="w-3.5 h-3.5 text-white" /></div>
                  <h5 className="text-xs font-bold text-white">{copy?.flexibilityTitle || 'Parallel Processing'}</h5>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">Track the spatial target stream and the numerical stream at once — reacting to one without letting accuracy on the other channel collapse.</p>
              </div>
            </div>
          </div>
        </DrillAccordion>
        </div>
        )}

      </main>
    </div>
  );
}
