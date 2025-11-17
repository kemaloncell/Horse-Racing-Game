import { describe, it, expect } from 'vitest';
import { generateHorses, generateSchedule } from '../horseGenerator';
import { TOTAL_HORSES, HORSES_PER_RACE, RACE_DISTANCES } from '../constants';

const TOTAL_ROUNDS = 6;

describe('horseGenerator', () => {
  describe('generateHorses', () => {
    it('should generate correct number of horses', () => {
      const horses = generateHorses(TOTAL_HORSES);
      expect(horses).toHaveLength(TOTAL_HORSES);
    });

    it('should generate horses with unique IDs', () => {
      const horses = generateHorses(TOTAL_HORSES);
      const ids = horses.map((h) => h.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(TOTAL_HORSES);
    });

    it('should generate horses with condition between 1-100', () => {
      const horses = generateHorses(TOTAL_HORSES);
      horses.forEach((horse) => {
        expect(horse.condition).toBeGreaterThanOrEqual(1);
        expect(horse.condition).toBeLessThanOrEqual(100);
      });
    });

    it('should generate horses with unique colors', () => {
      const horses = generateHorses(TOTAL_HORSES);
      const colors = horses.map((h) => h.color);
      const uniqueColors = new Set(colors);
      expect(uniqueColors.size).toBe(TOTAL_HORSES);
    });

    it('should generate horses with names', () => {
      const horses = generateHorses(TOTAL_HORSES);
      horses.forEach((horse) => {
        expect(horse.name).toBeTruthy();
        expect(typeof horse.name).toBe('string');
      });
    });
  });

  describe('generateSchedule', () => {
    const horses = generateHorses(TOTAL_HORSES);

    it('should generate correct number of rounds', () => {
      const schedule = generateSchedule(horses);
      expect(schedule).toHaveLength(TOTAL_ROUNDS);
    });

    it('should assign correct round numbers', () => {
      const schedule = generateSchedule(horses);
      schedule.forEach((round, index) => {
        expect(round.roundNumber).toBe(index + 1);
      });
    });

    it('should assign correct distances', () => {
      const schedule = generateSchedule(horses);
      schedule.forEach((round, index) => {
        expect(round.distance).toBe(RACE_DISTANCES[index]);
      });
    });

    it('should select correct number of horses per race', () => {
      const schedule = generateSchedule(horses);
      schedule.forEach((round) => {
        expect(round.horses).toHaveLength(HORSES_PER_RACE);
      });
    });

    it('should select random horses for each round', () => {
      const schedule = generateSchedule(horses);
      const firstRoundHorses = schedule[0].horses.map((h) => h.id);
      const secondRoundHorses = schedule[1].horses.map((h) => h.id);

      // At least some horses should be different between rounds
      const overlap = firstRoundHorses.filter((id) => secondRoundHorses.includes(id));
      expect(overlap.length).toBeLessThan(HORSES_PER_RACE);
    });

    it('should not have duplicate horses in the same round', () => {
      const schedule = generateSchedule(horses);
      schedule.forEach((round) => {
        const ids = round.horses.map((h) => h.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(HORSES_PER_RACE);
      });
    });
  });
});
