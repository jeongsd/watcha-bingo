import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BingoList from './BingoList';
import Button from './Button';

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
  }
`;
const Root = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <Root>
      <div>
        <Button primary>게임 시작</Button>
        <BingoList />
        <GlobalStyle />
      </div>
    </Root>
  );
};

export default App;
