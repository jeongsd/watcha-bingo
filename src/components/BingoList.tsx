import React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';
import BingoCell from './BingoCell';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
  grid-gap: 16px;
`;

interface BingoListProps {
  value?: number;
}

const BingoList: React.FC<BingoListProps> = props => {
  const list = times(25, Number);

  return (
    <List>
      {list.map(item => (
        <BingoCell key={item} isOpened={!!(item % 2)} value={item + 1} />
      ))}
    </List>
  );
};

export default BingoList;
