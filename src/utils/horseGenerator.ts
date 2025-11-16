import type { Horse, Round } from '@/types';
import {
  HORSE_NAMES,
  HORSE_COLORS,
  MIN_CONDITION,
  MAX_CONDITION,
  RACE_DISTANCES,
  HORSES_PER_RACE
} from './constants';

export const generateHorses = (count: number): Horse[] => {
  const horses: Horse[] = [];

  for (let i = 0; i < count; i++) {
    horses.push({
      id: i + 1,
      name: HORSE_NAMES[i],
      condition: Math.floor(Math.random() * (MAX_CONDITION - MIN_CONDITION + 1)) + MIN_CONDITION,
      color: HORSE_COLORS[i],
    });
  }

  return horses;
};

export const generateSchedule = (horses: Horse[]): Round[] => {
  const schedule: Round[] = [];

  RACE_DISTANCES.forEach((distance, index) => {
    const shuffled = [...horses].sort(() => Math.random() - 0.5);
    const selectedHorses = shuffled.slice(0, HORSES_PER_RACE);

    schedule.push({
      roundNumber: index + 1,
      distance,
      horses: selectedHorses,
    });
  });

  return schedule;
};
