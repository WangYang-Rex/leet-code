/**
 * 暴力
 */
export function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  let fu = false;
  if (n < 0) {
    n = n * -1;
    fu = true;
  }
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * x
  }
  if (fu) {
    res = 1 / res;
  }
  return Number(res.toFixed(5))
}

/**
 * 快速幂
 */
export function myPow1(x: number, n: number): number {
  if (n === 0) return 1;
  let fu = false;
  if (n < 0) {
    n = n * -1;
    fu = true;
  }
  // 快速幂
  let res = x;
  let i = 1;
  while (i < n) {
    if (i * 2 <= n) {
      res = res * res;
      i = i * 2
    } else {
      res = res * x;
      i = i + 1;
    }
  }
  if (fu) {
    res = 1 / res;
  }
  return Number(res.toFixed(5))
}
