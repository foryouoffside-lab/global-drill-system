'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Volume2, VolumeX, Target, Eye, Users, TrendingUp, Zap, ZapOff, Trophy } from 'lucide-react';

import { isIdleFrameSkippable } from '@/lib/performance';
import generateShareCard, { shareScoreCard } from '../../../../components/ShareScoreCard';
import { getPlayerName } from '../../../../lib/leaderboard';
import { drillAudio } from '../../../../lib/drillAudio';
import { drillFlash } from '../../../../lib/drillFlash';
import { drillTimeout } from '../../../../lib/drillTimeout';
import { drillPenalty } from '../../../../lib/drillPenalty';
import { getFpsScoreGrade, getComboMultiplier } from '../../../../lib/scoringEngine';
import { getDifficultyProgress, getStartLevel, ramp } from '../../../../lib/drillDifficulty';
import useDrillFlash from '../../../../lib/useDrillFlash';
import useUnexpectedExitGuard from '../../../../lib/useUnexpectedExitGuard';
import DrillCountdown from '../../../../components/drill/DrillCountdown';
import DrillAccordion from '../../../../components/drill/DrillAccordion';
import DrillFlashOverlay from '../../../../components/drill/DrillFlashOverlay';
import FpsStartCard from '../../../../components/drill/FpsStartCard';
import DrillResultCard from '../../../../components/drill/DrillResultCard';
import useImmersiveMode from '@/lib/useImmersiveMode';
import { drawTacticalTarget, createHitRing, drawHitRings } from '@/lib/canvasFx';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { SACCADIC_GALLERY_I18N } from '@/lib/i18n/drills/saccadicGallery';

// ============================================================
// TUNING CONSTANTS
// ============================================================
const DRILL_DURATION = 45; // starting clock only; a run grows past this
const POINTS_PER_HIT = 100;
const POINTS_PER_LEVEL = 1750; // 250 -> 1750 (7x)
const ELITE_SCORE = 18000; // 6000 -> 18000 (3x)
const TIME_PER_HIT = 2; // +2s per valid hit, capped at 60s
const TIME_PENALTY = 1; // -1s on miss / target timeout (opt-in gated)
const STORAGE_KEY = 'skilldrills_saccadic_gallery_v3';
const TARGET_FILL_COLOR = '#ef4444';

const RELATED_DRILLS = [
  { id: "barrier-sequence-pursuit", name: "Jiggle Peek Trainer", cat: "Reaction Speed", desc: "Train angle holding and cover peeking reaction reflexes.", href: "/drills/reaction-speed/barrier-sequence-pursuit" },
  { id: "fps-tracking-trainer", name: "FPS Tracking Trainer", cat: "Reaction Speed", desc: "Condition tracking accuracy against dynamic moving targets.", href: "/drills/reaction-speed/fps-tracking-trainer" },
  { id: "market-doors-pursuit", name: "Corner Checking Trainer", cat: "Reaction Speed", desc: "Saccadic eye sweep & doorway clearing trainer.", href: "/drills/reaction-speed/market-doors-pursuit" },
  { id: "reaction-game", name: "Reaction Game", cat: "Reaction Speed", desc: "Simulate rapid combat reaction scenarios.", href: "/drills/reaction-speed/reaction-game" },
  { id: "reaction-time-test", name: "Reaction Time Test", cat: "Reaction Speed", desc: "Measure pure visual reaction speed in milliseconds.", href: "/drills/visual/reaction-speed/light-reaction" },
  { id: "reflex-training-drill", name: "Reflex Training Drill", cat: "Reaction Speed", desc: "High-speed reflex triggers & visual target hitting.", href: "/drills/reaction-speed/reflex-training-drill" }
];

