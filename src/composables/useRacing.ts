import { computed } from 'vue';
import { useStore } from 'vuex';
import type { RootState } from '@/store';
import { simulateRace } from '@/utils/raceSimulator';
import { useRaceProgram } from './useRaceProgram';
import { useCelebration } from './useCelebration';

export function useRacing() {
  const store = useStore<RootState>();
  const { schedule } = useRaceProgram();
  const { waitForCelebrationClose } = useCelebration();

  const results = computed(() => store.getters['racing/raceResults']);
  const isRacing = computed(() => store.getters['racing/isRaceInProgress']);
  const currentRound = computed(() => store.getters['racing/currentRoundNumber']);
  const currentRoundData = computed(() => store.getters['racing/currentRoundData']);
  const raceProgress = computed(() => store.getters['racing/currentRaceProgress']);
  const canStartRace = computed(() => {
    return schedule.value.length > 0 && !isRacing.value;
  });

  const startRace = async () => {
    const allRounds = schedule.value;
    const completedRounds = results.value.length;

    for (let i = completedRounds; i < allRounds.length; i++) {
      const round = allRounds[i]
      const isFinalRound = i === allRounds.length - 1;

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

      const sortedPositions = result.positions
          .sort((a, b) => a.position - b.position);
      const winner = sortedPositions[0];

      if (winner) {
        if (isFinalRound) {

          const topThree = sortedPositions
            .slice(0, 3)
            .map(p => p.horse);

          await store.dispatch('racing/showCelebration', {
            winner: winner.horse,
            roundNumber: result.roundNumber,
            distance: result.distance,
            time: winner.time,
            isFinal: true,
            topThree: topThree.length === 3 ? topThree : null,
          });
        } else {
          await store.dispatch('racing/showCelebration', {
            winner: winner.horse,
            roundNumber: result.roundNumber,
            distance: result.distance,
            time: winner.time,
            isFinal: false,
            topThree: null,
          });
        }

        await waitForCelebrationClose();
      }

      if (!isFinalRound) {
        await new Promise(resolve => setTimeout(resolve, 750));
      }
    }
  };

  const getHorseProgress = (horseId: number): number => {
    return raceProgress.value[horseId]?.position || 0
  };

  return {
    results,
    isRacing,
    currentRound,
    currentRoundData,
    raceProgress,
    canStartRace,
    startRace,
    getHorseProgress,
  };
}
