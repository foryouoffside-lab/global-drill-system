// Keep the backdrop at the same resolution as the visible drill canvas.
// Scaling a full 2x backdrop into a 1.5x canvas on every frame is costly.
export function createBackdropCache(
  width: number,
  height: number,
  draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => void
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.scale(dpr, dpr);
    draw(ctx, width, height);
  }
  return canvas;
}

// A strict 16.67 ms cutoff can discard every other rAF on 60 Hz screens.
// 13 ms draws on every 60 Hz tick and about every second 120/144 Hz tick.
export function isFrameSkippable(time: number, lastTime: number): boolean {
  return time - lastTime < 13;
}

export type PursuitPointer = { x: number; y: number; active: boolean } | null;

export type PursuitMetrics = {
  totalMs: number;
  pointerMs: number;
  onTargetMs: number;
  errMs: number;
  errSqMs: number;
  radiusMs: number;
};

export type PursuitSummary = {
  sampledSec: number;
  timeOnTargetPct: number | null;
  pointerCoveragePct: number | null;
  meanErrorPx: number | null;
  rmsErrorPx: number | null;
  meanErrorRadiusPct: number | null;
  rmsErrorRadiusPct: number | null;
};

export const PURSUIT_MAX_SAMPLE_GAP_MS = 100;

export function createPursuitMetrics(): PursuitMetrics {
  return { totalMs: 0, pointerMs: 0, onTargetMs: 0, errMs: 0, errSqMs: 0, radiusMs: 0 };
}

export function samplePursuit(
  m: PursuitMetrics,
  dtMs: number,
  pointer: PursuitPointer,
  targetX: number,
  targetY: number,
  radius: number
): void {
  if (!(dtMs > 0) || dtMs > PURSUIT_MAX_SAMPLE_GAP_MS) return;
  if (typeof document !== 'undefined' && document.hidden) return;
  m.totalMs += dtMs;
  if (!pointer || !pointer.active) return;
  const d = Math.hypot(pointer.x - targetX, pointer.y - targetY);
  m.pointerMs += dtMs;
  m.errMs += d * dtMs;
  m.errSqMs += d * d * dtMs;
  m.radiusMs += radius * dtMs;
  if (d <= radius) m.onTargetMs += dtMs;
}

export function summarizePursuit(m: PursuitMetrics): PursuitSummary {
  const ratio = (a: number, b: number) => (b > 0 ? Math.min(100, (a / b) * 100) : null);
  const hasPointer = m.pointerMs > 0;
  const meanErrorPx = hasPointer ? m.errMs / m.pointerMs : null;
  const rmsErrorPx = hasPointer ? Math.sqrt(m.errSqMs / m.pointerMs) : null;
  const meanRadius = hasPointer ? m.radiusMs / m.pointerMs : 0;
  return {
    sampledSec: m.totalMs / 1000,
    timeOnTargetPct: ratio(m.onTargetMs, m.totalMs),
    pointerCoveragePct: ratio(m.pointerMs, m.totalMs),
    meanErrorPx,
    rmsErrorPx,
    meanErrorRadiusPct: meanErrorPx !== null && meanRadius > 0 ? (meanErrorPx / meanRadius) * 100 : null,
    rmsErrorRadiusPct: rmsErrorPx !== null && meanRadius > 0 ? (rmsErrorPx / meanRadius) * 100 : null,
  };
}
