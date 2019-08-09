import {
  GAME_START,
  OPEN_CELL,
  RESTART,
  GameStartAction,
  OpenCellAction,
  RestartAction
} from './types';

export function restart(): RestartAction {
  return {
    type: RESTART
  };
}

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
