export const RACE_DISTANCES = [1200, 1400, 1600, 1800, 2000, 2200] as const;
export const TOTAL_HORSES = 20;
export const HORSES_PER_RACE = 10;
export const TOTAL_ROUNDS = RACE_DISTANCES.length;

export const HORSE_NAMES = [
  'Thunder', 'Lightning', 'Storm', 'Blaze', 'Shadow',
  'Spirit', 'Duke', 'Ace', 'Champion', 'Victory',
  'Apollo', 'Zeus', 'Athena', 'Hercules', 'Phoenix',
  'Midnight', 'Comet', 'Star', 'Flash', 'Rocket'
] as const;
export const COLOR_CODES = {
  'Red': '#FF6B6B',
  'Turquoise': '#4ECDC4',
  'Sky Blue': '#45B7D1',
  'Light Salmon': '#FFA07A',
  'Mint': '#98D8C8',
  'Yellow': '#F7DC6F',
  'Purple': '#BB8FCE',
  'Light Blue': '#85C1E2',
  'Peach': '#F8B88B',
  'Light Orange': '#FAD7A0',
  'Light Green': '#ABEBC6',
  'Light Yellow': '#F9E79F',
  'Lavender': '#D7BDE2',
  'Aqua': '#A3E4D7',
  'Pink': '#F5B7B1',
  'Light Gray': '#D5DBDB',
  'Dark Red': '#CD6155',
  'Blue': '#5DADE2',
  'Green': '#52BE80',
  'Violet': '#AF7AC5',
} as const;

export const HORSE_COLORS = Object.keys(COLOR_CODES) as Array<keyof typeof COLOR_CODES>;

export const getColorCode = (colorName: string): string => {
  return COLOR_CODES[colorName as keyof typeof COLOR_CODES] || '#000000';
};

export const SPEED_VARIATION_MIN = 0.85;
export const SPEED_VARIATION_MAX = 1.15;
export const SPEED_VARIATION_RANGE = SPEED_VARIATION_MAX - SPEED_VARIATION_MIN; // 0.3

export const MAX_PROGRESS_PERCENT = 100;
export const ANIMATION_FPS = 20;
export const ANIMATION_INTERVAL = 1000 / ANIMATION_FPS;  // 50ms for 20 FPS

const isTestMode = typeof window !== 'undefined' && (window as any).Cypress;
export const MIN_CONDITION = isTestMode ? 80 : 1;
export const MAX_CONDITION = 100;
export const ANIMATION_SPEED_FACTOR = isTestMode ? 2 : 5;

export const CONFETTI_COUNT = 50;
export const FIREWORK_COUNT = 6;
export const TOP_POSITIONS_COUNT = 3;
export const MS_TO_SECONDS = 1000;

export const DELAY_BETWEEN_ROUNDS_MS = 750;
