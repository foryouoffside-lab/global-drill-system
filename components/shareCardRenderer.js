const CARD_W = 640;
const CARD_H = 360;

const BRAND = '#8b5cf6';
const PB_GOLD = '#facc15';
const MUTED = '#98a2b3';
const DIM = '#606b7e';

const GRADE_COLORS = {
  'S+': { hex: '#facc15', label: 'LEGENDARY' },
  S: { hex: '#22d3ee', label: 'ELITE' },
  A: { hex: '#60a5fa', label: 'EXCELLENT' },
  B: { hex: '#4ade80', label: 'GREAT' },
  C: { hex: '#818cf8', label: 'GOOD' },
  D: { hex: '#fb923c', label: 'BUILDING' },
  F: { hex: '#f87171', label: 'WARMING UP' },
};

function alpha(hex, opacity) {
  const value = parseInt(hex.slice(1), 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${opacity})`;
}

function trackedText(ctx, text, x, y, spacing, align = 'left') {
  const chars = [...String(text)];
  const width = chars.reduce((sum, char) => sum + ctx.measureText(char).width + spacing, 0) - spacing;
  let cursor = align === 'center' ? x - width / 2 : align === 'right' ? x - width : x;
  const previousAlign = ctx.textAlign;
  ctx.textAlign = 'left';
  for (const char of chars) {
    ctx.fillText(char, cursor, y);
    cursor += ctx.measureText(char).width + spacing;
  }
  ctx.textAlign = previousAlign;
  return width;
}

function trackedWidth(ctx, text, spacing) {
  return [...String(text)].reduce((sum, char) => sum + ctx.measureText(char).width + spacing, 0) - spacing;
}

function roundRectPath(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function resolveTier(rating) {
  const letter = rating?.letter || rating?.grade || 'C';
  return { letter, ...(GRADE_COLORS[letter] || GRADE_COLORS.C), inputLabel: rating?.label };
}

function drawBackground(ctx, accent) {
  const background = ctx.createLinearGradient(0, 0, 0, CARD_H);
  background.addColorStop(0, '#0b0c13');
  background.addColorStop(1, '#050508');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  ctx.fillStyle = 'rgba(255,255,255,0.032)';
  for (let y = 22; y < CARD_H; y += 22) {
    for (let x = 22; x < CARD_W; x += 22) ctx.fillRect(x, y, 1.6, 1.6);
  }

  const glow = ctx.createRadialGradient(210, 180, 10, 210, 180, 250);
  glow.addColorStop(0, alpha(accent, 0.15));
  glow.addColorStop(1, alpha(accent, 0));
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  const vignette = ctx.createRadialGradient(CARD_W / 2, CARD_H / 2, CARD_H * 0.4, CARD_W / 2, CARD_H / 2, CARD_W * 0.8);
  vignette.addColorStop(0, 'rgba(0,0,0,0)');
  vignette.addColorStop(1, 'rgba(0,0,0,0.5)');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, CARD_W, 3);
}

export function drawShareCard(ctx, data) {
  const {
    score = 0,
    bestScore = 0,
    rating,
    isNewBest = false,
    drillName = 'Drill',
    playerName = null,
    linkText = 'SKILLDRILLS.ONLINE',
  } = data;
  const tier = resolveTier(rating);
  const accent = isNewBest ? PB_GOLD : BRAND;
  const mono = '600 12px ui-monospace, SFMono-Regular, Menlo, monospace';

  drawBackground(ctx, accent);
  ctx.textBaseline = 'alphabetic';

  ctx.fillStyle = accent;
  ctx.fillRect(44, 42, 4, 15);
  ctx.font = mono;
  ctx.fillStyle = MUTED;
  trackedText(ctx, drillName.toUpperCase(), 60, 54, 2.2);

  const handle = playerName && playerName !== 'You' ? playerName.toUpperCase() : '';
  let shownHandle = handle;
  if (handle) {
    ctx.font = '500 12px ui-monospace, SFMono-Regular, Menlo, monospace';
    while (trackedWidth(ctx, shownHandle, 2) > 210 && shownHandle.length > 5) shownHandle = shownHandle.slice(0, -2);
    if (shownHandle !== handle) shownHandle += '...';
    ctx.fillStyle = DIM;
    trackedText(ctx, shownHandle, CARD_W - 44 - trackedWidth(ctx, shownHandle, 2), 54, 2);
  }

  const scoreText = Number(score || 0).toLocaleString();
  let scoreSize = 96;
  ctx.font = `${scoreSize}px Arial, sans-serif`;
  while (ctx.measureText(scoreText).width > 400 && scoreSize > 52) {
    scoreSize -= 4;
    ctx.font = `${scoreSize}px Arial, sans-serif`;
  }
  const scoreX = 44;
  const scoreY = 206;
  ctx.fillStyle = '#fff';
  ctx.fillText(scoreText, scoreX, scoreY);

  const metrics = ctx.measureText(scoreText);
  const hasInk = typeof metrics.actualBoundingBoxAscent === 'number' && typeof metrics.actualBoundingBoxRight === 'number';
  const inkLeft = hasInk ? scoreX - metrics.actualBoundingBoxLeft : scoreX;
  const inkRight = hasInk ? scoreX + metrics.actualBoundingBoxRight : scoreX + metrics.width;
  const inkTop = hasInk ? scoreY - metrics.actualBoundingBoxAscent : scoreY - scoreSize * 0.72;
  const inkBottom = hasInk ? scoreY + metrics.actualBoundingBoxDescent : scoreY + scoreSize * 0.04;
  const margin = 16;
  const length = 20;
  const topLeftX = inkLeft - margin;
  const topLeftY = inkTop - margin;
  const bottomRightX = inkRight + margin;
  const bottomRightY = inkBottom + margin;
  ctx.strokeStyle = accent;
  ctx.lineWidth = 3;
  ctx.lineCap = 'butt';
  ctx.beginPath();
  ctx.moveTo(topLeftX, topLeftY + length); ctx.lineTo(topLeftX, topLeftY); ctx.lineTo(topLeftX + length, topLeftY);
  ctx.moveTo(bottomRightX - length, bottomRightY); ctx.lineTo(bottomRightX, bottomRightY); ctx.lineTo(bottomRightX, bottomRightY - length);
  ctx.stroke();

  const labelY = Math.round(bottomRightY + 18);
  ctx.font = '500 11px ui-monospace, SFMono-Regular, Menlo, monospace';
  ctx.fillStyle = DIM;
  const scoreLabelWidth = trackedText(ctx, 'SCORE', scoreX, labelY, 3);
  if (isNewBest) {
    ctx.fillStyle = '#34d399';
    trackedText(ctx, bestScore > 0 && score > bestScore ? `NEW BEST  +${(score - bestScore).toLocaleString()}` : 'NEW BEST', scoreX + scoreLabelWidth + 20, labelY, 2);
  }

  const badgeSize = 92;
  const badgeX = CARD_W - 44 - badgeSize;
  const badgeY = 82;
  roundRectPath(ctx, badgeX, badgeY, badgeSize, badgeSize, 14);
  ctx.fillStyle = alpha(tier.hex, 0.12);
  ctx.fill();
  ctx.strokeStyle = alpha(tier.hex, 0.85);
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = tier.hex;
  ctx.font = `${tier.letter.length > 1 ? 40 : 52}px Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(tier.letter, badgeX + badgeSize / 2, badgeY + badgeSize / 2 + 3);
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  ctx.fillStyle = alpha(tier.hex, 0.9);
  ctx.font = '500 10px ui-monospace, SFMono-Regular, Menlo, monospace';
  trackedText(ctx, String(tier.inputLabel || tier.label).toUpperCase(), badgeX + badgeSize / 2, badgeY + badgeSize + 18, 2, 'center');

  const footerY = 292;
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(44, footerY - 22); ctx.lineTo(CARD_W - 44, footerY - 22); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = '700 22px Arial, sans-serif';
  ctx.fillText('CAN YOU BEAT THIS?', 44, footerY + 6);
  ctx.fillStyle = accent;
  ctx.font = '600 12px ui-monospace, SFMono-Regular, Menlo, monospace';
  const linkWidth = trackedWidth(ctx, linkText, 2);
  trackedText(ctx, linkText, CARD_W - 44 - linkWidth, footerY + 4, 2);
  ctx.fillRect(CARD_W - 44 - linkWidth, footerY + 11, linkWidth, 2);
}

