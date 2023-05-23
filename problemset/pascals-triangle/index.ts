export function generate(numRows: number): number[][] {
  const res: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row[j] = 1;
      } else {
        row[j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
    res.push(row);
  }
  return res;
}
