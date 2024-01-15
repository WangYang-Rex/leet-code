export function titleToNumber(columnTitle: string): number {
  let res = 0;
  const A = 'A'.charCodeAt(0) - 1;
  const n = columnTitle.length;
  for (let i = 0; i < n; i++) {
    const c = columnTitle.charCodeAt(n - 1 - i);
    // console.log(columnTitle[n - 1 - i], c)
    res = res + (c - A) * Math.pow(26, i)
  }
  return res;
}

// titleToNumber('ZY'); // AB ZY
