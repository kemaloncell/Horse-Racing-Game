import { computed } from 'vue';
import { useStore } from 'vuex';
import type { RootState } from '@/store';

export function useCelebration() {
  const store = useStore<RootState>();

  const celebration = computed(() => store.getters['racing/celebrationData']);

  const closeCelebration = () => {
    store.dispatch('racing/hideCelebration');
  };

  const waitForCelebrationClose = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      const unwatch = store.watch(
        (state) => state.racing.celebration.show,
        (show) => {
          if (!show) {
            unwatch();
            resolve();
          }
        }
      );
    });
  };

  return {
    celebration,
    closeCelebration,
    waitForCelebrationClose,
  };
}
