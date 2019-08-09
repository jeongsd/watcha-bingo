import React from 'react';
import styled from 'styled-components';
import BingoList from './BingoList';

const Root = styled.div`
  padding: 32px;
`;

const PlayerId = styled.h2`
  margin-bottom: 24px;
  text-align: center;
`;

interface UserScreenProps {
  playerId: 'player1' | 'player2';
}

const UserScreen: React.FC<UserScreenProps> = props => {
  const { playerId } = props;

  return (
    <Root>
      <PlayerId>{playerId}</PlayerId>

      <BingoList playerId={playerId} />
    </Root>
  );
};

export default UserScreen;
