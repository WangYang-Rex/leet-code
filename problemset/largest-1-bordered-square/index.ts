/**
 * 模拟
 * @param grid
 * @returns
 */
export function largest1BorderedSquare(grid: number[][]): number {
  let max = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        let length = 1;
        while (grid[row][col + length] === 1) {
          length++;
        }
        for (let _l = length; _l > 0; _l--) {
          if (_l > max && checkIsBorderedSquare(grid, row, col, _l)) {
            max = Math.max(max, _l)
          }
        }
      }
    }
  }
  return max * max
}
/**
 * 验证是否是边框正方形
 * @param grid
 * @param row
 * @param col
 * @param length
 */
function checkIsBorderedSquare(grid: number[][], row: number, col: number, length: number): boolean {
  let res = true;

  for (let i = 0; i < length; i++) {
    // 判断下行
    if (!grid[row + length - 1]) {
      return false
    } else {
      if (grid[row + length - 1][col + i] !== 1) {
        res = false
      }
    }

    if (!grid[row + i]) {
      res = false;
    } else {
      // 判断左列
      if (grid[row + i][col] !== 1) {
        res = false
      }
      // 判断右列
      if (grid[row + i][col + length - 1] !== 1) {
        res = false
      }
    }
  }
  return res
}
