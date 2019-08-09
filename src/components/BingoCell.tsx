import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const CellButton = styled(Button)`
  width: 100%;
  height: 100%;
  font-size: 40px;
  margin: 0px;
  padding: 0px;
`;

interface BingoCellProps {
  value: number | null;
  isOpened?: boolean;
  onSelect?(num: number): void;
}

const BingoCell: React.FC<BingoCellProps> = props => {
  const { onSelect, value, isOpened = false } = props;
  function handleClick() {
    if (value && onSelect) {
      onSelect(value);
    }
  }
  return (
    <CellButton onClick={handleClick} primary={isOpened}>
      {value}
    </CellButton>
  );
};

export default BingoCell;
