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
// Button.
// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   font-size: 40px;
//   cursor: pointer;
// `;

interface BingoCellProps {
  value: number | null;
  isOpened?: boolean;
}

const BingoCell: React.FC<BingoCellProps> = props => {
  const { value, isOpened = false } = props;
  return <CellButton primary={isOpened}>{value}</CellButton>;
};

export default BingoCell;
