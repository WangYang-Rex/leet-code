export function maxEqualRowsAfterFlips(matrix: number[][]): number {
  // 找出本质相同的行
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] === 1 ? matrix[i][j] = 0 : matrix[i][j] = 1
      }
    }
  }
  const obj: any = {};
  for (let i = 0; i < matrix.length; i++) {
    const rowstr = matrix[i].join('');
    if (obj[rowstr]) {
      obj[rowstr] = obj[rowstr] + 1;
    } else {
      obj[rowstr] = 1
    }
  }
  let res = 0;
  Object.keys(obj).forEach((key) => {
    res = Math.max(res, obj[key])
  })
  return res
}
