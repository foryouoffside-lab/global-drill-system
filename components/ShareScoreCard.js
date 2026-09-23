'use client';

import { drawSessionCard, drawShareCard, CARD_H, CARD_W } from './shareCardRenderer';

const CARD_SCALE = 3;

function createCard(draw) {
  const canvas = document.createElement('canvas');
  canvas.width = CARD_W * CARD_SCALE;
  canvas.height = CARD_H * CARD_SCALE;
  const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: true });
  if (!ctx) throw new Error('Score card canvas is unavailable');
  ctx.scale(CARD_SCALE, CARD_SCALE);
  draw(ctx);
  return canvas;
}

function normalizeRating(rating, rank, rankName) {
  if (rating?.letter) return rating;
  if (rating?.grade) return { letter: rating.grade, label: rating.label, emoji: rating.emoji };
  if (rank) return { letter: rank, label: rankName || '' };
  return { letter: 'C', label: 'Keep Going' };
}

export default function generateShareCard({
  score = 0,
  bestScore = 0,
  accuracy = 0,
  bestCombo = 0,
  rating = null,
  newBest = false,
  visualHits = undefined,
  numberHits = undefined,
  drillName = 'Drill',
  playerName = '',
  rank = null,
  rankName = null,
  speed = undefined,
  level = undefined,
  date = undefined,
  url = undefined,
}) {
  void accuracy;
  void bestCombo;
  void visualHits;
  void numberHits;
  void speed;
  void level;
  void date;
  void url;

  return createCard((ctx) => drawShareCard(ctx, {
    score,
    bestScore,
    rating: normalizeRating(rating, rank, rankName),
    isNewBest: newBest && score >= bestScore && bestScore > 0,
    drillName,
    playerName,
  }));
}

export function generateSessionCard({ drillName, badgeText, stats, playerName }) {
  return createCard((ctx) => drawSessionCard(ctx, { drillName, badgeText, stats, playerName }));
}

/** Share the generated card while preserving the drill-specific challenge URL. */
export async function shareScoreCard(challengeUrl, canvas) {
  try {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('Failed to create image');

    const file = new File([blob], 'skilldrills-score.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: 'SkillDrills Score',
        text: 'Can you beat my score?',
        url: challengeUrl,
        files: [file],
      });
      return;
    }

    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      alert('Score image copied to clipboard! Share it with friends.');
    } catch {
      await navigator.clipboard.writeText(challengeUrl);
      alert('Link copied to clipboard!');
    }
  } catch {
    try {
      await navigator.clipboard.writeText(challengeUrl);
      alert('Link copied!');
    } catch {}
  }
}
