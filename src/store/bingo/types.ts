export interface BingoState {
  isPlaying: boolean;
}

export const GAME_START = 'GAME_START';

interface GameStartAction {
  type: typeof GAME_START;
}

export type BingoActionTypes = GameStartAction;
