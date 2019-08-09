import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { PlayerId } from '../store/bingo/types';
import BingoList from './BingoList';

const Root = styled.div`
  padding: 32px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PlayerIdTypo = styled.h2<{ isCurrentPlayer: boolean }>`
  display: inline-block;
  color: ${props => (props.isCurrentPlayer ? 'white' : 'black')};
  background-color: ${props => (props.isCurrentPlayer ? 'turquoise' : 'none')};
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 24px;
  text-align: center;
`;

interface UserScreenProps {
  playerId: 'player1' | 'player2';
}

const UserScreen: React.FC<UserScreenProps> = props => {
  const { playerId } = props;

  const currentPlayerId = useSelector<AppState, PlayerId | undefined>(
    state => state.bingo.currentPlayerId
  );

  return (
    <Root>
      <TitleWrapper>
        <PlayerIdTypo isCurrentPlayer={currentPlayerId === playerId}>
          {playerId}
        </PlayerIdTypo>
      </TitleWrapper>

      <BingoList playerId={playerId} />
    </Root>
  );
};

export default UserScreen;
