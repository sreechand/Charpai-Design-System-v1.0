import type { MemoryWorldTokens } from '../types/story';

/**
 * Memory Worlds are not decade themes. Each one is derived from a specific
 * place, a specific set of surviving artifacts, and a specific narrator —
 * Period × Geography × Artifacts × Recollection.
 */

export const vijayawada1964: MemoryWorldTokens = {
  id: 'vijayawada-1964',
  label: 'Vijayawada · c. 1964',
  /* Ammamma writes with a fountain pen, large and looping. */
  handFont: "'Caveat', cursive",
  handInk: '#2C3E5C',
  handSize: '1.5rem',
  handTilt: '-1.4deg',
  /* red-oxide flooring, banyan foliage */
  accent: '#9C4A2F',
  deep: '#4F5F3C',
  mounting: 'corners'
};

export const hyderabad1977: MemoryWorldTokens = {
  id: 'hyderabad-1977',
  label: 'Hyderabad · 1976 or 1978',
  /* Thatha writes with a ballpoint, small and upright, and dates everything. */
  handFont: "'Kalam', cursive",
  handInk: '#3A3E86',
  handSize: '1.15rem',
  handTilt: '0.4deg',
  /* teak veneer cabinet, test-card blue-green */
  accent: '#6B4A2B',
  deep: '#2E6C79',
  mounting: 'tape'
};

export const memoryWorlds = {
  [vijayawada1964.id]: vijayawada1964,
  [hyderabad1977.id]: hyderabad1977
};