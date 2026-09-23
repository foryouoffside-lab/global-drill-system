'use client';

import { useState, useCallback } from 'react';

// Hit-impact ring + spark burst for DOM-based drill targets (no canvas).
// Pairs with the .fx-hit-ring / .fx-hit-spark keyframes in styles/globals.css.
export default function useHitBurst() {
  const [bursts, setBursts] = useState([]);

  const spawnBurst = useCallback((x, y, r, color) => {
    const id = Date.now() + Math.random();
    const sparks = Array.from({ length: 8 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = r * (1.1 + Math.random() * 1.3);
      return { dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist };
    });
    setBursts((b) => [...b, { id, x, y, r, color, sparks }]);
    setTimeout(() => setBursts((b) => b.filter((p) => p.id !== id)), 480);
  }, []);

  return { bursts, spawnBurst };
}
