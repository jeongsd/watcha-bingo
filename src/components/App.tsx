import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import UserScreen from './UserScreen';
import Button from './Button';
import PlayButton from './PlayButton';

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;
const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const GameScreen = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;

const App: React.FC = () => {
  return (
    <Root>
      <div>
        <ButtonWrapper>
          <PlayButton />
        </ButtonWrapper>

        <GameScreen>
          <UserScreen playerId="player1" />
          <UserScreen playerId="player2" />
        </GameScreen>
        <GlobalStyle />
      </div>
    </Root>
  );
};

export default App;
