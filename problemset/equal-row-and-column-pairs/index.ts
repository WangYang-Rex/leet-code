export function equalPairs(grid: number[][]): number {
  const obj: Record<string, { row: number; col: number }> = {};
  let arr: number[], str: string;
  // 遍历行
  for (let r = 0; r < grid.length; r++) {
    arr = grid[r];
    str = arr.join(',');
    if (obj[str]) {
      obj[str].row++;
    } else {
      obj[str] = {
        row: 1,
        col: 0,
      }
    }
  }
  // 遍历列
  for (let c = 0; c < grid.length; c++) {
    arr = []
    for (let r = 0; r < grid.length; r++) {
      arr.push(grid[r][c])
    }
    str = arr.join(',');
    if (obj[str]) {
      obj[str].col++;
    } else {
      obj[str] = {
        row: 0,
        col: 1,
      }
    }
  }

  let ans = 0;
  Object.keys(obj).forEach((key: string) => {
    ans = ans + obj[key].row * obj[key].col;
  })
  return ans;
}

// equalPairs([[13, 13], [13, 13]]);
