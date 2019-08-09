import { BingoState, GAME_START, BingoActionTypes } from './types';

const initialState: BingoState = {
  isPlaying: false
};

export function bingoReducer(
  state = initialState,
  action: BingoActionTypes
): BingoState {
  switch (action.type) {
    case GAME_START:
      return {
        isPlaying: true
      };
    default:
      return state;
  }
}
