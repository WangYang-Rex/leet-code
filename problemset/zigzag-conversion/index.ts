export function convert(s: string, numRows: number): string {
  // 构建二维数组
  const arrs: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    arrs.push([])
  }
  let currentRow = 0;
  let currentCol = 0;
  let fangxiang = 'down'
  if (numRows === 1) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    arrs[currentRow][currentCol] = s[i];
    // 判断下一个位置
    if (fangxiang === 'down') {
      // 判断是否是最后一行
      if (currentRow === numRows - 1) {
        fangxiang = 'up'
        currentRow = currentRow - 1;
        currentCol = currentCol + 1;
      } else {
        currentRow = currentRow + 1;
      }
    } else {
      // 判断是否第一行
      if (currentRow === 0) {
        fangxiang = 'down';
        currentRow = currentRow + 1;
      } else {
        currentRow = currentRow - 1;
        currentCol = currentCol + 1;
      }
    }
  }
  let res = '';
  for (let i = 0; i < arrs.length; i++) {
    res += arrs[i].join('')
  }
  return res;
}
