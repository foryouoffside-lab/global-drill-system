'use client';

import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Play, RefreshCw, Timer, Share2, LogOut, Check, Sun, Moon, Volume2, VolumeX, Target, Trophy, TrendingUp, Zap } from 'lucide-react';

import DrillCountdown from '../../../../components/drill/DrillCountdown';
import DrillAccordion from '../../../../components/drill/DrillAccordion';
import ZigZagPathPursuitStartCard from '../../../../components/drill/ZigZagPathPursuitStartCard';
import { drillAudio } from '../../../../lib/drillAudio';
import { drawTacticalTarget } from '../../../../lib/canvasFx';
import { createBackdropCache, isFrameSkippable } from '../trackingCanvas';
import useUnexpectedExitGuard from '../../../../lib/useUnexpectedExitGuard';
import useImmersiveMode from '@/lib/useImmersiveMode';
import { getConstantSlowPursuitUi } from '@/lib/i18n/drills/constantSlowPursuitNative';

const STORAGE_KEY = 'skilldrills_visual_tracking_constant_slow_pursuit_v2';

const RELATED_DRILLS = [
  { id: "sine-wave-pursuit", name: "Sine Wave Pursuit Training", cat: "Visual Tracking", desc: "Train smooth pursuit along vertical and horizontal sine oscillations.", href: "/drills/visual-tracking/sine-wave-pursuit" },
  { id: "infinity-pursuit", name: "Figure-8 Eye Tracking Exercise", cat: "Visual Tracking", desc: "Track targets along figure-8 infinity loops at custom speeds.", href: "/drills/visual-tracking/infinity-pursuit" },
  { id: "directional-chaos-pursuit", name: "Erratic Motion Eye Drill", cat: "Visual Tracking", desc: "Complex multi-directional visual tracking with sudden direction shifts.", href: "/drills/visual-tracking/directional-chaos-pursuit" },
  { id: "predictive-pursuit", name: "Predictive Eye Tracking Drill", cat: "Visual Tracking", desc: "Condition ocular anticipation across occluded trajectories.", href: "/drills/visual-tracking/predictive-pursuit" },
  { id: "dynamic-evasion-pursuit", name: "Reactive Eye Tracking Drill", cat: "Visual Tracking", desc: "Respond to unpredictable evasive direction changes in real-time.", href: "/drills/visual-tracking/dynamic-evasion-pursuit" },
  { id: "ghosting-suppress-pursuit", name: "Eye Fixation Stability Training", cat: "Visual Tracking", desc: "Build visual fixation stability and suppress retinal ghosting artifacts.", href: "/drills/visual-tracking/ghosting-suppress-pursuit" }
];

