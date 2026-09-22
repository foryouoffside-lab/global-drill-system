// lib/leaderboard.js

const PLAYER_NAME_KEY = 'skilldrills_player_name';

/**
 * Get or create player name
 * @returns {string} Player name
 */
export function getPlayerName() {
  try {
    const playerName = localStorage.getItem(PLAYER_NAME_KEY)?.trim() || '';
    return playerName.toLowerCase() === 'anonymous player' ? '' : playerName;
  } catch {
    return '';
  }
}
