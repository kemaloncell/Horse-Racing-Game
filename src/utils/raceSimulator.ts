import type { Horse, RaceResult, RaceProgress } from '@/types';
import { ANIMATION_SPEED_FACTOR } from './constants';

export const calculateRaceSpeed = (horse: Horse): number => {
  const baseSpeed = horse.condition;
  // Apply +%15 random variation - 0.85 to 1.15 range
  const randomFactor = Math.random() * 0.3 + 0.85;
  return baseSpeed * randomFactor;
}

export const simulateRace = (
  horses: Horse[],
  distance: number,
  roundNumber: number,
  onProgress: (progress: Record<number, RaceProgress>) => void
): Promise<RaceResult> => {
  return new Promise((resolve) => {

    const speeds: Record<number, number> = {};
    const positions: Record<number, number> = {};
    const finished: Record<number, boolean> = {};
    const finishTimes: Record<number, number> = {};

    horses.forEach(horse => {
      speeds[horse.id] = calculateRaceSpeed(horse);
      positions[horse.id] = 0;
      finished[horse.id] = false;
    });

    let startTime = Date.now();
    let finishedCount = 0;

    const interval = setInterval(() => {
      const currentTime = Date.now() - startTime;
      let hasUpdate = false;

      horses.forEach(horse => {
        if (!finished[horse.id]) {
          const progress = (speeds[horse.id] * currentTime) / (distance * ANIMATION_SPEED_FACTOR);
          positions[horse.id] = Math.min(progress, 100);  // Max 100%

          if (positions[horse.id] >= 100) {
            finished[horse.id] = true;
            finishTimes[horse.id] = currentTime;
            finishedCount++;
          }
          hasUpdate = true;
        }
      })

      if (hasUpdate) {
        const progressData: Record<number, RaceProgress> = {};
        horses.forEach(horse => {
          progressData[horse.id] = {
            horseId: horse.id,
            position: positions[horse.id],
            isFinished: finished[horse.id],
          };
        });
        onProgress(progressData);
      }

      if (finishedCount === horses.length) {
        clearInterval(interval);

        const sortedHorses = [...horses].sort((a, b) => {
          return finishTimes[a.id] - finishTimes[b.id];
        })

        const result: RaceResult = {
          roundNumber,
          distance,
          positions: sortedHorses.map((horse, index) => ({
            position: index + 1,
            horse,
            time: finishTimes[horse.id],
          })),
        };

        resolve(result)
      }
    }, 50);  // 20 FPS - balance between smooth animation and performance
  })
}
