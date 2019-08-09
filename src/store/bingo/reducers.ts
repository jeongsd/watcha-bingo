import update from 'immutability-helper';
import times from 'lodash/times';
import random from 'lodash/random';
import differenceWith from 'lodash/differenceWith';
import isEqual from 'lodash/isEqual';
import {
  BingoState,
  GAME_START,
  BingoActionTypes,
  Cells,
  PlayerId
} from './types';
import getMatchLines from './getMatchLines';

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
    cellNumbers: genEmptyCellNumbers(),
    matchLines: []
  },
  player2: {
    openIndexes: [],
    cellNumbers: genEmptyCellNumbers(),
    matchLines: []
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

      const player1matchLineIndexes = differenceWith(
        getMatchLines(newState.player1.openIndexes),
        newState.player1.matchLines.map(matchLine => matchLine.indexes),
        isEqual
      );

      const player2matchLineIndexes = differenceWith(
        getMatchLines(newState.player2.openIndexes),
        newState.player2.matchLines.map(matchLine => matchLine.indexes),
        isEqual
      );

      newState = update<BingoState>(newState, {
        player1: {
          matchLines: {
            $push: player1matchLineIndexes.map(indexes => ({
              indexes: indexes,
              date: new Date()
            }))
          }
        },
        player2: {
          matchLines: {
            $push: player2matchLineIndexes.map(indexes => ({
              indexes: indexes,
              date: new Date()
            }))
          }
        }
      });

      const newBingoPlayerIds: PlayerId[] = [];
      if (newState.player1.matchLines.length >= 5) {
        newBingoPlayerIds.push('player1');
      }
      if (newState.player2.matchLines.length >= 5) {
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
