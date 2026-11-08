export function setTargetCursor(canvas, pos, targets) {
  if (!canvas) return;
  const over = !!pos && pos.active !== false && targets.some(
    (t) => t && t.active !== false && Math.hypot(pos.x - t.x, pos.y - t.y) <= t.radius
  );
  const cursor = over ? 'pointer' : 'default';
  if (canvas.style.cursor !== cursor) canvas.style.cursor = cursor;
}
