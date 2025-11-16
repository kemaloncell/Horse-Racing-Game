import { computed } from 'vue';
import { useStore } from 'vuex';
import type { RootState } from '@/store';
import { generateHorses, generateSchedule } from '@/utils/horseGenerator';
import { simulateRace } from '@/utils/raceSimulator';
import { TOTAL_HORSES } from '@/utils/constants';

export function useRacing() {
  const store = useStore<RootState>();
  const horses = computed(() => store.getters['racing/allHorses']);
  const schedule = computed(() => store.getters['racing/raceSchedule']);
  const results = computed(() => store.getters['racing/raceResults']);
  const isRacing = computed(() => store.getters['racing/isRaceInProgress']);
  const currentRound = computed(() => store.getters['racing/currentRoundNumber']);
  const currentRoundData = computed(() => store.getters['racing/currentRoundData']);
  const raceProgress = computed(() => store.getters['racing/currentRaceProgress']);
  const canStartRace = computed(() => {
    return schedule.value.length > 0 && !isRacing.value;
  });

  const generateProgram = async () => {
    const newHorses = generateHorses(TOTAL_HORSES);
    const raceSchedule = generateSchedule(newHorses);

    await store.dispatch('racing/resetAll')
    await  store.dispatch('racing/setHorses', newHorses);
    await store.dispatch('racing/generateSchedule', raceSchedule)
  }

  const startRace = async () => {
    const allRounds = schedule.value;
    const completedRounds = results.value.length;

    for (let i = completedRounds; i < allRounds.length; i++) {
      const round = allRounds[i]

      await store.dispatch('racing/startRound', round.roundNumber);

      const result = await simulateRace(
        round.horses,
        round.distance,
        round.roundNumber,
        (progress) => {
          store.dispatch('racing/updateProgress', progress);
        }
      )

      await store.dispatch('racing/finishRound', result);

      // wait 4 ms per race
      await new Promise(resolve => setTimeout(resolve, 4000))
    }
  };


  const getHorseProgress = (horseId: number): number => {
    return raceProgress.value[horseId]?.position || 0
  };

  return {
    horses,
    schedule,
    results,
    isRacing,
    currentRound,
    currentRoundData,
    raceProgress,
    canStartRace,
    generateProgram,
    startRace,
    getHorseProgress,
  };
}
