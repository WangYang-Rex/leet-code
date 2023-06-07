export function minCostClimbingStairs(cost: number[]): number {
  const length = cost.length;
  const DP = new Array(length);

  for (let i = 0; i <= length; i++) {
    if (i === 0 || i === 1) {
      DP[i] = cost[i];
    }
    else {
      DP[i] = Math.min(DP[i - 1], DP[i - 2]) + (cost[i] || 0);
    }
  }
  return DP[length];
}
