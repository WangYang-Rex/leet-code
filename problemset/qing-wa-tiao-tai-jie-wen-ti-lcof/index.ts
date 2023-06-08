export function numWays(n: number): number {
  const DP = new Array(n + 1).fill(0);
  DP[0] = 1;
  DP[1] = 1;

  for (let i = 2; i <= n; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 1000000007;
  }
  return DP[n]
}
