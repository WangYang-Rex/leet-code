export function convertToTitle(columnNumber: number): string {
  let ans = '';
  const A = 'A'.charCodeAt(0) - 1;
  while (columnNumber > 0) {
    let B = parseInt((columnNumber / 26).toString());
    let C = columnNumber % 26;
    if (C === 0) {
      C = 26;
      B = B - 1
    }
    ans = String.fromCharCode(A + C) + ans;
    columnNumber = B;
  }
  // console.log(ans)
  return ans;
}

convertToTitle(1)
convertToTitle(26)
convertToTitle(27)
convertToTitle(701)

// 26 => Z
// 27 => AA