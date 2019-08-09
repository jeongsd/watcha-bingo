import React from 'react';
import styled from 'styled-components';
import BingoList from './BingoList';

const Root = styled.div`
  padding: 32px;
  /* display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
  grid-gap: 16px; */
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
