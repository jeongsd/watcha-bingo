import React from 'react';
import styled from 'styled-components';
import BingoList from './BingoList';

const Root = styled.div`
  padding: 32px;
`;

const PlayerId = styled.h3`
  margin-bottom: 16px;
  text-align: center;
`;

interface UserScreenProps {
  playerId: number;
}

const UserScreen: React.FC<UserScreenProps> = props => {
  const { playerId } = props;

  return (
    <Root>
      <PlayerId>플레이어 {playerId}</PlayerId>

      <BingoList />
    </Root>
  );
};

export default UserScreen;
