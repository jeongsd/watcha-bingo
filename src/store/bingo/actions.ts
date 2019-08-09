import {
  GAME_START,
  OPEN_CELL,
  GameStartAction,
  OpenCellAction
} from './types';

export function gameStart(): GameStartAction {
  return {
    type: GAME_START
  };
}

export function openCell(selectNumber: number): OpenCellAction {
  return {
    type: OPEN_CELL,
    payload: {
      selectNumber
    }
  };
}
