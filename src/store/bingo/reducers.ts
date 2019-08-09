import update from 'immutability-helper';
import times from 'lodash/times';
import random from 'lodash/random';
import {
  BingoState,
  GAME_START,
  BingoActionTypes,
  Cells,
  PlayerId
} from './types';
import isBingo from './isBingo';

function genEmptyCellNumbers() {
  return times(25, () => null) as Cells;
}
function genRandomCellNumbers() {
  return times(25, () => random(1, 25)) as Cells;
}
function findAllIndexes(cells: Cells, num: number): number[] {
  const indexes: number[] = [];

  cells.forEach((cell, index) => {
    if (cell === num) {
      indexes.push(index);
    }
  });
  return indexes;
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
  },
  bingoPlayerIds: []
};

export function bingoReducer(
  state = initialState,
  action: BingoActionTypes
): BingoState {
  const currentPlayerId = state.currentPlayerId;
  switch (action.type) {
    case GAME_START:
      return update<BingoState>(state, {
        isPlaying: { $set: true },
        currentPlayerId: { $set: 'player1' },
        player1: {
          openIndexes: {
            $set: []
          },
          cellNumbers: {
            $set: genRandomCellNumbers()
          }
        },
        player2: {
          openIndexes: {
            $set: []
          },
          cellNumbers: {
            $set: genRandomCellNumbers()
          }
        }
      });
    case 'OPEN_CELL':
      if (!currentPlayerId) return state;
      const selectNumber = action.payload.selectNumber;

      let newState: BingoState = update<BingoState>(state, {
        currentPlayerId: {
          $set: currentPlayerId === 'player1' ? 'player2' : 'player1'
        },
        player1: {
          openIndexes: {
            $push: findAllIndexes(state.player1.cellNumbers, selectNumber)
          }
        },
        player2: {
          openIndexes: {
            $push: findAllIndexes(state.player2.cellNumbers, selectNumber)
          }
        }
      });

      const newBingoPlayerIds: PlayerId[] = [];
      if (isBingo(newState.player1.openIndexes)) {
        newBingoPlayerIds.push('player1');
      }
      if (isBingo(newState.player2.openIndexes)) {
        newBingoPlayerIds.push('player2');
      }

      if (newBingoPlayerIds.length) {
        newState = update<BingoState>(newState, {
          bingoPlayerIds: {
            $set: newBingoPlayerIds
          }
        });
      }
      return newState;
    case 'RESTART':
      return initialState;
    default:
      return state;
  }
}
