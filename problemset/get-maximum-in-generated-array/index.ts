export function getMaximumGenerated(n: number): number {
  if (n === 0) {
    return 0
  }
  const DP = new Array(n).fill(0);
  let ans = 1;
  DP[0] = 0;
  DP[1] = 1;
  for (let i = 1; i <= n; i++) {
    if (i * 2 <= n) {
      DP[i * 2] = DP[i];
      ans = Math.max(ans, DP[i * 2])
    } else {
      break;
    }
    if (i * 2 + 1 <= n) {
      DP[i * 2 + 1] = DP[i] + DP[i + 1];
      ans = Math.max(ans, DP[i * 2 + 1])
    } else {
      break;
    }
  }
  return ans;
}
