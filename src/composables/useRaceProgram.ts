import { computed } from 'vue';
import { useStore } from 'vuex';
import type { RootState } from '@/store';
import { generateHorses, generateSchedule } from '@/utils/horseGenerator';
import { TOTAL_HORSES } from '@/utils/constants';

export function useRaceProgram() {
  const store = useStore<RootState>();

  const horses = computed(() => store.getters['racing/allHorses']);
  const schedule = computed(() => store.getters['racing/raceSchedule']);

  const generateProgram = async () => {
    const newHorses = generateHorses(TOTAL_HORSES);
    const raceSchedule = generateSchedule(newHorses);

    await store.dispatch('racing/resetAll');
    await store.dispatch('racing/setHorses', newHorses);
    await store.dispatch('racing/generateSchedule', raceSchedule);
  };

  return {
    horses,
    schedule,
    generateProgram,
  };
}
