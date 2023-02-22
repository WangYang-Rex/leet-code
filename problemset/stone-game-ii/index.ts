const dp = (memo: Map<any, any>, piles: string | any[], prefixSum: any[], i: number, m: number) => {
  if (i === piles.length) {
    return 0;
  }
  const key = i * 201 + m;
  if (!memo.has(key)) {
    let maxVal = -Number.MAX_VALUE;
    for (let x = 1; x <= 2 * m; x++) {
      if (i + x > piles.length) {
        break;
      }
      maxVal = Math.max(maxVal, prefixSum[i + x] - prefixSum[i] - dp(memo, piles, prefixSum, i + x, Math.max(m, x)));
    }
    memo.set(key, maxVal);
  }
  return memo.get(key);
};

export function stoneGameII(piles: number[]): number {
  const prefixSum = new Array(piles.length + 1).fill(0);
  for (let i = 0; i < piles.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + piles[i];
  }

  const memo = new Map();
  return Math.floor((prefixSum[piles.length] + dp(memo, piles, prefixSum, 0, 1)) / 2);
}
