'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Brain, Volume2, VolumeX, Eye, Zap, ZapOff,
  Share2, ArrowLeft, RefreshCw, Layers, Users, TrendingUp, Repeat
} from 'lucide-react';

import { drillAudio } from '../../../../../lib/drillAudio';
import { drillFlash } from '../../../../../lib/drillFlash';
import { getPlayerName } from '../../../../../lib/leaderboard';
import { getFpsScoreGrade } from '../../../../../lib/scoringEngine';
import { getDifficultyProgress, getStartLevel } from '../../../../../lib/drillDifficulty';
import useDrillFlash from '../../../../../lib/useDrillFlash';
import useUnexpectedExitGuard from '../../../../../lib/useUnexpectedExitGuard';
import DrillCountdown from '../../../../../components/drill/DrillCountdown';
import DrillAccordion from '../../../../../components/drill/DrillAccordion';
import DrillFlashOverlay from '../../../../../components/drill/DrillFlashOverlay';
import FpsStartCard from '../../../../../components/drill/FpsStartCard';
import generateShareCard, { shareScoreCard } from '../../../../../components/ShareScoreCard';
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
const DRILL_DURATION = 45;
const POINTS_PER_HIT = 100;
const POINTS_PER_LEVEL = 150;
const ELITE_SCORE = 4000; // Target score for S+ rating (rebalanced after combo removal)
const STORAGE_KEY = 'skilldrills_concentration_stamina_v3';

const DATA_SETS = {
  VOWELS: ['A', 'E', 'I', 'O', 'U'],
  CONSONANTS: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  PRIMES: ['2', '3', '5', '7'],
  NON_PRIMES: ['1', '4', '6', '8', '9']
};

const getSavedData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { bestScore: 0, bestLevel: 1, totalSessions: 0 };
    return { bestScore: 0, bestLevel: 1, totalSessions: 0, ...JSON.parse(raw) };
  } catch (e) {
    return { bestScore: 0, bestLevel: 1, totalSessions: 0 };
  }
};

const saveData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
};

