import { MatchLineIndexes } from './types';

type CalcFn = (j: number) => number;

function matchCalc(
  indexes: number[],
  calcFn: CalcFn
): { isMatch: boolean; calcIndexes: number[] } {
  const { sum, calcIndexes } = [1, 2, 3, 4].reduce<{
    sum: number;
    calcIndexes: number[];
  }>(
    (pre, j) => {
      const calcIndex = calcFn(j);
      if (indexes.includes(calcIndex)) {
        pre.sum += 1;
        pre.calcIndexes.push(calcIndex);
      }
      return pre;
    },
    { sum: 0, calcIndexes: [] }
  );

  return {
    isMatch: sum === 4,
    calcIndexes
  };
}

function getMatchLineIndexes(selectIndexes: number[]): MatchLineIndexes[] {
  const indexes = selectIndexes.sort();
  const matchLines: MatchLineIndexes[] = [];

  for (let i = 0; i < indexes.length; i++) {
    const selectIndex = indexes[i];

    // 세로
    if (selectIndex <= 4) {
      const { isMatch, calcIndexes } = matchCalc(
        indexes,
        j => selectIndex + j * 5
      );
      if (isMatch) matchLines.push(calcIndexes as MatchLineIndexes);
    }
    // 가로
    if (selectIndex % 5 === 0) {
      const { isMatch, calcIndexes } = matchCalc(indexes, j => selectIndex + j);
      if (isMatch) matchLines.push(calcIndexes as MatchLineIndexes);
    }

    // 대각선
    if (selectIndex === 0) {
      const { isMatch, calcIndexes } = matchCalc(indexes, j => j * 6);
      if (isMatch) matchLines.push(calcIndexes as MatchLineIndexes);
    }
    // 대각선
    if (selectIndex === 4) {
      const { isMatch, calcIndexes } = matchCalc(indexes, j => 4 + j * 4);
      if (isMatch) matchLines.push(calcIndexes as MatchLineIndexes);
    }
  }

  return matchLines;
}

export default getMatchLineIndexes;
