import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 40px;
  cursor: pointer;
`;

interface BingoCellProps {
  value: number;
  isOpened?: boolean;
}

const BingoCell: React.FC<BingoCellProps> = props => {
  const { value, isOpened = false } = props;
  return <Button>{isOpened ? value : ''}</Button>;
};

export default BingoCell;
