import type { Module } from 'vuex';
import type { Horse, Round, RaceResult, RaceProgress } from '@/types';

export interface RacingState {
  horses: Horse[];
  schedule: Round[];
  currentRound: number | null;
  results: RaceResult[];
  isRacing: boolean;
  raceProgress: Record<number, RaceProgress>;
}

const racingModule: Module<RacingState, any> = {
  namespaced: true,

  state: (): RacingState => ({
    horses: [],
    schedule: [],
    currentRound: null,
    results: [],
    isRacing: false,
    raceProgress: {},
  }),

  getters: {
    allHorses: (state) => state.horses,
    raceSchedule: (state) => state.schedule,
    currentRoundNumber: (state) => state.currentRound,
    raceResults: (state) => state.results,
    isRaceInProgress: (state) => state.isRacing,
    currentRaceProgress: (state) => state.raceProgress,
    currentRoundData: (state) => {
      if (state.currentRound === null) return null;
      return state.schedule[state.currentRound - 1] || null;
    },
  },

  mutations: {
    SET_HORSES(state, horses: Horse[]) {
      state.horses = horses;
    },

    SET_SCHEDULE(state, schedule: Round[]) {
      state.schedule = schedule;
    },

    SET_CURRENT_ROUND(state, roundNumber: number | null) {
      state.currentRound = roundNumber;
    },

    ADD_RESULT(state, result: RaceResult) {
      state.results.push(result);
    },

    SET_RACING_STATUS(state, status: boolean) {
      state.isRacing = status;
    },

    UPDATE_RACE_PROGRESS(state, progress: Record<number, RaceProgress>) {
      state.raceProgress = progress;
    },

    RESET_RACE_PROGRESS(state) {
      state.raceProgress = {};
    },

    RESET_ALL(state) {
      state.horses = [];
      state.schedule = [];
      state.currentRound = null;
      state.results = [];
      state.isRacing = false;
      state.raceProgress = {};
    },
  },

  actions: {
    setHorses({ commit }, horses: Horse[]) {
      commit('SET_HORSES', horses);
    },

    generateSchedule({ commit }, schedule: Round[]) {
      commit('SET_SCHEDULE', schedule);
    },

    startRound({ commit }, roundNumber: number) {
      commit('SET_CURRENT_ROUND', roundNumber);
      commit('SET_RACING_STATUS', true);
      commit('RESET_RACE_PROGRESS');
    },

    finishRound({ commit }, result: RaceResult) {
      commit('ADD_RESULT', result);
      commit('SET_RACING_STATUS', false);
      commit('SET_CURRENT_ROUND', null);
      commit('RESET_RACE_PROGRESS');
    },

    updateProgress({ commit }, progress: Record<number, RaceProgress>) {
      commit('UPDATE_RACE_PROGRESS', progress);
    },

    resetAll({ commit }) {
      commit('RESET_ALL');
    },
  },
};

export default racingModule;
