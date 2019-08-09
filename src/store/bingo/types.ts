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

export type MatchLineIndexes = [number, number, number, number, number];

export type MatchLine = {
  date: Date;
  indexes: MatchLineIndexes;
};

export interface playerStatus {
  openIndexes: number[];
  cellNumbers: Cells;

  matchLines: MatchLine[];
}

export type PlayerId = 'player1' | 'player2';

export interface BingoState {
  isPlaying: boolean;
  player1: playerStatus;
  player2: playerStatus;
  currentPlayerId?: PlayerId;
  bingoPlayerIds: PlayerId[];
}

export const GAME_START = 'GAME_START';
export const OPEN_CELL = 'OPEN_CELL';
export const RESTART = 'RESTART';

export interface GameStartAction {
  type: typeof GAME_START;
}

export interface OpenCellAction {
  type: typeof OPEN_CELL;
  payload: {
    selectNumber: number;
  };
}

export interface RestartAction {
  type: typeof RESTART;
}

export type BingoActionTypes = GameStartAction | OpenCellAction | RestartAction;