const getSavedData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { bestScore: 0, bestCombo: 0, bestLevel: 1, totalSessions: 0 };
    return { bestScore: 0, bestCombo: 0, bestLevel: 1, totalSessions: 0, ...JSON.parse(raw) };
  } catch (e) {
    return { bestScore: 0, bestCombo: 0, bestLevel: 1, totalSessions: 0 };
  }
};

const saveData = (data: { bestScore: number; bestCombo?: number; bestLevel: number; totalSessions: number }) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
};

// Continuous unbounded difficulty with streak heat
const getLevelConfig = (level: number, combo = 0) => {
  const p = getDifficultyProgress(level); // 0 at L1, 1 at L15, unbounded above
  const heat = (getComboMultiplier(combo) - 1) / 2;

  return {
    radius:        Math.max(6, ramp(28, 7, p) * (1 - heat * 0.25)),
    ttl:           ramp(1300, 90, p) * (1 - heat * 0.32),
    spawnDelayMin: ramp(550, 20, p) * (1 - heat * 0.30),
    spawnDelayMax: ramp(750, 35, p) * (1 - heat * 0.30),
    hitPad:        Math.max(4, ramp(14, 2, p) * (1 - heat * 0.50)),
  };
};

const RULES_ITEMS = [
  { num: '1', textKey: 'saccadicGallery.rule1Text', text: 'Hit Active Nodes', highlightKey: 'saccadicGallery.rule1Highlight', highlight: '+100 PTS', resultKey: 'saccadicGallery.rule1Result', result: '× Combo × Level bonus (+2s per hit, max 60s)' },
  { num: '2', textKey: 'saccadicGallery.rule2Text', text: 'Combo & Heat System', highlightKey: 'saccadicGallery.rule2Highlight', highlight: 'Up to 3.0x Multiplier', resultKey: 'saccadicGallery.rule2Result', result: 'Higher streaks speed up node jump cadence' },
  { num: '3', textKey: 'saccadicGallery.rule3Text', text: 'Level Progression', highlightKey: 'saccadicGallery.rule3Highlight', highlight: 'Continuous Scaling', resultKey: 'saccadicGallery.rule3Result', result: 'Targets shrink and exposure windows shorten' },
  { num: '4', textKey: 'saccadicGallery.rule4Text', text: 'Miss & Timeout Rules', highlightKey: 'saccadicGallery.rule4HighlightZero', highlight: 'Zero Penalties (Default)', resultKey: 'saccadicGallery.rule4ResultZero', result: 'Resets combo. Time penalty is opt-in via settings' },
];

type Particle = { x: number; y: number; vx: number; vy: number; color: string; life: number };

