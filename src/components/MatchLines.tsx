import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { MatchLine } from '../store/bingo/types';

const MatchLines: React.FC = props => {
  const { player1, player2 } = useSelector<
    AppState,
    { player1: MatchLine[]; player2: MatchLine[] }
  >(state => ({
    player1: state.bingo.player1.matchLines,
    player2: state.bingo.player2.matchLines
  }));

  let matchLines = [
    ...player1.map(item => ({ playerId: 'player1', ...item })),
    ...player2.map(item => ({ playerId: 'player2', ...item }))
  ];

  return (
    <div>
      {matchLines
        // @ts-ignore
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((matchLine, index) => (
          <p key={index}>
            [{matchLine.date.toLocaleString('ko-KR')}]{' '}
            <b>{matchLine.playerId}</b>가 {JSON.stringify(matchLine.indexes)}를
            완성했습니다.
          </p>
        ))}
    </div>
  );
};

export default MatchLines;
