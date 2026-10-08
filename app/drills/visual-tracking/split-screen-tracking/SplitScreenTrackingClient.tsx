'use client';

import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Play, RefreshCw, Timer, Share2, LogOut, Check, Sun, Moon, Volume2, VolumeX, Target, Trophy, TrendingUp, Zap } from 'lucide-react';

import DrillAccordion from '../../../../components/drill/DrillAccordion';
import { useTranslation } from '@/lib/i18n/useTranslation';
import DrillCountdown from '../../../../components/drill/DrillCountdown';
import ZigZagPathPursuitStartCard from '../../../../components/drill/ZigZagPathPursuitStartCard';
import { drillAudio } from '../../../../lib/drillAudio';
import { drawTacticalTarget } from '../../../../lib/canvasFx';
import { createBackdropCache, isFrameSkippable } from '../trackingCanvas';
import useUnexpectedExitGuard from '../../../../lib/useUnexpectedExitGuard';
import useImmersiveMode from '@/lib/useImmersiveMode';

const STORAGE_KEY = 'skilldrills_visual_tracking_split_screen_tracking_v2';

const RELATED_DRILLS = [
  { id: "constant-slow-pursuit", name: "Smooth Pursuit Eye Exercise", cat: "Visual Tracking", desc: "Condition smooth pursuit tracking along continuous Lissajous curves.", href: "/drills/visual-tracking/constant-slow-pursuit" },
  { id: "directional-chaos-pursuit", name: "Erratic Motion Eye Drill", cat: "Visual Tracking", desc: "Complex multi-directional visual tracking with sudden direction shifts.", href: "/drills/visual-tracking/directional-chaos-pursuit" },
  { id: "dynamic-evasion-pursuit", name: "Reactive Eye Tracking Drill", cat: "Visual Tracking", desc: "Re-acquire targets executing rapid evasive directional changes.", href: "/drills/visual-tracking/dynamic-evasion-pursuit" },
  { id: "peripheral-ping-pursuit", name: "Peripheral Vision Training Drill", cat: "Visual Tracking", desc: "Strengthen peripheral visual field tracking and reaction time.", href: "/drills/visual-tracking/peripheral-ping-pursuit" },
  { id: "infinity-pursuit", name: "Figure-8 Eye Tracking Exercise", cat: "Visual Tracking", desc: "Condition continuous pursuit across figure-8 infinity loops.", href: "/drills/visual-tracking/infinity-pursuit" },
  { id: "spatial-shift-pursuit", name: "Adaptive Eye Tracking Drill", cat: "Visual Tracking", desc: "Track shifting targets across sudden spatial displacements.", href: "/drills/visual-tracking/spatial-shift-pursuit" }
];

const getSavedData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { totalSessions: 0 };
    return { totalSessions: 0, ...JSON.parse(raw) };
  } catch (e) {
    return { totalSessions: 0 };
  }
};

const saveData = (data: { totalSessions: number }) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
};

