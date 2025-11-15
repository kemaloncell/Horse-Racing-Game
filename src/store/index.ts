import { createStore } from 'vuex';
import racing, { type RacingState } from './racing';

export interface RootState {
  racing: RacingState;
}

export default createStore<RootState>({
  modules: {
    racing,
  },
});
