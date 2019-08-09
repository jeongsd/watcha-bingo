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

function isBingo(selectIndexes: number[]) {
  const indexes = selectIndexes.sort();
  for (let i = 0; i < indexes.length; i++) {
    const selectIndex = indexes[i];

    if (selectIndex <= 4 && isMatch(indexes, j => selectIndex + j * 5)) {
      return true;
    }
    if (selectIndex % 5 === 0 && isMatch(indexes, j => selectIndex + j)) {
      return true;
    }
    if (selectIndex === 0 && isMatch(indexes, j => j * 6)) {
      return true;
    }
    if (selectIndex === 4 && isMatch(indexes, j => 4 + j * 4)) {
      return true;
    }
  }

  return false;
}

export default isBingo;
