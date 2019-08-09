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

const BingoListWrapper = styled.div<{ isCurrentPlayer: boolean }>`
  opacity: ${props => (props.isCurrentPlayer ? 1 : 0.55)};
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

  const isCurrentPlayer = currentPlayerId === playerId;
  return (
    <Root>
      <TitleWrapper>
        <PlayerIdTypo isCurrentPlayer={isCurrentPlayer}>
          {playerId}
        </PlayerIdTypo>
      </TitleWrapper>

      <BingoListWrapper isCurrentPlayer={isCurrentPlayer}>
        <BingoList playerId={playerId} />
      </BingoListWrapper>
    </Root>
  );
};

export default UserScreen;