// ============================================================
// ACCORDION DATA
// ============================================================
const ABOUT_TEXT = `Attention Span Test (Concentration Stamina) is an advanced Continuous Performance Test (CPT) designed to evaluate sustained visual attention, working memory updating, and task-set switching under speed pressure. Originating from cognitive psychology and ergonomics, continuous stamina tests challenge the brain's executive control network to maintain high vigilance over extended sequences.

By requiring instantaneous categorization of incoming visual stimuli while periodically switching target rules, the drill trains cognitive flexibility, impulse suppression, and focus stability under cognitive fatigue.`;

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function ConcentrationStaminaClient({ copy } = {}) {
  const [phase, setPhase] = useState('start'); // 'start' | 'countdown' | 'playing' | 'ended'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [flashEnabled, setFlashEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  useImmersiveMode(isFullscreen); // locks the page behind while the drill fills the screen

  // Gameplay State
  const [currentStim, setCurrentStim] = useState('');
  const [activeRule, setActiveRule] = useState('VOWELS');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(DRILL_DURATION);
  const [countdownValue, setCountdownValue] = useState(3);
  const [openAccordion, setOpenAccordion] = useState(null);

  // Stats & Storage
  const [bestScore, setBestScore] = useState(0);
  const [bestLevel, setBestLevel] = useState(1);

  // Results
  const [endSummary, setEndSummary] = useState(null);

  // Refs
  const containerRef = useRef(null);
  const clockTimerRef = useRef(null);
  const ruleTimerRef = useRef(null);
  const stimTimerRef = useRef(null);
  const countdownTimeoutsRef = useRef([]);
  const gameActiveRef = useRef(false);
  const phaseRef = useRef('start');

  const scoreRef = useRef(0);
  const timeLeftRef = useRef(DRILL_DURATION);
  const levelRef = useRef(1);
  const maxLevelRef = useRef(1);

  const activeRuleRef = useRef('VOWELS');
  const currentStimRef = useRef('');
  const isTargetRef = useRef(false);
  const hasActedRef = useRef(false);

  const hitsRef = useRef(0);
  const missesRef = useRef(0);
  const falseAlarmsRef = useRef(0);

  const clearAllTimers = useCallback(() => {
    if (clockTimerRef.current) clearInterval(clockTimerRef.current);
    if (ruleTimerRef.current) clearInterval(ruleTimerRef.current);
    if (stimTimerRef.current) clearTimeout(stimTimerRef.current);
    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];
  }, []);

  const { flashes, triggerFlash } = useDrillFlash();

  const getLevelConfig = (currentLvl) => {
    const p = getDifficultyProgress(currentLvl);
    return {
      displaySpeed: Math.max(260, Math.round(1100 - p * 840)),
      intervalSpeed: Math.max(50, Math.round(150 - p * 100)),
      targetRatio: Math.min(0.48, 0.30 + p * 0.18),
    };
  };

  const endGame = useCallback(() => {
    if (phaseRef.current === 'ended') return;
    phaseRef.current = 'ended';
    setPhase('ended');
    gameActiveRef.current = false;
    clearAllTimers();

    drillAudio.playSessionEnd();

    const totalActions = hitsRef.current + falseAlarmsRef.current + missesRef.current;
    const accuracyVal = totalActions > 0 ? Math.round((hitsRef.current / totalActions) * 100) : 0;
    const finalScore = scoreRef.current;
    const peakLevel = maxLevelRef.current;

    const prev = getSavedData();
    const isNewBest = finalScore > prev.bestScore;
    const updated = {
      bestScore: Math.max(prev.bestScore, finalScore),
      bestLevel: Math.max(prev.bestLevel, peakLevel),
      totalSessions: prev.totalSessions + 1
    };
    saveData(updated);

    setBestScore(updated.bestScore);
    setBestLevel(updated.bestLevel);

    setEndSummary({
      score: finalScore,
      accuracy: accuracyVal,
      peakLevel,
      misses: missesRef.current + falseAlarmsRef.current,
      isNewBest
    });
  }, [clearAllTimers]);

  const spawnStimulus = useCallback(() => {
    if (phaseRef.current !== 'playing') return;
    if (stimTimerRef.current) clearTimeout(stimTimerRef.current);

    hasActedRef.current = false;
    const config = getLevelConfig(levelRef.current);
    const isTarget = Math.random() < config.targetRatio;
    isTargetRef.current = isTarget;

    let stim = '';
    if (activeRuleRef.current === 'VOWELS') {
      stim = isTarget
        ? DATA_SETS.VOWELS[Math.floor(Math.random() * DATA_SETS.VOWELS.length)]
        : DATA_SETS.CONSONANTS[Math.floor(Math.random() * DATA_SETS.CONSONANTS.length)];
    } else {
      stim = isTarget
        ? DATA_SETS.PRIMES[Math.floor(Math.random() * DATA_SETS.PRIMES.length)]
        : DATA_SETS.NON_PRIMES[Math.floor(Math.random() * DATA_SETS.NON_PRIMES.length)];
    }

    currentStimRef.current = stim;
    setCurrentStim(stim);

    stimTimerRef.current = setTimeout(() => {
      if (phaseRef.current === 'playing') {
        if (!hasActedRef.current && isTargetRef.current) {
          // Missed a target stimulus
          drillAudio.playPenalty();
          triggerFlash('red');
          missesRef.current += 1;
        }

        setCurrentStim('');
        stimTimerRef.current = setTimeout(() => {
          if (phaseRef.current === 'playing') spawnStimulus();
        }, config.intervalSpeed);
      }
    }, config.displaySpeed);
  }, [triggerFlash]);

  const handleInteraction = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (phaseRef.current !== 'playing' || hasActedRef.current || !currentStimRef.current) return;

    hasActedRef.current = true;

    if (isTargetRef.current) {
      // Hit target
      drillAudio.playHit();
      hitsRef.current += 1;

      scoreRef.current += POINTS_PER_HIT;
      setScore(scoreRef.current);

      const newLevel = Math.floor(scoreRef.current / POINTS_PER_LEVEL) + 1;
      levelRef.current = newLevel;
      setLevel(newLevel);
      if (newLevel > maxLevelRef.current) {
        maxLevelRef.current = newLevel;
      }
    } else {
      // False alarm (wrong target)
      drillAudio.playPenalty();
      triggerFlash('red');
      falseAlarmsRef.current += 1;
    }

    if (stimTimerRef.current) clearTimeout(stimTimerRef.current);
    setCurrentStim('');

    stimTimerRef.current = setTimeout(() => {
      if (phaseRef.current === 'playing') spawnStimulus();
    }, 120);
  }, [spawnStimulus, triggerFlash]);


  const handleCountdownComplete = useCallback(() => {
    setPhase('playing');
    phaseRef.current = 'playing';
    gameActiveRef.current = true;

    // Clock Interval
    clockTimerRef.current = setInterval(() => {
      timeLeftRef.current = Math.max(0, timeLeftRef.current - 0.1);
      setTimeRemaining(timeLeftRef.current);
      if (timeLeftRef.current <= 0) {
        endGame();
      }
    }, 100);

    // Rule Switcher (Every 10 seconds)
    ruleTimerRef.current = setInterval(() => {
      if (phaseRef.current !== 'playing') return;
      drillAudio.playHit();
      const nextRule = activeRuleRef.current === 'VOWELS' ? 'PRIMES' : 'VOWELS';
      activeRuleRef.current = nextRule;
      setActiveRule(nextRule);
    }, 10000);

    spawnStimulus();
  }, [endGame, spawnStimulus]);

  const enterDrill = useCallback(async () => {
    setIsFullscreen(true);

    drillAudio.init();

    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];
    clearAllTimers();

    const saved = getSavedData();
    const startLevel = getStartLevel(saved.bestLevel || 1);
    levelRef.current = startLevel;
    maxLevelRef.current = startLevel;

    scoreRef.current = 0;
    timeLeftRef.current = DRILL_DURATION;
    hitsRef.current = 0;
    missesRef.current = 0;
    falseAlarmsRef.current = 0;
    activeRuleRef.current = 'VOWELS';

    setScore(0);
    setLevel(startLevel);
    setTimeRemaining(DRILL_DURATION);
    setActiveRule('VOWELS');
    setEndSummary(null);

    setPhase('countdown');
    phaseRef.current = 'countdown';
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
      handleCountdownComplete();
    }, 2450);

    countdownTimeoutsRef.current = [t1, t2, t3, t4];
  }, [clearAllTimers, handleCountdownComplete]);

  const { markIntentionalExit } = useUnexpectedExitGuard({
    active: phase === 'playing' || phase === 'countdown',
    onUnexpectedExit: () => {
      countdownTimeoutsRef.current.forEach(clearTimeout);
      countdownTimeoutsRef.current = [];
      clearAllTimers();
      setIsFullscreen(false);
      phaseRef.current = 'start';
      setPhase('start');
    },
  });

  const handleExitDrill = useCallback(async () => {
    markIntentionalExit();
    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];
    clearAllTimers();
    if (typeof document !== 'undefined' && document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch (err) {}
    }
    setIsFullscreen(false);
    phaseRef.current = 'start';
    setPhase('start');
  }, [clearAllTimers, markIntentionalExit]);

  // Keyboard and Fullscreen Lifecycle (Rule 6)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleExitDrill();
        return;
      }
      if ((e.code === 'Space' || e.code === 'Enter') && phaseRef.current === 'playing') {
        handleInteraction(e);
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
  }, [handleExitDrill, handleInteraction, isFullscreen]);

  const gradeInfo = endSummary ? getFpsScoreGrade(endSummary.score, ELITE_SCORE) : null;

  const shareResult = useCallback(async () => {
    setIsFullscreen(false);
    if (!endSummary || !gradeInfo) return;
    const url = 'https://skilldrills.online/drills/cognitive/attention/concentration-stamina';
    try {
      const canvas = generateShareCard({
        score: endSummary.score,
        bestScore,
        accuracy: endSummary.accuracy,
        rating: { letter: gradeInfo.grade, label: gradeInfo.label, emoji: '🧠' },
        newBest: endSummary.isNewBest,
        drillName: 'Attention Span Test',
        playerName: getPlayerName(),
      });
      await shareScoreCard(url, canvas);
    } catch (e) {
      const text = `🧠 I scored ${endSummary.score} PTS (Level ${endSummary.peakLevel}) on the Attention Span Test (Concentration Stamina)! Accuracy: ${endSummary.accuracy}%. Practice free cognitive focus drills at skilldrills.online!`;
      if (typeof navigator !== 'undefined' && navigator.share) {
        navigator.share({ title: 'Attention Span Test Score', text, url }).catch(() => {});
      }
    }
  }, [endSummary, gradeInfo, bestScore]);

  return (
    <div className="min-h-screen bg-[#050508] text-white flex flex-col font-sans select-none">
      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col gap-6">
        {!isFullscreen && (
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              <span data-seo-kw="1">{copy?.title || "Concentration Stamina – Attention Span Test"}</span>
              <span className="block text-sm font-semibold text-slate-400 mt-1">{copy?.subtitle || "Attention span test for sustained focus, target discrimination, and cognitive endurance under time pressure"}</span>
            </h1>
          </div>
        )}

        {/* Live Stat Cards — full width flush with the drill container */}
        {!isFullscreen && (
          <div className="grid grid-cols-4 gap-2 w-full -mb-2">
            {[
              { label: copy?.statScore || 'Score', value: score, tone: 'text-indigo-400' },
              { label: copy?.statTime || 'Time', value: `${Math.ceil(timeRemaining)}s`, tone: timeRemaining <= 10 ? 'text-red-400 animate-pulse' : 'text-white' },
              { label: copy?.statLevel || 'Level', value: `L${level}`, tone: 'text-indigo-400' },
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

          {/* Screen Flashes (Reference vignette style) */}
          <DrillFlashOverlay flashes={flashes} />

          {/* IN-BOX HUD */}
          {(phase === 'playing' || phase === 'countdown') && (
            <>
              {/* Score - Top Left */}
              <div className="absolute top-4 left-4 z-30 pointer-events-none flex flex-col items-start gap-0.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{copy?.statScore || 'Score'}</p>
                <p className="text-2xl sm:text-3xl font-black text-white tabular-nums leading-tight">{score}</p>
              </div>

              {/* Active Rule - Centered at Top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <div className="flex items-center gap-2 bg-indigo-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-indigo-500/30 shadow-lg">
                  <span className="text-xs font-bold text-indigo-300">{copy?.ruleLabel || 'Rule'}:</span>
                  <span className="text-xs sm:text-sm font-black text-white">{activeRule === 'VOWELS' ? (copy?.vowels || 'VOWELS (A E I O U)') : (copy?.primes || 'PRIMES (2 3 5 7)')}</span>
                </div>
              </div>

              {/* Time - Top Right */}
              <div className="absolute top-4 right-4 z-30 pointer-events-none text-right">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{copy?.statTime || 'Time'}</p>
                <p className={`text-2xl sm:text-3xl font-black tabular-nums leading-tight ${timeRemaining <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>{Math.ceil(timeRemaining)}s</p>
              </div>
            </>
          )}

          {/* START CARD */}
          {phase === 'start' && (
            <FpsStartCard
              icon={Brain}
              accent="indigo"
              title={copy?.startTitle || "Attention Span Test"}
              subtitle={copy?.startSubtitle || "Concentration Stamina • Continuous Performance Test"}
              isTouchOnlyDevice={false}
              onStart={enterDrill}
            />
          )}

          {/* COUNTDOWN OVERLAY */}
          {phase === 'countdown' && (
            <DrillCountdown value={countdownValue} subtitle={copy?.getReady || "GET READY"} />
          )}

          {/* IN-GAME HUD SOUND + FLASH TOGGLES (header's toggle is hidden while fullscreen) */}
          {(phase === 'playing' || phase === 'countdown') && (
            <div className="absolute bottom-4 right-4 z-40 flex items-center gap-2">
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
                title={copy?.flashTitle || "Toggle Miss Flash"}
              >
                {flashEnabled ? <Zap className="w-4 h-4 text-red-400" /> : <ZapOff className="w-4 h-4 text-slate-500" />}
              </button>
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  const next = !soundEnabled;
                  setSoundEnabled(next);
                  drillAudio.setEnabled(next);
                }}
                className="p-2.5 rounded-full bg-black/60 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title={copy?.soundTitle || "Toggle Sound"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              </button>
            </div>
          )}

          {/* PLAYING CANVAS/SURFACE */}
          {phase === 'playing' && (
            <div
              onPointerDown={handleInteraction}
              className="flex-1 w-full h-full flex flex-col items-center justify-center cursor-pointer z-20 touch-none"
            >
              {currentStim ? (
                <div className="text-8xl sm:text-9xl font-mono font-black tracking-widest text-white drop-shadow-[0_0_35px_rgba(99,102,241,0.6)]">
                  {currentStim}
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full border-2 border-indigo-500/30 border-t-indigo-400 animate-spin" />
              )}
            </div>
          )}

          {/* RESULT CARD OVERLAY (Reference drill optimization) */}
          {phase === 'ended' && endSummary && gradeInfo && (
            <div className="absolute inset-0 z-50 flex bg-neutral-950/98 select-none font-sans" style={{ background: 'rgba(5,5,8,0.97)' }} onPointerDown={e => e.stopPropagation()}>
              
              {/* Left 36% Grade Panel */}
              <div className="w-[36%] flex flex-col items-center justify-center gap-1 border-r border-white/5 px-4" style={{ background: 'radial-gradient(ellipse 260px 200px at 50% 30%, rgba(99,102,241,.12), transparent 70%)' }}>
                {endSummary.isNewBest && (
                  <span className="text-[9.5px] font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/25 px-2.5 py-0.5 rounded-full mb-1 animate-pulse">
                    {copy?.newBest || 'NEW BEST'}
                  </span>
                )}
                <div className="text-5xl sm:text-6xl font-black leading-none" style={{ color: gradeInfo.color }}>
                  {gradeInfo.grade}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 text-center font-bold mt-1">
                  {gradeInfo.label}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mt-2 tabular-nums">
                  {endSummary.score.toLocaleString()}
                </div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-500">{copy?.points || 'Points'}</div>
              </div>

              {/* Right Stats & Actions Panel */}
              <div className="flex-1 flex flex-col justify-center gap-3 px-6 py-4 min-w-0">
                
                {/* 3 Stat Tiles */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-sm sm:text-base font-black text-white">{endSummary.accuracy}%</p>
                    <p className="text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{copy?.accuracy || 'Accuracy'}</p>
                  </div>
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-sm sm:text-base font-black text-white">{endSummary.misses}</p>
                    <p className="text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{copy?.misses || 'Misses'}</p>
                  </div>
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-sm sm:text-base font-black text-white">Lv. {endSummary.peakLevel}</p>
                    <p className="text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{copy?.peakLevel || 'Peak Level'}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={enterDrill} 
                    className="flex-1 py-3 rounded-[13px] bg-gradient-to-r from-indigo-500 to-cyan-600 text-white font-bold text-xs uppercase tracking-wide cursor-pointer transition-transform active:scale-[0.98] shadow-md flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> {copy?.playAgain || 'Play Again'}
                  </button>
                  <button 
                    onClick={shareResult} 
                    className="w-11 flex-shrink-0 rounded-[13px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer active:scale-90 transition-transform" 
                    title={copy?.shareScore || "Share Score"}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleExitDrill} 
                    className="w-11 flex-shrink-0 rounded-[13px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer active:scale-90 transition-transform" 
                    title={copy?.exitDrill || "Exit Drill"}
                  >
                    <ArrowLeft className="w-4 h-4 text-red-400" />
                  </button>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Stage Caption */}
        {!isFullscreen && (
          <p className="text-xs text-slate-400 leading-relaxed -mt-2">
            {copy?.caption || 'React quickly to stimuli that match the active rule while filtering out distractors as rules switch dynamically.'}
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
            <RuleItem num="1" text={copy?.ruleItems?.[0]?.text || "Target Rule"} highlight={copy?.ruleItems?.[0]?.highlight || "Switches Every 10s"} result={copy?.ruleItems?.[0]?.result || "VOWELS ↔ PRIMES"} />
            <RuleItem num="2" text={copy?.ruleItems?.[1]?.text || "Target Hit"} highlight={copy?.ruleItems?.[1]?.highlight || "+100 PTS"} result={copy?.ruleItems?.[1]?.result || "Tap or Spacebar"} />
            <RuleItem num="3" text={copy?.ruleItems?.[2]?.text || "Non-Target"} highlight={copy?.ruleItems?.[2]?.highlight || "Inhibit"} result={copy?.ruleItems?.[2]?.result || "Ignore Non-Match"} />
            <RuleItem num="4" text={copy?.ruleItems?.[3]?.text || "False Alarm"} highlight={copy?.ruleItems?.[3]?.highlight || "Penalty"} result={copy?.ruleItems?.[3]?.result || "Counts vs Accuracy"} />
          </div>
        </DrillAccordion>

        <DrillAccordion
          id="about"
          title={copy?.aboutTitle || "About the Attention Span Test"}
          isOpen={openAccordion === 'about'}
          onToggle={() => setOpenAccordion(openAccordion === 'about' ? null : 'about')}
        >
          <div className="space-y-8">
            <section>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-gray-300">
                  {copy?.aboutLead || 'Sustained attention decays measurably the longer you watch for a rare signal: Mackworth (1948) found detection accuracy dropping within the first 30 minutes of a monitoring task, and the decline is steeper when the events come faster or the memory load is higher (Parasuraman, 1979). This drill compresses that vigilance decrement into a short session, evaluating cognitive endurance across alternating classification rules and scoring accuracy and misses rather than raw reaction speed.'}
                </p>
                {ABOUT_TEXT.split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-gray-300">{para}</p>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-gray-800 bg-white/[0.02]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center"><Users className="w-3.5 h-3.5 text-white" /></div>
                  <h4 className="text-xs font-bold text-white">{copy?.audienceTitle || 'Who Should Use This?'}</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{copy?.audienceText || 'Students preparing for long exams, competitive gamers who need consistent accuracy deep into matches, and professionals in high-vigilance roles who must sustain focus for extended periods.'}</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-800 bg-white/[0.02]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5 text-white" /></div>
                  <h4 className="text-xs font-bold text-white">{copy?.skillsTitle || 'Skills Improved'}</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{copy?.skillsText || 'Sustained attention, target discrimination, vigilance under fatigue, and resistance to the vigilance decrement over long sessions.'}</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-800 bg-white/[0.02]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center"><Repeat className="w-3.5 h-3.5 text-white" /></div>
                  <h4 className="text-xs font-bold text-white">{copy?.flexibilityTitle || 'Cognitive Flexibility'}</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{copy?.flexibilityText || 'Every 10-second rule switch between VOWELS and PRIMES forces you to re-categorize stimuli on the fly, training rapid task-set switching.'}</p>
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
