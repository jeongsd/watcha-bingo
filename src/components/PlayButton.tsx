import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import { AppState } from '../store';
import { gameStart } from '../store/bingo/actions';

const PlayButton: React.FC = () => {
  const isPlaying = useSelector<AppState, boolean>(
    state => state.bingo.isPlaying
  );
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(gameStart());
  }

  return (
    <Button primary={isPlaying} onClick={handleClick}>
      {isPlaying ? '게임 재시작' : '게임 시작'}
    </Button>
  );
};

export default PlayButton;
