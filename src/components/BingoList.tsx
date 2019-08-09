import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { openCell } from '../store/bingo/actions';
import { AppState } from '../store';
import { playerStatus, PlayerId } from '../store/bingo/types';
import BingoCell from './BingoCell';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
  grid-gap: 16px;
`;

interface BingoListProps {
  playerId: 'player1' | 'player2';
  isCurrentPlayer: boolean;
}

const BingoList: React.FC<BingoListProps> = props => {
  const { playerId, isCurrentPlayer } = props;

  const player = useSelector<AppState, playerStatus>(
    state => state.bingo[playerId]
  );

  const dispatch = useDispatch();

  function handleClick(num: number) {
    dispatch(openCell(num));
  }

  return (
    <List>
      {player.cellNumbers.map((value, index) => (
        <BingoCell
          disabled={!isCurrentPlayer}
          isOpened={player.openIndexes.includes(index)}
          onSelect={handleClick}
          key={index}
          value={value}
        />
      ))}
    </List>
  );
};

export default BingoList;
