export interface Horse {
  id: number;
  name: string;
  condition: number;
  color: string;
}

export interface Round {
  roundNumber: number;
  distance: number;
  horses: Horse[];
}

export interface RaceResult {
  roundNumber: number;
  distance: number;
  positions: {
    position: number;
    horse: Horse;
    time: number;
  }[];
}

export interface RaceProgress {
  horseId: number;
  position: number; // 0-100 percentage of distance covered
  isFinished: boolean;
}

export interface RacingState {
  horses: Horse[];
  schedule: Round[];
  currentRound: number | null;
  results: RaceResult[];
  isRacing: boolean;
  raceProgress: Record<number, RaceProgress>;
}