export default function SaccadicGalleryClient({ copy }: { copy?: { title?: string; subtitle?: string; caption?: string } } = {}) {
  const { t } = useTranslation(SACCADIC_GALLERY_I18N);
  const [gameState, setGameState] = useState<'start' | 'countdown' | 'playing' | 'gameOver'>('start');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  useImmersiveMode(isFullscreen); // locks the page behind while the drill fills the screen
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [flashEnabled, setFlashEnabled] = useState(true);
  const [penaltyEnabled, setPenaltyEnabled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [countdownValue, setCountdownValue] = useState<number | string>(3);

  // HUD & Best Stats State
  const [uiScore, setUiScore] = useState<number>(0);
  const [uiTimeLeft, setUiTimeLeft] = useState<number>(DRILL_DURATION);
  const [uiLevel, setUiLevel] = useState<number>(1);
  const [uiCombo, setUiCombo] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [bestCombo, setBestCombo] = useState<number>(0);
  const [bestLevel, setBestLevel] = useState<number>(1);
  const [totalSessions, setTotalSessions] = useState<number>(0);
  const [isNewBest, setIsNewBest] = useState<boolean>(false);

  // End Session Analytics
  const [analytics, setAnalytics] = useState({
    accuracy: 100,
    successfulHits: 0,
    missedClicks: 0,
    timeouts: 0,
    avgReactionTime: 0,
    maxCombo: 0,
    finalLevel: 1,
    grade: null as any
  });

  // DOM & Engine Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const countdownTimeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const bestLevelRunRef = useRef(1);
  const lastTimeRef = useRef(DRILL_DURATION);
  const mousePosRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  const engine = useRef({
    score: 0,
    level: 1,
    combo: 0,
    maxCombo: 0,
    successfulHits: 0,
    missedClicks: 0,
    timeouts: 0,
    reactionTimes: [] as number[],
    timeLeft: DRILL_DURATION,
    screenShake: 0,
    particles: [] as Particle[],
    hitRings: [] as ReturnType<typeof createHitRing>[],
    target: {
      active: false,
      x: 0,
      y: 0,
      radius: 24,
      spawnTime: 0,
      ttl: 1200,
      nodeIndex: -1
    },
    nextSpawnTime: 0
  });

  const { flashes, triggerFlash } = useDrillFlash();

  // Mobile Detection & Device Orientation Tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSoundEnabled(drillAudio.isEnabled());
      setFlashEnabled(drillFlash.isEnabled());
      setPenaltyEnabled(drillPenalty.isEnabled(TIME_PER_HIT === 2));

      const checkDeviceAndOrientation = () => {
        const ua = navigator.userAgent || '';
        const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        const mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) || (window.innerWidth < 768) || hasTouch;
        setIsMobile(mobileDevice);

      };

      checkDeviceAndOrientation();
      window.addEventListener('resize', checkDeviceAndOrientation);
      window.addEventListener('orientationchange', checkDeviceAndOrientation);

      const saved = getSavedData();
      setBestScore(saved.bestScore || 0);
      setBestCombo(saved.bestCombo || 0);
      setBestLevel(saved.bestLevel || 1);
      setTotalSessions(saved.totalSessions || 0);

      return () => {
        window.removeEventListener('resize', checkDeviceAndOrientation);
        window.removeEventListener('orientationchange', checkDeviceAndOrientation);
      };
    }
  }, []);

  // Cleanup Timeouts on Unmount
  useEffect(() => {
    return () => {
      countdownTimeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  // Exit Drill cleanly
  const handleExitDrill = useCallback(async () => {
    markIntentionalExit();
    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];

    setIsFullscreen(false);
    setGameState('start');
  }, []);

  const { markIntentionalExit } = useUnexpectedExitGuard({
    active: gameState === 'playing' || gameState === 'countdown',
    onUnexpectedExit: handleExitDrill,
  });

  // Handle direct escape key and fullscreenchange lifecycle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (gameState === 'playing' || gameState === 'countdown')) {
        handleExitDrill();
      }
    };
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isFullscreen && (gameState === 'playing' || gameState === 'countdown')) {
        handleExitDrill();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [gameState, isFullscreen, handleExitDrill]);

  // Complete Drill Session cleanly
  const endGame = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    setGameState('gameOver');

    const e = engine.current;
    const totalActions = e.successfulHits + e.missedClicks + e.timeouts;
    const acc = totalActions > 0 ? Math.round((e.successfulHits / totalActions) * 100) : 0;
    const avgRt = e.reactionTimes.length > 0
      ? Math.round(e.reactionTimes.reduce((a, b) => a + b, 0) / e.reactionTimes.length)
      : 0;

    const rating = getFpsScoreGrade(e.score, ELITE_SCORE);
    const gradeObj = { letter: rating.grade, label: rating.label, color: rating.color };

    setAnalytics({
      accuracy: acc,
      successfulHits: e.successfulHits,
      missedClicks: e.missedClicks,
      timeouts: e.timeouts,
      avgReactionTime: avgRt,
      maxCombo: e.maxCombo,
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
  }, []);

  // Target Spawn Logic (Saccadic Array Nodes jumping)
  const spawnTarget = useCallback((W: number, H: number, level: number, combo: number) => {
    const e = engine.current;
    const config = getLevelConfig(level, combo);

    const baseR = isMobile ? config.radius + 2 : config.radius;
    const radius = Math.max(6, baseR);

    // Grid nodes (4 cols x 3 rows) across canvas for ballistic eye sweeps
    const cols = isMobile ? 3 : 4;
    const rows = isMobile ? 3 : 3;

    const marginX = W * 0.14;
    const marginY = H * 0.18;
    const stepX = (W - marginX * 2) / (cols - 1);
    const stepY = (H - marginY * 2) / (rows - 1);

    let nextNodeIndex = Math.floor(Math.random() * (cols * rows));
    if (nextNodeIndex === e.target.nodeIndex) {
      nextNodeIndex = (nextNodeIndex + 1) % (cols * rows);
    }

    const colIndex = nextNodeIndex % cols;
    const rowIndex = Math.floor(nextNodeIndex / cols);

    const spawnX = marginX + colIndex * stepX + (Math.random() - 0.5) * 12;
    const spawnY = marginY + rowIndex * stepY + (Math.random() - 0.5) * 12;

    e.target = {
      active: true,
      x: spawnX,
      y: spawnY,
      radius,
      spawnTime: performance.now(),
      ttl: config.ttl,
      nodeIndex: nextNodeIndex
    };
  }, [isMobile]);

  // Enter Drill (Full Screen -> 321GO Countdown with Sound -> Playing)
  const enterDrill = useCallback(async () => {
    setIsFullscreen(true);

    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];

    drillAudio.init();

    const startLevel = getStartLevel();
    bestLevelRunRef.current = startLevel;

    setUiScore(0);
    setUiLevel(startLevel);
    setUiCombo(0);
    setUiTimeLeft(DRILL_DURATION);
    lastTimeRef.current = DRILL_DURATION;
    setIsNewBest(false);

    mousePosRef.current = { x: 0, y: 0, active: false };

    engine.current = {
      score: 0,
      level: startLevel,
      combo: 0,
      maxCombo: 0,
      successfulHits: 0,
      missedClicks: 0,
      timeouts: 0,
      reactionTimes: [],
      timeLeft: DRILL_DURATION,
      screenShake: 0,
      particles: [],
      hitRings: [],
      target: {
        active: false,
        x: 0, y: 0, radius: 24, spawnTime: 0, ttl: 1200, nodeIndex: -1
      },
      nextSpawnTime: 0
    };

    // Countdown sequence: 3 -> 2 -> 1 -> GO with Audio Cues
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
      setGameState('playing');
      engine.current.nextSpawnTime = performance.now() + 200;
    }, 2450);

    countdownTimeoutsRef.current = [t1, t2, t3, t4];
  }, []);

  // Target Click / Tap Handler
  const handleCanvasInteraction = useCallback((clientX: number, clientY: number) => {
    if (gameState !== 'playing') return;
    const cvs = canvasRef.current;
    if (!cvs) return;

    const rect = cvs.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;

    const e = engine.current;
    const config = getLevelConfig(e.level, e.combo);
    const hitPad = isMobile ? config.hitPad + 10 : config.hitPad;

    if (e.target.active) {
      const dist = Math.hypot(clickX - e.target.x, clickY - e.target.y);
      if (dist <= e.target.radius + hitPad) {
        const rt = Math.round(performance.now() - e.target.spawnTime);
        e.reactionTimes.push(rt);
        e.successfulHits += 1;
        e.combo += 1;
        if (e.combo > e.maxCombo) e.maxCombo = e.combo;

        const levelMult = 1 + getDifficultyProgress(e.level) * 0.5;
        e.score += Math.round(POINTS_PER_HIT * getComboMultiplier(e.combo) * levelMult);

        // Time bonus on clean hit
        e.timeLeft = Math.min(60, e.timeLeft + TIME_PER_HIT);

        // Continuous unbounded level progression
        const rawLevel = (e.score / POINTS_PER_LEVEL) + 1;
        e.level = Math.max(e.level, rawLevel);
        bestLevelRunRef.current = Math.max(bestLevelRunRef.current, e.level);

        setUiScore(e.score);
        setUiLevel(Math.floor(e.level));
        setUiCombo(e.combo);
        drillAudio.playHit();

        // Particles explosion (14 particles with combo color shift)
        const hitColor = e.combo >= 10 ? '#34d399' : e.combo >= 5 ? '#f59e0b' : TARGET_FILL_COLOR;
        for (let i = 0; i < 14; i++) {
          const angle = Math.random() * Math.PI * 2;
          const spd = 2 + Math.random() * 4;
          e.particles.push({
            x: e.target.x,
            y: e.target.y,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            color: hitColor,
            life: 1.0
          });
        }

        // Ring Burst Effect (canonical dual expanding rings)
        e.hitRings.push(createHitRing(e.target.x, e.target.y, e.target.radius, hitColor));

        e.target.active = false;
        const delay = config.spawnDelayMin + Math.random() * (config.spawnDelayMax - config.spawnDelayMin);
        e.nextSpawnTime = performance.now() + delay;
        return;
      }
    }

    // Missed click on empty space: optional time penalty + combo reset
    e.missedClicks += 1;
    if (drillPenalty.isEnabled(TIME_PER_HIT === 2)) e.timeLeft -= TIME_PENALTY;
    e.combo = 0;
    setUiCombo(0);
    e.screenShake = 6;
    triggerFlash();
    drillAudio.playPenalty();
  }, [gameState, isMobile, triggerFlash]);

  // Canvas Physics & Render Loop (Saccadic Eye Movement Engine)
  useEffect(() => {
    if (gameState !== 'playing') return;
    const cvs = canvasRef.current;
    const container = containerRef.current;
    if (!cvs || !container) return;

    const ctx = cvs.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (cvs.width === Math.trunc(rect.width * dpr) && cvs.height === Math.trunc(rect.height * dpr)) return;
      cvs.width = rect.width * dpr;
      cvs.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      if (engine.current.target.active) {
        engine.current.target.active = false;
        engine.current.nextSpawnTime = performance.now() + 200;
      }
    };

    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(container);

    let lastTime = performance.now();

    const draw = (now: number) => {
      if (isIdleFrameSkippable(gameState === 'playing', now, lastTime)) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const rect = container.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      const e = engine.current;

      // Clock draining in RAF loop
      if (gameState === 'playing') {
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

      // Screen Shake Effect
      ctx.save();
      if (e.screenShake > 0) {
        const sx = (Math.random() - 0.5) * e.screenShake;
        const sy = (Math.random() - 0.5) * e.screenShake;
        ctx.translate(sx, sy);
        e.screenShake *= 0.85;
        if (e.screenShake < 0.2) e.screenShake = 0;
      }

      // Clear Canvas (Deep Dark `#050508`)
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, W, H);

      // Render subtle background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Render gallery node markers (subtle guide points)
      const cols = isMobile ? 3 : 4;
      const rows = isMobile ? 3 : 3;
      const marginX = W * 0.14;
      const marginY = H * 0.18;
      const stepX = (W - marginX * 2) / (cols - 1);
      const stepY = (H - marginY * 2) / (rows - 1);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const nx = marginX + c * stepX;
          const ny = marginY + r * stepY;
          ctx.beginPath();
          ctx.arc(nx, ny, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Spawn target on interval
      if (!e.target.active && now >= e.nextSpawnTime) {
        spawnTarget(W, H, e.level, e.combo);
      }

      // Timeout Check
      if (e.target.active) {
        const age = now - e.target.spawnTime;
        if (drillTimeout.isEnabled() && age >= e.target.ttl) {
          e.target.active = false;
          e.timeouts += 1;
          if (drillPenalty.isEnabled(TIME_PER_HIT === 2)) e.timeLeft -= TIME_PENALTY;
          e.combo = 0;
          setUiCombo(0);
          e.screenShake = 6;
          triggerFlash();
          drillAudio.playPenalty();
          const config = getLevelConfig(e.level, e.combo);
          const delay = config.spawnDelayMin + Math.random() * (config.spawnDelayMax - config.spawnDelayMin);
          e.nextSpawnTime = now + delay;
        }
      }

      // Draw active target
      if (e.target.active) {
        drawTacticalTarget(ctx, e.target.x, e.target.y, e.target.radius, TARGET_FILL_COLOR);
      }

      // Ring Bursts Draw
      drawHitRings(ctx, e.hitRings, dt);

      // Particles Update & Draw
      for (let i = e.particles.length - 1; i >= 0; i--) {
        const p = e.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= dt * 2.5;
        if (p.life <= 0) {
          e.particles.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      // Tactical Pro White Crosshair
      if (mousePosRef.current.active && gameState === 'playing') {
        const { x: mx, y: my } = mousePosRef.current;
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
        ctx.shadowBlur = 3;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;

        // 4 crosshair arms: 14px outer, 4px inner gap
        ctx.beginPath();
        ctx.moveTo(mx, my - 14); ctx.lineTo(mx, my - 4);
        ctx.moveTo(mx, my + 4);  ctx.lineTo(mx, my + 14);
        ctx.moveTo(mx - 14, my); ctx.lineTo(mx - 4, my);
        ctx.moveTo(mx + 4, my);  ctx.lineTo(mx + 14, my);
        ctx.stroke();

        // Center dot
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(mx, my, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      ro.disconnect();
    };
  }, [gameState, endGame, spawnTarget, triggerFlash]);

  // Share Score Card helper
  const sharePage = useCallback(async () => {
    const url = 'https://skilldrills.online/drills/reaction-speed/saccadic-gallery';
    try {
      const canvas = generateShareCard({
        score: uiScore,
        accuracy: analytics.accuracy,
        speed: analytics.avgReactionTime,
        drillName: t('saccadicGallery.title', 'Saccadic Eye Exercises'),
        rank: analytics.grade?.letter || 'A',
        rankName: analytics.grade?.label || 'ELITE REFLEX',
        playerName: getPlayerName(),
        level: analytics.finalLevel,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        url: 'skilldrills.online/drills/reaction-speed/saccadic-gallery'
      });

      await shareScoreCard(url, canvas);
    } catch (err) {
      if (navigator.share) {
        navigator.share({
          title: t('saccadicGallery.scoreShareTitleShort', 'Saccadic Gallery'),
          text: t('saccadicGallery.scoreShareTextShort', 'I scored {score} on Saccadic Gallery! Can you beat my score?').replace('{score}', String(uiScore)),
          url
        }).catch(() => {});
      }
    }
  }, [uiScore, analytics, t]);

  return (
    <div className="min-h-screen bg-[#050508] text-white flex flex-col font-sans select-none">
      
      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col gap-6">

        {/* Drill Header */}
        {!isFullscreen && (
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              <span data-seo-kw="1">{copy?.title || t('saccadicGallery.title', 'Saccadic Eye Exercises')}</span>
            </h1>
            <p className="text-[13px] text-slate-400 leading-relaxed">
              {copy?.caption || t('saccadicGallery.caption', 'Shift your gaze between targets quickly and click each one with precision.')}
            </p>
          </div>
        )}

        {/* Live Stat Cards */}
        {!isFullscreen && (
          <div className="grid grid-cols-4 gap-2 w-full -mb-2">
            {[
              { label: t('saccadicGallery.score', 'Score'), value: uiScore, color: 'text-red-400' },
              { label: t('saccadicGallery.time', 'Time'), value: `${uiTimeLeft}s`, color: uiTimeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white' },
              { label: t('saccadicGallery.level', 'Level'), value: `L${uiLevel}`, color: 'text-indigo-400' },
              { label: t('saccadicGallery.bestScore', 'Best Score'), value: bestScore, color: 'text-amber-400' },
            ].map(card => (
              <div key={card.label} className="border border-white/[0.06] bg-white/[0.015] px-2 py-2 rounded-xl text-center">
                <div className="text-[10px] font-bold tracking-wider uppercase text-slate-500">{card.label}</div>
                <div className={`text-base sm:text-lg font-black tabular-nums ${card.color || 'text-white'}`}>{card.value}</div>
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
          {/* Red Flash Overlay */}
          <DrillFlashOverlay flashes={flashes} />

          {/* IN-BOX OVERLAY HUD */}
          {(gameState === 'playing' || gameState === 'countdown') && (
            <>
              <div className="absolute top-4 left-4 z-30 pointer-events-none flex flex-col">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{t('saccadicGallery.score', 'Score')}</p>
                <p className="text-2xl sm:text-3xl font-black text-white tabular-nums leading-tight">{uiScore}</p>
              </div>
              <div className="absolute top-4 right-4 z-30 pointer-events-none text-right">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{t('saccadicGallery.timeLeft', 'Time Left')}</p>
                <p className={`text-2xl sm:text-3xl font-black tabular-nums leading-tight ${uiTimeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>{uiTimeLeft}s</p>
              </div>
            </>
          )}

          {/* IN-GAME HUD SOUND + FLASH TOGGLES */}
          {(gameState === 'playing' || gameState === 'countdown') && (
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
                title={t('saccadicGallery.toggleMissFlash', 'Toggle Miss Flash')}
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
                title={t('saccadicGallery.toggleSound', 'Toggle Sound')}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-red-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              </button>
            </div>
          )}

          {/* CANVAS */}
          <canvas 
            ref={canvasRef} 
            onPointerDown={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              mousePosRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
              handleCanvasInteraction(e.clientX, e.clientY);
            }}
            onPointerMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              mousePosRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
            }}
            onPointerLeave={() => {
              mousePosRef.current.active = false;
            }}
            className="block absolute top-0 left-0 w-full h-full z-10 touch-none cursor-crosshair"
          />

          {/* START CARD */}
          {gameState === 'start' && (
            <FpsStartCard
              icon={Target}
              accent="red"
              title={copy?.title || t('saccadicGallery.title', 'Saccadic Eye Exercises')}
              subtitle={copy?.subtitle || t('saccadicGallery.subtitle', 'Rapid Gaze Shifts • Visual Acquisition')}
              isTouchOnlyDevice={false}
              onStart={enterDrill}
            />
          )}

          {/* COUNTDOWN OVERLAY */}
          {gameState === 'countdown' && (
            <DrillCountdown value={countdownValue} subtitle={t('saccadicGallery.getReady', 'GET READY')} />
          )}

          {/* UNIVERSAL RESULT CARD */}
          {gameState === 'gameOver' && analytics.grade && (
            <DrillResultCard
              accent="rose"
              grade={analytics.grade}
              score={uiScore}
              isNewBest={isNewBest}
              stats={[
                { label: t('saccadicGallery.accuracy', 'Accuracy'), value: analytics.accuracy, suffix: '%' },
                { label: t('saccadicGallery.avgReaction', 'Avg Reaction'), value: analytics.avgReactionTime, suffix: 'ms' },
                { label: t('saccadicGallery.peakLevel', 'Peak Level'), value: `Lv. ${analytics.finalLevel}` },
                { label: t('saccadicGallery.maxCombo', 'Max Combo'), value: analytics.maxCombo, suffix: 'x' },
              ]}
              onPlayAgain={enterDrill}
              onBeforeShare={() => setIsFullscreen(false)}
              onShare={sharePage}
              onExit={handleExitDrill}
            />
          )}

        </div>

        {/* ACCORDIONS */}
        {!isFullscreen && (
          <div className="[&>div]:!mt-0">
            <DrillAccordion
              id="rules"
              title={t('saccadicGallery.rulesTitle', 'Drill Instructions & Scoring System')}
              isOpen={openAccordion === 'rules'}
              onToggle={() => setOpenAccordion(openAccordion === 'rules' ? null : 'rules')}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
                {RULES_ITEMS.map((item) => (
                  <RuleItem
                    key={item.num}
                    num={item.num}
                    text={t(item.textKey, item.text)}
                    highlight={item.num === '4' && penaltyEnabled ? t('saccadicGallery.rule4HighlightPenalty', '-0.8s Penalty') : t(item.highlightKey, item.highlight)}
                    result={item.num === '4' && penaltyEnabled ? t('saccadicGallery.rule4ResultPenalty', 'Deducts 0.8s & resets combo') : t(item.resultKey, item.result)}
                  />
                ))}
              </div>
            </DrillAccordion>

            <DrillAccordion
              id="about"
              title={t('saccadicGallery.aboutTitle', 'About Saccadic Gallery')}
              isOpen={openAccordion === 'about'}
              onToggle={() => setOpenAccordion(openAccordion === 'about' ? null : 'about')}
            >
              <div className="space-y-8 font-sans">
                <section>
                  <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-red-400" /> {t('saccadicGallery.aboutHeading', 'What Is Saccadic Eye Movement & Gallery Training?')}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3 text-gray-300">
                    {t('saccadicGallery.aboutP1', 'Saccadic Gallery trains rapid eye movements between fixation points. In competitive games, saccadic speed influences how quickly your gaze reaches targets across different screen regions.')}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {t('saccadicGallery.aboutP2', 'Repeatedly shifting focus across timed nodes develops visual acquisition and hand-eye coordination without claiming to diagnose or treat an eye condition.')}
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-gray-800 bg-white/[0.02]">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center"><Users className="w-3.5 h-3.5 text-white" /></div>
                      <h4 className="text-xs font-bold text-white">{t('saccadicGallery.audienceTitle', 'Who Should Use This?')}</h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{t('saccadicGallery.audienceDesc', 'Gamers and esports athletes sharpening rapid gaze acquisition, visual scanning, and first-shot accuracy.')}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-800 bg-white/[0.02]">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5 text-white" /></div>
                      <h4 className="text-xs font-bold text-white">{t('saccadicGallery.calibrationTitle', 'Saccadic Gaze Calibration')}</h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{t('saccadicGallery.calibrationDesc', 'Practise controlled gaze shifts across screen sectors while keeping each fixation brief and accurate.')}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-800 bg-white/[0.02]">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-white" /></div>
                      <h4 className="text-xs font-bold text-white">{t('saccadicGallery.acquisitionTitle', 'Rapid Target Acquisition')}</h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{t('saccadicGallery.acquisitionDesc', 'Build faster visual-to-motor timing when a new target appears.')}</p>
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

// === Subcomponents ===
function RuleItem({ num, text, highlight = '', result }: { num: string; text: string; highlight?: string; result: string }) {
  return (
    <div className="flex items-center gap-3 bg-black px-4 py-3 rounded-xl border border-white/10 shadow-sm font-sans min-w-0">
      <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-black shadow-lg flex-shrink-0">
        {num}
      </div>
      <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
        <p className="text-xs sm:text-sm font-medium text-gray-100 font-sans truncate">
          {text}{highlight && <span className="font-black text-white"> ({highlight})</span>}
        </p>
        <div className="text-xs font-black px-2.5 py-1 rounded-lg bg-[#050811] border border-white/10 text-white whitespace-nowrap shadow-inner tracking-wide flex-shrink-0">
          {result}
        </div>
      </div>
    </div>
  );
}
