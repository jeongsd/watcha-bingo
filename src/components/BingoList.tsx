import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { openCell } from '../store/bingo/actions';
import { AppState } from '../store';
import { playerStatus, PlayerId } from '../store/bingo/types';
import BingoCell from './BingoCell';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 90px);
  grid-template-rows: repeat(5, 90px);
  grid-gap: 16px;
`;

interface BingoListProps {
  playerId: PlayerId;
}

const BingoList: React.FC<BingoListProps> = props => {
  const { playerId } = props;

  const player = useSelector<AppState, playerStatus>(
    state => state.bingo[playerId]
  );
  const currentPlayerId = useSelector<AppState, PlayerId | undefined>(
    state => state.bingo.currentPlayerId
  );

  const dispatch = useDispatch();

  const handleClick = (index: number) => (num: number) => {
    if (currentPlayerId !== playerId) {
      alert('잘못된 차례입니다.');
      return;
    }
    if (player.openIndexes.includes(index) || !currentPlayerId) {
      return;
    }
    dispatch(openCell(num));
  };

  return (
    <List>
      {player.cellNumbers.map((value, index) => (
        <BingoCell
          isOpened={player.openIndexes.includes(index)}
          onSelect={handleClick(index)}
          key={index}
          value={value}
        />
      ))}
    </List>
  );
};

export default BingoList;
