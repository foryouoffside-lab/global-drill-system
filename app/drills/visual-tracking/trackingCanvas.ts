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
