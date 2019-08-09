import update from 'immutability-helper';
import times from 'lodash/times';
import random from 'lodash/random';
import { BingoState, GAME_START, BingoActionTypes, Cells } from './types';

function genEmptyCellNumbers() {
  return times(25, () => null) as Cells;
}
function genRandomCellNumbers() {
  return times(25, () => random(1, 25)) as Cells;
}

const initialState: BingoState = {
  isPlaying: false,
  player1: {
    openIndexes: [],
    cellNumbers: genEmptyCellNumbers()
  },
  player2: {
    openIndexes: [],
    cellNumbers: genEmptyCellNumbers()
  }
};

export function bingoReducer(
  state = initialState,
  action: BingoActionTypes
): BingoState {
  switch (action.type) {
    case GAME_START:
      return update<BingoState>(state, {
        isPlaying: { $set: true },
        player1: {
          cellNumbers: {
            $set: genRandomCellNumbers()
          }
        },
        player2: {
          cellNumbers: {
            $set: genRandomCellNumbers()
          }
        }
      });
    default:
      return state;
  }
}