const colorPresets = [
  { name: 'Red', value: '#ef4444' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Green', value: '#10b981' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Purple', value: '#a855f7' },
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

export default function ConstantSlowPursuitClient({ copy }: { copy?: Record<string, any> } = {}) {
  const ui = copy || getConstantSlowPursuitUi().constantSlowPursuit;
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
    angle: 0,
    trail: [] as { x: number; y: number }[]
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
    const url = 'https://skilldrills.online/drills/visual-tracking/constant-slow-pursuit';
    const text = ui.shareText.replace('{score}', speedMultiplier.toFixed(1));
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: ui.shareTitle, text, url });
      } catch (e) {}
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      alert('Drill link copied to clipboard!');
    }
  }, [speedMultiplier, ui]);

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

  // Direct Exit Lifecycle: Esc and Fullscreen Exit (R6)
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

    countdownTimeoutsRef.current.forEach(clearTimeout);
    countdownTimeoutsRef.current = [];
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    drillAudio.init();

    setUiTimeLeft(selectedDuration);
    trackingState.current.angle = 0;
    trackingState.current.trail = [];
    mousePosRef.current = { x: 0, y: 0, active: false };

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

  // Canvas Render Loop
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

    const getLissajous = (t: number, W: number, H: number) => {
      const cx = W / 2;
      const cy = H / 2;
      return {
        x: cx + Math.cos(t * 3) * (W * 0.38),
        y: cy + Math.sin(t * 4) * (H * 0.38)
      };
    };

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

      // Calculate dynamic speed with random acceleration if enabled
      let effectiveSpeed = speedMultiplier;
      if (randomSpeed) {
        const sec = ts / 1000;
        const perturb = 0.5 + 0.4 * Math.sin(sec * 1.7) * Math.cos(sec * 0.9) + 0.3 * Math.sin(sec * 3.2);
        effectiveSpeed = speedMultiplier * (0.6 + perturb * 1.1);
      }

      trackingState.current.angle += dt * 0.22 * effectiveSpeed;

      // The background is static while the target moves. Rasterize it once
      // per size/theme instead of rebuilding the full grid every frame.
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

      // Render Lissajous Path Guide ONLY if math is NOT invisible
      if (!mathInvisible) {
        ctx.strokeStyle = isDay ? 'rgba(2, 132, 199, 0.45)' : 'rgba(56, 189, 248, 0.22)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let t = 0; t < Math.PI * 2; t += 0.02) {
          const pt = getLissajous(t, W, H);
          if (t === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Target position
      const targetPos = getLissajous(trackingState.current.angle, W, H);

      // Gaze Trail Effect (matching directional-chaos-pursuit)
      if (trailEffect) {
        const trail = trackingState.current.trail;
        trail.push({ x: targetPos.x, y: targetPos.y });
        if (trail.length > 14) trail.shift();

        for (let i = 0; i < trail.length; i++) {
          const pt = trail[i];
          const alpha = ((i + 1) / trail.length) * 0.3;
          ctx.fillStyle = targetColor;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, targetSize * (0.3 + 0.6 * (i / trail.length)), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;
      }

      // Draw target ball (MATCHING DIRECTIONAL-CHAOS-PURSUIT EXACTLY WITH WHITE CENTER CORE)
            drawTacticalTarget(ctx, targetPos.x, targetPos.y, targetSize, targetColor, glowEffect);

      // CRT Scanlines Overlay
      if (scanlinesActive) {
        ctx.fillStyle = isDay ? 'rgba(0, 0, 0, 0.02)' : 'rgba(255, 255, 255, 0.015)';
        for (let i = 0; i < H; i += 4) {
          ctx.fillRect(0, i, W, 1.5);
        }
      }

      // Render Tactical Pro White Crosshair (R5)
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
        {/* Title & AEO Answer Block */}
        {!isFullscreen && (
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              <span data-seo-kw="1">{ui.title}</span>
              <span className="block text-sm font-semibold text-slate-400 mt-0.5 normal-case tracking-normal">
                {ui.subtitle}
              </span>
            </h1>
          </div>
        )}

        {/* Live Stat Cards */}
        {!isFullscreen && (
          <div className="grid grid-cols-4 gap-2 w-full -mb-2">
            <div className="bg-[#0d0d18] border border-white/5 rounded-xl p-2.5 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{ui.status}</div>
              <div className="text-lg sm:text-xl font-black text-red-400 tabular-nums">
                {gameState === 'playing' ? ui.tracking : gameState === 'gameOver' ? ui.complete : ui.standby}
              </div>
            </div>
            <div className="bg-[#0d0d18] border border-white/5 rounded-xl p-2.5 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{ui.timeLeft}</div>
              <div className={`text-lg sm:text-xl font-black tabular-nums ${uiTimeLeft <= 10 && gameState === 'playing' ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                {uiTimeLeft}s
              </div>
            </div>
            <div className="bg-[#0d0d18] border border-white/5 rounded-xl p-2.5 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{ui.speed}</div>
              <div className="text-lg sm:text-xl font-black text-indigo-400 tabular-nums">{speedMultiplier.toFixed(1)}x</div>
            </div>
            <div className="bg-[#0d0d18] border border-white/5 rounded-xl p-2.5 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{ui.sessions}</div>
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
              <p className={`text-[10px] font-semibold uppercase tracking-wider ${dayMode ? 'text-slate-500' : 'text-white/50'}`}>{ui.timeLeft}</p>
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
                title={ui.sound}
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
            className={`block absolute top-0 left-0 w-full h-full z-10 ${
              gameState === 'playing' ? 'cursor-none pointer-events-auto' : 'pointer-events-none'
            }`}
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
              copy={ui}
            />
          )}

          {/* COUNTDOWN OVERLAY */}
          {gameState === 'countdown' && (
            <DrillCountdown value={countdownValue} subtitle={ui.getReady} accent="#ef4444" />
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
                  {ui.sessionComplete}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 text-center font-bold">
                  {ui.calibrated}
                </div>
              </div>

              {/* Right Stats & Actions Panel */}
              <div className="flex-1 flex flex-col justify-center gap-3 px-6 py-4 min-w-0">
                
                {/* 4 Stat Tiles */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-sm sm:text-base font-black text-white">{selectedDuration}s</p>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{ui.sessionTime}</p>
                  </div>
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-sm sm:text-base font-black text-white">{speedMultiplier.toFixed(1)}x</p>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{ui.baseSpeed}</p>
                  </div>
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-sm sm:text-base font-black text-white">{totalTrials}</p>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{ui.sessionsCompleted}</p>
                  </div>
                  <div className="bg-black border border-white/5 p-2.5 rounded-xl text-center">
                    <p className="text-xs sm:text-sm font-black text-white">{randomSpeed ? ui.enabled : ui.fixed}</p>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{ui.acceleration}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    type="button"
                    onClick={enterDrill} 
                    className="flex-1 py-3 rounded-[13px] bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs uppercase tracking-wide cursor-pointer transition-transform active:scale-[0.98] shadow-md flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> {ui.playAgain}
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
                    title={ui.returnOptions}
                  >
                    <LogOut className="w-4 h-4 text-red-400" />
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Drill Caption */}
        {!isFullscreen && (
          <p className="text-xs text-slate-400 leading-relaxed -mt-2">
            {ui.caption}
          </p>
        )}

        {/* ACCORDION SECTION */}
        {!isFullscreen && (
          <div className="[&>div]:!mt-0">
            <DrillAccordion
              id="rules"
              title={ui.rules}
              isOpen={openAccordion === 'rules'}
              onToggle={() => setOpenAccordion(openAccordion === 'rules' ? null : 'rules')}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
                {[
                  { num: "1", text: ui.ruleItems[0].title, highlight: ui.ruleItems[0].detail, result: ui.ruleItems[0].badge },
                  { num: "2", text: ui.ruleItems[1].title, highlight: `${selectedDuration}s ${ui.sessionTime}`, result: ui.ruleItems[1].badge },
                  { num: "3", text: ui.ruleItems[2].title, highlight: mathInvisible ? `${ui.enabled} (${ui.hideLine})` : ui.fixed, result: ui.ruleItems[2].badge },
                  { num: "4", text: ui.ruleItems[3].title, highlight: randomSpeed ? ui.enabled : ui.fixed, result: ui.ruleItems[3].badge }
                ].map((item) => (
                  <RuleItem key={item.num} num={item.num} text={item.text} highlight={item.highlight} result={item.result} />
                ))}
              </div>
            </DrillAccordion>

            <DrillAccordion
              id="about"
              title={ui.about}
              isOpen={openAccordion === 'about'}
              onToggle={() => setOpenAccordion(openAccordion === 'about' ? null : 'about')}
            >
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-slate-300">
                  {ui.aboutText}
                </p>
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