export default function SplitScreenTrackingClient({ copy }: { copy?: { title?: string; subtitle?: string; description?: string } } = {}) {
  const { locale } = useTranslation();
  const [gameState, setGameState] = useState<'start' | 'countdown' | 'playing' | 'gameOver'>('start');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  useImmersiveMode(isFullscreen); // locks the page behind while the drill fills the screen
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [countdownValue, setCountdownValue] = useState<number | string>(3);
  const [dayMode, setDayMode] = useState<boolean>(false); // Day Mode (White BG) / Night Mode (Dark BG)

  // User Settings States (ALL INITIALLY OFF BY DEFAULT)
  const [selectedDuration, setSelectedDuration] = useState<number>(60); // 30, 45, 60, 90, 120 seconds
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0); // 0.5x to 9.0x
  const [targetSize, setTargetSize] = useState<number>(16); // 10px to 50px
  const [targetColor, setTargetColor] = useState<string>('#ef4444'); // Default Cyber Red
  const [mathInvisible, setMathInvisible] = useState<boolean>(false); // OFF initially
  const [randomSpeed, setRandomSpeed] = useState<boolean>(false); // OFF initially
  const [trailEffect, setTrailEffect] = useState<boolean>(false); // OFF initially
  const [glowEffect, setGlowEffect] = useState<boolean>(true); // ON by default — matches barrier-sequence-pursuit's target look
  const [scanlinesActive, setScanlinesActive] = useState<boolean>(false); // OFF initially

  // Session Stats
  const [uiTimeLeft, setUiTimeLeft] = useState<number>(60);
  const [totalTrials, setTotalTrials] = useState<number>(0);

  // DOM & Physics Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const countdownTimeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const mousePosRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  const trackingState = useRef({
    ly: 0,
    lvy: 200,
    rx: 0,
    rvx: 200,
    leftTrail: [] as { x: number; y: number }[],
    rightTrail: [] as { x: number; y: number }[]
  });

  const settingsRef = useRef({
    speedMultiplier,
    targetSize,
    targetColor,
    mathInvisible,
    randomSpeed,
    trailEffect,
    glowEffect,
    scanlinesActive,
    dayMode
  });

  useEffect(() => {
    setSoundEnabled(drillAudio.isEnabled());
    settingsRef.current = {
      speedMultiplier,
      targetSize,
      targetColor,
      mathInvisible,
      randomSpeed,
      trailEffect,
      glowEffect,
      scanlinesActive,
      dayMode
    };
  }, [speedMultiplier, targetSize, targetColor, mathInvisible, randomSpeed, trailEffect, glowEffect, scanlinesActive, dayMode]);

  // Mobile Detection & Saved Stats Loading
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        const ua = navigator.userAgent || '';
        const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) || (window.innerWidth < 768);
        setIsMobile(mobileCheck);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);

      const saved = getSavedData();
      setTotalTrials(saved.totalSessions || 0);

      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Cleanup Timeouts on Unmount
  useEffect(() => {
    return () => {
      countdownTimeoutsRef.current.forEach(clearTimeout);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  const sharePage = useCallback(async () => {
    setIsFullscreen(false);
    const url = 'https://skilldrills.online/drills/visual-tracking/split-screen-tracking';
    const text = 'Split-Screen Tracking - Free Visual Tracking & Gaze Calibration Drill!';
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: 'Split-Screen Tracking Drill', text, url });
      } catch (e) {}
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      alert('Drill link copied to clipboard!');
    }
  }, []);

  const handleExitDrill = useCallback(async () => {
    markIntentionalExit();
    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    setIsFullscreen(false);
    setGameState('start');
  }, []);

  const { markIntentionalExit } = useUnexpectedExitGuard({
    active: gameState === 'playing' || gameState === 'countdown',
    onUnexpectedExit: handleExitDrill,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (gameState === 'playing' || gameState === 'countdown')) {
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
  }, [gameState, isFullscreen, handleExitDrill]);

  // Complete Drill Session cleanly
  const endGame = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    setGameState('gameOver');

    setTotalTrials((prev) => {
      const next = prev + 1;
      saveData({ totalSessions: next });
      return next;
    });
    drillAudio.playSessionEnd();
  }, []);

  const enterDrill = useCallback(async () => {
    setIsFullscreen(true);
    mousePosRef.current = { x: 0, y: 0, active: false };

    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    drillAudio.init();

    setUiTimeLeft(selectedDuration);

    const cvs = canvasRef.current;
    const w = cvs ? cvs.width : 800;
    const h = cvs ? cvs.height : 450;
    trackingState.current = {
      ly: h * 0.5,
      lvy: 220,
      rx: w * 0.75,
      rvx: 220,
      leftTrail: [],
      rightTrail: []
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

      // Start 1-second Interval Timer
      let remaining = selectedDuration;
      timerIntervalRef.current = setInterval(() => {
        remaining -= 1;
        setUiTimeLeft(remaining);
        if (remaining <= 0) {
          endGame();
        }
      }, 1000);

    }, 2450);

    countdownTimeoutsRef.current = [t1, t2, t3, t4];
  }, [selectedDuration, endGame]);

  // Canvas Render Loop (Split Screen Dual Target Physics)
  useLayoutEffect(() => {
    if (gameState !== 'playing') return;
    const cvs = canvasRef.current;
    const container = containerRef.current;
    if (!cvs || !container) return;

    const ctx = cvs.getContext('2d', { alpha: false });
    if (!ctx) return;

    let canvasWidth = 0;
    let canvasHeight = 0;

    const updateSize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      canvasWidth = rect.width;
      canvasHeight = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      // Reassigning either dimension clears the canvas, even at the same size.
      if (cvs.width !== Math.trunc(rect.width * dpr) || cvs.height !== Math.trunc(rect.height * dpr)) {
        cvs.width = rect.width * dpr;
        cvs.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
      }
    };

    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(container);

    let lastTime = performance.now();
    let backdropCache: { key: string; canvas: HTMLCanvasElement | null } = { key: '', canvas: null };

    const draw = (ts: number) => {
      if (isFrameSkippable(ts, lastTime)) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      const deltaTimeMs = ts - lastTime;
      lastTime = ts;
      const dt = Math.min(deltaTimeMs / 1000, 0.1);

      const W = canvasWidth;
      const H = canvasHeight;

      const { speedMultiplier, targetSize, targetColor, mathInvisible, randomSpeed, trailEffect, glowEffect, scanlinesActive, dayMode: isDay } = settingsRef.current;

      // Calculate dynamic speed multiplier with random acceleration if enabled
      let effectiveSpeed = speedMultiplier;
      if (randomSpeed) {
        const sec = ts / 1000;
        const perturb = 0.5 + 0.4 * Math.sin(sec * 1.7) * Math.cos(sec * 0.9) + 0.3 * Math.sin(sec * 3.2);
        effectiveSpeed = speedMultiplier * (0.6 + perturb * 1.1);
      }

      const scaledDt = dt * effectiveSpeed;

      // Clear Canvas Background (Pure White in Day Mode `#ffffff`, Deep Black in Night Mode `#050508`)
      const backdropKey = `${W}x${H}:${isDay ? 'day' : 'night'}`;
      if (backdropCache.key !== backdropKey) {
        backdropCache = {
          key: backdropKey,
          canvas: createBackdropCache(W, H, (backdropCtx, width, height) => {
            backdropCtx.fillStyle = isDay ? '#ffffff' : '#050508';
            backdropCtx.fillRect(0, 0, width, height);
            backdropCtx.strokeStyle = isDay ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.02)';
            backdropCtx.lineWidth = 1;
            for (let x = 0; x < width; x += 40) {
              backdropCtx.beginPath(); backdropCtx.moveTo(x, 0); backdropCtx.lineTo(x, height); backdropCtx.stroke();
            }
            for (let y = 0; y < height; y += 40) {
              backdropCtx.beginPath(); backdropCtx.moveTo(0, y); backdropCtx.lineTo(width, y); backdropCtx.stroke();
            }
          })
        };
      }
      if (backdropCache.canvas) ctx.drawImage(backdropCache.canvas, 0, 0, W, H);

      // Render Center Split Line ONLY if math is NOT invisible
      if (!mathInvisible) {
        ctx.strokeStyle = isDay ? 'rgba(2, 132, 199, 0.45)' : 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(W / 2, 0);
        ctx.lineTo(W / 2, H);
        ctx.stroke();

        // Left Vertical Motion Axis
        ctx.strokeStyle = isDay ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.06)';
        ctx.beginPath();
        ctx.moveTo(W * 0.25, H * 0.1); ctx.lineTo(W * 0.25, H * 0.9);
        ctx.stroke();

        // Right Horizontal Motion Axis
        ctx.beginPath();
        ctx.moveTo(W / 2 + W * 0.05, H / 2); ctx.lineTo(W * 0.95, H / 2);
        ctx.stroke();
      }

      // Physics Left Target (Vertical Oscillation in Left Half)
      trackingState.current.ly += trackingState.current.lvy * scaledDt;
      if (trackingState.current.ly < H * 0.1) {
        trackingState.current.ly = H * 0.1;
        trackingState.current.lvy = Math.abs(trackingState.current.lvy);
      } else if (trackingState.current.ly > H * 0.9) {
        trackingState.current.ly = H * 0.9;
        trackingState.current.lvy = -Math.abs(trackingState.current.lvy);
      }

      // Physics Right Target (Horizontal Oscillation in Right Half)
      trackingState.current.rx += trackingState.current.rvx * scaledDt;
      if (trackingState.current.rx < W / 2 + W * 0.05) {
        trackingState.current.rx = W / 2 + W * 0.05;
        trackingState.current.rvx = Math.abs(trackingState.current.rvx);
      } else if (trackingState.current.rx > W * 0.95) {
        trackingState.current.rx = W * 0.95;
        trackingState.current.rvx = -Math.abs(trackingState.current.rvx);
      }

      const leftX = W * 0.25;
      const leftY = trackingState.current.ly;
      const rightX = trackingState.current.rx;
      const rightY = H / 2;

      // Gaze Trail Effect
      if (trailEffect) {
        const lTrail = trackingState.current.leftTrail;
        const rTrail = trackingState.current.rightTrail;
        lTrail.push({ x: leftX, y: leftY });
        rTrail.push({ x: rightX, y: rightY });
        if (lTrail.length > 12) lTrail.shift();
        if (rTrail.length > 12) rTrail.shift();

        for (let i = 0; i < lTrail.length; i++) {
          const alpha = ((i + 1) / lTrail.length) * 0.25;
          ctx.fillStyle = targetColor;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(lTrail[i].x, lTrail[i].y, targetSize * (0.3 + 0.6 * (i / lTrail.length)), 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(rTrail[i].x, rTrail[i].y, targetSize * (0.3 + 0.6 * (i / rTrail.length)), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;
      }

      // Draw Target Balls (Tactical Red Target Sphere matching reaction-speed's reference design)
      drawTacticalTarget(ctx, leftX, leftY, targetSize, targetColor, glowEffect);
      drawTacticalTarget(ctx, rightX, rightY, targetSize, targetColor, glowEffect);

      // CRT Scanlines Overlay
      if (scanlinesActive) {
        ctx.fillStyle = isDay ? 'rgba(0, 0, 0, 0.02)' : 'rgba(255, 255, 255, 0.015)';
        for (let i = 0; i < H; i += 4) {
          ctx.fillRect(0, i, W, 1.5);
        }
      }

      // Tactical Pro White Crosshair (R5)
      if (mousePosRef.current.active && gameState === 'playing') {
        const mx = mousePosRef.current.x;
        const my = mousePosRef.current.y;
        ctx.save();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
        ctx.shadowBlur = 3;

        // Crosshair arms (14px outer radius, 4px gap)
        ctx.beginPath();
        ctx.moveTo(mx, my - 4);
        ctx.lineTo(mx, my - 14);
        ctx.moveTo(mx, my + 4);
        ctx.lineTo(mx, my + 14);
        ctx.moveTo(mx - 4, my);
        ctx.lineTo(mx - 14, my);
        ctx.moveTo(mx + 4, my);
        ctx.lineTo(mx + 14, my);
        ctx.stroke();

        // Center dot (2px radius)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(mx, my, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    // Paint the first target before React removes the countdown overlay.
    const firstFrameTime = performance.now();
    lastTime = firstFrameTime - 16;
    draw(firstFrameTime);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      ro.disconnect();
    };
  }, [gameState]);

  const colorPresets = [
    { name: 'Cyber Red', value: '#ef4444' },
    { name: 'Emerald Green', value: '#10b981' },
    { name: 'Neon Blue', value: '#38bdf8' },
    { name: 'Laser Orange', value: '#f97316' },
    { name: 'High-Vis Yellow', value: '#eab308' },
    { name: 'Pure White', value: '#ffffff' }
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white flex flex-col font-sans select-none">
      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col gap-6">
        {/* Title */}
        {!isFullscreen && (
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              <span data-seo-kw="1">{copy?.title || "Split-Screen Tracking"}</span>
              <span className="block text-sm font-semibold text-slate-400 mt-1 normal-case tracking-normal">
                {copy?.subtitle || "Divided Attention Eye Test"}
              </span>
            </h1>
          </div>
        )}

        {/* Live Stat Cards */}
        {!isFullscreen && (
          <div className="grid grid-cols-4 gap-2 w-full -mb-2">
            <div className="bg-[#0d0d18] border border-white/5 rounded-xl p-2.5 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Status</div>
              <div className="text-lg sm:text-xl font-black text-red-400 tabular-nums">
                {gameState === 'playing' ? 'TRACKING' : gameState === 'gameOver' ? 'COMPLETE' : 'STANDBY'}
              </div>
            </div>
            <div className="bg-[#0d0d18] border border-white/5 rounded-xl p-2.5 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Time Left</div>
              <div className={`text-lg sm:text-xl font-black tabular-nums ${uiTimeLeft <= 10 && gameState === 'playing' ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                {uiTimeLeft}s
              </div>
            </div>
            <div className="bg-[#0d0d18] border border-white/5 rounded-xl p-2.5 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Speed</div>
              <div className="text-lg sm:text-xl font-black text-indigo-400 tabular-nums">{speedMultiplier.toFixed(1)}x</div>
            </div>
            <div className="bg-[#0d0d18] border border-white/5 rounded-xl p-2.5 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Sessions</div>
              <div className="text-lg sm:text-xl font-black text-amber-400 tabular-nums">{totalTrials}</div>
            </div>
          </div>
        )}

        {/* Game Stage Container */}
        <div 
          ref={containerRef} 
          className={`overflow-hidden flex flex-col select-none border border-white/10 ${
            dayMode ? 'bg-[#ffffff]' : 'bg-[#080811]'
          } ${dayMode ? 'text-slate-900' : 'text-white'} ${
            isFullscreen ? 'fixed inset-0 z-[100] w-screen h-[100dvh] rounded-none border-none flex flex-col items-center justify-center' : 'w-full rounded-2xl aspect-video min-h-[460px] md:min-h-[500px] max-h-[88vh] max-md:aspect-[3/4] max-md:min-h-[420px] max-md:max-h-[76vh] relative overflow-hidden flex flex-col'
          }`}
        >

          {/* IN-BOX OVERLAY HUD: LABELLED TIMER, AS EVERY OTHER DRILL */}
          {gameState === 'playing' && (
            <div className="absolute top-4 right-4 z-30 pointer-events-none text-right">
              <p className={`text-[10px] font-semibold uppercase tracking-wider ${dayMode ? 'text-slate-500' : 'text-white/50'}`}>Time Left</p>
              <p className={`text-3xl sm:text-4xl font-black font-sans tabular-nums leading-none ${uiTimeLeft <= 10 ? 'text-red-400 animate-pulse' : (dayMode ? 'text-slate-900' : 'text-white/90')}`}>
                {uiTimeLeft}s
              </p>
            </div>
          )}

          {/* IN-GAME HUD SOUND TOGGLE — these drills have no miss-flash, so no flash toggle */}
          {(gameState === 'playing' || gameState === 'countdown') && (
            <div className="absolute bottom-4 right-4 z-40 flex items-center gap-2">
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

          {/* CANVAS */}
          <canvas 
            ref={canvasRef} 
            onPointerMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              mousePosRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                active: true,
              };
            }}
            onPointerLeave={() => {
              mousePosRef.current.active = false;
            }}
            onPointerDown={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              mousePosRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                active: true,
              };
            }}
            className={`block absolute top-0 left-0 w-full h-full z-10 ${gameState === 'playing' ? 'cursor-none' : 'cursor-default'}`} 
          />

          {/* START CARD */}
          {gameState === 'start' && (
            <ZigZagPathPursuitStartCard
              selectedDuration={selectedDuration}
              onDurationChange={setSelectedDuration}
              speedMultiplier={speedMultiplier}
              onSpeedChange={setSpeedMultiplier}
              targetSize={targetSize}
              onTargetSizeChange={setTargetSize}
              targetColor={targetColor}
              onTargetColorChange={setTargetColor}
              mathInvisible={mathInvisible}
              onMathInvisibleToggle={() => setMathInvisible(!mathInvisible)}
              randomSpeed={randomSpeed}
              onRandomSpeedToggle={() => setRandomSpeed(!randomSpeed)}
              trailEffect={trailEffect}
              onTrailEffectToggle={() => setTrailEffect(!trailEffect)}
              glowEffect={glowEffect}
              onGlowEffectToggle={() => setGlowEffect(!glowEffect)}
              scanlinesActive={scanlinesActive}
              onScanlinesToggle={() => setScanlinesActive(!scanlinesActive)}
              dayMode={dayMode}
              onDayModeToggle={() => setDayMode(!dayMode)}
              isMobile={isMobile}
              onStart={enterDrill}
            />
          )}

          {/* COUNTDOWN OVERLAY */}
          {gameState === 'countdown' && (
            <DrillCountdown value={countdownValue} subtitle="GET READY" accent="#ef4444" />
          )}

          {/* END SCREEN */}
          {gameState === 'gameOver' && (
            <div className="absolute inset-0 z-40 flex bg-neutral-950/98 select-none font-sans" style={{ background: 'rgba(5,5,8,0.97)' }} onPointerDown={e => e.stopPropagation()}>
              
              {/* Left Panel */}
              <div className="w-[38%] flex flex-col items-center justify-center gap-2 border-r border-white/5 px-4" style={{ background: 'radial-gradient(ellipse 260px 200px at 50% 30%, rgba(239,68,68,.12), transparent 70%)' }}>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg sm:text-2xl font-black text-white text-center tracking-tight leading-tight mt-1">
                  SESSION COMPLETE
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 text-center font-bold">
                  Smooth Pursuit Calibrated
                </div>
              </div>

              {/* Right Stats & Actions Panel */}
              <div className="flex-1 flex flex-col justify-center gap-3 px-6 py-4 min-w-0">
                
                {/* 4 Stat Tiles */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-sm sm:text-base font-black text-white">{selectedDuration}s</p>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">Session Time</p>
                  </div>
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-sm sm:text-base font-black text-white">{speedMultiplier.toFixed(1)}x</p>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">Base Speed</p>
                  </div>
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-sm sm:text-base font-black text-white">{totalTrials}</p>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">Sessions Completed</p>
                  </div>
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-xs sm:text-sm font-black text-white">{randomSpeed ? 'Enabled' : 'Fixed'}</p>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">Speed Acceleration</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    type="button"
                    onClick={enterDrill} 
                    className="flex-1 py-3 rounded-[13px] bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs uppercase tracking-wide cursor-pointer transition-transform active:scale-[0.98] shadow-md flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Play Again
                  </button>
                  <button 
                    type="button"
                    onClick={sharePage} 
                    className="w-11 flex-shrink-0 rounded-[13px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer active:scale-90 transition-transform" 
                    title="Share Drill Link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button 
                    type="button"
                    onClick={handleExitDrill} 
                    className="w-11 flex-shrink-0 rounded-[13px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer active:scale-90 transition-transform" 
                    title="Return to Options"
                  >
                    <LogOut className="w-4 h-4 text-red-400" />
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* ACCORDION SECTION */}
        {!isFullscreen && (
          <div className="[&>div]:!mt-0">
            <DrillAccordion
              id="rules"
              title="Drill Instructions & Settings"
              isOpen={openAccordion === 'rules'}
              onToggle={() => setOpenAccordion(openAccordion === 'rules' ? null : 'rules')}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
                {[
                  { num: "1", text: "Divided Attention", highlight: "Pure Visual", result: "Track dual orthogonal targets" },
                  { num: "2", text: "Time Adjusting", highlight: `${selectedDuration}s Duration`, result: "Customizable session timer" },
                  { num: "3", text: "Hide Line", highlight: mathInvisible ? "Enabled (Invisible)" : "Disabled (Visible)", result: "Toggle orthogonal guide axes" },
                  { num: "4", text: "Random Speed", highlight: randomSpeed ? "Enabled Acceleration" : "Disabled Velocity", result: "Erratic speed modulation" },
                ].map((item) => (
                  <RuleItem key={item.num} num={item.num} text={item.text} highlight={item.highlight} result={item.result} />
                ))}
              </div>
            </DrillAccordion>
            {(locale === 'en' || copy?.description) && (
              <DrillAccordion id="about" title="About Split-Screen Tracking" isOpen={openAccordion === 'about'} onToggle={() => setOpenAccordion(openAccordion === 'about' ? null : 'about')}>
                <p className="text-sm text-slate-300 leading-relaxed">{copy?.description || "Split-screen tracking conditions divided visual attention by training observers to monitor two independent targets moving along orthogonal vertical and horizontal axes simultaneously. By utilizing covert peripheral vision between hemifields, this drill strengthens parallel visual processing and reduces attentional tunneling (Pylyshyn & Storm, 1988; Alvarez & Cavanagh, 2005). Most people can track about four or five independent moving targets at once, with accuracy falling away sharply beyond that (Pylyshyn & Storm, 1988)."}</p>
              </DrillAccordion>
            )}
          </div>
        )}

      </main>
    </div>
  );
}

// === Subcomponents ===
function RuleItem({ num, text, highlight = '', result }: { num: string; text: string; highlight?: string; result: string }) {
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