export function drawSessionCard(ctx, { drillName = 'Drill', badgeText = 'SESSION COMPLETE', stats = [], playerName = null }) {
  drawBackground(ctx, BRAND);
  ctx.fillStyle = BRAND;
  ctx.fillRect(44, 42, 4, 15);
  ctx.font = '600 12px ui-monospace, SFMono-Regular, Menlo, monospace';
  ctx.fillStyle = MUTED;
  trackedText(ctx, drillName.toUpperCase(), 60, 54, 2.2);
  ctx.fillStyle = DIM;
  const handle = playerName && playerName !== 'You' ? playerName.toUpperCase() : '';
  if (handle) trackedText(ctx, handle.slice(0, 24), CARD_W - 44, 54, 2, 'right');
  ctx.fillStyle = '#fff';
  ctx.font = '700 56px Arial, sans-serif';
  ctx.fillText(drillName, 44, 150);
  ctx.fillStyle = BRAND;
  ctx.font = '600 13px ui-monospace, SFMono-Regular, Menlo, monospace';
  trackedText(ctx, String(badgeText).toUpperCase(), 44, 180, 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.beginPath(); ctx.moveTo(44, 205); ctx.lineTo(CARD_W - 44, 205); ctx.stroke();
  const cells = (stats || []).slice(0, 4);
  cells.forEach((stat, index) => {
    const x = 130 + (index % 2) * 260;
    const y = 250 + Math.floor(index / 2) * 58;
    ctx.fillStyle = DIM;
    ctx.font = '500 12px ui-monospace, SFMono-Regular, Menlo, monospace';
    trackedText(ctx, String(stat.label || '').toUpperCase(), x, y, 1.5, 'center');
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '700 22px Arial, sans-serif';
    ctx.fillText(String(stat.value ?? ''), x, y + 27);
  });
  ctx.fillStyle = BRAND;
  ctx.font = '600 12px ui-monospace, SFMono-Regular, Menlo, monospace';
  trackedText(ctx, 'SKILLDRILLS.ONLINE', CARD_W - 44, 336, 2, 'right');
}

export { CARD_W, CARD_H };
