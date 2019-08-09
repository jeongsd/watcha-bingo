import { MatchLineIndexes } from './types';

type CalcFn = (j: number) => number;

function isMatch(indexes: number[], calcFn: CalcFn): boolean {
  return (
    [1, 2, 3, 4].reduce((pre, j) => {
      if (indexes.includes(calcFn(j))) {
        return pre + 1;
      }
      return pre;
    }, 0) === 4
  );
}

function getMatchLines(selectIndexes: number[]): MatchLineIndexes[] {
  const indexes = selectIndexes.sort();
  const matchLines: MatchLineIndexes[] = [];

  for (let i = 0; i < indexes.length; i++) {
    const selectIndex = indexes[i];

    if (selectIndex <= 4 && isMatch(indexes, j => selectIndex + j * 5)) {
      matchLines.push([
        selectIndex,
        ...[1, 2, 3, 4].map(j => selectIndex + j * 5)
      ] as MatchLineIndexes);
    }
    if (selectIndex % 5 === 0 && isMatch(indexes, j => selectIndex + j)) {
      matchLines.push([
        selectIndex,
        ...[1, 2, 3, 4].map(j => selectIndex + j)
      ] as MatchLineIndexes);
    }
    if (selectIndex === 0 && isMatch(indexes, j => j * 6)) {
      matchLines.push([
        selectIndex,
        ...[1, 2, 3, 4].map(j => j * 6)
      ] as MatchLineIndexes);
    }
    if (selectIndex === 4 && isMatch(indexes, j => 4 + j * 4)) {
      matchLines.push([
        selectIndex,
        ...[1, 2, 3, 4].map(j => 4 + j * 4)
      ] as MatchLineIndexes);
    }
  }

  return matchLines;
}

export default getMatchLines;
