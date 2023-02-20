export function arrangeCoins(n: number): number {
  let res = 1;
  let all = 0;
  for (let i = 1; i <= n; i++) {
    all = all + i;
    if (all === n) {
      res = i
      break;
    } else if (all > n) {
      res = i - 1;
      break;
    }
  }
  return res
}
