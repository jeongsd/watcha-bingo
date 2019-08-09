export type CellNumber = number | null;

export type Cells = [
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber,
  CellNumber
];

export interface playerStatus {
  openIndexes: number[];
  cellNumbers: CellNumber[];
}
export type PlayerId = 'player1' | 'player2';

export interface BingoState {
  isPlaying: boolean;
  player1: playerStatus;
  player2: playerStatus;
  currentPlayerId?: PlayerId;
}

export const GAME_START = 'GAME_START';

interface GameStartAction {
  type: typeof GAME_START;
}

export type BingoActionTypes = GameStartAction;
