'use client';

import { useCallback, useEffect, useRef } from 'react';

/**
 * Immersive mode — the full-viewport layout a drill switches into when it starts.
 *
 * TWO LAYERS, AND WHY
 *
 * 1. The layout itself is CSS, not the Fullscreen API. Every drill keys its own
 *    `fixed inset-0 z-[100] h-[100dvh]` classes off the same flag passed in here,
 *    so flipping the flag paints the drill across the viewport on its own. This
 *    layer runs everywhere, and the page behind it is scroll- and rubber-band
 *    locked for as long as it is up.
 *
 * 2. On top of that, on pointer-and-hover devices only, we also ask the browser
 *    to go actually fullscreen, which is the only way to get rid of the browser's
 *    own chrome — tab strip, address bar. Layer 1 fills the viewport; it cannot
 *    reach past it, and a drill with the address bar still overhead is not the
 *    fullscreen players expect.
 *
 * WHY LAYER 2 IS GATED TO POINTER DEVICES
 * On Android Chrome, `requestFullscreen()` makes the browser paint its own toast —
 * "skilldrills.online – to exit full screen, drag from the top and touch the back
 * button" — across the bottom of the screen, on top of the GET READY countdown.
 * That toast is browser chrome: no CSS or JS can style, move or dismiss it, and it
 * reappears on every drill start. A previous pass dropped the API site-wide to be
 * rid of it, which also cost desktop its real fullscreen. The gate keeps both: the
 * toast never fires on a touch device because we never ask there, and desktop gets
 * its chrome-free screen back. Touch devices keep layer 1, which is what they had.
 *
 * Esc leaves the drill through useUnexpectedExitGuard, which listens for the key
 * itself; it does not ride on `fullscreenchange`.
 */

// Desktop-shaped input. Android and iOS report `pointer: coarse` / no hover, so
// this is false on exactly the devices whose browsers paint the exit toast. iOS
// Safari has no element fullscreen at all, so it would be a no-op there anyway.
function prefersNativeFullscreen(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

const FULLSCREEN_MARKER = 'data-skilldrills-native-fullscreen';
let nativeFullscreenRequestPending = false;

// Shared by every result card so Play Again and Share can recover native
// fullscreen from the actual button gesture, even when the drill component's
// own `isFullscreen` state never changed.
export function requestNativeFullscreen(onEntered?: () => void): void {
  if (
    typeof document === 'undefined' ||
    !prefersNativeFullscreen() ||
    document.fullscreenElement ||
    nativeFullscreenRequestPending
  ) return;

  let request: Promise<void> | undefined;
  try {
    request = document.documentElement.requestFullscreen?.();
  } catch {
    return;
  }
  if (!request) return;

  nativeFullscreenRequestPending = true;
  request
    .then(() => {
      document.documentElement.setAttribute(FULLSCREEN_MARKER, 'true');
      onEntered?.();
    })
    .catch(() => {})
    .finally(() => { nativeFullscreenRequestPending = false; });
}

export default function useImmersiveMode(active: boolean): () => void {
  // Only ever exit fullscreen we ourselves entered — the player may have been in
  // F11 fullscreen before the drill started, and dropping them out of it on exit
  // would be us undoing something we did not do.
  const enteredRef = useRef(false);

  // Keep this callable from the Start / Play Again click itself. A request
  // made only from useEffect can lose the browser's transient user activation.
  const ensureNativeFullscreen = useCallback(() => {
    requestNativeFullscreen(() => { enteredRef.current = true; });
  }, []);

  useEffect(() => {
    const handleDrillActionClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const button = target.closest('button');
      if (!button) return;

      const label = [
        button.textContent || '',
        button.getAttribute('aria-label') || '',
        button.getAttribute('title') || '',
      ].join(' ').toLowerCase();
      const hasRefreshIcon = Boolean(button.querySelector('svg.lucide-refresh-cw'));
      const isRestart = hasRefreshIcon || /play again|jogar novamente|jugar de nuevo|rejouer|noch einmal|もう一度|다시 플레이/i.test(label);
      const isStart = /start drill|start game|start training|begin drill|begin training|commencer|comenzar|começar|始める|시작/i.test(label);

      // This listener runs in capture phase, before each drill's own click
      // handler, so the browser still accepts the fullscreen request as a
      // user gesture. Share handlers are intentionally not intercepted here:
      // native sharing must receive the gesture first.
      if (isRestart || isStart) requestNativeFullscreen();
    };

    document.addEventListener('click', handleDrillActionClick, true);
    return () => document.removeEventListener('click', handleDrillActionClick, true);
  }, []);

  useEffect(() => {
    if (!active) return;
    const { overflow, overscrollBehavior } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';

    if (prefersNativeFullscreen() && !document.fullscreenElement) {
      ensureNativeFullscreen();
    }

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.overscrollBehavior = overscrollBehavior;
      if (
        (enteredRef.current || document.documentElement.hasAttribute(FULLSCREEN_MARKER)) &&
        document.fullscreenElement
      ) {
        document.exitFullscreen?.().catch(() => {});
      }
      document.documentElement.removeAttribute(FULLSCREEN_MARKER);
      enteredRef.current = false;
    };
  }, [active, ensureNativeFullscreen]);

  return ensureNativeFullscreen;
}
