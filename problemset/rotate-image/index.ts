/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): any {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    const newArr = [];
    for (let j = len - 1; j >= 0; j--) {
      newArr.push(matrix[j][i]);
    }
    matrix.push(newArr)
  }
  matrix.splice(0, len);
  return matrix;
}
