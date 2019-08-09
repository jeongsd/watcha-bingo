import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { playerStatus } from '../store/bingo/types';
import BingoCell from './BingoCell';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
  grid-gap: 16px;
`;

interface BingoListProps {
  playerId: 'player1' | 'player2';
}

const BingoList: React.FC<BingoListProps> = props => {
  const { playerId } = props;

  const player = useSelector<AppState, playerStatus>(
    state => state.bingo[playerId]
  );

  return (
    <List>
      {player.cellNumbers.map((value, index) => (
        <BingoCell key={index} value={value} />
      ))}
    </List>
  );
};

export default BingoList;
