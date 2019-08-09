import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restart } from '../store/bingo/actions';
import { AppState } from '../store';
import { playerStatus, PlayerId } from '../store/bingo/types';

function useWinnerBingoAlarm() {
  const bingoPlayerIds = useSelector<AppState, PlayerId[]>(
    state => state.bingo.bingoPlayerIds
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (bingoPlayerIds.length) {
      let message = '';
      if (bingoPlayerIds.length === 2) {
        message = `무승부입니다.`;
      } else {
        message = `${bingoPlayerIds[0]}가 빙고를 완성했습니다.`;
      }
      if (window.confirm(message)) {
        dispatch(restart());
      }
    }
  }, [bingoPlayerIds, dispatch]);
}

export default useWinnerBingoAlarm;
