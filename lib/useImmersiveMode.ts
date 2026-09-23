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
 * 2. On pointer-and-hover devices, we also ask the browser
 *    to go actually fullscreen, which is the only way to get rid of the browser's
 *    own chrome — tab strip, address bar. Layer 1 fills the viewport; it cannot
 *    reach past it, and a drill with the address bar still overhead is not the
 *    fullscreen players expect.
 *
 * MOBILE FULLSCREEN
 * Mobile uses the CSS layer. Native mobile fullscreen adds an unavoidable browser
 * "how to exit" notice and causes a visible viewport jump while entering. Dynamic
 * viewport units keep the CSS arena fitted when the phone rotates.
 *
 * Esc leaves the drill through useUnexpectedExitGuard, which listens for the key
 * itself; it does not ride on `fullscreenchange`.
 */

type WebkitFullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
};

type WebkitFullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

function fullscreenElement(): Element | null {
  if (typeof document === 'undefined') return null;
  return document.fullscreenElement || (document as WebkitFullscreenDocument).webkitFullscreenElement || null;
}

function supportsNativeFullscreen(): boolean {
  if (
    typeof document === 'undefined' ||
    typeof window.matchMedia !== 'function' ||
    !window.matchMedia('(hover: hover) and (pointer: fine)').matches
  ) return false;
  const root = document.documentElement as WebkitFullscreenElement;
  return Boolean(root.requestFullscreen || root.webkitRequestFullscreen);
}

type WakeLockSentinel = EventTarget & {
  released: boolean;
  release: () => Promise<void>;
};

type WakeLockNavigator = Navigator & {
  wakeLock?: { request: (type: 'screen') => Promise<WakeLockSentinel> };
};

const FULLSCREEN_MARKER = 'data-skilldrills-native-fullscreen';
let nativeFullscreenRequestPending = false;

// Shared by every result card so Play Again and Share can recover native
// fullscreen from the actual button gesture, even when the drill component's
// own `isFullscreen` state never changed.
export function requestNativeFullscreen(onEntered?: () => void): void {
  if (
    typeof document === 'undefined' ||
    !supportsNativeFullscreen() ||
    fullscreenElement() ||
    nativeFullscreenRequestPending
  ) return;

  let request: Promise<void> | undefined;
  try {
    const root = document.documentElement as WebkitFullscreenElement;
    if (root.requestFullscreen) {
      request = root.requestFullscreen();
    } else if (root.webkitRequestFullscreen) {
      request = Promise.resolve(root.webkitRequestFullscreen());
    }
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
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

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

    const requestWakeLock = async () => {
      if (document.visibilityState !== 'visible' || wakeLockRef.current) return;
      try {
        wakeLockRef.current = await (navigator as WakeLockNavigator).wakeLock?.request('screen') || null;
        wakeLockRef.current?.addEventListener('release', () => { wakeLockRef.current = null; }, { once: true });
      } catch {
        // Unsupported, denied, or temporarily unavailable; the drill still runs.
      }
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') void requestWakeLock();
    };
    void requestWakeLock();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (supportsNativeFullscreen() && !fullscreenElement()) {
      ensureNativeFullscreen();
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      const wakeLock = wakeLockRef.current;
      wakeLockRef.current = null;
      if (wakeLock && !wakeLock.released) void wakeLock.release().catch(() => {});
      document.body.style.overflow = overflow;
      document.body.style.overscrollBehavior = overscrollBehavior;
      if (
        (enteredRef.current || document.documentElement.hasAttribute(FULLSCREEN_MARKER)) &&
        fullscreenElement()
      ) {
        const exit = document.exitFullscreen?.bind(document) ||
          (document as WebkitFullscreenDocument).webkitExitFullscreen?.bind(document);
        Promise.resolve(exit?.()).catch(() => {});
      }
      document.documentElement.removeAttribute(FULLSCREEN_MARKER);
      enteredRef.current = false;
    };
  }, [active, ensureNativeFullscreen]);

  return ensureNativeFullscreen;
}
